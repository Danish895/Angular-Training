import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
    {path : 'login', component : LoginComponent},
    {path : 'signup', component : SignupComponent},
    {path : 'profile', component : ProfileComponent, data : {name : 'Danishhhhhh'}},
    {path : '**', component : NotfoundComponent}
];
