import { Directive, HostBinding, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appActive]'
})
export class ActiveDirective implements OnChanges {

  @HostBinding('style.backgroundColor') bgColor: string;
  @HostBinding('style.color') color: string;
  @Input('appActive') isActive: boolean;

  constructor() { }

  ngOnChanges(): void {
    if (this.isActive) {
      this.bgColor = '#3498db';
      this.color = 'white';
    } else {
      this.bgColor = 'transparent';
      this.color = 'black';
    }
  }
}
