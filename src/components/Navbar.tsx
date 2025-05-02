import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full px-6 py-4 bg-white shadow-md fixed top-0 z-50 backdrop-blur-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-indigo-600">
          PixMatch
        </Link>
        <ul className="flex gap-6 text-sm font-medium">
          <li><a href="#categorie" className="hover:text-indigo-500">Categorie</a></li>
          <li><a href="#upload" className="hover:text-indigo-500">Cerca</a></li>
          <li><a href="#contatti" className="hover:text-indigo-500">Contatti</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
