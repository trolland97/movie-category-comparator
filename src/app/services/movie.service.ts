import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { IResponse } from '../models/response.model';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

    listMovies(): Observable<IResponse> {
        return this.http.get<IResponse>('assets/data/movies.json');
    }
}
