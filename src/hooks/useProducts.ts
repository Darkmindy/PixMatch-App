import { useEffect, useState } from 'react';

export interface Product {
  id: number;
  title: string;
  category: string;
  price: number;
  thumbnail: string;
}

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await fetch('https://dummyjson.com/products/categories');
      const data = await res.json();
      setCategories(['all', ...data]);
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const url =
        selectedCategory === 'all'
          ? 'https://dummyjson.com/products'
          : `https://dummyjson.com/products/category/${selectedCategory}`;
      const res = await fetch(url);
      const data = await res.json();
      setProducts(data.products);
      setLoading(false);
    };

    fetchProducts();
  }, [selectedCategory]);

  return { products, categories, selectedCategory, setSelectedCategory, loading };
};
