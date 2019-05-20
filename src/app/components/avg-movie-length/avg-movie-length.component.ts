import { Component, OnInit } from '@angular/core';

import { Movie } from '../../models/movie.model';
import { IResponse } from '../../models/response.model';

import { MovieService } from '../../services/movie.service';

import * as CanvasJS from '../../../assets/js/canvasjs.min.js';

@Component({
  selector: 'app-avg-movie-length',
  templateUrl: './avg-movie-length.component.html',
  styleUrls: ['./avg-movie-length.component.css']
})
export class AvgMovieLengthComponent implements OnInit {

  categories: IResponse;
  avgActionLength: Number; 
  avgDramaLength: Number; 
  avgRomanticLength: Number; 
  avgThrillerLenght: Number;
  avgHorrorLength: Number;
  avgComedyLenght: Number;

  constructor(private ms: MovieService) { }

  ngOnInit() {
    this.ms.listMovies().subscribe(
      (res: IResponse) => {
        this.categories = res;
        this.avgActionLength = this.calculateAverageMovieLength(this.categories.Categories.Action);
        this.avgDramaLength = this.calculateAverageMovieLength(this.categories.Categories.Drama);
        this.avgRomanticLength = this.calculateAverageMovieLength(this.categories.Categories.Romantic);
        this.avgThrillerLenght = this.calculateAverageMovieLength(this.categories.Categories.Thriller);
        this.avgHorrorLength = this.calculateAverageMovieLength(this.categories.Categories.Horror);
        this.avgComedyLenght = this.calculateAverageMovieLength(this.categories.Categories.Comedy);
        this.createChart();
      }
    );

    
  }

  calculateAverageMovieLength(movies: Movie[]) {
    let sum = 0;
    let count = 0;
    for(let movie of movies) {
      sum += movie.Runtime.match(/\d+/g).map(Number)[0];
      count++;
    }

    return sum/count;
  }

  createChart() {
    let chart = new CanvasJS.Chart("avgMovieLengthChartContainer", {
      animationEnabled: true,
      exportEnabled: false,
      title: {
        text: "Average movie length [min]"
      },
      data: [{
        type: "pie",
        dataPoints: [
          { y: this.avgActionLength, label: "Action", link: "asd" },
          { y: this.avgDramaLength, label: "Drama" },
          { y: this.avgRomanticLength, label: "Romantic" },
          { y: this.avgThrillerLenght, label: "Thriller" },
          { y: this.avgHorrorLength, label: "Horror" },
          { y: this.avgComedyLenght, label: "Comedy" }
        ]
      }]
    });
      
    chart.render();
  }

}
