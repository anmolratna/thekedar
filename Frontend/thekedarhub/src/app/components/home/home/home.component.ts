import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  contractors = [
    { name: 'Contractor Name 1', image: 'contractor_image.jpg', rating: '★★★★☆', services: ['Renovation', 'Plumbing', 'Electrical'] },
    { name: 'Contractor Name 2', image: 'contractor_image.jpg', rating: '★★★☆☆', services: ['Roofing', 'Carpentry'] },
    { name: 'Contractor Name 3', image: 'contractor_image.jpg', rating: '★★★★★', services: ['Landscaping', 'Interior Design'] },
    { name: 'Contractor Name 4', image: 'contractor_image.jpg', rating: '★★★★☆', services: ['Painting', 'Tiling'] },
    { name: 'Contractor Name 5', image: 'contractor_image.jpg', rating: '★★★★☆', services: ['HVAC', 'Cleaning'] },
    { name: 'Contractor Name 1', image: 'contractor_image.jpg', rating: '★★★★☆', services: ['Renovation', 'Plumbing', 'Electrical'] },
    { name: 'Contractor Name 2', image: 'contractor_image.jpg', rating: '★★★☆☆', services: ['Roofing', 'Carpentry'] },
    { name: 'Contractor Name 3', image: 'contractor_image.jpg', rating: '★★★★★', services: ['Landscaping', 'Interior Design'] },
    { name: 'Contractor Name 4', image: 'contractor_image.jpg', rating: '★★★★☆', services: ['Painting', 'Tiling'] },
    { name: 'Contractor Name 5', image: 'contractor_image.jpg', rating: '★★★★☆', services: ['HVAC', 'Cleaning'] }
  ];
  steps = [
    { title: 'Step 1', description: 'Submit your project details.' },
    { title: 'Step 2', description: 'Contractors submit their bids.' },
    { title: 'Step 3', description: 'Choose the best contractor for your needs.' },
    // Add more steps as needed
  ];
  testimonials = [
    { text: '“I found the perfect contractor for my renovation. Highly recommend!”', name: 'Customer Name 1' },
    { text: '“The service was excellent! I couldn’t be happier.”', name: 'Customer Name 2' },
    { text: '“A seamless experience from start to finish.”', name: 'Customer Name 3' },
    { text: '“A seamless experience from start to finish.”', name: 'Customer Name 3' },
    { text: '“A seamless experience from start to finish.”', name: 'Customer Name 3' },
    { text: '“A seamless experience from start to finish.”', name: 'Customer Name 3' }
  ];
  constructor() { }

  ngOnInit(): void {
  }
}
