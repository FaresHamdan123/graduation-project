import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  startEditing = new Subject<number>();
   private ingredients: Ingredient[] =  [
    new Ingredient( 'tomato',4),
    new Ingredient( 'ffff',5),
    new Ingredient( 'tttr',4)
  ];

   getIngredients(){
     return this.ingredients.slice();

   }
   getIngredient(index: number){
     return this.ingredients[index];
   }
   addIngredient(ingrdient: Ingredient){
     this.ingredients.push(ingrdient);
     this.ingredientsChanged.next(this.ingredients.slice());
   }
   addIngredients(ingrdient: Ingredient[]){
  this.ingredients.push(...ingrdient);
  this.ingredientsChanged.next(this.ingredients.slice());
   }
   updateIngredient(index: number , newIngredient: Ingredient){
     this.ingredients[index] = newIngredient;
     this.ingredientsChanged.next(this.ingredients.slice());
   }
   deleteIngredient(index: number){
     this.ingredients.splice(index , 1);
     this.ingredientsChanged.next(this.ingredients.slice());
   }
}
