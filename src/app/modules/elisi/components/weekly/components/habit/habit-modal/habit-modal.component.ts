import { weeks } from './../../../../../models/week.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-habit-modal',
  templateUrl: './habit-modal.component.html',
  styleUrls: ['./habit-modal.component.scss']
})
export class HabitModalComponent implements OnInit {

  habitForm: FormGroup;
  weeks = weeks;

  constructor(
    private fb: FormBuilder
  ) {
    this.habitForm = fb.group({
      habitName: ['', Validators.compose([Validators.required, Validators.maxLength(10)])],
      trackerType: ['habit', Validators.required],
      weeks: fb.array([]),
      workSpace: [''],
      showInPlanner: [false]
    })
  }

  get habitCtrls() {
    return this.habitForm.controls
  }

  ngOnInit(): void {
  }

}
