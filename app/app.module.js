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
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var app_component_1 = require('./app.component');
var about_component_1 = require('./about.component');
var about_guard_1 = require('./about.guard');
var home_component_1 = require('./home.component');
var not_found_component_1 = require('./not-found.component');
var item_component_1 = require('./item.component');
var item_stat_component_1 = require('./item.stat.component');
var item_details_component_1 = require('./item.details.component');
var exit_about_guard_1 = require('./exit.about.guard');
var itemRoutes = [
    { path: 'details', component: item_details_component_1.ItemDetailsComponent },
    { path: 'stat', component: item_stat_component_1.ItemStatComponent }
];
var appRoutes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'about', component: about_component_1.AboutComponent, canActivate: [about_guard_1.AboutGuard], canDeactivate: [exit_about_guard_1.ExitAboutGuard] },
    { path: 'item/:id', component: item_component_1.ItemComponent },
    { path: 'item/:id', component: item_component_1.ItemComponent, children: itemRoutes },
    { path: '**', component: not_found_component_1.NotFoundComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, router_1.RouterModule.forRoot(appRoutes), forms_1.FormsModule],
            declarations: [app_component_1.AppComponent, home_component_1.HomeComponent, about_component_1.AboutComponent, not_found_component_1.NotFoundComponent, item_component_1.ItemComponent, item_details_component_1.ItemDetailsComponent, item_stat_component_1.ItemStatComponent],
            providers: [about_guard_1.AboutGuard, exit_about_guard_1.ExitAboutGuard],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
;
//# sourceMappingURL=app.module.js.map