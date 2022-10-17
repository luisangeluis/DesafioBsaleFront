import { printCategories, selectItem,toggleCategories } from './ui.categories.js'

const categoriesList = document.querySelector('.categories-list');

const baseUrl = 'https://desafiobsaleback-production.up.railway.app'

const getCategories = () => {

  axios.get('https://desafiobsaleback-production.up.railway.app/api/v1/categories')
    .then(res => {
      let categories = res.data.response;
      printCategories(categories, categoriesList)

      // console.log(categoriesList.children);
      toggleCategories(categoriesList)
      // categoriesList.addEventListener('click', (e) => {
      //   const categoriesItems = categoriesList.children;

      //   console.log(categoriesItems.length);

      //   for (let i = 0; i < categoriesItems.length; i++) {
      //     categoriesItems[i].classList.remove('active')
      //     // console.log(categoriesItems[i].classList);
      //   }

      //   if (e.target && e.target.tagName === 'BUTTON') {
      //     console.log('hola');
      //     let item = e.target;
      //     item.parentElement.classList.add('active')

      //   }

      // })

    })
    .catch(error => error.message)
}


export { getCategories }