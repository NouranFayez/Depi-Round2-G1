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
  ngOnInit(){
    let postId = this.activated.snapshot.paramMap.get("postID")
    // let empty
    this.global.getSinglePost(postId).subscribe(res=>{
      console.log(res)
      this.postData = res
    })


   
  }

}
