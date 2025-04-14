import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

// プロジェクトのデータ
const projectsData = [
  {
    id: 1,
    title: "総務省プロジェクト",
    image: "/images/project-1.jpg",
    link: "/research/government-projects",
  },
  {
    id: 2,
    title: "共同研究",
    image: "/images/project-2.jpg",
    link: "/research/collaborations",
  },
  {
    id: 3,
    title: "さくらサイエンス",
    image: "/images/project-3.jpg",
    link: "/activities/sakura-science",
  },
]

export default function ProjectsSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {projectsData.map((project) => (
        <Link key={project.id} href={project.link} className="group">
          <Card className="overflow-hidden h-full transition-all hover:shadow-md">
            <div className="relative h-48 overflow-hidden">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <CardContent className="p-4">
              <h3 className="font-medium text-center group-hover:text-primary transition-colors">{project.title}</h3>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}
