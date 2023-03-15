//obtener arrays de anuncios
import {anuncios} from "./anuncios.js";

//añadirlo al DOM
import { notificationController } from "./notifications/notificationController.js"
import { anunciosListController } from "./anuncio-list/anuncioListController.js"
//generar el html que generara un anuncio
const anunciosListElement = document.querySelector('.anuncio-list')
const notificationsElement = document.querySelector('.notifications')

const showMessage = notificationController(notificationsElement)
anunciosListController(anunciosListElement)

tweetListElement.addEventListener('newNotification', (event) => {
  console.log('He recibido el evento!!!! ', event.detail.message);
  showMessage(event.detail.message)
})