import { Routes } from '@angular/router';
import {RegisterComponent} from "./register/register.component";
import {FormComponent} from "./form/form.component";
import {AggiornaPasswordComponent} from "./aggiorna-password/aggiorna-password.component";
import {LoginRootComponent} from "./login-root/login-root.component";
import {AppComponent} from "./app.component";
import {LoginComponent} from "./login/login.component";


export const routes: Routes = [
  {path:'Home', redirectTo:'', component: AppComponent},
  {path:'login', component : LoginRootComponent},
  {path:'register', component : RegisterComponent},
  {path:'crea_corso',component: FormComponent},
  {path:'modifica', component: AggiornaPasswordComponent}
];
