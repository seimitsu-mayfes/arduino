"use client";
import { Bars3Icon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { href: '/what_is_arduino', label: 'Arduinoとは' },
    { href: '/setup', label: 'セットアップ' },
    { href: '/prior_knowledge', label: '予備知識' },
    { href: '/LED', label: 'LEDを実装' },
    { href: '/button', label: 'ボタンを実装' },
    { href: '/motor', label: 'モーター' },
    { href: '/ultrasonic', label: '超音波センサを実装' },
    { href: '/board', label: '基盤に固定' },
    { href: '/debug', label: 'デバッグ' },
    { href: '/comments', label: 'コメント' },
    { href: '/others', label: '参考資料' },
  ];

  return (
    <aside 
      className={`fixed top-0 ${isOpen ? 'left-0 w-64 h-full' : 'left-0 w-16 h-16'} bg-gray-700 p-4 transition-all duration-300 z-50`}
    >
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="text-white mb-4 flex items-center"
      >
        <Bars3Icon className="h-6 w-6" />
        {isOpen && <span className="ml-2">Close Menu</span>}
      </button>
      <nav className={`mt-6 ${isOpen ? 'block' : 'hidden'}`}>
        <ul className="space-y-4">
          {menuItems.map((item) => (
            <li key={item.href}>
              <Link 
                href={item.href} 
                className={`text-white ${pathname === item.href ? 'font-bold bg-gray-600 px-2 py-1 rounded' : ''}`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}