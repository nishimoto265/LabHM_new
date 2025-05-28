import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// 画像パスを正規化する関数（開発環境・本番環境共通）
export function getImagePath(path: string): string {
  // 開発環境では常に imagelab プレフィックスを除去して相対パスを返す
  if (process.env.NODE_ENV === 'development') {
    if (path.startsWith('/imagelab/')) {
      return path.replace('/imagelab', '')
    }
    // 相対パスの場合は適切な形式に変換
    if (path.startsWith('./')) {
      return path.replace('./', '/')
    }
    return path
  }
  
  // 本番環境（ビルド時）の処理 - /imagelab/ プレフィックスを追加
  if (path.startsWith('/imagelab/')) {
    // 既に /imagelab/ がある場合はそのまま返す
    return path
  }
  
  if (path.startsWith('./')) {
    // ./images/ → /imagelab/images/ に変換
    return path.replace('./', '/imagelab/')
  }
  
  if (path.startsWith('/')) {
    // /images/ → /imagelab/images/, /logo.png → /imagelab/logo.png に変換
    return `/imagelab${path}`
  }
  
  // その他の場合
  return `/imagelab/${path}`
}

// 背景画像のスタイルを生成する関数
export function getBackgroundImageStyle(imagePath: string) {
  return {
    backgroundImage: `url('${getImagePath(imagePath)}')`
  }
}
