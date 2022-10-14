
function printCategories(categories, container) {
  console.log(categories)
  let html = `<li class="list-group-item active">
                <button class="btn" onclick="getProducts()">
                  Todos
                </button>
              </li>`;
  categories.forEach(category => {
    html += `<li class="list-group-item">
              <button class="btn" onclick="getProductsByCategoryId(${category.id})">
                ${category.name}
              </button>
            </li>`
  });

  container.innerHTML = html;
}

const selectItem = (items,clase) => {
  items.forEach(item=>{
    items.classlist.remove(`${clase}`)
  })
  // item.classlist.add('clase')
}

export { printCategories,selectItem }