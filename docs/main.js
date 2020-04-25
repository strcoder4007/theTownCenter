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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mynavOptions {\n    cursor: pointer;\n    transition: color 0.2s ease;\n}\n.mynavOptions:hover {\n    color: crimson;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsMkJBQTJCO0FBQy9CO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXluYXZPcHRpb25zIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogY29sb3IgMC4ycyBlYXNlO1xufVxuLm15bmF2T3B0aW9uczpob3ZlciB7XG4gICAgY29sb3I6IGNyaW1zb247XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" [ngClass]=\"[theme + '-theme']\">\n  <div class=\"container pt-3\">\n    <div class=\"row w-100 pt-2 gutter-0 elementToFadeIn\" style=\"position: relative\">\n      <p class=\"staat m-0\" style=\"font-size: 1.5rem\" [ngClass]=\"[theme + '-theme']\" (click)=\"router.navigate('/')\">Shubham Singh</p>\n      <button class=\"smallFont staat float-right theme-icon\"\n              [ngStyle]=\"{ 'border' : '2px solid ' + (theme === 'light' ? '#000000' : 'whitesmoke')}\"\n              [ngClass]=\"[theme + '-theme']\" (click)=\"toggleTheme()\">\n        <img src=\"../assets/yoda.png\" style=\"margin-top: 2px\" width=\"27.5px\" *ngIf=\"theme === 'dark'\">\n        <img src=\"../assets/darthVader.svg\" style=\"margin-top: 1px\" width=\"21px\" *ngIf=\"theme === 'light'\">\n      </button>\n      <a class=\"smallFont staat float-right ml-3 theme-button\" href=\"assets/resume.pdf\" target=\"_blank\"\n         [ngStyle]=\"{ 'border' : '2px solid ' + (theme === 'light' ? '#000000' : 'whitesmoke')}\"\n         [ngClass]=\"[theme + '-theme']\">\n        <div style=\"height: 4px; width: 100%\"></div>\n        <span style=\"padding-left: 7.5px; padding-right: 10px;\">\n            &nbsp;&nbsp;<i class=\"fa fa-download p-0\" style=\"font-size: 15px;\"></i>&nbsp;&nbsp;\n            r&#233;sum&#233;\n          </span>\n      </a>\n    </div>\n  </div>\n\n  <div class=\"container pt-2 elementToFadeIn\">\n    <div class=\"pt-0 mr-4 pr-1 justify-content-around\" style=\"float: left\">\n      <a class=\"smallFont staat \" target=\"_blank\" href=\"https://github.com/strcoder4007\" [ngClass]=\"[theme + '-theme']\">Github</a>\n      <span class=\"mediumFont staat ml-3\" style=\"margin-top: -2px\" [ngClass]=\"[theme + '-theme']\">|</span>\n      <a class=\"smallFont staat ml-3\" target=\"_blank\" href=\"https://www.linkedin.com/in/shubham-singh-15b76951\" [ngClass]=\"[theme + '-theme']\">Linkedin</a>\n      <span class=\"mediumFont staat ml-3\" style=\"margin-top: -2px\" [ngClass]=\"[theme + '-theme']\">|</span>\n      <a class=\"smallFont staat ml-3\" target=\"_blank\" href=\"https://angel.co/shubham-singh-128\" [ngClass]=\"[theme + '-theme']\">Angel</a>\n      <span class=\"mediumFontstaat ml-3\" style=\"margin-top: -2px\" [ngClass]=\"[theme + '-theme']\">|</span>\n      <a class=\"smallFont staat ml-3\" href=\"mailto:mynameshubham@gmail.com\" [ngClass]=\"[theme + '-theme']\">Email</a>\n    </div>\n  </div>\n\n  <div class=\"container pt-4 py-md-5\">\n    <div class=\"row elementToFadeIn my-3 mt-sm-4\">\n      <a href=\"#experience\" class=\"col staat largeFont d-block d-sm-none\" [ngClass]=\"[theme + '-theme']\">exp.</a>\n      <a href=\"#experience\" class=\"col staat largeFont d-none d-sm-block\" [ngClass]=\"[theme + '-theme']\">\n        <span style=\"float: left;\">experience</span>\n      </a>\n\n      <a href=\"#projects\" class=\"col staat largeFont d-block d-sm-none\" [ngClass]=\"[theme + '-theme']\">proj.</a>\n      <a href=\"#projects\" class=\"col staat largeFont d-none d-sm-block\" [ngClass]=\"[theme + '-theme']\">\n        <span style=\"padding-left: 2vw\">projects</span>\n      </a>\n\n      <a href=\"#programming\"class=\"col staat largeFont d-block d-sm-none\" [ngClass]=\"[theme + '-theme']\">prog.</a>\n      <a href=\"#programming\"class=\"col staat largeFont d-none d-sm-block\" [ngClass]=\"[theme + '-theme']\">\n        <span style=\"padding-left: 2.5vw\">programming</span>\n      </a>\n\n      <a href=\"/memseq\" target=\"_blank\" class=\"col staat largeFont\" [ngClass]=\"[theme + '-theme']\">\n        <span style=\"padding-left: 5vw\">blog</span>\n      </a>\n    </div>\n  </div>\n\n  <div class=\"container elementToFadeIn my-1 w-100\">\n    <app-home [theme]=\"theme\"></app-home>\n  </div>\n\n  <button id=\"backUpButton\" class=\"backUpButton\"\n          [ngClass]=\"[theme + '-theme']\"\n          [ngStyle]=\"{'border' : '2px solid ' + (theme === 'light' ? '#000000' : 'whitesmoke')}\"\n          (click)=\"topFunction()\">\n    <i class=\"fa fa-long-arrow-up p-0\" style=\"margin: auto auto; position: relative;\" aria-hidden=\"true\"></i>\n  </button>\n\n</div>\n"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
        this.theme = 'light';
        this.router = router;
    }
    AppComponent.prototype.topFunction = function () {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };
    AppComponent.prototype.toggleTheme = function () {
        if (localStorage.getItem('theme') === 'light')
            this.theme = 'dark';
        else
            this.theme = 'light';
        localStorage.setItem('theme', this.theme);
    };
    AppComponent.prototype.onScrollEvent = function ($event) {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            document.getElementById('backUpButton').style.display = 'block';
        }
        else {
            document.getElementById('backUpButton').style.display = 'none';
        }
    };
    AppComponent.prototype.ngOnInit = function () {
        if (!localStorage.getItem('theme'))
            localStorage.setItem('theme', 'light');
        this.theme = localStorage.getItem('theme');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:scroll', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], AppComponent.prototype, "onScrollEvent", null);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");







var appRoutes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"] },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRoutes),
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".prog {\n    border: 2px solid #000000;\n}\n.progPara {\n    padding:10px;\n}\n.project {\n    height: 250px;\n    border: 2px solid #000000;\n    margin: 10px;\n    padding: 0px !important;\n}\n.projectLink {\n    transition: color 0.2s ease;\n}\n.projectLink:hover {\n    color: crimson;\n    cursor: pointer;\n}\n.projectTech {\n    font-family: 'Circular Std Book';\n    font-size: 20px;\n    color: #000000;\n}\n.myBtn {\n    margin: 40px;\n    width: 200px;\n    height: 40px;\n    font-family: 'Circular Std Book';\n    font-size: 18px;\n    background: transparent;\n    border-radius: 0px;\n    padding-top: 2px;\n}\n.disableEffect:hover {\n    color:gray !important;\n}\n.card-body {\n  position: relative;\n}\n.card-body .links {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n}\n.fill-height-or-more {\n  display: flex;\n  flex-direction: column;\n}\n.fill-height-or-more > div {\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFFQTtJQUNJLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksMkJBQTJCO0FBQy9CO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksZ0NBQWdDO0lBQ2hDLGVBQWU7SUFDZixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7SUFDWixnQ0FBZ0M7SUFDaEMsZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxPQUFPO0FBQ1Q7QUFHQTtFQUtFLGFBQWE7RUFPYixzQkFBc0I7QUFDeEI7QUFFQTtFQUtFLE9BQU87RUFLUCxhQUFhO0VBS2IsdUJBQXVCO0VBT3ZCLHNCQUFzQjtBQUN4QiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2cge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMDAwMDA7XG59XG4ucHJvZ1BhcmEge1xuICAgIHBhZGRpbmc6MTBweDtcbn1cblxuLnByb2plY3Qge1xuICAgIGhlaWdodDogMjUwcHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzAwMDAwMDtcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG59XG4ucHJvamVjdExpbmsge1xuICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMnMgZWFzZTtcbn1cbi5wcm9qZWN0TGluazpob3ZlciB7XG4gICAgY29sb3I6IGNyaW1zb247XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnByb2plY3RUZWNoIHtcbiAgICBmb250LWZhbWlseTogJ0NpcmN1bGFyIFN0ZCBCb29rJztcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgY29sb3I6ICMwMDAwMDA7XG59XG4ubXlCdG4ge1xuICAgIG1hcmdpbjogNDBweDtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGZvbnQtZmFtaWx5OiAnQ2lyY3VsYXIgU3RkIEJvb2snO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgcGFkZGluZy10b3A6IDJweDtcbn1cblxuLmRpc2FibGVFZmZlY3Q6aG92ZXIge1xuICAgIGNvbG9yOmdyYXkgIWltcG9ydGFudDtcbn1cblxuLmNhcmQtYm9keSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5jYXJkLWJvZHkgLmxpbmtzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG59XG5cblxuLmZpbGwtaGVpZ2h0LW9yLW1vcmUge1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5OiAtbW96LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xuICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIC1tb3otYm94LW9yaWVudDogdmVydGljYWw7XG4gIC1tb3otYm94LWRpcmVjdGlvbjogbm9ybWFsO1xuICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmZpbGwtaGVpZ2h0LW9yLW1vcmUgPiBkaXYge1xuICAtd2Via2l0LWJveC1mbGV4OiAxO1xuICAtd2Via2l0LWZsZXg6IDE7XG4gIC1tb3otYm94LWZsZXg6IDE7XG4gIC1tcy1mbGV4OiAxO1xuICBmbGV4OiAxO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5OiAtbW96LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcbiAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgLW1vei1ib3gtcGFjazogY2VudGVyO1xuICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcbiAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAtbW96LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAtbW96LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcbiAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"col p-0\">\n\n  <!-----------------INTRO -------------------->\n  <p class=\"roboto-bold mediumFont\" [ngClass]=\"[theme + '-theme']\">\n    I am a <span class=\"text-crimson\">full stack web developer</span> <br>with <span class=\"text-crimson\">1.5 years</span> of experience in <span class=\"text-crimson\">JavaScript</span>,<br><span class=\"text-crimson\">ReactJs</span>, <span class=\"text-crimson\">VueJS</span>, Angular, <span class=\"text-crimson\">NodeJs</span>, <span class=\"text-crimson\">SQL</span>, <span class=\"text-crimson\">GraphQL</span> <br>with background in <span class=\"text-crimson\">Algorithms</span> and <span class=\"text-crimson\">Data Structures</span> using <span class=\"text-crimson\">C++</span>.\n  </p>\n\n  <!-------------------------WORK EXP ------------------------------>\n  <div>\n    <p id=\"experience\" class=\"mynavOptions largeFont staat pt-4 pb-3\" [ngClass]=\"[theme + '-theme']\">work experience</p>\n    <div class=\"row gutter-0 d-flex justify-content-start\">\n      <div class=\"col-sm-6 col-lg-4 col-md-5 mb-3 p-0 fill-height-or-more\" *ngFor=\"let exp of workExp; let i = index\">\n        <div class=\"col-12 col-sm-11 card p-0\">\n          <div class=\"card-body p-0\" [ngClass]=\"[theme + '-theme']\">\n            <div class=\"p-0 d-flex justify-content-around header\" [ngClass]=\"[theme === 'light' ? 'dark-theme' : 'light-theme']\">\n              <p class=\"smallFont roboto m-0 p-2 align-self-center\">\n                {{ exp.company }}\n              </p>\n            </div>\n            <p class=\"card-text p-2 smallFont roboto\" [ngClass]=\"[theme + '-theme']\">\n              <i class=\"fa fa-map-marker\"></i>\n              &nbsp;{{ exp.location }}<br>\n              {{ exp.duration }}&nbsp;\n              <span class=\"text-crimson\">({{ duration[i] }})</span><br><br>\n              {{ exp.about }}\n            </p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n  <!-------------------------Personal Projects ------------------------------>\n  <p id=\"projects\" class=\"mynavOptions largeFont staat pt-5 pb-3\" [ngClass]=\"[theme + '-theme']\">personal projects</p>\n\n  <!--------------------------------1st section-------------------------------- -->\n  <div class=\"row gutter-0 d-flex justify-content-start\">\n      <div class=\"col-sm-6 col-lg-4 mb-4 fill-height-or-more\" *ngFor=\"let project of myProjects; let i = index\">\n        <div class=\"col-12 col-sm-11 card p-0\">\n          <div class=\"card-body p-0\" [ngClass]=\"[theme + '-theme']\">\n            <div class=\"header d-flex justify-content-around\" [ngClass]=\"[theme === 'light' ? 'dark-theme' : 'light-theme']\">\n              <p class=\"smallFont roboto m-0 p-2 align-self-center\">\n                {{project.heading}}\n              </p>\n            </div>\n            <p class=\"card-text p-2 roboto smallFont\" [ngClass]=\"[theme + '-theme']\">\n              {{project.about}}\n            </p>\n            <p class=\"card-text px-2 py-0 m-0 smallFont roboto\" [ngClass]=\"[theme + '-theme']\">\n              Technologies Used:\n            </p>\n            <p class=\"card-text p-2 roboto smallFont\" [ngClass]=\"[theme + '-theme']\">\n              <span *ngFor=\"let tech of project.tech\">{{tech}}&nbsp;</span>\n            </p>\n\n            <br>\n\n            <div class=\"row gutter-0 w-100 d-flex justify-content-around links\" [ngClass]=\"[theme + '-theme']\">\n              <div class=\"col\">\n                <a href=\"{{project.git}}\" class=\"projectLink roboto smallFont\"\n                   [ngClass]=\"[theme + '-theme']\" target=\"_blank\">\n                  <i class=\"fa fa-github\"></i>&nbsp;View on Github\n                </a>\n              </div>\n              <div *ngIf=\"project.live.length != 4; else strikeBlock\"class=\"col\">\n                <a href=\"{{project.live}}\" class=\"projectLink roboto smallFont\" target=\"_blank\"\n                   [ngClass]=\"[theme + '-theme']\">\n                  <i class=\"fa fa-desktop\"></i>&nbsp;View Live\n                </a>\n              </div>\n              <ng-template #strikeBlock>\n                <div class=\"col projectLink disableEffect roboto smallFont\" [ngClass]=\"[theme + '-theme']\">\n                  <i class=\"fa fa-desktop\"></i>&nbsp;<s>View Live</s>\n                </div>\n              </ng-template>\n            </div>\n\n          </div>\n        </div>\n      </div>\n  </div>\n\n  <div class=\"clearfix\"></div>\n  <div class=\"row gutter-0 justify-content-around\">\n    <button class=\"btn myBtn\"\n            [ngClass]=\"[theme + '-theme']\"\n            [ngStyle]=\"{'border' : '2px solid ' + (theme === 'light' ? '#000000' : 'whitesmoke')}\"\n            (click)=\"loadMore()\">\n      {{ buttonText }}\n    </button>\n  </div>\n\n  <!-------------------------------Programming--------------------------------- -->\n\n  <p id=\"programming\" class=\"mynavOptions largeFont staat pt-5 pb-3\" [ngClass]=\"[theme + '-theme']\">algorithmic programming</p>\n  <div class=\"row gutter-0 d-flex\">\n    <div class=\"smallFont roboto\" [ngClass]=\"[theme + '-theme']\">\n      I participate in <span class=\"text-crimson\">contests</span> based on <span class=\"text-crimson\">algorithms</span>, <br><span class=\"text-crimson\">data structures</span> and <span class=\"text-crimson\">mathematics</span> using <span class=\"text-crimson\">C++</span> as my primary language. <br>All my stats can be found in my profiles on various competitive programming websites.\n      <div class=\"my-4 m-0 p-0\">\n        <a href=\"assets/acm2017.pdf\" class=\"projectLink roboto smallFont underline\" target=\"_blank\" [ngClass]=\"[theme + '-theme']\">\n          <i class=\"fa fa-trophy\"></i>&nbsp;Qualified <span class=\"text-crimson\"><b>ACM-ICPC INDIA</b></span> regionals 2016.\n        </a>\n      </div>\n    </div>\n    <div class=\"mt-1\">\n      <div class=\"card p-0\">\n        <div class=\"card-body p-0\" [ngClass]=\"[theme + '-theme']\">\n          <div class=\"header d-flex justify-content-around\" [ngClass]=\"[theme === 'light' ? 'dark-theme' : 'light-theme']\">\n            <p class=\"smallFont roboto m-0 p-2\">Contest Profiles:</p>\n          </div>\n          <div class=\"row\">\n            <div class=\"col card-text p-2 ml-3\" [ngClass]=\"[theme + '-theme']\">\n              <a href=\"http://codeforces.com/profile/fie\" class=\"underline projectLink\" [ngClass]=\"[theme + '-theme']\" target=\"_blank\">&nbsp;Codeforces</a><br>\n              [Code to 800+ problems solved on Codeforces:\n              <a href=\"https://github.com/strcoder4007/codeforces\" class=\"projectLink ml-1 underline\" [ngClass]=\"[theme + '-theme']\" target=\"_blank\"><i class=\"fa fa-github\"></i> &nbsp;Github</a> ]<br><br>\n              <a href=\"http://www.spoj.com/users/strcoder4007/\" class=\"underline projectLink\" [ngClass]=\"[theme + '-theme']\" target=\"_blank\">&nbsp;SPOJ</a><br>\n              [Code to 180+ problems solved on SPOJ:\n              <a href=\"https://github.com/strcoder4007/spoj\" class=\"projectLink ml-1 underline\" [ngClass]=\"[theme + '-theme']\" target=\"_blank\"><i class=\"fa fa-github\"></i> &nbsp;Github</a> ]<br><br>\n            </div>\n            <div class=\"col card-text p-2\" style=\"display: flex; justify-content: center\">\n              <div>\n                <a href=\"https://www.hackerrank.com/FrozenOnion\" class=\"underline projectLink\" [ngClass]=\"[theme + '-theme']\" target=\"_blank\">&nbsp;Hackerrank</a>\n                <br><div style=\"height:7.5px\"></div>\n                <a href=\"https://csacademy.com/user/strcoder/\" class=\"underline projectLink\" [ngClass]=\"[theme + '-theme']\" target=\"_blank\">&nbsp;CSAcademy</a>\n                <br><div style=\"height:7.5px\"></div>\n                <a href=\"https://atcoder.jp/user/STR\" class=\"underline projectLink\" [ngClass]=\"[theme + '-theme']\" target=\"_blank\">&nbsp;AtCoder</a>\n                <br><div style=\"height:7.5px\"></div>\n                <a href=\"http://acm.timus.ru/author.aspx?id=199801\" class=\"underline projectLink\" [ngClass]=\"[theme + '-theme']\" target=\"_blank\">&nbsp;Timus Online Judge</a>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n\n\n  <br>\n</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");




var HomeComponent = /** @class */ (function () {
    function HomeComponent(http) {
        this.http = http;
        this.workExp = [];
        this.months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        this.myProjects = [];
        this.visibleProjects = 8;
        this.buttonText = 'Load More';
    }
    Object.defineProperty(HomeComponent.prototype, "duration", {
        get: function () {
            var _this = this;
            if (this.workExp && this.workExp.length) {
                var durations_1 = [];
                this.workExp.forEach(function (exp) {
                    var start = exp.duration.split(' - ')[0];
                    var startMonth = _this.months.indexOf(start.split(' ')[0]);
                    var startYear = parseInt(start.split(' ')[1]);
                    var end = exp.duration.split(' - ')[1];
                    if (end === 'present')
                        end = _this.months[new Date().getMonth()] + ' ' + new Date().getFullYear();
                    var endMonth = _this.months.indexOf(end.split(' ')[0]);
                    var endYear = parseInt(end.split(' ')[1]);
                    var totalMonths = 0;
                    var duration = '';
                    if (startYear === endYear)
                        totalMonths = endMonth - startMonth;
                    else
                        totalMonths = (12 - startMonth + endMonth) + ((endYear - startYear - 1) * 12);
                    ++totalMonths;
                    if (totalMonths >= 12) {
                        duration = (Math.floor(totalMonths / 12) === 1) ? Math.floor(totalMonths / 12) + ' year' : Math.floor(totalMonths / 12) + ' years';
                        if (totalMonths % 12 !== 0)
                            duration += ' ' + ((totalMonths % 12 === 1) ? totalMonths % 12 + ' month' : totalMonths % 12 + ' months');
                    }
                    else
                        duration = (totalMonths === 1) ? totalMonths + ' month' : totalMonths + ' months';
                    durations_1.push(duration);
                });
                return durations_1;
            }
            return ['', '', '', ''];
        },
        enumerable: true,
        configurable: true
    });
    HomeComponent.prototype.loadMore = function () {
        if (this.buttonText === 'Load More') {
            this.visibleProjects = 50;
            this.buttonText = 'Show Less';
        }
        else {
            this.visibleProjects = 8;
            this.buttonText = 'Load More';
        }
        this.processJson();
    };
    HomeComponent.prototype.getposts = function () {
        return this.http.get('assets/data.json').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) { return res.json(); }));
    };
    HomeComponent.prototype.processJson = function () {
        var _this = this;
        this.workExp = [];
        this.myProjects = [];
        this.getposts().subscribe(function (allWork) {
            allWork.forEach(function (exp) {
                if (exp.hasOwnProperty('company'))
                    _this.workExp.push(exp);
                else if (_this.myProjects.length <= _this.visibleProjects)
                    _this.myProjects.push(exp);
            });
        });
    };
    HomeComponent.prototype.ngOnInit = function () {
        this.processJson();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])('theme'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], HomeComponent.prototype, "theme", void 0);
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"]])
    ], HomeComponent);
    return HomeComponent;
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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


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
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/shubham/Projects/theTownCenter/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map