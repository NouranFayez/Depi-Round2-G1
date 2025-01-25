import { state } from '@angular/animations';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: false,
  
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  search : any 

  constructor(private router : Router){}




  handleSearch(input:any){

    this.router.navigateByUrl("/search" ,
       {state : {searchWord : input.value , type : 'products'}} )
    console.log(input.value)

  }

}
