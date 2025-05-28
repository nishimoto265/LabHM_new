#!/bin/bash

# Find all pages with "use client" directive and create static versions
for file in $(find app -name "*.tsx" -type f -exec grep -l "^[\"']use client[\"']" {} \;); do
  echo "Processing: $file"
  
  # Skip if it's already a backup or if it's not a page file
  if [[ $file == *"-client.tsx.bak" ]] || [[ $file == *"layout.tsx" ]] || [[ ! $file == *"page.tsx" ]]; then
    continue
  fi
  
  # Create a backup
  cp "$file" "${file%.tsx}-client.tsx.bak"
  
  # Remove "use client" directive
  sed -i '1s/^"use client"$//' "$file"
  sed -i "1s/^'use client'$//" "$file"
  
  # Replace useLanguage() with const language = "ja"
  sed -i 's/const { language.*/const language = "ja"/' "$file"
  
  # Remove language context import
  sed -i '/import.*useLanguage.*from.*language-context/d' "$file"
  
  # Remove useState imports if not used elsewhere
  sed -i '/^import.*useState.*from.*react.*$/d' "$file"
  
  # Replace StaticImage with Image if needed
  sed -i 's/StaticImage/Image/g' "$file"
  sed -i '/import.*StaticImage.*from.*static-image/d' "$file"
  
  echo "Fixed: $file"
done

echo "All client pages have been processed"