import { Component, OnInit } from '@angular/core';
import { AddWorkSpaceModalComponent } from '../add-work-space-modal/add-work-space-modal.component';
import { ModalService } from './../../../../../core/services/modal.service';

@Component({
  selector: 'app-work-space-modal',
  templateUrl: './work-space-modal.component.html',
  styleUrls: ['./work-space-modal.component.scss']
})
export class WorkSpaceModalComponent implements OnInit {

  constructor(
    private modalService: ModalService
  ) { }

  ngOnInit(): void {
  }

  addWorkSpace() {
    this.modalService.closeModal();
    this.modalService.openModal(AddWorkSpaceModalComponent, { modalConfig: { width: 'lg' } })
  }

}
