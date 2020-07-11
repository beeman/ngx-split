function _toConsumableArray(a){return _arrayWithoutHoles(a)||_iterableToArray(a)||_unsupportedIterableToArray(a)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(a,t){if(a){if("string"==typeof a)return _arrayLikeToArray(a,t);var e=Object.prototype.toString.call(a).slice(8,-1);return"Object"===e&&a.constructor&&(e=a.constructor.name),"Map"===e||"Set"===e?Array.from(a):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?_arrayLikeToArray(a,t):void 0}}function _iterableToArray(a){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(a))return Array.from(a)}function _arrayWithoutHoles(a){if(Array.isArray(a))return _arrayLikeToArray(a)}function _arrayLikeToArray(a,t){(null==t||t>a.length)&&(t=a.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=a[e];return r}function _classCallCheck(a,t){if(!(a instanceof t))throw new TypeError("Cannot call a class as a function")}function _inherits(a,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(t&&t.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),t&&_setPrototypeOf(a,t)}function _setPrototypeOf(a,t){return(_setPrototypeOf=Object.setPrototypeOf||function(a,t){return a.__proto__=t,a})(a,t)}function _createSuper(a){var t=_isNativeReflectConstruct();return function(){var e,r=_getPrototypeOf(a);if(t){var n=_getPrototypeOf(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return _possibleConstructorReturn(this,e)}}function _possibleConstructorReturn(a,t){return!t||"object"!=typeof t&&"function"!=typeof t?_assertThisInitialized(a):t}function _assertThisInitialized(a){if(void 0===a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(a){return!1}}function _getPrototypeOf(a){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)})(a)}(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{qS9M:function(a,t,e){"use strict";e.r(t),e.d(t,"ExamplesModule",(function(){return S}));var r,n,o=e("2kYt"),i=e("sEIs"),c=e("wEHs"),s=e("oRDy"),u=e("8F9z"),l=e("T0XY"),b=e("P+Rm"),f=e("G+IE"),p=e("7aDm"),d=e("4yn7"),y=e("KXGY"),h=e("EM62"),m=e("e4iD"),g=e("vYkh"),k=((r=function(a){_inherits(e,a);var t=_createSuper(e);function e(a){var r;_classCallCheck(this,e),(r=t.call(this)).sanitizer=a;var n=c.a.find((function(a){return a.type===r.exampleEnum.LAZY}));return n&&(r.url1=r.sanitizer.bypassSecurityTrustResourceUrl(n.srcUrl),r.url2=r.sanitizer.bypassSecurityTrustResourceUrl(n.srcUrl2)),r}return e}(y.a)).\u0275fac=function(a){return new(a||r)(h.Lb(m.b))},r.\u0275cmp=h.Fb({type:r,selectors:[["ng-component"]],hostAttrs:[1,"split-example-page"],features:[h.wb],decls:26,vars:4,consts:[[1,"container"],[3,"type"],["href","/ngx-split/lazy","target","_blank",1,"btn","btn-warning","btn-sm"],["target","_blank",1,"btn","btn-secondary","btn-sm",3,"href"],["href","/ngx-split/lazy2","target","_blank",1,"btn","btn-warning","btn-sm"]],template:function(a,t){1&a&&(h.pc(0),h.Ob(1,"div",0),h.Mb(2,"ui-example-title",1),h.Ob(3,"h5"),h.pc(4,"Demo 1"),h.Nb(),h.Ob(5,"p"),h.Ob(6,"code"),h.pc(7,"ngx-split"),h.Nb(),h.pc(8," is only loaded on demand with the lazy loaded module where it is used: "),h.Nb(),h.Ob(9,"a",2),h.pc(10,"demo"),h.Nb(),h.pc(11,"\xa0 "),h.Ob(12,"a",3),h.pc(13,"code"),h.Nb(),h.Mb(14,"hr"),h.Ob(15,"h5"),h.pc(16,"Demo 2"),h.Nb(),h.Ob(17,"p"),h.Ob(18,"code"),h.pc(19,"ngx-split"),h.Nb(),h.pc(20," is loaded one time at startup inside AppModule and then used inside a lazy loaded module: "),h.Nb(),h.Ob(21,"a",4),h.pc(22,"demo"),h.Nb(),h.pc(23,"\xa0 "),h.Ob(24,"a",3),h.pc(25,"code"),h.Nb(),h.Nb()),2&a&&(h.rc(" ",t.testChangeDetectorRun()," "),h.zb(2),h.dc("type",t.exampleEnum.LAZY),h.zb(10),h.dc("href",t.url1,h.jc),h.zb(12),h.dc("href",t.url2,h.jc))},directives:[g.a],styles:[".btns[_ngcontent-%COMP%] {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        flex-wrap: wrap;\n      }"],changeDetection:0}),r),w=e("0rN4"),v=e("GL+v"),_=e("RbBn"),j=e("KqN4"),A=e("Bsyo"),O=e("/ORF"),C=e("qa17"),q=e("bXS6"),x=e("/s6R"),z=e("mlZ3"),E=e("NlcX"),R=e("H11L"),G=e("G1hs"),F=e("c1q2"),N=e("mDiH"),T=e("nIj0"),S=((n=function a(){_classCallCheck(this,a)}).\u0275mod=h.Jb({type:n}),n.\u0275inj=h.Ib({factory:function(a){return new(a||n)},providers:[{provide:o.o,useClass:o.h}],imports:[[i.g.forChild(_toConsumableArray(c.a)),s.a]]}),n);h.kc(_.a,[i.h,i.d,i.f,i.e,i.i,g.a,q.a,o.q,o.r,o.s,o.t,o.A,o.w,o.x,o.y,o.z,o.u,o.v,x.b,x.d,x.a,z.a,z.b,z.c,E.a,R.a,G.a,F.a,N.a,T.w,T.n,T.v,T.c,T.o,T.r,T.a,T.t,T.u,T.q,T.i,T.j,T.s,T.g,T.f,T.p,T.b,T.d,T.l,T.m,T.k,_.a,w.a,v.a,d.a,O.a,j.a,l.a,A.a,p.a,u.a,f.a,b.a,C.a,k],[o.b,o.G,o.p,o.k,o.E,o.g,o.C,o.F,o.d,o.f,o.i,o.j,o.l]),h.kc(w.a,[i.h,i.d,i.f,i.e,i.i,g.a,q.a,o.q,o.r,o.s,o.t,o.A,o.w,o.x,o.y,o.z,o.u,o.v,x.b,x.d,x.a,z.a,z.b,z.c,E.a,R.a,G.a,F.a,N.a,T.w,T.n,T.v,T.c,T.o,T.r,T.a,T.t,T.u,T.q,T.i,T.j,T.s,T.g,T.f,T.p,T.b,T.d,T.l,T.m,T.k,_.a,w.a,v.a,d.a,O.a,j.a,l.a,A.a,p.a,u.a,f.a,b.a,C.a,k],[o.b,o.G,o.p,o.k,o.E,o.g,o.C,o.F,o.d,o.f,o.i,o.j,o.l]),h.kc(v.a,[i.h,i.d,i.f,i.e,i.i,g.a,q.a,o.q,o.r,o.s,o.t,o.A,o.w,o.x,o.y,o.z,o.u,o.v,x.b,x.d,x.a,z.a,z.b,z.c,E.a,R.a,G.a,F.a,N.a,T.w,T.n,T.v,T.c,T.o,T.r,T.a,T.t,T.u,T.q,T.i,T.j,T.s,T.g,T.f,T.p,T.b,T.d,T.l,T.m,T.k,_.a,w.a,v.a,d.a,O.a,j.a,l.a,A.a,p.a,u.a,f.a,b.a,C.a,k],[o.b,o.G,o.p,o.k,o.E,o.g,o.C,o.F,o.d,o.f,o.i,o.j,o.l]),h.kc(d.a,[i.h,i.d,i.f,i.e,i.i,g.a,q.a,o.q,o.r,o.s,o.t,o.A,o.w,o.x,o.y,o.z,o.u,o.v,x.b,x.d,x.a,z.a,z.b,z.c,E.a,R.a,G.a,F.a,N.a,T.w,T.n,T.v,T.c,T.o,T.r,T.a,T.t,T.u,T.q,T.i,T.j,T.s,T.g,T.f,T.p,T.b,T.d,T.l,T.m,T.k,_.a,w.a,v.a,d.a,O.a,j.a,l.a,A.a,p.a,u.a,f.a,b.a,C.a,k],[o.b,o.G,o.p,o.k,o.E,o.g,o.C,o.F,o.d,o.f,o.i,o.j,o.l]),h.kc(O.a,[i.h,i.d,i.f,i.e,i.i,g.a,q.a,o.q,o.r,o.s,o.t,o.A,o.w,o.x,o.y,o.z,o.u,o.v,x.b,x.d,x.a,z.a,z.b,z.c,E.a,R.a,G.a,F.a,N.a,T.w,T.n,T.v,T.c,T.o,T.r,T.a,T.t,T.u,T.q,T.i,T.j,T.s,T.g,T.f,T.p,T.b,T.d,T.l,T.m,T.k,_.a,w.a,v.a,d.a,O.a,j.a,l.a,A.a,p.a,u.a,f.a,b.a,C.a,k],[o.b,o.G,o.p,o.k,o.E,o.g,o.C,o.F,o.d,o.f,o.i,o.j,o.l]),h.kc(j.a,[i.h,i.d,i.f,i.e,i.i,g.a,q.a,o.q,o.r,o.s,o.t,o.A,o.w,o.x,o.y,o.z,o.u,o.v,x.b,x.d,x.a,z.a,z.b,z.c,E.a,R.a,G.a,F.a,N.a,T.w,T.n,T.v,T.c,T.o,T.r,T.a,T.t,T.u,T.q,T.i,T.j,T.s,T.g,T.f,T.p,T.b,T.d,T.l,T.m,T.k,_.a,w.a,v.a,d.a,O.a,j.a,l.a,A.a,p.a,u.a,f.a,b.a,C.a,k],[o.b,o.G,o.p,o.k,o.E,o.g,o.C,o.F,o.d,o.f,o.i,o.j,o.l]),h.kc(l.a,[i.h,i.d,i.f,i.e,i.i,g.a,q.a,o.q,o.r,o.s,o.t,o.A,o.w,o.x,o.y,o.z,o.u,o.v,x.b,x.d,x.a,z.a,z.b,z.c,E.a,R.a,G.a,F.a,N.a,T.w,T.n,T.v,T.c,T.o,T.r,T.a,T.t,T.u,T.q,T.i,T.j,T.s,T.g,T.f,T.p,T.b,T.d,T.l,T.m,T.k,_.a,w.a,v.a,d.a,O.a,j.a,l.a,A.a,p.a,u.a,f.a,b.a,C.a,k],[o.b,o.G,o.p,o.k,o.E,o.g,o.C,o.F,o.d,o.f,o.i,o.j,o.l]),h.kc(A.a,[i.h,i.d,i.f,i.e,i.i,g.a,q.a,o.q,o.r,o.s,o.t,o.A,o.w,o.x,o.y,o.z,o.u,o.v,x.b,x.d,x.a,z.a,z.b,z.c,E.a,R.a,G.a,F.a,N.a,T.w,T.n,T.v,T.c,T.o,T.r,T.a,T.t,T.u,T.q,T.i,T.j,T.s,T.g,T.f,T.p,T.b,T.d,T.l,T.m,T.k,_.a,w.a,v.a,d.a,O.a,j.a,l.a,A.a,p.a,u.a,f.a,b.a,C.a,k],[o.b,o.G,o.p,o.k,o.E,o.g,o.C,o.F,o.d,o.f,o.i,o.j,o.l]),h.kc(p.a,[i.h,i.d,i.f,i.e,i.i,g.a,q.a,o.q,o.r,o.s,o.t,o.A,o.w,o.x,o.y,o.z,o.u,o.v,x.b,x.d,x.a,z.a,z.b,z.c,E.a,R.a,G.a,F.a,N.a,T.w,T.n,T.v,T.c,T.o,T.r,T.a,T.t,T.u,T.q,T.i,T.j,T.s,T.g,T.f,T.p,T.b,T.d,T.l,T.m,T.k,_.a,w.a,v.a,d.a,O.a,j.a,l.a,A.a,p.a,u.a,f.a,b.a,C.a,k],[o.b,o.G,o.p,o.k,o.E,o.g,o.C,o.F,o.d,o.f,o.i,o.j,o.l]),h.kc(u.a,[i.h,i.d,i.f,i.e,i.i,g.a,q.a,o.q,o.r,o.s,o.t,o.A,o.w,o.x,o.y,o.z,o.u,o.v,x.b,x.d,x.a,z.a,z.b,z.c,E.a,R.a,G.a,F.a,N.a,T.w,T.n,T.v,T.c,T.o,T.r,T.a,T.t,T.u,T.q,T.i,T.j,T.s,T.g,T.f,T.p,T.b,T.d,T.l,T.m,T.k,_.a,w.a,v.a,d.a,O.a,j.a,l.a,A.a,p.a,u.a,f.a,b.a,C.a,k],[o.b,o.G,o.p,o.k,o.E,o.g,o.C,o.F,o.d,o.f,o.i,o.j,o.l]),h.kc(f.a,[i.h,i.d,i.f,i.e,i.i,g.a,q.a,o.q,o.r,o.s,o.t,o.A,o.w,o.x,o.y,o.z,o.u,o.v,x.b,x.d,x.a,z.a,z.b,z.c,E.a,R.a,G.a,F.a,N.a,T.w,T.n,T.v,T.c,T.o,T.r,T.a,T.t,T.u,T.q,T.i,T.j,T.s,T.g,T.f,T.p,T.b,T.d,T.l,T.m,T.k,_.a,w.a,v.a,d.a,O.a,j.a,l.a,A.a,p.a,u.a,f.a,b.a,C.a,k],[o.b,o.G,o.p,o.k,o.E,o.g,o.C,o.F,o.d,o.f,o.i,o.j,o.l]),h.kc(b.a,[i.h,i.d,i.f,i.e,i.i,g.a,q.a,o.q,o.r,o.s,o.t,o.A,o.w,o.x,o.y,o.z,o.u,o.v,x.b,x.d,x.a,z.a,z.b,z.c,E.a,R.a,G.a,F.a,N.a,T.w,T.n,T.v,T.c,T.o,T.r,T.a,T.t,T.u,T.q,T.i,T.j,T.s,T.g,T.f,T.p,T.b,T.d,T.l,T.m,T.k,_.a,w.a,v.a,d.a,O.a,j.a,l.a,A.a,p.a,u.a,f.a,b.a,C.a,k],[o.b,o.G,o.p,o.k,o.E,o.g,o.C,o.F,o.d,o.f,o.i,o.j,o.l]),h.kc(C.a,[i.h,i.d,i.f,i.e,i.i,g.a,q.a,o.q,o.r,o.s,o.t,o.A,o.w,o.x,o.y,o.z,o.u,o.v,x.b,x.d,x.a,z.a,z.b,z.c,E.a,R.a,G.a,F.a,N.a,T.w,T.n,T.v,T.c,T.o,T.r,T.a,T.t,T.u,T.q,T.i,T.j,T.s,T.g,T.f,T.p,T.b,T.d,T.l,T.m,T.k,_.a,w.a,v.a,d.a,O.a,j.a,l.a,A.a,p.a,u.a,f.a,b.a,C.a,k],[o.b,o.G,o.p,o.k,o.E,o.g,o.C,o.F,o.d,o.f,o.i,o.j,o.l])}}]);