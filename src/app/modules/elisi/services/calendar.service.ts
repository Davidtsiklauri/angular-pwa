import { IWeek } from './models/calendar.interface';
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
    this.weekStartNumber = this.getDateByWeek(this.weekNumber * 7).getDate();
    this.weekEndNumber = this.getDateByWeek((this.weekNumber + 1) * 7).getDate();
    this.amountOfWeeksInYear = this.calendar.getAmountOfWeeksInYear();

  }

  getDateByWeek(week: number): Date {
    const date = new Date();
    date.setDate(week)
    date.setFullYear(this.yearNumber)
    return date;
  }

  updateWeek(week: number = this.weekNumber): void {
    this.weekStartNumber = this.getDateByWeek(week * 7).getDate();
    this.weekEndNumber = this.getDateByWeek((week + 1) * 7).getDate();
  }

  getWeeks(year: number = this.calendar.getCurrentYear()): IWeek[] {
    const calendarWeeks: IWeek[] = [];
    const amountOfWeeks = this.calendar.getAmountOfWeeksInYear();
    for (let i = amountOfWeeks; i > 0; i--) {
      calendarWeeks.unshift({
        startDate: this.getDateByWeek(i * 7).getDate(),
        endDate: this.getDateByWeek((i + 1) * 7).getDate(),
        year: year,
        month: this.getDateByWeek(i * 7).getDate() < 7 ?
          this.calendar.getMonthName(this.getDateByWeek(i * 7).getMonth()) : null
      });
    }
    return calendarWeeks;
  };
}
