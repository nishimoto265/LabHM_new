

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { getImagePath } from "@/lib/utils"

export default function EarTagIdentificationPage() {
  const language = "ja"

  const translations = {
    ja: {
      title: "耳標番号による牛の個体識別",
      subtitle: "画像処理技術を用いた効率的な牛の個体管理",
      backToProjects: "研究プロジェクト一覧に戻る",

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
        "本研究の成果を基に、より多様な環境条件（屋外、夜間など）や耳標の状態（汚れ、破損など）に対応できるよう、システムの改良を進めていきます。また、モバイルデバイスでの運用を可能にするため、軽量化されたモデルの開発も検討しています。",
      futureText2:
        "さらに、耳標識別と他の個体識別技術（3D形状認識、行動パターン分析など）を組み合わせたマルチモーダル個体識別システムの開発も視野に入れており、より堅牢で信頼性の高い牛の個体管理システムの構築を目指しています。",
      futureText3:
        "本研究は、牧場従事者の負担をカメラとAIで軽減し、SDGsの目標2（飢餓をゼロに）、目標8（働きがいも経済成長も）、目標9（産業と技術革新の基盤をつくろう）に貢献することを目指しています。",
    },
    en: {
      title: "Cattle Identification Using Ear Tag Numbers",
      subtitle: "Efficient Cattle Management Using Image Processing Technology",
      backToProjects: "Back to Research Projects",

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
        "Based on the results of this research, we will continue to improve our system to accommodate a wider range of environmental conditions (outdoor, nighttime, etc.) and ear tag conditions (dirt, damage, etc.). We are also considering developing lightweight models to enable operation on mobile devices.",
      futureText2:
        "Furthermore, we are looking into developing a multimodal individual identification system that combines ear tag identification with other individual identification technologies (3D shape recognition, behavioral pattern analysis, etc.), aiming to build a more robust and reliable cattle management system.",
      futureText3:
        "This research aims to reduce the burden on ranch workers through cameras and AI, contributing to SDG Goal 2 (Zero Hunger), Goal 8 (Decent Work and Economic Growth), and Goal 9 (Industry, Innovation and Infrastructure).",
    },
  }

  const t = translations[language]

  return (
    <div>
      {/* ヘッダーセクション */}
      <section 
        className="relative py-16 md:py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${getImagePath('/images/normal_header.png')})`
        }}
      >
        {/* オーバーレイ */}
        <div className="absolute inset-0 bg-black/30"></div>
        
        {/* コンテンツ */}
        <div className="container relative z-10">
          <div className="text-center">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight tracking-tighter text-white drop-shadow-lg">
              {t.title}
            </h1>
          </div>
        </div>
      </section>

      {/* メインコンテンツ */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* 実験背景・目的 */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-4">{t.backgroundTitle}</h2>
              <p className="text-gray-700">{t.backgroundText1}</p>
              <p className="text-gray-700 mt-4">{t.backgroundText2}</p>
              <div
                className="relative aspect-auto mt-8 rounded-lg overflow-hidden"
                style={{ height: "auto", minHeight: "250px" }}
              >
                <Image
                  src={getImagePath("/images/research-simizu1.png")}
                  alt={language === "ja" ? "実験背景・目的" : "Experimental Background & Objectives"}
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* 実験環境 */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-4">{t.environmentTitle}</h2>
              <p className="text-gray-700">{t.environmentText1}</p>
              <p className="text-gray-700 mt-4">{t.environmentText2}</p>
              <div
                className="relative aspect-auto mt-8 rounded-lg overflow-hidden"
                style={{ height: "auto", minHeight: "250px" }}
              >
                <Image
                  src={getImagePath("/images/research-simizu2.png")}
                  alt={language === "ja" ? "実験環境" : "Experimental Environment"}
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* 提案手法 */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-4">{t.methodTitle}</h2>
              <p className="text-gray-700">{t.methodText1}</p>
              <p className="text-gray-700 mt-4">{t.methodText2}</p>
              <ol className="list-decimal pl-5 space-y-2 mt-2 text-gray-700">
                {t.methodList.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ol>
              <div
                className="relative aspect-auto mt-8 rounded-lg overflow-hidden"
                style={{ height: "auto", minHeight: "250px" }}
              >
                <Image
                  src={getImagePath("/images/research-siihara3.png")}
                  alt={language === "ja" ? "提案手法" : "Proposed Method"}
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* 実験結果 */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-4">{t.resultsTitle}</h2>
              <p className="text-gray-700">{t.resultsText1}</p>
              <p className="text-gray-700 mt-4">{t.resultsText2}</p>
              <div
                className="relative aspect-auto mt-8 rounded-lg overflow-hidden"
                style={{ height: "auto", minHeight: "250px" }}
              >
                <Image
                  src={getImagePath("/images/research-siihara4.png")}
                  alt={language === "ja" ? "実験結果" : "Experimental Results"}
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* 今後の展望 */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-4">{t.futureTitle}</h2>
              <p className="text-gray-700">{t.futureText1}</p>
              <p className="text-gray-700 mt-4">{t.futureText2}</p>
              <p className="text-gray-700 mt-4">{t.futureText3}</p>
            </div>

            <div className="flex justify-center mt-8">
              <Link href="/research/projects">
                <Button variant="outline">{t.backToProjects}</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
