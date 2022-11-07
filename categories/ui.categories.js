
//Display categories using li tag
function printCategories(categories, container) {
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

//Category list animation
const toggleCategories = (categoriesList) => {
  categoriesList.addEventListener('click', (e) => {
    const categoriesItems = categoriesList.children;

    for (let i = 0; i < categoriesItems.length; i++) {
      categoriesItems[i].classList.remove('active')
    }

    if (e.target && e.target.tagName === 'BUTTON') {
      let item = e.target;

      item.parentElement.classList.add('active')
    }
  })
}


export { printCategories, toggleCategories }