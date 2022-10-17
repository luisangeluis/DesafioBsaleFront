import { printProducts, reviewTerm } from './ui.products.js'

const productsContainer = document.querySelector('.products-container');
const loader = document.querySelector('.spinner-grow');
const baseUrl = 'https://desafiobsaleback-production.up.railway.app'

const getProducts = () => {
  loader.style.visibility ='visible';
  axios.get(baseUrl + '/api/v1/products')
    .then(res => {
      // console.log(res.data.response)
      let data = res.data.response;
      printProducts(data, productsContainer);
    })
    .catch(error => console.log(error.message))
    .finally(()=>loader.style.visibility='hidden')

}

const getProductsByCategoryId = (id) => {
  loader.style.visibility ='visible';

  axios.get(baseUrl + `/api/v1/categories/${id}/products`)
    .then(res => {
      // console.log(res.data.response)
      let data = res.data.response;
      printProducts(data, productsContainer);
    })
    .catch(error => console.log(error.message))
    .finally(()=>loader.style.visibility='hidden')

}

const getProductsByTerm = () => {

  const term = reviewTerm()
  loader.style.visibility ='visible';

  if (term) {
    axios.get(baseUrl + `/api/v1/products/term/${term}`)
      .then(res => {
        let data = res.data.response

        if (data.length) printProducts(data, productsContainer);
        else productsContainer.textContent = 'SIN RESULTADOS';
      })
      .catch(error => console.log(error.message))
      .finally(()=>loader.style.visibility='hidden')

  }
}

export { getProducts, getProductsByCategoryId, getProductsByTerm }
