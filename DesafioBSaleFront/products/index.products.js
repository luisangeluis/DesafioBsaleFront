import{printProductsToCar} from './ui.products.js'

const productsContainer = document.querySelector('.products-container');

const getProducts= ()=> {
  axios.get('https://jsonplaceholder.typicode.com/users/')
    .then(res => {
      console.log(res.data)
      let data = res.data;
      printProductsToCar(data,productsContainer);
    })
    .catch(error => console.log(error.message))

}

export { getProducts }
