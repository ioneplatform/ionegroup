(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [521], {
        7814: function(e, a, t) {
            "use strict";
            t.r(a);
            var o = t(5893),
                l = t(9008),
                r = t(7294),
                s = t(909),
                n = t(9048),
                i = t(5741),
                _ = t(6447),
                u = t(8932),
                c = t(9675),
                d = t(4446),
                m = t(4107),
                b = t(7224),
                h = t(1638),
                p = t(4384),
                g = t.n(p),
                x = t(1787),
                f = t.n(x),
                v = t(1350),
                j = t.n(v),
                N = t(8183),
                y = t.n(N),
                E = t(8875),
                T = t.n(E),
                R = t(5690),
                k = t.n(R);
            //----- edited (about us 2) (false) ------------
            const M = e => {
                    const { color: a } = e;
                    return (0, o.jsxs)("div", {
                        /*
                                                className: k().about__logos,
                                                children: [(0, o.jsx)("p", {
                                                        className: k()["about__headline--small"],
                                                        children: "Motley Crowd is a joint initiative from the friendly pirates over at:"
                                                    }),
                                                    (0, o.jsxs)("ul", {
                                                        className: k()["about__logos-list"],
                                                        children: [(0, o.jsx)("li", {
                                                                className: k()["about__logos-list-item"],
                                                                children: (0, o.jsxs)("a", {
                                                                    href: "//hellomonday.com/",
                                                                    target: "_blank",
                                                                    rel: "noreferrer",
                                                                    children: [(0, o.jsx)("img", { src: y(), alt: "Hello Monday Logo" }),
                                                                        (0, o.jsx)(m.Z, {
                                                                            name: "chevron-right",
                                                                            width: 6,
                                                                            height: 8,
                                                                            color: a
                                                                        }),
                                                                        (0, o.jsx)("span", {
                                                                            className: k()["about__logos-list-item-border"]
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            (0, o.jsx)("li", {
                                                                className: k()["about__logos-list-item"],
                                                                children: (0, o.jsxs)("a", {
                                                                    href: "//dogstudio.co",
                                                                    target: "_blank",
                                                                    rel: "noreferrer",
                                                                    children: [(0, o.jsx)("img", { src: j(), alt: "Dogstudio Logo" }),
                                                                        (0, o.jsx)(m.Z, {
                                                                            name: "chevron-right",
                                                                            width: 6,
                                                                            height: 8,
                                                                            color: a
                                                                        }),
                                                                        (0, o.jsx)("span", { className: k()["about__logos-list-item-border"] })
                                                                    ]
                                                                })
                                                            }),
                                                            (0, o.jsx)("li", {
                                                                className: k()["about__logos-list-item"],
                                                                children: (0, o.jsxs)("a", {
                                                                    href: "//setsnail.com/",
                                                                    target: "_blank",
                                                                    rel: "noreferrer",
                                                                    children: [(0, o.jsx)("img", { src: T(), alt: "Set Snail Logo" }),
                                                                        (0, o.jsx)(m.Z, {
                                                                            name: "chevron-right",
                                                                            width: 6,
                                                                            height: 8,
                                                                            color: a
                                                                        }),
                                                                        (0, o.jsx)("span", {
                                                                            className: k()["about__logos-list-item-border"]
                                                                        })
                                                                    ]
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            */
                    })
                },
                S = () => {
                    const e = (0, s.Z)(`(min-width: ${h.j$.XL}px)`),
                        a = (0, s.Z)(`(min-width: ${h.j$.XL}px)`),
                        t = (0, d.Z)().open,
                        { color: p } = (0, u.Z)(),
                        { setReelState: x } = (0, c.Z)(),
                        { setMaestroState: v } = (0, _.Z)(),
                        j = (0, r.useCallback)((() => { v({ type: "SET_COLOR", value: "#cb5ce3" }), v({ type: "SET_NAVIGATION", value: ["contact"] }) }));
                    return (0, n.Z)(j), (0, r.useEffect)((() => {
                            t || v({ type: "SET_NAVIGATION", value: ["contact"] })
                        }), [t]),
                        (0, o.jsxs)("div", {
                            className: k().about,
                            children: [(0, o.jsx)(l.default, {
                                    children: (0, o.jsx)("title", { children: "About | CPC Group" })
                                }),
                                /*
                                                                //------- edited (video) -----
                                                                (0, o.jsxs)("div", {
                                                                    className: k().about__video,
                                                                    children: [a && (0, o.jsx)("p", {
                                                                            className: k().about__headline,
                                                                            children: "About us"
                                                                        }),
                                                                        (0, o.jsxs)("button", {
                                                                            type: "button",
                                                                            className: k()["about__video-button"],
                                                                            style: { color: p },
                                                                            onClick: () => {
                                                                                x({ type: "SET_REEL_OPEN", value: !0 }),
                                                                                    v({
                                                                                        type: "SET_NAVIGATION",
                                                                                        value: ["reel"]
                                                                                    })
                                                                            },
                                                                            children: [(0, o.jsx)("img", {
                                                                                    src: `${g()}`,
                                                                                    srcSet: `${f()} 2x`,
                                                                                    alt: "Watch reel image"
                                                                                }),
                                                                                (0, o.jsx)(m.Z, {
                                                                                    name: "play",
                                                                                    width: 12,
                                                                                    height: 12
                                                                                })
                                                                            ]
                                                                        }),
                                                                        a && (0, o.jsxs)("p", {
                                                                            className: k().about__headline,
                                                                            children: [(0, o.jsx)(m.Z, { name: "", width: 6, height: 6 }),
                                                                                ""
                                                                            ]
                                                                        })
                                                                    ]
                                                                }),*/
                                (0, o.jsxs)("div", {
                                    className: k().about__content,
                                    children: [(0, o.jsx)("p", {
                                            className: k().about__headline,
                                            children: "About"
                                        }),
                                        (0, o.jsxs)("p", {
                                            className: k().about__text,
                                            children: ["CPC Group is an entrepreneur business platform started by Dr.Ahmed Khairadeen Ali and Sardar Mohammed Salih to serve National and international businesses and startups with technology, engineering, construction, architecture, education, and web development services. CPC Group consist of:",
                                                (0, o.jsx)("p", {
                                                    //style: { color: p },
                                                    children: "- Creative Petroleum Construction"
                                                }),
                                                (0, o.jsx)("p", {
                                                    //style: { color: p },
                                                    children: "- CPC Architecture"
                                                }),
                                                (0, o.jsx)("p", {
                                                    //style: { color: p },
                                                    children: "- CPC Education"
                                                }),
                                                (0, o.jsx)("p", {
                                                    //style: { color: p },
                                                    children: "- CPC Web Development "
                                                }),
                                                (0, o.jsx)("br", {}),
                                                (0, o.jsx)("p", {
                                                    //style: { color: p },
                                                    children: "Contact us: "
                                                }),
                                                (0, o.jsx)("a", {
                                                    href: "mailto:cpccompanyinfo@gmail.com",
                                                    target: "_blank",
                                                    rel: "noreferrer",
                                                    style: { color: p },
                                                    children: (0, o.jsx)("span", { children: "cpccompanyinfo@gmail.com" })
                                                }),
                                                (0, o.jsx)("a", {
                                                    href: "tel:9647504867875",
                                                    target: "_blank",
                                                    rel: "noreferrer",
                                                    style: { color: p },
                                                    children: (0, o.jsx)("span", { children: "964(0)750 486 7875" })
                                                }),
                                                (0, o.jsx)("p", {
                                                    children: "Nobel hotel, 3rd Floor, Apartment #8, Gre base, Duhok, Iraq"
                                                }),
                                            ]
                                        }), !e && (0, o.jsx)(M, { color: p })
                                    ]
                                }),
                                e && (0, o.jsx)(M, { color: p }),
                                (0, o.jsx)(i.Z, { in: t,
                                    timeout: { exit: 400, enter: 400 },
                                    classNames: "fade",
                                    mountOnEnter: !0,
                                    unmountOnExit: !0,
                                    children: (0, o.jsx)("div", {
                                        className: k().about__modal,
                                        children: (0, o.jsx)(b.Z, {})
                                    })
                                })
                            ]
                        })
                };
            S.whyDidYouRender = !1, a.default = r.memo(S)
        },
        7224: function(e, a, t) {
            "use strict";
            t.d(a, { Z: function() { return h } });
            var o = t(5893),
                l = t(7294),
                r = t(4184),
                s = t.n(r),
                n = t(195),
                i = t(9048),
                _ = t(7823),
                u = t(5741),
                c = t(8932),
                d = t(1489),
                m = t.n(d);
            const b = () => {
                var e, a, t, r, d, b, h;
                const p = (0, l.useRef)(0),
                    g = (0, l.useRef)(null),
                    x = (0, l.useRef)(null),
                    { color: f } = (0, c.Z)(),
                    [v, j] = (0, n.x)({ playing: !1, hasVolume: !0, atStart: !0, duration: "00:00", progress: "00:00", progressDelta: 0 }),
                    N = e => {
                        let a = e,
                            t = Math.floor(a / 60);
                        return t = t >= 10 ? t : `0${t}`, a = Math.floor(a % 60), a = a >= 10 ? a : `0${a}`, `${t}:${a}`
                    },
                    y = (0, l.useCallback)((() => { j((e => { e.playing = !0 })) }), []),
                    E = (0, l.useCallback)((() => { j((e => { e.playing = !1 })) }), []),
                    T = (0, l.useCallback)((() => { g.current.currentTime = 0, j((e => { e.playing = !1 })) }), [null === (e = g.current) || void 0 === e ? void 0 : e.currentTime]),
                    R = (0, l.useCallback)((() => { j((e => { e.duration = N(g.current.duration) })) }), [null === (a = g.current) || void 0 === a ? void 0 : a.duration]),
                    k = (0, l.useCallback)((() => {
                        const e = Number((g.current.currentTime / g.current.duration).toFixed(4));
                        j((a => { a.progressDelta = Number.isNaN(e) ? 0 : e }))
                    }), [null === (t = g.current) || void 0 === t ? void 0 : t.duration, null === (r = g.current) || void 0 === r ? void 0 : r.currentTime]),
                    M = (0, l.useCallback)((() => { j((e => { e.playing = !e.playing })) }), []),
                    S = (0, l.useCallback)((() => {
                        const e = Number(x.current.value / 100) * g.current.duration;
                        g.current.currentTime = e
                    }), [null === (d = g.current) || void 0 === d ? void 0 : d.value, null === (b = g.current) || void 0 === b ? void 0 : b.duration, null === (h = g.current) || void 0 === h ? void 0 : h.currentTime]),
                    C = (0, l.useCallback)((() => { j((e => { e.hasVolume = !e.hasVolume })) }), []);
                (0, i.Z)((() => { j((e => { e.playing = !0 })) })), (0, _.Z)((() => { j((e => { e.playing = !1 })) })), (0, l.useEffect)((() => { x.current && (p.current = x.current.getBoundingClientRect().width) }), [x, window.innerWidth]), (0, l.useEffect)((() => { g.current.volume = v.hasVolume ? 1 : 0 }), [v.hasVolume]), (0, l.useEffect)((() => { v.playing ? g.current.play() : g.current.pause() }), [v.playing]), (0, l.useEffect)((() => { j((e => { e.progress = N(g.current.currentTime), e.atStart = !(g.current.currentTime > 0) })) }), [v.progressDelta]);
                const w = {
                    root: s()("reel-modal", {
                        [m()["reel-modal"]]: !0,
                        [m()["reel-modal--is-playing"]]: v.playing,
                        [m()["reel-modal--has-volume"]]: v.hasVolume,
                        [m()["reel-modal--at-start"]]: v.atStart
                    })
                };
                return (0, o.jsxs)("div", { className: w.root, children: [(0, o.jsx)("video", { ref: g, src: "/_next/static/media/motleycrowd-live-reel.9d0424180425f1191427bdc7053a10fc.mp4", autoPlay: !0, preload: "metadata", onPlay: y, onPause: E, onEnded: T, onTimeUpdate: k, onLoadedMetadata: R, className: m()["reel-modal__video"] }), (0, o.jsxs)("div", { className: m()["reel-modal__bar"], children: [(0, o.jsx)("button", { type: "button", onClick: M, className: `${m()["reel-modal__button"]} ${m()["reel-modal__button--play"]}`, children: v.playing ? "Pause" : "Play" }), (0, o.jsxs)("div", { className: m()["reel-modal__progress"], children: [(0, o.jsx)("div", { style: { transform: `scaleX(${v.progressDelta})` }, className: m()["reel-modal__progress-bar"] }), (0, o.jsx)("input", { ref: x, type: "range", value: 100 * v.progressDelta, onChange: S }), (0, o.jsx)("p", { className: m()["reel-modal__progress-text"], style: { transform: `translateX(${v.progressDelta*p.current}px` }, children: (0, o.jsx)(u.Z, { in: v.progressDelta * p.current > 140, timeout: { exit: 400, enter: 400 }, classNames: "fade", mountOnEnter: !0, children: (0, o.jsx)("span", { children: v.progress }) }) })] }), (0, o.jsxs)("button", { type: "button", onClick: C, className: `${m()["reel-modal__button"]} ${m()["reel-modal__button--volume"]}`, children: [v.hasVolume ? "Unmute" : "Mute", (0, o.jsxs)("span", { className: m()["reel-modal__button-bars"], style: { color: f }, children: [(0, o.jsx)("span", { className: m()["reel-modal__button-bar"] }), (0, o.jsx)("span", { className: m()["reel-modal__button-bar"] }), (0, o.jsx)("span", { className: m()["reel-modal__button-bar"] })] })] })] })] })
            };
            b.whyDidYouRender = !1;
            var h = l.memo(b)
        },
        6447: function(e, a, t) {
            "use strict";
            var o = t(7294),
                l = t(1405);
            a.Z = () => {
                const e = (0, o.useContext)(l.bj);
                if ("undefined" === typeof e) throw new Error("useMaestroMutations must be used within a MaestroProvider");
                return {
                    setMaestroState: (0, o.useCallback)((a => {
                        switch (a.type) {
                            case "SET_CURRENT_PROJECT":
                                e((e => { e.currentProject = a.value }));
                                break;
                            case "SET_COLOR":
                                e((e => { e.color = a.value }));
                                break;
                            case "SET_NAVIGATION":
                                e((e => { e.navigation = a.value }));
                                break;
                            case "SET_DRAG_PROGRESS":
                                e((e => { e.drag = a.value }));
                                break;
                            case "SET_PROGRESS":
                                e((e => { e.progress = a.value }));
                                break;
                            case "SET_LOADED":
                                e((e => { e.loaded = a.value }));
                                break;
                            case "SET_PREV_PROJECT_EVENT":
                                e((e => { e.isPrev = a.value }));
                                break;
                            case "SET_NEXT_PROJECT_EVENT":
                                e((e => { e.isNext = a.value }))
                        }
                    }), [e])
                }
            }
        },
        841: function(e, a, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push(
                ["/about", function() { return t(7814) }])
        },
        5690: function(e) {
            //----- edited ---------

            e.exports = {
                about: "about_about__2c0i3",
                about__modal: "about_about__modal__1f7QF",
                about__video: "about_about__video__3dfaS",
                "about__video-button": "about_about__video-button__3sB-P",
                about__headline: "about_about__headline__3XtGl",
                about__content: "about_about__content__HOLKJ",
                about__logos: "about_about__logos__35AiH",
                about__text: "about_about__text__GsApp",
                "about__logos-list": "about_about__logos-list__3Og3z",
                "about__logos-list-item": "about_about__logos-list-item__D4TM6",
                "about__logos-list-item-border": "about_about__logos-list-item-border__2dvTl",
                "about__headline--small": "about_about__headline--small__3qBKV"
            }
        },
        1489: function(e) { e.exports = { "reel-modal": "ReelModal_reel-modal__25Low", "reel-modal__video": "ReelModal_reel-modal__video__3Xke5", "reel-modal__bar": "ReelModal_reel-modal__bar__1Mzqn", "reel-modal__progress": "ReelModal_reel-modal__progress__2GTcE", "reel-modal__progress-text": "ReelModal_reel-modal__progress-text__12tFh", "reel-modal__progress-bar": "ReelModal_reel-modal__progress-bar__XEULh", "reel-modal__button": "ReelModal_reel-modal__button___hsQY", "reel-modal__button--play": "ReelModal_reel-modal__button--play__3huBS", "reel-modal__button--volume": "ReelModal_reel-modal__button--volume__3mUX-", "reel-modal__button-bars": "ReelModal_reel-modal__button-bars__1vQLB", "reel-modal__button-bar": "ReelModal_reel-modal__button-bar__3I7eu", uai8gsx: "ReelModal_uai8gsx__2S7Va", "reel-modal--has-volume": "ReelModal_reel-modal--has-volume__1BuPV", "reel-modal--is-playing": "ReelModal_reel-modal--is-playing__2CCuF", "reel-modal--at-start": "ReelModal_reel-modal--at-start__13RiU" } },
        7823: function(e, a, t) {
            "use strict";
            var o = t(7294),
                l = t(8127);
            a.Z = function(e) {
                var a = (0, o.useRef)(e);
                a.current = e, (0, l.Z)((function() { return function() { return a.current() } }))
            }
        },
        4384: function(e) { e.exports = "/_next/static/images/about-reel-poster-4cd59acce4673233b0e80fdbe73d0c39.jpg" },
        1787: function(e) { e.exports = "/_next/static/images/about-reel-poster@2x-f905af9502f071683916758594761e44.jpg" },
        1350: function(e) { e.exports = "/_next/static/images/dogstudio-6f37c87856f931b9b20241cd6e0f7f83.svg" },
        8183: function(e) { e.exports = "/_next/static/images/hello-monday-31961559b3218631e0eade55d94831e7.svg" },
        8875: function(e) { e.exports = "/_next/static/images/setsnail-d1c4516c9756090ef56c3bdab6e4ab8a.svg" }
    },
    function(e) {
        e.O(0, [774, 888, 179], (function() { return a = 841, e(e.s = a); var a }));
        var a = e.O();
        _N_E = a
    }
]);