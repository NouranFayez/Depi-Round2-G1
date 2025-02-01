import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from '../../services/global.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-search-result',
  standalone: false,
  
  templateUrl: './search-result.component.html',
  styleUrl: './search-result.component.css'
})
export class SearchResultComponent {


  products :any = []
  isLoaded = false
  constructor(private router : Router , private global : GlobalService , private spinner : NgxSpinnerService){
      this.spinner.show()
  }

  ngOnInit(){
    console.log(history.state.searchWord)
    if(history.state.searchWord == undefined){
      this.router.navigateByUrl("/")
    }
    else{

      let body = {
        'keyword' : history.state.searchWord
      }
      // subscribe ==> next , error , complete
      this.global.getSearchResult(body).subscribe(res=>{
        console.log(res)

        this.products = res.data
      }, ()=>{

      } , ()=>{
        this.spinner.hide()
        this.isLoaded = true
      })
    }
  }

}
