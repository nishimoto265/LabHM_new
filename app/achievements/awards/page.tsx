import Link from "next/link"
import { ExternalLink } from "lucide-react"

// 受賞データの型定義
type Award = {
  title: string
  date: string
  recipients: string
  description: string
  link?: string
  pdfLink?: string
}

// 受賞データ
const awardsData: Award[] = [
  {
    title: "NOKOH Student Seminar 2024 The Best Presentation Award",
    date: "2024年11月5日",
    recipients: "Tunn Cho Lwin",
    description:
      "lntegrating Entropy Measures Of Fetal Heart Rate Variability with DigitaI Twin TechnoIogy to Enhance FetaI Monitoring",
    pdfLink: "/assets/images/tunn_award_NOKOH.pdf",
  },
  {
    title: "ICICIC2024 Best Presentation Award",
    date: "2024年10月13日",
    recipients: "Tunn Cho Lwin, Thi Thi Zin, Pyae Phyo Kyaw, Pyke Tin, Emi Kino, Tsuyomu lkenoue",
    description:
      "Advanced fetal heart rate variability analysis using artificialintelligence and digital twin technology",
    pdfLink: "/assets/images/tunn_award_ICICIC2024.pdf",
  },
  {
    title: "ICGEC2024 Best Paper Award",
    date: "2024年8月28-29日",
    recipients: "Su Myat Noe, Thi Thi Zin, Pyke Tin, Ikuo Kobayashi",
    description: "From Vision to Vocabulary: A Multimodal Approach to Detect and Track Black Cattle Behaviors",
    pdfLink: "/assets/images/SuMyatNoe_ICGEC_ver3.pdf",
  },
  {
    title: "NCSP'24 Student Paper Award",
    date: "2024年3月1日",
    recipients: "Su Myat Noe, Thi Thi Zin, Pyke Tin, Ikuo Kobayashi",
    description: "Enhancing Precision Agriculture: Innovative Tracking Solutions for Black Cattle Monitoring",
    pdfLink: "/assets/images/NCSP24_su.pdf",
  },
  {
    title: "NCSP'24 Student Paper Award",
    date: "2024年3月1日",
    recipients: "Cho Cho Aye, Thi Thi Zin, Masaru Aikawa, Ikuo Kobayashi",
    description: "Kalman Velocity-based Multi-Stage Classification Approach for Recognizing Black Cow Actions",
  },
  {
    title: "IEEE LifeTech 2022 WIE Student Paper Award",
    date: "2022年",
    recipients: "Cho Cho Mar, Thi Thi Zin, Ikuo Kobayashi, Yoichiro Hori",
    description:
      "A Hybrid Approach: Image Processing Techniques and Deep Learning Method for Cow Detection and Tracking System",
  },
  {
    title: "ISIKM2022 Best Presentation Award",
    date: "2022年",
    recipients: "Cho Cho Aye, Thi Thi Zin, Ikuo Kobayashi",
    description: "Black Cow Localization and Tracking with YOLOv5 and Deep SORT",
  },
  {
    title: "IEEE GCCE 2021 Excellent Paper Award Gold Prize",
    date: "2021年",
    recipients: "Takafumi Hayashida, Thi Thi Zin, Katsuya Sakai, Hitoshi Mochizuki",
    description:
      "Evaluation of the severity of tremor based on each signal acquired from the displacement of the hand movements",
  },
  {
    title: "IEEE LifeTech 2021 WIE Student Paper Award",
    date: "2021年",
    recipients: "Su Myat Noe, Thi Thi Zin, Pyke Tin, Ikuo Kobayashi",
    description: "Automatic Detection of Mounting Behavior in Cattle using Semantic Segmentation and Classification",
  },
  {
    title: "IMECS 2018 Best Student Paper Award",
    date: "2018年",
    recipients: "Yuichi Mitsui, Nobuyuki Ishii, Hitoshi Mochizuki, and Thi Thi Zin",
    description: "A Study on Disease Diagnosis by Tremor Analysis",
  },
  {
    title: "SOLI 2018 Best Student Paper Award",
    date: "2018年",
    recipients: "Radia EL BACHA, Thi Thi Zin",
    description: "Ranking of Influential Users Based on User-Tweet Bipartite Graph",
  },
  {
    title: "IEEE GCCE 2017 Student Paper Award 1st Prize",
    date: "2017年",
    recipients: "Sosuke Imamura, Thi Thi Zin, Ikuo Kobayashi, Yoichiro Horii",
    description: "Automatic Evaluation of Cow's Body-Condition-Score Using 3D Camera",
  },
]

export default function AwardsPage() {
  return (
    <div>
      {/* ヘッダーセクション */}
      <section className="bg-gray-100 py-16">
        <div className="container">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">受賞</h1>
            <p className="text-xl text-gray-600">研究室の受賞実績</p>
          </div>
        </div>
      </section>

      {/* メインコンテンツ */}
      <section className="py-16">
        <div className="container">
          <div className="grid gap-6">
            {awardsData.map((award, index) => (
              <div key={index} className="p-6 bg-white border-b border-gray-200">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div>
                    <h2 className="text-xl font-bold mb-2 text-primary flex items-center">
                      {award.title}
                      {award.pdfLink && (
                        <Link href={award.pdfLink} target="_blank" className="ml-2 text-gray-500 hover:text-primary">
                          <ExternalLink className="h-4 w-4" />
                          <span className="sr-only">PDFを開く</span>
                        </Link>
                      )}
                      {award.link && (
                        <Link href={award.link} target="_blank" className="ml-2 text-gray-500 hover:text-primary">
                          <ExternalLink className="h-4 w-4" />
                          <span className="sr-only">リンクを開く</span>
                        </Link>
                      )}
                    </h2>
                    <p className="text-gray-500 mb-2">{award.date}</p>
                    <p className="font-medium mb-2">{award.recipients}</p>
                    <p className="text-gray-700">{award.description}</p>
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
