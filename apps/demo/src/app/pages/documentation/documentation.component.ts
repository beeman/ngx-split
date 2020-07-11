import { Component } from '@angular/core';

@Component({
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.scss'],
})
export class DocumentationComponent {
  readonly splitDoc = {
    inputs: [
      {
        name: 'direction',
        type: 'string',
        default: '"horizontal"',
        details:
          'Select split direction: <code>"horizontal"</code> or <code>"vertical"</code>.',
      },
      {
        name: 'unit',
        type: 'string',
        default: '"percent"',
        details: `Selected unit you want to use: <code>"percent"</code> or <code>"pixel"</code> to specify area sizes.`,
      },
      {
        name: 'gutterSize',
        type: 'number',
        default: '11',
        details: `Gutters's size (dragging elements) in pixels.`,
      },
      {
        name: 'gutterStep',
        type: 'number',
        default: '1',
        details: `Gutter step while moving in pixels.`,
      },
      {
        name: 'restrictMove',
        type: 'boolean',
        default: 'false',
        details:
          'Set to <code>true</code> if you want to limit gutter move to adjacent areas only.',
      },
      {
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        details:
          'Disable the dragging feature (remove cursor/image on gutters). <code>(gutterClick)</code>/<code>(gutterDblClick)</code> still emits.',
      },
      {
        name: 'dir',
        type: 'string',
        default: '"ltr"',
        details:
          'Indicates the directionality of the areas: <code>"ltr"</code> (left to right) or <code>"rtl"</code> (right to left).',
      },
      {
        name: 'useTransition',
        type: 'boolean',
        default: 'false',
        details:
          'Add transition when toggling visibility using <code>[visible]</code> or <code>[size]</code> changes.<br><u>Warning: Transitions are not working for <a href="https://github.com/philipwalton/flexbugs#flexbug-16">IE/Edge/Safari</a></u>',
      },
      {
        name: 'gutterDblClickDuration',
        type: 'number',
        default: '0',
        details: `Milliseconds to detect a double click on a gutter. Set it around 300-500ms if you want to use <code>(gutterDblClick)</code> event.`,
      },
    ],
    outputs: [
      {
        name: 'dragStart',
        value: '{gutterNum: number, sizes: Array<number>}',
        details: 'Emit when drag starts.',
      },
      {
        name: 'dragEnd',
        value: '{gutterNum: number, sizes: Array<number>}',
        details: 'Emit when drag ends.',
      },
      {
        name: 'gutterClick',
        value: '{gutterNum: number, sizes: Array<number>}',
        details:
          'Emit when user clicks on a gutter. See <code>[gutterDblClickDuration]</code> input.',
      },
      {
        name: 'gutterDblClick',
        value: '{gutterNum: number, sizes: Array<number>}',
        details:
          'Emit when user double clicks on a gutter. See <code>[gutterDblClickDuration]</code> input.',
      },
      {
        name: 'transitionEnd',
        value: 'Array<number>',
        details:
          'Emit when transition ends (could be triggered from <code>[visible]</code> or <code>[size]</code> changes).<br>Only if <code>[useTransition]="true"</code>.<br><u>Warning: Transitions are not working for <a href="https://github.com/philipwalton/flexbugs#flexbug-16">IE/Edge/Safari</a></u>',
      },
    ],
    class: [
      {
        name: 'dragProgress$',
        type: 'Observable<{gutterNum: number, sizes: Array<number>}>',
        details: `Emit when dragging. Replace old <code>(dragProgress)</code> template event for better flexibility about change detection mechanism.<br><u>Warning: Running outside zone by design, if you need to notify angular add</u> <code>this.splitEl.dragProgress$.subscribe(x => this.ngZone.run(() => this.x = x));</code>`,
      },
      {
        name: 'setVisibleAreaSizes()',
        type: '(Array<number>) => boolean',
        details:
          'Set all <b>visible</b> area sizes in one go, return a boolean to know if input values were correct. Useful when combined with <code>dragProgress$</code> to sync multiple splits.',
      },
      {
        name: 'getVisibleAreaSizes()',
        type: '() => Array<number>',
        details: 'Get all <b>visible</b> area sizes.',
      },
    ],
  };

  readonly splitAreaDoc = {
    inputs: [
      {
        name: 'size',
        type: 'number',
        default: '-',
        details: `Size of the area in selected unit (<code>percent</code>/<code>pixel</code>).<br><u>Percent mode:</u> All areas sizes should equal to 100, If not, all areas will have the same size.<br><u>Pixel mode:</u> An area with  wildcard size (<code>[size]="'*'"</code>) is mandatory (only one) and can't have <code>[visible]="false"</code> or <code>minSize</code>/<code>maxSize</code>/<code>lockSize</code> properties.`,
      },
      {
        name: 'minSize',
        type: 'number',
        default: 'null',
        details: `Minimum pixel or percent size, can't be smaller than provided <code>size</code>.<br><u>Not working when <code>[size]="'*'"</code></u>`,
      },
      {
        name: 'maxSize',
        type: 'number',
        default: 'null',
        details: `Maximum pixel or percent size, can't be bigger than provided <code>size</code>.<br><u>Not working when <code>[size]="'*'"</code></u>`,
      },
      {
        name: 'lockSize',
        type: 'boolean',
        default: 'false',
        details: `Lock area size, same as <code>minSize</code> = <code>maxSize</code> = <code>size</code>.<br><u>Not working when <code>[size]="'*'"</code></u>`,
      },
      {
        name: 'visible',
        type: 'boolean',
        default: 'true',
        details: `Hide area visually but still present in the DOM, use <code>ngIf</code> to completely remove it.<br><u>Not working when <code>[size]="'*'"</code></u>`,
      },
    ],
  };

  readonly cssClasses = {
    split: [
      { name: 'ngx-init', details: 'Added after component initialization.' },
      {
        name: 'ngx-horizontal / ngx-vertical',
        details: 'Depends on <code>&lt;ngx-split [direction]="x"&gt;</code>.',
      },
      {
        name: 'ngx-disabled',
        details: 'Added when <code>&lt;ngx-split [disabled]="true"&gt;</code>.',
      },
      {
        name: 'ngx-transition',
        details:
          'Added when <code>&lt;ngx-split [useTransition]="true"&gt;</code>.',
      },
      { name: 'ngx-dragging', details: 'Added while a gutter is dragged.' },
    ],
    area: [
      { name: 'ngx-split-area', details: 'Added on all areas.' },
      {
        name: 'ngx-hidden',
        details:
          'Added when <code>&lt;ngx-split-area [visible]="false"&gt;</code>.',
      },
    ],
    gutter: [
      { name: 'ngx-split-gutter', details: 'Added on all gutters.' },
      { name: 'ngx-dragged', details: 'Added on gutter while dragged.' },
    ],
  };
}
