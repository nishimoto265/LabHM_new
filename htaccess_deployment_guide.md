# .htaccess ファイル デプロイガイド

## 🎯 問題
- `.htaccess`ファイルは隠しファイルでFileZillaで見えない
- 直接アップロードが困難

## ✅ 解決方法：.txtファイル経由でアップロード

### 手順1: ローカルでビルド
```bash
npm run build:static
```
このコマンドで以下が自動実行されます：
- Next.jsの静的ビルド
- `.htaccess`ファイルを`out/`にコピー
- `htaccess.txt`ファイルを`out/`にコピー（FileZilla用）

### 手順2: ファイル確認
```bash
ls -la out/ | grep htaccess
```
以下の2つのファイルが存在することを確認：
- `.htaccess` (隠しファイル)
- `htaccess.txt` (通常ファイル)

### 手順3: FileZillaでアップロード
1. **outディレクトリの全内容を選択**
2. **本番サーバーにアップロード**
   - パス: `/var/www/html/imagelab/`
3. **`htaccess.txt`が正常にアップロードされることを確認**

### 手順4: サーバー上でファイル名変更
1. **FileZillaのサーバー側で`htaccess.txt`を右クリック**
2. **「名前の変更」を選択**
3. **ファイル名を`.htaccess`に変更**
4. **確認ダイアログで「はい」をクリック**

### 手順5: 動作確認
1. **ブラウザで確認**
   ```
   https://www.cc.miyazaki-u.ac.jp/imagelab/
   ```
2. **403エラーが解消されていることを確認**

## 🔍 トラブルシューティング

### htaccess.txtが見えない場合
- outディレクトリを再確認
- ビルドコマンドを再実行

### 名前変更ができない場合
- ファイル権限を確認
- 一度ダウンロードしてから再アップロード

### 403エラーが続く場合
- `.htaccess`ファイルが正しく作成されているか確認
- ファイル内容が正しいか確認

## 📝 .htaccessファイルの内容確認
```apache
# Apache configuration for static Next.js site

# Directory permissions
Options +Indexes +FollowSymLinks
AllowOverride All
Require all granted

# Enable rewrite engine
RewriteEngine On

# Default document
DirectoryIndex index.html

# Handle root requests
RewriteRule ^$ index.html [L]
```

## ⚡ 今後のデプロイ
この方法により、今後は以下の手順で簡単にデプロイできます：
1. `npm run build:static`
2. FileZillaでアップロード
3. `htaccess.txt` → `.htaccess`に名前変更
4. 動作確認

## 🎉 メリット
- ✅ 隠しファイルの問題を回避
- ✅ FileZillaで確実に表示される
- ✅ 手動操作で確実にコントロール可能
- ✅ 将来のデプロイも同じ手順で実行可能 