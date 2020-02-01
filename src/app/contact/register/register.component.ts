import { RegisterService } from './../../services/register.service';
import { Client } from './../../myClasses/client';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  client: Client[];

  addClientForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    age: new FormControl(''),
    hieght: new FormControl(''),
    wieght: new FormControl(''),
    activity: new FormControl('')
  })


  constructor(private registerService: RegisterService) { }

  addClient(){
    this.registerService.addClient(this.addClientForm.value).subscribe(data =>{
      console.log(this.client);
    })
    console.log(this.addClientForm);
  }

  ngOnInit() {
    // this.addClientForm.patchValue({
    //   role: {
    //     id: 1
    //   }
    // });
  }

}
