import '@/app/ui/global.css'; // グローバルCSSのインポート
import { inter } from '@/app/ui/fonts'; // フォントのインポート
import Header from './ui/Header'; // ヘッダーのインポート
import Footer from './ui/Footer'; // フッターのインポート
import Sidebar from './ui/Sidebar'; // サイドバーのインポート
import { ReactNode } from 'react';

interface RootLayoutProps {
  children: ReactNode; // 子コンテンツを受け取るためのプロパティ
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <div className="flex flex-col min-h-screen">
          <Header /> {/* ヘッダーを共通レイアウトに追加 */}
          <div className="flex grow">
            <Sidebar /> {/* サイドバーを共通レイアウトに追加 */}
            <main className="flex grow flex-col p-6 ml-64"> {/* サイドバーの幅に合わせて余白を追加 */}
              {children} {/* ページコンテンツを挿入 */}
            </main>
          </div>
          <Footer /> {/* フッターを共通レイアウトに追加 */}
        </div>
      </body>
    </html>
  );
}

