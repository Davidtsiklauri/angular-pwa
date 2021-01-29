import { weeks } from './../../../../../models/week.model';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  get weeksArray(): FormArray {
    return this.habitForm.get('weeks') as FormArray;
  }

  weekGroup(name: string, id: string, isSelected: boolean = false): FormGroup {
    return this.fb.group({
      name: [name],
      id: [id],
      isSelected: [false]
    })
  }
  ngOnInit(): void {
    this.weeks.forEach((week) => this.weeksArray.push(this.weekGroup(week.value, week.key)))
    console.log(this.weeksArray);

  }

}
