import { formatDate } from '../format-date';

export class ChangeDetectionComponent {
  testChangeDetectorRun() {
    console.log(
      `${formatDate(new Date())} > AComponent.ts - Change detection just ran!`
    );

    return '';
  }
}
