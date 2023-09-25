import { Injectable } from '@angular/core';
import { Cocktail } from './model/Cocktail';

@Injectable({
  providedIn: 'root',
})
export class CocktailService {
  private cocktails: Cocktail[] = [
    new Cocktail(
      'Mojito',
      10,
      'https://www.cocktailmag.fr/media/k2/items/cache/063ee9aeb9f60efa02823e51450f82ce_S.jpg'
    ),
    new Cocktail(
      'Gin Tonic',
      9,
      'https://www.cocktailmag.fr/media/k2/items/cache/4d8c9898b5bb88437f053c8b957f47f3_S.jpg'
    ),
    new Cocktail(
      'Irish Coffee',
      8,
      'https://www.cocktailmag.fr/media/k2/items/cache/7539a1b30386b8951ffea14c91e802dc_S.jpg'
    ),
    new Cocktail(
      'Pina Colada',
      11,
      'https://www.cocktailmag.fr/media/k2/items/cache/63503204d18160dd6a733e989b70c404_S.jpg'
    ),
    new Cocktail(
      'Moscow mule',
      10,
      'https://www.cocktailmag.fr/media/k2/items/cache/725ab2e5536ce3eac0a8dd17d083ff4e_S.jpg'
    ),
  ];
  constructor() {}

  public getCocktails(): Cocktail[] {
    return this.cocktails;
  }
}
