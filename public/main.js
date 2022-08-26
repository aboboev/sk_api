(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../ui_user/src/app/shared/components/password-validator.component.ts":
/*!****************************************************************************!*\
  !*** ../ui_user/src/app/shared/components/password-validator.component.ts ***!
  \****************************************************************************/
/*! exports provided: PasswordValidation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordValidation", function() { return PasswordValidation; });
var PasswordValidation = /** @class */ (function () {
    function PasswordValidation() {
    }
    PasswordValidation.MatchPassword = function (AC) {
        var password = AC.get('password').value; // to get value in input tag
        var confirmPassword = AC.get('confirmPassword').value; // to get value in input tag
        if (password !== confirmPassword) {
            AC.get('confirmPassword').setErrors({ MatchPassword: true });
        }
        else {
            return null;
        }
    };
    return PasswordValidation;
}());



/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./auth/auth.module": [
		"./src/app/auth/auth.module.ts",
		"auth-auth-module"
	],
	"./footer/footer.module": [
		"./src/app/footer/footer.module.ts",
		"footer-footer-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/404/404.page.html":
/*!***********************************!*\
  !*** ./src/app/404/404.page.html ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row align-items-center  flex-sm-row-reverse\">\r\n    <div class=\"col-md-7 col-sm-6\">\r\n      <img class=\"mw-100\" src=\"/assets/img/404.png\" alt=\"404\" />\r\n    </div>\r\n    <div class=\"col-md-5 col-sm-6 text-center text-md-left\">\r\n      <h1 class=\"mb-5\">\r\n        {{'404.Oops' | translate}}!\r\n        <br/>\r\n        <strong>{{'404.Page not found' | translate}}.</strong>\r\n      </h1>\r\n      <a class=\"text-yellow\">\r\n        <i class=\"fa fa-long-arrow-left mr-2\"></i> {{'404.Go Back' | translate}}</a>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/404/404.page.scss":
/*!***********************************!*\
  !*** ./src/app/404/404.page.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n  color: white;\n  font-size: 3.64rem; }\n\n.text-yellow {\n  font-size: 20px; }\n\n@media (min-width: 955px) {\n  .row {\n    min-height: 70vh; } }\n\n@media (max-width: 600px) {\n  h6 {\n    font-size: 2rem; } }\n"

/***/ }),

/***/ "./src/app/404/404.page.ts":
/*!*********************************!*\
  !*** ./src/app/404/404.page.ts ***!
  \*********************************/
/*! exports provided: NotFoundPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundPage", function() { return NotFoundPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotFoundPage = /** @class */ (function () {
    function NotFoundPage(router) {
        this.router = router;
    }
    NotFoundPage.prototype.ngOnInit = function () { };
    NotFoundPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-404-page',
            template: __webpack_require__(/*! ./404.page.html */ "./src/app/404/404.page.html"),
            styles: [__webpack_require__(/*! ./404.page.scss */ "./src/app/404/404.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], NotFoundPage);
    return NotFoundPage;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<loader *ngIf=\"settings.loading\"></loader>\r\n<router-outlet></router-outlet>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_translator_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/translator.service */ "./src/app/services/translator.service.ts");
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/settings.service */ "./src/app/services/settings.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(translator, settings) {
        this.translator = translator;
        this.settings = settings;
        this.title = 'sistemkoin2';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_services_translator_service__WEBPACK_IMPORTED_MODULE_1__["TranslatorService"],
            _services_settings_service__WEBPACK_IMPORTED_MODULE_2__["SettingsService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: HttpLoaderFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/esm5/ngx-translate-http-loader.js");
/* harmony import */ var ng_inline_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-inline-svg */ "./node_modules/ng-inline-svg/lib/index.js");
/* harmony import */ var ng_inline_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng_inline_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _home_home_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.page */ "./src/app/home/home.page.ts");
/* harmony import */ var _404_404_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./404/404.page */ "./src/app/404/404.page.ts");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-owl-carousel */ "./node_modules/ngx-owl-carousel/index.js");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _services_services_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/services.module */ "./src/app/services/services.module.ts");
/* harmony import */ var _user_login_login_page__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./user/login/login.page */ "./src/app/user/login/login.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _user_forgot_forgot_page__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./user/forgot/forgot.page */ "./src/app/user/forgot/forgot.page.ts");
/* harmony import */ var _user_resetPwd_resetPwd_page__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./user/resetPwd/resetPwd.page */ "./src/app/user/resetPwd/resetPwd.page.ts");
/* harmony import */ var _user_resend_resend_page__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./user/resend/resend.page */ "./src/app/user/resend/resend.page.ts");
/* harmony import */ var _user_confirmemail_confirmemail_page__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./user/confirmemail/confirmemail.page */ "./src/app/user/confirmemail/confirmemail.page.ts");
/* harmony import */ var _user_signup_signup_page__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./user/signup/signup.page */ "./src/app/user/signup/signup.page.ts");
/* harmony import */ var _user_setauth_setauth_page__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./user/setauth/setauth.page */ "./src/app/user/setauth/setauth.page.ts");
/* harmony import */ var _user_confirmauth_confirmauth_page__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./user/confirmauth/confirmauth.page */ "./src/app/user/confirmauth/confirmauth.page.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _layout_layout_page__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./layout/layout.page */ "./src/app/layout/layout.page.ts");
/* harmony import */ var _user_faq_faq_page__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./user/faq/faq.page */ "./src/app/user/faq/faq.page.ts");
/* harmony import */ var _user_announcement_announcement_page__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./user/announcement/announcement.page */ "./src/app/user/announcement/announcement.page.ts");
/* harmony import */ var _user_announcementdetail_announcementdetail_page__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./user/announcementdetail/announcementdetail.page */ "./src/app/user/announcementdetail/announcementdetail.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























// AoT requires an exported function for factories
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_4__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _home_home_page__WEBPACK_IMPORTED_MODULE_10__["HomePage"],
                _user_login_login_page__WEBPACK_IMPORTED_MODULE_14__["LoginPage"],
                _user_forgot_forgot_page__WEBPACK_IMPORTED_MODULE_16__["ForgotPage"],
                _user_resetPwd_resetPwd_page__WEBPACK_IMPORTED_MODULE_17__["ResetPwdPage"],
                _user_resend_resend_page__WEBPACK_IMPORTED_MODULE_18__["ResendPage"],
                _user_confirmemail_confirmemail_page__WEBPACK_IMPORTED_MODULE_19__["ConfirmemailPage"],
                _user_signup_signup_page__WEBPACK_IMPORTED_MODULE_20__["SignupPage"],
                _user_setauth_setauth_page__WEBPACK_IMPORTED_MODULE_21__["SetauthPage"],
                _user_confirmauth_confirmauth_page__WEBPACK_IMPORTED_MODULE_22__["ConfirmauthPage"],
                _404_404_page__WEBPACK_IMPORTED_MODULE_11__["NotFoundPage"],
                _layout_layout_page__WEBPACK_IMPORTED_MODULE_24__["LayoutPage"],
                _user_faq_faq_page__WEBPACK_IMPORTED_MODULE_25__["FAQPage"],
                _user_announcement_announcement_page__WEBPACK_IMPORTED_MODULE_26__["AnnouncementPage"],
                _user_announcementdetail_announcementdetail_page__WEBPACK_IMPORTED_MODULE_27__["AnnouncementDetailPage"]
            ],
            imports: [
                ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_12__["OwlModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_9__["AppRoutes"]),
                ng_inline_svg__WEBPACK_IMPORTED_MODULE_5__["InlineSVGModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["TooltipModule"].forRoot(),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateLoader"],
                        useFactory: HttpLoaderFactory,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]]
                    }
                }),
                _services_services_module__WEBPACK_IMPORTED_MODULE_13__["ServicesModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_15__["SharedModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_23__["BrowserAnimationsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutes", function() { return AppRoutes; });
/* harmony import */ var _home_home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.page */ "./src/app/home/home.page.ts");
/* harmony import */ var _404_404_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./404/404.page */ "./src/app/404/404.page.ts");
/* harmony import */ var _user_login_login_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user/login/login.page */ "./src/app/user/login/login.page.ts");
/* harmony import */ var _user_forgot_forgot_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user/forgot/forgot.page */ "./src/app/user/forgot/forgot.page.ts");
/* harmony import */ var _user_resetPwd_resetPwd_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user/resetPwd/resetPwd.page */ "./src/app/user/resetPwd/resetPwd.page.ts");
/* harmony import */ var _user_resend_resend_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user/resend/resend.page */ "./src/app/user/resend/resend.page.ts");
/* harmony import */ var _user_confirmemail_confirmemail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user/confirmemail/confirmemail.page */ "./src/app/user/confirmemail/confirmemail.page.ts");
/* harmony import */ var _user_signup_signup_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user/signup/signup.page */ "./src/app/user/signup/signup.page.ts");
/* harmony import */ var _user_setauth_setauth_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user/setauth/setauth.page */ "./src/app/user/setauth/setauth.page.ts");
/* harmony import */ var _user_confirmauth_confirmauth_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user/confirmauth/confirmauth.page */ "./src/app/user/confirmauth/confirmauth.page.ts");
/* harmony import */ var _services_authguard_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/authguard.service */ "./src/app/services/authguard.service.ts");
/* harmony import */ var _services_authcheck_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/authcheck.service */ "./src/app/services/authcheck.service.ts");
/* harmony import */ var _layout_layout_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./layout/layout.page */ "./src/app/layout/layout.page.ts");
/* harmony import */ var _user_faq_faq_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./user/faq/faq.page */ "./src/app/user/faq/faq.page.ts");
/* harmony import */ var _user_announcement_announcement_page__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./user/announcement/announcement.page */ "./src/app/user/announcement/announcement.page.ts");
/* harmony import */ var _user_announcementdetail_announcementdetail_page__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./user/announcementdetail/announcementdetail.page */ "./src/app/user/announcementdetail/announcementdetail.page.ts");
















var AppRoutes = [
    { path: '', component: _home_home_page__WEBPACK_IMPORTED_MODULE_0__["HomePage"] },
    {
        path: '',
        component: _layout_layout_page__WEBPACK_IMPORTED_MODULE_12__["LayoutPage"],
        loadChildren: './auth/auth.module#AuthModule',
        resolve: {
            AuthguardService: _services_authguard_service__WEBPACK_IMPORTED_MODULE_10__["AuthguardService"]
        }
    },
    {
        path: '',
        component: _layout_layout_page__WEBPACK_IMPORTED_MODULE_12__["LayoutPage"],
        loadChildren: './footer/footer.module#FooterModule',
        resolve: {
            AuthcheckService: _services_authcheck_service__WEBPACK_IMPORTED_MODULE_11__["AuthcheckService"]
        }
    },
    { path: 'login', component: _user_login_login_page__WEBPACK_IMPORTED_MODULE_2__["LoginPage"] },
    { path: 'confirmemail', component: _user_confirmemail_confirmemail_page__WEBPACK_IMPORTED_MODULE_6__["ConfirmemailPage"] },
    { path: 'forgot', component: _user_forgot_forgot_page__WEBPACK_IMPORTED_MODULE_3__["ForgotPage"] },
    { path: 'reset_password/:code', component: _user_resetPwd_resetPwd_page__WEBPACK_IMPORTED_MODULE_4__["ResetPwdPage"] },
    { path: 'resend', component: _user_resend_resend_page__WEBPACK_IMPORTED_MODULE_5__["ResendPage"] },
    { path: 'ref/:code', component: _user_signup_signup_page__WEBPACK_IMPORTED_MODULE_7__["SignupPage"] },
    { path: 'signup', component: _user_signup_signup_page__WEBPACK_IMPORTED_MODULE_7__["SignupPage"] },
    { path: 'setauth', component: _user_setauth_setauth_page__WEBPACK_IMPORTED_MODULE_8__["SetauthPage"] },
    { path: 'confirmauth', component: _user_confirmauth_confirmauth_page__WEBPACK_IMPORTED_MODULE_9__["ConfirmauthPage"] },
    { path: 'faq', component: _user_faq_faq_page__WEBPACK_IMPORTED_MODULE_13__["FAQPage"] },
    { path: 'announce', component: _user_announcement_announcement_page__WEBPACK_IMPORTED_MODULE_14__["AnnouncementPage"] },
    { path: 'announcedetail', component: _user_announcementdetail_announcementdetail_page__WEBPACK_IMPORTED_MODULE_15__["AnnouncementDetailPage"] },
    { path: '404', component: _404_404_page__WEBPACK_IMPORTED_MODULE_1__["NotFoundPage"] },
    { path: '**', redirectTo: '404' }
];


/***/ }),

/***/ "./src/app/home/home.page.html":
/*!*************************************!*\
  !*** ./src/app/home/home.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"fix-social-icon-list\">\r\n    <div class=\"all-social-icons\">\r\n        <li>\r\n            <a href=\"https://www.facebook.com/SistemKoin/\" target=\"_blank\">\r\n                <i class=\"fa fa-facebook\" aria-hidden=\"true\"></i>\r\n            </a>\r\n        </li>\r\n        <li>\r\n            <a href=\"https://twitter.com/SistemKoin\" target=\"_blank\">\r\n                <i class=\"fa fa-twitter\" aria-hidden=\"true\"></i>\r\n            </a>\r\n        </li>\r\n        <li>\r\n            <a href=\"https://t.me/sistemkoinofficial\" target=\"_blank\">\r\n                <i class=\"fa fa-telegram\"></i>\r\n            </a>\r\n        </li>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"hero-area hero-area-bg\">\r\n    <div class=\"header-area\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-3 col-sm-3\">\r\n                    <div class=\"site-logo\">\r\n                        <a href=\"\" class=\"branding-logo\">\r\n                            <img src=\"assets/img/page-logo.png\" alt=\"\">\r\n                        </a>\r\n                    </div>\r\n                    <div class=\"mobile-menu-active\"></div>\r\n                </div>\r\n                <div class=\"col-md-8 col-md-offset-1 col-sm-9\">\r\n                    <div class=\"site-main-menu\">\r\n                        <div class=\"main-menu-sec\">\r\n\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"hero-area-content\">\r\n            <div class=\"hero-area-content-tablecell\">\r\n                <div class=\"container\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-12\">\r\n                            <div class=\"hero-area-big-img\">\r\n                                <img src=\"assets/img/hero-big-img.png\" alt=\"\">\r\n                            </div>\r\n\r\n                            <div class=\"hr-textt\">\r\n                                <h2 class=\"text-uppercase\">{{'HOME.SISTEMKOIN' | translate}}</h2>\r\n                                <h4>{{'HOME.CRYPTO_MARKET' | translate}}</h4>\r\n                            </div>\r\n                            <div class=\"hero-button-list\">\r\n                                <a [routerLink]=\"['/signup']\" class=\"hr-buton-all text-uppercase\">{{'HOME.SIGN_UP' | translate}}</a>\r\n                                <a [routerLink]=\"['/login']\" class=\"hr-buton-all text-uppercase\">{{'HOME.SIGN_IN' | translate}}</a>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <!--<div class=\"graph-img-section text-center\" style=\"background-color: black;\">-->\r\n        <!--<owl-carousel [options]=\"owlConfig\" [items]=\"tickers\"-->\r\n                      <!--[carouselClasses]=\"['owl-theme', 'row', 'sliding', 'all-grp-slde']\">-->\r\n            <!--<div *ngFor=\"let ticker of tickers;let i = index\" class=\"single-slide {{i}}\" [innerHTML]=\"ticker\">-->\r\n            <!--</div>-->\r\n        <!--</owl-carousel>-->\r\n    <!--</div>-->\r\n\r\n    <div class=\"program-section-area\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"section-title\">\r\n                        <h1 class=\"big-title\">Programlar</h1>\r\n                        <h2>Sistemkoin Referans Programı</h2>\r\n                        <p>ico is a decentralized platform providing Lorem ipsum dolor sit amet, consectetur adipiscing\r\n                            elit, sed do eiusmod\r\n                            tempor incididunt ut labore et dolore </p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"col-md-6 col-sm-5\">\r\n                    <div class=\"program-left-img\">\r\n                        <img src=\"assets/img/program-sec-img.png\" alt=\"\">\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-md-6 col-sm-7\">\r\n                    <div class=\"prog-roght-textt\">\r\n                        <div class=\"single-item-list\">\r\n                            <div class=\"lft-icon\">\r\n                                <i>\r\n                                    <img src=\"assets/img/sistemkoin.png\" alt=\"\">\r\n                                    <div class=\"sep\"></div>\r\n                                </i>\r\n                            </div>\r\n                            <div class=\"single-lst-content\">\r\n                                <h4>Sisteme Üye Ol</h4>\r\n                                <p>Kayıt Olun ve Referans Kodunuzu alın</p>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"single-item-list\">\r\n                            <div class=\"lft-icon\">\r\n                                <i>\r\n                                    <img src=\"assets/img/sistemkoin.png\" alt=\"\">\r\n                                    <div class=\"sep\"></div>\r\n                                </i>\r\n                            </div>\r\n                            <div class=\"single-lst-content\">\r\n                                <h4>Crowd Wisdom </h4>\r\n                                <p>Analysts and Artificial Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"single-item-list\">\r\n                            <div class=\"lft-icon\">\r\n                                <i>\r\n                                    <img src=\"assets/img/sistemkoin.png\" alt=\"\">\r\n                                </i>\r\n                            </div>\r\n                            <div class=\"single-lst-content\">\r\n                                <h4>Rewards Mechanism</h4>\r\n                                <p>Members are paid for Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"program-section-area graph-2\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"section-title\">\r\n                        <h1 class=\"big-title\">nasıl İşler</h1>\r\n                        <h2>Sistem nasıl işler</h2>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"col-md-6 col-sm-7\">\r\n                    <div class=\"graph-2-left-text\">\r\n                        <div class=\"single-grp-t-text\">\r\n                            <div class=\"single-gp-text-all\">\r\n                                <span class=\"nmbr\">1.</span>\r\n                            </div>\r\n                            <p>Öncelikle Kayıt ol Butonuna tıklayarak sistemimize üye olunuz.</p>\r\n                        </div>\r\n                        <div class=\"single-grp-t-text\">\r\n                            <div class=\"single-gp-text-all\">\r\n                                <span class=\"nmbr\">2.</span>\r\n                            </div>\r\n                            <p>Cüzdan oluştur bölümünden tüm coinler için cüzdanınızı\r\n                                <br> oluşturunuz.</p>\r\n                        </div>\r\n                        <div class=\"single-grp-t-text\">\r\n                            <div class=\"single-gp-text-all\">\r\n                                <span class=\"nmbr\">3.</span>\r\n                            </div>\r\n                            <p>Yatırımlarınızı ve çekimlerinizi bu oluşturduğunuz cüzdanları\r\n                                <br> kullanarak yapabilirsiniz.</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-6 col-sm-5\">\r\n                    <div class=\"program-left-img\">\r\n                        <img src=\"assets/img/grph-2.png\" alt=\"\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"solution-area-section\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"section-title\">\r\n                        <h1 class=\"big-title\">nasıl İşler</h1>\r\n                        <h2>Sistem nasıl işler</h2>\r\n                        <p>The Cryptocurrency industry is one of the Lorem ipsum dolor sit amet, consectetur adipiscing\r\n                            elit, sed do eiusmod\r\n                            tempor incididunt ut labore et dolore magna aliqua.</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n\r\n            <div class=\"row\">\r\n                <div class=\"col-md-3 col-sm-6\">\r\n                    <div class=\"single-solutions\">\r\n                        <div class=\"sl-top-icon\">\r\n                            <img src=\"assets/img/sr-1n.png\" alt=\"\">\r\n                        </div>\r\n\r\n                        <div class=\"sl-textt\">\r\n                            <h3>Relational Blockchain</h3>\r\n                            <p>Contributors and members est et expedita distinctio. Nam libero tempore</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-3 col-sm-6\">\r\n                    <div class=\"single-solutions\">\r\n                        <div class=\"sl-top-icon\">\r\n                            <img src=\"assets/img/sr-2n.png\" alt=\"\">\r\n                        </div>\r\n\r\n                        <div class=\"sl-textt\">\r\n                            <h3>Fraud Reduction</h3>\r\n                            <p>Contributors and members est et expedita distinctio. Nam libero tempore</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-3 col-sm-6\">\r\n                    <div class=\"single-solutions\">\r\n                        <div class=\"sl-top-icon\">\r\n                            <img src=\"assets/img/sr-3.png\" alt=\"\">\r\n                        </div>\r\n\r\n                        <div class=\"sl-textt\">\r\n                            <h3>Next Generation Wallet</h3>\r\n                            <p>Members can ask questions and get professional advice from Experts</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-3 col-sm-6\">\r\n                    <div class=\"single-solutions\">\r\n                        <div class=\"sl-top-icon\">\r\n                            <img src=\"assets/img/sr-4.png\" alt=\"\">\r\n                        </div>\r\n\r\n                        <div class=\"sl-textt\">\r\n                            <h3>Recovery Nodes</h3>\r\n                            <p>Institutional investors and other members can access in-depth technical analysis and\r\n                                market </p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"footer-top-area\">\r\n        <div class=\"container-fluid\">\r\n\r\n            <div class=\"posi-imgg-mainn\">\r\n                <div class=\"posi-imgg\">\r\n                    <img src=\"assets/img/round-imggg.png\" alt=\"\">\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"section-title\">\r\n                        <h1 class=\"big-title\">nasıl İşler</h1>\r\n                        <h2>Sistem nasıl işler</h2>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-4 col-sm-4\">\r\n                    <div class=\"single-sponsec-sec\">\r\n                        <div class=\"sponsec-sec-tablecell\">\r\n                            <h1>SPONSOR</h1>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-4 col-sm-4\">\r\n                    <div class=\"single-sponsec-sec\">\r\n                        <div class=\"sponsec-sec-tablecell\">\r\n                            <h1>SPONSOR</h1>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-4 col-sm-4\">\r\n                    <div class=\"single-sponsec-sec\">\r\n                        <div class=\"sponsec-sec-tablecell\">\r\n                            <h1>SPONSOR</h1>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"footer-area-section\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-2 col-sm-4\">\r\n                    <div class=\"footer-single-item\">\r\n                        <div class=\"footer-logo\">\r\n                            <a href=\"\" class=\"ft-branding\">\r\n                                <img src=\"assets/img/footer-logo.png\" alt=\"\">\r\n                            </a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-3 col-sm-4\">\r\n                    <div class=\"footer-single-item\">\r\n                        <div class=\"footer-lnk-list\">\r\n                            <li>\r\n                                <a href=\"\">Nasıl Coin Alınır</a>\r\n                            </li>\r\n                            <li>\r\n                                <a href=\"\">Coin Nedir</a>\r\n                            </li>\r\n                            <li>\r\n                                <a href=\"\">APİ</a>\r\n                            </li>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-3 col-sm-4\">\r\n                    <div class=\"footer-single-item\">\r\n                        <div class=\"footer-lnk-list\">\r\n                            <li>\r\n                                <a href=\"\">Kullanıcı sözleşmesi</a>\r\n                            </li>\r\n                            <li>\r\n                                <a href=\"\">Nasıl Coin Satılır</a>\r\n                            </li>\r\n\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-4 col-sm-12\">\r\n                    <div class=\"footer-single-item subs\">\r\n                        <div class=\"footer-lnk-list\">\r\n                            <h3>Haber Bülteni İçin</h3>\r\n\r\n                            <div class=\"footer-sub-form\">\r\n                                <input type=\"text\" placeholder=\"Abone olduğunuz için teşekkürler\">\r\n                                <input type=\"submit\" value=\"Abone ol\">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*! #######################################################################\r\n\r\n\tMeanMenu 2.0.7\r\n\t--------\r\n\r\n\tTo be used with jquery.meanmenu.js by Chris Wharton (http://www.meanthemes.com/plugins/meanmenu/)\r\n\r\n####################################################################### */\n/* hide the link until viewport size is reached */\napp-home-page {\n  /* when under viewport size, .mean-container is added to body */\n  /* Fix for box sizing on Foundation Framework etc. */\n  /* Base CSS */\n  /* Header area css */\n  /* Program css */\n  /* Graph two css */\n  /* Solution block css */\n  /* Sponser css */ }\napp-home-page a.meanmenu-reveal {\n    display: none; }\napp-home-page .mean-container .mean-bar {\n    float: left;\n    width: 100%;\n    position: relative;\n    background: transparent;\n    padding: 4px 0;\n    z-index: 999999; }\napp-home-page .mean-container a.meanmenu-reveal {\n    width: 22px;\n    height: 22px;\n    padding: 13px 13px 11px 13px;\n    position: absolute;\n    top: 0;\n    right: 0;\n    cursor: pointer;\n    color: #000;\n    text-decoration: none;\n    /* font-size: 16px; */\n    line-height: 22px;\n    font-size: 1px;\n    display: block;\n    font-family: Arial, Helvetica, sans-serif;\n    font-weight: 700;\n    margin-top: -52px; }\napp-home-page .mean-container a.meanmenu-reveal span {\n    display: block;\n    background: #000;\n    height: 3px;\n    margin-top: 3px; }\napp-home-page .mean-container .mean-nav {\n    float: left;\n    width: 100%;\n    background: #414141;\n    margin-top: 10px; }\napp-home-page .mean-container .mean-nav ul {\n    padding: 0;\n    margin: 0;\n    width: 100%;\n    list-style-type: none; }\napp-home-page .mean-container .mean-nav ul li {\n    position: relative;\n    float: left;\n    width: 100%; }\napp-home-page .mean-container .mean-nav ul li a {\n    display: block;\n    float: left;\n    width: 90%;\n    padding: 1em 5%;\n    margin: 0;\n    text-align: left;\n    color: #fff;\n    border-top: 1px solid #383838;\n    border-top: 1px solid rgba(255, 255, 255, 0.5);\n    text-decoration: none;\n    text-transform: uppercase; }\napp-home-page .mean-container .mean-nav ul li li a {\n    width: 80%;\n    padding: 1em 10%;\n    border-top: 1px solid #f1f1f1;\n    border-top: 1px solid rgba(255, 255, 255, 0.25);\n    opacity: 0.75;\n    filter: alpha(opacity=75);\n    text-shadow: none !important;\n    visibility: visible; }\napp-home-page .mean-container .mean-nav ul li.mean-last a {\n    border-bottom: none;\n    margin-bottom: 0; }\napp-home-page .mean-container .mean-nav ul li li li a {\n    width: 70%;\n    padding: 1em 15%; }\napp-home-page .mean-container .mean-nav ul li li li li a {\n    width: 60%;\n    padding: 1em 20%; }\napp-home-page .mean-container .mean-nav ul li li li li li a {\n    width: 50%;\n    padding: 1em 25%; }\napp-home-page .mean-container .mean-nav ul li a:hover {\n    background: #252525;\n    background: rgba(255, 255, 255, 0.1); }\napp-home-page .mean-container .mean-nav ul li a.mean-expand {\n    margin-top: 1px;\n    width: 26px;\n    height: 32px;\n    padding: 12px !important;\n    text-align: center;\n    position: absolute;\n    right: 0;\n    top: 0;\n    z-index: 2;\n    font-weight: 700;\n    background: rgba(255, 255, 255, 0.1);\n    border: none !important;\n    border-left: 1px solid rgba(255, 255, 255, 0.4) !important;\n    border-bottom: 1px solid rgba(255, 255, 255, 0.2) !important; }\napp-home-page .mean-container .mean-nav ul li a.mean-expand:hover {\n    background: rgba(0, 0, 0, 0.9); }\napp-home-page .mean-container .mean-push {\n    float: left;\n    width: 100%;\n    padding: 0;\n    margin: 0;\n    clear: both; }\napp-home-page .mean-nav .wrapper {\n    width: 100%;\n    padding: 0;\n    margin: 0; }\napp-home-page .mean-container .mean-bar,\n  app-home-page .mean-container .mean-bar * {\n    box-sizing: content-box; }\napp-home-page .mean-remove {\n    display: none !important; }\napp-home-page .alignleft {\n    float: left;\n    margin-right: 15px; }\napp-home-page .alignright {\n    float: right;\n    margin-left: 15px; }\napp-home-page .aligncenter {\n    display: block;\n    margin: 0 auto 15px; }\napp-home-page a:focus {\n    outline: 0 solid; }\napp-home-page img {\n    max-width: 100%;\n    height: auto; }\napp-home-page h1,\n  app-home-page h2,\n  app-home-page h3,\n  app-home-page h4,\n  app-home-page h5,\n  app-home-page h6 {\n    margin: 0 0 15px;\n    font-weight: 700; }\napp-home-page body {\n    font-family: 'Poppins', sans-serif; }\napp-home-page a:hover {\n    text-decoration: none; }\napp-home-page .lg-form input {\n    width: 300px;\n    padding: 10px;\n    border: 1px solid #ddd;\n    margin-bottom: 10px;\n    border-radius: 5px;\n    display: block;\n    margin: 10px auto; }\napp-home-page .lg-form input[type='submit'] {\n    width: 100px;\n    background: #2b57f5;\n    background: linear-gradient(135deg, #2b57f5 0%, #46bcf4 100%, #2989d8 100%);\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#2b57f5', endColorstr='#2989d8',GradientType=1 );\n    color: #fff; }\napp-home-page .mdlbtn-mble {\n    width: 280px;\n    margin: 0 auto; }\napp-home-page .mdlbtn-mble li {\n    list-style: none;\n    display: inline-block; }\napp-home-page .mdlbtn-mble li a {\n    display: inline-block;\n    border: 1px solid #fff;\n    color: #fff;\n    padding: 7px 17px;\n    border-radius: 32px;\n    margin: 5px; }\napp-home-page .mdlbtn-mble {\n    text-align: center; }\napp-home-page .mdlbtn-mble {\n    display: none; }\napp-home-page .owl-carousel .owl-item img {\n    display: block;\n    width: auto;\n    -webkit-transform-style: preserve-3d; }\napp-home-page .single-slide {\n    background: #000324;\n    color: #fff;\n    overflow: hidden; }\napp-home-page .grp-left-text {\n    width: 100%;\n    float: left; }\napp-home-page .grp-right-img {\n    width: 40%;\n    float: right; }\napp-home-page .grp-left-text h2 {\n    color: #656989;\n    font-weight: 300; }\napp-home-page .grp-left-text h2 span {\n    color: #00475b;\n    padding-left: 16px; }\napp-home-page .grp-left-text h3 {\n    font-size: 30px;\n    color: #656989;\n    margin-top: 23px; }\napp-home-page .grp-left-text h3 span {\n    font-weight: 300; }\napp-home-page .grp-left-text h4 {\n    font-size: 25px;\n    font-weight: 300;\n    color: #424c70; }\napp-home-page .grp-left-text h4 span {\n    color: #757aa8;\n    padding-left: 5px;\n    padding-right: 5px; }\napp-home-page .single-slide {\n    padding-top: 20px;\n    padding-bottom: 20px; }\napp-home-page .single-slide h5 {\n      font-size: 14px;\n      color: white; }\napp-home-page .single-slide h6 {\n      font-size: 12px;\n      color: white;\n      font-weight: bold; }\napp-home-page .hero-area-bg {\n    background-image: url(\"/assets/img/hero-bgn.jpg\"); }\napp-home-page .hero-area {\n    background-size: cover;\n    background-position: center center; }\napp-home-page .site-logo img {\n    max-width: 221px;\n    margin: 20px 0; }\napp-home-page .main-menu-sec ul {\n    margin: 0;\n    padding: 0;\n    list-style: none; }\napp-home-page .main-menu-sec ul li {\n    display: inline-block; }\napp-home-page .main-menu-sec ul li a {\n    display: inline-block;\n    color: #fff;\n    font-size: 14px;\n    padding: 9px 16px;\n    margin-right: 11px; }\napp-home-page .main-menu-sec {\n    margin-top: 25px; }\napp-home-page .main-menu-sec ul li a.br-btn {\n    border: 1px solid #fff;\n    border-radius: 38px; }\napp-home-page .hero-area-big-img img {\n    max-width: 85%;\n    margin-left: 35px; }\napp-home-page .hero-area-big-img {\n    text-align: center; }\napp-home-page .hr-textt {\n    text-align: center; }\napp-home-page .hero-button-list {\n    text-align: center; }\napp-home-page .hr-textt {\n    color: #fff; }\napp-home-page .hr-textt h2 {\n    font-size: 33px;\n    font-weight: 600; }\napp-home-page .hr-textt h4 {\n    font-size: 16px;\n    font-weight: 400;\n    color: #46bcf4; }\napp-home-page .hr-textt {\n    margin-top: -62px; }\napp-home-page .hero-area-content {\n    padding: 98px 0; }\napp-home-page .hero-button-list a {\n    background: #2b57f5;\n    background: linear-gradient(135deg, #2b57f5 0%, #46bcf4 100%, #2989d8 100%);\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#2b57f5', endColorstr='#2989d8',GradientType=1 );\n    color: #fff;\n    width: 159px;\n    display: inline-block;\n    padding: 13px;\n    border-radius: 33px;\n    margin: 16px; }\napp-home-page .hero-button-list {\n    margin-top: 28px; }\napp-home-page .main-menu-sec ul li {\n    position: relative; }\napp-home-page .main-menu-sec ul li ul {\n    position: absolute;\n    left: 0;\n    width: 175px;\n    background: #081892;\n    text-align: left;\n    z-index: 999;\n    top: 65px;\n    transition: 0.4s;\n    opacity: 0;\n    visibility: hidden; }\napp-home-page .main-menu-sec ul li ul li {\n    display: block; }\napp-home-page .main-menu-sec ul li ul li a {\n    display: block;\n    border-bottom: 1px solid #b4b2b266;\n    margin: 0; }\napp-home-page .main-menu-sec ul li ul li a:hover {\n    background: #faa83c; }\napp-home-page .main-menu-sec ul li:hover ul {\n    opacity: 1;\n    visibility: visible;\n    top: 40px; }\napp-home-page .main-menu-sec ul li ul li:last-child a {\n    border: none; }\napp-home-page .mean-container .mean-nav ul li a.mean-expand {\n    height: 24px; }\napp-home-page .main-menu-sec ul li a i.fa {\n    padding-left: 7px; }\napp-home-page .main-menu-sec ul {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n    text-align: right; }\napp-home-page .fix-social-icon-list {\n    position: fixed;\n    right: 27px;\n    top: 28%;\n    z-index: 9999 !important; }\napp-home-page .all-social-icons li a i.fa:hover {\n    background: #fff;\n    color: #faa83c; }\napp-home-page .all-social-icons li {\n    list-style: none; }\napp-home-page .all-social-icons li a i.fa {\n    width: 50px;\n    height: 50px;\n    font-size: 25px;\n    background: #2b57f5;\n    background: linear-gradient(135deg, #2b57f5 0%, #46bcf4 100%, #2989d8 100%);\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#2b57f5', endColorstr='#2989d8',GradientType=1 );\n    text-align: center;\n    line-height: 50px;\n    color: #fff;\n    border-radius: 50%;\n    margin-bottom: 12px; }\napp-home-page .program-section-area {\n    background: #0a1992;\n    padding: 120px 0; }\napp-home-page .section-title {\n    text-align: center;\n    color: #fff; }\napp-home-page .section-title h1 {\n    font-size: 125px;\n    text-transform: uppercase;\n    font-weight: 600;\n    color: #8255fd;\n    opacity: 0.2; }\napp-home-page .section-title h2 {\n    text-transform: uppercase;\n    font-weight: 600;\n    margin-top: -98px;\n    position: relative;\n    z-index: 9; }\napp-home-page .section-title p {\n    margin-top: 92px;\n    padding: 0 210px;\n    line-height: 28px;\n    font-size: 15px; }\napp-home-page .section-title {\n    margin-bottom: 100px; }\napp-home-page .program-left-img {\n    text-align: center; }\napp-home-page .program-left-img img {\n    max-width: 561px;\n    width: 464px; }\napp-home-page .single-lst-content {\n    color: #fff; }\napp-home-page .lft-icon {\n    position: absolute;\n    left: 0; }\napp-home-page .lft-icon i {\n    width: 50px;\n    height: 50px;\n    display: inline-block;\n    background: #2b57f5;\n    background: linear-gradient(135deg, #2b57f5 0%, #46bcf4 100%, #2989d8 100%);\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#2b57f5', endColorstr='#2989d8',GradientType=1 );\n    text-align: center;\n    line-height: 50px;\n    border-radius: 50%; }\napp-home-page .lft-icon i img {\n    max-width: 35px;\n    width: 28px; }\napp-home-page .single-item-list {\n    position: relative; }\napp-home-page .single-lst-content {\n    padding-left: 73px; }\napp-home-page .single-item-list {\n    margin-bottom: 38px;\n    height: 93px; }\napp-home-page .single-lst-content p {\n    font-size: 15px;\n    color: #aeafff;\n    line-height: 29px; }\napp-home-page .sep {\n    position: relative; }\napp-home-page .sep:after {\n    position: absolute;\n    left: 50%;\n    width: 1px;\n    height: 82px;\n    background: #57a0f6;\n    content: ''; }\napp-home-page .graph-2-left-text {\n    color: #aeafff;\n    font-size: 15px; }\napp-home-page .single-gp-text-all {\n    position: absolute;\n    left: 0;\n    margin-top: -13px; }\napp-home-page .single-grp-t-text {\n    position: relative; }\napp-home-page .single-grp-t-text p {\n    padding-left: 43px;\n    line-height: 29px; }\napp-home-page .single-gp-text-all span {\n    font-size: 31px;\n    color: #46bdf4;\n    font-weight: 800; }\napp-home-page .single-grp-t-text {\n    margin-bottom: 24px; }\napp-home-page .program-section-area.graph-2 {\n    background: #000537; }\napp-home-page .graph-2-left-text {\n    margin-top: 164px; }\napp-home-page .graph-2 .program-left-img {\n    margin-top: 111px; }\napp-home-page .solution-area-section {\n    background: #0a1992;\n    padding: 80px 0; }\napp-home-page .single-solutions {\n    text-align: center;\n    color: #aeafff;\n    line-height: 27px; }\napp-home-page .sl-textt h3 {\n    font-size: 20px;\n    font-weight: 600;\n    color: #fff; }\napp-home-page .sl-top-icon {\n    margin-bottom: 23px; }\napp-home-page .single-solutions {\n    margin-top: 0px; }\napp-home-page .footer-top-area {\n    background: #000537;\n    padding: 80px 0; }\napp-home-page .single-sponsec-sec {\n    background: #070e47;\n    color: #fff;\n    text-align: center;\n    padding: 120px 0; }\napp-home-page .single-sponsec-sec h1 {\n    font-size: 60px;\n    font-weight: 400;\n    color: #fefefe; }\napp-home-page .single-sponsec-sec {\n    margin-top: 100px; }\napp-home-page .posi-imgg img {\n    width: 1360px;\n    z-index: 9;\n    margin: 0 auto;\n    position: absolute;\n    left: 50%;\n    margin-left: -680px;\n    top: 179px; }\napp-home-page .footer-top-area {\n    position: relative; }\napp-home-page .footer-top-area {\n    padding-bottom: 250px; }\napp-home-page .footer-area-section {\n    background: #071998;\n    padding: 60px 0; }\napp-home-page .footer-lnk-list li {\n    list-style: none; }\napp-home-page .footer-lnk-list li a {\n    color: #fff;\n    font-size: 19px;\n    font-weight: 500;\n    line-height: 39px; }\napp-home-page .footer-lnk-list h3 {\n    color: #fff;\n    font-size: 24px;\n    font-weight: 500; }\napp-home-page .footer-sub-form input[type='text'] {\n    width: 236px;\n    border: 1px solid #8691c8;\n    background: #1c3097;\n    color: #fff;\n    padding: 11px 8px;\n    font-size: 13px; }\napp-home-page .footer-sub-form input[type='submit'] {\n    background: #2b57f5;\n    background: linear-gradient(135deg, #2b57f5 0%, #46bcf4 100%, #2989d8 100%);\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#2b57f5', endColorstr='#2989d8',GradientType=1 );\n    color: #fff;\n    text-transform: uppercase;\n    font-weight: 600;\n    padding: 11px 8px;\n    border: none;\n    font-size: 13px;\n    width: 107px;\n    margin-left: 8px;\n    border-radius: 17px; }\napp-home-page .graph-img img {\n    width: 100%; }\napp-home-page .text-red {\n    color: red; }\napp-home-page .text-green {\n    color: green; }\napp-home-page .text-white {\n    color: white; }\n"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(router, http) {
        this.router = router;
        this.http = http;
        this.owlConfig = {
            items: 4,
            navigation: false,
            dots: false,
            loop: true,
            autoplay: true,
            autoplayTimeout: 1500,
            autoplaySpeed: 7000,
            autoplayHoverPause: true,
            slideTransition: 'linear',
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 3
                },
                1000: {
                    items: 4
                }
            }
        };
        this.tickers = [];
    }
    HomePage.prototype.ngOnInit = function () {
        // this.http.get('http://localhost/sistemkoin/api/public/api/market/coin_pair?locale=en').subscribe(res => {
        //     var deger = (<any>res).data;
        //     var text = '';
        //     var paraArray = new Array();
        //     var i;
        //     deger.forEach(value => {
        //         if (value.market_coin == 'TL') {
        //             paraArray.push(value);
        //         }
        //     });
        //
        //     var color;
        //     for (i = 0; i < paraArray.length; i++) {
        //         if (parseFloat(paraArray[i].change) <= 0) {
        //             color = 'text-red';
        //         } else {
        //             color = 'text-green';
        //         }
        //         text =
        //             '<div class="grp-left-text"><h5 class="text-white">' +
        //             paraArray[i].coin +
        //             '/' +
        //             paraArray[i].market_coin +
        //             ' <span class="' +
        //             color +
        //             '">' +
        //             paraArray[i].change +
        //             '%</span></h5><h5>' +
        //             paraArray[i].last_price +
        //             ' <span>' +
        //             paraArray[i].market_coin +
        //             '</span></h5><h6>Volume:<span>' +
        //             paraArray[i].volume +
        //             '</span> ' +
        //             paraArray[i].coin +
        //             '</h6></div>';
        //         this.tickers.push(text);
        //     }
        // });
    };
    HomePage.prototype.ngAfterViewInit = function () {
    };
    HomePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home-page',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], HomePage);
    return HomePage;
}());



/***/ }),

/***/ "./src/app/layout/layout.page.html":
/*!*****************************************!*\
  !*** ./src/app/layout/layout.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\r\n    <nav class=\"navbar navbar-expand-lg\">\r\n        <a class=\"brand\">\r\n            <img src=\"/assets/img/logo.png\" alt=\"logo\"/>\r\n        </a>\r\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\r\n                aria-controls=\"navbarSupportedContent\"\r\n                aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n            <span class=\"navbar-toggler-icon\"></span>\r\n        </button>\r\n\r\n        <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n            <ul class=\"navbar-nav mr-auto\">\r\n                <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\r\n                    <a class=\"nav-link white-br\" [routerLink]=\"'/market'\">\r\n                        <img src=\"/assets/icon/exchange.png\" alt=\"exchange\">{{'HEADER.EXCHANGE' | translate}}</a>\r\n                </li>\r\n                <!--<li class=\"nav-item\" [routerLinkActive]=\"['active']\">-->\r\n                    <!--<a class=\"nav-link white-br\" [routerLink]=\"'/dashboard'\">-->\r\n                        <!--<img src=\"/assets/icon/labs.png\" alt=\"exchange\">{{'HEADER.Labs' | translate}}</a>-->\r\n                <!--</li>-->\r\n                <!--<li class=\"nav-item\" [routerLinkActive]=\"['active']\">-->\r\n                    <!--<a class=\"nav-link white-br\" [routerLink]=\"'/dashboard'\">-->\r\n                        <!--<img src=\"/assets/icon/launchpad.png\" alt=\"exchange\">{{'HEADER.LaunchPad' | translate}} </a>-->\r\n                <!--</li>-->\r\n                <!--<li class=\"nav-item\" [routerLinkActive]=\"['active']\">-->\r\n                    <!--<a class=\"nav-link\" [routerLink]=\"'/dashboard'\">-->\r\n                        <!--<img src=\"/assets/icon/info.png\" alt=\"exchange\">{{'HEADER.Info' | translate}}</a>-->\r\n                <!--</li>-->\r\n            </ul>\r\n            <ul class=\"navbar-nav\">\r\n                <li class=\"nav-item\" [routerLinkActive]=\"['active']\" *ngIf=\"!settings.getAppSetting('is_loggedin')\">\r\n                    <div class=\"nav-link grey-br\">\r\n                        <a class=\"cursor-pointer\" (click)=\"onClickLogin()\">\r\n                            <strong>{{'HEADER.LOGIN' | translate}}</strong>\r\n                        </a>\r\n                        <span class=\"text-grey mx-1\">{{'HEADER.OR' | translate}}</span>\r\n                        <a class=\"cursor-pointer\" (click)=\"onClickSignup()\">\r\n                            <strong class=\"text-yellow\">{{'HEADER.REGISTER' | translate}}</strong>\r\n                        </a>\r\n                    </div>\r\n                </li>\r\n                <li class=\"nav-item\" *ngIf=\"settings.getAppSetting('is_loggedin')\">\r\n                    <a class=\"nav-link dropdown-toggle\" href=\"#\" role=\"button\"\r\n                       data-toggle=\"dropdown\" aria-haspopup=\"true\"\r\n                       aria-expanded=\"false\">\r\n                        {{'HEADER.WALLET' | translate}}\r\n                    </a>\r\n                    <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n                        <a class=\"dropdown-item\" [routerLink]=\"['/balance']\">\r\n                            {{'HEADER.BALANCE' | translate}}\r\n                        </a>\r\n                        <a class=\"dropdown-item\" [routerLink]=\"['/deposit']\">\r\n                            {{'HEADER.DEPOSIT' | translate}}\r\n                        </a>\r\n                        <a class=\"dropdown-item\" [routerLink]=\"['/withdraw']\">\r\n                            {{'HEADER.WITHDRAW' | translate}}\r\n                        </a>\r\n                        <a class=\"dropdown-item\" [routerLink]=\"['/transactions']\">\r\n                            {{'HEADER.TRANSACTION_HISTORY' | translate}}\r\n                        </a>\r\n                    </div>\r\n                </li>\r\n                <li class=\"nav-item grey-br\" [routerLinkActive]=\"['active']\" *ngIf=\"settings.getAppSetting('is_loggedin')\">\r\n                    <a class=\"nav-link dropdown-toggle\" href=\"#\" role=\"button\"\r\n                       data-toggle=\"dropdown\" aria-haspopup=\"true\"\r\n                       aria-expanded=\"false\">\r\n                        {{'HEADER.FINANCIAL_TRANSACTION' | translate}}\r\n                    </a>\r\n                    <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n                        <a class=\"dropdown-item\" [routerLink]=\"['/tlwallet']\">\r\n                            {{'HEADER.TL_WALLET' | translate}}\r\n                        </a>\r\n                        <a class=\"dropdown-item\" [routerLink]=\"['/usdwallet']\">\r\n                            {{'HEADER.USD_WALLET' | translate}}\r\n                        </a>\r\n                        <a class=\"dropdown-item\" [routerLink]=\"['/eurowallet']\">\r\n                            {{'HEADER.EURO_WALLET' | translate}}\r\n                        </a>\r\n                    </div>\r\n                </li>\r\n                <li class=\"nav-item\" *ngIf=\"settings.getAppSetting('is_loggedin')\">\r\n                    <a class=\"nav-link dropdown-toggle grey-br\" href=\"#\" role=\"button\"\r\n                       data-toggle=\"dropdown\" aria-haspopup=\"true\"\r\n                       aria-expanded=\"false\">\r\n                        <i class=\"fa fa-user-circle\"></i> {{settings.getUserSetting('name')}}\r\n                    </a>\r\n                    <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n                        <a class=\"dropdown-item\" [routerLink]=\"['/profile']\">\r\n                            {{'HEADER.MY_PROFILE' | translate}}\r\n                        </a>\r\n                        <hr/>\r\n                        <a class=\"dropdown-item\" (click)=\"logout()\">\r\n                            {{'HEADER.LOGOUT' | translate}}\r\n                        </a>\r\n                    </div>\r\n                </li>\r\n                <li class=\"nav-item dropdown cursor-pointer\">\r\n                    <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\"\r\n                       data-toggle=\"dropdown\" aria-haspopup=\"true\"\r\n                       aria-expanded=\"false\">\r\n                        <i class=\"flag-icon {{currentLang.flagIcon}}\"></i> {{currentLang.text}}\r\n                    </a>\r\n                    <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n                        <a class=\"dropdown-item\" *ngFor=\"let lang of translator.getLanguages()\" (click)=\"setLang(lang.code)\">\r\n                            <i class=\"flag-icon {{lang.flagIcon}}\"></i>\r\n                            {{lang.text}}\r\n                        </a>\r\n                    </div>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </nav>\r\n</header>\r\n<router-outlet></router-outlet>\r\n<layout-footer></layout-footer>"

/***/ }),

/***/ "./src/app/layout/layout.page.scss":
/*!*****************************************!*\
  !*** ./src/app/layout/layout.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header,\nfooter {\n  color: white; }\n\nheader .brand {\n  margin-right: 35px; }\n\nheader .navbar {\n  padding: 10px 27px; }\n\nheader .nav-link {\n  color: white;\n  font-size: 16px;\n  padding: 8px 10px; }\n\nheader .fa,\nheader img {\n  margin-right: 0.5rem; }\n\nheader .white-br {\n  border-right: 1px solid white; }\n\nheader .grey-br {\n  border-right: 1px solid #9c9c9c; }\n\nfooter {\n  padding: 27px 40px; }\n\nfooter a,\n  footer .nav-link {\n    color: white; }\n\n.social-icons a {\n  margin-right: 1rem; }\n\n.nav-item {\n  position: relative; }\n\n.navbar-nav .dropdown-menu {\n  left: initial;\n  right: 0; }\n"

/***/ }),

/***/ "./src/app/layout/layout.page.ts":
/*!***************************************!*\
  !*** ./src/app/layout/layout.page.ts ***!
  \***************************************/
/*! exports provided: LayoutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutPage", function() { return LayoutPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_translator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/translator.service */ "./src/app/services/translator.service.ts");
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/settings.service */ "./src/app/services/settings.service.ts");
/* harmony import */ var _services_pusher_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/pusher.service */ "./src/app/services/pusher.service.ts");
/* harmony import */ var _services_accountApi_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/accountApi.service */ "./src/app/services/accountApi.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LayoutPage = /** @class */ (function () {
    function LayoutPage(router, settings, translator, accountApi, pusher) {
        this.router = router;
        this.settings = settings;
        this.translator = translator;
        this.accountApi = accountApi;
        this.pusher = pusher;
        this.currentLang = {};
    }
    LayoutPage.prototype.ngOnInit = function () {
        this.currentLang = this.translator.getCurrentLang();
    };
    LayoutPage.prototype.ngAfterViewInit = function () {
    };
    LayoutPage.prototype.setLang = function (code) {
        this.translator.useLanguage(code);
        this.currentLang = this.translator.getCurrentLang();
    };
    LayoutPage.prototype.onClickLogin = function () {
        this.router.navigate(['login']);
    };
    LayoutPage.prototype.onClickSignup = function () {
        this.router.navigate(['signup']);
    };
    LayoutPage.prototype.logout = function () {
        this.accountApi.logout({}).subscribe(function (res) {
        });
        this.settings.setAppSetting('is_loggedin', false);
        this.settings.user = {};
        this.settings.setStorage('token', false);
        this.pusher.disconnect();
        this.router.navigate(['/login']);
    };
    LayoutPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./layout.page.html */ "./src/app/layout/layout.page.html"),
            styles: [__webpack_require__(/*! ./layout.page.scss */ "./src/app/layout/layout.page.scss")],
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"],
            _services_translator_service__WEBPACK_IMPORTED_MODULE_2__["TranslatorService"],
            _services_accountApi_service__WEBPACK_IMPORTED_MODULE_5__["AccountApiService"],
            _services_pusher_service__WEBPACK_IMPORTED_MODULE_4__["PusherService"]])
    ], LayoutPage);
    return LayoutPage;
}());



/***/ }),

/***/ "./src/app/services/accountApi.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/accountApi.service.ts ***!
  \************************************************/
/*! exports provided: AccountApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountApiService", function() { return AccountApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.service */ "./src/app/services/api.service.ts");
/**
 * Created by ApolloYr on 11/17/2017.
 */
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AccountApiService = /** @class */ (function (_super) {
    __extends(AccountApiService, _super);
    function AccountApiService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AccountApiService.prototype.getAccountInfo = function () {
        return this.get('/account', {});
    };
    AccountApiService.prototype.getAccountBalance = function () {
        return this.get('/account/balance', {});
    };
    AccountApiService.prototype.sendAuthCode = function () {
        return this.post('/security/send/auth/code', {});
    };
    AccountApiService.prototype.changePassword = function (data) {
        return this.post('/change_password', data);
    };
    AccountApiService.prototype.getAccountBankInfo = function (data) {
        return this.get('/account/bank', data);
    };
    AccountApiService.prototype.saveAccountBankInfo = function (data) {
        return this.post('/account/bank', data);
    };
    // profile
    AccountApiService.prototype.getProfile = function (data) {
        return this.get('/profile', data);
    };
    AccountApiService.prototype.getVerifyData = function (data) {
        return this.get('/verifydata', data);
    };
    AccountApiService.prototype.setVerifyData = function (data) {
        return this.post('/verifydata', data);
    };
    AccountApiService.prototype.getLoginHistory = function (data) {
        return this.get('/login_history', data);
    };
    AccountApiService.prototype.logout = function (data) {
        return this.post('/account/logout', data);
    };
    AccountApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], AccountApiService);
    return AccountApiService;
}(_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]));



/***/ }),

/***/ "./src/app/services/api.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _translator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./translator.service */ "./src/app/services/translator.service.ts");
/* harmony import */ var _settings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./settings.service */ "./src/app/services/settings.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/**
 * Created by ApolloYr on 11/17/2017.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ApiService = /** @class */ (function () {
    function ApiService(http, settings, translator) {
        this.http = http;
        this.settings = settings;
        this.translator = translator;
    }
    ApiService.prototype.createAuthorizationHeader = function () {
        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Authorization', 'Bearer ' + this.settings.getStorage('token'));
    };
    ApiService.prototype.get = function (url, data) {
        var _this = this;
        var headers = this.createAuthorizationHeader();
        data.locale = this.translator.getCurrentLangCode();
        return this.http.get(this.settings.apiUrl + url, {
            headers: headers,
            params: data
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) { return _this.handleError(_this, error); }));
    };
    ApiService.prototype.post = function (url, data) {
        var _this = this;
        var headers = this.createAuthorizationHeader();
        data.locale = this.translator.getCurrentLangCode();
        return this.http.post(this.settings.apiUrl + url, data, {
            headers: headers
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) { return _this.handleError(_this, error); }));
    };
    ApiService.prototype.put = function (url, data) {
        var _this = this;
        var headers = this.createAuthorizationHeader();
        data.locale = this.translator.getCurrentLangCode();
        return this.http.put(this.settings.apiUrl + url, data, {
            headers: headers
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) { return _this.handleError(_this, error); }));
    };
    ApiService.prototype.handleError = function (_parnet, error) {
        if ((error.status == 401 || error.status == 400) && error.url && !error.url.endsWith('/login')) {
            console.log('unauthorized');
            if (_parnet.settings)
                this.settings.setStorage('token', false);
            if (_parnet.settings)
                this.settings.setAppSetting('is_loggedin', false);
            _parnet.router.navigate(['/']);
        }
        // In a real world app, you might use a remote logging infrastructure
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error.statusText);
    };
    ApiService.prototype.uploadFile = function (file) {
        var _this = this;
        var headers = this.createAuthorizationHeader();
        var formData = new FormData();
        formData.append("file", file, file.name);
        return this.http.post(this.settings.apiUrl + '/upload/file', formData, {
            headers: headers
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) { return _this.handleError(_this, error); }));
    };
    // Currency Rate
    ApiService.prototype.getCurrencyRate = function () {
        return this.get('/currency_rate', {});
    };
    ApiService.prototype.getSystemSettings = function (data) {
        return this.get('/settings/all', data);
    };
    // Bank
    ApiService.prototype.getBanks = function (data) {
        return this.get('/bank', data);
    };
    ApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _settings_service__WEBPACK_IMPORTED_MODULE_4__["SettingsService"],
            _translator_service__WEBPACK_IMPORTED_MODULE_3__["TranslatorService"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/services/authcheck.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/authcheck.service.ts ***!
  \***********************************************/
/*! exports provided: AuthcheckService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthcheckService", function() { return AuthcheckService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings.service */ "./src/app/services/settings.service.ts");
/* harmony import */ var _pusher_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pusher.service */ "./src/app/services/pusher.service.ts");
/* harmony import */ var _system_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./system.service */ "./src/app/services/system.service.ts");
/* harmony import */ var _accountApi_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./accountApi.service */ "./src/app/services/accountApi.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by ApolloYr on 11/17/2017.
 */






var AuthcheckService = /** @class */ (function () {
    function AuthcheckService(router, settings, api, pusherService, system, pusher) {
        this.router = router;
        this.settings = settings;
        this.api = api;
        this.pusherService = pusherService;
        this.system = system;
        this.pusher = pusher;
    }
    AuthcheckService.prototype.resolve = function (route, state) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.settings.getUserSetting('email')) {
                resolve(true);
            }
            else if (_this.settings.getStorage('token')) {
                _this.api.getAccountInfo().subscribe(function (res) {
                    if (res.success) {
                        _this.settings.setAppSetting('is_loggedin', true);
                        _this.settings.setUserSetting('user_id', res.user_id);
                        _this.settings.setUserSetting('email', res.email);
                        _this.settings.setUserSetting('account_verified', res.account_verified);
                        _this.settings.setUserSetting('name', res.name);
                        _this.settings.setUserSetting('balance', res.balance);
                        _this.settings.setUserSetting('phone_number', res.phone_number);
                        _this.settings.setUserSetting('ref_code', res.ref_code);
                        _this.settings.setAppSetting('is_loggedin', true);
                        _this.system.init();
                        _this.pusher.connect();
                        resolve(true);
                    }
                    else {
                        resolve(true);
                    }
                }, function (err) {
                    _this.settings.setStorage('token', false);
                    resolve(true);
                });
            }
            else {
                resolve(true);
            }
        });
    };
    AuthcheckService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _settings_service__WEBPACK_IMPORTED_MODULE_2__["SettingsService"],
            _accountApi_service__WEBPACK_IMPORTED_MODULE_5__["AccountApiService"],
            _pusher_service__WEBPACK_IMPORTED_MODULE_3__["PusherService"],
            _system_service__WEBPACK_IMPORTED_MODULE_4__["SystemService"],
            _pusher_service__WEBPACK_IMPORTED_MODULE_3__["PusherService"]])
    ], AuthcheckService);
    return AuthcheckService;
}());



/***/ }),

/***/ "./src/app/services/authguard.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/authguard.service.ts ***!
  \***********************************************/
/*! exports provided: AuthguardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthguardService", function() { return AuthguardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings.service */ "./src/app/services/settings.service.ts");
/* harmony import */ var _balance_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./balance.service */ "./src/app/services/balance.service.ts");
/* harmony import */ var _pusher_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pusher.service */ "./src/app/services/pusher.service.ts");
/* harmony import */ var _system_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./system.service */ "./src/app/services/system.service.ts");
/* harmony import */ var _accountApi_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./accountApi.service */ "./src/app/services/accountApi.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by ApolloYr on 11/17/2017.
 */







var AuthguardService = /** @class */ (function () {
    function AuthguardService(router, settings, balance, pusher, system, accountApi) {
        this.router = router;
        this.settings = settings;
        this.balance = balance;
        this.pusher = pusher;
        this.system = system;
        this.accountApi = accountApi;
    }
    AuthguardService.prototype.resolve = function (route, state) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.settings.getAppSetting('is_loggedin')) {
                _this.canAccess(state.url, _this.settings.getUserSetting('role')) ? resolve(true) : reject('no privillege');
            }
            else if (_this.settings.getStorage('token')) {
                _this.accountApi.getAccountInfo().subscribe(function (res) {
                    if (res.success) {
                        _this.settings.setAppSetting('is_loggedin', true);
                        _this.settings.setUserSetting('user_id', res.user_id);
                        _this.settings.setUserSetting('email', res.email);
                        _this.settings.setUserSetting('account_verified', res.account_verified);
                        _this.settings.setUserSetting('name', res.name);
                        _this.settings.setUserSetting('balance', res.balance);
                        _this.settings.setUserSetting('phone_number', res.phone_number);
                        _this.settings.setUserSetting('ref_code', res.ref_code);
                        _this.settings.setAppSetting('is_loggedin', true);
                        _this.system.init();
                        _this.pusher.connect();
                        resolve(true);
                    }
                    else {
                        resolve(false);
                    }
                }, function (err) {
                    reject('information is invalid');
                    _this.settings.setStorage('token', false);
                    _this.router.navigate(['/login']);
                });
            }
            else {
                reject('not logged in');
                _this.router.navigate(['/login']);
            }
        });
    };
    AuthguardService.prototype.canAccess = function (url, role) {
        return true;
    };
    AuthguardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _settings_service__WEBPACK_IMPORTED_MODULE_2__["SettingsService"],
            _balance_service__WEBPACK_IMPORTED_MODULE_3__["BalanceService"],
            _pusher_service__WEBPACK_IMPORTED_MODULE_4__["PusherService"],
            _system_service__WEBPACK_IMPORTED_MODULE_5__["SystemService"],
            _accountApi_service__WEBPACK_IMPORTED_MODULE_6__["AccountApiService"]])
    ], AuthguardService);
    return AuthguardService;
}());



/***/ }),

/***/ "./src/app/services/balance.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/balance.service.ts ***!
  \*********************************************/
/*! exports provided: BalanceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BalanceService", function() { return BalanceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _settings_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings.service */ "./src/app/services/settings.service.ts");
/* harmony import */ var _coinApi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./coinApi.service */ "./src/app/services/coinApi.service.ts");
/**
 * Created by ApolloYr on 11/17/2017.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BalanceService = /** @class */ (function () {
    function BalanceService(coinApi, settings) {
        this.coinApi = coinApi;
        this.settings = settings;
    }
    BalanceService.prototype.init = function () {
    };
    BalanceService.prototype.getCoinBalance = function (coin) {
        var _this = this;
        this.coinApi.getBalance(coin, {}).subscribe(function (res) {
            if (res.success) {
                _this.settings.setBalance(coin, res.balance);
            }
            else {
            }
        }, function (err) {
        });
    };
    BalanceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_coinApi_service__WEBPACK_IMPORTED_MODULE_2__["CoinApiService"],
            _settings_service__WEBPACK_IMPORTED_MODULE_1__["SettingsService"]])
    ], BalanceService);
    return BalanceService;
}());



/***/ }),

/***/ "./src/app/services/base58.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/base58.service.ts ***!
  \********************************************/
/*! exports provided: Base58Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Base58Service", function() { return Base58Service; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/**
 * Created by ApolloYr on 11/17/2017.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Base58Service = /** @class */ (function () {
    function Base58Service(http) {
        this.http = http;
    }
    /* Convert a hex char to value */
    Base58Service.prototype.hexChar2byte = function (c) {
        var d = 0;
        if (c >= 'A' && c <= 'F') {
            d = c.charCodeAt(0) - 'A'.charCodeAt(0) + 10;
        }
        else if (c >= 'a' && c <= 'f') {
            d = c.charCodeAt(0) - 'a'.charCodeAt(0) + 10;
        }
        else if (c >= '0' && c <= '9') {
            d = c.charCodeAt(0) - '0'.charCodeAt(0);
        }
        return d;
    };
    /* Check if a char is hex char */
    Base58Service.prototype.isHexChar = function (c) {
        if ((c >= 'A' && c <= 'F') ||
            (c >= 'a' && c <= 'f') ||
            (c >= '0' && c <= '9')) {
            return 1;
        }
        return 0;
    };
    /* Convert HEX string to byte array */
    Base58Service.prototype.hexStr2byteArray = function (str) {
        var byteArray = Array();
        var d = 0;
        var i = 0;
        var j = 0;
        var k = 0;
        for (i = 0; i < str.length; i++) {
            var c = str.charAt(i);
            if (this.isHexChar(c)) {
                d <<= 4;
                d += this.hexChar2byte(c);
                j++;
                if (0 == (j % 2)) {
                    byteArray[k++] = d;
                    d = 0;
                }
            }
        }
        return byteArray;
    };
    /* Convert a byte to string */
    Base58Service.prototype.byte2hexStr = function (byte) {
        var hexByteMap = "0123456789ABCDEF";
        var str = "";
        str += hexByteMap.charAt(byte >> 4);
        str += hexByteMap.charAt(byte & 0x0f);
        return str;
    };
    /* Convert byte arry to HEX string */
    Base58Service.prototype.byteArray2hexStr = function (byteArray) {
        var str = "";
        var i;
        for (i = 0; i < (byteArray.length - 1); i++) {
            str += this.byte2hexStr(byteArray[i]);
        }
        str += this.byte2hexStr(byteArray[i]);
        return str;
    };
    Base58Service.prototype.SHA256 = function (msgBytes) {
        var shaObj = new jsSHA("SHA-256", "HEX");
        var msgHex = this.byteArray2hexStr(msgBytes);
        shaObj.update(msgHex);
        var hashHex = shaObj.getHash("HEX");
        var hashBytes = this.hexStr2byteArray(hashHex);
        return hashBytes;
    };
    Base58Service.prototype.encode58 = function (buffer) {
        if (buffer.length === 0) {
            return '';
        }
        var BASE = 58;
        var ALPHABET = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
        var i, j, digits = [0];
        for (i = 0; i < buffer.length; i++) {
            for (j = 0; j < digits.length; j++) {
                digits[j] <<= 8;
            }
            digits[0] += buffer[i];
            var carry = 0;
            for (j = 0; j < digits.length; ++j) {
                digits[j] += carry;
                carry = (digits[j] / BASE) | 0;
                digits[j] %= BASE;
            }
            while (carry) {
                digits.push(carry % BASE);
                carry = (carry / BASE) | 0;
            }
        }
        // deal with leading zeros
        for (i = 0; buffer[i] === 0 && i < buffer.length - 1; i++) {
            digits.push(0);
        }
        return digits.reverse().map(function (digit) {
            return ALPHABET[digit];
        }).join('');
    };
    Base58Service.prototype.getBase58CheckAddress = function (addressBytes) {
        var hash0 = this.SHA256(addressBytes);
        var hash1 = this.SHA256(hash0);
        var checkSum = hash1.slice(0, 4);
        checkSum = addressBytes.concat(checkSum);
        var base58Check = this.encode58(checkSum);
        return base58Check;
    };
    Base58Service.prototype.encode = function (src) {
        if (src.length < 2 || (src.length & 1) != 0) {
            alert("Input length error!");
            return;
        }
        var bytes = this.hexStr2byteArray(src);
        return this.getBase58CheckAddress(bytes);
    };
    Base58Service.prototype.decode58 = function (string) {
        if (string.length === 0) {
            return [];
        }
        var BASE = 58;
        var ALPHABET = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
        var ALPHABET_MAP = {};
        for (var i_1 = 0; i_1 < ALPHABET.length; i_1++) {
            ALPHABET_MAP[ALPHABET.charAt(i_1)] = i_1;
        }
        var i, j, bytes = [0];
        for (i = 0; i < string.length; i++) {
            var c = string[i];
            if (!(c in ALPHABET_MAP)) {
                throw new Error('Non-base58 character');
            }
            for (j = 0; j < bytes.length; j++) {
                bytes[j] *= BASE;
            }
            bytes[0] += ALPHABET_MAP[c];
            var carry = 0;
            for (j = 0; j < bytes.length; ++j) {
                bytes[j] += carry;
                carry = bytes[j] >> 8;
                bytes[j] &= 0xff;
            }
            while (carry) {
                bytes.push(carry & 0xff);
                carry >>= 8;
            }
        }
        // deal with leading zeros
        for (i = 0; string[i] === '1' && i < string.length - 1; i++) {
            bytes.push(0);
        }
        return bytes.reverse();
    };
    Base58Service.prototype.decodeBase58Address = function (base58Sting) {
        var zeroAddress = this.hexStr2byteArray("000000000000000000000000000000000000000000");
        if (typeof (base58Sting) != 'string') {
            return false;
        }
        if (base58Sting.length <= 4) {
            return false;
        }
        var address = this.decode58(base58Sting);
        if (base58Sting.length <= 4) {
            return false;
        }
        var len = address.length;
        var offset = len - 4;
        var checkSum = address.slice(offset);
        address = address.slice(0, offset);
        var hash0 = this.SHA256(address);
        var hash1 = this.SHA256(hash0);
        var checkSum1 = hash1.slice(0, 4);
        if (checkSum[0] == checkSum1[0] && checkSum[1] == checkSum1[1] && checkSum[2]
            == checkSum1[2] && checkSum[3] == checkSum1[3]) {
            return address;
        }
        return false;
    };
    Base58Service.prototype.decode = function (src) {
        var bytes = this.decodeBase58Address(src);
        if (bytes === false) {
            return false;
        }
        return this.byteArray2hexStr(bytes);
    };
    Base58Service = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], Base58Service);
    return Base58Service;
}());



/***/ }),

/***/ "./src/app/services/coinApi.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/coinApi.service.ts ***!
  \*********************************************/
/*! exports provided: CoinApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoinApiService", function() { return CoinApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.service */ "./src/app/services/api.service.ts");
/**
 * Created by ApolloYr on 11/17/2017.
 */
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var CoinApiService = /** @class */ (function (_super) {
    __extends(CoinApiService, _super);
    function CoinApiService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // coin
    CoinApiService.prototype.getCoin = function (data) {
        return this.get('/coins', data);
    };
    // Coin Address
    CoinApiService.prototype.getCoinAddress = function (data) {
        return this.get('/coin/address', data);
    };
    // wallet
    CoinApiService.prototype.getBalance = function (coin, data) {
        return this.get('/' + coin + '/balance', data);
    };
    CoinApiService.prototype.createWallet = function (coin, data) {
        return this.post('/' + coin + '/create/wallet', data);
    };
    CoinApiService.prototype.requestWithdraw = function (coin, data) {
        return this.post('/' + coin + '/withdraw/request', data);
    };
    CoinApiService.prototype.cancelWithdraw = function (coin, data) {
        return this.post('/' + coin + '/withdraw/cancel', data);
    };
    // get Transaction History
    CoinApiService.prototype.getTxHistory = function (coin, data) {
        return this.get('/' + coin + '/tx/history', data);
    };
    // get Deposit History
    CoinApiService.prototype.getDepositHistory = function (coin, data) {
        return this.get('/' + coin + '/deposit/history', data);
    };
    // get Withdraw History
    CoinApiService.prototype.getWithdrawHistory = function (coin, data) {
        return this.get('/' + coin + '/withdraw/history', data);
    };
    // XIN public Key
    CoinApiService.prototype.getXINPublicKey = function (data) {
        return this.get('/XIN/publicKey', data);
    };
    // XRP Main Wallet
    CoinApiService.prototype.getXRPMainWallet = function (data) {
        return this.get('/XRP/main_wallet', data);
    };
    CoinApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], CoinApiService);
    return CoinApiService;
}(_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]));



/***/ }),

/***/ "./src/app/services/countryname.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/countryname.service.ts ***!
  \*************************************************/
/*! exports provided: CountryNameService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryNameService", function() { return CountryNameService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings.service */ "./src/app/services/settings.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/**
 * Created by ApolloYr on 11/17/2017.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CountryNameService = /** @class */ (function () {
    function CountryNameService(api, settings, http) {
        this.api = api;
        this.settings = settings;
        this.http = http;
        this.names = [
            { "name": "Afghanistan", "code": "AF" },
            { "name": "land Islands", "code": "AX" },
            { "name": "Albania", "code": "AL" },
            { "name": "Algeria", "code": "DZ" },
            { "name": "American Samoa", "code": "AS" },
            { "name": "AndorrA", "code": "AD" },
            { "name": "Angola", "code": "AO" },
            { "name": "Anguilla", "code": "AI" },
            { "name": "Antarctica", "code": "AQ" },
            { "name": "Antigua and Barbuda", "code": "AG" },
            { "name": "Argentina", "code": "AR" },
            { "name": "Armenia", "code": "AM" },
            { "name": "Aruba", "code": "AW" },
            { "name": "Australia", "code": "AU" },
            { "name": "Austria", "code": "AT" },
            { "name": "Azerbaijan", "code": "AZ" },
            { "name": "Bahamas", "code": "BS" },
            { "name": "Bahrain", "code": "BH" },
            { "name": "Bangladesh", "code": "BD" },
            { "name": "Barbados", "code": "BB" },
            { "name": "Belarus", "code": "BY" },
            { "name": "Belgium", "code": "BE" },
            { "name": "Belize", "code": "BZ" },
            { "name": "Benin", "code": "BJ" },
            { "name": "Bermuda", "code": "BM" },
            { "name": "Bhutan", "code": "BT" },
            { "name": "Bolivia", "code": "BO" },
            { "name": "Bosnia and Herzegovina", "code": "BA" },
            { "name": "Botswana", "code": "BW" },
            { "name": "Bouvet Island", "code": "BV" },
            { "name": "Brazil", "code": "BR" },
            { "name": "British Indian Ocean Territory", "code": "IO" },
            { "name": "Brunei Darussalam", "code": "BN" },
            { "name": "Bulgaria", "code": "BG" },
            { "name": "Burkina Faso", "code": "BF" },
            { "name": "Burundi", "code": "BI" },
            { "name": "Cambodia", "code": "KH" },
            { "name": "Cameroon", "code": "CM" },
            { "name": "Canada", "code": "CA" },
            { "name": "Cape Verde", "code": "CV" },
            { "name": "Cayman Islands", "code": "KY" },
            { "name": "Central African Republic", "code": "CF" },
            { "name": "Chad", "code": "TD" },
            { "name": "Chile", "code": "CL" },
            { "name": "China", "code": "CN" },
            { "name": "Christmas Island", "code": "CX" },
            { "name": "Cocos (Keeling) Islands", "code": "CC" },
            { "name": "Colombia", "code": "CO" },
            { "name": "Comoros", "code": "KM" },
            { "name": "Congo", "code": "CG" },
            { "name": "Congo, The Democratic Republic of the", "code": "CD" },
            { "name": "Cook Islands", "code": "CK" },
            { "name": "Costa Rica", "code": "CR" },
            { "name": "Cote D'Ivoire", "code": "CI" },
            { "name": "Croatia", "code": "HR" },
            { "name": "Cuba", "code": "CU" },
            { "name": "Cyprus", "code": "CY" },
            { "name": "Czech Republic", "code": "CZ" },
            { "name": "Denmark", "code": "DK" },
            { "name": "Djibouti", "code": "DJ" },
            { "name": "Dominica", "code": "DM" },
            { "name": "Dominican Republic", "code": "DO" },
            { "name": "Ecuador", "code": "EC" },
            { "name": "Egypt", "code": "EG" },
            { "name": "El Salvador", "code": "SV" },
            { "name": "Equatorial Guinea", "code": "GQ" },
            { "name": "Eritrea", "code": "ER" },
            { "name": "Estonia", "code": "EE" },
            { "name": "Ethiopia", "code": "ET" },
            { "name": "Falkland Islands (Malvinas)", "code": "FK" },
            { "name": "Faroe Islands", "code": "FO" },
            { "name": "Fiji", "code": "FJ" },
            { "name": "Finland", "code": "FI" },
            { "name": "France", "code": "FR" },
            { "name": "French Guiana", "code": "GF" },
            { "name": "French Polynesia", "code": "PF" },
            { "name": "French Southern Territories", "code": "TF" },
            { "name": "Gabon", "code": "GA" },
            { "name": "Gambia", "code": "GM" },
            { "name": "Georgia", "code": "GE" },
            { "name": "Germany", "code": "DE" },
            { "name": "Ghana", "code": "GH" },
            { "name": "Gibraltar", "code": "GI" },
            { "name": "Greece", "code": "GR" },
            { "name": "Greenland", "code": "GL" },
            { "name": "Grenada", "code": "GD" },
            { "name": "Guadeloupe", "code": "GP" },
            { "name": "Guam", "code": "GU" },
            { "name": "Guatemala", "code": "GT" },
            { "name": "Guernsey", "code": "GG" },
            { "name": "Guinea", "code": "GN" },
            { "name": "Guinea-Bissau", "code": "GW" },
            { "name": "Guyana", "code": "GY" },
            { "name": "Haiti", "code": "HT" },
            { "name": "Heard Island and Mcdonald Islands", "code": "HM" },
            { "name": "Holy See (Vatican City State)", "code": "VA" },
            { "name": "Honduras", "code": "HN" },
            { "name": "Hong Kong", "code": "HK" },
            { "name": "Hungary", "code": "HU" },
            { "name": "Iceland", "code": "IS" },
            { "name": "India", "code": "IN" },
            { "name": "Indonesia", "code": "ID" },
            { "name": "Iran, Islamic Republic Of", "code": "IR" },
            { "name": "Iraq", "code": "IQ" },
            { "name": "Ireland", "code": "IE" },
            { "name": "Isle of Man", "code": "IM" },
            { "name": "Israel", "code": "IL" },
            { "name": "Italy", "code": "IT" },
            { "name": "Jamaica", "code": "JM" },
            { "name": "Japan", "code": "JP" },
            { "name": "Jersey", "code": "JE" },
            { "name": "Jordan", "code": "JO" },
            { "name": "Kazakhstan", "code": "KZ" },
            { "name": "Kenya", "code": "KE" },
            { "name": "Kiribati", "code": "KI" },
            { "name": "Korea, Democratic People's Republic of", "code": "KP" },
            { "name": "Korea, Republic of", "code": "KR" },
            { "name": "Kuwait", "code": "KW" },
            { "name": "Kyrgyzstan", "code": "KG" },
            { "name": "Lao People's Democratic Republic", "code": "LA" },
            { "name": "Latvia", "code": "LV" },
            { "name": "Lebanon", "code": "LB" },
            { "name": "Lesotho", "code": "LS" },
            { "name": "Liberia", "code": "LR" },
            { "name": "Libyan Arab Jamahiriya", "code": "LY" },
            { "name": "Liechtenstein", "code": "LI" },
            { "name": "Lithuania", "code": "LT" },
            { "name": "Luxembourg", "code": "LU" },
            { "name": "Macao", "code": "MO" },
            { "name": "Macedonia, The Former Yugoslav Republic of", "code": "MK" },
            { "name": "Madagascar", "code": "MG" },
            { "name": "Malawi", "code": "MW" },
            { "name": "Malaysia", "code": "MY" },
            { "name": "Maldives", "code": "MV" },
            { "name": "Mali", "code": "ML" },
            { "name": "Malta", "code": "MT" },
            { "name": "Marshall Islands", "code": "MH" },
            { "name": "Martinique", "code": "MQ" },
            { "name": "Mauritania", "code": "MR" },
            { "name": "Mauritius", "code": "MU" },
            { "name": "Mayotte", "code": "YT" },
            { "name": "Mexico", "code": "MX" },
            { "name": "Micronesia, Federated States of", "code": "FM" },
            { "name": "Moldova, Republic of", "code": "MD" },
            { "name": "Monaco", "code": "MC" },
            { "name": "Mongolia", "code": "MN" },
            { "name": "Montenegro", "code": "ME" },
            { "name": "Montserrat", "code": "MS" },
            { "name": "Morocco", "code": "MA" },
            { "name": "Mozambique", "code": "MZ" },
            { "name": "Myanmar", "code": "MM" },
            { "name": "Namibia", "code": "NA" },
            { "name": "Nauru", "code": "NR" },
            { "name": "Nepal", "code": "NP" },
            { "name": "Netherlands", "code": "NL" },
            { "name": "Netherlands Antilles", "code": "AN" },
            { "name": "New Caledonia", "code": "NC" },
            { "name": "New Zealand", "code": "NZ" },
            { "name": "Nicaragua", "code": "NI" },
            { "name": "Niger", "code": "NE" },
            { "name": "Nigeria", "code": "NG" },
            { "name": "Niue", "code": "NU" },
            { "name": "Norfolk Island", "code": "NF" },
            { "name": "Northern Mariana Islands", "code": "MP" },
            { "name": "Norway", "code": "NO" },
            { "name": "Oman", "code": "OM" },
            { "name": "Pakistan", "code": "PK" },
            { "name": "Palau", "code": "PW" },
            { "name": "Palestinian Territory, Occupied", "code": "PS" },
            { "name": "Panama", "code": "PA" },
            { "name": "Papua New Guinea", "code": "PG" },
            { "name": "Paraguay", "code": "PY" },
            { "name": "Peru", "code": "PE" },
            { "name": "Philippines", "code": "PH" },
            { "name": "Pitcairn", "code": "PN" },
            { "name": "Poland", "code": "PL" },
            { "name": "Portugal", "code": "PT" },
            { "name": "Puerto Rico", "code": "PR" },
            { "name": "Qatar", "code": "QA" },
            { "name": "Reunion", "code": "RE" },
            { "name": "Romania", "code": "RO" },
            { "name": "Russian Federation", "code": "RU" },
            { "name": "RWANDA", "code": "RW" },
            { "name": "Saint Helena", "code": "SH" },
            { "name": "Saint Kitts and Nevis", "code": "KN" },
            { "name": "Saint Lucia", "code": "LC" },
            { "name": "Saint Pierre and Miquelon", "code": "PM" },
            { "name": "Saint Vincent and the Grenadines", "code": "VC" },
            { "name": "Samoa", "code": "WS" },
            { "name": "San Marino", "code": "SM" },
            { "name": "Sao Tome and Principe", "code": "ST" },
            { "name": "Saudi Arabia", "code": "SA" },
            { "name": "Senegal", "code": "SN" },
            { "name": "Serbia", "code": "RS" },
            { "name": "Seychelles", "code": "SC" },
            { "name": "Sierra Leone", "code": "SL" },
            { "name": "Singapore", "code": "SG" },
            { "name": "Slovakia", "code": "SK" },
            { "name": "Slovenia", "code": "SI" },
            { "name": "Solomon Islands", "code": "SB" },
            { "name": "Somalia", "code": "SO" },
            { "name": "South Africa", "code": "ZA" },
            { "name": "South Georgia and the South Sandwich Islands", "code": "GS" },
            { "name": "Spain", "code": "ES" },
            { "name": "Sri Lanka", "code": "LK" },
            { "name": "Sudan", "code": "SD" },
            { "name": "Suriname", "code": "SR" },
            { "name": "Svalbard and Jan Mayen", "code": "SJ" },
            { "name": "Swaziland", "code": "SZ" },
            { "name": "Sweden", "code": "SE" },
            { "name": "Switzerland", "code": "CH" },
            { "name": "Syrian Arab Republic", "code": "SY" },
            { "name": "Taiwan, Province of China", "code": "TW" },
            { "name": "Tajikistan", "code": "TJ" },
            { "name": "Tanzania, United Republic of", "code": "TZ" },
            { "name": "Thailand", "code": "TH" },
            { "name": "Timor-Leste", "code": "TL" },
            { "name": "Togo", "code": "TG" },
            { "name": "Tokelau", "code": "TK" },
            { "name": "Tonga", "code": "TO" },
            { "name": "Trinidad and Tobago", "code": "TT" },
            { "name": "Tunisia", "code": "TN" },
            { "name": "Turkey", "code": "TR" },
            { "name": "Turkmenistan", "code": "TM" },
            { "name": "Turks and Caicos Islands", "code": "TC" },
            { "name": "Tuvalu", "code": "TV" },
            { "name": "Uganda", "code": "UG" },
            { "name": "Ukraine", "code": "UA" },
            { "name": "United Arab Emirates", "code": "AE" },
            { "name": "United Kingdom", "code": "GB" },
            { "name": "United States", "code": "US" },
            { "name": "United States Minor Outlying Islands", "code": "UM" },
            { "name": "Uruguay", "code": "UY" },
            { "name": "Uzbekistan", "code": "UZ" },
            { "name": "Vanuatu", "code": "VU" },
            { "name": "Venezuela", "code": "VE" },
            { "name": "Viet Nam", "code": "VN" },
            { "name": "Virgin Islands, British", "code": "VG" },
            { "name": "Virgin Islands, U.S.", "code": "VI" },
            { "name": "Wallis and Futuna", "code": "WF" },
            { "name": "Western Sahara", "code": "EH" },
            { "name": "Yemen", "code": "YE" },
            { "name": "Zambia", "code": "ZM" },
            { "name": "Zimbabwe", "code": "ZW" }
        ];
    }
    CountryNameService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"],
            _settings_service__WEBPACK_IMPORTED_MODULE_2__["SettingsService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], CountryNameService);
    return CountryNameService;
}());



/***/ }),

/***/ "./src/app/services/financeApi.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/financeApi.service.ts ***!
  \************************************************/
/*! exports provided: FinanceApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinanceApiService", function() { return FinanceApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.service */ "./src/app/services/api.service.ts");
/**
 * Created by ApolloYr on 11/17/2017.
 */
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var FinanceApiService = /** @class */ (function (_super) {
    __extends(FinanceApiService, _super);
    function FinanceApiService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // tl
    FinanceApiService.prototype.financeDeposit = function (currency, data) {
        return this.post('/' + currency + '/deposit', data);
    };
    FinanceApiService.prototype.financeWithdraw = function (currency, data) {
        return this.post('/' + currency + '/withdraw', data);
    };
    FinanceApiService.prototype.getFinanceTransaction = function (currency, data) {
        return this.get('/' + currency + '/transaction', data);
    };
    FinanceApiService.prototype.cancelFinanceTransaction = function (data) {
        return this.post('/transaction/cancel', data);
    };
    // epay
    FinanceApiService.prototype.getEpayReceiveInfo = function (data) {
        return this.post('/epay/receive/info', data);
    };
    FinanceApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], FinanceApiService);
    return FinanceApiService;
}(_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]));



/***/ }),

/***/ "./src/app/services/marketApi.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/marketApi.service.ts ***!
  \***********************************************/
/*! exports provided: MarketApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketApiService", function() { return MarketApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.service */ "./src/app/services/api.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by ApolloYr on 11/17/2017.
 */


var MarketApiService = /** @class */ (function (_super) {
    __extends(MarketApiService, _super);
    function MarketApiService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MarketApiService.prototype.getCoinPairInfo = function (data) {
        return this.get('/market/coin_pair', data);
    };
    MarketApiService.prototype.getUserCoinPairInfo = function (data) {
        return this.get('/market/user/coin_pair', data);
    };
    MarketApiService.prototype.getChartData = function (coin, marketCoin, data) {
        return this.get('/market/chart_data/' + coin + '-' + marketCoin, data);
    };
    // orders
    MarketApiService.prototype.makeBuyOrder = function (coin, marketCoin, data) {
        return this.post('/order/buy/' + coin + '-' + marketCoin, data);
    };
    MarketApiService.prototype.makeSellOrder = function (coin, marketCoin, data) {
        return this.post('/order/sell/' + coin + '-' + marketCoin, data);
    };
    MarketApiService.prototype.getLastOrders = function (coin, marketCoin, data) {
        return this.get('/order/last/' + coin + '-' + marketCoin, data);
    };
    MarketApiService.prototype.getBuyOrders = function (coin, marketCoin, data) {
        return this.get('/order/buy/' + coin + '-' + marketCoin, data);
    };
    MarketApiService.prototype.getSellOrders = function (coin, marketCoin, data) {
        return this.get('/order/sell/' + coin + '-' + marketCoin, data);
    };
    MarketApiService.prototype.getUserAllPastOrders = function (data) {
        return this.get('/order/past/all', data);
    };
    MarketApiService.prototype.getUserAllPendingOrders = function (data) {
        return this.get('/order/pending/all', data);
    };
    MarketApiService.prototype.cancelOrder = function (data) {
        return this.post('/order/delete', data);
    };
    MarketApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], MarketApiService);
    return MarketApiService;
}(_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]));



/***/ }),

/***/ "./src/app/services/notify.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/notify.service.ts ***!
  \********************************************/
/*! exports provided: NotifyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotifyService", function() { return NotifyService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/**
 * Created by ApolloYr on 11/18/2017.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotifyService = /** @class */ (function () {
    function NotifyService() {
    }
    NotifyService.prototype.showSuccess = function (message) {
        // const type = ['', 'info', 'success', 'warning', 'danger', 'rose', 'primary'];
        //
        $.toast({
            heading: 'Success',
            text: message,
            position: 'top-right',
            loaderBg: '#ff6849',
            icon: 'success',
            hideAfter: 3000,
            stack: 6
        });
    };
    NotifyService.prototype.showWarning = function (message) {
        $.toast({
            heading: 'Warning',
            text: message,
            position: 'top-right',
            loaderBg: '#ff6849',
            icon: 'warning',
            hideAfter: 3000,
            stack: 6
        });
    };
    NotifyService.prototype.showError = function (message) {
        $.toast({
            heading: 'Error',
            text: message,
            position: 'top-right',
            loaderBg: '#ff6849',
            icon: 'error',
            hideAfter: 3000,
            stack: 6
        });
    };
    NotifyService.prototype.showInfo = function (message) {
        $.toast({
            heading: 'Notice',
            text: message,
            position: 'top-right',
            loaderBg: '#ff6849',
            icon: 'info',
            hideAfter: 3000,
            stack: 6
        });
    };
    NotifyService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], NotifyService);
    return NotifyService;
}());



/***/ }),

/***/ "./src/app/services/pusher.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/pusher.service.ts ***!
  \********************************************/
/*! exports provided: PusherService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PusherService", function() { return PusherService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var laravel_echo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! laravel-echo */ "./node_modules/laravel-echo/dist/echo.js");
/* harmony import */ var laravel_echo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(laravel_echo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings.service */ "./src/app/services/settings.service.ts");
/* harmony import */ var _balance_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./balance.service */ "./src/app/services/balance.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PusherService = /** @class */ (function () {
    function PusherService(settings, balance) {
        this.settings = settings;
        this.balance = balance;
        this.orderObserver = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    PusherService.prototype.connect = function () {
        var _this = this;
        this.echo = new laravel_echo__WEBPACK_IMPORTED_MODULE_2___default.a({
            broadcaster: 'pusher',
            key: this.settings.PUSHER_APP_KEY,
            cluster: this.settings.PUSHER_APP_CLUSTER,
            authEndpoint: this.settings.siteUrl + "/broadcasting/auth",
            auth: {
                headers: {
                    'Authorization': 'Bearer ' + this.settings.getStorage('token')
                }
            }
        });
        this.echo.private('App.User.' + this.settings.getUserSetting('user_id'))
            .notification(function (notification) {
        });
        this.publicChannel = this.echo.join('public');
        this.publicChannel.here(function () {
            _this.settings.setUserSetting('online', true);
        }).listen('.market_order', function (res) {
            var data = res.data;
            if (data.users.length && data.users.length > 0 && data.users.includes(_this.settings.getUserSetting('user_id'))) {
                _this.balance.getCoinBalance(data.coin);
                _this.balance.getCoinBalance(data.marketCoin);
            }
            _this.orderObserver.next(res.data);
        });
    };
    PusherService.prototype.disconnect = function () {
        this.echo.leave('public');
        this.echo.leave('App.User.' + this.settings.getUserSetting('id'));
    };
    PusherService.prototype.getEcho = function () {
        return this.echo;
    };
    PusherService.prototype.getPublicChannel = function () {
        return this.publicChannel;
    };
    PusherService.prototype.getOrderEvent = function () {
        return this.orderObserver;
    };
    PusherService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"],
            _balance_service__WEBPACK_IMPORTED_MODULE_4__["BalanceService"]])
    ], PusherService);
    return PusherService;
}());



/***/ }),

/***/ "./src/app/services/services.module.ts":
/*!*********************************************!*\
  !*** ./src/app/services/services.module.ts ***!
  \*********************************************/
/*! exports provided: ServicesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesModule", function() { return ServicesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _translator_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./translator.service */ "./src/app/services/translator.service.ts");
/* harmony import */ var _validate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings.service */ "./src/app/services/settings.service.ts");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _userApi_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./userApi.service */ "./src/app/services/userApi.service.ts");
/* harmony import */ var _notify_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notify.service */ "./src/app/services/notify.service.ts");
/* harmony import */ var _pusher_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pusher.service */ "./src/app/services/pusher.service.ts");
/* harmony import */ var _system_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./system.service */ "./src/app/services/system.service.ts");
/* harmony import */ var _coinApi_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./coinApi.service */ "./src/app/services/coinApi.service.ts");
/* harmony import */ var _balance_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./balance.service */ "./src/app/services/balance.service.ts");
/* harmony import */ var _marketApi_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./marketApi.service */ "./src/app/services/marketApi.service.ts");
/* harmony import */ var _accountApi_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./accountApi.service */ "./src/app/services/accountApi.service.ts");
/* harmony import */ var _authguard_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./authguard.service */ "./src/app/services/authguard.service.ts");
/* harmony import */ var _base58_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./base58.service */ "./src/app/services/base58.service.ts");
/* harmony import */ var _financeApi_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./financeApi.service */ "./src/app/services/financeApi.service.ts");
/* harmony import */ var _authcheck_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./authcheck.service */ "./src/app/services/authcheck.service.ts");
/* harmony import */ var _countryname_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./countryname.service */ "./src/app/services/countryname.service.ts");
/**
 * Created by ApolloYr on 11/18/2017.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var ServicesModule = /** @class */ (function () {
    function ServicesModule() {
    }
    ServicesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [],
            declarations: [],
            providers: [
                _translator_service__WEBPACK_IMPORTED_MODULE_1__["TranslatorService"],
                _validate_service__WEBPACK_IMPORTED_MODULE_2__["ValidateService"],
                _settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"],
                _notify_service__WEBPACK_IMPORTED_MODULE_6__["NotifyService"],
                _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
                _userApi_service__WEBPACK_IMPORTED_MODULE_5__["UserApiService"],
                _balance_service__WEBPACK_IMPORTED_MODULE_10__["BalanceService"],
                _pusher_service__WEBPACK_IMPORTED_MODULE_7__["PusherService"],
                _system_service__WEBPACK_IMPORTED_MODULE_8__["SystemService"],
                _coinApi_service__WEBPACK_IMPORTED_MODULE_9__["CoinApiService"],
                _marketApi_service__WEBPACK_IMPORTED_MODULE_11__["MarketApiService"],
                _accountApi_service__WEBPACK_IMPORTED_MODULE_12__["AccountApiService"],
                _authguard_service__WEBPACK_IMPORTED_MODULE_13__["AuthguardService"],
                _base58_service__WEBPACK_IMPORTED_MODULE_14__["Base58Service"],
                _financeApi_service__WEBPACK_IMPORTED_MODULE_15__["FinanceApiService"],
                _authcheck_service__WEBPACK_IMPORTED_MODULE_16__["AuthcheckService"],
                _countryname_service__WEBPACK_IMPORTED_MODULE_17__["CountryNameService"]
            ],
            exports: []
        })
    ], ServicesModule);
    return ServicesModule;
}());



/***/ }),

/***/ "./src/app/services/settings.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/settings.service.ts ***!
  \**********************************************/
/*! exports provided: SettingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsService", function() { return SettingsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by ApolloYr on 11/17/2017.
 */


var SettingsService = /** @class */ (function () {
    function SettingsService() {
        this.PUSHER_APP_KEY = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].pusher_app_key;
        this.PUSHER_APP_CLUSTER = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].pusher_app_cluster;
        this.siteUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].server;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].server + '/api';
        this.ePayReceiveUrl = 'https://www.epay.com/paymentApi/merReceive';
        this.ePayAccount = 'admin@sistemkoin.com';
        this.ePayName = 'Sistemkoin Epay';
        this.ePayMemo = '';
        this.ePayLang = 'EN_US';
        this.ePayEncoding = 'UTF-8';
        this.user = {
            balance: {}
        };
        this.rate = {
            USD: 0,
            EUR: 0
        };
        this.loading = false;
        this.storagePrefix = 'sistemkoin_';
        // User settings
        this.user = {};
        // App Settings
        this.app = {
            name: 'Market'
        };
        this.system = {};
    }
    SettingsService.prototype.getUserSetting = function (name) {
        return this.user[name];
    };
    SettingsService.prototype.setUserSetting = function (name, value) {
        this.user[name] = value;
    };
    SettingsService.prototype.getAppSetting = function (name) {
        return name ? this.app[name] : this.app;
    };
    SettingsService.prototype.setAppSetting = function (name, value) {
        this.app[name] = value;
    };
    SettingsService.prototype.getSystemSetting = function (name) {
        return name ? this.system[name] : this.system;
    };
    SettingsService.prototype.setSystemSetting = function (name, value) {
        if (typeof this.system[name] !== 'undefined') {
            this.system[name] = value;
        }
    };
    SettingsService.prototype.getBalance = function (name) {
        return this.user.balance && this.user.balance[name] ? this.user.balance[name] : 0;
    };
    SettingsService.prototype.setBalance = function (name, value) {
        this.user.balance[name] = value;
    };
    SettingsService.prototype.getUSDRate = function () {
        return this.rate.USD ? this.rate.USD : 0;
    };
    SettingsService.prototype.getEURRate = function () {
        return this.rate.EUR ? this.rate.EUR : 0;
    };
    SettingsService.prototype.clearUserSetting = function () {
        this.setStorage('user', false);
    };
    SettingsService.prototype.getStorage = function (key, defaultVal) {
        try {
            return window.localStorage[this.storagePrefix + key] && JSON.parse(window.localStorage[this.storagePrefix + key]) ? JSON.parse(window.localStorage[this.storagePrefix + key]) : defaultVal || false;
        }
        catch (e) {
            return '';
        }
    };
    SettingsService.prototype.setStorage = function (key, val) {
        window.localStorage.setItem(this.storagePrefix + key, JSON.stringify(val));
    };
    SettingsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], SettingsService);
    return SettingsService;
}());



/***/ }),

/***/ "./src/app/services/system.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/system.service.ts ***!
  \********************************************/
/*! exports provided: SystemService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemService", function() { return SystemService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings.service */ "./src/app/services/settings.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/**
 * Created by ApolloYr on 11/17/2017.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SystemService = /** @class */ (function () {
    function SystemService(api, settings, http) {
        this.api = api;
        this.settings = settings;
        this.http = http;
    }
    SystemService.prototype.init = function () {
        this.getSystemSettings();
        // this.loadRate();
        //
        // let _parent = this;
        // let timeID = setInterval(function () {
        //     _parent.loadRate();
        // }, 60000);
    };
    SystemService.prototype.loadRate = function () {
        var _this = this;
        var _parent = this;
        this.api.getCurrencyRate().subscribe(function (res) {
            if (res.success) {
                _this.settings.rate.USD = res.USD;
                _this.settings.rate.EUR = res.EUR;
            }
        });
    };
    SystemService.prototype.getSystemSettings = function () {
        var _this = this;
        this.api.getSystemSettings({}).subscribe(function (res) {
            if (res.success) {
                _this.settings.system = res.data;
            }
        }, function (err) {
        });
    };
    SystemService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"],
            _settings_service__WEBPACK_IMPORTED_MODULE_2__["SettingsService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], SystemService);
    return SystemService;
}());



/***/ }),

/***/ "./src/app/services/translator.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/translator.service.ts ***!
  \************************************************/
/*! exports provided: TranslatorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslatorService", function() { return TranslatorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/**
 * Created by ApolloYr on 11/17/2017.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TranslatorService = /** @class */ (function () {
    function TranslatorService(translate) {
        this.translate = translate;
        this.defaultLang = 'en';
        this.langs = [
            { code: 'tr', text: 'Turkish', shortName: 'TR', flagIcon: 'flag-icon-tr' },
            { code: 'en', text: 'English', shortName: 'EN', flagIcon: 'flag-icon-gb' },
            { code: 'cn', text: 'Chinese', shortName: 'CN', flagIcon: 'flag-icon-cn' },
            { code: 'es', text: 'Spanish', shortName: 'ES', flagIcon: 'flag-icon-es' },
            { code: 'ru', text: 'Russian', shortName: 'RU', flagIcon: 'flag-icon-ru' },
            { code: 'ae', text: 'Arabic', shortName: 'AE', flagIcon: 'flag-icon-ae' },
            { code: 'in', text: 'Indian', shortName: 'IN', flagIcon: 'flag-icon-in' },
            { code: 'jp', text: 'Japanese', shortName: 'JP', flagIcon: 'flag-icon-jp' },
            { code: 'kr', text: 'Korean', shortName: 'KR', flagIcon: 'flag-icon-kr' },
            { code: 'vn', text: 'Vietnamese', shortName: 'VN', flagIcon: 'flag-icon-vn' },
            { code: 'th', text: 'Thai', shortName: 'TH', flagIcon: 'flag-icon-th' }
        ];
        if (!translate.getDefaultLang())
            translate.setDefaultLang(this.defaultLang);
        if (window.localStorage.getItem('language') && window.localStorage.getItem('language') != '') {
            this.useLanguage(window.localStorage.getItem('language'));
        }
        else {
            this.useLanguage(this.defaultLang);
        }
    }
    TranslatorService.prototype.useLanguage = function (lang) {
        if (lang === void 0) { lang = null; }
        this.currentLang = lang;
        this.translate.use(lang || this.translate.getDefaultLang());
        window.localStorage.setItem('language', lang);
    };
    TranslatorService.prototype.getLanguages = function () {
        return this.langs;
    };
    TranslatorService.prototype.getCurrentLang = function () {
        for (var i = 0; i < this.langs.length; i++) {
            if (this.langs[i].code == this.currentLang) {
                return this.langs[i];
            }
        }
        return {};
    };
    TranslatorService.prototype.getCurrentLangCode = function () {
        return this.currentLang;
    };
    TranslatorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]])
    ], TranslatorService);
    return TranslatorService;
}());



/***/ }),

/***/ "./src/app/services/userApi.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/userApi.service.ts ***!
  \*********************************************/
/*! exports provided: UserApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserApiService", function() { return UserApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.service */ "./src/app/services/api.service.ts");
/**
 * Created by ApolloYr on 11/17/2017.
 */
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var UserApiService = /** @class */ (function (_super) {
    __extends(UserApiService, _super);
    function UserApiService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UserApiService.prototype.login = function (data) {
        return this.post('/login', data);
    };
    UserApiService.prototype.register = function (data) {
        return this.post('/register', data);
    };
    UserApiService.prototype.confirmPassword = function (data) {
        return this.post('/confirm_password', data);
    };
    UserApiService.prototype.resetPassword = function (data) {
        return this.post('/reset_password', data);
    };
    UserApiService.prototype.sendForgotEmail = function (data) {
        return this.post('/account/sendForgotEmail', data);
    };
    UserApiService.prototype.sendActivateEmail = function (data) {
        return this.post('/account/sendActivateEmail', data);
    };
    UserApiService.prototype.confirmResetCode = function (data) {
        return this.post('/confirm_resetcode', data);
    };
    UserApiService.prototype.getUserByRefCode = function (data) {
        return this.get('/refcode/user', data);
    };
    UserApiService.prototype.generateUserG2FSecurityCode = function (data) {
        return this.get('/user/g2fcode/generate', data);
    };
    UserApiService.prototype.sendUserSMSCode = function (data) {
        return this.post('/user/send/sms', data);
    };
    UserApiService.prototype.sendUserEmailCode = function (data) {
        return this.post('/user/send/email', data);
    };
    UserApiService.prototype.confirmCodeAndSetAuth = function (data) {
        return this.post('/user/set/auth', data);
    };
    UserApiService.prototype.confirmCodeAndLogin = function (data) {
        return this.post('/user/confirm/2fcode', data);
    };
    UserApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], UserApiService);
    return UserApiService;
}(_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]));



/***/ }),

/***/ "./src/app/services/validate.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/validate.service.ts ***!
  \**********************************************/
/*! exports provided: ValidateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateService", function() { return ValidateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/**
 * Created by ApolloYr on 11/17/2017.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ValidateService = /** @class */ (function () {
    function ValidateService() {
    }
    ValidateService.prototype.isFieldValid = function (form, field) {
        return !form.get(field).valid && form.get(field).touched;
    };
    ValidateService.prototype.displayFieldCss = function (form, field) {
        return {
            'has-error': this.isFieldValid(form, field),
            'has-feedback': this.isFieldValid(form, field)
        };
    };
    ValidateService.prototype.validateAllFormFields = function (formGroup) {
        var _this = this;
        Object.keys(formGroup.controls).forEach(function (field) {
            var control = formGroup.get(field);
            if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]) {
                control.markAsTouched({ onlySelf: true });
            }
            else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]) {
                _this.validateAllFormFields(control);
            }
        });
    };
    ValidateService.prototype.round = function (value, place) {
        var val = Math.round(value * Math.pow(10, place)) / Math.pow(10, place);
        return val.toFixed(place);
    };
    ValidateService.prototype.floor = function (value, place) {
        var val = Math.floor(value * Math.pow(10, place)) / Math.pow(10, place);
        return val.toFixed(place);
    };
    ValidateService.prototype.isNullOrEmpty = function (value) {
        if (value == null)
            return true;
        if (value == '')
            return true;
        return false;
    };
    ValidateService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
}());



/***/ }),

/***/ "./src/app/shared/components/dialog/modal.dialog.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/dialog/modal.dialog.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@dialog] *ngIf=\"visible\" class=\"dialog\">\r\n    <ng-content></ng-content>\r\n    <button *ngIf=\"closable\" (click)=\"close()\" aria-label=\"Close\" class=\"dialog__close-btn\">X</button>\r\n</div>\r\n<div *ngIf=\"visible\" class=\"overlay\" (click)=\"close()\"></div>"

/***/ }),

/***/ "./src/app/shared/components/dialog/modal.dialog.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/dialog/modal.dialog.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".overlay {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 899; }\n\n.dialog {\n  z-index: 900;\n  position: fixed;\n  overflow-y: initial;\n  top: 120px;\n  left: 0;\n  right: 0;\n  margin-right: auto;\n  margin-left: auto;\n  width: 650px;\n  max-width: 1200px;\n  max-height: 80%;\n  background-color: #fff;\n  padding: 30px 20px 20px 20px;\n  box-shadow: 0 7px 8px -4px rgba(0, 0, 0, 0.2), 0 13px 19px 2px rgba(0, 0, 0, 0.14), 0 5px 24px 4px rgba(0, 0, 0, 0.12); }\n\n@media (min-width: 768px) {\n  .dialog {\n    top: 120px; } }\n\n.dialog__close-btn {\n  border: 0;\n  background: none;\n  color: #2d2d2d;\n  position: absolute;\n  top: 8px;\n  right: 8px;\n  font-size: 1.2em; }\n"

/***/ }),

/***/ "./src/app/shared/components/dialog/modal.dialog.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/shared/components/dialog/modal.dialog.component.ts ***!
  \********************************************************************/
/*! exports provided: ModalDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalDialogComponent", function() { return ModalDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModalDialogComponent = /** @class */ (function () {
    function ModalDialogComponent() {
        this.closable = true;
        this.visibleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ModalDialogComponent.prototype.ngOnInit = function () { };
    ModalDialogComponent.prototype.close = function () {
        if (!this.closable) {
            return;
        }
        this.visible = false;
        this.visibleChange.emit(this.visible);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ModalDialogComponent.prototype, "closable", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ModalDialogComponent.prototype, "visible", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ModalDialogComponent.prototype, "visibleChange", void 0);
    ModalDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'modal-dialog',
            template: __webpack_require__(/*! ./modal.dialog.component.html */ "./src/app/shared/components/dialog/modal.dialog.component.html"),
            styles: [__webpack_require__(/*! ./modal.dialog.component.scss */ "./src/app/shared/components/dialog/modal.dialog.component.scss")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('dialog', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'scale3d(.3, .3, .3)' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(100)
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => void', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(100, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'scale3d(.0, .0, .0)' }))
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [])
    ], ModalDialogComponent);
    return ModalDialogComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/field-error-display/field-error-display.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/shared/components/field-error-display/field-error-display.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".error-msg {\n  color: #a94442;\n}\n.fix-error-icon {\n  top: 27px;\n}"

/***/ }),

/***/ "./src/app/shared/components/field-error-display/field-error-display.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/shared/components/field-error-display/field-error-display.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"displayError\">\n    <!-- <span class=\"glyphicon glyphicon-remove form-control-feedback fix-error-icon\"></span> -->\n    <span class=\"sr-only\">(error)</span>\n    <small class=\"text-danger\">\n        {{ errorMsg }}\n    </small>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/components/field-error-display/field-error-display.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/shared/components/field-error-display/field-error-display.component.ts ***!
  \****************************************************************************************/
/*! exports provided: FieldErrorDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldErrorDisplayComponent", function() { return FieldErrorDisplayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FieldErrorDisplayComponent = /** @class */ (function () {
    function FieldErrorDisplayComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], FieldErrorDisplayComponent.prototype, "errorMsg", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], FieldErrorDisplayComponent.prototype, "displayError", void 0);
    FieldErrorDisplayComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-field-error-display',
            template: __webpack_require__(/*! ./field-error-display.component.html */ "./src/app/shared/components/field-error-display/field-error-display.component.html"),
            styles: [__webpack_require__(/*! ./field-error-display.component.css */ "./src/app/shared/components/field-error-display/field-error-display.component.css")]
        })
    ], FieldErrorDisplayComponent);
    return FieldErrorDisplayComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/layout-footer/layout-footer.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/layout-footer/layout-footer.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\n    <div class=\"row\">\n        <div class=\"col-md-6\">\n            <a class=\"navbar-brand mb-4\" style=\"margin-left:-2px\">\n                <img src=\"/assets/img/logo.png\" alt=\"logo\"/>\n            </a>\n            <div class=\"mb-3 social-icons\">\n                <a href=\"https://www.facebook.com/SistemKoin/\" target=\"_blank\" class=\"font-size24\">\n                    <i class=\"fa fa-facebook\" aria-hidden=\"true\"></i>\n                </a>\n                <a href=\"https://twitter.com/SistemKoin\" target=\"_blank\" class=\"font-size24\">\n                    <i class=\"fa fa-twitter\" aria-hidden=\"true\"></i>\n                </a>\n                <a href=\"https://t.me/sistemkoinofficial\" target=\"_blank\">\n                    <i class=\"fa fa-telegram font-size24\" aria-hidden=\"true\"></i>\n                </a>\n            </div>\n            <p>\n                © 2018 Sistemkoin.com All Rights Reserved\n            </p>\n        </div>\n        <div class=\"col-md-2 mt-md-4\">\n            <ul class=\"navbar-nav mr-auto\">\n                <li class=\"nav-item mb-2\" >\n                    <a class=\"nav-link\" href=\"buycoin\" target=\"_blank\">\n                        {{'FOOTER.HOW_TO_BUY_COIN' | translate}}</a>\n                </li>\n                <li class=\"nav-item mb-2\" >\n                    <a class=\"nav-link\" href=\"overview\" target=\"_blank\">\n                        {{'FOOTER.COIN_OVERVIEW' | translate}}</a>\n                </li>\n                <li class=\"nav-item mb-2 mb-md-0\" >\n                    <a class=\"nav-link\" href=\"sellcoin\" target=\"_blank\">\n                        {{'FOOTER.HOW_TO_SELL_COIN' | translate}}</a>\n                </li>\n            </ul>\n        </div>\n        <div class=\"col-md-2 mt-md-4\">\n            <ul class=\"navbar-nav mr-auto\">\n                <li class=\"nav-item mb-2\" >\n                    <a class=\"nav-link\" href=\"contactus\" target=\"_blank\">\n                        {{'FOOTER.CONTACT_US' | translate}}</a>\n                </li>\n                <li class=\"nav-item mb-2\" >\n                    <a class=\"nav-link\" href=\"https://sistemkoin.com/api/market/ticker\" target=\"_blank\">\n                        {{'FOOTER.API' | translate}}</a>\n                </li>\n                <li class=\"nav-item mb-2 mb-md-0\" >\n                    <a class=\"nav-link\" href=\"terms\" target=\"_blank\">\n                        {{'FOOTER.TERMS_CONDITIONS' | translate}} </a>\n                </li>\n            </ul>\n        </div>\n        <div class=\"col-md-2 mt-md-4\">\n            <ul class=\"navbar-nav mr-auto\">\n                <li class=\"nav-item mb-2\" >\n                    <a class=\"nav-link\" href=\"ucretler\" target=\"_blank\">\n                        {{'FOOTER.COMMISSION' | translate}}</a>\n                </li>\n                <li class=\"nav-item mb-2 mb-md-0\" >\n                    <a class=\"nav-link\" href=\"https://goo.gl/forms/BANjIh59Kax9UkSp1\" target=\"_blank\">\n                        {{'FOOTER.REQUEST_FORM_FOR_LISTING' | translate}}</a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</footer>"

/***/ }),

/***/ "./src/app/shared/components/layout-footer/layout-footer.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/layout-footer/layout-footer.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer {\n  color: white;\n  padding: 27px 40px; }\n  footer a,\n  footer .nav-link {\n    color: white; }\n  .social-icons a {\n  margin-right: 1rem; }\n  .font-size24 {\n  font-size: 24px !important; }\n"

/***/ }),

/***/ "./src/app/shared/components/layout-footer/layout-footer.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/layout-footer/layout-footer.component.ts ***!
  \****************************************************************************/
/*! exports provided: LayoutFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutFooterComponent", function() { return LayoutFooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LayoutFooterComponent = /** @class */ (function () {
    function LayoutFooterComponent() {
    }
    LayoutFooterComponent.prototype.ngAfterViewInit = function () {
    };
    LayoutFooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'layout-footer',
            template: __webpack_require__(/*! ./layout-footer.component.html */ "./src/app/shared/components/layout-footer/layout-footer.component.html"),
            styles: [__webpack_require__(/*! ./layout-footer.component.scss */ "./src/app/shared/components/layout-footer/layout-footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LayoutFooterComponent);
    return LayoutFooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/loader/loader.component.html":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/loader/loader.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"loader\">\r\n    <svg class=\"circular\" viewBox=\"25 25 50 50\">\r\n        <circle class=\"path\" cx=\"50\" cy=\"50\" r=\"20\" fill=\"none\" stroke-width=\"2\" stroke-miterlimit=\"10\" />\r\n    </svg>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/shared/components/loader/loader.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/loader/loader.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loader {\n  background: rgba(255, 255, 255, 0.5);\n  width: 100%;\n  height: 100%;\n  left: 0px;\n  top: 0px;\n  position: fixed;\n  z-index: 8000 !important; }\n"

/***/ }),

/***/ "./src/app/shared/components/loader/loader.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/loader/loader.component.ts ***!
  \**************************************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoaderComponent = /** @class */ (function () {
    function LoaderComponent() {
    }
    LoaderComponent.prototype.ngOnInit = function () { };
    LoaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'loader',
            template: __webpack_require__(/*! ./loader.component.html */ "./src/app/shared/components/loader/loader.component.html"),
            styles: [__webpack_require__(/*! ./loader.component.scss */ "./src/app/shared/components/loader/loader.component.scss")],
        }),
        __metadata("design:paramtypes", [])
    ], LoaderComponent);
    return LoaderComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/user-footer/user-footer.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/user-footer/user-footer.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"mt-5\">\n    <nav class=\"navbar navbar-expand justify-content-center\">\n        <ul class=\"navbar-nav\">\n\n            <li class=\"nav-item\" >\n                <a class=\"nav-link\" href=\"buycoin\" target=\"_blank\">\n                    {{'FOOTER.HOW_TO_BUY_COIN' | translate}}</a>\n            </li>\n            <li class=\"nav-item\" >\n                <a class=\"nav-link\" href=\"overview\" target=\"_blank\">\n                    {{'FOOTER.COIN_OVERVIEW' | translate}}</a>\n            </li>\n            <li class=\"nav-item\" >\n                <a class=\"nav-link\" href=\"sellcoin\" target=\"_blank\">\n                    {{'FOOTER.HOW_TO_SELL_COIN' | translate}}</a>\n            </li>\n            <li class=\"nav-item mb-2\" >\n                <a class=\"nav-link\" href=\"contactus\" target=\"_blank\">\n                    {{'FOOTER.CONTACT_US' | translate}}</a>\n            </li>\n            <li class=\"nav-item mb-2\" >\n                <a class=\"nav-link\" href=\"https://sistemkoin.com/api/market/ticker\" target=\"_blank\">\n                    {{'FOOTER.API' | translate}}</a>\n            </li>\n            <li class=\"nav-item mb-2 mb-md-0\" >\n                <a class=\"nav-link\" href=\"terms\" target=\"_blank\">\n                    {{'FOOTER.TERMS_CONDITIONS' | translate}} </a>\n            </li>\n            <li class=\"nav-item mb-2\" >\n                <a class=\"nav-link\" href=\"ucretler\" target=\"_blank\">\n                    {{'FOOTER.COMMISSION' | translate}}</a>\n            </li>\n            <li class=\"nav-item mb-2 mb-md-0\" >\n                <a class=\"nav-link\" href=\"https://goo.gl/forms/BANjIh59Kax9UkSp1\" target=\"_blank\">\n                    {{'FOOTER.REQUEST_FORM_FOR_LISTING' | translate}}</a>\n            </li>\n            <li class=\"nav-item dropdown cursor-pointer\">\n                <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\"\n                   data-toggle=\"dropdown\" aria-haspopup=\"true\"\n                   aria-expanded=\"false\">\n                    <i class=\"flag-icon {{currentLang.flagIcon}}\"></i> {{currentLang.text}}\n                </a>\n                <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n                    <a class=\"dropdown-item\" *ngFor=\"let lang of translator.getLanguages()\" (click)=\"setLang(lang.code)\">\n                        <i class=\"flag-icon {{lang.flagIcon}}\"></i>\n                        {{lang.text}}\n                    </a>\n                </div>\n            </li>\n        </ul>\n    </nav>\n    <div class=\"text-center text-white\">© 2018 Sistemkoin.com All Rights Reserved</div>\n</footer>"

/***/ }),

/***/ "./src/app/shared/components/user-footer/user-footer.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/user-footer/user-footer.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer {\n  font-size: 16px;\n  color: white; }\n  footer .nav-link {\n    color: white;\n    padding: 0 15px 0 25px;\n    line-height: 1; }\n  footer .nav-item:not(:last-child) .nav-link {\n    border-right: 1px solid white; }\n  .navbar-nav .dropdown-menu {\n  top: initial;\n  bottom: 0; }\n"

/***/ }),

/***/ "./src/app/shared/components/user-footer/user-footer.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/user-footer/user-footer.component.ts ***!
  \************************************************************************/
/*! exports provided: UserFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserFooterComponent", function() { return UserFooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_translator_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/translator.service */ "./src/app/services/translator.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserFooterComponent = /** @class */ (function () {
    function UserFooterComponent(translator) {
        this.translator = translator;
        this.currentLang = {};
    }
    UserFooterComponent.prototype.ngOnInit = function () {
        this.currentLang = this.translator.getCurrentLang();
    };
    UserFooterComponent.prototype.setLang = function (code) {
        this.translator.useLanguage(code);
        this.currentLang = this.translator.getCurrentLang();
    };
    UserFooterComponent.prototype.ngAfterViewInit = function () {
    };
    UserFooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'user-footer',
            template: __webpack_require__(/*! ./user-footer.component.html */ "./src/app/shared/components/user-footer/user-footer.component.html"),
            styles: [__webpack_require__(/*! ./user-footer.component.scss */ "./src/app/shared/components/user-footer/user-footer.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_translator_service__WEBPACK_IMPORTED_MODULE_1__["TranslatorService"]])
    ], UserFooterComponent);
    return UserFooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var ng_inline_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-inline-svg */ "./node_modules/ng-inline-svg/lib/index.js");
/* harmony import */ var ng_inline_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng_inline_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _components_field_error_display_field_error_display_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/field-error-display/field-error-display.component */ "./src/app/shared/components/field-error-display/field-error-display.component.ts");
/* harmony import */ var _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/loader/loader.component */ "./src/app/shared/components/loader/loader.component.ts");
/* harmony import */ var _components_dialog_modal_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/dialog/modal.dialog.component */ "./src/app/shared/components/dialog/modal.dialog.component.ts");
/* harmony import */ var _components_layout_footer_layout_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/layout-footer/layout-footer.component */ "./src/app/shared/components/layout-footer/layout-footer.component.ts");
/* harmony import */ var _components_user_footer_user_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/user-footer/user-footer.component */ "./src/app/shared/components/user-footer/user-footer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














// https://angular.io/styleguide#!#04-10
var SharedModule = /** @class */ (function () {
    // https://github.com/ocombe/ng2-translate/issues/209
    function SharedModule() {
    }
    SharedModule_1 = SharedModule;
    SharedModule.forRoot = function () {
        return {
            ngModule: SharedModule_1
        };
    };
    SharedModule = SharedModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
                ng_inline_svg__WEBPACK_IMPORTED_MODULE_5__["InlineSVGModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_6__["NgxPaginationModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["NgxDatatableModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__["TooltipModule"]
            ],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]],
            declarations: [
                _components_field_error_display_field_error_display_component__WEBPACK_IMPORTED_MODULE_9__["FieldErrorDisplayComponent"],
                _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_10__["LoaderComponent"],
                _components_dialog_modal_dialog_component__WEBPACK_IMPORTED_MODULE_11__["ModalDialogComponent"],
                _components_layout_footer_layout_footer_component__WEBPACK_IMPORTED_MODULE_12__["LayoutFooterComponent"],
                _components_user_footer_user_footer_component__WEBPACK_IMPORTED_MODULE_13__["UserFooterComponent"]
            ],
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                ng_inline_svg__WEBPACK_IMPORTED_MODULE_5__["InlineSVGModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_6__["NgxPaginationModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__["TooltipModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["NgxDatatableModule"],
                _components_field_error_display_field_error_display_component__WEBPACK_IMPORTED_MODULE_9__["FieldErrorDisplayComponent"],
                _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_10__["LoaderComponent"],
                _components_dialog_modal_dialog_component__WEBPACK_IMPORTED_MODULE_11__["ModalDialogComponent"],
                _components_layout_footer_layout_footer_component__WEBPACK_IMPORTED_MODULE_12__["LayoutFooterComponent"],
                _components_user_footer_user_footer_component__WEBPACK_IMPORTED_MODULE_13__["UserFooterComponent"]
            ]
        })
        // https://github.com/ocombe/ng2-translate/issues/209
    ], SharedModule);
    return SharedModule;
    var SharedModule_1;
}());



/***/ }),

/***/ "./src/app/user/announcement/announcement.page.html":
/*!**********************************************************!*\
  !*** ./src/app/user/announcement/announcement.page.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-container\">\r\n  <div class=\"container\">\r\n    <h3 class=\"text-center position-relative mb-5 pb-5\">\r\n      {{'announcement.title' | translate}}\r\n      <input type=\"text\" class=\"form-control position-absolute w-auto\" placeholder=\"{{'header.Search' | translate}}\" style=\"top:0;right:0;\"\r\n      />\r\n    </h3>\r\n\r\n    <div class=\"row mb-5\">\r\n      <div class=\"col-sm-6\" *ngFor=\"let item of annoucements | paginate: { itemsPerPage: 16,currentPage: 1,totalItems: 100 }\" [routerLink]=\"['/announcement/1']\">\r\n        <div class=\"box\">\r\n          {{item.title}}\r\n          <span class=\"float-right\">\r\n            {{item.date}}\r\n          </span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <pagination-controls directionLinks=\"true\" autoHide=\"true\" previousLabel=\"\" nextLabel=\"\" screenReaderPageLabel=\"page\">\r\n    </pagination-controls>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/user/announcement/announcement.page.scss":
/*!**********************************************************!*\
  !*** ./src/app/user/announcement/announcement.page.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box {\n  margin-bottom: 25px; }\n"

/***/ }),

/***/ "./src/app/user/announcement/announcement.page.ts":
/*!********************************************************!*\
  !*** ./src/app/user/announcement/announcement.page.ts ***!
  \********************************************************/
/*! exports provided: AnnouncementPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnnouncementPage", function() { return AnnouncementPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AnnouncementPage = /** @class */ (function () {
    function AnnouncementPage(router) {
        this.router = router;
        this.annoucements = [
            { title: 'Sistemkoin Lists Ardor (ARDR)', date: '28/07/2018' },
            { title: 'Sistemkoin Lists Ardor (ARDR)', date: '28/07/2018' },
            { title: 'Sistemkoin Lists Ardor (ARDR)', date: '28/07/2018' },
            { title: 'Sistemkoin Lists Ardor (ARDR)', date: '28/07/2018' },
            { title: 'Sistemkoin Lists Ardor (ARDR)', date: '28/07/2018' },
            { title: 'Sistemkoin Lists Ardor (ARDR)', date: '28/07/2018' },
            { title: 'Sistemkoin Lists Ardor (ARDR)', date: '28/07/2018' },
            { title: 'Sistemkoin Lists Ardor (ARDR)', date: '28/07/2018' },
            { title: 'Sistemkoin Lists Ardor (ARDR)', date: '28/07/2018' },
            { title: 'Sistemkoin Lists Ardor (ARDR)', date: '28/07/2018' },
            { title: 'Sistemkoin Lists Ardor (ARDR)', date: '28/07/2018' },
            { title: 'Sistemkoin Lists Ardor (ARDR)', date: '28/07/2018' },
            { title: 'Sistemkoin Lists Ardor (ARDR)', date: '28/07/2018' },
            { title: 'Sistemkoin Lists Ardor (ARDR)', date: '28/07/2018' },
            { title: 'Sistemkoin Lists Ardor (ARDR)', date: '28/07/2018' },
            { title: 'Sistemkoin Lists Ardor (ARDR)', date: '28/07/2018' }
        ];
    }
    AnnouncementPage.prototype.ngOnInit = function () { };
    AnnouncementPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-announcement-page',
            template: __webpack_require__(/*! ./announcement.page.html */ "./src/app/user/announcement/announcement.page.html"),
            styles: [__webpack_require__(/*! ./announcement.page.scss */ "./src/app/user/announcement/announcement.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AnnouncementPage);
    return AnnouncementPage;
}());



/***/ }),

/***/ "./src/app/user/announcementdetail/announcementdetail.page.html":
/*!**********************************************************************!*\
  !*** ./src/app/user/announcementdetail/announcementdetail.page.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-container\">\r\n  <div class=\"container\">\r\n    <h3 class=\"text-center position-relative mb-5 pb-5\">\r\n      <a [routerLink]=\"'/announcement'\" class=\"btn btn-secondary position-absolute px-5\" style=\"top:0;left:0;\">Back</a>\r\n      {{'announcement.title' | translate}}\r\n      <input type=\"text\" class=\"form-control position-absolute w-auto\" placeholder=\"{{'header.Search' | translate}}\" style=\"top:0;right:0;\"\r\n      />\r\n    </h3>\r\n\r\n    <div class=\"box mb-5\">\r\n      <h5>System Upgrade Notice</h5>\r\n      <hr/> Dear Fllows,\r\n      <br/>\r\n      <br/>\r\n      <br/> Sistemkoin will be performing a system upgrade starting at 2018/07/26 06:00 AM (UTC). This is a major upgrade and\r\n      will take approximately 15 minutes. Sistemkoin will suspend all withdrawals and trading during this period or until\r\n      the upgrade is complete. We apologize for any inconvenience caused, and thank you for your patience.\r\n      <br/>\r\n      <br/> Thanks for your support!\r\n      <br/>\r\n      <br/> Sistemkoin Team\r\n      <br/>\r\n      <br/> 26/07/2018\r\n      <br/>\r\n      <br/> Find us on\r\n      <div class=\"social-links mt-3\">\r\n        <a [inlineSVG]=\"'/assets/icon/facebook-small.svg'\"></a>\r\n        <a [inlineSVG]=\"'/assets/icon/twitter-small.svg'\"></a>\r\n        <a [inlineSVG]=\"'/assets/icon/plane-small.svg'\"></a>\r\n        <a [inlineSVG]=\"'/assets/icon/google-plus-small.svg'\"></a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/user/announcementdetail/announcementdetail.page.scss":
/*!**********************************************************************!*\
  !*** ./src/app/user/announcementdetail/announcementdetail.page.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box {\n  padding: 50px; }\n\nh5 {\n  font-weight: normal; }\n\n.social-links a {\n  margin-right: 4px; }\n"

/***/ }),

/***/ "./src/app/user/announcementdetail/announcementdetail.page.ts":
/*!********************************************************************!*\
  !*** ./src/app/user/announcementdetail/announcementdetail.page.ts ***!
  \********************************************************************/
/*! exports provided: AnnouncementDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnnouncementDetailPage", function() { return AnnouncementDetailPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AnnouncementDetailPage = /** @class */ (function () {
    function AnnouncementDetailPage(router) {
        this.router = router;
        this.annoucements = [
            { title: 'Sistemkoin Lists Ardor (ARDR)', date: '28/07/2018' },
            { title: 'Sistemkoin Lists Ardor (ARDR)', date: '28/07/2018' },
            { title: 'Sistemkoin Lists Ardor (ARDR)', date: '28/07/2018' },
            { title: 'Sistemkoin Lists Ardor (ARDR)', date: '28/07/2018' },
            { title: 'Sistemkoin Lists Ardor (ARDR)', date: '28/07/2018' },
            { title: 'Sistemkoin Lists Ardor (ARDR)', date: '28/07/2018' },
            { title: 'Sistemkoin Lists Ardor (ARDR)', date: '28/07/2018' },
            { title: 'Sistemkoin Lists Ardor (ARDR)', date: '28/07/2018' },
            { title: 'Sistemkoin Lists Ardor (ARDR)', date: '28/07/2018' },
            { title: 'Sistemkoin Lists Ardor (ARDR)', date: '28/07/2018' },
            { title: 'Sistemkoin Lists Ardor (ARDR)', date: '28/07/2018' },
            { title: 'Sistemkoin Lists Ardor (ARDR)', date: '28/07/2018' },
            { title: 'Sistemkoin Lists Ardor (ARDR)', date: '28/07/2018' },
            { title: 'Sistemkoin Lists Ardor (ARDR)', date: '28/07/2018' },
            { title: 'Sistemkoin Lists Ardor (ARDR)', date: '28/07/2018' },
            { title: 'Sistemkoin Lists Ardor (ARDR)', date: '28/07/2018' }
        ];
    }
    AnnouncementDetailPage.prototype.ngOnInit = function () { };
    AnnouncementDetailPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-announcementdetail-page',
            template: __webpack_require__(/*! ./announcementdetail.page.html */ "./src/app/user/announcementdetail/announcementdetail.page.html"),
            styles: [__webpack_require__(/*! ./announcementdetail.page.scss */ "./src/app/user/announcementdetail/announcementdetail.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AnnouncementDetailPage);
    return AnnouncementDetailPage;
}());



/***/ }),

/***/ "./src/app/user/confirmauth/confirmauth.page.html":
/*!********************************************************!*\
  !*** ./src/app/user/confirmauth/confirmauth.page.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n    <div class=\"text-center mb-5\">\r\n        <a [routerLink]=\"['/']\"><img src=\"/assets/img/logo1.png\"></a>\r\n    </div>\r\n\r\n    <div class=\"box mx-auto\" style=\"max-width:800px\">\r\n        <div style=\"max-width: 663px; margin: 0 auto\">\r\n            <h2 class=\"text-center\">{{'AUTH.CONFIRM_AUTH_TITLE' | translate}}</h2>\r\n\r\n            <form class=\"mt-5\">\r\n                <div class=\"form-group row\">\r\n                    <label class=\"col-sm-4  col-form-label text-sm-right pr-0\" [ngSwitch]=\"allowed_g2f\">\r\n                        <div *ngSwitchCase=\"1\">{{'AUTH.GOOGLE_AUTHENTICATION_CODE' | translate}}: </div>\r\n                        <div *ngSwitchCase=\"2\">{{'AUTH.SMS_AUTHENTICATION_CODE' | translate}}: </div>\r\n                        <div *ngSwitchCase=\"3\">{{'AUTH.EMAIL_AUTHENTICATION_CODE' | translate}}: </div>\r\n                    </label>\r\n\r\n                    <div class=\"col-sm-8\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-12 pr-0\">\r\n                                <input type=\"text\" class=\"text-center form-control\" name=\"confirm_code\" [(ngModel)]=\"confirm_code\"/>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n\r\n            <div class=\"text-right\">\r\n                <button class=\"btn btn-warning btn-main mt-5 mb-1 mr-5\" (click)=\"onSubmitCode()\">{{'BUTTON.SUBMIT' | translate}}</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <user-footer></user-footer>\r\n</div>"

/***/ }),

/***/ "./src/app/user/confirmauth/confirmauth.page.scss":
/*!********************************************************!*\
  !*** ./src/app/user/confirmauth/confirmauth.page.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\n  min-height: 100vh;\n  background-repeat: no-repeat, repeat;\n  background-image: url(\"/assets/img/login_number.png\"), linear-gradient(180deg, #6a65e2 0%, #8e77b6 60%, #ffae2e 90%);\n  background-blend-mode: screen;\n  background-position: center center;\n  padding-top: 70px; }\n\nfooter {\n  font-size: 16px;\n  color: white; }\n\nfooter .nav-link {\n    color: white;\n    padding: 0 15px 0 25px;\n    line-height: 1; }\n\nfooter .nav-item:not(:last-child) .nav-link {\n    border-right: 1px solid white; }\n\n.box {\n  border: 0px none;\n  padding: 50px 39px 40px 39px;\n  box-shadow: 4px 5px 15px 3px rgba(0, 0, 0, 0.2);\n  font-size: 16px; }\n\n.form-control {\n  font-size: 20px;\n  line-height: 35px;\n  height: auto; }\n\nh2 {\n  font-size: 24px; }\n\nul.info {\n  list-style: none;\n  padding: 0;\n  line-height: 48px; }\n\nul.info li {\n    border-top: 1px solid #dcdcdc; }\n\nul.info li:last-child {\n      border-bottom: 1px solid #dcdcdc; }\n\n.selected {\n  color: #ffae2e; }\n\n.btn-main {\n  font-size: 16px;\n  height: 30px;\n  line-height: 30px;\n  padding: 0;\n  width: 100px; }\n"

/***/ }),

/***/ "./src/app/user/confirmauth/confirmauth.page.ts":
/*!******************************************************!*\
  !*** ./src/app/user/confirmauth/confirmauth.page.ts ***!
  \******************************************************/
/*! exports provided: ConfirmauthPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmauthPage", function() { return ConfirmauthPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/settings.service */ "./src/app/services/settings.service.ts");
/* harmony import */ var _services_notify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/notify.service */ "./src/app/services/notify.service.ts");
/* harmony import */ var _services_userApi_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/userApi.service */ "./src/app/services/userApi.service.ts");
/* harmony import */ var _services_pusher_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/pusher.service */ "./src/app/services/pusher.service.ts");
/* harmony import */ var _services_system_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/system.service */ "./src/app/services/system.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ConfirmauthPage = /** @class */ (function () {
    function ConfirmauthPage(router, settings, notify, userApi, pusher, system) {
        this.router = router;
        this.settings = settings;
        this.notify = notify;
        this.userApi = userApi;
        this.pusher = pusher;
        this.system = system;
        this.allowed_g2f = 0;
        this.email = '';
        this.password = '';
        this.confirm_code = '';
    }
    ConfirmauthPage.prototype.ngOnInit = function () {
        if (this.settings.getUserSetting('allowed_g2f') === undefined || this.settings.getUserSetting('allowed_g2f') == 0) {
            this.router.navigate(['/']);
        }
        if (this.settings.getUserSetting('email') === undefined || this.settings.getUserSetting('email') == '') {
            this.router.navigate(['/']);
        }
        this.allowed_g2f = this.settings.getUserSetting('allowed_g2f');
        this.email = this.settings.getUserSetting('email');
        this.password = this.settings.getUserSetting('password');
    };
    ConfirmauthPage.prototype.ngAfterViewInit = function () {
    };
    ConfirmauthPage.prototype.onSubmitCode = function () {
        var _this = this;
        this.settings.loading = true;
        this.userApi.confirmCodeAndLogin({
            code: this.confirm_code,
            email: this.email,
            password: this.password
        }).subscribe(function (res) {
            _this.settings.loading = false;
            if (res.success) {
                _this.settings.setUserSetting('password', '');
                _this.settings.setUserSetting('user_id', res.user_id);
                _this.settings.setUserSetting('account_verified', res.account_verified);
                _this.settings.setUserSetting('name', res.name);
                _this.settings.setUserSetting('balance', res.balance);
                _this.settings.setUserSetting('phone_number', res.phone_number);
                _this.settings.setUserSetting('ref_code', res.ref_code);
                _this.settings.setAppSetting('is_loggedin', true);
                _this.settings.setStorage('token', res.token);
                _this.system.init();
                _this.router.navigate(['/market']);
                _this.pusher.connect();
            }
            else {
                _this.notify.showWarning(res.error);
            }
        }, function (err) {
            _this.settings.loading = false;
            _this.notify.showError(err);
        });
    };
    ConfirmauthPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./confirmauth.page.html */ "./src/app/user/confirmauth/confirmauth.page.html"),
            styles: [__webpack_require__(/*! ./confirmauth.page.scss */ "./src/app/user/confirmauth/confirmauth.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_settings_service__WEBPACK_IMPORTED_MODULE_2__["SettingsService"],
            _services_notify_service__WEBPACK_IMPORTED_MODULE_3__["NotifyService"],
            _services_userApi_service__WEBPACK_IMPORTED_MODULE_4__["UserApiService"],
            _services_pusher_service__WEBPACK_IMPORTED_MODULE_5__["PusherService"],
            _services_system_service__WEBPACK_IMPORTED_MODULE_6__["SystemService"]])
    ], ConfirmauthPage);
    return ConfirmauthPage;
}());



/***/ }),

/***/ "./src/app/user/confirmemail/confirmemail.page.html":
/*!**********************************************************!*\
  !*** ./src/app/user/confirmemail/confirmemail.page.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n    <div class=\"text-center mb-5\">\r\n        <a [routerLink]=\"['/']\"><img src=\"/assets/img/logo1.png\"></a>\r\n    </div>\r\n\r\n    <div class=\"box mx-auto\" style=\"max-width:800px\">\r\n        <div style=\"max-width: 663px; margin: 0 auto\">\r\n            <h2 class=\"text-center\">{{'AUTH.TITLE' | translate}}</h2>\r\n            <p class=\"mt-5 text-center mx-auto\" style=\"max-width: 600px\">\r\n                {{'AUTH.CONFIRM_EMAIL_TEXT1' | translate}}\r\n            </p>\r\n            <hr/>\r\n            <p class=\"mt-5\">\r\n                {{'AUTH.CONFIRM_EMAIL_TEXT2' | translate}}\r\n            </p>\r\n            <ul [innerHTML]=\"'AUTH.CONFIRM_EMAIL_TEXT3' | translate\">\r\n            </ul>\r\n        </div>\r\n    </div>\r\n    <user-footer></user-footer>\r\n</div>"

/***/ }),

/***/ "./src/app/user/confirmemail/confirmemail.page.scss":
/*!**********************************************************!*\
  !*** ./src/app/user/confirmemail/confirmemail.page.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\n  min-height: 100vh;\n  background-repeat: no-repeat, repeat;\n  background-image: url(\"/assets/img/login_number.png\"), linear-gradient(180deg, #6a65e2 0%, #8e77b6 60%, #ffae2e 90%);\n  background-blend-mode: screen;\n  background-position: center center;\n  padding-top: 70px; }\n\nfooter {\n  font-size: 16px;\n  color: white; }\n\nfooter .nav-link {\n    color: white;\n    padding: 0 15px 0 25px;\n    line-height: 1; }\n\nfooter .nav-item:not(:last-child) .nav-link {\n    border-right: 1px solid white; }\n\n.box {\n  border: 0px none;\n  padding: 50px 39px 40px 39px;\n  box-shadow: 4px 5px 15px 3px rgba(0, 0, 0, 0.2);\n  font-size: 16px; }\n\nh2 {\n  font-size: 24px; }\n\nul.info {\n  list-style: none;\n  padding: 0;\n  line-height: 48px; }\n\nul.info li {\n    border-top: 1px solid #dcdcdc; }\n\nul.info li:last-child {\n      border-bottom: 1px solid #dcdcdc; }\n"

/***/ }),

/***/ "./src/app/user/confirmemail/confirmemail.page.ts":
/*!********************************************************!*\
  !*** ./src/app/user/confirmemail/confirmemail.page.ts ***!
  \********************************************************/
/*! exports provided: ConfirmemailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmemailPage", function() { return ConfirmemailPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfirmemailPage = /** @class */ (function () {
    function ConfirmemailPage(router) {
        this.router = router;
    }
    ConfirmemailPage.prototype.ngOnInit = function () { };
    ConfirmemailPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-resetpassword-page',
            template: __webpack_require__(/*! ./confirmemail.page.html */ "./src/app/user/confirmemail/confirmemail.page.html"),
            styles: [__webpack_require__(/*! ./confirmemail.page.scss */ "./src/app/user/confirmemail/confirmemail.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ConfirmemailPage);
    return ConfirmemailPage;
}());



/***/ }),

/***/ "./src/app/user/faq/faq.page.html":
/*!****************************************!*\
  !*** ./src/app/user/faq/faq.page.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-container\">\r\n  <div class=\"container\">\r\n    <h3 class=\"text-center position-relative\">\r\n      FAQ\r\n      <input type=\"text\" class=\"form-control position-absolute w-auto\" placeholder=\"{{'header.Search' | translate}}\" style=\"top:0;right:0;\"\r\n      />\r\n    </h3>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-6\">\r\n        <h6>{{'faq.Deposit/Withdraw' | translate}}</h6>\r\n        <div class=\"box\">\r\n          <p>Withdraw to wrong address</p>\r\n          <p>Cannot receive Email</p>\r\n          <p>Deposit Fiat currency</p>\r\n          <p>Deposit Forgot or Wrong Tag/Memo/Payment ID</p>\r\n          <p>Deposited wrong coins</p>\r\n          <p>Sent to wrong address</p>\r\n          <a class=\"yellow\">{{'faq.See all' | translate}}</a>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-sm-6\">\r\n        <h6>{{'faq.Trading' | translate}}</h6>\r\n        <div class=\"box\">\r\n          <p>Withdraw to wrong address</p>\r\n          <p>Cannot receive Email</p>\r\n          <p>Deposit Fiat currency</p>\r\n          <p>Deposit Forgot or Wrong Tag/Memo/Payment ID</p>\r\n          <p>Deposited wrong coins</p>\r\n          <p>Sent to wrong address</p>\r\n          <a class=\"yellow\">{{'faq.See all' | translate}}</a>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-sm-6\">\r\n        <h6>{{'faq.Account Access' | translate}}</h6>\r\n        <div class=\"box\">\r\n          <p>Withdraw to wrong address</p>\r\n          <p>Cannot receive Email</p>\r\n          <p>Deposit Fiat currency</p>\r\n          <p>Deposit Forgot or Wrong Tag/Memo/Payment ID</p>\r\n          <p>Deposited wrong coins</p>\r\n          <p>Sent to wrong address</p>\r\n          <a class=\"yellow\">{{'faq.See all' | translate}}</a>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-sm-6\">\r\n        <h6>{{'faq.Two-Factor Authentication' | translate}}</h6>\r\n        <div class=\"box\">\r\n          <p>Withdraw to wrong address</p>\r\n          <p>Cannot receive Email</p>\r\n          <p>Deposit Fiat currency</p>\r\n          <p>Deposit Forgot or Wrong Tag/Memo/Payment ID</p>\r\n          <p>Deposited wrong coins</p>\r\n          <p>Sent to wrong address</p>\r\n          <a class=\"yellow\">{{'faq.See all' | translate}}</a>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-sm-6\">\r\n        <h6>{{'faq.Security' | translate}}</h6>\r\n        <div class=\"box\">\r\n          <p>Withdraw to wrong address</p>\r\n          <p>Cannot receive Email</p>\r\n          <p>Deposit Fiat currency</p>\r\n          <p>Deposit Forgot or Wrong Tag/Memo/Payment ID</p>\r\n          <p>Deposited wrong coins</p>\r\n          <p>Sent to wrong address</p>\r\n          <a class=\"yellow\">{{'faq.See all' | translate}}</a>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-sm-6\">\r\n        <h6>{{'faq.Miscellaneous' | translate}}</h6>\r\n        <div class=\"box\">\r\n          <p>Withdraw to wrong address</p>\r\n          <p>Cannot receive Email</p>\r\n          <p>Deposit Fiat currency</p>\r\n          <p>Deposit Forgot or Wrong Tag/Memo/Payment ID</p>\r\n          <p>Deposited wrong coins</p>\r\n          <p>Sent to wrong address</p>\r\n          <a class=\"yellow\">{{'faq.See all' | translate}}</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/user/faq/faq.page.scss":
/*!****************************************!*\
  !*** ./src/app/user/faq/faq.page.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h6 {\n  color: #605f60;\n  font-weight: bold;\n  margin-top: 1.4rem;\n  margin-bottom: 0.7rem; }\n"

/***/ }),

/***/ "./src/app/user/faq/faq.page.ts":
/*!**************************************!*\
  !*** ./src/app/user/faq/faq.page.ts ***!
  \**************************************/
/*! exports provided: FAQPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FAQPage", function() { return FAQPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FAQPage = /** @class */ (function () {
    function FAQPage(router) {
        this.router = router;
    }
    FAQPage.prototype.ngOnInit = function () { };
    FAQPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-faq-page',
            template: __webpack_require__(/*! ./faq.page.html */ "./src/app/user/faq/faq.page.html"),
            styles: [__webpack_require__(/*! ./faq.page.scss */ "./src/app/user/faq/faq.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], FAQPage);
    return FAQPage;
}());



/***/ }),

/***/ "./src/app/user/forgot/forgot.page.html":
/*!**********************************************!*\
  !*** ./src/app/user/forgot/forgot.page.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n    <div class=\"text-center mb-5\">\r\n        <a [routerLink]=\"['/']\"><img src=\"/assets/img/logo1.png\"></a>\r\n    </div>\r\n\r\n    <div class=\"box\">\r\n        <form autocomplete=\"off\">\r\n            <h2 class=\"text-center\">\r\n                <span>{{'AUTH.FORGOT_PASSWORD' | translate}}</span>\r\n            </h2>\r\n            <div class=\"form-group\">\r\n                <input type=\"text\" class=\"form-control\" name=\"email\"\r\n                       [(ngModel)]=\"email\" placeholder=\"{{'AUTH.EMAIL_ADDRESS' | translate}}\"/>\r\n            </div>\r\n\r\n            <button class=\"btn btn-warning w-100 btn-main mb-5\" (click)=\"onSubmit()\">{{'BUTTON.SUBMIT' | translate}}</button>\r\n        </form>\r\n    </div>\r\n    <user-footer></user-footer>\r\n</div>"

/***/ }),

/***/ "./src/app/user/forgot/forgot.page.scss":
/*!**********************************************!*\
  !*** ./src/app/user/forgot/forgot.page.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\n  min-height: 100vh;\n  background-repeat: no-repeat, repeat;\n  background-image: url(\"/assets/img/login_number.png\"), linear-gradient(180deg, #6a65e2 0%, #8e77b6 60%, #ffae2e 90%);\n  background-blend-mode: screen;\n  background-position: center center;\n  padding-top: 70px; }\n\nfooter {\n  font-size: 16px;\n  color: white; }\n\nfooter .nav-link {\n    color: white;\n    padding: 0 15px 0 25px;\n    line-height: 1; }\n\nfooter .nav-item:not(:last-child) .nav-link {\n    border-right: 1px solid white; }\n\n.box {\n  border: 0px none;\n  padding: 50px 39px 40px 39px;\n  box-shadow: 4px 5px 15px 3px rgba(0, 0, 0, 0.2);\n  font-size: 16px;\n  max-width: 890px;\n  margin: 0 auto; }\n\nh2 {\n  font-size: 24px;\n  position: relative;\n  margin-bottom: 3rem; }\n\nh2:before {\n    content: '';\n    position: absolute;\n    left: -3px;\n    right: -3px;\n    top: 50%;\n    border-top: 1px solid #a7a7a7; }\n\nh2 span {\n    display: inline-block;\n    padding: 0 20px;\n    background: white;\n    position: relative;\n    z-index: 1; }\n\nform {\n  max-width: 450px;\n  margin: 0 auto; }\n\n.form-control {\n  padding: 0px 12px 0px 25px;\n  font-size: 16px;\n  line-height: 53px;\n  height: auto; }\n\n.btn-main {\n  font-size: 20px;\n  height: 55px;\n  line-height: 55px;\n  padding: 0; }\n\n.form-group {\n  margin-bottom: 16px; }\n\n.btn-code {\n  width: 100%;\n  height: 55px;\n  padding: 0;\n  line-height: 55px;\n  font-size: 16px;\n  background: #ffd798;\n  background: linear-gradient(180deg, #ffd798 0%, #ffae2e 90%); }\n"

/***/ }),

/***/ "./src/app/user/forgot/forgot.page.ts":
/*!********************************************!*\
  !*** ./src/app/user/forgot/forgot.page.ts ***!
  \********************************************/
/*! exports provided: ForgotPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPage", function() { return ForgotPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_userApi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/userApi.service */ "./src/app/services/userApi.service.ts");
/* harmony import */ var _services_notify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/notify.service */ "./src/app/services/notify.service.ts");
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/settings.service */ "./src/app/services/settings.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ForgotPage = /** @class */ (function () {
    function ForgotPage(router, userApi, notify, settings) {
        this.router = router;
        this.userApi = userApi;
        this.notify = notify;
        this.settings = settings;
        this.email = '';
    }
    ForgotPage.prototype.ngOnInit = function () {
    };
    ForgotPage.prototype.ngAfterViewInit = function () {
    };
    ForgotPage.prototype.onSubmit = function () {
        var _this = this;
        if (this.email == '') {
            this.notify.showWarning('Please enter email address');
            return;
        }
        this.settings.loading = true;
        this.userApi.sendForgotEmail({
            email: this.email
        }).subscribe(function (res) {
            _this.settings.loading = false;
            if (res.success) {
                _this.notify.showSuccess('Email was sent successfully. Please check your email.');
                _this.router.navigate(['confirmemail']);
            }
            else {
                _this.notify.showWarning(res.error);
            }
        }, function (err) {
            _this.settings.loading = false;
            _this.notify.showError(err);
        });
    };
    ForgotPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forgot-page',
            template: __webpack_require__(/*! ./forgot.page.html */ "./src/app/user/forgot/forgot.page.html"),
            styles: [__webpack_require__(/*! ./forgot.page.scss */ "./src/app/user/forgot/forgot.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_userApi_service__WEBPACK_IMPORTED_MODULE_2__["UserApiService"],
            _services_notify_service__WEBPACK_IMPORTED_MODULE_3__["NotifyService"],
            _services_settings_service__WEBPACK_IMPORTED_MODULE_4__["SettingsService"]])
    ], ForgotPage);
    return ForgotPage;
}());



/***/ }),

/***/ "./src/app/user/login/login.page.html":
/*!********************************************!*\
  !*** ./src/app/user/login/login.page.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n    <div class=\"container\">\r\n        <div>\r\n            <div class=\"text-center mb-4\">\r\n                <a [routerLink]=\"['/']\"><img src=\"/assets/img/logo1.png\" class=\"mw-100\"></a>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-6 text-center d-none d-sm-block\">\r\n                    <img src=\"/assets/img/login_bg.png\" class=\"mw-100\" alt=\"bg\">\r\n                </div>\r\n                <div class=\"col-sm-6\">\r\n                    <form class=\"box\" autocomplete=\"off\" [formGroup]=\"login\">\r\n                        <h2 class=\"text-center\">\r\n                            <span>{{'AUTH.EXISTING_USER' | translate}}</span>\r\n                        </h2>\r\n                        <p class=\"mt-5\">\r\n                            <img src=\"/assets/icon/warning.png\" alt=\"warning\" class=\"mr-2\">{{'AUTH.TEXT1' | translate}}\r\n                            <strong>https://sistemkoin.com</strong>\r\n                        </p>\r\n                        <p class=\"text-center my-4\">\r\n                            <img src=\"/assets/img/insure.png\" class=\"mw-100\" alt=\"insure\">\r\n                        </p>\r\n                        <div class=\"form-group\">\r\n                            <input type=\"email\" name=\"email\" class=\"form-control email\" formControlName=\"email\"\r\n                                   [(ngModel)]=\"loginInfo.email\"\r\n                                   placeholder=\"{{'AUTH.EMAIL_ADDRESS' | translate}}\" autocomplete=\"off\">\r\n\r\n                            <app-field-error-display [displayError]=\"validate.isFieldValid(login, 'email')\"\r\n                                                     errorMsg=\"{{'AUTH.EMAIL_VALIDATION' | translate}}\">\r\n                            </app-field-error-display>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <input type=\"password\"\r\n                                   id=\"password\"\r\n                                   name=\"password\"\r\n                                   class=\"form-control password\"\r\n                                   formControlName=\"password\"\r\n                                   [(ngModel)]=\"loginInfo.password\"\r\n                                   placeholder=\"{{'AUTH.PASSWORD' | translate}}\">\r\n                            <app-field-error-display\r\n                                    [displayError]=\"validate.isFieldValid(login, 'password')\"\r\n                                    errorMsg=\"{{'AUTH.PASSWORD_VALIDATION' | translate}}\">\r\n                            </app-field-error-display>\r\n\r\n                        </div>\r\n                        <div class=\"form-group mt-4\">\r\n                            <label class=\"custom-checkbox mb-0\">{{'AUTH.KEEP_ME_LOGGED_IN' | translate}}\r\n                                <input type=\"checkbox\" value=\"1\" name=\"remember_login\">\r\n                                <span></span>\r\n                            </label>\r\n                            <a class=\"text-yellow float-right cursor-pointer\" [routerLink]=\"['/forgot']\">\r\n                                {{'AUTH.FORGOT_PASSWORD' | translate}}?</a>\r\n                        </div>\r\n                        <button class=\"btn btn-warning w-100\" (click)=\"onLogin()\">{{'AUTH.LOG_IN' | translate}}</button>\r\n                        <p class=\"text-center\">{{'AUTH.HAVE_NOT_RECEIVED_EMAIL' | translate}}?\r\n                            <a class=\"text-primary cursor-pointer\" [routerLink]=\"['/resend']\">{{'AUTH.RESEND_EMAIL' | translate}}</a>\r\n                        </p>\r\n                        <p class=\"text-center\">{{'AUTH.NEED_AN_ACCOUNT' | translate}}?\r\n                            <a class=\"text-yellow cursor-pointer\" [routerLink]=\"['/signup']\">{{'AUTH.REGISTER' | translate}}</a>\r\n                        </p>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <user-footer></user-footer>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/user/login/login.page.scss":
/*!********************************************!*\
  !*** ./src/app/user/login/login.page.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\n  min-height: 100vh;\n  background-repeat: no-repeat, repeat;\n  background-image: url(\"/assets/img/login_number.png\"), linear-gradient(180deg, #6a65e2 0%, #ffae2e 90%);\n  background-blend-mode: screen;\n  background-position: center center;\n  padding-top: 70px; }\n\n.box {\n  border: 0px none;\n  padding: 50px 39px 40px 39px;\n  box-shadow: 4px 5px 15px 3px rgba(0, 0, 0, 0.2);\n  font-size: 16px; }\n\nh2 {\n  font-size: 24px;\n  position: relative; }\n\nh2:before {\n    content: '';\n    position: absolute;\n    left: -3px;\n    right: -3px;\n    top: 50%;\n    border-top: 1px solid #a7a7a7; }\n\nh2 span {\n    display: inline-block;\n    padding: 0 20px;\n    background: white;\n    position: relative;\n    z-index: 1; }\n\n.form-control {\n  padding: 0px 12px 0px 50px;\n  font-size: 16px;\n  line-height: 53px;\n  height: auto; }\n\n.form-control.email {\n    background: url(\"/assets/icon/email.png\") no-repeat 12px center !important; }\n\n.form-control.password {\n    background: url(\"/assets/icon/password.png\") no-repeat 14px center !important; }\n\n.form-group {\n  margin-bottom: 16px; }\n\n.btn-warning {\n  font-size: 20px;\n  height: 55px;\n  line-height: 55px;\n  padding: 0;\n  margin: 20px 0 20px 0; }\n"

/***/ }),

/***/ "./src/app/user/login/login.page.ts":
/*!******************************************!*\
  !*** ./src/app/user/login/login.page.ts ***!
  \******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/settings.service */ "./src/app/services/settings.service.ts");
/* harmony import */ var _services_userApi_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/userApi.service */ "./src/app/services/userApi.service.ts");
/* harmony import */ var _services_notify_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/notify.service */ "./src/app/services/notify.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginPage = /** @class */ (function () {
    function LoginPage(router, formBuilder, validate, settings, userApi, notify) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.validate = validate;
        this.settings = settings;
        this.userApi = userApi;
        this.notify = notify;
        this.loginInfo = {};
    }
    LoginPage.prototype.ngOnInit = function () {
        this.login = this.formBuilder.group({
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,4}$")]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    LoginPage.prototype.onLogin = function () {
        var _this = this;
        if (this.login.valid) {
            this.settings.loading = true;
            this.userApi.confirmPassword(this.loginInfo).subscribe(function (res) {
                _this.settings.loading = false;
                if (res.success) {
                    if (res.allowed_g2f == 0) {
                        _this.settings.setUserSetting('email', _this.loginInfo.email);
                        _this.settings.setUserSetting('allowed_g2f', 0);
                        _this.router.navigate(['/setauth']);
                    }
                    else if (res.allowed_g2f > 0) {
                        _this.settings.setUserSetting('email', _this.loginInfo.email);
                        _this.settings.setUserSetting('password', _this.loginInfo.password);
                        _this.settings.setUserSetting('allowed_g2f', res.allowed_g2f);
                        _this.router.navigate(['/confirmauth']);
                    }
                }
                else {
                    _this.notify.showWarning(res.error);
                }
            }, function (err) {
                _this.settings.loading = false;
                _this.notify.showError(err);
            });
        }
        else {
            this.validate.validateAllFormFields(this.login);
        }
    };
    LoginPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login-page',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/user/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/user/login/login.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_validate_service__WEBPACK_IMPORTED_MODULE_3__["ValidateService"],
            _services_settings_service__WEBPACK_IMPORTED_MODULE_4__["SettingsService"],
            _services_userApi_service__WEBPACK_IMPORTED_MODULE_5__["UserApiService"],
            _services_notify_service__WEBPACK_IMPORTED_MODULE_6__["NotifyService"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ }),

/***/ "./src/app/user/resend/resend.page.html":
/*!**********************************************!*\
  !*** ./src/app/user/resend/resend.page.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n    <div class=\"text-center mb-5\">\r\n        <a [routerLink]=\"['/']\"><img src=\"/assets/img/logo1.png\"></a>\r\n    </div>\r\n\r\n    <div class=\"box\">\r\n        <form autocomplete=\"off\">\r\n            <h2 class=\"text-center\">\r\n                <span>{{'AUTH.RESEND_ACTIVATION_EMAIL' | translate}}</span>\r\n            </h2>\r\n            <div class=\"form-group\">\r\n                <input type=\"text\" class=\"form-control\" name=\"email\"\r\n                       [(ngModel)]=\"email\" placeholder=\"{{'AUTH.EMAIL_ADDRESS' | translate}}\"/>\r\n            </div>\r\n\r\n            <button class=\"btn btn-warning w-100 btn-main mb-5\" (click)=\"onSubmit()\">{{'BUTTON.SUBMIT' | translate}}</button>\r\n        </form>\r\n    </div>\r\n    <user-footer></user-footer>\r\n</div>"

/***/ }),

/***/ "./src/app/user/resend/resend.page.scss":
/*!**********************************************!*\
  !*** ./src/app/user/resend/resend.page.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\n  min-height: 100vh;\n  background-repeat: no-repeat, repeat;\n  background-image: url(\"/assets/img/login_number.png\"), linear-gradient(180deg, #6a65e2 0%, #8e77b6 60%, #ffae2e 90%);\n  background-blend-mode: screen;\n  background-position: center center;\n  padding-top: 70px; }\n\nfooter {\n  font-size: 16px;\n  color: white; }\n\nfooter .nav-link {\n    color: white;\n    padding: 0 15px 0 25px;\n    line-height: 1; }\n\nfooter .nav-item:not(:last-child) .nav-link {\n    border-right: 1px solid white; }\n\n.box {\n  border: 0px none;\n  padding: 50px 39px 40px 39px;\n  box-shadow: 4px 5px 15px 3px rgba(0, 0, 0, 0.2);\n  font-size: 16px;\n  max-width: 890px;\n  margin: 0 auto; }\n\nh2 {\n  font-size: 24px;\n  position: relative;\n  margin-bottom: 3rem; }\n\nh2:before {\n    content: '';\n    position: absolute;\n    left: -3px;\n    right: -3px;\n    top: 50%;\n    border-top: 1px solid #a7a7a7; }\n\nh2 span {\n    display: inline-block;\n    padding: 0 20px;\n    background: white;\n    position: relative;\n    z-index: 1; }\n\nform {\n  max-width: 450px;\n  margin: 0 auto; }\n\n.form-control {\n  padding: 0px 12px 0px 25px;\n  font-size: 16px;\n  line-height: 53px;\n  height: auto; }\n\n.btn-main {\n  font-size: 20px;\n  height: 55px;\n  line-height: 55px;\n  padding: 0; }\n\n.form-group {\n  margin-bottom: 16px; }\n\n.btn-code {\n  width: 100%;\n  height: 55px;\n  padding: 0;\n  line-height: 55px;\n  font-size: 16px;\n  background: #ffd798;\n  background: linear-gradient(180deg, #ffd798 0%, #ffae2e 90%); }\n"

/***/ }),

/***/ "./src/app/user/resend/resend.page.ts":
/*!********************************************!*\
  !*** ./src/app/user/resend/resend.page.ts ***!
  \********************************************/
/*! exports provided: ResendPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResendPage", function() { return ResendPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_userApi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/userApi.service */ "./src/app/services/userApi.service.ts");
/* harmony import */ var _services_notify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/notify.service */ "./src/app/services/notify.service.ts");
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/settings.service */ "./src/app/services/settings.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ResendPage = /** @class */ (function () {
    function ResendPage(router, userApi, notify, settings) {
        this.router = router;
        this.userApi = userApi;
        this.notify = notify;
        this.settings = settings;
        this.email = '';
    }
    ResendPage.prototype.ngOnInit = function () {
    };
    ResendPage.prototype.ngAfterViewInit = function () {
    };
    ResendPage.prototype.onSubmit = function () {
        var _this = this;
        if (this.email == '') {
            this.notify.showWarning('Please enter email address');
            return;
        }
        this.settings.loading = true;
        this.userApi.sendActivateEmail({
            email: this.email
        }).subscribe(function (res) {
            _this.settings.loading = false;
            if (res.success) {
                _this.notify.showSuccess('Email was sent successfully. Please check your email.');
                _this.router.navigate(['confirmemail']);
            }
            else {
                _this.notify.showWarning(res.error);
            }
        }, function (err) {
            _this.settings.loading = false;
            _this.notify.showError(err);
        });
    };
    ResendPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forgot-page',
            template: __webpack_require__(/*! ./resend.page.html */ "./src/app/user/resend/resend.page.html"),
            styles: [__webpack_require__(/*! ./resend.page.scss */ "./src/app/user/resend/resend.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_userApi_service__WEBPACK_IMPORTED_MODULE_2__["UserApiService"],
            _services_notify_service__WEBPACK_IMPORTED_MODULE_3__["NotifyService"],
            _services_settings_service__WEBPACK_IMPORTED_MODULE_4__["SettingsService"]])
    ], ResendPage);
    return ResendPage;
}());



/***/ }),

/***/ "./src/app/user/resetPwd/resetPwd.page.html":
/*!**************************************************!*\
  !*** ./src/app/user/resetPwd/resetPwd.page.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n    <div class=\"text-center mb-5\">\r\n        <a [routerLink]=\"['/']\"><img src=\"/assets/img/logo1.png\"></a>\r\n    </div>\r\n\r\n    <div class=\"box\">\r\n        <form autocomplete=\"off\" [formGroup]=\"pwdForm\">\r\n            <h2 class=\"text-center\">\r\n                <span>{{'AUTH.RESET_PASSWORD' | translate}}</span>\r\n            </h2>\r\n            <div class=\"form-group\">\r\n                <input type=\"password\"\r\n                       id=\"password\"\r\n                       name=\"password\"\r\n                       class=\"form-control password\"\r\n                       formControlName=\"password\"\r\n                       [(ngModel)]=\"pwdInfo.password\"\r\n                       placeholder=\"{{'AUTH.PASSWORD' | translate}}\">\r\n                <app-field-error-display\r\n                        [displayError]=\"validate.isFieldValid(pwdForm, 'password')\"\r\n                        errorMsg=\"{{'AUTH.PASSWORD_VALIDATION' | translate}}\">\r\n                </app-field-error-display>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <input type=\"password\"\r\n                       class=\"form-control password\"\r\n                       name=\"confirmPassword\"\r\n                       formControlName=\"confirmPassword\"\r\n                       placeholder=\"{{'AUTH.RETYPE_PASSWORD' | translate}}\">\r\n                <app-field-error-display\r\n                        [displayError]=\"validate.isFieldValid(pwdForm, 'confirmPassword')\"\r\n                        errorMsg=\"{{'AUTH.RE_PASSWORD_VALIDATION' | translate}}\">\r\n                </app-field-error-display>\r\n            </div>\r\n\r\n            <button class=\"btn btn-warning w-100 btn-main mb-5\" (click)=\"onSubmit()\">{{'BUTTON.SUBMIT' | translate}}</button>\r\n        </form>\r\n    </div>\r\n    <user-footer></user-footer>\r\n</div>"

/***/ }),

/***/ "./src/app/user/resetPwd/resetPwd.page.scss":
/*!**************************************************!*\
  !*** ./src/app/user/resetPwd/resetPwd.page.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\n  min-height: 100vh;\n  background-repeat: no-repeat, repeat;\n  background-image: url(\"/assets/img/login_number.png\"), linear-gradient(180deg, #6a65e2 0%, #8e77b6 60%, #ffae2e 90%);\n  background-blend-mode: screen;\n  background-position: center center;\n  padding-top: 70px; }\n\nfooter {\n  font-size: 16px;\n  color: white; }\n\nfooter .nav-link {\n    color: white;\n    padding: 0 15px 0 25px;\n    line-height: 1; }\n\nfooter .nav-item:not(:last-child) .nav-link {\n    border-right: 1px solid white; }\n\n.box {\n  border: 0px none;\n  padding: 50px 39px 40px 39px;\n  box-shadow: 4px 5px 15px 3px rgba(0, 0, 0, 0.2);\n  font-size: 16px;\n  max-width: 890px;\n  margin: 0 auto; }\n\nh2 {\n  font-size: 24px;\n  position: relative;\n  margin-bottom: 3rem; }\n\nh2:before {\n    content: '';\n    position: absolute;\n    left: -3px;\n    right: -3px;\n    top: 50%;\n    border-top: 1px solid #a7a7a7; }\n\nh2 span {\n    display: inline-block;\n    padding: 0 20px;\n    background: white;\n    position: relative;\n    z-index: 1; }\n\nform {\n  max-width: 450px;\n  margin: 0 auto; }\n\n.form-control {\n  padding: 0px 12px 0px 25px;\n  font-size: 16px;\n  line-height: 53px;\n  height: auto; }\n\n.btn-main {\n  font-size: 20px;\n  height: 55px;\n  line-height: 55px;\n  padding: 0; }\n\n.form-group {\n  margin-bottom: 16px; }\n\n.btn-code {\n  width: 100%;\n  height: 55px;\n  padding: 0;\n  line-height: 55px;\n  font-size: 16px;\n  background: #ffd798;\n  background: linear-gradient(180deg, #ffd798 0%, #ffae2e 90%); }\n"

/***/ }),

/***/ "./src/app/user/resetPwd/resetPwd.page.ts":
/*!************************************************!*\
  !*** ./src/app/user/resetPwd/resetPwd.page.ts ***!
  \************************************************/
/*! exports provided: ResetPwdPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPwdPage", function() { return ResetPwdPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_userApi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/userApi.service */ "./src/app/services/userApi.service.ts");
/* harmony import */ var _services_notify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/notify.service */ "./src/app/services/notify.service.ts");
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/settings.service */ "./src/app/services/settings.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ui_user_src_app_shared_components_password_validator_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../ui_user/src/app/shared/components/password-validator.component */ "../ui_user/src/app/shared/components/password-validator.component.ts");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/validate.service */ "./src/app/services/validate.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ResetPwdPage = /** @class */ (function () {
    function ResetPwdPage(router, userApi, notify, settings, formBuilder, activatedRoute, validate) {
        this.router = router;
        this.userApi = userApi;
        this.notify = notify;
        this.settings = settings;
        this.formBuilder = formBuilder;
        this.activatedRoute = activatedRoute;
        this.validate = validate;
        this.pwdInfo = {};
        this.pwdInfo.confirm_code = this.activatedRoute.snapshot.params['code'];
    }
    ResetPwdPage.prototype.ngOnInit = function () {
        this.pwdForm = this.formBuilder.group({
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
        }, {
            validator: _ui_user_src_app_shared_components_password_validator_component__WEBPACK_IMPORTED_MODULE_6__["PasswordValidation"].MatchPassword // your validation method
        });
    };
    ResetPwdPage.prototype.ngAfterViewInit = function () {
    };
    ResetPwdPage.prototype.onSubmit = function () {
        var _this = this;
        if (this.pwdForm.valid) {
            this.userApi.resetPassword(this.pwdInfo).subscribe(function (res) {
                if (res.success) {
                    _this.notify.showSuccess('Password was changed succesfully');
                    _this.router.navigate(['/login']);
                }
                else {
                    _this.notify.showWarning(res.error);
                }
            }, function (err) {
                _this.notify.showError(err);
            });
        }
        else {
            this.validate.validateAllFormFields(this.pwdForm);
        }
    };
    ResetPwdPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forgot-page',
            template: __webpack_require__(/*! ./resetPwd.page.html */ "./src/app/user/resetPwd/resetPwd.page.html"),
            styles: [__webpack_require__(/*! ./resetPwd.page.scss */ "./src/app/user/resetPwd/resetPwd.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_userApi_service__WEBPACK_IMPORTED_MODULE_2__["UserApiService"],
            _services_notify_service__WEBPACK_IMPORTED_MODULE_3__["NotifyService"],
            _services_settings_service__WEBPACK_IMPORTED_MODULE_4__["SettingsService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_validate_service__WEBPACK_IMPORTED_MODULE_7__["ValidateService"]])
    ], ResetPwdPage);
    return ResetPwdPage;
}());



/***/ }),

/***/ "./src/app/user/setauth/setauth.page.html":
/*!************************************************!*\
  !*** ./src/app/user/setauth/setauth.page.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n    <div class=\"text-center mb-5\">\r\n        <a [routerLink]=\"['/']\"><img src=\"/assets/img/logo1.png\"></a>\r\n    </div>\r\n\r\n    <div class=\"box mx-auto\" style=\"max-width:800px\" *ngIf=\"step == 0\">\r\n        <div style=\"max-width: 663px; margin: 0 auto\">\r\n            <h2 class=\"text-center\">{{'AUTH.SET_AUTH_TITLE' | translate}}</h2>\r\n            <div class=\"row mt-5 text-center\">\r\n                <div class=\"col-md-4 cursor-pointer\" [ngClass]=\"{'selected': allowed_g2f == 1}\" (click)=\"allowed_g2f = 1;\">\r\n                    <i class=\"fa fa-google\"></i> Google Authenticator\r\n                </div>\r\n                <div class=\"col-md-4 cursor-pointer\" [ngClass]=\"{'selected': allowed_g2f == 2}\" (click)=\"allowed_g2f = 2;\">\r\n                    <i class=\"fa fa-mobile\"></i> SMS\r\n                </div>\r\n                <div class=\"col-md-4 cursor-pointer\" [ngClass]=\"{'selected': allowed_g2f == 3}\" (click)=\"allowed_g2f = 3;\">\r\n                    <i class=\"fa fa-envelope\"></i> Email\r\n                </div>\r\n            </div>\r\n            <div class=\"text-right\">\r\n                <button class=\"btn btn-warning btn-main mt-5 mb-1 mr-5\" (click)=\"onNext()\">{{'BUTTON.NEXT' | translate}} <i class=\"fa fa-arrow-right\"></i></button>\r\n            </div>\r\n            <hr/>\r\n            <p class=\"mt-5\">\r\n                <strong class=\"text-yellow\">{{'COMMON.NOTE' | translate}}:</strong>{{'AUTH.SET_AUTH_NOTE' | translate}}\r\n            </p>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"box mx-auto\" style=\"max-width:800px\" *ngIf=\"step == 1 && allowed_g2f == 1\">\r\n        <div style=\"max-width: 663px; margin: 0 auto\">\r\n            <h2 class=\"text-center\">{{'AUTH.SET_AUTH_TITLE' | translate}}</h2>\r\n\r\n            <div class=\"row mt-5\">\r\n                <div class=\"col-md-6\">\r\n                    <img *ngIf=\"google_secret_code != ''\" style=\"width: 200px; height: 200px;\"\r\n                         src=\"https://chart.googleapis.com/chart?chs=200x200&chld=M|0&cht=qr&chl=otpauth://totp/sistemkoin.com:{{email}}?secret={{google_secret_code}}&issuer=sistemkoin.com\"/>\r\n                </div>\r\n\r\n                <div class=\"col-md-6 text-left\" style=\"margin-top: 20px;\">\r\n                    <p>{{'AUTH.GOOGLE_SECRET_CODE' | translate}} : </p>\r\n                    <p class=\"font-weight-bold text-center\">{{google_secret_code}}</p>\r\n                    <p>{{'AUTH.GOOGLE_AUTHENTICATION_CODE' | translate}} : </p>\r\n                    <input type=\"text\" name=\"code\" class=\"form-control text-center\" name=\"g2f_code\" [(ngModel)]=\"confirm_code\">\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"text-right\">\r\n                <button class=\"btn btn-warning btn-main mt-5 mb-1 mr-5\" (click)=\"step = 0;\">{{'BUTTON.BACK' | translate}} <i class=\"fa fa-arrow-left\"></i></button>\r\n                <button class=\"btn btn-warning btn-main mt-5 mb-1 mr-5\" (click)=\"onSubmitCode()\">{{'BUTTON.SUBMIT' | translate}}</button>\r\n            </div>\r\n            <hr/>\r\n            <p class=\"mt-5\">\r\n                <strong class=\"text-yellow\">{{'COMMON.NOTE' | translate}}:</strong>{{'AUTH.GOOGLE_AUTH_NOTE' | translate}}\r\n            </p>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"box mx-auto\" style=\"max-width:800px\" *ngIf=\"step == 1 && allowed_g2f == 2\">\r\n        <div style=\"max-width: 663px; margin: 0 auto\">\r\n            <h2 class=\"text-center\">{{'AUTH.SET_AUTH_TITLE' | translate}}</h2>\r\n\r\n            <form class=\"mt-5\">\r\n                <!--<div class=\"form-group row\">-->\r\n                    <!--<label class=\"col-sm-4  col-form-label text-sm-right pr-0\">-->\r\n                        <!--{{'AUTH.PHONE_NUMBER' | translate}}:-->\r\n                    <!--</label>-->\r\n                    <!--<div class=\"col-sm-6\">-->\r\n                        <!--<input type=\"tel\" name=\"phone\" id=\"phone\" class=\"form-control\">-->\r\n                    <!--</div>-->\r\n                <!--</div>-->\r\n                <div class=\"form-group row\">\r\n                    <label class=\"col-sm-4  col-form-label text-sm-right pr-0\">\r\n                        {{'AUTH.SMS_AUTHENTICATION_CODE' | translate}}:\r\n                    </label>\r\n                    <div class=\"col-sm-8\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-12 pr-0\">\r\n                                <input type=\"text\" class=\"text-center form-control\" name=\"sms_code\" [(ngModel)]=\"confirm_code\"/>\r\n                            </div>\r\n                            <!--<div class=\"col-4\">-->\r\n                                <!--<button class=\"btn btn-warning w-100 btn-send with-border\" (click)=\"onSendSMS()\">-->\r\n                                    <!--{{'AUTH.SEND_SMS' | translate}}-->\r\n                                <!--</button>-->\r\n                            <!--</div>-->\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n\r\n            <div class=\"text-right\">\r\n                <button class=\"btn btn-warning btn-main mt-5 mb-1 mr-5\" (click)=\"step = 0;\">{{'BUTTON.BACK' | translate}} <i class=\"fa fa-arrow-left\"></i></button>\r\n                <button class=\"btn btn-warning btn-main mt-5 mb-1 mr-5\" (click)=\"onSubmitCode()\">{{'BUTTON.SUBMIT' | translate}}</button>\r\n            </div>\r\n            <hr/>\r\n            <p class=\"mt-5\">\r\n                <strong class=\"text-yellow\">{{'COMMON.NOTE' | translate}}:</strong>{{'AUTH.SMS_AUTH_NOTE' | translate}}\r\n            </p>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"box mx-auto\" style=\"max-width:800px\" *ngIf=\"step == 1 && allowed_g2f == 3\">\r\n        <div style=\"max-width: 663px; margin: 0 auto\">\r\n            <h2 class=\"text-center\">{{'AUTH.SET_AUTH_TITLE' | translate}}</h2>\r\n\r\n            <form class=\"mt-5\">\r\n                <div class=\"form-group row\">\r\n                    <label class=\"col-sm-4  col-form-label text-sm-right pr-0\">\r\n                        {{'AUTH.EMAIL_AUTHENTICATION_CODE' | translate}}:\r\n                    </label>\r\n                    <div class=\"col-sm-8\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-12 pr-0\">\r\n                                <input type=\"text\" class=\"text-center form-control\" name=\"email_code\" [(ngModel)]=\"confirm_code\"/>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n\r\n            <div class=\"text-right\">\r\n                <button class=\"btn btn-warning btn-main mt-5 mb-1 mr-5\" (click)=\"step = 0;\">{{'BUTTON.BACK' | translate}} <i class=\"fa fa-arrow-left\"></i></button>\r\n                <button class=\"btn btn-warning btn-main mt-5 mb-1 mr-5\" (click)=\"onSubmitCode()\">{{'BUTTON.SUBMIT' | translate}}</button>\r\n            </div>\r\n            <hr/>\r\n            <p class=\"mt-5\">\r\n                <strong class=\"text-yellow\">{{'COMMON.NOTE' | translate}}:</strong>{{'AUTH.EMAIL_AUTH_NOTE' | translate}}\r\n            </p>\r\n        </div>\r\n    </div>\r\n    <user-footer></user-footer>\r\n</div>"

/***/ }),

/***/ "./src/app/user/setauth/setauth.page.scss":
/*!************************************************!*\
  !*** ./src/app/user/setauth/setauth.page.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\n  min-height: 100vh;\n  background-repeat: no-repeat, repeat;\n  background-image: url(\"/assets/img/login_number.png\"), linear-gradient(180deg, #6a65e2 0%, #8e77b6 60%, #ffae2e 90%);\n  background-blend-mode: screen;\n  background-position: center center;\n  padding-top: 70px; }\n\nfooter {\n  font-size: 16px;\n  color: white; }\n\nfooter .nav-link {\n    color: white;\n    padding: 0 15px 0 25px;\n    line-height: 1; }\n\nfooter .nav-item:not(:last-child) .nav-link {\n    border-right: 1px solid white; }\n\n.box {\n  border: 0px none;\n  padding: 50px 39px 40px 39px;\n  box-shadow: 4px 5px 15px 3px rgba(0, 0, 0, 0.2);\n  font-size: 16px; }\n\nh2 {\n  font-size: 24px; }\n\nul.info {\n  list-style: none;\n  padding: 0;\n  line-height: 48px; }\n\nul.info li {\n    border-top: 1px solid #dcdcdc; }\n\nul.info li:last-child {\n      border-bottom: 1px solid #dcdcdc; }\n\n.selected {\n  color: #ffae2e; }\n\n.btn-main {\n  font-size: 16px;\n  height: 30px;\n  line-height: 30px;\n  padding: 0;\n  width: 100px; }\n"

/***/ }),

/***/ "./src/app/user/setauth/setauth.page.ts":
/*!**********************************************!*\
  !*** ./src/app/user/setauth/setauth.page.ts ***!
  \**********************************************/
/*! exports provided: SetauthPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetauthPage", function() { return SetauthPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/settings.service */ "./src/app/services/settings.service.ts");
/* harmony import */ var _services_notify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/notify.service */ "./src/app/services/notify.service.ts");
/* harmony import */ var _services_userApi_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/userApi.service */ "./src/app/services/userApi.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SetauthPage = /** @class */ (function () {
    function SetauthPage(router, settings, notify, userApi) {
        this.router = router;
        this.settings = settings;
        this.notify = notify;
        this.userApi = userApi;
        this.allowed_g2f = 0;
        this.step = 0;
        this.email = '';
        this.google_secret_code = '';
        this.phone_number = '';
        this.confirm_code = '';
    }
    SetauthPage.prototype.ngOnInit = function () {
        if (this.settings.getUserSetting('allowed_g2f') === undefined || this.settings.getUserSetting('allowed_g2f') != 0) {
            this.router.navigate(['/']);
        }
        if (this.settings.getUserSetting('email') === undefined || this.settings.getUserSetting('email') == '') {
            this.router.navigate(['/']);
        }
        this.email = this.settings.getUserSetting('email');
    };
    SetauthPage.prototype.ngAfterViewInit = function () {
    };
    SetauthPage.prototype.setIntlTelInput = function () {
        $("#phone").intlTelInput({
            placeholderNumberType: "MOBILE",
            preferredCountries: ['tr'],
            separateDialCode: true,
            utilsScript: 'assets/js/utils.js'
        });
        $('.intl-tel-input').width('100%');
        clearInterval(this.timerID);
    };
    SetauthPage.prototype.onNext = function () {
        var _this = this;
        if (this.allowed_g2f == 0) {
            this.notify.showWarning('Please select mode');
            return;
        }
        else if (this.allowed_g2f == 1) {
            this.settings.loading = true;
            this.userApi.generateUserG2FSecurityCode({
                email: this.email
            }).subscribe(function (res) {
                _this.settings.loading = false;
                if (res.success) {
                    _this.google_secret_code = res.code;
                    _this.confirm_code = '';
                    _this.step = 1;
                }
                else {
                    _this.notify.showWarning(res.error);
                }
            }, function (err) {
                _this.settings.loading = false;
            });
        }
        else if (this.allowed_g2f == 2) {
            // let _parent = this;
            // this.timerID = setInterval(function () {
            //     if ($('#phone').length > 0 && typeof $("#phone").intlTelInput("getNumber") !== 'string') {
            //         _parent.setIntlTelInput();
            //     }
            // }, 200);
            this.settings.loading = true;
            this.userApi.sendUserSMSCode({
                email: this.email,
            }).subscribe(function (res) {
                _this.settings.loading = false;
                if (res.success) {
                    _this.notify.showSuccess('Please check SMS code on your registered phone.');
                    _this.confirm_code = '';
                    _this.step = 1;
                }
                else {
                    _this.notify.showWarning(res.error);
                }
            }, function (err) {
                _this.settings.loading = false;
            });
        }
        else if (this.allowed_g2f == 3) {
            this.settings.loading = true;
            this.userApi.sendUserEmailCode({
                email: this.email,
            }).subscribe(function (res) {
                _this.settings.loading = false;
                if (res.success) {
                    _this.notify.showSuccess('Please check confirm code on your registered email.');
                    _this.confirm_code = '';
                    _this.step = 1;
                }
                else {
                    _this.notify.showWarning(res.error);
                }
            }, function (err) {
                _this.settings.loading = false;
            });
        }
    };
    SetauthPage.prototype.onSendSMS = function () {
        // this.settings.loading = true;
        // this.userApi.sendUserSMSCode({
        //     email: this.email,
        // }).subscribe((res:any) => {
        //     this.settings.loading = false;
        //
        //     if (res.success) {
        //         this.notify.showSuccess('Please check SMS code on your phone.');
        //     } else {
        //         this.notify.showWarning('Your phone number is wrong.');
        //     }
        // }, err => {
        //     this.settings.loading = false;
        // });
    };
    SetauthPage.prototype.ngOnDestroy = function () {
        if (this.timerID) {
            clearInterval(this.timerID);
        }
    };
    SetauthPage.prototype.onSubmitCode = function () {
        var _this = this;
        this.settings.loading = true;
        this.userApi.confirmCodeAndSetAuth({
            code: this.confirm_code,
            email: this.email,
            allowed_g2f: this.allowed_g2f
        }).subscribe(function (res) {
            _this.settings.loading = false;
            if (res.success) {
                _this.notify.showSuccess('You have set Authentication mode successfully.');
                _this.router.navigate(['/login']);
            }
            else {
                _this.notify.showWarning(res.error);
            }
        }, function (err) {
            _this.settings.loading = false;
            _this.notify.showError(err);
        });
    };
    SetauthPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./setauth.page.html */ "./src/app/user/setauth/setauth.page.html"),
            styles: [__webpack_require__(/*! ./setauth.page.scss */ "./src/app/user/setauth/setauth.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_settings_service__WEBPACK_IMPORTED_MODULE_2__["SettingsService"],
            _services_notify_service__WEBPACK_IMPORTED_MODULE_3__["NotifyService"],
            _services_userApi_service__WEBPACK_IMPORTED_MODULE_4__["UserApiService"]])
    ], SetauthPage);
    return SetauthPage;
}());



/***/ }),

/***/ "./src/app/user/signup/signup.page.html":
/*!**********************************************!*\
  !*** ./src/app/user/signup/signup.page.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n    <div class=\"text-center mb-5\">\r\n        <a [routerLink]=\"['/']\"><img src=\"/assets/img/logo1.png\"></a>\r\n    </div>\r\n\r\n    <div class=\"box\">\r\n        <form autocomplete=\"off\" [formGroup]=\"signup\">\r\n            <h2 class=\"text-center\">\r\n                <span>{{'AUTH.REGISTER' | translate}}</span>\r\n            </h2>\r\n            <div class=\"form-group\">\r\n                <input type=\"text\" name=\"name\" class=\"form-control\" formControlName=\"name\"\r\n                       [(ngModel)]=\"signupInfo.name\" placeholder=\"{{'AUTH.NAME' | translate}}\">\r\n                <app-field-error-display [displayError]=\"validate.isFieldValid(signup, 'name')\"\r\n                                         errorMsg=\"{{'AUTH.NAME_VALIDATION' | translate}}\">\r\n                </app-field-error-display>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <input type=\"text\" name=\"surname\" class=\"form-control\" formControlName=\"surname\"\r\n                       [(ngModel)]=\"signupInfo.surname\"\r\n                       placeholder=\"{{'AUTH.SURNAME' | translate}}\">\r\n                <app-field-error-display\r\n                        [displayError]=\"validate.isFieldValid(signup, 'surname')\"\r\n                        errorMsg=\"{{'AUTH.SURNAME_VALIDATION' | translate}}\">\r\n                </app-field-error-display>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <input type=\"tel\" name=\"phone\" id=\"phone\" class=\"form-control\"\r\n                       formControlName=\"phone\"\r\n                       [(ngModel)]=\"signupInfo.phone\"\r\n                       placeholder=\"{{'AUTH.PHONE_NUMBER' | translate}}\">\r\n                <app-field-error-display [displayError]=\"validate.isFieldValid(signup, 'phone')\"\r\n                                         errorMsg=\"{{'AUTH.PHONE_VALIDATION' | translate}}\">\r\n                </app-field-error-display>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <input type=\"text\" name=\"email\" class=\"form-control\" formControlName=\"email\"\r\n                       [(ngModel)]=\"signupInfo.email\"\r\n                       placeholder=\"{{'AUTH.EMAIL_ADDRESS' | translate}}\">\r\n                <app-field-error-display [displayError]=\"validate.isFieldValid(signup, 'email')\"\r\n                                         errorMsg=\"{{'AUTH.EMAIL_VALIDATION' | translate}}\">\r\n                </app-field-error-display>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <input type=\"password\"\r\n                       name=\"password\"\r\n                       class=\"form-control\"\r\n                       formControlName=\"password\"\r\n                       [(ngModel)]=\"signupInfo.password\"\r\n                       placeholder=\"{{'AUTH.PASSWORD' | translate}}\">\r\n                <app-field-error-display\r\n                        [displayError]=\"validate.isFieldValid(signup, 'password')\"\r\n                        errorMsg=\"{{'AUTH.PASSWORD_VALIDATION' | translate}}\">\r\n                </app-field-error-display>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <input type=\"password\"\r\n                       class=\"form-control\"\r\n                       name=\"confirmPassword\"\r\n                       formControlName=\"confirmPassword\"\r\n                       placeholder=\"{{'AUTH.RETYPE_PASSWORD' | translate}}\">\r\n                <app-field-error-display\r\n                        [displayError]=\"validate.isFieldValid(signup, 'confirmPassword')\"\r\n                        errorMsg=\"{{'AUTH.RE_PASSWORD_VALIDATION' | translate}}\">\r\n                </app-field-error-display>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <input type=\"text\" name=\"ref_name\" class=\"form-control\"\r\n                       formControlName=\"ref_name\" readonly\r\n                       [(ngModel)]=\"signupInfo.ref_name\"\r\n                       placeholder=\"{{'AUTH.REFERENCE' | translate}}\">\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label class=\"custom-checkbox mb-0\">{{'AUTH.AGREE_TERMS' | translate}}\r\n                    <a class=\"text-yellow\" href=\"/terms\" target=\"_blank\">\r\n                        {{'FOOTER.TERMS_CONDITIONS' | translate}} </a>\r\n                    <input type=\"checkbox\" id=\"accept-term\" name=\"optionsCheckboxes\"\r\n                           formControlName=\"agree\"\r\n                           [(ngModel)]=\"signupInfo.agree\">\r\n                    <span></span>\r\n                </label>\r\n            </div>\r\n\r\n            <button class=\"btn btn-warning w-100 btn-main mb-5\" (click)=\"onSignup()\">{{'AUTH.REGISTER' | translate}}</button>\r\n            <p class=\"text-center\">{{'AUTH.HAVE_ACCOUNT_SIGN_IN' | translate}}\r\n                <a class=\"text-yellow cursor-pointer\" [routerLink]=\"['/login']\">{{'AUTH.LOG_IN' | translate}}</a>\r\n            </p>\r\n        </form>\r\n    </div>\r\n    <user-footer></user-footer>\r\n</div>"

/***/ }),

/***/ "./src/app/user/signup/signup.page.scss":
/*!**********************************************!*\
  !*** ./src/app/user/signup/signup.page.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\n  min-height: 100vh;\n  background-repeat: no-repeat, repeat;\n  background-image: url(\"/assets/img/login_number.png\"), linear-gradient(180deg, #6a65e2 0%, #8e77b6 60%, #ffae2e 90%);\n  background-blend-mode: screen;\n  background-position: center center;\n  padding-top: 70px; }\n\nfooter {\n  font-size: 16px;\n  color: white; }\n\nfooter .nav-link {\n    color: white;\n    padding: 0 15px 0 25px;\n    line-height: 1; }\n\nfooter .nav-item:not(:last-child) .nav-link {\n    border-right: 1px solid white; }\n\n.box {\n  border: 0px none;\n  padding: 50px 39px 40px 39px;\n  box-shadow: 4px 5px 15px 3px rgba(0, 0, 0, 0.2);\n  font-size: 16px;\n  max-width: 890px;\n  margin: 0 auto; }\n\nh2 {\n  font-size: 24px;\n  position: relative;\n  margin-bottom: 3rem; }\n\nh2:before {\n    content: '';\n    position: absolute;\n    left: -3px;\n    right: -3px;\n    top: 50%;\n    border-top: 1px solid #a7a7a7; }\n\nh2 span {\n    display: inline-block;\n    padding: 0 20px;\n    background: white;\n    position: relative;\n    z-index: 1; }\n\nform {\n  max-width: 450px;\n  margin: 0 auto; }\n\n.form-control {\n  padding: 0px 12px 0px 25px;\n  font-size: 16px;\n  line-height: 40px;\n  height: auto; }\n\n.btn-main {\n  font-size: 20px;\n  height: 55px;\n  line-height: 55px;\n  padding: 0; }\n\n.form-group {\n  margin-bottom: 16px; }\n\n.btn-code {\n  width: 100%;\n  height: 55px;\n  padding: 0;\n  line-height: 55px;\n  font-size: 16px;\n  background: #ffd798;\n  background: linear-gradient(180deg, #ffd798 0%, #ffae2e 90%); }\n"

/***/ }),

/***/ "./src/app/user/signup/signup.page.ts":
/*!********************************************!*\
  !*** ./src/app/user/signup/signup.page.ts ***!
  \********************************************/
/*! exports provided: SignupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPage", function() { return SignupPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ui_user_src_app_shared_components_password_validator_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../ui_user/src/app/shared/components/password-validator.component */ "../ui_user/src/app/shared/components/password-validator.component.ts");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _services_notify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/notify.service */ "./src/app/services/notify.service.ts");
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/settings.service */ "./src/app/services/settings.service.ts");
/* harmony import */ var _services_userApi_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/userApi.service */ "./src/app/services/userApi.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SignupPage = /** @class */ (function () {
    function SignupPage(router, formBuilder, validate, notify, settings, userApi) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.validate = validate;
        this.notify = notify;
        this.settings = settings;
        this.userApi = userApi;
        this.signupInfo = {
            agree: false
        };
    }
    SignupPage.prototype.ngOnInit = function () {
        var _this = this;
        if (this.router.url.includes('/ref')) {
            var url = this.router.url;
            var ref_code_1 = url.substring(url.lastIndexOf('/') + 1);
            this.settings.loading = true;
            this.userApi.getUserByRefCode({
                ref_code: ref_code_1
            }).subscribe(function (res) {
                if (res.success) {
                    _this.signupInfo.ref_code = ref_code_1;
                    _this.signupInfo.ref_name = res.data.name;
                }
            });
        }
        this.signup = this.formBuilder.group({
            name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            surname: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            phone: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,4}$")]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            agree: [''],
            ref_name: ['']
        }, {
            validator: _ui_user_src_app_shared_components_password_validator_component__WEBPACK_IMPORTED_MODULE_3__["PasswordValidation"].MatchPassword // your validation method
        });
    };
    SignupPage.prototype.ngAfterViewInit = function () {
        $('#phone').intlTelInput({
            placeholderNumberType: 'MOBILE',
            preferredCountries: ['tr'],
            separateDialCode: true,
            utilsScript: '/assets/js/utils.js'
        });
        $('.intl-tel-input').width('100%');
    };
    SignupPage.prototype.onSignup = function () {
        var _this = this;
        if (this.signup.valid) {
            if (!this.signupInfo.agree) {
                this.notify.showWarning('Lütfen kullanıcı sözleşmesini onaylayınız');
                return;
            }
            var intlNumber = $("#phone").intlTelInput("getNumber");
            this.signupInfo.phone_number = intlNumber;
            this.settings.loading = true;
            this.userApi.register(this.signupInfo).subscribe(function (res) {
                _this.settings.loading = false;
                if (res.success) {
                    _this.notify.showSuccess('Registered Successfully');
                    _this.router.navigate(["/confirmemail"]);
                }
                else {
                    _this.notify.showWarning(res.error);
                }
            }, function (err) {
                _this.settings.loading = false;
                _this.notify.showError(err);
            });
        }
        else {
            this.validate.validateAllFormFields(this.signup);
        }
    };
    SignupPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup-page',
            template: __webpack_require__(/*! ./signup.page.html */ "./src/app/user/signup/signup.page.html"),
            styles: [__webpack_require__(/*! ./signup.page.scss */ "./src/app/user/signup/signup.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_validate_service__WEBPACK_IMPORTED_MODULE_4__["ValidateService"],
            _services_notify_service__WEBPACK_IMPORTED_MODULE_5__["NotifyService"],
            _services_settings_service__WEBPACK_IMPORTED_MODULE_6__["SettingsService"],
            _services_userApi_service__WEBPACK_IMPORTED_MODULE_7__["UserApiService"]])
    ], SignupPage);
    return SignupPage;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    // production: false,
    // server: 'http://127.0.0.1/sistemkoin/api/public',
    // pusher_app_key: '94252f3d48a1de771d1a',
    // pusher_app_cluster: 'ap1'
    production: true,
    server: 'http://167.86.101.115',
    pusher_app_key: '94252f3d48a1de771d1a',
    pusher_app_cluster: 'ap1'
};
/*
* In development mode, to ignore zone related error stack frames such as
* `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
* import the following file, but please comment it out in production mode
* because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\xampp\htdocs\sistemkoin\sistemkoin2\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map