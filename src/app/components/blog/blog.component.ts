import { Component } from '@angular/core';
import { Noticia } from 'src/app/interfaces/noticia.interface';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})

// Creación de array de datos e inicialización de 2 noticias en el array siguiendo el interfaz de noticia creado

export class BlogComponent {

  titulo: string = "";
  imagen: string = "";
  cuerpo: string = "";
  fecha: string = "";
  arrNoticias: Noticia[] = [];

  constructor() {
    this.arrNoticias = new Array (
    {titulo:"Holiday swindlers: The rise of digital travel scams", imagen:"https://ichef.bbci.co.uk/news/976/cpsprodpb/59D2/production/_127749922_maria.png.webp", cuerpo:"Digital travel scams are a growing systemic and global problem, according to the World Tourism Organization, a branch of the UN. Dozens of Brazilian women have been finding this out the hard way, after paying for luxury holidays from a man whose Instagram account sparkles with opulent hotels and exotic locations.", fecha:"24/11/2022"}, 
    {titulo:"Black, Korean and searching for the American dream", imagen:"https://ichef.bbci.co.uk/news/976/cpsprodpb/1454F/production/_126897238_976x549miltonateasterage9justpost-adoptioninrghhousingcomplexkorea_creditmiltonwashington.jpg.webp", cuerpo:"An outcast from birth, Milton Washington is the child of a Korean woman and a black US soldier, who became a slickyboy, or child thief, and dreamed of making it to America. At the age of eight, he seized his chance.", fecha:"02/10/2022"}, )
  }

  guardar(): void {
    let noticia: Noticia = {
      titulo: this.titulo,
      imagen: this.imagen,
      cuerpo: this.cuerpo,
      fecha: this.fecha,
    };
    
    // Validación de campos vacíos y generación de alerta en caso no se llenen

    if (this.titulo !== "" && this.imagen !== "" && this.cuerpo !== "" && this.fecha !== "") {this.arrNoticias.push(noticia)}
    else {alert('No dejar ninguno de los campos vacíos');}

    console.log(this.arrNoticias)

    this.titulo = "";
    this.imagen = "";
    this.cuerpo = "";
    this.fecha = "";

  }

}
