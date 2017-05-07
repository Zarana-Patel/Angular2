import {Component} from "@angular/core";

@Component({
  selector:'registration',
  templateUrl:'./registration.component.html',
  styleUrls:['./registration.component.css']

})

export class RegistrationComponent{
  firstName:string ='';
  lastName:string ='';
  userName:string ='';
  submitted = false;
  public users =[
                {name:'test1',id:1},
                {name:'test2',id:2}
                ];
  onSubmit(){
    if(this.firstName.length ===0 || this.lastName.length ===0 || this.userName.length ===0){
      return true;
    }
    return false;
  }
  onReset(){
    this.firstName ='';
    this.lastName ='';
    this.userName='';
  }
  onclick(){
    this.submitted = true;
  }

}
