import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { SortableModule } from 'ngx-bootstrap/sortable';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { NgxSplitModule } from 'ngx-split';

@NgModule({
  imports: [
    BsDropdownModule.forRoot(),
    ButtonsModule.forRoot(),
    CollapseModule.forRoot(),
    SortableModule.forRoot(),
    TooltipModule.forRoot(),
    NgxSplitModule.forRoot(),
    FormsModule,
  ],
  exports: [
    BsDropdownModule,
    ButtonsModule,
    CollapseModule,
    SortableModule,
    TooltipModule,
    NgxSplitModule,
    FormsModule,
  ],
})
export class UiSharedModule {}
