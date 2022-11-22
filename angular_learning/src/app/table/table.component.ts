import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  title:string = 'angular_learning';
  dataSource: any;
  keyfilter:any='';
  key:any;
  data:any;
  displayedColumns: string[] = ['Name','Usertype','Email','Status'];
  constructor(private dataService:DataService){}

  ngOnInit():void{
    this.key = this.keyfilter;
    this.dataSource = this.dataService.user
    // this.dataService.getData().subscribe((data)=>{
    //  this.dataSource=data
    // })
  }

}
