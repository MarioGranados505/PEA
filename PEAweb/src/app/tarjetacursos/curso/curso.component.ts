import { Component, HostBinding, Input } from '@angular/core';
import { curso } from 'src/app/modelos/curso.model'; 

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent{

  @Input()
  curso!: curso;
  @HostBinding('attr.class') cssClass = 'item';
}
