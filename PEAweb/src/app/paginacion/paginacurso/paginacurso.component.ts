import { Component, OnInit } from '@angular/core';
import { CursosService } from '../../servicios/cursos.service'
import { listacurso } from '../../modelos/curso.model'

@Component({
  selector: 'app-paginacurso',
  templateUrl: './paginacurso.component.html',
  styleUrls: ['./paginacurso.component.css']
})
export class PaginacursoComponent implements OnInit {
  
  Curso: listacurso ={

  };

  constructor(private CursosService:CursosService) { }

  ngOnInit(): void {
    this.DatosCurso();
  }

  DatosCurso()
  {
    this.obteneridcurso();
    let id: number = this.Curso.idcurso as number
    this.CursosService.getListacurso(id).subscribe(
      res=>{
        console.log(res);
        this.Curso=<any>res;
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
