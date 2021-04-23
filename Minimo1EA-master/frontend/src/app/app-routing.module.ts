import { GroupFormComponent } from './invesgroup-form/invesgroup-form.component';
import { GroupComponent } from './invesgroup/invesgroup.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/groups' },
  { path: 'groups', component: GroupComponent},
  { path: 'update/:name', component: GroupFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
