"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require('@angular/core');
let TooltipComponent = class TooltipComponent {
    constructor(el) {
        this.el = el;
        var observer = new MutationObserver(() => {
            el.nativeElement.dispatchEvent(new CustomEvent('handleContentChanged', {}));
        });
        observer.observe(el.nativeElement, {
            childList: true,
            subtree: true,
            characterData: true
        });
    }
};
TooltipComponent = __decorate([
    core_1.Component({
        selector: 'pf-tooltip',
        template: `<ng-content></ng-content>`
    }), 
    __metadata('design:paramtypes', [core_1.ElementRef])
], TooltipComponent);
exports.TooltipComponent = TooltipComponent;
//# sourceMappingURL=Tooltip.js.map