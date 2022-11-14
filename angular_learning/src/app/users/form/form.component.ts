import { Component, OnInit } from '@angular/core';
import { Form, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  gender=['male','female','prefer not answered']
  profession=['worker','student','freelancer']
  martialStatus=['single','maried','prefer not answered']

  constructor(
    private userService:UserService,
    private router : Router,
    private formBuilder : FormBuilder

  ) { }
  
  addUser !: FormGroup
  addressForm !: FormGroup
  //  addUser = this.formBuilder.group({
  //    'id' : new FormControl(null,[Validators.required]),
  //    'name' : new FormControl(null,[Validators.required]),
  //    'age' : new FormControl(null,[Validators.required]),
  //    'gender' :new FormControl('male',[Validators.required]),
  //    'email' :new FormControl(null,[Validators.required]),
  //    'profession' :new FormControl('student',[Validators.required]),
  //    'martialStatus':new FormControl('single',[Validators.required]),
  //    'dataAddress':new FormArray([])
  //  })

  user : any[] =[];
  add:any[] =[];

  ngOnInit(): void {
    this.user = this.userService.user
    const id = new FormControl(this.user.length+1)
    this.addUser = new FormGroup({
    'id' : id,
    'name' : new FormControl(null,[Validators.required]),
    'age' : new FormControl(null,[Validators.required]),
    'gender' :new FormControl('male',[Validators.required]),
    'email' :new FormControl(null,[Validators.required]),
    'profession' :new FormControl('student',[Validators.required]),
    'martialStatus':new FormControl('single',[Validators.required]),
    // 'dataAddress':this.formBuilder.array([
    //   new FormControl()
    // ])
    'dataAddress': this.formBuilder.array([])
    });

    this.addAddress();
  }
  get getDataAddress (){
    return this.addUser.controls["dataAddress"] as FormArray;
  }
  
  addAddress(){
    const addressForm = this.formBuilder.group({
      address:[null,[Validators.required]],
      city:[null,[Validators.required]],
      country:[null,[Validators.required]],
      zipcode:[null,[Validators.required]]
    });
    this.getDataAddress.push(addressForm);
  }

  onSubmit(){
    this.userService.onsubmit(this.addUser.value),
    this.router.navigate(['/users'])
  }

   onBack(){
     this.router.navigate(['/users'])
   }

  // onAddress():void{
  //    (<FormArray>this.addUser.get('dataAddress')).push(new FormGroup({
  //      'address': new FormControl(null),
  //      'country': new FormControl(null),
  //      'city':new FormControl(null),
  //      'zipcode':new FormControl(null)
  //   }))
  // }
}
