import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  template: `
    <ui-topbar></ui-topbar>
    <div>
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
        width: 100%;
        height: 100%;
      }
      :host > div {
        padding-top: 54px;
        width: 100%;
        height: 100%;
      }
    `,
  ],
})
export class AppComponent {
  constructor(public router: Router) {
    this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe((event) => {
        window.scrollTo(0, 0);
      });
  }
}
