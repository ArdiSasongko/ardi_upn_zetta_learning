import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  {
    path:'add',
    component:AddComponent
  },
  {
    path:'',
    component:AppComponent
  },
  {
    path:'tabel',
    component:TableComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
