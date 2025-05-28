// 教員・研究員の型定義
export type FacultyMember = {
  id: string
  name: string
  nameEn?: string
  position: string
  positionEn?: string
  image: string
  background: {
    ja: string[]
    en: string[]
  }
  researchFields: {
    ja: string
    en: string
  }
}

// 学生メンバーの型定義
export type StudentMember = {
  name: string
  nameEn?: string
  program: "doctoral" | "masters" | "bachelor"
  year?: number
  lab?: string
  labEn?: string
  image?: string
  socialLinks?: {
    github?: string
    twitter?: string
    linkedin?: string
    website?: string
  }
}

// 卒業生データの型定義
export type Graduate = {
  name: string
  nameEn?: string
  research: string
  researchEn?: string
}

export type ProgramSection = {
  title: string
  graduates: Graduate[]
}

export type YearSection = {
  year: string
  yearEn?: string
  programs: {
    doctor?: ProgramSection
    master?: ProgramSection
    bachelor?: ProgramSection
  }
}

// 教員・研究員データ
export const facultyMembers: FacultyMember[] = [
  {
    id: "thithizin",
    name: "Thi Thi Zin（ティ ティ ズイン）",
    nameEn: "Thi Thi Zin",
    position: "教授（情報通信工学プログラム）",
    positionEn: "Professor (Information and Communication Engineering Program)",
    image: "/images/thithizin.jpg",
    background: {
      ja: [
        "1995年：ヤンゴン大学（ミャンマー）Bachelor of Science（優等）",
        "1999年：ヤンゴンコンピュータ大学（ミャンマー）Master of Information Science",
        "2004年：大阪市立大学 修士（工学）",
        "2007年：大阪市立大学 博士（工学）",
        "2007年～2009年：日本学術振興会特別研究員",
        "現在：宮崎大学大学院工学研究科 教授",
      ],
      en: [
        "1995: Bachelor of Science (Honors), University of Yangon (Myanmar)",
        "1999: Master of Information Science, University of Computer Studies, Yangon (Myanmar)",
        "2004: Master of Engineering, Osaka City University",
        "2007: Doctor of Engineering, Osaka City University",
        "2007-2009: JSPS Research Fellow",
        "Present: Professor, Graduate School of Engineering, University of Miyazaki",
      ],
    },
    researchFields: {
      ja: "情報通信、知覚情報処理、画像処理、情報通信、データベース、ライフサイエンス、動物生産科学",
      en: "Information and Communication, Perceptual Information Processing, Image Processing, Database, Life Science, Animal Production Science",
    },
  },
  {
    id: "shiiya",
    name: "椎屋 和久",
    nameEn: "Kazuhisa Shiiya",
    position: "助教（情報通信工学プログラム）",
    positionEn: "Assistant Professor (Information and Communication Engineering Program)",
    image: "/images/no_image.png",
    background: {
      ja: [
        "1994年：宮崎大学工学部電気工学科 卒業",
        "2008年：熊本大学大学院自然科学研究科 博士課程修了",
        "宮崎大学工学部 技術職員、電気システム工学科 助手、助教を経て現職",
        "現在：宮崎大学工学部 工学科 助教",
      ],
      en: [
        "1994: Graduated from the Department of Electrical Engineering, Faculty of Engineering, University of Miyazaki",
        "2008: Completed the Doctoral Program at the Graduate School of Science and Technology, Kumamoto University",
        "Currently holds the position of Technical Staff, Assistant, and Assistant Professor in the Department of Electrical Systems Engineering, Faculty of Engineering, University of Miyazaki",
        "Present: Assistant Professor, Department of Engineering, Faculty of Engineering, University of Miyazaki",
      ],
    },
    researchFields: {
      ja: "画像認識、デジタル画像処理",
      en: "Image Recognition, Digital Image Processing",
    },
  },
  {
    id: "pyketin",
    name: "Pyke Tin（パイ ティン）",
    nameEn: "Pyke Tin",
    position: "宮崎大学名誉博士（宮崎大学国際連携センター客員教授）",
    positionEn: "Honorary Doctor, University of Miyazaki (Visiting Professor, International Collaboration Center)",
    image: "/images/no_image.png",
    background: {
      ja: [
        "1965年：マンダレー大学（ミャンマー）Bachelor of Science（優等）",
        "1970年：ラングーン大学（ミャンマー）Master of Information Science",
        "1976年：モナシュ大学（オーストラリア）Ph.D. in stochastic processes and their applications",
        "元：ヤンゴンコンピュータ大学 学長、計算数学教授",
        "現在：宮崎大学国際連携センター 客員教授",
      ],
      en: [
        "1965: Bachelor of Science (Honors), University of Mandalay (Myanmar)",
        "1970: Master of Information Science, University of Rangoon (Myanmar)",
        "1976: Ph.D. in stochastic processes and their applications, Monash University (Australia)",
        "Former: Rector, University of Computer Studies, Yangon; Professor of Computational Mathematics",
        "Present: Visiting Professor, International Collaboration Center, University of Miyazaki",
      ],
    },
    researchFields: {
      ja: "画像検索エンジン、待ち行列システム、コンピュータビジョン、確率過程とその画像処理への応用",
      en: "Image Search Engine, Queueing System, Computer Vision, Stochastic Processes and Their Applications to Image Processing",
    },
  },
  {
    id: "chonilarphyo",
    name: "Cho Nilar Phyo（チョ ニラ ピョ）",
    nameEn: "Cho Nilar Phyo",
    position: "助教（情報通信工学プログラム）",
    positionEn: "Assistant Professor (Information and Communication Engineering Program)",
    image: "/images/Cho_Nilar_Phyo.jpg",
    background: {
      ja: [
        "2010年：ヤンゴンコンピュータ大学（ミャンマー）コンピュータサイエンス学士",
        "2011年：ヤンゴンコンピュータ大学（ミャンマー）コンピュータサイエンス学士（優等）",
        "2014年：ヤンゴンコンピュータ大学（ミャンマー）コンピュータサイエンス修士",
        "2019年：宮崎大学大学院農学工学総合研究科 博士号",
        "現在：宮崎大学大学院工学研究科 助教",
      ],
      en: [
        "2010: Bachelor of Computer Science, University of Computer Studies, Yangon (Myanmar)",
        "2011: Bachelor of Computer Science (Honors), University of Computer Studies, Yangon (Myanmar)",
        "2014: Master of Computer Science, University of Computer Studies, Yangon (Myanmar)",
        "2019: Ph.D., Graduate School of Agriculture and Engineering, University of Miyazaki",
        "Present: Assistant Professor, Graduate School of Engineering, University of Miyazaki",
      ],
    },
    researchFields: {
      ja: "人間の行動分析、医療診断のためのAI支援システム、リアルタイム映像監視システム",
      en: "Human Behavior Analysis, AI-assisted Systems for Medical Diagnosis, Real-time Video Surveillance Systems",
    },
  },
  {
    id: "monaung",
    name: "Mon Aung（ﾓﾝ ｱｳﾝ）",
    nameEn: "Mon Aung",
    position: "研究員",
    positionEn: "Researcher",
    image: "/images/no_image.png",
    background: {
      ja: [],
      en: [],
    },
    researchFields: {
      ja: "",
      en: "",
    },
  },
  {
    id: "nyizawaung",
    name: "Nyi Zaw Aung（ﾆｰ ｽﾞｫｰ ｱｳﾝ）",
    nameEn: "Nyi Zaw Aung",
    position: "研究員",
    positionEn: "Researcher",
    image: "/images/no_image.png",
    background: {
      ja: [],
      en: [],
    },
    researchFields: {
      ja: "",
      en: "",
    },
  },
  {
    id: "nomoto",
    name: "野元 理美",
    nameEn: "Rimi Nomoto",
    position: "秘書",
    positionEn: "Secretary",
    image: "/images/no_image.png",
    background: {
      ja: [],
      en: [],
    },
    researchFields: {
      ja: "",
      en: "",
    },
  },
]

// 学生メンバーデータ
export const studentMembers: StudentMember[] = [
  // 博士課程
  {
    name: "Su Myat Noe（ｽ ﾐｬ ﾉｰ）",
    nameEn: "Su Myat Noe",
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
    nameEn: "Wai Hnin Eaindrar Mg",
    program: "doctoral",
    year: 3,
    image: "/images/no_image.png",
    socialLinks: {
      linkedin: "https://linkedin.com/",
    },
  },
  {
    name: "Tunn Cho Lwin（ﾄｩﾝ ﾁｮ ﾚﾝ）",
    nameEn: "Tunn Cho Lwin",
    program: "doctoral",
    year: 2,
    image: "/images/no_image.png",
  },
  {
    name: "橋本 幸枝",
    nameEn: "Sachie Hashimoto",
    program: "doctoral",
    year: 2,
    image: "/images/no_image.png",
  },
  {
    name: "San Chain Tun（ｻﾝ ﾁｪｲﾝ ﾄｩﾝ）",
    nameEn: "San Chain Tun",
    program: "doctoral",
    year: 1,
    image: "/images/no_image.png",
    socialLinks: {
      github: "https://github.com/",
    },
  },
  {
    name: "Bo Bo Myint（ﾎﾞｰ ﾎﾞｰ ﾐｪｴﾝﾄ）",
    nameEn: "Bo Bo Myint",
    program: "doctoral",
    year: 1,
    image: "/images/no_image.png",
  },

  // 修士課程
  {
    name: "丹野 龍晟",
    nameEn: "Ryusei Tanno",
    program: "masters",
    year: 2,
    image: "/images/no_image.png",
    socialLinks: {
      twitter: "https://twitter.com/",
    },
  },
  {
    name: "筑波 真矢",
    nameEn: "Shinya Tsukuba",
    program: "masters",
    year: 2,
    image: "/images/no_image.png",
  },
  {
    name: "西山 孟人",
    nameEn: "Taketo Nishiyama",
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
    nameEn: "Taichi Ishikawa",
    program: "masters",
    year: 1,
    image: "/images/no_image.png",
  },
  {
    name: "椎原 陽",
    nameEn: "Akira Shiihara",
    program: "masters",
    year: 1,
    image: "/images/no_image.png",
  },
  {
    name: "清水 祐一朗",
    nameEn: "Yuichiro Shimizu",
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
    nameEn: "Pyae Phyo Kyaw",
    program: "masters",
    year: 1,
    image: "/images/no_image.png",
  },
  {
    name: "Aung Si Thu Moe（ｱｳﾝ ｼ ﾄｩ ﾓｰ）",
    nameEn: "Aung Si Thu Moe",
    program: "masters",
    year: 1,
    image: "/images/no_image.png",
  },

  // 学部生
  {
    name: "川添 慎吉",
    nameEn: "Shinkichi Kawazoe",
    program: "bachelor",
    image: "/images/no_image.png",
  },
  {
    name: "中嶋 麗文",
    nameEn: "Reifumi Nakashima",
    program: "bachelor",
    image: "/images/no_image.png",
    socialLinks: {
      twitter: "https://twitter.com/",
    },
  },
  {
    name: "西本 大地",
    nameEn: "Daichi Nishimoto",
    program: "bachelor",
    image: "/images/no_image.png",
  },
  {
    name: "村山 拓海",
    nameEn: "Takumi Murayama",
    program: "bachelor",
    image: "/images/no_image.png",
    socialLinks: {
      github: "https://github.com/",
    },
  },
  {
    name: "荒木 駿佑",
    nameEn: "Shunsuke Araki",
    program: "bachelor",
    lab: "椎屋研究室",
    labEn: "Shiiya Laboratory",
    image: "/images/no_image.png",
  },
  {
    name: "佐藤 賢吾",
    nameEn: "Kengo Sato",
    program: "bachelor",
    lab: "椎屋研究室",
    labEn: "Shiiya Laboratory",
    image: "/images/no_image.png",
  },
]

// 卒業生データ
export const alumniData: YearSection[] = [
  {
    year: "令和5年度",
    yearEn: "2023 Academic Year",
    programs: {
      master: {
        title: "修士課程",
        graduates: [
          {
            name: "Cho Cho Aye",
            nameEn: "Cho Cho Aye",
            research: "研究内容：Black Cow Detection and Tracking for Behavior Analysis",
            researchEn: "Research: Black Cow Detection and Tracking for Behavior Analysis",
          },
          {
            name: "May Phyu Khin",
            nameEn: "May Phyu Khin",
            research: "研究内容：Cattle Pose Classification for Calving Time Prediction",
            researchEn: "Research: Cattle Pose Classification for Calving Time Prediction",
          },
          {
            name: "San Chain Tun",
            nameEn: "San Chain Tun",
            research: "研究内容：Cow Lameness Detection using Depth Image Analysis",
            researchEn: "Research: Cow Lameness Detection using Depth Image Analysis",
          },
          {
            name: "Su Larb Mon",
            nameEn: "Su Larb Mon",
            research: "研究内容：Automatic Cattle Identification Using RGB Images",
            researchEn: "Research: Automatic Cattle Identification Using RGB Images",
          },
          {
            name: "釜堀 慶次郎",
            nameEn: "Keijiro Kamahori",
            research: "研究内容：バランスタスクを用いた高齢者の転倒リスク評価に関する研究",
            researchEn: "Research: Study on Fall Risk Assessment for the Elderly Using Balance Tasks",
          },
          {
            name: "鬼塚 翼",
            nameEn: "Tsubasa Onitsuka",
            research: "研究内容：画像処理技術を用いた牛の跛行検知に関する研究",
            researchEn: "Research: Study on Lameness Detection in Cattle Using Image Processing Technology",
          },
        ],
      },
      bachelor: {
        title: "学士課程",
        graduates: [
          {
            name: "永野 流磨",
            nameEn: "Ryuma Nagano",
            research: "研究内容：Flaskを用いたファブリー病の振戦運動評価の研究",
            researchEn: "Research: Study on Tremor Movement Evaluation of Fabry Disease Using Flask",
          },
          {
            name: "高岡 柚貴",
            nameEn: "Yuki Takaoka",
            research: "研究内容：RGBカメラによる牛の歩行動画を用いた個体識別に関する研究",
            researchEn: "Research: Study on Individual Identification Using Walking Videos of Cattle with RGB Camera",
          },
          {
            name: "山元 太陽",
            nameEn: "Taiyo Yamamoto",
            research: "研究内容：RGBカメラを用いた行動判定に関する研究",
            researchEn: "Research: Study on Behavior Determination Using RGB Camera",
          },
          {
            name: "山口 謙志朗",
            nameEn: "Kenshiro Yamaguchi",
            research: "研究内容：画像処理技術を用いた分娩前の牛の特徴抽出に関する研究",
            researchEn: "Research: Study on Feature Extraction of Pre-Calving Cows Using Image Processing Technology",
          },
          {
            name: "清水 祐一朗",
            nameEn: "Yuichiro Shimizu",
            research: "研究内容：画像処理技術を用いた耳標番号による牛の個体識別",
            researchEn: "Research: Cattle Identification by Ear Tag Number Using Image Processing Technology",
          },
          {
            name: "石川 太一",
            nameEn: "Taichi Ishikawa",
            research: "研究内容：オプティカルフローと機械学習を用いた複数牛の反芻識別に関する研究",
            researchEn:
              "Research: Study on Rumination Identification of Multiple Cattle Using Optical Flow and Machine Learning",
          },
          {
            name: "椎原 陽",
            nameEn: "Akira Shiihara",
            research: "研究内容：3Dカメラを用いた歩行中の牛の個体識別に関する研究",
            researchEn: "Research: Study on Individual Identification of Walking Cattle Using 3D Camera",
          },
        ],
      },
    },
  },
  {
    year: "令和4年度",
    yearEn: "2022 Academic Year",
    programs: {
      master: {
        title: "修士課程",
        graduates: [
          {
            name: "桐原 拓希",
            nameEn: "Takuki Kirihara",
            research: "研究内容：画像処理技術を用いた子牛の健康管理のための行動モニタリングに関する研究",
            researchEn:
              "Research: Study on Behavior Monitoring for Calf Health Management Using Image Processing Technology",
          },
          {
            name: "山城 克敏",
            nameEn: "Katsutoshi Yamashiro",
            research: "研究内容：パーキンソン病における動画の解析による指タップの症候学的な意義の解明",
            researchEn:
              "Research: Elucidation of the Semiological Significance of Finger Tapping by Video Analysis in Parkinson's Disease",
          },
          {
            name: "西山 孟人",
            nameEn: "Taketo Nishiyama",
            research: "研究内容：RGBカメラとサーモグラフィーカメラを用いた子牛の中耳炎の早期発見に関する検討",
            researchEn:
              "Research: Study on Early Detection of Otitis Media in Calves Using RGB Camera and Thermography Camera",
          },
          {
            name: "丹野 龍晟",
            nameEn: "Ryusei Tanno",
            research: "研究内容：画像処理技術を用いた歩行情報の数値化に関する研究",
            researchEn: "Research: Study on Quantification of Walking Information Using Image Processing Technology",
          },
          {
            name: "池畑 勇威",
            nameEn: "Takei Ikehata",
            research: "研究内容：画像処理技術を用いた牛の耳標認識に関する研究",
            researchEn: "Research: Study on Cattle Ear Tag Recognition Using Image Processing Technology",
          },
          {
            name: "筑波 真矢",
            nameEn: "Shinya Tsukuba",
            research: "研究内容：3Dカメラを用いた歩行中の乳牛のBCS評価に関する研究",
            researchEn: "Research: Study on BCS Evaluation of Walking Dairy Cows Using 3D Camera",
          },
          {
            name: "武吉 慧史朗",
            nameEn: "Keishiro Takeyoshi",
            research: "研究内容：画像処理技術を用いた乳牛の移動情報による跛行検知",
            researchEn:
              "Research: Lameness Detection Based on Movement Information of Dairy Cows Using Image Processing Technology",
          },
        ],
      },
      bachelor: {
        title: "学士課程",
        graduates: [
          {
            name: "桐原 拓希",
            nameEn: "Takuki Kirihara",
            research: "研究内容：画像処理技術を用いた子牛の健康管理のための行動モニタリングに関する研究",
            researchEn:
              "Research: Study on Behavior Monitoring for Calf Health Management Using Image Processing Technology",
          },
          {
            name: "山城 克敏",
            nameEn: "Katsutoshi Yamashiro",
            research: "研究内容：パーキンソン病における動画の解析による指タップの症候学的な意義の解明",
            researchEn:
              "Research: Elucidation of the Semiological Significance of Finger Tapping by Video Analysis in Parkinson's Disease",
          },
          {
            name: "西山 孟人",
            nameEn: "Taketo Nishiyama",
            research: "研究内容：RGBカメラとサーモグラフィーカメラを用いた子牛の中耳炎の早期発見に関する検討",
            researchEn:
              "Research: Study on Early Detection of Otitis Media in Calves Using RGB Camera and Thermography Camera",
          },
          {
            name: "丹野 龍晟",
            nameEn: "Ryusei Tanno",
            research: "研究内容：画像処理技術を用いた歩行情報の数値化に関する研究",
            researchEn: "Research: Study on Quantification of Walking Information Using Image Processing Technology",
          },
          {
            name: "池畑 勇威",
            nameEn: "Takei Ikehata",
            research: "研究内容：画像処理技術を用いた牛の耳標認識に関する研究",
            researchEn: "Research: Study on Cattle Ear Tag Recognition Using Image Processing Technology",
          },
          {
            name: "筑波 真矢",
            nameEn: "Shinya Tsukuba",
            research: "研究内容：3Dカメラを用いた歩行中の乳牛のBCS評価に関する研究",
            researchEn: "Research: Study on BCS Evaluation of Walking Dairy Cows Using 3D Camera",
          },
          {
            name: "武吉 慧史朗",
            nameEn: "Keishiro Takeyoshi",
            research: "研究内容：画像処理技術を用いた乳牛の移動情報による跛行検知",
            researchEn:
              "Research: Lameness Detection Based on Movement Information of Dairy Cows Using Image Processing Technology",
          },
        ],
      },
    },
  },
  {
    year: "令和3年度",
    yearEn: "2021 Academic Year",
    programs: {
      doctor: {
        title: "博士課程",
        graduates: [
          {
            name: "Swe Zar Maw",
            nameEn: "Swe Zar Maw",
            research:
              "研究内容：A Study to Predict Calving Time in Dairy Cows Using Image Processing Techniques and Stochastic Model",
            researchEn:
              "Research: A Study to Predict Calving Time in Dairy Cows Using Image Processing Techniques and Stochastic Model",
          },
        ],
      },
      master: {
        title: "修士課程",
        graduates: [
          {
            name: "SuMyatNoe",
            nameEn: "SuMyatNoe",
            research:
              "研究内容：Cow Estrus Detection and Tracking based on Image Technology with the Enforcement of Deep Learning Methods",
            researchEn:
              "Research: Cow Estrus Detection and Tracking based on Image Technology with the Enforcement of Deep Learning Methods",
          },
          {
            name: "松岡 拓夢",
            nameEn: "Takumu Matsuoka",
            research: "研究内容：画像処理技術を用いた牛の個体識別に関する研究",
            researchEn: "Research: Study on Cattle Individual Identification Using Image Processing Technology",
          },
        ],
      },
      bachelor: {
        title: "学士課程",
        graduates: [
          {
            name: "釜堀 慶次郎",
            nameEn: "Keijiro Kamahori",
            research: "研究内容：歩行動画による高齢者の転倒リスク有無の判別に関する研究",
            researchEn: "Research: Study on Discrimination of Fall Risk in the Elderly Using Walking Videos",
          },
          {
            name: "鬼塚 翼",
            nameEn: "Tsubasa Onitsuka",
            research: "研究内容：画像処理技術を用いた牛の跛行検出に関する研究",
            researchEn: "Research: Study on Lameness Detection in Cattle Using Image Processing Technology",
          },
          {
            name: "後藤 逸兵",
            nameEn: "Ippei Goto",
            research: "研究内容：3Dカメラを用いた牛の個体識別に関する研究",
            researchEn: "Research: Study on Cattle Individual Identification Using 3D Camera",
          },
          {
            name: "山田 隆人",
            nameEn: "Takato Yamada",
            research: "研究内容：深層学習を用いた野生馬の自動個体識別に関する研究",
            researchEn: "Research: Study on Automatic Individual Identification of Wild Horses Using Deep Learning",
          },
          {
            name: "中富 武蔵",
            nameEn: "Musashi Nakatomi",
            research: "研究内容：3Dカメラを使用したベッド上の人の姿勢推定の研究",
            researchEn: "Research: Study on Posture Estimation of People on Bed Using 3D Camera",
          },
          {
            name: "渡邉 健太",
            nameEn: "Kenta Watanabe",
            research: "研究内容：画像処理技術を用いた牛の行動認識に関する研究",
            researchEn: "Research: Study on Behavior Recognition of Cattle Using Image Processing Technology",
          },
          {
            name: "矢野 夢騎",
            nameEn: "Yuki Yano",
            research: "研究内容：カメラによるマスク着用と手指消毒の検出に関する研究",
            researchEn: "Research: Study on Detection of Mask Wearing and Hand Disinfection Using Camera",
          },
          {
            name: "髙野 湧平",
            nameEn: "Yuuhei Takano",
            research: "研究内容：牛の後部画像を用いた個体識別に関する研究",
            researchEn: "Research: Study on Individual Identification Using Rear Images of Cattle",
          },
        ],
      },
    },
  },
  {
    year: "令和2年度",
    yearEn: "2020 Academic Year",
    programs: {
      doctor: {
        title: "博士課程",
        graduates: [
          {
            name: "須見 公祐",
            nameEn: "Kosuke Sumi",
            research: "研究内容：牛の分娩監視システムに関する研究",
            researchEn: "Research: Study on Calving Monitoring System for Cattle",
          },
        ],
      },
      master: {
        title: "修士課程",
        graduates: [
          {
            name: "三澤 周平",
            nameEn: "Shuhei Misawa",
            research: "研究内容：牛の耳標を用いた牛の個体識別に関する研究",
            researchEn: "Research: Study on Cattle Individual Identification Using Ear Tags",
          },
          {
            name: "赤木 裕哉",
            nameEn: "Yuya Akagi",
            research: "研究内容：画像処理技術を用いた高齢者の行動認識に関する研究",
            researchEn: "Research: Study on Behavior Recognition of the Elderly Using Image Processing Technology",
          },
          {
            name: "大塚 史範",
            nameEn: "Fuminori Otsuka",
            research: "研究内容：カメラを用いた牛舎内の牛の摂食行動検知に関する研究",
            researchEn: "Research: Study on Detection of Feeding Behavior of Cattle in Barns Using Camera",
          },
        ],
      },
      bachelor: {
        title: "学士課程",
        graduates: [
          {
            name: "井上 翔斗",
            nameEn: "Shoto Inoue",
            research: "研究内容：工場の作業効率化のための作業グループ検出に関する研究",
            researchEn: "Research: Study on Work Group Detection for Work Efficiency Improvement in Factories",
          },
          {
            name: "春山 剛瑠",
            nameEn: "Takuru Haruyama",
            research: "研究内容：歩行動画によるパーキンソン病の診断に関する研究",
            researchEn: "Research: Study on Diagnosis of Parkinson's Disease Using Walking Videos",
          },
          {
            name: "川越 悠聖",
            nameEn: "Yusei Kawagoe",
            research: "研究内容：牛の顔画像による個体識別に関する研究",
            researchEn: "Research: Study on Individual Identification Using Facial Images of Cattle",
          },
          {
            name: "日高 一生",
            nameEn: "Issei Hidaka",
            research: "研究内容：工場の作業効率化のための作業員追跡に関する研究",
            researchEn: "Research: Study on Worker Tracking for Work Efficiency Improvement in Factories",
          },
          {
            name: "福田 大将",
            nameEn: "Hiroki Fukuda",
            research: "研究内容：カメラを用いた乳用牛の跛行検知に関する研究",
            researchEn: "Research: Study on Lameness Detection in Dairy Cattle Using Camera",
          },
          {
            name: "本村 優弥",
            nameEn: "Yuya Motomura",
            research: "研究内容：画像処理技術を用いた牛領域抽出に関する研究",
            researchEn: "Research: Study on Cattle Region Extraction Using Image Processing Technology",
          },
          {
            name: "林田 高典",
            nameEn: "Takanori Hayashida",
            research: "研究内容：手の変位量から得られた各種信号をもとにした振戦の重症度評価",
            researchEn:
              "Research: Severity Evaluation of Tremor Based on Various Signals Obtained from Hand Displacement",
          },
        ],
      },
    },
  },
  {
    year: "平成31年度/令和元年度",
    yearEn: "2019 Academic Year",
    programs: {
      doctor: {
        title: "博士課程",
        graduates: [
          {
            name: "Cho Nilar Phyo",
            nameEn: "Cho Nilar Phyo",
            research:
              "研究内容：Human Action Recognition Using Depth Camera －Deep Learning Based Skeletal Joints and Human-Object Interactions－",
            researchEn:
              "Research: Human Action Recognition Using Depth Camera －Deep Learning Based Skeletal Joints and Human-Object Interactions－",
          },
          {
            name: "Swe Nwe Nwe Htun",
            nameEn: "Swe Nwe Nwe Htun",
            research: "研究内容：A Study on Detecting Abnormal Events to Support Independent Living",
            researchEn: "Research: A Study on Detecting Abnormal Events to Support Independent Living",
          },
        ],
      },
      master: {
        title: "修士課程",
        graduates: [
          {
            name: "河野 綜二郎",
            nameEn: "Sojiro Kono",
            research: "研究内容：距離画像による牛の骨格点に基づくBCS予測に関する研究",
            researchEn: "Research: Study on BCS Prediction Based on Skeletal Points of Cattle Using Depth Images",
          },
          {
            name: "溝渕 翼",
            nameEn: "Tsubasa Mizobuchi",
            research: "研究内容：測域センサとビデオカメラを用いた牛の発情行動検知及び追跡に関する研究",
            researchEn:
              "Research: Study on Detection and Tracking of Estrus Behavior in Cattle Using LiDAR Sensor and Video Camera",
          },
          {
            name: "三井 優一",
            nameEn: "Yuichi Mitsui",
            research: "研究内容：振戦分析を用いた病名診断と重症度測定に関する研究",
            researchEn: "Research: Study on Disease Diagnosis and Severity Measurement Using Tremor Analysis",
          },
          {
            name: "森本 健宏",
            nameEn: "Takehiro Morimoto",
            research: "研究内容：悪環境での感染エビの検出に関する研究",
            researchEn: "Research: Study on Detection of Infected Shrimp in Adverse Environments",
          },
          {
            name: "Myat Thiri Wai",
            nameEn: "Myat Thiri Wai",
            research: "研究内容：Table-based Handwritten Character Recognition in Basic Education",
            researchEn: "Research: Table-based Handwritten Character Recognition in Basic Education",
          },
          {
            name: "Nann Hwan Khan",
            nameEn: "Nann Hwan Khan",
            research: "研究内容：The Emotion Analysis of Twitter Users on Natural Disasters",
            researchEn: "Research: The Emotion Analysis of Twitter Users on Natural Disasters",
          },
        ],
      },
      bachelor: {
        title: "学士課程",
        graduates: [
          {
            name: "八藤 拓己",
            nameEn: "Takumi Hatto",
            research: "研究内容：画像処理技術を用いたパーキンソン病静止時振戦の重症度測定に関する研究",
            researchEn:
              "Research: Study on Severity Measurement of Parkinson's Disease Resting Tremor Using Image Processing Technology",
          },
          {
            name: "柏田 佳佑",
            nameEn: "Keisuke Kashida",
            research: "研究内容：Kinectセンサーを用いたパーキンソン病の早期発見のための特徴量抽出に関する研究",
            researchEn:
              "Research: Study on Feature Extraction for Early Detection of Parkinson's Disease Using Kinect Sensor",
          },
          {
            name: "戸丸 俊平",
            nameEn: "Shunpei Tomaru",
            research: "研究内容：牛の分娩行動時の尾の挙上持続時間に関する研究",
            researchEn: "Research: Study on Tail Raising Duration During Calving Behavior in Cattle",
          },
          {
            name: "松岡 拓夢",
            nameEn: "Takumu Matsuoka",
            research: "研究内容：画像処理技術を用いた牛の摂食行動検知に関する研究",
            researchEn: "Research: Study on Detection of Feeding Behavior in Cattle Using Image Processing Technology",
          },
          {
            name: "渕脇 龍乃介",
            nameEn: "Ryunosuke Fuchiwaki",
            research: "研究内容：3次元カメラと画像処理技術を用いた牛の個体識別に関する研究",
            researchEn:
              "Research: Study on Individual Identification of Cattle Using 3D Camera and Image Processing Technology",
          },
          {
            name: "清家 瑞紀",
            nameEn: "Mizuki Seike",
            research: "研究内容：画像処理を用いたホワイトスポット病のクルマエビ検知に関する研究",
            researchEn: "Research: Study on Detection of White Spot Disease in Shrimp Using Image Processing",
          },
        ],
      },
    },
  },
] 