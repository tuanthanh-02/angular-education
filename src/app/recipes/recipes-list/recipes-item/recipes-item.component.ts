import { Component, Input,OnInit} from '@angular/core';
import { Recipes } from '../../../shared/recipe.model';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent implements OnInit{
  @Input()recipes : Recipes
  @Input()index : number
  ngOnInit() {
  }
}

