import { Component, OnInit } from '@angular/core';
import { listausuarios } from '../../modelos/usuarios.model';

@Component({
  selector: 'app-barra-navegacion',
  templateUrl: './barra-navegacion.component.html',
  styleUrls: ['./barra-navegacion.component.css']
})
export class BarraNavegacionComponent implements OnInit {
  
  FlagMenu: boolean = false;

  datousuario: listausuarios={}

  constructor() { }

  ngOnInit(): void {
    this.obtenerdatousuario()
  }

  UserMenu():void{
    this.FlagMenu = !this.FlagMenu;
  }

  BorrarSesion(){
    localStorage.clear();
  }

  obtenerdatousuario()
  { 
    const json: string = localStorage.getItem("usuario") as string;
    const obj = JSON.parse(json)
    this.datousuario = obj

    console.log(this.datousuario);
  }

}
