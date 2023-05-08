import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ForbbidenNameValidator } from '../CustomValidations/userName.validator';
import { ConfirmPasswordValidator } from '../CustomValidations/password.validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
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
