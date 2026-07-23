import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  title = 'Contact Us';
  message = 'Get in touch with us using the form below or by calling our support team.';
}
