"use client"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"

// 翻訳データ
const translations = {
  pageTitle: {
    ja: "キャリア",
    en: "Career",
  },
  pageDescription: {
    ja: "研究室での経験を活かした卒業生のキャリアパスと就職先をご紹介します。",
    en: "Discover the career paths and employment opportunities of our graduates who have leveraged their laboratory experience.",
  },
  careerPaths: {
    title: {
      ja: "卒業後のキャリアパス",
      en: "Career Paths After Graduation",
    },
    description: {
      ja: "当研究室の卒業生は、様々な分野で活躍しています。研究室で培った画像処理、機械学習、AIの知識とスキルは、多くの業界で高く評価されています。",
      en: "Our laboratory graduates are active in various fields. The knowledge and skills in image processing, machine learning, and AI developed in our laboratory are highly valued in many industries.",
    },
  },
  industries: {
    title: {
      ja: "主な就職先業界",
      en: "Main Employment Industries",
    },
    items: [
      {
        title: { ja: "IT・ソフトウェア開発", en: "IT & Software Development" },
        description: {
          ja: "画像処理やコンピュータビジョンの専門知識を活かし、ソフトウェア開発企業で活躍しています。",
          en: "Graduates leverage their expertise in image processing and computer vision at software development companies.",
        },
      },
      {
        title: { ja: "研究開発", en: "Research & Development" },
        description: {
          ja: "大手メーカーや研究機関の研究開発部門で、新技術の開発に携わっています。",
          en: "Many work in R&D departments of major manufacturers and research institutions, developing new technologies.",
        },
      },
      {
        title: { ja: "医療・ヘルスケア", en: "Medical & Healthcare" },
        description: {
          ja: "医療画像解析や診断支援システムの開発など、医療分野での技術革新に貢献しています。",
          en: "Graduates contribute to technological innovation in the medical field, such as medical image analysis and diagnostic support systems.",
        },
      },
      {
        title: { ja: "農業・畜産", en: "Agriculture & Livestock" },
        description: {
          ja: "スマート農業や畜産管理システムの開発など、第一次産業のデジタル化に貢献しています。",
          en: "Some are contributing to the digitalization of primary industries, such as developing smart agriculture and livestock management systems.",
        },
      },
      {
        title: { ja: "アカデミア", en: "Academia" },
        description: {
          ja: "博士課程に進学し、大学や研究機関で研究者としてのキャリアを築いています。",
          en: "Some proceed to doctoral programs and build careers as researchers at universities and research institutions.",
        },
      },
    ],
  },
  companies: {
    title: {
      ja: "主な就職先企業・団体",
      en: "Major Employers",
    },
    description: {
      ja: "過去5年間の主な就職先には以下のような企業・団体があります：",
      en: "Major employers over the past five years include:",
    },
    list: [
      { ja: "ソニーグループ株式会社", en: "Sony Group Corporation" },
      { ja: "富士通株式会社", en: "Fujitsu Limited" },
      { ja: "パナソニック株式会社", en: "Panasonic Corporation" },
      { ja: "キヤノン株式会社", en: "Canon Inc." },
      { ja: "日本電気株式会社（NEC）", en: "NEC Corporation" },
      { ja: "株式会社日立製作所", en: "Hitachi, Ltd." },
      { ja: "トヨタ自動車株式会社", en: "Toyota Motor Corporation" },
      {
        ja: "国立研究開発法人 産業技術総合研究所",
        en: "National Institute of Advanced Industrial Science and Technology (AIST)",
      },
      { ja: "株式会社NTTデータ", en: "NTT DATA Corporation" },
      { ja: "KDDI株式会社", en: "KDDI Corporation" },
      { ja: "ソフトバンク株式会社", en: "SoftBank Corp." },
      { ja: "楽天グループ株式会社", en: "Rakuten Group, Inc." },
      { ja: "サイボウズ株式会社", en: "Cybozu, Inc." },
      { ja: "株式会社メルカリ", en: "Mercari, Inc." },
      { ja: "宮崎大学", en: "University of Miyazaki" },
    ],
  },
  graduateSchool: {
    title: {
      ja: "大学院進学",
      en: "Graduate School",
    },
    description: {
      ja: "学部卒業生の約70%が大学院修士課程に進学しています。さらに、毎年数名の学生が博士課程に進学し、より専門的な研究を続けています。大学院では、より高度な研究テーマに取り組み、国内外の学会で研究成果を発表する機会も多くあります。",
      en: "About 70% of undergraduate graduates proceed to master's programs. Additionally, several students each year continue to doctoral programs for more specialized research. In graduate school, students work on more advanced research topics and have many opportunities to present their research results at domestic and international conferences.",
    },
  },
  support: {
    title: {
      ja: "キャリア支援",
      en: "Career Support",
    },
    description: {
      ja: "当研究室では、学生のキャリア形成を積極的に支援しています。企業との共同研究プロジェクトへの参加機会、インターンシップの紹介、就職活動のアドバイスなど、様々な形でサポートを提供しています。また、OB・OGとの交流会も定期的に開催し、実際の職場環境や仕事内容について直接話を聞く機会を設けています。",
      en: "Our laboratory actively supports students' career development. We provide various forms of support, such as opportunities to participate in collaborative research projects with companies, internship introductions, and job hunting advice. We also regularly hold networking events with alumni, providing opportunities to directly hear about actual workplace environments and job content.",
    },
  },
}

export default function CareerPage() {
  const { language } = useLanguage()
  const t = translations

  return (
    <main className="min-h-screen bg-white">
      {/* ヘッダーセクション */}
      <div className="relative h-[300px] w-full">
        <Image src="/images/career.png" alt={t.pageTitle[language]} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{t.pageTitle[language]}</h1>
            <p className="text-xl text-white max-w-3xl mx-auto px-4">{t.pageDescription[language]}</p>
          </div>
        </div>
      </div>

      {/* コンテンツセクション */}
      <div className="container mx-auto px-4 py-12">
        {/* キャリアパス概要 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">{t.careerPaths.title[language]}</h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto text-center mb-8">
            {t.careerPaths.description[language]}
          </p>
        </section>

        {/* 主な就職先業界 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">{t.industries.title[language]}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.industries.items.map((industry, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{industry.title[language]}</h3>
                <p className="text-gray-700">{industry.description[language]}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 主な就職先企業・団体 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">{t.companies.title[language]}</h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto text-center mb-8">
            {t.companies.description[language]}
          </p>
          <div className="bg-gray-50 p-8 rounded-lg">
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {t.companies.list.map((company, index) => (
                <li key={index} className="text-gray-700 flex items-center">
                  <span className="mr-2 text-green-600">•</span>
                  {company[language]}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 大学院進学 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">{t.graduateSchool.title[language]}</h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto">{t.graduateSchool.description[language]}</p>
        </section>

        {/* キャリア支援 */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">{t.support.title[language]}</h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto">{t.support.description[language]}</p>
        </section>
      </div>
    </main>
  )
}
