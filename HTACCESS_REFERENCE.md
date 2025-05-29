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

## ⚠️ 重要な注意点

1. **絶対パスを使用**: `/imagelab/` から始める
2. **Apache 2.2形式**: `order deny,allow` を使用
3. **RewriteRuleのフラグ**: `[L]` や `[L,R=301]` を正しく指定
4. **ファイル拡張子**: `.txt` でアップロードして `.htaccess` に名前変更

## 🔧 デプロイ手順

1. `.htaccess` 内容を `htaccess.txt` として保存
2. FileZilla で `htaccess.txt` をアップロード
3. サーバー上で `htaccess.txt` → `.htaccess` に名前変更
4. ブラウザでテスト

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