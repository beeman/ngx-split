import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { filter } from 'rxjs/operators';
import { IExampleData } from '../../interfaces/example-data';

import { examples } from '../../example-list';

@Component({
  selector: 'ui-topbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
    `
      a.navbar-brand,
      a.navbar-brand:hover {
        font-weight: bold;
        color: #ffc421;
      }

      li > a {
        cursor: pointer;
      }

      ul.dropdown-menu > li > a:active,
      ul.dropdown-menu > li.active > a {
        background-color: #eeeeee;
        cursor: default;
        color: #000000;
      }

      .navbar-toggler {
        float: right;
        margin-right: 120px;
      }

      @media (max-width: 992px) {
        .container-fluid {
          padding-left: 0;
        }
        a.navbar-brand {
          margin-right: 0;
        }
      }
    `,
  ],
  host: {
    class: 'navbar navbar-expand-lg navbar-dark bg-dark',
  },
  template: `
    <a class="navbar-brand" href="#">ngx-split</a>
    <button
      class="navbar-toggler hidden-lg-up"
      (click)="isCollapsed = !isCollapsed"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" [collapse]="isCollapsed">
      <ul class="nav navbar-nav">
        <li class="nav-item" [class.active]="router.isActive('/', true)">
          <a class="nav-link" routerLink="/">Home</a>
        </li>
        <li
          class="nav-item"
          [class.active]="router.isActive('/changelog', true)"
        >
          <a class="nav-link" routerLink="/changelog">Changelog</a>
        </li>
        <li
          class="nav-item"
          [class.active]="router.isActive('/documentation', true)"
        >
          <a class="nav-link" routerLink="/documentation">Documentation</a>
        </li>
        <li class="nav-item dropdown" dropdown>
          <a class="nav-link dropdown-toggle" dropdownToggle
            >Examples <span class="caret"></span
          ></a>
          <ul *dropdownMenu class="dropdown-menu" role="menu">
            <li
              *ngFor="let ex of examples"
              [class.active]="router.isActive(ex.path, true)"
            >
              <a
                class="dropdown-item"
                [routerLink]="ex.path"
                [innerHTML]="transform(ex.label)"
              ></a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  `,
})
export class TopbarComponent {
  examples: Array<IExampleData>;
  isCollapsed = true;

  constructor(private sanitizer: DomSanitizer, public router: Router) {
    this.examples = examples;

    this.router.events
      .pipe(filter((e) => e instanceof NavigationStart))
      .subscribe(() => {
        this.isCollapsed = true;
      });
  }

  transform(label: string) {
    return this.sanitizer.bypassSecurityTrustHtml(label);
  }
}
