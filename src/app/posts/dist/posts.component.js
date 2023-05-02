"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var PostsComponent = /** @class */ (function () {
    function PostsComponent(postService, router, activatedRoute) {
        this.postService = postService;
        this.router = router;
        this.activatedRoute = activatedRoute;
    }
    PostsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.postService.getPosts().subscribe({
            next: function (data) { return _this.posts = data; },
            error: function (error) { return _this.errorMessage = error; }
        });
    };
    PostsComponent.prototype.showComments = function (postId) {
        this.router.navigate(['/posts', postId]);
    };
    PostsComponent = __decorate([
        core_1.Component({
            selector: 'app-posts',
            templateUrl: './posts.component.html',
            styleUrls: ['./posts.component.scss']
        })
    ], PostsComponent);
    return PostsComponent;
}());
exports.PostsComponent = PostsComponent;

//# sourceMappingURL=posts.component.js.map
