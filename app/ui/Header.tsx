import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-blue-500 p-4 flex items-center justify-between sticky top-0 left-0 w-full z-50">
      <div className="w-1/3">
      </div>
      <div className="w-1/3 flex justify-center">
        <h1 className="text-white text-2xl font-bold">Arduino入門</h1>
      </div>
      <nav className="w-1/3 flex justify-end">
        <ul className="flex space-x-4">
          <li>
            <Link href="/login" className="text-white">
              ログイン
            </Link>
          </li>
          <li>
            <Link href="/about-us" className="text-white">
              about us
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}