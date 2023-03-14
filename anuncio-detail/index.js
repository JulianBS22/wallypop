import { anuncioDetailController } from "./anuncioDetailController.js";

// leer de la url el id del tweet
const params = new URLSearchParams(window.location.search)
const anuncioId = params.get('anuncioId');

// si el queryparam no existe, haremos una redirección al listado de tweets
if (!anuncioId) {
  window.location = '/'
} else {
  // crearemos un controlador donde le pasaremos dicho id
  const anuncioDetailElement = document.querySelector('.anuncio-detail');

  anuncioDetailController(anuncioDetailElement, anuncioId)
}
