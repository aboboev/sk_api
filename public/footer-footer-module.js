(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["footer-footer-module"],{

/***/ "./src/app/footer/buycoin/buycoin.page.html":
/*!**************************************************!*\
  !*** ./src/app/footer/buycoin/buycoin.page.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-container\">\r\n    <div class=\"container\">\r\n        <h3 class=\"text-center mb-4\">\r\n            {{'FOOTER.HOW_TO_BUY_COIN' | translate}}\r\n        </h3>\r\n        <p>Sitemizden coin satın alabilmek için, sitemize girip hesap oluşturmanız ve profilinizi onaylamanız\r\n            gerekmektedir. Onay sonucunda hesabınıza yatırdığınız miktar para kadar coin alabilirsiniz .</p>\r\n        <p>İlk olarak satın almak istediğiniz coini seçmelisiniz. Daha sonra ALIŞ-SATIŞ EMİRLERİ bölümünden, satın almak\r\n            isteğiniz fiyatı ve miktarı girerek bekleyebilirsiniz. Girdiğiniz fiyattan başka bir üye veya sizin\r\n            tarafınızdan satım emri gelirse sistemimiz sizi otomatik olarak eşleştirecek ve sizde coini satın almış\r\n            olacaksınız.</p>\r\n        <!--<p>Buna ek olarak HIZLI SATIN AL Bölümünden satın almak istediğiniz miktarı yazarak hiç beklemeden  en hızlı şekilde coin satın alabilirsiniz.</p>-->\r\n        <p>#Sistemkoin</p>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/footer/buycoin/buycoin.page.scss":
/*!**************************************************!*\
  !*** ./src/app/footer/buycoin/buycoin.page.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-termsandconditions-page h6 {\n  font-size: 18px;\n  font-weight: bold;\n  color: #ffad29;\n  margin-bottom: 0px;\n  line-height: 1; }\n"

/***/ }),

/***/ "./src/app/footer/buycoin/buycoin.page.ts":
/*!************************************************!*\
  !*** ./src/app/footer/buycoin/buycoin.page.ts ***!
  \************************************************/
/*! exports provided: BuycoinPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuycoinPage", function() { return BuycoinPage; });
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


var BuycoinPage = /** @class */ (function () {
    function BuycoinPage(router) {
        this.router = router;
    }
    BuycoinPage.prototype.ngOnInit = function () {
    };
    BuycoinPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-termsandconditions-page',
            template: __webpack_require__(/*! ./buycoin.page.html */ "./src/app/footer/buycoin/buycoin.page.html"),
            styles: [__webpack_require__(/*! ./buycoin.page.scss */ "./src/app/footer/buycoin/buycoin.page.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], BuycoinPage);
    return BuycoinPage;
}());



/***/ }),

/***/ "./src/app/footer/contactus/contactus.page.html":
/*!******************************************************!*\
  !*** ./src/app/footer/contactus/contactus.page.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bg\">\r\n    <h1 class=\"mb-4 text-center text-white\">\r\n        {{'contactus.title' | translate}}\r\n    </h1>\r\n    <div class=\"title-box text-center text-white mx-auto\">\r\n        <h6 class=\"mb-3 text-white\">{{'contactus.Got a Question' | translate}}?</h6>\r\n        <div>{{'contactus.text1' | translate}}:</div>\r\n        <a class=\"btn\">{{'contactus.button' | translate}}</a>\r\n        <div>{{'contactus.text2' | translate}}</div>\r\n    </div>\r\n</div>\r\n<div class=\"page-container\">\r\n    <h6 class=\"text-center mb-5\">\r\n        {{'contactus.Join our online communities' | translate}}\r\n    </h6>\r\n    <div class=\"text-center d-flex justify-content-center social-icons\">\r\n        <a>\r\n            <div class=\"my-icon facebook\" [inlineSVG]=\"'/assets/icon/facebook.svg'\"></div>\r\n            Facebook\r\n        </a>\r\n        <a>\r\n            <div class=\"my-icon twitter\" [inlineSVG]=\"'/assets/icon/twitter.svg'\"></div>\r\n            Twitter\r\n        </a>\r\n        <a>\r\n            <div class=\"my-icon telegram\" [inlineSVG]=\"'/assets/icon/telegram.svg'\"></div>\r\n            Telegram\r\n        </a>\r\n        <a>\r\n            <div class=\"my-icon instagram\" [inlineSVG]=\"'/assets/icon/instagram.svg'\"></div>\r\n            Instagram\r\n        </a>\r\n        <a>\r\n            <div class=\"my-icon\" [inlineSVG]=\"'/assets/icon/medium.svg'\"></div>\r\n            Medium\r\n        </a>\r\n        <a>\r\n            <div class=\"my-icon\" [inlineSVG]=\"'/assets/icon/reddit.svg'\"></div>\r\n            Reddit\r\n        </a>\r\n        <a>\r\n            <div class=\"my-icon\" [inlineSVG]=\"'/assets/icon/steem.svg'\"></div>\r\n            Steem\r\n        </a>\r\n    </div>\r\n    <div class=\"contact-box mx-auto d-flex justify-content-center text-center\">\r\n        <a>\r\n            <div class=\"contact-icon\" [inlineSVG]=\"'/assets/icon/mobile.svg'\"></div>\r\n            5316251897\r\n        </a>\r\n        <a>\r\n            <div class=\"contact-icon\" [inlineSVG]=\"'/assets/icon/phone.svg'\"></div>\r\n            0850 304 1 282\r\n        </a>\r\n        <a>\r\n            <div class=\"contact-icon\" [inlineSVG]=\"'/assets/icon/email.svg'\"></div>\r\n            admin@sistemkoin.com\r\n        </a>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/footer/contactus/contactus.page.scss":
/*!******************************************************!*\
  !*** ./src/app/footer/contactus/contactus.page.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-contactus-page .bg {\n  min-height: 300px;\n  background: url(\"/assets/img/contactus-bg.png\") no-repeat;\n  background-position: 0% top;\n  background-size: cover;\n  padding-top: 35px;\n  padding-bottom: 80px; }\n\napp-contactus-page .page-container {\n  padding-top: 45px; }\n\napp-contactus-page h1 {\n  font-size: 30px;\n  font-weight: bold; }\n\napp-contactus-page h6 {\n  font-size: 18px; }\n\napp-contactus-page .title-box {\n  background: #e09e4f;\n  max-width: 750px;\n  padding: 30px 0;\n  margin-top: 35px; }\n\napp-contactus-page .title-box .btn {\n    border: 1px solid white;\n    width: 280px;\n    max-width: 100%;\n    padding: 9px 0;\n    margin: 25px 0 30px 0; }\n\napp-contactus-page .social-icons a {\n  margin-left: 42px;\n  margin-right: 43px; }\n\napp-contactus-page .social-icons .cls-1 {\n  fill: #6663e7; }\n\napp-contactus-page .my-icon {\n  margin-bottom: 20px;\n  height: 44px; }\n\napp-contactus-page .my-icon svg {\n    margin-top: auto;\n    margin-bottom: auto; }\n\napp-contactus-page .facebook svg {\n  width: 22px;\n  height: 41px; }\n\napp-contactus-page .twitter svg {\n  width: 50px;\n  height: 43px; }\n\napp-contactus-page .telegram svg {\n  width: 50px;\n  height: 42px; }\n\napp-contactus-page .instagram svg {\n  width: 42px;\n  height: 42px; }\n\napp-contactus-page .contact-box {\n  max-width: 730px;\n  border: 1px solid #605f60;\n  padding: 30px 0;\n  margin-top: 5rem; }\n\napp-contactus-page .contact-box a:not(:last-child) {\n    margin-right: 6rem; }\n\napp-contactus-page .contact-icon {\n  height: 30px;\n  margin-bottom: 15px; }\n"

/***/ }),

/***/ "./src/app/footer/contactus/contactus.page.ts":
/*!****************************************************!*\
  !*** ./src/app/footer/contactus/contactus.page.ts ***!
  \****************************************************/
/*! exports provided: ContactUsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsPage", function() { return ContactUsPage; });
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


var ContactUsPage = /** @class */ (function () {
    function ContactUsPage(router) {
        this.router = router;
    }
    ContactUsPage.prototype.ngOnInit = function () {
    };
    ContactUsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contactus-page',
            template: __webpack_require__(/*! ./contactus.page.html */ "./src/app/footer/contactus/contactus.page.html"),
            styles: [__webpack_require__(/*! ./contactus.page.scss */ "./src/app/footer/contactus/contactus.page.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ContactUsPage);
    return ContactUsPage;
}());



/***/ }),

/***/ "./src/app/footer/footer.module.ts":
/*!*****************************************!*\
  !*** ./src/app/footer/footer.module.ts ***!
  \*****************************************/
/*! exports provided: FooterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterModule", function() { return FooterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _footer_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer.routing */ "./src/app/footer/footer.routing.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _contactus_contactus_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contactus/contactus.page */ "./src/app/footer/contactus/contactus.page.ts");
/* harmony import */ var _termsandconditions_termsandconditions_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./termsandconditions/termsandconditions.page */ "./src/app/footer/termsandconditions/termsandconditions.page.ts");
/* harmony import */ var _buycoin_buycoin_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./buycoin/buycoin.page */ "./src/app/footer/buycoin/buycoin.page.ts");
/* harmony import */ var _sellcoin_sellcoin_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sellcoin/sellcoin.page */ "./src/app/footer/sellcoin/sellcoin.page.ts");
/* harmony import */ var _overview_overview_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./overview/overview.page */ "./src/app/footer/overview/overview.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var FooterModule = /** @class */ (function () {
    function FooterModule() {
    }
    FooterModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_footer_routing__WEBPACK_IMPORTED_MODULE_3__["FooterRoutes"]),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            ],
            declarations: [
                _contactus_contactus_page__WEBPACK_IMPORTED_MODULE_5__["ContactUsPage"],
                _termsandconditions_termsandconditions_page__WEBPACK_IMPORTED_MODULE_6__["TermsAndConditionsPage"],
                _buycoin_buycoin_page__WEBPACK_IMPORTED_MODULE_7__["BuycoinPage"],
                _sellcoin_sellcoin_page__WEBPACK_IMPORTED_MODULE_8__["SellcoinPage"],
                _overview_overview_page__WEBPACK_IMPORTED_MODULE_9__["OverviewPage"]
            ]
        })
    ], FooterModule);
    return FooterModule;
}());



/***/ }),

/***/ "./src/app/footer/footer.routing.ts":
/*!******************************************!*\
  !*** ./src/app/footer/footer.routing.ts ***!
  \******************************************/
/*! exports provided: FooterRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterRoutes", function() { return FooterRoutes; });
/* harmony import */ var _contactus_contactus_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contactus/contactus.page */ "./src/app/footer/contactus/contactus.page.ts");
/* harmony import */ var _termsandconditions_termsandconditions_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./termsandconditions/termsandconditions.page */ "./src/app/footer/termsandconditions/termsandconditions.page.ts");
/* harmony import */ var _sellcoin_sellcoin_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sellcoin/sellcoin.page */ "./src/app/footer/sellcoin/sellcoin.page.ts");
/* harmony import */ var _overview_overview_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./overview/overview.page */ "./src/app/footer/overview/overview.page.ts");
/* harmony import */ var _buycoin_buycoin_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./buycoin/buycoin.page */ "./src/app/footer/buycoin/buycoin.page.ts");





var FooterRoutes = [
    { path: 'contactus', component: _contactus_contactus_page__WEBPACK_IMPORTED_MODULE_0__["ContactUsPage"] },
    { path: 'terms', component: _termsandconditions_termsandconditions_page__WEBPACK_IMPORTED_MODULE_1__["TermsAndConditionsPage"] },
    { path: 'buycoin', component: _buycoin_buycoin_page__WEBPACK_IMPORTED_MODULE_4__["BuycoinPage"] },
    { path: 'overview', component: _overview_overview_page__WEBPACK_IMPORTED_MODULE_3__["OverviewPage"] },
    { path: 'sellcoin', component: _sellcoin_sellcoin_page__WEBPACK_IMPORTED_MODULE_2__["SellcoinPage"] },
];


/***/ }),

/***/ "./src/app/footer/overview/overview.page.html":
/*!****************************************************!*\
  !*** ./src/app/footer/overview/overview.page.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-container\">\r\n    <div class=\"container\">\r\n        <h3 class=\"text-center mb-4\">\r\n            {{'FOOTER.COIN_OVERVIEW' | translate}}\r\n        </h3>\r\n        <p>Kripto Para (Coinler) Hakkında Bilinmesi Gerekenler :</p>\r\n        <p>Kripto para (Coinler), dijital ortam üzerinde üretilip yazılım uzmanları tarafından yüksek performansa sahip bilgisayarlar ile üretilen ve sanal dünyada coin olarak adlandırılıp dünya pazarında banka gibi merkezi otoritelere ihtiyaç duymadan transferi yapılabilen ve para yerine kullanılabilen alış veri aracıdır.\r\n        <p>(Coin kelimesinin Türkçe karşılığı : Madeni para)</p>\r\n        <p>İlk kripto para’yı 2009 yılında kriptografi grubunda ortaya atan Satoshi Nakamoto rumuzlu uzman bitcoin olarak piyasaya sürdü.</p>\r\n        <p>Bitcoin, dünya markaları ve dünya devleri tarafından kullanımı artarak alış verişlerde kullanılıp değerini ciddi rakamlara taşıdı.</p>\r\n        <p>Bu durum coin borsasını oluşturarak alt coinlerin oluşmasına sebeb oldu. Bitcoin ‘in peşinden bir çok altcoin yazılımları piyasada talep görerek kriptopara kullanımları hızla dünya gezegeninde artmaya başladı.Geleceğin para yatırım ve transfer sistemi olarak adlandırılan kriptopara yaklaşık olarak 1000 civarında coin üretimi yapan firmalar tarafından piyasa sürülmektedir.</p>\r\n        <p>Siz değerli üyelerimizin bildigi üzere bir mal yada hizmetin değer görüp değerlenmesi arz talep durumu ile doğrudan bağlantılıdır.</p>\r\n        <p>Yani türk lirasının dünya pazarında talep görmesi bizim para birimimiz olan türk lirasının euro gibi para birimleri karşısında değer artışını sağlar.Tam tersi durumda türk lirasının değerini azaltır. İşte bu durum göz önünde bulundurulduğunda kripto para (coin); hiçbir devlet ya da kuruluşun para değerinin dünya piyasasındaki değer ve konumundan doğrudan etkilenmeden tamamen piyasadaki arz talep durumuyla değerini arttırması ile hızla değer kazanmaktadır.Kripto para nın bir diğer avantajı ise kopyalanamaz olmasıdır. Yani 1 coin nin üretimi o kadar zor ve algoritması karışıktır ki kopyalanması ve ulaşılabilinmesi çok ciddi yatırımlar ister.Kripto para üretimi yapımına da Kripto Para Madenciliği ve dünya adıyla Cryptocurrency Blockchain denilmektedir.Blockchain (Blok Zinciri), yüksek teknolojik donanımlı bilgisayalarda üretilen kodlar arasında yani veriler arasında arasında bağlantılar(zinciler) oluşturmak anlamına gelir ki coin üretimin esası budur. Bu üretilen blokzincirli kodların bir araya gelmesi ile oluşan her bir veri coin yani kriptopara olarak adlandırılır.Üretimi zor ve kopyalanamaz olması sebebinden dolayıdır ki ; dünya ekonomi devleri bitcoin gibi kriptopara ticareti yapan firmalara yatırım yapmaktadırlar.Kripto para sadece e cüzdan dediğimiz sanal ortamlarda raslayabileceğimiz bir paradır aslında. Bu durum insanlara güven sorunu oluştursa da şuan bankalardaki paralarımız bizim karşımıza hem sanal ortamlarda çıkmaktadır.Yani dünya hızla sanal ortam üzerinden yönetilmeye başladığına göre artık kriptopara kullanılması kaçınılmaz son olarak görülmektedir.</p>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/footer/overview/overview.page.scss":
/*!****************************************************!*\
  !*** ./src/app/footer/overview/overview.page.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-termsandconditions-page h6 {\n  font-size: 18px;\n  font-weight: bold;\n  color: #ffad29;\n  margin-bottom: 0px;\n  line-height: 1; }\n"

/***/ }),

/***/ "./src/app/footer/overview/overview.page.ts":
/*!**************************************************!*\
  !*** ./src/app/footer/overview/overview.page.ts ***!
  \**************************************************/
/*! exports provided: OverviewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverviewPage", function() { return OverviewPage; });
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


var OverviewPage = /** @class */ (function () {
    function OverviewPage(router) {
        this.router = router;
    }
    OverviewPage.prototype.ngOnInit = function () {
    };
    OverviewPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-termsandconditions-page',
            template: __webpack_require__(/*! ./overview.page.html */ "./src/app/footer/overview/overview.page.html"),
            styles: [__webpack_require__(/*! ./overview.page.scss */ "./src/app/footer/overview/overview.page.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], OverviewPage);
    return OverviewPage;
}());



/***/ }),

/***/ "./src/app/footer/sellcoin/sellcoin.page.html":
/*!****************************************************!*\
  !*** ./src/app/footer/sellcoin/sellcoin.page.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-container\">\r\n    <div class=\"container\">\r\n        <h3 class=\"text-center mb-4\">\r\n            {{'FOOTER.HOW_TO_SELL_COIN' | translate}}\r\n        </h3>\r\n        <p>Sitemizde mevcut olan coinlerden satın alabilmek için, sitemize girip hesap oluşturmanız ve profilinizi onaylatmanız gerekmektedir. Profil onaylama işlemi için ''güvenlik ayarları'' bölümünü kullanabilirsiniz. Onay sonucunda hesabınıza yatırdığınız miktar para kadar koin alabilirsiniz .</p>\r\n        <p>Koin satabilmek için öncelikle satmak istediğiniz koini seçmelisiniz. Daha sonra SATIŞ EMRİ OLUŞTUR bölümünden satmak istediğiniz fiyatı ve miktarı girerek satılanlar listesinde satış işleminizi takip edebilirsiniz. Diğer kullanıcılar veya kendiniz Sizin girdiiğiniz fiyattan  almak istediklerinde sistemimiz otomatik olarak bunları eşleştirecektir. Koin satım işleminiz tamamlanacaktır.</p>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/footer/sellcoin/sellcoin.page.scss":
/*!****************************************************!*\
  !*** ./src/app/footer/sellcoin/sellcoin.page.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-termsandconditions-page h6 {\n  font-size: 18px;\n  font-weight: bold;\n  color: #ffad29;\n  margin-bottom: 0px;\n  line-height: 1; }\n"

/***/ }),

/***/ "./src/app/footer/sellcoin/sellcoin.page.ts":
/*!**************************************************!*\
  !*** ./src/app/footer/sellcoin/sellcoin.page.ts ***!
  \**************************************************/
/*! exports provided: SellcoinPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellcoinPage", function() { return SellcoinPage; });
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


var SellcoinPage = /** @class */ (function () {
    function SellcoinPage(router) {
        this.router = router;
    }
    SellcoinPage.prototype.ngOnInit = function () {
    };
    SellcoinPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-termsandconditions-page',
            template: __webpack_require__(/*! ./sellcoin.page.html */ "./src/app/footer/sellcoin/sellcoin.page.html"),
            styles: [__webpack_require__(/*! ./sellcoin.page.scss */ "./src/app/footer/sellcoin/sellcoin.page.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], SellcoinPage);
    return SellcoinPage;
}());



/***/ }),

/***/ "./src/app/footer/termsandconditions/termsandconditions.page.html":
/*!************************************************************************!*\
  !*** ./src/app/footer/termsandconditions/termsandconditions.page.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-container\">\r\n    <div class=\"container\">\r\n        <h3 class=\"text-center mb-4\">\r\n            {{'FOOTER.TERMS_CONDITIONS' | translate}}\r\n        </h3>\r\n        <h6 class=\"home-color\">1.TARAFLAR</h6>\r\n        <p>Bu kullanım sözleşmesi, Sistemsa Bilişim Teknolojileri A.Ş. ve www.sistemkoin.com sitesine üye olan\r\n            kullanıcılar arasında düzenlenmiştir.</p>\r\n        <h6 class=\"home-color\">2.TANIMLAR</h6>\r\n        <p>Bu sözleşmede yer alan tanımlar;</p>\r\n        <p>2.1.www.sistemkoin.com; Yeni Mah. Dorukoba Cad. 1198. Sk. Dorukoba Villaları No:1 Bandırma/BALIKESİR\r\n            adresinde bulunan Sistemsa Bilişim Teknolojileri A.Ş.’yi ifade eder.</p>\r\n        <p>2.2.Bitcoin ve Kripto Para Teknolojisi;</p>\r\n        <p>Kripto grafik (şifreli) olarak güvenli işlem yapmaya ve ek sanal para arzına olanak sağlayan dijital\r\n            değerlere, kripto-para denir. Kripto-paralar, alternatif para birimidirler, dijitallerdir ve aynı zamanda\r\n            sanal paralardır.</p>\r\n        <p>Kripto-paralar, merkezi elektronik paraların ve bankacılık sistemlerinin aksine, merkezi olmayan\r\n            yapıdadırlar. Merkezi olmayan bu yapının kontrolü Blok-Zincir (BlockChain) veri tabanları tarafından\r\n            gerçekleşir.</p>\r\n        <p>Kripto paralar dünyanın her yerine transfer edilebilen ve her yerde aynı değeri taşıyan, bir banka ya da\r\n            şirket tarafından kontrol edilemeyen, merkezi bir kontrol noktası olmayan, fiyatının kimse tarafından\r\n            belirlenmediği, serbest piyasaya göre değiştiği dijital para birimleridirler. Sitedeki kripto para (coinler)\r\n            fiyatları arz talep dengesi ile oluşmaktadır.</p>\r\n        <p>Not: Sermaye piyasası kurulu araştırma dairesinin Aralık 2016’da yayınlamış olduğu “Kripto Para-Bitcoin”\r\n            raporundan daha detaylı bilgi alınabilir.</p>\r\n        <p>2.3.Kripto Cüzdan; Coin adreslerinizi ve onların şifrelerini tutan bir bilgisayar dosyasıdır. Coinler (kripto\r\n            paralar) adresler arasında transfer edilebilir. Bu adresler rastgele oluşturulan kriptografik açık anahtar\r\n            eşleridir.</p>\r\n        <p>2.4.Coinler (Kripto Paralar); Sitemizde bulunan Bitcoin(BTC), Dogecoin(DOGE), Litecoin(LTC), Ethereum(ETH),\r\n            Bitcoin Cash(BCH), Ripple(XRP), Digibyte (DGB), Zcash (ZEC), Bitcoingold (BTG) vb. birer Sanal Kripto\r\n            Paralardır.</p>\r\n        <p>2.5. Kullanıcı; Siteye üye olan ve Sistemkoin tarafından sitede sunulan hizmetlerden yararlanan gerçek kişiyi\r\n            ifade eder.</p>\r\n        <p>2.6.Site; www.sistemkoin.com alan adından ve bu alan adına bağlı alt alan adlarından oluşan internet sitesini\r\n            ifade eder.</p>\r\n        <p>2.7.S.S.S; Sitenin, Sıkça sorulan sorular bölümüdür. Kullanıcılara sitenin kullanımı ile ilgili bilgiler\r\n            vermek için kullanılan sayfasıdır.</p>\r\n        <h6 class=\"home-color\">3.AMAÇ</h6>\r\n        <p>İşbu kullanım sözleşmesi ile sitede sunulan hizmetler kullanılırken Sistemkoin ve kullanıcılar arasındaki\r\n            karşılıklı hak ve yükümlülükleri düzenlenmiştir. Sistemkoin’e ait internet sitesi bir alış, satış ve takas\r\n            platformudur. Site üzerinden kullanıcılar birbirleri ile alış, satış ve takas işlemleri yaparlar. Site, bu\r\n            alış, satış ve takasa aracılık eder. Bu nedenle sitede oluşan fiyatları Sistemkoin belirlemez. Fiyatlar arz\r\n            talep dengesine göre belirlenir.</p>\r\n        <h6 class=\"home-color\">4.BAŞLANGIÇ</h6>\r\n        <p>İşbu sözleşme, kullanıcının siteye elektronik ortamda üye olması ile başlar. Kullanıcı, Site’ye üye olurken\r\n            işbu sözleşmenin tüm hükümlerini ayrı ayrı okuyarak kabul ettiğini beyan ve taahhüt eder.</p>\r\n        <h6 class=\"home-color\">5.HAK ve YÜKÜMLÜLÜKLER</h6>\r\n        <p>5.1.KULLANICININ HAK ve YÜKÜMLÜLÜKLERİ</p>\r\n        <p>5.1.1.Kullanıcı, siteyi kullanabilmesi için 18 yaşından büyük olduğunu kabul, beyan ve taahhüt eder.\r\n            Kullanıcının bu bilgiyi hatalı vermesi nedeniyle doğacak tüm zararlardan mesuliyet kullanıcıya aittir.\r\n            Sistemkoin kullanıcının hatalı ve/veya yanlış bilgi verdiğini tespit ettiği halde, sözleşmeyi tek taraflı\r\n            feshederek kullanıcıya ait hesabı hiçbir bildirimde bulunmaksızın iptal etme, durdurma veya askıya alma\r\n            haklarına haizdir. Bu nedenlerden dolayı doğacak hiçbir zarardan Sistemkoin sorumlu olmayacaktır.</p>\r\n        <p>5.1.2.Sitede sunulan hizmete bağlı tüm servislerin, alan adlarının, yazılım kodlarının, ara yüzlerinin,\r\n            içeriklerinin, ürün incelemelerinin, videolarının, algoritmalarının, çizimlerinin, modellerinin,\r\n            tasarımlarının ve diğer tüm fikri ve sınai hakların sahibi Sistemkoin’dir. (Üçüncü kişilerden sağlanan\r\n            içerik ve uygulamalar hariçtir.) Sunulan servislerin yazılım, tasarım ve telif haklarının tamamı\r\n            Sistemkoin’e aittir. Sistemkoin, anılan bu servislerin ve hizmetlerin, bununla bağlantılı sayfaların\r\n            kopyalanmasına, çoğaltılmasına ve yayılmasına, ters mühendislik işlemlerine tabi tutulmasına izin\r\n            vermemektedir. Kullanıcı, bu hükümlere aykırı hareket etmeyeceğini kabul, beyan ve taahhüt eder.\r\n            Kullanıcının bu hükümlere aykırı davranması, sözleşmenin tek taraflı ve haklı feshi nedeni olup tüm hukuki\r\n            ve cezai sorumluluk kullanıcıya aittir.</p>\r\n        <p>5.1.3.Siteye üye olurken verilen bilgilerin doğruluğundan ve gizliliğinden, siteye üye olurken kullanılan\r\n            şifre ve kullanıcı adının korunmasından, 3. kişiler ile paylaşılmamasından kullanıcı sorumludur. Kullanıcı\r\n            bu hususta doğacak zararlar için Sistemkoin’den hiçbir ad altında talepte bulunmayacağını, bu doğrultuda\r\n            Sistemkoin’e gayri kabili olarak rücu ettiğini kabul, beyan ve taahhüt eder.</p>\r\n        <p>5.1.4.Kullanıcı, siteye üye olduktan sonra sahip olduğu hesabını ve haklarını üçüncü şahıslara devredemez,\r\n            satamaz, bağışlayamaz ve her ne ad altında olursa olsun üçüncü kişilere kullandıramaz. Kullanıcının bu\r\n            maddeye aykırı hareketlerinin tespiti halinde Sistemkoin, kullanıcının hesabını önceden hiçbir bildirime\r\n            gerek kalmaksızın iptal etme, durdurma veya askıya alma haklarına sahiptir. Sistemkoin’in bu haklarını\r\n            kullanması nedeniyle kullanıcı, Sistemkoin’i gayri kabili olarak rücu ettiğini kabul eder. Bu madde\r\n            kapsamında meydana gelen tüm zararlardan kullanıcı sorumlu olup tüm cezai müeyyideler de kullanıcıya aittir.\r\n            Ancak bu sebeplerden dahi olsa kullanıcının Kripto Para (Coin) varlıkları bu durumdan etkilenmez ve\r\n            kullanıcının varsa Kripto Para (Coin) varlıkları hukuki bir kısıtlama olmaması şartıyla ve talep halinde\r\n            kullanıcıya derhal iade edilir.</p>\r\n        <p>5.1.5.Kullanıcı, sadece tek bir hesaba sahip olabilir. Kullanıcı, siteyi sadece işbu sözleşmede tanımlanan\r\n            hizmetlerden faydalanmak amacıyla kullanabilir. Kullanıcı, Sistemkoin’in aynı kullanıcıya ait birden fazla\r\n            hesabın varlığını tespit etmesi hainde kullanıcıya ait tüm hesapları önceden bildirimde bulunmaksızın iptal\r\n            etme, durdurma veya askıya alma haklarına sahip olduğunu, bu işlemler nedeniyle Sistemkoin’in herhangi bir\r\n            sorumluluğunun olmadığını ve Sistemkoin’i gayri kabili rücu ettiğini kabul, beyan ve taahhüt eder. Bu madde\r\n            kapsamında sayılan hallerde doğan ve doğacak tüm hukuki ve cezai sorumluluk kullanıcıya aittir. Ancak bu\r\n            sebeplerden dahi olsa kullanıcının Kripto Para (Coin) varlıkları bu durumdan etkilenmez ve kullanıcının\r\n            varsa Kripto Para (Coin) varlıkları hukuki bir kısıtlama olmaması şartıyla ve talep halinde kullanıcıya\r\n            derhal iade edilir.</p>\r\n        <p>5.1.6.Kullanıcı, hukuka ve mevzuata aykırı amaçlarla siteyi kullanmayacağını, hukuka ve mevzuata aykırı\r\n            amaçlarla siteyi kullanması halinde doğacak tüm hukuki ve cezai sorumluluktan kendisinin sorumlu olacağını\r\n            kabul eder.</p>\r\n        <p>5.1.7.Siteye üye olan kullanıcı, hesabını doğrulaması (kimlik ve adres bilgilerini belgelemesi) halinde\r\n            kripto para, USD, EURO ve Türk Lirası çekim işlemleri yapabilmektedir. Kullanıcı tarafından kimlik ve adres\r\n            bilgilerinin belgelenmemesi halinde, Sistemkoin kullanıcıya ait hesap üzerinden hiçbir işlem yapılmasına\r\n            izin vermeyecektir. Kullanıcı tarafından belgelenen kimlik ve adres bilgileri, sistemin Türkiye Cumhuriyeti\r\n            Kanun ve mevzuatlarına uyarlı olması amacıyla talep edilmekte olup, yetkili makamlarca talep edilmesi\r\n            halinde ilgili resmi makamlar ile paylaşılacaktır. Sistemkoin, bu haller dışında kullanıcıya ait kimlik,\r\n            adres, bilgi ve belgelerini hiçbir gerçek ve/veya tüzel kişi ile paylaşmayacağını taahhüt eder.</p>\r\n        <p>5.1.8.Kullanıcı siteyi kullanmasından doğan veya doğacak her türlü zarar, ziyan ve kayıpların kendisinin\r\n            mesuliyetinde olduğunu kabul, beyan ve taahhüt eder. Sistemkoin’in işbu sözleşme kapsamında taahhüt ettiği\r\n            hizmet ve edimleri yerine getirmesi halinde Sistemsa Bilişim Teknolojileri A.Ş yönetim kurulu üyeleri,\r\n            yöneticileri, çalışanları hiçbir şekilde hukuki ve cezai müeyyideden mesul tutulamazlar. Kullanıcı bu\r\n            hususlarda anılan kişileri gayri kabili rücu ettiğini kabul, beyan ve taahhüt eder.</p>\r\n        <p>5.1.9.Kullanıcı siteye üye olurken kullandığı Ad Soyad ile aynı kişiye kayıtlı olan banka hesabını\r\n            kullanacaktır. Kullanıcının farklı isime kayıtlı olan hesaplardan transfer yapması halinde yaşanabilecek\r\n            zarar ve gecikmelerden kullanıcı mesuldür. Sistemkoin üzerinden yapılan para çekimlerinde başka birisine ait\r\n            banka hesabı kullanılamaz. Farklı isimlerle yapılan transferlerin iade süreci işbu sözleşmenin ayrılmaz\r\n            parçası niteliğinde olan “S.S.S” bölümünde yer almaktadır. Yine kullanıcı ATM’ler üzerinden veya diğer para\r\n            yatırma yöntemleri ile transfer yapması halinde doğacak gecikmelerden de kendisi mesuldür. Bu hususlara\r\n            ilişkin prosedürler de “S.S.S” bölümünde yer almaktadır.</p>\r\n        <p>5.1.10.Kullanıcı, Sistemkoin hesabını Sadece Kripto Para Cüzdanı olarak kullanmayacağını ve Coin (Kripto\r\n            Para) çekimlerini kendisine ait cüzdan adreslerine yapacağını taahhüt eder. Yine Kullanıcı, çekim\r\n            adreslerine Sistemkoin tarafından yapılacak mükerrer veya hatalı transferleri geri göndermekle yükümlü\r\n            olduğunu kabul eder.</p>\r\n        <p>5.1.11.Kullanıcının, siteyi kullanması sebebiyle doğacak tüm vergi mükellefiyetlerinden yine kullanıcı\r\n            sorumludur.</p>\r\n        <p>5.2.SİSTEMKOİN'İN HAK ve YÜKÜMLÜLÜKLERİ</p>\r\n        <p>5.2.1.Sistemkoin, siteye üye olan kullanıcının güvenliğini azami ölçüde sağlayacağını taahhüt eder. Bu\r\n            kapsamda Sistemkoin, kullanıcının güvenliği adına üyelik oluşturulurken çift aşamalı SMS, TC Kimlik ve Email\r\n            doğrulaması ile üyelik kaydı yapacaktır. Sistemsa Bilişim Teknolojileri A.Ş basiretli bir tacir gibi\r\n            davranarak gerekli tüm özeni gösterecektir. Kullanıcıya ait birikimler olası bir siber saldırıya karşı site\r\n            sunucularından bağımsız ortamlarda saklanır. Sistemkoin tarafından bu taahhüt yerine getirilmesine karşın\r\n            hesabın yetkisiz kişiler tarafından ele geçirilmesi ve Sistemkoin servislerinin kullanılması halinde işbu\r\n            sözleşmenin (5.1.3) hükümleri geçerli olacaktır.</p>\r\n        <p>5.2.2.Sistemkoin, kullanıcılar tarafından yapılan para transferlerini hiçbir gerekçe göstermeksizin kabul\r\n            etmeme hakkında sahiptir. Ancak bu halde Sistemkoin, kullanıcılar tarafından yatırılan parayı S.S.S ’da yer\r\n            alan iade süreci içerisinde iade edecektir.</p>\r\n        <p>5.2.3.Sistemkoin, kullanıcı tarafından yapılan havale işlemlerini en kısa sürede yerine getirecektir. Para\r\n            yatırma ve/veya para çekme işlemlerinin Türk Borçlar Kanunu ve Türk Ticaret Kanununda sayılan “mücbir sebep”\r\n            halleri ile hiç gerçekleştirilememesi veya geç gerçekleştirilmesi halinde doğacak zararlardan Sistemkoin\r\n            sorumlu olmayacaktır.</p>\r\n        <p>5.2.4.İşbu sözleşmenin (5.1.7.) maddesinde yer verilen ve kullanıcı tarafından Sistemkoin ile paylaşılmayan\r\n            veya geç paylaşılan kimlik ve adres bilgilerinin paylaşılmaması veya geç paylaşılması nedeniyle doğacak\r\n            zararlardan Sistemkoin sorumlu değildir.</p>\r\n        <p>5.2.5.Sistemkoin, site üzerinden sunduğu para yatırma ve çekme işlemlerinde her türlü değişiklik yapma\r\n            hakkına haizdir. Bu değişiklikler nedeniyle doğacak zararlardan Sistemkoin mesul olmayacaktır. Ancak\r\n            Sistemkoin yaptığı değişiklikleri www.sistemkoin.com internet sitesinde bulunan S.S.S sayfalarında veya\r\n            diğer sayfalarda ilan edeceğini taahhüt eder.</p>\r\n        <p>5.2.6.Sistemkoin, destek hizmetlerini yalnızca admin@sistemkoin.com resmi email adresi, sitedeki canlı destek\r\n            bölümü ve üye girişi yaptıktan sonra erişilebilen ticket gönderim yöntemi ile sağlayacaktır. Bu elektronik\r\n            posta adresi, canlı destek ve ticket dışında hiçbir yöntem ile kullanıcılara destek hizmeti verilmemektedir.\r\n            Bu adres üzerinden yapacağı destek hizmetlerinde de kullanıcılara şifre sormaz, kullanıcılardan herhangi bir\r\n            coin göndermeleri için coin adresi bildirmez. Kullanıcı bu madde hükümlerini kabul ederek Sistemkoin’den\r\n            destek alacağını kabul eder. Bu sebeple doğan zararlardan Sistemkoin kesinlikle sorumlu değildir.</p>\r\n        <p>5.2.7.İşbu sözleşmenin (3). Maddesinde belirtildiği üzere aracı pozisyonunda olan Sistemkoin’in arz talep\r\n            ilişkisine göre belirlenen fiyatların değişmesinden dolayı hiçbir sorumluluğu yoktur. Bu sebeplerle doğacak\r\n            tüm zarar ve kayıpların mesuliyeti kullanıcıya aittir.</p>\r\n        <p>5.2.8.Sistemkoin, benzer coin alış satış platformlarından ve coin ile işlem yapan bütün diğer işletmelerden\r\n            tamamen bağımsız bir şirket olup, hiçbir şirketin, internet sitesinin veya kurumun temsilcisi değildir.\r\n            Hiçbir şirketle ortak çalışma yürütmemektedir. Bu nedenle kullanıcıların, başka platformlar üzerinden\r\n            yaşadıkları mağduriyetlerden dolayı Sistemsa Bilişim Teknolojileri A.Ş.’yi sorumlu tutamazlar.</p>\r\n        <p>5.2.9.Hiçbir şirketle ortak çalışmayan Sistemkoin, kullanıcıya ait kişisel bilgileri yasal merciler dışında\r\n            hiçbir şirketle paylaşmayacağını taahhüt eder. Ancak market ile ilgili anonim bilgileri paylaşma yetkisine\r\n            sahiptir.</p>\r\n        <h6 class=\"home-color\">6.HUKUKİ ve CEZAİ MÜEYYİDELER</h6>\r\n        <p>6.1.Kullanıcı, Bitcoin ve diğer coinler ile ilgili BDDK tarafından yapılan ve bundan sonra yapılacak tüm\r\n            açıklamaları okumuş ve kabul etmiş sayılır.</p>\r\n        <p>6.2.Kullanıcı tarafından sitenin hukuka aykırı amaçlarla kullanılması durumunda kullanıcı işbu sözleşmenin\r\n            (5.1.6.). maddesi uyarınca doğacak tüm hukuki ve cezai müeyyidelerden sorumludur. Bu hususta Sistemkoin’i\r\n            gayri kabili rücu ettiğini kabul, beyan ve taahhüt eder.</p>\r\n        <p>6.3.Kullanıcı, siteyi Türkiye Cumhuriyeti yasaları ve tüm mevzuatı kapsamında kullanacağını taahhüt eder.\r\n            Yasalara aykırı kullanım halinde Sistemkoin, kullanıcıya ait tüm bilgileri yetkili merciler ile paylaşma\r\n            hakkına ve yetkisine sahiptir. Bu husus gizliliğin ihlali kapsamında değerlendirilemez ve Sistemkoin’e her\r\n            hangi bir sorumluluk atfedilemez.</p>\r\n        <h6 class=\"home-color\">7.ÜCRETLENDİRME</h6>\r\n        <p>7.1.Sistemkoin, hizmetlerle ilgili ücretlerini sitenin destek bölümünde ilan etmektedir. İlgili bölüme\r\n            www.sistemkoin.com/ucretler adresinden ulaşılmaktadır. Bu bölümde bulunan ücretler işbu sözleşmenin ayrılmaz\r\n            parçası olup ücretler ve S.S.S bölümünde ilan edildiği andan itibaren geçerlilik kazanacaktır.</p>\r\n        <p>7.2.Sistemkoin, alış ve satış işlemlerinde kullanıcıdan kendi belirlediği bir oran üzerinden hizmet bedeli\r\n            alma hakkına sahiptir. Türk Lirası çekme işleminde kullanıcıdan işlem ücreti olarak, kendi belirlediği bir\r\n            ücreti alma hakkına sahiptir. Sistemkoin, bu ücret ve oranlar üzerinde dilediği zaman önceden bildirmeksizin\r\n            değişiklik yapma hakkına sahiptir. Ancak yapılan değişiklikler sitede gerekli bölümlerde ilan\r\n            edilecektir.</p>\r\n        <p>7.3.Site üzerinden yapılan Bitcoin ve diğer coin transferleri iade edilemez. Bitcoin ve diğer coin\r\n            transferleri iade edilemediğinden, Sistemkoin tarafından kullanıcıdan alınan hizmet bedeli ve işlem\r\n            ücretleri de iade edilemez. Kullanıcı bu madde hükümlerini işbu sözleşmenin imzalanması ile peşinen kabul\r\n            ettiğini kabul, beyan ve taahhüt eder. Kullanıcı, hatalı yaptığını düşündüğü bu işlemlerden dolayı\r\n            Sistemkoin’i gayri kabili rücu ettiğini beyan ve taahhüt eder.</p>\r\n        <p>7.4.Sistemimizde alış ve satış işlemleri için her türlü bot vs program kullanmak yasaktır. Tüm işlemler\r\n            gerçek kullanıcılar tarafından yapılmalıdır.</p>\r\n        <h6 class=\"home-color\">8.GİZLİLİK POLİTİKASI</h6>\r\n        <p>8.1.İşbu sözleşmenin (5.2.9.) maddesinde de yer verildiği üzere Sistemkoin, kullanıcının şahsi bilgilerini\r\n            kullanıcının açık rızası haricinde üçüncü şahıslar/şirketler ile paylaşmayacaktır. Kullanıcıya ait bu\r\n            bilgiler çevrimiçi ortamda alınıp çevrimdışı ortamda muhafaza edilmektedir. Ancak Türkiye Cumhuriyeti\r\n            yetkili mercileri tarafından yürütülen bir soruşturma veya kovuşturma kapsamında bilgilerin talep edilmesi\r\n            halinde bu bilgileri ilgili merciler ile paylaşılacaktır.</p>\r\n        <p>8.2.Sistemkoin, kullanıcıya ait IP adreslerini, erişim sağladıkları cihazı ve modeli, işletim sistemleri ve\r\n            tarayıcı bilgilerini tespit etmekte ve kayıt altına almaktadır. Kullanıcı, işbu sözleşmeyi kabul etmesi ile\r\n            bu hususlarda Sistemkoin’e açık rıza verdiğini de kabul eder. Sistemkoin, topladığı bu bilgileri,\r\n            kullanıcılarını genel bir şekilde tanımlamak ve kapsamlı demografik bilgi toplamak, kullanıcı ve sistem\r\n            güvenliğini sağlamak, sahtecilik ile mücadele etmek ve kanuni yükümlülüklere uymak amacı ile\r\n            kullanabilir.</p>\r\n        <p>8.3.Sistemkoin, üçüncü parti kurum ve kuruluşlarla çeşitli şekilde işbirliği yapabilir. Sistemkoin bu\r\n            işbirliklerinde kanunların öngördüğü şekilde izinli iletişim ve/veya pazarlama yapabilecektir. Ancak\r\n            kullanıcının sistemden ücretsiz ve kolayca çıkabilmesini sağlayacak araçlar sunacaktır.</p>\r\n        <p>8.4.Sistemkoin, site içerisinde başkaca sitelere bağlantı sağlayabilir. Anlaşmalı olduğu üçüncü partilerin\r\n            reklamlarını ve/veya çeşitli hizmetlere ilişkin başvuru formlarını yayınlayabilir veya bu sitelere\r\n            yönlendirebilir. Kullanıcının bu şekilde eriştiği üçüncü parti sitelerde uygulanan gizlilik uygulaması ve\r\n            politikaları ile barındırdıkları içeriklerden Sistemkoin sorumlu değildir.</p>\r\n        <p>8.5.Sistemkoin, kullanıcıya ait bilgileri gizli tutmayı ve buna yönelik her türlü tedbirleri almayı taahhüt\r\n            eder. Ancak Türkiye Cumhuriyeti yasaları, KHK’ları ve tüm mevzuatı kapsamında yetkili makamlarca bilgi ve\r\n            belge talep edilmesi halinde bu bilgi ve belgeler yetkili makamlara sunulacaktır. Bundan dolayı doğacak\r\n            zararlardan Sistemkoin sorumlu tutulamayacaktır.</p>\r\n        <p>8.6.Site üzerinde sunulan her türlü içerik, üçüncü parti servisler ve kamuya açık kaynaklardan toplanan\r\n            verilerden oluşmaktadır. Tüm veriler, analizler, raporlar, istatistikler herhangi bir düzenleme veya\r\n            yönlendirme olmadan bilgileri otomatik işleme tabi tutmuş bir yazılım tarafından işlenmekte ve objektif\r\n            olarak sunulmaktadır. Sistemkoin tarafından sunulan her türlü haber ve raporlar sadece bilgilendirme ve\r\n            tavsiyeye yöneliktir ve kesin doğruluğu garanti edilmemektedir. Verilerin bir biriyle çelişkili veya\r\n            tutarsız olması olası olup bu tür durumlardan dolayı Sistemkoin’in hiçbir ad altında sorumluluğu\r\n            bulunmamaktadır.</p>\r\n        <h6 class=\"home-color\">9.UYGULANACAK HUKUK ve YETKİ</h6>\r\n        <p>İşbu sözleşme kapsamında sitenin kullanımından doğan ve/veya yasal uyarıda yer alan koşul ve hükümlere\r\n            ilişkin ve/veya bu site ile bağlantılı olarak çıkabilecek tüm uyuşmazlıklarda Türk Hukuku uygulanacak olup\r\n            yetkili mahkemeler ve icra daireleri İstanbul Mahkemeleri ve İcra Daireleridir.</p>\r\n        <h6 class=\"home-color\">10.SÖZLEŞME DEĞİŞİKLİKLERİ</h6>\r\n        <p>Sistemkoin, işbu sözleşmede yer alan tüm koşul ve hükümleri önceden bildirmeksizin değiştirebilir. Ancak\r\n            değişiklikler sitede ilan edilecektir. Kullanıcı, işbu sözleşmeyi kabul ile Sistemkoin tarafından yapılacak\r\n            bu değişlikleri de önceden kabul ettiğini beyan ve taahhüt eder.</p>\r\n        <h6 class=\"home-color\">11.YÜRÜRLÜLÜK</h6>\r\n        <p>Kullanıcı, siteye üye olduğunda işbu sözleşmenin tüm maddelerini ayrı ayrı okuyup anladığını, sözleşmenin\r\n            bütün içeriğini ve bütün hükümlerini onayladığını kabul, beyan ve taahhüt eder. İşbu sözleşmeyi kabul\r\n            etmeyen kullanıcının siteye üye olmaması ve sitenin hizmetlerinden faydalanmaması gerekmektedir.</p>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/footer/termsandconditions/termsandconditions.page.scss":
/*!************************************************************************!*\
  !*** ./src/app/footer/termsandconditions/termsandconditions.page.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-termsandconditions-page h6 {\n  font-size: 18px;\n  font-weight: bold;\n  color: #ffad29;\n  margin-bottom: 0px;\n  line-height: 1; }\n"

/***/ }),

/***/ "./src/app/footer/termsandconditions/termsandconditions.page.ts":
/*!**********************************************************************!*\
  !*** ./src/app/footer/termsandconditions/termsandconditions.page.ts ***!
  \**********************************************************************/
/*! exports provided: TermsAndConditionsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsAndConditionsPage", function() { return TermsAndConditionsPage; });
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


var TermsAndConditionsPage = /** @class */ (function () {
    function TermsAndConditionsPage(router) {
        this.router = router;
    }
    TermsAndConditionsPage.prototype.ngOnInit = function () {
    };
    TermsAndConditionsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-termsandconditions-page',
            template: __webpack_require__(/*! ./termsandconditions.page.html */ "./src/app/footer/termsandconditions/termsandconditions.page.html"),
            styles: [__webpack_require__(/*! ./termsandconditions.page.scss */ "./src/app/footer/termsandconditions/termsandconditions.page.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], TermsAndConditionsPage);
    return TermsAndConditionsPage;
}());



/***/ })

}]);
//# sourceMappingURL=footer-footer-module.js.map