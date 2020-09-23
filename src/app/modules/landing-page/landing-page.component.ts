import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html'
})
export class LandingPageComponent implements OnInit {

  secondaryNavItems = {
    items: [
      {
        text: 'Object Page',
        route: ''
      },
      {
        text: 'Object Page',
        route: 'object-page-2'
      }
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

}
