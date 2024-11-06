import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Route for the home page
  { 
    path: 'auth', // Path for lazy loading the AuthModule
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) 
  },
  { path: '**', redirectTo: '' } // Redirect unmatched paths to HomeComponent
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
