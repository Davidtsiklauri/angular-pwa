import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-week-selector',
  templateUrl: './week-selector.component.html',
  styleUrls: ['./week-selector.component.scss']
})
export class WeekSelectorComponent implements OnInit {
  weeks: any[] = [2, 3, 4, 5, 6, 78, 335, 34, 534, 5, 435, 435, 345, 34, 534, 5, 323, 232, 32, 32, 323];
  leftPosition: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  slide(idx: number, e: any) {
    const centerIdx = 3;
    const diff = idx - centerIdx;
    this.leftPosition = this.leftPosition + (diff * 62);
  }

}
