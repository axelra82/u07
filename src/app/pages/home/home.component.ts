import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute  } from '@angular/router';
import { Store } from '@ngrx/store';
import * as PostActions from '../../actions/post.actions';
import { Recipes } from '../../models/recipes.model';
import { MealdbService } from '../../services/recipes.service';

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

  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>,
    private mealdbService:MealdbService,
  ) {
    
  }

  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
      console.log(params['search'])
      this.searchString = params['search']

      this.mealdbService.list(this.searchString).subscribe(
        data => {
          this.store.dispatch(new PostActions.GetRecipes(data.meals))
        }
      );
    });
  }
}
