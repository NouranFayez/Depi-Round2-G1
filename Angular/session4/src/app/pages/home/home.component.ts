import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  currentDate = new Date()

  appName = "ANGULAR SESSION4"

  courses = ['html' , 'css' , 'js' , 'ts' , 'bootstrap' , 'angular']


  obj = {
    name : "Nouran",
    address:"Nasr city"
  }

  constructor(){
    console.log(this.currentDate.getFullYear())
  }

}
