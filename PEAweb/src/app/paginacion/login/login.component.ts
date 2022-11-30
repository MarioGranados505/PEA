import { Component, OnInit } from '@angular/core';
import { listausuarios } from '../../modelos/usuarios.model'
import { UsuariosService } from '../../servicios/usuarios.service'
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: listausuarios={
    Idusuario:0,
    Nombre:"",
    Apellido:"",
    Correo:"",
    Password:""
  };

  constructor(private UsuariosService:UsuariosService, private router:Router) { }

  ngOnInit(): void {

  }

  IrRegistrar(){
    this.router.navigate(['registrar']);
  }

  IrPaginaPrincipal(){
    console.log(this.usuario)
    this.UsuariosService.postUsuarioLogin(this.usuario).subscribe(
      res=>{
        console.log(res);
        this.router.navigate(['paginaprincipal'])
        this.grabarusuario_localstorage(res)
      },
      err => {
        console.log(err),
        this.showErrorLogin()
      }
    )
    
  }

  grabarusuario_localstorage(usuario:listausuarios){
    localStorage.setItem( "usuario", JSON.stringify(usuario));
  }

  showErrorLogin(){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Tu correo o contraseña son invalidas',
      footer: '<a href="#/registrar">¿Quieres registrarte?</a>'
    })
  }
  

}
