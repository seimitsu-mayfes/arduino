import AcmeLogo from './acme-logo';

export default function Header() {
  return (
    <header className="bg-blue-500 p-4 flex items-center justify-between sticky top-0 left-0 w-full z-50">
      <AcmeLogo />
      <nav>
        <ul className="flex space-x-4">
          <li><a href="#" className="text-white">ログイン</a></li>
          <li><a href="#" className="text-white">精密について</a></li>
        </ul>
      </nav>
    </header>
  );
}


