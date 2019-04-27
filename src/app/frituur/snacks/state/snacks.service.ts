import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {EMPTY, forkJoin, Observable} from 'rxjs';

import {SnacksStore} from './snacks.store';
import {SnacksQuery} from './snacks.query';

import {Category} from './category.model';
import {Snack} from './snack.model';
import {tap} from 'rxjs/operators';

const server = 'http://localhost:4000';

@Injectable({
  providedIn: 'root'
})
export class SnacksService {

  constructor(private http: HttpClient,
              private snacksStore: SnacksStore,
              private snacksQuery: SnacksQuery) {
  }

  getData() {
    const snacksAndCategories$ = forkJoin([
        this.getSnacks,
        this.getCategories
      ]
    );

    return this.snacksQuery.getHasCache() ? EMPTY : snacksAndCategories$;
  }

  getSnacks(): Observable<Snack[]> {
    return this.call<Snack[]>('snacks').pipe(
      tap(response => this.snacksStore.set(response))
    );
  }

  getCategories(): Observable<Category[]> {
    return this.call<Category[]>('categories').pipe(
      tap(categories => this.snacksStore.update({categories}))
    );
  }

  call<T>(url: string): Observable<T> {
    return this.http.get<T>(`${server}/${url}`);
  }

  updateSelectedCategory(category: Category) {
    this.snacksStore.update({
      ui: {
        selectedCategory: category
      }
    });
  }
}
