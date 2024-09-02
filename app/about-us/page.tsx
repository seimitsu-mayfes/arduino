import { lusitana } from '../ui/fonts';
import Image from 'next/image';
import Link from 'next/link';

export default function GitHubDiscussionGuide() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex h-20 items-center rounded-lg bg-gray-800 p-4 mb-4">
        <h1 className="text-2xl font-bold text-white">GitHub Discussionsでの連絡方法</h1>
      </div>
      <div className="flex grow flex-col gap-4">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10">
          <p className={`${lusitana.className} text-lg text-gray-800`}>
            GitHub Discussionsを使用して連絡を取り合う予定です。ただし、具体的な使用方法についてはまだ確定していません。
          </p>
          <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-4">
            <p className="font-bold">注意:</p>
            <p>現在、GitHub Discussionsの具体的な使用方法について準備中です。しばらくお待ちください。</p>
          </div>
          <h2 className="text-lg font-bold text-gray-800">GitHub Discussionsとは</h2>
          <p className="text-gray-800">
            GitHub Discussionsは、プロジェクトに関する会話やQ&Aを行うためのスペースです。以下のような特徴があります：
          </p>
          <ul className="list-disc pl-5 text-gray-800">
            <li>トピックごとに整理された会話</li>
            <li>チーム全体での情報共有が容易</li>
            <li>過去の議論の検索が可能</li>
          </ul>
          <Image
            src="/github-discussions-placeholder.png"
            width={400}
            height={300}
            className="max-w-full h-auto rounded-lg shadow-md"
            alt="GitHub Discussions画面のプレースホルダー"
          />
          <h2 className="text-lg font-bold text-gray-800">今後の予定</h2>
          <p className="text-gray-800">
            GitHub Discussionsの具体的な使用方法が決まり次第、以下の情報を提供する予定です：
          </p>
          <ul className="list-disc pl-5 text-gray-800">
            <li>アクセス方法</li>
            <li>新しいディスカッションの作成方法</li>
            <li>既存のディスカッションへの参加方法</li>
            <li>効果的な使用のためのガイドライン</li>
          </ul>
          <p className="text-gray-800 mt-4">
            詳細が決まり次第、このページを更新いたします。それまでしばらくお待ちください。
          </p>
          <Link
            href="https://docs.github.com/en/discussions"
            className="text-blue-500 underline mt-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Discussionsの公式ドキュメント（参考）
          </Link>
        </div>
      </div>
    </div>
  );
}