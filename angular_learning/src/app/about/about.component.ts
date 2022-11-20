import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data/data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(
    private data:DataService,
    private route:ActivatedRoute,
    private router:Router
  ) { }
  
  list:any
  listId:any
  ngOnInit(): void {
    this.listId = this.route.snapshot.paramMap.get('id');
    this.list = this.data.list.find(data=> data.id == this.listId)
  }

}
