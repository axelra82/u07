import { Component, OnInit, Input } from '@angular/core';
// import { Router } from '@angular/router';
// import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

// import { Recipes } from '../../../models/recipes.model';

// interface AppState {
//   recipes: Recipes;
// }

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  
  @Input() recipesData:any;
  // recipesSubscriber: Observable<Recipes>
  // recipesList: [];

  constructor(
    // private store: Store<AppState>,
    // private router: Router,
  ) {    
    // this.recipesSubscriber = this.store.select('recipes');
  }

  ngOnInit(): void {
    console.log(this.recipesData);
    
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
