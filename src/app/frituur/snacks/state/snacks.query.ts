import {QueryEntity} from '@datorama/akita';
import {SnacksStore, SnacksState} from './snacks.store';
import {Snack} from './snack.model';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SnacksQuery extends QueryEntity<SnacksState, Snack> {

  constructor(protected store: SnacksStore) {
    super(store);
  }

  selectSnacks(): Observable<Snack[]> {
    return this.selectAll();
  }

}
