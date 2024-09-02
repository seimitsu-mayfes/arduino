import Image from 'next/image';
import Link from 'next/link';

export default function PriorKnowledgeContent() {
  return (
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10">
          <p className="text-gray-800">
            じっくり見なくてもいいです。気になった時に見てください。
          </p>
          
          <h2 className="text-lg font-bold text-gray-800">抵抗の見方</h2>
          <p className="text-gray-800">
            カラーコードを見ます。
          </p>
          <div className="border-2 border-gray-300 p-4 rounded-lg">
            <Link href="https://www.akaneohm.com/column/marking/" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">
              抵抗のカラーコードの読み方
            </Link>
          </div>
          <div className="mt-4">
            <Image src="/resistor-image.png" width={300} height={200} alt="抵抗のカラーコード" />
          </div>

          <h2 className="text-lg font-bold text-gray-800">動線</h2>
          <p className="text-gray-800">
            右の写真のゴムは剥き出しの二つの動線をつなぐために使います。
          </p>
          <div className="mt-4">
            <Image src="/wire-image.png" width={300} height={200} alt="動線の接続" />
          </div>

          <h2 className="text-lg font-bold text-gray-800">Arduinoの端子の役割</h2>
          <p className="text-gray-800">
            パソコンとモーターにつないで、コードを書きます。
          </p>
          <div className="border-2 border-gray-300 p-4 rounded-lg">
            <Link href="https://docs.arduino.cc/" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">
              Arduino公式ドキュメント
            </Link>
          </div>
          <div className="mt-4">
            <Image src="/arduino-pins.png" width={300} height={200} alt="Arduinoの端子" />
          </div>

          <h2 className="text-lg font-bold text-gray-800">Arduinoのソフトの基本知識</h2>
          <div className="border-2 border-gray-300 p-4 rounded-lg">
            <Link href="https://n.mtng.org/ele/arduino/grammar.html" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">
              Arduinoプログラミングの基本文法
            </Link>
          </div>
          <div className="border-2 border-gray-300 p-4 rounded-lg mt-2">
            <Link href="http://www.musashinodenpa.com/arduino/ref/arduinoHH11.pdf" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">
              Arduino関数リファレンス
            </Link>
          </div>
          <div className="mt-4">
            <Image src="/arduino-code.png" width={300} height={200} alt="Arduinoコードの例" />
          </div>

          <h2 className="text-lg font-bold text-gray-800">ブレッドボードとは</h2>
          <div className="border-2 border-gray-300 p-4 rounded-lg">
            <Link href="https://shop.sunhayato.co.jp/blogs/problem-solving/breadboard" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">
              サンハヤト ブレッドボードの使い方
            </Link>
          </div>
          <div className="mt-4">
            <Image src="/breadboard.png" width={300} height={200} alt="ブレッドボード" />
          </div>

          <h2 className="text-lg font-bold text-gray-800">ワイヤーストリッパーの使い方</h2>
          <p className="text-gray-800">
            見ればわかる。ワイヤのサイズには気をつけて（大きい方から試せばよし）
          </p>
          <div className="border-2 border-gray-300 p-4 rounded-lg">
            <Link href="https://www.monotaro.com/note/productinfo/wirestripper/?srsltid=AfmBOoqxu-x-DOYhWtQDevF6AUz1Pc6On0cFzMgo4PBQ5mqGSHC8e9h-" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">
              ワイヤーストリッパーの選び方と使い方
            </Link>
          </div>
          <div className="mt-4">
            <Image src="/wire-stripper.png" width={300} height={200} alt="ワイヤーストリッパー" />
          </div>

          <h2 className="text-lg font-bold text-gray-800">マルチメーター</h2>
          <p className="text-gray-800">
            電流や電圧を測ることができるもの
          </p>
          <h3 className="text-md font-bold text-gray-800">使い方(直流電圧計)</h3>
          <ol className="list-decimal pl-5 text-gray-800">
            <li>inputとcomにコードをさす。</li>
            <li>ダイヤルをVに回す（上図)</li>
            <li>funcボタンを押してAC⇨DCに変更する。</li>
            <li>測りたい２点に当てる</li>
          </ol>
          <div className="mt-4">
            <Image src="/multimeter.png" width={300} height={200} alt="マルチメーター" />
          </div>
          <h2 className="text-lg font-bold text-gray-800">半田付けのやり方</h2>
          <ol className="list-decimal pl-5 text-gray-800">
            <li>動線の先端をつけたいものに近づけます</li>
            <li>はんだごての先ではんだに付けると溶けます</li>
            <li>はんだごての先を接合部につけるとくっつきます。←これがむずい</li>
          </ol>
          <p className="text-gray-800">
            やけどには気をつけてください。先端は触ってはいけない
          </p>
          <div className="mt-4">
            <Image src="/soldering.png" width={300} height={200} alt="半田付けの様子" />
          </div>

          <h2 className="text-lg font-bold text-gray-800">モーター</h2>
          <p className="text-gray-800">
            Arduinoにつなぎ、さらにArduinoはPCにつなぎます。Arduinoのコード内で回転速度や「何秒間回転し、何秒間止まる」などを指定します。
          </p>
          <div className="mt-4">
            <Image src="/motor.png" width={300} height={200} alt="Arduinoに接続されたモーター" />
          </div>

          <h2 className="text-lg font-bold text-gray-800">グルーガン</h2>
          <p className="text-gray-800">
            電子工作では使いませんが、木材や発泡スチロールをくっつけるのに使えます。
            絶縁材として使うかも（使わない）
          </p>
          <div className="mt-4">
            <Image src="/glue-gun.png" width={300} height={200} alt="グルーガン" />
          </div>

          <h2 className="text-lg font-bold text-gray-800">VSCode</h2>
          <p className="text-gray-800">
            プログラムを書いたりできる。
            プログラミング基礎Iの過去の資料を見たら導入の仕方を書いてるかも。
          </p>
          <div className="mt-4">
            <Image src="/vscode.png" width={300} height={200} alt="Visual Studio Code画面" />
          </div>

          <h2 className="text-lg font-bold text-gray-800">GitHub</h2>
          <p className="text-gray-800">
            ソースコードを管理できる。変更履歴を残したり、共同作業するのに便利。
            学生は無料で利用できる。
          </p>
          <div className="border-2 border-gray-300 p-4 rounded-lg mt-2">
            <Link href="https://qiita.com/re_shu/items/1ad3e0a5cb8abce3cdbf" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">
              GitHubの使い方 - Qiita
            </Link>
          </div>
          <div className="border-2 border-gray-300 p-4 rounded-lg mt-2">
            <Link href="https://zenn.dev/iizuka0000/articles/how-to-apply-for-github-education" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">
              GitHub Educationの申請方法 - Zenn
            </Link>
          </div>
          <div className="mt-4">
            <Image src="/github.png" width={300} height={200} alt="GitHub画面" />
          </div>

          {/* 以下、半田付け、モーター、グルーガン、VSCode、GitHubの項目も同様に修正 */}

        </div>
  );
}

