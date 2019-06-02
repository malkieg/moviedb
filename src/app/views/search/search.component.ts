import { Component, OnInit } from '@angular/core';
import {MoviedbService} from '../../models/moviedb.service';
import {Movies} from '../../models/movies';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  query: string;
  movies: Movies[];
  id: number;
  title: string;
  releaseDate: string;
  overview: string;

  displayedColumns: string[] = ['title', 'releaseDate', 'seeMore'];

  constructor(private movieDb: MoviedbService) { }

  ngOnInit() {
  }

  // This will search the database and return the first twenty movies with the search word
  search() {
    this.movieDb.movieSearch(this.query).subscribe( res => {
        if (res[0]) {
          this.movies = [];
          res.forEach((item) => {
            item = new Movies(item);
            this.movies.push(item);
          });
        }

    });
  }
// reroute to movies result component
  viewMore(id) {
    console.log(id);
  }

}
