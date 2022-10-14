import { getProducts,getProductsByCategoryId } from "./products/index.products.js"
import {getCategories,selectCategory} from './categories/index.categories.js'

getCategories();
getProducts();
selectCategory();

window.getProducts = getProducts;
window.getProductsByCategoryId = getProductsByCategoryId;
