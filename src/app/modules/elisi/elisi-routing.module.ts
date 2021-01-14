import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElisiComponent } from './elisi.component';

const routes: Routes = [
  { path: '', component: ElisiComponent },
  { path: 'weekly', component: ElisiComponent },
  { path: '', component: ElisiComponent },
  { path: '', component: ElisiComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ElisiRoutingModule { }
