import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule), 
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full', 
  },
  {
    path: 'det-movies/:id',
    loadChildren: () => import('./pages/det-movies/det-movies.module').then( m => m.DetMoviesPageModule)
  },
  {
    path: 'det-series/:id',
    loadChildren: () => import('./pages/det-series/det-series.module').then( m => m.DetSeriesPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
