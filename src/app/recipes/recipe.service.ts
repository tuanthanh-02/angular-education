import { Injectable, EventEmitter, Output } from '@angular/core';
import { Recipes } from '../shared/recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { BehaviorSubject, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipes : Recipes[] = [
    new Recipes( " Bò bít tết ", 
    "Nó là món bò bít tết", 
    "https://cdn.tgdd.vn/Files/2018/12/16/1138609/cach-lam-bo-bit-tet-don-gian-nhung-ngon-tuyet-cu-meo-202201041019494331.jpg",
    [
      new Ingredient('meat', 3),
      new Ingredient('vegetable', 5)
    ]),
    new Recipes( " Đậu phộng chiên ",
     "Nó là đậu phộng chiên", 
     "https://i.ytimg.com/vi/AVrnrqMU2as/maxresdefault.jpg",
     [
      new Ingredient('pinut', 3),
      new Ingredient('sugar', 5)
     ])
  ];
  constructor() { }
  updateRecipes =  new BehaviorSubject<Recipes[]>(this.recipes)
  trfRecipe = new Subject<[Recipes,number]>()
  IdRecipe = new Subject<number>()
  getRecipes(){
    return this.recipes.slice()
  }
  getRecipe(index : number){
    return this.recipes[index]
  }
  getTransRecipe(recipe : Recipes, index : number){
    this.trfRecipe.next([recipe,index])
  }
  getIdRecipe(index : number){
    this.IdRecipe.next(index)
  }
  getUpdateRecipe(recipe: Recipes[]){
    this.updateRecipes.next(recipe)
  }
}
