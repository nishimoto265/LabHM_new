import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { newsData } from "@/translations/news-data"
import { getImagePath } from "@/lib/utils"

export default function SearchPage() {
  const language = "ja"
  
  const searchTranslations = {
    ja: {
      title: "検索",
      noQuery: "検索ワードを入力してください",
      resultsFor: "の検索結果",
      noResults: "該当する結果が見つかりませんでした",
      memberType: {
        professor: "教授",
        researcher: "研究員",
        doctor: "博士課程",
        master: "修士課程", 
        undergraduate: "学部生",
        alumni: "卒業生",
      },
    },
    en: {
      title: "Search",
      noQuery: "Please enter a search term",
      resultsFor: "Search results for",
      noResults: "No results found",
      memberType: {
        professor: "Professor",
        researcher: "Researcher",
        doctor: "Doctoral",
        master: "Master's",
        undergraduate: "Undergraduate",
        alumni: "Alumni",
      },
    },
  }

  const t = searchTranslations[language]

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow">
        <div className="container py-16">
          <h1 className="text-3xl font-bold mb-8">{t.title}</h1>
          
          <div className="bg-gray-100 p-8 rounded-lg text-center">
            <p className="text-gray-600">{t.noQuery}</p>
          </div>
        </div>
      </div>
    </div>
  )
}