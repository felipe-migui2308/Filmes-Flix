import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetMoviesPage } from './det-movies.page';

const routes: Routes = [
  {
    path: '',
    component: DetMoviesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetMoviesPageRoutingModule {}
