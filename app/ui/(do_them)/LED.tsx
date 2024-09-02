import Image from 'next/image';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';
import CodeBlock from '@/app/ui/codes/LED-blink';

export default function LEDContent() {
  return (
    <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10">
      <h2 className="text-xl font-bold text-gray-800">LED制御の基本</h2>
      
      <p className={`${lusitana.className} text-lg text-gray-600`}>
        LEDは以下のように接続します。
      </p>
      
      <h3 className="text-lg font-semibold text-gray-800">LED一つを点滅させる</h3>
      <div className="border-2 border-gray-300 p-4 rounded-lg">
        <Link href="https://n.mtng.org/ele/arduino/samples/sample11.html" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">
          LED点滅のサンプルコード
        </Link>
      </div>
      
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-4">Arduino LED点滅コード</h3>
        <CodeBlock />
      </div>
      
      <p className="text-gray-800 mt-4">
        このプログラムに以下の関数リファレンスから適当な関数を組み合わせて工夫すると楽しいです。
      </p>
      <div className="border-2 border-gray-300 p-4 rounded-lg mt-2">
        <Link href="http://www.musashinodenpa.com/arduino/ref/arduinoHH11.pdf" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">
          Arduino関数リファレンス
        </Link>
      </div>

      <h3 className="text-lg font-semibold text-gray-800 mt-6">複数LEDの制御</h3>
      <p className="text-gray-800">
        複数LEDを一つのArduinoで動かす時には注意が必要です。
        具体的にはArduinoの最大電流値を超えないようにするなどの配慮が必要です。
      </p>
      
      <h4 className="text-md font-semibold text-gray-800 mt-4">トランジスタを用いた制御</h4>
      <div className="border-2 border-gray-300 p-4 rounded-lg mt-2">
        <Link href="https://kitsuneblg.com/2021/08/29/arduino%E3%82%92%E4%BD%BF%E3%81%A3%E3%81%A6%E8%A4%87%E6%95%B0%E3%81%AEled%E3%82%92%E5%88%B6%E5%BE%A1%E3%81%99%E3%82%8B/" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">
          トランジスタを使った複数LED制御
        </Link>
      </div>
      
      <h4 className="text-md font-semibold text-gray-800 mt-4">シフトレジスタを用いた制御</h4>
      <div className="border-2 border-gray-300 p-4 rounded-lg mt-2">
        <Link href="https://vigne-cla.com/7-30/" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">
          シフトレジスタを使った複数LED制御
        </Link>
      </div>

      <div className="mt-4">
        <Image src="/led-circuit.png" width={300} height={200} alt="LED回路の例" />
      </div>
    </div>
  );
}