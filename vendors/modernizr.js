/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-backgroundcliptext-objectfit-touchevents-webp-setclasses !*/
! function(e, n, t) {
    function r(e) { var n = C.className,
            t = Modernizr._config.classPrefix || ""; if (x && (n = n.baseVal), Modernizr._config.enableJSClass) { var r = new RegExp("(^|\\s)" + t + "no-js(\\s|$)");
            n = n.replace(r, "$1" + t + "js$2") }
        Modernizr._config.enableClasses && (n += " " + t + e.join(" " + t), x ? C.className.baseVal = n : C.className = n) }

    function o(e, n) { return typeof e === n }

    function i() { var e, n, t, r, i, s, a; for (var l in b)
            if (b.hasOwnProperty(l)) { if (e = [], n = b[l], n.name && (e.push(n.name.toLowerCase()), n.options && n.options.aliases && n.options.aliases.length))
                    for (t = 0; t < n.options.aliases.length; t++) e.push(n.options.aliases[t].toLowerCase()); for (r = o(n.fn, "function") ? n.fn() : n.fn, i = 0; i < e.length; i++) s = e[i], a = s.split("."), 1 === a.length ? Modernizr[a[0]] = r : (!Modernizr[a[0]] || Modernizr[a[0]] instanceof Boolean || (Modernizr[a[0]] = new Boolean(Modernizr[a[0]])), Modernizr[a[0]][a[1]] = r), w.push((r ? "" : "no-") + a.join("-")) } }

    function s(e, n) { if ("object" == typeof e)
            for (var t in e) B(e, t) && s(t, e[t]);
        else { e = e.toLowerCase(); var o = e.split("."),
                i = Modernizr[o[0]]; if (2 == o.length && (i = i[o[1]]), "undefined" != typeof i) return Modernizr;
            n = "function" == typeof n ? n() : n, 1 == o.length ? Modernizr[o[0]] = n : (!Modernizr[o[0]] || Modernizr[o[0]] instanceof Boolean || (Modernizr[o[0]] = new Boolean(Modernizr[o[0]])), Modernizr[o[0]][o[1]] = n), r([(n && 0 != n ? "" : "no-") + o.join("-")]), Modernizr._trigger(e, n) } return Modernizr }

    function a() { return "function" != typeof n.createElement ? n.createElement(arguments[0]) : x ? n.createElementNS.call(n, "http://www.w3.org/2000/svg", arguments[0]) : n.createElement.apply(n, arguments) }

    function l() { var e = n.body; return e || (e = a(x ? "svg" : "body"), e.fake = !0), e }

    function u(e, t, r, o) { var i, s, u, f, A = "modernizr",
            c = a("div"),
            p = l(); if (parseInt(r, 10))
            for (; r--;) u = a("div"), u.id = o ? o[r] : A + (r + 1), c.appendChild(u); return i = a("style"), i.type = "text/css", i.id = "s" + A, (p.fake ? p : c).appendChild(i), p.appendChild(c), i.styleSheet ? i.styleSheet.cssText = e : i.appendChild(n.createTextNode(e)), c.id = A, p.fake && (p.style.background = "", p.style.overflow = "hidden", f = C.style.overflow, C.style.overflow = "hidden", C.appendChild(p)), s = t(c, e), p.fake ? (p.parentNode.removeChild(p), C.style.overflow = f, C.offsetHeight) : c.parentNode.removeChild(c), !!s }

    function f(e, n) { return !!~("" + e).indexOf(n) }

    function A(e) { return e.replace(/([a-z])-([a-z])/g, function(e, n, t) { return n + t.toUpperCase() }).replace(/^-/, "") }

    function c(e, n) { return function() { return e.apply(n, arguments) } }

    function p(e, n, t) { var r; for (var i in e)
            if (e[i] in n) return t === !1 ? e[i] : (r = n[e[i]], o(r, "function") ? c(r, t || n) : r);
        return !1 }

    function d(e) { return e.replace(/([A-Z])/g, function(e, n) { return "-" + n.toLowerCase() }).replace(/^ms-/, "-ms-") }

    function m(n, t, r) { var o; if ("getComputedStyle" in e) { o = getComputedStyle.call(e, n, t); var i = e.console; if (null !== o) r && (o = o.getPropertyValue(r));
            else if (i) { var s = i.error ? "error" : "log";
                i[s].call(i, "getComputedStyle returning null, its possible modernizr test results are inaccurate") } } else o = !t && n.currentStyle && n.currentStyle[r]; return o }

    function h(n, r) { var o = n.length; if ("CSS" in e && "supports" in e.CSS) { for (; o--;)
                if (e.CSS.supports(d(n[o]), r)) return !0;
            return !1 } if ("CSSSupportsRule" in e) { for (var i = []; o--;) i.push("(" + d(n[o]) + ":" + r + ")"); return i = i.join(" or "), u("@supports (" + i + ") { #modernizr { position: absolute; } }", function(e) { return "absolute" == m(e, null, "position") }) } return t }

    function g(e, n, r, i) {
        function s() { u && (delete k.style, delete k.modElem) } if (i = o(i, "undefined") ? !1 : i, !o(r, "undefined")) { var l = h(e, r); if (!o(l, "undefined")) return l } for (var u, c, p, d, m, g = ["modernizr", "tspan", "samp"]; !k.style && g.length;) u = !0, k.modElem = a(g.shift()), k.style = k.modElem.style; for (p = e.length, c = 0; p > c; c++)
            if (d = e[c], m = k.style[d], f(d, "-") && (d = A(d)), k.style[d] !== t) { if (i || o(r, "undefined")) return s(), "pfx" == n ? d : !0; try { k.style[d] = r } catch (v) {} if (k.style[d] != m) return s(), "pfx" == n ? d : !0 }
        return s(), !1 }

    function v(e, n, t, r, i) { var s = e.charAt(0).toUpperCase() + e.slice(1),
            a = (e + " " + U.join(s + " ") + s).split(" "); return o(n, "string") || o(n, "undefined") ? g(a, n, r, i) : (a = (e + " " + R.join(s + " ") + s).split(" "), p(a, n, t)) }

    function y(e, n, r) { return v(e, t, t, n, r) } var w = [],
        b = [],
        _ = { _version: "3.6.0", _config: { classPrefix: "", enableClasses: !0, enableJSClass: !0, usePrefixes: !0 }, _q: [], on: function(e, n) { var t = this;
                setTimeout(function() { n(t[e]) }, 0) }, addTest: function(e, n, t) { b.push({ name: e, fn: n, options: t }) }, addAsyncTest: function(e) { b.push({ name: null, fn: e }) } },
        Modernizr = function() {};
    Modernizr.prototype = _, Modernizr = new Modernizr; var C = n.documentElement,
        x = "svg" === C.nodeName.toLowerCase(),
        S = _._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
    _._prefixes = S; var B;! function() { var e = {}.hasOwnProperty;
        B = o(e, "undefined") || o(e.call, "undefined") ? function(e, n) { return n in e && o(e.constructor.prototype[n], "undefined") } : function(n, t) { return e.call(n, t) } }(), _._l = {}, _.on = function(e, n) { this._l[e] || (this._l[e] = []), this._l[e].push(n), Modernizr.hasOwnProperty(e) && setTimeout(function() { Modernizr._trigger(e, Modernizr[e]) }, 0) }, _._trigger = function(e, n) { if (this._l[e]) { var t = this._l[e];
            setTimeout(function() { var e, r; for (e = 0; e < t.length; e++)(r = t[e])(n) }, 0), delete this._l[e] } }, Modernizr._q.push(function() { _.addTest = s }), Modernizr.addAsyncTest(function() {
        function e(e, n, t) {
            function r(n) { var r = n && "load" === n.type ? 1 == o.width : !1,
                    i = "webp" === e;
                s(e, i && r ? new Boolean(r) : r), t && t(n) } var o = new Image;
            o.onerror = r, o.onload = r, o.src = n } var n = [{ uri: "data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=", name: "webp" }, { uri: "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==", name: "webp.alpha" }, { uri: "data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA", name: "webp.animation" }, { uri: "data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=", name: "webp.lossless" }],
            t = n.shift();
        e(t.name, t.uri, function(t) { if (t && "load" === t.type)
                for (var r = 0; r < n.length; r++) e(n[r].name, n[r].uri) }) }); var Q = _.testStyles = u;
    Modernizr.addTest("touchevents", function() { var t; if ("ontouchstart" in e || e.DocumentTouch && n instanceof DocumentTouch) t = !0;
        else { var r = ["@media (", S.join("touch-enabled),("), "heartz", ")", "{#modernizr{top:9px;position:absolute}}"].join("");
            Q(r, function(e) { t = 9 === e.offsetTop }) } return t }); var T = "Moz O ms Webkit",
        U = _._config.usePrefixes ? T.split(" ") : [];
    _._cssomPrefixes = U; var R = _._config.usePrefixes ? T.toLowerCase().split(" ") : [];
    _._domPrefixes = R; var E = { elem: a("modernizr") };
    Modernizr._q.push(function() { delete E.elem }); var k = { style: E.elem.style };
    Modernizr._q.unshift(function() { delete k.style }), _.testAllProps = v, _.testAllProps = y, Modernizr.addTest("backgroundcliptext", function() { return y("backgroundClip", "text") }); var P = function(n) { var r, o = S.length,
            i = e.CSSRule; if ("undefined" == typeof i) return t; if (!n) return !1; if (n = n.replace(/^@/, ""), r = n.replace(/-/g, "_").toUpperCase() + "_RULE", r in i) return "@" + n; for (var s = 0; o > s; s++) { var a = S[s],
                l = a.toUpperCase() + "_" + r; if (l in i) return "@-" + a.toLowerCase() + "-" + n } return !1 };
    _.atRule = P; var j = _.prefixed = function(e, n, t) { return 0 === e.indexOf("@") ? P(e) : (-1 != e.indexOf("-") && (e = A(e)), n ? v(e, n, t) : v(e, "pfx")) };
    Modernizr.addTest("objectfit", !!j("objectFit"), { aliases: ["object-fit"] }), i(), r(w), delete _.addTest, delete _.addAsyncTest; for (var z = 0; z < Modernizr._q.length; z++) Modernizr._q[z]();
    e.Modernizr = Modernizr }(window, document);