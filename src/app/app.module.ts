import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';

import { MaterialModule } from './material.module';

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';

import { AvgMovieLengthComponent } from './components/avg-movie-length/avg-movie-length.component';
import { AvgMovieRatingComponent } from './components/avg-movie-rating/avg-movie-rating.component';
import { LongestMoviesComponent } from './components/longest-movies/longest-movies.component';
import { ShortestMoviesComponent } from './components/shortest-movies/shortest-movies.component';
import { BestRatedMoviesComponent } from './components/best-rated-movies/best-rated-movies.component';
import { WorstRatedMoviesComponent } from './components/worst-rated-movies/worst-rated-movies.component';
import { ErrorComponent } from './components/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    AvgMovieLengthComponent,
    AvgMovieRatingComponent,
    LongestMoviesComponent,
    ShortestMoviesComponent,
    BestRatedMoviesComponent,
    WorstRatedMoviesComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FlexLayoutModule,
    MaterialModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
