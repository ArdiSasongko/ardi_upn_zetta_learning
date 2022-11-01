import { Component, OnInit } from '@angular/core';
import { Card } from '../Card';
import { Cards } from '../Mock-Card';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  cards: Card[] = Cards;

  buttonDetail: boolean[]=[false,false,false,false]
  constructor() { }

  ngOnInit(): void {
  }
  showDetail(param:any){
    this.buttonDetail[param] = !this.buttonDetail[param];
  }

}
