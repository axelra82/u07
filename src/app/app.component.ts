import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  constructor() { }

  ngOnInit(): void {
  }
  // constructor(private reciepsService:ReciepsService){}
  
  // public searchRecieps(data:string){
  //   console.log(data);
  //   // const recieps = this.reciepsService.getRecieps(data);
    
  // }

  // ngOnInit(){
  //   this.reciepsService.searchString$.subscribe(reciep => {
  //     console.log(reciep);
  //   })
  // }
  // onSubmit(data: any)
  // {
  //   console.log(data.form.value.searchString);
  // }
  // searchString:string = '';
  
  // public searchVal() {
  //   console.log(this.searchString);
  // }

  // constructor(private search:ReciepsService){}

  // ngOnInit() {

  // }
}

// this.search.getData(this.searchString)?.subscribe(data => {
//   console.log(data)
// })