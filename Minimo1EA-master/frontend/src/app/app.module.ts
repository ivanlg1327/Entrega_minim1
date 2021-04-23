import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//HTTP
import { HttpClientModule } from '@angular/common/http';

//Reactive Form
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InstitutionComponent } from './institution/institution.component';
import { InstitutionCardComponent } from './institution-card/institution-card.component';
import { InstitutionFormComponent } from './institution-form/institution-form.component';

@NgModule({
  declarations: [
    AppComponent,
    InstitutionComponent,
    InstitutionCardComponent,
    InstitutionFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
