'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface StaticImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  fill?: boolean
  priority?: boolean
  className?: string
  style?: React.CSSProperties
  onLoad?: () => void
  onError?: () => void
  sizes?: string
  quality?: number
  placeholder?: 'blur' | 'empty'
  blurDataURL?: string
  objectFit?: string
  objectPosition?: string
}

export function StaticImage({ 
  src, 
  alt, 
  className,
  style,
  onLoad,
  onError,
  ...props 
}: StaticImageProps) {
  const [imageSrc, setImageSrc] = useState(src)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    // クライアントサイドでパスを調整
    if (typeof window !== 'undefined') {
      const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''
      let finalSrc = src
      
      // 相対パスを絶対パスに変換
      if (src.startsWith('./')) {
        finalSrc = src.slice(1)
      }
      
      // basePathを考慮
      if (basePath && !finalSrc.includes(basePath) && finalSrc.startsWith('/')) {
        finalSrc = `${basePath}${finalSrc}`
      }
      
      setImageSrc(finalSrc)
    }
  }, [src])

  const handleError = () => {
    setIsError(true)
    onError?.()
  }

  const handleLoad = () => {
    setIsError(false)
    onLoad?.()
  }

  // エラー時のフォールバック
  if (isError) {
    return (
      <div 
        className={cn('bg-gray-200 flex items-center justify-center', className)}
        style={style}
      >
        <span className="text-gray-500 text-sm">画像を読み込めません</span>
      </div>
    )
  }

  return (
    <Image
      {...props}
      src={imageSrc}
      alt={alt}
      className={className}
      style={style}
      unoptimized
      onLoad={handleLoad}
      onError={handleError}
    />
  )
}