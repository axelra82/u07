import { Component } from '@angular/core';
import { RecipesService } from '../../services/recipes.service';
import { Observable } from 'rxjs';

interface Recipes {
  // meal: object;
  dateModified: string
  idMeal: string
  strArea: string
  strCategory: string
  strCreativeCommonsConfirmed: boolean
  strDrinkAlternate: string
  strImageSource: string
  strIngredient1: string
  strInstructions: string
  strMeal: string
  strMealThumb: string
  strMeasure1: string
  strSource: string
  strTags: string
  strYoutube: string
}

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent {

  // constructor() { }
  recipes: Recipes[] = [];

  constructor(
    private _recipesService:RecipesService
    ) {

  }
  
  searchRecipes(searchString:string){
    if(searchString === null || searchString === ''){
      searchString = 'Arrabiata';
    }

    // this.recipes = this._recipesService.getRecipes(searchString);
    
    this._recipesService.getRecipes(searchString).subscribe(data => {
      
      this.recipes = data.meals;
      // console.log(data.meals);
      
      
      
      // data.meals.map((meal:any) => {
      //   console.log(meal.strMeal);
      // })
      
    });
    
    // console.log(this.recipes);
    
    // this.recipes.map(recipe => {
    //   console.log(recipe);
    // })
    
  }

  ngOnInit(): void {
  }


}
