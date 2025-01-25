import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  baseUrl = "https://full.faedg.com/api"

  constructor(private http: HttpClient) { }

  getSearchResult(obj:any):Observable<any>{
    return this.http.post(`${this.baseUrl}/search-by-keyword` , obj)
  }
}
