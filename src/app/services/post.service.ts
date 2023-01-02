import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { Mycontact } from 'src/models/mycontact';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  baseurl:string ='http://localhost:4000/contacts';

  constructor(private http:HttpClient) { }
  getallcontact():Observable<Mycontact>{
   return this.http.get(this.baseurl)
  }
}
