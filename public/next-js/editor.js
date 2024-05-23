/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
/*!********************************!*\
  !*** ./resources/js/editor.js ***!
  \********************************/
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _excluded = ["el"];
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } } return target; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
(function (_ref) {
  var component = _ref.component,
    siteId = _ref.siteId,
    keywordId = _ref.keywordId,
    f = _ref.f;
  var currentSelector = {};
  var iframe = document.getElementById('magic-customize');
  var content = [];
  var undo = [];
  var getIframeDoc = function getIframeDoc() {
    return iframe.contentDocument || iframe.contentWindow.document;
  };
  var textArea = document.querySelector('textarea');
  var magicEditor = document.querySelector('#magic-editor');
  var toggleEditor = document.querySelector('#toggle-editor');
  toggleEditor.addEventListener('click', function (e) {
    magicEditor.classList.toggle('left-0');
    magicEditor.classList.toggle('right-0');
  });
  var vailTag = function vailTag(tag) {
    return !['svg', 'img', 'body'].includes(tag);
  };
  document.getElementById('scroll-top').addEventListener('click', function () {
    iframe.contentWindow.scrollTo(0, 0);
  });
  var createOverlay = function createOverlay(el) {
    var iframeDoc = getIframeDoc();
    var rect = el.getBoundingClientRect();
    var left = rect.left;
    var top = rect.top + iframeDoc.documentElement.scrollTop;
    var width = rect.width;
    var height = rect.height;
    if (rect.top) {
      iframe.contentWindow.scrollTo(0, top - 100);
    }
    var overLay = iframeDoc.querySelector('#magic-overlay');
    overLay.style.position = 'absolute';
    overLay.style.left = left + 'px';
    overLay.style.top = top + 'px';
    overLay.style.width = width + 5 + 'px';
    overLay.style.height = height + 5 + 'px';
    overLay.style.display = 'block';
    overLay.style.border = '2px solid purple';
    overLay.style.zIndex = 9999999;
  };
  var scrollOverLay = function scrollOverLay(el) {
    var iframeDoc = getIframeDoc();
    var rect = el.getBoundingClientRect();
    var left = rect.left;
    var top = rect.top + iframeDoc.documentElement.scrollTop;
    var width = rect.width;
    var height = rect.height;
    var overLay = iframeDoc.querySelector('#magic-overlay');
    overLay.style.position = 'absolute';
    overLay.style.left = left + 'px';
    overLay.style.top = top + 'px';
    overLay.style.width = width + 5 + 'px';
    overLay.style.height = height + 5 + 'px';
    overLay.style.display = 'block';
    overLay.style.border = '2px solid purple';
    overLay.style.zIndex = 9999999;
  };
  var hideOverLay = function hideOverLay() {
    var overLay = getIframeDoc().querySelector('#magic-overlay');
    overLay.style.display = 'none';
  };
  document.querySelector('#undo').onclick = function () {
    var _ref2 = undo.pop() || [],
      _ref3 = _slicedToArray(_ref2, 3),
      undoSelector = _ref3[0],
      previous = _ref3[1],
      el = _ref3[2];
    if (undoSelector) {
      el.innerHTML = previous;
      if (!undo.find(function (u) {
        return u[2] === el;
      })) {
        content = content.filter(function (c) {
          return c.el !== el;
        });
      }
    }
    if (undo.length) {
      var _undo = _slicedToArray(undo[undo.length - 1], 3),
        nextSelector = _undo[0],
        _previous = _undo[1],
        _el = _undo[2];
      createOverlay(_el);
      currentSelector = nextSelector;
      textArea.value = _el.innerHTML;
    } else {
      currentSelector = {};
      textArea.value = '';
      hideOverLay();
      content = [];
    }
  };
  var handleChange = function handleChange() {
    var timeout;
    return function (e) {
      if (timeout) clearTimeout(timeout);
      if (Object.keys(currentSelector).length) {
        timeout = setTimeout(function () {
          var el;
          var iframeDoc = getIframeDoc();
          if (currentSelector.type === 'id') {
            el = iframeDoc.body.querySelector(currentSelector.selector);
          } else {
            el = Array.from(iframeDoc.body.querySelectorAll(currentSelector.selector))[currentSelector.index];
          }
          if (!content.find(function (c) {
            return c.el === el;
          })) {
            content.push(_objectSpread(_objectSpread({}, currentSelector), {}, {
              el: el
            }));
          }
          undo.push([_objectSpread({}, currentSelector), el.innerHTML, el]);
          el.innerHTML = e.target.value;
          createOverlay(el);
        }, 500);
      } else {
        e.target.value = '';
      }
    };
  };
  var handleScroll = function handleScroll() {
    var timeout;
    return function () {
      hideOverLay();
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(function () {
        if (Object.keys(currentSelector).length) {
          scrollOverLay(currentSelector.el);
        }
      }, 500);
    };
  };
  iframe.contentWindow.addEventListener('DOMContentLoaded', function () {
    var iframeDoc = getIframeDoc();
    iframeDoc.addEventListener('scroll', handleScroll());
    var div = iframeDoc.createElement('div');
    div.id = 'magic-overlay';
    iframeDoc.body.appendChild(div);
    if (component) {
      var contents = component.contents;
      contents.forEach(function (c) {
        if (c.type === 'id') {} else {
          var el = iframeDoc.querySelectorAll(c.selector)[c.index];
          el.innerHTML = c.value;
          el.setAttribute('next-text', c._id);
        }
      });
    }
    div.addEventListener('click', function () {
      magicEditor.classList.remove('hidden');
    });
    Array.from(iframeDoc.querySelectorAll('a')).forEach(function (a) {
      a.style.pointerEvents = 'none';
    });
    iframeDoc.body.addEventListener('click', function (e) {
      e.preventDefault();
      if (e.target.id === 'magic-overlay') return;
      var className = e.target.className;
      var id = e.target.id;
      var tagName = e.target.tagName.toLowerCase();
      if (!vailTag(tagName)) return;
      currentSelector = {};
      if (id) {
        currentSelector = {
          index: 0,
          type: 'id',
          selector: "#".concat(id),
          el: e.target
        };
      } else if (className) {
        var attributeSelector = "[class='".concat(className, "']");
        var els = iframeDoc.body.querySelectorAll(attributeSelector);
        var index = Array.from(els).indexOf(e.target);
        currentSelector = {
          index: index,
          type: 'class',
          selector: attributeSelector,
          el: e.target
        };
      } else {
        var tags = iframeDoc.body.querySelectorAll(tagName);
        var _index = Array.from(tags).indexOf(e.target);
        currentSelector = {
          index: _index,
          type: 'tag',
          selector: tagName,
          el: e.target
        };
      }
      createOverlay(e.target);
      magicEditor.classList.remove('hidden');
      textArea.value = e.target.innerHTML;
      return false;
    });
  });
  textArea.addEventListener('input', handleChange());
  document.querySelector('#save').addEventListener('submit', /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(e) {
      var contents, data, res, result;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            e.preventDefault();
            if (content.length) {
              _context.next = 3;
              break;
            }
            return _context.abrupt("return");
          case 3:
            f.submit(e.submitter);
            contents = content.map(function (c) {
              var el = c.el,
                other = _objectWithoutProperties(c, _excluded);
              return _objectSpread(_objectSpread({}, other), {}, {
                value: el.innerHTML,
                _id: el.getAttribute('next-text') || null
              });
            });
            data = {
              contents: contents,
              site: siteId,
              keyword: keywordId
            };
            _context.prev = 6;
            _context.next = 9;
            return fetch(e.target.action, {
              body: JSON.stringify(data),
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              }
            });
          case 9:
            res = _context.sent;
            _context.next = 12;
            return res.json();
          case 12:
            result = _context.sent;
            if (res.ok) {
              _context.next = 15;
              break;
            }
            throw result;
          case 15:
            window.location.reload();
            _context.next = 21;
            break;
          case 18:
            _context.prev = 18;
            _context.t0 = _context["catch"](6);
            setTimeout(function () {
              f.submitted(e.submitter);
            }, 500);
          case 21:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[6, 18]]);
    }));
    return function (_x) {
      return _ref4.apply(this, arguments);
    };
  }());
})({
  component: component,
  siteId: siteId,
  keywordId: keywordId,
  f: f
});
/******/ })()
;