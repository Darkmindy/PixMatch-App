import { useParams } from 'react-router-dom';

export default function CategoryDetail() {
  const { id } = useParams<{ id: string }>();

  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-bold text-center capitalize">{id?.replace(/-/g, ' ')}</h2>
      <p className="text-center text-gray-600">Qui mostreremo i prodotti correlati alla categoria <strong>{id}</strong>.</p>
      {/* Qui in futuro metteremo il grid dei prodotti */}
    </section>
  );
}
