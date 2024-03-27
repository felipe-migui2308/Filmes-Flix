import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetSeriesPage } from './det-series.page';

const routes: Routes = [
  {
    path: '',
    component: DetSeriesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetSeriesPageRoutingModule {}
