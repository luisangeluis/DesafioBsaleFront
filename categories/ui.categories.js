/**
 * Esta funcion imprime la respuesta de las categorias y las muestra en la pagina en la etiqueta
 * del DOM que le indiques.
 * @param {Object} categories Recibe un objeto con las categorias obtenidas de la bd.
 * @param {Object} container  Recibe un element del DOM.
 */
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
/**
 * Esta funcion agrega el evento click a una coleccion de elementos del DOM
 * esto para agregar la clase active al elemento seleccionado y darle una animacion.
 * @param {Object} categoriesList Recibe una colección de elementos del DOM.
 */
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

const removeClass = (elements, theClass) => {
  for (let i = 0; i < elements.length; i++) {
    elements[i].classList.remove(theClass)
  }
}

export { printCategories, toggleCategories, removeClass }