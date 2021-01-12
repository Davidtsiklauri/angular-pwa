import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/core/services/modal.service';
import { NavigationComponent } from './navigation/navigation.component';

@Component({
  selector: 'app-elisi',
  templateUrl: './elisi.component.html',
  styleUrls: ['./elisi.component.scss']
})
export class ElisiComponent implements OnInit, AfterViewInit {
  constructor(private modal: ModalService) { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {

    this.modal.openModal(NavigationComponent);
  }
}
