import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UiMarkdownModule } from '@kikstart-ui/ui-markdown';
import { ChangelogComponent } from './changelog.component';
import { ChangelogService } from './changelog.service';

@NgModule({
  declarations: [ChangelogComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: ChangelogComponent }]),
    UiMarkdownModule,
  ],
  providers: [ChangelogService],
})
export class ChangelogModule {}
