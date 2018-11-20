import { Directive, ElementRef, OnInit, Renderer2, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
    selector: '[appColor]'
})
export class ColorDirective implements OnInit {
    @HostBinding('style.backgroundColor') bgColor = 'transparent' ;
    @Input() textcolor;

    constructor(private el: ElementRef, private renderer: Renderer2) {}
    
    ngOnInit() {
        // the || delcare a default value if this.textcolor is undefined
        this.renderer.setStyle(this.el.nativeElement, 'color',this.textcolor || 'black');
    }

    @HostListener('click') myClick(event : Event) {
        // this.renderer.setStyle(this.el.nativeElement, 'background-color', 'black');
        this.bgColor = 'black';
    }

    @HostListener('mouseenter') myMyMouseEnter() {
        // this.renderer.setStyle(this.el.nativeElement, 'background-color', 'yellow');
        this.bgColor = 'gray';
    }

    @HostListener('mouseleave') customName() {
        // this.renderer.setStyle(this.el.nativeElement, 'background-color', 'purple');
        this.bgColor = "blue";
    }
}