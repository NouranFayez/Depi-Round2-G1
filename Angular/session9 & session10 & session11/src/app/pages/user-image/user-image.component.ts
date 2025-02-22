import { Component, ElementRef, viewChild } from '@angular/core';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-user-image',
  standalone: false,
  templateUrl: './user-image.component.html',
  styleUrl: './user-image.component.css'
})
export class UserImageComponent {
  imgLink = null

  // @viewChild('imgInput' , {static: false}) imgElement! :ElementRef
  constructor(private global:GlobalService
  ){

  }
  handleClick(){
    let elem : any = document.getElementById('imgInput')
    elem.click()
  }
  handleChangeImg(eve:any){
    console.log(eve)
    let img = eve.target.files[0]

    let formData = new FormData()
    formData.append('image' , img )
    // formData.append('first_name' , this.modal.first_name )
    // formData.append('last_name' , this.modal.first_name )

    this.global.userImage(formData).subscribe(res=>{
      console.log(res)
      this.imgLink = res.data.image
    })

    // let obj = {
    //   image : img
    // }

  }

}
