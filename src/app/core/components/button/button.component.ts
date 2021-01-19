import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() isInactive: boolean = false;
  @HostBinding('style.pointer-events')
  type = this.isInactive ? 'none' : 'unset';
}
