import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { getImagePath } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"

export default function GovernmentProjectPage() {
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
              牛舎内で5Gを活用した作業効率化支援実証試験
            </h1>
          </div>
        </div>
      </section>

      {/* メインコンテンツ */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="relative h-80 mb-8 rounded-lg overflow-hidden">
              <Image src={getImagePath("/images/goverment-project.png")} alt="本試験の構成図" fill className="object-contain" />
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">プロジェクト概要</h2>
                <p className="text-gray-700">
                  株式会社国際電気通信基礎技術研究所 (ATR)、KDDI
                  株式会社、国立大学法人宮崎大学、北海道河東郡上士幌町、とかち村上牧場は、2019年11月16日から11月25日の間、酪農・畜産業における従業員の作業効率化を目的に、第5世代移動通信システム「5G」で伝送した牛舎内の乳牛の4K映像を用いた、耳標の読み取りによる乳牛の居場所の把握と遠隔からの乳牛の見守りを行う実証試験を実施しました。
                </p>
                <p className="text-gray-700 mt-2">
                  なお、本試験は総務省の令和元年度 5G 総合実証試験の一環として実施しました。
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">背景と目的</h2>
                <p className="text-gray-700">
                  北海道内では、乳牛の飼養戸数が減少傾向にあるなか、一戸あたりの飼養頭数は年々増加傾向にあり、搾乳や給餌などの労働負荷を軽減することができ、大規模経営に適したフリーストール牛舎の導入が進んでいます。一方で、フリーストール牛舎では、牛が牛舎内を自由に歩き回れるため、個体管理が難しいという課題があります。牧場主や従業員が日々獣医検診や健康管理などを行うために、数百頭もの中から対象の牛を特定する必要があり、さらなる作業効率化が求められています。
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">実証試験の内容</h2>
                <p className="text-gray-700">
                  本試験では、とかち村上牧場のフリーストール牛舎内で、給餌中に連動スタンチョン（牛のつなぎ止め具）により固定された乳牛の4K映像を5Gでリアルタイムに伝送し、その映像から、飼育される全ての牛に装着が義務付けられている個体識別番号を印字した耳標を読み取ることによって、乳牛の居場所を特定する実証を行いました。これにより、獣医検診などの対象となる乳牛の居場所を人手や時間をかけずに把握できることを確認しました。さらに、4K映像を通じて飼育している乳牛の状態を牛舎外の事務所から確認・見守りできることを確認しました。
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">役割分担</h2>
                <Card>
                  <CardContent className="p-6">
                    <ul className="space-y-2">
                      <li>
                        <span className="font-medium">ATR：</span>本試験の実施、推進
                      </li>
                      <li>
                        <span className="font-medium">KDDI：</span>本試験の実施、および5Gエリアの設計・構築
                      </li>
                      <li>
                        <span className="font-medium">宮崎大学：</span>耳標読み取りの実装・評価
                      </li>
                      <li>
                        <span className="font-medium">上士幌町：</span>本試験の実施アイディア提案
                      </li>
                      <li>
                        <span className="font-medium">とかち村上牧場：</span>実施場所の提供
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">研究成果と今後の展望</h2>
                <p className="text-gray-700">
                  本実証試験により、5G技術を活用した高精細映像の伝送と画像処理技術を組み合わせることで、牛舎内の乳牛の効率的な個体管理が可能であることが示されました。特に、耳標の自動読み取りシステムは、従来の目視による確認作業と比較して大幅な時間短縮を実現し、酪農家の労働負担軽減に貢献することが期待されます。
                </p>
                <p className="text-gray-700 mt-4">
                  今後は、本技術をさらに発展させ、耳標の読み取りだけでなく、牛の行動パターンや健康状態の自動判定など、より高度な個体管理システムの構築を目指しています。また、5G技術の特性を活かした大容量データの伝送により、複数のカメラからの映像を同時に処理することで、牛舎全体をカバーする監視システムの実現も視野に入れています。
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">参考情報</h2>
                <Card>
                  <CardContent className="p-6">
                    <ul className="space-y-2">
                      <li>
                        <Link
                          href="http://www.tele.soumu.go.jp/j/sys/fees/purpose/tectest/"
                          target="_blank"
                          className="text-primary hover:underline"
                        >
                          総務省の5G総合実証試験について
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="http://www.pref.hokkaido.lg.jp/ns/tss/00chikusan/R111_hokkaido_rakuchiku_meguru1.pdf"
                          target="_blank"
                          className="text-primary hover:underline"
                        >
                          北海道の酪農・畜産をめぐる情勢
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="http://www.maff.go.jp/kyusyu/syohianzen/nouchiku/attach/pdf/ushitore-4.pdf"
                          target="_blank"
                          className="text-primary hover:underline"
                        >
                          牛トレーサビリティ法について
                        </Link>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
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
