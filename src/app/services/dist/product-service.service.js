"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var ProductServiceService = /** @class */ (function () {
    function ProductServiceService(http) {
        this.http = http;
        this._url = '../assets/products.json';
    }
    ProductServiceService.prototype.getAllProducts = function () {
        return this.http.get(this._url).pipe(rxjs_1.catchError(function (err) {
            throw new Error(err.message || 'Internal Server Error');
        }));
    };
    ProductServiceService.prototype.getProductById = function (prdId) {
        var id = parseInt(prdId, 10);
        if (isNaN(id)) {
            return rxjs_1.of(null);
        }
        return this.http.get(this._url + "/" + id).pipe(rxjs_1.catchError(function (err) {
            throw new Error(err.message || 'Internal Server Error');
        }));
    };
    ProductServiceService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], ProductServiceService);
    return ProductServiceService;
}());
exports.ProductServiceService = ProductServiceService;

//# sourceMappingURL=product-service.service.js.map
