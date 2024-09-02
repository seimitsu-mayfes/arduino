import Image from 'next/image';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';

export default function BoardFixationContent() {
  return (
    <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10">
      <h2 className="text-xl font-bold text-gray-800">基盤の固定と配線の整理</h2>
      
      <p className={`${lusitana.className} text-lg text-gray-600`}>
        ブレッドボードに接続していた配線はまとまりが悪く、抜けてしまう可能性があります。
      </p>
      
      <h3 className="text-lg font-semibold text-gray-800">はんだ付けによる固定</h3>
      <p className="text-gray-800">
        配線を基盤にはんだ付けして、コンパクトにまとめる必要があります。これにより、配線の抜けや接触不良を防ぐことができます。
      </p>
      
      <div className="mt-4">
        <Image src="/soldered-board.png" width={300} height={200} alt="基盤にはんだ付けされた配線" />
      </div>
      
      <h3 className="text-lg font-semibold text-gray-800 mt-6">はんだ付けのポイント</h3>
      <ul className="list-disc pl-5 text-gray-800">
        <li>配線は短くまとめ、基盤上で整理します。</li>
        <li>はんだ付けはしっかりと行い、接触不良を防ぎます。</li>
        <li>必要に応じて、熱収縮チューブや絶縁テープを使用して安全性を高めます。</li>
      </ul>

      <h3 className="text-lg font-semibold text-gray-800 mt-6">参考リンク</h3>
      <div className="border-2 border-gray-300 p-4 rounded-lg">
        <Link href="https://example.com/soldering-tips" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">
          はんだ付けのコツと注意点
        </Link>
      </div>
    </div>
  );
}