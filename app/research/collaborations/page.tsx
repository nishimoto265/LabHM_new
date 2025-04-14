"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { collaborationsTranslations } from "@/translations/collaborations"

// 共同研究データの型定義
type CollaborationProject = {
  id: string
  title: string
  description: string
  image: string
  link: string
}

export default function CollaborationsPage() {
  const { language } = useLanguage()
  const t = collaborationsTranslations[language]

  // 共同研究データ
  const collaborationProjects: CollaborationProject[] = [
    {
      id: "local5g",
      title: t.projects.local5g.title,
      description: t.projects.local5g.description,
      image: "/images/collaboration-1.jpg",
      link: "/research/collaborations/local5g",
    },
    {
      id: "government-project",
      title: t.projects.governmentProject.title,
      description: t.projects.governmentProject.description,
      image: "/images/goverment-project.png",
      link: "/research/collaborations/government-project",
    },
  ]

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
          <div className="space-y-8">
            {collaborationProjects.map((project, index) => (
              <div
                key={project.id}
                className={`overflow-hidden bg-white pb-8 ${
                  index < collaborationProjects.length - 1 ? "border-b border-gray-200" : ""
                }`}
              >
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="relative h-64 md:h-auto md:col-span-1">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
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
      </section>
    </div>
  )
}
