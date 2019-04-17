import {Component, OnDestroy, OnInit} from '@angular/core';
import {Snack, SnacksQuery, SnacksService} from '../../state';
import {Observable, SubscriptionLike} from 'rxjs';

@Component({
  selector: 'app-snacks',
  templateUrl: './snacks.component.html',
  styleUrls: ['./snacks.component.sass']
})
export class SnacksComponent implements OnInit, OnDestroy {
  snacks$: Observable<Snack[]>;
  subscriptions: SubscriptionLike[] = [];

  constructor(private snacksQuery: SnacksQuery,
              private snacksService: SnacksService) {
  }

  ngOnInit() {
    this.snacks$ = this.snacksQuery.selectSnacks();
    this.subscriptions.push(this.snacksService.getSnacks().subscribe());
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
