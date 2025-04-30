import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-white shadow-sm p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-indigo-600">
      PixMatch
      </h1>
      <nav>
        <Link to="/" className="text-gray-600 hover:text-indigo-600 font-medium transition-colors">
          Home
        </Link>
      </nav>
    </header>
  );
}
