import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { ActorComponent } from './actor/actor.component';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';


const routes : Routes=[
  {
    path:'movies',
    component:MoviesComponent
  },
  {
    path:'actor',
    component:ActorComponent
  },
  {
    path:'about/:id',
    component:AboutComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
