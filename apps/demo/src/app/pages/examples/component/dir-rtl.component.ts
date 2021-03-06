import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { IAreaDir } from 'ngx-split';
import { Observable } from 'rxjs';

import { ChangeDetectionComponent } from './change-detection.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'split-example-page',
  },
  styles: [
    `
      .btns {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
      }
    `,
  ],
  template: `
    {{ testChangeDetectorRun() }}
    <div class="container">
      <ui-example-title [example]="example$ | async"></ui-example-title>
      <div class="split-example">
        <ui-split [dir]="dir">
          <ui-split-area [size]="20">
            <p>
              1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tiam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </ui-split-area>
          <ui-split-area [size]="40">
            <p>
              2. Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eodolor sit amet, consectetur, adipisci velit, sed quia non
              numquam eius modi tempora incidunt ut labore et dolore magnam
              aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
              exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid
              ex ea commodi consequatur? Quis autem vel eum iure reprehenderit
              qui in ea voluptate velit esse quam nihil molestiae consequatur,
              vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
            </p>
          </ui-split-area>
          <ui-split-area [size]="40">
            <p>
              3. Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eodolor sit amet, consectetur, adipisci velit, sed quia non
              numquam eius modi tempora incidunt ut labore et dolore magnam
              aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
              exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid
              ex ea commodi consequatur? Quis autem vel eum iure reprehenderit
              qui in ea voluptate velit esse quam nihil molestiae consequatur,
              vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
            </p>
          </ui-split-area>
        </ui-split>
      </div>
      <br />
      <div class="btns">
        <button
          class="btn btn-primary"
          (click)="dir = dir === 'rtl' ? 'ltr' : 'rtl'"
        >
          {{ 'Toggle dir: "' + dir + '"' }}
        </button>
      </div>
    </div>
  `,
})
export class DirRtlComponent extends ChangeDetectionComponent {
  dir: IAreaDir = 'rtl';

  example$: Observable<Data>;
  constructor(private route: ActivatedRoute) {
    super();
    this.example$ = this.route.data;
  }
}
