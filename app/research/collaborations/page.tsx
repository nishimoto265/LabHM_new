

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { collaborationsTranslations } from "@/translations/collaborations"
import { getImagePath } from "@/lib/utils"

// 共同研究データの型定義
type CollaborationProject = {
  id: string
  title: string
  description: string
  image: string
  link: string
}

export default function CollaborationsPage() {
  const language = "ja"
  const t = collaborationsTranslations[language]

  // 共同研究データ
  const collaborationProjects: CollaborationProject[] = [
    {
      id: "local5g",
      title: t.projects.local5g.title,
      description: t.projects.local5g.description,
      image: getImagePath("/images/smart_5g.png"),
      link: "/research/collaborations/local5g",
    },
    {
      id: "government-project",
      title: t.projects.governmentProject.title,
      description: t.projects.governmentProject.description,
      image: getImagePath("/images/goverment-project.png"),
      link: "/research/collaborations/government-project",
    },
  ]

  return (
    <div>
      <div className="py-16">
        <div className="container">
          {/* タイトル */}
          <div className="text-center mb-16">
            <div className="relative w-full max-w-xl mx-auto h-32 mb-4">
              <Image src={getImagePath("/images/logo_collaboration_research.png")} alt={t.title} fill className="object-contain" priority />
            </div>
            <p className="text-lg">{t.subtitle}</p>
          </div>

          {/* メインコンテンツ */}
          <div className="space-y-8">
            {collaborationProjects.map((project, index) => (
              <div
                key={project.id}
                className={`overflow-hidden bg-white pb-8 ${
                  index < collaborationProjects.length - 1 ? "border-b border-gray-200" : ""
                }`}
              >
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="relative h-64 md:h-auto md:col-span-1 overflow-hidden w-full">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className={project.id === 'local5g' ? 'object-cover' : 'object-contain'}
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-6 md:col-span-2 flex flex-col justify-between">
                    <div>
                      <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
                      <p className="text-gray-700 mb-6">{project.description}</p>
                    </div>
                    <div>
                      <Link href={project.link}>
                        <Button>{t.viewDetails}</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
