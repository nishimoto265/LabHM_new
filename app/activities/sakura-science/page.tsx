import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { getImagePath } from "@/lib/utils"

// さくらサイエンス年度データの型定義
type SakuraYear = {
  year: {
    ja: string
    en: string
  }
  image: string
  description?: {
    ja: string
    en: string
  }
  link?: string
}

// さくらサイエンス年度データ
const sakuraYears: SakuraYear[] = [
  {
    year: {
      ja: "2025年度",
      en: "2025 Academic Year",
    },
    image: getImagePath("/images/sakura2025s1.jpg"),
    description: {
      ja: "さくらサイエンスプラン ASEAN諸国学生向け ITとDXを学ぶ短期研修コース",
      en: "Sakura Science Plan Short-term Training Course on IT and DX for ASEAN Students",
    },
  },
  {
    year: {
      ja: "2024年度",
      en: "2024 Academic Year",
    },
    image: getImagePath("/images/sakura_2024.jpg"),
  },
  {
    year: {
      ja: "2018年度",
      en: "2018 Academic Year",
    },
    image: getImagePath("/images/sakura_2018.JPG"),
  },
  {
    year: {
      ja: "2017年度",
      en: "2017 Academic Year",
    },
    image: getImagePath("/images/sakura_2017.jpg"),
  },
  {
    year: {
      ja: "2015年度",
      en: "2015 Academic Year",
    },
    image: getImagePath("/images/sakura_2015.JPG"),
  },
]

// 国別参加者データ
const countryData = [
  { country: { ja: "インドネシア", en: "Indonesia" }, count: 15 },
  { country: { ja: "ベトナム", en: "Vietnam" }, count: 15 },
  { country: { ja: "マレーシア", en: "Malaysia" }, count: 10 },
  { country: { ja: "ミャンマー", en: "Myanmar" }, count: 15 },
  { country: { ja: "タイ", en: "Thailand" }, count: 10 },
  { country: { ja: "カンボジア", en: "Cambodia" }, count: 5 },
  { country: { ja: "フィリピン", en: "Philippines" }, count: 5 },
  { country: { ja: "ラオス", en: "Laos" }, count: 5 },
]

// さくらサイエンスページの翻訳
const sakuraTranslations = {
  ja: {
    title: "さくらサイエンス",
    description:
      "さくらサイエンスプラン（日本・アジア青少年サイエンス交流事業）は、アジア諸国の優秀な青少年を日本に招き、日本の先端科学技術を体験してもらうことで、アジアと日本の科学技術の発展に貢献することを目的とした事業です。",
    timeline: "これまでの実施",
    participantsByCountry: "国別参加者数",
    total: "合計",
    people: "名",
    activitiesTitle: "活動内容",
    activities: [
      "最先端の研究施設・大学訪問",
      "日本の研究者・学生との交流",
      "科学技術に関する講義・実習",
      "日本文化体験",
      "産業施設見学",
    ],
    learnMore: "詳しく見る",
  },
  en: {
    title: "Sakura Science",
    description:
      "The Sakura Science Plan (Japan-Asia Youth Science Exchange Program) is a program aimed at contributing to the development of science and technology in Asia and Japan by inviting outstanding young people from Asian countries to Japan to experience Japan's advanced science and technology.",
    timeline: "Past Programs",
    participantsByCountry: "Participants by Country",
    total: "Total",
    people: "people",
    activitiesTitle: "Activities",
    activities: [
      "Visits to cutting-edge research facilities and universities",
      "Exchange with Japanese researchers and students",
      "Lectures and practical training on science and technology",
      "Japanese cultural experiences",
      "Industrial facility tours",
    ],
    learnMore: "Learn More",
  },
}

export default function SakuraSciencePage() {
  const language: "ja" | "en" = "ja"
  const t = sakuraTranslations[language]

  const totalParticipants = countryData.reduce((sum, country) => sum + country.count, 0)

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      {/* ヘッダーセクション */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-100/50 to-purple-100/50" />
        </div>
        <div className="container relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            {/* ロゴ */}
            <div className="mb-8">
              <Image
                src={getImagePath("/images/sakura_logo.png")}
                alt="Sakura Science Logo"
                width={200}
                height={80}
                className="mx-auto"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              {t.title}
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">{t.description}</p>
          </div>
        </div>
      </section>

      {/* タイムラインセクション */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">{t.timeline}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {sakuraYears.map((yearData, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <div className="relative h-48">
                  <Image
                    src={yearData.image}
                    alt={`Sakura Science ${yearData.year[language]}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-pink-600 text-white px-4 py-2 rounded-full font-bold">
                    {yearData.year[language]}
                  </div>
                </div>
                {yearData.description && (
                  <div className="p-6">
                    <p className="text-gray-700">{yearData.description[language]}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 国別参加者統計 */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">{t.participantsByCountry}</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8">
              {/* 地図画像 */}
              <div className="mb-8">
                <Image
                  src={getImagePath("/images/sakura_map.png")}
                  alt="Participant Countries Map"
                  width={800}
                  height={400}
                  className="w-full rounded-lg"
                />
              </div>
              
              {/* 国別リスト */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {countryData.map((data, index) => (
                  <div
                    key={index}
                    className="text-center p-4 bg-gradient-to-br from-pink-50 to-purple-50 rounded-lg"
                  >
                    <div className="text-2xl font-bold text-pink-600">{data.count}</div>
                    <div className="text-sm text-gray-700">{data.country[language]}</div>
                  </div>
                ))}
              </div>
              
              {/* 合計 */}
              <div className="text-center p-6 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-lg">
                <div className="text-4xl font-bold mb-2">{totalParticipants}</div>
                <div className="text-lg">
                  {t.total} {t.people}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 活動内容 */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">{t.activitiesTitle}</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <ul className="space-y-4">
                {t.activities.map((activity, index) => (
                  <li key={index} className="flex items-start">
                    <span className="flex-shrink-0 w-8 h-8 bg-pink-100 text-pink-600 rounded-full flex items-center justify-center font-bold mr-4">
                      {index + 1}
                    </span>
                    <span className="text-gray-700">{activity}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}