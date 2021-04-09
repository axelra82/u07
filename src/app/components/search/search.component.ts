import { Component } from '@angular/core';
import { MealdbService } from '../../services/recipes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  constructor(
    private _mealdbService:MealdbService,
  ) { }


  userSearch(str:string){
    if(str === undefined || str === ''){
      str = 'Arrabiata';
    }

    console.log(`In search component: ${str}`);
    this._mealdbService.mealSearch(str);
  }

  ngOnInit(): void { }
}
