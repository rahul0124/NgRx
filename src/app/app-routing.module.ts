import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { EditDetailsComponent } from './details/edit-details/edit-details.component';


const routes: Routes = [
  {path: '',redirectTo:'/create', pathMatch: 'full'},
  {path: 'create', component: EditDetailsComponent},
  {path: 'view', component: DetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
