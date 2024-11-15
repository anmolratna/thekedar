import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin-with-header-footer',
  templateUrl: './signin-with-header-footer.component.html',
  styleUrls: ['./signin-with-header-footer.component.scss']
})
export class SigninWithHeaderFooterComponent implements OnInit {
  email: string = '';
  password: string = '';
  loginError: string = '';

  constructor(private router: Router, private route: ActivatedRoute, private authService: AuthService) { }

  ngOnInit(): void {
    // Check if the user is logged in and redirect if true
    if (this.authService.isLoggedIn()) {
      const role = this.authService.getUserRole();
      if (role === 'admin') {
        this.router.navigate(['/admin-dashboard']);
      } else if (role === 'user') {
        this.router.navigate(['/user-dashboard']);
      } else if (role=='contractor'){
        this.router.navigate(['/contractor-dashboard']);
      }else{
        this.router.navigate(['/']);
      }
    }
  }

  // On Forgot password link click
  onForgotpassword() {
    this.router.navigate(['forgot-password'], { relativeTo: this.route.parent });
  }

  // On Signup link click
  onSignup() {
    this.router.navigate(['signup-with-header-footer'], { relativeTo: this.route.parent });
  }

  // On Home link click
  onhome() {
    this.router.navigate(['/'], { relativeTo: this.route.parent });
  }

  // On SignIn link click
  onSignIn() {
    const credentials = { email: this.email, password: this.password };
    this.authService.signin(credentials).subscribe(
      (response) => {
        // Store token on successful login
        const role = response.role; // Assuming response contains role info
        localStorage.setItem('authToken', response.token); // Store the token

        if (role === 'admin') {
          this.router.navigate(['/admin-dashboard']);
        } else if (role === 'user') {
          this.router.navigate(['/user-dashboard']);
        } else {
          this.loginError = 'Invalid role';
        }
      },
      (error) => {
        this.loginError = 'Invalid credentials, please try again!';
      }
    );
  }
}
