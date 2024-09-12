import { lusitana } from '../ui/fonts';
import Image from 'next/image';
import Link from 'next/link';

export default function SetupAndUsage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex h-20 items-center rounded-lg bg-gray-800 p-4 mb-4">
        <h1 className="text-2xl font-bold text-white">セットアップと基本的な使い方</h1>
      </div>
      <div className="flex grow flex-col gap-4">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10">
          <p className={`${lusitana.className} text-lg text-gray-800`}>
            まずArduino IDE のダウンロードを以下から行ってください。
          </p>
          <Link
            href="https://www.arduino.cc/"
            className="text-blue-500 underline mb-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            Arduino公式サイト
          </Link>
          <p className={`${lusitana.className} text-lg text-gray-800`}>
            Arduinoのセットアップと基本的な使い方を以下に示します。
          </p>
          <h2 className="text-lg font-bold text-gray-800">セットアップ</h2>
          <p className="text-gray-800">
            具体的な手順は以下のようになります。
          </p>
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row items-start gap-4">
              <div className="md:w-1/2">
                <p className="font-bold mb-2">ステップ 1:</p>
                <p>まずArduinoを起動してNew Sketchを押します。すると新たなウィンドウが現れ、そこに適当なプログラムを書きます。</p>
              </div>
              <Image
                src="/setup/arduino-new-sketch.png"
                width={400}
                height={300}
                className="md:w-1/2 max-w-full h-auto rounded-lg shadow-md"
                alt="Arduino IDEの新規スケッチ画面"
              />
            </div>
            <div className="flex flex-col md:flex-row items-start gap-4">
              <div className="md:w-1/2">
                <p className="font-bold mb-2">ステップ 2:</p>
                <p>このようにSaveします。（初めてSaveするときはSave Asで名前をつけて保存してください。）</p>
              </div>
              <Image
                src="/setup/arduino-save.png"
                width={400}
                height={300}
                className="md:w-1/2 max-w-full h-auto rounded-lg shadow-md"
                alt="Arduino IDEの保存画面"
              />
            </div>
            <div className="flex flex-col md:flex-row items-start gap-4">
              <div className="md:w-1/2">
                <p className="font-bold mb-2">ステップ 3:</p>
                <p>次にPCとArduinoを物理的に接続します。</p>
              </div>
              <Image
                src="/setup/arduino-upload.png"
                width={400}
                height={300}
                className="md:w-1/2 max-w-full h-auto rounded-lg shadow-md"
                alt="ArduinoとPCの接続"
              />
            </div>
            <div className="flex flex-col md:flex-row items-start gap-4">
              <div className="md:w-1/2">
                <p className="font-bold mb-2">ステップ 4:</p>
                <p>そしてソフト上でも接続する必要があります。</p>
              </div>
              <Image
                src="/setup/arduino-connect.png"
                width={400}
                height={300}
                className="md:w-1/2 max-w-full h-auto rounded-lg shadow-md"
                alt="Arduino IDEのボードとポート選択画面"
              />
              <div className="md:w-1/2">
                <p>Select Other Board and Portを押し、Arduino Uno（使用デバイス）とSerial Port（USB）（使用しているポート）を選択します。これで接続が完了します。</p>
              </div>
              <Image
                src="/setup/arduino-select-board.png"
                width={400}
                height={300}
                className="md:w-1/2 max-w-full h-auto rounded-lg shadow-md"
                alt="Arduino IDEのボードとポート選択画面"
              />

            </div>
            <div className="flex flex-col md:flex-row items-start gap-4">
              <div className="md:w-1/2">
                <p className="font-bold mb-2">ステップ 5:</p>
                <p>最後に青色のボタンを押すことでPCからプログラムのインポートと実行が行われます。</p>
              </div>
              <Image
                src="/setup/arduino-upload.png"
                width={400}
                height={300}
                className="md:w-1/2 max-w-full h-auto rounded-lg shadow-md"
                alt="Arduino IDEのアップロードボタン"
              />
            </div>
          </div>
          <h2 className="text-lg font-bold text-gray-800">注意点</h2>
          <p className="text-gray-800">
            プログラムに変更がない時はPCに繋ぐ必要はありません。ボタンを押すだけで再実行が可能です。ただし電源が必要なので、以下のようにに繋ぐなどして電源を確保しなければなりません。
          </p>
          <Image
            src="/setup/arduino-power.png"
            width={400}
            height={300}
            className="max-w-full h-auto rounded-lg shadow-md"
            alt="Arduinoの電源接続"
          />
        </div>
      </div>
    </div>
  );
}