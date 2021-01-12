import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElisiRoutingModule } from './elisi-routing.module';
import { ElisiComponent } from './elisi.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  declarations: [ElisiComponent, NavigationComponent],
  imports: [CommonModule, ElisiRoutingModule, CoreModule, SharedModule],
})
export class ElisiModule { }
