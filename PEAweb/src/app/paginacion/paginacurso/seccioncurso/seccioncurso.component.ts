import { Component, OnInit } from '@angular/core';
import { MaterialcursosService } from '../../../servicios/materialcursos.service';
import { materialcurso } from "../../../modelos/materialcurso.model"
import { listacurso } from '../../../modelos/curso.model';

@Component({
  selector: 'app-seccioncurso',
  templateUrl: './seccioncurso.component.html',
  styleUrls: ['./seccioncurso.component.css']
})
export class SeccioncursoComponent implements OnInit {

  listamaterial: materialcurso[] = [];

  Curso: listacurso ={

  };

  constructor(private Materialcursosservice:MaterialcursosService) { }

  ngOnInit(): void {
    this.listarmaterial();
  }

  listarmaterial()
  {
    this.obteneridcurso()
    let id: number = this.Curso.idcurso as number
    this.Materialcursosservice.getMaterialCurso(id).subscribe(
      res=>{
        console.log(res);
        this.listamaterial=<any>res;
      },
      err => console.log(err)
    )
  }

  obteneridcurso()
  { 
    const json: string = localStorage.getItem("curso") as string;
    const obj = JSON.parse(json)
    this.Curso = obj

    console.log(this.Curso);
  }

}
