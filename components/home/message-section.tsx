import Image from "next/image"

export default function MessageSection() {
  return (
    <div className="grid md:grid-cols-3 gap-8 items-center">
      <div className="md:col-span-1">
        <div className="relative w-full aspect-square max-w-xs mx-auto">
          <Image src="/images/professor.png" alt="ThiThiZin教授" fill className="object-cover rounded-lg" />
        </div>
      </div>

      <div className="md:col-span-2">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">視る力が、未来を変える。</h2>

        <div className="space-y-4 text-gray-700">
          <p>
            私たちの研究室では、画像処理やコンピュータビジョンをはじめとする先端的な技術を活用し、社会に新しい価値を生み出す研究を行っています。画像は人間にとっても重要な情報源の一つであり、その画像を解析や理解は、医療、農業、防災、エンターテインメントなど、あらゆる分野でイノベーションの鍵を握っています。
          </p>

          <p>
            当研究室では、画像から得られる膨大な情報を効率的に処理し、認識・推定・解析を行うアルゴリズムの研究開発を行うと同時に、社会実装に向けた応用研究にも力を入れています。学生の皆さんには、理論的な基礎を身につけるだけでなく、実際のデータやシステムを扱う実践的なスキルを習得し、将来の新たな可能性を切り拓いていただきたいと考えています。
          </p>

          <p>
            今後も、画像処理とAI技術の融合による新たな研究テーマを模索し、医療現場の早期診断支援や、農業・高齢者支援など、多岐にわたる社会的ニーズに応える技術革新を目指します。革新的な研究成果を社会実装へとつなげ、持続可能な未来の実現に貢献していきます。
          </p>
        </div>

        <div className="mt-6 flex justify-end">
          <div className="text-right">
            <p className="font-medium">情報処理システム研究室代表 教授</p>
            <p className="text-2xl font-bold mt-1">Thi Thi Zin</p>
          </div>
        </div>
      </div>
    </div>
  )
}
