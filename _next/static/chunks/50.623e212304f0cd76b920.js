(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [50], { 4050: function(t) { "undefined" !== typeof t.exports && (t.exports = function(t) { "use strict"; var e = navigator.userAgent.indexOf("Edge/") >= 0,
                    o = new Image,
                    i = "object-fit" in o.style && !e,
                    n = "object-position" in o.style && !e,
                    r = /(object-fit|object-position)\s*:\s*([-\w\s%]+)/g;

                function a(t) { for (var e = getComputedStyle(t).fontFamily, o = null, i = {}; null !== (o = r.exec(e));) i[o[1]] = o[2]; return i["object-position"] ? function(t) {~t["object-position"].indexOf("left") ? t["object-position-x"] = "left" : ~t["object-position"].indexOf("right") ? t["object-position-x"] = "right" : t["object-position-x"] = "center";~t["object-position"].indexOf("top") ? t["object-position-y"] = "top" : ~t["object-position"].indexOf("bottom") ? t["object-position-y"] = "bottom" : t["object-position-y"] = "center"; return t }(i) : i }

                function c(t, e) { if ("fill" !== e["object-fit"]) { var o = t.style,
                            i = window.getComputedStyle(t),
                            n = document.createElement("object-fit");
                        n.appendChild(t.parentNode.replaceChild(n, t)); var r = { height: "100%", width: "100%", boxSizing: "content-box", display: "inline-block", overflow: "hidden" }; for (var a in "backgroundColor backgroundImage borderColor borderStyle borderWidth bottom fontSize lineHeight left opacity margin position right top visibility".replace(/\w+/g, (function(t) { r[t] = i[t] })), r) n.style[a] = r[a];
                        o.border = o.margin = o.padding = 0, o.display = "block", o.opacity = 1, t.addEventListener("loadedmetadata", c), window.addEventListener("optimizedResize", c), t.readyState >= 1 && (t.removeEventListener("loadedmetadata", c), c()) }

                    function c() { var i = t.videoWidth / t.videoHeight,
                            r = n.clientWidth,
                            a = n.clientHeight,
                            c = r / a,
                            d = 0,
                            p = 0;
                        o.marginLeft = o.marginTop = 0, (i < c ? "contain" === e["object-fit"] : "cover" === e["object-fit"]) ? (d = a * i, p = r / i, o.width = Math.round(d) + "px", o.height = a + "px", "left" === e["object-position-x"] ? o.marginLeft = 0 : "right" === e["object-position-x"] ? o.marginLeft = Math.round(r - d) + "px" : o.marginLeft = Math.round((r - d) / 2) + "px") : (p = r / i, o.width = r + "px", o.height = Math.round(p) + "px", "top" === e["object-position-y"] ? o.marginTop = 0 : "bottom" === e["object-position-y"] ? o.marginTop = Math.round(a - p) + "px" : o.marginTop = Math.round((a - p) / 2) + "px"), t.autoplay && t.play() } }
                i && n || (function(t) { var e = -1;
                    t ? "length" in t || (t = [t]) : t = document.querySelectorAll("video"); for (; t[++e];) { var o = a(t[e]);
                        (o["object-fit"] || o["object-position"]) && (o["object-fit"] = o["object-fit"] || "fill", c(t[e], o)) } }(t), function(t, e, o) { o = o || window; var i = !1,
                        n = null; try { n = new CustomEvent(e) } catch (a) {
                        (n = document.createEvent("Event")).initEvent(e, !0, !0) } var r = function() { i || (i = !0, requestAnimationFrame((function() { o.dispatchEvent(n), i = !1 }))) };
                    o.addEventListener(t, r) }("resize", "optimizedResize")) }) } }
]);