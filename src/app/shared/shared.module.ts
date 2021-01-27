import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeekSelectorComponent } from './components/week-selector/week-selector.component';


const COMPONTENTS: any[] = [WeekSelectorComponent];

@NgModule({
  declarations: COMPONTENTS,
  imports: [CommonModule],
  exports: [...COMPONTENTS],
})
export class SharedModule { }
