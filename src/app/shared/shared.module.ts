import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';

const COMPONTENTS: any[] = [ButtonComponent, CheckboxComponent];

@NgModule({
  declarations: [COMPONTENTS],
  imports: [CommonModule],
  exports: [...COMPONTENTS],
})
export class SharedModule {}
