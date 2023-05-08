"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var home_component_1 = require("./home/home.component");
var products_component_1 = require("./products/products.component");
var users_component_1 = require("./users/users.component");
var posts_component_1 = require("./posts/posts.component");
var comments_component_1 = require("./comments/comments.component");
var productswithdiscount_component_1 = require("./productswithdiscount/productswithdiscount.component");
var productnodiscount_component_1 = require("./productnodiscount/productnodiscount.component");
var postcomments_component_1 = require("./postcomments/postcomments.component");
var pagenotfound_component_1 = require("./pagenotfound/pagenotfound.component");
var registeration_component_1 = require("./registeration/registeration.component");
var login_component_1 = require("./login/login.component");
var routes = [
    { path: '', component: home_component_1.HomeComponent },
    {
        path: 'products',
        component: products_component_1.ProductsComponent,
        children: [
            {
                path: 'products-with-discount',
                component: productswithdiscount_component_1.ProductswithdiscountComponent
            },
            {
                path: 'products-without-discount',
                component: productnodiscount_component_1.ProductnodiscountComponent
            },
        ]
    },
    { path: 'users', component: users_component_1.UsersComponent },
    { path: 'posts', component: posts_component_1.PostsComponent },
    {
        path: 'posts/:id',
        component: postcomments_component_1.PostcommentsComponent,
        children: [{ path: 'comments', component: comments_component_1.CommentsComponent }]
    },
    { path: 'register', component: registeration_component_1.RegisterationComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: '**', component: pagenotfound_component_1.PagenotfoundComponent },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;

//# sourceMappingURL=app-routing.module.js.map
