function printCategories(categories, container) {
  console.log(categories)
  let html = '';
  categories.forEach(category => {
    html += `<li class="list-group-item">
              ${category.name}
            </li>`
  });

  container.innerHTML = html;
}

export { printCategories }