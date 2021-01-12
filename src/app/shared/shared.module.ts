import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { ModalComponent } from './components/modal/modal.component';

const COMPONTENTS: any[] = [
  ButtonComponent, CheckboxComponent,
  ModalComponent
];

@NgModule({
  declarations: [COMPONTENTS],
  imports: [CommonModule],
  exports: [...COMPONTENTS],
})
export class SharedModule { }
