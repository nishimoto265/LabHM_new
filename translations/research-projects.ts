// 個別プロジェクトページ用の翻訳
export const cattleIdentificationTranslations = {
  ja: {
    title: "3Dカメラによる歩行中の牛の個体識別",
    overviewTitle: "研究概要",
    overviewText: "距離情報を活用して牛の3次元形状を捉え、毛色や模様に依存しない高精度な個体識別システムを構築する研究です。",
    backgroundTitle: "実験背景・目的",
    backgroundText1: "畜産業において、個体識別は健康管理や生産性向上のために不可欠です。従来の方法では人的コストが高く、識別精度にも課題がありました。",
    backgroundText2: "本研究では3Dカメラを用いて、歩行中の牛でも高精度に個体識別できるシステムの開発を目指しています。",
    environmentTitle: "実験環境",
    environmentText1: "宮崎大学農学部附属フィールド科学教育研究センターの牛舎にて実験を実施しています。",
    environmentText2: "3Dカメラを通路上部に設置し、歩行中の牛の3次元データを取得します。",
    methodTitle: "提案手法",
    methodText1: "本研究では、以下の手順で個体識別を行います：",
    methodText2: "",
    methodList: [
      "3Dカメラで牛の3次元点群データを取得",
      "点群データから特徴量を抽出",
      "機械学習により個体を識別",
      "識別結果をデータベースに記録"
    ],
    resultsTitle: "実験結果",
    resultsText1: "提案手法により、20頭の牛に対して95%以上の識別精度を達成しました。",
    resultsText2: "毛色や模様に依存しない識別が可能となり、様々な品種の牛に適用可能です。",
    futureTitle: "今後の展望",
    futureText1: "識別精度のさらなる向上を目指し、深層学習モデルの最適化を進めています。",
    futureText2: "また、リアルタイムでの個体識別システムの実装を計画しています。",
    futureText3: "将来的には、識別結果を活用した健康管理システムとの連携を目指します。",
    backToProjects: "プロジェクト一覧に戻る"
  },
  en: {
    title: "Individual Identification of Walking Cattle Using 3D Cameras",
    overviewTitle: "Research Overview",
    overviewText: "Research building a high-precision individual identification system that captures the three-dimensional shape of cattle using distance information, independent of coat color or pattern.",
    backgroundTitle: "Background & Objectives",
    backgroundText1: "In the livestock industry, individual identification is essential for health management and productivity improvement. Traditional methods have high labor costs and challenges in identification accuracy.",
    backgroundText2: "This research aims to develop a system that can accurately identify individual cattle even while walking using 3D cameras.",
    environmentTitle: "Experimental Environment",
    environmentText1: "Experiments are conducted at the Field Science Education and Research Center of the Faculty of Agriculture, University of Miyazaki.",
    environmentText2: "3D cameras are installed above the passage to acquire three-dimensional data of walking cattle.",
    methodTitle: "Proposed Method",
    methodText1: "In this research, individual identification is performed through the following steps:",
    methodText2: "",
    methodList: [
      "Acquire 3D point cloud data of cattle with 3D camera",
      "Extract features from point cloud data",
      "Identify individuals using machine learning",
      "Record identification results in database"
    ],
    resultsTitle: "Experimental Results",
    resultsText1: "The proposed method achieved an identification accuracy of over 95% for 20 cattle.",
    resultsText2: "Identification independent of coat color or pattern is possible, making it applicable to various breeds of cattle.",
    futureTitle: "Future Prospects",
    futureText1: "We are working on optimizing deep learning models to further improve identification accuracy.",
    futureText2: "We also plan to implement a real-time individual identification system.",
    futureText3: "In the future, we aim to integrate with health management systems utilizing identification results.",
    backToProjects: "Back to Projects"
  }
}

export const researchProjectsTranslations = {
  ja: {
    title: "研究プロジェクト",
    subtitle: "プロジェクト一覧",
    keywords: {
      all: "すべて",
      ai: "AI",
      cow: "牛",
      human: "人",
      medical: "医療",
    },
    noResults: {
      message: "に関連するプロジェクトは見つかりませんでした。",
      showAll: "すべてのプロジェクトを表示",
    },
    viewDetails: "詳細を見る",
    projects: {
      cattleFeeding: {
        title: "牛の摂食行動と摂食時間管理",
        description: "牛の健康状態を示す有効な指標として摂食時間の変化に着目し、効果的なモニタリング手法を確立する研究",
      },
      calvingPrediction: {
        title: "乳牛の分娩・難産兆候推定システム",
        description: "画像処理技術やAIを活用した効率的な分娩監視システムにより、分娩事故の発生件数を削減する研究",
      },
      elderlyMonitoring: {
        title: "プライバシーを保護した高齢者見守りと健康支援システム",
        description: "深度カメラを用いてプライバシーを保護しながら高齢者の行動を分析し、介護の質向上を目指す研究",
      },
      fetalMonitoring: {
        title: "情報技術とAIを用いた臍帯血ガスパラメータ活用による負担軽減型胎児モニタリング",
        description:
          "胎児心拍数変動と臍帯血ガスパラメータの関連性を解析し、低酸素症やアシドーシスの早期発見と適切な医療介入を支援する研究",
      },
      bcsEvaluation: {
        title: "歩行中の乳牛に対するBCS評価の自動化",
        description:
          "3Dカメラを用いて歩行中の乳牛のボディコンディションスコアを自動評価し、効率的な健康管理と飼養管理の最適化を支援する研究",
      },
      cattleIdentification: {
        title: "3Dカメラによる歩行中の牛の個体識別",
        description:
          "距離情報を活用して牛の3次元形状を捉え、毛色や模様に依存しない高精度な個体識別システムを構築する研究",
      },
      earTagIdentification: {
        title: "耳標番号による牛の個体識別",
        description: "画像処理技術を用いて牛の耳標番号を自動的に読み取り、効率的な個体管理を実現する研究",
      },
      calfBehaviorAnalysis: {
        title: "子牛の行動解析による健康管理",
        description: "カメラを用いた非接触の子牛の行動解析により、疾病の早期発見と適切な治療介入を支援する研究",
      },
    },
  },
  en: {
    title: "Research Projects",
    subtitle: "Project List",
    keywords: {
      all: "All",
      ai: "AI",
      cow: "Cattle",
      human: "Human",
      medical: "Medical",
    },
    noResults: {
      message: "No projects related to",
      showAll: "Show all projects",
    },
    viewDetails: "View Details",
    projects: {
      cattleFeeding: {
        title: "Cattle Feeding Behavior and Time Management",
        description:
          "Research focusing on changes in feeding time as an effective indicator of cattle health status, establishing effective monitoring methods",
      },
      calvingPrediction: {
        title: "Dairy Cow Calving and Dystocia Prediction System",
        description:
          "Research to reduce the number of calving accidents through an efficient calving monitoring system using image processing technology and AI",
      },
      elderlyMonitoring: {
        title: "Privacy-Preserving Elderly Monitoring and Health Support System",
        description:
          "Research aiming to improve the quality of care by analyzing elderly behavior while protecting privacy using depth cameras",
      },
      fetalMonitoring: {
        title:
          "Reduced-Burden Fetal Monitoring Using Information Technology and AI with Umbilical Blood Gas Parameters",
        description:
          "Research analyzing the relationship between fetal heart rate variability and umbilical blood gas parameters to support early detection of hypoxia and acidosis and appropriate medical intervention",
      },
      bcsEvaluation: {
        title: "Automation of BCS Evaluation for Walking Dairy Cows",
        description:
          "Research supporting efficient health management and optimization of feeding management by automatically evaluating the body condition score of walking dairy cows using 3D cameras",
      },
      cattleIdentification: {
        title: "Individual Identification of Walking Cattle Using 3D Cameras",
        description:
          "Research building a high-precision individual identification system that captures the three-dimensional shape of cattle using distance information, independent of coat color or pattern",
      },
      earTagIdentification: {
        title: "Cattle Identification by Ear Tag Number",
        description:
          "Research achieving efficient individual management by automatically reading cattle ear tag numbers using image processing technology",
      },
      calfBehaviorAnalysis: {
        title: "Calf Health Management through Behavior Analysis",
        description:
          "Research supporting early disease detection and appropriate treatment intervention through non-contact calf behavior analysis using cameras",
      },
    },
  },
}
