import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MoviedbService} from '../../../models/moviedb.service';
import {Movies} from '../../../models/movies';
import {Location} from '@angular/common';

@Component({
  selector: 'app-one-movie',
  templateUrl: './one-movie.component.html',
  styleUrls: ['./one-movie.component.scss']
})
export class OneMovieComponent implements OnInit {
id: string;
title: string;
movie: Movies;
  constructor(private activatedRoute: ActivatedRoute, private moviedb: MoviedbService, private location: Location) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
     this.viewMovie();
  }
// will use service to get one specific movies info and save that into the movie variable
  viewMovie(): void {
    this.moviedb.fetchMovieById(this.id).subscribe((res) => {
      this.movie = new Movies(res);
    });
  }

  // allows user to go back to the results page
  cancel() {
    this.location.back();
  }
}
