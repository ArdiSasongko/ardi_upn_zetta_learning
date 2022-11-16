import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() user:any;
  datafilter:any='';
  
  constructor(private userService : UserService) { }
  datalist:any[]=this.userService.user
  ngOnInit(): void {
    this.datalist=this.userService.user
  }

}
     