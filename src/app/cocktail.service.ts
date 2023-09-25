import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Cocktail } from './model/Cocktail';

@Injectable({
  providedIn: 'root',
})
export class CocktailService {
  constructor(public http: HttpClient) {}

  public getCocktails(): Observable<Cocktail[]> {
    return this.http.get<Cocktail[]>('assets/cocktails.json');
  }
}
