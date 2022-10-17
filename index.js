import { getProducts, getProductsByCategoryId, getProductsByTerm } from "./products/index.products.js";
import { reviewTerm } from './products/ui.products.js';
import { getCategories } from './categories/index.categories.js';
import { toggleCategories } from './categories/ui.categories.js';

getCategories();
getProducts();

// toggleCategories();


window.getProducts = getProducts;
window.getProductsByCategoryId = getProductsByCategoryId;
window.getProductsByTerm = getProductsByTerm;
window.getProductsByTerm = getProductsByTerm;
