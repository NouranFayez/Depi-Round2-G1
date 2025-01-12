import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-user-form',
  standalone: false,
  
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent {

  data = {
    name : "",
    email : ""
  }

  @Output() userData  = new EventEmitter()

  handleSubmit(){
    // console.log(this.data)

    const model = {
      name : this.data.name ,
      email : this.data.email
    }
    this.userData.emit(model)
  }

}
