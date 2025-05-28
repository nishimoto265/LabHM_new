export type Achievement = {
  id: string
  title: {
    ja: string
    en: string
  }
  date: string
  category: "international" | "domestic" | "award" | "media" | "journal"
  categoryLabel: {
    ja: string
    en: string
  }
  authors?: string
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
  projectCategory?: {
    ja: string
    en: string
  }
}

// 業績データ
export const achievements: Achievement[] = [
  // 記事・出演（メディア）
  {
    id: "media-1",
    title: {
      ja: "産学官連携によるローカル5Gを用いたスマート農業の実現に向けた実証実験",
      en: "Demonstration Experiment for Smart Agriculture Using Local 5G through Industry-Academia-Government Collaboration",
    },
    date: "2021-10-25",
    category: "media",
    categoryLabel: {
      ja: "記事・出演",
      en: "Media Coverage",
    },
    description: {
      ja: "株式会社NTTデータ経営研究所様を代表機関として､株式会社NTTドコモ北海道支社様､ホクレン農業協同組合連合会様､北海道イシダ株式会社様､きたみらい農業協同組合様､訓子府町様の 6者と連携した共同プロジェクト",
      en: "A collaborative project with six partners: NTT DATA Institute of Management Consulting, Inc. as the representative organization, NTT DOCOMO Hokkaido Branch, Hokuren Federation of Agricultural Cooperatives, Hokkaido Ishida Co., Ltd., Kitamirai Agricultural Cooperative, and Kunneppu Town",
    },
    link: "https://www.miyazaki-u.ac.jp/tech/mediadata/pdf/topic_20211025.pdf",
    projectCategory: {
      ja: "牛",
      en: "Cattle",
    },
  },
  {
    id: "media-2",
    title: {
      ja: "牛舎内で5Gを活用し、従業員の作業効率化を支援する実証試験",
      en: "Demonstration Test to Support Work Efficiency Using 5G in Cattle Barns",
    },
    date: "2019-12-24",
    category: "media",
    categoryLabel: {
      ja: "記事・出演",
      en: "Media Coverage",
    },
    description: {
      ja: "株式会社国際電気通信基礎技術研究所（ATR）様、KDDI株式会社様、北海道河東郡上士幌町様、とかち村上牧場様と連携",
      en: "In collaboration with Advanced Telecommunications Research Institute International (ATR), KDDI Corporation, Kamishihoro Town in Hokkaido, and Tokachi Murakami Farm",
    },
    link: "https://www.miyazaki-u.ac.jp/tech/mediadata/pdf/topic_20191224.pdf",
    projectCategory: {
      ja: "牛",
      en: "Cattle",
    },
  },

  // 国際会議
  {
    id: "int-1",
    title: {
      ja: "A Hybrid Approach: Image Processing Techniques and Deep Learning Method for Cow Detection and Tracking System",
      en: "A Hybrid Approach: Image Processing Techniques and Deep Learning Method for Cow Detection and Tracking System",
    },
    date: "2022-03-15",
    category: "international",
    categoryLabel: {
      ja: "国際研究",
      en: "International Research",
    },
    authors: "Cho Cho Mar, Thi Thi Zin, Ikuo Kobayashi, Yoichiro Hori",
    venue: {
      ja: "2022 IEEE 4th Global Conference on Life Sciences and Technologies (IEEE LifeTech 2022)",
      en: "2022 IEEE 4th Global Conference on Life Sciences and Technologies (IEEE LifeTech 2022)",
    },
    projectCategory: {
      ja: "牛",
      en: "Cattle",
    },
  },
  {
    id: "int-2",
    title: {
      ja: "A Study on Worker Tracking Using Camera to Improve Work Efficiency in Factories",
      en: "A Study on Worker Tracking Using Camera to Improve Work Efficiency in Factories",
    },
    date: "2022-03-10",
    category: "international",
    categoryLabel: {
      ja: "国際研究",
      en: "International Research",
    },
    authors: "Issei Hidaka, Shoto Inoue, Thi Thi Zin",
    venue: {
      ja: "2022 IEEE 4th Global Conference on Life Sciences and Technologies (IEEE LifeTech 2022)",
      en: "2022 IEEE 4th Global Conference on Life Sciences and Technologies (IEEE LifeTech 2022)",
    },
    projectCategory: {
      ja: "AI",
      en: "AI",
    },
  },
  {
    id: "int-3",
    title: {
      ja: "Individual Identification of Cow Using Image Processing Techniques",
      en: "Individual Identification of Cow Using Image Processing Techniques",
    },
    date: "2022-03-09",
    category: "international",
    categoryLabel: {
      ja: "国際研究",
      en: "International Research",
    },
    authors: "Yusei Kawagoe, Thi Thi Zin, Ikuo Kobayashi",
    venue: {
      ja: "2022 IEEE 4th Global Conference on Life Sciences and Technologies (IEEE LifeTech 2022)",
      en: "2022 IEEE 4th Global Conference on Life Sciences and Technologies (IEEE LifeTech 2022)",
    },
  },
  {
    id: "int-4",
    title: {
      ja: "A Deep Learning-based Solution to Cattle Region Extraction for Lameness Detection",
      en: "A Deep Learning-based Solution to Cattle Region Extraction for Lameness Detection",
    },
    date: "2022-03-08",
    category: "international",
    categoryLabel: {
      ja: "国際研究",
      en: "International Research",
    },
    authors: "Su Myat Noe, Thi Thi Zin, Pyke Tin, Ikuo Kobayashi",
    venue: {
      ja: "2022 IEEE 4th Global Conference on Life Sciences and Technologies (IEEE LifeTech 2022)",
      en: "2022 IEEE 4th Global Conference on Life Sciences and Technologies (IEEE LifeTech 2022)",
    },
  },
  {
    id: "int-5",
    title: {
      ja: "Action Recognition System for Senior Citizens Using Depth Image Colorization",
      en: "Action Recognition System for Senior Citizens Using Depth Image Colorization",
    },
    date: "2022-03-07",
    category: "international",
    categoryLabel: {
      ja: "国際研究",
      en: "International Research",
    },
    authors: "Ye Htet, Thi Thi Zin, Hiroki Tamura, Kazuhiro Kondo, Etsuo Chosa",
    venue: {
      ja: "2022 IEEE 4th Global Conference on Life Sciences and Technologies (IEEE LifeTech 2022)",
      en: "2022 IEEE 4th Global Conference on Life Sciences and Technologies (IEEE LifeTech 2022)",
    },
    projectCategory: {
      ja: "人",
      en: "Human",
    },
  },

  // 国内研究
  {
    id: "dom-1",
    title: {
      ja: "Enhancing Precision Agriculture: Innovative Tracking Solutions for Black Cattle Monitoring",
      en: "Enhancing Precision Agriculture: Innovative Tracking Solutions for Black Cattle Monitoring",
    },
    date: "2024-03-01",
    category: "domestic",
    categoryLabel: {
      ja: "国内研究",
      en: "Domestic Research",
    },
    authors: "Su Myat Noe, Thi Thi Zin, Pyke Tin, Ikuo Kobayashi",
    venue: {
      ja: "NCSP'24",
      en: "NCSP'24",
    },
  },
  {
    id: "dom-2",
    title: {
      ja: "Kalman Velocity-based Multi-Stage Classification Approach for Recognizing Black Cow Actions",
      en: "Kalman Velocity-based Multi-Stage Classification Approach for Recognizing Black Cow Actions",
    },
    date: "2024-03-01",
    category: "domestic",
    categoryLabel: {
      ja: "国内研究",
      en: "Domestic Research",
    },
    authors: "Cho Cho Aye, Thi Thi Zin, Masaru Aikawa, Ikuo Kobayashi",
    venue: {
      ja: "NCSP'24",
      en: "NCSP'24",
    },
  },

  // 受賞
  {
    id: "award-1",
    title: {
      ja: "NOKOH Student Seminar 2024 The Best Presentation Award",
      en: "NOKOH Student Seminar 2024 The Best Presentation Award",
    },
    date: "2024-11-05",
    category: "award",
    categoryLabel: {
      ja: "受賞",
      en: "Award",
    },
    authors: "Tunn Cho Lwin",
    description: {
      ja: "lntegrating Entropy Measures Of Fetal Heart Rate Variability with DigitaI Twin TechnoIogy to Enhance FetaI Monitoring",
      en: "lntegrating Entropy Measures Of Fetal Heart Rate Variability with DigitaI Twin TechnoIogy to Enhance FetaI Monitoring",
    },
    pdfLink: "/images/tunn_award_NOKOH.pdf",
  },
  {
    id: "award-2",
    title: {
      ja: "ICICIC2024 Best Presentation Award",
      en: "ICICIC2024 Best Presentation Award",
    },
    date: "2024-10-13",
    category: "award",
    categoryLabel: {
      ja: "受賞",
      en: "Award",
    },
    authors: "Tunn Cho Lwin, Thi Thi Zin, Pyae Phyo Kyaw, Pyke Tin, Emi Kino, Tsuyomu lkenoue",
    description: {
      ja: "Advanced fetal heart rate variability analysis using artificialintelligence and digital twin technology",
      en: "Advanced fetal heart rate variability analysis using artificialintelligence and digital twin technology",
    },
    pdfLink: "/images/tunn_award_ICICIC2024.pdf",
  },
  {
    id: "award-3",
    title: {
      ja: "ICGEC2024 Best Paper Award",
      en: "ICGEC2024 Best Paper Award",
    },
    date: "2024-08-29",
    category: "award",
    categoryLabel: {
      ja: "受賞",
      en: "Award",
    },
    authors: "Su Myat Noe, Thi Thi Zin, Pyke Tin, Ikuo Kobayashi",
    description: {
      ja: "From Vision to Vocabulary: A Multimodal Approach to Detect and Track Black Cattle Behaviors",
      en: "From Vision to Vocabulary: A Multimodal Approach to Detect and Track Black Cattle Behaviors",
    },
    pdfLink: "/images/SuMyatNoe_ICGEC_ver3.pdf",
    imageLink: "/images/ICGEC2024_su.jpg",
  },

  // 論文誌（博士）
  {
    id: "journal-d-1",
    title: {
      ja: "A Study to Predict Calving Time in Dairy Cows Using Image Processing Techniques and Stochastic Model",
      en: "A Study to Predict Calving Time in Dairy Cows Using Image Processing Techniques and Stochastic Model",
    },
    date: "2021-03-15",
    category: "journal",
    categoryLabel: {
      ja: "論文誌（博士）",
      en: "Journal (Doctoral)",
    },
    authors: "Swe Zar Maw",
    venue: {
      ja: "博士（工学）論文",
      en: "Doctoral Thesis in Engineering",
    },
  },
  {
    id: "journal-d-2",
    title: {
      ja: "牛の分娩監視システムに関する研究",
      en: "Study on Calving Monitoring System for Cattle",
    },
    date: "2020-03-15",
    category: "journal",
    categoryLabel: {
      ja: "論文誌（博士）",
      en: "Journal (Doctoral)",
    },
    authors: "須見 公祐",
    venue: {
      ja: "博士（工学）論文",
      en: "Doctoral Thesis in Engineering",
    },
  },
  {
    id: "journal-d-3",
    title: {
      ja: "Human Action Recognition Using Depth Camera －Deep Learning Based Skeletal Joints and Human-Object Interactions－",
      en: "Human Action Recognition Using Depth Camera －Deep Learning Based Skeletal Joints and Human-Object Interactions－",
    },
    date: "2019-03-15",
    category: "journal",
    categoryLabel: {
      ja: "論文誌（博士）",
      en: "Journal (Doctoral)",
    },
    authors: "Cho Nilar Phyo",
    venue: {
      ja: "博士（工学）論文",
      en: "Doctoral Thesis in Engineering",
    },
  },
  {
    id: "journal-d-4",
    title: {
      ja: "A Study on Detecting Abnormal Events to Support Independent Living",
      en: "A Study on Detecting Abnormal Events to Support Independent Living",
    },
    date: "2019-03-15",
    category: "journal",
    categoryLabel: {
      ja: "論文誌（博士）",
      en: "Journal (Doctoral)",
    },
    authors: "Swe Nwe Nwe Htun",
    venue: {
      ja: "博士（工学）論文",
      en: "Doctoral Thesis in Engineering",
    },
  },

  // 論文誌（修士）- 令和5年度
  {
    id: "journal-m-r5-1",
    title: {
      ja: "Flaskを用いたファブリー病の振戦運動評価の研究",
      en: "Study on Tremor Movement Evaluation of Fabry Disease Using Flask",
    },
    date: "2023-03-15",
    category: "journal",
    categoryLabel: {
      ja: "論文誌（修士）",
      en: "Journal (Master's)",
    },
    authors: "永野 流磨",
    venue: {
      ja: "修士（工学）論文",
      en: "Master's Thesis in Engineering",
    },
  },
  {
    id: "journal-m-r5-2",
    title: {
      ja: "RGBカメラによる牛の歩行動画を用いた個体識別に関する研究",
      en: "Study on Individual Identification Using Walking Videos of Cattle with RGB Camera",
    },
    date: "2023-03-15",
    category: "journal",
    categoryLabel: {
      ja: "論文誌（修士）",
      en: "Journal (Master's)",
    },
    authors: "高岡 柚貴",
    venue: {
      ja: "修士（工学）論文",
      en: "Master's Thesis in Engineering",
    },
  },
] 