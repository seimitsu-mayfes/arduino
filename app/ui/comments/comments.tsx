// app/ui/comments.tsx

import { lusitana } from '@/app/ui/fonts'; // フォントのインポート

export default function PriorKnowledge() {
  return (
    <div className="flex flex-col gap-4 p-6">
      <h2 className="text-xl font-bold text-gray-800">コメント</h2>
      <p className={`${lusitana.className} text-lg text-gray-600`}>
       はんだで火傷すると危ないので気をつけてください。
      </p>
    </div>
  );
}