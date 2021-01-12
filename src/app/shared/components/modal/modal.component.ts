import {
  AfterViewInit, Component, ComponentFactoryResolver,
  ViewChild, ViewContainerRef
} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements AfterViewInit {

  @ViewChild("modalContainer", { read: ViewContainerRef }) container: any;
  component: any;

  constructor(
    private resolver: ComponentFactoryResolver
  ) { }

  ngAfterViewInit(): void {
    this.initModalComponent();
  }

  initModalComponent() {
    this.container.clear();
    const factory = this.resolver.resolveComponentFactory(this.component);
    this.container.createComponent(factory);
  }

}
