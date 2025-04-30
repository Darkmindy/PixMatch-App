import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-50">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        <Link to="/" className="text-2xl font-bold text-indigo-600">
          PixMatch
        </Link>
        <div className="space-x-4 text-sm">
          <Link to="/" className="hover:text-indigo-600 transition">Home</Link>
          <Link to="/categories" className="hover:text-indigo-600 transition">Categorie</Link>
          <Link to="/about" className="hover:text-indigo-600 transition">Chi siamo</Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
