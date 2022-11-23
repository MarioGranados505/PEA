import { Component } from '@angular/core';
import { curso } from 'src/app/modelos/curso.model';

@Component({
  selector: 'app-paginaclases',
  templateUrl: './paginaclases.component.html',
  styleUrls: ['./paginaclases.component.css']
})
export class PaginaclasesComponent{

  cursos: curso[];

  constructor(){

    this.cursos = [

      new curso(
        "Visual Basic",
        "Alejandro Gastelum",
        "/assets/images/books.png",
        "30"
      ),
      new curso(
        "Programacion Orientada a Objetos",
        "Francisco Figueroa",
        "/assets/images/books.png",
        "50"
      ),
      new curso(
        "Desarrollo de aplicaciones Web",
        "Herman Geovanny",
        "/assets/images/books.png",
        "10"
      ),
      new curso(
        "Base de datos estructuradas",
        "Alejandro Gastelum",
        "/assets/images/books.png",
        "0"
      ),
      new curso(
        "Redes",
        "Manuel Undertaker",
        "/assets/images/books.png",
        "30"
      ),
      new curso(
        "Ingenieria Economica",
        "Candida",
        "/assets/images/books.png",
        "-100"
      ),

    ];

  }
  
}
