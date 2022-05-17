import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { CounterState } from './counter.state';

export function createInitialState(): CounterState {
  return {
    count: 0,
    isLoading: true,
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'simple-counter' })
export class CounterStore extends Store<CounterState> {
  constructor() {
    super(createInitialState());
  }
}
