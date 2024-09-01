import { lusitana } from '@/app/ui/fonts'; // フォントのインポート
import CodeBlock from '@/app/ui/codes/LED'; // CodeBlockコンポーネントをインポート

export default function LEDcontent() {
  return (
    <div className="flex flex-col gap-4 p-6">
      <h2 className="text-xl font-bold text-gray-800">LED</h2>
      <p className={`${lusitana.className} text-lg text-gray-600`}>
       LEDは以下のように接続します。
       </p>
      <div className="mt-6">
          <h2 className="text-xl font-bold mb-4">Arduino LED Blinking Code</h2>
          <CodeBlock />
      </div>
       
    
    </div>
  );
}