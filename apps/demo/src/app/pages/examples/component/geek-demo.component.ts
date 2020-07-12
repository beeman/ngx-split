import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { SortableComponent } from 'ngx-bootstrap/sortable';
import { IAreaDirection } from 'ngx-split';
import { Observable } from 'rxjs';

import { ChangeDetectionComponent } from './change-detection.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'split-example-page',
  },
  styles: [
    `
      .ui-split-area {
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--white);
        text-shadow: 0 0 7px var(--gray-dark);
      }

      .opts-prop {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-around;
      }
      .opts-prop > div {
        margin-bottom: 10px;
      }

      .opts-area > .title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px;
        background-color: #e8e8e8;
      }

      .area-item {
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 4px;
        cursor: move;
      }
      .area-item button {
        margin: 0 5px;
      }

      .num {
        color: var(--white);
        text-shadow: 0 0 7px var(--gray-dark);
      }
      label {
        margin: 0;
      }
    `,
  ],
  template: `
    {{ testChangeDetectorRun() }}
    <div class="container">
      <ui-example-title [example]="example$ | async"></ui-example-title>
      <div class="split-example" style="background-color: #e5e0e0;">
        <ui-split
          [direction]="direction"
          [restrictMove]="d.restrictMove"
          [gutterSize]="d.gutterSize"
          [gutterStep]="d.gutterStep"
          [style.width]="d.width"
          [style.height]="d.height"
          [useTransition]="d.useTransition"
          style="background-color: #ffffff;"
        >
          <ng-template
            ngFor
            let-area
            [ngForOf]="d.areas"
            [ngForTrackBy]="trackByFct"
            let-index="index"
          >
            <ui-split-area
              *ngIf="area.present"
              [visible]="area.visible"
              [order]="index"
              [size]="area.size"
              [style.background-color]="area.color"
              >{{ area.id }}</ui-split-area
            >
          </ng-template>
        </ui-split>
      </div>
      <div class="opts-prop">
        <div>
          <button
            class="btn btn-primary btn-sm"
            [class.active]="!d.useTransition"
            (click)="d.useTransition = !d.useTransition"
          >
            {{ 'useTransition: ' + d.useTransition }}
          </button>
        </div>
        <div>
          <div class="btn-group">
            <label
              class="btn btn-primary btn-sm"
              [(ngModel)]="direction"
              btnRadio="horizontal"
              >horizontal</label
            >
            <label
              class="btn btn-primary btn-sm"
              [(ngModel)]="direction"
              btnRadio="vertical"
              >vertical</label
            >
          </div>
        </div>
        <div>
          <label>Width:&nbsp;</label>
          <div class="btn-group">
            <label
              class="btn btn-primary btn-sm"
              [(ngModel)]="d.width"
              [btnRadio]="null"
              >null</label
            >
            <label
              class="btn btn-primary btn-sm"
              [(ngModel)]="d.width"
              btnRadio="400px"
              >400</label
            >
            <label
              class="btn btn-primary btn-sm"
              [(ngModel)]="d.width"
              btnRadio="600px"
              >600</label
            >
          </div>
        </div>
        <div>
          <label>Height:&nbsp;</label>
          <div class="btn-group">
            <label
              class="btn btn-primary btn-sm"
              [(ngModel)]="d.height"
              [btnRadio]="null"
              >null</label
            >
            <label
              class="btn btn-primary btn-sm"
              [(ngModel)]="d.height"
              btnRadio="200px"
              >200</label
            >
            <label
              class="btn btn-primary btn-sm"
              [(ngModel)]="d.height"
              btnRadio="350px"
              >350</label
            >
          </div>
        </div>
        <div>
          <label>Gutter size:&nbsp;</label>
          <div class="btn-group">
            <label
              class="btn btn-primary btn-sm"
              [(ngModel)]="d.gutterSize"
              [btnRadio]="null"
              >null</label
            >
            <label
              class="btn btn-primary btn-sm"
              [(ngModel)]="d.gutterSize"
              btnRadio="7"
              >7</label
            >
            <label
              class="btn btn-primary btn-sm"
              [(ngModel)]="d.gutterSize"
              btnRadio="22"
              >22</label
            >
          </div>
        </div>
        <div>
          <label>Gutter step:&nbsp;</label>
          <div class="btn-group">
            <label
              class="btn btn-primary btn-sm"
              [(ngModel)]="d.gutterStep"
              [btnRadio]="null"
              >null</label
            >
            <label
              class="btn btn-primary btn-sm"
              [(ngModel)]="d.gutterStep"
              btnRadio="10"
              >10</label
            >
            <label
              class="btn btn-primary btn-sm"
              [(ngModel)]="d.gutterStep"
              btnRadio="50"
              >50</label
            >
          </div>
        </div>
      </div>
      <div class="opts-area">
        <div class="title">
          <label><b>Areas (drag elements to change order):</b></label>
          <button class="btn btn-primary btn-sm" (click)="addArea()">
            Add area
          </button>
        </div>
        <bs-sortable
          [(ngModel)]="d.areas"
          [itemTemplate]="itemTemplate"
        ></bs-sortable>

        <ng-template #itemTemplate let-item="item" let-index="index">
          <div
            [style.background-color]="item.value.color"
            class="area-item id-{{ item.value.id }}"
          >
            <div class="num">{{ item.value.id }}</div>
            <div>
              <button
                class="btn btn-primary btn-sm"
                [class.active]="!item.value.present"
                (click)="item.value.present = !item.value.present"
              >
                {{ '*ngIf="' + item.value.present + '"' }}
              </button>
              <button
                class="btn btn-primary btn-sm"
                [class.active]="!item.value.visible"
                (click)="item.value.visible = !item.value.visible"
              >
                {{ '[visible]="' + item.value.visible + '"' }}
              </button>
              <button
                class="btn btn-primary btn-sm"
                (click)="removeArea(item.value)"
              >
                Remove
              </button>
            </div>
          </div>
        </ng-template>
      </div>
    </div>
  `,
})
export class GeekDemoComponent extends ChangeDetectionComponent {
  @ViewChild(SortableComponent, { static: false })
  sortableComponent: SortableComponent;

  direction: IAreaDirection = 'horizontal';

  d = {
    restrictMove: true,
    useTransition: true,
    gutterSize: null,
    gutterStep: null,
    width: null,
    height: null,
    areas: [
      {
        id: getRandomNum(),
        color: getRandomColor(),
        size: 25,
        present: true,
        visible: true,
      },
      {
        id: getRandomNum(),
        color: getRandomColor(),
        size: 50,
        present: true,
        visible: true,
      },
      {
        id: getRandomNum(),
        color: getRandomColor(),
        size: 25,
        present: true,
        visible: true,
      },
    ],
  };

  example$: Observable<Data>;

  constructor(private route: ActivatedRoute) {
    super();
    this.example$ = this.route.data;
  }

  trackByFct(index, area) {
    return area.id;
  }

  addArea() {
    this.d.areas.push({
      id: getRandomNum(),
      color: getRandomColor(),
      size: 25,
      present: true,
      visible: true,
    });

    this.sortableComponent.writeValue(this.d.areas);
  }

  removeArea(area: any) {
    this.d.areas.splice(this.d.areas.indexOf(area), 1);

    this.sortableComponent.writeValue(this.d.areas);
  }
}

function getRandomNum(): number {
  return Math.round(Math.random() * 1000);
}

function getRandomColor(): string {
  const colors = [
    'blue',
    'indigo',
    'purple',
    'pink',
    'red',
    'orange',
    'yellow',
    'green',
    'teal',
    'cyan',
    'white',
    'gray',
    'gray-dark',
    'primary',
    'secondary',
    'success',
    'info',
    'warning',
    'danger',
    'light',
    'dark',
  ];
  const color = getRandomItem(colors);
  return `var(--${color})`;
}

function getRandomItem(items: string[]): string {
  return items[Math.floor(Math.random() * items.length)];
}
