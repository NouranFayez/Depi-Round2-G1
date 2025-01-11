import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PostsComponent } from './pages/posts/posts.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';

const routes: Routes = [
  {path:'' , component:IndexComponent},
  {path:'contact' , component:ContactComponent},
  {path:'posts' , component:PostsComponent},
  {path:'posts/single-post' , component:SinglePostComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
