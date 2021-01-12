import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { ButtonComponent } from './components/button/button.component';
import { ModalComponent } from './components/modal/modal.component';


const COMPONTENTS: any[] = [
  ButtonComponent, CheckboxComponent,
  ModalComponent
];


@NgModule({
  declarations: [COMPONTENTS],
  imports: [CommonModule],
  exports: [COMPONTENTS],
})
export class CoreModule { }
