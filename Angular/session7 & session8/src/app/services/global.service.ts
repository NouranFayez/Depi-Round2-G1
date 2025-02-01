import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  baseUrl = "https://full.faedg.com/api"
  userToken : any = null

  constructor(private http: HttpClient) { }

  getSearchResult(obj:any):Observable<any>{
    return this.http.post(`${this.baseUrl}/search-by-keyword` , obj)
  }
  login(body:any):Observable<any>{
    return this.http.post(`${this.baseUrl}/client/customer_login` , body)
  }

  profile():Observable<any>{
    return this.http.get(`${this.baseUrl}/client/profile`)
  }
}
