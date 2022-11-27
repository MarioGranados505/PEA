import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../servicios/usuarios.service'
import { listausuarios } from '../../modelos/usuarios.model'
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  ListarUsuarios: listausuarios[] = [];

  usuario: listausuarios={
    Idusuario:0,
    Nombre:"",
    Apellido:"",
    Correo:"",
    Password:""
  };

  constructor(private UsuariosService:UsuariosService, private router:Router) { }

  ngOnInit(): void {
    this.listarusuarios();
  }

  listarusuarios()
  {
    this.UsuariosService.getListaUsuarios().subscribe(
      res=>{
        console.log(res);
      },
      err => console.log(err)
    )
  }

  agregarusuario()
  {
    console.log(this.usuario)
    this.UsuariosService.addUsuario(this.usuario).subscribe()
    this.router.navigate([''])
  }

}
