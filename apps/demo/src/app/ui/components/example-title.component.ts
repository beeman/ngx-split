import { Component, Input } from '@angular/core';
import {
  DomSanitizer,
  SafeHtml,
  SafeResourceUrl,
} from '@angular/platform-browser';

@Component({
  selector: 'ui-example-title',
  template: `
    <h4 class="d-flex align-items-center">
      <div *ngIf="label" [innerHTML]="label" class="mr-2"></div>
      <a *ngIf="url" class="btn btn-secondary" [href]="url" target="_blank">
        View code
      </a>
    </h4>
    <hr />
  `,
})
export class ExampleTitleComponent {
  label: SafeHtml;
  url: SafeResourceUrl;

  @Input() set example(ex) {
    this.label = ex.label
      ? this.sanitizer.bypassSecurityTrustHtml(ex.label)
      : null;
    this.url = ex.srcUrl
      ? this.sanitizer.bypassSecurityTrustResourceUrl(ex.srcUrl)
      : null;
  }

  constructor(private sanitizer: DomSanitizer) {}
}
