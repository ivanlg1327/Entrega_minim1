import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//HTTP
import { HttpClientModule } from '@angular/common/http';

//Reactive Form
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GroupComponent } from './invesgroup/invesgroup.component';
import { GroupCardComponent } from './group-card/group-card.component';
import { GroupFormComponent } from './invesgroup-form/invesgroup-form.component';

@NgModule({
  declarations: [
    AppComponent,
    GroupComponent,
    GroupCardComponent,
    GroupFormComponent
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
