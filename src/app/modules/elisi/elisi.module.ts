import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ElisiRoutingModule } from './elisi-routing.module';
import { ElisiComponent } from './elisi.component';
import { NavigationComponent } from './navigation/navigation.component';


@NgModule({
  declarations: [ElisiComponent, NavigationComponent],
  imports: [CommonModule, ElisiRoutingModule, CoreModule, SharedModule],
})
export class ElisiModule { }
