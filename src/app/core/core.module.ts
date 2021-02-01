import { ModalService } from './services/modal.service';
import { MODALDATA } from './services/modal-data.token';
import { CommonModule } from '@angular/common';
import { NgModule, InjectionToken } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ButtonComponent } from './components/button/button.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { ModalComponent } from './components/modal/modal.component';
import { ValidateDirective } from './directives/validate.directive';

const COMPONTENTS: any[] = [
  ButtonComponent,
  CheckboxComponent,
  ModalComponent,
  ValidateDirective,
];

export const DaTaToken = new InjectionToken('token');

@NgModule({
  declarations: [...COMPONTENTS],
  imports: [CommonModule, FontAwesomeModule, ReactiveFormsModule, FormsModule],
  exports: [...COMPONTENTS, FontAwesomeModule, ReactiveFormsModule],
  providers: [
    {
      provide: DaTaToken,
      useFactory: (ModalService: ModalService) => ModalService.getData(),
      deps: [ModalService],
      useExisting: ModalService,
    },
  ],
})
export class CoreModule {}
