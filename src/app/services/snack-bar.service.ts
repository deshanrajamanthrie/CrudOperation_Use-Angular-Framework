import { Injectable } from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  constructor(private snack_Bar:MatSnackBar) { }

  trigger(message:any,action:any){
    this.snack_Bar.open(message,action,{
      horizontalPosition:'end',
      verticalPosition:'top',
      duration:5000,
      direction:"ltr"
    });
  }



}
