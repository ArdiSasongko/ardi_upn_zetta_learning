import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  @Input('display') element !:{
    title : string,
    stock : number,
    price : number
  }

  @Input() indexDisplay !: number;
  @Output() deleteDisplay = new EventEmitter<{dispTitle:string,dispStock:number,dispPrice:number}>();
  constructor() { }

  ngOnInit(): void {
  }

  delDisplay(){
    this.deleteDisplay.emit({
      dispTitle:this.element.title,
      dispStock:this.element.stock,
      dispPrice:this.element.price,
    })
  }
}
