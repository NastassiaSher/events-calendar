import { Component, OnInit } from '@angular/core';
import { TIMES } from '../services/consts';

@Component({
  selector: 'app-time-bar',
  templateUrl: './time-bar.component.html',
  styleUrls: ['./time-bar.component.scss']
})
export class TimeBarComponent implements OnInit {

  public times = TIMES;

  constructor() {}

  ngOnInit(): void {
  }

  public getDailySuffix(i: number): string {
    return i < 6 ? 'AM' : 'PM';
  }

}
