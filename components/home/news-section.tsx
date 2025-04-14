"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// ニュースのデータ
const newsData = [
  {
    id: 1,
    category: "お知らせ",
    date: "2025.02.21",
    title: "SAKURA Science Project FareWell Partyが開催されました",
    image: "/images/news-1.jpg",
    link: "/news/1",
  },
  {
    id: 2,
    category: "研究",
    date: "2025.01.09",
    title: "PSUに行ってきました。楽しかった！",
    image: "/images/news-2.jpg",
    link: "/news/2",
  },
  {
    id: 3,
    category: "講義",
    date: "2024.09.28",
    title: "ホクレン新千歳牧場ー武井さんありがとうございます！",
    image: "/images/news-3.jpg",
    link: "/news/3",
  },
  {
    id: 4,
    category: "活動",
    date: "2024.07.30",
    title: "卒業式なり！おめでとう！",
    image: "/images/news-4.jpg",
    link: "/news/4",
  },
]

// カテゴリーのリスト
const categories = ["すべて", "お知らせ", "研究", "講義", "活動"]

// カテゴリーに応じた背景色を返す関数
const getCategoryBgColor = (category: string) => {
  switch (category) {
    case "お知らせ":
      return "bg-yellow-600"
    case "研究":
      return "bg-green-600"
    case "講義":
      return "bg-blue-600"
    case "活動":
      return "bg-red-600"
    default:
      return "bg-gray-600"
  }
}

export default function NewsSection() {
  const [activeCategory, setActiveCategory] = useState("すべて")

  // カテゴリーでフィルタリングされたニュース
  const filteredNews =
    activeCategory === "すべて" ? newsData : newsData.filter((news) => news.category === activeCategory)

  return (
    <div>
      <Tabs defaultValue="すべて" className="w-full">
        <div className="flex justify-center mb-6">
          <TabsList className="grid grid-cols-2 md:grid-cols-5">
            {categories.map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                onClick={() => setActiveCategory(category)}
                className="px-4 py-2"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        <TabsContent value={activeCategory} className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredNews.map((news) => (
              <Link key={news.id} href={news.link} className="group">
                <div className="overflow-hidden h-full transition-all hover:shadow-md bg-white">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={news.image || "/placeholder.svg"}
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
      </Tabs>

      <div className="flex justify-center mt-8">
        <Link href="/news">
          <Button variant="outline" className="font-medium">
            もっと見る
          </Button>
        </Link>
      </div>
    </div>
  )
}
