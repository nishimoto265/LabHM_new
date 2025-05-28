

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { getImagePath } from "@/lib/utils"

// 翻訳データを定義
const translations = {
  pageTitle: {
    ja: "情報技術とAIを用いた臍帯血ガスパラメータ活用による負担軽減型胎児モニタリング",
    en: "Reduced-Burden Fetal Monitoring Using Information Technology and AI with Umbilical Blood Gas Parameters",
  },
  pageSubtitle: {
    ja: "胎児の健康状態を早期に把握する新しいモニタリングシステム",
    en: "A New Monitoring System for Early Understanding of Fetal Health Status",
  },
  challengesAndValue: {
    title: {
      ja: "解決する課題と価値・効果",
      en: "Challenges to Solve and Value/Effects",
    },
    content1: {
      ja: "胎児心拍数変動（FHRV）の解析において、データに含まれるノイズや外れ値による精度低下、リアルタイム解析の不足、さらにFHRVと臍帯血ガスパラメータとの関連性が未解明であるという技術的課題を解決することを目的としています。",
      en: "The aim is to solve technical challenges in the analysis of fetal heart rate variability (FHRV), including accuracy degradation due to noise and outliers in the data, lack of real-time analysis, and the unexplored relationship between FHRV and umbilical blood gas parameters.",
    },
    content2: {
      ja: "医療従事者が使いやすい胎児モニタリングシステムを開発し、複雑な生理データをわかりやすく提供することで、迅速かつ的確な意思決定を支援します。これにより低酸素症やアシドーシスの早期発見と適切な医療介入が可能となり、母子の予後改善に寄与します。",
      en: "By developing a user-friendly fetal monitoring system for healthcare professionals and providing complex physiological data in an easy-to-understand manner, we support quick and accurate decision-making. This enables early detection of hypoxia and acidosis and appropriate medical intervention, contributing to improved prognosis for mothers and babies.",
    },
  },
  systemOverview: {
    title: {
      ja: "システムの概要",
      en: "System Overview",
    },
    content1: {
      ja: "上の図に示すように、本システムは胎児心拍変動（FHRV）のデータを頭皮用電極から取得し、処理PCで分析します。学習モデルにより、出産時の臍帯血ガス分析によってしか得られないパラメータ（pH、PCO2、PO2、HCO3、BE）を予測します。",
      en: "As shown in the figure above, this system acquires fetal heart rate variability (FHRV) data from scalp electrodes and analyzes it on a processing PC. The learning model predicts parameters (pH, PCO2, PO2, HCO3, BE) that can only be obtained through umbilical cord blood gas analysis at the time of delivery.",
    },
    content2: {
      ja: "これらのパラメータは胎児の呼吸状態を評価し、潜在的な合併症を発見するために重要です。心電図と各パラメータとの関係性を鑑みたモデルを構築することで、胎児の状態をリアルタイムで推定することが可能になります。",
      en: "These parameters are important for evaluating the respiratory status of the fetus and discovering potential complications. By building a model that considers the relationship between the electrocardiogram and each parameter, it becomes possible to estimate the fetal condition in real-time.",
    },
    content3: {
      ja: "システムの下部に示されているように、出産前からpH、PCO2、PO2、HCO3、BEがわかることにより、出産に伴うリスクや緊急事態に対する事前準備が向上します。また、データがリアルタイムで処理され、結果が即時に利用できるため、医師や医療スタッフは迅速かつ適切な意思決定を行えます。",
      en: "As shown at the bottom of the system, knowing pH, PCO2, PO2, HCO3, and BE before delivery improves preparation for risks and emergencies associated with childbirth. Additionally, since data is processed in real-time and results are immediately available, doctors and medical staff can make quick and appropriate decisions.",
    },
  },
  researchMethod: {
    title: {
      ja: "研究手法",
      en: "Research Method",
    },
    content1: {
      ja: "胎児に頭皮用電極を装着し、胎児の心拍変動データを取得します。その後、心電図と各パラメータ（pH、pCO2、pO2、HCO3、BE）との関係性を鑑みたモデルを構築し、胎児の状態を推定します。",
      en: "A scalp electrode is attached to the fetus to acquire fetal heart rate variability data. Subsequently, a model is constructed that considers the relationship between the electrocardiogram and each parameter (pH, pCO2, pO2, HCO3, BE) to estimate the fetal condition.",
    },
    content2: {
      ja: "具体的には、以下のステップで研究を進めています：",
      en: "Specifically, we are advancing the research through the following steps:",
    },
    steps: {
      ja: [
        "胎児心拍数データの収集と前処理（ノイズ除去、外れ値処理）",
        "心拍変動パラメータの抽出（時間領域、周波数領域、非線形解析）",
        "臍帯血ガスパラメータとの相関分析",
        "機械学習モデルによる胎児状態推定アルゴリズムの開発",
        "リアルタイム解析システムの構築",
        "臨床評価と改良",
      ],
      en: [
        "Collection and preprocessing of fetal heart rate data (noise removal, outlier processing)",
        "Extraction of heart rate variability parameters (time domain, frequency domain, nonlinear analysis)",
        "Correlation analysis with umbilical blood gas parameters",
        "Development of fetal condition estimation algorithm using machine learning model",
        "Construction of real-time analysis system",
        "Clinical evaluation and improvement",
      ],
    },
  },
  resultsAndProspects: {
    title: {
      ja: "研究成果と今後の展望",
      en: "Research Results and Future Prospects",
    },
    content1: {
      ja: "現在までの研究で、胎児心拍数変動と臍帯血ガスパラメータの間に有意な相関関係を見出しており、機械学習モデルによる胎児状態の推定精度も向上しています。特に、エントロピー指標を用いた解析が胎児の低酸素状態の早期検出に有効であることが示唆されています。",
      en: "In research to date, we have found significant correlations between fetal heart rate variability and umbilical blood gas parameters, and the estimation accuracy of fetal condition using machine learning models has also improved. In particular, analysis using entropy indicators has been suggested to be effective for early detection of fetal hypoxia.",
    },
    content2: {
      ja: "今後は、より多くの臨床データを収集し、モデルの精度向上を図るとともに、医療現場で実際に使用可能なリアルタイムモニタリングシステムの開発を進めていきます。また、デジタルツイン技術を活用した胎児の生理状態シミュレーションも検討しており、より包括的な胎児健康管理システムの構築を目指しています。",
      en: "In the future, we will collect more clinical data, improve model accuracy, and develop a real-time monitoring system that can be actually used in medical settings. We are also considering physiological state simulation of the fetus using digital twin technology, aiming to build a more comprehensive fetal health management system.",
    },
    content3: {
      ja: "本研究は、高齢出産と低出生率のシナジーの克服を促進し、SDGsの目標3（すべての人に健康と福祉を）、目標9（産業と技術革新の基盤をつくろう）、目標10（人や国の不平等をなくそう）に貢献することを目指しています。また、技術革新により、医療アクセスの向上にも貢献します。",
      en: "This research aims to promote overcoming the synergy of advanced maternal age and low birth rate, and to contribute to SDG Goal 3 (Good Health and Well-being), Goal 9 (Industry, Innovation and Infrastructure), and Goal 10 (Reduced Inequalities). Additionally, through technological innovation, it contributes to improving medical access.",
    },
  },
  backToProjects: {
    ja: "研究プロジェクト一覧に戻る",
    en: "Back to Research Projects",
  },
}

export default function FetalMonitoringPage() {
  // 言語コンテキストを使用
  const language = "ja"

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
              {translations.pageTitle[language]}
            </h1>
          </div>
        </div>
      </section>

      {/* メインコンテンツ */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* 解決する課題と価値・効果 */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-4">{translations.challengesAndValue.title[language]}</h2>
              <p className="text-gray-700">{translations.challengesAndValue.content1[language]}</p>
              <p className="text-gray-700 mt-4">{translations.challengesAndValue.content2[language]}</p>
            </div>

            {/* システムの概要 */}
            <div className="mb-16">
              <div
                className="relative aspect-auto mb-8 rounded-lg overflow-hidden"
                style={{ height: "auto", minHeight: "250px" }}
              >
                <Image
                  src={getImagePath("/images/research-tunn1.png")}
                  alt={translations.systemOverview.title[language]}
                  fill
                  className="object-contain"
                />
              </div>
              <h2 className="text-2xl font-bold mb-4">{translations.systemOverview.title[language]}</h2>
              <p className="text-gray-700">{translations.systemOverview.content1[language]}</p>
              <p className="text-gray-700 mt-4">{translations.systemOverview.content2[language]}</p>
              <p className="text-gray-700 mt-4">{translations.systemOverview.content3[language]}</p>
            </div>

            {/* 研究手法 */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-4">{translations.researchMethod.title[language]}</h2>
              <p className="text-gray-700">{translations.researchMethod.content1[language]}</p>
              <p className="text-gray-700 mt-4">{translations.researchMethod.content2[language]}</p>
              <ol className="list-decimal pl-5 space-y-2 mt-2 text-gray-700">
                {translations.researchMethod.steps[language].map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
            </div>

            {/* 研究成果と今後の展望 */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-4">{translations.resultsAndProspects.title[language]}</h2>
              <p className="text-gray-700">{translations.resultsAndProspects.content1[language]}</p>
              <p className="text-gray-700 mt-4">{translations.resultsAndProspects.content2[language]}</p>
              <p className="text-gray-700 mt-4">{translations.resultsAndProspects.content3[language]}</p>
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
