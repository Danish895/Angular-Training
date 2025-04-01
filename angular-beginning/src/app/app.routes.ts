import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { signal } from '@angular/core';
import { SignupComponent } from './signup/signup.component';
import { NotfoundComponent } from './notfound/notfound.component';

export const routes: Routes = [
    {path : 'login', component : LoginComponent},
    {path : 'signup', component : SignupComponent},
    {path : '**', component : NotfoundComponent}
];
