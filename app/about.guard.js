"use strict";
var AboutGuard = (function () {
    function AboutGuard() {
    }
    AboutGuard.prototype.canActivate = function (route, state) {
        return confirm('Are you shure that you want to redirect');
    };
    return AboutGuard;
}());
exports.AboutGuard = AboutGuard;
//# sourceMappingURL=about.guard.js.map