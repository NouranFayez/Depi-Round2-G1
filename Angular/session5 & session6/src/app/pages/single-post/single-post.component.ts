import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-single-post',
  standalone: false,
  
  templateUrl: './single-post.component.html',
  styleUrl: './single-post.component.css'
})
export class SinglePostComponent {

  constructor(private activated : ActivatedRoute , private global : GlobalService){

  }

  
  postData : any 
  posts : any[] =[]
  ngOnInit(){
    // let postId = this.activated.snapshot.paramMap.get("postID")

    this.activated.paramMap.subscribe(param=>{
      console.log(param.get('postID'))
      this.global.getSinglePost(param.get('postID')).subscribe(res=>{
        console.log(res)
        this.postData = res
      })
    })


    // let empty
    this.global.getPosts().subscribe(res=>{
      this.posts = res
    })


   
  }

}
