import { Component, Input, OnInit } from '@angular/core';
import { NavigationComponent } from 'src/app/modules/elisi/navigation/navigation.component';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() isInactive: boolean = false;

  constructor(
    private modal: ModalService
  ) { }
  ngOnInit(): void { }

  openModal() {
    const modal = this.modal.openModal(NavigationComponent, { title: 'test-modal' });
    modal.subscribe(data => console.log(data));
  }
}
