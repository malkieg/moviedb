import { Component, OnInit } from '@angular/core';
import {MoviedbService} from '../../models/moviedb.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  query: string;

  constructor(private movieDb: MoviedbService) { }

  ngOnInit() {
  }

  search() {
    this.movieDb.movieSearch(this.query).subscribe( results => {
      console.log(results);
    });
  }

}
