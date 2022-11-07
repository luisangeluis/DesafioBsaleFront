import { printCategories, toggleCategories } from './ui.categories.js'

const categoriesList = document.querySelector('.categories-list');
const baseUrl = 'https://desafiobsaleback-production.up.railway.app'

//Get all categories
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