(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [327], {
        8204: function(e, t, r) {
            "use strict";
            r.d(t, { C2: function() { return d } });
            var n = r(7294);

            function o(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function a(e, t) { var r; if ("undefined" === typeof Symbol || null == e[Symbol.iterator]) { if (Array.isArray(e) || (r = function(e, t) { if (e) { if ("string" === typeof e) return o(e, t); var r = Object.prototype.toString.call(e).slice(8, -1); return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? o(e, t) : void 0 } }(e)) || t && e && "number" === typeof e.length) { r && (e = r); var n = 0; return function() { return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] } } } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") } return (r = e[Symbol.iterator]()).next.bind(r) }
            var c = function(e) { var t = e.children; return n.createElement("div", null, t) },
                s = function(e) { var t = e.children; return n.createElement("span", { style: { whiteSpace: "pre" } }, t) },
                u = function(e) { var t = e.children; return n.createElement("span", null, t) },
                i = (0, n.memo)(c),
                l = (0, n.memo)(s),
                _ = (0, n.memo)(u),
                p = (0, n.forwardRef)((function(e, t) {
                    var r = e.children,
                        o = e.className,
                        c = e.style,
                        s = e.LineWrapper,
                        u = void 0 === s ? i : s,
                        p = e.WordWrapper,
                        d = void 0 === p ? l : p,
                        f = e.LetterWrapper,
                        h = void 0 === f ? _ : f,
                        j = e.extraProps,
                        m = "";
                    n.Children.map(r, (function(e) {
                        if ("string" !== typeof e && "number" !== typeof e) throw new Error("SplitText expect a text as children");
                        m += String(e)
                    }));
                    var v = (0, n.useRef)(null),
                        b = (0, n.useState)([]),
                        x = b[0],
                        g = b[1],
                        E = (0, n.useRef)(0);

                    function y() {
                        var e = v.current;
                        if (e) {
                            if (x.length > 0) return function(e, t) {
                                for (var r, n = E.current || e.map((function(e) { return e.length })).sort((function(e, t) { return t - e }))[0], o = [], c = "", s = 0, u = a(t.split(" ").entries()); !(r = u()).done;) {
                                    var i = r.value[1];
                                    (s += i.length + 1) > n + 1 && (o.push(c), c = "", s = 0), c += i.trim() + " "
                                }
                                o.push(c), g(o.map((function(e) { return e.trim() }))), n > E.current && (E.current = n)
                            }(x, m);
                            for (var t, r = [], n = [], o = 0, c = Array.from(e.children); o < c.length; o++) {
                                var s = c[o],
                                    u = s.getBoundingClientRect().top;
                                null == t && (t = u), u !== t && (r.push(n.join(" ")), n = []), t = u, n.push((s.textContent || "").trim())
                            }
                            r.push(n.join(" ")), g(r)
                        }
                    }(0, n.useLayoutEffect)((function() { return y() }), [m]);
                    var O = 0,
                        N = 0;
                    return x.length ? n.createElement("div", { className: o, ref: function(e) { v.current = e, "function" == typeof t ? t(e) : t && (t.current = e) }, style: c }, x.map((function(e, t) { var r = e.split(" "); return r = r.map((function(e, t) { return t === r.length - 1 ? e : e + " " })), n.createElement(u, { key: t, lineIndex: t, extraProps: j }, r.map((function(e, r) { var o = e.split(""); return n.createElement(d, { key: r, lineIndex: t, wordIndex: r, countIndex: O++, extraProps: j }, o.map((function(e, o) { return n.createElement(h, { key: o, lineIndex: t, wordIndex: r, letterIndex: o, countIndex: N++, extraProps: j }, e) }))) }))) }))) : n.createElement("div", { className: o, ref: v, style: c }, m.split(" ").map((function(e, t) { return n.createElement("span", { key: t }, e, " ") })))
                }));
            var d = (0, n.forwardRef)((function(e, t) {
                var r = e.children,
                    o = function(e, t) {
                        if (null == e) return {};
                        var r, n, o = {},
                            a = Object.keys(e);
                        for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
                        return o
                    }(e, ["children"]),
                    a = (0, n.useState)(0),
                    c = a[0],
                    s = a[1],
                    u = function(e, t, r) {
                        var n;
                        return void 0 === r && (r = !1),
                            function() {
                                for (var o = this, a = arguments.length, c = new Array(a), s = 0; s < a; s++) c[s] = arguments[s];
                                var u = r && !n,
                                    i = function() { return e.apply(o, c) };
                                clearTimeout(n), n = setTimeout(i, t), u && i()
                            }
                    }((function() { return s((function(e) { return e + 1 })) }), 300);
                return (0, n.useEffect)((function() {
                    return window.addEventListener("resize", u),
                        function() { return window.removeEventListener("resize", u) }
                }), []), n.createElement(p, Object.assign({ key: c }, o, { ref: t }), r)
            }))
        },
        7452: function(e, t, r) {
            "use strict";
            r.r(t);
            var n = r(5893),
                o = r(9008),
                a = r(7294),
                c = r(5989),
                s = r(5741),
                u = r(9048),
                i = r(7823),
                l = r(195),
                _ = r(8204),
                p = r(1638),
                d = r(6447),
                f = r(8932),
                h = r(3850),
                j = r(6098),
                m = r.n(j);
            const v = () => {
                const e = (0, a.useRef)(0),
                    { color: t, currentProject: r, drag: j, isPrev: v, isNext: b } = (0, f.Z)(),
                    { setMaestroState: x } = (0, d.Z)(),
                    [g, E] = (0, l.x)({ mounted: !1, previousIndex: 0, currentIndex: 0, tutorialClosed: p.cA }),
                    y = (0, a.useCallback)((() => { E((e => { e.mounted = !0 })), g.tutorialClosed || setTimeout((() => { E((e => { e.tutorialClosed = !0, e.mounted = !0 })), sessionStorage.setItem("hide-project-tutorial", "true") }), 5e3), x({ type: "SET_NAVIGATION", value: ["about"] }) })),
                    O = (0, a.useCallback)((() => { x({ type: "SET_COLOR", value: p.Fw[0].color }) }));
                return (0, a.useEffect)((() => { v && (e.current -= 360 / p.Fw.length, x({ type: "SET_PREV_PROJECT_EVENT", value: !1 })) }), [v]), (0, a.useEffect)((() => { b && (e.current += 360 / p.Fw.length, x({ type: "SET_NEXT_PROJECT_EVENT", value: !1 })) }), [b]), (0, u.Z)(y), (0, i.Z)(O), (0, n.jsxs)("div", { className: m().page, children: [(0, n.jsx)(o.default, { children: (0, n.jsx)("title", { children: "Projects | CPC Group" }) }), g.mounted ? (0, n.jsx)(c.Z, { children: (0, n.jsx)(s.Z, { timeout: { exit: 400, enter: 400 }, classNames: "fade", mountOnEnter: !0, unmountOnExit: !0, children: (0, n.jsx)("div", { children: g.tutorialClosed ? (0, n.jsx)("div", { children: (0, n.jsx)(c.Z, { children: (0, n.jsx)(s.Z, { timeout: { exit: 400, enter: 400 }, classNames: "fade", mountOnEnter: !0, unmountOnExit: !0, children: (0, n.jsx)("div", { className: m().projects__current, children: (0, n.jsxs)("div", { className: m()["projects__current-inner"], style: { opacity: j }, children: [(0, n.jsx)("h2", { className: m()["projects__current-title"], children: (0, n.jsx)(_.C2, { children: r.title }) }), (0, n.jsx)(h.Z, { href: r.url, target: "_blank", label: r.cta, color: t })] }) }) }, r.title) }) }) : (0, n.jsxs)("div", { className: m().projects__tutorial, children: [(0, n.jsx)("div", { className: m()["projects__tutorial-sequence"], children: (0, n.jsx)("div", { className: m()["projects__tutorial-bullet"], style: { color: t } }) }), (0, n.jsx)("p", { className: m()["projects__tutorial-text"], children: "Scroll or drag and drop the screen to explore the different projects." })] }) }) }, g.tutorialClosed ? "TutorialOpen" : "TutorialClose") }) : null, (0, n.jsx)("div", { className: m().projects__footer, children: (0, n.jsx)(s.Z, { in: g.tutorialClosed, timeout: { exit: 400, enter: 400 }, classNames: "fade", mountOnEnter: !0, unmountOnExit: !0, children: (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)("div", { className: m()["projects__footer-index"], children: (0, n.jsx)(c.Z, { children: (0, n.jsx)(s.Z, { timeout: { exit: 400, enter: 400 }, classNames: "fade", mountOnEnter: !0, unmountOnExit: !0, children: (0, n.jsxs)("div", { children: [(0, n.jsx)("b", { children: r.index + 1 > 9 ? r.index + 1 : `0${r.index+1}` }), r.label] }) }, r.label) }) }), (0, n.jsx)("div", { className: m()["projects__footer-map"], children: (0, n.jsx)("div", { className: m()["projects__footer-map-bullet"], style: { transform: `rotate(${e.current}deg)` } }) })] }) }) })] })
            };
            v.whyDidYouRender = !1, t.default = a.memo(v)
        },
        3850: function(e, t, r) {
            "use strict";
            r.d(t, { Z: function() { return v } });
            var n = r(6156),
                o = r(5893),
                a = r(9756);
            var c = r(7294),
                s = r(1664),
                u = r(195),
                i = r(4184),
                l = r.n(i),
                _ = r(9048),
                p = r(4107),
                d = r(5747),
                f = r.n(d);

            function h(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), r.push.apply(r, n)
                }
                return r
            }

            function j(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? h(Object(r), !0).forEach((function(t) {
                        (0, n.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : h(Object(r)).forEach((function(t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t)) }))
                }
                return e
            }
            const m = e => {
                const { className: t, tag: r, href: n, label: i, target: d, color: h } = e, m = function(e, t) { if (null == e) return {}; var r, n, o = (0, a.Z)(e, t); if (Object.getOwnPropertySymbols) { var c = Object.getOwnPropertySymbols(e); for (n = 0; n < c.length; n++) r = c[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]) } return o }(e, ["className", "tag", "href", "label", "target", "color"]), [v, b] = (0, u.x)({ animated: !1 }), x = (0, c.useCallback)((() => { setTimeout((() => { b((e => { e.animated = !0 })) }), 600) }));
                (0, _.Z)(x);
                const g = l()(t, "button-chevron", {
                    [f()["button-chevron"]]: !0,
                    [f()["button-chevron--animated"]]: v.animated
                });
                if (n && !d || n && "_self" === d) return (0, o.jsx)(s.default, { href: n, children: (0, o.jsxs)("a", j(j({}, m), {}, { className: g, style: { color: h }, children: [(0, o.jsx)("span", { className: f()["button-chevron__label"], children: i }), (0, o.jsx)("span", { className: f()["button-chevron__chevron"], children: (0, o.jsx)(p.Z, { name: "chevron-right", width: 6, height: 8 }) })] })) });
                if (d && "_self" !== d) return (0, o.jsxs)("a", j(j({ rel: "noopener noreferrer", href: n, target: d, className: g, style: { color: h } }, m), {}, { children: [(0, o.jsx)("span", { className: f()["button-chevron__label"], children: i }), (0, o.jsx)("span", { className: f()["button-chevron__chevron"], children: (0, o.jsx)(p.Z, { name: "chevron-right", width: 6, height: 8 }) })] }));
                const E = r;
                return (0, o.jsxs)(E, j(j({}, m), {}, { className: g, style: { color: h }, children: [(0, o.jsx)("span", { className: f()["button-chevron__label"], children: i }), (0, o.jsx)("span", { className: f()["button-chevron__chevron"], children: (0, o.jsx)(p.Z, { name: "chevron-right", width: 6, height: 8 }) })] }))
            };
            m.defaultProps = { tag: "button", href: null, label: null, target: null }, m.whyDidYouRender = !1;
            var v = c.memo(m)
        },
        6447: function(e, t, r) {
            "use strict";
            var n = r(7294),
                o = r(1405);
            t.Z = () => {
                const e = (0, n.useContext)(o.bj);
                if ("undefined" === typeof e) throw new Error("useMaestroMutations must be used within a MaestroProvider");
                return {
                    setMaestroState: (0, n.useCallback)((t => {
                        switch (t.type) {
                            case "SET_CURRENT_PROJECT":
                                e((e => { e.currentProject = t.value }));
                                break;
                            case "SET_COLOR":
                                e((e => { e.color = t.value }));
                                break;
                            case "SET_NAVIGATION":
                                e((e => { e.navigation = t.value }));
                                break;
                            case "SET_DRAG_PROGRESS":
                                e((e => { e.drag = t.value }));
                                break;
                            case "SET_PROGRESS":
                                e((e => { e.progress = t.value }));
                                break;
                            case "SET_LOADED":
                                e((e => { e.loaded = t.value }));
                                break;
                            case "SET_PREV_PROJECT_EVENT":
                                e((e => { e.isPrev = t.value }));
                                break;
                            case "SET_NEXT_PROJECT_EVENT":
                                e((e => { e.isNext = t.value }))
                        }
                    }), [e])
                }
            }
        },
        5703: function(e, t, r) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/projects", function() { return r(7452) }])
        },
        6098: function(e) { e.exports = { projects__tutorial: "projects_projects__tutorial__1_9QP", uai8gnl: "projects_uai8gnl__26bXj", "projects__tutorial-sequence": "projects_projects__tutorial-sequence__2--Gj", uai8goa: "projects_uai8goa__u76ZQ", "projects__tutorial-bullet": "projects_projects__tutorial-bullet__3kJE8", uai8goq: "projects_uai8goq__1o91X", uai8gpc: "projects_uai8gpc__VpbXu", "projects__tutorial-text": "projects_projects__tutorial-text__1peA6", projects__current: "projects_projects__current__37Gx4", "projects__current-inner": "projects_projects__current-inner__1Nq4w", "projects__current-title": "projects_projects__current-title__gTDDD", uai8gq9: "projects_uai8gq9__2zPTA", projects__footer: "projects_projects__footer__dTnaM", "projects__footer-index": "projects_projects__footer-index__3yVns", "projects__footer-map": "projects_projects__footer-map__2Dbia", uai8gr4: "projects_uai8gr4__1gzFM", "projects__footer-map-bullet": "projects_projects__footer-map-bullet__J3Yr_" } },
        5747: function(e) { e.exports = { "button-chevron": "ButtonChevron_button-chevron__39Xjx", "button-chevron__chevron": "ButtonChevron_button-chevron__chevron__2HwAd", "button-chevron--animated": "ButtonChevron_button-chevron--animated__1cEHI", uai8gti: "ButtonChevron_uai8gti__2B-Bi", "button-chevron__label": "ButtonChevron_button-chevron__label__1hsfh", uai8guf: "ButtonChevron_uai8guf__3KjUK", uai8gva: "ButtonChevron_uai8gva__3rM0T", uai8gw0: "ButtonChevron_uai8gw0__c90mU" } },
        7823: function(e, t, r) {
            "use strict";
            var n = r(7294),
                o = r(8127);
            t.Z = function(e) {
                var t = (0, n.useRef)(e);
                t.current = e, (0, o.Z)((function() { return function() { return t.current() } }))
            }
        }
    },
    function(e) {
        e.O(0, [774, 888, 179], (function() { return t = 5703, e(e.s = t); var t }));
        var t = e.O();
        _N_E = t
    }
]);