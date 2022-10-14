import{printProducts} from './ui.products.js'

const productsContainer = document.querySelector('.products-container');

const getProducts= ()=> {
  axios.get('https://jsonplaceholder.typicode.com/posts/')
    .then(res => {
      console.log(res.data)
      let data = res.data;
      printProducts(data,productsContainer);
    })
    .catch(error => console.log(error.message))

}

const getProductsByCategoryId=(id)=>{
  axios.get(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
  .then(res => {
    console.log(res.data)
    let data = res.data;
    printProducts(data,productsContainer);
  })
  .catch(error => console.log(error.message))
}

export { getProducts,getProductsByCategoryId }
