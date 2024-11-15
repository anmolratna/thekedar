import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home/home.component';
import { UserDashboardComponent } from './temprory/user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './temprory/admin-dashboard/admin-dashboard.component';
import { ContractorDaskboardComponent } from './temprory/contractor-daskboard/contractor-daskboard.component';
// Lazy loading of the contractor module
const routes: Routes = [
  { path: '', component: HomeComponent },  // Route for the home page
  { 
    path: 'auth', 
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) 
  },
  
  {
    path:'user-dashboard' , component:UserDashboardComponent
  },
  {
    path:'admin-dashboard' , component:AdminDashboardComponent
  },
  {
    path : 'contractor-dashboard' , component : ContractorDaskboardComponent
  },
  { path: '**', redirectTo: '' }  // Redirect unmatched paths to HomeComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
