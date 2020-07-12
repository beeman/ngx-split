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
    `,
  ],
  template: `
    {{ testChangeDetectorRun() }}
    <div class="container">
      <ui-example-title [example]="example$ | async"></ui-example-title>
      <div class="split-example ex1" style="height: 150px;">
        <ui-split [gutterSize]="15" (dragEnd)="log('dragEnd', $event)">
          <ui-split-area
            *ngIf="action.isPresentA"
            [visible]="action.isVisibleA"
            [order]="0"
          >
            <p>A</p>
          </ui-split-area>
          <ui-split-area
            *ngIf="action.isPresentB"
            [visible]="action.isVisibleB"
            [order]="1"
          >
            <p>B</p>
          </ui-split-area>
          <ui-split-area
            *ngIf="action.isPresentC"
            [visible]="action.isVisibleC"
            [order]="2"
          >
            <p>C</p>
          </ui-split-area>
        </ui-split>
      </div>
      <p>Toggle <code>[visible]="boolean"</code> properties:</p>
      <div class="btns">
        <div class="btn-group">
          <label
            class="btn btn-primary"
            [class.active]="!action.isVisibleA"
            (click)="action.isVisibleA = !action.isVisibleA"
            >{{ 'areaA: ' + action.isVisibleA }}</label
          >
          <label
            class="btn btn-primary"
            [class.active]="!action.isVisibleB"
            (click)="action.isVisibleB = !action.isVisibleB"
            >{{ 'areaB: ' + action.isVisibleB }}</label
          >
          <label
            class="btn btn-primary"
            [class.active]="!action.isVisibleC"
            (click)="action.isVisibleC = !action.isVisibleC"
            >{{ 'areaC: ' + action.isVisibleC }}</label
          >
        </div>
      </div>
      <p>Toggle <code>*ngIf="boolean"</code> properties:</p>
      <div class="btns">
        <div class="btn-group">
          <label
            class="btn btn-primary"
            [class.active]="!action.isPresentA"
            (click)="action.isPresentA = !action.isPresentA"
            >{{ 'areaA: ' + action.isPresentA }}</label
          >
          <label
            class="btn btn-primary"
            [class.active]="!action.isPresentB"
            (click)="action.isPresentB = !action.isPresentB"
            >{{ 'areaB: ' + action.isPresentB }}</label
          >
          <label
            class="btn btn-primary"
            [class.active]="!action.isPresentC"
            (click)="action.isPresentC = !action.isPresentC"
            >{{ 'areaC: ' + action.isPresentC }}</label
          >
        </div>
      </div>
      <br />
      <div class="alert alert-warning" role="alert">
        <b>Warning:</b><br /><code>[visible]="false"</code> only hides elements
        and don't remove it from the DOM, It could lead to useless change
        detection processing.<br />Use of <code>*ngIf="false"</code> should be
        the default option unless you have reasons to keep DOM elements.
      </div>
    </div>
  `,
})
export class TogglingDomAndVisibleComponent extends ChangeDetectionComponent {
  action = {
    isVisibleA: true,
    isVisibleB: true,
    isVisibleC: true,
    isPresentA: true,
    isPresentB: true,
    isPresentC: true,
    logs: '',
  };

  example$: Observable<Data>;
  constructor(private route: ActivatedRoute) {
    super();
    this.example$ = this.route.data;
  }
  log(eventName, e) {
    this.action.logs = `${new Date()}: ${eventName} > ${e}\n${
      this.action.logs
    }`;
  }
}
