import { House } from './types';

export const HOUSES: House[] = [
  {
    id: '1',
    name: 'Villa do Sol Poente',
    description: 'Localizada no topo do Caminho do Rei, esta villa oferece a vista mais espetacular do pôr do sol na Praia do Rosa. Perfeita para casais ou pequenas famílias que buscam privacidade e luxo rústico.',
    pricePerNight: 850,
    capacity: 4,
    bedrooms: 2,
    bathrooms: 2,
    imageUrl: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=800&auto=format&fit=crop',
    features: ['Vista Panorâmica', 'Jacuzzi', 'Wi-Fi Starlink', 'Cozinha Gourmet', 'Ar Condicionado'],
  },
  {
    id: '2',
    name: 'Cabana da Mata Atlântica',
    description: 'Imersa na natureza, cercada por árvores nativas e pássaros exóticos. Uma experiência de desconexão total com conforto moderno. A apenas 10 minutos de caminhada da praia.',
    pricePerNight: 550,
    capacity: 2,
    bedrooms: 1,
    bathrooms: 1,
    imageUrl: 'https://images.unsplash.com/photo-1587061949409-02df41d5e562?q=80&w=800&auto=format&fit=crop',
    features: ['Deck de Madeira', 'Rede de Descanso', 'Churrasqueira', 'Smart TV', 'Estacionamento'],
  },
  {
    id: '3',
    name: 'Casa das Ondas',
    description: 'Uma mansão espaçosa com design em vidro para maximizar a vista do oceano. Ideal para grandes grupos. Acorde com o som das ondas e veja as baleias (na temporada) da sua varanda.',
    pricePerNight: 1500,
    capacity: 10,
    bedrooms: 5,
    bathrooms: 4,
    imageUrl: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=800&auto=format&fit=crop',
    features: ['Piscina Infinita', 'Acesso Direto à Trilha', 'Sala de Jogos', 'Lareira', 'Serviço de Limpeza'],
  },
  {
    id: '4',
    name: 'Refúgio Zen',
    description: 'Arquitetura balinesa no coração do Rosa. Um espaço projetado para paz e tranquilidade, com áreas de meditação e um jardim tropical exuberante.',
    pricePerNight: 720,
    capacity: 6,
    bedrooms: 3,
    bathrooms: 2,
    imageUrl: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=800&auto=format&fit=crop',
    features: ['Área de Yoga', 'Fonte de Água', 'Cozinha Completa', 'Pet Friendly', 'Varanda Ampla'],
  }
];

export const GALLERY_IMAGES = [
  'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600&auto=format&fit=crop', // Classic beach
  'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?q=80&w=400&auto=format&fit=crop', // Waves
  'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?q=80&w=600&auto=format&fit=crop', // Surfer vibe
  'https://images.unsplash.com/photo-1520483602335-3a2ac9d464ba?q=80&w=600&auto=format&fit=crop', // Sunset silhouette
  'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=600&auto=format&fit=crop', // Scuba/Water
  'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?q=80&w=400&auto=format&fit=crop', // Birds/Nature
  'https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?q=80&w=600&auto=format&fit=crop', // Cozy house interior
  'https://images.unsplash.com/photo-1414609245224-afa02bfb3fda?q=80&w=600&auto=format&fit=crop', // Cocktail beach
];

export const SYSTEM_INSTRUCTION = `
Você é o "Rosa Concierge", um assistente virtual especialista em aluguel de casas de luxo na Praia do Rosa, Santa Catarina, especificamente na região do Caminho do Rei.
Seu tom é acolhedor, sofisticado e prestativo.
Você deve ajudar os usuários a escolherem entre as casas disponíveis (Villa do Sol Poente, Cabana da Mata Atlântica, Casa das Ondas, Refúgio Zen).
Use as informações fornecidas sobre cada casa para fazer recomendações.
Você também conhece bem a região: recomenda trilhas, restaurantes locais (como o Tigre Asiático, Bistrô da Pedra), e a melhor época para ver baleias (julho a novembro).
Sempre que possível, mencione a beleza do pôr do sol e a exclusividade do Caminho do Rei.
Destaque a proximidade com a praia, as ondas perfeitas para o surf e as piscinas naturais.
Responda de forma concisa, mas encantadora.
`;