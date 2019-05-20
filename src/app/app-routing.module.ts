import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './components/error/error.component';
import { AvgMovieLengthComponent } from './components/avg-movie-length/avg-movie-length.component';
import { AvgMovieRatingComponent } from './components/avg-movie-rating/avg-movie-rating.component';
import { BestRatedMoviesComponent } from './components/best-rated-movies/best-rated-movies.component';
import { WorstRatedMoviesComponent } from './components/worst-rated-movies/worst-rated-movies.component';
import { LongestMoviesComponent } from './components/longest-movies/longest-movies.component';
import { ShortestMoviesComponent } from './components/shortest-movies/shortest-movies.component';
import { AppComponent } from './components/app.component';

const routes: Routes = [
  {path: '', redirectTo: '/avglength', pathMatch: 'full'},
  {path: 'avglength', component: AvgMovieLengthComponent},
  {path: 'avgrating', component: AvgMovieRatingComponent},
  {path: 'bestrated', component: BestRatedMoviesComponent},
  {path: 'worstrated', component: WorstRatedMoviesComponent},
  {path: 'longest', component: LongestMoviesComponent},
  {path: 'shortest', component: ShortestMoviesComponent},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
