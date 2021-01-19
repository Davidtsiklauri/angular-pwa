import { Component } from '@angular/core';
import {
  faBlog, faCalendar,
  faFolder, faRocket,
  faTrophy, faUser
} from '@fortawesome/free-solid-svg-icons';
import { ModalService } from './../../../core/services/modal.service';
import { WorkSpaceModalComponent } from './components/work-space-modal/work-space-modal.component';



@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  faCalendar = faCalendar;
  faFolder = faFolder;
  faTrophy = faTrophy;
  faBlog = faBlog;
  faUser = faUser;
  faRocket = faRocket;
  constructor(
    private modalService: ModalService
  ) { }


  openWorkSettingsModal() {
    this.modalService.openModal(WorkSpaceModalComponent, { modalConfig: { width: 'lg' } });
  }
}
