import * as UI from './interfaz.js';

class API{
  constructor(artista,cancion){
    this.artista = artista;
    this.cancion = cancion;
  }
  consultarAPI(){
    const url = `https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`;
    //spiner
    UI.divResultado.textContent = "Loading...";
    UI.divResultado.style.textAlign ="center";

    //METODO fetch
    fetch(url)
    .then(respuesta => respuesta.json())//traemos rpta y transf a json
    .then(resultado =>{
      // console.log(resultado);
    UI.divResultado.style.textAlign ="initial";

      const {lyrics} = resultado;//desestructuro
      UI.divResultado.textContent = lyrics;
    })
  }
}
export default API;