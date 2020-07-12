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
      .btns {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
      }

      .txt-min,
      .txt-max,
      .txt-minmax {
        pointer-events: none;
        position: absolute;
        opacity: 0;
        transition: opacity 0.2s;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        overflow: hidden;
      }

      .txt-min > p,
      .txt-max > p,
      .txt-minmax > p {
        font-size: 30px;
        font-weight: bold;
        color: var(--gray);
        text-align: center;
      }

      ui-split-area {
        background: var(--cyan);
        transition: background 0.2s;
        position: relative;
        overflow: hidden !important;
      }

      ui-split-area > p {
        position: absolute;
        font-size: 12px;
        font-weight: bold;
        padding: 5px;
        line-height: 12px;
      }

      ui-split-area.ngx-min {
        background: var(--green);
      }
      ui-split-area.ngx-min .txt-min {
        opacity: 1;
      }
      ui-split-area.ngx-max {
        background: var(--red);
      }
      ui-split-area.ngx-max .txt-max {
        opacity: 1;
      }
      ui-split-area.ngx-min.ngx-max {
        background: var(--pink);
      }
      ui-split-area.ngx-min.ngx-max .txt-minmax {
        opacity: 1;
      }
    `,
  ],
  template: `
    {{ testChangeDetectorRun() }}
    <div class="container">
      <ui-example-title [example]="example$ | async"></ui-example-title>
      <h5>Percent mode:</h5>
      <div class="split-example ex-percent">
        <ui-split
          unit="percent"
          [restrictMove]="restrictMove"
          [gutterSize]="30"
          (dragEnd)="log($event)"
        >
          <ui-split-area [size]="30" [minSize]="20" [maxSize]="30">
            <p>size="30"<br />minSize="20"<br />maxSize="30"</p>
            <div class="txt-min"><p>MIN</p></div>
            <div class="txt-max"><p>MAX</p></div>
          </ui-split-area>
          <ui-split-area [size]="40" [minSize]="30" [maxSize]="50">
            <p>size="40"<br />minSize="30"<br />maxSize="50"</p>
            <div class="txt-min"><p>MIN</p></div>
            <div class="txt-max"><p>MAX</p></div>
          </ui-split-area>
          <ui-split-area [size]="30" [minSize]="20" [maxSize]="50">
            <p>size="30"<br />minSize="20"<br />maxSize="50"</p>
            <div class="txt-min"><p>MIN</p></div>
            <div class="txt-max"><p>MAX</p></div>
          </ui-split-area>
        </ui-split>
      </div>
      <h5>Pixel mode:</h5>
      <div class="split-example ex-pixel">
        <ui-split
          unit="pixel"
          [restrictMove]="restrictMove"
          [gutterSize]="30"
          (dragEnd)="log($event)"
        >
          <ui-split-area [size]="200" [minSize]="100" [maxSize]="200">
            <p>size="200"<br />minSize="100"<br />maxSize="200"</p>
            <div class="txt-min"><p>MIN</p></div>
            <div class="txt-max"><p>MAX</p></div>
          </ui-split-area>
          <ui-split-area size="*">
            <p>size="*"</p>
            <div class="txt-min"><p>MIN</p></div>
            <div class="txt-max"><p>MAX</p></div>
          </ui-split-area>
          <ui-split-area [size]="150" [lockSize]="true">
            <p>
              size="150"<br />lockSize="true"<br /><br />Same as<br />minSize="150"<br />maxSize="150"
            </p>
            <div class="txt-minmax">
              <p>MIN<br />&<br />MAX</p>
            </div>
          </ui-split-area>
          <ui-split-area [size]="250" [minSize]="250" [maxSize]="400">
            <p>size="250"<br />minSize="250"<br />maxSize="400"</p>
            <div class="txt-min"><p>MIN</p></div>
            <div class="txt-max"><p>MAX</p></div>
          </ui-split-area>
        </ui-split>
      </div>
      <br />
      <div class="btns">
        <button class="btn btn-primary" (click)="restrictMove = !restrictMove">
          {{ 'Restrict move: "' + restrictMove + '"' }}
        </button>
      </div>
    </div>
  `,
})
export class MinMaxComponent extends ChangeDetectionComponent {
  restrictMove = false;

  example$: Observable<Data>;
  constructor(private route: ActivatedRoute) {
    super();
    this.example$ = this.route.data;
  }

  log(x) {
    console.log(
      'dragEnd ',
      x.sizes,
      ' total > ',
      x.sizes.reduce((t, s) => t + s, 0)
    );
  }
}
