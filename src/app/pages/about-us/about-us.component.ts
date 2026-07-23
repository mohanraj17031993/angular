import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  standalone: true,
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {
  title = 'About Us';
  content = 'Learn more about our mission and values on this page.';
}
