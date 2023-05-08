import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ConfirmPasswordValidator } from '../CustomValidations/password.validator';
import { ForbbidenNameValidator } from '../CustomValidations/userName.validator';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.scss']
})
export class RegisterationComponent implements OnInit {
  constructor(private fb:FormBuilder){}

  registerationform=this.fb.group({
    username:['',[Validators.required,Validators.minLength(5),ForbbidenNameValidator]],
    password:['',[Validators.required,Validators.minLength(8),]],
    confirmpassword:['',[Validators.required]],
    email:['',[Validators.required,Validators.pattern(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)]],
    address:this.fb.group({
      country:[''],
      city:[''],
      postalcode:[''],
    })
  },{validators:[ConfirmPasswordValidator]})


  get userName(){
    return this.registerationform.get('username');
  }

  get email()
  {
    return this.registerationform.get('email');
  }






  ngOnInit(): void {

  }

}
