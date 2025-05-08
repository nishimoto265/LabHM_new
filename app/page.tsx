"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { homeTranslations } from "@/translations/home"

export default function Home() {
  const { language } = useLanguage()
  const t = homeTranslations[language]

  return (
    <div>
      {/* ヒーローセクション */}
      <section className="relative h-[80vh]">
        <div className="absolute inset-0 z-0">
          <Image src="/images/hero-owl.jpeg" alt="フクロウ" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        <div className="relative z-10 container h-full flex flex-col justify-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">{t.heroTitle}</h1>
          <p className="text-lg md:text-xl max-w-2xl whitespace-pre-line">{t.heroDescription}</p>
        </div>
      </section>

      {/* ニュースセクション */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 pb-2 border-b border-gray-200 flex items-center">
            News <span className="ml-4 text-lg font-normal">{t.news}</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="group">
              <div className="relative">
                <div className="absolute top-0 left-0 bg-yellow-600 text-white text-xs px-2 py-1 z-10">
                  {t.categories.announcement}
                </div>
                <div className="absolute top-0 right-0 bg-white text-gray-800 text-xs px-2 py-1 z-10">2025.02.21</div>
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="ニュース画像"
                    fill
                    className="object-contain transition-transform group-hover:scale-105 bg-white p-4"
                  />
                </div>
              </div>
              <h3 className="mt-2 font-medium">SAKURA Science Project FareWell Partyが開催されました</h3>
            </div>

            <div className="group">
              <div className="relative">
                <div className="absolute top-0 left-0 bg-green-600 text-white text-xs px-2 py-1 z-10">
                  {t.categories.research}
                </div>
                <div className="absolute top-0 right-0 bg-white text-gray-800 text-xs px-2 py-1 z-10">2025.01.09</div>
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="ニュース画像"
                    fill
                    className="object-contain transition-transform group-hover:scale-105 bg-white p-4"
                  />
                </div>
              </div>
              <h3 className="mt-2 font-medium">PSUに行ってきました。楽しかった！</h3>
            </div>

            <div className="group">
              <div className="relative">
                <div className="absolute top-0 left-0 bg-blue-600 text-white text-xs px-2 py-1 z-10">
                  {t.categories.lecture}
                </div>
                <div className="absolute top-0 right-0 bg-white text-gray-800 text-xs px-2 py-1 z-10">2024.09.28</div>
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="ニュース画像"
                    fill
                    className="object-contain transition-transform group-hover:scale-105 bg-white p-4"
                  />
                </div>
              </div>
              <h3 className="mt-2 font-medium">ホクレン新千歳牧場ー武井さんありがとうございます！</h3>
            </div>

            <div className="group">
              <div className="relative">
                <div className="absolute top-0 left-0 bg-red-600 text-white text-xs px-2 py-1 z-10">
                  {t.categories.activity}
                </div>
                <div className="absolute top-0 right-0 bg-white text-gray-800 text-xs px-2 py-1 z-10">2024.07.30</div>
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="ニュース画像"
                    fill
                    className="object-contain transition-transform group-hover:scale-105 bg-white p-4"
                  />
                </div>
              </div>
              <h3 className="mt-2 font-medium">卒業式なり！おめでとう！</h3>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Button variant="outline" className="bg-gray-700 text-white hover:bg-gray-800">
              View More
            </Button>
          </div>
        </div>
      </section>

      {/* 研究セクション */}
      <section className="py-16 bg-gray-100">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 pb-2 border-b border-gray-200 flex items-center">
            Research <span className="ml-4 text-lg font-normal">{t.research}</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="group">
              <div className="relative">
                <div className="absolute top-0 left-0 bg-green-700 text-white text-xs px-2 py-1 z-10">
                  {t.researchCategories.cow}
                </div>
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/logo.png"
                    alt="研究画像"
                    fill
                    className="object-contain transition-transform group-hover:scale-105 bg-white p-4"
                  />
                </div>
              </div>
              <h3 className="mt-2 font-medium">{t.researchProjects.cowFeeding}</h3>
            </div>

            <div className="group">
              <div className="relative">
                <div className="absolute top-0 left-0 bg-blue-700 text-white text-xs px-2 py-1 z-10">
                  {t.researchCategories.human}
                </div>
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/logo.png"
                    alt="研究画像"
                    fill
                    className="object-contain transition-transform group-hover:scale-105 bg-white p-4"
                  />
                </div>
              </div>
              <h3 className="mt-2 font-medium">{t.researchProjects.elderlyMonitoring}</h3>
            </div>

            <div className="group">
              <div className="relative">
                <div className="absolute top-0 left-0 bg-red-700 text-white text-xs px-2 py-1 z-10">
                  {t.researchCategories.medical}
                </div>
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/logo.png"
                    alt="研究画像"
                    fill
                    className="object-contain transition-transform group-hover:scale-105 bg-white p-4"
                  />
                </div>
              </div>
              <h3 className="mt-2 font-medium">{t.researchProjects.fetalMonitoring}</h3>
            </div>

            <div className="group">
              <div className="relative">
                <div className="absolute top-0 left-0 bg-gray-700 text-white text-xs px-2 py-1 z-10">
                  {t.researchCategories.other}
                </div>
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/logo.png"
                    alt="研究画像"
                    fill
                    className="object-contain transition-transform group-hover:scale-105 bg-white p-4"
                  />
                </div>
              </div>
              <h3 className="mt-2 font-medium">{t.researchProjects.waterQuality}</h3>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Button variant="outline" className="bg-gray-700 text-white hover:bg-gray-800">
              View More
            </Button>
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
                <Image src="/images/thithizin.jpg" alt="教授" fill className="object-cover" />
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
                <p className="text-2xl font-bold mt-1">{t.professorName}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
