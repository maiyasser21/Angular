"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/common/http");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var firstcomp_component_1 = require("./firstcomp/firstcomp.component");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var header_component_1 = require("./header/header.component");
var footer_component_1 = require("./footer/footer.component");
var products_component_1 = require("./products/products.component");
var forms_1 = require("@angular/forms");
var users_component_1 = require("./users/users.component");
var posts_component_1 = require("./posts/posts.component");
var home_component_1 = require("./home/home.component");
var productswithdiscount_component_1 = require("./productswithdiscount/productswithdiscount.component");
var productnodiscount_component_1 = require("./productnodiscount/productnodiscount.component");
var comments_component_1 = require("./comments/comments.component");
var postcomments_component_1 = require("./postcomments/postcomments.component");
var pagenotfound_component_1 = require("./pagenotfound/pagenotfound.component");
var registeration_component_1 = require("./registeration/registeration.component");
var login_component_1 = require("./login/login.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                firstcomp_component_1.FirstcompComponent,
                header_component_1.HeaderComponent,
                footer_component_1.FooterComponent,
                products_component_1.ProductsComponent,
                users_component_1.UsersComponent,
                posts_component_1.PostsComponent,
                home_component_1.HomeComponent,
                productswithdiscount_component_1.ProductswithdiscountComponent,
                productnodiscount_component_1.ProductnodiscountComponent,
                comments_component_1.CommentsComponent,
                postcomments_component_1.PostcommentsComponent,
                pagenotfound_component_1.PagenotfoundComponent,
                registeration_component_1.RegisterationComponent,
                login_component_1.LoginComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                ng_bootstrap_1.NgbModule,
                forms_1.FormsModule,
                http_1.HttpClientModule,
                forms_1.ReactiveFormsModule,
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;

//# sourceMappingURL=app.module.js.map
