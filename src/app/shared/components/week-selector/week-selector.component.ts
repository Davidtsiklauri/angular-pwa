import { CalendarService } from './../../../modules/elisi/services/calendar.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-week-selector',
  templateUrl: './week-selector.component.html',
  styleUrls: ['./week-selector.component.scss'],
  providers: [CalendarService]
})
export class WeekSelectorComponent implements OnInit {
  weeks: any[] = [2, 3, 4, 5, 6, 78, 335, 34, 534, 5, 435, 435, 345, 34, 534, 5, 323, 232, 32, 32, 323];
  leftPosition: number = 0;
  constructor(
    private CalendarService: CalendarService
  ) { }

  ngOnInit(): void {
    console.log(this.CalendarService.getWeeks());
  }

  slide(idx: number, e: any) {
    const centerIdx = 3;
    const diff = idx - centerIdx;
    this.leftPosition = this.leftPosition + (diff * 62);
  }

}
