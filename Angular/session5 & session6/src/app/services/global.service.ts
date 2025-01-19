import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  userName = "Nouran"
  constructor(private http : HttpClient) { }

  // https://jsonplaceholder.typicode.com/posts

  getPosts():Observable<any>{
    return this.http.get("https://jsonplaceholder.typicode.com/posts")
  }

  getSinglePost(id:any):Observable<any>{
    return this.http.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
  }



  getFullName(firstName : string , lastName : any){
    return `${firstName} ${lastName}`
  }

  login(obj:any):Observable<any>{
    return this.http.post('https://full.faedg.com/public/api/client/customer_login' , obj )
  }

}
