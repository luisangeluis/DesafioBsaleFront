function printProducts(products, container) {
  // console.log(products)
  let html = '';
  products.forEach(product => {
    html += `<div class="col-md-6 col-lg-4 my-2">
                <div class="card">
                  <img src="${product.urlImage}" class="img-fluid card-img-top" alt="${product.name}">
                  <div class="card-body d-flex flex-column justify-content-end">
                  
                    <h5 class="card-title">${product.name}</h5>
                    <h6 class="card-subtitle mb-2 fw-bolder text-primary">Price: $${product.price}</h6>

                    <p class="card-text text-muted">Discount: ${product.discount}%</p>
                    <div class="text-end"></div>
                  </div>
                </div>
              </div>`
  });

  container.innerHTML = html;
}

const reviewTerm = () => {
  const form = document.querySelector('#search-form');
  const inputForm =document.querySelector('#search-term');
  let term = inputForm.value;

  term =term.trim();

  if(term.length){
    return term;

  }else{
    form.appendChild(createAlert('Type the term to search'))

    setTimeout(()=>form.removeChild(form.lastChild),2500)
    return false;
  }

}

const createAlert=(message)=>{
    const alert = document.createElement('div')
    alert.classList.add('alert','alert-secondary','position-absolute')
    alert.textContent = message;

    return alert;
}


export { printProducts, reviewTerm }

