import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GlobalService } from '../../services/global.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  standalone: false,
  
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  model = {
    email : "",
    password : "",
    // confirmPassword : ''
  }

  constructor(private global : GlobalService , private router : Router , private toastr: ToastrService){}


  handleSubmit(form : NgForm){
    console.log(form)
    console.log(this.model)

    if(form.valid){
      this.global.login(this.model).subscribe(res=>{
        console.log(res)
        this.toastr.success('login successfully')
        // this.router.navigate(["/"])
        this.router.navigateByUrl('/')
      },(err)=>{
        console.log(err.error.message)
        this.toastr.error(err.error.message)
      })
    }


  }

}


// https://www.npmjs.com/package/ngx-toastr
