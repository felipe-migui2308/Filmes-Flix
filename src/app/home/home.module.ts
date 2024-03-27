import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

import { HomePageRoutingModule } from './home-routing.module';
import { TodosFilmesComponent } from '../todos-filmes/todos-filmes.component';
import { RouterLink, RouterModule } from '@angular/router';
import { LancamentosComponent } from '../lancamentos/lancamentos.component';
import { FilmesComponent } from '../filmes/filmes.component';
import { SeriesComponent } from '../series/series.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule, MatButtonModule,
    MatIconModule, MatToolbarModule, RouterLink, RouterModule,
  ],
  declarations: [HomePage, TodosFilmesComponent, LancamentosComponent, FilmesComponent, SeriesComponent]
})
export class HomePageModule {
  
}
