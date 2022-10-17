import { printProducts, reviewTerm } from './ui.products.js'

const productsContainer = document.querySelector('.products-container');
const baseUrl = 'https://desafiobsaleback-production.up.railway.app'

const getProducts = () => {
  axios.get(baseUrl + '/api/v1/products')
    .then(res => {
      // console.log(res.data.response)
      let data = res.data.response;
      printProducts(data, productsContainer);
    })
    .catch(error => console.log(error.message))

}

const getProductsByCategoryId = (id) => {
  axios.get(baseUrl + `/api/v1/categories/${id}/products`)
    .then(res => {
      // console.log(res.data.response)
      let data = res.data.response;
      printProducts(data, productsContainer);
    })
    .catch(error => console.log(error.message))
}

const getProductsByTerm = () => {
  const term = reviewTerm()

  if (term) {
    axios.get(baseUrl + `/api/v1/products/term/${term}`)
      .then(res => {
        let data = res.data.response

        if (data.length) printProducts(data, productsContainer);
        else productsContainer.textContent = 'SIN RESULTADOS';
      })
      .catch(error => console.log(error.message))
  }
}

export { getProducts, getProductsByCategoryId, getProductsByTerm }
