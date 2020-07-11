import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SplitComponent } from './component/split.component';
import { SplitAreaDirective } from './directive/splitArea.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [SplitComponent, SplitAreaDirective],
  exports: [SplitComponent, SplitAreaDirective],
})
export class NgxSplitModule {
  public static forRoot(): ModuleWithProviders<NgxSplitModule> {
    return {
      ngModule: NgxSplitModule,
      providers: [],
    };
  }

  public static forChild(): ModuleWithProviders<NgxSplitModule> {
    return {
      ngModule: NgxSplitModule,
      providers: [],
    };
  }
}
