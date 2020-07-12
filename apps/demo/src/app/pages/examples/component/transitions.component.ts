import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { getAreaSize, IAreaSize, IOutputData } from 'ngx-split';
import { formatDate } from '../format-date';

import { AComponent } from './AComponent';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'split-example-page',
  },
  styles: [
    `
      button {
        margin: 4px;
      }

      .btns {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
      }
      .btns > div {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 10px;
      }
      .btns > div > button {
        margin-bottom: 10px;
      }

      .btns > div:nth-child(1) {
        flex: 1 1 20%;
      }
      .btns > div:nth-child(2) {
        flex: 1 1 40%;
      }
      .btns > div:nth-child(3) {
        flex: 1 1 40%;
      }
      .logs > p {
        margin-bottom: 5px;
      }
      .logs > ul {
        height: 200px;
        width: 100%;
        overflow-y: scroll;
        overflow-x: hidden;
        border: 1px solid #bfbfbf;
        background-color: #e8e8e8;
      }

      .ngx-split-area {
        background: lightgrey;
      }

      .ngx-split-area.ngx-min {
        background: green;
      }

      .ngx-split-area.ngx-max {
        background: red;
      }

      :host .ex2 button {
        width: 100%;
      }

      :host
        .ex2
        ::ng-deep
        .ngx-transition.ngx-init:not(.ngx-dragging)
        > .ngx-split-area,
      :host
        ::ng-deep
        .ngx-transition.ngx-init:not(.ngx-dragging)
        > .ngx-split-gutter {
        transition: flex-basis 1s !important;
      }
    `,
  ],
  template: ` {{ testChangeDetectorRun() }}
    <div class="container">
      <ui-example-title [type]="exampleEnum.TRANSITION"></ui-example-title>
      <div class="split-example">
        <ngx-split
          direction="horizontal"
          [disabled]="true"
          [useTransition]="useTransition"
          (dragEnd)="onDragEnd($event)"
          (transitionEnd)="log($event)"
        >
          <ngx-split-area
            [visible]="actionVisible.a1v"
            [size]="actionSize.a1s"
            [order]="1"
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tiam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </ngx-split-area>
          <ngx-split-area
            [visible]="actionVisible.a2v"
            [size]="actionSize.a2s"
            [order]="2"
          >
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
          </ngx-split-area>
          <ngx-split-area
            [visible]="actionVisible.a3v"
            [size]="actionSize.a3s"
            [order]="3"
          >
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
          </ngx-split-area>
        </ngx-split>
      </div>
      <br />
      <div class="btns">
        <div>
          <button
            class="btn btn-primary"
            [class.active]="!useTransition"
            (click)="useTransition = !useTransition"
          >
            {{ 'useTransition: ' + useTransition }}
          </button>
        </div>
        <div class="btn-group">
          <label
            class="btn btn-primary"
            [class.active]="!actionVisible.a1v"
            (click)="actionVisible.a1v = !actionVisible.a1v"
            >{{ 'area1: ' + actionVisible.a1v }}</label
          >
          <label
            class="btn btn-primary"
            [class.active]="!actionVisible.a2v"
            (click)="actionVisible.a2v = !actionVisible.a2v"
            >{{ 'area2: ' + actionVisible.a2v }}</label
          >
          <label
            class="btn btn-primary"
            [class.active]="!actionVisible.a3v"
            (click)="actionVisible.a3v = !actionVisible.a3v"
            >{{ 'area3: ' + actionVisible.a3v }}</label
          >
        </div>
        <div class="btn-group">
          <label
            class="btn btn-primary"
            [class.disabled]="
              actionSize.a1s === 25 ||
              !actionVisible.a1v ||
              !actionVisible.a2v ||
              !actionVisible.a3v
            "
            (click)="
              actionSize.a1s = 25; actionSize.a2s = 50; actionSize.a3s = 25
            "
            >Set sizes to 25/50/25</label
          >
          <label
            class="btn btn-primary"
            [class.disabled]="
              actionSize.a1s === 40 ||
              !actionVisible.a1v ||
              !actionVisible.a2v ||
              !actionVisible.a3v
            "
            (click)="
              actionSize.a1s = 40; actionSize.a2s = 20; actionSize.a3s = 40
            "
            >Set sizes to 40/20/40</label
          >
        </div>
      </div>
      <div class="logs">
        <p>Events <code>(transitionEnd)</code>:</p>
        <ul #logs>
          <li *ngFor="let l of logMessages" [ngClass]="l.type">{{ l.text }}</li>
        </ul>
      </div>
      <br />
      <hr />
      <br />
      <div class="split-example ex2" style="height: 150px;">
        <ngx-split [useTransition]="true" unit="pixel">
          <ngx-split-area
            [size]="200"
            [minSize]="200"
            [order]="1"
            [visible]="only === 1 || only === 0"
          >
            <button (click)="left()" class="btn btn-primary">
              {{ only === 1 ? 'LEFT ⬅️' : 'LEFT ➡' }}
            </button>
            <p>size: 200px<br />minSize: 200px</p>
          </ngx-split-area>
          <ngx-split-area
            size="*"
            [order]="2"
            [visible]="only === 2 || only === 0"
          >
            <button (click)="center()" class="btn btn-primary">
              {{ only === 2 ? '➡ ️CENTER ⬅' : '️⬅ ️CENTER ➡' }}
            </button>
            <p>size: *</p>
          </ngx-split-area>
          <ngx-split-area
            [size]="200"
            [minSize]="200"
            [order]="3"
            [visible]="only === 3 || only === 0"
          >
            <button (click)="right()" class="btn btn-primary">
              {{ only === 3 ? '➡ RIGHT' : '⬅️ RIGHT' }}
            </button>
            <p>size: 200px<br />minSize: 200px</p>
          </ngx-split-area>
        </ngx-split>
      </div>
      <div class="split-example ex2" style="height: 150px;">
        <ngx-split [useTransition]="true" unit="percent">
          <ngx-split-area
            [size]="30"
            [minSize]="30"
            [order]="1"
            [visible]="only === 1 || only === 0"
          >
            <button (click)="left()" class="btn btn-primary">
              {{ only === 1 ? 'LEFT ⬅️' : 'LEFT ➡' }}
            </button>
            <p>size: 30%<br />minSize: 30%</p>
          </ngx-split-area>
          <ngx-split-area
            [size]="40"
            [order]="2"
            [visible]="only === 2 || only === 0"
          >
            <button (click)="center()" class="btn btn-primary">
              {{ only === 2 ? '➡ ️CENTER ⬅' : '️⬅ ️CENTER ➡' }}
            </button>
            <p>size: 40%</p>
          </ngx-split-area>
          <ngx-split-area
            [size]="30"
            [minSize]="30"
            [order]="3"
            [visible]="only === 3 || only === 0"
          >
            <button (click)="right()" class="btn btn-primary">
              {{ only === 3 ? '➡ RIGHT' : '⬅️ RIGHT' }}
            </button>
            <p>size: 30%<br />minSize: 30%</p>
          </ngx-split-area>
        </ngx-split>
      </div>
      <br />
      <hr />
      <br />
      <div class="btns">
        <div class="btn-group">
          <label
            class="btn btn-primary"
            [class.active]="!keepA"
            (click)="keepA = !keepA"
            >{{ 'A: ' + keepA }}</label
          >
          <label
            class="btn btn-primary"
            [class.active]="!keepB"
            (click)="keepB = !keepB"
            >{{ 'B: ' + keepB }}</label
          >
          <label
            class="btn btn-primary"
            [class.active]="!keepC"
            (click)="keepC = !keepC"
            >{{ 'C: ' + keepC }}</label
          >
        </div>
      </div>
      <div class="split-example ex2" style="height: 150px;">
        <ngx-split [useTransition]="true" unit="pixel">
          <ngx-split-area
            [size]="200"
            [minSize]="200"
            [order]="1"
            [visible]="keepA"
          >
            <p>A<br />size: 200px<br />minSize: 200px</p>
          </ngx-split-area>
          <ngx-split-area size="*" [order]="2" [visible]="keepB">
            <p>B<br />size: *</p>
          </ngx-split-area>
          <ngx-split-area
            [size]="200"
            [minSize]="200"
            [order]="3"
            [visible]="keepC"
          >
            <p>C<br />size: 200px<br />minSize: 200px</p>
          </ngx-split-area>
        </ngx-split>
      </div>
      <div class="split-example ex2" style="height: 150px;">
        <ngx-split [useTransition]="true" unit="percent">
          <ngx-split-area
            [size]="30"
            [minSize]="30"
            [order]="1"
            [visible]="keepA"
          >
            <p>A<br />size: 30%<br />minSize: 30%</p>
          </ngx-split-area>
          <ngx-split-area [size]="40" [order]="2" [visible]="keepB">
            <p>B<br />size: 40%</p>
          </ngx-split-area>
          <ngx-split-area
            [size]="30"
            [minSize]="30"
            [order]="3"
            [visible]="keepC"
          >
            <p>C<br />size: 30%<br />minSize: 30%</p>
          </ngx-split-area>
        </ngx-split>
      </div>
    </div>`,
})
export class TransitionsComponent extends AComponent {
  actionSize: Record<string, IAreaSize> = {
    a1s: 25,
    a2s: 50,
    a3s: 25,
  };
  actionVisible: Record<string, boolean> = {
    a1v: true,
    a2v: true,
    a3v: true,
  };
  useTransition = true;
  only = 0;

  keepA = true;
  keepB = true;
  keepC = true;
  logMessages: Array<{ type: string; text: string }> = [];

  @ViewChild('logs', { static: false }) logsEl: ElementRef;

  log(e) {
    this.logMessages.push({
      type: 'transitionEnd',
      text: `${formatDate(new Date())} > transitionEnd event > ${e}`,
    });
    setTimeout(() => {
      if (this.logsEl.nativeElement.scroll) {
        (<HTMLElement>this.logsEl.nativeElement).scroll({
          top: this.logMessages.length * 30,
        });
      }
    });
  }

  left() {
    switch (this.only) {
      case 0:
      case 2:
      case 3:
        this.only = 1;
        return;
      case 1:
        this.only = 0;
        return;
    }
  }
  center() {
    switch (this.only) {
      case 0:
      case 1:
      case 3:
        this.only = 2;
        return;
      case 2:
        this.only = 0;
        return;
    }
  }
  right() {
    switch (this.only) {
      case 0:
      case 1:
      case 2:
        this.only = 3;
        return;
      case 3:
        this.only = 0;
        return;
    }
  }

  public onDragEnd($event: IOutputData) {
    this.actionSize.a1s = getAreaSize($event.sizes[0]);
    this.actionSize.a2s = getAreaSize($event.sizes[1]);
    this.actionSize.a3s = getAreaSize($event.sizes[2]);
  }
}
