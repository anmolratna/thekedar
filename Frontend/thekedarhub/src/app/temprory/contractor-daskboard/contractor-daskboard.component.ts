import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
@Component({
  selector: 'app-contractor-daskboard',
  templateUrl: './contractor-daskboard.component.html',
  styleUrl: './contractor-daskboard.component.css'
})
export class ContractorDaskboardComponent {
  hideAllTabs() {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => {
      tab.classList.add('hidden');
    });
  }
  constructor(private authService: AuthService) {}
  showTabContent(tabId: string) {
    this.hideAllTabs();
    const tabContent = document.getElementById(tabId);
    if (tabContent) tabContent.classList.remove('hidden');
  }

  setActiveTab(activeTabId: string) {
    const tabs = ['dashboardNav', 'activeBidsNav', 'projectsNav'];
    tabs.forEach(tabId => {
      const button = document.getElementById(tabId);
      if (button) {
        if (tabId === activeTabId) {
          button.classList.remove('bg-gray-300');
          button.classList.add('bg-blue-600', 'text-white');
        } else {
          button.classList.remove('bg-blue-600', 'text-white');
          button.classList.add('bg-gray-300');
        }
      }
    });
  }

  // Sidebar Toggle for Mobile View
  sidebarToggle() {
    const sidebar = document.querySelector('aside');
    if (sidebar) sidebar.classList.toggle('hidden');
  }
  contractorName: string = '';
  contractorEmail: string = '';
  ngOnInit(): void {
    
    // Get user info (name and email) from AuthService
    this.contractorName = this.authService.getUserName();
    this.contractorEmail = this.authService.getUserEmail();
  }
}
