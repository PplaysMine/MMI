import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  dayNames: string[] = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  days: (number | null)[] = [];
  currentDay: number = 0;

  private done: boolean = false;

  constructor() { }

  ngOnInit(): void {
    let month = new Date().getMonth();
    let year = new Date().getFullYear();
    let totalDays = this.daysInMonth(year, month);
    let firstDay = this.getFirst(year, month);
    this.currentDay = new Date().getDay() - 1;
    let counter = 0;
    for(let i = 1; i < totalDays+1; i++) {
      if(firstDay != i && !this.done) {
        totalDays++;
        this.days.push(0);
      } else {
        this.done = true;
        this.days.push(counter+=1);
      }
    }
  }

  getFirst(year: number, month: number): number {
    return new Date(year, month).getDay();
  }

  daysInMonth(year: number, month: number): number {
    return new Date(year, month+1, 0).getDate();
  }

}
