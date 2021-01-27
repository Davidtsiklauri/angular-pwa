import { Calendar } from '../../../core/utilities/calendar';
import { Injectable } from '@angular/core';

@Injectable()
export class CalendarService {
  readonly calendar: Calendar

  monthName: string;

  amountOfWeeksInYear: number;
  yearNumber: number;
  weekNumber: number;
  weekStartNumber: number;
  weekEndNumber: number;


  constructor() {
    this.calendar = new Calendar();
    this.yearNumber = this.calendar.getCurrentYear();
    this.weekNumber = this.calendar.getCurrentWeek();
    this.monthName = this.calendar.months[this.calendar.getCurrentMonth()];
    this.weekStartNumber = this.calculateWeekStartNumber(this.weekNumber * 7).getDate();
    this.weekEndNumber = this.calculateWeekStartNumber((this.weekNumber + 1) * 7).getDate();
    this.amountOfWeeksInYear = this.calendar.getAmountOfWeeksInYear();
  }

  calculateWeekStartNumber(week: number): Date {
    const date = new Date();
    date.setDate(week)
    return date;
  }

  updateWeek(): void {
    this.weekStartNumber = this.calculateWeekStartNumber(this.weekNumber * 7).getDate();
    this.weekEndNumber = this.calculateWeekStartNumber((this.weekNumber + 1) * 7).getDate();
  }

}