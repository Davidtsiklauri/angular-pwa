import { Directive, ElementRef, HostBinding, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { NgControl } from '@angular/forms';





@Directive({
  selector: '[appValidate]'
})
export class ValidateDirective {

  @HostBinding('class.invalid') get invalid() { return this.control.touched && this.control.errors }

  constructor(
    private control: NgControl,
  ) {
  }


}
