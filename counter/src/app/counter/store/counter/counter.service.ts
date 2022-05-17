import { Injectable } from '@angular/core';
import { CounterStore } from './counter.store';
import { of, Observable } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class CounterService {
  constructor(private counterStore: CounterStore) {}

  initialize(value: number) {
    return of(value).pipe(
      delay(2000),
      tap((initialValue) => this.override(value))
    );
  }

  increment(value: number) {
    this.counterStore.update((state) => ({ count: state.count + value }));
  }

  decrement(value: number) {
    this.counterStore.update((state) => ({ count: state.count - value }));
  }

  override(value: number) {
    this.counterStore.update((state) => ({
      count: value,
      isLoading: false,
    }));
  }
}
