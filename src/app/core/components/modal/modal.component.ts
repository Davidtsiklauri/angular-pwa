import {
  AfterViewInit, Component,
  ComponentFactoryResolver,
  ViewChild, ViewContainerRef
} from '@angular/core';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements AfterViewInit {

  @ViewChild("modalContainer", { read: ViewContainerRef }) container: ViewContainerRef | undefined;
  component: any;

  constructor(
    private resolver: ComponentFactoryResolver
  ) { }

  ngAfterViewInit(): void {
    setTimeout((() => this.initModalComponent()), 0)
  }

  initModalComponent() {
    if (this.container) {
      this.container.clear();
      const factory = this.resolver.resolveComponentFactory(this.component);
      this.container.createComponent(factory);
    }
  }


}
