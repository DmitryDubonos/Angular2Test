"use strict";
var ExitAboutGuard = (function () {
    function ExitAboutGuard() {
    }
    ExitAboutGuard.prototype.canDeactivate = function (component) {
        return component.canDeactivate ? component.canDeactivate() : true;
    };
    return ExitAboutGuard;
}());
exports.ExitAboutGuard = ExitAboutGuard;
//# sourceMappingURL=exit.about.guard.js.map