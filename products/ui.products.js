function printProducts(products, container) {
  console.log(products)
  let html = '';
  products.forEach(product => {
    html += `<div class="col-md-6 col-lg-4 my-2">
                <div class="card">
                  <div class="card-body d-flex flex-column justify-content-end">
                  
                    <h5 class="card-title">${product.title}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">User:${product.userId}</h6>

                    <p class="card-text">${product.body}</p>
                    <div class="text-end"></div>
                  </div>
                </div>
              </div>`
  });

  container.innerHTML = html;
}


export { printProducts }

