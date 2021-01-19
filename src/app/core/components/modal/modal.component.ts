import {
  AfterViewInit, Component,
  ComponentFactoryResolver,
  Inject,
  OnInit,
  ViewChild, ViewContainerRef
} from '@angular/core';
import { ModalData } from 'src/app/app.module';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements AfterViewInit, OnInit {

  @ViewChild("modalContainer", { read: ViewContainerRef }) container: ViewContainerRef | undefined;
  component: any;
  width: 'lg' | 'sm' | 'md' = 'md';

  constructor(
    private resolver: ComponentFactoryResolver,
    @Inject('ModalData') private modalData: ModalData,

  ) { }
  ngOnInit(): void {
    const width: 'lg' | 'sm' = this.modalData.data?.modalConfig?.width;
    if (width) {
      this.width = width;
    }

  }

  ngAfterViewInit(): void {
    setTimeout((() => this.initModalComponent()), 0);
  }


  initModalComponent() {
    if (this.container) {
      this.container.clear();
      const factory = this.resolver.resolveComponentFactory(this.component);
      this.container.createComponent(factory);
    }
  }


}
