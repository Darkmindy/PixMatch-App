import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="text-center space-y-6 py-20">
      <h2 className="text-4xl font-bold">404 - Pagina non trovata</h2>
      <p className="text-gray-600">Oops! La pagina che cerchi non esiste.</p>
      <Link to="/" className="inline-block px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition">
        Torna alla Home
      </Link>
    </section>
  );
}
