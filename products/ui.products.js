//Renders the products on cards
function printProducts(products, container) {
  let html = '';
  products.forEach(product => {
    html += `<div class="col-md-6 col-lg-4 my-2">
                <div class="card">
                  <img src="${product.urlImage ? product.urlImage : './assets/images/image-not-available.jpg'}" class="img-fluid card-img-top" alt="${product.name}">
                  <div class="card-body d-flex flex-column justify-content-end alig-items-center">
                    ${product.discount==0?'':`<p class="card-text color-red fw-bold">Discount: ${product.discount}%</p>`}
                    
                      <h5 class="card-title">${product.name}</h5>
                      <h6 class="card-subtitle mb-2 fw-bolder text-primary">Price: $${product.price}</h6>
                    
                    <div class="text-end"></div>
                  </div>
                </div>
              </div>`
  });

  container.innerHTML = html;
}

//Checks the term to search and returns it, otherwise it sends an alert.
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

//Sends an alert.
const createAlert=(message)=>{
    const alert = document.createElement('div')
    alert.classList.add('alert','alert-secondary','position-absolute')
    alert.textContent = message;

    return alert;
}

export { printProducts, reviewTerm }

