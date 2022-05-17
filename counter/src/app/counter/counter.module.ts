import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CounterComponent } from './counter.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [CounterComponent],
  exports: [CounterComponent],
})
export class CounterModule {}
