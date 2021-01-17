import {
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  OnInit, ViewChild, ViewContainerRef
} from '@angular/core';
import * as components from './dynamic.components';


@Component({
  selector: 'app-weekly',
  templateUrl: './weekly.component.html',
  styleUrls: ['./weekly.component.scss']
})
export class WeeklyComponent implements OnInit {

  @ViewChild("compContainer", { read: ViewContainerRef }) container: ViewContainerRef | undefined;
  components = components;
  componenetMap = new Map<string, ComponentRef<any>>();

  constructor(
    private resolver: ComponentFactoryResolver
  ) { }

  ngOnInit(): void { }

  addComponent(comp: any): void {
    if (!this.container) return;
    const factory = this.resolver.resolveComponentFactory(comp);
    // Remove component, on same component toggle
    if (this.componenetMap.has(comp.name)) {
      const index = this.container
        .indexOf(this.componenetMap.get(comp.name)?.hostView as any);
      this.container.remove(index);
      this.componenetMap.delete(comp.name);
      return;
    }

    const compRef: ComponentRef<any> = this.container.createComponent(factory);
    const element: HTMLElement = compRef.location.nativeElement;
    element.classList.add('col')
    this.componenetMap.set(`${comp.name}`, compRef);
  }

}
