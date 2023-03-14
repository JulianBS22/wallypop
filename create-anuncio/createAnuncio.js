export const createAnuncio = async (anuncioContent) => {

    const newAnucio = {
      content: anuncioContent
    }
  
    const token = localStorage.getItem('token')
  
    const response = await fetch('http://localhost:8000/api/anuncio', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify(newAnucio)
    })
  
    if (!response.ok) {
      throw new Error('Error creando anuncio')
    }
  
  }