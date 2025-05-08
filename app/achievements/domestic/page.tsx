// 国内研究発表データの型定義
type DomesticPaper = {
  authors: string
  title: string
  conference: string
  year: string
}

// 国内研究発表データ
const domesticPapers: DomesticPaper[] = [
  {
    authors: "石川 太一, Thi Thi Zin, 小林 郁夫",
    title: "オプティカルフローと機械学習を用いた複数牛の反芻識別に関する研究",
    conference: "第25回画像センシングシンポジウム（SSII2023）",
    year: "2023",
  },
  {
    authors: "椎原 陽, Thi Thi Zin, 小林 郁夫",
    title: "3Dカメラを用いた歩行中の牛の個体識別に関する研究",
    conference: "情報処理学会第85回全国大会",
    year: "2023",
  },
  {
    authors: "清水 祐一朗, Thi Thi Zin, 小林 郁夫",
    title: "画像処理技術を用いた耳標番号による牛の個体識別",
    conference: "電子情報通信学会総合大会",
    year: "2023",
  },
  {
    authors: "丹野 龍晟, Thi Thi Zin, 酒井 克也, 望月 仁志",
    title: "画像処理技術を用いた歩行情報の数値化に関する研究",
    conference: "第24回画像センシングシンポジウム（SSII2022）",
    year: "2022",
  },
  {
    authors: "筑波 真矢, Thi Thi Zin, 小林 郁夫",
    title: "3Dカメラを用いた歩行中の乳牛のBCS評価に関する研究",
    conference: "情報処理学会第84回全国大会",
    year: "2022",
  },
  {
    authors: "西山 孟人, Thi Thi Zin, 小林 郁夫",
    title: "RGBカメラとサーモグラフィーカメラを用いた子牛の中耳炎の早期発見に関する検討",
    conference: "電子情報通信学会総合大会",
    year: "2022",
  },
  {
    authors: "山元 太陽, Thi Thi Zin, 小林 郁夫",
    title: "RGBカメラを用いた牛の行動判定に関する研究",
    conference: "情報処理学会九州支部火の国情報シンポジウム",
    year: "2022",
  },
  {
    authors: "山口 謙志朗, Thi Thi Zin, 小林 郁夫",
    title: "画像処理技術を用いた分娩前の牛の特徴抽出に関する研究",
    conference: "電子情報通信学会九州支部学生会講演会",
    year: "2022",
  },
  {
    authors: "村山 拓海, Thi Thi Zin, 小林 郁夫",
    title: "深層学習を用いた牛の分娩予測に関する研究",
    conference: "情報処理学会第83回全国大会",
    year: "2021",
  },
  {
    authors: "中嶋 麗文, Thi Thi Zin, 小林 郁夫",
    title: "3Dカメラを用いた高齢者の転倒リスク評価に関する研究",
    conference: "電子情報通信学会総合大会",
    year: "2021",
  },
]

// 年度ごとにグループ化する関数
function groupByYear(papers: DomesticPaper[]): { [key: string]: DomesticPaper[] } {
  return papers.reduce(
    (groups, paper) => {
      const year = paper.year
      if (!groups[year]) {
        groups[year] = []
      }
      groups[year].push(paper)
      return groups
    },
    {} as { [key: string]: DomesticPaper[] },
  )
}

export default function DomesticResearchPage() {
  // 年度ごとにグループ化
  const papersByYear = groupByYear(domesticPapers)

  // 年度のリストを取得（降順）
  const years = Object.keys(papersByYear).sort((a, b) => Number.parseInt(b) - Number.parseInt(a))

  return (
    <div>
      {/* ヘッダーセクション */}
      <section className="bg-gray-100 py-16">
        <div className="container">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">国内研究</h1>
            <p className="text-xl text-gray-600">研究室の国内学会発表</p>
          </div>
        </div>
      </section>

      {/* メインコンテンツ */}
      <section className="py-16">
        <div className="container">
          <div className="space-y-12">
            {years.map((year) => (
              <div key={year}>
                <h2 className="text-2xl font-bold mb-6 border-b pb-2">{year}年</h2>
                <div className="space-y-4">
                  {papersByYear[year].map((paper, index) => (
                    <div key={index} className="p-6 bg-white border-b border-gray-200">
                      <h3 className="font-bold text-lg mb-2">{paper.title}</h3>
                      <p className="text-gray-700 mb-2">{paper.authors}</p>
                      <p className="text-gray-500 italic">{paper.conference}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
