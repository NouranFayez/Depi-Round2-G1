import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: false,
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  @Input() numData : any 

  constructor(){
    console.log('constructor')
    console.log(this.numData)
  }
  ngOnInit(){
    console.log('Ng On Init')
    console.log(this.numData)
  }
  ngOnChanges(e : any){
    console.log(e)
    console.log('ng on Changes')
  }
  ngDoCheck(){
    console.log('ng do check')
  }
  ngAfterContentInit(){
    console.log('ng After content init')
  }
  ngAfterContentChecked(){
    console.log('ng After content checked')
  }
  ngAfterViewInit(){
    console.log('ng after view init')
  }
  ngAfterViewChecked(){
    console.log('ng after view checked')
  }
  ngOnDestroy(){
    console.log('ng On destroy')
  }

}
