"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var userName_validator_1 = require("../CustomValidations/userName.validator");
var password_validator_1 = require("../CustomValidations/password.validator");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb) {
        this.fb = fb;
        this.registerationform = this.fb.group({
            username: ['', [forms_1.Validators.required, forms_1.Validators.minLength(5), userName_validator_1.ForbbidenNameValidator]],
            password: ['', [forms_1.Validators.required, forms_1.Validators.minLength(8),]],
            confirmpassword: ['', [forms_1.Validators.required]],
            email: ['', [forms_1.Validators.required, forms_1.Validators.pattern(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)]],
            address: this.fb.group({
                country: [''],
                city: [''],
                postalcode: ['']
            })
        }, { validators: [password_validator_1.ConfirmPasswordValidator] });
    }
    Object.defineProperty(LoginComponent.prototype, "userName", {
        get: function () {
            return this.registerationform.get('username');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginComponent.prototype, "email", {
        get: function () {
            return this.registerationform.get('email');
        },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.scss']
        })
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;

//# sourceMappingURL=login.component.js.map
