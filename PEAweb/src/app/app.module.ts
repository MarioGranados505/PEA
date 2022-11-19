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

const appRoutes:Routes=[

  {path:'', component:BienvenidaComponent},
  {path:'login', component:LoginComponent},
  {path:'registrar', component:RegistrarComponent},
  {path:'paginaprincipal', component:PaginaPrincipalComponent},
  {path:'configuracion', component:ConfiguracionComponent},
  {path:'quienessomos', component:QuienessomosComponent}

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
    PaginacursoComponent

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
