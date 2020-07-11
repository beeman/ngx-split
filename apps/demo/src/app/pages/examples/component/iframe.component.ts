import { Component, ChangeDetectionStrategy } from '@angular/core';

import { AComponent } from './AComponent';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'split-example-page',
  },
  styles: [
    `
      .ngx-split-area > div {
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
  template: ` {{ testChangeDetectorRun() }}
    <div class="container">
      <ui-example-title [type]="exampleEnum.IFRAME"></ui-example-title>
      <div class="split-example" style="height: 400px;">
        <ngx-split
          direction="horizontal"
          (dragStart)="showIframeHider = true"
          (dragEnd)="showIframeHider = false"
        >
          <ngx-split-area size="40">
            <div>
              <iframe
                src="https://beeman.github.io/ngx-split"
                frameborder="0"
                width="100%"
                height="100%"
              ></iframe>
              <div
                [hidden]="showIframeHider === false"
                class="hack-iframe-hider"
              ></div>
            </div>
          </ngx-split-area>
          <ngx-split-area size="60">
            <div>
              <iframe
                src="https://beeman.github.io/ngx-split"
                frameborder="0"
                width="100%"
                height="100%"
              ></iframe>
              <div
                [hidden]="showIframeHider === false"
                class="hack-iframe-hider"
              ></div>
            </div>
          </ngx-split-area>
        </ngx-split>
      </div>
    </div>`,
})
export class IframeComponent extends AComponent {
  showIframeHider = false;
}
