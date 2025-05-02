import { Link } from 'react-router-dom';
//import logo from '../assets/logo.svg';

export default function Header() {
  return (
    <header className="shadow-sm bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <img alt="PixMatch" className="w-8 h-8" />
          <span className="text-xl font-semibold">PixMatch</span>
        </Link>
        <nav className="space-x-6">
          <Link to="/" className="hover:text-indigo-600">Home</Link>
          <Link to="/categories" className="hover:text-indigo-600">Categorie</Link>
        </nav>
      </div>
    </header>
  );
}
