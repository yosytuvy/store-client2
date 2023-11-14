interface ProductInterface {
  _id?: string;
  name: string;
  category: categoryType;
  price: number;
  rating: number;
  image: string;
  company: string;
  screen?: string | null;
  processor?: string | null;
  battery?: string | null;
  lens?: string | null;
  inches?: number | null;
  graphicCard?: string | null;
  output?: string | null;
  storage?: string | null;
  engine?: string | null;
  capacity?: string | null;
  weight?: string | null;
  connections?: string | null;
}

type categoryType =
  | "phones"
  | "cameras"
  | "screens"
  | "computers"
  | "refrigerators"
  | "AC"
  | "game consoles"
  | "watches";

export default ProductInterface;
