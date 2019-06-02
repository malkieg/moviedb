import { Component, OnInit } from '@angular/core';
import {MoviedbService} from '../../../models/moviedb.service';
import {Movies} from '../../../models/movies';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  constructor(private moviedb: MoviedbService) {}

  ngOnInit() {
    // this.moviedb.movieSearch(this.query).subscribe( results => {
    //   console.log(results);
    // });
  }
}
