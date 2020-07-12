import { Component } from '@angular/core';
declare var require: any;

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  markdown = require('!!raw-loader!./home.component.md').default as string;
}
