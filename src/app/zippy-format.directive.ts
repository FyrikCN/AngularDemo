import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appZippyFormat]'
})
export class ZippyFormatDirective {

  @Input('appZippyFormat') appZippyFormat;
  constructor(private el: ElementRef) {
  }

  body = this.el.nativeElement.value;
}
