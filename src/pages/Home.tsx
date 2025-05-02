import React, { Suspense, lazy } from 'react';
import { useProducts } from '../hooks/useProducts';
import ProductCard from '../components/ProductCard';

const HeroImage = lazy(() => import('../components/HeroImage'));

const Home: React.FC = () => {
  const { products, categories, selectedCategory, setSelectedCategory, loading } = useProducts();

  return (
    <>
      <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 py-12 md:p-20 min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100 text-gray-800 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 dark:text-white transition-all duration-500">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-indigo-600">
              PixMatch
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6">
            Trova esattamente ciò che cerchi... <strong>senza scrivere una parola</strong>.
          </p>
          <button className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            Inizia ora
          </button>
        </div>

        <Suspense
          fallback={
            <div className="w-full md:w-1/2 h-64 bg-gray-300 dark:bg-gray-700 rounded-lg animate-pulse mb-8 md:mb-0" />
          }
        >
          <HeroImage />
        </Suspense>
      </section>

      <section className="px-6 py-8">
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full border ${
                selectedCategory === category
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-gray-800'
              } transition-colors duration-300`}
            >
              {category}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="text-center">Caricamento prodotti...</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                image={product.thumbnail}
                title={product.title}
              />
            ))}
          </div>
        )}
      </section>
    </>
  );
};

export default Home;
