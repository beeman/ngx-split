#### Angular UI library to split views and allow dragging to resize areas using CSS flexbox layout.

##### Install npm module

```bash
npm install ngx-split
```

##### Add the angular module to your app

```typescript
import { NgxSplitModule } from 'ngx-split';

@NgModule({
  imports: [
    NgxSplitModule.forRoot(),
    ...
  ],
  ...
})
export class AppModule {}
```
