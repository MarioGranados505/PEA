import { Component, OnInit } from '@angular/core';
import { CursosService } from '../../../servicios/cursos.service'
import { listacurso, unirsecurso } from '../../../modelos/curso.model'
import {listausuarios } from '../../../modelos/usuarios.model'

@Component({
  selector: 'app-principalcursos',
  templateUrl: './principalcursos.component.html',
  styleUrls: ['./principalcursos.component.css']
})
export class PrincipalcursosComponent implements OnInit {

  //variable
  ListarCursos: listacurso[] = [];

  datosusuario: listausuarios = {};

  cursoguardar: unirsecurso = {};

  constructor(private CursosService:CursosService) { }

  ngOnInit(): void {
    this.listarCursos();
  }

  listarCursos()
  {
    this.CursosService.getListacursos().subscribe(
      res=>{
        console.log(res);
        this.ListarCursos=<any>res;
      },
      err => console.log(err)
    )
  }

  agregarcurso(curso:listacurso){
    console.log("click")
    this.obteneridusuario()
    this.cursoguardar.idcurso = curso.idcurso;
    this.cursoguardar.idusuario = this.datosusuario.Idusuario
    this.CursosService.addUsuarioCurso(this.cursoguardar).subscribe()

  }

  obteneridusuario()
  { 
    const json: string = localStorage.getItem("usuario") as string;
    const obj = JSON.parse(json)
    this.datosusuario = obj

    console.log(this.datosusuario);
  }

}
