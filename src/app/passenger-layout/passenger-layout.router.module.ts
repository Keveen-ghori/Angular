import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthFormComponent } from '../passenger-auth/containers/passenger-auth.component';

const routes: Routes = [
  {
    path: 'auth',
    children: [
      {
        path: '',
        component: AuthFormComponent,
      },
      {
        path: 'login',
        component: AuthFormComponent,
      },
      {
        path: 'register',
        component: AuthFormComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
