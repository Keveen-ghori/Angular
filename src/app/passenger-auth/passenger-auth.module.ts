import { NgModule } from '@angular/core';
import { AuthFormComponent } from './containers/passenger-auth.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AuthFormComponent],
  imports: [CommonModule, FormsModule],
  exports: [AuthFormComponent],
})
export class AuthFormModule {}
