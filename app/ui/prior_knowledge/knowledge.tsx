// app/ui/prior_knowledge.tsx

import { lusitana } from '@/app/ui/fonts'; // フォントのインポート

export default function PriorKnowledge() {
  return (
    <div className="flex flex-col gap-4 p-6">
      <h2 className="text-xl font-bold text-gray-800">Arduinoの操作方法</h2>
      <p className={`${lusitana.className} text-lg text-gray-600`}>
        Arduinoの操作方法はこんな感じです。Arduinoはオープンソースのプラットフォームであり、電子回路を簡単に制御できるプログラムを作成するために使用されます。これにより、初心者でも簡単にハードウェアの操作を学ぶことができます。
      </p>
    </div>
  );
}
