import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetMoviesPageRoutingModule } from './det-movies-routing.module';

import { DetMoviesPage } from './det-movies.page';
import { HttpClientModule } from '@angular/common/http';
import { FilmesComponent } from 'src/app/filmes/filmes.component';
import { LancamentosComponent } from 'src/app/lancamentos/lancamentos.component';
import { SeriesComponent } from 'src/app/series/series.component';
import { TodosFilmesComponent } from 'src/app/todos-filmes/todos-filmes.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetMoviesPageRoutingModule,
    HttpClientModule,
  ],
  declarations: [DetMoviesPage, ]
})
export class DetMoviesPageModule {


}
