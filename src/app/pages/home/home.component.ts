import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as PostActions from '../../actions/post.actions';

import { MealdbService } from '../../services/recipes.service';

import { Recipes } from '../../models/recipes.model';

interface AppState {
  recipes: Recipes;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  searchString: string;

  recipesSubscriber: Observable<Recipes>
  recipesData: object = [];

  constructor(
    private store: Store<AppState>,
    private router: Router,
    private route: ActivatedRoute,
    private mealdbService:MealdbService,
  ) {    
    this.recipesSubscriber = this.store.select('recipes');
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.searchString = params.search;
      
      // Make sure search string isn't empty
      if(this.searchString){
        this.mealdbService.list(this.searchString).subscribe(
          data => {
            // Make sure we have data
            if(data.meals !== null){
              // this.store.dispatch(new PostActions.GetRecipes(data.meals));
              this.recipesData = data.meals;
            }
          }
        );
      }
    });


    // this.recipesSubscriber.subscribe(
    //   data => {
    //     this.recipesData = data.list
    //     console.log(this.recipesData)
        
    //   }
    // );
    // if(this.router.url !== '/saved'){
    //   this.recipesSubscriber.subscribe(
    //     data => this.recipesList = data.list
    //   );
    // }else{
    //   this.store.subscribe(
    //     (data:any) => {
    //       console.log(data.recipes.saved);
    //     }
    //   );
    // }
  }
}


// import { Component, OnInit } from '@angular/core';
// import {  ActivatedRoute  } from '@angular/router';
// import { Store } from '@ngrx/store';
// import * as PostActions from '../../actions/post.actions';
// import { Recipes } from '../../models/recipes.model';
// import { MealdbService } from '../../services/recipes.service';

// interface AppState {
//   recipes: Recipes;
// }

// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.scss']
// })
// export class HomeComponent implements OnInit {
  
//   searchString: string;
//   results: number = 0;

//   constructor(
//     private route: ActivatedRoute,
//     private store: Store<AppState>,
//     private mealdbService:MealdbService,
//   ) {
    
//   }

//   ngOnInit(): void {

//     this.route.queryParams.subscribe(params => {
//       this.searchString = params.search;
      
//       // Maker sure search string isn't empty
//       if(this.searchString){
//         this.mealdbService.list(this.searchString).subscribe(
//           data => {
//             // Make sure we have data
//             if(data.meals !== null){
//               this.store.dispatch(new PostActions.GetRecipes(data.meals));
//               this.results = data.meals.length;
//             }
//           }
//         );
//       }
//     });
//   }
// }
