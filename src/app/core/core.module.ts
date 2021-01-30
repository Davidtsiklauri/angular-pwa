import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
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
  ValidateDirective
];



@NgModule({
  declarations: [...COMPONTENTS],
  imports: [CommonModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [...COMPONTENTS,
    FontAwesomeModule,
    ReactiveFormsModule
  ]
})
export class CoreModule { }
