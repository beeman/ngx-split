import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { examples } from '../../example-list';
import { UiModule } from '../../ui/ui.module';

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

@NgModule({
  declarations: [
    ClassAccessComponent,
    CustomGutterStyleComponent,
    DirRtlComponent,
    GeekDemoComponent,
    GutterClickComponent,
    IframeComponent,
    MinMaxComponent,
    NestedComponent,
    SimpleComponent,
    SyncComponent,
    TogglingDomAndVisibleComponent,
    TransitionsComponent,
    WorkspaceLocalstorageComponent,
  ],
  imports: [RouterModule.forChild([...examples]), UiModule],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    },
  ],
})
export class ExamplesModule {}
