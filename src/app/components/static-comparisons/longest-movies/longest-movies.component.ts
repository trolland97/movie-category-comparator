import { Component, OnInit } from '@angular/core';

import { Movie } from '../../../models/movie.model';
import { IResponse } from '../../../models/response.model';

import { MovieService } from '../../../services/movie.service';

import * as CanvasJS from '../../../../assets/js/canvasjs.min.js';

@Component({
  selector: 'app-longest-movies',
  templateUrl: './longest-movies.component.html',
  styleUrls: ['./longest-movies.component.css']
})
export class LongestMoviesComponent implements OnInit {

  categories: IResponse;
  longestAction: Movie; 
  longestDrama: Movie; 
  longestRomantic: Movie; 
  longestThriller: Movie;
  longestHorror: Movie;
  longestComedy: Movie;

  constructor(private ms: MovieService) { }

  ngOnInit() {
    this.ms.listMovies().subscribe(
      (res: IResponse) => {
        this.categories = res;
        this.longestAction = this.getlongestMovie(this.categories.Categories.Action);
        this.longestDrama = this.getlongestMovie(this.categories.Categories.Drama);
        this.longestRomantic = this.getlongestMovie(this.categories.Categories.Romantic);
        this.longestThriller = this.getlongestMovie(this.categories.Categories.Thriller);
        this.longestHorror = this.getlongestMovie(this.categories.Categories.Horror);
        this.longestComedy = this.getlongestMovie(this.categories.Categories.Comedy);
        this.createChart();
      }
    );

    
  }

  getlongestMovie(movies: Movie[]) {
    let max = 0;
    let longestMovie: Movie;
    for(let movie of movies) {
      if(movie.Runtime.match(/\d+/g).map(Number)[0] > max){
        max = movie.Runtime.match(/\d+/g).map(Number)[0];
        longestMovie = movie;
      }
    }

    return longestMovie;
  }

  createChart() {
    let chart = new CanvasJS.Chart("longestMoviesChartContainer", {
      animationEnabled: true,
      exportEnabled: false,
      title: {
        text: "Longest movies [min]"
      },
      data: [{
        type: "pie",
        dataPoints: [
          { y: this.longestAction.Runtime.match(/\d+/g).map(Number)[0], label: "Action (" +  this.longestAction.Title +")" },
          { y: this.longestDrama.Runtime.match(/\d+/g).map(Number)[0], label: "Drama (" + this.longestDrama.Title +")" },
          { y: this.longestRomantic.Runtime.match(/\d+/g).map(Number)[0], label: "Romantic (" +  this.longestRomantic.Title +")" },
          { y: this.longestThriller.Runtime.match(/\d+/g).map(Number)[0], label: "Thriller (" +  this.longestThriller.Title +")" },
          { y: this.longestHorror.Runtime.match(/\d+/g).map(Number)[0], label: "Horror (" +  this.longestHorror.Title +")" },
          { y: this.longestComedy.Runtime.match(/\d+/g).map(Number)[0], label: "Comedy (" +  this.longestComedy.Title +")" }
        ]
      }]
    });
      
    chart.render();
  }

}
