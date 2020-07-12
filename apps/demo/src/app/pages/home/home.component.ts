import { Component } from '@angular/core';
declare var require: any;

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  markdown = require('!!raw-loader!./home.component.md').default as string;
  code1 = `npm install ngx-split`;

  code2 = `import { NgxSplitModule } from 'ngx-split';

@NgModule({
  imports: [
    NgxSplitModule.forRoot(),
    ...
  ],
  ...
})
export class AppModule {}`;

  code3 = `System.config({
  map: {
    'ngx-split': 'node_modules/ngx-split/bundles/ngx-split.umd.js',
    ...
  },
  ...
});`;
}
