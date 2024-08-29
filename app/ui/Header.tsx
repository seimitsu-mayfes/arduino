import AcmeLogo from './acme-logo';

export default function Header() {
  return (
    <header className="bg-blue-500 p-4 flex items-center justify-between">
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
