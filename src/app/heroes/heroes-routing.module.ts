import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BuscarComponent } from './pages/buscar/buscar.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { HomeComponent } from './pages/home/home.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { AgregarComponent } from './pages/agregar/agregar.component';

const routes:Routes = [
  {
    path:'',
    component:HomeComponent,
    children:[
    { path:'listado', component:ListadoComponent },
    { path:'agregar', component:AgregarComponent},
    { path:'buscar', component:BuscarComponent },
    { path:'editar/:id', component:AgregarComponent },
    { path:':id', component:HeroeComponent },
    { path:'**', redirectTo:'listado' },
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild( routes )
  ],
  exports:[
    RouterModule
  ]
})
export class HeroesRoutingModule { }
