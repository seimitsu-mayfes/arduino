import Image from 'next/image';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';
import CodeBlock from '@/app/ui/codes/pwm-motor';

export default function MotorContent() {
  return (
    <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10">
      <h2 className="text-xl font-bold text-gray-800">モーター制御の基本</h2>
      
      <p className={`${lusitana.className} text-lg text-gray-600`}>
        モーターの制御には主にPWM（Pulse Width Modulation）を使用します。
      </p>
      
      <h3 className="text-lg font-semibold text-gray-800">PWMを使ったモーター制御</h3>
      <div className="border-2 border-gray-300 p-4 rounded-lg">
        <Link href="https://fabkura.gitbooks.io/arduino-docs/content/chapter6.html" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">
          Arduinoでのモーター制御の解説
        </Link>
      </div>
      
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-4">Arduino モーター制御コード</h3>
        <CodeBlock />
      </div>
      
      <h3 className="text-lg font-semibold text-gray-800 mt-6">スイッチ入力の基本</h3>
      <p className="text-gray-800">
        モーター制御と組み合わせて使用するスイッチ入力は非常に重要です。
        以下のリンク先にある『スイッチのデータを取得してみよう』を実行してみましょう。
      </p>
      <div className="border-2 border-gray-300 p-4 rounded-lg mt-2">
        <Link href="https://fabkura.gitbooks.io/arduino-docs/content/chapter6.html" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">
          スイッチ入力の解説とサンプルコード
        </Link>
      </div>

      <div className="mt-4">
        <Image src="/motor-circuit.png" width={300} height={200} alt="モーター回路の例" />
      </div>

    </div>
  );
}