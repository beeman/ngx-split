import { Routes } from '@angular/router';

import { ClassAccessComponent } from './component/class-access.component';
import { CustomGutterStyleComponent } from './component/custom-gutter-style.component';
import { DirRtlComponent } from './component/dir-rtl.component';
import { GeekDemoComponent } from './component/geek-demo.component';
import { GutterClickComponent } from './component/gutter-click.component';
import { IframeComponent } from './component/iframe.component';
import { MinMaxComponent } from './component/min-max.component';
import { NestedComponent } from './component/nested.component';
import { SimpleComponent } from './component/simple.component';
import { SyncComponent } from './component/sync.component';
import { TogglingDomAndVisibleComponent } from './component/toggling-dom-and-visible.component';
import { TransitionsComponent } from './component/transitions.component';
import { WorkspaceLocalstorageComponent } from './component/workspace-localstorage.component';

const srcUrlBase = 'https://github.com/beeman/ngx-split/blob/main/';
const srcUrlBaseApp = `${srcUrlBase}apps/demo/src/app/pages/examples/component/`;

export const routes: Routes = [
  {
    data: {
      label: 'Simple split',
      srcUrl: `${srcUrlBaseApp}simple.component.ts`,
    },
    path: 'examples/simple-split',
    component: SimpleComponent,
  },
  {
    data: {
      label: 'Split with minSize & maxSize',
      srcUrl: `${srcUrlBaseApp}min-max.component.ts`,
    },
    path: 'examples/min-max-split',
    component: MinMaxComponent,
  },
  {
    data: {
      label: 'Nested splits',
      srcUrl: `${srcUrlBaseApp}nested.component.ts`,
    },
    path: 'examples/nested-split',
    component: NestedComponent,
  },
  {
    data: {
      label: 'Split containing iframes',
      srcUrl: `${srcUrlBaseApp}iframe.component.ts`,
    },
    path: 'examples/iframes',
    component: IframeComponent,
  },
  {
    data: {
      label: 'Split with transitions',
      srcUrl: `${srcUrlBaseApp}transitions.component.ts`,
    },
    path: 'examples/split-transitons',
    component: TransitionsComponent,
  },
  {
    data: {
      label: 'Split synchronized',
      srcUrl: `${srcUrlBaseApp}sync.component.ts`,
    },
    path: 'examples/sync-split',
    component: SyncComponent,
  },
  {
    data: {
      label: 'Split with custom gutter style',
      srcUrl: `${srcUrlBaseApp}custom-gutter-style.component.ts`,
    },
    path: 'examples/custom-gutter-style',
    component: CustomGutterStyleComponent,
  },
  {
    data: {
      label:
        'Toggling areas using <code>[visible]</code> and <code>*ngIf</code>',
      srcUrl: `${srcUrlBaseApp}toggling-dom-and-visible.component.ts`,
    },
    path: 'examples/toggling-dom-and-visibility',
    component: TogglingDomAndVisibleComponent,
  },
  {
    data: {
      label: 'Roll/unroll area on <code>(gutterClick)</code> event',
      srcUrl: `${srcUrlBaseApp}gutter-click.component.ts`,
    },
    path: 'examples/gutter-click-roll-unroll',
    component: GutterClickComponent,
  },
  {
    data: {
      label: 'Access and interact <code>SplitComponent</code> from TS class',
      srcUrl: `${srcUrlBaseApp}class-access.component.ts`,
    },
    path: 'examples/access-from-class',
    component: ClassAccessComponent,
  },
  {
    data: {
      label: 'Geek demo (100% dynamic)',
      srcUrl: `${srcUrlBaseApp}geek-demo.component.ts`,
    },
    path: 'examples/geek-demo',
    component: GeekDemoComponent,
  },
  {
    data: {
      label: 'Split inside right to left (RTL) page',
      srcUrl: `${srcUrlBaseApp}dir-rtl.component.ts`,
    },
    path: 'examples/dir-rtl',
    component: DirRtlComponent,
  },
  {
    data: {
      label: 'Fullscreen workspace saved in localStorage',
      srcUrl: `${srcUrlBaseApp}workspace-localstorage.component.ts`,
    },
    path: 'examples/workspace-localstorage',
    component: WorkspaceLocalstorageComponent,
  },
];
