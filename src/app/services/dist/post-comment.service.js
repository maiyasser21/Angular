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
var PostCommentService = /** @class */ (function () {
    function PostCommentService(http) {
        this.http = http;
    }
    PostCommentService.prototype.getComments = function (postId) {
        this._url = "https://jsonplaceholder.typicode.com/posts/" + postId + "/comments";
        return this.http.get(this._url).pipe(rxjs_1.catchError(function (err) {
            return rxjs_1.throwError(function () { return err.message || "Server Error"; });
        }));
    };
    PostCommentService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], PostCommentService);
    return PostCommentService;
}());
exports.PostCommentService = PostCommentService;

//# sourceMappingURL=post-comment.service.js.map
