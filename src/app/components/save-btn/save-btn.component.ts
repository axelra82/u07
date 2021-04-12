import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-save-btn',
  templateUrl: './save-btn.component.html',
  styleUrls: ['./save-btn.component.scss']
})
export class SaveBtnComponent implements OnInit {

  @Input() saveBtnData: any;

  isSaved: boolean;
  recipe: any;

  savedRecipes = JSON.parse(localStorage.getItem('nomnombase'));
  // isSaved: boolean;
  //!this.savedRecipes ? false : this.savedRecipes.some((recipe: any) => recipe.idMeal === this.recipe.idMeal);

  constructor() { }

  ngOnInit(): void {
    // console.log(this.recipe);
    this.isSaved = this.saveBtnData.isSaved;
    this.recipe = this.saveBtnData.recipe;
    // console.log(this.savedRecipes);
    // if(this.savedRecipes){
      
    // }
  }

  onClick(){
    // console.log(this.isSaved);
    
    if(this.isSaved){
      
      // console.log(this.saveBtnData.recipe);
      console.log(
        

      );
      this.savedRecipes = this.savedRecipes.filter((e:any) => e.idMeal !== this.recipe.idMeal)
      localStorage.setItem('nomnombase', JSON.stringify(this.savedRecipes));
      this.isSaved = false;
    }else{
      if(!this.savedRecipes){
        this.savedRecipes = [];
      }

      this.savedRecipes.push(this.recipe);    
      localStorage.setItem('nomnombase', JSON.stringify(this.savedRecipes));
      this.isSaved = true;
    }
  }
}
