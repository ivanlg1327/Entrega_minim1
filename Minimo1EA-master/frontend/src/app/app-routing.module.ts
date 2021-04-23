import { InstitutionFormComponent } from './institution-form/institution-form.component';
import { InstitutionComponent } from './institution/institution.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/institution' },
  { path: 'institution', component: InstitutionComponent},
  { path: 'update/:name', component: InstitutionFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
