import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {tap} from 'rxjs/operators';
import {Observable, of} from 'rxjs';

import {SnacksStore} from './snacks.store';
import {SnacksQuery} from './snacks.query';

import {Category} from './category.model';
import {Snack} from './snack.model';

const server = 'http://localhost:4000';

@Injectable({
  providedIn: 'root'
})
export class SnacksService {

  constructor(private http: HttpClient,
              private snacksStore: SnacksStore,
              private snacksQuery: SnacksQuery) {
  }

  getSnacks(): Observable<Snack[]> {
    const request$ = this.call<Snack[]>('snacks').pipe(
      tap(response => this.snacksStore.set(response))
    );

    return this.snacksQuery.getHasCache() ? of() : request$;
  }

  getCategories(): Observable<Category[]> {
    const request$ = this.call<Category[]>('categories').pipe(
      tap(response => this.snacksStore.update({
        categories: response
      }))
    );

    return this.snacksQuery.getHasCache() ? of() : request$;
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
