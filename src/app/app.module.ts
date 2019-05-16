import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';

import { StaticComparisonsComponent } from './components/static-comparisons/static-comparisons.component';
import { AvgMovieLengthComponent } from './components/static-comparisons/avg-movie-length/avg-movie-length.component';
import { AvgMovieRatingComponent } from './components/static-comparisons/avg-movie-rating/avg-movie-rating.component';
import { LongestMoviesComponent } from './components/static-comparisons/longest-movies/longest-movies.component';
import { ShortestMoviesComponent } from './components/static-comparisons/shortest-movies/shortest-movies.component';
import { BestRatedMoviesComponent } from './components/static-comparisons/best-rated-movies/best-rated-movies.component';
import { WorstRatedMoviesComponent } from './components/static-comparisons/worst-rated-movies/worst-rated-movies.component';

@NgModule({
  declarations: [
    AppComponent,
    StaticComparisonsComponent,
    AvgMovieLengthComponent,
    AvgMovieRatingComponent,
    LongestMoviesComponent,
    ShortestMoviesComponent,
    BestRatedMoviesComponent,
    WorstRatedMoviesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FlexLayoutModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
