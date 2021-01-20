import { Component, OnInit } from '@angular/core';
import { ModalService } from './../../../../../core/services/modal.service';

@Component({
  selector: 'app-add-work-space-modal',
  templateUrl: './add-work-space-modal.component.html',
  styleUrls: ['./add-work-space-modal.component.scss']
})
export class AddWorkSpaceModalComponent implements OnInit {

  constructor(
    public modalService: ModalService
  ) { }

  ngOnInit(): void {
  }

}
