import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MoviesComponent} from './views/results/movies/movies.component';
import {SearchComponent} from './views/search/search.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'search'},
  {path: 'search', component: SearchComponent },
  {path: 'results/:id', component: MoviesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
