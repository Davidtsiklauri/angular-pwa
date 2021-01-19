import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { AccountComponent } from './components/account/account.component';
import { AchievementComponent } from './components/achievement/achievement.component';
import { BlogComponent } from './components/blog/blog.component';
import { HabitModalComponent } from './components/weekly/components/habit/habit-modal/habit-modal.component';
import { HabitComponent } from './components/weekly/components/habit/habit.component';
import { NotesComponent } from './components/weekly/components/notes/notes.component';
import { WeeklyComponent } from './components/weekly/weekly.component';
import { WorkspaceSettingsComponent } from './components/workspace-settings/workspace-settings.component';
import { ElisiRoutingModule } from './elisi-routing.module';
import { ElisiComponent } from './elisi.component';
import { NavigationComponent } from './navigation/navigation.component';



@NgModule({
  declarations: [
    ElisiComponent,
    NavigationComponent,
    WeeklyComponent,
    WorkspaceSettingsComponent,
    AchievementComponent,
    BlogComponent,
    AccountComponent,
    NotesComponent,
    HabitComponent,
    HabitModalComponent
  ],
  imports: [
    CommonModule,
    ElisiRoutingModule,
    CoreModule,
    SharedModule
  ],
})
export class ElisiModule { }
