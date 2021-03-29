import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: 'elisi',
    loadChildren: () =>
      import('./modules/elisi/elisi.module').then(
        ({ ElisiModule }) => ElisiModule
      ),
  },
  { path: '', pathMatch: 'full', redirectTo: 'elisi' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
