import { Component, Input } from '@angular/core';
import { curso } from 'src/app/modelos/curso.model';

@Component({
  selector: 'app-cursoslista',
  templateUrl: './cursoslista.component.html',
  styleUrls: ['./cursoslista.component.css']
})
export class CursoslistaComponent{

  @Input() 
  cursoLista: curso[] = [];

}
