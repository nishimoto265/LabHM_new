"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { homeTranslations } from "@/translations/home"
import { newsData } from "@/translations/news-data"
import { getTagBgColor } from "@/lib/news-utils"
import { getImagePath } from "@/lib/utils"

export default function Home() {
  const { language } = useLanguage()
  const t = homeTranslations[language]
  const news = newsData[language]
  
  // 最新の4件のニュースを取得
  const latestNews = news.slice(0, 4)

  return (
    <div>
      {/* ヒーローセクション */}
      <section className="relative h-[80vh]">
        <div className="absolute inset-0 z-0">
          <Image src={getImagePath("/images/hero-owl.jpeg")} alt="フクロウ" fill priority className="object-cover object-right" />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        <div className="relative z-10 container h-full flex flex-col justify-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 whitespace-pre-line">{t.heroTitle}</h1>
          <p className="text-lg md:text-xl max-w-2xl whitespace-pre-line">{t.heroDescription}</p>
        </div>
      </section>

      {/* ニュースセクション */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 pb-2 border-b border-gray-200 flex items-center">
            News <span className="ml-4 text-lg font-normal">{t.news}</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {latestNews.map((newsItem) => (
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
                            src={newsItem.image && newsItem.image.trim() !== "" ? getImagePath(newsItem.image) : getImagePath("/logo.png")}
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
                            src={newsItem.image && newsItem.image.trim() !== "" ? getImagePath(newsItem.image) : getImagePath("/logo.png")}
                            alt={newsItem.title}
                            fill
                            className={`${(newsItem.image && newsItem.image.trim() !== "") ? 'object-cover' : 'object-contain p-4'} transition-transform group-hover:scale-105`}
                          />
                        </Link>
                      )
                    ) : (
                      <Image
                        src={newsItem.image && newsItem.image.trim() !== "" ? getImagePath(newsItem.image) : getImagePath("/logo.png")}
                        alt={newsItem.title}
                        fill
                        className={`${(newsItem.image && newsItem.image.trim() !== "") ? 'object-cover' : 'object-contain p-4'}`}
                      />
                    )}
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

          <div className="mt-8 text-center">
            <Link href="/news">
              <Button variant="outline" className="bg-gray-700 text-white hover:bg-gray-800">
                View More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 研究セクション */}
      <section className="py-16 bg-gray-100">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 pb-2 border-b border-gray-200 flex items-center">
            Research <span className="ml-4 text-lg font-normal">{t.research}</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/research/projects/cattle-feeding" className="group">
              <div className="overflow-hidden h-full bg-white">
                <div className="relative h-48 overflow-hidden border-b border-gray-200">
                  <Image
                    src={getImagePath("/images/research-ishikawa.png")}
                    alt="牛の給餌行動解析システム"
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute top-2 left-2 bg-green-700 text-white text-xs px-2 py-1 rounded z-10">
                    {t.researchCategories.cow}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="mt-2 font-medium group-hover:text-primary transition-colors">
                    {language === "ja" ? "牛の給餌行動解析システム" : "Cattle Feeding Behavior Analysis System"}
                  </h3>
                </div>
              </div>
            </Link>

            <Link href="/research/projects/calving-prediction" className="group">
              <div className="overflow-hidden h-full bg-white">
                <div className="relative h-48 overflow-hidden border-b border-gray-200">
                  <Image
                    src={getImagePath("/images/research-murayama.png")}
                    alt="分娩予測システム"
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute top-2 left-2 bg-green-700 text-white text-xs px-2 py-1 rounded z-10">
                    {t.researchCategories.cow}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="mt-2 font-medium group-hover:text-primary transition-colors">
                    {language === "ja" ? "分娩予測システム" : "Calving Prediction System"}
                  </h3>
                </div>
              </div>
            </Link>

            <Link href="/research/projects/elderly-monitoring" className="group">
              <div className="overflow-hidden h-full bg-white">
                <div className="relative h-48 overflow-hidden border-b border-gray-200">
                  <Image
                    src={getImagePath("/images/research-remon.png")}
                    alt="高齢者見守りシステム"
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute top-2 left-2 bg-blue-700 text-white text-xs px-2 py-1 rounded z-10">
                    {t.researchCategories.human}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="mt-2 font-medium group-hover:text-primary transition-colors">
                    {language === "ja" ? "高齢者見守りシステム" : "Elderly Monitoring System"}
                  </h3>
                </div>
              </div>
            </Link>

            <Link href="/research/projects/fetal-monitoring" className="group">
              <div className="overflow-hidden h-full bg-white">
                <div className="relative h-48 overflow-hidden border-b border-gray-200">
                  <Image
                    src={getImagePath("/images/research-tunn.png")}
                    alt="胎児モニタリングシステム"
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute top-2 left-2 bg-red-700 text-white text-xs px-2 py-1 rounded z-10">
                    {t.researchCategories.medical}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="mt-2 font-medium group-hover:text-primary transition-colors">
                    {language === "ja" ? "胎児モニタリングシステム" : "Fetal Monitoring System"}
                  </h3>
                </div>
              </div>
            </Link>
          </div>

          <div className="mt-8 text-center">
            <Link href="/research/projects">
              <Button variant="outline" className="bg-gray-700 text-white hover:bg-gray-800">
                View More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* メッセージセクション */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 pb-2 border-b border-gray-200 flex items-center">
            Message <span className="ml-4 text-lg font-normal">{t.message}</span>
          </h2>

          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <div className="relative aspect-square">
                <Image src={getImagePath("/images/thithizin.jpg")} alt="教授" fill className="object-cover" />
              </div>
            </div>
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold mb-4">{t.messageTitle}</h3>
              <div className="space-y-4">
                <p>{t.messageContent1}</p>
                <p>{t.messageContent2}</p>
                <p>{t.messageContent3}</p>
              </div>
              <div className="mt-6 text-right">
                <p>{t.professorTitle}</p>
                <p className="text-3xl font-caveat mt-2 text-gray-800 transform -rotate-1">{t.professorName}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
