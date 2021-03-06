import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { IAreaDirection } from 'ngx-split';
import { Observable } from 'rxjs';

import { ChangeDetectionComponent } from './change-detection.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'split-example-page',
  },
  styleUrls: [`./custom-gutter-style.component.scss`],
  template: `
    {{ testChangeDetectorRun() }}
    <div class="container">
      <ui-example-title [example]="example$ | async"></ui-example-title>
      <div class="split-example ex-a">
        <ui-split [direction]="direction" [gutterSize]="35">
          <ui-split-area [size]="30">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tiam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </ui-split-area>
          <ui-split-area [size]="70">
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
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
      <div class="split-example ex-b">
        <ui-split
          [direction]="direction"
          [restrictMove]="true"
          [gutterSize]="1"
        >
          <ui-split-area [size]="30"
            ><p>
              A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A
              A A A A A A A A A A A A A A
            </p></ui-split-area
          >
          <ui-split-area [size]="50"
            ><p>
              B B B B B B B B B B B B B B B B B B B B B B B B B B B B B B B B B
              B B B B B B B B B B B B B B
            </p></ui-split-area
          >
          <ui-split-area [size]="20"
            ><p>
              C C C C C C C C C C C C C C C C C C C C C C C C C C C C C C C C C
              C C C C C C C C C C C C C C
            </p></ui-split-area
          >
        </ui-split>
      </div>
      <br />
      <div class="btns">
        <button
          class="btn btn-primary"
          (click)="
            direction = direction === 'horizontal' ? 'vertical' : 'horizontal'
          "
        >
          {{ 'Toggle direction: "' + direction + '"' }}
        </button>
      </div>
    </div>
  `,
})
export class CustomGutterStyleComponent extends ChangeDetectionComponent {
  direction: IAreaDirection = 'horizontal';
  example$: Observable<Data>;
  constructor(private route: ActivatedRoute) {
    super();
    this.example$ = this.route.data;
  }
}
