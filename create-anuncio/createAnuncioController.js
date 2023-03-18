import {createAnuncio} from "./createAnuncio.js"

export const createAnuncioController = async (createAnuncioFormElement) => {
  createAnuncioFormElement.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(createAnuncioFormElement);
    const anuncioContent = formData.get('AnuncioContent');

    try {
      await createAnuncio(anuncioContent)
      window.location = '/'
    } catch (error) {
      alert(error)
    }
  })
};