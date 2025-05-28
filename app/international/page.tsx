"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { internationalTranslations } from "@/translations/international"
import { getImagePath } from "@/lib/utils"

// 国際連携データの型定義
type InternationalProgram = {
  id: string
  title: string
  description: string
  image: string
  link: string
}

export default function InternationalPage() {
  const { language } = useLanguage()
  const t = internationalTranslations[language]

  // 国際連携データ
  const internationalPrograms: InternationalProgram[] = [
    {
      id: "sakura-science",
      title: t.programs.sakuraScience.title,
      description: t.programs.sakuraScience.description,
      image: getImagePath("/images/sakura_logo.png"),
      link: "/activities/sakura-science",
    },
    {
      id: "international-conferences",
      title: t.programs.internationalConferences.title,
      description: t.programs.internationalConferences.description,
      image: getImagePath("/images/inter_conf.jpg"),
      link: "/achievements#international",
    },
    {
      id: "exchange-students",
      title: t.programs.exchangeStudents.title,
      description: t.programs.exchangeStudents.description,
      image: getImagePath("/images/ryuugakusei.jpg"),
      link: "/members#students",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      {/* メインコンテンツ */}
      <div className="flex-grow">
        <div className="py-16">
          {/* International Collaboration タイトル */}
          <div className="text-center mb-16">
            <div className="relative w-full max-w-md mx-auto h-16 mb-4">
              <Image
                src={getImagePath("/images/logo_international_collaboration.png")}
                alt="International Collaboration"
                fill
                className="object-contain"
                priority
              />
            </div>
            <p className="text-lg">{t.subtitle}</p>
          </div>

          <div className="container">
            <div className="max-w-4xl mx-auto mb-12 pb-8 border-b border-gray-200">
              <p className="text-center text-lg text-gray-700">{t.introduction}</p>
            </div>

            <div className="grid gap-8">
              {internationalPrograms.map((program) => (
                <div key={program.id} className="overflow-hidden bg-white border-b border-gray-200">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="relative h-64 md:h-auto md:col-span-1">
                      <Image
                        src={program.image || "/placeholder.svg"}
                        alt={program.title}
                        fill
                        className={program.id === 'sakura-science' ? 'object-contain' : 'object-cover'}
                      />
                    </div>
                    <div className="p-6 md:col-span-2 flex flex-col justify-between">
                      <div>
                        <h2 className="text-2xl font-bold mb-4">{program.title}</h2>
                        <p className="text-gray-700 mb-6">{program.description}</p>
                      </div>
                      <div>
                        <Link href={program.link}>
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
    </div>
  )
}
