import CategoryInterface from "../features/products/interfaces/categoryInterface";
import ProductInterface from "../features/products/interfaces/productInterface";

const getTopFive = (arr: CategoryInterface[] | ProductInterface[]) =>
  [...arr].sort((a, b) => b.rating! - a.rating!).slice(0, 5);
export default getTopFive;
