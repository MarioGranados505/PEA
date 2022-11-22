import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { RouterModule, Routes } from '@angular/router';
import { ConfiguracionComponent } from './configuracion/configuracion.component';
import { QuienessomosComponent } from './quienessomos/quienessomos.component';
import { PaginacursoComponent } from './paginacurso/paginacurso.component';
import { PaginaclasesComponent } from './paginaclases/paginaclases.component';
import { BarraNavegacionComponent } from './barra-navegacion/barra-navegacion.component';
import { MenuUsuarioComponent } from './menu-usuario/menu-usuario.component';
import { PaginaclasseComponent } from './paginaclasse/paginaclasse.component';
import { CursonombreComponent } from './cursonombre/cursonombre.component';
import { CursoimagenComponent } from './cursoimagen/cursoimagen.component';
import { CursomaestroComponent } from './cursomaestro/cursomaestro.component';
import { CursoporcientoComponent } from './cursoporciento/cursoporciento.component';
import { CursoslistaComponent } from './cursoslista/cursoslista.component';

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
    PaginaclasseComponent,
    CursonombreComponent,
    CursoimagenComponent,
    CursomaestroComponent,
    CursoporcientoComponent,
    CursoslistaComponent

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
