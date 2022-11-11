//Metodos ui para renderizar elementos en el DOM de forma dinamica
import { printCategories, toggleCategories } from './ui.categories.js'

//Contenedor para renderizar las categorias.
const categoriesList = document.querySelector('.categories-list');
//Url base para las peticiones.
const baseUrl = 'https://desafiobsaleback-production.up.railway.app'

/**
 * Obtiene todas las categorias de la bd.
 */
const getCategories = () => {
  axios.get(`${baseUrl}/api/v1/categories`)
    .then(res => {
      let categories = res.data.response;
      printCategories(categories, categoriesList)
      toggleCategories(categoriesList)
    })
    .catch(error => error.message)
}


export { getCategories }