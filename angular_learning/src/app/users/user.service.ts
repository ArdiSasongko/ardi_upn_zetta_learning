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
    
  ]

  constructor() { }

  onsubmit(user:any){
    this.user.push(user)
  }
}
