import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user = [
    {
      id : 1,
      name : 'budi',
      age : 25,
      gender : 'male',
      email : 'budi@gmail.com',
      profession : 'worker',
      martialStatus : 'single',
      address : 'Bandung',
      zipcode : 99871,
      city : 'Bandung',
      country : 'Indonesia'
    },
    {
      id : 2,
      name : 'Elin',
      age : 20,
      gender : 'female',
      email : 'elin@gmail.com',
      profession : 'worker',
      martialStatus : 'single',
      address : 'Bandung',
      zipcode : 99871,
      city : 'Bandung',
      country : 'Indonesia'
    },
    {
      id : 3,
      name : 'Jaidi',
      age : 25,
      gender : 'male',
      email : 'jaidi@gmail.com',
      profession : 'worker',
      martialStatus : 'maried',
      address : 'Bogor',
      zipcode : 99871,
      city : 'Bogor',
      country : 'Indonesia'
    },
  ]

  constructor() { }

  onsubmit(user:any){
    this.user.push(user)
  }
}
