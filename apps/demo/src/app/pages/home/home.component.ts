import { Component } from '@angular/core';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  code1 = `npm install ngx-split`;

  code2 = `import { AngularSplitModule } from 'ngx-split';

@NgModule({
  imports: [
    AngularSplitModule.forRoot(),
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
