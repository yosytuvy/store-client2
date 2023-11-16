import { ProductInCartInterface } from "../interfaces/cartItemInterface";

export const saveCartToLocalStorage = (cart: ProductInCartInterface[]) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

export const getCartFromLocalStorage = () => {
  const cart = localStorage.getItem("cart");
  if (!cart) return null;
  return JSON.parse(cart) as ProductInCartInterface[];
};

export const addProductToCart = (product: ProductInCartInterface) => {
  const cart = getCartFromLocalStorage();
  if (!cart) return saveCartToLocalStorage([product]);
  cart.push(product);
  saveCartToLocalStorage(cart);
};

export const addQuantityOfProduct = (productId: string) => {
  let cart = getCartFromLocalStorage();
  if (!cart) return;
  cart = cart.map((product) => {
    if (product.productId === productId) {
      product.quantity += 1;
    }
    return product;
  });
  saveCartToLocalStorage(cart)
};

export const subQuantityOfProduct = (productId: string) => {
   let cart = getCartFromLocalStorage();
   if (!cart) return;
   cart = cart.map((product) => {
     if (product.productId === productId) {
       product.quantity -= 1;
     }
     return product;
   });
   saveCartToLocalStorage(cart)
 };
