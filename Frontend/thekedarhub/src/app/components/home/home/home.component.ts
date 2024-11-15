import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  contractors = [
    { name: 'Mohan Kumar', image: 'src/assets/images/rennovation.jpg', rating: '★★★★☆', services: ['Renovation', 'Plumbing', 'Electrical'] },
    { name: 'Rites Yadav', image: 'contractor_image.jpg', rating: '★★★☆☆', services: ['Roofing', 'Carpentry'] },
    { name: 'Amit Anand', image: 'contractor_image.jpg', rating: '★★★★★', services: ['Landscaping', 'Interior Design'] },
    { name: 'Sohan Raj', image: 'contractor_image.jpg', rating: '★★★★☆', services: ['Painting', 'Tiling'] },
    { name: 'Prithav Raj', image: 'contractor_image.jpg', rating: '★★★★☆', services: ['HVAC', 'Cleaning'] },
    { name: 'Ramesh Kumar', image: 'contractor_image.jpg', rating: '★★★★☆', services: ['Renovation', 'Plumbing', 'Electrical'] },
    { name: 'Vikarant singh', image: 'contractor_image.jpg', rating: '★★★☆☆', services: ['Roofing', 'Carpentry'] },
    { name: 'Moahn singh', image: 'contractor_image.jpg', rating: '★★★★★', services: ['Landscaping', 'Interior Design'] },
    { name: 'Soni Singh', image: 'contractor_image.jpg', rating: '★★★★☆', services: ['Painting', 'Tiling'] },
    { name: 'Ram Raj', image: 'contractor_image.jpg', rating: '★★★★☆', services: ['HVAC', 'Cleaning'] }
  ];
  steps = [
    { title: 'Step 1', description: 'Submit your project details.' },
    { title: 'Step 2', description: 'Contractors submit their bids.' },
    { title: 'Step 3', description: 'Choose the best contractor for your needs.' },
    // Add more steps as needed
  ];
  testimonials = [
    { text: '“I found the perfect contractor for my renovation. Highly recommend!”', name: 'Muuna Raj' },
    { text: '“The service was excellent! I couldn’t be happier.”', name: 'Ritik Kumar' },
    { text: '“A seamless experience from start to finish.”', name: 'Moahan Anand' },
    { text: '“A seamless experience from start to finish.”', name: 'Prithvi ' },
    { text: '“A seamless experience from start to finish.”', name: 'Ram kumar' },
    { text: '“A seamless experience from start to finish.”', name: 'Mirdul Kumar' }
  ];
  constructor() { }

  ngOnInit(): void {
  }
}
