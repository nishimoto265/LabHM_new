"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

import { useLanguage } from "@/contexts/language-context"
import { newsData, newsTags } from "@/translations/news-data"
import { getTagBgColor } from "@/lib/news-utils"

export default function NewsPage() {
  const { language } = useLanguage()
  const tags = newsTags[language]
  const news = newsData[language]

  const [activeTag, setActiveTag] = useState<string>(language === 'ja' ? "すべて" : "All")

  // 言語切り替え時にactiveTagを同期
  useEffect(() => {
    // タグの対応表
    const tagMapping = {
      "すべて": "All",
      "All": "すべて",
      "学生活動": "Student Activities",
      "Student Activities": "学生活動",
      "研究成果": "Research Achievements",
      "Research Achievements": "研究成果",
      "国際連携": "International Collaboration",
      "International Collaboration": "国際連携",
      "産学連携": "Industry-Academia Collaboration",
      "Industry-Academia Collaboration": "産学連携",
      "研究室運営": "Laboratory Management",
      "Laboratory Management": "研究室運営"
    }
    
    // 現在のactiveTagに対応するタグがあるかチェック
    const correspondingTag = tagMapping[activeTag as keyof typeof tagMapping]
    
    if (correspondingTag && tags.includes(correspondingTag)) {
      // 対応するタグが存在する場合はそれに切り替え
      setActiveTag(correspondingTag)
    } else {
      // 対応するタグがない場合は"すべて"/"All"にリセット
      const newAllTag = language === 'ja' ? "すべて" : "All"
      setActiveTag(newAllTag)
    }
  }, [language, tags, activeTag])

  // フィルターされたニュース
  let filteredNews = news

  // タグフィルタリング（"すべて"/"All"以外の場合）
  const allTagText = language === 'ja' ? "すべて" : "All"
  if (activeTag !== allTagText) {
    filteredNews = filteredNews.filter(item => item.tag === activeTag)
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* メインコンテンツ */}
      <div className="flex-grow">
        <div className="py-16">
          {/* News タイトル */}
          <div className="text-center mb-16">
            <div className="relative w-full max-w-md mx-auto h-16 mb-4">
              <Image src="/images/logo_news.png" alt="News" fill className="object-contain" priority />
            </div>
            <p className="text-lg">{language === 'ja' ? 'ニュース' : 'News'}</p>
          </div>

          <div className="container">


            {/* タグナビゲーション */}
            <div className="mb-8">
              <div className="flex justify-center">
                <div className="flex flex-wrap gap-2 max-w-4xl justify-center">
                  {tags.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => setActiveTag(tag)}
                      className={`px-4 py-2 text-sm border rounded-full transition-colors ${
                        activeTag === tag
                          ? "bg-black text-white border-black"
                          : "bg-white text-black border-gray-300 hover:bg-gray-100"
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* ニュース一覧 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredNews.map((newsItem) => (
                <div key={newsItem.id} className={newsItem.link ? "group" : ""}>
                  <div className="overflow-hidden h-full bg-white border-b border-gray-200">
                    <div className={`relative h-48 overflow-hidden ${newsItem.image && newsItem.image.trim() !== "" ? '' : 'bg-gray-50 flex items-center justify-center'}`}>
                      {newsItem.link ? (
                        newsItem.isExternal ? (
                          <a 
                            href={newsItem.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="block w-full h-full"
                          >
                            <Image
                              src={newsItem.image && newsItem.image.trim() !== "" ? newsItem.image : "/logo.png"}
                              alt={newsItem.title}
                              fill
                              className={`${(newsItem.image && newsItem.image.trim() !== "") ? 'object-cover' : 'object-contain p-4'} transition-transform group-hover:scale-105`}
                            />
                          </a>
                        ) : (
                          <Link 
                            href={newsItem.link} 
                            className="block w-full h-full"
                          >
                            <Image
                              src={newsItem.image && newsItem.image.trim() !== "" ? newsItem.image : "/logo.png"}
                              alt={newsItem.title}
                              fill
                              className={`${(newsItem.image && newsItem.image.trim() !== "") ? 'object-cover' : 'object-contain p-4'} transition-transform group-hover:scale-105`}
                            />
                          </Link>
                        )
                      ) :
                        <Image
                          src={newsItem.image && newsItem.image.trim() !== "" ? newsItem.image : "/logo.png"}
                          alt={newsItem.title}
                          fill
                          className={`${(newsItem.image && newsItem.image.trim() !== "") ? 'object-cover' : 'object-contain p-4'}`}
                        />
                      }
                      <div
                        className={`absolute top-2 left-2 ${getTagBgColor(newsItem.tag)} text-white text-xs px-2 py-1 rounded pointer-events-none`}
                      >
                        {newsItem.tag}
                      </div>
                      <div className="absolute top-2 right-2 bg-white text-gray-800 text-xs px-2 py-1 rounded pointer-events-none">
                        {newsItem.date}
                      </div>
                    </div>
                    <div className="p-4">
                      {newsItem.link ? (
                        newsItem.isExternal ? (
                          <a 
                            href={newsItem.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="font-medium group-hover:text-primary transition-colors block"
                          >
                            <h3 className="line-clamp-2 font-medium">
                              {newsItem.title}
                            </h3>
                          </a>
                        ) : (
                          <Link 
                            href={newsItem.link} 
                            className="font-medium group-hover:text-primary transition-colors block"
                          >
                            <h3 className="line-clamp-2 font-medium">
                              {newsItem.title}
                            </h3>
                          </Link>
                        )
                      ) : (
                        <h3 className="line-clamp-2 font-medium">
                          {newsItem.title}
                        </h3>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
