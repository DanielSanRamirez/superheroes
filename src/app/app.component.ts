import { Component } from '@angular/core';
import superheroes, {getSuperheroCreators as rennameSuperheroCreators, getSuperheroLocation} from './superhero';

rennameSuperheroCreators("batman");

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'superheroes';

  
}
