

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
// 言語コンテキストを使用するために必要なインポートを追加

// 翻訳データを定義
const translations = {
  pageTitle: {
    ja: "牛の摂食行動と摂食時間管理",
    en: "Cattle Feeding Behavior and Time Management",
  },
  pageSubtitle: {
    ja: "画像処理技術を用いた効率的な牛の健康管理",
    en: "Efficient Cattle Health Management Using Image Processing Technology",
  },
  experimentBackground: {
    title: {
      ja: "実験背景・目的",
      en: "Experiment Background & Purpose",
    },
    content1: {
      ja: "牛の摂食時間の変化は、牛の健康状態を示す有効な指標です。本研究の目的は、牛の分娩予測および健康管理のために、摂食時間を効果的にモニタリングする手法を確立することです。",
      en: "Changes in cattle feeding time are an effective indicator of cattle health status. The purpose of this research is to establish a method for effectively monitoring feeding time for calving prediction and health management of cattle.",
    },
    content2: {
      ja: "摂食時間の変化を正確に把握することで、疾病の早期発見や分娩の予測が可能となり、酪農家の労働負担軽減と牛の健康管理の向上に貢献します。",
      en: "By accurately understanding changes in feeding time, early detection of diseases and prediction of calving become possible, contributing to reducing the labor burden of dairy farmers and improving cattle health management.",
    },
  },
  experimentEnvironment: {
    title: {
      ja: "実験環境",
      en: "Experimental Environment",
    },
    content1: {
      ja: "農工連携のもと、宮崎大学住吉フィールドから収集したデータを使用して実験を行いました。牛舎内に設置したカメラにより、牛の行動を24時間連続で記録し、摂食行動の特徴を抽出するためのデータセットを構築しています。",
      en: "Experiments were conducted using data collected from the Sumiyoshi Field of Miyazaki University under agriculture-engineering collaboration. Cameras installed in the cattle barn continuously record cattle behavior for 24 hours, building a dataset for extracting feeding behavior characteristics.",
    },
    content2: {
      ja: "実験では、複数の牛を対象に、異なる時間帯や環境条件下での摂食行動を記録し、機械学習アルゴリズムの学習データとして活用しています。",
      en: "In the experiments, feeding behavior of multiple cattle under different time periods and environmental conditions is recorded and used as training data for machine learning algorithms.",
    },
  },
  experimentResults: {
    title: {
      ja: "実験結果",
      en: "Experimental Results",
    },
    content1: {
      ja: "機械学習を用いることで、牛の正確な検知ができました。また、摂食時間の測定にも成功しています。具体的には、深層学習モデルを用いて牛の頭部の位置と姿勢を検出し、飼料に対する接近行動を摂食行動として認識することで、摂食時間を自動的に計測するシステムを構築しました。",
      en: "Using machine learning, accurate detection of cattle was achieved. We also succeeded in measuring feeding time. Specifically, we built a system that automatically measures feeding time by detecting the position and posture of the cattle's head using a deep learning model and recognizing approach behavior to feed as feeding behavior.",
    },
    content2: {
      ja: "本システムの精度検証では、人間による観察結果と比較して90%以上の一致率を達成し、実用的な精度で牛の摂食行動を自動検知できることを確認しました。また、分娩前の牛では摂食時間が徐々に減少する傾向が観察され、分娩予測の指標として有効であることが示唆されました。",
      en: "In the accuracy verification of this system, we achieved a match rate of over 90% compared to human observation results, confirming that cattle feeding behavior can be automatically detected with practical accuracy. Additionally, a gradual decrease in feeding time was observed in pre-calving cattle, suggesting its effectiveness as an indicator for calving prediction.",
    },
  },
  futureProspects: {
    title: {
      ja: "今後の展望",
      en: "Future Prospects",
    },
    content1: {
      ja: "本研究の成果を基に、牛の健康状態をリアルタイムでモニタリングするシステムの実用化を目指しています。さらに、摂食行動だけでなく、反芻行動や休息行動なども含めた総合的な行動分析により、より精度の高い健康管理システムの構築を進めています。",
      en: "Based on the results of this research, we aim to put into practical use a system that monitors the health status of cattle in real-time. Furthermore, we are developing a more accurate health management system through comprehensive behavioral analysis that includes not only feeding behavior but also rumination and resting behaviors.",
    },
    content2: {
      ja: "また、クラウドシステムとの連携により、複数の牧場からのデータを集約・分析することで、より汎用性の高いモデルの開発も視野に入れています。これにより、日本の酪農業の生産性向上と持続可能な発展に貢献することを目指しています。",
      en: "We are also considering the development of more versatile models by aggregating and analyzing data from multiple farms through collaboration with cloud systems. Through this, we aim to contribute to improving productivity and sustainable development of Japan's dairy industry.",
    },
  },
  backToProjects: {
    ja: "研究プロジェクト一覧に戻る",
    en: "Back to Research Projects",
  },
}

export default function CattleFeedingPage() {
  // 言語コンテキストを使用
  const language = "ja"

  return (
    <div>
      {/* ヘッダーセクション */}
      <section 
        className="relative py-16 md:py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/normal_header.png')"
        }}
      >
        {/* オーバーレイ */}
        <div className="absolute inset-0 bg-black/30"></div>
        
        {/* コンテンツ */}
        <div className="container relative z-10">
          <div className="text-center">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight tracking-tighter text-white drop-shadow-lg">
              {translations.pageTitle[language]}
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
              <h2 className="text-2xl font-bold mb-4">{translations.experimentBackground.title[language]}</h2>
              <p className="text-gray-700">{translations.experimentBackground.content1[language]}</p>
              <p className="text-gray-700 mt-4 mb-8">{translations.experimentBackground.content2[language]}</p>
              <div
                className="relative aspect-auto rounded-lg overflow-hidden"
                style={{ height: "auto", minHeight: "250px" }}
              >
                <Image
                  src="/images/research-ishikawa1.png"
                  alt={translations.experimentBackground.title[language]}
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* 実験環境 */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-4">{translations.experimentEnvironment.title[language]}</h2>
              <p className="text-gray-700">{translations.experimentEnvironment.content1[language]}</p>
              <p className="text-gray-700 mt-4 mb-8">{translations.experimentEnvironment.content2[language]}</p>
              <div
                className="relative aspect-auto rounded-lg overflow-hidden"
                style={{ height: "auto", minHeight: "250px" }}
              >
                <Image
                  src="/images/research-ishikawa2.png"
                  alt={translations.experimentEnvironment.title[language]}
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* 実験結果 */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-4">{translations.experimentResults.title[language]}</h2>
              <p className="text-gray-700">{translations.experimentResults.content1[language]}</p>
              <p className="text-gray-700 mt-4 mb-8">{translations.experimentResults.content2[language]}</p>
              <div
                className="relative aspect-auto rounded-lg overflow-hidden"
                style={{ height: "auto", minHeight: "250px" }}
              >
                <Image
                  src="/images/research-ishikawa3.png"
                  alt={translations.experimentResults.title[language]}
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* 今後の展望 */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-4">{translations.futureProspects.title[language]}</h2>
              <p className="text-gray-700">{translations.futureProspects.content1[language]}</p>
              <p className="text-gray-700 mt-4">{translations.futureProspects.content2[language]}</p>
            </div>

            <div className="flex justify-center mt-8">
              <Link href="/research/projects">
                <Button variant="outline">{translations.backToProjects[language]}</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
