import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  standalone: true,
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
  headline = 'Build beautiful apps with Angular';
  subtext = 'A simple starter layout with reusable header, footer, and banner components.';
}
