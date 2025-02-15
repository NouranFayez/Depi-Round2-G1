import { Component } from '@angular/core';
import { GlobalService } from './services/global.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'session9';

  constructor(public global : GlobalService){
    console.log("Angular")
  }

  ngOnInit(){
    let token = localStorage.getItem('token')
    if(token){
      this.global.profile().subscribe(res=>{
        this.global.userData = res.data
        this.global.userData.first_name = res.data.customer_first_name
        this.global.isLogin = true
        console.log(this.global.userData)
      })
    }
    this.global.isLogin = false
  }
}
