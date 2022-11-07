import { Component, OnInit, OnChanges, OnDestroy, Input, SimpleChange, ViewChild, ContentChild, ElementRef, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit,OnChanges,OnDestroy {

  @Input('display') element !:{
    disp:string
  };

  @Input('toDisp')disp!:string;
  @ContentChild('contentParagraph',{static:true}) paragraph !: ElementRef;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges Called')
  }

  ngOnDestroy(): void {
    alert(this.paragraph.nativeElement.textContent)
  }
  ngOnInit(): void {
    console.log(this.paragraph.nativeElement)
  }

}
