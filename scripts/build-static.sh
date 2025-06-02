#!/bin/bash

# 静的エクスポートでビルド
STATIC_EXPORT=true npm run build

# outディレクトリに移動
cd out

# imagelabディレクトリを作成し、全ファイルを移動
mkdir -p imagelab
mv * imagelab/ 2>/dev/null || true

# リダイレクト用のindex.htmlを作成
cat > index.html << 'EOF'
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Redirecting...</title>
    <meta http-equiv="refresh" content="0; url=/imagelab/">
    <script>
        window.location.href = '/imagelab/';
    </script>
</head>
<body>
    <p>リダイレクト中... <a href="/imagelab/">こちらをクリック</a></p>
</body>
</html>
EOF

# .htaccessファイルをimagelabディレクトリ内にhtaccess.txtとしてコピー
cp ../.htaccess imagelab/htaccess.txt

echo "✅ 静的ビルドが完了しました！"
echo "📁 ファイル構造: out/imagelab/"
echo "🌐 サーバー起動: cd out && python3 -m http.server 8000"
echo "🔗 アクセス: http://localhost:8000/imagelab/" 