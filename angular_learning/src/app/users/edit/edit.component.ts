import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { Form, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  user:any
  userId:any

  addUser !: FormGroup
  addressForm !: FormGroup

  gender=['male','female','prefer not answered']
  profession=['worker','student','freelancer']
  martialStatus=['single','maried','prefer not answered']

  constructor(private route : ActivatedRoute,
    private router : Router,
    private userService:UserService,
    private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('id');
    this.user = this.userService.user.find(data => data.id == this.userId);
    this.user = this.userService.user
    
    this.addUser = new FormGroup({
    'id' : new FormControl(null,[Validators.required]),
    'name' : new FormControl(null,[Validators.pattern("^[A-Z, a-z]*$")]),
    'age' : new FormControl(null,[Validators.required,Validators.pattern("^[0-9]*$"),
    Validators.min(11),]),
    'gender' :new FormControl('male',[Validators.required]),
    'email' :new FormControl(null,[Validators.email]),
    'profession' :new FormControl('student',[Validators.required]),
    'martialStatus':new FormControl('single',[Validators.required]),
    'dataAddress': this.formBuilder.array([])
    });

    this.addAddress();
  }

  get getDataAddress (){
    return this.addUser.controls["dataAddress"] as FormArray;
  }
  
  addAddress(){
    const addressForm = this.formBuilder.group({
      'address':[null,[Validators.required]],
      'city':[null,[Validators.required]],
      'country':[null,[Validators.required]],
      'zipcode':[null,[Validators.required]]
    });
    this.getDataAddress.push(addressForm);
  }

  onChanges(){
    this.userService.onChange(this.addUser.value),
    this.router.navigate(['/users'])
  }
}
