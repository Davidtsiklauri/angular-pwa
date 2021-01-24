import {
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  OnInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {
  faChevronLeft,
  faChevronRight,
  faKeyboard
} from '@fortawesome/free-solid-svg-icons';
import { Calendar } from './../../../../core/utilities/calendar';
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
  currentMonth: number = 0;
  constructor(private resolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
    const calendar = new Calendar();
    this.currentMonth = calendar.getMonthNumber() + 1;
    console.log(calendar.weeksInYear(2020));

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
}
