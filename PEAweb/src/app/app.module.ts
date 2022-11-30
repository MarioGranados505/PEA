import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './paginacion/login/login.component';
import { RegistrarComponent } from './paginacion/registrar/registrar.component';
import { BienvenidaComponent } from './paginacion/bienvenida/bienvenida.component';
import { PaginaPrincipalComponent } from './paginacion/pagina-principal/pagina-principal.component';

import { PaginacursoComponent } from './paginacion/paginacurso/paginacurso.component';
import { PaginatuscursosComponent } from './paginacion/paginatuscursos/paginatuscursos.component';
import { BarraNavegacionComponent } from './navbar/barra-navegacion/barra-navegacion.component';
import { MenuUsuarioComponent } from './navbar/menu-usuario/menu-usuario.component';
import { SeccioncursoComponent } from './paginacion/paginacurso/seccioncurso/seccioncurso.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PrincipalcursosComponent } from './paginacion/pagina-principal/principalcursos/principalcursos.component';
import { TuscursosComponent } from './paginacion/paginatuscursos/tuscursos/tuscursos.component';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';

const appRoutes:Routes=[

  {path:'', component:BienvenidaComponent},
  {path:'login', component:LoginComponent},
  {path:'registrar', component:RegistrarComponent},
  {path:'paginaprincipal', component:PaginaPrincipalComponent},
  {path:'paginacurso',component:PaginacursoComponent},
  {path:'paginatuscursos',component:PaginatuscursosComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrarComponent,
    BienvenidaComponent,
    PaginaPrincipalComponent,
    PaginacursoComponent,
    PaginatuscursosComponent,
    BarraNavegacionComponent,
    MenuUsuarioComponent,
    SeccioncursoComponent,
    PrincipalcursosComponent,
    TuscursosComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
