"use client"

import type React from "react"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

// スライダーのデータ
const slides = [
  {
    id: 1,
    image: "/images/hero-owl.jpeg",
    title: "NEW VALUE UNLOCKED BY THE DIGITAL EYE",
    description:
      "人の目で捉えられるものだけでなく、見過ごされがちな「見えない」情報さえも、画像解析の力で浮かび上がる。その膨大なデータの中に無限の可能性が秘められている。",
    link: "/research",
  },
  {
    id: 2,
    image: "/images/hero-students.jpg",
    title: "STUDENTS",
    description: "研究室での学びと成長の機会が待っています。共に未来を切り拓きましょう。",
    link: "/students",
  },
  {
    id: 3,
    image: "/images/hero-research.jpg",
    title: "RESEARCH",
    description: "画像処理と機械学習を用いて、社会に貢献しています。",
    link: "/research",
  },
  {
    id: 4,
    image: "/images/hero-collaboration.jpg",
    title: "COLLABORATION",
    description: "産学連携で新たな価値を創造します。",
    link: "/research/collaborations",
  },
]

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }, [])

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
    // 5秒後に自動再生を再開
    setTimeout(() => setIsAutoPlaying(true), 5000)
  }, [])

  // タッチイベントハンドラー
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // 左スワイプ
      nextSlide()
    }

    if (touchStart - touchEnd < -50) {
      // 右スワイプ
      prevSlide()
    }
  }

  // 自動スライド
  useEffect(() => {
    let interval: NodeJS.Timeout

    if (isAutoPlaying) {
      interval = setInterval(() => {
        nextSlide()
      }, 5000)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isAutoPlaying, nextSlide])

  return (
    <div
      className="relative h-[60vh] md:h-[80vh] overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* スライド */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000",
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0",
          )}
        >
          <div className="relative h-full w-full">
            <Image
              src={slide.image || "/placeholder.svg"}
              alt={slide.title}
              fill
              priority={index === 0}
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-12 lg:px-24 text-white">
              <div className="max-w-3xl">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{slide.title}</h1>
                <p className="text-lg md:text-xl mb-6 max-w-2xl">{slide.description}</p>
                <Link href={slide.link}>
                  <Button variant="outline" className="text-white border-white hover:bg-white hover:text-gray-900">
                    詳しく見る
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* ナビゲーションボタン */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 text-white hover:bg-black/20"
        onClick={prevSlide}
        aria-label="前のスライド"
      >
        <ChevronLeft className="h-8 w-8" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 text-white hover:bg-black/20"
        onClick={nextSlide}
        aria-label="次のスライド"
      >
        <ChevronRight className="h-8 w-8" />
      </Button>

      {/* インジケーター */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={cn(
              "w-3 h-3 rounded-full transition-all",
              index === currentSlide ? "bg-white scale-125" : "bg-white/50 hover:bg-white/80",
            )}
            onClick={() => goToSlide(index)}
            aria-label={`スライド ${index + 1} に移動`}
          />
        ))}
      </div>
    </div>
  )
}
