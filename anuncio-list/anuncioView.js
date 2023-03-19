export function buildAnuncioView(anuncio) {
    const newAnuncioElement = document.createElement('article');
    newAnuncioElement.classList.add('anuncio')
    const anuncioDate = new Date(anuncio.date)
  
    newAnuncioElement.innerHTML = `
      <div class="user-info">
        <span>${anuncio.handle}</span>
        <img src="${anuncio.avatar}" />
      </div>
      <p>${anuncio.content} - ${anuncioDate.toISOString()}</p>
      
    `;
  
    return newAnuncioElement;
  }
  
  export function buildSpinnerView() {
    return `<div class="spinner"><div></div><div></div><div></div></div>`
  }
  
  export function buildErrorLoadingAnuncios() {
    return `<p class="load-error">Ha habido un problema cargando los anuncios. Inténtalo de nuevo más tarde</p>`
  }
  
  export function buildEmptyAnunciosList() {
    return `<p>No hay resultados disponibles</p>`
  };