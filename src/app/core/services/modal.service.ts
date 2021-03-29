import {
  ApplicationRef,
  ComponentFactoryResolver,
  ComponentRef,
  EmbeddedViewRef,
  Inject,
  Injectable,
  Injector,
} from '@angular/core';
import { AsyncSubject, Subject, throwError } from 'rxjs';
import { ModalComponent } from '../components/modal/modal.component';

export interface IModalData<T> {
  modalConfig?: {
    width: 'lg' | 'sm ';
  };
  data?: T;
}

@Injectable({ providedIn: 'root' })
export class ModalService {
  modalRef: ComponentRef<ModalComponent> | null = null;
  data$: AsyncSubject<any> = new AsyncSubject();
  data: any;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
  ) {}

  openModal(cmp: any, modalData: IModalData<any> | null = null): Subject<any> {
    if (!cmp) {
      throwError('component is not provided`');
    }

    this.data = modalData;
    this.modalRef = this.componentFactoryResolver
      .resolveComponentFactory(ModalComponent)
      .create(this.injector);

    this.modalRef.instance.component = cmp;

    this.appRef.attachView(this.modalRef.hostView);

    const domElem = (this.modalRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;
    document.body.appendChild(domElem);
    return this.data$;
  }

  closeModal(data?: any) {
    if (this.modalRef) {
      this.appRef.detachView(this.modalRef.hostView);
      this.data$.next(data || null);
      this.data$.complete();
    }
  }

  getData() {
    return this.data;
  }
}
