export interface House {
  id: string;
  name: string;
  description: string;
  pricePerNight: number;
  capacity: number;
  bedrooms: number;
  bathrooms: number;
  imageUrl: string;
  images: string[]; // Array of additional images
  features: string[];
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export enum ViewType {
  OCEAN = 'Vista Mar',
  GARDEN = 'Vista Jardim',
  PANORAMIC = 'Vista Panorâmica',
}