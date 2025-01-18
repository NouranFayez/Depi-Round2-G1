import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { PostsComponent } from './pages/posts/posts.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { SinglePostComponent } from './pages/single-post/single-post.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PostsComponent,
    ContactComponent,
    HomeComponent,
    SinglePostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // HttpClientModule
  ],
  providers: [
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
