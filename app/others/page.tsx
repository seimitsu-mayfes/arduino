import { lusitana } from '../ui/fonts';
import Image from 'next/image';
import Link from 'next/link';

export default function DevelopmentTools() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex h-20 items-center rounded-lg bg-gray-800 p-4 mb-4">
        <h1 className="text-2xl font-bold text-white">開発ツール: VSCode と GitHub</h1>
      </div>
      <div className="flex grow flex-col gap-4">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10">
          <h2 className="text-xl font-bold text-gray-800">Visual Studio Code (VSCode)</h2>
          <p className={`${lusitana.className} text-lg text-gray-800`}>
            VSCodeは多機能なコードエディタで、プログラムを書いたり編集したりするのに適しています。
          </p>
          <p className="text-gray-800">
            プログラミング基礎Iの過去の資料を確認すると、VSCodeの導入方法が記載されている可能性があります。
          </p>
          <div className="flex flex-col md:flex-row items-start gap-4">
            <div className="md:w-1/2">
              <p className="font-bold mb-2">VSCodeの特徴:</p>
              <ul className="list-disc pl-5">
                <li>多言語対応</li>
                <li>豊富な拡張機能</li>
                <li>Git統合</li>
                <li>デバッグ機能</li>
              </ul>
            </div>
            <Image
              src="/vscode-screenshot.png"
              width={400}
              height={300}
              className="md:w-1/2 max-w-full h-auto rounded-lg shadow-md"
              alt="Visual Studio Code画面"
            />
          </div>

          <h2 className="text-xl font-bold text-gray-800 mt-8">GitHub</h2>
          <p className={`${lusitana.className} text-lg text-gray-800`}>
            GitHubはソースコードを管理するためのプラットフォームです。変更履歴を残したり、共同作業をしたりするのに便利です。
          </p>
          <p className="text-gray-800">
            学生は無料で利用できるGitHub Educationプログラムがあります。
          </p>
          <div className="flex flex-col md:flex-row items-start gap-4">
            <div className="md:w-1/2">
              <p className="font-bold mb-2">GitHubの利点:</p>
              <ul className="list-disc pl-5">
                <li>バージョン管理</li>
                <li>コラボレーション機能</li>
                <li>プロジェクト管理</li>
                <li>コードレビュー</li>
              </ul>
            </div>
            <Image
              src="/github-screenshot.png"
              width={400}
              height={300}
              className="md:w-1/2 max-w-full h-auto rounded-lg shadow-md"
              alt="GitHub画面"
            />
          </div>

          <h3 className="text-lg font-bold text-gray-800 mt-4">参考リンク</h3>
          <div className="space-y-2">
            <Link
              href="https://qiita.com/re_shu/items/1ad3e0a5cb8abce3cdbf"
              className="text-blue-500 underline block"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHubの使い方 - Qiita
            </Link>
            <Link
              href="https://zenn.dev/iizuka0000/articles/how-to-apply-for-github-education"
              className="text-blue-500 underline block"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Educationの申請方法 - Zenn
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}