import React from 'react';
import heroImage from '../assets/hero-visual.svg';

const HeroImage: React.FC = () => {
  return (
    <img
      src={heroImage}
      alt="Visual search assistant"
      className="w-full max-w-md animate-float"
      loading="lazy"
    />
  );
};

export default HeroImage;
