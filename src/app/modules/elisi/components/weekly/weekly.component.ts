import { WeekSelectorComponent } from './../../../../shared/components/week-selector/week-selector.component';
import { ModalService } from './../../../../core/services/modal.service';
import { CalendarService } from '../../services/calendar.service';
import {
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import {
  faChevronLeft,
  faChevronRight,
  faKeyboard,
} from '@fortawesome/free-solid-svg-icons';
import * as components from './dynamic.components';

@Component({
  selector: 'app-weekly',
  templateUrl: './weekly.component.html',
  styleUrls: ['./weekly.component.scss'],
})
export class WeeklyComponent implements OnInit {

  @ViewChild('compContainer', { read: ViewContainerRef }) container: ViewContainerRef | undefined;
  components = components;
  componentMap = new Map<string, ComponentRef<any>>();
  faKeyboard = faKeyboard;
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;
  currentProgress: number = 0;
  selectedWeekProgress: number = 0;

  constructor(
    private readonly resolver: ComponentFactoryResolver,
    public readonly calService: CalendarService,
    private readonly ModalService: ModalService
  ) { }

  ngOnInit(): void {
    const currentWeek = this.calService.weekNumber,
      amountOfWeeksInYear = this.calService.amountOfWeeksInYear

    //TODO დაპატარავე width 2 პროცენტით როცა width 100 - ია;
    this.currentProgress = this.calculateProgressBarProgress(amountOfWeeksInYear, currentWeek);
    this.selectedWeekProgress = this.calculateProgressBarProgress(amountOfWeeksInYear, currentWeek);
  }

  addComponent(comp: any): void {
    if (!this.container) return;
    const factory = this.resolver.resolveComponentFactory(comp);

    // Remove component, on same component toggle
    if (this.componentMap.has(comp.name)) {
      const index = this.container.indexOf(
        this.componentMap.get(comp.name)?.hostView as any
      );
      this.container.remove(index);
      this.componentMap.delete(comp.name);
      return;
    }

    const compRef: ComponentRef<any> = this.container.createComponent(factory);
    const element: HTMLElement = compRef.location.nativeElement;
    element.classList.add('col', 'p-0');
    this.componentMap.set(`${comp.name}`, compRef);
  }

  calculateProgressBarProgress(amountOfWeeks: number, selectedWeek: number) {
    const diff = 100 / amountOfWeeks;
    const progress = selectedWeek * diff;
    return progress;
  }

  selectPrevWeek() {
    if (this.calService.weekNumber === 1) {
      this.calService.yearNumber = this.calService.yearNumber - 1;
      this.calService.amountOfWeeksInYear = this.calService.calendar.getAmountOfWeeksInYear(this.calService.yearNumber);
      this.calService.weekNumber = this.calService.calendar.getAmountOfWeeksInYear(this.calService.yearNumber);
    }
    else {
      this.calService.weekNumber = this.calService.weekNumber - 1;
    }
    this.calService.updateWeek(this.calService.weekNumber - 1);
    this.updateProgress(this.calService.amountOfWeeksInYear, this.calService.weekNumber);
    const month = this.calService.calculateWeekStartNumber((this.calService.weekNumber - 1) * 7);
    this.calService.monthName = this.calService.calendar.months[month.getMonth()]

  }

  selectNextWeek() {
    if (this.calService.weekNumber === this.calService.amountOfWeeksInYear) {
      this.calService.yearNumber = this.calService.yearNumber + 1;
      this.calService.weekNumber = 1;
      this.calService.amountOfWeeksInYear = this.calService.calendar
        .getAmountOfWeeksInYear(this.calService.yearNumber);
    }
    else {
      this.calService.weekNumber = this.calService.weekNumber + 1;
    }
    this.updateProgress(this.calService.amountOfWeeksInYear, this.calService.weekNumber)
    this.calService.updateWeek();
    const month = this.calService.calculateWeekStartNumber(this.calService.weekNumber * 7);

    this.calService.monthName = this.calService.calendar.months[month.getMonth()]
  }

  resetProgressBar() {
    this.calService.yearNumber = this.calService.calendar.getCurrentYear();
    this.calService.weekNumber = this.calService.calendar.getCurrentWeek();
    this.calService.monthName = this.calService.calendar.getCurrentMonthName();
    this.calService.updateWeek();
    this.updateProgress(this.calService.amountOfWeeksInYear, this.calService.weekNumber)
  }

  updateProgress = (amountOfWeeksInYear: number, currentWeek: number) =>
    this.selectedWeekProgress = this.calculateProgressBarProgress(amountOfWeeksInYear, currentWeek)


  openModal() {
    this.ModalService
      .openModal(WeekSelectorComponent)
  }
} 
