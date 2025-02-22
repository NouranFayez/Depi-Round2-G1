import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const canActivateGuard: CanActivateFn = (route, state) => {
  console.log(route)
  console.log(state)
  const router = inject(Router)
  let token = localStorage.getItem('token')
  if(token){
    router.navigateByUrl('/')
  }
  return true;
};
