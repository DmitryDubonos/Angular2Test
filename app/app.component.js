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
var router_1 = require("@angular/router");
var Item = (function () {
    function Item() {
    }
    return Item;
}());
var AppComponent = (function () {
    function AppComponent(router) {
        this.router = router;
        this.item = new Item();
    }
    AppComponent.prototype.goToItem = function (myItem) {
        this.router.navigate(['/item', myItem.id], { queryParams: { 'product': myItem.product, 'price': myItem.price } });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            styles: [".active {color:red}"],
            template: "<div>\n              <nav>\n                <a routerLink=\"\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">Main page</a>\n                 |\n                <a routerLink=\"/item/5/details\" routerLinkActive=\"active\">Product info</a>\n                 |\n                <a routerLink=\"/item/5/stat\" routerLinkActive=\"active\">Product stat</a>\n                 |\n                <a routerLink=\"/about\" routerLinkActive=\"active\">About</a>\n              </nav>\n              <router-outlet></router-outlet>\n             </div>"
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map