import { lusitana } from '../ui/fonts';
import Image from 'next/image';
import Link from 'next/link';

export default function LoginFormGuide() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex h-20 items-center rounded-lg bg-gray-800 p-4 mb-4">
        <h1 className="text-2xl font-bold text-white">ログインフォームについて</h1>
      </div>
      <div className="flex grow flex-col gap-4">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10">
          <p className={`${lusitana.className} text-lg text-gray-800`}>
            現在、ログインフォームは開発中です。完成次第、ここでログイン方法をご案内いたします。
          </p>
          <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-4">
            <p className="font-bold">注意:</p>
            <p>ログインフォームは現在実装中です。完成までしばらくお待ちください。</p>
          </div>
          <h2 className="text-lg font-bold text-gray-800">予定している機能</h2>
          <p className="text-gray-800">
            ログインフォームには以下の機能を実装する予定です：
          </p>
          <ul className="list-disc pl-5 text-gray-800">
            <li>ユーザー名とパスワードによるログイン</li>
            <li>パスワードリセット機能</li>
            <li>新規ユーザー登録</li>
            <li>セキュアな認証プロセス</li>
          </ul>
          <Image
            src="/login-form-placeholder.png"
            width={400}
            height={300}
            className="max-w-full h-auto rounded-lg shadow-md"
            alt="ログインフォームのプレースホルダー画像"
          />
          <h2 className="text-lg font-bold text-gray-800">今後の予定</h2>
          <p className="text-gray-800">
            ログインフォームの実装が完了次第、以下の情報を提供する予定です：
          </p>
          <ul className="list-disc pl-5 text-gray-800">
            <li>ログイン方法の詳細な手順</li>
            <li>パスワードリセットの方法</li>
            <li>アカウント作成手順</li>
            <li>セキュリティに関する注意事項</li>
          </ul>
          <p className="text-gray-800 mt-4">
            ログインフォームの実装が完了し次第、このページを更新いたします。それまでしばらくお待ちください。
          </p>
          <Link
            href="https://example.com/login-help"
            className="text-blue-500 underline mt-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            ログインに関するヘルプ（準備中）
          </Link>
        </div>
      </div>
    </div>
  );
}