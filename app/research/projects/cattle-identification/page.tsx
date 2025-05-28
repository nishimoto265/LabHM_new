"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { cattleIdentificationTranslations } from "@/translations/research-project-details"
import { getImagePath, getBackgroundImageStyle } from "@/lib/utils"

export default function CattleIdentificationPage() {
  const { language } = useLanguage()
  const t = cattleIdentificationTranslations[language]

  return (
    <div>
      {/* ヘッダーセクション */}
      <section 
        className="relative h-96 bg-cover bg-center bg-no-repeat"
        style={getBackgroundImageStyle("/images/normal_header.png")}
      >
        {/* オーバーレイ */}
        <div className="absolute inset-0 bg-black/30"></div>
        
        {/* コンテンツ */}
        <div className="container relative z-10">
          <div className="text-center">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight tracking-tighter text-white drop-shadow-lg">
              {t.title}
            </h1>
          </div>
        </div>
      </section>

      {/* メインコンテンツ */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* プロジェクト概要 */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-4">{t.overviewTitle}</h2>
              <p className="text-gray-700 mb-4">{t.overviewText}</p>
            </div>

            {/* 実験背景・目的 */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-4">{t.backgroundTitle}</h2>
              <p className="text-gray-700">{t.backgroundText1}</p>
              <p className="text-gray-700 mt-4">{t.backgroundText2}</p>
              <div
                className="relative aspect-auto mt-8 rounded-lg overflow-hidden"
                style={{ height: "auto", minHeight: "250px" }}
              >
                <Image
                  src={getImagePath("/images/research-siihara1.png")}
                  alt={language === "ja" ? "実験背景・目的" : "Experimental Background & Objectives"}
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* 実験環境 */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-4">{t.environmentTitle}</h2>
              <p className="text-gray-700">{t.environmentText1}</p>
              <p className="text-gray-700 mt-4">{t.environmentText2}</p>
              <div
                className="relative aspect-auto mt-8 rounded-lg overflow-hidden"
                style={{ height: "auto", minHeight: "250px" }}
              >
                <Image
                  src={getImagePath("/images/research-siihara2.png")}
                  alt={language === "ja" ? "実験環境" : "Experimental Environment"}
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* 提案手法 */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-4">{t.methodTitle}</h2>
              <p className="text-gray-700">{t.methodText1}</p>
              <p className="text-gray-700 mt-4">{t.methodText2}</p>
              <ol className="list-decimal pl-5 space-y-2 mt-2 text-gray-700">
                {t.methodList.map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ol>
              <div
                className="relative aspect-auto mt-8 rounded-lg overflow-hidden"
                style={{ height: "auto", minHeight: "250px" }}
              >
                <Image
                  src={getImagePath("/images/research-siihara3.png")}
                  alt={language === "ja" ? "提案手法" : "Proposed Method"}
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* 実験結果 */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-4">{t.resultsTitle}</h2>
              <p className="text-gray-700">{t.resultsText1}</p>
              <p className="text-gray-700 mt-4">{t.resultsText2}</p>
              <div
                className="relative aspect-auto mt-8 rounded-lg overflow-hidden"
                style={{ height: "auto", minHeight: "250px" }}
              >
                <Image
                  src={getImagePath("/images/research-siihara4.png")}
                  alt={language === "ja" ? "実験結果" : "Experimental Results"}
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* 今後の展望 */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-4">{t.futureTitle}</h2>
              <p className="text-gray-700">{t.futureText1}</p>
              <p className="text-gray-700 mt-4">{t.futureText2}</p>
              <p className="text-gray-700 mt-4">{t.futureText3}</p>
            </div>

            <div className="flex justify-center mt-8">
              <Link href="/research/projects">
                <Button variant="outline">{t.backToProjects}</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
