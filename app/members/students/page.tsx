"use client"

import Image from "next/image"
import Link from "next/link"
import { Github, Twitter, Linkedin, Globe } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { membersTranslations } from "@/translations/members"

// 学生メンバーの型定義
type StudentMember = {
  name: string
  nameEn?: string
  program: "doctoral" | "masters" | "bachelor"
  year?: number
  lab?: string
  image?: string
  socialLinks?: {
    github?: string
    twitter?: string
    linkedin?: string
    website?: string
  }
}

// 学生メンバーデータ
const studentMembers: StudentMember[] = [
  // 博士課程
  {
    name: "Su Myat Noe（ｽ ﾐｬ ﾉｰ）",
    program: "doctoral",
    year: 3,
    image: "/images/no_image.png",
    socialLinks: {
      github: "https://github.com/",
      twitter: "https://twitter.com/",
    },
  },
  {
    name: "Wai Hnin Eaindrar Mg（ｳｪｲ ﾆﾝ ｴﾝﾄﾞﾗﾏ）",
    program: "doctoral",
    year: 3,
    image: "/images/no_image.png",
    socialLinks: {
      linkedin: "https://linkedin.com/",
    },
  },
  {
    name: "Tunn Cho Lwin（ﾄｩﾝ ﾁｮ ﾚﾝ）",
    program: "doctoral",
    year: 2,
    image: "/images/no_image.png",
  },
  {
    name: "橋本 幸枝",
    program: "doctoral",
    year: 2,
    image: "/images/no_image.png",
  },
  {
    name: "San Chain Tun（ｻﾝ ﾁｪｲﾝ ﾄｩﾝ）",
    program: "doctoral",
    year: 1,
    image: "/images/no_image.png",
    socialLinks: {
      github: "https://github.com/",
    },
  },
  {
    name: "Bo Bo Myint（ﾎﾞｰ ﾎﾞｰ ﾐｪｴﾝﾄ）",
    program: "doctoral",
    year: 1,
    image: "/images/no_image.png",
  },

  // 修士課程
  {
    name: "丹野 龍晟",
    program: "masters",
    year: 2,
    image: "/images/no_image.png",
    socialLinks: {
      twitter: "https://twitter.com/",
    },
  },
  {
    name: "筑波 真矢",
    program: "masters",
    year: 2,
    image: "/images/no_image.png",
  },
  {
    name: "西山 孟人",
    program: "masters",
    year: 2,
    image: "/images/no_image.png",
    socialLinks: {
      github: "https://github.com/",
      website: "https://example.com",
    },
  },
  {
    name: "石川 太一",
    program: "masters",
    year: 1,
    image: "/images/no_image.png",
  },
  {
    name: "椎原 陽",
    program: "masters",
    year: 1,
    image: "/images/no_image.png",
  },
  {
    name: "清水 祐一朗",
    program: "masters",
    year: 1,
    image: "/images/no_image.png",
    socialLinks: {
      github: "https://github.com/",
      linkedin: "https://linkedin.com/",
    },
  },
  {
    name: "Pyae Phyo Kyaw（ﾋﾟｪ ﾋﾟｮ ﾁｮｰ）",
    program: "masters",
    year: 1,
    image: "/images/no_image.png",
  },
  {
    name: "Aung Si Thu Moe（ｱｳﾝ ｼ ﾄｩ ﾓｰ）",
    program: "masters",
    year: 1,
    image: "/images/no_image.png",
  },

  // 学部生
  {
    name: "川添 慎吉",
    program: "bachelor",
    image: "/images/no_image.png",
  },
  {
    name: "中嶋 麗文",
    program: "bachelor",
    image: "/images/no_image.png",
    socialLinks: {
      twitter: "https://twitter.com/",
    },
  },
  {
    name: "西本 大地",
    program: "bachelor",
    image: "/images/no_image.png",
  },
  {
    name: "村山 拓海",
    program: "bachelor",
    image: "/images/no_image.png",
    socialLinks: {
      github: "https://github.com/",
    },
  },
  {
    name: "荒木 駿佑",
    program: "bachelor",
    lab: "椎屋研究室",
    image: "/images/no_image.png",
  },
  {
    name: "佐藤 賢吾",
    program: "bachelor",
    lab: "椎屋研究室",
    image: "/images/no_image.png",
  },
]

// プログラム別にメンバーをグループ化する関数
function groupMembersByProgram(members: StudentMember[]) {
  return {
    doctoral: members.filter((member) => member.program === "doctoral"),
    masters: members.filter((member) => member.program === "masters"),
    bachelor: members.filter((member) => member.program === "bachelor"),
  }
}

// 学年表示用の関数
function getYearText(program: string, year?: number, lang = "ja"): string {
  if (!year) return ""

  const yearPrefix = membersTranslations[lang as "ja" | "en"].students.year

  switch (program) {
    case "doctoral":
      return `${yearPrefix.doctoral}${year}${lang === "ja" ? "年" : ""}`
    case "masters":
      return `${yearPrefix.masters}${year}${lang === "ja" ? "年" : ""}`
    default:
      return year ? `${year}${lang === "ja" ? "年" : ""}` : ""
  }
}

export default function StudentsPage() {
  const { language } = useLanguage()
  const t = membersTranslations[language]

  const groupedMembers = groupMembersByProgram(studentMembers)

  return (
    <div>
      {/* ヘッダーセクション */}
      <section className="bg-gray-100 py-16">
        <div className="container">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.students.title}</h1>
            <p className="text-xl text-gray-600">{t.students.subtitle}</p>
          </div>
        </div>
      </section>

      {/* メインコンテンツ */}
      <section className="py-16">
        <div className="container">
          <div className="space-y-16">
            {/* 博士課程 */}
            <div>
              <h2 className="text-2xl font-bold mb-6 border-b pb-2">
                {t.students.doctoral} - {groupedMembers.doctoral.length}
                {t.students.countSuffix}
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {groupedMembers.doctoral.map((member, index) => (
                  <div key={index} className="text-center">
                    <div className="relative w-32 h-32 mx-auto mb-2">
                      <Image
                        src={member.image || "/images/no_image.png"}
                        alt={member.name}
                        fill
                        className="object-cover rounded-none"
                      />
                    </div>
                    <h3 className="font-medium text-sm">{member.name}</h3>
                    <p className="text-xs text-gray-500">
                      {getYearText(member.program, member.year, language)}
                      {member.lab && ` • ${member.lab}`}
                    </p>
                    {member.socialLinks && (
                      <div className="flex justify-center space-x-1 mt-1">
                        {member.socialLinks.github && (
                          <Link
                            href={member.socialLinks.github}
                            target="_blank"
                            className="text-gray-600 hover:text-primary"
                          >
                            <Github className="h-3 w-3" />
                          </Link>
                        )}
                        {member.socialLinks.twitter && (
                          <Link
                            href={member.socialLinks.twitter}
                            target="_blank"
                            className="text-gray-600 hover:text-primary"
                          >
                            <Twitter className="h-3 w-3" />
                          </Link>
                        )}
                        {member.socialLinks.linkedin && (
                          <Link
                            href={member.socialLinks.linkedin}
                            target="_blank"
                            className="text-gray-600 hover:text-primary"
                          >
                            <Linkedin className="h-3 w-3" />
                          </Link>
                        )}
                        {member.socialLinks.website && (
                          <Link
                            href={member.socialLinks.website}
                            target="_blank"
                            className="text-gray-600 hover:text-primary"
                          >
                            <Globe className="h-3 w-3" />
                          </Link>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* 修士課程 */}
            <div>
              <h2 className="text-2xl font-bold mb-6 border-b pb-2">
                {t.students.masters} - {groupedMembers.masters.length}
                {t.students.countSuffix}
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {groupedMembers.masters.map((member, index) => (
                  <div key={index} className="text-center">
                    <div className="relative w-32 h-32 mx-auto mb-2">
                      <Image
                        src={member.image || "/images/no_image.png"}
                        alt={member.name}
                        fill
                        className="object-cover rounded-none"
                      />
                    </div>
                    <h3 className="font-medium text-sm">{member.name}</h3>
                    <p className="text-xs text-gray-500">
                      {getYearText(member.program, member.year, language)}
                      {member.lab && ` • ${member.lab}`}
                    </p>
                    {member.socialLinks && (
                      <div className="flex justify-center space-x-1 mt-1">
                        {member.socialLinks.github && (
                          <Link
                            href={member.socialLinks.github}
                            target="_blank"
                            className="text-gray-600 hover:text-primary"
                          >
                            <Github className="h-3 w-3" />
                          </Link>
                        )}
                        {member.socialLinks.twitter && (
                          <Link
                            href={member.socialLinks.twitter}
                            target="_blank"
                            className="text-gray-600 hover:text-primary"
                          >
                            <Twitter className="h-3 w-3" />
                          </Link>
                        )}
                        {member.socialLinks.linkedin && (
                          <Link
                            href={member.socialLinks.linkedin}
                            target="_blank"
                            className="text-gray-600 hover:text-primary"
                          >
                            <Linkedin className="h-3 w-3" />
                          </Link>
                        )}
                        {member.socialLinks.website && (
                          <Link
                            href={member.socialLinks.website}
                            target="_blank"
                            className="text-gray-600 hover:text-primary"
                          >
                            <Globe className="h-3 w-3" />
                          </Link>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* 学部生 */}
            <div>
              <h2 className="text-2xl font-bold mb-6 border-b pb-2">
                {t.students.bachelor} - {groupedMembers.bachelor.length}
                {t.students.countSuffix}
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {groupedMembers.bachelor.map((member, index) => (
                  <div key={index} className="text-center">
                    <div className="relative w-32 h-32 mx-auto mb-2">
                      <Image
                        src={member.image || "/images/no_image.png"}
                        alt={member.name}
                        fill
                        className="object-cover rounded-none"
                      />
                    </div>
                    <h3 className="font-medium text-sm">{member.name}</h3>
                    <p className="text-xs text-gray-500">
                      {getYearText(member.program, member.year, language)}
                      {member.lab && ` • ${member.lab}`}
                    </p>
                    {member.socialLinks && (
                      <div className="flex justify-center space-x-1 mt-1">
                        {member.socialLinks.github && (
                          <Link
                            href={member.socialLinks.github}
                            target="_blank"
                            className="text-gray-600 hover:text-primary"
                          >
                            <Github className="h-3 w-3" />
                          </Link>
                        )}
                        {member.socialLinks.twitter && (
                          <Link
                            href={member.socialLinks.twitter}
                            target="_blank"
                            className="text-gray-600 hover:text-primary"
                          >
                            <Twitter className="h-3 w-3" />
                          </Link>
                        )}
                        {member.socialLinks.linkedin && (
                          <Link
                            href={member.socialLinks.linkedin}
                            target="_blank"
                            className="text-gray-600 hover:text-primary"
                          >
                            <Linkedin className="h-3 w-3" />
                          </Link>
                        )}
                        {member.socialLinks.website && (
                          <Link
                            href={member.socialLinks.website}
                            target="_blank"
                            className="text-gray-600 hover:text-primary"
                          >
                            <Globe className="h-3 w-3" />
                          </Link>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
