export interface Category {
    id: string;
    name: string;
    description: string;
    icon: string; // nome dell'icona Heroicons/React Icons o un URL
  }
  
  export const categories: Category[] = [
    {
      id: 'gaming',
      name: 'Gaming',
      description: 'Console, accessori e giochi vintage e moderni.',
      icon: '🎮',
    },
    {
      id: 'anime',
      name: 'Anime & Manga',
      description: 'Fumetti, action figure, artbook e gadget.',
      icon: '📚',
    },
    {
      id: 'tech',
      name: 'Tecnologia',
      description: 'Dispositivi elettronici, componenti e accessori.',
      icon: '💻',
    },
    {
      id: 'cards',
      name: 'Carte Collezionabili',
      description: 'Carte Pokémon, Yu-Gi-Oh! e altro.',
      icon: '🃏',
    },
  ];
  