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
var core_1 = require("@angular/core");
var AboutComponent = (function () {
    function AboutComponent() {
        this.saved = false;
    }
    AboutComponent.prototype.save = function () {
        this.saved = true;
    };
    AboutComponent.prototype.canDeactivate = function () {
        if (!this.saved) {
            return confirm('Do you want to leave this page?');
        }
        else {
            return true;
        }
    };
    AboutComponent = __decorate([
        core_1.Component({
            selector: "about-app",
            template: "<h3>About</h3>\n             <button class=\"btn btn-default\" (click)=\"save()\">Save</button>\n             <a routerLink=\"\">On main page</a>"
        }), 
        __metadata('design:paramtypes', [])
    ], AboutComponent);
    return AboutComponent;
}());
exports.AboutComponent = AboutComponent;
//# sourceMappingURL=about.component.js.map