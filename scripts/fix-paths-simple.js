#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      walkDir(filePath, callback);
    } else if (file.endsWith('.html')) {
      callback(filePath);
    }
  });
}

function fixRelativePaths(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // 階層の深さを計算
  const relativePath = path.relative('./out', filePath);
  const depth = relativePath.split('/').length - 1;
  
  // 置換のマッピング
  const replacements = [
    // _next関連の絶対パスを相対パスに変換
    { from: /href="\/_next\//g, to: depth > 0 ? `href="../_next/` : `href="./_next/` },
    { from: /src="\/_next\//g, to: depth > 0 ? `src="../_next/` : `src="./_next/` },
    
    // images関連の絶対パスを相対パスに変換
    { from: /href="\/images\//g, to: depth > 0 ? `href="../images/` : `href="./images/` },
    { from: /src="\/images\//g, to: depth > 0 ? `src="../images/` : `src="./images/` },
    
    // logo.png
    { from: /src="\/logo\.png"/g, to: depth > 0 ? `src="../logo.png"` : `src="./logo.png"` },
  ];
  
  // 置換を実行
  replacements.forEach(replacement => {
    content = content.replace(replacement.from, replacement.to);
  });
  
  fs.writeFileSync(filePath, content);
  console.log(`Fixed: ${filePath} (depth: ${depth})`);
}

const outDir = './out';

if (!fs.existsSync(outDir)) {
  console.error('out ディレクトリが見つかりません');
  process.exit(1);
}

console.log('HTMLファイルのパスを相対パスに変換中...');

walkDir(outDir, fixRelativePaths);

console.log('完了しました！'); 