import { Component, OnInit } from '@angular/core';

import { Movie } from '../../models/movie.model';
import { IResponse } from '../../models/response.model';

import { MovieService } from '../../services/movie.service';

import * as CanvasJS from '../../../assets/js/canvasjs.min.js';

@Component({
  selector: 'app-shortest-movies',
  templateUrl: './shortest-movies.component.html',
  styleUrls: ['./shortest-movies.component.css']
})
export class ShortestMoviesComponent implements OnInit {

  categories: IResponse;
  shortestAction: Movie; 
  shortestDrama: Movie; 
  shortestRomantic: Movie; 
  shortestThriller: Movie;
  shortestHorror: Movie;
  shortestComedy: Movie;

  constructor(private ms: MovieService) { }

  ngOnInit() {
    this.ms.listMovies().subscribe(
      (res: IResponse) => {
        this.categories = res;
        this.shortestAction = this.getshortestMovie(this.categories.Categories.Action);
        this.shortestDrama = this.getshortestMovie(this.categories.Categories.Drama);
        this.shortestRomantic = this.getshortestMovie(this.categories.Categories.Romantic);
        this.shortestThriller = this.getshortestMovie(this.categories.Categories.Thriller);
        this.shortestHorror = this.getshortestMovie(this.categories.Categories.Horror);
        this.shortestComedy = this.getshortestMovie(this.categories.Categories.Comedy);
        this.createChart();
      }
    );

    
  }

  getshortestMovie(movies: Movie[]) {
    let min = 999999;
    let shortestMovie: Movie;
    for(let movie of movies) {
      if(movie.Runtime.match(/\d+/g).map(Number)[0] < min){
        min = movie.Runtime.match(/\d+/g).map(Number)[0];
        shortestMovie = movie;
      }
    }

    return shortestMovie;
  }

  createChart() {
    let chart = new CanvasJS.Chart("shortestMoviesChartContainer", {
      animationEnabled: true,
      exportEnabled: false,
      title: {
        text: "Shortest movies [min]"
      },
      data: [{
        type: "pie",
        dataPoints: [
          { y: this.shortestAction.Runtime.match(/\d+/g).map(Number)[0], label: "Action (" +  this.shortestAction.Title +")" },
          { y: this.shortestDrama.Runtime.match(/\d+/g).map(Number)[0], label: "Drama (" + this.shortestDrama.Title +")" },
          { y: this.shortestRomantic.Runtime.match(/\d+/g).map(Number)[0], label: "Romantic (" +  this.shortestRomantic.Title +")" },
          { y: this.shortestThriller.Runtime.match(/\d+/g).map(Number)[0], label: "Thriller (" +  this.shortestThriller.Title +")" },
          { y: this.shortestHorror.Runtime.match(/\d+/g).map(Number)[0], label: "Horror (" +  this.shortestHorror.Title +")" },
          { y: this.shortestComedy.Runtime.match(/\d+/g).map(Number)[0], label: "Comedy (" +  this.shortestComedy.Title +")" }
        ]
      }]
    });
      
    chart.render();
  }

}
