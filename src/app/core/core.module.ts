import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ButtonComponent } from './components/button/button.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { ModalComponent } from './components/modal/modal.component';


const COMPONTENTS: any[] = [
  ButtonComponent,
  CheckboxComponent,
  ModalComponent
];



@NgModule({
  declarations: [...COMPONTENTS],
  imports: [CommonModule, FontAwesomeModule],
  exports: [...COMPONTENTS, FontAwesomeModule]
})
export class CoreModule { }
