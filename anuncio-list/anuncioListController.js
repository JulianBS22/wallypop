
import { pubSub } from "./pubSub.js";
import { getAnuncios } from "./anuncios.js";
import { buildAnuncioView, buildSpinnerView, buildErrorLoadingAnuncios, buildEmptyAnuncioList } from "./anuncioView.js";

export async function anuncioListController(anuncioListElement) {
  anuncioListElement.innerHTML = buildSpinnerView();
  let anuncios = [];

  try {
    anuncios = await getAnuncios()
    dispatchCustomEvent('Los anuncios se cargaron correctamente', anuncioListElement)
    pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, 'Los tweets se cargaron correctamente')
    if (anuncios.length > 0) {
      drawAnuncios(anuncios, anuncioListElement);
    } else {
      showEmptyMessage(anuncioListElement);
    }

  } catch (error) {
    
    dispatchCustomEvent('No hemos podido cargar los anuncios', anuncioListElement)
  } finally {
    hideSpinner(anuncioListElement)
  }

}

function hideSpinner(anuncioListElement) {
  const spinnerElement = anuncioListElement.querySelector('.spinner');
  spinnerElement.classList.add('hide');

  
}

function drawAnuncios(anuncios, anuncioListElement) {
  for (const anuncio of anuncios) {
    const newAnuncioElement = buildAnuncioView(anuncio);
    anuncioListElement.appendChild(newAnuncioElement)
  }
}

function showEmptyMessage(anuncioListElement) {
  anuncioListElement.innerHTML = buildEmptyAnuncioList();
}

function dispatchCustomEvent(message, anuncioListElement) {
  const event = new CustomEvent('newNotification', {
    detail: {
      message: message
    }
  })

  anuncioListElement.dispatchEvent(event);
}