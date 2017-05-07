import {Component} from '@angular/core';



@Component({
  selector:'toggle',
  templateUrl:'./toggle.component.html',
  styleUrls:['./toggle.component.css']


})
export class ToggleComponent{
  secretPassword = false;
  logfile = [];
  ontoggle(){
    this.secretPassword = !this.secretPassword;
    this.logfile.push(new Date());

  }


}
