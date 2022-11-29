import { Component, OnInit } from '@angular/core';
import { CursosService } from '../../../servicios/cursos.service'
import { listacurso, unirsecurso } from '../../../modelos/curso.model'
import { listausuarios } from '../../../modelos/usuarios.model'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tuscursos',
  templateUrl: './tuscursos.component.html',
  styleUrls: ['./tuscursos.component.css']
})
export class TuscursosComponent implements OnInit {

  ListarCursos: listacurso[] = [];

  cursodatos: unirsecurso = {};

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

  borrarcurso(curso:listacurso){
    this.cursodatos.idusuario = this.datousuario.Idusuario 
    this.cursodatos.idcurso = curso.idcurso

    this.CursosService.getListaUsuarioCurso(this.cursodatos).subscribe(
      res => {
        this.cursodatos = res
        console.log(this.cursodatos)
        const id = this.cursodatos.id as number
        this.CursosService.deleteCursousuario(id).subscribe();
        this.showBorrarCheck();
        this.listarCursos();
      },
      err =>{
        console.log("Falla")
        this.showBorrarError();
      }
    )
  }

  showBorrarError(){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Un error a ocurrido'
    })
  }

  showBorrarCheck(){
    Swal.fire({
      icon: 'success',
      title: 'Se a borrado el curso de su perfil'
    })
  }

}
