import { printCategories, selectItem } from './ui.categories.js'

const categoriesList = document.querySelector('.categories-list');

const getCategories = () => {
  axios.get('https://jsonplaceholder.typicode.com/users/')
    .then(res => {
      // console.log(res.data)
      let categories = res.data;
      printCategories(categories, categoriesList)
    })
    .catch(error => error.message)
}

const selectCategory = () => {
  const list = categoriesList.children;
  console.log(list);
 

}

// selectCategory();

// const selectCategory =()=>{

//   let list = categoriesList.children;


// }

export { getCategories, selectCategory }