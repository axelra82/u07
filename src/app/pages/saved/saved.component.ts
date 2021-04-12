import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-saved',
  templateUrl: './saved.component.html',
  styleUrls: ['./saved.component.scss']
})
export class SavedComponent implements OnInit {
  
  count: number = 0;
  saved: [];
  recipesData: object = [];

  constructor(
    private router: Router,
    private store: Store,
  ) { }

  ngOnInit(): void {
    this.recipesData = [
      'test'
    ]
    // this.store.subscribe(
    //   (data:any) => {
    //     this.saved = data.recipes.saved;
    //     this.count = this.saved.length;
    //   }
    // );
  }
}
