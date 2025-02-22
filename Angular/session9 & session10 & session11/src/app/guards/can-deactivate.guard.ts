import { CanDeactivateFn } from '@angular/router';

export const canDeactivateGuard: CanDeactivateFn<unknown> = (component : any, currentRoute, currentState, nextState) => {
  console.log(component)
  // console.log(currentRoute)
  // console.log(currentState)
  // console.log(nextState)
  console.log(component.loginForm.dirty)
  if(component.loginForm.dirty && component.isSubmitted == false){
  const conf =  confirm('Are you you want to leave before saving the changes ?')
  if(conf) return true
  else return false
  }
  return true;
};
