/*! For license information please see app.min.js.LICENSE.txt */
(() => {
  var e = {
      211: function (e, t) {
        !(function (e) {
          "use strict";
          function t(e) {
            return s(e) && "function" == typeof e.from;
          }
          function s(e) {
            return "object" == typeof e && "function" == typeof e.to;
          }
          function i(e) {
            e.parentElement.removeChild(e);
          }
          function n(e) {
            return null != e;
          }
          function a(e) {
            e.preventDefault();
          }
          function r(e) {
            return e.filter(function (e) {
              return !this[e] && (this[e] = !0);
            }, {});
          }
          function o(e, t) {
            return Math.round(e / t) * t;
          }
          function l(e, t) {
            var s = e.getBoundingClientRect(),
              i = e.ownerDocument,
              n = i.documentElement,
              a = v(i);
            return (
              /webkit.*Chrome.*Mobile/i.test(navigator.userAgent) && (a.x = 0),
              t ? s.top + a.y - n.clientTop : s.left + a.x - n.clientLeft
            );
          }
          function d(e) {
            return "number" == typeof e && !isNaN(e) && isFinite(e);
          }
          function c(e, t, s) {
            s > 0 &&
              (f(e, t),
              setTimeout(function () {
                m(e, t);
              }, s));
          }
          function u(e) {
            return Math.max(Math.min(e, 100), 0);
          }
          function p(e) {
            return Array.isArray(e) ? e : [e];
          }
          function h(e) {
            var t = (e = String(e)).split(".");
            return t.length > 1 ? t[1].length : 0;
          }
          function f(e, t) {
            e.classList && !/\s/.test(t)
              ? e.classList.add(t)
              : (e.className += " " + t);
          }
          function m(e, t) {
            e.classList && !/\s/.test(t)
              ? e.classList.remove(t)
              : (e.className = e.className.replace(
                  new RegExp(
                    "(^|\\b)" + t.split(" ").join("|") + "(\\b|$)",
                    "gi"
                  ),
                  " "
                ));
          }
          function g(e, t) {
            return e.classList
              ? e.classList.contains(t)
              : new RegExp("\\b" + t + "\\b").test(e.className);
          }
          function v(e) {
            var t = void 0 !== window.pageXOffset,
              s = "CSS1Compat" === (e.compatMode || "");
            return {
              x: t
                ? window.pageXOffset
                : s
                ? e.documentElement.scrollLeft
                : e.body.scrollLeft,
              y: t
                ? window.pageYOffset
                : s
                ? e.documentElement.scrollTop
                : e.body.scrollTop,
            };
          }
          function b() {
            return window.navigator.pointerEnabled
              ? { start: "pointerdown", move: "pointermove", end: "pointerup" }
              : window.navigator.msPointerEnabled
              ? {
                  start: "MSPointerDown",
                  move: "MSPointerMove",
                  end: "MSPointerUp",
                }
              : {
                  start: "mousedown touchstart",
                  move: "mousemove touchmove",
                  end: "mouseup touchend",
                };
          }
          function y() {
            var e = !1;
            try {
              var t = Object.defineProperty({}, "passive", {
                get: function () {
                  e = !0;
                },
              });
              window.addEventListener("test", null, t);
            } catch (e) {}
            return e;
          }
          function w() {
            return (
              window.CSS && CSS.supports && CSS.supports("touch-action", "none")
            );
          }
          function S(e, t) {
            return 100 / (t - e);
          }
          function _(e, t, s) {
            return (100 * t) / (e[s + 1] - e[s]);
          }
          function C(e, t) {
            return _(e, e[0] < 0 ? t + Math.abs(e[0]) : t - e[0], 0);
          }
          function x(e, t) {
            return (t * (e[1] - e[0])) / 100 + e[0];
          }
          function E(e, t) {
            for (var s = 1; e >= t[s]; ) s += 1;
            return s;
          }
          function T(e, t, s) {
            if (s >= e.slice(-1)[0]) return 100;
            var i = E(s, e),
              n = e[i - 1],
              a = e[i],
              r = t[i - 1],
              o = t[i];
            return r + C([n, a], s) / S(r, o);
          }
          function k(e, t, s) {
            if (s >= 100) return e.slice(-1)[0];
            var i = E(s, t),
              n = e[i - 1],
              a = e[i],
              r = t[i - 1];
            return x([n, a], (s - r) * S(r, t[i]));
          }
          function A(e, t, s, i) {
            if (100 === i) return i;
            var n = E(i, e),
              a = e[n - 1],
              r = e[n];
            return s
              ? i - a > (r - a) / 2
                ? r
                : a
              : t[n - 1]
              ? e[n - 1] + o(i - e[n - 1], t[n - 1])
              : i;
          }
          var L, P;
          (e.PipsMode = void 0),
            ((P = e.PipsMode || (e.PipsMode = {})).Range = "range"),
            (P.Steps = "steps"),
            (P.Positions = "positions"),
            (P.Count = "count"),
            (P.Values = "values"),
            (e.PipsType = void 0),
            ((L = e.PipsType || (e.PipsType = {}))[(L.None = -1)] = "None"),
            (L[(L.NoValue = 0)] = "NoValue"),
            (L[(L.LargeValue = 1)] = "LargeValue"),
            (L[(L.SmallValue = 2)] = "SmallValue");
          var M = (function () {
              function e(e, t, s) {
                var i;
                (this.xPct = []),
                  (this.xVal = []),
                  (this.xSteps = []),
                  (this.xNumSteps = []),
                  (this.xHighestCompleteStep = []),
                  (this.xSteps = [s || !1]),
                  (this.xNumSteps = [!1]),
                  (this.snap = t);
                var n = [];
                for (
                  Object.keys(e).forEach(function (t) {
                    n.push([p(e[t]), t]);
                  }),
                    n.sort(function (e, t) {
                      return e[0][0] - t[0][0];
                    }),
                    i = 0;
                  i < n.length;
                  i++
                )
                  this.handleEntryPoint(n[i][1], n[i][0]);
                for (
                  this.xNumSteps = this.xSteps.slice(0), i = 0;
                  i < this.xNumSteps.length;
                  i++
                )
                  this.handleStepPoint(i, this.xNumSteps[i]);
              }
              return (
                (e.prototype.getDistance = function (e) {
                  for (var t = [], s = 0; s < this.xNumSteps.length - 1; s++)
                    t[s] = _(this.xVal, e, s);
                  return t;
                }),
                (e.prototype.getAbsoluteDistance = function (e, t, s) {
                  var i,
                    n = 0;
                  if (e < this.xPct[this.xPct.length - 1])
                    for (; e > this.xPct[n + 1]; ) n++;
                  else
                    e === this.xPct[this.xPct.length - 1] &&
                      (n = this.xPct.length - 2);
                  s || e !== this.xPct[n + 1] || n++, null === t && (t = []);
                  var a = 1,
                    r = t[n],
                    o = 0,
                    l = 0,
                    d = 0,
                    c = 0;
                  for (
                    i = s
                      ? (e - this.xPct[n]) / (this.xPct[n + 1] - this.xPct[n])
                      : (this.xPct[n + 1] - e) /
                        (this.xPct[n + 1] - this.xPct[n]);
                    r > 0;

                  )
                    (o = this.xPct[n + 1 + c] - this.xPct[n + c]),
                      t[n + c] * a + 100 - 100 * i > 100
                        ? ((l = o * i), (a = (r - 100 * i) / t[n + c]), (i = 1))
                        : ((l = ((t[n + c] * o) / 100) * a), (a = 0)),
                      s
                        ? ((d -= l), this.xPct.length + c >= 1 && c--)
                        : ((d += l), this.xPct.length - c >= 1 && c++),
                      (r = t[n + c] * a);
                  return e + d;
                }),
                (e.prototype.toStepping = function (e) {
                  return (e = T(this.xVal, this.xPct, e));
                }),
                (e.prototype.fromStepping = function (e) {
                  return k(this.xVal, this.xPct, e);
                }),
                (e.prototype.getStep = function (e) {
                  return (e = A(this.xPct, this.xSteps, this.snap, e));
                }),
                (e.prototype.getDefaultStep = function (e, t, s) {
                  var i = E(e, this.xPct);
                  return (
                    (100 === e || (t && e === this.xPct[i - 1])) &&
                      (i = Math.max(i - 1, 1)),
                    (this.xVal[i] - this.xVal[i - 1]) / s
                  );
                }),
                (e.prototype.getNearbySteps = function (e) {
                  var t = E(e, this.xPct);
                  return {
                    stepBefore: {
                      startValue: this.xVal[t - 2],
                      step: this.xNumSteps[t - 2],
                      highestStep: this.xHighestCompleteStep[t - 2],
                    },
                    thisStep: {
                      startValue: this.xVal[t - 1],
                      step: this.xNumSteps[t - 1],
                      highestStep: this.xHighestCompleteStep[t - 1],
                    },
                    stepAfter: {
                      startValue: this.xVal[t],
                      step: this.xNumSteps[t],
                      highestStep: this.xHighestCompleteStep[t],
                    },
                  };
                }),
                (e.prototype.countStepDecimals = function () {
                  var e = this.xNumSteps.map(h);
                  return Math.max.apply(null, e);
                }),
                (e.prototype.hasNoSize = function () {
                  return this.xVal[0] === this.xVal[this.xVal.length - 1];
                }),
                (e.prototype.convert = function (e) {
                  return this.getStep(this.toStepping(e));
                }),
                (e.prototype.handleEntryPoint = function (e, t) {
                  var s;
                  if (
                    !d(
                      (s = "min" === e ? 0 : "max" === e ? 100 : parseFloat(e))
                    ) ||
                    !d(t[0])
                  )
                    throw new Error("noUiSlider: 'range' value isn't numeric.");
                  this.xPct.push(s), this.xVal.push(t[0]);
                  var i = Number(t[1]);
                  s
                    ? this.xSteps.push(!isNaN(i) && i)
                    : isNaN(i) || (this.xSteps[0] = i),
                    this.xHighestCompleteStep.push(0);
                }),
                (e.prototype.handleStepPoint = function (e, t) {
                  if (t)
                    if (this.xVal[e] !== this.xVal[e + 1]) {
                      this.xSteps[e] =
                        _([this.xVal[e], this.xVal[e + 1]], t, 0) /
                        S(this.xPct[e], this.xPct[e + 1]);
                      var s =
                          (this.xVal[e + 1] - this.xVal[e]) / this.xNumSteps[e],
                        i = Math.ceil(Number(s.toFixed(3)) - 1),
                        n = this.xVal[e] + this.xNumSteps[e] * i;
                      this.xHighestCompleteStep[e] = n;
                    } else
                      this.xSteps[e] = this.xHighestCompleteStep[e] =
                        this.xVal[e];
                }),
                e
              );
            })(),
            O = {
              to: function (e) {
                return void 0 === e ? "" : e.toFixed(2);
              },
              from: Number,
            },
            I = {
              target: "target",
              base: "base",
              origin: "origin",
              handle: "handle",
              handleLower: "handle-lower",
              handleUpper: "handle-upper",
              touchArea: "touch-area",
              horizontal: "horizontal",
              vertical: "vertical",
              background: "background",
              connect: "connect",
              connects: "connects",
              ltr: "ltr",
              rtl: "rtl",
              textDirectionLtr: "txt-dir-ltr",
              textDirectionRtl: "txt-dir-rtl",
              draggable: "draggable",
              drag: "state-drag",
              tap: "state-tap",
              active: "active",
              tooltip: "tooltip",
              pips: "pips",
              pipsHorizontal: "pips-horizontal",
              pipsVertical: "pips-vertical",
              marker: "marker",
              markerHorizontal: "marker-horizontal",
              markerVertical: "marker-vertical",
              markerNormal: "marker-normal",
              markerLarge: "marker-large",
              markerSub: "marker-sub",
              value: "value",
              valueHorizontal: "value-horizontal",
              valueVertical: "value-vertical",
              valueNormal: "value-normal",
              valueLarge: "value-large",
              valueSub: "value-sub",
            },
            N = { tooltips: ".__tooltips", aria: ".__aria" };
          function z(e, t) {
            if (!d(t)) throw new Error("noUiSlider: 'step' is not numeric.");
            e.singleStep = t;
          }
          function B(e, t) {
            if (!d(t))
              throw new Error(
                "noUiSlider: 'keyboardPageMultiplier' is not numeric."
              );
            e.keyboardPageMultiplier = t;
          }
          function D(e, t) {
            if (!d(t))
              throw new Error(
                "noUiSlider: 'keyboardMultiplier' is not numeric."
              );
            e.keyboardMultiplier = t;
          }
          function q(e, t) {
            if (!d(t))
              throw new Error(
                "noUiSlider: 'keyboardDefaultStep' is not numeric."
              );
            e.keyboardDefaultStep = t;
          }
          function $(e, t) {
            if ("object" != typeof t || Array.isArray(t))
              throw new Error("noUiSlider: 'range' is not an object.");
            if (void 0 === t.min || void 0 === t.max)
              throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");
            e.spectrum = new M(t, e.snap || !1, e.singleStep);
          }
          function j(e, t) {
            if (((t = p(t)), !Array.isArray(t) || !t.length))
              throw new Error("noUiSlider: 'start' option is incorrect.");
            (e.handles = t.length), (e.start = t);
          }
          function V(e, t) {
            if ("boolean" != typeof t)
              throw new Error("noUiSlider: 'snap' option must be a boolean.");
            e.snap = t;
          }
          function H(e, t) {
            if ("boolean" != typeof t)
              throw new Error(
                "noUiSlider: 'animate' option must be a boolean."
              );
            e.animate = t;
          }
          function G(e, t) {
            if ("number" != typeof t)
              throw new Error(
                "noUiSlider: 'animationDuration' option must be a number."
              );
            e.animationDuration = t;
          }
          function F(e, t) {
            var s,
              i = [!1];
            if (
              ("lower" === t ? (t = [!0, !1]) : "upper" === t && (t = [!1, !0]),
              !0 === t || !1 === t)
            ) {
              for (s = 1; s < e.handles; s++) i.push(t);
              i.push(!1);
            } else {
              if (!Array.isArray(t) || !t.length || t.length !== e.handles + 1)
                throw new Error(
                  "noUiSlider: 'connect' option doesn't match handle count."
                );
              i = t;
            }
            e.connect = i;
          }
          function U(e, t) {
            switch (t) {
              case "horizontal":
                e.ort = 0;
                break;
              case "vertical":
                e.ort = 1;
                break;
              default:
                throw new Error("noUiSlider: 'orientation' option is invalid.");
            }
          }
          function R(e, t) {
            if (!d(t))
              throw new Error("noUiSlider: 'margin' option must be numeric.");
            0 !== t && (e.margin = e.spectrum.getDistance(t));
          }
          function W(e, t) {
            if (!d(t))
              throw new Error("noUiSlider: 'limit' option must be numeric.");
            if (
              ((e.limit = e.spectrum.getDistance(t)), !e.limit || e.handles < 2)
            )
              throw new Error(
                "noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles."
              );
          }
          function Y(e, t) {
            var s;
            if (!d(t) && !Array.isArray(t))
              throw new Error(
                "noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers."
              );
            if (Array.isArray(t) && 2 !== t.length && !d(t[0]) && !d(t[1]))
              throw new Error(
                "noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers."
              );
            if (0 !== t) {
              for (
                Array.isArray(t) || (t = [t, t]),
                  e.padding = [
                    e.spectrum.getDistance(t[0]),
                    e.spectrum.getDistance(t[1]),
                  ],
                  s = 0;
                s < e.spectrum.xNumSteps.length - 1;
                s++
              )
                if (e.padding[0][s] < 0 || e.padding[1][s] < 0)
                  throw new Error(
                    "noUiSlider: 'padding' option must be a positive number(s)."
                  );
              var i = t[0] + t[1],
                n = e.spectrum.xVal[0];
              if (i / (e.spectrum.xVal[e.spectrum.xVal.length - 1] - n) > 1)
                throw new Error(
                  "noUiSlider: 'padding' option must not exceed 100% of the range."
                );
            }
          }
          function X(e, t) {
            switch (t) {
              case "ltr":
                e.dir = 0;
                break;
              case "rtl":
                e.dir = 1;
                break;
              default:
                throw new Error(
                  "noUiSlider: 'direction' option was not recognized."
                );
            }
          }
          function K(e, t) {
            if ("string" != typeof t)
              throw new Error(
                "noUiSlider: 'behaviour' must be a string containing options."
              );
            var s = t.indexOf("tap") >= 0,
              i = t.indexOf("drag") >= 0,
              n = t.indexOf("fixed") >= 0,
              a = t.indexOf("snap") >= 0,
              r = t.indexOf("hover") >= 0,
              o = t.indexOf("unconstrained") >= 0,
              l = t.indexOf("drag-all") >= 0,
              d = t.indexOf("smooth-steps") >= 0;
            if (n) {
              if (2 !== e.handles)
                throw new Error(
                  "noUiSlider: 'fixed' behaviour must be used with 2 handles"
                );
              R(e, e.start[1] - e.start[0]);
            }
            if (o && (e.margin || e.limit))
              throw new Error(
                "noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit"
              );
            e.events = {
              tap: s || a,
              drag: i,
              dragAll: l,
              smoothSteps: d,
              fixed: n,
              snap: a,
              hover: r,
              unconstrained: o,
            };
          }
          function Z(e, t) {
            if (!1 !== t)
              if (!0 === t || s(t)) {
                e.tooltips = [];
                for (var i = 0; i < e.handles; i++) e.tooltips.push(t);
              } else {
                if ((t = p(t)).length !== e.handles)
                  throw new Error(
                    "noUiSlider: must pass a formatter for all handles."
                  );
                t.forEach(function (e) {
                  if ("boolean" != typeof e && !s(e))
                    throw new Error(
                      "noUiSlider: 'tooltips' must be passed a formatter or 'false'."
                    );
                }),
                  (e.tooltips = t);
              }
          }
          function Q(e, t) {
            if (t.length !== e.handles)
              throw new Error(
                "noUiSlider: must pass a attributes for all handles."
              );
            e.handleAttributes = t;
          }
          function J(e, t) {
            if (!s(t))
              throw new Error("noUiSlider: 'ariaFormat' requires 'to' method.");
            e.ariaFormat = t;
          }
          function ee(e, s) {
            if (!t(s))
              throw new Error(
                "noUiSlider: 'format' requires 'to' and 'from' methods."
              );
            e.format = s;
          }
          function te(e, t) {
            if ("boolean" != typeof t)
              throw new Error(
                "noUiSlider: 'keyboardSupport' option must be a boolean."
              );
            e.keyboardSupport = t;
          }
          function se(e, t) {
            e.documentElement = t;
          }
          function ie(e, t) {
            if ("string" != typeof t && !1 !== t)
              throw new Error(
                "noUiSlider: 'cssPrefix' must be a string or `false`."
              );
            e.cssPrefix = t;
          }
          function ne(e, t) {
            if ("object" != typeof t)
              throw new Error("noUiSlider: 'cssClasses' must be an object.");
            "string" == typeof e.cssPrefix
              ? ((e.cssClasses = {}),
                Object.keys(t).forEach(function (s) {
                  e.cssClasses[s] = e.cssPrefix + t[s];
                }))
              : (e.cssClasses = t);
          }
          function ae(e) {
            var t = {
                margin: null,
                limit: null,
                padding: null,
                animate: !0,
                animationDuration: 300,
                ariaFormat: O,
                format: O,
              },
              s = {
                step: { r: !1, t: z },
                keyboardPageMultiplier: { r: !1, t: B },
                keyboardMultiplier: { r: !1, t: D },
                keyboardDefaultStep: { r: !1, t: q },
                start: { r: !0, t: j },
                connect: { r: !0, t: F },
                direction: { r: !0, t: X },
                snap: { r: !1, t: V },
                animate: { r: !1, t: H },
                animationDuration: { r: !1, t: G },
                range: { r: !0, t: $ },
                orientation: { r: !1, t: U },
                margin: { r: !1, t: R },
                limit: { r: !1, t: W },
                padding: { r: !1, t: Y },
                behaviour: { r: !0, t: K },
                ariaFormat: { r: !1, t: J },
                format: { r: !1, t: ee },
                tooltips: { r: !1, t: Z },
                keyboardSupport: { r: !0, t: te },
                documentElement: { r: !1, t: se },
                cssPrefix: { r: !0, t: ie },
                cssClasses: { r: !0, t: ne },
                handleAttributes: { r: !1, t: Q },
              },
              i = {
                connect: !1,
                direction: "ltr",
                behaviour: "tap",
                orientation: "horizontal",
                keyboardSupport: !0,
                cssPrefix: "noUi-",
                cssClasses: I,
                keyboardPageMultiplier: 5,
                keyboardMultiplier: 1,
                keyboardDefaultStep: 10,
              };
            e.format && !e.ariaFormat && (e.ariaFormat = e.format),
              Object.keys(s).forEach(function (a) {
                if (n(e[a]) || void 0 !== i[a])
                  s[a].t(t, n(e[a]) ? e[a] : i[a]);
                else if (s[a].r)
                  throw new Error("noUiSlider: '" + a + "' is required.");
              }),
              (t.pips = e.pips);
            var a = document.createElement("div"),
              r = void 0 !== a.style.msTransform,
              o = void 0 !== a.style.transform;
            t.transformRule = o
              ? "transform"
              : r
              ? "msTransform"
              : "webkitTransform";
            var l = [
              ["left", "top"],
              ["right", "bottom"],
            ];
            return (t.style = l[t.dir][t.ort]), t;
          }
          function re(t, s, o) {
            var d,
              h,
              S,
              _,
              C,
              x = b(),
              E = w() && y(),
              T = t,
              k = s.spectrum,
              A = [],
              L = [],
              P = [],
              M = 0,
              O = {},
              I = t.ownerDocument,
              z = s.documentElement || I.documentElement,
              B = I.body,
              D = "rtl" === I.dir || 1 === s.ort ? 0 : 100;
            function q(e, t) {
              var s = I.createElement("div");
              return t && f(s, t), e.appendChild(s), s;
            }
            function $(e, t) {
              var i = q(e, s.cssClasses.origin),
                n = q(i, s.cssClasses.handle);
              if (
                (q(n, s.cssClasses.touchArea),
                n.setAttribute("data-handle", String(t)),
                s.keyboardSupport &&
                  (n.setAttribute("tabindex", "0"),
                  n.addEventListener("keydown", function (e) {
                    return me(e, t);
                  })),
                void 0 !== s.handleAttributes)
              ) {
                var a = s.handleAttributes[t];
                Object.keys(a).forEach(function (e) {
                  n.setAttribute(e, a[e]);
                });
              }
              return (
                n.setAttribute("role", "slider"),
                n.setAttribute(
                  "aria-orientation",
                  s.ort ? "vertical" : "horizontal"
                ),
                0 === t
                  ? f(n, s.cssClasses.handleLower)
                  : t === s.handles - 1 && f(n, s.cssClasses.handleUpper),
                (i.handle = n),
                i
              );
            }
            function j(e, t) {
              return !!t && q(e, s.cssClasses.connect);
            }
            function V(e, t) {
              var i = q(t, s.cssClasses.connects);
              (h = []), (S = []).push(j(i, e[0]));
              for (var n = 0; n < s.handles; n++)
                h.push($(t, n)), (P[n] = n), S.push(j(i, e[n + 1]));
            }
            function H(e) {
              return (
                f(e, s.cssClasses.target),
                0 === s.dir ? f(e, s.cssClasses.ltr) : f(e, s.cssClasses.rtl),
                0 === s.ort
                  ? f(e, s.cssClasses.horizontal)
                  : f(e, s.cssClasses.vertical),
                f(
                  e,
                  "rtl" === getComputedStyle(e).direction
                    ? s.cssClasses.textDirectionRtl
                    : s.cssClasses.textDirectionLtr
                ),
                q(e, s.cssClasses.base)
              );
            }
            function G(e, t) {
              return (
                !(!s.tooltips || !s.tooltips[t]) &&
                q(e.firstChild, s.cssClasses.tooltip)
              );
            }
            function F() {
              return T.hasAttribute("disabled");
            }
            function U(e) {
              return h[e].hasAttribute("disabled");
            }
            function R(e) {
              null != e
                ? (h[e].setAttribute("disabled", ""),
                  h[e].handle.removeAttribute("tabindex"))
                : (T.setAttribute("disabled", ""),
                  h.forEach(function (e) {
                    e.handle.removeAttribute("tabindex");
                  }));
            }
            function W(e) {
              null != e
                ? (h[e].removeAttribute("disabled"),
                  h[e].handle.setAttribute("tabindex", "0"))
                : (T.removeAttribute("disabled"),
                  h.forEach(function (e) {
                    e.removeAttribute("disabled"),
                      e.handle.setAttribute("tabindex", "0");
                  }));
            }
            function Y() {
              C &&
                (ye("update" + N.tooltips),
                C.forEach(function (e) {
                  e && i(e);
                }),
                (C = null));
            }
            function X() {
              Y(),
                (C = h.map(G)),
                ve("update" + N.tooltips, function (e, t, i) {
                  if (C && s.tooltips && !1 !== C[t]) {
                    var n = e[t];
                    !0 !== s.tooltips[t] && (n = s.tooltips[t].to(i[t])),
                      (C[t].innerHTML = n);
                  }
                });
            }
            function K() {
              ye("update" + N.aria),
                ve("update" + N.aria, function (e, t, i, n, a) {
                  P.forEach(function (e) {
                    var t = h[e],
                      n = Se(L, e, 0, !0, !0, !0),
                      r = Se(L, e, 100, !0, !0, !0),
                      o = a[e],
                      l = String(s.ariaFormat.to(i[e]));
                    (n = k.fromStepping(n).toFixed(1)),
                      (r = k.fromStepping(r).toFixed(1)),
                      (o = k.fromStepping(o).toFixed(1)),
                      t.children[0].setAttribute("aria-valuemin", n),
                      t.children[0].setAttribute("aria-valuemax", r),
                      t.children[0].setAttribute("aria-valuenow", o),
                      t.children[0].setAttribute("aria-valuetext", l);
                  });
                });
            }
            function Z(t) {
              if (t.mode === e.PipsMode.Range || t.mode === e.PipsMode.Steps)
                return k.xVal;
              if (t.mode === e.PipsMode.Count) {
                if (t.values < 2)
                  throw new Error(
                    "noUiSlider: 'values' (>= 2) required for mode 'count'."
                  );
                for (var s = t.values - 1, i = 100 / s, n = []; s--; )
                  n[s] = s * i;
                return n.push(100), Q(n, t.stepped);
              }
              return t.mode === e.PipsMode.Positions
                ? Q(t.values, t.stepped)
                : t.mode === e.PipsMode.Values
                ? t.stepped
                  ? t.values.map(function (e) {
                      return k.fromStepping(k.getStep(k.toStepping(e)));
                    })
                  : t.values
                : [];
            }
            function Q(e, t) {
              return e.map(function (e) {
                return k.fromStepping(t ? k.getStep(e) : e);
              });
            }
            function J(t) {
              function s(e, t) {
                return Number((e + t).toFixed(7));
              }
              var i = Z(t),
                n = {},
                a = k.xVal[0],
                o = k.xVal[k.xVal.length - 1],
                l = !1,
                d = !1,
                c = 0;
              return (
                (i = r(
                  i.slice().sort(function (e, t) {
                    return e - t;
                  })
                ))[0] !== a && (i.unshift(a), (l = !0)),
                i[i.length - 1] !== o && (i.push(o), (d = !0)),
                i.forEach(function (a, r) {
                  var o,
                    u,
                    p,
                    h,
                    f,
                    m,
                    g,
                    v,
                    b,
                    y,
                    w = a,
                    S = i[r + 1],
                    _ = t.mode === e.PipsMode.Steps;
                  for (
                    _ && (o = k.xNumSteps[r]),
                      o || (o = S - w),
                      void 0 === S && (S = w),
                      o = Math.max(o, 1e-7),
                      u = w;
                    u <= S;
                    u = s(u, o)
                  ) {
                    for (
                      v = (f = (h = k.toStepping(u)) - c) / (t.density || 1),
                        y = f / (b = Math.round(v)),
                        p = 1;
                      p <= b;
                      p += 1
                    )
                      n[(m = c + p * y).toFixed(5)] = [k.fromStepping(m), 0];
                    (g =
                      i.indexOf(u) > -1
                        ? e.PipsType.LargeValue
                        : _
                        ? e.PipsType.SmallValue
                        : e.PipsType.NoValue),
                      !r && l && u !== S && (g = 0),
                      (u === S && d) || (n[h.toFixed(5)] = [u, g]),
                      (c = h);
                  }
                }),
                n
              );
            }
            function ee(t, i, n) {
              var a,
                r,
                o = I.createElement("div"),
                l =
                  (((a = {})[e.PipsType.None] = ""),
                  (a[e.PipsType.NoValue] = s.cssClasses.valueNormal),
                  (a[e.PipsType.LargeValue] = s.cssClasses.valueLarge),
                  (a[e.PipsType.SmallValue] = s.cssClasses.valueSub),
                  a),
                d =
                  (((r = {})[e.PipsType.None] = ""),
                  (r[e.PipsType.NoValue] = s.cssClasses.markerNormal),
                  (r[e.PipsType.LargeValue] = s.cssClasses.markerLarge),
                  (r[e.PipsType.SmallValue] = s.cssClasses.markerSub),
                  r),
                c = [s.cssClasses.valueHorizontal, s.cssClasses.valueVertical],
                u = [
                  s.cssClasses.markerHorizontal,
                  s.cssClasses.markerVertical,
                ];
              function p(e, t) {
                var i = t === s.cssClasses.value,
                  n = i ? l : d;
                return t + " " + (i ? c : u)[s.ort] + " " + n[e];
              }
              function h(t, a, r) {
                if ((r = i ? i(a, r) : r) !== e.PipsType.None) {
                  var l = q(o, !1);
                  (l.className = p(r, s.cssClasses.marker)),
                    (l.style[s.style] = t + "%"),
                    r > e.PipsType.NoValue &&
                      (((l = q(o, !1)).className = p(r, s.cssClasses.value)),
                      l.setAttribute("data-value", String(a)),
                      (l.style[s.style] = t + "%"),
                      (l.innerHTML = String(n.to(a))));
                }
              }
              return (
                f(o, s.cssClasses.pips),
                f(
                  o,
                  0 === s.ort
                    ? s.cssClasses.pipsHorizontal
                    : s.cssClasses.pipsVertical
                ),
                Object.keys(t).forEach(function (e) {
                  h(e, t[e][0], t[e][1]);
                }),
                o
              );
            }
            function te() {
              _ && (i(_), (_ = null));
            }
            function se(e) {
              te();
              var t = J(e),
                s = e.filter,
                i = e.format || {
                  to: function (e) {
                    return String(Math.round(e));
                  },
                };
              return (_ = T.appendChild(ee(t, s, i)));
            }
            function ie() {
              var e = d.getBoundingClientRect(),
                t = "offset" + ["Width", "Height"][s.ort];
              return 0 === s.ort ? e.width || d[t] : e.height || d[t];
            }
            function ne(e, t, i, n) {
              var a = function (a) {
                  var r = re(a, n.pageOffset, n.target || t);
                  return (
                    !!r &&
                    !(F() && !n.doNotReject) &&
                    !(g(T, s.cssClasses.tap) && !n.doNotReject) &&
                    !(e === x.start && void 0 !== r.buttons && r.buttons > 1) &&
                    (!n.hover || !r.buttons) &&
                    (E || r.preventDefault(),
                    (r.calcPoint = r.points[s.ort]),
                    void i(r, n))
                  );
                },
                r = [];
              return (
                e.split(" ").forEach(function (e) {
                  t.addEventListener(e, a, !!E && { passive: !0 }),
                    r.push([e, a]);
                }),
                r
              );
            }
            function re(e, t, s) {
              var i = 0 === e.type.indexOf("touch"),
                n = 0 === e.type.indexOf("mouse"),
                a = 0 === e.type.indexOf("pointer"),
                r = 0,
                o = 0;
              if (
                (0 === e.type.indexOf("MSPointer") && (a = !0),
                "mousedown" === e.type && !e.buttons && !e.touches)
              )
                return !1;
              if (i) {
                var l = function (t) {
                  var i = t.target;
                  return (
                    i === s ||
                    s.contains(i) ||
                    (e.composed && e.composedPath().shift() === s)
                  );
                };
                if ("touchstart" === e.type) {
                  var d = Array.prototype.filter.call(e.touches, l);
                  if (d.length > 1) return !1;
                  (r = d[0].pageX), (o = d[0].pageY);
                } else {
                  var c = Array.prototype.find.call(e.changedTouches, l);
                  if (!c) return !1;
                  (r = c.pageX), (o = c.pageY);
                }
              }
              return (
                (t = t || v(I)),
                (n || a) && ((r = e.clientX + t.x), (o = e.clientY + t.y)),
                (e.pageOffset = t),
                (e.points = [r, o]),
                (e.cursor = n || a),
                e
              );
            }
            function oe(e) {
              var t = (100 * (e - l(d, s.ort))) / ie();
              return (t = u(t)), s.dir ? 100 - t : t;
            }
            function le(e) {
              var t = 100,
                s = !1;
              return (
                h.forEach(function (i, n) {
                  if (!U(n)) {
                    var a = L[n],
                      r = Math.abs(a - e);
                    (r < t || (r <= t && e > a) || (100 === r && 100 === t)) &&
                      ((s = n), (t = r));
                  }
                }),
                s
              );
            }
            function de(e, t) {
              "mouseout" === e.type &&
                "HTML" === e.target.nodeName &&
                null === e.relatedTarget &&
                ue(e, t);
            }
            function ce(e, t) {
              if (
                -1 === navigator.appVersion.indexOf("MSIE 9") &&
                0 === e.buttons &&
                0 !== t.buttonsProperty
              )
                return ue(e, t);
              var i = (s.dir ? -1 : 1) * (e.calcPoint - t.startCalcPoint);
              Ce(
                i > 0,
                (100 * i) / t.baseSize,
                t.locations,
                t.handleNumbers,
                t.connect
              );
            }
            function ue(e, t) {
              t.handle && (m(t.handle, s.cssClasses.active), (M -= 1)),
                t.listeners.forEach(function (e) {
                  z.removeEventListener(e[0], e[1]);
                }),
                0 === M &&
                  (m(T, s.cssClasses.drag),
                  Te(),
                  e.cursor &&
                    ((B.style.cursor = ""),
                    B.removeEventListener("selectstart", a))),
                s.events.smoothSteps &&
                  (t.handleNumbers.forEach(function (e) {
                    ke(e, L[e], !0, !0, !1, !1);
                  }),
                  t.handleNumbers.forEach(function (e) {
                    we("update", e);
                  })),
                t.handleNumbers.forEach(function (e) {
                  we("change", e), we("set", e), we("end", e);
                });
            }
            function pe(e, t) {
              if (!t.handleNumbers.some(U)) {
                var i;
                1 === t.handleNumbers.length &&
                  ((i = h[t.handleNumbers[0]].children[0]),
                  (M += 1),
                  f(i, s.cssClasses.active)),
                  e.stopPropagation();
                var n = [],
                  r = ne(x.move, z, ce, {
                    target: e.target,
                    handle: i,
                    connect: t.connect,
                    listeners: n,
                    startCalcPoint: e.calcPoint,
                    baseSize: ie(),
                    pageOffset: e.pageOffset,
                    handleNumbers: t.handleNumbers,
                    buttonsProperty: e.buttons,
                    locations: L.slice(),
                  }),
                  o = ne(x.end, z, ue, {
                    target: e.target,
                    handle: i,
                    listeners: n,
                    doNotReject: !0,
                    handleNumbers: t.handleNumbers,
                  }),
                  l = ne("mouseout", z, de, {
                    target: e.target,
                    handle: i,
                    listeners: n,
                    doNotReject: !0,
                    handleNumbers: t.handleNumbers,
                  });
                n.push.apply(n, r.concat(o, l)),
                  e.cursor &&
                    ((B.style.cursor = getComputedStyle(e.target).cursor),
                    h.length > 1 && f(T, s.cssClasses.drag),
                    B.addEventListener("selectstart", a, !1)),
                  t.handleNumbers.forEach(function (e) {
                    we("start", e);
                  });
              }
            }
            function he(e) {
              e.stopPropagation();
              var t = oe(e.calcPoint),
                i = le(t);
              !1 !== i &&
                (s.events.snap || c(T, s.cssClasses.tap, s.animationDuration),
                ke(i, t, !0, !0),
                Te(),
                we("slide", i, !0),
                we("update", i, !0),
                s.events.snap
                  ? pe(e, { handleNumbers: [i] })
                  : (we("change", i, !0), we("set", i, !0)));
            }
            function fe(e) {
              var t = oe(e.calcPoint),
                s = k.getStep(t),
                i = k.fromStepping(s);
              Object.keys(O).forEach(function (e) {
                "hover" === e.split(".")[0] &&
                  O[e].forEach(function (e) {
                    e.call($e, i);
                  });
              });
            }
            function me(e, t) {
              if (F() || U(t)) return !1;
              var i = ["Left", "Right"],
                n = ["Down", "Up"],
                a = ["PageDown", "PageUp"],
                r = ["Home", "End"];
              s.dir && !s.ort
                ? i.reverse()
                : s.ort && !s.dir && (n.reverse(), a.reverse());
              var o,
                l = e.key.replace("Arrow", ""),
                d = l === a[0],
                c = l === a[1],
                u = l === n[0] || l === i[0] || d,
                p = l === n[1] || l === i[1] || c,
                h = l === r[0],
                f = l === r[1];
              if (!(u || p || h || f)) return !0;
              if ((e.preventDefault(), p || u)) {
                var m = u ? 0 : 1,
                  g = ze(t)[m];
                if (null === g) return !1;
                !1 === g &&
                  (g = k.getDefaultStep(L[t], u, s.keyboardDefaultStep)),
                  (g *=
                    c || d ? s.keyboardPageMultiplier : s.keyboardMultiplier),
                  (g = Math.max(g, 1e-7)),
                  (g *= u ? -1 : 1),
                  (o = A[t] + g);
              } else
                o = f
                  ? s.spectrum.xVal[s.spectrum.xVal.length - 1]
                  : s.spectrum.xVal[0];
              return (
                ke(t, k.toStepping(o), !0, !0),
                we("slide", t),
                we("update", t),
                we("change", t),
                we("set", t),
                !1
              );
            }
            function ge(e) {
              e.fixed ||
                h.forEach(function (e, t) {
                  ne(x.start, e.children[0], pe, { handleNumbers: [t] });
                }),
                e.tap && ne(x.start, d, he, {}),
                e.hover && ne(x.move, d, fe, { hover: !0 }),
                e.drag &&
                  S.forEach(function (t, i) {
                    if (!1 !== t && 0 !== i && i !== S.length - 1) {
                      var n = h[i - 1],
                        a = h[i],
                        r = [t],
                        o = [n, a],
                        l = [i - 1, i];
                      f(t, s.cssClasses.draggable),
                        e.fixed &&
                          (r.push(n.children[0]), r.push(a.children[0])),
                        e.dragAll && ((o = h), (l = P)),
                        r.forEach(function (e) {
                          ne(x.start, e, pe, {
                            handles: o,
                            handleNumbers: l,
                            connect: t,
                          });
                        });
                    }
                  });
            }
            function ve(e, t) {
              (O[e] = O[e] || []),
                O[e].push(t),
                "update" === e.split(".")[0] &&
                  h.forEach(function (e, t) {
                    we("update", t);
                  });
            }
            function be(e) {
              return e === N.aria || e === N.tooltips;
            }
            function ye(e) {
              var t = e && e.split(".")[0],
                s = t ? e.substring(t.length) : e;
              Object.keys(O).forEach(function (e) {
                var i = e.split(".")[0],
                  n = e.substring(i.length);
                (t && t !== i) ||
                  (s && s !== n) ||
                  (be(n) && s !== n) ||
                  delete O[e];
              });
            }
            function we(e, t, i) {
              Object.keys(O).forEach(function (n) {
                var a = n.split(".")[0];
                e === a &&
                  O[n].forEach(function (e) {
                    e.call(
                      $e,
                      A.map(s.format.to),
                      t,
                      A.slice(),
                      i || !1,
                      L.slice(),
                      $e
                    );
                  });
              });
            }
            function Se(e, t, i, n, a, r, o) {
              var l;
              return (
                h.length > 1 &&
                  !s.events.unconstrained &&
                  (n &&
                    t > 0 &&
                    ((l = k.getAbsoluteDistance(e[t - 1], s.margin, !1)),
                    (i = Math.max(i, l))),
                  a &&
                    t < h.length - 1 &&
                    ((l = k.getAbsoluteDistance(e[t + 1], s.margin, !0)),
                    (i = Math.min(i, l)))),
                h.length > 1 &&
                  s.limit &&
                  (n &&
                    t > 0 &&
                    ((l = k.getAbsoluteDistance(e[t - 1], s.limit, !1)),
                    (i = Math.min(i, l))),
                  a &&
                    t < h.length - 1 &&
                    ((l = k.getAbsoluteDistance(e[t + 1], s.limit, !0)),
                    (i = Math.max(i, l)))),
                s.padding &&
                  (0 === t &&
                    ((l = k.getAbsoluteDistance(0, s.padding[0], !1)),
                    (i = Math.max(i, l))),
                  t === h.length - 1 &&
                    ((l = k.getAbsoluteDistance(100, s.padding[1], !0)),
                    (i = Math.min(i, l)))),
                o || (i = k.getStep(i)),
                !((i = u(i)) === e[t] && !r) && i
              );
            }
            function _e(e, t) {
              var i = s.ort;
              return (i ? t : e) + ", " + (i ? e : t);
            }
            function Ce(e, t, i, n, a) {
              var r = i.slice(),
                o = n[0],
                l = s.events.smoothSteps,
                d = [!e, e],
                c = [e, !e];
              (n = n.slice()),
                e && n.reverse(),
                n.length > 1
                  ? n.forEach(function (e, s) {
                      var i = Se(r, e, r[e] + t, d[s], c[s], !1, l);
                      !1 === i ? (t = 0) : ((t = i - r[e]), (r[e] = i));
                    })
                  : (d = c = [!0]);
              var u = !1;
              n.forEach(function (e, s) {
                u = ke(e, i[e] + t, d[s], c[s], !1, l) || u;
              }),
                u &&
                  (n.forEach(function (e) {
                    we("update", e), we("slide", e);
                  }),
                  null != a && we("drag", o));
            }
            function xe(e, t) {
              return s.dir ? 100 - e - t : e;
            }
            function Ee(e, t) {
              (L[e] = t), (A[e] = k.fromStepping(t));
              var i = "translate(" + _e(xe(t, 0) - D + "%", "0") + ")";
              (h[e].style[s.transformRule] = i), Ae(e), Ae(e + 1);
            }
            function Te() {
              P.forEach(function (e) {
                var t = L[e] > 50 ? -1 : 1,
                  s = 3 + (h.length + t * e);
                h[e].style.zIndex = String(s);
              });
            }
            function ke(e, t, s, i, n, a) {
              return (
                n || (t = Se(L, e, t, s, i, !1, a)), !1 !== t && (Ee(e, t), !0)
              );
            }
            function Ae(e) {
              if (S[e]) {
                var t = 0,
                  i = 100;
                0 !== e && (t = L[e - 1]), e !== S.length - 1 && (i = L[e]);
                var n = i - t,
                  a = "translate(" + _e(xe(t, n) + "%", "0") + ")",
                  r = "scale(" + _e(n / 100, "1") + ")";
                S[e].style[s.transformRule] = a + " " + r;
              }
            }
            function Le(e, t) {
              return null === e || !1 === e || void 0 === e
                ? L[t]
                : ("number" == typeof e && (e = String(e)),
                  !1 !== (e = s.format.from(e)) && (e = k.toStepping(e)),
                  !1 === e || isNaN(e) ? L[t] : e);
            }
            function Pe(e, t, i) {
              var n = p(e),
                a = void 0 === L[0];
              (t = void 0 === t || t),
                s.animate && !a && c(T, s.cssClasses.tap, s.animationDuration),
                P.forEach(function (e) {
                  ke(e, Le(n[e], e), !0, !1, i);
                });
              var r = 1 === P.length ? 0 : 1;
              if (a && k.hasNoSize() && ((i = !0), (L[0] = 0), P.length > 1)) {
                var o = 100 / (P.length - 1);
                P.forEach(function (e) {
                  L[e] = e * o;
                });
              }
              for (; r < P.length; ++r)
                P.forEach(function (e) {
                  ke(e, L[e], !0, !0, i);
                });
              Te(),
                P.forEach(function (e) {
                  we("update", e), null !== n[e] && t && we("set", e);
                });
            }
            function Me(e) {
              Pe(s.start, e);
            }
            function Oe(e, t, s, i) {
              if (!((e = Number(e)) >= 0 && e < P.length))
                throw new Error("noUiSlider: invalid handle number, got: " + e);
              ke(e, Le(t, e), !0, !0, i), we("update", e), s && we("set", e);
            }
            function Ie(e) {
              if ((void 0 === e && (e = !1), e))
                return 1 === A.length ? A[0] : A.slice(0);
              var t = A.map(s.format.to);
              return 1 === t.length ? t[0] : t;
            }
            function Ne() {
              for (
                ye(N.aria),
                  ye(N.tooltips),
                  Object.keys(s.cssClasses).forEach(function (e) {
                    m(T, s.cssClasses[e]);
                  });
                T.firstChild;

              )
                T.removeChild(T.firstChild);
              delete T.noUiSlider;
            }
            function ze(e) {
              var t = L[e],
                i = k.getNearbySteps(t),
                n = A[e],
                a = i.thisStep.step,
                r = null;
              if (s.snap)
                return [
                  n - i.stepBefore.startValue || null,
                  i.stepAfter.startValue - n || null,
                ];
              !1 !== a &&
                n + a > i.stepAfter.startValue &&
                (a = i.stepAfter.startValue - n),
                (r =
                  n > i.thisStep.startValue
                    ? i.thisStep.step
                    : !1 !== i.stepBefore.step && n - i.stepBefore.highestStep),
                100 === t ? (a = null) : 0 === t && (r = null);
              var o = k.countStepDecimals();
              return (
                null !== a && !1 !== a && (a = Number(a.toFixed(o))),
                null !== r && !1 !== r && (r = Number(r.toFixed(o))),
                [r, a]
              );
            }
            function Be() {
              return P.map(ze);
            }
            function De(e, t) {
              var i = Ie(),
                a = [
                  "margin",
                  "limit",
                  "padding",
                  "range",
                  "animate",
                  "snap",
                  "step",
                  "format",
                  "pips",
                  "tooltips",
                ];
              a.forEach(function (t) {
                void 0 !== e[t] && (o[t] = e[t]);
              });
              var r = ae(o);
              a.forEach(function (t) {
                void 0 !== e[t] && (s[t] = r[t]);
              }),
                (k = r.spectrum),
                (s.margin = r.margin),
                (s.limit = r.limit),
                (s.padding = r.padding),
                s.pips ? se(s.pips) : te(),
                s.tooltips ? X() : Y(),
                (L = []),
                Pe(n(e.start) ? e.start : i, t);
            }
            function qe() {
              (d = H(T)),
                V(s.connect, d),
                ge(s.events),
                Pe(s.start),
                s.pips && se(s.pips),
                s.tooltips && X(),
                K();
            }
            qe();
            var $e = {
              destroy: Ne,
              steps: Be,
              on: ve,
              off: ye,
              get: Ie,
              set: Pe,
              setHandle: Oe,
              reset: Me,
              disable: R,
              enable: W,
              __moveHandles: function (e, t, s) {
                Ce(e, t, L, s);
              },
              options: o,
              updateOptions: De,
              target: T,
              removePips: te,
              removeTooltips: Y,
              getPositions: function () {
                return L.slice();
              },
              getTooltips: function () {
                return C;
              },
              getOrigins: function () {
                return h;
              },
              pips: se,
            };
            return $e;
          }
          function oe(e, t) {
            if (!e || !e.nodeName)
              throw new Error(
                "noUiSlider: create requires a single element, got: " + e
              );
            if (e.noUiSlider)
              throw new Error("noUiSlider: Slider was already initialized.");
            var s = re(e, ae(t), t);
            return (e.noUiSlider = s), s;
          }
          var le = { __spectrum: M, cssClasses: I, create: oe };
          (e.create = oe),
            (e.cssClasses = I),
            (e.default = le),
            Object.defineProperty(e, "__esModule", { value: !0 });
        })(t);
      },
    },
    t = {};
  function s(i) {
    var n = t[i];
    if (void 0 !== n) return n.exports;
    var a = (t[i] = { exports: {} });
    return e[i].call(a.exports, a, a.exports, s), a.exports;
  }
  (() => {
    "use strict";
    function e(e) {
      this.type = e;
    }
    (e.prototype.init = function () {
      const e = this;
      (this.оbjects = []),
        (this.daClassname = "_dynamic_adapt_"),
        (this.nodes = document.querySelectorAll("[data-da]"));
      for (let e = 0; e < this.nodes.length; e++) {
        const t = this.nodes[e],
          s = t.dataset.da.trim().split(","),
          i = {};
        (i.element = t),
          (i.parent = t.parentNode),
          (i.destination = document.querySelector(s[0].trim())),
          (i.breakpoint = s[1] ? s[1].trim() : "767"),
          (i.place = s[2] ? s[2].trim() : "last"),
          (i.index = this.indexInParent(i.parent, i.element)),
          this.оbjects.push(i);
      }
      this.arraySort(this.оbjects),
        (this.mediaQueries = Array.prototype.map.call(
          this.оbjects,
          function (e) {
            return (
              "(" +
              this.type +
              "-width: " +
              e.breakpoint +
              "px)," +
              e.breakpoint
            );
          },
          this
        )),
        (this.mediaQueries = Array.prototype.filter.call(
          this.mediaQueries,
          function (e, t, s) {
            return Array.prototype.indexOf.call(s, e) === t;
          }
        ));
      for (let t = 0; t < this.mediaQueries.length; t++) {
        const s = this.mediaQueries[t],
          i = String.prototype.split.call(s, ","),
          n = window.matchMedia(i[0]),
          a = i[1],
          r = Array.prototype.filter.call(this.оbjects, function (e) {
            return e.breakpoint === a;
          });
        n.addListener(function () {
          e.mediaHandler(n, r);
        }),
          this.mediaHandler(n, r);
      }
    }),
      (e.prototype.mediaHandler = function (e, t) {
        if (e.matches)
          for (let e = 0; e < t.length; e++) {
            const s = t[e];
            (s.index = this.indexInParent(s.parent, s.element)),
              this.moveTo(s.place, s.element, s.destination);
          }
        else
          for (let e = t.length - 1; e >= 0; e--) {
            const s = t[e];
            s.element.classList.contains(this.daClassname) &&
              this.moveBack(s.parent, s.element, s.index);
          }
      }),
      (e.prototype.moveTo = function (e, t, s) {
        t.classList.add(this.daClassname),
          "last" === e || e >= s.children.length
            ? s.insertAdjacentElement("beforeend", t)
            : "first" !== e
            ? s.children[e].insertAdjacentElement("beforebegin", t)
            : s.insertAdjacentElement("afterbegin", t);
      }),
      (e.prototype.moveBack = function (e, t, s) {
        t.classList.remove(this.daClassname),
          void 0 !== e.children[s]
            ? e.children[s].insertAdjacentElement("beforebegin", t)
            : e.insertAdjacentElement("beforeend", t);
      }),
      (e.prototype.indexInParent = function (e, t) {
        const s = Array.prototype.slice.call(e.children);
        return Array.prototype.indexOf.call(s, t);
      }),
      (e.prototype.arraySort = function (e) {
        "min" === this.type
          ? Array.prototype.sort.call(e, function (e, t) {
              return e.breakpoint === t.breakpoint
                ? e.place === t.place
                  ? 0
                  : "first" === e.place || "last" === t.place
                  ? -1
                  : "last" === e.place || "first" === t.place
                  ? 1
                  : e.place - t.place
                : e.breakpoint - t.breakpoint;
            })
          : Array.prototype.sort.call(e, function (e, t) {
              return e.breakpoint === t.breakpoint
                ? e.place === t.place
                  ? 0
                  : "first" === e.place || "last" === t.place
                  ? 1
                  : "last" === e.place || "first" === t.place
                  ? -1
                  : t.place - e.place
                : t.breakpoint - e.breakpoint;
            });
      });
    var t;
    new e("max").init(),
      window.addEventListener("load", function (e) {
        var t, s;
        (t = this),
          (s = function () {
            var e = function (t, s) {
              return (
                (s = s || 0),
                this && this instanceof e
                  ? !!t &&
                    ((this.params = Object.assign({ autoplay: "1" }, s)),
                    (this.selector =
                      t instanceof NodeList ? t : document.querySelectorAll(t)),
                    (this.root = document.querySelector("body")),
                    void this.run())
                  : new e(t, s)
              );
            };
            return (
              (e.prototype = {
                run: function () {
                  Array.prototype.forEach.call(
                    this.selector,
                    function (e) {
                      e.addEventListener(
                        "click",
                        function (t) {
                          t.preventDefault();
                          var s = this.parseUrl(e.getAttribute("href"));
                          this.render(s), this.events();
                        }.bind(this),
                        !1
                      );
                    }.bind(this)
                  ),
                    this.root.addEventListener(
                      "keyup",
                      function (e) {
                        27 === (e.keyCode || e.which) &&
                          this.close(this.root.querySelector(".mediabox-wrap"));
                      }.bind(this),
                      !1
                    );
                },
                template: function (e, t) {
                  var s;
                  for (s in t)
                    t.hasOwnProperty(s) &&
                      (e = e.replace(new RegExp("{" + s + "}", "g"), t[s]));
                  return e;
                },
                parseUrl: function (e) {
                  var t,
                    s = {};
                  return (
                    (t = e.match(
                      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/
                    ))
                      ? ((s.provider = "youtube"), (s.id = t[2]))
                      : (t = e.match(
                          /https?:\/\/(?:www\.)?vimeo.com\/(?:channels\/|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|)(\d+)(?:$|\/|\?)/
                        ))
                      ? ((s.provider = "vimeo"), (s.id = t[3]))
                      : ((s.provider = "Unknown"), (s.id = "")),
                    s
                  );
                },
                render: function (e) {
                  var t, s, i;
                  if ("youtube" === e.provider)
                    t = "https://www.youtube.com/embed/" + e.id;
                  else {
                    if ("vimeo" !== e.provider)
                      throw new Error("Invalid video URL");
                    t = "https://player.vimeo.com/video/" + e.id;
                  }
                  (i = this.serialize(this.params)),
                    (s = this.template(
                      '<div class="mediabox-wrap" role="dialog" aria-hidden="false"><div class="mediabox-content" role="document" tabindex="0"><span id="mediabox-esc" class="mediabox-close" aria-label="close" tabindex="1"></span><iframe src="{embed}{params}" frameborder="0" allowfullscreen></iframe></div></div>',
                      { embed: t, params: i }
                    )),
                    (this.lastFocusElement = document.activeElement),
                    this.root.insertAdjacentHTML("beforeend", s),
                    document.body.classList.add("stop-scroll");
                },
                events: function () {
                  var e = document.querySelector(".mediabox-wrap"),
                    t = document.querySelector(".mediabox-content");
                  e.addEventListener(
                    "click",
                    function (t) {
                      ((t.target &&
                        "SPAN" === t.target.nodeName &&
                        "mediabox-close" === t.target.className) ||
                        ("DIV" === t.target.nodeName &&
                          "mediabox-wrap" === t.target.className) ||
                        ("mediabox-content" === t.target.className &&
                          "IFRAME" !== t.target.nodeName)) &&
                        this.close(e);
                    }.bind(this),
                    !1
                  ),
                    document.addEventListener(
                      "focus",
                      function (e) {
                        t &&
                          !t.contains(e.target) &&
                          (e.stopPropagation(), t.focus());
                      },
                      !0
                    ),
                    t.addEventListener(
                      "keypress",
                      function (t) {
                        13 === t.keyCode && this.close(e);
                      }.bind(this),
                      !1
                    );
                },
                close: function (e) {
                  if (null === e) return !0;
                  var t = null;
                  t && clearTimeout(t),
                    e.classList.add("mediabox-hide"),
                    (t = setTimeout(
                      function () {
                        var e = document.querySelector(".mediabox-wrap");
                        null !== e &&
                          (document.body.classList.remove("stop-scroll"),
                          this.root.removeChild(e),
                          this.lastFocusElement.focus());
                      }.bind(this),
                      500
                    ));
                },
                serialize: function (e) {
                  return (
                    "?" +
                    Object.keys(e)
                      .reduce(function (t, s) {
                        return t.push(s + "=" + encodeURIComponent(e[s])), t;
                      }, [])
                      .join("&")
                  );
                },
              }),
              e
            );
          }),
          "function" == typeof define && define.amd
            ? define([], s)
            : "object" == typeof exports
            ? (module.exports = s())
            : (t.MediaBox = s()),
          "function" != typeof Object.assign &&
            Object.defineProperty(Object, "assign", {
              value: function (e, t) {
                if (null == e)
                  throw new TypeError(
                    "Cannot convert undefined or null to object"
                  );
                for (var s = Object(e), i = 1; i < arguments.length; i++) {
                  var n = arguments[i];
                  if (null != n)
                    for (var a in n)
                      Object.prototype.hasOwnProperty.call(n, a) &&
                        (s[a] = n[a]);
                }
                return s;
              },
              writable: !0,
              configurable: !0,
            }),
          MediaBox(".mediabox");
      }),
      window.addEventListener("load", function (e) {
        var t;
        (t = function (e) {
          return (function () {
            function t(e) {
              for (var t = 1; t < arguments.length; t++) {
                var i = null != arguments[t] ? Object(arguments[t]) : {},
                  n = Object.keys(i);
                "function" == typeof Object.getOwnPropertySymbols &&
                  n.push.apply(
                    n,
                    Object.getOwnPropertySymbols(i).filter(function (e) {
                      return Object.getOwnPropertyDescriptor(i, e).enumerable;
                    })
                  ),
                  n.forEach(function (t) {
                    s(e, t, i[t]);
                  });
              }
              return e;
            }
            function s(e, t, s) {
              return (
                (t = n(t)) in e
                  ? Object.defineProperty(e, t, {
                      value: s,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (e[t] = s),
                e
              );
            }
            function i(e, t) {
              for (var s = 0; s < t.length; s++) {
                var i = t[s];
                (i.enumerable = i.enumerable || !1),
                  (i.configurable = !0),
                  "value" in i && (i.writable = !0),
                  Object.defineProperty(e, n(i.key), i);
              }
            }
            function n(e) {
              var t = a(e, "string");
              return "symbol" == typeof t ? t : String(t);
            }
            function a(t, s) {
              if ("object" != typeof t || null === t) return t;
              var i = t[Symbol.toPrimitive];
              if (i !== e) {
                var n = i.call(t, s || "default");
                if ("object" != typeof n) return n;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return ("string" === s ? String : Number)(t);
            }
            for (
              var r = [
                  ["Afghanistan (‫افغانستان‬‎)", "af", "93"],
                  ["Albania (Shqipëri)", "al", "355"],
                  ["Algeria (‫الجزائر‬‎)", "dz", "213"],
                  ["American Samoa", "as", "1", 5, ["684"]],
                  ["Andorra", "ad", "376"],
                  ["Angola", "ao", "244"],
                  ["Anguilla", "ai", "1", 6, ["264"]],
                  ["Antigua and Barbuda", "ag", "1", 7, ["268"]],
                  ["Argentina", "ar", "54"],
                  ["Armenia (Հայաստան)", "am", "374"],
                  ["Aruba", "aw", "297"],
                  ["Ascension Island", "ac", "247"],
                  ["Australia", "au", "61", 0],
                  ["Austria (Österreich)", "at", "43"],
                  ["Azerbaijan (Azərbaycan)", "az", "994"],
                  ["Bahamas", "bs", "1", 8, ["242"]],
                  ["Bahrain (‫البحرين‬‎)", "bh", "973"],
                  ["Bangladesh (বাংলাদেশ)", "bd", "880"],
                  ["Barbados", "bb", "1", 9, ["246"]],
                  ["Belarus (Беларусь)", "by", "375"],
                  ["Belgium (België)", "be", "32"],
                  ["Belize", "bz", "501"],
                  ["Benin (Bénin)", "bj", "229"],
                  ["Bermuda", "bm", "1", 10, ["441"]],
                  ["Bhutan (འབྲུག)", "bt", "975"],
                  ["Bolivia", "bo", "591"],
                  ["Bosnia and Herzegovina (Босна и Херцеговина)", "ba", "387"],
                  ["Botswana", "bw", "267"],
                  ["Brazil (Brasil)", "br", "55"],
                  ["British Indian Ocean Territory", "io", "246"],
                  ["British Virgin Islands", "vg", "1", 11, ["284"]],
                  ["Brunei", "bn", "673"],
                  ["Bulgaria (България)", "bg", "359"],
                  ["Burkina Faso", "bf", "226"],
                  ["Burundi (Uburundi)", "bi", "257"],
                  ["Cambodia (កម្ពុជា)", "kh", "855"],
                  ["Cameroon (Cameroun)", "cm", "237"],
                  [
                    "Canada",
                    "ca",
                    "1",
                    1,
                    [
                      "204",
                      "226",
                      "236",
                      "249",
                      "250",
                      "263",
                      "289",
                      "306",
                      "343",
                      "354",
                      "365",
                      "367",
                      "368",
                      "382",
                      "387",
                      "403",
                      "416",
                      "418",
                      "428",
                      "431",
                      "437",
                      "438",
                      "450",
                      "584",
                      "468",
                      "474",
                      "506",
                      "514",
                      "519",
                      "548",
                      "579",
                      "581",
                      "584",
                      "587",
                      "604",
                      "613",
                      "639",
                      "647",
                      "672",
                      "683",
                      "705",
                      "709",
                      "742",
                      "753",
                      "778",
                      "780",
                      "782",
                      "807",
                      "819",
                      "825",
                      "867",
                      "873",
                      "902",
                      "905",
                    ],
                  ],
                  ["Cape Verde (Kabu Verdi)", "cv", "238"],
                  ["Caribbean Netherlands", "bq", "599", 1, ["3", "4", "7"]],
                  ["Cayman Islands", "ky", "1", 12, ["345"]],
                  [
                    "Central African Republic (République centrafricaine)",
                    "cf",
                    "236",
                  ],
                  ["Chad (Tchad)", "td", "235"],
                  ["Chile", "cl", "56"],
                  ["China (中国)", "cn", "86"],
                  ["Christmas Island", "cx", "61", 2, ["89164"]],
                  ["Cocos (Keeling) Islands", "cc", "61", 1, ["89162"]],
                  ["Colombia", "co", "57"],
                  ["Comoros (‫جزر القمر‬‎)", "km", "269"],
                  [
                    "Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)",
                    "cd",
                    "243",
                  ],
                  ["Congo (Republic) (Congo-Brazzaville)", "cg", "242"],
                  ["Cook Islands", "ck", "682"],
                  ["Costa Rica", "cr", "506"],
                  ["Côte d’Ivoire", "ci", "225"],
                  ["Croatia (Hrvatska)", "hr", "385"],
                  ["Cuba", "cu", "53"],
                  ["Curaçao", "cw", "599", 0],
                  ["Cyprus (Κύπρος)", "cy", "357"],
                  ["Czech Republic (Česká republika)", "cz", "420"],
                  ["Denmark (Danmark)", "dk", "45"],
                  ["Djibouti", "dj", "253"],
                  ["Dominica", "dm", "1", 13, ["767"]],
                  [
                    "Dominican Republic (República Dominicana)",
                    "do",
                    "1",
                    2,
                    ["809", "829", "849"],
                  ],
                  ["Ecuador", "ec", "593"],
                  ["Egypt (‫مصر‬‎)", "eg", "20"],
                  ["El Salvador", "sv", "503"],
                  ["Equatorial Guinea (Guinea Ecuatorial)", "gq", "240"],
                  ["Eritrea", "er", "291"],
                  ["Estonia (Eesti)", "ee", "372"],
                  ["Eswatini", "sz", "268"],
                  ["Ethiopia", "et", "251"],
                  ["Falkland Islands (Islas Malvinas)", "fk", "500"],
                  ["Faroe Islands (Føroyar)", "fo", "298"],
                  ["Fiji", "fj", "679"],
                  ["Finland (Suomi)", "fi", "358", 0],
                  ["France", "fr", "33"],
                  ["French Guiana (Guyane française)", "gf", "594"],
                  ["French Polynesia (Polynésie française)", "pf", "689"],
                  ["Gabon", "ga", "241"],
                  ["Gambia", "gm", "220"],
                  ["Georgia (საქართველო)", "ge", "995"],
                  ["Germany (Deutschland)", "de", "49"],
                  ["Ghana (Gaana)", "gh", "233"],
                  ["Gibraltar", "gi", "350"],
                  ["Greece (Ελλάδα)", "gr", "30"],
                  ["Greenland (Kalaallit Nunaat)", "gl", "299"],
                  ["Grenada", "gd", "1", 14, ["473"]],
                  ["Guadeloupe", "gp", "590", 0],
                  ["Guam", "gu", "1", 15, ["671"]],
                  ["Guatemala", "gt", "502"],
                  ["Guernsey", "gg", "44", 1, ["1481", "7781", "7839", "7911"]],
                  ["Guinea (Guinée)", "gn", "224"],
                  ["Guinea-Bissau (Guiné Bissau)", "gw", "245"],
                  ["Guyana", "gy", "592"],
                  ["Haiti", "ht", "509"],
                  ["Honduras", "hn", "504"],
                  ["Hong Kong (香港)", "hk", "852"],
                  ["Hungary (Magyarország)", "hu", "36"],
                  ["Iceland (Ísland)", "is", "354"],
                  ["India (भारत)", "in", "91"],
                  ["Indonesia", "id", "62"],
                  ["Iran (‫ایران‬‎)", "ir", "98"],
                  ["Iraq (‫العراق‬‎)", "iq", "964"],
                  ["Ireland", "ie", "353"],
                  [
                    "Isle of Man",
                    "im",
                    "44",
                    2,
                    ["1624", "74576", "7524", "7924", "7624"],
                  ],
                  ["Israel (‫ישראל‬‎)", "il", "972"],
                  ["Italy (Italia)", "it", "39", 0],
                  ["Jamaica", "jm", "1", 4, ["876", "658"]],
                  ["Japan (日本)", "jp", "81"],
                  [
                    "Jersey",
                    "je",
                    "44",
                    3,
                    ["1534", "7509", "7700", "7797", "7829", "7937"],
                  ],
                  ["Jordan (‫الأردن‬‎)", "jo", "962"],
                  ["Kazakhstan (Казахстан)", "kz", "7", 1, ["33", "7"]],
                  ["Kenya", "ke", "254"],
                  ["Kiribati", "ki", "686"],
                  ["Kosovo", "xk", "383"],
                  ["Kuwait (‫الكويت‬‎)", "kw", "965"],
                  ["Kyrgyzstan (Кыргызстан)", "kg", "996"],
                  ["Laos (ລາວ)", "la", "856"],
                  ["Latvia (Latvija)", "lv", "371"],
                  ["Lebanon (‫لبنان‬‎)", "lb", "961"],
                  ["Lesotho", "ls", "266"],
                  ["Liberia", "lr", "231"],
                  ["Libya (‫ليبيا‬‎)", "ly", "218"],
                  ["Liechtenstein", "li", "423"],
                  ["Lithuania (Lietuva)", "lt", "370"],
                  ["Luxembourg", "lu", "352"],
                  ["Macau (澳門)", "mo", "853"],
                  ["Madagascar (Madagasikara)", "mg", "261"],
                  ["Malawi", "mw", "265"],
                  ["Malaysia", "my", "60"],
                  ["Maldives", "mv", "960"],
                  ["Mali", "ml", "223"],
                  ["Malta", "mt", "356"],
                  ["Marshall Islands", "mh", "692"],
                  ["Martinique", "mq", "596"],
                  ["Mauritania (‫موريتانيا‬‎)", "mr", "222"],
                  ["Mauritius (Moris)", "mu", "230"],
                  ["Mayotte", "yt", "262", 1, ["269", "639"]],
                  ["Mexico (México)", "mx", "52"],
                  ["Micronesia", "fm", "691"],
                  ["Moldova (Republica Moldova)", "md", "373"],
                  ["Monaco", "mc", "377"],
                  ["Mongolia (Монгол)", "mn", "976"],
                  ["Montenegro (Crna Gora)", "me", "382"],
                  ["Montserrat", "ms", "1", 16, ["664"]],
                  ["Morocco (‫المغرب‬‎)", "ma", "212", 0],
                  ["Mozambique (Moçambique)", "mz", "258"],
                  ["Myanmar (Burma) (မြန်မာ)", "mm", "95"],
                  ["Namibia (Namibië)", "na", "264"],
                  ["Nauru", "nr", "674"],
                  ["Nepal (नेपाल)", "np", "977"],
                  ["Netherlands (Nederland)", "nl", "31"],
                  ["New Caledonia (Nouvelle-Calédonie)", "nc", "687"],
                  ["New Zealand", "nz", "64"],
                  ["Nicaragua", "ni", "505"],
                  ["Niger (Nijar)", "ne", "227"],
                  ["Nigeria", "ng", "234"],
                  ["Niue", "nu", "683"],
                  ["Norfolk Island", "nf", "672"],
                  ["North Korea (조선 민주주의 인민 공화국)", "kp", "850"],
                  ["North Macedonia (Северна Македонија)", "mk", "389"],
                  ["Northern Mariana Islands", "mp", "1", 17, ["670"]],
                  ["Norway (Norge)", "no", "47", 0],
                  ["Oman (‫عُمان‬‎)", "om", "968"],
                  ["Pakistan (‫پاکستان‬‎)", "pk", "92"],
                  ["Palau", "pw", "680"],
                  ["Palestine (‫فلسطين‬‎)", "ps", "970"],
                  ["Panama (Panamá)", "pa", "507"],
                  ["Papua New Guinea", "pg", "675"],
                  ["Paraguay", "py", "595"],
                  ["Peru (Perú)", "pe", "51"],
                  ["Philippines", "ph", "63"],
                  ["Poland (Polska)", "pl", "48"],
                  ["Portugal", "pt", "351"],
                  ["Puerto Rico", "pr", "1", 3, ["787", "939"]],
                  ["Qatar (‫قطر‬‎)", "qa", "974"],
                  ["Réunion (La Réunion)", "re", "262", 0],
                  ["Romania (România)", "ro", "40"],
                  ["Russia (Россия)", "ru", "7", 0],
                  ["Rwanda", "rw", "250"],
                  ["Saint Barthélemy", "bl", "590", 1],
                  ["Saint Helena", "sh", "290"],
                  ["Saint Kitts and Nevis", "kn", "1", 18, ["869"]],
                  ["Saint Lucia", "lc", "1", 19, ["758"]],
                  [
                    "Saint Martin (Saint-Martin (partie française))",
                    "mf",
                    "590",
                    2,
                  ],
                  [
                    "Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)",
                    "pm",
                    "508",
                  ],
                  ["Saint Vincent and the Grenadines", "vc", "1", 20, ["784"]],
                  ["Samoa", "ws", "685"],
                  ["San Marino", "sm", "378"],
                  ["São Tomé and Príncipe (São Tomé e Príncipe)", "st", "239"],
                  ["Saudi Arabia (‫المملكة العربية السعودية‬‎)", "sa", "966"],
                  ["Senegal (Sénégal)", "sn", "221"],
                  ["Serbia (Србија)", "rs", "381"],
                  ["Seychelles", "sc", "248"],
                  ["Sierra Leone", "sl", "232"],
                  ["Singapore", "sg", "65"],
                  ["Sint Maarten", "sx", "1", 21, ["721"]],
                  ["Slovakia (Slovensko)", "sk", "421"],
                  ["Slovenia (Slovenija)", "si", "386"],
                  ["Solomon Islands", "sb", "677"],
                  ["Somalia (Soomaaliya)", "so", "252"],
                  ["South Africa", "za", "27"],
                  ["South Korea (대한민국)", "kr", "82"],
                  ["South Sudan (‫جنوب السودان‬‎)", "ss", "211"],
                  ["Spain (España)", "es", "34"],
                  ["Sri Lanka (ශ්‍රී ලංකාව)", "lk", "94"],
                  ["Sudan (‫السودان‬‎)", "sd", "249"],
                  ["Suriname", "sr", "597"],
                  ["Svalbard and Jan Mayen", "sj", "47", 1, ["79"]],
                  ["Sweden (Sverige)", "se", "46"],
                  ["Switzerland (Schweiz)", "ch", "41"],
                  ["Syria (‫سوريا‬‎)", "sy", "963"],
                  ["Taiwan (台灣)", "tw", "886"],
                  ["Tajikistan", "tj", "992"],
                  ["Tanzania", "tz", "255"],
                  ["Thailand (ไทย)", "th", "66"],
                  ["Timor-Leste", "tl", "670"],
                  ["Togo", "tg", "228"],
                  ["Tokelau", "tk", "690"],
                  ["Tonga", "to", "676"],
                  ["Trinidad and Tobago", "tt", "1", 22, ["868"]],
                  ["Tunisia (‫تونس‬‎)", "tn", "216"],
                  ["Turkey (Türkiye)", "tr", "90"],
                  ["Turkmenistan", "tm", "993"],
                  ["Turks and Caicos Islands", "tc", "1", 23, ["649"]],
                  ["Tuvalu", "tv", "688"],
                  ["U.S. Virgin Islands", "vi", "1", 24, ["340"]],
                  ["Uganda", "ug", "256"],
                  ["Ukraine (Україна)", "ua", "380"],
                  [
                    "United Arab Emirates (‫الإمارات العربية المتحدة‬‎)",
                    "ae",
                    "971",
                  ],
                  ["United Kingdom", "gb", "44", 0],
                  ["United States", "us", "1", 0],
                  ["Uruguay", "uy", "598"],
                  ["Uzbekistan (Oʻzbekiston)", "uz", "998"],
                  ["Vanuatu", "vu", "678"],
                  [
                    "Vatican City (Città del Vaticano)",
                    "va",
                    "39",
                    1,
                    ["06698"],
                  ],
                  ["Venezuela", "ve", "58"],
                  ["Vietnam (Việt Nam)", "vn", "84"],
                  ["Wallis and Futuna (Wallis-et-Futuna)", "wf", "681"],
                  [
                    "Western Sahara (‫الصحراء الغربية‬‎)",
                    "eh",
                    "212",
                    1,
                    ["5288", "5289"],
                  ],
                  ["Yemen (‫اليمن‬‎)", "ye", "967"],
                  ["Zambia", "zm", "260"],
                  ["Zimbabwe", "zw", "263"],
                  ["Åland Islands", "ax", "358", 1, ["18"]],
                ],
                o = 0;
              o < r.length;
              o++
            ) {
              var l = r[o];
              r[o] = {
                name: l[0],
                iso2: l[1],
                dialCode: l[2],
                priority: l[3] || 0,
                areaCodes: l[4] || null,
              };
            }
            var d = {
              getInstance: function (e) {
                var t = e.getAttribute("data-intl-tel-input-id");
                return window.intlTelInputGlobals.instances[t];
              },
              instances: {},
              documentReady: function () {
                return "complete" === document.readyState;
              },
            };
            "object" == typeof window && (window.intlTelInputGlobals = d);
            var c = 0,
              u = {
                allowDropdown: !0,
                autoInsertDialCode: !1,
                autoPlaceholder: "polite",
                customContainer: "",
                customPlaceholder: null,
                dropdownContainer: null,
                excludeCountries: [],
                formatOnDisplay: !0,
                geoIpLookup: null,
                hiddenInput: "",
                initialCountry: "",
                localizedCountries: null,
                nationalMode: !0,
                onlyCountries: [],
                placeholderNumberType: "MOBILE",
                preferredCountries: ["us", "gb"],
                separateDialCode: !1,
                showFlags: !0,
                utilsScript: "",
              },
              p = [
                "800",
                "822",
                "833",
                "844",
                "855",
                "866",
                "877",
                "880",
                "881",
                "882",
                "883",
                "884",
                "885",
                "886",
                "887",
                "888",
                "889",
              ],
              h = function (e, t) {
                for (var s = Object.keys(e), i = 0; i < s.length; i++)
                  t(s[i], e[s[i]]);
              },
              f = function (e) {
                h(window.intlTelInputGlobals.instances, function (t) {
                  window.intlTelInputGlobals.instances[t][e]();
                });
              },
              m = (function () {
                function s(e, t) {
                  var i = this;
                  (function (e, t) {
                    if (!(e instanceof t))
                      throw new TypeError("Cannot call a class as a function");
                  })(this, s),
                    (this.id = c++),
                    (this.a = e),
                    (this.b = null),
                    (this.c = null);
                  var n = t || {};
                  (this.d = {}),
                    h(u, function (e, t) {
                      i.d[e] = n.hasOwnProperty(e) ? n[e] : t;
                    }),
                    null !== e &&
                      (this.e = Boolean(e.getAttribute("placeholder")));
                }
                return (
                  (function (e, t, s) {
                    t && i(e.prototype, t),
                      s && i(e, s),
                      Object.defineProperty(e, "prototype", { writable: !1 });
                  })(s, [
                    {
                      key: "_init",
                      value: function () {
                        var e = this;
                        this.d.nationalMode && (this.d.autoInsertDialCode = !1),
                          this.d.separateDialCode &&
                            (this.d.autoInsertDialCode = !1);
                        var t =
                          this.d.allowDropdown && !this.d.separateDialCode;
                        if (
                          (!this.d.showFlags && t && (this.d.showFlags = !0),
                          (this.g =
                            /Android.+Mobile|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                              navigator.userAgent
                            )),
                          this.g &&
                            (document.body.classList.add("iti-mobile"),
                            this.d.dropdownContainer ||
                              (this.d.dropdownContainer = document.body)),
                          this.a &&
                            (this.isRTL = !!this.a.closest("[dir=rtl]")),
                          "undefined" != typeof Promise)
                        ) {
                          var s = new Promise(function (t, s) {
                              (e.h = t), (e.i = s);
                            }),
                            i = new Promise(function (t, s) {
                              (e.i0 = t), (e.i1 = s);
                            });
                          this.promise = Promise.all([s, i]);
                        } else
                          (this.h = this.i = function () {}),
                            (this.i0 = this.i1 = function () {});
                        (this.s = {}),
                          this._b(),
                          this._f(),
                          this._h(),
                          this._i(),
                          this._i3();
                      },
                    },
                    {
                      key: "_b",
                      value: function () {
                        this._d(),
                          this._d2(),
                          this._e(),
                          this.d.localizedCountries && this._d0(),
                          (this.d.onlyCountries.length ||
                            this.d.localizedCountries) &&
                            this.p.sort(this._d1);
                      },
                    },
                    {
                      key: "_c",
                      value: function (t, s, i) {
                        s.length > this.countryCodeMaxLen &&
                          (this.countryCodeMaxLen = s.length),
                          this.q.hasOwnProperty(s) || (this.q[s] = []);
                        for (var n = 0; n < this.q[s].length; n++)
                          if (this.q[s][n] === t) return;
                        var a = i !== e ? i : this.q[s].length;
                        this.q[s][a] = t;
                      },
                    },
                    {
                      key: "_d",
                      value: function () {
                        if (this.d.onlyCountries.length) {
                          var e = this.d.onlyCountries.map(function (e) {
                            return e.toLowerCase();
                          });
                          this.p = r.filter(function (t) {
                            return e.indexOf(t.iso2) > -1;
                          });
                        } else if (this.d.excludeCountries.length) {
                          var t = this.d.excludeCountries.map(function (e) {
                            return e.toLowerCase();
                          });
                          this.p = r.filter(function (e) {
                            return -1 === t.indexOf(e.iso2);
                          });
                        } else this.p = r;
                      },
                    },
                    {
                      key: "_d0",
                      value: function () {
                        for (var e = 0; e < this.p.length; e++) {
                          var t = this.p[e].iso2.toLowerCase();
                          this.d.localizedCountries.hasOwnProperty(t) &&
                            (this.p[e].name = this.d.localizedCountries[t]);
                        }
                      },
                    },
                    {
                      key: "_d1",
                      value: function (e, t) {
                        return e.name < t.name ? -1 : e.name > t.name ? 1 : 0;
                      },
                    },
                    {
                      key: "_d2",
                      value: function () {
                        (this.countryCodeMaxLen = 0),
                          (this.dialCodes = {}),
                          (this.q = {});
                        for (var e = 0; e < this.p.length; e++) {
                          var t = this.p[e];
                          this.dialCodes[t.dialCode] ||
                            (this.dialCodes[t.dialCode] = !0),
                            this._c(t.iso2, t.dialCode, t.priority);
                        }
                        for (var s = 0; s < this.p.length; s++) {
                          var i = this.p[s];
                          if (i.areaCodes)
                            for (
                              var n = this.q[i.dialCode][0], a = 0;
                              a < i.areaCodes.length;
                              a++
                            ) {
                              for (
                                var r = i.areaCodes[a], o = 1;
                                o < r.length;
                                o++
                              ) {
                                var l = i.dialCode + r.substr(0, o);
                                this._c(n, l), this._c(i.iso2, l);
                              }
                              this._c(i.iso2, i.dialCode + r);
                            }
                        }
                      },
                    },
                    {
                      key: "_e",
                      value: function () {
                        this.preferredCountries = [];
                        for (
                          var e = 0;
                          e < this.d.preferredCountries.length;
                          e++
                        ) {
                          var t = this.d.preferredCountries[e].toLowerCase(),
                            s = this._y(t, !1, !0);
                          s && this.preferredCountries.push(s);
                        }
                      },
                    },
                    {
                      key: "_e2",
                      value: function (e, t, s) {
                        var i = document.createElement(e);
                        return (
                          t &&
                            h(t, function (e, t) {
                              return i.setAttribute(e, t);
                            }),
                          s && s.appendChild(i),
                          i
                        );
                      },
                    },
                    {
                      key: "_f",
                      value: function () {
                        if (this.a) {
                          this.a.hasAttribute("autocomplete") ||
                            (this.a.form &&
                              this.a.form.hasAttribute("autocomplete")) ||
                            this.a.setAttribute("autocomplete", "off");
                          var e = this.d,
                            s = e.allowDropdown,
                            i = e.separateDialCode,
                            n = e.showFlags,
                            a = e.customContainer,
                            r = e.hiddenInput,
                            o = e.dropdownContainer,
                            l = "iti";
                          s && (l += " iti--allow-dropdown"),
                            i && (l += " iti--separate-dial-code"),
                            n && (l += " iti--show-flags"),
                            a && (l += " ".concat(a));
                          var d = this._e2("div", { class: l });
                          this.a.parentNode.insertBefore(d, this.a);
                          var c = s || n || i;
                        }
                        if (
                          (c &&
                            (this.k = this._e2(
                              "div",
                              { class: "iti__flag-container" },
                              d
                            )),
                          d && d.appendChild(this.a),
                          c &&
                            (this.selectedFlag = this._e2(
                              "div",
                              t(
                                { class: "iti__selected-flag" },
                                s && {
                                  role: "combobox",
                                  "aria-haspopup": "listbox",
                                  "aria-controls": "iti-".concat(
                                    this.id,
                                    "__country-listbox"
                                  ),
                                  "aria-expanded": "false",
                                  "aria-label": "Telephone country code",
                                }
                              ),
                              this.k
                            )),
                          n &&
                            (this.l = this._e2(
                              "div",
                              { class: "iti__flag" },
                              this.selectedFlag
                            )),
                          this.selectedFlag &&
                            this.a.disabled &&
                            this.selectedFlag.setAttribute(
                              "aria-disabled",
                              "true"
                            ),
                          i &&
                            (this.t = this._e2(
                              "div",
                              { class: "iti__selected-dial-code" },
                              this.selectedFlag
                            )),
                          s &&
                            (this.a.disabled ||
                              this.selectedFlag.setAttribute("tabindex", "0"),
                            (this.u = this._e2(
                              "div",
                              { class: "iti__arrow" },
                              this.selectedFlag
                            )),
                            (this.m = this._e2("ul", {
                              class: "iti__country-list iti__hide",
                              id: "iti-".concat(this.id, "__country-listbox"),
                              role: "listbox",
                              "aria-label": "List of countries",
                            })),
                            this.preferredCountries.length &&
                              (this._g(
                                this.preferredCountries,
                                "iti__preferred",
                                !0
                              ),
                              this._e2(
                                "li",
                                {
                                  class: "iti__divider",
                                  role: "separator",
                                  "aria-disabled": "true",
                                },
                                this.m
                              )),
                            this._g(this.p, "iti__standard"),
                            o
                              ? ((this.dropdown = this._e2("div", {
                                  class: "iti iti--container",
                                })),
                                this.dropdown.appendChild(this.m))
                              : this.k.appendChild(this.m)),
                          r)
                        ) {
                          var u = r,
                            p = this.a.getAttribute("name");
                          if (p) {
                            var h = p.lastIndexOf("[");
                            -1 !== h &&
                              (u = ""
                                .concat(p.substr(0, h), "[")
                                .concat(u, "]"));
                          }
                          (this.hiddenInput = this._e2("input", {
                            type: "hidden",
                            name: u,
                          })),
                            d.appendChild(this.hiddenInput);
                        }
                      },
                    },
                    {
                      key: "_g",
                      value: function (e, t, s) {
                        for (var i = "", n = 0; n < e.length; n++) {
                          var a = e[n],
                            r = s ? "-preferred" : "";
                          (i += "<li class='iti__country "
                            .concat(t, "' tabIndex='-1' id='iti-")
                            .concat(this.id, "__item-")
                            .concat(a.iso2)
                            .concat(r, "' role='option' data-dial-code='")
                            .concat(a.dialCode, "' data-country-code='")
                            .concat(a.iso2, "' aria-selected='false'>")),
                            this.d.showFlags &&
                              (i +=
                                "<div class='iti__flag-box'><div class='iti__flag iti__".concat(
                                  a.iso2,
                                  "'></div></div>"
                                )),
                            (i += "<span class='iti__country-name'>".concat(
                              a.name,
                              "</span>"
                            )),
                            (i += "<span class='iti__dial-code'>+".concat(
                              a.dialCode,
                              "</span>"
                            )),
                            (i += "</li>");
                        }
                        this.m.insertAdjacentHTML("beforeend", i);
                      },
                    },
                    {
                      key: "_h",
                      value: function () {
                        var e = this.a.getAttribute("value"),
                          t = this.a.value,
                          s =
                            !e ||
                            "+" !== e.charAt(0) ||
                            (t && "+" === t.charAt(0))
                              ? t
                              : e,
                          i = this._5(s),
                          n = this._w(s),
                          a = this.d,
                          r = a.initialCountry,
                          o = a.autoInsertDialCode;
                        i && !n
                          ? this._v(s)
                          : "auto" !== r &&
                            (r
                              ? this._z(r.toLowerCase())
                              : i && n
                              ? this._z("us")
                              : ((this.j = this.preferredCountries.length
                                  ? this.preferredCountries[0].iso2
                                  : this.p[0].iso2),
                                s || this._z(this.j)),
                            !s &&
                              o &&
                              (this.a.value = "+".concat(this.s.dialCode))),
                          s && this._u(s);
                      },
                    },
                    {
                      key: "_i",
                      value: function () {
                        this._j(),
                          this.d.autoInsertDialCode && this._l(),
                          this.d.allowDropdown && this._i2(),
                          this.hiddenInput && this._i0();
                      },
                    },
                    {
                      key: "_i0",
                      value: function () {
                        var e = this;
                        (this._a14 = function () {
                          e.hiddenInput.value = e.getNumber();
                        }),
                          this.a.form &&
                            this.a.form.addEventListener("submit", this._a14);
                      },
                    },
                    {
                      key: "_i1",
                      value: function () {
                        for (var e = this.a; e && "LABEL" !== e.tagName; )
                          e = e.parentNode;
                        return e;
                      },
                    },
                    {
                      key: "_i2",
                      value: function () {
                        var e = this;
                        this._a9 = function (t) {
                          e.m.classList.contains("iti__hide")
                            ? e.a.focus()
                            : t.preventDefault();
                        };
                        var t = this._i1();
                        t && t.addEventListener("click", this._a9),
                          (this._a10 = function () {
                            !e.m.classList.contains("iti__hide") ||
                              e.a.disabled ||
                              e.a.readOnly ||
                              e._n();
                          }),
                          this.selectedFlag.addEventListener(
                            "click",
                            this._a10
                          ),
                          (this._a11 = function (t) {
                            e.m.classList.contains("iti__hide") &&
                              -1 !==
                                [
                                  "ArrowUp",
                                  "Up",
                                  "ArrowDown",
                                  "Down",
                                  " ",
                                  "Enter",
                                ].indexOf(t.key) &&
                              (t.preventDefault(), t.stopPropagation(), e._n()),
                              "Tab" === t.key && e._2();
                          }),
                          this.k.addEventListener("keydown", this._a11);
                      },
                    },
                    {
                      key: "_i3",
                      value: function () {
                        var e = this;
                        this.d.utilsScript && !window.intlTelInputUtils
                          ? window.intlTelInputGlobals.documentReady()
                            ? window.intlTelInputGlobals.loadUtils(
                                this.d.utilsScript
                              )
                            : window.addEventListener("load", function () {
                                window.intlTelInputGlobals.loadUtils(
                                  e.d.utilsScript
                                );
                              })
                          : this.i0(),
                          "auto" === this.d.initialCountry
                            ? this._i4()
                            : this.h();
                      },
                    },
                    {
                      key: "_i4",
                      value: function () {
                        window.intlTelInputGlobals.autoCountry
                          ? this.handleAutoCountry()
                          : window.intlTelInputGlobals
                              .startedLoadingAutoCountry ||
                            ((window.intlTelInputGlobals.startedLoadingAutoCountry =
                              !0),
                            "function" == typeof this.d.geoIpLookup &&
                              this.d.geoIpLookup(
                                function (e) {
                                  (window.intlTelInputGlobals.autoCountry =
                                    e.toLowerCase()),
                                    setTimeout(function () {
                                      return f("handleAutoCountry");
                                    });
                                },
                                function () {
                                  return f("rejectAutoCountryPromise");
                                }
                              ));
                      },
                    },
                    {
                      key: "_j",
                      value: function () {
                        var e = this;
                        (this._a12 = function () {
                          e._v(e.a.value) && e._m2CountryChange();
                        }),
                          this.a.addEventListener("keyup", this._a12),
                          (this._a13 = function () {
                            setTimeout(e._a12);
                          }),
                          this.a.addEventListener("cut", this._a13),
                          this.a.addEventListener("paste", this._a13);
                      },
                    },
                    {
                      key: "_j2",
                      value: function (e) {
                        var t = this.a.getAttribute("maxlength");
                        return t && e.length > t ? e.substr(0, t) : e;
                      },
                    },
                    {
                      key: "_l",
                      value: function () {
                        var e = this;
                        (this._a8 = function () {
                          e._l2();
                        }),
                          this.a.form &&
                            this.a.form.addEventListener("submit", this._a8),
                          this.a.addEventListener("blur", this._a8);
                      },
                    },
                    {
                      key: "_l2",
                      value: function () {
                        if ("+" === this.a.value.charAt(0)) {
                          var e = this._m(this.a.value);
                          (e && this.s.dialCode !== e) || (this.a.value = "");
                        }
                      },
                    },
                    {
                      key: "_m",
                      value: function (e) {
                        return e.replace(/\D/g, "");
                      },
                    },
                    {
                      key: "_m2",
                      value: function (e) {
                        var t = document.createEvent("Event");
                        t.initEvent(e, !0, !0), this.a.dispatchEvent(t);
                      },
                    },
                    {
                      key: "_n",
                      value: function () {
                        this.m.classList.remove("iti__hide"),
                          this.selectedFlag.setAttribute(
                            "aria-expanded",
                            "true"
                          ),
                          this._o(),
                          this.b && (this._x(this.b, !1), this._3(this.b, !0)),
                          this._p(),
                          this.u.classList.add("iti__arrow--up"),
                          this._m2("open:countrydropdown");
                      },
                    },
                    {
                      key: "_n2",
                      value: function (e, t, s) {
                        s && !e.classList.contains(t)
                          ? e.classList.add(t)
                          : !s &&
                            e.classList.contains(t) &&
                            e.classList.remove(t);
                      },
                    },
                    {
                      key: "_o",
                      value: function () {
                        var e = this;
                        if (
                          (this.d.dropdownContainer &&
                            this.d.dropdownContainer.appendChild(this.dropdown),
                          !this.g)
                        ) {
                          var t = this.a.getBoundingClientRect(),
                            s =
                              window.pageYOffset ||
                              document.documentElement.scrollTop,
                            i = t.top + s,
                            n = this.m.offsetHeight,
                            a =
                              i + this.a.offsetHeight + n <
                              s + window.innerHeight,
                            r = i - n > s;
                          if (
                            (this._n2(
                              this.m,
                              "iti__country-list--dropup",
                              !a && r
                            ),
                            this.d.dropdownContainer)
                          ) {
                            var o = !a && r ? 0 : this.a.offsetHeight;
                            (this.dropdown.style.top = "".concat(i + o, "px")),
                              (this.dropdown.style.left = "".concat(
                                t.left + document.body.scrollLeft,
                                "px"
                              )),
                              (this._a4 = function () {
                                return e._2();
                              }),
                              window.addEventListener("scroll", this._a4);
                          }
                        }
                      },
                    },
                    {
                      key: "_o2",
                      value: function (e) {
                        for (
                          var t = e;
                          t &&
                          t !== this.m &&
                          !t.classList.contains("iti__country");

                        )
                          t = t.parentNode;
                        return t === this.m ? null : t;
                      },
                    },
                    {
                      key: "_p",
                      value: function () {
                        var e = this;
                        (this._a0 = function (t) {
                          var s = e._o2(t.target);
                          s && e._x(s, !1);
                        }),
                          this.m.addEventListener("mouseover", this._a0),
                          (this._a1 = function (t) {
                            var s = e._o2(t.target);
                            s && e._1(s);
                          }),
                          this.m.addEventListener("click", this._a1);
                        var t = !0;
                        (this._a2 = function () {
                          t || e._2(), (t = !1);
                        }),
                          document.documentElement.addEventListener(
                            "click",
                            this._a2
                          );
                        var s = "",
                          i = null;
                        (this._a3 = function (t) {
                          t.preventDefault(),
                            "ArrowUp" === t.key ||
                            "Up" === t.key ||
                            "ArrowDown" === t.key ||
                            "Down" === t.key
                              ? e._q(t.key)
                              : "Enter" === t.key
                              ? e._r()
                              : "Escape" === t.key
                              ? e._2()
                              : /^[a-zA-ZÀ-ÿа-яА-Я ]$/.test(t.key) &&
                                (i && clearTimeout(i),
                                (s += t.key.toLowerCase()),
                                e._s(s),
                                (i = setTimeout(function () {
                                  s = "";
                                }, 1e3)));
                        }),
                          document.addEventListener("keydown", this._a3);
                      },
                    },
                    {
                      key: "_q",
                      value: function (e) {
                        var t =
                          "ArrowUp" === e || "Up" === e
                            ? this.c.previousElementSibling
                            : this.c.nextElementSibling;
                        t &&
                          (t.classList.contains("iti__divider") &&
                            (t =
                              "ArrowUp" === e || "Up" === e
                                ? t.previousElementSibling
                                : t.nextElementSibling),
                          this._x(t, !0));
                      },
                    },
                    {
                      key: "_r",
                      value: function () {
                        this.c && this._1(this.c);
                      },
                    },
                    {
                      key: "_s",
                      value: function (e) {
                        for (var t = 0; t < this.p.length; t++)
                          if (this._t(this.p[t].name, e)) {
                            var s = this.m.querySelector(
                              "#iti-"
                                .concat(this.id, "__item-")
                                .concat(this.p[t].iso2)
                            );
                            this._x(s, !1), this._3(s, !0);
                            break;
                          }
                      },
                    },
                    {
                      key: "_t",
                      value: function (e, t) {
                        return e.substr(0, t.length).toLowerCase() === t;
                      },
                    },
                    {
                      key: "_u",
                      value: function (e) {
                        var t = e;
                        if (
                          this.d.formatOnDisplay &&
                          window.intlTelInputUtils &&
                          this.s
                        ) {
                          var s =
                              this.d.nationalMode ||
                              ("+" !== t.charAt(0) && !this.d.separateDialCode),
                            i = intlTelInputUtils.numberFormat,
                            n = i.NATIONAL,
                            a = i.INTERNATIONAL,
                            r = s ? n : a;
                          t = intlTelInputUtils.formatNumber(t, this.s.iso2, r);
                        }
                        (t = this._7(t)), (this.a.value = t);
                      },
                    },
                    {
                      key: "_v",
                      value: function (e) {
                        var t = e,
                          s = this.s.dialCode;
                        t &&
                          "1" === s &&
                          "+" !== t.charAt(0) &&
                          ("1" !== t.charAt(0) && (t = "1".concat(t)),
                          (t = "+".concat(t))),
                          this.d.separateDialCode &&
                            s &&
                            "+" !== t.charAt(0) &&
                            (t = "+".concat(s).concat(t));
                        var i = this._5(t, !0),
                          n = this._m(t),
                          a = null;
                        if (i) {
                          var r = this.q[this._m(i)],
                            o =
                              -1 !== r.indexOf(this.s.iso2) &&
                              n.length <= i.length - 1;
                          if (!(("1" === s && this._w(n)) || o))
                            for (var l = 0; l < r.length; l++)
                              if (r[l]) {
                                a = r[l];
                                break;
                              }
                        } else
                          "+" === t.charAt(0) && n.length
                            ? (a = "")
                            : (t && "+" !== t) || (a = this.j);
                        return null !== a && this._z(a);
                      },
                    },
                    {
                      key: "_w",
                      value: function (e) {
                        var t = this._m(e);
                        if ("1" === t.charAt(0)) {
                          var s = t.substr(1, 3);
                          return -1 !== p.indexOf(s);
                        }
                        return !1;
                      },
                    },
                    {
                      key: "_x",
                      value: function (e, t) {
                        var s = this.c;
                        s && s.classList.remove("iti__highlight"),
                          (this.c = e),
                          this.c.classList.add("iti__highlight"),
                          this.selectedFlag.setAttribute(
                            "aria-activedescendant",
                            e.getAttribute("id")
                          ),
                          t && this.c.focus();
                      },
                    },
                    {
                      key: "_y",
                      value: function (e, t, s) {
                        for (var i = t ? r : this.p, n = 0; n < i.length; n++)
                          if (i[n].iso2 === e) return i[n];
                        if (s) return null;
                        throw new Error("No country data for '".concat(e, "'"));
                      },
                    },
                    {
                      key: "_z",
                      value: function (e) {
                        var t = this.d,
                          s = t.allowDropdown,
                          i = t.separateDialCode,
                          n = t.showFlags,
                          a = this.s.iso2 ? this.s : {};
                        if (
                          ((this.s = e ? this._y(e, !1, !1) : {}),
                          this.s.iso2 && (this.j = this.s.iso2),
                          n &&
                            this.l.setAttribute(
                              "class",
                              "iti__flag iti__".concat(e)
                            ),
                          this._setSelectedCountryFlagTitleAttribute(e, i),
                          i)
                        ) {
                          var r = this.s.dialCode
                            ? "+".concat(this.s.dialCode)
                            : "";
                          this.t.innerHTML = r;
                          var o = this.selectedFlag.offsetWidth || this._z2();
                          this.isRTL
                            ? (this.a.style.paddingRight = "".concat(
                                o + 6,
                                "px"
                              ))
                            : (this.a.style.paddingLeft = "".concat(
                                o + 6,
                                "px"
                              ));
                        }
                        if ((this._0(), s)) {
                          var l = this.b;
                          if (
                            (l &&
                              (l.classList.remove("iti__active"),
                              l.setAttribute("aria-selected", "false")),
                            e)
                          ) {
                            var d =
                              this.m.querySelector(
                                "#iti-"
                                  .concat(this.id, "__item-")
                                  .concat(e, "-preferred")
                              ) ||
                              this.m.querySelector(
                                "#iti-".concat(this.id, "__item-").concat(e)
                              );
                            d.setAttribute("aria-selected", "true"),
                              d.classList.add("iti__active"),
                              (this.b = d);
                          }
                        }
                        return a.iso2 !== e;
                      },
                    },
                    {
                      key: "_setSelectedCountryFlagTitleAttribute",
                      value: function (e, t) {
                        var s;
                        this.selectedFlag &&
                          ((s =
                            e && !t
                              ? ""
                                  .concat(this.s.name, ": +")
                                  .concat(this.s.dialCode)
                              : e
                              ? this.s.name
                              : "Unknown"),
                          this.selectedFlag.setAttribute("title", s));
                      },
                    },
                    {
                      key: "_z2",
                      value: function () {
                        var e = this.a.parentNode.cloneNode();
                        (e.style.visibility = "hidden"),
                          document.body.appendChild(e);
                        var t = this.k.cloneNode();
                        e.appendChild(t);
                        var s = this.selectedFlag.cloneNode(!0);
                        t.appendChild(s);
                        var i = s.offsetWidth;
                        return e.parentNode.removeChild(e), i;
                      },
                    },
                    {
                      key: "_0",
                      value: function () {
                        var e =
                          "aggressive" === this.d.autoPlaceholder ||
                          (!this.e && "polite" === this.d.autoPlaceholder);
                        if (window.intlTelInputUtils && e) {
                          var t =
                              intlTelInputUtils.numberType[
                                this.d.placeholderNumberType
                              ],
                            s = this.s.iso2
                              ? intlTelInputUtils.getExampleNumber(
                                  this.s.iso2,
                                  this.d.nationalMode,
                                  t
                                )
                              : "";
                          (s = this._7(s)),
                            "function" == typeof this.d.customPlaceholder &&
                              (s = this.d.customPlaceholder(s, this.s)),
                            this.a.setAttribute("placeholder", s);
                        }
                      },
                    },
                    {
                      key: "_1",
                      value: function (e) {
                        var t = this._z(e.getAttribute("data-country-code"));
                        this._2(),
                          this._4(e.getAttribute("data-dial-code")),
                          this.a.focus();
                        var s = this.a.value.length;
                        this.a.setSelectionRange(s, s),
                          t && this._m2CountryChange();
                      },
                    },
                    {
                      key: "_2",
                      value: function () {
                        this.m.classList.add("iti__hide"),
                          this.selectedFlag.setAttribute(
                            "aria-expanded",
                            "false"
                          ),
                          this.selectedFlag.removeAttribute(
                            "aria-activedescendant"
                          ),
                          this.u.classList.remove("iti__arrow--up"),
                          document.removeEventListener("keydown", this._a3),
                          document.documentElement.removeEventListener(
                            "click",
                            this._a2
                          ),
                          this.m.removeEventListener("mouseover", this._a0),
                          this.m.removeEventListener("click", this._a1),
                          this.d.dropdownContainer &&
                            (this.g ||
                              window.removeEventListener("scroll", this._a4),
                            this.dropdown.parentNode &&
                              this.dropdown.parentNode.removeChild(
                                this.dropdown
                              )),
                          this._m2("close:countrydropdown");
                      },
                    },
                    {
                      key: "_3",
                      value: function (e, t) {
                        var s = this.m,
                          i =
                            window.pageYOffset ||
                            document.documentElement.scrollTop,
                          n = s.offsetHeight,
                          a = s.getBoundingClientRect().top + i,
                          r = a + n,
                          o = e.offsetHeight,
                          l = e.getBoundingClientRect().top + i,
                          d = l + o,
                          c = l - a + s.scrollTop,
                          u = n / 2 - o / 2;
                        if (l < a) t && (c -= u), (s.scrollTop = c);
                        else if (d > r) {
                          t && (c += u);
                          var p = n - o;
                          s.scrollTop = c - p;
                        }
                      },
                    },
                    {
                      key: "_4",
                      value: function (e) {
                        var t,
                          s = this.a.value,
                          i = "+".concat(e);
                        if ("+" === s.charAt(0)) {
                          var n = this._5(s);
                          (t = n ? s.replace(n, i) : i), (this.a.value = t);
                        } else
                          this.d.autoInsertDialCode &&
                            ((t = s ? i + s : i), (this.a.value = t));
                      },
                    },
                    {
                      key: "_5",
                      value: function (e, t) {
                        var s = "";
                        if ("+" === e.charAt(0))
                          for (var i = "", n = 0; n < e.length; n++) {
                            var a = e.charAt(n);
                            if (!isNaN(parseInt(a, 10))) {
                              if (((i += a), t))
                                this.q[i] && (s = e.substr(0, n + 1));
                              else if (this.dialCodes[i]) {
                                s = e.substr(0, n + 1);
                                break;
                              }
                              if (i.length === this.countryCodeMaxLen) break;
                            }
                          }
                        return s;
                      },
                    },
                    {
                      key: "_6",
                      value: function () {
                        var e = this.a.value.trim(),
                          t = this.s.dialCode,
                          s = this._m(e);
                        return (
                          (this.d.separateDialCode &&
                          "+" !== e.charAt(0) &&
                          t &&
                          s
                            ? "+".concat(t)
                            : "") + e
                        );
                      },
                    },
                    {
                      key: "_7",
                      value: function (e) {
                        var t = e;
                        if (this.d.separateDialCode) {
                          var s = this._5(t);
                          if (s) {
                            var i =
                              " " ===
                                t[(s = "+".concat(this.s.dialCode)).length] ||
                              "-" === t[s.length]
                                ? s.length + 1
                                : s.length;
                            t = t.substr(i);
                          }
                        }
                        return this._j2(t);
                      },
                    },
                    {
                      key: "_m2CountryChange",
                      value: function () {
                        this._m2("countrychange");
                      },
                    },
                    {
                      key: "handleAutoCountry",
                      value: function () {
                        "auto" === this.d.initialCountry &&
                          ((this.j = window.intlTelInputGlobals.autoCountry),
                          this.a.value || this.setCountry(this.j),
                          this.h());
                      },
                    },
                    {
                      key: "handleUtils",
                      value: function () {
                        window.intlTelInputUtils &&
                          (this.a.value && this._u(this.a.value), this._0()),
                          this.i0();
                      },
                    },
                    {
                      key: "destroy",
                      value: function () {
                        var e = this.a.form;
                        if (this.d.allowDropdown) {
                          this._2(),
                            this.selectedFlag.removeEventListener(
                              "click",
                              this._a10
                            ),
                            this.k.removeEventListener("keydown", this._a11);
                          var t = this._i1();
                          t && t.removeEventListener("click", this._a9);
                        }
                        this.hiddenInput &&
                          e &&
                          e.removeEventListener("submit", this._a14),
                          this.d.autoInsertDialCode &&
                            (e && e.removeEventListener("submit", this._a8),
                            this.a.removeEventListener("blur", this._a8)),
                          this.a.removeEventListener("keyup", this._a12),
                          this.a.removeEventListener("cut", this._a13),
                          this.a.removeEventListener("paste", this._a13),
                          this.a.removeAttribute("data-intl-tel-input-id");
                        var s = this.a.parentNode;
                        s.parentNode.insertBefore(this.a, s),
                          s.parentNode.removeChild(s),
                          delete window.intlTelInputGlobals.instances[this.id];
                      },
                    },
                    {
                      key: "getExtension",
                      value: function () {
                        return window.intlTelInputUtils
                          ? intlTelInputUtils.getExtension(
                              this._6(),
                              this.s.iso2
                            )
                          : "";
                      },
                    },
                    {
                      key: "getNumber",
                      value: function (e) {
                        if (window.intlTelInputUtils) {
                          var t = this.s.iso2;
                          return intlTelInputUtils.formatNumber(
                            this._6(),
                            t,
                            e
                          );
                        }
                        return "";
                      },
                    },
                    {
                      key: "getNumberType",
                      value: function () {
                        return window.intlTelInputUtils
                          ? intlTelInputUtils.getNumberType(
                              this._6(),
                              this.s.iso2
                            )
                          : -99;
                      },
                    },
                    {
                      key: "getSelectedCountryData",
                      value: function () {
                        return this.s;
                      },
                    },
                    {
                      key: "getValidationError",
                      value: function () {
                        if (window.intlTelInputUtils) {
                          var e = this.s.iso2;
                          return intlTelInputUtils.getValidationError(
                            this._6(),
                            e
                          );
                        }
                        return -99;
                      },
                    },
                    {
                      key: "isValidNumber",
                      value: function () {
                        var e = this._6().trim();
                        return window.intlTelInputUtils
                          ? intlTelInputUtils.isValidNumber(e, this.s.iso2)
                          : null;
                      },
                    },
                    {
                      key: "isPossibleNumber",
                      value: function () {
                        var e = this._6().trim();
                        return window.intlTelInputUtils
                          ? intlTelInputUtils.isPossibleNumber(e, this.s.iso2)
                          : null;
                      },
                    },
                    {
                      key: "setCountry",
                      value: function (e) {
                        var t = e.toLowerCase();
                        this.s.iso2 !== t &&
                          (this._z(t),
                          this._4(this.s.dialCode),
                          this._m2CountryChange());
                      },
                    },
                    {
                      key: "setNumber",
                      value: function (e) {
                        var t = this._v(e);
                        this._u(e), t && this._m2CountryChange();
                      },
                    },
                    {
                      key: "setPlaceholderNumberType",
                      value: function (e) {
                        (this.d.placeholderNumberType = e), this._0();
                      },
                    },
                  ]),
                  s
                );
              })();
            d.getCountryData = function () {
              return r;
            };
            var g = function (e, t, s) {
              var i = document.createElement("script");
              (i.onload = function () {
                f("handleUtils"), t && t();
              }),
                (i.onerror = function () {
                  f("rejectUtilsScriptPromise"), s && s();
                }),
                (i.className = "iti-load-utils"),
                (i.async = !0),
                (i.src = e),
                document.body.appendChild(i);
            };
            return (
              (d.loadUtils = function (e) {
                if (
                  !window.intlTelInputUtils &&
                  !window.intlTelInputGlobals.startedLoadingUtilsScript
                ) {
                  if (
                    ((window.intlTelInputGlobals.startedLoadingUtilsScript =
                      !0),
                    "undefined" != typeof Promise)
                  )
                    return new Promise(function (t, s) {
                      return g(e, t, s);
                    });
                  g(e);
                }
                return null;
              }),
              (d.defaults = u),
              (d.version = "18.1.8"),
              function (e, t) {
                var s = new m(e, t);
                return (
                  s._init(),
                  e.setAttribute("data-intl-tel-input-id", s.id),
                  (window.intlTelInputGlobals.instances[s.id] = s),
                  s
                );
              }
            );
          })();
        }),
          "object" == typeof module && module.exports
            ? (module.exports = t())
            : (window.intlTelInput = t());
        const s =
          "https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/utils.js";
        try {
          var i = document.querySelector("#phone"),
            n = document.querySelector("#phoneBanner");
          i &&
            i.addEventListener("input", () => {
              i.value = i.value.replace(/[^0-9()-]/, "");
            });
          const e = document.querySelector("#form"),
            t = document.querySelector("#message"),
            a = window.intlTelInput(i, {
              initialCountry: "auto",
              separateDialCode: "true",
              geoIpLookup: function (e) {
                fetch("https://ipapi.co/json")
                  .then(function (e) {
                    return e.json();
                  })
                  .then(function (t) {
                    e(t.country_code);
                  })
                  .catch(function () {
                    e("us");
                  });
              },
              utilsScript: s || null,
            });
          e &&
            t &&
            a &&
            (e.onsubmit = () => {
              if (!a.isValidNumber())
                return (
                  (t.innerHTML =
                    "Некорректный номер. Пожалуйста, попробуйте еще"),
                  !1
                );
            });
        } catch (e) {}
        try {
          const e = document.querySelector("#formBanner"),
            t = document.querySelector("#messageBanner"),
            i = window.intlTelInput(n, {
              initialCountry: "auto",
              separateDialCode: "true",
              geoIpLookup: function (e) {
                fetch("https://ipapi.co/json")
                  .then(function (e) {
                    return e.json();
                  })
                  .then(function (t) {
                    e(t.country_code);
                  })
                  .catch(function () {
                    e("us");
                  });
              },
              utilsScript: s,
            });
          e.onsubmit = () => {
            if (!i.isValidNumber())
              return (
                (t.innerHTML =
                  "Некорректный номер. Пожалуйста, попробуйте еще"),
                !1
              );
          };
        } catch (e) {}
      }),
      (t = function () {
        var e = [
          "decimals",
          "thousand",
          "mark",
          "prefix",
          "suffix",
          "encoder",
          "decoder",
          "negativeBefore",
          "negative",
          "edit",
          "undo",
        ];
        function t(e) {
          return e.split("").reverse().join("");
        }
        function s(e, t) {
          return e.substring(0, t.length) === t;
        }
        function i(e, t, s) {
          if ((e[t] || e[s]) && e[t] === e[s]) throw new Error(t);
        }
        function n(e) {
          return "number" == typeof e && isFinite(e);
        }
        function a(e, s, i, a, r, o, l, d, c, u, p, h) {
          var f,
            m,
            g,
            v = h,
            b = "",
            y = "";
          return (
            o && (h = o(h)),
            !!n(h) &&
              (!1 !== e && 0 === parseFloat(h.toFixed(e)) && (h = 0),
              h < 0 && ((f = !0), (h = Math.abs(h))),
              !1 !== e &&
                (h = (function (e, t) {
                  return (
                    (e = e.toString().split("e")),
                    (+(
                      (e = (e = Math.round(
                        +(e[0] + "e" + (e[1] ? +e[1] + t : t))
                      ))
                        .toString()
                        .split("e"))[0] +
                      "e" +
                      (e[1] ? e[1] - t : -t)
                    )).toFixed(t)
                  );
                })(h, e)),
              -1 !== (h = h.toString()).indexOf(".")
                ? ((g = (m = h.split("."))[0]), i && (b = i + m[1]))
                : (g = h),
              s && (g = t((g = t(g).match(/.{1,3}/g)).join(t(s)))),
              f && d && (y += d),
              a && (y += a),
              f && c && (y += c),
              (y += g),
              (y += b),
              r && (y += r),
              u && (y = u(y, v)),
              y)
          );
        }
        function r(e, t, i, a, r, o, l, d, c, u, p, h) {
          var f,
            m = "";
          return (
            p && (h = p(h)),
            !(!h || "string" != typeof h) &&
              (d && s(h, d) && ((h = h.replace(d, "")), (f = !0)),
              a && s(h, a) && (h = h.replace(a, "")),
              c && s(h, c) && ((h = h.replace(c, "")), (f = !0)),
              r &&
                (function (e, t) {
                  return e.slice(-1 * t.length) === t;
                })(h, r) &&
                (h = h.slice(0, -1 * r.length)),
              t && (h = h.split(t).join("")),
              i && (h = h.replace(i, ".")),
              f && (m += "-"),
              "" !== (m = (m += h).replace(/[^0-9\.\-.]/g, "")) &&
                ((m = Number(m)), l && (m = l(m)), !!n(m) && m))
          );
        }
        function o(t, s, i) {
          var n,
            a = [];
          for (n = 0; n < e.length; n += 1) a.push(t[e[n]]);
          return a.push(i), s.apply("", a);
        }
        return function t(s) {
          if (!(this instanceof t)) return new t(s);
          "object" == typeof s &&
            ((s = (function (t) {
              var s,
                n,
                a,
                r = {};
              for (
                void 0 === t.suffix && (t.suffix = t.postfix), s = 0;
                s < e.length;
                s += 1
              )
                if (void 0 === (a = t[(n = e[s])]))
                  "negative" !== n || r.negativeBefore
                    ? "mark" === n && "." !== r.thousand
                      ? (r[n] = ".")
                      : (r[n] = !1)
                    : (r[n] = "-");
                else if ("decimals" === n) {
                  if (!(0 <= a && a < 8)) throw new Error(n);
                  r[n] = a;
                } else if (
                  "encoder" === n ||
                  "decoder" === n ||
                  "edit" === n ||
                  "undo" === n
                ) {
                  if ("function" != typeof a) throw new Error(n);
                  r[n] = a;
                } else {
                  if ("string" != typeof a) throw new Error(n);
                  r[n] = a;
                }
              return (
                i(r, "mark", "thousand"),
                i(r, "prefix", "negative"),
                i(r, "prefix", "negativeBefore"),
                r
              );
            })(s)),
            (this.to = function (e) {
              return o(s, a, e);
            }),
            (this.from = function (e) {
              return o(s, r, e);
            }));
        };
      }),
      "function" == typeof define && define.amd
        ? define([], t)
        : "object" == typeof exports
        ? (module.exports = t())
        : (window.wNumb = t());
    class i {
      constructor(e) {
        let t = {
          logging: !0,
          init: !0,
          attributeOpenButton: "data-popup",
          attributeCloseButton: "data-close",
          fixElementSelector: "[data-lp]",
          youtubeAttribute: "data-youtube",
          youtubePlaceAttribute: "data-youtube-place",
          setAutoplayYoutube: !0,
          classes: {
            popup: "popup",
            popupContent: "popup__content",
            popupActive: "popup_show",
            bodyActive: "popup-show",
          },
          focusCatch: !0,
          closeEsc: !0,
          bodyLock: !0,
          bodyLockDelay: 500,
          hashSettings: { location: !0, goHash: !0 },
          on: {
            beforeOpen: function () {},
            afterOpen: function () {},
            beforeClose: function () {},
            afterClose: function () {},
          },
        };
        (this.isOpen = !1),
          (this.targetOpen = { selector: !1, element: !1 }),
          (this.previousOpen = { selector: !1, element: !1 }),
          (this.lastClosed = { selector: !1, element: !1 }),
          (this._dataValue = !1),
          (this.hash = !1),
          (this._reopen = !1),
          (this._selectorOpen = !1),
          (this.lastFocusEl = !1),
          (this._focusEl = [
            "a[href]",
            'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
            "button:not([disabled]):not([aria-hidden])",
            "select:not([disabled]):not([aria-hidden])",
            "textarea:not([disabled]):not([aria-hidden])",
            "area[href]",
            "iframe",
            "object",
            "embed",
            "[contenteditable]",
            '[tabindex]:not([tabindex^="-"])',
          ]),
          (this.options = {
            ...t,
            ...e,
            classes: { ...t.classes, ...e?.classes },
            hashSettings: { ...t.hashSettings, ...e?.hashSettings },
            on: { ...t.on, ...e?.on },
          }),
          this.options.init && this.initPopups();
      }
      initPopups() {
        this.popupLogging("Проснулся"), this.eventsPopup();
      }
      eventsPopup() {
        document.addEventListener(
          "click",
          function (e) {
            const t = e.target.closest(`[${this.options.attributeOpenButton}]`);
            if (t)
              return (
                e.preventDefault(),
                (this._dataValue = t.getAttribute(
                  this.options.attributeOpenButton
                )
                  ? t.getAttribute(this.options.attributeOpenButton)
                  : "error"),
                "error" !== this._dataValue
                  ? (this.isOpen || (this.lastFocusEl = t),
                    (this.targetOpen.selector = `${this._dataValue}`),
                    (this._selectorOpen = !0),
                    void this.open())
                  : void this.popupLogging(
                      `Ой ой, не заполнен атрибут у ${t.classList}`
                    )
              );
            return e.target.closest(`[${this.options.attributeCloseButton}]`) ||
              (!e.target.closest(`.${this.options.classes.popupContent}`) &&
                this.isOpen)
              ? (e.preventDefault(), void this.close())
              : void 0;
          }.bind(this)
        ),
          document.addEventListener(
            "keydown",
            function (e) {
              if (
                this.options.closeEsc &&
                27 == e.which &&
                "Escape" === e.code &&
                this.isOpen
              )
                return e.preventDefault(), void this.close();
              this.options.focusCatch &&
                9 == e.which &&
                this.isOpen &&
                this._focusCatch(e);
            }.bind(this)
          ),
          document.querySelector("form[data-ajax],form[data-dev]") &&
            document.addEventListener(
              "formSent",
              function (e) {
                const t = e.detail.form.dataset.popupMessage;
                t && this.open(t);
              }.bind(this)
            ),
          this.options.hashSettings.goHash &&
            (window.addEventListener(
              "hashchange",
              function () {
                window.location.hash
                  ? this._openToHash()
                  : this.close(this.targetOpen.selector);
              }.bind(this)
            ),
            window.addEventListener(
              "load",
              function () {
                window.location.hash && this._openToHash();
              }.bind(this)
            ));
      }
      open(e) {
        if (
          (e &&
            "string" == typeof e &&
            "" !== e.trim() &&
            ((this.targetOpen.selector = e), (this._selectorOpen = !0)),
          this.isOpen && ((this._reopen = !0), this.close()),
          this._selectorOpen ||
            (this.targetOpen.selector = this.lastClosed.selector),
          this._reopen || (this.previousActiveElement = document.activeElement),
          (this.targetOpen.element = document.querySelector(
            this.targetOpen.selector
          )),
          this.targetOpen.element)
        ) {
          if (
            this.targetOpen.element.hasAttribute(this.options.youtubeAttribute)
          ) {
            const e = `https://www.youtube.com/embed/${this.targetOpen.element.getAttribute(
                this.options.youtubeAttribute
              )}?rel=0&showinfo=0&autoplay=1`,
              t = document.createElement("iframe");
            t.setAttribute("allowfullscreen", "");
            const s = this.options.setAutoplayYoutube ? "autoplay;" : "";
            t.setAttribute("allow", `${s}; encrypted-media`),
              t.setAttribute("src", e),
              this.targetOpen.element.querySelector(
                `[${this.options.youtubePlaceAttribute}]`
              ) &&
                this.targetOpen.element
                  .querySelector(`[${this.options.youtubePlaceAttribute}]`)
                  .appendChild(t);
          }
          this.options.hashSettings.location &&
            (this._getHash(), this._setHash()),
            this.options.on.beforeOpen(this),
            this.targetOpen.element.classList.add(
              this.options.classes.popupActive
            ),
            document.body.classList.add(this.options.classes.bodyActive),
            this._reopen ? (this._reopen = !1) : l(),
            this.targetOpen.element.setAttribute("aria-hidden", "false"),
            (this.previousOpen.selector = this.targetOpen.selector),
            (this.previousOpen.element = this.targetOpen.element),
            (this._selectorOpen = !1),
            (this.isOpen = !0),
            setTimeout(() => {
              this._focusTrap();
            }, 50),
            document.dispatchEvent(
              new CustomEvent("afterPopupOpen", { detail: { popup: this } })
            ),
            this.popupLogging("Открыл попап");
        } else
          this.popupLogging(
            "Ой ой, такого попапа нет. Проверьте корректность ввода. "
          );
      }
      close(e) {
        e &&
          "string" == typeof e &&
          "" !== e.trim() &&
          (this.previousOpen.selector = e),
          this.isOpen &&
            o &&
            (this.options.on.beforeClose(this),
            this.targetOpen.element.hasAttribute(
              this.options.youtubeAttribute
            ) &&
              this.targetOpen.element.querySelector(
                `[${this.options.youtubePlaceAttribute}]`
              ) &&
              (this.targetOpen.element.querySelector(
                `[${this.options.youtubePlaceAttribute}]`
              ).innerHTML = ""),
            this.previousOpen.element.classList.remove(
              this.options.classes.popupActive
            ),
            this.previousOpen.element.setAttribute("aria-hidden", "true"),
            this._reopen ||
              (document.body.classList.remove(this.options.classes.bodyActive),
              l(),
              (this.isOpen = !1)),
            this._removeHash(),
            this._selectorOpen &&
              ((this.lastClosed.selector = this.previousOpen.selector),
              (this.lastClosed.element = this.previousOpen.element)),
            this.options.on.afterClose(this),
            setTimeout(() => {
              this._focusTrap();
            }, 50),
            this.popupLogging("Закрыл попап"));
      }
      _getHash() {
        this.options.hashSettings.location &&
          (this.hash = this.targetOpen.selector.includes("#")
            ? this.targetOpen.selector
            : this.targetOpen.selector.replace(".", "#"));
      }
      _openToHash() {
        let e = document.querySelector(
          `.${window.location.hash.replace("#", "")}`
        )
          ? `.${window.location.hash.replace("#", "")}`
          : document.querySelector(`${window.location.hash}`)
          ? `${window.location.hash}`
          : null;
        document.querySelector(
          `[${this.options.attributeOpenButton}="${e}"]`
        ) &&
          e &&
          this.open(e);
      }
      _setHash() {
        history.pushState("", "", this.hash);
      }
      _removeHash() {
        history.pushState("", "", window.location.href.split("#")[0]);
      }
      _focusCatch(e) {
        const t = this.targetOpen.element.querySelectorAll(this._focusEl),
          s = Array.prototype.slice.call(t),
          i = s.indexOf(document.activeElement);
        e.shiftKey && 0 === i && (s[s.length - 1].focus(), e.preventDefault()),
          e.shiftKey ||
            i !== s.length - 1 ||
            (s[0].focus(), e.preventDefault());
      }
      _focusTrap() {
        const e = this.previousOpen.element.querySelectorAll(this._focusEl);
        !this.isOpen && this.lastFocusEl
          ? this.lastFocusEl.focus()
          : e[0].focus();
      }
      popupLogging(e) {
        this.options.logging && u(`[Попапос]: ${e}`);
      }
    }
    let n = (e, t = 500, s = 0) => {
        e.classList.contains("_slide") ||
          (e.classList.add("_slide"),
          (e.style.transitionProperty = "height, margin, padding"),
          (e.style.transitionDuration = t + "ms"),
          (e.style.height = `${e.offsetHeight}px`),
          e.offsetHeight,
          (e.style.overflow = "hidden"),
          (e.style.height = s ? `${s}px` : "0px"),
          (e.style.paddingTop = 0),
          (e.style.paddingBottom = 0),
          (e.style.marginTop = 0),
          (e.style.marginBottom = 0),
          window.setTimeout(() => {
            (e.hidden = !s),
              !s && e.style.removeProperty("height"),
              e.style.removeProperty("padding-top"),
              e.style.removeProperty("padding-bottom"),
              e.style.removeProperty("margin-top"),
              e.style.removeProperty("margin-bottom"),
              !s && e.style.removeProperty("overflow"),
              e.style.removeProperty("transition-duration"),
              e.style.removeProperty("transition-property"),
              e.classList.remove("_slide");
          }, t));
      },
      a = (e, t = 500, s = 0) => {
        if (!e.classList.contains("_slide")) {
          e.classList.add("_slide"),
            (e.hidden = !e.hidden && null),
            s && e.style.removeProperty("height");
          let i = e.offsetHeight;
          (e.style.overflow = "hidden"),
            (e.style.height = s ? `${s}px` : "0px"),
            (e.style.paddingTop = 0),
            (e.style.paddingBottom = 0),
            (e.style.marginTop = 0),
            (e.style.marginBottom = 0),
            e.offsetHeight,
            (e.style.transitionProperty = "height, margin, padding"),
            (e.style.transitionDuration = t + "ms"),
            (e.style.height = i + "px"),
            e.style.removeProperty("padding-top"),
            e.style.removeProperty("padding-bottom"),
            e.style.removeProperty("margin-top"),
            e.style.removeProperty("margin-bottom"),
            window.setTimeout(() => {
              e.style.removeProperty("height"),
                e.style.removeProperty("overflow"),
                e.style.removeProperty("transition-duration"),
                e.style.removeProperty("transition-property"),
                e.classList.remove("_slide");
            }, t);
        }
      },
      r = (e, t = 500) => (e.hidden ? a(e, t) : n(e, t)),
      o = !0,
      l = (e = 500) => {
        document.documentElement.classList.contains("lock") ? d(e) : c(e);
      },
      d = (e = 500) => {
        let t = document.querySelector("body");
        if (o) {
          let s = document.querySelectorAll("[data-lp]");
          setTimeout(() => {
            for (let e = 0; e < s.length; e++) {
              s[e].style.paddingRight = "0px";
            }
            (t.style.paddingRight = "0px"),
              document.documentElement.classList.remove("lock");
          }, e),
            (o = !1),
            setTimeout(function () {
              o = !0;
            }, e);
        }
      },
      c = (e = 500) => {
        let t = document.querySelector("body");
        if (o) {
          let s = document.querySelectorAll("[data-lp]");
          for (let e = 0; e < s.length; e++) {
            s[e].style.paddingRight =
              window.innerWidth -
              document.querySelector(".wrapper").offsetWidth +
              "px";
          }
          (t.style.paddingRight =
            window.innerWidth -
            document.querySelector(".wrapper").offsetWidth +
            "px"),
            document.documentElement.classList.add("lock"),
            (o = !1),
            setTimeout(function () {
              o = !0;
            }, e);
        }
      };
    function u(e) {
      setTimeout(() => {
        window.FLS && console.log(e);
      }, 0);
    }
    function p(e, t) {
      const s = Array.from(e).filter(function (e, s, i) {
        if (e.dataset[t]) return e.dataset[t].split(",")[0];
      });
      if (s.length) {
        const e = [];
        s.forEach((s) => {
          const i = {},
            n = s.dataset[t].split(",");
          (i.value = n[0]),
            (i.type = n[1] ? n[1].trim() : "max"),
            (i.item = s),
            e.push(i);
        });
        let i = e.map(function (e) {
          return (
            "(" +
            e.type +
            "-width: " +
            e.value +
            "px)," +
            e.value +
            "," +
            e.type
          );
        });
        i = (function (e) {
          return e.filter(function (e, t, s) {
            return s.indexOf(e) === t;
          });
        })(i);
        const n = [];
        if (i.length)
          return (
            i.forEach((t) => {
              const s = t.split(","),
                i = s[1],
                a = s[2],
                r = window.matchMedia(s[0]),
                o = e.filter(function (e) {
                  if (e.value === i && e.type === a) return !0;
                });
              n.push({ itemsArray: o, matchMedia: r });
            }),
            n
          );
      }
    }
    let h = (e, t = !1, s = 500, i = 0) => {
      const n = document.querySelector(e);
      if (n) {
        let a = "",
          r = 0;
        t &&
          ((a = "header.header"), (r = document.querySelector(a).offsetHeight));
        let o = {
          speedAsDuration: !0,
          speed: s,
          header: a,
          offset: i,
          easing: "easeOutQuad",
        };
        if (
          (document.documentElement.classList.contains("menu-open") &&
            (d(), document.documentElement.classList.remove("menu-open")),
          "undefined" != typeof SmoothScroll)
        )
          new SmoothScroll().animateScroll(n, "", o);
        else {
          let e = n.getBoundingClientRect().top + scrollY;
          window.scrollTo({ top: r ? e - r : e, behavior: "smooth" });
        }
        u(`[gotoBlock]: Юхуу...едем к ${e}`);
      } else u(`[gotoBlock]: Ой ой..Такого блока нет на странице: ${e}`);
    };
    class f {
      constructor(e, t = null) {
        if (
          ((this.config = Object.assign({ init: !0, logging: !0 }, e)),
          (this.selectClasses = {
            classSelect: "select",
            classSelectBody: "select__body",
            classSelectTitle: "select__title",
            classSelectValue: "select__value",
            classSelectLabel: "select__label",
            classSelectInput: "select__input",
            classSelectText: "select__text",
            classSelectLink: "select__link",
            classSelectOptions: "select__options",
            classSelectOptionsScroll: "select__scroll",
            classSelectOption: "select__option",
            classSelectContent: "select__content",
            classSelectRow: "select__row",
            classSelectData: "select__asset",
            classSelectDisabled: "_select-disabled",
            classSelectTag: "_select-tag",
            classSelectOpen: "_select-open",
            classSelectActive: "_select-active",
            classSelectFocus: "_select-focus",
            classSelectMultiple: "_select-multiple",
            classSelectCheckBox: "_select-checkbox",
            classSelectOptionSelected: "_select-selected",
          }),
          (this._this = this),
          this.config.init)
        ) {
          const e = t
            ? document.querySelectorAll(t)
            : document.querySelectorAll("select");
          e.length
            ? (this.selectsInit(e),
              this.setLogging(`Проснулся, построил селектов: (${e.length})`))
            : this.setLogging("Сплю, нет ни одного select zzZZZzZZz");
        }
      }
      getSelectClass(e) {
        return `.${e}`;
      }
      getSelectElement(e, t) {
        return {
          originalSelect: e.querySelector("select"),
          selectElement: e.querySelector(this.getSelectClass(t)),
        };
      }
      selectsInit(e) {
        e.forEach((e, t) => {
          this.selectInit(e, t + 1);
        }),
          document.addEventListener(
            "click",
            function (e) {
              this.selectsActions(e);
            }.bind(this)
          ),
          document.addEventListener(
            "keydown",
            function (e) {
              this.selectsActions(e);
            }.bind(this)
          ),
          document.addEventListener(
            "focusin",
            function (e) {
              this.selectsActions(e);
            }.bind(this)
          ),
          document.addEventListener(
            "focusout",
            function (e) {
              this.selectsActions(e);
            }.bind(this)
          );
      }
      selectInit(e, t) {
        const s = this;
        let i = document.createElement("div");
        if (
          (i.classList.add(this.selectClasses.classSelect),
          e.parentNode.insertBefore(i, e),
          i.appendChild(e),
          (e.hidden = !0),
          t && (e.dataset.id = t),
          i.insertAdjacentHTML(
            "beforeend",
            `<div class="${this.selectClasses.classSelectBody}"><div hidden class="${this.selectClasses.classSelectOptions}"></div></div>`
          ),
          this.selectBuild(e),
          this.getSelectPlaceholder(e) &&
            ((e.dataset.placeholder = this.getSelectPlaceholder(e).value),
            this.getSelectPlaceholder(e).label.show))
        ) {
          this.getSelectElement(
            i,
            this.selectClasses.classSelectTitle
          ).selectElement.insertAdjacentHTML(
            "afterbegin",
            `<span class="${this.selectClasses.classSelectLabel}">${
              this.getSelectPlaceholder(e).label.text
                ? this.getSelectPlaceholder(e).label.text
                : this.getSelectPlaceholder(e).value
            }</span>`
          );
        }
        (e.dataset.speed = e.dataset.speed ? e.dataset.speed : "150"),
          e.addEventListener("change", function (e) {
            s.selectChange(e);
          });
      }
      selectBuild(e) {
        const t = e.parentElement;
        (t.dataset.id = e.dataset.id),
          t.classList.add(
            e.getAttribute("class") ? `select_${e.getAttribute("class")}` : ""
          ),
          e.multiple
            ? t.classList.add(this.selectClasses.classSelectMultiple)
            : t.classList.remove(this.selectClasses.classSelectMultiple),
          e.hasAttribute("data-checkbox") && e.multiple
            ? t.classList.add(this.selectClasses.classSelectCheckBox)
            : t.classList.remove(this.selectClasses.classSelectCheckBox),
          this.setSelectTitleValue(t, e),
          this.setOptions(t, e),
          e.hasAttribute("data-search") && this.searchActions(t),
          e.hasAttribute("data-open") && this.selectAction(t),
          this.selectDisabled(t, e);
      }
      selectsActions(e) {
        const t = e.target,
          s = e.type;
        if (
          t.closest(this.getSelectClass(this.selectClasses.classSelect)) ||
          t.closest(this.getSelectClass(this.selectClasses.classSelectTag))
        ) {
          const i = t.closest(".select")
              ? t.closest(".select")
              : document.querySelector(
                  `.${this.selectClasses.classSelect}[data-id="${
                    t.closest(
                      this.getSelectClass(this.selectClasses.classSelectTag)
                    ).dataset.selectId
                  }"]`
                ),
            n = this.getSelectElement(i).originalSelect;
          if ("click" === s) {
            if (!n.disabled)
              if (
                t.closest(
                  this.getSelectClass(this.selectClasses.classSelectTag)
                )
              ) {
                const e = t.closest(
                    this.getSelectClass(this.selectClasses.classSelectTag)
                  ),
                  s = document.querySelector(
                    `.${this.selectClasses.classSelect}[data-id="${e.dataset.selectId}"] .select__option[data-value="${e.dataset.value}"]`
                  );
                this.optionAction(i, n, s);
              } else if (
                t.closest(
                  this.getSelectClass(this.selectClasses.classSelectTitle)
                )
              )
                this.selectAction(i);
              else if (
                t.closest(
                  this.getSelectClass(this.selectClasses.classSelectOption)
                )
              ) {
                const e = t.closest(
                  this.getSelectClass(this.selectClasses.classSelectOption)
                );
                this.optionAction(i, n, e);
              }
          } else
            "focusin" === s || "focusout" === s
              ? t.closest(
                  this.getSelectClass(this.selectClasses.classSelect)
                ) &&
                ("focusin" === s
                  ? i.classList.add(this.selectClasses.classSelectFocus)
                  : i.classList.remove(this.selectClasses.classSelectFocus))
              : "keydown" === s && "Escape" === e.code && this.selectsСlose();
        } else this.selectsСlose();
      }
      selectsСlose() {
        const e = document.querySelectorAll(
          `${this.getSelectClass(
            this.selectClasses.classSelect
          )}${this.getSelectClass(this.selectClasses.classSelectOpen)}`
        );
        e.length &&
          e.forEach((e) => {
            this.selectAction(e);
          });
      }
      selectAction(e) {
        const t = this.getSelectElement(e).originalSelect,
          s = this.getSelectElement(
            e,
            this.selectClasses.classSelectOptions
          ).selectElement;
        s.classList.contains("_slide") ||
          (e.classList.toggle(this.selectClasses.classSelectOpen),
          r(s, t.dataset.speed));
      }
      setSelectTitleValue(e, t) {
        const s = this.getSelectElement(
            e,
            this.selectClasses.classSelectBody
          ).selectElement,
          i = this.getSelectElement(
            e,
            this.selectClasses.classSelectTitle
          ).selectElement;
        i && i.remove(),
          s.insertAdjacentHTML("afterbegin", this.getSelectTitleValue(e, t));
      }
      getSelectTitleValue(e, t) {
        let s = this.getSelectedOptionsData(t, 2).html;
        if (
          (t.multiple &&
            t.hasAttribute("data-tags") &&
            ((s = this.getSelectedOptionsData(t)
              .elements.map(
                (t) =>
                  `<span role="button" data-select-id="${
                    e.dataset.id
                  }" data-value="${
                    t.value
                  }" class="_select-tag">${this.getSelectElementContent(
                    t
                  )}</span>`
              )
              .join("")),
            t.dataset.tags &&
              document.querySelector(t.dataset.tags) &&
              ((document.querySelector(t.dataset.tags).innerHTML = s),
              t.hasAttribute("data-search") && (s = !1))),
          (s = s.length ? s : t.dataset.placeholder),
          this.getSelectedOptionsData(t).values.length
            ? e.classList.add(this.selectClasses.classSelectActive)
            : e.classList.remove(this.selectClasses.classSelectActive),
          t.hasAttribute("data-search"))
        )
          return `<div class="${this.selectClasses.classSelectTitle}"><span class="${this.selectClasses.classSelectValue}"><input autocomplete="off" type="text" placeholder="${s}" data-placeholder="${s}" class="${this.selectClasses.classSelectInput}"></span></div>`;
        {
          const e =
            this.getSelectedOptionsData(t).elements.length &&
            this.getSelectedOptionsData(t).elements[0].dataset.class
              ? ` ${this.getSelectedOptionsData(t).elements[0].dataset.class}`
              : "";
          return `<button type="button" class="${this.selectClasses.classSelectTitle}"><span class="${this.selectClasses.classSelectValue}"><span class="${this.selectClasses.classSelectContent}${e}">${s}</span></span></button>`;
        }
      }
      getSelectElementContent(e) {
        const t = e.dataset.asset ? `${e.dataset.asset}` : "",
          s = t.indexOf("img") >= 0 ? `<img src="${t}" alt="">` : t;
        let i = "";
        return (
          (i += t ? `<span class="${this.selectClasses.classSelectRow}">` : ""),
          (i += t
            ? `<span class="${this.selectClasses.classSelectData}">`
            : ""),
          (i += t ? s : ""),
          (i += t ? "</span>" : ""),
          (i += t
            ? `<span class="${this.selectClasses.classSelectText}">`
            : ""),
          (i += e.textContent),
          (i += t ? "</span>" : ""),
          (i += t ? "</span>" : ""),
          i
        );
      }
      getSelectPlaceholder(e) {
        const t = Array.from(e.options).find((e) => !e.value);
        if (t)
          return {
            value: t.textContent,
            show: t.hasAttribute("data-show"),
            label: {
              show: t.hasAttribute("data-label"),
              text: t.dataset.label,
            },
          };
      }
      getSelectedOptionsData(e, t) {
        let s = [];
        return (
          e.multiple
            ? (s = Array.from(e.options)
                .filter((e) => e.value)
                .filter((e) => e.selected))
            : s.push(e.options[e.selectedIndex]),
          {
            elements: s.map((e) => e),
            values: s.filter((e) => e.value).map((e) => e.value),
            html: s.map((e) => this.getSelectElementContent(e)),
          }
        );
      }
      getOptions(e) {
        let t = e.hasAttribute("data-scroll") ? "data-simplebar" : "",
          s = e.dataset.scroll
            ? `style="max-height:${e.dataset.scroll}px"`
            : "",
          i = Array.from(e.options);
        if (i.length > 0) {
          let n = "";
          return (
            ((this.getSelectPlaceholder(e) &&
              !this.getSelectPlaceholder(e).show) ||
              e.multiple) &&
              (i = i.filter((e) => e.value)),
            (n += t
              ? `<div ${t} ${s} class="${this.selectClasses.classSelectOptionsScroll}">`
              : ""),
            i.forEach((t) => {
              n += this.getOption(t, e);
            }),
            (n += t ? "</div>" : ""),
            n
          );
        }
      }
      getOption(e, t) {
        const s =
            e.selected && t.multiple
              ? ` ${this.selectClasses.classSelectOptionSelected}`
              : "",
          i =
            e.selected && !t.hasAttribute("data-show-selected") ? "hidden" : "",
          n = e.dataset.class ? ` ${e.dataset.class}` : "",
          a = !!e.dataset.href && e.dataset.href,
          r = e.hasAttribute("data-href-blank") ? 'target="_blank"' : "";
        let o = "";
        return (
          (o += a
            ? `<a ${r} ${i} href="${a}" data-value="${e.value}" class="${this.selectClasses.classSelectOption}${n}${s}">`
            : `<button ${i} class="${this.selectClasses.classSelectOption}${n}${s}" data-value="${e.value}" type="button">`),
          (o += this.getSelectElementContent(e)),
          (o += a ? "</a>" : "</button>"),
          o
        );
      }
      setOptions(e, t) {
        this.getSelectElement(
          e,
          this.selectClasses.classSelectOptions
        ).selectElement.innerHTML = this.getOptions(t);
      }
      optionAction(e, t, s) {
        if (t.multiple) {
          s.classList.toggle(this.selectClasses.classSelectOptionSelected);
          this.getSelectedOptionsData(t).elements.forEach((e) => {
            e.removeAttribute("selected");
          });
          e.querySelectorAll(
            this.getSelectClass(this.selectClasses.classSelectOptionSelected)
          ).forEach((e) => {
            t.querySelector(`option[value="${e.dataset.value}"]`).setAttribute(
              "selected",
              "selected"
            );
          });
        } else
          t.hasAttribute("data-show-selected") ||
            (e.querySelector(
              `${this.getSelectClass(
                this.selectClasses.classSelectOption
              )}[hidden]`
            ) &&
              (e.querySelector(
                `${this.getSelectClass(
                  this.selectClasses.classSelectOption
                )}[hidden]`
              ).hidden = !1),
            (s.hidden = !0)),
            (t.value = s.hasAttribute("data-value")
              ? s.dataset.value
              : s.textContent),
            this.selectAction(e);
        this.setSelectTitleValue(e, t), this.setSelectChange(t);
      }
      selectChange(e) {
        const t = e.target;
        this.selectBuild(t), this.setSelectChange(t);
      }
      setSelectChange(e) {
        if (
          (e.hasAttribute("data-validate") && g.validateInput(e),
          e.hasAttribute("data-submit") && e.value)
        ) {
          let t = document.createElement("button");
          (t.type = "submit"),
            e.closest("form").append(t),
            t.click(),
            t.remove();
        }
        const t = e.parentElement;
        this.selectCallback(t, e);
      }
      selectDisabled(e, t) {
        t.disabled
          ? (e.classList.add(this.selectClasses.classSelectDisabled),
            (this.getSelectElement(
              e,
              this.selectClasses.classSelectTitle
            ).selectElement.disabled = !0))
          : (e.classList.remove(this.selectClasses.classSelectDisabled),
            (this.getSelectElement(
              e,
              this.selectClasses.classSelectTitle
            ).selectElement.disabled = !1));
      }
      searchActions(e) {
        this.getSelectElement(e).originalSelect;
        const t = this.getSelectElement(
            e,
            this.selectClasses.classSelectInput
          ).selectElement,
          s = this.getSelectElement(
            e,
            this.selectClasses.classSelectOptions
          ).selectElement,
          i = s.querySelectorAll(`.${this.selectClasses.classSelectOption}`),
          n = this;
        t.addEventListener("input", function () {
          i.forEach((e) => {
            e.textContent.toUpperCase().indexOf(t.value.toUpperCase()) >= 0
              ? (e.hidden = !1)
              : (e.hidden = !0);
          }),
            !0 === s.hidden && n.selectAction(e);
        });
      }
      selectCallback(e, t) {
        document.dispatchEvent(
          new CustomEvent("selectCallback", { detail: { select: t } })
        );
      }
      setLogging(e) {
        this.config.logging && u(`[select]: ${e}`);
      }
    }
    const m = { inputMaskModule: null, selectModule: null };
    let g = {
      getErrors(e) {
        let t = 0,
          s = e.querySelectorAll("*[data-required]");
        return (
          s.length &&
            s.forEach((e) => {
              (null === e.offsetParent && "SELECT" !== e.tagName) ||
                e.disabled ||
                (t += this.validateInput(e));
            }),
          t
        );
      },
      validateInput(e) {
        let t = 0;
        return (
          "email" === e.dataset.required
            ? ((e.value = e.value.replace(" ", "")),
              this.emailTest(e) ? (this.addError(e), t++) : this.removeError(e))
            : ("checkbox" !== e.type || e.checked) && e.value
            ? this.removeError(e)
            : (this.addError(e), t++),
          t
        );
      },
      addError(e) {
        e.classList.add("_form-error"),
          e.parentElement.classList.add("_form-error");
        let t = e.parentElement.querySelector(".form__error");
        t && e.parentElement.removeChild(t),
          e.dataset.error &&
            e.parentElement.insertAdjacentHTML(
              "beforeend",
              `<div class="form__error">${e.dataset.error}</div>`
            );
      },
      removeError(e) {
        e.classList.remove("_form-error"),
          e.parentElement.classList.remove("_form-error"),
          e.parentElement.querySelector(".form__error") &&
            e.parentElement.removeChild(
              e.parentElement.querySelector(".form__error")
            );
      },
      formClean(e) {
        e.reset(),
          setTimeout(() => {
            let t = e.querySelectorAll("input,textarea");
            for (let e = 0; e < t.length; e++) {
              const s = t[e];
              s.parentElement.classList.remove("_form-focus"),
                s.classList.remove("_form-focus"),
                g.removeError(s),
                (s.value = s.dataset.placeholder);
            }
            let s = e.querySelectorAll(".checkbox__input");
            if (s.length > 0)
              for (let e = 0; e < s.length; e++) {
                s[e].checked = !1;
              }
            if (m.selectModule) {
              let t = e.querySelectorAll(".select");
              if (t.length)
                for (let e = 0; e < t.length; e++) {
                  const s = t[e].querySelector("select");
                  m.selectModule.selectBuild(s);
                }
            }
          }, 0);
      },
      emailTest: (e) =>
        !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(e.value),
    };
    var v = s(211);
    function b(e) {
      return (
        null !== e &&
        "object" == typeof e &&
        "constructor" in e &&
        e.constructor === Object
      );
    }
    function y(e = {}, t = {}) {
      Object.keys(t).forEach((s) => {
        void 0 === e[s]
          ? (e[s] = t[s])
          : b(t[s]) && b(e[s]) && Object.keys(t[s]).length > 0 && y(e[s], t[s]);
      });
    }
    !(function () {
      const e = document.getElementById("range-square"),
        t = document.getElementById("range-price");
      e &&
        v.create(e, {
          start: [10, 268],
          connect: !0,
          tooltips: [wNumb({ decimals: 0 }), wNumb({ decimals: 0 })],
          range: { min: 10, max: 500 },
        }),
        t &&
          v.create(t, {
            start: [1e5, 268e4],
            connect: !0,
            tooltips: [wNumb({ decimals: 0 }), wNumb({ decimals: 0 })],
            range: { min: 1e5, max: 5e6 },
          });
    })();
    const w = {
      body: {},
      addEventListener() {},
      removeEventListener() {},
      activeElement: { blur() {}, nodeName: "" },
      querySelector: () => null,
      querySelectorAll: () => [],
      getElementById: () => null,
      createEvent: () => ({ initEvent() {} }),
      createElement: () => ({
        children: [],
        childNodes: [],
        style: {},
        setAttribute() {},
        getElementsByTagName: () => [],
      }),
      createElementNS: () => ({}),
      importNode: () => null,
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: "",
      },
    };
    function S() {
      const e = "undefined" != typeof document ? document : {};
      return y(e, w), e;
    }
    const _ = {
      document: w,
      navigator: { userAgent: "" },
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: "",
      },
      history: { replaceState() {}, pushState() {}, go() {}, back() {} },
      CustomEvent: function () {
        return this;
      },
      addEventListener() {},
      removeEventListener() {},
      getComputedStyle: () => ({ getPropertyValue: () => "" }),
      Image() {},
      Date() {},
      screen: {},
      setTimeout() {},
      clearTimeout() {},
      matchMedia: () => ({}),
      requestAnimationFrame: (e) =>
        "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
      cancelAnimationFrame(e) {
        "undefined" != typeof setTimeout && clearTimeout(e);
      },
    };
    function C() {
      const e = "undefined" != typeof window ? window : {};
      return y(e, _), e;
    }
    function x(e, t = 0) {
      return setTimeout(e, t);
    }
    function E() {
      return Date.now();
    }
    function T(e, t = "x") {
      const s = C();
      let i, n, a;
      const r = (function (e) {
        const t = C();
        let s;
        return (
          t.getComputedStyle && (s = t.getComputedStyle(e, null)),
          !s && e.currentStyle && (s = e.currentStyle),
          s || (s = e.style),
          s
        );
      })(e);
      return (
        s.WebKitCSSMatrix
          ? ((n = r.transform || r.webkitTransform),
            n.split(",").length > 6 &&
              (n = n
                .split(", ")
                .map((e) => e.replace(",", "."))
                .join(", ")),
            (a = new s.WebKitCSSMatrix("none" === n ? "" : n)))
          : ((a =
              r.MozTransform ||
              r.OTransform ||
              r.MsTransform ||
              r.msTransform ||
              r.transform ||
              r
                .getPropertyValue("transform")
                .replace("translate(", "matrix(1, 0, 0, 1,")),
            (i = a.toString().split(","))),
        "x" === t &&
          (n = s.WebKitCSSMatrix
            ? a.m41
            : 16 === i.length
            ? parseFloat(i[12])
            : parseFloat(i[4])),
        "y" === t &&
          (n = s.WebKitCSSMatrix
            ? a.m42
            : 16 === i.length
            ? parseFloat(i[13])
            : parseFloat(i[5])),
        n || 0
      );
    }
    function k(e) {
      return (
        "object" == typeof e &&
        null !== e &&
        e.constructor &&
        "Object" === Object.prototype.toString.call(e).slice(8, -1)
      );
    }
    function A(...e) {
      const t = Object(e[0]),
        s = ["__proto__", "constructor", "prototype"];
      for (let n = 1; n < e.length; n += 1) {
        const a = e[n];
        if (
          null != a &&
          ((i = a),
          !("undefined" != typeof window && void 0 !== window.HTMLElement
            ? i instanceof HTMLElement
            : i && (1 === i.nodeType || 11 === i.nodeType)))
        ) {
          const e = Object.keys(Object(a)).filter((e) => s.indexOf(e) < 0);
          for (let s = 0, i = e.length; s < i; s += 1) {
            const i = e[s],
              n = Object.getOwnPropertyDescriptor(a, i);
            void 0 !== n &&
              n.enumerable &&
              (k(t[i]) && k(a[i])
                ? a[i].__swiper__
                  ? (t[i] = a[i])
                  : A(t[i], a[i])
                : !k(t[i]) && k(a[i])
                ? ((t[i] = {}), a[i].__swiper__ ? (t[i] = a[i]) : A(t[i], a[i]))
                : (t[i] = a[i]));
          }
        }
      }
      var i;
      return t;
    }
    function L(e, t, s) {
      e.style.setProperty(t, s);
    }
    function P({ swiper: e, targetPosition: t, side: s }) {
      const i = C(),
        n = -e.translate;
      let a,
        r = null;
      const o = e.params.speed;
      (e.wrapperEl.style.scrollSnapType = "none"),
        i.cancelAnimationFrame(e.cssModeFrameID);
      const l = t > n ? "next" : "prev",
        d = (e, t) => ("next" === l && e >= t) || ("prev" === l && e <= t),
        c = () => {
          (a = new Date().getTime()), null === r && (r = a);
          const l = Math.max(Math.min((a - r) / o, 1), 0),
            u = 0.5 - Math.cos(l * Math.PI) / 2;
          let p = n + u * (t - n);
          if ((d(p, t) && (p = t), e.wrapperEl.scrollTo({ [s]: p }), d(p, t)))
            return (
              (e.wrapperEl.style.overflow = "hidden"),
              (e.wrapperEl.style.scrollSnapType = ""),
              setTimeout(() => {
                (e.wrapperEl.style.overflow = ""),
                  e.wrapperEl.scrollTo({ [s]: p });
              }),
              void i.cancelAnimationFrame(e.cssModeFrameID)
            );
          e.cssModeFrameID = i.requestAnimationFrame(c);
        };
      c();
    }
    function M(e, t = "") {
      return [...e.children].filter((e) => e.matches(t));
    }
    function O(e, t = []) {
      const s = document.createElement(e);
      return s.classList.add(...(Array.isArray(t) ? t : [t])), s;
    }
    function I(e, t) {
      return C().getComputedStyle(e, null).getPropertyValue(t);
    }
    function N(e) {
      let t,
        s = e;
      if (s) {
        for (t = 0; null !== (s = s.previousSibling); )
          1 === s.nodeType && (t += 1);
        return t;
      }
    }
    function z(e, t) {
      const s = [];
      let i = e.parentElement;
      for (; i; )
        t ? i.matches(t) && s.push(i) : s.push(i), (i = i.parentElement);
      return s;
    }
    function B(e, t, s) {
      const i = C();
      return s
        ? e["width" === t ? "offsetWidth" : "offsetHeight"] +
            parseFloat(
              i
                .getComputedStyle(e, null)
                .getPropertyValue("width" === t ? "margin-right" : "margin-top")
            ) +
            parseFloat(
              i
                .getComputedStyle(e, null)
                .getPropertyValue(
                  "width" === t ? "margin-left" : "margin-bottom"
                )
            )
        : e.offsetWidth;
    }
    let D, q, $;
    function j() {
      return (
        D ||
          (D = (function () {
            const e = C(),
              t = S();
            return {
              smoothScroll:
                t.documentElement &&
                "scrollBehavior" in t.documentElement.style,
              touch: !!(
                "ontouchstart" in e ||
                (e.DocumentTouch && t instanceof e.DocumentTouch)
              ),
            };
          })()),
        D
      );
    }
    function V(e = {}) {
      return (
        q ||
          (q = (function ({ userAgent: e } = {}) {
            const t = j(),
              s = C(),
              i = s.navigator.platform,
              n = e || s.navigator.userAgent,
              a = { ios: !1, android: !1 },
              r = s.screen.width,
              o = s.screen.height,
              l = n.match(/(Android);?[\s\/]+([\d.]+)?/);
            let d = n.match(/(iPad).*OS\s([\d_]+)/);
            const c = n.match(/(iPod)(.*OS\s([\d_]+))?/),
              u = !d && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
              p = "Win32" === i;
            let h = "MacIntel" === i;
            return (
              !d &&
                h &&
                t.touch &&
                [
                  "1024x1366",
                  "1366x1024",
                  "834x1194",
                  "1194x834",
                  "834x1112",
                  "1112x834",
                  "768x1024",
                  "1024x768",
                  "820x1180",
                  "1180x820",
                  "810x1080",
                  "1080x810",
                ].indexOf(`${r}x${o}`) >= 0 &&
                ((d = n.match(/(Version)\/([\d.]+)/)),
                d || (d = [0, 1, "13_0_0"]),
                (h = !1)),
              l && !p && ((a.os = "android"), (a.android = !0)),
              (d || u || c) && ((a.os = "ios"), (a.ios = !0)),
              a
            );
          })(e)),
        q
      );
    }
    function H() {
      return (
        $ ||
          ($ = (function () {
            const e = C();
            let t = !1;
            function s() {
              const t = e.navigator.userAgent.toLowerCase();
              return (
                t.indexOf("safari") >= 0 &&
                t.indexOf("chrome") < 0 &&
                t.indexOf("android") < 0
              );
            }
            if (s()) {
              const s = String(e.navigator.userAgent);
              if (s.includes("Version/")) {
                const [e, i] = s
                  .split("Version/")[1]
                  .split(" ")[0]
                  .split(".")
                  .map((e) => Number(e));
                t = e < 16 || (16 === e && i < 2);
              }
            }
            return {
              isSafari: t || s(),
              needPerspectiveFix: t,
              isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                e.navigator.userAgent
              ),
            };
          })()),
        $
      );
    }
    const G = {
      on(e, t, s) {
        const i = this;
        if (!i.eventsListeners || i.destroyed) return i;
        if ("function" != typeof t) return i;
        const n = s ? "unshift" : "push";
        return (
          e.split(" ").forEach((e) => {
            i.eventsListeners[e] || (i.eventsListeners[e] = []),
              i.eventsListeners[e][n](t);
          }),
          i
        );
      },
      once(e, t, s) {
        const i = this;
        if (!i.eventsListeners || i.destroyed) return i;
        if ("function" != typeof t) return i;
        function n(...s) {
          i.off(e, n),
            n.__emitterProxy && delete n.__emitterProxy,
            t.apply(i, s);
        }
        return (n.__emitterProxy = t), i.on(e, n, s);
      },
      onAny(e, t) {
        const s = this;
        if (!s.eventsListeners || s.destroyed) return s;
        if ("function" != typeof e) return s;
        const i = t ? "unshift" : "push";
        return (
          s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[i](e), s
        );
      },
      offAny(e) {
        const t = this;
        if (!t.eventsListeners || t.destroyed) return t;
        if (!t.eventsAnyListeners) return t;
        const s = t.eventsAnyListeners.indexOf(e);
        return s >= 0 && t.eventsAnyListeners.splice(s, 1), t;
      },
      off(e, t) {
        const s = this;
        return !s.eventsListeners || s.destroyed
          ? s
          : s.eventsListeners
          ? (e.split(" ").forEach((e) => {
              void 0 === t
                ? (s.eventsListeners[e] = [])
                : s.eventsListeners[e] &&
                  s.eventsListeners[e].forEach((i, n) => {
                    (i === t || (i.__emitterProxy && i.__emitterProxy === t)) &&
                      s.eventsListeners[e].splice(n, 1);
                  });
            }),
            s)
          : s;
      },
      emit(...e) {
        const t = this;
        if (!t.eventsListeners || t.destroyed) return t;
        if (!t.eventsListeners) return t;
        let s, i, n;
        "string" == typeof e[0] || Array.isArray(e[0])
          ? ((s = e[0]), (i = e.slice(1, e.length)), (n = t))
          : ((s = e[0].events), (i = e[0].data), (n = e[0].context || t)),
          i.unshift(n);
        return (
          (Array.isArray(s) ? s : s.split(" ")).forEach((e) => {
            t.eventsAnyListeners &&
              t.eventsAnyListeners.length &&
              t.eventsAnyListeners.forEach((t) => {
                t.apply(n, [e, ...i]);
              }),
              t.eventsListeners &&
                t.eventsListeners[e] &&
                t.eventsListeners[e].forEach((e) => {
                  e.apply(n, i);
                });
          }),
          t
        );
      },
    };
    const F = {
      updateSize: function () {
        const e = this;
        let t, s;
        const i = e.el;
        (t =
          void 0 !== e.params.width && null !== e.params.width
            ? e.params.width
            : i.clientWidth),
          (s =
            void 0 !== e.params.height && null !== e.params.height
              ? e.params.height
              : i.clientHeight),
          (0 === t && e.isHorizontal()) ||
            (0 === s && e.isVertical()) ||
            ((t =
              t -
              parseInt(I(i, "padding-left") || 0, 10) -
              parseInt(I(i, "padding-right") || 0, 10)),
            (s =
              s -
              parseInt(I(i, "padding-top") || 0, 10) -
              parseInt(I(i, "padding-bottom") || 0, 10)),
            Number.isNaN(t) && (t = 0),
            Number.isNaN(s) && (s = 0),
            Object.assign(e, {
              width: t,
              height: s,
              size: e.isHorizontal() ? t : s,
            }));
      },
      updateSlides: function () {
        const e = this;
        function t(t) {
          return e.isHorizontal()
            ? t
            : {
                width: "height",
                "margin-top": "margin-left",
                "margin-bottom ": "margin-right",
                "margin-left": "margin-top",
                "margin-right": "margin-bottom",
                "padding-left": "padding-top",
                "padding-right": "padding-bottom",
                marginRight: "marginBottom",
              }[t];
        }
        function s(e, s) {
          return parseFloat(e.getPropertyValue(t(s)) || 0);
        }
        const i = e.params,
          {
            wrapperEl: n,
            slidesEl: a,
            size: r,
            rtlTranslate: o,
            wrongRTL: l,
          } = e,
          d = e.virtual && i.virtual.enabled,
          c = d ? e.virtual.slides.length : e.slides.length,
          u = M(a, `.${e.params.slideClass}, swiper-slide`),
          p = d ? e.virtual.slides.length : u.length;
        let h = [];
        const f = [],
          m = [];
        let g = i.slidesOffsetBefore;
        "function" == typeof g && (g = i.slidesOffsetBefore.call(e));
        let v = i.slidesOffsetAfter;
        "function" == typeof v && (v = i.slidesOffsetAfter.call(e));
        const b = e.snapGrid.length,
          y = e.slidesGrid.length;
        let w = i.spaceBetween,
          S = -g,
          _ = 0,
          C = 0;
        if (void 0 === r) return;
        "string" == typeof w &&
          w.indexOf("%") >= 0 &&
          (w = (parseFloat(w.replace("%", "")) / 100) * r),
          (e.virtualSize = -w),
          u.forEach((e) => {
            o ? (e.style.marginLeft = "") : (e.style.marginRight = ""),
              (e.style.marginBottom = ""),
              (e.style.marginTop = "");
          }),
          i.centeredSlides &&
            i.cssMode &&
            (L(n, "--swiper-centered-offset-before", ""),
            L(n, "--swiper-centered-offset-after", ""));
        const x = i.grid && i.grid.rows > 1 && e.grid;
        let E;
        x && e.grid.initSlides(p);
        const T =
          "auto" === i.slidesPerView &&
          i.breakpoints &&
          Object.keys(i.breakpoints).filter(
            (e) => void 0 !== i.breakpoints[e].slidesPerView
          ).length > 0;
        for (let n = 0; n < p; n += 1) {
          let a;
          if (
            ((E = 0),
            u[n] && (a = u[n]),
            x && e.grid.updateSlide(n, a, p, t),
            !u[n] || "none" !== I(a, "display"))
          ) {
            if ("auto" === i.slidesPerView) {
              T && (u[n].style[t("width")] = "");
              const r = getComputedStyle(a),
                o = a.style.transform,
                l = a.style.webkitTransform;
              if (
                (o && (a.style.transform = "none"),
                l && (a.style.webkitTransform = "none"),
                i.roundLengths)
              )
                E = e.isHorizontal() ? B(a, "width", !0) : B(a, "height", !0);
              else {
                const e = s(r, "width"),
                  t = s(r, "padding-left"),
                  i = s(r, "padding-right"),
                  n = s(r, "margin-left"),
                  o = s(r, "margin-right"),
                  l = r.getPropertyValue("box-sizing");
                if (l && "border-box" === l) E = e + n + o;
                else {
                  const { clientWidth: s, offsetWidth: r } = a;
                  E = e + t + i + n + o + (r - s);
                }
              }
              o && (a.style.transform = o),
                l && (a.style.webkitTransform = l),
                i.roundLengths && (E = Math.floor(E));
            } else
              (E = (r - (i.slidesPerView - 1) * w) / i.slidesPerView),
                i.roundLengths && (E = Math.floor(E)),
                u[n] && (u[n].style[t("width")] = `${E}px`);
            u[n] && (u[n].swiperSlideSize = E),
              m.push(E),
              i.centeredSlides
                ? ((S = S + E / 2 + _ / 2 + w),
                  0 === _ && 0 !== n && (S = S - r / 2 - w),
                  0 === n && (S = S - r / 2 - w),
                  Math.abs(S) < 0.001 && (S = 0),
                  i.roundLengths && (S = Math.floor(S)),
                  C % i.slidesPerGroup == 0 && h.push(S),
                  f.push(S))
                : (i.roundLengths && (S = Math.floor(S)),
                  (C - Math.min(e.params.slidesPerGroupSkip, C)) %
                    e.params.slidesPerGroup ==
                    0 && h.push(S),
                  f.push(S),
                  (S = S + E + w)),
              (e.virtualSize += E + w),
              (_ = E),
              (C += 1);
          }
        }
        if (
          ((e.virtualSize = Math.max(e.virtualSize, r) + v),
          o &&
            l &&
            ("slide" === i.effect || "coverflow" === i.effect) &&
            (n.style.width = `${e.virtualSize + i.spaceBetween}px`),
          i.setWrapperSize &&
            (n.style[t("width")] = `${e.virtualSize + i.spaceBetween}px`),
          x && e.grid.updateWrapperSize(E, h, t),
          !i.centeredSlides)
        ) {
          const t = [];
          for (let s = 0; s < h.length; s += 1) {
            let n = h[s];
            i.roundLengths && (n = Math.floor(n)),
              h[s] <= e.virtualSize - r && t.push(n);
          }
          (h = t),
            Math.floor(e.virtualSize - r) - Math.floor(h[h.length - 1]) > 1 &&
              h.push(e.virtualSize - r);
        }
        if (d && i.loop) {
          const t = m[0] + w;
          if (i.slidesPerGroup > 1) {
            const s = Math.ceil(
                (e.virtual.slidesBefore + e.virtual.slidesAfter) /
                  i.slidesPerGroup
              ),
              n = t * i.slidesPerGroup;
            for (let e = 0; e < s; e += 1) h.push(h[h.length - 1] + n);
          }
          for (
            let s = 0;
            s < e.virtual.slidesBefore + e.virtual.slidesAfter;
            s += 1
          )
            1 === i.slidesPerGroup && h.push(h[h.length - 1] + t),
              f.push(f[f.length - 1] + t),
              (e.virtualSize += t);
        }
        if ((0 === h.length && (h = [0]), 0 !== i.spaceBetween)) {
          const s = e.isHorizontal() && o ? "marginLeft" : t("marginRight");
          u.filter(
            (e, t) => !(i.cssMode && !i.loop) || t !== u.length - 1
          ).forEach((e) => {
            e.style[s] = `${w}px`;
          });
        }
        if (i.centeredSlides && i.centeredSlidesBounds) {
          let e = 0;
          m.forEach((t) => {
            e += t + (i.spaceBetween ? i.spaceBetween : 0);
          }),
            (e -= i.spaceBetween);
          const t = e - r;
          h = h.map((e) => (e < 0 ? -g : e > t ? t + v : e));
        }
        if (i.centerInsufficientSlides) {
          let e = 0;
          if (
            (m.forEach((t) => {
              e += t + (i.spaceBetween ? i.spaceBetween : 0);
            }),
            (e -= i.spaceBetween),
            e < r)
          ) {
            const t = (r - e) / 2;
            h.forEach((e, s) => {
              h[s] = e - t;
            }),
              f.forEach((e, s) => {
                f[s] = e + t;
              });
          }
        }
        if (
          (Object.assign(e, {
            slides: u,
            snapGrid: h,
            slidesGrid: f,
            slidesSizesGrid: m,
          }),
          i.centeredSlides && i.cssMode && !i.centeredSlidesBounds)
        ) {
          L(n, "--swiper-centered-offset-before", -h[0] + "px"),
            L(
              n,
              "--swiper-centered-offset-after",
              e.size / 2 - m[m.length - 1] / 2 + "px"
            );
          const t = -e.snapGrid[0],
            s = -e.slidesGrid[0];
          (e.snapGrid = e.snapGrid.map((e) => e + t)),
            (e.slidesGrid = e.slidesGrid.map((e) => e + s));
        }
        if (
          (p !== c && e.emit("slidesLengthChange"),
          h.length !== b &&
            (e.params.watchOverflow && e.checkOverflow(),
            e.emit("snapGridLengthChange")),
          f.length !== y && e.emit("slidesGridLengthChange"),
          i.watchSlidesProgress && e.updateSlidesOffset(),
          !(d || i.cssMode || ("slide" !== i.effect && "fade" !== i.effect)))
        ) {
          const t = `${i.containerModifierClass}backface-hidden`,
            s = e.el.classList.contains(t);
          p <= i.maxBackfaceHiddenSlides
            ? s || e.el.classList.add(t)
            : s && e.el.classList.remove(t);
        }
      },
      updateAutoHeight: function (e) {
        const t = this,
          s = [],
          i = t.virtual && t.params.virtual.enabled;
        let n,
          a = 0;
        "number" == typeof e
          ? t.setTransition(e)
          : !0 === e && t.setTransition(t.params.speed);
        const r = (e) =>
          i
            ? t.slides.filter(
                (t) =>
                  parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e
              )[0]
            : t.slides[e];
        if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
          if (t.params.centeredSlides)
            (t.visibleSlides || []).forEach((e) => {
              s.push(e);
            });
          else
            for (n = 0; n < Math.ceil(t.params.slidesPerView); n += 1) {
              const e = t.activeIndex + n;
              if (e > t.slides.length && !i) break;
              s.push(r(e));
            }
        else s.push(r(t.activeIndex));
        for (n = 0; n < s.length; n += 1)
          if (void 0 !== s[n]) {
            const e = s[n].offsetHeight;
            a = e > a ? e : a;
          }
        (a || 0 === a) && (t.wrapperEl.style.height = `${a}px`);
      },
      updateSlidesOffset: function () {
        const e = this,
          t = e.slides,
          s = e.isElement
            ? e.isHorizontal()
              ? e.wrapperEl.offsetLeft
              : e.wrapperEl.offsetTop
            : 0;
        for (let i = 0; i < t.length; i += 1)
          t[i].swiperSlideOffset =
            (e.isHorizontal() ? t[i].offsetLeft : t[i].offsetTop) - s;
      },
      updateSlidesProgress: function (e = (this && this.translate) || 0) {
        const t = this,
          s = t.params,
          { slides: i, rtlTranslate: n, snapGrid: a } = t;
        if (0 === i.length) return;
        void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
        let r = -e;
        n && (r = e),
          i.forEach((e) => {
            e.classList.remove(s.slideVisibleClass);
          }),
          (t.visibleSlidesIndexes = []),
          (t.visibleSlides = []);
        for (let e = 0; e < i.length; e += 1) {
          const o = i[e];
          let l = o.swiperSlideOffset;
          s.cssMode && s.centeredSlides && (l -= i[0].swiperSlideOffset);
          const d =
              (r + (s.centeredSlides ? t.minTranslate() : 0) - l) /
              (o.swiperSlideSize + s.spaceBetween),
            c =
              (r - a[0] + (s.centeredSlides ? t.minTranslate() : 0) - l) /
              (o.swiperSlideSize + s.spaceBetween),
            u = -(r - l),
            p = u + t.slidesSizesGrid[e];
          ((u >= 0 && u < t.size - 1) ||
            (p > 1 && p <= t.size) ||
            (u <= 0 && p >= t.size)) &&
            (t.visibleSlides.push(o),
            t.visibleSlidesIndexes.push(e),
            i[e].classList.add(s.slideVisibleClass)),
            (o.progress = n ? -d : d),
            (o.originalProgress = n ? -c : c);
        }
      },
      updateProgress: function (e) {
        const t = this;
        if (void 0 === e) {
          const s = t.rtlTranslate ? -1 : 1;
          e = (t && t.translate && t.translate * s) || 0;
        }
        const s = t.params,
          i = t.maxTranslate() - t.minTranslate();
        let { progress: n, isBeginning: a, isEnd: r, progressLoop: o } = t;
        const l = a,
          d = r;
        if (0 === i) (n = 0), (a = !0), (r = !0);
        else {
          n = (e - t.minTranslate()) / i;
          const s = Math.abs(e - t.minTranslate()) < 1,
            o = Math.abs(e - t.maxTranslate()) < 1;
          (a = s || n <= 0), (r = o || n >= 1), s && (n = 0), o && (n = 1);
        }
        if (s.loop) {
          const s = t.getSlideIndex(
              t.slides.filter(
                (e) => "0" === e.getAttribute("data-swiper-slide-index")
              )[0]
            ),
            i = t.getSlideIndex(
              t.slides.filter(
                (e) =>
                  1 * e.getAttribute("data-swiper-slide-index") ==
                  t.slides.length - 1
              )[0]
            ),
            n = t.slidesGrid[s],
            a = t.slidesGrid[i],
            r = t.slidesGrid[t.slidesGrid.length - 1],
            l = Math.abs(e);
          (o = l >= n ? (l - n) / r : (l + r - a) / r), o > 1 && (o -= 1);
        }
        Object.assign(t, {
          progress: n,
          progressLoop: o,
          isBeginning: a,
          isEnd: r,
        }),
          (s.watchSlidesProgress || (s.centeredSlides && s.autoHeight)) &&
            t.updateSlidesProgress(e),
          a && !l && t.emit("reachBeginning toEdge"),
          r && !d && t.emit("reachEnd toEdge"),
          ((l && !a) || (d && !r)) && t.emit("fromEdge"),
          t.emit("progress", n);
      },
      updateSlidesClasses: function () {
        const e = this,
          { slides: t, params: s, slidesEl: i, activeIndex: n } = e,
          a = e.virtual && s.virtual.enabled,
          r = (e) => M(i, `.${s.slideClass}${e}, swiper-slide${e}`)[0];
        let o;
        if (
          (t.forEach((e) => {
            e.classList.remove(
              s.slideActiveClass,
              s.slideNextClass,
              s.slidePrevClass
            );
          }),
          a)
        )
          if (s.loop) {
            let t = n - e.virtual.slidesBefore;
            t < 0 && (t = e.virtual.slides.length + t),
              t >= e.virtual.slides.length && (t -= e.virtual.slides.length),
              (o = r(`[data-swiper-slide-index="${t}"]`));
          } else o = r(`[data-swiper-slide-index="${n}"]`);
        else o = t[n];
        if (o) {
          o.classList.add(s.slideActiveClass);
          let e = (function (e, t) {
            const s = [];
            for (; e.nextElementSibling; ) {
              const i = e.nextElementSibling;
              t ? i.matches(t) && s.push(i) : s.push(i), (e = i);
            }
            return s;
          })(o, `.${s.slideClass}, swiper-slide`)[0];
          s.loop && !e && (e = t[0]), e && e.classList.add(s.slideNextClass);
          let i = (function (e, t) {
            const s = [];
            for (; e.previousElementSibling; ) {
              const i = e.previousElementSibling;
              t ? i.matches(t) && s.push(i) : s.push(i), (e = i);
            }
            return s;
          })(o, `.${s.slideClass}, swiper-slide`)[0];
          s.loop && 0 === !i && (i = t[t.length - 1]),
            i && i.classList.add(s.slidePrevClass);
        }
        e.emitSlidesClasses();
      },
      updateActiveIndex: function (e) {
        const t = this,
          s = t.rtlTranslate ? t.translate : -t.translate,
          {
            snapGrid: i,
            params: n,
            activeIndex: a,
            realIndex: r,
            snapIndex: o,
          } = t;
        let l,
          d = e;
        const c = (e) => {
          let s = e - t.virtual.slidesBefore;
          return (
            s < 0 && (s = t.virtual.slides.length + s),
            s >= t.virtual.slides.length && (s -= t.virtual.slides.length),
            s
          );
        };
        if (
          (void 0 === d &&
            (d = (function (e) {
              const { slidesGrid: t, params: s } = e,
                i = e.rtlTranslate ? e.translate : -e.translate;
              let n;
              for (let e = 0; e < t.length; e += 1)
                void 0 !== t[e + 1]
                  ? i >= t[e] && i < t[e + 1] - (t[e + 1] - t[e]) / 2
                    ? (n = e)
                    : i >= t[e] && i < t[e + 1] && (n = e + 1)
                  : i >= t[e] && (n = e);
              return (
                s.normalizeSlideIndex && (n < 0 || void 0 === n) && (n = 0), n
              );
            })(t)),
          i.indexOf(s) >= 0)
        )
          l = i.indexOf(s);
        else {
          const e = Math.min(n.slidesPerGroupSkip, d);
          l = e + Math.floor((d - e) / n.slidesPerGroup);
        }
        if ((l >= i.length && (l = i.length - 1), d === a))
          return (
            l !== o && ((t.snapIndex = l), t.emit("snapIndexChange")),
            void (
              t.params.loop &&
              t.virtual &&
              t.params.virtual.enabled &&
              (t.realIndex = c(d))
            )
          );
        let u;
        (u =
          t.virtual && n.virtual.enabled && n.loop
            ? c(d)
            : t.slides[d]
            ? parseInt(
                t.slides[d].getAttribute("data-swiper-slide-index") || d,
                10
              )
            : d),
          Object.assign(t, {
            snapIndex: l,
            realIndex: u,
            previousIndex: a,
            activeIndex: d,
          }),
          t.emit("activeIndexChange"),
          t.emit("snapIndexChange"),
          r !== u && t.emit("realIndexChange"),
          (t.initialized || t.params.runCallbacksOnInit) &&
            t.emit("slideChange");
      },
      updateClickedSlide: function (e) {
        const t = this,
          s = t.params,
          i = e.closest(`.${s.slideClass}, swiper-slide`);
        let n,
          a = !1;
        if (i)
          for (let e = 0; e < t.slides.length; e += 1)
            if (t.slides[e] === i) {
              (a = !0), (n = e);
              break;
            }
        if (!i || !a)
          return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
        (t.clickedSlide = i),
          t.virtual && t.params.virtual.enabled
            ? (t.clickedIndex = parseInt(
                i.getAttribute("data-swiper-slide-index"),
                10
              ))
            : (t.clickedIndex = n),
          s.slideToClickedSlide &&
            void 0 !== t.clickedIndex &&
            t.clickedIndex !== t.activeIndex &&
            t.slideToClickedSlide();
      },
    };
    const U = {
      getTranslate: function (e = this.isHorizontal() ? "x" : "y") {
        const { params: t, rtlTranslate: s, translate: i, wrapperEl: n } = this;
        if (t.virtualTranslate) return s ? -i : i;
        if (t.cssMode) return i;
        let a = T(n, e);
        return s && (a = -a), a || 0;
      },
      setTranslate: function (e, t) {
        const s = this,
          { rtlTranslate: i, params: n, wrapperEl: a, progress: r } = s;
        let o,
          l = 0,
          d = 0;
        s.isHorizontal() ? (l = i ? -e : e) : (d = e),
          n.roundLengths && ((l = Math.floor(l)), (d = Math.floor(d))),
          n.cssMode
            ? (a[s.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                s.isHorizontal() ? -l : -d)
            : n.virtualTranslate ||
              (a.style.transform = `translate3d(${l}px, ${d}px, 0px)`),
          (s.previousTranslate = s.translate),
          (s.translate = s.isHorizontal() ? l : d);
        const c = s.maxTranslate() - s.minTranslate();
        (o = 0 === c ? 0 : (e - s.minTranslate()) / c),
          o !== r && s.updateProgress(e),
          s.emit("setTranslate", s.translate, t);
      },
      minTranslate: function () {
        return -this.snapGrid[0];
      },
      maxTranslate: function () {
        return -this.snapGrid[this.snapGrid.length - 1];
      },
      translateTo: function (e = 0, t = this.params.speed, s = !0, i = !0, n) {
        const a = this,
          { params: r, wrapperEl: o } = a;
        if (a.animating && r.preventInteractionOnTransition) return !1;
        const l = a.minTranslate(),
          d = a.maxTranslate();
        let c;
        if (
          ((c = i && e > l ? l : i && e < d ? d : e),
          a.updateProgress(c),
          r.cssMode)
        ) {
          const e = a.isHorizontal();
          if (0 === t) o[e ? "scrollLeft" : "scrollTop"] = -c;
          else {
            if (!a.support.smoothScroll)
              return (
                P({ swiper: a, targetPosition: -c, side: e ? "left" : "top" }),
                !0
              );
            o.scrollTo({ [e ? "left" : "top"]: -c, behavior: "smooth" });
          }
          return !0;
        }
        return (
          0 === t
            ? (a.setTransition(0),
              a.setTranslate(c),
              s &&
                (a.emit("beforeTransitionStart", t, n),
                a.emit("transitionEnd")))
            : (a.setTransition(t),
              a.setTranslate(c),
              s &&
                (a.emit("beforeTransitionStart", t, n),
                a.emit("transitionStart")),
              a.animating ||
                ((a.animating = !0),
                a.onTranslateToWrapperTransitionEnd ||
                  (a.onTranslateToWrapperTransitionEnd = function (e) {
                    a &&
                      !a.destroyed &&
                      e.target === this &&
                      (a.wrapperEl.removeEventListener(
                        "transitionend",
                        a.onTranslateToWrapperTransitionEnd
                      ),
                      (a.onTranslateToWrapperTransitionEnd = null),
                      delete a.onTranslateToWrapperTransitionEnd,
                      s && a.emit("transitionEnd"));
                  }),
                a.wrapperEl.addEventListener(
                  "transitionend",
                  a.onTranslateToWrapperTransitionEnd
                ))),
          !0
        );
      },
    };
    function R({ swiper: e, runCallbacks: t, direction: s, step: i }) {
      const { activeIndex: n, previousIndex: a } = e;
      let r = s;
      if (
        (r || (r = n > a ? "next" : n < a ? "prev" : "reset"),
        e.emit(`transition${i}`),
        t && n !== a)
      ) {
        if ("reset" === r) return void e.emit(`slideResetTransition${i}`);
        e.emit(`slideChangeTransition${i}`),
          "next" === r
            ? e.emit(`slideNextTransition${i}`)
            : e.emit(`slidePrevTransition${i}`);
      }
    }
    const W = {
      slideTo: function (e = 0, t = this.params.speed, s = !0, i, n) {
        "string" == typeof e && (e = parseInt(e, 10));
        const a = this;
        let r = e;
        r < 0 && (r = 0);
        const {
          params: o,
          snapGrid: l,
          slidesGrid: d,
          previousIndex: c,
          activeIndex: u,
          rtlTranslate: p,
          wrapperEl: h,
          enabled: f,
        } = a;
        if (
          (a.animating && o.preventInteractionOnTransition) ||
          (!f && !i && !n)
        )
          return !1;
        const m = Math.min(a.params.slidesPerGroupSkip, r);
        let g = m + Math.floor((r - m) / a.params.slidesPerGroup);
        g >= l.length && (g = l.length - 1);
        const v = -l[g];
        if (o.normalizeSlideIndex)
          for (let e = 0; e < d.length; e += 1) {
            const t = -Math.floor(100 * v),
              s = Math.floor(100 * d[e]),
              i = Math.floor(100 * d[e + 1]);
            void 0 !== d[e + 1]
              ? t >= s && t < i - (i - s) / 2
                ? (r = e)
                : t >= s && t < i && (r = e + 1)
              : t >= s && (r = e);
          }
        if (a.initialized && r !== u) {
          if (!a.allowSlideNext && v < a.translate && v < a.minTranslate())
            return !1;
          if (
            !a.allowSlidePrev &&
            v > a.translate &&
            v > a.maxTranslate() &&
            (u || 0) !== r
          )
            return !1;
        }
        let b;
        if (
          (r !== (c || 0) && s && a.emit("beforeSlideChangeStart"),
          a.updateProgress(v),
          (b = r > u ? "next" : r < u ? "prev" : "reset"),
          (p && -v === a.translate) || (!p && v === a.translate))
        )
          return (
            a.updateActiveIndex(r),
            o.autoHeight && a.updateAutoHeight(),
            a.updateSlidesClasses(),
            "slide" !== o.effect && a.setTranslate(v),
            "reset" !== b && (a.transitionStart(s, b), a.transitionEnd(s, b)),
            !1
          );
        if (o.cssMode) {
          const e = a.isHorizontal(),
            s = p ? v : -v;
          if (0 === t) {
            const t = a.virtual && a.params.virtual.enabled;
            t &&
              ((a.wrapperEl.style.scrollSnapType = "none"),
              (a._immediateVirtual = !0)),
              t && !a._cssModeVirtualInitialSet && a.params.initialSlide > 0
                ? ((a._cssModeVirtualInitialSet = !0),
                  requestAnimationFrame(() => {
                    h[e ? "scrollLeft" : "scrollTop"] = s;
                  }))
                : (h[e ? "scrollLeft" : "scrollTop"] = s),
              t &&
                requestAnimationFrame(() => {
                  (a.wrapperEl.style.scrollSnapType = ""),
                    (a._immediateVirtual = !1);
                });
          } else {
            if (!a.support.smoothScroll)
              return (
                P({ swiper: a, targetPosition: s, side: e ? "left" : "top" }),
                !0
              );
            h.scrollTo({ [e ? "left" : "top"]: s, behavior: "smooth" });
          }
          return !0;
        }
        return (
          a.setTransition(t),
          a.setTranslate(v),
          a.updateActiveIndex(r),
          a.updateSlidesClasses(),
          a.emit("beforeTransitionStart", t, i),
          a.transitionStart(s, b),
          0 === t
            ? a.transitionEnd(s, b)
            : a.animating ||
              ((a.animating = !0),
              a.onSlideToWrapperTransitionEnd ||
                (a.onSlideToWrapperTransitionEnd = function (e) {
                  a &&
                    !a.destroyed &&
                    e.target === this &&
                    (a.wrapperEl.removeEventListener(
                      "transitionend",
                      a.onSlideToWrapperTransitionEnd
                    ),
                    (a.onSlideToWrapperTransitionEnd = null),
                    delete a.onSlideToWrapperTransitionEnd,
                    a.transitionEnd(s, b));
                }),
              a.wrapperEl.addEventListener(
                "transitionend",
                a.onSlideToWrapperTransitionEnd
              )),
          !0
        );
      },
      slideToLoop: function (e = 0, t = this.params.speed, s = !0, i) {
        if ("string" == typeof e) {
          e = parseInt(e, 10);
        }
        const n = this;
        let a = e;
        return (
          n.params.loop &&
            (n.virtual && n.params.virtual.enabled
              ? (a += n.virtual.slidesBefore)
              : (a = n.getSlideIndex(
                  n.slides.filter(
                    (e) => 1 * e.getAttribute("data-swiper-slide-index") === a
                  )[0]
                ))),
          n.slideTo(a, t, s, i)
        );
      },
      slideNext: function (e = this.params.speed, t = !0, s) {
        const i = this,
          { enabled: n, params: a, animating: r } = i;
        if (!n) return i;
        let o = a.slidesPerGroup;
        "auto" === a.slidesPerView &&
          1 === a.slidesPerGroup &&
          a.slidesPerGroupAuto &&
          (o = Math.max(i.slidesPerViewDynamic("current", !0), 1));
        const l = i.activeIndex < a.slidesPerGroupSkip ? 1 : o,
          d = i.virtual && a.virtual.enabled;
        if (a.loop) {
          if (r && !d && a.loopPreventsSliding) return !1;
          i.loopFix({ direction: "next" }),
            (i._clientLeft = i.wrapperEl.clientLeft);
        }
        return a.rewind && i.isEnd
          ? i.slideTo(0, e, t, s)
          : i.slideTo(i.activeIndex + l, e, t, s);
      },
      slidePrev: function (e = this.params.speed, t = !0, s) {
        const i = this,
          {
            params: n,
            snapGrid: a,
            slidesGrid: r,
            rtlTranslate: o,
            enabled: l,
            animating: d,
          } = i;
        if (!l) return i;
        const c = i.virtual && n.virtual.enabled;
        if (n.loop) {
          if (d && !c && n.loopPreventsSliding) return !1;
          i.loopFix({ direction: "prev" }),
            (i._clientLeft = i.wrapperEl.clientLeft);
        }
        function u(e) {
          return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
        }
        const p = u(o ? i.translate : -i.translate),
          h = a.map((e) => u(e));
        let f = a[h.indexOf(p) - 1];
        if (void 0 === f && n.cssMode) {
          let e;
          a.forEach((t, s) => {
            p >= t && (e = s);
          }),
            void 0 !== e && (f = a[e > 0 ? e - 1 : e]);
        }
        let m = 0;
        if (
          (void 0 !== f &&
            ((m = r.indexOf(f)),
            m < 0 && (m = i.activeIndex - 1),
            "auto" === n.slidesPerView &&
              1 === n.slidesPerGroup &&
              n.slidesPerGroupAuto &&
              ((m = m - i.slidesPerViewDynamic("previous", !0) + 1),
              (m = Math.max(m, 0)))),
          n.rewind && i.isBeginning)
        ) {
          const n =
            i.params.virtual && i.params.virtual.enabled && i.virtual
              ? i.virtual.slides.length - 1
              : i.slides.length - 1;
          return i.slideTo(n, e, t, s);
        }
        return i.slideTo(m, e, t, s);
      },
      slideReset: function (e = this.params.speed, t = !0, s) {
        return this.slideTo(this.activeIndex, e, t, s);
      },
      slideToClosest: function (e = this.params.speed, t = !0, s, i = 0.5) {
        const n = this;
        let a = n.activeIndex;
        const r = Math.min(n.params.slidesPerGroupSkip, a),
          o = r + Math.floor((a - r) / n.params.slidesPerGroup),
          l = n.rtlTranslate ? n.translate : -n.translate;
        if (l >= n.snapGrid[o]) {
          const e = n.snapGrid[o];
          l - e > (n.snapGrid[o + 1] - e) * i && (a += n.params.slidesPerGroup);
        } else {
          const e = n.snapGrid[o - 1];
          l - e <= (n.snapGrid[o] - e) * i && (a -= n.params.slidesPerGroup);
        }
        return (
          (a = Math.max(a, 0)),
          (a = Math.min(a, n.slidesGrid.length - 1)),
          n.slideTo(a, e, t, s)
        );
      },
      slideToClickedSlide: function () {
        const e = this,
          { params: t, slidesEl: s } = e,
          i =
            "auto" === t.slidesPerView
              ? e.slidesPerViewDynamic()
              : t.slidesPerView;
        let n,
          a = e.clickedIndex;
        const r = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
        if (t.loop) {
          if (e.animating) return;
          (n = parseInt(
            e.clickedSlide.getAttribute("data-swiper-slide-index"),
            10
          )),
            t.centeredSlides
              ? a < e.loopedSlides - i / 2 ||
                a > e.slides.length - e.loopedSlides + i / 2
                ? (e.loopFix(),
                  (a = e.getSlideIndex(
                    M(s, `${r}[data-swiper-slide-index="${n}"]`)[0]
                  )),
                  x(() => {
                    e.slideTo(a);
                  }))
                : e.slideTo(a)
              : a > e.slides.length - i
              ? (e.loopFix(),
                (a = e.getSlideIndex(
                  M(s, `${r}[data-swiper-slide-index="${n}"]`)[0]
                )),
                x(() => {
                  e.slideTo(a);
                }))
              : e.slideTo(a);
        } else e.slideTo(a);
      },
    };
    const Y = {
      loopCreate: function (e) {
        const t = this,
          { params: s, slidesEl: i } = t;
        if (!s.loop || (t.virtual && t.params.virtual.enabled)) return;
        M(i, `.${s.slideClass}, swiper-slide`).forEach((e, t) => {
          e.setAttribute("data-swiper-slide-index", t);
        }),
          t.loopFix({
            slideRealIndex: e,
            direction: s.centeredSlides ? void 0 : "next",
          });
      },
      loopFix: function ({
        slideRealIndex: e,
        slideTo: t = !0,
        direction: s,
        setTranslate: i,
        activeSlideIndex: n,
        byController: a,
        byMousewheel: r,
      } = {}) {
        const o = this;
        if (!o.params.loop) return;
        o.emit("beforeLoopFix");
        const {
          slides: l,
          allowSlidePrev: d,
          allowSlideNext: c,
          slidesEl: u,
          params: p,
        } = o;
        if (
          ((o.allowSlidePrev = !0),
          (o.allowSlideNext = !0),
          o.virtual && p.virtual.enabled)
        )
          return (
            t &&
              (p.centeredSlides || 0 !== o.snapIndex
                ? p.centeredSlides && o.snapIndex < p.slidesPerView
                  ? o.slideTo(o.virtual.slides.length + o.snapIndex, 0, !1, !0)
                  : o.snapIndex === o.snapGrid.length - 1 &&
                    o.slideTo(o.virtual.slidesBefore, 0, !1, !0)
                : o.slideTo(o.virtual.slides.length, 0, !1, !0)),
            (o.allowSlidePrev = d),
            (o.allowSlideNext = c),
            void o.emit("loopFix")
          );
        const h =
          "auto" === p.slidesPerView
            ? o.slidesPerViewDynamic()
            : Math.ceil(parseFloat(p.slidesPerView, 10));
        let f = p.loopedSlides || h;
        f % p.slidesPerGroup != 0 &&
          (f += p.slidesPerGroup - (f % p.slidesPerGroup)),
          (o.loopedSlides = f);
        const m = [],
          g = [];
        let v = o.activeIndex;
        void 0 === n
          ? (n = o.getSlideIndex(
              o.slides.filter((e) =>
                e.classList.contains("swiper-slide-active")
              )[0]
            ))
          : (v = n);
        const b = "next" === s || !s,
          y = "prev" === s || !s;
        let w = 0,
          S = 0;
        if (n < f) {
          w = Math.max(f - n, p.slidesPerGroup);
          for (let e = 0; e < f - n; e += 1) {
            const t = e - Math.floor(e / l.length) * l.length;
            m.push(l.length - t - 1);
          }
        } else if (n > o.slides.length - 2 * f) {
          S = Math.max(n - (o.slides.length - 2 * f), p.slidesPerGroup);
          for (let e = 0; e < S; e += 1) {
            const t = e - Math.floor(e / l.length) * l.length;
            g.push(t);
          }
        }
        if (
          (y &&
            m.forEach((e) => {
              u.prepend(o.slides[e]);
            }),
          b &&
            g.forEach((e) => {
              u.append(o.slides[e]);
            }),
          o.recalcSlides(),
          p.watchSlidesProgress && o.updateSlidesOffset(),
          t)
        )
          if (m.length > 0 && y)
            if (void 0 === e) {
              const e = o.slidesGrid[v],
                t = o.slidesGrid[v + w] - e;
              r
                ? o.setTranslate(o.translate - t)
                : (o.slideTo(v + w, 0, !1, !0),
                  i &&
                    (o.touches[o.isHorizontal() ? "startX" : "startY"] += t));
            } else i && o.slideToLoop(e, 0, !1, !0);
          else if (g.length > 0 && b)
            if (void 0 === e) {
              const e = o.slidesGrid[v],
                t = o.slidesGrid[v - S] - e;
              r
                ? o.setTranslate(o.translate - t)
                : (o.slideTo(v - S, 0, !1, !0),
                  i &&
                    (o.touches[o.isHorizontal() ? "startX" : "startY"] += t));
            } else o.slideToLoop(e, 0, !1, !0);
        if (
          ((o.allowSlidePrev = d),
          (o.allowSlideNext = c),
          o.controller && o.controller.control && !a)
        ) {
          const t = {
            slideRealIndex: e,
            slideTo: !1,
            direction: s,
            setTranslate: i,
            activeSlideIndex: n,
            byController: !0,
          };
          Array.isArray(o.controller.control)
            ? o.controller.control.forEach((e) => {
                e.params.loop && e.loopFix(t);
              })
            : o.controller.control instanceof o.constructor &&
              o.controller.control.params.loop &&
              o.controller.control.loopFix(t);
        }
        o.emit("loopFix");
      },
      loopDestroy: function () {
        const e = this,
          { slides: t, params: s, slidesEl: i } = e;
        if (!s.loop || (e.virtual && e.params.virtual.enabled)) return;
        e.recalcSlides();
        const n = [];
        t.forEach((e) => {
          const t =
            void 0 === e.swiperSlideIndex
              ? 1 * e.getAttribute("data-swiper-slide-index")
              : e.swiperSlideIndex;
          n[t] = e;
        }),
          t.forEach((e) => {
            e.removeAttribute("data-swiper-slide-index");
          }),
          n.forEach((e) => {
            i.append(e);
          }),
          e.recalcSlides(),
          e.slideTo(e.realIndex, 0);
      },
    };
    function X(e) {
      const t = this,
        s = S(),
        i = C(),
        n = t.touchEventsData;
      n.evCache.push(e);
      const { params: a, touches: r, enabled: o } = t;
      if (!o) return;
      if (!a.simulateTouch && "mouse" === e.pointerType) return;
      if (t.animating && a.preventInteractionOnTransition) return;
      !t.animating && a.cssMode && a.loop && t.loopFix();
      let l = e;
      l.originalEvent && (l = l.originalEvent);
      let d = l.target;
      if ("wrapper" === a.touchEventsTarget && !t.wrapperEl.contains(d)) return;
      if ("which" in l && 3 === l.which) return;
      if ("button" in l && l.button > 0) return;
      if (n.isTouched && n.isMoved) return;
      const c = !!a.noSwipingClass && "" !== a.noSwipingClass,
        u = e.composedPath ? e.composedPath() : e.path;
      c && l.target && l.target.shadowRoot && u && (d = u[0]);
      const p = a.noSwipingSelector
          ? a.noSwipingSelector
          : `.${a.noSwipingClass}`,
        h = !(!l.target || !l.target.shadowRoot);
      if (
        a.noSwiping &&
        (h
          ? (function (e, t = this) {
              return (function t(s) {
                if (!s || s === S() || s === C()) return null;
                s.assignedSlot && (s = s.assignedSlot);
                const i = s.closest(e);
                return i || s.getRootNode ? i || t(s.getRootNode().host) : null;
              })(t);
            })(p, d)
          : d.closest(p))
      )
        return void (t.allowClick = !0);
      if (a.swipeHandler && !d.closest(a.swipeHandler)) return;
      (r.currentX = l.pageX), (r.currentY = l.pageY);
      const f = r.currentX,
        m = r.currentY,
        g = a.edgeSwipeDetection || a.iOSEdgeSwipeDetection,
        v = a.edgeSwipeThreshold || a.iOSEdgeSwipeThreshold;
      if (g && (f <= v || f >= i.innerWidth - v)) {
        if ("prevent" !== g) return;
        e.preventDefault();
      }
      Object.assign(n, {
        isTouched: !0,
        isMoved: !1,
        allowTouchCallbacks: !0,
        isScrolling: void 0,
        startMoving: void 0,
      }),
        (r.startX = f),
        (r.startY = m),
        (n.touchStartTime = E()),
        (t.allowClick = !0),
        t.updateSize(),
        (t.swipeDirection = void 0),
        a.threshold > 0 && (n.allowThresholdMove = !1);
      let b = !0;
      d.matches(n.focusableElements) &&
        ((b = !1), "SELECT" === d.nodeName && (n.isTouched = !1)),
        s.activeElement &&
          s.activeElement.matches(n.focusableElements) &&
          s.activeElement !== d &&
          s.activeElement.blur();
      const y = b && t.allowTouchMove && a.touchStartPreventDefault;
      (!a.touchStartForcePreventDefault && !y) ||
        d.isContentEditable ||
        l.preventDefault(),
        t.params.freeMode &&
          t.params.freeMode.enabled &&
          t.freeMode &&
          t.animating &&
          !a.cssMode &&
          t.freeMode.onTouchStart(),
        t.emit("touchStart", l);
    }
    function K(e) {
      const t = S(),
        s = this,
        i = s.touchEventsData,
        { params: n, touches: a, rtlTranslate: r, enabled: o } = s;
      if (!o) return;
      if (!n.simulateTouch && "mouse" === e.pointerType) return;
      let l = e;
      if ((l.originalEvent && (l = l.originalEvent), !i.isTouched))
        return void (
          i.startMoving &&
          i.isScrolling &&
          s.emit("touchMoveOpposite", l)
        );
      const d = i.evCache.findIndex((e) => e.pointerId === l.pointerId);
      d >= 0 && (i.evCache[d] = l);
      const c = i.evCache.length > 1 ? i.evCache[0] : l,
        u = c.pageX,
        p = c.pageY;
      if (l.preventedByNestedSwiper) return (a.startX = u), void (a.startY = p);
      if (!s.allowTouchMove)
        return (
          l.target.matches(i.focusableElements) || (s.allowClick = !1),
          void (
            i.isTouched &&
            (Object.assign(a, {
              startX: u,
              startY: p,
              prevX: s.touches.currentX,
              prevY: s.touches.currentY,
              currentX: u,
              currentY: p,
            }),
            (i.touchStartTime = E()))
          )
        );
      if (n.touchReleaseOnEdges && !n.loop)
        if (s.isVertical()) {
          if (
            (p < a.startY && s.translate <= s.maxTranslate()) ||
            (p > a.startY && s.translate >= s.minTranslate())
          )
            return (i.isTouched = !1), void (i.isMoved = !1);
        } else if (
          (u < a.startX && s.translate <= s.maxTranslate()) ||
          (u > a.startX && s.translate >= s.minTranslate())
        )
          return;
      if (
        t.activeElement &&
        l.target === t.activeElement &&
        l.target.matches(i.focusableElements)
      )
        return (i.isMoved = !0), void (s.allowClick = !1);
      if (
        (i.allowTouchCallbacks && s.emit("touchMove", l),
        l.targetTouches && l.targetTouches.length > 1)
      )
        return;
      (a.currentX = u), (a.currentY = p);
      const h = a.currentX - a.startX,
        f = a.currentY - a.startY;
      if (s.params.threshold && Math.sqrt(h ** 2 + f ** 2) < s.params.threshold)
        return;
      if (void 0 === i.isScrolling) {
        let e;
        (s.isHorizontal() && a.currentY === a.startY) ||
        (s.isVertical() && a.currentX === a.startX)
          ? (i.isScrolling = !1)
          : h * h + f * f >= 25 &&
            ((e = (180 * Math.atan2(Math.abs(f), Math.abs(h))) / Math.PI),
            (i.isScrolling = s.isHorizontal()
              ? e > n.touchAngle
              : 90 - e > n.touchAngle));
      }
      if (
        (i.isScrolling && s.emit("touchMoveOpposite", l),
        void 0 === i.startMoving &&
          ((a.currentX === a.startX && a.currentY === a.startY) ||
            (i.startMoving = !0)),
        i.isScrolling ||
          (s.zoom &&
            s.params.zoom &&
            s.params.zoom.enabled &&
            i.evCache.length > 1))
      )
        return void (i.isTouched = !1);
      if (!i.startMoving) return;
      (s.allowClick = !1),
        !n.cssMode && l.cancelable && l.preventDefault(),
        n.touchMoveStopPropagation && !n.nested && l.stopPropagation();
      let m = s.isHorizontal() ? h : f,
        g = s.isHorizontal()
          ? a.currentX - a.previousX
          : a.currentY - a.previousY;
      n.oneWayMovement &&
        ((m = Math.abs(m) * (r ? 1 : -1)), (g = Math.abs(g) * (r ? 1 : -1))),
        (a.diff = m),
        (m *= n.touchRatio),
        r && ((m = -m), (g = -g));
      const v = s.touchesDirection;
      (s.swipeDirection = m > 0 ? "prev" : "next"),
        (s.touchesDirection = g > 0 ? "prev" : "next");
      const b = s.params.loop && !n.cssMode;
      if (!i.isMoved) {
        if (
          (b && s.loopFix({ direction: s.swipeDirection }),
          (i.startTranslate = s.getTranslate()),
          s.setTransition(0),
          s.animating)
        ) {
          const e = new window.CustomEvent("transitionend", {
            bubbles: !0,
            cancelable: !0,
          });
          s.wrapperEl.dispatchEvent(e);
        }
        (i.allowMomentumBounce = !1),
          !n.grabCursor ||
            (!0 !== s.allowSlideNext && !0 !== s.allowSlidePrev) ||
            s.setGrabCursor(!0),
          s.emit("sliderFirstMove", l);
      }
      let y;
      i.isMoved &&
        v !== s.touchesDirection &&
        b &&
        Math.abs(m) >= 1 &&
        (s.loopFix({ direction: s.swipeDirection, setTranslate: !0 }),
        (y = !0)),
        s.emit("sliderMove", l),
        (i.isMoved = !0),
        (i.currentTranslate = m + i.startTranslate);
      let w = !0,
        _ = n.resistanceRatio;
      if (
        (n.touchReleaseOnEdges && (_ = 0),
        m > 0
          ? (b &&
              !y &&
              i.currentTranslate >
                (n.centeredSlides
                  ? s.minTranslate() - s.size / 2
                  : s.minTranslate()) &&
              s.loopFix({
                direction: "prev",
                setTranslate: !0,
                activeSlideIndex: 0,
              }),
            i.currentTranslate > s.minTranslate() &&
              ((w = !1),
              n.resistance &&
                (i.currentTranslate =
                  s.minTranslate() -
                  1 +
                  (-s.minTranslate() + i.startTranslate + m) ** _)))
          : m < 0 &&
            (b &&
              !y &&
              i.currentTranslate <
                (n.centeredSlides
                  ? s.maxTranslate() + s.size / 2
                  : s.maxTranslate()) &&
              s.loopFix({
                direction: "next",
                setTranslate: !0,
                activeSlideIndex:
                  s.slides.length -
                  ("auto" === n.slidesPerView
                    ? s.slidesPerViewDynamic()
                    : Math.ceil(parseFloat(n.slidesPerView, 10))),
              }),
            i.currentTranslate < s.maxTranslate() &&
              ((w = !1),
              n.resistance &&
                (i.currentTranslate =
                  s.maxTranslate() +
                  1 -
                  (s.maxTranslate() - i.startTranslate - m) ** _))),
        w && (l.preventedByNestedSwiper = !0),
        !s.allowSlideNext &&
          "next" === s.swipeDirection &&
          i.currentTranslate < i.startTranslate &&
          (i.currentTranslate = i.startTranslate),
        !s.allowSlidePrev &&
          "prev" === s.swipeDirection &&
          i.currentTranslate > i.startTranslate &&
          (i.currentTranslate = i.startTranslate),
        s.allowSlidePrev ||
          s.allowSlideNext ||
          (i.currentTranslate = i.startTranslate),
        n.threshold > 0)
      ) {
        if (!(Math.abs(m) > n.threshold || i.allowThresholdMove))
          return void (i.currentTranslate = i.startTranslate);
        if (!i.allowThresholdMove)
          return (
            (i.allowThresholdMove = !0),
            (a.startX = a.currentX),
            (a.startY = a.currentY),
            (i.currentTranslate = i.startTranslate),
            void (a.diff = s.isHorizontal()
              ? a.currentX - a.startX
              : a.currentY - a.startY)
          );
      }
      n.followFinger &&
        !n.cssMode &&
        (((n.freeMode && n.freeMode.enabled && s.freeMode) ||
          n.watchSlidesProgress) &&
          (s.updateActiveIndex(), s.updateSlidesClasses()),
        s.params.freeMode &&
          n.freeMode.enabled &&
          s.freeMode &&
          s.freeMode.onTouchMove(),
        s.updateProgress(i.currentTranslate),
        s.setTranslate(i.currentTranslate));
    }
    function Z(e) {
      const t = this,
        s = t.touchEventsData,
        i = s.evCache.findIndex((t) => t.pointerId === e.pointerId);
      if (
        (i >= 0 && s.evCache.splice(i, 1),
        ["pointercancel", "pointerout", "pointerleave"].includes(e.type))
      ) {
        if (
          !(
            "pointercancel" === e.type &&
            (t.browser.isSafari || t.browser.isWebView)
          )
        )
          return;
      }
      const {
        params: n,
        touches: a,
        rtlTranslate: r,
        slidesGrid: o,
        enabled: l,
      } = t;
      if (!l) return;
      if (!n.simulateTouch && "mouse" === e.pointerType) return;
      let d = e;
      if (
        (d.originalEvent && (d = d.originalEvent),
        s.allowTouchCallbacks && t.emit("touchEnd", d),
        (s.allowTouchCallbacks = !1),
        !s.isTouched)
      )
        return (
          s.isMoved && n.grabCursor && t.setGrabCursor(!1),
          (s.isMoved = !1),
          void (s.startMoving = !1)
        );
      n.grabCursor &&
        s.isMoved &&
        s.isTouched &&
        (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
        t.setGrabCursor(!1);
      const c = E(),
        u = c - s.touchStartTime;
      if (t.allowClick) {
        const e = d.path || (d.composedPath && d.composedPath());
        t.updateClickedSlide((e && e[0]) || d.target),
          t.emit("tap click", d),
          u < 300 &&
            c - s.lastClickTime < 300 &&
            t.emit("doubleTap doubleClick", d);
      }
      if (
        ((s.lastClickTime = E()),
        x(() => {
          t.destroyed || (t.allowClick = !0);
        }),
        !s.isTouched ||
          !s.isMoved ||
          !t.swipeDirection ||
          0 === a.diff ||
          s.currentTranslate === s.startTranslate)
      )
        return (s.isTouched = !1), (s.isMoved = !1), void (s.startMoving = !1);
      let p;
      if (
        ((s.isTouched = !1),
        (s.isMoved = !1),
        (s.startMoving = !1),
        (p = n.followFinger
          ? r
            ? t.translate
            : -t.translate
          : -s.currentTranslate),
        n.cssMode)
      )
        return;
      if (t.params.freeMode && n.freeMode.enabled)
        return void t.freeMode.onTouchEnd({ currentPos: p });
      let h = 0,
        f = t.slidesSizesGrid[0];
      for (
        let e = 0;
        e < o.length;
        e += e < n.slidesPerGroupSkip ? 1 : n.slidesPerGroup
      ) {
        const t = e < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
        void 0 !== o[e + t]
          ? p >= o[e] && p < o[e + t] && ((h = e), (f = o[e + t] - o[e]))
          : p >= o[e] && ((h = e), (f = o[o.length - 1] - o[o.length - 2]));
      }
      let m = null,
        g = null;
      n.rewind &&
        (t.isBeginning
          ? (g =
              t.params.virtual && t.params.virtual.enabled && t.virtual
                ? t.virtual.slides.length - 1
                : t.slides.length - 1)
          : t.isEnd && (m = 0));
      const v = (p - o[h]) / f,
        b = h < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
      if (u > n.longSwipesMs) {
        if (!n.longSwipes) return void t.slideTo(t.activeIndex);
        "next" === t.swipeDirection &&
          (v >= n.longSwipesRatio
            ? t.slideTo(n.rewind && t.isEnd ? m : h + b)
            : t.slideTo(h)),
          "prev" === t.swipeDirection &&
            (v > 1 - n.longSwipesRatio
              ? t.slideTo(h + b)
              : null !== g && v < 0 && Math.abs(v) > n.longSwipesRatio
              ? t.slideTo(g)
              : t.slideTo(h));
      } else {
        if (!n.shortSwipes) return void t.slideTo(t.activeIndex);
        t.navigation &&
        (d.target === t.navigation.nextEl || d.target === t.navigation.prevEl)
          ? d.target === t.navigation.nextEl
            ? t.slideTo(h + b)
            : t.slideTo(h)
          : ("next" === t.swipeDirection && t.slideTo(null !== m ? m : h + b),
            "prev" === t.swipeDirection && t.slideTo(null !== g ? g : h));
      }
    }
    let Q;
    function J() {
      const e = this,
        { params: t, el: s } = e;
      if (s && 0 === s.offsetWidth) return;
      t.breakpoints && e.setBreakpoint();
      const { allowSlideNext: i, allowSlidePrev: n, snapGrid: a } = e,
        r = e.virtual && e.params.virtual.enabled;
      (e.allowSlideNext = !0),
        (e.allowSlidePrev = !0),
        e.updateSize(),
        e.updateSlides(),
        e.updateSlidesClasses();
      const o = r && t.loop;
      !("auto" === t.slidesPerView || t.slidesPerView > 1) ||
      !e.isEnd ||
      e.isBeginning ||
      e.params.centeredSlides ||
      o
        ? e.params.loop && !r
          ? e.slideToLoop(e.realIndex, 0, !1, !0)
          : e.slideTo(e.activeIndex, 0, !1, !0)
        : e.slideTo(e.slides.length - 1, 0, !1, !0),
        e.autoplay &&
          e.autoplay.running &&
          e.autoplay.paused &&
          (clearTimeout(Q),
          (Q = setTimeout(() => {
            e.autoplay &&
              e.autoplay.running &&
              e.autoplay.paused &&
              e.autoplay.resume();
          }, 500))),
        (e.allowSlidePrev = n),
        (e.allowSlideNext = i),
        e.params.watchOverflow && a !== e.snapGrid && e.checkOverflow();
    }
    function ee(e) {
      const t = this;
      t.enabled &&
        (t.allowClick ||
          (t.params.preventClicks && e.preventDefault(),
          t.params.preventClicksPropagation &&
            t.animating &&
            (e.stopPropagation(), e.stopImmediatePropagation())));
    }
    function te() {
      const e = this,
        { wrapperEl: t, rtlTranslate: s, enabled: i } = e;
      if (!i) return;
      let n;
      (e.previousTranslate = e.translate),
        e.isHorizontal()
          ? (e.translate = -t.scrollLeft)
          : (e.translate = -t.scrollTop),
        0 === e.translate && (e.translate = 0),
        e.updateActiveIndex(),
        e.updateSlidesClasses();
      const a = e.maxTranslate() - e.minTranslate();
      (n = 0 === a ? 0 : (e.translate - e.minTranslate()) / a),
        n !== e.progress && e.updateProgress(s ? -e.translate : e.translate),
        e.emit("setTranslate", e.translate, !1);
    }
    const se = (e, t) => {
      if (!e || e.destroyed || !e.params) return;
      const s = t.closest(
        e.isElement ? "swiper-slide" : `.${e.params.slideClass}`
      );
      if (s) {
        const t = s.querySelector(`.${e.params.lazyPreloaderClass}`);
        t && t.remove();
      }
    };
    function ie(e) {
      se(this, e.target), this.update();
    }
    let ne = !1;
    function ae() {}
    const re = (e, t) => {
      const s = S(),
        { params: i, el: n, wrapperEl: a, device: r } = e,
        o = !!i.nested,
        l = "on" === t ? "addEventListener" : "removeEventListener",
        d = t;
      n[l]("pointerdown", e.onTouchStart, { passive: !1 }),
        s[l]("pointermove", e.onTouchMove, { passive: !1, capture: o }),
        s[l]("pointerup", e.onTouchEnd, { passive: !0 }),
        s[l]("pointercancel", e.onTouchEnd, { passive: !0 }),
        s[l]("pointerout", e.onTouchEnd, { passive: !0 }),
        s[l]("pointerleave", e.onTouchEnd, { passive: !0 }),
        (i.preventClicks || i.preventClicksPropagation) &&
          n[l]("click", e.onClick, !0),
        i.cssMode && a[l]("scroll", e.onScroll),
        i.updateOnWindowResize
          ? e[d](
              r.ios || r.android
                ? "resize orientationchange observerUpdate"
                : "resize observerUpdate",
              J,
              !0
            )
          : e[d]("observerUpdate", J, !0),
        n[l]("load", e.onLoad, { capture: !0 });
    };
    const oe = (e, t) => e.grid && t.grid && t.grid.rows > 1;
    const le = {
      init: !0,
      direction: "horizontal",
      oneWayMovement: !1,
      touchEventsTarget: "wrapper",
      initialSlide: 0,
      speed: 300,
      cssMode: !1,
      updateOnWindowResize: !0,
      resizeObserver: !0,
      nested: !1,
      createElements: !1,
      enabled: !0,
      focusableElements:
        "input, select, option, textarea, button, video, label",
      width: null,
      height: null,
      preventInteractionOnTransition: !1,
      userAgent: null,
      url: null,
      edgeSwipeDetection: !1,
      edgeSwipeThreshold: 20,
      autoHeight: !1,
      setWrapperSize: !1,
      virtualTranslate: !1,
      effect: "slide",
      breakpoints: void 0,
      breakpointsBase: "window",
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerGroup: 1,
      slidesPerGroupSkip: 0,
      slidesPerGroupAuto: !1,
      centeredSlides: !1,
      centeredSlidesBounds: !1,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      normalizeSlideIndex: !0,
      centerInsufficientSlides: !1,
      watchOverflow: !0,
      roundLengths: !1,
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: !0,
      shortSwipes: !0,
      longSwipes: !0,
      longSwipesRatio: 0.5,
      longSwipesMs: 300,
      followFinger: !0,
      allowTouchMove: !0,
      threshold: 5,
      touchMoveStopPropagation: !1,
      touchStartPreventDefault: !0,
      touchStartForcePreventDefault: !1,
      touchReleaseOnEdges: !1,
      uniqueNavElements: !0,
      resistance: !0,
      resistanceRatio: 0.85,
      watchSlidesProgress: !1,
      grabCursor: !1,
      preventClicks: !0,
      preventClicksPropagation: !0,
      slideToClickedSlide: !1,
      loop: !1,
      loopedSlides: null,
      loopPreventsSliding: !0,
      rewind: !1,
      allowSlidePrev: !0,
      allowSlideNext: !0,
      swipeHandler: null,
      noSwiping: !0,
      noSwipingClass: "swiper-no-swiping",
      noSwipingSelector: null,
      passiveListeners: !0,
      maxBackfaceHiddenSlides: 10,
      containerModifierClass: "swiper-",
      slideClass: "swiper-slide",
      slideActiveClass: "swiper-slide-active",
      slideVisibleClass: "swiper-slide-visible",
      slideNextClass: "swiper-slide-next",
      slidePrevClass: "swiper-slide-prev",
      wrapperClass: "swiper-wrapper",
      lazyPreloaderClass: "swiper-lazy-preloader",
      runCallbacksOnInit: !0,
      _emitClasses: !1,
    };
    function de(e, t) {
      return function (s = {}) {
        const i = Object.keys(s)[0],
          n = s[i];
        "object" == typeof n && null !== n
          ? (["navigation", "pagination", "scrollbar"].indexOf(i) >= 0 &&
              !0 === e[i] &&
              (e[i] = { auto: !0 }),
            i in e && "enabled" in n
              ? (!0 === e[i] && (e[i] = { enabled: !0 }),
                "object" != typeof e[i] ||
                  "enabled" in e[i] ||
                  (e[i].enabled = !0),
                e[i] || (e[i] = { enabled: !1 }),
                A(t, s))
              : A(t, s))
          : A(t, s);
      };
    }
    const ce = {
        eventsEmitter: G,
        update: F,
        translate: U,
        transition: {
          setTransition: function (e, t) {
            const s = this;
            s.params.cssMode ||
              (s.wrapperEl.style.transitionDuration = `${e}ms`),
              s.emit("setTransition", e, t);
          },
          transitionStart: function (e = !0, t) {
            const s = this,
              { params: i } = s;
            i.cssMode ||
              (i.autoHeight && s.updateAutoHeight(),
              R({ swiper: s, runCallbacks: e, direction: t, step: "Start" }));
          },
          transitionEnd: function (e = !0, t) {
            const s = this,
              { params: i } = s;
            (s.animating = !1),
              i.cssMode ||
                (s.setTransition(0),
                R({ swiper: s, runCallbacks: e, direction: t, step: "End" }));
          },
        },
        slide: W,
        loop: Y,
        grabCursor: {
          setGrabCursor: function (e) {
            const t = this;
            if (
              !t.params.simulateTouch ||
              (t.params.watchOverflow && t.isLocked) ||
              t.params.cssMode
            )
              return;
            const s =
              "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
            t.isElement && (t.__preventObserver__ = !0),
              (s.style.cursor = "move"),
              (s.style.cursor = e ? "grabbing" : "grab"),
              t.isElement &&
                requestAnimationFrame(() => {
                  t.__preventObserver__ = !1;
                });
          },
          unsetGrabCursor: function () {
            const e = this;
            (e.params.watchOverflow && e.isLocked) ||
              e.params.cssMode ||
              (e.isElement && (e.__preventObserver__ = !0),
              (e[
                "container" === e.params.touchEventsTarget ? "el" : "wrapperEl"
              ].style.cursor = ""),
              e.isElement &&
                requestAnimationFrame(() => {
                  e.__preventObserver__ = !1;
                }));
          },
        },
        events: {
          attachEvents: function () {
            const e = this,
              t = S(),
              { params: s } = e;
            (e.onTouchStart = X.bind(e)),
              (e.onTouchMove = K.bind(e)),
              (e.onTouchEnd = Z.bind(e)),
              s.cssMode && (e.onScroll = te.bind(e)),
              (e.onClick = ee.bind(e)),
              (e.onLoad = ie.bind(e)),
              ne || (t.addEventListener("touchstart", ae), (ne = !0)),
              re(e, "on");
          },
          detachEvents: function () {
            re(this, "off");
          },
        },
        breakpoints: {
          setBreakpoint: function () {
            const e = this,
              { realIndex: t, initialized: s, params: i, el: n } = e,
              a = i.breakpoints;
            if (!a || (a && 0 === Object.keys(a).length)) return;
            const r = e.getBreakpoint(a, e.params.breakpointsBase, e.el);
            if (!r || e.currentBreakpoint === r) return;
            const o = (r in a ? a[r] : void 0) || e.originalParams,
              l = oe(e, i),
              d = oe(e, o),
              c = i.enabled;
            l && !d
              ? (n.classList.remove(
                  `${i.containerModifierClass}grid`,
                  `${i.containerModifierClass}grid-column`
                ),
                e.emitContainerClasses())
              : !l &&
                d &&
                (n.classList.add(`${i.containerModifierClass}grid`),
                ((o.grid.fill && "column" === o.grid.fill) ||
                  (!o.grid.fill && "column" === i.grid.fill)) &&
                  n.classList.add(`${i.containerModifierClass}grid-column`),
                e.emitContainerClasses()),
              ["navigation", "pagination", "scrollbar"].forEach((t) => {
                const s = i[t] && i[t].enabled,
                  n = o[t] && o[t].enabled;
                s && !n && e[t].disable(), !s && n && e[t].enable();
              });
            const u = o.direction && o.direction !== i.direction,
              p = i.loop && (o.slidesPerView !== i.slidesPerView || u);
            u && s && e.changeDirection(), A(e.params, o);
            const h = e.params.enabled;
            Object.assign(e, {
              allowTouchMove: e.params.allowTouchMove,
              allowSlideNext: e.params.allowSlideNext,
              allowSlidePrev: e.params.allowSlidePrev,
            }),
              c && !h ? e.disable() : !c && h && e.enable(),
              (e.currentBreakpoint = r),
              e.emit("_beforeBreakpoint", o),
              p && s && (e.loopDestroy(), e.loopCreate(t), e.updateSlides()),
              e.emit("breakpoint", o);
          },
          getBreakpoint: function (e, t = "window", s) {
            if (!e || ("container" === t && !s)) return;
            let i = !1;
            const n = C(),
              a = "window" === t ? n.innerHeight : s.clientHeight,
              r = Object.keys(e).map((e) => {
                if ("string" == typeof e && 0 === e.indexOf("@")) {
                  const t = parseFloat(e.substr(1));
                  return { value: a * t, point: e };
                }
                return { value: e, point: e };
              });
            r.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
            for (let e = 0; e < r.length; e += 1) {
              const { point: a, value: o } = r[e];
              "window" === t
                ? n.matchMedia(`(min-width: ${o}px)`).matches && (i = a)
                : o <= s.clientWidth && (i = a);
            }
            return i || "max";
          },
        },
        checkOverflow: {
          checkOverflow: function () {
            const e = this,
              { isLocked: t, params: s } = e,
              { slidesOffsetBefore: i } = s;
            if (i) {
              const t = e.slides.length - 1,
                s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * i;
              e.isLocked = e.size > s;
            } else e.isLocked = 1 === e.snapGrid.length;
            !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked),
              !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
              t && t !== e.isLocked && (e.isEnd = !1),
              t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
          },
        },
        classes: {
          addClasses: function () {
            const e = this,
              { classNames: t, params: s, rtl: i, el: n, device: a } = e,
              r = (function (e, t) {
                const s = [];
                return (
                  e.forEach((e) => {
                    "object" == typeof e
                      ? Object.keys(e).forEach((i) => {
                          e[i] && s.push(t + i);
                        })
                      : "string" == typeof e && s.push(t + e);
                  }),
                  s
                );
              })(
                [
                  "initialized",
                  s.direction,
                  { "free-mode": e.params.freeMode && s.freeMode.enabled },
                  { autoheight: s.autoHeight },
                  { rtl: i },
                  { grid: s.grid && s.grid.rows > 1 },
                  {
                    "grid-column":
                      s.grid && s.grid.rows > 1 && "column" === s.grid.fill,
                  },
                  { android: a.android },
                  { ios: a.ios },
                  { "css-mode": s.cssMode },
                  { centered: s.cssMode && s.centeredSlides },
                  { "watch-progress": s.watchSlidesProgress },
                ],
                s.containerModifierClass
              );
            t.push(...r), n.classList.add(...t), e.emitContainerClasses();
          },
          removeClasses: function () {
            const { el: e, classNames: t } = this;
            e.classList.remove(...t), this.emitContainerClasses();
          },
        },
      },
      ue = {};
    class pe {
      constructor(...e) {
        let t, s;
        1 === e.length &&
        e[0].constructor &&
        "Object" === Object.prototype.toString.call(e[0]).slice(8, -1)
          ? (s = e[0])
          : ([t, s] = e),
          s || (s = {}),
          (s = A({}, s)),
          t && !s.el && (s.el = t);
        const i = S();
        if (
          s.el &&
          "string" == typeof s.el &&
          i.querySelectorAll(s.el).length > 1
        ) {
          const e = [];
          return (
            i.querySelectorAll(s.el).forEach((t) => {
              const i = A({}, s, { el: t });
              e.push(new pe(i));
            }),
            e
          );
        }
        const n = this;
        (n.__swiper__ = !0),
          (n.support = j()),
          (n.device = V({ userAgent: s.userAgent })),
          (n.browser = H()),
          (n.eventsListeners = {}),
          (n.eventsAnyListeners = []),
          (n.modules = [...n.__modules__]),
          s.modules && Array.isArray(s.modules) && n.modules.push(...s.modules);
        const a = {};
        n.modules.forEach((e) => {
          e({
            params: s,
            swiper: n,
            extendParams: de(s, a),
            on: n.on.bind(n),
            once: n.once.bind(n),
            off: n.off.bind(n),
            emit: n.emit.bind(n),
          });
        });
        const r = A({}, le, a);
        return (
          (n.params = A({}, r, ue, s)),
          (n.originalParams = A({}, n.params)),
          (n.passedParams = A({}, s)),
          n.params &&
            n.params.on &&
            Object.keys(n.params.on).forEach((e) => {
              n.on(e, n.params.on[e]);
            }),
          n.params && n.params.onAny && n.onAny(n.params.onAny),
          Object.assign(n, {
            enabled: n.params.enabled,
            el: t,
            classNames: [],
            slides: [],
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal: () => "horizontal" === n.params.direction,
            isVertical: () => "vertical" === n.params.direction,
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            allowSlideNext: n.params.allowSlideNext,
            allowSlidePrev: n.params.allowSlidePrev,
            touchEventsData: {
              isTouched: void 0,
              isMoved: void 0,
              allowTouchCallbacks: void 0,
              touchStartTime: void 0,
              isScrolling: void 0,
              currentTranslate: void 0,
              startTranslate: void 0,
              allowThresholdMove: void 0,
              focusableElements: n.params.focusableElements,
              lastClickTime: E(),
              clickTimeout: void 0,
              velocities: [],
              allowMomentumBounce: void 0,
              startMoving: void 0,
              evCache: [],
            },
            allowClick: !0,
            allowTouchMove: n.params.allowTouchMove,
            touches: {
              startX: 0,
              startY: 0,
              currentX: 0,
              currentY: 0,
              diff: 0,
            },
            imagesToLoad: [],
            imagesLoaded: 0,
          }),
          n.emit("_swiper"),
          n.params.init && n.init(),
          n
        );
      }
      getSlideIndex(e) {
        const { slidesEl: t, params: s } = this,
          i = N(M(t, `.${s.slideClass}, swiper-slide`)[0]);
        return N(e) - i;
      }
      recalcSlides() {
        const { slidesEl: e, params: t } = this;
        this.slides = M(e, `.${t.slideClass}, swiper-slide`);
      }
      enable() {
        const e = this;
        e.enabled ||
          ((e.enabled = !0),
          e.params.grabCursor && e.setGrabCursor(),
          e.emit("enable"));
      }
      disable() {
        const e = this;
        e.enabled &&
          ((e.enabled = !1),
          e.params.grabCursor && e.unsetGrabCursor(),
          e.emit("disable"));
      }
      setProgress(e, t) {
        const s = this;
        e = Math.min(Math.max(e, 0), 1);
        const i = s.minTranslate(),
          n = (s.maxTranslate() - i) * e + i;
        s.translateTo(n, void 0 === t ? 0 : t),
          s.updateActiveIndex(),
          s.updateSlidesClasses();
      }
      emitContainerClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const t = e.el.className
          .split(" ")
          .filter(
            (t) =>
              0 === t.indexOf("swiper") ||
              0 === t.indexOf(e.params.containerModifierClass)
          );
        e.emit("_containerClasses", t.join(" "));
      }
      getSlideClasses(e) {
        const t = this;
        return t.destroyed
          ? ""
          : e.className
              .split(" ")
              .filter(
                (e) =>
                  0 === e.indexOf("swiper-slide") ||
                  0 === e.indexOf(t.params.slideClass)
              )
              .join(" ");
      }
      emitSlidesClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const t = [];
        e.slides.forEach((s) => {
          const i = e.getSlideClasses(s);
          t.push({ slideEl: s, classNames: i }), e.emit("_slideClass", s, i);
        }),
          e.emit("_slideClasses", t);
      }
      slidesPerViewDynamic(e = "current", t = !1) {
        const {
          params: s,
          slides: i,
          slidesGrid: n,
          slidesSizesGrid: a,
          size: r,
          activeIndex: o,
        } = this;
        let l = 1;
        if (s.centeredSlides) {
          let e,
            t = i[o].swiperSlideSize;
          for (let s = o + 1; s < i.length; s += 1)
            i[s] &&
              !e &&
              ((t += i[s].swiperSlideSize), (l += 1), t > r && (e = !0));
          for (let s = o - 1; s >= 0; s -= 1)
            i[s] &&
              !e &&
              ((t += i[s].swiperSlideSize), (l += 1), t > r && (e = !0));
        } else if ("current" === e)
          for (let e = o + 1; e < i.length; e += 1) {
            (t ? n[e] + a[e] - n[o] < r : n[e] - n[o] < r) && (l += 1);
          }
        else
          for (let e = o - 1; e >= 0; e -= 1) {
            n[o] - n[e] < r && (l += 1);
          }
        return l;
      }
      update() {
        const e = this;
        if (!e || e.destroyed) return;
        const { snapGrid: t, params: s } = e;
        function i() {
          const t = e.rtlTranslate ? -1 * e.translate : e.translate,
            s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
          e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses();
        }
        let n;
        s.breakpoints && e.setBreakpoint(),
          [...e.el.querySelectorAll('[loading="lazy"]')].forEach((t) => {
            t.complete && se(e, t);
          }),
          e.updateSize(),
          e.updateSlides(),
          e.updateProgress(),
          e.updateSlidesClasses(),
          e.params.freeMode && e.params.freeMode.enabled
            ? (i(), e.params.autoHeight && e.updateAutoHeight())
            : ((n =
                ("auto" === e.params.slidesPerView ||
                  e.params.slidesPerView > 1) &&
                e.isEnd &&
                !e.params.centeredSlides
                  ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                  : e.slideTo(e.activeIndex, 0, !1, !0)),
              n || i()),
          s.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
          e.emit("update");
      }
      changeDirection(e, t = !0) {
        const s = this,
          i = s.params.direction;
        return (
          e || (e = "horizontal" === i ? "vertical" : "horizontal"),
          e === i ||
            ("horizontal" !== e && "vertical" !== e) ||
            (s.el.classList.remove(`${s.params.containerModifierClass}${i}`),
            s.el.classList.add(`${s.params.containerModifierClass}${e}`),
            s.emitContainerClasses(),
            (s.params.direction = e),
            s.slides.forEach((t) => {
              "vertical" === e ? (t.style.width = "") : (t.style.height = "");
            }),
            s.emit("changeDirection"),
            t && s.update()),
          s
        );
      }
      changeLanguageDirection(e) {
        const t = this;
        (t.rtl && "rtl" === e) ||
          (!t.rtl && "ltr" === e) ||
          ((t.rtl = "rtl" === e),
          (t.rtlTranslate = "horizontal" === t.params.direction && t.rtl),
          t.rtl
            ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`),
              (t.el.dir = "rtl"))
            : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`),
              (t.el.dir = "ltr")),
          t.update());
      }
      mount(e) {
        const t = this;
        if (t.mounted) return !0;
        let s = e || t.params.el;
        if (("string" == typeof s && (s = document.querySelector(s)), !s))
          return !1;
        (s.swiper = t), s.shadowEl && (t.isElement = !0);
        const i = () =>
          `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
        let n = (() => {
          if (s && s.shadowRoot && s.shadowRoot.querySelector) {
            return s.shadowRoot.querySelector(i());
          }
          return M(s, i())[0];
        })();
        return (
          !n &&
            t.params.createElements &&
            ((n = O("div", t.params.wrapperClass)),
            s.append(n),
            M(s, `.${t.params.slideClass}`).forEach((e) => {
              n.append(e);
            })),
          Object.assign(t, {
            el: s,
            wrapperEl: n,
            slidesEl: t.isElement ? s : n,
            mounted: !0,
            rtl: "rtl" === s.dir.toLowerCase() || "rtl" === I(s, "direction"),
            rtlTranslate:
              "horizontal" === t.params.direction &&
              ("rtl" === s.dir.toLowerCase() || "rtl" === I(s, "direction")),
            wrongRTL: "-webkit-box" === I(n, "display"),
          }),
          !0
        );
      }
      init(e) {
        const t = this;
        if (t.initialized) return t;
        return (
          !1 === t.mount(e) ||
            (t.emit("beforeInit"),
            t.params.breakpoints && t.setBreakpoint(),
            t.addClasses(),
            t.updateSize(),
            t.updateSlides(),
            t.params.watchOverflow && t.checkOverflow(),
            t.params.grabCursor && t.enabled && t.setGrabCursor(),
            t.params.loop && t.virtual && t.params.virtual.enabled
              ? t.slideTo(
                  t.params.initialSlide + t.virtual.slidesBefore,
                  0,
                  t.params.runCallbacksOnInit,
                  !1,
                  !0
                )
              : t.slideTo(
                  t.params.initialSlide,
                  0,
                  t.params.runCallbacksOnInit,
                  !1,
                  !0
                ),
            t.params.loop && t.loopCreate(),
            t.attachEvents(),
            [...t.el.querySelectorAll('[loading="lazy"]')].forEach((e) => {
              e.complete
                ? se(t, e)
                : e.addEventListener("load", (e) => {
                    se(t, e.target);
                  });
            }),
            (t.initialized = !0),
            t.emit("init"),
            t.emit("afterInit")),
          t
        );
      }
      destroy(e = !0, t = !0) {
        const s = this,
          { params: i, el: n, wrapperEl: a, slides: r } = s;
        return (
          void 0 === s.params ||
            s.destroyed ||
            (s.emit("beforeDestroy"),
            (s.initialized = !1),
            s.detachEvents(),
            i.loop && s.loopDestroy(),
            t &&
              (s.removeClasses(),
              n.removeAttribute("style"),
              a.removeAttribute("style"),
              r &&
                r.length &&
                r.forEach((e) => {
                  e.classList.remove(
                    i.slideVisibleClass,
                    i.slideActiveClass,
                    i.slideNextClass,
                    i.slidePrevClass
                  ),
                    e.removeAttribute("style"),
                    e.removeAttribute("data-swiper-slide-index");
                })),
            s.emit("destroy"),
            Object.keys(s.eventsListeners).forEach((e) => {
              s.off(e);
            }),
            !1 !== e &&
              ((s.el.swiper = null),
              (function (e) {
                const t = e;
                Object.keys(t).forEach((e) => {
                  try {
                    t[e] = null;
                  } catch (e) {}
                  try {
                    delete t[e];
                  } catch (e) {}
                });
              })(s)),
            (s.destroyed = !0)),
          null
        );
      }
      static extendDefaults(e) {
        A(ue, e);
      }
      static get extendedDefaults() {
        return ue;
      }
      static get defaults() {
        return le;
      }
      static installModule(e) {
        pe.prototype.__modules__ || (pe.prototype.__modules__ = []);
        const t = pe.prototype.__modules__;
        "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
      }
      static use(e) {
        return Array.isArray(e)
          ? (e.forEach((e) => pe.installModule(e)), pe)
          : (pe.installModule(e), pe);
      }
    }
    Object.keys(ce).forEach((e) => {
      Object.keys(ce[e]).forEach((t) => {
        pe.prototype[t] = ce[e][t];
      });
    }),
      pe.use([
        function ({ swiper: e, on: t, emit: s }) {
          const i = C();
          let n = null,
            a = null;
          const r = () => {
              e &&
                !e.destroyed &&
                e.initialized &&
                (s("beforeResize"), s("resize"));
            },
            o = () => {
              e && !e.destroyed && e.initialized && s("orientationchange");
            };
          t("init", () => {
            e.params.resizeObserver && void 0 !== i.ResizeObserver
              ? e &&
                !e.destroyed &&
                e.initialized &&
                ((n = new ResizeObserver((t) => {
                  a = i.requestAnimationFrame(() => {
                    const { width: s, height: i } = e;
                    let n = s,
                      a = i;
                    t.forEach(
                      ({ contentBoxSize: t, contentRect: s, target: i }) => {
                        (i && i !== e.el) ||
                          ((n = s ? s.width : (t[0] || t).inlineSize),
                          (a = s ? s.height : (t[0] || t).blockSize));
                      }
                    ),
                      (n === s && a === i) || r();
                  });
                })),
                n.observe(e.el))
              : (i.addEventListener("resize", r),
                i.addEventListener("orientationchange", o));
          }),
            t("destroy", () => {
              a && i.cancelAnimationFrame(a),
                n && n.unobserve && e.el && (n.unobserve(e.el), (n = null)),
                i.removeEventListener("resize", r),
                i.removeEventListener("orientationchange", o);
            });
        },
        function ({ swiper: e, extendParams: t, on: s, emit: i }) {
          const n = [],
            a = C(),
            r = (t, s = {}) => {
              const r = new (a.MutationObserver || a.WebkitMutationObserver)(
                (t) => {
                  if (e.__preventObserver__) return;
                  if (1 === t.length) return void i("observerUpdate", t[0]);
                  const s = function () {
                    i("observerUpdate", t[0]);
                  };
                  a.requestAnimationFrame
                    ? a.requestAnimationFrame(s)
                    : a.setTimeout(s, 0);
                }
              );
              r.observe(t, {
                attributes: void 0 === s.attributes || s.attributes,
                childList: void 0 === s.childList || s.childList,
                characterData: void 0 === s.characterData || s.characterData,
              }),
                n.push(r);
            };
          t({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
            s("init", () => {
              if (e.params.observer) {
                if (e.params.observeParents) {
                  const t = z(e.el);
                  for (let e = 0; e < t.length; e += 1) r(t[e]);
                }
                r(e.el, { childList: e.params.observeSlideChildren }),
                  r(e.wrapperEl, { attributes: !1 });
              }
            }),
            s("destroy", () => {
              n.forEach((e) => {
                e.disconnect();
              }),
                n.splice(0, n.length);
            });
        },
      ]);
    const he = pe;
    function fe(e, t, s, i) {
      return (
        e.params.createElements &&
          Object.keys(i).forEach((n) => {
            if (!s[n] && !0 === s.auto) {
              let a = M(e.el, `.${i[n]}`)[0];
              a || ((a = O("div", i[n])), (a.className = i[n]), e.el.append(a)),
                (s[n] = a),
                (t[n] = a);
            }
          }),
        s
      );
    }
    function me({ swiper: e, extendParams: t, on: s, emit: i }) {
      t({
        navigation: {
          nextEl: null,
          prevEl: null,
          hideOnClick: !1,
          disabledClass: "swiper-button-disabled",
          hiddenClass: "swiper-button-hidden",
          lockClass: "swiper-button-lock",
          navigationDisabledClass: "swiper-navigation-disabled",
        },
      }),
        (e.navigation = { nextEl: null, prevEl: null });
      const n = (e) => (Array.isArray(e) || (e = [e].filter((e) => !!e)), e);
      function a(t) {
        let s;
        return t &&
          "string" == typeof t &&
          e.isElement &&
          ((s = e.el.shadowRoot.querySelector(t)), s)
          ? s
          : (t &&
              ("string" == typeof t && (s = [...document.querySelectorAll(t)]),
              e.params.uniqueNavElements &&
                "string" == typeof t &&
                s.length > 1 &&
                1 === e.el.querySelectorAll(t).length &&
                (s = e.el.querySelector(t))),
            t && !s ? t : s);
      }
      function r(t, s) {
        const i = e.params.navigation;
        (t = n(t)).forEach((t) => {
          t &&
            (t.classList[s ? "add" : "remove"](...i.disabledClass.split(" ")),
            "BUTTON" === t.tagName && (t.disabled = s),
            e.params.watchOverflow &&
              e.enabled &&
              t.classList[e.isLocked ? "add" : "remove"](i.lockClass));
        });
      }
      function o() {
        const { nextEl: t, prevEl: s } = e.navigation;
        if (e.params.loop) return r(s, !1), void r(t, !1);
        r(s, e.isBeginning && !e.params.rewind),
          r(t, e.isEnd && !e.params.rewind);
      }
      function l(t) {
        t.preventDefault(),
          (!e.isBeginning || e.params.loop || e.params.rewind) &&
            (e.slidePrev(), i("navigationPrev"));
      }
      function d(t) {
        t.preventDefault(),
          (!e.isEnd || e.params.loop || e.params.rewind) &&
            (e.slideNext(), i("navigationNext"));
      }
      function c() {
        const t = e.params.navigation;
        if (
          ((e.params.navigation = fe(
            e,
            e.originalParams.navigation,
            e.params.navigation,
            { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
          )),
          !t.nextEl && !t.prevEl)
        )
          return;
        let s = a(t.nextEl),
          i = a(t.prevEl);
        Object.assign(e.navigation, { nextEl: s, prevEl: i }),
          (s = n(s)),
          (i = n(i));
        const r = (s, i) => {
          s && s.addEventListener("click", "next" === i ? d : l),
            !e.enabled && s && s.classList.add(...t.lockClass.split(" "));
        };
        s.forEach((e) => r(e, "next")), i.forEach((e) => r(e, "prev"));
      }
      function u() {
        let { nextEl: t, prevEl: s } = e.navigation;
        (t = n(t)), (s = n(s));
        const i = (t, s) => {
          t.removeEventListener("click", "next" === s ? d : l),
            t.classList.remove(...e.params.navigation.disabledClass.split(" "));
        };
        t.forEach((e) => i(e, "next")), s.forEach((e) => i(e, "prev"));
      }
      s("init", () => {
        !1 === e.params.navigation.enabled ? p() : (c(), o());
      }),
        s("toEdge fromEdge lock unlock", () => {
          o();
        }),
        s("destroy", () => {
          u();
        }),
        s("enable disable", () => {
          let { nextEl: t, prevEl: s } = e.navigation;
          (t = n(t)),
            (s = n(s)),
            [...t, ...s]
              .filter((e) => !!e)
              .forEach((t) =>
                t.classList[e.enabled ? "remove" : "add"](
                  e.params.navigation.lockClass
                )
              );
        }),
        s("click", (t, s) => {
          let { nextEl: a, prevEl: r } = e.navigation;
          (a = n(a)), (r = n(r));
          const o = s.target;
          if (
            e.params.navigation.hideOnClick &&
            !r.includes(o) &&
            !a.includes(o)
          ) {
            if (
              e.pagination &&
              e.params.pagination &&
              e.params.pagination.clickable &&
              (e.pagination.el === o || e.pagination.el.contains(o))
            )
              return;
            let t;
            a.length
              ? (t = a[0].classList.contains(e.params.navigation.hiddenClass))
              : r.length &&
                (t = r[0].classList.contains(e.params.navigation.hiddenClass)),
              i(!0 === t ? "navigationShow" : "navigationHide"),
              [...a, ...r]
                .filter((e) => !!e)
                .forEach((t) =>
                  t.classList.toggle(e.params.navigation.hiddenClass)
                );
          }
        });
      const p = () => {
        e.el.classList.add(
          ...e.params.navigation.navigationDisabledClass.split(" ")
        ),
          u();
      };
      Object.assign(e.navigation, {
        enable: () => {
          e.el.classList.remove(
            ...e.params.navigation.navigationDisabledClass.split(" ")
          ),
            c(),
            o();
        },
        disable: p,
        update: o,
        init: c,
        destroy: u,
      });
    }
    function ge(e = "") {
      return `.${e
        .trim()
        .replace(/([\.:!\/])/g, "\\$1")
        .replace(/ /g, ".")}`;
    }
    function ve({ swiper: e, extendParams: t, on: s, emit: i }) {
      const n = "swiper-pagination";
      let a;
      t({
        pagination: {
          el: null,
          bulletElement: "span",
          clickable: !1,
          hideOnClick: !1,
          renderBullet: null,
          renderProgressbar: null,
          renderFraction: null,
          renderCustom: null,
          progressbarOpposite: !1,
          type: "bullets",
          dynamicBullets: !1,
          dynamicMainBullets: 1,
          formatFractionCurrent: (e) => e,
          formatFractionTotal: (e) => e,
          bulletClass: `${n}-bullet`,
          bulletActiveClass: `${n}-bullet-active`,
          modifierClass: `${n}-`,
          currentClass: `${n}-current`,
          totalClass: `${n}-total`,
          hiddenClass: `${n}-hidden`,
          progressbarFillClass: `${n}-progressbar-fill`,
          progressbarOppositeClass: `${n}-progressbar-opposite`,
          clickableClass: `${n}-clickable`,
          lockClass: `${n}-lock`,
          horizontalClass: `${n}-horizontal`,
          verticalClass: `${n}-vertical`,
          paginationDisabledClass: `${n}-disabled`,
        },
      }),
        (e.pagination = { el: null, bullets: [] });
      let r = 0;
      const o = (e) => (Array.isArray(e) || (e = [e].filter((e) => !!e)), e);
      function l() {
        return (
          !e.params.pagination.el ||
          !e.pagination.el ||
          (Array.isArray(e.pagination.el) && 0 === e.pagination.el.length)
        );
      }
      function d(t, s) {
        const { bulletActiveClass: i } = e.params.pagination;
        t &&
          (t = t[("prev" === s ? "previous" : "next") + "ElementSibling"]) &&
          (t.classList.add(`${i}-${s}`),
          (t = t[("prev" === s ? "previous" : "next") + "ElementSibling"]) &&
            t.classList.add(`${i}-${s}-${s}`));
      }
      function c(t) {
        const s = t.target.closest(ge(e.params.pagination.bulletClass));
        if (!s) return;
        t.preventDefault();
        const i = N(s) * e.params.slidesPerGroup;
        if (e.params.loop) {
          if (e.realIndex === i) return;
          (i < e.loopedSlides || i > e.slides.length - e.loopedSlides) &&
            e.loopFix({
              direction: i < e.loopedSlides ? "prev" : "next",
              activeSlideIndex: i,
              slideTo: !1,
            }),
            e.slideToLoop(i);
        } else e.slideTo(i);
      }
      function u() {
        const t = e.rtl,
          s = e.params.pagination;
        if (l()) return;
        let n,
          c = e.pagination.el;
        c = o(c);
        const u =
            e.virtual && e.params.virtual.enabled
              ? e.virtual.slides.length
              : e.slides.length,
          p = e.params.loop
            ? Math.ceil(u / e.params.slidesPerGroup)
            : e.snapGrid.length;
        if (
          ((n = e.params.loop
            ? e.params.slidesPerGroup > 1
              ? Math.floor(e.realIndex / e.params.slidesPerGroup)
              : e.realIndex
            : void 0 !== e.snapIndex
            ? e.snapIndex
            : e.activeIndex || 0),
          "bullets" === s.type &&
            e.pagination.bullets &&
            e.pagination.bullets.length > 0)
        ) {
          const i = e.pagination.bullets;
          let o, l, u;
          if (
            (s.dynamicBullets &&
              ((a = B(i[0], e.isHorizontal() ? "width" : "height", !0)),
              c.forEach((t) => {
                t.style[e.isHorizontal() ? "width" : "height"] =
                  a * (s.dynamicMainBullets + 4) + "px";
              }),
              s.dynamicMainBullets > 1 &&
                void 0 !== e.previousIndex &&
                ((r += n - (e.previousIndex || 0)),
                r > s.dynamicMainBullets - 1
                  ? (r = s.dynamicMainBullets - 1)
                  : r < 0 && (r = 0)),
              (o = Math.max(n - r, 0)),
              (l = o + (Math.min(i.length, s.dynamicMainBullets) - 1)),
              (u = (l + o) / 2)),
            i.forEach((e) => {
              e.classList.remove(
                ...[
                  "",
                  "-next",
                  "-next-next",
                  "-prev",
                  "-prev-prev",
                  "-main",
                ].map((e) => `${s.bulletActiveClass}${e}`)
              );
            }),
            c.length > 1)
          )
            i.forEach((e) => {
              const t = N(e);
              t === n && e.classList.add(s.bulletActiveClass),
                s.dynamicBullets &&
                  (t >= o &&
                    t <= l &&
                    e.classList.add(`${s.bulletActiveClass}-main`),
                  t === o && d(e, "prev"),
                  t === l && d(e, "next"));
            });
          else {
            const e = i[n];
            if ((e && e.classList.add(s.bulletActiveClass), s.dynamicBullets)) {
              const e = i[o],
                t = i[l];
              for (let e = o; e <= l; e += 1)
                i[e] && i[e].classList.add(`${s.bulletActiveClass}-main`);
              d(e, "prev"), d(t, "next");
            }
          }
          if (s.dynamicBullets) {
            const n = Math.min(i.length, s.dynamicMainBullets + 4),
              r = (a * n - a) / 2 - u * a,
              o = t ? "right" : "left";
            i.forEach((t) => {
              t.style[e.isHorizontal() ? o : "top"] = `${r}px`;
            });
          }
        }
        c.forEach((t, a) => {
          if (
            ("fraction" === s.type &&
              (t.querySelectorAll(ge(s.currentClass)).forEach((e) => {
                e.textContent = s.formatFractionCurrent(n + 1);
              }),
              t.querySelectorAll(ge(s.totalClass)).forEach((e) => {
                e.textContent = s.formatFractionTotal(p);
              })),
            "progressbar" === s.type)
          ) {
            let i;
            i = s.progressbarOpposite
              ? e.isHorizontal()
                ? "vertical"
                : "horizontal"
              : e.isHorizontal()
              ? "horizontal"
              : "vertical";
            const a = (n + 1) / p;
            let r = 1,
              o = 1;
            "horizontal" === i ? (r = a) : (o = a),
              t.querySelectorAll(ge(s.progressbarFillClass)).forEach((t) => {
                (t.style.transform = `translate3d(0,0,0) scaleX(${r}) scaleY(${o})`),
                  (t.style.transitionDuration = `${e.params.speed}ms`);
              });
          }
          "custom" === s.type && s.renderCustom
            ? ((t.innerHTML = s.renderCustom(e, n + 1, p)),
              0 === a && i("paginationRender", t))
            : (0 === a && i("paginationRender", t), i("paginationUpdate", t)),
            e.params.watchOverflow &&
              e.enabled &&
              t.classList[e.isLocked ? "add" : "remove"](s.lockClass);
        });
      }
      function p() {
        const t = e.params.pagination;
        if (l()) return;
        const s =
          e.virtual && e.params.virtual.enabled
            ? e.virtual.slides.length
            : e.slides.length;
        let n = e.pagination.el;
        n = o(n);
        let a = "";
        if ("bullets" === t.type) {
          let i = e.params.loop
            ? Math.ceil(s / e.params.slidesPerGroup)
            : e.snapGrid.length;
          e.params.freeMode && e.params.freeMode.enabled && i > s && (i = s);
          for (let s = 0; s < i; s += 1)
            t.renderBullet
              ? (a += t.renderBullet.call(e, s, t.bulletClass))
              : (a += `<${t.bulletElement} class="${t.bulletClass}"></${t.bulletElement}>`);
        }
        "fraction" === t.type &&
          (a = t.renderFraction
            ? t.renderFraction.call(e, t.currentClass, t.totalClass)
            : `<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`),
          "progressbar" === t.type &&
            (a = t.renderProgressbar
              ? t.renderProgressbar.call(e, t.progressbarFillClass)
              : `<span class="${t.progressbarFillClass}"></span>`),
          n.forEach((s) => {
            "custom" !== t.type && (s.innerHTML = a || ""),
              "bullets" === t.type &&
                (e.pagination.bullets = [
                  ...s.querySelectorAll(ge(t.bulletClass)),
                ]);
          }),
          "custom" !== t.type && i("paginationRender", n[0]);
      }
      function h() {
        e.params.pagination = fe(
          e,
          e.originalParams.pagination,
          e.params.pagination,
          { el: "swiper-pagination" }
        );
        const t = e.params.pagination;
        if (!t.el) return;
        let s;
        "string" == typeof t.el &&
          e.isElement &&
          (s = e.el.shadowRoot.querySelector(t.el)),
          s ||
            "string" != typeof t.el ||
            (s = [...document.querySelectorAll(t.el)]),
          s || (s = t.el),
          s &&
            0 !== s.length &&
            (e.params.uniqueNavElements &&
              "string" == typeof t.el &&
              Array.isArray(s) &&
              s.length > 1 &&
              ((s = [...e.el.querySelectorAll(t.el)]),
              s.length > 1 &&
                (s = s.filter((t) => z(t, ".swiper")[0] === e.el)[0])),
            Array.isArray(s) && 1 === s.length && (s = s[0]),
            Object.assign(e.pagination, { el: s }),
            (s = o(s)),
            s.forEach((s) => {
              "bullets" === t.type &&
                t.clickable &&
                s.classList.add(t.clickableClass),
                s.classList.add(t.modifierClass + t.type),
                s.classList.add(
                  e.isHorizontal() ? t.horizontalClass : t.verticalClass
                ),
                "bullets" === t.type &&
                  t.dynamicBullets &&
                  (s.classList.add(`${t.modifierClass}${t.type}-dynamic`),
                  (r = 0),
                  t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)),
                "progressbar" === t.type &&
                  t.progressbarOpposite &&
                  s.classList.add(t.progressbarOppositeClass),
                t.clickable && s.addEventListener("click", c),
                e.enabled || s.classList.add(t.lockClass);
            }));
      }
      function f() {
        const t = e.params.pagination;
        if (l()) return;
        let s = e.pagination.el;
        s &&
          ((s = o(s)),
          s.forEach((s) => {
            s.classList.remove(t.hiddenClass),
              s.classList.remove(t.modifierClass + t.type),
              s.classList.remove(
                e.isHorizontal() ? t.horizontalClass : t.verticalClass
              ),
              t.clickable && s.removeEventListener("click", c);
          })),
          e.pagination.bullets &&
            e.pagination.bullets.forEach((e) =>
              e.classList.remove(t.bulletActiveClass)
            );
      }
      s("init", () => {
        !1 === e.params.pagination.enabled ? m() : (h(), p(), u());
      }),
        s("activeIndexChange", () => {
          void 0 === e.snapIndex && u();
        }),
        s("snapIndexChange", () => {
          u();
        }),
        s("snapGridLengthChange", () => {
          p(), u();
        }),
        s("destroy", () => {
          f();
        }),
        s("enable disable", () => {
          let { el: t } = e.pagination;
          t &&
            ((t = o(t)),
            t.forEach((t) =>
              t.classList[e.enabled ? "remove" : "add"](
                e.params.pagination.lockClass
              )
            ));
        }),
        s("lock unlock", () => {
          u();
        }),
        s("click", (t, s) => {
          const n = s.target;
          let { el: a } = e.pagination;
          if (
            (Array.isArray(a) || (a = [a].filter((e) => !!e)),
            e.params.pagination.el &&
              e.params.pagination.hideOnClick &&
              a &&
              a.length > 0 &&
              !n.classList.contains(e.params.pagination.bulletClass))
          ) {
            if (
              e.navigation &&
              ((e.navigation.nextEl && n === e.navigation.nextEl) ||
                (e.navigation.prevEl && n === e.navigation.prevEl))
            )
              return;
            const t = a[0].classList.contains(e.params.pagination.hiddenClass);
            i(!0 === t ? "paginationShow" : "paginationHide"),
              a.forEach((t) =>
                t.classList.toggle(e.params.pagination.hiddenClass)
              );
          }
        });
      const m = () => {
        e.el.classList.add(e.params.pagination.paginationDisabledClass);
        let { el: t } = e.pagination;
        t &&
          ((t = o(t)),
          t.forEach((t) =>
            t.classList.add(e.params.pagination.paginationDisabledClass)
          )),
          f();
      };
      Object.assign(e.pagination, {
        enable: () => {
          e.el.classList.remove(e.params.pagination.paginationDisabledClass);
          let { el: t } = e.pagination;
          t &&
            ((t = o(t)),
            t.forEach((t) =>
              t.classList.remove(e.params.pagination.paginationDisabledClass)
            )),
            h(),
            p(),
            u();
        },
        disable: m,
        render: p,
        update: u,
        init: h,
        destroy: f,
      });
    }
    function be({ swiper: e, extendParams: t, on: s }) {
      t({
        thumbs: {
          swiper: null,
          multipleActiveThumbs: !0,
          autoScrollOffset: 0,
          slideThumbActiveClass: "swiper-slide-thumb-active",
          thumbsContainerClass: "swiper-thumbs",
        },
      });
      let i = !1,
        n = !1;
      function a() {
        const t = e.thumbs.swiper;
        if (!t || t.destroyed) return;
        const s = t.clickedIndex,
          i = t.clickedSlide;
        if (i && i.classList.contains(e.params.thumbs.slideThumbActiveClass))
          return;
        if (null == s) return;
        let n;
        (n = t.params.loop
          ? parseInt(t.clickedSlide.getAttribute("data-swiper-slide-index"), 10)
          : s),
          e.params.loop ? e.slideToLoop(n) : e.slideTo(n);
      }
      function r() {
        const { thumbs: t } = e.params;
        if (i) return !1;
        i = !0;
        const s = e.constructor;
        if (t.swiper instanceof s)
          (e.thumbs.swiper = t.swiper),
            Object.assign(e.thumbs.swiper.originalParams, {
              watchSlidesProgress: !0,
              slideToClickedSlide: !1,
            }),
            Object.assign(e.thumbs.swiper.params, {
              watchSlidesProgress: !0,
              slideToClickedSlide: !1,
            }),
            e.thumbs.swiper.update();
        else if (k(t.swiper)) {
          const i = Object.assign({}, t.swiper);
          Object.assign(i, {
            watchSlidesProgress: !0,
            slideToClickedSlide: !1,
          }),
            (e.thumbs.swiper = new s(i)),
            (n = !0);
        }
        return (
          e.thumbs.swiper.el.classList.add(
            e.params.thumbs.thumbsContainerClass
          ),
          e.thumbs.swiper.on("tap", a),
          !0
        );
      }
      function o(t) {
        const s = e.thumbs.swiper;
        if (!s || s.destroyed) return;
        const i =
          "auto" === s.params.slidesPerView
            ? s.slidesPerViewDynamic()
            : s.params.slidesPerView;
        let n = 1;
        const a = e.params.thumbs.slideThumbActiveClass;
        if (
          (e.params.slidesPerView > 1 &&
            !e.params.centeredSlides &&
            (n = e.params.slidesPerView),
          e.params.thumbs.multipleActiveThumbs || (n = 1),
          (n = Math.floor(n)),
          s.slides.forEach((e) => e.classList.remove(a)),
          s.params.loop || (s.params.virtual && s.params.virtual.enabled))
        )
          for (let t = 0; t < n; t += 1)
            M(
              s.slidesEl,
              `[data-swiper-slide-index="${e.realIndex + t}"]`
            ).forEach((e) => {
              e.classList.add(a);
            });
        else
          for (let t = 0; t < n; t += 1)
            s.slides[e.realIndex + t] &&
              s.slides[e.realIndex + t].classList.add(a);
        const r = e.params.thumbs.autoScrollOffset,
          o = r && !s.params.loop;
        if (e.realIndex !== s.realIndex || o) {
          const n = s.activeIndex;
          let a, l;
          if (s.params.loop) {
            const t = s.slides.filter(
              (t) =>
                t.getAttribute("data-swiper-slide-index") === `${e.realIndex}`
            )[0];
            (a = s.slides.indexOf(t)),
              (l = e.activeIndex > e.previousIndex ? "next" : "prev");
          } else (a = e.realIndex), (l = a > e.previousIndex ? "next" : "prev");
          o && (a += "next" === l ? r : -1 * r),
            s.visibleSlidesIndexes &&
              s.visibleSlidesIndexes.indexOf(a) < 0 &&
              (s.params.centeredSlides
                ? (a =
                    a > n
                      ? a - Math.floor(i / 2) + 1
                      : a + Math.floor(i / 2) - 1)
                : a > n && s.params.slidesPerGroup,
              s.slideTo(a, t ? 0 : void 0));
        }
      }
      (e.thumbs = { swiper: null }),
        s("beforeInit", () => {
          const { thumbs: t } = e.params;
          if (t && t.swiper)
            if (
              "string" == typeof t.swiper ||
              t.swiper instanceof HTMLElement
            ) {
              const s = S(),
                i = () => {
                  const i =
                    "string" == typeof t.swiper
                      ? s.querySelector(t.swiper)
                      : t.swiper;
                  if (i && i.swiper) (t.swiper = i.swiper), r(), o(!0);
                  else if (i) {
                    const s = (n) => {
                      (t.swiper = n.detail[0]),
                        i.removeEventListener("init", s),
                        r(),
                        o(!0),
                        t.swiper.update(),
                        e.update();
                    };
                    i.addEventListener("init", s);
                  }
                  return i;
                },
                n = () => {
                  if (e.destroyed) return;
                  i() || requestAnimationFrame(n);
                };
              requestAnimationFrame(n);
            } else r(), o(!0);
        }),
        s("slideChange update resize observerUpdate", () => {
          o();
        }),
        s("setTransition", (t, s) => {
          const i = e.thumbs.swiper;
          i && !i.destroyed && i.setTransition(s);
        }),
        s("beforeDestroy", () => {
          const t = e.thumbs.swiper;
          t && !t.destroyed && n && t.destroy();
        }),
        Object.assign(e.thumbs, { init: r, update: o });
    }
    function ye({ swiper: e, extendParams: t }) {
      let s, i, n;
      t({ grid: { rows: 1, fill: "column" } });
      e.grid = {
        initSlides: (t) => {
          const { slidesPerView: a } = e.params,
            { rows: r, fill: o } = e.params.grid;
          (i = s / r),
            (n = Math.floor(t / r)),
            (s = Math.floor(t / r) === t / r ? t : Math.ceil(t / r) * r),
            "auto" !== a && "row" === o && (s = Math.max(s, a * r));
        },
        updateSlide: (t, a, r, o) => {
          const { slidesPerGroup: l, spaceBetween: d } = e.params,
            { rows: c, fill: u } = e.params.grid;
          let p, h, f;
          if ("row" === u && l > 1) {
            const e = Math.floor(t / (l * c)),
              i = t - c * l * e,
              n = 0 === e ? l : Math.min(Math.ceil((r - e * c * l) / c), l);
            (f = Math.floor(i / n)),
              (h = i - f * n + e * l),
              (p = h + (f * s) / c),
              (a.style.order = p);
          } else
            "column" === u
              ? ((h = Math.floor(t / c)),
                (f = t - h * c),
                (h > n || (h === n && f === c - 1)) &&
                  ((f += 1), f >= c && ((f = 0), (h += 1))))
              : ((f = Math.floor(t / i)), (h = t - f * i));
          a.style[o("margin-top")] = 0 !== f ? d && `${d}px` : "";
        },
        updateWrapperSize: (t, i, n) => {
          const {
              spaceBetween: a,
              centeredSlides: r,
              roundLengths: o,
            } = e.params,
            { rows: l } = e.params.grid;
          if (
            ((e.virtualSize = (t + a) * s),
            (e.virtualSize = Math.ceil(e.virtualSize / l) - a),
            (e.wrapperEl.style[n("width")] = `${e.virtualSize + a}px`),
            r)
          ) {
            const t = [];
            for (let s = 0; s < i.length; s += 1) {
              let n = i[s];
              o && (n = Math.floor(n)),
                i[s] < e.virtualSize + i[0] && t.push(n);
            }
            i.splice(0, i.length), i.push(...t);
          }
        },
      };
    }
    function we() {
      let e = document.querySelectorAll(
        '[class*="__swiper"]:not(.swiper-wrapper)'
      );
      e &&
        e.forEach((e) => {
          e.parentElement.classList.add("swiper"),
            e.classList.add("swiper-wrapper");
          for (const t of e.children) t.classList.add("swiper-slide");
        });
    }
    window.addEventListener("load", function (e) {
      !(function () {
        if (
          (we(),
          document.querySelector(".promo__slider") &&
            new he(".promo__slider", {
              modules: [me, ve],
              observer: !0,
              observeParents: !0,
              slidesPerView: 1,
              spaceBetween: 0,
              autoHeight: !0,
              speed: 800,
              pagination: {
                el: ".slider-actions__pagination",
                type: "fraction",
              },
              navigation: {
                nextEl: ".slider-actions__next",
                prevEl: ".slider-actions__prev",
              },
              on: {},
            }),
          document.querySelector(".production-photos__slider") &&
            new he(".production-photos__slider", {
              observer: !0,
              observeParents: !0,
              slidesPerView: 3,
              spaceBetween: 30,
              autoHeight: !0,
              speed: 800,
              loop: !0,
              breakpoints: {
                320: { slidesPerView: 1.2, spaceBetween: 10, autoHeight: !0 },
                480: { slidesPerView: 1.5, spaceBetween: 20 },
                992: { slidesPerView: 2.5, spaceBetween: 20 },
                1200: { slidesPerView: 3, spaceBetween: 30 },
              },
              on: {},
            }),
          document.querySelector(".structure__slider") &&
            new he(".structure__slider", {
              modules: [me, ve],
              observer: !0,
              observeParents: !0,
              slidesPerView: 1,
              spaceBetween: 0,
              autoHeight: !0,
              speed: 800,
              pagination: {
                el: ".slider-actions__pagination",
                type: "fraction",
              },
              navigation: {
                nextEl: ".slider-actions__next",
                prevEl: ".slider-actions__prev",
              },
              on: {},
            }),
          document.querySelector(".cases-slider__slider") &&
            new he(".cases-slider__slider", {
              modules: [me, ve, ye],
              observer: !0,
              observeParents: !0,
              slidesPerView: 4,
              spaceBetween: 30,
              speed: 800,
              grid: { fill: "row", rows: 2 },
              pagination: {
                el: ".slider-actions__pagination",
                type: "fraction",
              },
              navigation: {
                nextEl: ".slider-actions__next",
                prevEl: ".slider-actions__prev",
              },
              breakpoints: {
                320: { slidesPerView: 1, spaceBetween: 20 },
                480: { slidesPerView: 2, spaceBetween: 20 },
                768: { slidesPerView: 3, spaceBetween: 20 },
                992: { slidesPerView: 4, spaceBetween: 30 },
              },
              on: {},
            }),
          document.querySelector(".title-block__slider") &&
            new he(".title-block__slider", {
              modules: [me, ve],
              observer: !0,
              observeParents: !0,
              slidesPerView: 1,
              spaceBetween: 0,
              speed: 800,
              pagination: {
                el: ".slider-actions__pagination",
                type: "fraction",
              },
              navigation: {
                nextEl: ".slider-actions__next",
                prevEl: ".slider-actions__prev",
              },
              on: {},
            }),
          document.querySelector(".last-articles__slider") &&
            new he(".last-articles__slider", {
              modules: [me, ve],
              observer: !0,
              observeParents: !0,
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 30,
              autoHeight: !0,
              speed: 800,
              pagination: {
                el: ".slider-actions__pagination",
                type: "fraction",
              },
              navigation: {
                nextEl: ".slider-actions__next",
                prevEl: ".slider-actions__prev",
              },
              breakpoints: {
                320: { slidesPerView: 1, spaceBetween: 0, slidesPerGroup: 1 },
                768: { slidesPerView: 2, slidesPerGroup: 2, spaceBetween: 20 },
                992: { slidesPerView: 3, spaceBetween: 30 },
              },
              on: {},
            }),
          document.querySelector(".thumb-slider"))
        )
          var e = new he(".thumb-slider", {
            modules: [be],
            speed: 1500,
            spaceBetween: 13,
            slideToClickedSlide: !0,
            centeredSlidesBounds: !0,
            slidesPerView: 4,
            watchOverflow: !0,
            watchSlidesVisibility: !0,
            watchSlidesProgress: !0,
            grabCursor: !0,
            breakpoints: { 1206: { direction: "vertical" } },
            on: {},
          });
        document.querySelector(".big-slider") &&
          new he(".big-slider", {
            modules: [me, ve, be],
            speed: 1500,
            grabCursor: !0,
            watchSlidesProgress: !0,
            navigation: {
              nextEl: ".slider-actions__next",
              prevEl: ".slider-actions__prev",
            },
            pagination: { el: ".slider-actions__pagination", type: "fraction" },
            thumbs: { swiper: e },
            on: {},
          });
      })();
    });
    let Se = !1;
    setTimeout(() => {
      if (Se) {
        let e = new Event("windowScroll");
        window.addEventListener("scroll", function (t) {
          document.dispatchEvent(e);
        });
      }
    }, 0),
      (function (e) {
        if ("object" == typeof exports && "undefined" != typeof module)
          module.exports = e();
        else if ("function" == typeof define && define.amd) define([], e);
        else {
          ("undefined" != typeof window
            ? window
            : "undefined" != typeof global
            ? global
            : "undefined" != typeof self
            ? self
            : this
          ).Lightgallery = e();
        }
      })(function () {
        return (function e(t, s, i) {
          function n(r, o) {
            if (!s[r]) {
              if (!t[r]) {
                var l = "function" == typeof require && require;
                if (!o && l) return l(r, !0);
                if (a) return a(r, !0);
                var d = new Error("Cannot find module '" + r + "'");
                throw ((d.code = "MODULE_NOT_FOUND"), d);
              }
              var c = (s[r] = { exports: {} });
              t[r][0].call(
                c.exports,
                function (e) {
                  return n(t[r][1][e] || e);
                },
                c,
                c.exports,
                e,
                t,
                s,
                i
              );
            }
            return s[r].exports;
          }
          for (
            var a = "function" == typeof require && require, r = 0;
            r < i.length;
            r++
          )
            n(i[r]);
          return n;
        })(
          {
            1: [
              function (e, t, s) {
                !(function (e, t) {
                  if (void 0 !== s) t(s);
                  else {
                    var i = { exports: {} };
                    t(i.exports), (e.lgUtils = i.exports);
                  }
                })(this, function (e) {
                  Object.defineProperty(e, "__esModule", { value: !0 });
                  var t = {
                    getAttribute: function (e, t) {
                      return e[t];
                    },
                    setAttribute: function (e, t, s) {
                      e[t] = s;
                    },
                    wrap: function (e, t) {
                      if (e) {
                        var s = document.createElement("div");
                        (s.className = t),
                          e.parentNode.insertBefore(s, e),
                          e.parentNode.removeChild(e),
                          s.appendChild(e);
                      }
                    },
                    addClass: function (e, t) {
                      e &&
                        (e.classList
                          ? e.classList.add(t)
                          : (e.className += " " + t));
                    },
                    removeClass: function (e, t) {
                      e &&
                        (e.classList
                          ? e.classList.remove(t)
                          : (e.className = e.className.replace(
                              new RegExp(
                                "(^|\\b)" + t.split(" ").join("|") + "(\\b|$)",
                                "gi"
                              ),
                              " "
                            )));
                    },
                    hasClass: function (e, t) {
                      return e.classList
                        ? e.classList.contains(t)
                        : new RegExp("(^| )" + t + "( |$)", "gi").test(
                            e.className
                          );
                    },
                    setVendor: function (e, t, s) {
                      e &&
                        ((e.style[t.charAt(0).toLowerCase() + t.slice(1)] = s),
                        (e.style["webkit" + t] = s),
                        (e.style["moz" + t] = s),
                        (e.style["ms" + t] = s),
                        (e.style["o" + t] = s));
                    },
                    trigger: function (e, t) {
                      if (e) {
                        var s = new CustomEvent(t, {
                          detail:
                            arguments.length > 2 && void 0 !== arguments[2]
                              ? arguments[2]
                              : null,
                        });
                        e.dispatchEvent(s);
                      }
                    },
                    Listener: { uid: 0 },
                    on: function (e, s, i) {
                      var n = this;
                      e &&
                        s.split(" ").forEach(function (s) {
                          var a = n.getAttribute(e, "lg-event-uid") || "";
                          t.Listener.uid++,
                            (a += "&" + t.Listener.uid),
                            n.setAttribute(e, "lg-event-uid", a),
                            (t.Listener[s + t.Listener.uid] = i),
                            e.addEventListener(s.split(".")[0], i, !1);
                        });
                    },
                    off: function (e, s) {
                      if (e) {
                        var i = this.getAttribute(e, "lg-event-uid");
                        if (i) {
                          i = i.split("&");
                          for (var n = 0; n < i.length; n++)
                            if (i[n]) {
                              var a = s + i[n];
                              if ("." === a.substring(0, 1))
                                for (var r in t.Listener)
                                  t.Listener.hasOwnProperty(r) &&
                                    r.split(".").indexOf(a.split(".")[1]) >
                                      -1 &&
                                    (e.removeEventListener(
                                      r.split(".")[0],
                                      t.Listener[r]
                                    ),
                                    this.setAttribute(
                                      e,
                                      "lg-event-uid",
                                      this.getAttribute(
                                        e,
                                        "lg-event-uid"
                                      ).replace("&" + i[n], "")
                                    ),
                                    delete t.Listener[r]);
                              else
                                e.removeEventListener(
                                  a.split(".")[0],
                                  t.Listener[a]
                                ),
                                  this.setAttribute(
                                    e,
                                    "lg-event-uid",
                                    this.getAttribute(
                                      e,
                                      "lg-event-uid"
                                    ).replace("&" + i[n], "")
                                  ),
                                  delete t.Listener[a];
                            }
                        }
                      }
                    },
                    param: function (e) {
                      return Object.keys(e)
                        .map(function (t) {
                          return (
                            encodeURIComponent(t) +
                            "=" +
                            encodeURIComponent(e[t])
                          );
                        })
                        .join("&");
                    },
                  };
                  e.default = t;
                });
              },
              {},
            ],
            2: [
              function (e, t, s) {
                !(function (t, i) {
                  if (void 0 !== s) i(e("./lg-utils"));
                  else {
                    i(t.lgUtils), (t.lightgallery = {});
                  }
                })(this, function (e) {
                  function t(e, t) {
                    if (
                      ((this.el = e),
                      (this.s = i({}, n, t)),
                      this.s.dynamic &&
                        "undefined" !== this.s.dynamicEl &&
                        this.s.dynamicEl.constructor === Array &&
                        !this.s.dynamicEl.length)
                    )
                      throw "When using dynamic mode, you must also define dynamicEl as an Array.";
                    return (
                      (this.modules = {}),
                      (this.lGalleryOn = !1),
                      (this.lgBusy = !1),
                      (this.hideBartimeout = !1),
                      (this.isTouch =
                        "ontouchstart" in document.documentElement),
                      this.s.slideEndAnimatoin &&
                        (this.s.hideControlOnEnd = !1),
                      (this.items = []),
                      this.s.dynamic
                        ? (this.items = this.s.dynamicEl)
                        : "this" === this.s.selector
                        ? this.items.push(this.el)
                        : "" !== this.s.selector
                        ? this.s.selectWithin
                          ? (this.items = document
                              .querySelector(this.s.selectWithin)
                              .querySelectorAll(this.s.selector))
                          : (this.items = this.el.querySelectorAll(
                              this.s.selector
                            ))
                        : (this.items = this.el.children),
                      (this.___slide = ""),
                      (this.outer = ""),
                      this.init(),
                      this
                    );
                  }
                  var s = (function (e) {
                      return e && e.__esModule ? e : { default: e };
                    })(e),
                    i =
                      Object.assign ||
                      function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                          var s = arguments[t];
                          for (var i in s)
                            Object.prototype.hasOwnProperty.call(s, i) &&
                              (e[i] = s[i]);
                        }
                        return e;
                      };
                  !(function () {
                    function e(e, t) {
                      t = t || { bubbles: !1, cancelable: !1, detail: void 0 };
                      var s = document.createEvent("CustomEvent");
                      return (
                        s.initCustomEvent(e, t.bubbles, t.cancelable, t.detail),
                        s
                      );
                    }
                    if ("function" == typeof window.CustomEvent) return !1;
                    (e.prototype = window.Event.prototype),
                      (window.CustomEvent = e);
                  })(),
                    (window.utils = s.default),
                    (window.lgData = { uid: 0 }),
                    (window.lgModules = {});
                  var n = {
                    mode: "lg-slide",
                    cssEasing: "ease",
                    easing: "linear",
                    speed: 600,
                    height: "100%",
                    width: "100%",
                    addClass: "",
                    startClass: "lg-start-zoom",
                    backdropDuration: 150,
                    hideBarsDelay: 6e3,
                    useLeft: !1,
                    closable: !0,
                    loop: !0,
                    escKey: !0,
                    keyPress: !0,
                    controls: !0,
                    slideEndAnimatoin: !0,
                    hideControlOnEnd: !1,
                    mousewheel: !1,
                    getCaptionFromTitleOrAlt: !0,
                    appendSubHtmlTo: ".lg-sub-html",
                    subHtmlSelectorRelative: !1,
                    preload: 1,
                    showAfterLoad: !0,
                    selector: "",
                    selectWithin: "",
                    nextHtml: "",
                    prevHtml: "",
                    index: !1,
                    iframeMaxWidth: "100%",
                    download: !0,
                    counter: !0,
                    appendCounterTo: ".lg-toolbar",
                    swipeThreshold: 50,
                    enableSwipe: !0,
                    enableDrag: !0,
                    dynamic: !1,
                    dynamicEl: [],
                    galleryId: 1,
                  };
                  (t.prototype.init = function () {
                    var e = this;
                    e.s.preload > e.items.length &&
                      (e.s.preload = e.items.length);
                    var t = window.location.hash;
                    if (
                      (t.indexOf("lg=" + this.s.galleryId) > 0 &&
                        ((e.index = parseInt(t.split("&slide=")[1], 10)),
                        s.default.addClass(document.body, "lg-from-hash"),
                        s.default.hasClass(document.body, "lg-on") ||
                          (s.default.addClass(document.body, "lg-on"),
                          setTimeout(function () {
                            e.build(e.index);
                          }))),
                      e.s.dynamic)
                    )
                      s.default.trigger(this.el, "onBeforeOpen"),
                        (e.index = e.s.index || 0),
                        s.default.hasClass(document.body, "lg-on") ||
                          (s.default.addClass(document.body, "lg-on"),
                          setTimeout(function () {
                            e.build(e.index);
                          }));
                    else
                      for (var i = 0; i < e.items.length; i++)
                        !(function (t) {
                          s.default.on(
                            e.items[t],
                            "click.lgcustom",
                            function (i) {
                              i.preventDefault(),
                                s.default.trigger(e.el, "onBeforeOpen"),
                                (e.index = e.s.index || t),
                                s.default.hasClass(document.body, "lg-on") ||
                                  (e.build(e.index),
                                  s.default.addClass(document.body, "lg-on"));
                            }
                          );
                        })(i);
                  }),
                    (t.prototype.build = function (e) {
                      var t = this;
                      for (var i in (t.structure(), window.lgModules))
                        t.modules[i] = new window.lgModules[i](t.el);
                      t.slide(e, !1, !1),
                        t.s.keyPress && t.keyPress(),
                        t.items.length > 1 &&
                          (t.arrow(),
                          setTimeout(function () {
                            t.enableDrag(), t.enableSwipe();
                          }, 50),
                          t.s.mousewheel && t.mousewheel()),
                        t.counter(),
                        t.closeGallery(),
                        s.default.trigger(t.el, "onAfterOpen"),
                        s.default.on(
                          t.outer,
                          "mousemove.lg click.lg touchstart.lg",
                          function () {
                            s.default.removeClass(t.outer, "lg-hide-items"),
                              clearTimeout(t.hideBartimeout),
                              (t.hideBartimeout = setTimeout(function () {
                                s.default.addClass(t.outer, "lg-hide-items");
                              }, t.s.hideBarsDelay));
                          }
                        );
                    }),
                    (t.prototype.structure = function () {
                      var e,
                        t = "",
                        i = "",
                        n = 0,
                        a = "",
                        r = this;
                      for (
                        document.body.insertAdjacentHTML(
                          "beforeend",
                          '<div class="lg-backdrop"></div>'
                        ),
                          s.default.setVendor(
                            document.querySelector(".lg-backdrop"),
                            "TransitionDuration",
                            this.s.backdropDuration + "ms"
                          ),
                          n = 0;
                        n < this.items.length;
                        n++
                      )
                        t += '<div class="lg-item"></div>';
                      if (
                        (this.s.controls &&
                          this.items.length > 1 &&
                          (i =
                            '<div class="lg-actions"><div class="lg-prev lg-icon">' +
                            this.s.prevHtml +
                            '</div><div class="lg-next lg-icon">' +
                            this.s.nextHtml +
                            "</div></div>"),
                        ".lg-sub-html" === this.s.appendSubHtmlTo &&
                          (a = '<div class="lg-sub-html"></div>'),
                        (e =
                          '<div class="lg-outer ' +
                          this.s.addClass +
                          " " +
                          this.s.startClass +
                          '"><div class="lg" style="width:' +
                          this.s.width +
                          "; height:" +
                          this.s.height +
                          '"><div class="lg-inner">' +
                          t +
                          '</div><div class="lg-toolbar group"><span class="lg-close lg-icon"></span></div>' +
                          i +
                          a +
                          "</div></div>"),
                        document.body.insertAdjacentHTML("beforeend", e),
                        (this.outer = document.querySelector(".lg-outer")),
                        (this.___slide =
                          this.outer.querySelectorAll(".lg-item")),
                        this.s.useLeft
                          ? (s.default.addClass(this.outer, "lg-use-left"),
                            (this.s.mode = "lg-slide"))
                          : s.default.addClass(this.outer, "lg-use-css3"),
                        r.setTop(),
                        s.default.on(
                          window,
                          "resize.lg orientationchange.lg",
                          function () {
                            setTimeout(function () {
                              r.setTop();
                            }, 100);
                          }
                        ),
                        s.default.addClass(
                          this.___slide[this.index],
                          "lg-current"
                        ),
                        this.doCss()
                          ? s.default.addClass(this.outer, "lg-css3")
                          : (s.default.addClass(this.outer, "lg-css"),
                            (this.s.speed = 0)),
                        s.default.addClass(this.outer, this.s.mode),
                        this.s.enableDrag &&
                          this.items.length > 1 &&
                          s.default.addClass(this.outer, "lg-grab"),
                        this.s.showAfterLoad &&
                          s.default.addClass(this.outer, "lg-show-after-load"),
                        this.doCss())
                      ) {
                        var o = this.outer.querySelector(".lg-inner");
                        s.default.setVendor(
                          o,
                          "TransitionTimingFunction",
                          this.s.cssEasing
                        ),
                          s.default.setVendor(
                            o,
                            "TransitionDuration",
                            this.s.speed + "ms"
                          );
                      }
                      setTimeout(function () {
                        s.default.addClass(
                          document.querySelector(".lg-backdrop"),
                          "in"
                        );
                      }),
                        setTimeout(function () {
                          s.default.addClass(r.outer, "lg-visible");
                        }, this.s.backdropDuration),
                        this.s.download &&
                          this.outer
                            .querySelector(".lg-toolbar")
                            .insertAdjacentHTML(
                              "beforeend",
                              '<a id="lg-download" target="_blank" download class="lg-download lg-icon"></a>'
                            ),
                        (this.prevScrollTop =
                          document.documentElement.scrollTop ||
                          document.body.scrollTop);
                    }),
                    (t.prototype.setTop = function () {
                      if ("100%" !== this.s.height) {
                        var e = window.innerHeight,
                          t = (e - parseInt(this.s.height, 10)) / 2,
                          s = this.outer.querySelector(".lg");
                        e >= parseInt(this.s.height, 10)
                          ? (s.style.top = t + "px")
                          : (s.style.top = "0px");
                      }
                    }),
                    (t.prototype.doCss = function () {
                      return !!(function () {
                        var e = [
                            "transition",
                            "MozTransition",
                            "WebkitTransition",
                            "OTransition",
                            "msTransition",
                            "KhtmlTransition",
                          ],
                          t = document.documentElement,
                          s = 0;
                        for (s = 0; s < e.length; s++)
                          if (e[s] in t.style) return !0;
                      })();
                    }),
                    (t.prototype.isVideo = function (e, t) {
                      var s;
                      if (
                        ((s = this.s.dynamic
                          ? this.s.dynamicEl[t].html
                          : this.items[t].getAttribute("data-html")),
                        !e && s)
                      )
                        return { html5: !0 };
                      var i = e.match(
                          /\/\/(?:www\.)?youtu(?:\.be|be\.com|be-nocookie\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)/i
                        ),
                        n = e.match(/\/\/(?:www\.)?vimeo.com\/([0-9a-z\-_]+)/i),
                        a = e.match(/\/\/(?:www\.)?dai.ly\/([0-9a-z\-_]+)/i),
                        r = e.match(
                          /\/\/(?:www\.)?(?:vk\.com|vkontakte\.ru)\/(?:video_ext\.php\?)(.*)/i
                        );
                      return i
                        ? { youtube: i }
                        : n
                        ? { vimeo: n }
                        : a
                        ? { dailymotion: a }
                        : r
                        ? { vk: r }
                        : void 0;
                    }),
                    (t.prototype.counter = function () {
                      this.s.counter &&
                        this.outer
                          .querySelector(this.s.appendCounterTo)
                          .insertAdjacentHTML(
                            "beforeend",
                            '<div id="lg-counter"><span id="lg-counter-current">' +
                              (parseInt(this.index, 10) + 1) +
                              '</span> / <span id="lg-counter-all">' +
                              this.items.length +
                              "</span></div>"
                          );
                    }),
                    (t.prototype.addHtml = function (e) {
                      var t,
                        i = null;
                      if (
                        (this.s.dynamic
                          ? (i = this.s.dynamicEl[e].subHtml)
                          : ((i = (t = this.items[e]).getAttribute(
                              "data-sub-html"
                            )),
                            this.s.getCaptionFromTitleOrAlt &&
                              !i &&
                              (i = t.getAttribute("title")) &&
                              t.querySelector("img") &&
                              (i = t.querySelector("img").getAttribute("alt"))),
                        null != i)
                      ) {
                        var n = i.substring(0, 1);
                        ("." !== n && "#" !== n) ||
                          (i =
                            this.s.subHtmlSelectorRelative && !this.s.dynamic
                              ? t.querySelector(i).innerHTML
                              : document.querySelector(i).innerHTML);
                      } else i = "";
                      ".lg-sub-html" === this.s.appendSubHtmlTo
                        ? (this.outer.querySelector(
                            this.s.appendSubHtmlTo
                          ).innerHTML = i)
                        : this.___slide[e].insertAdjacentHTML("beforeend", i),
                        null != i &&
                          ("" === i
                            ? s.default.addClass(
                                this.outer.querySelector(
                                  this.s.appendSubHtmlTo
                                ),
                                "lg-empty-html"
                              )
                            : s.default.removeClass(
                                this.outer.querySelector(
                                  this.s.appendSubHtmlTo
                                ),
                                "lg-empty-html"
                              )),
                        s.default.trigger(this.el, "onAfterAppendSubHtml", {
                          index: e,
                        });
                    }),
                    (t.prototype.preload = function (e) {
                      var t = 1,
                        s = 1;
                      for (
                        t = 1;
                        t <= this.s.preload && !(t >= this.items.length - e);
                        t++
                      )
                        this.loadContent(e + t, !1, 0);
                      for (s = 1; s <= this.s.preload && !(e - s < 0); s++)
                        this.loadContent(e - s, !1, 0);
                    }),
                    (t.prototype.loadContent = function (e, t, i) {
                      var n,
                        a,
                        r,
                        o,
                        l,
                        d,
                        c = this,
                        u = !1,
                        p = function (e) {
                          for (var t = [], s = [], i = 0; i < e.length; i++) {
                            var n = e[i].split(" ");
                            "" === n[0] && n.splice(0, 1),
                              s.push(n[0]),
                              t.push(n[1]);
                          }
                          for (
                            var r = window.innerWidth, o = 0;
                            o < t.length;
                            o++
                          )
                            if (parseInt(t[o], 10) > r) {
                              a = s[o];
                              break;
                            }
                        };
                      c.s.dynamic
                        ? (c.s.dynamicEl[e].poster &&
                            ((u = !0), (r = c.s.dynamicEl[e].poster)),
                          (d = c.s.dynamicEl[e].html),
                          (a = c.s.dynamicEl[e].src),
                          c.s.dynamicEl[e].responsive &&
                            p(c.s.dynamicEl[e].responsive.split(",")),
                          (o = c.s.dynamicEl[e].srcset),
                          (l = c.s.dynamicEl[e].sizes))
                        : (c.items[e].getAttribute("data-poster") &&
                            ((u = !0),
                            (r = c.items[e].getAttribute("data-poster"))),
                          (d = c.items[e].getAttribute("data-html")),
                          (a =
                            c.items[e].getAttribute("href") ||
                            c.items[e].getAttribute("data-src")),
                          c.items[e].getAttribute("data-responsive") &&
                            p(
                              c.items[e]
                                .getAttribute("data-responsive")
                                .split(",")
                            ),
                          (o = c.items[e].getAttribute("data-srcset")),
                          (l = c.items[e].getAttribute("data-sizes")));
                      var h = !1;
                      c.s.dynamic
                        ? c.s.dynamicEl[e].iframe && (h = !0)
                        : "true" === c.items[e].getAttribute("data-iframe") &&
                          (h = !0);
                      var f = c.isVideo(a, e);
                      if (!s.default.hasClass(c.___slide[e], "lg-loaded")) {
                        if (h)
                          c.___slide[e].insertAdjacentHTML(
                            "afterbegin",
                            '<div class="lg-video-cont" style="max-width:' +
                              c.s.iframeMaxWidth +
                              '"><div class="lg-video"><iframe class="lg-object" frameborder="0" src="' +
                              a +
                              '"  allowfullscreen="true"></iframe></div></div>'
                          );
                        else if (u) {
                          var m;
                          (m =
                            f && f.youtube
                              ? "lg-has-youtube"
                              : f && f.vimeo
                              ? "lg-has-vimeo"
                              : "lg-has-html5"),
                            c.___slide[e].insertAdjacentHTML(
                              "beforeend",
                              '<div class="lg-video-cont ' +
                                m +
                                ' "><div class="lg-video"><span class="lg-video-play"></span><img class="lg-object lg-has-poster" src="' +
                                r +
                                '" /></div></div>'
                            );
                        } else
                          f
                            ? (c.___slide[e].insertAdjacentHTML(
                                "beforeend",
                                '<div class="lg-video-cont "><div class="lg-video"></div></div>'
                              ),
                              s.default.trigger(c.el, "hasVideo", {
                                index: e,
                                src: a,
                                html: d,
                              }))
                            : c.___slide[e].insertAdjacentHTML(
                                "beforeend",
                                '<div class="lg-img-wrap"><img class="lg-object lg-image" src="' +
                                  a +
                                  '" /></div>'
                              );
                        if (
                          (s.default.trigger(c.el, "onAferAppendSlide", {
                            index: e,
                          }),
                          (n = c.___slide[e].querySelector(".lg-object")),
                          l && n.setAttribute("sizes", l),
                          o)
                        ) {
                          n.setAttribute("srcset", o);
                          try {
                            picturefill({ elements: [n[0]] });
                          } catch (e) {
                            console.error(
                              "Make sure you have included Picturefill version 2"
                            );
                          }
                        }
                        ".lg-sub-html" !== this.s.appendSubHtmlTo &&
                          c.addHtml(e),
                          s.default.addClass(c.___slide[e], "lg-loaded");
                      }
                      s.default.on(
                        c.___slide[e].querySelector(".lg-object"),
                        "load.lg error.lg",
                        function () {
                          var t = 0;
                          i &&
                            !s.default.hasClass(
                              document.body,
                              "lg-from-hash"
                            ) &&
                            (t = i),
                            setTimeout(function () {
                              s.default.addClass(c.___slide[e], "lg-complete"),
                                s.default.trigger(c.el, "onSlideItemLoad", {
                                  index: e,
                                  delay: i || 0,
                                });
                            }, t);
                        }
                      ),
                        f &&
                          f.html5 &&
                          !u &&
                          s.default.addClass(c.___slide[e], "lg-complete"),
                        !0 === t &&
                          (s.default.hasClass(c.___slide[e], "lg-complete")
                            ? c.preload(e)
                            : s.default.on(
                                c.___slide[e].querySelector(".lg-object"),
                                "load.lg error.lg",
                                function () {
                                  c.preload(e);
                                }
                              ));
                    }),
                    (t.prototype.slide = function (e, t, i) {
                      for (var n = 0, a = 0; a < this.___slide.length; a++)
                        if (
                          s.default.hasClass(this.___slide[a], "lg-current")
                        ) {
                          n = a;
                          break;
                        }
                      var r = this;
                      if (!r.lGalleryOn || n !== e) {
                        var o = this.___slide.length,
                          l = r.lGalleryOn ? this.s.speed : 0,
                          d = !1,
                          c = !1;
                        if (!r.lgBusy) {
                          var u;
                          if (this.s.download)
                            (u = r.s.dynamic
                              ? !1 !== r.s.dynamicEl[e].downloadUrl &&
                                (r.s.dynamicEl[e].downloadUrl ||
                                  r.s.dynamicEl[e].src)
                              : "false" !==
                                  r.items[e].getAttribute(
                                    "data-download-url"
                                  ) &&
                                (r.items[e].getAttribute("data-download-url") ||
                                  r.items[e].getAttribute("href") ||
                                  r.items[e].getAttribute("data-src")))
                              ? (document
                                  .getElementById("lg-download")
                                  .setAttribute("href", u),
                                s.default.removeClass(
                                  r.outer,
                                  "lg-hide-download"
                                ))
                              : s.default.addClass(r.outer, "lg-hide-download");
                          if (
                            (s.default.trigger(r.el, "onBeforeSlide", {
                              prevIndex: n,
                              index: e,
                              fromTouch: t,
                              fromThumb: i,
                            }),
                            (r.lgBusy = !0),
                            clearTimeout(r.hideBartimeout),
                            ".lg-sub-html" === this.s.appendSubHtmlTo &&
                              setTimeout(function () {
                                r.addHtml(e);
                              }, l),
                            this.arrowDisable(e),
                            t)
                          ) {
                            var p = e - 1,
                              h = e + 1;
                            ((0 === e && n === o - 1) ||
                              (e === o - 1 && 0 === n)) &&
                              ((h = 0), (p = o - 1)),
                              s.default.removeClass(
                                r.outer.querySelector(".lg-prev-slide"),
                                "lg-prev-slide"
                              ),
                              s.default.removeClass(
                                r.outer.querySelector(".lg-current"),
                                "lg-current"
                              ),
                              s.default.removeClass(
                                r.outer.querySelector(".lg-next-slide"),
                                "lg-next-slide"
                              ),
                              s.default.addClass(
                                r.___slide[p],
                                "lg-prev-slide"
                              ),
                              s.default.addClass(
                                r.___slide[h],
                                "lg-next-slide"
                              ),
                              s.default.addClass(r.___slide[e], "lg-current");
                          } else {
                            s.default.addClass(r.outer, "lg-no-trans");
                            for (var f = 0; f < this.___slide.length; f++)
                              s.default.removeClass(
                                this.___slide[f],
                                "lg-prev-slide"
                              ),
                                s.default.removeClass(
                                  this.___slide[f],
                                  "lg-next-slide"
                                );
                            e < n
                              ? ((c = !0),
                                0 !== e ||
                                  n !== o - 1 ||
                                  i ||
                                  ((c = !1), (d = !0)))
                              : e > n &&
                                ((d = !0),
                                e !== o - 1 ||
                                  0 !== n ||
                                  i ||
                                  ((c = !0), (d = !1))),
                              c
                                ? (s.default.addClass(
                                    this.___slide[e],
                                    "lg-prev-slide"
                                  ),
                                  s.default.addClass(
                                    this.___slide[n],
                                    "lg-next-slide"
                                  ))
                                : d &&
                                  (s.default.addClass(
                                    this.___slide[e],
                                    "lg-next-slide"
                                  ),
                                  s.default.addClass(
                                    this.___slide[n],
                                    "lg-prev-slide"
                                  )),
                              setTimeout(function () {
                                s.default.removeClass(
                                  r.outer.querySelector(".lg-current"),
                                  "lg-current"
                                ),
                                  s.default.addClass(
                                    r.___slide[e],
                                    "lg-current"
                                  ),
                                  s.default.removeClass(r.outer, "lg-no-trans");
                              }, 50);
                          }
                          r.lGalleryOn
                            ? (setTimeout(function () {
                                r.loadContent(e, !0, 0);
                              }, this.s.speed + 50),
                              setTimeout(function () {
                                (r.lgBusy = !1),
                                  s.default.trigger(r.el, "onAfterSlide", {
                                    prevIndex: n,
                                    index: e,
                                    fromTouch: t,
                                    fromThumb: i,
                                  });
                              }, this.s.speed))
                            : (r.loadContent(e, !0, r.s.backdropDuration),
                              (r.lgBusy = !1),
                              s.default.trigger(r.el, "onAfterSlide", {
                                prevIndex: n,
                                index: e,
                                fromTouch: t,
                                fromThumb: i,
                              })),
                            (r.lGalleryOn = !0),
                            this.s.counter &&
                              document.getElementById("lg-counter-current") &&
                              (document.getElementById(
                                "lg-counter-current"
                              ).innerHTML = e + 1);
                        }
                      }
                    }),
                    (t.prototype.goToNextSlide = function (e) {
                      var t = this;
                      t.lgBusy ||
                        (t.index + 1 < t.___slide.length
                          ? (t.index++,
                            s.default.trigger(t.el, "onBeforeNextSlide", {
                              index: t.index,
                            }),
                            t.slide(t.index, e, !1))
                          : t.s.loop
                          ? ((t.index = 0),
                            s.default.trigger(t.el, "onBeforeNextSlide", {
                              index: t.index,
                            }),
                            t.slide(t.index, e, !1))
                          : t.s.slideEndAnimatoin &&
                            (s.default.addClass(t.outer, "lg-right-end"),
                            setTimeout(function () {
                              s.default.removeClass(t.outer, "lg-right-end");
                            }, 400)));
                    }),
                    (t.prototype.goToPrevSlide = function (e) {
                      var t = this;
                      t.lgBusy ||
                        (t.index > 0
                          ? (t.index--,
                            s.default.trigger(t.el, "onBeforePrevSlide", {
                              index: t.index,
                              fromTouch: e,
                            }),
                            t.slide(t.index, e, !1))
                          : t.s.loop
                          ? ((t.index = t.items.length - 1),
                            s.default.trigger(t.el, "onBeforePrevSlide", {
                              index: t.index,
                              fromTouch: e,
                            }),
                            t.slide(t.index, e, !1))
                          : t.s.slideEndAnimatoin &&
                            (s.default.addClass(t.outer, "lg-left-end"),
                            setTimeout(function () {
                              s.default.removeClass(t.outer, "lg-left-end");
                            }, 400)));
                    }),
                    (t.prototype.keyPress = function () {
                      var e = this;
                      this.items.length > 1 &&
                        s.default.on(window, "keyup.lg", function (t) {
                          e.items.length > 1 &&
                            (37 === t.keyCode &&
                              (t.preventDefault(), e.goToPrevSlide()),
                            39 === t.keyCode &&
                              (t.preventDefault(), e.goToNextSlide()));
                        }),
                        s.default.on(window, "keydown.lg", function (t) {
                          !0 === e.s.escKey &&
                            27 === t.keyCode &&
                            (t.preventDefault(),
                            s.default.hasClass(e.outer, "lg-thumb-open")
                              ? s.default.removeClass(e.outer, "lg-thumb-open")
                              : e.destroy());
                        });
                    }),
                    (t.prototype.arrow = function () {
                      var e = this;
                      s.default.on(
                        this.outer.querySelector(".lg-prev"),
                        "click.lg",
                        function () {
                          e.goToPrevSlide();
                        }
                      ),
                        s.default.on(
                          this.outer.querySelector(".lg-next"),
                          "click.lg",
                          function () {
                            e.goToNextSlide();
                          }
                        );
                    }),
                    (t.prototype.arrowDisable = function (e) {
                      if (!this.s.loop && this.s.hideControlOnEnd) {
                        var t = this.outer.querySelector(".lg-next"),
                          i = this.outer.querySelector(".lg-prev");
                        e + 1 < this.___slide.length
                          ? (t.removeAttribute("disabled"),
                            s.default.removeClass(t, "disabled"))
                          : (t.setAttribute("disabled", "disabled"),
                            s.default.addClass(t, "disabled")),
                          e > 0
                            ? (i.removeAttribute("disabled"),
                              s.default.removeClass(i, "disabled"))
                            : (i.setAttribute("disabled", "disabled"),
                              s.default.addClass(i, "disabled"));
                      }
                    }),
                    (t.prototype.setTranslate = function (e, t, i) {
                      this.s.useLeft
                        ? (e.style.left = t)
                        : s.default.setVendor(
                            e,
                            "Transform",
                            "translate3d(" + t + "px, " + i + "px, 0px)"
                          );
                    }),
                    (t.prototype.touchMove = function (e, t) {
                      var i = t - e;
                      Math.abs(i) > 15 &&
                        (s.default.addClass(this.outer, "lg-dragging"),
                        this.setTranslate(this.___slide[this.index], i, 0),
                        this.setTranslate(
                          document.querySelector(".lg-prev-slide"),
                          -this.___slide[this.index].clientWidth + i,
                          0
                        ),
                        this.setTranslate(
                          document.querySelector(".lg-next-slide"),
                          this.___slide[this.index].clientWidth + i,
                          0
                        ));
                    }),
                    (t.prototype.touchEnd = function (e) {
                      var t = this;
                      "lg-slide" !== t.s.mode &&
                        s.default.addClass(t.outer, "lg-slide");
                      for (var i = 0; i < this.___slide.length; i++)
                        s.default.hasClass(this.___slide[i], "lg-current") ||
                          s.default.hasClass(
                            this.___slide[i],
                            "lg-prev-slide"
                          ) ||
                          s.default.hasClass(
                            this.___slide[i],
                            "lg-next-slide"
                          ) ||
                          (this.___slide[i].style.opacity = "0");
                      setTimeout(function () {
                        s.default.removeClass(t.outer, "lg-dragging"),
                          e < 0 && Math.abs(e) > t.s.swipeThreshold
                            ? t.goToNextSlide(!0)
                            : e > 0 && Math.abs(e) > t.s.swipeThreshold
                            ? t.goToPrevSlide(!0)
                            : Math.abs(e) < 5 &&
                              s.default.trigger(t.el, "onSlideClick");
                        for (var i = 0; i < t.___slide.length; i++)
                          t.___slide[i].removeAttribute("style");
                      }),
                        setTimeout(function () {
                          s.default.hasClass(t.outer, "lg-dragging") ||
                            "lg-slide" === t.s.mode ||
                            s.default.removeClass(t.outer, "lg-slide");
                        }, t.s.speed + 100);
                    }),
                    (t.prototype.enableSwipe = function () {
                      var e = this,
                        t = 0,
                        i = 0,
                        n = !1;
                      if (e.s.enableSwipe && e.isTouch && e.doCss()) {
                        for (var a = 0; a < e.___slide.length; a++)
                          s.default.on(
                            e.___slide[a],
                            "touchstart.lg",
                            function (i) {
                              s.default.hasClass(e.outer, "lg-zoomed") ||
                                e.lgBusy ||
                                (i.preventDefault(),
                                e.manageSwipeClass(),
                                (t = i.targetTouches[0].pageX));
                            }
                          );
                        for (var r = 0; r < e.___slide.length; r++)
                          s.default.on(
                            e.___slide[r],
                            "touchmove.lg",
                            function (a) {
                              s.default.hasClass(e.outer, "lg-zoomed") ||
                                (a.preventDefault(),
                                (i = a.targetTouches[0].pageX),
                                e.touchMove(t, i),
                                (n = !0));
                            }
                          );
                        for (var o = 0; o < e.___slide.length; o++)
                          s.default.on(
                            e.___slide[o],
                            "touchend.lg",
                            function () {
                              s.default.hasClass(e.outer, "lg-zoomed") ||
                                (n
                                  ? ((n = !1), e.touchEnd(i - t))
                                  : s.default.trigger(e.el, "onSlideClick"));
                            }
                          );
                      }
                    }),
                    (t.prototype.enableDrag = function () {
                      var e = this,
                        t = 0,
                        i = 0,
                        n = !1,
                        a = !1;
                      if (e.s.enableDrag && !e.isTouch && e.doCss()) {
                        for (var r = 0; r < e.___slide.length; r++)
                          s.default.on(
                            e.___slide[r],
                            "mousedown.lg",
                            function (i) {
                              s.default.hasClass(e.outer, "lg-zoomed") ||
                                ((s.default.hasClass(i.target, "lg-object") ||
                                  s.default.hasClass(
                                    i.target,
                                    "lg-video-play"
                                  )) &&
                                  (i.preventDefault(),
                                  e.lgBusy ||
                                    (e.manageSwipeClass(),
                                    (t = i.pageX),
                                    (n = !0),
                                    (e.outer.scrollLeft += 1),
                                    (e.outer.scrollLeft -= 1),
                                    s.default.removeClass(e.outer, "lg-grab"),
                                    s.default.addClass(e.outer, "lg-grabbing"),
                                    s.default.trigger(e.el, "onDragstart"))));
                            }
                          );
                        s.default.on(window, "mousemove.lg", function (r) {
                          n &&
                            ((a = !0),
                            (i = r.pageX),
                            e.touchMove(t, i),
                            s.default.trigger(e.el, "onDragmove"));
                        }),
                          s.default.on(window, "mouseup.lg", function (r) {
                            a
                              ? ((a = !1),
                                e.touchEnd(i - t),
                                s.default.trigger(e.el, "onDragend"))
                              : (s.default.hasClass(r.target, "lg-object") ||
                                  s.default.hasClass(
                                    r.target,
                                    "lg-video-play"
                                  )) &&
                                s.default.trigger(e.el, "onSlideClick"),
                              n &&
                                ((n = !1),
                                s.default.removeClass(e.outer, "lg-grabbing"),
                                s.default.addClass(e.outer, "lg-grab"));
                          });
                      }
                    }),
                    (t.prototype.manageSwipeClass = function () {
                      var e = this.index + 1,
                        t = this.index - 1,
                        i = this.___slide.length;
                      this.s.loop &&
                        (0 === this.index
                          ? (t = i - 1)
                          : this.index === i - 1 && (e = 0));
                      for (var n = 0; n < this.___slide.length; n++)
                        s.default.removeClass(
                          this.___slide[n],
                          "lg-next-slide"
                        ),
                          s.default.removeClass(
                            this.___slide[n],
                            "lg-prev-slide"
                          );
                      t > -1 &&
                        s.default.addClass(this.___slide[t], "lg-prev-slide"),
                        s.default.addClass(this.___slide[e], "lg-next-slide");
                    }),
                    (t.prototype.mousewheel = function () {
                      var e = this;
                      s.default.on(e.outer, "mousewheel.lg", function (t) {
                        t.deltaY &&
                          (t.deltaY > 0 ? e.goToPrevSlide() : e.goToNextSlide(),
                          t.preventDefault());
                      });
                    }),
                    (t.prototype.closeGallery = function () {
                      var e = this,
                        t = !1;
                      s.default.on(
                        this.outer.querySelector(".lg-close"),
                        "click.lg",
                        function () {
                          e.destroy();
                        }
                      ),
                        e.s.closable &&
                          (s.default.on(e.outer, "mousedown.lg", function (e) {
                            t = !!(
                              s.default.hasClass(e.target, "lg-outer") ||
                              s.default.hasClass(e.target, "lg-item") ||
                              s.default.hasClass(e.target, "lg-img-wrap")
                            );
                          }),
                          s.default.on(e.outer, "mouseup.lg", function (i) {
                            (s.default.hasClass(i.target, "lg-outer") ||
                              s.default.hasClass(i.target, "lg-item") ||
                              (s.default.hasClass(i.target, "lg-img-wrap") &&
                                t)) &&
                              (s.default.hasClass(e.outer, "lg-dragging") ||
                                e.destroy());
                          }));
                    }),
                    (t.prototype.destroy = function (e) {
                      var t = this;
                      if (
                        (e || s.default.trigger(t.el, "onBeforeClose"),
                        (document.body.scrollTop = t.prevScrollTop),
                        (document.documentElement.scrollTop = t.prevScrollTop),
                        e)
                      ) {
                        if (!t.s.dynamic)
                          for (var i = 0; i < this.items.length; i++)
                            s.default.off(this.items[i], ".lg"),
                              s.default.off(this.items[i], ".lgcustom");
                        var n = t.el.getAttribute("lg-uid");
                        delete window.lgData[n], t.el.removeAttribute("lg-uid");
                      }
                      for (var a in (s.default.off(this.el, ".lgtm"),
                      window.lgModules))
                        t.modules[a] && t.modules[a].destroy(e);
                      (this.lGalleryOn = !1),
                        clearTimeout(t.hideBartimeout),
                        (this.hideBartimeout = !1),
                        s.default.off(window, ".lg"),
                        s.default.removeClass(document.body, "lg-on"),
                        s.default.removeClass(document.body, "lg-from-hash"),
                        t.outer && s.default.removeClass(t.outer, "lg-visible"),
                        s.default.removeClass(
                          document.querySelector(".lg-backdrop"),
                          "in"
                        ),
                        setTimeout(function () {
                          try {
                            t.outer && t.outer.parentNode.removeChild(t.outer),
                              document.querySelector(".lg-backdrop") &&
                                document
                                  .querySelector(".lg-backdrop")
                                  .parentNode.removeChild(
                                    document.querySelector(".lg-backdrop")
                                  ),
                              e || s.default.trigger(t.el, "onCloseAfter");
                          } catch (e) {}
                        }, t.s.backdropDuration + 50);
                    }),
                    (window.lightGallery = function (e, s) {
                      if (e)
                        try {
                          if (e.getAttribute("lg-uid"))
                            try {
                              window.lgData[e.getAttribute("lg-uid")].init();
                            } catch (e) {
                              console.error(
                                "lightGallery has not initiated properly"
                              );
                            }
                          else {
                            var i = "lg" + window.lgData.uid++;
                            (window.lgData[i] = new t(e, s)),
                              e.setAttribute("lg-uid", i);
                          }
                        } catch (e) {
                          console.error(
                            "lightGallery has not initiated properly"
                          );
                        }
                    });
                });
              },
              { "./lg-utils": 1 },
            ],
          },
          {},
          [2]
        )(2);
      });
    let _e = document.querySelectorAll("[data-gallery]");
    _e &&
      (function () {
        for (let e = 0; e < _e.length; e++) {
          const t = _e[e];
          lightGallery(t, { counter: !1, selector: "a", download: !1 });
        }
      })(),
      ymaps.ready(function () {
        if (document.getElementById("map")) {
          var e = new ymaps.Map("map", {
            controls: [],
            center: [48.012478, 23.5712],
            zoom: 18,
            controls: ["routePanelControl"],
          });
          let t = e.controls.get("routePanelControl"),
            s = "Тячев";
          document
            .getElementById("routeBtn")
            .addEventListener("click", function (e) {
              e.preventDefault(),
                ymaps.geolocation.get().then(function (e) {
                  let i = e.geoObjects.get(0).properties.get("text");
                  console.log(i),
                    t.routePanel.state.set({
                      type: "car",
                      formEnabled: !1,
                      from: i,
                      to: s,
                      toEnabled: !0,
                    });
                });
            });
          let i = new ymaps.Placemark(
            [48.012478, 23.5712],
            {},
            {
              hasBalloon: !1,
              hideIconOnBalloonOpen: !1,
              iconLayout: "default#imageWithContent",
              iconImageHref: "img/icons/marker-map.svg",
              iconImageSize: [40, 40],
              iconImageOffset: [-20, -20],
              iconContentOffset: [0, 0],
            }
          );
          e.geoObjects.add(i),
            e.behaviors.disable("drag"),
            document.documentElement.clientWidth < 992 &&
              e.behaviors.disable("scrollZoom");
        }
      });
    const Ce = document.querySelector(
      ".languages-dropdown__item._active"
    ).innerHTML;
    document.getElementById("dropdown").innerHTML = Ce;
    async function xe(e, t, s, i) {
      let n = await fetch(i, { method: "GET" });
      if (n.ok) {
        !(function (e, t, s) {
          const i = document.querySelector(t);
          e.products &&
            e.products.forEach((e) => {
              const t = e.id,
                n = e.image,
                a = e.title;
              let r = "";
              (r += '<div class="item-product__sizes">'),
                (r += `<div class="item-product__size">${e.height}</div>`),
                (r += `<div class="item-product__size">${e.square}</div>`),
                (r += "</div>");
              let o = "";
              (o +=
                '\n      <div class="item-block__inner item-product__inner">\n      '),
                (o += `<h3 class="item-block__title item-product__title">\n      ${a}\n      </h3>\t`),
                (o += r),
                (o +=
                  '<div class="item-product__footer">\n      <button type="button" class="item-product__button button">\n        <span>Ознакомиться</span>\n      </button>\n      <div class="item-product__price">1 000 000 грн</div>\n    </div>'),
                (o += "\n      </div>\n      ");
              let l = "";
              (l += '<a href="" class="item-product__link">'),
                (l += `\n     <div href="#" class="item-block__imb-ibg item-product__img">\n       <img src="img/catalog/${n}" alt="${a}">\n     </div>\n      `),
                (l += o),
                (l += "</a>");
              let d = "";
              (d += `<article data-pid="${t}" class="catalog-page__item item-block item-product">`),
                (d += l),
                (d += "</article>"),
                i.insertAdjacentHTML(s, d);
            });
          e.works &&
            e.works.forEach((e) => {
              const t = e.id,
                n = e.image,
                a = e.title;
              let r = "";
              (r += '<div class="item-product__footer works-promo__footer">'),
                (r +=
                  '<span class="button">\n      <span>Подробнее</span>\n    </span>'),
                (r += `<div class="item-product__size works-promo__size">${e.square}</div>`),
                (r += "</div>");
              let o = "";
              (o +=
                '\n    <div class="item-block__inner works-promo__inner">\n    '),
                (o += `<h3 class="item-block__title works-promo__title-small">\n    ${a}\n    </h3>\t`),
                (o += "\n    </div>\n    ");
              let l = "";
              (l += '<a href="" class="item-product__link works-promo__link">'),
                (l += `\n   <div href="#" class="item-block__imb-ibg item-product__img">\n     <img src="img/our-works/${n}" alt="${a}">\n   </div>\n    `),
                (l += o),
                (l += r),
                (l += "</a>");
              let d = "";
              (d += `<article data-pid="${t}" class="works-promo__item item-block item-product">`),
                (d += l),
                (d += "</article>"),
                i.insertAdjacentHTML(s, d);
            });
        })(await n.json(), t, s),
          e.remove();
      } else alert("Ошибка");
    }
    function Ee(e, t, s, i) {
      document.querySelector(t) &&
        (document.querySelector(t).onclick = function (n) {
          n.preventDefault();
          xe(n.target.closest(t), e, s, i);
        });
    }
    document.addEventListener("click", (e) => {
      const t = e.target;
      t.closest("#dropdown") &&
        document.querySelector(".languages-dropdown__items") &&
        (document
          .querySelector(".languages-dropdown__items")
          .classList.toggle("_active"),
        document.getElementById("dropdown").classList.toggle("_active")),
        t.closest(".languages-dropdown") ||
          (document.querySelector(".languages-dropdown__items") &&
            (document
              .querySelector(".languages-dropdown__items")
              .classList.remove("_active"),
            document.getElementById("dropdown").classList.remove("_active"))),
        t.closest(".languages-dropdown__item") &&
          document
            .querySelectorAll(".languages-dropdown__item")
            .forEach((e) => {
              e.classList.remove("_active"),
                t.closest(".languages-dropdown__item").classList.add("_active"),
                (document.getElementById("dropdown").innerHTML = t.closest(
                  ".languages-dropdown__item"
                ).innerHTML);
            });
    }),
      console.log(window.innerWidth),
      window.innerWidth <= 768 &&
        document.querySelector(".spollers-catalog__title") &&
        document
          .querySelector(".spollers-catalog__title")
          .classList.remove("_spoller-active"),
      Ee(
        "#catalog-items",
        ".catalog-page__show-more",
        "beforeEnd",
        "img/products.json"
      ),
      Ee(
        "#works-items",
        ".works-promo__show-more",
        "beforeEnd",
        "img/our-works.json"
      ),
      (window.FLS = !0),
      (function (e) {
        let t = new Image();
        (t.onload = t.onerror =
          function () {
            e(2 == t.height);
          }),
          (t.src =
            "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
      })(function (e) {
        let t = !0 === e ? "webp" : "no-webp";
        document.documentElement.classList.add(t);
      }),
      (function () {
        let e = document.querySelector(".icon-menu");
        e &&
          e.addEventListener("click", function (e) {
            o && (l(), document.documentElement.classList.toggle("menu-open"));
          });
      })(),
      (function () {
        const e = document.querySelectorAll("[data-spollers]");
        if (e.length > 0) {
          const t = Array.from(e).filter(function (e, t, s) {
            return !e.dataset.spollers.split(",")[0];
          });
          t.length && i(t);
          let s = p(e, "spollers");
          function i(e, t = !1) {
            e.forEach((e) => {
              (e = t ? e.item : e),
                t.matches || !t
                  ? (e.classList.add("_spoller-init"),
                    a(e),
                    e.addEventListener("click", o))
                  : (e.classList.remove("_spoller-init"),
                    a(e, !1),
                    e.removeEventListener("click", o));
            });
          }
          function a(e, t = !0) {
            const s = e.querySelectorAll("[data-spoller]");
            s.length > 0 &&
              s.forEach((e) => {
                t
                  ? (e.removeAttribute("tabindex"),
                    e.classList.contains("_spoller-active") ||
                      (e.nextElementSibling.hidden = !0))
                  : (e.setAttribute("tabindex", "-1"),
                    (e.nextElementSibling.hidden = !1));
              });
          }
          function o(e) {
            const t = e.target;
            if (t.closest("[data-spoller]")) {
              const s = t.closest("[data-spoller]"),
                i = s.closest("[data-spollers]"),
                n = !!i.hasAttribute("data-one-spoller");
              i.querySelectorAll("._slide").length ||
                (n && !s.classList.contains("_spoller-active") && l(i),
                s.classList.toggle("_spoller-active"),
                r(s.nextElementSibling, 500)),
                e.preventDefault();
            }
          }
          function l(e) {
            const t = e.querySelector("[data-spoller]._spoller-active");
            t &&
              (t.classList.remove("_spoller-active"),
              n(t.nextElementSibling, 500));
          }
          s &&
            s.length &&
            s.forEach((e) => {
              e.matchMedia.addEventListener("change", function () {
                i(e.itemsArray, e.matchMedia);
              }),
                i(e.itemsArray, e.matchMedia);
            });
        }
      })(),
      new i({}),
      (function () {
        const e = document.querySelectorAll(
          "input[placeholder],textarea[placeholder]"
        );
        e.length &&
          e.forEach((e) => {
            e.dataset.placeholder = e.placeholder;
          }),
          document.body.addEventListener("focusin", function (e) {
            const t = e.target;
            ("INPUT" !== t.tagName && "TEXTAREA" !== t.tagName) ||
              (t.dataset.placeholder && (t.placeholder = ""),
              t.classList.add("_form-focus"),
              t.parentElement.classList.add("_form-focus"),
              g.removeError(t));
          }),
          document.body.addEventListener("focusout", function (e) {
            const t = e.target;
            ("INPUT" !== t.tagName && "TEXTAREA" !== t.tagName) ||
              (t.dataset.placeholder && (t.placeholder = t.dataset.placeholder),
              t.classList.remove("_form-focus"),
              t.parentElement.classList.remove("_form-focus"),
              t.hasAttribute("data-validate") && g.validateInput(t));
          });
      })(),
      (m.selectModule = new f({})),
      (function () {
        function e(e) {
          if ("click" === e.type) {
            const t = e.target;
            if (t.closest("[data-goto]")) {
              const s = t.closest("[data-goto]"),
                i = s.dataset.goto ? s.dataset.goto : "",
                n = !!s.hasAttribute("data-goto-header"),
                a = s.dataset.gotoSpeed ? s.dataset.gotoSpeed : "500";
              h(i, n, a), e.preventDefault();
            }
          } else if ("watcherCallback" === e.type && e.detail) {
            const t = e.detail.entry,
              s = t.target;
            if ("navigator" === s.dataset.watch) {
              const e = s.id,
                i =
                  (document.querySelector("[data-goto]._navigator-active"),
                  document.querySelector(`[data-goto="${e}"]`));
              t.isIntersecting
                ? i && i.classList.add("_navigator-active")
                : i && i.classList.remove("_navigator-active");
            }
          }
        }
        document.addEventListener("click", e),
          document.addEventListener("watcherCallback", e);
      })();
  })();
})();
