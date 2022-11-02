import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  @Input('display') item !:{
    name: string,
    price: number,
    img : string
  }

  @Input() indexItem !: number;

  @Output('dispDell') dispDelete = new EventEmitter<{name:string, price:number, img:string}>();

  constructor() { }

  ngOnInit(): void {
  }

  deleteDisp(){
    this.dispDelete.emit({
      name: this.item.name,
      price: this.item.price,
      img : this.item.img
    })
  }
}
