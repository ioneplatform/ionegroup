(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [797], { 6797: function(t) { "use strict"; var e = "bfred-it:object-fit-images",
                i = /(object-fit|object-position)\s*:\s*([-.\w\s%]+)/g,
                r = "undefined" === typeof Image ? { style: { "object-position": 1 } } : new Image,
                n = "object-fit" in r.style,
                s = "object-position" in r.style,
                c = "background-size" in r.style,
                o = "string" === typeof r.currentSrc,
                a = r.getAttribute,
                l = r.setAttribute,
                u = !1;

            function g(t, e, i) { var r = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='" + (e || 1) + "' height='" + (i || 0) + "'%3E%3C/svg%3E";
                a.call(t, "src") !== r && l.call(t, "src", r) }

            function f(t, e) { t.naturalWidth ? e(t) : setTimeout(f, 100, t, e) }

            function d(t) { var r = function(t) { for (var e, r = getComputedStyle(t).fontFamily, n = {}; null !== (e = i.exec(r));) n[e[1]] = e[2]; return n }(t),
                    s = t[e]; if (r["object-fit"] = r["object-fit"] || "fill", !s.img) { if ("fill" === r["object-fit"]) return; if (!s.skipTest && n && !r["object-position"]) return } if (!s.img) { s.img = new Image(t.width, t.height), s.img.srcset = a.call(t, "data-ofi-srcset") || t.srcset, s.img.src = a.call(t, "data-ofi-src") || t.src, l.call(t, "data-ofi-src", t.src), t.srcset && l.call(t, "data-ofi-srcset", t.srcset), g(t, t.naturalWidth || t.width, t.naturalHeight || t.height), t.srcset && (t.srcset = ""); try {! function(t) { var i = { get: function(i) { return t[e].img[i || "src"] }, set: function(i, r) { return t[e].img[r || "src"] = i, l.call(t, "data-ofi-" + r, i), d(t), i } };
                            Object.defineProperty(t, "src", i), Object.defineProperty(t, "currentSrc", { get: function() { return i.get("currentSrc") } }), Object.defineProperty(t, "srcset", { get: function() { return i.get("srcset") }, set: function(t) { return i.set(t, "srcset") } }) }(t) } catch (c) { window.console && console.warn("https://bit.ly/ofi-old-browser") } }! function(t) { if (t.srcset && !o && window.picturefill) { var e = window.picturefill._;
                        t[e.ns] && t[e.ns].evaled || e.fillImg(t, { reselect: !0 }), t[e.ns].curSrc || (t[e.ns].supported = !1, e.fillImg(t, { reselect: !0 })), t.currentSrc = t[e.ns].curSrc || t.src } }(s.img), t.style.backgroundImage = 'url("' + (s.img.currentSrc || s.img.src).replace(/"/g, '\\"') + '")', t.style.backgroundPosition = r["object-position"] || "center", t.style.backgroundRepeat = "no-repeat", t.style.backgroundOrigin = "content-box", /scale-down/.test(r["object-fit"]) ? f(s.img, (function() { s.img.naturalWidth > t.width || s.img.naturalHeight > t.height ? t.style.backgroundSize = "contain" : t.style.backgroundSize = "auto" })) : t.style.backgroundSize = r["object-fit"].replace("none", "auto").replace("fill", "100% 100%"), f(s.img, (function(e) { g(t, e.naturalWidth, e.naturalHeight) })) }

            function m(t, i) { var r = !u && !t; if (i = i || {}, t = t || "img", s && !i.skipTest || !c) return !1; "img" === t ? t = document.getElementsByTagName("img") : "string" === typeof t ? t = document.querySelectorAll(t) : "length" in t || (t = [t]); for (var n = 0; n < t.length; n++) t[n][e] = t[n][e] || { skipTest: i.skipTest }, d(t[n]);
                r && (document.body.addEventListener("load", (function(t) { "IMG" === t.target.tagName && m(t.target, { skipTest: i.skipTest }) }), !0), u = !0, t = "img"), i.watchMQ && window.addEventListener("resize", m.bind(null, t, { skipTest: i.skipTest })) }
            m.supportsObjectFit = n, m.supportsObjectPosition = s,
                function() {
                    function t(t, i) { return t[e] && t[e].img && ("src" === i || "srcset" === i) ? t[e].img : t }
                    s || (HTMLImageElement.prototype.getAttribute = function(e) { return a.call(t(this, e), e) }, HTMLImageElement.prototype.setAttribute = function(e, i) { return l.call(t(this, e), e, String(i)) }) }(), t.exports = m } }
]);