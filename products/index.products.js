//Elementos ui para renderizar elementos en el DOM de forma dinamica.
import { printProducts, reviewTerm } from './ui.products.js'

//Contenedor para renderizar los productos
const productsContainer = document.querySelector('.products-container');

//Contenedor para renderizar la pantalla de carga.
const loader2 = document.querySelector('.spinner-wrap');

//Url base para peticiones.
const baseUrl = 'https://desafiobsaleback-production.up.railway.app'

/**
 * Obtiene todos los productos de la bd.
 */
const getProducts = () => {
  loader2.classList.add('d-block')

  axios.get(baseUrl + '/api/v1/products')
    .then(res => {
      let data = res.data.response;
      printProducts(data, productsContainer);
    })
    .catch(error => console.log(error.message))
    .finally(() =>loader2.classList.remove('d-block'))
}

/**
 * Esta funcion obtiene todos los productos de una categoria en especifico.
 * @param {Integer} id Obtiene el id de una categoria.
 */
const getProductsByCategoryId = (id) => {
  // loader.style.visibility = 'visible';
  loader2.classList.add('d-block')

  axios.get(baseUrl + `/api/v1/categories/${id}/products`)
    .then(res => {
      // console.log(res.data.response)
      let data = res.data.response;
      printProducts(data, productsContainer);
    })
    .catch(error => console.log(error.message))
    .finally(() =>loader2.classList.remove('d-block'))
}

/**
 * Esta funcion busca un producto por su nombre y devuelve los resultados
 * parecidos al nombre ingresado.
 */
const getProductsByTerm = () => {
  const term = reviewTerm()

  if (term) {
    // loader.style.visibility = 'visible';
    loader2.classList.add('d-block')

    axios.get(baseUrl + `/api/v1/products/term/${term}`)
      .then(res => {
        let data = res.data.response

        if (data.length) printProducts(data, productsContainer);
        else productsContainer.innerHTML = '<h3 class="fw-bold">No products found.</h3>';
      })
      .catch(error => console.log(error.message))
      .finally(() =>loader2.classList.remove('d-block'))
    }
}

export { getProducts, getProductsByCategoryId, getProductsByTerm }
