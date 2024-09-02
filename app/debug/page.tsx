import { lusitana } from '../ui/fonts';
import DebugContent from '@/app/ui/debug/debug';

export default function Debug() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex h-20 items-center rounded-lg bg-gray-800 p-4 mb-4">
        <h1 className="text-2xl font-bold text-white">デバッグの方法</h1>
      </div>
      <div className="flex grow flex-col gap-4">
        <DebugContent />
      </div>
    </div>
  );
}