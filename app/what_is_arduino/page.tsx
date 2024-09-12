import { lusitana } from '../ui/fonts';
import Image from 'next/image';
import Link from 'next/link';

export default function WhatIsArduino() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex h-20 items-center rounded-lg bg-gray-800 p-4 mb-4">
        <h1 className="text-2xl font-bold text-white">Arduinoとは</h1>
      </div>
      <div className="flex grow flex-col gap-4">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10">
          <p className={`${lusitana.className} text-lg text-gray-800`}>
            Arduinoは、電子工作やプロトタイピングに広く使用されているオープンソースのマイコンボードです。以下にArduinoの主な特徴と概要をまとめます。
          </p>
          <h2 className="text-lg font-bold text-gray-800">Arduinoの基本概念</h2>
          <ul className="list-disc pl-5 text-gray-800">
            <li>Arduinoは、ハードウェアとソフトウェアの両方を含むシステムです。</li>
            <li>ハードウェア: マイコンと入出力ポートを搭載した基板（Arduinoボード）</li>
            <li>ソフトウェア: プログラミングに使用する統合開発環境（Arduino IDE）</li>
          </ul>
          <h2 className="text-lg font-bold text-gray-800">主な特徴</h2>
          <ul className="list-disc pl-5 text-gray-800">
            <li>簡単な操作性: 電子工作初心者でも扱いやすい設計、C++に似た簡単な言語でプログラミング可能</li>
            <li>多様な機能: LEDの点灯、モーターの制御、センサーの読み取りなど、様々な電子工作が可能</li>
            <li>柔軟性と拡張性: 複数のモデルがあり、用途に応じて選択可能、シールドと呼ばれる拡張基板で機能を追加できる</li>
            <li>オープンソース: ハードウェアとソフトウェアの両方がオープンソース</li>
          </ul>
          <h2 className="text-lg font-bold text-gray-800">歴史と開発</h2>
          <p className="text-gray-800">
            2005年にイタリアで開発プロジェクトが始動。「もっとシンプルに、もっと安価に、技術者でない学生でもデジタルなものを作ることができるようにする」という目的で、短期間で世界中に普及しました。
          </p>
          <p className="text-gray-800">
            Arduinoは、その使いやすさと柔軟性から、エンジニアだけでなくアーティストや学生など、幅広いユーザーに支持されています。電子工作やIoTプロジェクトの入門として最適なプラットフォームとして広く認知されています。
          </p>
        </div>
        <div className="flex items-center justify-center p-6">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/2/2e/Noname_clone_of_Arduino_Uno_-_top.jpg"
            width={800}
            height={600}
            className="max-w-full h-auto"
            alt="Arduino image"
          />
        </div>
        <Link
          href="/others-site"
          className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
        >
          <span>More Info</span>
        </Link>
      </div>
    </div>
  );
}