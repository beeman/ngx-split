import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ChangelogService } from './changelog.service';

@Component({
  template: `
    <div class="container py-5">
      <h2>Changelog</h2>
      <ui-markdown [data]="changelogMd$ | async"></ui-markdown>
    </div>
  `,
})
export class ChangelogComponent implements OnInit {
  changelogMd$: Observable<string>;

  constructor(private changelogService: ChangelogService) {}

  ngOnInit() {
    this.changelogMd$ = this.changelogService.getMd();
  }
}
