import * as UI from './interfaz.js';
import API from './api.js';

// console.log(UI.formularioBuscar);
UI.formularioBuscar.addEventListener('submit', buscarCancion);

function buscarCancion(e){
  e.preventDefault();

  const artista = document.querySelector('#artista').value;
  const cancion = document.querySelector('#cancion').value;

  const busqueda = new API(artista,cancion);
  busqueda.consultarAPI();
}