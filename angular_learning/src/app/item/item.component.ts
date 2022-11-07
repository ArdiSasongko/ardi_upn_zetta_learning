import { Component, OnInit, ElementRef, Output, EventEmitter, ViewChild } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Output('dispCreated') onAddDisp = new EventEmitter<{disp:string}>(); 
  @ViewChild('dispContent',{static:true}) dispContent !: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

  dispAdded(nameInput : HTMLInputElement){
    this.onAddDisp.emit({
      disp:nameInput.value
    })
  }
}
