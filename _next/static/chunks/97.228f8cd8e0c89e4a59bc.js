(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [97], {
        2097: function(e, t, r) {
            "use strict";
            r.r(t);
            var n = r(6156),
                c = r(5893),
                o = r(7294);

            function s(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), r.push.apply(r, n)
                }
                return r
            }

            //------- edited (about us 2) -------------
            function i(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? s(Object(r), !0).forEach((function(t) {
                        (0, n.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : s(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            const p = e => (0, c.jsx)("svg",
                i(i({ viewBox: "0 0 9.3334 13.00005" },
                    e), {}, {
                    /*children: (0, c.jsx)("path", {
                        d: "M8.93333,7.3,1.6,12.8A1,1,0,0,1,0,12V1A1,1,0,0,1,1.6.2L8.93333,5.7a.99995.99995,0,0,1,0,1.6Z"
                    })*/
                }));
            p.whyDidYouRender = !1, t.default = o.memo(p)
        }
    }
]);