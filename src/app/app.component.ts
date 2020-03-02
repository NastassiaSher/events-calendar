import {ChangeDetectorRef, Component} from '@angular/core';
import { ARRAY_OF_EVENTS } from './services/consts';
import {EventsService} from './services/events.service';
import {EventInput} from './models/EventInput';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private tmpArr = ARRAY_OF_EVENTS;
  public eventsToRender = [];
  private isFirstInit = true;

  constructor(public service: EventsService, private changeDetector: ChangeDetectorRef) {
    window['layOutDay'] = this.layOutDay.bind(this);
    this.layOutDay(this.tmpArr);
    this.service.eventsToRender.subscribe((events) => {
      this.eventsToRender = events;
      if (!this.isFirstInit) {
        this.changeDetector.detectChanges();
      }
      this.isFirstInit = false;
    });
  }

  layOutDay(events: Array<EventInput>): void {
    this.service.layOutDay(events);
  }
}
