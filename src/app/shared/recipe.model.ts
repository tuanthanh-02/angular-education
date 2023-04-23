import { Ingredient } from "./ingredient.model";
export class Recipes{
    public name :string;
    public descripsion:string;
    public imagePath:String;
    public ingredient: Ingredient[];
    constructor(name:string, desc: string, imagePath:string, ingredient:Ingredient[]){
        this.name=name;
        this.descripsion=desc;
        this.imagePath=imagePath;
        this.ingredient = ingredient
    }
}