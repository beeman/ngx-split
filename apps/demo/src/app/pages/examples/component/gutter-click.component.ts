import {
  Component,
  ViewChild,
  ElementRef,
  ChangeDetectionStrategy,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { SplitComponent } from 'ngx-split';

import { AComponent } from './AComponent';
import { formatDate } from '../format-date';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'split-example-page',
  },
  styles: [
    `
      ngx-split.ngx-transition.ngx-init:not(.ngx-dragging)
        ::ng-deep
        > .ngx-split-gutter,
      ngx-split.ngx-transition.ngx-init:not(.ngx-dragging) > .ngx-split-area {
        transition: flex-basis 1.5s !important;
      }
      ngx-split.ngx-disabled ::ng-deep > .ngx-split-gutter {
        cursor: pointer !important;
      }

      .btns {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
      }
      .btns > div {
        flex: 1 1 50%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .btns > div > button {
        margin-bottom: 10px;
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
    `,
  ],
  template: ` {{ testChangeDetectorRun() }}
    <div class="container">
      <ui-example-title [type]="exampleEnum.CLICK"></ui-example-title>
      <div class="split-example">
        <ngx-split
          #mySplit
          [disabled]="isDisabled"
          gutterSize="10"
          [gutterDblClickDuration]="dblClickTime"
          direction="horizontal"
          [useTransition]="useTransition"
          (dragStart)="log('dragStart', $event)"
          (dragEnd)="log('dragEnd', $event)"
          (gutterClick)="log('gutterClick', $event)"
          (gutterDblClick)="log('gutterDblClick', $event)"
          (transitionEnd)="log('transitionEnd', $event)"
        >
          <ngx-split-area
            *ngFor="let a of areas"
            [size]="a.size"
            [order]="a.order"
          >
            <p>{{ a.content }}</p>
          </ngx-split-area>
        </ngx-split>
      </div>
      <br />
      <div class="btns">
        <div>
          <button
            class="btn btn-warning"
            [class.active]="!useTransition"
            (click)="useTransition = !useTransition"
          >
            {{ 'useTransition: ' + useTransition }}
          </button>
        </div>
        <div>
          <button
            class="btn btn-warning"
            [class.active]="!isDisabled"
            (click)="isDisabled = !isDisabled"
          >
            {{ 'isDisabled: ' + isDisabled }}
          </button>
        </div>
        <div>
          <label>Property <code>[gutterDblClickDuration]</code>:&nbsp;</label>
          <div class="btn-group">
            <label
              class="btn btn-warning"
              tooltip="When set to 0ms, 'click' is instant and 'dblclick' is impossible."
              [class.disabled]="dblClickTime === 0"
              (click)="dblClickTime = 0"
              >0ms</label
            >
            <label
              class="btn btn-warning"
              tooltip="When set to 500ms, 'click' is delayed and 'dblclick' is possible."
              [class.disabled]="dblClickTime === 500"
              (click)="dblClickTime = 500"
              >500ms</label
            >
          </div>
        </div>
      </div>
      <div class="logs">
        <p>All <code>ngx-split</code> events emitted:</p>
        <ul #logs>
          <li *ngFor="let l of logMessages" [ngClass]="l.type">{{ l.text }}</li>
        </ul>
      </div>
    </div>`,
})
export class GutterClickComponent extends AComponent
  implements AfterViewInit, OnDestroy {
  isDisabled: boolean = true;
  useTransition: boolean = true;
  dblClickTime: number = 0;
  logMessages: Array<{ type: string; text: string }> = [];
  areas = [
    {
      size: 25,
      order: 1,
      content: 'fg fdkjuh dfskhf dkujv fd vifdk hvdkuh fg',
    },
    {
      size: 50,
      order: 2,
      content: 'sd h vdshhf deuyf gduyeg hudeg hudfg  fd vifdk hvdkuh fg',
    },
    {
      size: 25,
      order: 3,
      content: 'sd jslfd ijgil dfhlt jkgvbnhj fl bhjgflh jfglhj fl h fg',
    },
  ];
  sub: Subscription;

  @ViewChild('mySplit', { static: false }) mySplitEl: SplitComponent;
  @ViewChild('logs', { static: false }) logsEl: ElementRef;

  ngAfterViewInit() {
    this.sub = this.mySplitEl.dragProgress$.subscribe((data) => {
      console.log(
        `${formatDate(
          new Date()
        )} > dragProgress$ observable emitted but current component change detection didn't runned!`,
        data
      );
    });
  }

  log(type: string, e: { gutterNum: number; sizes: Array<number> }) {
    this.logMessages.push({
      type,
      text: `${formatDate(new Date())} > ${type} event > ${JSON.stringify(e)}`,
    });

    setTimeout(() => {
      if (this.logsEl.nativeElement.scroll) {
        (<HTMLElement>this.logsEl.nativeElement).scroll({
          top: this.logMessages.length * 30,
        });
      }
    });

    if (type === 'gutterClick') {
      this.gutterClick(e);
    } else if (type === 'dragEnd') {
      this.areas[0].size = e.sizes[0];
      this.areas[1].size = e.sizes[1];
      this.areas[2].size = e.sizes[2];
    }
  }

  gutterClick(e: { gutterNum: number; sizes: Array<number> }) {
    if (e.gutterNum === 1) {
      if (this.areas[0].size > 0) {
        this.areas[1].size += this.areas[0].size;
        this.areas[0].size = 0;
      } else if (this.areas[1].size > 25) {
        this.areas[1].size -= 25;
        this.areas[0].size = 25;
      } else {
        this.areas[0].size = 25;
        this.areas[1].size = 50;
        this.areas[2].size = 25;
      }
    } else if (e.gutterNum === 2) {
      if (this.areas[2].size > 0) {
        this.areas[1].size += this.areas[2].size;
        this.areas[2].size = 0;
      } else if (this.areas[1].size > 25) {
        this.areas[1].size -= 25;
        this.areas[2].size = 25;
      } else {
        this.areas[0].size = 25;
        this.areas[1].size = 50;
        this.areas[2].size = 25;
      }
    }
  }

  dragEnd(e: { gutterNum: number; sizes: Array<number> }) {
    this.areas[0].size = e.sizes[0];
    this.areas[1].size = e.sizes[1];
    this.areas[2].size = e.sizes[2];
  }

  ngOnDestroy() {
    if (this.sub) this.sub.unsubscribe();
  }
}
