import Image from 'next/image';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';
import CodeBlock from '@/app/ui/codes/get-switch-data';

export default function SwitchDataContent() {
  return (
    <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10">
      <h2 className="text-xl font-bold text-gray-800">スイッチデータ取得の基本</h2>
      
      <p className={`${lusitana.className} text-lg text-gray-600`}>
        スイッチ入力は以下のように接続し、データを取得します。
      </p>
      
      <h3 className="text-lg font-semibold text-gray-800">スイッチのデータを取得してみよう</h3>
      <div className="border-2 border-gray-300 p-4 rounded-lg">
        <Link href="https://fabkura.gitbooks.io/arduino-docs/content/chapter6.html" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">
          スイッチのデータ取得のサンプルコード
        </Link>
      </div>
      
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-4">Arduino スイッチデータ取得コード</h3>
        <CodeBlock />
      </div>
      
      <p className="text-gray-800 mt-4">
        このプログラムにより、スイッチの状態をArduinoで読み取ることができます。入力の基本なので、ぜひ実行してみてください。
      </p>

      <div className="mt-4">
        <Image src="/switch-circuit.png" width={300} height={200} alt="スイッチ回路の例" />
      </div>
    </div>
  );
}