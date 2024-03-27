import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-det-series',
  templateUrl: './det-series.page.html',
  styleUrls: ['./det-series.page.scss'],
})
export class DetSeriesPage implements OnInit {
  serieId: number = 0;
  serieDetails: any;
  isLoading: Boolean = true;


  constructor(private route: ActivatedRoute, private movieService: MoviesService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.serieId = params['id']; 
      this.getSerieDetails(this.serieId); 
    });
  }
  
  getSerieDetails(serieId: number) {
    this.isLoading = true;
    this.movieService.getSerieDetails(serieId)
      .subscribe((data: any) => {
        setTimeout(() => {
          this.serieDetails = data;
          this.isLoading = false; 
        }, 1000);
        
      }, error => {
        console.error(error);
        this.isLoading = false;
      });
  }
  



}
