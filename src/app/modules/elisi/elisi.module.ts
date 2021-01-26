import { CalendarService } from './services/calendar.service';
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
import { ElisiRoutingModule } from './elisi-routing.module';
import { ElisiComponent } from './elisi.component';
import { AddWorkSpaceModalComponent } from './navigation/components/add-work-space-modal/add-work-space-modal.component';
import { WorkSpaceModalComponent } from './navigation/components/work-space-modal/work-space-modal.component';
import { NavigationComponent } from './navigation/navigation.component';



@NgModule({
  declarations: [
    ElisiComponent,
    NavigationComponent,
    WeeklyComponent,
    AchievementComponent,
    BlogComponent,
    AccountComponent,
    NotesComponent,
    HabitComponent,
    HabitModalComponent,
    WorkSpaceModalComponent,
    AddWorkSpaceModalComponent
  ],
  imports: [
    CommonModule,
    ElisiRoutingModule,
    CoreModule,
    SharedModule
  ],
  providers: [
    CalendarService
  ]
})
export class ElisiModule { }
