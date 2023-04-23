import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Recipes } from 'src/app/shared/recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editForm: FormGroup;
  editMode = false;
  recipes: Recipes[];
  nowRecipe: Recipes;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private rservice: RecipeService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
    });
    this.editForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      image: ['', Validators.required],
    });
    this.recipes = this.rservice.getRecipes();
    this.nowRecipe = new Recipes('', '', '', []);
    if (this.editMode == true) {
      this.nowRecipe = this.recipes[this.id];
      this.editForm.patchValue({
        name: this.nowRecipe.name,
        description: this.nowRecipe.descripsion,
        image: this.nowRecipe.imagePath,
      });
    }
  }
  onSubmit() {
    this.nowRecipe.name = this.editForm.value.name;
    this.nowRecipe.descripsion = this.editForm.get('description').value;
    this.nowRecipe.imagePath = this.editForm.value.image;
    this.rservice.getTransRecipe(this.nowRecipe, this.id);
  }
}