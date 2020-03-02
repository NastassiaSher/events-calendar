import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Event } from '../models/Event';
import { EventToRender } from '../models/EventToRender';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  public eventsToRender: BehaviorSubject<Array<EventToRender>> = new BehaviorSubject([]);

  constructor() {}

  public layOutDay(events): void {
    events = this.buildGroups(events);
    const floorWidth = 600 / events.length; // 600 - width of container
    const heightUnit = 1;
    const currArray = [];
    // create events array to render
    events.forEach((group) => {
      group.forEach((event) => {
        const currEvent = new  EventToRender(
          'Sample Item',
          'Sample Location',
          event.left * floorWidth + 10, // 10px padding left of parent div
          event.start * heightUnit,
          event.width * floorWidth,
          (event.end - event.start) * heightUnit
        );
        currArray.push(currEvent);
      });
    });
    this.eventsToRender.next(currArray);
  }

  private buildGroups(events): Array<Array<Event>> {
    // sort events by start
    let copy = events.map(task => new Event(task.start, task.end));
    copy.sort((t1, t2) => (t1.start - t2.start));
    // create vertical groups with events that don't overlap
    const groups = [];
    while (copy.length > 0) {
      const group = [];
      const indexes = [0];
      let indexOfCompElement = 0;
      group.push(copy[0]);
      for (let i = 1; i < copy.length; i++) {
        if (copy[indexOfCompElement].end < copy[i].start) {
          indexes.push(i);
          group.push(copy[i]);
          indexOfCompElement = i;
        }
      }
      // remove events going to the group
      copy = copy.filter((item, index) => !indexes.includes(index));
      // push group to groups array
      groups.push(group);
    }
    // define the lefts and widths;
    for (let i = 0; i < groups.length; i++) {
      groups[i].forEach(item1 => {
        let j = i + 1;
        for (; j < groups.length; j++) {
          if (groups[j].find((item2) => item1.hasCommon(item2)) != null) { break; }
        }
        item1.left = i;
        item1.width = j - i;
      });
    }
    return groups;
  }
}
