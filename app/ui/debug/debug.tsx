import Image from 'next/image';
import Link from 'next/link';

export default function PriorKnowledgeContent() {
  return (
    <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10">
      
      <h2 className="text-xl font-bold text-gray-800 border-b-2 border-gray-300 pb-2">デバッグの方法</h2>

      <div>
        <h3 className="text-lg font-semibold text-gray-800 bg-blue-100 p-2 rounded">手法1: コンソールログを確認しよう</h3>
        <p className="text-gray-800 mt-2 pl-4">
          Serial.beginでどこまではうまくいっているか確認しよう。
        </p>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-semibold text-gray-800 bg-blue-100 p-2 rounded">手法2: 通電をチェックしよう</h3>
        <p className="text-gray-800 mt-2 pl-4">
          マルチメーターを使おう
        </p>
        <div className="border-2 border-gray-300 p-4 rounded-lg mt-2 ml-4">
          <Link href="https://miraiworks.org/?p=341" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">
            おすすめサイト：マルチメーターの使い方
          </Link>
        </div>
        <p className="text-gray-800 mt-4 pl-4">
          「電流値を調べたい時」と「導通を確認したい時」は直列に使います。
          導通を確認したい場合は回路はそのままの状態で確認したい場所の両端をテスターで触ります。
          音が鳴ったら導通している。
        </p>
        <p className="text-gray-800 mt-2 pl-4">
          <span className="bg-blue-100 px-2 py-1 rounded">補足:</span> 予備知識にマルチメーターの項目があります。
        </p>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-semibold text-gray-800 bg-blue-100 p-2 rounded">手法3: 抵抗の大きさを確認しよう</h3>
        <p className="text-gray-800 mt-2 pl-4">
          LEDやトランジスタには適切な電流があります。それらの品番を調べて適当な抵抗を選びましょう。
        </p>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-semibold text-gray-800 bg-red-100 p-2 rounded">よくある問題: LEDが点灯しない場合</h3>
        <div className="border-2 border-gray-300 p-4 rounded-lg mt-2 ml-4">
          <Link href="https://www.ele-lab.com/led15.php" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">
            LEDが点灯しない場合の原因はこちら
          </Link>
        </div>
      </div>

      <div className="mt-4">
        <Image src="/debug-image.png" width={300} height={200} alt="デバッグの様子" />
      </div>
    </div>
  );
}