import { Component, OnInit } from '@angular/core';
import { CardService } from 'src/app/Card-Service/cardService';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(private CardService:CardService) { }
  cards !: {name:string,img:string,power:string,desc:string};
  ngOnInit(): void {
    this.CardService.cardCreated.subscribe((data:{name:string,img:string,power:string,desc:string})=>{
      this.cards = data
    })
  }

}
