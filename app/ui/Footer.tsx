export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 p-4 text-white text-center">
      <p className="mb-2">
        © {currentYear}  Arduino入門. All rights reserved.
      </p>
      <p className="mb-2">
        Created by [rrrttt-rt] for Arduino beginners
      </p>
      <p className="mb-2">
        このサイトは個人的な学習目的で作成されています。Arduino公式のサイトではありません。
      </p>
      <p className="mb-2">
        <a href="https://www.arduino.cc/" className="underline hover:text-blue-300" target="_blank" rel="noopener noreferrer">Arduino公式サイト</a> | 
        <a href="/contact" className="underline hover:text-blue-300 ml-2">お問い合わせ</a>
      </p>
      <p>
        最終更新日: {new Date().toLocaleDateString()}
      </p>
    </footer>
  );
}
  