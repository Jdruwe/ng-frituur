import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import * as fromState from '../../state';

@Component({
  selector: 'app-snacks',
  templateUrl: './snacks.component.html',
  styleUrls: ['./snacks.component.scss']
})
export class SnacksComponent implements OnInit {

  snacks$: Observable<fromState.Snack[]>;
  categories$: Observable<fromState.Category[]>;

  constructor(private snacksQuery: fromState.SnacksQuery,
              private snacksService: fromState.SnacksService) {
  }

  ngOnInit() {
    this.snacks$ = this.snacksQuery.selectVisibleSnacks();
    this.categories$ = this.snacksQuery.selectCategories$;
    this.startDataFlow();
  }

  private startDataFlow(): void {
    this.snacksService.getData().subscribe();
  }

  categoryChanged(category: fromState.Category): void {
    this.snacksService.updateSelectedCategory(category);
  }
}
