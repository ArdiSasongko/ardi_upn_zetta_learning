import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(
    private userService:UserService,
    private router:Router
    ) { }
  user = this.userService.user
  ngOnInit(): void {
  }

  onForm(){
    this.router.navigate(['/form'])
  }
}
