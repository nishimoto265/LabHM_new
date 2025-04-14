"use client"

import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"
import { membersTranslations } from "@/translations/members"

// 教員・研究員の型定義
type FacultyMember = {
  id: string
  name: string
  nameEn?: string
  position: string
  image: string
  background: string[]
  researchFields: string
}

// 教員・研究員データ
const facultyMembers: FacultyMember[] = [
  {
    id: "thithizin",
    name: "Thi Thi Zin（ティ ティ ズイン）",
    position: "教授（情報通信工学プログラム）",
    image: "/images/thithizin.jpg", // 画像パスを更新
    background: [
      "1995年：ヤンゴン大学（ミャンマー）Bachelor of Science（優等）",
      "1999年：ヤンゴンコンピュータ大学（ミャンマー）Master of Information Science",
      "2004年：大阪市立大学 修士（工学）",
      "2007年：大阪市立大学 博士（工学）",
      "2007年～2009年：日本学術振興会特別研究員",
      "現在：宮崎大学大学院工学研究科 教授",
    ],
    researchFields: "情報通信、知覚情報処理、画像処理、情報通信、データベース、ライフサイエンス、動物生産科学",
  },
  {
    id: "shiiya",
    name: "椎屋 和久",
    position: "助教（情報通信工学プログラム）",
    image: "/images/no_image.png",
    background: [
      "1994年：宮崎大学工学部電気工学科 卒業",
      "2008年：熊本大学大学院自然科学研究科 博士課程修了",
      "宮崎大学工学部 技術職員、電気システム工学科 助手、助教を経て現職",
      "現在：宮崎大学工学部 工学科 助教",
    ],
    researchFields: "画像認識、デジタル画像処理",
  },
  {
    id: "pyketin",
    name: "Pyke Tin（パイ ティン）",
    position: "宮崎大学名誉博士（宮崎大学国際連携センター客員教授）",
    image: "/images/no_image.png",
    background: [
      "1965年：マンダレー大学（ミャンマー）Bachelor of Science（優等）",
      "1970年：ラングーン大学（ミャンマー）Master of Information Science",
      "1976年：モナシュ大学（オーストラリア）Ph.D. in stochastic processes and their applications",
      "元：ヤンゴンコンピュータ大学 学長、計算数学教授",
      "現在：宮崎大学国際連携センター 客員教授",
    ],
    researchFields: "画像検索エンジン、待ち行列システム、コンピュータビジョン、確率過程とその画像処理への応用",
  },
  {
    id: "chonilarphyo",
    name: "Cho Nilar Phyo（チョ ニラ ピョ）",
    position: "助教（情報通信工学プログラム）",
    image: "/images/Cho_Nilar_Phyo.jpg",
    background: [
      "2010年：ヤンゴンコンピュータ大学（ミャンマー）コンピュータサイエンス学士",
      "2011年：ヤンゴンコンピュータ大学（ミャンマー）コンピュータサイエンス学士（優等）",
      "2014年：ヤンゴンコンピュータ大学（ミャンマー）コンピュータサイエンス修士",
      "2019年：宮崎大学大学院農学工学総合研究科 博士号",
      "現在：宮崎大学大学院工学研究科 助教",
    ],
    researchFields: "人間の行動分析、医療診断のためのAI支援システム、リアルタイム映像監視システム",
  },
  {
    id: "monaung",
    name: "Mon Aung（ﾓﾝ ｱｳﾝ）",
    position: "研究員",
    image: "/images/no_image.png",
    background: [],
    researchFields: "",
  },
  {
    id: "nyizawaung",
    name: "Nyi Zaw Aung（ﾆｰ ｽﾞｫｰ ｱｳﾝ）",
    position: "研究員",
    image: "/images/no_image.png",
    background: [],
    researchFields: "",
  },
  {
    id: "nomoto",
    name: "野元 理美",
    position: "秘書",
    image: "/images/no_image.png",
    background: [],
    researchFields: "",
  },
]

export default function FacultyPage() {
  const { language } = useLanguage()
  const t = membersTranslations[language]

  return (
    <div>
      {/* ヘッダーセクション */}
      <section className="bg-gray-100 py-16">
        <div className="container">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.faculty.title}</h1>
            <p className="text-xl text-gray-600">{t.faculty.subtitle}</p>
          </div>
        </div>
      </section>

      {/* メインコンテンツ */}
      <section className="py-16">
        <div className="container">
          <div className="space-y-12">
            {facultyMembers.map((member) => (
              <div key={member.id} className="overflow-hidden bg-white border-b border-gray-200">
                <div className="grid md:grid-cols-3 gap-6 p-6">
                  <div className="md:col-span-1">
                    <div className="relative aspect-square max-w-xs mx-auto">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                  </div>
                  <div className="p-0 md:col-span-2">
                    <h2 className="text-2xl font-bold mb-2">{member.name}</h2>
                    <h3 className="text-lg text-gray-600 mb-4">{member.position}</h3>

                    {member.background.length > 0 && (
                      <div className="mb-4">
                        <h4 className="font-bold mb-2">{t.faculty.background}</h4>
                        <ul className="space-y-1 text-gray-700">
                          {member.background.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {member.researchFields && (
                      <div>
                        <h4 className="font-bold mb-2">{t.faculty.researchFields}</h4>
                        <p className="text-gray-700">{member.researchFields}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
