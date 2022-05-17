import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { CounterStore } from './counter.store';
import { CounterState } from './counter.state';

@Injectable({ providedIn: 'root' })
export class CounterQuery extends Query<CounterState> {
  count$ = this.select((state) => state.count);
  isLoading$ = this.select((state) => state.isLoading);

  constructor(protected override store: CounterStore) {
    super(store);
  }
}
