import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './components/account/account.component';
import { AchievementComponent } from './components/achievement/achievement.component';
import { BlogComponent } from './components/blog/blog.component';
import { WeeklyComponent } from './components/weekly/weekly.component';
import { WorkspaceSettingsComponent } from './components/workspace-settings/workspace-settings.component';
import { ElisiComponent } from './elisi.component';

const routes: Routes = [{
  path: '', component: ElisiComponent, children: [
    { path: '', pathMatch: 'full', redirectTo: 'weekly' },
    { path: 'weekly', component: WeeklyComponent },
    { path: 'account', component: AccountComponent },
    { path: 'achievement', component: AchievementComponent },
    { path: 'settings', component: WorkspaceSettingsComponent },
    { path: 'blog', component: BlogComponent },
  ]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ElisiRoutingModule { }
