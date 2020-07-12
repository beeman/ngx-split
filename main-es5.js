function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "../../libs/ngx-split/src/index.ts":
  /*!********************************************************************!*\
    !*** /Users/beeman/kikstart/ngx-split/libs/ngx-split/src/index.ts ***!
    \********************************************************************/

  /*! exports provided: SplitComponent, SplitAreaDirective, NgxSplitModule */

  /***/
  function libsNgxSplitSrcIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _lib_component_split_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./lib/component/split.component */
    "../../libs/ngx-split/src/lib/component/split.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SplitComponent", function () {
      return _lib_component_split_component__WEBPACK_IMPORTED_MODULE_0__["SplitComponent"];
    });
    /* harmony import */


    var _lib_directive_splitArea_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./lib/directive/splitArea.directive */
    "../../libs/ngx-split/src/lib/directive/splitArea.directive.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SplitAreaDirective", function () {
      return _lib_directive_splitArea_directive__WEBPACK_IMPORTED_MODULE_1__["SplitAreaDirective"];
    });
    /* harmony import */


    var _lib_ngx_split_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./lib/ngx-split.module */
    "../../libs/ngx-split/src/lib/ngx-split.module.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "NgxSplitModule", function () {
      return _lib_ngx_split_module__WEBPACK_IMPORTED_MODULE_2__["NgxSplitModule"];
    });
    /***/

  },

  /***/
  "../../libs/ngx-split/src/lib/component/split.component.ts":
  /*!********************************************************************************************!*\
    !*** /Users/beeman/kikstart/ngx-split/libs/ngx-split/src/lib/component/split.component.ts ***!
    \********************************************************************************************/

  /*! exports provided: SplitComponent */

  /***/
  function libsNgxSplitSrcLibComponentSplitComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SplitComponent", function () {
      return SplitComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "../../node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "../../node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../utils */
    "../../libs/ngx-split/src/lib/utils.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = ["gutterEls"];

    function SplitComponent_ng_template_1_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2, 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function SplitComponent_ng_template_1_div_0_Template_div_mousedown_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var index_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.startDragging($event, index_r1 * 2 + 1, index_r1 + 1);
        })("touchstart", function SplitComponent_ng_template_1_div_0_Template_div_touchstart_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var index_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r8.startDragging($event, index_r1 * 2 + 1, index_r1 + 1);
        })("mouseup", function SplitComponent_ng_template_1_div_0_Template_div_mouseup_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var index_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r10.clickGutter($event, index_r1 + 1);
        })("touchend", function SplitComponent_ng_template_1_div_0_Template_div_touchend_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var index_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r12.clickGutter($event, index_r1 + 1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var index_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("flex-basis", ctx_r3.gutterSize, "px")("order", index_r1 * 2 + 1);
      }
    }

    function SplitComponent_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SplitComponent_ng_template_1_div_0_Template, 3, 4, "div", 1);
      }

      if (rf & 2) {
        var last_r2 = ctx.last;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", last_r2 === false);
      }
    }

    var _c1 = ["*"];
    /**
     * ngx-split
     *
     *
     *  PERCENT MODE ([unit]="'percent'")
     *  ___________________________________________________________________________________________
     * |       A       [g1]       B       [g2]       C       [g3]       D       [g4]       E       |
     * |-------------------------------------------------------------------------------------------|
     * |       20                 30                 20                 15                 15      | <-- [size]="x"
     * |               10px               10px               10px               10px               | <-- [gutterSize]="10"
     * |calc(20% - 8px)    calc(30% - 12px)   calc(20% - 8px)    calc(15% - 6px)    calc(15% - 6px)| <-- CSS flex-basis property (with flex-grow&shrink at 0)
     * |     152px              228px              152px              114px              114px     | <-- el.getBoundingClientRect().width
     * |___________________________________________________________________________________________|
     *                                                                                 800px         <-- el.getBoundingClientRect().width
     *  flex-basis = calc( { area.size }% - { area.size/100 * nbGutter*gutterSize }px );
     *
     *
     *  PIXEL MODE ([unit]="'pixel'")
     *  ___________________________________________________________________________________________
     * |       A       [g1]       B       [g2]       C       [g3]       D       [g4]       E       |
     * |-------------------------------------------------------------------------------------------|
     * |      100                250                 *                 150                100      | <-- [size]="y"
     * |               10px               10px               10px               10px               | <-- [gutterSize]="10"
     * |   0 0 100px          0 0 250px           1 1 auto          0 0 150px          0 0 100px   | <-- CSS flex property (flex-grow/flex-shrink/flex-basis)
     * |     100px              250px              200px              150px              100px     | <-- el.getBoundingClientRect().width
     * |___________________________________________________________________________________________|
     *                                                                                 800px         <-- el.getBoundingClientRect().width
     *
     */

    var SplitComponent = /*#__PURE__*/function () {
      function SplitComponent(ngZone, elRef, cdRef, renderer) {
        _classCallCheck(this, SplitComponent);

        this.ngZone = ngZone;
        this.elRef = elRef;
        this.cdRef = cdRef;
        this.renderer = renderer;
        this._direction = 'horizontal'; ////

        this._unit = 'percent'; ////

        this._gutterSize = 11; ////

        this._gutterStep = 1; ////

        this._restrictMove = false; ////

        this._useTransition = false; ////

        this._disabled = false; ////

        this._dir = 'ltr'; ////

        this._gutterDblClickDuration = 0; ////

        this.dragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](false);
        this.dragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](false);
        this.gutterClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](false);
        this.gutterDblClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](false);
        this.dragProgressSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.dragProgress$ = this.dragProgressSubject.asObservable(); ////

        this.isDragging = false;
        this.dragListeners = [];
        this.snapshot = null;
        this.startPoint = null;
        this.endPoint = null;
        this.displayedAreas = [];
        this.hidedAreas = [];
        this._clickTimeout = null; // To force adding default class, could be override by user @Input() or not

        this.direction = this._direction;
      }

      _createClass(SplitComponent, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this = this;

          this.ngZone.runOutsideAngular(function () {
            // To avoid transition at first rendering
            setTimeout(function () {
              return _this.renderer.addClass(_this.elRef.nativeElement, 'ngx-init');
            });
          });
        }
      }, {
        key: "getNbGutters",
        value: function getNbGutters() {
          return this.displayedAreas.length === 0 ? 0 : this.displayedAreas.length - 1;
        }
      }, {
        key: "addArea",
        value: function addArea(component) {
          var newArea = {
            component: component,
            order: 0,
            size: 0,
            minSize: null,
            maxSize: null
          };

          if (component.visible === true) {
            this.displayedAreas.push(newArea);
            this.build(true, true);
          } else {
            this.hidedAreas.push(newArea);
          }
        }
      }, {
        key: "removeArea",
        value: function removeArea(component) {
          if (this.displayedAreas.some(function (a) {
            return a.component === component;
          })) {
            var area = this.displayedAreas.find(function (a) {
              return a.component === component;
            });
            this.displayedAreas.splice(this.displayedAreas.indexOf(area), 1);
            this.build(true, true);
          } else if (this.hidedAreas.some(function (a) {
            return a.component === component;
          })) {
            var _area = this.hidedAreas.find(function (a) {
              return a.component === component;
            });

            this.hidedAreas.splice(this.hidedAreas.indexOf(_area), 1);
          }
        }
      }, {
        key: "updateArea",
        value: function updateArea(component, resetOrders, resetSizes) {
          if (component.visible === true) {
            this.build(resetOrders, resetSizes);
          }
        }
      }, {
        key: "showArea",
        value: function showArea(component) {
          var _this$displayedAreas;

          var area = this.hidedAreas.find(function (a) {
            return a.component === component;
          });

          if (area === undefined) {
            return;
          }

          var areas = this.hidedAreas.splice(this.hidedAreas.indexOf(area), 1);

          (_this$displayedAreas = this.displayedAreas).push.apply(_this$displayedAreas, _toConsumableArray(areas));

          this.build(true, true);
        }
      }, {
        key: "hideArea",
        value: function hideArea(comp) {
          var _this$hidedAreas;

          var area = this.displayedAreas.find(function (a) {
            return a.component === comp;
          });

          if (area === undefined) {
            return;
          }

          var areas = this.displayedAreas.splice(this.displayedAreas.indexOf(area), 1);
          areas.forEach(function (area) {
            area.order = 0;
            area.size = 0;
          });

          (_this$hidedAreas = this.hidedAreas).push.apply(_this$hidedAreas, _toConsumableArray(areas));

          this.build(true, true);
        }
      }, {
        key: "getVisibleAreaSizes",
        value: function getVisibleAreaSizes() {
          return this.displayedAreas.map(function (a) {
            return a.size === null ? '*' : a.size;
          });
        }
      }, {
        key: "setVisibleAreaSizes",
        value: function setVisibleAreaSizes(sizes) {
          if (sizes.length !== this.displayedAreas.length) {
            return false;
          }

          var formatedSizes = sizes.map(function (s) {
            return Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getInputPositiveNumber"])(s, null);
          });
          var isValid = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["isUserSizesValid"])(this.unit, formatedSizes);

          if (isValid === false) {
            return false;
          } // @ts-ignore


          this.displayedAreas.forEach(function (area, i) {
            return area.component.size = formatedSizes[i];
          });
          this.build(false, true);
          return true;
        }
      }, {
        key: "build",
        value: function build(resetOrders, resetSizes) {
          this.stopDragging(); // ¤ AREAS ORDER

          if (resetOrders === true) {
            // If user provided 'order' for each area, use it to sort them.
            if (this.displayedAreas.every(function (a) {
              return a.component.order !== null;
            })) {
              this.displayedAreas.sort(function (a, b) {
                return a.component.order - b.component.order;
              });
            } // Then set real order with multiples of 2, numbers between will be used by gutters.


            this.displayedAreas.forEach(function (area, i) {
              area.order = i * 2;
              area.component.setStyleOrder(area.order);
            });
          } // ¤ AREAS SIZE


          if (resetSizes === true) {
            var useUserSizes = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["isUserSizesValid"])(this.unit, this.displayedAreas.map(function (a) {
              return a.component.size;
            }));

            switch (this.unit) {
              case 'percent':
                {
                  var defaultSize = 100 / this.displayedAreas.length;
                  this.displayedAreas.forEach(function (area) {
                    area.size = useUserSizes ? area.component.size : defaultSize;
                    area.minSize = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getAreaMinSize"])(area);
                    area.maxSize = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getAreaMaxSize"])(area);
                  });
                  break;
                }

              case 'pixel':
                {
                  if (useUserSizes) {
                    this.displayedAreas.forEach(function (area) {
                      area.size = area.component.size;
                      area.minSize = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getAreaMinSize"])(area);
                      area.maxSize = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getAreaMaxSize"])(area);
                    });
                  } else {
                    var wildcardSizeAreas = this.displayedAreas.filter(function (a) {
                      return a.component.size === null;
                    }); // No wildcard area > Need to select one arbitrarily > first

                    if (wildcardSizeAreas.length === 0 && this.displayedAreas.length > 0) {
                      this.displayedAreas.forEach(function (area, i) {
                        area.size = i === 0 ? null : area.component.size;
                        area.minSize = i === 0 ? null : Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getAreaMinSize"])(area);
                        area.maxSize = i === 0 ? null : Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getAreaMaxSize"])(area);
                      });
                    } // More than one wildcard area > Need to keep only one arbitrarly > first
                    else if (wildcardSizeAreas.length > 1) {
                        var alreadyGotOne = false;
                        this.displayedAreas.forEach(function (area) {
                          if (area.component.size === null) {
                            if (alreadyGotOne === false) {
                              area.size = null;
                              area.minSize = null;
                              area.maxSize = null;
                              alreadyGotOne = true;
                            } else {
                              area.size = 100;
                              area.minSize = null;
                              area.maxSize = null;
                            }
                          } else {
                            area.size = area.component.size;
                            area.minSize = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getAreaMinSize"])(area);
                            area.maxSize = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getAreaMaxSize"])(area);
                          }
                        });
                      }
                  }

                  break;
                }
            }
          }

          this.refreshStyleSizes();
          this.cdRef.markForCheck();
        }
      }, {
        key: "refreshStyleSizes",
        value: function refreshStyleSizes() {
          var _this2 = this;

          ///////////////////////////////////////////
          // PERCENT MODE
          if (this.unit === 'percent') {
            // Only one area > flex-basis 100%
            if (this.displayedAreas.length === 1) {
              this.displayedAreas[0].component.setStyleFlex(0, 0, "100%", false, false);
            } // Multiple areas > use each percent basis
            else {
                var sumGutterSize = this.getNbGutters() * this.gutterSize;
                this.displayedAreas.forEach(function (area) {
                  area.component.setStyleFlex(0, 0, "calc( ".concat(area.size, "% - ").concat(area.size / 100 * sumGutterSize, "px )"), area.minSize !== null && area.minSize === area.size ? true : false, area.maxSize !== null && area.maxSize === area.size ? true : false);
                });
              }
          } ///////////////////////////////////////////
          // PIXEL MODE
          else if (this.unit === 'pixel') {
              this.displayedAreas.forEach(function (area) {
                // Area with wildcard size
                if (area.size === null) {
                  if (_this2.displayedAreas.length === 1) {
                    area.component.setStyleFlex(1, 1, "100%", false, false);
                  } else {
                    area.component.setStyleFlex(1, 1, "auto", false, false);
                  }
                } // Area with pixel size
                else {
                    // Only one area > flex-basis 100%
                    if (_this2.displayedAreas.length === 1) {
                      area.component.setStyleFlex(0, 0, "100%", false, false);
                    } // Multiple areas > use each pixel basis
                    else {
                        area.component.setStyleFlex(0, 0, "".concat(area.size, "px"), area.minSize !== null && area.minSize === area.size ? true : false, area.maxSize !== null && area.maxSize === area.size ? true : false);
                      }
                  }
              });
            }
        }
      }, {
        key: "clickGutter",
        value: function clickGutter(event, gutterNum) {
          var _this3 = this;

          var tempPoint = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getPointFromEvent"])(event); // Be sure mouseup/touchend happened at same point as mousedown/touchstart to trigger click/dblclick

          if (this.startPoint && this.startPoint.x === tempPoint.x && this.startPoint.y === tempPoint.y) {
            // If timeout in progress and new click > clearTimeout & dblClickEvent
            if (this._clickTimeout !== null) {
              window.clearTimeout(this._clickTimeout);
              this._clickTimeout = null;
              this.notify('dblclick', gutterNum);
              this.stopDragging();
            } // Else start timeout to call clickEvent at end
            else {
                this._clickTimeout = window.setTimeout(function () {
                  _this3._clickTimeout = null;

                  _this3.notify('click', gutterNum);

                  _this3.stopDragging();
                }, this.gutterDblClickDuration);
              }
          }
        }
      }, {
        key: "startDragging",
        value: function startDragging(event, gutterOrder, gutterNum) {
          var _this4 = this;

          event.preventDefault();
          event.stopPropagation();
          this.startPoint = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getPointFromEvent"])(event);

          if (this.startPoint === null || this.disabled === true) {
            return;
          }

          this.snapshot = {
            gutterNum: gutterNum,
            lastSteppedOffset: 0,
            allAreasSizePixel: Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getElementPixelSize"])(this.elRef, this.direction) - this.getNbGutters() * this.gutterSize,
            allInvolvedAreasSizePercent: 100,
            areasBeforeGutter: [],
            areasAfterGutter: []
          };
          this.displayedAreas.forEach(function (area) {
            var areaSnapshot = {
              area: area,
              sizePixelAtStart: Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getElementPixelSize"])(area.component.elRef, _this4.direction),
              sizePercentAtStart: _this4.unit === 'percent' ? area.size : -1
            };

            if (area.order < gutterOrder) {
              if (_this4.restrictMove === true) {
                _this4.snapshot.areasBeforeGutter = [areaSnapshot];
              } else {
                _this4.snapshot.areasBeforeGutter.unshift(areaSnapshot);
              }
            } else if (area.order > gutterOrder) {
              if (_this4.restrictMove === true) {
                if (_this4.snapshot.areasAfterGutter.length === 0) _this4.snapshot.areasAfterGutter = [areaSnapshot];
              } else {
                _this4.snapshot.areasAfterGutter.push(areaSnapshot);
              }
            }
          });
          this.snapshot.allInvolvedAreasSizePercent = [].concat(_toConsumableArray(this.snapshot.areasBeforeGutter), _toConsumableArray(this.snapshot.areasAfterGutter)).reduce(function (t, a) {
            return t + a.sizePercentAtStart;
          }, 0);

          if (this.snapshot.areasBeforeGutter.length === 0 || this.snapshot.areasAfterGutter.length === 0) {
            return;
          }

          this.dragListeners.push(this.renderer.listen('document', 'mouseup', this.stopDragging.bind(this)));
          this.dragListeners.push(this.renderer.listen('document', 'touchend', this.stopDragging.bind(this)));
          this.dragListeners.push(this.renderer.listen('document', 'touchcancel', this.stopDragging.bind(this)));
          this.ngZone.runOutsideAngular(function () {
            _this4.dragListeners.push(_this4.renderer.listen('document', 'mousemove', _this4.dragEvent.bind(_this4)));

            _this4.dragListeners.push(_this4.renderer.listen('document', 'touchmove', _this4.dragEvent.bind(_this4)));
          });
          this.displayedAreas.forEach(function (area) {
            return area.component.lockEvents();
          });
          this.isDragging = true;
          this.renderer.addClass(this.elRef.nativeElement, 'ngx-dragging');
          this.renderer.addClass(this.gutterEls.toArray()[this.snapshot.gutterNum - 1].nativeElement, 'ngx-dragged');
          this.notify('start', this.snapshot.gutterNum);
        }
      }, {
        key: "dragEvent",
        value: function dragEvent(event) {
          var _this5 = this;

          event.preventDefault();
          event.stopPropagation();

          if (this._clickTimeout !== null) {
            window.clearTimeout(this._clickTimeout);
            this._clickTimeout = null;
          }

          if (this.isDragging === false) {
            return;
          }

          this.endPoint = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getPointFromEvent"])(event);

          if (this.endPoint === null) {
            return;
          } // Calculate steppedOffset


          var offset = this.direction === 'horizontal' ? this.startPoint.x - this.endPoint.x : this.startPoint.y - this.endPoint.y;

          if (this.dir === 'rtl') {
            offset = -offset;
          }

          var steppedOffset = Math.round(offset / this.gutterStep) * this.gutterStep;

          if (steppedOffset === this.snapshot.lastSteppedOffset) {
            return;
          }

          this.snapshot.lastSteppedOffset = steppedOffset; // Need to know if each gutter side areas could reacts to steppedOffset

          var areasBefore = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getGutterSideAbsorptionCapacity"])(this.unit, this.snapshot.areasBeforeGutter, -steppedOffset, this.snapshot.allAreasSizePixel);
          var areasAfter = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getGutterSideAbsorptionCapacity"])(this.unit, this.snapshot.areasAfterGutter, steppedOffset, this.snapshot.allAreasSizePixel); // Each gutter side areas can't absorb all offset

          if (areasBefore.remain !== 0 && areasAfter.remain !== 0) {
            if (Math.abs(areasBefore.remain) === Math.abs(areasAfter.remain)) {} else if (Math.abs(areasBefore.remain) > Math.abs(areasAfter.remain)) {
              areasAfter = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getGutterSideAbsorptionCapacity"])(this.unit, this.snapshot.areasAfterGutter, steppedOffset + areasBefore.remain, this.snapshot.allAreasSizePixel);
            } else {
              areasBefore = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getGutterSideAbsorptionCapacity"])(this.unit, this.snapshot.areasBeforeGutter, -(steppedOffset - areasAfter.remain), this.snapshot.allAreasSizePixel);
            }
          } // Areas before gutter can't absorbs all offset > need to recalculate sizes for areas after gutter.
          else if (areasBefore.remain !== 0) {
              areasAfter = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getGutterSideAbsorptionCapacity"])(this.unit, this.snapshot.areasAfterGutter, steppedOffset + areasBefore.remain, this.snapshot.allAreasSizePixel);
            } // Areas after gutter can't absorbs all offset > need to recalculate sizes for areas before gutter.
            else if (areasAfter.remain !== 0) {
                areasBefore = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getGutterSideAbsorptionCapacity"])(this.unit, this.snapshot.areasBeforeGutter, -(steppedOffset - areasAfter.remain), this.snapshot.allAreasSizePixel);
              }

          if (this.unit === 'percent') {
            // Hack because of browser messing up with sizes using calc(X% - Ypx) -> el.getBoundingClientRect()
            // If not there, playing with gutters makes total going down to 99.99875% then 99.99286%, 99.98986%,..
            var all = [].concat(_toConsumableArray(areasBefore.list), _toConsumableArray(areasAfter.list));
            var areaToReset = all.find(function (a) {
              return a.percentAfterAbsorption !== 0 && a.percentAfterAbsorption !== a.areaSnapshot.area.minSize && a.percentAfterAbsorption !== a.areaSnapshot.area.maxSize;
            });

            if (areaToReset) {
              areaToReset.percentAfterAbsorption = this.snapshot.allInvolvedAreasSizePercent - all.filter(function (a) {
                return a !== areaToReset;
              }).reduce(function (total, a) {
                return total + a.percentAfterAbsorption;
              }, 0);
            }
          } // Now we know areas could absorb steppedOffset, time to really update sizes


          areasBefore.list.forEach(function (item) {
            return Object(_utils__WEBPACK_IMPORTED_MODULE_3__["updateAreaSize"])(_this5.unit, item);
          });
          areasAfter.list.forEach(function (item) {
            return Object(_utils__WEBPACK_IMPORTED_MODULE_3__["updateAreaSize"])(_this5.unit, item);
          });
          this.refreshStyleSizes();
          this.notify('progress', this.snapshot.gutterNum);
        }
      }, {
        key: "stopDragging",
        value: function stopDragging(event) {
          var _this6 = this;

          if (event) {
            event.preventDefault();
            event.stopPropagation();
          }

          if (this.isDragging === false) {
            return;
          }

          this.displayedAreas.forEach(function (area) {
            return area.component.unlockEvents();
          });

          while (this.dragListeners.length > 0) {
            var fct = this.dragListeners.pop();
            if (fct) fct();
          } // Warning: Have to be before "notify('end')"
          // because "notify('end')"" can be linked to "[size]='x'" > "build()" > "stopDragging()"


          this.isDragging = false; // If moved from starting point, notify end

          if (this.endPoint && (this.startPoint.x !== this.endPoint.x || this.startPoint.y !== this.endPoint.y)) {
            this.notify('end', this.snapshot.gutterNum);
          }

          this.renderer.removeClass(this.elRef.nativeElement, 'ngx-dragging');
          this.renderer.removeClass(this.gutterEls.toArray()[this.snapshot.gutterNum - 1].nativeElement, 'ngx-dragged');
          this.snapshot = null; // Needed to let (click)="clickGutter(...)" event run and verify if mouse moved or not

          this.ngZone.runOutsideAngular(function () {
            setTimeout(function () {
              _this6.startPoint = null;
              _this6.endPoint = null;
            });
          });
        }
      }, {
        key: "notify",
        value: function notify(type, gutterNum) {
          var _this7 = this;

          var sizes = this.getVisibleAreaSizes();

          if (type === 'start') {
            this.dragStart.emit({
              gutterNum: gutterNum,
              sizes: sizes
            });
          } else if (type === 'end') {
            this.dragEnd.emit({
              gutterNum: gutterNum,
              sizes: sizes
            });
          } else if (type === 'click') {
            this.gutterClick.emit({
              gutterNum: gutterNum,
              sizes: sizes
            });
          } else if (type === 'dblclick') {
            this.gutterDblClick.emit({
              gutterNum: gutterNum,
              sizes: sizes
            });
          } else if (type === 'transitionEnd') {
            if (this.transitionEndSubscriber) {
              this.ngZone.run(function () {
                return _this7.transitionEndSubscriber.next(sizes);
              });
            }
          } else if (type === 'progress') {
            // Stay outside zone to allow users do what they want about change detection mechanism.
            this.dragProgressSubject.next({
              gutterNum: gutterNum,
              sizes: sizes
            });
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.stopDragging();
        }
      }, {
        key: "direction",
        set: function set(v) {
          this._direction = v === 'vertical' ? 'vertical' : 'horizontal';
          this.renderer.addClass(this.elRef.nativeElement, "ngx-".concat(this._direction));
          this.renderer.removeClass(this.elRef.nativeElement, "ngx-".concat(this._direction === 'vertical' ? 'horizontal' : 'vertical'));
          this.build(false, false);
        },
        get: function get() {
          return this._direction;
        }
      }, {
        key: "unit",
        set: function set(v) {
          this._unit = v === 'pixel' ? 'pixel' : 'percent';
          this.renderer.addClass(this.elRef.nativeElement, "ngx-".concat(this._unit));
          this.renderer.removeClass(this.elRef.nativeElement, "ngx-".concat(this._unit === 'pixel' ? 'percent' : 'pixel'));
          this.build(false, true);
        },
        get: function get() {
          return this._unit;
        }
      }, {
        key: "gutterSize",
        set: function set(v) {
          this._gutterSize = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getInputPositiveNumber"])(v, 11);
          this.build(false, false);
        },
        get: function get() {
          return this._gutterSize;
        }
      }, {
        key: "gutterStep",
        set: function set(v) {
          this._gutterStep = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getInputPositiveNumber"])(v, 1);
        },
        get: function get() {
          return this._gutterStep;
        }
      }, {
        key: "restrictMove",
        set: function set(v) {
          this._restrictMove = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getInputBoolean"])(v);
        },
        get: function get() {
          return this._restrictMove;
        }
      }, {
        key: "useTransition",
        set: function set(v) {
          this._useTransition = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getInputBoolean"])(v);
          if (this._useTransition) this.renderer.addClass(this.elRef.nativeElement, 'ngx-transition');else this.renderer.removeClass(this.elRef.nativeElement, 'ngx-transition');
        },
        get: function get() {
          return this._useTransition;
        }
      }, {
        key: "disabled",
        set: function set(v) {
          this._disabled = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getInputBoolean"])(v);
          if (this._disabled) this.renderer.addClass(this.elRef.nativeElement, 'ngx-disabled');else this.renderer.removeClass(this.elRef.nativeElement, 'ngx-disabled');
        },
        get: function get() {
          return this._disabled;
        }
      }, {
        key: "dir",
        set: function set(v) {
          this._dir = v === 'rtl' ? 'rtl' : 'ltr';
          this.renderer.setAttribute(this.elRef.nativeElement, 'dir', this._dir);
        },
        get: function get() {
          return this._dir;
        }
      }, {
        key: "gutterDblClickDuration",
        set: function set(v) {
          this._gutterDblClickDuration = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getInputPositiveNumber"])(v, 0);
        },
        get: function get() {
          return this._gutterDblClickDuration;
        }
      }, {
        key: "transitionEnd",
        get: function get() {
          var _this8 = this;

          return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (subscriber) {
            return _this8.transitionEndSubscriber = subscriber;
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(20));
        }
      }]);

      return SplitComponent;
    }();

    SplitComponent.ɵfac = function SplitComponent_Factory(t) {
      return new (t || SplitComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]));
    };

    SplitComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SplitComponent,
      selectors: [["ngx-split"]],
      viewQuery: function SplitComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.gutterEls = _t);
        }
      },
      inputs: {
        direction: "direction",
        unit: "unit",
        gutterSize: "gutterSize",
        gutterStep: "gutterStep",
        restrictMove: "restrictMove",
        useTransition: "useTransition",
        disabled: "disabled",
        dir: "dir",
        gutterDblClickDuration: "gutterDblClickDuration"
      },
      outputs: {
        dragStart: "dragStart",
        dragEnd: "dragEnd",
        gutterClick: "gutterClick",
        gutterDblClick: "gutterDblClick",
        transitionEnd: "transitionEnd"
      },
      exportAs: ["ngxSplit"],
      ngContentSelectors: _c1,
      decls: 2,
      vars: 1,
      consts: [["ngFor", "", 3, "ngForOf"], ["class", "ngx-split-gutter", 3, "flex-basis", "order", "mousedown", "touchstart", "mouseup", "touchend", 4, "ngIf"], [1, "ngx-split-gutter", 3, "mousedown", "touchstart", "mouseup", "touchend"], ["gutterEls", ""], [1, "ngx-split-gutter-icon"]],
      template: function SplitComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SplitComponent_ng_template_1_Template, 1, 1, "ng-template", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.displayedAreas);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
      styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n  align-items: stretch;\n  overflow: hidden;\n  width: 100%;\n  height: 100%;\n  \n  \n}\n[_nghost-%COMP%]    > .ngx-split-gutter[_ngcontent-%COMP%] {\n  flex-grow: 0;\n  flex-shrink: 0;\n  background-color: #eeeeee;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n[_nghost-%COMP%]    > .ngx-split-gutter[_ngcontent-%COMP%]    > .ngx-split-gutter-icon[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background-position: center center;\n  background-repeat: no-repeat;\n}\n[_nghost-%COMP%]     > .ngx-split-area {\n  flex-grow: 0;\n  flex-shrink: 0;\n  overflow-x: hidden;\n  overflow-y: auto;\n  \n}\n[_nghost-%COMP%]     > .ngx-split-area.ngx-hidden {\n  flex: 0 1 0 !important;\n  overflow-x: hidden;\n  overflow-y: hidden;\n}\n.ngx-horizontal[_nghost-%COMP%] {\n  flex-direction: row;\n}\n.ngx-horizontal[_nghost-%COMP%]    > .ngx-split-gutter[_ngcontent-%COMP%] {\n  flex-direction: row;\n  cursor: col-resize;\n  height: 100%;\n}\n.ngx-horizontal[_nghost-%COMP%]    > .ngx-split-gutter[_ngcontent-%COMP%]    > .ngx-split-gutter-icon[_ngcontent-%COMP%] {\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAeCAYAAADkftS9AAAAIklEQVQoU2M4c+bMfxAGAgYYmwGrIIiDjrELjpo5aiZeMwF+yNnOs5KSvgAAAABJRU5ErkJggg==\");\n}\n.ngx-horizontal[_nghost-%COMP%]     > .ngx-split-area {\n  height: 100%;\n}\n.ngx-vertical[_nghost-%COMP%] {\n  flex-direction: column;\n}\n.ngx-vertical[_nghost-%COMP%]    > .ngx-split-gutter[_ngcontent-%COMP%] {\n  flex-direction: column;\n  cursor: row-resize;\n  width: 100%;\n}\n.ngx-vertical[_nghost-%COMP%]    > .ngx-split-gutter[_ngcontent-%COMP%]   .ngx-split-gutter-icon[_ngcontent-%COMP%] {\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAFCAMAAABl/6zIAAAABlBMVEUAAADMzMzIT8AyAAAAAXRSTlMAQObYZgAAABRJREFUeAFjYGRkwIMJSeMHlBkOABP7AEGzSuPKAAAAAElFTkSuQmCC\");\n}\n.ngx-vertical[_nghost-%COMP%]     > .ngx-split-area {\n  width: 100%;\n}\n.ngx-vertical[_nghost-%COMP%]     > .ngx-split-area.ngx-hidden {\n  max-width: 0;\n}\n.ngx-disabled[_nghost-%COMP%]    > .ngx-split-gutter[_ngcontent-%COMP%] {\n  cursor: default;\n}\n.ngx-disabled[_nghost-%COMP%]    > .ngx-split-gutter[_ngcontent-%COMP%]   .ngx-split-gutter-icon[_ngcontent-%COMP%] {\n  background-image: none;\n}\n.ngx-transition.ngx-init[_nghost-%COMP%]:not(.ngx-dragging)    > .ngx-split-gutter[_ngcontent-%COMP%], .ngx-transition.ngx-init[_nghost-%COMP%]:not(.ngx-dragging)     > .ngx-split-area {\n  transition: flex-basis 0.3s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iZWVtYW4va2lrc3RhcnQvbmd4LXNwbGl0L2xpYnMvbmd4LXNwbGl0L3NyYy9saWIvY29tcG9uZW50L3NwbGl0LmNvbXBvbmVudC5zY3NzIiwibGlicy9uZ3gtc3BsaXQvc3JjL2xpYi9jb21wb25lbnQvc3BsaXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQXlFQSx1RUFBQTtFQVlBLDhGQUFBO0FDbEZGO0FEREU7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNHSjtBRERJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQ0FBQTtFQUNBLDRCQUFBO0FDR047QURDRTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUVBLDZEQUFBO0FDQUo7QURFSTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0FOO0FESUU7RUFDRSxtQkFBQTtBQ0ZKO0FESUk7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ0ZOO0FESU07RUFDRSwyS0FBQTtBQ0ZSO0FETUk7RUFDRSxZQUFBO0FDSk47QURRRTtFQUNFLHNCQUFBO0FDTko7QURRSTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDTk47QURRTTtFQUNFLCtMQUFBO0FDTlI7QURVSTtFQUNFLFdBQUE7QUNSTjtBRFVNO0VBQ0UsWUFBQTtBQ1JSO0FEZ0JJO0VBQ0UsZUFBQTtBQ2ROO0FEZ0JNO0VBQ0Usc0JBQUE7QUNkUjtBRHNCSTs7RUFFRSwyQkFBQTtBQ3BCTiIsImZpbGUiOiJsaWJzL25neC1zcGxpdC9zcmMvbGliL2NvbXBvbmVudC9zcGxpdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiBub3dyYXA7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG5cbiAgJiA+IC5uZ3gtc3BsaXQtZ3V0dGVyIHtcbiAgICBmbGV4LWdyb3c6IDA7XG4gICAgZmxleC1zaHJpbms6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAmID4gLm5neC1zcGxpdC1ndXR0ZXItaWNvbiB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIH1cbiAgfVxuXG4gIDo6bmctZGVlcCA+IC5uZ3gtc3BsaXQtYXJlYSB7XG4gICAgZmxleC1ncm93OiAwO1xuICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuXG4gICAgLyogV2hlbiA8bmd4LXNwbGl0LWFyZWEgW3Zpc2libGVdPVwiZmFsc2VcIj4gZm9yY2Ugc2l6ZSB0byAwLiAqL1xuXG4gICAgJi5uZ3gtaGlkZGVuIHtcbiAgICAgIGZsZXg6IDAgMSAwICFpbXBvcnRhbnQ7XG4gICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgICBvdmVyZmxvdy15OiBoaWRkZW47XG4gICAgfVxuICB9XG5cbiAgJi5uZ3gtaG9yaXpvbnRhbCB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcblxuICAgICYgPiAubmd4LXNwbGl0LWd1dHRlciB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgY3Vyc29yOiBjb2wtcmVzaXplO1xuICAgICAgaGVpZ2h0OiAxMDAlOyAvLyA8LSBGaXggc2FmYXJpIGJ1ZyBhYm91dCBndXR0ZXIgaGVpZ2h0IHdoZW4gZGlyZWN0aW9uIGlzIGhvcml6b250YWwuXG5cbiAgICAgICYgPiAubmd4LXNwbGl0LWd1dHRlci1pY29uIHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFVQUFBQWVDQVlBQUFEa2Z0UzlBQUFBSWtsRVFWUW9VMk00YytiTWZ4QUdBZ1lZbXdHcklJaURqckVManBvNWFpWmVNd0YreU5uT3M1S1N2Z0FBQUFCSlJVNUVya0pnZ2c9PScpO1xuICAgICAgfVxuICAgIH1cblxuICAgIDo6bmctZGVlcCA+IC5uZ3gtc3BsaXQtYXJlYSB7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgfVxuICB9XG5cbiAgJi5uZ3gtdmVydGljYWwge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAmID4gLm5neC1zcGxpdC1ndXR0ZXIge1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGN1cnNvcjogcm93LXJlc2l6ZTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAubmd4LXNwbGl0LWd1dHRlci1pY29uIHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUI0QUFBQUZDQU1BQUFCbC82eklBQUFBQmxCTVZFVUFBQURNek16SVQ4QXlBQUFBQVhSU1RsTUFRT2JZWmdBQUFCUkpSRUZVZUFGallHUmt3SU1KU2VNSGxCa09BQlA3QUVHelN1UEtBQUFBQUVsRlRrU3VRbUNDJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgOjpuZy1kZWVwID4gLm5neC1zcGxpdC1hcmVhIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAmLm5neC1oaWRkZW4ge1xuICAgICAgICBtYXgtd2lkdGg6IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyogV2hlbiBkaXNhYmxlZCByZW1vdmUgZ3V0dGVycyBiYWNrZ3JvdW5kIGltYWdlIGFuZCBzcGVjaWZpYyBjdXJzb3IuICovXG5cbiAgJi5uZ3gtZGlzYWJsZWQge1xuICAgICYgPiAubmd4LXNwbGl0LWd1dHRlciB7XG4gICAgICBjdXJzb3I6IGRlZmF1bHQ7XG5cbiAgICAgIC5uZ3gtc3BsaXQtZ3V0dGVyLWljb24ge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qIEFkZCB0cmFuc2l0aW9uIG9ubHkgd2hlbiB0cmFuc2l0aW9uIGVuYWJsZWQgKyBzcGxpdCBpbml0aWFsaXplZCArIG5vdCBjdXJyZW50bHkgZHJhZ2dpbmcuICovXG5cbiAgJi5uZ3gtdHJhbnNpdGlvbi5uZ3gtaW5pdDpub3QoLm5neC1kcmFnZ2luZykge1xuICAgICYgPiAubmd4LXNwbGl0LWd1dHRlcixcbiAgICA6Om5nLWRlZXAgPiAubmd4LXNwbGl0LWFyZWEge1xuICAgICAgdHJhbnNpdGlvbjogZmxleC1iYXNpcyAwLjNzO1xuICAgIH1cbiAgfVxufVxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgLyogV2hlbiBkaXNhYmxlZCByZW1vdmUgZ3V0dGVycyBiYWNrZ3JvdW5kIGltYWdlIGFuZCBzcGVjaWZpYyBjdXJzb3IuICovXG4gIC8qIEFkZCB0cmFuc2l0aW9uIG9ubHkgd2hlbiB0cmFuc2l0aW9uIGVuYWJsZWQgKyBzcGxpdCBpbml0aWFsaXplZCArIG5vdCBjdXJyZW50bHkgZHJhZ2dpbmcuICovXG59XG46aG9zdCA+IC5uZ3gtc3BsaXQtZ3V0dGVyIHtcbiAgZmxleC1ncm93OiAwO1xuICBmbGV4LXNocmluazogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG46aG9zdCA+IC5uZ3gtc3BsaXQtZ3V0dGVyID4gLm5neC1zcGxpdC1ndXR0ZXItaWNvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG46aG9zdCA6Om5nLWRlZXAgPiAubmd4LXNwbGl0LWFyZWEge1xuICBmbGV4LWdyb3c6IDA7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIC8qIFdoZW4gPG5neC1zcGxpdC1hcmVhIFt2aXNpYmxlXT1cImZhbHNlXCI+IGZvcmNlIHNpemUgdG8gMC4gKi9cbn1cbjpob3N0IDo6bmctZGVlcCA+IC5uZ3gtc3BsaXQtYXJlYS5uZ3gtaGlkZGVuIHtcbiAgZmxleDogMCAxIDAgIWltcG9ydGFudDtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG59XG46aG9zdC5uZ3gtaG9yaXpvbnRhbCB7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG46aG9zdC5uZ3gtaG9yaXpvbnRhbCA+IC5uZ3gtc3BsaXQtZ3V0dGVyIHtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgY3Vyc29yOiBjb2wtcmVzaXplO1xuICBoZWlnaHQ6IDEwMCU7XG59XG46aG9zdC5uZ3gtaG9yaXpvbnRhbCA+IC5uZ3gtc3BsaXQtZ3V0dGVyID4gLm5neC1zcGxpdC1ndXR0ZXItaWNvbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQVVBQUFBZUNBWUFBQURrZnRTOUFBQUFJa2xFUVZRb1UyTTRjK2JNZnhBR0FnWVltd0dySUlpRGpyRUxqcG81YWlaZU13Rit5Tm5PczVLU3ZnQUFBQUJKUlU1RXJrSmdnZz09XCIpO1xufVxuOmhvc3Qubmd4LWhvcml6b250YWwgOjpuZy1kZWVwID4gLm5neC1zcGxpdC1hcmVhIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuOmhvc3Qubmd4LXZlcnRpY2FsIHtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbjpob3N0Lm5neC12ZXJ0aWNhbCA+IC5uZ3gtc3BsaXQtZ3V0dGVyIHtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgY3Vyc29yOiByb3ctcmVzaXplO1xuICB3aWR0aDogMTAwJTtcbn1cbjpob3N0Lm5neC12ZXJ0aWNhbCA+IC5uZ3gtc3BsaXQtZ3V0dGVyIC5uZ3gtc3BsaXQtZ3V0dGVyLWljb24ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUI0QUFBQUZDQU1BQUFCbC82eklBQUFBQmxCTVZFVUFBQURNek16SVQ4QXlBQUFBQVhSU1RsTUFRT2JZWmdBQUFCUkpSRUZVZUFGallHUmt3SU1KU2VNSGxCa09BQlA3QUVHelN1UEtBQUFBQUVsRlRrU3VRbUNDXCIpO1xufVxuOmhvc3Qubmd4LXZlcnRpY2FsIDo6bmctZGVlcCA+IC5uZ3gtc3BsaXQtYXJlYSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuOmhvc3Qubmd4LXZlcnRpY2FsIDo6bmctZGVlcCA+IC5uZ3gtc3BsaXQtYXJlYS5uZ3gtaGlkZGVuIHtcbiAgbWF4LXdpZHRoOiAwO1xufVxuOmhvc3Qubmd4LWRpc2FibGVkID4gLm5neC1zcGxpdC1ndXR0ZXIge1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG46aG9zdC5uZ3gtZGlzYWJsZWQgPiAubmd4LXNwbGl0LWd1dHRlciAubmd4LXNwbGl0LWd1dHRlci1pY29uIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbn1cbjpob3N0Lm5neC10cmFuc2l0aW9uLm5neC1pbml0Om5vdCgubmd4LWRyYWdnaW5nKSA+IC5uZ3gtc3BsaXQtZ3V0dGVyLFxuOmhvc3Qubmd4LXRyYW5zaXRpb24ubmd4LWluaXQ6bm90KC5uZ3gtZHJhZ2dpbmcpIDo6bmctZGVlcCA+IC5uZ3gtc3BsaXQtYXJlYSB7XG4gIHRyYW5zaXRpb246IGZsZXgtYmFzaXMgMC4zcztcbn0iXX0= */"],
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SplitComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'ngx-split',
          exportAs: 'ngxSplit',
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          styleUrls: ["./split.component.scss"],
          template: " <ng-content></ng-content>\n    <ng-template\n      ngFor\n      [ngForOf]=\"displayedAreas\"\n      let-index=\"index\"\n      let-last=\"last\"\n    >\n      <div\n        *ngIf=\"last === false\"\n        #gutterEls\n        class=\"ngx-split-gutter\"\n        [style.flex-basis.px]=\"gutterSize\"\n        [style.order]=\"index * 2 + 1\"\n        (mousedown)=\"startDragging($event, index * 2 + 1, index + 1)\"\n        (touchstart)=\"startDragging($event, index * 2 + 1, index + 1)\"\n        (mouseup)=\"clickGutter($event, index + 1)\"\n        (touchend)=\"clickGutter($event, index + 1)\"\n      >\n        <div class=\"ngx-split-gutter-icon\"></div>\n      </div>\n    </ng-template>"
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }];
      }, {
        direction: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        unit: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        gutterSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        gutterStep: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        restrictMove: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        useTransition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        dir: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        gutterDblClickDuration: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        dragStart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        dragEnd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        gutterClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        gutterDblClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        transitionEnd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        gutterEls: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
          args: ['gutterEls']
        }]
      });
    })();
    /***/

  },

  /***/
  "../../libs/ngx-split/src/lib/directive/splitArea.directive.ts":
  /*!************************************************************************************************!*\
    !*** /Users/beeman/kikstart/ngx-split/libs/ngx-split/src/lib/directive/splitArea.directive.ts ***!
    \************************************************************************************************/

  /*! exports provided: SplitAreaDirective */

  /***/
  function libsNgxSplitSrcLibDirectiveSplitAreaDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SplitAreaDirective", function () {
      return SplitAreaDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _component_split_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../component/split.component */
    "../../libs/ngx-split/src/lib/component/split.component.ts");
    /* harmony import */


    var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../utils */
    "../../libs/ngx-split/src/lib/utils.ts");

    var SplitAreaDirective = /*#__PURE__*/function () {
      function SplitAreaDirective(ngZone, elRef, renderer, split) {
        _classCallCheck(this, SplitAreaDirective);

        this.ngZone = ngZone;
        this.elRef = elRef;
        this.renderer = renderer;
        this.split = split;
        this._order = null; ////

        this._size = null; ////

        this._minSize = null; ////

        this._maxSize = null; ////

        this._lockSize = false; ////

        this._visible = true;
        this.lockListeners = [];
        this.renderer.addClass(this.elRef.nativeElement, 'ngx-split-area');
      }

      _createClass(SplitAreaDirective, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this9 = this;

          this.split.addArea(this);
          this.ngZone.runOutsideAngular(function () {
            _this9.transitionListener = _this9.renderer.listen(_this9.elRef.nativeElement, 'transitionend', function (event) {
              // Limit only flex-basis transition to trigger the event
              if (event.propertyName === 'flex-basis') {
                _this9.split.notify('transitionEnd', -1);
              }
            });
          });
        }
      }, {
        key: "setStyleOrder",
        value: function setStyleOrder(value) {
          this.renderer.setStyle(this.elRef.nativeElement, 'order', value);
        }
      }, {
        key: "setStyleFlex",
        value: function setStyleFlex(grow, shrink, basis, isMin, isMax) {
          // Need 3 separated properties to work on IE11 (https://github.com/angular/flex-layout/issues/323)
          this.renderer.setStyle(this.elRef.nativeElement, 'flex-grow', grow);
          this.renderer.setStyle(this.elRef.nativeElement, 'flex-shrink', shrink);
          this.renderer.setStyle(this.elRef.nativeElement, 'flex-basis', basis);
          if (isMin === true) this.renderer.addClass(this.elRef.nativeElement, 'ngx-min');else this.renderer.removeClass(this.elRef.nativeElement, 'ngx-min');
          if (isMax === true) this.renderer.addClass(this.elRef.nativeElement, 'ngx-max');else this.renderer.removeClass(this.elRef.nativeElement, 'ngx-max');
        }
      }, {
        key: "lockEvents",
        value: function lockEvents() {
          var _this10 = this;

          this.ngZone.runOutsideAngular(function () {
            _this10.lockListeners.push(_this10.renderer.listen(_this10.elRef.nativeElement, 'selectstart', function (e) {
              return false;
            }));

            _this10.lockListeners.push(_this10.renderer.listen(_this10.elRef.nativeElement, 'dragstart', function (e) {
              return false;
            }));
          });
        }
      }, {
        key: "unlockEvents",
        value: function unlockEvents() {
          while (this.lockListeners.length > 0) {
            var fct = this.lockListeners.pop();
            if (fct) fct();
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.unlockEvents();

          if (this.transitionListener) {
            this.transitionListener();
          }

          this.split.removeArea(this);
        }
      }, {
        key: "order",
        set: function set(v) {
          this._order = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getInputPositiveNumber"])(v, null);
          this.split.updateArea(this, true, false);
        },
        get: function get() {
          return this._order;
        }
      }, {
        key: "size",
        set: function set(v) {
          this._size = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getInputPositiveNumber"])(v, null);
          this.split.updateArea(this, false, true);
        },
        get: function get() {
          return this._size;
        }
      }, {
        key: "minSize",
        set: function set(v) {
          this._minSize = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getInputPositiveNumber"])(v, null);
          this.split.updateArea(this, false, true);
        },
        get: function get() {
          return this._minSize;
        }
      }, {
        key: "maxSize",
        set: function set(v) {
          this._maxSize = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getInputPositiveNumber"])(v, null);
          this.split.updateArea(this, false, true);
        },
        get: function get() {
          return this._maxSize;
        }
      }, {
        key: "lockSize",
        set: function set(v) {
          this._lockSize = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getInputBoolean"])(v);
          this.split.updateArea(this, false, true);
        },
        get: function get() {
          return this._lockSize;
        }
      }, {
        key: "visible",
        set: function set(v) {
          this._visible = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getInputBoolean"])(v);

          if (this._visible) {
            this.split.showArea(this);
            this.renderer.removeClass(this.elRef.nativeElement, 'ngx-hidden');
          } else {
            this.split.hideArea(this);
            this.renderer.addClass(this.elRef.nativeElement, 'ngx-hidden');
          }
        },
        get: function get() {
          return this._visible;
        }
      }]);

      return SplitAreaDirective;
    }();

    SplitAreaDirective.ɵfac = function SplitAreaDirective_Factory(t) {
      return new (t || SplitAreaDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_component_split_component__WEBPACK_IMPORTED_MODULE_1__["SplitComponent"]));
    };

    SplitAreaDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: SplitAreaDirective,
      selectors: [["ngx-split-area"], ["", "ngx-split-area", ""]],
      inputs: {
        order: "order",
        size: "size",
        minSize: "minSize",
        maxSize: "maxSize",
        lockSize: "lockSize",
        visible: "visible"
      },
      exportAs: ["ngxSplitArea"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SplitAreaDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: 'ngx-split-area, [ngx-split-area]',
          exportAs: 'ngxSplitArea'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }, {
          type: _component_split_component__WEBPACK_IMPORTED_MODULE_1__["SplitComponent"]
        }];
      }, {
        order: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        size: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        minSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        maxSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        lockSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        visible: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "../../libs/ngx-split/src/lib/ngx-split.module.ts":
  /*!***********************************************************************************!*\
    !*** /Users/beeman/kikstart/ngx-split/libs/ngx-split/src/lib/ngx-split.module.ts ***!
    \***********************************************************************************/

  /*! exports provided: NgxSplitModule */

  /***/
  function libsNgxSplitSrcLibNgxSplitModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgxSplitModule", function () {
      return NgxSplitModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _component_split_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./component/split.component */
    "../../libs/ngx-split/src/lib/component/split.component.ts");
    /* harmony import */


    var _directive_splitArea_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./directive/splitArea.directive */
    "../../libs/ngx-split/src/lib/directive/splitArea.directive.ts");

    var NgxSplitModule = /*#__PURE__*/function () {
      function NgxSplitModule() {
        _classCallCheck(this, NgxSplitModule);
      }

      _createClass(NgxSplitModule, null, [{
        key: "forRoot",
        value: function forRoot() {
          return {
            ngModule: NgxSplitModule,
            providers: []
          };
        }
      }, {
        key: "forChild",
        value: function forChild() {
          return {
            ngModule: NgxSplitModule,
            providers: []
          };
        }
      }]);

      return NgxSplitModule;
    }();

    NgxSplitModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: NgxSplitModule
    });
    NgxSplitModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function NgxSplitModule_Factory(t) {
        return new (t || NgxSplitModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgxSplitModule, {
        declarations: [_component_split_component__WEBPACK_IMPORTED_MODULE_2__["SplitComponent"], _directive_splitArea_directive__WEBPACK_IMPORTED_MODULE_3__["SplitAreaDirective"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        exports: [_component_split_component__WEBPACK_IMPORTED_MODULE_2__["SplitComponent"], _directive_splitArea_directive__WEBPACK_IMPORTED_MODULE_3__["SplitAreaDirective"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxSplitModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          declarations: [_component_split_component__WEBPACK_IMPORTED_MODULE_2__["SplitComponent"], _directive_splitArea_directive__WEBPACK_IMPORTED_MODULE_3__["SplitAreaDirective"]],
          exports: [_component_split_component__WEBPACK_IMPORTED_MODULE_2__["SplitComponent"], _directive_splitArea_directive__WEBPACK_IMPORTED_MODULE_3__["SplitAreaDirective"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "../../libs/ngx-split/src/lib/utils.ts":
  /*!************************************************************************!*\
    !*** /Users/beeman/kikstart/ngx-split/libs/ngx-split/src/lib/utils.ts ***!
    \************************************************************************/

  /*! exports provided: getPointFromEvent, getElementPixelSize, getInputBoolean, getInputPositiveNumber, isUserSizesValid, getAreaMinSize, getAreaMaxSize, getGutterSideAbsorptionCapacity, updateAreaSize */

  /***/
  function libsNgxSplitSrcLibUtilsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getPointFromEvent", function () {
      return getPointFromEvent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getElementPixelSize", function () {
      return getElementPixelSize;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getInputBoolean", function () {
      return getInputBoolean;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getInputPositiveNumber", function () {
      return getInputPositiveNumber;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "isUserSizesValid", function () {
      return isUserSizesValid;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getAreaMinSize", function () {
      return getAreaMinSize;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getAreaMaxSize", function () {
      return getAreaMaxSize;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getGutterSideAbsorptionCapacity", function () {
      return getGutterSideAbsorptionCapacity;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "updateAreaSize", function () {
      return updateAreaSize;
    });

    function getPointFromEvent(event) {
      // TouchEvent
      if (event.changedTouches !== undefined && event.changedTouches.length > 0) {
        return {
          x: event.changedTouches[0].clientX,
          y: event.changedTouches[0].clientY
        };
      } // MouseEvent
      else if (event.clientX !== undefined && event.clientY !== undefined) {
          return {
            x: event.clientX,
            y: event.clientY
          };
        }

      return null;
    }

    function getElementPixelSize(elRef, direction) {
      var rect = elRef.nativeElement.getBoundingClientRect();
      return direction === 'horizontal' ? rect.width : rect.height;
    }

    function getInputBoolean(v) {
      return typeof v === 'boolean' ? v : v === 'false' ? false : true;
    }

    function getInputPositiveNumber(v, defaultValue) {
      if (v === null || v === undefined) return defaultValue;
      v = Number(v);
      return !isNaN(v) && v >= 0 ? v : defaultValue;
    }

    function isUserSizesValid(unit, sizes) {
      // All sizes have to be not null and total should be 100
      if (unit === 'percent') {
        var total = sizes.reduce(function (total, s) {
          return s !== null ? total + s : total;
        }, 0);
        return sizes.every(function (s) {
          return s !== null;
        }) && total > 99.9 && total < 100.1;
      } // A size at null is mandatory but only one.


      if (unit === 'pixel') {
        return sizes.filter(function (s) {
          return s === null;
        }).length === 1;
      }
    }

    function getAreaMinSize(a) {
      if (a.size === null) {
        return null;
      }

      if (a.component.lockSize === true) {
        return a.size;
      }

      if (a.component.minSize === null) {
        return null;
      }

      if (a.component.minSize > a.size) {
        return a.size;
      }

      return a.component.minSize;
    }

    function getAreaMaxSize(a) {
      if (a.size === null) {
        return null;
      }

      if (a.component.lockSize === true) {
        return a.size;
      }

      if (a.component.maxSize === null) {
        return null;
      }

      if (a.component.maxSize < a.size) {
        return a.size;
      }

      return a.component.maxSize;
    }

    function getGutterSideAbsorptionCapacity(unit, sideAreas, pixels, allAreasSizePixel) {
      return sideAreas.reduce(function (acc, area) {
        var res = getAreaAbsorptionCapacity(unit, area, acc.remain, allAreasSizePixel);
        acc.list.push(res);
        acc.remain = res.pixelRemain;
        return acc;
      }, {
        remain: pixels,
        list: []
      });
    }

    function getAreaAbsorptionCapacity(unit, areaSnapshot, pixels, allAreasSizePixel) {
      // No pain no gain
      if (pixels === 0) {
        return {
          areaSnapshot: areaSnapshot,
          pixelAbsorb: 0,
          percentAfterAbsorption: areaSnapshot.sizePercentAtStart,
          pixelRemain: 0
        };
      } // Area start at zero and need to be reduced, not possible


      if (areaSnapshot.sizePixelAtStart === 0 && pixels < 0) {
        return {
          areaSnapshot: areaSnapshot,
          pixelAbsorb: 0,
          percentAfterAbsorption: 0,
          pixelRemain: pixels
        };
      }

      if (unit === 'percent') {
        return getAreaAbsorptionCapacityPercent(areaSnapshot, pixels, allAreasSizePixel);
      }

      if (unit === 'pixel') {
        return getAreaAbsorptionCapacityPixel(areaSnapshot, pixels, allAreasSizePixel);
      }
    }

    function getAreaAbsorptionCapacityPercent(areaSnapshot, pixels, allAreasSizePixel) {
      var tempPixelSize = areaSnapshot.sizePixelAtStart + pixels;
      var tempPercentSize = tempPixelSize / allAreasSizePixel * 100; // ENLARGE AREA

      if (pixels > 0) {
        // If maxSize & newSize bigger than it > absorb to max and return remaining pixels
        if (areaSnapshot.area.maxSize !== null && tempPercentSize > areaSnapshot.area.maxSize) {
          // Use area.area.maxSize as newPercentSize and return calculate pixels remaining
          var maxSizePixel = areaSnapshot.area.maxSize / 100 * allAreasSizePixel;
          return {
            areaSnapshot: areaSnapshot,
            pixelAbsorb: maxSizePixel,
            percentAfterAbsorption: areaSnapshot.area.maxSize,
            pixelRemain: areaSnapshot.sizePixelAtStart + pixels - maxSizePixel
          };
        }

        return {
          areaSnapshot: areaSnapshot,
          pixelAbsorb: pixels,
          percentAfterAbsorption: tempPercentSize > 100 ? 100 : tempPercentSize,
          pixelRemain: 0
        };
      } // REDUCE AREA
      else if (pixels < 0) {
          // If minSize & newSize smaller than it > absorb to min and return remaining pixels
          if (areaSnapshot.area.minSize !== null && tempPercentSize < areaSnapshot.area.minSize) {
            // Use area.area.minSize as newPercentSize and return calculate pixels remaining
            var minSizePixel = areaSnapshot.area.minSize / 100 * allAreasSizePixel;
            return {
              areaSnapshot: areaSnapshot,
              pixelAbsorb: minSizePixel,
              percentAfterAbsorption: areaSnapshot.area.minSize,
              pixelRemain: areaSnapshot.sizePixelAtStart + pixels - minSizePixel
            };
          } // If reduced under zero > return remaining pixels
          else if (tempPercentSize < 0) {
              // Use 0 as newPercentSize and return calculate pixels remaining
              return {
                areaSnapshot: areaSnapshot,
                pixelAbsorb: -areaSnapshot.sizePixelAtStart,
                percentAfterAbsorption: 0,
                pixelRemain: pixels + areaSnapshot.sizePixelAtStart
              };
            }

          return {
            areaSnapshot: areaSnapshot,
            pixelAbsorb: pixels,
            percentAfterAbsorption: tempPercentSize,
            pixelRemain: 0
          };
        }
    }

    function getAreaAbsorptionCapacityPixel(areaSnapshot, pixels, containerSizePixel) {
      var tempPixelSize = areaSnapshot.sizePixelAtStart + pixels; // ENLARGE AREA

      if (pixels > 0) {
        // If maxSize & newSize bigger than it > absorb to max and return remaining pixels
        if (areaSnapshot.area.maxSize !== null && tempPixelSize > areaSnapshot.area.maxSize) {
          return {
            areaSnapshot: areaSnapshot,
            pixelAbsorb: areaSnapshot.area.maxSize - areaSnapshot.sizePixelAtStart,
            percentAfterAbsorption: -1,
            pixelRemain: tempPixelSize - areaSnapshot.area.maxSize
          };
        }

        return {
          areaSnapshot: areaSnapshot,
          pixelAbsorb: pixels,
          percentAfterAbsorption: -1,
          pixelRemain: 0
        };
      } // REDUCE AREA
      else if (pixels < 0) {
          // If minSize & newSize smaller than it > absorb to min and return remaining pixels
          if (areaSnapshot.area.minSize !== null && tempPixelSize < areaSnapshot.area.minSize) {
            return {
              areaSnapshot: areaSnapshot,
              pixelAbsorb: areaSnapshot.area.minSize + pixels - tempPixelSize,
              percentAfterAbsorption: -1,
              pixelRemain: tempPixelSize - areaSnapshot.area.minSize
            };
          } // If reduced under zero > return remaining pixels
          else if (tempPixelSize < 0) {
              return {
                areaSnapshot: areaSnapshot,
                pixelAbsorb: -areaSnapshot.sizePixelAtStart,
                percentAfterAbsorption: -1,
                pixelRemain: pixels + areaSnapshot.sizePixelAtStart
              };
            }

          return {
            areaSnapshot: areaSnapshot,
            pixelAbsorb: pixels,
            percentAfterAbsorption: -1,
            pixelRemain: 0
          };
        }
    }

    function updateAreaSize(unit, item) {
      if (unit === 'percent') {
        item.areaSnapshot.area.size = item.percentAfterAbsorption;
      } else if (unit === 'pixel') {
        // Update size except for the wildcard size area
        if (item.areaSnapshot.area.size !== null) {
          item.areaSnapshot.area.size = item.areaSnapshot.sizePixelAtStart + item.pixelAbsorb;
        }
      }
    }
    /***/

  },

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
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "../../node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _ui_components_topbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./ui/components/topbar.component */
    "./src/app/ui/components/topbar.component.ts");

    var AppComponent = function AppComponent(router) {
      _classCallCheck(this, AppComponent);

      this.router = router;
      this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (e) {
        return e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"];
      })).subscribe(function (event) {
        window.scrollTo(0, 0);
      });
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 3,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ui-topbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_ui_components_topbar_component__WEBPACK_IMPORTED_MODULE_3__["TopbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["[_nghost-%COMP%] {\n        display: block;\n        width: 100%;\n        height: 100%;\n      }\n      [_nghost-%COMP%]    > div[_ngcontent-%COMP%] {\n        padding-top: 54px;\n        width: 100%;\n        height: 100%;\n      }"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          template: "\n    <ui-topbar></ui-topbar>\n    <div>\n      <router-outlet></router-outlet>\n    </div>\n  ",
          styles: ["\n      :host {\n        display: block;\n        width: 100%;\n        height: 100%;\n      }\n      :host > div {\n        padding-top: 54px;\n        width: 100%;\n        height: 100%;\n      }\n    "]
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
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
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _app_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app.routes */
    "./src/app/app.routes.ts");
    /* harmony import */


    var _ui_ui_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./ui/ui.module */
    "./src/app/ui/ui.module.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"], _ui_ui_module__WEBPACK_IMPORTED_MODULE_7__["UiModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_6__["routes"], {
        initialNavigation: 'enabled'
      })]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"], _ui_ui_module__WEBPACK_IMPORTED_MODULE_7__["UiModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"], _ui_ui_module__WEBPACK_IMPORTED_MODULE_7__["UiModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_6__["routes"], {
            initialNavigation: 'enabled'
          })],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.routes.ts":
  /*!*******************************!*\
    !*** ./src/app/app.routes.ts ***!
    \*******************************/

  /*! exports provided: routes */

  /***/
  function srcAppAppRoutesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "routes", function () {
      return routes;
    });

    var routes = [{
      path: '',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-home-home-module */
        "pages-home-home-module").then(__webpack_require__.bind(null,
        /*! ./pages/home/home.module */
        "./src/app/pages/home/home.module.ts")).then(function (m) {
          return m.HomeModule;
        });
      }
    }, {
      path: '',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-examples-examples-module */
        "pages-examples-examples-module").then(__webpack_require__.bind(null,
        /*! ./pages/examples/examples.module */
        "./src/app/pages/examples/examples.module.ts")).then(function (m) {
          return m.ExamplesModule;
        });
      }
    }, {
      path: 'changelog',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-changelog-changelog-module */
        "pages-changelog-changelog-module").then(__webpack_require__.bind(null,
        /*! ./pages/changelog/changelog.module */
        "./src/app/pages/changelog/changelog.module.ts")).then(function (m) {
          return m.ChangelogModule;
        });
      }
    }, {
      path: 'documentation',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-documentation-documentation-module */
        "pages-documentation-documentation-module").then(__webpack_require__.bind(null,
        /*! ./pages/documentation/documentation.module */
        "./src/app/pages/documentation/documentation.module.ts")).then(function (m) {
          return m.DocumentationModule;
        });
      }
    }];
    /***/
  },

  /***/
  "./src/app/example-enum.ts":
  /*!*********************************!*\
    !*** ./src/app/example-enum.ts ***!
    \*********************************/

  /*! exports provided: ExampleEnum */

  /***/
  function srcAppExampleEnumTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExampleEnum", function () {
      return ExampleEnum;
    });

    var ExampleEnum;

    (function (ExampleEnum) {
      ExampleEnum["SIMPLE"] = "simple";
      ExampleEnum["MINMAX"] = "minmax";
      ExampleEnum["NESTED"] = "nested";
      ExampleEnum["IFRAME"] = "iframe";
      ExampleEnum["TRANSITION"] = "transition";
      ExampleEnum["SYNC"] = "sync";
      ExampleEnum["STYLE"] = "style";
      ExampleEnum["TOGGLE"] = "toggle";
      ExampleEnum["CLICK"] = "click";
      ExampleEnum["CODE"] = "code";
      ExampleEnum["GEEK"] = "geek";
      ExampleEnum["DIR"] = "dir";
      ExampleEnum["WORKSPACE"] = "workspace";
    })(ExampleEnum || (ExampleEnum = {}));
    /***/

  },

  /***/
  "./src/app/example-list.ts":
  /*!*********************************!*\
    !*** ./src/app/example-list.ts ***!
    \*********************************/

  /*! exports provided: examples */

  /***/
  function srcAppExampleListTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "examples", function () {
      return examples;
    });
    /* harmony import */


    var _example_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./example-enum */
    "./src/app/example-enum.ts");
    /* harmony import */


    var _pages_examples_component_class_access_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./pages/examples/component/class-access.component */
    "./src/app/pages/examples/component/class-access.component.ts");
    /* harmony import */


    var _pages_examples_component_custom_gutter_style_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./pages/examples/component/custom-gutter-style.component */
    "./src/app/pages/examples/component/custom-gutter-style.component.ts");
    /* harmony import */


    var _pages_examples_component_dir_rtl_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pages/examples/component/dir-rtl.component */
    "./src/app/pages/examples/component/dir-rtl.component.ts");
    /* harmony import */


    var _pages_examples_component_geek_demo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./pages/examples/component/geek-demo.component */
    "./src/app/pages/examples/component/geek-demo.component.ts");
    /* harmony import */


    var _pages_examples_component_gutter_click_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./pages/examples/component/gutter-click.component */
    "./src/app/pages/examples/component/gutter-click.component.ts");
    /* harmony import */


    var _pages_examples_component_iframe_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./pages/examples/component/iframe.component */
    "./src/app/pages/examples/component/iframe.component.ts");
    /* harmony import */


    var _pages_examples_component_min_max_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./pages/examples/component/min-max.component */
    "./src/app/pages/examples/component/min-max.component.ts");
    /* harmony import */


    var _pages_examples_component_nested_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./pages/examples/component/nested.component */
    "./src/app/pages/examples/component/nested.component.ts");
    /* harmony import */


    var _pages_examples_component_simple_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./pages/examples/component/simple.component */
    "./src/app/pages/examples/component/simple.component.ts");
    /* harmony import */


    var _pages_examples_component_sync_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./pages/examples/component/sync.component */
    "./src/app/pages/examples/component/sync.component.ts");
    /* harmony import */


    var _pages_examples_component_toggling_dom_and_visible_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./pages/examples/component/toggling-dom-and-visible.component */
    "./src/app/pages/examples/component/toggling-dom-and-visible.component.ts");
    /* harmony import */


    var _pages_examples_component_transitions_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./pages/examples/component/transitions.component */
    "./src/app/pages/examples/component/transitions.component.ts");
    /* harmony import */


    var _pages_examples_component_workspace_localstorage_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./pages/examples/component/workspace-localstorage.component */
    "./src/app/pages/examples/component/workspace-localstorage.component.ts");

    var srcUrlBase = 'https://github.com/beeman/ngx-split/blob/main/';
    var srcUrlBaseApp = "".concat(srcUrlBase, "apps/demo/src/app/pages/examples/component/");
    var examples = [{
      type: _example_enum__WEBPACK_IMPORTED_MODULE_0__["ExampleEnum"].SIMPLE,
      path: 'examples/simple-split',
      component: _pages_examples_component_simple_component__WEBPACK_IMPORTED_MODULE_9__["SimpleComponent"],
      label: 'Simple split',
      srcUrl: "".concat(srcUrlBaseApp, "simple.component.ts")
    }, {
      type: _example_enum__WEBPACK_IMPORTED_MODULE_0__["ExampleEnum"].MINMAX,
      path: 'examples/min-max-split',
      component: _pages_examples_component_min_max_component__WEBPACK_IMPORTED_MODULE_7__["MinMaxComponent"],
      label: 'Split with minSize & maxSize',
      srcUrl: "".concat(srcUrlBaseApp, "min-max.component.ts")
    }, {
      type: _example_enum__WEBPACK_IMPORTED_MODULE_0__["ExampleEnum"].NESTED,
      path: 'examples/nested-split',
      component: _pages_examples_component_nested_component__WEBPACK_IMPORTED_MODULE_8__["NestedComponent"],
      label: 'Nested splits',
      srcUrl: "".concat(srcUrlBaseApp, "nested.component.ts")
    }, {
      type: _example_enum__WEBPACK_IMPORTED_MODULE_0__["ExampleEnum"].IFRAME,
      path: 'examples/iframes',
      component: _pages_examples_component_iframe_component__WEBPACK_IMPORTED_MODULE_6__["IframeComponent"],
      label: 'Split containing iframes',
      srcUrl: "".concat(srcUrlBaseApp, "iframe.component.ts")
    }, {
      type: _example_enum__WEBPACK_IMPORTED_MODULE_0__["ExampleEnum"].TRANSITION,
      path: 'examples/split-transitons',
      component: _pages_examples_component_transitions_component__WEBPACK_IMPORTED_MODULE_12__["TransitionsComponent"],
      label: 'Split with transitions',
      srcUrl: "".concat(srcUrlBaseApp, "transitions.component.ts")
    }, {
      type: _example_enum__WEBPACK_IMPORTED_MODULE_0__["ExampleEnum"].SYNC,
      path: 'examples/sync-split',
      component: _pages_examples_component_sync_component__WEBPACK_IMPORTED_MODULE_10__["SyncComponent"],
      label: 'Split synchronized',
      srcUrl: "".concat(srcUrlBaseApp, "sync.component.ts")
    }, {
      type: _example_enum__WEBPACK_IMPORTED_MODULE_0__["ExampleEnum"].STYLE,
      path: 'examples/custom-gutter-style',
      component: _pages_examples_component_custom_gutter_style_component__WEBPACK_IMPORTED_MODULE_2__["CustomGutterStyleComponent"],
      label: 'Split with custom gutter style',
      srcUrl: "".concat(srcUrlBaseApp, "custom-gutter-style.component.ts")
    }, {
      type: _example_enum__WEBPACK_IMPORTED_MODULE_0__["ExampleEnum"].TOGGLE,
      path: 'examples/toggling-dom-and-visibility',
      component: _pages_examples_component_toggling_dom_and_visible_component__WEBPACK_IMPORTED_MODULE_11__["TogglingDomAndVisibleComponent"],
      label: 'Toggling areas using <code>[visible]</code> and <code>*ngIf</code>',
      srcUrl: "".concat(srcUrlBaseApp, "toggling-dom-and-visible.component.ts")
    }, {
      type: _example_enum__WEBPACK_IMPORTED_MODULE_0__["ExampleEnum"].CLICK,
      path: 'examples/gutter-click-roll-unroll',
      component: _pages_examples_component_gutter_click_component__WEBPACK_IMPORTED_MODULE_5__["GutterClickComponent"],
      label: 'Roll/unroll area on <code>(gutterClick)</code> event',
      srcUrl: "".concat(srcUrlBaseApp, "gutter-click.component.ts")
    }, {
      type: _example_enum__WEBPACK_IMPORTED_MODULE_0__["ExampleEnum"].CODE,
      path: 'examples/access-from-class',
      component: _pages_examples_component_class_access_component__WEBPACK_IMPORTED_MODULE_1__["ClassAccessComponent"],
      label: 'Access and interact <code>SplitComponent</code> from TS class',
      srcUrl: "".concat(srcUrlBaseApp, "class-access.component.ts")
    }, {
      type: _example_enum__WEBPACK_IMPORTED_MODULE_0__["ExampleEnum"].GEEK,
      path: 'examples/geek-demo',
      component: _pages_examples_component_geek_demo_component__WEBPACK_IMPORTED_MODULE_4__["GeekDemoComponent"],
      label: 'Geek demo (100% dynamic)',
      srcUrl: "".concat(srcUrlBaseApp, "geek-demo.component.ts")
    }, {
      type: _example_enum__WEBPACK_IMPORTED_MODULE_0__["ExampleEnum"].DIR,
      path: 'examples/dir-rtl',
      component: _pages_examples_component_dir_rtl_component__WEBPACK_IMPORTED_MODULE_3__["DirRtlComponent"],
      label: 'Split inside right to left (RTL) page',
      srcUrl: "".concat(srcUrlBaseApp, "dir-rtl.component.ts")
    }, {
      type: _example_enum__WEBPACK_IMPORTED_MODULE_0__["ExampleEnum"].WORKSPACE,
      path: 'examples/workspace-localstorage',
      component: _pages_examples_component_workspace_localstorage_component__WEBPACK_IMPORTED_MODULE_13__["WorkspaceLocalstorageComponent"],
      label: 'Fullscreen workspace saved in localStorage',
      srcUrl: "".concat(srcUrlBaseApp, "workspace-localstorage.component.ts")
    }];
    /***/
  },

  /***/
  "./src/app/pages/examples/component/AComponent.ts":
  /*!********************************************************!*\
    !*** ./src/app/pages/examples/component/AComponent.ts ***!
    \********************************************************/

  /*! exports provided: AComponent */

  /***/
  function srcAppPagesExamplesComponentAComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AComponent", function () {
      return AComponent;
    });
    /* harmony import */


    var _example_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../../../example-enum */
    "./src/app/example-enum.ts");
    /* harmony import */


    var _format_date__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../format-date */
    "./src/app/pages/examples/format-date.ts");

    var AComponent = /*#__PURE__*/function () {
      function AComponent() {
        _classCallCheck(this, AComponent);

        this.exampleEnum = _example_enum__WEBPACK_IMPORTED_MODULE_0__["ExampleEnum"];
      }

      _createClass(AComponent, [{
        key: "testChangeDetectorRun",
        value: function testChangeDetectorRun() {
          console.log("".concat(Object(_format_date__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(new Date()), " > AComponent.ts - Change detection just run!"));
          return '';
        }
      }]);

      return AComponent;
    }();
    /***/

  },

  /***/
  "./src/app/pages/examples/component/class-access.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/pages/examples/component/class-access.component.ts ***!
    \********************************************************************/

  /*! exports provided: ClassAccessComponent */

  /***/
  function srcAppPagesExamplesComponentClassAccessComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClassAccessComponent", function () {
      return ClassAccessComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ngx_split__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ngx-split */
    "../../libs/ngx-split/src/index.ts");
    /* harmony import */


    var _AComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./AComponent */
    "./src/app/pages/examples/component/AComponent.ts");

    var ClassAccessComponent = /*#__PURE__*/function (_AComponent__WEBPACK_) {
      _inherits(ClassAccessComponent, _AComponent__WEBPACK_);

      var _super = _createSuper(ClassAccessComponent);

      function ClassAccessComponent() {
        _classCallCheck(this, ClassAccessComponent);

        return _super.apply(this, arguments);
      }

      _createClass(ClassAccessComponent, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          console.log('Area Components: ', this.areasEl);
        }
      }]);

      return ClassAccessComponent;
    }(_AComponent__WEBPACK_IMPORTED_MODULE_2__["AComponent"]);

    ClassAccessComponent.ɵfac = function ClassAccessComponent_Factory(t) {
      return ɵClassAccessComponent_BaseFactory(t || ClassAccessComponent);
    };

    ClassAccessComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ClassAccessComponent,
      selectors: [["ng-component"]],
      viewQuery: function ClassAccessComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](ngx_split__WEBPACK_IMPORTED_MODULE_1__["SplitComponent"], true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](ngx_split__WEBPACK_IMPORTED_MODULE_1__["SplitAreaDirective"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.splitEl = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.areasEl = _t);
        }
      },
      hostAttrs: [1, "split-example-page"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 37,
      vars: 17,
      consts: [[1, "container"], [3, "type"], [1, "split-example"], [3, "size"], [3, "visible", "size"], [1, "btns"], [1, "btn", "btn-warning", 3, "click"], [1, "btn-group"], [1, "btn", "btn-warning", "btn-sm", 3, "click"]],
      template: function ClassAccessComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ui-example-title", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ngx-split");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ngx-split-area", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eodolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ngx-split-area", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tiam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ngx-split-area", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tiam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ngx-split-area", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tiam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClassAccessComponent_Template_button_click_19_listener() {
            return ctx.splitEl.direction = ctx.splitEl.direction === "horizontal" ? "vertical" : "horizontal";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClassAccessComponent_Template_button_click_22_listener() {
            return ctx.splitEl.disabled = !ctx.splitEl.disabled;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClassAccessComponent_Template_button_click_25_listener() {
            return ctx.splitEl.dir = ctx.splitEl.dir === "rtl" ? "ltr" : "rtl";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Gutter size: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClassAccessComponent_Template_label_click_31_listener() {
            return ctx.splitEl.gutterSize = null;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "null");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClassAccessComponent_Template_label_click_33_listener() {
            return ctx.splitEl.gutterSize = 7;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClassAccessComponent_Template_label_click_35_listener() {
            return ctx.splitEl.gutterSize = 22;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "22");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.exampleEnum.CODE);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("size", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("size", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", false)("size", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("size", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", "Toggle direction: \"" + ctx.splitEl.direction + "\"", " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", !ctx.splitEl.disabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", "splitEl.disabled: " + ctx.splitEl.disabled, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", "splitEl.dir: \"" + ctx.splitEl.dir + "\"", " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.splitEl.gutterSize === 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.splitEl.gutterSize === 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.splitEl.gutterSize === 22);
        }
      },
      styles: [".btns[_ngcontent-%COMP%] {\n        display: flex;\n        flex-wrap: wrap;\n        align-items: center;\n        justify-content: space-around;\n      }\n      .btns[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n        margin-bottom: 10px;\n      }"],
      changeDetection: 0
    });

    var ɵClassAccessComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](ClassAccessComponent);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClassAccessComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          host: {
            "class": 'split-example-page'
          },
          styles: ["\n      .btns {\n        display: flex;\n        flex-wrap: wrap;\n        align-items: center;\n        justify-content: space-around;\n      }\n      .btns > div {\n        margin-bottom: 10px;\n      }\n    "],
          template: " <div class=\"container\">\n    <ui-example-title [type]=\"exampleEnum.CODE\"></ui-example-title>\n    <div class=\"split-example\">\n      <ngx-split>\n        <ngx-split-area [size]=\"75\">\n          <p>\n            Sed ut perspiciatis unde omnis iste natus error sit voluptatem\n            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa\n            quae ab illo inventore veritatis et quasi architecto beatae vitae\n            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit\n            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores\n            eodolor sit amet, consectetur, adipisci velit, sed quia non numquam\n            eius modi tempora incidunt ut labore et dolore magnam aliquam\n            quaerat voluptatem. Ut enim ad minima veniam, quis nostrum\n            exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid\n            ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui\n            in ea voluptate velit esse quam nihil molestiae consequatur, vel\n            illum qui dolorem eum fugiat quo voluptas nulla pariatur?\n          </p>\n        </ngx-split-area>\n        <ngx-split-area [size]=\"3\">\n          <p>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n            eiusmod tiam, quis nostrud exercitation ullamco laboris nisi ut\n            aliquip ex ea commodo consequat. Duis aute irure dolor in\n            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\n            pariatur.\n          </p>\n        </ngx-split-area>\n        <ngx-split-area [visible]=\"false\" [size]=\"18\">\n          <p>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n            eiusmod tiam, quis nostrud exercitation ullamco laboris nisi ut\n            aliquip ex ea commodo consequat. Duis aute irure dolor in\n            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\n            pariatur.\n          </p>\n        </ngx-split-area>\n        <ngx-split-area [size]=\"4\">\n          <p>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n            eiusmod tiam, quis nostrud exercitation ullamco laboris nisi ut\n            aliquip ex ea commodo consequat. Duis aute irure dolor in\n            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\n            pariatur.\n          </p>\n        </ngx-split-area>\n      </ngx-split>\n    </div>\n    <br />\n    <div class=\"btns\">\n      <div>\n        <button\n          class=\"btn btn-warning\"\n          (click)=\"\n            splitEl.direction =\n              splitEl.direction === 'horizontal' ? 'vertical' : 'horizontal'\n          \"\n        >\n          {{ 'Toggle direction: \"' + splitEl.direction + '\"' }}\n        </button>\n      </div>\n      <div>\n        <button\n          class=\"btn btn-warning\"\n          [class.active]=\"!splitEl.disabled\"\n          (click)=\"splitEl.disabled = !splitEl.disabled\"\n        >\n          {{ 'splitEl.disabled: ' + splitEl.disabled }}\n        </button>\n      </div>\n      <div>\n        <button\n          class=\"btn btn-warning\"\n          (click)=\"splitEl.dir = splitEl.dir === 'rtl' ? 'ltr' : 'rtl'\"\n        >\n          {{ 'splitEl.dir: \"' + splitEl.dir + '\"' }}\n        </button>\n      </div>\n      <div>\n        <label>Gutter size: </label>\n        <div class=\"btn-group\">\n          <label\n            class=\"btn btn-warning btn-sm\"\n            (click)=\"splitEl.gutterSize = null\"\n            [class.active]=\"splitEl.gutterSize === 11\"\n            >null</label\n          >\n          <label\n            class=\"btn btn-warning btn-sm\"\n            (click)=\"splitEl.gutterSize = 7\"\n            [class.active]=\"splitEl.gutterSize === 7\"\n            >7</label\n          >\n          <label\n            class=\"btn btn-warning btn-sm\"\n            (click)=\"splitEl.gutterSize = 22\"\n            [class.active]=\"splitEl.gutterSize === 22\"\n            >22</label\n          >\n        </div>\n      </div>\n    </div>\n  </div>"
        }]
      }], null, {
        splitEl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [ngx_split__WEBPACK_IMPORTED_MODULE_1__["SplitComponent"], {
            "static": false
          }]
        }],
        areasEl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
          args: [ngx_split__WEBPACK_IMPORTED_MODULE_1__["SplitAreaDirective"]]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pages/examples/component/custom-gutter-style.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/pages/examples/component/custom-gutter-style.component.ts ***!
    \***************************************************************************/

  /*! exports provided: CustomGutterStyleComponent */

  /***/
  function srcAppPagesExamplesComponentCustomGutterStyleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomGutterStyleComponent", function () {
      return CustomGutterStyleComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _AComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./AComponent */
    "./src/app/pages/examples/component/AComponent.ts");

    var CustomGutterStyleComponent = /*#__PURE__*/function (_AComponent__WEBPACK_2) {
      _inherits(CustomGutterStyleComponent, _AComponent__WEBPACK_2);

      var _super2 = _createSuper(CustomGutterStyleComponent);

      function CustomGutterStyleComponent() {
        var _this11;

        _classCallCheck(this, CustomGutterStyleComponent);

        _this11 = _super2.apply(this, arguments);
        _this11.direction = 'horizontal';
        return _this11;
      }

      return CustomGutterStyleComponent;
    }(_AComponent__WEBPACK_IMPORTED_MODULE_1__["AComponent"]);

    CustomGutterStyleComponent.ɵfac = function CustomGutterStyleComponent_Factory(t) {
      return ɵCustomGutterStyleComponent_BaseFactory(t || CustomGutterStyleComponent);
    };

    CustomGutterStyleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CustomGutterStyleComponent,
      selectors: [["ng-component"]],
      hostAttrs: [1, "split-example-page"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 26,
      vars: 10,
      consts: [[1, "container"], [3, "type"], [1, "split-example", "ex-a"], ["gutterSize", "35", 3, "direction"], [3, "size"], [1, "split-example", "ex-b"], ["restrictMove", "true", "gutterSize", "1", 3, "direction"], [1, "btns"], [1, "btn", "btn-warning", 3, "click"]],
      template: function CustomGutterStyleComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "ui-example-title", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ngx-split", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ngx-split-area", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tiam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ngx-split-area", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eodolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ngx-split", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ngx-split-area", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ngx-split-area", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " B B B B B B B B B B B B B B B B B B B B B B B B B B B B B B B B B B B B B B B B B B B B B B B ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ngx-split-area", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " C C C C C C C C C C C C C C C C C C C C C C C C C C C C C C C C C C C C C C C C C C C C C C C ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomGutterStyleComponent_Template_button_click_24_listener() {
            return ctx.direction = ctx.direction === "horizontal" ? "vertical" : "horizontal";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.testChangeDetectorRun(), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.exampleEnum.STYLE);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("direction", ctx.direction);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("size", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("size", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("direction", ctx.direction);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("size", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("size", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("size", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", "Toggle direction: \"" + ctx.direction + "\"", " ");
        }
      },
      styles: ["[_nghost-%COMP%]   .ex-a[_ngcontent-%COMP%]   ngx-split[_ngcontent-%COMP%] {\n  overflow: inherit;\n  \n  \n}\n[_nghost-%COMP%]   .ex-a[_ngcontent-%COMP%]   ngx-split[_ngcontent-%COMP%]     .ngx-split-gutter {\n  background-color: yellow !important;\n  align-items: flex-end !important;\n  pointer-events: none;\n}\n[_nghost-%COMP%]   .ex-a[_ngcontent-%COMP%]   ngx-split[_ngcontent-%COMP%]     .ngx-split-gutter > .ngx-split-gutter-icon {\n  pointer-events: all;\n  transition: all 0.3s;\n  opacity: 0.6;\n}\n[_nghost-%COMP%]   .ex-a[_ngcontent-%COMP%]   ngx-split[_ngcontent-%COMP%]     .ngx-split-gutter > .ngx-split-gutter-icon:hover {\n  opacity: 1;\n}\n[_nghost-%COMP%]   .ex-a[_ngcontent-%COMP%]   ngx-split.ngx-horizontal[_ngcontent-%COMP%]     .ngx-split-gutter-icon {\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAjCAYAAABl/XGVAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAANkSURBVEiJrddfaJdlFAfwzztda6tdZNo/pZstWlmhSy8siiwhGfQP3IWRIGUEJRgFQXTbZRBeFBhlBv25iFD6s4zCqI0GaWXEhNK5tTCUsJGUWQtOF++zeH7vfnO/3/JcPef7nOd8z3ne5znPeWlCgi3BeHAieDoomlnfDNGy4HBwabAoGAieOReOW4Lu4IIMuyd4LdMXBceCJY36bamXAb7C2/g+eC5YgFPonLYr+DXZ3J/WtQZ9wfrgvEazejHYmsbtwa7g1eDC4OegPbNdGXwdtAXDwVvBm8Fg0DpnZliMsRT9n9iCbmzAPtybZfeNMutnMVawsSgz/QmbGsnsoeD1CrYs+DHYFuytzD0RTAWPZtiGYGcjZK3BgaC/gvcFI+nYL60EEsGTGbYq+CRYF7wQPBWcPxthV8qkq4K/FJwJNmdYWyLbnmGXBKeD74L7gpeDV86WYX+wP2jLsDuS460V26lgT6YXiWxV0tuDk/UOCCjKYz2OuzN4EL+ho2L+Oy6qXe54wYGkT1H/NOayG32Zh7/xkez4JzmN/Zl+PX7J9CsxMRfZXtwZtUG9X4fsD3yW6bfgaKZ3YfSsZKlKjEp7n2RA9h2TnMJQpt+sNtPuOcky5+uzAE5ipGIzVjCZ6V3YQXlY8DDea4RsBFdVsOHpQdriLzL9Guwqyq2lvK/HC4YEPcGHwQdR7nWNBL3BpxWsJRsvqLwOj0/XxTR3KOidnvw42BTcFoxWCYOlwaEGdmDaviMbb47yCv0HTGaRrA2+rCy+Lvi2UbJs3ZJgLOipIasYHQmuyPT+4I15kO0OtlXBo8HFFaPbg4XBAym6m+ZBdiTK56oG3BusyfTH0kcdD3YGy5slSn5ORPXFDrbnVTxhq/Ns50HUGeUDWiML8QOuzsGi9vbPR1aoc4JblIV1Y6TG5RzJGtnFr5H02g4HO2bs8zwk2BOsO5tBWyIbCi7/H0RFlP1kZyPGD6brMKN0NUjWE2Xf2fCCG1N0i+e2nrH2keD5enN1q35RRvYu7mqWDLfi84bJkgxi9TzIenGwWbIJWX/YhFyGY82SjeHaqNOzzybBSkymxqg5SaXsYJQt+fIo+/p8viNYkd6td4KJYO1s/ub8c0wVvx83KJ/8FuXF/wdncFhZmgawr+Cv2Xz9Cy1ParntgE8FAAAAAElFTkSuQmCC\") !important;\n  width: 27px !important;\n  height: 35px !important;\n  cursor: -webkit-grab;\n  cursor: grab;\n  margin-bottom: 5px;\n}\n[_nghost-%COMP%]   .ex-a[_ngcontent-%COMP%]   ngx-split.ngx-vertical[_ngcontent-%COMP%]     .ngx-split-gutter-icon {\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAdCAYAAAAgqdWEAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAOxSURBVEiJtddtzNdTGAfwz7+6y91qKpaGF0UjY8JmrIw1sdj0YFMeMzYLJWaUmac1bfQiw0hkkjErTy+whrARm0zztHmYp3mayjyFkny9+J3bfv7uf3e3/p03v3Od872u8z3Xua7rnB9tamFQmB1eDhvC7+G7sCZcHw5u11o9ETkmPBBODgeGjtBZ+qeEZWFjeCKM2Z1ExodN4eKwPBzdAtc/XB6+DbPbsfCwcEI5jqXhvfBLeCacFfrvhI2R4f1wW2jU5xotFPrhMIwt38PLd198ibexHi9hbYM/ermp4ViD1Q2ubgU6LjwafgwJH4cHw5XhxDCsN4v2QGifEuDTmic6wpJC4KewIBzSwkiPR9ELQqeH7/+1ybCoEFka9qqNd4ZTwx0lZW8Pg9tFpqzxdLilSzggbA831gATwqrC+vkwP4xuJ4naWhPD5jBIuDG8HfqGGaW/KkwJA5sURxV822pFaISPwpmNsBq/YgS2YVaDD+tgnIQ5GIXzG7y1iwQGNNhak+9Dp/BpiZcVoW8NMDjMDR+UenJuSfldbs0ZFC4K65XsWd+1UBgabi3p/UqYXC9O4YhwXbghdPxPMvPCkTV5fPhFqaCTyuBp4ZvwQji2ycDk8E54N8xpjqdekrkszKrJR4Ytwlep7o1zwp+p7o+6J4aEx8I9qarwLrfimcU1eVL4vB9+wBDcjXkNbq+B9sMjuKJRlf92tYH4syaPwzrhs+KNN5o8MrSk+fFtJNFle3mYX/qdJYlmCJ8UQjObFFaEle0mUmx/HMaFPqneQe+GDiVYE/avgSeEv8IRO2m8IxwVLgn3hyk7wB4Tfk715Fib6lV4aNfkveHzJoVnw3M9LD41LA6vht/Khr4MN4XOFnqN2ua/CHemepb8A7gmrK3JI4pXprYwODJV+V4TFtZInB36tNpA0V0YtpQC+t+3VJge3qzJ0wrrvt1gO8K6cs57hNfDi6nd9C1IDC0xuK3VJruAo4snpoc9w5Ph2hbY21JdDQPCXeWI9tiB7WHF8xtSVfTWRGpKTxV3p7hxeDeYS0tsjC1BuDHs08LeQYXs5lTPkEWtsN0pd4bVhczD3cxflao6n1fkh8KCbnBjUv2ObE91r81sFcw9Edq7kJlaGxseVoat4cLa+DvN6ZvqV2VLOcaJvSbQDaGvS0BOS3UrbyqZM74J91q4uSZfUDby+I5iqLdkJqSqyNtTPSvmhgHd4OaWzFiWqtZsLTVjh6m9W1qqMr6kBPRH4Yx22P0bNcolauCjiTYAAAAASUVORK5CYII=\") !important;\n  width: 35px !important;\n  height: 29px !important;\n  cursor: -webkit-grab;\n  cursor: grab;\n  margin-right: 5px;\n}\n[_nghost-%COMP%]   .ex-a[_ngcontent-%COMP%]   ngx-split[_ngcontent-%COMP%]     .ngx-split-gutter > .ngx-split-gutter-icon {\n  position: relative;\n  z-index: 2;\n  \n  \n  \n}\n[_nghost-%COMP%]   .ex-a[_ngcontent-%COMP%]   ngx-split[_ngcontent-%COMP%]     .ngx-split-gutter > .ngx-split-gutter-icon:before, [_nghost-%COMP%]   .ex-a[_ngcontent-%COMP%]   ngx-split[_ngcontent-%COMP%]     .ngx-split-gutter > .ngx-split-gutter-icon:after {\n  visibility: hidden;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n  filter: \"progid: DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n  opacity: 0;\n  pointer-events: none;\n}\n[_nghost-%COMP%]   .ex-a[_ngcontent-%COMP%]   ngx-split[_ngcontent-%COMP%]     .ngx-split-gutter > .ngx-split-gutter-icon:before {\n  position: absolute;\n  bottom: 110%;\n  left: 50%;\n  margin-bottom: 5px;\n  margin-left: -80px;\n  padding: 7px;\n  width: 160px;\n  border-radius: 3px;\n  background-color: rgba(51, 51, 51, 0.9);\n  color: #fff;\n  content: \"Drag me if you can!\";\n  text-align: center;\n  font-size: 14px;\n  line-height: 1.2;\n}\n[_nghost-%COMP%]   .ex-a[_ngcontent-%COMP%]   ngx-split[_ngcontent-%COMP%]     .ngx-split-gutter > .ngx-split-gutter-icon:after {\n  position: absolute;\n  bottom: 110%;\n  left: 50%;\n  margin-left: -5px;\n  width: 0;\n  border-top: 5px solid rgba(51, 51, 51, 0.9);\n  border-right: 5px solid transparent;\n  border-left: 5px solid transparent;\n  content: \" \";\n  font-size: 0;\n  line-height: 0;\n}\n[_nghost-%COMP%]   .ex-a[_ngcontent-%COMP%]   ngx-split[_ngcontent-%COMP%]     .ngx-split-gutter.ngx-dragged > .ngx-split-gutter-icon, [_nghost-%COMP%]   .ex-a[_ngcontent-%COMP%]   ngx-split[_ngcontent-%COMP%]     .ngx-split-gutter > .ngx-split-gutter-icon:hover {\n  opacity: 1;\n}\n[_nghost-%COMP%]   .ex-a[_ngcontent-%COMP%]   ngx-split[_ngcontent-%COMP%]     .ngx-split-gutter.ngx-dragged > .ngx-split-gutter-icon:before, [_nghost-%COMP%]   .ex-a[_ngcontent-%COMP%]   ngx-split[_ngcontent-%COMP%]     .ngx-split-gutter.ngx-dragged > .ngx-split-gutter-icon:after, [_nghost-%COMP%]   .ex-a[_ngcontent-%COMP%]   ngx-split[_ngcontent-%COMP%]     .ngx-split-gutter > .ngx-split-gutter-icon:hover:before, [_nghost-%COMP%]   .ex-a[_ngcontent-%COMP%]   ngx-split[_ngcontent-%COMP%]     .ngx-split-gutter > .ngx-split-gutter-icon:hover:after {\n  visibility: visible;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)\";\n  filter: \"progid: DXImageTransform.Microsoft.Alpha(Opacity=100)\";\n  opacity: 1;\n}\n[_nghost-%COMP%]   .ex-b[_ngcontent-%COMP%]   ngx-split[_ngcontent-%COMP%]   .ngx-split-area[_ngcontent-%COMP%] {\n  background-color: lightgrey;\n}\n[_nghost-%COMP%]   .ex-b[_ngcontent-%COMP%]   ngx-split[_ngcontent-%COMP%]   .ngx-split-area[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  padding: 5px;\n}\n[_nghost-%COMP%]   .ex-b[_ngcontent-%COMP%]   ngx-split[_ngcontent-%COMP%]     .ngx-split-gutter {\n  background-color: grey !important;\n  position: relative;\n}\n[_nghost-%COMP%]   .ex-b[_ngcontent-%COMP%]   ngx-split[_ngcontent-%COMP%]     .ngx-split-gutter-icon {\n  background-image: none !important;\n  background-color: black;\n  transition: opacity 0.3s;\n  opacity: 0;\n  position: absolute;\n}\n[_nghost-%COMP%]   .ex-b[_ngcontent-%COMP%]   ngx-split[_ngcontent-%COMP%]     .ngx-split-gutter.ngx-dragged .ngx-split-gutter-icon, [_nghost-%COMP%]   .ex-b[_ngcontent-%COMP%]   ngx-split[_ngcontent-%COMP%]     .ngx-split-gutter-icon:hover {\n  opacity: 0.1;\n}\n[_nghost-%COMP%]   .ex-b[_ngcontent-%COMP%]   ngx-split.ngx-horizontal[_ngcontent-%COMP%]     .ngx-split-gutter-icon {\n  width: 17px !important;\n  left: -8px;\n  right: 8px;\n}\n[_nghost-%COMP%]   .ex-b[_ngcontent-%COMP%]   ngx-split.ngx-vertical[_ngcontent-%COMP%]     .ngx-split-gutter-icon {\n  height: 17px !important;\n  top: -8px;\n  bottom: 8px;\n}\n[_nghost-%COMP%]   .btns[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iZWVtYW4va2lrc3RhcnQvbmd4LXNwbGl0L2FwcHMvZGVtby9zcmMvYXBwL3BhZ2VzL2V4YW1wbGVzL2NvbXBvbmVudC9jdXN0b20tZ3V0dGVyLXN0eWxlLmNvbXBvbmVudC5zY3NzIiwiYXBwcy9kZW1vL3NyYy9hcHAvcGFnZXMvZXhhbXBsZXMvY29tcG9uZW50L2N1c3RvbS1ndXR0ZXItc3R5bGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxpQkFBQTtFQWtDQSx5RUFBQTtFQWtEQSxrQ0FBQTtBQ2xGSjtBREFJO0VBQ0UsbUNBQUE7RUFDQSxnQ0FBQTtFQUNBLG9CQUFBO0FDRU47QURBTTtFQUNFLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0FDRVI7QURBUTtFQUNFLFVBQUE7QUNFVjtBREdJO0VBQ0UsODJDQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0VBQUEsWUFBQTtFQUNBLGtCQUFBO0FDRE47QURJSTtFQUNFLHM5Q0FBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtFQUFBLFlBQUE7RUFDQSxpQkFBQTtBQ0ZOO0FET0k7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFFQSx3Q0FBQTtFQVVBLHVDQUFBO0VBa0JBLDREQUFBO0FDaENOO0FES007RUFFRSxrQkFBQTtFQUNBLGdFQUFBO0VBQ0EsNkRBQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7QUNKUjtBRFFNO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUNBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ05SO0FEVU07RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxRQUFBO0VBQ0EsMkNBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FDUlI7QURhSTs7RUFFRSxVQUFBO0FDWE47QURhTTs7O0VBRUUsbUJBQUE7RUFDQSxrRUFBQTtFQUNBLCtEQUFBO0VBQ0EsVUFBQTtBQ1ZSO0FEZ0JJO0VBQ0UsMkJBQUE7QUNkTjtBRGdCTTtFQUNFLFlBQUE7QUNkUjtBRGtCSTtFQUNFLGlDQUFBO0VBQ0Esa0JBQUE7QUNoQk47QURtQkk7RUFDRSxpQ0FBQTtFQUNBLHVCQUFBO0VBQ0Esd0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUNqQk47QURvQkk7O0VBRUUsWUFBQTtBQ2xCTjtBRHNCTTtFQUNFLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7QUNwQlI7QUR3Qk07RUFDRSx1QkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FDdEJSO0FEMkJFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDekJKIiwiZmlsZSI6ImFwcHMvZGVtby9zcmMvYXBwL3BhZ2VzL2V4YW1wbGVzL2NvbXBvbmVudC9jdXN0b20tZ3V0dGVyLXN0eWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAuZXgtYSBuZ3gtc3BsaXQge1xuICAgIG92ZXJmbG93OiBpbmhlcml0O1xuXG4gICAgOjpuZy1kZWVwIC5uZ3gtc3BsaXQtZ3V0dGVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdyAhaW1wb3J0YW50O1xuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kICFpbXBvcnRhbnQ7XG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcblxuICAgICAgJiA+IC5uZ3gtc3BsaXQtZ3V0dGVyLWljb24ge1xuICAgICAgICBwb2ludGVyLWV2ZW50czogYWxsO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICAgICAgb3BhY2l0eTogMC42O1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLm5neC1ob3Jpem9udGFsIDo6bmctZGVlcCAubmd4LXNwbGl0LWd1dHRlci1pY29uIHtcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCc0FBQUFqQ0FZQUFBQmwvWEdWQUFBQUJITkNTVlFJQ0FnSWZBaGtpQUFBQUFsd1NGbHpBQUFPeEFBQURzUUJsU3NPR3dBQUFCbDBSVmgwVTI5bWRIZGhjbVVBZDNkM0xtbHVhM05qWVhCbExtOXlaNXZ1UEJvQUFBTmtTVVJCVkVpSnJkZGZhSmRsRkFmd3p6dGRhNnRkWk5vL3Bac3RXbG1oU3k4c2lpd2hHZlFQM0lXUklHVUVKUmdGUVhUYlpSQmVGQmhsQnYyNWlGRDZzNHpDcUkwR2FXWEVoTks1dFRDVXNKR1VXUXRPRisremVIN3Zmbk8vMy9KY1BlZjduT2Q4ejNuZTV6blBlV2xDZ2kzQmVIQWllRG9vbWxuZkROR3k0SEJ3YWJBb0dBaWVPUmVPVzRMdTRJSU11eWQ0TGRNWEJjZUNKWTM2YmFtWEFiN0MyL2crZUM1WWdGUG9uTFlyK0RYWjNKL1d0UVo5d2ZyZ3ZFYXplakhZbXNidHdhN2cxZURDNE9lZ1BiTmRHWHdkdEFYRHdWdkJtOEZnMERwblpsaU1zUlQ5bjlpQ2JtekFQdHliWmZlTk11dG5NVmF3c1Nnei9RbWJHc25zb2VEMUNyWXMrREhZRnV5dHpEMFJUQVdQWnRpR1lHY2paSzNCZ2FDL2d2Y0ZJK25ZTDYwRUVzR1RHYllxK0NSWUY3d1FQQldjUHh0aFY4cWtxNEsvRkp3Sk5tZFlXeUxibm1HWEJLZUQ3NEw3Z3BlRFY4NldZWCt3UDJqTHNEdVM0NjBWMjZsZ1Q2WVhpV3hWMHR1RGsvVU9DQ2pLWXoyT3V6TjRFTCtobzJMK095NnFYZTU0d1lHa1QxSC9OT2F5RzMyWmg3L3hrZXo0SnptTi9abCtQWDdKOUNzeE1SZlpYdHdadFVHOVg0ZnNEM3lXNmJmZ2FLWjNZZlNzWktsS2pFcDduMlJBOWgyVG5NSlFwdCtzTnRQdU9ja3k1K3V6QUU1aXBHSXpWakNaNlYzWVFYbFk4RERlYTRSc0JGZFZzT0hwUWRyaUx6TDlHdXdxeXEybHZLL0hDNFlFUGNHSHdRZFI3bldOQkwzQnB4V3NKUnN2cUx3T2owL1h4VFIzS09pZG52dzQyQlRjRm94V0NZT2x3YUVHZG1EYXZpTWJiNDd5Q3YwSFRHYVJyQTIrckN5K0x2aTJVYkpzM1pKZ0xPaXBJYXNZSFFtdXlQVCs0STE1a08wT3RsWEJvOEhGRmFQYmc0WEJBeW02bStaQmRpVEs1Nm9HM0J1c3lmVEgwa2NkRDNZR3k1c2xTbjVPUlBYRkRyYm5WVHhocS9OczUwSFVHZVVEV2lNTDhRT3V6c0dpOXZiUFIxYW9jNEpibElWMVk2VEc1UnpKR3RuRnI1SDAyZzRITzJiczh6d2syQk9zTzV0Qld5SWJDaTcvSDBSRmxQMWtaeVBHRDZick1LTjBOVWpXRTJYZjJmQ0NHMU4waStlMm5ySDJrZUQ1ZW5OMXEzNVJSdll1N21xV0RMZmk4NGJKa2d4aTlUekllbkd3V2JJSldYL1loRnlHWTgyU2plSGFxTk96enliQlNreW14cWc1U2FYc1lKUXQrZklvKy9wOHZpTllrZDZ0ZDRLSllPMXMvdWI4YzB3VnZ4ODNLSi84RnVYRi93ZG5jRmhabWdhd3IrQ3YyWHo5Q3kxUGFybnRnRThGQUFBQUFFbEZUa1N1UW1DQycpICFpbXBvcnRhbnQ7XG4gICAgICB3aWR0aDogMjdweCAhaW1wb3J0YW50O1xuICAgICAgaGVpZ2h0OiAzNXB4ICFpbXBvcnRhbnQ7XG4gICAgICBjdXJzb3I6IGdyYWI7XG4gICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgfVxuXG4gICAgJi5uZ3gtdmVydGljYWwgOjpuZy1kZWVwIC5uZ3gtc3BsaXQtZ3V0dGVyLWljb24ge1xuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUNNQUFBQWRDQVlBQUFBZ3FkV0VBQUFBQkhOQ1NWUUlDQWdJZkFoa2lBQUFBQWx3U0ZsekFBQU94QUFBRHNRQmxTc09Hd0FBQUJsMFJWaDBVMjltZEhkaGNtVUFkM2QzTG1sdWEzTmpZWEJsTG05eVo1dnVQQm9BQUFPeFNVUkJWRWlKdGRkdHpOZFRHQWZ3ejcrNnk5MXFLcGFHRjBValk4Sm1ySXcxc2RqMFlGTWVNellMSldhVW1hYzFiZlFpdzBoa2tqRXJUeSt3aHJBUm0wenp0SG1ZcDNtYXlqeUZrbnk5K0ozYmZ2N3VmM2UzL3AwM3YzT2Q4NzJ1OHozWHVhN3JuQjl0YW1GUW1CMWVEaHZDNytHN3NDWmNIdzV1MTFvOUVUa21QQkJPRGdlR2p0QlorcWVFWldGamVDS00yWjFFeG9kTjRlS3dQQnpkQXRjL1hCNitEYlBic2ZDd2NFSTVqcVhodmZCTGVDYWNGZnJ2aEkyUjRmMXdXMmpVNXhvdEZQcmhNSXd0MzhQTGQxOThpYmV4SGk5aGJZTS9lcm1wNFZpRDFRMnViZ1U2TGp3YWZnd0pINGNIdzVYaHhEQ3NONHYyUUdpZkV1RFRtaWM2d3BKQzRLZXdJQnpTd2tpUFI5RUxRcWVINy8rMXliQ29FRmthOXFxTmQ0WlR3eDBsWlc4UGc5dEZwcXp4ZExpbFN6Z2diQTgzMWdBVHdxckMrdmt3UDR4dUo0bmFXaFBENWpCSXVERzhIZnFHR2FXL0trd0pBNXNVUnhWODIycEZhSVNQd3BtTnNCcS9ZZ1MyWVZhREQrdGduSVE1R0lYekc3eTFpd1FHTk5oYWsrOURwL0JwaVpjVm9XOE5NRGpNRFIrVWVuSnVTZmxkYnMwWkZDNEs2NVhzV2QrMVVCZ2FiaTNwL1VxWVhDOU80WWh3WGJnaGRQeFBNdlBDa1RWNWZQaEZxYUNUeXVCcDRadndRamkyeWNEazhFNTROOHhwanFkZWtya3N6S3JKUjRZdHdsZXA3bzF6d3ArcDdvKzZKNGFFeDhJOXFhcndMcmZpbWNVMWVWTDR2Qjkrd0JEY2pYa05icStCOXNNanVLSlJsZjkydFlINHN5YVB3enJocytLTk41bzhNclNrK2ZGdEpORmxlM21ZWC9xZEpZbG1DSjhVUWpPYkZGYUVsZTBtVW14L0hNYUZQcW5lUWUrR0RpVllFL2F2Z1NlRXY4SVJPMm04SXh3VkxnbjNoeWs3d0I0VGZrNzE1RmliNmxWNGFOZmt2ZUh6Sm9WbnczTTlMRDQxTEE2dmh0L0tocjRNTjRYT0ZucU4ydWEvQ0hlbWVwYjhBN2dtckszSkk0cFhwcll3T0RKVitWNFRGdFpJbkIzNnROcEEwVjBZdHBRQyt0KzNWSmdlM3F6SjB3cnJ2dDFnTzhLNmNzNTdoTmZEaTZuZDlDMUlEQzB4dUszVkpydUFvNHNucG9jOXc1UGgyaGJZMjFKZERRUENYZVdJOXRpQjdXSEY4eHRTVmZUV1JHcEtUeFYzcDdoeGVEZVlTMHRzakMxQnVESHMwOExlUVlYczVsVFBrRVd0c04wcGQ0YlZoY3pEM2N4ZmxhbzZuMWZraDhLQ2JuQmpVdjJPYkU5MXI4MXNGY3c5RWRxN2tKbGFHeHNlVm9hdDRjTGErRHZONlp2cVYyVkxPY2FKdlNiUURhR3ZTMEJPUzNVcmJ5cVpNNzRKOTFxNHVTWmZVRGJ5K0k1aXFMZGtKcVNxeU50VFBTdm1oZ0hkNE9hV3pGaVdxdFpzTFRWamg2bTlXMXFxTXI2a0JQUkg0WXgyMlAwYk5jb2xhdUNqaVRZQUFBQUFTVVZPUks1Q1lJST0nKSAhaW1wb3J0YW50O1xuICAgICAgd2lkdGg6IDM1cHggIWltcG9ydGFudDtcbiAgICAgIGhlaWdodDogMjlweCAhaW1wb3J0YW50O1xuICAgICAgY3Vyc29yOiBncmFiO1xuICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgfVxuXG4gICAgLyogQ29kZSBieSBDaHJpcyBCcmFjY28gKGh0dHBzOi8vY2hyaXNicmFjY28uY29tL2Etc2ltcGxlLWNzcy10b29sdGlwLykgKi9cblxuICAgIDo6bmctZGVlcCAubmd4LXNwbGl0LWd1dHRlciA+IC5uZ3gtc3BsaXQtZ3V0dGVyLWljb24ge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgei1pbmRleDogMjtcblxuICAgICAgLyogSGlkZSB0aGUgdG9vbHRpcCBjb250ZW50IGJ5IGRlZmF1bHQgKi9cbiAgICAgICY6YmVmb3JlLFxuICAgICAgJjphZnRlciB7XG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgICAgLW1zLWZpbHRlcjogJ3Byb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5BbHBoYShPcGFjaXR5PTApJztcbiAgICAgICAgZmlsdGVyOiAncHJvZ2lkOiBEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5BbHBoYShPcGFjaXR5PTApJztcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIC8qIFBvc2l0aW9uIHRvb2x0aXAgYWJvdmUgdGhlIGVsZW1lbnQgKi9cbiAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBib3R0b206IDExMCU7XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogLTgwcHg7XG4gICAgICAgIHBhZGRpbmc6IDdweDtcbiAgICAgICAgd2lkdGg6IDE2MHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGhzbGEoMCwgMCUsIDIwJSwgMC45KTtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIGNvbnRlbnQ6ICdEcmFnIG1lIGlmIHlvdSBjYW4hJztcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XG4gICAgICB9XG5cbiAgICAgIC8qIFRyaWFuZ2xlIGhhY2sgdG8gbWFrZSB0b29sdGlwIGxvb2sgbGlrZSBhIHNwZWVjaCBidWJibGUgKi9cbiAgICAgICY6YWZ0ZXIge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJvdHRvbTogMTEwJTtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICBtYXJnaW4tbGVmdDogLTVweDtcbiAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgIGJvcmRlci10b3A6IDVweCBzb2xpZCBoc2xhKDAsIDAlLCAyMCUsIDAuOSk7XG4gICAgICAgIGJvcmRlci1yaWdodDogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICBjb250ZW50OiAnICc7XG4gICAgICAgIGZvbnQtc2l6ZTogMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyogU2hvdyB0b29sdGlwIGNvbnRlbnQgb24gaG92ZXIgKi9cbiAgICA6Om5nLWRlZXAgLm5neC1zcGxpdC1ndXR0ZXIubmd4LWRyYWdnZWQgPiAubmd4LXNwbGl0LWd1dHRlci1pY29uLFxuICAgIDo6bmctZGVlcCAubmd4LXNwbGl0LWd1dHRlciA+IC5uZ3gtc3BsaXQtZ3V0dGVyLWljb246aG92ZXIge1xuICAgICAgb3BhY2l0eTogMTtcblxuICAgICAgJjpiZWZvcmUsXG4gICAgICAmOmFmdGVyIHtcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICAgICAgLW1zLWZpbHRlcjogJ3Byb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5BbHBoYShPcGFjaXR5PTEwMCknO1xuICAgICAgICBmaWx0ZXI6ICdwcm9naWQ6IERYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkFscGhhKE9wYWNpdHk9MTAwKSc7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmV4LWIgbmd4LXNwbGl0IHtcbiAgICAubmd4LXNwbGl0LWFyZWEge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xuXG4gICAgICAmID4gcCB7XG4gICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICA6Om5nLWRlZXAgLm5neC1zcGxpdC1ndXR0ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleSAhaW1wb3J0YW50O1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIH1cblxuICAgIDo6bmctZGVlcCAubmd4LXNwbGl0LWd1dHRlci1pY29uIHtcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB9XG5cbiAgICA6Om5nLWRlZXAgLm5neC1zcGxpdC1ndXR0ZXIubmd4LWRyYWdnZWQgLm5neC1zcGxpdC1ndXR0ZXItaWNvbixcbiAgICA6Om5nLWRlZXAgLm5neC1zcGxpdC1ndXR0ZXItaWNvbjpob3ZlciB7XG4gICAgICBvcGFjaXR5OiAwLjE7XG4gICAgfVxuXG4gICAgJi5uZ3gtaG9yaXpvbnRhbCB7XG4gICAgICA6Om5nLWRlZXAgLm5neC1zcGxpdC1ndXR0ZXItaWNvbiB7XG4gICAgICAgIHdpZHRoOiAxN3B4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGxlZnQ6IC04cHg7XG4gICAgICAgIHJpZ2h0OiA4cHg7XG4gICAgICB9XG4gICAgfVxuICAgICYubmd4LXZlcnRpY2FsIHtcbiAgICAgIDo6bmctZGVlcCAubmd4LXNwbGl0LWd1dHRlci1pY29uIHtcbiAgICAgICAgaGVpZ2h0OiAxN3B4ICFpbXBvcnRhbnQ7XG4gICAgICAgIHRvcDogLThweDtcbiAgICAgICAgYm90dG9tOiA4cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmJ0bnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gIH1cbn1cbiIsIjpob3N0IC5leC1hIG5neC1zcGxpdCB7XG4gIG92ZXJmbG93OiBpbmhlcml0O1xuICAvKiBDb2RlIGJ5IENocmlzIEJyYWNjbyAoaHR0cHM6Ly9jaHJpc2JyYWNjby5jb20vYS1zaW1wbGUtY3NzLXRvb2x0aXAvKSAqL1xuICAvKiBTaG93IHRvb2x0aXAgY29udGVudCBvbiBob3ZlciAqL1xufVxuOmhvc3QgLmV4LWEgbmd4LXNwbGl0IDo6bmctZGVlcCAubmd4LXNwbGl0LWd1dHRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHllbGxvdyAhaW1wb3J0YW50O1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQgIWltcG9ydGFudDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG46aG9zdCAuZXgtYSBuZ3gtc3BsaXQgOjpuZy1kZWVwIC5uZ3gtc3BsaXQtZ3V0dGVyID4gLm5neC1zcGxpdC1ndXR0ZXItaWNvbiB7XG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICBvcGFjaXR5OiAwLjY7XG59XG46aG9zdCAuZXgtYSBuZ3gtc3BsaXQgOjpuZy1kZWVwIC5uZ3gtc3BsaXQtZ3V0dGVyID4gLm5neC1zcGxpdC1ndXR0ZXItaWNvbjpob3ZlciB7XG4gIG9wYWNpdHk6IDE7XG59XG46aG9zdCAuZXgtYSBuZ3gtc3BsaXQubmd4LWhvcml6b250YWwgOjpuZy1kZWVwIC5uZ3gtc3BsaXQtZ3V0dGVyLWljb24ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJzQUFBQWpDQVlBQUFCbC9YR1ZBQUFBQkhOQ1NWUUlDQWdJZkFoa2lBQUFBQWx3U0ZsekFBQU94QUFBRHNRQmxTc09Hd0FBQUJsMFJWaDBVMjltZEhkaGNtVUFkM2QzTG1sdWEzTmpZWEJsTG05eVo1dnVQQm9BQUFOa1NVUkJWRWlKcmRkZmFKZGxGQWZ3enp0ZGE2dGRaTm8vcFpzdFdsbWhTeThzaWl3aEdmUVAzSVdSSUdVRUpSZ0ZRWFRiWlJCZUZCaGxCdjI1aUZENnM0ekNxSTBHYVdYRWhOSzV0VENVc0pHVVdRdE9GKyt6ZUg3dmZuTy8zL0pjUGVmN25PZDh6M25lNXpuUGVXbENnaTNCZUhBaWVEb29tbG5mRE5HeTRIQndhYkFvR0FpZU9SZU9XNEx1NElJTXV5ZDRMZE1YQmNlQ0pZMzZiYW1YQWI3QzIvZytlQzVZZ0ZQb25MWXIrRFhaM0ovV3RRWjl3ZnJndkVhemVqSFltc2J0d2E3ZzFlREM0T2VnUGJOZEdYd2R0QVhEd1Z2Qm04RmcwRHBuWmxpTXNSVDluOWlDYm16QVB0eWJaZmVOTXV0bk1WYXdzU2d6L1FtYkdzbnNvZUQxQ3JZcytESFlGdXl0ekQwUlRBV1BadGlHWUdjalpLM0JnYUMvZ3ZjRkkrbllMNjBFRXNHVEdiWXErQ1JZRjd3UVBCV2NQeHRoVjhxa3E0Sy9GSndKTm1kWVd5TGJubUdYQktlRDc0TDdncGVEVjg2V1lYK3dQMmpMc0R1UzQ2MFYyNmxnVDZZWGlXeFYwdHVEay9VT0NDaktZejJPdXpONEVMK2hvMkwrT3k2cVhlNTR3WUdrVDFIL05PYXlHMzJaaDcveGtlejRKem1OL1psK1BYN0o5Q3N4TVJmWlh0d1p0VUc5WDRmc0QzeVc2YmZnYUtaM1lmU3NaS2xLakVwN24yUkE5aDJUbk1KUXB0K3NOdFB1T2NreTUrdXpBRTVpcEdJelZqQ1o2VjNZUVhsWThERGVhNFJzQkZkVnNPSHBRZHJpTHpMOUd1d3F5cTJsdksvSEM0WUVQY0dId1FkUjduV05CTDNCcHhXc0pSc3ZxTHdPajAvWHhUUjNLT2lkbnZ3NDJCVGNGb3hXQ1lPbHdhRUdkbURhdmlNYmI0N3lDdjBIVEdhUnJBMityQ3krTHZpMlViSnMzWkpnTE9pcElhc1lIUW11eVBUKzRJMTVrTzBPdGxYQm84SEZGYVBiZzRYQkF5bTZtK1pCZGlUSzU2b0czQnVzeWZUSDBrY2REM1lHeTVzbFNuNU9SUFhGRHJiblZUeGhxL05zNTBIVUdlVURXaU1MOFFPdXpzR2k5dmJQUjFhb2M0SmJsSVYxWTZURzVSekpHdG5GcjVIMDJnNEhPMmJzOHp3azJCT3NPNXRCV3lJYkNpNy9IMFJGbFAxa1p5UEdENmJyTUtOME5ValdFMlhmMmZDQ0cxTjBpK2UybnJIMmtlRDVlbk4xcTM1UlJ2WXU3bXFXRExmaTg0YkprZ3hpOVR6SWVuR3dXYklKV1gvWWhGeUdZODJTamVIYXFOT3p6eWJCU2t5bXhxZzVTYVhzWUpRdCtmSW8rL3A4dmlOWWtkNnRkNEtKWU8xcy91YjhjMHdWdng4M0tKLzhGdVhGL3dkbmNGaFptZ2F3citDdjJYejlDeTFQYXJudGdFOEZBQUFBQUVsRlRrU3VRbUNDXCIpICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAyN3B4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMzVweCAhaW1wb3J0YW50O1xuICBjdXJzb3I6IGdyYWI7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbjpob3N0IC5leC1hIG5neC1zcGxpdC5uZ3gtdmVydGljYWwgOjpuZy1kZWVwIC5uZ3gtc3BsaXQtZ3V0dGVyLWljb24ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUNNQUFBQWRDQVlBQUFBZ3FkV0VBQUFBQkhOQ1NWUUlDQWdJZkFoa2lBQUFBQWx3U0ZsekFBQU94QUFBRHNRQmxTc09Hd0FBQUJsMFJWaDBVMjltZEhkaGNtVUFkM2QzTG1sdWEzTmpZWEJsTG05eVo1dnVQQm9BQUFPeFNVUkJWRWlKdGRkdHpOZFRHQWZ3ejcrNnk5MXFLcGFHRjBValk4Sm1ySXcxc2RqMFlGTWVNellMSldhVW1hYzFiZlFpdzBoa2tqRXJUeSt3aHJBUm0wenp0SG1ZcDNtYXlqeUZrbnk5K0ozYmZ2N3VmM2UzL3AwM3YzT2Q4NzJ1OHozWHVhN3JuQjl0YW1GUW1CMWVEaHZDNytHN3NDWmNIdzV1MTFvOUVUa21QQkJPRGdlR2p0QlorcWVFWldGamVDS00yWjFFeG9kTjRlS3dQQnpkQXRjL1hCNitEYlBic2ZDd2NFSTVqcVhodmZCTGVDYWNGZnJ2aEkyUjRmMXdXMmpVNXhvdEZQcmhNSXd0MzhQTGQxOThpYmV4SGk5aGJZTS9lcm1wNFZpRDFRMnViZ1U2TGp3YWZnd0pINGNIdzVYaHhEQ3NONHYyUUdpZkV1RFRtaWM2d3BKQzRLZXdJQnpTd2tpUFI5RUxRcWVINy8rMXliQ29FRmthOXFxTmQ0WlR3eDBsWlc4UGc5dEZwcXp4ZExpbFN6Z2diQTgzMWdBVHdxckMrdmt3UDR4dUo0bmFXaFBENWpCSXVERzhIZnFHR2FXL0trd0pBNXNVUnhWODIycEZhSVNQd3BtTnNCcS9ZZ1MyWVZhREQrdGduSVE1R0lYekc3eTFpd1FHTk5oYWsrOURwL0JwaVpjVm9XOE5NRGpNRFIrVWVuSnVTZmxkYnMwWkZDNEs2NVhzV2QrMVVCZ2FiaTNwL1VxWVhDOU80WWh3WGJnaGRQeFBNdlBDa1RWNWZQaEZxYUNUeXVCcDRadndRamkyeWNEazhFNTROOHhwanFkZWtya3N6S3JKUjRZdHdsZXA3bzF6d3ArcDdvKzZKNGFFeDhJOXFhcndMcmZpbWNVMWVWTDR2Qjkrd0JEY2pYa05icStCOXNNanVLSlJsZjkydFlINHN5YVB3enJocytLTk41bzhNclNrK2ZGdEpORmxlM21ZWC9xZEpZbG1DSjhVUWpPYkZGYUVsZTBtVW14L0hNYUZQcW5lUWUrR0RpVllFL2F2Z1NlRXY4SVJPMm04SXh3VkxnbjNoeWs3d0I0VGZrNzE1RmliNmxWNGFOZmt2ZUh6Sm9WbnczTTlMRDQxTEE2dmh0L0tocjRNTjRYT0ZucU4ydWEvQ0hlbWVwYjhBN2dtckszSkk0cFhwcll3T0RKVitWNFRGdFpJbkIzNnROcEEwVjBZdHBRQyt0KzNWSmdlM3F6SjB3cnJ2dDFnTzhLNmNzNTdoTmZEaTZuZDlDMUlEQzB4dUszVkpydUFvNHNucG9jOXc1UGgyaGJZMjFKZERRUENYZVdJOXRpQjdXSEY4eHRTVmZUV1JHcEtUeFYzcDdoeGVEZVlTMHRzakMxQnVESHMwOExlUVlYczVsVFBrRVd0c04wcGQ0YlZoY3pEM2N4ZmxhbzZuMWZraDhLQ2JuQmpVdjJPYkU5MXI4MXNGY3c5RWRxN2tKbGFHeHNlVm9hdDRjTGErRHZONlp2cVYyVkxPY2FKdlNiUURhR3ZTMEJPUzNVcmJ5cVpNNzRKOTFxNHVTWmZVRGJ5K0k1aXFMZGtKcVNxeU50VFBTdm1oZ0hkNE9hV3pGaVdxdFpzTFRWamg2bTlXMXFxTXI2a0JQUkg0WXgyMlAwYk5jb2xhdUNqaVRZQUFBQUFTVVZPUks1Q1lJST1cIikgIWltcG9ydGFudDtcbiAgd2lkdGg6IDM1cHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAyOXB4ICFpbXBvcnRhbnQ7XG4gIGN1cnNvcjogZ3JhYjtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG46aG9zdCAuZXgtYSBuZ3gtc3BsaXQgOjpuZy1kZWVwIC5uZ3gtc3BsaXQtZ3V0dGVyID4gLm5neC1zcGxpdC1ndXR0ZXItaWNvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMjtcbiAgLyogSGlkZSB0aGUgdG9vbHRpcCBjb250ZW50IGJ5IGRlZmF1bHQgKi9cbiAgLyogUG9zaXRpb24gdG9vbHRpcCBhYm92ZSB0aGUgZWxlbWVudCAqL1xuICAvKiBUcmlhbmdsZSBoYWNrIHRvIG1ha2UgdG9vbHRpcCBsb29rIGxpa2UgYSBzcGVlY2ggYnViYmxlICovXG59XG46aG9zdCAuZXgtYSBuZ3gtc3BsaXQgOjpuZy1kZWVwIC5uZ3gtc3BsaXQtZ3V0dGVyID4gLm5neC1zcGxpdC1ndXR0ZXItaWNvbjpiZWZvcmUsIDpob3N0IC5leC1hIG5neC1zcGxpdCA6Om5nLWRlZXAgLm5neC1zcGxpdC1ndXR0ZXIgPiAubmd4LXNwbGl0LWd1dHRlci1pY29uOmFmdGVyIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAtbXMtZmlsdGVyOiBcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5BbHBoYShPcGFjaXR5PTApXCI7XG4gIGZpbHRlcjogXCJwcm9naWQ6IERYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkFscGhhKE9wYWNpdHk9MClcIjtcbiAgb3BhY2l0eTogMDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG46aG9zdCAuZXgtYSBuZ3gtc3BsaXQgOjpuZy1kZWVwIC5uZ3gtc3BsaXQtZ3V0dGVyID4gLm5neC1zcGxpdC1ndXR0ZXItaWNvbjpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMTEwJTtcbiAgbGVmdDogNTAlO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIG1hcmdpbi1sZWZ0OiAtODBweDtcbiAgcGFkZGluZzogN3B4O1xuICB3aWR0aDogMTYwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg1MSwgNTEsIDUxLCAwLjkpO1xuICBjb2xvcjogI2ZmZjtcbiAgY29udGVudDogXCJEcmFnIG1lIGlmIHlvdSBjYW4hXCI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMS4yO1xufVxuOmhvc3QgLmV4LWEgbmd4LXNwbGl0IDo6bmctZGVlcCAubmd4LXNwbGl0LWd1dHRlciA+IC5uZ3gtc3BsaXQtZ3V0dGVyLWljb246YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMTEwJTtcbiAgbGVmdDogNTAlO1xuICBtYXJnaW4tbGVmdDogLTVweDtcbiAgd2lkdGg6IDA7XG4gIGJvcmRlci10b3A6IDVweCBzb2xpZCByZ2JhKDUxLCA1MSwgNTEsIDAuOSk7XG4gIGJvcmRlci1yaWdodDogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBjb250ZW50OiBcIiBcIjtcbiAgZm9udC1zaXplOiAwO1xuICBsaW5lLWhlaWdodDogMDtcbn1cbjpob3N0IC5leC1hIG5neC1zcGxpdCA6Om5nLWRlZXAgLm5neC1zcGxpdC1ndXR0ZXIubmd4LWRyYWdnZWQgPiAubmd4LXNwbGl0LWd1dHRlci1pY29uLFxuOmhvc3QgLmV4LWEgbmd4LXNwbGl0IDo6bmctZGVlcCAubmd4LXNwbGl0LWd1dHRlciA+IC5uZ3gtc3BsaXQtZ3V0dGVyLWljb246aG92ZXIge1xuICBvcGFjaXR5OiAxO1xufVxuOmhvc3QgLmV4LWEgbmd4LXNwbGl0IDo6bmctZGVlcCAubmd4LXNwbGl0LWd1dHRlci5uZ3gtZHJhZ2dlZCA+IC5uZ3gtc3BsaXQtZ3V0dGVyLWljb246YmVmb3JlLCA6aG9zdCAuZXgtYSBuZ3gtc3BsaXQgOjpuZy1kZWVwIC5uZ3gtc3BsaXQtZ3V0dGVyLm5neC1kcmFnZ2VkID4gLm5neC1zcGxpdC1ndXR0ZXItaWNvbjphZnRlcixcbjpob3N0IC5leC1hIG5neC1zcGxpdCA6Om5nLWRlZXAgLm5neC1zcGxpdC1ndXR0ZXIgPiAubmd4LXNwbGl0LWd1dHRlci1pY29uOmhvdmVyOmJlZm9yZSxcbjpob3N0IC5leC1hIG5neC1zcGxpdCA6Om5nLWRlZXAgLm5neC1zcGxpdC1ndXR0ZXIgPiAubmd4LXNwbGl0LWd1dHRlci1pY29uOmhvdmVyOmFmdGVyIHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgLW1zLWZpbHRlcjogXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQWxwaGEoT3BhY2l0eT0xMDApXCI7XG4gIGZpbHRlcjogXCJwcm9naWQ6IERYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkFscGhhKE9wYWNpdHk9MTAwKVwiO1xuICBvcGFjaXR5OiAxO1xufVxuOmhvc3QgLmV4LWIgbmd4LXNwbGl0IC5uZ3gtc3BsaXQtYXJlYSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcbn1cbjpob3N0IC5leC1iIG5neC1zcGxpdCAubmd4LXNwbGl0LWFyZWEgPiBwIHtcbiAgcGFkZGluZzogNXB4O1xufVxuOmhvc3QgLmV4LWIgbmd4LXNwbGl0IDo6bmctZGVlcCAubmd4LXNwbGl0LWd1dHRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXkgIWltcG9ydGFudDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuOmhvc3QgLmV4LWIgbmd4LXNwbGl0IDo6bmctZGVlcCAubmd4LXNwbGl0LWd1dHRlci1pY29uIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzO1xuICBvcGFjaXR5OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG46aG9zdCAuZXgtYiBuZ3gtc3BsaXQgOjpuZy1kZWVwIC5uZ3gtc3BsaXQtZ3V0dGVyLm5neC1kcmFnZ2VkIC5uZ3gtc3BsaXQtZ3V0dGVyLWljb24sXG46aG9zdCAuZXgtYiBuZ3gtc3BsaXQgOjpuZy1kZWVwIC5uZ3gtc3BsaXQtZ3V0dGVyLWljb246aG92ZXIge1xuICBvcGFjaXR5OiAwLjE7XG59XG46aG9zdCAuZXgtYiBuZ3gtc3BsaXQubmd4LWhvcml6b250YWwgOjpuZy1kZWVwIC5uZ3gtc3BsaXQtZ3V0dGVyLWljb24ge1xuICB3aWR0aDogMTdweCAhaW1wb3J0YW50O1xuICBsZWZ0OiAtOHB4O1xuICByaWdodDogOHB4O1xufVxuOmhvc3QgLmV4LWIgbmd4LXNwbGl0Lm5neC12ZXJ0aWNhbCA6Om5nLWRlZXAgLm5neC1zcGxpdC1ndXR0ZXItaWNvbiB7XG4gIGhlaWdodDogMTdweCAhaW1wb3J0YW50O1xuICB0b3A6IC04cHg7XG4gIGJvdHRvbTogOHB4O1xufVxuOmhvc3QgLmJ0bnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC13cmFwOiB3cmFwO1xufSJdfQ== */"],
      changeDetection: 0
    });

    var ɵCustomGutterStyleComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](CustomGutterStyleComponent);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomGutterStyleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          host: {
            "class": 'split-example-page'
          },
          styleUrls: ["./custom-gutter-style.component.scss"],
          template: " {{ testChangeDetectorRun() }}\n    <div class=\"container\">\n      <ui-example-title [type]=\"exampleEnum.STYLE\"></ui-example-title>\n      <div class=\"split-example ex-a\">\n        <ngx-split [direction]=\"direction\" gutterSize=\"35\">\n          <ngx-split-area [size]=\"30\">\n            <p>\n              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n              eiusmod tiam, quis nostrud exercitation ullamco laboris nisi ut\n              aliquip ex ea commodo consequat. Duis aute irure dolor in\n              reprehenderit in voluptate velit esse cillum dolore eu fugiat\n              nulla pariatur.\n            </p>\n          </ngx-split-area>\n          <ngx-split-area [size]=\"70\">\n            <p>\n              Sed ut perspiciatis unde omnis iste natus error sit voluptatem\n              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa\n              quae ab illo inventore veritatis et quasi architecto beatae vitae\n              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit\n              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores\n              eodolor sit amet, consectetur, adipisci velit, sed quia non\n              numquam eius modi tempora incidunt ut labore et dolore magnam\n              aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum\n              exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid\n              ex ea commodi consequatur? Quis autem vel eum iure reprehenderit\n              qui in ea voluptate velit esse quam nihil molestiae consequatur,\n              vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?\n            </p>\n          </ngx-split-area>\n        </ngx-split>\n      </div>\n      <div class=\"split-example ex-b\">\n        <ngx-split [direction]=\"direction\" restrictMove=\"true\" gutterSize=\"1\">\n          <ngx-split-area [size]=\"30\"\n            ><p>\n              A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A\n              A A A A A A A A A A A A A A\n            </p></ngx-split-area\n          >\n          <ngx-split-area [size]=\"50\"\n            ><p>\n              B B B B B B B B B B B B B B B B B B B B B B B B B B B B B B B B B\n              B B B B B B B B B B B B B B\n            </p></ngx-split-area\n          >\n          <ngx-split-area [size]=\"20\"\n            ><p>\n              C C C C C C C C C C C C C C C C C C C C C C C C C C C C C C C C C\n              C C C C C C C C C C C C C C\n            </p></ngx-split-area\n          >\n        </ngx-split>\n      </div>\n      <br />\n      <div class=\"btns\">\n        <button\n          class=\"btn btn-warning\"\n          (click)=\"\n            direction = direction === 'horizontal' ? 'vertical' : 'horizontal'\n          \"\n        >\n          {{ 'Toggle direction: \"' + direction + '\"' }}\n        </button>\n      </div>\n    </div>"
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/examples/component/dir-rtl.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/examples/component/dir-rtl.component.ts ***!
    \***************************************************************/

  /*! exports provided: DirRtlComponent */

  /***/
  function srcAppPagesExamplesComponentDirRtlComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DirRtlComponent", function () {
      return DirRtlComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _AComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./AComponent */
    "./src/app/pages/examples/component/AComponent.ts");

    var DirRtlComponent = /*#__PURE__*/function (_AComponent__WEBPACK_3) {
      _inherits(DirRtlComponent, _AComponent__WEBPACK_3);

      var _super3 = _createSuper(DirRtlComponent);

      function DirRtlComponent() {
        var _this12;

        _classCallCheck(this, DirRtlComponent);

        _this12 = _super3.apply(this, arguments);
        _this12.dir = 'rtl';
        return _this12;
      }

      return DirRtlComponent;
    }(_AComponent__WEBPACK_IMPORTED_MODULE_1__["AComponent"]);

    DirRtlComponent.ɵfac = function DirRtlComponent_Factory(t) {
      return ɵDirRtlComponent_BaseFactory(t || DirRtlComponent);
    };

    DirRtlComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DirRtlComponent,
      selectors: [["ng-component"]],
      hostAttrs: [1, "split-example-page"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 18,
      vars: 4,
      consts: [[1, "container"], [3, "type"], [1, "split-example"], [3, "dir"], ["size", "20"], ["size", "40"], [1, "btns"], [1, "btn", "btn-warning", 3, "click"]],
      template: function DirRtlComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "ui-example-title", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ngx-split", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ngx-split-area", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tiam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ngx-split-area", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " 2. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eodolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ngx-split-area", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " 3. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eodolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DirRtlComponent_Template_button_click_16_listener() {
            return ctx.dir = ctx.dir === "rtl" ? "ltr" : "rtl";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.testChangeDetectorRun(), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.exampleEnum.DIR);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dir", ctx.dir);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", "Toggle dir: \"" + ctx.dir + "\"", " ");
        }
      },
      styles: [".btns[_ngcontent-%COMP%] {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        flex-wrap: wrap;\n      }"],
      changeDetection: 0
    });

    var ɵDirRtlComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](DirRtlComponent);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DirRtlComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          host: {
            "class": 'split-example-page'
          },
          styles: ["\n      .btns {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        flex-wrap: wrap;\n      }\n    "],
          template: " {{ testChangeDetectorRun() }}\n    <div class=\"container\">\n      <ui-example-title [type]=\"exampleEnum.DIR\"></ui-example-title>\n      <div class=\"split-example\">\n        <ngx-split [dir]=\"dir\">\n          <ngx-split-area size=\"20\">\n            <p>\n              1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n              eiusmod tiam, quis nostrud exercitation ullamco laboris nisi ut\n              aliquip ex ea commodo consequat. Duis aute irure dolor in\n              reprehenderit in voluptate velit esse cillum dolore eu fugiat\n              nulla pariatur.\n            </p>\n          </ngx-split-area>\n          <ngx-split-area size=\"40\">\n            <p>\n              2. Sed ut perspiciatis unde omnis iste natus error sit voluptatem\n              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa\n              quae ab illo inventore veritatis et quasi architecto beatae vitae\n              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit\n              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores\n              eodolor sit amet, consectetur, adipisci velit, sed quia non\n              numquam eius modi tempora incidunt ut labore et dolore magnam\n              aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum\n              exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid\n              ex ea commodi consequatur? Quis autem vel eum iure reprehenderit\n              qui in ea voluptate velit esse quam nihil molestiae consequatur,\n              vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?\n            </p>\n          </ngx-split-area>\n          <ngx-split-area size=\"40\">\n            <p>\n              3. Sed ut perspiciatis unde omnis iste natus error sit voluptatem\n              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa\n              quae ab illo inventore veritatis et quasi architecto beatae vitae\n              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit\n              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores\n              eodolor sit amet, consectetur, adipisci velit, sed quia non\n              numquam eius modi tempora incidunt ut labore et dolore magnam\n              aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum\n              exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid\n              ex ea commodi consequatur? Quis autem vel eum iure reprehenderit\n              qui in ea voluptate velit esse quam nihil molestiae consequatur,\n              vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?\n            </p>\n          </ngx-split-area>\n        </ngx-split>\n      </div>\n      <br />\n      <div class=\"btns\">\n        <button\n          class=\"btn btn-warning\"\n          (click)=\"dir = dir === 'rtl' ? 'ltr' : 'rtl'\"\n        >\n          {{ 'Toggle dir: \"' + dir + '\"' }}\n        </button>\n      </div>\n    </div>"
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/examples/component/geek-demo.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/examples/component/geek-demo.component.ts ***!
    \*****************************************************************/

  /*! exports provided: GeekDemoComponent */

  /***/
  function srcAppPagesExamplesComponentGeekDemoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GeekDemoComponent", function () {
      return GeekDemoComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ngx_bootstrap_sortable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ngx-bootstrap/sortable */
    "../../node_modules/ngx-bootstrap/__ivy_ngcc__/sortable/fesm2015/ngx-bootstrap-sortable.js");
    /* harmony import */


    var _AComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./AComponent */
    "./src/app/pages/examples/component/AComponent.ts");

    function GeekDemoComponent_ng_template_5_ngx_split_area_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-split-area", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var area_r3 = ctx_r6.$implicit;
        var index_r4 = ctx_r6.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", area_r3.color);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", area_r3.visible)("order", index_r4)("size", area_r3.size);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](area_r3.id);
      }
    }

    function GeekDemoComponent_ng_template_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, GeekDemoComponent_ng_template_5_ngx_split_area_0_Template, 2, 6, "ngx-split-area", 23);
      }

      if (rf & 2) {
        var area_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", area_r3.present);
      }
    }

    function GeekDemoComponent_ng_template_64_Template(rf, ctx) {
      if (rf & 1) {
        var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GeekDemoComponent_ng_template_64_Template_button_click_4_listener() {
          var item_r7 = ctx.item;
          return item_r7.value.present = !item_r7.value.present;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GeekDemoComponent_ng_template_64_Template_button_click_6_listener() {
          var item_r7 = ctx.item;
          return item_r7.value.visible = !item_r7.value.visible;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GeekDemoComponent_ng_template_64_Template_button_click_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

          var item_r7 = ctx.item;

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r11.removeArea(item_r7.value);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Remove ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r7 = ctx.item;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("area-item id-", item_r7.value.id, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", item_r7.value.color);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r7.value.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", !item_r7.value.present);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", "*ngIf=\"" + item_r7.value.present + "\"", " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", !item_r7.value.visible);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", "[visible]=\"" + item_r7.value.visible + "\"", " ");
      }
    }

    var GeekDemoComponent = /*#__PURE__*/function (_AComponent__WEBPACK_4) {
      _inherits(GeekDemoComponent, _AComponent__WEBPACK_4);

      var _super4 = _createSuper(GeekDemoComponent);

      function GeekDemoComponent() {
        var _this13;

        _classCallCheck(this, GeekDemoComponent);

        _this13 = _super4.apply(this, arguments);
        _this13.d = {
          dir: 'horizontal',
          restrictMove: true,
          useTransition: true,
          gutterSize: null,
          gutterStep: null,
          width: null,
          height: null,
          areas: [{
            id: getRandomNum(),
            color: getRandomColor(),
            size: 25,
            present: true,
            visible: true
          }, {
            id: getRandomNum(),
            color: getRandomColor(),
            size: 50,
            present: true,
            visible: true
          }, {
            id: getRandomNum(),
            color: getRandomColor(),
            size: 25,
            present: true,
            visible: true
          }]
        };
        return _this13;
      }

      _createClass(GeekDemoComponent, [{
        key: "trackByFct",
        value: function trackByFct(index, area) {
          return area.id;
        }
      }, {
        key: "addArea",
        value: function addArea() {
          this.d.areas.push({
            id: getRandomNum(),
            color: getRandomColor(),
            size: 25,
            present: true,
            visible: true
          });
          this.sortableComponent.writeValue(this.d.areas);
        }
      }, {
        key: "removeArea",
        value: function removeArea(area) {
          this.d.areas.splice(this.d.areas.indexOf(area), 1);
          this.sortableComponent.writeValue(this.d.areas);
        }
      }]);

      return GeekDemoComponent;
    }(_AComponent__WEBPACK_IMPORTED_MODULE_2__["AComponent"]);

    GeekDemoComponent.ɵfac = function GeekDemoComponent_Factory(t) {
      return ɵGeekDemoComponent_BaseFactory(t || GeekDemoComponent);
    };

    GeekDemoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GeekDemoComponent,
      selectors: [["ng-component"]],
      viewQuery: function GeekDemoComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](ngx_bootstrap_sortable__WEBPACK_IMPORTED_MODULE_1__["SortableComponent"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sortableComponent = _t.first);
        }
      },
      hostAttrs: [1, "split-example-page"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 66,
      vars: 36,
      consts: [[1, "container"], [3, "type"], [1, "split-example", 2, "background-color", "#e5e0e0"], [2, "background-color", "#ffffff", 3, "direction", "restrictMove", "gutterSize", "gutterStep", "useTransition"], ["ngFor", "", 3, "ngForOf", "ngForTrackBy"], [1, "opts-prop"], [1, "btn", "btn-warning", "btn-sm", 3, "click"], [1, "btn-group"], ["btnRadio", "horizontal", 1, "btn", "btn-warning", "btn-sm", 3, "ngModel", "ngModelChange"], ["btnRadio", "vertical", 1, "btn", "btn-warning", "btn-sm", 3, "ngModel", "ngModelChange"], [1, "btn", "btn-warning", "btn-sm", 3, "ngModel", "btnRadio", "ngModelChange"], ["btnRadio", "400px", 1, "btn", "btn-warning", "btn-sm", 3, "ngModel", "ngModelChange"], ["btnRadio", "600px", 1, "btn", "btn-warning", "btn-sm", 3, "ngModel", "ngModelChange"], ["btnRadio", "200px", 1, "btn", "btn-warning", "btn-sm", 3, "ngModel", "ngModelChange"], ["btnRadio", "350px", 1, "btn", "btn-warning", "btn-sm", 3, "ngModel", "ngModelChange"], ["btnRadio", "7", 1, "btn", "btn-warning", "btn-sm", 3, "ngModel", "ngModelChange"], ["btnRadio", "22", 1, "btn", "btn-warning", "btn-sm", 3, "ngModel", "ngModelChange"], ["btnRadio", "10", 1, "btn", "btn-warning", "btn-sm", 3, "ngModel", "ngModelChange"], ["btnRadio", "50", 1, "btn", "btn-warning", "btn-sm", 3, "ngModel", "ngModelChange"], [1, "opts-area"], [1, "title"], [3, "ngModel", "itemTemplate", "ngModelChange"], ["itemTemplate", ""], [3, "visible", "order", "size", "background-color", 4, "ngIf"], [3, "visible", "order", "size"], [1, "num"]],
      template: function GeekDemoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "ui-example-title", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ngx-split", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, GeekDemoComponent_ng_template_5_Template, 1, 1, "ng-template", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GeekDemoComponent_Template_button_click_8_listener() {
            return ctx.d.useTransition = !ctx.d.useTransition;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function GeekDemoComponent_Template_label_ngModelChange_12_listener($event) {
            return ctx.d.dir = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "horizontal");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function GeekDemoComponent_Template_label_ngModelChange_14_listener($event) {
            return ctx.d.dir = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "vertical");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Width:\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function GeekDemoComponent_Template_label_ngModelChange_20_listener($event) {
            return ctx.d.width = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "null");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function GeekDemoComponent_Template_label_ngModelChange_22_listener($event) {
            return ctx.d.width = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "400");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function GeekDemoComponent_Template_label_ngModelChange_24_listener($event) {
            return ctx.d.width = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "600");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Height:\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function GeekDemoComponent_Template_label_ngModelChange_30_listener($event) {
            return ctx.d.height = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "null");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function GeekDemoComponent_Template_label_ngModelChange_32_listener($event) {
            return ctx.d.height = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "200");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function GeekDemoComponent_Template_label_ngModelChange_34_listener($event) {
            return ctx.d.height = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "350");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Gutter size:\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function GeekDemoComponent_Template_label_ngModelChange_40_listener($event) {
            return ctx.d.gutterSize = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "null");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function GeekDemoComponent_Template_label_ngModelChange_42_listener($event) {
            return ctx.d.gutterSize = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "label", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function GeekDemoComponent_Template_label_ngModelChange_44_listener($event) {
            return ctx.d.gutterSize = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "22");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Gutter step:\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function GeekDemoComponent_Template_label_ngModelChange_50_listener($event) {
            return ctx.d.gutterStep = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "null");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function GeekDemoComponent_Template_label_ngModelChange_52_listener($event) {
            return ctx.d.gutterStep = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "10");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "label", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function GeekDemoComponent_Template_label_ngModelChange_54_listener($event) {
            return ctx.d.gutterStep = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "50");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Areas (drag elements to change order):");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GeekDemoComponent_Template_button_click_61_listener() {
            return ctx.addArea();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " Add area ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "bs-sortable", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function GeekDemoComponent_Template_bs_sortable_ngModelChange_63_listener($event) {
            return ctx.d.areas = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, GeekDemoComponent_ng_template_64_Template, 10, 12, "ng-template", null, 22, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.testChangeDetectorRun(), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.exampleEnum.GEEK);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.d.width)("height", ctx.d.height);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("direction", ctx.d.dir)("restrictMove", ctx.d.restrictMove)("gutterSize", ctx.d.gutterSize)("gutterStep", ctx.d.gutterStep)("useTransition", ctx.d.useTransition);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.d.areas)("ngForTrackBy", ctx.trackByFct);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", !ctx.d.useTransition);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", "useTransition: " + ctx.d.useTransition, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.d.dir);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.d.dir);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.d.width)("btnRadio", null);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.d.width);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.d.width);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.d.height)("btnRadio", null);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.d.height);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.d.height);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.d.gutterSize)("btnRadio", null);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.d.gutterSize);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.d.gutterSize);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.d.gutterStep)("btnRadio", null);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.d.gutterStep);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.d.gutterStep);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.d.areas)("itemTemplate", _r1);
        }
      },
      styles: [".ngx-split-area[_ngcontent-%COMP%] {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        text-shadow: 2px 0 0 #fff, -2px 0 0 #fff, 0 2px 0 #fff, 0 -2px 0 #fff,\n          1px 1px #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff;\n      }\n\n      .opts-prop[_ngcontent-%COMP%] {\n        display: flex;\n        flex-wrap: wrap;\n        align-items: center;\n        justify-content: space-around;\n      }\n      .opts-prop[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n        margin-bottom: 10px;\n      }\n\n      .opts-area[_ngcontent-%COMP%]    > .title[_ngcontent-%COMP%] {\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        padding: 10px;\n        background-color: #e8e8e8;\n      }\n\n      .area-item[_ngcontent-%COMP%] {\n        display: flex;\n        justify-content: space-around;\n        align-items: center;\n        padding: 4px;\n        cursor: move;\n      }\n      .area-item[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n        margin: 0 5px;\n      }\n\n      .num[_ngcontent-%COMP%] {\n        color: #000000;\n        text-shadow: 2px 0 0 #fff, -2px 0 0 #fff, 0 2px 0 #fff, 0 -2px 0 #fff,\n          1px 1px #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff;\n      }\n      label[_ngcontent-%COMP%] {\n        margin: 0;\n      }"],
      changeDetection: 0
    });

    var ɵGeekDemoComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](GeekDemoComponent);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeekDemoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          host: {
            "class": 'split-example-page'
          },
          styles: ["\n      .ngx-split-area {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        text-shadow: 2px 0 0 #fff, -2px 0 0 #fff, 0 2px 0 #fff, 0 -2px 0 #fff,\n          1px 1px #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff;\n      }\n\n      .opts-prop {\n        display: flex;\n        flex-wrap: wrap;\n        align-items: center;\n        justify-content: space-around;\n      }\n      .opts-prop > div {\n        margin-bottom: 10px;\n      }\n\n      .opts-area > .title {\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        padding: 10px;\n        background-color: #e8e8e8;\n      }\n\n      .area-item {\n        display: flex;\n        justify-content: space-around;\n        align-items: center;\n        padding: 4px;\n        cursor: move;\n      }\n      .area-item button {\n        margin: 0 5px;\n      }\n\n      .num {\n        color: #000000;\n        text-shadow: 2px 0 0 #fff, -2px 0 0 #fff, 0 2px 0 #fff, 0 -2px 0 #fff,\n          1px 1px #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff;\n      }\n      label {\n        margin: 0;\n      }\n    "],
          template: " {{ testChangeDetectorRun() }}\n    <div class=\"container\">\n      <ui-example-title [type]=\"exampleEnum.GEEK\"></ui-example-title>\n      <div class=\"split-example\" style=\"background-color: #e5e0e0;\">\n        <ngx-split\n          [direction]=\"d.dir\"\n          [restrictMove]=\"d.restrictMove\"\n          [gutterSize]=\"d.gutterSize\"\n          [gutterStep]=\"d.gutterStep\"\n          [style.width]=\"d.width\"\n          [style.height]=\"d.height\"\n          [useTransition]=\"d.useTransition\"\n          style=\"background-color: #ffffff;\"\n        >\n          <ng-template\n            ngFor\n            let-area\n            [ngForOf]=\"d.areas\"\n            [ngForTrackBy]=\"trackByFct\"\n            let-index=\"index\"\n          >\n            <ngx-split-area\n              *ngIf=\"area.present\"\n              [visible]=\"area.visible\"\n              [order]=\"index\"\n              [size]=\"area.size\"\n              [style.background-color]=\"area.color\"\n              >{{ area.id }}</ngx-split-area\n            >\n          </ng-template>\n        </ngx-split>\n      </div>\n      <div class=\"opts-prop\">\n        <div>\n          <button\n            class=\"btn btn-warning btn-sm\"\n            [class.active]=\"!d.useTransition\"\n            (click)=\"d.useTransition = !d.useTransition\"\n          >\n            {{ 'useTransition: ' + d.useTransition }}\n          </button>\n        </div>\n        <div>\n          <div class=\"btn-group\">\n            <label\n              class=\"btn btn-warning btn-sm\"\n              [(ngModel)]=\"d.dir\"\n              btnRadio=\"horizontal\"\n              >horizontal</label\n            >\n            <label\n              class=\"btn btn-warning btn-sm\"\n              [(ngModel)]=\"d.dir\"\n              btnRadio=\"vertical\"\n              >vertical</label\n            >\n          </div>\n        </div>\n        <div>\n          <label>Width:&nbsp;</label>\n          <div class=\"btn-group\">\n            <label\n              class=\"btn btn-warning btn-sm\"\n              [(ngModel)]=\"d.width\"\n              [btnRadio]=\"null\"\n              >null</label\n            >\n            <label\n              class=\"btn btn-warning btn-sm\"\n              [(ngModel)]=\"d.width\"\n              btnRadio=\"400px\"\n              >400</label\n            >\n            <label\n              class=\"btn btn-warning btn-sm\"\n              [(ngModel)]=\"d.width\"\n              btnRadio=\"600px\"\n              >600</label\n            >\n          </div>\n        </div>\n        <div>\n          <label>Height:&nbsp;</label>\n          <div class=\"btn-group\">\n            <label\n              class=\"btn btn-warning btn-sm\"\n              [(ngModel)]=\"d.height\"\n              [btnRadio]=\"null\"\n              >null</label\n            >\n            <label\n              class=\"btn btn-warning btn-sm\"\n              [(ngModel)]=\"d.height\"\n              btnRadio=\"200px\"\n              >200</label\n            >\n            <label\n              class=\"btn btn-warning btn-sm\"\n              [(ngModel)]=\"d.height\"\n              btnRadio=\"350px\"\n              >350</label\n            >\n          </div>\n        </div>\n        <div>\n          <label>Gutter size:&nbsp;</label>\n          <div class=\"btn-group\">\n            <label\n              class=\"btn btn-warning btn-sm\"\n              [(ngModel)]=\"d.gutterSize\"\n              [btnRadio]=\"null\"\n              >null</label\n            >\n            <label\n              class=\"btn btn-warning btn-sm\"\n              [(ngModel)]=\"d.gutterSize\"\n              btnRadio=\"7\"\n              >7</label\n            >\n            <label\n              class=\"btn btn-warning btn-sm\"\n              [(ngModel)]=\"d.gutterSize\"\n              btnRadio=\"22\"\n              >22</label\n            >\n          </div>\n        </div>\n        <div>\n          <label>Gutter step:&nbsp;</label>\n          <div class=\"btn-group\">\n            <label\n              class=\"btn btn-warning btn-sm\"\n              [(ngModel)]=\"d.gutterStep\"\n              [btnRadio]=\"null\"\n              >null</label\n            >\n            <label\n              class=\"btn btn-warning btn-sm\"\n              [(ngModel)]=\"d.gutterStep\"\n              btnRadio=\"10\"\n              >10</label\n            >\n            <label\n              class=\"btn btn-warning btn-sm\"\n              [(ngModel)]=\"d.gutterStep\"\n              btnRadio=\"50\"\n              >50</label\n            >\n          </div>\n        </div>\n      </div>\n      <div class=\"opts-area\">\n        <div class=\"title\">\n          <label><b>Areas (drag elements to change order):</b></label>\n          <button class=\"btn btn-warning btn-sm\" (click)=\"addArea()\">\n            Add area\n          </button>\n        </div>\n        <bs-sortable\n          [(ngModel)]=\"d.areas\"\n          [itemTemplate]=\"itemTemplate\"\n        ></bs-sortable>\n\n        <ng-template #itemTemplate let-item=\"item\" let-index=\"index\">\n          <div\n            [style.background-color]=\"item.value.color\"\n            class=\"area-item id-{{ item.value.id }}\"\n          >\n            <div class=\"num\">{{ item.value.id }}</div>\n            <div>\n              <button\n                class=\"btn btn-warning btn-sm\"\n                [class.active]=\"!item.value.present\"\n                (click)=\"item.value.present = !item.value.present\"\n              >\n                {{ '*ngIf=\"' + item.value.present + '\"' }}\n              </button>\n              <button\n                class=\"btn btn-warning btn-sm\"\n                [class.active]=\"!item.value.visible\"\n                (click)=\"item.value.visible = !item.value.visible\"\n              >\n                {{ '[visible]=\"' + item.value.visible + '\"' }}\n              </button>\n              <button\n                class=\"btn btn-warning btn-sm\"\n                (click)=\"removeArea(item.value)\"\n              >\n                Remove\n              </button>\n            </div>\n          </div>\n        </ng-template>\n      </div>\n    </div>"
        }]
      }], null, {
        sortableComponent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [ngx_bootstrap_sortable__WEBPACK_IMPORTED_MODULE_1__["SortableComponent"], {
            "static": false
          }]
        }]
      });
    })();

    function getRandomNum() {
      return Math.round(Math.random() * 1000);
    }

    function getRandomColor() {
      return '#' + (Math.random() * 0xffffff << 0).toString(16);
    }
    /***/

  },

  /***/
  "./src/app/pages/examples/component/gutter-click.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/pages/examples/component/gutter-click.component.ts ***!
    \********************************************************************/

  /*! exports provided: GutterClickComponent */

  /***/
  function srcAppPagesExamplesComponentGutterClickComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GutterClickComponent", function () {
      return GutterClickComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ngx_split__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ngx-split */
    "../../libs/ngx-split/src/index.ts");
    /* harmony import */


    var _AComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./AComponent */
    "./src/app/pages/examples/component/AComponent.ts");
    /* harmony import */


    var _format_date__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../format-date */
    "./src/app/pages/examples/format-date.ts");

    var _c0 = ["mySplit"];
    var _c1 = ["logs"];

    function GutterClickComponent_ngx_split_area_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-split-area", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var a_r4 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("size", a_r4.size)("order", a_r4.order);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](a_r4.content);
      }
    }

    function GutterClickComponent_li_34_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var l_r5 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", l_r5.type);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](l_r5.text);
      }
    }

    var GutterClickComponent = /*#__PURE__*/function (_AComponent__WEBPACK_5) {
      _inherits(GutterClickComponent, _AComponent__WEBPACK_5);

      var _super5 = _createSuper(GutterClickComponent);

      function GutterClickComponent() {
        var _this14;

        _classCallCheck(this, GutterClickComponent);

        _this14 = _super5.apply(this, arguments);
        _this14.isDisabled = true;
        _this14.useTransition = true;
        _this14.dblClickTime = 0;
        _this14.logMessages = [];
        _this14.areas = [{
          size: 25,
          order: 1,
          content: 'fg fdkjuh dfskhf dkujv fd vifdk hvdkuh fg'
        }, {
          size: 50,
          order: 2,
          content: 'sd h vdshhf deuyf gduyeg hudeg hudfg  fd vifdk hvdkuh fg'
        }, {
          size: 25,
          order: 3,
          content: 'sd jslfd ijgil dfhlt jkgvbnhj fl bhjgflh jfglhj fl h fg'
        }];
        return _this14;
      }

      _createClass(GutterClickComponent, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.sub = this.mySplitEl.dragProgress$.subscribe(function (data) {
            console.log("".concat(Object(_format_date__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(new Date()), " > dragProgress$ observable emitted but current component change detection didn't runned!"), data);
          });
        }
      }, {
        key: "log",
        value: function log(type, e) {
          var _this15 = this;

          this.logMessages.push({
            type: type,
            text: "".concat(Object(_format_date__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(new Date()), " > ").concat(type, " event > ").concat(JSON.stringify(e))
          });
          setTimeout(function () {
            if (_this15.logsEl.nativeElement.scroll) {
              _this15.logsEl.nativeElement.scroll({
                top: _this15.logMessages.length * 30
              });
            }
          });

          if (type === 'gutterClick') {
            this.gutterClick(e);
          } else if (type === 'dragEnd') {
            this.areas[0].size = e.sizes[0];
            this.areas[1].size = e.sizes[1];
            this.areas[2].size = e.sizes[2];
          }
        }
      }, {
        key: "gutterClick",
        value: function gutterClick(e) {
          if (e.gutterNum === 1) {
            if (this.areas[0].size > 0) {
              this.areas[1].size += this.areas[0].size;
              this.areas[0].size = 0;
            } else if (this.areas[1].size > 25) {
              this.areas[1].size -= 25;
              this.areas[0].size = 25;
            } else {
              this.areas[0].size = 25;
              this.areas[1].size = 50;
              this.areas[2].size = 25;
            }
          } else if (e.gutterNum === 2) {
            if (this.areas[2].size > 0) {
              this.areas[1].size += this.areas[2].size;
              this.areas[2].size = 0;
            } else if (this.areas[1].size > 25) {
              this.areas[1].size -= 25;
              this.areas[2].size = 25;
            } else {
              this.areas[0].size = 25;
              this.areas[1].size = 50;
              this.areas[2].size = 25;
            }
          }
        }
      }, {
        key: "dragEnd",
        value: function dragEnd(e) {
          this.areas[0].size = e.sizes[0];
          this.areas[1].size = e.sizes[1];
          this.areas[2].size = e.sizes[2];
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.sub) this.sub.unsubscribe();
        }
      }]);

      return GutterClickComponent;
    }(_AComponent__WEBPACK_IMPORTED_MODULE_2__["AComponent"]);

    GutterClickComponent.ɵfac = function GutterClickComponent_Factory(t) {
      return ɵGutterClickComponent_BaseFactory(t || GutterClickComponent);
    };

    GutterClickComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GutterClickComponent,
      selectors: [["ng-component"]],
      viewQuery: function GutterClickComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.mySplitEl = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.logsEl = _t.first);
        }
      },
      hostAttrs: [1, "split-example-page"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 35,
      vars: 17,
      consts: [[1, "container"], [3, "type"], [1, "split-example"], ["gutterSize", "10", "direction", "horizontal", 3, "disabled", "gutterDblClickDuration", "useTransition", "dragStart", "dragEnd", "gutterClick", "gutterDblClick", "transitionEnd"], ["mySplit", ""], [3, "size", "order", 4, "ngFor", "ngForOf"], [1, "btns"], [1, "btn", "btn-warning", 3, "click"], [1, "btn-group"], ["tooltip", "When set to 0ms, 'click' is instant and 'dblclick' is impossible.", 1, "btn", "btn-warning", 3, "click"], ["tooltip", "When set to 500ms, 'click' is delayed and 'dblclick' is possible.", 1, "btn", "btn-warning", 3, "click"], [1, "logs"], ["logs", ""], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "size", "order"], [3, "ngClass"]],
      template: function GutterClickComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "ui-example-title", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ngx-split", 3, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dragStart", function GutterClickComponent_Template_ngx_split_dragStart_4_listener($event) {
            return ctx.log("dragStart", $event);
          })("dragEnd", function GutterClickComponent_Template_ngx_split_dragEnd_4_listener($event) {
            return ctx.log("dragEnd", $event);
          })("gutterClick", function GutterClickComponent_Template_ngx_split_gutterClick_4_listener($event) {
            return ctx.log("gutterClick", $event);
          })("gutterDblClick", function GutterClickComponent_Template_ngx_split_gutterDblClick_4_listener($event) {
            return ctx.log("gutterDblClick", $event);
          })("transitionEnd", function GutterClickComponent_Template_ngx_split_transitionEnd_4_listener($event) {
            return ctx.log("transitionEnd", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, GutterClickComponent_ngx_split_area_6_Template, 3, 3, "ngx-split-area", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GutterClickComponent_Template_button_click_10_listener() {
            return ctx.useTransition = !ctx.useTransition;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GutterClickComponent_Template_button_click_13_listener() {
            return ctx.isDisabled = !ctx.isDisabled;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Property ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "[gutterDblClickDuration]");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, ":\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GutterClickComponent_Template_label_click_22_listener() {
            return ctx.dblClickTime = 0;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "0ms");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GutterClickComponent_Template_label_click_24_listener() {
            return ctx.dblClickTime = 500;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "500ms");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "All ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "ngx-split");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " events emitted:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "ul", null, 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, GutterClickComponent_li_34_Template, 2, 2, "li", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.testChangeDetectorRun(), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.exampleEnum.CLICK);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.isDisabled)("gutterDblClickDuration", ctx.dblClickTime)("useTransition", ctx.useTransition);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.areas);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", !ctx.useTransition);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", "useTransition: " + ctx.useTransition, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", !ctx.isDisabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", "isDisabled: " + ctx.isDisabled, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx.dblClickTime === 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx.dblClickTime === 500);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.logMessages);
        }
      },
      styles: ["ngx-split.ngx-transition.ngx-init[_ngcontent-%COMP%]:not(.ngx-dragging)    \n        > .ngx-split-gutter, ngx-split.ngx-transition.ngx-init[_ngcontent-%COMP%]:not(.ngx-dragging)    > .ngx-split-area[_ngcontent-%COMP%] {\n        transition: flex-basis 1.5s !important;\n      }\n      ngx-split.ngx-disabled[_ngcontent-%COMP%]     > .ngx-split-gutter {\n        cursor: pointer !important;\n      }\n\n      .btns[_ngcontent-%COMP%] {\n        display: flex;\n        justify-content: space-around;\n        flex-wrap: wrap;\n      }\n      .btns[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n        flex: 1 1 50%;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n      }\n      .btns[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n        margin-bottom: 10px;\n      }\n      .logs[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n        margin-bottom: 5px;\n      }\n      .logs[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%] {\n        height: 200px;\n        width: 100%;\n        overflow-y: scroll;\n        overflow-x: hidden;\n        border: 1px solid #bfbfbf;\n        background-color: #e8e8e8;\n      }"],
      changeDetection: 0
    });

    var ɵGutterClickComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](GutterClickComponent);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GutterClickComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          host: {
            "class": 'split-example-page'
          },
          styles: ["\n      ngx-split.ngx-transition.ngx-init:not(.ngx-dragging)\n        ::ng-deep\n        > .ngx-split-gutter,\n      ngx-split.ngx-transition.ngx-init:not(.ngx-dragging) > .ngx-split-area {\n        transition: flex-basis 1.5s !important;\n      }\n      ngx-split.ngx-disabled ::ng-deep > .ngx-split-gutter {\n        cursor: pointer !important;\n      }\n\n      .btns {\n        display: flex;\n        justify-content: space-around;\n        flex-wrap: wrap;\n      }\n      .btns > div {\n        flex: 1 1 50%;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n      }\n      .btns > div > button {\n        margin-bottom: 10px;\n      }\n      .logs > p {\n        margin-bottom: 5px;\n      }\n      .logs > ul {\n        height: 200px;\n        width: 100%;\n        overflow-y: scroll;\n        overflow-x: hidden;\n        border: 1px solid #bfbfbf;\n        background-color: #e8e8e8;\n      }\n    "],
          template: " {{ testChangeDetectorRun() }}\n    <div class=\"container\">\n      <ui-example-title [type]=\"exampleEnum.CLICK\"></ui-example-title>\n      <div class=\"split-example\">\n        <ngx-split\n          #mySplit\n          [disabled]=\"isDisabled\"\n          gutterSize=\"10\"\n          [gutterDblClickDuration]=\"dblClickTime\"\n          direction=\"horizontal\"\n          [useTransition]=\"useTransition\"\n          (dragStart)=\"log('dragStart', $event)\"\n          (dragEnd)=\"log('dragEnd', $event)\"\n          (gutterClick)=\"log('gutterClick', $event)\"\n          (gutterDblClick)=\"log('gutterDblClick', $event)\"\n          (transitionEnd)=\"log('transitionEnd', $event)\"\n        >\n          <ngx-split-area\n            *ngFor=\"let a of areas\"\n            [size]=\"a.size\"\n            [order]=\"a.order\"\n          >\n            <p>{{ a.content }}</p>\n          </ngx-split-area>\n        </ngx-split>\n      </div>\n      <br />\n      <div class=\"btns\">\n        <div>\n          <button\n            class=\"btn btn-warning\"\n            [class.active]=\"!useTransition\"\n            (click)=\"useTransition = !useTransition\"\n          >\n            {{ 'useTransition: ' + useTransition }}\n          </button>\n        </div>\n        <div>\n          <button\n            class=\"btn btn-warning\"\n            [class.active]=\"!isDisabled\"\n            (click)=\"isDisabled = !isDisabled\"\n          >\n            {{ 'isDisabled: ' + isDisabled }}\n          </button>\n        </div>\n        <div>\n          <label>Property <code>[gutterDblClickDuration]</code>:&nbsp;</label>\n          <div class=\"btn-group\">\n            <label\n              class=\"btn btn-warning\"\n              tooltip=\"When set to 0ms, 'click' is instant and 'dblclick' is impossible.\"\n              [class.disabled]=\"dblClickTime === 0\"\n              (click)=\"dblClickTime = 0\"\n              >0ms</label\n            >\n            <label\n              class=\"btn btn-warning\"\n              tooltip=\"When set to 500ms, 'click' is delayed and 'dblclick' is possible.\"\n              [class.disabled]=\"dblClickTime === 500\"\n              (click)=\"dblClickTime = 500\"\n              >500ms</label\n            >\n          </div>\n        </div>\n      </div>\n      <div class=\"logs\">\n        <p>All <code>ngx-split</code> events emitted:</p>\n        <ul #logs>\n          <li *ngFor=\"let l of logMessages\" [ngClass]=\"l.type\">{{ l.text }}</li>\n        </ul>\n      </div>\n    </div>"
        }]
      }], null, {
        mySplitEl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['mySplit', {
            "static": false
          }]
        }],
        logsEl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['logs', {
            "static": false
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pages/examples/component/iframe.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/pages/examples/component/iframe.component.ts ***!
    \**************************************************************/

  /*! exports provided: IframeComponent */

  /***/
  function srcAppPagesExamplesComponentIframeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IframeComponent", function () {
      return IframeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _AComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./AComponent */
    "./src/app/pages/examples/component/AComponent.ts");

    var IframeComponent = /*#__PURE__*/function (_AComponent__WEBPACK_6) {
      _inherits(IframeComponent, _AComponent__WEBPACK_6);

      var _super6 = _createSuper(IframeComponent);

      function IframeComponent() {
        var _this16;

        _classCallCheck(this, IframeComponent);

        _this16 = _super6.apply(this, arguments);
        _this16.showIframeHider = false;
        return _this16;
      }

      return IframeComponent;
    }(_AComponent__WEBPACK_IMPORTED_MODULE_1__["AComponent"]);

    IframeComponent.ɵfac = function IframeComponent_Factory(t) {
      return ɵIframeComponent_BaseFactory(t || IframeComponent);
    };

    IframeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IframeComponent,
      selectors: [["ng-component"]],
      hostAttrs: [1, "split-example-page"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 13,
      vars: 4,
      consts: [[1, "container"], [3, "type"], [1, "split-example", 2, "height", "400px"], ["direction", "horizontal", 3, "dragStart", "dragEnd"], ["size", "40"], ["src", "https://beeman.github.io/ngx-split", "frameborder", "0", "width", "100%", "height", "100%"], [1, "hack-iframe-hider", 3, "hidden"], ["size", "60"]],
      template: function IframeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "ui-example-title", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ngx-split", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dragStart", function IframeComponent_Template_ngx_split_dragStart_4_listener() {
            return ctx.showIframeHider = true;
          })("dragEnd", function IframeComponent_Template_ngx_split_dragEnd_4_listener() {
            return ctx.showIframeHider = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ngx-split-area", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "iframe", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ngx-split-area", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "iframe", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.testChangeDetectorRun(), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.exampleEnum.IFRAME);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.showIframeHider === false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.showIframeHider === false);
        }
      },
      styles: [".ngx-split-area[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n        position: relative;\n        height: 100%;\n        overflow: hidden;\n      }\n\n      .hack-iframe-hider[_ngcontent-%COMP%] {\n        background: rgba(0, 0, 0, 0.2);\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n      }"],
      changeDetection: 0
    });

    var ɵIframeComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](IframeComponent);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IframeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          host: {
            "class": 'split-example-page'
          },
          styles: ["\n      .ngx-split-area > div {\n        position: relative;\n        height: 100%;\n        overflow: hidden;\n      }\n\n      .hack-iframe-hider {\n        background: rgba(0, 0, 0, 0.2);\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n      }\n    "],
          template: " {{ testChangeDetectorRun() }}\n    <div class=\"container\">\n      <ui-example-title [type]=\"exampleEnum.IFRAME\"></ui-example-title>\n      <div class=\"split-example\" style=\"height: 400px;\">\n        <ngx-split\n          direction=\"horizontal\"\n          (dragStart)=\"showIframeHider = true\"\n          (dragEnd)=\"showIframeHider = false\"\n        >\n          <ngx-split-area size=\"40\">\n            <div>\n              <iframe\n                src=\"https://beeman.github.io/ngx-split\"\n                frameborder=\"0\"\n                width=\"100%\"\n                height=\"100%\"\n              ></iframe>\n              <div\n                [hidden]=\"showIframeHider === false\"\n                class=\"hack-iframe-hider\"\n              ></div>\n            </div>\n          </ngx-split-area>\n          <ngx-split-area size=\"60\">\n            <div>\n              <iframe\n                src=\"https://beeman.github.io/ngx-split\"\n                frameborder=\"0\"\n                width=\"100%\"\n                height=\"100%\"\n              ></iframe>\n              <div\n                [hidden]=\"showIframeHider === false\"\n                class=\"hack-iframe-hider\"\n              ></div>\n            </div>\n          </ngx-split-area>\n        </ngx-split>\n      </div>\n    </div>"
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/examples/component/min-max.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/examples/component/min-max.component.ts ***!
    \***************************************************************/

  /*! exports provided: MinMaxComponent */

  /***/
  function srcAppPagesExamplesComponentMinMaxComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MinMaxComponent", function () {
      return MinMaxComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _AComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./AComponent */
    "./src/app/pages/examples/component/AComponent.ts");

    var MinMaxComponent = /*#__PURE__*/function (_AComponent__WEBPACK_7) {
      _inherits(MinMaxComponent, _AComponent__WEBPACK_7);

      var _super7 = _createSuper(MinMaxComponent);

      function MinMaxComponent() {
        var _this17;

        _classCallCheck(this, MinMaxComponent);

        _this17 = _super7.apply(this, arguments);
        _this17.restrictMove = false;
        return _this17;
      } //


      _createClass(MinMaxComponent, [{
        key: "log",
        value: function log(x) {
          console.log('dragEnd ', x.sizes, ' total > ', x.sizes.reduce(function (t, s) {
            return t + s;
          }, 0));
        }
      }]);

      return MinMaxComponent;
    }(_AComponent__WEBPACK_IMPORTED_MODULE_1__["AComponent"]);

    MinMaxComponent.ɵfac = function MinMaxComponent_Factory(t) {
      return ɵMinMaxComponent_BaseFactory(t || MinMaxComponent);
    };

    MinMaxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MinMaxComponent,
      selectors: [["ng-component"]],
      hostAttrs: [1, "split-example-page"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 108,
      vars: 5,
      consts: [[1, "container"], [3, "type"], [1, "split-example", "ex-percent"], ["unit", "percent", "gutterSize", "30", 3, "restrictMove", "dragEnd"], ["size", "30", "minSize", "20", "maxSize", "30"], [1, "txt-min"], [1, "txt-max"], ["size", "40", "minSize", "30", "maxSize", "50"], ["size", "30", "minSize", "20", "maxSize", "50"], [1, "split-example", "ex-pixel"], ["unit", "pixel", "gutterSize", "30", 3, "restrictMove", "dragEnd"], ["size", "200", "minSize", "100", "maxSize", "200"], ["size", "*"], ["size", "150", "lockSize", "true"], [1, "txt-minmax"], ["size", "250", "minSize", "250", "maxSize", "400"], [1, "btns"], [1, "btn", "btn-warning", 3, "click"]],
      template: function MinMaxComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "ui-example-title", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Percent mode:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ngx-split", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dragEnd", function MinMaxComponent_Template_ngx_split_dragEnd_6_listener($event) {
            return ctx.log($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ngx-split-area", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "size=\"30\"");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "minSize=\"20\"");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "maxSize=\"30\"");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "MIN");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "MAX");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ngx-split-area", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "size=\"40\"");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "minSize=\"30\"");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "maxSize=\"50\"");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "MIN");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "MAX");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "ngx-split-area", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "size=\"30\"");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "minSize=\"20\"");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "maxSize=\"50\"");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "MIN");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "MAX");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Pixel mode:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "ngx-split", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dragEnd", function MinMaxComponent_Template_ngx_split_dragEnd_49_listener($event) {
            return ctx.log($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "ngx-split-area", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "size=\"200\"");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "minSize=\"100\"");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "maxSize=\"200\"");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "MIN");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "MAX");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "ngx-split-area", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "size=\"*\"");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "MIN");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "MAX");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "ngx-split-area", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " size=\"150\"");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "lockSize=\"true\"");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Same as");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "minSize=\"150\"");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "maxSize=\"150\" ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "MIN");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "&");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "MAX");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "ngx-split-area", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "size=\"250\"");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "minSize=\"250\"");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "maxSize=\"400\"");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "MIN");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "MAX");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MinMaxComponent_Template_button_click_106_listener() {
            return ctx.restrictMove = ctx.restrictMove ? false : true;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.testChangeDetectorRun(), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.exampleEnum.MINMAX);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("restrictMove", ctx.restrictMove);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("restrictMove", ctx.restrictMove);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", "Restrict move: \"" + ctx.restrictMove + "\"", " ");
        }
      },
      styles: [".btns[_ngcontent-%COMP%] {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        flex-wrap: wrap;\n      }\n\n      .txt-min[_ngcontent-%COMP%], .txt-max[_ngcontent-%COMP%], .txt-minmax[_ngcontent-%COMP%] {\n        pointer-events: none;\n        position: absolute;\n        opacity: 0;\n        transition: opacity 0.2s;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        width: 100%;\n        height: 100%;\n        overflow: hidden;\n      }\n\n      .txt-min[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%], .txt-max[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%], .txt-minmax[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n        font-size: 30px;\n        font-weight: bold;\n        color: #cccccc;\n        text-align: center;\n      }\n\n      ngx-split-area[_ngcontent-%COMP%] {\n        background: lightblue;\n        transition: background 0.2s;\n        position: relative;\n        overflow: hidden !important;\n      }\n\n      ngx-split-area[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n        position: absolute;\n        font-size: 12px;\n        font-weight: bold;\n        padding: 5px;\n        line-height: 12px;\n      }\n\n      ngx-split-area.ngx-min[_ngcontent-%COMP%] {\n        background: green;\n      }\n      ngx-split-area.ngx-min[_ngcontent-%COMP%]   .txt-min[_ngcontent-%COMP%] {\n        opacity: 1;\n      }\n      ngx-split-area.ngx-max[_ngcontent-%COMP%] {\n        background: red;\n      }\n      ngx-split-area.ngx-max[_ngcontent-%COMP%]   .txt-max[_ngcontent-%COMP%] {\n        opacity: 1;\n      }\n      ngx-split-area.ngx-min.ngx-max[_ngcontent-%COMP%] {\n        background: #ff77e7;\n      }\n      ngx-split-area.ngx-min.ngx-max[_ngcontent-%COMP%]   .txt-minmax[_ngcontent-%COMP%] {\n        opacity: 1;\n      }"],
      changeDetection: 0
    });

    var ɵMinMaxComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MinMaxComponent);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MinMaxComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          host: {
            "class": 'split-example-page'
          },
          styles: ["\n      .btns {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        flex-wrap: wrap;\n      }\n\n      .txt-min,\n      .txt-max,\n      .txt-minmax {\n        pointer-events: none;\n        position: absolute;\n        opacity: 0;\n        transition: opacity 0.2s;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        width: 100%;\n        height: 100%;\n        overflow: hidden;\n      }\n\n      .txt-min > p,\n      .txt-max > p,\n      .txt-minmax > p {\n        font-size: 30px;\n        font-weight: bold;\n        color: #cccccc;\n        text-align: center;\n      }\n\n      ngx-split-area {\n        background: lightblue;\n        transition: background 0.2s;\n        position: relative;\n        overflow: hidden !important;\n      }\n\n      ngx-split-area > p {\n        position: absolute;\n        font-size: 12px;\n        font-weight: bold;\n        padding: 5px;\n        line-height: 12px;\n      }\n\n      ngx-split-area.ngx-min {\n        background: green;\n      }\n      ngx-split-area.ngx-min .txt-min {\n        opacity: 1;\n      }\n      ngx-split-area.ngx-max {\n        background: red;\n      }\n      ngx-split-area.ngx-max .txt-max {\n        opacity: 1;\n      }\n      ngx-split-area.ngx-min.ngx-max {\n        background: #ff77e7;\n      }\n      ngx-split-area.ngx-min.ngx-max .txt-minmax {\n        opacity: 1;\n      }\n    "],
          template: " {{ testChangeDetectorRun() }}\n    <div class=\"container\">\n      <ui-example-title [type]=\"exampleEnum.MINMAX\"></ui-example-title>\n      <h5>Percent mode:</h5>\n      <div class=\"split-example ex-percent\">\n        <ngx-split\n          unit=\"percent\"\n          [restrictMove]=\"restrictMove\"\n          gutterSize=\"30\"\n          (dragEnd)=\"log($event)\"\n        >\n          <ngx-split-area size=\"30\" minSize=\"20\" maxSize=\"30\">\n            <p>size=\"30\"<br />minSize=\"20\"<br />maxSize=\"30\"</p>\n            <div class=\"txt-min\"><p>MIN</p></div>\n            <div class=\"txt-max\"><p>MAX</p></div>\n          </ngx-split-area>\n          <ngx-split-area size=\"40\" minSize=\"30\" maxSize=\"50\">\n            <p>size=\"40\"<br />minSize=\"30\"<br />maxSize=\"50\"</p>\n            <div class=\"txt-min\"><p>MIN</p></div>\n            <div class=\"txt-max\"><p>MAX</p></div>\n          </ngx-split-area>\n          <ngx-split-area size=\"30\" minSize=\"20\" maxSize=\"50\">\n            <p>size=\"30\"<br />minSize=\"20\"<br />maxSize=\"50\"</p>\n            <div class=\"txt-min\"><p>MIN</p></div>\n            <div class=\"txt-max\"><p>MAX</p></div>\n          </ngx-split-area>\n        </ngx-split>\n      </div>\n      <h5>Pixel mode:</h5>\n      <div class=\"split-example ex-pixel\">\n        <ngx-split\n          unit=\"pixel\"\n          [restrictMove]=\"restrictMove\"\n          gutterSize=\"30\"\n          (dragEnd)=\"log($event)\"\n        >\n          <ngx-split-area size=\"200\" minSize=\"100\" maxSize=\"200\">\n            <p>size=\"200\"<br />minSize=\"100\"<br />maxSize=\"200\"</p>\n            <div class=\"txt-min\"><p>MIN</p></div>\n            <div class=\"txt-max\"><p>MAX</p></div>\n          </ngx-split-area>\n          <ngx-split-area size=\"*\">\n            <p>size=\"*\"</p>\n            <div class=\"txt-min\"><p>MIN</p></div>\n            <div class=\"txt-max\"><p>MAX</p></div>\n          </ngx-split-area>\n          <ngx-split-area size=\"150\" lockSize=\"true\">\n            <p>\n              size=\"150\"<br />lockSize=\"true\"<br /><br />Same as<br />minSize=\"150\"<br />maxSize=\"150\"\n            </p>\n            <div class=\"txt-minmax\">\n              <p>MIN<br />&<br />MAX</p>\n            </div>\n          </ngx-split-area>\n          <ngx-split-area size=\"250\" minSize=\"250\" maxSize=\"400\">\n            <p>size=\"250\"<br />minSize=\"250\"<br />maxSize=\"400\"</p>\n            <div class=\"txt-min\"><p>MIN</p></div>\n            <div class=\"txt-max\"><p>MAX</p></div>\n          </ngx-split-area>\n        </ngx-split>\n      </div>\n      <br />\n      <div class=\"btns\">\n        <button\n          class=\"btn btn-warning\"\n          (click)=\"restrictMove = restrictMove ? false : true\"\n        >\n          {{ 'Restrict move: \"' + restrictMove + '\"' }}\n        </button>\n      </div>\n    </div>"
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/examples/component/nested.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/pages/examples/component/nested.component.ts ***!
    \**************************************************************/

  /*! exports provided: NestedComponent */

  /***/
  function srcAppPagesExamplesComponentNestedComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NestedComponent", function () {
      return NestedComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _AComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./AComponent */
    "./src/app/pages/examples/component/AComponent.ts");

    var NestedComponent = /*#__PURE__*/function (_AComponent__WEBPACK_8) {
      _inherits(NestedComponent, _AComponent__WEBPACK_8);

      var _super8 = _createSuper(NestedComponent);

      function NestedComponent() {
        _classCallCheck(this, NestedComponent);

        return _super8.apply(this, arguments);
      }

      return NestedComponent;
    }(_AComponent__WEBPACK_IMPORTED_MODULE_1__["AComponent"]);

    NestedComponent.ɵfac = function NestedComponent_Factory(t) {
      return ɵNestedComponent_BaseFactory(t || NestedComponent);
    };

    NestedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NestedComponent,
      selectors: [["ng-component"]],
      hostAttrs: [1, "split-example-page"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 24,
      vars: 3,
      consts: [[1, "container"], [3, "type"], [1, "split-example", 2, "height", "400px"], ["direction", "horizontal", "restrictMove", "true", 3, "useTransition"], ["size", "40"], ["direction", "vertical", "restrictMove", "true"], ["size", "60"], ["size", "25"], ["size", "75"]],
      template: function NestedComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "ui-example-title", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ngx-split", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ngx-split-area", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ngx-split", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ngx-split-area");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tiam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ngx-split-area");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eodolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ngx-split-area");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tiam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ngx-split-area", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ngx-split", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ngx-split-area", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tiam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ngx-split-area", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eodolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.testChangeDetectorRun(), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.exampleEnum.NESTED);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("useTransition", true);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });

    var ɵNestedComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](NestedComponent);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NestedComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          host: {
            "class": 'split-example-page'
          },
          template: " {{ testChangeDetectorRun() }}\n    <div class=\"container\">\n      <ui-example-title [type]=\"exampleEnum.NESTED\"></ui-example-title>\n      <div class=\"split-example\" style=\"height: 400px;\">\n        <ngx-split\n          direction=\"horizontal\"\n          restrictMove=\"true\"\n          [useTransition]=\"true\"\n        >\n          <ngx-split-area size=\"40\">\n            <ngx-split direction=\"vertical\" restrictMove=\"true\">\n              <ngx-split-area>\n                <p>\n                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed\n                  do eiusmod tiam, quis nostrud exercitation ullamco laboris\n                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor\n                  in reprehenderit in voluptate velit esse cillum dolore eu\n                  fugiat nulla pariatur.\n                </p>\n              </ngx-split-area>\n              <ngx-split-area>\n                <p>\n                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem\n                  accusantium doloremque laudantium, totam rem aperiam, eaque\n                  ipsa quae ab illo inventore veritatis et quasi architecto\n                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem\n                  quia voluptas sit aspernatur aut odit aut fugit, sed quia\n                  consequuntur magni dolores eodolor sit amet, consectetur,\n                  adipisci velit, sed quia non numquam eius modi tempora\n                  incidunt ut labore et dolore magnam aliquam quaerat\n                  voluptatem. Ut enim ad minima veniam, quis nostrum\n                  exercitationem ullam corporis suscipit laboriosam, nisi ut\n                  aliquid ex ea commodi consequatur? Quis autem vel eum iure\n                  reprehenderit qui in ea voluptate velit esse quam nihil\n                  molestiae consequatur, vel illum qui dolorem eum fugiat quo\n                  voluptas nulla pariatur?\n                </p>\n              </ngx-split-area>\n              <ngx-split-area>\n                <p>\n                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed\n                  do eiusmod tiam, quis nostrud exercitation ullamco laboris\n                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor\n                  in reprehenderit in voluptate velit esse cillum dolore eu\n                  fugiat nulla pariatur.\n                </p>\n              </ngx-split-area>\n            </ngx-split>\n          </ngx-split-area>\n          <ngx-split-area size=\"60\">\n            <ngx-split direction=\"vertical\" restrictMove=\"true\">\n              <ngx-split-area size=\"25\">\n                <p>\n                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed\n                  do eiusmod tiam, quis nostrud exercitation ullamco laboris\n                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor\n                  in reprehenderit in voluptate velit esse cillum dolore eu\n                  fugiat nulla pariatur.\n                </p>\n              </ngx-split-area>\n              <ngx-split-area size=\"75\">\n                <p>\n                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem\n                  accusantium doloremque laudantium, totam rem aperiam, eaque\n                  ipsa quae ab illo inventore veritatis et quasi architecto\n                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem\n                  quia voluptas sit aspernatur aut odit aut fugit, sed quia\n                  consequuntur magni dolores eodolor sit amet, consectetur,\n                  adipisci velit, sed quia non numquam eius modi tempora\n                  incidunt ut labore et dolore magnam aliquam quaerat\n                  voluptatem. Ut enim ad minima veniam, quis nostrum\n                  exercitationem ullam corporis suscipit laboriosam, nisi ut\n                  aliquid ex ea commodi consequatur? Quis autem vel eum iure\n                  reprehenderit qui in ea voluptate velit esse quam nihil\n                  molestiae consequatur, vel illum qui dolorem eum fugiat quo\n                  voluptas nulla pariatur?\n                </p>\n              </ngx-split-area>\n            </ngx-split>\n          </ngx-split-area>\n        </ngx-split>\n      </div>\n    </div>"
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/examples/component/simple.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/pages/examples/component/simple.component.ts ***!
    \**************************************************************/

  /*! exports provided: SimpleComponent */

  /***/
  function srcAppPagesExamplesComponentSimpleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SimpleComponent", function () {
      return SimpleComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ngx_split__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ngx-split */
    "../../libs/ngx-split/src/index.ts");
    /* harmony import */


    var _AComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./AComponent */
    "./src/app/pages/examples/component/AComponent.ts");

    var _c0 = ["split"];
    var _c1 = ["area1"];
    var _c2 = ["area2"];

    var SimpleComponent = /*#__PURE__*/function (_AComponent__WEBPACK_9) {
      _inherits(SimpleComponent, _AComponent__WEBPACK_9);

      var _super9 = _createSuper(SimpleComponent);

      function SimpleComponent() {
        var _this18;

        _classCallCheck(this, SimpleComponent);

        _this18 = _super9.call(this);
        _this18.direction = 'horizontal';
        _this18.sizes = {
          percent: {
            area1: 30,
            area2: 70
          },
          pixel: {
            area1: 120,
            area2: '*',
            area3: 160
          }
        };
        setTimeout(function () {
          console.log('>>> split > ', _this18.split);
          console.log('>>> area1 > ', _this18.area1);
          console.log('>>> area2 > ', _this18.area2);
        }, 1000);
        return _this18;
      }

      _createClass(SimpleComponent, [{
        key: "dragEnd",
        value: function dragEnd(unit, _ref) {
          var sizes = _ref.sizes;

          if (unit === 'percent') {
            this.sizes.percent.area1 = sizes[0];
            this.sizes.percent.area2 = sizes[1];
          } else if (unit === 'pixel') {
            this.sizes.pixel.area1 = sizes[0];
            this.sizes.pixel.area2 = sizes[1];
            this.sizes.pixel.area3 = sizes[2];
          }
        }
      }]);

      return SimpleComponent;
    }(_AComponent__WEBPACK_IMPORTED_MODULE_2__["AComponent"]);

    SimpleComponent.ɵfac = function SimpleComponent_Factory(t) {
      return new (t || SimpleComponent)();
    };

    SimpleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SimpleComponent,
      selectors: [["ng-component"]],
      viewQuery: function SimpleComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.split = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.area1 = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.area2 = _t.first);
        }
      },
      hostAttrs: [1, "split-example-page"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 73,
      vars: 10,
      consts: [[1, "container"], [3, "type"], [1, "split-example", "ex-percent"], ["unit", "percent", 3, "direction", "dragEnd"], ["split", "ngxSplit"], ["size", "30"], ["area1", "ngxSplitArea"], ["size", "70"], ["area2", "ngxSplitArea"], [1, "split-example", "ex-pixel"], ["unit", "pixel", 3, "direction", "dragEnd"], ["size", "120"], ["size", "*"], ["size", "160"], [1, "btns"], [1, "btn", "btn-warning", 3, "click"]],
      template: function SimpleComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "ui-example-title", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Percent mode:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ngx-split", 3, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dragEnd", function SimpleComponent_Template_ngx_split_dragEnd_6_listener($event) {
            return ctx.dragEnd("percent", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ngx-split-area", 5, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Initial size: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "30%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Current size: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tiam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ngx-split-area", 7, 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Initial size: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "70%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Current size: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eodolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Pixel mode:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "ngx-split", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dragEnd", function SimpleComponent_Template_ngx_split_dragEnd_35_listener($event) {
            return ctx.dragEnd("pixel", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "ngx-split-area", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Initial size: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "120px");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Current size: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "ngx-split-area", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Initial size: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " Current size: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eodolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "ngx-split-area", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Initial size: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "160px");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " Current size: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " Eiusmod tiam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SimpleComponent_Template_button_click_71_listener() {
            return ctx.direction = ctx.direction === "horizontal" ? "vertical" : "horizontal";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.testChangeDetectorRun(), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.exampleEnum.SIMPLE);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("direction", ctx.direction);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.sizes.percent.area1, "%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.sizes.percent.area2, "%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("direction", ctx.direction);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.sizes.pixel.area1, "px");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.sizes.pixel.area2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.sizes.pixel.area3, "px");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", "Toggle direction: \"" + ctx.direction + "\"", " ");
        }
      },
      styles: [".btns[_ngcontent-%COMP%] {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        flex-wrap: wrap;\n      }"],
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SimpleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          host: {
            "class": 'split-example-page'
          },
          styles: ["\n      .btns {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        flex-wrap: wrap;\n      }\n    "],
          template: " {{ testChangeDetectorRun() }}\n    <div class=\"container\">\n      <ui-example-title [type]=\"exampleEnum.SIMPLE\"></ui-example-title>\n      <h5>Percent mode:</h5>\n      <div class=\"split-example ex-percent\">\n        <ngx-split\n          unit=\"percent\"\n          [direction]=\"direction\"\n          (dragEnd)=\"dragEnd('percent', $event)\"\n          #split=\"ngxSplit\"\n        >\n          <ngx-split-area size=\"30\" #area1=\"ngxSplitArea\">\n            <h5>Initial size: <b>30%</b></h5>\n            <h5>\n              Current size: <b>{{ sizes.percent.area1 }}%</b>\n            </h5>\n            <p>\n              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n              eiusmod tiam, quis nostrud exercitation ullamco laboris nisi ut\n              aliquip ex ea commodo consequat. Duis aute irure dolor in\n              reprehenderit in voluptate velit esse cillum dolore eu fugiat\n              nulla pariatur.\n            </p>\n          </ngx-split-area>\n          <ngx-split-area size=\"70\" #area2=\"ngxSplitArea\">\n            <h5>Initial size: <b>70%</b></h5>\n            <h5>\n              Current size: <b>{{ sizes.percent.area2 }}%</b>\n            </h5>\n            <p>\n              Sed ut perspiciatis unde omnis iste natus error sit voluptatem\n              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa\n              quae ab illo inventore veritatis et quasi architecto beatae vitae\n              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit\n              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores\n              eodolor sit amet, consectetur, adipisci velit, sed quia non\n              numquam eius modi tempora incidunt ut labore et dolore magnam\n              aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum\n              exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid\n              ex ea commodi consequatur? Quis autem vel eum iure reprehenderit\n              qui in ea voluptate velit esse quam nihil molestiae consequatur,\n              vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?\n            </p>\n          </ngx-split-area>\n        </ngx-split>\n      </div>\n      <h5>Pixel mode:</h5>\n      <div class=\"split-example ex-pixel\">\n        <ngx-split\n          unit=\"pixel\"\n          [direction]=\"direction\"\n          (dragEnd)=\"dragEnd('pixel', $event)\"\n        >\n          <ngx-split-area size=\"120\">\n            <h5>Initial size: <b>120px</b></h5>\n            <h5>\n              Current size: <b>{{ sizes.pixel.area1 }}px</b>\n            </h5>\n            <p>\n              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute\n              irure dolor in reprehenderit in voluptate velit esse cillum dolore\n              eu fugiat nulla pariatur.\n            </p>\n          </ngx-split-area>\n          <ngx-split-area size=\"*\">\n            <h5>Initial size: <b>*</b></h5>\n            <h5>\n              Current size: <b>{{ sizes.pixel.area2 }}</b>\n            </h5>\n            <p>\n              Sed ut perspiciatis unde omnis iste natus error sit voluptatem\n              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa\n              quae ab illo inventore veritatis et quasi architecto beatae vitae\n              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit\n              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores\n              eodolor sit amet, consectetur, adipisci velit, sed quia non\n              numquam eius modi tempora incidunt ut labore et dolore magnam\n              aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum\n              exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid\n              ex ea commodi consequatur? Quis autem vel eum iure reprehenderit\n              qui in ea voluptate velit esse quam nihil molestiae consequatur,\n              vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?\n            </p>\n          </ngx-split-area>\n          <ngx-split-area size=\"160\">\n            <h5>Initial size: <b>160px</b></h5>\n            <h5>\n              Current size: <b>{{ sizes.pixel.area3 }}px</b>\n            </h5>\n            <p>\n              Eiusmod tiam, quis nostrud exercitation ullamco laboris nisi ut\n              aliquip ex ea commodo consequat. Duis aute irure dolor in\n              reprehenderit in voluptate velit esse cillum dolore eu fugiat\n              nulla pariatur.\n            </p>\n          </ngx-split-area>\n        </ngx-split>\n      </div>\n      <br />\n      <div class=\"btns\">\n        <button\n          class=\"btn btn-warning\"\n          (click)=\"\n            direction = direction === 'horizontal' ? 'vertical' : 'horizontal'\n          \"\n        >\n          {{ 'Toggle direction: \"' + direction + '\"' }}\n        </button>\n      </div>\n    </div>"
        }]
      }], function () {
        return [];
      }, {
        split: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['split', {
            "static": false
          }]
        }],
        area1: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['area1', {
            "static": false
          }]
        }],
        area2: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['area2', {
            "static": false
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pages/examples/component/sync.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/pages/examples/component/sync.component.ts ***!
    \************************************************************/

  /*! exports provided: SyncComponent */

  /***/
  function srcAppPagesExamplesComponentSyncComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SyncComponent", function () {
      return SyncComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "../../node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "../../node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var ngx_split__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-split */
    "../../libs/ngx-split/src/index.ts");
    /* harmony import */


    var _AComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./AComponent */
    "./src/app/pages/examples/component/AComponent.ts");
    /* harmony import */


    var _format_date__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../format-date */
    "./src/app/pages/examples/format-date.ts");

    var _c0 = ["mySplitA"];
    var _c1 = ["mySplitB"];
    var _c2 = ["mySplitC"];

    var SyncComponent = /*#__PURE__*/function (_AComponent__WEBPACK_10) {
      _inherits(SyncComponent, _AComponent__WEBPACK_10);

      var _super10 = _createSuper(SyncComponent);

      function SyncComponent() {
        var _this19;

        _classCallCheck(this, SyncComponent);

        _this19 = _super10.apply(this, arguments);
        _this19.sizes = [25, 75];
        return _this19;
      }

      _createClass(SyncComponent, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this20 = this;

          this.sub = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(this.mySplitAEl.dragProgress$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            return {
              name: 'A',
              data: data
            };
          })), this.mySplitBEl.dragProgress$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            return {
              name: 'B',
              data: data
            };
          })), this.mySplitCEl.dragProgress$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            return {
              name: 'C',
              data: data
            };
          }))).subscribe(function (d) {
            if (d.name === 'A') {
              // If split A changed > update BC
              var sizesSplitA = _this20.mySplitAEl.getVisibleAreaSizes(); //d.data.sizes; <-- Could have use these values too


              _this20.mySplitBEl.setVisibleAreaSizes(sizesSplitA);

              _this20.mySplitCEl.setVisibleAreaSizes(sizesSplitA);
            } else if (d.name === 'B') {
              // Else if split B changed > update AC
              var sizesSplitB = _this20.mySplitBEl.getVisibleAreaSizes(); //d.data.sizes; <-- Could have use these values too


              _this20.mySplitAEl.setVisibleAreaSizes(sizesSplitB);

              _this20.mySplitCEl.setVisibleAreaSizes(sizesSplitB);
            } else if (d.name === 'C') {
              // Else if split C changed > update AB
              var sizesSplitC = _this20.mySplitCEl.getVisibleAreaSizes(); //d.data.sizes; <-- Could have use these values too


              _this20.mySplitAEl.setVisibleAreaSizes(sizesSplitC);

              _this20.mySplitBEl.setVisibleAreaSizes(sizesSplitC);
            }

            console.log("".concat(Object(_format_date__WEBPACK_IMPORTED_MODULE_5__["formatDate"])(new Date()), " > dragProgress$ observable emitted, splits synchronized but current component change detection didn't runned! (from split ").concat(d.name, ")"));
          });
        }
      }, {
        key: "test",
        value: function test() {}
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.sub) this.sub.unsubscribe();
        }
      }]);

      return SyncComponent;
    }(_AComponent__WEBPACK_IMPORTED_MODULE_4__["AComponent"]);

    SyncComponent.ɵfac = function SyncComponent_Factory(t) {
      return ɵSyncComponent_BaseFactory(t || SyncComponent);
    };

    SyncComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SyncComponent,
      selectors: [["ng-component"]],
      viewQuery: function SyncComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.mySplitAEl = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.mySplitBEl = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.mySplitCEl = _t.first);
        }
      },
      hostAttrs: [1, "split-example-page"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 31,
      vars: 8,
      consts: [[1, "container"], [3, "type"], [1, "split-example"], ["direction", "vertical"], ["ngx-split-area", "", "size", "20"], ["direction", "horizontal"], ["mySplitA", ""], ["ngx-split-area", "", 3, "size"], [3, "size"], ["mySplitB", ""], ["size", "60"], ["mySplitC", ""], [1, "btn", "btn-warning", 3, "click"]],
      template: function SyncComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "ui-example-title", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ngx-split", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ngx-split", 5, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "A 1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ngx-split-area", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "A 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ngx-split", 5, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "B 1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ngx-split-area", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "B 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ngx-split-area", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ngx-split", 5, 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ngx-split-area", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "C 1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " C 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Open devTools to view console.log() statements.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SyncComponent_Template_button_click_29_listener() {
            return ctx.test();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Trigger change detection ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.testChangeDetectorRun(), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.exampleEnum.SYNC);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("size", ctx.sizes[0]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("size", ctx.sizes[1]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("size", ctx.sizes[0]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("size", ctx.sizes[1]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("size", ctx.sizes[0]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("size", ctx.sizes[1]);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });

    var ɵSyncComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](SyncComponent);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SyncComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          host: {
            "class": 'split-example-page'
          },
          template: " {{ testChangeDetectorRun() }}\n    <div class=\"container\">\n      <ui-example-title [type]=\"exampleEnum.SYNC\"></ui-example-title>\n      <div class=\"split-example\">\n        <ngx-split direction=\"vertical\">\n          <div ngx-split-area size=\"20\">\n            <ngx-split direction=\"horizontal\" #mySplitA>\n              <div ngx-split-area [size]=\"sizes[0]\">A 1</div>\n              <ngx-split-area [size]=\"sizes[1]\">A 2</ngx-split-area>\n            </ngx-split>\n          </div>\n          <div ngx-split-area size=\"20\">\n            <ngx-split direction=\"horizontal\" #mySplitB>\n              <div ngx-split-area [size]=\"sizes[0]\">B 1</div>\n              <ngx-split-area [size]=\"sizes[1]\">B 2</ngx-split-area>\n            </ngx-split>\n          </div>\n          <ngx-split-area size=\"60\">\n            <ngx-split direction=\"horizontal\" #mySplitC>\n              <ngx-split-area [size]=\"sizes[0]\">C 1</ngx-split-area>\n              <div ngx-split-area [size]=\"sizes[1]\">\n                C 2<br />\n                Open devTools to view console.log() statements.<br />\n                <button class=\"btn btn-warning\" (click)=\"test()\">\n                  Trigger change detection\n                </button>\n              </div>\n            </ngx-split>\n          </ngx-split-area>\n        </ngx-split>\n      </div>\n    </div>"
        }]
      }], null, {
        mySplitAEl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['mySplitA', {
            "static": false
          }]
        }],
        mySplitBEl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['mySplitB', {
            "static": false
          }]
        }],
        mySplitCEl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['mySplitC', {
            "static": false
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pages/examples/component/toggling-dom-and-visible.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/pages/examples/component/toggling-dom-and-visible.component.ts ***!
    \********************************************************************************/

  /*! exports provided: TogglingDomAndVisibleComponent */

  /***/
  function srcAppPagesExamplesComponentTogglingDomAndVisibleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TogglingDomAndVisibleComponent", function () {
      return TogglingDomAndVisibleComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _AComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./AComponent */
    "./src/app/pages/examples/component/AComponent.ts");

    function TogglingDomAndVisibleComponent_ngx_split_area_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-split-area", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "A");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", ctx_r0.action.isVisibleA)("order", 0);
      }
    }

    function TogglingDomAndVisibleComponent_ngx_split_area_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-split-area", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "B");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", ctx_r1.action.isVisibleB)("order", 1);
      }
    }

    function TogglingDomAndVisibleComponent_ngx_split_area_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-split-area", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "C");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", ctx_r2.action.isVisibleC)("order", 2);
      }
    }

    var TogglingDomAndVisibleComponent = /*#__PURE__*/function (_AComponent__WEBPACK_11) {
      _inherits(TogglingDomAndVisibleComponent, _AComponent__WEBPACK_11);

      var _super11 = _createSuper(TogglingDomAndVisibleComponent);

      function TogglingDomAndVisibleComponent() {
        var _this21;

        _classCallCheck(this, TogglingDomAndVisibleComponent);

        _this21 = _super11.apply(this, arguments);
        _this21.action = {
          isVisibleA: true,
          isVisibleB: true,
          isVisibleC: true,
          isPresentA: true,
          isPresentB: true,
          isPresentC: true,
          logs: ''
        };
        return _this21;
      }

      _createClass(TogglingDomAndVisibleComponent, [{
        key: "log",
        value: function log(eventName, e) {
          this.action.logs = "".concat(new Date(), ": ").concat(eventName, " > ").concat(e, "\n").concat(this.action.logs);
        }
      }]);

      return TogglingDomAndVisibleComponent;
    }(_AComponent__WEBPACK_IMPORTED_MODULE_1__["AComponent"]);

    TogglingDomAndVisibleComponent.ɵfac = function TogglingDomAndVisibleComponent_Factory(t) {
      return ɵTogglingDomAndVisibleComponent_BaseFactory(t || TogglingDomAndVisibleComponent);
    };

    TogglingDomAndVisibleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TogglingDomAndVisibleComponent,
      selectors: [["ng-component"]],
      hostAttrs: [1, "split-example-page"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 47,
      vars: 24,
      consts: [[1, "container"], [3, "type"], [1, "split-example", "ex1", 2, "height", "150px"], [3, "gutterSize", "dragEnd"], [3, "visible", "order", 4, "ngIf"], [1, "btns"], [1, "btn-group"], [1, "btn", "btn-warning", 3, "click"], ["role", "alert", 1, "alert", "alert-danger"], [3, "visible", "order"]],
      template: function TogglingDomAndVisibleComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "ui-example-title", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ngx-split", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dragEnd", function TogglingDomAndVisibleComponent_Template_ngx_split_dragEnd_4_listener($event) {
            return ctx.log("dragEnd", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TogglingDomAndVisibleComponent_ngx_split_area_5_Template, 3, 2, "ngx-split-area", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TogglingDomAndVisibleComponent_ngx_split_area_6_Template, 3, 2, "ngx-split-area", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TogglingDomAndVisibleComponent_ngx_split_area_7_Template, 3, 2, "ngx-split-area", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Toggle ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "[visible]=\"boolean\"");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " properties:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TogglingDomAndVisibleComponent_Template_label_click_15_listener() {
            return ctx.action.isVisibleA = !ctx.action.isVisibleA;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TogglingDomAndVisibleComponent_Template_label_click_17_listener() {
            return ctx.action.isVisibleB = !ctx.action.isVisibleB;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TogglingDomAndVisibleComponent_Template_label_click_19_listener() {
            return ctx.action.isVisibleC = !ctx.action.isVisibleC;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Toggle ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "*ngIf=\"boolean\"");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " properties:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TogglingDomAndVisibleComponent_Template_label_click_28_listener() {
            return ctx.action.isPresentA = !ctx.action.isPresentA;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TogglingDomAndVisibleComponent_Template_label_click_30_listener() {
            return ctx.action.isPresentB = !ctx.action.isPresentB;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TogglingDomAndVisibleComponent_Template_label_click_32_listener() {
            return ctx.action.isPresentC = !ctx.action.isPresentC;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Warning:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "[visible]=\"false\"");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " only hides elements and don't remove it from the DOM, It could lead to useless change detection processing.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Use of ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "*ngIf=\"false\"");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " should be the default option unless you have reasons to keep DOM elements. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.testChangeDetectorRun(), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.exampleEnum.TOGGLE);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("gutterSize", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.action.isPresentA);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.action.isPresentB);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.action.isPresentC);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", !ctx.action.isVisibleA);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]("areaA: " + ctx.action.isVisibleA);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", !ctx.action.isVisibleB);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]("areaB: " + ctx.action.isVisibleB);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", !ctx.action.isVisibleC);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]("areaC: " + ctx.action.isVisibleC);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", !ctx.action.isPresentA);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]("areaA: " + ctx.action.isPresentA);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", !ctx.action.isPresentB);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]("areaB: " + ctx.action.isPresentB);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", !ctx.action.isPresentC);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]("areaC: " + ctx.action.isPresentC);
        }
      },
      styles: [".btns[_ngcontent-%COMP%] {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        flex-wrap: wrap;\n      }"],
      changeDetection: 0
    });

    var ɵTogglingDomAndVisibleComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](TogglingDomAndVisibleComponent);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TogglingDomAndVisibleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          host: {
            "class": 'split-example-page'
          },
          styles: ["\n      .btns {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        flex-wrap: wrap;\n      }\n    "],
          template: " {{ testChangeDetectorRun() }}\n    <div class=\"container\">\n      <ui-example-title [type]=\"exampleEnum.TOGGLE\"></ui-example-title>\n      <div class=\"split-example ex1\" style=\"height: 150px;\">\n        <ngx-split [gutterSize]=\"15\" (dragEnd)=\"log('dragEnd', $event)\">\n          <ngx-split-area\n            *ngIf=\"action.isPresentA\"\n            [visible]=\"action.isVisibleA\"\n            [order]=\"0\"\n          >\n            <p>A</p>\n          </ngx-split-area>\n          <ngx-split-area\n            *ngIf=\"action.isPresentB\"\n            [visible]=\"action.isVisibleB\"\n            [order]=\"1\"\n          >\n            <p>B</p>\n          </ngx-split-area>\n          <ngx-split-area\n            *ngIf=\"action.isPresentC\"\n            [visible]=\"action.isVisibleC\"\n            [order]=\"2\"\n          >\n            <p>C</p>\n          </ngx-split-area>\n        </ngx-split>\n      </div>\n      <p>Toggle <code>[visible]=\"boolean\"</code> properties:</p>\n      <div class=\"btns\">\n        <div class=\"btn-group\">\n          <label\n            class=\"btn btn-warning\"\n            [class.active]=\"!action.isVisibleA\"\n            (click)=\"action.isVisibleA = !action.isVisibleA\"\n            >{{ 'areaA: ' + action.isVisibleA }}</label\n          >\n          <label\n            class=\"btn btn-warning\"\n            [class.active]=\"!action.isVisibleB\"\n            (click)=\"action.isVisibleB = !action.isVisibleB\"\n            >{{ 'areaB: ' + action.isVisibleB }}</label\n          >\n          <label\n            class=\"btn btn-warning\"\n            [class.active]=\"!action.isVisibleC\"\n            (click)=\"action.isVisibleC = !action.isVisibleC\"\n            >{{ 'areaC: ' + action.isVisibleC }}</label\n          >\n        </div>\n      </div>\n      <p>Toggle <code>*ngIf=\"boolean\"</code> properties:</p>\n      <div class=\"btns\">\n        <div class=\"btn-group\">\n          <label\n            class=\"btn btn-warning\"\n            [class.active]=\"!action.isPresentA\"\n            (click)=\"action.isPresentA = !action.isPresentA\"\n            >{{ 'areaA: ' + action.isPresentA }}</label\n          >\n          <label\n            class=\"btn btn-warning\"\n            [class.active]=\"!action.isPresentB\"\n            (click)=\"action.isPresentB = !action.isPresentB\"\n            >{{ 'areaB: ' + action.isPresentB }}</label\n          >\n          <label\n            class=\"btn btn-warning\"\n            [class.active]=\"!action.isPresentC\"\n            (click)=\"action.isPresentC = !action.isPresentC\"\n            >{{ 'areaC: ' + action.isPresentC }}</label\n          >\n        </div>\n      </div>\n      <br />\n      <div class=\"alert alert-danger\" role=\"alert\">\n        <b>Warning:</b><br /><code>[visible]=\"false\"</code> only hides elements\n        and don't remove it from the DOM, It could lead to useless change\n        detection processing.<br />Use of <code>*ngIf=\"false\"</code> should be\n        the default option unless you have reasons to keep DOM elements.\n      </div>\n    </div>"
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/examples/component/transitions.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/examples/component/transitions.component.ts ***!
    \*******************************************************************/

  /*! exports provided: TransitionsComponent */

  /***/
  function srcAppPagesExamplesComponentTransitionsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TransitionsComponent", function () {
      return TransitionsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _AComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./AComponent */
    "./src/app/pages/examples/component/AComponent.ts");
    /* harmony import */


    var _format_date__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../format-date */
    "./src/app/pages/examples/format-date.ts");

    var _c0 = ["logs"];

    function TransitionsComponent_li_39_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var l_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", l_r2.type);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](l_r2.text);
      }
    }

    var TransitionsComponent = /*#__PURE__*/function (_AComponent__WEBPACK_12) {
      _inherits(TransitionsComponent, _AComponent__WEBPACK_12);

      var _super12 = _createSuper(TransitionsComponent);

      function TransitionsComponent() {
        var _this22;

        _classCallCheck(this, TransitionsComponent);

        _this22 = _super12.apply(this, arguments);
        _this22.action = {
          a1s: 25,
          a2s: 50,
          a3s: 25,
          a1v: true,
          a2v: true,
          a3v: true,
          useTransition: true
        };
        _this22.logMessages = []; //

        _this22.only = 0; //

        _this22.keepA = true;
        _this22.keepB = true;
        _this22.keepC = true;
        return _this22;
      }

      _createClass(TransitionsComponent, [{
        key: "log",
        value: function log(e) {
          var _this23 = this;

          this.logMessages.push({
            type: 'transitionEnd',
            text: "".concat(Object(_format_date__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(new Date()), " > transitionEnd event > ").concat(e)
          });
          setTimeout(function () {
            if (_this23.logsEl.nativeElement.scroll) {
              _this23.logsEl.nativeElement.scroll({
                top: _this23.logMessages.length * 30
              });
            }
          });
        }
      }, {
        key: "left",
        value: function left() {
          switch (this.only) {
            case 0:
            case 2:
            case 3:
              this.only = 1;
              return;

            case 1:
              this.only = 0;
              return;
          }
        }
      }, {
        key: "center",
        value: function center() {
          switch (this.only) {
            case 0:
            case 1:
            case 3:
              this.only = 2;
              return;

            case 2:
              this.only = 0;
              return;
          }
        }
      }, {
        key: "right",
        value: function right() {
          switch (this.only) {
            case 0:
            case 1:
            case 2:
              this.only = 3;
              return;

            case 3:
              this.only = 0;
              return;
          }
        }
      }]);

      return TransitionsComponent;
    }(_AComponent__WEBPACK_IMPORTED_MODULE_1__["AComponent"]);

    TransitionsComponent.ɵfac = function TransitionsComponent_Factory(t) {
      return ɵTransitionsComponent_BaseFactory(t || TransitionsComponent);
    };

    TransitionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TransitionsComponent,
      selectors: [["ng-component"]],
      viewQuery: function TransitionsComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.logsEl = _t.first);
        }
      },
      hostAttrs: [1, "split-example-page"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 138,
      vars: 53,
      consts: [[1, "container"], [3, "type"], [1, "split-example"], ["direction", "horizontal", "disabled", "true", 3, "useTransition", "dragEnd", "transitionEnd"], ["order", "1", 3, "visible", "size"], ["order", "2", 3, "visible", "size"], ["order", "3", 3, "visible", "size"], [1, "btns"], [1, "btn", "btn-warning", 3, "click"], [1, "btn-group"], [1, "logs"], ["logs", ""], [3, "ngClass", 4, "ngFor", "ngForOf"], [1, "split-example", "ex2", 2, "height", "150px"], ["useTransition", "true", "unit", "pixel"], ["size", "200", "minSize", "200", "order", "1", 3, "visible"], ["size", "*", "order", "2", 3, "visible"], ["size", "200", "minSize", "200", "order", "3", 3, "visible"], ["useTransition", "true", "unit", "percent"], ["size", "30", "minSize", "30", "order", "1", 3, "visible"], ["size", "40", "order", "2", 3, "visible"], ["size", "30", "minSize", "30", "order", "3", 3, "visible"], [3, "ngClass"]],
      template: function TransitionsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "ui-example-title", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ngx-split", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dragEnd", function TransitionsComponent_Template_ngx_split_dragEnd_4_listener($event) {
            ctx.action.a1s = $event.sizes[0];
            ctx.action.a2s = $event.sizes[1];
            return ctx.action.a3s = $event.sizes[2];
          })("transitionEnd", function TransitionsComponent_Template_ngx_split_transitionEnd_4_listener($event) {
            return ctx.log($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ngx-split-area", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tiam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ngx-split-area", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eodolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ngx-split-area", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eodolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TransitionsComponent_Template_button_click_17_listener() {
            return ctx.action.useTransition = !ctx.action.useTransition;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TransitionsComponent_Template_label_click_20_listener() {
            return ctx.action.a1v = !ctx.action.a1v;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TransitionsComponent_Template_label_click_22_listener() {
            return ctx.action.a2v = !ctx.action.a2v;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TransitionsComponent_Template_label_click_24_listener() {
            return ctx.action.a3v = !ctx.action.a3v;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TransitionsComponent_Template_label_click_27_listener() {
            ctx.action.a1s = 25;
            ctx.action.a2s = 50;
            return ctx.action.a3s = 25;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Set sizes to 25/50/25");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TransitionsComponent_Template_label_click_29_listener() {
            ctx.action.a1s = 40;
            ctx.action.a2s = 20;
            return ctx.action.a3s = 40;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Set sizes to 40/20/40");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Events ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "(transitionEnd)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, ":");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "ul", null, 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, TransitionsComponent_li_39_Template, 2, 2, "li", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "ngx-split", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "ngx-split-area", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TransitionsComponent_Template_button_click_46_listener() {
            return ctx.left();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "size: 200px");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "minSize: 200px");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "ngx-split-area", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TransitionsComponent_Template_button_click_53_listener() {
            return ctx.center();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "size: *");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "ngx-split-area", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TransitionsComponent_Template_button_click_58_listener() {
            return ctx.right();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "size: 200px");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "minSize: 200px");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "ngx-split", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "ngx-split-area", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TransitionsComponent_Template_button_click_67_listener() {
            return ctx.left();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "size: 30%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "minSize: 30%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "ngx-split-area", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TransitionsComponent_Template_button_click_74_listener() {
            return ctx.center();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "size: 40%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "ngx-split-area", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TransitionsComponent_Template_button_click_79_listener() {
            return ctx.right();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "size: 30%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "minSize: 30%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TransitionsComponent_Template_label_click_90_listener() {
            return ctx.keepA = !ctx.keepA;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TransitionsComponent_Template_label_click_92_listener() {
            return ctx.keepB = !ctx.keepB;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TransitionsComponent_Template_label_click_94_listener() {
            return ctx.keepC = !ctx.keepC;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "ngx-split", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "ngx-split-area", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "A");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "size: 200px");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "minSize: 200px");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "ngx-split-area", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "B");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "size: *");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "ngx-split-area", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "C");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "size: 200px");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "minSize: 200px");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "ngx-split", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "ngx-split-area", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "A");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "size: 30%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "minSize: 30%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "ngx-split-area", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "B");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "size: 40%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "ngx-split-area", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "C");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "size: 30%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](136, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "minSize: 30%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.testChangeDetectorRun(), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.exampleEnum.TRANSITION);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("useTransition", ctx.action.useTransition);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", ctx.action.a1v)("size", ctx.action.a1s);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", ctx.action.a2v)("size", ctx.action.a2s);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", ctx.action.a3v)("size", ctx.action.a3s);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", !ctx.action.useTransition);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", "useTransition: " + ctx.action.useTransition, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", !ctx.action.a1v);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]("area1: " + ctx.action.a1v);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", !ctx.action.a2v);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]("area2: " + ctx.action.a2v);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", !ctx.action.a3v);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]("area3: " + ctx.action.a3v);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx.action.a1s === 25 || !ctx.action.a1v || !ctx.action.a2v || !ctx.action.a3v);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx.action.a1s === 40 || !ctx.action.a1v || !ctx.action.a2v || !ctx.action.a3v);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.logMessages);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", ctx.only === 1 || ctx.only === 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.only === 1 ? "LEFT \u2B05\uFE0F" : "LEFT \u27A1", " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", ctx.only === 2 || ctx.only === 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.only === 2 ? "\u27A1 \uFE0FCENTER \u2B05" : "\uFE0F\u2B05 \uFE0FCENTER \u27A1", " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", ctx.only === 3 || ctx.only === 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.only === 3 ? "\u27A1 RIGHT" : "\u2B05\uFE0F RIGHT", " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", ctx.only === 1 || ctx.only === 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.only === 1 ? "LEFT \u2B05\uFE0F" : "LEFT \u27A1", " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", ctx.only === 2 || ctx.only === 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.only === 2 ? "\u27A1 \uFE0FCENTER \u2B05" : "\uFE0F\u2B05 \uFE0FCENTER \u27A1", " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", ctx.only === 3 || ctx.only === 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.only === 3 ? "\u27A1 RIGHT" : "\u2B05\uFE0F RIGHT", " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", !ctx.keepA);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]("A: " + ctx.keepA);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", !ctx.keepB);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]("B: " + ctx.keepB);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", !ctx.keepC);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]("C: " + ctx.keepC);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", ctx.keepA);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", ctx.keepB);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", ctx.keepC);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", ctx.keepA);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", ctx.keepB);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", ctx.keepC);
        }
      },
      styles: ["button[_ngcontent-%COMP%] {\n        margin: 4px;\n      }\n\n      .btns[_ngcontent-%COMP%] {\n        display: flex;\n        justify-content: space-around;\n        flex-wrap: wrap;\n      }\n      .btns[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        margin-bottom: 10px;\n      }\n      .btns[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n        margin-bottom: 10px;\n      }\n\n      .btns[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(1) {\n        flex: 1 1 20%;\n      }\n      .btns[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(2) {\n        flex: 1 1 40%;\n      }\n      .btns[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(3) {\n        flex: 1 1 40%;\n      }\n      .logs[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n        margin-bottom: 5px;\n      }\n      .logs[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%] {\n        height: 200px;\n        width: 100%;\n        overflow-y: scroll;\n        overflow-x: hidden;\n        border: 1px solid #bfbfbf;\n        background-color: #e8e8e8;\n      }\n\n      .ngx-split-area[_ngcontent-%COMP%] {\n        background: lightgrey;\n      }\n\n      .ngx-split-area.ngx-min[_ngcontent-%COMP%] {\n        background: green;\n      }\n\n      .ngx-split-area.ngx-max[_ngcontent-%COMP%] {\n        background: red;\n      }\n\n      [_nghost-%COMP%]   .ex2[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n        width: 100%;\n      }\n\n      [_nghost-%COMP%]   .ex2[_ngcontent-%COMP%]    \n        .ngx-transition.ngx-init:not(.ngx-dragging)\n        > .ngx-split-area, [_nghost-%COMP%]    \n        .ngx-transition.ngx-init:not(.ngx-dragging)\n        > .ngx-split-gutter {\n        transition: flex-basis 1s !important;\n      }"],
      changeDetection: 0
    });

    var ɵTransitionsComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](TransitionsComponent);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TransitionsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          host: {
            "class": 'split-example-page'
          },
          styles: ["\n      button {\n        margin: 4px;\n      }\n\n      .btns {\n        display: flex;\n        justify-content: space-around;\n        flex-wrap: wrap;\n      }\n      .btns > div {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        margin-bottom: 10px;\n      }\n      .btns > div > button {\n        margin-bottom: 10px;\n      }\n\n      .btns > div:nth-child(1) {\n        flex: 1 1 20%;\n      }\n      .btns > div:nth-child(2) {\n        flex: 1 1 40%;\n      }\n      .btns > div:nth-child(3) {\n        flex: 1 1 40%;\n      }\n      .logs > p {\n        margin-bottom: 5px;\n      }\n      .logs > ul {\n        height: 200px;\n        width: 100%;\n        overflow-y: scroll;\n        overflow-x: hidden;\n        border: 1px solid #bfbfbf;\n        background-color: #e8e8e8;\n      }\n\n      .ngx-split-area {\n        background: lightgrey;\n      }\n\n      .ngx-split-area.ngx-min {\n        background: green;\n      }\n\n      .ngx-split-area.ngx-max {\n        background: red;\n      }\n\n      :host .ex2 button {\n        width: 100%;\n      }\n\n      :host\n        .ex2\n        ::ng-deep\n        .ngx-transition.ngx-init:not(.ngx-dragging)\n        > .ngx-split-area,\n      :host\n        ::ng-deep\n        .ngx-transition.ngx-init:not(.ngx-dragging)\n        > .ngx-split-gutter {\n        transition: flex-basis 1s !important;\n      }\n    "],
          template: " {{ testChangeDetectorRun() }}\n    <div class=\"container\">\n      <ui-example-title [type]=\"exampleEnum.TRANSITION\"></ui-example-title>\n      <div class=\"split-example\">\n        <ngx-split\n          direction=\"horizontal\"\n          disabled=\"true\"\n          [useTransition]=\"action.useTransition\"\n          (dragEnd)=\"\n            action.a1s = $event.sizes[0];\n            action.a2s = $event.sizes[1];\n            action.a3s = $event.sizes[2]\n          \"\n          (transitionEnd)=\"log($event)\"\n        >\n          <ngx-split-area [visible]=\"action.a1v\" [size]=\"action.a1s\" order=\"1\">\n            <p>\n              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n              eiusmod tiam, quis nostrud exercitation ullamco laboris nisi ut\n              aliquip ex ea commodo consequat. Duis aute irure dolor in\n              reprehenderit in voluptate velit esse cillum dolore eu fugiat\n              nulla pariatur.\n            </p>\n          </ngx-split-area>\n          <ngx-split-area [visible]=\"action.a2v\" [size]=\"action.a2s\" order=\"2\">\n            <p>\n              Sed ut perspiciatis unde omnis iste natus error sit voluptatem\n              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa\n              quae ab illo inventore veritatis et quasi architecto beatae vitae\n              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit\n              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores\n              eodolor sit amet, consectetur, adipisci velit, sed quia non\n              numquam eius modi tempora incidunt ut labore et dolore magnam\n              aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum\n              exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid\n              ex ea commodi consequatur? Quis autem vel eum iure reprehenderit\n              qui in ea voluptate velit esse quam nihil molestiae consequatur,\n              vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?\n            </p>\n          </ngx-split-area>\n          <ngx-split-area [visible]=\"action.a3v\" [size]=\"action.a3s\" order=\"3\">\n            <p>\n              Sed ut perspiciatis unde omnis iste natus error sit voluptatem\n              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa\n              quae ab illo inventore veritatis et quasi architecto beatae vitae\n              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit\n              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores\n              eodolor sit amet, consectetur, adipisci velit, sed quia non\n              numquam eius modi tempora incidunt ut labore et dolore magnam\n              aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum\n              exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid\n              ex ea commodi consequatur? Quis autem vel eum iure reprehenderit\n              qui in ea voluptate velit esse quam nihil molestiae consequatur,\n              vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?\n            </p>\n          </ngx-split-area>\n        </ngx-split>\n      </div>\n      <br />\n      <div class=\"btns\">\n        <div>\n          <button\n            class=\"btn btn-warning\"\n            [class.active]=\"!action.useTransition\"\n            (click)=\"action.useTransition = !action.useTransition\"\n          >\n            {{ 'useTransition: ' + action.useTransition }}\n          </button>\n        </div>\n        <div class=\"btn-group\">\n          <label\n            class=\"btn btn-warning\"\n            [class.active]=\"!action.a1v\"\n            (click)=\"action.a1v = !action.a1v\"\n            >{{ 'area1: ' + action.a1v }}</label\n          >\n          <label\n            class=\"btn btn-warning\"\n            [class.active]=\"!action.a2v\"\n            (click)=\"action.a2v = !action.a2v\"\n            >{{ 'area2: ' + action.a2v }}</label\n          >\n          <label\n            class=\"btn btn-warning\"\n            [class.active]=\"!action.a3v\"\n            (click)=\"action.a3v = !action.a3v\"\n            >{{ 'area3: ' + action.a3v }}</label\n          >\n        </div>\n        <div class=\"btn-group\">\n          <label\n            class=\"btn btn-warning\"\n            [class.disabled]=\"\n              action.a1s === 25 || !action.a1v || !action.a2v || !action.a3v\n            \"\n            (click)=\"action.a1s = 25; action.a2s = 50; action.a3s = 25\"\n            >Set sizes to 25/50/25</label\n          >\n          <label\n            class=\"btn btn-warning\"\n            [class.disabled]=\"\n              action.a1s === 40 || !action.a1v || !action.a2v || !action.a3v\n            \"\n            (click)=\"action.a1s = 40; action.a2s = 20; action.a3s = 40\"\n            >Set sizes to 40/20/40</label\n          >\n        </div>\n      </div>\n      <div class=\"logs\">\n        <p>Events <code>(transitionEnd)</code>:</p>\n        <ul #logs>\n          <li *ngFor=\"let l of logMessages\" [ngClass]=\"l.type\">{{ l.text }}</li>\n        </ul>\n      </div>\n      <br />\n      <hr />\n      <br />\n      <div class=\"split-example ex2\" style=\"height: 150px;\">\n        <ngx-split useTransition=\"true\" unit=\"pixel\">\n          <ngx-split-area\n            size=\"200\"\n            minSize=\"200\"\n            order=\"1\"\n            [visible]=\"only === 1 || only === 0\"\n          >\n            <button (click)=\"left()\" class=\"btn btn-warning\">\n              {{ only === 1 ? 'LEFT \u2B05\uFE0F' : 'LEFT \u27A1' }}\n            </button>\n            <p>size: 200px<br />minSize: 200px</p>\n          </ngx-split-area>\n          <ngx-split-area\n            size=\"*\"\n            order=\"2\"\n            [visible]=\"only === 2 || only === 0\"\n          >\n            <button (click)=\"center()\" class=\"btn btn-warning\">\n              {{ only === 2 ? '\u27A1 \uFE0FCENTER \u2B05' : '\uFE0F\u2B05 \uFE0FCENTER \u27A1' }}\n            </button>\n            <p>size: *</p>\n          </ngx-split-area>\n          <ngx-split-area\n            size=\"200\"\n            minSize=\"200\"\n            order=\"3\"\n            [visible]=\"only === 3 || only === 0\"\n          >\n            <button (click)=\"right()\" class=\"btn btn-warning\">\n              {{ only === 3 ? '\u27A1 RIGHT' : '\u2B05\uFE0F RIGHT' }}\n            </button>\n            <p>size: 200px<br />minSize: 200px</p>\n          </ngx-split-area>\n        </ngx-split>\n      </div>\n      <div class=\"split-example ex2\" style=\"height: 150px;\">\n        <ngx-split useTransition=\"true\" unit=\"percent\">\n          <ngx-split-area\n            size=\"30\"\n            minSize=\"30\"\n            order=\"1\"\n            [visible]=\"only === 1 || only === 0\"\n          >\n            <button (click)=\"left()\" class=\"btn btn-warning\">\n              {{ only === 1 ? 'LEFT \u2B05\uFE0F' : 'LEFT \u27A1' }}\n            </button>\n            <p>size: 30%<br />minSize: 30%</p>\n          </ngx-split-area>\n          <ngx-split-area\n            size=\"40\"\n            order=\"2\"\n            [visible]=\"only === 2 || only === 0\"\n          >\n            <button (click)=\"center()\" class=\"btn btn-warning\">\n              {{ only === 2 ? '\u27A1 \uFE0FCENTER \u2B05' : '\uFE0F\u2B05 \uFE0FCENTER \u27A1' }}\n            </button>\n            <p>size: 40%</p>\n          </ngx-split-area>\n          <ngx-split-area\n            size=\"30\"\n            minSize=\"30\"\n            order=\"3\"\n            [visible]=\"only === 3 || only === 0\"\n          >\n            <button (click)=\"right()\" class=\"btn btn-warning\">\n              {{ only === 3 ? '\u27A1 RIGHT' : '\u2B05\uFE0F RIGHT' }}\n            </button>\n            <p>size: 30%<br />minSize: 30%</p>\n          </ngx-split-area>\n        </ngx-split>\n      </div>\n      <br />\n      <hr />\n      <br />\n      <div class=\"btns\">\n        <div class=\"btn-group\">\n          <label\n            class=\"btn btn-warning\"\n            [class.active]=\"!keepA\"\n            (click)=\"keepA = !keepA\"\n            >{{ 'A: ' + keepA }}</label\n          >\n          <label\n            class=\"btn btn-warning\"\n            [class.active]=\"!keepB\"\n            (click)=\"keepB = !keepB\"\n            >{{ 'B: ' + keepB }}</label\n          >\n          <label\n            class=\"btn btn-warning\"\n            [class.active]=\"!keepC\"\n            (click)=\"keepC = !keepC\"\n            >{{ 'C: ' + keepC }}</label\n          >\n        </div>\n      </div>\n      <div class=\"split-example ex2\" style=\"height: 150px;\">\n        <ngx-split useTransition=\"true\" unit=\"pixel\">\n          <ngx-split-area size=\"200\" minSize=\"200\" order=\"1\" [visible]=\"keepA\">\n            <p>A<br />size: 200px<br />minSize: 200px</p>\n          </ngx-split-area>\n          <ngx-split-area size=\"*\" order=\"2\" [visible]=\"keepB\">\n            <p>B<br />size: *</p>\n          </ngx-split-area>\n          <ngx-split-area size=\"200\" minSize=\"200\" order=\"3\" [visible]=\"keepC\">\n            <p>C<br />size: 200px<br />minSize: 200px</p>\n          </ngx-split-area>\n        </ngx-split>\n      </div>\n      <div class=\"split-example ex2\" style=\"height: 150px;\">\n        <ngx-split useTransition=\"true\" unit=\"percent\">\n          <ngx-split-area size=\"30\" minSize=\"30\" order=\"1\" [visible]=\"keepA\">\n            <p>A<br />size: 30%<br />minSize: 30%</p>\n          </ngx-split-area>\n          <ngx-split-area size=\"40\" order=\"2\" [visible]=\"keepB\">\n            <p>B<br />size: 40%</p>\n          </ngx-split-area>\n          <ngx-split-area size=\"30\" minSize=\"30\" order=\"3\" [visible]=\"keepC\">\n            <p>C<br />size: 30%<br />minSize: 30%</p>\n          </ngx-split-area>\n        </ngx-split>\n      </div>\n    </div>"
        }]
      }], null, {
        logsEl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['logs', {
            "static": false
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pages/examples/component/workspace-localstorage.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/pages/examples/component/workspace-localstorage.component.ts ***!
    \******************************************************************************/

  /*! exports provided: WorkspaceLocalstorageComponent */

  /***/
  function srcAppPagesExamplesComponentWorkspaceLocalstorageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WorkspaceLocalstorageComponent", function () {
      return WorkspaceLocalstorageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! lodash */
    "../../node_modules/lodash/lodash.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _AComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./AComponent */
    "./src/app/pages/examples/component/AComponent.ts");

    function WorkspaceLocalstorageComponent_ngx_split_0_ng_template_1_ngx_split_area_0_ng_template_2_ngx_split_area_0_div_2_ng_template_6_ng_template_0_button_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WorkspaceLocalstorageComponent_ngx_split_0_ng_template_1_ngx_split_area_0_ng_template_2_ngx_split_area_0_div_2_ng_template_6_ng_template_0_button_0_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

          var r_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](8);

          r_r14.visible = !r_r14.visible;
          return ctx_r16.refreshColumnVisibility();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var r_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", !r_r14.visible);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", r_r14.type, " ");
      }
    }

    function WorkspaceLocalstorageComponent_ngx_split_0_ng_template_1_ngx_split_area_0_ng_template_2_ngx_split_area_0_div_2_ng_template_6_ng_template_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, WorkspaceLocalstorageComponent_ngx_split_0_ng_template_1_ngx_split_area_0_ng_template_2_ngx_split_area_0_div_2_ng_template_6_ng_template_0_button_0_Template, 2, 3, "button", 12);
      }

      if (rf & 2) {
        var r_r14 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", r_r14.type !== "doc");
      }
    }

    function WorkspaceLocalstorageComponent_ngx_split_0_ng_template_1_ngx_split_area_0_ng_template_2_ngx_split_area_0_div_2_ng_template_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, WorkspaceLocalstorageComponent_ngx_split_0_ng_template_1_ngx_split_area_0_ng_template_2_ngx_split_area_0_div_2_ng_template_6_ng_template_0_Template, 1, 1, "ng-template", 2);
      }

      if (rf & 2) {
        var c_r12 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", c_r12.rows);
      }
    }

    function WorkspaceLocalstorageComponent_ngx_split_0_ng_template_1_ngx_split_area_0_ng_template_2_ngx_split_area_0_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ui-example-title", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " All areas size and visibility are saved to localStorage.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Toggle areas visibility using following buttons: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, WorkspaceLocalstorageComponent_ngx_split_0_ng_template_1_ngx_split_area_0_ng_template_2_ngx_split_area_0_div_2_ng_template_6_Template, 1, 1, "ng-template", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WorkspaceLocalstorageComponent_ngx_split_0_ng_template_1_ngx_split_area_0_ng_template_2_ngx_split_area_0_div_2_Template_button_click_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6);

          return ctx_r20.toggleDisabled();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WorkspaceLocalstorageComponent_ngx_split_0_ng_template_1_ngx_split_area_0_ng_template_2_ngx_split_area_0_div_2_Template_button_click_11_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6);

          return ctx_r22.resetConfig();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Reset localStorage ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx_r9.exampleEnum.WORKSPACE);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r9.config.columns);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", !ctx_r9.config.disabled);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", "isDisabled: " + ctx_r9.config.disabled, " ");
      }
    }

    function WorkspaceLocalstorageComponent_ngx_split_0_ng_template_1_ngx_split_area_0_ng_template_2_ngx_split_area_0_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var row_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r6.type);
      }
    }

    function WorkspaceLocalstorageComponent_ngx_split_0_ng_template_1_ngx_split_area_0_ng_template_2_ngx_split_area_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-split-area", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, WorkspaceLocalstorageComponent_ngx_split_0_ng_template_1_ngx_split_area_0_ng_template_2_ngx_split_area_0_div_2_Template, 13, 5, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, WorkspaceLocalstorageComponent_ngx_split_0_ng_template_1_ngx_split_area_0_ng_template_2_ngx_split_area_0_div_3_Template, 3, 1, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var irow_r7 = ctx_r24.index;
        var row_r6 = ctx_r24.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("order", irow_r7)("size", row_r6.size);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", row_r6.type);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "doc");
      }
    }

    function WorkspaceLocalstorageComponent_ngx_split_0_ng_template_1_ngx_split_area_0_ng_template_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, WorkspaceLocalstorageComponent_ngx_split_0_ng_template_1_ngx_split_area_0_ng_template_2_ngx_split_area_0_Template, 4, 4, "ngx-split-area", 3);
      }

      if (rf & 2) {
        var row_r6 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", row_r6.visible);
      }
    }

    function WorkspaceLocalstorageComponent_ngx_split_0_ng_template_1_ngx_split_area_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-split-area", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ngx-split", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dragEnd", function WorkspaceLocalstorageComponent_ngx_split_0_ng_template_1_ngx_split_area_0_Template_ngx_split_dragEnd_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);

          var icol_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r25.onDragEnd(icol_r3, $event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, WorkspaceLocalstorageComponent_ngx_split_0_ng_template_1_ngx_split_area_0_ng_template_2_Template, 1, 1, "ng-template", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var icol_r3 = ctx_r28.index;
        var column_r2 = ctx_r28.$implicit;

        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("order", icol_r3)("size", column_r2.size);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r4.config.disabled);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", column_r2.rows);
      }
    }

    function WorkspaceLocalstorageComponent_ngx_split_0_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, WorkspaceLocalstorageComponent_ngx_split_0_ng_template_1_ngx_split_area_0_Template, 3, 4, "ngx-split-area", 3);
      }

      if (rf & 2) {
        var column_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", column_r2.visible);
      }
    }

    function WorkspaceLocalstorageComponent_ngx_split_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-split", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dragEnd", function WorkspaceLocalstorageComponent_ngx_split_0_Template_ngx_split_dragEnd_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);

          var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r29.onDragEnd(0 - 1, $event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WorkspaceLocalstorageComponent_ngx_split_0_ng_template_1_Template, 1, 1, "ng-template", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r0.config.disabled);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.config.columns);
      }
    }

    var defaultConfig = {
      columns: [{
        visible: true,
        size: 25,
        rows: [{
          visible: true,
          size: 25,
          type: 'A'
        }, {
          visible: true,
          size: 75,
          type: 'B'
        }]
      }, {
        visible: true,
        size: 50,
        rows: [{
          visible: true,
          size: 60,
          type: 'doc'
        }, {
          visible: true,
          size: 40,
          type: 'C'
        }]
      }, {
        visible: true,
        size: 25,
        rows: [{
          visible: true,
          size: 20,
          type: 'D'
        }, {
          visible: true,
          size: 30,
          type: 'E'
        }, {
          visible: true,
          size: 50,
          type: 'F'
        }]
      }],
      disabled: false
    };

    var WorkspaceLocalstorageComponent = /*#__PURE__*/function (_AComponent__WEBPACK_13) {
      _inherits(WorkspaceLocalstorageComponent, _AComponent__WEBPACK_13);

      var _super13 = _createSuper(WorkspaceLocalstorageComponent);

      function WorkspaceLocalstorageComponent() {
        var _this24;

        _classCallCheck(this, WorkspaceLocalstorageComponent);

        _this24 = _super13.apply(this, arguments);
        _this24.localStorageName = 'ngx-split-ws';
        _this24.config = null;
        return _this24;
      }

      _createClass(WorkspaceLocalstorageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (localStorage.getItem(this.localStorageName)) {
            this.config = JSON.parse(localStorage.getItem(this.localStorageName));
          } else {
            this.resetConfig();
          }
        }
      }, {
        key: "resetConfig",
        value: function resetConfig() {
          this.config = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"])(defaultConfig);
          localStorage.removeItem(this.localStorageName);
        }
      }, {
        key: "onDragEnd",
        value: function onDragEnd(columnindex, e) {
          // Column dragged
          if (columnindex === -1) {
            // Set size for all visible columns
            this.config.columns.filter(function (c) {
              return c.visible === true;
            }).forEach(function (column, index) {
              return column.size = e.sizes[index];
            });
          } // Row dragged
          else {
              // Set size for all visible rows from specified column
              this.config.columns[columnindex].rows.filter(function (r) {
                return r.visible === true;
              }).forEach(function (row, index) {
                return row.size = e.sizes[index];
              });
            }

          this.saveLocalStorage();
        }
      }, {
        key: "toggleDisabled",
        value: function toggleDisabled() {
          this.config.disabled = !this.config.disabled;
          this.saveLocalStorage();
        }
      }, {
        key: "refreshColumnVisibility",
        value: function refreshColumnVisibility() {
          // Refresh columns visibility based on inside rows visibilities (If no row > hide column)
          this.config.columns.forEach(function (column, index) {
            column.visible = column.rows.some(function (row) {
              return row.visible === true;
            });
          });
          this.saveLocalStorage();
        }
      }, {
        key: "saveLocalStorage",
        value: function saveLocalStorage() {
          localStorage.setItem(this.localStorageName, JSON.stringify(this.config));
        }
      }]);

      return WorkspaceLocalstorageComponent;
    }(_AComponent__WEBPACK_IMPORTED_MODULE_2__["AComponent"]);

    WorkspaceLocalstorageComponent.ɵfac = function WorkspaceLocalstorageComponent_Factory(t) {
      return ɵWorkspaceLocalstorageComponent_BaseFactory(t || WorkspaceLocalstorageComponent);
    };

    WorkspaceLocalstorageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: WorkspaceLocalstorageComponent,
      selectors: [["ng-component"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 1,
      vars: 1,
      consts: [["direction", "horizontal", 3, "disabled", "dragEnd", 4, "ngIf"], ["direction", "horizontal", 3, "disabled", "dragEnd"], ["ngFor", "", 3, "ngForOf"], [3, "order", "size", 4, "ngIf"], [3, "order", "size"], ["direction", "vertical", 3, "disabled", "dragEnd"], [1, "bloc", 3, "ngSwitch"], ["class", "explanations", 4, "ngSwitchCase"], ["class", "panel", 4, "ngSwitchDefault"], [1, "explanations"], [3, "type"], [1, "btn", "btn-warning", 3, "click"], ["class", "btn btn-warning", 3, "active", "click", 4, "ngIf"], [1, "panel"]],
      template: function WorkspaceLocalstorageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, WorkspaceLocalstorageComponent_ngx_split_0_Template, 2, 2, "ngx-split", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.config);
        }
      },
      styles: ["[_nghost-%COMP%] {\n        display: block;\n        width: 100%;\n        height: 100%;\n      }\n      .bloc[_ngcontent-%COMP%] {\n        height: 100%;\n      }\n\n      .explanations[_ngcontent-%COMP%] {\n        padding: 15px;\n      }\n\n      .panel[_ngcontent-%COMP%] {\n        font-size: 100px;\n        font-weight: bold;\n        color: #cccccc;\n\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        height: 100%;\n        overflow: hidden;\n      }\n      .panel[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n        margin: 0;\n      }\n      button[_ngcontent-%COMP%] {\n        margin-bottom: 10px;\n      }"],
      changeDetection: 0
    });

    var ɵWorkspaceLocalstorageComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](WorkspaceLocalstorageComponent);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WorkspaceLocalstorageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          styles: ["\n      :host {\n        display: block;\n        width: 100%;\n        height: 100%;\n      }\n      .bloc {\n        height: 100%;\n      }\n\n      .explanations {\n        padding: 15px;\n      }\n\n      .panel {\n        font-size: 100px;\n        font-weight: bold;\n        color: #cccccc;\n\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        height: 100%;\n        overflow: hidden;\n      }\n      .panel > p {\n        margin: 0;\n      }\n      button {\n        margin-bottom: 10px;\n      }\n    "],
          template: " <ngx-split\n    *ngIf=\"config\"\n    direction=\"horizontal\"\n    [disabled]=\"config.disabled\"\n    (dragEnd)=\"onDragEnd(-1, $event)\"\n  >\n    <ng-template ngFor let-column [ngForOf]=\"config.columns\" let-icol=\"index\">\n      <ngx-split-area\n        *ngIf=\"column.visible\"\n        [order]=\"icol\"\n        [size]=\"column.size\"\n      >\n        <ngx-split\n          direction=\"vertical\"\n          [disabled]=\"config.disabled\"\n          (dragEnd)=\"onDragEnd(icol, $event)\"\n        >\n          <ng-template ngFor let-row [ngForOf]=\"column.rows\" let-irow=\"index\">\n            <ngx-split-area\n              *ngIf=\"row.visible\"\n              [order]=\"irow\"\n              [size]=\"row.size\"\n            >\n              <div [ngSwitch]=\"row.type\" class=\"bloc\">\n                <div *ngSwitchCase=\"'doc'\" class=\"explanations\">\n                  <ui-example-title\n                    [type]=\"exampleEnum.WORKSPACE\"\n                  ></ui-example-title>\n                  <p>\n                    All areas size and visibility are saved to localStorage.<br />\n                    Toggle areas visibility using following buttons:\n                  </p>\n                  <ng-template ngFor let-c [ngForOf]=\"config.columns\">\n                    <ng-template ngFor let-r [ngForOf]=\"c.rows\">\n                      <button\n                        *ngIf=\"r.type !== 'doc'\"\n                        (click)=\"\n                          r.visible = !r.visible; refreshColumnVisibility()\n                        \"\n                        [class.active]=\"!r.visible\"\n                        class=\"btn btn-warning\"\n                      >\n                        {{ r.type }}\n                      </button>\n                    </ng-template>\n                  </ng-template>\n                  <br />\n                  <button\n                    class=\"btn btn-warning\"\n                    [class.active]=\"!config.disabled\"\n                    (click)=\"toggleDisabled()\"\n                  >\n                    {{ 'isDisabled: ' + config.disabled }}\n                  </button>\n                  <br />\n                  <button (click)=\"resetConfig()\" class=\"btn btn-warning\">\n                    Reset localStorage\n                  </button>\n                </div>\n                <div *ngSwitchDefault class=\"panel\">\n                  <p>{{ row.type }}</p>\n                </div>\n              </div>\n            </ngx-split-area>\n          </ng-template>\n        </ngx-split>\n      </ngx-split-area>\n    </ng-template>\n  </ngx-split>"
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/examples/format-date.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/examples/format-date.ts ***!
    \***********************************************/

  /*! exports provided: formatDate */

  /***/
  function srcAppPagesExamplesFormatDateTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "formatDate", function () {
      return formatDate;
    });

    function formatDate(date) {
      var year = date.getFullYear(),
          month = date.getMonth() + 1,
          // months are zero indexed
      day = date.getDate(),
          hour = date.getHours(),
          minute = date.getMinutes(),
          second = date.getSeconds(),
          millisecond = date.getMilliseconds(),
          hourFormatted = hour % 12 || 12,
          // hour returned in 24 hour format
      minuteFormatted = minute < 10 ? '0' + minute : minute,
          secondFormatted = second < 10 ? '0' + second : second,
          millisecondFormatted = millisecond < 100 ? '0' + millisecond : millisecond; // return `${ month }/${ day }/${ year } ${ hourFormatted }:${ minuteFormatted }:${ secondFormatted }`;

      return "".concat(hourFormatted, ":").concat(minuteFormatted, ":").concat(secondFormatted, ".").concat(millisecondFormatted);
    }
    /***/

  },

  /***/
  "./src/app/ui/components/example-title.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/ui/components/example-title.component.ts ***!
    \**********************************************************/

  /*! exports provided: ExampleTitleComponent */

  /***/
  function srcAppUiComponentsExampleTitleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExampleTitleComponent", function () {
      return ExampleTitleComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _example_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../example-enum */
    "./src/app/example-enum.ts");
    /* harmony import */


    var _example_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../example-list */
    "./src/app/example-list.ts");

    var ExampleTitleComponent = /*#__PURE__*/function () {
      function ExampleTitleComponent(sanitizer) {
        _classCallCheck(this, ExampleTitleComponent);

        this.sanitizer = sanitizer;
      }

      _createClass(ExampleTitleComponent, [{
        key: "type",
        set: function set(v) {
          var ex = _example_list__WEBPACK_IMPORTED_MODULE_3__["examples"].find(function (e) {
            return e.type === v;
          });

          if (!ex) return;
          this._type = v;
          this.label = this.sanitizer.bypassSecurityTrustHtml(ex.label);
          this.url = this.sanitizer.bypassSecurityTrustResourceUrl(ex.srcUrl);
        }
      }]);

      return ExampleTitleComponent;
    }();

    ExampleTitleComponent.ɵfac = function ExampleTitleComponent_Factory(t) {
      return new (t || ExampleTitleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]));
    };

    ExampleTitleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ExampleTitleComponent,
      selectors: [["ui-example-title"]],
      inputs: {
        type: "type"
      },
      decls: 5,
      vars: 2,
      consts: [[3, "innerHTML"], ["target", "_blank", 1, "btn", "btn-secondary", 3, "href"]],
      template: function ExampleTitleComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "View code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.label, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      },
      styles: ["h4[_ngcontent-%COMP%] {\n        display: flex;\n        align-items: center;\n      }\n      h4[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n        margin-right: 20px;\n      }"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExampleTitleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'ui-example-title',
          styles: ["\n      h4 {\n        display: flex;\n        align-items: center;\n      }\n      h4 > div {\n        margin-right: 20px;\n      }\n    "],
          template: " <h4>\n      <div [innerHTML]=\"label\"></div>\n      <a class=\"btn btn-secondary\" [href]=\"url\" target=\"_blank\">View code</a>\n    </h4>\n    <hr />"
        }]
      }], function () {
        return [{
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]
        }];
      }, {
        type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/ui/components/topbar.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/ui/components/topbar.component.ts ***!
    \***************************************************/

  /*! exports provided: TopbarComponent */

  /***/
  function srcAppUiComponentsTopbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TopbarComponent", function () {
      return TopbarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "../../node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _example_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../example-list */
    "./src/app/example-list.ts");
    /* harmony import */


    var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-bootstrap/collapse */
    "../../node_modules/ngx-bootstrap/__ivy_ngcc__/collapse/fesm2015/ngx-bootstrap-collapse.js");
    /* harmony import */


    var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-bootstrap/dropdown */
    "../../node_modules/ngx-bootstrap/__ivy_ngcc__/dropdown/fesm2015/ngx-bootstrap-dropdown.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function TopbarComponent_ul_19_li_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "a", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ex_r2 = ctx.$implicit;

        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r1.router.isActive(ex_r2.path, true));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ex_r2.path)("innerHTML", ctx_r1.transform(ex_r2.label), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      }
    }

    function TopbarComponent_ul_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TopbarComponent_ul_19_li_1_Template, 2, 4, "li", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.examples);
      }
    }

    var TopbarComponent = /*#__PURE__*/function () {
      function TopbarComponent(sanitizer, router) {
        var _this25 = this;

        _classCallCheck(this, TopbarComponent);

        this.sanitizer = sanitizer;
        this.router = router;
        this.isCollapsed = true;
        this.examples = _example_list__WEBPACK_IMPORTED_MODULE_4__["examples"];
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (e) {
          return e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"];
        })).subscribe(function () {
          _this25.isCollapsed = true;
        });
      }

      _createClass(TopbarComponent, [{
        key: "transform",
        value: function transform(label) {
          return this.sanitizer.bypassSecurityTrustHtml(label);
        }
      }]);

      return TopbarComponent;
    }();

    TopbarComponent.ɵfac = function TopbarComponent_Factory(t) {
      return new (t || TopbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    TopbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TopbarComponent,
      selectors: [["ui-topbar"]],
      hostAttrs: [1, "navbar", "navbar-expand-lg", "fixed-top", "navbar-dark", "bg-dark"],
      decls: 20,
      vars: 7,
      consts: [["href", "#", 1, "navbar-brand"], [1, "navbar-toggler", "hidden-lg-up", 3, "click"], [1, "navbar-toggler-icon"], [1, "collapse", "navbar-collapse", 3, "collapse"], [1, "nav", "navbar-nav"], [1, "nav-item"], ["routerLink", "/", 1, "nav-link"], ["routerLink", "/changelog", 1, "nav-link"], ["routerLink", "/documentation", 1, "nav-link"], ["dropdown", "", 1, "nav-item", "dropdown"], ["dropdownToggle", "", 1, "nav-link", "dropdown-toggle"], [1, "caret"], ["class", "dropdown-menu", "role", "menu", 4, "dropdownMenu"], ["role", "menu", 1, "dropdown-menu"], [3, "active", 4, "ngFor", "ngForOf"], [1, "dropdown-item", 3, "routerLink", "innerHTML"]],
      template: function TopbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "ngx-split");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopbarComponent_Template_button_click_2_listener() {
            return ctx.isCollapsed = !ctx.isCollapsed;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Changelog");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Documentation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Examples ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, TopbarComponent_ul_19_Template, 2, 1, "ul", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("collapse", ctx.isCollapsed);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.router.isActive("/", true));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.router.isActive("/changelog", true));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.router.isActive("/documentation", true));
        }
      },
      directives: [ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_5__["CollapseDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_6__["BsDropdownDirective"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_6__["BsDropdownToggleDirective"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_6__["BsDropdownMenuDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"]],
      styles: ["a.navbar-brand[_ngcontent-%COMP%], a.navbar-brand[_ngcontent-%COMP%]:hover {\n        font-weight: bold;\n        color: #e83e8c;\n      }\n\n      li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n        cursor: pointer;\n      }\n\n      ul.dropdown-menu[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:active, ul.dropdown-menu[_ngcontent-%COMP%]    > li.active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n        background-color: #eeeeee;\n        cursor: default;\n        color: #000000;\n      }\n\n      .navbar-toggler[_ngcontent-%COMP%] {\n        float: right;\n        margin-right: 120px;\n      }\n\n      @media (max-width: 992px) {\n        .container-fluid[_ngcontent-%COMP%] {\n          padding-left: 0;\n        }\n        a.navbar-brand[_ngcontent-%COMP%] {\n          margin-right: 0;\n        }\n      }"],
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TopbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'ui-topbar',
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          styles: ["\n      a.navbar-brand,\n      a.navbar-brand:hover {\n        font-weight: bold;\n        color: #e83e8c;\n      }\n\n      li > a {\n        cursor: pointer;\n      }\n\n      ul.dropdown-menu > li > a:active,\n      ul.dropdown-menu > li.active > a {\n        background-color: #eeeeee;\n        cursor: default;\n        color: #000000;\n      }\n\n      .navbar-toggler {\n        float: right;\n        margin-right: 120px;\n      }\n\n      @media (max-width: 992px) {\n        .container-fluid {\n          padding-left: 0;\n        }\n        a.navbar-brand {\n          margin-right: 0;\n        }\n      }\n    "],
          host: {
            "class": 'navbar navbar-expand-lg fixed-top navbar-dark bg-dark'
          },
          template: "\n    <a class=\"navbar-brand\" href=\"#\">ngx-split</a>\n    <button\n      class=\"navbar-toggler hidden-lg-up\"\n      (click)=\"isCollapsed = !isCollapsed\"\n    >\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" [collapse]=\"isCollapsed\">\n      <ul class=\"nav navbar-nav\">\n        <li class=\"nav-item\" [class.active]=\"router.isActive('/', true)\">\n          <a class=\"nav-link\" routerLink=\"/\">Home</a>\n        </li>\n        <li\n          class=\"nav-item\"\n          [class.active]=\"router.isActive('/changelog', true)\"\n        >\n          <a class=\"nav-link\" routerLink=\"/changelog\">Changelog</a>\n        </li>\n        <li\n          class=\"nav-item\"\n          [class.active]=\"router.isActive('/documentation', true)\"\n        >\n          <a class=\"nav-link\" routerLink=\"/documentation\">Documentation</a>\n        </li>\n        <li class=\"nav-item dropdown\" dropdown>\n          <a class=\"nav-link dropdown-toggle\" dropdownToggle\n            >Examples <span class=\"caret\"></span\n          ></a>\n          <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\">\n            <li\n              *ngFor=\"let ex of examples\"\n              [class.active]=\"router.isActive(ex.path, true)\"\n            >\n              <a\n                class=\"dropdown-item\"\n                [routerLink]=\"ex.path\"\n                [innerHTML]=\"transform(ex.label)\"\n              ></a>\n            </li>\n          </ul>\n        </li>\n      </ul>\n    </div>\n  "
        }]
      }], function () {
        return [{
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/ui/ui-shared.module.ts":
  /*!****************************************!*\
    !*** ./src/app/ui/ui-shared.module.ts ***!
    \****************************************/

  /*! exports provided: UiSharedModule */

  /***/
  function srcAppUiUiSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UiSharedModule", function () {
      return UiSharedModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-bootstrap/dropdown */
    "../../node_modules/ngx-bootstrap/__ivy_ngcc__/dropdown/fesm2015/ngx-bootstrap-dropdown.js");
    /* harmony import */


    var ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-bootstrap/buttons */
    "../../node_modules/ngx-bootstrap/__ivy_ngcc__/buttons/fesm2015/ngx-bootstrap-buttons.js");
    /* harmony import */


    var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-bootstrap/collapse */
    "../../node_modules/ngx-bootstrap/__ivy_ngcc__/collapse/fesm2015/ngx-bootstrap-collapse.js");
    /* harmony import */


    var ngx_bootstrap_sortable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-bootstrap/sortable */
    "../../node_modules/ngx-bootstrap/__ivy_ngcc__/sortable/fesm2015/ngx-bootstrap-sortable.js");
    /* harmony import */


    var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-bootstrap/tooltip */
    "../../node_modules/ngx-bootstrap/__ivy_ngcc__/tooltip/fesm2015/ngx-bootstrap-tooltip.js");
    /* harmony import */


    var ngx_split__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-split */
    "../../libs/ngx-split/src/index.ts");
    /* harmony import */


    var _libs_ngx_split_src_lib_ngx_split_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../../../libs/ngx-split/src/lib/ngx-split.module */
    "../../libs/ngx-split/src/lib/ngx-split.module.ts");

    var UiSharedModule = function UiSharedModule() {
      _classCallCheck(this, UiSharedModule);
    };

    UiSharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: UiSharedModule
    });
    UiSharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function UiSharedModule_Factory(t) {
        return new (t || UiSharedModule)();
      },
      imports: [[ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_2__["BsDropdownModule"].forRoot(), ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_3__["ButtonsModule"].forRoot(), ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_4__["CollapseModule"].forRoot(), ngx_bootstrap_sortable__WEBPACK_IMPORTED_MODULE_5__["SortableModule"].forRoot(), ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_6__["TooltipModule"].forRoot(), ngx_split__WEBPACK_IMPORTED_MODULE_7__["NgxSplitModule"].forRoot(), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_2__["BsDropdownModule"], ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_3__["ButtonsModule"], ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_4__["CollapseModule"], ngx_bootstrap_sortable__WEBPACK_IMPORTED_MODULE_5__["SortableModule"], ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_6__["TooltipModule"], ngx_split__WEBPACK_IMPORTED_MODULE_7__["NgxSplitModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UiSharedModule, {
        imports: [ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_2__["BsDropdownModule"], ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_3__["ButtonsModule"], ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_4__["CollapseModule"], ngx_bootstrap_sortable__WEBPACK_IMPORTED_MODULE_5__["SortableModule"], ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_6__["TooltipModule"], _libs_ngx_split_src_lib_ngx_split_module__WEBPACK_IMPORTED_MODULE_8__["NgxSplitModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]],
        exports: [ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_2__["BsDropdownModule"], ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_3__["ButtonsModule"], ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_4__["CollapseModule"], ngx_bootstrap_sortable__WEBPACK_IMPORTED_MODULE_5__["SortableModule"], ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_6__["TooltipModule"], ngx_split__WEBPACK_IMPORTED_MODULE_7__["NgxSplitModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UiSharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_2__["BsDropdownModule"].forRoot(), ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_3__["ButtonsModule"].forRoot(), ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_4__["CollapseModule"].forRoot(), ngx_bootstrap_sortable__WEBPACK_IMPORTED_MODULE_5__["SortableModule"].forRoot(), ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_6__["TooltipModule"].forRoot(), ngx_split__WEBPACK_IMPORTED_MODULE_7__["NgxSplitModule"].forRoot(), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]],
          exports: [ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_2__["BsDropdownModule"], ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_3__["ButtonsModule"], ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_4__["CollapseModule"], ngx_bootstrap_sortable__WEBPACK_IMPORTED_MODULE_5__["SortableModule"], ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_6__["TooltipModule"], ngx_split__WEBPACK_IMPORTED_MODULE_7__["NgxSplitModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/ui/ui.module.ts":
  /*!*********************************!*\
    !*** ./src/app/ui/ui.module.ts ***!
    \*********************************/

  /*! exports provided: UiModule */

  /***/
  function srcAppUiUiModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UiModule", function () {
      return UiModule;
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


    var _ui_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./ui-shared.module */
    "./src/app/ui/ui-shared.module.ts");
    /* harmony import */


    var _components_example_title_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/example-title.component */
    "./src/app/ui/components/example-title.component.ts");
    /* harmony import */


    var _components_topbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/topbar.component */
    "./src/app/ui/components/topbar.component.ts");

    var COMPONENTS = [_components_example_title_component__WEBPACK_IMPORTED_MODULE_4__["ExampleTitleComponent"], _components_topbar_component__WEBPACK_IMPORTED_MODULE_5__["TopbarComponent"]];
    var MODULES = [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _ui_shared_module__WEBPACK_IMPORTED_MODULE_3__["UiSharedModule"]];

    var UiModule = function UiModule() {
      _classCallCheck(this, UiModule);
    };

    UiModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: UiModule
    });
    UiModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function UiModule_Factory(t) {
        return new (t || UiModule)();
      },
      imports: [[].concat(MODULES), _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _ui_shared_module__WEBPACK_IMPORTED_MODULE_3__["UiSharedModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](UiModule, {
        declarations: [_components_example_title_component__WEBPACK_IMPORTED_MODULE_4__["ExampleTitleComponent"], _components_topbar_component__WEBPACK_IMPORTED_MODULE_5__["TopbarComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _ui_shared_module__WEBPACK_IMPORTED_MODULE_3__["UiSharedModule"]],
        exports: [_components_example_title_component__WEBPACK_IMPORTED_MODULE_4__["ExampleTitleComponent"], _components_topbar_component__WEBPACK_IMPORTED_MODULE_5__["TopbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _ui_shared_module__WEBPACK_IMPORTED_MODULE_3__["UiSharedModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UiModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [].concat(COMPONENTS),
          exports: [].concat(COMPONENTS, MODULES),
          imports: [].concat(MODULES)
        }]
      }], null, null);
    })();
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
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
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
    "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
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
    /*! /Users/beeman/kikstart/ngx-split/apps/demo/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map