const ROUTES = {
    login: "/login/:signed?",
    signup: "/signup",
    category: "/category/:categoryName/:productToCompareId?",
    productPage: "/productPage/:productId",
    cartPage: "/cartPage",
    compare: "/compare/:productId/:productToCompareId",
    checkout: "/checkout"
};

export default ROUTES;
