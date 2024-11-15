import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { SigninWithHeaderFooterComponent } from './signin-with-header-footer/signin-with-header-footer.component';
import { SignupWithHeaderFooterComponent } from './signup-with-header-footer/signup-with-header-footer.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ToastrModule } from 'ngx-toastr';  // Import ToastrModule
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth.service';


@NgModule({
  declarations: [
    SigninWithHeaderFooterComponent,
    SignupWithHeaderFooterComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,  // Add ReactiveFormsModule
    ToastrModule.forRoot(),  // Configure Toastr
    FormsModule,
    
  ],
  providers: [AuthService]
})
export class AuthModule { }
