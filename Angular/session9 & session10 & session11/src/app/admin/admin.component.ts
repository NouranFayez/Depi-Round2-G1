import { Component } from '@angular/core';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-admin',
  standalone: false,
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  constructor(private global:GlobalService){
    this.global.navbarFlag = false
    console.log('constructor')
  }
  ngOnInit(){
    console.log('ng on init')
  }
  ngOnDestroy(){
    console.log('ng on destroy')
    this.global.navbarFlag = true
  }

}
