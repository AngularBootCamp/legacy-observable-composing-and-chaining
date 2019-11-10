function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _reddit_search_reddit_search_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./reddit-search/reddit-search.component */
    "./src/app/reddit-search/reddit-search.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "reddit-search");
        }
      },
      directives: [_reddit_search_reddit_search_component__WEBPACK_IMPORTED_MODULE_1__["RedditSearchComponent"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'app-root',
        templateUrl: './app.component.html'
      }]
    }], null, null);
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _reddit_search_reddit_search_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./reddit-search/reddit-search.component */
    "./src/app/reddit-search/reddit-search.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]]]
    });
    /*@__PURE__*/

    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _reddit_search_reddit_search_component__WEBPACK_IMPORTED_MODULE_5__["RedditSearchComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]]
    });
    /*@__PURE__*/


    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
      args: [{
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _reddit_search_reddit_search_component__WEBPACK_IMPORTED_MODULE_5__["RedditSearchComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
      }]
    }], null, null);
    /***/

  },

  /***/
  "./src/app/reddit-search/reddit-image-search.service.ts":
  /*!**************************************************************!*\
    !*** ./src/app/reddit-search/reddit-image-search.service.ts ***!
    \**************************************************************/

  /*! exports provided: RedditImageSearchService */

  /***/
  function srcAppRedditSearchRedditImageSearchServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RedditImageSearchService", function () {
      return RedditImageSearchService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! lodash-es */
    "./node_modules/lodash-es/lodash.js");
    /* harmony import */


    var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/add/operator/map */
    "./node_modules/rxjs-compat/_esm2015/add/operator/map.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var RedditImageSearchService =
    /*#__PURE__*/
    function () {
      function RedditImageSearchService(http) {
        _classCallCheck(this, RedditImageSearchService);

        this.http = http;
      }

      _createClass(RedditImageSearchService, [{
        key: "search",
        value: function search(subReddit, _search) {
          var url = 'https://www.reddit.com/r/' + subReddit + '/search.json?restrict_sr=on&q=' + _search;
          return this.http.get(url).map(translateRedditResults);
        }
      }]);

      return RedditImageSearchService;
    }();

    RedditImageSearchService.ɵfac = function RedditImageSearchService_Factory(t) {
      return new (t || RedditImageSearchService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
    };

    RedditImageSearchService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: RedditImageSearchService,
      factory: function factory(t) {
        return RedditImageSearchService.ɵfac(t);
      },
      providedIn: 'root'
    });
    /*@__PURE__*/

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RedditImageSearchService, [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }], function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    }, null);

    function translateRedditResults(items) {
      // This function doesn't know anything about HTTP or Observable; it just
      // manages the messy shape of this API's data return layout.
      return Object(lodash_es__WEBPACK_IMPORTED_MODULE_1__["flatMap"])(items.data.children, function (item) {
        if (item) {
          var data = item['data'];

          if (data) {
            var thumbnail = data['thumbnail'];
            var title = data['title'];

            if (thumbnail.startsWith('http')) {
              return [{
                thumbnail: thumbnail,
                title: title
              }];
            }
          }
        }

        return [];
      });
    }
    /***/

  },

  /***/
  "./src/app/reddit-search/reddit-search.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/reddit-search/reddit-search.component.ts ***!
    \**********************************************************/

  /*! exports provided: RedditSearchComponent */

  /***/
  function srcAppRedditSearchRedditSearchComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RedditSearchComponent", function () {
      return RedditSearchComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/Observable */
    "./node_modules/rxjs-compat/_esm2015/Observable.js");
    /* harmony import */


    var rxjs_add_observable_combineLatest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/add/observable/combineLatest */
    "./node_modules/rxjs-compat/_esm2015/add/observable/combineLatest.js");
    /* harmony import */


    var rxjs_add_observable_merge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/add/observable/merge */
    "./node_modules/rxjs-compat/_esm2015/add/observable/merge.js");
    /* harmony import */


    var rxjs_add_observable_of__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/add/observable/of */
    "./node_modules/rxjs-compat/_esm2015/add/observable/of.js");
    /* harmony import */


    var rxjs_add_operator_debounceTime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/add/operator/debounceTime */
    "./node_modules/rxjs-compat/_esm2015/add/operator/debounceTime.js");
    /* harmony import */


    var rxjs_add_operator_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs/add/operator/distinctUntilChanged */
    "./node_modules/rxjs-compat/_esm2015/add/operator/distinctUntilChanged.js");
    /* harmony import */


    var rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! rxjs/add/operator/do */
    "./node_modules/rxjs-compat/_esm2015/add/operator/do.js");
    /* harmony import */


    var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! rxjs/add/operator/filter */
    "./node_modules/rxjs-compat/_esm2015/add/operator/filter.js");
    /* harmony import */


    var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! rxjs/add/operator/map */
    "./node_modules/rxjs-compat/_esm2015/add/operator/map.js");
    /* harmony import */


    var rxjs_add_operator_retry__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! rxjs/add/operator/retry */
    "./node_modules/rxjs-compat/_esm2015/add/operator/retry.js");
    /* harmony import */


    var rxjs_add_operator_startWith__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! rxjs/add/operator/startWith */
    "./node_modules/rxjs-compat/_esm2015/add/operator/startWith.js");
    /* harmony import */


    var rxjs_add_operator_switchMap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! rxjs/add/operator/switchMap */
    "./node_modules/rxjs-compat/_esm2015/add/operator/switchMap.js");
    /* harmony import */


    var _reddit_image_search_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./reddit-image-search.service */
    "./src/app/reddit-search/reddit-image-search.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js"); // tslint:disable:no-submodule-imports
    // tslint:disable:ordered-imports
    // add the various operators


    function RedditSearchComponent_div_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var post_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", post_r1.thumbnail, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", post_r1.title);
      }
    }

    var RedditSearchComponent = function RedditSearchComponent(ris) {
      _classCallCheck(this, RedditSearchComponent);

      this.subReddit = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('aww');
      this.search = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
      var validSubReddit$ = this.subReddit.valueChanges.startWith(this.subReddit.value).map(function (sr) {
        return sr.trim();
      }).distinctUntilChanged().filter(function (sr) {
        return sr !== '';
      });
      var validSearch$ = this.search.valueChanges.startWith(this.search.value).map(function (search) {
        return search.trim();
      }).distinctUntilChanged().filter(function (search) {
        return search !== '';
      });
      var combinedCriteria$ = rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].combineLatest([validSubReddit$, validSearch$]).map(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            subReddit = _ref2[0],
            search = _ref2[1];

        return {
          subReddit: subReddit,
          search: search
        };
      });
      this.results = combinedCriteria$.do(function (x) {
        return console.log('change', x);
      }).debounceTime(500).do(function (x) {
        return console.log('after debounce', x);
      }).switchMap(function (val) {
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].merge( // Initially, show no results, while waiting.
        rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].of([]), // Replace with results as they arrive, auto retry.
        ris.search(val.subReddit, val.search).retry(3));
      });
    };

    RedditSearchComponent.ɵfac = function RedditSearchComponent_Factory(t) {
      return new (t || RedditSearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_reddit_image_search_service__WEBPACK_IMPORTED_MODULE_14__["RedditImageSearchService"]));
    };

    RedditSearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RedditSearchComponent,
      selectors: [["reddit-search"]],
      decls: 14,
      vars: 5,
      consts: [[1, "three-across"], ["for", "subReddit"], ["id", "subReddit", "type", "text", "placeholder", "validate", 3, "formControl"], ["for", "search"], ["id", "search", "type", "text", 3, "formControl"], ["class", "box", 4, "ngFor", "ngForOf"], [1, "box"], [3, "src", "alt"]],
      template: function RedditSearchComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Incremental Search (via an API):");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Search reddit.com/r/");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "for search string");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, RedditSearchComponent_div_12_Template, 2, 2, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.subReddit);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.search);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 3, ctx.results));
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgForOf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_15__["AsyncPipe"]],
      styles: [".box[_ngcontent-%COMP%] {\n    float: left;\n    width: 140px;\n    height: 140px;\n    margin: 5px;\n  }\n  .box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n  }"]
    });
    /*@__PURE__*/

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RedditSearchComponent, [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'reddit-search',
        templateUrl: './reddit-search.component.html'
      }]
    }], function () {
      return [{
        type: _reddit_image_search_service__WEBPACK_IMPORTED_MODULE_14__["RedditImageSearchService"]
      }];
    }, null);
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/kcordes/projects/Ang/angular-class-material/abc/AOT-SKIP-cli/sandbox/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]); //# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map