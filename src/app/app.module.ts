import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RodapeComponent } from './rodape/rodape.component';
import { ContadorComponent } from './contador/contador.component';
import { CardPerfilComponent } from './card-perfil/card-perfil.component';
import { DiretivasComponent } from './diretivas/diretivas.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { FormReativoComponent } from './form-reativo/form-reativo.component';

@NgModule({
  declarations: [
    AppComponent,
    RodapeComponent,
    ContadorComponent,
    CardPerfilComponent,
    DiretivasComponent,
    TemplateFormComponent,
    FormReativoComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
