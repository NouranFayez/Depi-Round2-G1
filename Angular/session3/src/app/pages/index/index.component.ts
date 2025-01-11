import { Component } from '@angular/core';

@Component({
  selector: 'app-index',
  standalone: false,
  
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {

  elementStyle = "alert alert-danger"

  alertStyle = false

  customBgStyle = "red"


  arr = [1, 2,3]

  isAvaliable = true

  handleLogic(){

    if(this.alertStyle && this.isAvaliable){

    }
    else {
      
    }



  }


}
