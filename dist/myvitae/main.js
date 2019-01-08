(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n    <!-- Navigation -->\n    <nav class=\"navbar navbar-expand-lg navbar-light fixed-top\" id=\"mainNav\">\n      <div class=\"container\">\n        <a class=\"navbar-brand js-scroll-trigger\" href=\"#page-top\">Start Bootstrap</a>\n        <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n          <span class=\"navbar-toggler-icon\"></span>\n        </button>\n        <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\n          <ul class=\"navbar-nav ml-auto\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link js-scroll-trigger\" href=\"#about\">About</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link js-scroll-trigger\" href=\"#services\">Services</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link js-scroll-trigger\" href=\"#portfolio\">Portfolio</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link js-scroll-trigger\" href=\"#contact\">Contact</a>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </nav>\n\n    <header class=\"masthead text-center text-white d-flex\">\n      <div class=\"container my-auto\">\n        <div class=\"row\">\n          <div class=\"col-lg-10 mx-auto\">\n            <h1 class=\"text-uppercase\">\n              <strong>Your Favorite Source of Free Bootstrap Themes</strong>\n            </h1>\n            <hr>\n          </div>\n          <div class=\"col-lg-8 mx-auto\">\n            <p class=\"text-faded mb-5\">Start Bootstrap can help you build better websites using the Bootstrap CSS framework! Just download your template and start going, no strings attached!</p>\n            <a class=\"btn btn-primary btn-xl js-scroll-trigger\" href=\"#about\">Find Out More</a>\n          </div>\n        </div>\n      </div>\n    </header>\n\n    <section class=\"bg-primary\" id=\"about\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-lg-8 mx-auto text-center\">\n            <h2 class=\"section-heading text-white\">We've got what you need!</h2>\n            <hr class=\"light my-4\">\n            <p class=\"text-faded mb-4\">Start Bootstrap has everything you need to get your new website up and running in no time! All of the templates and themes on Start Bootstrap are open source, free to download, and easy to use. No strings attached!</p>\n            <a class=\"btn btn-light btn-xl js-scroll-trigger\" href=\"#services\">Get Started!</a>\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <section id=\"services\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-lg-12 text-center\">\n            <h2 class=\"section-heading\">At Your Service</h2>\n            <hr class=\"my-4\">\n          </div>\n        </div>\n      </div>\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-lg-3 col-md-6 text-center\">\n            <div class=\"service-box mt-5 mx-auto\">\n              <i class=\"fas fa-4x fa-gem text-primary mb-3 sr-icon-1\"></i>\n              <h3 class=\"mb-3\">Sturdy Templates</h3>\n              <p class=\"text-muted mb-0\">Our templates are updated regularly so they don't break.</p>\n            </div>\n          </div>\n          <div class=\"col-lg-3 col-md-6 text-center\">\n            <div class=\"service-box mt-5 mx-auto\">\n              <i class=\"fas fa-4x fa-paper-plane text-primary mb-3 sr-icon-2\"></i>\n              <h3 class=\"mb-3\">Ready to Ship</h3>\n              <p class=\"text-muted mb-0\">You can use this theme as is, or you can make changes!</p>\n            </div>\n          </div>\n          <div class=\"col-lg-3 col-md-6 text-center\">\n            <div class=\"service-box mt-5 mx-auto\">\n              <i class=\"fas fa-4x fa-code text-primary mb-3 sr-icon-3\"></i>\n              <h3 class=\"mb-3\">Up to Date</h3>\n              <p class=\"text-muted mb-0\">We update dependencies to keep things fresh.</p>\n            </div>\n          </div>\n          <div class=\"col-lg-3 col-md-6 text-center\">\n            <div class=\"service-box mt-5 mx-auto\">\n              <i class=\"fas fa-4x fa-heart text-primary mb-3 sr-icon-4\"></i>\n              <h3 class=\"mb-3\">Made with Love</h3>\n              <p class=\"text-muted mb-0\">You have to make your websites with love these days!</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <section class=\"p-0\" id=\"portfolio\">\n      <div class=\"container-fluid p-0\">\n        <div class=\"row no-gutters popup-gallery\">\n          <div class=\"col-lg-4 col-sm-6\">\n            <a class=\"portfolio-box\" href=\"src/assets/img/portfolio/fullsize/1.jpg\">\n              <img class=\"img-fluid\" src=\"src/assets/img/portfolio/thumbnails/1.jpg\" alt=\"\">\n              <div class=\"portfolio-box-caption\">\n                <div class=\"portfolio-box-caption-content\">\n                  <div class=\"project-category text-faded\">\n                    Category\n                  </div>\n                  <div class=\"project-name\">\n                    Project Name\n                  </div>\n                </div>\n              </div>\n            </a>\n          </div>\n          <div class=\"col-lg-4 col-sm-6\">\n            <a class=\"portfolio-box\" href=\"src/assets/img/portfolio/fullsize/2.jpg\">\n              <img class=\"img-fluid\" src=\"src/assets/img/portfolio/thumbnails/2.jpg\" alt=\"\">\n              <div class=\"portfolio-box-caption\">\n                <div class=\"portfolio-box-caption-content\">\n                  <div class=\"project-category text-faded\">\n                    Category\n                  </div>\n                  <div class=\"project-name\">\n                    Project Name\n                  </div>\n                </div>\n              </div>\n            </a>\n          </div>\n          <div class=\"col-lg-4 col-sm-6\">\n            <a class=\"portfolio-box\" href=\"img/portfolio/fullsize/3.jpg\">\n              <img class=\"img-fluid\" src=\"img/portfolio/thumbnails/3.jpg\" alt=\"\">\n              <div class=\"portfolio-box-caption\">\n                <div class=\"portfolio-box-caption-content\">\n                  <div class=\"project-category text-faded\">\n                    Category\n                  </div>\n                  <div class=\"project-name\">\n                    Project Name\n                  </div>\n                </div>\n              </div>\n            </a>\n          </div>\n          <div class=\"col-lg-4 col-sm-6\">\n            <a class=\"portfolio-box\" href=\"img/portfolio/fullsize/4.jpg\">\n              <img class=\"img-fluid\" src=\"img/portfolio/thumbnails/4.jpg\" alt=\"\">\n              <div class=\"portfolio-box-caption\">\n                <div class=\"portfolio-box-caption-content\">\n                  <div class=\"project-category text-faded\">\n                    Category\n                  </div>\n                  <div class=\"project-name\">\n                    Project Name\n                  </div>\n                </div>\n              </div>\n            </a>\n          </div>\n          <div class=\"col-lg-4 col-sm-6\">\n            <a class=\"portfolio-box\" href=\"img/portfolio/fullsize/5.jpg\">\n              <img class=\"img-fluid\" src=\"img/portfolio/thumbnails/5.jpg\" alt=\"\">\n              <div class=\"portfolio-box-caption\">\n                <div class=\"portfolio-box-caption-content\">\n                  <div class=\"project-category text-faded\">\n                    Category\n                  </div>\n                  <div class=\"project-name\">\n                    Project Name\n                  </div>\n                </div>\n              </div>\n            </a>\n          </div>\n          <div class=\"col-lg-4 col-sm-6\">\n            <a class=\"portfolio-box\" href=\"img/portfolio/fullsize/6.jpg\">\n              <img class=\"img-fluid\" src=\"img/portfolio/thumbnails/6.jpg\" alt=\"\">\n              <div class=\"portfolio-box-caption\">\n                <div class=\"portfolio-box-caption-content\">\n                  <div class=\"project-category text-faded\">\n                    Category\n                  </div>\n                  <div class=\"project-name\">\n                    Project Name\n                  </div>\n                </div>\n              </div>\n            </a>\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <section class=\"bg-dark text-white\">\n      <div class=\"container text-center\">\n        <h2 class=\"mb-4\">Free Download at Start Bootstrap!</h2>\n        <a class=\"btn btn-light btn-xl sr-button\" href=\"http://startbootstrap.com/template-overviews/creative/\">Download Now!</a>\n      </div>\n    </section>\n\n    <section id=\"contact\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-lg-8 mx-auto text-center\">\n            <h2 class=\"section-heading\">Let's Get In Touch!</h2>\n            <hr class=\"my-4\">\n            <p class=\"mb-5\">Ready to start your next project with us? That's great! Give us a call or send us an email and we will get back to you as soon as possible!</p>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-lg-4 ml-auto text-center\">\n            <i class=\"fas fa-phone fa-3x mb-3 sr-contact-1\"></i>\n            <p>123-456-6789</p>\n          </div>\n          <div class=\"col-lg-4 mr-auto text-center\">\n            <i class=\"fas fa-envelope fa-3x mb-3 sr-contact-2\"></i>\n            <p>\n              <a href=\"mailto:your-email@your-domain.com\">feedback@startbootstrap.com</a>\n            </p>\n          </div>\n        </div>\n      </div>\n    </section>"

/***/ }),

/***/ "./src/app/app.component.sass":
/*!************************************!*\
  !*** ./src/app/app.component.sass ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2FzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'myvitae';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.sass */ "./src/app/app.component.sass")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/aperea003/Dante/projects/myvitae/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map