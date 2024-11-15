import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home/home.component';
import { HttpClientModule,provideHttpClient, withFetch  } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { UserDashboardComponent } from './temprory/user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './temprory/admin-dashboard/admin-dashboard.component';
import { ContractorDaskboardComponent } from './temprory/contractor-daskboard/contractor-daskboard.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserDashboardComponent,
    AdminDashboardComponent,
    ContractorDaskboardComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    ReactiveFormsModule,
    FormsModule // Add FormsModule here
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch()) // Enable fetch API
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
