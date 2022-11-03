import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input('item') element !:{
    title : string,
    stock : number,
    price : number
  }

  @Input() indexItem !: number;
  @Output() addedDisplay = new EventEmitter<{dispTitle:string,dispStock:number,dispPrice:number}>();
  constructor() { }

  ngOnInit(): void {
  }

  addDisplay(){
    this.addedDisplay.emit({
      dispTitle : this.element.title,
      dispStock : this.element.stock,
      dispPrice : this.element.price
    })
  }
}
