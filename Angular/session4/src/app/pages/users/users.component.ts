import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  standalone: false,
  
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {

  users:any =[]

  handleData(data:any){
    console.log(data)
    this.users.push(data)
  }

}
