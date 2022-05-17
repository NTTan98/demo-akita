import { Component, Inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CounterQuery, CounterService } from './store/counter';

@Component({
  selector: 'counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent implements OnInit {
  count$: Observable<number>;
  isLoading$: Observable<boolean>;
  public items: Array<string> = [];
  public newTask!: string;
  public addToList() {
    if (this.newTask == '') {
    } else {
      this.items.push(this.newTask);
      this.newTask = '';
    }
  }

  constructor(
    private counter: CounterService,
    private counterQuery: CounterQuery
  ) {
    this.count$ = this.counterQuery.count$;
    this.isLoading$ = this.counterQuery.isLoading$;
  }

  ngOnInit() {
    const subscription = this.counter
      .initialize(10)
      .subscribe(() => subscription.unsubscribe());
  }

  increment() {
    this.counter.increment(1);
  }

  decrement() {
    this.counter.decrement(1);
  }
}
