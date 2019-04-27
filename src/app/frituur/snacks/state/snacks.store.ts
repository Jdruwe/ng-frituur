import {EntityState, EntityStore, StoreConfig} from '@datorama/akita';
import {Snack} from './snack.model';
import {Injectable} from '@angular/core';
import {Category} from './category.model';

export interface SnacksState extends EntityState<Snack> {
  ui: {
    selectedCategory: Category;
  };
  categories: Category[];
}

const initialState: Partial<SnacksState> = {
  ui: {
    selectedCategory: null
  }
};

@Injectable({
  providedIn: 'root'
})
@StoreConfig({
  name: 'snacks'
})
export class SnacksStore extends EntityStore<SnacksState, Snack> {
  constructor() {
    super(initialState);
  }
}
