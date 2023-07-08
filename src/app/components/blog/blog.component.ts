import { Component } from '@angular/core';
import { Noticia } from 'src/app/interfaces/noticia.interface'; //Importamos la interface de Noticia para seguir unas normas fijas

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent {
  //Creamos e inicializamos la Array de noticias con dos notícias:
  arrNoticias: Noticia[] = [];

  newNoticia: Noticia = { title: '', url: '', text: '', publicationdate: '' };

  constructor() {
    this.arrNoticias = [
      {
        title: '¿Merece la pena comprar una Nintendo Switch en 2023?',
        url: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2023/07/nintendo-switch-3075056.jpg?tf=1200x',
        text: 'Nintendo Switch se acerca a su séptimo año de vida convertirda en una de las consolas más exitosas de la historia. Aunque su ciclo de vida se va acercando a su fin, ¿merece la pena comprarse una Nintendo Switch en 2023 si todavía no tienes la consola híbrida? Analizamos los principales pros y contras.',
        publicationdate: '2023-07-09',
      },
      {
        title:
          'A sus 61 años, Tom Cruise espera seguir haciendo películas de Misión Imposible hasta tener la edad de Harrison Ford',
        url: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2023/06/tom-cruise-saga-mision-imposible-3055290.jpg?tf=1200x',
        text: 'Tom Cruise acaba de cumplir 61 años, pero ve muy lejana la jubilación y también su desvinculación de la saga Misión Imposible, en la que pretende seguir trabajando hasta cumplir la edad de Harrison Ford.',
        publicationdate: '2023-07-09',
      },
    ];
  }
  //Creo una función que se encargue de mostrar las notícias almacenadas en arrNoticias
  cargarNoticias(): string {
    let noticiaHTML = '';
    this.arrNoticias.forEach((noticia) => {
      noticiaHTML += `<div class="noticia-container">
                        <h1>${noticia.title}</h1>
                        <img src="${noticia.url}" />
                        <p>${noticia.text}</p>
                        <p><span class="publication-date">${noticia.publicationdate}</span></p>
                      </div>`;
    });
    return noticiaHTML;
  }

  //Creo una función que se encargue de almacenar las notícias en la arrNoticias
  guardarNoticia(): void {
    //Establezco que todos los campos estén compeltos para poder guardar la notícia
    if (
      this.newNoticia.title === '' ||
      this.newNoticia.url === '' ||
      this.newNoticia.text === '' ||
      this.newNoticia.publicationdate === ''
    ) {
      alert('Tienes que rellenar todos los campos para publicar la notícia.');
    } else {
      this.arrNoticias.push(this.newNoticia); //En el caso de que se hayan completado todos los campos, se hace push a la arrNoticias para añadirla
      this.newNoticia = { title: '', url: '', text: '', publicationdate: '' }; //Reiniciamos newNoticia para poder introducir más
    }
  }
}
