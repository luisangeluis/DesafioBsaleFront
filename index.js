import { getProducts, getProductsByCategoryId, getProductsByTerm } from "./products/index.products.js";
import { getCategories } from './categories/index.categories.js';


getCategories();
getProducts();


window.getProducts = getProducts;
window.getProductsByCategoryId = getProductsByCategoryId;
window.getProductsByTerm = getProductsByTerm;
window.getProductsByTerm = getProductsByTerm;
