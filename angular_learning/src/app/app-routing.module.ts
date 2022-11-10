import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UsersRoutingModule } from './users/users-routing.module';


const routes: Routes =[
  {
    path:'users',
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
  }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
