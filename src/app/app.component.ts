import { Component,OnInit } from '@angular/core';
import { Mycontact } from 'src/models/mycontact';
import { PostService } from './services/post.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {

  allcontact:any
  contact:any

  constructor(private postservice:PostService){}


  ngOnInit(){
    this.postservice.getallcontact().subscribe((data:any)=>{
      console.log(data);
      this.allcontact=data
      
    })

  }



}
