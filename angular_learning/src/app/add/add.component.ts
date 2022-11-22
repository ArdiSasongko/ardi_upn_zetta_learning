import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  status: any;
  constructor(private dataservice:DataService,
    private router : Router) { }
  data: FormGroup = new FormGroup({
    civility: new FormControl(null, Validators.required),
    first_name: new FormControl(null, Validators.required),
    last_name: new FormControl(null, Validators.required),
    dob: new FormControl(null, Validators.required),
    gender: new FormControl(null, Validators.required),
    status: new FormControl(null, Validators.required),
  })

  ngOnInit(): void {
  }

  addsubmit(){
    this.dataservice.onsubmit(this.data.value);
    this.router.navigate(['/tabel']);
  }

}
