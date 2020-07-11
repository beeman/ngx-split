import { IExampleData } from './interfaces/example-data';

import { ClassAccessComponent } from './pages/examples/component/class-access.component';
import { CustomGutterStyleComponent } from './pages/examples/component/custom-gutter-style.component';
import { DirRtlComponent } from './pages/examples/component/dir-rtl.component';
import { GeekDemoComponent } from './pages/examples/component/geek-demo.component';
import { GutterClickComponent } from './pages/examples/component/gutter-click.component';
import { IframeComponent } from './pages/examples/component/iframe.component';
import { MinMaxComponent } from './pages/examples/component/minMax.component';
import { NestedComponent } from './pages/examples/component/nested.component';
import { SimpleComponent } from './pages/examples/component/simple.component';
import { SyncComponent } from './pages/examples/component/sync.component';
import { TogglingDomAndVisibleComponent } from './pages/examples/component/toggling-dom-and-visible.component';
import { TransitionsComponent } from './pages/examples/component/transitions.component';
import { WorkspaceLocalstorageComponent } from './pages/examples/component/workspace-localstorage.component';
import { ExampleEnum } from './example-enum';

const srcUrlBase = 'https://github.com/beeman/ngx-split/blob/master/';
const srcUrlBaseApp = `${srcUrlBase}src_app/app/component/examples/`;
const srcUrlBaseAppLazy = `${srcUrlBase}src_lazy_app`;
const srcUrlBaseAppLazy2 = `${srcUrlBase}src_lazy_app2`;

export const examples: Array<IExampleData> = [
  {
    type: ExampleEnum.SIMPLE,
    path: 'examples/simple-split',
    component: SimpleComponent,
    label: 'Simple split',
    srcUrl: `${srcUrlBaseApp}simple.route.component.ts`,
  },
  {
    type: ExampleEnum.MINMAX,
    path: 'examples/min-max-split',
    component: MinMaxComponent,
    label: 'Split with minSize & maxSize',
    srcUrl: `${srcUrlBaseApp}minMax.route.component.ts`,
  },
  {
    type: ExampleEnum.NESTED,
    path: 'examples/nested-split',
    component: NestedComponent,
    label: 'Nested splits',
    srcUrl: `${srcUrlBaseApp}nested.route.component.ts`,
  },
  {
    type: ExampleEnum.IFRAME,
    path: 'examples/iframes',
    component: IframeComponent,
    label: 'Split containing iframes',
    srcUrl: `${srcUrlBaseApp}iframe.route.component.ts`,
  },
  {
    type: ExampleEnum.TRANSITION,
    path: 'examples/split-transitons',
    component: TransitionsComponent,
    label: 'Split with transitions',
    srcUrl: `${srcUrlBaseApp}transitions.route.component.ts`,
  },
  {
    type: ExampleEnum.SYNC,
    path: 'examples/sync-split',
    component: SyncComponent,
    label: 'Split synchronized',
    srcUrl: `${srcUrlBaseApp}sync.route.component.ts`,
  },
  {
    type: ExampleEnum.STYLE,
    path: 'examples/custom-gutter-style',
    component: CustomGutterStyleComponent,
    label: 'Split with custom gutter style',
    srcUrl: `${srcUrlBaseApp}customGutterStyle.route.component.ts`,
  },
  {
    type: ExampleEnum.TOGGLE,
    path: 'examples/toggling-dom-and-visibility',
    component: TogglingDomAndVisibleComponent,
    label: 'Toggling areas using <code>[visible]</code> and <code>*ngIf</code>',
    srcUrl: `${srcUrlBaseApp}togglingDomAndVisible.route.component.ts`,
  },
  {
    type: ExampleEnum.CLICK,
    path: 'examples/gutter-click-roll-unroll',
    component: GutterClickComponent,
    label: 'Roll/unroll area on <code>(gutterClick)</code> event',
    srcUrl: `${srcUrlBaseApp}gutterClick.route.component.ts`,
  },
  {
    type: ExampleEnum.CODE,
    path: 'examples/access-from-class',
    component: ClassAccessComponent,
    label: 'Access and interact <code>SplitComponent</code> from TS class',
    srcUrl: `${srcUrlBaseApp}classAccess.route.component.ts`,
  },
  {
    type: ExampleEnum.GEEK,
    path: 'examples/geek-demo',
    component: GeekDemoComponent,
    label: 'Geek demo (100% dynamic)',
    srcUrl: `${srcUrlBaseApp}geekDemo.route.component.ts`,
  },
  {
    type: ExampleEnum.DIR,
    path: 'examples/dir-rtl',
    component: DirRtlComponent,
    label: 'Split inside right to left (RTL) page',
    srcUrl: `${srcUrlBaseApp}dirRtl.route.component.ts`,
  },
  {
    type: ExampleEnum.WORKSPACE,
    path: 'examples/workspace-localstorage',
    component: WorkspaceLocalstorageComponent,
    label: 'Fullscreen workspace saved in localStorage',
    srcUrl: `${srcUrlBaseApp}workspaceLocalstorage.route.component.ts`,
  },
  // {
  //   type: ExampleEnum.LAZY,
  //   path: 'examples/lazy-loaded-module',
  //   component: LazyComponent,
  //   label: 'Lazy loaded module examples',
  //   srcUrl: srcUrlBaseAppLazy,
  //   srcUrl2: srcUrlBaseAppLazy2,
  // },
];
