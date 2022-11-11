import { getProducts, getProductsByCategoryId, getProductsByTerm } from "./products/index.products.js";
import { getCategories } from './categories/index.categories.js';

//Obteniendo las categorias.
getCategories();
//Obteniendo los productos.
getProducts();


window.getProducts = getProducts;
window.getProductsByCategoryId = getProductsByCategoryId;
window.getProductsByTerm = getProductsByTerm;
window.getProductsByTerm = getProductsByTerm;
