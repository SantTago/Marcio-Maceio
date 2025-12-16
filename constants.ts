import { House } from './types';

export const HOUSES: House[] = [
  {
    id: '1',
    name: 'Villa do Sol Poente',
    description: 'Localizada no coração da vila, esta villa oferece a vista mais espetacular do pôr do sol na Praia do Maceió. Perfeita para casais ou pequenas famílias que buscam privacidade e luxo rústico.',
    pricePerNight: 850,
    capacity: 4,
    bedrooms: 2,
    bathrooms: 2,
    imageUrl: 'https://i.ibb.co/C32Nm6NG/image-maceio-camocim-ap-camocim-praia-bangalokite13-2.jpg',
    images: [
        'https://i.ibb.co/C32Nm6NG/image-maceio-camocim-ap-camocim-praia-bangalokite13-2.jpg',
        'https://i.ibb.co/VW45Vzvp/images-1.jpg',
        'https://i.ibb.co/M5WGhz71/images.jpg'
    ],
    features: ['Vista Panorâmica', 'Jacuzzi', 'Wi-Fi Starlink', 'Cozinha Gourmet', 'Ar Condicionado'],
  },
  {
    id: '2',
    name: 'Cabana dos Coqueirais',
    description: 'Imersa na natureza, cercada por coqueiros nativos e dunas. Uma experiência de desconexão total com conforto moderno. A apenas 5 minutos de caminhada do mar.',
    pricePerNight: 550,
    capacity: 2,
    bedrooms: 1,
    bathrooms: 1,
    imageUrl: 'https://i.ibb.co/nsQ2K88x/images-3.jpg',
    images: [
        'https://i.ibb.co/nsQ2K88x/images-3.jpg',
        'https://i.ibb.co/XZpy7J4j/cb727d824bcaae1855ea33e590acf37f.jpg',
        'https://i.ibb.co/WvRK63wV/c6b1ca419bff432ba4f948aa676208cf.webp'
    ],
    features: ['Deck de Madeira', 'Rede de Descanso', 'Churrasqueira', 'Smart TV', 'Estacionamento'],
  },
  {
    id: '3',
    name: 'Casa das Marés',
    description: 'Uma casa espaçosa com design aberto para aproveitar a brisa do mar. Ideal para grupos de kitesurfistas. Guarderia para equipamentos e área de lazer integrada.',
    pricePerNight: 1500,
    capacity: 10,
    bedrooms: 5,
    bathrooms: 4,
    imageUrl: 'https://i.ibb.co/99fHm35V/Camocim-4-1-1024x732.jpg',
    images: [
        'https://i.ibb.co/99fHm35V/Camocim-4-1-1024x732.jpg',
        'https://i.ibb.co/V0KsSZvK/f469e07ac84a4569a91a855b3b4b475d.webp',
        'https://i.ibb.co/wFgy3C83/579396475-18125922973500076-2476353317837443599-n.jpg'
    ],
    features: ['Piscina Privativa', 'Guarderia de Kite', 'Sala de Jogos', 'Churrasqueira', 'Serviço de Limpeza'],
  },
  {
    id: '4',
    name: 'Refúgio das Dunas',
    description: 'Arquitetura praiana no melhor ponto do Maceió. Um espaço projetado para paz e tranquilidade, com áreas de meditação e um jardim de areia exuberante.',
    pricePerNight: 720,
    capacity: 6,
    bedrooms: 3,
    bathrooms: 2,
    imageUrl: 'https://i.ibb.co/ccwF8jck/f69dd613-36d2-4abf-b2da-6aa5f7e64a62.avif',
    images: [
        'https://i.ibb.co/ccwF8jck/f69dd613-36d2-4abf-b2da-6aa5f7e64a62.avif',
        'https://i.ibb.co/hjGNVL3/Praia-da-Tatajuba-no-Cear.jpg',
        'https://i.ibb.co/KjzbVYpX/470229171-18095028463500076-8977065317194053441-n.jpg'
    ],
    features: ['Área Zen', 'Ducha Externa', 'Cozinha Completa', 'Pet Friendly', 'Varanda Ampla'],
  }
];

export const GALLERY_IMAGES = [
  'https://i.ibb.co/XZpy7J4j/cb727d824bcaae1855ea33e590acf37f.jpg',
  'https://i.ibb.co/VW45Vzvp/images-1.jpg',
  'https://i.ibb.co/M5WGhz71/images.jpg',
  'https://i.ibb.co/WvRK63wV/c6b1ca419bff432ba4f948aa676208cf.webp',
  'https://i.ibb.co/wFgy3C83/579396475-18125922973500076-2476353317837443599-n.jpg',
  'https://i.ibb.co/V0KsSZvK/f469e07ac84a4569a91a855b3b4b475d.webp',
  'https://i.ibb.co/hjGNVL3/Praia-da-Tatajuba-no-Cear.jpg'
];

export const SYSTEM_INSTRUCTION = `
Você é o assistente virtual dos "Aluguéis do Márcio Mota", especialista em casas de temporada na Praia do Maceió, Camocim, Ceará.
Seu tom é acolhedor, praiano e prestativo.
Você deve ajudar os usuários a escolherem entre as casas disponíveis (Villa do Sol Poente, Cabana dos Coqueirais, Casa das Marés, Refúgio das Dunas).
Use as informações fornecidas sobre cada casa para fazer recomendações.
Você também conhece bem a região: recomenda barracas de praia locais, passeios de buggy pelas dunas, e destaca que a região é perfeita para Kitesurf devido aos ventos constantes.
Sempre que possível, mencione a tranquilidade da vila de pescadores, a beleza dos coqueirais e o mar morno.
Destaque a proximidade com a praia e a natureza rústica.
Responda de forma concisa, mas encantadora, sempre com um toque de hospitalidade cearense.
`;