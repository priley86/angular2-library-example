import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
    selector: 'pf-tooltip',
    template: `<ng-content></ng-content>`
})
export class TooltipComponent {

    constructor(private el: ElementRef) {
        //observe DOM changes and notify pf-tooltip CE
        var observer = new MutationObserver(() => {
            el.nativeElement.dispatchEvent(new CustomEvent('handleContentChanged',{}));
        });
        observer.observe(el.nativeElement, {
            childList: true,
            subtree: true,
            characterData: true
        });
    }
}
