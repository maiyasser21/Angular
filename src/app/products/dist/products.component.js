"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var DiscountOffers_1 = require("../Shared Classes and types/DiscountOffers");
var ProductsComponent = /** @class */ (function () {
    function ProductsComponent(productService) {
        this.productService = productService;
        this.discount = DiscountOffers_1.DiscountOffers.tenpercent;
        this.storeName = 'Meow Store';
        this.storeLogo = './assets/img.jpg';
        // this.productList=[
        //   {
        //     id:1,
        //     img:'./assets/img.jpg',
        //     name:'Phone',
        //     price:200,
        //     quantity:2,
        //   },
        //   {
        //     id:2,
        //     img:'./assets/img.jpg',
        //     name:'iPad',
        //     price:500,
        //     quantity:3,
        //   },
        //   {
        //     id:3,
        //     img:'./assets/img.jpg',
        //     name:'Sports Wear',
        //     price:20,
        //     quantity:20,
        //   },
        // ];
        this.categoryList = [
            {
                id: 1,
                name: "Electronics"
            },
            {
                id: 2,
                name: "Cloths"
            },
            {
                id: 3,
                name: "Food"
            }
        ];
        this.clientName = "nada";
        this.isPurchased = false;
    }
    ProductsComponent.prototype.buy = function () {
        this.isPurchased = true;
    };
    ProductsComponent.prototype.ngOnInit = function () {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.renderValues();
        console.log(this.productList);
    };
    ProductsComponent.prototype.renderValues = function () {
        var _this = this;
        this.productService.getAllProducts().subscribe({ next: function (data) { return _this.productList = data; },
            error: function (error) { return _this.errorMessage = error; } });
    };
    ProductsComponent = __decorate([
        core_1.Component({
            selector: 'app-products',
            templateUrl: './products.component.html',
            styleUrls: ['./products.component.scss']
        })
    ], ProductsComponent);
    return ProductsComponent;
}());
exports.ProductsComponent = ProductsComponent;

//# sourceMappingURL=products.component.js.map
