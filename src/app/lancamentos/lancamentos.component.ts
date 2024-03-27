import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
@Component({
  selector: 'app-lancamentos',
  templateUrl: './lancamentos.component.html',
  styleUrls: ['./lancamentos.component.scss'],
})
export class LancamentosComponent  implements OnInit {

  movies: any[]= [];
  isLoading: boolean = true

  constructor(private movieService: MoviesService) { }

  ngOnInit() {
    this.movieService.getLancamentosMovies().subscribe((data: any) => {
      this.movies = data.results;
    });
  }
}
