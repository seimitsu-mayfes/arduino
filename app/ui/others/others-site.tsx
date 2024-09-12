import Image from 'next/image';
import Link from 'next/link';
import styles from './others.module.css';

export function ElectronicComponents() {
    return (
      <div className={styles.container}>
        <h2 className={styles.title}>電子部品</h2>
        <p className={styles.text}>
          秋月電子では部品の購入及び詳細な使用の確認ができます。
        </p>
        <div className={styles.linkContainer}>
          <Link href="https://akizukidenshi.com/catalog/pages/koukoku.aspx" className={styles.link} target="_blank" rel="noopener noreferrer">
            秋月電子通商 - 電子部品カタログ
          </Link>
        </div>
        <div className={styles.wokwiContainer}>
        <iframe 
          src="https://wokwi.com/projects/408799893419168769" 
          width="100%" 
          height="500px"
          style={{ border: 'none' }}
        ></iframe>
      </div>
      </div>
    );
  }