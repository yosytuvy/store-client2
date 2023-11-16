export default interface CategoryInterface {
  name: categoryType;
  rating: number;
  image: string;
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
