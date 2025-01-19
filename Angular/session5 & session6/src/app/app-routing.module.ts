import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PostsComponent } from './pages/posts/posts.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {path:"" , component:HomeComponent},
  {path:"posts" , component:PostsComponent},
  {path:"single-post/:postID" , component:SinglePostComponent},
  {path:"contact" , component:ContactComponent},
  {path:"login" , component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
