(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [405], {
        8204: function(e, r, t) {
            "use strict";
            t.d(r, { C2: function() { return m } });
            var n = t(7294);

            function a(e, r) {
                (null == r || r > e.length) && (r = e.length);
                for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
                return n
            }

            function o(e, r) { var t; if ("undefined" === typeof Symbol || null == e[Symbol.iterator]) { if (Array.isArray(e) || (t = function(e, r) { if (e) { if ("string" === typeof e) return a(e, r); var t = Object.prototype.toString.call(e).slice(8, -1); return "Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? a(e, r) : void 0 } }(e)) || r && e && "number" === typeof e.length) { t && (e = t); var n = 0; return function() { return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] } } } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") } return (t = e[Symbol.iterator]()).next.bind(t) }
            var l = function(e) { var r = e.children; return n.createElement("div", null, r) },
                s = function(e) { var r = e.children; return n.createElement("span", { style: { whiteSpace: "pre" } }, r) },
                i = function(e) { var r = e.children; return n.createElement("span", null, r) },
                c = (0, n.memo)(l),
                u = (0, n.memo)(s),
                d = (0, n.memo)(i),
                _ = (0, n.forwardRef)((function(e, r) {
                    var t = e.children,
                        a = e.className,
                        l = e.style,
                        s = e.LineWrapper,
                        i = void 0 === s ? c : s,
                        _ = e.WordWrapper,
                        m = void 0 === _ ? u : _,
                        p = e.LetterWrapper,
                        h = void 0 === p ? d : p,
                        f = e.extraProps,
                        v = "";
                    n.Children.map(t, (function(e) {
                        if ("string" !== typeof e && "number" !== typeof e) throw new Error("SplitText expect a text as children");
                        v += String(e)
                    }));
                    var g = (0, n.useRef)(null),
                        b = (0, n.useState)([]),
                        x = b[0],
                        y = b[1],
                        j = (0, n.useRef)(0);

                    function E() {
                        var e = g.current;
                        if (e) {
                            if (x.length > 0) return function(e, r) {
                                for (var t, n = j.current || e.map((function(e) { return e.length })).sort((function(e, r) { return r - e }))[0], a = [], l = "", s = 0, i = o(r.split(" ").entries()); !(t = i()).done;) {
                                    var c = t.value[1];
                                    (s += c.length + 1) > n + 1 && (a.push(l), l = "", s = 0), l += c.trim() + " "
                                }
                                a.push(l), y(a.map((function(e) { return e.trim() }))), n > j.current && (j.current = n)
                            }(x, v);
                            for (var r, t = [], n = [], a = 0, l = Array.from(e.children); a < l.length; a++) {
                                var s = l[a],
                                    i = s.getBoundingClientRect().top;
                                null == r && (r = i), i !== r && (t.push(n.join(" ")), n = []), r = i, n.push((s.textContent || "").trim())
                            }
                            t.push(n.join(" ")), y(t)
                        }
                    }(0, n.useLayoutEffect)((function() { return E() }), [v]);
                    var N = 0,
                        w = 0;
                    return x.length ? n.createElement("div", { className: a, ref: function(e) { g.current = e, "function" == typeof r ? r(e) : r && (r.current = e) }, style: l }, x.map((function(e, r) { var t = e.split(" "); return t = t.map((function(e, r) { return r === t.length - 1 ? e : e + " " })), n.createElement(i, { key: r, lineIndex: r, extraProps: f }, t.map((function(e, t) { var a = e.split(""); return n.createElement(m, { key: t, lineIndex: r, wordIndex: t, countIndex: N++, extraProps: f }, a.map((function(e, a) { return n.createElement(h, { key: a, lineIndex: r, wordIndex: t, letterIndex: a, countIndex: w++, extraProps: f }, e) }))) }))) }))) : n.createElement("div", { className: a, ref: g, style: l }, v.split(" ").map((function(e, r) { return n.createElement("span", { key: r }, e, " ") })))
                }));
            var m = (0, n.forwardRef)((function(e, r) {
                var t = e.children,
                    a = function(e, r) {
                        if (null == e) return {};
                        var t, n, a = {},
                            o = Object.keys(e);
                        for (n = 0; n < o.length; n++) t = o[n], r.indexOf(t) >= 0 || (a[t] = e[t]);
                        return a
                    }(e, ["children"]),
                    o = (0, n.useState)(0),
                    l = o[0],
                    s = o[1],
                    i = function(e, r, t) {
                        var n;
                        return void 0 === t && (t = !1),
                            function() {
                                for (var a = this, o = arguments.length, l = new Array(o), s = 0; s < o; s++) l[s] = arguments[s];
                                var i = t && !n,
                                    c = function() { return e.apply(a, l) };
                                clearTimeout(n), n = setTimeout(c, r), i && c()
                            }
                    }((function() { return s((function(e) { return e + 1 })) }), 300);
                return (0, n.useEffect)((function() {
                    return window.addEventListener("resize", i),
                        function() { return window.removeEventListener("resize", i) }
                }), []), n.createElement(_, Object.assign({ key: l }, a, { ref: r }), t)
            }))
        },
        8894: function(e, r, t) {
            "use strict";
            t.r(r);
            var n = t(5893),
                a = t(7294),
                o = t(9008),
                l = t(1664),
                s = t(5741),
                i = t(9048),
                c = t(7823),
                u = t(8204),
                d = t(4446),
                _ = t(8932),
                m = t(9675),
                p = t(6447),
                h = t(4107),
                f = t(7224),
                v = t(3850),
                g = t(8875),
                b = t.n(g),
                x = t(1350),
                y = t.n(x),
                j = t(8183),
                E = t.n(j),
                N = t(7646),
                w = t.n(N);
            //------- edited ---------
            const O = () => {
                const { open: e } = (0, d.Z)(), { color: r } = (0, _.Z)(), { setReelState: t } = (0, m.Z)(), { setMaestroState: a } = (0, p.Z)();
                return (0, i.Z)((() => { t({ type: "SET_REEL_ALLOWED", value: !0 }), a({ type: "SET_COLOR", value: "#cb5ce3" }), a({ type: "SET_NAVIGATION", value: ["reel"] }) })), (0, c.Z)((() => { t({ type: "SET_REEL_ALLOWED", value: !1 }) })), (0, n.jsxs)("div", {
                    className: w().page,
                    children: [(0, n.jsx)(o.default, { children: (0, n.jsx)("title", { children: "Home | CPC Group" }) }), (0, n.jsx)(l.default, { href: "/projects", children: (0, n.jsx)("a", { className: w()["page__projects-link"], children: (0, n.jsx)("span", { className: "u-visually-hidden", children: "Explore our projects" }) }) }), (0, n.jsxs)("section", { className: w()["page__main-section"], children: [(0, n.jsx)("h2", { className: w()["page__main-section-title"], children: (0, n.jsx)(u.C2, { children: "CPC Group, Construction, Architecture, Education, Web development" }) }), (0, n.jsx)(v.Z, { href: "/projects", label: "Explore our projects", color: r })] }),
                        //----- edited (about us 2) (links) --------    
                        /*
                        (0, n.jsxs)("section", {
                                className: w()["page__creators-section"],
                                children: [(0, n.jsx)("a", {
                                        rel: "noreferrer",
                                        href: "//hellomonday.com/",
                                        target: "_blank",
                                        children: (0, n.jsx)("img", { src: E(), alt: "Hello Monday Logo" })
                                    }),
                                    (0, n.jsx)(h.Z, { name: "cross", width: 7, height: 7 }),
                                    (0, n.jsx)("a", {
                                        rel: "noreferrer",
                                        href: "//dogstudio.co",
                                        target: "_blank",
                                        children: (0, n.jsx)("img", { src: y(), alt: "Dogstudio Logo" })
                                    }),
                                    (0, n.jsx)(h.Z, { name: "cross", width: 7, height: 7 }),
                                    (0, n.jsx)("a", {
                                        rel: "noreferrer",
                                        href: "//setsnail.com/",
                                        target: "_blank",
                                        children: (0, n.jsx)("img", { src: b(), alt: "Set Snail Logo" })
                                    })
                                ]
                            }),*/
                        (0, n.jsxs)("section", {
                            className: w()["page__about-section"],
                            children: [(0, n.jsx)(l.default, {
                                    href: "/about",
                                    children: (0, n.jsxs)("a", {
                                        className: w()["page__about-section-link"],
                                        children: ["More about us",
                                            (0, n.jsx)(h.Z, {
                                                name: "chevron-right",
                                                width: 4,
                                                height: 6,
                                                color: r
                                            })
                                        ]
                                    })
                                }),
                                (0, n.jsxs)("p", {
                                    className: w()["page__about-section-text"],
                                    children: "CPC Group is an entrepreneur business platform started by Dr.Ahmed Khairadeen Ali and Sardar Mohammed Salih to serve National and international businesses..."
                                })
                            ]
                        }),
                        (0, n.jsx)(s.Z, { in: e,
                            timeout: { exit: 400, enter: 400 },
                            classNames: "fade",
                            mountOnEnter: !0,
                            unmountOnExit: !0,
                            children: (0, n.jsx)("div", {
                                className: w().page__modal,
                                children: (0, n.jsx)(f.Z, {})
                            })
                        })
                    ]
                })
            };
            O.whyDidYouRender = !1, r.default = a.memo(O)
        },
        3850: function(e, r, t) {
            "use strict";
            t.d(r, { Z: function() { return g } });
            var n = t(6156),
                a = t(5893),
                o = t(9756);
            var l = t(7294),
                s = t(1664),
                i = t(195),
                c = t(4184),
                u = t.n(c),
                d = t(9048),
                _ = t(4107),
                m = t(5747),
                p = t.n(m);

            function h(e, r) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    r && (n = n.filter((function(r) { return Object.getOwnPropertyDescriptor(e, r).enumerable }))), t.push.apply(t, n)
                }
                return t
            }

            function f(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var t = null != arguments[r] ? arguments[r] : {};
                    r % 2 ? h(Object(t), !0).forEach((function(r) {
                        (0, n.Z)(e, r, t[r])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : h(Object(t)).forEach((function(r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)) }))
                }
                return e
            }
            const v = e => {
                const { className: r, tag: t, href: n, label: c, target: m, color: h } = e, v = function(e, r) { if (null == e) return {}; var t, n, a = (0, o.Z)(e, r); if (Object.getOwnPropertySymbols) { var l = Object.getOwnPropertySymbols(e); for (n = 0; n < l.length; n++) t = l[n], r.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (a[t] = e[t]) } return a }(e, ["className", "tag", "href", "label", "target", "color"]), [g, b] = (0, i.x)({ animated: !1 }), x = (0, l.useCallback)((() => { setTimeout((() => { b((e => { e.animated = !0 })) }), 600) }));
                (0, d.Z)(x);
                const y = u()(r, "button-chevron", {
                    [p()["button-chevron"]]: !0,
                    [p()["button-chevron--animated"]]: g.animated
                });
                if (n && !m || n && "_self" === m) return (0, a.jsx)(s.default, { href: n, children: (0, a.jsxs)("a", f(f({}, v), {}, { className: y, style: { color: h }, children: [(0, a.jsx)("span", { className: p()["button-chevron__label"], children: c }), (0, a.jsx)("span", { className: p()["button-chevron__chevron"], children: (0, a.jsx)(_.Z, { name: "chevron-right", width: 6, height: 8 }) })] })) });
                if (m && "_self" !== m) return (0, a.jsxs)("a", f(f({ rel: "noopener noreferrer", href: n, target: m, className: y, style: { color: h } }, v), {}, { children: [(0, a.jsx)("span", { className: p()["button-chevron__label"], children: c }), (0, a.jsx)("span", { className: p()["button-chevron__chevron"], children: (0, a.jsx)(_.Z, { name: "chevron-right", width: 6, height: 8 }) })] }));
                const j = t;
                return (0, a.jsxs)(j, f(f({}, v), {}, { className: y, style: { color: h }, children: [(0, a.jsx)("span", { className: p()["button-chevron__label"], children: c }), (0, a.jsx)("span", { className: p()["button-chevron__chevron"], children: (0, a.jsx)(_.Z, { name: "chevron-right", width: 6, height: 8 }) })] }))
            };
            v.defaultProps = { tag: "button", href: null, label: null, target: null }, v.whyDidYouRender = !1;
            var g = l.memo(v)
        },
        7224: function(e, r, t) {
            "use strict";
            t.d(r, { Z: function() { return h } });
            var n = t(5893),
                a = t(7294),
                o = t(4184),
                l = t.n(o),
                s = t(195),
                i = t(9048),
                c = t(7823),
                u = t(5741),
                d = t(8932),
                _ = t(1489),
                m = t.n(_);
            const p = () => {
                var e, r, t, o, _, p, h;
                const f = (0, a.useRef)(0),
                    v = (0, a.useRef)(null),
                    g = (0, a.useRef)(null),
                    { color: b } = (0, d.Z)(),
                    [x, y] = (0, s.x)({ playing: !1, hasVolume: !0, atStart: !0, duration: "00:00", progress: "00:00", progressDelta: 0 }),
                    j = e => {
                        let r = e,
                            t = Math.floor(r / 60);
                        return t = t >= 10 ? t : `0${t}`, r = Math.floor(r % 60), r = r >= 10 ? r : `0${r}`, `${t}:${r}`
                    },
                    E = (0, a.useCallback)((() => { y((e => { e.playing = !0 })) }), []),
                    N = (0, a.useCallback)((() => { y((e => { e.playing = !1 })) }), []),
                    w = (0, a.useCallback)((() => { v.current.currentTime = 0, y((e => { e.playing = !1 })) }), [null === (e = v.current) || void 0 === e ? void 0 : e.currentTime]),
                    O = (0, a.useCallback)((() => { y((e => { e.duration = j(v.current.duration) })) }), [null === (r = v.current) || void 0 === r ? void 0 : r.duration]),
                    R = (0, a.useCallback)((() => {
                        const e = Number((v.current.currentTime / v.current.duration).toFixed(4));
                        y((r => { r.progressDelta = Number.isNaN(e) ? 0 : e }))
                    }), [null === (t = v.current) || void 0 === t ? void 0 : t.duration, null === (o = v.current) || void 0 === o ? void 0 : o.currentTime]),
                    k = (0, a.useCallback)((() => { y((e => { e.playing = !e.playing })) }), []),
                    S = (0, a.useCallback)((() => {
                        const e = Number(g.current.value / 100) * v.current.duration;
                        v.current.currentTime = e
                    }), [null === (_ = v.current) || void 0 === _ ? void 0 : _.value, null === (p = v.current) || void 0 === p ? void 0 : p.duration, null === (h = v.current) || void 0 === h ? void 0 : h.currentTime]),
                    C = (0, a.useCallback)((() => { y((e => { e.hasVolume = !e.hasVolume })) }), []);
                (0, i.Z)((() => { y((e => { e.playing = !0 })) })), (0, c.Z)((() => { y((e => { e.playing = !1 })) })), (0, a.useEffect)((() => { g.current && (f.current = g.current.getBoundingClientRect().width) }), [g, window.innerWidth]), (0, a.useEffect)((() => { v.current.volume = x.hasVolume ? 1 : 0 }), [x.hasVolume]), (0, a.useEffect)((() => { x.playing ? v.current.play() : v.current.pause() }), [x.playing]), (0, a.useEffect)((() => { y((e => { e.progress = j(v.current.currentTime), e.atStart = !(v.current.currentTime > 0) })) }), [x.progressDelta]);
                const T = {
                    root: l()("reel-modal", {
                        [m()["reel-modal"]]: !0,
                        [m()["reel-modal--is-playing"]]: x.playing,
                        [m()["reel-modal--has-volume"]]: x.hasVolume,
                        [m()["reel-modal--at-start"]]: x.atStart
                    })
                };
                return (0, n.jsxs)("div", { className: T.root, children: [(0, n.jsx)("video", { ref: v, src: "/_next/static/media/motleycrowd-live-reel.9d0424180425f1191427bdc7053a10fc.mp4", autoPlay: !0, preload: "metadata", onPlay: E, onPause: N, onEnded: w, onTimeUpdate: R, onLoadedMetadata: O, className: m()["reel-modal__video"] }), (0, n.jsxs)("div", { className: m()["reel-modal__bar"], children: [(0, n.jsx)("button", { type: "button", onClick: k, className: `${m()["reel-modal__button"]} ${m()["reel-modal__button--play"]}`, children: x.playing ? "Pause" : "Play" }), (0, n.jsxs)("div", { className: m()["reel-modal__progress"], children: [(0, n.jsx)("div", { style: { transform: `scaleX(${x.progressDelta})` }, className: m()["reel-modal__progress-bar"] }), (0, n.jsx)("input", { ref: g, type: "range", value: 100 * x.progressDelta, onChange: S }), (0, n.jsx)("p", { className: m()["reel-modal__progress-text"], style: { transform: `translateX(${x.progressDelta*f.current}px` }, children: (0, n.jsx)(u.Z, { in: x.progressDelta * f.current > 140, timeout: { exit: 400, enter: 400 }, classNames: "fade", mountOnEnter: !0, children: (0, n.jsx)("span", { children: x.progress }) }) })] }), (0, n.jsxs)("button", { type: "button", onClick: C, className: `${m()["reel-modal__button"]} ${m()["reel-modal__button--volume"]}`, children: [x.hasVolume ? "Unmute" : "Mute", (0, n.jsxs)("span", { className: m()["reel-modal__button-bars"], style: { color: b }, children: [(0, n.jsx)("span", { className: m()["reel-modal__button-bar"] }), (0, n.jsx)("span", { className: m()["reel-modal__button-bar"] }), (0, n.jsx)("span", { className: m()["reel-modal__button-bar"] })] })] })] })] })
            };
            p.whyDidYouRender = !1;
            var h = a.memo(p)
        },
        6447: function(e, r, t) {
            "use strict";
            var n = t(7294),
                a = t(1405);
            r.Z = () => {
                const e = (0, n.useContext)(a.bj);
                if ("undefined" === typeof e) throw new Error("useMaestroMutations must be used within a MaestroProvider");
                return {
                    setMaestroState: (0, n.useCallback)((r => {
                        switch (r.type) {
                            case "SET_CURRENT_PROJECT":
                                e((e => { e.currentProject = r.value }));
                                break;
                            case "SET_COLOR":
                                e((e => { e.color = r.value }));
                                break;
                            case "SET_NAVIGATION":
                                e((e => { e.navigation = r.value }));
                                break;
                            case "SET_DRAG_PROGRESS":
                                e((e => { e.drag = r.value }));
                                break;
                            case "SET_PROGRESS":
                                e((e => { e.progress = r.value }));
                                break;
                            case "SET_LOADED":
                                e((e => { e.loaded = r.value }));
                                break;
                            case "SET_PREV_PROJECT_EVENT":
                                e((e => { e.isPrev = r.value }));
                                break;
                            case "SET_NEXT_PROJECT_EVENT":
                                e((e => { e.isNext = r.value }))
                        }
                    }), [e])
                }
            }
        },
        3685: function(e, r, t) {
            //------ edited -------
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() { return t(8894) }])
        },
        7646: function(e) { e.exports = { page: "index_page__3xr2r", "page__projects-link": "index_page__projects-link__3_dkZ", "page__main-section": "index_page__main-section__2RmIS", "page__main-section-title": "index_page__main-section-title__P6jZW", uai8gpp: "index_uai8gpp__2bKft", "page__about-section": "index_page__about-section__24jQX", "page__about-section-link": "index_page__about-section-link__3Nv1s", "page__about-section-text": "index_page__about-section-text__3lVUv", "page__creators-section": "index_page__creators-section__1EtQS", page__modal: "index_page__modal__2TnFm" } },
        5747: function(e) { e.exports = { "button-chevron": "ButtonChevron_button-chevron__39Xjx", "button-chevron__chevron": "ButtonChevron_button-chevron__chevron__2HwAd", "button-chevron--animated": "ButtonChevron_button-chevron--animated__1cEHI", uai8gti: "ButtonChevron_uai8gti__2B-Bi", "button-chevron__label": "ButtonChevron_button-chevron__label__1hsfh", uai8guf: "ButtonChevron_uai8guf__3KjUK", uai8gva: "ButtonChevron_uai8gva__3rM0T", uai8gw0: "ButtonChevron_uai8gw0__c90mU" } },
        1489: function(e) { e.exports = { "reel-modal": "ReelModal_reel-modal__25Low", "reel-modal__video": "ReelModal_reel-modal__video__3Xke5", "reel-modal__bar": "ReelModal_reel-modal__bar__1Mzqn", "reel-modal__progress": "ReelModal_reel-modal__progress__2GTcE", "reel-modal__progress-text": "ReelModal_reel-modal__progress-text__12tFh", "reel-modal__progress-bar": "ReelModal_reel-modal__progress-bar__XEULh", "reel-modal__button": "ReelModal_reel-modal__button___hsQY", "reel-modal__button--play": "ReelModal_reel-modal__button--play__3huBS", "reel-modal__button--volume": "ReelModal_reel-modal__button--volume__3mUX-", "reel-modal__button-bars": "ReelModal_reel-modal__button-bars__1vQLB", "reel-modal__button-bar": "ReelModal_reel-modal__button-bar__3I7eu", uai8gsx: "ReelModal_uai8gsx__2S7Va", "reel-modal--has-volume": "ReelModal_reel-modal--has-volume__1BuPV", "reel-modal--is-playing": "ReelModal_reel-modal--is-playing__2CCuF", "reel-modal--at-start": "ReelModal_reel-modal--at-start__13RiU" } },
        7823: function(e, r, t) {
            "use strict";
            var n = t(7294),
                a = t(8127);
            r.Z = function(e) {
                var r = (0, n.useRef)(e);
                r.current = e, (0, a.Z)((function() { return function() { return r.current() } }))
            }
        },
        1350: function(e) { e.exports = "/_next/static/images/dogstudio-6f37c87856f931b9b20241cd6e0f7f83.svg" },
        8183: function(e) { e.exports = "/_next/static/images/hello-monday-31961559b3218631e0eade55d94831e7.svg" },
        8875: function(e) { e.exports = "/_next/static/images/setsnail-d1c4516c9756090ef56c3bdab6e4ab8a.svg" }
    },
    function(e) {
        e.O(0, [774, 888, 179], (function() { return r = 3685, e(e.s = r); var r }));
        var r = e.O();
        _N_E = r
    }
]);