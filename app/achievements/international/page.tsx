// 国際研究発表データの型定義
type ConferencePaper = {
  authors: string
  title: string
  conference: string
  year: string
}

// 国際研究発表データ
const internationalPapers: ConferencePaper[] = [
  {
    authors: "Cho Cho Mar, Thi Thi Zin, Ikuo Kobayashi, Yoichiro Hori",
    title:
      "A Hybrid Approach: Image Processing Techniques and Deep Learning Method for Cow Detection and Tracking System",
    conference: "2022 IEEE 4th Global Conference on Life Sciences and Technologies (IEEE LifeTech 2022)",
    year: "2022",
  },
  {
    authors: "Issei Hidaka, Shoto Inoue, Thi Thi Zin",
    title: "A Study on Worker Tracking Using Camera to Improve Work Efficiency in Factories",
    conference: "2022 IEEE 4th Global Conference on Life Sciences and Technologies (IEEE LifeTech 2022)",
    year: "2022",
  },
  {
    authors: "Yusei Kawagoe, Thi Thi Zin, Ikuo Kobayashi",
    title: "Individual Identification of Cow Using Image Processing Techniques",
    conference: "2022 IEEE 4th Global Conference on Life Sciences and Technologies (IEEE LifeTech 2022)",
    year: "2022",
  },
  {
    authors: "Su Myat Noe, Thi Thi Zin, Pyke Tin, Ikuo Kobayashi",
    title: "A Deep Learning-based Solution to Cattle Region Extraction for Lameness Detection",
    conference: "2022 IEEE 4th Global Conference on Life Sciences and Technologies (IEEE LifeTech 2022)",
    year: "2022",
  },
  {
    authors: "Ye Htet, Thi Thi Zin, Hiroki Tamura, Kazuhiro Kondo, Etsuo Chosa",
    title: "Action Recognition System for Senior Citizens Using Depth Image Colorization",
    conference: "2022 IEEE 4th Global Conference on Life Sciences and Technologies (IEEE LifeTech 2022)",
    year: "2022",
  },
  {
    authors: "Cho Cho Aye, Thi Thi Zin, Ikuo Kobayashi",
    title: "Black Cow Localization and Tracking with YOLOv5 and Deep SORT",
    conference: "Fifth International Symposium on Information and Knowledge Management (ISIKM2022)",
    year: "2022",
  },
  {
    authors: "Takeru Haruyama, Thi Thi Zin, Katsuya Sakai, Hitoshi Mochizuki",
    title: "A Study on Diagnosis of Parkinson's Disease by Walking Videos",
    conference: "2021 IEEE 10th Global Conference on Consumer Electronics (IEEE GCCE 2021)",
    year: "2021",
  },
  {
    authors: "Takafumi Hayashida, Thi Thi Zin, Katsuya Sakai, Hitoshi Mochizuki",
    title:
      "Evaluation of the Severity of Tremor Based on Each Signal Acquired from the Displacement of the Hand Movements",
    conference: "2021 IEEE 10th Global Conference on Consumer Electronics (IEEE GCCE 2021)",
    year: "2021",
  },
  {
    authors: "Yuya Motomura, Thi Thi Zin, Yoichiro Horii",
    title: "Cattle Region Extraction Using Image Processing Technology",
    conference: "2021 IEEE 10th Global Conference on Consumer Electronics (IEEE GCCE 2021)",
    year: "2021",
  },
  {
    authors: "Su Myat Noe, Thi Thi Zin, Pyke Tin, Ikuo Kobayashi",
    title:
      "A Deep Learning-Based Instance Segmentation Model Using Mask R-CNN for Automated Detection and Tracking of Mounting Behavior in Cattle",
    conference: "15th International Conference on Innovation Computing, Information and Control (ICICIC2021)",
    year: "2021",
  },
  {
    authors: "Shoto Inoue, Issei Hidaka, Thi Thi Zin",
    title: "A Study on Working Group Detection after Helmet Extraction",
    conference: "15th International Conference on Innovation Computing, Information and Control (ICICIC2021)",
    year: "2021",
  },
  {
    authors: "Swe Zar Maw, Thi Thi Zin, Pyke Tin",
    title: "Cow Region Segmentation in Cattle Farm by Using Semantic Segmentation Networks",
    conference: "15th International Conference on Innovation Computing, Information and Control (ICICIC2021)",
    year: "2021",
  },
  {
    authors: "Su Myat Noe, Thi Thi Zin, Pyke Tin, Ikuo Kobayashi",
    title: "Automatic Detection of Mounting Behavior in Cattle Using Semantic Segmentation and Classification",
    conference: "2021 IEEE 3rd Global Conference on Life Sciences and Technologies (IEEE LifeTech 2021)",
    year: "2021",
  },
  {
    authors: "Thi Thi Zin, Ye Htet, Yuya Akagi, Hiroki Tamura, Kazuhiro Kondo, Sanae Araki",
    title: "Elderly Monitoring and Action Recognition System Using Stereo Depth Camera",
    conference: "2020 IEEE 9th Global Conference on Consumer Electronics (IEEE GCCE 2020)",
    year: "2020",
  },
  {
    authors: "Yuichi Mitsui, Nobuyuki Ishii, Hitoshi Mochizuki, and Thi Thi Zin",
    title: "A Study on Disease Diagnosis by Tremor Analysis",
    conference: "International MultiConference of Engineers and Computer Scientists 2018 (IMECS 2018)",
    year: "2018",
  },
  {
    authors: "Radia EL BACHA, Thi Thi Zin",
    title: "Ranking of Influential Users Based on User-Tweet Bipartite Graph",
    conference:
      "The 2018 IEEE International Conference on Service Operations and Logistics, and Informatics (SOLI 2018)",
    year: "2018",
  },
  {
    authors: "Sosuke Imamura, Thi Thi Zin, Ikuo Kobayashi, Yoichiro Horii",
    title: "Automatic Evaluation of Cow's Body-Condition-Score Using 3D Camera",
    conference: "2017 IEEE 6th Global Conference on Consumer Electronics (IEEE GCCE 2017)",
    year: "2017",
  },
]

// 年度ごとにグループ化する関数
function groupByYear(papers: ConferencePaper[]): { [key: string]: ConferencePaper[] } {
  return papers.reduce(
    (groups, paper) => {
      const year = paper.year
      if (!groups[year]) {
        groups[year] = []
      }
      groups[year].push(paper)
      return groups
    },
    {} as { [key: string]: ConferencePaper[] },
  )
}

export default function InternationalResearchPage() {
  // 年度ごとにグループ化
  const papersByYear = groupByYear(internationalPapers)

  // 年度のリストを取得（降順）
  const years = Object.keys(papersByYear).sort((a, b) => Number.parseInt(b) - Number.parseInt(a))

  return (
    <div>
      {/* ヘッダーセクション */}
      <section className="bg-gray-100 py-16">
        <div className="container">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">国際研究</h1>
            <p className="text-xl text-gray-600">研究室の国際会議発表</p>
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
