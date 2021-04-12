import { Component, PipeTransform } from '@angular/core';
import { Router, ActivatedRoute  } from '@angular/router';




@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  randomArray = [
    'arrabiata',
    'vegan',
    'chicken',
    'chocolate'
  ];
  
  searchString: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {
    
  }

  randomString() {
    this.searchString = this.randomArray[Math.floor(Math.random() * this.randomArray.length)];
  }

  searchPlaceholder() {
    this.randomString();
    return this.searchString;
  }

  searchRecipes(str:string) {

    while(str === undefined || str === ''){
      str = window.prompt('You forgot to enter something to search for. Try someting like:', `${this.searchString}`);
    }

    this.router.navigate(
      ['/'],
      {
        queryParams: {
          'search': str.toLowerCase()
        }
      }
    );
  }
}
