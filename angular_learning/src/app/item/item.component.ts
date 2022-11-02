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
    price: number;
    img: string;
  };

  @Input() indexItem !: number;

  @Output('dispAdd') dispAdded = new EventEmitter<{name:string, price:number, img:string}>();

  constructor() { }

  ngOnInit(): void {
  }

  onDisplayAdd(){
    this.dispAdded.emit({
      name : this.element.name,
      price : this.element.price,
      img : this.element.img
    });
   }
}
