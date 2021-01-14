import { AfterViewInit, Component } from '@angular/core';
import { ModalService } from 'src/app/core/services/modal.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements AfterViewInit {
  title: string = 'fafaafa';

  constructor(
    private modalService: ModalService,
    // @Inject('ModalData') private data: ModalData
  ) { }

  ngAfterViewInit(): void {
    // console.log(this.data);
  }

  closeModal() {
    this.modalService.closeModal({ name: 'gia' });
  }

}
