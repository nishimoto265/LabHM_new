// 研究業績の型定義
export type ResearchAchievement = {
  id: string
  title: {
    ja: string
    en: string
  }
  authors: string
  date: string
  category: "international" | "domestic" | "award" | "media" | "journal" | "thesis"
  categoryLabel: {
    ja: string
    en: string
  }
  venue?: {
    ja: string
    en: string
  }
  description?: {
    ja: string
    en: string
  }
  link?: string
  pdfLink?: string
  imageLink?: string
  isExternal?: boolean
  projectCategory?: {
    ja: string
    en: string
  }
  degreeType?: "doctor" | "master" | "bachelor"
  graduationYear?: string
  academicYear?: string
  academicYearEn?: string
  memberId?: string // メンバーとの関連付け用
}

// 国際会議発表
export const internationalConferences: ResearchAchievement[] = [
  {
    id: "int-2023-1",
    title: {
      ja: "Black Cow Detection and Tracking for Behavior Analysis",
      en: "Black Cow Detection and Tracking for Behavior Analysis",
    },
    authors: "Cho Cho Aye, 平田 耕一",
    date: "2023-03",
    category: "international",
    categoryLabel: {
      ja: "国際会議",
      en: "International Conference",
    },
    venue: {
      ja: "International Conference on Computer Vision and Image Processing",
      en: "International Conference on Computer Vision and Image Processing",
    },
    academicYear: "令和5年度",
    academicYearEn: "2023 Academic Year",
    memberId: "chochoaye-r5",
  },
  {
    id: "int-2023-2",
    title: {
      ja: "Cattle Pose Classification for Calving Time Prediction",
      en: "Cattle Pose Classification for Calving Time Prediction",
    },
    authors: "May Phyu Khin, 平田 耕一",
    date: "2023-06",
    category: "international",
    categoryLabel: {
      ja: "国際会議",
      en: "International Conference",
    },
    venue: {
      ja: "IEEE International Conference on Image Processing",
      en: "IEEE International Conference on Image Processing",
    },
    academicYear: "令和5年度",
    academicYearEn: "2023 Academic Year",
    memberId: "mayphyukhin-r5",
  },
]

// 国内会議発表
export const domesticConferences: ResearchAchievement[] = [
  {
    id: "dom-2023-1",
    title: {
      ja: "画像処理技術を用いた牛の跛行検知に関する研究",
      en: "Study on Lameness Detection in Cattle Using Image Processing Technology",
    },
    authors: "鬼塚 翼, 平田 耕一",
    date: "2023-03",
    category: "domestic",
    categoryLabel: {
      ja: "国内会議",
      en: "Domestic Conference",
    },
    venue: {
      ja: "情報処理学会全国大会",
      en: "IPSJ National Convention",
    },
    academicYear: "令和5年度",
    academicYearEn: "2023 Academic Year",
    memberId: "onitsuka-r5",
  },
  {
    id: "dom-2023-2",
    title: {
      ja: "バランスタスクを用いた高齢者の転倒リスク評価に関する研究",
      en: "Study on Fall Risk Assessment for the Elderly Using Balance Tasks",
    },
    authors: "釜堀 慶次郎, 平田 耕一",
    date: "2023-05",
    category: "domestic",
    categoryLabel: {
      ja: "国内会議",
      en: "Domestic Conference",
    },
    venue: {
      ja: "電子情報通信学会総合大会",
      en: "IEICE General Conference",
    },
    academicYear: "令和5年度",
    academicYearEn: "2023 Academic Year",
    memberId: "kamahori-r5",
  },
]

// 学術雑誌
export const journalPapers: ResearchAchievement[] = [
  {
    id: "journal-2023-1",
    title: {
      ja: "画像処理技術を用いた牛の行動認識システムの開発",
      en: "Development of Cattle Behavior Recognition System Using Image Processing Technology",
    },
    authors: "平田 耕一, 他",
    date: "2023-04",
    category: "journal",
    categoryLabel: {
      ja: "学術雑誌",
      en: "Journal Paper",
    },
    venue: {
      ja: "画像電子学会誌",
      en: "Journal of the Institute of Image Electronics Engineers of Japan",
    },
    link: "https://example.com/journal",
  },
]

// 受賞
export const awards: ResearchAchievement[] = [
  {
    id: "award-2023-1",
    title: {
      ja: "優秀論文賞",
      en: "Best Paper Award",
    },
    authors: "平田 耕一, 研究室メンバー",
    date: "2023-03",
    category: "award",
    categoryLabel: {
      ja: "受賞",
      en: "Award",
    },
    venue: {
      ja: "情報処理学会",
      en: "Information Processing Society of Japan",
    },
    description: {
      ja: "画像処理技術を用いた畜産業における動物行動認識に関する研究で受賞",
      en: "Awarded for research on animal behavior recognition in livestock industry using image processing technology",
    },
  },
]

// メディア掲載
export const mediaAppearances: ResearchAchievement[] = [
  {
    id: "media-2023-1",
    title: {
      ja: "AI技術で畜産業を革新",
      en: "Revolutionizing Livestock Industry with AI Technology",
    },
    authors: "平田 耕一",
    date: "2023-02",
    category: "media",
    categoryLabel: {
      ja: "メディア掲載",
      en: "Media Coverage",
    },
    venue: {
      ja: "農業新聞",
      en: "Agricultural News",
    },
    description: {
      ja: "大学の研究室における AI を活用した畜産技術の開発について紹介",
      en: "Introduction of AI-driven livestock technology development at university laboratory",
    },
  },
]

// 学位論文
export const theses: ResearchAchievement[] = [
  {
    id: "thesis-2023-1",
    title: {
      ja: "A Study to Predict Calving Time in Dairy Cows Using Image Processing Techniques and Stochastic Model",
      en: "A Study to Predict Calving Time in Dairy Cows Using Image Processing Techniques and Stochastic Model",
    },
    authors: "Swe Zar Maw",
    date: "2021-03",
    category: "thesis",
    categoryLabel: {
      ja: "博士論文",
      en: "Doctoral Thesis",
    },
    degreeType: "doctor",
    graduationYear: "2021",
    academicYear: "令和3年度",
    academicYearEn: "2021 Academic Year",
    memberId: "swezarmaw-r3",
  },
  {
    id: "thesis-2019-1",
    title: {
      ja: "Human Action Recognition Using Depth Camera －Deep Learning Based Skeletal Joints and Human-Object Interactions－",
      en: "Human Action Recognition Using Depth Camera －Deep Learning Based Skeletal Joints and Human-Object Interactions－",
    },
    authors: "Cho Nilar Phyo",
    date: "2019-03",
    category: "thesis",
    categoryLabel: {
      ja: "博士論文",
      en: "Doctoral Thesis",
    },
    degreeType: "doctor",
    graduationYear: "2019",
    academicYear: "平成31年度/令和元年度",
    academicYearEn: "2019 Academic Year",
    memberId: "chonilarphyo-h31",
  },
]

// 全研究業績を統合した配列
export const allResearchAchievements: ResearchAchievement[] = [
  ...internationalConferences,
  ...domesticConferences,
  ...journalPapers,
  ...awards,
  ...mediaAppearances,
  ...theses,
]

// フィルタリング関数
export function getAchievementsByCategory(category: ResearchAchievement["category"]): ResearchAchievement[] {
  return allResearchAchievements.filter(achievement => achievement.category === category)
}

export function getAchievementsByMember(memberId: string): ResearchAchievement[] {
  return allResearchAchievements.filter(achievement => achievement.memberId === memberId)
}

export function getAchievementsByYear(year: string): ResearchAchievement[] {
  return allResearchAchievements.filter(achievement => achievement.graduationYear === year || achievement.date.startsWith(year))
}

export function getThesesByDegree(degreeType: "doctor" | "master" | "bachelor"): ResearchAchievement[] {
  return theses.filter(thesis => thesis.degreeType === degreeType)
}

// 年度のリストを取得
export function getAvailableResearchYears(): string[] {
  const years = allResearchAchievements
    .map(achievement => achievement.graduationYear || achievement.date.split('-')[0])
    .filter((year): year is string => year !== undefined)
  return [...new Set(years)].sort((a, b) => parseInt(b) - parseInt(a)) // 降順
} 