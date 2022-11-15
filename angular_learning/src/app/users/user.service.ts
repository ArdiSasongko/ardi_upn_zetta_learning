import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user:any[]=[];

  //  user = [
  //    {
  //      id : 1,
  //      name : 'budi',
  //      age : 25,
  //      gender : 'male',
  //      email : 'budi@gmail.com',
  //      profession : 'worker',
  //      martialStatus : 'single',
  //      address : 'Bandung',
  //      zipcode : 99871,
  //      city : 'Bandung',
  //      country : 'Indonesia'    
  //    },
    
  //  ]

  constructor() { }

  onsubmit(user:any){
    this.user.push(user),
    console.log(this.user.values)
  }

  onChange(param : any){
    for (let index=0; index < this.user.length; index++){
      if(this.user[index].id == param.id){
        this.user[index].id == param.id,
        this.user[index].name == param.name,
        this.user[index].age == param.age,
        this.user[index].gender == param.gender,
        this.user[index].profession == param.profession,
        this.user[index].martialStatus == param.martialStatus,
        this.user[index].dataAddress.address == param.dataAddress.address,
        this.user[index].dataAddress.city == param.dataAddress.city,
        this.user[index].dataAddress.country == param.dataAddress.country,
        this.user[index].dataAddress.zipcode == param.dataAddress.zipcode
      }
    }
  }
}
