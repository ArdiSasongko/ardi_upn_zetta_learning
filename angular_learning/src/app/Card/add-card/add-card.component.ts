import { Component, OnInit, ViewChild, ElementRef, EventEmitter} from '@angular/core';
import { CardService } from 'src/app/Card-Service/cardService';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.css']
})
export class AddCardComponent implements OnInit {
  @ViewChild('name') name !: ElementRef;
  @ViewChild('img') img !: ElementRef;
  @ViewChild('power') power !: ElementRef;
  @ViewChild('desc') desc ! : ElementRef;

  constructor(private CardService : CardService) { }

  card:{name:string,img:string,power:string}[]=[];

  ngOnInit(): void {
    this.card = this.CardService.cardItem
  }

  onCardItem(name:string, img:string, power:string, desc:string){
    this.CardService.onCardItem(name,img,power,desc)
  }
}

