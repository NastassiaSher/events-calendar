import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  @Input() event;
  constructor() { }

  ngOnInit(): void {
  }

  public getClassForHover(): string {
    if (this.event.width < 80) {
      return '';
    } else {
      return 'expand';
    }
  }

}
