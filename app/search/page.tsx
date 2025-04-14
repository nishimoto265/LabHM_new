"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"

// 検索結果の型定義
type SearchResult = {
  title: string
  description: string
  url: string
  category: string
}

// サンプルデータ（実際のアプリケーションではAPIから取得するなど）
const sampleData: SearchResult[] = [
  {
    title: "牛の摂食行動と摂食時間管理",
    description: "牛の健康状態を示す有効な指標として摂食時間の変化に着目し、効果的なモニタリング手法を確立する研究",
    url: "/research/projects/cattle-feeding",
    category: "研究プロジェクト",
  },
  {
    title: "乳牛の分娩・難産兆候推定システム",
    description: "画像処理技術やAIを活用した効率的な分娩監視システムにより、分娩事故の発生件数を削減する研究",
    url: "/research/projects/calving-prediction",
    category: "研究プロジェクト",
  },
  {
    title: "プライバシーを保護した高齢者見守りと健康支援システム",
    description: "深度カメラを用いてプライバシーを保護しながら高齢者の行動を分析し、介護の質向上を目指す研究",
    url: "/research/projects/elderly-monitoring",
    category: "研究プロジェクト",
  },
  {
    title: "Thi Thi Zin（ティ ティ ズイン）",
    description: "教授（情報通信工学プログラム）",
    url: "/members#faculty",
    category: "メンバー",
  },
  {
    title: "ICGEC2024 Best Paper Award",
    description: "Su Myat Noe, Thi Thi Zin, Pyke Tin, Ikuo Kobayashi",
    url: "/achievements/awards",
    category: "受賞",
  },
  {
    title: "産学官連携によるローカル5Gを用いたスマート農業実証プロジェクト",
    description: "ICT技術を用いた乳牛の効率的な個体管理",
    url: "/research/collaborations/local5g",
    category: "共同研究",
  },
]

export default function SearchPage() {
  const searchParams = useSearchParams()
  const query = searchParams.get("q") || ""
  const [results, setResults] = useState<SearchResult[]>([])

  useEffect(() => {
    if (query) {
      // 実際のアプリケーションではAPIリクエストなどを行う
      // ここではクライアントサイドでフィルタリング
      const filteredResults = sampleData.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.description.toLowerCase().includes(query.toLowerCase()),
      )
      setResults(filteredResults)
    } else {
      setResults([])
    }
  }, [query])

  return (
    <div className="container py-16">
      <h1 className="text-3xl font-bold mb-8">「{query}」の検索結果</h1>

      {results.length > 0 ? (
        <div className="space-y-6">
          {results.map((result, index) => (
            <div key={index} className="p-4 bg-white border-b border-gray-200">
              <div className="flex items-center gap-2 mb-2">
                <span className="inline-block px-2 py-1 text-xs font-medium bg-gray-200 text-gray-800 rounded">
                  {result.category}
                </span>
              </div>
              <h2 className="text-xl font-bold mb-2">
                <Link href={result.url} className="text-primary hover:underline">
                  {result.title}
                </Link>
              </h2>
              <p className="text-gray-700">{result.description}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500 mb-4">「{query}」に一致する結果は見つかりませんでした。</p>
          <p className="text-gray-500 mb-8">別のキーワードで検索するか、メニューから目的のページをお探しください。</p>
          <Link href="/">
            <Button>トップページに戻る</Button>
          </Link>
        </div>
      )}
    </div>
  )
}
