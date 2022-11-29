import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { unirsecurso } from '../modelos/curso.model';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  urlBase : string = "/api/"

  constructor(private http: HttpClient) 
  { 

  }

  //getListaCursos
  getListacursos()
  {
    return this.http.get(this.urlBase+'listacursos')
  }

  getListacurso(id:number)
  {
    return this.http.get(this.urlBase+'listacursos/'+id)
  }

  //Usuariosencursos

  getUsuarioCursos(id:number)
  {
    return this.http.get(this.urlBase+'usuarioscursos/'+id)
  }

  addUsuarioCurso(usuariounir:unirsecurso)
  {
    return this.http.post(this.urlBase+'usuarioscursos/', usuariounir)
  }

  getListaUsuarioCurso(usuariocurso:unirsecurso){
    return this.http.post(this.urlBase+'usuariocurso/', usuariocurso)
  }

  deleteCursousuario(id:number)
  {
    return this.http.delete(this.urlBase+'usuarioscursos/'+id);
  }


}