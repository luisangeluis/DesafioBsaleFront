function printCategories(categories, container) {
  // console.log(categories)
  let html = `<li class="list-group-item active d-flex">
                <button class="btn fw-bolder flex-grow-1" onclick="getProducts()">
                  Todos
                </button>
              </li>`;
  categories.forEach(category => {
    html += `<li class="list-group-item d-flex">
              <button class="btn fw-bolder flex-grow-1" onclick="getProductsByCategoryId(${category.id})">
                ${category.name}
              </button>
            </li>`
  });

  container.innerHTML = html;
}

const selectItem = (items, clase) => {
  items.forEach(item => {
    items.classlist.remove(`${clase}`)
  })
  // item.classlist.add('clase')
}

const toggleCategories = (categoriesList) => {
  categoriesList.addEventListener('click', (e) => {
    const categoriesItems = categoriesList.children;

    // console.log(categoriesItems.length);

    for (let i = 0; i < categoriesItems.length; i++) {
      categoriesItems[i].classList.remove('active')
      // console.log(categoriesItems[i].classList);
    }

    if (e.target && e.target.tagName === 'BUTTON') {
      // console.log('hola');
      let item = e.target;
      item.parentElement.classList.add('active')

    }

  })

}


export { printCategories, selectItem, toggleCategories }