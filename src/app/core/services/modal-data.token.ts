import { ModalService } from './modal.service';
import { InjectionToken } from '@angular/core';

export const MODALDATA = new InjectionToken('ModalData', {
  factory: () => ModalService,
});
