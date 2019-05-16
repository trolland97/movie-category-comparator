import { Movie } from '../models/movie.model';

export interface IResponse {
    "Categories": {
        "Action": Movie[],
        "Horror": Movie[],
        "Comedy": Movie[],
        "Romantic": Movie[],
        "Thriller": Movie[],
        "Drama": Movie[]
    }
}