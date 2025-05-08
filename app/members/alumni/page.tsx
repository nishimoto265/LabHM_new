"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useLanguage } from "@/contexts/language-context"
import { membersTranslations } from "@/translations/members"

// 卒業生データの型定義
type Graduate = {
  name: string
  research: string
}

type ProgramSection = {
  title: string
  graduates: Graduate[]
}

type YearSection = {
  year: string
  programs: {
    doctor?: ProgramSection
    master?: ProgramSection
    bachelor?: ProgramSection
  }
}

// 卒業生データ
const alumniData: YearSection[] = [
  {
    year: "令和5年度",
    programs: {
      master: {
        title: "修士課程",
        graduates: [
          {
            name: "Cho Cho Aye",
            research: "研究内容：Black Cow Detection and Tracking for Behavior Analysis",
          },
          {
            name: "May Phyu Khin",
            research: "研究内容：Cattle Pose Classification for Calving Time Prediction",
          },
          {
            name: "San Chain Tun",
            research: "研究内容：Cow Lameness Detection using Depth Image Analysis",
          },
          {
            name: "Su Larb Mon",
            research: "研究内容：Automatic Cattle Identification Using RGB Images",
          },
          {
            name: "釜堀 慶次郎",
            research: "研究内容：バランスタスクを用いた高齢者の転倒リスク評価に関する研究",
          },
          {
            name: "鬼塚 翼",
            research: "研究内容：画像処理技術を用いた牛の跛行検知に関する研究",
          },
        ],
      },
      bachelor: {
        title: "学士課程",
        graduates: [
          {
            name: "永野 流磨",
            research: "研究内容：Flaskを用いたファブリー病の振戦運動評価の研究",
          },
          {
            name: "高岡 柚貴",
            research: "研究内容：RGBカメラによる牛の歩行動画を用いた個体識別に関する研究",
          },
          {
            name: "山元 太陽",
            research: "研究内容：RGBカメラを用いた行動判定に関する研究",
          },
          {
            name: "山口 謙志朗",
            research: "研究内容：画像処理技術を用いた分娩前の牛の特徴抽出に関する研究",
          },
          {
            name: "清水 祐一朗",
            research: "研究内容：画像処理技術を用いた耳標番号による牛の個体識別",
          },
          {
            name: "石川 太一",
            research: "研究内容：オプティカルフローと機械学習を用いた複数牛の反芻識別に関する研究",
          },
          {
            name: "椎原 陽",
            research: "研究内容：3Dカメラを用いた歩行中の牛の個体識別に関する研究",
          },
        ],
      },
    },
  },
  {
    year: "令和4年度",
    programs: {
      master: {
        title: "修士課程",
        graduates: [
          {
            name: "桐原 拓希",
            research: "研究内容：画像処理技術を用いた子牛の健康管理のための行動モニタリングに関する研究",
          },
          {
            name: "山城 克敏",
            research: "研究内容：パーキンソン病における動画の解析による指タップの症候学的な意義の解明",
          },
          {
            name: "西山 孟人",
            research: "研究内容：RGBカメラとサーモグラフィーカメラを用いた子牛の中耳炎の早期発見に関する検討",
          },
          {
            name: "丹野 龍晟",
            research: "研究内容：画像処理技術を用いた歩行情報の数値化に関する研究",
          },
          {
            name: "池畑 勇威",
            research: "研究内容：画像処理技術を用いた牛の耳標認識に関する研究",
          },
          {
            name: "筑波 真矢",
            research: "研究内容：3Dカメラを用いた歩行中の乳牛のBCS評価に関する研究",
          },
          {
            name: "武吉 慧史朗",
            research: "研究内容：画像処理技術を用いた乳牛の移動情報による跛行検知",
          },
        ],
      },
      bachelor: {
        title: "学士課程",
        graduates: [
          {
            name: "桐原 拓希",
            research: "研究内容：画像処理技術を用いた子牛の健康管理のための行動モニタリングに関する研究",
          },
          {
            name: "山城 克敏",
            research: "研究内容：パーキンソン病における動画の解析による指タップの症候学的な意義の解明",
          },
          {
            name: "西山 孟人",
            research: "研究内容：RGBカメラとサーモグラフィーカメラを用いた子牛の中耳炎の早期発見に関する検討",
          },
          {
            name: "丹野 龍晟",
            research: "研究内容：画像処理技術を用いた歩行情報の数値化に関する研究",
          },
          {
            name: "池畑 勇威",
            research: "研究内容：画像処理技術を用いた牛の耳標認識に関する研究",
          },
          {
            name: "筑波 真矢",
            research: "研究内容：3Dカメラを用いた歩行中の乳牛のBCS評価に関する研究",
          },
          {
            name: "武吉 慧史朗",
            research: "研究内容：画像処理技術を用いた乳牛の移動情報による跛行検知",
          },
        ],
      },
    },
  },
  {
    year: "令和3年度",
    programs: {
      doctor: {
        title: "博士課程",
        graduates: [
          {
            name: "Swe Zar Maw",
            research:
              "研究内容：A Study to Predict Calving Time in Dairy Cows Using Image Processing Techniques and Stochastic Model",
          },
        ],
      },
      master: {
        title: "修士課程",
        graduates: [
          {
            name: "SuMyatNoe",
            research:
              "研究内容：Cow Estrus Detection and Tracking based on Image Technology with the Enforcement of Deep Learning Methods",
          },
          {
            name: "松岡 拓夢",
            research: "研究内容：画像処理技術を用いた牛の個体識別に関する研究",
          },
        ],
      },
      bachelor: {
        title: "学士課程",
        graduates: [
          {
            name: "釜堀 慶次郎",
            research: "研究内容：歩行動画による高齢者の転倒リスク有無の判別に関する研究",
          },
          {
            name: "鬼塚 翼",
            research: "研究内容：画像処理技術を用いた牛の跛行検出に関する研究",
          },
          {
            name: "後藤 逸兵",
            research: "研究内容：3Dカメラを用いた牛の個体識別に関する研究",
          },
          {
            name: "山田 隆人",
            research: "研究内容：深層学習を用いた野生馬の自動個体識別に関する研究",
          },
          {
            name: "中富 武蔵",
            research: "研究内容：3Dカメラを使用したベッド上の人の姿勢推定の研究",
          },
          {
            name: "渡邉 健太",
            research: "研究内容：画像処理技術を用いた牛の行動認識に関する研究",
          },
          {
            name: "矢野 夢騎",
            research: "研究内容：カメラによるマスク着用と手指消毒の検出に関する研究",
          },
          {
            name: "髙野 湧平",
            research: "研究内容：牛の後部画像を用いた個体識別に関する研究",
          },
        ],
      },
    },
  },
]

export default function AlumniPage() {
  const { language } = useLanguage()
  const t = membersTranslations[language]

  // 年度のリストを取得
  const years = alumniData.map((year) => year.year)

  return (
    <div>
      {/* ヘッダーセクション */}
      <section className="bg-gray-100 py-16">
        <div className="container">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.alumni.title}</h1>
            <p className="text-xl text-gray-600">{t.alumni.subtitle}</p>
          </div>
        </div>
      </section>

      {/* メインコンテンツ */}
      <section className="py-16">
        <div className="container">
          <Tabs defaultValue={years[0]} className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-2 md:grid-cols-5">
                {years.map((year) => (
                  <TabsTrigger key={year} value={year} className="px-4 py-2">
                    {year}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {alumniData.map((yearData) => (
              <TabsContent key={yearData.year} value={yearData.year} className="mt-0">
                <div className="space-y-12">
                  {/* 博士課程 */}
                  {yearData.programs.doctor && (
                    <div>
                      <h2 className="text-2xl font-bold mb-6 border-b pb-2">{t.alumni.doctoral}</h2>
                      <div className="grid gap-4">
                        {yearData.programs.doctor.graduates.map((graduate, index) => (
                          <div key={index} className="p-6 bg-white border-b border-gray-200">
                            <h3 className="text-xl font-bold mb-2">{graduate.name}</h3>
                            <p className="text-gray-700">
                              {graduate.research.replace("研究内容：", t.alumni.researchPrefix)}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* 修士課程 */}
                  {yearData.programs.master && (
                    <div>
                      <h2 className="text-2xl font-bold mb-6 border-b pb-2">{t.alumni.masters}</h2>
                      <div className="grid gap-4">
                        {yearData.programs.master.graduates.map((graduate, index) => (
                          <div key={index} className="p-6 bg-white border-b border-gray-200">
                            <h3 className="text-xl font-bold mb-2">{graduate.name}</h3>
                            <p className="text-gray-700">
                              {graduate.research.replace("研究内容：", t.alumni.researchPrefix)}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* 学士課程 */}
                  {yearData.programs.bachelor && (
                    <div>
                      <h2 className="text-2xl font-bold mb-6 border-b pb-2">{t.alumni.bachelor}</h2>
                      <div className="grid gap-4">
                        {yearData.programs.bachelor.graduates.map((graduate, index) => (
                          <div key={index} className="p-6 bg-white border-b border-gray-200">
                            <h3 className="text-xl font-bold mb-2">{graduate.name}</h3>
                            <p className="text-gray-700">
                              {graduate.research.replace("研究内容：", t.alumni.researchPrefix)}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
    </div>
  )
}
