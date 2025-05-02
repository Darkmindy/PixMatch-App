import gameboyImg from '../assets/products/Gameboy-Advance-SP.jpg';
import ps2Img from '../assets/products/ps2.jpg';
import pkmnImg from '../assets/products/pokemon-blu.jpg';

export interface Product {
  title: string;
  image: string;
}

export const products: Product[] = [
  {
    title: 'Game Boy',
    image: gameboyImg,
  },
  {
    title: 'PlayStation 2',
    image: ps2Img,
  },
  {
    title: 'Nintendo DS',
    image: pkmnImg,
  },
];
