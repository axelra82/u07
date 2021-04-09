import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.scss']
})
export class SingleComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    // console.log('on recipe page');
    // console.log(this.route.snapshot.params);
    
    // this.route.queryParams.subscribe(params => {
    //   this.name = params['name'];
    // });
  }

}
