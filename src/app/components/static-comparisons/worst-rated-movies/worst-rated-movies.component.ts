import { Component, OnInit } from '@angular/core';

import { Movie } from '../../../models/movie.model';
import { IResponse } from '../../../models/response.model';

import { MovieService } from '../../../services/movie.service';

import * as CanvasJS from '../../../../assets/js/canvasjs.min.js';

@Component({
  selector: 'app-worst-rated-movies',
  templateUrl: './worst-rated-movies.component.html',
  styleUrls: ['./worst-rated-movies.component.css']
})
export class WorstRatedMoviesComponent implements OnInit {

  categories: IResponse;
  worstRatedAction: Movie; 
  worstRatedDrama: Movie; 
  worstRatedRomantic: Movie; 
  worstRatedThriller: Movie;
  worstRatedHorror: Movie;
  worstRatedComedy: Movie;

  constructor(private ms: MovieService) { }

  ngOnInit() {
    this.ms.listMovies().subscribe(
      (res: IResponse) => {
        this.categories = res;
        this.worstRatedAction = this.getWorstRatedMovie(this.categories.Categories.Action);
        this.worstRatedDrama = this.getWorstRatedMovie(this.categories.Categories.Drama);
        this.worstRatedRomantic = this.getWorstRatedMovie(this.categories.Categories.Romantic);
        this.worstRatedThriller = this.getWorstRatedMovie(this.categories.Categories.Thriller);
        this.worstRatedHorror = this.getWorstRatedMovie(this.categories.Categories.Horror);
        this.worstRatedComedy = this.getWorstRatedMovie(this.categories.Categories.Comedy);
        this.createChart();
      }
    );

    
  }

  getWorstRatedMovie(movies: Movie[]) {
    let min = 999999;
    let worstRatedMovie: Movie;
    for(let movie of movies) {
      if(Number(movie.imdbRating) < min){
        min = Number(movie.imdbRating);
        worstRatedMovie = movie;
      }
    }

    return worstRatedMovie;
  }

  createChart() {
    let chart = new CanvasJS.Chart("worstRatedMoviesChartContainer", {
      animationEnabled: true,
      exportEnabled: false,
      title: {
        text: "Worst rated movies"
      },
      data: [{
        type: "pie",
        dataPoints: [
          { y: Number(this.worstRatedAction.imdbRating), label: "Action (" +  this.worstRatedAction.Title +")" },
          { y: Number(this.worstRatedDrama.imdbRating), label: "Drama (" + this.worstRatedDrama.Title +")" },
          { y: Number(this.worstRatedRomantic.imdbRating), label: "Romantic (" +  this.worstRatedRomantic.Title +")" },
          { y: Number(this.worstRatedThriller.imdbRating), label: "Thriller (" +  this.worstRatedThriller.Title +")" },
          { y: Number(this.worstRatedHorror.imdbRating), label: "Horror (" +  this.worstRatedHorror.Title +")" },
          { y: Number(this.worstRatedComedy.imdbRating), label: "Comedy (" +  this.worstRatedComedy.Title +")" }
        ]
      }]
    });
      
    chart.render();
  }

}
