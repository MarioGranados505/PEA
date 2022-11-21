import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paginaclases',
  templateUrl: './paginaclases.component.html',
  styleUrls: ['./paginaclases.component.css']
})
export class PaginaclasesComponent implements OnInit {

  UserMenu(): void{
    document.getElementById("Dropdown")?.classList.toggle("show")
  }

  constructor() { }

  ngOnInit(): void {
  }

}
