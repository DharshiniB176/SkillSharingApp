export interface PopularCourse {
  id: number;
  category: string;
  title: string;
  image: string;
  rating: number;
  hours: string;
  lessons: number;
  seats: number;
  price: number;
  oldPrice?: number;
}