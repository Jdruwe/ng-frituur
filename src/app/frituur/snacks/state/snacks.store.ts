import {EntityState, EntityStore, StoreConfig} from '@datorama/akita';
import {Snack} from './snack.model';
import {Injectable} from '@angular/core';

export interface SnacksState extends EntityState<Snack> {
}

@Injectable({
  providedIn: 'root'
})
@StoreConfig({
  name: 'snacks',
  cache: {
    ttl: 3600000
  }
})
export class SnacksStore extends EntityStore<SnacksState, Snack> {

  constructor() {
    super();
  }

}
