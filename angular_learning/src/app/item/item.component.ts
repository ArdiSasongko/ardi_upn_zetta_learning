import { Component, OnInit, Input, EventEmitter,Output} from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input('item')
  element!: {
    name: string;
    price: Number;
    img: string;
  };

  @Input() indexItem !: number;

  @Output('dispAdd') dispAdded = new EventEmitter<{name:string, price:number, img:string}>();

  constructor() { }

  ngOnInit(): void {
  }

  onDisplayAdd(dispData:{dispName:string,dispPrice:number,dispImg:string}){
    this.dispAdded.emit({
      name : dispData.dispName,
      price : dispData.dispPrice,
      img : dispData.dispImg
    });
   }
}
