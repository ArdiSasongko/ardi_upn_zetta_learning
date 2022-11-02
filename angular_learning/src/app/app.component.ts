import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   item = [{
    name : 'Si Kancil',price : 20000,img : 'https://www.goodnewsfromindonesia.id/uploads/infographic/image-dongeng-si-kancil-yang-mewakili-kepribadian-orang-jawa-2-1646995863.png'
   },
   {
    name : 'Si Kancil',price : 20000,img : 'https://www.goodnewsfromindonesia.id/uploads/infographic/image-dongeng-si-kancil-yang-mewakili-kepribadian-orang-jawa-2-1646995863.png'
   }]
  
  

   onDisplayAdd(dispData:{dispName:string,dispPrice:number,dispImg:string}){
    this.item.push({
      name : dispData.dispName,
      price : dispData.dispPrice,
      img : dispData.dispImg
    });
   }

   onDisplayDel(dispData:{dispName:string,dispPrice:number,dispImg:string}){
    this.item.slice(this.item.findIndex(item => {
      return item.name = dispData.dispName
    }),1)
   }
}
