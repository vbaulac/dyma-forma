import { Directive, HostBinding, HostListener, Input, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appDrag]'
})
export class DragDirective {
  @HostBinding('draggable') public draggable = true;
  @HostBinding('class.over') public isIn = false;
  @Input('index') public index;
  @Output() public switch: EventEmitter<{ srcIndex: number, dstIndex: number}> = new EventEmitter();

  @HostListener('dragstart', ['$event']) public dragStart($event) {
    // console.log({$event});
    $event.dataTransfer.setData('srcIndex', this.index); // set the srcIndex in the $event.dataTransfer in the dragstart
  }

  @HostListener('dragenter') public dragEnter() {
    this.isIn = true;
  }

  @HostListener('dragleave') public dragLeave(){
    this.isIn = false;
  }

  @HostListener('dragover', ['$event']) public dragOver($event) {
    $event.preventDefault();
  }

  @HostListener('drop', ['$event']) public drop($event) {
    // console.log({ index :this.index,
    //               srcIndex: $event.dataTransfer.getData('srcIndex') }); // get the previously setted index when wedrop on the target item
    
    this.switch.emit({
      srcIndex: $event.dataTransfer.getData('srcIndex'),
      dstIndex: this.index
    });
    
    this.isIn = false;
  }

  constructor() { }

}
