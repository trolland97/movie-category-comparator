import { Component, OnInit } from '@angular/core';

import { Movie } from '../../models/movie.model';
import { IResponse } from '../../models/response.model';

import { MovieService } from '../../services/movie.service';

import * as CanvasJS from '../../../assets/js/canvasjs.min.js';

@Component({
  selector: 'app-best-rated-movies',
  templateUrl: './best-rated-movies.component.html',
  styleUrls: ['./best-rated-movies.component.css']
})
export class BestRatedMoviesComponent implements OnInit {

  categories: IResponse;
  bestRatedAction: Movie; 
  bestRatedDrama: Movie; 
  bestRatedRomantic: Movie; 
  bestRatedThriller: Movie;
  bestRatedHorror: Movie;
  bestRatedComedy: Movie;

  constructor(private ms: MovieService) { }

  ngOnInit() {
    this.ms.listMovies().subscribe(
      (res: IResponse) => {
        this.categories = res;
        this.bestRatedAction = this.getBestRatedMovie(this.categories.Categories.Action);
        this.bestRatedDrama = this.getBestRatedMovie(this.categories.Categories.Drama);
        this.bestRatedRomantic = this.getBestRatedMovie(this.categories.Categories.Romantic);
        this.bestRatedThriller = this.getBestRatedMovie(this.categories.Categories.Thriller);
        this.bestRatedHorror = this.getBestRatedMovie(this.categories.Categories.Horror);
        this.bestRatedComedy = this.getBestRatedMovie(this.categories.Categories.Comedy);
        this.createChart();
      }
    );

    
  }

  getBestRatedMovie(movies: Movie[]) {
    let max = 0;
    let bestRatedMovie: Movie;
    for(let movie of movies) {
      if(Number(movie.imdbRating) > max){
        max = Number(movie.imdbRating);
        bestRatedMovie = movie;
      }
    }

    return bestRatedMovie;
  }

  createChart() {
    let chart = new CanvasJS.Chart("bestRatedMoviesChartContainer", {
      animationEnabled: true,
      exportEnabled: false,
      title: {
        text: "Best rated movies"
      },
      data: [{
        type: "pie",
        dataPoints: [
          { y: Number(this.bestRatedAction.imdbRating), label: "Action (" +  this.bestRatedAction.Title +")" },
          { y: Number(this.bestRatedDrama.imdbRating), label: "Drama (" + this.bestRatedDrama.Title +")" },
          { y: Number(this.bestRatedRomantic.imdbRating), label: "Romantic (" +  this.bestRatedRomantic.Title +")" },
          { y: Number(this.bestRatedThriller.imdbRating), label: "Thriller (" +  this.bestRatedThriller.Title +")" },
          { y: Number(this.bestRatedHorror.imdbRating), label: "Horror (" +  this.bestRatedHorror.Title +")" },
          { y: Number(this.bestRatedComedy.imdbRating), label: "Comedy (" +  this.bestRatedComedy.Title +")" }
        ]
      }]
    });
      
    chart.render();
  }

}
