import { Component, OnInit } from '@angular/core';

import { Movie } from '../../models/movie.model';
import { IResponse } from '../../models/response.model';

import { MovieService } from '../../services/movie.service';

import * as CanvasJS from '../../../assets/js/canvasjs.min.js';

@Component({
  selector: 'app-avg-movie-rating',
  templateUrl: './avg-movie-rating.component.html',
  styleUrls: ['./avg-movie-rating.component.css']
})
export class AvgMovieRatingComponent implements OnInit {

  categories: IResponse;
  avgActionRating: Number; 
  avgDramaRating: Number; 
  avgRomanticRating: Number; 
  avgThrillerRating: Number;
  avgHorrorRating: Number;
  avgComedyRating: Number;

  constructor(private ms: MovieService) { }

  ngOnInit() {
    this.ms.listMovies().subscribe(
      (res: IResponse) => {
        this.categories = res;
        this.avgActionRating = this.calculateAverageMovieRating(this.categories.Categories.Action);
        this.avgDramaRating = this.calculateAverageMovieRating(this.categories.Categories.Drama);
        this.avgRomanticRating = this.calculateAverageMovieRating(this.categories.Categories.Romantic);
        this.avgThrillerRating = this.calculateAverageMovieRating(this.categories.Categories.Thriller);
        this.avgHorrorRating = this.calculateAverageMovieRating(this.categories.Categories.Horror);
        this.avgComedyRating = this.calculateAverageMovieRating(this.categories.Categories.Comedy);
        this.createChart();
      }
    );    
  }

  calculateAverageMovieRating(movies: Movie[]) {
    let sum = 0;
    let count = 0;
    for(let movie of movies) {
      sum += Number(movie.imdbRating);
      count++;
    }

    return sum/count;
  }

  createChart() {
    let chart = new CanvasJS.Chart("avgMovieRatingChartContainer", {
      animationEnabled: true,
      exportEnabled: false,
      title: {
        text: "Average movie rating"
      },
      data: [{
        type: "pie",
        dataPoints: [
          { y: this.avgActionRating, label: "Action" },
          { y: this.avgDramaRating, label: "Drama" },
          { y: this.avgRomanticRating, label: "Romantic" },
          { y: this.avgThrillerRating, label: "Thriller" },
          { y: this.avgHorrorRating, label: "Horror" },
          { y: this.avgComedyRating, label: "Comedy" }
        ]
      }]
    });
      
    chart.render();
  }

}
