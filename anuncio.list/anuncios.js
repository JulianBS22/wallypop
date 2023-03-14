export async function getAnuncios() {
    const anunciosUrlOK = 'http://localhost:8000/api/anuncios';
    
    const response = await fetch(anunciosUrlOK);
    const anuncios = await response.json();
  
    return anuncios
  }