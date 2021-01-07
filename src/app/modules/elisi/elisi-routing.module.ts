import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ElisiComponent } from './elisi.component';

const routes: Routes = [{ path: '', component: ElisiComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ElisiRoutingModule {}
