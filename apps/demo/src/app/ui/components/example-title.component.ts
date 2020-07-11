import { Component, Input } from '@angular/core';
import {
  DomSanitizer,
  SafeHtml,
  SafeResourceUrl,
} from '@angular/platform-browser';
import { ExampleEnum } from '../../example-enum';

import { examples } from '../../example-list';

@Component({
  selector: 'ui-example-title',
  styles: [
    `
      h4 {
        display: flex;
        align-items: center;
      }
      h4 > div {
        margin-right: 20px;
      }
    `,
  ],
  template: ` <h4>
      <div [innerHTML]="label"></div>
      <a class="btn btn-secondary" [href]="url" target="_blank">View code</a>
    </h4>
    <hr />`,
})
export class ExampleTitleComponent {
  label: SafeHtml;
  url: SafeResourceUrl;

  _type: ExampleEnum;
  @Input() set type(v: ExampleEnum) {
    const ex = examples.find((e) => e.type === v);
    if (!ex) return;

    this._type = v;
    this.label = this.sanitizer.bypassSecurityTrustHtml(ex.label);
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(ex.srcUrl);
  }

  constructor(private sanitizer: DomSanitizer) {}
}
