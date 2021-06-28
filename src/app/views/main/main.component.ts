import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/data/person';
import { CartServiceService } from 'src/app/service/cart-service.service';
import{Hero} from '../../data/hero'
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private cartService:CartServiceService) {}
  hero:Hero={id:100,name:'raoxiaokang'};
  person:Person[]=[{id:200,name:'rxk',addr:'wuhan'},
  {id:200,name:'rxk',addr:'bj'},
  {id:200,name:'rxk',addr:'sh'},
  {id:200,name:'rxk',addr:'wc'}];
  ngOnInit(): void {

    console.log(this.hero);
    console.log(this.person)
    console.log(this.cartService.getItems());
  }

}
