export const cattleIdentificationTranslations = {
  ja: {
    title: "3Dカメラによる歩行中の牛の個体識別",
    subtitle: "距離情報を活用した高精度な牛の個体識別システム",
    backToProjects: "研究プロジェクト一覧に戻る",

    // プロジェクト概要
    overviewTitle: "3Dカメラによる牛の個体識別",
    overviewText:
      "牛の個体識別は、個体の成長、健康管理、行動パターンなどを個別に追跡・管理するために重要です。本研究では、距離情報を取得できる3Dカメラを用いることで、毛色や模様に依存しない高精度な牛の個体識別システムを構築しています。",

    // 実験背景・目的
    backgroundTitle: "実験背景・目的",
    backgroundText1:
      "牛の個体識別によって個体の成長、健康管理、行動パターンなどを個別に追跡・管理できます。また、異常な行動や疾病の早期検出が可能となります。しかし、通常のカメラでは毛色や模様が一様な牛の識別が困難です。そこで、距離情報を取得できる3Dカメラを用いることで、牛の個体識別を行うことを目的としています。",
    backgroundText2:
      "従来のRGBカメラを用いた個体識別では、照明条件の変化や牛の体表の汚れなどによって識別精度が低下するという課題がありました。3Dカメラを用いることで、これらの環境要因に影響されにくい、より安定した個体識別システムの構築を目指しています。",

    // 実験環境
    environmentTitle: "実験環境",
    environmentText1:
      "農工連携のもと、宮崎大学住吉フィールドから収集したデータを使用して実験を行いました。上の図に示すように、牛舎の上部に3Dカメラを設置し、上方から牛を撮影しています。これにより、牛の背中の形状や高さなどの3次元的特徴を捉えることが可能となりました。",
    environmentText2:
      "3Dカメラから取得した深度情報は、CSVファイルとして保存され、後続の処理で活用されます。この方法により、照明条件や牛の毛色に左右されない安定したデータ収集が実現しています。",

    // 提案手法
    methodTitle: "提案手法",
    methodText1:
      "個体識別のフローチャートを示しています。距離情報が入ったCSVファイルから牛領域の検出を行い、得られた牛領域から特徴量を抽出し、機械学習を用いて個体識別を行います。",
    methodText2: "具体的な処理フローは以下の通りです：",
    methodList: [
      "3Dカメラから取得した深度情報の前処理（ノイズ除去、正規化）",
      "背景と牛領域の分離（閾値処理、領域分割）",
      "牛の3次元形状に関する特徴量の抽出（背中のライン、肩の高さ、腰の形状など）",
      "機械学習アルゴリズムによる個体識別モデルの構築",
      "リアルタイム識別システムの実装",
    ],

    // 実験結果
    resultsTitle: "実験結果",
    resultsText1:
      "4つの機械学習分類器（A〜D）を用いた個体識別の精度を比較した結果です。分類器Dでは正答率が95.0%となり、高い精度で個体識別が可能であることが確認されました。",
    resultsText2:
      "特に、照明条件の変化や牛の体表の汚れなどの環境要因に影響されにくく、安定した識別性能を示しました。また、歩行中の牛に対しても高い精度で識別が可能であり、実用性の高いシステムであることが確認されました。",

    // 今後の展望
    futureTitle: "今後の展望",
    futureText1:
      "本研究の成果を基に、より多様な環境や牛種に対応できるよう、データセットの拡充とモデルの改良を進めていきます。また、個体識別だけでなく、歩行パターンの分析による跛行検知や、体型変化の追跡によるBCS評価など、他の健康指標との統合も視野に入れ、総合的な牛の健康管理システムの開発を目指しています。",
    futureText2:
      "さらに、エッジコンピューティング技術を活用したリアルタイム処理システムの構築や、クラウドシステムとの連携による大規模牧場向けの統合管理システムの開発も検討しています。これにより、日本の酪農業の生産性向上と持続可能な発展に貢献することを目指しています。",
    futureText3:
      "本研究は、SDGsの目標2（飢餓をゼロに）、目標8（働きがいも経済成長も）、目標9（産業と技術革新の基盤をつくろう）に貢献することを目指しています。",
  },
  en: {
    title: "Individual Cattle Identification Using 3D Camera During Walking",
    subtitle: "High-Precision Cattle Identification System Utilizing Distance Information",
    backToProjects: "Back to Research Projects",

    // Project Overview
    overviewTitle: "Cattle Identification Using 3D Camera",
    overviewText:
      "Cattle identification is important for individually tracking and managing growth, health, and behavioral patterns of each animal. In this research, we are building a high-precision cattle identification system that does not depend on coat color or patterns by using a 3D camera that can acquire distance information.",

    // Experimental Background & Objectives
    backgroundTitle: "Experimental Background & Objectives",
    backgroundText1:
      "Cattle identification allows for individual tracking and management of growth, health, and behavioral patterns. It also enables early detection of abnormal behavior and diseases. However, identification of cattle with uniform coat colors and patterns is difficult with conventional cameras. Therefore, our objective is to perform cattle identification using a 3D camera that can acquire distance information.",
    backgroundText2:
      "Conventional individual identification using RGB cameras had issues with decreased identification accuracy due to changes in lighting conditions and dirt on the cattle's body surface. By using 3D cameras, we aim to build a more stable individual identification system that is less affected by these environmental factors.",

    // Experimental Environment
    environmentTitle: "Experimental Environment",
    environmentText1:
      "We conducted experiments using data collected from Miyazaki University's Sumiyoshi Field under agricultural-engineering collaboration. As shown in the figure above, we installed a 3D camera at the top of the cattle barn to capture the cows from above. This made it possible to capture three-dimensional features such as the shape and height of the cow's back.",
    environmentText2:
      "The depth information obtained from the 3D camera is saved as a CSV file and utilized in subsequent processing. This method enables stable data collection that is not affected by lighting conditions or the cow's coat color.",

    // Proposed Method
    methodTitle: "Proposed Method",
    methodText1:
      "The flowchart for individual identification is shown. We detect the cow region from the CSV file containing distance information, extract features from the obtained cow region, and perform individual identification using machine learning.",
    methodText2: "The specific processing flow is as follows:",
    methodList: [
      "Preprocessing of depth information obtained from 3D camera (noise removal, normalization)",
      "Separation of background and cow regions (threshold processing, region segmentation)",
      "Extraction of features related to the cow's 3D shape (back line, shoulder height, hip shape, etc.)",
      "Construction of individual identification model using machine learning algorithms",
      "Implementation of real-time identification system",
    ],

    // Experimental Results
    resultsTitle: "Experimental Results",
    resultsText1:
      "The results compare the accuracy of individual identification using four machine learning classifiers (A-D). Classifier D achieved an accuracy rate of 95.0%, confirming that high-precision individual identification is possible.",
    resultsText2:
      "In particular, it showed stable identification performance that is less affected by environmental factors such as changes in lighting conditions and dirt on the cow's body surface. It was also confirmed that high-accuracy identification is possible even for walking cows, making it a highly practical system.",

    // Future Prospects
    futureTitle: "Future Prospects",
    futureText1:
      "Based on the results of this research, we will continue to expand our dataset and improve our models to accommodate a wider range of environments and cattle breeds. In addition to individual identification, we also aim to develop a comprehensive cattle health management system that integrates other health indicators such as lameness detection through gait pattern analysis and BCS evaluation through body shape tracking.",
    futureText2:
      "Furthermore, we are considering building a real-time processing system utilizing edge computing technology and developing an integrated management system for large-scale farms through integration with cloud systems. Through these efforts, we aim to contribute to improving productivity and sustainable development of Japan's dairy industry.",
    futureText3:
      "This research aims to contribute to SDG Goal 2 (Zero Hunger), Goal 8 (Decent Work and Economic Growth), and Goal 9 (Industry, Innovation and Infrastructure).",
  },
} 