import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';


@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.scss'],
})
export class FilmesComponent  implements OnInit {

  movies :any[] = [];

  constructor(private movieService: MoviesService) { }
  

  ngOnInit() {

    this.movieService.getPopularMovies().subscribe((data:any) => {
      this.movies = data.results;
    })
  }

}
