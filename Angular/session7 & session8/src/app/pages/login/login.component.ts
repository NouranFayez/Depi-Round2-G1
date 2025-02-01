import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GlobalService } from '../../services/global.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,

  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl("nouran_ahmed269@hotmail",
      [Validators.email, Validators.required, Validators.minLength(10)]), // Validators.pattern()
    password: new FormControl(null, [Validators.required])
  })

  get emailControl(){
    return this.loginForm.controls.email 
  }

  get passwordControl(){
    return this.loginForm.controls.password 
  }
  get LoginControls (){
    return this.loginForm.controls
  }
  isSubmitted : boolean = false
  errorMsg : any = null
  constructor(private global : GlobalService , private router : Router){}


  handleSubmit(){
    this.isSubmitted = true
    console.log(this.loginForm)

    if(this.loginForm.valid){
      this.global.login(this.loginForm.value).subscribe(res=>{
        console.log(res)
        localStorage.setItem("token" , res.data.token)
        this.global.userToken = res.data.token
        this.router.navigateByUrl('/profile')
      },(err)=>{
        this.errorMsg = err.error.message
        console.log(err.error.message)
      })
    }
  }

}
