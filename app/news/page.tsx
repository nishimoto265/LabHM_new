"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useLanguage } from "@/contexts/language-context"
import { newsTranslations } from "@/translations/news"

// カテゴリーキーの型定義
type CategoryKey = "all" | "announcement" | "research" | "lecture" | "activity"

export default function NewsPage() {
  const { language } = useLanguage()
  const t = newsTranslations[language]

  // 言語非依存のカテゴリーキーを使用
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("all")

  // カテゴリーに応じた背景色を返す関数
  const getCategoryBgColor = (category: string) => {
    const categoryMap: Record<string, string> = {
      お知らせ: "bg-yellow-600",
      研究: "bg-green-600",
      講義: "bg-blue-600",
      活動: "bg-red-600",
      Announcement: "bg-yellow-600",
      Research: "bg-green-600",
      Lecture: "bg-blue-600",
      Activity: "bg-red-600",
    }
    return categoryMap[category] || "bg-gray-600"
  }

  // カテゴリーキーと表示名のマッピング
  const categoryKeys: CategoryKey[] = ["all", "announcement", "research", "lecture", "activity"]

  return (
    <div className="min-h-screen flex flex-col">
      {/* メインコンテンツ */}
      <div className="flex-grow">
        <div className="py-16">
          {/* News タイトル */}
          <div className="text-center mb-16">
            <div className="relative w-full max-w-xs mx-auto h-20 mb-2">
              <Image src="/images/news.png" alt="News" fill className="object-contain" priority />
            </div>
            <p className="text-xl">{t.subtitle}</p>
          </div>

          <div className="container">
            <Tabs
              value={activeCategory}
              onValueChange={(value) => setActiveCategory(value as CategoryKey)}
              className="w-full"
            >
              <div className="flex justify-center mb-6">
                <TabsList className="grid grid-cols-2 md:grid-cols-5 w-full max-w-2xl border border-black rounded-none bg-white p-0 overflow-hidden md:h-12 h-auto">
                  {categoryKeys.map((key) => (
                    <TabsTrigger
                      key={key}
                      value={key}
                      className="data-[state=active]:bg-black data-[state=active]:text-white rounded-none h-full flex items-center justify-center px-1 text-sm"
                    >
                      {t.categories[key]}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              {categoryKeys.map((categoryKey) => (
                <TabsContent key={categoryKey} value={categoryKey} className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {t.newsItems
                      .filter((news) => categoryKey === "all" || news.categoryKey === categoryKey)
                      .map((news) => (
                        <Link key={news.id} href={`/news/${news.id}`} className="group">
                          <div className="overflow-hidden h-full transition-all hover:shadow-md bg-white border-b border-gray-200">
                            <div className="relative h-48 overflow-hidden">
                              <Image
                                src="/placeholder.svg?height=300&width=400"
                                alt="ニュース画像"
                                fill
                                className="object-cover transition-transform group-hover:scale-105"
                              />
                              <div
                                className={`absolute top-2 left-2 ${getCategoryBgColor(news.category)} text-white text-xs px-2 py-1 rounded`}
                              >
                                {news.category}
                              </div>
                              <div className="absolute top-2 right-2 bg-white text-gray-800 text-xs px-2 py-1 rounded">
                                {news.date}
                              </div>
                            </div>
                            <div className="p-4">
                              <h3 className="font-medium line-clamp-2 group-hover:text-primary transition-colors">
                                {news.title}
                              </h3>
                            </div>
                          </div>
                        </Link>
                      ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}
