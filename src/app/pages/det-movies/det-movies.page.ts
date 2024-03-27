import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';


@Component({
  selector: 'app-det-movies',
  templateUrl: './det-movies.page.html',
  styleUrls: ['./det-movies.page.scss'],
})
export class DetMoviesPage implements OnInit {

  movieId: number= 0;
  movieDetails: any; // Variável para armazenar os detalhes do filme
  isLoading: boolean = false;

  constructor(private route: ActivatedRoute, private movieService: MoviesService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.movieId = params['id']; // Obtém o ID do filme da URL
      this.getMovieDetails(this.movieId); // Obtém os detalhes do filme com base no ID
    });
  }

  getMovieDetails(movieId: number) {
    this.isLoading = true;
    this.movieService.getMovieDetails(movieId)
      .subscribe((data: any) => {
        setTimeout(() => {
          this.movieDetails = data;
          this.isLoading = false; // Esconde o spinner quando os detalhes do filme forem carregados
        }, 1000);
      }, error => {
        console.error(error);
        this.isLoading = false;
      });
  }
  
}

  
  

  
  




