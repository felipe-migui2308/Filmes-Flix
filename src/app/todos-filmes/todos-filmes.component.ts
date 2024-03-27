import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
@Component({
  selector: 'app-todos-filmes',
  templateUrl: './todos-filmes.component.html',
  styleUrls: ['./todos-filmes.component.scss'],
})
export class TodosFilmesComponent  implements OnInit {
  movies: any[] = [];
  series: any[] = [];

  constructor(private movieService: MoviesService) { }

  ngOnInit() {
    this.movieService.getTodosMovies().subscribe((data: any) => {
      this.movies = data.results;
    });

    this.movieService.getTodasSeries().subscribe((data: any) => {
      this.series = data.results;
    });
  }
}

