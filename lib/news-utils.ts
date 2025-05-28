// タグに応じた背景色を返す関数
export const getTagBgColor = (tag: string) => {
  const tagMap: Record<string, string> = {
    "学生活動": "bg-red-600",
    "研究成果": "bg-green-600", 
    "国際連携": "bg-purple-600",
    "産学連携": "bg-blue-600",
    "研究室運営": "bg-orange-600",
    "その他": "bg-gray-600",
    // 英語版
    "Student Activities": "bg-red-600",
    "Research Achievements": "bg-green-600",
    "International Collaboration": "bg-purple-600", 
    "Industry-Academia Collaboration": "bg-blue-600",
    "Laboratory Management": "bg-orange-600",
    "Other": "bg-gray-600",
  }
  return tagMap[tag] || "bg-gray-600"
} 