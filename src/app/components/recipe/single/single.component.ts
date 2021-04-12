import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MealdbService } from '../../../services/recipes.service';
import { Recipes } from '../../../models/recipes.model';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.scss']
})
export class SingleComponent implements OnInit {

  recipeData: Recipes['single'];
  details: object;

  constructor(
    private route: ActivatedRoute,
    private mealService: MealdbService,
  ) { }

  // Function for recipe ingredient/measurement extraction to array
  recipeDetails(recipe){

    // Create empty array
    const detailsArray = [];

    // We know the number of items to loop, so lets set it to 20
    for(let i=1; i < 20; i++){
      // Extract each item pair using dynamic property keys
      const ingredient = recipe[`strIngredient${i}`];
      const measure = recipe[`strMeasure${i}`];
      
      // Skip items that have neither value
      if(ingredient || measure){
        
        // Create inner array for ingredient and measurement
        const lineArray = [
          ingredient,
          measure,
        ];

        // Push result to detailsArray
        detailsArray.push(lineArray);
      }
    }

    this.details = detailsArray;
  }

  ngOnInit() {
    this.mealService.single(this.route.snapshot.params.id).subscribe(
      data => {
        console.log(data.meals[0]);
        this.recipeData = data.meals[0];
        this.recipeDetails(this.recipeData);
      }
    )
  }
}
