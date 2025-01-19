import { Component } from '@angular/core';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-posts',
  standalone: false,
  
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent {
  globalUser : any
  posts : any = []
  constructor(public global : GlobalService){
    this.global.userName = "Ahmed"
    // this.globalUser = this.global.userName
    console.log(this.global.getFullName('Zein' , 'Fayez'))
    console.log(this.global.userName)
  }

  postsData = []
  ngOnInit(){
    console.log(this.global.getPosts())
    // next , error , complete

    let arr = [20 , 30 ,50 , 5]

    console.log(arr.filter(item=> item > 5))

    this.global.getPosts().subscribe((res)=>{
      console.log(res)
      this.postsData = res
      this.posts = res
      
    })
  }


  handleInput(input:any){
    console.log(input.value)
    
   this.posts = this.postsData.filter((data:any)=>data.title.startsWith(input.value))
    // console.log(this.posts.filter((data:any)=>data.title.startsWith(input.value)))
   
  }
 
  

}
