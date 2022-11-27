import { Component, OnInit } from '@angular/core';
import { CursosService } from '../../../servicios/cursos.service'
import { listacurso } from '../../../modelos/curso.model'
import { listausuarios } from '../../../modelos/usuarios.model'

@Component({
  selector: 'app-tuscursos',
  templateUrl: './tuscursos.component.html',
  styleUrls: ['./tuscursos.component.css']
})
export class TuscursosComponent implements OnInit {

  ListarCursos: listacurso[] = [];

  datousuario: listausuarios={
    Idusuario:0,
    Nombre:"",
    Apellido:"",
    Correo:"",
    Password:""
  };

  constructor(private CursosService:CursosService) { }

  ngOnInit(): void {
    this.listarCursos();
  }

  listarCursos()
  {
    this.obteneridusuario();
    let id: number = this.datousuario.Idusuario as number
    this.CursosService.getUsuarioCursos(id).subscribe(
      res=>{
        console.log(res);
        this.ListarCursos=<any>res;
      },
      err => console.log(err)
    )
  }

  obteneridusuario()
  { 
    const json: string = localStorage.getItem("usuario") as string;
    const obj = JSON.parse(json)
    this.datousuario = obj

    console.log(this.datousuario);
  }

  guardarcurso(curso:listacurso){
    localStorage.setItem( "curso", JSON.stringify(curso));
  }

}
