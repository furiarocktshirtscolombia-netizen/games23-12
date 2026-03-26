export interface Game {
  id: string;
  name: string;
  level: string;
  category: string;
  description: string;
  link: string;
  thumbnail: string;
  isNew?: boolean;
  isFeatured?: boolean;
}
