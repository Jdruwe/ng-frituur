import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import * as fromState from '../../state';

@Component({
  selector: 'app-snack',
  templateUrl: './snack.component.html',
  styleUrls: ['./snack.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SnackComponent {
  @Input() snack: fromState.Snack;

  constructor() {
  }
}
