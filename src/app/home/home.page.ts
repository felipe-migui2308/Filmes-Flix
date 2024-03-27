import { Component, OnInit, ViewChild } from '@angular/core';
import { MoviesService } from '../services/movies.service'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  
  
})
export class HomePage implements OnInit {

  searchQuery: string = '';
  searchResults: any[] = [];
  showContent: boolean = false;

  constructor(private movieService: MoviesService, private router: Router){}


  ngOnInit(): void {

  }

  search() {
    if (this.searchQuery.trim() !== '') {
      this.movieService.searchMoviesAndSeries(this.searchQuery).subscribe(results => {
        this.searchResults = results;
      });
    } else {
      this.searchResults = [];
      this.showContent = false;
    }
  }
  selectResult(result: any) {
    this.router.navigate(['/det-movies', result.id]);
  }
  
}



