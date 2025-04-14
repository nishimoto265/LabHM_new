"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useLanguage } from "@/contexts/language-context"

// 業績ページの翻訳
const achievementsTranslations = {
  ja: {
    title: "研究業績",
    subtitle: "研究室の研究成果と活動",
    categoryFilter: "カテゴリーを選択",
    categories: {
      all: "すべて",
      international: "国際研究",
      domestic: "国内研究",
      award: "受賞",
      media: "記事・出演",
      journal: "論文誌",
    },
    noResults: {
      message: "選択したカテゴリーの業績は見つかりませんでした。",
      showAll: "すべての業績を表示",
    },
    formatDate: (date: Date) => {
      return date.toLocaleDateString("ja-JP", { year: "numeric", month: "long", day: "numeric" })
    },
    pdfLink: "PDFを開く",
    openLink: "リンクを開く",
  },
  en: {
    title: "Achievements",
    subtitle: "Research Achievements and Activities",
    categoryFilter: "Select Category",
    categories: {
      all: "All",
      international: "International Research",
      domestic: "Domestic Research",
      award: "Awards",
      media: "Media Coverage",
      journal: "Journals",
    },
    noResults: {
      message: "No achievements found in the selected category.",
      showAll: "Show all achievements",
    },
    formatDate: (date: Date) => {
      return date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })
    },
    pdfLink: "Open PDF",
    openLink: "Open Link",
  },
}

// 業績データの型定義
type Achievement = {
  id: string
  title: {
    ja: string
    en: string
  }
  date: string
  category: "international" | "domestic" | "award" | "media" | "journal"
  categoryLabel: {
    ja: string
    en: string
  }
  authors?: string
  venue?: {
    ja: string
    en: string
  }
  description?: {
    ja: string
    en: string
  }
  link?: string
  pdfLink?: string
  imageLink?: string
  projectCategory?: {
    ja: string
    en: string
  }
}

// 業績データ
const achievements: Achievement[] = [
  // 記事・出演（メディア）
  {
    id: "media-1",
    title: {
      ja: "産学官連携によるローカル5Gを用いたスマート農業の実現に向けた実証実験",
      en: "Demonstration Experiment for Smart Agriculture Using Local 5G through Industry-Academia-Government Collaboration",
    },
    date: "2021-10-25",
    category: "media",
    categoryLabel: {
      ja: "記事・出演",
      en: "Media Coverage",
    },
    description: {
      ja: "株式会社NTTデータ経営研究所様を代表機関として､株式会社NTTドコモ北海道支社様､ホクレン農業協同組合連合会様､北海道イシダ株式会社様､きたみらい農業協同組合様､訓子府町様の 6者と連携した共同プロジェクト",
      en: "A collaborative project with six partners: NTT DATA Institute of Management Consulting, Inc. as the representative organization, NTT DOCOMO Hokkaido Branch, Hokuren Federation of Agricultural Cooperatives, Hokkaido Ishida Co., Ltd., Kitamirai Agricultural Cooperative, and Kunneppu Town",
    },
    link: "https://www.miyazaki-u.ac.jp/tech/mediadata/pdf/topic_20211025.pdf",
    projectCategory: {
      ja: "牛",
      en: "Cattle",
    },
  },
  {
    id: "media-2",
    title: {
      ja: "牛舎内で5Gを活用し、従業員の作業効率化を支援する実証試験",
      en: "Demonstration Test to Support Work Efficiency Using 5G in Cattle Barns",
    },
    date: "2019-12-24",
    category: "media",
    categoryLabel: {
      ja: "記事・出演",
      en: "Media Coverage",
    },
    description: {
      ja: "株式会社国際電気通信基礎技術研究所（ATR）様、KDDI株式会社様、北海道河東郡上士幌町様、とかち村上牧場様と連携",
      en: "In collaboration with Advanced Telecommunications Research Institute International (ATR), KDDI Corporation, Kamishihoro Town in Hokkaido, and Tokachi Murakami Farm",
    },
    link: "https://www.miyazaki-u.ac.jp/tech/mediadata/pdf/topic_20191224.pdf",
    projectCategory: {
      ja: "牛",
      en: "Cattle",
    },
  },

  // 国際会議
  {
    id: "int-1",
    title: {
      ja: "A Hybrid Approach: Image Processing Techniques and Deep Learning Method for Cow Detection and Tracking System",
      en: "A Hybrid Approach: Image Processing Techniques and Deep Learning Method for Cow Detection and Tracking System",
    },
    date: "2022-03-15",
    category: "international",
    categoryLabel: {
      ja: "国際研究",
      en: "International Research",
    },
    authors: "Cho Cho Mar, Thi Thi Zin, Ikuo Kobayashi, Yoichiro Hori",
    venue: {
      ja: "2022 IEEE 4th Global Conference on Life Sciences and Technologies (IEEE LifeTech 2022)",
      en: "2022 IEEE 4th Global Conference on Life Sciences and Technologies (IEEE LifeTech 2022)",
    },
    projectCategory: {
      ja: "牛",
      en: "Cattle",
    },
  },
  {
    id: "int-2",
    title: {
      ja: "A Study on Worker Tracking Using Camera to Improve Work Efficiency in Factories",
      en: "A Study on Worker Tracking Using Camera to Improve Work Efficiency in Factories",
    },
    date: "2022-03-10",
    category: "international",
    categoryLabel: {
      ja: "国際研究",
      en: "International Research",
    },
    authors: "Issei Hidaka, Shoto Inoue, Thi Thi Zin",
    venue: {
      ja: "2022 IEEE 4th Global Conference on Life Sciences and Technologies (IEEE LifeTech 2022)",
      en: "2022 IEEE 4th Global Conference on Life Sciences and Technologies (IEEE LifeTech 2022)",
    },
    projectCategory: {
      ja: "AI",
      en: "AI",
    },
  },
  {
    id: "int-3",
    title: {
      ja: "Individual Identification of Cow Using Image Processing Techniques",
      en: "Individual Identification of Cow Using Image Processing Techniques",
    },
    date: "2022-03-09",
    category: "international",
    categoryLabel: {
      ja: "国際研究",
      en: "International Research",
    },
    authors: "Yusei Kawagoe, Thi Thi Zin, Ikuo Kobayashi",
    venue: {
      ja: "2022 IEEE 4th Global Conference on Life Sciences and Technologies (IEEE LifeTech 2022)",
      en: "2022 IEEE 4th Global Conference on Life Sciences and Technologies (IEEE LifeTech 2022)",
    },
  },
  {
    id: "int-4",
    title: {
      ja: "A Deep Learning-based Solution to Cattle Region Extraction for Lameness Detection",
      en: "A Deep Learning-based Solution to Cattle Region Extraction for Lameness Detection",
    },
    date: "2022-03-08",
    category: "international",
    categoryLabel: {
      ja: "国際研究",
      en: "International Research",
    },
    authors: "Su Myat Noe, Thi Thi Zin, Pyke Tin, Ikuo Kobayashi",
    venue: {
      ja: "2022 IEEE 4th Global Conference on Life Sciences and Technologies (IEEE LifeTech 2022)",
      en: "2022 IEEE 4th Global Conference on Life Sciences and Technologies (IEEE LifeTech 2022)",
    },
  },
  {
    id: "int-5",
    title: {
      ja: "Action Recognition System for Senior Citizens Using Depth Image Colorization",
      en: "Action Recognition System for Senior Citizens Using Depth Image Colorization",
    },
    date: "2022-03-07",
    category: "international",
    categoryLabel: {
      ja: "国際研究",
      en: "International Research",
    },
    authors: "Ye Htet, Thi Thi Zin, Hiroki Tamura, Kazuhiro Kondo, Etsuo Chosa",
    venue: {
      ja: "2022 IEEE 4th Global Conference on Life Sciences and Technologies (IEEE LifeTech 2022)",
      en: "2022 IEEE 4th Global Conference on Life Sciences and Technologies (IEEE LifeTech 2022)",
    },
    projectCategory: {
      ja: "人",
      en: "Human",
    },
  },

  // 国内研究
  {
    id: "dom-1",
    title: {
      ja: "Enhancing Precision Agriculture: Innovative Tracking Solutions for Black Cattle Monitoring",
      en: "Enhancing Precision Agriculture: Innovative Tracking Solutions for Black Cattle Monitoring",
    },
    date: "2024-03-01",
    category: "domestic",
    categoryLabel: {
      ja: "国内研究",
      en: "Domestic Research",
    },
    authors: "Su Myat Noe, Thi Thi Zin, Pyke Tin, Ikuo Kobayashi",
    venue: {
      ja: "NCSP'24",
      en: "NCSP'24",
    },
  },
  {
    id: "dom-2",
    title: {
      ja: "Kalman Velocity-based Multi-Stage Classification Approach for Recognizing Black Cow Actions",
      en: "Kalman Velocity-based Multi-Stage Classification Approach for Recognizing Black Cow Actions",
    },
    date: "2024-03-01",
    category: "domestic",
    categoryLabel: {
      ja: "国内研究",
      en: "Domestic Research",
    },
    authors: "Cho Cho Aye, Thi Thi Zin, Masaru Aikawa, Ikuo Kobayashi",
    venue: {
      ja: "NCSP'24",
      en: "NCSP'24",
    },
  },

  // 受賞
  {
    id: "award-1",
    title: {
      ja: "NOKOH Student Seminar 2024 The Best Presentation Award",
      en: "NOKOH Student Seminar 2024 The Best Presentation Award",
    },
    date: "2024-11-05",
    category: "award",
    categoryLabel: {
      ja: "受賞",
      en: "Award",
    },
    authors: "Tunn Cho Lwin",
    description: {
      ja: "lntegrating Entropy Measures Of Fetal Heart Rate Variability with DigitaI Twin TechnoIogy to Enhance FetaI Monitoring",
      en: "lntegrating Entropy Measures Of Fetal Heart Rate Variability with DigitaI Twin TechnoIogy to Enhance FetaI Monitoring",
    },
    pdfLink: "/assets/images/tunn_award_NOKOH.pdf",
  },
  {
    id: "award-2",
    title: {
      ja: "ICICIC2024 Best Presentation Award",
      en: "ICICIC2024 Best Presentation Award",
    },
    date: "2024-10-13",
    category: "award",
    categoryLabel: {
      ja: "受賞",
      en: "Award",
    },
    authors: "Tunn Cho Lwin, Thi Thi Zin, Pyae Phyo Kyaw, Pyke Tin, Emi Kino, Tsuyomu lkenoue",
    description: {
      ja: "Advanced fetal heart rate variability analysis using artificialintelligence and digital twin technology",
      en: "Advanced fetal heart rate variability analysis using artificialintelligence and digital twin technology",
    },
    pdfLink: "/assets/images/tunn_award_ICICIC2024.pdf",
  },
  {
    id: "award-3",
    title: {
      ja: "ICGEC2024 Best Paper Award",
      en: "ICGEC2024 Best Paper Award",
    },
    date: "2024-08-29",
    category: "award",
    categoryLabel: {
      ja: "受賞",
      en: "Award",
    },
    authors: "Su Myat Noe, Thi Thi Zin, Pyke Tin, Ikuo Kobayashi",
    description: {
      ja: "From Vision to Vocabulary: A Multimodal Approach to Detect and Track Black Cattle Behaviors",
      en: "From Vision to Vocabulary: A Multimodal Approach to Detect and Track Black Cattle Behaviors",
    },
    pdfLink: "/assets/images/SuMyatNoe_ICGEC_ver3.pdf",
    imageLink: "/assets/images/ICGEC2024_su.jpg",
  },

  // 論文誌（博士）
  {
    id: "journal-d-1",
    title: {
      ja: "A Study to Predict Calving Time in Dairy Cows Using Image Processing Techniques and Stochastic Model",
      en: "A Study to Predict Calving Time in Dairy Cows Using Image Processing Techniques and Stochastic Model",
    },
    date: "2021-03-15",
    category: "journal",
    categoryLabel: {
      ja: "論文誌（博士）",
      en: "Journal (Doctoral)",
    },
    authors: "Swe Zar Maw",
    venue: {
      ja: "博士（工学）論文",
      en: "Doctoral Thesis in Engineering",
    },
  },
  {
    id: "journal-d-2",
    title: {
      ja: "牛の分娩監視システムに関する研究",
      en: "Study on Calving Monitoring System for Cattle",
    },
    date: "2020-03-15",
    category: "journal",
    categoryLabel: {
      ja: "論文誌（博士）",
      en: "Journal (Doctoral)",
    },
    authors: "須見 公祐",
    venue: {
      ja: "博士（工学）論文",
      en: "Doctoral Thesis in Engineering",
    },
  },
  {
    id: "journal-d-3",
    title: {
      ja: "Human Action Recognition Using Depth Camera －Deep Learning Based Skeletal Joints and Human-Object Interactions－",
      en: "Human Action Recognition Using Depth Camera －Deep Learning Based Skeletal Joints and Human-Object Interactions－",
    },
    date: "2019-03-15",
    category: "journal",
    categoryLabel: {
      ja: "論文誌（博士）",
      en: "Journal (Doctoral)",
    },
    authors: "Cho Nilar Phyo",
    venue: {
      ja: "博士（工学）論文",
      en: "Doctoral Thesis in Engineering",
    },
  },
  {
    id: "journal-d-4",
    title: {
      ja: "A Study on Detecting Abnormal Events to Support Independent Living",
      en: "A Study on Detecting Abnormal Events to Support Independent Living",
    },
    date: "2019-03-15",
    category: "journal",
    categoryLabel: {
      ja: "論文誌（博士）",
      en: "Journal (Doctoral)",
    },
    authors: "Swe Nwe Nwe Htun",
    venue: {
      ja: "博士（工学）論文",
      en: "Doctoral Thesis in Engineering",
    },
  },

  // 論文誌（修士）- 令和5年度
  {
    id: "journal-m-r5-1",
    title: {
      ja: "Flaskを用いたファブリー病の振戦運動評価の研究",
      en: "Study on Tremor Movement Evaluation of Fabry Disease Using Flask",
    },
    date: "2023-03-15",
    category: "journal",
    categoryLabel: {
      ja: "論文誌（修士）",
      en: "Journal (Master's)",
    },
    authors: "永野 流磨",
    venue: {
      ja: "修士（工学）論文",
      en: "Master's Thesis in Engineering",
    },
  },
  {
    id: "journal-m-r5-2",
    title: {
      ja: "RGBカメラによる牛の歩行動画を用いた個体識別に関する研究",
      en: "Study on Individual Identification Using Walking Videos of Cattle with RGB Camera",
    },
    date: "2023-03-15",
    category: "journal",
    categoryLabel: {
      ja: "論文誌（修士）",
      en: "Journal (Master's)",
    },
    authors: "高岡 柚貴",
    venue: {
      ja: "修士（工学）論文",
      en: "Master's Thesis in Engineering",
    },
  },
]

// カテゴリーのリスト
const categories = [
  { value: "all", label: "すべて" },
  { value: "international", label: "国際研究" },
  { value: "domestic", label: "国内研究" },
  { value: "award", label: "受賞" },
  { value: "media", label: "記事・出演" },
  { value: "journal", label: "論文誌" },
]

// カテゴリに応じた背景色を返す関数
function getCategoryBgColor(category: string): string {
  switch (category) {
    case "international":
      return "bg-blue-600"
    case "domestic":
      return "bg-green-600"
    case "award":
      return "bg-yellow-600"
    case "media":
      return "bg-purple-600"
    case "journal":
      return "bg-red-600"
    default:
      return "bg-gray-600"
  }
}

export default function AchievementsPage() {
  // 選択されたカテゴリー
  const [selectedCategory, setSelectedCategory] = useState("all")
  const { language } = useLanguage()
  const t = achievementsTranslations[language]

  // 業績を日付順にソート（新しい順）
  const sortedAchievements = useMemo(() => {
    return [...achievements].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  }, [])

  // 選択されたカテゴリーでフィルタリングされた業績
  const filteredAchievements = useMemo(() => {
    // まず修士論文を除外
    const withoutMasterThesis = sortedAchievements.filter(
      (achievement) =>
        !(
          achievement.category === "journal" &&
          achievement.venue?.[language].includes(language === "ja" ? "修士" : "Master")
        ),
    )

    if (selectedCategory === "all") {
      return withoutMasterThesis
    }
    return withoutMasterThesis.filter((achievement) => achievement.category === selectedCategory)
  }, [selectedCategory, sortedAchievements, language])

  return (
    <div>
      {/* ヘッダーセクション */}
      <section className="bg-gray-100 py-16">
        <div className="container">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.title}</h1>
            <p className="text-xl text-gray-600">{t.subtitle}</p>
          </div>
        </div>
      </section>

      {/* メインコンテンツ */}
      <section className="py-16">
        <div className="container">
          {/* カテゴリーフィルター */}
          <div className="flex justify-end mb-8">
            <div className="w-64">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <SelectValue placeholder={t.categoryFilter} />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {t.categories[category.value as keyof typeof t.categories]}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* 業績リスト */}
          <div className="space-y-6">
            {filteredAchievements.map((achievement) => (
              <div key={achievement.id} className="p-4 bg-white border-b border-gray-200">
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="flex-grow">
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className={`inline-block px-2 py-1 text-xs font-medium ${getCategoryBgColor(achievement.category)} text-white rounded`}
                      >
                        {t.categories[achievement.category as keyof typeof t.categories]}
                      </span>
                      <span className="text-gray-500 text-sm">{t.formatDate(new Date(achievement.date))}</span>
                    </div>

                    <h2 className="text-lg font-bold mb-2 text-primary flex items-center">
                      {achievement.title[language]}
                      {achievement.pdfLink && (
                        <Link
                          href={achievement.pdfLink}
                          target="_blank"
                          className="ml-2 text-gray-500 hover:text-primary"
                        >
                          <ExternalLink className="h-4 w-4" />
                          <span className="sr-only">{t.pdfLink}</span>
                        </Link>
                      )}
                      {achievement.link && !achievement.pdfLink && (
                        <Link href={achievement.link} target="_blank" className="ml-2 text-gray-500 hover:text-primary">
                          <ExternalLink className="h-4 w-4" />
                          <span className="sr-only">{t.openLink}</span>
                        </Link>
                      )}
                    </h2>

                    {achievement.authors && <p className="text-gray-700 mb-2">{achievement.authors}</p>}

                    {achievement.venue && <p className="text-gray-500 italic mb-2">{achievement.venue[language]}</p>}

                    {achievement.description && (
                      <p className="text-gray-700 mt-1 text-sm">{achievement.description[language]}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 検索結果がない場合 */}
          {filteredAchievements.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">{t.noResults.message}</p>
              <Button variant="outline" className="mt-4" onClick={() => setSelectedCategory("all")}>
                {t.noResults.showAll}
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
