import Image from "next/image"
import Link from "next/link"
import { researchProjectsTranslations } from "@/translations/research-projects"
import { getImagePath } from "@/lib/utils"

// 研究プロジェクトの型定義
type ResearchProject = {
  id: string
  title: string
  description: string
  image: string
  link: string
  keywords?: string[]
}

export default function ResearchProjectsPage() {
  const language = "ja"
  const t = researchProjectsTranslations[language]

  // 研究プロジェクトデータ
  const researchProjects: ResearchProject[] = [
    // 医療分野
    {
      id: "fetal-monitoring",
      title: t.projects.fetalMonitoring.title,
      description: t.projects.fetalMonitoring.description,
      image: getImagePath("/images/research_medical.png"),
      link: "/research/projects/fetal-monitoring",
      keywords: ["医療", "AI", "画像処理"],
    },

    // 牛管理分野
    {
      id: "calving-prediction",
      title: t.projects.calvingPrediction.title,
      description: t.projects.calvingPrediction.description,
      image: getImagePath("/images/research_cow.jpg"),
      link: "/research/projects/calving-prediction",
      keywords: ["牛", "AI", "画像処理"],
    },
    {
      id: "cattle-identification",
      title: t.projects.cattleIdentification.title,
      description: t.projects.cattleIdentification.description,
      image: getImagePath("/images/research_cow.jpg"),
      link: "/research/projects/cattle-identification",
      keywords: ["牛", "AI", "画像処理"],
    },
    {
      id: "bcs-evaluation",
      title: t.projects.bcsEvaluation.title,
      description: t.projects.bcsEvaluation.description,
      image: getImagePath("/images/research_cow.jpg"),
      link: "/research/projects/bcs-evaluation",
      keywords: ["牛", "AI", "画像処理"],
    },
    {
      id: "calf-behavior-analysis",
      title: t.projects.calfBehaviorAnalysis.title,
      description: t.projects.calfBehaviorAnalysis.description,
      image: getImagePath("/images/research_cow.jpg"),
      link: "/research/projects/calf-behavior-analysis",
      keywords: ["牛", "データ分析"],
    },
    {
      id: "cattle-feeding",
      title: t.projects.cattleFeeding.title,
      description: t.projects.cattleFeeding.description,
      image: getImagePath("/images/research_cow.jpg"),
      link: "/research/projects/cattle-feeding",
      keywords: ["牛", "AI"],
    },
    {
      id: "ear-tag-identification",
      title: t.projects.earTagIdentification.title,
      description: t.projects.earTagIdentification.description,
      image: getImagePath("/images/research_cow.jpg"),
      link: "/research/projects/ear-tag-identification",
      keywords: ["牛", "画像処理"],
    },

    // 人管理分野
    {
      id: "elderly-monitoring",
      title: t.projects.elderlyMonitoring.title,
      description: t.projects.elderlyMonitoring.description,
      image: getImagePath("/images/research_oldmen.png"),
      link: "/research/projects/elderly-monitoring",
      keywords: ["人", "AI", "データ分析"],
    },
  ]

  // キーワードリスト
  const keywords = [
    t.keywords.all,
    "牛",
    "人",
    "医療",
    "AI",
    "画像処理",
    "データ分析",
  ]

  // すべてのプロジェクトを表示（フィルタリングなし）
  const filteredProjects = researchProjects

  return (
    <div className="min-h-screen flex flex-col">
      {/* メインコンテンツ */}
      <div className="flex-grow">
        <div className="py-16">
          {/* Research Projects タイトル */}
          <div className="text-center mb-16">
            <div className="relative w-full max-w-md mx-auto h-16 mb-4">
              <Image
                src={getImagePath("/images/logo_research.png")}
                alt="Research Projects"
                fill
                className="object-contain"
                priority
              />
            </div>
            <p className="text-lg">{t.subtitle}</p>
          </div>

          {/* キーワードフィルター（静的表示） */}
          <div className="container mb-8">
            <div className="flex flex-wrap gap-2 justify-center">
              {keywords.map((keyword) => (
                <button
                  key={keyword}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    keyword === t.keywords.all
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                  disabled
                >
                  {keyword}
                </button>
              ))}
            </div>
          </div>

          {/* プロジェクトグリッド */}
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <Link key={project.id} href={project.link} className="group">
                  <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 line-clamp-3">{project.description}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.keywords?.map((keyword) => (
                          <span
                            key={keyword}
                            className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-full"
                          >
                            {keyword}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}