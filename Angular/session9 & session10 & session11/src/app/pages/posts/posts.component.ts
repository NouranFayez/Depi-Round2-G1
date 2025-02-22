import { Component } from '@angular/core';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-posts',
  standalone: false,
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent {
  posts : any =[]
  pageSize = 10
  p = 1
  constructor(private global : GlobalService){}

  ngOnInit(){
   this.postsShow(1 , 10)
  }

  postsShow(page : any , limit : any){
    this.global.posts(page, limit).subscribe(res=>{
      this.posts = res
    })
  }

  pageChanged(p : any){
    console.log(p)
    this.p = p
   this.postsShow(p  , 10)
  }

}
