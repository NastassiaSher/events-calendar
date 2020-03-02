export class Event {
  start;
  end;
  left;
  width;

  constructor(start, end) {
    this.start = start;
    this.end = end;
    this.left = -1;
    this.width = -1;
  }

  hasCommon(task) {
    return task.end > this.start && task.start < this.end;
  }
}
