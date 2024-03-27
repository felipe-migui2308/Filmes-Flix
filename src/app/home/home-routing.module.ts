import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { TodosFilmesComponent } from '../todos-filmes/todos-filmes.component';
import { LancamentosComponent } from '../lancamentos/lancamentos.component';
import { FilmesComponent } from '../filmes/filmes.component';
import { SeriesComponent } from '../series/series.component';
import { defaultRippleAnimationConfig } from '@angular/material/core';
import { DetMoviesPage } from '../pages/det-movies/det-movies.page';


const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children:[
      { path: '', redirectTo: 'todos-filmes', pathMatch: 'full' },
      {path: 'todos-filmes', component: TodosFilmesComponent},
      {path: 'lancamentos', component: LancamentosComponent},
      {path:'filmes', component: FilmesComponent},
      {path: 'series', component: SeriesComponent},
      

    ]
    
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
