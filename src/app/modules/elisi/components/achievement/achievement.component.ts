import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-achievement',
  templateUrl: './achievement.component.html',
  styleUrls: ['./achievement.component.scss']
})
export class AchievementComponent implements OnInit {
  @Input() item: any;
  constructor() { }

  ngOnInit(): void {
    console.log(this.item)
  }

}
