import Link from "next/link"
import { ExternalLink } from "lucide-react"

// メディア掲載データの型定義
type MediaAppearance = {
  title: string
  date: string
  media: string
  description: string
  link?: string
}

// メディア掲載データ
const mediaData: MediaAppearance[] = [
  {
    title: "AIで牛の健康管理 - 宮崎大学の最新研究",
    date: "2024年6月15日",
    media: "日本農業新聞",
    description:
      "宮崎大学ThiThiZin研究室の牛の健康管理に関する研究が紹介されました。AIと画像処理技術を活用した牛の行動分析システムについて解説しています。",
    link: "https://example.com/news1",
  },
  {
    title: "地域の課題をテクノロジーで解決 - 産学連携の最前線",
    date: "2024年5月20日",
    media: "テレビ宮崎",
    description:
      "地域の課題解決に取り組む研究として、当研究室の高齢者見守りシステムが特集されました。プライバシーを保護しながら安全を確保する技術について紹介されています。",
  },
  {
    title: "次世代の医療を支えるAI技術",
    date: "2024年3月10日",
    media: "医療ITジャーナル",
    description:
      "胎児モニタリングシステムに関する研究が医療専門誌で紹介されました。AIを活用した胎児の健康状態予測技術の可能性について解説しています。",
    link: "https://example.com/news3",
  },
  {
    title: "スマート農業の最前線 - 牛の個体管理技術",
    date: "2023年11月5日",
    media: "農業技術ジャーナル",
    description:
      "3Dカメラを用いた牛の個体識別技術について特集記事が掲載されました。従来の耳標による識別に代わる新しい技術として注目されています。",
    link: "https://example.com/news4",
  },
  {
    title: "高齢者見守りシステムの実証実験開始",
    date: "2023年9月1日",
    media: "宮崎日日新聞",
    description:
      "宮崎市内の高齢者施設で、当研究室が開発した見守りシステムの実証実験が開始されたことが報じられました。プライバシーに配慮した新しい見守り技術として紹介されています。",
  },
  {
    title: "大学発ベンチャーが目指す未来",
    date: "2023年7月15日",
    media: "ビジネス九州",
    description:
      "研究室の技術を活用したスタートアップ企業の取り組みが紹介されました。産学連携による技術移転の成功事例として取り上げられています。",
    link: "https://example.com/news6",
  },
]

export default function MediaAppearancesPage() {
  return (
    <div>
      {/* ヘッダーセクション */}
      <section className="bg-gray-100 py-16">
        <div className="container">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">記事・出演</h1>
            <p className="text-xl text-gray-600">研究室のメディア掲載実績</p>
          </div>
        </div>
      </section>

      {/* メインコンテンツ */}
      <section className="py-16">
        <div className="container">
          <div className="grid gap-6">
            {mediaData.map((item, index) => (
              <div key={index} className="p-6 bg-white border-b border-gray-200">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div>
                    <h2 className="text-xl font-bold mb-2 text-primary flex items-center">
                      {item.title}
                      {item.link && (
                        <Link href={item.link} target="_blank" className="ml-2 text-gray-500 hover:text-primary">
                          <ExternalLink className="h-4 w-4" />
                          <span className="sr-only">リンクを開く</span>
                        </Link>
                      )}
                    </h2>
                    <p className="text-gray-500 mb-2">
                      {item.date} | {item.media}
                    </p>
                    <p className="text-gray-700">{item.description}</p>
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
