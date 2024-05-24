import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MatSnackBar} from "@angular/material/snack-bar";
import {PostService} from "../../services/post.service";
import {SnackBarService} from "../../services/snack-bar.service";

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit{

  list:Array<any>=[];
  constructor(private http:HttpClient,private postService:PostService,
              private snack_Bar:SnackBarService) {
  }

  ngOnInit():void {
    this.postService.findAll()
      .subscribe((res)=>{
        console.log(res);
        this.list=res;
        console.log(this.list);
      });
  }

  delete(id:any){
    if(confirm('are you sure want delete'+id)){
      this.postService.delete(id)
        .subscribe((res)=>{
          if(res){
            this.snack_Bar.trigger('Delete','close')
          }
        })
    }

  }
}
