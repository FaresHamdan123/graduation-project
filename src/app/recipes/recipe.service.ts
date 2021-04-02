import {Recipe} from './recipe.model';
import { Injectable} from '@angular/core';
import  { Ingredient } from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import {Subject} from 'rxjs';
@Injectable()
export class RecipeService {
  recipeChanged = new Subject<Recipe[]>();
 // recipeSelected = new EventEmitter<Recipe>();
   private recipes: Recipe[] = [
    new Recipe( 'test1',
      'this is a test1',
      'https://dcassetcdn.com/design_img/10150/18538/18538_298076_10150_image.jpg' ,
      [ new Ingredient('meat',1),
                  new Ingredient('French',1),
                  new Ingredient('xxxx',1)]),

    new Recipe( 'test2',
      'this is a test2',
      'https://tse2.mm.bing.net/th?id=OIP.ehlu6qDUt0EZhQOfmCDu4gHaG0&pid=Api&P=0&w=207&h=191',
      [new Ingredient('tomTO',1),
                 new Ingredient('meat',1)]),

    new Recipe( 'test3',
      'this is a test3',
      'https://tse1.mm.bing.net/th?id=OIP.LauhQP6U3UrrbGZAi3AKTAHaHT&pid=Api&P=0&w=161&h=160',
      [new Ingredient('xxxx',1)]),

    new Recipe( 'test4',
      'this is a test4',
      'http://technicallyteamann.com/wp-content/uploads/2017/03/Recipe_logo-1.jpeg',
      [new Ingredient('xxxx',1)])
     ];
   constructor(private slService: ShoppingListService) {
   }
   getRecipes(){
     return this.recipes.slice();

   }
   addIngredientsToShoppingList(ingredients: Ingredient[]){
      this.slService.addIngredients(ingredients);
   }
   getRecipe(index: number){
     return this.recipes[index];

   }
   addRecipe(recipe: Recipe){
     this.recipes.push(recipe);
     this.recipeChanged.next(this.recipes.slice());
   }
   updateRecipe(index: number , newRecipe: Recipe){
     this.recipes[index] = newRecipe;
     this.recipeChanged.next(this.recipes.slice());
   }
   deleteRecipe(index: number){
     this.recipes.splice(index , 1);
     this.recipeChanged.next(this.recipes.slice());

   }
   setRecipe(recipes: Recipe[]){
     this.recipes = recipes ;
     this.recipeChanged.next(this.recipes.slice());

   }
}
