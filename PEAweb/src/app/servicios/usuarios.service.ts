import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { listausuarios } from '../../app/modelos/usuarios.model'

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  urlBase : string = "/api/usuarios"

  constructor(private http: HttpClient) { }

  //getListaUsuarios
  getListaUsuarios()
  {
    return this.http.get(this.urlBase)
  }

  //getunusuario
  getUnUsuario(id:number)
  {
    return this.http.get(this.urlBase+'/'+id);
  }

  //getunusuario
  postUsuarioLogin(usuario:listausuarios)
  {
    return this.http.post(this.urlBase+'Login', usuario);
  }

  //añadir usuario
  addUsuario(usuario:listausuarios)
  {
    return this.http.post(this.urlBase, usuario);
  }

  //eliminar usuario
  deleteUsuario(id:string)
  {
    return this.http.delete(this.urlBase+'/'+id);
  }

  //modificar usuario
  editUsuario(id:string, usuario:listausuarios)
  {
    return this.http.patch(this.urlBase+'/'+id, usuario);
  }

}
