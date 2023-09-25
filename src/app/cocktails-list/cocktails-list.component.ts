import { Component } from '@angular/core';
import { CocktailService } from '../cocktail.service';

@Component({
  selector: 'app-cocktails-list',
  templateUrl: './cocktails-list.component.html',
  styleUrls: ['./cocktails-list.component.scss'],
})
export class CocktailsListComponent {
  constructor(public cocktailService: CocktailService) {}

  cocktails = this.cocktailService.getCocktails();
}
