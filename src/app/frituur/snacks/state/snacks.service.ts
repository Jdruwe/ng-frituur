import {ID} from '@datorama/akita';
import {SnacksStore} from './snacks.store';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/operators';
import {Snack} from './snack.model';
import {SnacksQuery} from './snacks.query';
import {Observable, of} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SnacksService {

  constructor(private http: HttpClient,
              private snacksStore: SnacksStore,
              private snacksQuery: SnacksQuery) {
  }

  getSnacks(): Observable<Snack[]> {
    const request$ = this.http.get<Snack[]>('http://localhost:4000/snacks').pipe(
      tap(response => console.log('Called snacks endpoint', response)),
      tap(response => this.snacksStore.set(response))
    );

    return this.snacksQuery.getHasCache() ? of() : request$;
  }

}
