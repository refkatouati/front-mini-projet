import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { GestionService } from './gestion.service';
import { ListeComponent } from './liste/liste.component';
import { AddComponent } from './add/add.component';

import { FormsModule } from '@angular/forms';
import { TypepfeComponent } from './typepfe/typepfe.component';
import { RechercheComponent } from './recherche/recherche.component';

@NgModule({
  declarations: [
    AppComponent,
    ListeComponent,
    AddComponent,
   
    TypepfeComponent,
   
    RechercheComponent,
    
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [GestionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
