import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { getImagePath } from "@/lib/utils"

// SDGsアイコンのマッピング
const sdgsIcons: { [key: number]: { name: string; path: string } } = {
  2: { name: "飢餓をゼロに", path: "/images/sdgs/sdg_icon_02_ja.png" },
  9: { name: "産業と技術革新の基盤をつくろう", path: "/images/sdgs/sdg_icon_09_ja.png" },
  12: { name: "つくる責任 つかう責任", path: "/images/sdgs/sdg_icon_12_ja.png" },
  17: { name: "パートナーシップで目標を達成しよう", path: "/images/sdgs/sdg_icon_17_ja.png" },
  4: { name: "質の高い教育をみんなに", path: "/images/sdgs/sdg_icon_04_ja.png" },
}

// このプロジェクトに関連するSDGs
const relatedSDGs = [2, 4, 9, 12, 17]

export default function Local5GProjectPage() {
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
        <div className="absolute inset-0 bg-black/50"></div>
        
        {/* コンテンツ */}
        <div className="container relative z-10">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tighter text-white drop-shadow-lg">
              ローカル5Gを用いたスマート農業実証プロジェクト
            </h1>
          </div>
        </div>
      </section>

      {/* メインコンテンツ */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">プロジェクト概要</h2>
                <p className="text-gray-700 pb-4 border-b border-gray-200">
                  株式会社NTTデータ経営研究所、株式会社NTTドコモ北海道支社、ホクレン農業協同組合連合会、国立大学法人宮崎大学、北海道イシダ株式会社、きたみらい農業協同組合、訓子府町の7者は、産学官連携によるローカル5Gを用いたスマート農業の実現に向けた実証実験を2021年10月25日より開始しました。
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">実証実験の目的</h2>
                <p className="text-gray-700 pb-4 border-b border-gray-200">
                  本実証実験は、訓子府町内のホクレン訓子府実証農場をフィールドとして、ローカル5G基地局を設置し、乳牛の個体識別、位置検索、健康状態の把握を目指します。これにより、酪農従事者の稼働削減や健康異常の早期発見を通じて生産性の向上を図ります。
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">実証実験期間と場所</h2>
                <div>
                  <div className="p-6 bg-white border border-gray-200">
                    <ul className="space-y-2">
                      <li>
                        <span className="font-medium">実証実験期間：</span>2021年10月25日（月）～2023年3月31日
                      </li>
                      <li>
                        <span className="font-medium">実証実験場所：</span>
                        ホクレン訓子府実証農場（北海道常呂郡訓子府町駒里184-7）
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">SDGsへの貢献</h2>
                <p className="text-gray-700 pb-4 border-b border-gray-200">
                  本実証実験は、「誰一人取り残さない」というSDGsの基本理念に基づき、以下の持続可能な開発目標に関連する取り組みを行います。
                </p>
                <div className="flex flex-row flex-wrap justify-around gap-4 mt-6">
                  {relatedSDGs.map((sdgNumber) => (
                    <div key={sdgNumber} className="flex flex-col items-center flex-shrink-0 w-28 mb-4">
                      <div className="relative w-24 h-24 mb-3">
                        <Image
                          src={sdgsIcons[sdgNumber].path || "/placeholder.svg"}
                          alt={`SDG ${sdgNumber}: ${sdgsIcons[sdgNumber].name}`}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <p className="text-sm text-center h-10 flex items-center justify-center">{sdgsIcons[sdgNumber].name}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">研究成果</h2>
                <p className="text-gray-700 pb-4 border-b border-gray-200">
                  本プロジェクトでは、ローカル5Gの高速・大容量通信を活用し、牛舎内に設置した複数のカメラから取得した映像データをリアルタイムで分析することで、以下の成果を上げています：
                </p>
                <ul className="list-disc pl-5 space-y-2 mt-4 text-gray-700">
                  <li>AIによる牛の個体識別の精度向上（識別精度95%以上を達成）</li>
                  <li>牛の行動パターン分析による健康状態の可視化</li>
                  <li>発情・分娩兆候の早期検知システムの構築</li>
                  <li>酪農従事者の作業負担軽減と生産性向上の実証</li>
                </ul>
              </div>

              <div className="flex justify-center mt-8">
                <Link href="/research/collaborations">
                  <Button variant="outline">共同研究一覧に戻る</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
