#!/bin/bash

echo "静的サイトのパスをimagelab用に修正中..."

# 画像パスを絶対パス（/imagelab/images/）に修正
find static-site -name "*.html" -exec sed -i \
    -e 's|src="/images/|src="/imagelab/images/|g' \
    -e 's|href="/images/|href="/imagelab/images/|g' \
    -e 's|src="/logo\.png"|src="/imagelab/logo.png"|g' \
    {} \;

echo "パス修正完了！"
echo "static-site/ ディレクトリの中身をサーバーにアップロードしてください。" 