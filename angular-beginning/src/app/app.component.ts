import { Component, computed, effect, WritableSignal } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component'; 
import { signal,Signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';

@Component({
  selector: 'app-root',
  imports: [ LoginComponent, SignupComponent, FormsModule, NgFor, RouterOutlet, RouterLink, ProfileComponent],
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
  toggleelseifboolean = false;

  users = ["Danish", "Afifa"];
  
  count = signal(10);
  dataWritable:WritableSignal<number|string> = signal(33);
  dataComputable:Signal<number> = computed(()=>66);
  
  computedX = signal(33);
  computedY = signal(33);
  normalZ = this.x + this.y;
  computedZ = computed(()=>this.computedX() + this.computedY());

  myTwoWayBindingVariable:string ="";
  myTwoWayBindingVariable2:string ="";

  task:string = ""
  taskList: {id:number , task:string }[] = [];

  constructor(private route : Router) {
    effect(() =>{
      console.log(this.count());
    })
  }
   
  goToProfile(){
    this.route.navigate(['profile'], {queryParams : {name : 'Afifia'}})
  }
  
  deleteTask(taskid: number){
    this.taskList = this.taskList.filter(item => item.id != taskid);

  }
  addTask(){
    if(this.task != ""){
    this.taskList.push({id: this.taskList.length + 1, task : this.task})
    }
  }
  nameChange(event:Event){
    this.myTwoWayBindingVariable2 = (event.target as HTMLInputElement).value;
  }
  updatedOnChangesNormally(){
    this.x = 40;
  }
  updatedOnChangesSignal(){
    this.computedX.set(400);
  }
  updateSignalValue(){
    //this.count.set(30);
    this.count.set(100);
    //this.dataComputable.set(3333); error since this is read only
  }

  
  toggleifelse(){
    this.toggleelseifboolean=!this.toggleelseifboolean;
  }
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
