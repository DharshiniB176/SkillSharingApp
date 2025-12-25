export interface Course {
  id: number;
  title: string;
  author: string;
  image: string;
  hours: number;
  minutes: number;
  rating: number;
  price: number;
  oldPrice?: number;
}
