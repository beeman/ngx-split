import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { UiSharedModule } from './ui-shared.module';

import { ExampleTitleComponent } from './components/example-title.component';
import { TopbarComponent } from './components/topbar.component';

const COMPONENTS = [ExampleTitleComponent, TopbarComponent];
const MODULES = [CommonModule, RouterModule, UiSharedModule];

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS, ...MODULES],
  imports: [...MODULES],
})
export class UiModule {}
