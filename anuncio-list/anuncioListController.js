import { pubSub } from "../pubSub.js";
import { getAnuncios } from "./anuncios.js";
import { buildAnuncioView, buildSpinnerView, buildErrorLoadingAnuncios, buildEmptyAnunciosList } from "./anuncioView.js";

export async function anuncioListController(anuncioListElement) {
  anuncioListElement.innerHTML = buildSpinnerView();
  let anuncios = [];

  try {
    anuncios = await getAnuncios()
    dispatchNewNotification('Los anuncios se cargaron correctamente', anuncioListElement)
    if (anuncios.length > 0) {
      drawAnuncios(anuncios, anuncioListElement);
    } else {
      showEmptyMessage(anuncioListElement);
    }
  
  } catch (error) {
    dispatchNewNotification('No hemos podido cargar los anuncios', anuncioListElement)
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
  anuncioListElement.innerHTML = buildEmptyAnunciosList();
}

function dispatchNewNotification(message, anuncioListElement) {
  const event = new CustomEvent('newNotification', {
    detail: {
      message: message
    }
  })

  anuncioListElement.dispatchEvent(event);

  pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, message); // <-- agregamos esto para mostrar la notificación
}

/*
import { pubSub } from "../pubSub.js";
import { getAnuncios } from "./anuncios.js";
import { buildAnuncioView, buildSpinnerView, buildErrorLoadingAnuncios, buildEmptyAnuncioList } from "./anuncioView.js";

export async function anuncioListController(anuncioListElement) {
  anuncioListElement.innerHTML = buildSpinnerView();
  let anuncios = [];

  try {
    anuncios = await getAnuncios()

    // showMessage('Los tweets se cargaron correctamente')
    // dispatchCustomEvent('Los tweets se cargaron correctamente', tweetListElement)
    pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, 'Los anuncios se cargaron correctamente')

    
    if (anuncios.length > 0) {
      drawAnuncio(anuncios, anuncioListElement);
    } else {
      showEmptyMessage(anuncioListElement);
    }

  } catch (error) {
    // tweetListElement.innerHTML = buildErrorLoadingTweets();
    // showMessage('No hemos podido cargar los tweets')
    // dispatchCustomEvent('No hemos podido cargar los tweets', tweetListElement)
    pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, 'No hemos podido cargar los anuncios')
  } finally {
    hideSpinner(anuncioListElement)
  }

}

function hideSpinner(anuncioListElement) {
  const spinnerElement = anuncioListElement.querySelector('.spinner');
  spinnerElement.classList.add('hide');

  // tweetListElement.innerHTML = '';
}

function drawAnuncios(anuncios, anuncioListElement) {
  for (const anuncio of anuncios) {
    const newAnunciosElement = buildAnuncioView(anuncios);
    anuncioListElement.appendChild(newAnunciosElement)
  }
}

function showEmptyMessage(anuncioListElement) {
  anuncioListElement.innerHTML = buildEmptyAnuncioList();
}*/