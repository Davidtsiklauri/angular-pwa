import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { AccountComponent } from './components/account/account.component';
import { AchievementComponent } from './components/achievement/achievement.component';
import { BlogComponent } from './components/blog/blog.component';
import { WeeklyComponent } from './components/weekly/weekly.component';
import { WorkspaceSettingsComponent } from './components/workspace-settings/workspace-settings.component';
import { ElisiRoutingModule } from './elisi-routing.module';
import { ElisiComponent } from './elisi.component';
import { NavigationComponent } from './navigation/navigation.component';


@NgModule({
  declarations: [
    ElisiComponent, NavigationComponent, WeeklyComponent,
    WorkspaceSettingsComponent, AchievementComponent,
    BlogComponent, AccountComponent
  ],
  imports: [CommonModule, ElisiRoutingModule,
    CoreModule, SharedModule
  ],
})
export class ElisiModule { }
