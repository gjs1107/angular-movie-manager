import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MovieAddrComponent } from '../pages/movie/movie-add.component';
import { GameAddrComponent } from '../pages/game/game-add.component';
import { ShowAddrComponent } from '../pages/show/show-add.component';

const routes: Routes = [
  { path: '',  component: MovieAddrComponent },
  { path: 'movie-add', component: MovieAddrComponent},
  { path: 'game-add', component: GameAddrComponent},
  { path: 'show-add', component: ShowAddrComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
