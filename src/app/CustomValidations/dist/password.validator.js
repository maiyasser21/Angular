"use strict";
exports.__esModule = true;
function ConfirmPasswordValidator(control) {
    var _a, _b;
    var password = control.get('password');
    var confirmpassword = control.get('confirmpassword');
    if (((_a = password) === null || _a === void 0 ? void 0 : _a.pristine) || ((_b = confirmpassword) === null || _b === void 0 ? void 0 : _b.pristine)) {
        return null;
    }
    else {
        return password && confirmpassword && password.value != confirmpassword.value ? { 'misMatch': true }
            : null;
    }
}
exports.ConfirmPasswordValidator = ConfirmPasswordValidator;

//# sourceMappingURL=password.validator.js.map
