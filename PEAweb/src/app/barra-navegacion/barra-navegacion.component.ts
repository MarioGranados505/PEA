import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barra-navegacion',
  templateUrl: './barra-navegacion.component.html',
  styleUrls: ['./barra-navegacion.component.css']
})
export class BarraNavegacionComponent implements OnInit {
  
  FlagMenu: boolean = false;

  UserMenu():void{
    this.FlagMenu = !this.FlagMenu;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
