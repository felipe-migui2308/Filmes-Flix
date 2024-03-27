import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss'],
})
export class SeriesComponent  implements OnInit {
  series: any[] = []

  constructor(private movieService: MoviesService) { }

  ngOnInit() {

  this.movieService.getTvSeries().subscribe((data: any) => {
    this.series = data.results;
  });
  }

}
