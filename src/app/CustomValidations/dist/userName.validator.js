"use strict";
exports.__esModule = true;
function ForbbidenNameValidator(control) {
    var forbbiden = /^(admin|administrator)$/.test(control.value);
    return forbbiden ? { 'forbiddenName': { 'value': control.value } } : null;
}
exports.ForbbidenNameValidator = ForbbidenNameValidator;

//# sourceMappingURL=userName.validator.js.map
