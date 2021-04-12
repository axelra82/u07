import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as PostActions from '../../../actions/post.actions';
import { Recipes } from '../../../models/recipes.model';

interface AppState {
  recipes: Recipes;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  recipesSubscriber: Observable<Recipes>
  recipesList: [];

  constructor(
    private store: Store<AppState>
  ) {    
    this.recipesSubscriber = this.store.select('recipes');
    
  }

  ngOnInit(): void {
    this.recipesSubscriber.subscribe(
      data => this.recipesList = data.list
    )
  }
}
