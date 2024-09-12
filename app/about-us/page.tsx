import { lusitana } from '../ui/fonts';
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
            GitHub Discussionsを使用して連絡を取り合います。以下の情報をご確認ください。
          </p>
          <h2 className="text-lg font-bold text-gray-800">GitHub Discussionsへのアクセス</h2>
          <p className="text-gray-800">
            以下のリンクからGitHub Discussionsにアクセスできます：
          </p>
          <Link
            href="https://github.com/rrrttt-rt/aruduino/discussions/2"
            className="text-blue-500 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Arduino入門 GitHub Discussions
          </Link>
          <h2 className="text-lg font-bold text-gray-800">使用方法</h2>
          <ul className="list-disc pl-5 text-gray-800">
            <li>新しいディスカッションを開始する場合は、「New discussion」ボタンをクリックしてください。</li>
            <li>既存のディスカッションに参加する場合は、該当するスレッドをクリックし、コメントを追加してください。</li>
            <li>質問、アイデア、お知らせなど、様々な目的でDiscussionsを使用できます。</li>
          </ul>
          <h2 className="text-lg font-bold text-gray-800">ガイドライン</h2>
          <ul className="list-disc pl-5 text-gray-800">
            <li>投稿する前に、既存のディスカッションをチェックし、重複を避けてください。</li>
            <li>明確で簡潔なタイトルを使用し、内容を適切に要約してください。</li>
            <li>礼儀正しく、建設的な態度を保ってください。</li>
            <li>コードや長文を投稿する場合は、適切なフォーマットを使用してください。</li>
          </ul>
          <p className="text-gray-800 mt-4">
            GitHub Discussionsを活用して、効果的なコミュニケーションと情報共有を行いましょう。
          </p>
        </div>
      </div>
    </div>
  );
}