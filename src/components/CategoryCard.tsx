import { Category } from '../data/categories';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

type Props = {
  category: Category;
};

export default function CategoryCard({ category }: Props) {
  return (
    <Link to={`/categories/${category.id}`}>
      <motion.div
        className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow border border-gray-100 cursor-pointer"
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <div className="text-4xl mb-4">{category.icon}</div>
        <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
        <p className="text-gray-600 text-sm">{category.description}</p>
      </motion.div>
    </Link>
  );
}
