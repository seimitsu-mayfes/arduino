import {VSCode,GitHub}from '@/app/ui/others/others-tool';

export default function PriorKnowledge() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex h-20 items-center rounded-lg bg-gray-800 p-4 mb-4">
        <h1 className="text-2xl font-bold text-white">参考ツール</h1>
      </div>
      <div className="flex grow flex-col gap-4">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10">
          <p className="text-gray-800">
            便利なツールを使って、プログラミングを楽しんでください。
          </p>
          <VSCode />
          <GitHub />
        </div>
      </div>
    </div>
  );
}