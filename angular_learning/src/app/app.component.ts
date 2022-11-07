import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular_learning';
  display = [{disp:'teks 1'}];

  dispAdded(dispData:{disp:string}){
    this.display.push({
      disp : dispData.disp,
    })
  }

  onChangeDisp(){
    this.display[0].disp="Change"
  }

  onDestroy(){
    this.display.splice(0,1)
  }
}
