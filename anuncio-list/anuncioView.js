export function buildAnuncioView(anuncio) {
  const newAnuncioElement = document.createElement('article');
  newAnuncioElement.classList.add('anuncio');
  console.log(anuncio.date);
  const anuncioDate = new Date(anuncio.date);

  newAnuncioElement.innerHTML = `
    <div class="anuncio-info">
    
      <label>${anuncio.title}</label>
      <img src="${anuncio.image}" />
    </div>
    <p>${anuncio.content} ${anuncioDate.toLocaleString()}</p>
    <p>${anuncio.venta ? 'Se vende' : 'Se compra'}</p>
    <p>${anuncio.precio}€ </p>
    
  `;


  return newAnuncioElement;
};

export function buildSpinnerView() {
  return `<div class="spinner"><div></div><div></div><div></div></div>`;
};

export function buildErrorLoadingAnuncios() {
  return `<p class="load-error">Ha habido un problema cargando los anuncios. Inténtalo de nuevo más tarde</p>`;
};

export function buildEmptyAnunciosList() {
  return `<p>No hay resultados disponibles</p>`;
};
