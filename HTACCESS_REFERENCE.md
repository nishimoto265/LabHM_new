# .htaccess設定リファレンス

## 🔍 重要な発見事項

### サーバー環境
- **サーバー**: 宮崎大学 Apache サーバー
- **Apache バージョン**: 2.2 互換性が必要
- **ベースURL**: `https://www.cc.miyazaki-u.ac.jp/imagelab/`

### 動作する設定形式

#### ✅ 正しいアクセス制御（Apache 2.2形式）
```apache
order deny,allow
deny from all
allow from all
```

#### ❌ 動作しない設定（Apache 2.4形式）
```apache
Require all granted
```

## 📋 基本的な.htaccess テンプレート

### 最小構成
```apache
# 古い形式のアクセス制御（Apache 2.2互換）
order deny,allow
deny from all
allow from all
```

### リダイレクト付き構成
```apache
# 古い形式のアクセス制御（Apache 2.2互換）
order deny,allow
deny from all
allow from all

# デフォルトページ設定
DirectoryIndex index.html

# リライトエンジン有効化
RewriteEngine On

# home.php -> index.html へのリダイレクト
RewriteRule ^home\.php$ /imagelab/index.html [L,R=301]

# ルートアクセス時のリダイレクト
RewriteRule ^$ /imagelab/index.html [L]
```

## 🎯 Next.js用完全版テンプレート

```apache
# 古い形式のアクセス制御（Apache 2.2互換）
order deny,allow
deny from all
allow from all

# デフォルトページ設定
DirectoryIndex index.html

# リライトエンジン有効化
RewriteEngine On

# home.php -> index.html へのリダイレクト
RewriteRule ^home\.php$ /imagelab/index.html [L,R=301]

# ルートアクセス時
RewriteRule ^$ /imagelab/index.html [L]

# HTML拡張子なしでアクセス可能にする
RewriteCond %{REQUEST_FILENAME}.html -f
RewriteRule ^(.*)$ $1.html [L]

# 存在しないページは404.htmlへ
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ /imagelab/404.html [L]
```

## 🚀 詳細デプロイ手順

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

## 🔧 トラブルシューティング

### htaccess.txtが見えない場合
- outディレクトリを再確認
- ビルドコマンドを再実行
- npm run build:staticが正常に完了したか確認

### 名前変更ができない場合
- ファイル権限を確認
- 一度ダウンロードしてから再アップロード
- FileZillaの管理者権限で接続

### 403エラーが続く場合
- `.htaccess`ファイルが正しく作成されているか確認
- ファイル内容がApache 2.2形式になっているか確認
- サーバー上のファイル権限を確認

### 500エラーが発生する場合
- Apache 2.4形式（Require all granted）を使用していないか確認
- 古い形式（order deny,allow）に変更

## ⚠️ 重要な注意点

1. **絶対パスを使用**: `/imagelab/` から始める
2. **Apache 2.2形式**: `order deny,allow` を使用
3. **RewriteRuleのフラグ**: `[L]` や `[L,R=301]` を正しく指定
4. **ファイル拡張子**: `.txt` でアップロードして `.htaccess` に名前変更
5. **隠しファイル問題**: FileZillaでは`.htaccess`が見えないため`htaccess.txt`経由でデプロイ

## 📁 ファイル構成例

```
/imagelab/
├── index.html
├── about.html
├── 404.html
└── .htaccess
```

## 🧪 テスト用URL

- 直接アクセス: `https://www.cc.miyazaki-u.ac.jp/imagelab/index.html`
- home.php: `https://www.cc.miyazaki-u.ac.jp/imagelab/home.php` → index.html
- ルート: `https://www.cc.miyazaki-u.ac.jp/imagelab/` → index.html

## 🎉 今後のデプロイ
この方法により、今後は以下の手順で簡単にデプロイできます：
1. `npm run build:static`
2. FileZillaでアップロード
3. `htaccess.txt` → `.htaccess`に名前変更
4. 動作確認

## ⚡ メリット
- ✅ 隠しファイルの問題を回避
- ✅ FileZillaで確実に表示される
- ✅ 手動操作で確実にコントロール可能
- ✅ 将来のデプロイも同じ手順で実行可能 