import { Component, OnInit } from '@angular/core';
import { CocktailService } from '../cocktail.service';
import { Cocktail } from '../model/Cocktail';

@Component({
  selector: 'app-cocktails-list',
  templateUrl: './cocktails-list.component.html',
  styleUrls: ['./cocktails-list.component.scss'],
})
export class CocktailsListComponent implements OnInit {
  cocktails: Cocktail[] = [];
  constructor(public cocktailService: CocktailService) {}

  ngOnInit(): void {
    this.cocktailService.getCocktails().subscribe((cocktailsFromJsonFile) => {
      this.cocktails = cocktailsFromJsonFile;
    });
  }
}
