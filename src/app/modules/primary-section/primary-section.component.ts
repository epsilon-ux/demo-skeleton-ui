import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primary-section',
  templateUrl: './primary-section.component.html',
  styleUrls: ['./primary-section.component.scss']
})
export class PrimarySectionComponent implements OnInit {

  secondaryNavItems = {
    items: [
      {
        text: 'Object Page Example',
        route: ''
      }
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

}
