import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, map } from 'rxjs';
import { SearchResult } from '../seacher-model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private apiKey = '01cae63e6db25a4ba9e081daff5c0b79';
  private apiUrl = 'https://api.themoviedb.org/3';
  constructor(private http: HttpClient) { }

  getTodosMovies() {
    return this.http.get(`${this.apiUrl}/movie/top_rated?api_key=${this.apiKey}&language=pt-BR}`);
  }
  getTodasSeries() {
    return this.http.get(`${this.apiUrl}/tv/top_rated?api_key=${this.apiKey}&language=pt-BR}`);
  }

  getLancamentosMovies(){
    return this.http.get(`${this.apiUrl}/movie/upcoming?api_key=${this.apiKey}&language=pt-BR}`);
  }

  getPopularMovies(){
    return this.http.get(`${this.apiUrl}/movie/popular?api_key=${this.apiKey}&language=pt-BR}`);
  }

  getTvSeries(){
    return this.http.get(`${this.apiUrl}/tv/popular?api_key=${this.apiKey}`);
  }

  getMovieDetails(movieId: number) {
    const url = `${this.apiUrl}/movie/${movieId}?api_key=${this.apiKey}&language=pt-BR`;
    return this.http.get(url);
  }
  getSerieDetails(serieId: number) {
    const url = `${this.apiUrl}/tv/${serieId}?api_key=${this.apiKey}&language=pt-BR`;
    return this.http.get(url);
  }
  searchMoviesAndSeries(query: string): Observable<SearchResult[]> {
    const movieSearchUrl = `${this.apiUrl}/search/movie?api_key=${this.apiKey}&query=${query}`;
    const seriesSearchUrl = `${this.apiUrl}/search/tv?api_key=${this.apiKey}&query=${query}`;


    const movieSearch = this.http.get(movieSearchUrl);
    const seriesSearch = this.http.get(seriesSearchUrl);


    return forkJoin([movieSearch, seriesSearch]).pipe(
      map(([movies, series]) => {
        
        return [...this.processResults(movies), ...this.processResults(series)];
      })
    );
  }

  private processResults(data: any): SearchResult[] {
    if (data && data.results) {
      return data.results as SearchResult[];
    } else {
      return [];
    }
  }


 

  
}


