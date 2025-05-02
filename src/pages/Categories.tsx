import { Link } from 'react-router-dom';

const categories = [
  { id: 'videogiochi', name: 'Videogiochi', image: '/assets/cat-videogiochi.jpg' },
  { id: 'manga', name: 'Manga', image: '/assets/cat-manga.jpg' },
  { id: 'pokemon', name: 'Carte Pokémon', image: '/assets/cat-pokemon.jpg' },
  // puoi aggiungere altre categorie...
];

export default function Categories() {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-bold text-center">Categorie</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map(cat => (
          <Link
            to={`/categories/${cat.id}`}
            key={cat.id}
            className="block rounded overflow-hidden shadow hover:shadow-lg transition"
          >
            <img src={cat.image} alt={cat.name} className="w-full h-48 object-cover" />
            <div className="p-4 text-center font-semibold">{cat.name}</div>
          </Link>
        ))}
      </div>
    </section>
  );
}
