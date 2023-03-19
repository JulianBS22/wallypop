export const createAnuncio = async (anuncioContent) => {

    const newAnuncio = {
      content: anuncioContent
    }
  
    const token = localStorage.getItem('token')
  
    const response = await fetch('http://localhost:8000/api/anuncio', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify(newAnuncio)
    })
  
    if (!response.ok) {
      throw new Error('Error creando anuncio')
    }
  return response;
  }
  //throw new Error(`Error creando anuncio. Status: ${response.status}, Message: ${await response.text()}`);