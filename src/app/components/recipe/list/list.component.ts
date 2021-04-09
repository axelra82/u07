import { Component, OnInit } from '@angular/core';
import { MealdbService } from '../../../services/recipes.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  // recipes: any;

  constructor(private _mealdbService: MealdbService) { }
  
  // get recipeData(): any{
  //   return this._mealdbService.recipeData;
  // }

  // set recipes(object:any){
  //   // this._mealdbService.recipeData;
  // };
  
  ngOnInit() {
    this._mealdbService.recipeData.subscribe(data => {
      console.log('Subscribe data');
      console.log(data);
      // this.recipes = data;
    });
  }

}
