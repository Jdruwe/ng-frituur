import {QueryEntity} from '@datorama/akita';
import {SnacksStore, SnacksState} from './snacks.store';
import {Snack} from './snack.model';
import {Injectable} from '@angular/core';
import {combineLatest} from 'rxjs/internal/observable/combineLatest';
import {Category} from './category.model';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SnacksQuery extends QueryEntity<SnacksState, Snack> {

  constructor(protected store: SnacksStore) {
    super(store);
  }

  private selectedCategory$ = this.select(state => state.ui.selectedCategory);

  selectVisibleSnacks$ = this.getData().pipe(
    map(([category, snacks]) => {
      return this.getVisibleSnacks(category, snacks);
    })
  );

  private static snackFilterSet(category: Category): boolean {
    return category != null;
  }

  private getData(): Observable<[Category, Snack[]]> {
    return combineLatest(
      this.selectedCategory$,
      this.selectAll(),
    );
  }

  private getVisibleSnacks(category: Category, snacks: Snack[]): Snack[] {
    if (SnacksQuery.snackFilterSet(category)) {
      return snacks.filter(s => s.category === category.id);
    } else {
      return snacks;
    }
  }

  selectCategories(): Observable<Category[]> {
    return this.select(state => state.categories);
  }
}
