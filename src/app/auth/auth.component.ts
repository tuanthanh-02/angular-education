import { Component } from '@angular/core';
import {NgForm} from '@angular/forms'
import { HttpClient } from '@angular/common/http';
import { AuthResponseData, AuthService } from './auth.service';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  isLoginMode = false
  isLoading = false
  error = null
  auth0 = new Subject<AuthResponseData>()
  constructor(private http : HttpClient, private auth : AuthService){}
  onSubmit(form : NgForm){
    if (this.isLoginMode == false){
    this.isLoading = true
    this.auth.signup(form.value.email, form.value.password).subscribe(resData=>{
      this.isLoading = false
      console.log(resData)
    },errorRes =>{ 
      console.log(errorRes)
      this.isLoading = false
      this.error = errorRes
      }
    )
      console.log(form.value)
      form.reset()
    }
    else {
      this.auth.login(form.value.email, form.value.password).subscribe(resData=>{
        this.isLoading = false
        console.log(resData)
      },errorRes =>{ 
        console.log(errorRes)
        this.isLoading = false
        this.error = errorRes
        }
      )
        console.log(form.value)
        form.reset()
      }
    }
  onSwitch(){
    this.isLoginMode = !this.isLoginMode
  }
}
