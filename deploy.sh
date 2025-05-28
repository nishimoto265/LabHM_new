#!/bin/bash

# 本番環境へのデプロイスクリプト

# ターゲットディレクトリ（本番環境のパスに合わせて変更してください）
TARGET_DIR="/var/www/html/imagelab"

# 色付き出力
GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo "🚀 デプロイを開始します..."

# ビルドが存在するか確認
if [ ! -d "out" ]; then
    echo -e "${RED}❌ エラー: 'out' ディレクトリが見つかりません。先にビルドを実行してください。${NC}"
    echo "実行: STATIC_EXPORT=true npm run build"
    exit 1
fi

# ターゲットディレクトリが存在するか確認
if [ ! -d "$TARGET_DIR" ]; then
    echo -e "${RED}❌ エラー: ターゲットディレクトリ '$TARGET_DIR' が見つかりません。${NC}"
    echo "ディレクトリを作成するか、正しいパスを指定してください。"
    exit 1
fi

# 確認
echo "以下の設定でデプロイします:"
echo "  ソース: ./out/"
echo "  ターゲット: $TARGET_DIR"
read -p "続行しますか？ (y/N) " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "デプロイをキャンセルしました。"
    exit 0
fi

# バックアップ作成（オプション）
if [ -d "$TARGET_DIR" ] && [ "$(ls -A $TARGET_DIR)" ]; then
    BACKUP_DIR="${TARGET_DIR}_backup_$(date +%Y%m%d_%H%M%S)"
    echo "📦 既存のファイルをバックアップ中: $BACKUP_DIR"
    sudo cp -r "$TARGET_DIR" "$BACKUP_DIR"
fi

# ファイルをコピー
echo "📤 ファイルをコピー中..."
sudo rsync -av --delete out/ "$TARGET_DIR/"

# 権限の設定
echo "🔐 権限を設定中..."
sudo chown -R www-data:www-data "$TARGET_DIR"
sudo find "$TARGET_DIR" -type d -exec chmod 755 {} \;
sudo find "$TARGET_DIR" -type f -exec chmod 644 {} \;

# .htaccessファイルの確認
if [ -f "$TARGET_DIR/.htaccess" ]; then
    echo -e "${GREEN}✅ .htaccessファイルが正しくコピーされました。${NC}"
else
    echo -e "${RED}⚠️  警告: .htaccessファイルが見つかりません。${NC}"
fi

echo -e "${GREEN}✅ デプロイが完了しました！${NC}"
echo ""
echo "📌 次のステップ:"
echo "1. ブラウザで https://www.cc.miyazaki-u.ac.jp/imagelab/ を確認"
echo "2. メンバーページが正しく表示されることを確認"
echo "3. 画像が正しく読み込まれることを確認"
echo "4. ナビゲーションが正しく動作することを確認"

# 簡易的なヘルスチェック
echo ""
echo "🏥 ヘルスチェック中..."
if curl -s -o /dev/null -w "%{http_code}" "https://www.cc.miyazaki-u.ac.jp/imagelab/" | grep -q "200\|301\|302"; then
    echo -e "${GREEN}✅ サイトは正常に応答しています。${NC}"
else
    echo -e "${RED}⚠️  警告: サイトが正常に応答していない可能性があります。${NC}"
fi