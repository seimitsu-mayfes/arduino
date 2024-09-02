import Image from 'next/image';
import Link from 'next/link';

export default function PriorKnowledgeContent() {
  return (
    <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10">
      
      <p className="text-gray-800 ">
        <span className="bg-yellow-100 px-2 py-1 rounded">質問:</span> <i>使い方がわからない</i>
        <br />
        まず何から始めたらいいのかわからない。
      </p>
      <p className="text-gray-800 pl-10">
        <span className="bg-green-100 px-2 py-1 rounded">解答:</span> <i>セットアップを見てください</i>
        <br />
        セットアップの項目に詳しい使い方が書いてあります。
      </p>
      <p className="text-gray-800 ">
        <span className="bg-blue-100 px-2 py-1 rounded">補足:</span> <i>arduinoは無料です</i>
        <br />
        インストールの際に寄付が求められるかもしれませんがarduinoは無料です。
      </p>
      <p className="text-gray-800 ">
        <span className="bg-red-100 px-2 py-1 rounded">注意:</span> <i>ボール盤は使用不可</i>
        <br />
        演習室にあるボール盤(ドリルみたいなの)は講習を受けるまで使用してはいけません。
      </p>
      <h2 className="text-lg font-bold text-gray-800 mt-6">その他の注意事項</h2>
      <p className="text-gray-800">
        電子工作を行う際は、安全に十分注意してください。不明な点がある場合は、必ず指導者に確認してください。
      </p>

      <div className="border-2 border-gray-300 p-4 rounded-lg mt-4">
        <Link href="https://www.arduino.cc/en/Guide" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">
          Arduino公式ガイド
        </Link>
      </div>
    </div>
  );
}