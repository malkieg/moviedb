import { Component, OnInit } from '@angular/core';
import {MoviedbService} from '../../../models/moviedb.service';
import {Movies} from '../../../models/movies';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  query: string;
  movies: Movies[];
  id: number;
  title: string;
  releaseDate: string;
  popularity: number;

  displayedColumns: string[] = ['title', 'popularity', 'releaseDate', 'seeMore'];

  constructor(private moviedb: MoviedbService, private activatedRoute: ActivatedRoute) {
      this.query = this.activatedRoute.snapshot.paramMap.get('query');
  }

  ngOnInit() {
    this.showMovies();
  }

  // This will search the database and return the first twenty movies with the search word and save them all in the movies array
  showMovies() {
    this.query = this.activatedRoute.snapshot.paramMap.get('query');
    this.moviedb.movieSearch(this.query).subscribe( res => {
        if (res[0]) {
          this.movies = [];
          res.forEach((item) => {
            item = new Movies(item);
            this.movies.push(item);
          });
        }

    });
  }
}
