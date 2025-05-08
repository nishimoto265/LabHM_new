import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

// 研究テーマのデータ
const researchData = [
  {
    id: 1,
    title: "胎児の状態を早期に把握する新しいモニタリングシステム",
    image: "/images/research-1.jpg",
    link: "/research/projects/1",
  },
  {
    id: 2,
    title: "歩行中の乳牛に対するBCS評価の自動化",
    image: "/images/research-2.jpg",
    link: "/research/projects/2",
  },
  {
    id: 3,
    title: "プライバシーを保護した高齢者見守りと健康支援システム",
    image: "/images/research-3.jpg",
    link: "/research/projects/3",
  },
]

export default function ResearchSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {researchData.map((research) => (
        <Link key={research.id} href={research.link} className="group">
          <Card className="overflow-hidden h-full transition-all hover:shadow-md">
            <div className="relative h-48 overflow-hidden">
              <Image
                src={research.image || "/placeholder.svg"}
                alt={research.title}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <CardContent className="p-4">
              <h3 className="font-medium text-center group-hover:text-primary transition-colors">{research.title}</h3>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}
