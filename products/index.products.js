import { printProducts, reviewTerm } from './ui.products.js'

const productsContainer = document.querySelector('.products-container');
const loader2 = document.querySelector('.spinner-wrap');
const baseUrl = 'https://desafiobsaleback-production.up.railway.app'

//Get all Products
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

//Get products by their category id
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


//Get products by name similar to the term.
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
