export interface ProductInCartInterface {
    productId: string;
    quantity: number
}
export interface CartItemInterface {
    userId?: string;
    products: Array<ProductInCartInterface>
}