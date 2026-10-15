var $c = { exports: {} }, Kl = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fp;
function lb() {
  if (Fp) return Kl;
  Fp = 1;
  var a = Symbol.for("react.transitional.element"), l = Symbol.for("react.fragment");
  function o(r, c, d) {
    var h = null;
    if (d !== void 0 && (h = "" + d), c.key !== void 0 && (h = "" + c.key), "key" in c) {
      d = {};
      for (var y in c)
        y !== "key" && (d[y] = c[y]);
    } else d = c;
    return c = d.ref, {
      $$typeof: a,
      type: r,
      key: h,
      ref: c !== void 0 ? c : null,
      props: d
    };
  }
  return Kl.Fragment = l, Kl.jsx = o, Kl.jsxs = o, Kl;
}
var Pp;
function ub() {
  return Pp || (Pp = 1, $c.exports = lb()), $c.exports;
}
var lt = ub(), tf = { exports: {} }, ot = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var kp;
function sb() {
  if (kp) return ot;
  kp = 1;
  var a = Symbol.for("react.transitional.element"), l = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), d = Symbol.for("react.consumer"), h = Symbol.for("react.context"), y = Symbol.for("react.forward_ref"), S = Symbol.for("react.suspense"), v = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), p = Symbol.for("react.activity"), b = Symbol.for("react.view_transition"), N = Symbol.iterator;
  function z(A) {
    return A === null || typeof A != "object" ? null : (A = N && A[N] || A["@@iterator"], typeof A == "function" ? A : null);
  }
  var U = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, w = Object.assign, B = {};
  function Y(A, j, $) {
    this.props = A, this.context = j, this.refs = B, this.updater = $ || U;
  }
  Y.prototype.isReactComponent = {}, Y.prototype.setState = function(A, j) {
    if (typeof A != "object" && typeof A != "function" && A != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, A, j, "setState");
  }, Y.prototype.forceUpdate = function(A) {
    this.updater.enqueueForceUpdate(this, A, "forceUpdate");
  };
  function q() {
  }
  q.prototype = Y.prototype;
  function X(A, j, $) {
    this.props = A, this.context = j, this.refs = B, this.updater = $ || U;
  }
  var et = X.prototype = new q();
  et.constructor = X, w(et, Y.prototype), et.isPureReactComponent = !0;
  var it = Array.isArray;
  function Z() {
  }
  var H = { H: null, A: null, T: null, S: null }, ut = Object.prototype.hasOwnProperty;
  function k(A, j, $) {
    var tt = $.ref;
    return {
      $$typeof: a,
      type: A,
      key: j,
      ref: tt !== void 0 ? tt : null,
      props: $
    };
  }
  function mt(A, j) {
    return k(A.type, j, A.props);
  }
  function At(A) {
    return typeof A == "object" && A !== null && A.$$typeof === a;
  }
  function It(A) {
    var j = { "=": "=0", ":": "=2" };
    return "$" + A.replace(/[=:]/g, function($) {
      return j[$];
    });
  }
  var Wt = /\/+/g;
  function zt(A, j) {
    return typeof A == "object" && A !== null && A.key != null ? It("" + A.key) : j.toString(36);
  }
  function L(A) {
    switch (A.status) {
      case "fulfilled":
        return A.value;
      case "rejected":
        throw A.reason;
      default:
        switch (typeof A.status == "string" ? A.then(Z, Z) : (A.status = "pending", A.then(
          function(j) {
            A.status === "pending" && (A.status = "fulfilled", A.value = j);
          },
          function(j) {
            A.status === "pending" && (A.status = "rejected", A.reason = j);
          }
        )), A.status) {
          case "fulfilled":
            return A.value;
          case "rejected":
            throw A.reason;
        }
    }
    throw A;
  }
  function at(A, j, $, tt, Tt) {
    var bt = typeof A;
    (bt === "undefined" || bt === "boolean") && (A = null);
    var xt = !1;
    if (A === null) xt = !0;
    else
      switch (bt) {
        case "bigint":
        case "string":
        case "number":
          xt = !0;
          break;
        case "object":
          switch (A.$$typeof) {
            case a:
            case l:
              xt = !0;
              break;
            case g:
              return xt = A._init, at(
                xt(A._payload),
                j,
                $,
                tt,
                Tt
              );
          }
      }
    if (xt)
      return Tt = Tt(A), xt = tt === "" ? "." + zt(A, 0) : tt, it(Tt) ? ($ = "", xt != null && ($ = xt.replace(Wt, "$&/") + "/"), at(Tt, j, $, "", function(Mn) {
        return Mn;
      })) : Tt != null && (At(Tt) && (Tt = mt(
        Tt,
        $ + (Tt.key == null || A && A.key === Tt.key ? "" : ("" + Tt.key).replace(
          Wt,
          "$&/"
        ) + "/") + xt
      )), j.push(Tt)), 1;
    xt = 0;
    var I = tt === "" ? "." : tt + ":";
    if (it(A))
      for (var st = 0; st < A.length; st++)
        tt = A[st], bt = I + zt(tt, st), xt += at(
          tt,
          j,
          $,
          bt,
          Tt
        );
    else if (st = z(A), typeof st == "function")
      for (A = st.call(A), st = 0; !(tt = A.next()).done; )
        tt = tt.value, bt = I + zt(tt, st++), xt += at(
          tt,
          j,
          $,
          bt,
          Tt
        );
    else if (bt === "object") {
      if (typeof A.then == "function")
        return at(
          L(A),
          j,
          $,
          tt,
          Tt
        );
      throw j = String(A), Error(
        "Objects are not valid as a React child (found: " + (j === "[object Object]" ? "object with keys {" + Object.keys(A).join(", ") + "}" : j) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return xt;
  }
  function J(A, j, $) {
    if (A == null) return A;
    var tt = [], Tt = 0;
    return at(A, tt, "", "", function(bt) {
      return j.call($, bt, Tt++);
    }), tt;
  }
  function ft(A) {
    if (A._status === -1) {
      var j = A._result, $ = j();
      $.then(
        function(tt) {
          (A._status === 0 || A._status === -1) && (A._status = 1, A._result = tt, $.status === void 0 && ($.status = "fulfilled", $.value = tt));
        },
        function(tt) {
          (A._status === 0 || A._status === -1) && (A._status = 2, A._result = tt, $.status === void 0 && ($.status = "rejected", $.reason = tt));
        }
      ), A._status === -1 && (A._status = 0, A._result = $);
    }
    if (A._status === 1) return A._result.default;
    throw A._result;
  }
  var dt = typeof reportError == "function" ? reportError : function(A) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var j = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof A == "object" && A !== null && typeof A.message == "string" ? String(A.message) : String(A),
        error: A
      });
      if (!window.dispatchEvent(j)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", A);
      return;
    }
    console.error(A);
  };
  function $t(A) {
    var j = H.T, $ = {};
    $.types = j !== null ? j.types : null, H.T = $;
    try {
      var tt = A(), Tt = H.S;
      Tt !== null && Tt($, tt), typeof tt == "object" && tt !== null && typeof tt.then == "function" && tt.then(Z, dt);
    } catch (bt) {
      dt(bt);
    } finally {
      j !== null && $.types !== null && (j.types = $.types), H.T = j;
    }
  }
  function ke(A) {
    var j = H.T;
    if (j !== null) {
      var $ = j.types;
      $ === null ? j.types = [A] : $.indexOf(A) === -1 && $.push(A);
    } else $t(ke.bind(null, A));
  }
  var Ei = {
    map: J,
    forEach: function(A, j, $) {
      J(
        A,
        function() {
          j.apply(this, arguments);
        },
        $
      );
    },
    count: function(A) {
      var j = 0;
      return J(A, function() {
        j++;
      }), j;
    },
    toArray: function(A) {
      return J(A, function(j) {
        return j;
      }) || [];
    },
    only: function(A) {
      if (!At(A))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return A;
    }
  };
  return ot.Activity = p, ot.Children = Ei, ot.Component = Y, ot.Fragment = o, ot.Profiler = c, ot.PureComponent = X, ot.StrictMode = r, ot.Suspense = S, ot.ViewTransition = b, ot.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = H, ot.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(A) {
      return H.H.useMemoCache(A);
    }
  }, ot.addTransitionType = ke, ot.cache = function(A) {
    return function() {
      return A.apply(null, arguments);
    };
  }, ot.cacheSignal = function() {
    return null;
  }, ot.cloneElement = function(A, j, $) {
    if (A == null)
      throw Error(
        "The argument must be a React element, but you passed " + A + "."
      );
    var tt = w({}, A.props), Tt = A.key;
    if (j != null)
      for (bt in j.key !== void 0 && (Tt = "" + j.key), j)
        !ut.call(j, bt) || bt === "key" || bt === "__self" || bt === "__source" || bt === "ref" && j.ref === void 0 || (tt[bt] = j[bt]);
    var bt = arguments.length - 2;
    if (bt === 1) tt.children = $;
    else if (1 < bt) {
      for (var xt = Array(bt), I = 0; I < bt; I++)
        xt[I] = arguments[I + 2];
      tt.children = xt;
    }
    return k(A.type, Tt, tt);
  }, ot.createContext = function(A) {
    return A = {
      $$typeof: h,
      _currentValue: A,
      _currentValue2: A,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, A.Provider = A, A.Consumer = {
      $$typeof: d,
      _context: A
    }, A;
  }, ot.createElement = function(A, j, $) {
    var tt, Tt = {}, bt = null;
    if (j != null)
      for (tt in j.key !== void 0 && (bt = "" + j.key), j)
        ut.call(j, tt) && tt !== "key" && tt !== "__self" && tt !== "__source" && (Tt[tt] = j[tt]);
    var xt = arguments.length - 2;
    if (xt === 1) Tt.children = $;
    else if (1 < xt) {
      for (var I = Array(xt), st = 0; st < xt; st++)
        I[st] = arguments[st + 2];
      Tt.children = I;
    }
    if (A && A.defaultProps)
      for (tt in xt = A.defaultProps, xt)
        Tt[tt] === void 0 && (Tt[tt] = xt[tt]);
    return k(A, bt, Tt);
  }, ot.createRef = function() {
    return { current: null };
  }, ot.forwardRef = function(A) {
    return { $$typeof: y, render: A };
  }, ot.isValidElement = At, ot.lazy = function(A) {
    return {
      $$typeof: g,
      _payload: { _status: -1, _result: A },
      _init: ft
    };
  }, ot.memo = function(A, j) {
    return {
      $$typeof: v,
      type: A,
      compare: j === void 0 ? null : j
    };
  }, ot.startTransition = $t, ot.unstable_useCacheRefresh = function() {
    return H.H.useCacheRefresh();
  }, ot.use = function(A) {
    return H.H.use(A);
  }, ot.useActionState = function(A, j, $) {
    return H.H.useActionState(A, j, $);
  }, ot.useCallback = function(A, j) {
    return H.H.useCallback(A, j);
  }, ot.useContext = function(A) {
    return H.H.useContext(A);
  }, ot.useDebugValue = function() {
  }, ot.useDeferredValue = function(A, j) {
    return H.H.useDeferredValue(A, j);
  }, ot.useEffect = function(A, j) {
    return H.H.useEffect(A, j);
  }, ot.useEffectEvent = function(A) {
    return H.H.useEffectEvent(A);
  }, ot.useId = function() {
    return H.H.useId();
  }, ot.useImperativeHandle = function(A, j, $) {
    return H.H.useImperativeHandle(A, j, $);
  }, ot.useInsertionEffect = function(A, j) {
    return H.H.useInsertionEffect(A, j);
  }, ot.useLayoutEffect = function(A, j) {
    return H.H.useLayoutEffect(A, j);
  }, ot.useMemo = function(A, j) {
    return H.H.useMemo(A, j);
  }, ot.useOptimistic = function(A, j) {
    return H.H.useOptimistic(A, j);
  }, ot.useReducer = function(A, j, $) {
    return H.H.useReducer(A, j, $);
  }, ot.useRef = function(A) {
    return H.H.useRef(A);
  }, ot.useState = function(A) {
    return H.H.useState(A);
  }, ot.useSyncExternalStore = function(A, j, $) {
    return H.H.useSyncExternalStore(
      A,
      j,
      $
    );
  }, ot.useTransition = function() {
    return H.H.useTransition();
  }, ot.version = "19.3.1", ot;
}
var Ip;
function Kf() {
  return Ip || (Ip = 1, tf.exports = sb()), tf.exports;
}
var Q = Kf(), ef = { exports: {} }, Jl = {}, nf = { exports: {} }, af = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wp;
function ob() {
  return Wp || (Wp = 1, (function(a) {
    function l(L, at) {
      var J = L.length;
      L.push(at);
      t: for (; 0 < J; ) {
        var ft = J - 1 >>> 1, dt = L[ft];
        if (0 < c(dt, at))
          L[ft] = at, L[J] = dt, J = ft;
        else break t;
      }
    }
    function o(L) {
      return L.length === 0 ? null : L[0];
    }
    function r(L) {
      if (L.length === 0) return null;
      var at = L[0], J = L.pop();
      if (J !== at) {
        L[0] = J;
        t: for (var ft = 0, dt = L.length, $t = dt >>> 1; ft < $t; ) {
          var ke = 2 * (ft + 1) - 1, Ei = L[ke], A = ke + 1, j = L[A];
          if (0 > c(Ei, J))
            A < dt && 0 > c(j, Ei) ? (L[ft] = j, L[A] = J, ft = A) : (L[ft] = Ei, L[ke] = J, ft = ke);
          else if (A < dt && 0 > c(j, J))
            L[ft] = j, L[A] = J, ft = A;
          else break t;
        }
      }
      return at;
    }
    function c(L, at) {
      var J = L.sortIndex - at.sortIndex;
      return J !== 0 ? J : L.id - at.id;
    }
    if (a.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var d = performance;
      a.unstable_now = function() {
        return d.now();
      };
    } else {
      var h = Date, y = h.now();
      a.unstable_now = function() {
        return h.now() - y;
      };
    }
    var S = [], v = [], g = 1, p = null, b = 3, N = !1, z = !1, U = !1, w = !1, B = typeof setTimeout == "function" ? setTimeout : null, Y = typeof clearTimeout == "function" ? clearTimeout : null, q = typeof setImmediate < "u" ? setImmediate : null;
    function X(L) {
      for (var at = o(v); at !== null; ) {
        if (at.callback === null) r(v);
        else if (at.startTime <= L)
          r(v), at.sortIndex = at.expirationTime, l(S, at);
        else break;
        at = o(v);
      }
    }
    function et(L) {
      if (U = !1, X(L), !z)
        if (o(S) !== null)
          z = !0, it || (it = !0, At());
        else {
          var at = o(v);
          at !== null && zt(et, at.startTime - L);
        }
    }
    var it = !1, Z = -1, H = 5, ut = -1;
    function k() {
      return w ? !0 : !(a.unstable_now() - ut < H);
    }
    function mt() {
      if (w = !1, it) {
        var L = a.unstable_now();
        ut = L;
        var at = !0;
        try {
          t: {
            z = !1, U && (U = !1, Y(Z), Z = -1), N = !0;
            var J = b;
            try {
              e: {
                for (X(L), p = o(S); p !== null && !(p.expirationTime > L && k()); ) {
                  var ft = p.callback;
                  if (typeof ft == "function") {
                    p.callback = null, b = p.priorityLevel;
                    var dt = ft(
                      p.expirationTime <= L
                    );
                    if (L = a.unstable_now(), typeof dt == "function") {
                      p.callback = dt, X(L), at = !0;
                      break e;
                    }
                    p === o(S) && r(S), X(L);
                  } else r(S);
                  p = o(S);
                }
                if (p !== null) at = !0;
                else {
                  var $t = o(v);
                  $t !== null && zt(
                    et,
                    $t.startTime - L
                  ), at = !1;
                }
              }
              break t;
            } finally {
              p = null, b = J, N = !1;
            }
            at = void 0;
          }
        } finally {
          at ? At() : it = !1;
        }
      }
    }
    var At;
    if (typeof q == "function")
      At = function() {
        q(mt);
      };
    else if (typeof MessageChannel < "u") {
      var It = new MessageChannel(), Wt = It.port2;
      It.port1.onmessage = mt, At = function() {
        Wt.postMessage(null);
      };
    } else
      At = function() {
        B(mt, 0);
      };
    function zt(L, at) {
      Z = B(function() {
        L(a.unstable_now());
      }, at);
    }
    a.unstable_IdlePriority = 5, a.unstable_ImmediatePriority = 1, a.unstable_LowPriority = 4, a.unstable_NormalPriority = 3, a.unstable_Profiling = null, a.unstable_UserBlockingPriority = 2, a.unstable_cancelCallback = function(L) {
      L.callback = null;
    }, a.unstable_forceFrameRate = function(L) {
      0 > L || 125 < L ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : H = 0 < L ? Math.floor(1e3 / L) : 5;
    }, a.unstable_getCurrentPriorityLevel = function() {
      return b;
    }, a.unstable_next = function(L) {
      switch (b) {
        case 1:
        case 2:
        case 3:
          var at = 3;
          break;
        default:
          at = b;
      }
      var J = b;
      b = at;
      try {
        return L();
      } finally {
        b = J;
      }
    }, a.unstable_requestPaint = function() {
      w = !0;
    }, a.unstable_runWithPriority = function(L, at) {
      switch (L) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          L = 3;
      }
      var J = b;
      b = L;
      try {
        return at();
      } finally {
        b = J;
      }
    }, a.unstable_scheduleCallback = function(L, at, J) {
      var ft = a.unstable_now();
      switch (typeof J == "object" && J !== null ? (J = J.delay, J = typeof J == "number" && 0 < J ? ft + J : ft) : J = ft, L) {
        case 1:
          var dt = -1;
          break;
        case 2:
          dt = 250;
          break;
        case 5:
          dt = 1073741823;
          break;
        case 4:
          dt = 1e4;
          break;
        default:
          dt = 5e3;
      }
      return dt = J + dt, L = {
        id: g++,
        callback: at,
        priorityLevel: L,
        startTime: J,
        expirationTime: dt,
        sortIndex: -1
      }, J > ft ? (L.sortIndex = J, l(v, L), o(S) === null && L === o(v) && (U ? (Y(Z), Z = -1) : U = !0, zt(et, J - ft))) : (L.sortIndex = dt, l(S, L), z || N || (z = !0, it || (it = !0, At()))), L;
    }, a.unstable_shouldYield = k, a.unstable_wrapCallback = function(L) {
      var at = b;
      return function() {
        var J = b;
        b = at;
        try {
          return L.apply(this, arguments);
        } finally {
          b = J;
        }
      };
    };
  })(af)), af;
}
var $p;
function rb() {
  return $p || ($p = 1, nf.exports = ob()), nf.exports;
}
var lf = { exports: {} }, fe = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tg;
function cb() {
  if (tg) return fe;
  tg = 1;
  var a = Kf();
  function l(g) {
    var p = "https://react.dev/errors/" + g;
    if (1 < arguments.length) {
      p += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var b = 2; b < arguments.length; b++)
        p += "&args[]=" + encodeURIComponent(arguments[b]);
    }
    return "Minified React error #" + g + "; visit " + p + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function o() {
  }
  var r = {
    d: {
      f: o,
      r: function() {
        throw Error(l(522));
      },
      D: o,
      C: o,
      L: o,
      m: o,
      X: o,
      S: o,
      M: o
    },
    p: 0,
    findDOMNode: null
  }, c = Symbol.for("react.portal"), d = Symbol.for("react.recoverable"), h = Symbol.for("react.optimistic_key");
  function y(g, p, b) {
    var N = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: c,
      key: N == null ? null : N === h ? h : "" + N,
      children: g,
      containerInfo: p,
      implementation: b
    };
  }
  var S = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function v(g, p) {
    if (g === "font") return "";
    if (typeof p == "string")
      return p === "use-credentials" ? p : "";
  }
  return fe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r, fe.browser = function(g) {
    return { $$typeof: d, _reason: g };
  }, fe.createPortal = function(g, p) {
    var b = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!p || p.nodeType !== 1 && p.nodeType !== 9 && p.nodeType !== 11)
      throw Error(l(299));
    return y(g, p, null, b);
  }, fe.flushSync = function(g) {
    var p = S.T, b = r.p;
    try {
      if (S.T = null, r.p = 2, g) return g();
    } finally {
      S.T = p, r.p = b, r.d.f();
    }
  }, fe.preconnect = function(g, p) {
    typeof g == "string" && (p ? (p = p.crossOrigin, p = typeof p == "string" ? p === "use-credentials" ? p : "" : void 0) : p = null, r.d.C(g, p));
  }, fe.prefetchDNS = function(g) {
    typeof g == "string" && r.d.D(g);
  }, fe.preinit = function(g, p) {
    if (typeof g == "string" && p && typeof p.as == "string") {
      var b = p.as, N = v(b, p.crossOrigin), z = typeof p.integrity == "string" ? p.integrity : void 0, U = typeof p.fetchPriority == "string" ? p.fetchPriority : void 0;
      b === "style" ? r.d.S(
        g,
        typeof p.precedence == "string" ? p.precedence : void 0,
        {
          crossOrigin: N,
          integrity: z,
          fetchPriority: U
        }
      ) : b === "script" && r.d.X(g, {
        crossOrigin: N,
        integrity: z,
        fetchPriority: U,
        nonce: typeof p.nonce == "string" ? p.nonce : void 0
      });
    }
  }, fe.preinitModule = function(g, p) {
    if (typeof g == "string")
      if (typeof p == "object" && p !== null) {
        if (p.as == null || p.as === "script") {
          var b = v(
            p.as,
            p.crossOrigin
          );
          r.d.M(g, {
            crossOrigin: b,
            integrity: typeof p.integrity == "string" ? p.integrity : void 0,
            nonce: typeof p.nonce == "string" ? p.nonce : void 0,
            fetchPriority: typeof p.fetchPriority == "string" ? p.fetchPriority : void 0
          });
        }
      } else p == null && r.d.M(g);
  }, fe.preload = function(g, p) {
    if (typeof g == "string" && typeof p == "object" && p !== null && typeof p.as == "string") {
      var b = p.as, N = v(b, p.crossOrigin);
      r.d.L(g, b, {
        crossOrigin: N,
        integrity: typeof p.integrity == "string" ? p.integrity : void 0,
        nonce: typeof p.nonce == "string" ? p.nonce : void 0,
        type: typeof p.type == "string" ? p.type : void 0,
        fetchPriority: typeof p.fetchPriority == "string" ? p.fetchPriority : void 0,
        referrerPolicy: typeof p.referrerPolicy == "string" ? p.referrerPolicy : void 0,
        imageSrcSet: typeof p.imageSrcSet == "string" ? p.imageSrcSet : void 0,
        imageSizes: typeof p.imageSizes == "string" ? p.imageSizes : void 0,
        media: typeof p.media == "string" ? p.media : void 0
      });
    }
  }, fe.preloadModule = function(g, p) {
    if (typeof g == "string")
      if (p) {
        var b = v(p.as, p.crossOrigin);
        r.d.m(g, {
          as: typeof p.as == "string" && p.as !== "script" ? p.as : void 0,
          crossOrigin: b,
          integrity: typeof p.integrity == "string" ? p.integrity : void 0,
          nonce: typeof p.nonce == "string" ? p.nonce : void 0,
          fetchPriority: typeof p.fetchPriority == "string" ? p.fetchPriority : void 0
        });
      } else r.d.m(g);
  }, fe.requestFormReset = function(g) {
    r.d.r(g);
  }, fe.unstable_batchedUpdates = function(g, p) {
    return g(p);
  }, fe.useFormState = function(g, p, b) {
    return S.H.useFormState(g, p, b);
  }, fe.useFormStatus = function() {
    return S.H.useHostTransitionStatus();
  }, fe.version = "19.3.1", fe;
}
var eg;
function fb() {
  if (eg) return lf.exports;
  eg = 1;
  function a() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (l) {
        console.error(l);
      }
  }
  return a(), lf.exports = cb(), lf.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ng;
function hb() {
  if (ng) return Jl;
  ng = 1;
  var a = rb(), l = Kf(), o = fb();
  function r(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++)
        e += "&args[]=" + encodeURIComponent(arguments[n]);
    }
    return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function c(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
  }
  function d(t) {
    for (var e = t, n = e; n && !n.alternate; )
      e = n, (e.flags & 4098) !== 0 && (t = e.return), n = e.return;
    for (; e.return; ) e = e.return;
    return e.tag === 3 ? t : null;
  }
  function h(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
    }
    return null;
  }
  function y(t) {
    if (t.tag === 31) {
      var e = t.memoizedState;
      if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
    }
    return null;
  }
  function S(t) {
    if (d(t) !== t)
      throw Error(r(188));
  }
  function v(t) {
    var e = t.alternate;
    if (!e) {
      if (e = d(t), e === null) throw Error(r(188));
      return e !== t ? null : t;
    }
    for (var n = t, i = e; ; ) {
      var u = n.return;
      if (u === null) break;
      var s = u.alternate;
      if (s === null) {
        if (i = u.return, i !== null) {
          n = i;
          continue;
        }
        break;
      }
      if (u.child === s.child) {
        for (s = u.child; s; ) {
          if (s === n) return S(u), t;
          if (s === i) return S(u), e;
          s = s.sibling;
        }
        throw Error(r(188));
      }
      if (n.return !== i.return) n = u, i = s;
      else {
        for (var f = !1, m = u.child; m; ) {
          if (m === n) {
            f = !0, n = u, i = s;
            break;
          }
          if (m === i) {
            f = !0, i = u, n = s;
            break;
          }
          m = m.sibling;
        }
        if (!f) {
          for (m = s.child; m; ) {
            if (m === n) {
              f = !0, n = s, i = u;
              break;
            }
            if (m === i) {
              f = !0, i = s, n = u;
              break;
            }
            m = m.sibling;
          }
          if (!f) throw Error(r(189));
        }
      }
      if (n.alternate !== i) throw Error(r(190));
    }
    if (n.tag !== 3) throw Error(r(188));
    return n.stateNode.current === n ? t : e;
  }
  function g(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (e = g(t), e !== null) return e;
      t = t.sibling;
    }
    return null;
  }
  function p(t, e, n, i, u, s) {
    for (; t !== null; ) {
      if ((t.tag === 5 || t.tag === 27 || t.tag === 6) && n(t, i, u, s) || (t.tag !== 22 || t.memoizedState === null) && (e || t.tag !== 5 && t.tag !== 27) && p(
        t.child,
        e,
        n,
        i,
        u,
        s
      ))
        return !0;
      t = t.sibling;
    }
    return !1;
  }
  function b(t) {
    for (t = t.return; t !== null; ) {
      if (t.tag === 3 || t.tag === 5 || t.tag === 27) return t;
      t = t.return;
    }
    return null;
  }
  function N(t) {
    var e = !1;
    for (t = t.return; t !== null && (t.tag === 4 && (e = !0), !(t.tag === 3 || t.tag === 5 || t.tag === 27)); )
      t = t.return;
    return e;
  }
  function z(t) {
    var e = [null, null], n = b(t);
    return n === null || U(
      e,
      t,
      n.child,
      { foundSelf: !1 }
    ), e;
  }
  function U(t, e, n, i) {
    for (; n !== null; ) {
      if (n === e) i.foundSelf = !0;
      else if (n.tag === 5 || n.tag === 27 || n.tag === 6) {
        if (i.foundSelf) return t[1] = n, !0;
        t[0] = n;
      } else if ((n.tag !== 22 || n.memoizedState === null) && U(
        t,
        e,
        n.child,
        i
      ))
        return !0;
      n = n.sibling;
    }
    return !1;
  }
  function w(t) {
    switch (t.tag) {
      case 5:
      case 27:
      case 6:
        return t.stateNode;
      case 3:
        return t.stateNode.containerInfo;
      default:
        throw Error(r(559));
    }
  }
  var B = null, Y = null;
  function q(t, e, n) {
    return t === n ? !0 : t === e ? (B = t, !0) : !1;
  }
  function X(t, e, n) {
    return t === n ? (Y = t, !1) : t === e ? (Y !== null && (B = t), !0) : !1;
  }
  function et(t) {
    if (t === null) return null;
    do
      t = t === null ? null : t.return;
    while (t && t.tag !== 5 && t.tag !== 27 && t.tag !== 3);
    return t || null;
  }
  function it(t, e, n) {
    for (var i = 0, u = t; u; u = n(u)) i++;
    u = 0;
    for (var s = e; s; s = n(s)) u++;
    for (; 0 < i - u; ) t = n(t), i--;
    for (; 0 < u - i; ) e = n(e), u--;
    for (; i--; ) {
      if (t === e || e !== null && t === e.alternate)
        return t;
      t = n(t), e = n(e);
    }
    return null;
  }
  var Z = Object.assign, H = Symbol.for("react.element"), ut = Symbol.for("react.transitional.element"), k = Symbol.for("react.portal"), mt = Symbol.for("react.fragment"), At = Symbol.for("react.strict_mode"), It = Symbol.for("react.profiler"), Wt = Symbol.for("react.consumer"), zt = Symbol.for("react.context"), L = Symbol.for("react.forward_ref"), at = Symbol.for("react.suspense"), J = Symbol.for("react.suspense_list"), ft = Symbol.for("react.memo"), dt = Symbol.for("react.lazy"), $t = Symbol.for("react.activity"), ke = Symbol.for("react.legacy_hidden"), Ei = Symbol.for("react.memo_cache_sentinel"), A = Symbol.for("react.view_transition"), j = Symbol.for("react.recoverable"), $ = Symbol.iterator;
  function tt(t) {
    return t === null || typeof t != "object" ? null : (t = $ && t[$] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var Tt = Symbol.for("react.client.reference");
  function bt(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === Tt ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case mt:
        return "Fragment";
      case It:
        return "Profiler";
      case At:
        return "StrictMode";
      case at:
        return "Suspense";
      case J:
        return "SuspenseList";
      case $t:
        return "Activity";
      case A:
        return "ViewTransition";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case k:
          return "Portal";
        case zt:
          return t.displayName || "Context";
        case Wt:
          return (t._context.displayName || "Context") + ".Consumer";
        case L:
          var e = t.render;
          return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
        case ft:
          return e = t.displayName || null, e !== null ? e : bt(t.type) || "Memo";
        case dt:
          e = t._payload, t = t._init;
          try {
            return bt(t(e));
          } catch {
          }
      }
    return null;
  }
  var xt = Array.isArray, I = l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, st = o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Mn = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, vo = [], Wi = -1;
  function sn(t) {
    return { current: t };
  }
  function ae(t) {
    0 > Wi || (t.current = vo[Wi], vo[Wi] = null, Wi--);
  }
  function Ut(t, e) {
    Wi++, vo[Wi] = t.current, t.current = e;
  }
  var on = sn(null), Wa = sn(null), Gn = sn(null), cu = sn(null);
  function fu(t, e) {
    switch (Ut(Gn, e), Ut(Wa, t), Ut(on, null), e.nodeType) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? ip(t) : 0;
        break;
      default:
        if (t = e.tagName, e = e.namespaceURI)
          e = ip(e), t = ap(e, t);
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    ae(on), Ut(on, t);
  }
  function $i() {
    ae(on), ae(Wa), ae(Gn);
  }
  function So(t) {
    var e = t.memoizedState;
    e !== null && (Ya._currentValue = e.memoizedState, Ut(cu, t)), e = on.current;
    var n = ap(e, t.type);
    e !== n && (Ut(Wa, t), Ut(on, n));
  }
  function hu(t) {
    Wa.current === t && (ae(on), ae(Wa)), cu.current === t && (ae(cu), Ya._currentValue = Mn);
  }
  var To, xh;
  function Xn(t) {
    if (To === void 0)
      try {
        throw Error();
      } catch (n) {
        var e = n.stack.trim().match(/\n( *(at )?)/);
        To = e && e[1] || "", xh = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + To + t + xh;
  }
  var bo = !1;
  function Eo(t, e) {
    if (!t || bo) return "";
    bo = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var i = {
        DetermineComponentFrameRoot: function() {
          try {
            if (e) {
              var V = function() {
                throw Error();
              };
              if (Object.defineProperty(V.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(V, []);
                } catch (G) {
                  var x = G;
                }
                Reflect.construct(t, [], V);
              } else {
                try {
                  V.call();
                } catch (G) {
                  x = G;
                }
                V = !1;
                try {
                  var O = Object.getOwnPropertyDescriptor(
                    t.prototype,
                    "props"
                  );
                  Object.defineProperty(t.prototype, "props", {
                    configurable: !0,
                    set: function() {
                      throw Error();
                    }
                  }), V = !0, new t();
                } finally {
                  V && (O !== void 0 ? Object.defineProperty(t.prototype, "props", O) : delete t.prototype.props);
                }
              }
            } else {
              try {
                throw Error();
              } catch (G) {
                x = G;
              }
              (V = t()) && typeof V.catch == "function" && V.catch(function() {
              });
            }
          } catch (G) {
            if (G && x && typeof G.stack == "string")
              return [G.stack, x.stack];
          }
          return [null, null];
        }
      };
      i.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var u = Object.getOwnPropertyDescriptor(
        i.DetermineComponentFrameRoot,
        "name"
      );
      u && u.configurable && Object.defineProperty(
        i.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var s = i.DetermineComponentFrameRoot(), f = s[0], m = s[1];
      if (f && m) {
        var T = f.split(`
`), C = m.split(`
`);
        for (u = i = 0; i < T.length && !T[i].includes("DetermineComponentFrameRoot"); )
          i++;
        for (; u < C.length && !C[u].includes(
          "DetermineComponentFrameRoot"
        ); )
          u++;
        if (i === T.length || u === C.length)
          for (i = T.length - 1, u = C.length - 1; 1 <= i && 0 <= u && T[i] !== C[u]; )
            u--;
        for (; 1 <= i && 0 <= u; i--, u--)
          if (T[i] !== C[u]) {
            if (i !== 1 || u !== 1)
              do
                if (i--, u--, 0 > u || T[i] !== C[u]) {
                  var R = `
` + T[i].replace(" at new ", " at ");
                  return t.displayName && R.includes("<anonymous>") && (R = R.replace("<anonymous>", t.displayName)), R;
                }
              while (1 <= i && 0 <= u);
            break;
          }
      }
    } finally {
      bo = !1, Error.prepareStackTrace = n;
    }
    return (n = t ? t.displayName || t.name : "") ? Xn(n) : "";
  }
  function r1(t, e) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return Xn(t.type);
      case 16:
        return Xn("Lazy");
      case 13:
        return t.child !== e && e !== null ? Xn("Suspense Fallback") : Xn("Suspense");
      case 19:
        return Xn("SuspenseList");
      case 0:
      case 15:
        return Eo(t.type, !1);
      case 11:
        return Eo(t.type.render, !1);
      case 1:
        return Eo(t.type, !0);
      case 31:
        return Xn("Activity");
      case 30:
        return Xn("ViewTransition");
      default:
        return "";
    }
  }
  function Mh(t) {
    try {
      var e = "", n = null;
      do
        e += r1(t, n), n = t, t = t.return;
      while (t);
      return e;
    } catch (i) {
      return `
Error generating stack: ` + i.message + `
` + i.stack;
    }
  }
  var Ao = Object.prototype.hasOwnProperty, xo = a.unstable_scheduleCallback, Mo = a.unstable_cancelCallback, c1 = a.unstable_shouldYield, f1 = a.unstable_requestPaint, Oe = a.unstable_now, h1 = a.unstable_getCurrentPriorityLevel, Ch = a.unstable_ImmediatePriority, Dh = a.unstable_UserBlockingPriority, du = a.unstable_NormalPriority, d1 = a.unstable_LowPriority, Oh = a.unstable_IdlePriority, m1 = a.log, y1 = a.unstable_setDisableYieldValue, $a = null, Re = null;
  function Qn(t) {
    if (typeof m1 == "function" && y1(t), Re && typeof Re.setStrictMode == "function")
      try {
        Re.setStrictMode($a, t);
      } catch {
      }
  }
  var ze = Math.clz32 ? Math.clz32 : v1, p1 = Math.log, g1 = Math.LN2;
  function v1(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (p1(t) / g1 | 0) | 0;
  }
  var mu = 256, yu = 262144, pu = 4194304;
  function Ai(t) {
    var e = t & 42;
    if (e !== 0) return e;
    switch (t & -t) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return t & -t;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function gu(t, e, n) {
    var i = t.pendingLanes;
    if (i === 0) return 0;
    var u = 0, s = t.suspendedLanes, f = t.pingedLanes;
    t = t.warmLanes;
    var m = i & 134217727;
    return m !== 0 ? (i = m & ~s, i !== 0 ? u = Ai(i) : (f &= m, f !== 0 ? u = Ai(f) : n || (n = m & ~t, n !== 0 && (u = Ai(n))))) : (m = i & ~s, m !== 0 ? u = Ai(m) : f !== 0 ? u = Ai(f) : n || (n = i & ~t, n !== 0 && (u = Ai(n)))), u === 0 ? 0 : e !== 0 && e !== u && (e & s) === 0 && (s = u & -u, n = e & -e, s >= n || s === 32 && (n & 4194048) !== 0) ? e : u;
  }
  function tl(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function Rh(t, e) {
    (e & 8) !== 0 && (e |= e & 32);
    var n = t.entangledLanes;
    if (n !== 0)
      for (t = t.entanglements, n &= e; 0 < n; ) {
        var i = 31 - ze(n), u = 1 << i;
        e |= t[i], n &= ~u;
      }
    return e;
  }
  function S1(t, e) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return e + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function zh() {
    var t = pu;
    return pu <<= 1, (pu & 62914560) === 0 && (pu = 4194304), t;
  }
  function Co(t) {
    for (var e = [], n = 0; 31 > n; n++) e.push(t);
    return e;
  }
  function el(t, e) {
    t.pendingLanes |= e, e !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
  }
  function T1(t, e, n, i, u, s) {
    var f = t.pendingLanes;
    t.pendingLanes = n, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= n, t.entangledLanes &= n, t.errorRecoveryDisabledLanes &= n, t.shellSuspendCounter = 0;
    var m = t.entanglements, T = t.expirationTimes, C = t.hiddenUpdates;
    for (n = f & ~n; 0 < n; ) {
      var R = 31 - ze(n), V = 1 << R;
      m[R] = 0, T[R] = -1;
      var x = C[R];
      if (x !== null)
        for (C[R] = null, R = 0; R < x.length; R++) {
          var O = x[R];
          O !== null && (O.lane &= -536870913);
        }
      n &= ~V;
    }
    i !== 0 && Nh(t, i, 0), s !== 0 && u === 0 && t.tag !== 0 && (t.suspendedLanes |= s & ~(f & ~e));
  }
  function Nh(t, e, n) {
    t.pendingLanes |= e, t.suspendedLanes &= ~e;
    var i = 31 - ze(e);
    t.entangledLanes |= e, t.entanglements[i] = t.entanglements[i] | 1073741824 | n & 261930;
  }
  function _h(t, e) {
    var n = t.entangledLanes |= e;
    for (t = t.entanglements; n; ) {
      var i = 31 - ze(n), u = 1 << i;
      u & e | t[i] & e && (t[i] |= e), n &= ~u;
    }
  }
  function Vh(t, e) {
    var n = e & -e;
    return n = (n & 42) !== 0 ? 1 : Do(n), (n & (t.suspendedLanes | e)) !== 0 ? 0 : n;
  }
  function Do(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function Oo(t) {
    return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function wh() {
    var t = st.p;
    return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : qp(t.type));
  }
  function Uh(t, e) {
    var n = st.p;
    try {
      return st.p = t, e();
    } finally {
      st.p = n;
    }
  }
  var Cn = Math.random().toString(36).slice(2), le = "__reactFiber$" + Cn, be = "__reactProps$" + Cn, ta = "__reactContainer$" + Cn, Bh = "__reactEvents$" + Cn, b1 = "__reactListeners$" + Cn, E1 = "__reactHandles$" + Cn, jh = "__reactResources$" + Cn, nl = "__reactMarker$" + Cn, vu = "__reactLoad$" + Cn;
  function Su(t) {
    delete t[le], delete t[be], delete t[b1], delete t[E1];
  }
  function xi(t) {
    var e;
    if (e = t[le]) return e;
    for (var n = t.parentNode; n; ) {
      if (e = n[ta] || n[le]) {
        if (n = e.alternate, e.child !== null || n !== null && n.child !== null)
          for (t = bp(t); t !== null; ) {
            if (n = t[le]) return n;
            t = bp(t);
          }
        return e;
      }
      t = n, n = t.parentNode;
    }
    return null;
  }
  function ea(t) {
    if (t = t[le] || t[ta]) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 31 || e === 26 || e === 27 || e === 3)
        return t;
    }
    return null;
  }
  function il(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(r(33));
  }
  function na(t) {
    var e = t[jh];
    return e || (e = t[jh] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), e;
  }
  function te(t) {
    t[nl] = !0;
  }
  function Hh(t) {
    t[vu] = void 0;
  }
  var Lh = /* @__PURE__ */ new Set(), Yh = {};
  function Mi(t, e) {
    ia(t, e), ia(t + "Capture", e);
  }
  function ia(t, e) {
    for (Yh[t] = e, t = 0; t < e.length; t++)
      Lh.add(e[t]);
  }
  var A1 = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), qh = {}, Gh = {};
  function x1(t) {
    return Ao.call(Gh, t) ? !0 : Ao.call(qh, t) ? !1 : A1.test(t) ? Gh[t] = !0 : (qh[t] = !0, !1);
  }
  var Et = !1;
  function Xh() {
    var t = Et;
    return Et = !1, t;
  }
  function Tu(t, e, n) {
    if (x1(e))
      if (n === null) t.removeAttribute(e);
      else {
        switch (typeof n) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(e);
            return;
          case "boolean":
            var i = e.toLowerCase().slice(0, 5);
            if (i !== "data-" && i !== "aria-") {
              t.removeAttribute(e);
              return;
            }
        }
        t.setAttribute(e, n);
      }
  }
  function bu(t, e, n) {
    if (n === null) t.removeAttribute(e);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttribute(e, n);
    }
  }
  function Dn(t, e, n, i) {
    if (i === null) t.removeAttribute(n);
    else {
      switch (typeof i) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(n);
          return;
      }
      t.setAttributeNS(e, n, i);
    }
  }
  function Ne(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function Qh(t) {
    var e = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
  }
  function M1(t, e, n) {
    var i = Object.getOwnPropertyDescriptor(
      t.constructor.prototype,
      e
    );
    if (!t.hasOwnProperty(e) && typeof i < "u" && typeof i.get == "function" && typeof i.set == "function") {
      var u = i.get, s = i.set;
      return Object.defineProperty(t, e, {
        configurable: !0,
        get: function() {
          return u.call(this);
        },
        set: function(f) {
          n = "" + f, s.call(this, f);
        }
      }), Object.defineProperty(t, e, {
        enumerable: i.enumerable
      }), {
        getValue: function() {
          return n;
        },
        setValue: function(f) {
          n = "" + f;
        },
        stopTracking: function() {
          t._valueTracker = null, delete t[e];
        }
      };
    }
  }
  function Ro(t) {
    if (!t._valueTracker) {
      var e = Qh(t) ? "checked" : "value";
      t._valueTracker = M1(
        t,
        e,
        "" + t[e]
      );
    }
  }
  function Zh(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var n = e.getValue(), i = "";
    return t && (i = Qh(t) ? t.checked ? "true" : "false" : t.value), t = i, t !== n ? (e.setValue(t), !0) : !1;
  }
  var C1 = /[\n"\\]/g;
  function Le(t) {
    return t.replace(
      C1,
      function(e) {
        return "\\" + e.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function zo(t, e, n, i, u, s, f, m) {
    t.name = "", f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? t.type = f : t.removeAttribute("type"), e != null ? f === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + Ne(e)) : t.value !== "" + Ne(e) && (t.value = "" + Ne(e)) : f !== "submit" && f !== "reset" || t.removeAttribute("value"), e != null ? f === "number" && t.value == e ? No(t, Ne(t.value)) : No(t, Ne(e)) : n != null ? No(t, Ne(n)) : i != null && t.removeAttribute("value"), u == null && s != null && (t.defaultChecked = !!s), u != null && (t.checked = u && typeof u != "function" && typeof u != "symbol"), m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" ? t.name = "" + Ne(m) : t.removeAttribute("name");
  }
  function Kh(t, e, n, i, u, s, f, m) {
    if (s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" && (t.type = s), e != null || n != null) {
      if (!(s !== "submit" && s !== "reset" || e != null)) {
        Ro(t);
        return;
      }
      n = n != null ? "" + Ne(n) : "", e = e != null ? "" + Ne(e) : n, m || e === t.value || (t.value = e), t.defaultValue = e;
    }
    i = i ?? u, i = typeof i != "function" && typeof i != "symbol" && !!i, t.checked = m ? t.checked : !!i, t.defaultChecked = !!i, f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (t.name = f), Ro(t);
  }
  function No(t, e) {
    t.defaultValue !== "" + e && (t.defaultValue = "" + e);
  }
  function aa(t, e, n, i) {
    if (t = t.options, e) {
      e = {};
      for (var u = 0; u < n.length; u++)
        e["$" + n[u]] = !0;
      for (n = 0; n < t.length; n++)
        u = e.hasOwnProperty("$" + t[n].value), t[n].selected !== u && (t[n].selected = u), u && i && (t[n].defaultSelected = !0);
    } else {
      for (n = "" + Ne(n), e = null, u = 0; u < t.length; u++) {
        if (t[u].value === n) {
          t[u].selected = !0, i && (t[u].defaultSelected = !0);
          return;
        }
        e !== null || t[u].disabled || (e = t[u]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function Jh(t, e, n) {
    if (e != null && (e = "" + Ne(e), e !== t.value && (t.value = e), n == null)) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = n != null ? "" + Ne(n) : "";
  }
  function Fh(t, e, n, i) {
    if (e == null) {
      if (i != null) {
        if (n != null) throw Error(r(92));
        if (xt(i)) {
          if (1 < i.length) throw Error(r(93));
          i = i[0];
        }
        n = i;
      }
      n == null && (n = ""), e = n;
    }
    n = Ne(e), t.defaultValue = n, i = t.textContent, i === n && i !== "" && i !== null && (t.value = i), Ro(t);
  }
  function la(t, e) {
    if (e) {
      var n = t.firstChild;
      if (n && n === t.lastChild && n.nodeType === 3) {
        n.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var D1 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Ph(t, e, n) {
    var i = e.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === "" ? i ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : i ? t.setProperty(e, n) : typeof n != "number" || n === 0 || D1.has(e) ? e === "float" ? t.cssFloat = n : t[e] = ("" + n).trim() : t[e] = n + "px";
  }
  function kh(t, e, n) {
    if (e != null && typeof e != "object")
      throw Error(r(62));
    if (t = t.style, n != null) {
      for (var i in n)
        !n.hasOwnProperty(i) || e != null && e.hasOwnProperty(i) || (i.indexOf("--") === 0 ? t.setProperty(i, "") : i === "float" ? t.cssFloat = "" : t[i] = "", Et = !0);
      for (var u in e)
        i = e[u], e.hasOwnProperty(u) && n[u] !== i && (Ph(t, u, i), Et = !0);
    } else
      for (var s in e)
        e.hasOwnProperty(s) && Ph(t, s, e[s]);
  }
  function _o(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var O1 = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["maskType", "mask-type"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), R1 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Eu(t) {
    return R1.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
  }
  function rn() {
  }
  var Vo = null;
  function wo(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var ua = null, sa = null;
  function Ih(t) {
    var e = ea(t);
    if (e && (t = e.stateNode)) {
      var n = t[be] || null;
      t: switch (t = e.stateNode, e.type) {
        case "input":
          if (zo(
            t,
            n.value,
            n.defaultValue,
            n.defaultValue,
            n.checked,
            n.defaultChecked,
            n.type,
            n.name
          ), e = n.name, n.type === "radio" && e != null) {
            for (n = t; n.parentNode; ) n = n.parentNode;
            for (n = n.querySelectorAll(
              'input[name="' + Le(
                "" + e
              ) + '"][type="radio"]'
            ), e = 0; e < n.length; e++) {
              var i = n[e];
              if (i !== t && i.form === t.form) {
                var u = i[be] || null;
                if (!u) throw Error(r(90));
                zo(
                  i,
                  u.value,
                  u.defaultValue,
                  u.defaultValue,
                  u.checked,
                  u.defaultChecked,
                  u.type,
                  u.name
                );
              }
            }
            for (e = 0; e < n.length; e++)
              i = n[e], i.form === t.form && Zh(i);
          }
          break t;
        case "textarea":
          Jh(t, n.value, n.defaultValue);
          break t;
        case "select":
          e = n.value, e != null && aa(t, !!n.multiple, e, !1);
      }
    }
  }
  var Uo = !1;
  function Wh(t, e, n) {
    if (Uo) return t(e, n);
    Uo = !0;
    try {
      var i = t(e);
      return i;
    } finally {
      if (Uo = !1, (ua !== null || sa !== null) && (Es(), ua && (e = ua, t = sa, sa = ua = null, Ih(e), t)))
        for (e = 0; e < t.length; e++) Ih(t[e]);
    }
  }
  function al(t, e) {
    var n = t.stateNode;
    if (n === null) return null;
    var i = n[be] || null;
    if (i === null) return null;
    n = i[e];
    t: switch (e) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (i = !i.disabled) || (t = t.type, i = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !i;
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (n && typeof n != "function")
      throw Error(
        r(231, e, typeof n)
      );
    return n;
  }
  var On = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Bo = !1;
  if (On)
    try {
      var ll = {};
      Object.defineProperty(ll, "passive", {
        get: function() {
          Bo = !0;
        }
      }), window.addEventListener("test", ll, ll), window.removeEventListener("test", ll, ll);
    } catch {
      Bo = !1;
    }
  var Zn = null, jo = null, Au = null;
  function $h() {
    if (Au) return Au;
    var t, e = jo, n = e.length, i, u = "value" in Zn ? Zn.value : Zn.textContent, s = u.length;
    for (t = 0; t < n && e[t] === u[t]; t++) ;
    var f = n - t;
    for (i = 1; i <= f && e[n - i] === u[s - i]; i++) ;
    return Au = u.slice(t, 1 < i ? 1 - i : void 0);
  }
  function xu(t) {
    var e = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
  }
  function Mu() {
    return !0;
  }
  function td() {
    return !1;
  }
  function ye(t) {
    function e(n, i, u, s, f) {
      this._reactName = n, this._targetInst = u, this.type = i, this.nativeEvent = s, this.target = f, this.currentTarget = null;
      for (var m in t)
        t.hasOwnProperty(m) && (n = t[m], this[m] = n ? n(s) : s[m]);
      return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? Mu : td, this.isPropagationStopped = td, this;
    }
    return Z(e.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Mu);
      },
      stopPropagation: function() {
        var n = this.nativeEvent;
        n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Mu);
      },
      persist: function() {
      },
      isPersistent: Mu
    }), e;
  }
  var Kn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Cu = ye(Kn), ul = Z({}, Kn, { view: 0, detail: 0 }), z1 = ye(ul), Ho, Lo, sl, Du = Z({}, ul, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: qo,
    button: 0,
    buttons: 0,
    relatedTarget: function(t) {
      return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
    },
    movementX: function(t) {
      return "movementX" in t ? t.movementX : (t !== sl && (sl && t.type === "mousemove" ? (Ho = t.screenX - sl.screenX, Lo = t.screenY - sl.screenY) : Lo = Ho = 0, sl = t), Ho);
    },
    movementY: function(t) {
      return "movementY" in t ? t.movementY : Lo;
    }
  }), ed = ye(Du), N1 = Z({}, Du, { dataTransfer: 0 }), _1 = ye(N1), V1 = Z({}, ul, { relatedTarget: 0 }), Yo = ye(V1), w1 = Z({}, Kn, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), U1 = ye(w1), B1 = Z({}, Kn, {
    clipboardData: function(t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    }
  }), j1 = ye(B1), H1 = Z({}, Kn, { data: 0 }), nd = ye(H1), L1 = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, Y1 = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, q1 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function G1(t) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(t) : (t = q1[t]) ? !!e[t] : !1;
  }
  function qo() {
    return G1;
  }
  var X1 = Z({}, ul, {
    key: function(t) {
      if (t.key) {
        var e = L1[t.key] || t.key;
        if (e !== "Unidentified") return e;
      }
      return t.type === "keypress" ? (t = xu(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? Y1[t.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: qo,
    charCode: function(t) {
      return t.type === "keypress" ? xu(t) : 0;
    },
    keyCode: function(t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function(t) {
      return t.type === "keypress" ? xu(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    }
  }), Q1 = ye(X1), Z1 = Z({}, Du, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), id = ye(Z1), K1 = Z({}, Kn, { submitter: 0 }), J1 = ye(K1), F1 = Z({}, ul, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: qo
  }), P1 = ye(F1), k1 = Z({}, Kn, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), I1 = ye(k1), W1 = Z({}, Du, {
    deltaX: function(t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function(t) {
      return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), $1 = ye(W1), tS = Z({}, Kn, {
    newState: 0,
    oldState: 0,
    source: 0
  }), eS = ye(tS), nS = [9, 13, 27, 32], Go = On && "CompositionEvent" in window, ol = null;
  On && "documentMode" in document && (ol = document.documentMode);
  var iS = On && "TextEvent" in window && !ol, ad = On && (!Go || ol && 8 < ol && 11 >= ol), ld = " ", ud = !1;
  function sd(t, e) {
    switch (t) {
      case "keyup":
        return nS.indexOf(e.keyCode) !== -1;
      case "keydown":
        return e.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function od(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
  }
  var oa = !1;
  function aS(t, e) {
    switch (t) {
      case "compositionend":
        return od(e);
      case "keypress":
        return e.which !== 32 ? null : (ud = !0, ld);
      case "textInput":
        return t = e.data, t === ld && ud ? null : t;
      default:
        return null;
    }
  }
  function lS(t, e) {
    if (oa)
      return t === "compositionend" || !Go && sd(t, e) ? (t = $h(), Au = jo = Zn = null, oa = !1, t) : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
          if (e.char && 1 < e.char.length)
            return e.char;
          if (e.which) return String.fromCharCode(e.which);
        }
        return null;
      case "compositionend":
        return ad && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var uS = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function rd(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!uS[t.type] : e === "textarea";
  }
  function cd(t, e, n, i) {
    ua ? sa ? sa.push(i) : sa = [i] : ua = i, e = Os(e, "onChange"), 0 < e.length && (n = new Cu(
      "onChange",
      "change",
      null,
      n,
      i
    ), t.push({ event: n, listeners: e }));
  }
  var rl = null, cl = null;
  function sS(t) {
    Iy(t, 0);
  }
  function Ou(t) {
    var e = il(t);
    if (Zh(e)) return t;
  }
  function fd(t, e) {
    if (t === "change") return e;
  }
  var hd = !1;
  if (On) {
    var Xo;
    if (On) {
      var Qo = "oninput" in document;
      if (!Qo) {
        var dd = document.createElement("div");
        dd.setAttribute("oninput", "return;"), Qo = typeof dd.oninput == "function";
      }
      Xo = Qo;
    } else Xo = !1;
    hd = Xo && (!document.documentMode || 9 < document.documentMode);
  }
  function md() {
    rl && (rl.detachEvent("onpropertychange", yd), cl = rl = null);
  }
  function yd(t) {
    if (t.propertyName === "value" && Ou(cl)) {
      var e = [];
      cd(
        e,
        cl,
        t,
        wo(t)
      ), Wh(sS, e);
    }
  }
  function oS(t, e, n) {
    t === "focusin" ? (md(), rl = e, cl = n, rl.attachEvent("onpropertychange", yd)) : t === "focusout" && md();
  }
  function rS(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return Ou(cl);
  }
  function cS(t, e) {
    if (t === "click") return Ou(e);
  }
  function fS(t, e) {
    if (t === "input" || t === "change")
      return Ou(e);
  }
  function hS(t, e) {
    return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e;
  }
  var _e = typeof Object.is == "function" ? Object.is : hS;
  function fl(t, e) {
    if (_e(t, e)) return !0;
    if (typeof t != "object" || t === null || typeof e != "object" || e === null)
      return !1;
    var n = Object.keys(t), i = Object.keys(e);
    if (n.length !== i.length) return !1;
    for (i = 0; i < n.length; i++) {
      var u = n[i];
      if (!Ao.call(e, u) || !_e(t[u], e[u]))
        return !1;
    }
    return !0;
  }
  function Zo(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  function pd(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function gd(t, e) {
    var n = pd(t);
    t = 0;
    for (var i; n; ) {
      if (n.nodeType === 3) {
        if (i = t + n.textContent.length, t <= e && i >= e)
          return { node: n, offset: e - t };
        t = i;
      }
      t: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break t;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = pd(n);
    }
  }
  function vd(t, e) {
    return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? vd(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1;
  }
  function Sd(t) {
    t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
    for (var e = Zo(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var n = typeof e.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) t = e.contentWindow;
      else break;
      e = Zo(t.document);
    }
    return e;
  }
  function Ko(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true");
  }
  var dS = On && "documentMode" in document && 11 >= document.documentMode, ra = null, Jo = null, hl = null, Fo = !1;
  function Td(t, e, n) {
    var i = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Fo || ra == null || ra !== Zo(i) || (i = ra, "selectionStart" in i && Ko(i) ? i = { start: i.selectionStart, end: i.selectionEnd } : (i = (i.ownerDocument && i.ownerDocument.defaultView || window).getSelection(), i = {
      anchorNode: i.anchorNode,
      anchorOffset: i.anchorOffset,
      focusNode: i.focusNode,
      focusOffset: i.focusOffset
    }), hl && fl(hl, i) || (hl = i, i = Os(Jo, "onSelect"), 0 < i.length && (e = new Cu(
      "onSelect",
      "select",
      null,
      e,
      n
    ), t.push({ event: e, listeners: i }), e.target = ra)));
  }
  function Ci(t, e) {
    var n = {};
    return n[t.toLowerCase()] = e.toLowerCase(), n["Webkit" + t] = "webkit" + e, n["Moz" + t] = "moz" + e, n;
  }
  var ca = {
    animationend: Ci("Animation", "AnimationEnd"),
    animationiteration: Ci("Animation", "AnimationIteration"),
    animationstart: Ci("Animation", "AnimationStart"),
    transitionrun: Ci("Transition", "TransitionRun"),
    transitionstart: Ci("Transition", "TransitionStart"),
    transitioncancel: Ci("Transition", "TransitionCancel"),
    transitionend: Ci("Transition", "TransitionEnd")
  }, Po = {}, bd = {};
  On && (bd = document.createElement("div").style, "AnimationEvent" in window || (delete ca.animationend.animation, delete ca.animationiteration.animation, delete ca.animationstart.animation), "TransitionEvent" in window || delete ca.transitionend.transition);
  function Di(t) {
    if (Po[t]) return Po[t];
    if (!ca[t]) return t;
    var e = ca[t], n;
    for (n in e)
      if (e.hasOwnProperty(n) && n in bd)
        return Po[t] = e[n];
    return t;
  }
  var Ed = Di("animationend"), Ad = Di("animationiteration"), xd = Di("animationstart"), mS = Di("transitionrun"), yS = Di("transitionstart"), pS = Di("transitioncancel"), Md = Di("transitionend"), Cd = /* @__PURE__ */ new Map(), ko = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  ko.push("scrollEnd");
  function Ie(t, e) {
    Cd.set(t, e), Mi(e, [t]);
  }
  var gS = 0;
  function Rn(t, e) {
    if (t.name != null && t.name !== "auto") return t.name;
    if (e.autoName !== null) return e.autoName;
    t = en.identifierPrefix;
    var n = gS++;
    return t = "_" + t + "t_" + n.toString(32) + "_", e.autoName = t;
  }
  function Dd(t) {
    if (t == null || typeof t == "string")
      return t;
    var e = null, n = za;
    if (n !== null)
      for (var i = 0; i < n.length; i++) {
        var u = t[n[i]];
        if (u != null) {
          if (u === "none") return "none";
          e = e == null ? u : e + (" " + u);
        }
      }
    return e ?? t.default;
  }
  function zn(t, e) {
    return t = Dd(t), e = Dd(e), e == null ? t === "auto" ? null : t : e === "auto" ? null : e;
  }
  var Ru = typeof reportError == "function" ? reportError : function(t) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var e = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
        error: t
      });
      if (!window.dispatchEvent(e)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", t);
      return;
    }
    console.error(t);
  }, Ye = [], fa = 0, Io = 0;
  function zu() {
    for (var t = fa, e = Io = fa = 0; e < t; ) {
      var n = Ye[e];
      Ye[e++] = null;
      var i = Ye[e];
      Ye[e++] = null;
      var u = Ye[e];
      Ye[e++] = null;
      var s = Ye[e];
      if (Ye[e++] = null, i !== null && u !== null) {
        var f = i.pending;
        f === null ? u.next = u : (u.next = f.next, f.next = u), i.pending = u;
      }
      s !== 0 && Od(n, u, s);
    }
  }
  function Nu(t, e, n, i) {
    Ye[fa++] = t, Ye[fa++] = e, Ye[fa++] = n, Ye[fa++] = i, Io |= i, t.lanes |= i, t = t.alternate, t !== null && (t.lanes |= i);
  }
  function Wo(t, e, n, i) {
    return Nu(t, e, n, i), _u(t);
  }
  function Oi(t, e) {
    return Nu(t, null, null, e), _u(t);
  }
  function Od(t, e, n) {
    t.lanes |= n;
    var i = t.alternate;
    i !== null && (i.lanes |= n);
    for (var u = !1, s = t.return; s !== null; )
      s.childLanes |= n, i = s.alternate, i !== null && (i.childLanes |= n), s.tag === 22 && (t = s.stateNode, t === null || t._visibility & 1 || (u = !0)), t = s, s = s.return;
    return t.tag === 3 ? (s = t.stateNode, u && e !== null && (u = 31 - ze(n), t = s.hiddenUpdates, i = t[u], i === null ? t[u] = [e] : i.push(e), e.lane = n | 536870912), s) : null;
  }
  function _u(t) {
    if (50 < wl)
      throw wl = 0, bs = null, Error(r(185));
    for (var e = t.return; e !== null; )
      t = e, e = t.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var ha = {};
  function vS(t, e, n, i) {
    this.tag = t, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = i, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ee(t, e, n, i) {
    return new vS(t, e, n, i);
  }
  function $o(t) {
    return t = t.prototype, !(!t || !t.isReactComponent);
  }
  function Nn(t, e) {
    var n = t.alternate;
    return n === null ? (n = Ee(
      t.tag,
      e,
      t.key,
      t.mode
    ), n.elementType = t.elementType, n.type = t.type, n.stateNode = t.stateNode, n.alternate = t, t.alternate = n) : (n.pendingProps = e, n.type = t.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = t.flags & 1206910976, n.childLanes = t.childLanes, n.lanes = t.lanes, n.child = t.child, n.memoizedProps = t.memoizedProps, n.memoizedState = t.memoizedState, n.updateQueue = t.updateQueue, e = t.dependencies, n.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }, n.sibling = t.sibling, n.index = t.index, n.ref = t.ref, n.refCleanup = t.refCleanup, n;
  }
  function Rd(t, e) {
    t.flags &= 1206910978;
    var n = t.alternate;
    return n === null ? (t.childLanes = 0, t.lanes = e, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = n.childLanes, t.lanes = n.lanes, t.child = n.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = n.memoizedProps, t.memoizedState = n.memoizedState, t.updateQueue = n.updateQueue, t.type = n.type, e = n.dependencies, t.dependencies = e === null ? null : {
      lanes: e.lanes,
      firstContext: e.firstContext
    }), t;
  }
  function Vu(t, e, n, i, u, s) {
    var f = 0;
    if (i = t, typeof i == "function") $o(i) && (f = 1);
    else if (typeof i == "string")
      f = KT(
        t,
        n,
        on.current
      ) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else
      t: switch (i) {
        case $t:
          return t = Ee(31, n, e, u), t.elementType = $t, t.lanes = s, t;
        case mt:
          return Ri(n.children, u, s, e);
        case At:
          f = 8, u |= 24;
          break;
        case It:
          return t = Ee(12, n, e, u | 2), t.elementType = It, t.lanes = s, t;
        case at:
          return t = Ee(13, n, e, u), t.elementType = at, t.lanes = s, t;
        case J:
          return t = Ee(19, n, e, u), t.elementType = J, t.lanes = s, t;
        case ke:
        case A:
          return t = u | 32, t = Ee(30, n, e, t), t.elementType = A, t.lanes = s, t.stateNode = {
            autoName: null,
            paired: null,
            clones: null,
            ref: null
          }, t;
        default:
          if (typeof i == "object" && i !== null)
            switch (i.$$typeof) {
              case zt:
                f = 10;
                break t;
              case Wt:
                f = 9;
                break t;
              case L:
                f = 11;
                break t;
              case ft:
                f = 14;
                break t;
              case dt:
                f = 16, i = null;
                break t;
            }
          f = 29, n = Error(
            r(130, t === null ? "null" : typeof t, "")
          ), i = null;
      }
    return e = Ee(f, n, e, u), e.elementType = t, e.type = i, e.lanes = s, e;
  }
  function Ri(t, e, n, i) {
    return t = Ee(7, t, i, e), t.lanes = n, t;
  }
  function tr(t, e, n) {
    return t = Ee(6, t, null, e), t.lanes = n, t;
  }
  function zd(t) {
    var e = Ee(18, null, null, 0);
    return e.stateNode = t, e;
  }
  function er(t, e, n) {
    return e = Ee(
      4,
      t.children !== null ? t.children : [],
      t.key,
      e
    ), e.lanes = n, e.stateNode = {
      containerInfo: t.containerInfo,
      pendingChildren: null,
      implementation: t.implementation
    }, e;
  }
  var Nd = /* @__PURE__ */ new WeakMap();
  function qe(t, e) {
    if (typeof t == "object" && t !== null) {
      var n = Nd.get(t);
      return n !== void 0 ? n : (e = {
        value: t,
        source: e,
        stack: Mh(e)
      }, Nd.set(t, e), e);
    }
    return {
      value: t,
      source: e,
      stack: Mh(e)
    };
  }
  var da = [], ma = 0, wu = null, dl = 0, Ge = [], Xe = 0, Jn = null, cn = 1, fn = "";
  function _n(t, e) {
    da[ma++] = dl, da[ma++] = wu, wu = t, dl = e;
  }
  function _d(t, e, n) {
    Ge[Xe++] = cn, Ge[Xe++] = fn, Ge[Xe++] = Jn, Jn = t;
    var i = cn;
    t = fn;
    var u = 32 - ze(i) - 1;
    i &= ~(1 << u), n += 1;
    var s = 32 - ze(e) + u;
    if (30 < s) {
      var f = u - u % 5;
      s = (i & (1 << f) - 1).toString(32), i >>= f, u -= f, cn = 1 << 32 - ze(e) + u | n << u | i, fn = s + t;
    } else
      cn = 1 << s | n << u | i, fn = t;
  }
  function Uu(t) {
    t.return !== null && (_n(t, 1), _d(t, 1, 0));
  }
  function nr(t) {
    for (; t === wu; )
      wu = da[--ma], da[ma] = null, dl = da[--ma], da[ma] = null;
    for (; t === Jn; )
      Jn = Ge[--Xe], Ge[Xe] = null, fn = Ge[--Xe], Ge[Xe] = null, cn = Ge[--Xe], Ge[Xe] = null;
  }
  function Vd(t, e) {
    Ge[Xe++] = cn, Ge[Xe++] = fn, Ge[Xe++] = Jn, cn = e.id, fn = e.overflow, Jn = t;
  }
  var ee = null, Bt = null, ht = !1, Fn = null, Qe = !1, ir = Error(r(519));
  function Pn(t) {
    var e = Error(
      r(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw ml(qe(e, t)), ir;
  }
  function wd(t) {
    var e = t.stateNode, n = t.type, i = t.memoizedProps;
    switch (e[le] = t, e[be] = i, n) {
      case "dialog":
        pt("cancel", e), pt("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        pt("load", e);
        break;
      case "video":
      case "audio":
        for (n = 0; n < Bl.length; n++)
          pt(Bl[n], e);
        break;
      case "source":
        pt("error", e);
        break;
      case "img":
      case "image":
      case "link":
        pt("error", e), pt("load", e);
        break;
      case "details":
        pt("toggle", e);
        break;
      case "input":
        pt("invalid", e), Kh(
          e,
          i.value,
          i.defaultValue,
          i.checked,
          i.defaultChecked,
          i.type,
          i.name,
          !0
        );
        break;
      case "select":
        pt("invalid", e);
        break;
      case "textarea":
        pt("invalid", e), Fh(e, i.value, i.defaultValue, i.children);
    }
    n = i.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || e.textContent === "" + n || i.suppressHydrationWarning === !0 || ep(e.textContent, n) ? (i.popover != null && (pt("beforetoggle", e), pt("toggle", e)), i.onScroll != null && pt("scroll", e), i.onScrollEnd != null && pt("scrollend", e), i.onClick != null && (e.onclick = rn), e = !0) : e = !1, e || Pn(t, !0);
  }
  function Bu(t) {
    for (ee = t.return; ee; )
      switch (ee.tag) {
        case 5:
        case 31:
        case 13:
          Qe = !1;
          return;
        case 27:
        case 3:
          Qe = !0;
          return;
        default:
          ee = ee.return;
      }
  }
  function ya(t) {
    if (t !== ee) return !1;
    if (!ht) return Bu(t), ht = !0, !1;
    var e = t.tag, n;
    if ((n = e !== 3 && e !== 27) && ((n = e === 5) && (n = t.type, n = !(n !== "form" && n !== "button") || Vc(t.type, t.memoizedProps)), n = !n), n && Bt && Pn(t), Bu(t), e === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(r(317));
      Bt = Tp(t);
    } else if (e === 31) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(r(317));
      Bt = Tp(t);
    } else
      e === 27 ? (e = Bt, fi(t.type) ? (t = Gc, Gc = null, Bt = t) : Bt = e) : Bt = ee ? Ke(t.stateNode.nextSibling) : null;
    return !0;
  }
  function zi() {
    Bt = ee = null, ht = !1;
  }
  function ar() {
    var t = Fn;
    return t !== null && (Me === null ? Me = t : Me.push.apply(
      Me,
      t
    ), Fn = null), t;
  }
  function ml(t) {
    Fn === null ? Fn = [t] : Fn.push(t);
  }
  var lr = sn(null), Ni = null, Vn = null;
  function kn(t, e, n) {
    Ut(lr, e._currentValue), e._currentValue = n;
  }
  function wn(t) {
    t._currentValue = lr.current, ae(lr);
  }
  function ju(t, e, n) {
    for (; t !== null; ) {
      var i = t.alternate;
      if ((t.childLanes & e) !== e ? (t.childLanes |= e, i !== null && (i.childLanes |= e)) : i !== null && (i.childLanes & e) !== e && (i.childLanes |= e), t === n) break;
      t = t.return;
    }
  }
  function ur(t, e, n, i) {
    var u = t.child;
    for (u !== null && (u.return = t); u !== null; ) {
      var s = u.dependencies;
      if (s !== null) {
        var f = u.child;
        s = s.firstContext;
        t: for (; s !== null; ) {
          var m = s;
          s = u;
          for (var T = 0; T < e.length; T++)
            if (m.context === e[T]) {
              s.lanes |= n, m = s.alternate, m !== null && (m.lanes |= n), ju(
                s.return,
                n,
                t
              ), i || (f = null);
              break t;
            }
          s = m.next;
        }
      } else if (u.tag === 18) {
        if (f = u.return, f === null) throw Error(r(341));
        f.lanes |= n, s = f.alternate, s !== null && (s.lanes |= n), ju(f, n, t), f = null;
      } else
        u.tag === 13 && u.memoizedState !== null && u.memoizedState.dehydrated === null ? (u.lanes |= n, f = u.alternate, f !== null && (f.lanes |= n), ju(
          u.return,
          n,
          t
        ), f = u.child, f = f !== null ? f.sibling : null) : f = u.child;
      if (f !== null) f.return = u;
      else
        for (f = u; f !== null; ) {
          if (f === t) {
            f = null;
            break;
          }
          if (u = f.sibling, u !== null) {
            u.return = f.return, f = u;
            break;
          }
          f = f.return;
        }
      u = f;
    }
  }
  function _i(t, e, n, i) {
    t = null;
    for (var u = e, s = !1; u !== null; ) {
      if (!s) {
        if ((u.flags & 524288) !== 0) s = !0;
        else if ((u.flags & 262144) !== 0) break;
      }
      if (u.tag === 10) {
        var f = u.alternate;
        if (f === null) throw Error(r(387));
        if (f = f.memoizedProps, f !== null) {
          var m = u.type;
          _e(u.pendingProps.value, f.value) || (t !== null ? t.push(m) : t = [m]);
        }
      } else if (u === cu.current) {
        if (f = u.alternate, f === null) throw Error(r(387));
        f.memoizedState.memoizedState !== u.memoizedState.memoizedState && (t !== null ? t.push(Ya) : t = [Ya]);
      }
      u = u.return;
    }
    return t !== null && ur(
      e,
      t,
      n,
      i
    ), e.flags |= 262144, t !== null;
  }
  function Hu(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!_e(
        t.context._currentValue,
        t.memoizedValue
      ))
        return !0;
      t = t.next;
    }
    return !1;
  }
  function Vi(t) {
    Ni = t, Vn = null, t = t.dependencies, t !== null && (t.firstContext = null);
  }
  function ue(t) {
    return Ud(Ni, t);
  }
  function Lu(t, e) {
    return Ni === null && Vi(t), Ud(t, e);
  }
  function Ud(t, e) {
    var n = e._currentValue;
    if (e = { context: e, memoizedValue: n, next: null }, Vn === null) {
      if (t === null) throw Error(r(308));
      Vn = e, t.dependencies = { lanes: 0, firstContext: e }, t.flags |= 524288;
    } else Vn = Vn.next = e;
    return n;
  }
  var SS = typeof AbortController < "u" ? AbortController : function() {
    var t = [], e = this.signal = {
      aborted: !1,
      addEventListener: function(n, i) {
        t.push(i);
      }
    };
    this.abort = function() {
      e.aborted = !0, t.forEach(function(n) {
        return n();
      });
    };
  }, TS = a.unstable_scheduleCallback, bS = a.unstable_NormalPriority, Qt = {
    $$typeof: zt,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function sr() {
    return {
      controller: new SS(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function yl(t) {
    t.refCount--, t.refCount === 0 && TS(bS, function() {
      t.controller.abort();
    });
  }
  function Bd(t, e) {
    if ((t.pendingLanes & 4194048) !== 0) {
      var n = t.transitionTypes;
      for (n === null && (n = t.transitionTypes = []), t = 0; t < e.length; t++) {
        var i = e[t];
        n.indexOf(i) === -1 && n.push(i);
      }
    }
  }
  var pl = null;
  function ES(t) {
    var e = t.transitionTypes;
    return t.transitionTypes = null, e;
  }
  var gl = null, or = 0, wi = 0, pa = null;
  function AS(t, e) {
    if (gl === null) {
      var n = gl = [];
      or = 0, wi = xc(), pa = {
        status: "pending",
        value: void 0,
        then: function(i) {
          n.push(i);
        }
      };
    }
    return or++, e.then(jd, jd), e;
  }
  function jd() {
    if (--or === 0 && (pl = null, gl !== null)) {
      pa !== null && (pa.status = "fulfilled");
      var t = gl;
      gl = null, wi = 0, pa = null;
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function xS(t, e) {
    var n = [], i = {
      status: "pending",
      value: null,
      reason: null,
      then: function(u) {
        n.push(u);
      }
    };
    return t.then(
      function() {
        i.status = "fulfilled", i.value = e;
        for (var u = 0; u < n.length; u++) (0, n[u])(e);
      },
      function(u) {
        for (i.status = "rejected", i.reason = u, u = 0; u < n.length; u++)
          (0, n[u])(void 0);
      }
    ), i;
  }
  var Hd = I.S;
  I.S = function(t, e) {
    if (zy = Oe(), typeof e == "object" && e !== null && typeof e.then == "function" && AS(t, e), pl !== null)
      for (var n = wa; n !== null; )
        Bd(n, pl), n = n.next;
    if (n = t.types, n !== null) {
      for (var i = wa; i !== null; )
        Bd(i, n), i = i.next;
      if (wi !== 0) {
        i = pl, i === null && (i = pl = []);
        for (var u = 0; u < n.length; u++) {
          var s = n[u];
          i.indexOf(s) === -1 && i.push(s);
        }
      }
    }
    Hd !== null && Hd(t, e);
  };
  var Ui = sn(null);
  function rr() {
    var t = Ui.current;
    return t !== null ? t : _t.pooledCache;
  }
  function Yu(t, e) {
    e === null ? Ut(Ui, Ui.current) : Ut(Ui, e.pool);
  }
  function Ld() {
    var t = rr();
    return t === null ? null : { parent: Qt._currentValue, pool: t };
  }
  var ga = Error(r(460)), cr = Error(r(474)), qu = Error(r(542)), Gu = { then: function() {
  } };
  function Yd(t) {
    return t = t.status, t === "fulfilled" || t === "rejected";
  }
  function qd(t, e, n) {
    switch (n = t[n], n === void 0 ? t.push(e) : n !== e && (e.then(rn, rn), e = n), e.status) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw t = e.reason, Xd(t), t === void 0 && !("reason" in e) ? Error(r(600)) : t;
      default:
        if (typeof e.status == "string") e.then(rn, rn);
        else {
          if (t = _t, t !== null && 100 < t.shellSuspendCounter)
            throw Error(r(482));
          t = e, t.status = "pending", t.then(
            function(i) {
              if (e.status === "pending") {
                var u = e;
                u.status = "fulfilled", u.value = i;
              }
            },
            function(i) {
              if (e.status === "pending") {
                var u = e;
                u.status = "rejected", u.reason = i;
              }
            }
          );
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw t = e.reason, Xd(t), t;
        }
        throw ji = e, ga;
    }
  }
  function Bi(t) {
    try {
      var e = t._init;
      return e(t._payload);
    } catch (n) {
      throw n !== null && typeof n == "object" && typeof n.then == "function" ? (ji = n, ga) : n;
    }
  }
  var ji = null;
  function Gd() {
    if (ji === null) throw Error(r(459));
    var t = ji;
    return ji = null, t;
  }
  function Xd(t) {
    if (t === ga || t === qu)
      throw Error(r(483));
  }
  var va = null, vl = 0;
  function Xu(t) {
    var e = vl;
    return vl += 1, va === null && (va = []), qd(va, t, e);
  }
  function In(t, e) {
    e = e.props.ref, t.ref = e !== void 0 ? e : null;
  }
  function Qu(t, e) {
    throw e.$$typeof === H ? Error(r(525)) : (t = Object.prototype.toString.call(e), Error(
      r(
        31,
        t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t
      )
    ));
  }
  function Qd(t) {
    function e(M, E) {
      if (t) {
        var D = M.deletions;
        D === null ? (M.deletions = [E], M.flags |= 16) : D.push(E);
      }
    }
    function n(M, E) {
      if (!t) return null;
      for (; E !== null; )
        e(M, E), E = E.sibling;
      return null;
    }
    function i(M) {
      for (var E = /* @__PURE__ */ new Map(); M !== null; )
        M.key === null ? E.set(M.index, M) : E.set(M.key, M), M = M.sibling;
      return E;
    }
    function u(M, E) {
      return M = Nn(M, E), M.index = 0, M.sibling = null, M;
    }
    function s(M, E, D) {
      return M.index = D, t ? (D = M.alternate, D !== null ? (D = D.index, D < E ? (M.flags |= 2, E) : D) : (M.flags |= 134217730, E)) : (M.flags |= 1048576, E);
    }
    function f(M) {
      return t && M.alternate === null && (M.flags |= 134217730), M;
    }
    function m(M, E, D, _) {
      return E === null || E.tag !== 6 ? (E = tr(D, M.mode, _), E.return = M, E) : (E = u(E, D), E.return = M, E);
    }
    function T(M, E, D, _) {
      var K = D.type;
      return K === mt ? (M = R(
        M,
        E,
        D.props.children,
        _,
        D.key
      ), In(M, D), M) : E !== null && (E.elementType === K || typeof K == "object" && K !== null && K.$$typeof === dt && Bi(K) === E.type) ? (E = u(E, D.props), In(E, D), E.return = M, E) : (E = Vu(
        D.type,
        D.key,
        D.props,
        null,
        M.mode,
        _
      ), In(E, D), E.return = M, E);
    }
    function C(M, E, D, _) {
      return E === null || E.tag !== 4 || E.stateNode.containerInfo !== D.containerInfo || E.stateNode.implementation !== D.implementation ? (E = er(D, M.mode, _), E.return = M, E) : (E = u(E, D.children || []), E.return = M, E);
    }
    function R(M, E, D, _, K) {
      return E === null || E.tag !== 7 ? (E = Ri(
        D,
        M.mode,
        _,
        K
      ), E.return = M, E) : (E = u(E, D), E.return = M, E);
    }
    function V(M, E, D) {
      if (typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint")
        return E = tr(
          "" + E,
          M.mode,
          D
        ), E.return = M, E;
      if (typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case ut:
            return D = Vu(
              E.type,
              E.key,
              E.props,
              null,
              M.mode,
              D
            ), In(D, E), D.return = M, D;
          case k:
            return E = er(
              E,
              M.mode,
              D
            ), E.return = M, E;
          case dt:
            return E = Bi(E), V(M, E, D);
        }
        if (xt(E) || tt(E))
          return E = Ri(
            E,
            M.mode,
            D,
            null
          ), E.return = M, E;
        if (typeof E.then == "function")
          return V(M, Xu(E), D);
        if (E.$$typeof === zt)
          return V(
            M,
            Lu(M, E),
            D
          );
        Qu(M, E);
      }
      return null;
    }
    function x(M, E, D, _) {
      var K = E !== null ? E.key : null;
      if (typeof D == "string" && D !== "" || typeof D == "number" || typeof D == "bigint")
        return K !== null ? null : m(M, E, "" + D, _);
      if (typeof D == "object" && D !== null) {
        switch (D.$$typeof) {
          case ut:
            return D.key === K ? T(M, E, D, _) : null;
          case k:
            return D.key === K ? C(M, E, D, _) : null;
          case dt:
            return D = Bi(D), x(M, E, D, _);
        }
        if (xt(D) || tt(D))
          return K !== null ? null : R(M, E, D, _, null);
        if (typeof D.then == "function")
          return x(
            M,
            E,
            Xu(D),
            _
          );
        if (D.$$typeof === zt)
          return x(
            M,
            E,
            Lu(M, D),
            _
          );
        Qu(M, D);
      }
      return null;
    }
    function O(M, E, D, _, K) {
      if (typeof _ == "string" && _ !== "" || typeof _ == "number" || typeof _ == "bigint")
        return M = M.get(D) || null, m(E, M, "" + _, K);
      if (typeof _ == "object" && _ !== null) {
        switch (_.$$typeof) {
          case ut:
            return M = M.get(
              _.key === null ? D : _.key
            ) || null, T(E, M, _, K);
          case k:
            return M = M.get(
              _.key === null ? D : _.key
            ) || null, C(E, M, _, K);
          case dt:
            return _ = Bi(_), O(
              M,
              E,
              D,
              _,
              K
            );
        }
        if (xt(_) || tt(_))
          return M = M.get(D) || null, R(E, M, _, K, null);
        if (typeof _.then == "function")
          return O(
            M,
            E,
            D,
            Xu(_),
            K
          );
        if (_.$$typeof === zt)
          return O(
            M,
            E,
            D,
            Lu(E, _),
            K
          );
        Qu(E, _);
      }
      return null;
    }
    function G(M, E, D, _) {
      for (var K = null, vt = null, W = E, nt = E = 0, Jt = null; W !== null && nt < D.length; nt++) {
        W.index > nt ? (Jt = W, W = null) : Jt = W.sibling;
        var St = x(
          M,
          W,
          D[nt],
          _
        );
        if (St === null) {
          W === null && (W = Jt);
          break;
        }
        t && W && St.alternate === null && e(M, W), E = s(St, E, nt), vt === null ? K = St : vt.sibling = St, vt = St, W = Jt;
      }
      if (nt === D.length)
        return n(M, W), ht && _n(M, nt), K;
      if (W === null) {
        for (; nt < D.length; nt++)
          W = V(M, D[nt], _), W !== null && (E = s(
            W,
            E,
            nt
          ), vt === null ? K = W : vt.sibling = W, vt = W);
        return ht && _n(M, nt), K;
      }
      for (W = i(W); nt < D.length; nt++)
        Jt = O(
          W,
          M,
          nt,
          D[nt],
          _
        ), Jt !== null && (t && (St = Jt.alternate, St !== null && W.delete(St.key === null ? nt : St.key)), E = s(
          Jt,
          E,
          nt
        ), vt === null ? K = Jt : vt.sibling = Jt, vt = Jt);
      return t && W.forEach(function(pi) {
        return e(M, pi);
      }), ht && _n(M, nt), K;
    }
    function F(M, E, D, _) {
      if (D == null) throw Error(r(151));
      for (var K = null, vt = null, W = E, nt = E = 0, Jt = null, St = D.next(); W !== null && !St.done; nt++, St = D.next()) {
        W.index > nt ? (Jt = W, W = null) : Jt = W.sibling;
        var pi = x(M, W, St.value, _);
        if (pi === null) {
          W === null && (W = Jt);
          break;
        }
        t && W && pi.alternate === null && e(M, W), E = s(pi, E, nt), vt === null ? K = pi : vt.sibling = pi, vt = pi, W = Jt;
      }
      if (St.done)
        return n(M, W), ht && _n(M, nt), K;
      if (W === null) {
        for (; !St.done; nt++, St = D.next())
          St = V(M, St.value, _), St !== null && (E = s(St, E, nt), vt === null ? K = St : vt.sibling = St, vt = St);
        return ht && _n(M, nt), K;
      }
      for (W = i(W); !St.done; nt++, St = D.next())
        St = O(W, M, nt, St.value, _), St !== null && (t && (Jt = St.alternate, Jt !== null && W.delete(
          Jt.key === null ? nt : Jt.key
        )), E = s(St, E, nt), vt === null ? K = St : vt.sibling = St, vt = St);
      return t && W.forEach(function(ab) {
        return e(M, ab);
      }), ht && _n(M, nt), K;
    }
    function ct(M, E, D, _) {
      if (typeof D == "object" && D !== null && D.type === mt && D.key === null && D.props.ref === void 0 && (D = D.props.children), typeof D == "object" && D !== null) {
        switch (D.$$typeof) {
          case ut:
            t: {
              for (var K = D.key; E !== null; ) {
                if (E.key === K) {
                  if (K = D.type, K === mt) {
                    if (E.tag === 7) {
                      n(
                        M,
                        E.sibling
                      ), _ = u(
                        E,
                        D.props.children
                      ), In(_, D), _.return = M, M = _;
                      break t;
                    }
                  } else if (E.elementType === K || typeof K == "object" && K !== null && K.$$typeof === dt && Bi(K) === E.type) {
                    n(
                      M,
                      E.sibling
                    ), _ = u(E, D.props), In(_, D), _.return = M, M = _;
                    break t;
                  }
                  n(M, E);
                  break;
                } else e(M, E);
                E = E.sibling;
              }
              D.type === mt ? (_ = Ri(
                D.props.children,
                M.mode,
                _,
                D.key
              ), In(_, D), _.return = M, M = _) : (_ = Vu(
                D.type,
                D.key,
                D.props,
                null,
                M.mode,
                _
              ), In(_, D), _.return = M, M = _);
            }
            return f(M);
          case k:
            t: {
              for (K = D.key; E !== null; ) {
                if (E.key === K)
                  if (E.tag === 4 && E.stateNode.containerInfo === D.containerInfo && E.stateNode.implementation === D.implementation) {
                    n(
                      M,
                      E.sibling
                    ), _ = u(E, D.children || []), _.return = M, M = _;
                    break t;
                  } else {
                    n(M, E);
                    break;
                  }
                else e(M, E);
                E = E.sibling;
              }
              _ = er(D, M.mode, _), _.return = M, M = _;
            }
            return f(M);
          case dt:
            return D = Bi(D), ct(
              M,
              E,
              D,
              _
            );
        }
        if (xt(D))
          return G(
            M,
            E,
            D,
            _
          );
        if (tt(D)) {
          if (K = tt(D), typeof K != "function") throw Error(r(150));
          return D = K.call(D), F(
            M,
            E,
            D,
            _
          );
        }
        if (typeof D.then == "function")
          return ct(
            M,
            E,
            Xu(D),
            _
          );
        if (D.$$typeof === zt)
          return ct(
            M,
            E,
            Lu(M, D),
            _
          );
        Qu(M, D);
      }
      return typeof D == "string" && D !== "" || typeof D == "number" || typeof D == "bigint" ? (D = "" + D, E !== null && E.tag === 6 ? (n(M, E.sibling), _ = u(E, D), _.return = M, M = _) : (n(M, E), _ = tr(D, M.mode, _), _.return = M, M = _), f(M)) : n(M, E);
    }
    return function(M, E, D, _) {
      try {
        vl = 0;
        var K = ct(
          M,
          E,
          D,
          _
        );
        return va = null, K;
      } catch (W) {
        if (W === ga || W === qu) throw W;
        var vt = Ee(29, W, null, M.mode);
        return vt.lanes = _, vt.return = M, vt;
      } finally {
      }
    };
  }
  var Hi = Qd(!0), Zd = Qd(!1), Wn = !1;
  function fr(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function hr(t, e) {
    t = t.updateQueue, e.updateQueue === t && (e.updateQueue = {
      baseState: t.baseState,
      firstBaseUpdate: t.firstBaseUpdate,
      lastBaseUpdate: t.lastBaseUpdate,
      shared: t.shared,
      callbacks: null
    });
  }
  function $n(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function ti(t, e, n) {
    var i = t.updateQueue;
    if (i === null) return null;
    if (i = i.shared, (Mt & 2) !== 0) {
      var u = i.pending;
      return u === null ? e.next = e : (e.next = u.next, u.next = e), i.pending = e, e = _u(t), Od(t, null, n), e;
    }
    return Nu(t, i, e, n), _u(t);
  }
  function Sl(t, e, n) {
    if (e = e.updateQueue, e !== null && (e = e.shared, (n & 4194048) !== 0)) {
      var i = e.lanes;
      i &= t.pendingLanes, n |= i, e.lanes = n, _h(t, n);
    }
  }
  function dr(t, e) {
    var n = t.updateQueue, i = t.alternate;
    if (i !== null && (i = i.updateQueue, n === i)) {
      var u = null, s = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var f = {
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: null,
            next: null
          };
          s === null ? u = s = f : s = s.next = f, n = n.next;
        } while (n !== null);
        s === null ? u = s = e : s = s.next = e;
      } else u = s = e;
      n = {
        baseState: i.baseState,
        firstBaseUpdate: u,
        lastBaseUpdate: s,
        shared: i.shared,
        callbacks: i.callbacks
      }, t.updateQueue = n;
      return;
    }
    t = n.lastBaseUpdate, t === null ? n.firstBaseUpdate = e : t.next = e, n.lastBaseUpdate = e;
  }
  var mr = !1;
  function Tl() {
    if (mr) {
      var t = pa;
      if (t !== null) throw t;
    }
  }
  function bl(t, e, n, i) {
    mr = !1;
    var u = t.updateQueue;
    Wn = !1;
    var s = u.firstBaseUpdate, f = u.lastBaseUpdate, m = u.shared.pending;
    if (m !== null) {
      u.shared.pending = null;
      var T = m, C = T.next;
      T.next = null, f === null ? s = C : f.next = C, f = T;
      var R = t.alternate;
      R !== null && (R = R.updateQueue, m = R.lastBaseUpdate, m !== f && (m === null ? R.firstBaseUpdate = C : m.next = C, R.lastBaseUpdate = T));
    }
    if (s !== null) {
      var V = u.baseState;
      f = 0, R = C = T = null, m = s;
      do {
        var x = m.lane & -536870913, O = x !== m.lane;
        if (O ? (gt & x) === x : (i & x) === x) {
          x !== 0 && x === wi && (mr = !0), R !== null && (R = R.next = {
            lane: 0,
            tag: m.tag,
            payload: m.payload,
            callback: null,
            next: null
          });
          t: {
            var G = t, F = m;
            x = e;
            var ct = n;
            switch (F.tag) {
              case 1:
                if (G = F.payload, typeof G == "function") {
                  V = G.call(ct, V, x);
                  break t;
                }
                V = G;
                break t;
              case 3:
                G.flags = G.flags & -65537 | 128;
              case 0:
                if (G = F.payload, x = typeof G == "function" ? G.call(ct, V, x) : G, x == null) break t;
                V = Z({}, V, x);
                break t;
              case 2:
                Wn = !0;
            }
          }
          x = m.callback, x !== null && (t.flags |= 64, O && (t.flags |= 8192), O = u.callbacks, O === null ? u.callbacks = [x] : O.push(x));
        } else
          O = {
            lane: x,
            tag: m.tag,
            payload: m.payload,
            callback: m.callback,
            next: null
          }, R === null ? (C = R = O, T = V) : R = R.next = O, f |= x;
        if (m = m.next, m === null) {
          if (m = u.shared.pending, m === null)
            break;
          O = m, m = O.next, O.next = null, u.lastBaseUpdate = O, u.shared.pending = null;
        }
      } while (!0);
      R === null && (T = V), u.baseState = T, u.firstBaseUpdate = C, u.lastBaseUpdate = R, s === null && (u.shared.lanes = 0), si |= f, t.lanes = f, t.memoizedState = V;
    }
  }
  function Kd(t, e) {
    if (typeof t != "function")
      throw Error(r(191, t));
    t.call(e);
  }
  function Jd(t, e) {
    var n = t.callbacks;
    if (n !== null)
      for (t.callbacks = null, t = 0; t < n.length; t++)
        Kd(n[t], e);
  }
  var ei = sn(null), Zu = sn(0);
  function Fd(t, e) {
    t = Ln, Ut(Zu, t), Ut(ei, e), Ln = t | e.baseLanes;
  }
  function yr() {
    Ut(Zu, Ln), Ut(ei, ei.current);
  }
  function pr() {
    Ln = Zu.current, ae(ei), ae(Zu);
  }
  var se = sn(null), me = null;
  function ni(t) {
    var e = t.alternate;
    Ut(oe, oe.current & 1), Ut(se, t), me === null && (e === null || ei.current !== null || e.memoizedState !== null) && (me = t);
  }
  function gr(t) {
    Ut(oe, oe.current), Ut(se, t), me === null && (me = t);
  }
  function Pd(t) {
    t.tag === 22 ? (Ut(oe, oe.current), Ut(se, t), me === null && (me = t)) : ii();
  }
  function ii() {
    Ut(oe, oe.current), Ut(se, se.current);
  }
  function Ve(t) {
    ae(se), me === t && (me = null), ae(oe);
  }
  var oe = sn(0);
  function El(t, e) {
    Ut(se, se.current), Ut(oe, e);
  }
  function vr(t) {
    ae(oe), ae(se), me === t && (me = null);
  }
  function Ku(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var n = e.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || Yc(n) || qc(n)))
          return e;
      } else if (e.tag === 19 && e.memoizedProps.revealOrder !== "independent") {
        if ((e.flags & 128) !== 0) return e;
      } else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue;
      }
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return null;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
    return null;
  }
  var Un = 0, rt = null, Nt = null, Zt = null, Ju = !1, Sa = !1, Li = !1, Fu = 0, Al = 0, Ta = null, MS = 0;
  function qt() {
    throw Error(r(321));
  }
  function Sr(t, e) {
    if (e === null) return !1;
    for (var n = 0; n < e.length && n < t.length; n++)
      if (!_e(t[n], e[n])) return !1;
    return !0;
  }
  function Tr(t, e, n, i, u, s) {
    return Un = s, rt = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, I.H = t === null || t.memoizedState === null ? _m : Vm, Li = !1, s = n(i, u), Li = !1, Sa && (s = Id(
      e,
      n,
      i,
      u
    )), kd(t), s;
  }
  function kd(t) {
    I.H = es;
    var e = Nt !== null && Nt.next !== null;
    if (Un = 0, Zt = Nt = rt = null, Ju = !1, Al = 0, Ta = null, e) throw Error(r(300));
    t === null || Kt || (t = t.dependencies, t !== null && Hu(t) && (Kt = !0));
  }
  function Id(t, e, n, i) {
    rt = t;
    var u = 0;
    do {
      if (Sa && (Ta = null), Al = 0, Sa = !1, 25 <= u) throw Error(r(301));
      if (u += 1, Zt = Nt = null, t.updateQueue != null) {
        var s = t.updateQueue;
        s.lastEffect = null, s.events = null, s.stores = null, s.memoCache != null && (s.memoCache.index = 0);
      }
      I.H = VS, s = e(n, i);
    } while (Sa);
    return s;
  }
  function CS() {
    var t = I.H, e = t.useState()[0];
    return e = typeof e.then == "function" ? xl(e) : e, t = t.useState()[0], (Nt !== null ? Nt.memoizedState : null) !== t && (rt.flags |= 1024), e;
  }
  function br() {
    var t = Fu !== 0;
    return Fu = 0, t;
  }
  function Er(t, e, n) {
    e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~n;
  }
  function Ar(t) {
    if (Ju) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        e !== null && (e.pending = null), t = t.next;
      }
      Ju = !1;
    }
    Un = 0, Zt = Nt = rt = null, Sa = !1, Al = Fu = 0, Ta = null;
  }
  function pe() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Zt === null ? rt.memoizedState = Zt = t : Zt = Zt.next = t, Zt;
  }
  function Xt() {
    if (Nt === null) {
      var t = rt.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = Nt.next;
    var e = Zt === null ? rt.memoizedState : Zt.next;
    if (e !== null)
      Zt = e, Nt = t;
    else {
      if (t === null)
        throw rt.alternate === null ? Error(r(467)) : Error(r(310));
      Nt = t, t = {
        memoizedState: Nt.memoizedState,
        baseState: Nt.baseState,
        baseQueue: Nt.baseQueue,
        queue: Nt.queue,
        next: null
      }, Zt === null ? rt.memoizedState = Zt = t : Zt = Zt.next = t;
    }
    return Zt;
  }
  function Pu() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function xl(t) {
    var e = Al;
    return Al += 1, Ta === null && (Ta = []), t = qd(Ta, t, e), e = rt, (Zt === null ? e.memoizedState : Zt.next) === null && (e = e.alternate, I.H = e === null || e.memoizedState === null ? _m : Vm), t;
  }
  function ku(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return xl(t);
      if (t.$$typeof === j) return;
      if (t.$$typeof === zt) return ue(t);
    }
    throw Error(r(438, String(t)));
  }
  function xr(t) {
    var e = null, n = rt.updateQueue;
    if (n !== null && (e = n.memoCache), e == null) {
      var i = rt.alternate;
      i !== null && (i = i.updateQueue, i !== null && (i = i.memoCache, i != null && (e = {
        data: i.data.map(function(u) {
          return u.slice();
        }),
        index: 0
      })));
    }
    if (e == null && (e = { data: [], index: 0 }), n === null && (n = Pu(), rt.updateQueue = n), n.memoCache = e, n = e.data[e.index], n === void 0)
      for (n = e.data[e.index] = Array(t), i = 0; i < t; i++)
        n[i] = Ei;
    return e.index++, n;
  }
  function Bn(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function Iu(t) {
    var e = Xt();
    return Mr(e, Nt, t);
  }
  function Mr(t, e, n) {
    var i = t.queue;
    if (i === null) throw Error(r(311));
    i.lastRenderedReducer = n;
    var u = t.baseQueue, s = i.pending;
    if (s !== null) {
      if (u !== null) {
        var f = u.next;
        u.next = s.next, s.next = f;
      }
      e.baseQueue = u = s, i.pending = null;
    }
    if (s = t.baseState, u === null) t.memoizedState = s;
    else {
      e = u.next;
      var m = f = null, T = null, C = e, R = !1;
      do {
        var V = C.lane & -536870913;
        if (V !== C.lane ? (gt & V) === V : (Un & V) === V) {
          var x = C.revertLane;
          if (x === 0)
            T !== null && (T = T.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: C.action,
              hasEagerState: C.hasEagerState,
              eagerState: C.eagerState,
              next: null
            }), V === wi && (R = !0);
          else if ((Un & x) === x) {
            C = C.next, x === wi && (R = !0);
            continue;
          } else
            V = {
              lane: 0,
              revertLane: C.revertLane,
              gesture: null,
              action: C.action,
              hasEagerState: C.hasEagerState,
              eagerState: C.eagerState,
              next: null
            }, T === null ? (m = T = V, f = s) : T = T.next = V, rt.lanes |= x, si |= x;
          V = C.action, Li && n(s, V), s = C.hasEagerState ? C.eagerState : n(s, V);
        } else
          x = {
            lane: V,
            revertLane: C.revertLane,
            gesture: C.gesture,
            action: C.action,
            hasEagerState: C.hasEagerState,
            eagerState: C.eagerState,
            next: null
          }, T === null ? (m = T = x, f = s) : T = T.next = x, rt.lanes |= V, si |= V;
        C = C.next;
      } while (C !== null && C !== e);
      if (T === null ? f = s : T.next = m, !_e(s, t.memoizedState) && (Kt = !0, R && (n = pa, n !== null)))
        throw n;
      t.memoizedState = s, t.baseState = f, t.baseQueue = T, i.lastRenderedState = s;
    }
    return u === null && (i.lanes = 0), [t.memoizedState, i.dispatch];
  }
  function Cr(t) {
    var e = Xt(), n = e.queue;
    if (n === null) throw Error(r(311));
    n.lastRenderedReducer = t;
    var i = n.dispatch, u = n.pending, s = e.memoizedState;
    if (u !== null) {
      n.pending = null;
      var f = u = u.next;
      do
        s = t(s, f.action), f = f.next;
      while (f !== u);
      _e(s, e.memoizedState) || (Kt = !0), e.memoizedState = s, e.baseQueue === null && (e.baseState = s), n.lastRenderedState = s;
    }
    return [s, i];
  }
  function Wd(t, e, n) {
    var i = rt, u = Xt(), s = ht;
    if (s) {
      if (n === void 0) throw Error(r(407));
      n = n();
    } else n = e();
    var f = !_e(
      (Nt || u).memoizedState,
      n
    );
    if (f && (u.memoizedState = n, Kt = !0), u = u.queue, Rr(em.bind(null, i, u, t), [
      t
    ]), t = u.getSnapshot !== e || f || Zt !== null && (Zt.memoizedState.tag & 1) !== 0, ba(
      t ? 9 : 8,
      { destroy: void 0 },
      tm.bind(null, i, u, n, e),
      null
    ), t) {
      if (i.flags |= 2048, _t === null) throw Error(r(349));
      s || (Un & 127) !== 0 || $d(i, e, n);
    }
    return n;
  }
  function $d(t, e, n) {
    t.flags |= 16384, t = { getSnapshot: e, value: n }, e = rt.updateQueue, e === null ? (e = Pu(), rt.updateQueue = e, e.stores = [t]) : (n = e.stores, n === null ? e.stores = [t] : n.push(t));
  }
  function tm(t, e, n, i) {
    e.value = n, e.getSnapshot = i, nm(e) && im(t);
  }
  function em(t, e, n) {
    return n(function() {
      nm(e) && im(t);
    });
  }
  function nm(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var n = e();
      return !_e(t, n);
    } catch {
      return !0;
    }
  }
  function im(t) {
    var e = Oi(t, 2);
    e !== null && Ce(e, t, 2);
  }
  function Dr(t) {
    var e = pe();
    if (typeof t == "function") {
      var n = t;
      if (t = n(), Li) {
        Qn(!0);
        try {
          n();
        } finally {
          Qn(!1);
        }
      }
    }
    return e.memoizedState = e.baseState = t, e.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Bn,
      lastRenderedState: t
    }, e;
  }
  function am(t, e, n, i) {
    return t.baseState = n, Mr(
      t,
      Nt,
      typeof i == "function" ? i : Bn
    );
  }
  function DS(t, e, n, i, u) {
    if (ts(t)) throw Error(r(485));
    if (t = e.action, t !== null) {
      var s = {
        payload: u,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(f) {
          s.listeners.push(f);
        }
      };
      I.T !== null ? n(!0) : s.isTransition = !1, i(s), n = e.pending, n === null ? (s.next = e.pending = s, lm(e, s)) : (s.next = n.next, e.pending = n.next = s);
    }
  }
  function lm(t, e) {
    var n = e.action, i = e.payload, u = t.state;
    if (e.isTransition) {
      var s = I.T, f = {};
      f.types = s !== null ? s.types : null, I.T = f;
      try {
        var m = n(u, i), T = I.S;
        T !== null && T(f, m), um(t, e, m);
      } catch (C) {
        Or(t, e, C);
      } finally {
        s !== null && f.types !== null && (s.types = f.types), I.T = s;
      }
    } else
      try {
        s = n(u, i), um(t, e, s);
      } catch (C) {
        Or(t, e, C);
      }
  }
  function um(t, e, n) {
    n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(
      function(i) {
        sm(t, e, i);
      },
      function(i) {
        return Or(t, e, i);
      }
    ) : sm(t, e, n);
  }
  function sm(t, e, n) {
    e.status = "fulfilled", e.value = n, om(e), t.state = n, e = t.pending, e !== null && (n = e.next, n === e ? t.pending = null : (n = n.next, e.next = n, lm(t, n)));
  }
  function Or(t, e, n) {
    var i = t.pending;
    if (t.pending = null, i !== null) {
      i = i.next;
      do
        e.status = "rejected", e.reason = n, om(e), e = e.next;
      while (e !== i);
    }
    t.action = null;
  }
  function om(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function rm(t, e) {
    return e;
  }
  function cm(t, e) {
    if (ht) {
      var n = _t.formState;
      if (n !== null) {
        t: {
          var i = rt;
          if (ht) {
            if (Bt) {
              e: {
                for (var u = Bt, s = Qe; u.nodeType !== 8; ) {
                  if (!s) {
                    u = null;
                    break e;
                  }
                  if (u = Ke(
                    u.nextSibling
                  ), u === null) {
                    u = null;
                    break e;
                  }
                }
                s = u.data, u = s === "F!" || s === "F" ? u : null;
              }
              if (u) {
                Bt = Ke(
                  u.nextSibling
                ), i = u.data === "F!";
                break t;
              }
            }
            Pn(i);
          }
          i = !1;
        }
        i && (e = n[0]);
      }
    }
    return n = pe(), n.memoizedState = n.baseState = e, i = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: rm,
      lastRenderedState: e
    }, n.queue = i, n = Rm.bind(
      null,
      rt,
      i
    ), i.dispatch = n, i = Dr(!1), s = wr.bind(
      null,
      rt,
      !1,
      i.queue
    ), i = pe(), u = {
      state: e,
      dispatch: null,
      action: t,
      pending: null
    }, i.queue = u, n = DS.bind(
      null,
      rt,
      u,
      s,
      n
    ), u.dispatch = n, i.memoizedState = t, [e, n, !1];
  }
  function fm(t) {
    var e = Xt();
    return hm(e, Nt, t);
  }
  function hm(t, e, n) {
    if (e = Mr(
      t,
      e,
      rm
    )[0], t = Iu(Bn)[0], typeof e == "object" && e !== null && typeof e.then == "function")
      try {
        var i = xl(e);
      } catch (f) {
        throw f === ga ? qu : f;
      }
    else i = e;
    e = Xt();
    var u = e.queue, s = u.dispatch;
    return n !== e.memoizedState && (rt.flags |= 2048, ba(
      9,
      { destroy: void 0 },
      OS.bind(null, u, n),
      null
    )), [i, s, t];
  }
  function OS(t, e) {
    t.action = e;
  }
  function dm(t) {
    var e = Xt(), n = Nt;
    if (n !== null)
      return hm(e, n, t);
    Xt(), e = e.memoizedState, n = Xt();
    var i = n.queue.dispatch;
    return n.memoizedState = t, [e, i, !1];
  }
  function ba(t, e, n, i) {
    return t = { tag: t, create: n, deps: i, inst: e, next: null }, e = rt.updateQueue, e === null && (e = Pu(), rt.updateQueue = e), n = e.lastEffect, n === null ? e.lastEffect = t.next = t : (i = n.next, n.next = t, t.next = i, e.lastEffect = t), t;
  }
  function mm() {
    return Xt().memoizedState;
  }
  function Wu(t, e, n, i) {
    var u = pe();
    rt.flags |= t, u.memoizedState = ba(
      1 | e,
      { destroy: void 0 },
      n,
      i === void 0 ? null : i
    );
  }
  function $u(t, e, n, i) {
    var u = Xt();
    i = i === void 0 ? null : i;
    var s = u.memoizedState.inst;
    Nt !== null && i !== null && Sr(i, Nt.memoizedState.deps) ? u.memoizedState = ba(e, s, n, i) : (rt.flags |= t, u.memoizedState = ba(
      1 | e,
      s,
      n,
      i
    ));
  }
  function ym(t, e) {
    Wu(8390656, 8, t, e);
  }
  function Rr(t, e) {
    $u(2048, 8, t, e);
  }
  function RS(t) {
    rt.flags |= 4;
    var e = rt.updateQueue;
    if (e === null)
      e = Pu(), rt.updateQueue = e, e.events = [t];
    else {
      var n = e.events;
      n === null ? e.events = [t] : n.push(t);
    }
  }
  function pm(t) {
    var e = Xt().memoizedState;
    return RS({ ref: e, nextImpl: t }), function() {
      if ((Mt & 2) !== 0) throw Error(r(440));
      return e.impl.apply(void 0, arguments);
    };
  }
  function gm(t, e) {
    return $u(4, 2, t, e);
  }
  function vm(t, e) {
    return $u(4, 4, t, e);
  }
  function Sm(t, e) {
    if (typeof e == "function") {
      t = t();
      var n = e(t);
      return function() {
        typeof n == "function" ? n() : e(null);
      };
    }
    if (e != null)
      return t = t(), e.current = t, function() {
        e.current = null;
      };
  }
  function Tm(t, e, n) {
    n = n != null ? n.concat([t]) : null, $u(4, 4, Sm.bind(null, e, t), n);
  }
  function zr() {
  }
  function bm(t, e) {
    var n = Xt();
    e = e === void 0 ? null : e;
    var i = n.memoizedState;
    return e !== null && Sr(e, i[1]) ? i[0] : (n.memoizedState = [t, e], t);
  }
  function Em(t, e) {
    var n = Xt();
    e = e === void 0 ? null : e;
    var i = n.memoizedState;
    if (e !== null && Sr(e, i[1]))
      return i[0];
    if (i = t(), Li) {
      Qn(!0);
      try {
        t();
      } finally {
        Qn(!1);
      }
    }
    return n.memoizedState = [i, e], i;
  }
  function Nr(t, e, n) {
    return n === void 0 || (Un & 1073741824) !== 0 && (gt & 261930) === 0 ? t.memoizedState = e : (t.memoizedState = n, t = _y(), rt.lanes |= t, si |= t, n);
  }
  function Am(t, e, n, i) {
    return _e(n, e) ? n : ei.current !== null ? (t = Nr(t, n, i), _e(t, e) || (Kt = !0), t) : (Un & 106) === 0 || (Un & 1073741824) !== 0 && (gt & 261930) === 0 ? (Kt = !0, t.memoizedState = n) : (t = _y(), rt.lanes |= t, si |= t, e);
  }
  function xm(t, e, n, i, u) {
    var s = st.p;
    st.p = s !== 0 && 8 > s ? s : 8;
    var f = I.T, m = {};
    m.types = f !== null ? f.types : null, I.T = m, wr(t, !1, e, n);
    try {
      var T = u(), C = I.S;
      if (C !== null && C(m, T), T !== null && typeof T == "object" && typeof T.then == "function") {
        var R = xS(
          T,
          i
        );
        Ml(
          t,
          e,
          R,
          je(t)
        );
      } else
        Ml(
          t,
          e,
          i,
          je(t)
        );
    } catch (V) {
      Ml(
        t,
        e,
        { then: function() {
        }, status: "rejected", reason: V },
        je()
      );
    } finally {
      st.p = s, f !== null && m.types !== null && (f.types = m.types), I.T = f;
    }
  }
  function zS() {
  }
  function _r(t, e, n, i) {
    if (t.tag !== 5) throw Error(r(476));
    var u = Mm(t).queue;
    xm(
      t,
      u,
      e,
      Mn,
      n === null ? zS : function() {
        return Cm(t), n(i);
      }
    );
  }
  function Mm(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: Mn,
      baseState: Mn,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Bn,
        lastRenderedState: Mn
      },
      next: null
    };
    var n = {};
    return e.next = {
      memoizedState: n,
      baseState: n,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Bn,
        lastRenderedState: n
      },
      next: null
    }, t.memoizedState = e, t = t.alternate, t !== null && (t.memoizedState = e), e;
  }
  function Cm(t) {
    var e = Mm(t);
    e.next === null && (e = t.alternate.memoizedState), Ml(
      t,
      e.next.queue,
      {},
      je()
    );
  }
  function Vr() {
    return ue(Ya);
  }
  function Dm() {
    return Xt().memoizedState;
  }
  function Om() {
    return Xt().memoizedState;
  }
  function NS(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var n = je();
          t = $n(n);
          var i = ti(e, t, n);
          i !== null && (Ce(i, e, n), Sl(i, e, n)), e = { cache: sr() }, t.payload = e;
          return;
      }
      e = e.return;
    }
  }
  function _S(t, e, n) {
    var i = je();
    n = {
      lane: i,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, ts(t) ? zm(e, n) : (n = Wo(t, e, n, i), n !== null && (Ce(n, t, i), Nm(n, e, i)));
  }
  function Rm(t, e, n) {
    var i = je();
    Ml(t, e, n, i);
  }
  function Ml(t, e, n, i) {
    var u = {
      lane: i,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (ts(t)) zm(e, u);
    else {
      var s = t.alternate;
      if (t.lanes === 0 && (s === null || s.lanes === 0) && (s = e.lastRenderedReducer, s !== null))
        try {
          var f = e.lastRenderedState, m = s(f, n);
          if (u.hasEagerState = !0, u.eagerState = m, _e(m, f))
            return Nu(t, e, u, 0), _t === null && zu(), !1;
        } catch {
        } finally {
        }
      if (n = Wo(t, e, u, i), n !== null)
        return Ce(n, t, i), Nm(n, e, i), !0;
    }
    return !1;
  }
  function wr(t, e, n, i) {
    if (i = {
      lane: 2,
      revertLane: xc(),
      gesture: null,
      action: i,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, ts(t)) {
      if (e) throw Error(r(479));
    } else
      e = Wo(
        t,
        n,
        i,
        2
      ), e !== null && Ce(e, t, 2);
  }
  function ts(t) {
    var e = t.alternate;
    return t === rt || e !== null && e === rt;
  }
  function zm(t, e) {
    Sa = Ju = !0;
    var n = t.pending;
    n === null ? e.next = e : (e.next = n.next, n.next = e), t.pending = e;
  }
  function Nm(t, e, n) {
    if ((n & 4194048) !== 0) {
      var i = e.lanes;
      i &= t.pendingLanes, n |= i, e.lanes = n, _h(t, n);
    }
  }
  var es = {
    readContext: ue,
    use: ku,
    useCallback: qt,
    useContext: qt,
    useEffect: qt,
    useImperativeHandle: qt,
    useLayoutEffect: qt,
    useInsertionEffect: qt,
    useMemo: qt,
    useReducer: qt,
    useRef: qt,
    useState: qt,
    useDebugValue: qt,
    useDeferredValue: qt,
    useTransition: qt,
    useSyncExternalStore: qt,
    useId: qt,
    useHostTransitionStatus: qt,
    useFormState: qt,
    useActionState: qt,
    useOptimistic: qt,
    useMemoCache: qt,
    useCacheRefresh: qt,
    useEffectEvent: qt
  }, _m = {
    readContext: ue,
    use: ku,
    useCallback: function(t, e) {
      return pe().memoizedState = [
        t,
        e === void 0 ? null : e
      ], t;
    },
    useContext: ue,
    useEffect: ym,
    useImperativeHandle: function(t, e, n) {
      n = n != null ? n.concat([t]) : null, Wu(
        4194308,
        4,
        Sm.bind(null, e, t),
        n
      );
    },
    useLayoutEffect: function(t, e) {
      return Wu(4194308, 4, t, e);
    },
    useInsertionEffect: function(t, e) {
      Wu(4, 2, t, e);
    },
    useMemo: function(t, e) {
      var n = pe();
      e = e === void 0 ? null : e;
      var i = t();
      if (Li) {
        Qn(!0);
        try {
          t();
        } finally {
          Qn(!1);
        }
      }
      return n.memoizedState = [i, e], i;
    },
    useReducer: function(t, e, n) {
      var i = pe();
      if (n !== void 0) {
        var u = n(e);
        if (Li) {
          Qn(!0);
          try {
            n(e);
          } finally {
            Qn(!1);
          }
        }
      } else u = e;
      return i.memoizedState = i.baseState = u, t = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: t,
        lastRenderedState: u
      }, i.queue = t, t = t.dispatch = _S.bind(
        null,
        rt,
        t
      ), [i.memoizedState, t];
    },
    useRef: function(t) {
      var e = pe();
      return t = { current: t }, e.memoizedState = t;
    },
    useState: function(t) {
      t = Dr(t);
      var e = t.queue, n = Rm.bind(null, rt, e);
      return e.dispatch = n, [t.memoizedState, n];
    },
    useDebugValue: zr,
    useDeferredValue: function(t, e) {
      var n = pe();
      return Nr(n, t, e);
    },
    useTransition: function() {
      var t = Dr(!1);
      return t = xm.bind(
        null,
        rt,
        t.queue,
        !0,
        !1
      ), pe().memoizedState = t, [!1, t];
    },
    useSyncExternalStore: function(t, e, n) {
      var i = rt, u = pe();
      if (ht) {
        if (n === void 0)
          throw Error(r(407));
        n = n();
      } else {
        if (n = e(), _t === null)
          throw Error(r(349));
        (gt & 127) !== 0 || $d(i, e, n);
      }
      u.memoizedState = n;
      var s = { value: n, getSnapshot: e };
      return u.queue = s, ym(em.bind(null, i, s, t), [
        t
      ]), i.flags |= 2048, ba(
        9,
        { destroy: void 0 },
        tm.bind(
          null,
          i,
          s,
          n,
          e
        ),
        null
      ), n;
    },
    useId: function() {
      var t = pe(), e = _t.identifierPrefix;
      if (ht) {
        var n = fn, i = cn;
        n = (i & ~(1 << 32 - ze(i) - 1)).toString(32) + n, e = "_" + e + "R_" + n, n = Fu++, 0 < n && (e += "H" + n.toString(32)), e += "_";
      } else
        n = MS++, e = "_" + e + "r_" + n.toString(32) + "_";
      return t.memoizedState = e;
    },
    useHostTransitionStatus: Vr,
    useFormState: cm,
    useActionState: cm,
    useOptimistic: function(t) {
      var e = pe();
      e.memoizedState = e.baseState = t;
      var n = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return e.queue = n, e = wr.bind(
        null,
        rt,
        !0,
        n
      ), n.dispatch = e, [t, e];
    },
    useMemoCache: xr,
    useCacheRefresh: function() {
      return pe().memoizedState = NS.bind(
        null,
        rt
      );
    },
    useEffectEvent: function(t) {
      var e = pe(), n = { impl: t };
      return e.memoizedState = n, function() {
        if ((Mt & 2) !== 0)
          throw Error(r(440));
        return n.impl.apply(void 0, arguments);
      };
    }
  }, Vm = {
    readContext: ue,
    use: ku,
    useCallback: bm,
    useContext: ue,
    useEffect: Rr,
    useImperativeHandle: Tm,
    useInsertionEffect: gm,
    useLayoutEffect: vm,
    useMemo: Em,
    useReducer: Iu,
    useRef: mm,
    useState: function() {
      return Iu(Bn);
    },
    useDebugValue: zr,
    useDeferredValue: function(t, e) {
      var n = Xt();
      return Am(
        n,
        Nt.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = Iu(Bn)[0], e = Xt().memoizedState;
      return [
        typeof t == "boolean" ? t : xl(t),
        e
      ];
    },
    useSyncExternalStore: Wd,
    useId: Dm,
    useHostTransitionStatus: Vr,
    useFormState: fm,
    useActionState: fm,
    useOptimistic: function(t, e) {
      var n = Xt();
      return am(n, Nt, t, e);
    },
    useMemoCache: xr,
    useCacheRefresh: Om,
    useEffectEvent: pm
  }, VS = {
    readContext: ue,
    use: ku,
    useCallback: bm,
    useContext: ue,
    useEffect: Rr,
    useImperativeHandle: Tm,
    useInsertionEffect: gm,
    useLayoutEffect: vm,
    useMemo: Em,
    useReducer: Cr,
    useRef: mm,
    useState: function() {
      return Cr(Bn);
    },
    useDebugValue: zr,
    useDeferredValue: function(t, e) {
      var n = Xt();
      return Nt === null ? Nr(n, t, e) : Am(
        n,
        Nt.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = Cr(Bn)[0], e = Xt().memoizedState;
      return [
        typeof t == "boolean" ? t : xl(t),
        e
      ];
    },
    useSyncExternalStore: Wd,
    useId: Dm,
    useHostTransitionStatus: Vr,
    useFormState: dm,
    useActionState: dm,
    useOptimistic: function(t, e) {
      var n = Xt();
      return Nt !== null ? am(n, Nt, t, e) : (n.baseState = t, [t, n.queue.dispatch]);
    },
    useMemoCache: xr,
    useCacheRefresh: Om,
    useEffectEvent: pm
  };
  function Ur(t, e, n, i) {
    e = t.memoizedState, n = n(i, e), n = n == null ? e : Z({}, e, n), t.memoizedState = n, t.lanes === 0 && (t.updateQueue.baseState = n);
  }
  var Br = {
    enqueueSetState: function(t, e, n) {
      t = t._reactInternals;
      var i = je(), u = $n(i);
      u.payload = e, n != null && (u.callback = n), e = ti(t, u, i), e !== null && (Ce(e, t, i), Sl(e, t, i));
    },
    enqueueReplaceState: function(t, e, n) {
      t = t._reactInternals;
      var i = je(), u = $n(i);
      u.tag = 1, u.payload = e, n != null && (u.callback = n), e = ti(t, u, i), e !== null && (Ce(e, t, i), Sl(e, t, i));
    },
    enqueueForceUpdate: function(t, e) {
      t = t._reactInternals;
      var n = je(), i = $n(n);
      i.tag = 2, e != null && (i.callback = e), e = ti(t, i, n), e !== null && (Ce(e, t, n), Sl(e, t, n));
    }
  };
  function wm(t, e, n, i, u, s, f) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(i, s, f) : e.prototype && e.prototype.isPureReactComponent ? !fl(n, i) || !fl(u, s) : !0;
  }
  function Um(t, e, n, i) {
    t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(n, i), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(n, i), e.state !== t && Br.enqueueReplaceState(e, e.state, null);
  }
  function Yi(t, e) {
    var n = e;
    if ("ref" in e) {
      n = {};
      for (var i in e)
        i !== "ref" && (n[i] = e[i]);
    }
    if (t = t.defaultProps) {
      n === e && (n = Z({}, n));
      for (var u in t)
        n[u] === void 0 && (n[u] = t[u]);
    }
    return n;
  }
  function Bm(t) {
    Ru(t);
  }
  function jm(t) {
    console.error(t);
  }
  function Hm(t) {
    Ru(t);
  }
  function ns(t, e) {
    try {
      var n = t.onUncaughtError;
      n(e.value, { componentStack: e.stack });
    } catch (i) {
      setTimeout(function() {
        throw i;
      });
    }
  }
  function Lm(t, e, n) {
    try {
      var i = t.onCaughtError;
      i(n.value, {
        componentStack: n.stack,
        errorBoundary: e.tag === 1 ? e.stateNode : null
      });
    } catch (u) {
      setTimeout(function() {
        throw u;
      });
    }
  }
  function jr(t, e, n) {
    return n = $n(n), n.tag = 3, n.payload = { element: null }, n.callback = function() {
      ns(t, e);
    }, n;
  }
  function Ym(t) {
    return t = $n(t), t.tag = 3, t;
  }
  function qm(t, e, n, i) {
    var u = n.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var s = i.value;
      t.payload = function() {
        return u(s);
      }, t.callback = function() {
        Lm(e, n, i);
      };
    }
    var f = n.stateNode;
    f !== null && typeof f.componentDidCatch == "function" && (t.callback = function() {
      Lm(e, n, i), typeof u != "function" && (oi === null ? oi = /* @__PURE__ */ new Set([this]) : oi.add(this));
      var m = i.stack;
      this.componentDidCatch(i.value, {
        componentStack: m !== null ? m : ""
      });
    });
  }
  function wS(t, e, n, i, u) {
    if (n.flags |= 32768, i !== null && typeof i == "object" && typeof i.then == "function") {
      if (e = n.alternate, e !== null && _i(
        e,
        n,
        u,
        !0
      ), n = se.current, n !== null) {
        switch (n.tag) {
          case 31:
          case 13:
          case 19:
            return me === null ? As() : n.alternate === null && Gt === 0 && (Gt = 3), n.flags &= -257, n.flags |= 65536, n.lanes = u, i === Gu ? n.flags |= 16384 : (e = n.updateQueue, e === null ? n.updateQueue = /* @__PURE__ */ new Set([i]) : e.add(i), bc(t, i, u)), !1;
          case 22:
            return n.flags |= 65536, i === Gu ? n.flags |= 16384 : (e = n.updateQueue, e === null ? (e = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([i])
            }, n.updateQueue = e) : (n = e.retryQueue, n === null ? e.retryQueue = /* @__PURE__ */ new Set([i]) : n.add(i)), bc(t, i, u)), !1;
        }
        throw Error(r(435, n.tag));
      }
      return bc(t, i, u), As(), !1;
    }
    if (ht)
      return e = se.current, e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256), e.flags |= 65536, e.lanes = u, i !== ir && (t = Error(r(422), { cause: i }), ml(qe(t, n)))) : (i !== ir && (e = Error(r(423), {
        cause: i
      }), ml(
        qe(e, n)
      )), t = t.current.alternate, t.flags |= 65536, u &= -u, t.lanes |= u, i = qe(i, n), u = jr(
        t.stateNode,
        i,
        u
      ), dr(t, u), Gt !== 4 && (Gt = 2)), !1;
    var s = Error(r(520), { cause: i });
    if (s = qe(s, n), Vl === null ? Vl = [s] : Vl.push(s), Gt !== 4 && (Gt = 2), e === null) return !0;
    i = qe(i, n), n = e;
    do {
      switch (n.tag) {
        case 3:
          return n.flags |= 65536, t = u & -u, n.lanes |= t, t = jr(n.stateNode, i, t), dr(n, t), !1;
        case 1:
          if (e = n.type, s = n.stateNode, (n.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || s !== null && typeof s.componentDidCatch == "function" && (oi === null || !oi.has(s))))
            return n.flags |= 65536, u &= -u, n.lanes |= u, u = Ym(u), qm(
              u,
              t,
              n,
              i
            ), dr(n, u), !1;
          break;
        case 22:
          if (n.memoizedState !== null)
            return n.flags |= 65536, !1;
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var Hr = Error(r(461)), Kt = !1;
  function Pt(t, e, n, i) {
    e.child = t === null ? Zd(e, null, n, i) : Hi(
      e,
      t.child,
      n,
      i
    );
  }
  function Gm(t, e, n, i, u) {
    n = n.render;
    var s = e.ref;
    if ("ref" in i) {
      var f = {};
      for (var m in i)
        m !== "ref" && (f[m] = i[m]);
    } else f = i;
    return Vi(e), i = Tr(
      t,
      e,
      n,
      f,
      s,
      u
    ), m = br(), t !== null && !Kt ? (Er(t, e, u), jn(t, e, u)) : (ht && m && Uu(e), e.flags |= 1, Pt(t, e, i, u), e.child);
  }
  function Xm(t, e, n, i, u) {
    if (t === null) {
      var s = n.type;
      return typeof s == "function" && !$o(s) && s.defaultProps === void 0 && n.compare === null ? (e.tag = 15, e.type = s, Qm(
        t,
        e,
        s,
        i,
        u
      )) : (t = Vu(
        n.type,
        null,
        i,
        e,
        e.mode,
        u
      ), t.ref = e.ref, t.return = e, e.child = t);
    }
    if (s = t.child, !Kr(t, u)) {
      var f = s.memoizedProps;
      if (n = n.compare, n = n !== null ? n : fl, n(f, i) && t.ref === e.ref)
        return jn(t, e, u);
    }
    return e.flags |= 1, t = Nn(s, i), t.ref = e.ref, t.return = e, e.child = t;
  }
  function Qm(t, e, n, i, u) {
    if (t !== null) {
      var s = t.memoizedProps;
      if (fl(s, i) && t.ref === e.ref)
        if (Kt = !1, e.pendingProps = i = s, Kr(t, u))
          (t.flags & 131072) !== 0 && (Kt = !0);
        else
          return e.lanes = t.lanes, jn(t, e, u);
    }
    return Lr(
      t,
      e,
      n,
      i,
      u
    );
  }
  function Zm(t, e, n, i) {
    var u = i.children, s = t !== null ? t.memoizedState : null;
    if (t === null && e.stateNode === null && (e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), i.mode === "hidden") {
      if ((e.flags & 128) !== 0) {
        if (s = s !== null ? s.baseLanes | n : n, t !== null) {
          for (i = e.child = t.child, u = 0; i !== null; )
            u = u | i.lanes | i.childLanes, i = i.sibling;
          i = u & ~s;
        } else i = 0, e.child = null;
        return Km(
          t,
          e,
          s,
          n,
          i
        );
      }
      if ((n & 536870912) !== 0)
        e.memoizedState = { baseLanes: 0, cachePool: null }, t !== null && Yu(
          e,
          s !== null ? s.cachePool : null
        ), s !== null ? Fd(e, s) : yr(), Pd(e);
      else
        return i = e.lanes = 536870912, Km(
          t,
          e,
          s !== null ? s.baseLanes | n : n,
          n,
          i
        );
    } else
      s !== null ? (Yu(e, s.cachePool), Fd(e, s), ii(), e.memoizedState = null) : (t !== null && Yu(e, null), yr(), ii());
    return Pt(t, e, u, n), e.child;
  }
  function Cl(t, e) {
    return t !== null && t.tag === 22 || e.stateNode !== null || (e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), e.sibling;
  }
  function Km(t, e, n, i, u) {
    var s = rr();
    return s = s === null ? null : { parent: Qt._currentValue, pool: s }, e.memoizedState = {
      baseLanes: n,
      cachePool: s
    }, t !== null && Yu(e, null), yr(), Pd(e), t !== null && _i(t, e, i, !0), e.childLanes = u, null;
  }
  function is(t, e) {
    return e = as(
      { mode: e.mode, children: e.children },
      t.mode
    ), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function Jm(t, e, n) {
    return Hi(e, t.child, null, n), t = is(e, e.pendingProps), t.flags |= 2, Ve(e), e.memoizedState = null, t;
  }
  function US(t, e, n) {
    var i = e.pendingProps, u = (e.flags & 128) !== 0;
    if (e.flags &= -129, t === null) {
      if (ht) {
        if (i.mode === "hidden")
          return t = is(e, i), e.lanes = 536870912, t.memoizedState = { baseLanes: 0, cachePool: null }, Cl(null, t);
        if (gr(e), (t = Bt) ? (t = Sp(
          t,
          Qe
        ), t = t !== null && t.data === "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: Jn !== null ? { id: cn, overflow: fn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = zd(t), n.return = e, e.child = n, ee = e, Bt = null)) : t = null, t === null) throw Pn(e);
        return e.lanes = 536870912, null;
      }
      return is(e, i);
    }
    var s = t.memoizedState;
    if (s !== null) {
      var f = s.dehydrated;
      if (gr(e), u)
        if (e.flags & 256)
          e.flags &= -257, e = Jm(
            t,
            e,
            n
          );
        else if (e.memoizedState !== null)
          e.child = t.child, e.flags |= 128, e = null;
        else throw Error(r(558));
      else if (Kt || _i(t, e, n, !1), u = (n & t.childLanes) !== 0, Kt || u) {
        if (ei.current === null) {
          if (i = _t, i !== null && (f = Vh(i, n), f !== 0 && f !== s.retryLane))
            throw s.retryLane = f, Oi(t, f), Ce(i, t, f), Hr;
          As();
        }
        e = Jm(
          t,
          e,
          n
        );
      } else
        t = s.treeContext, Bt = Ke(f.nextSibling), ee = e, ht = !0, Fn = null, Qe = !1, t !== null && Vd(e, t), e = is(e, i), e.flags |= 134221824;
      return e;
    }
    return t = Nn(t.child, {
      mode: i.mode,
      children: i.children
    }), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function Ea(t, e) {
    var n = e.ref;
    if (n === null)
      t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object")
        throw Error(r(284));
      (t === null || t.ref !== n) && (e.flags |= 4194816);
    }
  }
  function Lr(t, e, n, i, u) {
    return Vi(e), n = Tr(
      t,
      e,
      n,
      i,
      void 0,
      u
    ), i = br(), t !== null && !Kt ? (Er(t, e, u), jn(t, e, u)) : (ht && i && Uu(e), e.flags |= 1, Pt(t, e, n, u), e.child);
  }
  function Fm(t, e, n, i, u, s) {
    return Vi(e), e.updateQueue = null, n = Id(
      e,
      i,
      n,
      u
    ), kd(t), i = br(), t !== null && !Kt ? (Er(t, e, s), jn(t, e, s)) : (ht && i && Uu(e), e.flags |= 1, Pt(t, e, n, s), e.child);
  }
  function Pm(t, e, n, i, u) {
    if (Vi(e), e.stateNode === null) {
      var s = ha, f = n.contextType;
      typeof f == "object" && f !== null && (s = ue(f)), s = new n(i, s), e.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null, s.updater = Br, e.stateNode = s, s._reactInternals = e, s = e.stateNode, s.props = i, s.state = e.memoizedState, s.refs = {}, fr(e), f = n.contextType, s.context = typeof f == "object" && f !== null ? ue(f) : ha, s.state = e.memoizedState, f = n.getDerivedStateFromProps, typeof f == "function" && (Ur(
        e,
        n,
        f,
        i
      ), s.state = e.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof s.getSnapshotBeforeUpdate == "function" || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (f = s.state, typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount(), f !== s.state && Br.enqueueReplaceState(s, s.state, null), bl(e, i, s, u), Tl(), s.state = e.memoizedState), typeof s.componentDidMount == "function" && (e.flags |= 4194308), i = !0;
    } else if (t === null) {
      s = e.stateNode;
      var m = e.memoizedProps, T = Yi(n, m);
      s.props = T;
      var C = s.context, R = n.contextType;
      f = ha, typeof R == "object" && R !== null && (f = ue(R));
      var V = n.getDerivedStateFromProps;
      R = typeof V == "function" || typeof s.getSnapshotBeforeUpdate == "function", m = e.pendingProps !== m, R || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (m || C !== f) && Um(
        e,
        s,
        i,
        f
      ), Wn = !1;
      var x = e.memoizedState;
      s.state = x, bl(e, i, s, u), Tl(), C = e.memoizedState, m || x !== C || Wn ? (typeof V == "function" && (Ur(
        e,
        n,
        V,
        i
      ), C = e.memoizedState), (T = Wn || wm(
        e,
        n,
        T,
        i,
        x,
        C,
        f
      )) ? (R || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = i, e.memoizedState = C), s.props = i, s.state = C, s.context = f, i = T) : (typeof s.componentDidMount == "function" && (e.flags |= 4194308), i = !1);
    } else {
      s = e.stateNode, hr(t, e), f = e.memoizedProps, R = Yi(n, f), s.props = R, V = e.pendingProps, x = s.context, C = n.contextType, T = ha, typeof C == "object" && C !== null && (T = ue(C)), m = n.getDerivedStateFromProps, (C = typeof m == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (f !== V || x !== T) && Um(
        e,
        s,
        i,
        T
      ), Wn = !1, x = e.memoizedState, s.state = x, bl(e, i, s, u), Tl();
      var O = e.memoizedState;
      f !== V || x !== O || Wn || t !== null && t.dependencies !== null && Hu(t.dependencies) ? (typeof m == "function" && (Ur(
        e,
        n,
        m,
        i
      ), O = e.memoizedState), (R = Wn || wm(
        e,
        n,
        R,
        i,
        x,
        O,
        T
      ) || t !== null && t.dependencies !== null && Hu(t.dependencies)) ? (C || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, O, T), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(
        i,
        O,
        T
      )), typeof s.componentDidUpdate == "function" && (e.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || f === t.memoizedProps && x === t.memoizedState || (e.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || f === t.memoizedProps && x === t.memoizedState || (e.flags |= 1024), e.memoizedProps = i, e.memoizedState = O), s.props = i, s.state = O, s.context = T, i = R) : (typeof s.componentDidUpdate != "function" || f === t.memoizedProps && x === t.memoizedState || (e.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || f === t.memoizedProps && x === t.memoizedState || (e.flags |= 1024), i = !1);
    }
    return s = i, Ea(t, e), i = (e.flags & 128) !== 0, s || i ? (s = e.stateNode, n = i && typeof n.getDerivedStateFromError != "function" ? null : s.render(), e.flags |= 1, t !== null && i ? (e.child = Hi(
      e,
      t.child,
      null,
      u
    ), e.child = Hi(
      e,
      null,
      n,
      u
    )) : Pt(t, e, n, u), e.memoizedState = s.state, t = e.child) : t = jn(
      t,
      e,
      u
    ), t;
  }
  function km(t, e, n, i) {
    return zi(), e.flags |= 256, Pt(t, e, n, i), e.child;
  }
  var Yr = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function qr(t) {
    return { baseLanes: t, cachePool: Ld() };
  }
  function Gr(t, e, n) {
    return t = t !== null ? t.childLanes & ~n : 0, e && (t |= Be), t;
  }
  function Im(t, e, n) {
    var i = e.pendingProps, u = !1, s = (e.flags & 128) !== 0, f;
    if ((f = s) || (f = t !== null && t.memoizedState === null ? !1 : (oe.current & 2) !== 0), f && (u = !0, e.flags &= -129), f = (e.flags & 32) !== 0, e.flags &= -33, t === null) {
      if (ht) {
        if (u ? ni(e) : ii(), (t = Bt) ? (t = Sp(
          t,
          Qe
        ), t = t !== null && t.data !== "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: Jn !== null ? { id: cn, overflow: fn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = zd(t), n.return = e, e.child = n, ee = e, Bt = null)) : t = null, t === null) throw Pn(e);
        return qc(t) ? e.lanes = 32 : e.lanes = 536870912, null;
      }
      return s = i.children, i = i.fallback, u ? (ii(), u = e.mode, s = as(
        { mode: "hidden", children: s },
        u
      ), i = Ri(
        i,
        u,
        n,
        null
      ), s.return = e, i.return = e, s.sibling = i, e.child = s, i = e.child, i.memoizedState = qr(n), i.childLanes = Gr(
        t,
        f,
        n
      ), e.memoizedState = Yr, Cl(null, i)) : (ni(e), Xr(e, s));
    }
    var m = t.memoizedState;
    if (m !== null) {
      var T = m.dehydrated;
      if (T !== null)
        return BS(
          t,
          e,
          s,
          f,
          i,
          T,
          m,
          n
        );
    }
    return u ? (ii(), u = i.fallback, s = e.mode, m = t.child, T = m.sibling, i = Nn(m, {
      mode: "hidden",
      children: i.children
    }), i.subtreeFlags = m.subtreeFlags & 1206910976, T !== null ? u = Nn(T, u) : (u = Ri(
      u,
      s,
      n,
      null
    ), u.flags |= 2), u.return = e, i.return = e, i.sibling = u, e.child = i, Cl(null, i), i = e.child, u = t.child.memoizedState, u === null ? u = qr(n) : (s = u.cachePool, s !== null ? (m = Qt._currentValue, s = s.parent !== m ? { parent: m, pool: m } : s) : s = Ld(), u = {
      baseLanes: u.baseLanes | n,
      cachePool: s
    }), i.memoizedState = u, i.childLanes = Gr(
      t,
      f,
      n
    ), e.memoizedState = Yr, Cl(t.child, i)) : (ni(e), n = t.child, t = n.sibling, n = Nn(n, {
      mode: "visible",
      children: i.children
    }), n.return = e, n.sibling = null, t !== null && (f = e.deletions, f === null ? (e.deletions = [t], e.flags |= 16) : f.push(t)), e.child = n, e.memoizedState = null, n);
  }
  function Xr(t, e) {
    return e = as(
      { mode: "visible", children: e },
      t.mode
    ), e.return = t, t.child = e;
  }
  function as(t, e) {
    return t = Ee(22, t, null, e), t.lanes = 0, t;
  }
  function ls(t, e, n) {
    return Hi(e, t.child, null, n), t = Xr(
      e,
      e.pendingProps.children
    ), t.flags |= 2, e.memoizedState = null, t;
  }
  function BS(t, e, n, i, u, s, f, m) {
    if (n)
      return e.flags & 256 ? (ni(e), e.flags &= -257, ls(
        t,
        e,
        m
      )) : e.memoizedState !== null ? (ii(), e.child = t.child, e.flags |= 128, null) : (ii(), s = u.fallback, f = e.mode, u = as(
        { mode: "visible", children: u.children },
        f
      ), s = Ri(
        s,
        f,
        m,
        null
      ), s.flags |= 2, u.return = e, s.return = e, u.sibling = s, e.child = u, Hi(e, t.child, null, m), u = e.child, u.memoizedState = qr(m), u.childLanes = Gr(
        t,
        i,
        m
      ), e.memoizedState = Yr, Cl(null, u));
    if (ni(e), qc(s)) {
      if (i = s.nextSibling && s.nextSibling.dataset, i) var T = i.dgst;
      return i = T, i !== "" && (u = Error(r(419)), u.stack = "", u.digest = i, ml({ value: u, source: null, stack: null })), ls(
        t,
        e,
        m
      );
    }
    if (Kt || _i(t, e, m, !1), i = (m & t.childLanes) !== 0, Kt || i) {
      if (ei.current !== null)
        return ls(
          t,
          e,
          m
        );
      if (i = _t, i !== null && (u = Vh(
        i,
        m
      ), u !== 0 && u !== f.retryLane))
        throw f.retryLane = u, Oi(t, u), Ce(i, t, u), Hr;
      return Yc(s) || As(), ls(
        t,
        e,
        m
      );
    }
    return Yc(s) ? (e.flags |= 192, e.child = t.child, null) : (t = f.treeContext, Bt = Ke(s.nextSibling), ee = e, ht = !0, Fn = null, Qe = !1, t !== null && Vd(e, t), e = Xr(
      e,
      u.children
    ), e.flags |= 134221824, e);
  }
  function Wm(t, e, n) {
    t.lanes |= e;
    var i = t.alternate;
    i !== null && (i.lanes |= e), ju(t.return, e, n);
  }
  function $m(t) {
    for (var e = null; t !== null; ) {
      var n = t.alternate;
      n !== null && Ku(n) === null && (e = t), t = t.sibling;
    }
    return e;
  }
  function us(t, e, n, i, u, s) {
    var f = t.memoizedState;
    f === null ? t.memoizedState = {
      isBackwards: e,
      rendering: null,
      renderingStartTime: 0,
      last: i,
      tail: n,
      tailMode: u,
      treeForkCount: s
    } : (f.isBackwards = e, f.rendering = null, f.renderingStartTime = 0, f.last = i, f.tail = n, f.tailMode = u, f.treeForkCount = s);
  }
  function Qr(t) {
    var e = t.child;
    for (t.child = null; e !== null; ) {
      var n = e.sibling;
      e.sibling = t.child, t.child = e, e = n;
    }
  }
  function Zr(t, e, n) {
    var i = e.pendingProps, u = i.revealOrder, s = i.tail;
    i = i.children;
    var f = oe.current;
    if (e.flags & 128)
      return El(e, f), null;
    var m = (f & 2) !== 0;
    if (m ? (f = f & 1 | 2, e.flags |= 128) : f &= 1, El(e, f), u === "backwards" && t !== null ? (Qr(t), Pt(t, e, i, n), Qr(t)) : Pt(t, e, i, n), i = ht ? dl : 0, !m && t !== null && (t.flags & 128) !== 0)
      t: for (t = e.child; t !== null; ) {
        if (t.tag === 13)
          t.memoizedState !== null && Wm(t, n, e);
        else if (t.tag === 19)
          Wm(t, n, e);
        else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e) break t;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            break t;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    switch (u) {
      case "backwards":
        n = $m(e.child), n === null ? (u = e.child, e.child = null) : (u = n.sibling, n.sibling = null, Qr(e)), us(
          e,
          !0,
          u,
          null,
          s,
          i
        );
        break;
      case "unstable_legacy-backwards":
        for (n = null, u = e.child, e.child = null; u !== null; ) {
          if (t = u.alternate, t !== null && Ku(t) === null) {
            e.child = u;
            break;
          }
          t = u.sibling, u.sibling = n, n = u, u = t;
        }
        us(
          e,
          !0,
          n,
          null,
          s,
          i
        );
        break;
      case "together":
        us(
          e,
          !1,
          null,
          null,
          void 0,
          i
        );
        break;
      case "independent":
        e.memoizedState = null;
        break;
      default:
        n = $m(e.child), n === null ? (u = e.child, e.child = null) : (u = n.sibling, n.sibling = null), us(
          e,
          !1,
          u,
          n,
          s,
          i
        );
    }
    return e.child;
  }
  function ty(t, e, n) {
    var i = e.pendingProps;
    return kn(e, e.type, i.value), Pt(t, e, i.children, n), e.child;
  }
  function jn(t, e, n) {
    if (t !== null && (e.dependencies = t.dependencies), si |= e.lanes, (n & e.childLanes) === 0)
      if (t !== null) {
        if (_i(
          t,
          e,
          n,
          !1
        ), (n & e.childLanes) === 0)
          return null;
      } else return null;
    if (t !== null && e.child !== t.child)
      throw Error(r(153));
    if (e.child !== null) {
      for (t = e.child, n = Nn(t, t.pendingProps), e.child = n, n.return = e; t.sibling !== null; )
        t = t.sibling, n = n.sibling = Nn(t, t.pendingProps), n.return = e;
      n.sibling = null;
    }
    return e.child;
  }
  function Kr(t, e) {
    return (t.lanes & e) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && Hu(t)));
  }
  function jS(t, e, n) {
    switch (e.tag) {
      case 3:
        fu(e, e.stateNode.containerInfo), kn(e, Qt, t.memoizedState.cache), zi();
        break;
      case 27:
      case 5:
        So(e);
        break;
      case 4:
        fu(e, e.stateNode.containerInfo);
        break;
      case 10:
        kn(
          e,
          e.type,
          e.memoizedProps.value
        );
        break;
      case 31:
        if (e.memoizedState !== null)
          return e.flags |= 128, gr(e), null;
        break;
      case 13:
        var i = e.memoizedState;
        if (i !== null) {
          if (i.dehydrated !== null)
            return ni(e), e.flags |= 128, null;
          i = _i(
            t,
            e,
            n,
            !1
          );
          var u = e.child.childLanes;
          return i || (n & u) !== 0 ? Im(t, e, n) : (ni(e), t = jn(
            t,
            e,
            n
          ), t !== null ? t.sibling : null);
        }
        ni(e);
        break;
      case 19:
        if (e.flags & 128)
          return Zr(
            t,
            e,
            n
          );
        if (u = (t.flags & 128) !== 0, i = (n & e.childLanes) !== 0, i || (_i(
          t,
          e,
          n,
          !1
        ), i = (n & e.childLanes) !== 0), u) {
          if (i)
            return Zr(
              t,
              e,
              n
            );
          e.flags |= 128;
        }
        if (u = e.memoizedState, u !== null && (u.rendering = null, u.tail = null, u.lastEffect = null), El(e, oe.current), i) break;
        return null;
      case 22:
        return e.lanes = 0, Zm(
          t,
          e,
          n,
          e.pendingProps
        );
      case 24:
        kn(e, Qt, t.memoizedState.cache);
    }
    return jn(t, e, n);
  }
  function ey(t, e, n) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps)
        Kt = !0;
      else {
        if (!Kr(t, n) && (e.flags & 128) === 0)
          return Kt = !1, jS(
            t,
            e,
            n
          );
        Kt = (t.flags & 131072) !== 0;
      }
    else
      Kt = !1, ht && (e.flags & 1048576) !== 0 && _d(e, dl, e.index);
    switch (e.lanes = 0, e.tag) {
      case 16:
        t: {
          var i = e.pendingProps;
          if (t = Bi(e.elementType), e.type = t, typeof t == "function")
            $o(t) ? (i = Yi(t, i), e.tag = 1, e = Pm(
              null,
              e,
              t,
              i,
              n
            )) : (e.tag = 0, e = Lr(
              null,
              e,
              t,
              i,
              n
            ));
          else {
            if (t != null) {
              var u = t.$$typeof;
              if (u === L) {
                e.tag = 11, e = Gm(
                  null,
                  e,
                  t,
                  i,
                  n
                );
                break t;
              } else if (u === ft) {
                e.tag = 14, e = Xm(
                  null,
                  e,
                  t,
                  i,
                  n
                );
                break t;
              } else if (u === zt) {
                e.tag = 10, e.type = t, e = ty(
                  null,
                  e,
                  n
                );
                break t;
              }
            }
            throw e = bt(t) || t, Error(r(306, e, ""));
          }
        }
        return e;
      case 0:
        return Lr(
          t,
          e,
          e.type,
          e.pendingProps,
          n
        );
      case 1:
        return i = e.type, u = Yi(
          i,
          e.pendingProps
        ), Pm(
          t,
          e,
          i,
          u,
          n
        );
      case 3:
        t: {
          if (fu(
            e,
            e.stateNode.containerInfo
          ), t === null) throw Error(r(387));
          i = e.pendingProps;
          var s = e.memoizedState;
          u = s.element, hr(t, e), bl(e, i, null, n);
          var f = e.memoizedState;
          if (i = f.cache, kn(e, Qt, i), i !== s.cache && ur(
            e,
            [Qt],
            n,
            !0
          ), Tl(), i = f.element, s.isDehydrated)
            if (s = {
              element: i,
              isDehydrated: !1,
              cache: f.cache
            }, e.updateQueue.baseState = s, e.memoizedState = s, e.flags & 256) {
              e = km(
                t,
                e,
                i,
                n
              );
              break t;
            } else if (i !== u) {
              u = qe(
                Error(r(424)),
                e
              ), ml(u), e = km(
                t,
                e,
                i,
                n
              );
              break t;
            } else {
              switch (t = e.stateNode.containerInfo, t.nodeType) {
                case 9:
                  t = t.body;
                  break;
                default:
                  t = t.nodeName === "HTML" ? t.ownerDocument.body : t;
              }
              for (Bt = Ke(t.firstChild), ee = e, ht = !0, Fn = null, Qe = !0, n = Zd(
                e,
                null,
                i,
                n
              ), e.child = n; n; )
                n.flags = n.flags & -3 | 134221824, n = n.sibling;
            }
          else {
            if (zi(), i === u) {
              e = jn(
                t,
                e,
                n
              );
              break t;
            }
            Pt(t, e, i, n);
          }
          e = e.child;
        }
        return e;
      case 26:
        return Ea(t, e), t === null ? (n = Cp(
          e.type,
          null,
          e.pendingProps,
          null
        )) ? e.memoizedState = n : ht || (e.stateNode = lp(
          e.type,
          e.pendingProps,
          Gn.current,
          e
        )) : e.memoizedState = Cp(
          e.type,
          t.memoizedProps,
          e.pendingProps,
          t.memoizedState
        ), null;
      case 27:
        return So(e), t === null && ht && (i = e.stateNode = Ep(
          e.type,
          e.pendingProps,
          Gn.current
        ), ee = e, Qe = !0, u = Bt, fi(e.type) ? (Gc = u, Bt = Ke(i.firstChild)) : Bt = u), Pt(
          t,
          e,
          e.pendingProps.children,
          n
        ), Ea(t, e), t === null && (e.flags |= 4194304), e.child;
      case 5:
        return t === null && ht && ((u = i = Bt) && (i = NT(
          i,
          e.type,
          e.pendingProps,
          Qe
        ), i !== null ? (e.stateNode = i, ee = e, Bt = Ke(i.firstChild), Qe = !1, u = !0) : u = !1), u || Pn(e)), So(e), u = e.type, s = e.pendingProps, f = t !== null ? t.memoizedProps : null, i = s.children, Vc(u, s) ? i = null : f !== null && Vc(u, f) && (e.flags |= 32), e.memoizedState !== null && (u = Tr(
          t,
          e,
          CS,
          null,
          null,
          n
        ), Ya._currentValue = u), Ea(t, e), Pt(t, e, i, n), e.child;
      case 6:
        return t === null && ht && ((t = n = Bt) && (n = _T(
          n,
          e.pendingProps,
          Qe
        ), n !== null ? (e.stateNode = n, ee = e, Bt = null, t = !0) : t = !1), t || Pn(e)), null;
      case 13:
        return Im(t, e, n);
      case 4:
        return fu(
          e,
          e.stateNode.containerInfo
        ), i = e.pendingProps, t === null ? e.child = Hi(
          e,
          null,
          i,
          n
        ) : Pt(t, e, i, n), e.child;
      case 11:
        return Gm(
          t,
          e,
          e.type,
          e.pendingProps,
          n
        );
      case 7:
        return i = e.pendingProps, Ea(t, e), Pt(t, e, i, n), e.child;
      case 8:
        return Pt(
          t,
          e,
          e.pendingProps.children,
          n
        ), e.child;
      case 12:
        return Pt(
          t,
          e,
          e.pendingProps.children,
          n
        ), e.child;
      case 10:
        return ty(t, e, n);
      case 9:
        return u = e.type._context, i = e.pendingProps.children, Vi(e), u = ue(u), i = i(u), e.flags |= 1, Pt(t, e, i, n), e.child;
      case 14:
        return Xm(
          t,
          e,
          e.type,
          e.pendingProps,
          n
        );
      case 15:
        return Qm(
          t,
          e,
          e.type,
          e.pendingProps,
          n
        );
      case 19:
        return Zr(t, e, n);
      case 31:
        return US(t, e, n);
      case 22:
        return Zm(
          t,
          e,
          n,
          e.pendingProps
        );
      case 24:
        return Vi(e), i = ue(Qt), t === null ? (u = rr(), u === null && (u = _t, s = sr(), u.pooledCache = s, s.refCount++, s !== null && (u.pooledCacheLanes |= n), u = s), e.memoizedState = { parent: i, cache: u }, fr(e), kn(e, Qt, u)) : ((t.lanes & n) !== 0 && (hr(t, e), bl(e, null, null, n), Tl()), u = t.memoizedState, s = e.memoizedState, u.parent !== i ? (u = { parent: i, cache: i }, e.memoizedState = u, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = u), kn(e, Qt, i)) : (i = s.cache, kn(e, Qt, i), i !== u.cache && ur(
          e,
          [Qt],
          n,
          !0
        ))), Pt(
          t,
          e,
          e.pendingProps.children,
          n
        ), e.child;
      case 30:
        return e.stateNode === null && (e.stateNode = {
          autoName: null,
          paired: null,
          clones: null,
          ref: null
        }), i = e.pendingProps, i.name != null && i.name !== "auto" ? e.flags |= t === null ? 18882560 : 18874368 : ht && Uu(e), t !== null && t.memoizedProps.name !== i.name ? e.flags |= 4194816 : Ea(t, e), Pt(t, e, i.children, n), e.child;
      case 29:
        throw e.pendingProps;
    }
    throw Error(r(156, e.tag));
  }
  function Hn(t) {
    t.flags |= 4;
  }
  function Jr(t, e, n, i, u) {
    var s;
    if ((s = (t.mode & 32) !== 0) && (s = n === null ? zp(e, i) : zp(e, i) && (i.src !== n.src || i.srcSet !== n.srcSet)), s) {
      if (t.flags |= 16777216, (u & 335544128) === u)
        if (t.stateNode.complete) t.flags |= 8192;
        else if (By()) t.flags |= 8192;
        else
          throw ji = Gu, cr;
    } else t.flags &= -16777217;
  }
  function ny(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (t.flags |= 16777216, !Np(e))
      if (By()) t.flags |= 8192;
      else
        throw ji = Gu, cr;
  }
  function ss(t, e) {
    e !== null && (t.flags |= 4), t.flags & 16384 && (e = t.tag !== 22 ? zh() : 536870912, t.lanes |= e, Da |= e);
  }
  function Dl(t, e) {
    if (!ht)
      switch (t.tailMode) {
        case "visible":
          break;
        case "collapsed":
          for (var n = t.tail, i = null; n !== null; )
            n.alternate !== null && (i = n), n = n.sibling;
          i === null ? e || t.tail === null ? t.tail = null : t.tail.sibling = null : i.sibling = null;
          break;
        default:
          for (e = t.tail, n = null; e !== null; )
            e.alternate !== null && (n = e), e = e.sibling;
          n === null ? t.tail = null : n.sibling = null;
      }
  }
  function jt(t) {
    var e = t.alternate !== null && t.alternate.child === t.child, n = 0, i = 0;
    if (e)
      for (var u = t.child; u !== null; )
        n |= u.lanes | u.childLanes, i |= u.subtreeFlags & 1206910976, i |= u.flags & 1206910976, u.return = t, u = u.sibling;
    else
      for (u = t.child; u !== null; )
        n |= u.lanes | u.childLanes, i |= u.subtreeFlags, i |= u.flags, u.return = t, u = u.sibling;
    return t.subtreeFlags |= i, t.childLanes = n, e;
  }
  function HS(t, e, n) {
    var i = e.pendingProps;
    switch (nr(e), e.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return jt(e), null;
      case 1:
        return jt(e), null;
      case 3:
        return n = e.stateNode, i = null, t !== null && (i = t.memoizedState.cache), e.memoizedState.cache !== i && (e.flags |= 2048), wn(Qt), $i(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (t === null || t.child === null) && (ya(e) ? Hn(e) : t === null || t.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024, ar())), jt(e), null;
      case 26:
        var u = e.type, s = e.memoizedState;
        return t === null ? (Hn(e), s !== null ? (jt(e), ny(e, s)) : (jt(e), Jr(
          e,
          u,
          null,
          i,
          n
        ))) : s ? s !== t.memoizedState ? (Hn(e), jt(e), ny(e, s)) : (jt(e), e.flags &= -16777217) : (t = t.memoizedProps, t !== i && Hn(e), jt(e), Jr(
          e,
          u,
          t,
          i,
          n
        )), null;
      case 27:
        if (hu(e), n = Gn.current, u = e.type, t !== null && e.stateNode != null)
          t.memoizedProps !== i && Hn(e);
        else {
          if (!i) {
            if (e.stateNode === null)
              throw Error(r(166));
            return jt(e), e.subtreeFlags &= -33554433, null;
          }
          t = on.current, ya(e) ? wd(e) : (t = Ep(u, i, n), e.stateNode = t, Hn(e));
        }
        return jt(e), e.subtreeFlags &= -33554433, null;
      case 5:
        if (hu(e), u = e.type, t !== null && e.stateNode != null)
          t.memoizedProps !== i && Hn(e);
        else {
          if (!i) {
            if (e.stateNode === null)
              throw Error(r(166));
            return jt(e), e.subtreeFlags &= -33554433, null;
          }
          if (s = on.current, ya(e))
            wd(e);
          else {
            var f = Hl(
              Gn.current
            );
            switch (s) {
              case 1:
                s = f.createElementNS(
                  "http://www.w3.org/2000/svg",
                  u
                );
                break;
              case 2:
                s = f.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  u
                );
                break;
              default:
                switch (u) {
                  case "svg":
                    s = f.createElementNS(
                      "http://www.w3.org/2000/svg",
                      u
                    );
                    break;
                  case "math":
                    s = f.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      u
                    );
                    break;
                  case "script":
                    s = f.createElement("div"), s.innerHTML = "<script><\/script>", s = s.removeChild(
                      s.firstChild
                    );
                    break;
                  case "select":
                    s = typeof i.is == "string" ? f.createElement("select", {
                      is: i.is
                    }) : f.createElement("select"), i.multiple ? s.multiple = !0 : i.size && (s.size = i.size);
                    break;
                  default:
                    s = typeof i.is == "string" ? f.createElement(u, { is: i.is }) : f.createElement(u);
                }
            }
            s[le] = e, s[be] = i;
            t: for (f = e.child; f !== null; ) {
              if (f.tag === 5 || f.tag === 6)
                s.appendChild(f.stateNode);
              else if (f.tag !== 4 && f.tag !== 27 && f.child !== null) {
                f.child.return = f, f = f.child;
                continue;
              }
              if (f === e) break t;
              for (; f.sibling === null; ) {
                if (f.return === null || f.return === e)
                  break t;
                f = f.return;
              }
              f.sibling.return = f.return, f = f.sibling;
            }
            e.stateNode = s;
            t: switch (ce(s, u, i), u) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                i = !!i.autoFocus;
                break t;
              case "img":
                i = !0;
                break t;
              default:
                i = !1;
            }
            i && Hn(e);
          }
        }
        return jt(e), e.subtreeFlags &= -33554433, Jr(
          e,
          e.type,
          t === null ? null : t.memoizedProps,
          e.pendingProps,
          n
        ), null;
      case 6:
        if (t && e.stateNode != null)
          t.memoizedProps !== i && Hn(e);
        else {
          if (typeof i != "string" && e.stateNode === null)
            throw Error(r(166));
          if (t = Gn.current, ya(e)) {
            if (t = e.stateNode, n = e.memoizedProps, i = null, u = ee, u !== null)
              switch (u.tag) {
                case 27:
                case 5:
                  i = u.memoizedProps;
              }
            t[le] = e, t = !!(t.nodeValue === n || i !== null && i.suppressHydrationWarning === !0 || ep(t.nodeValue, n)), t || Pn(e, !0);
          } else
            t = Hl(t).createTextNode(
              i
            ), t[le] = e, e.stateNode = t;
        }
        return jt(e), null;
      case 31:
        if (n = e.memoizedState, t === null || t.memoizedState !== null) {
          if (i = ya(e), n !== null) {
            if (t === null) {
              if (!i) throw Error(r(318));
              if (t = e.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(r(557));
              t[le] = e;
            } else
              zi(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            jt(e), t = !1;
          } else
            n = ar(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = n), t = !0;
          if (!t)
            return e.flags & 256 ? (Ve(e), e) : (Ve(e), null);
          if ((e.flags & 128) !== 0)
            throw Error(r(558));
        }
        return jt(e), null;
      case 13:
        if (i = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (u = ya(e), i !== null && i.dehydrated !== null) {
            if (t === null) {
              if (!u) throw Error(r(318));
              if (u = e.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(r(317));
              u[le] = e;
            } else
              zi(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            jt(e), u = !1;
          } else
            u = ar(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = u), u = !0;
          if (!u)
            return e.flags & 256 ? (Ve(e), e) : (Ve(e), null);
        }
        return Ve(e), (e.flags & 128) !== 0 ? (e.lanes = n, e) : (n = i !== null, t = t !== null && t.memoizedState !== null, n && (i = e.child, u = null, i.alternate !== null && i.alternate.memoizedState !== null && i.alternate.memoizedState.cachePool !== null && (u = i.alternate.memoizedState.cachePool.pool), s = null, i.memoizedState !== null && i.memoizedState.cachePool !== null && (s = i.memoizedState.cachePool.pool), s !== u && (i.flags |= 2048)), n !== t && n && (e.child.flags |= 8192), ss(e, e.updateQueue), jt(e), null);
      case 4:
        return $i(), t === null && Oc(e.stateNode.containerInfo), e.flags |= 67108864, jt(e), null;
      case 10:
        return wn(e.type), jt(e), null;
      case 19:
        if (vr(e), i = e.memoizedState, i === null) return jt(e), null;
        if (u = (e.flags & 128) !== 0, s = i.rendering, s === null)
          if (u) Dl(i, !1);
          else {
            if (Gt !== 0 || t !== null && (t.flags & 128) !== 0)
              for (t = e.child; t !== null; ) {
                if (s = Ku(t), s !== null) {
                  for (e.flags |= 128, Dl(i, !1), t = s.updateQueue, e.updateQueue = t, ss(e, t), e.subtreeFlags = 0, t = n, n = e.child; n !== null; )
                    Rd(n, t), n = n.sibling;
                  return El(
                    e,
                    oe.current & 1 | 2
                  ), ht && _n(e, i.treeForkCount), e.child;
                }
                t = t.sibling;
              }
            i.tail !== null && Oe() > Ss && (e.flags |= 128, u = !0, Dl(i, !1), e.lanes = 4194304);
          }
        else {
          if (!u)
            if (t = Ku(s), t !== null) {
              if (e.flags |= 128, u = !0, t = t.updateQueue, e.updateQueue = t, ss(e, t), Dl(i, !0), i.tail === null && i.tailMode !== "collapsed" && i.tailMode !== "visible" && !s.alternate && !ht)
                return jt(e), null;
            } else
              2 * Oe() - i.renderingStartTime > Ss && n !== 536870912 && (e.flags |= 128, u = !0, Dl(i, !1), e.lanes = 4194304);
          i.isBackwards ? (s.sibling = e.child, e.child = s) : (t = i.last, t !== null ? t.sibling = s : e.child = s, i.last = s);
        }
        if (i.tail !== null) {
          t = i.tail;
          t: {
            for (n = t; n !== null; ) {
              if (n.alternate !== null) {
                n = !1;
                break t;
              }
              n = n.sibling;
            }
            n = !0;
          }
          return i.rendering = t, i.tail = t.sibling, i.renderingStartTime = Oe(), t.sibling = null, s = oe.current, s = u ? s & 1 | 2 : s & 1, i.tailMode === "visible" || i.tailMode === "collapsed" || !n || ht ? El(e, s) : (n = s, Ut(se, e), Ut(oe, n), me === null && (me = e)), ht && _n(e, i.treeForkCount), t;
        }
        return jt(e), null;
      case 22:
      case 23:
        return Ve(e), pr(), i = e.memoizedState !== null, t !== null ? t.memoizedState !== null !== i && (e.flags |= 8192) : i && (e.flags |= 8192), i ? (n & 536870912) !== 0 && (e.flags & 128) === 0 && (jt(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : jt(e), n = e.updateQueue, n !== null && ss(e, n.retryQueue), n = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), i = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (i = e.memoizedState.cachePool.pool), i !== n && (e.flags |= 2048), t !== null && ae(Ui), null;
      case 24:
        return n = null, t !== null && (n = t.memoizedState.cache), e.memoizedState.cache !== n && (e.flags |= 2048), wn(Qt), jt(e), null;
      case 25:
        return null;
      case 30:
        return e.flags |= 33554432, jt(e), null;
    }
    throw Error(r(156, e.tag));
  }
  function LS(t, e) {
    switch (nr(e), e.tag) {
      case 1:
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 3:
        return wn(Qt), $i(), t = e.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (e.flags = t & -65537 | 128, e) : null;
      case 26:
      case 27:
      case 5:
        return hu(e), null;
      case 31:
        if (e.memoizedState !== null) {
          if (Ve(e), e.alternate === null)
            throw Error(r(340));
          zi();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 13:
        if (Ve(e), t = e.memoizedState, t !== null && t.dehydrated !== null) {
          if (e.alternate === null)
            throw Error(r(340));
          zi();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 19:
        return vr(e), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, t = e.memoizedState, t !== null && (t.rendering = null, t.tail = null), e.flags |= 4, e) : null;
      case 4:
        return $i(), null;
      case 10:
        return wn(e.type), null;
      case 22:
      case 23:
        return Ve(e), pr(), t !== null && ae(Ui), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 24:
        return wn(Qt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function iy(t, e) {
    switch (nr(e), e.tag) {
      case 3:
        wn(Qt), $i();
        break;
      case 26:
      case 27:
      case 5:
        hu(e);
        break;
      case 4:
        $i();
        break;
      case 31:
        e.memoizedState !== null && Ve(e);
        break;
      case 13:
        Ve(e);
        break;
      case 19:
        vr(e);
        break;
      case 10:
        wn(e.type);
        break;
      case 22:
      case 23:
        Ve(e), pr(), t !== null && ae(Ui);
        break;
      case 24:
        wn(Qt);
    }
  }
  function Ol(t, e) {
    try {
      var n = e.updateQueue, i = n !== null ? n.lastEffect : null;
      if (i !== null) {
        var u = i.next;
        n = u;
        do {
          if ((n.tag & t) === t) {
            i = void 0;
            var s = n.create, f = n.inst;
            i = s(), f.destroy = i;
          }
          n = n.next;
        } while (n !== u);
      }
    } catch (m) {
      Ot(e, e.return, m);
    }
  }
  function ai(t, e, n) {
    try {
      var i = e.updateQueue, u = i !== null ? i.lastEffect : null;
      if (u !== null) {
        var s = u.next;
        i = s;
        do {
          if ((i.tag & t) === t) {
            var f = i.inst, m = f.destroy;
            if (m !== void 0) {
              f.destroy = void 0, u = e;
              var T = n, C = m;
              try {
                C();
              } catch (R) {
                Ot(
                  u,
                  T,
                  R
                );
              }
            }
          }
          i = i.next;
        } while (i !== s);
      }
    } catch (R) {
      Ot(e, e.return, R);
    }
  }
  function ay(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var n = t.stateNode;
      try {
        Jd(e, n);
      } catch (i) {
        Ot(t, t.return, i);
      }
    }
  }
  function ly(t, e, n) {
    n.props = Yi(
      t.type,
      t.memoizedProps
    ), n.state = t.memoizedState;
    try {
      n.componentWillUnmount();
    } catch (i) {
      Ot(t, e, i);
    }
  }
  function hn(t, e) {
    try {
      var n = t.ref;
      if (n !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var i = t.stateNode;
            break;
          case 30:
            var u = t.stateNode, s = Rn(t.memoizedProps, u);
            (u.ref === null || u.ref.name !== s) && (u.ref = hp(s)), i = u.ref;
            break;
          case 7:
            if (t.stateNode === null) {
              var f = new He(t);
              p(
                t.child,
                !1,
                RT,
                f,
                void 0,
                void 0
              ), t.stateNode = f;
            }
            i = t.stateNode;
            break;
          default:
            i = t.stateNode;
        }
        typeof n == "function" ? t.refCleanup = n(i) : n.current = i;
      }
    } catch (m) {
      Ot(t, e, m);
    }
  }
  function re(t, e) {
    var n = t.ref, i = t.refCleanup;
    if (n !== null)
      if (typeof i == "function")
        try {
          i();
        } catch (u) {
          Ot(t, e, u);
        } finally {
          t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (u) {
          Ot(t, e, u);
        }
      else n.current = null;
  }
  function os(t, e) {
    if ((t.tag === 5 || t.tag === 27 || t.tag === 6) && t.alternate === null && e !== null)
      for (var n = 0; n < e.length; n++)
        vp(
          t.stateNode,
          e[n]
        );
  }
  function uy(t) {
    for (var e = t.return; e !== null && (Pr(e) && vp(t.stateNode, e.stateNode), !Fr(e)); )
      e = e.return;
  }
  function Rl(t) {
    for (var e = t.return; e !== null && (Pr(e) && zT(t.stateNode, e.stateNode), !Fr(e)); )
      e = e.return;
  }
  function Fr(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 27;
  }
  function Pr(t) {
    return t && t.tag === 7 && t.stateNode !== null;
  }
  function kr(t) {
    var e = t.type, n = t.memoizedProps, i = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          n.autoFocus && i.focus();
          break t;
        case "img":
          n.src ? i.src = n.src : n.srcSet && (i.srcset = n.srcSet);
      }
    } catch (u) {
      Ot(t, t.return, u);
    }
  }
  function Ir(t, e, n) {
    try {
      var i = t.stateNode;
      fT(i, t.type, n, e), i[be] = e;
    } catch (u) {
      Ot(t, t.return, u);
    }
  }
  function sy(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && fi(t.type) || t.tag === 4;
  }
  function Wr(t) {
    t: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || sy(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
        if (t.tag === 27 && fi(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function $r(t, e, n, i) {
    var u = t.tag;
    if (u === 5 || u === 6)
      u = t.stateNode, e ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(u, e) : (e = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, e.appendChild(u), n = n._reactRootContainer, n != null || e.onclick !== null || (e.onclick = rn)), os(t, i), Et = !0;
    else if (u !== 4 && (u === 27 && (os(t, i), i = null, fi(t.type) && (n = t.stateNode, e = null)), t = t.child, t !== null))
      for ($r(
        t,
        e,
        n,
        i
      ), t = t.sibling; t !== null; )
        $r(
          t,
          e,
          n,
          i
        ), t = t.sibling;
  }
  function rs(t, e, n, i) {
    var u = t.tag;
    if (u === 5 || u === 6)
      u = t.stateNode, e ? n.insertBefore(u, e) : n.appendChild(u), os(t, i), Et = !0;
    else if (u !== 4 && (u === 27 && (os(t, i), i = null, fi(t.type) && (n = t.stateNode)), t = t.child, t !== null))
      for (rs(
        t,
        e,
        n,
        i
      ), t = t.sibling; t !== null; )
        rs(
          t,
          e,
          n,
          i
        ), t = t.sibling;
  }
  function oy(t) {
    var e = t.stateNode, n = t.memoizedProps;
    try {
      for (var i = t.type, u = e.attributes; u.length; )
        e.removeAttributeNode(u[0]);
      ce(e, i, n), e[le] = t, e[be] = n;
    } catch (s) {
      Ot(t, t.return, s);
    }
  }
  var cs = !1, we = null;
  function ry(t) {
    (t.tag === 30 || (t.subtreeFlags & 33554432) !== 0) && (cs = !0);
  }
  var dn = null;
  function cy() {
    var t = dn;
    return dn = null, t;
  }
  var Ae = 0;
  function Aa(t, e, n, i, u) {
    return Ae = 0, fy(
      t.child,
      e,
      n,
      i,
      u
    );
  }
  function fy(t, e, n, i, u) {
    for (var s = !1; t !== null; ) {
      if (t.tag === 5) {
        var f = t.stateNode;
        if (i !== null) {
          var m = Bc(f);
          i.push(m), m.view && (s = !0);
        } else
          s || Bc(f).view && (s = !0);
        cs = !0, cp(
          f,
          Ae === 0 ? e : e + "_" + Ae,
          n
        ), Ae++;
      } else (t.tag !== 22 || t.memoizedState === null) && (t.tag === 30 && u || fy(
        t.child,
        e,
        n,
        i,
        u
      ) && (s = !0));
      t = t.sibling;
    }
    return s;
  }
  function mn(t, e) {
    for (; t !== null; )
      t.tag === 5 ? fp(t.stateNode, t.memoizedProps) : (t.tag !== 22 || t.memoizedState === null) && (t.tag === 30 && e || mn(
        t.child,
        e
      )), t = t.sibling;
  }
  function fs(t) {
    if ((t.subtreeFlags & 18874368) !== 0)
      for (t = t.child; t !== null; ) {
        if ((t.tag !== 22 || t.memoizedState === null) && (fs(t), t.tag === 30 && (t.flags & 18874368) !== 0 && t.stateNode.paired)) {
          var e = t.memoizedProps;
          if (e.name == null || e.name === "auto")
            throw Error(r(544));
          var n = e.name;
          e = zn(e.default, e.share), e !== "none" && (Aa(
            t,
            n,
            e,
            null,
            !1
          ) || mn(t.child, !1));
        }
        t = t.sibling;
      }
  }
  function tc(t, e) {
    if (t.tag === 30) {
      var n = t.stateNode, i = t.memoizedProps, u = Rn(i, n), s = zn(
        i.default,
        n.paired ? i.share : i.enter
      );
      s !== "none" ? Aa(t, u, s, null, !1) ? (fs(t), n.paired || e || Na(t, i.onEnter)) : mn(t.child, !1) : fs(t);
    } else if ((t.subtreeFlags & 33554432) !== 0)
      for (t = t.child; t !== null; )
        tc(t, e), t = t.sibling;
    else fs(t);
  }
  function ec(t) {
    if (we !== null && we.size !== 0) {
      var e = we;
      if ((t.subtreeFlags & 18874368) !== 0)
        for (t = t.child; t !== null; ) {
          if (t.tag !== 22 || t.memoizedState === null) {
            if (t.tag === 30 && (t.flags & 18874368) !== 0) {
              var n = t.memoizedProps, i = n.name;
              if (i != null && i !== "auto") {
                var u = e.get(i);
                if (u !== void 0) {
                  var s = zn(
                    n.default,
                    n.share
                  );
                  if (s !== "none" && (Aa(
                    t,
                    i,
                    s,
                    null,
                    !1
                  ) ? (s = t.stateNode, u.paired = s, s.paired = u, Na(t, n.onShare)) : mn(t.child, !1)), e.delete(i), e.size === 0) break;
                }
              }
            }
            ec(t);
          }
          t = t.sibling;
        }
    }
  }
  function nc(t) {
    if (t.tag === 30) {
      var e = t.memoizedProps, n = Rn(e, t.stateNode), i = we !== null ? we.get(n) : void 0, u = zn(
        e.default,
        i !== void 0 ? e.share : e.exit
      );
      u !== "none" && (Aa(t, n, u, null, !1) ? i !== void 0 ? (u = t.stateNode, i.paired = u, u.paired = i, we.delete(n), Na(t, e.onShare)) : Na(t, e.onExit) : mn(t.child, !1)), we !== null && ec(t);
    } else if ((t.subtreeFlags & 33554432) !== 0)
      for (t = t.child; t !== null; )
        nc(t), t = t.sibling;
    else
      we !== null && ec(t);
  }
  function hy(t) {
    for (t = t.child; t !== null; ) {
      if (t.tag === 30) {
        var e = t.memoizedProps, n = Rn(e, t.stateNode);
        e = zn(e.default, e.update), t.flags &= -5, e !== "none" && Aa(
          t,
          n,
          e,
          t.memoizedState = [],
          !1
        );
      } else
        (t.subtreeFlags & 33554432) !== 0 && hy(t);
      t = t.sibling;
    }
  }
  function ic(t) {
    if ((t.subtreeFlags & 18874368) !== 0)
      for (t = t.child; t !== null; ) {
        if (t.tag !== 22 || t.memoizedState === null) {
          if (t.tag === 30 && (t.flags & 18874368) !== 0) {
            var e = t.stateNode;
            e.paired !== null && (e.paired = null, mn(t.child, !1));
          }
          ic(t);
        }
        t = t.sibling;
      }
  }
  function hs(t) {
    if (t.tag === 30)
      t.stateNode.paired = null, mn(t.child, !1), ic(t);
    else if ((t.subtreeFlags & 33554432) !== 0)
      for (t = t.child; t !== null; )
        hs(t), t = t.sibling;
    else ic(t);
  }
  function dy(t) {
    for (t = t.child; t !== null; )
      t.tag === 30 ? mn(t.child, !1) : (t.subtreeFlags & 33554432) !== 0 && dy(t), t = t.sibling;
  }
  function ac(t, e, n, i, u, s, f) {
    for (var m = !1; e !== null; ) {
      if (e.tag === 5) {
        var T = e.stateNode;
        if (s !== null && Ae < s.length) {
          var C = s[Ae], R = Bc(T);
          (C.view || R.view) && (m = !0);
          var V;
          if (V = (t.flags & 4) === 0)
            if (R.clip) V = !0;
            else {
              V = C.rect;
              var x = R.rect;
              V = V.y !== x.y || V.x !== x.x || V.height !== x.height || V.width !== x.width;
            }
          V && (t.flags |= 4), R.abs ? R = !C.abs : (C = C.rect, R = R.rect, R = C.height !== R.height || C.width !== R.width), R && (t.flags |= 32);
        } else t.flags |= 32;
        (t.flags & 4) !== 0 && cp(
          T,
          Ae === 0 ? n : n + "_" + Ae,
          u
        ), m && (t.flags & 4) !== 0 || (dn === null && (dn = []), dn.push(
          T,
          Ae === 0 ? i : i + "_" + Ae,
          e.memoizedProps
        )), Ae++;
      } else (e.tag !== 22 || e.memoizedState === null) && (e.tag === 30 && f ? t.flags |= e.flags & 32 : ac(
        t,
        e.child,
        n,
        i,
        u,
        s,
        f
      ) && (m = !0));
      e = e.sibling;
    }
    return m;
  }
  function my(t, e) {
    for (t = t.child; t !== null; ) {
      if (t.tag === 30) {
        var n = t.memoizedProps, i = t.stateNode, u = Rn(n, i), s = zn(n.default, n.update), f;
        f = t.memoizedState, t.memoizedState = null, i = t;
        var m = t.child;
        Ae = 0, u = ac(
          i,
          m,
          u,
          u,
          s,
          f,
          !1
        ), (t.flags & 4) !== 0 && u && Na(t, n.onUpdate);
      } else
        (t.subtreeFlags & 33554432) !== 0 && my(t);
      t = t.sibling;
    }
  }
  var ne = !1, Ct = !1, yn = !1, lc = !1, yy = typeof WeakSet == "function" ? WeakSet : Set, ie = null, pn = !1, zl = !1, ds = !1, uc = !1;
  function YS(t, e, n) {
    if (t = t.containerInfo, Nc = qa, t = Sd(t), Ko(t)) {
      if ("selectionStart" in t)
        var i = {
          start: t.selectionStart,
          end: t.selectionEnd
        };
      else
        t: {
          i = (i = t.ownerDocument) && i.defaultView || window;
          var u = i.getSelection && i.getSelection();
          if (u && u.rangeCount !== 0) {
            i = u.anchorNode;
            var s = u.anchorOffset, f = u.focusNode;
            u = u.focusOffset;
            try {
              i.nodeType, f.nodeType;
            } catch {
              i = null;
              break t;
            }
            var m = 0, T = -1, C = -1, R = 0, V = 0, x = t, O = null;
            e: for (; ; ) {
              for (var G; x !== i || s !== 0 && x.nodeType !== 3 || (T = m + s), x !== f || u !== 0 && x.nodeType !== 3 || (C = m + u), x.nodeType === 3 && (m += x.nodeValue.length), (G = x.firstChild) !== null; )
                O = x, x = G;
              for (; ; ) {
                if (x === t) break e;
                if (O === i && ++R === s && (T = m), O === f && ++V === u && (C = m), (G = x.nextSibling) !== null) break;
                x = O, O = x.parentNode;
              }
              x = G;
            }
            i = T === -1 || C === -1 ? null : { start: T, end: C };
          } else i = null;
        }
      i = i || { start: 0, end: 0 };
    } else i = null;
    for (_c = { focusedElem: t, selectionRange: i }, qa = !1, n = (n & 335544064) === n, ie = e, e = n ? 9270 : 1024; ie !== null; ) {
      if (t = ie, n && (i = t.deletions, i !== null))
        for (s = 0; s < i.length; s++)
          n && nc(i[s]);
      if (t.alternate === null && (t.flags & 2) !== 0)
        n && ry(t), ms(n);
      else {
        if (t.tag === 22) {
          if (i = t.alternate, t.memoizedState !== null) {
            i !== null && i.memoizedState === null && n && nc(i), ms(n);
            continue;
          } else if (i !== null && i.memoizedState !== null) {
            n && ry(t), ms(n);
            continue;
          }
        }
        i = t.child, (t.subtreeFlags & e) !== 0 && i !== null ? (i.return = t, ie = i) : (n && hy(t), ms(n));
      }
    }
    we = null;
  }
  function ms(t) {
    for (; ie !== null; ) {
      var e = ie, n = t, i = e.alternate, u = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if ((u & 1024) !== 0 && i !== null) {
            n = void 0, u = i.memoizedProps, i = i.memoizedState;
            var s = e.stateNode;
            try {
              var f = Yi(
                e.type,
                u
              );
              n = s.getSnapshotBeforeUpdate(
                f,
                i
              ), s.__reactInternalSnapshotBeforeUpdate = n;
            } catch (m) {
              Ot(e, e.return, m);
            }
          }
          break;
        case 3:
          if ((u & 1024) !== 0) {
            if (i = e.stateNode.containerInfo, n = i.nodeType, n === 9)
              Lc(i);
            else if (n === 1)
              switch (i.nodeName) {
                case "HEAD":
                case "HTML":
                case "BODY":
                  Lc(i);
                  break;
                default:
                  i.textContent = "";
              }
          }
          break;
        case 5:
        case 26:
        case 27:
        case 6:
        case 4:
        case 17:
          break;
        case 30:
          n && i !== null && (n = Rn(
            i.memoizedProps,
            i.stateNode
          ), u = e.memoizedProps, u = zn(u.default, u.update), u !== "none" && Aa(
            i,
            n,
            u,
            i.memoizedState = [],
            !0
          ));
          break;
        default:
          if ((u & 1024) !== 0) throw Error(r(163));
      }
      if (i = e.sibling, i !== null) {
        i.return = e.return, ie = i;
        break;
      }
      ie = e.return;
    }
  }
  function py(t, e, n) {
    var i = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        gn(t, n), i & 4 && Ol(5, n);
        break;
      case 1:
        if (gn(t, n), i & 4)
          if (t = n.stateNode, e === null)
            try {
              t.componentDidMount();
            } catch (f) {
              Ot(n, n.return, f);
            }
          else {
            var u = Yi(
              n.type,
              e.memoizedProps
            );
            e = e.memoizedState;
            try {
              t.componentDidUpdate(
                u,
                e,
                t.__reactInternalSnapshotBeforeUpdate
              );
            } catch (f) {
              Ot(
                n,
                n.return,
                f
              );
            }
          }
        i & 64 && ay(n), i & 512 && hn(n, n.return);
        break;
      case 3:
        if (gn(t, n), i & 64 && (t = n.updateQueue, t !== null)) {
          if (e = null, n.child !== null)
            switch (n.child.tag) {
              case 27:
              case 5:
                e = n.child.stateNode;
                break;
              case 1:
                e = n.child.stateNode;
            }
          try {
            Jd(t, e);
          } catch (f) {
            Ot(n, n.return, f);
          }
        }
        break;
      case 27:
        e === null && i & 4 && oy(n);
      case 26:
      case 5:
        gn(t, n), e === null && i & 4 && kr(n), i & 512 && hn(n, n.return);
        break;
      case 12:
        gn(t, n);
        break;
      case 31:
        gn(t, n), i & 4 && Ty(t, n);
        break;
      case 13:
        gn(t, n), i & 4 && by(t, n), i & 64 && (t = n.memoizedState, t !== null && (t = t.dehydrated, t !== null && (n = WS.bind(
          null,
          n
        ), VT(t, n))));
        break;
      case 22:
        if (i = n.memoizedState !== null || ne, !i) {
          var s = e !== null && e.memoizedState !== null || Ct;
          e = ne, u = Ct, ne = i, (Ct = s) && !u ? (i = 2, (n.subtreeFlags & 8772) !== 0 && (i |= 1), tn(
            t,
            n,
            i
          )) : gn(t, n), ne = e, Ct = u;
        }
        break;
      case 30:
        gn(t, n), i & 512 && hn(n, n.return);
        break;
      case 7:
        i & 512 && hn(n, n.return);
      default:
        gn(t, n);
    }
  }
  function sc(t, e) {
    for (t = t.child; t !== null; )
      gy(t, e), t = t.sibling;
  }
  function gy(t, e) {
    switch (t.tag) {
      case 5:
      case 26:
        try {
          var n = t.stateNode;
          if (e) {
            var i = n.style;
            typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none";
          } else {
            var u = t.stateNode, s = t.memoizedProps.style, f = s != null && s.hasOwnProperty("display") ? s.display : null;
            u.style.display = f == null || typeof f == "boolean" ? "" : ("" + f).trim();
          }
        } catch (T) {
          Ot(t, t.return, T);
        }
        oc(t, e);
        break;
      case 6:
        try {
          t.stateNode.nodeValue = e ? "" : t.memoizedProps, Et = !0;
        } catch (T) {
          Ot(t, t.return, T);
        }
        break;
      case 18:
        try {
          var m = t.stateNode;
          e ? rp(m, !0) : rp(t.stateNode, !1);
        } catch (T) {
          Ot(t, t.return, T);
        }
        break;
      case 22:
      case 23:
        t.memoizedState === null && sc(t, e);
        break;
      default:
        sc(t, e);
    }
  }
  function oc(t, e) {
    if (t.subtreeFlags & 67108864)
      for (t = t.child; t !== null; ) {
        t: {
          var n = t, i = e;
          switch (n.tag) {
            case 4:
              gy(n, i);
              break t;
            case 22:
              n.memoizedState === null && oc(n, i);
              break t;
            default:
              oc(n, i);
          }
        }
        t = t.sibling;
      }
  }
  function vy(t) {
    var e = t.alternate;
    e !== null && (t.alternate = null, vy(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && Su(e)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  var Ht = null, xe = !1;
  function We(t, e, n) {
    for (n = n.child; n !== null; )
      Sy(t, e, n), n = n.sibling;
  }
  function Sy(t, e, n) {
    if (Re && typeof Re.onCommitFiberUnmount == "function")
      try {
        Re.onCommitFiberUnmount($a, n);
      } catch {
      }
    switch (n.tag) {
      case 26:
        Ct || re(n, e), We(
          t,
          e,
          n
        ), n.memoizedState ? n.memoizedState.count-- : n.stateNode && !Ct && (n = n.stateNode, n.parentNode.removeChild(n));
        break;
      case 27:
        Ct || re(n, e), Rl(n);
        var i = Ht, u = xe;
        fi(n.type) && (Ht = n.stateNode, xe = !1), We(
          t,
          e,
          n
        ), Ap(
          n.stateNode,
          n.type,
          n.memoizedProps
        ), Ht = i, xe = u;
        break;
      case 5:
        Ct || re(n, e), Rl(n);
      case 6:
        if (n.tag === 6 && Rl(n), i = Ht, u = xe, Ht = null, We(
          t,
          e,
          n
        ), Ht = i, xe = u, Ht !== null)
          if (xe)
            try {
              (Ht.nodeType === 9 ? Ht.body : Ht.nodeName === "HTML" ? Ht.ownerDocument.body : Ht).removeChild(n.stateNode), Et = !0;
            } catch (s) {
              Ot(
                n,
                e,
                s
              );
            }
          else
            try {
              Ht.removeChild(n.stateNode), Et = !0;
            } catch (s) {
              Ot(
                n,
                e,
                s
              );
            }
        break;
      case 18:
        Ht !== null && (xe ? (t = Ht, op(
          t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t,
          n.stateNode
        ), Ga(t)) : op(Ht, n.stateNode));
        break;
      case 4:
        i = Ht, u = xe, Ht = n.stateNode.containerInfo, xe = !0, We(
          t,
          e,
          n
        ), Ht = i, xe = u;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        ai(2, n, e), Ct || ai(4, n, e), We(
          t,
          e,
          n
        );
        break;
      case 1:
        Ct || (re(n, e), i = n.stateNode, typeof i.componentWillUnmount == "function" && ly(
          n,
          e,
          i
        )), We(
          t,
          e,
          n
        );
        break;
      case 21:
        We(
          t,
          e,
          n
        );
        break;
      case 22:
        Ct = (i = Ct) || n.memoizedState !== null, We(
          t,
          e,
          n
        ), Ct = i;
        break;
      case 30:
        re(n, e), We(
          t,
          e,
          n
        );
        break;
      case 7:
        Ct || re(n, e), We(
          t,
          e,
          n
        );
        break;
      default:
        We(
          t,
          e,
          n
        );
    }
  }
  function Ty(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null))) {
      t = t.dehydrated;
      try {
        Ga(t);
      } catch (n) {
        Ot(e, e.return, n);
      }
    }
  }
  function by(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null))))
      try {
        Ga(t);
      } catch (n) {
        Ot(e, e.return, n);
      }
  }
  function qS(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var e = t.stateNode;
        return e === null && (e = t.stateNode = new yy()), e;
      case 22:
        return t = t.stateNode, e = t._retryCache, e === null && (e = t._retryCache = new yy()), e;
      default:
        throw Error(r(435, t.tag));
    }
  }
  function ys(t, e) {
    var n = qS(t);
    e.forEach(function(i) {
      if (!n.has(i)) {
        n.add(i);
        var u = $S.bind(null, t, i);
        i.then(u, u);
      }
    });
  }
  function ge(t, e, n) {
    var i = e.deletions;
    if (i !== null)
      for (var u = 0; u < i.length; u++) {
        var s = i[u], f = t, m = e, T = m;
        t: for (; T !== null; ) {
          switch (T.tag) {
            case 27:
              if (fi(T.type)) {
                Ht = T.stateNode, xe = !1;
                break t;
              }
              break;
            case 5:
              Ht = T.stateNode, xe = !1;
              break t;
            case 3:
            case 4:
              Ht = T.stateNode.containerInfo, xe = !0;
              break t;
          }
          T = T.return;
        }
        if (Ht === null) throw Error(r(160));
        Sy(f, m, s), Ht = null, xe = !1, f = s.alternate, f !== null && (f.return = null), s.return = null;
      }
    if (e.subtreeFlags & 13886)
      for (e = e.child; e !== null; )
        Ey(e, t, n), e = e.sibling;
  }
  var $e = null;
  function Ey(t, e, n) {
    var i = t.alternate, u = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (u & 4 && (i = t.updateQueue, i = i !== null ? i.events : null, i !== null))
          for (var s = 0; s < i.length; s++) {
            var f = i[s];
            f.ref.impl = f.nextImpl;
          }
        ge(e, t, n), ve(t), u & 4 && (ai(3, t, t.return), Ol(3, t), ai(5, t, t.return));
        break;
      case 1:
        ge(e, t, n), ve(t), u & 512 && (Ct || i === null || re(i, i.return)), u & 64 && ne && (t = t.updateQueue, t !== null && (e = t.callbacks, e !== null && (n = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = n === null ? e : n.concat(e))));
        break;
      case 26:
        if (s = $e, ge(e, t, n), ve(t), u & 512 && (Ct || i === null || re(i, i.return)), u & 4)
          if (u = i !== null ? i.memoizedState : null, n = t.memoizedState, i === null)
            if (n === null)
              if (t.stateNode === null)
                if (ne)
                  t.stateNode = lp(
                    t.type,
                    t.memoizedProps,
                    e.containerInfo,
                    t
                  );
                else {
                  t: {
                    e = t.type, n = t.memoizedProps, u = s.ownerDocument || s;
                    e: switch (e) {
                      case "title":
                        i = u.getElementsByTagName("title")[0], (!i || i[nl] || i[le] || i.namespaceURI === "http://www.w3.org/2000/svg" || i.hasAttribute("itemprop")) && (i = u.createElement(e), u.head.insertBefore(
                          i,
                          u.querySelector("head > title")
                        )), ce(i, e, n), i[le] = t, te(i), e = i;
                        break t;
                      case "link":
                        if (s = Rp(
                          "link",
                          "href",
                          u
                        ).get(e + (n.href || ""))) {
                          for (f = 0; f < s.length; f++)
                            if (i = s[f], i.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && i.getAttribute("rel") === (n.rel == null ? null : n.rel) && i.getAttribute("title") === (n.title == null ? null : n.title) && i.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
                              s.splice(f, 1);
                              break e;
                            }
                        }
                        i = u.createElement(e), ce(i, e, n), u.head.appendChild(i);
                        break;
                      case "meta":
                        if (s = Rp(
                          "meta",
                          "content",
                          u
                        ).get(e + (n.content || ""))) {
                          for (f = 0; f < s.length; f++)
                            if (i = s[f], i.getAttribute("content") === (n.content == null ? null : "" + n.content) && i.getAttribute("name") === (n.name == null ? null : n.name) && i.getAttribute("property") === (n.property == null ? null : n.property) && i.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && i.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
                              s.splice(f, 1);
                              break e;
                            }
                        }
                        i = u.createElement(e), ce(i, e, n), u.head.appendChild(i);
                        break;
                      default:
                        throw Error(r(468, e));
                    }
                    i[le] = t, te(i), e = i;
                  }
                  t.stateNode = e;
                }
              else
                ne || Kc(s, t.type, t.stateNode);
            else
              t.stateNode = Op(
                s,
                n,
                t.memoizedProps
              );
          else
            u !== n ? (u === null ? (e = i.stateNode, e === null || Ct || e.parentNode.removeChild(e)) : u.count--, n === null ? ne || Kc(s, t.type, t.stateNode) : Op(s, n, t.memoizedProps)) : n === null && t.stateNode !== null && Ir(
              t,
              t.memoizedProps,
              i.memoizedProps
            );
        break;
      case 27:
        ge(e, t, n), ve(t), u & 512 && (Ct || i === null || re(i, i.return)), i !== null && u & 4 && Ir(
          t,
          t.memoizedProps,
          i.memoizedProps
        );
        break;
      case 5:
        if (s = yn, yn = !1, ge(e, t, n), yn = s, ve(t), u & 512 && (Ct || i === null || re(i, i.return)), t.flags & 32) {
          e = t.stateNode;
          try {
            la(e, ""), Et = !0;
          } catch (R) {
            Ot(t, t.return, R);
          }
        }
        u & 4 && t.stateNode != null && (e = t.memoizedProps, Ir(
          t,
          e,
          i !== null ? i.memoizedProps : e
        )), u & 1024 && (lc = !0);
        break;
      case 6:
        if (ge(e, t, n), ve(t), u & 4) {
          if (t.stateNode === null)
            throw Error(r(162));
          e = t.memoizedProps, n = t.stateNode;
          try {
            n.nodeValue = e, Et = !0;
          } catch (R) {
            Ot(t, t.return, R);
          }
        }
        break;
      case 3:
        if (Et = !1, zs = null, s = $e, $e = Ll(e.containerInfo), ge(e, t, n), $e = s, ve(t), u & 4 && i !== null && i.memoizedState.isDehydrated)
          try {
            Ga(e.containerInfo);
          } catch (R) {
            Ot(t, t.return, R);
          }
        lc && (lc = !1, Ay(t)), Et = !1;
        break;
      case 4:
        u = yn, yn = ne, i = Xh(), s = $e, $e = Ll(
          t.stateNode.containerInfo
        ), ge(e, t, n), ve(t), $e = s, Et && zl && (ds = !0), Et = i, yn = u;
        break;
      case 12:
        ge(e, t, n), ve(t);
        break;
      case 31:
        ge(e, t, n), ve(t), u & 4 && (e = t.updateQueue, e !== null && (t.updateQueue = null, ys(t, e)));
        break;
      case 13:
        ge(e, t, n), ve(t), t.child.flags & 8192 && t.memoizedState !== null != (i !== null && i.memoizedState !== null) && (vs = Oe()), u & 4 && (e = t.updateQueue, e !== null && (t.updateQueue = null, ys(t, e)));
        break;
      case 22:
        s = t.memoizedState !== null, f = i !== null && i.memoizedState !== null;
        var m = ne, T = Ct, C = yn;
        ne = m || s, yn = C || s, Ct = T || f, ge(e, t, n), Ct = T, yn = C, ne = m, ve(t), u & 8192 && (e = t.stateNode, e._visibility = s ? e._visibility & -2 : e._visibility | 1, !s || i === null || f || ne || Ct || (e = f || Ct, n = ne, i = Ct, ne = s || ne, Ct = e, li(t, 2), ne = n, Ct = i), !s && yn || sc(t, s)), u & 4 && (e = t.updateQueue, e !== null && (n = e.retryQueue, n !== null && (e.retryQueue = null, ys(t, n))));
        break;
      case 19:
        ge(e, t, n), ve(t), u & 4 && (e = t.updateQueue, e !== null && (t.updateQueue = null, ys(t, e)));
        break;
      case 30:
        u & 512 && (Ct || i === null || re(i, i.return)), u = Xh(), s = zl, f = (n & 335544064) === n, m = t.memoizedProps, zl = f && zn(
          m.default,
          m.update
        ) !== "none", ge(e, t, n), ve(t), f && i !== null && Et && (t.flags |= 4), zl = s, Et = u;
        break;
      case 21:
        break;
      case 7:
        u & 512 && (Ct || i === null || re(i, i.return)), i && i.stateNode !== null && (i.stateNode._fragmentFiber = t);
      default:
        ge(e, t, n), ve(t);
    }
  }
  function ve(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var n, i = t.return; i !== null; ) {
          if (sy(i)) {
            n = i;
            break;
          }
          i = i.return;
        }
        i = null;
        for (var u = t.return; u !== null; ) {
          if (Pr(u)) {
            var s = u.stateNode;
            i === null ? i = [s] : i.push(s);
          }
          if (Fr(u)) break;
          u = u.return;
        }
        var f = i;
        if (n == null) throw Error(r(160));
        switch (n.tag) {
          case 27:
            var m = n.stateNode, T = Wr(t);
            rs(
              t,
              T,
              m,
              f
            );
            break;
          case 5:
            var C = n.stateNode;
            n.flags & 32 && (la(C, ""), n.flags &= -33);
            var R = Wr(t);
            rs(
              t,
              R,
              C,
              f
            );
            break;
          case 3:
          case 4:
            var V = n.stateNode.containerInfo, x = Wr(t);
            $r(
              t,
              x,
              V,
              f
            );
            break;
          default:
            throw Error(r(161));
        }
      } catch (O) {
        Ot(t, t.return, O);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function Ay(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        Ay(e), e.tag === 5 && e.flags & 1024 && (e = e.stateNode, qa = !0, e.reset(), qa = !1), t = t.sibling;
      }
  }
  function xa(t, e) {
    if (e.subtreeFlags & 9270)
      for (e = e.child; e !== null; )
        xy(e, t), e = e.sibling;
    else my(e);
  }
  function xy(t, e) {
    var n = t.alternate;
    if (n === null) tc(t, !1);
    else
      switch (t.tag) {
        case 3:
          if (uc = pn = !1, cy(), xa(e, t), !pn && !ds) {
            if (t = dn, t !== null)
              for (var i = 0; i < t.length; i += 3) {
                n = t[i];
                var u = t[i + 1];
                fp(n, t[i + 2]), n = n.ownerDocument.documentElement, n !== null && n.animate(
                  { opacity: [0, 0], pointerEvents: ["none", "none"] },
                  {
                    duration: 0,
                    fill: "forwards",
                    pseudoElement: "::view-transition-group(" + u + ")"
                  }
                );
              }
            t = e.containerInfo, t = t.nodeType === 9 ? t.documentElement : t.ownerDocument.documentElement, t !== null && t.style.viewTransitionName === "" && (t.style.viewTransitionName = "none", t.animate(
              { opacity: [0, 0], pointerEvents: ["none", "none"] },
              {
                duration: 0,
                fill: "forwards",
                pseudoElement: "::view-transition-group(root)"
              }
            ), t.animate(
              { width: [0, 0], height: [0, 0] },
              {
                duration: 0,
                fill: "forwards",
                pseudoElement: "::view-transition"
              }
            )), uc = !0;
          }
          dn = null;
          break;
        case 5:
          xa(e, t);
          break;
        case 4:
          i = pn, pn = !1, xa(e, t), pn && (ds = !0), pn = i;
          break;
        case 22:
          t.memoizedState === null && (n.memoizedState !== null ? tc(t, !1) : xa(e, t));
          break;
        case 30:
          i = pn, u = cy(), pn = !1, xa(e, t), pn && (t.flags |= 4);
          var s = t.memoizedProps, f = t.stateNode;
          e = Rn(s, f), f = Rn(n.memoizedProps, f);
          var m = zn(s.default, s.update);
          m === "none" ? e = !1 : (s = n.memoizedState, n.memoizedState = null, n = t.child, Ae = 0, e = ac(
            t,
            n,
            e,
            f,
            m,
            s,
            !0
          ), Ae !== (s === null ? 0 : s.length) && (t.flags |= 32)), (t.flags & 4) !== 0 && e ? (Na(
            t,
            t.memoizedProps.onUpdate
          ), dn = u) : u !== null && (u.push.apply(u, dn), dn = u), pn = (t.flags & 32) !== 0 ? !0 : i;
          break;
        default:
          xa(e, t);
      }
  }
  function gn(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; )
        py(t, e.alternate, e), e = e.sibling;
  }
  function li(t, e) {
    for (t = t.child; t !== null; ) {
      var n = t, i = e;
      switch (n.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ai(4, n, n.return), li(
            n,
            i
          );
          break;
        case 1:
          re(n, n.return);
          var u = n.stateNode;
          typeof u.componentWillUnmount == "function" && ly(
            n,
            n.return,
            u
          ), li(
            n,
            i
          );
          break;
        case 27:
          (i & 2) !== 0 && Ap(
            n.stateNode,
            n.type,
            n.memoizedProps
          );
        case 5:
          re(n, n.return), n.tag !== 5 && n.tag !== 27 || Rl(n), li(
            n,
            i
          );
          break;
        case 6:
          Rl(n);
          break;
        case 26:
          re(n, n.return), u = n.stateNode, n.memoizedState !== null || u === null || Ct || u.parentNode.removeChild(u), li(
            n,
            i
          );
          break;
        case 22:
          n.memoizedState === null && li(
            n,
            i
          );
          break;
        case 30:
          re(n, n.return), li(
            n,
            i
          );
          break;
        case 7:
          re(n, n.return);
        default:
          li(
            n,
            i
          );
      }
      t = t.sibling;
    }
  }
  function tn(t, e, n) {
    for (n = (e.subtreeFlags & 8772) !== 0 ? n : n & -2, e = e.child; e !== null; ) {
      var i = e.alternate, u = t, s = e, f = s.flags, m = (n & 1) !== 0;
      switch (s.tag) {
        case 0:
        case 11:
        case 15:
          tn(
            u,
            s,
            n
          ), Ol(4, s);
          break;
        case 1:
          if (tn(
            u,
            s,
            n
          ), i = s, u = i.stateNode, typeof u.componentDidMount == "function")
            try {
              u.componentDidMount();
            } catch (R) {
              Ot(i, i.return, R);
            }
          if (i = s, u = i.updateQueue, u !== null) {
            var T = i.stateNode;
            try {
              var C = u.shared.hiddenCallbacks;
              if (C !== null)
                for (u.shared.hiddenCallbacks = null, u = 0; u < C.length; u++)
                  Kd(C[u], T);
            } catch (R) {
              Ot(i, i.return, R);
            }
          }
          m && f & 64 && ay(s), hn(s, s.return);
          break;
        case 27:
          (n & 2) !== 0 && oy(s);
        case 5:
          s.tag !== 5 && s.tag !== 27 || uy(s), tn(
            u,
            s,
            n
          ), m && i === null && f & 4 && kr(s), hn(s, s.return);
          break;
        case 6:
          uy(s);
          break;
        case 26:
          T = s.stateNode, s.memoizedState !== null || T === null || ne || Kc(
            Ll(T.ownerDocument),
            s.type,
            T
          ), tn(
            u,
            s,
            n
          ), m && i === null && f & 4 && kr(s), hn(s, s.return);
          break;
        case 12:
          tn(
            u,
            s,
            n
          );
          break;
        case 31:
          tn(
            u,
            s,
            n
          ), m && f & 4 && Ty(u, s);
          break;
        case 13:
          tn(
            u,
            s,
            n
          ), m && f & 4 && by(u, s);
          break;
        case 22:
          s.memoizedState === null && tn(
            u,
            s,
            n
          ), hn(s, s.return);
          break;
        case 30:
          tn(
            u,
            s,
            n
          ), hn(s, s.return);
          break;
        case 7:
          hn(s, s.return);
        default:
          tn(
            u,
            s,
            n
          );
      }
      e = e.sibling;
    }
  }
  function rc(t, e) {
    var n = null;
    t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), t = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), t !== n && (t != null && t.refCount++, n != null && yl(n));
  }
  function cc(t, e) {
    t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && yl(t));
  }
  function Ze(t, e, n, i) {
    var u = (n & 335544064) === n;
    if (e.subtreeFlags & (u ? 10262 : 10256))
      for (e = e.child; e !== null; )
        My(
          t,
          e,
          n,
          i
        ), e = e.sibling;
    else u && dy(e);
  }
  function My(t, e, n, i) {
    var u = (n & 335544064) === n;
    u && e.alternate === null && e.return !== null && e.return.alternate !== null && hs(e);
    var s = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Ze(
          t,
          e,
          n,
          i
        ), s & 2048 && Ol(9, e);
        break;
      case 1:
        Ze(
          t,
          e,
          n,
          i
        );
        break;
      case 3:
        Ze(
          t,
          e,
          n,
          i
        ), u && uc && (t = t.containerInfo, t = t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, t.style.viewTransitionName === "root" && (t.style.viewTransitionName = ""), t = t.ownerDocument.documentElement, t !== null && t.style.viewTransitionName === "none" && (t.style.viewTransitionName = "")), s & 2048 && (s = null, e.alternate !== null && (s = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== s && (e.refCount++, s != null && yl(s)));
        break;
      case 12:
        if (s & 2048) {
          Ze(
            t,
            e,
            n,
            i
          ), s = e.stateNode;
          try {
            var f = e.memoizedProps, m = f.id, T = f.onPostCommit;
            typeof T == "function" && T(
              m,
              e.alternate === null ? "mount" : "update",
              s.passiveEffectDuration,
              -0
            );
          } catch (C) {
            Ot(e, e.return, C);
          }
        } else
          Ze(
            t,
            e,
            n,
            i
          );
        break;
      case 31:
        Ze(
          t,
          e,
          n,
          i
        );
        break;
      case 13:
        Ze(
          t,
          e,
          n,
          i
        );
        break;
      case 23:
        break;
      case 22:
        f = e.stateNode, m = e.alternate, e.memoizedState !== null ? (u && m !== null && m.memoizedState === null && hs(m), f._visibility & 2 ? Ze(
          t,
          e,
          n,
          i
        ) : Nl(
          t,
          e
        )) : (u && m !== null && m.memoizedState !== null && hs(e), f._visibility & 2 ? Ze(
          t,
          e,
          n,
          i
        ) : (f._visibility |= 2, Ma(
          t,
          e,
          n,
          i,
          (e.subtreeFlags & 10256) !== 0 || !1
        ))), s & 2048 && rc(m, e);
        break;
      case 24:
        Ze(
          t,
          e,
          n,
          i
        ), s & 2048 && cc(e.alternate, e);
        break;
      case 30:
        u && (s = e.alternate, s !== null && (mn(s.child, !0), mn(e.child, !0))), Ze(
          t,
          e,
          n,
          i
        );
        break;
      default:
        Ze(
          t,
          e,
          n,
          i
        );
    }
  }
  function Ma(t, e, n, i, u) {
    for (u = u && ((e.subtreeFlags & 10256) !== 0 || !1), e = e.child; e !== null; ) {
      var s = t, f = e, m = n, T = i, C = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          Ma(
            s,
            f,
            m,
            T,
            u
          ), Ol(8, f);
          break;
        case 23:
          break;
        case 22:
          var R = f.stateNode;
          f.memoizedState !== null ? R._visibility & 2 ? Ma(
            s,
            f,
            m,
            T,
            u
          ) : Nl(
            s,
            f
          ) : (R._visibility |= 2, Ma(
            s,
            f,
            m,
            T,
            u
          )), u && C & 2048 && rc(
            f.alternate,
            f
          );
          break;
        case 24:
          Ma(
            s,
            f,
            m,
            T,
            u
          ), u && C & 2048 && cc(f.alternate, f);
          break;
        default:
          Ma(
            s,
            f,
            m,
            T,
            u
          );
      }
      e = e.sibling;
    }
  }
  function Nl(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var n = t, i = e, u = i.flags;
        switch (i.tag) {
          case 22:
            Nl(n, i), u & 2048 && rc(
              i.alternate,
              i
            );
            break;
          case 24:
            Nl(n, i), u & 2048 && cc(i.alternate, i);
            break;
          default:
            Nl(n, i);
        }
        e = e.sibling;
      }
  }
  var qi = 8192;
  function Gi(t, e, n) {
    if (t.subtreeFlags & qi)
      for (t = t.child; t !== null; )
        Cy(
          t,
          e,
          n
        ), t = t.sibling;
  }
  function Cy(t, e, n) {
    switch (t.tag) {
      case 26:
        Gi(
          t,
          e,
          n
        ), t.flags & qi && (t.memoizedState !== null ? JT(
          n,
          $e,
          t.memoizedState,
          t.memoizedProps
        ) : (t = t.stateNode, (e & 335544128) === e && Vp(n, t)));
        break;
      case 5:
        Gi(
          t,
          e,
          n
        ), t.flags & qi && (t = t.stateNode, (e & 335544128) === e && Vp(n, t));
        break;
      case 3:
      case 4:
        var i = $e;
        $e = Ll(t.stateNode.containerInfo), Gi(
          t,
          e,
          n
        ), $e = i;
        break;
      case 22:
        t.memoizedState === null && (i = t.alternate, i !== null && i.memoizedState !== null ? (i = qi, qi = 16777216, Gi(
          t,
          e,
          n
        ), qi = i) : Gi(
          t,
          e,
          n
        ));
        break;
      case 30:
        if ((t.flags & qi) !== 0 && (i = t.memoizedProps.name, i != null && i !== "auto")) {
          var u = t.stateNode;
          u.paired = null, we === null && (we = /* @__PURE__ */ new Map()), we.set(i, u);
        }
        Gi(
          t,
          e,
          n
        );
        break;
      default:
        Gi(
          t,
          e,
          n
        );
    }
  }
  function Dy(t) {
    var e = t.alternate;
    if (e !== null && (t = e.child, t !== null)) {
      e.child = null;
      do
        e = t.sibling, t.sibling = null, t = e;
      while (t !== null);
    }
  }
  function _l(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          ie = i, Ry(
            i,
            t
          );
        }
      Dy(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        Oy(t), t = t.sibling;
  }
  function Oy(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        _l(t), t.flags & 2048 && ai(9, t, t.return);
        break;
      case 3:
        _l(t);
        break;
      case 12:
        _l(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (e._visibility &= -3, ps(t)) : _l(t);
        break;
      default:
        _l(t);
    }
  }
  function ps(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          ie = i, Ry(
            i,
            t
          );
        }
      Dy(t);
    }
    for (t = t.child; t !== null; ) {
      switch (e = t, e.tag) {
        case 0:
        case 11:
        case 15:
          ai(8, e, e.return), ps(e);
          break;
        case 22:
          n = e.stateNode, n._visibility & 2 && (n._visibility &= -3, ps(e));
          break;
        default:
          ps(e);
      }
      t = t.sibling;
    }
  }
  function Ry(t, e) {
    for (; ie !== null; ) {
      var n = ie;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          ai(8, n, e);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var i = n.memoizedState.cachePool.pool;
            i != null && i.refCount++;
          }
          break;
        case 24:
          yl(n.memoizedState.cache);
      }
      if (i = n.child, i !== null) i.return = n, ie = i;
      else
        t: for (n = t; ie !== null; ) {
          i = ie;
          var u = i.sibling, s = i.return;
          if (vy(i), i === n) {
            ie = null;
            break t;
          }
          if (u !== null) {
            u.return = s, ie = u;
            break t;
          }
          ie = s;
        }
    }
  }
  var GS = {
    getCacheForType: function(t) {
      var e = ue(Qt), n = e.data.get(t);
      return n === void 0 && (n = t(), e.data.set(t, n)), n;
    },
    cacheSignal: function() {
      return ue(Qt).controller.signal;
    }
  }, XS = typeof WeakMap == "function" ? WeakMap : Map, Mt = 0, _t = null, yt = null, gt = 0, Dt = 0, Ue = null, ui = !1, Ca = !1, fc = !1, Ln = 0, Gt = 0, si = 0, Xi = 0, gs = 0, Be = 0, Da = 0, Vl = null, Me = null, hc = !1, vs = 0, zy = 0, Ss = 1 / 0, Ts = null, oi = null, Lt = 0, en = null, Qi = null, vn = 0, dc = 0, mc = null, Ny = null, Oa = null, Ra = null, za = null, wl = 0, bs = null;
  function je() {
    return (Mt & 2) !== 0 && gt !== 0 ? gt & -gt : I.T !== null ? xc() : wh();
  }
  function _y() {
    if (Be === 0)
      if ((gt & 536870912) === 0 || ht) {
        var t = yu;
        yu <<= 1, (yu & 3932160) === 0 && (yu = 262144), Be = t;
      } else Be = 536870912;
    return t = se.current, t !== null && (t.flags |= 32), Be;
  }
  function Na(t, e) {
    if (e != null) {
      var n = t.stateNode, i = n.ref;
      i === null && (i = n.ref = hp(
        Rn(t.memoizedProps, n)
      )), Ra === null && (Ra = []), Ra.push(e.bind(null, i));
    }
  }
  function Ce(t, e, n) {
    (t === _t && (Dt === 2 || Dt === 9) || t.cancelPendingCommit !== null) && (_a(t, 0), ri(
      t,
      gt,
      Be,
      !1
    )), el(t, n), ((Mt & 2) === 0 || t !== _t) && (t === _t && ((Mt & 2) === 0 && (Xi |= n), Gt === 4 && ri(
      t,
      gt,
      Be,
      !1
    )), Sn(t));
  }
  function Vy(t, e, n) {
    if ((Mt & 6) !== 0) throw Error(r(327));
    var i = !n && (e & 127) === 0 && (e & t.expiredLanes) === 0 || tl(t, e), u = i ? KS(t, e) : pc(t, e, !0), s = i;
    do {
      if (u === 0) {
        Ca && !i && ri(t, e, 0, !1);
        break;
      } else {
        if (n = t.current.alternate, s && !QS(n)) {
          u = pc(t, e, !1), s = !1;
          continue;
        }
        if (u === 2) {
          if (s = e, t.errorRecoveryDisabledLanes & s)
            var f = 0;
          else
            f = t.pendingLanes & -536870913, f = f !== 0 ? f : f & 536870912 ? 536870912 : 0;
          if (f !== 0) {
            e = f;
            t: {
              var m = t;
              u = Vl;
              var T = m.current.memoizedState.isDehydrated;
              if (T && (_a(m, f).flags |= 256), f = pc(
                m,
                f,
                !1
              ), f !== 2 && f !== 6) {
                if (fc && !T) {
                  m.errorRecoveryDisabledLanes |= s, Xi |= s, u = 4;
                  break t;
                }
                s = Me, Me = u, s !== null && (Me === null ? Me = s : Me.push.apply(
                  Me,
                  s
                ));
              }
              u = f;
            }
            if (s = !1, u !== 2) continue;
          }
        }
        if (u === 1) {
          _a(t, 0), ri(t, e, 0, !0);
          break;
        }
        t: {
          switch (i = t, s = u, s) {
            case 0:
            case 1:
              throw Error(r(345));
            case 4:
              if ((e & 4194048) !== e && (e & 62914560) !== e)
                break;
            case 6:
              ri(
                i,
                e,
                Be,
                !ui
              );
              break t;
            case 2:
              Me = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(r(329));
          }
          if ((e & 62914560) === e && (u = vs + 300 - Oe(), 10 < u)) {
            if (ri(
              i,
              e,
              Be,
              !ui
            ), gu(i, 0, !0) !== 0) break t;
            vn = e, i.timeoutHandle = Uc(
              wy.bind(
                null,
                i,
                n,
                Me,
                Ts,
                hc,
                e,
                Be,
                Xi,
                Da,
                ui,
                s,
                "Throttled",
                -0,
                0
              ),
              u
            );
            break t;
          }
          wy(
            i,
            n,
            Me,
            Ts,
            hc,
            e,
            Be,
            Xi,
            Da,
            ui,
            s,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Sn(t);
  }
  function wy(t, e, n, i, u, s, f, m, T, C, R, V, x, O) {
    t.timeoutHandle = -1;
    var G = e.subtreeFlags, F = (s & 335544064) === s;
    if (V = null, (F || G & 8192 || (G & 16785408) === 16785408) && (V = {
      stylesheets: null,
      count: 0,
      imgCount: 0,
      imgBytes: 0,
      suspenseyImages: [],
      waitingForImages: !0,
      waitingForViewTransition: !1,
      unsuspend: rn
    }, we = null, Cy(
      e,
      s,
      V
    ), F && (G = V, F = t.containerInfo, F = (F.nodeType === 9 ? F : F.ownerDocument).__reactViewTransition, F != null && (G.count++, G.waitingForViewTransition = !0, G = Gl.bind(G), F.finished.then(G, G))), G = (s & 62914560) === s ? vs - Oe() : (s & 4194048) === s ? zy - Oe() : 0, G = FT(
      V,
      G
    ), G !== null)) {
      vn = s, t.cancelPendingCommit = G(
        Gy.bind(
          null,
          t,
          e,
          s,
          n,
          i,
          u,
          f,
          m,
          T,
          C,
          R,
          V,
          null,
          x,
          O
        )
      ), ri(t, s, f, !C);
      return;
    }
    Gy(
      t,
      e,
      s,
      n,
      i,
      u,
      f,
      m,
      T,
      C,
      R,
      V
    );
  }
  function QS(t) {
    for (var e = t; ; ) {
      var n = e.tag;
      if ((n === 0 || n === 11 || n === 15) && e.flags & 16384 && (n = e.updateQueue, n !== null && (n = n.stores, n !== null)))
        for (var i = 0; i < n.length; i++) {
          var u = n[i], s = u.getSnapshot;
          u = u.value;
          try {
            if (!_e(s(), u)) return !1;
          } catch {
            return !1;
          }
        }
      if (n = e.child, e.subtreeFlags & 16384 && n !== null)
        n.return = e, e = n;
      else {
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return !0;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
    }
    return !0;
  }
  function ri(t, e, n, i) {
    e = Rh(t, e), e &= ~gs, e &= ~Xi, t.suspendedLanes |= e, t.pingedLanes &= ~e, i && (t.warmLanes |= e), i = t.expirationTimes;
    for (var u = e; 0 < u; ) {
      var s = 31 - ze(u), f = 1 << s;
      i[s] = -1, u &= ~f;
    }
    n !== 0 && Nh(t, n, e);
  }
  function Es() {
    return (Mt & 6) === 0 ? (Ul(0), !1) : !0;
  }
  function yc() {
    if (yt !== null) {
      if (Dt === 0)
        var t = yt.return;
      else
        t = yt, Vn = Ni = null, Ar(t), va = null, vl = 0, t = yt;
      for (; t !== null; )
        iy(t.alternate, t), t = t.return;
      yt = null;
    }
  }
  function _a(t, e) {
    var n = t.timeoutHandle;
    return n !== -1 && (t.timeoutHandle = -1, mT(n)), n = t.cancelPendingCommit, n !== null && (t.cancelPendingCommit = null, n()), vn = 0, yc(), _t = t, yt = n = Nn(t.current, null), gt = e, Dt = 0, Ue = null, ui = !1, Ca = tl(t, e), fc = !1, Da = Be = gs = Xi = si = Gt = 0, Me = Vl = null, hc = !1, Ln = Rh(t, e), zu(), n;
  }
  function Uy(t, e) {
    rt = null, I.H = es, e === ga || e === qu ? (e = Gd(), Dt = 3) : e === cr ? (e = Gd(), Dt = 4) : Dt = e === Hr ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1, Ue = e, yt === null && (Gt = 1, ns(
      t,
      qe(e, t.current)
    ));
  }
  function By() {
    var t = se.current;
    return t === null ? !0 : (gt & 4194048) === gt ? me === null : (gt & 62914560) === gt || (gt & 536870912) !== 0 ? t === me : !1;
  }
  function jy() {
    var t = I.H;
    return I.H = es, t === null ? es : t;
  }
  function Hy() {
    var t = I.A;
    return I.A = GS, t;
  }
  function As() {
    Gt = 4, ui || (gt & 4194048) !== gt && se.current !== null || (Ca = !0), (si & 134217727) === 0 && (Xi & 134217727) === 0 || _t === null || ri(
      _t,
      gt,
      Be,
      !1
    );
  }
  function pc(t, e, n) {
    var i = Mt;
    Mt |= 2;
    var u = jy(), s = Hy();
    (_t !== t || gt !== e) && (Ts = null, _a(t, e)), e = !1;
    var f = Gt;
    t: do
      try {
        if (Dt !== 0 && yt !== null) {
          var m = yt, T = Ue;
          switch (Dt) {
            case 8:
              yc(), f = 6;
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              se.current === null && (e = !0);
              var C = Dt;
              if (Dt = 0, Ue = null, Va(t, m, T, C), n && Ca) {
                f = 0;
                break t;
              }
              break;
            default:
              C = Dt, Dt = 0, Ue = null, Va(t, m, T, C);
          }
        }
        ZS(), f = Gt;
        break;
      } catch (R) {
        Uy(t, R);
      }
    while (!0);
    return e && t.shellSuspendCounter++, Vn = Ni = null, Mt = i, I.H = u, I.A = s, yt === null && (_t = null, gt = 0, zu()), f;
  }
  function ZS() {
    for (; yt !== null; ) Ly(yt);
  }
  function KS(t, e) {
    var n = Mt;
    Mt |= 2;
    var i = jy(), u = Hy();
    _t !== t || gt !== e ? (Ts = null, Ss = Oe() + 500, _a(t, e)) : Ca = tl(
      t,
      e
    );
    t: do
      try {
        if (Dt !== 0 && yt !== null) {
          e = yt;
          var s = Ue;
          e: switch (Dt) {
            case 1:
              Dt = 0, Ue = null, Va(t, e, s, 1);
              break;
            case 2:
            case 9:
              if (Yd(s)) {
                Dt = 0, Ue = null, Yy(e);
                break;
              }
              e = function() {
                Dt !== 2 && Dt !== 9 || _t !== t || (Dt = 7), Sn(t);
              }, s.then(e, e);
              break t;
            case 3:
              Dt = 7;
              break t;
            case 4:
              Dt = 5;
              break t;
            case 7:
              Yd(s) ? (Dt = 0, Ue = null, Yy(e)) : (Dt = 0, Ue = null, Va(t, e, s, 7));
              break;
            case 5:
              var f = null;
              switch (yt.tag) {
                case 26:
                  f = yt.memoizedState;
                case 5:
                case 27:
                  var m = yt;
                  if (f ? Np(f) : m.stateNode.complete) {
                    Dt = 0, Ue = null;
                    var T = m.sibling;
                    if (T !== null) yt = T;
                    else {
                      var C = m.return;
                      C !== null ? (yt = C, xs(C)) : yt = null;
                    }
                    break e;
                  }
              }
              Dt = 0, Ue = null, Va(t, e, s, 5);
              break;
            case 6:
              Dt = 0, Ue = null, Va(t, e, s, 6);
              break;
            case 8:
              yc(), Gt = 6;
              break t;
            default:
              throw Error(r(462));
          }
        }
        JS();
        break;
      } catch (R) {
        Uy(t, R);
      }
    while (!0);
    return Vn = Ni = null, I.H = i, I.A = u, Mt = n, yt !== null ? 0 : (_t = null, gt = 0, zu(), Gt);
  }
  function JS() {
    for (; yt !== null && !c1(); )
      Ly(yt);
  }
  function Ly(t) {
    var e = ey(t.alternate, t, Ln);
    t.memoizedProps = t.pendingProps, e === null ? xs(t) : yt = e;
  }
  function Yy(t) {
    var e = t, n = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = Fm(
          n,
          e,
          e.pendingProps,
          e.type,
          void 0,
          gt
        );
        break;
      case 11:
        e = Fm(
          n,
          e,
          e.pendingProps,
          e.type.render,
          e.ref,
          gt
        );
        break;
      case 5:
        Ar(e);
        var i = e;
        i === ee && (ht ? (Bu(i), i.tag === 5 && i.stateNode != null && (Bt = i.stateNode)) : (Bu(i), ht = !0));
      default:
        iy(n, e), e = yt = Rd(e, Ln), e = ey(n, e, Ln);
    }
    t.memoizedProps = t.pendingProps, e === null ? xs(t) : yt = e;
  }
  function Va(t, e, n, i) {
    Vn = Ni = null, Ar(e), va = null, vl = 0;
    var u = e.return;
    try {
      if (wS(
        t,
        u,
        e,
        n,
        gt
      )) {
        Gt = 1, ns(
          t,
          qe(n, t.current)
        ), yt = null;
        return;
      }
    } catch (s) {
      if (u !== null) throw yt = u, s;
      Gt = 1, ns(
        t,
        qe(n, t.current)
      ), yt = null;
      return;
    }
    e.flags & 32768 ? (ht || i === 1 ? t = !0 : Ca || (gt & 536870912) !== 0 ? t = !1 : (ui = t = !0, (i === 2 || i === 9 || i === 3 || i === 6) && (i = se.current, i !== null && i.tag === 13 && (i.flags |= 16384))), qy(e, t)) : xs(e);
  }
  function xs(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        qy(
          e,
          ui
        );
        return;
      }
      t = e.return;
      var n = HS(
        e.alternate,
        e,
        Ln
      );
      if (n !== null) {
        yt = n;
        return;
      }
      if (e = e.sibling, e !== null) {
        yt = e;
        return;
      }
      yt = e = t;
    } while (e !== null);
    Gt === 0 && (Gt = 5);
  }
  function qy(t, e) {
    do {
      var n = LS(t.alternate, t);
      if (n !== null) {
        n.flags &= 32767, yt = n;
        return;
      }
      if (n = t.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !e && (t = t.sibling, t !== null)) {
        yt = t;
        return;
      }
      yt = t = n;
    } while (t !== null);
    Gt = 6, yt = null;
  }
  function Gy(t, e, n, i, u, s, f, m, T, C, R, V) {
    t.cancelPendingCommit = null;
    do
      Ms();
    while (Lt !== 0);
    if ((Mt & 6) !== 0) throw Error(r(327));
    if (e !== null) {
      if (e === t.current) throw Error(r(177));
      t === _t && (yt = _t = null, gt = 0), Qi = e, en = t, vn = n, mc = u, Ny = i, FS(
        t,
        e,
        n,
        f,
        m,
        T,
        V
      );
    }
  }
  function FS(t, e, n, i, u, s, f) {
    var m = e.lanes | e.childLanes;
    if (dc = m, m |= Io, T1(
      t,
      n,
      m,
      i,
      u,
      s
    ), Ra = null, (n & 335544064) === n ? (za = ES(t), i = 10262) : (za = null, i = 10256), (e.subtreeFlags & i) !== 0 || (e.flags & i) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, tT(du, function() {
      return Tc(), null;
    })) : (t.callbackNode = null, t.callbackPriority = 0), cs = !1, i = (e.flags & 13878) !== 0, (e.subtreeFlags & 13878) !== 0 || i) {
      i = I.T, I.T = null, u = st.p, st.p = 2, s = Mt, Mt |= 4;
      try {
        YS(t, e, n);
      } finally {
        Mt = s, st.p = u, I.T = i;
      }
    }
    Lt = 1, cs ? Oa = TT(
      f,
      t.containerInfo,
      za,
      gc,
      vc,
      kS,
      Sc,
      Tc,
      PS
    ) : (gc(), vc(), Sc());
  }
  function PS(t) {
    if (Lt !== 0) {
      var e = en.onRecoverableError;
      e(t, { componentStack: null });
    }
  }
  function kS() {
    Lt === 3 && (Lt = 0, xy(Qi, en), Lt = 4);
  }
  function gc() {
    if (Lt === 1) {
      Lt = 0;
      var t = en, e = Qi, n = vn, i = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || i) {
        i = I.T, I.T = null;
        var u = st.p;
        st.p = 2;
        var s = Mt;
        Mt |= 4;
        try {
          zl = ds = !1, Ey(e, t, n), n = _c;
          var f = Sd(t.containerInfo), m = n.focusedElem, T = n.selectionRange;
          if (f !== m && m && m.ownerDocument && vd(
            m.ownerDocument.documentElement,
            m
          )) {
            if (T !== null && Ko(m)) {
              var C = T.start, R = T.end;
              if (R === void 0 && (R = C), "selectionStart" in m)
                m.selectionStart = C, m.selectionEnd = Math.min(
                  R,
                  m.value.length
                );
              else {
                var V = m.ownerDocument || document, x = V && V.defaultView || window;
                if (x.getSelection) {
                  var O = x.getSelection(), G = m.textContent.length, F = Math.min(T.start, G), ct = T.end === void 0 ? F : Math.min(T.end, G);
                  !O.extend && F > ct && (f = ct, ct = F, F = f);
                  var M = gd(
                    m,
                    F
                  ), E = gd(
                    m,
                    ct
                  );
                  if (M && E && (O.rangeCount !== 1 || O.anchorNode !== M.node || O.anchorOffset !== M.offset || O.focusNode !== E.node || O.focusOffset !== E.offset)) {
                    var D = V.createRange();
                    D.setStart(M.node, M.offset), O.removeAllRanges(), F > ct ? (O.addRange(D), O.extend(E.node, E.offset)) : (D.setEnd(E.node, E.offset), O.addRange(D));
                  }
                }
              }
            }
            for (V = [], O = m; O = O.parentNode; )
              O.nodeType === 1 && V.push({
                element: O,
                left: O.scrollLeft,
                top: O.scrollTop
              });
            for (typeof m.focus == "function" && m.focus(), m = 0; m < V.length; m++) {
              var _ = V[m];
              _.element.scrollLeft = _.left, _.element.scrollTop = _.top;
            }
          }
          qa = !!Nc, _c = Nc = null;
        } finally {
          Mt = s, st.p = u, I.T = i;
        }
      }
      t.current = e, Lt = 2;
    }
  }
  function vc() {
    if (Lt === 2) {
      Lt = 0;
      var t = en, e = Qi, n = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || n) {
        n = I.T, I.T = null;
        var i = st.p;
        st.p = 2;
        var u = Mt;
        Mt |= 4;
        try {
          py(t, e.alternate, e);
        } finally {
          Mt = u, st.p = i, I.T = n;
        }
      }
      Lt = 3;
    }
  }
  function Sc() {
    if (Lt === 4 || Lt === 3) {
      Lt = 0;
      var t = Oa;
      Oa = null, f1();
      var e = en, n = Qi, i = vn, u = Ny, s = (i & 335544064) === i ? 10262 : 10256;
      if ((n.subtreeFlags & s) !== 0 || (n.flags & s) !== 0 ? Lt = 5 : (Lt = 0, Qi = en = null, Xy(e, e.pendingLanes)), s = e.pendingLanes, s === 0 && (oi = null), Oo(i), n = n.stateNode, Re && typeof Re.onCommitFiberRoot == "function")
        try {
          Re.onCommitFiberRoot(
            $a,
            n,
            void 0,
            (n.current.flags & 128) === 128
          );
        } catch {
        }
      if (u !== null) {
        n = I.T, s = st.p, st.p = 2, I.T = null;
        try {
          for (var f = e.onRecoverableError, m = 0; m < u.length; m++) {
            var T = u[m];
            f(T.value, {
              componentStack: T.stack
            });
          }
        } finally {
          I.T = n, st.p = s;
        }
      }
      if (u = Ra, f = za, za = null, u !== null && (Ra = null, f === null && (f = []), t !== null))
        for (T = 0; T < u.length; T++)
          n = (0, u[T])(
            f
          ), n !== void 0 && t.finished.finally(n);
      (vn & 3) !== 0 && Ms(), Sn(e), s = e.pendingLanes, (i & 261930) !== 0 && (s & 42) !== 0 ? e === bs ? wl++ : (wl = 0, bs = e) : (wl = 0, bs = null), Ul(0);
    }
  }
  function Xy(t, e) {
    (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache, e != null && (t.pooledCache = null, yl(e)));
  }
  function Ms() {
    return Oa !== null && (Oa.skipTransition(), Oa = null), gc(), vc(), Sc(), Tc();
  }
  function Tc() {
    if (Lt !== 5) return !1;
    var t = en, e = dc;
    dc = 0;
    var n = Oo(vn), i = I.T, u = st.p;
    try {
      st.p = 32 > n ? 32 : n, I.T = null, n = mc, mc = null;
      var s = en, f = vn;
      if (Lt = 0, Qi = en = null, vn = 0, (Mt & 6) !== 0) throw Error(r(331));
      var m = Mt;
      if (Mt |= 4, Oy(s.current), My(
        s,
        s.current,
        f,
        n
      ), Mt = m, Ul(0, !1), Re && typeof Re.onPostCommitFiberRoot == "function")
        try {
          Re.onPostCommitFiberRoot($a, s);
        } catch {
        }
      return !0;
    } finally {
      st.p = u, I.T = i, Xy(t, e);
    }
  }
  function Qy(t, e, n) {
    e = qe(n, e), e = jr(t.stateNode, e, 2), t = ti(t, e, 2), t !== null && (el(t, 2), Sn(t));
  }
  function Ot(t, e, n) {
    if (t.tag === 3)
      Qy(t, t, n);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          Qy(
            e,
            t,
            n
          );
          break;
        } else if (e.tag === 1) {
          var i = e.stateNode;
          if (typeof e.type.getDerivedStateFromError == "function" || typeof i.componentDidCatch == "function" && (oi === null || !oi.has(i))) {
            t = qe(n, t), n = Ym(2), i = ti(e, n, 2), i !== null && (qm(
              n,
              i,
              e,
              t
            ), el(i, 2), Sn(i));
            break;
          }
        }
        e = e.return;
      }
  }
  function bc(t, e, n) {
    var i = t.pingCache;
    if (i === null) {
      i = t.pingCache = new XS();
      var u = /* @__PURE__ */ new Set();
      i.set(e, u);
    } else
      u = i.get(e), u === void 0 && (u = /* @__PURE__ */ new Set(), i.set(e, u));
    u.has(n) || (fc = !0, u.add(n), t = IS.bind(null, t, e, n), e.then(t, t));
  }
  function IS(t, e, n) {
    var i = t.pingCache;
    i !== null && i.delete(e), t.pingedLanes |= t.suspendedLanes & n, t.warmLanes &= ~n, _t === t && (gt & n) === n && ((Gt === 4 || Gt === 3 && (gt & 62914560) === gt && 300 > Oe() - vs) && (Mt & 2) === 0 ? _a(t, 0) : gs |= n, Da === gt && (Da = 0)), Sn(t);
  }
  function Zy(t, e) {
    e === 0 && (e = zh()), t = Oi(t, e), t !== null && (el(t, e), Sn(t));
  }
  function WS(t) {
    var e = t.memoizedState, n = 0;
    e !== null && (n = e.retryLane), Zy(t, n);
  }
  function $S(t, e) {
    var n = 0;
    switch (t.tag) {
      case 31:
      case 13:
        var i = t.stateNode, u = t.memoizedState;
        u !== null && (n = u.retryLane);
        break;
      case 19:
        i = t.stateNode;
        break;
      case 22:
        i = t.stateNode._retryCache;
        break;
      default:
        throw Error(r(314));
    }
    i !== null && i.delete(e), Zy(t, n);
  }
  function tT(t, e) {
    return xo(t, e);
  }
  var wa = null, Ua = null, Ec = !1, Cs = !1, Ac = !1, ci = 0;
  function Sn(t) {
    t !== Ua && t.next === null && (Ua === null ? wa = Ua = t : Ua = Ua.next = t), Cs = !0, Ec || (Ec = !0, nT());
  }
  function Ul(t, e) {
    if (!Ac && Cs) {
      Ac = !0;
      do
        for (var n = !1, i = wa; i !== null; ) {
          if (t !== 0) {
            var u = i.pendingLanes;
            if (u === 0) var s = 0;
            else {
              var f = i.suspendedLanes, m = i.pingedLanes;
              s = (1 << 31 - ze(42 | t) + 1) - 1, s &= u & ~(f & ~m), s = s & 201326741 ? s & 201326741 | 1 : s ? s | 2 : 0;
            }
            s !== 0 && (n = !0, Py(i, s));
          } else
            s = gt, s = gu(
              i,
              i === _t ? s : 0,
              i.cancelPendingCommit !== null || i.timeoutHandle !== -1
            ), (s & 3) === 0 || tl(i, s) || (n = !0, Py(i, s));
          i = i.next;
        }
      while (n);
      Ac = !1;
    }
  }
  function eT() {
    Ky();
  }
  function Ky() {
    Cs = Ec = !1;
    var t = 0;
    ci !== 0 && dT() && (t = ci);
    for (var e = Oe(), n = null, i = wa; i !== null; ) {
      var u = i.next, s = Jy(i, e);
      s === 0 ? (i.next = null, n === null ? wa = u : n.next = u, u === null && (Ua = n)) : (n = i, (t !== 0 || (s & 3) !== 0) && (Cs = !0)), i = u;
    }
    Lt !== 0 && Lt !== 5 || Ul(t), ci !== 0 && (ci = 0);
  }
  function Jy(t, e) {
    for (var n = t.suspendedLanes, i = t.pingedLanes, u = t.expirationTimes, s = t.pendingLanes & -62914561; 0 < s; ) {
      var f = 31 - ze(s), m = 1 << f, T = u[f];
      T === -1 ? ((m & n) === 0 || (m & i) !== 0) && (u[f] = S1(m, e)) : T <= e && (t.expiredLanes |= m), s &= ~m;
    }
    if (e = _t, n = gt, n = gu(
      t,
      t === e ? n : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), i = t.callbackNode, n === 0 || t === e && (Dt === 2 || Dt === 9) || t.cancelPendingCommit !== null)
      return i !== null && i !== null && Mo(i), t.callbackNode = null, t.callbackPriority = 0;
    if ((n & 3) === 0 || tl(t, n)) {
      if (e = n & -n, e === t.callbackPriority) return e;
      switch (i !== null && Mo(i), Oo(n)) {
        case 2:
        case 8:
          n = Dh;
          break;
        case 32:
          n = du;
          break;
        case 268435456:
          n = Oh;
          break;
        default:
          n = du;
      }
      return i = Fy.bind(null, t), n = xo(n, i), t.callbackPriority = e, t.callbackNode = n, e;
    }
    return i !== null && i !== null && Mo(i), t.callbackPriority = 2, t.callbackNode = null, 2;
  }
  function Fy(t, e) {
    if (Lt !== 0 && Lt !== 5)
      return t.callbackNode = null, t.callbackPriority = 0, null;
    var n = t.callbackNode;
    if (Ms() && t.callbackNode !== n)
      return null;
    var i = gt;
    return i = gu(
      t,
      t === _t ? i : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), i === 0 ? null : (Vy(t, i, e), Jy(t, Oe()), t.callbackNode != null && t.callbackNode === n ? Fy.bind(null, t) : null);
  }
  function Py(t, e) {
    if (Ms()) return null;
    Vy(t, e, !0);
  }
  function nT() {
    yT(function() {
      (Mt & 6) !== 0 ? xo(
        Ch,
        eT
      ) : Ky();
    });
  }
  function xc() {
    if (ci === 0) {
      var t = wi;
      t === 0 && (t = mu, mu <<= 1, (mu & 261888) === 0 && (mu = 256)), ci = t;
    }
    return ci;
  }
  function ky(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : Eu(t);
  }
  function iT(t, e, n, i, u) {
    if (e === "submit" && n && n.stateNode === u) {
      var s = ky(
        (u[be] || null).action
      ), f = i.submitter;
      f && (e = (e = f[be] || null) ? ky(e.formAction) : f.getAttribute("formAction"), e !== null && (s = e, f = null));
      var m = new Cu(
        "action",
        "action",
        null,
        i,
        u
      );
      t.push({
        event: m,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (i.defaultPrevented) {
                if (ci !== 0) {
                  var T = new FormData(u, f);
                  _r(
                    n,
                    {
                      pending: !0,
                      data: T,
                      method: u.method,
                      action: s
                    },
                    null,
                    T
                  );
                }
              } else
                typeof s == "function" && (m.preventDefault(), T = new FormData(u, f), _r(
                  n,
                  {
                    pending: !0,
                    data: T,
                    method: u.method,
                    action: s
                  },
                  s,
                  T
                ));
            },
            currentTarget: u
          }
        ]
      });
    }
  }
  for (var Mc = 0; Mc < ko.length; Mc++) {
    var Cc = ko[Mc], aT = Cc.toLowerCase(), lT = Cc[0].toUpperCase() + Cc.slice(1);
    Ie(
      aT,
      "on" + lT
    );
  }
  Ie(Ed, "onAnimationEnd"), Ie(Ad, "onAnimationIteration"), Ie(xd, "onAnimationStart"), Ie("dblclick", "onDoubleClick"), Ie("focusin", "onFocus"), Ie("focusout", "onBlur"), Ie(mS, "onTransitionRun"), Ie(yS, "onTransitionStart"), Ie(pS, "onTransitionCancel"), Ie(Md, "onTransitionEnd"), ia("onMouseEnter", ["mouseout", "mouseover"]), ia("onMouseLeave", ["mouseout", "mouseover"]), ia("onPointerEnter", ["pointerout", "pointerover"]), ia("onPointerLeave", ["pointerout", "pointerover"]), Mi(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Mi(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Mi("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Mi(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Mi(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Mi(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var Bl = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), uT = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Bl)
  );
  function Iy(t, e) {
    e = (e & 4) !== 0;
    for (var n = 0; n < t.length; n++) {
      var i = t[n], u = i.event;
      i = i.listeners;
      t: {
        var s = void 0;
        if (e)
          for (var f = i.length - 1; 0 <= f; f--) {
            var m = i[f], T = m.instance, C = m.currentTarget;
            if (m = m.listener, T !== s && u.isPropagationStopped())
              break t;
            s = m, u.currentTarget = C;
            try {
              s(u);
            } catch (R) {
              Ru(R);
            }
            u.currentTarget = null, s = T;
          }
        else
          for (f = 0; f < i.length; f++) {
            if (m = i[f], T = m.instance, C = m.currentTarget, m = m.listener, T !== s && u.isPropagationStopped())
              break t;
            s = m, u.currentTarget = C;
            try {
              s(u);
            } catch (R) {
              Ru(R);
            }
            u.currentTarget = null, s = T;
          }
      }
    }
  }
  function pt(t, e) {
    var n = e[Bh];
    n === void 0 && (n = e[Bh] = /* @__PURE__ */ new Set());
    var i = t + "__bubble";
    n.has(i) || (Wy(e, t, 2, !1), n.add(i));
  }
  function Dc(t, e, n) {
    var i = 0;
    e && (i |= 4), Wy(
      n,
      t,
      i,
      e
    );
  }
  var Ds = "_reactListening" + Math.random().toString(36).slice(2);
  function Oc(t) {
    if (!t[Ds]) {
      t[Ds] = !0, Lh.forEach(function(n) {
        n !== "selectionchange" && (uT.has(n) || Dc(n, !1, t), Dc(n, !0, t));
      });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[Ds] || (e[Ds] = !0, Dc("selectionchange", !1, e));
    }
  }
  function Wy(t, e, n, i) {
    switch (qp(e)) {
      case 2:
        var u = WT;
        break;
      case 8:
        u = $T;
        break;
      default:
        u = Fc;
    }
    n = u.bind(
      null,
      e,
      n,
      t
    ), u = void 0, !Bo || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (u = !0), i ? u !== void 0 ? t.addEventListener(e, n, {
      capture: !0,
      passive: u
    }) : t.addEventListener(e, n, !0) : u !== void 0 ? t.addEventListener(e, n, {
      passive: u
    }) : t.addEventListener(e, n, !1);
  }
  function Rc(t, e, n, i, u) {
    var s = i;
    if ((e & 1) === 0 && (e & 2) === 0 && i !== null)
      t: for (; ; ) {
        if (i === null) return;
        var f = i.tag;
        if (f === 3 || f === 4) {
          var m = i.stateNode.containerInfo;
          if (m === u) break;
          if (f === 4)
            for (f = i.return; f !== null; ) {
              var T = f.tag;
              if ((T === 3 || T === 4) && f.stateNode.containerInfo === u)
                return;
              f = f.return;
            }
          for (; m !== null; ) {
            if (f = xi(m), f === null) return;
            if (T = f.tag, T === 5 || T === 6 || T === 26 || T === 27) {
              i = s = f;
              continue t;
            }
            m = m.parentNode;
          }
        }
        i = i.return;
      }
    Wh(function() {
      var C = s, R = wo(n), V = [];
      t: {
        var x = Cd.get(t);
        if (x !== void 0) {
          var O = Cu, G = t;
          switch (t) {
            case "keypress":
              if (xu(n) === 0) break t;
            case "keydown":
            case "keyup":
              O = Q1;
              break;
            case "focusin":
              G = "focus", O = Yo;
              break;
            case "focusout":
              G = "blur", O = Yo;
              break;
            case "beforeblur":
            case "afterblur":
              O = Yo;
              break;
            case "click":
              if (n.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              O = ed;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              O = _1;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              O = P1;
              break;
            case Ed:
            case Ad:
            case xd:
              O = U1;
              break;
            case Md:
              O = I1;
              break;
            case "scroll":
            case "scrollend":
              O = z1;
              break;
            case "wheel":
              O = $1;
              break;
            case "copy":
            case "cut":
            case "paste":
              O = j1;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              O = id;
              break;
            case "submit":
              O = J1;
              break;
            case "toggle":
            case "beforetoggle":
              O = eS;
          }
          var F = (e & 4) !== 0, ct = !F && (t === "scroll" || t === "scrollend"), M = F ? x !== null ? x + "Capture" : null : x;
          F = [];
          for (var E = C, D; E !== null; ) {
            var _ = E;
            if (D = _.stateNode, _ = _.tag, _ !== 5 && _ !== 26 && _ !== 27 || D === null || M === null || (_ = al(E, M), _ != null && F.push(
              jl(E, _, D)
            )), ct) break;
            E = E.return;
          }
          0 < F.length && (x = new O(
            x,
            G,
            null,
            n,
            R
          ), V.push({ event: x, listeners: F }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (O = t === "mouseover" || t === "pointerover", x = t === "mouseout" || t === "pointerout", O && n !== Vo && (G = n.relatedTarget || n.fromElement) && (xi(G) || G[ta]))
            break t;
          (x || O) && (G = R.window === R ? R : (O = R.ownerDocument) ? O.defaultView || O.parentWindow : window, x ? (O = n.relatedTarget || n.toElement, x = C, O = O ? xi(O) : null, O !== null && (ct = d(O), F = O.tag, O !== ct || F !== 5 && F !== 27 && F !== 6) && (O = null)) : (x = null, O = C), x !== O && (F = ed, _ = "onMouseLeave", M = "onMouseEnter", E = "mouse", (t === "pointerout" || t === "pointerover") && (F = id, _ = "onPointerLeave", M = "onPointerEnter", E = "pointer"), ct = x == null ? G : il(x), D = O == null ? G : il(O), G = new F(
            _,
            E + "leave",
            x,
            n,
            R
          ), G.target = ct, G.relatedTarget = D, _ = null, xi(R) === C && (F = new F(
            M,
            E + "enter",
            O,
            n,
            R
          ), F.target = D, F.relatedTarget = ct, _ = F), ct = _, F = x && O ? it(
            x,
            O,
            sT
          ) : null, x !== null && $y(
            V,
            G,
            x,
            F,
            !1
          ), O !== null && ct !== null && $y(
            V,
            ct,
            O,
            F,
            !0
          )));
        }
        t: {
          if (x = C ? il(C) : window, O = x.nodeName && x.nodeName.toLowerCase(), O === "select" || O === "input" && x.type === "file")
            var K = fd;
          else if (rd(x))
            if (hd)
              K = fS;
            else {
              K = rS;
              var vt = oS;
            }
          else
            O = x.nodeName, !O || O.toLowerCase() !== "input" || x.type !== "checkbox" && x.type !== "radio" ? C && _o(C.elementType) && (K = fd) : K = cS;
          if (K && (K = K(t, C))) {
            cd(
              V,
              K,
              n,
              R
            );
            break t;
          }
          vt && vt(t, x, C);
        }
        switch (vt = C ? il(C) : window, t) {
          case "focusin":
            (rd(vt) || vt.contentEditable === "true") && (ra = vt, Jo = C, hl = null);
            break;
          case "focusout":
            hl = Jo = ra = null;
            break;
          case "mousedown":
            Fo = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Fo = !1, Td(V, n, R);
            break;
          case "selectionchange":
            if (dS) break;
          case "keydown":
          case "keyup":
            Td(V, n, R);
        }
        var W;
        if (Go)
          t: {
            switch (t) {
              case "compositionstart":
                var nt = "onCompositionStart";
                break t;
              case "compositionend":
                nt = "onCompositionEnd";
                break t;
              case "compositionupdate":
                nt = "onCompositionUpdate";
                break t;
            }
            nt = void 0;
          }
        else
          oa ? sd(t, n) && (nt = "onCompositionEnd") : t === "keydown" && n.keyCode === 229 && (nt = "onCompositionStart");
        nt && (ad && n.locale !== "ko" && (oa || nt !== "onCompositionStart" ? nt === "onCompositionEnd" && oa && (W = $h()) : (Zn = R, jo = "value" in Zn ? Zn.value : Zn.textContent, oa = !0)), vt = Os(C, nt), 0 < vt.length && (nt = new nd(
          nt,
          t,
          null,
          n,
          R
        ), V.push({ event: nt, listeners: vt }), W ? nt.data = W : (W = od(n), W !== null && (nt.data = W)))), (W = iS ? aS(t, n) : lS(t, n)) && (nt = Os(C, "onBeforeInput"), 0 < nt.length && (vt = new nd(
          "onBeforeInput",
          "beforeinput",
          null,
          n,
          R
        ), V.push({
          event: vt,
          listeners: nt
        }), vt.data = W)), iT(
          V,
          t,
          C,
          n,
          R
        );
      }
      Iy(V, e);
    });
  }
  function jl(t, e, n) {
    return {
      instance: t,
      listener: e,
      currentTarget: n
    };
  }
  function Os(t, e) {
    for (var n = e + "Capture", i = []; t !== null; ) {
      var u = t, s = u.stateNode;
      if (u = u.tag, u !== 5 && u !== 26 && u !== 27 || s === null || (u = al(t, n), u != null && i.unshift(
        jl(t, u, s)
      ), u = al(t, e), u != null && i.push(
        jl(t, u, s)
      )), t.tag === 3) return i;
      t = t.return;
    }
    return [];
  }
  function sT(t) {
    if (t === null) return null;
    do
      t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function $y(t, e, n, i, u) {
    for (var s = e._reactName, f = []; n !== null && n !== i; ) {
      var m = n, T = m.alternate, C = m.stateNode;
      if (m = m.tag, T !== null && T === i) break;
      m !== 5 && m !== 26 && m !== 27 || C === null || (T = C, u ? (C = al(n, s), C != null && f.unshift(
        jl(n, C, T)
      )) : u || (C = al(n, s), C != null && f.push(
        jl(n, C, T)
      ))), n = n.return;
    }
    f.length !== 0 && t.push({ event: e, listeners: f });
  }
  var oT = /\r\n?/g, rT = /\u0000|\uFFFD/g;
  function tp(t) {
    return (typeof t == "string" ? t : "" + t).replace(oT, `
`).replace(rT, "");
  }
  function ep(t, e) {
    return e = tp(e), tp(t) === e;
  }
  function Rt(t, e, n, i, u, s) {
    switch (n) {
      case "children":
        if (typeof i == "string")
          e === "body" || e === "textarea" && i === "" || la(t, i);
        else if (typeof i == "number" || typeof i == "bigint")
          e !== "body" && la(t, "" + i);
        else return;
        break;
      case "className":
        bu(t, "class", i);
        break;
      case "tabIndex":
        bu(t, "tabindex", i);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        bu(t, n, i);
        break;
      case "style":
        kh(t, i, s);
        return;
      case "data":
        if (e !== "object") {
          bu(t, "data", i);
          break;
        }
      case "src":
      case "href":
        if (i === "" && (e !== "a" || n !== "href")) {
          t.removeAttribute(n);
          break;
        }
        if (i == null || typeof i == "function" || typeof i == "symbol" || typeof i == "boolean") {
          t.removeAttribute(n);
          break;
        }
        i = Eu(i), t.setAttribute(n, i);
        break;
      case "action":
      case "formAction":
        if (typeof i == "function") {
          t.setAttribute(
            n,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof s == "function" && (n === "formAction" ? (e !== "input" && Rt(t, e, "name", u.name, u, null), Rt(
            t,
            e,
            "formEncType",
            u.formEncType,
            u,
            null
          ), Rt(
            t,
            e,
            "formMethod",
            u.formMethod,
            u,
            null
          ), Rt(
            t,
            e,
            "formTarget",
            u.formTarget,
            u,
            null
          )) : (Rt(t, e, "encType", u.encType, u, null), Rt(t, e, "method", u.method, u, null), Rt(t, e, "target", u.target, u, null)));
        if (i == null || typeof i == "symbol" || typeof i == "boolean") {
          t.removeAttribute(n);
          break;
        }
        i = Eu(i), t.setAttribute(n, i);
        break;
      case "onClick":
        i != null && (t.onclick = rn);
        return;
      case "onScroll":
        i != null && pt("scroll", t);
        return;
      case "onScrollEnd":
        i != null && pt("scrollend", t);
        return;
      case "dangerouslySetInnerHTML":
        if (i != null) {
          if (typeof i != "object" || !("__html" in i))
            throw Error(r(61));
          if (n = i.__html, n != null) {
            if (u.children != null) throw Error(r(60));
            s?.__html !== n && (t.innerHTML = n);
          }
        }
        break;
      case "multiple":
        t.multiple = i && typeof i != "function" && typeof i != "symbol";
        break;
      case "muted":
        t.muted = i && typeof i != "function" && typeof i != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (i == null || typeof i == "function" || typeof i == "boolean" || typeof i == "symbol") {
          t.removeAttribute("xlink:href");
          break;
        }
        n = Eu(i), t.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          n
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        i != null && typeof i != "function" && typeof i != "symbol" ? t.setAttribute(n, i) : t.removeAttribute(n);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "credentialless":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        i && typeof i != "function" && typeof i != "symbol" ? t.setAttribute(n, "") : t.removeAttribute(n);
        break;
      case "capture":
      case "download":
        i === !0 ? t.setAttribute(n, "") : i !== !1 && i != null && typeof i != "function" && typeof i != "symbol" ? t.setAttribute(n, i) : t.removeAttribute(n);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        i != null && typeof i != "function" && typeof i != "symbol" && !isNaN(i) && 1 <= i ? t.setAttribute(n, i) : t.removeAttribute(n);
        break;
      case "rowSpan":
      case "start":
        i == null || typeof i == "function" || typeof i == "symbol" || isNaN(i) ? t.removeAttribute(n) : t.setAttribute(n, i);
        break;
      case "popover":
        pt("beforetoggle", t), pt("toggle", t), Tu(t, "popover", i);
        break;
      case "xlinkActuate":
        Dn(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          i
        );
        break;
      case "xlinkArcrole":
        Dn(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          i
        );
        break;
      case "xlinkRole":
        Dn(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          i
        );
        break;
      case "xlinkShow":
        Dn(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          i
        );
        break;
      case "xlinkTitle":
        Dn(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          i
        );
        break;
      case "xlinkType":
        Dn(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          i
        );
        break;
      case "xmlBase":
        Dn(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          i
        );
        break;
      case "xmlLang":
        Dn(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          i
        );
        break;
      case "xmlSpace":
        Dn(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          i
        );
        break;
      case "is":
        Tu(t, "is", i);
        break;
      case "innerText":
      case "textContent":
        return;
      default:
        if (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N")
          n = O1.get(n) || n, Tu(t, n, i);
        else return;
    }
    Et = !0;
  }
  function zc(t, e, n, i, u, s) {
    switch (n) {
      case "style":
        kh(t, i, s);
        return;
      case "dangerouslySetInnerHTML":
        if (i != null) {
          if (typeof i != "object" || !("__html" in i))
            throw Error(r(61));
          if (n = i.__html, n != null) {
            if (u.children != null) throw Error(r(60));
            s?.__html !== n && (t.innerHTML = n);
          }
        }
        break;
      case "children":
        if (typeof i == "string") la(t, i);
        else if (typeof i == "number" || typeof i == "bigint")
          la(t, "" + i);
        else return;
        break;
      case "onScroll":
        i != null && pt("scroll", t);
        return;
      case "onScrollEnd":
        i != null && pt("scrollend", t);
        return;
      case "onClick":
        i != null && (t.onclick = rn);
        return;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        return;
      case "innerText":
      case "textContent":
        return;
      default:
        if (!Yh.hasOwnProperty(n))
          t: {
            if (n[0] === "o" && n[1] === "n" && (u = n.endsWith("Capture"), s = n.slice(2, u ? n.length - 7 : void 0), e = t[be] || null, e = e != null ? e[n] : null, typeof e == "function" && t.removeEventListener(s, e, u), typeof i == "function")) {
              typeof e != "function" && e !== null && (n in t ? t[n] = null : t.hasAttribute(n) && t.removeAttribute(n)), t.addEventListener(s, i, u);
              break t;
            }
            Et = !0, n in t ? t[n] = i : i === !0 ? t.setAttribute(n, "") : Tu(t, n, i);
          }
        return;
    }
    Et = !0;
  }
  function ce(t, e, n) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        pt("error", t), pt("load", t);
        var i = !1, u = !1, s;
        for (s in n)
          if (n.hasOwnProperty(s)) {
            var f = n[s];
            if (f != null)
              switch (s) {
                case "src":
                  i = !0;
                  break;
                case "srcSet":
                  u = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(r(137, e));
                default:
                  Rt(t, e, s, f, n, null);
              }
          }
        u && Rt(t, e, "srcSet", n.srcSet, n, null), i && Rt(t, e, "src", n.src, n, null);
        return;
      case "input":
        pt("invalid", t);
        var m = s = f = u = null, T = null, C = null;
        for (i in n)
          if (n.hasOwnProperty(i)) {
            var R = n[i];
            if (R != null)
              switch (i) {
                case "name":
                  u = R;
                  break;
                case "type":
                  f = R;
                  break;
                case "checked":
                  T = R;
                  break;
                case "defaultChecked":
                  C = R;
                  break;
                case "value":
                  s = R;
                  break;
                case "defaultValue":
                  m = R;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (R != null)
                    throw Error(r(137, e));
                  break;
                default:
                  Rt(t, e, i, R, n, null);
              }
          }
        Kh(
          t,
          s,
          m,
          T,
          C,
          f,
          u,
          !1
        );
        return;
      case "select":
        pt("invalid", t), i = f = s = null;
        for (u in n)
          if (n.hasOwnProperty(u) && (m = n[u], m != null))
            switch (u) {
              case "value":
                s = m;
                break;
              case "defaultValue":
                f = m;
                break;
              case "multiple":
                i = m;
              default:
                Rt(t, e, u, m, n, null);
            }
        e = s, n = f, t.multiple = !!i, e != null ? aa(t, !!i, e, !1) : n != null && aa(t, !!i, n, !0);
        return;
      case "textarea":
        pt("invalid", t), s = u = i = null;
        for (f in n)
          if (n.hasOwnProperty(f) && (m = n[f], m != null))
            switch (f) {
              case "value":
                i = m;
                break;
              case "defaultValue":
                u = m;
                break;
              case "children":
                s = m;
                break;
              case "dangerouslySetInnerHTML":
                if (m != null) throw Error(r(91));
                break;
              default:
                Rt(t, e, f, m, n, null);
            }
        Fh(t, i, u, s);
        return;
      case "option":
        for (T in n)
          if (n.hasOwnProperty(T) && (i = n[T], i != null))
            switch (T) {
              case "selected":
                t.selected = i && typeof i != "function" && typeof i != "symbol";
                break;
              default:
                Rt(t, e, T, i, n, null);
            }
        return;
      case "dialog":
        pt("beforetoggle", t), pt("toggle", t), pt("cancel", t), pt("close", t);
        break;
      case "iframe":
      case "object":
        pt("load", t);
        break;
      case "video":
      case "audio":
        for (i = 0; i < Bl.length; i++)
          pt(Bl[i], t);
        break;
      case "image":
        pt("error", t), pt("load", t);
        break;
      case "details":
        pt("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        pt("error", t), pt("load", t);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (C in n)
          if (n.hasOwnProperty(C) && (i = n[C], i != null))
            switch (C) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(r(137, e));
              default:
                Rt(t, e, C, i, n, null);
            }
        return;
      default:
        if (_o(e)) {
          for (R in n)
            n.hasOwnProperty(R) && (i = n[R], i !== void 0 && zc(
              t,
              e,
              R,
              i,
              n,
              void 0
            ));
          return;
        }
    }
    for (m in n)
      n.hasOwnProperty(m) && (i = n[m], i != null && Rt(t, e, m, i, n, null));
  }
  var cT = {};
  function fT(t, e, n, i) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var u = null, s = null, f = null, m = null, T = null, C = null, R = null;
        for (O in n) {
          var V = n[O];
          if (n.hasOwnProperty(O) && V != null)
            switch (O) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                T = V;
              default:
                i.hasOwnProperty(O) || Rt(t, e, O, null, i, V);
            }
        }
        for (var x in i) {
          var O = i[x];
          if (V = n[x], i.hasOwnProperty(x) && (O != null || V != null))
            switch (x) {
              case "type":
                O !== V && (Et = !0), s = O;
                break;
              case "name":
                O !== V && (Et = !0), u = O;
                break;
              case "checked":
                O !== V && (Et = !0), C = O;
                break;
              case "defaultChecked":
                O !== V && (Et = !0), R = O;
                break;
              case "value":
                O !== V && (Et = !0), f = O;
                break;
              case "defaultValue":
                O !== V && (Et = !0), m = O;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (O != null)
                  throw Error(r(137, e));
                break;
              default:
                O !== V && Rt(
                  t,
                  e,
                  x,
                  O,
                  i,
                  V
                );
            }
        }
        zo(
          t,
          f,
          m,
          T,
          C,
          R,
          s,
          u
        );
        return;
      case "select":
        O = f = m = x = null;
        for (s in n)
          if (T = n[s], n.hasOwnProperty(s) && T != null)
            switch (s) {
              case "value":
                break;
              case "multiple":
                O = T;
              default:
                i.hasOwnProperty(s) || Rt(
                  t,
                  e,
                  s,
                  null,
                  i,
                  T
                );
            }
        for (u in i)
          if (s = i[u], T = n[u], i.hasOwnProperty(u) && (s != null || T != null))
            switch (u) {
              case "value":
                s !== T && (Et = !0), x = s;
                break;
              case "defaultValue":
                s !== T && (Et = !0), m = s;
                break;
              case "multiple":
                s !== T && (Et = !0), f = s;
              default:
                s !== T && Rt(
                  t,
                  e,
                  u,
                  s,
                  i,
                  T
                );
            }
        e = m, n = f, i = O, x != null ? aa(t, !!n, x, !1) : !!i != !!n && (e != null ? aa(t, !!n, e, !0) : aa(t, !!n, n ? [] : "", !1));
        return;
      case "textarea":
        O = x = null;
        for (m in n)
          if (u = n[m], n.hasOwnProperty(m) && u != null && !i.hasOwnProperty(m))
            switch (m) {
              case "value":
                break;
              case "children":
                break;
              default:
                Rt(t, e, m, null, i, u);
            }
        for (f in i)
          if (u = i[f], s = n[f], i.hasOwnProperty(f) && (u != null || s != null))
            switch (f) {
              case "value":
                u !== s && (Et = !0), x = u;
                break;
              case "defaultValue":
                u !== s && (Et = !0), O = u;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (u != null) throw Error(r(91));
                break;
              default:
                u !== s && Rt(t, e, f, u, i, s);
            }
        Jh(t, x, O);
        return;
      case "option":
        for (var G in n)
          if (x = n[G], n.hasOwnProperty(G) && x != null && !i.hasOwnProperty(G))
            switch (G) {
              case "selected":
                t.selected = !1;
                break;
              default:
                Rt(
                  t,
                  e,
                  G,
                  null,
                  i,
                  x
                );
            }
        for (T in i)
          if (x = i[T], O = n[T], i.hasOwnProperty(T) && x !== O && (x != null || O != null))
            switch (T) {
              case "selected":
                x !== O && (Et = !0), t.selected = x && typeof x != "function" && typeof x != "symbol";
                break;
              default:
                Rt(
                  t,
                  e,
                  T,
                  x,
                  i,
                  O
                );
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var F in n)
          x = n[F], n.hasOwnProperty(F) && x != null && !i.hasOwnProperty(F) && Rt(t, e, F, null, i, x);
        for (C in i)
          if (x = i[C], O = n[C], i.hasOwnProperty(C) && x !== O && (x != null || O != null))
            switch (C) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (x != null)
                  throw Error(r(137, e));
                break;
              default:
                Rt(
                  t,
                  e,
                  C,
                  x,
                  i,
                  O
                );
            }
        return;
      default:
        if (_o(e)) {
          for (var ct in n)
            x = n[ct], n.hasOwnProperty(ct) && x !== void 0 && !i.hasOwnProperty(ct) && zc(
              t,
              e,
              ct,
              void 0,
              i,
              x
            );
          for (R in i)
            x = i[R], O = n[R], !i.hasOwnProperty(R) || x === O || x === void 0 && O === void 0 || zc(
              t,
              e,
              R,
              x,
              i,
              O
            );
          return;
        }
    }
    for (var M in n)
      x = n[M], n.hasOwnProperty(M) && x != null && !i.hasOwnProperty(M) && Rt(t, e, M, null, i, x);
    for (V in i)
      x = i[V], O = n[V], !i.hasOwnProperty(V) || x === O || x == null && O == null || Rt(t, e, V, x, i, O);
  }
  function np(t) {
    switch (t) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function hT() {
    if (typeof performance.getEntriesByType == "function") {
      for (var t = 0, e = 0, n = performance.getEntriesByType("resource"), i = 0; i < n.length; i++) {
        var u = n[i], s = u.transferSize, f = u.initiatorType, m = u.duration;
        if (s && m && np(f)) {
          for (f = 0, m = u.responseEnd, i += 1; i < n.length; i++) {
            var T = n[i], C = T.startTime;
            if (C > m) break;
            var R = T.transferSize, V = T.initiatorType;
            R && np(V) && (T = T.responseEnd, f += R * (T < m ? 1 : (m - C) / (T - C)));
          }
          if (--i, e += 8 * (s + f) / (u.duration / 1e3), t++, 10 < t) break;
        }
      }
      if (0 < t) return e / t / 1e6;
    }
    return navigator.connection && (t = navigator.connection.downlink, typeof t == "number") ? t : 5;
  }
  var Nc = null, _c = null;
  function Hl(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function ip(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function ap(t, e) {
    if (t === 0)
      switch (e) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && e === "foreignObject" ? 0 : t;
  }
  function lp(t, e, n, i) {
    return n = Hl(
      n
    ).createElement(t), n[le] = i, n[be] = e, ce(n, t, e), te(n), n;
  }
  function Vc(t, e) {
    return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null;
  }
  var wc = null;
  function dT() {
    var t = window.event;
    return t && t.type === "popstate" ? t === wc ? !1 : (wc = t, !0) : (wc = null, !1);
  }
  var Uc = typeof setTimeout == "function" ? setTimeout : void 0, mT = typeof clearTimeout == "function" ? clearTimeout : void 0, up = typeof Promise == "function" ? Promise : void 0, sp = typeof requestAnimationFrame == "function" ? requestAnimationFrame : Uc, yT = typeof queueMicrotask == "function" ? queueMicrotask : typeof up < "u" ? function(t) {
    return up.resolve(null).then(t).catch(pT);
  } : Uc;
  function pT(t) {
    setTimeout(function() {
      throw t;
    });
  }
  function fi(t) {
    return t === "head";
  }
  function op(t, e) {
    var n = e, i = 0;
    do {
      var u = n.nextSibling;
      if (t.removeChild(n), u && u.nodeType === 8)
        if (n = u.data, n === "/$" || n === "/&") {
          if (i === 0) {
            t.removeChild(u), Ga(e);
            return;
          }
          i--;
        } else if (n === "$" || n === "$?" || n === "$~" || n === "$!" || n === "&")
          i++;
        else if (n === "html")
          Xc(
            t.ownerDocument.documentElement
          );
        else if (n === "head") {
          n = t.ownerDocument.head, Xc(n);
          for (var s = n.firstChild; s; ) {
            var f = s.nextSibling, m = s.nodeName;
            s[nl] || m === "SCRIPT" || m === "STYLE" || m === "LINK" && s.rel.toLowerCase() === "stylesheet" || n.removeChild(s), s = f;
          }
        } else
          n === "body" && Xc(t.ownerDocument.body);
      n = u;
    } while (n);
    Ga(e);
  }
  function rp(t, e) {
    var n = t;
    t = 0;
    do {
      var i = n.nextSibling;
      if (n.nodeType === 1 ? e ? (n._stashedDisplay = n.style.display, n.style.display = "none") : (n.style.display = n._stashedDisplay || "", n.getAttribute("style") === "" && n.removeAttribute("style")) : n.nodeType === 3 && (e ? (n._stashedText = n.nodeValue, n.nodeValue = "") : n.nodeValue = n._stashedText || ""), i && i.nodeType === 8)
        if (n = i.data, n === "/$") {
          if (t === 0) break;
          t--;
        } else
          n !== "$" && n !== "$?" && n !== "$~" && n !== "$!" || t++;
      n = i;
    } while (n);
  }
  function cp(t, e, n) {
    if (e = CSS.escape(e) !== e ? "r-" + btoa(e).replace(/=/g, "") : e, t.style.viewTransitionName = e, n != null && (t.style.viewTransitionClass = n), n = getComputedStyle(t), n.display === "inline") {
      if (e = t.getClientRects(), e.length === 1) var i = 1;
      else
        for (var u = i = 0; u < e.length; u++) {
          var s = e[u];
          0 < s.width && 0 < s.height && i++;
        }
      i === 1 && (t = t.style, t.display = e.length === 1 ? "inline-block" : "block", t.marginTop = "-" + n.paddingTop, t.marginBottom = "-" + n.paddingBottom);
    }
  }
  function fp(t, e) {
    t = t.style, e = e.style;
    var n = e != null ? e.hasOwnProperty("viewTransitionName") ? e.viewTransitionName : e.hasOwnProperty("view-transition-name") ? e["view-transition-name"] : null : null;
    t.viewTransitionName = n == null || typeof n == "boolean" ? "" : ("" + n).trim(), n = e != null ? e.hasOwnProperty("viewTransitionClass") ? e.viewTransitionClass : e.hasOwnProperty("view-transition-class") ? e["view-transition-class"] : null : null, t.viewTransitionClass = n == null || typeof n == "boolean" ? "" : ("" + n).trim(), t.display === "inline-block" && (e == null ? t.display = t.margin = "" : (n = e.display, t.display = n == null || typeof n == "boolean" ? "" : n, n = e.margin, n != null ? t.margin = n : (n = e.hasOwnProperty("marginTop") ? e.marginTop : e["margin-top"], t.marginTop = n == null || typeof n == "boolean" ? "" : n, e = e.hasOwnProperty("marginBottom") ? e.marginBottom : e["margin-bottom"], t.marginBottom = e == null || typeof e == "boolean" ? "" : e)));
  }
  function gT(t, e, n) {
    return n = n.ownerDocument.defaultView, {
      rect: t,
      abs: e.position === "absolute" || e.position === "fixed",
      clip: e.clipPath !== "none" || e.overflow !== "visible" || e.filter !== "none" || e.mask !== "none" || e.mask !== "none" || e.borderRadius !== "0px",
      view: 0 <= t.bottom && 0 <= t.right && t.top <= n.innerHeight && t.left <= n.innerWidth
    };
  }
  function Bc(t) {
    var e = t.getBoundingClientRect(), n = getComputedStyle(t);
    return gT(e, n, t);
  }
  function vT(t) {
    return t.documentElement.clientHeight;
  }
  function ST(t) {
    this.addEventListener("load", t), this.addEventListener("error", t);
  }
  function TT(t, e, n, i, u, s, f, m, T) {
    var C = e.nodeType === 9 ? e : e.ownerDocument;
    try {
      var R = C.startViewTransition({
        update: function() {
          var x = C.defaultView, O = x.navigation && x.navigation.transition, G = C.fonts.status;
          i();
          var F = [];
          if (G === "loaded" && (vT(C), C.fonts.status === "loading" && F.push(C.fonts.ready)), G = F.length, t !== null)
            for (var ct = t.suspenseyImages, M = 0, E = 0; E < ct.length; E++) {
              var D = ct[E];
              if (!D.complete) {
                var _ = D.getBoundingClientRect();
                if (0 < _.bottom && 0 < _.right && _.top < x.innerHeight && _.left < x.innerWidth) {
                  if (M += _p(D), M > Ns) {
                    F.length = G;
                    break;
                  }
                  D = new Promise(
                    ST.bind(D)
                  ), F.push(D);
                }
              }
            }
          if (0 < F.length)
            return x = Promise.race([
              Promise.all(F),
              new Promise(function(K) {
                return setTimeout(K, 500);
              })
            ]).then(u, u), (O ? Promise.allSettled([O.finished, x]) : x).then(s, s);
          if (u(), O)
            return O.finished.then(
              s,
              s
            );
          s();
        },
        types: n
      });
      C.__reactViewTransition = R;
      var V = [];
      return R.ready.then(
        function() {
          for (var x = C.documentElement.getAnimations({
            subtree: !0
          }), O = 0; O < x.length; O++) {
            var G = x[O], F = G.effect, ct = F.pseudoElement;
            if (ct != null && ct.startsWith("::view-transition")) {
              V.push(G), G = F.getKeyframes();
              for (var M = ct = void 0, E = !0, D = 0; D < G.length; D++) {
                var _ = G[D], K = _.width;
                if (ct === void 0) ct = K;
                else if (ct !== K) {
                  E = !1;
                  break;
                }
                if (K = _.height, M === void 0) M = K;
                else if (M !== K) {
                  E = !1;
                  break;
                }
                delete _.width, delete _.height, _.transform === "none" && delete _.transform;
              }
              E && ct !== void 0 && M !== void 0 && (F.setKeyframes(G), E = getComputedStyle(
                F.target,
                F.pseudoElement
              ), E.width !== ct || E.height !== M) && (E = G[0], E.width = ct, E.height = M, E = G[G.length - 1], E.width = ct, E.height = M, F.setKeyframes(G));
            }
          }
          f();
        },
        function(x) {
          C.__reactViewTransition === R && (C.__reactViewTransition = null);
          try {
            if (typeof x == "object" && x !== null)
              switch (x.name) {
                case "InvalidStateError":
                  (x.message === "View transition was skipped because document visibility state is hidden." || x.message === "Skipping view transition because document visibility state has become hidden." || x.message === "Skipping view transition because viewport size changed." || x.message === "Transition was aborted because of invalid state") && (x = null);
              }
            x !== null && T(x);
          } finally {
            i(), u(), f();
          }
        }
      ), R.finished.finally(function() {
        for (var x = 0; x < V.length; x++)
          V[x].cancel();
        C.__reactViewTransition === R && (C.__reactViewTransition = null), m();
      }), R;
    } catch {
      return i(), u(), f(), null;
    }
  }
  function Zi(t, e) {
    this._scope = document.documentElement, this._selector = "::view-transition-" + t + "(" + e + ")";
  }
  Zi.prototype.animate = function(t, e) {
    return e = typeof e == "number" ? { duration: e } : Z({}, e), e.pseudoElement = this._selector, this._scope.animate(t, e);
  }, Zi.prototype.getAnimations = function() {
    for (var t = this._scope, e = this._selector, n = t.getAnimations({ subtree: !0 }), i = [], u = 0; u < n.length; u++) {
      var s = n[u].effect;
      s !== null && s.target === t && s.pseudoElement === e && i.push(n[u]);
    }
    return i;
  }, Zi.prototype.getComputedStyle = function() {
    return getComputedStyle(this._scope, this._selector);
  };
  function hp(t) {
    return {
      name: t,
      group: new Zi("group", t),
      imagePair: new Zi("image-pair", t),
      old: new Zi("old", t),
      new: new Zi("new", t)
    };
  }
  function He(t) {
    this._fragmentFiber = t, this._observers = this._eventListeners = null;
  }
  He.prototype.addEventListener = function(t, e, n) {
    var i = null, u = null;
    if (!(n != null && typeof n != "boolean" && (i = n.signal || null, i !== null && i.aborted))) {
      this._eventListeners === null && (this._eventListeners = []);
      var s = this._eventListeners;
      if (mp(s, t, e, n) === -1) {
        var f = this, m = e;
        n != null && typeof n != "boolean" && n.once === !0 && (m = function(T) {
          f.removeEventListener(
            t,
            e,
            n
          ), typeof e == "function" ? e.call(this, T) : e.handleEvent(T);
        }), i !== null && (u = f.removeEventListener.bind(
          f,
          t,
          e,
          n
        ), i.addEventListener("abort", u, { once: !0 }), u = i.removeEventListener.bind(i, "abort", u)), i = Ba(n), s.push({
          type: t,
          listener: e,
          optionsOrUseCapture: n,
          attachedListener: m,
          cleanup: u
        }), p(
          this._fragmentFiber.child,
          !1,
          bT,
          t,
          m,
          i
        );
      }
      this._eventListeners = s;
    }
  };
  function bT(t, e, n, i) {
    return w(t).addEventListener(
      e,
      n,
      i
    ), !1;
  }
  He.prototype.removeEventListener = function(t, e, n) {
    var i = this._eventListeners;
    if (i !== null && (e = mp(
      i,
      t,
      e,
      n
    ), e !== -1)) {
      var u = i[e];
      n = u.attachedListener;
      var s = u.cleanup;
      u = Ba(u.optionsOrUseCapture), p(
        this._fragmentFiber.child,
        !1,
        ET,
        t,
        n,
        u
      ), i.splice(e, 1), s !== null && s();
    }
  };
  function ET(t, e, n, i) {
    return w(t).removeEventListener(
      e,
      n,
      i
    ), !1;
  }
  function Ba(t) {
    return t != null && typeof t != "boolean" && (t.once === !0 || t.signal instanceof AbortSignal) ? { capture: t.capture, passive: t.passive } : t;
  }
  function dp(t) {
    return t == null ? "c=0" : typeof t == "boolean" ? "c=" + (t ? "1" : "0") : "c=" + (t.capture ? "1" : "0");
  }
  function mp(t, e, n, i) {
    if (t.length === 0) return -1;
    i = dp(i);
    for (var u = 0; u < t.length; u++) {
      var s = t[u];
      if (s.type === e && s.listener === n && dp(s.optionsOrUseCapture) === i)
        return u;
    }
    return -1;
  }
  He.prototype.dispatchEvent = function(t) {
    var e = b(
      this._fragmentFiber
    );
    if (e === null) return !0;
    e = w(e);
    var n = this._eventListeners;
    if (n !== null && 0 < n.length || !t.bubbles) {
      var i = e.nodeType === 9 ? e.createComment("") : document.createTextNode("");
      if (n)
        for (var u = 0; u < n.length; u++) {
          var s = n[u];
          i.addEventListener(
            s.type,
            s.attachedListener,
            Ba(s.optionsOrUseCapture)
          );
        }
      if (e.appendChild(i), t = i.dispatchEvent(t), n)
        for (u = 0; u < n.length; u++)
          s = n[u], i.removeEventListener(
            s.type,
            s.attachedListener,
            Ba(s.optionsOrUseCapture)
          );
      return e.removeChild(i), t;
    }
    return e.dispatchEvent(t);
  }, He.prototype.focus = function(t) {
    p(
      this._fragmentFiber.child,
      !0,
      yp,
      t,
      void 0,
      void 0
    );
  };
  function yp(t, e) {
    return t.tag === 6 ? !1 : (t = w(t), wT(t, e));
  }
  He.prototype.focusLast = function(t) {
    var e = [];
    p(
      this._fragmentFiber.child,
      !0,
      jc,
      e,
      void 0,
      void 0
    );
    for (var n = e.length - 1; 0 <= n && !yp(e[n], t); n--) ;
  };
  function jc(t, e) {
    return e.push(t), !1;
  }
  He.prototype.blur = function() {
    var t = b(
      this._fragmentFiber
    );
    t !== null && (t = w(t), t = Hl(t).activeElement, t !== null && p(
      this._fragmentFiber.child,
      !1,
      AT,
      t,
      void 0,
      void 0
    ));
  };
  function AT(t, e) {
    return t.tag === 6 ? !1 : (t = w(t), t === e || t.contains(e) ? (e.blur(), !0) : !1);
  }
  He.prototype.observeUsing = function(t) {
    this._observers === null && (this._observers = /* @__PURE__ */ new Set()), this._observers.add(t), p(
      this._fragmentFiber.child,
      !1,
      xT,
      t,
      void 0,
      void 0
    );
  };
  function xT(t, e) {
    return t.tag === 6 || (t = w(t), e.observe(t)), !1;
  }
  He.prototype.unobserveUsing = function(t) {
    var e = this._observers;
    if (e !== null && e.has(t)) {
      e.delete(t), p(
        this._fragmentFiber.child,
        !1,
        MT,
        t,
        void 0,
        void 0
      );
      for (var n = e = 0; n < nn.length; n++) {
        var i = nn[n];
        i.fragmentInstance === this && i.observer === t ? t.unobserve(i.instance) : nn[e++] = i;
      }
      nn.length = e;
    }
  };
  function MT(t, e) {
    return t.tag === 6 || (t = w(t), e.unobserve(t)), !1;
  }
  var nn = [], Hc = !1;
  function CT(t, e, n) {
    nn.push({
      fragmentInstance: t,
      observer: e,
      instance: n
    }), Hc || (Hc = !0, UT(function() {
      Hc = !1;
      var i = nn;
      nn = [];
      for (var u = 0; u < i.length; u++) {
        var s = i[u];
        s.observer.unobserve(s.instance);
      }
    }));
  }
  He.prototype.getClientRects = function() {
    var t = [];
    return p(
      this._fragmentFiber.child,
      !1,
      DT,
      t,
      void 0,
      void 0
    ), t;
  };
  function DT(t, e) {
    if (t.tag === 6) {
      t = t.stateNode;
      var n = t.ownerDocument.createRange();
      n.selectNodeContents(t), e.push.apply(e, n.getClientRects());
    } else
      t = w(t), e.push.apply(e, t.getClientRects());
    return !1;
  }
  He.prototype.getRootNode = function(t) {
    var e = b(
      this._fragmentFiber
    );
    return e === null ? this : w(e).getRootNode(t);
  }, He.prototype.compareDocumentPosition = function(t) {
    var e = b(
      this._fragmentFiber
    );
    if (e === null) return Node.DOCUMENT_POSITION_DISCONNECTED;
    var n = [];
    p(
      this._fragmentFiber.child,
      !1,
      jc,
      n,
      void 0,
      void 0
    );
    var i = w(e);
    if (n.length === 0) {
      if (n = i, N(this._fragmentFiber)) {
        t: {
          for (e = this._fragmentFiber.return; e !== null; ) {
            if (e.tag === 4) {
              e = e.stateNode.containerInfo;
              break t;
            }
            if (e.tag === 3 || e.tag === 5 || e.tag === 27)
              break;
            e = e.return;
          }
          e = null;
        }
        e != null && (n = e);
      }
      e = this._fragmentFiber;
      var u = i = n.compareDocumentPosition(t);
      return n === t ? u = Node.DOCUMENT_POSITION_CONTAINS : i & Node.DOCUMENT_POSITION_CONTAINED_BY && (n = z(e)[1], n === null ? u = Node.DOCUMENT_POSITION_PRECEDING : (t = w(n).compareDocumentPosition(
        t
      ), u = t === 0 || t & Node.DOCUMENT_POSITION_FOLLOWING ? Node.DOCUMENT_POSITION_FOLLOWING : Node.DOCUMENT_POSITION_PRECEDING)), u |= Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
    }
    e = w(n[0]), u = w(n[n.length - 1]);
    var s = N(this._fragmentFiber) ? e.parentElement : i;
    if (s == null)
      return Node.DOCUMENT_POSITION_DISCONNECTED;
    i = s.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_CONTAINED_BY, s = s.compareDocumentPosition(u) & Node.DOCUMENT_POSITION_CONTAINED_BY;
    var f = e.compareDocumentPosition(t), m = u.compareDocumentPosition(t), T = f & Node.DOCUMENT_POSITION_CONTAINED_BY || m & Node.DOCUMENT_POSITION_CONTAINED_BY;
    return m = i && s && f & Node.DOCUMENT_POSITION_FOLLOWING && m & Node.DOCUMENT_POSITION_PRECEDING, e = i && e === t || s && u === t || T || m ? Node.DOCUMENT_POSITION_CONTAINED_BY : !i && e === t || !s && u === t ? Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC : f, e & Node.DOCUMENT_POSITION_DISCONNECTED || e & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC || OT(
      e,
      this._fragmentFiber,
      n[0],
      n[n.length - 1],
      t
    ) ? e : Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
  };
  function OT(t, e, n, i, u) {
    var s = xi(u);
    if (t & Node.DOCUMENT_POSITION_CONTAINED_BY) {
      if (n = !!s)
        t: {
          for (; s !== null; ) {
            if (s.tag === 7 && (s === e || s.alternate === e)) {
              n = !0;
              break t;
            }
            s = s.return;
          }
          n = !1;
        }
      return n;
    }
    if (t & Node.DOCUMENT_POSITION_CONTAINS) {
      if (s === null)
        return s = u.ownerDocument, u === s || u === s.documentElement || u === s.body;
      t: {
        for (s = e, e = b(e); s !== null; ) {
          if (!(s.tag !== 5 && s.tag !== 3 && s.tag !== 27 || s !== e && s.alternate !== e)) {
            s = !0;
            break t;
          }
          s = s.return;
        }
        s = !1;
      }
      return s;
    }
    return t & Node.DOCUMENT_POSITION_PRECEDING ? ((e = !!s) && !(e = s === n) && (e = it(
      n,
      s,
      et
    ), e === null ? e = !1 : (p(
      e,
      !0,
      q,
      s,
      n
    ), s = B, B = null, e = s !== null)), e) : t & Node.DOCUMENT_POSITION_FOLLOWING ? ((e = !!s) && !(e = s === i) && (e = it(
      i,
      s,
      et
    ), e === null ? e = !1 : (p(
      e,
      !0,
      X,
      s,
      i
    ), s = B, Y = B = null, e = s !== null)), e) : !1;
  }
  function pp(t, e) {
    var n = t.ownerDocument.createRange();
    n.selectNodeContents(t), t = n.getBoundingClientRect(), window.scrollTo(
      window.scrollX + t.left,
      e ? window.scrollY + t.top : window.scrollY + t.bottom - window.innerHeight
    );
  }
  He.prototype.scrollIntoView = function(t) {
    if (typeof t == "object") throw Error(r(566));
    var e = [];
    p(
      this._fragmentFiber.child,
      !1,
      jc,
      e,
      void 0,
      void 0
    );
    var n = t !== !1;
    if (e.length === 0) {
      var i = z(
        this._fragmentFiber
      );
      if (i = n ? i[1] || i[0] || b(this._fragmentFiber) : i[0] || i[1], i === null) return;
      if (i.tag === 6) {
        t = w(i), pp(t, n);
        return;
      }
      if (i = w(i), i.nodeType !== 9) {
        if (i.nodeType === 11) {
          n = "host" in i ? i.host : null, n !== null && n.scrollIntoView(t);
          return;
        }
        i.scrollIntoView(t);
      }
    }
    for (i = n ? e.length - 1 : 0; i !== (n ? -1 : e.length); ) {
      var u = e[i];
      u.tag === 6 ? (u = w(u), pp(u, n)) : w(u).scrollIntoView(t), i += n ? -1 : 1;
    }
  };
  function RT(t, e) {
    return t = w(t), gp(t, e), !1;
  }
  function gp(t, e) {
    t.reactFragments == null && (t.reactFragments = /* @__PURE__ */ new Set()), t.reactFragments.add(e);
  }
  function vp(t, e) {
    var n = e._eventListeners;
    if (n !== null)
      for (var i = 0; i < n.length; i++) {
        var u = n[i];
        t.addEventListener(
          u.type,
          u.attachedListener,
          Ba(u.optionsOrUseCapture)
        );
      }
    t.nodeType !== 3 && (n = e._observers, n !== null && n.forEach(function(s) {
      for (var f = 0, m = 0; m < nn.length; m++) {
        var T = nn[m];
        (T.fragmentInstance !== e || T.observer !== s || T.instance !== t) && (nn[f++] = T);
      }
      nn.length = f, s.observe(t);
    }), gp(t, e));
  }
  function zT(t, e) {
    var n = e._eventListeners;
    if (n !== null)
      for (var i = 0; i < n.length; i++) {
        var u = n[i];
        t.removeEventListener(
          u.type,
          u.attachedListener,
          Ba(u.optionsOrUseCapture)
        );
      }
    t.nodeType !== 3 && (n = e._observers, n !== null && n.forEach(function(s) {
      typeof s.rootMargin == "string" ? CT(
        e,
        s,
        t
      ) : s.unobserve(t);
    }), t.reactFragments != null && t.reactFragments.delete(e));
  }
  function Lc(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var n = e;
      switch (e = e.nextSibling, n.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Lc(n), Su(n);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (n.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(n);
    }
  }
  function NT(t, e, n, i) {
    for (; t.nodeType === 1; ) {
      var u = n;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!i && (t.nodeName !== "INPUT" || t.type !== "hidden"))
          break;
      } else if (i) {
        if (!t[nl])
          switch (e) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (s = t.getAttribute("rel"), s === "stylesheet" && t.hasAttribute("data-precedence"))
                break;
              if (s !== u.rel || t.getAttribute("href") !== (u.href == null || u.href === "" ? null : u.href) || t.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin) || t.getAttribute("title") !== (u.title == null ? null : u.title))
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (s = t.getAttribute("src"), (s !== (u.src == null ? null : u.src) || t.getAttribute("type") !== (u.type == null ? null : u.type) || t.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin)) && s && t.hasAttribute("async") && !t.hasAttribute("itemprop"))
                break;
              return t;
            default:
              return t;
          }
      } else if (e === "input" && t.type === "hidden") {
        var s = u.name == null ? null : "" + u.name;
        if (u.type === "hidden" && t.getAttribute("name") === s)
          return t;
      } else return t;
      if (t = Ke(t.nextSibling), t === null) break;
    }
    return null;
  }
  function _T(t, e, n) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !n || (t = Ke(t.nextSibling), t === null)) return null;
    return t;
  }
  function Sp(t, e) {
    for (; t.nodeType !== 8; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = Ke(t.nextSibling), t === null)) return null;
    return t;
  }
  function Yc(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function qc(t) {
    return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading";
  }
  function VT(t, e) {
    var n = t.ownerDocument;
    if (t.data === "$~") t._reactRetry = e;
    else if (t.data !== "$?" || n.readyState !== "loading")
      e();
    else {
      var i = function() {
        e(), n.removeEventListener("DOMContentLoaded", i);
      };
      n.addEventListener("DOMContentLoaded", i), t._reactRetry = i;
    }
  }
  function Ke(t) {
    for (; t != null; t = t.nextSibling) {
      var e = t.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (e = t.data, e === "$" || e === "$!" || e === "$?" || e === "$~" || e === "&" || e === "F!" || e === "F")
          break;
        if (e === "/$" || e === "/&") return null;
      }
    }
    return t;
  }
  var Gc = null;
  function Tp(t) {
    t = t.nextSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var n = t.data;
        if (n === "/$" || n === "/&") {
          if (e === 0)
            return Ke(t.nextSibling);
          e--;
        } else
          n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&" || e++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function bp(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var n = t.data;
        if (n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&") {
          if (e === 0) return t;
          e--;
        } else n !== "/$" && n !== "/&" || e++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function wT(t, e) {
    function n() {
      i = !0;
    }
    if (t.ownerDocument.activeElement === t) return !0;
    var i = !1;
    try {
      t.ownerDocument.addEventListener("focus", n, !0), (t.focus || HTMLElement.prototype.focus).call(t, e);
    } finally {
      t.ownerDocument.removeEventListener("focus", n, !0);
    }
    return i;
  }
  function UT(t) {
    sp(function() {
      sp(function(e) {
        return t(e);
      });
    });
  }
  function Ep(t, e, n) {
    switch (e = Hl(n), t) {
      case "html":
        if (t = e.documentElement, !t) throw Error(r(452));
        return t;
      case "head":
        if (t = e.head, !t) throw Error(r(453));
        return t;
      case "body":
        if (t = e.body, !t) throw Error(r(454));
        return t;
      default:
        throw Error(r(451));
    }
  }
  function Ap(t, e, n) {
    for (var i in n) {
      var u = n[i];
      n.hasOwnProperty(i) && u != null && Rt(t, e, i, null, cT, u);
    }
    n.dangerouslySetInnerHTML != null && (t.textContent = ""), t.onclick === rn && (t.onclick = null), Su(t);
  }
  function Xc(t) {
    for (var e = t.attributes; e.length; )
      t.removeAttributeNode(e[0]);
    Su(t);
  }
  var Je = /* @__PURE__ */ new Map(), xp = /* @__PURE__ */ new Set();
  function Ll(t) {
    if (typeof t.getRootNode == "function") {
      var e = t.getRootNode();
      if (e.nodeType === 9 || e.nodeType === 11) return e;
    }
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  var Yn = st.d;
  st.d = {
    f: BT,
    r: jT,
    D: HT,
    C: LT,
    L: YT,
    m: qT,
    X: XT,
    S: GT,
    M: QT
  };
  function BT() {
    var t = Yn.f(), e = Es();
    return t || e;
  }
  function jT(t) {
    var e = ea(t);
    e !== null && e.tag === 5 && e.type === "form" ? Cm(e) : Yn.r(t);
  }
  var ja = typeof document > "u" ? null : document;
  function Mp(t, e, n) {
    var i = ja;
    if (i && typeof e == "string" && e) {
      var u = Le(e);
      u = 'link[rel="' + t + '"][href="' + u + '"]', typeof n == "string" && (u += '[crossorigin="' + n + '"]'), xp.has(u) || (xp.add(u), t = { rel: t, crossOrigin: n, href: e }, i.querySelector(u) === null && (e = i.createElement("link"), ce(e, "link", t), te(e), i.head.appendChild(e)));
    }
  }
  function HT(t) {
    Yn.D(t), Mp("dns-prefetch", t, null);
  }
  function LT(t, e) {
    Yn.C(t, e), Mp("preconnect", t, e);
  }
  function YT(t, e, n) {
    Yn.L(t, e, n);
    var i = ja;
    if (i && t && e) {
      var u = 'link[rel="preload"][as="' + Le(e) + '"]';
      e === "image" && n && n.imageSrcSet ? (u += '[imagesrcset="' + Le(
        n.imageSrcSet
      ) + '"]', typeof n.imageSizes == "string" && (u += '[imagesizes="' + Le(
        n.imageSizes
      ) + '"]')) : u += '[href="' + Le(t) + '"]';
      var s = u;
      switch (e) {
        case "style":
          s = Ha(t);
          break;
        case "script":
          s = La(t);
      }
      if (!(Je.has(s) || (t = Z(
        {
          rel: "preload",
          href: e === "image" && n && n.imageSrcSet ? void 0 : t,
          as: e
        },
        n
      ), Je.set(s, t), i.querySelector(u) !== null || e === "style" && i.querySelector(Yl(s)) || e === "script" && i.querySelector(ql(s))))) {
        var f = i.createElement("link");
        ce(f, "link", t), e === "style" && (f[vu] = !0, f.onload = f.onerror = function() {
          Hh(f);
        }), te(f), i.head.appendChild(f);
      }
    }
  }
  function qT(t, e) {
    Yn.m(t, e);
    var n = ja;
    if (n && t) {
      var i = e && typeof e.as == "string" ? e.as : "script", u = 'link[rel="modulepreload"][as="' + Le(i) + '"][href="' + Le(t) + '"]', s = u;
      switch (i) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          s = La(t);
      }
      if (!Je.has(s) && (t = Z({ rel: "modulepreload", href: t }, e), Je.set(s, t), n.querySelector(u) === null)) {
        switch (i) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(ql(s)))
              return;
        }
        i = n.createElement("link"), ce(i, "link", t), te(i), n.head.appendChild(i);
      }
    }
  }
  function GT(t, e, n) {
    Yn.S(t, e, n);
    var i = ja;
    if (i && t) {
      var u = na(i).hoistableStyles, s = Ha(t);
      e = e || "default";
      var f = u.get(s);
      if (!f) {
        var m = { loading: 0, preload: null };
        if (f = i.querySelector(
          Yl(s)
        ))
          m.loading = 5;
        else {
          t = Z(
            { rel: "stylesheet", href: t, "data-precedence": e },
            n
          ), (n = Je.get(s)) && Qc(t, n);
          var T = f = i.createElement("link");
          te(T), ce(T, "link", t), T._p = new Promise(function(C, R) {
            T.onload = C, T.onerror = R;
          }), T.addEventListener("load", function() {
            m.loading |= 1;
          }), T.addEventListener("error", function() {
            m.loading |= 2;
          }), m.loading |= 4, Rs(f, e, i);
        }
        f = {
          type: "stylesheet",
          instance: f,
          count: 1,
          state: m
        }, u.set(s, f);
      }
    }
  }
  function XT(t, e) {
    Yn.X(t, e);
    var n = ja;
    if (n && t) {
      var i = na(n).hoistableScripts, u = La(t), s = i.get(u);
      s || (s = n.querySelector(ql(u)), s || (t = Z({ src: t, async: !0 }, e), (e = Je.get(u)) && Zc(t, e), s = n.createElement("script"), te(s), ce(s, "link", t), n.head.appendChild(s)), s = {
        type: "script",
        instance: s,
        count: 1,
        state: null
      }, i.set(u, s));
    }
  }
  function QT(t, e) {
    Yn.M(t, e);
    var n = ja;
    if (n && t) {
      var i = na(n).hoistableScripts, u = La(t), s = i.get(u);
      s || (s = n.querySelector(ql(u)), s || (t = Z({ src: t, async: !0, type: "module" }, e), (e = Je.get(u)) && Zc(t, e), s = n.createElement("script"), te(s), ce(s, "link", t), n.head.appendChild(s)), s = {
        type: "script",
        instance: s,
        count: 1,
        state: null
      }, i.set(u, s));
    }
  }
  function Cp(t, e, n, i) {
    var u = (u = Gn.current) ? Ll(u) : null;
    if (!u) throw Error(r(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string" ? (n = Ha(n.href), e = na(
          u
        ).hoistableStyles, i = e.get(n), i || (i = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, e.set(n, i)), i) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
          t = Ha(n.href);
          var s = na(
            u
          ).hoistableStyles, f = s.get(t);
          if (f || (u = u.ownerDocument || u, f = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, s.set(t, f), (s = u.querySelector(
            Yl(t)
          )) ? s._p || (f.instance = s, f.state.loading = 5) : (s = Je.get(t), s || (s = {
            rel: "preload",
            as: "style",
            href: n.href,
            crossOrigin: n.crossOrigin,
            integrity: n.integrity,
            media: n.media,
            hrefLang: n.hrefLang,
            referrerPolicy: n.referrerPolicy
          }, Je.set(t, s)), ZT(
            u,
            t,
            s,
            f.state
          ))), e && i === null)
            throw Error(r(528, ""));
          return f;
        }
        if (e && i !== null)
          throw Error(r(529, ""));
        return null;
      case "script":
        return e = n.async, n = n.src, typeof n == "string" && e && typeof e != "function" && typeof e != "symbol" ? (n = La(n), e = na(
          u
        ).hoistableScripts, i = e.get(n), i || (i = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, e.set(n, i)), i) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(r(444, t));
    }
  }
  function Ha(t) {
    return 'href="' + Le(t) + '"';
  }
  function Yl(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function Dp(t) {
    return Z({}, t, {
      "data-precedence": t.precedence,
      precedence: null
    });
  }
  function ZT(t, e, n, i) {
    if (e = t.querySelector(
      'link[rel="preload"][as="style"][' + e + "]"
    )) {
      if (e[vu] !== !0) {
        i.loading = 1;
        return;
      }
    } else
      e = t.createElement("link"), e[vu] = !0, e.onload = e.onerror = Hh.bind(null, e), ce(e, "link", n), te(e), t.head.appendChild(e);
    i.preload = e, e.addEventListener("load", function() {
      return i.loading |= 1;
    }), e.addEventListener("error", function() {
      return i.loading |= 2;
    });
  }
  function La(t) {
    return '[src="' + Le(t) + '"]';
  }
  function ql(t) {
    return "script[async]" + t;
  }
  function Op(t, e, n) {
    if (e.count++, e.instance === null)
      switch (e.type) {
        case "style":
          var i = t.querySelector(
            'style[data-href~="' + Le(n.href) + '"]'
          );
          if (i)
            return e.instance = i, te(i), i;
          var u = Z({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null
          });
          return i = (t.ownerDocument || t).createElement(
            "style"
          ), te(i), ce(i, "style", u), Rs(i, n.precedence, t), e.instance = i;
        case "stylesheet":
          u = Ha(n.href);
          var s = t.querySelector(
            Yl(u)
          );
          if (s)
            return e.state.loading |= 4, e.instance = s, te(s), s;
          i = Dp(n), (u = Je.get(u)) && Qc(i, u), s = (t.ownerDocument || t).createElement("link"), te(s);
          var f = s;
          return f._p = new Promise(function(m, T) {
            f.onload = m, f.onerror = T;
          }), ce(s, "link", i), e.state.loading |= 4, Rs(s, n.precedence, t), e.instance = s;
        case "script":
          return s = La(n.src), (u = t.querySelector(
            ql(s)
          )) ? (e.instance = u, te(u), u) : (i = n, (u = Je.get(s)) && (i = Z({}, n), Zc(i, u)), t = t.ownerDocument || t, u = t.createElement("script"), te(u), ce(u, "link", i), t.head.appendChild(u), e.instance = u);
        case "void":
          return null;
        default:
          throw Error(r(443, e.type));
      }
    else
      e.type === "stylesheet" && (e.state.loading & 4) === 0 && (i = e.instance, e.state.loading |= 4, Rs(i, n.precedence, t));
    return e.instance;
  }
  function Rs(t, e, n) {
    for (var i = n.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), u = i.length ? i[i.length - 1] : null, s = u, f = 0; f < i.length; f++) {
      var m = i[f];
      if (m.dataset.precedence === e) s = m;
      else if (s !== u) break;
    }
    s ? s.parentNode.insertBefore(t, s.nextSibling) : (e = n.nodeType === 9 ? n.head : n, e.insertBefore(t, e.firstChild));
  }
  function Qc(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.title == null && (t.title = e.title);
  }
  function Zc(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.integrity == null && (t.integrity = e.integrity);
  }
  var zs = null;
  function Rp(t, e, n) {
    if (zs === null) {
      var i = /* @__PURE__ */ new Map(), u = zs = /* @__PURE__ */ new Map();
      u.set(n, i);
    } else
      u = zs, i = u.get(n), i || (i = /* @__PURE__ */ new Map(), u.set(n, i));
    if (i.has(t)) return i;
    for (i.set(t, null), n = n.getElementsByTagName(t), u = 0; u < n.length; u++) {
      var s = n[u];
      if (!(s[nl] || s[le] || t === "link" && s.getAttribute("rel") === "stylesheet") && s.namespaceURI !== "http://www.w3.org/2000/svg") {
        var f = s.getAttribute(e) || "";
        f = t + f;
        var m = i.get(f);
        m ? m.push(s) : i.set(f, [s]);
      }
    }
    return i;
  }
  function Kc(t, e, n) {
    t = t.ownerDocument || t, t.head.insertBefore(
      n,
      e === "title" ? t.querySelector("head > title") : null
    );
  }
  function KT(t, e, n) {
    if (n === 1 || e.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof e.precedence != "string" || typeof e.href != "string" || e.href === "")
          break;
        return !0;
      case "link":
        if (typeof e.rel != "string" || typeof e.href != "string" || e.href === "" || e.onLoad || e.onError)
          break;
        switch (e.rel) {
          case "stylesheet":
            return t = e.disabled, typeof e.precedence == "string" && t == null;
          default:
            return !0;
        }
      case "script":
        if (e.async && typeof e.async != "function" && typeof e.async != "symbol" && !e.onLoad && !e.onError && e.src && typeof e.src == "string")
          return !0;
    }
    return !1;
  }
  function zp(t, e) {
    return t === "img" && e.src != null && e.src !== "" && e.onLoad == null && e.loading !== "lazy";
  }
  function Np(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  function _p(t) {
    return (t.width || 100) * (t.height || 100) * (typeof devicePixelRatio == "number" ? devicePixelRatio : 1) * 0.25;
  }
  function Vp(t, e) {
    typeof e.decode == "function" && (t.imgCount++, e.complete || (t.imgBytes += _p(e), t.suspenseyImages.push(e)), t = PT.bind(t), e.decode().then(t, t));
  }
  function JT(t, e, n, i) {
    if (n.type === "stylesheet" && (typeof i.media != "string" || matchMedia(i.media).matches !== !1) && (n.state.loading & 4) === 0) {
      if (n.instance === null) {
        var u = Ha(i.href), s = e.querySelector(
          Yl(u)
        );
        if (s) {
          e = s._p, e !== null && typeof e == "object" && typeof e.then == "function" && (t.count++, t = Gl.bind(t), e.then(t, t)), n.state.loading |= 4, n.instance = s, te(s);
          return;
        }
        s = e.ownerDocument || e, i = Dp(i), (u = Je.get(u)) && Qc(i, u), s = s.createElement("link"), te(s);
        var f = s;
        f._p = new Promise(function(m, T) {
          f.onload = m, f.onerror = T;
        }), ce(s, "link", i), n.instance = s;
      }
      t.stylesheets === null && (t.stylesheets = /* @__PURE__ */ new Map()), t.stylesheets.set(n, e), (e = n.state.preload) && (n.state.loading & 3) === 0 && (t.count++, n = Gl.bind(t), e.addEventListener("load", n), e.addEventListener("error", n));
    }
  }
  var Ns = 0;
  function FT(t, e) {
    return t.stylesheets && t.count === 0 && Vs(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function(n) {
      var i = setTimeout(function() {
        if (t.stylesheets && Vs(t, t.stylesheets), t.unsuspend) {
          var s = t.unsuspend;
          t.unsuspend = null, s();
        }
      }, 6e4 + e);
      0 < t.imgBytes && Ns === 0 && (Ns = 62500 * hT());
      var u = setTimeout(
        function() {
          if (t.waitingForImages = !1, t.count === 0 && (t.stylesheets && Vs(t, t.stylesheets), t.unsuspend)) {
            var s = t.unsuspend;
            t.unsuspend = null, s();
          }
        },
        (t.imgBytes > Ns ? 50 : 800) + e
      );
      return t.unsuspend = n, function() {
        t.unsuspend = null, clearTimeout(i), clearTimeout(u);
      };
    } : null;
  }
  function wp(t) {
    if (t.count === 0 && (t.imgCount === 0 || !t.waitingForImages)) {
      if (t.stylesheets) Vs(t, t.stylesheets);
      else if (t.unsuspend) {
        var e = t.unsuspend;
        t.unsuspend = null, e();
      }
    }
  }
  function Gl() {
    this.count--, wp(this);
  }
  function PT() {
    this.imgCount--, wp(this);
  }
  var _s = null;
  function Vs(t, e) {
    t.stylesheets = null, t.unsuspend !== null && (t.count++, _s = /* @__PURE__ */ new Map(), e.forEach(kT, t), _s = null, Gl.call(t));
  }
  function kT(t, e) {
    if (!(e.state.loading & 4)) {
      var n = _s.get(t);
      if (n) var i = n.get(null);
      else {
        n = /* @__PURE__ */ new Map(), _s.set(t, n);
        for (var u = t.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), s = 0; s < u.length; s++) {
          var f = u[s];
          (f.nodeName === "LINK" || f.getAttribute("media") !== "not all") && (n.set(f.dataset.precedence, f), i = f);
        }
        i && n.set(null, i);
      }
      u = e.instance, f = u.getAttribute("data-precedence"), s = n.get(f) || i, s === i && n.set(null, u), n.set(f, u), this.count++, i = Gl.bind(this), u.addEventListener("load", i), u.addEventListener("error", i), s ? s.parentNode.insertBefore(u, s.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(u, t.firstChild)), e.state.loading |= 4;
    }
  }
  var Ya = {
    $$typeof: zt,
    Provider: null,
    Consumer: null,
    _currentValue: Mn,
    _currentValue2: Mn,
    _threadCount: 0
  };
  function IT(t, e, n, i, u, s, f, m, T) {
    this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Co(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Co(0), this.hiddenUpdates = Co(null), this.identifierPrefix = i, this.onUncaughtError = u, this.onCaughtError = s, this.onRecoverableError = f, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = T, this.transitionTypes = null, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Up(t, e, n, i, u, s, f, m, T, C, R, V) {
    return t = new IT(
      t,
      e,
      n,
      f,
      T,
      C,
      R,
      V,
      m
    ), e = 1, s === !0 && (e |= 24), s = Ee(3, null, null, e), t.current = s, s.stateNode = t, e = sr(), e.refCount++, t.pooledCache = e, e.refCount++, s.memoizedState = {
      element: i,
      isDehydrated: n,
      cache: e
    }, fr(s), t;
  }
  function Bp(t) {
    return t ? (t = ha, t) : ha;
  }
  function jp(t, e, n, i, u, s) {
    u = Bp(u), i.context === null ? i.context = u : i.pendingContext = u, i = $n(e), i.payload = { element: n }, s = s === void 0 ? null : s, s !== null && (i.callback = s), n = ti(t, i, e), n !== null && (Ce(n, t, e), Sl(n, t, e));
  }
  function Hp(t, e) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var n = t.retryLane;
      t.retryLane = n !== 0 && n < e ? n : e;
    }
  }
  function Jc(t, e) {
    Hp(t, e), (t = t.alternate) && Hp(t, e);
  }
  function Lp(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = Oi(t, 67108864);
      e !== null && Ce(e, t, 67108864), Jc(t, 67108864);
    }
  }
  function Yp(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = je();
      e = Do(e);
      var n = Oi(t, e);
      n !== null && Ce(n, t, e), Jc(t, e);
    }
  }
  var qa = !0;
  function WT(t, e, n, i) {
    var u = I.T;
    I.T = null;
    var s = st.p;
    try {
      st.p = 2, Fc(t, e, n, i);
    } finally {
      st.p = s, I.T = u;
    }
  }
  function $T(t, e, n, i) {
    var u = I.T;
    I.T = null;
    var s = st.p;
    try {
      st.p = 8, Fc(t, e, n, i);
    } finally {
      st.p = s, I.T = u;
    }
  }
  function Fc(t, e, n, i) {
    if (qa) {
      var u = Pc(i);
      if (u === null)
        Rc(
          t,
          e,
          i,
          ws,
          n
        ), Gp(t, i);
      else if (eb(
        u,
        t,
        e,
        n,
        i
      ))
        i.stopPropagation();
      else if (Gp(t, i), e & 4 && -1 < tb.indexOf(t)) {
        for (; u !== null; ) {
          var s = ea(u);
          if (s !== null)
            switch (s.tag) {
              case 3:
                if (s = s.stateNode, s.current.memoizedState.isDehydrated) {
                  var f = Ai(s.pendingLanes);
                  if (f !== 0) {
                    var m = s;
                    for (m.pendingLanes |= 2, m.entangledLanes |= 2; f; ) {
                      var T = 1 << 31 - ze(f);
                      m.entanglements[1] |= T, f &= ~T;
                    }
                    Sn(s), (Mt & 6) === 0 && (Ss = Oe() + 500, Ul(0));
                  }
                }
                break;
              case 31:
              case 13:
                m = Oi(s, 2), m !== null && Ce(m, s, 2), Es(), Jc(s, 2);
            }
          if (s = Pc(i), s === null && Rc(
            t,
            e,
            i,
            ws,
            n
          ), s === u) break;
          u = s;
        }
        u !== null && i.stopPropagation();
      } else
        Rc(
          t,
          e,
          i,
          null,
          n
        );
    }
  }
  function Pc(t) {
    return t = wo(t), kc(t);
  }
  var ws = null;
  function kc(t) {
    if (ws = null, t = xi(t), t !== null) {
      var e = d(t);
      if (e === null) t = null;
      else {
        var n = e.tag;
        if (n === 13) {
          if (t = h(e), t !== null) return t;
          t = null;
        } else if (n === 31) {
          if (t = y(e), t !== null) return t;
          t = null;
        } else if (n === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return ws = t, null;
  }
  function qp(t) {
    switch (t) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "fullscreenerror":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "resize":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (h1()) {
          case Ch:
            return 2;
          case Dh:
            return 8;
          case du:
          case d1:
            return 32;
          case Oh:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Ic = !1, hi = null, di = null, mi = null, Xl = /* @__PURE__ */ new Map(), Ql = /* @__PURE__ */ new Map(), yi = [], tb = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Gp(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        hi = null;
        break;
      case "dragenter":
      case "dragleave":
        di = null;
        break;
      case "mouseover":
      case "mouseout":
        mi = null;
        break;
      case "pointerover":
      case "pointerout":
        Xl.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Ql.delete(e.pointerId);
    }
  }
  function Zl(t, e, n, i, u, s) {
    return t === null || t.nativeEvent !== s ? (t = {
      blockedOn: e,
      domEventName: n,
      eventSystemFlags: i,
      nativeEvent: s,
      targetContainers: [u]
    }, e !== null && (e = ea(e), e !== null && Lp(e)), t) : (t.eventSystemFlags |= i, e = t.targetContainers, u !== null && e.indexOf(u) === -1 && e.push(u), t);
  }
  function eb(t, e, n, i, u) {
    switch (e) {
      case "focusin":
        return hi = Zl(
          hi,
          t,
          e,
          n,
          i,
          u
        ), !0;
      case "dragenter":
        return di = Zl(
          di,
          t,
          e,
          n,
          i,
          u
        ), !0;
      case "mouseover":
        return mi = Zl(
          mi,
          t,
          e,
          n,
          i,
          u
        ), !0;
      case "pointerover":
        var s = u.pointerId;
        return Xl.set(
          s,
          Zl(
            Xl.get(s) || null,
            t,
            e,
            n,
            i,
            u
          )
        ), !0;
      case "gotpointercapture":
        return s = u.pointerId, Ql.set(
          s,
          Zl(
            Ql.get(s) || null,
            t,
            e,
            n,
            i,
            u
          )
        ), !0;
    }
    return !1;
  }
  function Xp(t) {
    var e = xi(t.target);
    if (e !== null) {
      var n = d(e);
      if (n !== null) {
        if (e = n.tag, e === 13) {
          if (e = h(n), e !== null) {
            t.blockedOn = e, Uh(t.priority, function() {
              Yp(n);
            });
            return;
          }
        } else if (e === 31) {
          if (e = y(n), e !== null) {
            t.blockedOn = e, Uh(t.priority, function() {
              Yp(n);
            });
            return;
          }
        } else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function Us(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var n = Pc(t.nativeEvent);
      if (n === null) {
        n = t.nativeEvent;
        var i = new n.constructor(
          n.type,
          n
        );
        Vo = i, n.target.dispatchEvent(i), Vo = null;
      } else
        return e = ea(n), e !== null && Lp(e), t.blockedOn = n, !1;
      e.shift();
    }
    return !0;
  }
  function Qp(t, e, n) {
    Us(t) && n.delete(e);
  }
  function nb() {
    Ic = !1, hi !== null && Us(hi) && (hi = null), di !== null && Us(di) && (di = null), mi !== null && Us(mi) && (mi = null), Xl.forEach(Qp), Ql.forEach(Qp);
  }
  function Bs(t, e) {
    t.blockedOn === e && (t.blockedOn = null, Ic || (Ic = !0, a.unstable_scheduleCallback(
      a.unstable_NormalPriority,
      nb
    )));
  }
  var js = null;
  function Zp(t) {
    js !== t && (js = t, a.unstable_scheduleCallback(
      a.unstable_NormalPriority,
      function() {
        js === t && (js = null);
        for (var e = 0; e < t.length; e += 3) {
          var n = t[e], i = t[e + 1], u = t[e + 2];
          if (typeof i != "function") {
            if (kc(i || n) === null)
              continue;
            break;
          }
          var s = ea(n);
          s !== null && (t.splice(e, 3), e -= 3, _r(
            s,
            {
              pending: !0,
              data: u,
              method: n.method,
              action: i
            },
            i,
            u
          ));
        }
      }
    ));
  }
  function Ga(t) {
    function e(T) {
      return Bs(T, t);
    }
    hi !== null && Bs(hi, t), di !== null && Bs(di, t), mi !== null && Bs(mi, t), Xl.forEach(e), Ql.forEach(e);
    for (var n = 0; n < yi.length; n++) {
      var i = yi[n];
      i.blockedOn === t && (i.blockedOn = null);
    }
    for (; 0 < yi.length && (n = yi[0], n.blockedOn === null); )
      Xp(n), n.blockedOn === null && yi.shift();
    if (n = (t.ownerDocument || t).$$reactFormReplay, n != null)
      for (i = 0; i < n.length; i += 3) {
        var u = n[i], s = n[i + 1], f = u[be] || null;
        if (typeof s == "function")
          f || Zp(n);
        else if (f) {
          var m = null;
          if (s && s.hasAttribute("formAction")) {
            if (u = s, f = s[be] || null)
              m = f.formAction;
            else if (kc(u) !== null) continue;
          } else m = f.action;
          typeof m == "function" ? n[i + 1] = m : (n.splice(i, 3), i -= 3), Zp(n);
        }
      }
  }
  function Kp() {
    function t(s) {
      s.canIntercept && s.info === "react-transition" && s.intercept({
        handler: function() {
          return new Promise(function(f) {
            return u = f;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function e() {
      u !== null && (u(), u = null), i || setTimeout(n, 20);
    }
    function n() {
      if (!i && !navigation.transition) {
        var s = navigation.currentEntry;
        s && s.url != null && navigation.navigate(s.url, {
          state: s.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var i = !1, u = null;
      return navigation.addEventListener("navigate", t), navigation.addEventListener("navigatesuccess", e), navigation.addEventListener("navigateerror", e), setTimeout(n, 100), function() {
        i = !0, navigation.removeEventListener("navigate", t), navigation.removeEventListener("navigatesuccess", e), navigation.removeEventListener("navigateerror", e), u !== null && (u(), u = null);
      };
    }
  }
  function Wc(t) {
    this._internalRoot = t;
  }
  Hs.prototype.render = Wc.prototype.render = function(t) {
    var e = this._internalRoot;
    if (e === null) throw Error(r(409));
    var n = e.current, i = je();
    jp(n, i, t, e, null, null);
  }, Hs.prototype.unmount = Wc.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var e = t.containerInfo;
      jp(t.current, 2, null, t, null, null), Es(), e[ta] = null;
    }
  };
  function Hs(t) {
    this._internalRoot = t;
  }
  Hs.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var e = wh();
      t = { blockedOn: null, target: t, priority: e };
      for (var n = 0; n < yi.length && e !== 0 && e < yi[n].priority; n++) ;
      yi.splice(n, 0, t), n === 0 && Xp(t);
    }
  };
  var Jp = l.version;
  if (Jp !== "19.3.1")
    throw Error(
      r(
        527,
        Jp,
        "19.3.1"
      )
    );
  st.findDOMNode = function(t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function" ? Error(r(188)) : (t = Object.keys(t).join(","), Error(r(268, t)));
    return t = v(e), t = t !== null ? g(t) : null, t = t === null ? null : t.stateNode, t;
  };
  var ib = {
    bundleType: 0,
    version: "19.3.1",
    rendererPackageName: "react-dom",
    currentDispatcherRef: I,
    reconcilerVersion: "19.3.1"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ls = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ls.isDisabled && Ls.supportsFiber)
      try {
        $a = Ls.inject(
          ib
        ), Re = Ls;
      } catch {
      }
  }
  return Jl.createRoot = function(t, e) {
    if (!c(t)) throw Error(r(299));
    var n = !1, i = "", u = Bm, s = jm, f = Hm;
    return e != null && (e.unstable_strictMode === !0 && (n = !0), e.identifierPrefix !== void 0 && (i = e.identifierPrefix), e.onUncaughtError !== void 0 && (u = e.onUncaughtError), e.onCaughtError !== void 0 && (s = e.onCaughtError), e.onRecoverableError !== void 0 && (f = e.onRecoverableError)), e = Up(
      t,
      1,
      !1,
      null,
      null,
      n,
      i,
      null,
      u,
      s,
      f,
      Kp
    ), t[ta] = e.current, Oc(t), new Wc(e);
  }, Jl.hydrateRoot = function(t, e, n) {
    if (!c(t)) throw Error(r(299));
    var i = !1, u = "", s = Bm, f = jm, m = Hm, T = null;
    return n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (u = n.identifierPrefix), n.onUncaughtError !== void 0 && (s = n.onUncaughtError), n.onCaughtError !== void 0 && (f = n.onCaughtError), n.onRecoverableError !== void 0 && (m = n.onRecoverableError), n.formState !== void 0 && (T = n.formState)), e = Up(
      t,
      1,
      !0,
      e,
      n ?? null,
      i,
      u,
      T,
      s,
      f,
      m,
      Kp
    ), e.context = Bp(null), n = e.current, i = je(), i = Do(i), u = $n(i), u.callback = null, ti(n, u, i), n = i, e.current.lanes = n, el(e, n), Sn(e), t[ta] = e.current, Oc(t), new Hs(e);
  }, Jl.version = "19.3.1", Jl;
}
var ig;
function db() {
  if (ig) return ef.exports;
  ig = 1;
  function a() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (l) {
        console.error(l);
      }
  }
  return a(), ef.exports = hb(), ef.exports;
}
var mb = db();
const Jf = Q.createContext({});
function Ff(a) {
  const l = Q.useRef(null);
  return l.current === null && (l.current = a()), l.current;
}
const yb = typeof window < "u", Pf = yb ? Q.useLayoutEffect : Q.useEffect, ho = /* @__PURE__ */ Q.createContext(null);
function kf(a, l) {
  a.indexOf(l) === -1 && a.push(l);
}
function eo(a, l) {
  const o = a.indexOf(l);
  o > -1 && a.splice(o, 1);
}
const xn = (a, l, o) => o > l ? l : o < a ? a : o;
function ag(a, l) {
  return l ? `${a}. For more information and steps for solving, visit https://motion.dev/troubleshooting/${l}` : a;
}
let lu = () => {
}, vi = () => {
};
typeof process < "u" && process.env?.NODE_ENV !== "production" && (lu = (a, l, o) => {
  !a && typeof console < "u" && console.warn(ag(l, o));
}, vi = (a, l, o) => {
  if (!a)
    throw new Error(ag(l, o));
});
const Si = {}, x0 = (a) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(a), M0 = (a) => typeof a == "object" && a !== null, C0 = (a) => /^0[^.\s]+$/u.test(a);
// @__NO_SIDE_EFFECTS__
function D0(a) {
  let l;
  return () => (l === void 0 && (l = a()), l);
}
const Pe = /* @__NO_SIDE_EFFECTS__ */ (a) => a, uu = (...a) => a.reduce((l, o) => (r) => o(l(r))), eu = /* @__NO_SIDE_EFFECTS__ */ (a, l, o) => {
  const r = l - a;
  return r ? (o - a) / r : 1;
};
class If {
  constructor() {
    this.subscriptions = [];
  }
  add(l) {
    return kf(this.subscriptions, l), () => eo(this.subscriptions, l);
  }
  notify(l, o, r) {
    const c = this.subscriptions.length;
    if (c)
      if (c === 1)
        this.subscriptions[0](l, o, r);
      else
        for (let d = 0; d < c; d++) {
          const h = this.subscriptions[d];
          h && h(l, o, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const De = /* @__NO_SIDE_EFFECTS__ */ (a) => a * 1e3, Fe = /* @__NO_SIDE_EFFECTS__ */ (a) => a / 1e3, O0 = /* @__NO_SIDE_EFFECTS__ */ (a, l) => l ? a * (1e3 / l) : 0, R0 = (a, l, o) => (((1 - 3 * o + 3 * l) * a + (3 * o - 6 * l)) * a + 3 * l) * a, pb = 1e-7, gb = 12;
function vb(a, l, o, r, c) {
  let d, h, y = 0;
  do
    h = l + (o - l) / 2, d = R0(h, r, c) - a, d > 0 ? o = h : l = h;
  while (Math.abs(d) > pb && ++y < gb);
  return h;
}
// @__NO_SIDE_EFFECTS__
function su(a, l, o, r) {
  if (a === l && o === r)
    return Pe;
  const c = (d) => vb(d, 0, 1, a, o);
  return (d) => d === 0 || d === 1 ? d : R0(c(d), l, r);
}
const z0 = /* @__NO_SIDE_EFFECTS__ */ (a) => (l) => l <= 0.5 ? a(2 * l) / 2 : (2 - a(2 * (1 - l))) / 2, N0 = /* @__NO_SIDE_EFFECTS__ */ (a) => (l) => 1 - a(1 - l), _0 = /* @__PURE__ */ su(0.33, 1.53, 0.69, 0.99), Wf = /* @__PURE__ */ N0(_0), V0 = /* @__PURE__ */ z0(Wf), w0 = (a) => a >= 1 ? 1 : (a *= 2) < 1 ? 0.5 * Wf(a) : 0.5 * (2 - Math.pow(2, -10 * (a - 1))), $f = (a) => 1 - Math.sin(Math.acos(a)), U0 = /* @__PURE__ */ N0($f), B0 = /* @__PURE__ */ z0($f), Sb = /* @__PURE__ */ su(0.42, 0, 1, 1), Tb = /* @__PURE__ */ su(0, 0, 0.58, 1), j0 = /* @__PURE__ */ su(0.42, 0, 0.58, 1), bb = /* @__NO_SIDE_EFFECTS__ */ (a) => Array.isArray(a) && typeof a[0] != "number", H0 = /* @__NO_SIDE_EFFECTS__ */ (a) => Array.isArray(a) && typeof a[0] == "number", lg = {
  linear: Pe,
  easeIn: Sb,
  easeInOut: j0,
  easeOut: Tb,
  circIn: $f,
  circInOut: B0,
  circOut: U0,
  backIn: Wf,
  backInOut: V0,
  backOut: _0,
  anticipate: w0
}, Eb = (a) => typeof a == "string", ug = (a) => {
  if (/* @__PURE__ */ H0(a)) {
    vi(a.length === 4, "Cubic bezier arrays must contain four numerical values.", "cubic-bezier-length");
    const [l, o, r, c] = a;
    return /* @__PURE__ */ su(l, o, r, c);
  } else if (Eb(a))
    return vi(lg[a] !== void 0, `Invalid easing type '${a}'`, "invalid-easing-type"), lg[a];
  return a;
}, Ys = [
  "setup",
  // Compute
  "read",
  // Read
  "resolveKeyframes",
  // Write/Read/Write/Read
  "preUpdate",
  // Compute
  "update",
  // Compute
  "preRender",
  // Compute
  "render",
  // Write
  "postRender"
  // Compute
];
function Ab(a) {
  let l = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Set(), r = !1, c = !1;
  const d = /* @__PURE__ */ new WeakSet();
  let h = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  };
  function y(v) {
    d.has(v) && (S.schedule(v), a()), v(h);
  }
  const S = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (v, g = !1, p = !1) => {
      const N = p && r ? l : o;
      return g && d.add(v), N.add(v), v;
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: (v) => {
      o.delete(v), d.delete(v);
    },
    /**
     * Execute all schedule callbacks.
     */
    process: (v) => {
      if (h = v, r) {
        c = !0;
        return;
      }
      r = !0;
      const g = l;
      l = o, o = g, l.forEach(y), l.clear(), r = !1, c && (c = !1, S.process(v));
    }
  };
  return S;
}
const xb = 40;
function L0(a, l) {
  let o = !1, r = !0;
  const c = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, d = () => o = !0, h = Ys.reduce((q, X) => (q[X] = Ab(d), q), {}), { setup: y, read: S, resolveKeyframes: v, preUpdate: g, update: p, preRender: b, render: N, postRender: z } = h, U = () => {
    const q = Si.useManualTiming, X = q ? c.timestamp : performance.now();
    o = !1, q || (c.delta = r ? 1e3 / 60 : Math.max(Math.min(X - c.timestamp, xb), 1)), c.timestamp = X, c.isProcessing = !0, y.process(c), S.process(c), v.process(c), g.process(c), p.process(c), b.process(c), N.process(c), z.process(c), c.isProcessing = !1, o && l && (r = !1, a(U));
  }, w = () => {
    o = !0, r = !0, c.isProcessing || a(U);
  };
  return { schedule: Ys.reduce((q, X) => {
    const et = h[X];
    return q[X] = (it, Z = !1, H = !1) => (o || w(), et.schedule(it, Z, H)), q;
  }, {}), cancel: (q) => {
    for (let X = 0; X < Ys.length; X++)
      h[Ys[X]].cancel(q);
  }, state: c, steps: h };
}
const { schedule: wt, cancel: Ti, state: he, steps: uf } = /* @__PURE__ */ L0(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Pe, !0);
let Ks;
function Mb() {
  Ks = void 0;
}
const Se = {
  now: () => (Ks === void 0 && Se.set(he.isProcessing || Si.useManualTiming ? he.timestamp : performance.now()), Ks),
  set: (a) => {
    Ks = a, queueMicrotask(Mb);
  }
}, Y0 = (a) => (l) => typeof l == "string" && l.startsWith(a), q0 = /* @__PURE__ */ Y0("--"), Cb = /* @__PURE__ */ Y0("var(--"), th = (a) => Cb(a) ? Db.test(a.split("/*")[0].trim()) : !1, Db = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function sg(a) {
  return typeof a != "string" ? !1 : a.split("/*")[0].includes("var(--");
}
const Pa = {
  test: (a) => typeof a == "number",
  parse: parseFloat,
  transform: (a) => a
}, nu = {
  ...Pa,
  transform: (a) => xn(0, 1, a)
}, qs = {
  ...Pa,
  default: 1
}, kl = (a) => Math.round(a * 1e5) / 1e5, eh = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function Ob(a) {
  return a == null;
}
const Rb = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, nh = (a, l) => (o) => !!(typeof o == "string" && Rb.test(o) && o.startsWith(a) || l && !Ob(o) && Object.prototype.hasOwnProperty.call(o, l)), G0 = (a, l, o) => (r) => {
  if (typeof r != "string")
    return r;
  const [c, d, h, y] = r.match(eh);
  return {
    [a]: parseFloat(c),
    [l]: parseFloat(d),
    [o]: parseFloat(h),
    alpha: y !== void 0 ? parseFloat(y) : 1
  };
}, zb = (a) => xn(0, 255, a), sf = {
  ...Pa,
  transform: (a) => Math.round(zb(a))
}, Fi = {
  test: /* @__PURE__ */ nh("rgb", "red"),
  parse: /* @__PURE__ */ G0("red", "green", "blue"),
  transform: ({ red: a, green: l, blue: o, alpha: r = 1 }) => "rgba(" + sf.transform(a) + ", " + sf.transform(l) + ", " + sf.transform(o) + ", " + kl(nu.transform(r)) + ")"
};
function Nb(a) {
  let l = "", o = "", r = "", c = "";
  return a.length > 5 ? (l = a.substring(1, 3), o = a.substring(3, 5), r = a.substring(5, 7), c = a.substring(7, 9)) : (l = a.substring(1, 2), o = a.substring(2, 3), r = a.substring(3, 4), c = a.substring(4, 5), l += l, o += o, r += r, c += c), {
    red: parseInt(l, 16),
    green: parseInt(o, 16),
    blue: parseInt(r, 16),
    alpha: c ? parseInt(c, 16) / 255 : 1
  };
}
const Ef = {
  test: /* @__PURE__ */ nh("#"),
  parse: Nb,
  transform: Fi.transform
}, ou = /* @__NO_SIDE_EFFECTS__ */ (a) => ({
  test: (l) => typeof l == "string" && l.endsWith(a) && l.split(" ").length === 1,
  parse: parseFloat,
  transform: (l) => `${l}${a}`
}), qn = /* @__PURE__ */ ou("deg"), An = /* @__PURE__ */ ou("%"), P = /* @__PURE__ */ ou("px"), _b = /* @__PURE__ */ ou("vh"), Vb = /* @__PURE__ */ ou("vw"), og = {
  ...An,
  parse: (a) => An.parse(a) / 100,
  transform: (a) => An.transform(a * 100)
}, Qa = {
  test: /* @__PURE__ */ nh("hsl", "hue"),
  parse: /* @__PURE__ */ G0("hue", "saturation", "lightness"),
  transform: ({ hue: a, saturation: l, lightness: o, alpha: r = 1 }) => "hsla(" + Math.round(a) + ", " + An.transform(kl(l)) + ", " + An.transform(kl(o)) + ", " + kl(nu.transform(r)) + ")"
}, Ft = {
  test: (a) => Fi.test(a) || Ef.test(a) || Qa.test(a),
  parse: (a) => Fi.test(a) ? Fi.parse(a) : Qa.test(a) ? Qa.parse(a) : Ef.parse(a),
  transform: (a) => typeof a == "string" ? a : a.hasOwnProperty("red") ? Fi.transform(a) : Qa.transform(a),
  getAnimatableNone: (a) => {
    const l = Ft.parse(a);
    return l.alpha = 0, Ft.transform(l);
  }
}, wb = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function Ub(a) {
  return isNaN(a) && typeof a == "string" && (a.match(eh)?.length || 0) + (a.match(wb)?.length || 0) > 0;
}
const X0 = "number", Q0 = "color", Bb = "var", jb = "var(", rg = "${}", Hb = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Ja(a) {
  const l = a.toString(), o = [], r = {
    color: [],
    number: [],
    var: []
  }, c = [];
  let d = 0;
  const y = l.replace(Hb, (S) => (Ft.test(S) ? (r.color.push(d), c.push(Q0), o.push(Ft.parse(S))) : S.startsWith(jb) ? (r.var.push(d), c.push(Bb), o.push(S)) : (r.number.push(d), c.push(X0), o.push(parseFloat(S))), ++d, rg)).split(rg);
  return { values: o, split: y, indexes: r, types: c };
}
function Lb(a) {
  return Ja(a).values;
}
function Z0({ split: a, types: l }) {
  const o = a.length;
  return (r) => {
    let c = "";
    for (let d = 0; d < o; d++)
      if (c += a[d], r[d] !== void 0) {
        const h = l[d];
        h === X0 ? c += kl(r[d]) : h === Q0 ? c += Ft.transform(r[d]) : c += r[d];
      }
    return c;
  };
}
function Yb(a) {
  return Z0(Ja(a));
}
const qb = (a) => typeof a == "number" ? 0 : Ft.test(a) ? Ft.getAnimatableNone(a) : a, Gb = (a, l) => typeof a == "number" ? l?.trim().endsWith("/") ? a : 0 : qb(a);
function Xb(a) {
  const l = Ja(a);
  return Z0(l)(l.values.map((r, c) => Gb(r, l.split[c])));
}
const un = {
  test: Ub,
  parse: Lb,
  createTransformer: Yb,
  getAnimatableNone: Xb
};
function of(a, l, o) {
  return o < 0 && (o += 1), o > 1 && (o -= 1), o < 1 / 6 ? a + (l - a) * 6 * o : o < 1 / 2 ? l : o < 2 / 3 ? a + (l - a) * (2 / 3 - o) * 6 : a;
}
function Qb({ hue: a, saturation: l, lightness: o, alpha: r }) {
  a /= 360, l /= 100, o /= 100;
  let c = 0, d = 0, h = 0;
  if (!l)
    c = d = h = o;
  else {
    const y = o < 0.5 ? o * (1 + l) : o + l - o * l, S = 2 * o - y;
    c = of(S, y, a + 1 / 3), d = of(S, y, a), h = of(S, y, a - 1 / 3);
  }
  return {
    red: Math.round(c * 255),
    green: Math.round(d * 255),
    blue: Math.round(h * 255),
    alpha: r
  };
}
function no(a, l) {
  return (o) => o > 0 ? l : a;
}
const Vt = (a, l, o) => a + (l - a) * o, rf = (a, l, o) => {
  const r = a * a, c = o * (l * l - r) + r;
  return c < 0 ? 0 : Math.sqrt(c);
}, Zb = [Ef, Fi, Qa], Kb = (a) => Zb.find((l) => l.test(a));
function cg(a) {
  const l = Kb(a);
  if (lu(!!l, `'${a}' is not an animatable color. Use the equivalent color code instead.`, "color-not-animatable"), !l)
    return !1;
  let o = l.parse(a);
  return l === Qa && (o = Qb(o)), o;
}
const fg = (a, l) => {
  const o = cg(a), r = cg(l);
  if (!o || !r)
    return no(a, l);
  const c = { ...o };
  return (d) => (c.red = rf(o.red, r.red, d), c.green = rf(o.green, r.green, d), c.blue = rf(o.blue, r.blue, d), c.alpha = Vt(o.alpha, r.alpha, d), Fi.transform(c));
}, Af = /* @__PURE__ */ new Set(["none", "hidden"]);
function Jb(a, l) {
  return Af.has(a) ? (o) => o <= 0 ? a : l : (o) => o >= 1 ? l : a;
}
function Fb(a, l) {
  return (o) => Vt(a, l, o);
}
function ih(a) {
  return typeof a == "number" ? Fb : typeof a == "string" ? th(a) ? no : Ft.test(a) ? fg : Ib : Array.isArray(a) ? K0 : typeof a == "object" ? Ft.test(a) ? fg : Pb : no;
}
function K0(a, l) {
  const o = [...a], r = o.length, c = a.map((d, h) => ih(d)(d, l[h]));
  return (d) => {
    for (let h = 0; h < r; h++)
      o[h] = c[h](d);
    return o;
  };
}
function Pb(a, l) {
  const o = { ...a, ...l }, r = {};
  for (const c in o)
    a[c] !== void 0 && l[c] !== void 0 && (r[c] = ih(a[c])(a[c], l[c]));
  return (c) => {
    for (const d in r)
      o[d] = r[d](c);
    return o;
  };
}
function kb(a, l) {
  const o = [], r = { color: 0, var: 0, number: 0 };
  for (let c = 0; c < l.values.length; c++) {
    const d = l.types[c], h = a.indexes[d][r[d]], y = a.values[h] ?? 0;
    o[c] = y, r[d]++;
  }
  return o;
}
const Ib = (a, l) => {
  const o = un.createTransformer(l), r = Ja(a), c = Ja(l);
  return r.indexes.var.length === c.indexes.var.length && r.indexes.color.length === c.indexes.color.length && r.indexes.number.length >= c.indexes.number.length ? Af.has(a) && !c.values.length || Af.has(l) && !r.values.length ? Jb(a, l) : uu(K0(kb(r, c), c.values), o) : (lu(!0, `Complex values '${a}' and '${l}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`, "complex-values-different"), no(a, l));
};
function J0(a, l, o) {
  return typeof a == "number" && typeof l == "number" && typeof o == "number" ? Vt(a, l, o) : ih(a)(a, l);
}
const Wb = (a) => {
  const l = ({ timestamp: o }) => a(o);
  return {
    start: (o = !0) => wt.update(l, o),
    stop: () => Ti(l),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => he.isProcessing ? he.timestamp : Se.now()
  };
}, F0 = (a, l, o = 10) => {
  let r = "";
  const c = Math.max(Math.round(l / o), 2);
  for (let d = 0; d < c; d++)
    r += Math.round(a(d / (c - 1)) * 1e4) / 1e4 + ", ";
  return `linear(${r.substring(0, r.length - 2)})`;
}, io = 2e4;
function ah(a) {
  let l = 0;
  const o = 50;
  let r = a.next(l);
  for (; !r.done && l < io; )
    l += o, r = a.next(l);
  return l >= io ? 1 / 0 : l;
}
function $b(a, l = 100, o) {
  const r = o({ ...a, keyframes: [0, l] }), c = Math.min(ah(r), io);
  return {
    type: "keyframes",
    ease: (d) => r.next(c * d).value / l,
    duration: /* @__PURE__ */ Fe(c)
  };
}
const Yt = {
  // Default spring physics
  stiffness: 100,
  damping: 10,
  mass: 1,
  velocity: 0,
  // Default duration/bounce-based options
  duration: 800,
  // in ms
  bounce: 0.3,
  visualDuration: 0.3,
  // in seconds
  // Rest thresholds
  restSpeed: {
    granular: 0.01,
    default: 2
  },
  restDelta: {
    granular: 5e-3,
    default: 0.5
  },
  // Limits
  minDuration: 0.01,
  // in seconds
  maxDuration: 10,
  // in seconds
  minDamping: 0.05,
  maxDamping: 1
};
function xf(a, l) {
  return a * Math.sqrt(1 - l * l);
}
const tE = 12;
function eE(a, l, o) {
  let r = o;
  for (let c = 1; c < tE; c++)
    r = r - a(r) / l(r);
  return r;
}
const cf = 1e-3;
function nE({ duration: a = Yt.duration, bounce: l = Yt.bounce, velocity: o = Yt.velocity, mass: r = Yt.mass }) {
  let c, d;
  lu(a <= /* @__PURE__ */ De(Yt.maxDuration), "Spring duration must be 10 seconds or less", "spring-duration-limit");
  let h = 1 - l;
  h = xn(Yt.minDamping, Yt.maxDamping, h), a = xn(Yt.minDuration, Yt.maxDuration, /* @__PURE__ */ Fe(a)), h < 1 ? (c = (v) => {
    const g = v * h, p = g * a, b = g - o, N = xf(v, h), z = Math.exp(-p);
    return cf - b / N * z;
  }, d = (v) => {
    const p = v * h * a, b = p * o + o, N = Math.pow(h, 2) * Math.pow(v, 2) * a, z = Math.exp(-p), U = xf(Math.pow(v, 2), h);
    return (-c(v) + cf > 0 ? -1 : 1) * ((b - N) * z) / U;
  }) : (c = (v) => {
    const g = Math.exp(-v * a), p = (v - o) * a + 1;
    return -cf + g * p;
  }, d = (v) => {
    const g = Math.exp(-v * a), p = (o - v) * (a * a);
    return g * p;
  });
  const y = 5 / a, S = eE(c, d, y);
  if (a = /* @__PURE__ */ De(a), isNaN(S))
    return {
      stiffness: Yt.stiffness,
      damping: Yt.damping,
      duration: a
    };
  {
    const v = Math.pow(S, 2) * r;
    return {
      stiffness: v,
      damping: h * 2 * Math.sqrt(r * v),
      duration: a
    };
  }
}
const iE = ["duration", "bounce"], aE = ["stiffness", "damping", "mass"];
function hg(a, l) {
  return l.some((o) => a[o] !== void 0);
}
function lE(a) {
  let l = {
    velocity: Yt.velocity,
    stiffness: Yt.stiffness,
    damping: Yt.damping,
    mass: Yt.mass,
    isResolvedFromDuration: !1,
    ...a
  };
  if (!hg(a, aE) && hg(a, iE))
    if (l.velocity = 0, a.visualDuration) {
      const o = a.visualDuration, r = 2 * Math.PI / (o * 1.2), c = r * r, d = 2 * xn(0.05, 1, 1 - (a.bounce || 0)) * Math.sqrt(c);
      l = {
        ...l,
        mass: Yt.mass,
        stiffness: c,
        damping: d
      };
    } else {
      const o = nE({ ...a, velocity: 0 });
      l = {
        ...l,
        ...o,
        mass: Yt.mass
      }, l.isResolvedFromDuration = !0;
    }
  return l;
}
function ao(a = Yt.visualDuration, l = Yt.bounce) {
  const o = typeof a != "object" ? {
    visualDuration: a,
    keyframes: [0, 1],
    bounce: l
  } : a;
  let { restSpeed: r, restDelta: c } = o;
  const d = o.keyframes[0], h = o.keyframes[o.keyframes.length - 1], y = { done: !1, value: d }, { stiffness: S, damping: v, mass: g, duration: p, velocity: b, isResolvedFromDuration: N } = lE({
    ...o,
    velocity: -/* @__PURE__ */ Fe(o.velocity || 0)
  }), z = b || 0, U = v / (2 * Math.sqrt(S * g)), w = h - d, B = /* @__PURE__ */ Fe(Math.sqrt(S / g)), Y = Math.abs(w) < 5;
  r || (r = Y ? Yt.restSpeed.granular : Yt.restSpeed.default), c || (c = Y ? Yt.restDelta.granular : Yt.restDelta.default);
  let q, X, et, it, Z, H;
  if (U < 1)
    et = xf(B, U), it = (z + U * B * w) / et, q = (k) => {
      const mt = Math.exp(-U * B * k);
      return h - mt * (it * Math.sin(et * k) + w * Math.cos(et * k));
    }, Z = U * B * it + w * et, H = U * B * w - it * et, X = (k) => Math.exp(-U * B * k) * (Z * Math.sin(et * k) + H * Math.cos(et * k));
  else if (U === 1) {
    q = (mt) => h - Math.exp(-B * mt) * (w + (z + B * w) * mt);
    const k = z + B * w;
    X = (mt) => Math.exp(-B * mt) * (B * k * mt - z);
  } else {
    const k = B * Math.sqrt(U * U - 1);
    q = (Wt) => {
      const zt = Math.exp(-U * B * Wt), L = Math.min(k * Wt, 300);
      return h - zt * ((z + U * B * w) * Math.sinh(L) + k * w * Math.cosh(L)) / k;
    };
    const mt = (z + U * B * w) / k, At = U * B * mt - w * k, It = U * B * w - mt * k;
    X = (Wt) => {
      const zt = Math.exp(-U * B * Wt), L = Math.min(k * Wt, 300);
      return zt * (At * Math.sinh(L) + It * Math.cosh(L));
    };
  }
  const ut = {
    calculatedDuration: N && p || null,
    velocity: (k) => /* @__PURE__ */ De(X(k)),
    next: (k) => {
      if (!N && U < 1) {
        const At = Math.exp(-U * B * k), It = Math.sin(et * k), Wt = Math.cos(et * k), zt = h - At * (it * It + w * Wt), L = /* @__PURE__ */ De(At * (Z * It + H * Wt));
        return y.done = Math.abs(L) <= r && Math.abs(h - zt) <= c, y.value = y.done ? h : zt, y;
      }
      const mt = q(k);
      if (N)
        y.done = k >= p;
      else {
        const At = /* @__PURE__ */ De(X(k));
        y.done = Math.abs(At) <= r && Math.abs(h - mt) <= c;
      }
      return y.value = y.done ? h : mt, y;
    },
    toString: () => {
      const k = Math.min(ah(ut), io), mt = F0((At) => ut.next(k * At).value, k, 30);
      return k + "ms " + mt;
    },
    toTransition: () => {
    }
  };
  return ut;
}
ao.applyToOptions = (a) => {
  const l = $b(a, 100, ao);
  return a.ease = l.ease, a.duration = /* @__PURE__ */ De(l.duration), a.type = "keyframes", a;
};
const uE = 5;
function P0(a, l, o) {
  const r = Math.max(l - uE, 0);
  return /* @__PURE__ */ O0(o - a(r), l - r);
}
function Mf({ keyframes: a, velocity: l = 0, power: o = 0.8, timeConstant: r = 325, bounceDamping: c = 10, bounceStiffness: d = 500, modifyTarget: h, min: y, max: S, restDelta: v = 0.5, restSpeed: g }) {
  const p = a[0], b = {
    done: !1,
    value: p
  }, N = (H) => y !== void 0 && H < y || S !== void 0 && H > S, z = (H) => y === void 0 ? S : S === void 0 || Math.abs(y - H) < Math.abs(S - H) ? y : S;
  let U = o * l;
  const w = p + U, B = h === void 0 ? w : h(w);
  B !== w && (U = B - p);
  const Y = (H) => -U * Math.exp(-H / r), q = (H) => B + Y(H), X = (H) => {
    const ut = Y(H), k = q(H);
    b.done = Math.abs(ut) <= v, b.value = b.done ? B : k;
  };
  let et, it;
  const Z = (H) => {
    N(b.value) && (et = H, it = ao({
      keyframes: [b.value, z(b.value)],
      velocity: P0(q, H, b.value),
      // TODO: This should be passing * 1000
      damping: c,
      stiffness: d,
      restDelta: v,
      restSpeed: g
    }));
  };
  return Z(0), {
    calculatedDuration: null,
    next: (H) => {
      let ut = !1;
      return !it && et === void 0 && (ut = !0, X(H), Z(H)), et !== void 0 && H >= et ? it.next(H - et) : (!ut && X(H), b);
    }
  };
}
function sE(a, l, o) {
  const r = [], c = o || Si.mix || J0, d = a.length - 1;
  for (let h = 0; h < d; h++) {
    let y = c(a[h], a[h + 1]);
    if (l) {
      const S = Array.isArray(l) ? l[h] || Pe : l;
      y = uu(S, y);
    }
    r.push(y);
  }
  return r;
}
function oE(a, l, { clamp: o = !0, ease: r, mixer: c } = {}) {
  const d = a.length;
  if (vi(d === l.length, "Both input and output ranges must be the same length", "range-length"), d === 1)
    return () => l[0];
  if (d === 2 && l[0] === l[1])
    return () => l[1];
  const h = a[0] === a[1];
  a[0] > a[d - 1] && (a = [...a].reverse(), l = [...l].reverse());
  const y = sE(l, r, c), S = y.length, v = (g) => {
    if (h && g < a[0])
      return l[0];
    let p = 0;
    if (S > 1)
      for (; p < a.length - 2 && !(g < a[p + 1]); p++)
        ;
    const b = /* @__PURE__ */ eu(a[p], a[p + 1], g);
    return y[p](b);
  };
  return o ? (g) => v(xn(a[0], a[d - 1], g)) : v;
}
function rE(a, l) {
  const o = a[a.length - 1];
  for (let r = 1; r <= l; r++) {
    const c = /* @__PURE__ */ eu(0, l, r);
    a.push(Vt(o, 1, c));
  }
}
function cE(a) {
  const l = [0];
  return rE(l, a.length - 1), l;
}
function fE(a, l) {
  return a.map((o) => o * l);
}
function hE(a, l) {
  return a.map(() => l || j0).splice(0, a.length - 1);
}
function Il({ duration: a = 300, keyframes: l, times: o, ease: r = "easeInOut" }) {
  const c = /* @__PURE__ */ bb(r) ? r.map(ug) : ug(r), d = {
    done: !1,
    value: l[0]
  }, h = fE(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    o && o.length === l.length ? o : cE(l),
    a
  ), y = oE(h, l, {
    ease: Array.isArray(c) ? c : hE(l, c)
  });
  return {
    calculatedDuration: a,
    next: (S) => (d.value = y(S), d.done = S >= a, d)
  };
}
const dE = (a) => a !== null;
function mo(a, { repeat: l, repeatType: o = "loop" }, r, c = 1) {
  const d = a.filter(dE), y = c < 0 || l && o !== "loop" && l % 2 === 1 ? 0 : d.length - 1;
  return !y || r === void 0 ? d[y] : r;
}
const mE = {
  decay: Mf,
  inertia: Mf,
  tween: Il,
  keyframes: Il,
  spring: ao
};
function k0(a) {
  typeof a.type == "string" && (a.type = mE[a.type]);
}
class lh {
  constructor() {
    this.updateFinished();
  }
  get finished() {
    return this._finished;
  }
  updateFinished() {
    this._finished = new Promise((l) => {
      this.resolve = l;
    });
  }
  notifyFinished() {
    this.resolve();
  }
  /**
   * Allows the animation to be awaited.
   *
   * @deprecated Use `finished` instead.
   */
  then(l, o) {
    return this.finished.then(l, o);
  }
}
const yE = (a) => a / 100;
class lo extends lh {
  constructor(l) {
    super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.delayState = {
      done: !1,
      value: void 0
    }, this.stop = () => {
      const { motionValue: o } = this.options;
      o && o.updatedAt !== Se.now() && this.tick(Se.now()), this.isStopped = !0, this.state !== "idle" && (this.teardown(), this.options.onStop?.());
    }, this.options = l, this.initAnimation(), this.play(), l.autoplay === !1 && this.pause();
  }
  initAnimation() {
    const { options: l } = this;
    k0(l);
    const { type: o = Il, repeat: r = 0, repeatDelay: c = 0, repeatType: d, velocity: h = 0 } = l;
    let { keyframes: y } = l;
    const S = o || Il;
    S !== Il && typeof y[0] != "number" && (this.mixKeyframes = uu(yE, J0(y[0], y[1])), y = [0, 100]);
    const v = S({ ...l, keyframes: y });
    d === "mirror" && (this.mirroredGenerator = S({
      ...l,
      keyframes: [...y].reverse(),
      velocity: -h
    })), v.calculatedDuration === null && (v.calculatedDuration = ah(v));
    const { calculatedDuration: g } = v;
    this.calculatedDuration = g, this.resolvedDuration = g + c, this.totalDuration = this.resolvedDuration * (r + 1) - c, this.generator = v;
  }
  updateTime(l) {
    const o = Math.round(l - this.startTime) * this.playbackSpeed;
    this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = o;
  }
  tick(l, o = !1) {
    const { generator: r, totalDuration: c, mixKeyframes: d, mirroredGenerator: h, resolvedDuration: y, calculatedDuration: S } = this;
    if (this.startTime === null)
      return r.next(0);
    const { delay: v = 0, keyframes: g, repeat: p, repeatType: b, repeatDelay: N, type: z, onUpdate: U, finalKeyframe: w } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, l) : this.speed < 0 && (this.startTime = Math.min(l - c / this.speed, this.startTime)), o ? this.currentTime = l : this.updateTime(l);
    const B = this.currentTime - v * (this.playbackSpeed >= 0 ? 1 : -1), Y = this.playbackSpeed >= 0 ? B < 0 : B > c;
    this.currentTime = Math.max(B, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = c);
    let q = this.currentTime, X = r;
    if (p) {
      const H = Math.min(this.currentTime, c) / y;
      let ut = Math.floor(H), k = H % 1;
      !k && H >= 1 && (k = 1), k === 1 && ut--, ut = Math.min(ut, p + 1), !!(ut % 2) && (b === "reverse" ? (k = 1 - k, N && (k -= N / y)) : b === "mirror" && (X = h)), q = xn(0, 1, k) * y;
    }
    let et;
    Y ? (this.delayState.value = g[0], et = this.delayState) : et = X.next(q), d && !Y && (et.value = d(et.value));
    let { done: it } = et;
    !Y && S !== null && (it = this.playbackSpeed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
    const Z = this.holdTime === null && (this.state === "finished" || this.state === "running" && it);
    return Z && z !== Mf && (et.value = mo(g, this.options, w, this.speed)), U && U(et.value), Z && this.finish(), et;
  }
  /**
   * Allows the returned animation to be awaited or promise-chained. Currently
   * resolves when the animation finishes at all but in a future update could/should
   * reject if its cancels.
   */
  then(l, o) {
    return this.finished.then(l, o);
  }
  get duration() {
    return /* @__PURE__ */ Fe(this.calculatedDuration);
  }
  get iterationDuration() {
    const { delay: l = 0 } = this.options || {};
    return this.duration + /* @__PURE__ */ Fe(l);
  }
  get time() {
    return /* @__PURE__ */ Fe(this.currentTime);
  }
  set time(l) {
    l = /* @__PURE__ */ De(l), this.currentTime = l, this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = l : this.driver && (this.startTime = this.driver.now() - l / this.playbackSpeed), this.driver ? this.driver.start(!1) : (this.startTime = 0, this.state = "paused", this.holdTime = l, this.tick(l));
  }
  /**
   * Returns the generator's velocity at the current time in units/second.
   * Uses the analytical derivative when available (springs), avoiding
   * the MotionValue's frame-dependent velocity estimation.
   */
  getGeneratorVelocity() {
    const l = this.currentTime;
    if (l <= 0)
      return this.options.velocity || 0;
    if (this.generator.velocity)
      return this.generator.velocity(l);
    const o = this.generator.next(l).value;
    return P0((r) => this.generator.next(r).value, l, o);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(l) {
    const o = this.playbackSpeed !== l;
    o && this.driver && this.updateTime(Se.now()), this.playbackSpeed = l, o && this.driver && (this.time = /* @__PURE__ */ Fe(this.currentTime));
  }
  play() {
    if (this.isStopped)
      return;
    const { driver: l = Wb, startTime: o } = this.options;
    this.driver || (this.driver = l((c) => this.tick(c))), this.options.onPlay?.();
    const r = this.driver.now();
    this.state === "finished" ? (this.updateFinished(), this.startTime = r) : this.holdTime !== null ? this.startTime = r - this.holdTime : this.startTime || (this.startTime = o ?? r), this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start();
  }
  pause() {
    this.state = "paused", this.updateTime(Se.now()), this.holdTime = this.currentTime;
  }
  complete() {
    this.state !== "running" && this.play(), this.state = "finished", this.holdTime = null;
  }
  finish() {
    this.notifyFinished(), this.teardown(), this.state = "finished", this.options.onComplete?.();
  }
  cancel() {
    this.holdTime = null, this.startTime = 0, this.tick(0), this.teardown(), this.options.onCancel?.();
  }
  teardown() {
    this.state = "idle", this.stopDriver(), this.startTime = this.holdTime = null;
  }
  stopDriver() {
    this.driver && (this.driver.stop(), this.driver = void 0);
  }
  sample(l) {
    return this.startTime = 0, this.tick(l, !0);
  }
  attachTimeline(l) {
    return this.options.allowFlatten && (this.options.type = "keyframes", this.options.ease = "linear", this.initAnimation()), this.driver?.stop(), l.observe(this);
  }
}
function pE(a) {
  for (let l = 1; l < a.length; l++)
    a[l] ?? (a[l] = a[l - 1]);
}
const Pi = (a) => a * 180 / Math.PI, Cf = (a) => {
  const l = Pi(Math.atan2(a[1], a[0]));
  return Df(l);
}, gE = {
  x: 4,
  y: 5,
  translateX: 4,
  translateY: 5,
  scaleX: 0,
  scaleY: 3,
  scale: (a) => (Math.abs(a[0]) + Math.abs(a[3])) / 2,
  rotate: Cf,
  rotateZ: Cf,
  skewX: (a) => Pi(Math.atan(a[1])),
  skewY: (a) => Pi(Math.atan(a[2])),
  skew: (a) => (Math.abs(a[1]) + Math.abs(a[2])) / 2
}, Df = (a) => (a = a % 360, a < 0 && (a += 360), a), dg = Cf, mg = (a) => Math.sqrt(a[0] * a[0] + a[1] * a[1]), yg = (a) => Math.sqrt(a[4] * a[4] + a[5] * a[5]), vE = {
  x: 12,
  y: 13,
  z: 14,
  translateX: 12,
  translateY: 13,
  translateZ: 14,
  scaleX: mg,
  scaleY: yg,
  scale: (a) => (mg(a) + yg(a)) / 2,
  rotateX: (a) => Df(Pi(Math.atan2(a[6], a[5]))),
  rotateY: (a) => Df(Pi(Math.atan2(-a[2], a[0]))),
  rotateZ: dg,
  rotate: dg,
  skewX: (a) => Pi(Math.atan(a[4])),
  skewY: (a) => Pi(Math.atan(a[1])),
  skew: (a) => (Math.abs(a[1]) + Math.abs(a[4])) / 2
};
function Of(a) {
  return a.includes("scale") ? 1 : 0;
}
function Rf(a, l) {
  if (!a || a === "none")
    return Of(l);
  const o = a.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let r, c;
  if (o)
    r = vE, c = o;
  else {
    const y = a.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    r = gE, c = y;
  }
  if (!c)
    return Of(l);
  const d = r[l], h = c[1].split(",").map(TE);
  return typeof d == "function" ? d(h) : h[d];
}
const SE = (a, l) => {
  const { transform: o = "none" } = getComputedStyle(a);
  return Rf(o, l);
};
function TE(a) {
  return parseFloat(a.trim());
}
const ka = [
  "transformPerspective",
  "x",
  "y",
  "z",
  "translateX",
  "translateY",
  "translateZ",
  "scale",
  "scaleX",
  "scaleY",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "skew",
  "skewX",
  "skewY"
], Ia = /* @__PURE__ */ new Set([...ka, "pathRotation"]), pg = (a) => a === Pa || a === P, bE = /* @__PURE__ */ new Set(["x", "y", "z"]), EE = ka.filter((a) => !bE.has(a));
function AE(a) {
  const l = [];
  return EE.forEach((o) => {
    const r = a.getValue(o);
    r !== void 0 && (l.push([o, r.get()]), r.set(o.startsWith("scale") ? 1 : 0));
  }), l;
}
const gi = {
  // Dimensions
  width: ({ x: a }, { paddingLeft: l = "0", paddingRight: o = "0", boxSizing: r }) => {
    const c = a.max - a.min;
    return r === "border-box" ? c : c - parseFloat(l) - parseFloat(o);
  },
  height: ({ y: a }, { paddingTop: l = "0", paddingBottom: o = "0", boxSizing: r }) => {
    const c = a.max - a.min;
    return r === "border-box" ? c : c - parseFloat(l) - parseFloat(o);
  },
  top: (a, { top: l }) => parseFloat(l),
  left: (a, { left: l }) => parseFloat(l),
  bottom: ({ y: a }, { top: l }) => parseFloat(l) + (a.max - a.min),
  right: ({ x: a }, { left: l }) => parseFloat(l) + (a.max - a.min),
  // Transform
  x: (a, { transform: l }) => Rf(l, "x"),
  y: (a, { transform: l }) => Rf(l, "y")
};
gi.translateX = gi.x;
gi.translateY = gi.y;
const ki = /* @__PURE__ */ new Set();
let zf = !1, Nf = !1, _f = !1;
function I0() {
  if (Nf) {
    const a = Array.from(ki).filter((r) => r.needsMeasurement), l = new Set(a.map((r) => r.element)), o = /* @__PURE__ */ new Map();
    l.forEach((r) => {
      const c = AE(r);
      c.length && (o.set(r, c), r.render());
    }), a.forEach((r) => r.measureInitialState()), l.forEach((r) => {
      r.render();
      const c = o.get(r);
      c && c.forEach(([d, h]) => {
        r.getValue(d)?.set(h);
      });
    }), a.forEach((r) => r.measureEndState()), a.forEach((r) => {
      r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
    });
  }
  Nf = !1, zf = !1, ki.forEach((a) => a.complete(_f)), ki.clear();
}
function W0() {
  ki.forEach((a) => {
    a.readKeyframes(), a.needsMeasurement && (Nf = !0);
  });
}
function xE() {
  _f = !0, W0(), I0(), _f = !1;
}
class uh {
  constructor(l, o, r, c, d, h = !1) {
    this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...l], this.onComplete = o, this.name = r, this.motionValue = c, this.element = d, this.isAsync = h;
  }
  scheduleResolve() {
    this.state = "scheduled", this.isAsync ? (ki.add(this), zf || (zf = !0, wt.read(W0), wt.resolveKeyframes(I0))) : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const { unresolvedKeyframes: l, name: o, element: r, motionValue: c } = this;
    if (l[0] === null) {
      const d = c?.get(), h = l[l.length - 1];
      if (d !== void 0)
        l[0] = d;
      else if (r && o) {
        const y = r.readValue(o, h);
        y != null && (l[0] = y);
      }
      l[0] === void 0 && (l[0] = h), c && d === void 0 && c.set(l[0]);
    }
    pE(l);
  }
  setFinalKeyframe() {
  }
  measureInitialState() {
  }
  renderEndStyles() {
  }
  measureEndState() {
  }
  complete(l = !1) {
    this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, l), ki.delete(this);
  }
  cancel() {
    this.state === "scheduled" && (ki.delete(this), this.state = "pending");
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const ME = (a) => a.startsWith("--");
function $0(a, l, o) {
  ME(l) ? a.style.setProperty(l, o) : a.style[l] = o;
}
const CE = {};
function tv(a, l) {
  const o = /* @__PURE__ */ D0(a);
  return () => CE[l] ?? o();
}
const DE = /* @__PURE__ */ tv(() => window.ScrollTimeline !== void 0, "scrollTimeline"), ev = /* @__PURE__ */ tv(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing"), Pl = ([a, l, o, r]) => `cubic-bezier(${a}, ${l}, ${o}, ${r})`, gg = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: /* @__PURE__ */ Pl([0, 0.65, 0.55, 1]),
  circOut: /* @__PURE__ */ Pl([0.55, 0, 1, 0.45]),
  backIn: /* @__PURE__ */ Pl([0.31, 0.01, 0.66, -0.59]),
  backOut: /* @__PURE__ */ Pl([0.33, 1.53, 0.69, 0.99])
};
function nv(a, l) {
  if (a)
    return typeof a == "function" ? ev() ? F0(a, l) : "ease-out" : /* @__PURE__ */ H0(a) ? Pl(a) : Array.isArray(a) ? a.map((o) => nv(o, l) || gg.easeOut) : gg[a];
}
function OE(a, l, o, { delay: r = 0, duration: c = 300, repeat: d = 0, repeatType: h = "loop", ease: y = "easeOut", times: S } = {}, v = void 0) {
  const g = {
    [l]: o
  };
  S && (g.offset = S);
  const p = nv(y, c);
  Array.isArray(p) && (g.easing = p);
  const b = {
    delay: r,
    duration: c,
    easing: Array.isArray(p) ? "linear" : p,
    fill: "both",
    iterations: d + 1,
    direction: h === "reverse" ? "alternate" : "normal"
  };
  return v && (b.pseudoElement = v), a.animate(g, b);
}
function iv(a) {
  return typeof a == "function" && "applyToOptions" in a;
}
function RE({ type: a, ...l }) {
  return iv(a) && ev() ? a.applyToOptions(l) : (l.duration ?? (l.duration = 300), l.ease ?? (l.ease = "easeOut"), l);
}
class av extends lh {
  constructor(l) {
    if (super(), this.finishedTime = null, this.isStopped = !1, this.manualStartTime = null, !l)
      return;
    const { element: o, name: r, keyframes: c, pseudoElement: d, allowFlatten: h = !1, finalKeyframe: y, onComplete: S } = l;
    this.isPseudoElement = !!d, this.allowFlatten = h, this.options = l, vi(typeof l.type != "string", `Mini animate() doesn't support "type" as a string.`, "mini-spring");
    const v = RE(l);
    this.animation = OE(o, r, c, v, d), v.autoplay === !1 && this.animation.pause(), this.animation.onfinish = () => {
      if (this.finishedTime = this.time, !d) {
        const g = mo(c, this.options, y, this.speed);
        this.updateMotionValue && this.updateMotionValue(g), $0(o, r, g), this.animation.cancel();
      }
      S?.(), this.notifyFinished();
    };
  }
  play() {
    this.isStopped || (this.manualStartTime = null, this.animation.play(), this.state === "finished" && this.updateFinished());
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.finish?.();
  }
  cancel() {
    try {
      this.animation.cancel();
    } catch {
    }
  }
  stop() {
    if (this.isStopped)
      return;
    this.isStopped = !0;
    const { state: l } = this;
    l === "idle" || l === "finished" || (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(), this.isPseudoElement || this.cancel());
  }
  /**
   * WAAPI doesn't natively have any interruption capabilities.
   *
   * In this method, we commit styles back to the DOM before cancelling
   * the animation.
   *
   * This is designed to be overridden by NativeAnimationExtended, which
   * will create a renderless JS animation and sample it twice to calculate
   * its current value, "previous" value, and therefore allow
   * Motion to also correctly calculate velocity for any subsequent animation
   * while deferring the commit until the next animation frame.
   */
  commitStyles() {
    const l = this.options?.element;
    !this.isPseudoElement && l?.isConnected && this.animation.commitStyles?.();
  }
  get duration() {
    const l = this.animation.effect?.getComputedTiming?.().duration || 0;
    return /* @__PURE__ */ Fe(Number(l));
  }
  get iterationDuration() {
    const { delay: l = 0 } = this.options || {};
    return this.duration + /* @__PURE__ */ Fe(l);
  }
  get time() {
    return /* @__PURE__ */ Fe(Number(this.animation.currentTime) || 0);
  }
  set time(l) {
    const o = this.finishedTime !== null;
    this.manualStartTime = null, this.finishedTime = null, this.animation.currentTime = /* @__PURE__ */ De(l), o && this.animation.pause();
  }
  /**
   * The playback speed of the animation.
   * 1 = normal speed, 2 = double speed, 0.5 = half speed.
   */
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(l) {
    l < 0 && (this.finishedTime = null), this.animation.playbackRate = l;
  }
  get state() {
    return this.finishedTime !== null ? "finished" : this.animation.playState;
  }
  get startTime() {
    return this.manualStartTime ?? Number(this.animation.startTime);
  }
  set startTime(l) {
    this.manualStartTime = this.animation.startTime = l;
  }
  /**
   * Attaches a timeline to the animation, for instance the `ScrollTimeline`.
   */
  attachTimeline({ timeline: l, rangeStart: o, rangeEnd: r, observe: c }) {
    return this.allowFlatten && this.animation.effect?.updateTiming({ easing: "linear" }), this.animation.onfinish = null, l && DE() ? (this.animation.timeline = l, o && (this.animation.rangeStart = o), r && (this.animation.rangeEnd = r), Pe) : c(this);
  }
}
const lv = {
  anticipate: w0,
  backInOut: V0,
  circInOut: B0
};
function zE(a) {
  return a in lv;
}
function NE(a) {
  typeof a.ease == "string" && zE(a.ease) && (a.ease = lv[a.ease]);
}
const ff = 10;
class _E extends av {
  constructor(l) {
    NE(l), k0(l), super(l), l.startTime !== void 0 && l.autoplay !== !1 && (this.startTime = l.startTime), this.options = l;
  }
  /**
   * WAAPI doesn't natively have any interruption capabilities.
   *
   * Rather than read committed styles back out of the DOM, we can
   * create a renderless JS animation and sample it twice to calculate
   * its current value, "previous" value, and therefore allow
   * Motion to calculate velocity for any subsequent animation.
   */
  updateMotionValue(l) {
    const { motionValue: o, onUpdate: r, onComplete: c, element: d, ...h } = this.options;
    if (!o)
      return;
    if (l !== void 0) {
      o.set(l);
      return;
    }
    const y = new lo({
      ...h,
      autoplay: !1
    }), S = Math.max(ff, Se.now() - this.startTime), v = xn(0, ff, S - ff), g = y.sample(S).value, { name: p } = this.options;
    d && p && $0(d, p, g), o.setWithVelocity(y.sample(Math.max(0, S - v)).value, g, v), y.stop();
  }
}
const vg = (a, l) => l === "zIndex" ? !1 : !!(typeof a == "number" || Array.isArray(a) || typeof a == "string" && // It's animatable if we have a string
(un.test(a) || a === "0") && // And it contains numbers and/or colors
!a.startsWith("url("));
function VE(a) {
  const l = a[0];
  if (a.length === 1)
    return !0;
  for (let o = 0; o < a.length; o++)
    if (a[o] !== l)
      return !0;
}
function wE(a, l, o, r) {
  const c = a[0];
  if (c === null)
    return !1;
  if (l === "display" || l === "visibility")
    return !0;
  const d = a[a.length - 1], h = vg(c, l), y = vg(d, l);
  return lu(h === y, `You are trying to animate ${l} from "${c}" to "${d}". "${h ? d : c}" is not an animatable value.`, "value-not-animatable"), !h || !y ? !1 : VE(a) || (o === "spring" || iv(o)) && r;
}
function Vf(a) {
  a.duration = 0, a.type = "keyframes";
}
const uv = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform",
  "backgroundColor"
]), UE = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;
function BE(a) {
  for (let l = 0; l < a.length; l++)
    if (typeof a[l] == "string" && UE.test(a[l]))
      return !0;
  return !1;
}
const jE = /* @__PURE__ */ new Set([
  "color",
  "backgroundColor",
  "outlineColor",
  "fill",
  "stroke",
  "borderColor",
  "borderTopColor",
  "borderRightColor",
  "borderBottomColor",
  "borderLeftColor"
]), HE = /* @__PURE__ */ D0(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function LE(a) {
  const { motionValue: l, name: o, repeatDelay: r, repeatType: c, damping: d, type: h, keyframes: y } = a, S = l?.owner?.current;
  if (!(S instanceof HTMLElement) && !(S instanceof SVGElement))
    return !1;
  const { onUpdate: v, transformTemplate: g } = l.owner.getProps();
  return HE() && o && /**
   * Force WAAPI for color properties with browser-only color formats
   * (oklch, oklab, lab, lch, etc.) that the JS animation path can't parse.
   */
  (uv.has(o) || jE.has(o) && BE(y)) && (o !== "transform" || !g) && /**
   * If we're outputting values to onUpdate then we can't use WAAPI as there's
   * no way to read the value from WAAPI every frame.
   */
  !v && !r && c !== "mirror" && d !== 0 && h !== "inertia";
}
const YE = 40;
class qE extends lh {
  constructor({ autoplay: l = !0, delay: o = 0, type: r = "keyframes", repeat: c = 0, repeatDelay: d = 0, repeatType: h = "loop", keyframes: y, name: S, motionValue: v, element: g, ...p }) {
    super(), this.stop = () => {
      this._animation && (this._animation.stop(), this.stopTimeline?.()), this.keyframeResolver?.cancel();
    }, this.createdAt = Se.now();
    const b = {
      autoplay: l,
      delay: o,
      type: r,
      repeat: c,
      repeatDelay: d,
      repeatType: h,
      name: S,
      motionValue: v,
      element: g,
      ...p
    }, N = g?.KeyframeResolver || uh;
    this.keyframeResolver = new N(y, (z, U, w) => this.onKeyframesResolved(z, U, b, !w), S, v, g), this.keyframeResolver?.scheduleResolve();
  }
  onKeyframesResolved(l, o, r, c) {
    this.keyframeResolver = void 0;
    const { name: d, type: h, velocity: y, delay: S, isHandoff: v, onUpdate: g } = r;
    this.resolvedAt = Se.now();
    let p = !0;
    wE(l, d, h, y) || (p = !1, (Si.instantAnimations || !S) && g?.(mo(l, r, o)), l[0] = l[l.length - 1], Vf(r), r.repeat = 0);
    const N = {
      startTime: c ? this.resolvedAt ? this.resolvedAt - this.createdAt > YE ? this.resolvedAt : this.createdAt : this.createdAt : void 0,
      finalKeyframe: o,
      ...r,
      keyframes: l
    }, z = p && !v && LE(N), U = N.motionValue?.owner?.current;
    let w;
    if (z)
      try {
        w = new _E({
          ...N,
          element: U
        });
      } catch {
        w = new lo(N);
      }
    else
      w = new lo(N);
    w.finished.then(() => {
      this.notifyFinished();
    }).catch(Pe), this.pendingTimeline && (this.stopTimeline = w.attachTimeline(this.pendingTimeline), this.pendingTimeline = void 0), this._animation = w;
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(l, o) {
    return this.finished.finally(l).then(() => {
    });
  }
  get animation() {
    return this._animation || (this.keyframeResolver?.resume(), xE()), this._animation;
  }
  get duration() {
    return this.animation.duration;
  }
  get iterationDuration() {
    return this.animation.iterationDuration;
  }
  get time() {
    return this.animation.time;
  }
  set time(l) {
    this.animation.time = l;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(l) {
    this.animation.speed = l;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(l) {
    return this._animation ? this.stopTimeline = this.animation.attachTimeline(l) : this.pendingTimeline = l, () => this.stop();
  }
  play() {
    this.animation.play();
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.complete();
  }
  cancel() {
    this._animation && this.animation.cancel(), this.keyframeResolver?.cancel();
  }
}
function sv(a, l, o, r = 0, c = 1) {
  const d = Array.from(a).sort((v, g) => v.sortNodePosition(g)).indexOf(l), h = a.size, y = (h - 1) * r;
  return typeof o == "function" ? o(d, h) : c === 1 ? d * r : y - d * r;
}
const Sg = 30, GE = (a) => !isNaN(parseFloat(a));
class XE {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   */
  constructor(l, o = {}) {
    this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (r) => {
      const c = Se.now();
      if (this.updatedAt !== c && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(r), this.current !== this.prev && (this.events.change?.notify(this.current), this.dependents))
        for (const d of this.dependents)
          d.dirty();
    }, this.hasAnimated = !1, this.setCurrent(l), this.owner = o.owner;
  }
  setCurrent(l) {
    this.current = l, this.updatedAt = Se.now(), this.canTrackVelocity === null && l !== void 0 && (this.canTrackVelocity = GE(this.current));
  }
  setPrevFrameValue(l = this.current) {
    this.prevFrameValue = l, this.prevUpdatedAt = this.updatedAt;
  }
  /**
   * Adds a function that will be notified when the `MotionValue` is updated.
   *
   * It returns a function that, when called, will cancel the subscription.
   *
   * When calling `onChange` inside a React component, it should be wrapped with the
   * `useEffect` hook. As it returns an unsubscribe function, this should be returned
   * from the `useEffect` function to ensure you don't add duplicate subscribers..
   *
   * ```jsx
   * export const MyComponent = () => {
   *   const x = useMotionValue(0)
   *   const y = useMotionValue(0)
   *   const opacity = useMotionValue(1)
   *
   *   useEffect(() => {
   *     function updateOpacity() {
   *       const maxXY = Math.max(x.get(), y.get())
   *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
   *       opacity.set(newOpacity)
   *     }
   *
   *     const unsubscribeX = x.on("change", updateOpacity)
   *     const unsubscribeY = y.on("change", updateOpacity)
   *
   *     return () => {
   *       unsubscribeX()
   *       unsubscribeY()
   *     }
   *   }, [])
   *
   *   return <motion.div style={{ x }} />
   * }
   * ```
   *
   * @param subscriber - A function that receives the latest value.
   * @returns A function that, when called, will cancel this subscription.
   *
   * @deprecated
   */
  onChange(l) {
    return this.on("change", l);
  }
  on(l, o) {
    this.events[l] || (this.events[l] = new If());
    const r = this.events[l].add(o);
    return l === "change" ? () => {
      r(), wt.read(() => {
        this.events.change.getSize() || this.stop();
      });
    } : r;
  }
  clearListeners() {
    for (const l in this.events)
      this.events[l].clear();
  }
  /**
   * Attaches a passive effect to the `MotionValue`.
   */
  attach(l, o) {
    this.passiveEffect = l, this.stopPassiveEffect = o;
  }
  /**
   * Sets the state of the `MotionValue`.
   *
   * @remarks
   *
   * ```jsx
   * const x = useMotionValue(0)
   * x.set(10)
   * ```
   *
   * @param latest - Latest value to set.
   * @param render - Whether to notify render subscribers. Defaults to `true`
   *
   * @public
   */
  set(l) {
    this.passiveEffect ? this.passiveEffect(l, this.updateAndNotify) : this.updateAndNotify(l);
  }
  setWithVelocity(l, o, r) {
    this.set(o), this.prev = void 0, this.prevFrameValue = l, this.prevUpdatedAt = this.updatedAt - r;
  }
  /**
   * Set the state of the `MotionValue`, stopping any active animations,
   * effects, and resets velocity to `0`.
   */
  jump(l, o = !0) {
    this.updateAndNotify(l), this.prev = l, this.prevUpdatedAt = this.prevFrameValue = void 0, o && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
  dirty() {
    this.events.change?.notify(this.current);
  }
  addDependent(l) {
    this.dependents || (this.dependents = /* @__PURE__ */ new Set()), this.dependents.add(l);
  }
  removeDependent(l) {
    this.dependents && this.dependents.delete(l);
  }
  /**
   * Returns the latest state of `MotionValue`
   *
   * @returns - The latest state of `MotionValue`
   *
   * @public
   */
  get() {
    return this.current;
  }
  /**
   * @public
   */
  getPrevious() {
    return this.prev;
  }
  /**
   * Returns the latest velocity of `MotionValue`
   *
   * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
   *
   * @public
   */
  getVelocity() {
    const l = Se.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || l - this.updatedAt > Sg)
      return 0;
    const o = Math.min(this.updatedAt - this.prevUpdatedAt, Sg);
    return /* @__PURE__ */ O0(parseFloat(this.current) - parseFloat(this.prevFrameValue), o);
  }
  /**
   * Registers a new animation to control this `MotionValue`. Only one
   * animation can drive a `MotionValue` at one time.
   *
   * ```jsx
   * value.start()
   * ```
   *
   * @param animation - A function that starts the provided animation
   */
  start(l) {
    return this.stop(), new Promise((o) => {
      this.hasAnimated = !0, this.animation = l(o), this.events.animationStart && this.events.animationStart.notify();
    }).then(() => {
      this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
    });
  }
  /**
   * Stop the currently active animation.
   *
   * @public
   */
  stop() {
    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
  }
  /**
   * Returns `true` if this value is currently animating.
   *
   * @public
   */
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  /**
   * Destroy and clean up subscribers to this `MotionValue`.
   *
   * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
   * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
   * created a `MotionValue` via the `motionValue` function.
   *
   * @public
   */
  destroy() {
    this.dependents?.clear(), this.events.destroy?.notify(), this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function Fa(a, l) {
  return new XE(a, l);
}
function ov(a, l) {
  if (a?.inherit && l) {
    const { inherit: o, ...r } = a;
    return { ...l, ...r };
  }
  return a;
}
function sh(a, l) {
  const o = a?.[l] ?? a?.default ?? a;
  return o !== a ? ov(o, a) : o;
}
const QE = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, ZE = (a) => ({
  type: "spring",
  stiffness: 550,
  damping: a === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), KE = {
  type: "keyframes",
  duration: 0.8
}, JE = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, FE = (a, { keyframes: l }) => l.length > 2 ? KE : Ia.has(a) ? a.startsWith("scale") ? ZE(l[1]) : QE : JE, PE = /* @__PURE__ */ new Set([
  "when",
  "delay",
  "delayChildren",
  "staggerChildren",
  "staggerDirection",
  "repeat",
  "repeatType",
  "repeatDelay",
  "from",
  "elapsed"
]);
function kE(a) {
  for (const l in a)
    if (!PE.has(l))
      return !0;
  return !1;
}
const oh = (a, l, o, r = {}, c, d) => (h) => {
  const y = sh(r, a) || {}, S = y.delay || r.delay || 0;
  let { elapsed: v = 0 } = r;
  v = v - /* @__PURE__ */ De(S);
  const g = {
    keyframes: Array.isArray(o) ? o : [null, o],
    ease: "easeOut",
    velocity: l.getVelocity(),
    ...y,
    delay: -v,
    onUpdate: (b) => {
      l.set(b), y.onUpdate && y.onUpdate(b);
    },
    onComplete: () => {
      h(), y.onComplete && y.onComplete();
    },
    name: a,
    motionValue: l,
    element: d ? void 0 : c
  };
  kE(y) || Object.assign(g, FE(a, g)), g.duration && (g.duration = /* @__PURE__ */ De(g.duration)), g.repeatDelay && (g.repeatDelay = /* @__PURE__ */ De(g.repeatDelay)), g.from !== void 0 && (g.keyframes[0] = g.from);
  let p = !1;
  if ((g.type === !1 || g.duration === 0 && !g.repeatDelay) && (Vf(g), g.delay === 0 && (p = !0)), (Si.instantAnimations || Si.skipAnimations || c?.shouldSkipAnimations || y.skipAnimations) && (p = !0, Vf(g), g.delay = 0), g.allowFlatten = !y.type && !y.ease, p && !d && l.get() !== void 0) {
    const b = mo(g.keyframes, y);
    if (b !== void 0) {
      wt.update(() => {
        g.onUpdate(b), g.onComplete();
      });
      return;
    }
  }
  return y.isSync ? new lo(g) : new qE(g);
}, IE = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function WE(a) {
  const l = IE.exec(a);
  if (!l)
    return [,];
  const [, o, r, c] = l;
  return [`--${o ?? r}`, c];
}
const $E = 4;
function rv(a, l, o = 1) {
  vi(o <= $E, `Max CSS variable fallback depth detected in property "${a}". This may indicate a circular fallback dependency.`, "max-css-var-depth");
  const [r, c] = WE(a);
  if (!r)
    return;
  const d = window.getComputedStyle(l).getPropertyValue(r);
  if (d) {
    const h = d.trim();
    return x0(h) ? parseFloat(h) : h;
  }
  return th(c) ? rv(c, l, o + 1) : c;
}
function Tg(a) {
  const l = [{}, {}];
  return a?.values.forEach((o, r) => {
    l[0][r] = o.get(), l[1][r] = o.getVelocity();
  }), l;
}
function rh(a, l, o, r) {
  if (typeof l == "function") {
    const [c, d] = Tg(r);
    l = l(o !== void 0 ? o : a.custom, c, d);
  }
  if (typeof l == "string" && (l = a.variants && a.variants[l]), typeof l == "function") {
    const [c, d] = Tg(r);
    l = l(o !== void 0 ? o : a.custom, c, d);
  }
  return l;
}
function Ii(a, l, o) {
  const r = a.getProps();
  return rh(r, l, o !== void 0 ? o : r.custom, a);
}
const cv = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...ka
]), wf = (a) => Array.isArray(a);
function tA(a, l, o) {
  a.hasValue(l) ? a.getValue(l).set(o) : a.addValue(l, Fa(o));
}
function eA(a) {
  return wf(a) ? a[a.length - 1] || 0 : a;
}
function nA(a, l) {
  const o = Ii(a, l);
  let { transitionEnd: r = {}, transition: c = {}, ...d } = o || {};
  d = { ...d, ...r };
  for (const h in d) {
    const y = eA(d[h]);
    tA(a, h, y);
  }
}
const de = (a) => !!(a && a.getVelocity);
function iA(a) {
  return !!(de(a) && a.add);
}
function Uf(a, l) {
  const o = a.getValue("willChange");
  if (iA(o))
    return o.add(l);
  if (!o && Si.WillChange) {
    const r = new Si.WillChange("auto");
    a.addValue("willChange", r), r.add(l);
  }
}
function ch(a) {
  return a.replace(/([A-Z])/g, (l) => `-${l.toLowerCase()}`);
}
const aA = "framerAppearId", fv = "data-" + ch(aA);
function hv(a) {
  return a.props[fv];
}
function lA({ protectedKeys: a, needsAnimating: l }, o) {
  const r = a.hasOwnProperty(o) && l[o] !== !0;
  return l[o] = !1, r;
}
function dv(a, l, { delay: o = 0, transitionOverride: r, type: c } = {}) {
  let { transition: d, transitionEnd: h, ...y } = l;
  const S = a.getDefaultTransition();
  d = d ? ov(d, S) : S;
  const v = d?.reduceMotion, g = d?.skipAnimations;
  r && (d = r);
  const p = [], b = c && a.animationState && a.animationState.getState()[c], N = d?.path;
  N && N.animateVisualElement(a, y, d, o, p);
  for (const z in y) {
    const U = a.getValue(z, a.latestValues[z] ?? null), w = y[z];
    if (w === void 0 || b && lA(b, z))
      continue;
    const B = {
      delay: o,
      ...sh(d || {}, z)
    };
    g && (B.skipAnimations = !0);
    const Y = U.get();
    if (Y !== void 0 && !U.isAnimating() && !Array.isArray(w) && w === Y && !B.velocity) {
      wt.update(() => U.set(w));
      continue;
    }
    let q = !1;
    if (window.MotionHandoffAnimation) {
      const it = hv(a);
      if (it) {
        const Z = window.MotionHandoffAnimation(it, z, wt);
        Z !== null && (B.startTime = Z, q = !0);
      }
    }
    Uf(a, z);
    const X = v ?? a.shouldReduceMotion;
    U.start(oh(z, U, w, X && cv.has(z) ? { type: !1 } : B, a, q));
    const et = U.animation;
    et && p.push(et);
  }
  if (h) {
    const z = () => wt.update(() => {
      h && nA(a, h);
    });
    p.length ? Promise.all(p).then(z) : z();
  }
  return p;
}
function Bf(a, l, o = {}) {
  const r = Ii(a, l, o.type === "exit" ? a.presenceContext?.custom : void 0);
  let { transition: c = a.getDefaultTransition() || {} } = r || {};
  o.transitionOverride && (c = o.transitionOverride);
  const d = r ? () => Promise.all(dv(a, r, o)) : () => Promise.resolve(), h = a.variantChildren && a.variantChildren.size ? (S = 0) => {
    const { delayChildren: v = 0, staggerChildren: g, staggerDirection: p } = c;
    return uA(a, l, S, v, g, p, o);
  } : () => Promise.resolve(), { when: y } = c;
  if (y) {
    const [S, v] = y === "beforeChildren" ? [d, h] : [h, d];
    return S().then(() => v());
  } else
    return Promise.all([d(), h(o.delay)]);
}
function uA(a, l, o = 0, r = 0, c = 0, d = 1, h) {
  const y = [];
  for (const S of a.variantChildren)
    S.notify("AnimationStart", l), y.push(Bf(S, l, {
      ...h,
      delay: o + (typeof r == "function" ? 0 : r) + sv(a.variantChildren, S, r, c, d)
    }).then(() => S.notify("AnimationComplete", l)));
  return Promise.all(y);
}
function sA(a, l, o = {}) {
  a.notify("AnimationStart", l);
  let r;
  if (Array.isArray(l)) {
    const c = l.map((d) => Bf(a, d, o));
    r = Promise.all(c);
  } else if (typeof l == "string")
    r = Bf(a, l, o);
  else {
    const c = typeof l == "function" ? Ii(a, l, o.custom) : l;
    r = Promise.all(dv(a, c, o));
  }
  return r.then(() => {
    a.notify("AnimationComplete", l);
  });
}
const oA = {
  test: (a) => a === "auto",
  parse: (a) => a
}, mv = (a) => (l) => l.test(a), yv = [Pa, P, An, qn, Vb, _b, oA], bg = (a) => yv.find(mv(a));
function rA(a) {
  return typeof a == "number" ? a === 0 : a !== null ? a === "none" || a === "0" || C0(a) : !0;
}
const cA = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function fA(a) {
  const [l, o] = a.slice(0, -1).split("(");
  if (l === "drop-shadow")
    return a;
  const [r] = o.match(eh) || [];
  if (!r)
    return a;
  const c = o.replace(r, "");
  let d = cA.has(l) ? 1 : 0;
  return r !== o && (d *= 100), l + "(" + d + c + ")";
}
const hA = /\b([a-z-]*)\(.*?\)/gu, jf = {
  ...un,
  getAnimatableNone: (a) => {
    const l = a.match(hA);
    return l ? l.map(fA).join(" ") : a;
  }
}, Hf = {
  ...un,
  getAnimatableNone: (a) => {
    const l = un.parse(a);
    return un.createTransformer(a)(l.map((r) => typeof r == "number" ? 0 : typeof r == "object" ? { ...r, alpha: 1 } : r));
  }
}, Eg = {
  ...Pa,
  transform: Math.round
}, dA = {
  rotate: qn,
  /**
   * Internal channel for `transition.path` orientToPath. Composed onto
   * `rotate` at the transform-build sites so the user's `rotate` is
   * never read or overwritten. Not part of `transformPropOrder`.
   */
  pathRotation: qn,
  rotateX: qn,
  rotateY: qn,
  rotateZ: qn,
  scale: qs,
  scaleX: qs,
  scaleY: qs,
  scaleZ: qs,
  skew: qn,
  skewX: qn,
  skewY: qn,
  distance: P,
  translateX: P,
  translateY: P,
  translateZ: P,
  x: P,
  y: P,
  z: P,
  perspective: P,
  transformPerspective: P,
  opacity: nu,
  originX: og,
  originY: og,
  originZ: P
}, uo = {
  // Border props
  borderWidth: P,
  borderTopWidth: P,
  borderRightWidth: P,
  borderBottomWidth: P,
  borderLeftWidth: P,
  borderRadius: P,
  borderTopLeftRadius: P,
  borderTopRightRadius: P,
  borderBottomRightRadius: P,
  borderBottomLeftRadius: P,
  // Positioning props
  width: P,
  maxWidth: P,
  height: P,
  maxHeight: P,
  top: P,
  right: P,
  bottom: P,
  left: P,
  inset: P,
  insetBlock: P,
  insetBlockStart: P,
  insetBlockEnd: P,
  insetInline: P,
  insetInlineStart: P,
  insetInlineEnd: P,
  // Spacing props
  padding: P,
  paddingTop: P,
  paddingRight: P,
  paddingBottom: P,
  paddingLeft: P,
  paddingBlock: P,
  paddingBlockStart: P,
  paddingBlockEnd: P,
  paddingInline: P,
  paddingInlineStart: P,
  paddingInlineEnd: P,
  margin: P,
  marginTop: P,
  marginRight: P,
  marginBottom: P,
  marginLeft: P,
  marginBlock: P,
  marginBlockStart: P,
  marginBlockEnd: P,
  marginInline: P,
  marginInlineStart: P,
  marginInlineEnd: P,
  // Typography
  fontSize: P,
  // Misc
  backgroundPositionX: P,
  backgroundPositionY: P,
  ...dA,
  zIndex: Eg,
  // SVG
  fillOpacity: nu,
  strokeOpacity: nu,
  numOctaves: Eg
}, mA = {
  ...uo,
  // Color props
  color: Ft,
  backgroundColor: Ft,
  outlineColor: Ft,
  fill: Ft,
  stroke: Ft,
  // Border props
  borderColor: Ft,
  borderTopColor: Ft,
  borderRightColor: Ft,
  borderBottomColor: Ft,
  borderLeftColor: Ft,
  filter: jf,
  WebkitFilter: jf,
  mask: Hf,
  WebkitMask: Hf
}, pv = (a) => mA[a], yA = /* @__PURE__ */ new Set([jf, Hf]);
function gv(a, l) {
  let o = pv(a);
  return yA.has(o) || (o = un), o.getAnimatableNone ? o.getAnimatableNone(l) : void 0;
}
const pA = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function gA(a, l, o) {
  let r = 0, c;
  for (; r < a.length && !c; ) {
    const d = a[r];
    typeof d == "string" && !pA.has(d) && Ja(d).values.length && (c = a[r]), r++;
  }
  if (c && o)
    for (const d of l)
      a[d] = gv(o, c);
}
class vA extends uh {
  constructor(l, o, r, c, d) {
    super(l, o, r, c, d, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: l, element: o, name: r } = this;
    if (!o || !o.current)
      return;
    super.readKeyframes();
    for (let g = 0; g < l.length; g++) {
      let p = l[g];
      if (typeof p == "string" && (p = p.trim(), th(p))) {
        const b = rv(p, o.current);
        b !== void 0 && (l[g] = b), g === l.length - 1 && (this.finalKeyframe = p);
      }
    }
    if (this.resolveNoneKeyframes(), !cv.has(r) || l.length !== 2)
      return;
    const [c, d] = l, h = bg(c), y = bg(d), S = sg(c), v = sg(d);
    if (S !== v && gi[r]) {
      this.needsMeasurement = !0;
      return;
    }
    if (h !== y)
      if (pg(h) && pg(y))
        for (let g = 0; g < l.length; g++) {
          const p = l[g];
          typeof p == "string" && (l[g] = parseFloat(p));
        }
      else gi[r] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: l, name: o } = this, r = [];
    for (let c = 0; c < l.length; c++)
      (l[c] === null || rA(l[c])) && r.push(c);
    r.length && gA(l, r, o);
  }
  measureInitialState() {
    const { element: l, unresolvedKeyframes: o, name: r } = this;
    if (!l || !l.current)
      return;
    r === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = gi[r](l.measureViewportBox(), window.getComputedStyle(l.current)), o[0] = this.measuredOrigin;
    const c = o[o.length - 1];
    c !== void 0 && l.getValue(r, c).jump(c, !1);
  }
  measureEndState() {
    const { element: l, name: o, unresolvedKeyframes: r } = this;
    if (!l || !l.current)
      return;
    const c = l.getValue(o);
    c && c.jump(this.measuredOrigin, !1);
    const d = r.length - 1, h = r[d];
    r[d] = gi[o](l.measureViewportBox(), window.getComputedStyle(l.current)), h !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = h), this.removedTransforms?.length && this.removedTransforms.forEach(([y, S]) => {
      l.getValue(y).set(S);
    }), this.resolveNoneKeyframes();
  }
}
const fh = [
  "borderTopLeftRadius",
  "borderTopRightRadius",
  "borderBottomRightRadius",
  "borderBottomLeftRadius"
];
function hh(a, l, o) {
  if (a == null)
    return [];
  if (a instanceof EventTarget)
    return [a];
  if (typeof a == "string") {
    const c = document.querySelectorAll(a);
    return c ? Array.from(c) : [];
  }
  return Array.from(a).filter((r) => r != null);
}
const Lf = (a, l) => l && typeof a == "number" ? l.transform(a) : a;
function Js(a) {
  return M0(a) && "offsetHeight" in a && !("ownerSVGElement" in a);
}
const { schedule: dh } = /* @__PURE__ */ L0(queueMicrotask, !1), ln = {
  x: !1,
  y: !1
};
function vv() {
  return ln.x || ln.y;
}
function SA(a) {
  return a === "x" || a === "y" ? ln[a] ? null : (ln[a] = !0, () => {
    ln[a] = !1;
  }) : ln.x || ln.y ? null : (ln.x = ln.y = !0, () => {
    ln.x = ln.y = !1;
  });
}
function Sv(a, l) {
  const o = hh(a), r = new AbortController(), c = {
    passive: !0,
    ...l,
    signal: r.signal
  };
  return [o, c, () => r.abort()];
}
function TA(a) {
  return !(a.pointerType === "touch" || vv());
}
function bA(a, l, o = {}) {
  const [r, c, d] = Sv(a, o);
  return r.forEach((h) => {
    let y = !1, S = !1, v;
    const g = () => {
      h.removeEventListener("pointerleave", z);
    }, p = (w) => {
      v && (v(w), v = void 0), g();
    }, b = (w) => {
      y = !1, window.removeEventListener("pointerup", b), window.removeEventListener("pointercancel", b), S && (S = !1, p(w));
    }, N = () => {
      y = !0, window.addEventListener("pointerup", b, c), window.addEventListener("pointercancel", b, c);
    }, z = (w) => {
      if (w.pointerType !== "touch") {
        if (y) {
          S = !0;
          return;
        }
        p(w);
      }
    }, U = (w) => {
      if (!TA(w))
        return;
      S = !1;
      const B = l(h, w);
      typeof B == "function" && (v = B, h.addEventListener("pointerleave", z, c));
    };
    h.addEventListener("pointerenter", U, c), h.addEventListener("pointerdown", N, c);
  }), d;
}
const Tv = (a, l) => l ? a === l ? !0 : Tv(a, l.parentElement) : !1, mh = (a) => a.pointerType === "mouse" ? typeof a.button != "number" || a.button <= 0 : a.isPrimary !== !1, EA = /* @__PURE__ */ new Set([
  "BUTTON",
  "INPUT",
  "SELECT",
  "TEXTAREA",
  "A"
]);
function AA(a) {
  return EA.has(a.tagName) || a.isContentEditable === !0;
}
const xA = /* @__PURE__ */ new Set(["INPUT", "SELECT", "TEXTAREA"]);
function MA(a) {
  return xA.has(a.tagName) || a.isContentEditable === !0;
}
const Fs = /* @__PURE__ */ new WeakSet();
function Ag(a) {
  return (l) => {
    l.key === "Enter" && a(l);
  };
}
function hf(a, l) {
  a.dispatchEvent(new PointerEvent("pointer" + l, { isPrimary: !0, bubbles: !0 }));
}
const CA = (a, l) => {
  const o = a.currentTarget;
  if (!o)
    return;
  const r = Ag(() => {
    if (Fs.has(o))
      return;
    hf(o, "down");
    const c = Ag(() => {
      hf(o, "up");
    }), d = () => hf(o, "cancel");
    o.addEventListener("keyup", c, l), o.addEventListener("blur", d, l);
  });
  o.addEventListener("keydown", r, l), o.addEventListener("blur", () => o.removeEventListener("keydown", r), l);
};
function xg(a) {
  return mh(a) && !vv();
}
const Mg = /* @__PURE__ */ new WeakSet();
function DA(a, l, o = {}) {
  const [r, c, d] = Sv(a, o), h = (y) => {
    const S = y.currentTarget;
    if (!xg(y) || Mg.has(y))
      return;
    Fs.add(S), o.stopPropagation && Mg.add(y);
    const v = l(S, y), g = { ...c, capture: !0 }, p = (z, U) => {
      window.removeEventListener("pointerup", b, g), window.removeEventListener("pointercancel", N, g), Fs.has(S) && Fs.delete(S), xg(z) && typeof v == "function" && v(z, { success: U });
    }, b = (z) => {
      p(z, S === window || S === document || o.useGlobalTarget || Tv(S, z.target));
    }, N = (z) => {
      p(z, !1);
    };
    window.addEventListener("pointerup", b, g), window.addEventListener("pointercancel", N, g);
  };
  return r.forEach((y) => {
    (o.useGlobalTarget ? window : y).addEventListener("pointerdown", h, c), Js(y) && (y.addEventListener("focus", (v) => CA(v, c)), !AA(y) && !y.hasAttribute("tabindex") && (y.tabIndex = 0));
  }), d;
}
function yh(a) {
  return M0(a) && "ownerSVGElement" in a;
}
const Ps = /* @__PURE__ */ new WeakMap();
let ks;
const bv = (a, l, o) => (r, c) => c && c[0] ? c[0][a + "Size"] : yh(r) && "getBBox" in r ? r.getBBox()[l] : r[o], OA = /* @__PURE__ */ bv("inline", "width", "offsetWidth"), RA = /* @__PURE__ */ bv("block", "height", "offsetHeight");
function zA({ target: a, borderBoxSize: l }) {
  Ps.get(a)?.forEach((o) => {
    o(a, {
      get width() {
        return OA(a, l);
      },
      get height() {
        return RA(a, l);
      }
    });
  });
}
function NA(a) {
  a.forEach(zA);
}
function _A() {
  typeof ResizeObserver > "u" || (ks = new ResizeObserver(NA));
}
function VA(a, l) {
  ks || _A();
  const o = hh(a);
  return o.forEach((r) => {
    let c = Ps.get(r);
    c || (c = /* @__PURE__ */ new Set(), Ps.set(r, c)), c.add(l), ks?.observe(r);
  }), () => {
    o.forEach((r) => {
      const c = Ps.get(r);
      c?.delete(l), c?.size || ks?.unobserve(r);
    });
  };
}
const Is = /* @__PURE__ */ new Set();
let Za;
function wA() {
  Za = () => {
    const a = {
      get width() {
        return window.innerWidth;
      },
      get height() {
        return window.innerHeight;
      }
    };
    Is.forEach((l) => l(a));
  }, window.addEventListener("resize", Za);
}
function UA(a) {
  return Is.add(a), Za || wA(), () => {
    Is.delete(a), !Is.size && typeof Za == "function" && (window.removeEventListener("resize", Za), Za = void 0);
  };
}
function Cg(a, l) {
  return typeof a == "function" ? UA(a) : VA(a, l);
}
function BA(a) {
  return yh(a) && a.tagName === "svg";
}
const jA = [...yv, Ft, un], HA = (a) => jA.find(mv(a)), Dg = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), Ka = () => ({
  x: Dg(),
  y: Dg()
}), Og = () => ({ min: 0, max: 0 }), kt = () => ({
  x: Og(),
  y: Og()
}), LA = /* @__PURE__ */ new WeakMap();
function yo(a) {
  return a !== null && typeof a == "object" && typeof a.start == "function";
}
function iu(a) {
  return typeof a == "string" || Array.isArray(a);
}
const ph = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], gh = ["initial", ...ph];
function po(a) {
  return yo(a.animate) || gh.some((l) => iu(a[l]));
}
function Ev(a) {
  return !!(po(a) || a.variants);
}
function YA(a, l, o) {
  for (const r in l) {
    const c = l[r], d = o[r];
    if (de(c))
      a.addValue(r, c);
    else if (de(d))
      a.addValue(r, Fa(c, { owner: a }));
    else if (d !== c)
      if (a.hasValue(r)) {
        const h = a.getValue(r);
        h.liveStyle === !0 ? h.jump(c) : h.hasAnimated || h.set(c);
      } else {
        const h = a.getStaticValue(r);
        a.addValue(r, Fa(h !== void 0 ? h : c, { owner: a }));
      }
  }
  for (const r in o)
    l[r] === void 0 && a.removeValue(r);
  return l;
}
const so = { current: null }, vh = { current: !1 }, qA = typeof window < "u";
function Av() {
  if (vh.current = !0, !!qA)
    if (window.matchMedia) {
      const a = window.matchMedia("(prefers-reduced-motion)"), l = () => so.current = a.matches;
      a.addEventListener("change", l), l();
    } else
      so.current = !1;
}
const Rg = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
let oo = {};
function xv(a) {
  oo = a;
}
function GA() {
  return oo;
}
class XA {
  /**
   * This method takes React props and returns found MotionValues. For example, HTML
   * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
   *
   * This isn't an abstract method as it needs calling in the constructor, but it is
   * intended to be one.
   */
  scrapeMotionValuesFromProps(l, o, r) {
    return {};
  }
  constructor({ parent: l, props: o, presenceContext: r, reducedMotionConfig: c, skipAnimations: d, blockInitialAnimation: h, visualState: y }, S = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.shouldSkipAnimations = !1, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = uh, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.hasBeenMounted = !1, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      const N = Se.now();
      this.renderScheduledAt < N && (this.renderScheduledAt = N, wt.render(this.render, !1, !0));
    };
    const { latestValues: v, renderState: g } = y;
    this.latestValues = v, this.baseTarget = { ...v }, this.initialValues = o.initial ? { ...v } : {}, this.renderState = g, this.parent = l, this.props = o, this.presenceContext = r, this.depth = l ? l.depth + 1 : 0, this.reducedMotionConfig = c, this.skipAnimationsConfig = d, this.options = S, this.blockInitialAnimation = !!h, this.isControllingVariants = po(o), this.isVariantNode = Ev(o), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(l && l.current);
    const { willChange: p, ...b } = this.scrapeMotionValuesFromProps(o, {}, this);
    for (const N in b) {
      const z = b[N];
      v[N] !== void 0 && de(z) && z.set(v[N]);
    }
  }
  mount(l) {
    if (this.hasBeenMounted)
      for (const o in this.initialValues)
        this.values.get(o)?.jump(this.initialValues[o]), this.latestValues[o] = this.initialValues[o];
    this.current = l, LA.set(l, this), this.projection && !this.projection.instance && this.projection.mount(l), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((o, r) => this.bindToMotionValue(r, o)), this.reducedMotionConfig === "never" ? this.shouldReduceMotion = !1 : this.reducedMotionConfig === "always" ? this.shouldReduceMotion = !0 : (vh.current || Av(), this.shouldReduceMotion = so.current), this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1, this.parent?.addChild(this), this.update(this.props, this.presenceContext), this.hasBeenMounted = !0;
  }
  unmount() {
    this.projection && this.projection.unmount(), Ti(this.notifyUpdate), Ti(this.render), this.valueSubscriptions.forEach((l) => l()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent?.removeChild(this);
    for (const l in this.events)
      this.events[l].clear();
    for (const l in this.features) {
      const o = this.features[l];
      o && (o.unmount(), o.isMounted = !1);
    }
    this.current = null;
  }
  addChild(l) {
    this.children.add(l), this.enteringChildren ?? (this.enteringChildren = /* @__PURE__ */ new Set()), this.enteringChildren.add(l);
  }
  removeChild(l) {
    this.children.delete(l), this.enteringChildren && this.enteringChildren.delete(l);
  }
  bindToMotionValue(l, o) {
    if (this.valueSubscriptions.has(l) && this.valueSubscriptions.get(l)(), o.accelerate && uv.has(l) && this.current instanceof HTMLElement) {
      const { factory: h, keyframes: y, times: S, ease: v, duration: g } = o.accelerate, p = new av({
        element: this.current,
        name: l,
        keyframes: y,
        times: S,
        ease: v,
        duration: /* @__PURE__ */ De(g)
      }), b = h(p);
      this.valueSubscriptions.set(l, () => {
        b(), p.cancel();
      });
      return;
    }
    const r = Ia.has(l);
    r && this.onBindTransform && this.onBindTransform();
    const c = o.on("change", (h) => {
      this.latestValues[l] = h, this.props.onUpdate && wt.preRender(this.notifyUpdate), r && this.projection && (this.projection.isTransformDirty = !0), this.scheduleRender();
    });
    let d;
    typeof window < "u" && window.MotionCheckAppearSync && (d = window.MotionCheckAppearSync(this, l, o)), this.valueSubscriptions.set(l, () => {
      c(), d && d();
    });
  }
  sortNodePosition(l) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== l.type ? 0 : this.sortInstanceNodePosition(this.current, l.current);
  }
  updateFeatures() {
    let l = "animation";
    for (l in oo) {
      const o = oo[l];
      if (!o)
        continue;
      const { isEnabled: r, Feature: c } = o;
      if (!this.features[l] && c && r(this.props) && (this.features[l] = new c(this)), this.features[l]) {
        const d = this.features[l];
        d.isMounted ? d.update() : (d.mount(), d.isMounted = !0);
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  /**
   * Measure the current viewport box with or without transforms.
   * Only measures axis-aligned boxes, rotate and skew must be manually
   * removed with a re-render to work.
   */
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : kt();
  }
  getStaticValue(l) {
    return this.latestValues[l];
  }
  setStaticValue(l, o) {
    this.latestValues[l] = o;
  }
  /**
   * Update the provided props. Ensure any newly-added motion values are
   * added to our map, old ones removed, and listeners updated.
   */
  update(l, o) {
    (l.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = l, this.prevPresenceContext = this.presenceContext, this.presenceContext = o;
    for (let r = 0; r < Rg.length; r++) {
      const c = Rg[r];
      this.propEventSubscriptions[c] && (this.propEventSubscriptions[c](), delete this.propEventSubscriptions[c]);
      const d = "on" + c, h = l[d];
      h && (this.propEventSubscriptions[c] = this.on(c, h));
    }
    this.prevMotionValues = YA(this, this.scrapeMotionValuesFromProps(l, this.prevProps || {}, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  /**
   * Returns the variant definition with a given name.
   */
  getVariant(l) {
    return this.props.variants ? this.props.variants[l] : void 0;
  }
  /**
   * Returns the defined default transition on this component.
   */
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
  }
  /**
   * Add a child visual element to our set of children.
   */
  addVariantChild(l) {
    const o = this.getClosestVariantNode();
    if (o)
      return o.variantChildren && o.variantChildren.add(l), () => o.variantChildren.delete(l);
  }
  /**
   * Add a motion value and bind it to this visual element.
   */
  addValue(l, o) {
    const r = this.values.get(l);
    o !== r && (r && this.removeValue(l), this.bindToMotionValue(l, o), this.values.set(l, o), this.latestValues[l] = o.get());
  }
  /**
   * Remove a motion value and unbind any active subscriptions.
   */
  removeValue(l) {
    this.values.delete(l);
    const o = this.valueSubscriptions.get(l);
    o && (o(), this.valueSubscriptions.delete(l)), delete this.latestValues[l], this.removeValueFromRenderState(l, this.renderState);
  }
  /**
   * Check whether we have a motion value for this key
   */
  hasValue(l) {
    return this.values.has(l);
  }
  getValue(l, o) {
    if (this.props.values && this.props.values[l])
      return this.props.values[l];
    let r = this.values.get(l);
    return r === void 0 && o !== void 0 && (r = Fa(o === null ? void 0 : o, { owner: this }), this.addValue(l, r)), r;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(l, o) {
    let r = this.latestValues[l] !== void 0 || !this.current ? this.latestValues[l] : this.getBaseTargetFromProps(this.props, l) ?? this.readValueFromInstance(this.current, l, this.options);
    return r != null && (typeof r == "string" && (x0(r) || C0(r)) ? r = parseFloat(r) : !HA(r) && un.test(o) && (r = gv(l, o)), this.setBaseTarget(l, de(r) ? r.get() : r)), de(r) ? r.get() : r;
  }
  /**
   * Set the base target to later animate back to. This is currently
   * only hydrated on creation and when we first read a value.
   */
  setBaseTarget(l, o) {
    this.baseTarget[l] = o;
  }
  /**
   * Find the base target for a value thats been removed from all animation
   * props.
   */
  getBaseTarget(l) {
    const { initial: o } = this.props;
    let r;
    if (typeof o == "string" || typeof o == "object") {
      const d = rh(this.props, o, this.presenceContext?.custom);
      d && (r = d[l]);
    }
    if (o && r !== void 0)
      return r;
    const c = this.getBaseTargetFromProps(this.props, l);
    return c !== void 0 && !de(c) ? c : this.initialValues[l] !== void 0 && r === void 0 ? void 0 : this.baseTarget[l];
  }
  on(l, o) {
    return this.events[l] || (this.events[l] = new If()), this.events[l].add(o);
  }
  notify(l, ...o) {
    this.events[l] && this.events[l].notify(...o);
  }
  scheduleRenderMicrotask() {
    dh.render(this.render);
  }
}
class Mv extends XA {
  constructor() {
    super(...arguments), this.KeyframeResolver = vA;
  }
  sortInstanceNodePosition(l, o) {
    return l.compareDocumentPosition(o) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(l, o) {
    const r = l.style;
    return r ? r[o] : void 0;
  }
  removeValueFromRenderState(l, { vars: o, style: r }) {
    delete o[l], delete r[l];
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: l } = this.props;
    de(l) && (this.childSubscription = l.on("change", (o) => {
      this.current && (this.current.textContent = `${o}`);
    }));
  }
}
class bi {
  constructor(l) {
    this.isMounted = !1, this.node = l;
  }
  update() {
  }
}
function Cv({ top: a, left: l, right: o, bottom: r }) {
  return {
    x: { min: l, max: o },
    y: { min: a, max: r }
  };
}
function QA({ x: a, y: l }) {
  return { top: l.min, right: a.max, bottom: l.max, left: a.min };
}
function ZA(a, l) {
  if (!l)
    return a;
  const o = l({ x: a.left, y: a.top }), r = l({ x: a.right, y: a.bottom });
  return {
    top: o.y,
    left: o.x,
    bottom: r.y,
    right: r.x
  };
}
function df(a) {
  return a === void 0 || a === 1;
}
function Yf({ scale: a, scaleX: l, scaleY: o }) {
  return !df(a) || !df(l) || !df(o);
}
function Ji(a) {
  return Yf(a) || Dv(a) || a.z || a.rotate || a.rotateX || a.rotateY || a.skewX || a.skewY;
}
function Dv(a) {
  return zg(a.x) || zg(a.y);
}
function zg(a) {
  return a && a !== "0%";
}
function ro(a, l, o) {
  const r = a - o, c = l * r;
  return o + c;
}
function Ng(a, l, o, r, c) {
  return c !== void 0 && (a = ro(a, c, r)), ro(a, o, r) + l;
}
function qf(a, l = 0, o = 1, r, c) {
  a.min = Ng(a.min, l, o, r, c), a.max = Ng(a.max, l, o, r, c);
}
function Ov(a, { x: l, y: o }) {
  qf(a.x, l.translate, l.scale, l.originPoint), qf(a.y, o.translate, o.scale, o.originPoint);
}
const _g = 0.999999999999, Vg = 1.0000000000001;
function KA(a, l, o, r = !1) {
  const c = o.length;
  if (!c)
    return;
  l.x = l.y = 1;
  let d, h;
  for (let y = 0; y < c; y++) {
    d = o[y], h = d.projectionDelta;
    const { visualElement: S } = d.options;
    S && S.props.style && S.props.style.display === "contents" || (r && d.options.layoutScroll && d.scroll && d !== d.root && (En(a.x, -d.scroll.offset.x), En(a.y, -d.scroll.offset.y)), h && (l.x *= h.x.scale, l.y *= h.y.scale, Ov(a, h)), r && Ji(d.latestValues) && Ws(a, d.latestValues, d.layout?.layoutBox));
  }
  l.x < Vg && l.x > _g && (l.x = 1), l.y < Vg && l.y > _g && (l.y = 1);
}
function En(a, l) {
  a.min += l, a.max += l;
}
function wg(a, l, o, r, c = 0.5) {
  const d = Vt(a.min, a.max, c);
  qf(a, l, o, d, r);
}
function Ug(a, l) {
  return typeof a == "string" ? parseFloat(a) / 100 * (l.max - l.min) : a;
}
function Ws(a, l, o) {
  const r = o ?? a;
  wg(a.x, Ug(l.x, r.x), l.scaleX, l.scale, l.originX), wg(a.y, Ug(l.y, r.y), l.scaleY, l.scale, l.originY);
}
function Rv(a, l) {
  return Cv(ZA(a.getBoundingClientRect(), l));
}
function JA(a, l, o) {
  const r = Rv(a, o), { scroll: c } = l;
  return c && (En(r.x, c.offset.x), En(r.y, c.offset.y)), r;
}
const FA = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, PA = ka.length;
function kA(a, l, o) {
  let r = "", c = !0;
  for (let h = 0; h < PA; h++) {
    const y = ka[h], S = a[y];
    if (S === void 0)
      continue;
    let v = !0;
    if (typeof S == "number")
      v = S === (y.startsWith("scale") ? 1 : 0);
    else {
      const g = parseFloat(S);
      v = y.startsWith("scale") ? g === 1 : g === 0;
    }
    if (!v || o) {
      const g = Lf(S, uo[y]);
      if (!v) {
        c = !1;
        const p = FA[y] || y;
        r += `${p}(${g}) `;
      }
      o && (l[y] = g);
    }
  }
  const d = a.pathRotation;
  return d && (c = !1, r += `rotate(${Lf(d, uo.pathRotation)}) `), r = r.trim(), o ? r = o(l, c ? "" : r) : c && (r = "none"), r;
}
function Sh(a, l, o) {
  const { style: r, vars: c, transformOrigin: d } = a;
  let h = !1, y = !1;
  for (const S in l) {
    const v = l[S];
    if (Ia.has(S)) {
      h = !0;
      continue;
    } else if (q0(S)) {
      c[S] = v;
      continue;
    } else {
      const g = Lf(v, uo[S]);
      S.startsWith("origin") ? (y = !0, d[S] = g) : r[S] = g;
    }
  }
  if (l.transform || (h || o ? r.transform = kA(l, a.transform, o) : r.transform && (r.transform = "none")), y) {
    const { originX: S = "50%", originY: v = "50%", originZ: g = 0 } = d;
    r.transformOrigin = `${S} ${v} ${g}`;
  }
}
function zv(a, { style: l, vars: o }, r, c) {
  const d = a.style;
  let h;
  for (h in l)
    d[h] = l[h];
  c?.applyProjectionStyles(d, r);
  for (h in o)
    d.setProperty(h, o[h]);
}
function Bg(a, l) {
  return l.max === l.min ? 0 : a / (l.max - l.min) * 100;
}
const Fl = {
  correct: (a, l) => {
    if (!l.target)
      return a;
    if (typeof a == "string")
      if (P.test(a))
        a = parseFloat(a);
      else
        return a;
    const o = Bg(a, l.target.x), r = Bg(a, l.target.y);
    return `${o}% ${r}%`;
  }
}, IA = {
  correct: (a, { treeScale: l, projectionDelta: o }) => {
    const r = a, c = un.parse(a);
    if (c.length > 5)
      return r;
    const d = un.createTransformer(a), h = typeof c[0] != "number" ? 1 : 0, y = o.x.scale * l.x, S = o.y.scale * l.y;
    c[0 + h] /= y, c[1 + h] /= S;
    const v = Vt(y, S, 0.5);
    return typeof c[2 + h] == "number" && (c[2 + h] /= v), typeof c[3 + h] == "number" && (c[3 + h] /= v), d(c);
  }
}, Gf = {
  borderRadius: {
    ...Fl,
    applyTo: [...fh]
  },
  borderTopLeftRadius: Fl,
  borderTopRightRadius: Fl,
  borderBottomLeftRadius: Fl,
  borderBottomRightRadius: Fl,
  boxShadow: IA
};
function Nv(a, { layout: l, layoutId: o }) {
  return Ia.has(a) || a.startsWith("origin") || (l || o !== void 0) && (!!Gf[a] || a === "opacity");
}
function Th(a, l, o) {
  const r = a.style, c = l?.style, d = {};
  if (!r)
    return d;
  for (const h in r)
    (de(r[h]) || c && de(c[h]) || Nv(h, a) || o?.getValue(h)?.liveStyle !== void 0) && (d[h] = r[h]);
  return d;
}
function WA(a) {
  return window.getComputedStyle(a);
}
class $A extends Mv {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = zv;
  }
  mount(l) {
    vi(!!l.style, "motion.create() components must forward their ref to a HTML or SVG element", "custom-component-ref"), super.mount(l);
  }
  readValueFromInstance(l, o) {
    if (Ia.has(o))
      return this.projection?.isProjecting ? Of(o) : SE(l, o);
    {
      const r = WA(l), c = (q0(o) ? r.getPropertyValue(o) : r[o]) || 0;
      return typeof c == "string" ? c.trim() : c;
    }
  }
  measureInstanceViewportBox(l, { transformPagePoint: o }) {
    return Rv(l, o);
  }
  build(l, o, r) {
    Sh(l, o, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(l, o, r) {
    return Th(l, o, r);
  }
}
const t2 = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, e2 = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function n2(a, l, o = 1, r = 0, c = !0) {
  a.pathLength = 1;
  const d = c ? t2 : e2;
  a[d.offset] = `${-r}`, a[d.array] = `${l} ${o}`;
}
const i2 = [
  "offsetDistance",
  "offsetPath",
  "offsetRotate",
  "offsetAnchor"
];
function _v(a, {
  attrX: l,
  attrY: o,
  attrScale: r,
  pathLength: c,
  pathSpacing: d = 1,
  pathOffset: h = 0,
  // This is object creation, which we try to avoid per-frame.
  ...y
}, S, v, g) {
  if (Sh(a, y, v), S) {
    a.style.viewBox && (a.attrs.viewBox = a.style.viewBox);
    return;
  }
  a.attrs = a.style, a.style = {};
  const { attrs: p, style: b } = a;
  p.transform && (b.transform = p.transform, delete p.transform), (b.transform || p.transformOrigin) && (b.transformOrigin = p.transformOrigin ?? "50% 50%", delete p.transformOrigin), b.transform && (b.transformBox = g?.transformBox ?? "fill-box", delete p.transformBox);
  for (const N of i2)
    p[N] !== void 0 && (b[N] = p[N], delete p[N]);
  l !== void 0 && (p.x = l), o !== void 0 && (p.y = o), r !== void 0 && (p.scale = r), c !== void 0 && n2(p, c, d, h, !1);
}
const Vv = /* @__PURE__ */ new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust"
]), wv = (a) => typeof a == "string" && a.toLowerCase() === "svg";
function a2(a, l, o, r) {
  zv(a, l, void 0, r);
  for (const c in l.attrs)
    a.setAttribute(Vv.has(c) ? c : ch(c), l.attrs[c]);
}
function Uv(a, l, o) {
  const r = Th(a, l, o);
  for (const c in a)
    if (de(a[c]) || de(l[c])) {
      const d = ka.indexOf(c) !== -1 ? "attr" + c.charAt(0).toUpperCase() + c.substring(1) : c;
      r[d] = a[c];
    }
  return r;
}
class l2 extends Mv {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = kt;
  }
  getBaseTargetFromProps(l, o) {
    return l[o];
  }
  readValueFromInstance(l, o) {
    if (Ia.has(o)) {
      const r = pv(o);
      return r && r.default || 0;
    }
    return o = Vv.has(o) ? o : ch(o), l.getAttribute(o);
  }
  scrapeMotionValuesFromProps(l, o, r) {
    return Uv(l, o, r);
  }
  build(l, o, r) {
    _v(l, o, this.isSVGTag, r.transformTemplate, r.style);
  }
  renderInstance(l, o, r, c) {
    a2(l, o, r, c);
  }
  mount(l) {
    this.isSVGTag = wv(l.tagName), super.mount(l);
  }
}
const u2 = gh.length;
function Bv(a) {
  if (!a)
    return;
  if (!a.isControllingVariants) {
    const o = a.parent ? Bv(a.parent) || {} : {};
    return a.props.initial !== void 0 && (o.initial = a.props.initial), o;
  }
  const l = {};
  for (let o = 0; o < u2; o++) {
    const r = gh[o], c = a.props[r];
    (iu(c) || c === !1) && (l[r] = c);
  }
  return l;
}
function jv(a, l) {
  if (!Array.isArray(l))
    return !1;
  const o = l.length;
  if (o !== a.length)
    return !1;
  for (let r = 0; r < o; r++)
    if (l[r] !== a[r])
      return !1;
  return !0;
}
const s2 = [...ph].reverse(), o2 = ph.length;
function r2(a) {
  return (l) => Promise.all(l.map(({ animation: o, options: r }) => sA(a, o, r)));
}
function c2(a) {
  let l = r2(a), o = jg(), r = !0, c = !1;
  const d = (v) => (g, p) => {
    const b = Ii(a, p, v === "exit" ? a.presenceContext?.custom : void 0);
    if (b) {
      const { transition: N, transitionEnd: z, ...U } = b;
      g = { ...g, ...U, ...z };
    }
    return g;
  };
  function h(v) {
    l = v(a);
  }
  function y(v) {
    const { props: g } = a, p = Bv(a.parent) || {}, b = [], N = /* @__PURE__ */ new Set();
    let z = {}, U = 1 / 0;
    for (let B = 0; B < o2; B++) {
      const Y = s2[B], q = o[Y], X = g[Y] !== void 0 ? g[Y] : p[Y], et = iu(X), it = Y === v ? q.isActive : null;
      it === !1 && (U = B);
      let Z = X === p[Y] && X !== g[Y] && et;
      if (Z && (r || c) && a.manuallyAnimateOnMount && (Z = !1), q.protectedKeys = { ...z }, // If it isn't active and hasn't *just* been set as inactive
      !q.isActive && it === null || // If we didn't and don't have any defined prop for this animation type
      !X && !q.prevProp || // Or if the prop doesn't define an animation
      yo(X) || typeof X == "boolean")
        continue;
      if (Y === "exit" && q.isActive && it !== !0) {
        q.prevResolvedValues && (z = {
          ...z,
          ...q.prevResolvedValues
        });
        continue;
      }
      const H = f2(q.prevProp, X);
      let ut = H || // If we're making this variant active, we want to always make it active
      Y === v && q.isActive && !Z && et || // If we removed a higher-priority variant (i is in reverse order)
      B > U && et, k = !1;
      const mt = Array.isArray(X) ? X : [X];
      let At = mt.reduce(d(Y), {});
      it === !1 && (At = {});
      const { prevResolvedValues: It = {} } = q, Wt = {
        ...It,
        ...At
      }, zt = (J) => {
        ut = !0, N.has(J) && (k = !0, N.delete(J)), q.needsAnimating[J] = !0;
        const ft = a.getValue(J);
        ft && (ft.liveStyle = !1);
      };
      for (const J in Wt) {
        const ft = At[J], dt = It[J];
        if (z.hasOwnProperty(J))
          continue;
        let $t = !1;
        wf(ft) && wf(dt) ? $t = !jv(ft, dt) || H : $t = ft !== dt, $t ? ft != null ? zt(J) : N.add(J) : ft !== void 0 && N.has(J) ? zt(J) : q.protectedKeys[J] = !0;
      }
      q.prevProp = X, q.prevResolvedValues = At, q.isActive && (z = { ...z, ...At }), (r || c) && a.blockInitialAnimation && (ut = !1);
      const L = Z && H;
      ut && (!L || k) && b.push(...mt.map((J) => {
        const ft = { type: Y };
        if (typeof J == "string" && (r || c) && !L && a.manuallyAnimateOnMount && a.parent) {
          const { parent: dt } = a, $t = Ii(dt, J);
          if (dt.enteringChildren && $t) {
            const { delayChildren: ke } = $t.transition || {};
            ft.delay = sv(dt.enteringChildren, a, ke);
          }
        }
        return {
          animation: J,
          options: ft
        };
      }));
    }
    if (N.size) {
      const B = {};
      if (typeof g.initial != "boolean") {
        const Y = Ii(a, Array.isArray(g.initial) ? g.initial[0] : g.initial);
        Y && Y.transition && (B.transition = Y.transition);
      }
      N.forEach((Y) => {
        const q = a.getBaseTarget(Y), X = a.getValue(Y);
        X && (X.liveStyle = !0), B[Y] = q ?? null;
      }), b.push({ animation: B });
    }
    let w = !!b.length;
    return r && (g.initial === !1 || g.initial === g.animate) && !a.manuallyAnimateOnMount && (w = !1), r = !1, c = !1, w ? l(b) : Promise.resolve();
  }
  function S(v, g) {
    if (o[v].isActive === g)
      return Promise.resolve();
    a.variantChildren?.forEach((b) => b.animationState?.setActive(v, g)), o[v].isActive = g;
    const p = y(v);
    for (const b in o)
      o[b].protectedKeys = {};
    return p;
  }
  return {
    animateChanges: y,
    setActive: S,
    setAnimateFunction: h,
    getState: () => o,
    reset: () => {
      o = jg(), c = !0;
    }
  };
}
function f2(a, l) {
  return typeof l == "string" ? l !== a : Array.isArray(l) ? !jv(l, a) : !1;
}
function Ki(a = !1) {
  return {
    isActive: a,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function jg() {
  return {
    animate: Ki(!0),
    whileInView: Ki(),
    whileHover: Ki(),
    whileTap: Ki(),
    whileDrag: Ki(),
    whileFocus: Ki(),
    exit: Ki()
  };
}
function Xf(a, l) {
  a.min = l.min, a.max = l.max;
}
function an(a, l) {
  Xf(a.x, l.x), Xf(a.y, l.y);
}
function Hg(a, l) {
  a.translate = l.translate, a.scale = l.scale, a.originPoint = l.originPoint, a.origin = l.origin;
}
const Hv = 1e-4, h2 = 1 - Hv, d2 = 1 + Hv, Lv = 0.01, m2 = 0 - Lv, y2 = 0 + Lv;
function Te(a) {
  return a.max - a.min;
}
function p2(a, l, o) {
  return Math.abs(a - l) <= o;
}
function Lg(a, l, o, r = 0.5) {
  a.origin = r, a.originPoint = Vt(l.min, l.max, a.origin), a.scale = Te(o) / Te(l), a.translate = Vt(o.min, o.max, a.origin) - a.originPoint, (a.scale >= h2 && a.scale <= d2 || isNaN(a.scale)) && (a.scale = 1), (a.translate >= m2 && a.translate <= y2 || isNaN(a.translate)) && (a.translate = 0);
}
function Wl(a, l, o, r) {
  Lg(a.x, l.x, o.x, r ? r.originX : void 0), Lg(a.y, l.y, o.y, r ? r.originY : void 0);
}
function Yg(a, l, o, r = 0) {
  const c = r ? Vt(o.min, o.max, r) : o.min;
  a.min = c + l.min, a.max = a.min + Te(l);
}
function g2(a, l, o, r) {
  Yg(a.x, l.x, o.x, r?.x), Yg(a.y, l.y, o.y, r?.y);
}
function qg(a, l, o, r = 0) {
  const c = r ? Vt(o.min, o.max, r) : o.min;
  a.min = l.min - c, a.max = a.min + Te(l);
}
function co(a, l, o, r) {
  qg(a.x, l.x, o.x, r?.x), qg(a.y, l.y, o.y, r?.y);
}
function Gg(a, l, o, r, c) {
  return a -= l, a = ro(a, 1 / o, r), c !== void 0 && (a = ro(a, 1 / c, r)), a;
}
function v2(a, l = 0, o = 1, r = 0.5, c, d = a, h = a) {
  if (An.test(l) && (l = parseFloat(l), l = Vt(h.min, h.max, l / 100) - h.min), typeof l != "number")
    return;
  let y = Vt(d.min, d.max, r);
  a === d && (y -= l), a.min = Gg(a.min, l, o, y, c), a.max = Gg(a.max, l, o, y, c);
}
function Xg(a, l, [o, r, c], d, h) {
  v2(a, l[o], l[r], l[c], l.scale, d, h);
}
const S2 = ["x", "scaleX", "originX"], T2 = ["y", "scaleY", "originY"];
function Qg(a, l, o, r) {
  Xg(a.x, l, S2, o ? o.x : void 0, r ? r.x : void 0), Xg(a.y, l, T2, o ? o.y : void 0, r ? r.y : void 0);
}
function Zg(a) {
  return a.translate === 0 && a.scale === 1;
}
function Yv(a) {
  return Zg(a.x) && Zg(a.y);
}
function Kg(a, l) {
  return a.min === l.min && a.max === l.max;
}
function b2(a, l) {
  return Kg(a.x, l.x) && Kg(a.y, l.y);
}
function Jg(a, l) {
  return Math.round(a.min) === Math.round(l.min) && Math.round(a.max) === Math.round(l.max);
}
function qv(a, l) {
  return Jg(a.x, l.x) && Jg(a.y, l.y);
}
function Fg(a) {
  return Te(a.x) / Te(a.y);
}
function Pg(a, l) {
  return a.translate === l.translate && a.scale === l.scale && a.originPoint === l.originPoint;
}
function Tn(a) {
  return [a("x"), a("y")];
}
function E2(a, l, o) {
  let r = "";
  const c = a.x.translate / l.x, d = a.y.translate / l.y, h = o?.z || 0;
  if ((c || d || h) && (r = `translate3d(${c}px, ${d}px, ${h}px) `), (l.x !== 1 || l.y !== 1) && (r += `scale(${1 / l.x}, ${1 / l.y}) `), o) {
    const { transformPerspective: v, rotate: g, pathRotation: p, rotateX: b, rotateY: N, skewX: z, skewY: U } = o;
    v && (r = `perspective(${v}px) ${r}`), g && (r += `rotate(${g}deg) `), p && (r += `rotate(${p}deg) `), b && (r += `rotateX(${b}deg) `), N && (r += `rotateY(${N}deg) `), z && (r += `skewX(${z}deg) `), U && (r += `skewY(${U}deg) `);
  }
  const y = a.x.scale * l.x, S = a.y.scale * l.y;
  return (y !== 1 || S !== 1) && (r += `scale(${y}, ${S})`), r || "none";
}
const A2 = fh.length, kg = (a) => typeof a == "string" ? parseFloat(a) : a, Ig = (a) => typeof a == "number" || P.test(a);
function x2(a, l, o, r, c, d) {
  c ? (a.opacity = Vt(0, o.opacity ?? 1, M2(r)), a.opacityExit = Vt(l.opacity ?? 1, 0, C2(r))) : d && (a.opacity = Vt(l.opacity ?? 1, o.opacity ?? 1, r));
  for (let h = 0; h < A2; h++) {
    const y = fh[h];
    let S = Wg(l, y), v = Wg(o, y);
    if (S === void 0 && v === void 0)
      continue;
    S || (S = 0), v || (v = 0), S === 0 || v === 0 || Ig(S) === Ig(v) ? (a[y] = Math.max(Vt(kg(S), kg(v), r), 0), (An.test(v) || An.test(S)) && (a[y] += "%")) : a[y] = v;
  }
  (l.rotate || o.rotate) && (a.rotate = Vt(l.rotate || 0, o.rotate || 0, r));
}
function Wg(a, l) {
  return a[l] !== void 0 ? a[l] : a.borderRadius;
}
const M2 = /* @__PURE__ */ Gv(0, 0.5, U0), C2 = /* @__PURE__ */ Gv(0.5, 0.95, Pe);
function Gv(a, l, o) {
  return (r) => r < a ? 0 : r > l ? 1 : o(/* @__PURE__ */ eu(a, l, r));
}
function D2(a, l, o) {
  const r = de(a) ? a : Fa(a);
  return r.start(oh("", r, l, o)), r.animation;
}
function au(a, l, o, r = { passive: !0 }) {
  return a.addEventListener(l, o, r), () => a.removeEventListener(l, o, r);
}
const O2 = (a, l) => a.depth - l.depth;
class R2 {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(l) {
    kf(this.children, l), this.isDirty = !0;
  }
  remove(l) {
    eo(this.children, l), this.isDirty = !0;
  }
  forEach(l) {
    this.isDirty && this.children.sort(O2), this.isDirty = !1, this.children.forEach(l);
  }
}
function z2(a, l) {
  const o = Se.now(), r = ({ timestamp: c }) => {
    const d = c - o;
    d >= l && (Ti(r), a(d - l));
  };
  return wt.setup(r, !0), () => Ti(r);
}
function $s(a) {
  return de(a) ? a.get() : a;
}
class N2 {
  constructor() {
    this.members = [];
  }
  add(l) {
    kf(this.members, l);
    for (let o = this.members.length - 1; o >= 0; o--) {
      const r = this.members[o];
      if (r === l || r === this.lead || r === this.prevLead)
        continue;
      const c = r.instance;
      (!c || c.isConnected === !1) && !r.snapshot && (eo(this.members, r), r.unmount());
    }
    l.scheduleRender();
  }
  remove(l) {
    if (eo(this.members, l), l === this.prevLead && (this.prevLead = void 0), l === this.lead) {
      const o = this.members[this.members.length - 1];
      o && this.promote(o);
    }
  }
  relegate(l) {
    for (let o = this.members.indexOf(l) - 1; o >= 0; o--) {
      const r = this.members[o];
      if (r.isPresent !== !1 && r.instance?.isConnected !== !1)
        return this.promote(r), !0;
    }
    return !1;
  }
  promote(l, o) {
    const r = this.lead;
    if (l !== r && (this.prevLead = r, this.lead = l, l.show(), r)) {
      r.updateSnapshot(), l.scheduleRender();
      const { layoutDependency: c } = r.options, { layoutDependency: d } = l.options;
      (c === void 0 || c !== d) && (l.resumeFrom = r, o && (r.preserveOpacity = !0), r.snapshot && (l.snapshot = r.snapshot, l.snapshot.latestValues = r.animationValues || r.latestValues), l.root?.isUpdating && (l.isLayoutDirty = !0)), l.options.crossfade === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((l) => {
      l.options.onExitComplete?.(), l.resumingFrom?.options.onExitComplete?.();
    });
  }
  scheduleRender() {
    this.members.forEach((l) => l.instance && l.scheduleRender(!1));
  }
  removeLeadSnapshot() {
    this.lead?.snapshot && (this.lead.snapshot = void 0);
  }
}
const to = {
  /**
   * Global flag as to whether the tree has animated since the last time
   * we resized the window
   */
  hasAnimatedSinceResize: !0,
  /**
   * We set this to true once, on the first update. Any nodes added to the tree beyond that
   * update will be given a `data-projection-id` attribute.
   */
  hasEverUpdated: !1
}, mf = ["", "X", "Y", "Z"], _2 = 1e3;
let V2 = 0;
function yf(a, l, o, r) {
  const { latestValues: c } = l;
  c[a] && (o[a] = c[a], l.setStaticValue(a, 0), r && (r[a] = 0));
}
function Xv(a) {
  if (a.hasCheckedOptimisedAppear = !0, a.root === a)
    return;
  const { visualElement: l } = a.options;
  if (!l)
    return;
  const o = hv(l);
  if (window.MotionHasOptimisedAnimation(o, "transform")) {
    const { layout: c, layoutId: d } = a.options;
    window.MotionCancelOptimisedAnimation(o, "transform", wt, !(c || d));
  }
  const { parent: r } = a;
  r && !r.hasCheckedOptimisedAppear && Xv(r);
}
function Qv({ attachResizeListener: a, defaultParent: l, measureScroll: o, checkIsScrollRoot: r, resetTransform: c }) {
  return class {
    constructor(h = {}, y = l?.()) {
      this.id = V2++, this.animationId = 0, this.animationCommitId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.layoutVersion = 0, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, this.nodes.forEach(B2), this.nodes.forEach(G2), this.nodes.forEach(X2), this.nodes.forEach(j2);
      }, this.resolvedRelativeTargetAt = 0, this.linkedParentVersion = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = h, this.root = y ? y.root || y : this, this.path = y ? [...y.path, y] : [], this.parent = y, this.depth = y ? y.depth + 1 : 0;
      for (let S = 0; S < this.path.length; S++)
        this.path[S].shouldResetTransform = !0;
      this.root === this && (this.nodes = new R2());
    }
    addEventListener(h, y) {
      return this.eventHandlers.has(h) || this.eventHandlers.set(h, new If()), this.eventHandlers.get(h).add(y);
    }
    notifyListeners(h, ...y) {
      const S = this.eventHandlers.get(h);
      S && S.notify(...y);
    }
    hasListeners(h) {
      return this.eventHandlers.has(h);
    }
    /**
     * Lifecycles
     */
    mount(h) {
      if (this.instance)
        return;
      this.isSVG = yh(h) && !BA(h), this.instance = h;
      const { layoutId: y, layout: S, visualElement: v } = this.options;
      if (v && !v.current && v.mount(h), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (S || y) && (this.isLayoutDirty = !0), a) {
        let g, p = 0;
        const b = () => this.root.updateBlockedByResize = !1;
        wt.read(() => {
          p = window.innerWidth;
        }), a(h, () => {
          const N = window.innerWidth;
          N !== p && (p = N, this.root.updateBlockedByResize = !0, g && g(), g = z2(b, 250), to.hasAnimatedSinceResize && (to.hasAnimatedSinceResize = !1, this.nodes.forEach(e0)));
        });
      }
      y && this.root.registerSharedNode(y, this), this.options.animate !== !1 && v && (y || S) && this.addEventListener("didUpdate", ({ delta: g, hasLayoutChanged: p, hasRelativeLayoutChanged: b, layout: N }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const z = this.options.transition || v.getDefaultTransition() || F2, { onLayoutAnimationStart: U, onLayoutAnimationComplete: w } = v.getProps(), B = !this.targetLayout || !qv(this.targetLayout, N), Y = !p && b;
        if (this.options.layoutRoot || this.resumeFrom || Y || p && (B || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
          const q = {
            ...sh(z, "layout"),
            onPlay: U,
            onComplete: w
          };
          (v.shouldReduceMotion || this.options.layoutRoot) && (q.delay = 0, q.type = !1), this.startAnimation(q), this.setAnimationOrigin(g, Y, q.path);
        } else
          p || e0(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = N;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const h = this.getStack();
      h && h.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), Ti(this.updateProjection);
    }
    // only on the root
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1;
    }
    // Note: currently only running on root node
    startUpdate() {
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(Q2), this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: h } = this.options;
      return h && h.getProps().transformTemplate;
    }
    willUpdate(h = !0) {
      if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && Xv(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
        return;
      this.isLayoutDirty = !0;
      for (let g = 0; g < this.path.length; g++) {
        const p = this.path[g];
        p.shouldResetTransform = !0, (typeof p.latestValues.x == "string" || typeof p.latestValues.y == "string") && (p.isLayoutDirty = !0), p.updateScroll("snapshot"), p.options.layoutRoot && p.willUpdate(!1);
      }
      const { layoutId: y, layout: S } = this.options;
      if (y === void 0 && !S)
        return;
      const v = this.getTransformTemplate();
      this.prevTransformTemplateValue = v ? v(this.latestValues, "") : void 0, this.updateSnapshot(), h && this.notifyListeners("willUpdate");
    }
    update() {
      if (this.updateScheduled = !1, this.isUpdateBlocked()) {
        const S = this.updateBlockedByResize;
        this.unblockUpdate(), this.updateBlockedByResize = !1, this.clearAllSnapshots(), S && this.nodes.forEach(L2), this.nodes.forEach($g);
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(t0);
        return;
      }
      this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = !1, this.nodes.forEach(Y2), this.nodes.forEach(q2), this.nodes.forEach(w2), this.nodes.forEach(U2)) : this.nodes.forEach(t0), this.clearAllSnapshots();
      const y = Se.now();
      he.delta = xn(0, 1e3 / 60, y - he.timestamp), he.timestamp = y, he.isProcessing = !0, uf.update.process(he), uf.preRender.process(he), uf.render.process(he), he.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, dh.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(H2), this.sharedNodes.forEach(Z2);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, wt.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      wt.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    /**
     * Update measurements
     */
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure(), this.snapshot && !Te(this.snapshot.measuredBox.x) && !Te(this.snapshot.measuredBox.y) && (this.snapshot = void 0));
    }
    updateLayout() {
      if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let S = 0; S < this.path.length; S++)
          this.path[S].updateScroll();
      const h = this.layout;
      this.layout = this.measure(!1), this.layoutVersion++, this.layoutCorrected || (this.layoutCorrected = kt()), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: y } = this.options;
      y && y.notify("LayoutMeasure", this.layout.layoutBox, h ? h.layoutBox : void 0);
    }
    updateScroll(h = "measure") {
      let y = !!(this.options.layoutScroll && this.instance);
      if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === h && (y = !1), y && this.instance) {
        const S = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: h,
          isRoot: S,
          offset: o(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : S
        };
      }
    }
    resetTransform() {
      if (!c)
        return;
      const h = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, y = this.projectionDelta && !Yv(this.projectionDelta), S = this.getTransformTemplate(), v = S ? S(this.latestValues, "") : void 0, g = v !== this.prevTransformTemplateValue;
      h && this.instance && (y || Ji(this.latestValues) || g) && (c(this.instance, v), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(h = !0) {
      const y = this.measurePageBox();
      let S = this.removeElementScroll(y);
      return h && (S = this.removeTransform(S)), P2(S), {
        animationId: this.root.animationId,
        measuredBox: y,
        layoutBox: S,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      const { visualElement: h } = this.options;
      if (!h)
        return kt();
      const y = h.measureViewportBox();
      if (!(this.scroll?.wasRoot || this.path.some(k2))) {
        const { scroll: v } = this.root;
        v && (En(y.x, v.offset.x), En(y.y, v.offset.y));
      }
      return y;
    }
    removeElementScroll(h) {
      const y = kt();
      if (an(y, h), this.scroll?.wasRoot)
        return y;
      for (let S = 0; S < this.path.length; S++) {
        const v = this.path[S], { scroll: g, options: p } = v;
        v !== this.root && g && p.layoutScroll && (g.wasRoot && an(y, h), En(y.x, g.offset.x), En(y.y, g.offset.y));
      }
      return y;
    }
    applyTransform(h, y = !1, S) {
      const v = S || kt();
      an(v, h);
      for (let g = 0; g < this.path.length; g++) {
        const p = this.path[g];
        !y && p.options.layoutScroll && p.scroll && p !== p.root && (En(v.x, -p.scroll.offset.x), En(v.y, -p.scroll.offset.y)), Ji(p.latestValues) && Ws(v, p.latestValues, p.layout?.layoutBox);
      }
      return Ji(this.latestValues) && Ws(v, this.latestValues, this.layout?.layoutBox), v;
    }
    removeTransform(h) {
      const y = kt();
      an(y, h);
      for (let S = 0; S < this.path.length; S++) {
        const v = this.path[S];
        if (!Ji(v.latestValues))
          continue;
        let g;
        v.instance && (Yf(v.latestValues) && v.updateSnapshot(), g = kt(), an(g, v.measurePageBox())), Qg(y, v.latestValues, v.snapshot?.layoutBox, g);
      }
      return Ji(this.latestValues) && Qg(y, this.latestValues), y;
    }
    setTargetDelta(h) {
      this.targetDelta = h, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0;
    }
    setOptions(h) {
      this.options = {
        ...this.options,
        ...h,
        crossfade: h.crossfade !== void 0 ? h.crossfade : !0
      };
    }
    clearMeasurements() {
      this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1;
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== he.timestamp && this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(h = !1) {
      const y = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = y.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = y.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = y.isSharedProjectionDirty);
      const S = !!this.resumingFrom || this !== y;
      if (!(h || S && this.isSharedProjectionDirty || this.isProjectionDirty || this.parent?.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
        return;
      const { layout: g, layoutId: p } = this.options;
      if (!this.layout || !(g || p))
        return;
      this.resolvedRelativeTargetAt = he.timestamp;
      const b = this.getClosestProjectingParent();
      b && this.linkedParentVersion !== b.layoutVersion && !b.options.layoutRoot && this.removeRelativeTarget(), !this.targetDelta && !this.relativeTarget && (this.options.layoutAnchor !== !1 && b && b.layout ? this.createRelativeTarget(b, this.layout.layoutBox, b.layout.layoutBox) : this.removeRelativeTarget()), !(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = kt(), this.targetWithTransforms = kt()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), g2(this.target, this.relativeTarget, this.relativeParent.target, this.options.layoutAnchor || void 0)) : this.targetDelta ? (this.resumingFrom ? this.applyTransform(this.layout.layoutBox, !1, this.target) : an(this.target, this.layout.layoutBox), Ov(this.target, this.targetDelta)) : an(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1, this.options.layoutAnchor !== !1 && b && !!b.resumingFrom == !!this.resumingFrom && !b.options.layoutScroll && b.target && this.animationProgress !== 1 ? this.createRelativeTarget(b, this.target, b.target) : this.relativeParent = this.relativeTarget = void 0));
    }
    getClosestProjectingParent() {
      if (!(!this.parent || Yf(this.parent.latestValues) || Dv(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    createRelativeTarget(h, y, S) {
      this.relativeParent = h, this.linkedParentVersion = h.layoutVersion, this.forceRelativeParentToResolveTarget(), this.relativeTarget = kt(), this.relativeTargetOrigin = kt(), co(this.relativeTargetOrigin, y, S, this.options.layoutAnchor || void 0), an(this.relativeTarget, this.relativeTargetOrigin);
    }
    removeRelativeTarget() {
      this.relativeParent = this.relativeTarget = void 0;
    }
    calcProjection() {
      const h = this.getLead(), y = !!this.resumingFrom || this !== h;
      let S = !0;
      if ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (S = !1), y && (this.isSharedProjectionDirty || this.isTransformDirty) && (S = !1), this.resolvedRelativeTargetAt === he.timestamp && (S = !1), S)
        return;
      const { layout: v, layoutId: g } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(v || g))
        return;
      an(this.layoutCorrected, this.layout.layoutBox);
      const p = this.treeScale.x, b = this.treeScale.y;
      KA(this.layoutCorrected, this.treeScale, this.path, y), h.layout && !h.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (h.target = h.layout.layoutBox, h.targetWithTransforms = kt());
      const { target: N } = h;
      if (!N) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (Hg(this.prevProjectionDelta.x, this.projectionDelta.x), Hg(this.prevProjectionDelta.y, this.projectionDelta.y)), Wl(this.projectionDelta, this.layoutCorrected, N, this.latestValues), (this.treeScale.x !== p || this.treeScale.y !== b || !Pg(this.projectionDelta.x, this.prevProjectionDelta.x) || !Pg(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", N));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(h = !0) {
      if (this.options.visualElement?.scheduleRender(), h) {
        const y = this.getStack();
        y && y.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      this.prevProjectionDelta = Ka(), this.projectionDelta = Ka(), this.projectionDeltaWithTransform = Ka();
    }
    setAnimationOrigin(h, y = !1, S) {
      const v = this.snapshot, g = v ? v.latestValues : {}, p = { ...this.latestValues }, b = Ka();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !y;
      const N = kt(), z = v ? v.source : void 0, U = this.layout ? this.layout.source : void 0, w = z !== U, B = this.getStack(), Y = !B || B.members.length <= 1, q = !!(w && !Y && this.options.crossfade === !0 && !this.path.some(J2));
      this.animationProgress = 0;
      let X;
      const et = S?.interpolateProjection(h);
      this.mixTargetDelta = (it) => {
        const Z = it / 1e3, H = et?.(Z);
        H ? (b.x.translate = H.x, b.x.scale = Vt(h.x.scale, 1, Z), b.x.origin = h.x.origin, b.x.originPoint = h.x.originPoint, b.y.translate = H.y, b.y.scale = Vt(h.y.scale, 1, Z), b.y.origin = h.y.origin, b.y.originPoint = h.y.originPoint) : (n0(b.x, h.x, Z), n0(b.y, h.y, Z)), this.setTargetDelta(b), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (co(N, this.layout.layoutBox, this.relativeParent.layout.layoutBox, this.options.layoutAnchor || void 0), K2(this.relativeTarget, this.relativeTargetOrigin, N, Z), X && b2(this.relativeTarget, X) && (this.isProjectionDirty = !1), X || (X = kt()), an(X, this.relativeTarget)), w && (this.animationValues = p, x2(p, g, this.latestValues, Z, q, Y)), H && H.rotate !== void 0 && (this.animationValues || (this.animationValues = p), this.animationValues.pathRotation = H.rotate), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = Z;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(h) {
      this.notifyListeners("animationStart"), this.currentAnimation?.stop(), this.resumingFrom?.currentAnimation?.stop(), this.pendingAnimation && (Ti(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = wt.update(() => {
        to.hasAnimatedSinceResize = !0, this.motionValue || (this.motionValue = Fa(0)), this.motionValue.jump(0, !1), this.currentAnimation = D2(this.motionValue, [0, 1e3], {
          ...h,
          velocity: 0,
          isSync: !0,
          onUpdate: (y) => {
            this.mixTargetDelta(y), h.onUpdate && h.onUpdate(y);
          },
          onComplete: () => {
            h.onComplete && h.onComplete(), this.completeAnimation();
          }
        }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
      const h = this.getStack();
      h && h.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(_2), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const h = this.getLead();
      let { targetWithTransforms: y, target: S, layout: v, latestValues: g } = h;
      if (!(!y || !S || !v)) {
        if (this !== h && this.layout && v && Zv(this.options.animationType, this.layout.layoutBox, v.layoutBox)) {
          S = this.target || kt();
          const p = Te(this.layout.layoutBox.x);
          S.x.min = h.target.x.min, S.x.max = S.x.min + p;
          const b = Te(this.layout.layoutBox.y);
          S.y.min = h.target.y.min, S.y.max = S.y.min + b;
        }
        an(y, S), Ws(y, g), Wl(this.projectionDeltaWithTransform, this.layoutCorrected, y, g);
      }
    }
    registerSharedNode(h, y) {
      this.sharedNodes.has(h) || this.sharedNodes.set(h, new N2()), this.sharedNodes.get(h).add(y);
      const v = y.options.initialPromotionConfig;
      y.promote({
        transition: v ? v.transition : void 0,
        preserveFollowOpacity: v && v.shouldPreserveFollowOpacity ? v.shouldPreserveFollowOpacity(y) : void 0
      });
    }
    isLead() {
      const h = this.getStack();
      return h ? h.lead === this : !0;
    }
    getLead() {
      const { layoutId: h } = this.options;
      return h ? this.getStack()?.lead || this : this;
    }
    getPrevLead() {
      const { layoutId: h } = this.options;
      return h ? this.getStack()?.prevLead : void 0;
    }
    getStack() {
      const { layoutId: h } = this.options;
      if (h)
        return this.root.sharedNodes.get(h);
    }
    promote({ needsReset: h, transition: y, preserveFollowOpacity: S } = {}) {
      const v = this.getStack();
      v && v.promote(this, S), h && (this.projectionDelta = void 0, this.needsReset = !0), y && this.setOptions({ transition: y });
    }
    relegate() {
      const h = this.getStack();
      return h ? h.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: h } = this.options;
      if (!h)
        return;
      let y = !1;
      const { latestValues: S } = h;
      if ((S.z || S.rotate || S.rotateX || S.rotateY || S.rotateZ || S.skewX || S.skewY) && (y = !0), !y)
        return;
      const v = {};
      S.z && yf("z", h, v, this.animationValues);
      for (let g = 0; g < mf.length; g++)
        yf(`rotate${mf[g]}`, h, v, this.animationValues), yf(`skew${mf[g]}`, h, v, this.animationValues);
      h.render();
      for (const g in v)
        h.setStaticValue(g, v[g]), this.animationValues && (this.animationValues[g] = v[g]);
      h.scheduleRender();
    }
    applyProjectionStyles(h, y) {
      if (!this.instance || this.isSVG)
        return;
      if (!this.isVisible) {
        h.visibility = "hidden";
        return;
      }
      const S = this.getTransformTemplate();
      if (this.needsReset) {
        this.needsReset = !1, h.visibility = "", h.opacity = "", h.pointerEvents = $s(y?.pointerEvents) || "", h.transform = S ? S(this.latestValues, "") : "none";
        return;
      }
      const v = this.getLead();
      if (!this.projectionDelta || !this.layout || !v.target) {
        this.options.layoutId && (h.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, h.pointerEvents = $s(y?.pointerEvents) || ""), this.hasProjected && !Ji(this.latestValues) && (h.transform = S ? S({}, "") : "none", this.hasProjected = !1);
        return;
      }
      h.visibility = "";
      const g = v.animationValues || v.latestValues;
      this.applyTransformsToTarget();
      let p = E2(this.projectionDeltaWithTransform, this.treeScale, g);
      S && (p = S(g, p)), h.transform = p;
      const { x: b, y: N } = this.projectionDelta;
      h.transformOrigin = `${b.origin * 100}% ${N.origin * 100}% 0`, v.animationValues ? h.opacity = v === this ? g.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : g.opacityExit : h.opacity = v === this ? g.opacity !== void 0 ? g.opacity : "" : g.opacityExit !== void 0 ? g.opacityExit : 0;
      for (const z in Gf) {
        if (g[z] === void 0)
          continue;
        const { correct: U, applyTo: w, isCSSVariable: B } = Gf[z], Y = p === "none" ? g[z] : U(g[z], v);
        if (w) {
          const q = w.length;
          for (let X = 0; X < q; X++)
            h[w[X]] = Y;
        } else
          B ? this.options.visualElement.renderState.vars[z] = Y : h[z] = Y;
      }
      this.options.layoutId && (h.pointerEvents = v === this ? $s(y?.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((h) => h.currentAnimation?.stop()), this.root.nodes.forEach($g), this.root.sharedNodes.clear();
    }
  };
}
function w2(a) {
  a.updateLayout();
}
function U2(a) {
  const l = a.resumeFrom?.snapshot || a.snapshot;
  if (a.isLead() && a.layout && l && a.hasListeners("didUpdate")) {
    const { layoutBox: o, measuredBox: r } = a.layout, { animationType: c } = a.options, d = l.source !== a.layout.source;
    if (c === "size")
      Tn((g) => {
        const p = d ? l.measuredBox[g] : l.layoutBox[g], b = Te(p);
        p.min = o[g].min, p.max = p.min + b;
      });
    else if (c === "x" || c === "y") {
      const g = c === "x" ? "y" : "x";
      Xf(d ? l.measuredBox[g] : l.layoutBox[g], o[g]);
    } else Zv(c, l.layoutBox, o) && Tn((g) => {
      const p = d ? l.measuredBox[g] : l.layoutBox[g], b = Te(o[g]);
      p.max = p.min + b, a.relativeTarget && !a.currentAnimation && (a.isProjectionDirty = !0, a.relativeTarget[g].max = a.relativeTarget[g].min + b);
    });
    const h = Ka();
    Wl(h, o, l.layoutBox);
    const y = Ka();
    d ? Wl(y, a.applyTransform(r, !0), l.measuredBox) : Wl(y, o, l.layoutBox);
    const S = !Yv(h);
    let v = !1;
    if (!a.resumeFrom) {
      const g = a.getClosestProjectingParent();
      if (g && !g.resumeFrom) {
        const { snapshot: p, layout: b } = g;
        if (p && b) {
          const N = a.options.layoutAnchor || void 0, z = kt();
          co(z, l.layoutBox, p.layoutBox, N);
          const U = kt();
          co(U, o, b.layoutBox, N), qv(z, U) || (v = !0), g.options.layoutRoot && (a.relativeTarget = U, a.relativeTargetOrigin = z, a.relativeParent = g);
        }
      }
    }
    a.notifyListeners("didUpdate", {
      layout: o,
      snapshot: l,
      delta: y,
      layoutDelta: h,
      hasLayoutChanged: S,
      hasRelativeLayoutChanged: v
    });
  } else if (a.isLead()) {
    const { onExitComplete: o } = a.options;
    o && o();
  }
  a.options.transition = void 0;
}
function B2(a) {
  a.parent && (a.isProjecting() || (a.isProjectionDirty = a.parent.isProjectionDirty), a.isSharedProjectionDirty || (a.isSharedProjectionDirty = !!(a.isProjectionDirty || a.parent.isProjectionDirty || a.parent.isSharedProjectionDirty)), a.isTransformDirty || (a.isTransformDirty = a.parent.isTransformDirty));
}
function j2(a) {
  a.isProjectionDirty = a.isSharedProjectionDirty = a.isTransformDirty = !1;
}
function H2(a) {
  a.clearSnapshot();
}
function $g(a) {
  a.clearMeasurements();
}
function L2(a) {
  a.isLayoutDirty = !0, a.updateLayout();
}
function t0(a) {
  a.isLayoutDirty = !1;
}
function Y2(a) {
  a.isAnimationBlocked && a.layout && !a.isLayoutDirty && (a.snapshot = a.layout, a.isLayoutDirty = !0);
}
function q2(a) {
  const { visualElement: l } = a.options;
  l && l.getProps().onBeforeLayoutMeasure && l.notify("BeforeLayoutMeasure"), a.resetTransform();
}
function e0(a) {
  a.finishAnimation(), a.targetDelta = a.relativeTarget = a.target = void 0, a.isProjectionDirty = !0;
}
function G2(a) {
  a.resolveTargetDelta();
}
function X2(a) {
  a.calcProjection();
}
function Q2(a) {
  a.resetSkewAndRotation();
}
function Z2(a) {
  a.removeLeadSnapshot();
}
function n0(a, l, o) {
  a.translate = Vt(l.translate, 0, o), a.scale = Vt(l.scale, 1, o), a.origin = l.origin, a.originPoint = l.originPoint;
}
function i0(a, l, o, r) {
  a.min = Vt(l.min, o.min, r), a.max = Vt(l.max, o.max, r);
}
function K2(a, l, o, r) {
  i0(a.x, l.x, o.x, r), i0(a.y, l.y, o.y, r);
}
function J2(a) {
  return a.animationValues && a.animationValues.opacityExit !== void 0;
}
const F2 = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, a0 = (a) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(a), l0 = a0("applewebkit/") && !a0("chrome/") ? Math.round : Pe;
function u0(a) {
  a.min = l0(a.min), a.max = l0(a.max);
}
function P2(a) {
  u0(a.x), u0(a.y);
}
function Zv(a, l, o) {
  return a === "position" || a === "preserve-aspect" && !p2(Fg(l), Fg(o), 0.2);
}
function k2(a) {
  return a !== a.root && a.scroll?.wasRoot;
}
const I2 = Qv({
  attachResizeListener: (a, l) => au(a, "resize", l),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body?.scrollLeft || 0,
    y: document.documentElement.scrollTop || document.body?.scrollTop || 0
  }),
  checkIsScrollRoot: () => !0
}), pf = {
  current: void 0
}, Kv = Qv({
  measureScroll: (a) => ({
    x: a.scrollLeft,
    y: a.scrollTop
  }),
  defaultParent: () => {
    if (!pf.current) {
      const a = new I2({});
      a.mount(window), a.setOptions({ layoutScroll: !0 }), pf.current = a;
    }
    return pf.current;
  },
  resetTransform: (a, l) => {
    a.style.transform = l !== void 0 ? l : "none";
  },
  checkIsScrollRoot: (a) => window.getComputedStyle(a).position === "fixed"
}), bh = Q.createContext({
  transformPagePoint: (a) => a,
  isStatic: !1,
  reducedMotion: "never"
});
function s0(a, l) {
  if (typeof a == "function")
    return a(l);
  a != null && (a.current = l);
}
function W2(...a) {
  return (l) => {
    let o = !1;
    const r = a.map((c) => {
      const d = s0(c, l);
      return !o && typeof d == "function" && (o = !0), d;
    });
    if (o)
      return () => {
        for (let c = 0; c < r.length; c++) {
          const d = r[c];
          typeof d == "function" ? d() : s0(a[c], null);
        }
      };
  };
}
function $2(...a) {
  return Q.useCallback(W2(...a), a);
}
class t3 extends Q.Component {
  getSnapshotBeforeUpdate(l) {
    const o = this.props.childRef.current;
    if (Js(o) && l.isPresent && !this.props.isPresent && this.props.pop !== !1) {
      const r = o.offsetParent, c = Js(r) && r.offsetWidth || 0, d = Js(r) && r.offsetHeight || 0, h = getComputedStyle(o), y = this.props.sizeRef.current;
      y.height = parseFloat(h.height), y.width = parseFloat(h.width), y.top = o.offsetTop, y.left = o.offsetLeft, y.right = c - y.width - y.left, y.bottom = d - y.height - y.top, y.direction = h.direction;
    }
    return null;
  }
  /**
   * Required with getSnapshotBeforeUpdate to stop React complaining.
   */
  componentDidUpdate() {
  }
  render() {
    return this.props.children;
  }
}
function e3({ children: a, isPresent: l, anchorX: o, anchorY: r, root: c, pop: d }) {
  const h = Q.useId(), y = Q.useRef(null), S = Q.useRef({
    width: 0,
    height: 0,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    direction: "ltr"
  }), { nonce: v } = Q.useContext(bh), g = d !== !1 ? a.props?.ref ?? a?.ref : void 0, p = $2(y, g);
  return Q.useInsertionEffect(() => {
    const { width: b, height: N, top: z, left: U, right: w, bottom: B, direction: Y } = S.current;
    if (l || d === !1 || !y.current || !b || !N)
      return;
    const q = Y === "rtl", X = o === "left" ? q ? `right: ${w}` : `left: ${U}` : q ? `left: ${U}` : `right: ${w}`, et = r === "bottom" ? `bottom: ${B}` : `top: ${z}`;
    y.current.dataset.motionPopId = h;
    const it = document.createElement("style");
    v && (it.nonce = v);
    const Z = c ?? document.head;
    return Z.appendChild(it), it.sheet && it.sheet.insertRule(`
          [data-motion-pop-id="${h}"] {
            position: absolute !important;
            width: ${b}px !important;
            height: ${N}px !important;
            ${X}px !important;
            ${et}px !important;
          }
        `), () => {
      y.current?.removeAttribute("data-motion-pop-id"), Z.contains(it) && Z.removeChild(it);
    };
  }, [l]), lt.jsx(t3, { isPresent: l, childRef: y, sizeRef: S, pop: d, children: d === !1 ? a : Q.cloneElement(a, { ref: p }) });
}
const n3 = ({ children: a, initial: l, isPresent: o, onExitComplete: r, custom: c, presenceAffectsLayout: d, mode: h, anchorX: y, anchorY: S, root: v }) => {
  const g = Ff(i3), p = Q.useId(), b = Q.useRef(o), N = Q.useRef(r);
  Pf(() => {
    b.current = o, N.current = r;
  });
  let z = !0, U = Q.useMemo(() => (z = !1, {
    id: p,
    initial: l,
    isPresent: o,
    custom: c,
    onExitComplete: (w) => {
      g.set(w, !0);
      for (const B of g.values())
        if (!B)
          return;
      r && r();
    },
    register: (w) => (g.set(w, !1), () => {
      g.delete(w), !b.current && !g.size && N.current?.();
    })
  }), [o, g, r]);
  return d && z && (U = { ...U }), Q.useMemo(() => {
    g.forEach((w, B) => g.set(B, !1));
  }, [o]), Q.useEffect(() => {
    !o && !g.size && r && r();
  }, [o]), a = lt.jsx(e3, { pop: h === "popLayout", isPresent: o, anchorX: y, anchorY: S, root: v, children: a }), lt.jsx(ho.Provider, { value: U, children: a });
};
function i3() {
  return /* @__PURE__ */ new Map();
}
function Jv(a = !0) {
  const l = Q.useContext(ho);
  if (l === null)
    return [!0, null];
  const { isPresent: o, onExitComplete: r, register: c } = l, d = Q.useId();
  Q.useEffect(() => {
    if (a)
      return c(d);
  }, [a]);
  const h = Q.useCallback(() => a && r && r(d), [d, r, a]);
  return !o && r ? [!1, h] : [!0];
}
const Gs = (a) => a.key || "";
function o0(a) {
  const l = [];
  return Q.Children.forEach(a, (o) => {
    Q.isValidElement(o) && l.push(o);
  }), l;
}
const r0 = ({ children: a, custom: l, initial: o = !0, onExitComplete: r, presenceAffectsLayout: c = !0, mode: d = "sync", propagate: h = !1, anchorX: y = "left", anchorY: S = "top", root: v }) => {
  const [g, p] = Jv(h), b = Q.useMemo(() => o0(a), [a]), N = h && !g ? [] : b.map(Gs), z = Q.useRef(!0), U = Q.useRef(b), w = Ff(() => /* @__PURE__ */ new Map()), B = Q.useRef(/* @__PURE__ */ new Set()), [Y, q] = Q.useState(b), [X, et] = Q.useState(b);
  Pf(() => {
    z.current = !1, U.current = b;
    for (let H = 0; H < X.length; H++) {
      const ut = Gs(X[H]);
      N.includes(ut) ? (w.delete(ut), B.current.delete(ut)) : w.get(ut) !== !0 && w.set(ut, !1);
    }
  }, [X, N.length, N.join("-")]);
  const it = [];
  if (b !== Y) {
    let H = [...b];
    for (let ut = 0; ut < X.length; ut++) {
      const k = X[ut], mt = Gs(k);
      N.includes(mt) || (H.splice(ut, 0, k), it.push(k));
    }
    return d === "wait" && it.length && (H = it), et(o0(H)), q(b), null;
  }
  const { forceRender: Z } = Q.useContext(Jf);
  return lt.jsx(lt.Fragment, { children: X.map((H) => {
    const ut = Gs(H), k = h && !g ? !1 : b === X || N.includes(ut), mt = () => {
      if (B.current.has(ut))
        return;
      if (w.has(ut))
        B.current.add(ut), w.set(ut, !0);
      else
        return;
      let At = !0;
      w.forEach((It) => {
        It || (At = !1);
      }), At && (Z?.(), et(U.current), h && p?.(), r && r());
    };
    return lt.jsx(n3, { isPresent: k, initial: !z.current || o ? void 0 : !1, custom: l, presenceAffectsLayout: c, mode: d, root: v, onExitComplete: k ? void 0 : mt, anchorX: y, anchorY: S, children: H }, ut);
  }) });
}, Fv = Q.createContext({ strict: !1 }), c0 = {
  animation: [
    "animate",
    "variants",
    "whileHover",
    "whileTap",
    "exit",
    "whileInView",
    "whileFocus",
    "whileDrag"
  ],
  exit: ["exit"],
  drag: ["drag", "dragControls"],
  focus: ["whileFocus"],
  hover: ["whileHover", "onHoverStart", "onHoverEnd"],
  tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
  pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
  inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
  layout: ["layout", "layoutId"]
};
let f0 = !1;
function a3() {
  if (f0)
    return;
  const a = {};
  for (const l in c0)
    a[l] = {
      isEnabled: (o) => c0[l].some((r) => !!o[r])
    };
  xv(a), f0 = !0;
}
function Pv() {
  return a3(), GA();
}
function l3(a) {
  const l = Pv();
  for (const o in a)
    l[o] = {
      ...l[o],
      ...a[o]
    };
  xv(l);
}
const u3 = /* @__PURE__ */ new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "propagate",
  "ignoreStrict",
  "viewport"
]);
function fo(a) {
  return a.startsWith("while") || a.startsWith("drag") && a !== "draggable" || a.startsWith("layout") || a.startsWith("onTap") || a.startsWith("onPan") || a.startsWith("onLayout") || u3.has(a);
}
let kv = (a) => !fo(a);
function s3(a) {
  typeof a == "function" && (kv = (l) => l.startsWith("on") ? !fo(l) : a(l));
}
try {
  s3(require("@emotion/is-prop-valid").default);
} catch {
}
function o3(a, l, o) {
  const r = {};
  for (const c in a)
    c === "values" && typeof a.values == "object" || de(a[c]) || (kv(c) || o === !0 && fo(c) || !l && !fo(c) || // If trying to use native HTML drag events, forward drag listeners
    a.draggable && c.startsWith("onDrag")) && (r[c] = a[c]);
  return r;
}
const go = /* @__PURE__ */ Q.createContext({});
function r3(a, l) {
  if (po(a)) {
    const { initial: o, animate: r } = a;
    return {
      initial: o === !1 || iu(o) ? o : void 0,
      animate: iu(r) ? r : void 0
    };
  }
  return a.inherit !== !1 ? l : {};
}
function c3(a) {
  const { initial: l, animate: o } = r3(a, Q.useContext(go));
  return Q.useMemo(() => ({ initial: l, animate: o }), [h0(l), h0(o)]);
}
function h0(a) {
  return Array.isArray(a) ? a.join(" ") : a;
}
const Eh = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function Iv(a, l, o) {
  for (const r in l)
    !de(l[r]) && !Nv(r, o) && (a[r] = l[r]);
}
function f3({ transformTemplate: a }, l) {
  return Q.useMemo(() => {
    const o = Eh();
    return Sh(o, l, a), Object.assign({}, o.vars, o.style);
  }, [l]);
}
function h3(a, l) {
  const o = a.style || {}, r = {};
  return Iv(r, o, a), Object.assign(r, f3(a, l)), r;
}
function d3(a, l) {
  const o = {}, r = h3(a, l);
  return a.drag && a.dragListener !== !1 && (o.draggable = !1, r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none", r.touchAction = a.drag === !0 ? "none" : `pan-${a.drag === "x" ? "y" : "x"}`), a.tabIndex === void 0 && (a.onTap || a.onTapStart || a.whileTap) && (o.tabIndex = 0), o.style = r, o;
}
const Wv = () => ({
  ...Eh(),
  attrs: {}
});
function m3(a, l, o, r) {
  const c = Q.useMemo(() => {
    const d = Wv();
    return _v(d, l, wv(r), a.transformTemplate, a.style), {
      ...d.attrs,
      style: { ...d.style }
    };
  }, [l]);
  if (a.style) {
    const d = {};
    Iv(d, a.style, a), c.style = { ...d, ...c.style };
  }
  return c;
}
const y3 = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view"
];
function Ah(a) {
  return (
    /**
     * If it's not a string, it's a custom React component. Currently we only support
     * HTML custom React components.
     */
    typeof a != "string" || /**
     * If it contains a dash, the element is a custom HTML webcomponent.
     */
    a.includes("-") ? !1 : (
      /**
       * If it's in our list of lowercase SVG tags, it's an SVG component
       */
      !!(y3.indexOf(a) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(a))
    )
  );
}
function p3(a, l, o, { latestValues: r }, c, d = !1, h) {
  const S = (h ?? Ah(a) ? m3 : d3)(l, r, c, a), v = o3(l, typeof a == "string", d), g = a !== Q.Fragment ? { ...v, ...S, ref: o } : {}, { children: p } = l, b = Q.useMemo(() => de(p) ? p.get() : p, [p]);
  return Q.createElement(a, {
    ...g,
    children: b
  });
}
function g3({ scrapeMotionValuesFromProps: a, createRenderState: l }, o, r, c) {
  return {
    latestValues: v3(o, r, c, a),
    renderState: l()
  };
}
function v3(a, l, o, r) {
  const c = {}, d = r(a, {});
  for (const b in d)
    c[b] = $s(d[b]);
  let { initial: h, animate: y } = a;
  const S = po(a), v = Ev(a);
  l && v && !S && a.inherit !== !1 && (h === void 0 && (h = l.initial), y === void 0 && (y = l.animate));
  let g = o ? o.initial === !1 : !1;
  g = g || h === !1;
  const p = g ? y : h;
  if (p && typeof p != "boolean" && !yo(p)) {
    const b = Array.isArray(p) ? p : [p];
    for (let N = 0; N < b.length; N++) {
      const z = rh(a, b[N]);
      if (z) {
        const { transitionEnd: U, transition: w, ...B } = z;
        for (const Y in B) {
          let q = B[Y];
          if (Array.isArray(q)) {
            const X = g ? q.length - 1 : 0;
            q = q[X];
          }
          q !== null && (c[Y] = q);
        }
        for (const Y in U)
          c[Y] = U[Y];
      }
    }
  }
  return c;
}
const $v = (a) => (l, o) => {
  const r = Q.useContext(go), c = Q.useContext(ho), d = () => g3(a, l, r, c);
  return o ? d() : Ff(d);
}, S3 = /* @__PURE__ */ $v({
  scrapeMotionValuesFromProps: Th,
  createRenderState: Eh
}), T3 = /* @__PURE__ */ $v({
  scrapeMotionValuesFromProps: Uv,
  createRenderState: Wv
}), b3 = Symbol.for("motionComponentSymbol");
function E3(a, l, o) {
  const r = Q.useRef(o);
  Q.useInsertionEffect(() => {
    r.current = o;
  });
  const c = Q.useRef(null);
  return Q.useCallback((d) => {
    d && a.onMount?.(d), l && (d ? l.mount(d) : l.unmount());
    const h = r.current;
    if (typeof h == "function")
      if (d) {
        const y = h(d);
        typeof y == "function" && (c.current = y);
      } else c.current ? (c.current(), c.current = null) : h(d);
    else h && (h.current = d);
  }, [l]);
}
const t1 = Q.createContext({});
function Xa(a) {
  return a && typeof a == "object" && Object.prototype.hasOwnProperty.call(a, "current");
}
function A3(a, l, o, r, c, d) {
  const { visualElement: h } = Q.useContext(go), y = Q.useContext(Fv), S = Q.useContext(ho), v = Q.useContext(bh), g = v.reducedMotion, p = v.skipAnimations, b = Q.useRef(null), N = Q.useRef(!1);
  r = r || y.renderer, !b.current && r && (b.current = r(a, {
    visualState: l,
    parent: h,
    props: o,
    presenceContext: S,
    blockInitialAnimation: S ? S.initial === !1 : !1,
    reducedMotionConfig: g,
    skipAnimations: p,
    isSVG: d
  }), N.current && b.current && (b.current.manuallyAnimateOnMount = !0));
  const z = b.current, U = Q.useContext(t1);
  z && !z.projection && c && (z.type === "html" || z.type === "svg") && x3(b.current, o, c, U);
  const w = Q.useRef(!1);
  Q.useInsertionEffect(() => {
    z && w.current && z.update(o, S);
  });
  const B = o[fv], Y = Q.useRef(!!B && typeof window < "u" && !window.MotionHandoffIsComplete?.(B) && window.MotionHasOptimisedAnimation?.(B));
  return Pf(() => {
    N.current = !0, z && (w.current = !0, window.MotionIsMounted = !0, z.updateFeatures(), z.scheduleRenderMicrotask(), Y.current && z.animationState && z.animationState.animateChanges());
  }), Q.useEffect(() => {
    z && (!Y.current && z.animationState && z.animationState.animateChanges(), Y.current && (queueMicrotask(() => {
      window.MotionHandoffMarkAsComplete?.(B);
    }), Y.current = !1), z.enteringChildren = void 0);
  }), z;
}
function x3(a, l, o, r) {
  const { layoutId: c, layout: d, drag: h, dragConstraints: y, layoutScroll: S, layoutRoot: v, layoutAnchor: g, layoutCrossfade: p } = l;
  a.projection = new o(a.latestValues, l["data-framer-portal-id"] ? void 0 : e1(a.parent)), a.projection.setOptions({
    layoutId: c,
    layout: d,
    alwaysMeasureLayout: !!h || y && Xa(y),
    visualElement: a,
    /**
     * TODO: Update options in an effect. This could be tricky as it'll be too late
     * to update by the time layout animations run.
     * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
     * ensuring it gets called if there's no potential layout animations.
     *
     */
    animationType: typeof d == "string" ? d : "both",
    initialPromotionConfig: r,
    crossfade: p,
    layoutScroll: S,
    layoutRoot: v,
    layoutAnchor: g
  });
}
function e1(a) {
  if (a)
    return a.options.allowProjection !== !1 ? a.projection : e1(a.parent);
}
function gf(a, { forwardMotionProps: l = !1, type: o } = {}, r, c) {
  r && l3(r);
  const d = o ? o === "svg" : Ah(a), h = d ? T3 : S3;
  function y(v, g) {
    let p;
    const b = {
      ...Q.useContext(bh),
      ...v,
      layoutId: M3(v)
    }, { isStatic: N } = b, z = c3(v), U = h(v, N);
    if (!N && typeof window < "u") {
      C3();
      const w = D3(b);
      p = w.MeasureLayout, z.visualElement = A3(a, U, b, c, w.ProjectionNode, d);
    }
    return lt.jsxs(go.Provider, { value: z, children: [p && z.visualElement ? lt.jsx(p, { visualElement: z.visualElement, ...b }) : null, p3(a, v, E3(U, z.visualElement, g), U, N, l, d)] });
  }
  y.displayName = `motion.${typeof a == "string" ? a : `create(${a.displayName ?? a.name ?? ""})`}`;
  const S = Q.forwardRef(y);
  return S[b3] = a, S;
}
function M3({ layoutId: a }) {
  const l = Q.useContext(Jf).id;
  return l && a !== void 0 ? l + "-" + a : a;
}
function C3(a, l) {
  Q.useContext(Fv).strict;
}
function D3(a) {
  const l = Pv(), { drag: o, layout: r } = l;
  if (!o && !r)
    return {};
  const c = { ...o, ...r };
  return {
    MeasureLayout: o?.isEnabled(a) || r?.isEnabled(a) ? c.MeasureLayout : void 0,
    ProjectionNode: c.ProjectionNode
  };
}
function O3(a, l) {
  if (typeof Proxy > "u")
    return gf;
  const o = /* @__PURE__ */ new Map(), r = (d, h) => gf(d, h, a, l), c = (d, h) => r(d, h);
  return new Proxy(c, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (d, h) => h === "create" ? r : (o.has(h) || o.set(h, gf(h, void 0, a, l)), o.get(h))
  });
}
const R3 = (a, l) => l.isSVG ?? Ah(a) ? new l2(l) : new $A(l, {
  allowProjection: a !== Q.Fragment
});
class z3 extends bi {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(l) {
    super(l), l.animationState || (l.animationState = c2(l));
  }
  updateAnimationControlsSubscription() {
    const { animate: l } = this.node.getProps();
    yo(l) && (this.unmountControls = l.subscribe(this.node));
  }
  /**
   * Subscribe any provided AnimationControls to the component's VisualElement
   */
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: l } = this.node.getProps(), { animate: o } = this.node.prevProps || {};
    l !== o && this.updateAnimationControlsSubscription();
  }
  unmount() {
    this.node.animationState.reset(), this.unmountControls?.();
  }
}
let N3 = 0;
class _3 extends bi {
  constructor() {
    super(...arguments), this.id = N3++, this.isExitComplete = !1;
  }
  update() {
    if (!this.node.presenceContext)
      return;
    const { isPresent: l, onExitComplete: o } = this.node.presenceContext, { isPresent: r } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || l === r)
      return;
    if (l && r === !1) {
      if (this.isExitComplete) {
        const { initial: d, custom: h } = this.node.getProps();
        if (typeof d == "string" || typeof d == "object" && d !== null && !Array.isArray(d)) {
          const y = Ii(this.node, d, h);
          if (y) {
            const { transition: S, transitionEnd: v, ...g } = y;
            for (const p in g)
              this.node.getValue(p)?.jump(g[p]);
          }
        }
        this.node.animationState.reset(), this.node.animationState.animateChanges();
      } else
        this.node.animationState.setActive("exit", !1);
      this.isExitComplete = !1;
      return;
    }
    const c = this.node.animationState.setActive("exit", !l);
    o && !l && c.then(() => {
      this.isExitComplete = !0, o(this.id);
    });
  }
  mount() {
    const { register: l, onExitComplete: o } = this.node.presenceContext || {};
    o && o(this.id), l && (this.unmount = l(this.id));
  }
  unmount() {
  }
}
const V3 = {
  animation: {
    Feature: z3
  },
  exit: {
    Feature: _3
  }
};
function ru(a) {
  return {
    point: {
      x: a.pageX,
      y: a.pageY
    }
  };
}
const w3 = (a) => (l) => mh(l) && a(l, ru(l));
function $l(a, l, o, r) {
  return au(a, l, w3(o), r);
}
const n1 = ({ current: a }) => a ? a.ownerDocument.defaultView : null, d0 = (a, l) => Math.abs(a - l);
function U3(a, l) {
  const o = d0(a.x, l.x), r = d0(a.y, l.y);
  return Math.sqrt(o ** 2 + r ** 2);
}
const m0 = /* @__PURE__ */ new Set(["auto", "scroll"]);
class i1 {
  constructor(l, o, { transformPagePoint: r, contextWindow: c = window, dragSnapToOrigin: d = !1, distanceThreshold: h = 3, element: y } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.lastRawMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.scrollPositions = /* @__PURE__ */ new Map(), this.removeScrollListeners = null, this.onElementScroll = (z) => {
      this.handleScroll(z.target);
    }, this.onWindowScroll = () => {
      this.handleScroll(window);
    }, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      this.lastRawMoveEventInfo && (this.lastMoveEventInfo = Xs(this.lastRawMoveEventInfo, this.transformPagePoint));
      const z = vf(this.lastMoveEventInfo, this.history), U = this.startEvent !== null, w = U3(z.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
      if (!U && !w)
        return;
      const { point: B } = z, { timestamp: Y } = he;
      this.history.push({ ...B, timestamp: Y });
      const { onStart: q, onMove: X } = this.handlers;
      U || (q && q(this.lastMoveEvent, z), this.startEvent = this.lastMoveEvent), X && X(this.lastMoveEvent, z);
    }, this.handlePointerMove = (z, U) => {
      this.lastMoveEvent = z, this.lastRawMoveEventInfo = U, this.lastMoveEventInfo = Xs(U, this.transformPagePoint), wt.update(this.updatePoint, !0);
    }, this.handlePointerUp = (z, U) => {
      this.end();
      const { onEnd: w, onSessionEnd: B, resumeAnimation: Y } = this.handlers;
      if ((this.dragSnapToOrigin || !this.startEvent) && Y && Y(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const q = vf(z.type === "pointercancel" ? this.lastMoveEventInfo : Xs(U, this.transformPagePoint), this.history);
      this.startEvent && w && w(z, q), B && B(z, q);
    }, !mh(l))
      return;
    this.dragSnapToOrigin = d, this.handlers = o, this.transformPagePoint = r, this.distanceThreshold = h, this.contextWindow = c || window;
    const S = ru(l), v = Xs(S, this.transformPagePoint), { point: g } = v, { timestamp: p } = he;
    this.history = [{ ...g, timestamp: p }];
    const { onSessionStart: b } = o;
    b && b(l, vf(v, this.history));
    const N = { passive: !0, capture: !0 };
    this.removeListeners = uu($l(this.contextWindow, "pointermove", this.handlePointerMove, N), $l(this.contextWindow, "pointerup", this.handlePointerUp, N), $l(this.contextWindow, "pointercancel", this.handlePointerUp, N)), y && this.startScrollTracking(y);
  }
  /**
   * Start tracking scroll on ancestors and window.
   */
  startScrollTracking(l) {
    let o = l.parentElement;
    for (; o; ) {
      const r = getComputedStyle(o);
      (m0.has(r.overflowX) || m0.has(r.overflowY)) && this.scrollPositions.set(o, {
        x: o.scrollLeft,
        y: o.scrollTop
      }), o = o.parentElement;
    }
    this.scrollPositions.set(window, {
      x: window.scrollX,
      y: window.scrollY
    }), window.addEventListener("scroll", this.onElementScroll, {
      capture: !0
    }), window.addEventListener("scroll", this.onWindowScroll), this.removeScrollListeners = () => {
      window.removeEventListener("scroll", this.onElementScroll, {
        capture: !0
      }), window.removeEventListener("scroll", this.onWindowScroll);
    };
  }
  /**
   * Handle scroll compensation during drag.
   *
   * For element scroll: adjusts history origin since pageX/pageY doesn't change.
   * For window scroll: adjusts lastMoveEventInfo since pageX/pageY would change.
   */
  handleScroll(l) {
    const o = this.scrollPositions.get(l);
    if (!o)
      return;
    const r = l === window, c = r ? { x: window.scrollX, y: window.scrollY } : {
      x: l.scrollLeft,
      y: l.scrollTop
    }, d = { x: c.x - o.x, y: c.y - o.y };
    d.x === 0 && d.y === 0 || (r ? this.lastMoveEventInfo && (this.lastMoveEventInfo.point.x += d.x, this.lastMoveEventInfo.point.y += d.y) : this.history.length > 0 && (this.history[0].x -= d.x, this.history[0].y -= d.y), this.scrollPositions.set(l, c), wt.update(this.updatePoint, !0));
  }
  updateHandlers(l) {
    this.handlers = l;
  }
  end() {
    this.removeListeners && this.removeListeners(), this.removeScrollListeners && this.removeScrollListeners(), this.scrollPositions.clear(), Ti(this.updatePoint);
  }
}
function Xs(a, l) {
  return l ? { point: l(a.point) } : a;
}
function y0(a, l) {
  return { x: a.x - l.x, y: a.y - l.y };
}
function vf({ point: a }, l) {
  return {
    point: a,
    delta: y0(a, a1(l)),
    offset: y0(a, B3(l)),
    velocity: j3(l, 0.1)
  };
}
function B3(a) {
  return a[0];
}
function a1(a) {
  return a[a.length - 1];
}
function j3(a, l) {
  if (a.length < 2)
    return { x: 0, y: 0 };
  let o = a.length - 1, r = null;
  const c = a1(a);
  for (; o >= 0 && (r = a[o], !(c.timestamp - r.timestamp > /* @__PURE__ */ De(l))); )
    o--;
  if (!r)
    return { x: 0, y: 0 };
  r === a[0] && a.length > 2 && c.timestamp - r.timestamp > /* @__PURE__ */ De(l) * 2 && (r = a[1]);
  const d = /* @__PURE__ */ Fe(c.timestamp - r.timestamp);
  if (d === 0)
    return { x: 0, y: 0 };
  const h = {
    x: (c.x - r.x) / d,
    y: (c.y - r.y) / d
  };
  return h.x === 1 / 0 && (h.x = 0), h.y === 1 / 0 && (h.y = 0), h;
}
function H3(a, { min: l, max: o }, r) {
  return l !== void 0 && a < l ? a = r ? Vt(l, a, r.min) : Math.max(a, l) : o !== void 0 && a > o && (a = r ? Vt(o, a, r.max) : Math.min(a, o)), a;
}
function p0(a, l, o) {
  return {
    min: l !== void 0 ? a.min + l : void 0,
    max: o !== void 0 ? a.max + o - (a.max - a.min) : void 0
  };
}
function L3(a, { top: l, left: o, bottom: r, right: c }) {
  return {
    x: p0(a.x, o, c),
    y: p0(a.y, l, r)
  };
}
function g0(a, l) {
  let o = l.min - a.min, r = l.max - a.max;
  return l.max - l.min < a.max - a.min && ([o, r] = [r, o]), { min: o, max: r };
}
function Y3(a, l) {
  return {
    x: g0(a.x, l.x),
    y: g0(a.y, l.y)
  };
}
function q3(a, l) {
  let o = 0.5;
  const r = Te(a), c = Te(l);
  return c > r ? o = /* @__PURE__ */ eu(l.min, l.max - r, a.min) : r > c && (o = /* @__PURE__ */ eu(a.min, a.max - c, l.min)), xn(0, 1, o);
}
function G3(a, l) {
  const o = {};
  return l.min !== void 0 && (o.min = l.min - a.min), l.max !== void 0 && (o.max = l.max - a.min), o;
}
const Qf = 0.35;
function X3(a = Qf) {
  return a === !1 ? a = 0 : a === !0 && (a = Qf), {
    x: v0(a, "left", "right"),
    y: v0(a, "top", "bottom")
  };
}
function v0(a, l, o) {
  return {
    min: S0(a, l),
    max: S0(a, o)
  };
}
function S0(a, l) {
  return typeof a == "number" ? a : a[l] || 0;
}
const Q3 = /* @__PURE__ */ new WeakMap();
class Z3 {
  constructor(l) {
    this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = kt(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = l;
  }
  start(l, { snapToCursor: o = !1, distanceThreshold: r } = {}) {
    const { presenceContext: c } = this.visualElement;
    if (c && c.isPresent === !1)
      return;
    const d = (p) => {
      o && this.snapToCursor(ru(p).point), this.stopAnimation();
    }, h = (p, b) => {
      const { drag: N, dragPropagation: z, onDragStart: U } = this.getProps();
      if (N && !z && (this.openDragLock && this.openDragLock(), this.openDragLock = SA(N), !this.openDragLock))
        return;
      this.latestPointerEvent = p, this.latestPanInfo = b, this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), Tn((B) => {
        let Y = this.getAxisMotionValue(B).get() || 0;
        if (An.test(Y)) {
          const { projection: q } = this.visualElement;
          if (q && q.layout) {
            const X = q.layout.layoutBox[B];
            X && (Y = Te(X) * (parseFloat(Y) / 100));
          }
        }
        this.originPoint[B] = Y;
      }), U && wt.update(() => U(p, b), !1, !0), Uf(this.visualElement, "transform");
      const { animationState: w } = this.visualElement;
      w && w.setActive("whileDrag", !0);
    }, y = (p, b) => {
      this.latestPointerEvent = p, this.latestPanInfo = b;
      const { dragPropagation: N, dragDirectionLock: z, onDirectionLock: U, onDrag: w } = this.getProps();
      if (!N && !this.openDragLock)
        return;
      const { offset: B } = b;
      if (z && this.currentDirection === null) {
        this.currentDirection = J3(B), this.currentDirection !== null && U && U(this.currentDirection);
        return;
      }
      this.updateAxis("x", b.point, B), this.updateAxis("y", b.point, B), this.visualElement.render(), w && wt.update(() => w(p, b), !1, !0);
    }, S = (p, b) => {
      this.latestPointerEvent = p, this.latestPanInfo = b, this.stop(p, b), this.latestPointerEvent = null, this.latestPanInfo = null;
    }, v = () => {
      const { dragSnapToOrigin: p } = this.getProps();
      (p || this.constraints) && this.startAnimation({ x: 0, y: 0 });
    }, { dragSnapToOrigin: g } = this.getProps();
    this.panSession = new i1(l, {
      onSessionStart: d,
      onStart: h,
      onMove: y,
      onSessionEnd: S,
      resumeAnimation: v
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: g,
      distanceThreshold: r,
      contextWindow: n1(this.visualElement),
      element: this.visualElement.current
    });
  }
  /**
   * @internal
   */
  stop(l, o) {
    const r = l || this.latestPointerEvent, c = o || this.latestPanInfo, d = this.isDragging;
    if (this.cancel(), !d || !c || !r)
      return;
    const { velocity: h } = c;
    this.startAnimation(h);
    const { onDragEnd: y } = this.getProps();
    y && wt.postRender(() => y(r, c));
  }
  /**
   * @internal
   */
  cancel() {
    this.isDragging = !1;
    const { projection: l, animationState: o } = this.visualElement;
    l && (l.isAnimationBlocked = !1), this.endPanSession();
    const { dragPropagation: r } = this.getProps();
    !r && this.openDragLock && (this.openDragLock(), this.openDragLock = null), o && o.setActive("whileDrag", !1);
  }
  /**
   * Clean up the pan session without modifying other drag state.
   * This is used during unmount to ensure event listeners are removed
   * without affecting projection animations or drag locks.
   * @internal
   */
  endPanSession() {
    this.panSession && this.panSession.end(), this.panSession = void 0;
  }
  updateAxis(l, o, r) {
    const { drag: c } = this.getProps();
    if (!r || !Qs(l, c, this.currentDirection))
      return;
    const d = this.getAxisMotionValue(l);
    let h = this.originPoint[l] + r[l];
    this.constraints && this.constraints[l] && (h = H3(h, this.constraints[l], this.elastic[l])), d.set(h);
  }
  resolveConstraints() {
    const { dragConstraints: l, dragElastic: o } = this.getProps(), r = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : this.visualElement.projection?.layout, c = this.constraints;
    l && Xa(l) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : l && r ? this.constraints = L3(r.layoutBox, l) : this.constraints = !1, this.elastic = X3(o), c !== this.constraints && !Xa(l) && r && this.constraints && !this.hasMutatedConstraints && Tn((d) => {
      this.constraints !== !1 && this.getAxisMotionValue(d) && (this.constraints[d] = G3(r.layoutBox[d], this.constraints[d]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: l, onMeasureDragConstraints: o } = this.getProps();
    if (!l || !Xa(l))
      return !1;
    const r = l.current;
    vi(r !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.", "drag-constraints-ref");
    const { projection: c } = this.visualElement;
    if (!c || !c.layout)
      return !1;
    c.root && (c.root.scroll = void 0, c.root.updateScroll());
    const d = JA(r, c.root, this.visualElement.getTransformPagePoint());
    let h = Y3(c.layout.layoutBox, d);
    if (o) {
      const y = o(QA(h));
      this.hasMutatedConstraints = !!y, y && (h = Cv(y));
    }
    return h;
  }
  startAnimation(l) {
    const { drag: o, dragMomentum: r, dragElastic: c, dragTransition: d, dragSnapToOrigin: h, onDragTransitionEnd: y } = this.getProps(), S = this.constraints || {}, v = Tn((g) => {
      if (!Qs(g, o, this.currentDirection))
        return;
      let p = S && S[g] || {};
      (h === !0 || h === g) && (p = { min: 0, max: 0 });
      const b = c ? 200 : 1e6, N = c ? 40 : 1e7, z = {
        type: "inertia",
        velocity: r ? l[g] : 0,
        bounceStiffness: b,
        bounceDamping: N,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...d,
        ...p
      };
      return this.startAxisValueAnimation(g, z);
    });
    return Promise.all(v).then(y);
  }
  startAxisValueAnimation(l, o) {
    const r = this.getAxisMotionValue(l);
    return Uf(this.visualElement, l), r.start(oh(l, r, 0, o, this.visualElement, !1));
  }
  stopAnimation() {
    Tn((l) => this.getAxisMotionValue(l).stop());
  }
  /**
   * Drag works differently depending on which props are provided.
   *
   * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
   * - Otherwise, we apply the delta to the x/y motion values.
   */
  getAxisMotionValue(l) {
    const o = `_drag${l.toUpperCase()}`, c = this.visualElement.getProps()[o];
    return c || this.visualElement.getValue(l, this.visualElement.latestValues[l] ?? 0);
  }
  snapToCursor(l) {
    Tn((o) => {
      const { drag: r } = this.getProps();
      if (!Qs(o, r, this.currentDirection))
        return;
      const { projection: c } = this.visualElement, d = this.getAxisMotionValue(o);
      if (c && c.layout) {
        const { min: h, max: y } = c.layout.layoutBox[o], S = d.get() || 0;
        d.set(l[o] - Vt(h, y, 0.5) + S);
      }
    });
  }
  /**
   * When the viewport resizes we want to check if the measured constraints
   * have changed and, if so, reposition the element within those new constraints
   * relative to where it was before the resize.
   */
  scalePositionWithinConstraints() {
    if (!this.visualElement.current)
      return;
    const { drag: l, dragConstraints: o } = this.getProps(), { projection: r } = this.visualElement;
    if (!Xa(o) || !r || !this.constraints)
      return;
    this.stopAnimation();
    const c = { x: 0, y: 0 };
    Tn((h) => {
      const y = this.getAxisMotionValue(h);
      if (y && this.constraints !== !1) {
        const S = y.get();
        c[h] = q3({ min: S, max: S }, this.constraints[h]);
      }
    });
    const { transformTemplate: d } = this.visualElement.getProps();
    this.visualElement.current.style.transform = d ? d({}, "") : "none", r.root && r.root.updateScroll(), r.updateLayout(), this.constraints = !1, this.resolveConstraints(), Tn((h) => {
      if (!Qs(h, l, null))
        return;
      const y = this.getAxisMotionValue(h), { min: S, max: v } = this.constraints[h];
      y.set(Vt(S, v, c[h]));
    }), this.visualElement.render();
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    Q3.set(this.visualElement, this);
    const l = this.visualElement.current, o = $l(l, "pointerdown", (v) => {
      const { drag: g, dragListener: p = !0 } = this.getProps(), b = v.target, N = b !== l && MA(b);
      g && p && !N && this.start(v);
    });
    let r;
    const c = () => {
      const { dragConstraints: v } = this.getProps();
      Xa(v) && v.current && (this.constraints = this.resolveRefConstraints(), r || (r = K3(l, v.current, () => this.scalePositionWithinConstraints())));
    }, { projection: d } = this.visualElement, h = d.addEventListener("measure", c);
    d && !d.layout && (d.root && d.root.updateScroll(), d.updateLayout()), wt.read(c);
    const y = au(window, "resize", () => this.scalePositionWithinConstraints()), S = d.addEventListener("didUpdate", (({ delta: v, hasLayoutChanged: g }) => {
      this.isDragging && g && (Tn((p) => {
        const b = this.getAxisMotionValue(p);
        b && (this.originPoint[p] += v[p].translate, b.set(b.get() + v[p].translate));
      }), this.visualElement.render());
    }));
    return () => {
      y(), o(), h(), S && S(), r && r();
    };
  }
  getProps() {
    const l = this.visualElement.getProps(), { drag: o = !1, dragDirectionLock: r = !1, dragPropagation: c = !1, dragConstraints: d = !1, dragElastic: h = Qf, dragMomentum: y = !0 } = l;
    return {
      ...l,
      drag: o,
      dragDirectionLock: r,
      dragPropagation: c,
      dragConstraints: d,
      dragElastic: h,
      dragMomentum: y
    };
  }
}
function T0(a) {
  let l = !0;
  return () => {
    if (l) {
      l = !1;
      return;
    }
    a();
  };
}
function K3(a, l, o) {
  const r = Cg(a, T0(o)), c = Cg(l, T0(o));
  return () => {
    r(), c();
  };
}
function Qs(a, l, o) {
  return (l === !0 || l === a) && (o === null || o === a);
}
function J3(a, l = 10) {
  let o = null;
  return Math.abs(a.y) > l ? o = "y" : Math.abs(a.x) > l && (o = "x"), o;
}
class F3 extends bi {
  constructor(l) {
    super(l), this.removeGroupControls = Pe, this.removeListeners = Pe, this.controls = new Z3(l);
  }
  mount() {
    const { dragControls: l } = this.node.getProps();
    l && (this.removeGroupControls = l.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || Pe;
  }
  update() {
    const { dragControls: l } = this.node.getProps(), { dragControls: o } = this.node.prevProps || {};
    l !== o && (this.removeGroupControls(), l && (this.removeGroupControls = l.subscribe(this.controls)));
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners(), this.controls.isDragging || this.controls.endPanSession();
  }
}
const Sf = (a) => (l, o) => {
  a && wt.update(() => a(l, o), !1, !0);
};
class P3 extends bi {
  constructor() {
    super(...arguments), this.removePointerDownListener = Pe;
  }
  onPointerDown(l) {
    this.session = new i1(l, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: n1(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: l, onPanStart: o, onPan: r, onPanEnd: c } = this.node.getProps();
    return {
      onSessionStart: Sf(l),
      onStart: Sf(o),
      onMove: Sf(r),
      onEnd: (d, h) => {
        delete this.session, c && wt.postRender(() => c(d, h));
      }
    };
  }
  mount() {
    this.removePointerDownListener = $l(this.node.current, "pointerdown", (l) => this.onPointerDown(l));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
let Tf = !1;
class k3 extends Q.Component {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: l, layoutGroup: o, switchLayoutGroup: r, layoutId: c } = this.props, { projection: d } = l;
    d && (o.group && o.group.add(d), r && r.register && c && r.register(d), Tf && d.root.didUpdate(), d.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), d.setOptions({
      ...d.options,
      layoutDependency: this.props.layoutDependency,
      onExitComplete: () => this.safeToRemove()
    })), to.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(l) {
    const { layoutDependency: o, visualElement: r, drag: c, isPresent: d } = this.props, { projection: h } = r;
    return h && (h.isPresent = d, l.layoutDependency !== o && h.setOptions({
      ...h.options,
      layoutDependency: o
    }), Tf = !0, c || l.layoutDependency !== o || o === void 0 || l.isPresent !== d ? h.willUpdate() : this.safeToRemove(), l.isPresent !== d && (d ? h.promote() : h.relegate() || wt.postRender(() => {
      const y = h.getStack();
      (!y || !y.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { visualElement: l, layoutAnchor: o } = this.props, { projection: r } = l;
    r && (r.options.layoutAnchor = o, r.root.didUpdate(), dh.postRender(() => {
      !r.currentAnimation && r.isLead() && this.safeToRemove();
    }));
  }
  componentWillUnmount() {
    const { visualElement: l, layoutGroup: o, switchLayoutGroup: r } = this.props, { projection: c } = l;
    Tf = !0, c && (c.scheduleCheckAfterUnmount(), o && o.group && o.group.remove(c), r && r.deregister && r.deregister(c));
  }
  safeToRemove() {
    const { safeToRemove: l } = this.props;
    l && l();
  }
  render() {
    return null;
  }
}
function l1(a) {
  const [l, o] = Jv(), r = Q.useContext(Jf);
  return lt.jsx(k3, { ...a, layoutGroup: r, switchLayoutGroup: Q.useContext(t1), isPresent: l, safeToRemove: o });
}
const I3 = {
  pan: {
    Feature: P3
  },
  drag: {
    Feature: F3,
    ProjectionNode: Kv,
    MeasureLayout: l1
  }
};
function b0(a, l, o) {
  const { props: r } = a;
  a.animationState && r.whileHover && a.animationState.setActive("whileHover", o === "Start");
  const c = "onHover" + o, d = r[c];
  d && wt.postRender(() => d(l, ru(l)));
}
class W3 extends bi {
  mount() {
    const { current: l } = this.node;
    l && (this.unmount = bA(l, (o, r) => (b0(this.node, r, "Start"), (c) => b0(this.node, c, "End"))));
  }
  unmount() {
  }
}
class $3 extends bi {
  constructor() {
    super(...arguments), this.isActive = !1;
  }
  onFocus() {
    let l = !1;
    try {
      l = this.node.current.matches(":focus-visible");
    } catch {
      l = !0;
    }
    !l || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0);
  }
  onBlur() {
    !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1);
  }
  mount() {
    this.unmount = uu(au(this.node.current, "focus", () => this.onFocus()), au(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
function E0(a, l, o) {
  const { props: r } = a;
  if (a.current instanceof HTMLButtonElement && a.current.disabled)
    return;
  a.animationState && r.whileTap && a.animationState.setActive("whileTap", o === "Start");
  const c = "onTap" + (o === "End" ? "" : o), d = r[c];
  d && wt.postRender(() => d(l, ru(l)));
}
class tx extends bi {
  mount() {
    const { current: l } = this.node;
    if (!l)
      return;
    const { globalTapTarget: o, propagate: r } = this.node.props;
    this.unmount = DA(l, (c, d) => (E0(this.node, d, "Start"), (h, { success: y }) => E0(this.node, h, y ? "End" : "Cancel")), {
      useGlobalTarget: o,
      stopPropagation: r?.tap === !1
    });
  }
  unmount() {
  }
}
const Zf = /* @__PURE__ */ new WeakMap(), bf = /* @__PURE__ */ new WeakMap(), ex = (a) => {
  const l = Zf.get(a.target);
  l && l(a);
}, nx = (a) => {
  a.forEach(ex);
};
function ix({ root: a, ...l }) {
  const o = a || document;
  bf.has(o) || bf.set(o, {});
  const r = bf.get(o), c = JSON.stringify(l);
  return r[c] || (r[c] = new IntersectionObserver(nx, { root: a, ...l })), r[c];
}
function ax(a, l, o) {
  const r = ix(l);
  return Zf.set(a, o), r.observe(a), () => {
    Zf.delete(a), r.unobserve(a);
  };
}
const lx = {
  some: 0,
  all: 1
};
class ux extends bi {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.stopObserver?.();
    const { viewport: l = {} } = this.node.getProps(), { root: o, margin: r, amount: c = "some", once: d } = l, h = {
      root: o ? o.current : void 0,
      rootMargin: r,
      threshold: typeof c == "number" ? c : lx[c]
    }, y = (S) => {
      const { isIntersecting: v } = S;
      if (this.isInView === v || (this.isInView = v, d && !v && this.hasEnteredView))
        return;
      v && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", v);
      const { onViewportEnter: g, onViewportLeave: p } = this.node.getProps(), b = v ? g : p;
      b && b(S);
    };
    this.stopObserver = ax(this.node.current, h, y);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: l, prevProps: o } = this.node;
    ["amount", "margin", "root"].some(sx(l, o)) && this.startObserver();
  }
  unmount() {
    this.stopObserver?.(), this.hasEnteredView = !1, this.isInView = !1;
  }
}
function sx({ viewport: a = {} }, { viewport: l = {} } = {}) {
  return (o) => a[o] !== l[o];
}
const ox = {
  inView: {
    Feature: ux
  },
  tap: {
    Feature: tx
  },
  focus: {
    Feature: $3
  },
  hover: {
    Feature: W3
  }
}, rx = {
  layout: {
    ProjectionNode: Kv,
    MeasureLayout: l1
  }
}, cx = {
  ...V3,
  ...ox,
  ...I3,
  ...rx
}, fx = /* @__PURE__ */ O3(cx, R3);
function u1() {
  !vh.current && Av();
  const [a] = Q.useState(so.current);
  return a;
}
const hx = {
  some: 0,
  all: 1
};
function dx(a, l, { root: o, margin: r, amount: c = "some" } = {}) {
  const d = hh(a), h = /* @__PURE__ */ new WeakMap(), y = (v) => {
    v.forEach((g) => {
      const p = h.get(g.target);
      if (g.isIntersecting !== !!p)
        if (g.isIntersecting) {
          const b = l(g.target, g);
          typeof b == "function" ? h.set(g.target, b) : S.unobserve(g.target);
        } else typeof p == "function" && (p(g), h.delete(g.target));
    });
  }, S = new IntersectionObserver(y, {
    root: o,
    rootMargin: r,
    threshold: typeof c == "number" ? c : hx[c]
  });
  return d.forEach((v) => S.observe(v)), () => S.disconnect();
}
function mx(a, { root: l, margin: o, amount: r, once: c = !1, initial: d = !1 } = {}) {
  const [h, y] = Q.useState(d);
  return Q.useEffect(() => {
    if (!a.current || c && h)
      return;
    const S = () => (y(!0), c ? void 0 : () => y(!1)), v = {
      root: l && l.current || void 0,
      margin: o,
      amount: r
    };
    return dx(a.current, S, v);
  }, [l, a, o, c, r]), h;
}
const bn = fx;
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yx = (a) => a.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), s1 = (...a) => a.filter((l, o, r) => !!l && l.trim() !== "" && r.indexOf(l) === o).join(" ").trim();
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var px = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gx = Q.forwardRef(
  ({
    color: a = "currentColor",
    size: l = 24,
    strokeWidth: o = 2,
    absoluteStrokeWidth: r,
    className: c = "",
    children: d,
    iconNode: h,
    ...y
  }, S) => Q.createElement(
    "svg",
    {
      ref: S,
      ...px,
      width: l,
      height: l,
      stroke: a,
      strokeWidth: r ? Number(o) * 24 / Number(l) : o,
      className: s1("lucide", c),
      ...y
    },
    [
      ...h.map(([v, g]) => Q.createElement(v, g)),
      ...Array.isArray(d) ? d : [d]
    ]
  )
);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const o1 = (a, l) => {
  const o = Q.forwardRef(
    ({ className: r, ...c }, d) => Q.createElement(gx, {
      ref: d,
      iconNode: l,
      className: s1(`lucide-${yx(a)}`, r),
      ...c
    })
  );
  return o.displayName = `${a}`, o;
};
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vx = o1("ArrowLeft", [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sx = o1("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
]);
function Zs({ text: a, delay: l = 0, speed: o = 0.015, className: r = "" }) {
  const c = Q.useRef(null), d = mx(c, { once: !0, margin: "-10px" });
  return u1() ? /* @__PURE__ */ lt.jsx("span", { className: r, children: a }) : /* @__PURE__ */ lt.jsxs("span", { className: r, children: [
    /* @__PURE__ */ lt.jsx("span", { className: "feedback-sr-only", children: a }),
    /* @__PURE__ */ lt.jsx(bn.span, { ref: c, "aria-hidden": "true", initial: "hidden", animate: d ? "visible" : "hidden", variants: { hidden: { opacity: 1 }, visible: { opacity: 1, transition: { staggerChildren: o, delayChildren: l } } }, children: Array.from(a).map((y, S) => /* @__PURE__ */ lt.jsx(bn.span, { variants: { hidden: { opacity: 0 }, visible: { opacity: 1 } }, children: y }, S)) })
  ] });
}
const tu = [
  { quote: "I needed a starting point, not another list of AI tools. The course helped me focus on one useful deliverable, and the club gave me a place to ask questions while I built a sample I could show a local business.", author: "Finding a clear starting point", title: "Illustrative member story", avatar: "media/member-profile-1.svg" },
  { quote: "The biggest value was having someone look at my work. I could bring a rough sample to the club, get specific feedback, and improve my offer before reaching out to a business.", author: "Getting feedback that helps", title: "Illustrative member story", avatar: "media/member-profile-2.svg" },
  { quote: "I did not need to become technical to get moving. The step-by-step course gave me a process to follow, and the community helped me stay focused on creating something useful instead of collecting more tutorials.", author: "Turning learning into action", title: "Illustrative member story", avatar: "media/member-profile-3.svg" }
], Tx = (a, l) => (a + l + tu.length) % tu.length, bx = { enter: (a) => ({ x: a > 0 ? 100 : -100, opacity: 0 }), center: { zIndex: 1, x: 0, opacity: 1 }, exit: (a) => ({ zIndex: 0, x: a < 0 ? 100 : -100, opacity: 0 }) };
function Ex() {
  const [a, l] = Q.useState(0), [o, r] = Q.useState(1), c = u1(), d = tu[a], h = (v) => {
    r(v), l((g) => Tx(g, v));
  }, y = { hidden: { opacity: c ? 1 : 0, y: c ? 0 : 20 }, visible: { opacity: 1, y: 0, transition: { duration: c ? 0 : 0.6 } } }, S = { hidden: { scaleX: c ? 1 : 0 }, visible: { scaleX: 1, transition: { duration: c ? 0 : 0.8 } } };
  return /* @__PURE__ */ lt.jsx("section", { id: "feedback", "aria-labelledby": "feedback-heading", "aria-roledescription": "carousel", className: "feedback-section w-full overflow-hidden", onKeyDown: (v) => {
    v.key === "ArrowRight" ? (v.preventDefault(), h(1)) : v.key === "ArrowLeft" && (v.preventDefault(), h(-1));
  }, children: /* @__PURE__ */ lt.jsxs(bn.div, { className: "wrap", initial: "hidden", whileInView: "visible", viewport: { once: !0, margin: "-10px" }, variants: { hidden: { opacity: c ? 1 : 0 }, visible: { opacity: 1, transition: { staggerChildren: c ? 0 : 0.05 } } }, children: [
    /* @__PURE__ */ lt.jsxs(bn.div, { variants: y, className: "feedback-heading flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between", children: [
      /* @__PURE__ */ lt.jsx("h2", { id: "feedback-heading", children: /* @__PURE__ */ lt.jsx(Zs, { text: "Member comments", speed: 0.012 }) }),
      /* @__PURE__ */ lt.jsx("p", { children: "Illustrative examples of the member experience" })
    ] }),
    /* @__PURE__ */ lt.jsx(bn.div, { variants: S, className: "feedback-divider origin-left" }),
    /* @__PURE__ */ lt.jsxs(bn.div, { variants: y, className: "feedback-stage relative overflow-hidden", "aria-label": `Sample feedback ${a + 1} of ${tu.length}`, "aria-roledescription": "slide", children: [
      tu.map((v, g) => /* @__PURE__ */ lt.jsx("p", { className: "feedback-quote feedback-measure", "aria-hidden": "true", children: v.quote }, g)),
      /* @__PURE__ */ lt.jsx(r0, { initial: !1, custom: o, mode: "wait", children: /* @__PURE__ */ lt.jsx(bn.blockquote, { custom: o, variants: c ? { enter: { opacity: 1 }, center: { opacity: 1 }, exit: { opacity: 1 } } : bx, initial: "enter", animate: "center", exit: "exit", transition: c ? { duration: 0 } : { x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }, className: "feedback-slide w-full", children: /* @__PURE__ */ lt.jsx("p", { className: "feedback-quote", children: /* @__PURE__ */ lt.jsx(Zs, { text: d.quote, delay: 0.2, speed: 0.012 }) }) }, a) })
    ] }),
    /* @__PURE__ */ lt.jsx(bn.div, { variants: S, className: "feedback-divider origin-left" }),
    /* @__PURE__ */ lt.jsxs(bn.div, { variants: y, className: "feedback-bottom flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between", children: [
      /* @__PURE__ */ lt.jsx(r0, { mode: "wait", children: /* @__PURE__ */ lt.jsxs(bn.div, { initial: { opacity: c ? 1 : 0, y: c ? 0 : 10 }, animate: { opacity: 1, y: 0 }, exit: { opacity: c ? 1 : 0, y: c ? 0 : -10 }, transition: { duration: c ? 0 : 0.2 }, className: "feedback-person flex items-center gap-4 w-full sm:w-auto", children: [
        /* @__PURE__ */ lt.jsxs("div", { className: "feedback-avatar", "aria-hidden": "true", children: [
          /* @__PURE__ */ lt.jsx("span", { children: d.author.split(" ").map((v) => v[0]).join("") }),
          /* @__PURE__ */ lt.jsx("img", { src: d.avatar, alt: "", width: "56", height: "56", loading: "lazy", referrerPolicy: "no-referrer", onError: (v) => {
            v.currentTarget.style.display = "none";
          } })
        ] }),
        /* @__PURE__ */ lt.jsxs("div", { children: [
          /* @__PURE__ */ lt.jsx("h3", { children: /* @__PURE__ */ lt.jsx(Zs, { text: d.author, delay: 0.4, speed: 0.012 }) }),
          /* @__PURE__ */ lt.jsx("p", { children: /* @__PURE__ */ lt.jsx(Zs, { text: d.title, delay: 0.5, speed: 0.012 }) })
        ] })
      ] }, a) }),
      /* @__PURE__ */ lt.jsxs("div", { className: "feedback-controls flex items-center gap-2 w-full sm:w-auto justify-end", children: [
        /* @__PURE__ */ lt.jsxs("span", { className: "feedback-count", "aria-hidden": "true", children: [
          "0",
          a + 1,
          /* @__PURE__ */ lt.jsx("span", { children: " / 03" })
        ] }),
        /* @__PURE__ */ lt.jsx("button", { type: "button", onClick: () => h(-1), "aria-label": "Previous feedback", children: /* @__PURE__ */ lt.jsx(vx, { size: 24, strokeWidth: 1.5, "aria-hidden": "true" }) }),
        /* @__PURE__ */ lt.jsx("button", { type: "button", onClick: () => h(1), "aria-label": "Next feedback", children: /* @__PURE__ */ lt.jsx(Sx, { size: 24, strokeWidth: 1.5, "aria-hidden": "true" }) })
      ] })
    ] }),
    /* @__PURE__ */ lt.jsx("span", { className: "feedback-sr-only", role: "status", "aria-live": "polite", "aria-atomic": "true", children: `Sample ${a + 1} of 3. ${d.author}, ${d.title}. ${d.quote}` })
  ] }) });
}
const A0 = document.getElementById("feedback-root");
A0 && mb.createRoot(A0).render(/* @__PURE__ */ lt.jsx(Ex, {}));
