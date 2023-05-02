"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var CommentsComponent = /** @class */ (function () {
    function CommentsComponent(activatedRoute, router, postComment) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.postComment = postComment;
    }
    CommentsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.postComment.getComments(this.postId).subscribe({
            next: function (data) { return _this.comments = data; },
            error: function (error) { return _this.errorMessage = error; }
        });
    };
    __decorate([
        core_1.Input()
    ], CommentsComponent.prototype, "postId");
    CommentsComponent = __decorate([
        core_1.Component({
            selector: 'app-comments',
            templateUrl: './comments.component.html',
            styleUrls: ['./comments.component.scss']
        })
    ], CommentsComponent);
    return CommentsComponent;
}());
exports.CommentsComponent = CommentsComponent;

//# sourceMappingURL=comments.component.js.map
