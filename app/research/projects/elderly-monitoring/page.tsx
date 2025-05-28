

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { getImagePath } from "@/lib/utils"

// 翻訳データを定義
const translations = {
  pageTitle: {
    ja: "プライバシーを保護した高齢者見守りと健康支援システム",
    en: "Privacy-Preserving Elderly Monitoring and Health Support System",
  },
  pageSubtitle: {
    ja: "人生100年時代を支えるDX福祉ケア",
    en: "Digital Transformation Welfare Care Supporting the 100-Year Life Era",
  },
  background: {
    title: {
      ja: "研究背景・目的",
      en: "Research Background & Purpose",
    },
    content1: {
      ja: "日本の高齢化問題と介護職員不足は深刻化しています。2023年時点で介護職員数が厚生労働省の定める必要数より不足しており、2040年までに65万人の介護職員増員が必要とされていますが、現状の推び値では達成が困難と予測されています。また、介護サービスの質の低下や利用者の待ち時間増加、介護職員の負担増加も問題となっており、特に身体的負担が51.5%と最も多く報告されています。",
      en: "Japan's aging population and shortage of care workers are becoming increasingly serious. As of 2023, the number of care workers is less than the required number set by the Ministry of Health, Labour and Welfare, and an additional 650,000 care workers are needed by 2040, but current projections suggest this will be difficult to achieve. Additionally, the decline in the quality of care services, increased waiting times for users, and increased burden on care workers are also problems, with physical burden being the most frequently reported at 51.5%.",
    },
    content2: {
      ja: "本研究では、画像処理技術とAIを活用した効率的な高齢者見守りシステムの開発により、24時間人手に頼らず高齢者の見守りを可能にし、プライバシーを保護しながら健康状態の変化や異常を早期に検知することを目的としています。",
      en: "This research aims to develop an efficient elderly monitoring system using image processing technology and AI, enabling 24-hour monitoring of the elderly without relying on human labor, and early detection of changes in health status and abnormalities while protecting privacy.",
    },
  },
  systemOverview: {
    title: {
      ja: "システムの概要",
      en: "System Overview",
    },
    content1: {
      ja: "本研究の取り組みと目指す未来を示しています。現状の課題（介護職員の負担増加、待機高齢者増加、介護サービス質の低下、高齢者虐待）に対して、本研究では以下の4つの要素からなる見守りシステムを提案しています：",
      en: "This shows the approach of this research and the future we aim for. In response to current challenges (increased burden on care workers, increased number of waiting elderly, decreased quality of care services, elder abuse), this research proposes a monitoring system consisting of the following four elements:",
    },
    elements: {
      ja: [
        "通知：遠隔確認可能な行動履歴/待機システム",
        "撮影：深度カメラによるプライバシーを保護した撮影",
        "推定：蓄積データからの患者の待機を促進",
        "特徴抽出：画像から特徴を抽出",
      ],
      en: [
        "Notification: Behavior history/waiting system that can be remotely confirmed",
        "Imaging: Privacy-protected imaging using depth cameras",
        "Estimation: Promoting patient waiting from accumulated data",
        "Feature Extraction: Extracting features from images",
      ],
    },
    content2: {
      ja: "これにより、負担軽減と業務効率化、健康問題の早期発見、プライバシーの守られた生活、緊急事態への対応といった未来を目指しています。",
      en: "Through this, we aim for a future with reduced burden and improved operational efficiency, early detection of health problems, privacy-protected living, and response to emergencies.",
    },
  },
  advancedTechnology: {
    title: {
      ja: "先端技術の活用",
      en: "Utilization of Advanced Technology",
    },
    content: {
      ja: "本研究では、以下の先端技術を活用して高齢者見守りシステムを実現しています：",
      en: "In this research, we are implementing an elderly monitoring system using the following advanced technologies:",
    },
    technologies: {
      ja: [
        "画像処理技術とAI：効率的な見守りシステムの構築に活用し、24時間人手に頼らずプライバシーを保護",
        "深度カメラ：RGB画像ではなく深度情報を用いることで、プライバシーを保護しながら行動パターンを分析",
        "行動認識アルゴリズム：転倒や異常行動などの緊急事態を自動検知",
        "データ分析：蓄積された行動データから健康状態の変化や異常を早期に検知",
      ],
      en: [
        "Image Processing Technology and AI: Used to build an efficient monitoring system, protecting privacy without relying on human labor 24 hours a day",
        "Depth Camera: Analyzing behavior patterns while protecting privacy by using depth information instead of RGB images",
        "Behavior Recognition Algorithm: Automatically detecting emergencies such as falls and abnormal behavior",
        "Data Analysis: Early detection of changes in health status and abnormalities from accumulated behavior data",
      ],
    },
  },
  effects: {
    title: {
      ja: "見守りシステムの効果",
      en: "Effects of the Monitoring System",
    },
    content: {
      ja: "本研究で開発している見守りシステムは、病院や高齢者施設、在宅医療・介護の質向上に貢献します。具体的には以下の効果が期待されます：",
      en: "The monitoring system being developed in this research contributes to improving the quality of hospitals, elderly facilities, and home medical care and nursing care. Specifically, the following effects are expected:",
    },
    expectedEffects: {
      ja: [
        "介護職員の身体的・精神的負担の軽減",
        "24時間の安全な見守りによる事故防止",
        "異常行動の早期検知による迅速な対応",
        "プライバシーを保護した尊厳ある介護の実現",
        "データに基づく個別化された介護計画の策定",
        "介護職員の業務効率化による人手不足問題の緩和",
      ],
      en: [
        "Reduction of physical and mental burden on care workers",
        "Accident prevention through 24-hour safe monitoring",
        "Prompt response through early detection of abnormal behavior",
        "Realization of dignified care with privacy protection",
        "Development of individualized care plans based on data",
        "Mitigation of labor shortage problems through improved operational efficiency of care workers",
      ],
    },
  },
  socialSignificance: {
    title: {
      ja: "社会的意義と今後の展望",
      en: "Social Significance and Future Prospects",
    },
    content1: {
      ja: "本研究は、持続可能な福祉ケアの実現と、地域社会全体の健康水準の向上に貢献し、「人生100年時代」に向けた社会全体での予防・健康づくりの取り組みを支援します。SDGsの目標3（すべての人に健康と福祉を）、目標8（働きがいも経済成長も）、目標9（産業と技術革新の基盤をつくろう）、目標11（住み続けられるまちづくりを）に貢献することを目指しています。",
      en: "This research contributes to the realization of sustainable welfare care and the improvement of health standards throughout the community, supporting society-wide prevention and health promotion efforts toward the '100-year life era.' It aims to contribute to SDG Goal 3 (Good Health and Well-being), Goal 8 (Decent Work and Economic Growth), Goal 9 (Industry, Innovation and Infrastructure), and Goal 11 (Sustainable Cities and Communities).",
    },
    content2: {
      ja: "今後の展望としては、より多様な環境での実証実験を行い、システムの精度と信頼性の向上を図るとともに、介護施設や在宅介護の現場での実用化を進めていきます。また、他の健康モニタリングシステムとの連携や、AIによる予測機能の強化なども検討しています。",
      en: "As for future prospects, we will conduct demonstration experiments in more diverse environments, improve the accuracy and reliability of the system, and promote practical application in care facilities and home care settings. We are also considering collaboration with other health monitoring systems and enhancement of prediction functions using AI.",
    },
  },
  backToProjects: {
    ja: "研究プロジェクト一覧に戻る",
    en: "Back to Research Projects",
  },
}

export default function ElderlyMonitoringPage() {
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
            {/* プロジェクト概要 */}
            <div className="mb-16">
              <div
                className="relative aspect-auto mb-8 rounded-lg overflow-hidden"
                style={{ height: "auto", minHeight: "300px" }}
              >
                <Image
                  src={getImagePath("/images/research-remon1.png")}
                  alt={translations.systemOverview.title[language]}
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* 研究背景・目的 */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-4">{translations.background.title[language]}</h2>
              <p className="text-gray-700">{translations.background.content1[language]}</p>
              <p className="text-gray-700 mt-4">{translations.background.content2[language]}</p>
            </div>

            {/* システムの概要 */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-4">{translations.systemOverview.title[language]}</h2>
              <p className="text-gray-700">{translations.systemOverview.content1[language]}</p>
              <ol className="list-decimal pl-5 space-y-2 mt-2 text-gray-700">
                {translations.systemOverview.elements[language].map((element, index) => (
                  <li key={index}>{element}</li>
                ))}
              </ol>
              <p className="text-gray-700 mt-4">{translations.systemOverview.content2[language]}</p>
            </div>

            {/* 先端技術の活用 */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-4">{translations.advancedTechnology.title[language]}</h2>
              <p className="text-gray-700">{translations.advancedTechnology.content[language]}</p>
              <ul className="list-disc pl-5 space-y-2 mt-2 text-gray-700">
                {translations.advancedTechnology.technologies[language].map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </div>

            {/* 見守りシステムの効果 */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-4">{translations.effects.title[language]}</h2>
              <p className="text-gray-700">{translations.effects.content[language]}</p>
              <ul className="list-disc pl-5 space-y-2 mt-2 text-gray-700">
                {translations.effects.expectedEffects[language].map((effect, index) => (
                  <li key={index}>{effect}</li>
                ))}
              </ul>
            </div>

            {/* 社会的意義と今後の展望 */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-4">{translations.socialSignificance.title[language]}</h2>
              <p className="text-gray-700">{translations.socialSignificance.content1[language]}</p>
              <p className="text-gray-700 mt-4">{translations.socialSignificance.content2[language]}</p>
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
