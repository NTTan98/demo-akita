import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterModule } from './counter/counter.module';

@NgModule({
  imports: [BrowserModule, CounterModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
