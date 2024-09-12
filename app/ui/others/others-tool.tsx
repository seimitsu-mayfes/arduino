import Image from 'next/image';
import Link from 'next/link';
import styles from './others.module.css';

export function VSCode() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Visual Studio Code (VSCode)</h2>
      <p className={styles.text}>
        VSCodeは多機能なコードエディタで、プログラムを書いたり編集したりするのに適しています。
      </p>
      <p className={styles.text}>
        プログラミング基礎Iの過去の資料を確認すると、VSCodeの導入方法が記載されている可能性があります。
      </p>
      <div className={styles.featureContainer}>
        <h3 className={styles.subtitle}>VSCodeの特徴:</h3>
        <ul className={styles.list}>
          <li>多言語対応</li>
          <li>豊富な拡張機能</li>
          <li>Git統合</li>
          <li>デバッグ機能</li>
        </ul>
      </div>
      <div className={styles.imageContainer}>
        <Image 
          src="https://upload.wikimedia.org/wikipedia/commons/e/ea/SymPy_Printing_using_Pprint_and_Display_in_a_VSCode_IPython_Notebook.png" 
          width={600} 
          height={400} 
          alt="vscode" 
        />
        <p className={styles.caption}>
          参考: 
          <Link 
            href="https://commons.wikimedia.org/wiki/File:SymPy_Printing_using_Pprint_and_Display_in_a_VSCode_IPython_Notebook.png"
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            VSCode
          </Link>
        </p>
      </div>
      <div className={styles.linkContainer}>
        <Link href="https://code.visualstudio.com/" className={styles.link} target="_blank" rel="noopener noreferrer">
          Visual Studio Code 公式サイト
        </Link>
      </div>
    </div>
  );
}

export function GitHub() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>GitHub</h2>
      <p className={styles.text}>
        GitHubはソースコードを管理するためのプラットフォームです。変更履歴を残したり、共同作業をしたりするのに便利です。
      </p>
      <p className={styles.text}>
        学生は無料で有料プランを利用できるGitHub Educationプログラムがあります。<br/>
        そしてGiHubcopilotをvscodeに導入することで、コードの自動生成が可能です。
      </p>
      <div className={styles.featureContainer}>
        <h3 className={styles.subtitle}>GitHubの利点:</h3>
        <ul className={styles.list}>
          <li>バージョン管理</li>
          <li>コラボレーション機能</li>
          <li>プロジェクト管理</li>
          <li>コードレビュー</li>
        </ul>
      </div>
      <div className={styles.linkContainer}>
        <Link href="https://qiita.com/re_shu/items/1ad3e0a5cb8abce3cdbf" className={styles.link} target="_blank" rel="noopener noreferrer">
          GitHubの使い方 - Qiita
        </Link>
        <Link href="https://zenn.dev/iizuka0000/articles/how-to-apply-for-github-education" className={styles.link} target="_blank" rel="noopener noreferrer">
          GitHub Educationの申請方法 - Zenn
        </Link>
      </div>
    </div>
  );
}