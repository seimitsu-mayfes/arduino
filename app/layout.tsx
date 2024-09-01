import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import Header from './ui/Header';
import Footer from './ui/Footer';
import Sidebar from './ui/Sidebar';
import { ReactNode } from 'react';

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <div className="flex grow">
            <Sidebar />
            <div className="flex-grow overflow-x-hidden">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <main className="py-6">
                  {children}
                </main>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}