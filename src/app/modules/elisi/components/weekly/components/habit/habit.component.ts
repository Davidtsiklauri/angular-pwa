import { Component, OnInit } from '@angular/core';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { ModalService } from './../../../../../../core/services/modal.service';
import { HabitModalComponent } from './habit-modal/habit-modal.component';

@Component({
  selector: 'app-habit',
  templateUrl: './habit.component.html',
  styleUrls: ['./habit.component.scss']
})
export class HabitComponent implements OnInit {
  faPencilAlt = faPencilAlt
  constructor(
    private modalService: ModalService
  ) { }

  ngOnInit(): void {
  }


  openModal() {
    this.modalService.openModal(HabitModalComponent, { modalConfig: { width: 'lg' } });
  }

}
