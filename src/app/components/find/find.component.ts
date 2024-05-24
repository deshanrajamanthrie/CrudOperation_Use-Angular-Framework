import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PostService} from "../../services/post.service";

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.scss']
})
export class FindComponent {
  searchId='';
  list:Array<any>=[];

  constructor(private http:HttpClient,private postService:PostService) {

  }

  loadData(){
   this.postService.findOne(this.searchId)
      .subscribe((res)=>{
        this.list=res;
    });
  }



}
