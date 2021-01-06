import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ListeComponent } from './liste/liste.component';
import { RechercheComponent } from './recherche/recherche.component';

import { TypepfeComponent } from './typepfe/typepfe.component';


const routes: Routes = [
  {path:'',component:ListeComponent},
  {path:'liste',component:ListeComponent},
  {path:'add',component:AddComponent},
  {path:'recherche/:titre',component:RechercheComponent},
  {path:'typepfe/:id',component:TypepfeComponent},

 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
