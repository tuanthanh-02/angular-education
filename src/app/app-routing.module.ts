import { NgModule, } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShopingListComponent } from './shoping-list/shoping-list.component';
import { RecipesStartComponent } from './recipes/recipes-start/recipes-start.component';
import { RecipesDetailComponent } from './recipes/recipes-detail/recipes-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';

const routes: Routes = [
  { path: 'recipes' , component: RecipesComponent, children: [
    {
      path:'', component: RecipesStartComponent
    },
    {
      path:'new', component: RecipeEditComponent
    },
    {
      path:':id' , component: RecipesDetailComponent
    },
    {
      path:':id/edit', component: RecipeEditComponent
    }
  ] },
  { path: 'shoping-list', component: ShopingListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
