import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TimeBarComponent } from './time-bar/time-bar.component';
import { EventComponent } from './event/event.component';

@NgModule({
  declarations: [
    AppComponent,
    TimeBarComponent,
    EventComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
