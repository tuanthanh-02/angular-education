import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
@Injectable({
  providedIn: 'root'
})
export class ShopingService {
  ingredient : Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Mango', 2),
  ];
  constructor() { }
  getIngredient(){
    return this.ingredient.slice()
  }
}
