import { Component } from '@angular/core';
import { Hero } from './hero';

const HEROES: Hero[] = [
  { id: 11, name: 'mr.nice' },
  { id: 22, name: 'mr.nice2' },
  { id: 33, name: 'mr.nice3' },
  { id: 44, name: 'mr.nice4' },
  { id: 55, name: 'mr.nice5' },
  { id: 66, name: 'mr.nice6' },
  { id: 77, name: 'mr.nice7' },
  { id: 88, name: 'mr.nice8' },
  { id: 99, name: 'mr.nice9' },
  { id: 10, name: 'mr.nice10' }
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tour of heroes';
  heroes = HEROES;
  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
