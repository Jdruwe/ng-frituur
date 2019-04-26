import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import * as fromState from '../../state';

@Component({
  selector: 'app-snacks-filter',
  templateUrl: './snacks-filter.component.html',
  styleUrls: ['./snacks-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SnacksFilterComponent {

  @Input()
  categories: fromState.Category[];

  @Output()
  categoryChange: EventEmitter<fromState.Category> = new EventEmitter<fromState.Category>();

  categoryChanged(id: number): void {
    this.categoryChange.emit(this.getSelectedCategory(id));
  }

  private getSelectedCategory(id: number): fromState.Category {
    return this.categories.find(cat => cat.id === id);
  }
}
