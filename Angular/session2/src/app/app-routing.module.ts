import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';



const routes: Routes = [
  // www.abc.com
  {path:"" , component : IndexComponent } ,
  // www.abc.com/about
  {path:'about' , component : AboutComponent } ,
  // www.abc.com/contact 
  {path:'contact' , component : ContactComponent}

];


// configuration object (metadata)
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule { }
