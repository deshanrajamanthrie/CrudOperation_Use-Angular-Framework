import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MatSnackBar} from "@angular/material/snack-bar";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PostService} from "../../services/post.service";
import {SnackBarService} from "../../services/snack-bar.service";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent {
  searchId='';
  //list:Array<any>=[];
  constructor(private postService:PostService,private snack_Bar:SnackBarService) {
  }

  form=new FormGroup(  // reactive form
    {
      id:new FormControl('',[Validators.required,Validators.maxLength(5)]),
      userId:new FormControl('',Validators.required), //not possible to not null
      title:new FormControl('',Validators.required),
      body:new FormControl('',Validators.required)
    });
  updateData(){
    this.postService.update(
      this.form.get('id')?.value,
      this.form.get('userId')?.value,
      this.form.get('title')?.value,
     this.form.get('body')?.value
    ).subscribe((res)=>{
      if(res){
        console.log(res);
        this.snack_Bar.trigger('updated','close')
      }
    });
  }
  loadData(){
    this.postService.findOne(this.searchId)
      .subscribe((res)=>{
          this.form.patchValue({
            id:res[0].id,
            userId:res[0].userId,
            title: res[0].title,
            body:res[0].body
          })
      });
  }

}
