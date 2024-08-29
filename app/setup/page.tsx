// app/setup/page.tsx
import { lusitana } from '../ui/fonts'; // フォントのインポート
import Image from 'next/image'; // Next.js の Image コンポーネントをインポート
import Link from 'next/link'; // Next.js の Link コンポーネントをインポート

export default function WhatIsArduino() {
  return (
    <div className="flex flex-col min-h-screen p-6">
      <div className="flex h-20 items-center rounded-lg bg-gray-800 p-4">
        <h1 className="text-2xl font-bold text-white">始める前のsetupです</h1>
      </div>
      <div className="mt-4 flex grow flex-col gap-4">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10">
          <p className={`${lusitana.className} text-xl text-gray-800 md:text-2xl md:leading-normal`}>
            <strong>Arduinoをインストールしないと！</strong>
          </p>
        </div>
        <div className="flex items-center justify-center p-6">
          <Image
            src="/arduino-image.png" // 必要に応じて画像ファイルのパスを設定
            width={800}
            height={600}
            className="block"
            alt="Arduino image"
          />
        </div>
        <Link
          href="/more-info"
          className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
        >
          <span>More Info</span>
        </Link>
      </div>
    </div>
  );
}