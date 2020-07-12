function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"], {
  /***/
  "./src/app/pages/home/home.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/pages/home/home.component.ts ***!
    \**********************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppPagesHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var HomeComponent = function HomeComponent() {
      _classCallCheck(this, HomeComponent);

      this.code1 = "npm install ngx-split";
      this.code2 = "import { NgxSplitModule } from 'ngx-split';\n\n@NgModule({\n  imports: [\n    NgxSplitModule.forRoot(),\n    ...\n  ],\n  ...\n})\nexport class AppModule {}";
      this.code3 = "System.config({\n  map: {\n    'ngx-split': 'node_modules/ngx-split/bundles/ngx-split.umd.js',\n    ...\n  },\n  ...\n});";
    };

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)();
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["ng-component"]],
      decls: 34,
      vars: 2,
      consts: [[1, "container"], [1, "jumbotron"], ["href", "https://www.npmjs.com/package/ngx-split"], ["src", "https://img.shields.io/npm/v/ngx-split/latest.svg?style=flat-square", "alt", "npm latest version", "height", "18"], ["href", "https://travis-ci.com/beeman/ngx-split"], ["src", "https://img.shields.io/travis/com/beeman/ngx-split/main.svg?style=flat-square&label=Cypress+E2E+tests", "alt", "Build Status", "height", "18"], [3, "innerText"], ["href", "https://stackblitz.com/fork/ngx-split", "target", "_blank"], ["href", "https://github.com/beeman/ngx-split/issues/new", "target", "_blank"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " ngx-split ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Angular UI library to split views and allow dragging to resize areas using CSS flexbox layout. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Install npm module:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "pre", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Add angular module to your app:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "pre", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Bug report:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " If you find a bug, open an issue with a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "StackBlitz");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " demo showing it. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Feature request:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " If you want to see a new feature, create an ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "issue");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, ". ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerText", ctx.code1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerText", ctx.code2);
        }
      },
      styles: ["[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n  margin: 80px 0 50px 0;\n}\n\nh1[_ngcontent-%COMP%] {\n  color: #e83e8c;\n  margin-bottom: 30px;\n}\n\nh1[_ngcontent-%COMP%]    > small[_ngcontent-%COMP%] {\n  color: #000000;\n}\n\n.jumbotron[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n\n.jumbotron[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  margin: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iZWVtYW4va2lrc3RhcnQvbmd4LXNwbGl0L2FwcHMvZGVtby9zcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsImFwcHMvZGVtby9zcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtBQ0NGOztBRENBO0VBQ0UsY0FBQTtBQ0VGOztBRENBO0VBQ0UsZ0JBQUE7QUNFRjs7QURBQTtFQUNFLFlBQUE7QUNHRiIsImZpbGUiOiJhcHBzL2RlbW8vc3JjL2FwcC9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiA4MHB4IDAgNTBweCAwO1xufVxuXG5oMSB7XG4gIGNvbG9yOiAjZTgzZThjO1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuaDEgPiBzbWFsbCB7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuXG4uanVtYm90cm9uIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi5qdW1ib3Ryb24gPiBkaXYge1xuICBtYXJnaW46IDIwcHg7XG59XG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiA4MHB4IDAgNTBweCAwO1xufVxuXG5oMSB7XG4gIGNvbG9yOiAjZTgzZThjO1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG5oMSA+IHNtYWxsIHtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG5cbi5qdW1ib3Ryb24ge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4uanVtYm90cm9uID4gZGl2IHtcbiAgbWFyZ2luOiAyMHB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/home/home.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/home/home.module.ts ***!
    \*******************************************/

  /*! exports provided: HomeModule */

  /***/
  function srcAppPagesHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeModule", function () {
      return HomeModule;
    });
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home.component */
    "./src/app/pages/home/home.component.ts");

    var HomeModule = function HomeModule() {
      _classCallCheck(this, HomeModule);
    };

    HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: HomeModule
    });
    HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function HomeModule_Factory(t) {
        return new (t || HomeModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
        path: '',
        component: _home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
      }])]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](HomeModule, {
        declarations: [_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HomeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
            path: '',
            component: _home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
          }])]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=pages-home-home-module-es5.js.map