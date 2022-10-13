function printProductsToCar(products, container) {
  console.log(products)
  let html = '';
  products.forEach(product => {
    html += `<div class="col-md-6 col-lg-4 my-2">
                <div class="card">
                  <div class="card-body d-flex flex-column justify-content-end">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">${product.address.city}</p>
                    <div class="text-end"></div>
                  </div>
                </div>
              </div>`
  });

  container.innerHTML = html;
}


export { printProductsToCar }

