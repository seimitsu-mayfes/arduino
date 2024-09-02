import Image from 'next/image';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';
import CodeBlock from '@/app/ui/codes/rotate-door';

export default function UltrasonicSensorContent() {
  return (
    <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10">
      <h2 className="text-xl font-bold text-gray-800">超音波センサの基本</h2>
      
      <p className={`${lusitana.className} text-lg text-gray-600`}>
        超音波センサは送信部と受信部がセットになっており、超音波を受信するのにかかった時間を出力します。
      </p>
      
      <h3 className="text-lg font-semibold text-gray-800">超音波センサの仕組み</h3>
      <p className="text-gray-800">
        間に障害物があると、超音波がそれを避けて届くので、かかる時間が長くなります。
      </p>
      
      <div className="border-2 border-gray-300 p-4 rounded-lg">
        <Link href="https://deviceplus.jp/arduino/entry016/" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">
          おすすめサイト：超音波センサの使い方
        </Link>
      </div>

      <h3 className="text-lg font-semibold text-gray-800 mt-6">用途例：回転扉</h3>
      <p className="text-gray-800">
        道に超音波センサを設置してボールが通過したら、モーターを回して何かギミックを動かします。
      </p>

      <h3 className="text-lg font-semibold text-gray-800 mt-6">センサの延長方法</h3>
      <ol className="list-decimal pl-5 text-gray-800">
        <li>市販の超音波センサの「送信部」または「受信部」を取り外します。</li>
        <li>適当な長さの導線を、接合部と取り外した方の超音波にはんだ付けします。</li>
      </ol>
      <div className="mt-4">
        <Image src="/extended-sensor.png" width={300} height={200} alt="延長した超音波センサ" />
      </div>

      <h3 className="text-lg font-semibold text-gray-800 mt-6">Arduinoとセンサのつなぎかたとコードサンプル</h3>
      <div className="border-2 border-gray-300 p-4 rounded-lg">
        <Link href="https://deviceplus.jp/arduino/entry016/" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">
          超音波センサのArduinoへの接続方法とコードサンプル
        </Link>
      </div>

      <h3 className="text-lg font-semibold text-gray-800 mt-6">回転扉のサンプルコード</h3>
      <p className="text-gray-800">
        以下は回転扉のサンプルコードです。超音波センサの出力が特定の値以下なら回転するというギミックです。
      </p>
      <div className="mt-6">
        <CodeBlock />
      </div>
    </div>
  );
}