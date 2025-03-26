import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoginComponent, SignupComponent],
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


}
