import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(
    private userService:UserService,
    private router : Router
  ) { }
  user = this.userService.user

  gender=['male','female','prefer not answered']
  profession=['worker','student','freelancer']
  martialStatus=['single','maried','prefer not answered']
  users !: {id:number,name:string,age:number,gender:string,email:string,profession:string,martialStatus:string,address:string,city:string,country:string,zipcode:number}
  addUser !: FormGroup;

  ngOnInit(): void {
    const id = new FormControl(this.user.length+1)

    this.addUser = new FormGroup({
      'id' : id,
      'name' : new FormControl(null,[Validators.required]),
      'age' : new FormControl(null,[Validators.required]),
      'gender' :new FormControl('male',[Validators.required]),
      'email' :new FormControl(null,[Validators.required]),
      'profession' :new FormControl('student',[Validators.required]),
      'martialStatus':new FormControl('single',[Validators.required]),
      'address':new FormControl(null,[Validators.required]),
      'city':new FormControl(null,[Validators.required]),
      'country':new FormControl(null,[Validators.required]),
      'zipcode':new FormControl(null,[Validators.required]),
    })
  }

  onSubmit(){
    this.userService.onsubmit(this.addUser.value)
  }

  onBack(){
    this.router.navigate(['/users'])
  }
}
