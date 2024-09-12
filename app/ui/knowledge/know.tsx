import Image from 'next/image';
import Link from 'next/link';
import styles from './knowledge.module.css';

export function ResistorColorCode() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>抵抗の見方</h2>
      <p className={styles.text}>
        カラーコードを見て抵抗値を調べる
      </p>
      <div className={styles.imageContainer}>
        <Image 
          src="https://upload.wikimedia.org/wikipedia/commons/4/4b/Resistor_Color_Code.svg" 
          //src="https://wokwi.com/projects/408799893419168769"
          width={600} 
          height={400} 
          alt="抵抗のカラーコード" 
        />
        <p className={styles.caption}>
          参考: 
          <Link 
            href="https://commons.wikimedia.org/wiki/File:Resistor_Color_Code.svg"
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Resistor Color Code
          </Link>
        </p>
      </div>
      <div className={styles.linkContainer}>
        <Link href="https://www.akaneohm.com/column/marking/" className={styles.link} target="_blank" rel="noopener noreferrer">
          抵抗のカラーコードの読み方
        </Link>
      </div>
    </div>
  );
}

export function HeatShrinkTube() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>熱収縮チューブ</h2>
      <p className={styles.text}>
        熱収縮チューブは剥き出しの二つの動線をつなぐために使います。
      </p>
      <div className={styles.imageContainer}>
        <Image src="/knowledge/tube.jpg" width={300} height={200} alt="チューブ" />
      </div>
      <div className={styles.linkContainer}>
        <Link href="https://www.monotaro.com/note/productinfo/heatshrinktube_feature/"
         className={styles.link} target="_blank" rel="noopener noreferrer">
          熱収縮チューブの使い方
        </Link>
      </div>
    </div>
  );
}

export function ArduinoPin() {
  const pinData = [
    { role: '役割', pins: 'ピン' },
    { role: 'デジタル入出力', pins: '0~13' },
    { role: 'PWM出力', pins: '3,5,6,9,10,11' },
    { role: 'UART通信のRXピン', pins: '0' },
    { role: 'UART通信のTXピン', pins: '1' },
  ]

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Arduinoの端子の役割</h2>
      <p className={styles.text}>
        Arduinoには、デジタルピン、アナログピン、GND、5V、3.3Vなどがあります。
      </p>
      <table className={styles.table}>
        <thead className={styles.tableHeader}>
          <tr>
            <th className={styles.tableHeaderCell}>役割</th>
            <th className={styles.tableHeaderCell}>ピン</th>
          </tr>
        </thead>
        <tbody>
          {pinData.slice(1).map((row, index) => (
            <tr key={index} className={index % 2 === 0 ? styles.tableRow : styles.tableRowAlt}>
              <td className={styles.tableCell}>{row.role}</td>
              <td className={styles.tableCell}>{row.pins}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={styles.warningContainer}>
        <p className={styles.warningText}>
          注意: Arduino UNOの場合は、ひとつのI/Oピンから40mA以上流すと壊れる可能性があります。
        </p>
        <p className={styles.warningText}>
          注意: デジタルピンの0(RX)と1(TX)に回路を繋いでいるとプログラムを書きこめない場合があります。なるべく、0ピンと1ピンには回路を繋がない方が無難です。
        </p>
      </div>
      <div className={styles.imageContainer}>
        <Image src="https://upload.wikimedia.org/wikipedia/commons/2/2e/Noname_clone_of_Arduino_Uno_-_top.jpg" 
        width={600} height={400} alt="Arduinoの端子" />
        <p className={styles.caption}>
          参考: 
          <Link 
            href="https://commons.wikimedia.org/wiki/File:Noname_clone_of_Arduino_Uno_-_top.jpg"
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Arduino Uno
          </Link>
        </p>
      </div>
      <div className={styles.linkContainer}>
        <Link href="https://miraiworks.org/?p=5655" className={styles.link} target="_blank" rel="noopener noreferrer">
          Arduino UNOのピン配置と役割
        </Link>
      </div>
    </div>
  )
}

export function BreadBoard() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>ブレッドボードとは</h2>
      <p className={styles.text}>
        以下(左)のようにブレッドボードには、電子部品を差し込む穴があります。<br />
        以下(右)のようにブレッドボードは通電している部分と通電していない部分があります。
      </p>
      <div className={styles.imageContainer}>
        <Image 
          src="https://upload.wikimedia.org/wikipedia/commons/e/e8/Breadboard.png" 
          width={600} 
          height={400} 
          alt="ブレッドボード" 
        />
        <p className={styles.caption}>
          参考: 
          <Link 
            href="https://commons.wikimedia.org/wiki/File:Breadboard.png"
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            File:Breadboard.png
          </Link>
        </p>
      </div>
      <div className={styles.linkContainer}>
        <Link href="https://shop.sunhayato.co.jp/blogs/problem-solving/breadboard" className={styles.link} target="_blank" rel="noopener noreferrer">
          サンハヤト ブレッドボードの使い方
        </Link>
      </div>
    </div>
  );
}

export function WireStripper() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>ワイヤーストリッパーの使い方</h2>
      <p className={styles.text}>
        見ればわかる。ワイヤのサイズには気をつけて（大きい方から試せばよし）
      </p>
      <div className={styles.imageContainer}>
        <Image 
          src="https://upload.wikimedia.org/wikipedia/commons/0/01/Simple_universal_wire_stripper.JPG" 
          width={600} 
          height={400} 
          alt="ブレッドボード" 
        />
        <p className={styles.caption}>
          参考: 
          <Link 
            href="https://commons.wikimedia.org/wiki/File:Simple_universal_wire_stripper.JPG"
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            File:Breadboard.png
          </Link>
        </p>
      </div>
      <div className={styles.linkContainer}>
        <Link 
          href="https://www.monotaro.com/note/productinfo/wirestripper/?srsltid=AfmBOoqxu-x-DOYhWtQDevF6AUz1Pc6On0cFzMgo4PBQ5mqGSHC8e9h-" 
          className={styles.link} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          ワイヤーストリッパーの選び方と使い方
        </Link>
      </div>
    </div>
  );
}

export function ArduinoSoftwareBasics() {
  const functionData = [
    { function: '関数', description: '説明' },
    { function: 'delay(t)', description: 't/1000秒現在の状態を維持する。' },
    { function: 'pinMode(LED_BUILTIN, OUTPUT);', description: 'LED_BUILTIN ピンを出力に設定' },
    { function: 'digitalWrite(LED_BUILTIN, HIGH);', description: 'LED_BUILTIN ピンを HIGH に設定' },
  ]

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Arduinoのソフトの基本知識</h2>
      <p className={styles.text}>
        Arduinoのプログラムは開始時に一度だけ実行される部分(setup)と開始後繰り返す部分(loop)からなります。
      </p>
      <table className={styles.table}>
        <thead className={styles.tableHeader}>
          <tr>
            <th className={styles.tableHeaderCell}>関数</th>
            <th className={styles.tableHeaderCell}>説明</th>
          </tr>
        </thead>
        <tbody>
          {functionData.slice(1).map((row, index) => (
            <tr key={index} className={index % 2 === 0 ? styles.tableRow : styles.tableRowAlt}>
              <td className={styles.tableCell}>{row.function}</td>
              <td className={styles.tableCell}>{row.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={styles.imageContainer}>
        <Image 
          src="https://upload.wikimedia.org/wikipedia/commons/a/a1/Arduino_IDE_-_Blink.png" 
          width={600} 
          height={400} 
          alt="Arduinoコードの例" 
        />
        <p className={styles.caption}>
          参考: 
          <Link 
            href="https://commons.wikimedia.org/wiki/File:Arduino_IDE_-_Blink.png"
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Arduino IDE - Blink
          </Link>
        </p>
      </div>
      <div className={styles.linkContainer}>
        <Link href="https://n.mtng.org/ele/arduino/grammar.html" className={styles.link} target="_blank" rel="noopener noreferrer">
          Arduinoプログラミングの基本文法
        </Link>
      </div>
      <div className={styles.linkContainer}>
        <Link href="http://www.musashinodenpa.com/arduino/ref/arduinoHH11.pdf" className={styles.link} target="_blank" rel="noopener noreferrer">
          Arduino関数リファレンス
        </Link>
      </div>
    </div>
  );
}

export function Multimeter() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>マルチメーター</h2>
      <p className={styles.text}>
        電流や電圧を測ることができるもの
      </p>
      <h3 className={styles.subtitle}><u>使い方(直流電圧計)</u></h3>
      <ol className={styles.orderedList}>
        <li>inputとcomにコードをさす。</li>
        <li>ダイヤルをVに回す（上図)</li>
        <li>funcボタンを押してAC⇨DCに変更する。</li>
        <li>測りたい２点に当てる</li>
      </ol>
      <div className={styles.imageContainer}>
        <Image 
          src="https://upload.wikimedia.org/wikipedia/commons/9/99/Aneng_AN870_multimeter_02.jpg" 
          width={300} 
          height={200} 
          alt="マルチメーター" 
        />
        <p className={styles.caption}>
          参考: 
          <Link 
            href="https://commons.wikimedia.org/wiki/File:Aneng_AN870_multimeter_02.jpg"
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Aneng AN870 multimeter
          </Link>
        </p>
      </div>
      <div className={styles.linkContainer}>
        <Link href="https://jp.ifixit.com/Guide/%E3%83%9E%E3%83%AB%E3%83%81%E3%83%A1%E3%83%BC%E3%82%BF%E3%83%BC%E3%81%AE%E4%BD%BF%E7%94%A8%E6%96%B9%E6%B3%95/25632" className={styles.link} target="_blank" rel="noopener noreferrer">
          マルチメーターの使い方
        </Link>
      </div>
    </div>
  );
}

export function Soldering() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>はんだ付け</h2>
      <p className={styles.text}>
        はんだ付けは、電子部品や導線を接合するために使用される重要な技術です。
      </p>
      <h3 className={styles.subtitle}><u>はんだ付けの基本手順</u></h3>
      <ol className={styles.orderedList}>
        <li>母材にフラックスをつける（なければなくても可能ですが、あった方がはるかに容易です）</li>
        <li>はんだごてを母材にあて温める</li>
        <li>はんだを母材に塗り広げる</li>
      </ol>
      <h3 className={styles.subtitle}><u>複数の導線をまとめる場合</u></h3>
      <ol className={styles.orderedList}>
        <li>動線の先端をつけたいものに近づけます</li>
        <li>はんだごての先ではんだに付けると溶けます</li>
        <li>はんだごての先を接合部につけるとくっつきます（これが難しい部分です）</li>
      </ol>
      <div className={styles.warningContainer}>
        <p className={styles.warningText}>
          注意: やけどには十分気をつけてください。はんだごての先端は絶対に触ってはいけません。
        </p>
        <p className={styles.warningText}>
          注意: 使用しないときは必ず電源を抜いてください。
        </p>
      </div>
      <div className={styles.imageContainer}>
        <Image 
          src="https://upload.wikimedia.org/wikipedia/commons/7/70/Fer_%C3%A0_souder_et_support.JPG" 
          width={300} 
          height={200} 
          alt="はんだごて" 
        />
        <p className={styles.caption}>
          参考: 
          <Link 
            href="https://commons.wikimedia.org/wiki/File:Fer_%C3%A0_souder_et_support.JPG"
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            はんだごてと支持台
          </Link>
        </p>
      </div>
      <div className={styles.imageContainer}>
        <Image 
          src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Weichlot.jpg" 
          width={300} 
          height={200} 
          alt="はんだ" 
        />
        <p className={styles.caption}>
          参考: 
          <Link 
            href="https://commons.wikimedia.org/wiki/File:Weichlot.jpg"
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            はんだ
          </Link>
        </p>
      </div>
      <div className={styles.linkContainer}>
        <Link href="https://www.monotaro.com/note/productinfo/solderingiron_howtouse/?srsltid=AfmBOopyGAuXh2kfPd1BPsYAO0JWC_FjGKRniCDdiBfIZx7tAT6TvtbV" className={styles.link} target="_blank" rel="noopener noreferrer">
          はんだごての使い方
        </Link>
      </div>
    </div>
  );
}

export function GlueGun() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>グルーガン</h2>
      <p className={styles.text}>
        グルーガンは主に木材や発泡スチロールなどの接着に使用されます。電子工作では直接使用しませんが、プロジェクトの構造部分の組み立てに役立つことがあります。
      </p>
      <div className={styles.imageContainer}>
        <Image 
          src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Stanley-Hot-Glue-Gun-GR35K.jpg" 
          width={300} 
          height={200} 
          alt="グルーガン" 
        />
        <p className={styles.caption}>
          参考: 
          <Link 
            href="https://commons.wikimedia.org/wiki/File:Stanley-Hot-Glue-Gun-GR35K.jpg"
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Stanley Hot Glue Gun GR35K
          </Link>
        </p>
      </div>
      <div className={styles.linkContainer}>
        <Link href="https://www.dcm-hc.co.jp/kurashimade/c_useful/20190216192203.html" className={styles.link} target="_blank" rel="noopener noreferrer">
          グルーガンの使い方と注意点
        </Link>
      </div>
    </div>
  );
}
