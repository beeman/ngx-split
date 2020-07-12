import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'ui-topbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
    `
      a.navbar-brand,
      a.navbar-brand:hover {
        font-weight: bold;
        color: #e83e8c;
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
    class: 'navbar navbar-expand-lg fixed-top navbar-dark bg-dark',
  },
  template: `
    <button
      class="navbar-toggler hidden-lg-up mr-2"
      (click)="isCollapsed = !isCollapsed"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand mr-auto" routerLink="/">ngx-split</a>
    <div class="collapse navbar-collapse ml-2" [collapse]="isCollapsed">
      <ul class="nav navbar-nav">
        <li
          class="nav-item"
          routerLinkActive="active"
          [routerLinkActiveOptions]="{ exact: true }"
        >
          <a class="nav-link" routerLink="/">Home</a>
        </li>
        <li class="nav-item" routerLinkActive="active">
          <a class="nav-link" routerLink="/changelog">Changelog</a>
        </li>
        <li class="nav-item" routerLinkActive="active">
          <a class="nav-link" routerLink="/documentation">Documentation</a>
        </li>
        <li class="nav-item dropdown" dropdown routerLinkActive="active">
          <a class="nav-link dropdown-toggle" dropdownToggle>
            Examples <span class="caret"></span>
          </a>
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
  examples = [
    {
      path: 'examples/simple-split',
      label: 'Simple split',
    },
    {
      path: 'examples/min-max-split',
      label: 'Split with minSize & maxSize',
    },
    {
      path: 'examples/nested-split',
      label: 'Nested splits',
    },
    {
      path: 'examples/iframes',
      label: 'Split containing iframes',
    },
    {
      path: 'examples/split-transitons',
      label: 'Split with transitions',
    },
    {
      path: 'examples/sync-split',
      label: 'Split synchronized',
    },
    {
      path: 'examples/custom-gutter-style',
      label: 'Split with custom gutter style',
    },
    {
      path: 'examples/toggling-dom-and-visibility',
      label:
        'Toggling areas using <code>[visible]</code> and <code>*ngIf</code>',
    },
    {
      path: 'examples/gutter-click-roll-unroll',
      label: 'Roll/unroll area on <code>(gutterClick)</code> event',
    },
    {
      path: 'examples/access-from-class',
      label: 'Access and interact <code>SplitComponent</code> from TS class',
    },
    {
      path: 'examples/geek-demo',
      label: 'Geek demo (100% dynamic)',
    },
    {
      path: 'examples/dir-rtl',
      label: 'Split inside right to left (RTL) page',
    },
    {
      path: 'examples/workspace-localstorage',
      label: 'Fullscreen workspace saved in localStorage',
    },
  ];
  isCollapsed = true;

  constructor(private sanitizer: DomSanitizer, public router: Router) {
    this.router.events
      .pipe(filter((e) => e instanceof NavigationStart))
      .subscribe(() => (this.isCollapsed = true));
  }

  transform(label: string) {
    return this.sanitizer.bypassSecurityTrustHtml(label);
  }
}
