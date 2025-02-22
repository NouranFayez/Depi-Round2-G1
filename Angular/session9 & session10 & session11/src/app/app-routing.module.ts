import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { UserImageComponent } from './pages/user-image/user-image.component';
import { DashboardTestComponent } from './pages/dashboard-test/dashboard-test.component';
import { ErrorpageComponent } from './pages/errorpage/errorpage.component';
import { canActivateGuard } from './guards/can-activate.guard';
import { canDeactivateGuard } from './guards/can-deactivate.guard';
import { PostsComponent } from './pages/posts/posts.component';

const routes: Routes = [
  {path:'' , component:HomeComponent},
  {path:'login' , component:LoginComponent , canActivate:[canActivateGuard] , canDeactivate:[canDeactivateGuard]},
  {path:'profile/user-img' , component:UserImageComponent},
  {path:'posts' , component:PostsComponent},
  // {path:'dashboard' , component:DashboardTestComponent},
  { path: 'dashboard', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) }, //canActivate:[canActivateGuard]
  {path:'**' , component:ErrorpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes , {scrollPositionRestoration : 'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
