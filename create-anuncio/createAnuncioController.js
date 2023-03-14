import { createAnuncio } from "./createAnuncio";

export const createTweetController = async (createAnuncioFormElement) => {
  createAnuncioFormElement.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(createAnuncioFormElement);
    const anuncioContent = formData.get('AnuncioContent');

    try {
      await createTweet(anuncioContent)
      window.location = '/'
    } catch (error) {
      alert(error)
    }
  })
}