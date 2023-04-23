import { Component, OnInit,} from '@angular/core';
import { Recipes } from '../../shared/recipe.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';
@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {
  delmode = false
  recipe : Recipes
  recipes : Recipes[]
  id : number
  isClickShoping = false
  constructor(private route: ActivatedRoute,
              private recipeService : RecipeService,
              private router: Router){}
  ngOnInit(){
    this.recipeService.updateRecipes.subscribe(update =>{
      this.recipes = update
    })
    this.route.params.subscribe((params : Params) => {
        this.id = params['id'];
        this.recipe = this.recipes[this.id]
  })
}
  onEditRecipe(){
    this.router.navigate(['edit'], {relativeTo : this.route})
  }
  onDelRecipe(){
    this.recipeService.getTransRecipe(this.recipe, this.id)
    this.recipes.splice(this.id,1)
    this.recipeService.getUpdateRecipe(this.recipes)
    this.router.navigate(['recipes'])
  }
}
