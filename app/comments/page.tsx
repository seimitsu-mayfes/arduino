// app/comments/page.tsx

import PriorKnowledge from '@/app/ui/comments/comments'; // prior_knowledge コンポーネントのインポート
import Link from 'next/link'; // Next.js の Link コンポーネントをインポート

export default function KnowledgePage() {
  return (
    <div className="flex flex-col min-h-screen p-6">
      <div className="flex h-20 items-center rounded-lg bg-gray-800 p-4">
        <h1 className="text-2xl font-bold text-white">Comments about Arduino</h1>
      </div>
      <div className="mt-4 flex grow flex-col gap-4">
        <PriorKnowledge /> {/* comments コンポーネントの表示 */}
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