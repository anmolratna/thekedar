import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.css'
})
export class UserDashboardComponent {
  activeTab = 'dashboard';  // Default tab
  userName = 'Anmol Ratna';
  userEmail = 'anmol@example.com';
  newProject = { title: '', description: '', budget: 0 };
  liveBids = [
    { contractorName: 'Rahul Kumar', description: 'I made within 14 days', amount: 5000 },
    { contractorName: 'Mukesh Kumar', description: 'I made within 9 days', amount: 4000 }
  ];
  projects = [
    { title: 'Project 1', description: 'Project Description...', budget: 5000 },
    { title: 'Project 2', description: 'Project Description...', budget: 6000 }
  ];

  // Toggle sidebar visibility
  toggleSidebar(): void {
    document.getElementById('sidebar')?.classList.toggle('hidden');
  }

  // Close the sidebar
  closeSidebar(): void {
    document.getElementById('sidebar')?.classList.add('hidden');
  }

  // Switch between tabs
  switchTab(tab: string): void {
    this.activeTab = tab;
  }

  // Submit new project
  submitProject(event: Event): void {
    event.preventDefault();
    console.log(this.newProject);
    // Handle project submission logic here
  }
  userNames: string = '';
  userEmails: string = '';

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    // Get user info (name and email) from AuthService
    this.userNames = this.authService.getUserName();
    this.userEmails = this.authService.getUserEmail();
  }
}
