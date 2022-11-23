import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './paginacion/login/login.component';
import { RegistrarComponent } from './paginacion/registrar/registrar.component';
import { BienvenidaComponent } from './paginacion/bienvenida/bienvenida.component';
import { PaginaPrincipalComponent } from './paginacion/pagina-principal/pagina-principal.component';
import { RouterModule, Routes } from '@angular/router';
import { ConfiguracionComponent } from './paginacion/configuracion/configuracion.component';
import { QuienessomosComponent } from './paginacion/quienessomos/quienessomos.component';
import { PaginacursoComponent } from './paginacion/paginacurso/paginacurso.component';
import { PaginaclasesComponent } from './paginacion/paginaclases/paginaclases.component';
import { BarraNavegacionComponent } from './navbar/barra-navegacion/barra-navegacion.component';
import { MenuUsuarioComponent } from './navbar/menu-usuario/menu-usuario.component';
import { CursoslistaComponent } from './tarjetacursos/cursoslista/cursoslista.component';
import { CursoComponent } from './tarjetacursos/curso/curso.component';

const appRoutes:Routes=[

  {path:'', component:BienvenidaComponent},
  {path:'login', component:LoginComponent},
  {path:'registrar', component:RegistrarComponent},
  {path:'paginaprincipal', component:PaginaPrincipalComponent},
  {path:'configuracion', component:ConfiguracionComponent},
  {path:'quienessomos', component:QuienessomosComponent},
  {path:'paginacurso',component:PaginacursoComponent},
  {path:'paginaclases',component:PaginaclasesComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrarComponent,
    BienvenidaComponent,
    PaginaPrincipalComponent,
    ConfiguracionComponent,
    QuienessomosComponent,
    PaginacursoComponent,
    PaginaclasesComponent,
    BarraNavegacionComponent,
    MenuUsuarioComponent,
    CursoslistaComponent,
    CursoComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
