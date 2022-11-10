import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  user:any
  userId:any
  constructor(private route : ActivatedRoute,
    private router : Router,
    private userService:UserService) { }

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('id');
    this.user = this.userService.user.find(data => data.id == this.userId)
  }

  onBack(){
    this.router.navigate(['/users'])
  }
}
