import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { Observable } from 'rxjs';

import { ChangeDetectionComponent } from './change-detection.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'split-example-page',
  },
  styles: [
    `
      iframe {
        border: 0;
        height: 100%;
        width: 100%;
      }
      .ui-split-area > div {
        position: relative;
        height: 100%;
        overflow: hidden;
      }

      .hack-iframe-hider {
        background: rgba(0, 0, 0, 0.2);
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    `,
  ],
  template: `
    {{ testChangeDetectorRun() }}
    <div class="container">
      <ui-example-title [example]="example$ | async"></ui-example-title>
      <div class="split-example" style="height: 400px;">
        <ui-split
          direction="horizontal"
          (dragStart)="showIframeHider = true"
          (dragEnd)="showIframeHider = false"
        >
          <ui-split-area [size]="40">
            <div>
              <iframe src="https://beeman.github.io/ui-split"></iframe>
              <div
                [hidden]="showIframeHider === false"
                class="hack-iframe-hider"
              ></div>
            </div>
          </ui-split-area>
          <ui-split-area [size]="60">
            <div>
              <iframe src="https://beeman.github.io/ui-split"></iframe>
              <div
                [hidden]="showIframeHider === false"
                class="hack-iframe-hider"
              ></div>
            </div>
          </ui-split-area>
        </ui-split>
      </div>
    </div>
  `,
})
export class IframeComponent extends ChangeDetectionComponent {
  showIframeHider = false;
  example$: Observable<Data>;

  constructor(private route: ActivatedRoute) {
    super();
    this.example$ = this.route.data;
  }
}
