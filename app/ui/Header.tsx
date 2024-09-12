import Link from 'next/link';
import styles from './home.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.leftSection}>
        {/* ここに必要に応じてコンテンツを追加 */}
      </div>
      <div className={styles.centerSection}>
        <h1 className={styles.title}>Arduino入門</h1>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li>
            <Link href="/login" className={styles.navLink}>
              ログイン
            </Link>
          </li>
          <li>
            <Link href="/about-us" className={styles.navLink}>
              about us
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}