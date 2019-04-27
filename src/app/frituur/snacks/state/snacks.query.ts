import {QueryEntity} from '@datorama/akita';
import {SnacksStore, SnacksState} from './snacks.store';
import {Snack} from './snack.model';
import {Injectable} from '@angular/core';
import {switchMap} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SnacksQuery extends QueryEntity<SnacksState, Snack> {

  selectCategories$ = this.select(state => state.categories);
  selectedCategory$ = this.select(state => state.ui.selectedCategory);

  constructor(protected store: SnacksStore) {
    super(store);
  }

  static filterBy(category) {
    return function(snack) {
      if (category) {
        return snack.category === category.id;
      }
      return true;
    };
  }

  selectVisibleSnacks(): Observable<Snack[]> {
    return this.selectedCategory$.pipe(switchMap(category => {
      return this.selectAll({
        filterBy: SnacksQuery.filterBy(category)
      });
    }));
  }
}
