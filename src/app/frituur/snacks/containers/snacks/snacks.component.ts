import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, SubscriptionLike} from 'rxjs';
import * as fromState from '../../state';

@Component({
  selector: 'app-snacks',
  templateUrl: './snacks.component.html',
  styleUrls: ['./snacks.component.scss']
})
export class SnacksComponent implements OnInit, OnDestroy {
  snacks$: Observable<fromState.Snack[]>;
  categories$: Observable<fromState.Category[]>;
  subscriptions: SubscriptionLike[] = [];

  constructor(private snacksQuery: fromState.SnacksQuery,
              private snacksService: fromState.SnacksService) {
  }

  ngOnInit() {
    this.snacks$ = this.snacksQuery.selectVisibleSnacks$;
    this.categories$ = this.snacksQuery.selectCategories();
    this.startDataFlow();
  }

  private startDataFlow(): void {
    this.subscriptions.push(this.snacksService.getCategories().subscribe());
    this.subscriptions.push(this.snacksService.getSnacks().subscribe());
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  categoryChanged(category: fromState.Category): void {
    this.snacksService.updateSelectedCategory(category);
  }
}
