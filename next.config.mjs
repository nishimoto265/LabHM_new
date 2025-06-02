import fs from 'fs'
import path from 'path'

let userConfig = undefined
try {
  // try to import ESM first
  userConfig = await import('./v0-user-next.config.mjs')
} catch (e) {
  try {
    // fallback to CJS import
    userConfig = await import("./v0-user-next.config");
  } catch (innerError) {
    // ignore error
  }
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // 静的エクスポート用の設定（STATIC_EXPORT環境変数がtrueの時のみ適用）
  ...(process.env.STATIC_EXPORT === 'true' && {
    basePath: '/imagelab',
    output: 'export',
    trailingSlash: true,
  }),
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
  // .htaccessファイルをoutディレクトリにコピー
  webpack: (config, { isServer }) => {
    if (!isServer && process.env.STATIC_EXPORT === 'true') {
      // .htaccessファイルをoutディレクトリにコピー
      config.plugins.push({
        apply: (compiler) => {
          compiler.hooks.afterEmit.tap('CopyHtaccess', () => {
            try {
              const htaccessSource = path.join(process.cwd(), '.htaccess')
              const htaccessDest = path.join(process.cwd(), 'out', '.htaccess')
              
              if (fs.existsSync(htaccessSource)) {
                fs.copyFileSync(htaccessSource, htaccessDest)
                console.log('✅ .htaccess copied to out directory')
              }
            } catch (error) {
              console.warn('⚠️ Failed to copy .htaccess:', error.message)
            }
          })
        }
      })
    }
    return config
  }
}

if (userConfig) {
  // ESM imports will have a "default" property
  const config = userConfig.default || userConfig

  for (const key in config) {
    if (
      typeof nextConfig[key] === 'object' &&
      !Array.isArray(nextConfig[key])
    ) {
      nextConfig[key] = {
        ...nextConfig[key],
        ...config[key],
      }
    } else {
      nextConfig[key] = config[key]
    }
  }
}

// ビルド後の処理で.htaccessファイルを生成
if (process.env.NODE_ENV === 'production') {
  const htaccessContent = `# 古い形式のアクセス制御（Apache 2.2互換）
order deny,allow
deny from all
allow from all

# デフォルトページ設定
DirectoryIndex index.html

# リライトエンジン有効化
RewriteEngine On

# home.php -> index.html へのリダイレクト
RewriteRule ^home\\.php$ /imagelab/index.html [L,R=301]

# ルートアクセス時
RewriteRule ^$ /imagelab/index.html [L]

# HTML拡張子なしでアクセス可能にする
RewriteCond %{REQUEST_FILENAME}.html -f
RewriteRule ^(.*)$ $1.html [L]

# 存在しないページは404.htmlへ
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ /imagelab/404.html [L]`;

  // outディレクトリが存在する場合のみ.htaccessファイルを作成
  const outDir = './out';
  if (fs.existsSync(outDir)) {
    fs.writeFileSync(path.join(outDir, '.htaccess'), htaccessContent);
    fs.writeFileSync(path.join(outDir, 'htaccess.txt'), htaccessContent);
    console.log('✅ .htaccess and htaccess.txt files created in out directory');
  }
}

export default nextConfig
