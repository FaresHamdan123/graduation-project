import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {RecipeService} from '../recipes/recipe.service';
import {Recipe} from '../recipes/recipe.model';


@Injectable()
export class DataStoragreService {
constructor(private http: HttpClient , private recipeService: RecipeService) {

}
storeRecipes(){
   return this.http.put('https://ng-recipe-book-2cdbe.firebaseio.com/recipes.json'
    , this.recipeService.getRecipes());

}
getRecipes (){
  this.http.get('https://ng-recipe-book-2cdbe.firebaseio.com/recipes.json')
    .subscribe(
      (response: any) => {
        const recipes: Recipe[] = response.json();
        this.recipeService.setRecipe( recipes);
      }
);
}
}
