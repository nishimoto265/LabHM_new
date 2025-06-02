# ビルドと開発サーバー

## 自動化されたビルドプロセス

### 静的サイトのビルド

```bash
npm run build:static
```

このコマンドは以下を自動的に実行します：

1. **静的エクスポート**: `STATIC_EXPORT=true`でNext.jsをビルド
2. **ディレクトリ構造作成**: `out/imagelab/`構造を作成
3. **ファイル移動**: 全ての生成ファイルを`imagelab/`に移動
4. **リダイレクト設定**: ルートアクセス用の`index.html`を作成
5. **Apache設定**: `htaccess.txt`を`imagelab/`ディレクトリに配置

### 開発サーバーの起動

```bash
npm run server
```

このコマンドで開発サーバーが起動し、以下でアクセス可能になります：

- **メインサイト**: http://localhost:8000/imagelab/
- **ルートリダイレクト**: http://localhost:8000/ → `/imagelab/`に自動リダイレクト
- **htaccess設定**: http://localhost:8000/imagelab/htaccess.txt

### 完全なワークフロー

```bash
# 1. 静的サイトをビルド
npm run build:static

# 2. サーバーを起動
npm run server

# 3. ブラウザでアクセス
# http://localhost:8000/imagelab/
```

## ファイル構造

ビルド後の`out`ディレクトリ構造：

```
out/
├── index.html          # ルートリダイレクト用
└── imagelab/           # メインサイト
    ├── htaccess.txt    # Apache 2.2設定
    ├── index.html      # ホームページ
    ├── _next/          # Next.jsアセット
    ├── images/         # 画像ファイル
    └── ...             # 他のページ
```

## 注意事項

- Apache 2.2対応の`.htaccess`設定
- `basePath: '/imagelab'`でパス設定済み
- 研究セクションで画像とタイトル間に境界線を追加済み
- 新メンバー「Myo Pone Pone Swe」追加済み 