import { Injectable } from '@angular/core';
import { HEROES } from '../data/hero-mock';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  item=[]
  constructor() { }
  getItems(){
    this.item.push({data:HEROES,status:'ok',code:300});
    return this.item;
  }
  clearItems(){
    this.item=[];
    return this.item;
  }
}
