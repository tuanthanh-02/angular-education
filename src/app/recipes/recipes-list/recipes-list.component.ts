import { Component,OnInit,Output,EventEmitter } from '@angular/core';
import { Recipes } from '../../shared/recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipeSelect : Recipes
  recipes: Recipes[]
  constructor(private recipeService : RecipeService,
              private router : Router,
              private route : ActivatedRoute
              ){}
  ngOnInit(){
    this.recipeService.updateRecipes.subscribe(update => {
        this.recipes = update
    })
    this.recipeService.trfRecipe.subscribe(update =>{
      this.recipes[update[1]] = update[0]
    })
  }
    onNewRecipe(){
    this.router.navigate(['new'], {relativeTo : this.route});
  }
}
