import { Component } from '@angular/core';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-profile',
  standalone: false,
  
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  constructor(private global : GlobalService){
    console.log(this.global.userToken)
  }

  ngOnInit(){
    this.global.profile().subscribe(res=>{
      console.log(res)
    })
  }

}
