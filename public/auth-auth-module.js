(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-auth-module"],{

/***/ "./node_modules/angular-highcharts/angular-highcharts.es5.js":
/*!*******************************************************************!*\
  !*** ./node_modules/angular-highcharts/angular-highcharts.es5.js ***!
  \*******************************************************************/
/*! exports provided: Highcharts, ChartModule, HIGHCHARTS_MODULES, Chart, StockChart, MapChart, ɵb, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartModule", function() { return ChartModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HIGHCHARTS_MODULES", function() { return HIGHCHARTS_MODULES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Chart", function() { return Chart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockChart", function() { return StockChart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapChart", function() { return MapChart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return ChartDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return ChartService; });
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "Highcharts", function() { return highcharts__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");






/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var Chart = /** @class */ (function () {
    function Chart(options) {
        if (options === void 0) { options = { series: [] }; }
        this.options = options;
        this.refSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["AsyncSubject"]();
        this.ref$ = this.refSubject.asObservable();
    }
    /**
     * Add Point
     * @param point         Highcharts.DataPoint, number touple or number
     * @param serieIndex    Index position of series. This defaults to 0.
     * @param redraw        Flag whether or not to redraw point. This defaults to true.
     * @param shift         Shift point to the start of series. This defaults to false.
     * @memberof Chart
     */
    /**
     * Add Point
     * \@memberof Chart
     * @param {?} point         Highcharts.DataPoint, number touple or number
     * @param {?=} serieIndex    Index position of series. This defaults to 0.
     * @param {?=} redraw        Flag whether or not to redraw point. This defaults to true.
     * @param {?=} shift         Shift point to the start of series. This defaults to false.
     * @return {?}
     */
    Chart.prototype.addPoint = /**
     * Add Point
     * \@memberof Chart
     * @param {?} point         Highcharts.DataPoint, number touple or number
     * @param {?=} serieIndex    Index position of series. This defaults to 0.
     * @param {?=} redraw        Flag whether or not to redraw point. This defaults to true.
     * @param {?=} shift         Shift point to the start of series. This defaults to false.
     * @return {?}
     */
    function (point, serieIndex, redraw, shift) {
        if (serieIndex === void 0) { serieIndex = 0; }
        if (redraw === void 0) { redraw = true; }
        if (shift === void 0) { shift = false; }
        this.ref$.subscribe(function (chart$$1) {
            if (chart$$1.series.length > serieIndex) {
                chart$$1.series[serieIndex].addPoint(point, redraw, shift);
            }
        });
    };
    /**
     * Add Series
     * @param serie         Series Configuration
     * @param redraw        Flag whether or not to redraw series. This defaults to true.
     * @param animation     Whether to apply animation, and optionally animation configuration. This defaults to false.
     * @memberof Chart
     */
    /**
     * Add Series
     * \@memberof Chart
     * @param {?} serie         Series Configuration
     * @param {?=} redraw        Flag whether or not to redraw series. This defaults to true.
     * @param {?=} animation     Whether to apply animation, and optionally animation configuration. This defaults to false.
     * @return {?}
     */
    Chart.prototype.addSerie = /**
     * Add Series
     * \@memberof Chart
     * @param {?} serie         Series Configuration
     * @param {?=} redraw        Flag whether or not to redraw series. This defaults to true.
     * @param {?=} animation     Whether to apply animation, and optionally animation configuration. This defaults to false.
     * @return {?}
     */
    function (serie, redraw, animation) {
        if (redraw === void 0) { redraw = true; }
        if (animation === void 0) { animation = false; }
        this.ref$.subscribe(function (chart$$1) {
            chart$$1.addSeries(serie, redraw, animation);
        });
    };
    /**
     * Remove Point
     * @param pointIndex    Index of Point
     * @param serieIndex    Specified Index of Series. Defaults to 0.
     * @memberof Chart
     */
    /**
     * Remove Point
     * \@memberof Chart
     * @param {?} pointIndex    Index of Point
     * @param {?=} serieIndex    Specified Index of Series. Defaults to 0.
     * @return {?}
     */
    Chart.prototype.removePoint = /**
     * Remove Point
     * \@memberof Chart
     * @param {?} pointIndex    Index of Point
     * @param {?=} serieIndex    Specified Index of Series. Defaults to 0.
     * @return {?}
     */
    function (pointIndex, serieIndex) {
        if (serieIndex === void 0) { serieIndex = 0; }
        this.ref$.subscribe(function (chart$$1) {
            if (chart$$1.series.length > serieIndex && chart$$1.series[serieIndex].data.length > pointIndex) {
                chart$$1.series[serieIndex].removePoint(pointIndex, true);
            }
        });
    };
    /**
     * Remove Series
     * @param serieIndex    Index position of series to remove.
     * @memberof Chart
     */
    /**
     * Remove Series
     * \@memberof Chart
     * @param {?} serieIndex    Index position of series to remove.
     * @return {?}
     */
    Chart.prototype.removeSerie = /**
     * Remove Series
     * \@memberof Chart
     * @param {?} serieIndex    Index position of series to remove.
     * @return {?}
     */
    function (serieIndex) {
        this.ref$.subscribe(function (chart$$1) {
            if (chart$$1.series.length > serieIndex) {
                chart$$1.series[serieIndex].remove(true);
            }
        });
    };
    /**
     * @param {?} el
     * @return {?}
     */
    Chart.prototype.init = /**
     * @param {?} el
     * @return {?}
     */
    function (el) {
        var _this = this;
        Object(highcharts__WEBPACK_IMPORTED_MODULE_0__["chart"])(el.nativeElement, this.options, function (chart$$1) {
            _this.refSubject.next(chart$$1);
            _this.ref = chart$$1;
            _this.refSubject.complete();
        });
    };
    /**
     * @return {?}
     */
    Chart.prototype.destroy = /**
     * @return {?}
     */
    function () {
        if (this.ref) {
            this.options = this.ref.options;
            this.ref.destroy();
            this.ref = undefined;
            // new init subject
            this.refSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["AsyncSubject"]();
            this.ref$ = this.refSubject.asObservable();
        }
    };
    return Chart;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Felix Itzenplitz. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at
 * https://github.com/cebor/angular-highcharts/blob/master/LICENSE
 */
var  /**
 * @license
 * Copyright Felix Itzenplitz. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at
 * https://github.com/cebor/angular-highcharts/blob/master/LICENSE
 */
MapChart = /** @class */ (function () {
    function MapChart(options) {
        this.options = options;
        this.refSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["AsyncSubject"]();
        this.ref$ = this.refSubject.asObservable();
    }
    /**
     * @param {?} el
     * @return {?}
     */
    MapChart.prototype.init = /**
     * @param {?} el
     * @return {?}
     */
    function (el) {
        var _this = this;
        Object(highcharts__WEBPACK_IMPORTED_MODULE_0__["mapChart"])(el.nativeElement, this.options, function (chart$$1) {
            _this.refSubject.next(chart$$1);
            _this.ref = chart$$1;
            _this.refSubject.complete();
        });
    };
    /**
     * @return {?}
     */
    MapChart.prototype.destroy = /**
     * @return {?}
     */
    function () {
        if (this.ref) {
            this.options = this.ref.options;
            this.ref.destroy();
            this.ref = undefined;
            // new init subject
            this.refSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["AsyncSubject"]();
            this.ref$ = this.refSubject.asObservable();
        }
    };
    return MapChart;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Felix Itzenplitz. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at
 * https://github.com/cebor/angular-highcharts/blob/master/LICENSE
 *
 * @author Felix Itzenplitz
 * @author Timothy A. Perez (contributor)
 */
var  /**
 * @license
 * Copyright Felix Itzenplitz. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at
 * https://github.com/cebor/angular-highcharts/blob/master/LICENSE
 *
 * @author Felix Itzenplitz
 * @author Timothy A. Perez (contributor)
 */
StockChart = /** @class */ (function () {
    function StockChart(options) {
        if (options === void 0) { options = { series: [] }; }
        this.options = options;
        this.refSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["AsyncSubject"]();
        this.ref$ = this.refSubject.asObservable();
    }
    /**
     * @param {?} el
     * @return {?}
     */
    StockChart.prototype.init = /**
     * @param {?} el
     * @return {?}
     */
    function (el) {
        var _this = this;
        Object(highcharts__WEBPACK_IMPORTED_MODULE_0__["stockChart"])(el.nativeElement, this.options, function (chart$$1) {
            _this.refSubject.next(chart$$1);
            _this.ref = chart$$1;
            _this.refSubject.complete();
        });
    };
    /**
     * @return {?}
     */
    StockChart.prototype.destroy = /**
     * @return {?}
     */
    function () {
        if (this.ref) {
            this.options = this.ref.options;
            this.ref.destroy();
            this.ref = undefined;
            // new init subject
            this.refSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["AsyncSubject"]();
            this.ref$ = this.refSubject.asObservable();
        }
    };
    return StockChart;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ChartDirective = /** @class */ (function () {
    function ChartDirective(el) {
        this.el = el;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ChartDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (!changes["chart"].isFirstChange()) {
            this.destroy();
            this.init();
        }
    };
    /**
     * @return {?}
     */
    ChartDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.init();
    };
    /**
     * @return {?}
     */
    ChartDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy();
    };
    /**
     * @return {?}
     */
    ChartDirective.prototype.init = /**
     * @return {?}
     */
    function () {
        if (this.chart instanceof Chart || this.chart instanceof StockChart || this.chart instanceof MapChart) {
            this.chart.init(this.el);
        }
    };
    /**
     * @return {?}
     */
    ChartDirective.prototype.destroy = /**
     * @return {?}
     */
    function () {
        if (this.chart instanceof Chart || this.chart instanceof StockChart || this.chart instanceof MapChart) {
            this.chart.destroy();
        }
    };
    ChartDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"], args: [{
                    selector: '[chart]'
                },] },
    ];
    /** @nocollapse */
    ChartDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }
    ]; };
    ChartDirective.propDecorators = {
        chart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
    };
    return ChartDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ HIGHCHARTS_MODULES = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('HighchartsModules');
var ChartService = /** @class */ (function () {
    function ChartService(chartModules) {
        this.chartModules = chartModules;
    }
    /**
     * @return {?}
     */
    ChartService.prototype.initModules = /**
     * @return {?}
     */
    function () {
        this.chartModules.forEach(function (chartModule) {
            chartModule(highcharts__WEBPACK_IMPORTED_MODULE_0__);
        });
    };
    ChartService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"] },
    ];
    /** @nocollapse */
    ChartService.ctorParameters = function () { return [
        { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [HIGHCHARTS_MODULES,] }] }
    ]; };
    return ChartService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ɵ0 = [];
var ChartModule = /** @class */ (function () {
    function ChartModule(cs) {
        this.cs = cs;
        this.cs.initModules();
    }
    ChartModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"], args: [{
                    exports: [ChartDirective],
                    declarations: [ChartDirective],
                    providers: [
                        { provide: HIGHCHARTS_MODULES, useValue: ɵ0 },
                        ChartService
                    ]
                },] },
    ];
    /** @nocollapse */
    ChartModule.ctorParameters = function () { return [
        { type: ChartService }
    ]; };
    return ChartModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */




/***/ }),

/***/ "./node_modules/highcharts/highcharts.js":
/*!***********************************************!*\
  !*** ./node_modules/highcharts/highcharts.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*
 Highcharts JS v6.1.4 (2018-09-25)

 (c) 2009-2016 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(T,K){"object"===typeof module&&module.exports?module.exports=T.document?K(T):K: true?!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(){return K(T)}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined})("undefined"!==typeof window?window:this,function(T){var K=function(){var a="undefined"===typeof T?window:T,C=a.document,E=a.navigator&&a.navigator.userAgent||"",F=C&&C.createElementNS&&!!C.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect,m=/(edge|msie|trident)/i.test(E)&&!a.opera,h=-1!==E.indexOf("Firefox"),
e=-1!==E.indexOf("Chrome"),t=h&&4>parseInt(E.split("Firefox/")[1],10);return a.Highcharts?a.Highcharts.error(16,!0):{product:"Highcharts",version:"6.1.4",deg2rad:2*Math.PI/360,doc:C,hasBidiBug:t,hasTouch:C&&void 0!==C.documentElement.ontouchstart,isMS:m,isWebKit:-1!==E.indexOf("AppleWebKit"),isFirefox:h,isChrome:e,isSafari:!e&&-1!==E.indexOf("Safari"),isTouchDevice:/(Mobile|Android|Windows Phone)/.test(E),SVG_NS:"http://www.w3.org/2000/svg",chartCount:0,seriesTypes:{},symbolSizes:{},svg:F,win:a,marginNames:["plotTop",
"marginRight","marginBottom","plotLeft"],noop:function(){},charts:[]}}();(function(a){a.timers=[];var C=a.charts,E=a.doc,F=a.win;a.error=function(m,h){m=a.isNumber(m)?"Highcharts error #"+m+": www.highcharts.com/errors/"+m:m;if(h)throw Error(m);F.console&&console.log(m)};a.Fx=function(a,h,e){this.options=h;this.elem=a;this.prop=e};a.Fx.prototype={dSetter:function(){var a=this.paths[0],h=this.paths[1],e=[],t=this.now,x=a.length,p;if(1===t)e=this.toD;else if(x===h.length&&1>t)for(;x--;)p=parseFloat(a[x]),
e[x]=isNaN(p)?h[x]:t*parseFloat(h[x]-p)+p;else e=h;this.elem.attr("d",e,null,!0)},update:function(){var a=this.elem,h=this.prop,e=this.now,t=this.options.step;if(this[h+"Setter"])this[h+"Setter"]();else a.attr?a.element&&a.attr(h,e,null,!0):a.style[h]=e+this.unit;t&&t.call(a,e,this)},run:function(m,h,e){var t=this,x=t.options,p=function(a){return p.stopped?!1:t.step(a)},u=F.requestAnimationFrame||function(a){setTimeout(a,13)},f=function(){for(var c=0;c<a.timers.length;c++)a.timers[c]()||a.timers.splice(c--,
1);a.timers.length&&u(f)};m!==h||this.elem["forceAnimate:"+this.prop]?(this.startTime=+new Date,this.start=m,this.end=h,this.unit=e,this.now=this.start,this.pos=0,p.elem=this.elem,p.prop=this.prop,p()&&1===a.timers.push(p)&&u(f)):(delete x.curAnim[this.prop],x.complete&&0===a.keys(x.curAnim).length&&x.complete.call(this.elem))},step:function(m){var h=+new Date,e,t=this.options,x=this.elem,p=t.complete,u=t.duration,f=t.curAnim;x.attr&&!x.element?m=!1:m||h>=u+this.startTime?(this.now=this.end,this.pos=
1,this.update(),e=f[this.prop]=!0,a.objectEach(f,function(a){!0!==a&&(e=!1)}),e&&p&&p.call(x),m=!1):(this.pos=t.easing((h-this.startTime)/u),this.now=this.start+(this.end-this.start)*this.pos,this.update(),m=!0);return m},initPath:function(m,h,e){function t(a){var d,l;for(b=a.length;b--;)d="M"===a[b]||"L"===a[b],l=/[a-zA-Z]/.test(a[b+3]),d&&l&&a.splice(b+1,0,a[b+1],a[b+2],a[b+1],a[b+2])}function x(a,d){for(;a.length<l;){a[0]=d[l-a.length];var c=a.slice(0,r);[].splice.apply(a,[0,0].concat(c));v&&(c=
a.slice(a.length-r),[].splice.apply(a,[a.length,0].concat(c)),b--)}a[0]="M"}function p(a,b){for(var c=(l-a.length)/r;0<c&&c--;)d=a.slice().splice(a.length/q-r,r*q),d[0]=b[l-r-c*r],k&&(d[r-6]=d[r-2],d[r-5]=d[r-1]),[].splice.apply(a,[a.length/q,0].concat(d)),v&&c--}h=h||"";var u,f=m.startX,c=m.endX,k=-1<h.indexOf("C"),r=k?7:3,l,d,b;h=h.split(" ");e=e.slice();var v=m.isArea,q=v?2:1,I;k&&(t(h),t(e));if(f&&c){for(b=0;b<f.length;b++)if(f[b]===c[0]){u=b;break}else if(f[0]===c[c.length-f.length+b]){u=b;I=
!0;break}void 0===u&&(h=[])}h.length&&a.isNumber(u)&&(l=e.length+u*q*r,I?(x(h,e),p(e,h)):(x(e,h),p(h,e)));return[h,e]},fillSetter:function(){a.Fx.prototype.strokeSetter.apply(this,arguments)},strokeSetter:function(){this.elem.attr(this.prop,a.color(this.start).tweenTo(a.color(this.end),this.pos),null,!0)}};a.merge=function(){var m,h=arguments,e,t={},x=function(e,m){"object"!==typeof e&&(e={});a.objectEach(m,function(f,c){!a.isObject(f,!0)||a.isClass(f)||a.isDOMElement(f)?e[c]=m[c]:e[c]=x(e[c]||{},
f)});return e};!0===h[0]&&(t=h[1],h=Array.prototype.slice.call(h,2));e=h.length;for(m=0;m<e;m++)t=x(t,h[m]);return t};a.pInt=function(a,h){return parseInt(a,h||10)};a.isString=function(a){return"string"===typeof a};a.isArray=function(a){a=Object.prototype.toString.call(a);return"[object Array]"===a||"[object Array Iterator]"===a};a.isObject=function(m,h){return!!m&&"object"===typeof m&&(!h||!a.isArray(m))};a.isDOMElement=function(m){return a.isObject(m)&&"number"===typeof m.nodeType};a.isClass=function(m){var h=
m&&m.constructor;return!(!a.isObject(m,!0)||a.isDOMElement(m)||!h||!h.name||"Object"===h.name)};a.isNumber=function(a){return"number"===typeof a&&!isNaN(a)&&Infinity>a&&-Infinity<a};a.erase=function(a,h){for(var e=a.length;e--;)if(a[e]===h){a.splice(e,1);break}};a.defined=function(a){return void 0!==a&&null!==a};a.attr=function(m,h,e){var t;a.isString(h)?a.defined(e)?m.setAttribute(h,e):m&&m.getAttribute&&((t=m.getAttribute(h))||"class"!==h||(t=m.getAttribute(h+"Name"))):a.defined(h)&&a.isObject(h)&&
a.objectEach(h,function(a,e){m.setAttribute(e,a)});return t};a.splat=function(m){return a.isArray(m)?m:[m]};a.syncTimeout=function(a,h,e){if(h)return setTimeout(a,h,e);a.call(0,e)};a.clearTimeout=function(m){a.defined(m)&&clearTimeout(m)};a.extend=function(a,h){var e;a||(a={});for(e in h)a[e]=h[e];return a};a.pick=function(){var a=arguments,h,e,t=a.length;for(h=0;h<t;h++)if(e=a[h],void 0!==e&&null!==e)return e};a.css=function(m,h){a.isMS&&!a.svg&&h&&void 0!==h.opacity&&(h.filter="alpha(opacity\x3d"+
100*h.opacity+")");a.extend(m.style,h)};a.createElement=function(m,h,e,t,x){m=E.createElement(m);var p=a.css;h&&a.extend(m,h);x&&p(m,{padding:0,border:"none",margin:0});e&&p(m,e);t&&t.appendChild(m);return m};a.extendClass=function(m,h){var e=function(){};e.prototype=new m;a.extend(e.prototype,h);return e};a.pad=function(a,h,e){return Array((h||2)+1-String(a).replace("-","").length).join(e||0)+a};a.relativeLength=function(a,h,e){return/%$/.test(a)?h*parseFloat(a)/100+(e||0):parseFloat(a)};a.wrap=
function(a,h,e){var m=a[h];a[h]=function(){var a=Array.prototype.slice.call(arguments),p=arguments,u=this;u.proceed=function(){m.apply(u,arguments.length?arguments:p)};a.unshift(m);a=e.apply(this,a);u.proceed=null;return a}};a.formatSingle=function(m,h,e){var t=/\.([0-9])/,x=a.defaultOptions.lang;/f$/.test(m)?(e=(e=m.match(t))?e[1]:-1,null!==h&&(h=a.numberFormat(h,e,x.decimalPoint,-1<m.indexOf(",")?x.thousandsSep:""))):h=(e||a.time).dateFormat(m,h);return h};a.format=function(m,h,e){for(var t="{",
x=!1,p,u,f,c,k=[],r;m;){t=m.indexOf(t);if(-1===t)break;p=m.slice(0,t);if(x){p=p.split(":");u=p.shift().split(".");c=u.length;r=h;for(f=0;f<c;f++)r&&(r=r[u[f]]);p.length&&(r=a.formatSingle(p.join(":"),r,e));k.push(r)}else k.push(p);m=m.slice(t+1);t=(x=!x)?"}":"{"}k.push(m);return k.join("")};a.getMagnitude=function(a){return Math.pow(10,Math.floor(Math.log(a)/Math.LN10))};a.normalizeTickInterval=function(m,h,e,t,x){var p,u=m;e=a.pick(e,1);p=m/e;h||(h=x?[1,1.2,1.5,2,2.5,3,4,5,6,8,10]:[1,2,2.5,5,10],
!1===t&&(1===e?h=a.grep(h,function(a){return 0===a%1}):.1>=e&&(h=[1/e])));for(t=0;t<h.length&&!(u=h[t],x&&u*e>=m||!x&&p<=(h[t]+(h[t+1]||h[t]))/2);t++);return u=a.correctFloat(u*e,-Math.round(Math.log(.001)/Math.LN10))};a.stableSort=function(a,h){var e=a.length,m,x;for(x=0;x<e;x++)a[x].safeI=x;a.sort(function(a,e){m=h(a,e);return 0===m?a.safeI-e.safeI:m});for(x=0;x<e;x++)delete a[x].safeI};a.arrayMin=function(a){for(var h=a.length,e=a[0];h--;)a[h]<e&&(e=a[h]);return e};a.arrayMax=function(a){for(var h=
a.length,e=a[0];h--;)a[h]>e&&(e=a[h]);return e};a.destroyObjectProperties=function(m,h){a.objectEach(m,function(a,t){a&&a!==h&&a.destroy&&a.destroy();delete m[t]})};a.discardElement=function(m){var h=a.garbageBin;h||(h=a.createElement("div"));m&&h.appendChild(m);h.innerHTML=""};a.correctFloat=function(a,h){return parseFloat(a.toPrecision(h||14))};a.setAnimation=function(m,h){h.renderer.globalAnimation=a.pick(m,h.options.chart.animation,!0)};a.animObject=function(m){return a.isObject(m)?a.merge(m):
{duration:m?500:0}};a.timeUnits={millisecond:1,second:1E3,minute:6E4,hour:36E5,day:864E5,week:6048E5,month:24192E5,year:314496E5};a.numberFormat=function(m,h,e,t){m=+m||0;h=+h;var x=a.defaultOptions.lang,p=(m.toString().split(".")[1]||"").split("e")[0].length,u,f,c=m.toString().split("e");-1===h?h=Math.min(p,20):a.isNumber(h)?h&&c[1]&&0>c[1]&&(u=h+ +c[1],0<=u?(c[0]=(+c[0]).toExponential(u).split("e")[0],h=u):(c[0]=c[0].split(".")[0]||0,m=20>h?(c[0]*Math.pow(10,c[1])).toFixed(h):0,c[1]=0)):h=2;f=(Math.abs(c[1]?
c[0]:m)+Math.pow(10,-Math.max(h,p)-1)).toFixed(h);p=String(a.pInt(f));u=3<p.length?p.length%3:0;e=a.pick(e,x.decimalPoint);t=a.pick(t,x.thousandsSep);m=(0>m?"-":"")+(u?p.substr(0,u)+t:"");m+=p.substr(u).replace(/(\d{3})(?=\d)/g,"$1"+t);h&&(m+=e+f.slice(-h));c[1]&&0!==+m&&(m+="e"+c[1]);return m};Math.easeInOutSine=function(a){return-.5*(Math.cos(Math.PI*a)-1)};a.getStyle=function(m,h,e){if("width"===h)return Math.max(0,Math.min(m.offsetWidth,m.scrollWidth)-a.getStyle(m,"padding-left")-a.getStyle(m,
"padding-right"));if("height"===h)return Math.max(0,Math.min(m.offsetHeight,m.scrollHeight)-a.getStyle(m,"padding-top")-a.getStyle(m,"padding-bottom"));F.getComputedStyle||a.error(27,!0);if(m=F.getComputedStyle(m,void 0))m=m.getPropertyValue(h),a.pick(e,"opacity"!==h)&&(m=a.pInt(m));return m};a.inArray=function(m,h,e){return(a.indexOfPolyfill||Array.prototype.indexOf).call(h,m,e)};a.grep=function(m,h){return(a.filterPolyfill||Array.prototype.filter).call(m,h)};a.find=Array.prototype.find?function(a,
h){return a.find(h)}:function(a,h){var e,t=a.length;for(e=0;e<t;e++)if(h(a[e],e))return a[e]};a.some=function(m,h,e){return(a.somePolyfill||Array.prototype.some).call(m,h,e)};a.map=function(a,h){for(var e=[],t=0,x=a.length;t<x;t++)e[t]=h.call(a[t],a[t],t,a);return e};a.keys=function(m){return(a.keysPolyfill||Object.keys).call(void 0,m)};a.reduce=function(m,h,e){return(a.reducePolyfill||Array.prototype.reduce).apply(m,2<arguments.length?[h,e]:[h])};a.offset=function(a){var h=E.documentElement;a=a.parentElement||
a.parentNode?a.getBoundingClientRect():{top:0,left:0};return{top:a.top+(F.pageYOffset||h.scrollTop)-(h.clientTop||0),left:a.left+(F.pageXOffset||h.scrollLeft)-(h.clientLeft||0)}};a.stop=function(m,h){for(var e=a.timers.length;e--;)a.timers[e].elem!==m||h&&h!==a.timers[e].prop||(a.timers[e].stopped=!0)};a.each=function(m,h,e){return(a.forEachPolyfill||Array.prototype.forEach).call(m,h,e)};a.objectEach=function(a,h,e){for(var t in a)a.hasOwnProperty(t)&&h.call(e||a[t],a[t],t,a)};a.addEvent=function(m,
h,e,t){var x,p=m.addEventListener||a.addEventListenerPolyfill;x="function"===typeof m&&m.prototype?m.prototype.protoEvents=m.prototype.protoEvents||{}:m.hcEvents=m.hcEvents||{};a.Point&&m instanceof a.Point&&m.series&&m.series.chart&&(m.series.chart.runTrackerClick=!0);p&&p.call(m,h,e,!1);x[h]||(x[h]=[]);x[h].push(e);t&&a.isNumber(t.order)&&(e.order=t.order,x[h].sort(function(a,f){return a.order-f.order}));return function(){a.removeEvent(m,h,e)}};a.removeEvent=function(m,h,e){function t(f,c){var k=
m.removeEventListener||a.removeEventListenerPolyfill;k&&k.call(m,f,c,!1)}function x(f){var c,k;m.nodeName&&(h?(c={},c[h]=!0):c=f,a.objectEach(c,function(a,c){if(f[c])for(k=f[c].length;k--;)t(c,f[c][k])}))}var p,u;a.each(["protoEvents","hcEvents"],function(f){var c=m[f];c&&(h?(p=c[h]||[],e?(u=a.inArray(e,p),-1<u&&(p.splice(u,1),c[h]=p),t(h,e)):(x(c),c[h]=[])):(x(c),m[f]={}))})};a.fireEvent=function(m,h,e,t){var x,p,u,f,c;e=e||{};E.createEvent&&(m.dispatchEvent||m.fireEvent)?(x=E.createEvent("Events"),
x.initEvent(h,!0,!0),a.extend(x,e),m.dispatchEvent?m.dispatchEvent(x):m.fireEvent(h,x)):a.each(["protoEvents","hcEvents"],function(k){if(m[k])for(p=m[k][h]||[],u=p.length,e.target||a.extend(e,{preventDefault:function(){e.defaultPrevented=!0},target:m,type:h}),f=0;f<u;f++)(c=p[f])&&!1===c.call(m,e)&&e.preventDefault()});t&&!e.defaultPrevented&&t.call(m,e)};a.animate=function(m,h,e){var t,x="",p,u,f;a.isObject(e)||(f=arguments,e={duration:f[2],easing:f[3],complete:f[4]});a.isNumber(e.duration)||(e.duration=
400);e.easing="function"===typeof e.easing?e.easing:Math[e.easing]||Math.easeInOutSine;e.curAnim=a.merge(h);a.objectEach(h,function(c,f){a.stop(m,f);u=new a.Fx(m,e,f);p=null;"d"===f?(u.paths=u.initPath(m,m.d,h.d),u.toD=h.d,t=0,p=1):m.attr?t=m.attr(f):(t=parseFloat(a.getStyle(m,f))||0,"opacity"!==f&&(x="px"));p||(p=c);p&&p.match&&p.match("px")&&(p=p.replace(/px/g,""));u.run(t,p,x)})};a.seriesType=function(m,h,e,t,x){var p=a.getOptions(),u=a.seriesTypes;p.plotOptions[m]=a.merge(p.plotOptions[h],e);
u[m]=a.extendClass(u[h]||function(){},t);u[m].prototype.type=m;x&&(u[m].prototype.pointClass=a.extendClass(a.Point,x));return u[m]};a.uniqueKey=function(){var a=Math.random().toString(36).substring(2,9),h=0;return function(){return"highcharts-"+a+"-"+h++}}();F.jQuery&&(F.jQuery.fn.highcharts=function(){var m=[].slice.call(arguments);if(this[0])return m[0]?(new (a[a.isString(m[0])?m.shift():"Chart"])(this[0],m[0],m[1]),this):C[a.attr(this[0],"data-highcharts-chart")]})})(K);(function(a){var C=a.each,
E=a.isNumber,F=a.map,m=a.merge,h=a.pInt;a.Color=function(e){if(!(this instanceof a.Color))return new a.Color(e);this.init(e)};a.Color.prototype={parsers:[{regex:/rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/,parse:function(a){return[h(a[1]),h(a[2]),h(a[3]),parseFloat(a[4],10)]}},{regex:/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/,parse:function(a){return[h(a[1]),h(a[2]),h(a[3]),1]}}],names:{white:"#ffffff",black:"#000000"},init:function(e){var h,
x,p,u;if((this.input=e=this.names[e&&e.toLowerCase?e.toLowerCase():""]||e)&&e.stops)this.stops=F(e.stops,function(f){return new a.Color(f[1])});else if(e&&e.charAt&&"#"===e.charAt()&&(h=e.length,e=parseInt(e.substr(1),16),7===h?x=[(e&16711680)>>16,(e&65280)>>8,e&255,1]:4===h&&(x=[(e&3840)>>4|(e&3840)>>8,(e&240)>>4|e&240,(e&15)<<4|e&15,1])),!x)for(p=this.parsers.length;p--&&!x;)u=this.parsers[p],(h=u.regex.exec(e))&&(x=u.parse(h));this.rgba=x||[]},get:function(a){var e=this.input,h=this.rgba,p;this.stops?
(p=m(e),p.stops=[].concat(p.stops),C(this.stops,function(e,f){p.stops[f]=[p.stops[f][0],e.get(a)]})):p=h&&E(h[0])?"rgb"===a||!a&&1===h[3]?"rgb("+h[0]+","+h[1]+","+h[2]+")":"a"===a?h[3]:"rgba("+h.join(",")+")":e;return p},brighten:function(a){var e,x=this.rgba;if(this.stops)C(this.stops,function(e){e.brighten(a)});else if(E(a)&&0!==a)for(e=0;3>e;e++)x[e]+=h(255*a),0>x[e]&&(x[e]=0),255<x[e]&&(x[e]=255);return this},setOpacity:function(a){this.rgba[3]=a;return this},tweenTo:function(a,h){var e=this.rgba,
p=a.rgba;p.length&&e&&e.length?(a=1!==p[3]||1!==e[3],h=(a?"rgba(":"rgb(")+Math.round(p[0]+(e[0]-p[0])*(1-h))+","+Math.round(p[1]+(e[1]-p[1])*(1-h))+","+Math.round(p[2]+(e[2]-p[2])*(1-h))+(a?","+(p[3]+(e[3]-p[3])*(1-h)):"")+")"):h=a.input||"none";return h}};a.color=function(e){return new a.Color(e)}})(K);(function(a){var C,E,F=a.addEvent,m=a.animate,h=a.attr,e=a.charts,t=a.color,x=a.css,p=a.createElement,u=a.defined,f=a.deg2rad,c=a.destroyObjectProperties,k=a.doc,r=a.each,l=a.extend,d=a.erase,b=a.grep,
v=a.hasTouch,q=a.inArray,I=a.isArray,w=a.isFirefox,L=a.isMS,B=a.isObject,H=a.isString,n=a.isWebKit,D=a.merge,A=a.noop,M=a.objectEach,G=a.pick,g=a.pInt,y=a.removeEvent,Q=a.stop,N=a.svg,J=a.SVG_NS,P=a.symbolSizes,O=a.win;C=a.SVGElement=function(){return this};l(C.prototype,{opacity:1,SVG_NS:J,textProps:"direction fontSize fontWeight fontFamily fontStyle color lineHeight width textAlign textDecoration textOverflow textOutline cursor".split(" "),init:function(a,g){this.element="span"===g?p(g):k.createElementNS(this.SVG_NS,
g);this.renderer=a},animate:function(z,g,b){g=a.animObject(G(g,this.renderer.globalAnimation,!0));0!==g.duration?(b&&(g.complete=b),m(this,z,g)):(this.attr(z,null,b),g.step&&g.step.call(this));return this},complexColor:function(z,g,b){var y=this.renderer,d,c,l,n,f,J,A,k,R,v,q,w=[],N;a.fireEvent(this.renderer,"complexColor",{args:arguments},function(){z.radialGradient?c="radialGradient":z.linearGradient&&(c="linearGradient");c&&(l=z[c],f=y.gradients,A=z.stops,v=b.radialReference,I(l)&&(z[c]=l={x1:l[0],
y1:l[1],x2:l[2],y2:l[3],gradientUnits:"userSpaceOnUse"}),"radialGradient"===c&&v&&!u(l.gradientUnits)&&(n=l,l=D(l,y.getRadialAttr(v,n),{gradientUnits:"userSpaceOnUse"})),M(l,function(a,z){"id"!==z&&w.push(z,a)}),M(A,function(a){w.push(a)}),w=w.join(","),f[w]?q=f[w].attr("id"):(l.id=q=a.uniqueKey(),f[w]=J=y.createElement(c).attr(l).add(y.defs),J.radAttr=n,J.stops=[],r(A,function(z){0===z[1].indexOf("rgba")?(d=a.color(z[1]),k=d.get("rgb"),R=d.get("a")):(k=z[1],R=1);z=y.createElement("stop").attr({offset:z[0],
"stop-color":k,"stop-opacity":R}).add(J);J.stops.push(z)})),N="url("+y.url+"#"+q+")",b.setAttribute(g,N),b.gradient=w,z.toString=function(){return N})})},applyTextOutline:function(z){var g=this.element,b,y,c,l,n;-1!==z.indexOf("contrast")&&(z=z.replace(/contrast/g,this.renderer.getContrast(g.style.fill)));z=z.split(" ");y=z[z.length-1];if((c=z[0])&&"none"!==c&&a.svg){this.fakeTS=!0;z=[].slice.call(g.getElementsByTagName("tspan"));this.ySetter=this.xSetter;c=c.replace(/(^[\d\.]+)(.*?)$/g,function(a,
z,g){return 2*z+g});for(n=z.length;n--;)b=z[n],"highcharts-text-outline"===b.getAttribute("class")&&d(z,g.removeChild(b));l=g.firstChild;r(z,function(a,z){0===z&&(a.setAttribute("x",g.getAttribute("x")),z=g.getAttribute("y"),a.setAttribute("y",z||0),null===z&&g.setAttribute("y",0));a=a.cloneNode(1);h(a,{"class":"highcharts-text-outline",fill:y,stroke:y,"stroke-width":c,"stroke-linejoin":"round"});g.insertBefore(a,l)})}},attr:function(a,g,b,y){var z,d=this.element,c,l=this,n,f;"string"===typeof a&&
void 0!==g&&(z=a,a={},a[z]=g);"string"===typeof a?l=(this[a+"Getter"]||this._defaultGetter).call(this,a,d):(M(a,function(z,g){n=!1;y||Q(this,g);this.symbolName&&/^(x|y|width|height|r|start|end|innerR|anchorX|anchorY)$/.test(g)&&(c||(this.symbolAttr(a),c=!0),n=!0);!this.rotation||"x"!==g&&"y"!==g||(this.doTransform=!0);n||(f=this[g+"Setter"]||this._defaultSetter,f.call(this,z,g,d),this.shadows&&/^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(g)&&this.updateShadows(g,z,f))},this),this.afterSetters());
b&&b.call(this);return l},afterSetters:function(){this.doTransform&&(this.updateTransform(),this.doTransform=!1)},updateShadows:function(a,g,b){for(var z=this.shadows,y=z.length;y--;)b.call(z[y],"height"===a?Math.max(g-(z[y].cutHeight||0),0):"d"===a?this.d:g,a,z[y])},addClass:function(a,g){var z=this.attr("class")||"";-1===z.indexOf(a)&&(g||(a=(z+(z?" ":"")+a).replace("  "," ")),this.attr("class",a));return this},hasClass:function(a){return-1!==q(a,(this.attr("class")||"").split(" "))},removeClass:function(a){return this.attr("class",
(this.attr("class")||"").replace(a,""))},symbolAttr:function(a){var z=this;r("x y r start end width height innerR anchorX anchorY".split(" "),function(g){z[g]=G(a[g],z[g])});z.attr({d:z.renderer.symbols[z.symbolName](z.x,z.y,z.width,z.height,z)})},clip:function(a){return this.attr("clip-path",a?"url("+this.renderer.url+"#"+a.id+")":"none")},crisp:function(a,g){var z;g=g||a.strokeWidth||0;z=Math.round(g)%2/2;a.x=Math.floor(a.x||this.x||0)+z;a.y=Math.floor(a.y||this.y||0)+z;a.width=Math.floor((a.width||
this.width||0)-2*z);a.height=Math.floor((a.height||this.height||0)-2*z);u(a.strokeWidth)&&(a.strokeWidth=g);return a},css:function(a){var z=this.styles,b={},y=this.element,d,c="",n,f=!z,J=["textOutline","textOverflow","width"];a&&a.color&&(a.fill=a.color);z&&M(a,function(a,g){a!==z[g]&&(b[g]=a,f=!0)});f&&(z&&(a=l(z,b)),a&&(null===a.width||"auto"===a.width?delete this.textWidth:"text"===y.nodeName.toLowerCase()&&a.width&&(d=this.textWidth=g(a.width))),this.styles=a,d&&!N&&this.renderer.forExport&&
delete a.width,y.namespaceURI===this.SVG_NS?(n=function(a,z){return"-"+z.toLowerCase()},M(a,function(a,z){-1===q(z,J)&&(c+=z.replace(/([A-Z])/g,n)+":"+a+";")}),c&&h(y,"style",c)):x(y,a),this.added&&("text"===this.element.nodeName&&this.renderer.buildText(this),a&&a.textOutline&&this.applyTextOutline(a.textOutline)));return this},strokeWidth:function(){return this["stroke-width"]||0},on:function(a,g){var z=this,b=z.element;v&&"click"===a?(b.ontouchstart=function(a){z.touchEventFired=Date.now();a.preventDefault();
g.call(b,a)},b.onclick=function(a){(-1===O.navigator.userAgent.indexOf("Android")||1100<Date.now()-(z.touchEventFired||0))&&g.call(b,a)}):b["on"+a]=g;return this},setRadialReference:function(a){var z=this.renderer.gradients[this.element.gradient];this.element.radialReference=a;z&&z.radAttr&&z.animate(this.renderer.getRadialAttr(a,z.radAttr));return this},translate:function(a,g){return this.attr({translateX:a,translateY:g})},invert:function(a){this.inverted=a;this.updateTransform();return this},updateTransform:function(){var a=
this.translateX||0,g=this.translateY||0,b=this.scaleX,y=this.scaleY,d=this.inverted,c=this.rotation,l=this.matrix,n=this.element;d&&(a+=this.width,g+=this.height);a=["translate("+a+","+g+")"];u(l)&&a.push("matrix("+l.join(",")+")");d?a.push("rotate(90) scale(-1,1)"):c&&a.push("rotate("+c+" "+G(this.rotationOriginX,n.getAttribute("x"),0)+" "+G(this.rotationOriginY,n.getAttribute("y")||0)+")");(u(b)||u(y))&&a.push("scale("+G(b,1)+" "+G(y,1)+")");a.length&&n.setAttribute("transform",a.join(" "))},toFront:function(){var a=
this.element;a.parentNode.appendChild(a);return this},align:function(a,g,b){var z,y,c,l,n={};y=this.renderer;c=y.alignedObjects;var f,J;if(a){if(this.alignOptions=a,this.alignByTranslate=g,!b||H(b))this.alignTo=z=b||"renderer",d(c,this),c.push(this),b=null}else a=this.alignOptions,g=this.alignByTranslate,z=this.alignTo;b=G(b,y[z],y);z=a.align;y=a.verticalAlign;c=(b.x||0)+(a.x||0);l=(b.y||0)+(a.y||0);"right"===z?f=1:"center"===z&&(f=2);f&&(c+=(b.width-(a.width||0))/f);n[g?"translateX":"x"]=Math.round(c);
"bottom"===y?J=1:"middle"===y&&(J=2);J&&(l+=(b.height-(a.height||0))/J);n[g?"translateY":"y"]=Math.round(l);this[this.placed?"animate":"attr"](n);this.placed=!0;this.alignAttr=n;return this},getBBox:function(a,g){var z,b=this.renderer,y,d=this.element,c=this.styles,n,J=this.textStr,A,k=b.cache,v=b.cacheKeys,q;g=G(g,this.rotation);y=g*f;n=c&&c.fontSize;u(J)&&(q=J.toString(),-1===q.indexOf("\x3c")&&(q=q.replace(/[0-9]/g,"0")),q+=["",g||0,n,this.textWidth,c&&c.textOverflow].join());q&&!a&&(z=k[q]);if(!z){if(d.namespaceURI===
this.SVG_NS||b.forExport){try{(A=this.fakeTS&&function(a){r(d.querySelectorAll(".highcharts-text-outline"),function(z){z.style.display=a})})&&A("none"),z=d.getBBox?l({},d.getBBox()):{width:d.offsetWidth,height:d.offsetHeight},A&&A("")}catch(W){}if(!z||0>z.width)z={width:0,height:0}}else z=this.htmlGetBBox();b.isSVG&&(a=z.width,b=z.height,c&&"11px"===c.fontSize&&17===Math.round(b)&&(z.height=b=14),g&&(z.width=Math.abs(b*Math.sin(y))+Math.abs(a*Math.cos(y)),z.height=Math.abs(b*Math.cos(y))+Math.abs(a*
Math.sin(y))));if(q&&0<z.height){for(;250<v.length;)delete k[v.shift()];k[q]||v.push(q);k[q]=z}}return z},show:function(a){return this.attr({visibility:a?"inherit":"visible"})},hide:function(){return this.attr({visibility:"hidden"})},fadeOut:function(a){var z=this;z.animate({opacity:0},{duration:a||150,complete:function(){z.attr({y:-9999})}})},add:function(a){var z=this.renderer,g=this.element,b;a&&(this.parentGroup=a);this.parentInverted=a&&a.inverted;void 0!==this.textStr&&z.buildText(this);this.added=
!0;if(!a||a.handleZ||this.zIndex)b=this.zIndexSetter();b||(a?a.element:z.box).appendChild(g);if(this.onAdd)this.onAdd();return this},safeRemoveChild:function(a){var z=a.parentNode;z&&z.removeChild(a)},destroy:function(){var a=this,g=a.element||{},b=a.renderer.isSVG&&"SPAN"===g.nodeName&&a.parentGroup,y=g.ownerSVGElement,c=a.clipPath;g.onclick=g.onmouseout=g.onmouseover=g.onmousemove=g.point=null;Q(a);c&&y&&(r(y.querySelectorAll("[clip-path],[CLIP-PATH]"),function(a){var g=a.getAttribute("clip-path"),
z=c.element.id;(-1<g.indexOf("(#"+z+")")||-1<g.indexOf('("#'+z+'")'))&&a.removeAttribute("clip-path")}),a.clipPath=c.destroy());if(a.stops){for(y=0;y<a.stops.length;y++)a.stops[y]=a.stops[y].destroy();a.stops=null}a.safeRemoveChild(g);for(a.destroyShadows();b&&b.div&&0===b.div.childNodes.length;)g=b.parentGroup,a.safeRemoveChild(b.div),delete b.div,b=g;a.alignTo&&d(a.renderer.alignedObjects,a);M(a,function(g,z){delete a[z]});return null},shadow:function(a,g,b){var z=[],y,d,c=this.element,l,n,f,J;
if(!a)this.destroyShadows();else if(!this.shadows){n=G(a.width,3);f=(a.opacity||.15)/n;J=this.parentInverted?"(-1,-1)":"("+G(a.offsetX,1)+", "+G(a.offsetY,1)+")";for(y=1;y<=n;y++)d=c.cloneNode(0),l=2*n+1-2*y,h(d,{stroke:a.color||"#000000","stroke-opacity":f*y,"stroke-width":l,transform:"translate"+J,fill:"none"}),d.setAttribute("class",(d.getAttribute("class")||"")+" highcharts-shadow"),b&&(h(d,"height",Math.max(h(d,"height")-l,0)),d.cutHeight=l),g?g.element.appendChild(d):c.parentNode&&c.parentNode.insertBefore(d,
c),z.push(d);this.shadows=z}return this},destroyShadows:function(){r(this.shadows||[],function(a){this.safeRemoveChild(a)},this);this.shadows=void 0},xGetter:function(a){"circle"===this.element.nodeName&&("x"===a?a="cx":"y"===a&&(a="cy"));return this._defaultGetter(a)},_defaultGetter:function(a){a=G(this[a+"Value"],this[a],this.element?this.element.getAttribute(a):null,0);/^[\-0-9\.]+$/.test(a)&&(a=parseFloat(a));return a},dSetter:function(a,g,b){a&&a.join&&(a=a.join(" "));/(NaN| {2}|^$)/.test(a)&&
(a="M 0 0");this[g]!==a&&(b.setAttribute(g,a),this[g]=a)},dashstyleSetter:function(a){var b,z=this["stroke-width"];"inherit"===z&&(z=1);if(a=a&&a.toLowerCase()){a=a.replace("shortdashdotdot","3,1,1,1,1,1,").replace("shortdashdot","3,1,1,1").replace("shortdot","1,1,").replace("shortdash","3,1,").replace("longdash","8,3,").replace(/dot/g,"1,3,").replace("dash","4,3,").replace(/,$/,"").split(",");for(b=a.length;b--;)a[b]=g(a[b])*z;a=a.join(",").replace(/NaN/g,"none");this.element.setAttribute("stroke-dasharray",
a)}},alignSetter:function(a){this.alignValue=a;this.element.setAttribute("text-anchor",{left:"start",center:"middle",right:"end"}[a])},opacitySetter:function(a,g,b){this[g]=a;b.setAttribute(g,a)},titleSetter:function(a){var g=this.element.getElementsByTagName("title")[0];g||(g=k.createElementNS(this.SVG_NS,"title"),this.element.appendChild(g));g.firstChild&&g.removeChild(g.firstChild);g.appendChild(k.createTextNode(String(G(a),"").replace(/<[^>]*>/g,"").replace(/&lt;/g,"\x3c").replace(/&gt;/g,"\x3e")))},
textSetter:function(a){a!==this.textStr&&(delete this.bBox,this.textStr=a,this.added&&this.renderer.buildText(this))},fillSetter:function(a,g,b){"string"===typeof a?b.setAttribute(g,a):a&&this.complexColor(a,g,b)},visibilitySetter:function(a,g,b){"inherit"===a?b.removeAttribute(g):this[g]!==a&&b.setAttribute(g,a);this[g]=a},zIndexSetter:function(a,b){var y=this.renderer,z=this.parentGroup,d=(z||y).element||y.box,c,l=this.element,n,f,y=d===y.box;c=this.added;var J;u(a)?(l.setAttribute("data-z-index",
a),a=+a,this[b]===a&&(c=!1)):u(this[b])&&l.removeAttribute("data-z-index");this[b]=a;if(c){(a=this.zIndex)&&z&&(z.handleZ=!0);b=d.childNodes;for(J=b.length-1;0<=J&&!n;J--)if(z=b[J],c=z.getAttribute("data-z-index"),f=!u(c),z!==l)if(0>a&&f&&!y&&!J)d.insertBefore(l,b[J]),n=!0;else if(g(c)<=a||f&&(!u(a)||0<=a))d.insertBefore(l,b[J+1]||null),n=!0;n||(d.insertBefore(l,b[y?3:0]||null),n=!0)}return n},_defaultSetter:function(a,g,b){b.setAttribute(g,a)}});C.prototype.yGetter=C.prototype.xGetter;C.prototype.translateXSetter=
C.prototype.translateYSetter=C.prototype.rotationSetter=C.prototype.verticalAlignSetter=C.prototype.rotationOriginXSetter=C.prototype.rotationOriginYSetter=C.prototype.scaleXSetter=C.prototype.scaleYSetter=C.prototype.matrixSetter=function(a,g){this[g]=a;this.doTransform=!0};C.prototype["stroke-widthSetter"]=C.prototype.strokeSetter=function(a,g,b){this[g]=a;this.stroke&&this["stroke-width"]?(C.prototype.fillSetter.call(this,this.stroke,"stroke",b),b.setAttribute("stroke-width",this["stroke-width"]),
this.hasStroke=!0):"stroke-width"===g&&0===a&&this.hasStroke&&(b.removeAttribute("stroke"),this.hasStroke=!1)};E=a.SVGRenderer=function(){this.init.apply(this,arguments)};l(E.prototype,{Element:C,SVG_NS:J,init:function(a,g,b,y,d,c){var z;y=this.createElement("svg").attr({version:"1.1","class":"highcharts-root"}).css(this.getStyle(y));z=y.element;a.appendChild(z);h(a,"dir","ltr");-1===a.innerHTML.indexOf("xmlns")&&h(z,"xmlns",this.SVG_NS);this.isSVG=!0;this.box=z;this.boxWrapper=y;this.alignedObjects=
[];this.url=(w||n)&&k.getElementsByTagName("base").length?O.location.href.split("#")[0].replace(/<[^>]*>/g,"").replace(/([\('\)])/g,"\\$1").replace(/ /g,"%20"):"";this.createElement("desc").add().element.appendChild(k.createTextNode("Created with Highcharts 6.1.4"));this.defs=this.createElement("defs").add();this.allowHTML=c;this.forExport=d;this.gradients={};this.cache={};this.cacheKeys=[];this.imgCount=0;this.setSize(g,b,!1);var l;w&&a.getBoundingClientRect&&(g=function(){x(a,{left:0,top:0});l=
a.getBoundingClientRect();x(a,{left:Math.ceil(l.left)-l.left+"px",top:Math.ceil(l.top)-l.top+"px"})},g(),this.unSubPixelFix=F(O,"resize",g))},getStyle:function(a){return this.style=l({fontFamily:'"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',fontSize:"12px"},a)},setStyle:function(a){this.boxWrapper.css(this.getStyle(a))},isHidden:function(){return!this.boxWrapper.getBBox().width},destroy:function(){var a=this.defs;this.box=null;this.boxWrapper=this.boxWrapper.destroy();c(this.gradients||
{});this.gradients=null;a&&(this.defs=a.destroy());this.unSubPixelFix&&this.unSubPixelFix();return this.alignedObjects=null},createElement:function(a){var g=new this.Element;g.init(this,a);return g},draw:A,getRadialAttr:function(a,g){return{cx:a[0]-a[2]/2+g.cx*a[2],cy:a[1]-a[2]/2+g.cy*a[2],r:g.r*a[2]}},truncate:function(a,g,b,y,d,c,l){var z=this,n=a.rotation,f,J=y?1:0,A=(b||y).length,v=A,q=[],r=function(a){g.firstChild&&g.removeChild(g.firstChild);a&&g.appendChild(k.createTextNode(a))},w=function(c,
n){n=n||c;if(void 0===q[n])if(g.getSubStringLength)try{q[n]=d+g.getSubStringLength(0,y?n+1:n)}catch(X){}else r(l(b||y,c)),q[n]=d+z.getSpanWidth(a,g);return q[n]},D,N;a.rotation=0;D=w(g.textContent.length);if(N=d+D>c){for(;J<=A;)v=Math.ceil((J+A)/2),y&&(f=l(y,v)),D=w(v,f&&f.length-1),J===A?J=A+1:D>c?A=v-1:J=v;0===A?r(""):b&&A===b.length-1||r(f||l(b||y,v))}y&&y.splice(0,v);a.actualWidth=D;a.rotation=n;return N},escapes:{"\x26":"\x26amp;","\x3c":"\x26lt;","\x3e":"\x26gt;","'":"\x26#39;",'"':"\x26quot;"},
buildText:function(a){var y=a.element,d=this,c=d.forExport,l=G(a.textStr,"").toString(),n=-1!==l.indexOf("\x3c"),z=y.childNodes,f,A=h(y,"x"),v=a.styles,w=a.textWidth,D=v&&v.lineHeight,e=v&&v.textOutline,B=v&&"ellipsis"===v.textOverflow,Q=v&&"nowrap"===v.whiteSpace,P=v&&v.fontSize,u,p,I=z.length,v=w&&!a.added&&this.box,H=function(a){var b;b=/(px|em)$/.test(a&&a.style.fontSize)?a.style.fontSize:P||d.style.fontSize||12;return D?g(D):d.fontMetrics(b,a.getAttribute("style")?a:y).h},O=function(a,g){M(d.escapes,
function(b,y){g&&-1!==q(b,g)||(a=a.toString().replace(new RegExp(b,"g"),y))});return a},m=function(a,g){var b;b=a.indexOf("\x3c");a=a.substring(b,a.indexOf("\x3e")-b);b=a.indexOf(g+"\x3d");if(-1!==b&&(b=b+g.length+1,g=a.charAt(b),'"'===g||"'"===g))return a=a.substring(b+1),a.substring(0,a.indexOf(g))};u=[l,B,Q,D,e,P,w].join();if(u!==a.textCache){for(a.textCache=u;I--;)y.removeChild(z[I]);n||e||B||w||-1!==l.indexOf(" ")?(v&&v.appendChild(y),l=n?l.replace(/<(b|strong)>/g,'\x3cspan style\x3d"font-weight:bold"\x3e').replace(/<(i|em)>/g,
'\x3cspan style\x3d"font-style:italic"\x3e').replace(/<a/g,"\x3cspan").replace(/<\/(b|strong|i|em|a)>/g,"\x3c/span\x3e").split(/<br.*?>/g):[l],l=b(l,function(a){return""!==a}),r(l,function(g,b){var l,n=0,z=0;g=g.replace(/^\s+|\s+$/g,"").replace(/<span/g,"|||\x3cspan").replace(/<\/span>/g,"\x3c/span\x3e|||");l=g.split("|||");r(l,function(g){if(""!==g||1===l.length){var v={},q=k.createElementNS(d.SVG_NS,"tspan"),r,D;(r=m(g,"class"))&&h(q,"class",r);if(r=m(g,"style"))r=r.replace(/(;| |^)color([ :])/,
"$1fill$2"),h(q,"style",r);(D=m(g,"href"))&&!c&&(h(q,"onclick",'location.href\x3d"'+D+'"'),h(q,"class","highcharts-anchor"),x(q,{cursor:"pointer"}));g=O(g.replace(/<[a-zA-Z\/](.|\n)*?>/g,"")||" ");if(" "!==g){q.appendChild(k.createTextNode(g));n?v.dx=0:b&&null!==A&&(v.x=A);h(q,v);y.appendChild(q);!n&&p&&(!N&&c&&x(q,{display:"block"}),h(q,"dy",H(q)));if(w){var e=g.replace(/([^\^])-/g,"$1- ").split(" "),v=!Q&&(1<l.length||b||1<e.length);D=0;var u=H(q);if(B)f=d.truncate(a,q,g,void 0,0,Math.max(0,w-parseInt(P||
12,10)),function(a,g){return a.substring(0,g)+"\u2026"});else if(v)for(;e.length;)e.length&&!Q&&0<D&&(q=k.createElementNS(J,"tspan"),h(q,{dy:u,x:A}),r&&h(q,"style",r),q.appendChild(k.createTextNode(e.join(" ").replace(/- /g,"-"))),y.appendChild(q)),d.truncate(a,q,null,e,0===D?z:0,w,function(a,g){return e.slice(0,g).join(" ").replace(/- /g,"-")}),z=a.actualWidth,D++}n++}}});p=p||y.childNodes.length}),B&&f&&a.attr("title",O(a.textStr,["\x26lt;","\x26gt;"])),v&&v.removeChild(y),e&&a.applyTextOutline&&
a.applyTextOutline(e)):y.appendChild(k.createTextNode(O(l)))}},getContrast:function(a){a=t(a).rgba;a[0]*=1;a[1]*=1.2;a[2]*=.5;return 459<a[0]+a[1]+a[2]?"#000000":"#FFFFFF"},button:function(a,g,b,y,d,c,n,f,J){var z=this.label(a,g,b,J,null,null,null,null,"button"),A=0;z.attr(D({padding:8,r:2},d));var v,q,k,r;d=D({fill:"#f7f7f7",stroke:"#cccccc","stroke-width":1,style:{color:"#333333",cursor:"pointer",fontWeight:"normal"}},d);v=d.style;delete d.style;c=D(d,{fill:"#e6e6e6"},c);q=c.style;delete c.style;
n=D(d,{fill:"#e6ebf5",style:{color:"#000000",fontWeight:"bold"}},n);k=n.style;delete n.style;f=D(d,{style:{color:"#cccccc"}},f);r=f.style;delete f.style;F(z.element,L?"mouseover":"mouseenter",function(){3!==A&&z.setState(1)});F(z.element,L?"mouseout":"mouseleave",function(){3!==A&&z.setState(A)});z.setState=function(a){1!==a&&(z.state=A=a);z.removeClass(/highcharts-button-(normal|hover|pressed|disabled)/).addClass("highcharts-button-"+["normal","hover","pressed","disabled"][a||0]);z.attr([d,c,n,f][a||
0]).css([v,q,k,r][a||0])};z.attr(d).css(l({cursor:"default"},v));return z.on("click",function(a){3!==A&&y.call(z,a)})},crispLine:function(a,g){a[1]===a[4]&&(a[1]=a[4]=Math.round(a[1])-g%2/2);a[2]===a[5]&&(a[2]=a[5]=Math.round(a[2])+g%2/2);return a},path:function(a){var g={fill:"none"};I(a)?g.d=a:B(a)&&l(g,a);return this.createElement("path").attr(g)},circle:function(a,g,b){a=B(a)?a:{x:a,y:g,r:b};g=this.createElement("circle");g.xSetter=g.ySetter=function(a,g,b){b.setAttribute("c"+g,a)};return g.attr(a)},
arc:function(a,g,b,y,d,c){B(a)?(y=a,g=y.y,b=y.r,a=y.x):y={innerR:y,start:d,end:c};a=this.symbol("arc",a,g,b,b,y);a.r=b;return a},rect:function(a,g,b,y,d,c){d=B(a)?a.r:d;var l=this.createElement("rect");a=B(a)?a:void 0===a?{}:{x:a,y:g,width:Math.max(b,0),height:Math.max(y,0)};void 0!==c&&(a.strokeWidth=c,a=l.crisp(a));a.fill="none";d&&(a.r=d);l.rSetter=function(a,g,b){h(b,{rx:a,ry:a})};return l.attr(a)},setSize:function(a,g,b){var y=this.alignedObjects,d=y.length;this.width=a;this.height=g;for(this.boxWrapper.animate({width:a,
height:g},{step:function(){this.attr({viewBox:"0 0 "+this.attr("width")+" "+this.attr("height")})},duration:G(b,!0)?void 0:0});d--;)y[d].align()},g:function(a){var g=this.createElement("g");return a?g.attr({"class":"highcharts-"+a}):g},image:function(a,g,b,y,d,c){var n={preserveAspectRatio:"none"},f,J=function(a,g){a.setAttributeNS?a.setAttributeNS("http://www.w3.org/1999/xlink","href",g):a.setAttribute("hc-svg-href",g)},z=function(g){J(f.element,a);c.call(f,g)};1<arguments.length&&l(n,{x:g,y:b,width:y,
height:d});f=this.createElement("image").attr(n);c?(J(f.element,"data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw\x3d\x3d"),n=new O.Image,F(n,"load",z),n.src=a,n.complete&&z({})):J(f.element,a);return f},symbol:function(a,g,b,y,d,c){var n=this,f,J=/^url\((.*?)\)$/,z=J.test(a),A=!z&&(this.symbols[a]?a:"circle"),v=A&&this.symbols[A],q=u(g)&&v&&v.call(this.symbols,Math.round(g),Math.round(b),y,d,c),D,w;v?(f=this.path(q),f.attr("fill","none"),l(f,{symbolName:A,x:g,y:b,width:y,
height:d}),c&&l(f,c)):z&&(D=a.match(J)[1],f=this.image(D),f.imgwidth=G(P[D]&&P[D].width,c&&c.width),f.imgheight=G(P[D]&&P[D].height,c&&c.height),w=function(){f.attr({width:f.width,height:f.height})},r(["width","height"],function(a){f[a+"Setter"]=function(a,g){var b={},y=this["img"+g],d="width"===g?"translateX":"translateY";this[g]=a;u(y)&&(this.element&&this.element.setAttribute(g,y),this.alignByTranslate||(b[d]=((this[g]||0)-y)/2,this.attr(b)))}}),u(g)&&f.attr({x:g,y:b}),f.isImg=!0,u(f.imgwidth)&&
u(f.imgheight)?w():(f.attr({width:0,height:0}),p("img",{onload:function(){var a=e[n.chartIndex];0===this.width&&(x(this,{position:"absolute",top:"-999em"}),k.body.appendChild(this));P[D]={width:this.width,height:this.height};f.imgwidth=this.width;f.imgheight=this.height;f.element&&w();this.parentNode&&this.parentNode.removeChild(this);n.imgCount--;if(!n.imgCount&&a&&a.onload)a.onload()},src:D}),this.imgCount++));return f},symbols:{circle:function(a,g,b,y){return this.arc(a+b/2,g+y/2,b/2,y/2,{start:0,
end:2*Math.PI,open:!1})},square:function(a,g,b,y){return["M",a,g,"L",a+b,g,a+b,g+y,a,g+y,"Z"]},triangle:function(a,g,b,y){return["M",a+b/2,g,"L",a+b,g+y,a,g+y,"Z"]},"triangle-down":function(a,g,b,y){return["M",a,g,"L",a+b,g,a+b/2,g+y,"Z"]},diamond:function(a,g,b,y){return["M",a+b/2,g,"L",a+b,g+y/2,a+b/2,g+y,a,g+y/2,"Z"]},arc:function(a,g,b,y,d){var c=d.start,l=d.r||b,n=d.r||y||b,f=d.end-.001;b=d.innerR;y=G(d.open,.001>Math.abs(d.end-d.start-2*Math.PI));var J=Math.cos(c),A=Math.sin(c),v=Math.cos(f),
f=Math.sin(f);d=.001>d.end-c-Math.PI?0:1;l=["M",a+l*J,g+n*A,"A",l,n,0,d,1,a+l*v,g+n*f];u(b)&&l.push(y?"M":"L",a+b*v,g+b*f,"A",b,b,0,d,0,a+b*J,g+b*A);l.push(y?"":"Z");return l},callout:function(a,g,b,y,d){var c=Math.min(d&&d.r||0,b,y),l=c+6,n=d&&d.anchorX;d=d&&d.anchorY;var f;f=["M",a+c,g,"L",a+b-c,g,"C",a+b,g,a+b,g,a+b,g+c,"L",a+b,g+y-c,"C",a+b,g+y,a+b,g+y,a+b-c,g+y,"L",a+c,g+y,"C",a,g+y,a,g+y,a,g+y-c,"L",a,g+c,"C",a,g,a,g,a+c,g];n&&n>b?d>g+l&&d<g+y-l?f.splice(13,3,"L",a+b,d-6,a+b+6,d,a+b,d+6,a+b,
g+y-c):f.splice(13,3,"L",a+b,y/2,n,d,a+b,y/2,a+b,g+y-c):n&&0>n?d>g+l&&d<g+y-l?f.splice(33,3,"L",a,d+6,a-6,d,a,d-6,a,g+c):f.splice(33,3,"L",a,y/2,n,d,a,y/2,a,g+c):d&&d>y&&n>a+l&&n<a+b-l?f.splice(23,3,"L",n+6,g+y,n,g+y+6,n-6,g+y,a+c,g+y):d&&0>d&&n>a+l&&n<a+b-l&&f.splice(3,3,"L",n-6,g,n,g-6,n+6,g,b-c,g);return f}},clipRect:function(g,b,y,d){var c=a.uniqueKey(),n=this.createElement("clipPath").attr({id:c}).add(this.defs);g=this.rect(g,b,y,d,0).add(n);g.id=c;g.clipPath=n;g.count=0;return g},text:function(a,
g,b,y){var d={};if(y&&(this.allowHTML||!this.forExport))return this.html(a,g,b);d.x=Math.round(g||0);b&&(d.y=Math.round(b));if(a||0===a)d.text=a;a=this.createElement("text").attr(d);y||(a.xSetter=function(a,g,b){var y=b.getElementsByTagName("tspan"),d,c=b.getAttribute(g),n;for(n=0;n<y.length;n++)d=y[n],d.getAttribute(g)===c&&d.setAttribute(g,a);b.setAttribute(g,a)});return a},fontMetrics:function(a,b){a=a||b&&b.style&&b.style.fontSize||this.style&&this.style.fontSize;a=/px/.test(a)?g(a):/em/.test(a)?
parseFloat(a)*(b?this.fontMetrics(null,b.parentNode).f:16):12;b=24>a?a+3:Math.round(1.2*a);return{h:b,b:Math.round(.8*b),f:a}},rotCorr:function(a,g,b){var y=a;g&&b&&(y=Math.max(y*Math.cos(g*f),4));return{x:-a/3*Math.sin(g*f),y:y}},label:function(g,b,d,c,n,f,J,A,v){var q=this,k=q.g("button"!==v&&"label"),w=k.text=q.text("",0,0,J).attr({zIndex:1}),z,N,e=0,B=3,Q=0,h,P,p,G,I,H={},O,M,x=/^url\((.*?)\)$/.test(c),m=x,t,L,R,U;v&&k.addClass("highcharts-"+v);m=x;t=function(){return(O||0)%2/2};L=function(){var a=
w.element.style,g={};N=(void 0===h||void 0===P||I)&&u(w.textStr)&&w.getBBox();k.width=(h||N.width||0)+2*B+Q;k.height=(P||N.height||0)+2*B;M=B+q.fontMetrics(a&&a.fontSize,w).b;m&&(z||(k.box=z=q.symbols[c]||x?q.symbol(c):q.rect(),z.addClass(("button"===v?"":"highcharts-label-box")+(v?" highcharts-"+v+"-box":"")),z.add(k),a=t(),g.x=a,g.y=(A?-M:0)+a),g.width=Math.round(k.width),g.height=Math.round(k.height),z.attr(l(g,H)),H={})};R=function(){var a=Q+B,g;g=A?0:M;u(h)&&N&&("center"===I||"right"===I)&&(a+=
{center:.5,right:1}[I]*(h-N.width));if(a!==w.x||g!==w.y)w.attr("x",a),w.hasBoxWidthChanged&&(N=w.getBBox(!0),L()),void 0!==g&&w.attr("y",g);w.x=a;w.y=g};U=function(a,g){z?z.attr(a,g):H[a]=g};k.onAdd=function(){w.add(k);k.attr({text:g||0===g?g:"",x:b,y:d});z&&u(n)&&k.attr({anchorX:n,anchorY:f})};k.widthSetter=function(g){h=a.isNumber(g)?g:null};k.heightSetter=function(a){P=a};k["text-alignSetter"]=function(a){I=a};k.paddingSetter=function(a){u(a)&&a!==B&&(B=k.padding=a,R())};k.paddingLeftSetter=function(a){u(a)&&
a!==Q&&(Q=a,R())};k.alignSetter=function(a){a={left:0,center:.5,right:1}[a];a!==e&&(e=a,N&&k.attr({x:p}))};k.textSetter=function(a){void 0!==a&&w.textSetter(a);L();R()};k["stroke-widthSetter"]=function(a,g){a&&(m=!0);O=this["stroke-width"]=a;U(g,a)};k.strokeSetter=k.fillSetter=k.rSetter=function(a,g){"r"!==g&&("fill"===g&&a&&(m=!0),k[g]=a);U(g,a)};k.anchorXSetter=function(a,g){n=k.anchorX=a;U(g,Math.round(a)-t()-p)};k.anchorYSetter=function(a,g){f=k.anchorY=a;U(g,a-G)};k.xSetter=function(a){k.x=a;
e&&(a-=e*((h||N.width)+2*B),k["forceAnimate:x"]=!0);p=Math.round(a);k.attr("translateX",p)};k.ySetter=function(a){G=k.y=Math.round(a);k.attr("translateY",G)};var S=k.css;return l(k,{css:function(a){if(a){var g={};a=D(a);r(k.textProps,function(b){void 0!==a[b]&&(g[b]=a[b],delete a[b])});w.css(g);"width"in g&&L()}return S.call(k,a)},getBBox:function(){return{width:N.width+2*B,height:N.height+2*B,x:N.x-B,y:N.y-B}},shadow:function(a){a&&(L(),z&&z.shadow(a));return k},destroy:function(){y(k.element,"mouseenter");
y(k.element,"mouseleave");w&&(w=w.destroy());z&&(z=z.destroy());C.prototype.destroy.call(k);k=q=L=R=U=null}})}});a.Renderer=E})(K);(function(a){var C=a.attr,E=a.createElement,F=a.css,m=a.defined,h=a.each,e=a.extend,t=a.isFirefox,x=a.isMS,p=a.isWebKit,u=a.pick,f=a.pInt,c=a.SVGRenderer,k=a.win,r=a.wrap;e(a.SVGElement.prototype,{htmlCss:function(a){var d="SPAN"===this.element.tagName&&a&&"width"in a,b=u(d&&a.width,void 0);d&&(delete a.width,this.textWidth=b,this.htmlUpdateTransform());a&&"ellipsis"===
a.textOverflow&&(a.whiteSpace="nowrap",a.overflow="hidden");this.styles=e(this.styles,a);F(this.element,a);return this},htmlGetBBox:function(){var a=this.element;return{x:a.offsetLeft,y:a.offsetTop,width:a.offsetWidth,height:a.offsetHeight}},htmlUpdateTransform:function(){if(this.added){var a=this.renderer,d=this.element,b=this.translateX||0,c=this.translateY||0,k=this.x||0,r=this.y||0,w=this.textAlign||"left",e={left:0,center:.5,right:1}[w],B=this.styles,u=B&&B.whiteSpace;F(d,{marginLeft:b,marginTop:c});
this.shadows&&h(this.shadows,function(a){F(a,{marginLeft:b+1,marginTop:c+1})});this.inverted&&h(d.childNodes,function(b){a.invertChild(b,d)});if("SPAN"===d.tagName){var B=this.rotation,n=this.textWidth&&f(this.textWidth),D=[B,w,d.innerHTML,this.textWidth,this.textAlign].join(),A;(A=n!==this.oldTextWidth)&&!(A=n>this.oldTextWidth)&&((A=this.textPxLength)||(F(d,{width:"",whiteSpace:u||"nowrap"}),A=d.offsetWidth),A=A>n);A&&/[ \-]/.test(d.textContent||d.innerText)?(F(d,{width:n+"px",display:"block",whiteSpace:u||
"normal"}),this.oldTextWidth=n,this.hasBoxWidthChanged=!0):this.hasBoxWidthChanged=!1;D!==this.cTT&&(u=a.fontMetrics(d.style.fontSize).b,!m(B)||B===(this.oldRotation||0)&&w===this.oldAlign||this.setSpanRotation(B,e,u),this.getSpanCorrection(!m(B)&&this.textPxLength||d.offsetWidth,u,e,B,w));F(d,{left:k+(this.xCorr||0)+"px",top:r+(this.yCorr||0)+"px"});this.cTT=D;this.oldRotation=B;this.oldAlign=w}}else this.alignOnAdd=!0},setSpanRotation:function(a,d,b){var c={},l=this.renderer.getTransformKey();c[l]=
c.transform="rotate("+a+"deg)";c[l+(t?"Origin":"-origin")]=c.transformOrigin=100*d+"% "+b+"px";F(this.element,c)},getSpanCorrection:function(a,d,b){this.xCorr=-a*b;this.yCorr=-d}});e(c.prototype,{getTransformKey:function(){return x&&!/Edge/.test(k.navigator.userAgent)?"-ms-transform":p?"-webkit-transform":t?"MozTransform":k.opera?"-o-transform":""},html:function(a,d,b){var c=this.createElement("span"),l=c.element,f=c.renderer,k=f.isSVG,p=function(a,b){h(["opacity","visibility"],function(d){r(a,d+
"Setter",function(a,d,c,n){a.call(this,d,c,n);b[c]=d})});a.addedSetters=!0};c.textSetter=function(a){a!==l.innerHTML&&delete this.bBox;this.textStr=a;l.innerHTML=u(a,"");c.doTransform=!0};k&&p(c,c.element.style);c.xSetter=c.ySetter=c.alignSetter=c.rotationSetter=function(a,b){"align"===b&&(b="textAlign");c[b]=a;c.doTransform=!0};c.afterSetters=function(){this.doTransform&&(this.htmlUpdateTransform(),this.doTransform=!1)};c.attr({text:a,x:Math.round(d),y:Math.round(b)}).css({fontFamily:this.style.fontFamily,
fontSize:this.style.fontSize,position:"absolute"});l.style.whiteSpace="nowrap";c.css=c.htmlCss;k&&(c.add=function(a){var b,d=f.box.parentNode,k=[];if(this.parentGroup=a){if(b=a.div,!b){for(;a;)k.push(a),a=a.parentGroup;h(k.reverse(),function(a){function n(g,b){a[b]=g;"translateX"===b?l.left=g+"px":l.top=g+"px";a.doTransform=!0}var l,g=C(a.element,"class");g&&(g={className:g});b=a.div=a.div||E("div",g,{position:"absolute",left:(a.translateX||0)+"px",top:(a.translateY||0)+"px",display:a.display,opacity:a.opacity,
pointerEvents:a.styles&&a.styles.pointerEvents},b||d);l=b.style;e(a,{classSetter:function(a){return function(g){this.element.setAttribute("class",g);a.className=g}}(b),on:function(){k[0].div&&c.on.apply({element:k[0].div},arguments);return a},translateXSetter:n,translateYSetter:n});a.addedSetters||p(a,l)})}}else b=d;b.appendChild(l);c.added=!0;c.alignOnAdd&&c.htmlUpdateTransform();return c});return c}})})(K);(function(a){var C=a.defined,E=a.each,F=a.extend,m=a.merge,h=a.pick,e=a.timeUnits,t=a.win;
a.Time=function(a){this.update(a,!1)};a.Time.prototype={defaultOptions:{},update:function(a){var e=h(a&&a.useUTC,!0),u=this;this.options=a=m(!0,this.options||{},a);this.Date=a.Date||t.Date;this.timezoneOffset=(this.useUTC=e)&&a.timezoneOffset;this.getTimezoneOffset=this.timezoneOffsetFunction();(this.variableTimezone=!(e&&!a.getTimezoneOffset&&!a.timezone))||this.timezoneOffset?(this.get=function(a,c){var f=c.getTime(),r=f-u.getTimezoneOffset(c);c.setTime(r);a=c["getUTC"+a]();c.setTime(f);return a},
this.set=function(a,c,k){var f;if("Milliseconds"===a||"Seconds"===a||"Minutes"===a&&0===c.getTimezoneOffset()%60)c["set"+a](k);else f=u.getTimezoneOffset(c),f=c.getTime()-f,c.setTime(f),c["setUTC"+a](k),a=u.getTimezoneOffset(c),f=c.getTime()+a,c.setTime(f)}):e?(this.get=function(a,c){return c["getUTC"+a]()},this.set=function(a,c,k){return c["setUTC"+a](k)}):(this.get=function(a,c){return c["get"+a]()},this.set=function(a,c,k){return c["set"+a](k)})},makeTime:function(e,p,u,f,c,k){var r,l,d;this.useUTC?
(r=this.Date.UTC.apply(0,arguments),l=this.getTimezoneOffset(r),r+=l,d=this.getTimezoneOffset(r),l!==d?r+=d-l:l-36E5!==this.getTimezoneOffset(r-36E5)||a.isSafari||(r-=36E5)):r=(new this.Date(e,p,h(u,1),h(f,0),h(c,0),h(k,0))).getTime();return r},timezoneOffsetFunction:function(){var e=this,h=this.options,u=t.moment;if(!this.useUTC)return function(a){return 6E4*(new Date(a)).getTimezoneOffset()};if(h.timezone){if(u)return function(a){return 6E4*-u.tz(a,h.timezone).utcOffset()};a.error(25)}return this.useUTC&&
h.getTimezoneOffset?function(a){return 6E4*h.getTimezoneOffset(a)}:function(){return 6E4*(e.timezoneOffset||0)}},dateFormat:function(e,h,u){if(!a.defined(h)||isNaN(h))return a.defaultOptions.lang.invalidDate||"";e=a.pick(e,"%Y-%m-%d %H:%M:%S");var f=this,c=new this.Date(h),k=this.get("Hours",c),r=this.get("Day",c),l=this.get("Date",c),d=this.get("Month",c),b=this.get("FullYear",c),v=a.defaultOptions.lang,q=v.weekdays,I=v.shortWeekdays,w=a.pad,c=a.extend({a:I?I[r]:q[r].substr(0,3),A:q[r],d:w(l),e:w(l,
2," "),w:r,b:v.shortMonths[d],B:v.months[d],m:w(d+1),o:d+1,y:b.toString().substr(2,2),Y:b,H:w(k),k:k,I:w(k%12||12),l:k%12||12,M:w(f.get("Minutes",c)),p:12>k?"AM":"PM",P:12>k?"am":"pm",S:w(c.getSeconds()),L:w(Math.floor(h%1E3),3)},a.dateFormats);a.objectEach(c,function(a,b){for(;-1!==e.indexOf("%"+b);)e=e.replace("%"+b,"function"===typeof a?a.call(f,h):a)});return u?e.substr(0,1).toUpperCase()+e.substr(1):e},getTimeTicks:function(a,p,u,f){var c=this,k=[],r,l={},d;r=new c.Date(p);var b=a.unitRange,
v=a.count||1,q;f=h(f,1);if(C(p)){c.set("Milliseconds",r,b>=e.second?0:v*Math.floor(c.get("Milliseconds",r)/v));b>=e.second&&c.set("Seconds",r,b>=e.minute?0:v*Math.floor(c.get("Seconds",r)/v));b>=e.minute&&c.set("Minutes",r,b>=e.hour?0:v*Math.floor(c.get("Minutes",r)/v));b>=e.hour&&c.set("Hours",r,b>=e.day?0:v*Math.floor(c.get("Hours",r)/v));b>=e.day&&c.set("Date",r,b>=e.month?1:v*Math.floor(c.get("Date",r)/v));b>=e.month&&(c.set("Month",r,b>=e.year?0:v*Math.floor(c.get("Month",r)/v)),d=c.get("FullYear",
r));b>=e.year&&c.set("FullYear",r,d-d%v);b===e.week&&(d=c.get("Day",r),c.set("Date",r,c.get("Date",r)-d+f+(d<f?-7:0)));d=c.get("FullYear",r);f=c.get("Month",r);var I=c.get("Date",r),w=c.get("Hours",r);p=r.getTime();c.variableTimezone&&(q=u-p>4*e.month||c.getTimezoneOffset(p)!==c.getTimezoneOffset(u));p=r.getTime();for(r=1;p<u;)k.push(p),p=b===e.year?c.makeTime(d+r*v,0):b===e.month?c.makeTime(d,f+r*v):!q||b!==e.day&&b!==e.week?q&&b===e.hour&&1<v?c.makeTime(d,f,I,w+r*v):p+b*v:c.makeTime(d,f,I+r*v*(b===
e.day?1:7)),r++;k.push(p);b<=e.hour&&1E4>k.length&&E(k,function(a){0===a%18E5&&"000000000"===c.dateFormat("%H%M%S%L",a)&&(l[a]="day")})}k.info=F(a,{higherRanks:l,totalRange:b*v});return k}}})(K);(function(a){var C=a.color,E=a.merge;a.defaultOptions={colors:"#7cb5ec #434348 #90ed7d #f7a35c #8085e9 #f15c80 #e4d354 #2b908f #f45b5b #91e8e1".split(" "),symbols:["circle","diamond","square","triangle","triangle-down"],lang:{loading:"Loading...",months:"January February March April May June July August September October November December".split(" "),
shortMonths:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),weekdays:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),decimalPoint:".",numericSymbols:"kMGTPE".split(""),resetZoom:"Reset zoom",resetZoomTitle:"Reset zoom level 1:1",thousandsSep:" "},global:{},time:a.Time.prototype.defaultOptions,chart:{borderRadius:0,defaultSeriesType:"line",ignoreHiddenSeries:!0,spacing:[10,10,15,10],resetZoomButton:{theme:{zIndex:6},position:{align:"right",x:-10,y:10}},width:null,
height:null,borderColor:"#335cad",backgroundColor:"#ffffff",plotBorderColor:"#cccccc"},title:{text:"Chart title",align:"center",margin:15,widthAdjust:-44},subtitle:{text:"",align:"center",widthAdjust:-44},plotOptions:{},labels:{style:{position:"absolute",color:"#333333"}},legend:{enabled:!0,align:"center",alignColumns:!0,layout:"horizontal",labelFormatter:function(){return this.name},borderColor:"#999999",borderRadius:0,navigation:{activeColor:"#003399",inactiveColor:"#cccccc"},itemStyle:{color:"#333333",
fontSize:"12px",fontWeight:"bold",textOverflow:"ellipsis"},itemHoverStyle:{color:"#000000"},itemHiddenStyle:{color:"#cccccc"},shadow:!1,itemCheckboxStyle:{position:"absolute",width:"13px",height:"13px"},squareSymbol:!0,symbolPadding:5,verticalAlign:"bottom",x:0,y:0,title:{style:{fontWeight:"bold"}}},loading:{labelStyle:{fontWeight:"bold",position:"relative",top:"45%"},style:{position:"absolute",backgroundColor:"#ffffff",opacity:.5,textAlign:"center"}},tooltip:{enabled:!0,animation:a.svg,borderRadius:3,
dateTimeLabelFormats:{millisecond:"%A, %b %e, %H:%M:%S.%L",second:"%A, %b %e, %H:%M:%S",minute:"%A, %b %e, %H:%M",hour:"%A, %b %e, %H:%M",day:"%A, %b %e, %Y",week:"Week from %A, %b %e, %Y",month:"%B %Y",year:"%Y"},footerFormat:"",padding:8,snap:a.isTouchDevice?25:10,backgroundColor:C("#f7f7f7").setOpacity(.85).get(),borderWidth:1,headerFormat:'\x3cspan style\x3d"font-size: 10px"\x3e{point.key}\x3c/span\x3e\x3cbr/\x3e',pointFormat:'\x3cspan style\x3d"color:{point.color}"\x3e\u25cf\x3c/span\x3e {series.name}: \x3cb\x3e{point.y}\x3c/b\x3e\x3cbr/\x3e',
shadow:!0,style:{color:"#333333",cursor:"default",fontSize:"12px",pointerEvents:"none",whiteSpace:"nowrap"}},credits:{enabled:!0,href:"https://www.highcharts.com",position:{align:"right",x:-10,verticalAlign:"bottom",y:-5},style:{cursor:"pointer",color:"#999999",fontSize:"9px"},text:"Highcharts.com"}};a.setOptions=function(C){a.defaultOptions=E(!0,a.defaultOptions,C);a.time.update(E(a.defaultOptions.global,a.defaultOptions.time),!1);return a.defaultOptions};a.getOptions=function(){return a.defaultOptions};
a.defaultPlotOptions=a.defaultOptions.plotOptions;a.time=new a.Time(E(a.defaultOptions.global,a.defaultOptions.time));a.dateFormat=function(C,m,h){return a.time.dateFormat(C,m,h)}})(K);(function(a){var C=a.correctFloat,E=a.defined,F=a.destroyObjectProperties,m=a.fireEvent,h=a.isNumber,e=a.merge,t=a.pick,x=a.deg2rad;a.Tick=function(a,e,f,c){this.axis=a;this.pos=e;this.type=f||"";this.isNewLabel=this.isNew=!0;f||c||this.addLabel()};a.Tick.prototype={addLabel:function(){var a=this.axis,h=a.options,f=
a.chart,c=a.categories,k=a.names,r=this.pos,l=h.labels,d=a.tickPositions,b=r===d[0],v=r===d[d.length-1],k=c?t(c[r],k[r],r):r,c=this.label,d=d.info,q;a.isDatetimeAxis&&d&&(q=h.dateTimeLabelFormats[d.higherRanks[r]||d.unitName]);this.isFirst=b;this.isLast=v;h={axis:a,chart:f,isFirst:b,isLast:v,dateTimeLabelFormat:q,value:a.isLog?C(a.lin2log(k)):k,pos:r};h=a.labelFormatter.call(h,h);if(E(c))c&&c.textStr!==h&&(!c.textWidth||l.style&&l.style.width||c.styles.width||c.css({width:null}),c.attr({text:h}));
else{if(this.label=c=E(h)&&l.enabled?f.renderer.text(h,0,0,l.useHTML).css(e(l.style)).add(a.labelGroup):null)c.textPxLength=c.getBBox().width;this.rotation=0}},getLabelSize:function(){return this.label?this.label.getBBox()[this.axis.horiz?"height":"width"]:0},handleOverflow:function(a){var e=this.axis,f=e.options.labels,c=a.x,k=e.chart.chartWidth,r=e.chart.spacing,l=t(e.labelLeft,Math.min(e.pos,r[3])),r=t(e.labelRight,Math.max(e.isRadial?0:e.pos+e.len,k-r[1])),d=this.label,b=this.rotation,v={left:0,
center:.5,right:1}[e.labelAlign||d.attr("align")],q=d.getBBox().width,h=e.getSlotWidth(this),w=h,p=1,B,H={};if(b||"justify"!==t(f.overflow,"justify"))0>b&&c-v*q<l?B=Math.round(c/Math.cos(b*x)-l):0<b&&c+v*q>r&&(B=Math.round((k-c)/Math.cos(b*x)));else if(k=c+(1-v)*q,c-v*q<l?w=a.x+w*(1-v)-l:k>r&&(w=r-a.x+w*v,p=-1),w=Math.min(h,w),w<h&&"center"===e.labelAlign&&(a.x+=p*(h-w-v*(h-Math.min(q,w)))),q>w||e.autoRotation&&(d.styles||{}).width)B=w;B&&(H.width=B,(f.style||{}).textOverflow||(H.textOverflow="ellipsis"),
d.css(H))},getPosition:function(e,h,f,c){var k=this.axis,r=k.chart,l=c&&r.oldChartHeight||r.chartHeight;e={x:e?a.correctFloat(k.translate(h+f,null,null,c)+k.transB):k.left+k.offset+(k.opposite?(c&&r.oldChartWidth||r.chartWidth)-k.right-k.left:0),y:e?l-k.bottom+k.offset-(k.opposite?k.height:0):a.correctFloat(l-k.translate(h+f,null,null,c)-k.transB)};m(this,"afterGetPosition",{pos:e});return e},getLabelPosition:function(a,e,f,c,k,r,l,d){var b=this.axis,v=b.transA,q=b.reversed,h=b.staggerLines,w=b.tickRotCorr||
{x:0,y:0},u=k.y,B=c||b.reserveSpaceDefault?0:-b.labelOffset*("center"===b.labelAlign?.5:1),H={};E(u)||(u=0===b.side?f.rotation?-8:-f.getBBox().height:2===b.side?w.y+8:Math.cos(f.rotation*x)*(w.y-f.getBBox(!1,0).height/2));a=a+k.x+B+w.x-(r&&c?r*v*(q?-1:1):0);e=e+u-(r&&!c?r*v*(q?1:-1):0);h&&(f=l/(d||1)%h,b.opposite&&(f=h-f-1),e+=b.labelOffset/h*f);H.x=a;H.y=Math.round(e);m(this,"afterGetLabelPosition",{pos:H});return H},getMarkPath:function(a,e,f,c,k,r){return r.crispLine(["M",a,e,"L",a+(k?0:-f),e+
(k?f:0)],c)},renderGridLine:function(a,e,f){var c=this.axis,k=c.options,r=this.gridLine,l={},d=this.pos,b=this.type,v=c.tickmarkOffset,q=c.chart.renderer,h=b?b+"Grid":"grid",w=k[h+"LineWidth"],u=k[h+"LineColor"],k=k[h+"LineDashStyle"];r||(l.stroke=u,l["stroke-width"]=w,k&&(l.dashstyle=k),b||(l.zIndex=1),a&&(l.opacity=0),this.gridLine=r=q.path().attr(l).addClass("highcharts-"+(b?b+"-":"")+"grid-line").add(c.gridGroup));if(!a&&r&&(a=c.getPlotLinePath(d+v,r.strokeWidth()*f,a,!0)))r[this.isNew?"attr":
"animate"]({d:a,opacity:e})},renderMark:function(a,e,f){var c=this.axis,k=c.options,r=c.chart.renderer,l=this.type,d=l?l+"Tick":"tick",b=c.tickSize(d),v=this.mark,q=!v,h=a.x;a=a.y;var w=t(k[d+"Width"],!l&&c.isXAxis?1:0),k=k[d+"Color"];b&&(c.opposite&&(b[0]=-b[0]),q&&(this.mark=v=r.path().addClass("highcharts-"+(l?l+"-":"")+"tick").add(c.axisGroup),v.attr({stroke:k,"stroke-width":w})),v[q?"attr":"animate"]({d:this.getMarkPath(h,a,b[0],v.strokeWidth()*f,c.horiz,r),opacity:e}))},renderLabel:function(a,
e,f,c){var k=this.axis,r=k.horiz,l=k.options,d=this.label,b=l.labels,v=b.step,k=k.tickmarkOffset,q=!0,I=a.x;a=a.y;d&&h(I)&&(d.xy=a=this.getLabelPosition(I,a,d,r,b,k,c,v),this.isFirst&&!this.isLast&&!t(l.showFirstLabel,1)||this.isLast&&!this.isFirst&&!t(l.showLastLabel,1)?q=!1:!r||b.step||b.rotation||e||0===f||this.handleOverflow(a),v&&c%v&&(q=!1),q&&h(a.y)?(a.opacity=f,d[this.isNewLabel?"attr":"animate"](a),this.isNewLabel=!1):(d.attr("y",-9999),this.isNewLabel=!0))},render:function(e,h,f){var c=
this.axis,k=c.horiz,r=this.getPosition(k,this.pos,c.tickmarkOffset,h),l=r.x,d=r.y,c=k&&l===c.pos+c.len||!k&&d===c.pos?-1:1;f=t(f,1);this.isActive=!0;this.renderGridLine(h,f,c);this.renderMark(r,f,c);this.renderLabel(r,h,f,e);this.isNew=!1;a.fireEvent(this,"afterRender")},destroy:function(){F(this,this.axis)}}})(K);var V=function(a){var C=a.addEvent,E=a.animObject,F=a.arrayMax,m=a.arrayMin,h=a.color,e=a.correctFloat,t=a.defaultOptions,x=a.defined,p=a.deg2rad,u=a.destroyObjectProperties,f=a.each,c=
a.extend,k=a.fireEvent,r=a.format,l=a.getMagnitude,d=a.grep,b=a.inArray,v=a.isArray,q=a.isNumber,I=a.isString,w=a.merge,L=a.normalizeTickInterval,B=a.objectEach,H=a.pick,n=a.removeEvent,D=a.splat,A=a.syncTimeout,M=a.Tick,G=function(){this.init.apply(this,arguments)};a.extend(G.prototype,{defaultOptions:{dateTimeLabelFormats:{millisecond:"%H:%M:%S.%L",second:"%H:%M:%S",minute:"%H:%M",hour:"%H:%M",day:"%e. %b",week:"%e. %b",month:"%b '%y",year:"%Y"},endOnTick:!1,labels:{enabled:!0,x:0,style:{color:"#666666",
cursor:"default",fontSize:"11px"}},maxPadding:.01,minorTickLength:2,minorTickPosition:"outside",minPadding:.01,startOfWeek:1,startOnTick:!1,tickLength:10,tickPixelInterval:100,tickmarkPlacement:"between",tickPosition:"outside",title:{align:"middle",style:{color:"#666666"}},type:"linear",minorGridLineColor:"#f2f2f2",minorGridLineWidth:1,minorTickColor:"#999999",lineColor:"#ccd6eb",lineWidth:1,gridLineColor:"#e6e6e6",tickColor:"#ccd6eb"},defaultYAxisOptions:{endOnTick:!0,maxPadding:.05,minPadding:.05,
tickPixelInterval:72,showLastLabel:!0,labels:{x:-8},startOnTick:!0,title:{rotation:270,text:"Values"},stackLabels:{allowOverlap:!1,enabled:!1,formatter:function(){return a.numberFormat(this.total,-1)},style:{color:"#000000",fontSize:"11px",fontWeight:"bold",textOutline:"1px contrast"}},gridLineWidth:1,lineWidth:0},defaultLeftAxisOptions:{labels:{x:-15},title:{rotation:270}},defaultRightAxisOptions:{labels:{x:15},title:{rotation:90}},defaultBottomAxisOptions:{labels:{autoRotation:[-45],x:0},title:{rotation:0}},
defaultTopAxisOptions:{labels:{autoRotation:[-45],x:0},title:{rotation:0}},init:function(a,y){var g=y.isX,d=this;d.chart=a;d.horiz=a.inverted&&!d.isZAxis?!g:g;d.isXAxis=g;d.coll=d.coll||(g?"xAxis":"yAxis");k(this,"init",{userOptions:y});d.opposite=y.opposite;d.side=y.side||(d.horiz?d.opposite?0:2:d.opposite?1:3);d.setOptions(y);var c=this.options,n=c.type;d.labelFormatter=c.labels.formatter||d.defaultLabelFormatter;d.userOptions=y;d.minPixelPadding=0;d.reversed=c.reversed;d.visible=!1!==c.visible;
d.zoomEnabled=!1!==c.zoomEnabled;d.hasNames="category"===n||!0===c.categories;d.categories=c.categories||d.hasNames;d.names||(d.names=[],d.names.keys={});d.plotLinesAndBandsGroups={};d.isLog="logarithmic"===n;d.isDatetimeAxis="datetime"===n;d.positiveValuesOnly=d.isLog&&!d.allowNegativeLog;d.isLinked=x(c.linkedTo);d.ticks={};d.labelEdge=[];d.minorTicks={};d.plotLinesAndBands=[];d.alternateBands={};d.len=0;d.minRange=d.userMinRange=c.minRange||c.maxZoom;d.range=c.range;d.offset=c.offset||0;d.stacks=
{};d.oldStacks={};d.stacksTouched=0;d.max=null;d.min=null;d.crosshair=H(c.crosshair,D(a.options.tooltip.crosshairs)[g?0:1],!1);y=d.options.events;-1===b(d,a.axes)&&(g?a.axes.splice(a.xAxis.length,0,d):a.axes.push(d),a[d.coll].push(d));d.series=d.series||[];a.inverted&&!d.isZAxis&&g&&void 0===d.reversed&&(d.reversed=!0);B(y,function(a,g){C(d,g,a)});d.lin2log=c.linearToLogConverter||d.lin2log;d.isLog&&(d.val2lin=d.log2lin,d.lin2val=d.lin2log);k(this,"afterInit")},setOptions:function(a){this.options=
w(this.defaultOptions,"yAxis"===this.coll&&this.defaultYAxisOptions,[this.defaultTopAxisOptions,this.defaultRightAxisOptions,this.defaultBottomAxisOptions,this.defaultLeftAxisOptions][this.side],w(t[this.coll],a));k(this,"afterSetOptions",{userOptions:a})},defaultLabelFormatter:function(){var g=this.axis,b=this.value,d=g.chart.time,c=g.categories,n=this.dateTimeLabelFormat,l=t.lang,f=l.numericSymbols,l=l.numericSymbolMagnitude||1E3,k=f&&f.length,A,q=g.options.labels.format,g=g.isLog?Math.abs(b):g.tickInterval;
if(q)A=r(q,this,d);else if(c)A=b;else if(n)A=d.dateFormat(n,b);else if(k&&1E3<=g)for(;k--&&void 0===A;)d=Math.pow(l,k+1),g>=d&&0===10*b%d&&null!==f[k]&&0!==b&&(A=a.numberFormat(b/d,-1)+f[k]);void 0===A&&(A=1E4<=Math.abs(b)?a.numberFormat(b,-1):a.numberFormat(b,-1,void 0,""));return A},getSeriesExtremes:function(){var a=this,b=a.chart;k(this,"getSeriesExtremes",null,function(){a.hasVisibleSeries=!1;a.dataMin=a.dataMax=a.threshold=null;a.softThreshold=!a.isXAxis;a.buildStacks&&a.buildStacks();f(a.series,
function(g){if(g.visible||!b.options.chart.ignoreHiddenSeries){var y=g.options,c=y.threshold,n;a.hasVisibleSeries=!0;a.positiveValuesOnly&&0>=c&&(c=null);if(a.isXAxis)y=g.xData,y.length&&(g=m(y),n=F(y),q(g)||g instanceof Date||(y=d(y,q),g=m(y),n=F(y)),y.length&&(a.dataMin=Math.min(H(a.dataMin,y[0],g),g),a.dataMax=Math.max(H(a.dataMax,y[0],n),n)));else if(g.getExtremes(),n=g.dataMax,g=g.dataMin,x(g)&&x(n)&&(a.dataMin=Math.min(H(a.dataMin,g),g),a.dataMax=Math.max(H(a.dataMax,n),n)),x(c)&&(a.threshold=
c),!y.softThreshold||a.positiveValuesOnly)a.softThreshold=!1}})});k(this,"afterGetSeriesExtremes")},translate:function(a,b,d,c,n,l){var g=this.linkedParent||this,y=1,f=0,k=c?g.oldTransA:g.transA;c=c?g.oldMin:g.min;var J=g.minPixelPadding;n=(g.isOrdinal||g.isBroken||g.isLog&&n)&&g.lin2val;k||(k=g.transA);d&&(y*=-1,f=g.len);g.reversed&&(y*=-1,f-=y*(g.sector||g.len));b?(a=(a*y+f-J)/k+c,n&&(a=g.lin2val(a))):(n&&(a=g.val2lin(a)),a=q(c)?y*(a-c)*k+f+y*J+(q(l)?k*l:0):void 0);return a},toPixels:function(a,
b){return this.translate(a,!1,!this.horiz,null,!0)+(b?0:this.pos)},toValue:function(a,b){return this.translate(a-(b?0:this.pos),!0,!this.horiz,null,!0)},getPlotLinePath:function(a,b,d,c,n){var g=this.chart,y=this.left,l=this.top,f,k,J=d&&g.oldChartHeight||g.chartHeight,A=d&&g.oldChartWidth||g.chartWidth,v;f=this.transB;var e=function(a,g,b){if(a<g||a>b)c?a=Math.min(Math.max(g,a),b):v=!0;return a};n=H(n,this.translate(a,null,null,d));n=Math.min(Math.max(-1E5,n),1E5);a=d=Math.round(n+f);f=k=Math.round(J-
n-f);q(n)?this.horiz?(f=l,k=J-this.bottom,a=d=e(a,y,y+this.width)):(a=y,d=A-this.right,f=k=e(f,l,l+this.height)):(v=!0,c=!1);return v&&!c?null:g.renderer.crispLine(["M",a,f,"L",d,k],b||1)},getLinearTickPositions:function(a,b,d){var g,c=e(Math.floor(b/a)*a);d=e(Math.ceil(d/a)*a);var y=[],n;e(c+a)===c&&(n=20);if(this.single)return[b];for(b=c;b<=d;){y.push(b);b=e(b+a,n);if(b===g)break;g=b}return y},getMinorTickInterval:function(){var a=this.options;return!0===a.minorTicks?H(a.minorTickInterval,"auto"):
!1===a.minorTicks?null:a.minorTickInterval},getMinorTickPositions:function(){var a=this,b=a.options,d=a.tickPositions,c=a.minorTickInterval,n=[],l=a.pointRangePadding||0,k=a.min-l,l=a.max+l,A=l-k;if(A&&A/c<a.len/3)if(a.isLog)f(this.paddedTicks,function(g,b,d){b&&n.push.apply(n,a.getLogTickPositions(c,d[b-1],d[b],!0))});else if(a.isDatetimeAxis&&"auto"===this.getMinorTickInterval())n=n.concat(a.getTimeTicks(a.normalizeTimeTickInterval(c),k,l,b.startOfWeek));else for(b=k+(d[0]-k)%c;b<=l&&b!==n[0];b+=
c)n.push(b);0!==n.length&&a.trimTicks(n);return n},adjustForMinRange:function(){var a=this.options,b=this.min,d=this.max,c,n,l,k,A,q,v,e;this.isXAxis&&void 0===this.minRange&&!this.isLog&&(x(a.min)||x(a.max)?this.minRange=null:(f(this.series,function(a){q=a.xData;for(k=v=a.xIncrement?1:q.length-1;0<k;k--)if(A=q[k]-q[k-1],void 0===l||A<l)l=A}),this.minRange=Math.min(5*l,this.dataMax-this.dataMin)));d-b<this.minRange&&(n=this.dataMax-this.dataMin>=this.minRange,e=this.minRange,c=(e-d+b)/2,c=[b-c,H(a.min,
b-c)],n&&(c[2]=this.isLog?this.log2lin(this.dataMin):this.dataMin),b=F(c),d=[b+e,H(a.max,b+e)],n&&(d[2]=this.isLog?this.log2lin(this.dataMax):this.dataMax),d=m(d),d-b<e&&(c[0]=d-e,c[1]=H(a.min,d-e),b=F(c)));this.min=b;this.max=d},getClosest:function(){var a;this.categories?a=1:f(this.series,function(g){var b=g.closestPointRange,d=g.visible||!g.chart.options.chart.ignoreHiddenSeries;!g.noSharedTooltip&&x(b)&&d&&(a=x(a)?Math.min(a,b):b)});return a},nameToX:function(a){var g=v(this.categories),d=g?this.categories:
this.names,c=a.options.x,n;a.series.requireSorting=!1;x(c)||(c=!1===this.options.uniqueNames?a.series.autoIncrement():g?b(a.name,d):H(d.keys[a.name],-1));-1===c?g||(n=d.length):n=c;void 0!==n&&(this.names[n]=a.name,this.names.keys[a.name]=n);return n},updateNames:function(){var g=this,b=this.names;0<b.length&&(f(a.keys(b.keys),function(a){delete b.keys[a]}),b.length=0,this.minRange=this.userMinRange,f(this.series||[],function(a){a.xIncrement=null;if(!a.points||a.isDirtyData)a.processData(),a.generatePoints();
f(a.points,function(b,d){var c;b.options&&(c=g.nameToX(b),void 0!==c&&c!==b.x&&(b.x=c,a.xData[d]=c))})}))},setAxisTranslation:function(a){var b=this,g=b.max-b.min,d=b.axisPointRange||0,c,n=0,l=0,A=b.linkedParent,q=!!b.categories,v=b.transA,e=b.isXAxis;if(e||q||d)c=b.getClosest(),A?(n=A.minPointOffset,l=A.pointRangePadding):f(b.series,function(a){var g=q?1:e?H(a.options.pointRange,c,0):b.axisPointRange||0;a=a.options.pointPlacement;d=Math.max(d,g);b.single||(n=Math.max(n,I(a)?0:g/2),l=Math.max(l,"on"===
a?0:g))}),A=b.ordinalSlope&&c?b.ordinalSlope/c:1,b.minPointOffset=n*=A,b.pointRangePadding=l*=A,b.pointRange=Math.min(d,g),e&&(b.closestPointRange=c);a&&(b.oldTransA=v);b.translationSlope=b.transA=v=b.options.staticScale||b.len/(g+l||1);b.transB=b.horiz?b.left:b.bottom;b.minPixelPadding=v*n;k(this,"afterSetAxisTranslation")},minFromRange:function(){return this.max-this.range},setTickInterval:function(b){var g=this,d=g.chart,c=g.options,n=g.isLog,A=g.isDatetimeAxis,v=g.isXAxis,w=g.isLinked,r=c.maxPadding,
D=c.minPadding,h=c.tickInterval,B=c.tickPixelInterval,G=g.categories,I=q(g.threshold)?g.threshold:null,u=g.softThreshold,M,m,p,t;A||G||w||this.getTickAmount();p=H(g.userMin,c.min);t=H(g.userMax,c.max);w?(g.linkedParent=d[g.coll][c.linkedTo],d=g.linkedParent.getExtremes(),g.min=H(d.min,d.dataMin),g.max=H(d.max,d.dataMax),c.type!==g.linkedParent.options.type&&a.error(11,1)):(!u&&x(I)&&(g.dataMin>=I?(M=I,D=0):g.dataMax<=I&&(m=I,r=0)),g.min=H(p,M,g.dataMin),g.max=H(t,m,g.dataMax));n&&(g.positiveValuesOnly&&
!b&&0>=Math.min(g.min,H(g.dataMin,g.min))&&a.error(10,1),g.min=e(g.log2lin(g.min),15),g.max=e(g.log2lin(g.max),15));g.range&&x(g.max)&&(g.userMin=g.min=p=Math.max(g.dataMin,g.minFromRange()),g.userMax=t=g.max,g.range=null);k(g,"foundExtremes");g.beforePadding&&g.beforePadding();g.adjustForMinRange();!(G||g.axisPointRange||g.usePercentage||w)&&x(g.min)&&x(g.max)&&(d=g.max-g.min)&&(!x(p)&&D&&(g.min-=d*D),!x(t)&&r&&(g.max+=d*r));q(c.softMin)&&!q(g.userMin)&&(g.min=Math.min(g.min,c.softMin));q(c.softMax)&&
!q(g.userMax)&&(g.max=Math.max(g.max,c.softMax));q(c.floor)&&(g.min=Math.max(g.min,c.floor));q(c.ceiling)&&(g.max=Math.min(g.max,c.ceiling));u&&x(g.dataMin)&&(I=I||0,!x(p)&&g.min<I&&g.dataMin>=I?g.min=I:!x(t)&&g.max>I&&g.dataMax<=I&&(g.max=I));g.tickInterval=g.min===g.max||void 0===g.min||void 0===g.max?1:w&&!h&&B===g.linkedParent.options.tickPixelInterval?h=g.linkedParent.tickInterval:H(h,this.tickAmount?(g.max-g.min)/Math.max(this.tickAmount-1,1):void 0,G?1:(g.max-g.min)*B/Math.max(g.len,B));v&&
!b&&f(g.series,function(a){a.processData(g.min!==g.oldMin||g.max!==g.oldMax)});g.setAxisTranslation(!0);g.beforeSetTickPositions&&g.beforeSetTickPositions();g.postProcessTickInterval&&(g.tickInterval=g.postProcessTickInterval(g.tickInterval));g.pointRange&&!h&&(g.tickInterval=Math.max(g.pointRange,g.tickInterval));b=H(c.minTickInterval,g.isDatetimeAxis&&g.closestPointRange);!h&&g.tickInterval<b&&(g.tickInterval=b);A||n||h||(g.tickInterval=L(g.tickInterval,null,l(g.tickInterval),H(c.allowDecimals,
!(.5<g.tickInterval&&5>g.tickInterval&&1E3<g.max&&9999>g.max)),!!this.tickAmount));this.tickAmount||(g.tickInterval=g.unsquish());this.setTickPositions()},setTickPositions:function(){var g=this.options,b,d=g.tickPositions;b=this.getMinorTickInterval();var c=g.tickPositioner,n=g.startOnTick,l=g.endOnTick;this.tickmarkOffset=this.categories&&"between"===g.tickmarkPlacement&&1===this.tickInterval?.5:0;this.minorTickInterval="auto"===b&&this.tickInterval?this.tickInterval/5:b;this.single=this.min===this.max&&
x(this.min)&&!this.tickAmount&&(parseInt(this.min,10)===this.min||!1!==g.allowDecimals);this.tickPositions=b=d&&d.slice();!b&&(!this.ordinalPositions&&(this.max-this.min)/this.tickInterval>Math.max(2*this.len,200)?(b=[this.min,this.max],a.error(19)):b=this.isDatetimeAxis?this.getTimeTicks(this.normalizeTimeTickInterval(this.tickInterval,g.units),this.min,this.max,g.startOfWeek,this.ordinalPositions,this.closestPointRange,!0):this.isLog?this.getLogTickPositions(this.tickInterval,this.min,this.max):
this.getLinearTickPositions(this.tickInterval,this.min,this.max),b.length>this.len&&(b=[b[0],b.pop()],b[0]===b[1]&&(b.length=1)),this.tickPositions=b,c&&(c=c.apply(this,[this.min,this.max])))&&(this.tickPositions=b=c);this.paddedTicks=b.slice(0);this.trimTicks(b,n,l);this.isLinked||(this.single&&2>b.length&&(this.min-=.5,this.max+=.5),d||c||this.adjustTickAmount());k(this,"afterSetTickPositions")},trimTicks:function(a,b,d){var g=a[0],c=a[a.length-1],n=this.minPointOffset||0;if(!this.isLinked){if(b&&
-Infinity!==g)this.min=g;else for(;this.min-n>a[0];)a.shift();if(d)this.max=c;else for(;this.max+n<a[a.length-1];)a.pop();0===a.length&&x(g)&&!this.options.tickPositions&&a.push((c+g)/2)}},alignToOthers:function(){var a={},b,d=this.options;!1===this.chart.options.chart.alignTicks||!1===d.alignTicks||!1===d.startOnTick||!1===d.endOnTick||this.isLog||f(this.chart[this.coll],function(g){var d=g.options,d=[g.horiz?d.left:d.top,d.width,d.height,d.pane].join();g.series.length&&(a[d]?b=!0:a[d]=1)});return b},
getTickAmount:function(){var a=this.options,b=a.tickAmount,d=a.tickPixelInterval;!x(a.tickInterval)&&this.len<d&&!this.isRadial&&!this.isLog&&a.startOnTick&&a.endOnTick&&(b=2);!b&&this.alignToOthers()&&(b=Math.ceil(this.len/d)+1);4>b&&(this.finalTickAmt=b,b=5);this.tickAmount=b},adjustTickAmount:function(){var a=this.tickInterval,b=this.tickPositions,d=this.tickAmount,c=this.finalTickAmt,n=b&&b.length,l=H(this.threshold,this.softThreshold?0:null);if(this.hasData()){if(n<d){for(;b.length<d;)b.length%
2||this.min===l?b.push(e(b[b.length-1]+a)):b.unshift(e(b[0]-a));this.transA*=(n-1)/(d-1);this.min=b[0];this.max=b[b.length-1]}else n>d&&(this.tickInterval*=2,this.setTickPositions());if(x(c)){for(a=d=b.length;a--;)(3===c&&1===a%2||2>=c&&0<a&&a<d-1)&&b.splice(a,1);this.finalTickAmt=void 0}}},setScale:function(){var a,b;this.oldMin=this.min;this.oldMax=this.max;this.oldAxisLength=this.len;this.setAxisSize();b=this.len!==this.oldAxisLength;f(this.series,function(b){if(b.isDirtyData||b.isDirty||b.xAxis.isDirty)a=
!0});b||a||this.isLinked||this.forceRedraw||this.userMin!==this.oldUserMin||this.userMax!==this.oldUserMax||this.alignToOthers()?(this.resetStacks&&this.resetStacks(),this.forceRedraw=!1,this.getSeriesExtremes(),this.setTickInterval(),this.oldUserMin=this.userMin,this.oldUserMax=this.userMax,this.isDirty||(this.isDirty=b||this.min!==this.oldMin||this.max!==this.oldMax)):this.cleanStacks&&this.cleanStacks();k(this,"afterSetScale")},setExtremes:function(a,b,d,n,l){var g=this,A=g.chart;d=H(d,!0);f(g.series,
function(a){delete a.kdTree});l=c(l,{min:a,max:b});k(g,"setExtremes",l,function(){g.userMin=a;g.userMax=b;g.eventArgs=l;d&&A.redraw(n)})},zoom:function(a,b){var g=this.dataMin,d=this.dataMax,c=this.options,n=Math.min(g,H(c.min,g)),c=Math.max(d,H(c.max,d));if(a!==this.min||b!==this.max)this.allowZoomOutside||(x(g)&&(a<n&&(a=n),a>c&&(a=c)),x(d)&&(b<n&&(b=n),b>c&&(b=c))),this.displayBtn=void 0!==a||void 0!==b,this.setExtremes(a,b,!1,void 0,{trigger:"zoom"});return!0},setAxisSize:function(){var b=this.chart,
d=this.options,c=d.offsets||[0,0,0,0],n=this.horiz,l=this.width=Math.round(a.relativeLength(H(d.width,b.plotWidth-c[3]+c[1]),b.plotWidth)),f=this.height=Math.round(a.relativeLength(H(d.height,b.plotHeight-c[0]+c[2]),b.plotHeight)),k=this.top=Math.round(a.relativeLength(H(d.top,b.plotTop+c[0]),b.plotHeight,b.plotTop)),d=this.left=Math.round(a.relativeLength(H(d.left,b.plotLeft+c[3]),b.plotWidth,b.plotLeft));this.bottom=b.chartHeight-f-k;this.right=b.chartWidth-l-d;this.len=Math.max(n?l:f,0);this.pos=
n?d:k},getExtremes:function(){var a=this.isLog;return{min:a?e(this.lin2log(this.min)):this.min,max:a?e(this.lin2log(this.max)):this.max,dataMin:this.dataMin,dataMax:this.dataMax,userMin:this.userMin,userMax:this.userMax}},getThreshold:function(a){var b=this.isLog,g=b?this.lin2log(this.min):this.min,b=b?this.lin2log(this.max):this.max;null===a||-Infinity===a?a=g:Infinity===a?a=b:g>a?a=g:b<a&&(a=b);return this.translate(a,0,1,0,1)},autoLabelAlign:function(a){a=(H(a,0)-90*this.side+720)%360;return 15<
a&&165>a?"right":195<a&&345>a?"left":"center"},tickSize:function(a){var b=this.options,g=b[a+"Length"],d=H(b[a+"Width"],"tick"===a&&this.isXAxis?1:0);if(d&&g)return"inside"===b[a+"Position"]&&(g=-g),[g,d]},labelMetrics:function(){var a=this.tickPositions&&this.tickPositions[0]||0;return this.chart.renderer.fontMetrics(this.options.labels.style&&this.options.labels.style.fontSize,this.ticks[a]&&this.ticks[a].label)},unsquish:function(){var a=this.options.labels,b=this.horiz,d=this.tickInterval,c=d,
n=this.len/(((this.categories?1:0)+this.max-this.min)/d),l,k=a.rotation,A=this.labelMetrics(),q,v=Number.MAX_VALUE,w,r=function(a){a/=n||1;a=1<a?Math.ceil(a):1;return e(a*d)};b?(w=!a.staggerLines&&!a.step&&(x(k)?[k]:n<H(a.autoRotationLimit,80)&&a.autoRotation))&&f(w,function(a){var b;if(a===k||a&&-90<=a&&90>=a)q=r(Math.abs(A.h/Math.sin(p*a))),b=q+Math.abs(a/360),b<v&&(v=b,l=a,c=q)}):a.step||(c=r(A.h));this.autoRotation=w;this.labelRotation=H(l,k);return c},getSlotWidth:function(){var a=this.chart,
b=this.horiz,d=this.options.labels,c=Math.max(this.tickPositions.length-(this.categories?0:1),1),n=a.margin[3];return b&&2>(d.step||0)&&!d.rotation&&(this.staggerLines||1)*this.len/c||!b&&(d.style&&parseInt(d.style.width,10)||n&&n-a.spacing[3]||.33*a.chartWidth)},renderUnsquish:function(){var a=this.chart,b=a.renderer,d=this.tickPositions,c=this.ticks,n=this.options.labels,l=n&&n.style||{},k=this.horiz,A=this.getSlotWidth(),q=Math.max(1,Math.round(A-2*(n.padding||5))),v={},e=this.labelMetrics(),w=
n.style&&n.style.textOverflow,r,D,h=0,B;I(n.rotation)||(v.rotation=n.rotation||0);f(d,function(a){(a=c[a])&&a.label&&a.label.textPxLength>h&&(h=a.label.textPxLength)});this.maxLabelLength=h;if(this.autoRotation)h>q&&h>e.h?v.rotation=this.labelRotation:this.labelRotation=0;else if(A&&(r=q,!w))for(D="clip",q=d.length;!k&&q--;)if(B=d[q],B=c[B].label)B.styles&&"ellipsis"===B.styles.textOverflow?B.css({textOverflow:"clip"}):B.textPxLength>A&&B.css({width:A+"px"}),B.getBBox().height>this.len/d.length-(e.h-
e.f)&&(B.specificTextOverflow="ellipsis");v.rotation&&(r=h>.5*a.chartHeight?.33*a.chartHeight:h,w||(D="ellipsis"));if(this.labelAlign=n.align||this.autoLabelAlign(this.labelRotation))v.align=this.labelAlign;f(d,function(a){var b=(a=c[a])&&a.label,g=l.width,d={};b&&(b.attr(v),r&&!g&&"nowrap"!==l.whiteSpace&&(r<b.textPxLength||"SPAN"===b.element.tagName)?(d.width=r,w||(d.textOverflow=b.specificTextOverflow||D),b.css(d)):b.styles&&b.styles.width&&!d.width&&!g&&b.css({width:null}),delete b.specificTextOverflow,
a.rotation=v.rotation)});this.tickRotCorr=b.rotCorr(e.b,this.labelRotation||0,0!==this.side)},hasData:function(){return this.hasVisibleSeries||x(this.min)&&x(this.max)&&this.tickPositions&&0<this.tickPositions.length},addTitle:function(a){var b=this.chart.renderer,g=this.horiz,d=this.opposite,c=this.options.title,n;this.axisTitle||((n=c.textAlign)||(n=(g?{low:"left",middle:"center",high:"right"}:{low:d?"right":"left",middle:"center",high:d?"left":"right"})[c.align]),this.axisTitle=b.text(c.text,0,
0,c.useHTML).attr({zIndex:7,rotation:c.rotation||0,align:n}).addClass("highcharts-axis-title").css(w(c.style)).add(this.axisGroup),this.axisTitle.isNew=!0);c.style.width||this.isRadial||this.axisTitle.css({width:this.len});this.axisTitle[a?"show":"hide"](!0)},generateTick:function(a){var b=this.ticks;b[a]?b[a].addLabel():b[a]=new M(this,a)},getOffset:function(){var a=this,b=a.chart,d=b.renderer,c=a.options,n=a.tickPositions,l=a.ticks,A=a.horiz,q=a.side,v=b.inverted&&!a.isZAxis?[1,0,3,2][q]:q,e,w,
r=0,h,D=0,G=c.title,I=c.labels,u=0,M=b.axisOffset,b=b.clipOffset,p=[-1,1,1,-1][q],m=c.className,t=a.axisParent,L=this.tickSize("tick");e=a.hasData();a.showAxis=w=e||H(c.showEmpty,!0);a.staggerLines=a.horiz&&I.staggerLines;a.axisGroup||(a.gridGroup=d.g("grid").attr({zIndex:c.gridZIndex||1}).addClass("highcharts-"+this.coll.toLowerCase()+"-grid "+(m||"")).add(t),a.axisGroup=d.g("axis").attr({zIndex:c.zIndex||2}).addClass("highcharts-"+this.coll.toLowerCase()+" "+(m||"")).add(t),a.labelGroup=d.g("axis-labels").attr({zIndex:I.zIndex||
7}).addClass("highcharts-"+a.coll.toLowerCase()+"-labels "+(m||"")).add(t));e||a.isLinked?(f(n,function(b,d){a.generateTick(b,d)}),a.renderUnsquish(),a.reserveSpaceDefault=0===q||2===q||{1:"left",3:"right"}[q]===a.labelAlign,H(I.reserveSpace,"center"===a.labelAlign?!0:null,a.reserveSpaceDefault)&&f(n,function(a){u=Math.max(l[a].getLabelSize(),u)}),a.staggerLines&&(u*=a.staggerLines),a.labelOffset=u*(a.opposite?-1:1)):B(l,function(a,b){a.destroy();delete l[b]});G&&G.text&&!1!==G.enabled&&(a.addTitle(w),
w&&!1!==G.reserveSpace&&(a.titleOffset=r=a.axisTitle.getBBox()[A?"height":"width"],h=G.offset,D=x(h)?0:H(G.margin,A?5:10)));a.renderLine();a.offset=p*H(c.offset,M[q]);a.tickRotCorr=a.tickRotCorr||{x:0,y:0};d=0===q?-a.labelMetrics().h:2===q?a.tickRotCorr.y:0;D=Math.abs(u)+D;u&&(D=D-d+p*(A?H(I.y,a.tickRotCorr.y+8*p):I.x));a.axisTitleMargin=H(h,D);M[q]=Math.max(M[q],a.axisTitleMargin+r+p*a.offset,D,e&&n.length&&L?L[0]+p*a.offset:0);c=c.offset?0:2*Math.floor(a.axisLine.strokeWidth()/2);b[v]=Math.max(b[v],
c);k(this,"afterGetOffset")},getLinePath:function(a){var b=this.chart,d=this.opposite,g=this.offset,c=this.horiz,n=this.left+(d?this.width:0)+g,g=b.chartHeight-this.bottom-(d?this.height:0)+g;d&&(a*=-1);return b.renderer.crispLine(["M",c?this.left:n,c?g:this.top,"L",c?b.chartWidth-this.right:n,c?g:b.chartHeight-this.bottom],a)},renderLine:function(){this.axisLine||(this.axisLine=this.chart.renderer.path().addClass("highcharts-axis-line").add(this.axisGroup),this.axisLine.attr({stroke:this.options.lineColor,
"stroke-width":this.options.lineWidth,zIndex:7}))},getTitlePosition:function(){var a=this.horiz,b=this.left,d=this.top,c=this.len,n=this.options.title,l=a?b:d,f=this.opposite,k=this.offset,A=n.x||0,q=n.y||0,v=this.axisTitle,e=this.chart.renderer.fontMetrics(n.style&&n.style.fontSize,v),v=Math.max(v.getBBox(null,0).height-e.h-1,0),c={low:l+(a?0:c),middle:l+c/2,high:l+(a?c:0)}[n.align],b=(a?d+this.height:b)+(a?1:-1)*(f?-1:1)*this.axisTitleMargin+[-v,v,e.f,-v][this.side];return{x:a?c+A:b+(f?this.width:
0)+k+A,y:a?b+q-(f?this.height:0)+k:c+q}},renderMinorTick:function(a){var b=this.chart.hasRendered&&q(this.oldMin),d=this.minorTicks;d[a]||(d[a]=new M(this,a,"minor"));b&&d[a].isNew&&d[a].render(null,!0);d[a].render(null,!1,1)},renderTick:function(a,b){var d=this.isLinked,g=this.ticks,c=this.chart.hasRendered&&q(this.oldMin);if(!d||a>=this.min&&a<=this.max)g[a]||(g[a]=new M(this,a)),c&&g[a].isNew&&g[a].render(b,!0,.1),g[a].render(b)},render:function(){var b=this,d=b.chart,c=b.options,n=b.isLog,l=b.isLinked,
v=b.tickPositions,e=b.axisTitle,w=b.ticks,r=b.minorTicks,D=b.alternateBands,h=c.stackLabels,G=c.alternateGridColor,I=b.tickmarkOffset,u=b.axisLine,H=b.showAxis,p=E(d.renderer.globalAnimation),m,t;b.labelEdge.length=0;b.overlap=!1;f([w,r,D],function(a){B(a,function(a){a.isActive=!1})});if(b.hasData()||l)b.minorTickInterval&&!b.categories&&f(b.getMinorTickPositions(),function(a){b.renderMinorTick(a)}),v.length&&(f(v,function(a,d){b.renderTick(a,d)}),I&&(0===b.min||b.single)&&(w[-1]||(w[-1]=new M(b,
-1,null,!0)),w[-1].render(-1))),G&&f(v,function(c,g){t=void 0!==v[g+1]?v[g+1]+I:b.max-I;0===g%2&&c<b.max&&t<=b.max+(d.polar?-I:I)&&(D[c]||(D[c]=new a.PlotLineOrBand(b)),m=c+I,D[c].options={from:n?b.lin2log(m):m,to:n?b.lin2log(t):t,color:G},D[c].render(),D[c].isActive=!0)}),b._addedPlotLB||(f((c.plotLines||[]).concat(c.plotBands||[]),function(a){b.addPlotBandOrLine(a)}),b._addedPlotLB=!0);f([w,r,D],function(a){var b,c=[],g=p.duration;B(a,function(a,b){a.isActive||(a.render(b,!1,0),a.isActive=!1,c.push(b))});
A(function(){for(b=c.length;b--;)a[c[b]]&&!a[c[b]].isActive&&(a[c[b]].destroy(),delete a[c[b]])},a!==D&&d.hasRendered&&g?g:0)});u&&(u[u.isPlaced?"animate":"attr"]({d:this.getLinePath(u.strokeWidth())}),u.isPlaced=!0,u[H?"show":"hide"](!0));e&&H&&(c=b.getTitlePosition(),q(c.y)?(e[e.isNew?"attr":"animate"](c),e.isNew=!1):(e.attr("y",-9999),e.isNew=!0));h&&h.enabled&&b.renderStackTotals();b.isDirty=!1;k(this,"afterRender")},redraw:function(){this.visible&&(this.render(),f(this.plotLinesAndBands,function(a){a.render()}));
f(this.series,function(a){a.isDirty=!0})},keepProps:"extKey hcEvents names series userMax userMin".split(" "),destroy:function(a){var d=this,c=d.stacks,g=d.plotLinesAndBands,l;k(this,"destroy",{keepEvents:a});a||n(d);B(c,function(a,b){u(a);c[b]=null});f([d.ticks,d.minorTicks,d.alternateBands],function(a){u(a)});if(g)for(a=g.length;a--;)g[a].destroy();f("stackTotalGroup axisLine axisTitle axisGroup gridGroup labelGroup cross scrollbar".split(" "),function(a){d[a]&&(d[a]=d[a].destroy())});for(l in d.plotLinesAndBandsGroups)d.plotLinesAndBandsGroups[l]=
d.plotLinesAndBandsGroups[l].destroy();B(d,function(a,c){-1===b(c,d.keepProps)&&delete d[c]})},drawCrosshair:function(a,b){var d,c=this.crosshair,g=H(c.snap,!0),n,l=this.cross;k(this,"drawCrosshair",{e:a,point:b});a||(a=this.cross&&this.cross.e);if(this.crosshair&&!1!==(x(b)||!g)){g?x(b)&&(n=H(b.crosshairPos,this.isXAxis?b.plotX:this.len-b.plotY)):n=a&&(this.horiz?a.chartX-this.pos:this.len-a.chartY+this.pos);x(n)&&(d=this.getPlotLinePath(b&&(this.isXAxis?b.x:H(b.stackY,b.y)),null,null,null,n)||null);
if(!x(d)){this.hideCrosshair();return}g=this.categories&&!this.isRadial;l||(this.cross=l=this.chart.renderer.path().addClass("highcharts-crosshair highcharts-crosshair-"+(g?"category ":"thin ")+c.className).attr({zIndex:H(c.zIndex,2)}).add(),l.attr({stroke:c.color||(g?h("#ccd6eb").setOpacity(.25).get():"#cccccc"),"stroke-width":H(c.width,1)}).css({"pointer-events":"none"}),c.dashStyle&&l.attr({dashstyle:c.dashStyle}));l.show().attr({d:d});g&&!c.width&&l.attr({"stroke-width":this.transA});this.cross.e=
a}else this.hideCrosshair();k(this,"afterDrawCrosshair",{e:a,point:b})},hideCrosshair:function(){this.cross&&this.cross.hide()}});return a.Axis=G}(K);(function(a){var C=a.Axis,E=a.getMagnitude,F=a.normalizeTickInterval,m=a.timeUnits;C.prototype.getTimeTicks=function(){return this.chart.time.getTimeTicks.apply(this.chart.time,arguments)};C.prototype.normalizeTimeTickInterval=function(a,e){var h=e||[["millisecond",[1,2,5,10,20,25,50,100,200,500]],["second",[1,2,5,10,15,30]],["minute",[1,2,5,10,15,30]],
["hour",[1,2,3,4,6,8,12]],["day",[1,2]],["week",[1,2]],["month",[1,2,3,4,6]],["year",null]];e=h[h.length-1];var x=m[e[0]],p=e[1],u;for(u=0;u<h.length&&!(e=h[u],x=m[e[0]],p=e[1],h[u+1]&&a<=(x*p[p.length-1]+m[h[u+1][0]])/2);u++);x===m.year&&a<5*x&&(p=[1,2,5]);a=F(a/x,p,"year"===e[0]?Math.max(E(a/x),1):1);return{unitRange:x,count:a,unitName:e[0]}}})(K);(function(a){var C=a.Axis,E=a.getMagnitude,F=a.map,m=a.normalizeTickInterval,h=a.pick;C.prototype.getLogTickPositions=function(a,t,x,p){var e=this.options,
f=this.len,c=[];p||(this._minorAutoInterval=null);if(.5<=a)a=Math.round(a),c=this.getLinearTickPositions(a,t,x);else if(.08<=a)for(var f=Math.floor(t),k,r,l,d,b,e=.3<a?[1,2,4]:.15<a?[1,2,4,6,8]:[1,2,3,4,5,6,7,8,9];f<x+1&&!b;f++)for(r=e.length,k=0;k<r&&!b;k++)l=this.log2lin(this.lin2log(f)*e[k]),l>t&&(!p||d<=x)&&void 0!==d&&c.push(d),d>x&&(b=!0),d=l;else t=this.lin2log(t),x=this.lin2log(x),a=p?this.getMinorTickInterval():e.tickInterval,a=h("auto"===a?null:a,this._minorAutoInterval,e.tickPixelInterval/
(p?5:1)*(x-t)/((p?f/this.tickPositions.length:f)||1)),a=m(a,null,E(a)),c=F(this.getLinearTickPositions(a,t,x),this.log2lin),p||(this._minorAutoInterval=a/5);p||(this.tickInterval=a);return c};C.prototype.log2lin=function(a){return Math.log(a)/Math.LN10};C.prototype.lin2log=function(a){return Math.pow(10,a)}})(K);(function(a,C){var E=a.arrayMax,F=a.arrayMin,m=a.defined,h=a.destroyObjectProperties,e=a.each,t=a.erase,x=a.merge,p=a.pick;a.PlotLineOrBand=function(a,f){this.axis=a;f&&(this.options=f,this.id=
f.id)};a.PlotLineOrBand.prototype={render:function(){var e=this,f=e.axis,c=f.horiz,k=e.options,r=k.label,l=e.label,d=k.to,b=k.from,v=k.value,q=m(b)&&m(d),h=m(v),w=e.svgElem,t=!w,B=[],H=k.color,n=p(k.zIndex,0),D=k.events,B={"class":"highcharts-plot-"+(q?"band ":"line ")+(k.className||"")},A={},M=f.chart.renderer,G=q?"bands":"lines";f.isLog&&(b=f.log2lin(b),d=f.log2lin(d),v=f.log2lin(v));h?(B.stroke=H,B["stroke-width"]=k.width,k.dashStyle&&(B.dashstyle=k.dashStyle)):q&&(H&&(B.fill=H),k.borderWidth&&
(B.stroke=k.borderColor,B["stroke-width"]=k.borderWidth));A.zIndex=n;G+="-"+n;(H=f.plotLinesAndBandsGroups[G])||(f.plotLinesAndBandsGroups[G]=H=M.g("plot-"+G).attr(A).add());t&&(e.svgElem=w=M.path().attr(B).add(H));if(h)B=f.getPlotLinePath(v,w.strokeWidth());else if(q)B=f.getPlotBandPath(b,d,k);else return;t&&B&&B.length?(w.attr({d:B}),D&&a.objectEach(D,function(a,b){w.on(b,function(a){D[b].apply(e,[a])})})):w&&(B?(w.show(),w.animate({d:B})):(w.hide(),l&&(e.label=l=l.destroy())));r&&m(r.text)&&B&&
B.length&&0<f.width&&0<f.height&&!B.isFlat?(r=x({align:c&&q&&"center",x:c?!q&&4:10,verticalAlign:!c&&q&&"middle",y:c?q?16:10:q?6:-4,rotation:c&&!q&&90},r),this.renderLabel(r,B,q,n)):l&&l.hide();return e},renderLabel:function(a,f,c,k){var e=this.label,l=this.axis.chart.renderer;e||(e={align:a.textAlign||a.align,rotation:a.rotation,"class":"highcharts-plot-"+(c?"band":"line")+"-label "+(a.className||"")},e.zIndex=k,this.label=e=l.text(a.text,0,0,a.useHTML).attr(e).add(),e.css(a.style));k=f.xBounds||
[f[1],f[4],c?f[6]:f[1]];f=f.yBounds||[f[2],f[5],c?f[7]:f[2]];c=F(k);l=F(f);e.align(a,!1,{x:c,y:l,width:E(k)-c,height:E(f)-l});e.show()},destroy:function(){t(this.axis.plotLinesAndBands,this);delete this.axis;h(this)}};a.extend(C.prototype,{getPlotBandPath:function(a,f){var c=this.getPlotLinePath(f,null,null,!0),k=this.getPlotLinePath(a,null,null,!0),e=[],l=this.horiz,d=1,b;a=a<this.min&&f<this.min||a>this.max&&f>this.max;if(k&&c)for(a&&(b=k.toString()===c.toString(),d=0),a=0;a<k.length;a+=6)l&&c[a+
1]===k[a+1]?(c[a+1]+=d,c[a+4]+=d):l||c[a+2]!==k[a+2]||(c[a+2]+=d,c[a+5]+=d),e.push("M",k[a+1],k[a+2],"L",k[a+4],k[a+5],c[a+4],c[a+5],c[a+1],c[a+2],"z"),e.isFlat=b;return e},addPlotBand:function(a){return this.addPlotBandOrLine(a,"plotBands")},addPlotLine:function(a){return this.addPlotBandOrLine(a,"plotLines")},addPlotBandOrLine:function(e,f){var c=(new a.PlotLineOrBand(this,e)).render(),k=this.userOptions;c&&(f&&(k[f]=k[f]||[],k[f].push(e)),this.plotLinesAndBands.push(c));return c},removePlotBandOrLine:function(a){for(var f=
this.plotLinesAndBands,c=this.options,k=this.userOptions,h=f.length;h--;)f[h].id===a&&f[h].destroy();e([c.plotLines||[],k.plotLines||[],c.plotBands||[],k.plotBands||[]],function(c){for(h=c.length;h--;)c[h].id===a&&t(c,c[h])})},removePlotBand:function(a){this.removePlotBandOrLine(a)},removePlotLine:function(a){this.removePlotBandOrLine(a)}})})(K,V);(function(a){var C=a.doc,E=a.each,F=a.extend,m=a.format,h=a.isNumber,e=a.map,t=a.merge,x=a.pick,p=a.splat,u=a.syncTimeout,f=a.timeUnits;a.Tooltip=function(){this.init.apply(this,
arguments)};a.Tooltip.prototype={init:function(a,f){this.chart=a;this.options=f;this.crosshairs=[];this.now={x:0,y:0};this.isHidden=!0;this.split=f.split&&!a.inverted;this.shared=f.shared||this.split;this.outside=f.outside&&!this.split},cleanSplit:function(a){E(this.chart.series,function(c){var f=c&&c.tt;f&&(!f.isActive||a?c.tt=f.destroy():f.isActive=!1)})},getLabel:function(){var c=this.chart.renderer,f=this.options,e;this.label||(this.outside&&(this.container=e=a.doc.createElement("div"),e.className=
"highcharts-tooltip-container",a.css(e,{position:"absolute",top:"1px",pointerEvents:f.style&&f.style.pointerEvents}),a.doc.body.appendChild(e),this.renderer=c=new a.Renderer(e,0,0)),this.split?this.label=c.g("tooltip"):(this.label=c.label("",0,0,f.shape||"callout",null,null,f.useHTML,null,"tooltip").attr({padding:f.padding,r:f.borderRadius}),this.label.attr({fill:f.backgroundColor,"stroke-width":f.borderWidth}).css(f.style).shadow(f.shadow)),this.outside&&(this.label.attr({x:this.distance,y:this.distance}),
this.label.xSetter=function(a){e.style.left=a+"px"},this.label.ySetter=function(a){e.style.top=a+"px"}),this.label.attr({zIndex:8}).add());return this.label},update:function(a){this.destroy();t(!0,this.chart.options.tooltip.userOptions,a);this.init(this.chart,t(!0,this.options,a))},destroy:function(){this.label&&(this.label=this.label.destroy());this.split&&this.tt&&(this.cleanSplit(this.chart,!0),this.tt=this.tt.destroy());this.renderer&&(this.renderer=this.renderer.destroy(),a.discardElement(this.container));
a.clearTimeout(this.hideTimer);a.clearTimeout(this.tooltipTimeout)},move:function(c,f,e,l){var d=this,b=d.now,k=!1!==d.options.animation&&!d.isHidden&&(1<Math.abs(c-b.x)||1<Math.abs(f-b.y)),q=d.followPointer||1<d.len;F(b,{x:k?(2*b.x+c)/3:c,y:k?(b.y+f)/2:f,anchorX:q?void 0:k?(2*b.anchorX+e)/3:e,anchorY:q?void 0:k?(b.anchorY+l)/2:l});d.getLabel().attr(b);k&&(a.clearTimeout(this.tooltipTimeout),this.tooltipTimeout=setTimeout(function(){d&&d.move(c,f,e,l)},32))},hide:function(c){var f=this;a.clearTimeout(this.hideTimer);
c=x(c,this.options.hideDelay,500);this.isHidden||(this.hideTimer=u(function(){f.getLabel()[c?"fadeOut":"hide"]();f.isHidden=!0},c))},getAnchor:function(a,f){var c=this.chart,l=c.pointer,d=c.inverted,b=c.plotTop,k=c.plotLeft,q=0,h=0,w,m;a=p(a);this.followPointer&&f?(void 0===f.chartX&&(f=l.normalize(f)),a=[f.chartX-c.plotLeft,f.chartY-b]):a[0].tooltipPos?a=a[0].tooltipPos:(E(a,function(a){w=a.series.yAxis;m=a.series.xAxis;q+=a.plotX+(!d&&m?m.left-k:0);h+=(a.plotLow?(a.plotLow+a.plotHigh)/2:a.plotY)+
(!d&&w?w.top-b:0)}),q/=a.length,h/=a.length,a=[d?c.plotWidth-h:q,this.shared&&!d&&1<a.length&&f?f.chartY-b:d?c.plotHeight-q:h]);return e(a,Math.round)},getPosition:function(a,f,e){var c=this.chart,d=this.distance,b={},k=c.inverted&&e.h||0,q,h=this.outside,w=h?C.documentElement.clientWidth-2*d:c.chartWidth,r=h?Math.max(C.body.scrollHeight,C.documentElement.scrollHeight,C.body.offsetHeight,C.documentElement.offsetHeight,C.documentElement.clientHeight):c.chartHeight,B=c.pointer.chartPosition,H=["y",
r,f,(h?B.top-d:0)+e.plotY+c.plotTop,h?0:c.plotTop,h?r:c.plotTop+c.plotHeight],n=["x",w,a,(h?B.left-d:0)+e.plotX+c.plotLeft,h?0:c.plotLeft,h?w:c.plotLeft+c.plotWidth],D=!this.followPointer&&x(e.ttBelow,!c.inverted===!!e.negative),A=function(a,c,g,n,l,f){var A=g<n-d,e=n+d+g<c,q=n-d-g;n+=d;if(D&&e)b[a]=n;else if(!D&&A)b[a]=q;else if(A)b[a]=Math.min(f-g,0>q-k?q:q-k);else if(e)b[a]=Math.max(l,n+k+g>c?n:n+k);else return!1},M=function(a,c,g,n){var l;n<d||n>c-d?l=!1:b[a]=n<g/2?1:n>c-g/2?c-g-2:n-g/2;return l},
G=function(a){var b=H;H=n;n=b;q=a},g=function(){!1!==A.apply(0,H)?!1!==M.apply(0,n)||q||(G(!0),g()):q?b.x=b.y=0:(G(!0),g())};(c.inverted||1<this.len)&&G();g();return b},defaultFormatter:function(a){var c=this.points||p(this),f;f=[a.tooltipFooterHeaderFormatter(c[0])];f=f.concat(a.bodyFormatter(c));f.push(a.tooltipFooterHeaderFormatter(c[0],!0));return f},refresh:function(c,f){var k,l=this.options,d,b=c,e,q={},h=[];k=l.formatter||this.defaultFormatter;var q=this.shared,w;l.enabled&&(a.clearTimeout(this.hideTimer),
this.followPointer=p(b)[0].series.tooltipOptions.followPointer,e=this.getAnchor(b,f),f=e[0],d=e[1],!q||b.series&&b.series.noSharedTooltip?q=b.getLabelConfig():(E(b,function(a){a.setState("hover");h.push(a.getLabelConfig())}),q={x:b[0].category,y:b[0].y},q.points=h,b=b[0]),this.len=h.length,q=k.call(q,this),w=b.series,this.distance=x(w.tooltipOptions.distance,16),!1===q?this.hide():(k=this.getLabel(),this.isHidden&&k.attr({opacity:1}).show(),this.split?this.renderSplit(q,p(c)):(l.style.width||k.css({width:this.chart.spacingBox.width}),
k.attr({text:q&&q.join?q.join(""):q}),k.removeClass(/highcharts-color-[\d]+/g).addClass("highcharts-color-"+x(b.colorIndex,w.colorIndex)),k.attr({stroke:l.borderColor||b.color||w.color||"#666666"}),this.updatePosition({plotX:f,plotY:d,negative:b.negative,ttBelow:b.ttBelow,h:e[2]||0})),this.isHidden=!1))},renderSplit:function(c,f){var k=this,l=[],d=this.chart,b=d.renderer,e=!0,q=this.options,h=0,w,m=this.getLabel(),B=d.plotTop;a.isString(c)&&(c=[!1,c]);E(c.slice(0,f.length+1),function(a,c){if(!1!==
a){c=f[c-1]||{isHeader:!0,plotX:f[0].plotX};var n=c.series||k,A=n.tt,v=c.series||{},r="highcharts-color-"+x(c.colorIndex,v.colorIndex,"none");A||(n.tt=A=b.label(null,null,null,"callout",null,null,q.useHTML).addClass("highcharts-tooltip-box "+r+(c.isHeader?" highcharts-tooltip-header":"")).attr({padding:q.padding,r:q.borderRadius,fill:q.backgroundColor,stroke:q.borderColor||c.color||v.color||"#333333","stroke-width":q.borderWidth}).add(m));A.isActive=!0;A.attr({text:a});A.css(q.style).shadow(q.shadow);
a=A.getBBox();v=a.width+A.strokeWidth();c.isHeader?(h=a.height,d.xAxis[0].opposite&&(w=!0,B-=h),v=Math.max(0,Math.min(c.plotX+d.plotLeft-v/2,d.chartWidth+(d.scrollablePixels?d.scrollablePixels-d.marginRight:0)-v))):v=c.plotX+d.plotLeft-x(q.distance,16)-v;0>v&&(e=!1);a=(c.series&&c.series.yAxis&&c.series.yAxis.pos)+(c.plotY||0);a-=B;c.isHeader&&(a=w?-h:d.plotHeight+h);l.push({target:a,rank:c.isHeader?1:0,size:n.tt.getBBox().height+1,point:c,x:v,tt:A})}});this.cleanSplit();a.distribute(l,d.plotHeight+
h);E(l,function(a){var b=a.point,c=b.series;a.tt.attr({visibility:void 0===a.pos?"hidden":"inherit",x:e||b.isHeader?a.x:b.plotX+d.plotLeft+x(q.distance,16),y:a.pos+B,anchorX:b.isHeader?b.plotX+d.plotLeft:b.plotX+c.xAxis.pos,anchorY:b.isHeader?d.plotTop+d.plotHeight/2:b.plotY+c.yAxis.pos})})},updatePosition:function(a){var c=this.chart,f=this.getLabel(),l=(this.options.positioner||this.getPosition).call(this,f.width,f.height,a),d=a.plotX+c.plotLeft;a=a.plotY+c.plotTop;var b;this.outside&&(b=(this.options.borderWidth||
0)+2*this.distance,this.renderer.setSize(f.width+b,f.height+b,!1),d+=c.pointer.chartPosition.left-l.x,a+=c.pointer.chartPosition.top-l.y);this.move(Math.round(l.x),Math.round(l.y||0),d,a)},getDateFormat:function(a,k,e,l){var d=this.chart.time,b=d.dateFormat("%m-%d %H:%M:%S.%L",k),c,q,h={millisecond:15,second:12,minute:9,hour:6,day:3},w="millisecond";for(q in f){if(a===f.week&&+d.dateFormat("%w",k)===e&&"00:00:00.000"===b.substr(6)){q="week";break}if(f[q]>a){q=w;break}if(h[q]&&b.substr(h[q])!=="01-01 00:00:00.000".substr(h[q]))break;
"week"!==q&&(w=q)}q&&(c=l[q]);return c},getXDateFormat:function(a,f,e){f=f.dateTimeLabelFormats;var c=e&&e.closestPointRange;return(c?this.getDateFormat(c,a.x,e.options.startOfWeek,f):f.day)||f.year},tooltipFooterHeaderFormatter:function(a,f){f=f?"footer":"header";var c=a.series,l=c.tooltipOptions,d=l.xDateFormat,b=c.xAxis,e=b&&"datetime"===b.options.type&&h(a.key),k=l[f+"Format"];e&&!d&&(d=this.getXDateFormat(a,l,b));e&&d&&E(a.point&&a.point.tooltipDateKeys||["key"],function(a){k=k.replace("{point."+
a+"}","{point."+a+":"+d+"}")});return m(k,{point:a,series:c},this.chart.time)},bodyFormatter:function(a){return e(a,function(a){var c=a.series.tooltipOptions;return(c[(a.point.formatPrefix||"point")+"Formatter"]||a.point.tooltipFormatter).call(a.point,c[(a.point.formatPrefix||"point")+"Format"])})}}})(K);(function(a){var C=a.addEvent,E=a.attr,F=a.charts,m=a.color,h=a.css,e=a.defined,t=a.each,x=a.extend,p=a.find,u=a.fireEvent,f=a.isNumber,c=a.isObject,k=a.offset,r=a.pick,l=a.splat,d=a.Tooltip;a.Pointer=
function(a,d){this.init(a,d)};a.Pointer.prototype={init:function(a,c){this.options=c;this.chart=a;this.runChartClick=c.chart.events&&!!c.chart.events.click;this.pinchDown=[];this.lastValidTouch={};d&&(a.tooltip=new d(a,c.tooltip),this.followTouchMove=r(c.tooltip.followTouchMove,!0));this.setDOMEvents()},zoomOption:function(a){var b=this.chart,d=b.options.chart,c=d.zoomType||"",b=b.inverted;/touch/.test(a.type)&&(c=r(d.pinchType,c));this.zoomX=a=/x/.test(c);this.zoomY=c=/y/.test(c);this.zoomHor=a&&
!b||c&&b;this.zoomVert=c&&!b||a&&b;this.hasZoom=a||c},normalize:function(a,d){var b;b=a.touches?a.touches.length?a.touches.item(0):a.changedTouches[0]:a;d||(this.chartPosition=d=k(this.chart.container));return x(a,{chartX:Math.round(b.pageX-d.left),chartY:Math.round(b.pageY-d.top)})},getCoordinates:function(a){var b={xAxis:[],yAxis:[]};t(this.chart.axes,function(d){b[d.isXAxis?"xAxis":"yAxis"].push({axis:d,value:d.toValue(a[d.horiz?"chartX":"chartY"])})});return b},findNearestKDPoint:function(a,d,
f){var b;t(a,function(a){var l=!(a.noSharedTooltip&&d)&&0>a.options.findNearestPointBy.indexOf("y");a=a.searchPoint(f,l);if((l=c(a,!0))&&!(l=!c(b,!0)))var l=b.distX-a.distX,e=b.dist-a.dist,k=(a.series.group&&a.series.group.zIndex)-(b.series.group&&b.series.group.zIndex),l=0<(0!==l&&d?l:0!==e?e:0!==k?k:b.series.index>a.series.index?-1:1);l&&(b=a)});return b},getPointFromEvent:function(a){a=a.target;for(var b;a&&!b;)b=a.point,a=a.parentNode;return b},getChartCoordinatesFromPoint:function(a,d){var b=
a.series,c=b.xAxis,b=b.yAxis,f=r(a.clientX,a.plotX),l=a.shapeArgs;if(c&&b)return d?{chartX:c.len+c.pos-f,chartY:b.len+b.pos-a.plotY}:{chartX:f+c.pos,chartY:a.plotY+b.pos};if(l&&l.x&&l.y)return{chartX:l.x,chartY:l.y}},getHoverData:function(b,d,f,l,e,k,h){var q,n=[],v=h&&h.isBoosting;l=!(!l||!b);h=d&&!d.stickyTracking?[d]:a.grep(f,function(a){return a.visible&&!(!e&&a.directTouch)&&r(a.options.enableMouseTracking,!0)&&a.stickyTracking});d=(q=l?b:this.findNearestKDPoint(h,e,k))&&q.series;q&&(e&&!d.noSharedTooltip?
(h=a.grep(f,function(a){return a.visible&&!(!e&&a.directTouch)&&r(a.options.enableMouseTracking,!0)&&!a.noSharedTooltip}),t(h,function(a){var b=p(a.points,function(a){return a.x===q.x&&!a.isNull});c(b)&&(v&&(b=a.getPoint(b)),n.push(b))})):n.push(q));return{hoverPoint:q,hoverSeries:d,hoverPoints:n}},runPointActions:function(b,d){var c=this.chart,f=c.tooltip&&c.tooltip.options.enabled?c.tooltip:void 0,l=f?f.shared:!1,e=d||c.hoverPoint,k=e&&e.series||c.hoverSeries,k=this.getHoverData(e,k,c.series,"touchmove"!==
b.type&&(!!d||k&&k.directTouch&&this.isDirectTouch),l,b,{isBoosting:c.isBoosting}),h,e=k.hoverPoint;h=k.hoverPoints;d=(k=k.hoverSeries)&&k.tooltipOptions.followPointer;l=l&&k&&!k.noSharedTooltip;if(e&&(e!==c.hoverPoint||f&&f.isHidden)){t(c.hoverPoints||[],function(b){-1===a.inArray(b,h)&&b.setState()});t(h||[],function(a){a.setState("hover")});if(c.hoverSeries!==k)k.onMouseOver();c.hoverPoint&&c.hoverPoint.firePointEvent("mouseOut");if(!e.series)return;e.firePointEvent("mouseOver");c.hoverPoints=
h;c.hoverPoint=e;f&&f.refresh(l?h:e,b)}else d&&f&&!f.isHidden&&(e=f.getAnchor([{}],b),f.updatePosition({plotX:e[0],plotY:e[1]}));this.unDocMouseMove||(this.unDocMouseMove=C(c.container.ownerDocument,"mousemove",function(b){var d=F[a.hoverChartIndex];if(d)d.pointer.onDocumentMouseMove(b)}));t(c.axes,function(d){var c=r(d.crosshair.snap,!0),n=c?a.find(h,function(a){return a.series[d.coll]===d}):void 0;n||!c?d.drawCrosshair(b,n):d.hideCrosshair()})},reset:function(a,d){var b=this.chart,c=b.hoverSeries,
f=b.hoverPoint,e=b.hoverPoints,k=b.tooltip,h=k&&k.shared?e:f;a&&h&&t(l(h),function(b){b.series.isCartesian&&void 0===b.plotX&&(a=!1)});if(a)k&&h&&(k.refresh(h),k.shared&&e?t(e,function(a){a.setState(a.state,!0);a.series.xAxis.crosshair&&a.series.xAxis.drawCrosshair(null,a);a.series.yAxis.crosshair&&a.series.yAxis.drawCrosshair(null,a)}):f&&(f.setState(f.state,!0),t(b.axes,function(a){a.crosshair&&a.drawCrosshair(null,f)})));else{if(f)f.onMouseOut();e&&t(e,function(a){a.setState()});if(c)c.onMouseOut();
k&&k.hide(d);this.unDocMouseMove&&(this.unDocMouseMove=this.unDocMouseMove());t(b.axes,function(a){a.hideCrosshair()});this.hoverX=b.hoverPoints=b.hoverPoint=null}},scaleGroups:function(a,d){var b=this.chart,c;t(b.series,function(f){c=a||f.getPlotBox();f.xAxis&&f.xAxis.zoomEnabled&&f.group&&(f.group.attr(c),f.markerGroup&&(f.markerGroup.attr(c),f.markerGroup.clip(d?b.clipRect:null)),f.dataLabelsGroup&&f.dataLabelsGroup.attr(c))});b.clipRect.attr(d||b.clipBox)},dragStart:function(a){var b=this.chart;
b.mouseIsDown=a.type;b.cancelClick=!1;b.mouseDownX=this.mouseDownX=a.chartX;b.mouseDownY=this.mouseDownY=a.chartY},drag:function(a){var b=this.chart,d=b.options.chart,c=a.chartX,f=a.chartY,l=this.zoomHor,e=this.zoomVert,k=b.plotLeft,n=b.plotTop,h=b.plotWidth,A=b.plotHeight,r,G=this.selectionMarker,g=this.mouseDownX,y=this.mouseDownY,p=d.panKey&&a[d.panKey+"Key"];G&&G.touch||(c<k?c=k:c>k+h&&(c=k+h),f<n?f=n:f>n+A&&(f=n+A),this.hasDragged=Math.sqrt(Math.pow(g-c,2)+Math.pow(y-f,2)),10<this.hasDragged&&
(r=b.isInsidePlot(g-k,y-n),b.hasCartesianSeries&&(this.zoomX||this.zoomY)&&r&&!p&&!G&&(this.selectionMarker=G=b.renderer.rect(k,n,l?1:h,e?1:A,0).attr({fill:d.selectionMarkerFill||m("#335cad").setOpacity(.25).get(),"class":"highcharts-selection-marker",zIndex:7}).add()),G&&l&&(c-=g,G.attr({width:Math.abs(c),x:(0<c?0:c)+g})),G&&e&&(c=f-y,G.attr({height:Math.abs(c),y:(0<c?0:c)+y})),r&&!G&&d.panning&&b.pan(a,d.panning)))},drop:function(a){var b=this,d=this.chart,c=this.hasPinched;if(this.selectionMarker){var l=
{originalEvent:a,xAxis:[],yAxis:[]},k=this.selectionMarker,r=k.attr?k.attr("x"):k.x,m=k.attr?k.attr("y"):k.y,n=k.attr?k.attr("width"):k.width,D=k.attr?k.attr("height"):k.height,A;if(this.hasDragged||c)t(d.axes,function(d){if(d.zoomEnabled&&e(d.min)&&(c||b[{xAxis:"zoomX",yAxis:"zoomY"}[d.coll]])){var f=d.horiz,g="touchend"===a.type?d.minPixelPadding:0,k=d.toValue((f?r:m)+g),f=d.toValue((f?r+n:m+D)-g);l[d.coll].push({axis:d,min:Math.min(k,f),max:Math.max(k,f)});A=!0}}),A&&u(d,"selection",l,function(a){d.zoom(x(a,
c?{animation:!1}:null))});f(d.index)&&(this.selectionMarker=this.selectionMarker.destroy());c&&this.scaleGroups()}d&&f(d.index)&&(h(d.container,{cursor:d._cursor}),d.cancelClick=10<this.hasDragged,d.mouseIsDown=this.hasDragged=this.hasPinched=!1,this.pinchDown=[])},onContainerMouseDown:function(a){a=this.normalize(a);2!==a.button&&(this.zoomOption(a),a.preventDefault&&a.preventDefault(),this.dragStart(a))},onDocumentMouseUp:function(b){F[a.hoverChartIndex]&&F[a.hoverChartIndex].pointer.drop(b)},onDocumentMouseMove:function(a){var b=
this.chart,d=this.chartPosition;a=this.normalize(a,d);!d||this.inClass(a.target,"highcharts-tracker")||b.isInsidePlot(a.chartX-b.plotLeft,a.chartY-b.plotTop)||this.reset()},onContainerMouseLeave:function(b){var d=F[a.hoverChartIndex];d&&(b.relatedTarget||b.toElement)&&(d.pointer.reset(),d.pointer.chartPosition=null)},onContainerMouseMove:function(b){var d=this.chart;e(a.hoverChartIndex)&&F[a.hoverChartIndex]&&F[a.hoverChartIndex].mouseIsDown||(a.hoverChartIndex=d.index);b=this.normalize(b);b.returnValue=
!1;"mousedown"===d.mouseIsDown&&this.drag(b);!this.inClass(b.target,"highcharts-tracker")&&!d.isInsidePlot(b.chartX-d.plotLeft,b.chartY-d.plotTop)||d.openMenu||this.runPointActions(b)},inClass:function(a,d){for(var b;a;){if(b=E(a,"class")){if(-1!==b.indexOf(d))return!0;if(-1!==b.indexOf("highcharts-container"))return!1}a=a.parentNode}},onTrackerMouseOut:function(a){var b=this.chart.hoverSeries;a=a.relatedTarget||a.toElement;this.isDirectTouch=!1;if(!(!b||!a||b.stickyTracking||this.inClass(a,"highcharts-tooltip")||
this.inClass(a,"highcharts-series-"+b.index)&&this.inClass(a,"highcharts-tracker")))b.onMouseOut()},onContainerClick:function(a){var b=this.chart,d=b.hoverPoint,c=b.plotLeft,f=b.plotTop;a=this.normalize(a);b.cancelClick||(d&&this.inClass(a.target,"highcharts-tracker")?(u(d.series,"click",x(a,{point:d})),b.hoverPoint&&d.firePointEvent("click",a)):(x(a,this.getCoordinates(a)),b.isInsidePlot(a.chartX-c,a.chartY-f)&&u(b,"click",a)))},setDOMEvents:function(){var b=this,d=b.chart.container,c=d.ownerDocument;
d.onmousedown=function(a){b.onContainerMouseDown(a)};d.onmousemove=function(a){b.onContainerMouseMove(a)};d.onclick=function(a){b.onContainerClick(a)};this.unbindContainerMouseLeave=C(d,"mouseleave",b.onContainerMouseLeave);a.unbindDocumentMouseUp||(a.unbindDocumentMouseUp=C(c,"mouseup",b.onDocumentMouseUp));a.hasTouch&&(d.ontouchstart=function(a){b.onContainerTouchStart(a)},d.ontouchmove=function(a){b.onContainerTouchMove(a)},a.unbindDocumentTouchEnd||(a.unbindDocumentTouchEnd=C(c,"touchend",b.onDocumentTouchEnd)))},
destroy:function(){var b=this;b.unDocMouseMove&&b.unDocMouseMove();this.unbindContainerMouseLeave();a.chartCount||(a.unbindDocumentMouseUp&&(a.unbindDocumentMouseUp=a.unbindDocumentMouseUp()),a.unbindDocumentTouchEnd&&(a.unbindDocumentTouchEnd=a.unbindDocumentTouchEnd()));clearInterval(b.tooltipTimeout);a.objectEach(b,function(a,d){b[d]=null})}}})(K);(function(a){var C=a.charts,E=a.each,F=a.extend,m=a.map,h=a.noop,e=a.pick;F(a.Pointer.prototype,{pinchTranslate:function(a,e,h,m,f,c){this.zoomHor&&
this.pinchTranslateDirection(!0,a,e,h,m,f,c);this.zoomVert&&this.pinchTranslateDirection(!1,a,e,h,m,f,c)},pinchTranslateDirection:function(a,e,h,m,f,c,k,r){var l=this.chart,d=a?"x":"y",b=a?"X":"Y",v="chart"+b,q=a?"width":"height",p=l["plot"+(a?"Left":"Top")],w,t,B=r||1,H=l.inverted,n=l.bounds[a?"h":"v"],D=1===e.length,A=e[0][v],M=h[0][v],G=!D&&e[1][v],g=!D&&h[1][v],y;h=function(){!D&&20<Math.abs(A-G)&&(B=r||Math.abs(M-g)/Math.abs(A-G));t=(p-M)/B+A;w=l["plot"+(a?"Width":"Height")]/B};h();e=t;e<n.min?
(e=n.min,y=!0):e+w>n.max&&(e=n.max-w,y=!0);y?(M-=.8*(M-k[d][0]),D||(g-=.8*(g-k[d][1])),h()):k[d]=[M,g];H||(c[d]=t-p,c[q]=w);c=H?1/B:B;f[q]=w;f[d]=e;m[H?a?"scaleY":"scaleX":"scale"+b]=B;m["translate"+b]=c*p+(M-c*A)},pinch:function(a){var t=this,p=t.chart,u=t.pinchDown,f=a.touches,c=f.length,k=t.lastValidTouch,r=t.hasZoom,l=t.selectionMarker,d={},b=1===c&&(t.inClass(a.target,"highcharts-tracker")&&p.runTrackerClick||t.runChartClick),v={};1<c&&(t.initiated=!0);r&&t.initiated&&!b&&a.preventDefault();
m(f,function(a){return t.normalize(a)});"touchstart"===a.type?(E(f,function(a,b){u[b]={chartX:a.chartX,chartY:a.chartY}}),k.x=[u[0].chartX,u[1]&&u[1].chartX],k.y=[u[0].chartY,u[1]&&u[1].chartY],E(p.axes,function(a){if(a.zoomEnabled){var b=p.bounds[a.horiz?"h":"v"],d=a.minPixelPadding,c=a.toPixels(e(a.options.min,a.dataMin)),f=a.toPixels(e(a.options.max,a.dataMax)),l=Math.max(c,f);b.min=Math.min(a.pos,Math.min(c,f)-d);b.max=Math.max(a.pos+a.len,l+d)}}),t.res=!0):t.followTouchMove&&1===c?this.runPointActions(t.normalize(a)):
u.length&&(l||(t.selectionMarker=l=F({destroy:h,touch:!0},p.plotBox)),t.pinchTranslate(u,f,d,l,v,k),t.hasPinched=r,t.scaleGroups(d,v),t.res&&(t.res=!1,this.reset(!1,0)))},touch:function(h,m){var p=this.chart,t,f;if(p.index!==a.hoverChartIndex)this.onContainerMouseLeave({relatedTarget:!0});a.hoverChartIndex=p.index;1===h.touches.length?(h=this.normalize(h),(f=p.isInsidePlot(h.chartX-p.plotLeft,h.chartY-p.plotTop))&&!p.openMenu?(m&&this.runPointActions(h),"touchmove"===h.type&&(m=this.pinchDown,t=m[0]?
4<=Math.sqrt(Math.pow(m[0].chartX-h.chartX,2)+Math.pow(m[0].chartY-h.chartY,2)):!1),e(t,!0)&&this.pinch(h)):m&&this.reset()):2===h.touches.length&&this.pinch(h)},onContainerTouchStart:function(a){this.zoomOption(a);this.touch(a,!0)},onContainerTouchMove:function(a){this.touch(a)},onDocumentTouchEnd:function(e){C[a.hoverChartIndex]&&C[a.hoverChartIndex].pointer.drop(e)}})})(K);(function(a){var C=a.addEvent,E=a.charts,F=a.css,m=a.doc,h=a.extend,e=a.noop,t=a.Pointer,x=a.removeEvent,p=a.win,u=a.wrap;
if(!a.hasTouch&&(p.PointerEvent||p.MSPointerEvent)){var f={},c=!!p.PointerEvent,k=function(){var c=[];c.item=function(a){return this[a]};a.objectEach(f,function(a){c.push({pageX:a.pageX,pageY:a.pageY,target:a.target})});return c},r=function(c,d,b,f){"touch"!==c.pointerType&&c.pointerType!==c.MSPOINTER_TYPE_TOUCH||!E[a.hoverChartIndex]||(f(c),f=E[a.hoverChartIndex].pointer,f[d]({type:b,target:c.currentTarget,preventDefault:e,touches:k()}))};h(t.prototype,{onContainerPointerDown:function(a){r(a,"onContainerTouchStart",
"touchstart",function(a){f[a.pointerId]={pageX:a.pageX,pageY:a.pageY,target:a.currentTarget}})},onContainerPointerMove:function(a){r(a,"onContainerTouchMove","touchmove",function(a){f[a.pointerId]={pageX:a.pageX,pageY:a.pageY};f[a.pointerId].target||(f[a.pointerId].target=a.currentTarget)})},onDocumentPointerUp:function(a){r(a,"onDocumentTouchEnd","touchend",function(a){delete f[a.pointerId]})},batchMSEvents:function(a){a(this.chart.container,c?"pointerdown":"MSPointerDown",this.onContainerPointerDown);
a(this.chart.container,c?"pointermove":"MSPointerMove",this.onContainerPointerMove);a(m,c?"pointerup":"MSPointerUp",this.onDocumentPointerUp)}});u(t.prototype,"init",function(a,d,b){a.call(this,d,b);this.hasZoom&&F(d.container,{"-ms-touch-action":"none","touch-action":"none"})});u(t.prototype,"setDOMEvents",function(a){a.apply(this);(this.hasZoom||this.followTouchMove)&&this.batchMSEvents(C)});u(t.prototype,"destroy",function(a){this.batchMSEvents(x);a.call(this)})}})(K);(function(a){var C=a.addEvent,
E=a.css,F=a.discardElement,m=a.defined,h=a.each,e=a.fireEvent,t=a.isFirefox,x=a.marginNames,p=a.merge,u=a.pick,f=a.setAnimation,c=a.stableSort,k=a.win,r=a.wrap;a.Legend=function(a,d){this.init(a,d)};a.Legend.prototype={init:function(a,d){this.chart=a;this.setOptions(d);d.enabled&&(this.render(),C(this.chart,"endResize",function(){this.legend.positionCheckboxes()}),this.proximate?this.unchartrender=C(this.chart,"render",function(){this.legend.proximatePositions();this.legend.positionItems()}):this.unchartrender&&
this.unchartrender())},setOptions:function(a){var d=u(a.padding,8);this.options=a;this.itemStyle=a.itemStyle;this.itemHiddenStyle=p(this.itemStyle,a.itemHiddenStyle);this.itemMarginTop=a.itemMarginTop||0;this.padding=d;this.initialItemY=d-5;this.symbolWidth=u(a.symbolWidth,16);this.pages=[];this.proximate="proximate"===a.layout&&!this.chart.inverted},update:function(a,d){var b=this.chart;this.setOptions(p(!0,this.options,a));this.destroy();b.isDirtyLegend=b.isDirtyBox=!0;u(d,!0)&&b.redraw();e(this,
"afterUpdate")},colorizeItem:function(a,d){a.legendGroup[d?"removeClass":"addClass"]("highcharts-legend-item-hidden");var b=this.options,c=a.legendItem,f=a.legendLine,l=a.legendSymbol,k=this.itemHiddenStyle.color,b=d?b.itemStyle.color:k,h=d?a.color||k:k,r=a.options&&a.options.marker,m={fill:h};c&&c.css({fill:b,color:b});f&&f.attr({stroke:h});l&&(r&&l.isMarker&&(m=a.pointAttribs(),d||(m.stroke=m.fill=k)),l.attr(m));e(this,"afterColorizeItem",{item:a,visible:d})},positionItems:function(){h(this.allItems,
this.positionItem,this);this.chart.isResizing||this.positionCheckboxes()},positionItem:function(a){var d=this.options,b=d.symbolPadding,d=!d.rtl,c=a._legendItemPos,f=c[0],c=c[1],l=a.checkbox;if((a=a.legendGroup)&&a.element)a[m(a.translateY)?"animate":"attr"]({translateX:d?f:this.legendWidth-f-2*b-4,translateY:c});l&&(l.x=f,l.y=c)},destroyItem:function(a){var d=a.checkbox;h(["legendItem","legendLine","legendSymbol","legendGroup"],function(b){a[b]&&(a[b]=a[b].destroy())});d&&F(a.checkbox)},destroy:function(){function a(a){this[a]&&
(this[a]=this[a].destroy())}h(this.getAllItems(),function(d){h(["legendItem","legendGroup"],a,d)});h("clipRect up down pager nav box title group".split(" "),a,this);this.display=null},positionCheckboxes:function(){var a=this.group&&this.group.alignAttr,d,b=this.clipHeight||this.legendHeight,c=this.titleHeight;a&&(d=a.translateY,h(this.allItems,function(f){var l=f.checkbox,e;l&&(e=d+c+l.y+(this.scrollOffset||0)+3,E(l,{left:a.translateX+f.checkboxOffset+l.x-20+"px",top:e+"px",display:e>d-6&&e<d+b-6?
"":"none"}))},this))},renderTitle:function(){var a=this.options,d=this.padding,b=a.title,c=0;b.text&&(this.title||(this.title=this.chart.renderer.label(b.text,d-3,d-4,null,null,null,a.useHTML,null,"legend-title").attr({zIndex:1}).css(b.style).add(this.group)),a=this.title.getBBox(),c=a.height,this.offsetWidth=a.width,this.contentGroup.attr({translateY:c}));this.titleHeight=c},setText:function(c){var d=this.options;c.legendItem.attr({text:d.labelFormat?a.format(d.labelFormat,c,this.chart.time):d.labelFormatter.call(c)})},
renderItem:function(a){var d=this.chart,b=d.renderer,c=this.options,f=this.symbolWidth,e=c.symbolPadding,k=this.itemStyle,l=this.itemHiddenStyle,h="horizontal"===c.layout?u(c.itemDistance,20):0,r=!c.rtl,n=a.legendItem,D=!a.series,A=!D&&a.series.drawLegendSymbol?a.series:a,m=A.options,m=this.createCheckboxForItem&&m&&m.showCheckbox,h=f+e+h+(m?20:0),G=c.useHTML,g=a.options.className;n||(a.legendGroup=b.g("legend-item").addClass("highcharts-"+A.type+"-series highcharts-color-"+a.colorIndex+(g?" "+g:
"")+(D?" highcharts-series-"+a.index:"")).attr({zIndex:1}).add(this.scrollGroup),a.legendItem=n=b.text("",r?f+e:-e,this.baseline||0,G).css(p(a.visible?k:l)).attr({align:r?"left":"right",zIndex:2}).add(a.legendGroup),this.baseline||(f=k.fontSize,this.fontMetrics=b.fontMetrics(f,n),this.baseline=this.fontMetrics.f+3+this.itemMarginTop,n.attr("y",this.baseline)),this.symbolHeight=c.symbolHeight||this.fontMetrics.f,A.drawLegendSymbol(this,a),this.setItemEvents&&this.setItemEvents(a,n,G),m&&this.createCheckboxForItem(a));
this.colorizeItem(a,a.visible);k.width||n.css({width:(c.itemWidth||c.width||d.spacingBox.width)-h});this.setText(a);d=n.getBBox();a.itemWidth=a.checkboxOffset=c.itemWidth||a.legendItemWidth||d.width+h;this.maxItemWidth=Math.max(this.maxItemWidth,a.itemWidth);this.totalItemWidth+=a.itemWidth;this.itemHeight=a.itemHeight=Math.round(a.legendItemHeight||d.height||this.symbolHeight)},layoutItem:function(a){var c=this.options,b=this.padding,f="horizontal"===c.layout,e=a.itemHeight,k=c.itemMarginBottom||
0,l=this.itemMarginTop,h=f?u(c.itemDistance,20):0,r=c.width,m=r||this.chart.spacingBox.width-2*b-c.x,c=c.alignColumns&&this.totalItemWidth>m?this.maxItemWidth:a.itemWidth;f&&this.itemX-b+c>m&&(this.itemX=b,this.itemY+=l+this.lastLineHeight+k,this.lastLineHeight=0);this.lastItemY=l+this.itemY+k;this.lastLineHeight=Math.max(e,this.lastLineHeight);a._legendItemPos=[this.itemX,this.itemY];f?this.itemX+=c:(this.itemY+=l+e+k,this.lastLineHeight=e);this.offsetWidth=r||Math.max((f?this.itemX-b-(a.checkbox?
0:h):c)+b,this.offsetWidth)},getAllItems:function(){var a=[];h(this.chart.series,function(c){var b=c&&c.options;c&&u(b.showInLegend,m(b.linkedTo)?!1:void 0,!0)&&(a=a.concat(c.legendItems||("point"===b.legendType?c.data:c)))});e(this,"afterGetAllItems",{allItems:a});return a},getAlignment:function(){var a=this.options;return this.proximate?a.align.charAt(0)+"tv":a.floating?"":a.align.charAt(0)+a.verticalAlign.charAt(0)+a.layout.charAt(0)},adjustMargins:function(a,c){var b=this.chart,d=this.options,
f=this.getAlignment();f&&h([/(lth|ct|rth)/,/(rtv|rm|rbv)/,/(rbh|cb|lbh)/,/(lbv|lm|ltv)/],function(e,k){e.test(f)&&!m(a[k])&&(b[x[k]]=Math.max(b[x[k]],b.legend[(k+1)%2?"legendHeight":"legendWidth"]+[1,-1,-1,1][k]*d[k%2?"x":"y"]+u(d.margin,12)+c[k]+(0===k&&void 0!==b.options.title.margin?b.titleOffset+b.options.title.margin:0)))})},proximatePositions:function(){var c=this.chart,d=[],b="left"===this.options.align;h(this.allItems,function(f){var e,k;e=b;f.xAxis&&f.points&&(f.xAxis.options.reversed&&(e=
!e),e=a.find(e?f.points:f.points.slice(0).reverse(),function(b){return a.isNumber(b.plotY)}),k=f.legendGroup.getBBox().height,d.push({target:f.visible?(e?e.plotY:f.xAxis.height)-.3*k:c.plotHeight,size:k,item:f}))},this);a.distribute(d,c.plotHeight);h(d,function(a){a.item._legendItemPos[1]=c.plotTop-c.spacing[0]+a.pos})},render:function(){var a=this.chart,d=a.renderer,b=this.group,f,e,k,r=this.box,m=this.options,B=this.padding;this.itemX=B;this.itemY=this.initialItemY;this.lastItemY=this.offsetWidth=
0;b||(this.group=b=d.g("legend").attr({zIndex:7}).add(),this.contentGroup=d.g().attr({zIndex:1}).add(b),this.scrollGroup=d.g().add(this.contentGroup));this.renderTitle();f=this.getAllItems();c(f,function(a,b){return(a.options&&a.options.legendIndex||0)-(b.options&&b.options.legendIndex||0)});m.reversed&&f.reverse();this.allItems=f;this.display=e=!!f.length;this.itemHeight=this.totalItemWidth=this.maxItemWidth=this.lastLineHeight=0;h(f,this.renderItem,this);h(f,this.layoutItem,this);f=(m.width||this.offsetWidth)+
B;k=this.lastItemY+this.lastLineHeight+this.titleHeight;k=this.handleOverflow(k);k+=B;r||(this.box=r=d.rect().addClass("highcharts-legend-box").attr({r:m.borderRadius}).add(b),r.isNew=!0);r.attr({stroke:m.borderColor,"stroke-width":m.borderWidth||0,fill:m.backgroundColor||"none"}).shadow(m.shadow);0<f&&0<k&&(r[r.isNew?"attr":"animate"](r.crisp.call({},{x:0,y:0,width:f,height:k},r.strokeWidth())),r.isNew=!1);r[e?"show":"hide"]();this.legendWidth=f;this.legendHeight=k;e&&(d=a.spacingBox,/(lth|ct|rth)/.test(this.getAlignment())&&
(d=p(d,{y:d.y+a.titleOffset+a.options.title.margin})),b.align(p(m,{width:f,height:k,verticalAlign:this.proximate?"top":m.verticalAlign}),!0,d));this.proximate||this.positionItems()},handleOverflow:function(a){var c=this,b=this.chart,f=b.renderer,e=this.options,k=e.y,l=this.padding,b=b.spacingBox.height+("top"===e.verticalAlign?-k:k)-l,k=e.maxHeight,r,m=this.clipRect,p=e.navigation,n=u(p.animation,!0),D=p.arrowSize||12,A=this.nav,t=this.pages,G,g=this.allItems,y=function(a){"number"===typeof a?m.attr({height:a}):
m&&(c.clipRect=m.destroy(),c.contentGroup.clip());c.contentGroup.div&&(c.contentGroup.div.style.clip=a?"rect("+l+"px,9999px,"+(l+a)+"px,0)":"auto")};"horizontal"!==e.layout||"middle"===e.verticalAlign||e.floating||(b/=2);k&&(b=Math.min(b,k));t.length=0;a>b&&!1!==p.enabled?(this.clipHeight=r=Math.max(b-20-this.titleHeight-l,0),this.currentPage=u(this.currentPage,1),this.fullHeight=a,h(g,function(a,b){var c=a._legendItemPos[1],d=Math.round(a.legendItem.getBBox().height),f=t.length;if(!f||c-t[f-1]>r&&
(G||c)!==t[f-1])t.push(G||c),f++;a.pageIx=f-1;G&&(g[b-1].pageIx=f-1);b===g.length-1&&c+d-t[f-1]>r&&(t.push(c),a.pageIx=f);c!==G&&(G=c)}),m||(m=c.clipRect=f.clipRect(0,l,9999,0),c.contentGroup.clip(m)),y(r),A||(this.nav=A=f.g().attr({zIndex:1}).add(this.group),this.up=f.symbol("triangle",0,0,D,D).on("click",function(){c.scroll(-1,n)}).add(A),this.pager=f.text("",15,10).addClass("highcharts-legend-navigation").css(p.style).add(A),this.down=f.symbol("triangle-down",0,0,D,D).on("click",function(){c.scroll(1,
n)}).add(A)),c.scroll(0),a=b):A&&(y(),this.nav=A.destroy(),this.scrollGroup.attr({translateY:1}),this.clipHeight=0);return a},scroll:function(a,c){var b=this.pages,d=b.length;a=this.currentPage+a;var e=this.clipHeight,k=this.options.navigation,l=this.pager,h=this.padding;a>d&&(a=d);0<a&&(void 0!==c&&f(c,this.chart),this.nav.attr({translateX:h,translateY:e+this.padding+7+this.titleHeight,visibility:"visible"}),this.up.attr({"class":1===a?"highcharts-legend-nav-inactive":"highcharts-legend-nav-active"}),
l.attr({text:a+"/"+d}),this.down.attr({x:18+this.pager.getBBox().width,"class":a===d?"highcharts-legend-nav-inactive":"highcharts-legend-nav-active"}),this.up.attr({fill:1===a?k.inactiveColor:k.activeColor}).css({cursor:1===a?"default":"pointer"}),this.down.attr({fill:a===d?k.inactiveColor:k.activeColor}).css({cursor:a===d?"default":"pointer"}),this.scrollOffset=-b[a-1]+this.initialItemY,this.scrollGroup.animate({translateY:this.scrollOffset}),this.currentPage=a,this.positionCheckboxes())}};a.LegendSymbolMixin=
{drawRectangle:function(a,c){var b=a.symbolHeight,d=a.options.squareSymbol;c.legendSymbol=this.chart.renderer.rect(d?(a.symbolWidth-b)/2:0,a.baseline-b+1,d?b:a.symbolWidth,b,u(a.options.symbolRadius,b/2)).addClass("highcharts-point").attr({zIndex:3}).add(c.legendGroup)},drawLineMarker:function(a){var c=this.options,b=c.marker,f=a.symbolWidth,e=a.symbolHeight,k=e/2,h=this.chart.renderer,l=this.legendGroup;a=a.baseline-Math.round(.3*a.fontMetrics.b);var r;r={"stroke-width":c.lineWidth||0};c.dashStyle&&
(r.dashstyle=c.dashStyle);this.legendLine=h.path(["M",0,a,"L",f,a]).addClass("highcharts-graph").attr(r).add(l);b&&!1!==b.enabled&&f&&(c=Math.min(u(b.radius,k),k),0===this.symbol.indexOf("url")&&(b=p(b,{width:e,height:e}),c=0),this.legendSymbol=b=h.symbol(this.symbol,f/2-c,a-c,2*c,2*c,b).addClass("highcharts-point").add(l),b.isMarker=!0)}};(/Trident\/7\.0/.test(k.navigator.userAgent)||t)&&r(a.Legend.prototype,"positionItem",function(a,c){var b=this,d=function(){c._legendItemPos&&a.call(b,c)};d();
setTimeout(d)})})(K);(function(a){var C=a.addEvent,E=a.animate,F=a.animObject,m=a.attr,h=a.doc,e=a.Axis,t=a.createElement,x=a.defaultOptions,p=a.discardElement,u=a.charts,f=a.css,c=a.defined,k=a.each,r=a.extend,l=a.find,d=a.fireEvent,b=a.grep,v=a.isNumber,q=a.isObject,I=a.isString,w=a.Legend,L=a.marginNames,B=a.merge,H=a.objectEach,n=a.Pointer,D=a.pick,A=a.pInt,M=a.removeEvent,G=a.seriesTypes,g=a.splat,y=a.syncTimeout,Q=a.win,N=a.Chart=function(){this.getArgs.apply(this,arguments)};a.chart=function(a,
b,c){return new N(a,b,c)};r(N.prototype,{callbacks:[],getArgs:function(){var a=[].slice.call(arguments);if(I(a[0])||a[0].nodeName)this.renderTo=a.shift();this.init(a[0],a[1])},init:function(b,c){var g,f,n=b.series,e=b.plotOptions||{};d(this,"init",{args:arguments},function(){b.series=null;g=B(x,b);for(f in g.plotOptions)g.plotOptions[f].tooltip=e[f]&&B(e[f].tooltip)||void 0;g.tooltip.userOptions=b.chart&&b.chart.forExport&&b.tooltip.userOptions||b.tooltip;g.series=b.series=n;this.userOptions=b;var k=
g.chart,h=k.events;this.margin=[];this.spacing=[];this.bounds={h:{},v:{}};this.labelCollectors=[];this.callback=c;this.isResizing=0;this.options=g;this.axes=[];this.series=[];this.time=b.time&&a.keys(b.time).length?new a.Time(b.time):a.time;this.hasCartesianSeries=k.showAxes;var l=this;l.index=u.length;u.push(l);a.chartCount++;h&&H(h,function(a,b){C(l,b,a)});l.xAxis=[];l.yAxis=[];l.pointCount=l.colorCounter=l.symbolCounter=0;d(l,"afterInit");l.firstRender()})},initSeries:function(b){var c=this.options.chart;
(c=G[b.type||c.type||c.defaultSeriesType])||a.error(17,!0);c=new c;c.init(this,b);return c},orderSeries:function(a){var b=this.series;for(a=a||0;a<b.length;a++)b[a]&&(b[a].index=a,b[a].name=b[a].getName())},isInsidePlot:function(a,b,c){var d=c?b:a;a=c?a:b;return 0<=d&&d<=this.plotWidth&&0<=a&&a<=this.plotHeight},redraw:function(b){d(this,"beforeRedraw");var c=this.axes,g=this.series,f=this.pointer,n=this.legend,e=this.userOptions.legend,h=this.isDirtyLegend,l,A,D=this.hasCartesianSeries,y=this.isDirtyBox,
q,w=this.renderer,m=w.isHidden(),G=[];this.setResponsive&&this.setResponsive(!1);a.setAnimation(b,this);m&&this.temporaryDisplay();this.layOutTitles();for(b=g.length;b--;)if(q=g[b],q.options.stacking&&(l=!0,q.isDirty)){A=!0;break}if(A)for(b=g.length;b--;)q=g[b],q.options.stacking&&(q.isDirty=!0);k(g,function(a){a.isDirty&&("point"===a.options.legendType?(a.updateTotals&&a.updateTotals(),h=!0):e&&(e.labelFormatter||e.labelFormat)&&(h=!0));a.isDirtyData&&d(a,"updatedData")});h&&n&&n.options.enabled&&
(n.render(),this.isDirtyLegend=!1);l&&this.getStacks();D&&k(c,function(a){a.updateNames();a.setScale()});this.getMargins();D&&(k(c,function(a){a.isDirty&&(y=!0)}),k(c,function(a){var b=a.min+","+a.max;a.extKey!==b&&(a.extKey=b,G.push(function(){d(a,"afterSetExtremes",r(a.eventArgs,a.getExtremes()));delete a.eventArgs}));(y||l)&&a.redraw()}));y&&this.drawChartBox();d(this,"predraw");k(g,function(a){(y||a.isDirty)&&a.visible&&a.redraw();a.isDirtyData=!1});f&&f.reset(!0);w.draw();d(this,"redraw");d(this,
"render");m&&this.temporaryDisplay(!0);k(G,function(a){a.call()})},get:function(a){function b(b){return b.id===a||b.options&&b.options.id===a}var c,d=this.series,g;c=l(this.axes,b)||l(this.series,b);for(g=0;!c&&g<d.length;g++)c=l(d[g].points||[],b);return c},getAxes:function(){var a=this,b=this.options,c=b.xAxis=g(b.xAxis||{}),b=b.yAxis=g(b.yAxis||{});d(this,"getAxes");k(c,function(a,b){a.index=b;a.isX=!0});k(b,function(a,b){a.index=b});c=c.concat(b);k(c,function(b){new e(a,b)});d(this,"afterGetAxes")},
getSelectedPoints:function(){var a=[];k(this.series,function(c){a=a.concat(b(c.data||[],function(a){return a.selected}))});return a},getSelectedSeries:function(){return b(this.series,function(a){return a.selected})},setTitle:function(a,b,c){var d=this,g=d.options,f;f=g.title=B({style:{color:"#333333",fontSize:g.isStock?"16px":"18px"}},g.title,a);g=g.subtitle=B({style:{color:"#666666"}},g.subtitle,b);k([["title",a,f],["subtitle",b,g]],function(a,b){var c=a[0],g=d[c],f=a[1];a=a[2];g&&f&&(d[c]=g=g.destroy());
a&&!g&&(d[c]=d.renderer.text(a.text,0,0,a.useHTML).attr({align:a.align,"class":"highcharts-"+c,zIndex:a.zIndex||4}).add(),d[c].update=function(a){d.setTitle(!b&&a,b&&a)},d[c].css(a.style))});d.layOutTitles(c)},layOutTitles:function(a){var b=0,c,d=this.renderer,g=this.spacingBox;k(["title","subtitle"],function(a){var c=this[a],f=this.options[a];a="title"===a?-3:f.verticalAlign?0:b+2;var n;c&&(n=f.style.fontSize,n=d.fontMetrics(n,c).b,c.css({width:(f.width||g.width+f.widthAdjust)+"px"}).align(r({y:a+
n},f),!1,"spacingBox"),f.floating||f.verticalAlign||(b=Math.ceil(b+c.getBBox(f.useHTML).height)))},this);c=this.titleOffset!==b;this.titleOffset=b;!this.isDirtyBox&&c&&(this.isDirtyBox=this.isDirtyLegend=c,this.hasRendered&&D(a,!0)&&this.isDirtyBox&&this.redraw())},getChartSize:function(){var b=this.options.chart,d=b.width,b=b.height,g=this.renderTo;c(d)||(this.containerWidth=a.getStyle(g,"width"));c(b)||(this.containerHeight=a.getStyle(g,"height"));this.chartWidth=Math.max(0,d||this.containerWidth||
600);this.chartHeight=Math.max(0,a.relativeLength(b,this.chartWidth)||(1<this.containerHeight?this.containerHeight:400))},temporaryDisplay:function(b){var c=this.renderTo;if(b)for(;c&&c.style;)c.hcOrigStyle&&(a.css(c,c.hcOrigStyle),delete c.hcOrigStyle),c.hcOrigDetached&&(h.body.removeChild(c),c.hcOrigDetached=!1),c=c.parentNode;else for(;c&&c.style;){h.body.contains(c)||c.parentNode||(c.hcOrigDetached=!0,h.body.appendChild(c));if("none"===a.getStyle(c,"display",!1)||c.hcOricDetached)c.hcOrigStyle=
{display:c.style.display,height:c.style.height,overflow:c.style.overflow},b={display:"block",overflow:"hidden"},c!==this.renderTo&&(b.height=0),a.css(c,b),c.offsetWidth||c.style.setProperty("display","block","important");c=c.parentNode;if(c===h.body)break}},setClassName:function(a){this.container.className="highcharts-container "+(a||"")},getContainer:function(){var b,c=this.options,g=c.chart,f,n;b=this.renderTo;var e=a.uniqueKey(),k;b||(this.renderTo=b=g.renderTo);I(b)&&(this.renderTo=b=h.getElementById(b));
b||a.error(13,!0);f=A(m(b,"data-highcharts-chart"));v(f)&&u[f]&&u[f].hasRendered&&u[f].destroy();m(b,"data-highcharts-chart",this.index);b.innerHTML="";g.skipClone||b.offsetWidth||this.temporaryDisplay();this.getChartSize();f=this.chartWidth;n=this.chartHeight;k=r({position:"relative",overflow:"hidden",width:f+"px",height:n+"px",textAlign:"left",lineHeight:"normal",zIndex:0,"-webkit-tap-highlight-color":"rgba(0,0,0,0)"},g.style);this.container=b=t("div",{id:e},k,b);this._cursor=b.style.cursor;this.renderer=
new (a[g.renderer]||a.Renderer)(b,f,n,null,g.forExport,c.exporting&&c.exporting.allowHTML);this.setClassName(g.className);this.renderer.setStyle(g.style);this.renderer.chartIndex=this.index;d(this,"afterGetContainer")},getMargins:function(a){var b=this.spacing,g=this.margin,f=this.titleOffset;this.resetMargins();f&&!c(g[0])&&(this.plotTop=Math.max(this.plotTop,f+this.options.title.margin+b[0]));this.legend&&this.legend.display&&this.legend.adjustMargins(g,b);d(this,"getMargins");a||this.getAxisMargins()},
getAxisMargins:function(){var a=this,b=a.axisOffset=[0,0,0,0],d=a.margin;a.hasCartesianSeries&&k(a.axes,function(a){a.visible&&a.getOffset()});k(L,function(g,f){c(d[f])||(a[g]+=b[f])});a.setChartSize()},reflow:function(b){var d=this,g=d.options.chart,f=d.renderTo,n=c(g.width)&&c(g.height),e=g.width||a.getStyle(f,"width"),g=g.height||a.getStyle(f,"height"),f=b?b.target:Q;if(!n&&!d.isPrinting&&e&&g&&(f===Q||f===h)){if(e!==d.containerWidth||g!==d.containerHeight)a.clearTimeout(d.reflowTimeout),d.reflowTimeout=
y(function(){d.container&&d.setSize(void 0,void 0,!1)},b?100:0);d.containerWidth=e;d.containerHeight=g}},setReflow:function(a){var b=this;!1===a||this.unbindReflow?!1===a&&this.unbindReflow&&(this.unbindReflow=this.unbindReflow()):(this.unbindReflow=C(Q,"resize",function(a){b.reflow(a)}),C(this,"destroy",this.unbindReflow))},setSize:function(b,c,g){var n=this,e=n.renderer;n.isResizing+=1;a.setAnimation(g,n);n.oldChartHeight=n.chartHeight;n.oldChartWidth=n.chartWidth;void 0!==b&&(n.options.chart.width=
b);void 0!==c&&(n.options.chart.height=c);n.getChartSize();b=e.globalAnimation;(b?E:f)(n.container,{width:n.chartWidth+"px",height:n.chartHeight+"px"},b);n.setChartSize(!0);e.setSize(n.chartWidth,n.chartHeight,g);k(n.axes,function(a){a.isDirty=!0;a.setScale()});n.isDirtyLegend=!0;n.isDirtyBox=!0;n.layOutTitles();n.getMargins();n.redraw(g);n.oldChartHeight=null;d(n,"resize");y(function(){n&&d(n,"endResize",null,function(){--n.isResizing})},F(b).duration)},setChartSize:function(a){var b=this.inverted,
c=this.renderer,g=this.chartWidth,f=this.chartHeight,n=this.options.chart,e=this.spacing,h=this.clipOffset,l,A,D,r;this.plotLeft=l=Math.round(this.plotLeft);this.plotTop=A=Math.round(this.plotTop);this.plotWidth=D=Math.max(0,Math.round(g-l-this.marginRight));this.plotHeight=r=Math.max(0,Math.round(f-A-this.marginBottom));this.plotSizeX=b?r:D;this.plotSizeY=b?D:r;this.plotBorderWidth=n.plotBorderWidth||0;this.spacingBox=c.spacingBox={x:e[3],y:e[0],width:g-e[3]-e[1],height:f-e[0]-e[2]};this.plotBox=
c.plotBox={x:l,y:A,width:D,height:r};g=2*Math.floor(this.plotBorderWidth/2);b=Math.ceil(Math.max(g,h[3])/2);c=Math.ceil(Math.max(g,h[0])/2);this.clipBox={x:b,y:c,width:Math.floor(this.plotSizeX-Math.max(g,h[1])/2-b),height:Math.max(0,Math.floor(this.plotSizeY-Math.max(g,h[2])/2-c))};a||k(this.axes,function(a){a.setAxisSize();a.setAxisTranslation()});d(this,"afterSetChartSize",{skipAxes:a})},resetMargins:function(){var a=this,b=a.options.chart;k(["margin","spacing"],function(c){var d=b[c],g=q(d)?d:
[d,d,d,d];k(["Top","Right","Bottom","Left"],function(d,f){a[c][f]=D(b[c+d],g[f])})});k(L,function(b,c){a[b]=D(a.margin[c],a.spacing[c])});a.axisOffset=[0,0,0,0];a.clipOffset=[0,0,0,0]},drawChartBox:function(){var a=this.options.chart,b=this.renderer,c=this.chartWidth,g=this.chartHeight,f=this.chartBackground,n=this.plotBackground,e=this.plotBorder,k,h=this.plotBGImage,l=a.backgroundColor,A=a.plotBackgroundColor,D=a.plotBackgroundImage,r,y=this.plotLeft,q=this.plotTop,w=this.plotWidth,m=this.plotHeight,
G=this.plotBox,B=this.clipRect,v=this.clipBox,p="animate";f||(this.chartBackground=f=b.rect().addClass("highcharts-background").add(),p="attr");k=a.borderWidth||0;r=k+(a.shadow?8:0);l={fill:l||"none"};if(k||f["stroke-width"])l.stroke=a.borderColor,l["stroke-width"]=k;f.attr(l).shadow(a.shadow);f[p]({x:r/2,y:r/2,width:c-r-k%2,height:g-r-k%2,r:a.borderRadius});p="animate";n||(p="attr",this.plotBackground=n=b.rect().addClass("highcharts-plot-background").add());n[p](G);n.attr({fill:A||"none"}).shadow(a.plotShadow);
D&&(h?h.animate(G):this.plotBGImage=b.image(D,y,q,w,m).add());B?B.animate({width:v.width,height:v.height}):this.clipRect=b.clipRect(v);p="animate";e||(p="attr",this.plotBorder=e=b.rect().addClass("highcharts-plot-border").attr({zIndex:1}).add());e.attr({stroke:a.plotBorderColor,"stroke-width":a.plotBorderWidth||0,fill:"none"});e[p](e.crisp({x:y,y:q,width:w,height:m},-e.strokeWidth()));this.isDirtyBox=!1;d(this,"afterDrawChartBox")},propFromSeries:function(){var a=this,b=a.options.chart,c,d=a.options.series,
g,f;k(["inverted","angular","polar"],function(n){c=G[b.type||b.defaultSeriesType];f=b[n]||c&&c.prototype[n];for(g=d&&d.length;!f&&g--;)(c=G[d[g].type])&&c.prototype[n]&&(f=!0);a[n]=f})},linkSeries:function(){var a=this,b=a.series;k(b,function(a){a.linkedSeries.length=0});k(b,function(b){var c=b.options.linkedTo;I(c)&&(c=":previous"===c?a.series[b.index-1]:a.get(c))&&c.linkedParent!==b&&(c.linkedSeries.push(b),b.linkedParent=c,b.visible=D(b.options.visible,c.options.visible,b.visible))});d(this,"afterLinkSeries")},
renderSeries:function(){k(this.series,function(a){a.translate();a.render()})},renderLabels:function(){var a=this,b=a.options.labels;b.items&&k(b.items,function(c){var d=r(b.style,c.style),g=A(d.left)+a.plotLeft,f=A(d.top)+a.plotTop+12;delete d.left;delete d.top;a.renderer.text(c.html,g,f).attr({zIndex:2}).css(d).add()})},render:function(){var a=this.axes,b=this.renderer,c=this.options,d,g,f;this.setTitle();this.legend=new w(this,c.legend);this.getStacks&&this.getStacks();this.getMargins(!0);this.setChartSize();
c=this.plotWidth;d=this.plotHeight=Math.max(this.plotHeight-21,0);k(a,function(a){a.setScale()});this.getAxisMargins();g=1.1<c/this.plotWidth;f=1.05<d/this.plotHeight;if(g||f)k(a,function(a){(a.horiz&&g||!a.horiz&&f)&&a.setTickInterval(!0)}),this.getMargins();this.drawChartBox();this.hasCartesianSeries&&k(a,function(a){a.visible&&a.render()});this.seriesGroup||(this.seriesGroup=b.g("series-group").attr({zIndex:3}).add());this.renderSeries();this.renderLabels();this.addCredits();this.setResponsive&&
this.setResponsive();this.hasRendered=!0},addCredits:function(a){var b=this;a=B(!0,this.options.credits,a);a.enabled&&!this.credits&&(this.credits=this.renderer.text(a.text+(this.mapCredits||""),0,0).addClass("highcharts-credits").on("click",function(){a.href&&(Q.location.href=a.href)}).attr({align:a.position.align,zIndex:8}).css(a.style).add().align(a.position),this.credits.update=function(a){b.credits=b.credits.destroy();b.addCredits(a)})},destroy:function(){var b=this,c=b.axes,g=b.series,f=b.container,
n,e=f&&f.parentNode;d(b,"destroy");b.renderer.forExport?a.erase(u,b):u[b.index]=void 0;a.chartCount--;b.renderTo.removeAttribute("data-highcharts-chart");M(b);for(n=c.length;n--;)c[n]=c[n].destroy();this.scroller&&this.scroller.destroy&&this.scroller.destroy();for(n=g.length;n--;)g[n]=g[n].destroy();k("title subtitle chartBackground plotBackground plotBGImage plotBorder seriesGroup clipRect credits pointer rangeSelector legend resetZoomButton tooltip renderer".split(" "),function(a){var c=b[a];c&&
c.destroy&&(b[a]=c.destroy())});f&&(f.innerHTML="",M(f),e&&p(f));H(b,function(a,c){delete b[c]})},firstRender:function(){var a=this,b=a.options;if(!a.isReadyToRender||a.isReadyToRender()){a.getContainer();a.resetMargins();a.setChartSize();a.propFromSeries();a.getAxes();k(b.series||[],function(b){a.initSeries(b)});a.linkSeries();d(a,"beforeRender");n&&(a.pointer=new n(a,b));a.render();if(!a.renderer.imgCount&&a.onload)a.onload();a.temporaryDisplay(!0)}},onload:function(){k([this.callback].concat(this.callbacks),
function(a){a&&void 0!==this.index&&a.apply(this,[this])},this);d(this,"load");d(this,"render");c(this.index)&&this.setReflow(this.options.chart.reflow);this.onload=null}})})(K);(function(a){var C=a.addEvent,E=a.Chart,F=a.each;C(E,"afterSetChartSize",function(m){var h=this.options.chart.scrollablePlotArea;(h=h&&h.minWidth)&&!this.renderer.forExport&&(this.scrollablePixels=h=Math.max(0,h-this.chartWidth))&&(this.plotWidth+=h,this.clipBox.width+=h,m.skipAxes||F(this.axes,function(e){1===e.side?e.getPlotLinePath=
function(){var h=this.right,m;this.right=h-e.chart.scrollablePixels;m=a.Axis.prototype.getPlotLinePath.apply(this,arguments);this.right=h;return m}:(e.setAxisSize(),e.setAxisTranslation())}))});C(E,"render",function(){this.scrollablePixels?(this.setUpScrolling&&this.setUpScrolling(),this.applyFixed()):this.fixedDiv&&this.applyFixed()});E.prototype.setUpScrolling=function(){this.scrollingContainer=a.createElement("div",{className:"highcharts-scrolling"},{overflowX:"auto",WebkitOverflowScrolling:"touch"},
this.renderTo);this.innerContainer=a.createElement("div",{className:"highcharts-inner-container"},null,this.scrollingContainer);this.innerContainer.appendChild(this.container);this.setUpScrolling=null};E.prototype.applyFixed=function(){var m=this.container,h,e,t=!this.fixedDiv;t&&(this.fixedDiv=a.createElement("div",{className:"highcharts-fixed"},{position:"absolute",overflow:"hidden",pointerEvents:"none",zIndex:2},null,!0),this.renderTo.insertBefore(this.fixedDiv,this.renderTo.firstChild),this.fixedRenderer=
h=new a.Renderer(this.fixedDiv,0,0),this.scrollableMask=h.path().attr({fill:a.color(this.options.chart.backgroundColor||"#fff").setOpacity(.85).get(),zIndex:-1}).addClass("highcharts-scrollable-mask").add(),a.each([this.inverted?".highcharts-xaxis":".highcharts-yaxis",this.inverted?".highcharts-xaxis-labels":".highcharts-yaxis-labels",".highcharts-contextbutton",".highcharts-credits",".highcharts-legend",".highcharts-subtitle",".highcharts-title",".highcharts-legend-checkbox"],function(e){a.each(m.querySelectorAll(e),
function(a){(a.namespaceURI===h.SVG_NS?h.box:h.box.parentNode).appendChild(a);a.style.pointerEvents="auto"})}));this.fixedRenderer.setSize(this.chartWidth,this.chartHeight);e=this.chartWidth+this.scrollablePixels;a.stop(this.container);this.container.style.width=e+"px";this.renderer.boxWrapper.attr({width:e,height:this.chartHeight,viewBox:[0,0,e,this.chartHeight].join(" ")});this.chartBackground.attr({width:e});t&&(e=this.options.chart.scrollablePlotArea,e.scrollPositionX&&(this.scrollingContainer.scrollLeft=
this.scrollablePixels*e.scrollPositionX));t=this.axisOffset;e=this.plotTop-t[0]-1;var t=this.plotTop+this.plotHeight+t[2],x=this.plotLeft+this.plotWidth-this.scrollablePixels;this.scrollableMask.attr({d:this.scrollablePixels?["M",0,e,"L",this.plotLeft-1,e,"L",this.plotLeft-1,t,"L",0,t,"Z","M",x,e,"L",this.chartWidth,e,"L",this.chartWidth,t,"L",x,t,"Z"]:["M",0,0]})}})(K);(function(a){var C,E=a.each,F=a.extend,m=a.erase,h=a.fireEvent,e=a.format,t=a.isArray,x=a.isNumber,p=a.pick,u=a.removeEvent;a.Point=
C=function(){};a.Point.prototype={init:function(a,c,e){this.series=a;this.color=a.color;this.applyOptions(c,e);a.options.colorByPoint?(c=a.options.colors||a.chart.options.colors,this.color=this.color||c[a.colorCounter],c=c.length,e=a.colorCounter,a.colorCounter++,a.colorCounter===c&&(a.colorCounter=0)):e=a.colorIndex;this.colorIndex=p(this.colorIndex,e);a.chart.pointCount++;h(this,"afterInit");return this},applyOptions:function(a,c){var f=this.series,e=f.options.pointValKey||f.pointValKey;a=C.prototype.optionsToObject.call(this,
a);F(this,a);this.options=this.options?F(this.options,a):a;a.group&&delete this.group;e&&(this.y=this[e]);this.isNull=p(this.isValid&&!this.isValid(),null===this.x||!x(this.y,!0));this.selected&&(this.state="select");"name"in this&&void 0===c&&f.xAxis&&f.xAxis.hasNames&&(this.x=f.xAxis.nameToX(this));void 0===this.x&&f&&(this.x=void 0===c?f.autoIncrement(this):c);return this},setNestedProperty:function(f,c,e){e=e.split(".");a.reduce(e,function(f,e,d,b){f[e]=b.length-1===d?c:a.isObject(f[e],!0)?f[e]:
{};return f[e]},f);return f},optionsToObject:function(f){var c={},e=this.series,h=e.options.keys,l=h||e.pointArrayMap||["y"],d=l.length,b=0,m=0;if(x(f)||null===f)c[l[0]]=f;else if(t(f))for(!h&&f.length>d&&(e=typeof f[0],"string"===e?c.name=f[0]:"number"===e&&(c.x=f[0]),b++);m<d;)h&&void 0===f[b]||(0<l[m].indexOf(".")?a.Point.prototype.setNestedProperty(c,f[b],l[m]):c[l[m]]=f[b]),b++,m++;else"object"===typeof f&&(c=f,f.dataLabels&&(e._hasPointLabels=!0),f.marker&&(e._hasPointMarkers=!0));return c},
getClassName:function(){return"highcharts-point"+(this.selected?" highcharts-point-select":"")+(this.negative?" highcharts-negative":"")+(this.isNull?" highcharts-null-point":"")+(void 0!==this.colorIndex?" highcharts-color-"+this.colorIndex:"")+(this.options.className?" "+this.options.className:"")+(this.zone&&this.zone.className?" "+this.zone.className.replace("highcharts-negative",""):"")},getZone:function(){var a=this.series,c=a.zones,a=a.zoneAxis||"y",e=0,h;for(h=c[e];this[a]>=h.value;)h=c[++e];
this.nonZonedColor||(this.nonZonedColor=this.color);this.color=h&&h.color&&!this.options.color?h.color:this.nonZonedColor;return h},destroy:function(){var a=this.series.chart,c=a.hoverPoints,e;a.pointCount--;c&&(this.setState(),m(c,this),c.length||(a.hoverPoints=null));if(this===a.hoverPoint)this.onMouseOut();if(this.graphic||this.dataLabel)u(this),this.destroyElements();this.legendItem&&a.legend.destroyItem(this);for(e in this)this[e]=null},destroyElements:function(){for(var a=["graphic","dataLabel",
"dataLabelUpper","connector","shadowGroup"],c,e=6;e--;)c=a[e],this[c]&&(this[c]=this[c].destroy())},getLabelConfig:function(){return{x:this.category,y:this.y,color:this.color,colorIndex:this.colorIndex,key:this.name||this.category,series:this.series,point:this,percentage:this.percentage,total:this.total||this.stackTotal}},tooltipFormatter:function(a){var c=this.series,f=c.tooltipOptions,h=p(f.valueDecimals,""),l=f.valuePrefix||"",d=f.valueSuffix||"";E(c.pointArrayMap||["y"],function(b){b="{point."+
b;if(l||d)a=a.replace(RegExp(b+"}","g"),l+b+"}"+d);a=a.replace(RegExp(b+"}","g"),b+":,."+h+"f}")});return e(a,{point:this,series:this.series},c.chart.time)},firePointEvent:function(a,c,e){var f=this,k=this.series.options;(k.point.events[a]||f.options&&f.options.events&&f.options.events[a])&&this.importEvents();"click"===a&&k.allowPointSelect&&(e=function(a){f.select&&f.select(null,a.ctrlKey||a.metaKey||a.shiftKey)});h(this,a,c,e)},visible:!0}})(K);(function(a){var C=a.addEvent,E=a.animObject,F=a.arrayMax,
m=a.arrayMin,h=a.correctFloat,e=a.defaultOptions,t=a.defaultPlotOptions,x=a.defined,p=a.each,u=a.erase,f=a.extend,c=a.fireEvent,k=a.grep,r=a.isArray,l=a.isNumber,d=a.isString,b=a.merge,v=a.objectEach,q=a.pick,I=a.removeEvent,w=a.splat,L=a.SVGElement,B=a.syncTimeout,H=a.win;a.Series=a.seriesType("line",null,{lineWidth:2,allowPointSelect:!1,showCheckbox:!1,animation:{duration:1E3},events:{},marker:{lineWidth:0,lineColor:"#ffffff",enabledThreshold:2,radius:4,states:{normal:{animation:!0},hover:{animation:{duration:50},
enabled:!0,radiusPlus:2,lineWidthPlus:1},select:{fillColor:"#cccccc",lineColor:"#000000",lineWidth:2}}},point:{events:{}},dataLabels:{align:"center",formatter:function(){return null===this.y?"":a.numberFormat(this.y,-1)},style:{fontSize:"11px",fontWeight:"bold",color:"contrast",textOutline:"1px contrast"},verticalAlign:"bottom",x:0,y:0,padding:5},cropThreshold:300,pointRange:0,softThreshold:!0,states:{normal:{animation:!0},hover:{animation:{duration:50},lineWidthPlus:1,marker:{},halo:{size:10,opacity:.25}},
select:{}},stickyTracking:!0,turboThreshold:1E3,findNearestPointBy:"x"},{isCartesian:!0,pointClass:a.Point,sorted:!0,requireSorting:!0,directTouch:!1,axisTypes:["xAxis","yAxis"],colorCounter:0,parallelArrays:["x","y"],coll:"series",init:function(a,b){var d=this,n,e=a.series,g;d.chart=a;d.options=b=d.setOptions(b);d.linkedSeries=[];d.bindAxes();f(d,{name:b.name,state:"",visible:!1!==b.visible,selected:!0===b.selected});n=b.events;v(n,function(a,b){C(d,b,a)});if(n&&n.click||b.point&&b.point.events&&
b.point.events.click||b.allowPointSelect)a.runTrackerClick=!0;d.getColor();d.getSymbol();p(d.parallelArrays,function(a){d[a+"Data"]=[]});d.setData(b.data,!1);d.isCartesian&&(a.hasCartesianSeries=!0);e.length&&(g=e[e.length-1]);d._i=q(g&&g._i,-1)+1;a.orderSeries(this.insert(e));c(this,"afterInit")},insert:function(a){var b=this.options.index,c;if(l(b)){for(c=a.length;c--;)if(b>=q(a[c].options.index,a[c]._i)){a.splice(c+1,0,this);break}-1===c&&a.unshift(this);c+=1}else a.push(this);return q(c,a.length-
1)},bindAxes:function(){var b=this,c=b.options,d=b.chart,f;p(b.axisTypes||[],function(n){p(d[n],function(a){f=a.options;if(c[n]===f.index||void 0!==c[n]&&c[n]===f.id||void 0===c[n]&&0===f.index)b.insert(a.series),b[n]=a,a.isDirty=!0});b[n]||b.optionalAxis===n||a.error(18,!0)})},updateParallelArrays:function(a,b){var c=a.series,d=arguments,f=l(b)?function(d){var g="y"===d&&c.toYData?c.toYData(a):a[d];c[d+"Data"][b]=g}:function(a){Array.prototype[b].apply(c[a+"Data"],Array.prototype.slice.call(d,2))};
p(c.parallelArrays,f)},autoIncrement:function(){var a=this.options,b=this.xIncrement,c,d=a.pointIntervalUnit,f=this.chart.time,b=q(b,a.pointStart,0);this.pointInterval=c=q(this.pointInterval,a.pointInterval,1);d&&(a=new f.Date(b),"day"===d?f.set("Date",a,f.get("Date",a)+c):"month"===d?f.set("Month",a,f.get("Month",a)+c):"year"===d&&f.set("FullYear",a,f.get("FullYear",a)+c),c=a.getTime()-b);this.xIncrement=b+c;return b},setOptions:function(a){var d=this.chart,f=d.options,n=f.plotOptions,k=(d.userOptions||
{}).plotOptions||{},g=n[this.type];this.userOptions=a;d=b(g,n.series,a);this.tooltipOptions=b(e.tooltip,e.plotOptions.series&&e.plotOptions.series.tooltip,e.plotOptions[this.type].tooltip,f.tooltip.userOptions,n.series&&n.series.tooltip,n[this.type].tooltip,a.tooltip);this.stickyTracking=q(a.stickyTracking,k[this.type]&&k[this.type].stickyTracking,k.series&&k.series.stickyTracking,this.tooltipOptions.shared&&!this.noSharedTooltip?!0:d.stickyTracking);null===g.marker&&delete d.marker;this.zoneAxis=
d.zoneAxis;a=this.zones=(d.zones||[]).slice();!d.negativeColor&&!d.negativeFillColor||d.zones||a.push({value:d[this.zoneAxis+"Threshold"]||d.threshold||0,className:"highcharts-negative",color:d.negativeColor,fillColor:d.negativeFillColor});a.length&&x(a[a.length-1].value)&&a.push({color:this.color,fillColor:this.fillColor});c(this,"afterSetOptions",{options:d});return d},getName:function(){return this.name||"Series "+(this.index+1)},getCyclic:function(a,b,c){var d,f=this.chart,g=this.userOptions,
n=a+"Index",e=a+"Counter",k=c?c.length:q(f.options.chart[a+"Count"],f[a+"Count"]);b||(d=q(g[n],g["_"+n]),x(d)||(f.series.length||(f[e]=0),g["_"+n]=d=f[e]%k,f[e]+=1),c&&(b=c[d]));void 0!==d&&(this[n]=d);this[a]=b},getColor:function(){this.options.colorByPoint?this.options.color=null:this.getCyclic("color",this.options.color||t[this.type].color,this.chart.options.colors)},getSymbol:function(){this.getCyclic("symbol",this.options.marker.symbol,this.chart.options.symbols)},drawLegendSymbol:a.LegendSymbolMixin.drawLineMarker,
updateData:function(b){var c=this.options,d=this.points,f=[],n,g,e,k=this.requireSorting;p(b,function(b){var g;g=a.defined(b)&&this.pointClass.prototype.optionsToObject.call({series:this},b).x;l(g)&&(g=a.inArray(g,this.xData,e),-1===g||d[g].touched?f.push(b):b!==c.data[g]?(d[g].update(b,!1,null,!1),d[g].touched=!0,k&&(e=g+1)):d[g]&&(d[g].touched=!0),n=!0)},this);if(n)for(b=d.length;b--;)g=d[b],g.touched||g.remove(!1),g.touched=!1;else if(b.length===d.length)p(b,function(a,b){d[b].update&&a!==c.data[b]&&
d[b].update(a,!1,null,!1)});else return!1;p(f,function(a){this.addPoint(a,!1)},this);return!0},setData:function(b,c,f,e){var n=this,g=n.points,k=g&&g.length||0,h,A=n.options,D=n.chart,m=null,w=n.xAxis,B=A.turboThreshold,v=this.xData,t=this.yData,u=(h=n.pointArrayMap)&&h.length,H;b=b||[];h=b.length;c=q(c,!0);!1!==e&&h&&k&&!n.cropped&&!n.hasGroupedData&&n.visible&&!n.isSeriesBoosting&&(H=this.updateData(b));if(!H){n.xIncrement=null;n.colorCounter=0;p(this.parallelArrays,function(a){n[a+"Data"].length=
0});if(B&&h>B){for(f=0;null===m&&f<h;)m=b[f],f++;if(l(m))for(f=0;f<h;f++)v[f]=this.autoIncrement(),t[f]=b[f];else if(r(m))if(u)for(f=0;f<h;f++)m=b[f],v[f]=m[0],t[f]=m.slice(1,u+1);else for(f=0;f<h;f++)m=b[f],v[f]=m[0],t[f]=m[1];else a.error(12)}else for(f=0;f<h;f++)void 0!==b[f]&&(m={series:n},n.pointClass.prototype.applyOptions.apply(m,[b[f]]),n.updateParallelArrays(m,f));t&&d(t[0])&&a.error(14,!0);n.data=[];n.options.data=n.userOptions.data=b;for(f=k;f--;)g[f]&&g[f].destroy&&g[f].destroy();w&&(w.minRange=
w.userMinRange);n.isDirty=D.isDirtyBox=!0;n.isDirtyData=!!g;f=!1}"point"===A.legendType&&(this.processData(),this.generatePoints());c&&D.redraw(f)},processData:function(b){var c=this.xData,d=this.yData,f=c.length,n;n=0;var g,e,k=this.xAxis,h,l=this.options;h=l.cropThreshold;var r=this.getExtremesFromAll||l.getExtremesFromAll,m=this.isCartesian,l=k&&k.val2lin,q=k&&k.isLog,w=this.requireSorting,B,p;if(m&&!this.isDirty&&!k.isDirty&&!this.yAxis.isDirty&&!b)return!1;k&&(b=k.getExtremes(),B=b.min,p=b.max);
m&&this.sorted&&!r&&(!h||f>h||this.forceCrop)&&(c[f-1]<B||c[0]>p?(c=[],d=[]):this.yData&&(c[0]<B||c[f-1]>p)&&(n=this.cropData(this.xData,this.yData,B,p),c=n.xData,d=n.yData,n=n.start,g=!0));for(h=c.length||1;--h;)f=q?l(c[h])-l(c[h-1]):c[h]-c[h-1],0<f&&(void 0===e||f<e)?e=f:0>f&&w&&(a.error(15),w=!1);this.cropped=g;this.cropStart=n;this.processedXData=c;this.processedYData=d;this.closestPointRange=e},cropData:function(a,b,c,d,f){var g=a.length,n=0,e=g,k;f=q(f,this.cropShoulder,1);for(k=0;k<g;k++)if(a[k]>=
c){n=Math.max(0,k-f);break}for(c=k;c<g;c++)if(a[c]>d){e=c+f;break}return{xData:a.slice(n,e),yData:b.slice(n,e),start:n,end:e}},generatePoints:function(){var a=this.options,b=a.data,c=this.data,d,e=this.processedXData,g=this.processedYData,k=this.pointClass,h=e.length,l=this.cropStart||0,r,m=this.hasGroupedData,a=a.keys,q,B=[],p;c||m||(c=[],c.length=b.length,c=this.data=c);a&&m&&(this.options.keys=!1);for(p=0;p<h;p++)r=l+p,m?(q=(new k).init(this,[e[p]].concat(w(g[p]))),q.dataGroup=this.groupMap[p],
q.dataGroup.options&&(q.options=q.dataGroup.options,f(q,q.dataGroup.options))):(q=c[r])||void 0===b[r]||(c[r]=q=(new k).init(this,b[r],e[p])),q&&(q.index=r,B[p]=q);this.options.keys=a;if(c&&(h!==(d=c.length)||m))for(p=0;p<d;p++)p!==l||m||(p+=h),c[p]&&(c[p].destroyElements(),c[p].plotX=void 0);this.data=c;this.points=B},getExtremes:function(a){var b=this.yAxis,c=this.processedXData,d,f=[],g=0;d=this.xAxis.getExtremes();var n=d.min,e=d.max,k,h,q=this.requireSorting?1:0,w,B;a=a||this.stackedYData||this.processedYData||
[];d=a.length;for(B=0;B<d;B++)if(h=c[B],w=a[B],k=(l(w,!0)||r(w))&&(!b.positiveValuesOnly||w.length||0<w),h=this.getExtremesFromAll||this.options.getExtremesFromAll||this.cropped||(c[B+q]||h)>=n&&(c[B-q]||h)<=e,k&&h)if(k=w.length)for(;k--;)"number"===typeof w[k]&&(f[g++]=w[k]);else f[g++]=w;this.dataMin=m(f);this.dataMax=F(f)},translate:function(){this.processedXData||this.processData();this.generatePoints();var a=this.options,b=a.stacking,d=this.xAxis,f=d.categories,e=this.yAxis,g=this.points,k=g.length,
r=!!this.modifyValue,m=a.pointPlacement,w="between"===m||l(m),B=a.threshold,p=a.startFromThreshold?B:0,v,t,u,H,I=Number.MAX_VALUE;"between"===m&&(m=.5);l(m)&&(m*=q(a.pointRange||d.pointRange));for(a=0;a<k;a++){var L=g[a],C=L.x,E=L.y;t=L.low;var F=b&&e.stacks[(this.negStacks&&E<(p?0:B)?"-":"")+this.stackKey],K;e.positiveValuesOnly&&null!==E&&0>=E&&(L.isNull=!0);L.plotX=v=h(Math.min(Math.max(-1E5,d.translate(C,0,0,0,1,m,"flags"===this.type)),1E5));b&&this.visible&&!L.isNull&&F&&F[C]&&(H=this.getStackIndicator(H,
C,this.index),K=F[C],E=K.points[H.key],t=E[0],E=E[1],t===p&&H.key===F[C].base&&(t=q(l(B)&&B,e.min)),e.positiveValuesOnly&&0>=t&&(t=null),L.total=L.stackTotal=K.total,L.percentage=K.total&&L.y/K.total*100,L.stackY=E,K.setOffset(this.pointXOffset||0,this.barW||0));L.yBottom=x(t)?Math.min(Math.max(-1E5,e.translate(t,0,1,0,1)),1E5):null;r&&(E=this.modifyValue(E,L));L.plotY=t="number"===typeof E&&Infinity!==E?Math.min(Math.max(-1E5,e.translate(E,0,1,0,1)),1E5):void 0;L.isInside=void 0!==t&&0<=t&&t<=e.len&&
0<=v&&v<=d.len;L.clientX=w?h(d.translate(C,0,0,0,1,m)):v;L.negative=L.y<(B||0);L.category=f&&void 0!==f[L.x]?f[L.x]:L.x;L.isNull||(void 0!==u&&(I=Math.min(I,Math.abs(v-u))),u=v);L.zone=this.zones.length&&L.getZone()}this.closestPointRangePx=I;c(this,"afterTranslate")},getValidPoints:function(a,b){var c=this.chart;return k(a||this.points||[],function(a){return b&&!c.isInsidePlot(a.plotX,a.plotY,c.inverted)?!1:!a.isNull})},setClip:function(a){var b=this.chart,c=this.options,d=b.renderer,f=b.inverted,
g=this.clipBox,e=g||b.clipBox,n=this.sharedClipKey||["_sharedClip",a&&a.duration,a&&a.easing,e.height,c.xAxis,c.yAxis].join(),k=b[n],h=b[n+"m"];k||(a&&(e.width=0,f&&(e.x=b.plotSizeX),b[n+"m"]=h=d.clipRect(f?b.plotSizeX+99:-99,f?-b.plotLeft:-b.plotTop,99,f?b.chartWidth:b.chartHeight)),b[n]=k=d.clipRect(e),k.count={length:0});a&&!k.count[this.index]&&(k.count[this.index]=!0,k.count.length+=1);!1!==c.clip&&(this.group.clip(a||g?k:b.clipRect),this.markerGroup.clip(h),this.sharedClipKey=n);a||(k.count[this.index]&&
(delete k.count[this.index],--k.count.length),0===k.count.length&&n&&b[n]&&(g||(b[n]=b[n].destroy()),b[n+"m"]&&(b[n+"m"]=b[n+"m"].destroy())))},animate:function(a){var b=this.chart,c=E(this.options.animation),d;a?this.setClip(c):(d=this.sharedClipKey,(a=b[d])&&a.animate({width:b.plotSizeX,x:0},c),b[d+"m"]&&b[d+"m"].animate({width:b.plotSizeX+99,x:0},c),this.animate=null)},afterAnimate:function(){this.setClip();c(this,"afterAnimate");this.finishedAnimating=!0},drawPoints:function(){var a=this.points,
b=this.chart,c,d,f,g,e=this.options.marker,k,h,l,r=this[this.specialGroup]||this.markerGroup,m,w=q(e.enabled,this.xAxis.isRadial?!0:null,this.closestPointRangePx>=e.enabledThreshold*e.radius);if(!1!==e.enabled||this._hasPointMarkers)for(c=0;c<a.length;c++)d=a[c],g=d.graphic,k=d.marker||{},h=!!d.marker,f=w&&void 0===k.enabled||k.enabled,l=d.isInside,f&&!d.isNull?(f=q(k.symbol,this.symbol),m=this.markerAttribs(d,d.selected&&"select"),g?g[l?"show":"hide"](!0).animate(m):l&&(0<m.width||d.hasImage)&&(d.graphic=
g=b.renderer.symbol(f,m.x,m.y,m.width,m.height,h?k:e).add(r)),g&&g.attr(this.pointAttribs(d,d.selected&&"select")),g&&g.addClass(d.getClassName(),!0)):g&&(d.graphic=g.destroy())},markerAttribs:function(a,b){var c=this.options.marker,d=a.marker||{},f=d.symbol||c.symbol,g=q(d.radius,c.radius);b&&(c=c.states[b],b=d.states&&d.states[b],g=q(b&&b.radius,c&&c.radius,g+(c&&c.radiusPlus||0)));a.hasImage=f&&0===f.indexOf("url");a.hasImage&&(g=0);a={x:Math.floor(a.plotX)-g,y:a.plotY-g};g&&(a.width=a.height=
2*g);return a},pointAttribs:function(a,b){var c=this.options.marker,d=a&&a.options,f=d&&d.marker||{},g=this.color,e=d&&d.color,n=a&&a.color,d=q(f.lineWidth,c.lineWidth);a=a&&a.zone&&a.zone.color;g=e||a||n||g;a=f.fillColor||c.fillColor||g;g=f.lineColor||c.lineColor||g;b&&(c=c.states[b],b=f.states&&f.states[b]||{},d=q(b.lineWidth,c.lineWidth,d+q(b.lineWidthPlus,c.lineWidthPlus,0)),a=b.fillColor||c.fillColor||a,g=b.lineColor||c.lineColor||g);return{stroke:g,"stroke-width":d,fill:a}},destroy:function(){var b=
this,d=b.chart,f=/AppleWebKit\/533/.test(H.navigator.userAgent),e,k,g=b.data||[],h,l;c(b,"destroy");I(b);p(b.axisTypes||[],function(a){(l=b[a])&&l.series&&(u(l.series,b),l.isDirty=l.forceRedraw=!0)});b.legendItem&&b.chart.legend.destroyItem(b);for(k=g.length;k--;)(h=g[k])&&h.destroy&&h.destroy();b.points=null;a.clearTimeout(b.animationTimeout);v(b,function(a,b){a instanceof L&&!a.survive&&(e=f&&"group"===b?"hide":"destroy",a[e]())});d.hoverSeries===b&&(d.hoverSeries=null);u(d.series,b);d.orderSeries();
v(b,function(a,c){delete b[c]})},getGraphPath:function(a,b,c){var d=this,f=d.options,g=f.step,e,n=[],k=[],h;a=a||d.points;(e=a.reversed)&&a.reverse();(g={right:1,center:2}[g]||g&&3)&&e&&(g=4-g);!f.connectNulls||b||c||(a=this.getValidPoints(a));p(a,function(e,l){var m=e.plotX,r=e.plotY,q=a[l-1];(e.leftCliff||q&&q.rightCliff)&&!c&&(h=!0);e.isNull&&!x(b)&&0<l?h=!f.connectNulls:e.isNull&&!b?h=!0:(0===l||h?l=["M",e.plotX,e.plotY]:d.getPointSpline?l=d.getPointSpline(a,e,l):g?(l=1===g?["L",q.plotX,r]:2===
g?["L",(q.plotX+m)/2,q.plotY,"L",(q.plotX+m)/2,r]:["L",m,q.plotY],l.push("L",m,r)):l=["L",m,r],k.push(e.x),g&&(k.push(e.x),2===g&&k.push(e.x)),n.push.apply(n,l),h=!1)});n.xMap=k;return d.graphPath=n},drawGraph:function(){var a=this,b=this.options,c=(this.gappedPath||this.getGraphPath).call(this),d=[["graph","highcharts-graph",b.lineColor||this.color,b.dashStyle]],d=a.getZonesGraphs(d);p(d,function(d,f){var g=d[0],e=a[g];e?(e.endX=a.preventGraphAnimation?null:c.xMap,e.animate({d:c})):c.length&&(a[g]=
a.chart.renderer.path(c).addClass(d[1]).attr({zIndex:1}).add(a.group),e={stroke:d[2],"stroke-width":b.lineWidth,fill:a.fillGraph&&a.color||"none"},d[3]?e.dashstyle=d[3]:"square"!==b.linecap&&(e["stroke-linecap"]=e["stroke-linejoin"]="round"),e=a[g].attr(e).shadow(2>f&&b.shadow));e&&(e.startX=c.xMap,e.isArea=c.isArea)})},getZonesGraphs:function(a){p(this.zones,function(b,c){a.push(["zone-graph-"+c,"highcharts-graph highcharts-zone-graph-"+c+" "+(b.className||""),b.color||this.color,b.dashStyle||this.options.dashStyle])},
this);return a},applyZones:function(){var a=this,b=this.chart,c=b.renderer,d=this.zones,f,g,e=this.clips||[],k,h=this.graph,l=this.area,m=Math.max(b.chartWidth,b.chartHeight),r=this[(this.zoneAxis||"y")+"Axis"],w,B,v=b.inverted,t,H,u,x,I=!1;d.length&&(h||l)&&r&&void 0!==r.min&&(B=r.reversed,t=r.horiz,h&&!this.showLine&&h.hide(),l&&l.hide(),w=r.getExtremes(),p(d,function(d,n){f=B?t?b.plotWidth:0:t?0:r.toPixels(w.min);f=Math.min(Math.max(q(g,f),0),m);g=Math.min(Math.max(Math.round(r.toPixels(q(d.value,
w.max),!0)),0),m);I&&(f=g=r.toPixels(w.max));H=Math.abs(f-g);u=Math.min(f,g);x=Math.max(f,g);r.isXAxis?(k={x:v?x:u,y:0,width:H,height:m},t||(k.x=b.plotHeight-k.x)):(k={x:0,y:v?x:u,width:m,height:H},t&&(k.y=b.plotWidth-k.y));v&&c.isVML&&(k=r.isXAxis?{x:0,y:B?u:x,height:k.width,width:b.chartWidth}:{x:k.y-b.plotLeft-b.spacingBox.x,y:0,width:k.height,height:b.chartHeight});e[n]?e[n].animate(k):(e[n]=c.clipRect(k),h&&a["zone-graph-"+n].clip(e[n]),l&&a["zone-area-"+n].clip(e[n]));I=d.value>w.max;a.resetZones&&
0===g&&(g=void 0)}),this.clips=e)},invertGroups:function(a){function b(){p(["group","markerGroup"],function(b){c[b]&&(d.renderer.isVML&&c[b].attr({width:c.yAxis.len,height:c.xAxis.len}),c[b].width=c.yAxis.len,c[b].height=c.xAxis.len,c[b].invert(a))})}var c=this,d=c.chart,f;c.xAxis&&(f=C(d,"resize",b),C(c,"destroy",f),b(a),c.invertGroups=b)},plotGroup:function(a,b,c,d,f){var g=this[a],e=!g;e&&(this[a]=g=this.chart.renderer.g().attr({zIndex:d||.1}).add(f));g.addClass("highcharts-"+b+" highcharts-series-"+
this.index+" highcharts-"+this.type+"-series "+(x(this.colorIndex)?"highcharts-color-"+this.colorIndex+" ":"")+(this.options.className||"")+(g.hasClass("highcharts-tracker")?" highcharts-tracker":""),!0);g.attr({visibility:c})[e?"attr":"animate"](this.getPlotBox());return g},getPlotBox:function(){var a=this.chart,b=this.xAxis,c=this.yAxis;a.inverted&&(b=c,c=this.xAxis);return{translateX:b?b.left:a.plotLeft,translateY:c?c.top:a.plotTop,scaleX:1,scaleY:1}},render:function(){var a=this,b=a.chart,d,f=
a.options,e=!!a.animate&&b.renderer.isSVG&&E(f.animation).duration,g=a.visible?"inherit":"hidden",k=f.zIndex,h=a.hasRendered,l=b.seriesGroup,r=b.inverted;d=a.plotGroup("group","series",g,k,l);a.markerGroup=a.plotGroup("markerGroup","markers",g,k,l);e&&a.animate(!0);d.inverted=a.isCartesian?r:!1;a.drawGraph&&(a.drawGraph(),a.applyZones());a.drawDataLabels&&a.drawDataLabels();a.visible&&a.drawPoints();a.drawTracker&&!1!==a.options.enableMouseTracking&&a.drawTracker();a.invertGroups(r);!1===f.clip||
a.sharedClipKey||h||d.clip(b.clipRect);e&&a.animate();h||(a.animationTimeout=B(function(){a.afterAnimate()},e));a.isDirty=!1;a.hasRendered=!0;c(a,"afterRender")},redraw:function(){var a=this.chart,b=this.isDirty||this.isDirtyData,c=this.group,d=this.xAxis,f=this.yAxis;c&&(a.inverted&&c.attr({width:a.plotWidth,height:a.plotHeight}),c.animate({translateX:q(d&&d.left,a.plotLeft),translateY:q(f&&f.top,a.plotTop)}));this.translate();this.render();b&&delete this.kdTree},kdAxisArray:["clientX","plotY"],
searchPoint:function(a,b){var c=this.xAxis,d=this.yAxis,f=this.chart.inverted;return this.searchKDTree({clientX:f?c.len-a.chartY+c.pos:a.chartX-c.pos,plotY:f?d.len-a.chartX+d.pos:a.chartY-d.pos},b)},buildKDTree:function(){function a(c,d,f){var g,e;if(e=c&&c.length)return g=b.kdAxisArray[d%f],c.sort(function(a,b){return a[g]-b[g]}),e=Math.floor(e/2),{point:c[e],left:a(c.slice(0,e),d+1,f),right:a(c.slice(e+1),d+1,f)}}this.buildingKdTree=!0;var b=this,c=-1<b.options.findNearestPointBy.indexOf("y")?2:
1;delete b.kdTree;B(function(){b.kdTree=a(b.getValidPoints(null,!b.directTouch),c,c);b.buildingKdTree=!1},b.options.kdNow?0:1)},searchKDTree:function(a,b){function c(a,b,k,h){var n=b.point,l=d.kdAxisArray[k%h],r,m,q=n;m=x(a[f])&&x(n[f])?Math.pow(a[f]-n[f],2):null;r=x(a[g])&&x(n[g])?Math.pow(a[g]-n[g],2):null;r=(m||0)+(r||0);n.dist=x(r)?Math.sqrt(r):Number.MAX_VALUE;n.distX=x(m)?Math.sqrt(m):Number.MAX_VALUE;l=a[l]-n[l];r=0>l?"left":"right";m=0>l?"right":"left";b[r]&&(r=c(a,b[r],k+1,h),q=r[e]<q[e]?
r:n);b[m]&&Math.sqrt(l*l)<q[e]&&(a=c(a,b[m],k+1,h),q=a[e]<q[e]?a:q);return q}var d=this,f=this.kdAxisArray[0],g=this.kdAxisArray[1],e=b?"distX":"dist";b=-1<d.options.findNearestPointBy.indexOf("y")?2:1;this.kdTree||this.buildingKdTree||this.buildKDTree();if(this.kdTree)return c(a,this.kdTree,b,b)}})})(K);(function(a){var C=a.Axis,E=a.Chart,F=a.correctFloat,m=a.defined,h=a.destroyObjectProperties,e=a.each,t=a.format,x=a.objectEach,p=a.pick,u=a.Series;a.StackItem=function(a,c,e,h,l){var d=a.chart.inverted;
this.axis=a;this.isNegative=e;this.options=c;this.x=h;this.total=null;this.points={};this.stack=l;this.rightCliff=this.leftCliff=0;this.alignOptions={align:c.align||(d?e?"left":"right":"center"),verticalAlign:c.verticalAlign||(d?"middle":e?"bottom":"top"),y:p(c.y,d?4:e?14:-6),x:p(c.x,d?e?-6:6:0)};this.textAlign=c.textAlign||(d?e?"right":"left":"center")};a.StackItem.prototype={destroy:function(){h(this,this.axis)},render:function(a){var c=this.axis.chart,f=this.options,e=f.format,e=e?t(e,this,c.time):
f.formatter.call(this);this.label?this.label.attr({text:e,visibility:"hidden"}):this.label=c.renderer.text(e,null,null,f.useHTML).css(f.style).attr({align:this.textAlign,rotation:f.rotation,visibility:"hidden"}).add(a);this.label.labelrank=c.plotHeight},setOffset:function(a,c){var f=this.axis,e=f.chart,h=f.translate(f.usePercentage?100:this.total,0,0,0,1),d=f.translate(0),d=m(h)&&Math.abs(h-d);a=e.xAxis[0].translate(this.x)+a;f=m(h)&&this.getStackBox(e,this,a,h,c,d,f);(c=this.label)&&f&&(c.align(this.alignOptions,
null,f),f=c.alignAttr,c[!1===this.options.crop||e.isInsidePlot(f.x,f.y)?"show":"hide"](!0))},getStackBox:function(a,c,e,h,l,d,b){var f=c.axis.reversed,k=a.inverted;a=b.height+b.pos-(k?a.plotLeft:a.plotTop);c=c.isNegative&&!f||!c.isNegative&&f;return{x:k?c?h:h-d:e,y:k?a-e-l:c?a-h-d:a-h,width:k?d:l,height:k?l:d}}};E.prototype.getStacks=function(){var a=this;e(a.yAxis,function(a){a.stacks&&a.hasVisibleSeries&&(a.oldStacks=a.stacks)});e(a.series,function(c){!c.options.stacking||!0!==c.visible&&!1!==a.options.chart.ignoreHiddenSeries||
(c.stackKey=c.type+p(c.options.stack,""))})};C.prototype.buildStacks=function(){var a=this.series,c=p(this.options.reversedStacks,!0),e=a.length,h;if(!this.isXAxis){this.usePercentage=!1;for(h=e;h--;)a[c?h:e-h-1].setStackedPoints();for(h=0;h<e;h++)a[h].modifyStacks()}};C.prototype.renderStackTotals=function(){var a=this.chart,c=a.renderer,e=this.stacks,h=this.stackTotalGroup;h||(this.stackTotalGroup=h=c.g("stack-labels").attr({visibility:"visible",zIndex:6}).add());h.translate(a.plotLeft,a.plotTop);
x(e,function(a){x(a,function(a){a.render(h)})})};C.prototype.resetStacks=function(){var a=this,c=a.stacks;a.isXAxis||x(c,function(c){x(c,function(f,e){f.touched<a.stacksTouched?(f.destroy(),delete c[e]):(f.total=null,f.cumulative=null)})})};C.prototype.cleanStacks=function(){var a;this.isXAxis||(this.oldStacks&&(a=this.stacks=this.oldStacks),x(a,function(a){x(a,function(a){a.cumulative=a.total})}))};u.prototype.setStackedPoints=function(){if(this.options.stacking&&(!0===this.visible||!1===this.chart.options.chart.ignoreHiddenSeries)){var f=
this.processedXData,c=this.processedYData,e=[],h=c.length,l=this.options,d=l.threshold,b=p(l.startFromThreshold&&d,0),v=l.stack,l=l.stacking,q=this.stackKey,t="-"+q,w=this.negStacks,u=this.yAxis,B=u.stacks,H=u.oldStacks,n,D,A,x,G,g,y;u.stacksTouched+=1;for(G=0;G<h;G++)g=f[G],y=c[G],n=this.getStackIndicator(n,g,this.index),x=n.key,A=(D=w&&y<(b?0:d))?t:q,B[A]||(B[A]={}),B[A][g]||(H[A]&&H[A][g]?(B[A][g]=H[A][g],B[A][g].total=null):B[A][g]=new a.StackItem(u,u.options.stackLabels,D,g,v)),A=B[A][g],null!==
y?(A.points[x]=A.points[this.index]=[p(A.cumulative,b)],m(A.cumulative)||(A.base=x),A.touched=u.stacksTouched,0<n.index&&!1===this.singleStacks&&(A.points[x][0]=A.points[this.index+","+g+",0"][0])):A.points[x]=A.points[this.index]=null,"percent"===l?(D=D?q:t,w&&B[D]&&B[D][g]?(D=B[D][g],A.total=D.total=Math.max(D.total,A.total)+Math.abs(y)||0):A.total=F(A.total+(Math.abs(y)||0))):A.total=F(A.total+(y||0)),A.cumulative=p(A.cumulative,b)+(y||0),null!==y&&(A.points[x].push(A.cumulative),e[G]=A.cumulative);
"percent"===l&&(u.usePercentage=!0);this.stackedYData=e;u.oldStacks={}}};u.prototype.modifyStacks=function(){var a=this,c=a.stackKey,h=a.yAxis.stacks,m=a.processedXData,l,d=a.options.stacking;a[d+"Stacker"]&&e([c,"-"+c],function(b){for(var c=m.length,f,e;c--;)if(f=m[c],l=a.getStackIndicator(l,f,a.index,b),e=(f=h[b]&&h[b][f])&&f.points[l.key])a[d+"Stacker"](e,f,c)})};u.prototype.percentStacker=function(a,c,e){c=c.total?100/c.total:0;a[0]=F(a[0]*c);a[1]=F(a[1]*c);this.stackedYData[e]=a[1]};u.prototype.getStackIndicator=
function(a,c,e,h){!m(a)||a.x!==c||h&&a.key!==h?a={x:c,index:0,key:h}:a.index++;a.key=[e,c,a.index].join();return a}})(K);(function(a){var C=a.addEvent,E=a.animate,F=a.Axis,m=a.createElement,h=a.css,e=a.defined,t=a.each,x=a.erase,p=a.extend,u=a.fireEvent,f=a.inArray,c=a.isNumber,k=a.isObject,r=a.isArray,l=a.merge,d=a.objectEach,b=a.pick,v=a.Point,q=a.Series,I=a.seriesTypes,w=a.setAnimation,L=a.splat;p(a.Chart.prototype,{addSeries:function(a,c,d){var f,e=this;a&&(c=b(c,!0),u(e,"addSeries",{options:a},
function(){f=e.initSeries(a);e.isDirtyLegend=!0;e.linkSeries();u(e,"afterAddSeries");c&&e.redraw(d)}));return f},addAxis:function(a,c,d,f){var e=c?"xAxis":"yAxis",h=this.options;a=l(a,{index:this[e].length,isX:c});c=new F(this,a);h[e]=L(h[e]||{});h[e].push(a);b(d,!0)&&this.redraw(f);return c},showLoading:function(a){var b=this,c=b.options,d=b.loadingDiv,f=c.loading,e=function(){d&&h(d,{left:b.plotLeft+"px",top:b.plotTop+"px",width:b.plotWidth+"px",height:b.plotHeight+"px"})};d||(b.loadingDiv=d=m("div",
{className:"highcharts-loading highcharts-loading-hidden"},null,b.container),b.loadingSpan=m("span",{className:"highcharts-loading-inner"},null,d),C(b,"redraw",e));d.className="highcharts-loading";b.loadingSpan.innerHTML=a||c.lang.loading;h(d,p(f.style,{zIndex:10}));h(b.loadingSpan,f.labelStyle);b.loadingShown||(h(d,{opacity:0,display:""}),E(d,{opacity:f.style.opacity||.5},{duration:f.showDuration||0}));b.loadingShown=!0;e()},hideLoading:function(){var a=this.options,b=this.loadingDiv;b&&(b.className=
"highcharts-loading highcharts-loading-hidden",E(b,{opacity:0},{duration:a.loading.hideDuration||100,complete:function(){h(b,{display:"none"})}}));this.loadingShown=!1},propsRequireDirtyBox:"backgroundColor borderColor borderWidth margin marginTop marginRight marginBottom marginLeft spacing spacingTop spacingRight spacingBottom spacingLeft borderRadius plotBackgroundColor plotBackgroundImage plotBorderColor plotBorderWidth plotShadow shadow".split(" "),propsRequireUpdateSeries:"chart.inverted chart.polar chart.ignoreHiddenSeries chart.type colors plotOptions time tooltip".split(" "),
update:function(a,h,k,m){var n=this,q={credits:"addCredits",title:"setTitle",subtitle:"setSubtitle"},w=a.chart,g,r,p=[];u(n,"update",{options:a});if(w){l(!0,n.options.chart,w);"className"in w&&n.setClassName(w.className);"reflow"in w&&n.setReflow(w.reflow);if("inverted"in w||"polar"in w||"type"in w)n.propFromSeries(),g=!0;"alignTicks"in w&&(g=!0);d(w,function(a,b){-1!==f("chart."+b,n.propsRequireUpdateSeries)&&(r=!0);-1!==f(b,n.propsRequireDirtyBox)&&(n.isDirtyBox=!0)});"style"in w&&n.renderer.setStyle(w.style)}a.colors&&
(this.options.colors=a.colors);a.plotOptions&&l(!0,this.options.plotOptions,a.plotOptions);d(a,function(a,b){if(n[b]&&"function"===typeof n[b].update)n[b].update(a,!1);else if("function"===typeof n[q[b]])n[q[b]](a);"chart"!==b&&-1!==f(b,n.propsRequireUpdateSeries)&&(r=!0)});t("xAxis yAxis zAxis series colorAxis pane".split(" "),function(b){var c;a[b]&&("series"===b&&(c=[],t(n[b],function(a,b){a.options.isInternal||c.push(b)})),t(L(a[b]),function(a,d){(d=e(a.id)&&n.get(a.id)||n[b][c?c[d]:d])&&d.coll===
b&&(d.update(a,!1),k&&(d.touched=!0));if(!d&&k)if("series"===b)n.addSeries(a,!1).touched=!0;else if("xAxis"===b||"yAxis"===b)n.addAxis(a,"xAxis"===b,!1).touched=!0}),k&&t(n[b],function(a){a.touched||a.options.isInternal?delete a.touched:p.push(a)}))});t(p,function(a){a.remove(!1)});g&&t(n.axes,function(a){a.update({},!1)});r&&t(n.series,function(a){a.update({},!1)});a.loading&&l(!0,n.options.loading,a.loading);g=w&&w.width;w=w&&w.height;c(g)&&g!==n.chartWidth||c(w)&&w!==n.chartHeight?n.setSize(g,
w,m):b(h,!0)&&n.redraw(m);u(n,"afterUpdate",{options:a})},setSubtitle:function(a){this.setTitle(void 0,a)}});p(v.prototype,{update:function(a,c,d,f){function e(){h.applyOptions(a);null===h.y&&g&&(h.graphic=g.destroy());k(a,!0)&&(g&&g.element&&a&&a.marker&&void 0!==a.marker.symbol&&(h.graphic=g.destroy()),a&&a.dataLabels&&h.dataLabel&&(h.dataLabel=h.dataLabel.destroy()),h.connector&&(h.connector=h.connector.destroy()));l=h.index;n.updateParallelArrays(h,l);w.data[l]=k(w.data[l],!0)||k(a,!0)?h.options:
b(a,w.data[l]);n.isDirty=n.isDirtyData=!0;!n.fixedBox&&n.hasCartesianSeries&&(m.isDirtyBox=!0);"point"===w.legendType&&(m.isDirtyLegend=!0);c&&m.redraw(d)}var h=this,n=h.series,g=h.graphic,l,m=n.chart,w=n.options;c=b(c,!0);!1===f?e():h.firePointEvent("update",{options:a},e)},remove:function(a,b){this.series.removePoint(f(this,this.series.data),a,b)}});p(q.prototype,{addPoint:function(a,c,d,f){var e=this.options,h=this.data,k=this.chart,g=this.xAxis,g=g&&g.hasNames&&g.names,n=e.data,l,m,w=this.xData,
q,r;c=b(c,!0);l={series:this};this.pointClass.prototype.applyOptions.apply(l,[a]);r=l.x;q=w.length;if(this.requireSorting&&r<w[q-1])for(m=!0;q&&w[q-1]>r;)q--;this.updateParallelArrays(l,"splice",q,0,0);this.updateParallelArrays(l,q);g&&l.name&&(g[r]=l.name);n.splice(q,0,a);m&&(this.data.splice(q,0,null),this.processData());"point"===e.legendType&&this.generatePoints();d&&(h[0]&&h[0].remove?h[0].remove(!1):(h.shift(),this.updateParallelArrays(l,"shift"),n.shift()));this.isDirtyData=this.isDirty=!0;
c&&k.redraw(f)},removePoint:function(a,c,d){var f=this,e=f.data,h=e[a],k=f.points,g=f.chart,n=function(){k&&k.length===e.length&&k.splice(a,1);e.splice(a,1);f.options.data.splice(a,1);f.updateParallelArrays(h||{series:f},"splice",a,1);h&&h.destroy();f.isDirty=!0;f.isDirtyData=!0;c&&g.redraw()};w(d,g);c=b(c,!0);h?h.firePointEvent("remove",null,n):n()},remove:function(a,c,d){function f(){e.destroy();h.isDirtyLegend=h.isDirtyBox=!0;h.linkSeries();b(a,!0)&&h.redraw(c)}var e=this,h=e.chart;!1!==d?u(e,
"remove",null,f):f()},update:function(c,d){var e=this,h=e.chart,k=e.userOptions,m=e.oldType||e.type,w=c.type||k.type||h.options.chart.type,g=I[m].prototype,q,r=["group","markerGroup","dataLabelsGroup"],v=["navigatorSeries","baseSeries"],B=e.finishedAnimating&&{animation:!1},x=["data","name","turboThreshold"],H=a.keys(c),z=0<H.length;t(H,function(a){-1===f(a,x)&&(z=!1)});if(z)c.data&&this.setData(c.data,!1),c.name&&this.setName(c.name,!1);else{v=r.concat(v);t(v,function(a){v[a]=e[a];delete e[a]});
c=l(k,B,{index:e.index,pointStart:b(k.pointStart,e.xData[0])},{data:e.options.data},c);e.remove(!1,null,!1);for(q in g)e[q]=void 0;I[w||m]?p(e,I[w||m].prototype):a.error(17,!0);t(v,function(a){e[a]=v[a]});e.init(h,c);c.zIndex!==k.zIndex&&t(r,function(a){e[a]&&e[a].attr({zIndex:c.zIndex})});e.oldType=m;h.linkSeries()}u(this,"afterUpdate");b(d,!0)&&h.redraw(z?void 0:!1)},setName:function(a){this.name=this.options.name=this.userOptions.name=a;this.chart.isDirtyLegend=!0}});p(F.prototype,{update:function(a,
c){var f=this.chart,e=a&&a.events||{};a=l(this.userOptions,a);f.options[this.coll].indexOf&&(f.options[this.coll][f.options[this.coll].indexOf(this.userOptions)]=a);d(f.options[this.coll].events,function(a,b){"undefined"===typeof e[b]&&(e[b]=void 0)});this.destroy(!0);this.init(f,p(a,{events:e}));f.isDirtyBox=!0;b(c,!0)&&f.redraw()},remove:function(a){for(var c=this.chart,d=this.coll,f=this.series,e=f.length;e--;)f[e]&&f[e].remove(!1);x(c.axes,this);x(c[d],this);r(c.options[d])?c.options[d].splice(this.options.index,
1):delete c.options[d];t(c[d],function(a,b){a.options.index=a.userOptions.index=b});this.destroy();c.isDirtyBox=!0;b(a,!0)&&c.redraw()},setTitle:function(a,b){this.update({title:a},b)},setCategories:function(a,b){this.update({categories:a},b)}})})(K);(function(a){var C=a.color,E=a.each,F=a.map,m=a.pick,h=a.Series,e=a.seriesType;e("area","line",{softThreshold:!1,threshold:0},{singleStacks:!1,getStackPoints:function(e){var h=[],p=[],t=this.xAxis,f=this.yAxis,c=f.stacks[this.stackKey],k={},r=this.index,
l=f.series,d=l.length,b,v=m(f.options.reversedStacks,!0)?1:-1,q;e=e||this.points;if(this.options.stacking){for(q=0;q<e.length;q++)e[q].leftNull=e[q].rightNull=null,k[e[q].x]=e[q];a.objectEach(c,function(a,b){null!==a.total&&p.push(b)});p.sort(function(a,b){return a-b});b=F(l,function(){return this.visible});E(p,function(a,e){var l=0,m,w;if(k[a]&&!k[a].isNull)h.push(k[a]),E([-1,1],function(f){var h=1===f?"rightNull":"leftNull",n=0,l=c[p[e+f]];if(l)for(q=r;0<=q&&q<d;)m=l.points[q],m||(q===r?k[a][h]=
!0:b[q]&&(w=c[a].points[q])&&(n-=w[1]-w[0])),q+=v;k[a][1===f?"rightCliff":"leftCliff"]=n});else{for(q=r;0<=q&&q<d;){if(m=c[a].points[q]){l=m[1];break}q+=v}l=f.translate(l,0,1,0,1);h.push({isNull:!0,plotX:t.translate(a,0,0,0,1),x:a,plotY:l,yBottom:l})}})}return h},getGraphPath:function(a){var e=h.prototype.getGraphPath,p=this.options,t=p.stacking,f=this.yAxis,c,k,r=[],l=[],d=this.index,b,v=f.stacks[this.stackKey],q=p.threshold,I=f.getThreshold(p.threshold),w,p=p.connectNulls||"percent"===t,L=function(c,
e,h){var k=a[c];c=t&&v[k.x].points[d];var n=k[h+"Null"]||0;h=k[h+"Cliff"]||0;var m,w,k=!0;h||n?(m=(n?c[0]:c[1])+h,w=c[0]+h,k=!!n):!t&&a[e]&&a[e].isNull&&(m=w=q);void 0!==m&&(l.push({plotX:b,plotY:null===m?I:f.getThreshold(m),isNull:k,isCliff:!0}),r.push({plotX:b,plotY:null===w?I:f.getThreshold(w),doCurve:!1}))};a=a||this.points;t&&(a=this.getStackPoints(a));for(c=0;c<a.length;c++)if(k=a[c].isNull,b=m(a[c].rectPlotX,a[c].plotX),w=m(a[c].yBottom,I),!k||p)p||L(c,c-1,"left"),k&&!t&&p||(l.push(a[c]),r.push({x:c,
plotX:b,plotY:w})),p||L(c,c+1,"right");c=e.call(this,l,!0,!0);r.reversed=!0;k=e.call(this,r,!0,!0);k.length&&(k[0]="L");k=c.concat(k);e=e.call(this,l,!1,p);k.xMap=c.xMap;this.areaPath=k;return e},drawGraph:function(){this.areaPath=[];h.prototype.drawGraph.apply(this);var a=this,e=this.areaPath,p=this.options,u=[["area","highcharts-area",this.color,p.fillColor]];E(this.zones,function(f,c){u.push(["zone-area-"+c,"highcharts-area highcharts-zone-area-"+c+" "+f.className,f.color||a.color,f.fillColor||
p.fillColor])});E(u,function(f){var c=f[0],h=a[c];h?(h.endX=a.preventGraphAnimation?null:e.xMap,h.animate({d:e})):(h=a[c]=a.chart.renderer.path(e).addClass(f[1]).attr({fill:m(f[3],C(f[2]).setOpacity(m(p.fillOpacity,.75)).get()),zIndex:0}).add(a.group),h.isArea=!0);h.startX=e.xMap;h.shiftUnit=p.step?2:1})},drawLegendSymbol:a.LegendSymbolMixin.drawRectangle})})(K);(function(a){var C=a.pick;a=a.seriesType;a("spline","line",{},{getPointSpline:function(a,F,m){var h=F.plotX,e=F.plotY,t=a[m-1];m=a[m+1];
var x,p,u,f;if(t&&!t.isNull&&!1!==t.doCurve&&!F.isCliff&&m&&!m.isNull&&!1!==m.doCurve&&!F.isCliff){a=t.plotY;u=m.plotX;m=m.plotY;var c=0;x=(1.5*h+t.plotX)/2.5;p=(1.5*e+a)/2.5;u=(1.5*h+u)/2.5;f=(1.5*e+m)/2.5;u!==x&&(c=(f-p)*(u-h)/(u-x)+e-f);p+=c;f+=c;p>a&&p>e?(p=Math.max(a,e),f=2*e-p):p<a&&p<e&&(p=Math.min(a,e),f=2*e-p);f>m&&f>e?(f=Math.max(m,e),p=2*e-f):f<m&&f<e&&(f=Math.min(m,e),p=2*e-f);F.rightContX=u;F.rightContY=f}F=["C",C(t.rightContX,t.plotX),C(t.rightContY,t.plotY),C(x,h),C(p,e),h,e];t.rightContX=
t.rightContY=null;return F}})})(K);(function(a){var C=a.seriesTypes.area.prototype,E=a.seriesType;E("areaspline","spline",a.defaultPlotOptions.area,{getStackPoints:C.getStackPoints,getGraphPath:C.getGraphPath,drawGraph:C.drawGraph,drawLegendSymbol:a.LegendSymbolMixin.drawRectangle})})(K);(function(a){var C=a.animObject,E=a.color,F=a.each,m=a.extend,h=a.isNumber,e=a.merge,t=a.pick,x=a.Series,p=a.seriesType,u=a.svg;p("column","line",{borderRadius:0,crisp:!0,groupPadding:.2,marker:null,pointPadding:.1,
minPointLength:0,cropThreshold:50,pointRange:null,states:{hover:{halo:!1,brightness:.1},select:{color:"#cccccc",borderColor:"#000000"}},dataLabels:{align:null,verticalAlign:null,y:null},softThreshold:!1,startFromThreshold:!0,stickyTracking:!1,tooltip:{distance:6},threshold:0,borderColor:"#ffffff"},{cropShoulder:0,directTouch:!0,trackerGroups:["group","dataLabelsGroup"],negStacks:!0,init:function(){x.prototype.init.apply(this,arguments);var a=this,c=a.chart;c.hasRendered&&F(c.series,function(c){c.type===
a.type&&(c.isDirty=!0)})},getColumnMetrics:function(){var a=this,c=a.options,e=a.xAxis,h=a.yAxis,l=e.options.reversedStacks,l=e.reversed&&!l||!e.reversed&&l,d,b={},m=0;!1===c.grouping?m=1:F(a.chart.series,function(c){var f=c.options,e=c.yAxis,k;c.type!==a.type||!c.visible&&a.chart.options.chart.ignoreHiddenSeries||h.len!==e.len||h.pos!==e.pos||(f.stacking?(d=c.stackKey,void 0===b[d]&&(b[d]=m++),k=b[d]):!1!==f.grouping&&(k=m++),c.columnIndex=k)});var q=Math.min(Math.abs(e.transA)*(e.ordinalSlope||
c.pointRange||e.closestPointRange||e.tickInterval||1),e.len),p=q*c.groupPadding,w=(q-2*p)/(m||1),c=Math.min(c.maxPointWidth||e.len,t(c.pointWidth,w*(1-2*c.pointPadding)));a.columnMetrics={width:c,offset:(w-c)/2+(p+((a.columnIndex||0)+(l?1:0))*w-q/2)*(l?-1:1)};return a.columnMetrics},crispCol:function(a,c,e,h){var f=this.chart,d=this.borderWidth,b=-(d%2?.5:0),d=d%2?.5:1;f.inverted&&f.renderer.isVML&&(d+=1);this.options.crisp&&(e=Math.round(a+e)+b,a=Math.round(a)+b,e-=a);h=Math.round(c+h)+d;b=.5>=Math.abs(c)&&
.5<h;c=Math.round(c)+d;h-=c;b&&h&&(--c,h+=1);return{x:a,y:c,width:e,height:h}},translate:function(){var a=this,c=a.chart,e=a.options,h=a.dense=2>a.closestPointRange*a.xAxis.transA,h=a.borderWidth=t(e.borderWidth,h?0:1),l=a.yAxis,d=e.threshold,b=a.translatedThreshold=l.getThreshold(d),m=t(e.minPointLength,5),q=a.getColumnMetrics(),p=q.width,w=a.barW=Math.max(p,1+2*h),u=a.pointXOffset=q.offset;c.inverted&&(b-=.5);e.pointPadding&&(w=Math.ceil(w));x.prototype.translate.apply(a);F(a.points,function(f){var e=
t(f.yBottom,b),h=999+Math.abs(e),h=Math.min(Math.max(-h,f.plotY),l.len+h),k=f.plotX+u,q=w,r=Math.min(h,e),v,g=Math.max(h,e)-r;m&&Math.abs(g)<m&&(g=m,v=!l.reversed&&!f.negative||l.reversed&&f.negative,f.y===d&&a.dataMax<=d&&l.min<d&&(v=!v),r=Math.abs(r-b)>m?e-m:b-(v?m:0));f.barX=k;f.pointWidth=p;f.tooltipPos=c.inverted?[l.len+l.pos-c.plotLeft-h,a.xAxis.len-k-q/2,g]:[k+q/2,h+l.pos-c.plotTop,g];f.shapeType="rect";f.shapeArgs=a.crispCol.apply(a,f.isNull?[k,b,q,0]:[k,r,q,g])})},getSymbol:a.noop,drawLegendSymbol:a.LegendSymbolMixin.drawRectangle,
drawGraph:function(){this.group[this.dense?"addClass":"removeClass"]("highcharts-dense-data")},pointAttribs:function(a,c){var f=this.options,h,l=this.pointAttrToOptions||{};h=l.stroke||"borderColor";var d=l["stroke-width"]||"borderWidth",b=a&&a.color||this.color,m=a&&a[h]||f[h]||this.color||b,q=a&&a[d]||f[d]||this[d]||0,l=f.dashStyle;a&&this.zones.length&&(b=a.getZone(),b=a.options.color||b&&b.color||this.color);c&&(a=e(f.states[c],a.options.states&&a.options.states[c]||{}),c=a.brightness,b=a.color||
void 0!==c&&E(b).brighten(a.brightness).get()||b,m=a[h]||m,q=a[d]||q,l=a.dashStyle||l);h={fill:b,stroke:m,"stroke-width":q};l&&(h.dashstyle=l);return h},drawPoints:function(){var a=this,c=this.chart,k=a.options,m=c.renderer,l=k.animationLimit||250,d;F(a.points,function(b){var f=b.graphic,q=f&&c.pointCount<l?"animate":"attr";if(h(b.plotY)&&null!==b.y){d=b.shapeArgs;if(f)f[q](e(d));else b.graphic=f=m[b.shapeType](d).add(b.group||a.group);k.borderRadius&&f.attr({r:k.borderRadius});f[q](a.pointAttribs(b,
b.selected&&"select")).shadow(k.shadow,null,k.stacking&&!k.borderRadius);f.addClass(b.getClassName(),!0)}else f&&(b.graphic=f.destroy())})},animate:function(a){var c=this,f=this.yAxis,e=c.options,h=this.chart.inverted,d={},b=h?"translateX":"translateY",p;u&&(a?(d.scaleY=.001,a=Math.min(f.pos+f.len,Math.max(f.pos,f.toPixels(e.threshold))),h?d.translateX=a-f.len:d.translateY=a,c.group.attr(d)):(p=c.group.attr(b),c.group.animate({scaleY:1},m(C(c.options.animation),{step:function(a,e){d[b]=p+e.pos*(f.pos-
p);c.group.attr(d)}})),c.animate=null))},remove:function(){var a=this,c=a.chart;c.hasRendered&&F(c.series,function(c){c.type===a.type&&(c.isDirty=!0)});x.prototype.remove.apply(a,arguments)}})})(K);(function(a){a=a.seriesType;a("bar","column",null,{inverted:!0})})(K);(function(a){var C=a.Series;a=a.seriesType;a("scatter","line",{lineWidth:0,findNearestPointBy:"xy",marker:{enabled:!0},tooltip:{headerFormat:'\x3cspan style\x3d"color:{point.color}"\x3e\u25cf\x3c/span\x3e \x3cspan style\x3d"font-size: 0.85em"\x3e {series.name}\x3c/span\x3e\x3cbr/\x3e',
pointFormat:"x: \x3cb\x3e{point.x}\x3c/b\x3e\x3cbr/\x3ey: \x3cb\x3e{point.y}\x3c/b\x3e\x3cbr/\x3e"}},{sorted:!1,requireSorting:!1,noSharedTooltip:!0,trackerGroups:["group","markerGroup","dataLabelsGroup"],takeOrdinalPosition:!1,drawGraph:function(){this.options.lineWidth&&C.prototype.drawGraph.call(this)}})})(K);(function(a){var C=a.deg2rad,E=a.isNumber,F=a.pick,m=a.relativeLength;a.CenteredSeriesMixin={getCenter:function(){var a=this.options,e=this.chart,t=2*(a.slicedOffset||0),x=e.plotWidth-2*t,
e=e.plotHeight-2*t,p=a.center,p=[F(p[0],"50%"),F(p[1],"50%"),a.size||"100%",a.innerSize||0],u=Math.min(x,e),f,c;for(f=0;4>f;++f)c=p[f],a=2>f||2===f&&/%$/.test(c),p[f]=m(c,[x,e,u,p[2]][f])+(a?t:0);p[3]>p[2]&&(p[3]=p[2]);return p},getStartAndEndRadians:function(a,e){a=E(a)?a:0;e=E(e)&&e>a&&360>e-a?e:a+360;return{start:C*(a+-90),end:C*(e+-90)}}}})(K);(function(a){var C=a.addEvent,E=a.CenteredSeriesMixin,F=a.defined,m=a.each,h=a.extend,e=E.getStartAndEndRadians,t=a.inArray,x=a.noop,p=a.pick,u=a.Point,
f=a.Series,c=a.seriesType,k=a.setAnimation;c("pie","line",{center:[null,null],clip:!1,colorByPoint:!0,dataLabels:{allowOverlap:!0,distance:30,enabled:!0,formatter:function(){return this.point.isNull?void 0:this.point.name},x:0},ignoreHiddenPoint:!0,legendType:"point",marker:null,size:null,showInLegend:!1,slicedOffset:10,stickyTracking:!1,tooltip:{followPointer:!0},borderColor:"#ffffff",borderWidth:1,states:{hover:{brightness:.1}}},{isCartesian:!1,requireSorting:!1,directTouch:!0,noSharedTooltip:!0,
trackerGroups:["group","dataLabelsGroup"],axisTypes:[],pointAttribs:a.seriesTypes.column.prototype.pointAttribs,animate:function(a){var c=this,d=c.points,b=c.startAngleRad;a||(m(d,function(a){var d=a.graphic,f=a.shapeArgs;d&&(d.attr({r:a.startR||c.center[3]/2,start:b,end:b}),d.animate({r:f.r,start:f.start,end:f.end},c.options.animation))}),c.animate=null)},updateTotals:function(){var a,c=0,d=this.points,b=d.length,f,e=this.options.ignoreHiddenPoint;for(a=0;a<b;a++)f=d[a],c+=e&&!f.visible?0:f.isNull?
0:f.y;this.total=c;for(a=0;a<b;a++)f=d[a],f.percentage=0<c&&(f.visible||!e)?f.y/c*100:0,f.total=c},generatePoints:function(){f.prototype.generatePoints.call(this);this.updateTotals()},translate:function(a){this.generatePoints();var c=0,d=this.options,b=d.slicedOffset,f=b+(d.borderWidth||0),h,k,m,r=e(d.startAngle,d.endAngle),t=this.startAngleRad=r.start,r=(this.endAngleRad=r.end)-t,u=this.points,n,x=d.dataLabels.distance,d=d.ignoreHiddenPoint,A,C=u.length,G;a||(this.center=a=this.getCenter());this.getX=
function(b,c,d){m=Math.asin(Math.min((b-a[1])/(a[2]/2+d.labelDistance),1));return a[0]+(c?-1:1)*Math.cos(m)*(a[2]/2+d.labelDistance)};for(A=0;A<C;A++){G=u[A];G.labelDistance=p(G.options.dataLabels&&G.options.dataLabels.distance,x);this.maxLabelDistance=Math.max(this.maxLabelDistance||0,G.labelDistance);h=t+c*r;if(!d||G.visible)c+=G.percentage/100;k=t+c*r;G.shapeType="arc";G.shapeArgs={x:a[0],y:a[1],r:a[2]/2,innerR:a[3]/2,start:Math.round(1E3*h)/1E3,end:Math.round(1E3*k)/1E3};m=(k+h)/2;m>1.5*Math.PI?
m-=2*Math.PI:m<-Math.PI/2&&(m+=2*Math.PI);G.slicedTranslation={translateX:Math.round(Math.cos(m)*b),translateY:Math.round(Math.sin(m)*b)};k=Math.cos(m)*a[2]/2;n=Math.sin(m)*a[2]/2;G.tooltipPos=[a[0]+.7*k,a[1]+.7*n];G.half=m<-Math.PI/2||m>Math.PI/2?1:0;G.angle=m;h=Math.min(f,G.labelDistance/5);G.labelPos=[a[0]+k+Math.cos(m)*G.labelDistance,a[1]+n+Math.sin(m)*G.labelDistance,a[0]+k+Math.cos(m)*h,a[1]+n+Math.sin(m)*h,a[0]+k,a[1]+n,0>G.labelDistance?"center":G.half?"right":"left",m]}},drawGraph:null,
drawPoints:function(){var a=this,c=a.chart.renderer,d,b,f,e,k=a.options.shadow;k&&!a.shadowGroup&&(a.shadowGroup=c.g("shadow").add(a.group));m(a.points,function(l){b=l.graphic;if(l.isNull)b&&(l.graphic=b.destroy());else{e=l.shapeArgs;d=l.getTranslate();var m=l.shadowGroup;k&&!m&&(m=l.shadowGroup=c.g("shadow").add(a.shadowGroup));m&&m.attr(d);f=a.pointAttribs(l,l.selected&&"select");b?b.setRadialReference(a.center).attr(f).animate(h(e,d)):(l.graphic=b=c[l.shapeType](e).setRadialReference(a.center).attr(d).add(a.group),
b.attr(f).attr({"stroke-linejoin":"round"}).shadow(k,m));b.attr({visibility:l.visible?"inherit":"hidden"});b.addClass(l.getClassName())}})},searchPoint:x,sortByAngle:function(a,c){a.sort(function(a,b){return void 0!==a.angle&&(b.angle-a.angle)*c})},drawLegendSymbol:a.LegendSymbolMixin.drawRectangle,getCenter:E.getCenter,getSymbol:x},{init:function(){u.prototype.init.apply(this,arguments);var a=this,c;a.name=p(a.name,"Slice");c=function(c){a.slice("select"===c.type)};C(a,"select",c);C(a,"unselect",
c);return a},isValid:function(){return a.isNumber(this.y,!0)&&0<=this.y},setVisible:function(a,c){var d=this,b=d.series,f=b.chart,e=b.options.ignoreHiddenPoint;c=p(c,e);a!==d.visible&&(d.visible=d.options.visible=a=void 0===a?!d.visible:a,b.options.data[t(d,b.data)]=d.options,m(["graphic","dataLabel","connector","shadowGroup"],function(b){if(d[b])d[b][a?"show":"hide"](!0)}),d.legendItem&&f.legend.colorizeItem(d,a),a||"hover"!==d.state||d.setState(""),e&&(b.isDirty=!0),c&&f.redraw())},slice:function(a,
c,d){var b=this.series;k(d,b.chart);p(c,!0);this.sliced=this.options.sliced=F(a)?a:!this.sliced;b.options.data[t(this,b.data)]=this.options;this.graphic.animate(this.getTranslate());this.shadowGroup&&this.shadowGroup.animate(this.getTranslate())},getTranslate:function(){return this.sliced?this.slicedTranslation:{translateX:0,translateY:0}},haloPath:function(a){var c=this.shapeArgs;return this.sliced||!this.visible?[]:this.series.chart.renderer.symbols.arc(c.x,c.y,c.r+a,c.r+a,{innerR:this.shapeArgs.r-
1,start:c.start,end:c.end})}})})(K);(function(a){var C=a.addEvent,E=a.arrayMax,F=a.defined,m=a.each,h=a.extend,e=a.format,t=a.map,x=a.merge,p=a.noop,u=a.pick,f=a.relativeLength,c=a.Series,k=a.seriesTypes,r=a.some,l=a.stableSort;a.distribute=function(c,b,f){function d(a,b){return a.target-b.target}var e,h=!0,k=c,p=[],v;v=0;var n=k.reducedLen||b;for(e=c.length;e--;)v+=c[e].size;if(v>n){l(c,function(a,b){return(b.rank||0)-(a.rank||0)});for(v=e=0;v<=n;)v+=c[e].size,e++;p=c.splice(e-1,c.length)}l(c,d);
for(c=t(c,function(a){return{size:a.size,targets:[a.target],align:u(a.align,.5)}});h;){for(e=c.length;e--;)h=c[e],v=(Math.min.apply(0,h.targets)+Math.max.apply(0,h.targets))/2,h.pos=Math.min(Math.max(0,v-h.size*h.align),b-h.size);e=c.length;for(h=!1;e--;)0<e&&c[e-1].pos+c[e-1].size>c[e].pos&&(c[e-1].size+=c[e].size,c[e-1].targets=c[e-1].targets.concat(c[e].targets),c[e-1].align=.5,c[e-1].pos+c[e-1].size>b&&(c[e-1].pos=b-c[e-1].size),c.splice(e,1),h=!0)}k.push.apply(k,p);e=0;r(c,function(c){var d=
0;if(r(c.targets,function(){k[e].pos=c.pos+d;if(Math.abs(k[e].pos-k[e].target)>f)return m(k.slice(0,e+1),function(a){delete a.pos}),k.reducedLen=(k.reducedLen||b)-.1*b,k.reducedLen>.1*b&&a.distribute(k,b,f),!0;d+=k[e].size;e++}))return!0});l(k,d)};c.prototype.drawDataLabels=function(){function c(a,b){var c=b.filter;return c?(b=c.operator,a=a[c.property],c=c.value,"\x3e"===b&&a>c||"\x3c"===b&&a<c||"\x3e\x3d"===b&&a>=c||"\x3c\x3d"===b&&a<=c||"\x3d\x3d"===b&&a==c||"\x3d\x3d\x3d"===b&&a===c?!0:!1):!0}
var b=this,f=b.chart,h=b.options,k=h.dataLabels,l=b.points,p,r,t=b.hasRendered||0,n,D,A=u(k.defer,!!h.animation),E=f.renderer;if(k.enabled||b._hasPointLabels)b.dlProcessOptions&&b.dlProcessOptions(k),D=b.plotGroup("dataLabelsGroup","data-labels",A&&!t?"hidden":"visible",k.zIndex||6),A&&(D.attr({opacity:+t}),t||C(b,"afterAnimate",function(){b.visible&&D.show(!0);D[h.animation?"animate":"attr"]({opacity:1},{duration:200})})),r=k,m(l,function(d){var g,l=d.dataLabel,m,q,w=d.connector,t=!l,v;p=d.dlOptions||
d.options&&d.options.dataLabels;(g=u(p&&p.enabled,r.enabled)&&!d.isNull)&&(g=!0===c(d,p||k));g&&(k=x(r,p),m=d.getLabelConfig(),v=k[d.formatPrefix+"Format"]||k.format,n=F(v)?e(v,m,f.time):(k[d.formatPrefix+"Formatter"]||k.formatter).call(m,k),v=k.style,m=k.rotation,v.color=u(k.color,v.color,b.color,"#000000"),"contrast"===v.color&&(d.contrastColor=E.getContrast(d.color||b.color),v.color=k.inside||0>u(d.labelDistance,k.distance)||h.stacking?d.contrastColor:"#000000"),h.cursor&&(v.cursor=h.cursor),q=
{fill:k.backgroundColor,stroke:k.borderColor,"stroke-width":k.borderWidth,r:k.borderRadius||0,rotation:m,padding:k.padding,zIndex:1},a.objectEach(q,function(a,b){void 0===a&&delete q[b]}));!l||g&&F(n)?g&&F(n)&&(l?q.text=n:(l=d.dataLabel=m?E.text(n,0,-9999,k.useHTML).addClass("highcharts-data-label"):E.label(n,0,-9999,k.shape,null,null,k.useHTML,null,"data-label"),l.addClass(" highcharts-data-label-color-"+d.colorIndex+" "+(k.className||"")+(k.useHTML?" highcharts-tracker":""))),l.attr(q),l.css(v).shadow(k.shadow),
l.added||l.add(D),b.alignDataLabel(d,l,k,null,t)):(d.dataLabel=l=l.destroy(),w&&(d.connector=w.destroy()))});a.fireEvent(this,"afterDrawDataLabels")};c.prototype.alignDataLabel=function(a,b,c,e,f){var d=this.chart,k=d.inverted,l=u(a.dlBox&&a.dlBox.centerX,a.plotX,-9999),m=u(a.plotY,-9999),n=b.getBBox(),q,p=c.rotation,r=c.align,t=this.visible&&(a.series.forceDL||d.isInsidePlot(l,Math.round(m),k)||e&&d.isInsidePlot(l,k?e.x+1:e.y+e.height-1,k)),g="justify"===u(c.overflow,"justify");if(t&&(q=c.style.fontSize,
q=d.renderer.fontMetrics(q,b).b,e=h({x:k?this.yAxis.len-m:l,y:Math.round(k?this.xAxis.len-l:m),width:0,height:0},e),h(c,{width:n.width,height:n.height}),p?(g=!1,l=d.renderer.rotCorr(q,p),l={x:e.x+c.x+e.width/2+l.x,y:e.y+c.y+{top:0,middle:.5,bottom:1}[c.verticalAlign]*e.height},b[f?"attr":"animate"](l).attr({align:r}),m=(p+720)%360,m=180<m&&360>m,"left"===r?l.y-=m?n.height:0:"center"===r?(l.x-=n.width/2,l.y-=n.height/2):"right"===r&&(l.x-=n.width,l.y-=m?0:n.height),b.placed=!0,b.alignAttr=l):(b.align(c,
null,e),l=b.alignAttr),g&&0<=e.height?a.isLabelJustified=this.justifyDataLabel(b,c,l,n,e,f):u(c.crop,!0)&&(t=d.isInsidePlot(l.x,l.y)&&d.isInsidePlot(l.x+n.width,l.y+n.height)),c.shape&&!p))b[f?"attr":"animate"]({anchorX:k?d.plotWidth-a.plotY:a.plotX,anchorY:k?d.plotHeight-a.plotX:a.plotY});t||(b.attr({y:-9999}),b.placed=!1)};c.prototype.justifyDataLabel=function(a,b,c,e,f,h){var d=this.chart,k=b.align,l=b.verticalAlign,n,m,q=a.box?0:a.padding||0;n=c.x+q;0>n&&("right"===k?b.align="left":b.x=-n,m=!0);
n=c.x+e.width-q;n>d.plotWidth&&("left"===k?b.align="right":b.x=d.plotWidth-n,m=!0);n=c.y+q;0>n&&("bottom"===l?b.verticalAlign="top":b.y=-n,m=!0);n=c.y+e.height-q;n>d.plotHeight&&("top"===l?b.verticalAlign="bottom":b.y=d.plotHeight-n,m=!0);m&&(a.placed=!h,a.align(b,null,f));return m};k.pie&&(k.pie.prototype.drawDataLabels=function(){var d=this,b=d.data,e,f=d.chart,h=d.options.dataLabels,k=u(h.connectorPadding,10),l=u(h.connectorWidth,1),p=f.plotWidth,r=f.plotHeight,n=Math.round(f.chartWidth/3),t,x=
d.center,C=x[2]/2,G=x[1],g,y,K,N,J=[[],[]],P,O,z,R,S=[0,0,0,0];d.visible&&(h.enabled||d._hasPointLabels)&&(m(b,function(a){a.dataLabel&&a.visible&&a.dataLabel.shortened&&(a.dataLabel.attr({width:"auto"}).css({width:"auto",textOverflow:"clip"}),a.dataLabel.shortened=!1)}),c.prototype.drawDataLabels.apply(d),m(b,function(a){a.dataLabel&&(a.visible?(J[a.half].push(a),a.dataLabel._pos=null,!F(h.style.width)&&!F(a.options.dataLabels&&a.options.dataLabels.style&&a.options.dataLabels.style.width)&&a.dataLabel.getBBox().width>
n&&(a.dataLabel.css({width:.7*n}),a.dataLabel.shortened=!0)):a.dataLabel=a.dataLabel.destroy())}),m(J,function(b,c){var l,n,q=b.length,w=[],t;if(q)for(d.sortByAngle(b,c-.5),0<d.maxLabelDistance&&(l=Math.max(0,G-C-d.maxLabelDistance),n=Math.min(G+C+d.maxLabelDistance,f.plotHeight),m(b,function(a){0<a.labelDistance&&a.dataLabel&&(a.top=Math.max(0,G-C-a.labelDistance),a.bottom=Math.min(G+C+a.labelDistance,f.plotHeight),t=a.dataLabel.getBBox().height||21,a.distributeBox={target:a.labelPos[1]-a.top+t/
2,size:t,rank:a.y},w.push(a.distributeBox))}),l=n+t-l,a.distribute(w,l,l/5)),R=0;R<q;R++)e=b[R],K=e.labelPos,g=e.dataLabel,z=!1===e.visible?"hidden":"inherit",O=l=K[1],w&&F(e.distributeBox)&&(void 0===e.distributeBox.pos?z="hidden":(N=e.distributeBox.size,O=e.top+e.distributeBox.pos)),delete e.positionIndex,P=h.justify?x[0]+(c?-1:1)*(C+e.labelDistance):d.getX(O<e.top+2||O>e.bottom-2?l:O,c,e),g._attr={visibility:z,align:K[6]},g._pos={x:P+h.x+({left:k,right:-k}[K[6]]||0),y:O+h.y-10},K.x=P,K.y=O,u(h.crop,
!0)&&(y=g.getBBox().width,l=null,P-y<k&&1===c?(l=Math.round(y-P+k),S[3]=Math.max(l,S[3])):P+y>p-k&&0===c&&(l=Math.round(P+y-p+k),S[1]=Math.max(l,S[1])),0>O-N/2?S[0]=Math.max(Math.round(-O+N/2),S[0]):O+N/2>r&&(S[2]=Math.max(Math.round(O+N/2-r),S[2])),g.sideOverflow=l)}),0===E(S)||this.verifyDataLabelOverflow(S))&&(this.placeDataLabels(),l&&m(this.points,function(a){var b;t=a.connector;if((g=a.dataLabel)&&g._pos&&a.visible&&0<a.labelDistance){z=g._attr.visibility;if(b=!t)a.connector=t=f.renderer.path().addClass("highcharts-data-label-connector  highcharts-color-"+
a.colorIndex+(a.className?" "+a.className:"")).add(d.dataLabelsGroup),t.attr({"stroke-width":l,stroke:h.connectorColor||a.color||"#666666"});t[b?"attr":"animate"]({d:d.connectorPath(a.labelPos)});t.attr("visibility",z)}else t&&(a.connector=t.destroy())}))},k.pie.prototype.connectorPath=function(a){var b=a.x,c=a.y;return u(this.options.dataLabels.softConnector,!0)?["M",b+("left"===a[6]?5:-5),c,"C",b,c,2*a[2]-a[4],2*a[3]-a[5],a[2],a[3],"L",a[4],a[5]]:["M",b+("left"===a[6]?5:-5),c,"L",a[2],a[3],"L",
a[4],a[5]]},k.pie.prototype.placeDataLabels=function(){m(this.points,function(a){var b=a.dataLabel;b&&a.visible&&((a=b._pos)?(b.sideOverflow&&(b._attr.width=b.getBBox().width-b.sideOverflow,b.css({width:b._attr.width+"px",textOverflow:(this.options.dataLabels.style||{}).textOverflow||"ellipsis"}),b.shortened=!0),b.attr(b._attr),b[b.moved?"animate":"attr"](a),b.moved=!0):b&&b.attr({y:-9999}))},this)},k.pie.prototype.alignDataLabel=p,k.pie.prototype.verifyDataLabelOverflow=function(a){var b=this.center,
c=this.options,d=c.center,e=c.minSize||80,h,k=null!==c.size;k||(null!==d[0]?h=Math.max(b[2]-Math.max(a[1],a[3]),e):(h=Math.max(b[2]-a[1]-a[3],e),b[0]+=(a[3]-a[1])/2),null!==d[1]?h=Math.max(Math.min(h,b[2]-Math.max(a[0],a[2])),e):(h=Math.max(Math.min(h,b[2]-a[0]-a[2]),e),b[1]+=(a[0]-a[2])/2),h<b[2]?(b[2]=h,b[3]=Math.min(f(c.innerSize||0,h),h),this.translate(b),this.drawDataLabels&&this.drawDataLabels()):k=!0);return k});k.column&&(k.column.prototype.alignDataLabel=function(a,b,e,f,h){var d=this.chart.inverted,
k=a.series,l=a.dlBox||a.shapeArgs,m=u(a.below,a.plotY>u(this.translatedThreshold,k.yAxis.len)),n=u(e.inside,!!this.options.stacking);l&&(f=x(l),0>f.y&&(f.height+=f.y,f.y=0),l=f.y+f.height-k.yAxis.len,0<l&&(f.height-=l),d&&(f={x:k.yAxis.len-f.y-f.height,y:k.xAxis.len-f.x-f.width,width:f.height,height:f.width}),n||(d?(f.x+=m?0:f.width,f.width=0):(f.y+=m?f.height:0,f.height=0)));e.align=u(e.align,!d||n?"center":m?"right":"left");e.verticalAlign=u(e.verticalAlign,d||n?"middle":m?"top":"bottom");c.prototype.alignDataLabel.call(this,
a,b,e,f,h);a.isLabelJustified&&a.contrastColor&&a.dataLabel.css({color:a.contrastColor})})})(K);(function(a){var C=a.Chart,E=a.each,F=a.objectEach,m=a.pick;a=a.addEvent;a(C,"render",function(){var a=[];E(this.labelCollectors||[],function(e){a=a.concat(e())});E(this.yAxis||[],function(e){e.options.stackLabels&&!e.options.stackLabels.allowOverlap&&F(e.stacks,function(e){F(e,function(e){a.push(e.label)})})});E(this.series||[],function(e){var h=e.options.dataLabels,x=e.dataLabelCollections||["dataLabel"];
(h.enabled||e._hasPointLabels)&&!h.allowOverlap&&e.visible&&E(x,function(h){E(e.points,function(e){e[h]&&e.visible&&(e[h].labelrank=m(e.labelrank,e.shapeArgs&&e.shapeArgs.height),a.push(e[h]))})})});this.hideOverlappingLabels(a)});C.prototype.hideOverlappingLabels=function(a){var e=a.length,h=this.renderer,m,p,u,f,c,k,r=function(a,c,b,e,f,h,k,m){return!(f>a+b||f+k<a||h>c+e||h+m<c)};u=function(a){var c,b,e,f=2*(a.box?0:a.padding||0);e=0;if(a&&(!a.alignAttr||a.placed))return c=a.alignAttr||{x:a.attr("x"),
y:a.attr("y")},b=a.parentGroup,a.width||(e=a.getBBox(),a.width=e.width,a.height=e.height,e=h.fontMetrics(null,a.element).h),{x:c.x+(b.translateX||0),y:c.y+(b.translateY||0)-e,width:a.width-f,height:a.height-f}};for(p=0;p<e;p++)if(m=a[p])m.oldOpacity=m.opacity,m.newOpacity=1,m.absoluteBox=u(m);a.sort(function(a,c){return(c.labelrank||0)-(a.labelrank||0)});for(p=0;p<e;p++)for(k=(u=a[p])&&u.absoluteBox,m=p+1;m<e;++m)if(c=(f=a[m])&&f.absoluteBox,k&&c&&u!==f&&0!==u.newOpacity&&0!==f.newOpacity&&(c=r(k.x,
k.y,k.width,k.height,c.x,c.y,c.width,c.height)))(u.labelrank<f.labelrank?u:f).newOpacity=0;E(a,function(a){var c,b;a&&(b=a.newOpacity,a.oldOpacity!==b&&(a.alignAttr&&a.placed?(b?a.show(!0):c=function(){a.hide()},a.alignAttr.opacity=b,a[a.isOld?"animate":"attr"](a.alignAttr,null,c)):a.attr({opacity:b})),a.isOld=!0)})}})(K);(function(a){var C=a.addEvent,E=a.Chart,F=a.createElement,m=a.css,h=a.defaultOptions,e=a.defaultPlotOptions,t=a.each,x=a.extend,p=a.fireEvent,u=a.hasTouch,f=a.inArray,c=a.isObject,
k=a.Legend,r=a.merge,l=a.pick,d=a.Point,b=a.Series,v=a.seriesTypes,q=a.svg,I;I=a.TrackerMixin={drawTrackerPoint:function(){var a=this,b=a.chart.pointer,c=function(a){var c=b.getPointFromEvent(a);void 0!==c&&(b.isDirectTouch=!0,c.onMouseOver(a))};t(a.points,function(a){a.graphic&&(a.graphic.element.point=a);a.dataLabel&&(a.dataLabel.div?a.dataLabel.div.point=a:a.dataLabel.element.point=a)});a._hasTracking||(t(a.trackerGroups,function(d){if(a[d]){a[d].addClass("highcharts-tracker").on("mouseover",c).on("mouseout",
function(a){b.onTrackerMouseOut(a)});if(u)a[d].on("touchstart",c);a.options.cursor&&a[d].css(m).css({cursor:a.options.cursor})}}),a._hasTracking=!0);p(this,"afterDrawTracker")},drawTrackerGraph:function(){var a=this,b=a.options,c=b.trackByArea,d=[].concat(c?a.areaPath:a.graphPath),e=d.length,f=a.chart,h=f.pointer,k=f.renderer,l=f.options.tooltip.snap,g=a.tracker,m,r=function(){if(f.hoverSeries!==a)a.onMouseOver()},x="rgba(192,192,192,"+(q?.0001:.002)+")";if(e&&!c)for(m=e+1;m--;)"M"===d[m]&&d.splice(m+
1,0,d[m+1]-l,d[m+2],"L"),(m&&"M"===d[m]||m===e)&&d.splice(m,0,"L",d[m-2]+l,d[m-1]);g?g.attr({d:d}):a.graph&&(a.tracker=k.path(d).attr({"stroke-linejoin":"round",stroke:x,fill:c?x:"none","stroke-width":a.graph.strokeWidth()+(c?0:2*l),visibility:a.visible?"visible":"hidden",zIndex:2}).addClass(c?"highcharts-tracker-area":"highcharts-tracker-line").add(a.group),t([a.tracker,a.markerGroup],function(a){a.addClass("highcharts-tracker").on("mouseover",r).on("mouseout",function(a){h.onTrackerMouseOut(a)});
b.cursor&&a.css({cursor:b.cursor});if(u)a.on("touchstart",r)}));p(this,"afterDrawTracker")}};v.column&&(v.column.prototype.drawTracker=I.drawTrackerPoint);v.pie&&(v.pie.prototype.drawTracker=I.drawTrackerPoint);v.scatter&&(v.scatter.prototype.drawTracker=I.drawTrackerPoint);x(k.prototype,{setItemEvents:function(a,b,c){var e=this,f=e.chart.renderer.boxWrapper,h="highcharts-legend-"+(a instanceof d?"point":"series")+"-active";(c?b:a.legendGroup).on("mouseover",function(){a.setState("hover");f.addClass(h);
b.css(e.options.itemHoverStyle)}).on("mouseout",function(){b.css(r(a.visible?e.itemStyle:e.itemHiddenStyle));f.removeClass(h);a.setState()}).on("click",function(b){var c=function(){a.setVisible&&a.setVisible()};f.removeClass(h);b={browserEvent:b};a.firePointEvent?a.firePointEvent("legendItemClick",b,c):p(a,"legendItemClick",b,c)})},createCheckboxForItem:function(a){a.checkbox=F("input",{type:"checkbox",className:"highcharts-legend-checkbox",checked:a.selected,defaultChecked:a.selected},this.options.itemCheckboxStyle,
this.chart.container);C(a.checkbox,"click",function(b){p(a.series||a,"checkboxClick",{checked:b.target.checked,item:a},function(){a.select()})})}});h.legend.itemStyle.cursor="pointer";x(E.prototype,{showResetZoom:function(){function a(){b.zoomOut()}var b=this,c=h.lang,d=b.options.chart.resetZoomButton,e=d.theme,f=e.states,k="chart"===d.relativeTo?null:"plotBox";p(this,"beforeShowResetZoom",null,function(){b.resetZoomButton=b.renderer.button(c.resetZoom,null,null,a,e,f&&f.hover).attr({align:d.position.align,
title:c.resetZoomTitle}).addClass("highcharts-reset-zoom").add().align(d.position,!1,k)})},zoomOut:function(){p(this,"selection",{resetSelection:!0},this.zoom)},zoom:function(a){var b,d=this.pointer,e=!1,f;!a||a.resetSelection?(t(this.axes,function(a){b=a.zoom()}),d.initiated=!1):t(a.xAxis.concat(a.yAxis),function(a){var c=a.axis;d[c.isXAxis?"zoomX":"zoomY"]&&(b=c.zoom(a.min,a.max),c.displayBtn&&(e=!0))});f=this.resetZoomButton;e&&!f?this.showResetZoom():!e&&c(f)&&(this.resetZoomButton=f.destroy());
b&&this.redraw(l(this.options.chart.animation,a&&a.animation,100>this.pointCount))},pan:function(a,b){var c=this,d=c.hoverPoints,e;d&&t(d,function(a){a.setState()});t("xy"===b?[1,0]:[1],function(b){b=c[b?"xAxis":"yAxis"][0];var d=b.horiz,f=a[d?"chartX":"chartY"],d=d?"mouseDownX":"mouseDownY",h=c[d],g=(b.pointRange||0)/2,k=b.reversed&&!c.inverted||!b.reversed&&c.inverted?-1:1,l=b.getExtremes(),n=b.toValue(h-f,!0)+g*k,k=b.toValue(h+b.len-f,!0)-g*k,m=k<n,h=m?k:n,n=m?n:k,k=Math.min(l.dataMin,g?l.min:
b.toValue(b.toPixels(l.min)-b.minPixelPadding)),g=Math.max(l.dataMax,g?l.max:b.toValue(b.toPixels(l.max)+b.minPixelPadding)),m=k-h;0<m&&(n+=m,h=k);m=n-g;0<m&&(n=g,h-=m);b.series.length&&h!==l.min&&n!==l.max&&(b.setExtremes(h,n,!1,!1,{trigger:"pan"}),e=!0);c[d]=f});e&&c.redraw(!1);m(c.container,{cursor:"move"})}});x(d.prototype,{select:function(a,b){var c=this,d=c.series,e=d.chart;a=l(a,!c.selected);c.firePointEvent(a?"select":"unselect",{accumulate:b},function(){c.selected=c.options.selected=a;d.options.data[f(c,
d.data)]=c.options;c.setState(a&&"select");b||t(e.getSelectedPoints(),function(a){a.selected&&a!==c&&(a.selected=a.options.selected=!1,d.options.data[f(a,d.data)]=a.options,a.setState(""),a.firePointEvent("unselect"))})})},onMouseOver:function(a){var b=this.series.chart,c=b.pointer;a=a?c.normalize(a):c.getChartCoordinatesFromPoint(this,b.inverted);c.runPointActions(a,this)},onMouseOut:function(){var a=this.series.chart;this.firePointEvent("mouseOut");t(a.hoverPoints||[],function(a){a.setState()});
a.hoverPoints=a.hoverPoint=null},importEvents:function(){if(!this.hasImportedEvents){var b=this,c=r(b.series.options.point,b.options).events;b.events=c;a.objectEach(c,function(a,c){C(b,c,a)});this.hasImportedEvents=!0}},setState:function(a,b){var c=Math.floor(this.plotX),d=this.plotY,f=this.series,h=f.options.states[a||"normal"]||{},k=e[f.type].marker&&f.options.marker,m=k&&!1===k.enabled,q=k&&k.states&&k.states[a||"normal"]||{},g=!1===q.enabled,r=f.stateMarkerGraphic,t=this.marker||{},u=f.chart,
w=f.halo,v,C=k&&f.markerAttribs;a=a||"";if(!(a===this.state&&!b||this.selected&&"select"!==a||!1===h.enabled||a&&(g||m&&!1===q.enabled)||a&&t.states&&t.states[a]&&!1===t.states[a].enabled)){C&&(v=f.markerAttribs(this,a));if(this.graphic)this.state&&this.graphic.removeClass("highcharts-point-"+this.state),a&&this.graphic.addClass("highcharts-point-"+a),this.graphic.animate(f.pointAttribs(this,a),l(u.options.chart.animation,h.animation)),v&&this.graphic.animate(v,l(u.options.chart.animation,q.animation,
k.animation)),r&&r.hide();else{if(a&&q){k=t.symbol||f.symbol;r&&r.currentSymbol!==k&&(r=r.destroy());if(r)r[b?"animate":"attr"]({x:v.x,y:v.y});else k&&(f.stateMarkerGraphic=r=u.renderer.symbol(k,v.x,v.y,v.width,v.height).add(f.markerGroup),r.currentSymbol=k);r&&r.attr(f.pointAttribs(this,a))}r&&(r[a&&u.isInsidePlot(c,d,u.inverted)?"show":"hide"](),r.element.point=this)}(c=h.halo)&&c.size?(w||(f.halo=w=u.renderer.path().add((this.graphic||r).parentGroup)),w.show()[b?"animate":"attr"]({d:this.haloPath(c.size)}),
w.attr({"class":"highcharts-halo highcharts-color-"+l(this.colorIndex,f.colorIndex)+(this.className?" "+this.className:""),zIndex:-1}),w.point=this,w.attr(x({fill:this.color||f.color,"fill-opacity":c.opacity},c.attributes))):w&&w.point&&w.point.haloPath&&w.animate({d:w.point.haloPath(0)},null,w.hide);this.state=a;p(this,"afterSetState")}},haloPath:function(a){return this.series.chart.renderer.symbols.circle(Math.floor(this.plotX)-a,this.plotY-a,2*a,2*a)}});x(b.prototype,{onMouseOver:function(){var a=
this.chart,b=a.hoverSeries;if(b&&b!==this)b.onMouseOut();this.options.events.mouseOver&&p(this,"mouseOver");this.setState("hover");a.hoverSeries=this},onMouseOut:function(){var a=this.options,b=this.chart,c=b.tooltip,d=b.hoverPoint;b.hoverSeries=null;if(d)d.onMouseOut();this&&a.events.mouseOut&&p(this,"mouseOut");!c||this.stickyTracking||c.shared&&!this.noSharedTooltip||c.hide();this.setState()},setState:function(a){var b=this,c=b.options,d=b.graph,e=c.states,f=c.lineWidth,c=0;a=a||"";if(b.state!==
a&&(t([b.group,b.markerGroup,b.dataLabelsGroup],function(c){c&&(b.state&&c.removeClass("highcharts-series-"+b.state),a&&c.addClass("highcharts-series-"+a))}),b.state=a,!e[a]||!1!==e[a].enabled)&&(a&&(f=e[a].lineWidth||f+(e[a].lineWidthPlus||0)),d&&!d.dashstyle))for(f={"stroke-width":f},d.animate(f,l(e[a||"normal"]&&e[a||"normal"].animation,b.chart.options.chart.animation));b["zone-graph-"+c];)b["zone-graph-"+c].attr(f),c+=1},setVisible:function(a,b){var c=this,d=c.chart,e=c.legendItem,f,h=d.options.chart.ignoreHiddenSeries,
k=c.visible;f=(c.visible=a=c.options.visible=c.userOptions.visible=void 0===a?!k:a)?"show":"hide";t(["group","dataLabelsGroup","markerGroup","tracker","tt"],function(a){if(c[a])c[a][f]()});if(d.hoverSeries===c||(d.hoverPoint&&d.hoverPoint.series)===c)c.onMouseOut();e&&d.legend.colorizeItem(c,a);c.isDirty=!0;c.options.stacking&&t(d.series,function(a){a.options.stacking&&a.visible&&(a.isDirty=!0)});t(c.linkedSeries,function(b){b.setVisible(a,!1)});h&&(d.isDirtyBox=!0);p(c,f);!1!==b&&d.redraw()},show:function(){this.setVisible(!0)},
hide:function(){this.setVisible(!1)},select:function(a){this.selected=a=void 0===a?!this.selected:a;this.checkbox&&(this.checkbox.checked=a);p(this,a?"select":"unselect")},drawTracker:I.drawTrackerGraph})})(K);(function(a){var C=a.Chart,E=a.each,F=a.inArray,m=a.isArray,h=a.isObject,e=a.pick,t=a.splat;C.prototype.setResponsive=function(e){var h=this.options.responsive,m=[],f=this.currentResponsive;h&&h.rules&&E(h.rules,function(c){void 0===c._id&&(c._id=a.uniqueKey());this.matchResponsiveRule(c,m,
e)},this);var c=a.merge.apply(0,a.map(m,function(c){return a.find(h.rules,function(a){return a._id===c}).chartOptions})),m=m.toString()||void 0;m!==(f&&f.ruleIds)&&(f&&this.update(f.undoOptions,e),m?(this.currentResponsive={ruleIds:m,mergedOptions:c,undoOptions:this.currentOptions(c)},this.update(c,e)):this.currentResponsive=void 0)};C.prototype.matchResponsiveRule=function(a,h){var m=a.condition;(m.callback||function(){return this.chartWidth<=e(m.maxWidth,Number.MAX_VALUE)&&this.chartHeight<=e(m.maxHeight,
Number.MAX_VALUE)&&this.chartWidth>=e(m.minWidth,0)&&this.chartHeight>=e(m.minHeight,0)}).call(this)&&h.push(a._id)};C.prototype.currentOptions=function(e){function p(e,c,k,r){var f;a.objectEach(e,function(a,b){if(!r&&-1<F(b,["series","xAxis","yAxis"]))for(a=t(a),k[b]=[],f=0;f<a.length;f++)c[b][f]&&(k[b][f]={},p(a[f],c[b][f],k[b][f],r+1));else h(a)?(k[b]=m(a)?[]:{},p(a,c[b]||{},k[b],r+1)):k[b]=c[b]||null})}var u={};p(e,this.options,u,0);return u}})(K);return K});
//# sourceMappingURL=highcharts.js.map


/***/ }),

/***/ "./node_modules/highcharts/modules/stock.src.js":
/*!******************************************************!*\
  !*** ./node_modules/highcharts/modules/stock.src.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @license Highcharts JS v6.1.4 (2018-09-25)
 * Highstock as a plugin for Highcharts
 *
 * (c) 2017 Torstein Honsi
 *
 * License: www.highcharts.com/license
 */

(function (factory) {
	if (typeof module === 'object' && module.exports) {
		module.exports = factory;
	} else if (true) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return factory;
		}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}(function (Highcharts) {
	(function (H) {
		/**
		 * (c) 2010-2017 Torstein Honsi
		 *
		 * License: www.highcharts.com/license
		 */
		/* eslint max-len: 0 */
		var addEvent = H.addEvent,
		    Axis = H.Axis,
		    Chart = H.Chart,
		    css = H.css,
		    defined = H.defined,
		    each = H.each,
		    extend = H.extend,
		    noop = H.noop,
		    pick = H.pick,
		    Series = H.Series,
		    timeUnits = H.timeUnits,
		    wrap = H.wrap;

		/* ****************************************************************************
		 * Start ordinal axis logic                                                   *
		 *****************************************************************************/


		wrap(Series.prototype, 'init', function (proceed) {
		    var series = this,
		        xAxis;

		    // call the original function
		    proceed.apply(this, Array.prototype.slice.call(arguments, 1));

		    xAxis = series.xAxis;

		    // Destroy the extended ordinal index on updated data
		    if (xAxis && xAxis.options.ordinal) {
		        addEvent(series, 'updatedData', function () {
		            delete xAxis.ordinalIndex;
		        });
		    }
		});

		/**
		 * In an ordinal axis, there might be areas with dense consentrations of points, then large
		 * gaps between some. Creating equally distributed ticks over this entire range
		 * may lead to a huge number of ticks that will later be removed. So instead, break the
		 * positions up in segments, find the tick positions for each segment then concatenize them.
		 * This method is used from both data grouping logic and X axis tick position logic.
		 */
		wrap(Axis.prototype, 'getTimeTicks', function (proceed, normalizedInterval, min, max, startOfWeek, positions, closestDistance, findHigherRanks) {

		    var start = 0,
		        end,
		        segmentPositions,
		        higherRanks = {},
		        hasCrossedHigherRank,
		        info,
		        posLength,
		        outsideMax,
		        groupPositions = [],
		        lastGroupPosition = -Number.MAX_VALUE,
		        tickPixelIntervalOption = this.options.tickPixelInterval,
		        time = this.chart.time;

		    // The positions are not always defined, for example for ordinal positions
		    // when data has regular interval (#1557, #2090)
		    if (
		        (!this.options.ordinal && !this.options.breaks) ||
		        !positions ||
		        positions.length < 3 ||
		        min === undefined
		    ) {
		        return proceed.call(this, normalizedInterval, min, max, startOfWeek);
		    }

		    // Analyze the positions array to split it into segments on gaps larger than 5 times
		    // the closest distance. The closest distance is already found at this point, so
		    // we reuse that instead of computing it again.
		    posLength = positions.length;

		    for (end = 0; end < posLength; end++) {

		        outsideMax = end && positions[end - 1] > max;

		        if (positions[end] < min) { // Set the last position before min
		            start = end;
		        }

		        if (end === posLength - 1 || positions[end + 1] - positions[end] > closestDistance * 5 || outsideMax) {

		            // For each segment, calculate the tick positions from the getTimeTicks utility
		            // function. The interval will be the same regardless of how long the segment is.
		            if (positions[end] > lastGroupPosition) { // #1475

		                segmentPositions = proceed.call(this, normalizedInterval, positions[start], positions[end], startOfWeek);

		                // Prevent duplicate groups, for example for multiple segments within one larger time frame (#1475)
		                while (segmentPositions.length && segmentPositions[0] <= lastGroupPosition) {
		                    segmentPositions.shift();
		                }
		                if (segmentPositions.length) {
		                    lastGroupPosition = segmentPositions[segmentPositions.length - 1];
		                }

		                groupPositions = groupPositions.concat(segmentPositions);
		            }
		            // Set start of next segment
		            start = end + 1;
		        }

		        if (outsideMax) {
		            break;
		        }
		    }

		    // Get the grouping info from the last of the segments. The info is the same for
		    // all segments.
		    info = segmentPositions.info;

		    // Optionally identify ticks with higher rank, for example when the ticks
		    // have crossed midnight.
		    if (findHigherRanks && info.unitRange <= timeUnits.hour) {
		        end = groupPositions.length - 1;

		        // Compare points two by two
		        for (start = 1; start < end; start++) {
		            if (
		                time.dateFormat('%d', groupPositions[start]) !==
		                time.dateFormat('%d', groupPositions[start - 1])
		            ) {
		                higherRanks[groupPositions[start]] = 'day';
		                hasCrossedHigherRank = true;
		            }
		        }

		        // If the complete array has crossed midnight, we want to mark the first
		        // positions also as higher rank
		        if (hasCrossedHigherRank) {
		            higherRanks[groupPositions[0]] = 'day';
		        }
		        info.higherRanks = higherRanks;
		    }

		    // Save the info
		    groupPositions.info = info;



		    // Don't show ticks within a gap in the ordinal axis, where the space between
		    // two points is greater than a portion of the tick pixel interval
		    if (findHigherRanks && defined(tickPixelIntervalOption)) { // check for squashed ticks

		        var length = groupPositions.length,
		            i = length,
		            itemToRemove,
		            translated,
		            translatedArr = [],
		            lastTranslated,
		            medianDistance,
		            distance,
		            distances = [];

		        // Find median pixel distance in order to keep a reasonably even distance between
		        // ticks (#748)
		        while (i--) {
		            translated = this.translate(groupPositions[i]);
		            if (lastTranslated) {
		                distances[i] = lastTranslated - translated;
		            }
		            translatedArr[i] = lastTranslated = translated;
		        }
		        distances.sort();
		        medianDistance = distances[Math.floor(distances.length / 2)];
		        if (medianDistance < tickPixelIntervalOption * 0.6) {
		            medianDistance = null;
		        }

		        // Now loop over again and remove ticks where needed
		        i = groupPositions[length - 1] > max ? length - 1 : length; // #817
		        lastTranslated = undefined;
		        while (i--) {
		            translated = translatedArr[i];
		            distance = Math.abs(lastTranslated - translated);
		            // #4175 - when axis is reversed, the distance, is negative but
		            // tickPixelIntervalOption positive, so we need to compare the same values

		            // Remove ticks that are closer than 0.6 times the pixel interval from the one to the right,
		            // but not if it is close to the median distance (#748).
		            if (lastTranslated && distance < tickPixelIntervalOption * 0.8 &&
		                    (medianDistance === null || distance < medianDistance * 0.8)) {

		                // Is this a higher ranked position with a normal position to the right?
		                if (higherRanks[groupPositions[i]] && !higherRanks[groupPositions[i + 1]]) {

		                    // Yes: remove the lower ranked neighbour to the right
		                    itemToRemove = i + 1;
		                    lastTranslated = translated; // #709

		                } else {

		                    // No: remove this one
		                    itemToRemove = i;
		                }

		                groupPositions.splice(itemToRemove, 1);

		            } else {
		                lastTranslated = translated;
		            }
		        }
		    }
		    return groupPositions;
		});

		// Extend the Axis prototype
		extend(Axis.prototype, /** @lends Axis.prototype */ {

		    /**
		     * Calculate the ordinal positions before tick positions are calculated.
		     */
		    beforeSetTickPositions: function () {
		        var axis = this,
		            len,
		            ordinalPositions = [],
		            uniqueOrdinalPositions,
		            useOrdinal = false,
		            dist,
		            extremes = axis.getExtremes(),
		            min = extremes.min,
		            max = extremes.max,
		            minIndex,
		            maxIndex,
		            slope,
		            hasBreaks = axis.isXAxis && !!axis.options.breaks,
		            isOrdinal = axis.options.ordinal,
		            overscrollPointsRange = Number.MAX_VALUE,
		            ignoreHiddenSeries = axis.chart.options.chart.ignoreHiddenSeries,
		            isNavigatorAxis = axis.options.className === 'highcharts-navigator-xaxis',
		            i,
		            hasBoostedSeries;

		        if (
		            axis.options.overscroll &&
		            axis.max === axis.dataMax &&
		            (
		                // Panning is an execption,
		                // We don't want to apply overscroll when panning over the dataMax
		                !axis.chart.mouseIsDown ||
		                isNavigatorAxis
		            ) && (
		                // Scrollbar buttons are the other execption:
		                !axis.eventArgs ||
		                axis.eventArgs && axis.eventArgs.trigger !== 'navigator'
		            )
		        ) {
		            axis.max += axis.options.overscroll;

		            // Live data and buttons require translation for the min:
		            if (!isNavigatorAxis && defined(axis.userMin)) {
		                axis.min += axis.options.overscroll;
		            }
		        }

		        // Apply the ordinal logic
		        if (isOrdinal || hasBreaks) { // #4167 YAxis is never ordinal ?

		            each(axis.series, function (series, i) {
		                uniqueOrdinalPositions = [];

		                if (
		                    (!ignoreHiddenSeries || series.visible !== false) &&
		                    (series.takeOrdinalPosition !== false || hasBreaks)
		                ) {

		                    // concatenate the processed X data into the existing positions, or the empty array
		                    ordinalPositions = ordinalPositions.concat(series.processedXData);
		                    len = ordinalPositions.length;

		                    // remove duplicates (#1588)
		                    ordinalPositions.sort(function (a, b) {
		                        return a - b; // without a custom function it is sorted as strings
		                    });

		                    overscrollPointsRange = Math.min(
		                        overscrollPointsRange,
		                        pick(
		                            // Check for a single-point series:
		                            series.closestPointRange,
		                            overscrollPointsRange
		                        )
		                    );

		                    if (len) {

		                        i = 0;
		                        while (i < len - 1) {
		                            if (
		                                ordinalPositions[i] !== ordinalPositions[i + 1]
		                            ) {
		                                uniqueOrdinalPositions.push(
		                                    ordinalPositions[i + 1]
		                                );
		                            }
		                            i++;
		                        }

		                        // Check first item:
		                        if (
		                            uniqueOrdinalPositions[0] !== ordinalPositions[0]
		                        ) {
		                            uniqueOrdinalPositions.unshift(
		                                ordinalPositions[0]
		                            );
		                        }

		                        ordinalPositions = uniqueOrdinalPositions;
		                    }
		                }

		                if (series.isSeriesBoosting) {
		                    hasBoostedSeries = true;
		                }

		            });

		            if (hasBoostedSeries) {
		                ordinalPositions.length = 0;
		            }

		            // cache the length
		            len = ordinalPositions.length;

		            // Check if we really need the overhead of mapping axis data against the ordinal positions.
		            // If the series consist of evenly spaced data any way, we don't need any ordinal logic.
		            if (len > 2) { // two points have equal distance by default
		                dist = ordinalPositions[1] - ordinalPositions[0];
		                i = len - 1;
		                while (i-- && !useOrdinal) {
		                    if (ordinalPositions[i + 1] - ordinalPositions[i] !== dist) {
		                        useOrdinal = true;
		                    }
		                }

		                // When zooming in on a week, prevent axis padding for weekends even though the data within
		                // the week is evenly spaced.
		                if (
		                    !axis.options.keepOrdinalPadding &&
		                    (
		                        ordinalPositions[0] - min > dist ||
		                        max - ordinalPositions[ordinalPositions.length - 1] > dist
		                    )
		                ) {
		                    useOrdinal = true;
		                }
		            } else if (axis.options.overscroll) {
		                if (len === 2) {
		                    // Exactly two points, distance for overscroll is fixed:
		                    overscrollPointsRange = ordinalPositions[1] - ordinalPositions[0];
		                } else if (len === 1) {
		                    // We have just one point, closest distance is unknown.
		                    // Assume then it is last point and overscrolled range:
		                    overscrollPointsRange = axis.options.overscroll;
		                    ordinalPositions = [ordinalPositions[0], ordinalPositions[0] + overscrollPointsRange];
		                } else {
		                    // In case of zooming in on overscrolled range, stick to the old range:
		                    overscrollPointsRange = axis.overscrollPointsRange;
		                }
		            }

		            // Record the slope and offset to compute the linear values from the array index.
		            // Since the ordinal positions may exceed the current range, get the start and
		            // end positions within it (#719, #665b)
		            if (useOrdinal) {

		                if (axis.options.overscroll) {
		                    axis.overscrollPointsRange = overscrollPointsRange;
		                    ordinalPositions = ordinalPositions.concat(axis.getOverscrollPositions());
		                }

		                // Register
		                axis.ordinalPositions = ordinalPositions;

		                // This relies on the ordinalPositions being set. Use Math.max
		                // and Math.min to prevent padding on either sides of the data.
		                minIndex = axis.ordinal2lin( // #5979
		                    Math.max(
		                        min,
		                        ordinalPositions[0]
		                    ),
		                    true
		                );
		                maxIndex = Math.max(axis.ordinal2lin(
		                    Math.min(
		                        max,
		                        ordinalPositions[ordinalPositions.length - 1]
		                    ),
		                    true
		                ), 1); // #3339

		                // Set the slope and offset of the values compared to the indices in the ordinal positions
		                axis.ordinalSlope = slope = (max - min) / (maxIndex - minIndex);
		                axis.ordinalOffset = min - (minIndex * slope);

		            } else {
		                axis.overscrollPointsRange = pick(axis.closestPointRange, axis.overscrollPointsRange);
		                axis.ordinalPositions = axis.ordinalSlope = axis.ordinalOffset = undefined;
		            }
		        }

		        axis.isOrdinal = isOrdinal && useOrdinal; // #3818, #4196, #4926
		        axis.groupIntervalFactor = null; // reset for next run
		    },
		    /**
		     * Translate from a linear axis value to the corresponding ordinal axis position. If there
		     * are no gaps in the ordinal axis this will be the same. The translated value is the value
		     * that the point would have if the axis were linear, using the same min and max.
		     *
		     * @param Number val The axis value
		     * @param Boolean toIndex Whether to return the index in the ordinalPositions or the new value
		     */
		    val2lin: function (val, toIndex) {
		        var axis = this,
		            ordinalPositions = axis.ordinalPositions,
		            ret;

		        if (!ordinalPositions) {
		            ret = val;

		        } else {

		            var ordinalLength = ordinalPositions.length,
		                i,
		                distance,
		                ordinalIndex;

		            // first look for an exact match in the ordinalpositions array
		            i = ordinalLength;
		            while (i--) {
		                if (ordinalPositions[i] === val) {
		                    ordinalIndex = i;
		                    break;
		                }
		            }

		            // if that failed, find the intermediate position between the two nearest values
		            i = ordinalLength - 1;
		            while (i--) {
		                if (val > ordinalPositions[i] || i === 0) { // interpolate
		                    distance = (val - ordinalPositions[i]) / (ordinalPositions[i + 1] - ordinalPositions[i]); // something between 0 and 1
		                    ordinalIndex = i + distance;
		                    break;
		                }
		            }
		            ret = toIndex ?
		                ordinalIndex :
		                axis.ordinalSlope * (ordinalIndex || 0) + axis.ordinalOffset;
		        }
		        return ret;
		    },
		    /**
		     * Translate from linear (internal) to axis value
		     *
		     * @param Number val The linear abstracted value
		     * @param Boolean fromIndex Translate from an index in the ordinal positions rather than a value
		     */
		    lin2val: function (val, fromIndex) {
		        var axis = this,
		            ordinalPositions = axis.ordinalPositions,
		            ret;

		        if (!ordinalPositions) { // the visible range contains only equally spaced values
		            ret = val;

		        } else {

		            var ordinalSlope = axis.ordinalSlope,
		                ordinalOffset = axis.ordinalOffset,
		                i = ordinalPositions.length - 1,
		                linearEquivalentLeft,
		                linearEquivalentRight,
		                distance;


		            // Handle the case where we translate from the index directly, used only
		            // when panning an ordinal axis
		            if (fromIndex) {

		                if (val < 0) { // out of range, in effect panning to the left
		                    val = ordinalPositions[0];
		                } else if (val > i) { // out of range, panning to the right
		                    val = ordinalPositions[i];
		                } else { // split it up
		                    i = Math.floor(val);
		                    distance = val - i; // the decimal
		                }

		            // Loop down along the ordinal positions. When the linear equivalent of i matches
		            // an ordinal position, interpolate between the left and right values.
		            } else {
		                while (i--) {
		                    linearEquivalentLeft = (ordinalSlope * i) + ordinalOffset;
		                    if (val >= linearEquivalentLeft) {
		                        linearEquivalentRight = (ordinalSlope * (i + 1)) + ordinalOffset;
		                        distance = (val - linearEquivalentLeft) / (linearEquivalentRight - linearEquivalentLeft); // something between 0 and 1
		                        break;
		                    }
		                }
		            }

		            // If the index is within the range of the ordinal positions, return the associated
		            // or interpolated value. If not, just return the value
		            return distance !== undefined && ordinalPositions[i] !== undefined ?
		                ordinalPositions[i] + (distance ? distance * (ordinalPositions[i + 1] - ordinalPositions[i]) : 0) :
		                val;
		        }
		        return ret;
		    },
		    /**
		     * Get the ordinal positions for the entire data set. This is necessary in chart panning
		     * because we need to find out what points or data groups are available outside the
		     * visible range. When a panning operation starts, if an index for the given grouping
		     * does not exists, it is created and cached. This index is deleted on updated data, so
		     * it will be regenerated the next time a panning operation starts.
		     */
		    getExtendedPositions: function () {
		        var axis = this,
		            chart = axis.chart,
		            grouping = axis.series[0].currentDataGrouping,
		            ordinalIndex = axis.ordinalIndex,
		            key = grouping ? grouping.count + grouping.unitName : 'raw',
		            overscroll = axis.options.overscroll,
		            extremes = axis.getExtremes(),
		            fakeAxis,
		            fakeSeries;

		        // If this is the first time, or the ordinal index is deleted by updatedData,
		        // create it.
		        if (!ordinalIndex) {
		            ordinalIndex = axis.ordinalIndex = {};
		        }


		        if (!ordinalIndex[key]) {

		            // Create a fake axis object where the extended ordinal positions are emulated
		            fakeAxis = {
		                series: [],
		                chart: chart,
		                getExtremes: function () {
		                    return {
		                        min: extremes.dataMin,
		                        max: extremes.dataMax + overscroll
		                    };
		                },
		                options: {
		                    ordinal: true
		                },
		                val2lin: Axis.prototype.val2lin, // #2590
		                ordinal2lin: Axis.prototype.ordinal2lin // #6276
		            };

		            // Add the fake series to hold the full data, then apply processData to it
		            each(axis.series, function (series) {
		                fakeSeries = {
		                    xAxis: fakeAxis,
		                    xData: series.xData.slice(),
		                    chart: chart,
		                    destroyGroupedData: noop
		                };

		                fakeSeries.xData = fakeSeries.xData.concat(axis.getOverscrollPositions());

		                fakeSeries.options = {
		                    dataGrouping: grouping ? {
		                        enabled: true,
		                        forced: true,
		                        approximation: 'open', // doesn't matter which, use the fastest
		                        units: [[grouping.unitName, [grouping.count]]]
		                    } : {
		                        enabled: false
		                    }
		                };
		                series.processData.apply(fakeSeries);


		                fakeAxis.series.push(fakeSeries);
		            });

		            // Run beforeSetTickPositions to compute the ordinalPositions
		            axis.beforeSetTickPositions.apply(fakeAxis);

		            // Cache it
		            ordinalIndex[key] = fakeAxis.ordinalPositions;
		        }
		        return ordinalIndex[key];
		    },

		    /**
		     * Get ticks for an ordinal axis within a range where points don't exist.
		     * It is required when overscroll is enabled. We can't base on points,
		     * because we may not have any, so we use approximated pointRange and
		     * generate these ticks between <Axis.dataMax, Axis.dataMax + Axis.overscroll>
		     * evenly spaced. Used in panning and navigator scrolling.
		     *
		     * @returns positions {Array} Generated ticks
		     * @private
		     */
		    getOverscrollPositions: function () {
		        var axis = this,
		            extraRange = axis.options.overscroll,
		            distance = axis.overscrollPointsRange,
		            positions = [],
		            max = axis.dataMax;

		        if (H.defined(distance)) {
		            // Max + pointRange because we need to scroll to the last

		            positions.push(max);

		            while (max <= axis.dataMax + extraRange) {
		                max += distance;
		                positions.push(max);
		            }

		        }

		        return positions;
		    },

		    /**
		     * Find the factor to estimate how wide the plot area would have been if ordinal
		     * gaps were included. This value is used to compute an imagined plot width in order
		     * to establish the data grouping interval.
		     *
		     * A real world case is the intraday-candlestick
		     * example. Without this logic, it would show the correct data grouping when viewing
		     * a range within each day, but once moving the range to include the gap between two
		     * days, the interval would include the cut-away night hours and the data grouping
		     * would be wrong. So the below method tries to compensate by identifying the most
		     * common point interval, in this case days.
		     *
		     * An opposite case is presented in issue #718. We have a long array of daily data,
		     * then one point is appended one hour after the last point. We expect the data grouping
		     * not to change.
		     *
		     * In the future, if we find cases where this estimation doesn't work optimally, we
		     * might need to add a second pass to the data grouping logic, where we do another run
		     * with a greater interval if the number of data groups is more than a certain fraction
		     * of the desired group count.
		     */
		    getGroupIntervalFactor: function (xMin, xMax, series) {
		        var i,
		            processedXData = series.processedXData,
		            len = processedXData.length,
		            distances = [],
		            median,
		            groupIntervalFactor = this.groupIntervalFactor;

		        // Only do this computation for the first series, let the other inherit it (#2416)
		        if (!groupIntervalFactor) {

		            // Register all the distances in an array
		            for (i = 0; i < len - 1; i++) {
		                distances[i] = processedXData[i + 1] - processedXData[i];
		            }

		            // Sort them and find the median
		            distances.sort(function (a, b) {
		                return a - b;
		            });
		            median = distances[Math.floor(len / 2)];

		            // Compensate for series that don't extend through the entire axis extent. #1675.
		            xMin = Math.max(xMin, processedXData[0]);
		            xMax = Math.min(xMax, processedXData[len - 1]);

		            this.groupIntervalFactor = groupIntervalFactor = (len * median) / (xMax - xMin);
		        }

		        // Return the factor needed for data grouping
		        return groupIntervalFactor;
		    },

		    /**
		     * Make the tick intervals closer because the ordinal gaps make the ticks spread out or cluster
		     */
		    postProcessTickInterval: function (tickInterval) {
		        // Problem: https://jsfiddle.net/highcharts/FQm4E/1/
		        // This is a case where this algorithm doesn't work optimally. In this case, the
		        // tick labels are spread out per week, but all the gaps reside within weeks. So
		        // we have a situation where the labels are courser than the ordinal gaps, and
		        // thus the tick interval should not be altered
		        var ordinalSlope = this.ordinalSlope,
		            ret;


		        if (ordinalSlope) {
		            if (!this.options.breaks) {
		                ret = tickInterval / (ordinalSlope / this.closestPointRange);
		            } else {
		                ret = this.closestPointRange || tickInterval; // #7275
		            }
		        } else {
		            ret = tickInterval;
		        }
		        return ret;
		    }
		});

		// Record this to prevent overwriting by broken-axis module (#5979)
		Axis.prototype.ordinal2lin = Axis.prototype.val2lin;

		// Extending the Chart.pan method for ordinal axes
		wrap(Chart.prototype, 'pan', function (proceed, e) {
		    var chart = this,
		        xAxis = chart.xAxis[0],
		        overscroll = xAxis.options.overscroll,
		        chartX = e.chartX,
		        runBase = false;

		    if (xAxis.options.ordinal && xAxis.series.length) {

		        var mouseDownX = chart.mouseDownX,
		            extremes = xAxis.getExtremes(),
		            dataMax = extremes.dataMax,
		            min = extremes.min,
		            max = extremes.max,
		            trimmedRange,
		            hoverPoints = chart.hoverPoints,
		            closestPointRange = xAxis.closestPointRange || xAxis.overscrollPointsRange,
		            pointPixelWidth = xAxis.translationSlope * (xAxis.ordinalSlope || closestPointRange),
		            movedUnits = (mouseDownX - chartX) / pointPixelWidth, // how many ordinal units did we move?
		            extendedAxis = { ordinalPositions: xAxis.getExtendedPositions() }, // get index of all the chart's points
		            ordinalPositions,
		            searchAxisLeft,
		            lin2val = xAxis.lin2val,
		            val2lin = xAxis.val2lin,
		            searchAxisRight;

		        if (!extendedAxis.ordinalPositions) { // we have an ordinal axis, but the data is equally spaced
		            runBase = true;

		        } else if (Math.abs(movedUnits) > 1) {

		            // Remove active points for shared tooltip
		            if (hoverPoints) {
		                each(hoverPoints, function (point) {
		                    point.setState();
		                });
		            }

		            if (movedUnits < 0) {
		                searchAxisLeft = extendedAxis;
		                searchAxisRight = xAxis.ordinalPositions ? xAxis : extendedAxis;
		            } else {
		                searchAxisLeft = xAxis.ordinalPositions ? xAxis : extendedAxis;
		                searchAxisRight = extendedAxis;
		            }

		            // In grouped data series, the last ordinal position represents the grouped data, which is
		            // to the left of the real data max. If we don't compensate for this, we will be allowed
		            // to pan grouped data series passed the right of the plot area.
		            ordinalPositions = searchAxisRight.ordinalPositions;
		            if (dataMax > ordinalPositions[ordinalPositions.length - 1]) {
		                ordinalPositions.push(dataMax);
		            }

		            // Get the new min and max values by getting the ordinal index for the current extreme,
		            // then add the moved units and translate back to values. This happens on the
		            // extended ordinal positions if the new position is out of range, else it happens
		            // on the current x axis which is smaller and faster.
		            chart.fixedRange = max - min;
		            trimmedRange = xAxis.toFixedRange(null, null,
		                lin2val.apply(searchAxisLeft, [
		                    val2lin.apply(searchAxisLeft, [min, true]) + movedUnits, // the new index
		                    true // translate from index
		                ]),
		                lin2val.apply(searchAxisRight, [
		                    val2lin.apply(searchAxisRight, [max, true]) + movedUnits, // the new index
		                    true // translate from index
		                ])
		            );

		            // Apply it if it is within the available data range
		            if (
		                trimmedRange.min >= Math.min(extremes.dataMin, min) &&
		                trimmedRange.max <= Math.max(dataMax, max) + overscroll
		            ) {
		                xAxis.setExtremes(trimmedRange.min, trimmedRange.max, true, false, { trigger: 'pan' });
		            }

		            chart.mouseDownX = chartX; // set new reference for next run
		            css(chart.container, { cursor: 'move' });
		        }

		    } else {
		        runBase = true;
		    }

		    // revert to the linear chart.pan version
		    if (runBase) {
		        if (overscroll) {
		            xAxis.max = xAxis.dataMax + overscroll;
		        }
		        // call the original function
		        proceed.apply(this, Array.prototype.slice.call(arguments, 1));
		    }
		});

		/* ****************************************************************************
		 * End ordinal axis logic                                                   *
		 *****************************************************************************/

	}(Highcharts));
	(function (H) {
		/**
		 * (c) 2009-2017 Torstein Honsi
		 *
		 * License: www.highcharts.com/license
		 */

		var addEvent = H.addEvent,
		    pick = H.pick,
		    wrap = H.wrap,
		    each = H.each,
		    extend = H.extend,
		    isArray = H.isArray,
		    fireEvent = H.fireEvent,
		    Axis = H.Axis,
		    Series = H.Series;

		function stripArguments() {
		    return Array.prototype.slice.call(arguments, 1);
		}

		extend(Axis.prototype, {
		    isInBreak: function (brk, val) {
		        var ret,
		            repeat = brk.repeat || Infinity,
		            from = brk.from,
		            length = brk.to - brk.from,
		            test = (
		                val >= from ?
		                    (val - from) % repeat :
		                    repeat - ((from - val) % repeat)
		            );

		        if (!brk.inclusive) {
		            ret = test < length && test !== 0;
		        } else {
		            ret = test <= length;
		        }
		        return ret;
		    },

		    isInAnyBreak: function (val, testKeep) {

		        var breaks = this.options.breaks,
		            i = breaks && breaks.length,
		            inbrk,
		            keep,
		            ret;


		        if (i) {

		            while (i--) {
		                if (this.isInBreak(breaks[i], val)) {
		                    inbrk = true;
		                    if (!keep) {
		                        keep = pick(
		                            breaks[i].showPoints,
		                            this.isXAxis ? false : true
		                        );
		                    }
		                }
		            }

		            if (inbrk && testKeep) {
		                ret = inbrk && !keep;
		            } else {
		                ret = inbrk;
		            }
		        }
		        return ret;
		    }
		});

		addEvent(Axis, 'afterSetTickPositions', function () {
		    if (this.options.breaks) {
		        var axis = this,
		            tickPositions = this.tickPositions,
		            info = this.tickPositions.info,
		            newPositions = [],
		            i;

		        for (i = 0; i < tickPositions.length; i++) {
		            if (!axis.isInAnyBreak(tickPositions[i])) {
		                newPositions.push(tickPositions[i]);
		            }
		        }

		        this.tickPositions = newPositions;
		        this.tickPositions.info = info;
		    }
		});

		// Force Axis to be not-ordinal when breaks are defined
		addEvent(Axis, 'afterSetOptions', function () {
		    if (this.options.breaks && this.options.breaks.length) {
		        this.options.ordinal = false;
		    }
		});

		addEvent(Axis, 'afterInit', function () {
		    var axis = this,
		        breaks;

		    breaks = this.options.breaks;
		    axis.isBroken = (isArray(breaks) && !!breaks.length);
		    if (axis.isBroken) {
		        axis.val2lin = function (val) {
		            var nval = val,
		                brk,
		                i;

		            for (i = 0; i < axis.breakArray.length; i++) {
		                brk = axis.breakArray[i];
		                if (brk.to <= val) {
		                    nval -= brk.len;
		                } else if (brk.from >= val) {
		                    break;
		                } else if (axis.isInBreak(brk, val)) {
		                    nval -= (val - brk.from);
		                    break;
		                }
		            }

		            return nval;
		        };

		        axis.lin2val = function (val) {
		            var nval = val,
		                brk,
		                i;

		            for (i = 0; i < axis.breakArray.length; i++) {
		                brk = axis.breakArray[i];
		                if (brk.from >= nval) {
		                    break;
		                } else if (brk.to < nval) {
		                    nval += brk.len;
		                } else if (axis.isInBreak(brk, nval)) {
		                    nval += brk.len;
		                }
		            }
		            return nval;
		        };

		        axis.setExtremes = function (
		            newMin,
		            newMax,
		            redraw,
		            animation,
		            eventArguments
		        ) {
		            // If trying to set extremes inside a break, extend it to before and
		            // after the break ( #3857 )
		            while (this.isInAnyBreak(newMin)) {
		                newMin -= this.closestPointRange;
		            }
		            while (this.isInAnyBreak(newMax)) {
		                newMax -= this.closestPointRange;
		            }
		            Axis.prototype.setExtremes.call(
		                this,
		                newMin,
		                newMax,
		                redraw,
		                animation,
		                eventArguments
		            );
		        };

		        axis.setAxisTranslation = function (saveOld) {
		            Axis.prototype.setAxisTranslation.call(this, saveOld);

		            var breaks = axis.options.breaks,
		                breakArrayT = [],    // Temporary one
		                breakArray = [],
		                length = 0,
		                inBrk,
		                repeat,
		                min = axis.userMin || axis.min,
		                max = axis.userMax || axis.max,
		                pointRangePadding = pick(axis.pointRangePadding, 0),
		                start,
		                i;

		            // Min & max check (#4247)
		            each(breaks, function (brk) {
		                repeat = brk.repeat || Infinity;
		                if (axis.isInBreak(brk, min)) {
		                    min += (brk.to % repeat) - (min % repeat);
		                }
		                if (axis.isInBreak(brk, max)) {
		                    max -= (max % repeat) - (brk.from % repeat);
		                }
		            });

		            // Construct an array holding all breaks in the axis
		            each(breaks, function (brk) {
		                start = brk.from;
		                repeat = brk.repeat || Infinity;

		                while (start - repeat > min) {
		                    start -= repeat;
		                }
		                while (start < min) {
		                    start += repeat;
		                }

		                for (i = start; i < max; i += repeat) {
		                    breakArrayT.push({
		                        value: i,
		                        move: 'in'
		                    });
		                    breakArrayT.push({
		                        value: i + (brk.to - brk.from),
		                        move: 'out',
		                        size: brk.breakSize
		                    });
		                }
		            });

		            breakArrayT.sort(function (a, b) {
		                var ret;
		                if (a.value === b.value) {
		                    ret = (a.move === 'in' ? 0 : 1) - (b.move === 'in' ? 0 : 1);
		                } else {
		                    ret = a.value - b.value;
		                }
		                return ret;
		            });

		            // Simplify the breaks
		            inBrk = 0;
		            start = min;

		            each(breakArrayT, function (brk) {
		                inBrk += (brk.move === 'in' ? 1 : -1);

		                if (inBrk === 1 && brk.move === 'in') {
		                    start = brk.value;
		                }
		                if (inBrk === 0) {
		                    breakArray.push({
		                        from: start,
		                        to: brk.value,
		                        len: brk.value - start - (brk.size || 0)
		                    });
		                    length += brk.value - start - (brk.size || 0);
		                }
		            });

		            axis.breakArray = breakArray;

		            // Used with staticScale, and below, the actual axis length when
		            // breaks are substracted.
		            axis.unitLength = max - min - length + pointRangePadding;

		            fireEvent(axis, 'afterBreaks');

		            if (axis.options.staticScale) {
		                axis.transA = axis.options.staticScale;
		            } else if (axis.unitLength) {
		                axis.transA *= (max - axis.min + pointRangePadding) /
		                    axis.unitLength;
		            }

		            if (pointRangePadding) {
		                axis.minPixelPadding = axis.transA * axis.minPointOffset;
		            }

		            axis.min = min;
		            axis.max = max;
		        };
		    }
		});

		wrap(Series.prototype, 'generatePoints', function (proceed) {

		    proceed.apply(this, stripArguments(arguments));

		    var series = this,
		        xAxis = series.xAxis,
		        yAxis = series.yAxis,
		        points = series.points,
		        point,
		        i = points.length,
		        connectNulls = series.options.connectNulls,
		        nullGap;


		    if (xAxis && yAxis && (xAxis.options.breaks || yAxis.options.breaks)) {
		        while (i--) {
		            point = points[i];

		            // Respect nulls inside the break (#4275)
		            nullGap = point.y === null && connectNulls === false;
		            if (
		                !nullGap &&
		                (
		                    xAxis.isInAnyBreak(point.x, true) ||
		                    yAxis.isInAnyBreak(point.y, true)
		                )
		            ) {
		                points.splice(i, 1);
		                if (this.data[i]) {
		                    // Removes the graphics for this point if they exist
		                    this.data[i].destroyElements();
		                }
		            }
		        }
		    }

		});

		function drawPointsWrapped(proceed) {
		    proceed.apply(this);
		    this.drawBreaks(this.xAxis, ['x']);
		    this.drawBreaks(this.yAxis, pick(this.pointArrayMap, ['y']));
		}

		H.Series.prototype.drawBreaks = function (axis, keys) {
		    var series = this,
		        points = series.points,
		        breaks,
		        threshold,
		        eventName,
		        y;

		    if (!axis) {
		        return; // #5950
		    }

		    each(keys, function (key) {
		        breaks = axis.breakArray || [];
		        threshold = axis.isXAxis ?
		            axis.min :
		            pick(series.options.threshold, axis.min);
		        each(points, function (point) {
		            y = pick(point['stack' + key.toUpperCase()], point[key]);
		            each(breaks, function (brk) {
		                eventName = false;

		                if (
		                    (threshold < brk.from && y > brk.to) ||
		                    (threshold > brk.from && y < brk.from)
		                ) {
		                    eventName = 'pointBreak';

		                } else if (
		                    (threshold < brk.from && y > brk.from && y < brk.to) ||
		                    (threshold > brk.from && y > brk.to && y < brk.from)
		                ) {
		                    eventName = 'pointInBreak';
		                }
		                if (eventName) {
		                    fireEvent(axis, eventName, { point: point, brk: brk });
		                }
		            });
		        });
		    });
		};


		/**
		 * Extend getGraphPath by identifying gaps in the data so that we can draw a gap
		 * in the line or area. This was moved from ordinal axis module to broken axis
		 * module as of #5045.
		 */
		H.Series.prototype.gappedPath = function () {
		    var currentDataGrouping = this.currentDataGrouping,
		        groupingSize = currentDataGrouping && currentDataGrouping.totalRange,
		        gapSize = this.options.gapSize,
		        points = this.points.slice(),
		        i = points.length - 1,
		        yAxis = this.yAxis,
		        xRange,
		        stack;

		    /**
		     * Defines when to display a gap in the graph, together with the
		     * [gapUnit](plotOptions.series.gapUnit) option.
		     *
		     * In case when `dataGrouping` is enabled, points can be grouped into a
		     * larger time span. This can make the grouped points to have a greater
		     * distance than the absolute value of `gapSize` property, which will result
		     * in disappearing graph completely. To prevent this situation the mentioned
		     * distance between grouped points is used instead of previously defined
		     * `gapSize`.
		     *
		     * In practice, this option is most often used to visualize gaps in
		     * time series. In a stock chart, intraday data is available for daytime
		     * hours, while gaps will appear in nights and weekends.
		     *
		     * @type    {Number}
		     * @see     [gapUnit](plotOptions.series.gapUnit) and
		     *          [xAxis.breaks](#xAxis.breaks)
		     * @sample  {highstock} stock/plotoptions/series-gapsize/
		     *          Setting the gap size to 2 introduces gaps for weekends in daily
		     *          datasets.
		     * @default 0
		     * @product highstock
		     * @apioption plotOptions.series.gapSize
		     */

		    /**
		     * Together with [gapSize](plotOptions.series.gapSize), this option defines
		     * where to draw gaps in the graph.
		     *
		     * When the `gapUnit` is `relative` (default), a gap size of 5 means
		     * that if the distance between two points is greater than five times
		     * that of the two closest points, the graph will be broken.
		     *
		     * When the `gapUnit` is `value`, the gap is based on absolute axis values,
		     * which on a datetime axis is milliseconds. This also applies to the
		     * navigator series that inherits gap options from the base series.
		     *
		     * @type {String}
		     * @see [gapSize](plotOptions.series.gapSize)
		     * @default relative
		     * @validvalue ["relative", "value"]
		     * @since 5.0.13
		     * @product highstock
		     * @apioption plotOptions.series.gapUnit
		     */

		    if (gapSize && i > 0) { // #5008

		        // Gap unit is relative
		        if (this.options.gapUnit !== 'value') {
		            gapSize *= this.closestPointRange;
		        }

		        // Setting a new gapSize in case dataGrouping is enabled (#7686)
		        if (groupingSize && groupingSize > gapSize) {
		            gapSize = groupingSize;
		        }

		        // extension for ordinal breaks
		        while (i--) {
		            if (points[i + 1].x - points[i].x > gapSize) {
		                xRange = (points[i].x + points[i + 1].x) / 2;

		                points.splice( // insert after this one
		                    i + 1,
		                    0,
		                    {
		                        isNull: true,
		                        x: xRange
		                    }
		                );

		                // For stacked chart generate empty stack items, #6546
		                if (this.options.stacking) {
		                    stack = yAxis.stacks[this.stackKey][xRange] =
		                        new H.StackItem(
		                            yAxis,
		                            yAxis.options.stackLabels,
		                            false,
		                            xRange,
		                            this.stack
		                        );
		                    stack.total = 0;
		                }
		            }
		        }
		    }

		    // Call base method
		    return this.getGraphPath(points);
		};

		wrap(H.seriesTypes.column.prototype, 'drawPoints', drawPointsWrapped);
		wrap(H.Series.prototype, 'drawPoints', drawPointsWrapped);

	}(Highcharts));
	(function () {


	}());
	(function (H) {
		/**
		 * (c) 2010-2017 Torstein Honsi
		 *
		 * License: www.highcharts.com/license
		 */

		var addEvent = H.addEvent,
		    arrayMax = H.arrayMax,
		    arrayMin = H.arrayMin,
		    Axis = H.Axis,
		    defaultPlotOptions = H.defaultPlotOptions,
		    defined = H.defined,
		    each = H.each,
		    extend = H.extend,
		    format = H.format,
		    isNumber = H.isNumber,
		    merge = H.merge,
		    pick = H.pick,
		    Point = H.Point,
		    Series = H.Series,
		    Tooltip = H.Tooltip,
		    wrap = H.wrap;

		/* ****************************************************************************
		 * Start data grouping module                                                 *
		 ******************************************************************************/

		/**
		 * Data grouping is the concept of sampling the data values into larger
		 * blocks in order to ease readability and increase performance of the
		 * JavaScript charts. Highstock by default applies data grouping when
		 * the points become closer than a certain pixel value, determined by
		 * the `groupPixelWidth` option.
		 *
		 * If data grouping is applied, the grouping information of grouped
		 * points can be read from the [Point.dataGroup](
		 * /class-reference/Highcharts.Point#.dataGroup). If point options other than
		 * the data itself are set, for example `name` or `color` or custom properties,
		 * the grouping logic doesn't know how to group it. In this case the options of
		 * the first point instance are copied over to the group point. This can be
		 * altered through a custom `approximation` callback function.
		 *
		 * @product highstock
		 * @apioption plotOptions.series.dataGrouping
		 */

		/**
		 * The method of approximation inside a group. When for example 30 days
		 * are grouped into one month, this determines what value should represent
		 * the group. Possible values are "average", "averages", "open", "high",
		 * "low", "close" and "sum". For OHLC and candlestick series the approximation
		 * is "ohlc" by default, which finds the open, high, low and close values
		 * within all the grouped data. For ranges, the approximation is "range",
		 * which finds the low and high values. For multi-dimensional data,
		 * like ranges and OHLC, "averages" will compute the average for each
		 * dimension.
		 *
		 * Custom aggregate methods can be added by assigning a callback function
		 * as the approximation. This function takes a numeric array as the
		 * argument and should return a single numeric value or `null`. Note
		 * that the numeric array will never contain null values, only true
		 * numbers. Instead, if null values are present in the raw data, the
		 * numeric array will have an `.hasNulls` property set to `true`. For
		 * single-value data sets the data is available in the first argument
		 * of the callback function. For OHLC data sets, all the open values
		 * are in the first argument, all high values in the second etc.
		 *
		 * Since v4.2.7, grouping meta data is available in the approximation
		 * callback from `this.dataGroupInfo`. It can be used to extract information
		 * from the raw data.
		 *
		 * Defaults to `average` for line-type series, `sum` for columns, `range`
		 * for range series and `ohlc` for OHLC and candlestick.
		 *
		 * @validvalue ["average", "averages", "open", "high", "low", "close", "sum"]
		 * @type {String|Function}
		 * @sample {highstock} stock/plotoptions/series-datagrouping-approximation
		 *         Approximation callback with custom data
		 * @product highstock
		 * @apioption plotOptions.series.dataGrouping.approximation
		 */

		/**
		 * Datetime formats for the header of the tooltip in a stock chart.
		 * The format can vary within a chart depending on the currently selected
		 * time range and the current data grouping.
		 *
		 * The default formats are:
		 *
		 * <pre>{
		 *     millisecond: [
		 *         '%A, %b %e, %H:%M:%S.%L', '%A, %b %e, %H:%M:%S.%L', '-%H:%M:%S.%L'
		 *     ],
		 *     second: ['%A, %b %e, %H:%M:%S', '%A, %b %e, %H:%M:%S', '-%H:%M:%S'],
		 *     minute: ['%A, %b %e, %H:%M', '%A, %b %e, %H:%M', '-%H:%M'],
		 *     hour: ['%A, %b %e, %H:%M', '%A, %b %e, %H:%M', '-%H:%M'],
		 *     day: ['%A, %b %e, %Y', '%A, %b %e', '-%A, %b %e, %Y'],
		 *     week: ['Week from %A, %b %e, %Y', '%A, %b %e', '-%A, %b %e, %Y'],
		 *     month: ['%B %Y', '%B', '-%B %Y'],
		 *     year: ['%Y', '%Y', '-%Y']
		 * }</pre>
		 *
		 * For each of these array definitions, the first item is the format
		 * used when the active time span is one unit. For instance, if the
		 * current data applies to one week, the first item of the week array
		 * is used. The second and third items are used when the active time
		 * span is more than two units. For instance, if the current data applies
		 * to two weeks, the second and third item of the week array are used,
		 *  and applied to the start and end date of the time span.
		 *
		 * @type {Object}
		 * @product highstock
		 * @apioption plotOptions.series.dataGrouping.dateTimeLabelFormats
		 */

		/**
		 * Enable or disable data grouping.
		 *
		 * @type {Boolean}
		 * @default true
		 * @product highstock
		 * @apioption plotOptions.series.dataGrouping.enabled
		 */

		/**
		 * When data grouping is forced, it runs no matter how small the intervals
		 * are. This can be handy for example when the sum should be calculated
		 * for values appearing at random times within each hour.
		 *
		 * @type {Boolean}
		 * @default false
		 * @product highstock
		 * @apioption plotOptions.series.dataGrouping.forced
		 */

		/**
		 * The approximate pixel width of each group. If for example a series
		 * with 30 points is displayed over a 600 pixel wide plot area, no grouping
		 * is performed. If however the series contains so many points that
		 * the spacing is less than the groupPixelWidth, Highcharts will try
		 * to group it into appropriate groups so that each is more or less
		 * two pixels wide. If multiple series with different group pixel widths
		 * are drawn on the same x axis, all series will take the greatest width.
		 * For example, line series have 2px default group width, while column
		 * series have 10px. If combined, both the line and the column will
		 * have 10px by default.
		 *
		 * @type {Number}
		 * @default 2
		 * @product highstock
		 * @apioption plotOptions.series.dataGrouping.groupPixelWidth
		 */

		 /**
		 * By default only points within the visible range are grouped. Enabling this
		 * option will force data grouping to calculate all grouped points for a given
		 * dataset. That option prevents for example a column series from calculating
		 * a grouped point partially. The effect is similar to
		 * [Series.getExtremesFromAll](#plotOptions.series.getExtremesFromAll) but does
		 * not affect yAxis extremes.
		 *
		 * @type {Boolean}
		 * @sample {highstock} stock/plotoptions/series-datagrouping-groupall/
		 *         Two series with the same data but different groupAll setting
		 * @default false
		 * @since 6.1.0
		 * @product highstock
		 * @apioption plotOptions.series.dataGrouping.groupAll
		 */

		/**
		 * Normally, a group is indexed by the start of that group, so for example
		 * when 30 daily values are grouped into one month, that month's x value
		 * will be the 1st of the month. This apparently shifts the data to
		 * the left. When the smoothed option is true, this is compensated for.
		 * The data is shifted to the middle of the group, and min and max
		 * values are preserved. Internally, this is used in the Navigator series.
		 *
		 * @type {Boolean}
		 * @default false
		 * @product highstock
		 * @apioption plotOptions.series.dataGrouping.smoothed
		 */

		/**
		 * An array determining what time intervals the data is allowed to be
		 * grouped to. Each array item is an array where the first value is
		 * the time unit and the second value another array of allowed multiples.
		 * Defaults to:
		 *
		 * <pre>units: [[
		 *     'millisecond', // unit name
		 *     [1, 2, 5, 10, 20, 25, 50, 100, 200, 500] // allowed multiples
		 * ], [
		 *     'second',
		 *     [1, 2, 5, 10, 15, 30]
		 * ], [
		 *     'minute',
		 *     [1, 2, 5, 10, 15, 30]
		 * ], [
		 *     'hour',
		 *     [1, 2, 3, 4, 6, 8, 12]
		 * ], [
		 *     'day',
		 *     [1]
		 * ], [
		 *     'week',
		 *     [1]
		 * ], [
		 *     'month',
		 *     [1, 3, 6]
		 * ], [
		 *     'year',
		 *     null
		 * ]]</pre>
		 *
		 * @type {Array}
		 * @product highstock
		 * @apioption plotOptions.series.dataGrouping.units
		 */

		/**
		 * The approximate pixel width of each group. If for example a series
		 * with 30 points is displayed over a 600 pixel wide plot area, no grouping
		 * is performed. If however the series contains so many points that
		 * the spacing is less than the groupPixelWidth, Highcharts will try
		 * to group it into appropriate groups so that each is more or less
		 * two pixels wide. Defaults to `10`.
		 *
		 * @type {Number}
		 * @sample {highstock} stock/plotoptions/series-datagrouping-grouppixelwidth/
		 *         Two series with the same data density but different groupPixelWidth
		 * @default 10
		 * @product highstock
		 * @apioption plotOptions.column.dataGrouping.groupPixelWidth
		 */

		var seriesProto = Series.prototype,
		    baseProcessData = seriesProto.processData,
		    baseGeneratePoints = seriesProto.generatePoints,

		    /**
		     *
		     */
		    commonOptions = {
		        approximation: 'average', // average, open, high, low, close, sum
		        // enabled: null, // (true for stock charts, false for basic),
		        // forced: undefined,
		        groupPixelWidth: 2,
		        // the first one is the point or start value, the second is the start
		        // value if we're dealing with range, the third one is the end value if
		        // dealing with a range
		        dateTimeLabelFormats: {
		            millisecond: [
		                '%A, %b %e, %H:%M:%S.%L',
		                '%A, %b %e, %H:%M:%S.%L',
		                '-%H:%M:%S.%L'
		            ],
		            second: [
		                '%A, %b %e, %H:%M:%S',
		                '%A, %b %e, %H:%M:%S',
		                '-%H:%M:%S'
		            ],
		            minute: [
		                '%A, %b %e, %H:%M',
		                '%A, %b %e, %H:%M',
		                '-%H:%M'
		            ],
		            hour: [
		                '%A, %b %e, %H:%M',
		                '%A, %b %e, %H:%M',
		                '-%H:%M'
		            ],
		            day: [
		                '%A, %b %e, %Y',
		                '%A, %b %e',
		                '-%A, %b %e, %Y'
		            ],
		            week: [
		                'Week from %A, %b %e, %Y',
		                '%A, %b %e',
		                '-%A, %b %e, %Y'
		            ],
		            month: [
		                '%B %Y',
		                '%B',
		                '-%B %Y'
		            ],
		            year: [
		                '%Y',
		                '%Y',
		                '-%Y'
		            ]
		        }
		        // smoothed = false, // enable this for navigator series only
		    },

		    specificOptions = { // extends common options
		        line: {},
		        spline: {},
		        area: {},
		        areaspline: {},
		        column: {
		            approximation: 'sum',
		            groupPixelWidth: 10
		        },
		        arearange: {
		            approximation: 'range'
		        },
		        areasplinerange: {
		            approximation: 'range'
		        },
		        columnrange: {
		            approximation: 'range',
		            groupPixelWidth: 10
		        },
		        candlestick: {
		            approximation: 'ohlc',
		            groupPixelWidth: 10
		        },
		        ohlc: {
		            approximation: 'ohlc',
		            groupPixelWidth: 5
		        }
		    },

		    // units are defined in a separate array to allow complete overriding in
		    // case of a user option
		    defaultDataGroupingUnits = H.defaultDataGroupingUnits = [
		        [
		            'millisecond', // unit name
		            [1, 2, 5, 10, 20, 25, 50, 100, 200, 500] // allowed multiples
		        ], [
		            'second',
		            [1, 2, 5, 10, 15, 30]
		        ], [
		            'minute',
		            [1, 2, 5, 10, 15, 30]
		        ], [
		            'hour',
		            [1, 2, 3, 4, 6, 8, 12]
		        ], [
		            'day',
		            [1]
		        ], [
		            'week',
		            [1]
		        ], [
		            'month',
		            [1, 3, 6]
		        ], [
		            'year',
		            null
		        ]
		    ],


		    /**
		     * Define the available approximation types. The data grouping
		     * approximations takes an array or numbers as the first parameter. In case
		     * of ohlc, four arrays are sent in as four parameters. Each array consists
		     * only of numbers. In case null values belong to the group, the property
		     * .hasNulls will be set to true on the array.
		     */
		    approximations = H.approximations = {
		        sum: function (arr) {
		            var len = arr.length,
		                ret;

		            // 1. it consists of nulls exclusively
		            if (!len && arr.hasNulls) {
		                ret = null;
		            // 2. it has a length and real values
		            } else if (len) {
		                ret = 0;
		                while (len--) {
		                    ret += arr[len];
		                }
		            }
		            // 3. it has zero length, so just return undefined
		            // => doNothing()

		            return ret;
		        },
		        average: function (arr) {
		            var len = arr.length,
		                ret = approximations.sum(arr);

		            // If we have a number, return it divided by the length. If not,
		            // return null or undefined based on what the sum method finds.
		            if (isNumber(ret) && len) {
		                ret = ret / len;
		            }

		            return ret;
		        },
		        // The same as average, but for series with multiple values, like area
		        // ranges.
		        averages: function () { // #5479
		            var ret = [];

		            each(arguments, function (arr) {
		                ret.push(approximations.average(arr));
		            });

		            // Return undefined when first elem. is undefined and let
		            // sum method handle null (#7377)
		            return ret[0] === undefined ? undefined : ret;
		        },
		        open: function (arr) {
		            return arr.length ? arr[0] : (arr.hasNulls ? null : undefined);
		        },
		        high: function (arr) {
		            return arr.length ?
		                arrayMax(arr) :
		                (arr.hasNulls ? null : undefined);
		        },
		        low: function (arr) {
		            return arr.length ?
		                arrayMin(arr) :
		                (arr.hasNulls ? null : undefined);
		        },
		        close: function (arr) {
		            return arr.length ?
		                arr[arr.length - 1] :
		                (arr.hasNulls ? null : undefined);
		        },
		        // ohlc and range are special cases where a multidimensional array is
		        // input and an array is output
		        ohlc: function (open, high, low, close) {
		            open = approximations.open(open);
		            high = approximations.high(high);
		            low = approximations.low(low);
		            close = approximations.close(close);

		            if (
		                isNumber(open) ||
		                isNumber(high) ||
		                isNumber(low) ||
		                isNumber(close)
		            ) {
		                return [open, high, low, close];
		            }
		            // else, return is undefined
		        },
		        range: function (low, high) {
		            low = approximations.low(low);
		            high = approximations.high(high);

		            if (isNumber(low) || isNumber(high)) {
		                return [low, high];
		            } else if (low === null && high === null) {
		                return null;
		            }
		            // else, return is undefined
		        }
		    };

		/**
		 * Takes parallel arrays of x and y data and groups the data into intervals
		 * defined by groupPositions, a collection of starting x values for each group.
		 */
		seriesProto.groupData = function (xData, yData, groupPositions, approximation) {
		    var series = this,
		        data = series.data,
		        dataOptions = series.options.data,
		        groupedXData = [],
		        groupedYData = [],
		        groupMap = [],
		        dataLength = xData.length,
		        pointX,
		        pointY,
		        groupedY,
		        // when grouping the fake extended axis for panning,
		        // we don't need to consider y
		        handleYData = !!yData,
		        values = [],
		        approximationFn = typeof approximation === 'function' ?
		            approximation :
		            approximations[approximation] ||
		                // if the approximation is not found use default series type
		                // approximation (#2914)
		                (
		                    specificOptions[series.type] &&
		                    approximations[specificOptions[series.type].approximation]
		                ) || approximations[commonOptions.approximation],
		        pointArrayMap = series.pointArrayMap,
		        pointArrayMapLength = pointArrayMap && pointArrayMap.length,
		        extendedPointArrayMap = ['x'].concat(pointArrayMap || ['y']),
		        pos = 0,
		        start = 0,
		        valuesLen,
		        i, j;

		    // Calculate values array size from pointArrayMap length
		    if (pointArrayMapLength) {
		        each(pointArrayMap, function () {
		            values.push([]);
		        });
		    } else {
		        values.push([]);
		    }
		    valuesLen = pointArrayMapLength || 1;

		    // Start with the first point within the X axis range (#2696)
		    for (i = 0; i <= dataLength; i++) {
		        if (xData[i] >= groupPositions[0]) {
		            break;
		        }
		    }

		    for (i; i <= dataLength; i++) {

		        // when a new group is entered, summarize and initiate
		        // the previous group
		        while ((
		                    groupPositions[pos + 1] !== undefined &&
		                    xData[i] >= groupPositions[pos + 1]
		                ) || i === dataLength) { // get the last group

		            // get group x and y
		            pointX = groupPositions[pos];
		            series.dataGroupInfo = { start: start, length: values[0].length };
		            groupedY = approximationFn.apply(series, values);

		            // By default, let options of the first grouped point be passed over
		            // to the grouped point. This allows preserving properties like
		            // `name` and `color` or custom properties. Implementers can
		            // override this from the approximation function, where they can
		            // write custom options to `this.dataGroupInfo.options`.
		            if (!defined(series.dataGroupInfo.options)) {
		                // Convert numbers and arrays into objects
		                series.dataGroupInfo.options = series.pointClass.prototype
		                    .optionsToObject.call(
		                        { series: series },
		                        series.options.data[start]
		                    );
		                // Make sure the raw data (x, y, open, high etc) is not copied
		                // over and overwriting approximated data.
		                each(extendedPointArrayMap, function (key) {
		                    delete series.dataGroupInfo.options[key];
		                });
		            }

		            // push the grouped data
		            if (groupedY !== undefined) {
		                groupedXData.push(pointX);
		                groupedYData.push(groupedY);
		                groupMap.push(series.dataGroupInfo);
		            }

		            // reset the aggregate arrays
		            start = i;
		            for (j = 0; j < valuesLen; j++) {
		                values[j].length = 0; // faster than values[j] = []
		                values[j].hasNulls = false;
		            }

		            // Advance on the group positions
		            pos += 1;

		            // don't loop beyond the last group
		            if (i === dataLength) {
		                break;
		            }
		        }

		        // break out
		        if (i === dataLength) {
		            break;
		        }

		        // for each raw data point, push it to an array that contains all values
		        // for this specific group
		        if (pointArrayMap) {

		            var index = series.cropStart + i,
		                point = (data && data[index]) ||
		                    series.pointClass.prototype.applyOptions.apply({
		                        series: series
		                    }, [dataOptions[index]]),
		                val;

		            for (j = 0; j < pointArrayMapLength; j++) {
		                val = point[pointArrayMap[j]];
		                if (isNumber(val)) {
		                    values[j].push(val);
		                } else if (val === null) {
		                    values[j].hasNulls = true;
		                }
		            }

		        } else {
		            pointY = handleYData ? yData[i] : null;

		            if (isNumber(pointY)) {
		                values[0].push(pointY);
		            } else if (pointY === null) {
		                values[0].hasNulls = true;
		            }
		        }
		    }

		    return [groupedXData, groupedYData, groupMap];
		};

		/**
		 * Extend the basic processData method, that crops the data to the current zoom
		 * range, with data grouping logic.
		 */
		seriesProto.processData = function () {
		    var series = this,
		        chart = series.chart,
		        options = series.options,
		        dataGroupingOptions = options.dataGrouping,
		        groupingEnabled = series.allowDG !== false && dataGroupingOptions &&
		            pick(dataGroupingOptions.enabled, chart.options.isStock),
		        visible = series.visible || !chart.options.chart.ignoreHiddenSeries,
		        hasGroupedData,
		        skip,
		        lastDataGrouping = this.currentDataGrouping,
		        currentDataGrouping,
		        croppedData;

		    // Run base method
		    series.forceCrop = groupingEnabled; // #334
		    series.groupPixelWidth = null; // #2110
		    series.hasProcessed = true; // #2692

		    // Skip if processData returns false or if grouping is disabled (in that
		    // order)
		    skip = (
		        baseProcessData.apply(series, arguments) === false ||
		        !groupingEnabled
		    );
		    if (!skip) {
		        series.destroyGroupedData();

		        var i,
		            processedXData = dataGroupingOptions.groupAll ? series.xData :
		                series.processedXData,
		            processedYData = dataGroupingOptions.groupAll ? series.yData :
		                series.processedYData,
		            plotSizeX = chart.plotSizeX,
		            xAxis = series.xAxis,
		            ordinal = xAxis.options.ordinal,
		            groupPixelWidth = series.groupPixelWidth =
		                xAxis.getGroupPixelWidth && xAxis.getGroupPixelWidth();

		        // Execute grouping if the amount of points is greater than the limit
		        // defined in groupPixelWidth
		        if (groupPixelWidth) {
		            hasGroupedData = true;

		            // Force recreation of point instances in series.translate, #5699
		            series.isDirty = true;
		            series.points = null; // #6709

		            var extremes = xAxis.getExtremes(),
		                xMin = extremes.min,
		                xMax = extremes.max,
		                groupIntervalFactor = (
		                    ordinal &&
		                    xAxis.getGroupIntervalFactor(xMin, xMax, series)
		                ) || 1,
		                interval =
		                    (groupPixelWidth * (xMax - xMin) / plotSizeX) *
		                    groupIntervalFactor,
		                groupPositions = xAxis.getTimeTicks(
		                    xAxis.normalizeTimeTickInterval(
		                        interval,
		                        dataGroupingOptions.units || defaultDataGroupingUnits
		                    ),
		                    // Processed data may extend beyond axis (#4907)
		                    Math.min(xMin, processedXData[0]),
		                    Math.max(xMax, processedXData[processedXData.length - 1]),
		                    xAxis.options.startOfWeek,
		                    processedXData,
		                    series.closestPointRange
		                ),
		                groupedData = seriesProto.groupData.apply(
		                    series,
		                    [
		                        processedXData,
		                        processedYData,
		                        groupPositions,
		                        dataGroupingOptions.approximation
		                    ]),
		                groupedXData = groupedData[0],
		                groupedYData = groupedData[1];

		            // Prevent the smoothed data to spill out left and right, and make
		            // sure data is not shifted to the left
		            if (dataGroupingOptions.smoothed && groupedXData.length) {
		                i = groupedXData.length - 1;
		                groupedXData[i] = Math.min(groupedXData[i], xMax);
		                while (i-- && i > 0) {
		                    groupedXData[i] += interval / 2;
		                }
		                groupedXData[0] = Math.max(groupedXData[0], xMin);
		            }

		            // Record what data grouping values were used
		            currentDataGrouping = groupPositions.info;
		            series.closestPointRange = groupPositions.info.totalRange;
		            series.groupMap = groupedData[2];

		            // Make sure the X axis extends to show the first group (#2533)
		            // But only for visible series (#5493, #6393)
		            if (
		                defined(groupedXData[0]) &&
		                groupedXData[0] < xAxis.dataMin &&
		                visible
		            ) {
		                if (
		                    (
		                        !defined(xAxis.options.min) &&
		                        xAxis.min <= xAxis.dataMin
		                    ) ||
		                    xAxis.min === xAxis.dataMin
		                ) {
		                    xAxis.min = groupedXData[0];
		                }
		                xAxis.dataMin = groupedXData[0];
		            }

		            // We calculated all group positions but we should render
		            // only the ones within the visible range
		            if (dataGroupingOptions.groupAll) {
		                croppedData = series.cropData(
		                    groupedXData,
		                    groupedYData,
		                    xAxis.min,
		                    xAxis.max,
		                    1 // Ordinal xAxis will remove left-most points otherwise
		                );
		                groupedXData = croppedData.xData;
		                groupedYData = croppedData.yData;
		            }
		            // Set series props
		            series.processedXData = groupedXData;
		            series.processedYData = groupedYData;
		        } else {
		            series.groupMap = null;
		        }
		        series.hasGroupedData = hasGroupedData;
		        series.currentDataGrouping = currentDataGrouping;

		        series.preventGraphAnimation =
		            (lastDataGrouping && lastDataGrouping.totalRange) !==
		            (currentDataGrouping && currentDataGrouping.totalRange);
		    }
		};

		/**
		 * Destroy the grouped data points. #622, #740
		 */
		seriesProto.destroyGroupedData = function () {

		    var groupedData = this.groupedData;

		    // clear previous groups
		    each(groupedData || [], function (point, i) {
		        if (point) {
		            groupedData[i] = point.destroy ? point.destroy() : null;
		        }
		    });
		    this.groupedData = null;
		};

		/**
		 * Override the generatePoints method by adding a reference to grouped data
		 */
		seriesProto.generatePoints = function () {

		    baseGeneratePoints.apply(this);

		    // Record grouped data in order to let it be destroyed the next time
		    // processData runs
		    this.destroyGroupedData(); // #622
		    this.groupedData = this.hasGroupedData ? this.points : null;
		};

		/**
		 * Override point prototype to throw a warning when trying to update grouped
		 * points
		 */
		addEvent(Point, 'update', function () {
		    if (this.dataGroup) {
		        H.error(24);
		        return false;
		    }
		});

		/**
		 * Extend the original method, make the tooltip's header reflect the grouped
		 * range
		 */
		wrap(Tooltip.prototype, 'tooltipFooterHeaderFormatter', function (
		    proceed,
		    labelConfig,
		    isFooter
		) {
		    var tooltip = this,
		        time = this.chart.time,
		        series = labelConfig.series,
		        options = series.options,
		        tooltipOptions = series.tooltipOptions,
		        dataGroupingOptions = options.dataGrouping,
		        xDateFormat = tooltipOptions.xDateFormat,
		        xDateFormatEnd,
		        xAxis = series.xAxis,
		        currentDataGrouping,
		        dateTimeLabelFormats,
		        labelFormats,
		        formattedKey;

		    // apply only to grouped series
		    if (
		        xAxis &&
		        xAxis.options.type === 'datetime' &&
		        dataGroupingOptions &&
		        isNumber(labelConfig.key)
		    ) {

		        // set variables
		        currentDataGrouping = series.currentDataGrouping;
		        dateTimeLabelFormats = dataGroupingOptions.dateTimeLabelFormats;

		        // if we have grouped data, use the grouping information to get the
		        // right format
		        if (currentDataGrouping) {
		            labelFormats = dateTimeLabelFormats[currentDataGrouping.unitName];
		            if (currentDataGrouping.count === 1) {
		                xDateFormat = labelFormats[0];
		            } else {
		                xDateFormat = labelFormats[1];
		                xDateFormatEnd = labelFormats[2];
		            }
		        // if not grouped, and we don't have set the xDateFormat option, get the
		        // best fit, so if the least distance between points is one minute, show
		        // it, but if the least distance is one day, skip hours and minutes etc.
		        } else if (!xDateFormat && dateTimeLabelFormats) {
		            xDateFormat = tooltip.getXDateFormat(
		                labelConfig,
		                tooltipOptions,
		                xAxis
		            );
		        }

		        // now format the key
		        formattedKey = time.dateFormat(xDateFormat, labelConfig.key);
		        if (xDateFormatEnd) {
		            formattedKey += time.dateFormat(
		                xDateFormatEnd,
		                labelConfig.key + currentDataGrouping.totalRange - 1
		            );
		        }

		        // return the replaced format
		        return format(
		            tooltipOptions[(isFooter ? 'footer' : 'header') + 'Format'], {
		                point: extend(labelConfig.point, { key: formattedKey }),
		                series: series
		            },
		            time
		        );

		    }

		    // else, fall back to the regular formatter
		    return proceed.call(tooltip, labelConfig, isFooter);
		});

		/**
		 * Destroy grouped data on series destroy
		 */
		addEvent(Series, 'destroy', seriesProto.destroyGroupedData);


		// Handle default options for data grouping. This must be set at runtime because
		// some series types are defined after this.
		addEvent(Series, 'afterSetOptions', function (e) {

		    var options = e.options,
		        type = this.type,
		        plotOptions = this.chart.options.plotOptions,
		        defaultOptions = defaultPlotOptions[type].dataGrouping,
		        // External series, for example technical indicators should also
		        // inherit commonOptions which are not available outside this module
		        baseOptions = this.useCommonDataGrouping && commonOptions;

		    if (specificOptions[type] || baseOptions) { // #1284
		        if (!defaultOptions) {
		            defaultOptions = merge(commonOptions, specificOptions[type]);
		        }

		        options.dataGrouping = merge(
		            baseOptions,
		            defaultOptions,
		            plotOptions.series && plotOptions.series.dataGrouping, // #1228
		            plotOptions[type].dataGrouping, // Set by the StockChart constructor
		            this.userOptions.dataGrouping
		        );
		    }

		    if (this.chart.options.isStock) {
		        this.requireSorting = true;
		    }
		});


		/**
		 * When resetting the scale reset the hasProccessed flag to avoid taking
		 * previous data grouping of neighbour series into accound when determining
		 * group pixel width (#2692).
		 */
		addEvent(Axis, 'afterSetScale', function () {
		    each(this.series, function (series) {
		        series.hasProcessed = false;
		    });
		});

		/**
		 * Get the data grouping pixel width based on the greatest defined individual
		 * width
		 * of the axis' series, and if whether one of the axes need grouping.
		 */
		Axis.prototype.getGroupPixelWidth = function () {

		    var series = this.series,
		        len = series.length,
		        i,
		        groupPixelWidth = 0,
		        doGrouping = false,
		        dataLength,
		        dgOptions;

		    // If multiple series are compared on the same x axis, give them the same
		    // group pixel width (#334)
		    i = len;
		    while (i--) {
		        dgOptions = series[i].options.dataGrouping;
		        if (dgOptions) {
		            groupPixelWidth = Math.max(
		                groupPixelWidth,
		                dgOptions.groupPixelWidth
		            );

		        }
		    }

		    // If one of the series needs grouping, apply it to all (#1634)
		    i = len;
		    while (i--) {
		        dgOptions = series[i].options.dataGrouping;

		        if (dgOptions && series[i].hasProcessed) { // #2692

		            dataLength = (series[i].processedXData || series[i].data).length;

		            // Execute grouping if the amount of points is greater than the
		            // limit defined in groupPixelWidth
		            if (
		                series[i].groupPixelWidth ||
		                dataLength > (this.chart.plotSizeX / groupPixelWidth) ||
		                (dataLength && dgOptions.forced)
		            ) {
		                doGrouping = true;
		            }
		        }
		    }

		    return doGrouping ? groupPixelWidth : 0;
		};

		/**
		 * Highstock only. Force data grouping on all the axis' series.
		 *
		 * @param  {SeriesDatagroupingOptions} [dataGrouping]
		 *         A `dataGrouping` configuration. Use `false` to disable data grouping
		 *         dynamically.
		 * @param  {Boolean} [redraw=true]
		 *         Whether to redraw the chart or wait for a later call to {@link
		 *         Chart#redraw}.
		 *
		 * @function setDataGrouping
		 * @memberof Axis.prototype
		 */
		Axis.prototype.setDataGrouping = function (dataGrouping, redraw) {
		    var i;

		    redraw = pick(redraw, true);

		    if (!dataGrouping) {
		        dataGrouping = {
		            forced: false,
		            units: null
		        };
		    }

		    // Axis is instantiated, update all series
		    if (this instanceof Axis) {
		        i = this.series.length;
		        while (i--) {
		            this.series[i].update({
		                dataGrouping: dataGrouping
		            }, false);
		        }

		    // Axis not yet instanciated, alter series options
		    } else {
		        each(this.chart.options.series, function (seriesOptions) {
		            seriesOptions.dataGrouping = dataGrouping;
		        }, false);
		    }

		    // Clear ordinal slope, so we won't accidentaly use the old one (#7827)
		    this.ordinalSlope = null;

		    if (redraw) {
		        this.chart.redraw();
		    }
		};



		/* ****************************************************************************
		 * End data grouping module                                                   *
		 ******************************************************************************/

	}(Highcharts));
	(function (H) {
		/**
		 * (c) 2010-2017 Torstein Honsi
		 *
		 * License: www.highcharts.com/license
		 */
		var each = H.each,
		    Point = H.Point,
		    seriesType = H.seriesType,
		    seriesTypes = H.seriesTypes;

		/**
		 * The ohlc series type.
		 *
		 * @constructor seriesTypes.ohlc
		 * @augments seriesTypes.column
		 */
		/**
		 * An OHLC chart is a style of financial chart used to describe price
		 * movements over time. It displays open, high, low and close values per data
		 * point.
		 *
		 * @sample stock/demo/ohlc/ OHLC chart
		 * @extends plotOptions.column
		 * @excluding borderColor,borderRadius,borderWidth,crisp,stacking,stack
		 * @product highstock
		 * @optionparent plotOptions.ohlc
		 */
		seriesType('ohlc', 'column', {

		    /**
		     * The approximate pixel width of each group. If for example a series
		     * with 30 points is displayed over a 600 pixel wide plot area, no grouping
		     * is performed. If however the series contains so many points that
		     * the spacing is less than the groupPixelWidth, Highcharts will try
		     * to group it into appropriate groups so that each is more or less
		     * two pixels wide. Defaults to `5`.
		     *
		     * @type {Number}
		     * @default 5
		     * @product highstock
		     * @apioption plotOptions.ohlc.dataGrouping.groupPixelWidth
		     */

		    /**
		     * The pixel width of the line/border. Defaults to `1`.
		     *
		     * @type {Number}
		     * @sample {highstock} stock/plotoptions/ohlc-linewidth/
		     *         A greater line width
		     * @default 1
		     * @product highstock
		     */
		    lineWidth: 1,

		    tooltip: {
        

		        pointFormat: '<span style="color:{point.color}">\u25CF</span> <b> {series.name}</b><br/>' +
		            'Open: {point.open}<br/>' +
		            'High: {point.high}<br/>' +
		            'Low: {point.low}<br/>' +
		            'Close: {point.close}<br/>'
        
		    },

		    threshold: null,
    

		    states: {

		        /**
		         * @extends plotOptions.column.states.hover
		         * @product highstock
		         */
		        hover: {

		            /**
		             * The pixel width of the line representing the OHLC point.
		             *
		             * @type {Number}
		             * @default 3
		             * @product highstock
		             */
		            lineWidth: 3
		        }
		    },

		    /**
		     * Determines which one of `open`, `high`, `low`, `close` values should be
		     * represented as `point.y`, which is later used to set dataLabel position.
		     *
		     * @type       {String}
		     * @validvalue ["open", "high", "low", "close"]
		     * @product    highstock
		     * @sample     {highstock} stock/plotoptions/ohlc-pointvalkey/
		     *             Possible values
		     * @default    close
		     * @apioption  plotOptions.ohlc.pointValKey
		     */

		    /**
		     * Line color for up points.
		     *
		     * @type {Color}
		     * @product highstock
		     * @apioption plotOptions.ohlc.upColor
		     */

    

		    stickyTracking: true

		}, /** @lends seriesTypes.ohlc */ {
		    directTouch: false,
		    pointArrayMap: ['open', 'high', 'low', 'close'],
		    toYData: function (point) { // return a plain array for speedy calculation
		        return [point.open, point.high, point.low, point.close];
		    },
		    pointValKey: 'close',

    
		    pointAttrToOptions: {
		        'stroke': 'color',
		        'stroke-width': 'lineWidth'
		    },

		    init: function () {
		        seriesTypes.column.prototype.init.apply(this, arguments);

		        this.options.stacking = false; // #8817
		    },

		    /**
		     * Postprocess mapping between options and SVG attributes
		     */
		    pointAttribs: function (point, state) {
		        var attribs = seriesTypes.column.prototype.pointAttribs.call(
		                this,
		                point,
		                state
		            ),
		            options = this.options;

		        delete attribs.fill;

		        if (
		            !point.options.color &&
		            options.upColor &&
		            point.open < point.close
		        ) {
		            attribs.stroke = options.upColor;
		        }

		        return attribs;
		    },
    

		    /**
		     * Translate data points from raw values x and y to plotX and plotY
		     */
		    translate: function () {
		        var series = this,
		            yAxis = series.yAxis,
		            hasModifyValue = !!series.modifyValue,
		            translated = [
		                'plotOpen',
		                'plotHigh',
		                'plotLow',
		                'plotClose',
		                'yBottom'
		            ]; // translate OHLC for

		        seriesTypes.column.prototype.translate.apply(series);

		        // Do the translation
		        each(series.points, function (point) {
		            each(
		                [point.open, point.high, point.low, point.close, point.low],
		                function (value, i) {
		                    if (value !== null) {
		                        if (hasModifyValue) {
		                            value = series.modifyValue(value);
		                        }
		                        point[translated[i]] = yAxis.toPixels(value, true);
		                    }
		                }
		            );

		            // Align the tooltip to the high value to avoid covering the point
		            point.tooltipPos[1] =
		                point.plotHigh + yAxis.pos - series.chart.plotTop;
		        });
		    },

		    /**
		     * Draw the data points
		     */
		    drawPoints: function () {
		        var series = this,
		            points = series.points,
		            chart = series.chart;


		        each(points, function (point) {
		            var plotOpen,
		                plotClose,
		                crispCorr,
		                halfWidth,
		                path,
		                graphic = point.graphic,
		                crispX,
		                isNew = !graphic;

		            if (point.plotY !== undefined) {

		                // Create and/or update the graphic
		                if (!graphic) {
		                    point.graphic = graphic = chart.renderer.path()
		                        .add(series.group);
		                }

                
		                graphic.attr(
		                    series.pointAttribs(point, point.selected && 'select')
		                ); // #3897
                

		                // crisp vector coordinates
		                crispCorr = (graphic.strokeWidth() % 2) / 2;
		                crispX = Math.round(point.plotX) - crispCorr;  // #2596
		                halfWidth = Math.round(point.shapeArgs.width / 2);

		                // the vertical stem
		                path = [
		                    'M',
		                    crispX, Math.round(point.yBottom),
		                    'L',
		                    crispX, Math.round(point.plotHigh)
		                ];

		                // open
		                if (point.open !== null) {
		                    plotOpen = Math.round(point.plotOpen) + crispCorr;
		                    path.push(
		                        'M',
		                        crispX,
		                        plotOpen,
		                        'L',
		                        crispX - halfWidth,
		                        plotOpen
		                    );
		                }

		                // close
		                if (point.close !== null) {
		                    plotClose = Math.round(point.plotClose) + crispCorr;
		                    path.push(
		                        'M',
		                        crispX,
		                        plotClose,
		                        'L',
		                        crispX + halfWidth,
		                        plotClose
		                    );
		                }

		                graphic[isNew ? 'attr' : 'animate']({ d: path })
		                    .addClass(point.getClassName(), true);

		            }


		        });

		    },

		    animate: null // Disable animation

		}, /** @lends seriesTypes.ohlc.prototype.pointClass.prototype */ {
		    /**
		      * Extend the parent method by adding up or down to the class name.
		      */
		    getClassName: function () {
		        return Point.prototype.getClassName.call(this) +
		            (
		                this.open < this.close ?
		                    ' highcharts-point-up' :
		                    ' highcharts-point-down'
		            );
		    }
		});

		/**
		 * A `ohlc` series. If the [type](#series.ohlc.type) option is not
		 * specified, it is inherited from [chart.type](#chart.type).
		 *
		 * @type {Object}
		 * @extends series,plotOptions.ohlc
		 * @excluding dataParser,dataURL
		 * @product highstock
		 * @apioption series.ohlc
		 */

		/**
		 * An array of data points for the series. For the `ohlc` series type,
		 * points can be given in the following ways:
		 *
		 * 1.  An array of arrays with 5 or 4 values. In this case, the values
		 * correspond to `x,open,high,low,close`. If the first value is a string,
		 * it is applied as the name of the point, and the `x` value is inferred.
		 * The `x` value can also be omitted, in which case the inner arrays
		 * should be of length 4\. Then the `x` value is automatically calculated,
		 * either starting at 0 and incremented by 1, or from `pointStart`
		 * and `pointInterval` given in the series options.
		 *
		 *  ```js
		 *     data: [
		 *         [0, 6, 5, 6, 7],
		 *         [1, 9, 4, 8, 2],
		 *         [2, 6, 3, 4, 10]
		 *     ]
		 *  ```
		 *
		 * 2.  An array of objects with named values. The following snippet shows only a
		 * few settings, see the complete options set below. If the total number of data
		 * points exceeds the series' [turboThreshold](#series.ohlc.turboThreshold),
		 * this option is not available.
		 *
		 *  ```js
		 *     data: [{
		 *         x: 1,
		 *         open: 3,
		 *         high: 4,
		 *         low: 5,
		 *         close: 2,
		 *         name: "Point2",
		 *         color: "#00FF00"
		 *     }, {
		 *         x: 1,
		 *         open: 4,
		 *         high: 3,
		 *         low: 6,
		 *         close: 7,
		 *         name: "Point1",
		 *         color: "#FF00FF"
		 *     }]
		 *  ```
		 *
		 * @type {Array<Object|Array>}
		 * @extends series.arearange.data
		 * @excluding y,marker
		 * @product highstock
		 * @apioption series.ohlc.data
		 */

		/**
		 * The closing value of each data point.
		 *
		 * @type {Number}
		 * @product highstock
		 * @apioption series.ohlc.data.close
		 */

		/**
		 * The opening value of each data point.
		 *
		 * @type {Number}
		 * @product highstock
		 * @apioption series.ohlc.data.open
		 */

	}(Highcharts));
	(function (H) {
		/**
		 * (c) 2010-2017 Torstein Honsi
		 *
		 * License: www.highcharts.com/license
		 */
		var defaultPlotOptions = H.defaultPlotOptions,
		    each = H.each,
		    merge = H.merge,
		    seriesType = H.seriesType,
		    seriesTypes = H.seriesTypes;

		/**
		 * A candlestick chart is a style of financial chart used to describe price
		 * movements over time.
		 *
		 * @sample stock/demo/candlestick/ Candlestick chart
		 *
		 * @extends plotOptions.ohlc
		 * @excluding borderColor,borderRadius,borderWidth
		 * @product highstock
		 * @optionparent plotOptions.candlestick
		 */
		var candlestickOptions = {

		    /**
		     * The specific line color for up candle sticks. The default is to inherit
		     * the general `lineColor` setting.
		     *
		     * @type {Color}
		     * @sample  {highstock} stock/plotoptions/candlestick-linecolor/
		     *          Candlestick line colors
		     * @default null
		     * @since 1.3.6
		     * @product highstock
		     * @apioption plotOptions.candlestick.upLineColor
		     */

		    /**
		     * @default ohlc
		     * @apioption plotOptions.candlestick.dataGrouping.approximation
		     */

		    states: {

		        /**
		         * @extends plotOptions.column.states.hover
		         * @product highstock
		         */
		        hover: {

		            /**
		             * The pixel width of the line/border around the candlestick.
		             *
		             * @type {Number}
		             * @default 2
		             * @product highstock
		             */
		            lineWidth: 2
		        }
		    },

		    /**
		     * @extends plotOptions.ohlc.tooltip
		     */
		    tooltip: defaultPlotOptions.ohlc.tooltip,

		    threshold: null,
    

		    /**
		     * The color of the line/border of the candlestick.
		     *
		     * In styled mode, the line stroke can be set with the
		     * `.highcharts-candlestick-series .highcahrts-point` rule.
		     *
		     * @type {Color}
		     * @see [upLineColor](#plotOptions.candlestick.upLineColor)
		     * @sample {highstock} stock/plotoptions/candlestick-linecolor/
		     *         Candlestick line colors
		     * @default #000000
		     * @product highstock
		     */
		    lineColor: '#000000',

		    /**
		     * The pixel width of the candlestick line/border. Defaults to `1`.
		     *
		     *
		     * In styled mode, the line stroke width can be set with the
		     * `.highcharts-candlestick-series .highcahrts-point` rule.
		     *
		     * @type {Number}
		     * @default 1
		     * @product highstock
		     */
		    lineWidth: 1,

		    /**
		     * The fill color of the candlestick when values are rising.
		     *
		     * In styled mode, the up color can be set with the
		     * `.highcharts-candlestick-series .highcharts-point-up` rule.
		     *
		     * @type {Color}
		     * @sample {highstock} stock/plotoptions/candlestick-color/ Custom colors
		     * @sample {highstock} highcharts/css/candlestick/ Colors in styled mode
		     * @default #ffffff
		     * @product highstock
		     */
		    upColor: '#ffffff',
    

		    stickyTracking: true

		};

		/**
		 * The candlestick series type.
		 *
		 * @constructor seriesTypes.candlestick
		 * @augments seriesTypes.ohlc
		 */
		seriesType('candlestick', 'ohlc', merge(
		    defaultPlotOptions.column,
		    candlestickOptions
		), /** @lends seriesTypes.candlestick */ {
    
		    /**
		     * Postprocess mapping between options and SVG attributes
		     */
		    pointAttribs: function (point, state) {
		        var attribs = seriesTypes.column.prototype.pointAttribs.call(
		                this,
		                point,
		                state
		            ),
		            options = this.options,
		            isUp = point.open < point.close,
		            stroke = options.lineColor || this.color,
		            stateOptions;

		        attribs['stroke-width'] = options.lineWidth;

		        attribs.fill = point.options.color ||
		            (isUp ? (options.upColor || this.color) : this.color);
		        attribs.stroke = point.lineColor ||
		            (isUp ? (options.upLineColor || stroke) : stroke);

		        // Select or hover states
		        if (state) {
		            stateOptions = options.states[state];
		            attribs.fill = stateOptions.color || attribs.fill;
		            attribs.stroke = stateOptions.lineColor || attribs.stroke;
		            attribs['stroke-width'] =
		                stateOptions.lineWidth || attribs['stroke-width'];
		        }


		        return attribs;
		    },
    
		    /**
		     * Draw the data points
		     */
		    drawPoints: function () {
		        var series = this,
		            points = series.points,
		            chart = series.chart,
		            reversedYAxis = series.yAxis.reversed;


		        each(points, function (point) {

		            var graphic = point.graphic,
		                plotOpen,
		                plotClose,
		                topBox,
		                bottomBox,
		                hasTopWhisker,
		                hasBottomWhisker,
		                crispCorr,
		                crispX,
		                path,
		                halfWidth,
		                isNew = !graphic;

		            if (point.plotY !== undefined) {

		                if (!graphic) {
		                    point.graphic = graphic = chart.renderer.path()
		                        .add(series.group);
		                }

                
		                graphic
		                    .attr(
		                        series.pointAttribs(point, point.selected && 'select')
		                    ) // #3897
		                    .shadow(series.options.shadow);
                

		                // Crisp vector coordinates
		                crispCorr = (graphic.strokeWidth() % 2) / 2;
		                crispX = Math.round(point.plotX) - crispCorr; // #2596
		                plotOpen = point.plotOpen;
		                plotClose = point.plotClose;
		                topBox = Math.min(plotOpen, plotClose);
		                bottomBox = Math.max(plotOpen, plotClose);
		                halfWidth = Math.round(point.shapeArgs.width / 2);
		                hasTopWhisker = reversedYAxis ?
		                    bottomBox !== point.yBottom :
		                    Math.round(topBox) !== Math.round(point.plotHigh);
		                hasBottomWhisker = reversedYAxis ?
		                    Math.round(topBox) !== Math.round(point.plotHigh) :
		                    bottomBox !== point.yBottom;
		                topBox = Math.round(topBox) + crispCorr;
		                bottomBox = Math.round(bottomBox) + crispCorr;

		                // Create the path. Due to a bug in Chrome 49, the path is first
		                // instanciated with no values, then the values pushed. For
		                // unknown reasons, instanciating the path array with all the
		                // values would lead to a crash when updating frequently
		                // (#5193).
		                path = [];
		                path.push(
		                    'M',
		                    crispX - halfWidth, bottomBox,
		                    'L',
		                    crispX - halfWidth, topBox,
		                    'L',
		                    crispX + halfWidth, topBox,
		                    'L',
		                    crispX + halfWidth, bottomBox,
		                    'Z', // Ensure a nice rectangle #2602
		                    'M',
		                    crispX, topBox,
		                    'L',
		                    // #460, #2094
		                    crispX, hasTopWhisker ?
		                        Math.round(
		                            reversedYAxis ? point.yBottom : point.plotHigh
		                        ) :
		                        topBox,
		                    'M',
		                    crispX, bottomBox,
		                    'L',
		                    // #460, #2094
		                    crispX, hasBottomWhisker ?
		                        Math.round(
		                            reversedYAxis ? point.plotHigh : point.yBottom
		                        ) :
		                        bottomBox
		                );

		                graphic[isNew ? 'attr' : 'animate']({ d: path })
		                    .addClass(point.getClassName(), true);

		            }
		        });

		    }


		});

		/**
		 * A `candlestick` series. If the [type](#series.candlestick.type)
		 * option is not specified, it is inherited from [chart.type](
		 * #chart.type).
		 *
		 * @type {Object}
		 * @extends series,plotOptions.candlestick
		 * @excluding dataParser,dataURL
		 * @product highstock
		 * @apioption series.candlestick
		 */

		/**
		 * An array of data points for the series. For the `candlestick` series
		 * type, points can be given in the following ways:
		 *
		 * 1.  An array of arrays with 5 or 4 values. In this case, the values
		 * correspond to `x,open,high,low,close`. If the first value is a string,
		 * it is applied as the name of the point, and the `x` value is inferred.
		 * The `x` value can also be omitted, in which case the inner arrays
		 * should be of length 4\. Then the `x` value is automatically calculated,
		 * either starting at 0 and incremented by 1, or from `pointStart`
		 * and `pointInterval` given in the series options.
		 *
		 *  ```js
		 *     data: [
		 *         [0, 7, 2, 0, 4],
		 *         [1, 1, 4, 2, 8],
		 *         [2, 3, 3, 9, 3]
		 *     ]
		 *  ```
		 *
		 * 2.  An array of objects with named values. The following snippet shows only a
		 * few settings, see the complete options set below. If the total number of data
		 * points exceeds the series' [turboThreshold](
		 * #series.candlestick.turboThreshold), this option is not available.
		 *
		 *  ```js
		 *     data: [{
		 *         x: 1,
		 *         open: 9,
		 *         high: 2,
		 *         low: 4,
		 *         close: 6,
		 *         name: "Point2",
		 *         color: "#00FF00"
		 *     }, {
		 *         x: 1,
		 *         open: 1,
		 *         high: 4,
		 *         low: 7,
		 *         close: 7,
		 *         name: "Point1",
		 *         color: "#FF00FF"
		 *     }]
		 *  ```
		 *
		 * @type {Array<Object|Array>}
		 * @extends series.ohlc.data
		 * @excluding y
		 * @product highstock
		 * @apioption series.candlestick.data
		 */

	}(Highcharts));
	var onSeriesMixin = (function (H) {
		/**
		 * (c) 2010-2017 Torstein Honsi
		 *
		 * License: www.highcharts.com/license
		 */

		var each = H.each,
		    defined = H.defined,
		    seriesTypes = H.seriesTypes,
		    stableSort = H.stableSort;

		var onSeriesMixin = {

		    /**
		     * Override getPlotBox. If the onSeries option is valid, return the plot box
		     * of the onSeries, otherwise proceed as usual.
		     */
		    getPlotBox: function () {
		        return H.Series.prototype.getPlotBox.call(
		            (
		                this.options.onSeries &&
		                this.chart.get(this.options.onSeries)
		            ) || this
		        );
		    },

		    /**
		     * Extend the translate method by placing the point on the related series
		     */
		    translate: function () {

		        seriesTypes.column.prototype.translate.apply(this);

		        var series = this,
		            options = series.options,
		            chart = series.chart,
		            points = series.points,
		            cursor = points.length - 1,
		            point,
		            lastPoint,
		            optionsOnSeries = options.onSeries,
		            onSeries = optionsOnSeries && chart.get(optionsOnSeries),
		            onKey = options.onKey || 'y',
		            step = onSeries && onSeries.options.step,
		            onData = onSeries && onSeries.points,
		            i = onData && onData.length,
		            inverted = chart.inverted,
		            xAxis = series.xAxis,
		            yAxis = series.yAxis,
		            xOffset = 0,
		            leftPoint,
		            lastX,
		            rightPoint,
		            currentDataGrouping,
		            distanceRatio;

		        // relate to a master series
		        if (onSeries && onSeries.visible && i) {
		            xOffset = (onSeries.pointXOffset || 0) + (onSeries.barW || 0) / 2;
		            currentDataGrouping = onSeries.currentDataGrouping;
		            lastX = (
		                onData[i - 1].x +
		                (currentDataGrouping ? currentDataGrouping.totalRange : 0)
		            ); // #2374

		            // sort the data points
		            stableSort(points, function (a, b) {
		                return (a.x - b.x);
		            });

		            onKey = 'plot' + onKey[0].toUpperCase() + onKey.substr(1);
		            while (i-- && points[cursor]) {
		                leftPoint = onData[i];
		                point = points[cursor];
		                point.y = leftPoint.y;

		                if (leftPoint.x <= point.x && leftPoint[onKey] !== undefined) {
		                    if (point.x <= lastX) { // #803

		                        point.plotY = leftPoint[onKey];

		                        // interpolate between points, #666
		                        if (leftPoint.x < point.x && !step) {
		                            rightPoint = onData[i + 1];
		                            if (rightPoint && rightPoint[onKey] !== undefined) {
		                                // the distance ratio, between 0 and 1
		                                distanceRatio = (point.x - leftPoint.x) /
		                                    (rightPoint.x - leftPoint.x);
		                                point.plotY +=
		                                    distanceRatio *
		                                    // the plotY distance
		                                    (rightPoint[onKey] - leftPoint[onKey]);
		                                point.y +=
		                                    distanceRatio *
		                                    (rightPoint.y - leftPoint.y);
		                            }
		                        }
		                    }
		                    cursor--;
		                    i++; // check again for points in the same x position
		                    if (cursor < 0) {
		                        break;
		                    }
		                }
		            }
		        }

		        // Add plotY position and handle stacking
		        each(points, function (point, i) {

		            var stackIndex;

		            point.plotX += xOffset; // #2049

		            // Undefined plotY means the point is either on axis, outside series
		            // range or hidden series. If the series is outside the range of the
		            // x axis it should fall through with an undefined plotY, but then
		            // we must remove the shapeArgs (#847). For inverted charts, we need
		            // to calculate position anyway, because series.invertGroups is not
		            // defined
		            if (point.plotY === undefined || inverted) {
		                if (point.plotX >= 0 && point.plotX <= xAxis.len) {
		                    // We're inside xAxis range
		                    if (inverted) {
		                        point.plotY = xAxis.translate(point.x, 0, 1, 0, 1);
		                        point.plotX = defined(point.y) ?
		                            yAxis.translate(point.y, 0, 0, 0, 1) : 0;
		                    } else {
		                        point.plotY = chart.chartHeight - xAxis.bottom -
		                            (xAxis.opposite ? xAxis.height : 0) +
		                            xAxis.offset - yAxis.top; // #3517
		                    }
		                } else {
		                    point.shapeArgs = {}; // 847
		                }
		            }

		            // if multiple flags appear at the same x, order them into a stack
		            lastPoint = points[i - 1];
		            if (lastPoint && lastPoint.plotX === point.plotX) {
		                if (lastPoint.stackIndex === undefined) {
		                    lastPoint.stackIndex = 0;
		                }
		                stackIndex = lastPoint.stackIndex + 1;
		            }
		            point.stackIndex = stackIndex; // #3639
		        });

		        this.onSeries = onSeries;
		    }
		};

		return onSeriesMixin;
	}(Highcharts));
	(function (H, onSeriesMixin) {
		/**
		 * (c) 2010-2017 Torstein Honsi
		 *
		 * License: www.highcharts.com/license
		 */
		var addEvent = H.addEvent,
		    each = H.each,
		    merge = H.merge,
		    noop = H.noop,
		    Renderer = H.Renderer,
		    Series = H.Series,
		    seriesType = H.seriesType,
		    SVGRenderer = H.SVGRenderer,
		    TrackerMixin = H.TrackerMixin,
		    VMLRenderer = H.VMLRenderer,
		    symbols = SVGRenderer.prototype.symbols;

		/**
		 * The Flags series.
		 *
		 * @constructor seriesTypes.flags
		 * @augments seriesTypes.column
		 */
		/**
		 * Flags are used to mark events in stock charts. They can be added on the
		 * timeline, or attached to a specific series.
		 *
		 * @sample       stock/demo/flags-general/ Flags on a line series
		 * @extends      {plotOptions.column}
		 * @excluding    animation,borderColor,borderRadius,borderWidth,colorByPoint,
		 *               dataGrouping,pointPadding,pointWidth,turboThreshold
		 * @product      highstock
		 * @optionparent plotOptions.flags
		 */
		seriesType('flags', 'column', {

		    /**
		     * In case the flag is placed on a series, on what point key to place
		     * it. Line and columns have one key, `y`. In range or OHLC-type series,
		     * however, the flag can optionally be placed on the `open`, `high`,
		     *  `low` or `close` key.
		     *
		     * @validvalue ["y", "open", "high", "low", "close"]
		     * @type       {String}
		     * @sample     {highstock} stock/plotoptions/flags-onkey/
		     *             Range series, flag on high
		     * @default    y
		     * @since      4.2.2
		     * @product    highstock
		     * @apioption  plotOptions.flags.onKey
		     */

		    /**
		     * The id of the series that the flags should be drawn on. If no id
		     * is given, the flags are drawn on the x axis.
		     *
		     * @type      {String}
		     * @sample    {highstock} stock/plotoptions/flags/
		     *            Flags on series and on x axis
		     * @default   undefined
		     * @product   highstock
		     * @apioption plotOptions.flags.onSeries
		     */

		    pointRange: 0, // #673

		    /**
		     * Whether the flags are allowed to overlap sideways. If `false`, the flags
		     * are moved sideways using an algorithm that seeks to place every flag as
		     * close as possible to its original position.
		     *
		     * @sample {highstock} stock/plotoptions/flags-allowoverlapx
		     *         Allow sideways overlap
		     * @since  6.0.4
		     */
		    allowOverlapX: false,

		    /**
		     * The shape of the marker. Can be one of "flag", "circlepin", "squarepin",
		     * or an image of the format `url(/path-to-image.jpg)`. Individual
		     * shapes can also be set for each point.
		     *
		     * @validvalue ["flag", "circlepin", "squarepin"]
		     * @sample     {highstock} stock/plotoptions/flags/ Different shapes
		     * @product    highstock
		     */
		    shape: 'flag',

		    /**
		     * When multiple flags in the same series fall on the same value, this
		     * number determines the vertical offset between them.
		     *
		     * @sample  {highstock} stock/plotoptions/flags-stackdistance/
		     *          A greater stack distance
		     * @product highstock
		     */
		    stackDistance: 12,

		    /**
		     * Text alignment for the text inside the flag.
		     *
		     * @validvalue ["left", "center", "right"]
		     * @since      5.0.0
		     * @product    highstock
		     */
		    textAlign: 'center',

		    /**
		     * Specific tooltip options for flag series. Flag series tooltips are
		     * different from most other types in that a flag doesn't have a data
		     * value, so the tooltip rather displays the `text` option for each
		     * point.
		     *
		     * @type      {Object}
		     * @extends   plotOptions.series.tooltip
		     * @excluding changeDecimals,valueDecimals,valuePrefix,valueSuffix
		     * @product   highstock
		     */
		    tooltip: {
		        pointFormat: '{point.text}<br/>'
		    },

		    threshold: null,

		    /**
		     * The text to display on each flag. This can be defined on series level,
		     *  or individually for each point. Defaults to `"A"`.
		     *
		     * @type      {String}
		     * @default   A
		     * @product   highstock
		     * @apioption plotOptions.flags.title
		     */

		    /**
		     * The y position of the top left corner of the flag relative to either
		     * the series (if onSeries is defined), or the x axis. Defaults to
		     * `-30`.
		     *
		     * @product highstock
		     */
		    y: -30,

		    /**
		     * Whether to use HTML to render the flag texts. Using HTML allows for
		     * advanced formatting, images and reliable bi-directional text rendering.
		     * Note that exported images won't respect the HTML, and that HTML
		     * won't respect Z-index settings.
		     *
		     * @type      {Boolean}
		     * @default   false
		     * @since     1.3
		     * @product   highstock
		     * @apioption plotOptions.flags.useHTML
		     */

		    /**
		     * Fixed width of the flag's shape. By default, width is autocalculated
		     * according to the flag's title.
		     *
		     * @type      {Number}
		     * @default   undefined
		     * @product   highstock
		     * @sample    {highstock} stock/demo/flags-shapes/ Flags with fixed width
		     * @apioption plotOptions.flags.width
		     */

		     /**
		     * Fixed height of the flag's shape. By default, height is autocalculated
		     * according to the flag's title.
		     *
		     * @type      {Number}
		     * @default   undefined
		     * @product   highstock
		     * @apioption plotOptions.flags.height
		     */

    

		    /**
		     * The fill color for the flags.
		     *
		     * @type      {Color}
		     * @default   #ffffff
		     * @product   highstock
		     */
		    fillColor: '#ffffff',

		    /**
		     * The color of the line/border of the flag.
		     *
		     * In styled mode, the stroke is set in the
		     * `.highcharts-flag-series.highcharts-point` rule.
		     *
		     * @type      {Color}
		     * @default   #000000
		     * @product   highstock
		     * @apioption plotOptions.flags.lineColor
		     */

		    /**
		     * The pixel width of the flag's line/border.
		     *
		     * @product highstock
		     */
		    lineWidth: 1,

		    states: {

		        /**
		         * @extends plotOptions.column.states.hover
		         * @product highstock
		         */
		        hover: {

		            /**
		             * The color of the line/border of the flag.
		             *
		             * @type    {Color}
		             * @default #000000
		             * @product highstock
		             */
		            lineColor: '#000000',

		            /**
		             * The fill or background color of the flag.
		             *
		             * @type    {Color}
		             * @default #ccd6eb
		             * @product highstock
		             */
		            fillColor: '#ccd6eb'
		        }
		    },

		    /**
		     * The text styles of the flag.
		     *
		     * In styled mode, the styles are set in the
		     * `.highcharts-flag-series .highcharts-point` rule.
		     *
		     * @type    {CSSObject}
		     * @default { "fontSize": "11px", "fontWeight": "bold" }
		     * @product highstock
		     */
		    style: {
		        fontSize: '11px',
		        fontWeight: 'bold'
		    }
    

		}, /** @lends seriesTypes.flags.prototype */ {
		    sorted: false,
		    noSharedTooltip: true,
		    allowDG: false,
		    takeOrdinalPosition: false, // #1074
		    trackerGroups: ['markerGroup'],
		    forceCrop: true,
		    /**
		     * Inherit the initialization from base Series.
		     */
		    init: Series.prototype.init,

    
		    /**
		     * Get presentational attributes
		     */
		    pointAttribs: function (point, state) {
		        var options = this.options,
		            color = (point && point.color) || this.color,
		            lineColor = options.lineColor,
		            lineWidth = (point && point.lineWidth),
		            fill = (point && point.fillColor) || options.fillColor;

		        if (state) {
		            fill = options.states[state].fillColor;
		            lineColor = options.states[state].lineColor;
		            lineWidth = options.states[state].lineWidth;
		        }

		        return {
		            'fill': fill || color,
		            'stroke': lineColor || color,
		            'stroke-width': lineWidth || options.lineWidth || 0
		        };
		    },
    

		    translate: onSeriesMixin.translate,
		    getPlotBox: onSeriesMixin.getPlotBox,

		    /**
		     * Draw the markers
		     */
		    drawPoints: function () {
		        var series = this,
		            points = series.points,
		            chart = series.chart,
		            renderer = chart.renderer,
		            plotX,
		            plotY,
		            inverted = chart.inverted,
		            options = series.options,
		            optionsY = options.y,
		            shape,
		            i,
		            point,
		            graphic,
		            stackIndex,
		            anchorY,
		            attribs,
		            outsideRight,
		            yAxis = series.yAxis,
		            boxesMap = {},
		            boxes = [];

		        i = points.length;
		        while (i--) {
		            point = points[i];
		            outsideRight =
		                (inverted ? point.plotY : point.plotX) > series.xAxis.len;
		            plotX = point.plotX;
		            stackIndex = point.stackIndex;
		            shape = point.options.shape || options.shape;
		            plotY = point.plotY;

		            if (plotY !== undefined) {
		                plotY = point.plotY + optionsY -
		                    (
		                        stackIndex !== undefined &&
		                        stackIndex * options.stackDistance
		                    );
		            }
		            // skip connectors for higher level stacked points
		            point.anchorX = stackIndex ? undefined : point.plotX;
		            anchorY = stackIndex ? undefined : point.plotY;

		            graphic = point.graphic;

		            // Only draw the point if y is defined and the flag is within
		            // the visible area
		            if (plotY !== undefined && plotX >= 0 && !outsideRight) {

		                // Create the flag
		                if (!graphic) {
		                    graphic = point.graphic = renderer.label(
		                        '',
		                        null,
		                        null,
		                        shape,
		                        null,
		                        null,
		                        options.useHTML
		                    )
                    
		                    .attr(series.pointAttribs(point))
		                    .css(merge(options.style, point.style))
                    
		                    .attr({
		                        align: shape === 'flag' ? 'left' : 'center',
		                        width: options.width,
		                        height: options.height,
		                        'text-align': options.textAlign
		                    })
		                    .addClass('highcharts-point')
		                    .add(series.markerGroup);

		                    // Add reference to the point for tracker (#6303)
		                    if (point.graphic.div) {
		                        point.graphic.div.point = point;
		                    }

                    
		                    graphic.shadow(options.shadow);
                    
		                    graphic.isNew = true;
		                }

		                if (plotX > 0) { // #3119
		                    plotX -= graphic.strokeWidth() % 2; // #4285
		                }

		                // Plant the flag
		                attribs = {
		                    y: plotY,
		                    anchorY: anchorY
		                };
		                if (options.allowOverlapX) {
		                    attribs.x = plotX;
		                    attribs.anchorX = point.anchorX;
		                }
		                graphic.attr({
		                    text: point.options.title || options.title || 'A'
		                })[graphic.isNew ? 'attr' : 'animate'](attribs);

		                // Rig for the distribute function
		                if (!options.allowOverlapX) {
		                    if (!boxesMap[point.plotX]) {
		                        boxesMap[point.plotX] = {
		                            align: 0,
		                            size: graphic.width,
		                            target: plotX,
		                            anchorX: plotX
		                        };
		                    } else {
		                        boxesMap[point.plotX].size = Math.max(
		                            boxesMap[point.plotX].size,
		                            graphic.width
		                        );
		                    }
		                }

		                // Set the tooltip anchor position
		                point.tooltipPos = [
		                    plotX,
		                    plotY + yAxis.pos - chart.plotTop
		                ]; // #6327

		            } else if (graphic) {
		                point.graphic = graphic.destroy();
		            }

		        }

		        // Handle X-dimension overlapping
		        if (!options.allowOverlapX) {
		            H.objectEach(boxesMap, function (box) {
		                box.plotX = box.anchorX;
		                boxes.push(box);
		            });

		            H.distribute(boxes, inverted ? yAxis.len : this.xAxis.len, 100);

		            each(points, function (point) {
		                var box = point.graphic && boxesMap[point.plotX];
		                if (box) {
		                    point.graphic[point.graphic.isNew ? 'attr' : 'animate']({
		                        x: box.pos,
		                        anchorX: point.anchorX
		                    });
		                    // Hide flag when its box position is not specified (#8573)
		                    if (!box.pos) {
		                        point.graphic.attr({
		                            x: -9999,
		                            anchorX: -9999
		                        });
		                        point.graphic.isNew = true;
		                    } else {
		                        point.graphic.isNew = false;
		                    }
		                }
		            });
		        }

		        // Might be a mix of SVG and HTML and we need events for both (#6303)
		        if (options.useHTML) {
		            H.wrap(series.markerGroup, 'on', function (proceed) {
		                return H.SVGElement.prototype.on.apply(
		                    // for HTML
		                    proceed.apply(this, [].slice.call(arguments, 1)),
		                    // and for SVG
		                    [].slice.call(arguments, 1));
		            });
		        }

		    },

		    /**
		     * Extend the column trackers with listeners to expand and contract stacks
		     */
		    drawTracker: function () {
		        var series = this,
		            points = series.points;

		        TrackerMixin.drawTrackerPoint.apply(this);

		        /**
		         * Bring each stacked flag up on mouse over, this allows readability
		         * of vertically stacked elements as well as tight points on
		         * the x axis. #1924.
		         */
		        each(points, function (point) {
		            var graphic = point.graphic;
		            if (graphic) {
		                addEvent(graphic.element, 'mouseover', function () {

		                    // Raise this point
		                    if (point.stackIndex > 0 && !point.raised) {
		                        point._y = graphic.y;
		                        graphic.attr({
		                            y: point._y - 8
		                        });
		                        point.raised = true;
		                    }

		                    // Revert other raised points
		                    each(points, function (otherPoint) {
		                        if (
		                            otherPoint !== point &&
		                            otherPoint.raised &&
		                            otherPoint.graphic
		                        ) {
		                            otherPoint.graphic.attr({
		                                y: otherPoint._y
		                            });
		                            otherPoint.raised = false;
		                        }
		                    });
		                });
		            }
		        });
		    },

		    // Disable animation, but keep clipping (#8546):
		    animate: function (init) {
		        if (init) {
		            this.setClip();
		        } else {
		            this.animate = null;
		        }
		    },
		    setClip: function () {
		        Series.prototype.setClip.apply(this, arguments);
		        if (this.options.clip !== false && this.sharedClipKey) {
		            this.markerGroup.clip(this.chart[this.sharedClipKey]);
		        }
		    },
		    buildKDTree: noop,
		    /**
		     * Don't invert the flag marker group (#4960)
		     */
		    invertGroups: noop

		});

		// create the flag icon with anchor
		symbols.flag = function (x, y, w, h, options) {
		    var anchorX = (options && options.anchorX) || x,
		        anchorY = (options && options.anchorY) || y;

		    return symbols.circle(anchorX - 1, anchorY - 1, 2, 2).concat(
		        [
		            'M', anchorX, anchorY,
		            'L', x, y + h,
		            x, y,
		            x + w, y,
		            x + w, y + h,
		            x, y + h,
		            'Z'
		        ]
		    );
		};

		/*
		 * Create the circlepin and squarepin icons with anchor
		 */
		function createPinSymbol(shape) {
		    symbols[shape + 'pin'] = function (x, y, w, h, options) {

		        var anchorX = options && options.anchorX,
		            anchorY = options && options.anchorY,
		            path,
		            labelTopOrBottomY;

		        // For single-letter flags, make sure circular flags are not taller
		        // than their width
		        if (shape === 'circle' && h > w) {
		            x -= Math.round((h - w) / 2);
		            w = h;
		        }

		        path = symbols[shape](x, y, w, h);

		        if (anchorX && anchorY) {
		            /**
		             * If the label is below the anchor, draw the connecting line
		             * from the top edge of the label
		             * otherwise start drawing from the bottom edge
		             */
		            labelTopOrBottomY = (y > anchorY) ? y : y + h;
		            path.push(
		                'M',
		                shape === 'circle' ? path[1] - path[4] : path[1] + path[4] / 2,
		                labelTopOrBottomY,
		                'L',
		                anchorX,
		                anchorY
		            );
		            path = path.concat(
		                symbols.circle(anchorX - 1, anchorY - 1, 2, 2)
		            );
		        }

		        return path;
		    };
		}
		createPinSymbol('circle');
		createPinSymbol('square');


		/**
		 * The symbol callbacks are generated on the SVGRenderer object in all browsers.
		 * Even VML browsers need this in order to generate shapes in export. Now share
		 * them with the VMLRenderer.
		 */
		if (Renderer === VMLRenderer) {
		    each(['flag', 'circlepin', 'squarepin'], function (shape) {
		        VMLRenderer.prototype.symbols[shape] = symbols[shape];
		    });
		}


		/**
		 * A `flags` series. If the [type](#series.flags.type) option is not
		 * specified, it is inherited from [chart.type](#chart.type).
		 *
		 * @type      {Object}
		 * @extends   series,plotOptions.flags
		 * @excluding dataParser,dataURL
		 * @product   highstock
		 * @apioption series.flags
		 */

		/**
		 * An array of data points for the series. For the `flags` series type,
		 * points can be given in the following ways:
		 *
		 * 1.  An array of objects with named values. The following snippet shows only a
		 * few settings, see the complete options set below. If the total number of data
		 * points exceeds the series' [turboThreshold](#series.flags.turboThreshold),
		 * this option is not available.
		 *
		 *  ```js
		 *     data: [{
		 *     x: 1,
		 *     title: "A",
		 *     text: "First event"
		 * }, {
		 *     x: 1,
		 *     title: "B",
		 *     text: "Second event"
		 * }]</pre>
		 *
		 * @type {Array<Object>}
		 * @extends series.line.data
		 * @excluding y,dataLabels,marker,name
		 * @product highstock
		 * @apioption series.flags.data
		 */

		/**
		 * The fill color of an individual flag. By default it inherits from
		 * the series color.
		 *
		 * @type      {Color}
		 * @product   highstock
		 * @apioption series.flags.data.fillColor
		 */

		/**
		 * The longer text to be shown in the flag's tooltip.
		 *
		 * @type      {String}
		 * @product   highstock
		 * @apioption series.flags.data.text
		 */

		/**
		 * The short text to be shown on the flag.
		 *
		 * @type      {String}
		 * @product   highstock
		 * @apioption series.flags.data.title
		 */

	}(Highcharts, onSeriesMixin));
	(function (H) {
		/**
		 * (c) 2010-2017 Torstein Honsi
		 *
		 * License: www.highcharts.com/license
		 */
		var addEvent = H.addEvent,
		    Axis = H.Axis,
		    correctFloat = H.correctFloat,
		    defaultOptions = H.defaultOptions,
		    defined = H.defined,
		    destroyObjectProperties = H.destroyObjectProperties,
		    each = H.each,
		    fireEvent = H.fireEvent,
		    hasTouch = H.hasTouch,
		    isTouchDevice = H.isTouchDevice,
		    merge = H.merge,
		    pick = H.pick,
		    removeEvent = H.removeEvent,
		    swapXY;

		/**
		 *
		 * The scrollbar is a means of panning over the X axis of a stock chart.
		 * Scrollbars can  also be applied to other types of axes.
		 *
		 * Another approach to scrollable charts is the [chart.scrollablePlotArea](
		 * https://api.highcharts.com/highcharts/chart.scrollablePlotArea) option that
		 * is especially suitable for simpler cartesian charts on mobile.
		 *
		 * In styled mode, all the presentational options for the
		 * scrollbar are replaced by the classes `.highcharts-scrollbar-thumb`,
		 * `.highcharts-scrollbar-arrow`, `.highcharts-scrollbar-button`,
		 * `.highcharts-scrollbar-rifles` and `.highcharts-scrollbar-track`.
		 *
		 * @sample stock/yaxis/inverted-bar-scrollbar/
		 *         A scrollbar on a simple bar chart
		 *
		 * @product highstock
		 * @optionparent scrollbar
		 */
		var defaultScrollbarOptions = {

		    /**
		     * The height of the scrollbar. The height also applies to the width
		     * of the scroll arrows so that they are always squares. Defaults to
		     * 20 for touch devices and 14 for mouse devices.
		     *
		     * @sample {highstock} stock/scrollbar/height/
		     *         A 30px scrollbar
		     *
		     * @type       {number}
		     * @default    20/14
		     * @product    highstock
		     * @apioption  scrollbar.height
		     */
		    height: isTouchDevice ? 20 : 14,

		    /**
		     * The border rounding radius of the bar.
		     *
		     * @sample {highstock} stock/scrollbar/style/
		     *         Scrollbar styling
		     *
		     * @type       {number}
		     * @default    0
		     * @product    highstock
		     * @apioption  scrollbar.barBorderRadius
		     */
		    barBorderRadius: 0,

		    /**
		     * The corner radius of the scrollbar buttons.
		     *
		     * @sample {highstock} stock/scrollbar/style/
		     *         Scrollbar styling
		     *
		     * @type       {number}
		     * @default    0
		     * @product    highstock
		     * @apioption  scrollbar.buttonBorderRadius
		     */
		    buttonBorderRadius: 0,

		    /**
		     * Enable or disable the scrollbar.
		     *
		     * @type       {boolean}
		     * @sample     {highstock} stock/scrollbar/enabled/
		     *             Disable the scrollbar, only use navigator
		     * @default    true
		     * @product    highstock
		     * @apioption  scrollbar.enabled
		     */

		    /**
		     * Whether to redraw the main chart as the scrollbar or the navigator
		     * zoomed window is moved. Defaults to `true` for modern browsers and
		     * `false` for legacy IE browsers as well as mobile devices.
		     *
		     * @type       {boolean}
		     * @since      1.3
		     * @product    highstock
		     * @apioption  scrollbar.liveRedraw
		     */
		    liveRedraw: undefined,

		    /**
		     * The margin between the scrollbar and its axis when the scrollbar is
		     * applied directly to an axis.
		     *
		     * @type       {number}
		     * @default    10
		     * @apioption  scrollbar.margin
		     */
		    margin: 10,

		    /**
		     * The minimum width of the scrollbar.
		     *
		     * @type       {number}
		     * @default    6
		     * @since      1.2.5
		     * @product    highstock
		     * @apioption  scrollbar.minWidth
		     */
		    minWidth: 6,

		    /**
		     * Whether to show or hide the scrollbar when the scrolled content is
		     * zoomed out to it full extent.
		     *
		     * @type       {boolean}
		     * @default    true
		     * @product    highstock
		     * @apioption  scrollbar.showFull
		     */

		    /**
		     * @type       {number}
		     * @default    0.2
		     * @apioption  scrollbar.step
		     */
		    step: 0.2,

		    /**
		     * The z index of the scrollbar group.
		     *
		     * @type       {number}
		     * @default    3
		     * @apioption  scrollbar.zIndex
		     */
		    zIndex: 3,

    

		    /**
		     * The background color of the scrollbar itself.
		     *
		     * @sample {highstock} stock/scrollbar/style/
		     *         Scrollbar styling
		     *
		     * @type       {Highcharts.ColorString}
		     * @default    #cccccc
		     * @product    highstock
		     * @apioption  scrollbar.barBackgroundColor
		     */
		    barBackgroundColor: '#cccccc',

		    /**
		     * The width of the bar's border.
		     *
		     * @sample {highstock} stock/scrollbar/style/
		     *         Scrollbar styling
		     *
		     * @type       {number}
		     * @default    1
		     * @product    highstock
		     * @apioption  scrollbar.barBorderWidth
		     */
		    barBorderWidth: 1,

		    /**
		     * The color of the scrollbar's border.
		     *
		     * @type       {Highcharts.ColorString}
		     * @default    #cccccc
		     * @product    highstock
		     * @apioption  scrollbar.barBorderColor
		     */
		    barBorderColor: '#cccccc',

		    /**
		     * The color of the small arrow inside the scrollbar buttons.
		     *
		     * @sample {highstock} stock/scrollbar/style/
		     *         Scrollbar styling
		     *
		     * @type       {Highcharts.ColorString}
		     * @default    #333333
		     * @product    highstock
		     * @apioption  scrollbar.buttonArrowColor
		     */
		    buttonArrowColor: '#333333',

		    /**
		     * The color of scrollbar buttons.
		     *
		     * @sample {highstock} stock/scrollbar/style/
		     *         Scrollbar styling
		     *
		     * @type       {Highcharts.ColorString}
		     * @default    #e6e6e6
		     * @product    highstock
		     * @apioption  scrollbar.buttonBackgroundColor
		     */
		    buttonBackgroundColor: '#e6e6e6',

		    /**
		     * The color of the border of the scrollbar buttons.
		     *
		     * @sample {highstock} stock/scrollbar/style/
		     *         Scrollbar styling
		     *
		     * @type       {Highcharts.ColorString}
		     * @default    #cccccc
		     * @product    highstock
		     * @apioption  scrollbar.buttonBorderColor
		     */
		    buttonBorderColor: '#cccccc',

		    /**
		     * The border width of the scrollbar buttons.
		     *
		     * @sample {highstock} stock/scrollbar/style/
		     *         Scrollbar styling
		     *
		     * @type       {number}
		     * @default    1
		     * @product    highstock
		     * @apioption  scrollbar.buttonBorderWidth
		     */
		    buttonBorderWidth: 1,

		    /**
		     * The color of the small rifles in the middle of the scrollbar.
		     *
		     * @type       {Highcharts.ColorString}
		     * @default    #333333
		     * @product    highstock
		     * @apioption  scrollbar.rifleColor
		     */
		    rifleColor: '#333333',

		    /**
		     * The color of the track background.
		     *
		     * @sample {highstock} stock/scrollbar/style/
		     *         Scrollbar styling
		     *
		     * @type       {Highcharts.ColorString}
		     * @default    #f2f2f2
		     * @product    highstock
		     * @apioption  scrollbar.trackBackgroundColor
		     */
		    trackBackgroundColor: '#f2f2f2',

		    /**
		     * The color of the border of the scrollbar track.
		     *
		     * @sample {highstock} stock/scrollbar/style/
		     *         Scrollbar styling
		     *
		     * @type       {Highcharts.ColorString}
		     * @default    #f2f2f2
		     * @product    highstock
		     * @apioption  scrollbar.trackBorderColor
		     */
		    trackBorderColor: '#f2f2f2',

		    /**
		     * The corner radius of the border of the scrollbar track.
		     *
		     * @sample {highstock} stock/scrollbar/style/
		     *         Scrollbar styling
		     *
		     * @type       {number}
		     * @default    0
		     * @product    highstock
		     * @apioption  scrollbar.trackBorderRadius
		     */

		    /**
		     * The width of the border of the scrollbar track.
		     *
		     * @sample {highstock} stock/scrollbar/style/
		     *         Scrollbar styling
		     *
		     * @type       {number}
		     * @default    1
		     * @product    highstock
		     * @apioption  scrollbar.trackBorderWidth
		     */
		    trackBorderWidth: 1
    
		};

		defaultOptions.scrollbar = merge(
		    true,
		    defaultScrollbarOptions,
		    defaultOptions.scrollbar
		);

		/**
		 * When we have vertical scrollbar, rifles and arrow in buttons should be
		 * rotated. The same method is used in Navigator's handles, to rotate them.
		 *
		 * @function Highcharts.swapXY
		 *
		 * @param  {Array<number|string>} path
		 *         Path to be rotated.
		 *
		 * @param  {boolean} vertical
		 *         If vertical scrollbar, swap x-y values.
		 *
		 * @return {Array<number|string>}
		 */
		H.swapXY = swapXY = function (path, vertical) {
		    var i,
		        len = path.length,
		        temp;

		    if (vertical) {
		        for (i = 0; i < len; i += 3) {
		            temp = path[i + 1];
		            path[i + 1] = path[i + 2];
		            path[i + 2] = temp;
		        }
		    }

		    return path;
		};

		/**
		 * A reusable scrollbar, internally used in Highstock's navigator and optionally
		 * on individual axes.
		 *
		 * @class Highcharts.Scrollbar
		 *
		 * @param {Highcharts.SVGRenderer} renderer
		 *
		 * @param {Highcharts.ScrollbarOptions} options
		 *
		 * @param {Highcharts.Chart} chart
		 */
		function Scrollbar(renderer, options, chart) { // docs
		    this.init(renderer, options, chart);
		}

		Scrollbar.prototype = {

		    /**
		     * @function Highcharts.Scrollbar#init
		     *
		     * @param  {Highcharts.SVGRenderer} renderer
		     *
		     * @param  {Highcharts.ScrollbarOptions} options
		     *
		     * @param  {Highcharts.Chart} chart
		     *
		     * @return {void}
		     */
		    init: function (renderer, options, chart) {

		        this.scrollbarButtons = [];

		        this.renderer = renderer;

		        this.userOptions = options;
		        this.options = merge(defaultScrollbarOptions, options);

		        this.chart = chart;

		        // backward compatibility
		        this.size = pick(this.options.size, this.options.height);

		        // Init
		        if (options.enabled) {
		            this.render();
		            this.initEvents();
		            this.addEvents();
		        }
		    },

		    /**
		    * Render scrollbar with all required items.
		    *
		    * @function Highcharts.Scrollbar#render
		    *
		    * @return {void}
		    */
		    render: function () {
		        var scroller = this,
		            renderer = scroller.renderer,
		            options = scroller.options,
		            size = scroller.size,
		            group;

		        // Draw the scrollbar group
		        scroller.group = group = renderer.g('scrollbar').attr({
		            zIndex: options.zIndex,
		            translateY: -99999
		        }).add();

		        // Draw the scrollbar track:
		        scroller.track = renderer.rect()
		            .addClass('highcharts-scrollbar-track')
		            .attr({
		                x: 0,
		                r: options.trackBorderRadius || 0,
		                height: size,
		                width: size
		            }).add(group);

        
		        scroller.track.attr({
		            fill: options.trackBackgroundColor,
		            stroke: options.trackBorderColor,
		            'stroke-width': options.trackBorderWidth
		        });
        
		        this.trackBorderWidth = scroller.track.strokeWidth();
		        scroller.track.attr({
		            y: -this.trackBorderWidth % 2 / 2
		        });


		        // Draw the scrollbar itself
		        scroller.scrollbarGroup = renderer.g().add(group);

		        scroller.scrollbar = renderer.rect()
		            .addClass('highcharts-scrollbar-thumb')
		            .attr({
		                height: size,
		                width: size,
		                r: options.barBorderRadius || 0
		            }).add(scroller.scrollbarGroup);

		        scroller.scrollbarRifles = renderer.path(
		            swapXY([
		                'M',
		                -3, size / 4,
		                'L',
		                -3, 2 * size / 3,
		                'M',
		                0, size / 4,
		                'L',
		                0, 2 * size / 3,
		                'M',
		                3, size / 4,
		                'L',
		                3, 2 * size / 3
		            ], options.vertical))
		            .addClass('highcharts-scrollbar-rifles')
		            .add(scroller.scrollbarGroup);

        
		        scroller.scrollbar.attr({
		            fill: options.barBackgroundColor,
		            stroke: options.barBorderColor,
		            'stroke-width': options.barBorderWidth
		        });
		        scroller.scrollbarRifles.attr({
		            stroke: options.rifleColor,
		            'stroke-width': 1
		        });
        
		        scroller.scrollbarStrokeWidth = scroller.scrollbar.strokeWidth();
		        scroller.scrollbarGroup.translate(
		            -scroller.scrollbarStrokeWidth % 2 / 2,
		            -scroller.scrollbarStrokeWidth % 2 / 2
		        );

		        // Draw the buttons:
		        scroller.drawScrollbarButton(0);
		        scroller.drawScrollbarButton(1);
		    },

		    /**
		     * Position the scrollbar, method called from a parent with defined
		     * dimensions.
		     *
		     * @function Highcharts.Scrollbar#position
		     *
		     * @param  {number} x
		     *         x-position on the chart
		     *
		     * @param  {number} y
		     *         y-position on the chart
		     *
		     * @param  {number} width
		     *         width of the scrollbar
		     *
		     * @param  {number} height
		     *         height of the scorllbar
		     *
		     * @return {void}
		     */
		    position: function (x, y, width, height) {
		        var scroller = this,
		            options = scroller.options,
		            vertical = options.vertical,
		            xOffset = height,
		            yOffset = 0,
		            method = scroller.rendered ? 'animate' : 'attr';

		        scroller.x = x;
		        scroller.y = y + this.trackBorderWidth;
		        scroller.width = width; // width with buttons
		        scroller.height = height;
		        scroller.xOffset = xOffset;
		        scroller.yOffset = yOffset;

		        // If Scrollbar is a vertical type, swap options:
		        if (vertical) {
		            scroller.width = scroller.yOffset = width = yOffset = scroller.size;
		            scroller.xOffset = xOffset = 0;
		            scroller.barWidth = height - width * 2; // width without buttons
		            scroller.x = x = x + scroller.options.margin;
		        } else {
		            scroller.height = scroller.xOffset = height = xOffset =
		                scroller.size;
		            scroller.barWidth = width - height * 2; // width without buttons
		            scroller.y = scroller.y + scroller.options.margin;
		        }

		        // Set general position for a group:
		        scroller.group[method]({
		            translateX: x,
		            translateY: scroller.y
		        });

		        // Resize background/track:
		        scroller.track[method]({
		            width: width,
		            height: height
		        });

		        // Move right/bottom button ot it's place:
		        scroller.scrollbarButtons[1][method]({
		            translateX: vertical ? 0 : width - xOffset,
		            translateY: vertical ? height - yOffset : 0
		        });
		    },

		    /**
		     * Draw the scrollbar buttons with arrows
		     *
		     * @function Highcharts.Scrollbar#drawScrollbarButton
		     *
		     * @param  {number} index
		     *         0 is left, 1 is right
		     *
		     * @return {void}
		     */
		    drawScrollbarButton: function (index) {
		        var scroller = this,
		            renderer = scroller.renderer,
		            scrollbarButtons = scroller.scrollbarButtons,
		            options = scroller.options,
		            size = scroller.size,
		            group,
		            tempElem;

		        group = renderer.g().add(scroller.group);
		        scrollbarButtons.push(group);

		        // Create a rectangle for the scrollbar button
		        tempElem = renderer.rect()
		            .addClass('highcharts-scrollbar-button')
		            .add(group);

        
		        // Presentational attributes
		        tempElem.attr({
		            stroke: options.buttonBorderColor,
		            'stroke-width': options.buttonBorderWidth,
		            fill: options.buttonBackgroundColor
		        });
        

		        // Place the rectangle based on the rendered stroke width
		        tempElem.attr(tempElem.crisp({
		            x: -0.5,
		            y: -0.5,
		            width: size + 1, // +1 to compensate for crispifying in rect method
		            height: size + 1,
		            r: options.buttonBorderRadius
		        }, tempElem.strokeWidth()));

		        // Button arrow
		        tempElem = renderer
		            .path(swapXY([
		                'M',
		                size / 2 + (index ? -1 : 1),
		                size / 2 - 3,
		                'L',
		                size / 2 + (index ? -1 : 1),
		                size / 2 + 3,
		                'L',
		                size / 2 + (index ? 2 : -2),
		                size / 2
		            ], options.vertical))
		            .addClass('highcharts-scrollbar-arrow')
		            .add(scrollbarButtons[index]);

        
		        tempElem.attr({
		            fill: options.buttonArrowColor
		        });
        
		    },

		    /**
		    * Set scrollbar size, with a given scale.
		    *
		    * @function Highcharts.Scrollbar#setRange
		    *
		    * @param  {number} from
		    *         scale (0-1) where bar should start
		    *
		    * @param  {number} to
		    *         scale (0-1) where bar should end
		    *
		    * @return {void}
		    */
		    setRange: function (from, to) {
		        var scroller = this,
		            options = scroller.options,
		            vertical = options.vertical,
		            minWidth = options.minWidth,
		            fullWidth = scroller.barWidth,
		            fromPX,
		            toPX,
		            newPos,
		            newSize,
		            newRiflesPos,
		            method = (
		                this.rendered &&
		                !this.hasDragged &&
		                !(this.chart.navigator && this.chart.navigator.hasDragged)
		            ) ? 'animate' : 'attr';

		        if (!defined(fullWidth)) {
		            return;
		        }

		        from = Math.max(from, 0);
		        fromPX = Math.ceil(fullWidth * from);
		        toPX = fullWidth * Math.min(to, 1);
		        scroller.calculatedWidth = newSize = correctFloat(toPX - fromPX);

		        // We need to recalculate position, if minWidth is used
		        if (newSize < minWidth) {
		            fromPX = (fullWidth - minWidth + newSize) * from;
		            newSize = minWidth;
		        }
		        newPos = Math.floor(fromPX + scroller.xOffset + scroller.yOffset);
		        newRiflesPos = newSize / 2 - 0.5; // -0.5 -> rifle line width / 2

		        // Store current position:
		        scroller.from = from;
		        scroller.to = to;

		        if (!vertical) {
		            scroller.scrollbarGroup[method]({
		                translateX: newPos
		            });
		            scroller.scrollbar[method]({
		                width: newSize
		            });
		            scroller.scrollbarRifles[method]({
		                translateX: newRiflesPos
		            });
		            scroller.scrollbarLeft = newPos;
		            scroller.scrollbarTop = 0;
		        } else {
		            scroller.scrollbarGroup[method]({
		                translateY: newPos
		            });
		            scroller.scrollbar[method]({
		                height: newSize
		            });
		            scroller.scrollbarRifles[method]({
		                translateY: newRiflesPos
		            });
		            scroller.scrollbarTop = newPos;
		            scroller.scrollbarLeft = 0;
		        }

		        if (newSize <= 12) {
		            scroller.scrollbarRifles.hide();
		        } else {
		            scroller.scrollbarRifles.show(true);
		        }

		        // Show or hide the scrollbar based on the showFull setting
		        if (options.showFull === false) {
		            if (from <= 0 && to >= 1) {
		                scroller.group.hide();
		            } else {
		                scroller.group.show();
		            }
		        }

		        scroller.rendered = true;
		    },

		    /**
		    * Init events methods, so we have an access to the Scrollbar itself
		    *
		    * @function Highcharts.Scrollbar#initEvents
		    *
		    * @return {void}
		    *
		    * @todo
		    * Make events official: Fires the event `changed`.
		    */
		    initEvents: function () {
		        var scroller = this;
		        /**
		         * Event handler for the mouse move event.
		         */
		        scroller.mouseMoveHandler = function (e) {
		            var normalizedEvent = scroller.chart.pointer.normalize(e),
		                options = scroller.options,
		                direction = options.vertical ? 'chartY' : 'chartX',
		                initPositions = scroller.initPositions,
		                scrollPosition,
		                chartPosition,
		                change;

		            // In iOS, a mousemove event with e.pageX === 0 is fired when
		            // holding the finger down in the center of the scrollbar. This
		            // should be ignored.
		            if (
		                scroller.grabbedCenter &&
		                // #4696, scrollbar failed on Android
		                (!e.touches || e.touches[0][direction] !== 0)
		            ) {
		                chartPosition = scroller.cursorToScrollbarPosition(
		                    normalizedEvent
		                )[direction];
		                scrollPosition = scroller[direction];

		                change = chartPosition - scrollPosition;

		                scroller.hasDragged = true;
		                scroller.updatePosition(
		                    initPositions[0] + change,
		                    initPositions[1] + change
		                );

		                if (scroller.hasDragged) {
		                    fireEvent(scroller, 'changed', {
		                        from: scroller.from,
		                        to: scroller.to,
		                        trigger: 'scrollbar',
		                        DOMType: e.type,
		                        DOMEvent: e
		                    });
		                }
		            }
		        };

		        /**
		         * Event handler for the mouse up event.
		         */
		        scroller.mouseUpHandler = function (e) {
		            if (scroller.hasDragged) {
		                fireEvent(scroller, 'changed', {
		                    from: scroller.from,
		                    to: scroller.to,
		                    trigger: 'scrollbar',
		                    DOMType: e.type,
		                    DOMEvent: e
		                });
		            }
		            scroller.grabbedCenter =
		                scroller.hasDragged =
		                scroller.chartX =
		                scroller.chartY = null;
		        };

		        scroller.mouseDownHandler = function (e) {
		            var normalizedEvent = scroller.chart.pointer.normalize(e),
		                mousePosition = scroller.cursorToScrollbarPosition(
		                    normalizedEvent
		                );

		            scroller.chartX = mousePosition.chartX;
		            scroller.chartY = mousePosition.chartY;
		            scroller.initPositions = [scroller.from, scroller.to];

		            scroller.grabbedCenter = true;
		        };

		        scroller.buttonToMinClick = function (e) {
		            var range = correctFloat(scroller.to - scroller.from) *
		                scroller.options.step;
		            scroller.updatePosition(
		                correctFloat(scroller.from - range),
		                correctFloat(scroller.to - range)
		            );
		            fireEvent(scroller, 'changed', {
		                from: scroller.from,
		                to: scroller.to,
		                trigger: 'scrollbar',
		                DOMEvent: e
		            });
		        };

		        scroller.buttonToMaxClick = function (e) {
		            var range = (scroller.to - scroller.from) * scroller.options.step;
		            scroller.updatePosition(scroller.from + range, scroller.to + range);
		            fireEvent(scroller, 'changed', {
		                from: scroller.from,
		                to: scroller.to,
		                trigger: 'scrollbar',
		                DOMEvent: e
		            });
		        };

		        scroller.trackClick = function (e) {
		            var normalizedEvent = scroller.chart.pointer.normalize(e),
		                range = scroller.to - scroller.from,
		                top = scroller.y + scroller.scrollbarTop,
		                left = scroller.x + scroller.scrollbarLeft;

		            if (
		                (scroller.options.vertical && normalizedEvent.chartY > top) ||
		                (!scroller.options.vertical && normalizedEvent.chartX > left)
		            ) {
		                // On the top or on the left side of the track:
		                scroller.updatePosition(
		                    scroller.from + range,
		                    scroller.to + range
		                );
		            } else {
		                // On the bottom or the right side of the track:
		                scroller.updatePosition(
		                    scroller.from - range,
		                    scroller.to - range
		                );
		            }

		            fireEvent(scroller, 'changed', {
		                from: scroller.from,
		                to: scroller.to,
		                trigger: 'scrollbar',
		                DOMEvent: e
		            });
		        };
		    },

		    /**
		     * Get normalized (0-1) cursor position over the scrollbar
		     *
		     * @function Highcharts.Scrollbar#cursorToScrollbarPosition
		     *
		     * @param  {*} normalizedEvent
		     *         normalized event, with chartX and chartY values
		     *
		     * @return {*}
		     *         Local position {chartX, chartY}
		     */
		    cursorToScrollbarPosition: function (normalizedEvent) {
		        var scroller = this,
		            options = scroller.options,
		            minWidthDifference = options.minWidth > scroller.calculatedWidth ?
		                options.minWidth :
		                0; // minWidth distorts translation

		        return {
		            chartX: (normalizedEvent.chartX - scroller.x - scroller.xOffset) /
		                (scroller.barWidth - minWidthDifference),
		            chartY: (normalizedEvent.chartY - scroller.y - scroller.yOffset) /
		                (scroller.barWidth - minWidthDifference)
		        };
		    },

		    /**
		    * Update position option in the Scrollbar, with normalized 0-1 scale
		    *
		    * @function Highcharts.Scrollbar#updatePosition
		    *
		    * @param  {number} from
		    *
		    * @param  {number} to
		    *
		    * @return {void}
		    */
		    updatePosition: function (from, to) {
		        if (to > 1) {
		            from = correctFloat(1 - correctFloat(to - from));
		            to = 1;
		        }

		        if (from < 0) {
		            to = correctFloat(to - from);
		            from = 0;
		        }

		        this.from = from;
		        this.to = to;
		    },

		    /**
		     * Update the scrollbar with new options
		     *
		     * @function Highcharts.Scrollbar#update
		     *
		     * @param  {Highcharts.ScrollbarOptions} options
		     *
		     * @return {void}
		     */
		    update: function (options) {
		        this.destroy();
		        this.init(
		            this.chart.renderer,
		            merge(true, this.options, options),
		            this.chart
		        );
		    },

		    /**
		     * Set up the mouse and touch events for the Scrollbar
		     *
		     * @function Highcharts.Scrollbar#addEvents
		     *
		     * @return {void}
		     */
		    addEvents: function () {
		        var buttonsOrder = this.options.inverted ? [1, 0] : [0, 1],
		            buttons = this.scrollbarButtons,
		            bar = this.scrollbarGroup.element,
		            track = this.track.element,
		            mouseDownHandler = this.mouseDownHandler,
		            mouseMoveHandler = this.mouseMoveHandler,
		            mouseUpHandler = this.mouseUpHandler,
		            _events;

		        // Mouse events
		        _events = [
		            [buttons[buttonsOrder[0]].element, 'click', this.buttonToMinClick],
		            [buttons[buttonsOrder[1]].element, 'click', this.buttonToMaxClick],
		            [track, 'click', this.trackClick],
		            [bar, 'mousedown', mouseDownHandler],
		            [bar.ownerDocument, 'mousemove', mouseMoveHandler],
		            [bar.ownerDocument, 'mouseup', mouseUpHandler]
		        ];

		        // Touch events
		        if (hasTouch) {
		            _events.push(
		                [bar, 'touchstart', mouseDownHandler],
		                [bar.ownerDocument, 'touchmove', mouseMoveHandler],
		                [bar.ownerDocument, 'touchend', mouseUpHandler]
		            );
		        }

		        // Add them all
		        each(_events, function (args) {
		            addEvent.apply(null, args);
		        });
		        this._events = _events;
		    },

		    /**
		     * Removes the event handlers attached previously with addEvents.
		     *
		     * @function Highcharts.Scrollbar#removeEvents
		     *
		     * @return {void}
		     */
		    removeEvents: function () {
		        each(this._events, function (args) {
		            removeEvent.apply(null, args);
		        });
		        this._events.length = 0;
		    },

		    /**
		     * Destroys allocated elements.
		     *
		     * @function Highcharts.Scrollbar#destroy
		     *
		     * @return {void}
		     */
		    destroy: function () {

		        var scroller = this.chart.scroller;

		        // Disconnect events added in addEvents
		        this.removeEvents();

		        // Destroy properties
		        each(
		            [
		                'track',
		                'scrollbarRifles',
		                'scrollbar',
		                'scrollbarGroup',
		                'group'
		            ],
		            function (prop) {
		                if (this[prop] && this[prop].destroy) {
		                    this[prop] = this[prop].destroy();
		                }
		            },
		            this
		        );

		        // #6421, chart may have more scrollbars
		        if (scroller && this === scroller.scrollbar) {
		            scroller.scrollbar = null;

		            // Destroy elements in collection
		            destroyObjectProperties(scroller.scrollbarButtons);
		        }
		    }
		};

		/*
		 * Wrap axis initialization and create scrollbar if enabled:
		 */
		addEvent(Axis, 'afterInit', function () {
		    var axis = this;

		    if (axis.options.scrollbar && axis.options.scrollbar.enabled) {
		        // Predefined options:
		        axis.options.scrollbar.vertical = !axis.horiz;
		        axis.options.startOnTick = axis.options.endOnTick = false;

		        axis.scrollbar = new Scrollbar(
		            axis.chart.renderer,
		            axis.options.scrollbar,
		            axis.chart
		        );

		        addEvent(axis.scrollbar, 'changed', function (e) {
		            var unitedMin = Math.min(
		                    pick(axis.options.min, axis.min),
		                    axis.min,
		                    axis.dataMin
		                ),
		                unitedMax = Math.max(
		                    pick(axis.options.max, axis.max),
		                    axis.max,
		                    axis.dataMax
		                ),
		                range = unitedMax - unitedMin,
		                to,
		                from;

		            if (
		                (axis.horiz && !axis.reversed) ||
		                (!axis.horiz && axis.reversed)
		            ) {
		                to = unitedMin + range * this.to;
		                from = unitedMin + range * this.from;
		            } else {
		                // y-values in browser are reversed, but this also applies for
		                // reversed horizontal axis:
		                to = unitedMin + range * (1 - this.from);
		                from = unitedMin + range * (1 - this.to);
		            }

		            axis.setExtremes(from, to, true, false, e);
		        });
		    }
		});

		/*
		 * Wrap rendering axis, and update scrollbar if one is created:
		 */
		addEvent(Axis, 'afterRender', function () {
		    var axis = this,
		        scrollMin = Math.min(
		            pick(axis.options.min, axis.min),
		            axis.min,
		            pick(axis.dataMin, axis.min) // #6930
		        ),
		        scrollMax = Math.max(
		            pick(axis.options.max, axis.max),
		            axis.max,
		            pick(axis.dataMax, axis.max) // #6930
		        ),
		        scrollbar = axis.scrollbar,
		        titleOffset = axis.titleOffset || 0,
		        offsetsIndex,
		        from,
		        to;

		    if (scrollbar) {

		        if (axis.horiz) {
		            scrollbar.position(
		                axis.left,
		                axis.top + axis.height + 2 + axis.chart.scrollbarsOffsets[1] +
		                    (axis.opposite ?
		                        0 :
		                        titleOffset + axis.axisTitleMargin + axis.offset
		                    ),
		                axis.width,
		                axis.height
		            );
		            offsetsIndex = 1;
		        } else {
		            scrollbar.position(
		                axis.left + axis.width + 2 + axis.chart.scrollbarsOffsets[0] +
		                    (axis.opposite ?
		                        titleOffset + axis.axisTitleMargin + axis.offset :
		                        0
		                    ),
		                axis.top,
		                axis.width,
		                axis.height
		            );
		            offsetsIndex = 0;
		        }

		        if ((!axis.opposite && !axis.horiz) || (axis.opposite && axis.horiz)) {
		            axis.chart.scrollbarsOffsets[offsetsIndex] +=
		                axis.scrollbar.size + axis.scrollbar.options.margin;
		        }

		        if (
		            isNaN(scrollMin) ||
		            isNaN(scrollMax) ||
		            !defined(axis.min) ||
		            !defined(axis.max)
		        ) {
		            // default action: when there is not extremes on the axis, but
		            // scrollbar exists, make it full size
		            scrollbar.setRange(0, 0);
		        } else {
		            from = (axis.min - scrollMin) / (scrollMax - scrollMin);
		            to = (axis.max - scrollMin) / (scrollMax - scrollMin);

		            if (
		                (axis.horiz && !axis.reversed) ||
		                (!axis.horiz && axis.reversed)
		            ) {
		                scrollbar.setRange(from, to);
		            } else {
		                scrollbar.setRange(1 - to, 1 - from); // inverse vertical axis
		            }
		        }
		    }
		});

		/*
		 * Make space for a scrollbar
		 */
		addEvent(Axis, 'afterGetOffset', function () {
		    var axis = this,
		        index = axis.horiz ? 2 : 1,
		        scrollbar = axis.scrollbar;

		    if (scrollbar) {
		        axis.chart.scrollbarsOffsets = [0, 0]; // reset scrollbars offsets
		        axis.chart.axisOffset[index] +=
		            scrollbar.size + scrollbar.options.margin;
		    }
		});

		H.Scrollbar = Scrollbar;

	}(Highcharts));
	(function (H) {
		/**
		 * (c) 2010-2017 Torstein Honsi
		 *
		 * License: www.highcharts.com/license
		 */


		var addEvent = H.addEvent,
		    Axis = H.Axis,
		    Chart = H.Chart,
		    color = H.color,
		    defaultDataGroupingUnits = H.defaultDataGroupingUnits,
		    defaultOptions = H.defaultOptions,
		    defined = H.defined,
		    destroyObjectProperties = H.destroyObjectProperties,
		    each = H.each,
		    erase = H.erase,
		    error = H.error,
		    extend = H.extend,
		    grep = H.grep,
		    hasTouch = H.hasTouch,
		    isArray = H.isArray,
		    isNumber = H.isNumber,
		    isObject = H.isObject,
		    isTouchDevice = H.isTouchDevice,
		    merge = H.merge,
		    pick = H.pick,
		    removeEvent = H.removeEvent,
		    Scrollbar = H.Scrollbar,
		    Series = H.Series,
		    seriesTypes = H.seriesTypes,
		    wrap = H.wrap,

		    units = [].concat(defaultDataGroupingUnits), // copy
		    defaultSeriesType,

		    // Finding the min or max of a set of variables where we don't know if they
		    // are defined, is a pattern that is repeated several places in Highcharts.
		    // Consider making this a global utility method.
		    numExt = function (extreme) {
		        var numbers = grep(arguments, isNumber);
		        if (numbers.length) {
		            return Math[extreme].apply(0, numbers);
		        }
		    };

		// add more resolution to units
		units[4] = ['day', [1, 2, 3, 4]]; // allow more days
		units[5] = ['week', [1, 2, 3]]; // allow more weeks

		defaultSeriesType = seriesTypes.areaspline === undefined ?
		    'line' :
		    'areaspline';

		extend(defaultOptions, {

		    /**
		     * The navigator is a small series below the main series, displaying
		     * a view of the entire data set. It provides tools to zoom in and
		     * out on parts of the data as well as panning across the dataset.
		     *
		     * @product highstock
		     * @optionparent navigator
		     */
		    navigator: {

		        /**
		         * Whether the navigator and scrollbar should adapt to updated data
		         * in the base X axis. When loading data async, as in the demo below,
		         * this should be `false`. Otherwise new data will trigger navigator
		         * redraw, which will cause unwanted looping. In the demo below, the
		         * data in the navigator is set only once. On navigating, only the main
		         * chart content is updated.
		         *
		         * @sample {highstock} stock/demo/lazy-loading/
		         *         Set to false with async data loading
		         *
		         * @type       {boolean}
		         * @default    true
		         * @product    highstock
		         * @apioption  navigator.adaptToUpdatedData
		         */

		        /**
		         * An integer identifying the index to use for the base series, or a
		         * string representing the id of the series.
		         *
		         * **Note**: As of Highcharts 5.0, this is now a deprecated option.
		         * Prefer [series.showInNavigator](#plotOptions.series.showInNavigator).
		         *
		         * @see [series.showInNavigator](#plotOptions.series.showInNavigator)
		         *
		         * @deprecated
		         * @type       {*}
		         * @default    0
		         * @product    highstock
		         * @apioption  navigator.baseSeries
		         */

		        /**
		         * Enable or disable the navigator.
		         *
		         * @sample {highstock} stock/navigator/enabled/ Disable the navigator
		         *
		         * @type       {boolean}
		         * @default    true
		         * @product    highstock
		         * @apioption  navigator.enabled
		         */

		        /**
		         * When the chart is inverted, whether to draw the navigator on the
		         * opposite side.
		         *
		         * @type       {boolean}
		         * @default    false
		         * @since      5.0.8
		         * @product    highstock
		         * @apioption  navigator.opposite
		         */

		        /**
		         * The height of the navigator.
		         *
		         * @sample {highstock} stock/navigator/height/
		         *         A higher navigator
		         *
		         * @type       {number}
		         * @default    40
		         * @product    highstock
		         * @apioption  navigator.height
		         */
		        height: 40,

		        /**
		         * The distance from the nearest element, the X axis or X axis labels.
		         *
		         * @sample {highstock} stock/navigator/margin/
		         *         A margin of 2 draws the navigator closer to the X axis labels
		         *
		         * @type       {number}
		         * @default    25
		         * @product    highstock
		         * @apioption  navigator.margin
		         */
		        margin: 25,

		        /**
		         * Whether the mask should be inside the range marking the zoomed
		         * range, or outside. In Highstock 1.x it was always `false`.
		         *
		         * @sample {highstock} stock/navigator/maskinside-false/
		         *         False, mask outside
		         *
		         * @type       {boolean}
		         * @default    true
		         * @since      2.0
		         * @product    highstock
		         * @apioption  navigator.maskInside
		         */
		        maskInside: true,

		        /**
		         * Options for the handles for dragging the zoomed area.
		         *
		         * @sample {highstock} stock/navigator/handles/
		         *         Colored handles
		         *
		         * @type       {*}
		         * @product    highstock
		         * @apioption  navigator.handles
		         */
		        handles: {
		            /**
		             * Width for handles.
		             *
		             * @sample {highstock} stock/navigator/styled-handles/
		             *         Styled handles
		             *
		             * @type       {number}
		             * @default    7
		             * @since      6.0.0
		             * @product    highstock
		             * @apioption  navigator.handles.width
		             */
		            width: 7,

		            /**
		             * Height for handles.
		             *
		             * @sample {highstock} stock/navigator/styled-handles/
		             *         Styled handles
		             *
		             * @type       {number}
		             * @default    15
		             * @since      6.0.0
		             * @product    highstock
		             * @apioption  navigator.handles.height
		             */
		            height: 15,

		            /**
		             * Array to define shapes of handles. 0-index for left, 1-index for
		             * right.
		             *
		             * Additionally, the URL to a graphic can be given on this form:
		             * `url(graphic.png)`. Note that for the image to be applied to
		             * exported charts, its URL needs to be accessible by the export
		             * server.
		             *
		             * Custom callbacks for symbol path generation can also be added to
		             * `Highcharts.SVGRenderer.prototype.symbols`. The callback is then
		             * used by its method name, as shown in the demo.
		             *
		             * @sample {highstock} stock/navigator/styled-handles/
		             *         Styled handles
		             *
		             * @type       {Array<string>}
		             * @default    ['navigator-handle', 'navigator-handle']
		             * @since      6.0.0
		             * @product    highstock
		             * @apioption  navigator.handles.symbols
		             */
		            symbols: ['navigator-handle', 'navigator-handle'],

		            /**
		             * Allows to enable/disable handles.
		             *
		             * @type       {boolean}
		             * @default    true
		             * @since      6.0.0
		             * @product    highstock
		             * @apioption  navigator.handles.enabled
		             */
		            enabled: true,

            
		            /**
		             * The width for the handle border and the stripes inside.
		             *
		             * @sample {highstock} stock/navigator/styled-handles/
		             *         Styled handles
		             *
		             * @type       {number}
		             * @default    7
		             * @since      6.0.0
		             * @product    highstock
		             * @apioption  navigator.handles.lineWidth
		             */
		            lineWidth: 1,

		            /**
		             * The fill for the handle.
		             *
		             * @type       {Highcharts.ColorString}
		             * @product    highstock
		             * @apioption  navigator.handles.backgroundColor
		             */
		            backgroundColor: '#f2f2f2',

		            /**
		             * The stroke for the handle border and the stripes inside.
		             *
		             * @type       {Highcharts.ColorString}
		             * @product    highstock
		             * @apioption  navigator.handles.borderColor
		             */
		            borderColor: '#999999'

            
		        },

        

		        /**
		         * The color of the mask covering the areas of the navigator series
		         * that are currently not visible in the main series. The default
		         * color is bluish with an opacity of 0.3 to see the series below.
		         *
		         * @see In styled mode, the mask is styled with the
		         *      `.highcharts-navigator-mask` and
		         *      `.highcharts-navigator-mask-inside` classes.
		         *
		         * @sample {highstock} stock/navigator/maskfill/
		         *         Blue, semi transparent mask
		         *
		         * @type       {Highcharts.ColorString}
		         * @default    rgba(102,133,194,0.3)
		         * @product    highstock
		         * @apioption  navigator.maskFill
		         */
		        maskFill: color('#6685c2').setOpacity(0.3).get(),

		        /**
		         * The color of the line marking the currently zoomed area in the
		         * navigator.
		         *
		         * @sample {highstock} stock/navigator/outline/
		         *         2px blue outline
		         *
		         * @type       {Highcharts.ColorString}
		         * @default    #cccccc
		         * @product    highstock
		         * @apioption  navigator.outlineColor
		         */
		        outlineColor: '#cccccc',

		        /**
		         * The width of the line marking the currently zoomed area in the
		         * navigator.
		         *
		         * @see In styled mode, the outline stroke width is set with the
		         *      `.highcharts-navigator-outline` class.
		         *
		         * @sample {highstock} stock/navigator/outline/
		         *         2px blue outline
		         *
		         * @type       {number}
		         * @default    2
		         * @product    highstock
		         * @apioption  navigator.outlineWidth
		         */
		        outlineWidth: 1,
        

		        /**
		         * Options for the navigator series. Available options are the same
		         * as any series, documented at [plotOptions](#plotOptions.series)
		         * and [series](#series).
		         *
		         * Unless data is explicitly defined on navigator.series, the data
		         * is borrowed from the first series in the chart.
		         *
		         * Default series options for the navigator series are:
		         *
		         * <pre>series: {
		         *     type: 'areaspline',
		         *     fillOpacity: 0.05,
		         *     dataGrouping: {
		         *         smoothed: true
		         *     },
		         *     lineWidth: 1,
		         *     marker: {
		         *         enabled: false
		         *     }
		         * }</pre>
		         *
		         * @see In styled mode, the navigator series is styled with the
		         *      `.highcharts-navigator-series` class.
		         *
		         * @sample {highstock} stock/navigator/series-data/
		         *         Using a separate data set for the navigator
		         * @sample {highstock} stock/navigator/series/
		         *         A green navigator series
		         *
		         * @type       {*}
		         * @product    highstock
		         * @apioption  navigator.series
		         */
		        series: {

		            /**
		             * The type of the navigator series. Defaults to `areaspline` if
		             * defined, otherwise `line`.
		             *
		             * @type       {string}
		             * @default    areaspline
		             * @apioption  navigator.series.type
		             */
		            type: defaultSeriesType,
            


		            /**
		             * The fill opacity of the navigator series.
		             *
		             * @type       {number}
		             * @default    0.05
		             * @apioption  navigator.series.fillOpacity
		             */
		            fillOpacity: 0.05,

		            /**
		             * The pixel line width of the navigator series.
		             *
		             * @type       {number}
		             * @default    1
		             * @apioption  navigator.series.lineWidth
		             */
		            lineWidth: 1,
            

		            /**
		             * @ignore-option
		             */
		            compare: null,

		            /**
		             * Data grouping options for the navigator series.
		             *
		             * @type       {*}
		             * @extends    plotOptions.series.dataGrouping
		             * @apioption  navigator.series.dataGrouping
		             */
		            dataGrouping: {
		                approximation: 'average',
		                enabled: true,
		                groupPixelWidth: 2,
		                smoothed: true,
		                units: units
		            },

		            /**
		             * Data label options for the navigator series. Data labels are
		             * disabled by default on the navigator series.
		             *
		             * @type       {*}
		             * @extends    plotOptions.series.dataLabels
		             * @apioption  navigator.series.dataLabels
		             */
		            dataLabels: {
		                enabled: false,
		                zIndex: 2 // #1839
		            },

		            id: 'highcharts-navigator-series',
		            className: 'highcharts-navigator-series',

		            /**
		             * Line color for the navigator series. Allows setting the color
		             * while disallowing the default candlestick setting.
		             *
		             * @type       {Highcharts.ColorString|null}
		             * @default    null
		             * @apioption  navigator.series.lineColor
		             */
		            lineColor: null, // #4602

		            marker: {
		                enabled: false
		            },

		            pointRange: 0,
		            /**
		             * The threshold option. Setting it to 0 will make the default
		             * navigator area series draw its area from the 0 value and up.
		             *
		             * @type       {number|null}
		             * @default    null
		             * @apioption  navigator.series.threshold
		             */
		            threshold: null
		        },

		        /**
		         * Options for the navigator X axis. Default series options
		         * for the navigator xAxis are:
		         *
		         * <pre>xAxis: {
		         *     tickWidth: 0,
		         *     lineWidth: 0,
		         *     gridLineWidth: 1,
		         *     tickPixelInterval: 200,
		         *     labels: {
		         *            align: 'left',
		         *         style: {
		         *             color: '#888'
		         *         },
		         *         x: 3,
		         *         y: -4
		         *     }
		         * }</pre>
		         *
		         * @type       {*}
		         * @extends    xAxis
		         * @excluding  linkedTo,maxZoom,minRange,opposite,range,scrollbar,
		         *             showEmpty,maxRange
		         * @product    highstock
		         * @apioption  navigator.xAxis
		         */
		        xAxis: {
		            /**
		             * Additional range on the right side of the xAxis. Works similar to
		             * xAxis.maxPadding, but value is set in milliseconds.
		             * Can be set for both, main xAxis and navigator's xAxis.
		             *
		             * @type       {number}
		             * @default    0
		             * @since      6.0.0
		             * @product    highstock
		             * @apioption  navigator.xAxis.overscroll
		             */
		            overscroll: 0,

		            className: 'highcharts-navigator-xaxis',
		            tickLength: 0,

            
		            lineWidth: 0,
		            gridLineColor: '#e6e6e6',
		            gridLineWidth: 1,
            

		            tickPixelInterval: 200,

		            labels: {
		                align: 'left',

                
		                style: {
		                    color: '#999999'
		                },
                

		                x: 3,
		                y: -4
		            },

		            crosshair: false
		        },

		        /**
		         * Options for the navigator Y axis. Default series options
		         * for the navigator yAxis are:
		         *
		         * <pre>yAxis: {
		         *     gridLineWidth: 0,
		         *     startOnTick: false,
		         *     endOnTick: false,
		         *     minPadding: 0.1,
		         *     maxPadding: 0.1,
		         *     labels: {
		         *         enabled: false
		         *     },
		         *     title: {
		         *         text: null
		         *     },
		         *     tickWidth: 0
		         * }</pre>
		         *
		         * @type       {*}
		         * @extends    yAxis
		         * @excluding  height,linkedTo,maxZoom,minRange,ordinal,range,showEmpty,
		         *             scrollbar,top,units,maxRange,minLength,maxLength,resize
		         * @product    highstock
		         * @apioption  navigator.yAxis
		         */
		        yAxis: {

		            className: 'highcharts-navigator-yaxis',

            
		            gridLineWidth: 0,
            

		            startOnTick: false,
		            endOnTick: false,
		            minPadding: 0.1,
		            maxPadding: 0.1,
		            labels: {
		                enabled: false
		            },
		            crosshair: false,
		            title: {
		                text: null
		            },
		            tickLength: 0,
		            tickWidth: 0
		        }
		    }
		});

		/**
		 * Draw one of the handles on the side of the zoomed range in the navigator
		 *
		 * @function Highcharts.Renderer#symbols.navigator-handle
		 *
		 * @param  {boolean} inverted
		 *         flag for chart.inverted
		 *
		 * @return {Array<number|string>}
		 *         Path to be used in a handle
		 */
		H.Renderer.prototype.symbols['navigator-handle'] = function (
		    x,
		    y,
		    w,
		    h,
		    options
		) {
		    var halfWidth = options.width / 2,
		        markerPosition = Math.round(halfWidth / 3) + 0.5,
		        height = options.height;

		    return [
		        'M',
		        -halfWidth - 1, 0.5,
		        'L',
		        halfWidth, 0.5,
		        'L',
		        halfWidth, height + 0.5,
		        'L',
		        -halfWidth - 1, height + 0.5,
		        'L',
		        -halfWidth - 1, 0.5,
		        'M',
		        -markerPosition, 4,
		        'L',
		        -markerPosition, height - 3,
		        'M',
		        markerPosition - 1, 4,
		        'L',
		        markerPosition - 1, height - 3
		    ];
		};

		/**
		 * The Navigator class
		 *
		 * @class Highcharts.Navigator
		 *
		 * @param {Highcharts.Chart} chart
		 *        Chart object
		 */
		function Navigator(chart) {
		    this.init(chart);
		}

		Navigator.prototype = {
		    /**
		     * Draw one of the handles on the side of the zoomed range in the navigator
		     *
		     * @function Highcharts.Navigator#drawHandle
		     *
		     * @param  {number} x
		     *         The x center for the handle
		     *
		     * @param  {number} index
		     *         0 for left and 1 for right
		     * @param  {boolean} inverted
		     *         flag for chart.inverted
		     * @param  {string} verb
		     *         use 'animate' or 'attr'
		     *
		     * @return {void}
		     */
		    drawHandle: function (x, index, inverted, verb) {
		        var navigator = this,
		            height = navigator.navigatorOptions.handles.height;

		        // Place it
		        navigator.handles[index][verb](inverted ? {
		            translateX: Math.round(navigator.left + navigator.height / 2),
		            translateY: Math.round(
		                navigator.top + parseInt(x, 10) + 0.5 - height
		            )
		        } : {
		            translateX: Math.round(navigator.left + parseInt(x, 10)),
		            translateY: Math.round(
		                navigator.top + navigator.height / 2 - height / 2 - 1
		            )
		        });
		    },

		    /**
		     * Render outline around the zoomed range
		     *
		     * @function Highcharts.Navigator#drawOutline
		     *
		     * @param  {number} zoomedMin
		     *         in pixels position where zoomed range starts
		     *
		     * @param  {number} zoomedMax
		     *         in pixels position where zoomed range ends
		     *
		     * @param  {boolean} inverted
		     *         flag if chart is inverted
		     *
		     * @param  {string} verb
		     *         use 'animate' or 'attr'
		     *
		     * @return {void}
		     */
		    drawOutline: function (zoomedMin, zoomedMax, inverted, verb) {
		        var navigator = this,
		            maskInside = navigator.navigatorOptions.maskInside,
		            outlineWidth = navigator.outline.strokeWidth(),
		            halfOutline = outlineWidth / 2,
		            outlineCorrection = (outlineWidth % 2) / 2, // #5800
		            outlineHeight = navigator.outlineHeight,
		            scrollbarHeight = navigator.scrollbarHeight,
		            navigatorSize = navigator.size,
		            left = navigator.left - scrollbarHeight,
		            navigatorTop = navigator.top,
		            verticalMin,
		            path;

		        if (inverted) {
		            left -= halfOutline;
		            verticalMin = navigatorTop + zoomedMax + outlineCorrection;
		            zoomedMax = navigatorTop + zoomedMin + outlineCorrection;

		            path = [
		                'M',
		                left + outlineHeight,
		                navigatorTop - scrollbarHeight - outlineCorrection, // top edge
		                'L',
		                left + outlineHeight,
		                verticalMin, // top right of zoomed range
		                'L',
		                left,
		                verticalMin, // top left of z.r.
		                'L',
		                left,
		                zoomedMax, // bottom left of z.r.
		                'L',
		                left + outlineHeight,
		                zoomedMax, // bottom right of z.r.
		                'L',
		                left + outlineHeight,
		                navigatorTop + navigatorSize + scrollbarHeight // bottom edge
		            ].concat(maskInside ? [
		                'M',
		                left + outlineHeight,
		                verticalMin - halfOutline, // upper left of zoomed range
		                'L',
		                left + outlineHeight,
		                zoomedMax + halfOutline // upper right of z.r.
		            ] : []);
		        } else {
		            zoomedMin += left + scrollbarHeight - outlineCorrection;
		            zoomedMax += left + scrollbarHeight - outlineCorrection;
		            navigatorTop += halfOutline;

		            path = [
		                'M',
		                left,
		                navigatorTop, // left
		                'L',
		                zoomedMin,
		                navigatorTop, // upper left of zoomed range
		                'L',
		                zoomedMin,
		                navigatorTop + outlineHeight, // lower left of z.r.
		                'L',
		                zoomedMax,
		                navigatorTop + outlineHeight, // lower right of z.r.
		                'L',
		                zoomedMax,
		                navigatorTop, // upper right of z.r.
		                'L',
		                left + navigatorSize + scrollbarHeight * 2,
		                navigatorTop // right
		            ].concat(maskInside ? [
		                'M',
		                zoomedMin - halfOutline,
		                navigatorTop, // upper left of zoomed range
		                'L',
		                zoomedMax + halfOutline,
		                navigatorTop // upper right of z.r.
		            ] : []);
		        }
		        navigator.outline[verb]({
		            d: path
		        });
		    },

		    /**
		     * Render outline around the zoomed range
		     *
		     * @function Highcharts.Navigator#drawMasks
		     *
		     * @param  {number} zoomedMin
		     *         in pixels position where zoomed range starts
		     *
		     * @param  {number} zoomedMax
		     *         in pixels position where zoomed range ends
		     *
		     * @param  {boolean} inverted
		     *         flag if chart is inverted
		     *
		     * @param  {string} verb
		     *         use 'animate' or 'attr'
		     *
		     * @return {void}
		     */
		    drawMasks: function (zoomedMin, zoomedMax, inverted, verb) {
		        var navigator = this,
		            left = navigator.left,
		            top = navigator.top,
		            navigatorHeight = navigator.height,
		            height,
		            width,
		            x,
		            y;

		        // Determine rectangle position & size
		        // According to (non)inverted position:
		        if (inverted) {
		            x = [left, left, left];
		            y = [top, top + zoomedMin, top + zoomedMax];
		            width = [navigatorHeight, navigatorHeight, navigatorHeight];
		            height = [
		                zoomedMin,
		                zoomedMax - zoomedMin,
		                navigator.size - zoomedMax
		            ];
		        } else {
		            x = [left, left + zoomedMin, left + zoomedMax];
		            y = [top, top, top];
		            width = [
		                zoomedMin,
		                zoomedMax - zoomedMin,
		                navigator.size - zoomedMax
		            ];
		            height = [navigatorHeight, navigatorHeight, navigatorHeight];
		        }
		        each(navigator.shades, function (shade, i) {
		            shade[verb]({
		                x: x[i],
		                y: y[i],
		                width: width[i],
		                height: height[i]
		            });
		        });
		    },

		    /**
		     * Generate DOM elements for a navigator:
		     * - main navigator group
		     * - all shades
		     * - outline
		     * - handles
		     *
		     * @function Highcharts.Navigator#renderElements
		     *
		     * @return {void}
		     */
		    renderElements: function () {
		        var navigator = this,
		            navigatorOptions = navigator.navigatorOptions,
		            maskInside = navigatorOptions.maskInside,
		            chart = navigator.chart,
		            inverted = chart.inverted,
		            renderer = chart.renderer,
		            navigatorGroup;

		        // Create the main navigator group
		        navigator.navigatorGroup = navigatorGroup = renderer.g('navigator')
		            .attr({
		                zIndex: 8,
		                visibility: 'hidden'
		            })
		            .add();


        
		        var mouseCursor = {
		            cursor: inverted ? 'ns-resize' : 'ew-resize'
		        };
        

		        // Create masks, each mask will get events and fill:
		        each([!maskInside, maskInside, !maskInside], function (hasMask, index) {
		            navigator.shades[index] = renderer.rect()
		                .addClass('highcharts-navigator-mask' +
		                    (index === 1 ? '-inside' : '-outside'))
                
		                .attr({
		                    fill: hasMask ? navigatorOptions.maskFill : 'rgba(0,0,0,0)'
		                })
		                .css(index === 1 && mouseCursor)
                
		                .add(navigatorGroup);
		        });

		        // Create the outline:
		        navigator.outline = renderer.path()
		            .addClass('highcharts-navigator-outline')
            
		            .attr({
		                'stroke-width': navigatorOptions.outlineWidth,
		                stroke: navigatorOptions.outlineColor
		            })
            
		            .add(navigatorGroup);

		        // Create the handlers:
		        if (navigatorOptions.handles.enabled) {
		            each([0, 1], function (index) {
		                navigatorOptions.handles.inverted = chart.inverted;
		                navigator.handles[index] = renderer.symbol(
		                    navigatorOptions.handles.symbols[index],
		                    -navigatorOptions.handles.width / 2 - 1,
		                    0,
		                    navigatorOptions.handles.width,
		                    navigatorOptions.handles.height,
		                    navigatorOptions.handles
		                );
		                // zIndex = 6 for right handle, 7 for left.
		                // Can't be 10, because of the tooltip in inverted chart #2908
		                navigator.handles[index].attr({ zIndex: 7 - index })
		                    .addClass(
		                        'highcharts-navigator-handle ' +
		                        'highcharts-navigator-handle-' +
		                        ['left', 'right'][index]
		                    ).add(navigatorGroup);

                
		                var handlesOptions = navigatorOptions.handles;
		                navigator.handles[index]
		                    .attr({
		                        fill: handlesOptions.backgroundColor,
		                        stroke: handlesOptions.borderColor,
		                        'stroke-width': handlesOptions.lineWidth
		                    })
		                    .css(mouseCursor);
                
		            });
		        }
		    },

		    /**
		     * Update navigator
		     *
		     * @function Highcharts.Navigator#update
		     *
		     * @param  {Highcharts.NavigatorOptions} options
		     *         Options to merge in when updating navigator
		     *
		     * @return {void}
		     */
		    update: function (options) {
		        // Remove references to old navigator series in base series
		        each(this.series || [], function (series) {
		            if (series.baseSeries) {
		                delete series.baseSeries.navigatorSeries;
		            }
		        });
		        // Destroy and rebuild navigator
		        this.destroy();
		        var chartOptions = this.chart.options;
		        merge(true, chartOptions.navigator, this.options, options);
		        this.init(this.chart);
		    },

		    /**
		     * Render the navigator
		     *
		     * @function Highcharts.Navigator#render
		     *
		     * @param  {number} min
		     *         X axis value minimum
		     *
		     * @param  {number} max
		     *         X axis value maximum
		     *
		     * @param  {number} pxMin
		     *         Pixel value minimum
		     *
		     * @param  {number} pxMax
		     *         Pixel value maximum
		     *
		     * @return {void}
		     */
		    render: function (min, max, pxMin, pxMax) {

		        var navigator = this,
		            chart = navigator.chart,
		            navigatorWidth,
		            scrollbarLeft,
		            scrollbarTop,
		            scrollbarHeight = navigator.scrollbarHeight,
		            navigatorSize,
		            xAxis = navigator.xAxis,
		            scrollbarXAxis = xAxis.fake ? chart.xAxis[0] : xAxis,
		            navigatorEnabled = navigator.navigatorEnabled,
		            zoomedMin,
		            zoomedMax,
		            rendered = navigator.rendered,
		            inverted = chart.inverted,
		            verb,
		            newMin,
		            newMax,
		            currentRange,
		            minRange = chart.xAxis[0].minRange,
		            maxRange = chart.xAxis[0].options.maxRange;

		        // Don't redraw while moving the handles (#4703).
		        if (this.hasDragged && !defined(pxMin)) {
		            return;
		        }

		        // Don't render the navigator until we have data (#486, #4202, #5172).
		        if (!isNumber(min) || !isNumber(max)) {
		            // However, if navigator was already rendered, we may need to resize
		            // it. For example hidden series, but visible navigator (#6022).
		            if (rendered) {
		                pxMin = 0;
		                pxMax = pick(xAxis.width, scrollbarXAxis.width);
		            } else {
		                return;
		            }
		        }

		        navigator.left = pick(
		            xAxis.left,
		            // in case of scrollbar only, without navigator
		            chart.plotLeft + scrollbarHeight + (inverted ? chart.plotWidth : 0)
		        );

		        navigator.size = zoomedMax = navigatorSize = pick(
		            xAxis.len,
		            (inverted ? chart.plotHeight : chart.plotWidth) -
		                2 * scrollbarHeight
		        );

		        if (inverted) {
		            navigatorWidth = scrollbarHeight;
		        } else {
		            navigatorWidth = navigatorSize + 2 * scrollbarHeight;
		        }

		        // Get the pixel position of the handles
		        pxMin = pick(pxMin, xAxis.toPixels(min, true));
		        pxMax = pick(pxMax, xAxis.toPixels(max, true));

		        // Verify (#1851, #2238)
		        if (!isNumber(pxMin) || Math.abs(pxMin) === Infinity) {
		            pxMin = 0;
		            pxMax = navigatorWidth;
		        }

		        // Are we below the minRange? (#2618, #6191)
		        newMin = xAxis.toValue(pxMin, true);
		        newMax = xAxis.toValue(pxMax, true);
		        currentRange = Math.abs(H.correctFloat(newMax - newMin));
		        if (currentRange < minRange) {
		            if (this.grabbedLeft) {
		                pxMin = xAxis.toPixels(newMax - minRange, true);
		            } else if (this.grabbedRight) {
		                pxMax = xAxis.toPixels(newMin + minRange, true);
		            }
		        } else if (defined(maxRange) && currentRange > maxRange) {
		            /**
		             * Maximum range which can be set using the navigator's handles.
		             * Opposite of [xAxis.minRange](#xAxis.minRange).
		             *
		             * @type {Number}
		             * @default undefined
		             * @product highstock
		             * @sample {highstock} stock/navigator/maxrange/
		             *         Defined max and min range
		             * @since 6.0.0
		             * @apioption xAxis.maxRange
		             */
		            if (this.grabbedLeft) {
		                pxMin = xAxis.toPixels(newMax - maxRange, true);
		            } else if (this.grabbedRight) {
		                pxMax = xAxis.toPixels(newMin + maxRange, true);
		            }
		        }

		        // Handles are allowed to cross, but never exceed the plot area
		        navigator.zoomedMax = Math.min(Math.max(pxMin, pxMax, 0), zoomedMax);
		        navigator.zoomedMin = Math.min(
		            Math.max(
		                navigator.fixedWidth ?
		                    navigator.zoomedMax - navigator.fixedWidth :
		                    Math.min(pxMin, pxMax),
		                0
		            ),
		            zoomedMax
		        );

		        navigator.range = navigator.zoomedMax - navigator.zoomedMin;

		        zoomedMax = Math.round(navigator.zoomedMax);
		        zoomedMin = Math.round(navigator.zoomedMin);

		        if (navigatorEnabled) {
		            navigator.navigatorGroup.attr({
		                visibility: 'visible'
		            });
		            // Place elements
		            verb = rendered && !navigator.hasDragged ? 'animate' : 'attr';

		            navigator.drawMasks(zoomedMin, zoomedMax, inverted, verb);
		            navigator.drawOutline(zoomedMin, zoomedMax, inverted, verb);

		            if (navigator.navigatorOptions.handles.enabled) {
		                navigator.drawHandle(zoomedMin, 0, inverted, verb);
		                navigator.drawHandle(zoomedMax, 1, inverted, verb);
		            }
		        }

		        if (navigator.scrollbar) {
		            if (inverted) {
		                scrollbarTop = navigator.top - scrollbarHeight;
		                scrollbarLeft = navigator.left - scrollbarHeight +
		                    (navigatorEnabled || !scrollbarXAxis.opposite ? 0 :
		                        // Multiple axes has offsets:
		                        (scrollbarXAxis.titleOffset || 0) +
		                        // Self margin from the axis.title
		                        scrollbarXAxis.axisTitleMargin
		                    );
		                scrollbarHeight = navigatorSize + 2 * scrollbarHeight;
		            } else {
		                scrollbarTop = navigator.top +
		                    (navigatorEnabled ? navigator.height : -scrollbarHeight);
		                scrollbarLeft = navigator.left - scrollbarHeight;
		            }
		            // Reposition scrollbar
		            navigator.scrollbar.position(
		                scrollbarLeft,
		                scrollbarTop,
		                navigatorWidth,
		                scrollbarHeight
		            );
		            // Keep scale 0-1
		            navigator.scrollbar.setRange(
		                // Use real value, not rounded because range can be very small
		                // (#1716)
		                navigator.zoomedMin / (navigatorSize || 1),
		                navigator.zoomedMax / (navigatorSize || 1)
		            );
		        }
		        navigator.rendered = true;
		    },

		    /**
		     * Set up the mouse and touch events for the navigator
		     *
		     * @function Highcharts.Navigator#addMouseEvents
		     *
		     * @return {void}
		     */
		    addMouseEvents: function () {
		        var navigator = this,
		            chart = navigator.chart,
		            container = chart.container,
		            eventsToUnbind = [],
		            mouseMoveHandler,
		            mouseUpHandler;

		        /**
		         * Create mouse events' handlers.
		         * Make them as separate functions to enable wrapping them:
		         */
		        navigator.mouseMoveHandler = mouseMoveHandler = function (e) {
		            navigator.onMouseMove(e);
		        };
		        navigator.mouseUpHandler = mouseUpHandler = function (e) {
		            navigator.onMouseUp(e);
		        };

		        // Add shades and handles mousedown events
		        eventsToUnbind = navigator.getPartsEvents('mousedown');
		        // Add mouse move and mouseup events. These are bind to doc/container,
		        // because Navigator.grabbedSomething flags are stored in mousedown
		        // events
		        eventsToUnbind.push(
		            addEvent(container, 'mousemove', mouseMoveHandler),
		            addEvent(container.ownerDocument, 'mouseup', mouseUpHandler)
		        );

		        // Touch events
		        if (hasTouch) {
		            eventsToUnbind.push(
		                addEvent(container, 'touchmove', mouseMoveHandler),
		                addEvent(container.ownerDocument, 'touchend', mouseUpHandler)
		            );
		            eventsToUnbind.concat(navigator.getPartsEvents('touchstart'));
		        }

		        navigator.eventsToUnbind = eventsToUnbind;

		        // Data events
		        if (navigator.series && navigator.series[0]) {
		            eventsToUnbind.push(
		                addEvent(
		                    navigator.series[0].xAxis,
		                    'foundExtremes',
		                    function () {
		                        chart.navigator.modifyNavigatorAxisExtremes();
		                    }
		                )
		            );
		        }
		    },

		    /**
		     * Generate events for handles and masks
		     *
		     * @function Highcharts.Navigator#getPartsEvents
		     *
		     * @param  {string} eventName
		     *         Event name handler, 'mousedown' or 'touchstart'
		     *
		     * @return {Array<*>}
		     *         An array of arrays: [DOMElement, eventName, callback].
		     */
		    getPartsEvents: function (eventName) {
		        var navigator = this,
		            events = [];
		        each(['shades', 'handles'], function (name) {
		            each(navigator[name], function (navigatorItem, index) {
		                events.push(
		                    addEvent(
		                        navigatorItem.element,
		                        eventName,
		                        function (e) {
		                            navigator[name + 'Mousedown'](e, index);
		                        }
		                    )
		                );
		            });
		        });
		        return events;
		    },

		    /**
		     * Mousedown on a shaded mask, either:
		     * - will be stored for future drag&drop
		     * - will directly shift to a new range
		     *
		     * @function Highcharts.Navigator#shadesMousedown
		     *
		     * @param  {*} e
		     *         Mouse event
		     *
		     * @param  {number} index
		     *         Index of a mask in Navigator.shades array
		     *
		     * @return {void}
		     */
		    shadesMousedown: function (e, index) {
		        e = this.chart.pointer.normalize(e);

		        var navigator = this,
		            chart = navigator.chart,
		            xAxis = navigator.xAxis,
		            zoomedMin = navigator.zoomedMin,
		            navigatorPosition = navigator.left,
		            navigatorSize = navigator.size,
		            range = navigator.range,
		            chartX = e.chartX,
		            fixedMax,
		            fixedMin,
		            ext,
		            left;

		        // For inverted chart, swap some options:
		        if (chart.inverted) {
		            chartX = e.chartY;
		            navigatorPosition = navigator.top;
		        }

		        if (index === 1) {
		            // Store information for drag&drop
		            navigator.grabbedCenter = chartX;
		            navigator.fixedWidth = range;
		            navigator.dragOffset = chartX - zoomedMin;
		        } else {
		            // Shift the range by clicking on shaded areas
		            left = chartX - navigatorPosition - range / 2;
		            if (index === 0) {
		                left = Math.max(0, left);
		            } else if (index === 2 && left + range >= navigatorSize) {
		                left = navigatorSize - range;
		                if (navigator.reversedExtremes) {
		                    // #7713
		                    left -= range;
		                    fixedMin = navigator.getUnionExtremes().dataMin;
		                } else {
		                    // #2293, #3543
		                    fixedMax = navigator.getUnionExtremes().dataMax;
		                }
		            }
		            if (left !== zoomedMin) { // it has actually moved
		                navigator.fixedWidth = range; // #1370

		                ext = xAxis.toFixedRange(
		                    left,
		                    left + range,
		                    fixedMin,
		                    fixedMax
		                );
		                if (defined(ext.min)) { // #7411
		                    chart.xAxis[0].setExtremes(
		                        Math.min(ext.min, ext.max),
		                        Math.max(ext.min, ext.max),
		                        true,
		                        null, // auto animation
		                        { trigger: 'navigator' }
		                    );
		                }
		            }
		        }
		    },

		    /**
		     * Mousedown on a handle mask.
		     * Will store necessary information for drag&drop.
		     *
		     * @function Highcharts.Navigator#handlesMousedown
		     *
		     * @param  {*} e
		     *         Mouse event
		     *
		     * @param  {number} index
		     *         Index of a handle in Navigator.handles array
		     *
		     * @return {void}
		     */
		    handlesMousedown: function (e, index) {
		        e = this.chart.pointer.normalize(e);

		        var navigator = this,
		            chart = navigator.chart,
		            baseXAxis = chart.xAxis[0],
		            // For reversed axes, min and max are changed,
		            // so the other extreme should be stored
		            reverse = navigator.reversedExtremes;

		        if (index === 0) {
		            // Grab the left handle
		            navigator.grabbedLeft = true;
		            navigator.otherHandlePos = navigator.zoomedMax;
		            navigator.fixedExtreme = reverse ? baseXAxis.min : baseXAxis.max;
		        } else {
		            // Grab the right handle
		            navigator.grabbedRight = true;
		            navigator.otherHandlePos = navigator.zoomedMin;
		            navigator.fixedExtreme = reverse ? baseXAxis.max : baseXAxis.min;
		        }

		        chart.fixedRange = null;
		    },
		    /**
		     * Mouse move event based on x/y mouse position.
		     *
		     * @function Highcharts.Navigator#onMouseMove
		     *
		     * @param  {*} e
		     *         Mouse event
		     *
		     * @return {void}
		     */
		    onMouseMove: function (e) {
		        var navigator = this,
		            chart = navigator.chart,
		            left = navigator.left,
		            navigatorSize = navigator.navigatorSize,
		            range = navigator.range,
		            dragOffset = navigator.dragOffset,
		            inverted = chart.inverted,
		            chartX;


		        // In iOS, a mousemove event with e.pageX === 0 is fired when holding
		        // the finger down in the center of the scrollbar. This should be
		        // ignored.
		        if (!e.touches || e.touches[0].pageX !== 0) { // #4696

		            e = chart.pointer.normalize(e);
		            chartX = e.chartX;

		            // Swap some options for inverted chart
		            if (inverted) {
		                left = navigator.top;
		                chartX = e.chartY;
		            }

		            // Drag left handle or top handle
		            if (navigator.grabbedLeft) {
		                navigator.hasDragged = true;
		                navigator.render(
		                    0,
		                    0,
		                    chartX - left,
		                    navigator.otherHandlePos
		                );
		            // Drag right handle or bottom handle
		            } else if (navigator.grabbedRight) {
		                navigator.hasDragged = true;
		                navigator.render(
		                    0,
		                    0,
		                    navigator.otherHandlePos,
		                    chartX - left
		                );
		            // Drag scrollbar or open area in navigator
		            } else if (navigator.grabbedCenter) {
		                navigator.hasDragged = true;
		                if (chartX < dragOffset) { // outside left
		                    chartX = dragOffset;
		                // outside right
		                } else if (chartX > navigatorSize + dragOffset - range) {
		                    chartX = navigatorSize + dragOffset - range;
		                }

		                navigator.render(
		                    0,
		                    0,
		                    chartX - dragOffset,
		                    chartX - dragOffset + range
		                );
		            }
		            if (
		                navigator.hasDragged &&
		                navigator.scrollbar &&
		                pick(
		                    navigator.scrollbar.options.liveRedraw,

		                    // By default, don't run live redraw on VML, on touch
		                    // devices or if the chart is in boost.
		                    H.svg && !isTouchDevice && !this.chart.isBoosting
		                )
		            ) {
		                e.DOMType = e.type; // DOMType is for IE8
		                setTimeout(function () {
		                    navigator.onMouseUp(e);
		                }, 0);
		            }
		        }
		    },

		    /**
		     * Mouse up event based on x/y mouse position.
		     *
		     * @function Highcharts.Navigator#onMouseUp
		     *
		     * @param  {*} e
		     *         Mouse event
		     *
		     * @return {void}
		     */
		    onMouseUp: function (e) {
		        var navigator = this,
		            chart = navigator.chart,
		            xAxis = navigator.xAxis,
		            scrollbar = navigator.scrollbar,
		            unionExtremes,
		            fixedMin,
		            fixedMax,
		            ext,
		            DOMEvent = e.DOMEvent || e;

		        if (
		            // MouseUp is called for both, navigator and scrollbar (that order),
		            // which causes calling afterSetExtremes twice. Prevent first call
		            // by checking if scrollbar is going to set new extremes (#6334)
		            (navigator.hasDragged && (!scrollbar || !scrollbar.hasDragged)) ||
		            e.trigger === 'scrollbar'
		        ) {
		            unionExtremes = navigator.getUnionExtremes();

		            // When dragging one handle, make sure the other one doesn't change
		            if (navigator.zoomedMin === navigator.otherHandlePos) {
		                fixedMin = navigator.fixedExtreme;
		            } else if (navigator.zoomedMax === navigator.otherHandlePos) {
		                fixedMax = navigator.fixedExtreme;
		            }
		            // Snap to right edge (#4076)
		            if (navigator.zoomedMax === navigator.size) {
		                fixedMax = navigator.reversedExtremes ?
		                    unionExtremes.dataMin : unionExtremes.dataMax;
		            }

		            // Snap to left edge (#7576)
		            if (navigator.zoomedMin === 0) {
		                fixedMin = navigator.reversedExtremes ?
		                    unionExtremes.dataMax : unionExtremes.dataMin;
		            }

		            ext = xAxis.toFixedRange(
		                navigator.zoomedMin,
		                navigator.zoomedMax,
		                fixedMin,
		                fixedMax
		            );

		            if (defined(ext.min)) {
		                chart.xAxis[0].setExtremes(
		                    Math.min(ext.min, ext.max),
		                    Math.max(ext.min, ext.max),
		                    true,
		                    // Run animation when clicking buttons, scrollbar track etc,
		                    // but not when dragging handles or scrollbar
		                    navigator.hasDragged ? false : null,
		                    {
		                        trigger: 'navigator',
		                        triggerOp: 'navigator-drag',
		                        DOMEvent: DOMEvent // #1838
		                    }
		                );
		            }
		        }

		        if (e.DOMType !== 'mousemove') {
		            navigator.grabbedLeft = navigator.grabbedRight =
		                navigator.grabbedCenter = navigator.fixedWidth =
		                navigator.fixedExtreme = navigator.otherHandlePos =
		                navigator.hasDragged = navigator.dragOffset = null;
		        }
		    },

		    /**
		     * Removes the event handlers attached previously with addEvents.
		     *
		     * @function Highcharts.Navigator#removeEvents
		     *
		     * @return {void}
		     */
		    removeEvents: function () {
		        if (this.eventsToUnbind) {
		            each(this.eventsToUnbind, function (unbind) {
		                unbind();
		            });
		            this.eventsToUnbind = undefined;
		        }
		        this.removeBaseSeriesEvents();
		    },

		    /**
		     * Remove data events.
		     *
		     * @function Highcharts.Navigator#removeBaseSeriesEvents
		     *
		     * @return {void}
		     */
		    removeBaseSeriesEvents: function () {
		        var baseSeries = this.baseSeries || [];
		        if (this.navigatorEnabled && baseSeries[0]) {
		            if (this.navigatorOptions.adaptToUpdatedData !== false) {
		                each(baseSeries, function (series) {
		                    removeEvent(series, 'updatedData', this.updatedDataHandler);
		                }, this);
		            }

		            // We only listen for extremes-events on the first baseSeries
		            if (baseSeries[0].xAxis) {
		                removeEvent(
		                    baseSeries[0].xAxis,
		                    'foundExtremes',
		                    this.modifyBaseAxisExtremes
		                );
		            }
		        }
		    },

		    /**
		     * Initiate the Navigator object
		     *
		     * @function Highcharts.Navigator#init
		     *
		     * @param  {Highcharts.Chart} chart
		     *
		     * @return {void}
		     */
		    init: function (chart) {
		        var chartOptions = chart.options,
		            navigatorOptions = chartOptions.navigator,
		            navigatorEnabled = navigatorOptions.enabled,
		            scrollbarOptions = chartOptions.scrollbar,
		            scrollbarEnabled = scrollbarOptions.enabled,
		            height = navigatorEnabled ? navigatorOptions.height : 0,
		            scrollbarHeight = scrollbarEnabled ? scrollbarOptions.height : 0;

		        this.handles = [];
		        this.shades = [];

		        this.chart = chart;
		        this.setBaseSeries();

		        this.height = height;
		        this.scrollbarHeight = scrollbarHeight;
		        this.scrollbarEnabled = scrollbarEnabled;
		        this.navigatorEnabled = navigatorEnabled;
		        this.navigatorOptions = navigatorOptions;
		        this.scrollbarOptions = scrollbarOptions;
		        this.outlineHeight = height + scrollbarHeight;

		        this.opposite = pick(
		            navigatorOptions.opposite,
		            !navigatorEnabled && chart.inverted
		        ); // #6262

		        var navigator = this,
		            baseSeries = navigator.baseSeries,
		            xAxisIndex = chart.xAxis.length,
		            yAxisIndex = chart.yAxis.length,
		            baseXaxis = baseSeries && baseSeries[0] && baseSeries[0].xAxis ||
		                chart.xAxis[0] || { options: {} };

		        chart.isDirtyBox = true;

		        if (navigator.navigatorEnabled) {
		            // an x axis is required for scrollbar also
		            navigator.xAxis = new Axis(chart, merge({
		                // inherit base xAxis' break and ordinal options
		                breaks: baseXaxis.options.breaks,
		                ordinal: baseXaxis.options.ordinal
		            }, navigatorOptions.xAxis, {
		                id: 'navigator-x-axis',
		                yAxis: 'navigator-y-axis',
		                isX: true,
		                type: 'datetime',
		                index: xAxisIndex,
		                isInternal: true,
		                offset: 0,
		                keepOrdinalPadding: true, // #2436
		                startOnTick: false,
		                endOnTick: false,
		                minPadding: 0,
		                maxPadding: 0,
		                zoomEnabled: false
		            }, chart.inverted ? {
		                offsets: [scrollbarHeight, 0, -scrollbarHeight, 0],
		                width: height
		            } : {
		                offsets: [0, -scrollbarHeight, 0, scrollbarHeight],
		                height: height
		            }));

		            navigator.yAxis = new Axis(chart, merge(navigatorOptions.yAxis, {
		                id: 'navigator-y-axis',
		                alignTicks: false,
		                offset: 0,
		                index: yAxisIndex,
		                isInternal: true,
		                zoomEnabled: false
		            }, chart.inverted ? {
		                width: height
		            } : {
		                height: height
		            }));

		            // If we have a base series, initialize the navigator series
		            if (baseSeries || navigatorOptions.series.data) {
		                navigator.updateNavigatorSeries(false);

		            // If not, set up an event to listen for added series
		            } else if (chart.series.length === 0) {

		                navigator.unbindRedraw = addEvent(
		                    chart,
		                    'beforeRedraw',
		                    function () {
		                        // We've got one, now add it as base
		                        if (chart.series.length > 0 && !navigator.series) {
		                            navigator.setBaseSeries();
		                            navigator.unbindRedraw(); // reset
		                        }
		                    }
		                );
		            }

		            navigator.reversedExtremes = (
		                chart.inverted && !navigator.xAxis.reversed
		            ) || (
		                !chart.inverted && navigator.xAxis.reversed
		            );

		            // Render items, so we can bind events to them:
		            navigator.renderElements();
		            // Add mouse events
		            navigator.addMouseEvents();

		        // in case of scrollbar only, fake an x axis to get translation
		        } else {
		            navigator.xAxis = {
		                translate: function (value, reverse) {
		                    var axis = chart.xAxis[0],
		                        ext = axis.getExtremes(),
		                        scrollTrackWidth = axis.len - 2 * scrollbarHeight,
		                        min = numExt('min', axis.options.min, ext.dataMin),
		                        valueRange = numExt(
		                            'max',
		                            axis.options.max,
		                            ext.dataMax
		                        ) - min;

		                    return reverse ?
		                        // from pixel to value
		                        (value * valueRange / scrollTrackWidth) + min :
		                        // from value to pixel
		                        scrollTrackWidth * (value - min) / valueRange;
		                },
		                toPixels: function (value) {
		                    return this.translate(value);
		                },
		                toValue: function (value) {
		                    return this.translate(value, true);
		                },
		                toFixedRange: Axis.prototype.toFixedRange,
		                fake: true
		            };
		        }


		        // Initialize the scrollbar
		        if (chart.options.scrollbar.enabled) {
		            chart.scrollbar = navigator.scrollbar = new Scrollbar(
		                chart.renderer,
		                merge(chart.options.scrollbar, {
		                    margin: navigator.navigatorEnabled ? 0 : 10,
		                    vertical: chart.inverted
		                }),
		                chart
		            );
		            addEvent(navigator.scrollbar, 'changed', function (e) {
		                var range = navigator.size,
		                    to = range * this.to,
		                    from = range * this.from;

		                navigator.hasDragged = navigator.scrollbar.hasDragged;
		                navigator.render(0, 0, from, to);

		                if (
		                    chart.options.scrollbar.liveRedraw ||
		                    (
		                        e.DOMType !== 'mousemove' &&
		                        e.DOMType !== 'touchmove'
		                    )
		                ) {
		                    setTimeout(function () {
		                        navigator.onMouseUp(e);
		                    });
		                }
		            });
		        }

		        // Add data events
		        navigator.addBaseSeriesEvents();
		        // Add redraw events
		        navigator.addChartEvents();
		    },

		    /**
		     * Get the union data extremes of the chart - the outer data extremes of the
		     * base X axis and the navigator axis.
		     *
		     * @function Highcharts.Navigator#getUnionExtremes
		     *
		     * @param  {boolean} returnFalseOnNoBaseSeries
		     *         as the param says.
		     *
		     * @return {*}
		     */
		    getUnionExtremes: function (returnFalseOnNoBaseSeries) {
		        var baseAxis = this.chart.xAxis[0],
		            navAxis = this.xAxis,
		            navAxisOptions = navAxis.options,
		            baseAxisOptions = baseAxis.options,
		            ret;

		        if (!returnFalseOnNoBaseSeries || baseAxis.dataMin !== null) {
		            ret = {
		                dataMin: pick( // #4053
		                    navAxisOptions && navAxisOptions.min,
		                    numExt(
		                        'min',
		                        baseAxisOptions.min,
		                        baseAxis.dataMin,
		                        navAxis.dataMin,
		                        navAxis.min
		                    )
		                ),
		                dataMax: pick(
		                    navAxisOptions && navAxisOptions.max,
		                    numExt(
		                        'max',
		                        baseAxisOptions.max,
		                        baseAxis.dataMax,
		                        navAxis.dataMax,
		                        navAxis.max
		                    )
		                )
		            };
		        }
		        return ret;
		    },

		    /**
		     * Set the base series and update the navigator series from this. With a bit
		     * of modification we should be able to make this an API method to be called
		     * from the outside
		     *
		     * @function Highcharts.Navigator#setBaseSeries
		     *
		     * @param  {*} baseSeriesOptions
		     *         Additional series options for a navigator
		     *
		     * @param  {boolean} [redraw]
		     *         Whether to redraw after update.
		     *
		     * @return {void}
		     */
		    setBaseSeries: function (baseSeriesOptions, redraw) {
		        var chart = this.chart,
		            baseSeries = this.baseSeries = [];

		        baseSeriesOptions = (
		            baseSeriesOptions ||
		            chart.options && chart.options.navigator.baseSeries ||
		            0
		        );

		        // Iterate through series and add the ones that should be shown in
		        // navigator.
		        each(chart.series || [], function (series, i) {
		            if (
		                // Don't include existing nav series
		                !series.options.isInternal &&
		                (
		                    series.options.showInNavigator ||
		                    (
		                        i === baseSeriesOptions ||
		                        series.options.id === baseSeriesOptions
		                    ) &&
		                    series.options.showInNavigator !== false
		                )
		            ) {
		                baseSeries.push(series);
		            }
		        });

		        // When run after render, this.xAxis already exists
		        if (this.xAxis && !this.xAxis.fake) {
		            this.updateNavigatorSeries(true, redraw);
		        }
		    },

		    /**
		     * Update series in the navigator from baseSeries, adding new if does not
		     * exist.
		     *
		     * @function Highcharts.Navigator.updateNavigatorSeries
		     *
		     * @param  {boolean} addEvents
		     *
		     * @param  {boolean} redraw
		     *
		     * @return {void}
		     */
		    updateNavigatorSeries: function (addEvents, redraw) {
		        var navigator = this,
		            chart = navigator.chart,
		            baseSeries = navigator.baseSeries,
		            baseOptions,
		            mergedNavSeriesOptions,
		            chartNavigatorSeriesOptions = navigator.navigatorOptions.series,
		            baseNavigatorOptions,
		            navSeriesMixin = {
		                enableMouseTracking: false,
		                index: null, // #6162
		                linkedTo: null, // #6734
		                group: 'nav', // for columns
		                padXAxis: false,
		                xAxis: 'navigator-x-axis',
		                yAxis: 'navigator-y-axis',
		                showInLegend: false,
		                stacking: false, // #4823
		                isInternal: true
		            },
		            // Remove navigator series that are no longer in the baseSeries
		            navigatorSeries = navigator.series = H.grep(
		                navigator.series || [], function (navSeries) {
		                    var base = navSeries.baseSeries;
		                    if (H.inArray(base, baseSeries) < 0) { // Not in array
		                        // If there is still a base series connected to this
		                        // series, remove event handler and reference.
		                        if (base) {
		                            removeEvent(
		                                base,
		                                'updatedData',
		                                navigator.updatedDataHandler
		                            );
		                            delete base.navigatorSeries;
		                        }
		                        // Kill the nav series. It may already have been
		                        // destroyed (#8715).
		                        if (navSeries.chart) {
		                            navSeries.destroy();
		                        }
		                        return false;
		                    }
		                    return true;
		                }
		            );

		        // Go through each base series and merge the options to create new
		        // series
		        if (baseSeries && baseSeries.length) {
		            each(baseSeries, function eachBaseSeries(base) {
		                var linkedNavSeries = base.navigatorSeries,
		                    userNavOptions = extend(
		                        // Grab color and visibility from base as default
		                        {
		                            color: base.color,
		                            visible: base.visible
		                        },
		                        !isArray(chartNavigatorSeriesOptions) ?
		                            chartNavigatorSeriesOptions :
		                            defaultOptions.navigator.series
		                    );

		                // Don't update if the series exists in nav and we have disabled
		                // adaptToUpdatedData.
		                if (
		                    linkedNavSeries &&
		                    navigator.navigatorOptions.adaptToUpdatedData === false
		                ) {
		                    return;
		                }

		                navSeriesMixin.name = 'Navigator ' + baseSeries.length;

		                baseOptions = base.options || {};
		                baseNavigatorOptions = baseOptions.navigatorOptions || {};
		                mergedNavSeriesOptions = merge(
		                    baseOptions,
		                    navSeriesMixin,
		                    userNavOptions,
		                    baseNavigatorOptions
		                );

		                // Merge data separately. Do a slice to avoid mutating the
		                // navigator options from base series (#4923).
		                var navigatorSeriesData =
		                    baseNavigatorOptions.data || userNavOptions.data;
		                navigator.hasNavigatorData =
		                    navigator.hasNavigatorData || !!navigatorSeriesData;
		                mergedNavSeriesOptions.data =
		                    navigatorSeriesData ||
		                    baseOptions.data && baseOptions.data.slice(0);

		                // Update or add the series
		                if (linkedNavSeries && linkedNavSeries.options) {
		                    linkedNavSeries.update(mergedNavSeriesOptions, redraw);
		                } else {
		                    base.navigatorSeries = chart.initSeries(
		                        mergedNavSeriesOptions
		                    );
		                    base.navigatorSeries.baseSeries = base; // Store ref
		                    navigatorSeries.push(base.navigatorSeries);
		                }
		            });
		        }

		        // If user has defined data (and no base series) or explicitly defined
		        // navigator.series as an array, we create these series on top of any
		        // base series.
		        if (
		            chartNavigatorSeriesOptions.data &&
		            !(baseSeries && baseSeries.length) ||
		            isArray(chartNavigatorSeriesOptions)
		        ) {
		            navigator.hasNavigatorData = false;
		            // Allow navigator.series to be an array
		            chartNavigatorSeriesOptions = H.splat(chartNavigatorSeriesOptions);
		            each(chartNavigatorSeriesOptions, function (userSeriesOptions, i) {
		                navSeriesMixin.name =
		                    'Navigator ' + (navigatorSeries.length + 1);
		                mergedNavSeriesOptions = merge(
		                    defaultOptions.navigator.series,
		                    {
		                        // Since we don't have a base series to pull color from,
		                        // try to fake it by using color from series with same
		                        // index. Otherwise pull from the colors array. We need
		                        // an explicit color as otherwise updates will increment
		                        // color counter and we'll get a new color for each
		                        // update of the nav series.
		                        color: chart.series[i] &&
		                            !chart.series[i].options.isInternal &&
		                            chart.series[i].color ||
		                            chart.options.colors[i] ||
		                            chart.options.colors[0]
		                    },
		                    navSeriesMixin,
		                    userSeriesOptions
		                );
		                mergedNavSeriesOptions.data = userSeriesOptions.data;
		                if (mergedNavSeriesOptions.data) {
		                    navigator.hasNavigatorData = true;
		                    navigatorSeries.push(
		                        chart.initSeries(mergedNavSeriesOptions)
		                    );
		                }
		            });
		        }

		        if (addEvents) {
		            this.addBaseSeriesEvents();
		        }
		    },

		    /**
		     * Add data events.
		     * For example when main series is updated we need to recalculate extremes
		     *
		     * @function Highcharts.Navigator#addBaseSeriesEvent
		     *
		     * @return {void}
		     */
		    addBaseSeriesEvents: function () {
		        var navigator = this,
		            baseSeries = navigator.baseSeries || [];

		        // Bind modified extremes event to first base's xAxis only.
		        // In event of > 1 base-xAxes, the navigator will ignore those.
		        // Adding this multiple times to the same axis is no problem, as
		        // duplicates should be discarded by the browser.
		        if (baseSeries[0] && baseSeries[0].xAxis) {
		            addEvent(
		                baseSeries[0].xAxis,
		                'foundExtremes',
		                this.modifyBaseAxisExtremes
		            );
		        }

		        each(baseSeries, function (base) {
		            // Link base series show/hide to navigator series visibility
		            addEvent(base, 'show', function () {
		                if (this.navigatorSeries) {
		                    this.navigatorSeries.setVisible(true, false);
		                }
		            });
		            addEvent(base, 'hide', function () {
		                if (this.navigatorSeries) {
		                    this.navigatorSeries.setVisible(false, false);
		                }
		            });

		            // Respond to updated data in the base series, unless explicitily
		            // not adapting to data changes.
		            if (this.navigatorOptions.adaptToUpdatedData !== false) {
		                if (base.xAxis) {
		                    addEvent(base, 'updatedData', this.updatedDataHandler);
		                }
		            }

		            // Handle series removal
		            addEvent(base, 'remove', function () {
		                if (this.navigatorSeries) {
		                    erase(navigator.series, this.navigatorSeries);
		                    if (defined(this.navigatorSeries.options)) {
		                        this.navigatorSeries.remove(false);
		                    }
		                    delete this.navigatorSeries;
		                }
		            });
		        }, this);
		    },

		    /**
		     * Set the navigator x axis extremes to reflect the total. The navigator
		     * extremes should always be the extremes of the union of all series in the
		     * chart as well as the navigator series.
		     *
		     * @function Highcharts.Navigator#modifyNavigatorAxisExtremes
		     *
		     * @return {void}
		     */
		    modifyNavigatorAxisExtremes: function () {
		        var xAxis = this.xAxis,
		            unionExtremes;

		        if (xAxis.getExtremes) {
		            unionExtremes = this.getUnionExtremes(true);
		            if (
		                unionExtremes &&
		                (
		                    unionExtremes.dataMin !== xAxis.min ||
		                    unionExtremes.dataMax !== xAxis.max
		                )
		            ) {
		                xAxis.min = unionExtremes.dataMin;
		                xAxis.max = unionExtremes.dataMax;
		            }
		        }
		    },

		    /**
		     * Hook to modify the base axis extremes with information from the Navigator
		     *
		     * @function Highcharts.Navigator#modifyBaseAxisExtremes
		     *
		     * @return {void}
		     */
		    modifyBaseAxisExtremes: function () {
		        var baseXAxis = this,
		            navigator = baseXAxis.chart.navigator,
		            baseExtremes = baseXAxis.getExtremes(),
		            baseMin = baseExtremes.min,
		            baseMax = baseExtremes.max,
		            baseDataMin = baseExtremes.dataMin,
		            baseDataMax = baseExtremes.dataMax,
		            range = baseMax - baseMin,
		            stickToMin = navigator.stickToMin,
		            stickToMax = navigator.stickToMax,
		            overscroll = pick(baseXAxis.options.overscroll, 0),
		            newMax,
		            newMin,
		            navigatorSeries = navigator.series && navigator.series[0],
		            hasSetExtremes = !!baseXAxis.setExtremes,

		            // When the extremes have been set by range selector button, don't
		            // stick to min or max. The range selector buttons will handle the
		            // extremes. (#5489)
		            unmutable = baseXAxis.eventArgs &&
		                baseXAxis.eventArgs.trigger === 'rangeSelectorButton';

		        if (!unmutable) {

		            // If the zoomed range is already at the min, move it to the right
		            // as new data comes in
		            if (stickToMin) {
		                newMin = baseDataMin;
		                newMax = newMin + range;
		            }

		            // If the zoomed range is already at the max, move it to the right
		            // as new data comes in
		            if (stickToMax) {
		                newMax = baseDataMax + overscroll;

		                // if stickToMin is true, the new min value is set above
		                if (!stickToMin) {
		                    newMin = Math.max(
		                        newMax - range,
		                        navigatorSeries && navigatorSeries.xData ?
		                            navigatorSeries.xData[0] : -Number.MAX_VALUE
		                    );
		                }
		            }

		            // Update the extremes
		            if (hasSetExtremes && (stickToMin || stickToMax)) {
		                if (isNumber(newMin)) {
		                    baseXAxis.min = baseXAxis.userMin = newMin;
		                    baseXAxis.max = baseXAxis.userMax = newMax;
		                }
		            }
		        }

		        // Reset
		        navigator.stickToMin = navigator.stickToMax = null;
		    },

		    /**
		     * Handler for updated data on the base series. When data is modified, the
		     * navigator series must reflect it. This is called from the Chart.redraw
		     * function before axis and series extremes are computed.
		     *
		     * @function Highcharts.Navigator#updateDataHandler
		     *
		     * @return {void}
		     */
		    updatedDataHandler: function () {
		        var navigator = this.chart.navigator,
		            baseSeries = this,
		            navigatorSeries = this.navigatorSeries;

		        // If the scrollbar is scrolled all the way to the right, keep right as
		        // new data  comes in.
		        navigator.stickToMax = navigator.reversedExtremes ?
		            Math.round(navigator.zoomedMin) === 0 :
		            Math.round(navigator.zoomedMax) >= Math.round(navigator.size);

		        // Detect whether the zoomed area should stick to the minimum or
		        // maximum. If the current axis minimum falls outside the new updated
		        // dataset, we must adjust.
		        navigator.stickToMin = isNumber(baseSeries.xAxis.min) &&
		            (baseSeries.xAxis.min <= baseSeries.xData[0]) &&
		            (!this.chart.fixedRange || !navigator.stickToMax);

		        // Set the navigator series data to the new data of the base series
		        if (navigatorSeries && !navigator.hasNavigatorData) {
		            navigatorSeries.options.pointStart = baseSeries.xData[0];
		            navigatorSeries.setData(
		                baseSeries.options.data,
		                false,
		                null,
		                false
		            ); // #5414
		        }
		    },

		    /**
		     * Add chart events, like redrawing navigator, when chart requires that.
		     *
		     * @function Highcharts.Navigator#addChartEvents
		     *
		     * @return {void}
		     */
		    addChartEvents: function () {
		        if (!this.eventsToUnbind) {
		            this.eventsToUnbind = [];
		        }

		        this.eventsToUnbind.push(
		            // Move the scrollbar after redraw, like after data updata even if
		            // axes don't redraw
		            addEvent(
		                this.chart,
		                'redraw',
		                function () {
		                    var navigator = this.navigator,
		                        xAxis = navigator && (
		                            navigator.baseSeries &&
		                            navigator.baseSeries[0] &&
		                            navigator.baseSeries[0].xAxis ||
		                            navigator.scrollbar && this.xAxis[0]
		                        ); // #5709

		                    if (xAxis) {
		                        navigator.render(xAxis.min, xAxis.max);
		                    }
		                }
		            ),
		            // Make room for the navigator, can be placed around the chart:
		            addEvent(
		                this.chart,
		                'getMargins',
		                function () {
		                    var chart = this,
		                        navigator = chart.navigator,
		                        marginName = navigator.opposite ?
		                            'plotTop' : 'marginBottom';
		                    if (chart.inverted) {
		                        marginName = navigator.opposite ?
		                            'marginRight' : 'plotLeft';
		                    }

		                    chart[marginName] = (chart[marginName] || 0) + (
		                        navigator.navigatorEnabled || !chart.inverted ?
		                            navigator.outlineHeight :
		                            0
		                    ) + navigator.navigatorOptions.margin;
		                }
		            )
		        );
		    },

		    /**
		     * Destroys allocated elements.
		     *
		     * @function Highcharts.Navigator#destroy
		     *
		     * @return {void}
		     */
		    destroy: function () {

		        // Disconnect events added in addEvents
		        this.removeEvents();

		        if (this.xAxis) {
		            erase(this.chart.xAxis, this.xAxis);
		            erase(this.chart.axes, this.xAxis);
		        }
		        if (this.yAxis) {
		            erase(this.chart.yAxis, this.yAxis);
		            erase(this.chart.axes, this.yAxis);
		        }
		        // Destroy series
		        each(this.series || [], function (s) {
		            if (s.destroy) {
		                s.destroy();
		            }
		        });

		        // Destroy properties
		        each([
		            'series', 'xAxis', 'yAxis', 'shades', 'outline', 'scrollbarTrack',
		            'scrollbarRifles', 'scrollbarGroup', 'scrollbar', 'navigatorGroup',
		            'rendered'
		        ], function (prop) {
		            if (this[prop] && this[prop].destroy) {
		                this[prop].destroy();
		            }
		            this[prop] = null;
		        }, this);

		        // Destroy elements in collection
		        each([this.handles], function (coll) {
		            destroyObjectProperties(coll);
		        }, this);
		    }
		};

		H.Navigator = Navigator;

		/**
		 * For Stock charts, override selection zooming with some special features
		 * because X axis zooming is already allowed by the Navigator and Range
		 * selector.
		 */
		wrap(Axis.prototype, 'zoom', function (proceed, newMin, newMax) {
		    var chart = this.chart,
		        chartOptions = chart.options,
		        zoomType = chartOptions.chart.zoomType,
		        pinchType = chartOptions.chart.pinchType,
		        previousZoom,
		        navigator = chartOptions.navigator,
		        rangeSelector = chartOptions.rangeSelector,
		        ret;

		    if (this.isXAxis && ((navigator && navigator.enabled) ||
		            (rangeSelector && rangeSelector.enabled))) {
		        // For x only zooming, fool the chart.zoom method not to create the zoom
		        // button because the property already exists
		        if (
		            (!isTouchDevice && zoomType === 'x') ||
		            (isTouchDevice && pinchType === 'x')
		        ) {
		            chart.resetZoomButton = 'blocked';

		        // For y only zooming, ignore the X axis completely
		        } else if (zoomType === 'y') {
		            ret = false;

		        // For xy zooming, record the state of the zoom before zoom selection,
		        // then when the reset button is pressed, revert to this state. This
		        // should apply only if the chart is initialized with a range (#6612),
		        // otherwise zoom all the way out.
		        } else if (
		            (
		                (!isTouchDevice && zoomType === 'xy') ||
		                (isTouchDevice && pinchType === 'xy')
		            ) &&
		            this.options.range
		        ) {

		            previousZoom = this.previousZoom;
		            if (defined(newMin)) {
		                this.previousZoom = [this.min, this.max];
		            } else if (previousZoom) {
		                newMin = previousZoom[0];
		                newMax = previousZoom[1];
		                delete this.previousZoom;
		            }
		        }

		    }
		    return ret !== undefined ? ret : proceed.call(this, newMin, newMax);
		});

		// Initialize navigator for stock charts
		addEvent(Chart, 'beforeRender', function () {
		    var options = this.options;
		    if (options.navigator.enabled || options.scrollbar.enabled) {
		        this.scroller = this.navigator = new Navigator(this);
		    }
		});

		/**
		 * For stock charts, extend the Chart.setChartSize method so that we can set the
		 * final top position of the navigator once the height of the chart, including
		 * the legend, is determined. #367. We can't use Chart.getMargins, because
		 * labels offsets are not calculated yet.
		 */
		addEvent(Chart, 'afterSetChartSize', function () {

		    var legend = this.legend,
		        navigator = this.navigator,
		        scrollbarHeight,
		        legendOptions,
		        xAxis,
		        yAxis;

		    if (navigator) {
		        legendOptions = legend && legend.options;
		        xAxis = navigator.xAxis;
		        yAxis = navigator.yAxis;
		        scrollbarHeight = navigator.scrollbarHeight;

		        // Compute the top position
		        if (this.inverted) {
		            navigator.left = navigator.opposite ?
		                this.chartWidth - scrollbarHeight - navigator.height :
		                this.spacing[3] + scrollbarHeight;
		            navigator.top = this.plotTop + scrollbarHeight;
		        } else {
		            navigator.left = this.plotLeft + scrollbarHeight;
		            navigator.top = navigator.navigatorOptions.top ||
		                this.chartHeight -
		                navigator.height -
		                scrollbarHeight -
		                this.spacing[2] -
		                (
		                    this.rangeSelector && this.extraBottomMargin ?
		                        this.rangeSelector.getHeight() :
		                        0
		                ) -
		                (
		                    (
		                        legendOptions &&
		                        legendOptions.verticalAlign === 'bottom' &&
		                        legendOptions.enabled &&
		                        !legendOptions.floating
		                    ) ?
		                        legend.legendHeight + pick(legendOptions.margin, 10) :
		                        0
		                );
		        }

		        if (xAxis && yAxis) { // false if navigator is disabled (#904)

		            if (this.inverted) {
		                xAxis.options.left = yAxis.options.left = navigator.left;
		            } else {
		                xAxis.options.top = yAxis.options.top = navigator.top;
		            }

		            xAxis.setAxisSize();
		            yAxis.setAxisSize();
		        }
		    }
		});

		// Merge options, if no scrolling exists yet
		addEvent(Chart, 'update', function (e) {

		    var navigatorOptions = (e.options.navigator || {}),
		        scrollbarOptions = (e.options.scrollbar || {});

		    if (!this.navigator && !this.scroller &&
		        (navigatorOptions.enabled || scrollbarOptions.enabled)
		    ) {
		        merge(true, this.options.navigator, navigatorOptions);
		        merge(true, this.options.scrollbar, scrollbarOptions);
		        delete e.options.navigator;
		        delete e.options.scrollbar;
		    }

		});

		// Initiate navigator, if no scrolling exists yet
		addEvent(Chart, 'afterUpdate', function () {

		    if (!this.navigator && !this.scroller &&
		        (this.options.navigator.enabled || this.options.scrollbar.enabled)
		    ) {
		        this.scroller = this.navigator = new Navigator(this);
		    }

		});

		// Pick up badly formatted point options to addPoint
		wrap(Series.prototype, 'addPoint', function (
		    proceed,
		    options,
		    redraw,
		    shift,
		    animation
		) {
		    var turboThreshold = this.options.turboThreshold;
		    if (
		        turboThreshold &&
		        this.xData.length > turboThreshold &&
		        isObject(options, true) &&
		        this.chart.navigator
		    ) {
		        error(20, true);
		    }
		    proceed.call(this, options, redraw, shift, animation);
		});

		// Handle adding new series
		addEvent(Chart, 'afterAddSeries', function () {
		    if (this.navigator) {
		        // Recompute which series should be shown in navigator, and add them
		        this.navigator.setBaseSeries(null, false);
		    }
		});

		// Handle updating series
		addEvent(Series, 'afterUpdate', function () {
		    if (this.chart.navigator && !this.options.isInternal) {
		        this.chart.navigator.setBaseSeries(null, false);
		    }
		});

		Chart.prototype.callbacks.push(function (chart) {
		    var extremes,
		        navigator = chart.navigator;

		    // Initiate the navigator
		    if (navigator && chart.xAxis[0]) {
		        extremes = chart.xAxis[0].getExtremes();
		        navigator.render(extremes.min, extremes.max);
		    }
		});


	}(Highcharts));
	(function (H) {
		/**
		 * (c) 2010-2017 Torstein Honsi
		 *
		 * License: www.highcharts.com/license
		 */
		var addEvent = H.addEvent,
		    Axis = H.Axis,
		    Chart = H.Chart,
		    css = H.css,
		    createElement = H.createElement,
		    defaultOptions = H.defaultOptions,
		    defined = H.defined,
		    destroyObjectProperties = H.destroyObjectProperties,
		    discardElement = H.discardElement,
		    each = H.each,
		    extend = H.extend,
		    fireEvent = H.fireEvent,
		    isNumber = H.isNumber,
		    merge = H.merge,
		    pick = H.pick,
		    pInt = H.pInt,
		    splat = H.splat,
		    wrap = H.wrap;

		/* ****************************************************************************
		 * Start Range Selector code                                                  *
		 *****************************************************************************/
		extend(defaultOptions, {

		    /**
		     * The range selector is a tool for selecting ranges to display within
		     * the chart. It provides buttons to select preconfigured ranges in
		     * the chart, like 1 day, 1 week, 1 month etc. It also provides input
		     * boxes where min and max dates can be manually input.
		     *
		     * @product highstock
		     * @optionparent rangeSelector
		     */
		    rangeSelector: {

		        /**
		         * Whether to enable all buttons from the start. By default buttons are
		         * only enabled if the corresponding time range exists on the X axis,
		         * but enabling all buttons allows for dynamically loading different
		         * time ranges.
		         *
		         * @sample {highstock} stock/rangeselector/allbuttonsenabled-true/
		         *         All buttons enabled
		         *
		         * @type       {boolean}
		         * @default    false
		         * @since      2.0.3
		         * @product    highstock
		         * @apioption  rangeSelector.allButtonsEnabled
		         */

		        /**
		         * An array of configuration objects for the buttons.
		         *
		         * Defaults to
		         *
		         * <pre>buttons: [{
		         *     type: 'month',
		         *     count: 1,
		         *     text: '1m'
		         * }, {
		         *     type: 'month',
		         *     count: 3,
		         *     text: '3m'
		         * }, {
		         *     type: 'month',
		         *     count: 6,
		         *     text: '6m'
		         * }, {
		         *     type: 'ytd',
		         *     text: 'YTD'
		         * }, {
		         *     type: 'year',
		         *     count: 1,
		         *     text: '1y'
		         * }, {
		         *     type: 'all',
		         *     text: 'All'
		         * }]</pre>
		         *
		         * @sample {highstock} stock/rangeselector/datagrouping/
		         *         Data grouping by buttons
		         *
		         * @type       {Array<*>}
		         * @product    highstock
		         * @apioption  rangeSelector.buttons
		         */

		        /**
		         * How many units of the defined type the button should span. If `type`
		         * is "month" and `count` is 3, the button spans three months.
		         *
		         * @type       {number}
		         * @default    1
		         * @product    highstock
		         * @apioption  rangeSelector.buttons.count
		         */

		        /**
		         * Fires when clicking on the rangeSelector button. One parameter,
		         * event, is passed to the function, containing common event
		         * information.
		         *
		         * <pre>
		         * click: function(e) {
		         *   console.log(this);
		         * }
		         * </pre>
		         *
		         * Return false to stop default button's click action.
		         *
		         * @sample {highstock} stock/rangeselector/button-click/
		         *         Click event on the button
		         *
		         * @type       {Function}
		         * @product    highstock
		         * @apioption  rangeSelector.buttons.events.click
		         */

		        /**
		         * Additional range (in milliseconds) added to the end of the calculated
		         * time span.
		         *
		         * @sample {highstock} stock/rangeselector/min-max-offsets/
		         *         Button offsets
		         *
		         * @type       {number}
		         * @default    0
		         * @since      6.0.0
		         * @product    highstock
		         * @apioption  rangeSelector.buttons.offsetMax
		         */

		        /**
		         * Additional range (in milliseconds) added to the start of the
		         * calculated time span.
		         *
		         * @sample {highstock} stock/rangeselector/min-max-offsets/
		         *         Button offsets
		         *
		         * @type       {number}
		         * @default    0
		         * @since      6.0.0
		         * @product    highstock
		         * @apioption  rangeSelector.buttons.offsetMin
		         */

		        /**
		         * When buttons apply dataGrouping on a series, by default zooming
		         * in/out will deselect buttons and unset dataGrouping. Enable this
		         * option to keep buttons selected when extremes change.
		         *
		         * @sample {highstock} stock/rangeselector/preserve-datagrouping/
		         *         Different preserveDataGrouping settings
		         *
		         * @type       {boolean}
		         * @since      6.1.2
		         * @default    false
		         * @product    highstock
		         * @apioption  rangeSelector.buttons.preserveDataGrouping
		         */

		        /**
		         * A custom data grouping object for each button.
		         *
		         * @see [series.dataGrouping](#plotOptions.series.dataGrouping)
		         *
		         * @sample {highstock} stock/rangeselector/datagrouping/
		         *         Data grouping by range selector buttons
		         *
		         * @type       {*}
		         * @extends    plotOptions.series.dataGrouping
		         * @product    highstock
		         * @apioption  rangeSelector.buttons.dataGrouping
		         */

		        /**
		         * The text for the button itself.
		         *
		         * @type       {string}
		         * @product    highstock
		         * @apioption  rangeSelector.buttons.text
		         */

		        /**
		         * Defined the time span for the button. Can be one of `millisecond`,
		         * `second`, `minute`, `hour`, `day`, `week`, `month`, `ytd`, `all`.
		         *
		         * @type       {string}
		         * @product    highstock
		         * @validvalue ["millisecond", "second", "minute", "day", "week", "month", "ytd", "all"]
		         * @apioption  rangeSelector.buttons.type
		         */

		        /**
		         * The space in pixels between the buttons in the range selector.
		         *
		         * @type       {number}
		         * @default    0
		         * @product    highstock
		         * @apioption  rangeSelector.buttonSpacing
		         */

		        /**
		         * Enable or disable the range selector.
		         *
		         * @sample {highstock} stock/rangeselector/enabled/
		         *         Disable the range selector
		         *
		         * @type       {boolean}
		         * @default    true
		         * @product    highstock
		         * @apioption  rangeSelector.enabled
		         */

		        /**
		         * The vertical alignment of the rangeselector box. Allowed properties
		         * are `top`, `middle`, `bottom`.
		         *
		         * @sample {highstock} stock/rangeselector/vertical-align-middle/
		         *         Middle
		         * @sample {highstock} stock/rangeselector/vertical-align-bottom/
		         *         Bottom
		         *
		         * @type       {string}
		         * @default    top
		         * @since      6.0.0
		         * @validvalue ["top", "middle", "bottom"]
		         * @apioption  rangeSelector.verticalAlign
		         */
		        verticalAlign: 'top',

		        /**
		         * A collection of attributes for the buttons. The object takes SVG
		         * attributes like `fill`, `stroke`, `stroke-width`, as well as `style`,
		         * a collection of CSS properties for the text.
		         *
		         * The object can also be extended with states, so you can set
		         * presentational options for `hover`, `select` or `disabled` button
		         * states.
		         *
		         * CSS styles for the text label.
		         *
		         * In styled mode, the buttons are styled by the
		         * `.highcharts-range-selector-buttons .highcharts-button` rule with its
		         * different states.
		         *
		         * @sample {highstock} stock/rangeselector/styling/
		         *         Styling the buttons and inputs
		         *
		         * @type       {Highcharts.CSSObject}
		         * @product    highstock
		         * @apioption  rangeSelector.buttonTheme
		         */
		        buttonTheme: {
            
		            'stroke-width': 0,
            
		            width: 28,
		            height: 18,
		            padding: 2,
		            zIndex: 7 // #484, #852
		        },

		        /**
		         * When the rangeselector is floating, the plot area does not reserve
		         * space for it. This opens for positioning anywhere on the chart.
		         *
		         * @sample {highstock} stock/rangeselector/floating/
		         *         Placing the range selector between the plot area and the
		         *         navigator
		         *
		         * @type       {boolean}
		         * @default    false
		         * @since      6.0.0
		         * @product    highstock
		         * @apioption  rangeSelector.floating
		         */
		        floating: false,

		        /**
		         * The x offset of the range selector relative to its horizontal
		         * alignment within `chart.spacingLeft` and `chart.spacingRight`.
		         *
		         * @type       {number}
		         * @default    0
		         * @since      6.0.0
		         * @product    highstock
		         * @apioption  rangeSelector.x
		         */
		        x: 0,

		        /**
		         * The y offset of the range selector relative to its horizontal
		         * alignment within `chart.spacingLeft` and `chart.spacingRight`.
		         *
		         * @type       {number}
		         * @default    0
		         * @since      6.0.0
		         * @product    highstock
		         * @apioption  rangeSelector.y
		         */
		        y: 0,

		        /**
		         * Deprecated. The height of the range selector. Currently it is
		         * calculated dynamically.
		         *
		         * @deprecated
		         * @type       {number}
		         * @default    undefined
		         * @since      2.1.9
		         * @product    highstock
		         * @apioption  rangeSelector.height
		         */
		        height: undefined, // reserved space for buttons and input

		        /**
		         * The border color of the date input boxes.
		         *
		         * @sample {highstock} stock/rangeselector/styling/
		         *         Styling the buttons and inputs
		         *
		         * @type       {Highcharts.ColorString}
		         * @default    #cccccc
		         * @since      1.3.7
		         * @product    highstock
		         * @apioption  rangeSelector.inputBoxBorderColor
		         */

		        /**
		         * The pixel height of the date input boxes.
		         *
		         * @sample {highstock} stock/rangeselector/styling/
		         *         Styling the buttons and inputs
		         *
		         * @type       {number}
		         * @default    17
		         * @since      1.3.7
		         * @product    highstock
		         * @apioption  rangeSelector.inputBoxHeight
		         */

		        /**
		         * CSS for the container DIV holding the input boxes. Deprecated as
		         * of 1.2.5\. Use [inputPosition](#rangeSelector.inputPosition) instead.
		         *
		         * @sample {highstock} stock/rangeselector/styling/
		         *         Styling the buttons and inputs
		         *
		         * @deprecated
		         * @type       {Highcharts.CSSObject}
		         * @product    highstock
		         * @apioption  rangeSelector.inputBoxStyle
		         */

		        /**
		         * The pixel width of the date input boxes.
		         *
		         * @sample {highstock} stock/rangeselector/styling/
		         *         Styling the buttons and inputs
		         *
		         * @type       {number}
		         * @default    90
		         * @since      1.3.7
		         * @product    highstock
		         * @apioption  rangeSelector.inputBoxWidth
		         */

		        /**
		         * The date format in the input boxes when not selected for editing.
		         * Defaults to `%b %e, %Y`.
		         *
		         * @sample {highstock} stock/rangeselector/input-format/
		         *         Milliseconds in the range selector
		         *
		         * @type       {string}
		         * @default    %b %e %Y,
		         * @product    highstock
		         * @apioption  rangeSelector.inputDateFormat
		         */

		        /**
		         * A custom callback function to parse values entered in the input boxes
		         * and return a valid JavaScript time as milliseconds since 1970.
		         *
		         * @sample {highstock} stock/rangeselector/input-format/
		         *         Milliseconds in the range selector
		         *
		         * @type       {Function}
		         * @since      1.3.3
		         * @product    highstock
		         * @apioption  rangeSelector.inputDateParser
		         */

		        /**
		         * The date format in the input boxes when they are selected for
		         * editing. This must be a format that is recognized by JavaScript
		         * Date.parse.
		         *
		         * @sample {highstock} stock/rangeselector/input-format/
		         *         Milliseconds in the range selector
		         *
		         * @type       {string}
		         * @default    %Y-%m-%d
		         * @product    highstock
		         * @apioption  rangeSelector.inputEditDateFormat
		         */

		        /**
		         * Enable or disable the date input boxes. Defaults to enabled when
		         * there is enough space, disabled if not (typically mobile).
		         *
		         * @sample {highstock} stock/rangeselector/input-datepicker/
		         *         Extending the input with a jQuery UI datepicker
		         *
		         * @type       {boolean}
		         * @default    true
		         * @product    highstock
		         * @apioption  rangeSelector.inputEnabled
		         */

		        /**
		         * Positioning for the input boxes. Allowed properties are `align`,
		         *  `x` and `y`.
		         *
		         * @type       {*}
		         * @since      1.2.4
		         * @product    highstock
		         * @apioption  rangeSelector.inputPosition
		         */
		        inputPosition: {
		            /**
		             * The alignment of the input box. Allowed properties are `left`,
		             * `center`, `right`.
		             *
		             * @sample {highstock} stock/rangeselector/input-button-position/
		             *         Alignment
		             *
		             * @type       {string}
		             * @default    right
		             * @since      6.0.0
		             * @validvalue ["left", "center", "right"]
		             * @apioption  rangeSelector.inputPosition.align
		             */
		            align: 'right',

		            /**
		             * X offset of the input row.
		             *
		             * @type       {number}
		             * @default    0
		             * @apioption  rangeSelector.inputPosition.x
		             */
		            x: 0,

		            /**
		             * Y offset of the input row.
		             *
		             * @type       {number}
		             * @default    0
		             * @apioption  rangeSelector.inputPosition.y
		             */
		            y: 0
		        },

		        /**
		         * The index of the button to appear pre-selected.
		         *
		         * @type       {number}
		         * @product    highstock
		         * @apioption  rangeSelector.selected
		         */

		        /**
		         * Positioning for the button row.
		         *
		         * @type       {*}
		         * @since      1.2.4
		         * @product    highstock
		         * @apioption  rangeSelector.buttonPosition
		         */
		        buttonPosition: {

		            /**
		             * The alignment of the input box. Allowed properties are `left`,
		             * `center`, `right`.
		             *
		             * @sample {highstock} stock/rangeselector/input-button-position/
		             *         Alignment
		             *
		             * @type       {string}
		             * @default    left
		             * @since      6.0.0
		             * @validvalue ["left", "center", "right"]
		             * @apioption  rangeSelector.buttonPosition.align
		             */
		            align: 'left',

		            /**
		             * X offset of the button row.
		             *
		             * @type       {number}
		             * @default    0
		             * @apioption  rangeSelector.buttonPosition.x
		             */
		            x: 0,

		            /**
		             * Y offset of the button row.
		             *
		             * @type       {number}
		             * @default    0
		             * @apioption  rangeSelector.buttonPosition.y
		             */
		            y: 0
		        },

        

		        /**
		         * CSS for the HTML inputs in the range selector.
		         *
		         * In styled mode, the inputs are styled by the
		         * `.highcharts-range-input text` rule in SVG mode, and
		         * `input.highcharts-range-selector` when active.
		         *
		         * @sample {highstock} stock/rangeselector/styling/
		         *         Styling the buttons and inputs
		         *
		         * @type       {Highcharts.CSSObject}
		         * @product    highstock
		         * @apioption  rangeSelector.inputStyle
		         */

		        /**
		         * CSS styles for the labels - the Zoom, From and To texts.
		         *
		         * In styled mode, the labels are styled by the
		         * `.highcharts-range-label` class.
		         *
		         * @sample {highstock} stock/rangeselector/styling/
		         *         Styling the buttons and inputs
		         *
		         * @type       {Highcharts.CSSObject}
		         * @product    highstock
		         * @apioption  rangeSelector.labelStyle
		         */
		        labelStyle: {
		            color: '#666666'
		        }
        
		    }
		});

		defaultOptions.lang = merge(
		    defaultOptions.lang,
		    /**
		     * Language object. The language object is global and it can't be set
		     * on each chart initiation. Instead, use `Highcharts.setOptions` to
		     * set it before any chart is initialized.
		     *
		     * <pre>Highcharts.setOptions({
		     *     lang: {
		     *         months: [
		     *             'Janvier', 'Février', 'Mars', 'Avril',
		     *             'Mai', 'Juin', 'Juillet', 'Août',
		     *             'Septembre', 'Octobre', 'Novembre', 'Décembre'
		     *         ],
		     *         weekdays: [
		     *             'Dimanche', 'Lundi', 'Mardi', 'Mercredi',
		     *             'Jeudi', 'Vendredi', 'Samedi'
		     *         ]
		     *     }
		     * });</pre>
		     *
		     * @optionparent lang
		     * @product highstock
		     */
		    {

		        /**
		         * The text for the label for the range selector buttons.
		         *
		         * @type       {string}
		         * @default    Zoom
		         * @product    highstock
		         * @apioption  lang.rangeSelectorZoom
		         */
		        rangeSelectorZoom: 'Zoom',

		        /**
		         * The text for the label for the "from" input box in the range
		         * selector.
		         *
		         * @type       {string}
		         * @default    From
		         * @product    highstock
		         * @apioption  lang.rangeSelectorFrom
		         */
		        rangeSelectorFrom: 'From',

		        /**
		         * The text for the label for the "to" input box in the range selector.
		         *
		         * @type       {string}
		         * @default    To
		         * @product    highstock
		         * @apioption  lang.rangeSelectorTo
		         */
		        rangeSelectorTo: 'To'
		    }
		);

		/**
		 * The range selector.
		 *
		 * @class Highcharts.RangeSelector
		 *
		 * @param {Highcharts.Chart} chart
		 */
		function RangeSelector(chart) {

		    // Run RangeSelector
		    this.init(chart);
		}

		RangeSelector.prototype = {
		    /**
		     * The method to run when one of the buttons in the range selectors is
		     * clicked
		     *
		     * @function Highcharts.RangeSelector#clickButton
		     *
		     * @param  {number} i
		     *         The index of the button
		     *
		     * @param  {boolean} redraw
		     *
		     * @return {void}
		     */
		    clickButton: function (i, redraw) {
		        var rangeSelector = this,
		            chart = rangeSelector.chart,
		            rangeOptions = rangeSelector.buttonOptions[i],
		            baseAxis = chart.xAxis[0],
		            unionExtremes = (
		                    chart.scroller && chart.scroller.getUnionExtremes()
		                ) || baseAxis || {},
		            dataMin = unionExtremes.dataMin,
		            dataMax = unionExtremes.dataMax,
		            newMin,
		            newMax = baseAxis && Math.round(
		                Math.min(baseAxis.max, pick(dataMax, baseAxis.max))
		            ), // #1568
		            type = rangeOptions.type,
		            baseXAxisOptions,
		            range = rangeOptions._range,
		            rangeMin,
		            minSetting,
		            rangeSetting,
		            ctx,
		            ytdExtremes,
		            dataGrouping = rangeOptions.dataGrouping;

		        // chart has no data, base series is removed
		        if (dataMin === null || dataMax === null) {
		            return;
		        }

		        // Set the fixed range before range is altered
		        chart.fixedRange = range;

		        // Apply dataGrouping associated to button
		        if (dataGrouping) {
		            this.forcedDataGrouping = true;
		            Axis.prototype.setDataGrouping.call(
		                baseAxis || { chart: this.chart },
		                dataGrouping,
		                false
		            );

		            this.frozenStates = rangeOptions.preserveDataGrouping;
		        }

		        // Apply range
		        if (type === 'month' || type === 'year') {
		            if (!baseAxis) {
		                // This is set to the user options and picked up later when the
		                // axis is instantiated so that we know the min and max.
		                range = rangeOptions;
		            } else {
		                ctx = {
		                    range: rangeOptions,
		                    max: newMax,
		                    chart: chart,
		                    dataMin: dataMin,
		                    dataMax: dataMax
		                };
		                newMin = baseAxis.minFromRange.call(ctx);
		                if (isNumber(ctx.newMax)) {
		                    newMax = ctx.newMax;
		                }
		            }

		        // Fixed times like minutes, hours, days
		        } else if (range) {
		            newMin = Math.max(newMax - range, dataMin);
		            newMax = Math.min(newMin + range, dataMax);

		        } else if (type === 'ytd') {

		            // On user clicks on the buttons, or a delayed action running from
		            // the beforeRender event (below), the baseAxis is defined.
		            if (baseAxis) {
		                // When "ytd" is the pre-selected button for the initial view,
		                // its calculation is delayed and rerun in the beforeRender
		                // event (below). When the series are initialized, but before
		                // the chart is rendered, we have access to the xData array
		                // (#942).
		                if (dataMax === undefined) {
		                    dataMin = Number.MAX_VALUE;
		                    dataMax = Number.MIN_VALUE;
		                    each(chart.series, function (series) {
		                        // reassign it to the last item
		                        var xData = series.xData;
		                        dataMin = Math.min(xData[0], dataMin);
		                        dataMax = Math.max(xData[xData.length - 1], dataMax);
		                    });
		                    redraw = false;
		                }
		                ytdExtremes = rangeSelector.getYTDExtremes(
		                    dataMax,
		                    dataMin,
		                    chart.time.useUTC
		                );
		                newMin = rangeMin = ytdExtremes.min;
		                newMax = ytdExtremes.max;

		            // "ytd" is pre-selected. We don't yet have access to processed
		            // point and extremes data (things like pointStart and pointInterval
		            // are missing), so we delay the process (#942)
		            } else {
		                addEvent(chart, 'beforeRender', function () {
		                    rangeSelector.clickButton(i);
		                });
		                return;
		            }
		        } else if (type === 'all' && baseAxis) {
		            newMin = dataMin;
		            newMax = dataMax;
		        }

		        newMin += rangeOptions._offsetMin;
		        newMax += rangeOptions._offsetMax;

		        rangeSelector.setSelected(i);

		        // Update the chart
		        if (!baseAxis) {
		            // Axis not yet instanciated. Temporarily set min and range
		            // options and remove them on chart load (#4317).
		            baseXAxisOptions = splat(chart.options.xAxis)[0];
		            rangeSetting = baseXAxisOptions.range;
		            baseXAxisOptions.range = range;
		            minSetting = baseXAxisOptions.min;
		            baseXAxisOptions.min = rangeMin;
		            addEvent(chart, 'load', function resetMinAndRange() {
		                baseXAxisOptions.range = rangeSetting;
		                baseXAxisOptions.min = minSetting;
		            });
		        } else {
		            // Existing axis object. Set extremes after render time.
		            baseAxis.setExtremes(
		                newMin,
		                newMax,
		                pick(redraw, 1),
		                null, // auto animation
		                {
		                    trigger: 'rangeSelectorButton',
		                    rangeSelectorButton: rangeOptions
		                }
		            );
		        }
		    },

		    /**
		     * Set the selected option. This method only sets the internal flag, it
		     * doesn't update the buttons or the actual zoomed range.
		     *
		     * @function Highcharts.RangeSelector#setSelected
		     *
		     * @param  {boolean} selected
		     *
		     * @return {void}
		     */
		    setSelected: function (selected) {
		        this.selected = this.options.selected = selected;
		    },

		    /**
		     * The default buttons for pre-selecting time frames
		     */
		    defaultButtons: [{
		        type: 'month',
		        count: 1,
		        text: '1m'
		    }, {
		        type: 'month',
		        count: 3,
		        text: '3m'
		    }, {
		        type: 'month',
		        count: 6,
		        text: '6m'
		    }, {
		        type: 'ytd',
		        text: 'YTD'
		    }, {
		        type: 'year',
		        count: 1,
		        text: '1y'
		    }, {
		        type: 'all',
		        text: 'All'
		    }],

		    /**
		     * Initialize the range selector
		     *
		     * @function Highcharts.RangeSelector#init
		     *
		     * @param  {Highcharts.Chart} chart
		     *
		     * @return {void}
		     */
		    init: function (chart) {
		        var rangeSelector = this,
		            options = chart.options.rangeSelector,
		            buttonOptions = options.buttons ||
		                [].concat(rangeSelector.defaultButtons),
		            selectedOption = options.selected,
		            blurInputs = function () {
		                var minInput = rangeSelector.minInput,
		                    maxInput = rangeSelector.maxInput;

		                // #3274 in some case blur is not defined
		                if (minInput && minInput.blur) {
		                    fireEvent(minInput, 'blur');
		                }
		                if (maxInput && maxInput.blur) {
		                    fireEvent(maxInput, 'blur');
		                }
		            };

		        rangeSelector.chart = chart;
		        rangeSelector.options = options;
		        rangeSelector.buttons = [];

		        chart.extraTopMargin = options.height;
		        rangeSelector.buttonOptions = buttonOptions;

		        this.unMouseDown = addEvent(chart.container, 'mousedown', blurInputs);
		        this.unResize = addEvent(chart, 'resize', blurInputs);

		        // Extend the buttonOptions with actual range
		        each(buttonOptions, rangeSelector.computeButtonRange);

		        // zoomed range based on a pre-selected button index
		        if (selectedOption !== undefined && buttonOptions[selectedOption]) {
		            this.clickButton(selectedOption, false);
		        }


		        addEvent(chart, 'load', function () {
		            // If a data grouping is applied to the current button, release it
		            // when extremes change
		            if (chart.xAxis && chart.xAxis[0]) {
		                addEvent(chart.xAxis[0], 'setExtremes', function (e) {
		                    if (
		                        this.max - this.min !== chart.fixedRange &&
		                        e.trigger !== 'rangeSelectorButton' &&
		                        e.trigger !== 'updatedData' &&
		                        rangeSelector.forcedDataGrouping &&
		                        !rangeSelector.frozenStates
		                    ) {
		                        this.setDataGrouping(false, false);
		                    }
		                });
		            }
		        });
		    },

		    /**
		     * Dynamically update the range selector buttons after a new range has been
		     * set
		     *
		     * @function Highcharts.RangeSelector#updateButtonStates
		     *
		     * @return {void}
		     */
		    updateButtonStates: function () {
		        var rangeSelector = this,
		            chart = this.chart,
		            baseAxis = chart.xAxis[0],
		            actualRange = Math.round(baseAxis.max - baseAxis.min),
		            hasNoData = !baseAxis.hasVisibleSeries,
		            day = 24 * 36e5, // A single day in milliseconds
		            unionExtremes = (
		                chart.scroller &&
		                chart.scroller.getUnionExtremes()
		            ) || baseAxis,
		            dataMin = unionExtremes.dataMin,
		            dataMax = unionExtremes.dataMax,
		            ytdExtremes = rangeSelector.getYTDExtremes(
		                dataMax,
		                dataMin,
		                chart.time.useUTC
		            ),
		            ytdMin = ytdExtremes.min,
		            ytdMax = ytdExtremes.max,
		            selected = rangeSelector.selected,
		            selectedExists = isNumber(selected),
		            allButtonsEnabled = rangeSelector.options.allButtonsEnabled,
		            buttons = rangeSelector.buttons;

		        each(rangeSelector.buttonOptions, function (rangeOptions, i) {
		            var range = rangeOptions._range,
		                type = rangeOptions.type,
		                count = rangeOptions.count || 1,
		                button = buttons[i],
		                state = 0,
		                disable,
		                select,
		                offsetRange = rangeOptions._offsetMax - rangeOptions._offsetMin,
		                isSelected = i === selected,
		                // Disable buttons where the range exceeds what is allowed in
		                // the current view
		                isTooGreatRange = range > dataMax - dataMin,
		                // Disable buttons where the range is smaller than the minimum
		                // range
		                isTooSmallRange = range < baseAxis.minRange,
		                // Do not select the YTD button if not explicitly told so
		                isYTDButNotSelected = false,
		                // Disable the All button if we're already showing all
		                isAllButAlreadyShowingAll = false,
		                isSameRange = range === actualRange;
		            // Months and years have a variable range so we check the extremes
		            if (
		                (type === 'month' || type === 'year') &&
		                (
		                    actualRange + 36e5 >=
		                    { month: 28, year: 365 }[type] * day * count - offsetRange
		                ) &&
		                (
		                    actualRange - 36e5 <=
		                    { month: 31, year: 366 }[type] * day * count + offsetRange
		                )
		            ) {
		                isSameRange = true;
		            } else if (type === 'ytd') {
		                isSameRange = (ytdMax - ytdMin + offsetRange) === actualRange;
		                isYTDButNotSelected = !isSelected;
		            } else if (type === 'all') {
		                isSameRange = baseAxis.max - baseAxis.min >= dataMax - dataMin;
		                isAllButAlreadyShowingAll = (
		                    !isSelected &&
		                    selectedExists &&
		                    isSameRange
		                );
		            }

		            // The new zoom area happens to match the range for a button - mark
		            // it selected. This happens when scrolling across an ordinal gap.
		            // It can be seen in the intraday demos when selecting 1h and scroll
		            // across the night gap.
		            disable = (
		                !allButtonsEnabled &&
		                (
		                    isTooGreatRange ||
		                    isTooSmallRange ||
		                    isAllButAlreadyShowingAll ||
		                    hasNoData
		                )
		            );
		            select = (
		                (isSelected && isSameRange) ||
		                (isSameRange && !selectedExists && !isYTDButNotSelected) ||
		                (isSelected && rangeSelector.frozenStates)
		            );

		            if (disable) {
		                state = 3;
		            } else if (select) {
		                selectedExists = true; // Only one button can be selected
		                state = 2;
		            }

		            // If state has changed, update the button
		            if (button.state !== state) {
		                button.setState(state);
		            }
		        });
		    },

		    /**
		     * Compute and cache the range for an individual button
		     *
		     * @function Highcharts.RangeSelector#computeButtonRange
		     *
		     * @param  {Highcharts.RangeSelectorOptions} rangeOptions
		     *
		     * @return {void}
		     */
		    computeButtonRange: function (rangeOptions) {
		        var type = rangeOptions.type,
		            count = rangeOptions.count || 1,

		            // these time intervals have a fixed number of milliseconds, as
		            // opposed to month, ytd and year
		            fixedTimes = {
		                millisecond: 1,
		                second: 1000,
		                minute: 60 * 1000,
		                hour: 3600 * 1000,
		                day: 24 * 3600 * 1000,
		                week: 7 * 24 * 3600 * 1000
		            };

		        // Store the range on the button object
		        if (fixedTimes[type]) {
		            rangeOptions._range = fixedTimes[type] * count;
		        } else if (type === 'month' || type === 'year') {
		            rangeOptions._range =
		                { month: 30, year: 365 }[type] * 24 * 36e5 * count;
		        }

		        rangeOptions._offsetMin = pick(rangeOptions.offsetMin, 0);
		        rangeOptions._offsetMax = pick(rangeOptions.offsetMax, 0);
		        rangeOptions._range +=
		            rangeOptions._offsetMax - rangeOptions._offsetMin;
		    },

		    /**
		     * Set the internal and displayed value of a HTML input for the dates
		     *
		     * @function Highcharts.RangeSelector#setInputValue
		     *
		     * @param  {string} name
		     *
		     * @param  {number} inputTime
		     *
		     * @return {void}
		     */
		    setInputValue: function (name, inputTime) {
		        var options = this.chart.options.rangeSelector,
		            time = this.chart.time,
		            input = this[name + 'Input'];

		        if (defined(inputTime)) {
		            input.previousValue = input.HCTime;
		            input.HCTime = inputTime;
		        }

		        input.value = time.dateFormat(
		            options.inputEditDateFormat || '%Y-%m-%d',
		            input.HCTime
		        );
		        this[name + 'DateBox'].attr({
		            text: time.dateFormat(
		                options.inputDateFormat || '%b %e, %Y',
		                input.HCTime
		            )
		        });
		    },

		    /**
		     * @function Highcharts.RangeSelector#showInput
		     *
		     * @param  {string} name
		     *
		     * @return {void}
		     */
		    showInput: function (name) {
		        var inputGroup = this.inputGroup,
		            dateBox = this[name + 'DateBox'];

		        css(this[name + 'Input'], {
		            left: (inputGroup.translateX + dateBox.x) + 'px',
		            top: inputGroup.translateY + 'px',
		            width: (dateBox.width - 2) + 'px',
		            height: (dateBox.height - 2) + 'px',
		            border: '2px solid silver'
		        });
		    },

		    /**
		     * @function Highcharts.RangeSelector#hideInput
		     *
		     * @param  {string} name
		     *
		     * @return {void}
		     */
		    hideInput: function (name) {
		        css(this[name + 'Input'], {
		            border: 0,
		            width: '1px',
		            height: '1px'
		        });
		        this.setInputValue(name);
		    },

		    /**
		     * Draw either the 'from' or the 'to' HTML input box of the range selector
		     *
		     * @function Highcharts.RangeSelector#drawInput
		     *
		     * @param  {string} name
		     *
		     * @return {void}
		     */
		    drawInput: function (name) {
		        var rangeSelector = this,
		            chart = rangeSelector.chart,
		            chartStyle = chart.renderer.style || {},
		            renderer = chart.renderer,
		            options = chart.options.rangeSelector,
		            lang = defaultOptions.lang,
		            div = rangeSelector.div,
		            isMin = name === 'min',
		            input,
		            label,
		            dateBox,
		            inputGroup = this.inputGroup;

		        function updateExtremes() {
		            var inputValue = input.value,
		                value = (options.inputDateParser || Date.parse)(inputValue),
		                chartAxis = chart.xAxis[0],
		                dataAxis = chart.scroller && chart.scroller.xAxis ?
		                    chart.scroller.xAxis :
		                    chartAxis,
		                dataMin = dataAxis.dataMin,
		                dataMax = dataAxis.dataMax;
		            if (value !== input.previousValue) {
		                input.previousValue = value;
		                // If the value isn't parsed directly to a value by the
		                // browser's Date.parse method, like YYYY-MM-DD in IE, try
		                // parsing it a different way
		                if (!isNumber(value)) {
		                    value = inputValue.split('-');
		                    value = Date.UTC(
		                        pInt(value[0]),
		                        pInt(value[1]) - 1,
		                        pInt(value[2])
		                    );
		                }

		                if (isNumber(value)) {

		                    // Correct for timezone offset (#433)
		                    if (!chart.time.useUTC) {
		                        value =
		                            value + new Date().getTimezoneOffset() * 60 * 1000;
		                    }

		                    // Validate the extremes. If it goes beyound the data min or
		                    // max, use the actual data extreme (#2438).
		                    if (isMin) {
		                        if (value > rangeSelector.maxInput.HCTime) {
		                            value = undefined;
		                        } else if (value < dataMin) {
		                            value = dataMin;
		                        }
		                    } else {
		                        if (value < rangeSelector.minInput.HCTime) {
		                            value = undefined;
		                        } else if (value > dataMax) {
		                            value = dataMax;
		                        }
		                    }

		                    // Set the extremes
		                    if (value !== undefined) {
		                        chartAxis.setExtremes(
		                            isMin ? value : chartAxis.min,
		                            isMin ? chartAxis.max : value,
		                            undefined,
		                            undefined,
		                            { trigger: 'rangeSelectorInput' }
		                        );
		                    }
		                }
		            }
		        }

		        // Create the text label
		        this[name + 'Label'] = label = renderer.label(
		                lang[isMin ? 'rangeSelectorFrom' : 'rangeSelectorTo'],
		                this.inputGroup.offset
		            )
		            .addClass('highcharts-range-label')
		            .attr({
		                padding: 2
		            })
		            .add(inputGroup);
		        inputGroup.offset += label.width + 5;

		        // Create an SVG label that shows updated date ranges and and records
		        // click events that bring in the HTML input.
		        this[name + 'DateBox'] = dateBox = renderer.label('', inputGroup.offset)
		            .addClass('highcharts-range-input')
		            .attr({
		                padding: 2,
		                width: options.inputBoxWidth || 90,
		                height: options.inputBoxHeight || 17,
		                'text-align': 'center',
                
		                stroke:
		                    options.inputBoxBorderColor || '#cccccc',
		                'stroke-width': 1
                
		            })
		            .on('click', function () {
		                // If it is already focused, the onfocus event doesn't fire
		                // (#3713)
		                rangeSelector.showInput(name);
		                rangeSelector[name + 'Input'].focus();
		            })
		            .add(inputGroup);
		        inputGroup.offset += dateBox.width + (isMin ? 10 : 0);


		        // Create the HTML input element. This is rendered as 1x1 pixel then set
		        // to the right size when focused.
		        this[name + 'Input'] = input = createElement('input', {
		            name: name,
		            className: 'highcharts-range-selector',
		            type: 'text'
		        }, {
		            top: chart.plotTop + 'px' // prevent jump on focus in Firefox
		        }, div);

        
		        // Styles
		        label.css(merge(chartStyle, options.labelStyle));

		        dateBox.css(merge({
		            color: '#333333'
		        }, chartStyle, options.inputStyle));

		        css(input, extend({
		            position: 'absolute',
		            border: 0,
		            width: '1px', // Chrome needs a pixel to see it
		            height: '1px',
		            padding: 0,
		            textAlign: 'center',
		            fontSize: chartStyle.fontSize,
		            fontFamily: chartStyle.fontFamily,
		            top: '-9999em' // #4798
		        }, options.inputStyle));
        

		        // Blow up the input box
		        input.onfocus = function () {
		            rangeSelector.showInput(name);
		        };
		        // Hide away the input box
		        input.onblur = function () {
		            rangeSelector.hideInput(name);
		        };

		        // handle changes in the input boxes
		        input.onchange = updateExtremes;

		        input.onkeypress = function (event) {
		            // IE does not fire onchange on enter
		            if (event.keyCode === 13) {
		                updateExtremes();
		            }
		        };
		    },

		    /**
		     * Get the position of the range selector buttons and inputs. This can be
		     * overridden from outside for custom positioning.
		     *
		     * @function Highcharts.RangeSelector#getPosition
		     *
		     * @return {Highcharts.Dictionary<number>}
		     */
		    getPosition: function () {
		        var chart = this.chart,
		            options = chart.options.rangeSelector,
		            top = options.verticalAlign === 'top' ?
		                chart.plotTop - chart.axisOffset[0] :
		                0; // set offset only for varticalAlign top

		        return {
		            buttonTop: top + options.buttonPosition.y,
		            inputTop: top + options.inputPosition.y - 10
		        };
		    },
		    /**
		     * Get the extremes of YTD. Will choose dataMax if its value is lower than
		     * the current timestamp. Will choose dataMin if its value is higher than
		     * the timestamp for the start of current year.
		     *
		     * @function Highcharts.RangeSelector#getYTDExtremes
		     *
		     * @param  {number} dataMax
		     *
		     * @param  {number} dataMin
		     *
		     * @return {*}
		     *         Returns min and max for the YTD
		     */
		    getYTDExtremes: function (dataMax, dataMin, useUTC) {
		        var time = this.chart.time,
		            min,
		            now = new time.Date(dataMax),
		            year = time.get('FullYear', now),
		            startOfYear = useUTC ?
		                time.Date.UTC(year, 0, 1) : // eslint-disable-line new-cap
		                +new time.Date(year, 0, 1);
		        min = Math.max(dataMin || 0, startOfYear);
		        now = now.getTime();
		        return {
		            max: Math.min(dataMax || now, now),
		            min: min
		        };
		    },

		    /**
		     * Render the range selector including the buttons and the inputs. The first
		     * time render is called, the elements are created and positioned. On
		     * subsequent calls, they are moved and updated.
		     *
		     * @function Highcharts.RangeSelector#render
		     *
		     * @param  {number} min
		     *         X axis minimum
		     *
		     * @param  {number} max
		     *         X axis maximum
		     *
		     * @return {void}
		     */
		    render: function (min, max) {

		        var rangeSelector = this,
		            chart = rangeSelector.chart,
		            renderer = chart.renderer,
		            container = chart.container,
		            chartOptions = chart.options,
		            navButtonOptions = (
		                chartOptions.exporting &&
		                chartOptions.exporting.enabled !== false &&
		                chartOptions.navigation &&
		                chartOptions.navigation.buttonOptions
		            ),
		            lang = defaultOptions.lang,
		            div = rangeSelector.div,
		            options = chartOptions.rangeSelector,
		            // Place inputs above the container
		            inputsZIndex = pick(
		                chartOptions.chart.style &&
		                chartOptions.chart.style.zIndex,
		                0
		            ) + 1,
		            floating = options.floating,
		            buttons = rangeSelector.buttons,
		            inputGroup = rangeSelector.inputGroup,
		            buttonTheme = options.buttonTheme,
		            buttonPosition = options.buttonPosition,
		            inputPosition = options.inputPosition,
		            inputEnabled = options.inputEnabled,
		            states = buttonTheme && buttonTheme.states,
		            plotLeft = chart.plotLeft,
		            buttonLeft,
		            buttonGroup = rangeSelector.buttonGroup,
		            group,
		            groupHeight,
		            rendered = rangeSelector.rendered,
		            verticalAlign = rangeSelector.options.verticalAlign,
		            legend = chart.legend,
		            legendOptions = legend && legend.options,
		            buttonPositionY = buttonPosition.y,
		            inputPositionY = inputPosition.y,
		            animate = rendered || false,
		            verb = animate ? 'animate' : 'attr',
		            exportingX = 0,
		            alignTranslateY,
		            legendHeight,
		            minPosition,
		            translateY = 0,
		            translateX;

		        if (options.enabled === false) {
		            return;
		        }

		        // create the elements
		        if (!rendered) {

		            rangeSelector.group = group = renderer.g('range-selector-group')
		                .attr({
		                    zIndex: 7
		                })
		                .add();

		            rangeSelector.buttonGroup = buttonGroup =
		                renderer.g('range-selector-buttons').add(group);

		            rangeSelector.zoomText = renderer.text(
		                    lang.rangeSelectorZoom,
		                    0,
		                    15
		                )
		                .css(options.labelStyle)
		                .add(buttonGroup);

		            each(rangeSelector.buttonOptions, function (rangeOptions, i) {

		                buttons[i] = renderer.button(
		                        rangeOptions.text,
		                        0,
		                        0,
		                        function () {

		                            // extract events from button object and call
		                            var buttonEvents = (
		                                    rangeOptions.events &&
		                                    rangeOptions.events.click
		                                ),
		                                callDefaultEvent;

		                            if (buttonEvents) {
		                                callDefaultEvent =
		                                    buttonEvents.call(rangeOptions);
		                            }

		                            if (callDefaultEvent !== false) {
		                                rangeSelector.clickButton(i);
		                            }

		                            rangeSelector.isActive = true;
		                        },
		                        buttonTheme,
		                        states && states.hover,
		                        states && states.select,
		                        states && states.disabled
		                    )
		                    .attr({
		                        'text-align': 'center'
		                    })
		                    .add(buttonGroup);
		            });

		            // first create a wrapper outside the container in order to make
		            // the inputs work and make export correct
		            if (inputEnabled !== false) {
		                rangeSelector.div = div = createElement('div', null, {
		                    position: 'relative',
		                    height: 0,
		                    zIndex: inputsZIndex
		                });

		                container.parentNode.insertBefore(div, container);

		                // Create the group to keep the inputs
		                rangeSelector.inputGroup = inputGroup =
		                    renderer.g('input-group').add(group);
		                inputGroup.offset = 0;

		                rangeSelector.drawInput('min');
		                rangeSelector.drawInput('max');
		            }
		        }

		        // #8769, allow dynamically updating margins
		        rangeSelector.zoomText[verb]({
		            x: pick(plotLeft + buttonPosition.x, plotLeft)
		        });
		        // button start position
		        buttonLeft = pick(plotLeft + buttonPosition.x, plotLeft) +
		            rangeSelector.zoomText.getBBox().width + 5;
		        each(rangeSelector.buttonOptions, function (rangeOptions, i) {

		            buttons[i][verb]({ x: buttonLeft });

		            // increase button position for the next button
		            buttonLeft += buttons[i].width + pick(options.buttonSpacing, 5);
		        });


		        plotLeft = chart.plotLeft - chart.spacing[3];
		        rangeSelector.updateButtonStates();

		        // detect collisiton with exporting
		        if
		            (
		                navButtonOptions &&
		                this.titleCollision(chart) &&
		                verticalAlign === 'top' &&
		                buttonPosition.align === 'right' &&
		                (
		                    (buttonPosition.y + buttonGroup.getBBox().height - 12) <
		                    ((navButtonOptions.y || 0) + navButtonOptions.height)
		                )
		            ) {
		            exportingX = -40;
		        }

		        if (buttonPosition.align === 'left') {
		            translateX = buttonPosition.x - chart.spacing[3];
		        } else if (buttonPosition.align === 'right') {
		            translateX = buttonPosition.x + exportingX - chart.spacing[1];
		        }

		        // align button group
		        buttonGroup.align({
		            y: buttonPosition.y,
		            width: buttonGroup.getBBox().width,
		            align: buttonPosition.align,
		            x: translateX
		        }, true, chart.spacingBox);

		        // skip animation
		        rangeSelector.group.placed = animate;
		        rangeSelector.buttonGroup.placed = animate;

		        if (inputEnabled !== false) {

		            var inputGroupX,
		                inputGroupWidth,
		                buttonGroupX,
		                buttonGroupWidth;

		            // detect collision with exporting
		            if
		                (
		                    navButtonOptions &&
		                    this.titleCollision(chart) &&
		                    verticalAlign === 'top' &&
		                    inputPosition.align === 'right' &&
		                    (
		                        (inputPosition.y - inputGroup.getBBox().height - 12) <
		                        (
		                            (navButtonOptions.y || 0) +
		                            navButtonOptions.height +
		                            chart.spacing[0]
		                        )
		                    )
		                ) {
		                exportingX = -40;
		            } else {
		                exportingX = 0;
		            }

		            if (inputPosition.align === 'left') {
		                translateX = plotLeft;
		            } else if (inputPosition.align === 'right') {
		                translateX = -Math.max(chart.axisOffset[1], -exportingX);
		            }

		            // Update the alignment to the updated spacing box
		            inputGroup.align({
		                y: inputPosition.y,
		                width: inputGroup.getBBox().width,
		                align: inputPosition.align,
		                // fix wrong getBBox() value on right align
		                x: inputPosition.x + translateX - 2
		            }, true, chart.spacingBox);

		            // detect collision
		            inputGroupX = (
		                inputGroup.alignAttr.translateX +
		                inputGroup.alignOptions.x -
		                exportingX +
		                // getBBox for detecing left margin
		                inputGroup.getBBox().x +
		                // 2px padding to not overlap input and label
		                2
		            );

		            inputGroupWidth = inputGroup.alignOptions.width;

		            buttonGroupX = buttonGroup.alignAttr.translateX +
		                buttonGroup.getBBox().x;
		            // 20 is minimal spacing between elements
		            buttonGroupWidth = buttonGroup.getBBox().width + 20;

		            if (
		                    (inputPosition.align === buttonPosition.align) ||
		                    (
		                        (buttonGroupX + buttonGroupWidth > inputGroupX) &&
		                        (inputGroupX + inputGroupWidth > buttonGroupX) &&
		                        (
		                            buttonPositionY <
		                            (inputPositionY + inputGroup.getBBox().height)
		                        )
		                    )
		                ) {

		                inputGroup.attr({
		                    translateX: inputGroup.alignAttr.translateX +
		                        (chart.axisOffset[1] >= -exportingX ? 0 : -exportingX),
		                    translateY: inputGroup.alignAttr.translateY +
		                        buttonGroup.getBBox().height + 10
		                });

		            }

		            // Set or reset the input values
		            rangeSelector.setInputValue('min', min);
		            rangeSelector.setInputValue('max', max);

		            // skip animation
		            rangeSelector.inputGroup.placed = animate;
		        }

		        // vertical align
		        rangeSelector.group.align({
		            verticalAlign: verticalAlign
		        }, true, chart.spacingBox);

		        // set position
		        groupHeight = rangeSelector.group.getBBox().height + 20; // # 20 padding
		        alignTranslateY = rangeSelector.group.alignAttr.translateY;

		        // calculate bottom position
		        if (verticalAlign === 'bottom') {
		            legendHeight = (
		                legendOptions &&
		                legendOptions.verticalAlign === 'bottom' &&
		                legendOptions.enabled &&
		                !legendOptions.floating ?
		                    legend.legendHeight + pick(legendOptions.margin, 10) :
		                    0
		            );

		            groupHeight = groupHeight + legendHeight - 20;
		            translateY = (
		                alignTranslateY -
		                groupHeight -
		                (floating ? 0 : options.y) -
		                10 // 10 spacing
		            );

		        }

		        if (verticalAlign === 'top') {
		            if (floating) {
		                translateY = 0;
		            }

		            if (chart.titleOffset) {
		                translateY = chart.titleOffset + chart.options.title.margin;
		            }

		            translateY += ((chart.margin[0] - chart.spacing[0]) || 0);

		        } else if (verticalAlign === 'middle') {
		            if (inputPositionY === buttonPositionY) {
		                if (inputPositionY < 0) {
		                    translateY = alignTranslateY + minPosition;
		                } else {
		                    translateY = alignTranslateY;
		                }
		            } else if (inputPositionY || buttonPositionY) {
		                if (inputPositionY < 0 || buttonPositionY < 0) {
		                    translateY -= Math.min(inputPositionY, buttonPositionY);
		                } else {
		                    translateY = alignTranslateY - groupHeight + minPosition;
		                }
		            }
		        }

		        rangeSelector.group.translate(
		            options.x,
		            options.y + Math.floor(translateY)
		        );

		        // translate HTML inputs
		        if (inputEnabled !== false) {
		            rangeSelector.minInput.style.marginTop =
		                rangeSelector.group.translateY + 'px';
		            rangeSelector.maxInput.style.marginTop =
		                rangeSelector.group.translateY + 'px';
		        }

		        rangeSelector.rendered = true;
		    },

		    /**
		     * Extracts height of range selector
		     *
		     * @function Highcharts.RangeSelector#getHeight
		     *
		     * @return {number}
		     *         Returns rangeSelector height
		     */
		    getHeight: function () {
		        var rangeSelector = this,
		            options = rangeSelector.options,
		            rangeSelectorGroup = rangeSelector.group,
		            inputPosition = options.inputPosition,
		            buttonPosition = options.buttonPosition,
		            yPosition = options.y,
		            buttonPositionY = buttonPosition.y,
		            inputPositionY = inputPosition.y,
		            rangeSelectorHeight = 0,
		            minPosition;

		        rangeSelectorHeight = rangeSelectorGroup ?
		            // 13px to keep back compatibility
		            (rangeSelectorGroup.getBBox(true).height) + 13 + yPosition :
		            0;

		        minPosition = Math.min(inputPositionY, buttonPositionY);

		        if (
		            (inputPositionY < 0 && buttonPositionY < 0) ||
		            (inputPositionY > 0 && buttonPositionY > 0)
		        ) {
		            rangeSelectorHeight += Math.abs(minPosition);
		        }

		        return rangeSelectorHeight;
		    },

		    /**
		     * Detect collision with title or subtitle
		     *
		     * @function Highcharts.RangeSelector#titleCollision
		     *
		     * @param  {Highcharts.Chart} chart
		     *
		     * @return {boolean}
		     *         Returns collision status
		     */
		    titleCollision: function (chart) {
		        return !(chart.options.title.text || chart.options.subtitle.text);
		    },

		    /**
		     * Update the range selector with new options
		     *
		     * @function Highcharts.RangeSelector#update
		     *
		     * @param  {Highcharts.RangeSelectorOptions} options
		     *
		     * @return {void}
		     */
		    update: function (options) {
		        var chart = this.chart;

		        merge(true, chart.options.rangeSelector, options);
		        this.destroy();
		        this.init(chart);
		        chart.rangeSelector.render();
		    },

		    /**
		     * Destroys allocated elements.
		     *
		     * @function Highcharts.RangeSelector#destroy
		     *
		     * @return {void}
		     */
		    destroy: function () {
		        var rSelector = this,
		            minInput = rSelector.minInput,
		            maxInput = rSelector.maxInput;

		        rSelector.unMouseDown();
		        rSelector.unResize();

		        // Destroy elements in collections
		        destroyObjectProperties(rSelector.buttons);

		        // Clear input element events
		        if (minInput) {
		            minInput.onfocus = minInput.onblur = minInput.onchange = null;
		        }
		        if (maxInput) {
		            maxInput.onfocus = maxInput.onblur = maxInput.onchange = null;
		        }

		        // Destroy HTML and SVG elements
		        H.objectEach(rSelector, function (val, key) {
		            if (val && key !== 'chart') {
		                if (val.destroy) { // SVGElement
		                    val.destroy();
		                } else if (val.nodeType) { // HTML element
		                    discardElement(this[key]);
		                }
		            }
		            if (val !== RangeSelector.prototype[key]) {
		                rSelector[key] = null;
		            }
		        }, this);
		    }
		};

		/**
		 * Add logic to normalize the zoomed range in order to preserve the pressed
		 * state of range selector buttons
		 *
		 * @function Highcharts.Axis#toFixedRange
		 *
		 * @param  {number} pxMin
		 *
		 * @param  {number} pxMax
		 *
		 * @param  {number} fixedMin
		 *
		 * @param  {number} fixedMax
		 *
		 * @return {*}
		 */
		Axis.prototype.toFixedRange = function (pxMin, pxMax, fixedMin, fixedMax) {
		    var fixedRange = this.chart && this.chart.fixedRange,
		        newMin = pick(fixedMin, this.translate(pxMin, true, !this.horiz)),
		        newMax = pick(fixedMax, this.translate(pxMax, true, !this.horiz)),
		        changeRatio = fixedRange && (newMax - newMin) / fixedRange;

		    // If the difference between the fixed range and the actual requested range
		    // is too great, the user is dragging across an ordinal gap, and we need to
		    // release the range selector button.
		    if (changeRatio > 0.7 && changeRatio < 1.3) {
		        if (fixedMax) {
		            newMin = newMax - fixedRange;
		        } else {
		            newMax = newMin + fixedRange;
		        }
		    }
		    if (!isNumber(newMin) || !isNumber(newMax)) { // #1195, #7411
		        newMin = newMax = undefined;
		    }

		    return {
		        min: newMin,
		        max: newMax
		    };
		};

		/**
		 * Get the axis min value based on the range option and the current max. For
		 * stock charts this is extended via the {@link RangeSelector} so that if the
		 * selected range is a multiple of months or years, it is compensated for
		 * various month lengths.
		 *
		 * @function Highcharts.Axis#minFromRange
		 *
		 * @return {number}
		 *         The new minimum value.
		 */
		Axis.prototype.minFromRange = function () {
		    var rangeOptions = this.range,
		        type = rangeOptions.type,
		        timeName = { month: 'Month', year: 'FullYear' }[type],
		        min,
		        max = this.max,
		        dataMin,
		        range,
		        // Get the true range from a start date
		        getTrueRange = function (base, count) {
		            var date = new Date(base),
		                basePeriod = date['get' + timeName]();

		            date['set' + timeName](basePeriod + count);

		            if (basePeriod === date['get' + timeName]()) {
		                date.setDate(0); // #6537
		            }

		            return date.getTime() - base;
		        };

		    if (isNumber(rangeOptions)) {
		        min = max - rangeOptions;
		        range = rangeOptions;
		    } else {
		        min = max + getTrueRange(max, -rangeOptions.count);

		        // Let the fixedRange reflect initial settings (#5930)
		        if (this.chart) {
		            this.chart.fixedRange = max - min;
		        }
		    }

		    dataMin = pick(this.dataMin, Number.MIN_VALUE);
		    if (!isNumber(min)) {
		        min = dataMin;
		    }
		    if (min <= dataMin) {
		        min = dataMin;
		        if (range === undefined) { // #4501
		            range = getTrueRange(min, rangeOptions.count);
		        }
		        this.newMax = Math.min(min + range, this.dataMax);
		    }
		    if (!isNumber(max)) {
		        min = undefined;
		    }
		    return min;

		};

		// Initialize rangeselector for stock charts
		addEvent(Chart, 'afterGetContainer', function () {
		    if (this.options.rangeSelector.enabled) {
		        this.rangeSelector = new RangeSelector(this);
		    }
		});

		wrap(Chart.prototype, 'render', function (proceed, options, callback) {

		    var chart = this,
		        axes = chart.axes,
		        rangeSelector = chart.rangeSelector,
		        verticalAlign;

		    if (rangeSelector) {

		        each(axes, function (axis) {
		            axis.updateNames();
		            axis.setScale();
		        });

		        chart.getAxisMargins();

		        rangeSelector.render();
		        verticalAlign = rangeSelector.options.verticalAlign;

		        if (!rangeSelector.options.floating) {
		            if (verticalAlign === 'bottom') {
		                this.extraBottomMargin = true;
		            } else if (verticalAlign !== 'middle') {
		                this.extraTopMargin = true;
		            }
		        }
		    }

		    proceed.call(this, options, callback);

		});

		addEvent(Chart, 'update', function (e) {

		    var chart = this,
		        options = e.options,
		        optionsRangeSelector = options.rangeSelector,
		        rangeSelector = chart.rangeSelector,
		        verticalAlign,
		        extraBottomMarginWas = this.extraBottomMargin,
		        extraTopMarginWas = this.extraTopMargin;

		    if (
		        optionsRangeSelector &&
		        optionsRangeSelector.enabled &&
		        !defined(rangeSelector)
		    ) {
		        this.options.rangeSelector.enabled = true;
		        this.rangeSelector = new RangeSelector(this);
		    }


		    this.extraBottomMargin = false;
		    this.extraTopMargin = false;

		    if (rangeSelector) {

		        rangeSelector.render();

		        verticalAlign = (
		            optionsRangeSelector &&
		            optionsRangeSelector.verticalAlign
		        ) || (
		            rangeSelector.options && rangeSelector.options.verticalAlign
		        );

		        if (!rangeSelector.options.floating) {
		            if (verticalAlign === 'bottom') {
		                this.extraBottomMargin = true;
		            } else if (verticalAlign !== 'middle') {
		                this.extraTopMargin = true;
		            }
		        }

		        if (
		            this.extraBottomMargin !== extraBottomMarginWas ||
		            this.extraTopMargin !== extraTopMarginWas
		        ) {
		            this.isDirtyBox = true;
		        }

		    }

		});

		wrap(Chart.prototype, 'redraw', function (proceed, options, callback) {
		    var chart = this,
		        rangeSelector = chart.rangeSelector,
		        verticalAlign;

		    if (rangeSelector && !rangeSelector.options.floating) {

		        rangeSelector.render();
		        verticalAlign = rangeSelector.options.verticalAlign;

		        if (verticalAlign === 'bottom') {
		            this.extraBottomMargin = true;
		        } else if (verticalAlign !== 'middle') {
		            this.extraTopMargin = true;
		        }
		    }

		    proceed.call(this, options, callback);
		});

		addEvent(Chart, 'getMargins', function () {
		    var rangeSelector = this.rangeSelector,
		        rangeSelectorHeight;

		    if (rangeSelector) {
		        rangeSelectorHeight = rangeSelector.getHeight();

		        if (this.extraTopMargin) {
		            this.plotTop += rangeSelectorHeight;
		        }

		        if (this.extraBottomMargin) {
		            this.marginBottom += rangeSelectorHeight;
		        }
		    }
		});

		Chart.prototype.callbacks.push(function (chart) {
		    var extremes,
		        rangeSelector = chart.rangeSelector,
		        unbindRender,
		        unbindSetExtremes;

		    function renderRangeSelector() {
		        extremes = chart.xAxis[0].getExtremes();
		        if (isNumber(extremes.min)) {
		            rangeSelector.render(extremes.min, extremes.max);
		        }
		    }

		    if (rangeSelector) {
		        // redraw the scroller on setExtremes
		        unbindSetExtremes = addEvent(
		            chart.xAxis[0],
		            'afterSetExtremes',
		            function (e) {
		                rangeSelector.render(e.min, e.max);
		            }
		        );

		        // redraw the scroller chart resize
		        unbindRender = addEvent(chart, 'redraw', renderRangeSelector);

		        // do it now
		        renderRangeSelector();
		    }

		    // Remove resize/afterSetExtremes at chart destroy
		    addEvent(chart, 'destroy', function destroyEvents() {
		        if (rangeSelector) {
		            unbindRender();
		            unbindSetExtremes();
		        }
		    });
		});


		H.RangeSelector = RangeSelector;

		/* ****************************************************************************
		 * End Range Selector code                                                     *
		 *****************************************************************************/

	}(Highcharts));
	(function (H) {
		/**
		 * (c) 2010-2017 Torstein Honsi
		 *
		 * License: www.highcharts.com/license
		 */
		var addEvent = H.addEvent,
		    arrayMax = H.arrayMax,
		    arrayMin = H.arrayMin,
		    Axis = H.Axis,
		    Chart = H.Chart,
		    defined = H.defined,
		    each = H.each,
		    extend = H.extend,
		    format = H.format,
		    grep = H.grep,
		    inArray = H.inArray,
		    isNumber = H.isNumber,
		    isString = H.isString,
		    map = H.map,
		    merge = H.merge,
		    pick = H.pick,
		    Point = H.Point,
		    Renderer = H.Renderer,
		    Series = H.Series,
		    splat = H.splat,
		    SVGRenderer = H.SVGRenderer,
		    VMLRenderer = H.VMLRenderer,
		    wrap = H.wrap,


		    seriesProto = Series.prototype,
		    seriesInit = seriesProto.init,
		    seriesProcessData = seriesProto.processData,
		    pointTooltipFormatter = Point.prototype.tooltipFormatter;


		/**
		 * Compare the values of the series against the first non-null, non-
		 * zero value in the visible range. The y axis will show percentage
		 * or absolute change depending on whether `compare` is set to `"percent"`
		 * or `"value"`. When this is applied to multiple series, it allows
		 * comparing the development of the series against each other. Adds
		 * a `change` field to every point object.
		 *
		 * @type {String}
		 * @see [compareBase](#plotOptions.series.compareBase),
		 *      [Axis.setCompare()](/class-reference/Highcharts.Axis#setCompare)
		 * @sample {highstock} stock/plotoptions/series-compare-percent/ Percent
		 * @sample {highstock} stock/plotoptions/series-compare-value/ Value
		 * @default undefined
		 * @since 1.0.1
		 * @product highstock
		 * @apioption plotOptions.series.compare
		 */

		/**
		 * Defines if comparison should start from the first point within the visible
		 * range or should start from the first point <b>before</b> the range.
		 * In other words, this flag determines if first point within the visible range
		 * will have 0% (`compareStart=true`) or should have been already calculated
		 * according to the previous point (`compareStart=false`).
		 *
		 * @type {Boolean}
		 * @sample {highstock} stock/plotoptions/series-comparestart/
		 *         Calculate compare within visible range
		 * @default false
		 * @since 6.0.0
		 * @product highstock
		 * @apioption plotOptions.series.compareStart
		 */

		/**
		 * When [compare](#plotOptions.series.compare) is `percent`, this option
		 * dictates whether to use 0 or 100 as the base of comparison.
		 *
		 * @validvalue [0, 100]
		 * @type {Number}
		 * @sample {highstock} / Compare base is 100
		 * @default 0
		 * @since 5.0.6
		 * @product highstock
		 * @apioption plotOptions.series.compareBase
		 */

		/**
		 * Factory function for creating new stock charts. Creates a new {@link Chart|
		 * Chart} object with different default options than the basic Chart.
		 *
		 * @function #stockChart
		 * @memberof Highcharts
		 *
		 * @param  {String|HTMLDOMElement} renderTo
		 *         The DOM element to render to, or its id.
		 * @param  {Options} options
		 *         The chart options structure as described in the {@link
		 *         https://api.highcharts.com/highstock|options reference}.
		 * @param  {Function} callback
		 *         A function to execute when the chart object is finished loading and
		 *         rendering. In most cases the chart is built in one thread, but in
		 *         Internet Explorer version 8 or less the chart is sometimes
		 *         initialized before the document is ready, and in these cases the
		 *         chart object will not be finished synchronously. As a consequence,
		 *         code that relies on the newly built Chart object should always run in
		 *         the callback. Defining a {@link https://api.highcharts.com/highstock/chart.events.load|
		 *         chart.event.load} handler is equivalent.
		 *
		 * @return {Chart}
		 *         The chart object.
		 *
		 * @example
		 * var chart = Highcharts.stockChart('container', {
		 *     series: [{
		 *         data: [1, 2, 3, 4, 5, 6, 7, 8, 9],
		 *         pointInterval: 24 * 60 * 60 * 1000
		 *     }]
		 * });
		 */
		H.StockChart = H.stockChart = function (a, b, c) {
		    var hasRenderToArg = isString(a) || a.nodeName,
		        options = arguments[hasRenderToArg ? 1 : 0],
		        // to increase performance, don't merge the data
		        seriesOptions = options.series,
		        defaultOptions = H.getOptions(),
		        opposite,

		        // Always disable startOnTick:true on the main axis when the navigator
		        // is enabled (#1090)
		        navigatorEnabled = pick(
		            options.navigator && options.navigator.enabled,
		            defaultOptions.navigator.enabled,
		            true
		        ),
		        disableStartOnTick = navigatorEnabled ? {
		            startOnTick: false,
		            endOnTick: false
		        } : null,

		        lineOptions = {

		            marker: {
		                enabled: false,
		                radius: 2
		            }
		            // gapSize: 0
		        },
		        columnOptions = {
		            shadow: false,
		            borderWidth: 0
		        };

		    // apply X axis options to both single and multi y axes
		    options.xAxis = map(splat(options.xAxis || {}), function (xAxisOptions, i) {
		        return merge(
		            { // defaults
		                minPadding: 0,
		                maxPadding: 0,
		                overscroll: 0,
		                ordinal: true,
		                title: {
		                    text: null
		                },
		                labels: {
		                    overflow: 'justify'
		                },
		                showLastLabel: true
		            },
		            defaultOptions.xAxis, // #3802
		            defaultOptions.xAxis && defaultOptions.xAxis[i], // #7690
		            xAxisOptions, // user options
		            { // forced options
		                type: 'datetime',
		                categories: null
		            },
		            disableStartOnTick
		        );
		    });

		    // apply Y axis options to both single and multi y axes
		    options.yAxis = map(splat(options.yAxis || {}), function (yAxisOptions, i) {
		        opposite = pick(yAxisOptions.opposite, true);
		        return merge({ // defaults
		            labels: {
		                y: -2
		            },
		            opposite: opposite,

		            /**
		             * @default {highcharts} true
		             * @default {highstock} false
		             * @apioption yAxis.showLastLabel
		             */
		            showLastLabel: !!(
		                // #6104, show last label by default for category axes
		                yAxisOptions.categories ||
		                yAxisOptions.type === 'category'
		            ),

		            title: {
		                text: null
		            }
		        },
		        defaultOptions.yAxis, // #3802
		        defaultOptions.yAxis && defaultOptions.yAxis[i], // #7690
		        yAxisOptions // user options
		        );
		    });

		    options.series = null;

		    options = merge(
		        {
		            chart: {
		                panning: true,
		                pinchType: 'x'
		            },
		            navigator: {
		                enabled: navigatorEnabled
		            },
		            scrollbar: {
		                // #4988 - check if setOptions was called
		                enabled: pick(defaultOptions.scrollbar.enabled, true)
		            },
		            rangeSelector: {
		                // #4988 - check if setOptions was called
		                enabled: pick(defaultOptions.rangeSelector.enabled, true)
		            },
		            title: {
		                text: null
		            },
		            tooltip: {
		                split: pick(defaultOptions.tooltip.split, true),
		                crosshairs: true
		            },
		            legend: {
		                enabled: false
		            },

		            plotOptions: {
		                line: lineOptions,
		                spline: lineOptions,
		                area: lineOptions,
		                areaspline: lineOptions,
		                arearange: lineOptions,
		                areasplinerange: lineOptions,
		                column: columnOptions,
		                columnrange: columnOptions,
		                candlestick: columnOptions,
		                ohlc: columnOptions
		            }

		        },

		        options, // user's options

		        { // forced options
		            isStock: true // internal flag
		        }
		    );

		    options.series = seriesOptions;

		    return hasRenderToArg ?
		        new Chart(a, options, c) :
		        new Chart(options, b);
		};

		// Override the automatic label alignment so that the first Y axis' labels
		// are drawn on top of the grid line, and subsequent axes are drawn outside
		wrap(Axis.prototype, 'autoLabelAlign', function (proceed) {
		    var chart = this.chart,
		        options = this.options,
		        panes = chart._labelPanes = chart._labelPanes || {},
		        key,
		        labelOptions = this.options.labels;
		    if (this.chart.options.isStock && this.coll === 'yAxis') {
		        key = options.top + ',' + options.height;
		        // do it only for the first Y axis of each pane
		        if (!panes[key] && labelOptions.enabled) {
		            if (labelOptions.x === 15) { // default
		                labelOptions.x = 0;
		            }
		            if (labelOptions.align === undefined) {
		                labelOptions.align = 'right';
		            }
		            panes[key] = this;
		            return 'right';
		        }
		    }
		    return proceed.apply(this, [].slice.call(arguments, 1));
		});

		// Clear axis from label panes (#6071)
		addEvent(Axis, 'destroy', function () {
		    var chart = this.chart,
		        key = this.options && (this.options.top + ',' + this.options.height);

		    if (key && chart._labelPanes && chart._labelPanes[key] === this) {
		        delete chart._labelPanes[key];
		    }
		});

		// Override getPlotLinePath to allow for multipane charts
		wrap(Axis.prototype, 'getPlotLinePath', function (
		    proceed,
		    value,
		    lineWidth,
		    old,
		    force,
		    translatedValue
		) {
		    var axis = this,
		        series = (
		            this.isLinked && !this.series ?
		                this.linkedParent.series :
		                this.series
		        ),
		        chart = axis.chart,
		        renderer = chart.renderer,
		        axisLeft = axis.left,
		        axisTop = axis.top,
		        x1,
		        y1,
		        x2,
		        y2,
		        result = [],
		        axes = [], // #3416 need a default array
		        axes2,
		        uniqueAxes,
		        transVal;

		    /**
		     * Return the other axis based on either the axis option or on related
		     * series.
		     */
		    function getAxis(coll) {
		        var otherColl = coll === 'xAxis' ? 'yAxis' : 'xAxis',
		            opt = axis.options[otherColl];

		        // Other axis indexed by number
		        if (isNumber(opt)) {
		            return [chart[otherColl][opt]];
		        }

		        // Other axis indexed by id (like navigator)
		        if (isString(opt)) {
		            return [chart.get(opt)];
		        }

		        // Auto detect based on existing series
		        return map(series, function (s) {
		            return s[otherColl];
		        });
		    }

		    // Ignore in case of colorAxis or zAxis. #3360, #3524, #6720
		    if (axis.coll !== 'xAxis' && axis.coll !== 'yAxis') {
		        return proceed.apply(this, [].slice.call(arguments, 1));
		    }

		    // Get the related axes based on series
		    axes = getAxis(axis.coll);

		    // Get the related axes based options.*Axis setting #2810
		    axes2 = (axis.isXAxis ? chart.yAxis : chart.xAxis);
		    each(axes2, function (A) {
		        if (
		            defined(A.options.id) ?
		                A.options.id.indexOf('navigator') === -1 :
		                true
		        ) {
		            var a = (A.isXAxis ? 'yAxis' : 'xAxis'),
		                rax = (
		                    defined(A.options[a]) ?
		                        chart[a][A.options[a]] :
		                        chart[a][0]
		                );

		            if (axis === rax) {
		                axes.push(A);
		            }
		        }
		    });


		    // Remove duplicates in the axes array. If there are no axes in the axes
		    // array, we are adding an axis without data, so we need to populate this
		    // with grid lines (#2796).
		    uniqueAxes = axes.length ?
		        [] :
		        [axis.isXAxis ? chart.yAxis[0] : chart.xAxis[0]]; // #3742
		    each(axes, function (axis2) {
		        if (
		            inArray(axis2, uniqueAxes) === -1 &&
		            // Do not draw on axis which overlap completely. #5424
		            !H.find(uniqueAxes, function (unique) {
		                return unique.pos === axis2.pos && unique.len === axis2.len;
		            })
		        ) {
		            uniqueAxes.push(axis2);
		        }
		    });

		    transVal = pick(translatedValue, axis.translate(value, null, null, old));
		    if (isNumber(transVal)) {
		        if (axis.horiz) {
		            each(uniqueAxes, function (axis2) {
		                var skip;

		                y1 = axis2.pos;
		                y2 = y1 + axis2.len;
		                x1 = x2 = Math.round(transVal + axis.transB);

		                // outside plot area
		                if (x1 < axisLeft || x1 > axisLeft + axis.width) {
		                    if (force) {
		                        x1 = x2 = Math.min(
		                            Math.max(axisLeft, x1),
		                            axisLeft + axis.width
		                        );
		                    } else {
		                        skip = true;
		                    }
		                }
		                if (!skip) {
		                    result.push('M', x1, y1, 'L', x2, y2);
		                }
		            });
		        } else {
		            each(uniqueAxes, function (axis2) {
		                var skip;

		                x1 = axis2.pos;
		                x2 = x1 + axis2.len;
		                y1 = y2 = Math.round(axisTop + axis.height - transVal);

		                // outside plot area
		                if (y1 < axisTop || y1 > axisTop + axis.height) {
		                    if (force) {
		                        y1 = y2 = Math.min(
		                            Math.max(axisTop, y1),
		                            axis.top + axis.height
		                        );
		                    } else {
		                        skip = true;
		                    }
		                }
		                if (!skip) {
		                    result.push('M', x1, y1, 'L', x2, y2);
		                }
		            });
		        }
		    }
		    return result.length > 0 ?
		        renderer.crispPolyLine(result, lineWidth || 1) :
		        null; // #3557 getPlotLinePath in regular Highcharts also returns null
		});

		// Function to crisp a line with multiple segments
		SVGRenderer.prototype.crispPolyLine = function (points, width) {
		    // points format: ['M', 0, 0, 'L', 100, 0]
		    // normalize to a crisp line
		    var i;
		    for (i = 0; i < points.length; i = i + 6) {
		        if (points[i + 1] === points[i + 4]) {
		            // Substract due to #1129. Now bottom and left axis gridlines behave
		            // the same.
		            points[i + 1] = points[i + 4] =
		                Math.round(points[i + 1]) - (width % 2 / 2);
		        }
		        if (points[i + 2] === points[i + 5]) {
		            points[i + 2] = points[i + 5] =
		                Math.round(points[i + 2]) + (width % 2 / 2);
		        }
		    }
		    return points;
		};

		if (Renderer === VMLRenderer) {
		    VMLRenderer.prototype.crispPolyLine = SVGRenderer.prototype.crispPolyLine;
		}


		// Wrapper to hide the label
		wrap(Axis.prototype, 'hideCrosshair', function (proceed, i) {

		    proceed.call(this, i);

		    if (this.crossLabel) {
		        this.crossLabel = this.crossLabel.hide();
		    }
		});

		// Extend crosshairs to also draw the label
		addEvent(Axis, 'afterDrawCrosshair', function (event) {

		    // Check if the label has to be drawn
		    if (
		        !defined(this.crosshair.label) ||
		        !this.crosshair.label.enabled ||
		        !this.cross
		    ) {
		        return;
		    }

		    var chart = this.chart,
		        options = this.options.crosshair.label,        // the label's options
		        horiz = this.horiz,                            // axis orientation
		        opposite = this.opposite,                    // axis position
		        left = this.left,                            // left position
		        top = this.top,                                // top position
		        crossLabel = this.crossLabel,                // the svgElement
		        posx,
		        posy,
		        crossBox,
		        formatOption = options.format,
		        formatFormat = '',
		        limit,
		        align,
		        tickInside = this.options.tickPosition === 'inside',
		        snap = this.crosshair.snap !== false,
		        value,
		        offset = 0,
		        // Use last available event (#5287)
		        e = event.e || (this.cross && this.cross.e),
		        point = event.point,
		        lin2log = this.lin2log,
		        min,
		        max;

		    if (this.isLog) {
		        min = lin2log(this.min);
		        max = lin2log(this.max);
		    } else {
		        min = this.min;
		        max = this.max;
		    }

		    align = (horiz ? 'center' : opposite ?
		        (this.labelAlign === 'right' ? 'right' : 'left') :
		        (this.labelAlign === 'left' ? 'left' : 'center'));

		    // If the label does not exist yet, create it.
		    if (!crossLabel) {
		        crossLabel = this.crossLabel = chart.renderer.label(
		                null,
		                null,
		                null,
		                options.shape || 'callout'
		            )
		            .addClass('highcharts-crosshair-label' + (
		                this.series[0] &&
		                ' highcharts-color-' + this.series[0].colorIndex)
		            )
		            .attr({
		                align: options.align || align,
		                padding: pick(options.padding, 8),
		                r: pick(options.borderRadius, 3),
		                zIndex: 2
		            })
		            .add(this.labelGroup);

        
		        // Presentational
		        crossLabel
		            .attr({
		                fill: options.backgroundColor ||
		                    (this.series[0] && this.series[0].color) ||
		                    '#666666',
		                stroke: options.borderColor || '',
		                'stroke-width': options.borderWidth || 0
		            })
		            .css(extend({
		                color: '#ffffff',
		                fontWeight: 'normal',
		                fontSize: '11px',
		                textAlign: 'center'
		            }, options.style));
        
		    }

		    if (horiz) {
		        posx = snap ? point.plotX + left : e.chartX;
		        posy = top + (opposite ? 0 : this.height);
		    } else {
		        posx = opposite ? this.width + left : 0;
		        posy = snap ? point.plotY + top : e.chartY;
		    }

		    if (!formatOption && !options.formatter) {
		        if (this.isDatetimeAxis) {
		            formatFormat = '%b %d, %Y';
		        }
		        formatOption =
		            '{value' + (formatFormat ? ':' + formatFormat : '') + '}';
		    }

		    // Show the label
		    value = snap ?
		        point[this.isXAxis ? 'x' : 'y'] :
		        this.toValue(horiz ? e.chartX : e.chartY);

		    crossLabel.attr({
		        text: formatOption ?
		            format(formatOption, { value: value }, chart.time) :
		            options.formatter.call(this, value),
		        x: posx,
		        y: posy,
		        // Crosshair should be rendered within Axis range (#7219)
		        visibility: value < min || value > max ? 'hidden' : 'visible'
		    });

		    crossBox = crossLabel.getBBox();

		    // now it is placed we can correct its position
		    if (horiz) {
		        if ((tickInside && !opposite) || (!tickInside && opposite)) {
		            posy = crossLabel.y - crossBox.height;
		        }
		    } else {
		        posy = crossLabel.y - (crossBox.height / 2);
		    }

		    // check the edges
		    if (horiz) {
		        limit = {
		            left: left - crossBox.x,
		            right: left + this.width - crossBox.x
		        };
		    } else {
		        limit = {
		            left: this.labelAlign === 'left' ? left : 0,
		            right: this.labelAlign === 'right' ?
		                left + this.width :
		                chart.chartWidth
		        };
		    }

		    // left edge
		    if (crossLabel.translateX < limit.left) {
		        offset = limit.left - crossLabel.translateX;
		    }
		    // right edge
		    if (crossLabel.translateX + crossBox.width >= limit.right) {
		        offset = -(crossLabel.translateX + crossBox.width - limit.right);
		    }

		    // show the crosslabel
		    crossLabel.attr({
		        x: posx + offset,
		        y: posy,
		        // First set x and y, then anchorX and anchorY, when box is actually
		        // calculated, #5702
		        anchorX: horiz ?
		            posx :
		            (this.opposite ? 0 : chart.chartWidth),
		        anchorY: horiz ?
		            (this.opposite ? chart.chartHeight : 0) :
		            posy + crossBox.height / 2
		    });
		});

		/* ****************************************************************************
		 * Start value compare logic                                                  *
		 *****************************************************************************/

		/**
		 * Extend series.init by adding a method to modify the y value used for plotting
		 * on the y axis. This method is called both from the axis when finding dataMin
		 * and dataMax, and from the series.translate method.
		 */
		seriesProto.init = function () {

		    // Call base method
		    seriesInit.apply(this, arguments);

		    // Set comparison mode
		    this.setCompare(this.options.compare);
		};

		/**
		 * Highstock only. Set the {@link
		 * http://api.highcharts.com/highstock/plotOptions.series.compare|
		 * compare} mode of the series after render time. In most cases it is more
		 * useful running {@link Axis#setCompare} on the X axis to update all its
		 * series.
		 *
		 * @function setCompare
		 * @memberof Series.prototype
		 *
		 * @param  {String} compare
		 *         Can be one of `null`, `"percent"` or `"value"`.
		 */
		seriesProto.setCompare = function (compare) {

		    // Set or unset the modifyValue method
		    this.modifyValue = (compare === 'value' || compare === 'percent') ?
		        function (value, point) {
		            var compareValue = this.compareValue;

		            if (
		                value !== undefined &&
		                compareValue !== undefined
		            ) { // #2601, #5814

		                // Get the modified value
		                if (compare === 'value') {
		                    value -= compareValue;

		                // Compare percent
		                } else {
		                    value = 100 * (value / compareValue) -
		                        (this.options.compareBase === 100 ? 0 : 100);
		                }

		                // record for tooltip etc.
		                if (point) {
		                    point.change = value;
		                }

		                return value;
		            }
		        } :
		        null;

		    // Survive to export, #5485
		    this.userOptions.compare = compare;

		    // Mark dirty
		    if (this.chart.hasRendered) {
		        this.isDirty = true;
		    }

		};

		/**
		 * Extend series.processData by finding the first y value in the plot area,
		 * used for comparing the following values
		 */
		seriesProto.processData = function () {
		    var series = this,
		        i,
		        keyIndex = -1,
		        processedXData,
		        processedYData,
		        compareStart = series.options.compareStart === true ? 0 : 1,
		        length,
		        compareValue;

		    // call base method
		    seriesProcessData.apply(this, arguments);

		    if (series.xAxis && series.processedYData) { // not pies

		        // local variables
		        processedXData = series.processedXData;
		        processedYData = series.processedYData;
		        length = processedYData.length;

		        // For series with more than one value (range, OHLC etc), compare
		        // against close or the pointValKey (#4922, #3112)
		        if (series.pointArrayMap) {
		            // Use close if present (#3112)
		            keyIndex = inArray('close', series.pointArrayMap);
		            if (keyIndex === -1) {
		                keyIndex = inArray(
		                    series.pointValKey || 'y',
		                    series.pointArrayMap
		                );
		            }
		        }

		        // find the first value for comparison
		        for (i = 0; i < length - compareStart; i++) {
		            compareValue = processedYData[i] && keyIndex > -1 ?
		                processedYData[i][keyIndex] :
		                processedYData[i];
		            if (
		                isNumber(compareValue) &&
		                processedXData[i + compareStart] >= series.xAxis.min &&
		                compareValue !== 0
		            ) {
		                series.compareValue = compareValue;
		                break;
		            }
		        }
		    }
		};

		/**
		 * Modify series extremes
		 */
		wrap(seriesProto, 'getExtremes', function (proceed) {
		    var extremes;

		    proceed.apply(this, [].slice.call(arguments, 1));

		    if (this.modifyValue) {
		        extremes = [
		            this.modifyValue(this.dataMin),
		            this.modifyValue(this.dataMax)
		        ];
		        this.dataMin = arrayMin(extremes);
		        this.dataMax = arrayMax(extremes);
		    }
		});

		/**
		 * Highstock only. Set the compare mode on all series belonging to an Y axis
		 * after render time.
		 *
		 * @param  {String} compare
		 *         The compare mode. Can be one of `null`, `"value"` or `"percent"`.
		 * @param  {Boolean} [redraw=true]
		 *         Whether to redraw the chart or to wait for a later call to {@link
		 *         Chart#redraw},
		 *
		 * @function setCompare
		 * @memberof Axis.prototype
		 *
		 * @see    {@link https://api.highcharts.com/highstock/series.plotOptions.compare|
		 *         series.plotOptions.compare}
		 *
		 * @sample stock/members/axis-setcompare/
		 *         Set compoare
		 */
		Axis.prototype.setCompare = function (compare, redraw) {
		    if (!this.isXAxis) {
		        each(this.series, function (series) {
		            series.setCompare(compare);
		        });
		        if (pick(redraw, true)) {
		            this.chart.redraw();
		        }
		    }
		};

		/**
		 * Extend the tooltip formatter by adding support for the point.change variable
		 * as well as the changeDecimals option
		 */
		Point.prototype.tooltipFormatter = function (pointFormat) {
		    var point = this;

		    pointFormat = pointFormat.replace(
		        '{point.change}',
		        (point.change > 0 ? '+' : '') + H.numberFormat(
		            point.change,
		            pick(point.series.tooltipOptions.changeDecimals, 2)
		        )
		    );

		    return pointTooltipFormatter.apply(this, [pointFormat]);
		};

		/* ****************************************************************************
		 * End value compare logic                                                    *
		 *****************************************************************************/


		/**
		 * Extend the Series prototype to create a separate series clip box. This is
		 * related to using multiple panes, and a future pane logic should incorporate
		 * this feature (#2754).
		 */
		wrap(Series.prototype, 'render', function (proceed) {
		    var clipHeight;
		    // Only do this on not 3d (#2939, #5904) nor polar (#6057) charts, and only
		    // if the series type handles clipping in the animate method (#2975).
		    if (
		        !(this.chart.is3d && this.chart.is3d()) &&
		        !this.chart.polar &&
		        this.xAxis &&
		        !this.xAxis.isRadial // Gauge, #6192
		    ) {
		        // Include xAxis line width, #8031
		        clipHeight = this.yAxis.len - (this.xAxis.axisLine ?
		            Math.floor(this.xAxis.axisLine.strokeWidth() / 2) :
		            0);

		        // First render, initial clip box
		        if (!this.clipBox && this.animate) {
		            this.clipBox = merge(this.chart.clipBox);
		            this.clipBox.width = this.xAxis.len;
		            this.clipBox.height = clipHeight;

		        // On redrawing, resizing etc, update the clip rectangle
		        } else if (this.chart[this.sharedClipKey]) {
		            this.chart[this.sharedClipKey].attr({
		                width: this.xAxis.len,
		                height: clipHeight
		            });
		        // #3111
		        } else if (this.clipBox) {
		            this.clipBox.width = this.xAxis.len;
		            this.clipBox.height = clipHeight;
		        }
		    }
		    proceed.call(this);
		});

		wrap(Chart.prototype, 'getSelectedPoints', function (proceed) {
		    var points = proceed.call(this);

		    each(this.series, function (serie) {
		        // series.points - for grouped points (#6445)
		        if (serie.hasGroupedData) {
		            points = points.concat(grep(serie.points || [], function (point) {
		                return point.selected;
		            }));
		        }
		    });
		    return points;
		});

		addEvent(Chart, 'update', function (e) {
		    var options = e.options;
		    // Use case: enabling scrollbar from a disabled state.
		    // Scrollbar needs to be initialized from a controller, Navigator in this
		    // case (#6615)
		    if ('scrollbar' in options && this.navigator) {
		        merge(true, this.options.scrollbar, options.scrollbar);
		        this.navigator.update({}, false);
		        delete options.scrollbar;
		    }
		});

	}(Highcharts));
	return (function () {


	}());
}));


/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.routing */ "./src/app/auth/auth.routing.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _market_market_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./market/market.page */ "./src/app/auth/market/market.page.ts");
/* harmony import */ var angular_highcharts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-highcharts */ "./node_modules/angular-highcharts/angular-highcharts.es5.js");
/* harmony import */ var highcharts_modules_stock_src__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! highcharts/modules/stock.src */ "./node_modules/highcharts/modules/stock.src.js");
/* harmony import */ var highcharts_modules_stock_src__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_stock_src__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _balance_balance_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./balance/balance.page */ "./src/app/auth/balance/balance.page.ts");
/* harmony import */ var _deposit_deposit_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./deposit/deposit.page */ "./src/app/auth/deposit/deposit.page.ts");
/* harmony import */ var _withdraw_withdraw_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./withdraw/withdraw.page */ "./src/app/auth/withdraw/withdraw.page.ts");
/* harmony import */ var _transaction_transaction_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./transaction/transaction.page */ "./src/app/auth/transaction/transaction.page.ts");
/* harmony import */ var _tlwallet_tlwallet_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./tlwallet/tlwallet.page */ "./src/app/auth/tlwallet/tlwallet.page.ts");
/* harmony import */ var _usdwallet_usdwallet_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./usdwallet/usdwallet.page */ "./src/app/auth/usdwallet/usdwallet.page.ts");
/* harmony import */ var _eurowallet_eurowallet_page__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./eurowallet/eurowallet.page */ "./src/app/auth/eurowallet/eurowallet.page.ts");
/* harmony import */ var _profile_profile_page__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./profile/profile.page */ "./src/app/auth/profile/profile.page.ts");
/* harmony import */ var _changepassword_changepassword_page__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./changepassword/changepassword.page */ "./src/app/auth/changepassword/changepassword.page.ts");
/* harmony import */ var _bank_bank_page__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./bank/bank.page */ "./src/app/auth/bank/bank.page.ts");
/* harmony import */ var _smsauth_smsauth_page__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./smsauth/smsauth.page */ "./src/app/auth/smsauth/smsauth.page.ts");
/* harmony import */ var _googleauth_googleauth_page__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./googleauth/googleauth.page */ "./src/app/auth/googleauth/googleauth.page.ts");
/* harmony import */ var _emailauth_emailauth_page__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./emailauth/emailauth.page */ "./src/app/auth/emailauth/emailauth.page.ts");
/* harmony import */ var _verifyidentity_verifyidentity_page__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./verifyidentity/verifyidentity.page */ "./src/app/auth/verifyidentity/verifyidentity.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_auth_routing__WEBPACK_IMPORTED_MODULE_3__["AuthRoutes"]),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                angular_highcharts__WEBPACK_IMPORTED_MODULE_6__["ChartModule"]
            ],
            declarations: [
                _market_market_page__WEBPACK_IMPORTED_MODULE_5__["MarketPage"],
                _balance_balance_page__WEBPACK_IMPORTED_MODULE_8__["BalancePage"],
                _deposit_deposit_page__WEBPACK_IMPORTED_MODULE_9__["DepositPage"],
                _withdraw_withdraw_page__WEBPACK_IMPORTED_MODULE_10__["WithdrawPage"],
                _transaction_transaction_page__WEBPACK_IMPORTED_MODULE_11__["TransactionPage"],
                _tlwallet_tlwallet_page__WEBPACK_IMPORTED_MODULE_12__["TlwalletPage"],
                _usdwallet_usdwallet_page__WEBPACK_IMPORTED_MODULE_13__["UsdwalletPage"],
                _eurowallet_eurowallet_page__WEBPACK_IMPORTED_MODULE_14__["EurowalletPage"],
                _profile_profile_page__WEBPACK_IMPORTED_MODULE_15__["ProfilePage"],
                _changepassword_changepassword_page__WEBPACK_IMPORTED_MODULE_16__["ChangePasswordPage"],
                _bank_bank_page__WEBPACK_IMPORTED_MODULE_17__["BankPage"],
                _smsauth_smsauth_page__WEBPACK_IMPORTED_MODULE_18__["SMSAuthPage"],
                _googleauth_googleauth_page__WEBPACK_IMPORTED_MODULE_19__["GoogleAuthPage"],
                _emailauth_emailauth_page__WEBPACK_IMPORTED_MODULE_20__["EmailAuthPage"],
                _verifyidentity_verifyidentity_page__WEBPACK_IMPORTED_MODULE_21__["VerifyIdentityPage"]
            ],
            providers: [
                {
                    provide: angular_highcharts__WEBPACK_IMPORTED_MODULE_6__["HIGHCHARTS_MODULES"],
                    useFactory: function () { return [highcharts_modules_stock_src__WEBPACK_IMPORTED_MODULE_7__]; }
                }
            ]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.routing.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.routing.ts ***!
  \**************************************/
/*! exports provided: AuthRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutes", function() { return AuthRoutes; });
/* harmony import */ var _market_market_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./market/market.page */ "./src/app/auth/market/market.page.ts");
/* harmony import */ var _balance_balance_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./balance/balance.page */ "./src/app/auth/balance/balance.page.ts");
/* harmony import */ var _deposit_deposit_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./deposit/deposit.page */ "./src/app/auth/deposit/deposit.page.ts");
/* harmony import */ var _withdraw_withdraw_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./withdraw/withdraw.page */ "./src/app/auth/withdraw/withdraw.page.ts");
/* harmony import */ var _transaction_transaction_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./transaction/transaction.page */ "./src/app/auth/transaction/transaction.page.ts");
/* harmony import */ var _tlwallet_tlwallet_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tlwallet/tlwallet.page */ "./src/app/auth/tlwallet/tlwallet.page.ts");
/* harmony import */ var _usdwallet_usdwallet_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./usdwallet/usdwallet.page */ "./src/app/auth/usdwallet/usdwallet.page.ts");
/* harmony import */ var _eurowallet_eurowallet_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./eurowallet/eurowallet.page */ "./src/app/auth/eurowallet/eurowallet.page.ts");
/* harmony import */ var _profile_profile_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./profile/profile.page */ "./src/app/auth/profile/profile.page.ts");
/* harmony import */ var _changepassword_changepassword_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./changepassword/changepassword.page */ "./src/app/auth/changepassword/changepassword.page.ts");
/* harmony import */ var _bank_bank_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./bank/bank.page */ "./src/app/auth/bank/bank.page.ts");
/* harmony import */ var _smsauth_smsauth_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./smsauth/smsauth.page */ "./src/app/auth/smsauth/smsauth.page.ts");
/* harmony import */ var _googleauth_googleauth_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./googleauth/googleauth.page */ "./src/app/auth/googleauth/googleauth.page.ts");
/* harmony import */ var _emailauth_emailauth_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./emailauth/emailauth.page */ "./src/app/auth/emailauth/emailauth.page.ts");
/* harmony import */ var _verifyidentity_verifyidentity_page__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./verifyidentity/verifyidentity.page */ "./src/app/auth/verifyidentity/verifyidentity.page.ts");















var AuthRoutes = [
    { path: 'market', component: _market_market_page__WEBPACK_IMPORTED_MODULE_0__["MarketPage"] },
    { path: 'balance', component: _balance_balance_page__WEBPACK_IMPORTED_MODULE_1__["BalancePage"] },
    { path: 'deposit', component: _deposit_deposit_page__WEBPACK_IMPORTED_MODULE_2__["DepositPage"] },
    { path: 'withdraw', component: _withdraw_withdraw_page__WEBPACK_IMPORTED_MODULE_3__["WithdrawPage"] },
    { path: 'transactions', component: _transaction_transaction_page__WEBPACK_IMPORTED_MODULE_4__["TransactionPage"] },
    { path: 'tlwallet', component: _tlwallet_tlwallet_page__WEBPACK_IMPORTED_MODULE_5__["TlwalletPage"] },
    { path: 'usdwallet', component: _usdwallet_usdwallet_page__WEBPACK_IMPORTED_MODULE_6__["UsdwalletPage"] },
    { path: 'eurowallet', component: _eurowallet_eurowallet_page__WEBPACK_IMPORTED_MODULE_7__["EurowalletPage"] },
    { path: 'profile', component: _profile_profile_page__WEBPACK_IMPORTED_MODULE_8__["ProfilePage"] },
    { path: 'changepwd', component: _changepassword_changepassword_page__WEBPACK_IMPORTED_MODULE_9__["ChangePasswordPage"] },
    { path: 'bank', component: _bank_bank_page__WEBPACK_IMPORTED_MODULE_10__["BankPage"] },
    { path: 'smsauth', component: _smsauth_smsauth_page__WEBPACK_IMPORTED_MODULE_11__["SMSAuthPage"] },
    { path: 'googleauth', component: _googleauth_googleauth_page__WEBPACK_IMPORTED_MODULE_12__["GoogleAuthPage"] },
    { path: 'emailauth', component: _emailauth_emailauth_page__WEBPACK_IMPORTED_MODULE_13__["EmailAuthPage"] },
    { path: 'verifyidentity', component: _verifyidentity_verifyidentity_page__WEBPACK_IMPORTED_MODULE_14__["VerifyIdentityPage"] },
];


/***/ }),

/***/ "./src/app/auth/balance/balance.page.html":
/*!************************************************!*\
  !*** ./src/app/auth/balance/balance.page.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-container\">\r\n    <div class=\"container\">\r\n        <h3 class=\"mb-4\">\r\n            {{'LABEL.BALANCE' | translate}}\r\n        </h3>\r\n        <div class=\"d-flex align-items-center\">\r\n            <div class=\"mr-5\">\r\n                {{'WALLET.ESTIMATED_VALUE' | translate}} :\r\n                <h6>{{total_btc | number:'1.8-8'}} BTC / <i class=\"fa fa-turkish-lira\"></i> {{(total_btc * btc_tl) | number:'1.2-2'}}</h6>\r\n            </div>\r\n            <!--<div class=\"mr-5\">-->\r\n                <!--{{'balance.24h withdrawa Limit' | translate}} :-->\r\n                <!--<h6>100 BTC</h6>-->\r\n            <!--</div>-->\r\n            <!--<div>-->\r\n                <!--{{'balance.In Use' | translate}} :-->\r\n                <!--<h6>0 BTC</h6>-->\r\n            <!--</div>-->\r\n            <input type=\"text\" class=\"form-control ml-auto w-auto\" placeholder=\"{{'LABEL.SEARCH' | translate}}\" [(ngModel)]=\"filtertxt\" (ngModelChange)=\"onFilter()\"/>\r\n        </div>\r\n\r\n        <div class=\"box table-responsive balance-table\">\r\n            <loader *ngIf=\"loading\"></loader>\r\n            <table class=\"table\">\r\n                <thead>\r\n                <tr>\r\n                    <th>{{'LABEL.COIN' | translate}}</th>\r\n                    <th>{{'LABEL.FULL_NAME' | translate}}</th>\r\n                    <th class=\"text-right\" (click)=\"onSortTable('total_amount')\">{{'LABEL.TOTAL_BALANCE' | translate}}\r\n                        <i class=\"fa\" [ngClass]=\"{'fa-caret-up': sortColumn == 'total_amount' && sortOrder == 'asc', 'fa-caret-down': sortColumn == 'total_amount' && sortOrder == 'desc'}\"></i>\r\n                    </th>\r\n                    <th class=\"text-right\" (click)=\"onSortTable('order_amount')\">{{'LABEL.IN_ORDER' | translate}}\r\n                        <i class=\"fa\" [ngClass]=\"{'fa-caret-up': sortColumn == 'order_amount' && sortOrder == 'asc', 'fa-caret-down': sortColumn == 'order_amount' && sortOrder == 'desc'}\"></i>\r\n                    </th>\r\n                    <th class=\"text-right\" (click)=\"onSortTable('available_amount')\">{{'LABEL.AVAILABLE_BALANCE' | translate}}\r\n                        <i class=\"fa\" [ngClass]=\"{'fa-caret-up': sortColumn == 'available_amount' && sortOrder == 'asc', 'fa-caret-down': sortColumn == 'available_amount' && sortOrder == 'desc'}\"></i>\r\n                    </th>\r\n                    <th class=\"text-right\" (click)=\"onSortTable('btc_value')\">{{'LABEL.BTC_VALUE' | translate}}\r\n                        <i class=\"fa\" [ngClass]=\"{'fa-caret-up': sortColumn == 'btc_value' && sortOrder == 'asc', 'fa-caret-down': sortColumn == 'btc_value' && sortOrder == 'desc'}\"></i>\r\n                    </th>\r\n                    <th></th>\r\n                </tr>\r\n                </thead>\r\n                <tbody>\r\n                <tr *ngFor=\"let coin of coins\">\r\n                    <td><img src=\"assets/img/coin/{{coin.coin}}.png\" style=\"height: 20px;\"> {{coin.coin}}</td>\r\n                    <td>{{coin.fullname}}</td>\r\n                    <td class=\"text-right\">{{coin.total_amount | number:'1.8-8'}}</td>\r\n                    <td class=\"text-right\">{{coin.order_amount | number:'1.8-8'}}</td>\r\n                    <td class=\"text-right\">{{coin.available_amount | number:'1.8-8'}}</td>\r\n                    <td class=\"text-right\">{{(coin.available_amount * coin.btc_price) | number:'1.8-8'}}</td>\r\n                    <td class=\"text-center\">\r\n                        <button type=\"button\" class=\"btn btn-info\" (click)=\"onClickDeposit(coin.coin)\">\r\n                            <i class=\"mdi mdi-view-dashboard\"></i>Deposit\r\n                        </button>\r\n                        <button type=\"button\" class=\"ml-3 btn btn-success\" (click)=\"onClickWithdraw(coin.coin)\">\r\n                            <i class=\"mdi mdi-view-dashboard\"></i>Withdraw\r\n                        </button>\r\n                    </td>\r\n                </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/auth/balance/balance.page.scss":
/*!************************************************!*\
  !*** ./src/app/auth/balance/balance.page.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h6 {\n  font-size: 16px; }\n\n.mr-5 {\n  margin-right: 105px !important; }\n\n.balance-table {\n  max-height: 450px;\n  overflow-x: auto; }\n\n.balance-table thead {\n    cursor: pointer; }\n\n.btn-sm {\n  width: 80px;\n  height: 20px;\n  font-size: 12px;\n  padding: 0;\n  line-height: 12px; }\n\n.btn-secondary {\n  background: #c1c1c1;\n  border: 0; }\n"

/***/ }),

/***/ "./src/app/auth/balance/balance.page.ts":
/*!**********************************************!*\
  !*** ./src/app/auth/balance/balance.page.ts ***!
  \**********************************************/
/*! exports provided: BalancePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BalancePage", function() { return BalancePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_marketApi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/marketApi.service */ "./src/app/services/marketApi.service.ts");
/* harmony import */ var _services_notify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/notify.service */ "./src/app/services/notify.service.ts");
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/settings.service */ "./src/app/services/settings.service.ts");
/* harmony import */ var _services_balance_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/balance.service */ "./src/app/services/balance.service.ts");
/* harmony import */ var _services_accountApi_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/accountApi.service */ "./src/app/services/accountApi.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var BalancePage = /** @class */ (function () {
    function BalancePage(router, marketApi, accountApi, notify, settings, balance) {
        this.router = router;
        this.marketApi = marketApi;
        this.accountApi = accountApi;
        this.notify = notify;
        this.settings = settings;
        this.balance = balance;
        this.all_coins = [];
        this.coins = [];
        this.pairs = {
            TL: {},
            BTC: {},
            ETH: {},
            XRP: {},
            USD: {},
            USDT: {},
            EURO: {}
        };
        this.btc_tl = 0;
        this.loading = true;
        this.sortColumn = 'total_amount';
        this.sortOrder = 'desc';
        this.filtertxt = '';
        this.total_btc = 0;
    }
    BalancePage.prototype.ngOnInit = function () {
        var _this = this;
        this.marketApi.getCoinPairInfo({}).subscribe(function (res) {
            if (res.success) {
                for (var i = 0; i < res.data.length; i++) {
                    if (res.data[i].market_coin != 'TL' && res.data[i].market_coin != 'BTC' && res.data[i].market_coin != 'ETH' && res.data[i].market_coin != 'USD' && res.data[i].market_coin != 'USDT' &&
                        res.data[i].market_coin != 'XRP' && res.data[i].market_coin != 'EURO')
                        continue;
                    _this.pairs[res.data[i].market_coin][res.data[i].coin] = res.data[i];
                }
                _this.btc_tl = _this.pairs.TL['BTC'].last_price;
                _this.accountApi.getAccountBalance().subscribe(function (res) {
                    _this.loading = false;
                    if (res.success) {
                        for (var i = 0; i < res.data.length; i++) {
                            var coin = res.data[i];
                            if (coin.coin == 'BTC') {
                                res.data[i].btc_price = 1;
                            }
                            else if (coin.coin == 'TL' && _this.btc_tl > 0) {
                                res.data[i].btc_price = 1 / _this.btc_tl;
                            }
                            else if (coin.coin == 'USD' && _this.pairs.USD['BTC'].last_price > 0) {
                                res.data[i].btc_price = 1 / _this.pairs.USD['BTC'].last_price;
                            }
                            else if (coin.coin == 'EURO' && _this.pairs.EURO['BTC'].last_price > 0) {
                                res.data[i].btc_price = 1 / _this.pairs.EURO['BTC'].last_price;
                            }
                            else if (coin.coin == 'USDT' && _this.pairs.USDT['BTC'].last_price > 0) {
                                res.data[i].btc_price = 1 / _this.pairs.USDT['BTC'].last_price;
                            }
                            else if (_this.pairs.TL[coin.coin] && _this.pairs.TL[coin.coin].last_price && _this.btc_tl > 0) {
                                res.data[i].btc_price = _this.pairs.TL[coin.coin].last_price / _this.btc_tl;
                            }
                            else if (_this.pairs.BTC[coin.coin] && _this.pairs.BTC[coin.coin].last_price) {
                                res.data[i].btc_price = _this.pairs.BTC[coin.coin].last_price;
                            }
                            else {
                                res.data[i].btc_price = 0;
                            }
                            _this.total_btc += res.data[i].available_amount * res.data[i].btc_price;
                        }
                        _this.all_coins = res.data;
                        _this.filterCoin();
                    }
                }, function (err) {
                    _this.loading = false;
                });
            }
            else {
                _this.loading = false;
            }
        }, function (err) {
            _this.loading = false;
        });
    };
    BalancePage.prototype.onClickDeposit = function (coin) {
        if (coin == 'TL') {
            this.router.navigate(['/lira']);
        }
        else if (coin == 'USD') {
            this.router.navigate(['/usd']);
        }
        else if (coin == 'EURO') {
            this.router.navigate(['/euro']);
        }
        else {
            window.localStorage.setItem('deposit_coin', coin);
            this.router.navigate(['/deposit']);
        }
    };
    BalancePage.prototype.onClickWithdraw = function (coin) {
        if (coin == 'TL') {
            this.router.navigate(['/lira']);
        }
        else if (coin == 'USD') {
            this.router.navigate(['/usd']);
        }
        else if (coin == 'EURO') {
            this.router.navigate(['/euro']);
        }
        else {
            window.localStorage.setItem('withdraw_coin', coin);
            this.router.navigate(['/withdraw']);
        }
    };
    BalancePage.prototype.filterCoin = function () {
        var _this = this;
        this.coins = this.all_coins.filter(function (coin) { return coin.coin.toLowerCase().indexOf(_this.filtertxt.toLowerCase()) !== -1 || coin.fullname.toLowerCase().indexOf(_this.filtertxt.toLowerCase()) !== -1; });
        if (this.sortColumn != '') {
            var _parent_1 = this;
            this.coins = this.coins.sort(function (r1, r2) {
                var r1v, r2v;
                if (_parent_1.sortColumn == 'btc_value') {
                    r1v = r1['available_amount'] * r1['btc_price'];
                    r2v = r2['available_amount'] * r2['btc_price'];
                }
                else {
                    r1v = r1[_parent_1.sortColumn];
                    r2v = r2[_parent_1.sortColumn];
                }
                if (!isNaN(r1v))
                    r1v = Number(r1v);
                if (!isNaN(r2v))
                    r2v = Number(r2v);
                if (_parent_1.sortOrder == 'asc') {
                    return r1v > r2v ? 1 : (r1v == r2v ? 0 : -1);
                }
                else {
                    return r1v < r2v ? 1 : (r1v == r2v ? 0 : -1);
                }
            });
        }
    };
    BalancePage.prototype.onFilter = function () {
        this.filterCoin();
    };
    BalancePage.prototype.onSortTable = function (header) {
        if (this.sortColumn == header && this.sortOrder == 'desc') {
            this.sortOrder = 'asc';
        }
        else {
            this.sortOrder = 'desc';
        }
        this.sortColumn = header;
        this.filterCoin();
    };
    BalancePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-balance-page',
            template: __webpack_require__(/*! ./balance.page.html */ "./src/app/auth/balance/balance.page.html"),
            styles: [__webpack_require__(/*! ./balance.page.scss */ "./src/app/auth/balance/balance.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_marketApi_service__WEBPACK_IMPORTED_MODULE_2__["MarketApiService"],
            _services_accountApi_service__WEBPACK_IMPORTED_MODULE_6__["AccountApiService"],
            _services_notify_service__WEBPACK_IMPORTED_MODULE_3__["NotifyService"],
            _services_settings_service__WEBPACK_IMPORTED_MODULE_4__["SettingsService"],
            _services_balance_service__WEBPACK_IMPORTED_MODULE_5__["BalanceService"]])
    ], BalancePage);
    return BalancePage;
}());



/***/ }),

/***/ "./src/app/auth/bank/bank.page.html":
/*!******************************************!*\
  !*** ./src/app/auth/bank/bank.page.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-container\">\r\n    <div class=\"container\">\r\n        <h3 class=\"text-center mb-4\">\r\n            {{'BANK.TITLE' | translate}}\r\n        </h3>\r\n        <form class=\"box\">\r\n            <div class=\"mx-auto\" style=\"max-width: 690px\">\r\n                <div class=\"form-group row\">\r\n                    <label class=\"col-sm-4  col-form-label text-sm-right pr-0\">\r\n                        {{'BANK.IBAN_CODE' | translate}}:\r\n                    </label>\r\n                    <div class=\"col-sm-6\">\r\n                        <input type=\"text\" class=\"form-control\" name=\"iban_code\" [(ngModel)]=\"bank.iban_code\"/>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                    <label class=\"col-sm-4  col-form-label text-sm-right pr-0\">\r\n                        {{'BANK.IBAN_CODE_USD' | translate}}:\r\n                    </label>\r\n                    <div class=\"col-sm-6\">\r\n                        <input type=\"text\" class=\"form-control\" name=\"iban_code_usd\" [(ngModel)]=\"bank.iban_code_usd\"/>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                    <label class=\"col-sm-4  col-form-label text-sm-right pr-0\">\r\n                        {{'BANK.IBAN_CODE_EURO' | translate}}:\r\n                    </label>\r\n                    <div class=\"col-sm-6\">\r\n                        <input type=\"text\" class=\"form-control\" name=\"iban_code_euro\" [(ngModel)]=\"bank.iban_code_euro\"/>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row mt-2\">\r\n                    <div class=\"col-sm-12 text-center\">\r\n                        <button class=\"btn btn-warning mt-3\" (click)=\"onUpdateBank()\">{{'BUTTON.UPDATE' | translate}}</button>\r\n                    </div>\r\n                </div>\r\n\r\n                <!--<hr class=\"mt-5 mb-4\"/>-->\r\n\r\n                <!--<div class=\"text-center\">-->\r\n                    <!--<strong class=\"text-yellow\">{{'COMMON.NOTE' | translate}}:</strong> {{'CHANGEPASSWORD.NOTE1' | translate}}-->\r\n                <!--</div>-->\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/auth/bank/bank.page.scss":
/*!******************************************!*\
  !*** ./src/app/auth/bank/bank.page.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box {\n  padding: 50px 15px; }\n\n.btn-warning {\n  width: 180px;\n  height: 35px; }\n"

/***/ }),

/***/ "./src/app/auth/bank/bank.page.ts":
/*!****************************************!*\
  !*** ./src/app/auth/bank/bank.page.ts ***!
  \****************************************/
/*! exports provided: BankPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BankPage", function() { return BankPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_accountApi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/accountApi.service */ "./src/app/services/accountApi.service.ts");
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





var BankPage = /** @class */ (function () {
    function BankPage(router, accountApi, notify, settings) {
        this.router = router;
        this.accountApi = accountApi;
        this.notify = notify;
        this.settings = settings;
        this.bank = {
            iban_code: '',
            iban_code_usd: '',
            iban_code_euro: ''
        };
    }
    BankPage.prototype.ngOnInit = function () {
        var _this = this;
        this.accountApi.getAccountBankInfo({}).subscribe(function (res) {
            if (res.success) {
                _this.bank = res.data;
            }
        }, function (err) {
        });
    };
    BankPage.prototype.onUpdateBank = function () {
        var _this = this;
        this.accountApi.saveAccountBankInfo(this.bank).subscribe(function (res) {
            if (res.success) {
                _this.notify.showSuccess('IBAN CODE was updated successfully.');
                _this.settings.setUserSetting('iban_code', _this.bank.iban_code);
                _this.settings.setUserSetting('iban_code_usd', _this.bank.iban_code_usd);
                _this.settings.setUserSetting('iban_code_euro', _this.bank.iban_code_euro);
            }
            else {
                _this.notify.showWarning(res.error);
            }
        }, function (err) {
            _this.notify.showError(err);
        });
    };
    BankPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bank-page',
            template: __webpack_require__(/*! ./bank.page.html */ "./src/app/auth/bank/bank.page.html"),
            styles: [__webpack_require__(/*! ./bank.page.scss */ "./src/app/auth/bank/bank.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_accountApi_service__WEBPACK_IMPORTED_MODULE_2__["AccountApiService"],
            _services_notify_service__WEBPACK_IMPORTED_MODULE_3__["NotifyService"],
            _services_settings_service__WEBPACK_IMPORTED_MODULE_4__["SettingsService"]])
    ], BankPage);
    return BankPage;
}());



/***/ }),

/***/ "./src/app/auth/changepassword/changepassword.page.html":
/*!**************************************************************!*\
  !*** ./src/app/auth/changepassword/changepassword.page.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-container\">\r\n    <div class=\"container\">\r\n        <h3 class=\"text-center mb-4\">\r\n            {{'CHANGEPASSWORD.TITLE' | translate}}\r\n        </h3>\r\n        <form class=\"box\">\r\n            <div class=\"mx-auto\" style=\"max-width: 690px\">\r\n                <div class=\"form-group row\">\r\n                    <label class=\"col-sm-5  col-form-label text-sm-right pr-0\">\r\n                        {{'CHANGEPASSWORD.OLD_PASSWORD' | translate}}:\r\n                    </label>\r\n                    <div class=\"col-sm-5\">\r\n                        <input type=\"password\" class=\"form-control\" name=\"curPassword\" [(ngModel)]=\"pwd.curPassword\"/>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                    <label class=\"col-sm-5  col-form-label text-sm-right pr-0\">\r\n                        {{'CHANGEPASSWORD.NEW_PASSWORD' | translate}}:\r\n                    </label>\r\n                    <div class=\"col-sm-5\">\r\n                        <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"pwd.password\"/>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                    <label class=\"col-sm-5  col-form-label text-sm-right pr-0\">\r\n                        {{'CHANGEPASSWORD.CONFIRM_PASSWORD' | translate}}:\r\n                    </label>\r\n                    <div class=\"col-sm-5\">\r\n                        <input type=\"password\" class=\"form-control\" name=\"confirmPassword\" [(ngModel)]=\"pwd.confirmPassword\"/>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row mt-2\">\r\n                    <div class=\"col-sm-12 text-center\">\r\n                        <button class=\"btn btn-warning mt-3\" (click)=\"onChangePwd()\">{{'CHANGEPASSWORD.CHANGE_PASSWORD' | translate}}</button>\r\n                    </div>\r\n                </div>\r\n\r\n                <!--<hr class=\"mt-5 mb-4\"/>-->\r\n\r\n                <!--<div class=\"text-center\">-->\r\n                    <!--<strong class=\"text-yellow\">{{'COMMON.NOTE' | translate}}:</strong> {{'CHANGEPASSWORD.NOTE1' | translate}}-->\r\n                <!--</div>-->\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/auth/changepassword/changepassword.page.scss":
/*!**************************************************************!*\
  !*** ./src/app/auth/changepassword/changepassword.page.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box {\n  padding: 50px 15px; }\n\n.btn-warning {\n  width: 180px;\n  height: 35px; }\n"

/***/ }),

/***/ "./src/app/auth/changepassword/changepassword.page.ts":
/*!************************************************************!*\
  !*** ./src/app/auth/changepassword/changepassword.page.ts ***!
  \************************************************************/
/*! exports provided: ChangePasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordPage", function() { return ChangePasswordPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_accountApi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/accountApi.service */ "./src/app/services/accountApi.service.ts");
/* harmony import */ var _services_notify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/notify.service */ "./src/app/services/notify.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChangePasswordPage = /** @class */ (function () {
    function ChangePasswordPage(router, accountApi, notify) {
        this.router = router;
        this.accountApi = accountApi;
        this.notify = notify;
        this.pwd = {
            curPassword: '',
            password: '',
            confirmPassword: ''
        };
    }
    ChangePasswordPage.prototype.ngOnInit = function () {
    };
    ChangePasswordPage.prototype.onChangePwd = function () {
        var _this = this;
        if (this.pwd.password == '' || this.pwd.curPassword == '') {
            this.notify.showWarning('Please enter current password and new Password');
            return;
        }
        if (this.pwd.password != this.pwd.confirmPassword) {
            this.notify.showWarning('Password does not match');
            return;
        }
        this.accountApi.changePassword(this.pwd).subscribe(function (res) {
            if (res.success) {
                _this.notify.showSuccess('Your password changed successfully.');
            }
            else {
                _this.notify.showWarning(res.error);
            }
        }, function (err) {
            _this.notify.showError(err);
        });
    };
    ChangePasswordPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-changepassword-page',
            template: __webpack_require__(/*! ./changepassword.page.html */ "./src/app/auth/changepassword/changepassword.page.html"),
            styles: [__webpack_require__(/*! ./changepassword.page.scss */ "./src/app/auth/changepassword/changepassword.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_accountApi_service__WEBPACK_IMPORTED_MODULE_2__["AccountApiService"],
            _services_notify_service__WEBPACK_IMPORTED_MODULE_3__["NotifyService"]])
    ], ChangePasswordPage);
    return ChangePasswordPage;
}());



/***/ }),

/***/ "./src/app/auth/deposit/deposit.page.html":
/*!************************************************!*\
  !*** ./src/app/auth/deposit/deposit.page.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-container\">\r\n    <div class=\"container\">\r\n        <h3 class=\"mb-4\">\r\n            {{'HEADER.DEPOSIT' | translate}}\r\n        </h3>\r\n\r\n        <form class=\"box\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12 form-group\">\r\n                    <label>{{'WALLET.SELECT_COIN_OR_TOKEN' | translate}}</label>\r\n                    <select class=\"select2\" style=\"width: 100%;\" name=\"coin_list\" [(ngModel)]=\"selCoin\">\r\n                        <option *ngFor=\"let coin of coins\" value=\"{{coin.coin}}\">{{coin.coin}} - {{coin.fullname}}</option>\r\n                    </select>\r\n                </div>\r\n                <div class=\"col-md-6\"></div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12 mt-5\" *ngIf=\"selCoinInfo.deposit == 0\">\r\n                    <div class=\"alert alert-danger\">\r\n                        {{'WALLET.WALLET_SUSPEND' | translate}}\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-12 mt-5\" *ngIf=\"selCoinAddress == '' && selCoinInfo.deposit == 1\">\r\n                    <h2 class=\"text-center\">{{'WALLET.NO_WALLET' | translate}}</h2>\r\n                    <div class=\"text-center mt-5 mb-4\">\r\n                        <button type=\"button\" class=\"btn btn-warning\" (click)=\"createWallet()\">\r\n                            <i class=\"mdi mdi-wallet\"></i> {{'WALLET.CREATE_WALLET' | translate}}\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-12\" *ngIf=\"selCoinAddress != '' && selCoinInfo.deposit == 1\">\r\n                    <div class=\"form-group wallet-address\" *ngIf=\"selCoin != 'XRP' && selCoin != 'CVN' && selCoin != 'DEEX' && selCoin != 'ETN' && selCoin != 'SCR'\">\r\n                        <label>{{'WALLET.WALLET_ADDRESS' | translate}}</label>\r\n                        <input type=\"text\" class=\"form-control text-center\" id=\"addressInput\" value=\"{{selCoinAddress}}\" readonly>\r\n                        <div class=\"button-group\">\r\n                            <button type=\"button\" class=\"btn btn-primary mr-2\" (click)=\"showQRCode(selCoinAddress)\">{{'WALLET.SHOW_QRCODE' | translate}}</button>\r\n                            <button type=\"button\" class=\"btn btn-primary\" (click)=\"copyAddress('addressInput')\">{{'WALLET.COPY_ADDRESS' | translate}}</button>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group wallet-address\" *ngIf=\"selCoin == 'XRP'\">\r\n                        <label>{{'WALLET.WALLET_ADDRESS' | translate}}</label>\r\n                        <input type=\"text\" class=\"form-control text-center\" id=\"xrpInput\" value=\"{{mainWallet.address}}\" readonly>\r\n                        <div class=\"button-group\">\r\n                            <button type=\"button\" class=\"btn btn-primary mr-2\" (click)=\"showQRCode(mainWallet.address)\">{{'WALLET.SHOW_QRCODE' | translate}}</button>\r\n                            <button type=\"button\" class=\"btn btn-primary\" (click)=\"copyAddress('xrpInput')\">{{'WALLET.COPY_ADDRESS' | translate}}</button>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group wallet-address\" *ngIf=\"selCoin == 'XRP'\">\r\n                        <label>{{'WALLET.DESTINATION_TAG' | translate}}</label>\r\n                        <input type=\"text\" class=\"form-control text-center\" id=\"xrpDestinationTag\"\r\n                               value=\"{{selCoinAddress}}\" readonly>\r\n                        <div class=\"button-group\">\r\n                            <button type=\"button\" class=\"btn btn-primary mr-2\" (click)=\"showQRCode(selCoinAddress)\">{{'WALLET.SHOW_QRCODE' | translate}}</button>\r\n                            <button type=\"button\" class=\"btn btn-primary\" (click)=\"copyAddress('xrpDestinationTag')\">{{'WALLET.COPY_ADDRESS' | translate}}</button>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group wallet-address\" *ngIf=\"selCoin == 'CVN' || selCoin == 'DEEX'\">\r\n                        <label>{{'WALLET.WALLET_ADDRESS' | translate}}</label>\r\n                        <input type=\"text\" class=\"form-control text-center\" id=\"cvcoinInput\" value=\"sk-bitshares\" readonly>\r\n                        <div class=\"button-group\">\r\n                            <button type=\"button\" class=\"btn btn-primary mr-2\" (click)=\"showQRCode('sk-bitshares')\">{{'WALLET.SHOW_QRCODE' | translate}}</button>\r\n                            <button type=\"button\" class=\"btn btn-primary\" (click)=\"copyAddress('cvcoinInput')\">{{'WALLET.COPY_ADDRESS' | translate}}</button>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group wallet-address\" *ngIf=\"selCoin == 'CVN' || selCoin == 'DEEX'\">\r\n                        <label>{{'WALLET.MEMO' | translate}}</label>\r\n                        <input type=\"text\" class=\"form-control text-center\" id=\"cvcoinMemo\" value=\"{{selCoinAddress}}\" readonly>\r\n                        <div class=\"button-group\">\r\n                            <button type=\"button\" class=\"btn btn-primary mr-2\" (click)=\"showQRCode(selCoinAddress)\">{{'WALLET.SHOW_QRCODE' | translate}}</button>\r\n                            <button type=\"button\" class=\"btn btn-primary\" (click)=\"copyAddress('cvcoinMemo')\">{{'WALLET.COPY_ADDRESS' | translate}}</button>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group wallet-address\" *ngIf=\"selCoin == 'SCR'\">\r\n                        <label>{{'WALLET.WALLET_ADDRESS' | translate}}</label>\r\n                        <input type=\"text\" class=\"form-control text-center\" id=\"scrInput\" value=\"sistemkoin-scr\" readonly>\r\n                        <div class=\"button-group\">\r\n                            <button type=\"button\" class=\"btn btn-primary mr-2\" (click)=\"showQRCode('sistemkoin-scr')\">{{'WALLET.SHOW_QRCODE' | translate}}</button>\r\n                            <button type=\"button\" class=\"btn btn-primary\" (click)=\"copyAddress('scrInput')\">{{'WALLET.COPY_ADDRESS' | translate}}</button>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group wallet-address\" *ngIf=\"selCoin == 'SCR'\">\r\n                        <label>{{'WALLET.MEMO' | translate}}</label>\r\n                        <input type=\"text\" class=\"form-control text-center\" id=\"scrMemo\" value=\"{{selCoinAddress}}\" readonly>\r\n                        <div class=\"button-group\">\r\n                            <button type=\"button\" class=\"btn btn-primary mr-2\" (click)=\"showQRCode(selCoinAddress)\">{{'WALLET.SHOW_QRCODE' | translate}}</button>\r\n                            <button type=\"button\" class=\"btn btn-primary\" (click)=\"copyAddress('scrMemo')\">{{'WALLET.COPY_ADDRESS' | translate}}</button>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group wallet-address\" *ngIf=\"selCoin == 'XIN' && XINPublicKey != ''\">\r\n                        <label>{{'WALLET.PUBLIC_KEY' | translate}}</label>\r\n                        <input type=\"text\" class=\"form-control text-center\" id=\"xinPublicKey\"\r\n                               value=\"{{XINPublicKey}}\" readonly>\r\n                        <div class=\"button-group\">\r\n                            <button type=\"button\" class=\"btn btn-primary mr-2\" (click)=\"showQRCode(XINPublicKey)\">{{'WALLET.SHOW_QRCODE' | translate}}</button>\r\n                            <button type=\"button\" class=\"btn btn-primary\" (click)=\"copyAddress('xinPublicKey')\">{{'WALLET.COPY_ADDRESS' | translate}}</button>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group wallet-address\" *ngIf=\"selCoin == 'ETN'\">\r\n                        <label class=\"control-label\">{{'WALLET.WALLET_ADDRESS' | translate}}</label>\r\n                        <input type=\"text\" class=\"form-control text-center\" id=\"etnInput\"\r\n                               value=\"etnk2WLjSUmE8UKydvfGR1Q9jMrTnDGkNTKog1QMdKdr2RogzcRb745hTAPePBTzk9BFAkATHKNJD9hfLVvq9cCZ2ZmvYWJB5g\" readonly>\r\n                        <div class=\"button-group\">\r\n                            <button type=\"button\" class=\"btn btn-primary mr-2\" (click)=\"showQRCode('etnk2WLjSUmE8UKydvfGR1Q9jMrTnDGkNTKog1QMdKdr2RogzcRb745hTAPePBTzk9BFAkATHKNJD9hfLVvq9cCZ2ZmvYWJB5g')\">{{'WALLET.SHOW_QRCODE' | translate}}</button>\r\n                            <button type=\"button\" class=\"btn btn-primary\" (click)=\"copyAddress('etnInput')\">{{'WALLET.COPY_ADDRESS' | translate}}</button>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group wallet-address\" *ngIf=\"selCoin == 'ETN'\">\r\n                        <label class=\"control-label\">Payment ID</label>\r\n                        <input type=\"text\" class=\"form-control text-center\" id=\"etnPaymentId\"\r\n                               value=\"{{selCoinAddress}}\" readonly>\r\n                        <div class=\"button-group\">\r\n                            <button type=\"button\" class=\"btn btn-primary mr-2\" (click)=\"showQRCode(selCoinAddress)\">{{'WALLET.SHOW_QRCODE' | translate}}</button>\r\n                            <button type=\"button\" class=\"btn btn-primary\" (click)=\"copyAddress('etnPaymentId')\">{{'WALLET.COPY_ADDRESS' | translate}}</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!--<div class=\"mt-3 text-center\">-->\r\n                <!--<button type=\"submit\" class=\"btn btn-warning\">{{'button.Submit' | translate}}</button>-->\r\n            <!--</div>-->\r\n        </form>\r\n\r\n        <h3 class=\"mt-5 mb-3\">\r\n            {{'WALLET.DEPOSIT_HISTORY' | translate}} <a class=\"cursor-pointer\"><i class=\"fa fa-refresh\" (click)=\"refreshDepositList()\"></i></a>\r\n        </h3>\r\n\r\n        <div class=\"table-responsive history-table box\">\r\n            <table class=\"table\">\r\n                <thead>\r\n                <tr>\r\n                    <th>{{'LABEL.STATUS' | translate}}</th>\r\n                    <th>{{'LABEL.AMOUNT' | translate}}</th>\r\n                    <th >{{'LABEL.TIME' | translate}}</th>\r\n                    <th></th>\r\n                </tr>\r\n                </thead>\r\n                <tbody>\r\n                <tr *ngFor=\"let tx of depositTx\">\r\n                    <td [ngSwitch]=\"tx.status\">\r\n                        <label class=\"label-purple\" *ngSwitchCase=\"0\">{{'LABEL.PENDING'| translate}}</label>\r\n                        <label class=\"label-success\" *ngSwitchCase=\"1\">{{'LABEL.SUCCESS'| translate}}</label>\r\n                        <label class=\"label-danger\" *ngSwitchCase=\"2\">{{'LABEL.FAILED'| translate}}</label>\r\n                    </td>\r\n                    <td>{{tx.amount | number:'1.8-8'}}</td>\r\n                    <td >{{tx.datetime | date:'yyyy-MM-dd HH:mm:ss'}}</td>\r\n                    <td>\r\n                        <a target=\"_blank\" href=\"{{selCoinInfo.explorer_url + tx.txid}}\" *ngIf=\"tx.txid != ''\" class=\"btn btn-sm btn-light\">{{'BUTTON.DETAIL' | translate}}</a>\r\n                    </td>\r\n                </tr>\r\n                <tr *ngIf=\"depositTx?.length == 0\">\r\n                    <td class=\"text-center\" colspan=\"4\">\r\n                        {{'WALLET.NO_DEPOSIT' | translate}}\r\n                    </td>\r\n                </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<modal-dialog [(visible)]=\"showQRCodeModal\" [closable]=\"true\">\r\n    <form class=\"form-horizontal\">\r\n        <div class=\"row\">\r\n            <div class=\"form-group col-md-12\">\r\n                <div class=\"text-center\">\r\n                    <img class=\"qrCode\" src=\"https://chart.googleapis.com/chart?chs=200x200&chld=L|2&cht=qr&chl={{qrCodeValue}}\"/>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</modal-dialog>\r\n"

/***/ }),

/***/ "./src/app/auth/deposit/deposit.page.scss":
/*!************************************************!*\
  !*** ./src/app/auth/deposit/deposit.page.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-sm {\n  width: 80px;\n  height: 25px;\n  font-size: 14px;\n  padding: 0;\n  line-height: 25px; }\n\nh6 {\n  font-size: 16px; }\n\nbutton {\n  width: 150px; }\n\n.wallet-address {\n  position: relative; }\n\n.wallet-address input {\n    padding-right: 320px; }\n\n.wallet-address .button-group {\n    position: absolute;\n    right: 0;\n    bottom: 0; }\n\n.history-table {\n  max-height: 300px;\n  overflow-x: auto; }\n"

/***/ }),

/***/ "./src/app/auth/deposit/deposit.page.ts":
/*!**********************************************!*\
  !*** ./src/app/auth/deposit/deposit.page.ts ***!
  \**********************************************/
/*! exports provided: DepositPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepositPage", function() { return DepositPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/settings.service */ "./src/app/services/settings.service.ts");
/* harmony import */ var _services_notify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/notify.service */ "./src/app/services/notify.service.ts");
/* harmony import */ var _services_coinApi_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/coinApi.service */ "./src/app/services/coinApi.service.ts");
/* harmony import */ var _services_balance_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/balance.service */ "./src/app/services/balance.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DepositPage = /** @class */ (function () {
    function DepositPage(router, settings, notify, coinApi, balance) {
        this.router = router;
        this.settings = settings;
        this.notify = notify;
        this.coinApi = coinApi;
        this.balance = balance;
        this.selCoin = 'BTC';
        this.selCoinAddress = '';
        this.selCoinInfo = {
            fullname: ''
        };
        this.coins = [];
        this.coinAddress = {};
        this.XINPublicKey = '';
        this.depositTx = [];
        this.mainWallet = {
            address: '',
            minimum_amount: 0
        };
        this.showQRCodeModal = false;
        this.qrCodeValue = '';
    }
    DepositPage.prototype.ngOnInit = function () {
        var _this = this;
        if (window.localStorage.getItem('deposit_coin') && window.localStorage.getItem('deposit_coin') != '') {
            this.selCoin = window.localStorage.getItem('deposit_coin');
        }
        this.coinApi.getCoin({
            only_coin: true
        }).subscribe(function (res) {
            if (res.success) {
                _this.coins = res.data;
                _this.selCoinInfo = _this.coins.filter(function (coin) { return coin.coin === _this.selCoin; })[0];
                _this.coinApi.getCoinAddress({}).subscribe(function (res) {
                    if (res.success) {
                        _this.coinAddress = res.data;
                        _this.selCoinAddress = _this.getAddress(_this.selCoinInfo);
                        if (_this.selCoin == 'XIN') {
                            _this.coinApi.getXINPublicKey({
                                address: _this.selCoinAddress
                            }).subscribe(function (res) {
                                if (res.success) {
                                    _this.XINPublicKey = res.publicKey;
                                }
                            });
                        }
                    }
                });
            }
        }, function (err) {
        });
        this.coinApi.getXRPMainWallet({}).subscribe(function (res) {
            if (res.success) {
                _this.mainWallet.address = res.address;
                _this.mainWallet.minimum_amount = res.minimum_amount;
            }
        }, function (err) {
        });
        this.getDepositList();
    };
    DepositPage.prototype.getAddress = function (coinInfo) {
        var coin = coinInfo.address_coin ? coinInfo.address_coin : coinInfo.coin;
        if (coin == 'ETN' && this.coinAddress['etn_paymentid'] && this.coinAddress['etn_paymentid'] != '') {
            return this.coinAddress['etn_paymentid'];
        }
        else if (coin == 'ETN') {
            return '';
        }
        var index = coin.toLowerCase() + '_address';
        if (this.coinAddress && this.coinAddress[index] && this.coinAddress[index] != '') {
            if (coin == 'BCH') {
                return bchaddr.toLegacyAddress(this.coinAddress[index]);
            }
            else if (coin == 'ETN') {
                return this.coinAddress['etn_paymentid'];
            }
            return this.coinAddress[index];
        }
        else {
            return '';
        }
    };
    DepositPage.prototype.setAddress = function (coinInfo, address) {
        var coin = coinInfo.address_coin ? coinInfo.address_coin : coinInfo.coin;
        var index = coin.toLowerCase() + '_address';
        if (coin == 'ETN') {
            this.coinAddress['etn_paymentid'] = address;
        }
        else {
            this.coinAddress[index] = address;
        }
    };
    DepositPage.prototype.ngAfterViewInit = function () {
        $('.select2').select2();
        var _parent = this;
        $('.select2').on('select2:select', function (e) {
            _parent.onClickCoin(e.params.data.id);
        });
    };
    DepositPage.prototype.onClickCoin = function (coin) {
        var _this = this;
        if (coin == this.selCoin) {
            return;
        }
        this.selCoin = coin;
        this.selCoinInfo = this.coins.filter(function (coin) { return coin.coin == _this.selCoin; })[0];
        this.selCoinAddress = this.getAddress(this.selCoinInfo);
        this.getDepositList();
        window.localStorage.setItem('deposit_coin', this.selCoin);
    };
    DepositPage.prototype.createWallet = function () {
        var _this = this;
        this.settings.loading = true;
        this.coinApi.createWallet(this.selCoin, {}).subscribe(function (res) {
            _this.settings.loading = false;
            if (res.success) {
                _this.notify.showSuccess('Your wallet was created successfully.');
                _this.setAddress(_this.selCoinInfo, res.address);
                _this.selCoinAddress = _this.getAddress(_this.selCoinInfo);
                if (_this.selCoin == 'XIN') {
                    _this.XINPublicKey = res.publicKey;
                }
            }
            else {
                _this.notify.showWarning(res.error);
            }
        }, function (err) {
            _this.settings.loading = false;
            _this.notify.showError(err);
        });
    };
    DepositPage.prototype.getDepositList = function () {
        var _this = this;
        this.coinApi.getDepositHistory(this.selCoin, {}).subscribe(function (res) {
            if (res.success) {
                _this.depositTx = res.data;
            }
            else {
            }
        }, function (err) {
        });
    };
    DepositPage.prototype.copyAddress = function (id) {
        $('#' + id).select();
        document.execCommand('copy');
        window.getSelection().removeAllRanges();
        this.notify.showSuccess('Copied');
    };
    DepositPage.prototype.showQRCode = function (value) {
        this.qrCodeValue = value;
        console.log(this.qrCodeValue);
        this.showQRCodeModal = true;
    };
    DepositPage.prototype.refreshDepositList = function () {
        this.balance.getCoinBalance(this.selCoin);
        this.getDepositList();
    };
    DepositPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-deposit-page',
            template: __webpack_require__(/*! ./deposit.page.html */ "./src/app/auth/deposit/deposit.page.html"),
            styles: [__webpack_require__(/*! ./deposit.page.scss */ "./src/app/auth/deposit/deposit.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_settings_service__WEBPACK_IMPORTED_MODULE_2__["SettingsService"],
            _services_notify_service__WEBPACK_IMPORTED_MODULE_3__["NotifyService"],
            _services_coinApi_service__WEBPACK_IMPORTED_MODULE_4__["CoinApiService"],
            _services_balance_service__WEBPACK_IMPORTED_MODULE_5__["BalanceService"]])
    ], DepositPage);
    return DepositPage;
}());



/***/ }),

/***/ "./src/app/auth/emailauth/emailauth.page.html":
/*!****************************************************!*\
  !*** ./src/app/auth/emailauth/emailauth.page.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-container\">\r\n    <div class=\"container\">\r\n        <h3 class=\"text-center mb-4\">\r\n            {{'AUTH.ENABLE_EMAIL_AUTH' | translate}}\r\n        </h3>\r\n        <form class=\"box\">\r\n            <div class=\"mx-auto\" style=\"max-width: 690px\">\r\n                <div class=\"form-group row\">\r\n                    <label class=\"col-sm-4  col-form-label text-sm-right pr-0\">\r\n                        {{'AUTH.EMAIL_AUTHENTICATION_CODE' | translate}}:\r\n                    </label>\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"row\">\r\n                            <input type=\"text\" class=\"form-control\"/>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                    <label class=\"col-sm-4  col-form-label text-sm-right pr-0\">\r\n                        {{(profile.allowed_g2f == 1 ? 'AUTH.GOOGLE_AUTHENTICATION_CODE' : 'AUTH.SMS_AUTHENTICATION_CODE') | translate}}:\r\n                    </label>\r\n                    <div class=\"col-sm-6\">\r\n                        <input type=\"text\" class=\"form-control\"/>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                    <div class=\"col-sm-12 text-center\">\r\n                        <button class=\"btn btn-warning mt-3 btn-submit\">{{'BUTTON.SUBMIT' | translate}}</button>\r\n                    </div>\r\n                </div>\r\n\r\n                <hr class=\"mt-5 mb-4\"/>\r\n\r\n                <div class=\"text-center px-5\">\r\n                    <strong class=\"text-yellow\">{{'COMMON.NOTE' | translate}}:</strong> {{'AUTH.GOOGLE_AUTH_NOTE' | translate}}\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/auth/emailauth/emailauth.page.scss":
/*!****************************************************!*\
  !*** ./src/app/auth/emailauth/emailauth.page.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box {\n  padding: 50px 15px; }\n\n.btn-submit {\n  width: 180px;\n  height: 35px; }\n\n.btn-send {\n  height: 30px; }\n"

/***/ }),

/***/ "./src/app/auth/emailauth/emailauth.page.ts":
/*!**************************************************!*\
  !*** ./src/app/auth/emailauth/emailauth.page.ts ***!
  \**************************************************/
/*! exports provided: EmailAuthPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailAuthPage", function() { return EmailAuthPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_accountApi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/accountApi.service */ "./src/app/services/accountApi.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmailAuthPage = /** @class */ (function () {
    function EmailAuthPage(router, accountApi) {
        this.router = router;
        this.accountApi = accountApi;
        this.profile = {};
    }
    EmailAuthPage.prototype.ngOnInit = function () {
        var _this = this;
        this.accountApi.getProfile({}).subscribe(function (res) {
            if (res.success) {
                _this.profile = res.data;
            }
        });
    };
    EmailAuthPage.prototype.ngAfterViewInit = function () {
    };
    EmailAuthPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-smsauth-page',
            template: __webpack_require__(/*! ./emailauth.page.html */ "./src/app/auth/emailauth/emailauth.page.html"),
            styles: [__webpack_require__(/*! ./emailauth.page.scss */ "./src/app/auth/emailauth/emailauth.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_accountApi_service__WEBPACK_IMPORTED_MODULE_2__["AccountApiService"]])
    ], EmailAuthPage);
    return EmailAuthPage;
}());



/***/ }),

/***/ "./src/app/auth/eurowallet/eurowallet.page.html":
/*!******************************************************!*\
  !*** ./src/app/auth/eurowallet/eurowallet.page.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-container\">\r\n    <div class=\"container\">\r\n        <h3 class=\"mb-4\">\r\n            {{'HEADER.EURO_WALLET' | translate}}\r\n        </h3>\r\n        <div class=\"box\" *ngIf=\"iban_code_euro == ''\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    {{'TLWALLET.NO_IBAN_CODE_MSG' | translate}}<a [routerLink]=\"['/bank']\">{{'TLWALLET.HERE' |\r\n                    translate}}</a>.\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"d-flex\" *ngIf=\"iban_code_euro != ''\">\r\n            <div class=\"col-md-6 box mr-md-2\">\r\n                <h5 class=\"text-center\">{{'TLWALLET.EURO_DEPOSIT' | translate}}</h5>\r\n                <div class=\"form-group row\">\r\n                    <label class=\"col-12\">{{'TLWALLET.DEPOSIT_AMOUNT' | translate}}</label>\r\n                    <div class=\"col-sm-8\">\r\n                        <input type=\"number\" step=0.01 class=\"form-control\" name=\"deposit_amount\"\r\n                               [(ngModel)]=\"deposit.amount\">\r\n                    </div>\r\n                    <div class=\"col-sm-4 pl-md-5 mt-2 mt-sm-0\">\r\n                        <button class=\"btn btn-primary w-100 with-border with-control\" (click)=\"onClickDepositEpay()\">{{'TLWALLET.VIA_EPAY' | translate}}</button>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <label>{{'TLWALLET.SELECT_IBAN_CODE' | translate}}</label>\r\n                    <select class=\"form-control\" name=\"deposit_address\" [(ngModel)]=\"deposit.to_address\">\r\n                        <option *ngFor=\"let bank of banks\" value=\"{{bank.name}}\">{{bank.name}}\r\n                        </option>\r\n                    </select>\r\n                </div>\r\n\r\n                <div class=\"form-group row\">\r\n                    <div class=\"col-sm-6\">\r\n                        <label>{{'TLWALLET.AMOUNT_WANT_DEPOSIT' | translate}}</label>\r\n                        <input class=\"form-control\" value='{{deposit.amount | number:\"1.2-2\"}} €' readonly>\r\n                    </div>\r\n                    <div class=\"col-sm-6\">\r\n                        <label>{{'TLWALLET.DEPOSIT_FEE' | translate}}</label>\r\n                        <input class=\"form-control\"\r\n                               value=\"{{settings.getSystemSetting('euro_deposit_fee') | number:'1.2-2'}} €\" readonly>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group row\">\r\n                    <div class=\"col-sm-6\">\r\n                        <label>{{'TLWALLET.AMOUNT_TO_DEPOSIT' | translate}}</label>\r\n                        <input class=\"form-control\"\r\n                               value=\"{{(deposit.amount - settings.getSystemSetting('euro_deposit_fee')) | number:'1.2-2'}} €\"\r\n                               readonly>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"text-center\">\r\n                    <button class=\"btn btn-primary with-border primary-size\" (click)=\"depositEURO()\">\r\n                        {{'TLWALLET.DEPOSIT_EURO' | translate}}\r\n                    </button>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-6 box\" *ngIf=\"deposited\">\r\n                <div class=\"row mt-3\">\r\n                    <div class=\"col-md-12\">\r\n                        <p class=\"text-danger\">\r\n                            {{'TLWALLET.COMPANY_NAME' | translate}}\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row m-t-10\">\r\n                    <div class=\"col-md-4\">\r\n                        <label>{{'TLWALLET.SELECT_IBAN_CODE' | translate}}</label>\r\n                    </div>\r\n                    <div class=\"col-md-8\">\r\n                        <label>{{depositinfo.to_address}}</label>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-4\">\r\n                        <label>{{'TLWALLET.YOUR_IBAN_CODE' | translate}}</label>\r\n                    </div>\r\n                    <div class=\"col-md-8\">\r\n                        <label>{{depositinfo.iban_code}}</label>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-4\">\r\n                        <label>{{'LABEL.CONFIRM_CODE' | translate}}</label>\r\n                    </div>\r\n                    <div class=\"col-md-8\">\r\n                        <label>{{depositinfo.txid}}</label>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-4\">\r\n                        <label>{{'LABEL.AMOUNT' | translate}}</label>\r\n                    </div>\r\n                    <div class=\"col-md-8\">\r\n                        <label>{{depositinfo.amount | number:'1.0-2'}}</label>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"text-center mt-5\">\r\n                    <button class=\"btn btn-warning with-border primary-size\" (click)=\"deposited=false\">\r\n                        {{'BUTTON.CONFIRM' | translate}}\r\n                    </button>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-6 box\" *ngIf=\"!deposited\">\r\n                <h5 class=\"text-center\">{{'TLWALLET.EURO_WITHDRAW' | translate}}</h5>\r\n                <div class=\"form-group row\">\r\n                    <label class=\"col-12\">{{'TLWALLET.WITHDRAW_AMOUNT' | translate}}</label>\r\n                    <div class=\"col-sm-8\">\r\n                        <input type=\"number\" step=0.001 class=\"form-control\" name=\"withdraw_amount\"\r\n                               [(ngModel)]=\"withdraw.amount\">\r\n                    </div>\r\n                    <div class=\"col-sm-4 pl-md-5 mt-2 mt-sm-0\">\r\n                        <button class=\"btn btn-primary w-100 with-border with-control\" (click)=\"onClickWithdrawEpay()\">{{'TLWALLET.VIA_EPAY' | translate}}</button>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <label>{{'TLWALLET.YOUR_IBAN_CODE' | translate}}</label>\r\n                    <input type=\"text\" class=\"form-control\" name=\"withdraw_address\" value=\"{{withdraw.to_address}}\"\r\n                           readonly>\r\n                </div>\r\n\r\n                <div class=\"form-group row\">\r\n                    <div class=\"col-sm-6\">\r\n                        <label>{{'LABEL.BALANCE' | translate}}</label>\r\n                        <input class=\"form-control\" value=\"{{settings.getBalance('EURO') | number:'1.2-2'}} €\" readonly>\r\n                    </div>\r\n                    <div class=\"col-sm-6\">\r\n                        <label>{{'TLWALLET.AMOUNT_WANT_WITHDRAW' | translate}}</label>\r\n                        <input class=\"form-control\" value=\"{{withdraw.amount | number:'1.2-2'}} €\" readonly>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group row\">\r\n                    <div class=\"col-sm-6\">\r\n                        <label>{{'TLWALLET.WITHDRAW_FEE' | translate}}</label>\r\n                        <input class=\"form-control\"\r\n                               value=\"{{settings.getSystemSetting('euro_withdraw_fee') | number:'1.2-2'}} €\" readonly>\r\n                    </div>\r\n                    <div class=\"col-sm-6\">\r\n                        <label>{{'TLWALLET.AMOUNT_TO_WITHDRAW' | translate}}</label>\r\n                        <input class=\"form-control\"\r\n                               value=\"{{(withdraw.amount - settings.getSystemSetting('euro_withdraw_fee')) | number:'1.2-2'}} €\"\r\n                               readonly>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"text-center\">\r\n                    <button class=\"btn btn-warning with-border primary-size\" (click)=\"withdrawEURO()\">\r\n                        {{'TLWALLET.WITHDRAW_EURO' | translate}}\r\n                    </button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <h3 class=\"my-4\">\r\n            {{'TLWALLET.PENDING_TRANSACTIONS' | translate}}\r\n        </h3>\r\n        <div class=\"table-responsive history-table box\">\r\n            <table class=\"table\">\r\n                <thead>\r\n                <tr>\r\n                    <th>{{'LABEL.TYPE' | translate}}</th>\r\n                    <th>{{'LABEL.STATUS' | translate}}</th>\r\n                    <th>{{'LABEL.TIME' | translate}}</th>\r\n                    <th>{{'LABEL.AMOUNT' | translate}}</th>\r\n                    <th>{{'LABEL.ADDRESS' | translate}}</th>\r\n                    <th>{{'LABEL.CONFIRM_CODE' | translate}}</th>\r\n                    <th></th>\r\n                </tr>\r\n                </thead>\r\n                <tbody>\r\n                <tr *ngFor=\"let tx of pendingLists\">\r\n                    <td><label class=\"label label-sm \"\r\n                               [ngClass]=\"{'label-success': tx.type == 3, 'label-info': tx.type == 1}\">\r\n                        {{(tx.type == 1 ? 'LABEL.WITHDRAW' : 'LABEL.DEPOSIT') | translate}}</label>\r\n                    </td>\r\n                    <td>\r\n                        <label [ngClass]=\"{'label-purple': tx.status == 0, 'label-danger' : tx.status == 2}\">\r\n                            {{(tx.status == 0 ? 'LABEL.PENDING' : 'LABEL.FAILED') | translate}}\r\n                        </label>\r\n                    </td>\r\n                    <td>{{tx.datetime | date:'yyyy-MM-dd HH:mm:ss'}}</td>\r\n                    <td>{{(tx.type == 3 ? tx.dest_amount : tx.src_amount) | number:'1.2-2'}}</td>\r\n                    <td>{{tx.type == 3 ? tx.to_address : tx.from_address}}</td>\r\n                    <td>{{tx.type == 3 ? tx.txid : ''}}</td>\r\n                    <td class=\"text-center\">\r\n                        <button type=\"button\" class=\"btn btn-sm btn-danger\" (click)=\"cancelTransaction(tx.id)\">Cancel\r\n                        </button>\r\n                    </td>\r\n                </tr>\r\n                <tr *ngIf=\"pendingLists?.length == 0\">\r\n                    <td class=\"text-center\" colspan=\"7\">\r\n                        {{'TLWALLET.NO_PENDING_FOUND' | translate}}\r\n                    </td>\r\n                </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n\r\n        <h3 class=\"my-4\">\r\n            {{'TLWALLET.PAST_TRANSACTIONS' | translate}}\r\n        </h3>\r\n        <div class=\"table-responsive history-table box\">\r\n            <table class=\"table\">\r\n                <thead>\r\n                <tr>\r\n                    <th>{{'LABEL.TYPE' | translate}}</th>\r\n                    <th>{{'LABEL.STATUS' | translate}}</th>\r\n                    <th>{{'LABEL.TIME' | translate}}</th>\r\n                    <th>{{'LABEL.AMOUNT' | translate}}</th>\r\n                    <th>{{'LABEL.ADDRESS' | translate}}</th>\r\n                </tr>\r\n                </thead>\r\n                <tbody>\r\n                <tr *ngFor=\"let tx of pastLists\">\r\n                    <td><label class=\"label label-sm \"\r\n                               [ngClass]=\"{'label-primary': tx.type == 3, 'label-info': tx.type == 1}\">\r\n                        {{(tx.type == 1 ? 'LABEL.WITHDRAW' : 'LABEL.DEPOSIT') | translate}}</label>\r\n                    </td>\r\n                    <td><label class=\"label label-sm \">{{'LABEL.SUCCESS' | translate}}</label></td>\r\n                    <td>{{tx.datetime | date:'yyyy-MM-dd HH:mm:ss'}}</td>\r\n                    <td>{{(tx.type == 3 ? tx.dest_amount : tx.src_amount) | number:'1.2-2'}}\r\n                    </td>\r\n                    <td>{{tx.type == 3 ? tx.to_address : tx.from_address}}</td>\r\n                </tr>\r\n                <tr *ngIf=\"pastLists?.length == 0\">\r\n                    <td class=\"text-center\" colspan=\"5\">\r\n                        {{'TLWALLET.NO_TRANSACTIONS_FOUND' | translate}}\r\n                    </td>\r\n                </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<modal-dialog [(visible)]=\"showAuthModal\" [closable]=\"false\">\r\n    <form class=\"mt-5\">\r\n        <div class=\"form-group row\">\r\n            <label class=\"col-sm-4  col-form-label text-sm-right pr-0\" [ngSwitch]=\"allowed_g2f\">\r\n                <div *ngSwitchCase=\"1\">{{'AUTH.GOOGLE_AUTHENTICATION_CODE' | translate}}:</div>\r\n                <div *ngSwitchCase=\"2\">{{'AUTH.SMS_AUTHENTICATION_CODE' | translate}}:</div>\r\n                <div *ngSwitchCase=\"3\">{{'AUTH.EMAIL_AUTHENTICATION_CODE' | translate}}:</div>\r\n            </label>\r\n\r\n            <div class=\"col-sm-7\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-12 pr-0\">\r\n                        <input type=\"text\" class=\"text-center form-control\" name=\"auth_code\" [(ngModel)]=\"auth_code\"/>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"text-center mt-2\">\r\n            <button type=\"button\" class=\"btn btn-warning dialog-button\" (click)=\"submitWithdraw()\">{{'BUTTON.SUBMIT' | translate}}\r\n            </button>\r\n            <button type=\"button\" class=\"btn btn-info dialog-button ml-3\" (click)=\"showAuthModal = !showAuthModal\">\r\n                {{'BUTTON.CANCEL' | translate}}\r\n            </button>\r\n        </div>\r\n    </form>\r\n</modal-dialog>\r\n\r\n<modal-dialog [(visible)]=\"showEPayDespositModal\">\r\n    <form class=\"form-horizontal\">\r\n        <div class=\"text-center\">\r\n            <img src=\"assets/img/ePay.png\" />\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12 text-center\">\r\n                <a target=\"_blank\" href=\"https://www.epay.com/?ref=782152\">{{'TLWALLET.REFERRAL_ID' | translate}}</a>\r\n            </div>\r\n        </div>\r\n        <div class=\"row m-t-20\">\r\n            <div class=\"col-md-4\">\r\n                <label>{{'TLWALLET.DEPOSIT_AMOUNT' | translate}}</label>\r\n            </div>\r\n            <div class=\"col-md-8\">\r\n                <input type=\"number\" step=0.01 class=\"form-control\" name=\"deposit_amount1\" [(ngModel)]=\"deposit.amount\">\r\n            </div>\r\n        </div>\r\n\r\n        <div style=\"display: none;\">\r\n            <form id=\"form\" action=\"{{settings.ePayReceiveUrl}}\" method=\"post\">\r\n                <input name=\"PAYEE_ACCOUNT\" value=\"{{settings.ePayAccount}}\" type=\"text\" />\r\n                <input name=\"PAYEE_NAME\" type=\"text\" value=\"{{settings.ePayName}}\" />\r\n                <input name=\"PAYMENT_AMOUNT\" value=\"{{deposit.amount}}\" type=\"text\" />\r\n                <input name=\"PAYMENT_UNITS\" type=\"text\" value=\"EURO\" />\r\n                <input name=\"PAYMENT_ID\" id=\"PAYMENT_ID\" type=\"text\" value=\"\" />\r\n                <input name=\"STATUS_URL\" type=\"text\" value=\"{{settings.apiUrl + '/epay/receive/status'}}\" />\r\n                <input name=\"PAYMENT_URL\" type=\"text\" value=\"{{settings.apiUrl + '/euro/epay/success'}}\" />\r\n                <input name=\"PAYMENT_URL_METHOD\" type=\"text\" value=\"get\" />\r\n                <input name=\"NOPAYMENT_URL\" type=\"text\" value=\"{{settings.apiUrl + '/euro/epay/fail'}}\" />\r\n                <input name=\"NOPAYMENT_URL_METHOD\" type=\"text\" value=\"get\" />\r\n                <input name=\"SUGGESTED_MEMO\" type=\"text\" value=\"{{settings.ePayMemo}}\" />\r\n                <input name=\"SUGGESTED_MEMO_NOCHANGE\" type=\"text\" value=\"\" />\r\n                <input name=\"FORCED_PAYER_ACCOUNT\" type=\"text\" value=\"\" />\r\n                <input name=\"INTERFACE_LANGUAGE\" type=\"text\" value=\"{{settings.ePayLang}}\" />\r\n                <input name=\"CHARACTER_ENCODING\" type=\"text\" value=\"{{settings.ePayEncoding}}\" />\r\n                <input name=\"V2_HASH\" id=\"V2_HASH\" value=\"\" type=\"text\" size=\"40\" />\r\n            </form>\r\n        </div>\r\n\r\n        <div class=\"text-center\" style=\"margin-top: 20px;\">\r\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"submitEpayDeposit()\">Submit</button>\r\n            <button type=\"button\" class=\"btn btn-default\" (click)=\"showEPayDespositModal = !showEPayDespositModal\">Cancel</button>\r\n        </div>\r\n    </form>\r\n</modal-dialog>\r\n\r\n<modal-dialog [(visible)]=\"showEPayWithdrawModal\">\r\n    <form class=\"form-horizontal\">\r\n        <div class=\"text-center\">\r\n            <img src=\"assets/img/ePay.png\" />\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12 text-center\">\r\n                <a target=\"_blank\" href=\"https://www.epay.com/?ref=782152\">{{'TLWALLET.REFERRAL_ID' | translate}}</a>\r\n            </div>\r\n        </div>\r\n        <div class=\"row m-t-20\">\r\n            <div class=\"col-md-4\">\r\n                <label>{{'TLWALLET.WITHDRAW_AMOUNT' | translate}}</label>\r\n            </div>\r\n            <div class=\"col-md-8\">\r\n                <input type=\"number\" step=0.001 class=\"form-control\" name=\"withdraw_amount1\" [(ngModel)]=\"withdraw.amount\">\r\n            </div>\r\n        </div>\r\n        <div class=\"row m-t-20\">\r\n            <div class=\"col-md-4\">\r\n                <label>{{'TLWALLET.TO_ACCOUNT' | translate}}</label>\r\n            </div>\r\n            <div class=\"col-md-8\">\r\n                <input type=\"text\" class=\"form-control\" name=\"withdraw_address\" [(ngModel)]=\"withdraw.epay_account\">\r\n            </div>\r\n        </div>\r\n        <div class=\"row m-t-20\">\r\n            <div class=\"col-md-4\">\r\n                <label>{{'TLWALLET.WITHDRAW_FEE' | translate}}</label>\r\n            </div>\r\n            <div class=\"col-md-8\">\r\n                <label>{{settings.getSystemSetting('euro_withdraw_fee') | number:'1.2-2'}} <i class=\"fa fa-euro\"></i></label>\r\n            </div>\r\n        </div>\r\n        <div class=\"text-center\" style=\"margin-top: 20px;\">\r\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"submitEpayWithdraw()\">Submit</button>\r\n            <button type=\"button\" class=\"btn btn-default\" (click)=\"showEPayWithdrawModal = !showEPayWithdrawModal\">Cancel</button>\r\n        </div>\r\n    </form>\r\n</modal-dialog>\r\n"

/***/ }),

/***/ "./src/app/auth/eurowallet/eurowallet.page.scss":
/*!******************************************************!*\
  !*** ./src/app/auth/eurowallet/eurowallet.page.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h5 {\n  color: #3c3c3c; }\n\n.box {\n  padding: 40px; }\n\n.history-table {\n  max-height: 300px; }\n"

/***/ }),

/***/ "./src/app/auth/eurowallet/eurowallet.page.ts":
/*!****************************************************!*\
  !*** ./src/app/auth/eurowallet/eurowallet.page.ts ***!
  \****************************************************/
/*! exports provided: EurowalletPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EurowalletPage", function() { return EurowalletPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_financeApi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/financeApi.service */ "./src/app/services/financeApi.service.ts");
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/settings.service */ "./src/app/services/settings.service.ts");
/* harmony import */ var _services_notify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/notify.service */ "./src/app/services/notify.service.ts");
/* harmony import */ var _services_translator_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/translator.service */ "./src/app/services/translator.service.ts");
/* harmony import */ var _services_balance_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/balance.service */ "./src/app/services/balance.service.ts");
/* harmony import */ var _services_accountApi_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/accountApi.service */ "./src/app/services/accountApi.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var EurowalletPage = /** @class */ (function () {
    function EurowalletPage(router, financeApi, settings, notify, translator, accountApi, balance) {
        this.router = router;
        this.financeApi = financeApi;
        this.settings = settings;
        this.notify = notify;
        this.translator = translator;
        this.accountApi = accountApi;
        this.balance = balance;
        this.profile = {};
        this.iban_code_euro = '';
        this.pendingLists = [];
        this.pastLists = [];
        this.withdraw = {
            amount: 0
        };
        this.deposit = {
            amount: 0
        };
        this.banks = [];
        this.depositinfo = {};
        this.deposited = false;
        this.allowed_g2f = 0;
        this.showAuthModal = false;
        this.auth_code = '';
        this.showEPayDespositModal = false;
        this.showEPayWithdrawModal = false;
        this.isEpayWithdraw = false;
    }
    EurowalletPage.prototype.ngOnInit = function () {
        var _this = this;
        this.accountApi.getAccountBankInfo({}).subscribe(function (res) {
            if (res.success) {
                _this.profile = res.data;
                if (_this.profile && _this.profile.iban_code_euro) {
                    _this.iban_code_euro = _this.profile.iban_code_euro;
                    _this.withdraw.to_address = _this.iban_code_euro;
                    _this.deposit.from_address = _this.iban_code_euro;
                }
            }
        });
        this.financeApi.getBanks({
            currency: 'EURO'
        }).subscribe(function (res) {
            if (res.success) {
                _this.banks = res.data;
            }
        });
        this.loadPendingTransactions();
        this.loadPastTransactions();
    };
    EurowalletPage.prototype.ngAfterViewInit = function () {
    };
    EurowalletPage.prototype.withdrawEUROAll = function () {
        this.withdraw.amount = this.settings.getBalance('EURO');
    };
    EurowalletPage.prototype.loadPendingTransactions = function () {
        var _this = this;
        this.financeApi.getFinanceTransaction('EURO', {
            is_pending: true,
            limit_count: 20
        }).subscribe(function (res) {
            if (res.data) {
                _this.pendingLists = res.data;
            }
        });
    };
    EurowalletPage.prototype.loadPastTransactions = function () {
        var _this = this;
        this.financeApi.getFinanceTransaction('EURO', {
            is_success: true,
            limit_count: 20
        }).subscribe(function (res) {
            if (res.data) {
                _this.pastLists = res.data;
            }
        });
    };
    EurowalletPage.prototype.depositEURO = function () {
        var _this = this;
        this.deposit.fee = this.settings.getSystemSetting('euro_deposit_fee');
        this.settings.loading = true;
        this.financeApi.financeDeposit('EURO', this.deposit).subscribe(function (res) {
            _this.settings.loading = false;
            if (res.success) {
                _this.loadPendingTransactions();
                _this.notify.showSuccess('Your deposit was saved successfully. Please wait while confirming.');
                _this.depositinfo = res.data;
                for (var i = 0; i < _this.banks.length; i++) {
                    if (_this.banks[i].name == _this.depositinfo.to_address) {
                        _this.depositinfo.iban_code = _this.banks[i].iban_code;
                        break;
                    }
                }
                _this.depositinfo.amount = _this.deposit.amount;
                _this.deposited = true;
            }
            else {
                _this.notify.showWarning(res.error);
            }
        }, function (err) {
            _this.settings.loading = false;
            _this.notify.showError(err);
        });
    };
    EurowalletPage.prototype.submitWithdraw = function () {
        var _this = this;
        this.withdraw.isEpay = this.isEpayWithdraw;
        this.withdraw.fee = this.settings.getSystemSetting('euro_withdraw_fee');
        this.withdraw.auth_code = this.auth_code;
        this.settings.loading = true;
        this.financeApi.financeWithdraw('EURO', this.withdraw).subscribe(function (res) {
            _this.settings.loading = false;
            if (res.success) {
                _this.showAuthModal = false;
                _this.loadPendingTransactions();
                _this.balance.getCoinBalance('EURO');
                _this.notify.showSuccess('Your withdraw was saved successfully. Please wait while confirming.');
            }
            else {
                _this.notify.showWarning(res.error);
            }
        }, function (err) {
            _this.settings.loading = false;
            _this.notify.showError(err);
        });
    };
    EurowalletPage.prototype.withdrawEURO = function () {
        var _this = this;
        if (this.settings.getUserSetting('account_verified') == 0) {
            this.notify.showWarning('You have to verify your account.');
            return;
        }
        this.settings.loading = true;
        this.accountApi.sendAuthCode().subscribe(function (res) {
            _this.settings.loading = false;
            if (res.success) {
                _this.auth_code = '';
                _this.allowed_g2f = res.allowed_g2f;
                _this.showAuthModal = true;
            }
            else {
                _this.notify.showWarning(res.error);
            }
        }, function (err) {
            _this.settings.loading = false;
            _this.notify.showError(err);
        });
    };
    EurowalletPage.prototype.cancelTransaction = function (id) {
        var _this = this;
        this.settings.loading = true;
        this.financeApi.cancelFinanceTransaction({
            id: id
        }).subscribe(function (res) {
            _this.settings.loading = false;
            if (res.success) {
                _this.balance.getCoinBalance('EURO');
                _this.loadPendingTransactions();
                _this.notify.showSuccess('Your transaction was canceled successfully.');
            }
        }, function (err) {
            _this.settings.loading = false;
            _this.notify.showError(err);
        });
    };
    EurowalletPage.prototype.onClickDepositEpay = function () {
        this.showEPayDespositModal = true;
    };
    EurowalletPage.prototype.onClickWithdrawEpay = function () {
        this.showEPayWithdrawModal = true;
    };
    EurowalletPage.prototype.submitEpayDeposit = function () {
        var _this = this;
        if (this.deposit.amount == null || this.deposit.amount < 100) {
            this.notify.showWarning('You have to input amount greater than 100.');
            return;
        }
        this.settings.loading = true;
        this.financeApi.getEpayReceiveInfo({
            amount: this.deposit.amount,
            currency: 'EURO'
        }).subscribe(function (res) {
            _this.settings.loading = false;
            if (res.success) {
                $('#PAYMENT_ID').val(res.paymentID);
                $('#V2_HASH').val(res.v2Hash);
                $('#form').submit();
            }
            else {
                _this.notify.showWarning(res.error);
            }
        }, function (err) {
            _this.settings.loading = false;
            _this.notify.showError(err);
        });
    };
    EurowalletPage.prototype.submitEpayWithdraw = function () {
        var _this = this;
        if (this.settings.getUserSetting('account_verified') == 0) {
            this.notify.showWarning('You have to verify your account.');
            return;
        }
        if (this.withdraw.amount == null || this.withdraw.amount < 100) {
            this.notify.showWarning('You have to input amount greater than 100.');
            return;
        }
        if (this.withdraw.epay_account == null || this.withdraw.epay_account == '') {
            this.notify.showWarning('You have to input your account.');
            return;
        }
        this.showEPayWithdrawModal = false;
        this.isEpayWithdraw = true;
        this.settings.loading = true;
        this.accountApi.sendAuthCode().subscribe(function (res) {
            _this.settings.loading = false;
            if (res.success) {
                _this.auth_code = '';
                _this.allowed_g2f = res.allowed_g2f;
                _this.showAuthModal = true;
            }
            else {
                _this.notify.showWarning(res.error);
            }
        }, function (err) {
            _this.settings.loading = false;
            _this.notify.showError(err);
        });
    };
    EurowalletPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-eurowallet-page',
            template: __webpack_require__(/*! ./eurowallet.page.html */ "./src/app/auth/eurowallet/eurowallet.page.html"),
            styles: [__webpack_require__(/*! ./eurowallet.page.scss */ "./src/app/auth/eurowallet/eurowallet.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_financeApi_service__WEBPACK_IMPORTED_MODULE_2__["FinanceApiService"],
            _services_settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"],
            _services_notify_service__WEBPACK_IMPORTED_MODULE_4__["NotifyService"],
            _services_translator_service__WEBPACK_IMPORTED_MODULE_5__["TranslatorService"],
            _services_accountApi_service__WEBPACK_IMPORTED_MODULE_7__["AccountApiService"],
            _services_balance_service__WEBPACK_IMPORTED_MODULE_6__["BalanceService"]])
    ], EurowalletPage);
    return EurowalletPage;
}());



/***/ }),

/***/ "./src/app/auth/googleauth/googleauth.page.html":
/*!******************************************************!*\
  !*** ./src/app/auth/googleauth/googleauth.page.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-container\">\r\n    <div class=\"container\">\r\n        <h3 class=\"text-center mb-4\">\r\n            {{'AUTH.ENABLE_GOOGLE_AUTH' | translate}}\r\n        </h3>\r\n        <form class=\"box\">\r\n            <div class=\"mx-auto\" style=\"max-width: 690px\">\r\n                <div class=\"form-group row\">\r\n                    <label class=\"col-sm-4  col-form-label text-sm-right pr-0\">\r\n                        {{'AUTH.GOOGLE_AUTHENTICATION_CODE' | translate}}:\r\n                    </label>\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"row\">\r\n                            <input type=\"text\" class=\"form-control\"/>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                    <label class=\"col-sm-4  col-form-label text-sm-right pr-0\">\r\n                        {{(profile.allowed_g2f == 2 ? 'AUTH.SMS_AUTHENTICATION_CODE' : 'AUTH.EMAIL_AUTHENTICATION_CODE') | translate}}:\r\n                    </label>\r\n                    <div class=\"col-sm-6\">\r\n                        <input type=\"text\" class=\"form-control\"/>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                    <div class=\"col-sm-12 text-center\">\r\n                        <button class=\"btn btn-warning mt-3 btn-submit\">{{'BUTTON.SUBMIT' | translate}}</button>\r\n                    </div>\r\n                </div>\r\n\r\n                <hr class=\"mt-5 mb-4\"/>\r\n\r\n                <div class=\"text-center px-5\">\r\n                    <strong class=\"text-yellow\">{{'COMMON.NOTE' | translate}}:</strong> {{'AUTH.GOOGLE_AUTH_NOTE' | translate}}\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/auth/googleauth/googleauth.page.scss":
/*!******************************************************!*\
  !*** ./src/app/auth/googleauth/googleauth.page.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box {\n  padding: 50px 15px; }\n\n.btn-submit {\n  width: 180px;\n  height: 35px; }\n\n.btn-send {\n  height: 30px; }\n"

/***/ }),

/***/ "./src/app/auth/googleauth/googleauth.page.ts":
/*!****************************************************!*\
  !*** ./src/app/auth/googleauth/googleauth.page.ts ***!
  \****************************************************/
/*! exports provided: GoogleAuthPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleAuthPage", function() { return GoogleAuthPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_accountApi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/accountApi.service */ "./src/app/services/accountApi.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GoogleAuthPage = /** @class */ (function () {
    function GoogleAuthPage(router, accountApi) {
        this.router = router;
        this.accountApi = accountApi;
        this.profile = {};
    }
    GoogleAuthPage.prototype.ngOnInit = function () {
        var _this = this;
        this.accountApi.getProfile({}).subscribe(function (res) {
            if (res.success) {
                _this.profile = res.data;
            }
        });
    };
    GoogleAuthPage.prototype.ngAfterViewInit = function () {
    };
    GoogleAuthPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-smsauth-page',
            template: __webpack_require__(/*! ./googleauth.page.html */ "./src/app/auth/googleauth/googleauth.page.html"),
            styles: [__webpack_require__(/*! ./googleauth.page.scss */ "./src/app/auth/googleauth/googleauth.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_accountApi_service__WEBPACK_IMPORTED_MODULE_2__["AccountApiService"]])
    ], GoogleAuthPage);
    return GoogleAuthPage;
}());



/***/ }),

/***/ "./src/app/auth/market/market.page.html":
/*!**********************************************!*\
  !*** ./src/app/auth/market/market.page.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-container\">\r\n    <div class=\"container\">\r\n        <div class=\"price-row\">\r\n            <div class=\"d-inline-flex pl-4\">\r\n                <div class=\"mr-2\">\r\n                    <img style=\"width: 36px;\" src=\"/assets/img/coin/{{selCoin}}.png\" alt=\"bitcoin\">\r\n                </div>\r\n                <div class=\"text-left\">\r\n                    <strong>{{selCoin}} / {{selMarketCoin}}</strong>\r\n                    <br/> {{selPair.fullname}}\r\n                </div>\r\n            </div>\r\n            <div>\r\n                <strong>{{'LABEL.LAST_PRICE' | translate}}</strong>\r\n                <br/> {{selPair.last_price | number:'1.'+selPair.places+'-'+selPair.places}}\r\n            </div>\r\n            <div>\r\n                <strong>{{'LABEL.CHANGE_24S' | translate}}</strong>\r\n                <br/>\r\n                <span [ngClass]=\"{'text-danger': selPair.change < 0, 'text-success': selPair.change > 0}\">{{selPair.change | number:'1.2-2'}}%</span>\r\n            </div>\r\n            <div>\r\n                <strong>{{'LABEL.VOLUME_24S' | translate}}</strong>\r\n                <br/> {{selPair.volume | number:'1.2-2'}}\r\n            </div>\r\n            <div>\r\n                <strong>{{'LABEL.HIGHEST_PRICE_24S' | translate}}</strong>\r\n                <br/> {{selPair.high | number:'1.'+selPair.places+'-'+selPair.places}}\r\n            </div>\r\n            <div>\r\n                <strong>{{'LABEL.LOWEST_PRICE_24S' | translate}}</strong>\r\n                <br/> {{selPair.low | number:'1.'+selPair.places+'-'+selPair.places}}\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row mt-5\">\r\n            <div class=\"col-md-3 mb-4\">\r\n                <div class=\"box price-box\">\r\n                    <!--<div>-->\r\n                    <!--<button class=\"btn btn-pricetype active\">-->\r\n                    <!--<img src=\"/assets/icon/price_type1.png\" alt=\"type1\">-->\r\n                    <!--</button>-->\r\n                    <!--<button class=\"btn btn-pricetype\">-->\r\n                    <!--<img src=\"/assets/icon/price_type2.png\" alt=\"type1\">-->\r\n                    <!--</button>-->\r\n                    <!--<button class=\"btn btn-pricetype\">-->\r\n                    <!--<img src=\"/assets/icon/price_type2.png\" alt=\"type1\">-->\r\n                    <!--</button>-->\r\n                    <!--<select class=\"form-control float-right\">-->\r\n                    <!--<option>2 {{'market.decimals' | translate}}</option>-->\r\n                    <!--</select>-->\r\n                    <!--</div>-->\r\n                    <div class=\"table-responsive sell-table\">\r\n                        <table class=\"table mb-1\">\r\n                            <colgroup>\r\n                                <col width=\"auto\">\r\n                                <col width=\"auto\">\r\n                                <col width=\"auto\">\r\n                            </colgroup>\r\n                            <thead>\r\n                            <tr>\r\n                                <th>{{'LABEL.RATE' | translate}}({{selMarketCoin}})</th>\r\n                                <th class=\"text-right\" >{{'LABEL.AMOUNT' | translate}}({{selCoin}})</th>\r\n                                <th class=\"text-right\">{{'LABEL.TOTAL' | translate}}({{selMarketCoin}})</th>\r\n                            </tr>\r\n                            </thead>\r\n                            <tbody class=\"text-danger\">\r\n                            <tr class=\"cursor-pointer\" *ngFor=\"let order of sellOrders\" (click)=\"setBuyRate(order.rate, order.amount)\">\r\n                                <td>{{order.rate | number:'1.'+selPair.places+'-'+selPair.places}}</td>\r\n                                <td class=\"text-right\">{{order.amount | number:'1.8-8'}}</td>\r\n                                <td class=\"text-right\">{{(order.rate * order.amount) | number:'1.'+selPair.places+'-'+selPair.places}}</td>\r\n                            </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                    <div class=\"text-center alert mb-0\">\r\n                        <span class=\"text-success mr-3\">{{selPair.last_price | number:'1.'+selPair.places+'-'+selPair.places}}\r\n                        </span>\r\n                    </div>\r\n                    <div class=\"table-responsive buy-table\">\r\n                        <table class=\"table mb-1\">\r\n                            <colgroup>\r\n                                <col width=\"auto\">\r\n                                <col width=\"auto\">\r\n                                <col width=\"auto\">\r\n                            </colgroup>\r\n                            <tbody class=\"text-success\">\r\n                            <tr class=\"cursor-pointer\" *ngFor=\"let order of buyOrders\" (click)=\"setSellRate(order.rate, order.amount)\">\r\n                                <td>{{order.rate | number:'1.'+selPair.places+'-'+selPair.places}}</td>\r\n                                <td class=\"text-right\">{{order.amount | number:'1.8-8'}}</td>\r\n                                <td class=\"text-right\">{{(order.rate * order.amount) | number:'1.'+selPair.places+'-'+selPair.places}}</td>\r\n                            </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-6 mb-4\">\r\n                <div class=\"box\">\r\n                    <div id=\"marketchart\" [chart]=\"stockChart\" class=\"ct-chart\"></div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-3 mb-4\">\r\n                <div class=\"box coin-box h-100\">\r\n                    <div class=\"btn-group coinbtn-group\" style=\"margin: -1px 0 0 -1px\">\r\n                        <button type=\"button\" class=\"btn btn-white\" [ngClass]=\"{'selected': activeMarketCoin=='TL'}\" (click)=\"onSelectMarketCoin('TL')\">TL</button>\r\n                        <button type=\"button\" class=\"btn btn-white\" [ngClass]=\"{'selected': activeMarketCoin=='BTC'}\" (click)=\"onSelectMarketCoin('BTC')\">BTC</button>\r\n                        <button type=\"button\" class=\"btn btn-white\" [ngClass]=\"{'selected': activeMarketCoin=='USDT'}\" (click)=\"onSelectMarketCoin('USDT')\">USDT</button>\r\n                        <button type=\"button\" class=\"btn btn-white\" [ngClass]=\"{'selected': activeMarketCoin=='ETH'}\" (click)=\"onSelectMarketCoin('ETH')\">ETH</button>\r\n                        <button type=\"button\" class=\"btn btn-white\" [ngClass]=\"{'selected': activeMarketCoin=='USD'}\" (click)=\"onSelectMarketCoin('USD')\">USD</button>\r\n                        <button type=\"button\" class=\"btn btn-white\" [ngClass]=\"{'selected': activeMarketCoin=='EURO'}\" (click)=\"onSelectMarketCoin('EURO')\">EURO</button>\r\n                        <button type=\"button\" class=\"btn btn-white\" [ngClass]=\"{'selected': activeMarketCoin=='MISC'}\" (click)=\"onSelectMarketCoin('MISC')\">MISC</button>\r\n                        <button type=\"button\" class=\"btn btn-white\" [ngClass]=\"{'selected': activeMarketCoin=='USC'}\" (click)=\"onSelectMarketCoin('USC')\">USC</button>\r\n                    </div>\r\n                    <div class=\"d-flex text-12 align-items-center mt-1 filters\">\r\n                        <i class=\"fa fa-search\"></i>\r\n                        <input class=\"form-control\" name=\"search\" placeholder=\"{{'LABEL.SEARCH' | translate}}\" [(ngModel)]=\"filtertxt\" (ngModelChange)=\"onFilter()\">\r\n\r\n                        <label class=\"custom-radio mx-3\">{{'LABEL.CHANGE' | translate}}\r\n                            <input type=\"radio\" id=\"volume-radio\" name=\"square-radio\" [(ngModel)]=\"lastColumn\" value=\"change\">\r\n                            <span class=\"checkmark\"></span>\r\n                        </label>\r\n                        <label class=\"custom-radio\">{{'LABEL.VOLUME' | translate}}\r\n                            <input type=\"radio\" id=\"change-radio\" name=\"square-radio\" [(ngModel)]=\"lastColumn\" value=\"volume\">\r\n                            <span class=\"checkmark\"></span>\r\n                        </label>\r\n                    </div>\r\n                    <div class=\"table-responsive pair-table\">\r\n                    <table class=\"table mt-2\">\r\n                        <colgroup>\r\n                            <col width=\"auto\">\r\n                            <col width=\"auto\">\r\n                            <col width=\"auto\">\r\n                            <col width=\"auto\">\r\n                        </colgroup>\r\n                        <thead>\r\n                        <tr class=\"cursor-pointer\">\r\n                            <th (click)=\"onSortTable('coin')\">{{'LABEL.PAIR' | translate}}\r\n                                <i class=\"fa\" [ngClass]=\"{'fa-caret-up': sortInfo[activeMarketCoin].sortColumn == 'coin' && sortInfo[activeMarketCoin].sortOrder == 'asc', 'fa-caret-down': sortInfo[activeMarketCoin].sortColumn == 'coin' && sortInfo[activeMarketCoin].sortOrder == 'desc'}\"></i>\r\n                            </th>\r\n                            <th (click)=\"onSortTable('last_price')\">{{'LABEL.PRICE' | translate}}\r\n                                <i class=\"fa\" [ngClass]=\"{'fa-caret-up': sortInfo[activeMarketCoin].sortColumn == 'last_price' && sortInfo[activeMarketCoin].sortOrder == 'asc', 'fa-caret-down': sortInfo[activeMarketCoin].sortColumn == 'last_price' && sortInfo[activeMarketCoin].sortOrder == 'desc'}\"></i>\r\n                            </th>\r\n                            <th (click)=\"onSortTable('change')\" class=\"text-right\" *ngIf=\"lastColumn == 'change'\">{{'LABEL.CHANGE' | translate}}\r\n                                <i class=\"fa\" [ngClass]=\"{'fa-caret-up': sortInfo[activeMarketCoin].sortColumn == 'change' && sortInfo[activeMarketCoin].sortOrder == 'asc', 'fa-caret-down': sortInfo[activeMarketCoin].sortColumn == 'change' && sortInfo[activeMarketCoin].sortOrder == 'desc'}\"></i>\r\n                            </th>\r\n                            <th (click)=\"onSortTable('volume')\" class=\"text-right\" *ngIf=\"lastColumn == 'volume'\">{{'LABEL.VOLUME' | translate}}\r\n                                <i class=\"fa\" [ngClass]=\"{'fa-caret-up': sortInfo[activeMarketCoin].sortColumn == 'volume' && sortInfo[activeMarketCoin].sortOrder == 'asc', 'fa-caret-down': sortInfo[activeMarketCoin].sortColumn == 'volume' && sortInfo[activeMarketCoin].sortOrder == 'desc'}\"></i>\r\n                            </th>\r\n                        </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                        <tr class=\"cursor-pointer\" *ngFor=\"let pair of pairs\" [ngClass]=\"{'active': pair.coin == selCoin && pair.market_coin == selMarketCoin}\" (click)=\"onClickPair(pair)\">\r\n                            <td>{{pair.coin}}/{{pair.market_coin}}</td>\r\n                            <td>{{pair.last_price | number:'1.'+pair.places+'-'+pair.places}}</td>\r\n                            <td class=\"text-right\" [ngClass]=\"{'text-megna': pair.change > 0, 'text-danger': pair.change < 0}\" *ngIf=\"lastColumn == 'change'\">{{pair.change | number:'1.2-2'}}%</td>\r\n                            <td class=\"text-right\" *ngIf=\"lastColumn == 'volume'\">\r\n                                {{pair.market_coin == 'BTC' || pair.market_coin == 'ETH' || pair.market_coin == 'XRP' ? ((pair.volume * pair.last_price) | number:'1.4-4') : ((pair.volume * pair.last_price) | number:'1.0-0')}}\r\n                            </td>\r\n                        </tr>\r\n                        </tbody>\r\n                    </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-md-3\">\r\n                <div class=\"box trade-box\">\r\n                    <h4>{{'MARKET.TRADE_HISTORY' | translate}}</h4>\r\n                    <div class=\"table-responsive trade-table\">\r\n                        <table class=\"table \">\r\n                            <tbody>\r\n                            <tr class=\"cursor-pointer\" *ngFor=\"let order of tradeHistory\" (click)=\"setRate(order.rate)\">\r\n                                <td [ngClass]=\"{'text-success': order.exchange_type == 0, 'text-danger': order.exchange_type == 1}\">{{order.rate | number:'1.'+selPair.places+'-'+selPair.places}}</td>\r\n                                <td>{{(order.exchange_type == 0 ? add(order.dest_amount, order.fee) : order.src_amount) | number:'1.8-8'}}</td>\r\n                                <td class=\"text-right\">{{order.datetime | date:'HH:mm:ss'}}</td>\r\n                            </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-9\">\r\n                <div class=\"box buysell-box\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-6 right-border\">\r\n                            <div>\r\n                                <div class=\"d-flex\">\r\n                                    <h5>{{selCoin}} {{'LABEL.BUY' | translate}}</h5>\r\n                                    <div class=\"ml-auto\">\r\n                                        <img src=\"/assets/icon/amount.png\" alt=\"amount\"> {{(settings.getBalance(selMarketCoin) | number:'1.8-8') + ' ' + selMarketCoin}}\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group row\">\r\n                                    <label class=\"col-sm-3\">{{'LABEL.RATE' | translate}}</label>\r\n                                    <div class=\"col-sm-9\">\r\n                                        <div class=\"input-custom-group\">\r\n                                            <input type=\"number\" step=0.01 class=\"form-control\" name=\"buy_rate\" min=\"0\" required\r\n                                                   [(ngModel)]=\"buy.rate\" (ngModelChange)=\"calcBuyTotal($event)\">\r\n                                            <span>{{selMarketCoin}}</span>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group row\">\r\n                                    <label class=\"col-sm-3\">{{'LABEL.AMOUNT' | translate}}</label>\r\n                                    <div class=\"col-sm-9\">\r\n                                        <div class=\"input-custom-group\">\r\n                                            <input type=\"number\" step=0.00000001 class=\"form-control\" name=\"buy_amount\" min=\"0\" required\r\n                                                   [(ngModel)]=\"buy.amount\" (ngModelChange)=\"calcBuyTotal($event)\">\r\n                                            <span>{{selCoin}}</span>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group row\">\r\n                                    <label class=\"col-sm-3\"></label>\r\n                                    <div class=\"col-sm-9 text-center\">\r\n                                        <div class=\"row percent-row\">\r\n                                            <div class=\"col-6 col-sm-3\">\r\n                                                <button type=\"button\" class=\"btn\" (click)=\"calcBuyPercent(0.25)\">25%</button>\r\n                                            </div>\r\n                                            <div class=\"col-6 col-sm-3\">\r\n                                                <button type=\"button\" class=\"btn\" (click)=\"calcBuyPercent(0.5)\">50%</button>\r\n                                            </div>\r\n                                            <div class=\"col-6 col-sm-3\">\r\n                                                <button type=\"button\" class=\"btn\" (click)=\"calcBuyPercent(0.75)\">75%</button>\r\n                                            </div>\r\n                                            <div class=\"col-6 col-sm-3\">\r\n                                                <button type=\"button\" class=\"btn\" (click)=\"calcBuyPercent(1)\">100%</button>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group row\">\r\n                                    <label class=\"col-sm-3\">{{'LABEL.TOTAL' | translate}}</label>\r\n                                    <div class=\"col-sm-9\">\r\n                                        <div class=\"input-custom-group\">\r\n                                            <input type=\"number\" class=\"form-control\" name=\"buy_total\" [(ngModel)]=\"buy.total\" (ngModelChange)=\"calcBuyRate($event)\">\r\n                                            <span>{{selMarketCoin}}</span>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group row\">\r\n                                    <label class=\"col-sm-3\">{{'LABEL.FEE' | translate}} ({{selPair.buy_fee | number:'1.0-2'}}%)</label>\r\n                                    <div class=\"col-sm-9\">\r\n                                        <div class=\"input-custom-group\">\r\n                                            <input type=\"text\" class=\"form-control\" name=\"buy_total\" value=\"{{(buy.amount * selPair.buy_fee / 100) | number:'1.8-8'}}\" readonly>\r\n                                            <span>{{selCoin}}</span>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group row\">\r\n                                    <label class=\"col-sm-3\">{{'LABEL.AMOUNT' | translate}}-{{'LABEL.FEE' | translate}}</label>\r\n                                    <div class=\"col-sm-9\">\r\n                                        <div class=\"input-custom-group\">\r\n                                            <input type=\"text\" class=\"form-control\" name=\"buy_total\" value=\"{{(buy.amount * (100 - selPair.buy_fee) / 100) | number:'1.8-8'}}\" readonly>\r\n                                            <span>{{selCoin}}</span>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"text-center\">\r\n                                    <button class=\"btn btn-success primary-size with-border w-100\" (click)=\"newBuyOrder()\">{{selCoin}} {{'LABEL.BUY' | translate}}</button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"col-sm-6\">\r\n                            <div>\r\n                                <div class=\"d-flex\">\r\n                                    <h5>{{'LABEL.SELL' | translate}}</h5>\r\n                                    <div class=\"ml-auto\">\r\n                                        <img src=\"/assets/icon/amount.png\" alt=\"amount\"> {{(settings.getBalance(selCoin) | number:'1.8-8') + ' ' + selCoin}}\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group row\">\r\n                                    <label class=\"col-sm-3\">{{'LABEL.RATE' | translate}}</label>\r\n                                    <div class=\"col-sm-9\">\r\n                                        <div class=\"input-custom-group\">\r\n                                            <input type=\"number\" step=0.01 class=\"form-control\" name=\"buy_rate\" min=\"0\" required\r\n                                                   [(ngModel)]=\"sell.rate\" (ngModelChange)=\"calcSellTotal($event)\">\r\n                                            <span>{{selMarketCoin}}</span>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group row\">\r\n                                    <label class=\"col-sm-3\">{{'LABEL.AMOUNT' | translate}}</label>\r\n                                    <div class=\"col-sm-9\">\r\n                                        <div class=\"input-custom-group\">\r\n                                            <input type=\"number\" step=0.00000001 class=\"form-control\" name=\"buy_amount\" min=\"0\" required\r\n                                                   [(ngModel)]=\"sell.amount\" (ngModelChange)=\"calcSellTotal($event)\">\r\n                                            <span>{{selCoin}}</span>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group row\">\r\n                                    <label class=\"col-sm-3\"></label>\r\n                                    <div class=\"col-sm-9 text-center\">\r\n                                        <div class=\"row percent-row\">\r\n                                            <div class=\"col-6 col-sm-3\">\r\n                                                <button type=\"button\" class=\"btn\" (click)=\"calcSellPercent(0.25)\">25%</button>\r\n                                            </div>\r\n                                            <div class=\"col-6 col-sm-3\">\r\n                                                <button type=\"button\" class=\"btn\" (click)=\"calcSellPercent(0.5)\">50%</button>\r\n                                            </div>\r\n                                            <div class=\"col-6 col-sm-3\">\r\n                                                <button type=\"button\" class=\"btn\" (click)=\"calcSellPercent(0.75)\">75%</button>\r\n                                            </div>\r\n                                            <div class=\"col-6 col-sm-3\">\r\n                                                <button type=\"button\" class=\"btn\" (click)=\"calcSellPercent(1)\">100%</button>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group row\">\r\n                                    <label class=\"col-sm-3\">{{'LABEL.TOTAL' | translate}}</label>\r\n                                    <div class=\"col-sm-9\">\r\n                                        <div class=\"input-custom-group\">\r\n                                            <input type=\"number\" class=\"form-control\" name=\"buy_total\" [(ngModel)]=\"sell.total\" (ngModelChange)=\"calcSellRate($event)\">\r\n                                            <span>{{selMarketCoin}}</span>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group row\">\r\n                                    <label class=\"col-sm-3\">{{'LABEL.FEE' | translate}} ({{selPair.sell_fee | number:'1.0-2'}}%)</label>\r\n                                    <div class=\"col-sm-9\">\r\n                                        <div class=\"input-custom-group\">\r\n                                            <input type=\"text\" class=\"form-control\" name=\"buy_total\" value=\"{{(sell.total * selPair.sell_fee / 100) | number:'1.8-8'}}\" readonly>\r\n                                            <span>{{selMarketCoin}}</span>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group row\">\r\n                                    <label class=\"col-sm-3\">{{'LABEL.TOTAL' | translate}}-{{'LABEL.FEE' | translate}}</label>\r\n                                    <div class=\"col-sm-9\">\r\n                                        <div class=\"input-custom-group\">\r\n                                            <input type=\"text\" class=\"form-control\" name=\"buy_total\" value=\"{{(sell.total * (100 - 1 * selPair.sell_fee) / 100) | number:'1.8-8'}}\" readonly>\r\n                                            <span>{{selMarketCoin}}</span>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"text-center\">\r\n                                    <button class=\"btn btn-danger primary-size with-border w-100\" (click)=\"newSellOrder()\">{{selCoin}} {{'LABEL.SELL' | translate}}</button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"d-flex mt-3\">\r\n            <h6>{{'MARKET.MY_OPEN_ORDERS' | translate}}</h6>\r\n            <div class=\"ml-auto\">\r\n                <label class=\"custom-checkbox mb-0\">{{'MARKET.HIDE_OTHER_PAIRS' | translate}}\r\n                    <input type=\"checkbox\" [(ngModel)]=\"hideOpenOtherChecked\" name=\"hide_open_other_pairs\" (click)=\"hideOpenOtherPairs()\">\r\n                    <span></span>\r\n                </label>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"table-container table-responsive history-table\">\r\n            <table class=\"table\">\r\n                <colgroup>\r\n                    <col width=\"auto\">\r\n                    <col width=\"auto\">\r\n                    <col width=\"auto\">\r\n                    <col width=\"auto\">\r\n                    <col width=\"auto\">\r\n                    <col width=\"auto\">\r\n                    <col width=\"auto\">\r\n                </colgroup>\r\n                <thead>\r\n                <tr>\r\n                    <th>{{'LABEL.PAIR' | translate}}</th>\r\n                    <th>{{'LABEL.TYPE' | translate}}</th>\r\n                    <th>{{'LABEL.TIME' | translate}}</th>\r\n                    <th>{{'LABEL.AMOUNT' | translate}}</th>\r\n                    <th>{{'LABEL.RATE' | translate}}</th>\r\n                    <th>{{'LABEL.TOTAL_PRICE' | translate}}</th>\r\n                    <th class=\"text-center\">{{'LABEL.ACTION' | translate}}</th>\r\n                </tr>\r\n                </thead>\r\n                <tbody>\r\n                <tr *ngFor=\"let order of showPendingOrders\">\r\n                    <td>{{order.type == 0 ? order.dest_coin + '/' + order.src_coin : order.src_coin + '/' + order.dest_coin}}</td>\r\n                    <td>{{(order.type == 0 ? 'LABEL.BUY' : 'LABEL.SELL') | translate}}</td>\r\n                    <td>{{order.created_at | date:'yyyy-MM-dd HH:mm:ss'}}</td>\r\n                    <td>{{(order.type == 0 ? order.dest_amount : order.src_amount) | number:'1.8-8'}}</td>\r\n                    <td>{{order.rate | number:'1.'+selPair.places+'-'+selPair.places}}</td>\r\n                    <td>{{(order.type == 0 ? order.dest_amount * order.rate : order.src_amount * order.rate) | number:'1.'+selPair.places+'-'+selPair.places}}</td>\r\n                    <td class=\"text-center\">\r\n                        <button type=\"button\" class=\"btn btn-sm btn-danger\" (click)=\"cancelOrder(order.id)\">\r\n                            <i class=\"fa fa-close\"></i> </button>\r\n                    </td>\r\n                </tr>\r\n                <tr *ngIf=\"showPendingOrders?.length == 0\">\r\n                    <td class=\"text-center\" colspan=\"7\">\r\n                        {{'MARKET.NO_OPEN_ORDERS' | translate}}\r\n                    </td>\r\n                </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n\r\n        <div class=\"d-flex mt-3\">\r\n            <h6>{{'MARKET.PAST_ORDERS' | translate}}</h6>\r\n            <div class=\"ml-auto\">\r\n                <label class=\"custom-checkbox mb-0\">{{'MARKET.HIDE_OTHER_PAIRS' | translate}}\r\n                    <input type=\"checkbox\" [(ngModel)]=\"hidePastOtherChecked\" name=\"hide_past_other_pairs\" (click)=\"hidePastOtherPairs()\">\r\n                    <span></span>\r\n                </label>\r\n                <a class=\"text-underline ml-5\" [routerLink]=\"['/']\">{{'LABEL.MORE' | translate}}</a>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"table-container table-responsive history-table\">\r\n            <table class=\"table\">\r\n                <colgroup>\r\n                    <col width=\"auto\">\r\n                    <col width=\"auto\">\r\n                    <col width=\"auto\">\r\n                    <col width=\"auto\">\r\n                    <col width=\"auto\">\r\n                    <col width=\"auto\">\r\n                </colgroup>\r\n                <thead>\r\n                <tr>\r\n                    <th>{{'LABEL.PAIR' | translate}}</th>\r\n                    <th>{{'LABEL.TYPE' | translate}}</th>\r\n                    <th>{{'LABEL.TIME' | translate}}</th>\r\n                    <th>{{'LABEL.AMOUNT' | translate}}</th>\r\n                    <th>{{'LABEL.RATE' | translate}}</th>\r\n                    <th>{{'LABEL.TOTAL_PRICE' | translate}}</th>\r\n                </tr>\r\n                </thead>\r\n                <tbody>\r\n                <tr *ngFor=\"let order of showPastOrders\">\r\n                    <td>{{order.exchange_type == 0 ? order.dest_coin + '/' + order.src_coin : order.src_coin + '/' + order.dest_coin}}</td>\r\n                    <td>{{(order.exchange_type == 0 ? 'LABEL.BUY' : 'LABEL.SELL') | translate}}</td>\r\n                    <td>{{order.created_at | date:'yyyy-MM-dd HH:mm:ss'}}</td>\r\n                    <td>{{(order.exchange_type == 0 ? order.dest_amount : order.src_amount) | number:'1.8-8'}}</td>\r\n                    <td>{{order.rate | number:'1.'+selPair.places+'-'+selPair.places}}</td>\r\n                    <td>{{(order.exchange_type == 0 ? order.src_amount : order.dest_amount) | number:'1.'+selPair.places+'-'+selPair.places}}</td>\r\n                </tr>\r\n                <tr *ngIf=\"showPastOrders?.length == 0\">\r\n                    <td class=\"text-center\" colspan=\"6\">\r\n                        {{'MARKET.NO_PAST_ORDERS' | translate}}\r\n                    </td>\r\n                </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/auth/market/market.page.scss":
/*!**********************************************!*\
  !*** ./src/app/auth/market/market.page.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table {\n  font-size: 12px; }\n  .table th {\n    padding: 10px 0; }\n  .table td {\n    padding-top: 5px; }\n  .price-row {\n  display: flex;\n  justify-content: center;\n  font-size: 18px;\n  line-height: 1.2; }\n  .price-row strong {\n    font-size: 14px; }\n  .price-row > div {\n    width: 220px;\n    min-height: 60px;\n    display: inline-block;\n    background: #f7f7f7;\n    box-shadow: 0px 3px 12px -1px rgba(0, 0, 0, 0.43);\n    border-radius: 5px;\n    text-align: center;\n    padding-top: 10px; }\n  .price-row > div:not(:last-child) {\n      margin-right: 25px; }\n  .price-box {\n  padding: 9px 11px; }\n  .price-box select.form-control {\n    font-size: 12px;\n    width: auto;\n    height: 25px;\n    margin-top: 2px; }\n  .price-box .alert {\n    background: #f7f7f7;\n    font-size: 16px;\n    font-weight: bold;\n    color: #605f60;\n    padding: 6px 0px; }\n  .btn-pricetype {\n  padding: 0;\n  border: 1px solid #c1c1c1;\n  background: white;\n  margin-right: 6px; }\n  .btn-pricetype.active {\n    border-color: #ffad29; }\n  .chartbox-1 .btn-white {\n  width: 35px;\n  height: 30px;\n  padding: 0;\n  line-height: 28px;\n  margin-bottom: 0.5rem;\n  font-size: 12px; }\n  .coin-box {\n  padding: 9px 11px; }\n  .coin-box input.form-control {\n    width: 150px;\n    height: 25px;\n    font-size: 14px;\n    padding-left: 20px;\n    line-height: 23px; }\n  .chartbox-2 {\n  padding: 18px; }\n  .chartbox-2 select.form-control {\n    border: 0px none;\n    padding: 0;\n    margin-right: 10px;\n    height: 20px; }\n  .chartbox-2 .fa {\n    font-size: 18px;\n    color: #c1c1c1; }\n  .trade-box {\n  padding: 9px 11px;\n  font-size: 12px; }\n  .p-28px {\n  padding: 25px 10px 0 20px; }\n  .btn-group .btn {\n  padding: 12px 25px;\n  line-height: 1; }\n  .btn-group .btn-third {\n  background: #e6e6e6; }\n  .coinbtn-group {\n  display: initial; }\n  .coinbtn-group .btn {\n    padding: 10px 9px;\n    line-height: 2px;\n    margin-bottom: 5px; }\n  .coinbtn-group .selected {\n    background: #e6e6e6; }\n  .buysell-box .form-group {\n  margin-bottom: 4px; }\n  input.form-control {\n  height: 25px;\n  line-height: 23px; }\n  .input-custom-group {\n  position: relative; }\n  .input-custom-group input.form-control {\n    padding-right: 54px; }\n  .input-custom-group span {\n    position: absolute;\n    top: 4px;\n    right: 12px;\n    color: #afafaf; }\n  .primary-size {\n  width: 230px;\n  height: 40px; }\n  .btn-light {\n  background: #605f60; }\n  .right-border {\n  border-right: 1px solid #c1c1c1; }\n  .percent-row button {\n  height: 20px;\n  line-height: 18px;\n  width: 65px;\n  background-color: white;\n  border: 1px solid #c1c1c1;\n  padding: 0; }\n  h6 {\n  font-size: 16px; }\n  .btn-sm {\n  width: 84px;\n  height: 20px;\n  padding: 0;\n  line-height: 18px;\n  margin-left: 20px; }\n  .text-underline {\n  text-decoration: underline;\n  color: inherit; }\n  .buy-table {\n  min-height: 150px;\n  max-height: 150px; }\n  .sell-table {\n  min-height: 180px;\n  max-height: 180px; }\n  .table-responsive {\n  overflow-x: auto;\n  padding-right: 5px; }\n  .pair-table {\n  min-height: 280px;\n  max-height: 280px; }\n  .pair-table tr.active {\n    color: #ffad29; }\n  .trade-table {\n  min-height: 240px;\n  max-height: 240px; }\n  .history-table {\n  max-height: 250px; }\n  .filters {\n  position: relative; }\n  .filters i {\n    position: absolute;\n    left: 7px;\n    line-height: 25px;\n    color: black; }\n  .ct-chart {\n  min-height: 350px; }\n"

/***/ }),

/***/ "./src/app/auth/market/market.page.ts":
/*!********************************************!*\
  !*** ./src/app/auth/market/market.page.ts ***!
  \********************************************/
/*! exports provided: MarketPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketPage", function() { return MarketPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/settings.service */ "./src/app/services/settings.service.ts");
/* harmony import */ var _services_notify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/notify.service */ "./src/app/services/notify.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_marketApi_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/marketApi.service */ "./src/app/services/marketApi.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _services_pusher_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/pusher.service */ "./src/app/services/pusher.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var angular_highcharts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-highcharts */ "./node_modules/angular-highcharts/angular-highcharts.es5.js");
/* harmony import */ var _services_balance_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/balance.service */ "./src/app/services/balance.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var MarketPage = /** @class */ (function () {
    function MarketPage(router, settings, notify, marketApi, translate, validate, pusher, balance) {
        this.router = router;
        this.settings = settings;
        this.notify = notify;
        this.marketApi = marketApi;
        this.translate = translate;
        this.validate = validate;
        this.pusher = pusher;
        this.balance = balance;
        this.all_pairs = {};
        this.pairs = [];
        this.buy = {};
        this.sell = {};
        this.activeMarketCoin = 'TL';
        this.selMarketCoin = 'TL';
        this.selCoin = 'BTC';
        this.selPair = {
            places: 6
        };
        this.filtertxt = "";
        this.sortInfo = {
            TL: { sortColumn: 'coin', sortOrder: 'asc' },
            BTC: { sortColumn: 'coin', sortOrder: 'asc' },
            ETH: { sortColumn: 'coin', sortOrder: 'asc' },
            USD: { sortColumn: 'coin', sortOrder: 'asc' },
            EURO: { sortColumn: 'coin', sortOrder: 'asc' },
            USDT: { sortColumn: 'coin', sortOrder: 'asc' },
            MISC: { sortColumn: 'coin', sortOrder: 'asc' },
            USC: { sortColumn: 'coin', sortOrder: 'asc' },
        };
        this.lastColumn = 'change';
        this.sellOrders = [];
        this.buyOrders = [];
        this.tradeHistory = [];
        this.pastOrders = [];
        this.pendingOrders = [];
        this.showPastOrders = [];
        this.showPendingOrders = [];
        this.chartTitle = "";
        this.hideOpenOtherChecked = false;
        this.hidePastOtherChecked = false;
        this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    MarketPage.prototype.ngOnInit = function () {
        var _this = this;
        if (window.localStorage.getItem('coin_pair') && window.localStorage.getItem('coin_pair') != '') {
            var coin_pair = window.localStorage.getItem('coin_pair');
            this.selCoin = coin_pair.split('-')[0];
            this.selMarketCoin = coin_pair.split('-')[1];
            this.activeMarketCoin = this.selMarketCoin;
            if (this.activeMarketCoin != 'TL' && this.activeMarketCoin != 'BTC' && this.activeMarketCoin != 'ETH' && this.activeMarketCoin != 'USD' && this.activeMarketCoin != 'USDT' && this.activeMarketCoin != 'EURO' && this.activeMarketCoin != 'USC') {
                this.activeMarketCoin = 'MISC';
            }
        }
        this.translate.get('MARKET.MARKET_HISTORY', {}).subscribe(function (res) {
            _this.chartTitle = res;
        });
        this.marketApi.getUserCoinPairInfo({}).subscribe(function (res) {
            if (res.success) {
                _this.all_pairs.TL = res.data.filter(function (pair) { return pair.market_coin === 'TL'; });
                _this.all_pairs.BTC = res.data.filter(function (pair) { return pair.market_coin === 'BTC'; });
                _this.all_pairs.ETH = res.data.filter(function (pair) { return pair.market_coin === 'ETH'; });
                _this.all_pairs.USD = res.data.filter(function (pair) { return pair.market_coin === 'USD'; });
                _this.all_pairs.EURO = res.data.filter(function (pair) { return pair.market_coin === 'EURO'; });
                _this.all_pairs.USDT = res.data.filter(function (pair) { return pair.market_coin === 'USDT'; });
                _this.all_pairs.USC = res.data.filter(function (pair) { return pair.market_coin === 'USC'; });
                _this.all_pairs.MISC = res.data.filter(function (pair) { return pair.market_coin != 'TL' && pair.market_coin != 'BTC' && pair.market_coin != 'ETH' && pair.market_coin != 'USD' && pair.market_coin != 'EURO' && pair.market_coin != 'USDT' && pair.market_coin != 'USC'; });
                _this.filterCoin();
                _this.selPair = res.data.filter(function (pair) { return pair.coin === _this.selCoin && pair.market_coin == _this.selMarketCoin; })[0];
            }
        });
        this.loadBuyOrder();
        this.loadSellOrder();
        this.loadMarketHistory();
        this.loadPendingOrders();
        this.loadPastOrders();
        this.pusher.getOrderEvent()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["takeUntil"])(this.ngUnsubscribe))
            .subscribe(function (data) {
            _this.onOrderEvent(data);
        });
        // Apply the theme
        angular_highcharts__WEBPACK_IMPORTED_MODULE_10__["Highcharts"].setOptions({
            colors: ['#f45b5b', '#8085e9', '#8d4654', '#7798BF', '#aaeeee',
                '#ff0066', '#eeaaee', '#55BF3B', '#DF5353', '#7798BF', '#aaeeee'],
            chart: {
                backgroundColor: null
            },
            tooltip: {
                borderWidth: 0
            },
        });
        this.loadChart();
    };
    MarketPage.prototype.ngOnDestroy = function () {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    };
    MarketPage.prototype.onOrderEvent = function (data) {
        if (data.last_price && data.last_price != '' && data.last_price > 0) {
            var pair = void 0;
            if (data.marketCoin != 'TL' && data.marketCoin != 'BTC' && data.marketCoin != 'ETH' &&
                data.marketCoin != 'USD' && data.marketCoin != 'USDT' && data.marketCoin != 'EURO' && data.marketCoin != 'USC') {
                pair = this.all_pairs.MISC.filter(function (pair) { return pair.coin == data.coin && pair.market_coin == data.marketCoin; })[0];
            }
            else {
                pair = this.all_pairs[data.marketCoin].filter(function (pair) { return pair.coin == data.coin; })[0];
            }
            pair.last_price = data.last_price;
            pair.change = pair.first_price > 0 ? (pair.last_price - pair.first_price) * 100 / pair.first_price : 0;
            if (pair.last_price > pair.high) {
                pair.high = pair.last_price;
            }
            if (pair.last_price < pair.low) {
                pair.low = pair.last_price;
            }
            pair.volume = Number(pair.volume) + (Number(data.volume) > 0 ? Number(data.volume) : 0);
            if (this.selCoin == data.coin && this.selMarketCoin == data.marketCoin) {
                if (data.trades.length && data.trades.length > 0) {
                    for (var i = 0; i < data.trades.length; i++) {
                        if (data.trades[i].type == 0) {
                            this.tradeHistory.splice(0, 0, {
                                rate: data.trades[i].rate,
                                datetime: data.datetime,
                                exchange_type: data.trades[i].type,
                                dest_amount: data.trades[i].amount,
                                fee: 0
                            });
                        }
                        else if (data.trades[i].type == 1) {
                            this.tradeHistory.splice(0, 0, {
                                rate: data.trades[i].rate,
                                datetime: data.datetime,
                                exchange_type: data.trades[i].type,
                                src_amount: data.trades[i].amount
                            });
                        }
                    }
                }
            }
            // this.filterCoin();
        }
        if (this.selCoin == data.coin && this.selMarketCoin == data.marketCoin) {
            if (data.users.length && data.users.length > 0 && data.users.includes(this.settings.getUserSetting('id'))) {
                this.loadPendingOrders();
                this.loadPastOrders();
            }
            if (data.rates.length && data.rates.length > 0) {
                var _loop_1 = function (i) {
                    var order = this_1.sellOrders.filter(function (order) { return Number(order.rate) == Number(data.rates[i].rate); });
                    if (order.length > 0 && Number(data.rates[i].sellAmount) <= 0) {
                        this_1.sellOrders = this_1.sellOrders.filter(function (order) { return Number(order.rate) != Number(data.rates[i].rate); });
                    }
                    else if (order.length > 0 && Number(data.rates[i].sellAmount) > 0) {
                        order[0].amount = data.rates[i].sellAmount;
                    }
                    else if (order.length == 0 && Number(data.rates[i].sellAmount) > 0) {
                        this_1.sellOrders.push({
                            rate: data.rates[i].rate,
                            amount: data.rates[i].sellAmount
                        });
                        this_1.sellOrders = this_1.sellOrders.sort(function (r1, r2) {
                            return Number(r1.rate) > Number(r2.rate) ? 1 : -1;
                        });
                    }
                    order = this_1.buyOrders.filter(function (order) { return Number(order.rate) == Number(data.rates[i].rate); });
                    if (order.length > 0 && Number(data.rates[i].buyAmount) <= 0) {
                        this_1.buyOrders = this_1.buyOrders.filter(function (order) { return Number(order.rate) != Number(data.rates[i].rate); });
                    }
                    else if (order.length > 0 && Number(data.rates[i].buyAmount) > 0) {
                        order[0].amount = data.rates[i].buyAmount;
                    }
                    else if (order.length == 0 && Number(data.rates[i].buyAmount) > 0) {
                        this_1.buyOrders.push({
                            rate: data.rates[i].rate,
                            amount: data.rates[i].buyAmount
                        });
                        this_1.buyOrders = this_1.buyOrders.sort(function (r1, r2) {
                            return Number(r1.rate) < Number(r2.rate) ? 1 : -1;
                        });
                    }
                };
                var this_1 = this;
                for (var i = 0; i < data.rates.length; i++) {
                    _loop_1(i);
                }
            }
        }
    };
    MarketPage.prototype.loadChart = function () {
        var _parent = this;
        this.marketApi.getChartData(this.selCoin, this.selMarketCoin, {}).subscribe(function (res) {
            if (res.success) {
                // split the data set into ohlc and volume
                var ohlc = [], volume = [], dataLength = res.data.length, 
                // set the allowed units for data grouping
                groupingUnits = [[
                        'minute',
                        [1, 2, 3, 4, 6] // allowed multiples
                    ], [
                        'hour',
                        [1, 2, 3, 4, 5, 6, 7]
                    ]], i = 0;
                for (i; i < res.data.length; i += 1) {
                    ohlc.push([
                        Number(res.data[i].date),
                        Number(res.data[i].open),
                        Number(res.data[i].high),
                        Number(res.data[i].low),
                        Number(res.data[i].close) // close
                    ]);
                    volume.push([
                        Number(res.data[i].date),
                        Number(res.data[i].volume) // the volume
                    ]);
                }
                var options = {
                    rangeSelector: {
                        selected: 5,
                        buttons: [{
                                type: 'minute',
                                count: 10,
                                text: '10m',
                            }, {
                                type: 'minute',
                                count: 20,
                                text: '20m'
                            }, {
                                type: 'hour',
                                count: 1,
                                text: '1h'
                            }, {
                                type: 'hour',
                                count: 12,
                                text: '12h'
                            }, {
                                type: 'day',
                                count: 1,
                                text: '1d'
                            }, {
                                type: 'day',
                                count: 7,
                                text: '1w'
                            }, {
                                type: 'all',
                                text: 'All'
                            }]
                    },
                    title: {
                        text: _parent.chartTitle
                    },
                    yAxis: [{
                            labels: {
                                align: 'right',
                                x: -3
                            },
                            title: {
                                text: 'Price'
                            },
                            height: '80%',
                            lineWidth: 2,
                            resize: {
                                enabled: true
                            }
                        }, {
                            labels: {
                                align: 'right',
                                x: -3
                            },
                            title: {
                                text: 'Volume'
                            },
                            top: '80%',
                            height: '20%',
                            offset: 0,
                            lineWidth: 2
                        }],
                    tooltip: {
                        split: true
                    },
                    series: [{
                            type: 'candlestick',
                            name: 'Exchange Price',
                            data: ohlc,
                            dataGrouping: {
                                units: groupingUnits
                            }
                        }, {
                            type: 'column',
                            name: 'Volume',
                            data: volume,
                            yAxis: 1,
                            dataGrouping: {
                                units: groupingUnits
                            }
                        }]
                };
                // create the chart
                _parent.stockChart = new angular_highcharts__WEBPACK_IMPORTED_MODULE_10__["StockChart"](options);
                var timerID_1 = setInterval(function () {
                    if ($('.highcharts-credits').length > 0) {
                        $('.highcharts-credits').hide();
                        clearInterval(timerID_1);
                    }
                }, 100);
            }
        });
    };
    MarketPage.prototype.loadSellOrder = function () {
        var _this = this;
        this.marketApi.getSellOrders(this.selCoin, this.selMarketCoin, {}).subscribe(function (res) {
            if (res.success) {
                _this.sellOrders = res.data;
            }
        });
    };
    MarketPage.prototype.loadBuyOrder = function () {
        var _this = this;
        this.marketApi.getBuyOrders(this.selCoin, this.selMarketCoin, {}).subscribe(function (res) {
            if (res.success) {
                _this.buyOrders = res.data;
            }
        });
    };
    MarketPage.prototype.loadMarketHistory = function () {
        var _this = this;
        this.marketApi.getLastOrders(this.selCoin, this.selMarketCoin, {}).subscribe(function (res) {
            if (res.success) {
                _this.tradeHistory = res.data;
            }
        });
    };
    MarketPage.prototype.loadPastOrders = function () {
        var _this = this;
        this.marketApi.getUserAllPastOrders({}).subscribe(function (res) {
            if (res.success) {
                _this.pastOrders = res.data;
                _this.showPastOrders = res.data;
            }
        });
    };
    MarketPage.prototype.loadPendingOrders = function () {
        var _this = this;
        this.marketApi.getUserAllPendingOrders({}).subscribe(function (res) {
            if (res.success) {
                _this.pendingOrders = res.data;
                _this.showPendingOrders = res.data;
            }
        });
    };
    MarketPage.prototype.newBuyOrder = function () {
        var _this = this;
        if (!this.buy.rate || !this.buy.amount) {
            return;
        }
        if (this.buy.rate == '' || this.buy.amount == '') {
            return;
        }
        if (this.buy.rate == 0 || this.buy.amount == 0) {
            return;
        }
        this.settings.loading = true;
        this.marketApi.makeBuyOrder(this.selCoin, this.selMarketCoin, this.buy).subscribe(function (res) {
            _this.settings.loading = false;
            if (res.success) {
                _this.notify.showSuccess('Your order was posted successfully.');
            }
            else {
                _this.notify.showWarning(res.error);
            }
        }, function (err) {
            _this.settings.loading = false;
            _this.notify.showError(err);
        });
    };
    MarketPage.prototype.newSellOrder = function () {
        var _this = this;
        if (!this.sell.rate || !this.sell.amount) {
            return;
        }
        if (this.sell.rate == '' || this.sell.amount == '') {
            return;
        }
        if (this.sell.rate == 0 || this.sell.amount == 0) {
            return;
        }
        this.settings.loading = true;
        this.marketApi.makeSellOrder(this.selCoin, this.selMarketCoin, this.sell).subscribe(function (res) {
            _this.settings.loading = false;
            if (res.success) {
                _this.notify.showSuccess('Your order was posted successfully.');
            }
            else {
                _this.notify.showWarning(res.error);
            }
        }, function (err) {
            _this.settings.loading = false;
            _this.notify.showError(err);
        });
    };
    MarketPage.prototype.cancelOrder = function (id) {
        var _parent = this;
        swal({
            title: 'Are you sure?',
            text: 'Your order will be deleted permanently.',
            type: 'warning',
            showCancelButton: true,
            confirmButtonClass: 'btn btn-success',
            cancelButtonClass: 'btn btn-danger',
            confirmButtonText: 'Yes',
            buttonsStyling: false
        }, function () {
            _parent.marketApi.cancelOrder({
                id: id
            }).subscribe(function (res) {
                if (res.success) {
                    _parent.notify.showSuccess('Your order was canceled successfully.');
                    _parent.balance.getCoinBalance(_parent.selCoin);
                    _parent.balance.getCoinBalance(_parent.selMarketCoin);
                    _parent.loadPendingOrders();
                }
                else {
                    _parent.notify.showWarning(res.error);
                }
            });
        });
    };
    MarketPage.prototype.onClickPair = function (pair) {
        if (pair.coin == this.selCoin && pair.market_coin == this.selMarketCoin) {
            return;
        }
        this.buy = {};
        this.sell = {};
        this.selMarketCoin = pair.market_coin;
        this.selCoin = pair.coin;
        this.selPair = pair;
        this.sell.rate = this.validate.round(this.selPair.last_price, this.selPair.places);
        this.buy.rate = this.validate.round(this.selPair.last_price, this.selPair.places);
        this.loadSellOrder();
        this.loadBuyOrder();
        this.loadMarketHistory();
        this.loadChart();
        window.localStorage.setItem('coin_pair', this.selCoin + '-' + this.selMarketCoin);
    };
    MarketPage.prototype.onSelectMarketCoin = function (marketCoin) {
        this.activeMarketCoin = marketCoin;
        this.filterCoin();
        // this.pairs = this.all_pairs[marketCoin];
    };
    MarketPage.prototype.calcSellTotal = function (e) {
        if (this.sell.rate > 0 && this.sell.amount > 0) {
            this.sell.total = this.validate.round(this.sell.rate * this.sell.amount, this.selPair.places);
        }
    };
    MarketPage.prototype.calcSellRate = function (e) {
        if (this.sell.rate > 0) {
            this.sell.amount = this.validate.floor(this.sell.total / this.sell.rate, 8);
        }
        else if (this.sell.amount > 0) {
            this.sell.rate = this.validate.floor(this.sell.total / this.sell.amount, this.selPair.places);
        }
    };
    MarketPage.prototype.calcSellPercent = function (v) {
        this.sell.amount = this.validate.floor(this.settings.getBalance(this.selCoin) * v, 8);
        this.calcSellTotal(this.sell.amount);
    };
    MarketPage.prototype.calcBuyTotal = function (e) {
        if (this.buy.rate > 0 && this.buy.amount > 0) {
            this.buy.total = this.validate.round(this.buy.rate * this.buy.amount, this.selPair.places);
        }
    };
    MarketPage.prototype.calcBuyRate = function (e) {
        if (this.buy.rate > 0) {
            this.buy.amount = this.validate.floor(this.buy.total / this.buy.rate, 8);
        }
        else if (this.buy.amount > 0) {
            this.buy.rate = this.validate.floor(this.buy.total / this.buy.amount, this.selPair.places);
        }
    };
    MarketPage.prototype.calcBuyPercent = function (v) {
        this.buy.total = this.validate.floor(this.settings.getBalance(this.selMarketCoin) * v, 8);
        this.calcBuyRate(this.buy.total);
    };
    MarketPage.prototype.setBuyRate = function (rate, amount) {
        this.buy.rate = this.validate.round(rate, this.selPair.places);
        var orders = this.sellOrders.filter(function (order) { return Number(order.rate) <= Number(rate); });
        var total_amount = 0;
        var total_value = 0;
        for (var i = 0; i < orders.length; i++) {
            total_amount += Number(orders[i].amount);
            total_value += Number(orders[i].amount) * Number(orders[i].rate);
        }
        this.buy.amount = this.validate.round(total_amount, 8);
        this.buy.total = this.validate.round(total_value, 8);
    };
    MarketPage.prototype.setRate = function (rate) {
        this.sell.rate = this.validate.round(rate, this.selPair.places);
        this.buy.rate = this.validate.round(rate, this.selPair.places);
    };
    MarketPage.prototype.setSellRate = function (rate, amount) {
        this.sell.rate = this.validate.round(rate, this.selPair.places);
        var orders = this.buyOrders.filter(function (order) { return Number(order.rate) >= Number(rate); });
        var total_amount = 0;
        var total_value = 0;
        for (var i = 0; i < orders.length; i++) {
            total_amount += Number(orders[i].amount);
            total_value += Number(orders[i].amount) * Number(orders[i].rate);
        }
        this.sell.amount = this.validate.round(total_amount, 8);
        this.sell.total = this.validate.round(total_value, 8);
    };
    MarketPage.prototype.add = function (num1, num2) {
        return Number(num1) + Number(num2);
    };
    MarketPage.prototype.filterCoin = function () {
        var _this = this;
        this.pairs = this.all_pairs[this.activeMarketCoin];
        this.pairs = this.pairs.filter(function (coin) { return coin.coin.toLowerCase().indexOf(_this.filtertxt.toLowerCase()) !== -1 || coin.fullname.toLowerCase().indexOf(_this.filtertxt.toLowerCase()) !== -1; });
        if (this.sortInfo[this.activeMarketCoin].sortColumn != '') {
            var _parent_1 = this;
            this.pairs = this.pairs.sort(function (r1, r2) {
                var r1v = r1[_parent_1.sortInfo[_parent_1.activeMarketCoin].sortColumn];
                var r2v = r2[_parent_1.sortInfo[_parent_1.activeMarketCoin].sortColumn];
                if (_parent_1.sortInfo[_parent_1.activeMarketCoin].sortColumn == 'volume') {
                    r1v = r1v * r1['last_price'];
                    r2v = r2v * r2['last_price'];
                }
                if (!isNaN(r1v))
                    r1v = Number(r1v);
                if (!isNaN(r2v))
                    r2v = Number(r2v);
                if (_parent_1.sortInfo[_parent_1.activeMarketCoin].sortOrder == 'asc') {
                    return r1v > r2v ? 1 : (r1v == r2v ? 0 : -1);
                }
                else {
                    return r1v < r2v ? 1 : (r1v == r2v ? 0 : -1);
                }
            });
        }
    };
    MarketPage.prototype.onFilter = function () {
        this.filterCoin();
    };
    MarketPage.prototype.onSortTable = function (header) {
        if (this.sortInfo[this.activeMarketCoin].sortColumn == header && this.sortInfo[this.activeMarketCoin].sortOrder == 'desc') {
            this.sortInfo[this.activeMarketCoin].sortOrder = 'asc';
        }
        else {
            this.sortInfo[this.activeMarketCoin].sortOrder = 'desc';
        }
        this.sortInfo[this.activeMarketCoin].sortColumn = header;
        this.filterCoin();
    };
    MarketPage.prototype.hideOpenOtherPairs = function () {
        var _this = this;
        if (this.hideOpenOtherChecked) {
            this.showPendingOrders = this.pendingOrders.filter(function (order) { return 1 == 1; });
        }
        else {
            this.showPendingOrders = this.pendingOrders.filter(function (order) { return ((order.src_coin == _this.selMarketCoin && order.dest_coin == _this.selCoin) || (order.src_coin == _this.selCoin && order.dest_coin == _this.selMarketCoin)); });
        }
    };
    MarketPage.prototype.hidePastOtherPairs = function () {
        var _this = this;
        if (this.hidePastOtherChecked) {
            this.showPastOrders = this.pastOrders.filter(function (order) { return 1 == 1; });
        }
        else {
            this.showPastOrders = this.pastOrders.filter(function (order) { return ((order.src_coin == _this.selMarketCoin && order.dest_coin == _this.selCoin) || (order.src_coin == _this.selCoin && order.dest_coin == _this.selMarketCoin)); });
        }
    };
    MarketPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./market.page.html */ "./src/app/auth/market/market.page.html"),
            styles: [__webpack_require__(/*! ./market.page.scss */ "./src/app/auth/market/market.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_settings_service__WEBPACK_IMPORTED_MODULE_2__["SettingsService"],
            _services_notify_service__WEBPACK_IMPORTED_MODULE_3__["NotifyService"],
            _services_marketApi_service__WEBPACK_IMPORTED_MODULE_5__["MarketApiService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
            _services_validate_service__WEBPACK_IMPORTED_MODULE_7__["ValidateService"],
            _services_pusher_service__WEBPACK_IMPORTED_MODULE_8__["PusherService"],
            _services_balance_service__WEBPACK_IMPORTED_MODULE_11__["BalanceService"]])
    ], MarketPage);
    return MarketPage;
}());



/***/ }),

/***/ "./src/app/auth/profile/profile.page.html":
/*!************************************************!*\
  !*** ./src/app/auth/profile/profile.page.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-container\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-6 mb-4\">\r\n                <div class=\"box box1 p-0\">\r\n                    <div class=\"p-4 d-flex flex-column flex-md-row\">\r\n                        <div class=\"avatar mr-4\">\r\n\r\n                        </div>\r\n                        <div class=\"mt-2 mt-sm-0 topbox\">\r\n                            <h5 class=\"font-weight-normal\">{{settings.getUserSetting('name')}}</h5>\r\n                            <div>{{settings.getUserSetting('email')}}</div>\r\n                            <div class=\"text-warning font-weight-bold\">\r\n                                <span class=\"my-icon\" [inlineSVG]=\"'/assets/icon/lvl.svg'\"></span>\r\n                                {{'PROFILE.LEVEL' | translate}} 1\r\n                            </div>\r\n                            <div>\r\n                                <span class=\"badge badge-success mr-2 px-3\" *ngIf=\"profile.verify_status == 3\">{{'PROFILE.VERIFIED' | translate}}</span>\r\n                                <span class=\"badge badge-danger mr-2 px-3\" *ngIf=\"profile.verify_status == 2\">{{'PROFILE.CANCELLED' | translate}}</span>\r\n                                <span class=\"badge badge-info mr-2 px-3\" *ngIf=\"profile.verify_status == 1\">{{'PROFILE.REVIEWING' | translate}}</span>\r\n                                <span class=\"badge badge-danger mr-2 px-3\" *ngIf=\"profile.verify_status == 0\">{{'PROFILE.UNVERIFIED' | translate}}</span>\r\n                                <!--<span class=\"badge badge-primary px-3\">{{'PROFILE.GENERAL' | translate}}</span>-->\r\n                                <button class=\"btn btn-sm btn-warning ml-3\" (click)=\"onVerifyNow()\" *ngIf=\"profile.verify_status == 2 || profile.verify_status == 0\">{{'BUTTON.VERIFY_NOW' | translate}}</button>\r\n                            </div>\r\n                            <div class=\"text-12\">\r\n                                {{'PROFILE.LAST_LOGIN_TIME' | translate}}: {{profile.last_login | date:'yyyy-MM-dd HH:mm:ss'}}\r\n                                <!--<br/> {{'PROFILE.DISCOUNT' | translate}}-->\r\n                                <!--<label class=\"switch\">-->\r\n                                    <!--<input type=\"checkbox\">-->\r\n                                    <!--<span class=\"slider round\"></span>-->\r\n                                <!--</label>-->\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <hr class=\"my-0\">\r\n                    <div class=\"pl-1 pl-sm-2 py-5\">\r\n                        <div class=\"d-flex text-center levels\">\r\n                            <div>\r\n                                <div>24th {{'PROFILE.WITHDRAWAL_LIMIT' | translate}}:\r\n                                    <br/>2 BTC\r\n                                </div>\r\n                                <span class=\"diamond\"></span>\r\n                                <div>{{'PROFILE.LEVEL' | translate}} 1</div>\r\n                            </div>\r\n                            <div>\r\n                                <div>24th {{'PROFILE.WITHDRAWAL_LIMIT' | translate}}:\r\n                                    <br/>100 BTC\r\n                                </div>\r\n                                <span class=\"diamond disabled\"></span>\r\n                                <div>{{'PROFILE.LEVEL' | translate}} 2</div>\r\n                            </div>\r\n                            <div>\r\n                                <div [innerHTML]=\"'PROFILE.HIGHER_LIMIT' | translate\"></div>\r\n                                <span class=\"diamond disabled\"></span>\r\n                                <div>{{'PROFILE.LEVEL' | translate}} 3</div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-sm-6 mb-4\">\r\n                <div class=\"box h-100 d-flex flex-column justify-content-between change-box\">\r\n                    <div class=\"d-flex align-items-center\">\r\n                        <span class=\"svg-icon mr-3\" [inlineSVG]=\"'/assets/icon/password.svg'\"></span>\r\n                        <h6>{{'PROFILE.LOGIN_PASSWORD' | translate}}</h6>\r\n                        <div class=\"ml-auto\">\r\n                            <button class=\"btn btn-warning with-border ml-3\" (click)=\"onChangePassword()\">{{'BUTTON.CHANGE' | translate}}</button>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"d-flex\">\r\n                        <span class=\"svg-icon mr-3\" [inlineSVG]=\"'/assets/icon/anti-phishing.svg'\"></span>\r\n                        <div>\r\n                            <h6>{{'PROFILE.BANK_ACCOUNT' | translate}}</h6>\r\n                        </div>\r\n                        <div class=\"ml-auto\">\r\n                            <button class=\"btn btn-warning with-border ml-3\" (click)=\"onUpdateBank()\">{{'BUTTON.CHANGE' | translate}}</button>\r\n                        </div>\r\n                    </div>\r\n                    <!--<div class=\"d-flex\">-->\r\n                        <!--<span class=\"svg-icon mr-3\" [inlineSVG]=\"'/assets/icon/anti-phishing.svg'\"></span>-->\r\n                        <!--<div>-->\r\n                            <!--<h6>{{'PROFILE.ANTI_PHISHING_CODE' | translate}}</h6>-->\r\n                            <!--<p>-->\r\n                                <!--{{'PROFILE.ANTIPISHING_TEXT' | translate}}-->\r\n                            <!--</p>-->\r\n                        <!--</div>-->\r\n                        <!--<div class=\"ml-auto\">-->\r\n                            <!--<button class=\"btn btn-third with-border ml-3\">{{'BUTTON.CHANGE' | translate}}</button>-->\r\n                        <!--</div>-->\r\n                    <!--</div>-->\r\n                    <div class=\"d-flex mb-4\">\r\n                        <span class=\"svg-icon mr-3\" [inlineSVG]=\"'/assets/icon/api.svg'\"></span>\r\n                        <div>\r\n                            <h6>{{'PROFILE.API' | translate}}</h6>\r\n                            <p>{{'PROFILE.API_TEXT' | translate}}\r\n                            </p>\r\n                        </div>\r\n                        <div class=\"ml-auto\">\r\n                            <button class=\"btn btn-third with-border ml-3\">{{'BUTTON.COMING_SOON' | translate}}</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-6 mb-4\">\r\n                <div class=\"box change-box\">\r\n                    <div class=\"d-flex mt-4\">\r\n                        <span class=\"mr-3\"><i class=\"fa fa-google auth-icon\"></i></span>\r\n                        <div>\r\n                            <h6>{{'PROFILE.GOOGLE_AUTHENTICATION' | translate}}</h6>\r\n                            <p>\r\n                                {{'PROFILE.GOOGLEAUTH_TEXT' | translate}}\r\n                            </p>\r\n                        </div>\r\n                        <div class=\"ml-auto\" *ngIf=\"profile.allowed_g2f != 1\">\r\n                            <button class=\"btn btn-warning with-border ml-3\">{{'BUTTON.ENABLE' | translate}}</button>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <hr class=\"my-5\">\r\n\r\n                    <div class=\"d-flex \">\r\n                        <span class=\"mr-3\"><i class=\"fa fa-mobile auth-icon\"></i></span>\r\n                        <div>\r\n                            <h6>{{'PROFILE.SMS_AUTHENTICATION' | translate}}</h6>\r\n                            <p>\r\n                                {{'PROFILE.SMSAUTH_TEXT' | translate}}\r\n                            </p>\r\n                        </div>\r\n                        <div class=\"ml-auto\" *ngIf=\"profile.allowed_g2f != 2\">\r\n                            <button class=\"btn btn-warning with-border ml-3\" (click)=\"onEnableSMS()\">{{'BUTTON.ENABLE' | translate}}</button>\r\n                        </div>\r\n                    </div>\r\n                    <hr class=\"my-5\">\r\n\r\n                    <div class=\"d-flex mb-5\">\r\n                        <span class=\"mr-3\"><i class=\"fa fa-envelope auth-icon\"></i></span>\r\n                        <div>\r\n                            <h6>{{'PROFILE.EMAIL_AUTHENTICATION' | translate}}</h6>\r\n                            <p>\r\n                                {{'PROFILE.EMAILAUTH_TEXT' | translate}}\r\n                            </p>\r\n                        </div>\r\n                        <div class=\"ml-auto\" *ngIf=\"profile.allowed_g2f != 3\">\r\n                            <button class=\"btn btn-warning with-border ml-3\">{{'BUTTON.ENABLE' | translate}}</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-sm-6 mb-4\">\r\n                <div class=\"box change-box h-100\">\r\n                    <h6 class=\"mb-3\">\r\n                        <span class=\"svg-icon mr-2\" [inlineSVG]=\"'/assets/icon/withdrawl.svg'\"></span>\r\n                        {{'PROFILE.WITHDRAWAL_ADDRESS_MANAGEMENT' | translate}}\r\n                    </h6>\r\n                    <div class=\"row\">\r\n                        <p class=\"col-8\">{{'PROFILE.WITHDRAWAL_TEXT' | translate}}</p>\r\n                        <div class=\"col-4\">\r\n                            {{'PROFILE.WHITELIST' | translate}}\r\n                            <label class=\"switch ml-3\">\r\n                                <input type=\"checkbox\">\r\n                                <span class=\"slider round\"></span>\r\n                            </label>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"text-center mt-5 pt-5\">\r\n                        <button class=\"btn btn-third with-border\" style=\"width:200px\">{{'BUTTON.COMING_SOON' | translate}}\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <h5>{{'PROFILE.LOGIN_HISTORY' | translate}}</h5>\r\n        <div class=\"table-container mb-4\">\r\n            <table class=\"table\">\r\n                <thead>\r\n                <tr>\r\n                    <th>{{'PROFILE.DATE' | translate}}</th>\r\n                    <th>{{'PROFILE.DEVICE' | translate}}</th>\r\n                    <th>{{'PROFILE.LOCATION' | translate}}</th>\r\n                    <th>{{'PROFILE.IP_ADDRESS' | translate}}</th>\r\n                    <th></th>\r\n                </tr>\r\n                </thead>\r\n                <tbody>\r\n                <tr *ngFor=\"let data of loginData\">\r\n                    <td>{{data.created_at | date:'yyyy-MM-dd HH:mm:ss'}}</td>\r\n                    <td>{{data.browser}}({{data.device}})</td>\r\n                    <td>{{data.country}}</td>\r\n                    <td>{{data.ip_address}}</td>\r\n                </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/auth/profile/profile.page.scss":
/*!************************************************!*\
  !*** ./src/app/auth/profile/profile.page.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".auth-icon {\n  font-size: 32px !important;\n  width: 32px; }\n\nh5 {\n  font-size: 16px; }\n\n.box1 {\n  background: #fff0d8;\n  background: linear-gradient(0deg, #fff0d8 0%, #ffffff 30%);\n  position: relative;\n  padding-top: 50px;\n  padding-bottom: 50px; }\n\n.topbox {\n  line-height: 2; }\n\n.avatar {\n  border-radius: 50%;\n  border: 2px solid #605f60;\n  background: #d1d2d2;\n  overflow: hidden;\n  width: 99px;\n  height: 99px; }\n\n.diamond {\n  display: inline-block;\n  width: 25px;\n  height: 25px;\n  border: 1px solid #605f60;\n  border-radius: 50%;\n  background: white url(\"/assets/icon/Diamond.png\") no-repeat center 5px;\n  margin: 10px 0; }\n\n.diamond.disabled {\n    background-image: url(\"/assets/icon/Diamond_disabled.png\"); }\n\n.levels {\n  font-size: 12px;\n  line-height: 1 !important; }\n\n.levels > div {\n    flex: 1;\n    position: relative; }\n\n.levels > div:not(:last-child):after {\n      content: '';\n      display: block;\n      position: absolute;\n      left: calc(50% + 30px);\n      top: calc(50% + 5px);\n      width: calc(100% - 60px);\n      border-top: 1px dashed #605f60; }\n\n.change-box h6 {\n  font-size: 16px; }\n\n.change-box .btn {\n  width: 140px;\n  height: 35px;\n  line-height: 33px;\n  padding: 0; }\n\n.change-box .svg-icon {\n  text-align: center;\n  width: 27px; }\n"

/***/ }),

/***/ "./src/app/auth/profile/profile.page.ts":
/*!**********************************************!*\
  !*** ./src/app/auth/profile/profile.page.ts ***!
  \**********************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/settings.service */ "./src/app/services/settings.service.ts");
/* harmony import */ var _services_accountApi_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/accountApi.service */ "./src/app/services/accountApi.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfilePage = /** @class */ (function () {
    function ProfilePage(router, settings, accountApi) {
        this.router = router;
        this.settings = settings;
        this.accountApi = accountApi;
        this.profile = {};
        this.loginData = [];
    }
    ProfilePage.prototype.ngOnInit = function () {
        var _this = this;
        this.accountApi.getProfile({}).subscribe(function (res) {
            if (res.success) {
                _this.profile = res.data;
                if (!_this.profile.verify_status) {
                    _this.profile.verify_status = 0;
                }
            }
        });
        this.accountApi.getLoginHistory({}).subscribe(function (res) {
            if (res.success) {
                _this.loginData = res.data;
            }
        });
    };
    ProfilePage.prototype.onChangePassword = function () {
        this.router.navigate(['/changepwd']);
    };
    ProfilePage.prototype.onUpdateBank = function () {
        this.router.navigate(['/bank']);
    };
    ProfilePage.prototype.onEnableSMS = function () {
        this.router.navigate(['/smsauth']);
    };
    ProfilePage.prototype.onVerifyNow = function () {
        this.router.navigate(['/verifyidentity']);
    };
    ProfilePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile-page',
            template: __webpack_require__(/*! ./profile.page.html */ "./src/app/auth/profile/profile.page.html"),
            styles: [__webpack_require__(/*! ./profile.page.scss */ "./src/app/auth/profile/profile.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_settings_service__WEBPACK_IMPORTED_MODULE_2__["SettingsService"],
            _services_accountApi_service__WEBPACK_IMPORTED_MODULE_3__["AccountApiService"]])
    ], ProfilePage);
    return ProfilePage;
}());



/***/ }),

/***/ "./src/app/auth/smsauth/smsauth.page.html":
/*!************************************************!*\
  !*** ./src/app/auth/smsauth/smsauth.page.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-container\">\r\n    <div class=\"container\">\r\n        <h3 class=\"text-center mb-4\">\r\n            {{'AUTH.ENABLE_SMS_AUTH' | translate}}\r\n        </h3>\r\n        <form class=\"box\">\r\n            <div class=\"mx-auto\" style=\"max-width: 690px\">\r\n                <div class=\"form-group row\">\r\n                    <label class=\"col-sm-4  col-form-label text-sm-right pr-0\">\r\n                        {{'AUTH.PHONE_NUMBER' | translate}}:\r\n                    </label>\r\n                    <div class=\"col-sm-6\">\r\n                        <input type=\"tel\" name=\"phone\" id=\"phone\" class=\"form-control\" [(ngModel)]=\"profile.phone_number\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                    <label class=\"col-sm-4  col-form-label text-sm-right pr-0\">\r\n                        {{'AUTH.SMS_AUTHENTICATION_CODE' | translate}}:\r\n                    </label>\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-8 pr-0\">\r\n                                <input type=\"text\" class=\"form-control\"/>\r\n                            </div>\r\n                            <div class=\"col-4\">\r\n                                <button class=\"btn btn-warning w-100 btn-send with-border\">{{'AUTH.SEND_SMS' | translate}}\r\n                                </button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                    <label class=\"col-sm-4  col-form-label text-sm-right pr-0\">\r\n                        {{(profile.allowed_g2f == 1 ? 'AUTH.GOOGLE_AUTHENTICATION_CODE' : 'AUTH.EMAIL_AUTHENTICATION_CODE') | translate}}:\r\n                    </label>\r\n                    <div class=\"col-sm-6\">\r\n                        <input type=\"text\" class=\"form-control\"/>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                    <div class=\"col-sm-12 text-center\">\r\n                        <button class=\"btn btn-warning mt-3 btn-submit\">{{'BUTTON.SUBMIT' | translate}}</button>\r\n                    </div>\r\n                </div>\r\n\r\n                <hr class=\"mt-5 mb-4\"/>\r\n\r\n                <div class=\"text-center px-5\">\r\n                    <strong class=\"text-yellow\">{{'COMMON.NOTE' | translate}}:</strong> {{'AUTH.SMS_AUTH_NOTE' | translate}}\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/auth/smsauth/smsauth.page.scss":
/*!************************************************!*\
  !*** ./src/app/auth/smsauth/smsauth.page.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box {\n  padding: 50px 15px; }\n\n.btn-submit {\n  width: 180px;\n  height: 35px; }\n\n.btn-send {\n  height: 30px; }\n"

/***/ }),

/***/ "./src/app/auth/smsauth/smsauth.page.ts":
/*!**********************************************!*\
  !*** ./src/app/auth/smsauth/smsauth.page.ts ***!
  \**********************************************/
/*! exports provided: SMSAuthPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SMSAuthPage", function() { return SMSAuthPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_accountApi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/accountApi.service */ "./src/app/services/accountApi.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SMSAuthPage = /** @class */ (function () {
    function SMSAuthPage(router, accountApi) {
        this.router = router;
        this.accountApi = accountApi;
        this.profile = {};
    }
    SMSAuthPage.prototype.ngOnInit = function () {
        var _this = this;
        this.accountApi.getProfile({}).subscribe(function (res) {
            if (res.success) {
                _this.profile = res.data;
            }
        });
    };
    SMSAuthPage.prototype.ngAfterViewInit = function () {
        var parent = this;
        var smsTimer = setInterval(function () {
            if ($('#phone').length > 0 && typeof $("#phone").intlTelInput("getNumber") !== 'string' && parent.profile.phone_number) {
                $("#phone").intlTelInput({
                    placeholderNumberType: "MOBILE",
                    preferredCountries: ['tr'],
                    separateDialCode: true,
                    utilsScript: 'assets/js/utils.js'
                });
                $("#phone").intlTelInput("setNumber", parent.profile.phone_number);
                $('.intl-tel-input').css('width', '100%');
                clearInterval(smsTimer);
            }
        }, 200);
    };
    SMSAuthPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-smsauth-page',
            template: __webpack_require__(/*! ./smsauth.page.html */ "./src/app/auth/smsauth/smsauth.page.html"),
            styles: [__webpack_require__(/*! ./smsauth.page.scss */ "./src/app/auth/smsauth/smsauth.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_accountApi_service__WEBPACK_IMPORTED_MODULE_2__["AccountApiService"]])
    ], SMSAuthPage);
    return SMSAuthPage;
}());



/***/ }),

/***/ "./src/app/auth/tlwallet/tlwallet.page.html":
/*!**************************************************!*\
  !*** ./src/app/auth/tlwallet/tlwallet.page.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-container\">\r\n    <div class=\"container\">\r\n        <h3 class=\"mb-4\">\r\n            {{'HEADER.TL_WALLET' | translate}}\r\n        </h3>\r\n        <div class=\"box\"  *ngIf=\"iban_code == ''\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    {{'TLWALLET.NO_IBAN_CODE_MSG' | translate}}<a [routerLink]=\"['/bank']\">{{'TLWALLET.HERE' | translate}}</a>.\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"d-flex\" *ngIf=\"iban_code != ''\">\r\n            <div class=\"col-md-6 box mr-md-2\">\r\n                <h5 class=\"text-center\">{{'TLWALLET.TL_DEPOSIT' | translate}}</h5>\r\n                <div class=\"form-group row\">\r\n                    <label class=\"col-12\">{{'TLWALLET.DEPOSIT_AMOUNT' | translate}}</label>\r\n                    <div class=\"col-sm-12\">\r\n                        <input type=\"number\" step=0.01 class=\"form-control\" name=\"deposit_amount\" [(ngModel)]=\"deposit.amount\">\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <label>{{'TLWALLET.SELECT_IBAN_CODE' | translate}}</label>\r\n                    <select class=\"form-control\" name=\"deposit_address\" [(ngModel)]=\"deposit.to_address\">\r\n                        <option *ngFor=\"let bank of banks\" value=\"{{bank.name}}\">{{bank.name}}\r\n                        </option>\r\n                    </select>\r\n                </div>\r\n\r\n                <div class=\"form-group row\">\r\n                    <div class=\"col-sm-6\">\r\n                        <label>{{'TLWALLET.AMOUNT_WANT_DEPOSIT' | translate}}</label>\r\n                        <input class=\"form-control\" value='{{deposit.amount | number:\"1.2-2\"}} ₺' readonly>\r\n                    </div>\r\n                    <div class=\"col-sm-6\">\r\n                        <label>{{'TLWALLET.DEPOSIT_FEE' | translate}}</label>\r\n                        <input class=\"form-control\" value=\"{{settings.getSystemSetting('tl_deposit_fee') | number:'1.2-2'}} ₺\" readonly>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group row\">\r\n                    <div class=\"col-sm-6\">\r\n                        <label>{{'TLWALLET.AMOUNT_TO_DEPOSIT' | translate}}</label>\r\n                        <input class=\"form-control\" value=\"{{(deposit.amount - settings.getSystemSetting('tl_deposit_fee')) | number:'1.2-2'}} ₺\" readonly>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"text-center\">\r\n                    <button class=\"btn btn-primary with-border primary-size\" (click)=\"depositTL()\">{{'TLWALLET.DEPOSIT_TL' | translate}}\r\n                    </button>\r\n                </div>\r\n                <hr *ngIf=\"translator.getCurrentLangCode() == 'tr'\" />\r\n                <div class=\"row mt-3\" *ngIf=\"translator.getCurrentLangCode() == 'tr'\">\r\n                    <div class=\"col-md-12\">\r\n                        <label>Lütfen banka hesabınıza girerek yukarıda verilen IBAN koduna, belirtmiş olduğunuz tutarı havale/EFT yapınız.</label>\r\n                        <label>Para transferi esnasında açıklama kısmına yalnızca yukarıda verilen kodu yazınız.</label>\r\n                        <label>NOT: 1 saat içerisinde transfer edilmeyen tutarlar sistem tarafından otomatik olarak iptal edilmektedir.</label>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-6 box\" *ngIf=\"deposited\">\r\n                <div class=\"row mt-3\">\r\n                    <div class=\"col-md-12\">\r\n                        <p class=\"text-danger\">\r\n                            {{'TLWALLET.COMPANY_NAME' | translate}}\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row m-t-10\" >\r\n                    <div class=\"col-md-4\">\r\n                        <label>{{'TLWALLET.SELECT_IBAN_CODE' | translate}}</label>\r\n                    </div>\r\n                    <div class=\"col-md-8\">\r\n                        <label>{{depositinfo.to_address}}</label>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-4\">\r\n                        <label>{{'TLWALLET.YOUR_IBAN_CODE' | translate}}</label>\r\n                    </div>\r\n                    <div class=\"col-md-8\">\r\n                        <label>{{depositinfo.iban_code}}</label>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-4\">\r\n                        <label>{{'LABEL.CONFIRM_CODE' | translate}}</label>\r\n                    </div>\r\n                    <div class=\"col-md-8\">\r\n                        <label>{{depositinfo.txid}}</label>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-4\">\r\n                        <label>{{'LABEL.AMOUNT' | translate}}</label>\r\n                    </div>\r\n                    <div class=\"col-md-8\">\r\n                        <label>{{depositinfo.amount | number:'1.0-2'}}</label>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"text-center mt-5\">\r\n                    <button class=\"btn btn-warning with-border primary-size\" (click)=\"deposited=false\">\r\n                        {{'BUTTON.CONFIRM' | translate}}\r\n                    </button>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-6 box\" *ngIf=\"!deposited\">\r\n                <h5 class=\"text-center\">{{'TLWALLET.TL_WITHDRAW' | translate}}</h5>\r\n                <div class=\"form-group row\">\r\n                    <label class=\"col-12\">{{'TLWALLET.WITHDRAW_AMOUNT' | translate}}</label>\r\n                    <div class=\"col-sm-12\">\r\n                        <input type=\"number\" step=0.001 class=\"form-control\" name=\"withdraw_amount\"\r\n                               [(ngModel)]=\"withdraw.amount\">\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <label>{{'TLWALLET.YOUR_IBAN_CODE' | translate}}</label>\r\n                    <input type=\"text\" class=\"form-control\" name=\"withdraw_address\" value=\"{{withdraw.to_address}}\" readonly>\r\n                </div>\r\n\r\n                <div class=\"form-group row\">\r\n                    <div class=\"col-sm-6\">\r\n                        <label>{{'LABEL.BALANCE' | translate}}</label>\r\n                        <input class=\"form-control\" value=\"{{settings.getBalance('TL') | number:'1.2-2'}} ₺\" readonly>\r\n                    </div>\r\n                    <div class=\"col-sm-6\">\r\n                        <label>{{'TLWALLET.AMOUNT_WANT_WITHDRAW' | translate}}</label>\r\n                        <input class=\"form-control\" value=\"{{withdraw.amount | number:'1.2-2'}} ₺\" readonly>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group row\">\r\n                    <div class=\"col-sm-6\">\r\n                        <label>{{'TLWALLET.WITHDRAW_FEE' | translate}}</label>\r\n                        <input class=\"form-control\" value=\"{{settings.getSystemSetting('tl_withdraw_fee') | number:'1.2-2'}} ₺\" readonly>\r\n                    </div>\r\n                    <div class=\"col-sm-6\">\r\n                        <label>{{'TLWALLET.AMOUNT_TO_WITHDRAW' | translate}}</label>\r\n                        <input class=\"form-control\" value=\"{{(withdraw.amount - settings.getSystemSetting('tl_withdraw_fee')) | number:'1.2-2'}} ₺\" readonly>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"text-center\">\r\n                    <button class=\"btn btn-warning with-border primary-size\" (click)=\"withdrawTL()\">\r\n                        {{'TLWALLET.WITHDRAW_TL' | translate}}\r\n                    </button>\r\n                </div>\r\n                <hr *ngIf=\"translator.getCurrentLangCode() == 'tr'\" />\r\n                <div class=\"row mt-3\" *ngIf=\"translator.getCurrentLangCode() == 'tr'\">\r\n                    <div class=\"col-md-12\">\r\n                        <label>AKBANK hesaplarına 7 gün 24 saat, diğer banka hesaplarına ise sadece işgünlerinde 0900-1700 saatleri arasında çekim yapabilirsiniz. </label>\r\n                        <label>Bu saatler dışında vermiş olduğunuz çekim talepleri, takip eden ilk iş günü 09.00'da işleme alınır.</label>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <h3 class=\"my-4\">\r\n            {{'TLWALLET.PENDING_TRANSACTIONS' | translate}}\r\n        </h3>\r\n        <div class=\"table-responsive history-table box\">\r\n            <table class=\"table\">\r\n                <thead>\r\n                <tr>\r\n                    <th>{{'LABEL.TYPE' | translate}}</th>\r\n                    <th>{{'LABEL.STATUS' | translate}}</th>\r\n                    <th>{{'LABEL.TIME' | translate}}</th>\r\n                    <th>{{'LABEL.AMOUNT' | translate}}</th>\r\n                    <th>{{'LABEL.ADDRESS' | translate}}</th>\r\n                    <th>{{'LABEL.CONFIRM_CODE' | translate}}</th>\r\n                    <th></th>\r\n                </tr>\r\n                </thead>\r\n                <tbody>\r\n                <tr *ngFor=\"let tx of pendingLists\">\r\n                    <td><label class=\"label label-sm \" [ngClass]=\"{'label-success': tx.type == 3, 'label-info': tx.type == 1}\">\r\n                        {{(tx.type == 1 ? 'LABEL.WITHDRAW' : 'LABEL.DEPOSIT') | translate}}</label>\r\n                    </td>\r\n                    <td>\r\n                        <label [ngClass]=\"{'label-purple': tx.status == 0, 'label-danger' : tx.status == 2}\">\r\n                            {{(tx.status == 0 ? 'LABEL.PENDING' : 'LABEL.FAILED') | translate}}\r\n                        </label>\r\n                    </td>\r\n                    <td>{{tx.datetime | date:'yyyy-MM-dd HH:mm:ss'}}</td>\r\n                    <td>{{(tx.type == 3 ? tx.dest_amount : tx.src_amount) | number:'1.2-2'}}</td>\r\n                    <td>{{tx.type == 3 ? tx.to_address : tx.from_address}}</td>\r\n                    <td>{{tx.type == 3 ? tx.txid : ''}}</td>\r\n                    <td class=\"text-center\">\r\n                        <button type=\"button\" class=\"btn btn-sm btn-danger\" (click)=\"cancelTransaction(tx.id)\">Cancel</button>\r\n                    </td>\r\n                </tr>\r\n                <tr *ngIf=\"pendingLists?.length == 0\">\r\n                    <td class=\"text-center\" colspan=\"7\">\r\n                        {{'TLWALLET.NO_PENDING_FOUND' | translate}}\r\n                    </td>\r\n                </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n\r\n        <h3 class=\"my-4\">\r\n            {{'TLWALLET.PAST_TRANSACTIONS' | translate}}\r\n        </h3>\r\n        <div class=\"table-responsive history-table box\">\r\n            <table class=\"table\">\r\n                <thead>\r\n                <tr>\r\n                    <th>{{'LABEL.TYPE' | translate}}</th>\r\n                    <th>{{'LABEL.STATUS' | translate}}</th>\r\n                    <th>{{'LABEL.TIME' | translate}}</th>\r\n                    <th>{{'LABEL.AMOUNT' | translate}}</th>\r\n                    <th>{{'LABEL.ADDRESS' | translate}}</th>\r\n                </tr>\r\n                </thead>\r\n                <tbody>\r\n                <tr *ngFor=\"let tx of pastLists\">\r\n                    <td><label class=\"label label-sm \" [ngClass]=\"{'label-primary': tx.type == 3, 'label-info': tx.type == 1}\">\r\n                        {{(tx.type == 1 ? 'LABEL.WITHDRAW' : 'LABEL.DEPOSIT') | translate}}</label>\r\n                    </td>\r\n                    <td><label class=\"label label-sm \">{{'LABEL.SUCCESS' | translate}}</label></td>\r\n                    <td>{{tx.datetime | date:'yyyy-MM-dd HH:mm:ss'}}</td>\r\n                    <td>{{(tx.type == 3 ? tx.dest_amount : tx.src_amount) | number:'1.2-2'}}\r\n                    </td>\r\n                    <td>{{tx.type == 3 ? tx.to_address : tx.from_address}}</td>\r\n                </tr>\r\n                <tr *ngIf=\"pastLists?.length == 0\">\r\n                    <td class=\"text-center\" colspan=\"5\">\r\n                        {{'TLWALLET.NO_TRANSACTIONS_FOUND' | translate}}\r\n                    </td>\r\n                </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<modal-dialog [(visible)]=\"showAuthModal\" [closable]=\"false\">\r\n    <form class=\"mt-5\">\r\n        <div class=\"form-group row\">\r\n            <label class=\"col-sm-4  col-form-label text-sm-right pr-0\" [ngSwitch]=\"allowed_g2f\">\r\n                <div *ngSwitchCase=\"1\">{{'AUTH.GOOGLE_AUTHENTICATION_CODE' | translate}}: </div>\r\n                <div *ngSwitchCase=\"2\">{{'AUTH.SMS_AUTHENTICATION_CODE' | translate}}: </div>\r\n                <div *ngSwitchCase=\"3\">{{'AUTH.EMAIL_AUTHENTICATION_CODE' | translate}}: </div>\r\n            </label>\r\n\r\n            <div class=\"col-sm-7\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-12 pr-0\">\r\n                        <input type=\"text\" class=\"text-center form-control\" name=\"auth_code\" [(ngModel)]=\"auth_code\"/>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"text-center mt-2\">\r\n            <button type=\"button\" class=\"btn btn-warning dialog-button\" (click)=\"submitWithdraw()\">{{'BUTTON.SUBMIT' | translate}}</button>\r\n            <button type=\"button\" class=\"btn btn-info dialog-button ml-3\" (click)=\"showAuthModal = !showAuthModal\">{{'BUTTON.CANCEL' | translate}}\r\n            </button>\r\n        </div>\r\n    </form>\r\n</modal-dialog>\r\n"

/***/ }),

/***/ "./src/app/auth/tlwallet/tlwallet.page.scss":
/*!**************************************************!*\
  !*** ./src/app/auth/tlwallet/tlwallet.page.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h5 {\n  color: #3c3c3c; }\n\n.box {\n  padding: 40px; }\n\n.history-table {\n  max-height: 300px; }\n"

/***/ }),

/***/ "./src/app/auth/tlwallet/tlwallet.page.ts":
/*!************************************************!*\
  !*** ./src/app/auth/tlwallet/tlwallet.page.ts ***!
  \************************************************/
/*! exports provided: TlwalletPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TlwalletPage", function() { return TlwalletPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_financeApi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/financeApi.service */ "./src/app/services/financeApi.service.ts");
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/settings.service */ "./src/app/services/settings.service.ts");
/* harmony import */ var _services_notify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/notify.service */ "./src/app/services/notify.service.ts");
/* harmony import */ var _services_translator_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/translator.service */ "./src/app/services/translator.service.ts");
/* harmony import */ var _services_balance_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/balance.service */ "./src/app/services/balance.service.ts");
/* harmony import */ var _services_accountApi_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/accountApi.service */ "./src/app/services/accountApi.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var TlwalletPage = /** @class */ (function () {
    function TlwalletPage(router, financeApi, settings, notify, translator, accountApi, balance) {
        this.router = router;
        this.financeApi = financeApi;
        this.settings = settings;
        this.notify = notify;
        this.translator = translator;
        this.accountApi = accountApi;
        this.balance = balance;
        this.profile = {};
        this.iban_code = '';
        this.pendingLists = [];
        this.pastLists = [];
        this.withdraw = {
            amount: 0
        };
        this.deposit = {
            amount: 0
        };
        this.banks = [];
        this.depositinfo = {};
        this.deposited = false;
        this.allowed_g2f = 0;
        this.showAuthModal = false;
        this.auth_code = '';
    }
    TlwalletPage.prototype.ngOnInit = function () {
        var _this = this;
        this.accountApi.getAccountBankInfo({}).subscribe(function (res) {
            if (res.success) {
                _this.profile = res.data;
                if (_this.profile && _this.profile.iban_code) {
                    _this.iban_code = _this.profile.iban_code;
                    _this.withdraw.to_address = _this.iban_code;
                    _this.deposit.from_address = _this.iban_code;
                }
            }
        });
        this.financeApi.getBanks({
            currency: 'TL'
        }).subscribe(function (res) {
            if (res.success) {
                _this.banks = res.data;
            }
        });
        this.loadPendingTransactions();
        this.loadPastTransactions();
    };
    TlwalletPage.prototype.ngAfterViewInit = function () {
    };
    TlwalletPage.prototype.withdrawTLAll = function () {
        this.withdraw.amount = this.settings.getBalance('TL');
    };
    TlwalletPage.prototype.loadPendingTransactions = function () {
        var _this = this;
        this.financeApi.getFinanceTransaction('TL', {
            is_pending: true,
            limit_count: 20
        }).subscribe(function (res) {
            if (res.data) {
                _this.pendingLists = res.data;
            }
        });
    };
    TlwalletPage.prototype.loadPastTransactions = function () {
        var _this = this;
        this.financeApi.getFinanceTransaction('TL', {
            is_success: true,
            limit_count: 20
        }).subscribe(function (res) {
            if (res.data) {
                _this.pastLists = res.data;
            }
        });
    };
    TlwalletPage.prototype.depositTL = function () {
        var _this = this;
        this.deposit.fee = this.settings.getSystemSetting('tl_deposit_fee');
        this.settings.loading = true;
        this.financeApi.financeDeposit('TL', this.deposit).subscribe(function (res) {
            _this.settings.loading = false;
            if (res.success) {
                _this.loadPendingTransactions();
                _this.notify.showSuccess('Your deposit was saved successfully. Please wait while confirming.');
                _this.depositinfo = res.data;
                for (var i = 0; i < _this.banks.length; i++) {
                    if (_this.banks[i].name == _this.depositinfo.to_address) {
                        _this.depositinfo.iban_code = _this.banks[i].iban_code;
                        break;
                    }
                }
                _this.depositinfo.amount = _this.deposit.amount;
                _this.deposited = true;
            }
            else {
                _this.notify.showWarning(res.error);
            }
        }, function (err) {
            _this.settings.loading = false;
            _this.notify.showError(err);
        });
    };
    TlwalletPage.prototype.submitWithdraw = function () {
        var _this = this;
        this.withdraw.fee = this.settings.getSystemSetting('tl_withdraw_fee');
        this.withdraw.auth_code = this.auth_code;
        this.settings.loading = true;
        this.financeApi.financeWithdraw('TL', this.withdraw).subscribe(function (res) {
            _this.settings.loading = false;
            if (res.success) {
                _this.showAuthModal = false;
                _this.loadPendingTransactions();
                _this.balance.getCoinBalance('TL');
                _this.notify.showSuccess('Your withdraw was saved successfully. Please wait while confirming.');
            }
            else {
                _this.notify.showWarning(res.error);
            }
        }, function (err) {
            _this.settings.loading = false;
            _this.notify.showError(err);
        });
    };
    TlwalletPage.prototype.withdrawTL = function () {
        var _this = this;
        if (this.settings.getUserSetting('account_verified') == 0) {
            this.notify.showWarning('You have to verify your account.');
            return;
        }
        this.settings.loading = true;
        this.accountApi.sendAuthCode().subscribe(function (res) {
            _this.settings.loading = false;
            if (res.success) {
                _this.auth_code = '';
                _this.allowed_g2f = res.allowed_g2f;
                _this.showAuthModal = true;
            }
            else {
                _this.notify.showWarning(res.error);
            }
        }, function (err) {
            _this.settings.loading = false;
            _this.notify.showError(err);
        });
    };
    TlwalletPage.prototype.cancelTransaction = function (id) {
        var _this = this;
        this.settings.loading = true;
        this.financeApi.cancelFinanceTransaction({
            id: id
        }).subscribe(function (res) {
            _this.settings.loading = false;
            if (res.success) {
                _this.balance.getCoinBalance('TL');
                _this.loadPendingTransactions();
                _this.notify.showSuccess('Your transaction was canceled successfully.');
            }
        }, function (err) {
            _this.settings.loading = false;
            _this.notify.showError(err);
        });
    };
    TlwalletPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tlwallet-page',
            template: __webpack_require__(/*! ./tlwallet.page.html */ "./src/app/auth/tlwallet/tlwallet.page.html"),
            styles: [__webpack_require__(/*! ./tlwallet.page.scss */ "./src/app/auth/tlwallet/tlwallet.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_financeApi_service__WEBPACK_IMPORTED_MODULE_2__["FinanceApiService"],
            _services_settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"],
            _services_notify_service__WEBPACK_IMPORTED_MODULE_4__["NotifyService"],
            _services_translator_service__WEBPACK_IMPORTED_MODULE_5__["TranslatorService"],
            _services_accountApi_service__WEBPACK_IMPORTED_MODULE_7__["AccountApiService"],
            _services_balance_service__WEBPACK_IMPORTED_MODULE_6__["BalanceService"]])
    ], TlwalletPage);
    return TlwalletPage;
}());



/***/ }),

/***/ "./src/app/auth/transaction/transaction.page.html":
/*!********************************************************!*\
  !*** ./src/app/auth/transaction/transaction.page.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-container\">\n    <div class=\"container\">\n        <h3 class=\"mb-4\">\n            {{'HEADER.TRANSACTION_HISTORY' | translate}}\n        </h3>\n\n        <div class=\"box\">\n            <div class=\"select\">\n                <label>{{'WALLET.SELECT_COIN_OR_TOKEN' | translate}}</label>\n                <select class=\"select2\" style=\"width: 100%\" [(ngModel)]=\"selCoin\">\n                    <option *ngFor=\"let coin of coins\" value=\"{{coin.coin}}\">{{coin.coin}} - {{coin.fullname}}</option>\n                </select>\n            </div>\n\n            <div class=\"row mt-3\">\n                <div class=\"col-md-12 text-right\">\n                    {{'LABEL.BALANCE' | translate}} : {{settings.getBalance(selCoin) | number:'1.8-8'}} <b>{{selCoin}}</b>\n                </div>\n            </div>\n\n            <div class=\"table-responsive mt-1\">\n                <loader *ngIf=\"loading\"></loader>\n                <ngx-datatable\n                        #table\n                        class=\"material\"\n                        [rows]=\"history\"\n                        [columnMode]=\"'force'\"\n                        [headerHeight]=\"50\"\n                        [footerHeight]=\"50\"\n                        [rowHeight]=\"'auto'\"\n                        [limit]=\"10\">\n                    <ngx-datatable-column name=\"TIME\">\n                        <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n                            {{row['datetime'] * 1000 | date:'yyyy-MM-dd HH:mm:ss'}}\n                        </ng-template>\n                    </ngx-datatable-column>\n                    <ngx-datatable-column name=\"Type\">\n                        <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n                            <div [ngSwitch]=\"row['type']\">\n                                <label class=\"label label-sm label-primary\" *ngSwitchCase=\"0\">{{'LABEL.MANUAL'| translate}}</label>\n                                <label class=\"label label-sm label-success\" *ngSwitchCase=\"1\">{{'LABEL.WITHDRAW'| translate}}</label>\n                                <label class=\"label label-sm \" [ngClass]=\"{'label-warning': selCoin == row['src_coin'], 'label-danger': selCoin != row['src_coin']}\" *ngSwitchCase=\"2\">\n                                    {{(selCoin == row['src_coin'] ? 'LABEL.SELL' : 'LABEL.BUY') | translate}}\n                                </label>\n                                <label class=\"label label-sm label-info\" *ngSwitchCase=\"3\">{{'LABEL.DEPOSIT'| translate}}</label>\n                                <label class=\"label label-sm label-purple\" *ngSwitchCase=\"4\">{{'LABEL.FASTBUY'| translate}}</label>\n                                <label class=\"label label-sm label-megna\" *ngSwitchCase=\"5\">{{'LABEL.BONUS'| translate}}</label>\n                                <label class=\"label label-sm label-megna\" *ngSwitchCase=\"6\">{{'LABEL.ICO'| translate}}</label>\n                            </div>\n                        </ng-template>\n                    </ngx-datatable-column>\n                    <ngx-datatable-column name=\"Amount\">\n                        <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n                            {{(selCoin == row['src_coin'] ? row['src_amount'] : row['dest_amount']) | number:'1.8-8'}}\n                        </ng-template>\n                    </ngx-datatable-column>\n                    <ngx-datatable-column name=\"Pair\">\n                        <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n                            {{row['type'] == 2 ? (row['src_coin'] + '/' + row['dest_coin']) : ''}}\n                        </ng-template>\n                    </ngx-datatable-column>\n                    <ngx-datatable-column name=\"Rate\">\n                        <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n                            {{row['type'] == 2 || row['type'] == 4 ? (row['rate'] | number:'1.8-8') : ''}}\n                        </ng-template>\n                    </ngx-datatable-column>\n                    <ngx-datatable-column name=\"Status\">\n                        <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n                            <label class=\"label label-sm\"\n                                   [ngClass]=\"{'label-primary': row['open'] == 1, 'label-success': row['status'] == 1, 'label-warning': row['status']==0, 'label-danger': row['status'] == 2, 'label-info': row['status'] == 3}\">\n                                {{(row['open'] == 1 ? 'LABEL.OPEN' : (row['status'] == 1 ? 'LABEL.SUCCESS' :\n                                (row['status'] == 0 ? 'LABEL.PENDING' : (row['status'] == 2 ? 'LABEL.FAILED' :\n                                'LABEL.PROCESSING')))) | translate}}\n                            </label>\n                        </ng-template>\n                    </ngx-datatable-column>\n                </ngx-datatable>\n            </div>\n        </div>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/auth/transaction/transaction.page.scss":
/*!********************************************************!*\
  !*** ./src/app/auth/transaction/transaction.page.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/auth/transaction/transaction.page.ts":
/*!******************************************************!*\
  !*** ./src/app/auth/transaction/transaction.page.ts ***!
  \******************************************************/
/*! exports provided: TransactionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionPage", function() { return TransactionPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_coinApi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/coinApi.service */ "./src/app/services/coinApi.service.ts");
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/settings.service */ "./src/app/services/settings.service.ts");
/* harmony import */ var _services_balance_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/balance.service */ "./src/app/services/balance.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TransactionPage = /** @class */ (function () {
    function TransactionPage(coinApi, settings, balance, router) {
        this.coinApi = coinApi;
        this.settings = settings;
        this.balance = balance;
        this.router = router;
        this.selCoin = 'BTC';
        this.selCoinInfo = {
            fullname: ''
        };
        this.coins = [];
        this.history = [];
        this.loading = false;
        this.datatable = null;
    }
    TransactionPage.prototype.ngOnInit = function () {
        var _this = this;
        if (window.localStorage.getItem('transaction_coin') && window.localStorage.getItem('transaction_coin') != '') {
            this.selCoin = window.localStorage.getItem('transaction_coin');
        }
        this.coinApi.getCoin({}).subscribe(function (res) {
            if (res.success) {
                _this.coins = res.data;
                _this.selCoinInfo = _this.coins.filter(function (coin) { return coin.coin === _this.selCoin; })[0];
            }
        }, function (err) {
        });
        this.loadTxHistory();
    };
    TransactionPage.prototype.loadTxHistory = function () {
        var _this = this;
        this.loading = true;
        // if (this.datatable) {
        // 	this.datatable.destroy();
        // 	this.datatable = null;
        // }
        this.coinApi.getTxHistory(this.selCoin, {}).subscribe(function (res) {
            _this.loading = false;
            if (res.success) {
                _this.history = res.data;
                // let _parent = this;
                // if (res.data.length > 0) {
                // 	var timer = setInterval(function () {
                // 		if (res.data.length == $('#history tbody tr').length) {
                // 			_parent.datatable = $('#history').DataTable();
                // 			clearInterval(timer);
                // 		}
                // 	}, 100);
                // } else {
                // 	// _parent.datatable = $('#history').DataTable();
                // }
            }
        }, function (err) {
            _this.loading = false;
        });
    };
    TransactionPage.prototype.onClickCoin = function (coin) {
        var _this = this;
        if (coin == this.selCoin) {
            return;
        }
        this.selCoin = coin;
        this.selCoinInfo = this.coins.filter(function (coin) { return coin.coin == _this.selCoin; })[0];
        this.loadTxHistory();
        window.localStorage.setItem('transaction_coin', this.selCoin);
    };
    TransactionPage.prototype.ngAfterViewInit = function () {
        $('.select2').select2();
        var _parent = this;
        $('.select2').on('select2:select', function (e) {
            _parent.onClickCoin(e.params.data.id);
        });
    };
    TransactionPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./transaction.page.html */ "./src/app/auth/transaction/transaction.page.html"),
            styles: [__webpack_require__(/*! ./transaction.page.scss */ "./src/app/auth/transaction/transaction.page.scss")]
        }),
        __metadata("design:paramtypes", [_services_coinApi_service__WEBPACK_IMPORTED_MODULE_2__["CoinApiService"],
            _services_settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"],
            _services_balance_service__WEBPACK_IMPORTED_MODULE_4__["BalanceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], TransactionPage);
    return TransactionPage;
}());



/***/ }),

/***/ "./src/app/auth/usdwallet/usdwallet.page.html":
/*!****************************************************!*\
  !*** ./src/app/auth/usdwallet/usdwallet.page.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-container\">\r\n    <div class=\"container\">\r\n        <h3 class=\"mb-4\">\r\n            {{'HEADER.USD_WALLET' | translate}}\r\n        </h3>\r\n        <div class=\"box\" *ngIf=\"iban_code_usd == ''\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    {{'TLWALLET.NO_IBAN_CODE_MSG' | translate}}<a [routerLink]=\"['/bank']\">{{'TLWALLET.HERE' |\r\n                    translate}}</a>.\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"d-flex\" *ngIf=\"iban_code_usd != ''\">\r\n            <div class=\"col-md-6 box mr-md-2\">\r\n                <h5 class=\"text-center\">{{'TLWALLET.USD_DEPOSIT' | translate}}</h5>\r\n                <div class=\"form-group row\">\r\n                    <label class=\"col-12\">{{'TLWALLET.DEPOSIT_AMOUNT' | translate}}</label>\r\n                    <div class=\"col-sm-8\">\r\n                        <input type=\"number\" step=0.01 class=\"form-control\" name=\"deposit_amount\"\r\n                               [(ngModel)]=\"deposit.amount\">\r\n                    </div>\r\n                    <div class=\"col-sm-4 pl-md-5 mt-2 mt-sm-0\">\r\n                        <button class=\"btn btn-primary w-100 with-border with-control\" (click)=\"onClickDepositEpay()\">{{'TLWALLET.VIA_EPAY' | translate}}</button>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <label>{{'TLWALLET.SELECT_IBAN_CODE' | translate}}</label>\r\n                    <select class=\"form-control\" name=\"deposit_address\" [(ngModel)]=\"deposit.to_address\">\r\n                        <option *ngFor=\"let bank of banks\" value=\"{{bank.name}}\">{{bank.name}}\r\n                        </option>\r\n                    </select>\r\n                </div>\r\n\r\n                <div class=\"form-group row\">\r\n                    <div class=\"col-sm-6\">\r\n                        <label>{{'TLWALLET.AMOUNT_WANT_DEPOSIT' | translate}}</label>\r\n                        <input class=\"form-control\" value='{{deposit.amount | number:\"1.2-2\"}} $' readonly>\r\n                    </div>\r\n                    <div class=\"col-sm-6\">\r\n                        <label>{{'TLWALLET.DEPOSIT_FEE' | translate}}</label>\r\n                        <input class=\"form-control\"\r\n                               value=\"{{settings.getSystemSetting('usd_deposit_fee') | number:'1.2-2'}} $\" readonly>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group row\">\r\n                    <div class=\"col-sm-6\">\r\n                        <label>{{'TLWALLET.AMOUNT_TO_DEPOSIT' | translate}}</label>\r\n                        <input class=\"form-control\"\r\n                               value=\"{{(deposit.amount - settings.getSystemSetting('usd_deposit_fee')) | number:'1.2-2'}} $\"\r\n                               readonly>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"text-center\">\r\n                    <button class=\"btn btn-primary with-border primary-size\" (click)=\"depositUSD()\">\r\n                        {{'TLWALLET.DEPOSIT_USD' | translate}}\r\n                    </button>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-6 box\" *ngIf=\"deposited\">\r\n                <div class=\"row mt-3\">\r\n                    <div class=\"col-md-12\">\r\n                        <p class=\"text-danger\">\r\n                            {{'TLWALLET.COMPANY_NAME' | translate}}\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row m-t-10\">\r\n                    <div class=\"col-md-4\">\r\n                        <label>{{'TLWALLET.SELECT_IBAN_CODE' | translate}}</label>\r\n                    </div>\r\n                    <div class=\"col-md-8\">\r\n                        <label>{{depositinfo.to_address}}</label>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-4\">\r\n                        <label>{{'TLWALLET.YOUR_IBAN_CODE' | translate}}</label>\r\n                    </div>\r\n                    <div class=\"col-md-8\">\r\n                        <label>{{depositinfo.iban_code}}</label>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-4\">\r\n                        <label>{{'LABEL.CONFIRM_CODE' | translate}}</label>\r\n                    </div>\r\n                    <div class=\"col-md-8\">\r\n                        <label>{{depositinfo.txid}}</label>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-4\">\r\n                        <label>{{'LABEL.AMOUNT' | translate}}</label>\r\n                    </div>\r\n                    <div class=\"col-md-8\">\r\n                        <label>{{depositinfo.amount | number:'1.0-2'}}</label>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"text-center mt-5\">\r\n                    <button class=\"btn btn-warning with-border primary-size\" (click)=\"deposited=false\">\r\n                        {{'BUTTON.CONFIRM' | translate}}\r\n                    </button>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-6 box\" *ngIf=\"!deposited\">\r\n                <h5 class=\"text-center\">{{'TLWALLET.USD_WITHDRAW' | translate}}</h5>\r\n                <div class=\"form-group row\">\r\n                    <label class=\"col-12\">{{'TLWALLET.WITHDRAW_AMOUNT' | translate}}</label>\r\n                    <div class=\"col-sm-8\">\r\n                        <input type=\"number\" step=0.001 class=\"form-control\" name=\"withdraw_amount\"\r\n                               [(ngModel)]=\"withdraw.amount\">\r\n                    </div>\r\n                    <div class=\"col-sm-4 pl-md-5 mt-2 mt-sm-0\">\r\n                        <button class=\"btn btn-primary w-100 with-border with-control\" (click)=\"onClickWithdrawEpay()\">{{'TLWALLET.VIA_EPAY' | translate}}</button>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <label>{{'TLWALLET.YOUR_IBAN_CODE' | translate}}</label>\r\n                    <input type=\"text\" class=\"form-control\" name=\"withdraw_address\" value=\"{{withdraw.to_address}}\"\r\n                           readonly>\r\n                </div>\r\n\r\n                <div class=\"form-group row\">\r\n                    <div class=\"col-sm-6\">\r\n                        <label>{{'LABEL.BALANCE' | translate}}</label>\r\n                        <input class=\"form-control\" value=\"{{settings.getBalance('USD') | number:'1.2-2'}} $\" readonly>\r\n                    </div>\r\n                    <div class=\"col-sm-6\">\r\n                        <label>{{'TLWALLET.AMOUNT_WANT_WITHDRAW' | translate}}</label>\r\n                        <input class=\"form-control\" value=\"{{withdraw.amount | number:'1.2-2'}} $\" readonly>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group row\">\r\n                    <div class=\"col-sm-6\">\r\n                        <label>{{'TLWALLET.WITHDRAW_FEE' | translate}}</label>\r\n                        <input class=\"form-control\"\r\n                               value=\"{{settings.getSystemSetting('usd_withdraw_fee') | number:'1.2-2'}} $\" readonly>\r\n                    </div>\r\n                    <div class=\"col-sm-6\">\r\n                        <label>{{'TLWALLET.AMOUNT_TO_WITHDRAW' | translate}}</label>\r\n                        <input class=\"form-control\"\r\n                               value=\"{{(withdraw.amount - settings.getSystemSetting('usd_withdraw_fee')) | number:'1.2-2'}} $\"\r\n                               readonly>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"text-center\">\r\n                    <button class=\"btn btn-warning with-border primary-size\" (click)=\"withdrawUSD()\">\r\n                        {{'TLWALLET.WITHDRAW_USD' | translate}}\r\n                    </button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <h3 class=\"my-4\">\r\n            {{'TLWALLET.PENDING_TRANSACTIONS' | translate}}\r\n        </h3>\r\n        <div class=\"table-responsive history-table box\">\r\n            <table class=\"table\">\r\n                <thead>\r\n                <tr>\r\n                    <th>{{'LABEL.TYPE' | translate}}</th>\r\n                    <th>{{'LABEL.STATUS' | translate}}</th>\r\n                    <th>{{'LABEL.TIME' | translate}}</th>\r\n                    <th>{{'LABEL.AMOUNT' | translate}}</th>\r\n                    <th>{{'LABEL.ADDRESS' | translate}}</th>\r\n                    <th>{{'LABEL.CONFIRM_CODE' | translate}}</th>\r\n                    <th></th>\r\n                </tr>\r\n                </thead>\r\n                <tbody>\r\n                <tr *ngFor=\"let tx of pendingLists\">\r\n                    <td><label class=\"label label-sm \"\r\n                               [ngClass]=\"{'label-success': tx.type == 3, 'label-info': tx.type == 1}\">\r\n                        {{(tx.type == 1 ? 'LABEL.WITHDRAW' : 'LABEL.DEPOSIT') | translate}}</label>\r\n                    </td>\r\n                    <td>\r\n                        <label [ngClass]=\"{'label-purple': tx.status == 0, 'label-danger' : tx.status == 2}\">\r\n                            {{(tx.status == 0 ? 'LABEL.PENDING' : 'LABEL.FAILED') | translate}}\r\n                        </label>\r\n                    </td>\r\n                    <td>{{tx.datetime | date:'yyyy-MM-dd HH:mm:ss'}}</td>\r\n                    <td>{{(tx.type == 3 ? tx.dest_amount : tx.src_amount) | number:'1.2-2'}}</td>\r\n                    <td>{{tx.type == 3 ? tx.to_address : tx.from_address}}</td>\r\n                    <td>{{tx.type == 3 ? tx.txid : ''}}</td>\r\n                    <td class=\"text-center\">\r\n                        <button type=\"button\" class=\"btn btn-sm btn-danger\" (click)=\"cancelTransaction(tx.id)\">Cancel\r\n                        </button>\r\n                    </td>\r\n                </tr>\r\n                <tr *ngIf=\"pendingLists?.length == 0\">\r\n                    <td class=\"text-center\" colspan=\"7\">\r\n                        {{'TLWALLET.NO_PENDING_FOUND' | translate}}\r\n                    </td>\r\n                </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n\r\n        <h3 class=\"my-4\">\r\n            {{'TLWALLET.PAST_TRANSACTIONS' | translate}}\r\n        </h3>\r\n        <div class=\"table-responsive history-table box\">\r\n            <table class=\"table\">\r\n                <thead>\r\n                <tr>\r\n                    <th>{{'LABEL.TYPE' | translate}}</th>\r\n                    <th>{{'LABEL.STATUS' | translate}}</th>\r\n                    <th>{{'LABEL.TIME' | translate}}</th>\r\n                    <th>{{'LABEL.AMOUNT' | translate}}</th>\r\n                    <th>{{'LABEL.ADDRESS' | translate}}</th>\r\n                </tr>\r\n                </thead>\r\n                <tbody>\r\n                <tr *ngFor=\"let tx of pastLists\">\r\n                    <td><label class=\"label label-sm \"\r\n                               [ngClass]=\"{'label-primary': tx.type == 3, 'label-info': tx.type == 1}\">\r\n                        {{(tx.type == 1 ? 'LABEL.WITHDRAW' : 'LABEL.DEPOSIT') | translate}}</label>\r\n                    </td>\r\n                    <td><label class=\"label label-sm \">{{'LABEL.SUCCESS' | translate}}</label></td>\r\n                    <td>{{tx.datetime | date:'yyyy-MM-dd HH:mm:ss'}}</td>\r\n                    <td>{{(tx.type == 3 ? tx.dest_amount : tx.src_amount) | number:'1.2-2'}}\r\n                    </td>\r\n                    <td>{{tx.type == 3 ? tx.to_address : tx.from_address}}</td>\r\n                </tr>\r\n                <tr *ngIf=\"pastLists?.length == 0\">\r\n                    <td class=\"text-center\" colspan=\"5\">\r\n                        {{'TLWALLET.NO_TRANSACTIONS_FOUND' | translate}}\r\n                    </td>\r\n                </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<modal-dialog [(visible)]=\"showAuthModal\" [closable]=\"false\">\r\n    <form class=\"mt-5\">\r\n        <div class=\"form-group row\">\r\n            <label class=\"col-sm-4  col-form-label text-sm-right pr-0\" [ngSwitch]=\"allowed_g2f\">\r\n                <div *ngSwitchCase=\"1\">{{'AUTH.GOOGLE_AUTHENTICATION_CODE' | translate}}:</div>\r\n                <div *ngSwitchCase=\"2\">{{'AUTH.SMS_AUTHENTICATION_CODE' | translate}}:</div>\r\n                <div *ngSwitchCase=\"3\">{{'AUTH.EMAIL_AUTHENTICATION_CODE' | translate}}:</div>\r\n            </label>\r\n\r\n            <div class=\"col-sm-7\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-12 pr-0\">\r\n                        <input type=\"text\" class=\"text-center form-control\" name=\"auth_code\" [(ngModel)]=\"auth_code\"/>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"text-center mt-2\">\r\n            <button type=\"button\" class=\"btn btn-warning dialog-button\" (click)=\"submitWithdraw()\">{{'BUTTON.SUBMIT' | translate}}\r\n            </button>\r\n            <button type=\"button\" class=\"btn btn-info dialog-button ml-3\" (click)=\"showAuthModal = !showAuthModal\">\r\n                {{'BUTTON.CANCEL' | translate}}\r\n            </button>\r\n        </div>\r\n    </form>\r\n</modal-dialog>\r\n\r\n<modal-dialog [(visible)]=\"showEPayDespositModal\">\r\n    <form class=\"form-horizontal\">\r\n        <div class=\"text-center\">\r\n            <img src=\"assets/img/ePay.png\" />\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12 text-center\">\r\n                <a target=\"_blank\" href=\"https://www.epay.com/?ref=782152\">{{'TLWALLET.REFERRAL_ID' | translate}}</a>\r\n            </div>\r\n        </div>\r\n        <div class=\"row m-t-20\">\r\n            <div class=\"col-md-4\">\r\n                <label>{{'TLWALLET.DEPOSIT_AMOUNT' | translate}}</label>\r\n            </div>\r\n            <div class=\"col-md-8\">\r\n                <input type=\"number\" step=0.01 class=\"form-control\" name=\"deposit_amount1\" [(ngModel)]=\"deposit.amount\">\r\n            </div>\r\n        </div>\r\n\r\n        <div style=\"display: none;\">\r\n            <form id=\"form\" action=\"{{settings.ePayReceiveUrl}}\" method=\"post\">\r\n                <input name=\"PAYEE_ACCOUNT\" value=\"{{settings.ePayAccount}}\" type=\"text\" />\r\n                <input name=\"PAYEE_NAME\" type=\"text\" value=\"{{settings.ePayName}}\" />\r\n                <input name=\"PAYMENT_AMOUNT\" value=\"{{deposit.amount}}\" type=\"text\" />\r\n                <input name=\"PAYMENT_UNITS\" type=\"text\" value=\"USD\" />\r\n                <input name=\"PAYMENT_ID\" id=\"PAYMENT_ID\" type=\"text\" value=\"\" />\r\n                <input name=\"STATUS_URL\" type=\"text\" value=\"{{settings.apiUrl + '/epay/receive/status'}}\" />\r\n                <input name=\"PAYMENT_URL\" type=\"text\" value=\"{{settings.apiUrl + '/usd/epay/success'}}\" />\r\n                <input name=\"PAYMENT_URL_METHOD\" type=\"text\" value=\"get\" />\r\n                <input name=\"NOPAYMENT_URL\" type=\"text\" value=\"{{settings.apiUrl + '/usd/epay/fail'}}\" />\r\n                <input name=\"NOPAYMENT_URL_METHOD\" type=\"text\" value=\"get\" />\r\n                <input name=\"SUGGESTED_MEMO\" type=\"text\" value=\"{{settings.ePayMemo}}\" />\r\n                <input name=\"SUGGESTED_MEMO_NOCHANGE\" type=\"text\" value=\"\" />\r\n                <input name=\"FORCED_PAYER_ACCOUNT\" type=\"text\" value=\"\" />\r\n                <input name=\"INTERFACE_LANGUAGE\" type=\"text\" value=\"{{settings.ePayLang}}\" />\r\n                <input name=\"CHARACTER_ENCODING\" type=\"text\" value=\"{{settings.ePayEncoding}}\" />\r\n                <input name=\"V2_HASH\" id=\"V2_HASH\" value=\"\" type=\"text\" size=\"40\" />\r\n            </form>\r\n        </div>\r\n\r\n        <div class=\"text-center\" style=\"margin-top: 20px;\">\r\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"submitEpayDeposit()\">Submit</button>\r\n            <button type=\"button\" class=\"btn btn-default\" (click)=\"showEPayDespositModal = !showEPayDespositModal\">Cancel</button>\r\n        </div>\r\n    </form>\r\n</modal-dialog>\r\n\r\n<modal-dialog [(visible)]=\"showEPayWithdrawModal\">\r\n    <form class=\"form-horizontal\">\r\n        <div class=\"text-center\">\r\n            <img src=\"assets/img/ePay.png\" />\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12 text-center\">\r\n                <a target=\"_blank\" href=\"https://www.epay.com/?ref=782152\">{{'TLWALLET.REFERRAL_ID' | translate}}</a>\r\n            </div>\r\n        </div>\r\n        <div class=\"row m-t-20\">\r\n            <div class=\"col-md-4\">\r\n                <label>{{'TLWALLET.WITHDRAW_AMOUNT' | translate}}</label>\r\n            </div>\r\n            <div class=\"col-md-8\">\r\n                <input type=\"number\" step=0.001 class=\"form-control\" name=\"withdraw_amount1\" [(ngModel)]=\"withdraw.amount\">\r\n            </div>\r\n        </div>\r\n        <div class=\"row m-t-20\">\r\n            <div class=\"col-md-4\">\r\n                <label>{{'TLWALLET.TO_ACCOUNT' | translate}}</label>\r\n            </div>\r\n            <div class=\"col-md-8\">\r\n                <input type=\"text\" class=\"form-control\" name=\"withdraw_address\" [(ngModel)]=\"withdraw.epay_account\">\r\n            </div>\r\n        </div>\r\n        <div class=\"row m-t-20\">\r\n            <div class=\"col-md-4\">\r\n                <label>{{'TLWALLET.WITHDRAW_FEE' | translate}}</label>\r\n            </div>\r\n            <div class=\"col-md-8\">\r\n                <label>{{settings.getSystemSetting('usd_withdraw_fee') | number:'1.2-2'}} <i class=\"fa fa-usd\"></i></label>\r\n            </div>\r\n        </div>\r\n        <div class=\"text-center\" style=\"margin-top: 20px;\">\r\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"submitEpayWithdraw()\">Submit</button>\r\n            <button type=\"button\" class=\"btn btn-default\" (click)=\"showEPayWithdrawModal = !showEPayWithdrawModal\">Cancel</button>\r\n        </div>\r\n    </form>\r\n</modal-dialog>\r\n"

/***/ }),

/***/ "./src/app/auth/usdwallet/usdwallet.page.scss":
/*!****************************************************!*\
  !*** ./src/app/auth/usdwallet/usdwallet.page.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h5 {\n  color: #3c3c3c; }\n\n.box {\n  padding: 40px; }\n\n.history-table {\n  max-height: 300px; }\n"

/***/ }),

/***/ "./src/app/auth/usdwallet/usdwallet.page.ts":
/*!**************************************************!*\
  !*** ./src/app/auth/usdwallet/usdwallet.page.ts ***!
  \**************************************************/
/*! exports provided: UsdwalletPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsdwalletPage", function() { return UsdwalletPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_financeApi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/financeApi.service */ "./src/app/services/financeApi.service.ts");
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/settings.service */ "./src/app/services/settings.service.ts");
/* harmony import */ var _services_notify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/notify.service */ "./src/app/services/notify.service.ts");
/* harmony import */ var _services_translator_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/translator.service */ "./src/app/services/translator.service.ts");
/* harmony import */ var _services_balance_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/balance.service */ "./src/app/services/balance.service.ts");
/* harmony import */ var _services_accountApi_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/accountApi.service */ "./src/app/services/accountApi.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var UsdwalletPage = /** @class */ (function () {
    function UsdwalletPage(router, financeApi, settings, notify, translator, accountApi, balance) {
        this.router = router;
        this.financeApi = financeApi;
        this.settings = settings;
        this.notify = notify;
        this.translator = translator;
        this.accountApi = accountApi;
        this.balance = balance;
        this.profile = {};
        this.iban_code_usd = '';
        this.pendingLists = [];
        this.pastLists = [];
        this.withdraw = {
            amount: 0
        };
        this.deposit = {
            amount: 0
        };
        this.banks = [];
        this.depositinfo = {};
        this.deposited = false;
        this.allowed_g2f = 0;
        this.showAuthModal = false;
        this.auth_code = '';
        this.showEPayDespositModal = false;
        this.showEPayWithdrawModal = false;
        this.isEpayWithdraw = false;
    }
    UsdwalletPage.prototype.ngOnInit = function () {
        var _this = this;
        this.accountApi.getAccountBankInfo({}).subscribe(function (res) {
            if (res.success) {
                _this.profile = res.data;
                if (_this.profile && _this.profile.iban_code_usd) {
                    _this.iban_code_usd = _this.profile.iban_code_usd;
                    _this.withdraw.to_address = _this.iban_code_usd;
                    _this.deposit.from_address = _this.iban_code_usd;
                }
            }
        });
        this.financeApi.getBanks({
            currency: 'USD'
        }).subscribe(function (res) {
            if (res.success) {
                _this.banks = res.data;
            }
        });
        this.loadPendingTransactions();
        this.loadPastTransactions();
    };
    UsdwalletPage.prototype.ngAfterViewInit = function () {
    };
    UsdwalletPage.prototype.withdrawUSDAll = function () {
        this.withdraw.amount = this.settings.getBalance('USD');
    };
    UsdwalletPage.prototype.loadPendingTransactions = function () {
        var _this = this;
        this.financeApi.getFinanceTransaction('USD', {
            is_pending: true,
            limit_count: 20
        }).subscribe(function (res) {
            if (res.data) {
                _this.pendingLists = res.data;
            }
        });
    };
    UsdwalletPage.prototype.loadPastTransactions = function () {
        var _this = this;
        this.financeApi.getFinanceTransaction('USD', {
            is_success: true,
            limit_count: 20
        }).subscribe(function (res) {
            if (res.data) {
                _this.pastLists = res.data;
            }
        });
    };
    UsdwalletPage.prototype.depositUSD = function () {
        var _this = this;
        this.deposit.fee = this.settings.getSystemSetting('usd_deposit_fee');
        this.settings.loading = true;
        this.financeApi.financeDeposit('USD', this.deposit).subscribe(function (res) {
            _this.settings.loading = false;
            if (res.success) {
                _this.loadPendingTransactions();
                _this.notify.showSuccess('Your deposit was saved successfully. Please wait while confirming.');
                _this.depositinfo = res.data;
                for (var i = 0; i < _this.banks.length; i++) {
                    if (_this.banks[i].name == _this.depositinfo.to_address) {
                        _this.depositinfo.iban_code = _this.banks[i].iban_code;
                        break;
                    }
                }
                _this.depositinfo.amount = _this.deposit.amount;
                _this.deposited = true;
            }
            else {
                _this.notify.showWarning(res.error);
            }
        }, function (err) {
            _this.settings.loading = false;
            _this.notify.showError(err);
        });
    };
    UsdwalletPage.prototype.submitWithdraw = function () {
        var _this = this;
        this.withdraw.isEpay = this.isEpayWithdraw;
        this.withdraw.fee = this.settings.getSystemSetting('usd_withdraw_fee');
        this.withdraw.auth_code = this.auth_code;
        this.settings.loading = true;
        this.financeApi.financeWithdraw('USD', this.withdraw).subscribe(function (res) {
            _this.settings.loading = false;
            if (res.success) {
                _this.showAuthModal = false;
                _this.loadPendingTransactions();
                _this.balance.getCoinBalance('USD');
                _this.notify.showSuccess('Your withdraw was saved successfully. Please wait while confirming.');
            }
            else {
                _this.notify.showWarning(res.error);
            }
        }, function (err) {
            _this.settings.loading = false;
            _this.notify.showError(err);
        });
    };
    UsdwalletPage.prototype.withdrawUSD = function () {
        var _this = this;
        if (this.settings.getUserSetting('account_verified') == 0) {
            this.notify.showWarning('You have to verify your account.');
            return;
        }
        this.settings.loading = true;
        this.accountApi.sendAuthCode().subscribe(function (res) {
            _this.settings.loading = false;
            if (res.success) {
                _this.auth_code = '';
                _this.allowed_g2f = res.allowed_g2f;
                _this.showAuthModal = true;
            }
            else {
                _this.notify.showWarning(res.error);
            }
        }, function (err) {
            _this.settings.loading = false;
            _this.notify.showError(err);
        });
    };
    UsdwalletPage.prototype.cancelTransaction = function (id) {
        var _this = this;
        this.settings.loading = true;
        this.financeApi.cancelFinanceTransaction({
            id: id
        }).subscribe(function (res) {
            _this.settings.loading = false;
            if (res.success) {
                _this.balance.getCoinBalance('USD');
                _this.loadPendingTransactions();
                _this.notify.showSuccess('Your transaction was canceled successfully.');
            }
        }, function (err) {
            _this.settings.loading = false;
            _this.notify.showError(err);
        });
    };
    UsdwalletPage.prototype.onClickDepositEpay = function () {
        this.showEPayDespositModal = true;
    };
    UsdwalletPage.prototype.onClickWithdrawEpay = function () {
        this.showEPayWithdrawModal = true;
    };
    UsdwalletPage.prototype.submitEpayDeposit = function () {
        var _this = this;
        if (this.deposit.amount == null || this.deposit.amount < 100) {
            this.notify.showWarning('You have to input amount greater than 100.');
            return;
        }
        this.settings.loading = true;
        this.financeApi.getEpayReceiveInfo({
            amount: this.deposit.amount,
            currency: 'USD'
        }).subscribe(function (res) {
            _this.settings.loading = false;
            if (res.success) {
                $('#PAYMENT_ID').val(res.paymentID);
                $('#V2_HASH').val(res.v2Hash);
                $('#form').submit();
            }
            else {
                _this.notify.showWarning(res.error);
            }
        }, function (err) {
            _this.settings.loading = false;
            _this.notify.showError(err);
        });
    };
    UsdwalletPage.prototype.submitEpayWithdraw = function () {
        var _this = this;
        if (this.settings.getUserSetting('account_verified') == 0) {
            this.notify.showWarning('You have to verify your account.');
            return;
        }
        if (this.withdraw.amount == null || this.withdraw.amount < 100) {
            this.notify.showWarning('You have to input amount greater than 100.');
            return;
        }
        if (this.withdraw.epay_account == null || this.withdraw.epay_account == '') {
            this.notify.showWarning('You have to input your account.');
            return;
        }
        this.showEPayWithdrawModal = false;
        this.isEpayWithdraw = true;
        this.settings.loading = true;
        this.accountApi.sendAuthCode().subscribe(function (res) {
            _this.settings.loading = false;
            if (res.success) {
                _this.auth_code = '';
                _this.allowed_g2f = res.allowed_g2f;
                _this.showAuthModal = true;
            }
            else {
                _this.notify.showWarning(res.error);
            }
        }, function (err) {
            _this.settings.loading = false;
            _this.notify.showError(err);
        });
    };
    UsdwalletPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-usdwallet-page',
            template: __webpack_require__(/*! ./usdwallet.page.html */ "./src/app/auth/usdwallet/usdwallet.page.html"),
            styles: [__webpack_require__(/*! ./usdwallet.page.scss */ "./src/app/auth/usdwallet/usdwallet.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_financeApi_service__WEBPACK_IMPORTED_MODULE_2__["FinanceApiService"],
            _services_settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"],
            _services_notify_service__WEBPACK_IMPORTED_MODULE_4__["NotifyService"],
            _services_translator_service__WEBPACK_IMPORTED_MODULE_5__["TranslatorService"],
            _services_accountApi_service__WEBPACK_IMPORTED_MODULE_7__["AccountApiService"],
            _services_balance_service__WEBPACK_IMPORTED_MODULE_6__["BalanceService"]])
    ], UsdwalletPage);
    return UsdwalletPage;
}());



/***/ }),

/***/ "./src/app/auth/verifyidentity/verifyidentity.page.html":
/*!**************************************************************!*\
  !*** ./src/app/auth/verifyidentity/verifyidentity.page.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-container\" *ngIf=\"step == 1\">\r\n    <div class=\"container\">\r\n        <h3 class=\"text-center mb-4\">\r\n            {{'VERIFY_ID.TITLE' | translate}}\r\n        </h3>\r\n\r\n        <div class=\"box\">\r\n            <h5 class=\"font-weight-normal\">{{'VERIFY_ID.SELECT_IDENTITY_VERIFICATION_TYPE' | translate}}</h5>\r\n            <div class=\"row text-center icon-container\">\r\n                <div class=\"col-sm-6\">\r\n                    <img src=\"/assets/img/personal.png\" alt=\"png\" class=\"cursor-pointer\" (click)=\"onClickPersonal()\">\r\n                    <h5 class=\"mt-3 mb-2\">{{'VERIFY_ID.PERSONAL' | translate}}</h5>\r\n                    {{'VERIFY_ID.PERSONALTEXT' | translate}}\r\n                </div>\r\n                <div class=\"col-sm-6\">\r\n                    <img src=\"/assets/img/enterprise.png\" alt=\"png\" class=\"cursor-pointer\" (click)=\"onClickEnterprise()\">\r\n                    <h5 class=\"mt-3 mb-2\">{{'VERIFY_ID.ENTERPRISE' | translate}}</h5>\r\n                    {{'VERIFY_ID.ENTERPRISETEXT' | translate}}\r\n                </div>\r\n            </div>\r\n            <div [innerHTML]=\"'VERIFY_ID.TEXT1' | translate\">\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"page-container\" *ngIf=\"step == 2\">\r\n    <div class=\"container\">\r\n        <h3 class=\"text-center mb-4\">\r\n            {{'VERIFY_ID.TITLE' | translate}}\r\n        </h3>\r\n\r\n        <div class=\"box\">\r\n            <h5 class=\"font-weight-normal\">{{'VERIFY_ID.PERSONAL_INFORMATION' | translate}}</h5>\r\n            <form class=\"box\" autocomplete=\"off\" [formGroup]=\"infoForm\">\r\n                <div class=\"row mt-4\">\r\n                    <div class=\"col-sm-5\">\r\n                        <div class=\"form-group\">\r\n                            <label>{{'VERIFY_ID.BASIC_INFORMATION' | translate}}</label>\r\n                            <input type=\"text\" class=\"form-control\" placeholder=\"{{'VERIFY_ID.FIRST_NAME' | translate}}\"\r\n                                   name=\"firstname\" [(ngModel)]=\"verifydata.firstname\" formControlName=\"firstname\"/>\r\n\r\n                            <app-field-error-display [displayError]=\"validate.isFieldValid(infoForm, 'firstname')\"\r\n                                                     errorMsg=\"{{'VERIFY_ID.FIRSTNAME_VALIDATION' | translate}}\">\r\n                            </app-field-error-display>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <input type=\"text\" class=\"form-control\" placeholder=\"{{'VERIFY_ID.LAST_NAME' | translate}}\"\r\n                                   name=\"surname\" [(ngModel)]=\"verifydata.surname\" formControlName=\"surname\"/>\r\n\r\n                            <app-field-error-display [displayError]=\"validate.isFieldValid(infoForm, 'surname')\"\r\n                                                     errorMsg=\"{{'VERIFY_ID.SURNAME_VALIDATION' | translate}}\">\r\n                            </app-field-error-display>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <input type=\"date\" class=\"form-control\" placeholder=\"{{'VERIFY_ID.DATE_OF_BIRTH' | translate}}\"\r\n                                   name=\"birthday\" [(ngModel)]=\"verifydata.birthday\" formControlName=\"birthday\"/>\r\n\r\n                            <app-field-error-display [displayError]=\"validate.isFieldValid(infoForm, 'birthday')\"\r\n                                                     errorMsg=\"{{'VERIFY_ID.BIRTHDAY_VALIDATION' | translate}}\">\r\n                            </app-field-error-display>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-2\"></div>\r\n                    <div class=\"col-sm-5\">\r\n                        <div class=\"form-group\">\r\n                            <label>{{'VERIFY_ID.RESIDENTIAL_ADDRESS' | translate}}</label>\r\n                            <textarea class=\"form-control\" placeholder=\"{{'VERIFY_ID.ADDRESS' | translate}}\"\r\n                                      name=\"address\" [(ngModel)]=\"verifydata.address\" formControlName=\"address\"></textarea>\r\n\r\n                            <app-field-error-display [displayError]=\"validate.isFieldValid(infoForm, 'address')\"\r\n                                                     errorMsg=\"{{'VERIFY_ID.ADDRESS_VALIDATION' | translate}}\">\r\n                            </app-field-error-display>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <input type=\"text\" class=\"form-control\" formControlName=\"postal_code\"\r\n                                   placeholder=\"{{'VERIFY_ID.POSTAL_CODE' | translate}}\" name=\"postal_code\" [(ngModel)]=\"verifydata.postal_code\"/>\r\n\r\n                            <app-field-error-display [displayError]=\"validate.isFieldValid(infoForm, 'postal_code')\"\r\n                                                     errorMsg=\"{{'VERIFY_ID.POSTALCODE_VALIDATION' | translate}}\">\r\n                            </app-field-error-display>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <input type=\"text\" class=\"form-control\" placeholder=\"{{'VERIFY_ID.CITY' | translate}}\"\r\n                                   name=\"city\" [(ngModel)]=\"verifydata.city\" formControlName=\"city\"/>\r\n\r\n                            <app-field-error-display [displayError]=\"validate.isFieldValid(infoForm, 'city')\"\r\n                                                     errorMsg=\"{{'VERIFY_ID.CITY_VALIDATION' | translate}}\">\r\n                            </app-field-error-display>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <select class=\"form-control\" name=\"country_name\" [(ngModel)]=\"verifydata.country_code\" formControlName=\"country_code\">\r\n                                <option *ngFor=\"let name of countryName.names\" value=\"{{name.code}}\">{{name.name}}\r\n                                </option>\r\n                            </select>\r\n\r\n                            <app-field-error-display [displayError]=\"validate.isFieldValid(infoForm, 'country_code')\"\r\n                                                     errorMsg=\"{{'VERIFY_ID.COUNTRY_VALIDATION' | translate}}\">\r\n                            </app-field-error-display>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n\r\n            <div class=\"text-center mt-5\">\r\n                <button class=\"btn btn-warning primary-size\" (click)=\"onClickStep2Next()\">{{'BUTTON.NEXT' | translate}}</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"page-container\" *ngIf=\"step == 3\">\r\n    <div class=\"container\">\r\n        <h3 class=\"text-center mb-4\">\r\n            {{'VERIFY_ID.TITLE' | translate}}\r\n        </h3>\r\n\r\n        <div class=\"box\">\r\n            <h5 class=\"font-weight-normal\">{{'VERIFY_ID.UPLOAD_IMAGE_OF_YOUR_FACE' | translate}}</h5>\r\n            <form>\r\n            <div [innerHTML]=\"'VERIFY_ID.TEXT4' | translate\">\r\n            </div>\r\n\r\n            <div class=\"text-center\" style=\"margin-top:100px\">\r\n                <div class=\"d-inline-block position-relative\">\r\n                    <img src=\"/assets/img/image-face.png\" alt=\"face\" style=\"margin-left: -20px\">\r\n                    <span class=\"code\">Sistemkoin<br/>01.12.2018</span>\r\n                    <br/>\r\n\r\n                    <input type=\"file\" id=\"faceimageFile\" style=\"display: none;\" name=\"file\" class=\"form-control\" (change)=\"fileChangeListener($event, 'face')\">\r\n                    <button class=\"btn btn-warning primary-size mt-4\" (click)=\"onChooseFaceImage()\">{{'BUTTON.UPLOAD_IMAGE' | translate}}</button>\r\n                </div>\r\n            </div>\r\n            </form>\r\n            <div class=\"text-center\" style=\"margin-top:90px\">\r\n                <button class=\"btn btn-black primary-size mx-3 mb-2\" (click)=\"onClickStep3Back()\">{{'BUTTON.BACK' | translate}}</button>\r\n                <button class=\"btn btn-warning primary-size mx-3 mb-2\" (click)=\"onClickStep3Next()\">{{'BUTTON.NEXT' | translate}}</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"page-container\" *ngIf=\"step == 4\">\r\n    <div class=\"container\">\r\n        <h3 class=\"text-center mb-4\">\r\n            {{'VERIFY_ID.TITLE' | translate}}\r\n        </h3>\r\n\r\n        <div class=\"box\">\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-2\">\r\n                    <label>{{'VERIFY_ID.CHOOSE_ISSUING_COUNTRY' | translate}}</label>\r\n                </div>\r\n                <div class=\"col-sm-3\">\r\n                    <select class=\"form-control\" name=\"country_code\" [(ngModel)]=\"verifydata.country_code\">\r\n                        <option *ngFor=\"let name of countryName.names\" value=\"{{name.code}}\">{{name.name}}\r\n                        </option>\r\n                    </select>\r\n                </div>\r\n            </div>\r\n            <div class=\"mt-3 mb-5\">\r\n                <label>{{'VERIFY_ID.SELECT_ID_TYPE' | translate}}</label>\r\n            </div>\r\n\r\n            <div class=\"text-center\">\r\n                <div class=\"card mb-2\">\r\n                    <div class=\"card-bg passport\">\r\n                        <img src=\"/assets/img/passport.png\" alt=\"passport\">\r\n                    </div>\r\n                    <button class=\"btn btn-warning w-100\" (click)=\"onClickPassport()\">{{'VERIFY_ID.PASSPORT' | translate}}</button>\r\n                </div>\r\n                <div class=\"card mb-2\">\r\n                    <div class=\"card-bg identity-card\">\r\n                        <img src=\"/assets/img/identity.png\" alt=\"identity\">\r\n                    </div>\r\n                    <button class=\"btn btn-warning w-100\" (click)=\"onClickIDcard()\">{{'VERIFY_ID.IDENTITY_CARD' | translate}}</button>\r\n                </div>\r\n                <div class=\"card mb-2\">\r\n                    <div class=\"card-bg driving-license\">\r\n                        <img src=\"/assets/img/driving_license.png\" alt=\"driving_license\">\r\n                    </div>\r\n                    <button class=\"btn btn-warning w-100\" (click)=\"onClickDriving()\">{{'VERIFY_ID.DRIVING_LICENSE' | translate}}</button>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"text-center mt-5\">\r\n                <button class=\"btn btn-black primary-size\" (click)=\"onClickStep4Back()\">{{'BUTTON.BACK' | translate}}</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"page-container\" *ngIf=\"step == 5\">\r\n    <div class=\"container\">\r\n        <h3 class=\"text-center mb-4\">\r\n            {{'VERIFY_ID.TITLE' | translate}}\r\n        </h3>\r\n\r\n        <div class=\"box\">\r\n            <h5 class=\"font-weight-normal\">{{'VERIFY_ID.UPLOAD_PASSPORT_IMAGE' | translate}}</h5>\r\n            <div [innerHTML]=\"'VERIFY_ID.TEXT5' | translate\">\r\n                <span class=\"text-yellow\">Notice:</span> Please upload first main page of your passport with your face picture\r\n            </div>\r\n\r\n            <div class=\"text-center\" style=\"margin-top:100px\">\r\n                <div class=\"d-inline-block\">\r\n                    <img src=\"/assets/img/passport1.png\" alt=\"passport\">\r\n                    <br/>\r\n                    <input type=\"file\" id=\"passportFile\" style=\"display: none;\" name=\"file\" class=\"form-control\" (change)=\"fileChangeListener($event, 'passport')\">\r\n                    <button class=\"btn btn-warning primary-size mt-5\" (click)=\"onChoosePassportImage()\">{{'BUTTON.UPLOAD_IMAGE' | translate}}</button>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"text-center\" style=\"margin-top:90px\">\r\n                <button class=\"btn btn-black primary-size mx-3 mb-2\" (click)=\"onGoStep4()\">{{'BUTTON.BACK' | translate}}</button>\r\n                <button class=\"btn btn-warning primary-size mx-3 mb-2\" (click)=\"onGoStep8()\">{{'BUTTON.NEXT' | translate}}</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"page-container\" *ngIf=\"step == 6\">\r\n    <div class=\"container\">\r\n        <h3 class=\"text-center mb-4\">\r\n            {{'VERIFY_ID.TITLE' | translate}}\r\n        </h3>\r\n\r\n        <div class=\"box\">\r\n            <h5 class=\"font-weight-normal\">{{'VERIFY_ID.UPLOAD_IDCARD_IMAGE' | translate}}</h5>\r\n            <div [innerHTML]=\"'VERIFY_ID.TEXT9' | translate\">\r\n                <span class=\"text-yellow\">Notice:</span> Please upload front side of your idcard with your face picture\r\n            </div>\r\n\r\n            <div class=\"text-center\" style=\"margin-top:100px\">\r\n                <div class=\"d-inline-block\">\r\n                    <img src=\"/assets/img/idcard1.png\" alt=\"idcard\">\r\n                    <br/>\r\n                    <input type=\"file\" id=\"idcardFile\" style=\"display: none;\" name=\"file\" class=\"form-control\" (change)=\"fileChangeListener($event, 'idcard')\">\r\n                    <button class=\"btn btn-warning primary-size mt-5\" (click)=\"onChooseIdcardImage()\">{{'BUTTON.UPLOAD_IMAGE' | translate}}</button>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"text-center\" style=\"margin-top:90px\">\r\n                <button class=\"btn btn-black primary-size mx-3 mb-2\" (click)=\"onGoStep4()\">{{'BUTTON.BACK' | translate}}</button>\r\n                <button class=\"btn btn-warning primary-size mx-3 mb-2\" (click)=\"onGoStep8()\">{{'BUTTON.NEXT' | translate}}</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"page-container\" *ngIf=\"step == 7\">\r\n    <div class=\"container\">\r\n        <h3 class=\"text-center mb-4\">\r\n            {{'VERIFY_ID.TITLE' | translate}}\r\n        </h3>\r\n\r\n        <div class=\"box\">\r\n            <h5 class=\"font-weight-normal\">{{'VERIFY_ID.UPLOAD_DRIVING_LICENSE_IMAGE' | translate}}</h5>\r\n            <div [innerHTML]=\"'VERIFY_ID.TEXT6' | translate\">\r\n                <span class=\"text-yellow\">Notice:</span> Please upload front side of your driving license\r\n            </div>\r\n\r\n            <div class=\"text-center\" style=\"margin-top:100px\">\r\n                <div class=\"d-inline-block\">\r\n                    <img src=\"/assets/img/driving_license1.png\" alt=\"driving license\">\r\n                    <br/>\r\n                    <input type=\"file\" id=\"drivingFile\" style=\"display: none;\" name=\"file\" class=\"form-control\" (change)=\"fileChangeListener($event, 'driving')\">\r\n                    <button class=\"btn btn-warning primary-size mt-5\" (click)=\"onChooseDrivingImage()\">{{'BUTTON.UPLOAD_IMAGE' | translate}}</button>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"text-center\" style=\"margin-top:90px\">\r\n                <button class=\"btn btn-black primary-size mx-3 mb-2\" (click)=\"onGoStep4()\">{{'BUTTON.BACK' | translate}}</button>\r\n                <button class=\"btn btn-warning primary-size mx-3 mb-2\" (click)=\"onGoStep8()\">{{'BUTTON.NEXT' | translate}}</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"page-container\" *ngIf=\"step == 8\">\r\n    <div class=\"container\">\r\n        <h3 class=\"text-center mb-4\">\r\n            {{'VERIFY_ID.TITLE' | translate}}\r\n        </h3>\r\n\r\n        <div class=\"box text-center\">\r\n            <h5 class=\"my-5\">{{'VERIFY_ID.AWAITING_APPROVAL' | translate}}</h5>\r\n            <p>\r\n                {{'VERIFY_ID.TEXT7' | translate}}\r\n                <!--<br/>-->\r\n                <!--<a class=\"text-warning\">{{'VERIFY_ID.GO_BACK_TO_USER_CENTER' | translate}}</a>-->\r\n            </p>\r\n\r\n            <div class=\"box mx-auto p-4\" style=\"max-width: 660px\">\r\n                <ul class=\"pl-3 text-left\">\r\n                    <li><p>{{'VERIFY_ID.TEXT8' | translate}}</p></li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/auth/verifyidentity/verifyidentity.page.scss":
/*!**************************************************************!*\
  !*** ./src/app/auth/verifyidentity/verifyidentity.page.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box {\n  padding: 35px 30px; }\n\n.icon-container {\n  padding: 80px 0px; }\n\n.form-group {\n  margin-bottom: 24px; }\n\n.card {\n  width: 150px;\n  display: inline-block;\n  margin-left: 45px;\n  margin-right: 45px;\n  border: 0px none; }\n\n.card .btn {\n    height: 40px; }\n\n.card .card-bg {\n    display: flex;\n    border: 1px solid #c1c1c1;\n    height: 150px;\n    border-bottom: 0px none;\n    justify-content: center;\n    align-items: center; }\n\n.confirm-box {\n  padding: 80px 20px;\n  line-height: 2rem; }\n\n.code {\n  position: absolute;\n  left: 10px;\n  top: 99px;\n  font-size: 10px;\n  font-weight: bold;\n  line-height: 1;\n  text-align: center; }\n\np {\n  line-height: 2; }\n"

/***/ }),

/***/ "./src/app/auth/verifyidentity/verifyidentity.page.ts":
/*!************************************************************!*\
  !*** ./src/app/auth/verifyidentity/verifyidentity.page.ts ***!
  \************************************************************/
/*! exports provided: VerifyIdentityPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyIdentityPage", function() { return VerifyIdentityPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_notify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/notify.service */ "./src/app/services/notify.service.ts");
/* harmony import */ var _services_countryname_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/countryname.service */ "./src/app/services/countryname.service.ts");
/* harmony import */ var _services_accountApi_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/accountApi.service */ "./src/app/services/accountApi.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/settings.service */ "./src/app/services/settings.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var VerifyIdentityPage = /** @class */ (function () {
    function VerifyIdentityPage(router, notify, countryName, accountApi, formBuilder, validate, settings) {
        this.router = router;
        this.notify = notify;
        this.countryName = countryName;
        this.accountApi = accountApi;
        this.formBuilder = formBuilder;
        this.validate = validate;
        this.settings = settings;
        this.step = 1;
        this.verifydata = {
            'type': 'personal',
            'faceimage_url': ''
        };
    }
    VerifyIdentityPage.prototype.ngOnInit = function () {
        var _this = this;
        this.infoForm = this.formBuilder.group({
            firstname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            surname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            birthday: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            postal_code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            country_code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
        });
        this.accountApi.getVerifyData({}).subscribe(function (res) {
            if (res.success) {
                _this.verifydata = res.data;
            }
        }, function (err) {
        });
    };
    VerifyIdentityPage.prototype.onClickPersonal = function () {
        this.verifydata.type = 'personal';
        this.step = 2;
    };
    VerifyIdentityPage.prototype.onClickEnterprise = function () {
        this.notify.showWarning('Coming Soon');
    };
    VerifyIdentityPage.prototype.onClickStep2Next = function () {
        if (this.infoForm.valid) {
            this.step = 3;
        }
        else {
            this.validate.validateAllFormFields(this.infoForm);
        }
    };
    VerifyIdentityPage.prototype.onChooseFaceImage = function () {
        $('#faceimageFile').click();
    };
    VerifyIdentityPage.prototype.onChooseIdcardImage = function () {
        $('#idcardFile').click();
    };
    VerifyIdentityPage.prototype.onChoosePassportImage = function () {
        $('#passportFile').click();
    };
    VerifyIdentityPage.prototype.onChooseDrivingImage = function () {
        $('#drivingFile').click();
    };
    VerifyIdentityPage.prototype.fileChangeListener = function ($event, type) {
        var _this = this;
        var image = new Image();
        var file = $event.target.files[0];
        if (!file) {
            return;
        }
        var filename = file.name;
        var extension = filename.substring(filename.lastIndexOf('.') + 1).toLowerCase();
        if (extension == 'gif' || extension == 'png' || extension == 'bmp' || extension == 'jpeg' || extension == 'jpg') {
            // let reader = new FileReader();
            //
            // reader.onload = function(e) {
            //     $('#card-preview').attr('src', e.target.result);
            // }
            //
            // reader.readAsDataURL(file);
            this.settings.loading = true;
            this.accountApi.uploadFile(file).subscribe(function (res) {
                _this.settings.loading = false;
                if (res.success) {
                    if (type == 'face') {
                        _this.verifydata.faceimage_url = res.url;
                    }
                    else {
                        _this.verifydata.idcard_url = res.url;
                        _this.verifydata.attach_name = file.name;
                    }
                }
            }, function (err) {
                _this.notify.showError(err);
                _this.settings.loading = false;
            });
        }
        else {
            this.notify.showWarning('Please select image file');
        }
    };
    VerifyIdentityPage.prototype.onClickStep3Back = function () {
        this.step = 2;
    };
    VerifyIdentityPage.prototype.onClickStep3Next = function () {
        if (this.verifydata.faceimage_url && this.verifydata.faceimage_url != '') {
            this.step = 4;
        }
        else {
            this.notify.showWarning('Please upload your face image');
        }
    };
    VerifyIdentityPage.prototype.onClickStep4Back = function () {
        this.step = 3;
    };
    VerifyIdentityPage.prototype.onClickPassport = function () {
        this.verifydata.verify_type = 2;
        this.step = 5;
    };
    VerifyIdentityPage.prototype.onClickIDcard = function () {
        this.verifydata.verify_type = 1;
        this.step = 6;
    };
    VerifyIdentityPage.prototype.onClickDriving = function () {
        this.verifydata.verify_type = 3;
        this.step = 7;
    };
    VerifyIdentityPage.prototype.onGoStep4 = function () {
        this.step = 4;
    };
    VerifyIdentityPage.prototype.onGoStep8 = function () {
        var _this = this;
        if (this.verifydata.idcard_url && this.verifydata.idcard_url != '') {
            this.settings.loading = true;
            this.accountApi.setVerifyData(this.verifydata).subscribe(function (res) {
                _this.settings.loading = false;
                if (res.success) {
                    _this.step = 8;
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
            this.notify.showWarning('Please upload your image');
        }
    };
    VerifyIdentityPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-verifyidentity-page',
            template: __webpack_require__(/*! ./verifyidentity.page.html */ "./src/app/auth/verifyidentity/verifyidentity.page.html"),
            styles: [__webpack_require__(/*! ./verifyidentity.page.scss */ "./src/app/auth/verifyidentity/verifyidentity.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_notify_service__WEBPACK_IMPORTED_MODULE_2__["NotifyService"],
            _services_countryname_service__WEBPACK_IMPORTED_MODULE_3__["CountryNameService"],
            _services_accountApi_service__WEBPACK_IMPORTED_MODULE_4__["AccountApiService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _services_validate_service__WEBPACK_IMPORTED_MODULE_6__["ValidateService"],
            _services_settings_service__WEBPACK_IMPORTED_MODULE_7__["SettingsService"]])
    ], VerifyIdentityPage);
    return VerifyIdentityPage;
}());



/***/ }),

/***/ "./src/app/auth/withdraw/withdraw.page.html":
/*!**************************************************!*\
  !*** ./src/app/auth/withdraw/withdraw.page.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-container\">\r\n    <div class=\"container\">\r\n        <h3 class=\"mb-4\">\r\n            {{'HEADER.WITHDRAW' | translate}}\r\n        </h3>\r\n\r\n        <form class=\"box\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"select\">\r\n                        <label>{{'WALLET.SELECT_COIN_OR_TOKEN' | translate}}</label>\r\n                        <select class=\"select2\" style=\"width: 100%\" [(ngModel)]=\"selCoin\" name=\"coin_list\">\r\n                            <option *ngFor=\"let coin of coins\" value=\"{{coin.coin}}\">{{coin.coin}} - {{coin.fullname}}\r\n                            </option>\r\n                        </select>\r\n\r\n                        <div class=\"row mt-5\" *ngIf=\"selCoinInfo.withdraw == 0\">\r\n                            <div class=\"col-md-12\">\r\n                                <div class=\"alert alert-danger\">\r\n                                    {{'WALLET.WALLET_SUSPEND' | translate}}\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"row mt-4\" *ngIf=\"selCoinInfo.withdraw == 1\">\r\n                            <div class=\"col-md-6\">\r\n                                <div class=\"form-group\">\r\n                                    <label>{{'WALLET.TO_ADDRESS' | translate}}</label>\r\n                                    <input type=\"text\" class=\"form-control\" name=\"to_address\"\r\n                                           [(ngModel)]=\"withdraw.to_address\">\r\n                                </div>\r\n                                <div class=\"form-group\" style=\"margin-bottom: 0px;\" *ngIf=\"selCoin == 'XRP'\">\r\n                                    <input type=\"checkbox\" id=\"tag_check\" class=\"filled-in chk-col-light-blue\"\r\n                                           name=\"tag_check\" [(ngModel)]=\"withdraw.use_tag\"/>\r\n                                    <label for=\"tag_check\">{{'WALLET.DESTINATION_TAG' | translate}}</label>\r\n                                </div>\r\n                                <div class=\"form-group\" *ngIf=\"selCoin == 'XRP'\">\r\n                                    <input type=\"text\" class=\"form-control\" name=\"to_tag\"\r\n                                           [(ngModel)]=\"withdraw.to_tag\">\r\n                                </div>\r\n\r\n                                <div class=\"form-group\" style=\"margin-bottom: 0px;\" *ngIf=\"selCoin == 'CVN' || selCoin == 'DEEX' || selCoin == 'SCR'\">\r\n                                    <label class=\"custom-checkbox mb-0\">{{'WALLET.MEMO' | translate}}\r\n                                        <input type=\"checkbox\" id=\"memo_check\" class=\"filled-in chk-col-light-blue\"\r\n                                               name=\"memo_check\" [(ngModel)]=\"withdraw.use_memo\"/>\r\n                                        <span></span>\r\n                                    </label>\r\n                                </div>\r\n                                <div class=\"form-group\" *ngIf=\"selCoin == 'CVN' || selCoin == 'DEEX' || selCoin == 'SCR'\">\r\n                                    <input type=\"text\" class=\"form-control\" name=\"memo\" [(ngModel)]=\"withdraw.memo\">\r\n                                </div>\r\n\r\n                                <div class=\"form-group\" *ngIf=\"selCoin == 'XIN'\">\r\n                                    <label>{{'WALLET.PUBLIC_KEY' | translate}}</label>\r\n                                    <input type=\"text\" class=\"form-control\" name=\"public_key\"\r\n                                           [(ngModel)]=\"withdraw.public_key\">\r\n                                </div>\r\n\r\n                                <div class=\"form-group\" style=\"margin-bottom: 0px;\" *ngIf=\"selCoin == 'ETN'\">\r\n                                    <label class=\"custom-checkbox mb-0\">Payment ID\r\n                                        <input type=\"checkbox\" id=\"paymentid_check\" class=\"filled-in chk-col-light-blue\"\r\n                                               name=\"memo_check\" [(ngModel)]=\"withdraw.use_paymentid\"/>\r\n                                        <span></span>\r\n                                    </label>\r\n                                </div>\r\n                                <div class=\"form-group\" *ngIf=\"selCoin == 'ETN'\">\r\n                                    <input type=\"text\" class=\"form-control\" name=\"etn_paymentid\" [(ngModel)]=\"withdraw.paymentid\">\r\n                                </div>\r\n\r\n                                <div class=\"form-group\">\r\n                                    <label>{{'LABEL.AMOUNT' | translate}}</label>\r\n                                    <input type=\"number\" step=0.001 class=\"form-control\" name=\"to_amount\"\r\n                                           [(ngModel)]=\"withdraw.to_amount\">\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-6\">\r\n                                <div class=\"row mt-3\">\r\n                                    <div class=\"col-md-6\">\r\n                                        <label>{{'LABEL.BALANCE' | translate}}</label>\r\n                                    </div>\r\n                                    <div class=\"col-md-6 text-right\">\r\n                                        <label (click)=\"withdrawAll()\" style=\"cursor: pointer;\">{{settings.getBalance(selCoin)\r\n                                            | number:'1.8-8'}}</label>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <label>{{'WALLET.MIMIMUM_WITHDRAW_AMOUNT' | translate}}</label>\r\n                                    </div>\r\n                                    <div class=\"col-md-6 text-right\">\r\n                                        <label>{{selCoinInfo.min_withdraw | number:'1.0-8'}}</label>\r\n                                    </div>\r\n                                    <div class=\"col-md-12\">\r\n                                        <hr/>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <label>{{'WALLET.THE_AMOUNT_YOU_WANT_TO_WITHDARW' | translate}}</label>\r\n                                    </div>\r\n                                    <div class=\"col-md-6 text-right\">\r\n                                        <label>{{withdraw.to_amount | number:'1.8-8'}}</label>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <label>{{'WALLET.WITHDRAW_FEE' | translate}}</label>\r\n                                    </div>\r\n                                    <div class=\"col-md-6 text-right\">\r\n                                        <label>{{selCoinInfo.withdraw_fee | number:'1.8-8'}}</label>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <label>{{'WALLET.AMOUNT_TO_PAY' | translate}}</label>\r\n                                    </div>\r\n                                    <div class=\"col-md-6 text-right\">\r\n                                        <label>{{(withdraw.to_amount - selCoinInfo.withdraw_fee) |\r\n                                            number:'1.8-8'}}</label>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"mt-4 mb-4 row text-right\">\r\n                            <div class=\"col-md-12\">\r\n                                <button type=\"button\" class=\"btn btn-warning\" (click)=\"withdrawCoin()\">\r\n                                    {{selCoin}} {{'LABEL.WITHDRAW' | translate}}\r\n                                </button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </form>\r\n\r\n        <h3 class=\"mt-4 mb-3\">\r\n            {{'WALLET.WITHDRAW_HISTORY' | translate}} <a class=\"cursor-pointer\"><i class=\"fa fa-refresh\" (click)=\"refreshWithdrawList()\"></i></a>\r\n        </h3>\r\n\r\n        <div class=\"table-responsive history-table box\">\r\n            <table class=\"table\">\r\n                <thead>\r\n                <tr>\r\n                    <th>{{'LABEL.STATUS' | translate}}</th>\r\n                    <th>{{'LABEL.AMOUNT' | translate}}</th>\r\n                    <th>{{'LABEL.TIME' | translate}}</th>\r\n                    <th>{{'LABEL.ACTION' | translate}}</th>\r\n                </tr>\r\n                </thead>\r\n                <tbody>\r\n                <tr *ngFor=\"let tx of withdrawTx\">\r\n                    <td [ngSwitch]=\"tx.status\">\r\n                        <label class=\"label label-sm label-purple\" *ngSwitchCase=\"0\">{{'LABEL.PENDING'| translate}}</label>\r\n                        <label class=\"label label-sm label-success\" *ngSwitchCase=\"1\">{{'LABEL.SUCCESS'| translate}}</label>\r\n                        <label class=\"label label-sm label-danger\" *ngSwitchCase=\"2\">{{'LABEL.FAILED'| translate}}</label>\r\n                        <label class=\"label label-sm label-info\" *ngSwitchCase=\"3\">{{'LABEL.PROCESSING'| translate}}</label>\r\n                        <label class=\"label label-sm label-megna\" *ngSwitchCase=\"4\">{{'LABEL.CONFIRM_EMAIL'| translate}}</label>\r\n                    </td>\r\n                    <td>{{tx.src_amount | number:'1.8-8'}}</td>\r\n                    <td >{{tx.datetime | date:'yyyy-MM-dd HH:mm:ss'}}</td>\r\n                    <td>\r\n                        <a target=\"_blank\" href=\"{{selCoinInfo.explorer_url + tx.txid}}\" *ngIf=\"tx.txid != ''\" class=\"btn btn-sm btn-light\">{{'BUTTON.DETAIL' | translate}}</a>\r\n                        <button type=\"button\" class=\"btn btn-sm btn-danger ml-3\" *ngIf=\"(tx.status == 0 || tx.status == 4) && validate.isNullOrEmpty(tx.txid)\" (click)=\"cancelWithdraw(tx.id)\">\r\n                            {{'BUTTON.DELETE' | translate}}</button>\r\n                    </td>\r\n                </tr>\r\n                <tr *ngIf=\"withdrawTx?.length == 0\">\r\n                    <td class=\"text-center\" colspan=\"4\">\r\n                        {{'WALLET.NO_WITHDRAW' | translate}}\r\n                    </td>\r\n                </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<modal-dialog [(visible)]=\"showAuthModal\" [closable]=\"false\">\r\n    <form class=\"mt-5\">\r\n        <div class=\"form-group row\">\r\n            <label class=\"col-sm-4  col-form-label text-sm-right pr-0\" [ngSwitch]=\"allowed_g2f\">\r\n                <div *ngSwitchCase=\"1\">{{'AUTH.GOOGLE_AUTHENTICATION_CODE' | translate}}: </div>\r\n                <div *ngSwitchCase=\"2\">{{'AUTH.SMS_AUTHENTICATION_CODE' | translate}}: </div>\r\n                <div *ngSwitchCase=\"3\">{{'AUTH.EMAIL_AUTHENTICATION_CODE' | translate}}: </div>\r\n            </label>\r\n\r\n            <div class=\"col-sm-7\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-12 pr-0\">\r\n                        <input type=\"text\" class=\"text-center form-control\" name=\"auth_code\" [(ngModel)]=\"auth_code\"/>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"text-center mt-2\">\r\n            <button type=\"button\" class=\"btn btn-warning dialog-button\" (click)=\"submitWithdraw()\">{{'BUTTON.SUBMIT' | translate}}</button>\r\n            <button type=\"button\" class=\"btn btn-info dialog-button ml-3\" (click)=\"showAuthModal = !showAuthModal\">{{'BUTTON.CANCEL' | translate}}\r\n            </button>\r\n        </div>\r\n    </form>\r\n</modal-dialog>\r\n"

/***/ }),

/***/ "./src/app/auth/withdraw/withdraw.page.scss":
/*!**************************************************!*\
  !*** ./src/app/auth/withdraw/withdraw.page.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h6 {\n  font-size: 16px; }\n\n.ngx-datatable {\n  height: 380px; }\n\n.btn-sm {\n  width: 80px;\n  height: 25px;\n  font-size: 14px;\n  padding: 0;\n  line-height: 25px; }\n\n.input-group-append {\n  width: 40%; }\n\n.input-group-text {\n  width: 100%; }\n\n.btn-warning {\n  width: 180px; }\n\n.history-table {\n  max-height: 300px; }\n\ninput.form-control {\n  max-width: 500px; }\n\n.dialog-button {\n  height: 35px;\n  width: 100px; }\n"

/***/ }),

/***/ "./src/app/auth/withdraw/withdraw.page.ts":
/*!************************************************!*\
  !*** ./src/app/auth/withdraw/withdraw.page.ts ***!
  \************************************************/
/*! exports provided: WithdrawPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WithdrawPage", function() { return WithdrawPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_coinApi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/coinApi.service */ "./src/app/services/coinApi.service.ts");
/* harmony import */ var _services_notify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/notify.service */ "./src/app/services/notify.service.ts");
/* harmony import */ var _services_balance_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/balance.service */ "./src/app/services/balance.service.ts");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _services_base58_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/base58.service */ "./src/app/services/base58.service.ts");
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/settings.service */ "./src/app/services/settings.service.ts");
/* harmony import */ var _services_accountApi_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/accountApi.service */ "./src/app/services/accountApi.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var WithdrawPage = /** @class */ (function () {
    function WithdrawPage(router, coinApi, accountApi, notify, balance, validate, base58, settings) {
        this.router = router;
        this.coinApi = coinApi;
        this.accountApi = accountApi;
        this.notify = notify;
        this.balance = balance;
        this.validate = validate;
        this.base58 = base58;
        this.settings = settings;
        this.selCoin = 'BTC';
        this.selCoinInfo = {
            fullname: ''
        };
        this.coins = [];
        this.withdrawTx = [];
        this.allowed_g2f = 0;
        this.showAuthModal = false;
        this.auth_code = '';
        this.withdraw = {
            to_amount: 0,
            use_tag: false,
            use_memo: false,
            use_paymentid: false,
            hexAddress: ''
        };
        this.mainWallet = {
            address: '',
            minimum_amount: 0
        };
    }
    WithdrawPage.prototype.ngOnInit = function () {
        var _this = this;
        if (window.localStorage.getItem('withdraw_coin') && window.localStorage.getItem('withdraw_coin') != '') {
            this.selCoin = window.localStorage.getItem('withdraw_coin');
        }
        this.allowed_g2f = this.settings.getUserSetting('allowed_g2f');
        this.coinApi.getCoin({
            only_coin: true
        }).subscribe(function (res) {
            if (res.success) {
                _this.coins = res.data;
                _this.selCoinInfo = _this.coins.filter(function (coin) { return coin.coin === _this.selCoin; })[0];
            }
        }, function (err) {
        });
        this.coinApi.getXRPMainWallet({}).subscribe(function (res) {
            if (res.success) {
                _this.mainWallet.address = res.address;
                _this.mainWallet.minimum_amount = res.minimum_amount;
            }
        }, function (err) {
        });
        this.getWithdrawList();
    };
    WithdrawPage.prototype.ngAfterViewInit = function () {
        $('.select2').select2();
        var _parent = this;
        $('.select2').on('select2:select', function (e) {
            _parent.onClickCoin(e.params.data.id);
        });
    };
    WithdrawPage.prototype.onClickCoin = function (coin) {
        var _this = this;
        if (coin == this.selCoin) {
            return;
        }
        this.selCoin = coin;
        this.selCoinInfo = this.coins.filter(function (coin) { return coin.coin == _this.selCoin; })[0];
        this.withdraw = {
            to_amount: 0,
            use_tag: false,
            use_memo: false,
            use_paymentid: false
        };
        this.getWithdrawList();
        window.localStorage.setItem('withdraw_coin', this.selCoin);
    };
    WithdrawPage.prototype.getWithdrawList = function () {
        var _this = this;
        this.coinApi.getWithdrawHistory(this.selCoin, {}).subscribe(function (res) {
            if (res.success) {
                _this.withdrawTx = res.data;
            }
            else {
            }
        }, function (err) {
        });
    };
    WithdrawPage.prototype.copyAddress = function (id) {
        $('#' + id).select();
        document.execCommand('copy');
        window.getSelection().removeAllRanges();
    };
    WithdrawPage.prototype.refreshWithdrawList = function () {
        this.balance.getCoinBalance(this.selCoin);
        this.getWithdrawList();
    };
    WithdrawPage.prototype.withdrawAll = function () {
        this.withdraw.to_amount = this.settings.getBalance(this.selCoin);
    };
    WithdrawPage.prototype.submitWithdraw = function () {
        var _this = this;
        this.settings.loading = true;
        this.coinApi.requestWithdraw(this.selCoin, {
            address: this.withdraw.to_address,
            amount: this.withdraw.to_amount,
            destination_tag: this.withdraw.to_tag,
            memo: this.withdraw.memo,
            public_key: this.withdraw.public_key,
            auth_code: this.auth_code,
            paymentid: this.withdraw.paymentid
        }).subscribe(function (res) {
            _this.settings.loading = false;
            if (res.success) {
                _this.notify.showSuccess('We have sent confirmation email for withdraw. Please check your registered email and confirm your withdraw.');
                _this.getWithdrawList();
                _this.balance.getCoinBalance(_this.selCoin);
                _this.showAuthModal = false;
            }
            else {
                _this.notify.showWarning(res.error);
            }
        }, function (err) {
            _this.settings.loading = false;
            _this.notify.showWarning(err);
        });
    };
    WithdrawPage.prototype.withdrawCoin = function () {
        var _this = this;
        if (this.settings.getUserSetting('account_verified') == 0) {
            this.notify.showWarning('You have to verify your account.');
            return;
        }
        if (this.withdraw.to_address == null || this.withdraw.to_address == '') {
            this.notify.showWarning('Please enter Address');
            return;
        }
        if (this.withdraw.to_amount - Number(this.selCoinInfo.withdraw_fee) < this.selCoinInfo.min_withdraw) {
            this.notify.showWarning('Please enter greater than minimual withdraw amount.');
            return;
        }
        if (this.selCoin == 'XRP') {
            var UInt160 = ripple.UInt160;
            if (!UInt160.is_valid(this.withdraw.to_address)) {
                this.notify.showWarning('Address is invalid.');
                return;
            }
            if (this.withdraw.to_amount < this.mainWallet.minimum_amount) {
                this.notify.showWarning('Minimal Withdraw amount is ' + this.mainWallet.minimum_amount + ' XRP.');
                return;
            }
            if (this.withdraw.use_tag && (this.withdraw.to_tag == null || this.withdraw.to_tag == '')) {
                this.notify.showWarning('Please enter destination tag.');
                return;
            }
        }
        if (this.selCoin == 'CVN' || this.selCoin == 'DEEX' || this.selCoin == 'SCR') {
            if (this.withdraw.use_memo && (this.withdraw.memo == null || this.withdraw.memo == '')) {
                this.notify.showWarning('Please input memo.');
                return;
            }
        }
        if (this.selCoin == 'TRX') {
            var hexAddress = this.base58.decode(this.withdraw.to_address);
            if (hexAddress === false) {
                this.notify.showWarning('Wrong address');
                return;
            }
        }
        if (this.selCoin == 'ETN') {
            if (this.withdraw.use_paymentid && (this.withdraw.paymentid == null || this.withdraw.paymentid == '')) {
                this.notify.showWarning('Please input payment id.');
                return;
            }
        }
        this.settings.loading = true;
        this.accountApi.sendAuthCode().subscribe(function (res) {
            _this.settings.loading = false;
            if (res.success) {
                _this.auth_code = '';
                _this.allowed_g2f = res.allowed_g2f;
                _this.showAuthModal = true;
            }
            else {
                _this.notify.showWarning(res.error);
            }
        }, function (err) {
            _this.settings.loading = false;
            _this.notify.showError(err);
        });
    };
    WithdrawPage.prototype.cancelWithdraw = function (id) {
        if (id == null || id == 0) {
            return;
        }
        var _parent = this;
        swal({
            title: 'Are you sure?',
            text: 'Your withdraw transaction will be removed permanently.',
            type: 'warning',
            showCancelButton: true,
            confirmButtonClass: 'btn btn-success',
            cancelButtonClass: 'btn btn-danger',
            confirmButtonText: 'Yes',
            buttonsStyling: false
        }, function () {
            _parent.settings.loading = true;
            _parent.coinApi.cancelWithdraw(_parent.selCoin, {
                id: id,
            }).subscribe(function (res) {
                _parent.settings.loading = false;
                if (res.success) {
                    _parent.notify.showSuccess('Your withdrawal was canceled successfully.');
                    _parent.getWithdrawList();
                    _parent.balance.getCoinBalance(_parent.selCoin);
                }
                else {
                    _parent.notify.showWarning(res.error);
                }
            }, function (err) {
                _parent.settings.loading = false;
            });
        });
    };
    WithdrawPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-withdrawal-page',
            template: __webpack_require__(/*! ./withdraw.page.html */ "./src/app/auth/withdraw/withdraw.page.html"),
            styles: [__webpack_require__(/*! ./withdraw.page.scss */ "./src/app/auth/withdraw/withdraw.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_coinApi_service__WEBPACK_IMPORTED_MODULE_2__["CoinApiService"],
            _services_accountApi_service__WEBPACK_IMPORTED_MODULE_8__["AccountApiService"],
            _services_notify_service__WEBPACK_IMPORTED_MODULE_3__["NotifyService"],
            _services_balance_service__WEBPACK_IMPORTED_MODULE_4__["BalanceService"],
            _services_validate_service__WEBPACK_IMPORTED_MODULE_5__["ValidateService"],
            _services_base58_service__WEBPACK_IMPORTED_MODULE_6__["Base58Service"],
            _services_settings_service__WEBPACK_IMPORTED_MODULE_7__["SettingsService"]])
    ], WithdrawPage);
    return WithdrawPage;
}());



/***/ })

}]);
//# sourceMappingURL=auth-auth-module.js.map