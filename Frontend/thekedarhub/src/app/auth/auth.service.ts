import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.apiUrl; // Base API URL from environment

  constructor(private http: HttpClient) {}

  // Sign-up method
  signup(userData: any): Observable<any> {
    const signupUrl = `${this.apiUrl}/auth/signup`;
    console.log('Signup URL:', signupUrl);
    return this.http.post(signupUrl, userData);
  }

  // Sign-in method: Now storing name, email, and token
  signin(userData: any): Observable<any> {
    const signinUrl = `${this.apiUrl}/auth/signin`;
    console.log('Signin URL:', signinUrl);

    return this.http.post<any>(signinUrl, userData).pipe(
      tap((response) => {
        // If login is successful, store the token, name, and email in localStorage
        if (response.token && typeof window !== 'undefined') {
          localStorage.setItem('authToken', response.token);  // Store token
          localStorage.setItem('userName', response.name);     // Store user name
          localStorage.setItem('userEmail', response.email);   // Store user email
        }
      })
    );
  }

  // Check if the user is logged in
  isLoggedIn(): boolean {
    return typeof window !== 'undefined' && localStorage.getItem('authToken') !== null;
  }

  // Get the user's role from the stored token
  getUserRole(): string | null {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('authToken');
      if (token) {
        const decodedToken = JSON.parse(atob(token.split('.')[1]));  // Decode JWT token
        return decodedToken.role;
      }
    }
    return null;
  }

  // Get the user's name
  getUserName(): string {
    return typeof window !== 'undefined' ? localStorage.getItem('userName') || '' : '';
  }

  // Get the user's email
  getUserEmail(): string {
    return typeof window !== 'undefined' ? localStorage.getItem('userEmail') || '' : '';
  }

  // Log out: Clear localStorage
  logout(): void {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('authToken');
      localStorage.removeItem('userName');
      localStorage.removeItem('userEmail');
    }
  }
}
