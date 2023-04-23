import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShopingService } from './shoping.service';
@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.css']
})
export class ShopingListComponent implements  OnInit{
  ingredient : Ingredient[] 
  index : number
  constructor(private shopingService : ShopingService){}
  ngOnInit() {
    this.ingredient = this.shopingService.getIngredient()
    }
  onAdded(ingre : Ingredient){
    this.ingredient.push(ingre);
  }
  onEdit(index : number){
    this.index = index
  }
  onDelete(i : number){
    this.ingredient.splice(i,1)
}
}