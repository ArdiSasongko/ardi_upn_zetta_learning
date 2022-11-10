import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';
import { DetailComponent } from './detail/detail.component';
import { FormComponent } from './form/form.component';


const routes: Routes = [
  {path:'users',pathMatch:'full',component:UsersComponent},
  {path:'users/detail/:id',component:DetailComponent},
  {path:'form',component:FormComponent}
]
@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class UsersRoutingModule { }
