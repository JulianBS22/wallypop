
export const buildAnuncioDetail = (anuncio) => {
    const anuncioDate = new Date(anuncio.updatedAt)
    return `
      <p>${anuncio.content}  </p>
      <button id="deleteAnuncio">borrar Anuncio</button>
    `
  }
  //${anuncioDate.toISOString()}