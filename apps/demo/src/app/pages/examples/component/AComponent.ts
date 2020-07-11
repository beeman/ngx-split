import { ExampleEnum } from '../../../example-enum';
import { formatDate } from '../format-date';

export class AComponent {
  exampleEnum = ExampleEnum;

  testChangeDetectorRun() {
    console.log(
      `${formatDate(new Date())} > AComponent.ts - Change detection just run!`
    );

    return '';
  }
}
