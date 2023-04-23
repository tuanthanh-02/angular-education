import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShopingService } from '../shoping.service';

@Component({
  selector: 'app-shoping-edit',
  templateUrl: './shoping-edit.component.html',
  styleUrls: ['./shoping-edit.component.css']
})
export class ShopingEditComponent{
  @Output() emitIng = new EventEmitter<Ingredient>();
  @Output() inDelete = new EventEmitter<number>();
  @Input() index : number
  @Input() ingre : Ingredient[]
  constructor(private slService : ShopingService){}
  onEdit(form : NgForm){
    form.value.name = this.ingre[this.index].name
    form.value.amount = this.ingre[this.index].amount
    console.log()
  }
  onAddIngredian(form : NgForm){
    const value = form.value
    const newIngredian = new Ingredient(value.name, value.amount)
    this.emitIng.emit(newIngredian);
    form.reset()
  }
  onDelete(){
    this.inDelete.emit(this.index)
  }
  onClear(form : NgForm){
      form.reset()
  }

}
