import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


const COMPONTENTS: any[] = [];

@NgModule({
  declarations: [COMPONTENTS],
  imports: [CommonModule],
  exports: [...COMPONTENTS],
})
export class SharedModule { }
