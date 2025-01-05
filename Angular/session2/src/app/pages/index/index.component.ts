import { Component } from '@angular/core';

@Component({
  selector: 'app-index',
  standalone: false,
  
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {

  appName :string = "Angular App"
  num1 : number = 20
  num2 : number = 30

  text: any

  inputType = "password"

  disabledInput = false

  imgPath = "images/natural.jpg"


  paragraphContent = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, recusandae!"
  spanTag = "<span>Angular</span>"

  classStyle = "bg-primary text-white"


  modal = "customModal"

  inputValue : any
  bindingData :any

  model : any = {
    name : "",
    email:"",
    password:""
  }

  getFullName(firstName :any , lastNAme : string ){
    return `${firstName} ${lastNAme}`
  }


  handleClick(){
    console.log('clicking....')
  }
  handleInput(element:any){
    console.log('typing')
    console.log(element)
    console.log(element.target.value)
    this.inputValue = element.target.value
  }


  handleInputElement(element :any , userNameInput : any){
    console.log(element.value)
    console.log(userNameInput)
  }
  handleKey(){
    console.log('ay 7aga')
  }
  handleForm(){
    console.log(this.model)
  }


}
