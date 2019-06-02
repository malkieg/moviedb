import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MoviedbService} from '../../../models/moviedb.service';
import {Movies} from '../../../models/movies';

@Component({
  selector: 'app-one-movie',
  templateUrl: './one-movie.component.html',
  styleUrls: ['./one-movie.component.scss']
})
export class OneMovieComponent implements OnInit {
id: string;
title: string;
movie: Movies;
  constructor(private activatedRoute: ActivatedRoute, private moviedb: MoviedbService) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.id);
  }

  ngOnInit() {
     this.viewMovie();
  }

  viewMovie(): void {
    this.moviedb.fetchMovieById(this.id).subscribe((res) => {
      this.movie = new Movies(res);
      console.log(this.movie);
      console.log(res);
    });
  }
}
