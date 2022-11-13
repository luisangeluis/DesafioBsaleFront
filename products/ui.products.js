/**
 * Esta funcion recibe una lista de productos para renderizarla con elementos card en la pagina.
 * @param {Object} products Recibe un objeto con  elementos para renderizar.
 * @param {Object} container Recibe un element del DOM. 
 */
function printProducts(products, container) {
  let html = '';
  products.forEach(product => {
    html += `<div class="col-md-6 col-lg-4 my-2">
                <div class="card box-shadow-one from-left_animation p-1 p-md-2">
                  <img src="${product.urlImage ? product.urlImage : './assets/images/image-not-available.jpg'}" class="img-fluid card-img-top" alt="${product.name}">
                  <div class="card-body d-flex flex-column justify-content-end alig-items-center">
                    ${product.discount==0?'':`<p class="card-text text-shadow-one fw-bolder m-0">Discount: ${product.discount}%</p>`}
                    <h5 class="card-title">${product.name}</h5>
                    <h6 class="card-subtitle mb-2 fw-bolder color-blue">Price: $${product.price}</h6>
                  </div>
                </div>
              </div>`
  });

  container.innerHTML = html;
}

/**
 * Esta funcion Revisa el nombre ingresado por el usuario para buscar un producto.
 * Le quita los espacios en blanco y revisa que no este vacio.
 * @returns Termino a buscar || false
 */
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

/**
 * Esta funcion ingresa el mensaje que mandes como parametro a una alerta de bootstrap y retorna la misma.
 * @param {String} message Recibe un mensaje para mostrarlo en pantalla con una alerta.
 * @returns Un alerta con clases de bootstrap.
 */
const createAlert=(message)=>{
    const alert = document.createElement('div')
    alert.classList.add('alert','bg-red','position-absolute','fw-bold','to-load_animation','from-up_animation')
    alert.textContent = message;

    return alert;
}

export { printProducts, reviewTerm }

