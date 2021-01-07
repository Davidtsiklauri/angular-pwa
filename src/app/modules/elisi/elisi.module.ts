import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElisiRoutingModule } from './elisi-routing.module';
import { ElisiComponent } from './elisi.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ElisiComponent, NavigationComponent],
  imports: [CommonModule, ElisiRoutingModule, SharedModule],
})
export class ElisiModule {}
