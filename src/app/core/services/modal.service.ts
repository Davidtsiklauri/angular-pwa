import {
  ApplicationRef,
  ComponentFactoryResolver,
  EmbeddedViewRef,
  Injectable,
  Injector,
  ViewChild,
} from '@angular/core';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';

@Injectable({ 'providedIn': 'root' })

export class ModalService {

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector,
  ) { }

  openModal(cmp: any) {
    if (!cmp) {
      return;
    }
    const modalRef = this.componentFactoryResolver
      .resolveComponentFactory(ModalComponent)
      .create(this.injector);

    modalRef.instance.component = cmp;

    this.appRef.attachView(modalRef.hostView);

    const domElem = (modalRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;

    document.body.appendChild(domElem);
  }
}
