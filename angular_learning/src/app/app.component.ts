import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   item = [{
    title : 'Si Kancil',
    stock : 10,
    price : 20000
},
{
    title : 'Buaya Kampung',
    stock : 5,
    price : 25000
},
{
    title : 'Ular Putih',
    stock : 5,
    price : 15000
}]

   display=[
    {
      title : "",
      stock : 0,
      price : 0,
    }
  ];

  addDisplay(dispInfo:{dispTitle:string,dispStock:number,dispPrice:number}){
    this.display.push({
      title : dispInfo.dispTitle,
      stock : dispInfo.dispStock,
      price : dispInfo.dispPrice
    })
  }

  delDisplay(dispInfo:{dispTitle:string,dispStock:number,dispPrice:number}){
    this.display.splice(this.display.findIndex(
      item => {return item.title === dispInfo.dispTitle}
    ),1)
  }
}
