import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

@Component({
  selector: 'app-root',
  imports: [ LoginComponent, SignupComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  x= 10;
  y:number = 20;

  title = 'angular-beginning';
  namefromappcomponent = 'properties from angular ts file';
  mufunctionvar: string = "";
  counterStarttingValue:number = 0;
  myName:string= "";
  myFinalName:string= "";
  email:string="";
  myFunction(){
    this.mufunctionvar = "my function is called";
  }
  decrementCounter(){
    if (this.counterStarttingValue>0){
      this.counterStarttingValue = this.counterStarttingValue -1;
    }
  }

  resetCounter(){
    this.counterStarttingValue = 0;
  }

  incrementCounter(){
    this.counterStarttingValue++;
  }

  getName(){
    this.myFinalName = this.myName;
  }
  showName(event:Event){
    this.myName = (event.target as HTMLInputElement).value;
  }
  setName(){
    this.myName = "Afifi";
  }

  getEmail(val:string){
    this.email = val;
  }
  setEmail(){
    this.email = "Afifi@gmail.com";
  }

}
