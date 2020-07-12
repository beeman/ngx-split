import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { Subscription, merge, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SplitComponent } from 'ngx-split';

import { ChangeDetectionComponent } from './change-detection.component';
import { formatDate } from '../format-date';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'split-example-page',
  },
  template: `
    {{ testChangeDetectorRun() }}
    <div class="container">
      <ui-example-title [example]="example$ | async"></ui-example-title>
      <div class="split-example">
        <ngx-split direction="vertical">
          <div ngx-split-area [size]="20">
            <ngx-split direction="horizontal" #mySplitA>
              <div ngx-split-area [size]="sizes[0]">A 1</div>
              <ngx-split-area [size]="sizes[1]">A 2</ngx-split-area>
            </ngx-split>
          </div>
          <div ngx-split-area [size]="20">
            <ngx-split direction="horizontal" #mySplitB>
              <div ngx-split-area [size]="sizes[0]">B 1</div>
              <ngx-split-area [size]="sizes[1]">B 2</ngx-split-area>
            </ngx-split>
          </div>
          <ngx-split-area [size]="60">
            <ngx-split direction="horizontal" #mySplitC>
              <ngx-split-area [size]="sizes[0]">C 1</ngx-split-area>
              <div ngx-split-area [size]="sizes[1]">
                C 2<br />
                Open devTools to view console.log() statements.<br />
                <button class="btn btn-primary" (click)="test()">
                  Trigger change detection
                </button>
              </div>
            </ngx-split>
          </ngx-split-area>
        </ngx-split>
      </div>
    </div>
  `,
})
export class SyncComponent extends ChangeDetectionComponent
  implements AfterViewInit, OnDestroy {
  @ViewChild('mySplitA', { static: false }) mySplitAEl: SplitComponent;
  @ViewChild('mySplitB', { static: false }) mySplitBEl: SplitComponent;
  @ViewChild('mySplitC', { static: false }) mySplitCEl: SplitComponent;

  sizes = [25, 75];
  sub: Subscription;
  example$: Observable<Data>;
  constructor(private route: ActivatedRoute) {
    super();
    this.example$ = this.route.data;
  }
  ngAfterViewInit() {
    this.sub = merge(
      this.mySplitAEl.dragProgress$.pipe(map((data) => ({ name: 'A', data }))),
      this.mySplitBEl.dragProgress$.pipe(map((data) => ({ name: 'B', data }))),
      this.mySplitCEl.dragProgress$.pipe(map((data) => ({ name: 'C', data })))
    ).subscribe((d) => {
      if (d.name === 'A') {
        // If split A changed > update BC
        const sizesSplitA = this.mySplitAEl.getVisibleAreaSizes(); //d.data.sizes; <-- Could have use these values too

        this.mySplitBEl.setVisibleAreaSizes(sizesSplitA);
        this.mySplitCEl.setVisibleAreaSizes(sizesSplitA);
      } else if (d.name === 'B') {
        // Else if split B changed > update AC
        const sizesSplitB = this.mySplitBEl.getVisibleAreaSizes(); //d.data.sizes; <-- Could have use these values too

        this.mySplitAEl.setVisibleAreaSizes(sizesSplitB);
        this.mySplitCEl.setVisibleAreaSizes(sizesSplitB);
      } else if (d.name === 'C') {
        // Else if split C changed > update AB
        const sizesSplitC = this.mySplitCEl.getVisibleAreaSizes(); //d.data.sizes; <-- Could have use these values too

        this.mySplitAEl.setVisibleAreaSizes(sizesSplitC);
        this.mySplitBEl.setVisibleAreaSizes(sizesSplitC);
      }

      console.log(
        `${formatDate(
          new Date()
        )} > dragProgress$ observable emitted, splits synchronized but current component change detection didn't run! (from split ${
          d.name
        })`
      );
    });
  }

  test() {}

  ngOnDestroy() {
    if (this.sub) this.sub.unsubscribe();
  }
}
