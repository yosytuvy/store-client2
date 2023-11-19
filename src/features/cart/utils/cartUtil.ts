import { ProductInCartInterface } from "../interfaces/cartItemInterface";

export const saveCartToLocalStorage = (cart: ProductInCartInterface[]) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

export const getCartFromLocalStorage = () => {
  const cart = localStorage.getItem("cart");
  if (!cart) return null;
  return JSON.parse(cart) as ProductInCartInterface[];
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
  saveCartToLocalStorage(cart);
};

export const subQuantityOfProduct = (productId: string) => {
  let cart = getCartFromLocalStorage();
  if (!cart) return;
  cart = cart.map((product) => {
    if (product.productId === productId && product.quantity > 0) {
      product.quantity -= 1;
    }
    return product;
  });
  saveCartToLocalStorage(cart);
};

export const getQuantityOfProduct = (productId: string) => {
  const product = getCartFromLocalStorage()?.find((product) => {
    return product.productId === productId;
  });
  return product?.quantity;
};

export const getProductsIds = () => {
  const cart = localStorage.getItem("cart");
  if (!cart) return null;
  const parsedCart = JSON.parse(cart) as ProductInCartInterface[];
  return parsedCart.map((product) => product.productId) as string[];
};

export const addProductToCart = (product: ProductInCartInterface) => {
  const cart = getCartFromLocalStorage();
  if (!cart) return saveCartToLocalStorage([product]);
  const productExist = cart.find(
    (productInCart) => productInCart.productId === product.productId
  );
  if (productExist) return null;
  cart.push(product);
  saveCartToLocalStorage(cart);
};

export const removeProductFromCart = (productId: string) => {
  let cart = getCartFromLocalStorage();
  const index = cart!.findIndex((product) => product.productId === productId);
  cart = cart!.splice(index!, 0);
  saveCartToLocalStorage(cart);
};
