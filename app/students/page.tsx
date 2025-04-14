"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import React from "react"

export default function StudentsPage() {
  const { language } = useLanguage()

  // 翻訳データ
  const translations = {
    pageTitle: {
      ja: "研究室での学びと成長の機会が待っています",
      en: "Opportunities for learning and growth await you in our laboratory",
    },
    labFeatures: {
      ja: "研究室の特徴",
      en: "Laboratory Features",
    },
    equipment: {
      ja: "充実した設備環境",
      en: "Well-equipped Environment",
    },
    equipmentDesc: {
      ja: "当研究室では、最新のコンピュータ機器やソフトウェアを完備しています。高性能なGPUを搭載したワークステーションや、大容量のデータストレージなど、研究に必要な設備が整っています。詳細は",
      en: "Our laboratory is equipped with the latest computer hardware and software. We have high-performance workstations with powerful GPUs and large-capacity data storage, providing all the necessary equipment for research. For details, please see",
    },
    here: {
      ja: "こちら",
      en: "here",
    },
    learningEnv: {
      ja: "学びやすい環境",
      en: "Supportive Learning Environment",
    },
    learningEnvDesc: {
      ja: "学生数が多く、先輩や同期と切磋琢磨しながら研究を進めることができます。わからないことがあれば、すぐに質問できる環境が整っています。",
      en: "With many students, you can advance your research while learning from seniors and peers. If you have questions, you can easily ask in our supportive environment.",
    },
    conferences: {
      ja: "積極的な学会参加",
      en: "Active Conference Participation",
    },
    conferencesDesc: {
      ja: "国内外の学会に積極的に参加し、研究成果を発表しています。学会参加を通じて、最新の研究動向を学び、研究者とのネットワークを広げることができます。",
      en: "We actively participate in domestic and international conferences to present research findings. Through conference participation, you can learn about the latest research trends and expand your network with researchers.",
    },
    coreTime: {
      ja: "柔軟なコアタイム制度",
      en: "Flexible Core Time System",
    },
    coreTimeDesc: {
      ja: "コアタイムは平日の10時から17時ですが、帰省などの際には柔軟に対応可能です。自分のペースで研究に取り組むことができます。",
      en: "Core time is from 10 AM to 5 PM on weekdays, but we can flexibly accommodate needs such as returning home. You can work on your research at your own pace.",
    },
    employmentList: {
      ja: "就職先一覧",
      en: "Employment Destinations",
    },
    researchThemes: {
      ja: "主な研究テーマ",
      en: "Main Research Themes",
    },
    medical: {
      ja: "医療分野",
      en: "Medical Field",
    },
    medicalThemes: {
      ja: [
        "胎児の状態モニタリングシステム",
        "パーキンソン病の診断支援",
        "振戦分析による病名診断と重症度測定",
        "高齢者の転倒リスク評価",
      ],
      en: [
        "Fetal condition monitoring system",
        "Parkinson's disease diagnostic support",
        "Disease diagnosis and severity measurement through tremor analysis",
        "Fall risk assessment for the elderly",
      ],
    },
    agriculture: {
      ja: "農業・畜産分野",
      en: "Agriculture & Livestock Field",
    },
    agricultureThemes: {
      ja: [
        "牛の個体識別と追跡システム",
        "乳牛のBCS評価の自動化",
        "牛の跛行検知システム",
        "牛の分娩監視システム",
        "牛の発情検知システム",
      ],
      en: [
        "Cattle identification and tracking system",
        "Automation of BCS evaluation for dairy cows",
        "Lameness detection system for cattle",
        "Calving monitoring system",
        "Estrus detection system for cattle",
      ],
    },
    imageProcessing: {
      ja: "画像処理・AI応用",
      en: "Image Processing & AI Applications",
    },
    imageProcessingThemes: {
      ja: [
        "プライバシー保護型見守りシステム",
        "行動認識と異常検知",
        "3Dカメラを用いた姿勢推定",
        "深層学習による物体検出と追跡",
        "産業現場の効率化支援システム",
      ],
      en: [
        "Privacy-preserving monitoring system",
        "Behavior recognition and anomaly detection",
        "Posture estimation using 3D cameras",
        "Object detection and tracking with deep learning",
        "Efficiency support systems for industrial sites",
      ],
    },
    interested: {
      ja: "興味を持たれた方へ",
      en: "For Those Interested",
    },
    interestedDesc: {
      ja: "研究室見学や詳細な情報をご希望の方は、お気軽にお問い合わせください。\n学部3年生の方は、研究室配属前に見学も可能です。",
      en: "If you would like to visit our laboratory or need more detailed information, please feel free to contact us.\nThird-year undergraduate students can visit before laboratory assignments.",
    },
    contact: {
      ja: "お問い合わせはこちら",
      en: "Contact Us",
    },
  }

  // 就職先一覧
  const companies = {
    ja: [
      "ソニーセミコンダクタ",
      "東京エレクトロン",
      "NEC",
      "NEC通信システム",
      "YE DIGITAL",
      "ニコンシステム",
      "神鋼商事",
      "LeapMind",
      "JAえひめ総合情報センター",
      "高田工業所",
      "東洋製罐グループホールディングス",
      "MJC",
      "宮崎県庁",
      "産業技術総合研究所",
      "フェニックスコンサルタント",
      "スターフライヤー",
      "SCSK",
      "スズキ",
      "JCOM（旧 ジュピターテレコム）",
      "ドコモ・システムズ",
      "アイシン・エィ・ダブリュ（アイシンに吸収合併）",
      "シャープ",
      "日鉄テックスエンジ",
      "ミネベアミツミ",
      "ファームノート",
      "キオクシア",
      "学校法人昭和大学",
      "富士通エフサス",
      "富士通九州ネットワークテクノロジーズ（富士通に吸収合併）",
      "日立情報通信エンジニアリング",
      "グンゼ",
      "フェニックスシステム研究所",
      "NOK",
      "ライオン",
      "富士ソフト",
      "ダイハツ工業",
    ],
    en: [
      "Sony Semiconductor",
      "Tokyo Electron",
      "NEC",
      "NEC Communication Systems",
      "YE DIGITAL",
      "Nikon Systems",
      "Shinsho Corporation",
      "LeapMind",
      "JA Ehime Information Center",
      "Takada Corporation",
      "Toyo Seikan Group Holdings",
      "MJC",
      "Miyazaki Prefectural Government",
      "National Institute of Advanced Industrial Science and Technology",
      "Phoenix Consultant",
      "StarFlyer",
      "SCSK",
      "Suzuki",
      "JCOM (formerly Jupiter Telecommunications)",
      "Docomo Systems",
      "Aisin AW (merged into Aisin)",
      "Sharp",
      "Nippon Steel Texeng",
      "MinebeaMitsumi",
      "Farmnote",
      "Kioxia",
      "Showa University",
      "Fujitsu FSAS",
      "Fujitsu Kyushu Network Technologies (merged into Fujitsu)",
      "Hitachi Information & Communication Engineering",
      "Gunze",
      "Phoenix System Research Institute",
      "NOK",
      "Lion Corporation",
      "Fuji Soft",
      "Daihatsu Motor",
    ],
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* メインコンテンツ */}
      <div className="flex-grow">
        <div className="py-16">
          {/* Career タイトル */}
          <div className="text-center mb-16">
            <div className="relative w-full max-w-xs mx-auto h-20 mb-2">
              <Image src="/images/career.png" alt="Career" fill className="object-contain" priority />
            </div>
            <p className="text-xl">{translations.pageTitle[language]}</p>
          </div>

          <div className="container">
            <div className="grid md:grid-cols-2 gap-12">
              {/* 左側：研究室の特徴 */}
              <div>
                <h2 className="text-2xl font-bold mb-6 border-b pb-2">{translations.labFeatures[language]}</h2>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-primary">{translations.equipment[language]}</h3>
                    <p className="text-gray-700">
                      {translations.equipmentDesc[language]}
                      <Link href="/research/facilities" className="text-primary hover:underline">
                        {translations.here[language]}
                      </Link>
                      。
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-3 text-primary">{translations.learningEnv[language]}</h3>
                    <p className="text-gray-700">{translations.learningEnvDesc[language]}</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-3 text-primary">{translations.conferences[language]}</h3>
                    <p className="text-gray-700">{translations.conferencesDesc[language]}</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-3 text-primary">{translations.coreTime[language]}</h3>
                    <p className="text-gray-700">{translations.coreTimeDesc[language]}</p>
                  </div>
                </div>
              </div>

              {/* 右側：就職先一覧 */}
              <div>
                <h2 className="text-2xl font-bold mb-6 border-b pb-2">{translations.employmentList[language]}</h2>

                <div className="bg-gray-50 p-6">
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
                    {companies[language].map((company, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>{company}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* 研究テーマ */}
            <div className="mt-16">
              <h2 className="text-2xl font-bold mb-6 border-b pb-2">{translations.researchThemes[language]}</h2>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-6 bg-white">
                  <h3 className="text-xl font-bold mb-3">{translations.medical[language]}</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    {translations.medicalThemes[language].map((theme, index) => (
                      <li key={index}>{theme}</li>
                    ))}
                  </ul>
                </div>

                <div className="p-6 bg-white">
                  <h3 className="text-xl font-bold mb-3">{translations.agriculture[language]}</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    {translations.agricultureThemes[language].map((theme, index) => (
                      <li key={index}>{theme}</li>
                    ))}
                  </ul>
                </div>

                <div className="p-6 bg-white">
                  <h3 className="text-xl font-bold mb-3">{translations.imageProcessing[language]}</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    {translations.imageProcessingThemes[language].map((theme, index) => (
                      <li key={index}>{theme}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* お問い合わせボタン */}
            <div className="mt-16 text-center">
              <h2 className="text-2xl font-bold mb-6">{translations.interested[language]}</h2>
              <p className="max-w-2xl mx-auto mb-8 text-gray-700">
                {translations.interestedDesc[language].split("\n").map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    {i < translations.interestedDesc[language].split("\n").length - 1 && <br />}
                  </React.Fragment>
                ))}
              </p>
              <Link href="/contact">
                <Button size="lg" className="font-medium">
                  {translations.contact[language]}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
