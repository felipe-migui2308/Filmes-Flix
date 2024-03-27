import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetSeriesPageRoutingModule } from './det-series-routing.module';

import { DetSeriesPage } from './det-series.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetSeriesPageRoutingModule
  ],
  declarations: [DetSeriesPage]
})
export class DetSeriesPageModule {}
