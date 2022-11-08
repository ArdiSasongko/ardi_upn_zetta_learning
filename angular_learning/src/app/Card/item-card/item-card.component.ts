import { Component, OnInit } from '@angular/core';
import { CardService } from 'src/app/Card-Service/cardService';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css']
})
export class ItemCardComponent implements OnInit {

  constructor(private CardService : CardService) { }

  cards !: {name:string,img:string,power:string};

  cardsItem:{name:string,img:string,power:string,desc:string}[]=[]; 
  ngOnInit(): void {
    this.CardService.cardCreated.subscribe((data:{name:string,img:string,power:string})=>{this.cards=data})
    this.cardsItem = this.CardService.cardItem
  }

  detail(cardItem:{name:string,img:string,power:string,desc:string}){
    this.CardService.detail(cardItem)
  }
}
