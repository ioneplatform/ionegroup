// Copyright 2012 Google Inc. All rights reserved.
(function() {

    var data = {
        "resource": {
            "version": "1",

            "macros": [{ "function": "__e" }, { "vtp_signal": 0, "function": "__c", "vtp_value": 0 }, { "function": "__c", "vtp_value": "google.iq" }, { "function": "__c", "vtp_value": 0 }, { "function": "__aev", "vtp_varType": "URL", "vtp_component": "IS_OUTBOUND", "vtp_affiliatedDomains": ["list"] }, { "function": "__v", "vtp_name": "gtm.triggers", "vtp_dataLayerVersion": 2, "vtp_setDefaultValue": true, "vtp_defaultValue": "" }, { "function": "__v", "vtp_name": "gtm.elementId", "vtp_dataLayerVersion": 1 }, { "function": "__v", "vtp_name": "gtm.elementClasses", "vtp_dataLayerVersion": 1 }, { "function": "__aev", "vtp_varType": "URL", "vtp_component": "URL_NO_FRAGMENT" }, { "function": "__aev", "vtp_varType": "URL", "vtp_component": "HOST", "vtp_stripWww": true }, { "function": "__v", "vtp_name": "gtm.videoStatus", "vtp_dataLayerVersion": 1 }, { "function": "__v", "vtp_name": "gtm.videoUrl", "vtp_dataLayerVersion": 1 }, { "function": "__v", "vtp_name": "gtm.videoTitle", "vtp_dataLayerVersion": 1 }, { "function": "__v", "vtp_name": "gtm.videoProvider", "vtp_dataLayerVersion": 1 }, { "function": "__v", "vtp_name": "gtm.videoCurrentTime", "vtp_dataLayerVersion": 1 }, { "function": "__v", "vtp_name": "gtm.videoDuration", "vtp_dataLayerVersion": 1 }, { "function": "__v", "vtp_name": "gtm.videoPercent", "vtp_dataLayerVersion": 1 }, { "function": "__v", "vtp_name": "gtm.videoVisible", "vtp_dataLayerVersion": 1 }, { "function": "__v", "vtp_name": "gtm.historyChangeSource", "vtp_dataLayerVersion": 1 }, { "function": "__v", "vtp_name": "gtm.oldUrl", "vtp_dataLayerVersion": 1 }, { "function": "__v", "vtp_name": "gtm.newUrl", "vtp_dataLayerVersion": 1 }],
            "tags": [{ "function": "__gct", "vtp_trackingId": "G-DQ3SMER6QR", "vtp_sessionDuration": 0, "vtp_googleSignals": ["macro", 1], "vtp_foreignTld": ["macro", 2], "vtp_restrictDomain": ["macro", 3], "vtp_eventSettings": ["map", "purchase", ["map", "blacklisted", false, "conversion", true]], "tag_id": 7 }, { "function": "__get", "vtp_eventName": "click", "vtp_settings": ["map", "streamId", "G-DQ3SMER6QR", "eventParameters", ["map", "link_id", ["macro", 6], "link_classes", ["macro", 7], "link_url", ["macro", 8], "link_domain", ["macro", 9], "outbound", true]], "vtp_deferrable": false, "tag_id": 17 }, { "function": "__get", "vtp_eventName": ["template", "video_", ["macro", 10]], "vtp_settings": ["map", "streamId", "G-DQ3SMER6QR", "eventParameters", ["map", "video_url", ["macro", 11], "video_title", ["macro", 12], "video_provider", ["macro", 13], "video_current_time", ["macro", 14], "video_duration", ["macro", 15], "video_percent", ["macro", 16], "visible", ["macro", 17]]], "vtp_deferrable": false, "tag_id": 20 }, { "function": "__get", "vtp_eventName": "page_view", "vtp_settings": ["map", "streamId", "G-DQ3SMER6QR", "eventParameters", ["map", "page_referrer", ["macro", 19]]], "vtp_deferrable": false, "tag_id": 23 }, { "function": "__dlm", "vtp_userInput": ["list", ["map", "key", "gtm.gtagReferrer.G-DQ3SMER6QR", "value", ["macro", 19]]], "tag_id": 24 }, { "function": "__ogt_event_create", "original_activity_id": 2, "vtp_eventName": "ReelModal", "vtp_isCopy": true, "vtp_precompiledRule": ["map", "new_event_name", "ReelModal", "merge_source_event_params", true, "event_name_predicate", ["map", "values", ["list", ["map", "type", "event_name"],
                    ["map", "type", "const", "const_value", "ReelModal"]
                ], "type", "eq"], "conditions", ["list", ["map", "predicates", ["list"]]]], "tag_id": 27 }, { "function": "__lcl", "vtp_waitForTags": false, "vtp_checkValidation": true, "vtp_uniqueTriggerId": "1_15", "tag_id": 28 }, { "function": "__ytl", "vtp_captureStart": true, "vtp_captureComplete": true, "vtp_captureProgress": true, "vtp_progressThresholdsPercent": "10,25,50,75", "vtp_triggerStartOption": "DOM_READY", "vtp_uniqueTriggerId": "1_18", "vtp_enableTriggerStartOption": true, "tag_id": 29 }, { "function": "__ehl", "vtp_groupEvents": true, "vtp_groupEventsInterval": 1000, "vtp_uniqueTriggerId": "1_21", "tag_id": 30 }],
            "predicates": [{ "function": "_eq", "arg0": ["macro", 0], "arg1": "gtm.js" }, { "function": "_eq", "arg0": ["macro", 4], "arg1": true }, { "function": "_eq", "arg0": ["macro", 0], "arg1": "gtm.linkClick" }, { "function": "_re", "arg0": ["macro", 5], "arg1": "(^$|((^|,)1_15($|,)))" }, { "function": "_eq", "arg0": ["macro", 0], "arg1": "gtm.video" }, { "function": "_re", "arg0": ["macro", 5], "arg1": "(^$|((^|,)1_18($|,)))" }, { "function": "_eq", "arg0": ["macro", 18], "arg1": ["list", "pushState", "popstate", "replaceState"], "any_of": true }, { "function": "_eq", "arg0": ["macro", 19], "arg1": ["macro", 20] }, { "function": "_eq", "arg0": ["macro", 0], "arg1": "gtm.historyChange-v2" }, { "function": "_re", "arg0": ["macro", 5], "arg1": "(^$|((^|,)1_21($|,)))" }, { "function": "_eq", "arg0": ["macro", 0], "arg1": "gtm.init" }, { "function": "_eq", "arg0": ["macro", 0], "arg1": "gtm.dom" }],
            "rules": [
                [
                    ["if", 0],
                    ["add", 0, 6, 8]
                ],
                [
                    ["if", 1, 2, 3],
                    ["add", 1]
                ],
                [
                    ["if", 4, 5],
                    ["add", 2]
                ],
                [
                    ["if", 6, 8, 9],
                    ["unless", 7],
                    ["add", 3, 4]
                ],
                [
                    ["if", 10],
                    ["add", 5]
                ],
                [
                    ["if", 11],
                    ["add", 7]
                ]
            ]
        },
        "runtime": [
            [50, "__ogt_event_create", [46, "a"],
                [52, "b", ["require", "internal.appendRemoteConfigParameter"]],
                [52, "c", ["require", "getContainerVersion"]],
                [52, "d", [17, ["c"], "containerId"]],
                ["b", [15, "d"], "dynamic_event_settings.synthesis_rules", [17, [15, "a"], "precompiledRule"]],
                [2, [15, "a"], "gtmOnSuccess", [7]]
            ]
        ],
        "permissions": { "__ogt_event_create": { "read_container_data": {} } }

        ,
        "security_groups": {
            "google": ["__ogt_event_create"]
        }

    };


    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var aa, ba = function(a) { var b = 0; return function() { return b < a.length ? { done: !1, value: a[b++] } : { done: !0 } } },
        da = function(a) { var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator]; return b ? b.call(a) : { next: ba(a) } },
        ea = "function" == typeof Object.create ? Object.create : function(a) { var b = function() {};
            b.prototype = a; return new b },
        ha;
    if ("function" == typeof Object.setPrototypeOf) ha = Object.setPrototypeOf;
    else { var ja;
        a: { var ka = { a: !0 },
                la = {}; try { la.__proto__ = ka;
                ja = la.a; break a } catch (a) {}
            ja = !1 }
        ha = ja ? function(a, b) { a.__proto__ = b; if (a.__proto__ !== b) throw new TypeError(a + " is not extensible"); return a } : null }
    var na = ha,
        oa = function(a, b) { a.prototype = ea(b.prototype);
            a.prototype.constructor = a; if (na) na(a, b);
            else
                for (var c in b)
                    if ("prototype" != c)
                        if (Object.defineProperties) { var d = Object.getOwnPropertyDescriptor(b, c);
                            d && Object.defineProperty(a, c, d) } else a[c] = b[c];
            a.Nj = b.prototype },
        pa = this || self,
        qa = function(a) { return a };
    var ra = function(a, b) { this.g = a;
        this.s = b };
    var sa = function(a) { return "number" === typeof a && 0 <= a && isFinite(a) && 0 === a % 1 || "string" === typeof a && "-" !== a[0] && a === "" + parseInt(a, 10) },
        ua = function() { this.F = {};
            this.B = !1;
            this.H = {} },
        va = function(a, b) { var c = [],
                d; for (d in a.F)
                if (a.F.hasOwnProperty(d)) switch (d = d.substr(5), b) {
                    case 1:
                        c.push(d); break;
                    case 2:
                        c.push(a.get(d)); break;
                    case 3:
                        c.push([d, a.get(d)]) }
                return c };
    ua.prototype.get = function(a) { return this.F["dust." + a] };
    ua.prototype.set = function(a, b) { this.B || (a = "dust." + a, this.H.hasOwnProperty(a) || (this.F[a] = b)) };
    ua.prototype.has = function(a) { return this.F.hasOwnProperty("dust." + a) };
    var wa = function(a, b) { b = "dust." + b;
        a.B || a.H.hasOwnProperty(b) || delete a.F[b] };
    ua.prototype.tb = function() { this.B = !0 };
    var k = function(a) { this.s = new ua;
        this.g = [];
        this.B = !1;
        a = a || []; for (var b in a) a.hasOwnProperty(b) && (sa(b) ? this.g[Number(b)] = a[Number(b)] : this.s.set(b, a[b])) };
    aa = k.prototype;
    aa.toString = function(a) { if (a && 0 <= a.indexOf(this)) return ""; for (var b = [], c = 0; c < this.g.length; c++) { var d = this.g[c];
            null === d || void 0 === d ? b.push("") : d instanceof k ? (a = a || [], a.push(this), b.push(d.toString(a)), a.pop()) : b.push(d.toString()) } return b.join(",") };
    aa.set = function(a, b) { if (!this.B)
            if ("length" === a) { if (!sa(b)) throw Error("RangeError: Length property must be a valid integer.");
                this.g.length = Number(b) } else sa(a) ? this.g[Number(a)] = b : this.s.set(a, b) };
    aa.get = function(a) { return "length" === a ? this.length() : sa(a) ? this.g[Number(a)] : this.s.get(a) };
    aa.length = function() { return this.g.length };
    aa.sb = function() { for (var a = va(this.s, 1), b = 0; b < this.g.length; b++) a.push(b + ""); return new k(a) };
    var xa = function(a, b) { sa(b) ? delete a.g[Number(b)] : wa(a.s, b) };
    aa = k.prototype;
    aa.pop = function() { return this.g.pop() };
    aa.push = function(a) { return this.g.push.apply(this.g, Array.prototype.slice.call(arguments)) };
    aa.shift = function() { return this.g.shift() };
    aa.splice = function(a, b, c) { return new k(this.g.splice.apply(this.g, arguments)) };
    aa.unshift = function(a) { return this.g.unshift.apply(this.g, Array.prototype.slice.call(arguments)) };
    aa.has = function(a) { return sa(a) && this.g.hasOwnProperty(a) || this.s.has(a) };
    aa.tb = function() { this.B = !0;
        Object.freeze(this.g);
        this.s.tb() };
    var ya = function() {
        function a(f, g) { if (b[f]) { if (b[f].vd + g > b[f].max) throw Error("Quota exceeded");
                b[f].vd += g } } var b = {},
            c = void 0,
            d = void 0,
            e = { bj: function(f) { c = f }, sg: function() { c && a(c, 1) }, dj: function(f) { d = f }, ub: function(f) { d && a(d, f) }, sj: function(f, g) { b[f] = b[f] || { vd: 0 };
                    b[f].max = g }, Ji: function(f) { return b[f] && b[f].vd || 0 }, reset: function() { b = {} }, xi: a };
        e.onFnConsume = e.bj;
        e.consumeFn = e.sg;
        e.onStorageConsume = e.dj;
        e.consumeStorage = e.ub;
        e.setMax = e.sj;
        e.getConsumed = e.Ji;
        e.reset = e.reset;
        e.consume = e.xi; return e };
    var za = function(a, b) { this.B = a;
        this.P = function(c, d, e) { return c.apply(d, e) };
        this.F = b;
        this.s = new ua;
        this.g = this.H = void 0 };
    za.prototype.add = function(a, b) { Ba(this, a, b, !1) };
    var Ba = function(a, b, c, d) { if (!a.s.B)
            if (a.B.ub(("string" === typeof b ? b.length : 1) + ("string" === typeof c ? c.length : 1)), d) { var e = a.s;
                e.set(b, c);
                e.H["dust." + b] = !0 } else a.s.set(b, c) };
    za.prototype.set = function(a, b) { this.s.B || (!this.s.has(a) && this.F && this.F.has(a) ? this.F.set(a, b) : (this.B.ub(("string" === typeof a ? a.length : 1) + ("string" === typeof b ? b.length : 1)), this.s.set(a, b))) };
    za.prototype.get = function(a) { return this.s.has(a) ? this.s.get(a) : this.F ? this.F.get(a) : void 0 };
    za.prototype.has = function(a) { return !!this.s.has(a) || !(!this.F || !this.F.has(a)) };
    var Ca = function(a) { var b = new za(a.B, a);
        a.H && (b.H = a.H);
        b.P = a.P;
        b.g = a.g; return b };
    var Ea = {},
        Fa = function(a, b) { Ea[a] = Ea[a] || [];
            Ea[a][b] = !0 },
        Ga = function(a) { for (var b = [], c = Ea[a] || [], d = 0; d < c.length; d++) c[d] && (b[Math.floor(d / 6)] ^= 1 << d % 6); for (var e = 0; e < b.length; e++) b[e] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e] || 0); return b.join("") };
    var Ha = function() {},
        Ia = function(a) { return "function" == typeof a },
        n = function(a) { return "string" == typeof a },
        Ja = function(a) { return "number" == typeof a && !isNaN(a) },
        La = function(a) { var b = "[object Array]" == Object.prototype.toString.call(Object(a));
            Array.isArray ? Array.isArray(a) !== b && Fa("TAGGING", 4) : Fa("TAGGING", 5); return b },
        Na = function(a, b) { if (Array.prototype.indexOf) { var c = a.indexOf(b); return "number" == typeof c ? c : -1 } for (var d = 0; d < a.length; d++)
                if (a[d] === b) return d;
            return -1 },
        Oa = function(a, b) {
            if (a && La(a))
                for (var c =
                        0; c < a.length; c++)
                    if (a[c] && b(a[c])) return a[c]
        },
        Ra = function(a, b) { if (!Ja(a) || !Ja(b) || a > b) a = 0, b = 2147483647; return Math.floor(Math.random() * (b - a + 1) + a) },
        Ua = function(a, b) { for (var c = new Sa, d = 0; d < a.length; d++) c.set(a[d], !0); for (var e = 0; e < b.length; e++)
                if (c.get(b[e])) return !0;
            return !1 },
        Wa = function(a, b) { for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c]) },
        Ya = function(a) { return !!a && ("[object Arguments]" == Object.prototype.toString.call(a) || Object.prototype.hasOwnProperty.call(a, "callee")) },
        Za =
        function(a) { return Math.round(Number(a)) || 0 },
        $a = function(a) { return "false" == String(a).toLowerCase() ? !1 : !!a },
        ab = function(a) { var b = []; if (La(a))
                for (var c = 0; c < a.length; c++) b.push(String(a[c])); return b },
        bb = function(a) { return a ? a.replace(/^\s+|\s+$/g, "") : "" },
        cb = function() { return new Date(Date.now()) },
        db = function() { return cb().getTime() },
        Sa = function() { this.prefix = "gtm.";
            this.values = {} };
    Sa.prototype.set = function(a, b) { this.values[this.prefix + a] = b };
    Sa.prototype.get = function(a) { return this.values[this.prefix + a] };
    var eb = function(a, b, c) { return a && a.hasOwnProperty(b) ? a[b] : c },
        fb = function(a) { var b = a; return function() { if (b) { var c = b;
                    b = void 0; try { c() } catch (d) {} } } },
        gb = function(a, b) { for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]) },
        hb = function(a) { for (var b in a)
                if (a.hasOwnProperty(b)) return !0;
            return !1 },
        ib = function(a, b) { for (var c = [], d = 0; d < a.length; d++) c.push(a[d]), c.push.apply(c, b[a[d]] || []); return c },
        jb = function(a, b) {
            var c = z;
            b = b || [];
            for (var d = c, e = 0; e < a.length - 1; e++) {
                if (!d.hasOwnProperty(a[e])) return;
                d = d[a[e]];
                if (0 <=
                    Na(b, d)) return
            }
            return d
        },
        kb = function(a, b) { for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++) d = d[e[f]] = {};
            d[e[e.length - 1]] = b; return c },
        lb = /^\w{1,9}$/,
        mb = function(a, b) { b = b || ","; var c = [];
            Wa(a, function(d, e) { lb.test(d) && e && c.push(d) }); return c.join(b) };
    var nb = function(a, b) { ua.call(this);
        this.P = a;
        this.Fa = b };
    oa(nb, ua);
    nb.prototype.toString = function() { return this.P };
    nb.prototype.sb = function() { return new k(va(this, 1)) };
    nb.prototype.g = function(a, b) { a.B.sg(); return this.Fa.apply(new ob(this, a), Array.prototype.slice.call(arguments, 1)) };
    nb.prototype.s = function(a, b) { try { return this.g.apply(this, Array.prototype.slice.call(arguments, 0)) } catch (c) {} };
    var qb = function(a, b) { for (var c, d = 0; d < b.length && !(c = pb(a, b[d]), c instanceof ra); d++); return c },
        pb = function(a, b) { try { var c = a.get(String(b[0])); if (!(c && c instanceof nb)) throw Error("Attempting to execute non-function " + b[0] + "."); return c.g.apply(c, [a].concat(b.slice(1))) } catch (e) { var d = a.H;
                d && d(e, b.context ? { id: b[0], line: b.context.line } : null); throw e; } },
        ob = function(a, b) { this.s = a;
            this.g = b },
        G = function(a, b) { var c = a.g; return La(b) ? pb(c, b) : b },
        H = function(a) { return a.s.P };
    var rb = function() { ua.call(this) };
    oa(rb, ua);
    rb.prototype.sb = function() { return new k(va(this, 1)) };
    var ub = {
        control: function(a, b) { return new ra(a, G(this, b)) },
        fn: function(a, b, c) {
            var d = this.g,
                e = G(this, b);
            if (!(e instanceof k)) throw Error("Error: non-List value given for Fn argument names.");
            var f = Array.prototype.slice.call(arguments, 2);
            this.g.B.ub(a.length + f.length);
            return new nb(a, function() {
                return function(g) {
                    var h = Ca(d);
                    void 0 === h.g && (h.g = this.g.g);
                    for (var l = Array.prototype.slice.call(arguments, 0), m = 0; m < l.length; m++)
                        if (l[m] = G(this, l[m]), l[m] instanceof ra) return l[m];
                    for (var p = e.get("length"), q =
                            0; q < p; q++) q < l.length ? h.add(e.get(q), l[q]) : h.add(e.get(q), void 0);
                    h.add("arguments", new k(l));
                    var r = qb(h, f);
                    if (r instanceof ra) return "return" === r.g ? r.s : r
                }
            }())
        },
        list: function(a) { var b = this.g.B;
            b.ub(arguments.length); for (var c = new k, d = 0; d < arguments.length; d++) { var e = G(this, arguments[d]); "string" === typeof e && b.ub(e.length ? e.length - 1 : 0);
                c.push(e) } return c },
        map: function(a) {
            for (var b = this.g.B, c = new rb, d = 0; d < arguments.length - 1; d += 2) {
                var e = G(this, arguments[d]) + "",
                    f = G(this, arguments[d + 1]),
                    g = e.length;
                g += "string" ===
                    typeof f ? f.length : 1;
                b.ub(g);
                c.set(e, f)
            }
            return c
        },
        undefined: function() {}
    };
    var vb = function() { this.B = ya();
            this.g = new za(this.B) },
        wb = function(a, b, c) { var d = new nb(b, c);
            d.tb();
            a.g.set(b, d) },
        xb = function(a, b, c) { ub.hasOwnProperty(b) && wb(a, c || b, ub[b]) };
    vb.prototype.Rb = function(a, b) { var c = Array.prototype.slice.call(arguments, 0); return this.s(c) };
    vb.prototype.s = function(a) { for (var b, c = 0; c < arguments.length; c++) b = pb(this.g, arguments[c]); return b };
    vb.prototype.F = function(a, b) { var c = Ca(this.g);
        c.g = a; for (var d, e = 1; e < arguments.length; e++) d = d = pb(c, arguments[e]); return d };
    var yb, Db = function() { if (void 0 === yb) { var a = null,
                b = pa.trustedTypes; if (b && b.createPolicy) { try { a = b.createPolicy("goog#html", { createHTML: qa, createScript: qa, createScriptURL: qa }) } catch (c) { pa.console && pa.console.error(c.message) }
                yb = a } else yb = a } return yb };
    var Fb = function(a, b) { this.g = b === Eb ? a : "" };
    Fb.prototype.toString = function() { return this.g + "" };
    var Eb = {},
        Gb = function(a) { var b = Db(),
                c = b ? b.createScriptURL(a) : a; return new Fb(c, Eb) };
    var Hb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
    var Ib;
    a: { var Jb = pa.navigator; if (Jb) { var Kb = Jb.userAgent; if (Kb) { Ib = Kb; break a } }
        Ib = "" }
    var Lb = function(a) { return -1 != Ib.indexOf(a) };
    var Mb = {},
        Nb = function(a, b, c) { this.g = c === Mb ? a : "" };
    Nb.prototype.toString = function() { return this.g.toString() };
    var Ob = function(a) { return a instanceof Nb && a.constructor === Nb ? a.g : "type_error:SafeHtml" },
        Pb = function(a) { var b = Db(),
                c = b ? b.createHTML(a) : a; return new Nb(c, null, Mb) },
        Qb = new Nb(pa.trustedTypes && pa.trustedTypes.emptyHTML || "", 0, Mb);
    var Rb = function(a, b) { a.src = b instanceof Fb && b.constructor === Fb ? b.g : "type_error:TrustedResourceUrl"; var c, d, e = (a.ownerDocument && a.ownerDocument.defaultView || window).document,
            f = null === (d = e.querySelector) || void 0 === d ? void 0 : d.call(e, "script[nonce]");
        (c = f ? f.nonce || f.getAttribute("nonce") || "" : "") && a.setAttribute("nonce", c) };
    var Sb = function(a, b) { var c = function() {};
            c.prototype = a.prototype; var d = new c;
            a.apply(d, Array.prototype.slice.call(arguments, 1)); return d },
        Tb = function(a) { var b = a; return function() { if (b) { var c = b;
                    b = null;
                    c() } } };
    var Ub = function(a) { var b = !1,
                c; return function() { b || (c = a(), b = !0); return c } }(function() { var a = document.createElement("div"),
                b = document.createElement("div");
            b.appendChild(document.createElement("div"));
            a.appendChild(b); var c = a.firstChild.firstChild;
            a.innerHTML = Ob(Qb); return !c.parentElement }),
        Yb = function(a, b) { if (Ub())
                for (; a.lastChild;) a.removeChild(a.lastChild);
            a.innerHTML = Ob(b) };
    var z = window,
        I = document,
        Zb = navigator,
        $b = I.currentScript && I.currentScript.src,
        ac = function(a, b) { var c = z[a];
            z[a] = void 0 === c ? b : c; return z[a] },
        bc = function(a) { var b = I.getElementsByTagName("script")[0] || I.body || I.head;
            b.parentNode.insertBefore(a, b) },
        cc = function(a, b) { b && (a.addEventListener ? a.onload = b : a.onreadystatechange = function() { a.readyState in { loaded: 1, complete: 1 } && (a.onreadystatechange = null, b()) }) },
        dc = { async: 1, nonce: 1, onerror: 1, onload: 1, src: 1, type: 1 },
        ec = function(a, b, c, d) {
            var e = I.createElement("script");
            d && Wa(d, function(f, g) { f = f.toLowerCase();
                dc.hasOwnProperty(f) || e.setAttribute(f, g) });
            e.type = "text/javascript";
            e.async = !0;
            Rb(e, Gb(a));
            cc(e, b);
            c && (e.onerror = c);
            bc(e);
            return e
        },
        fc = function() { if ($b) { var a = $b.toLowerCase(); if (0 === a.indexOf("https://")) return 2; if (0 === a.indexOf("http://")) return 3 } return 1 },
        gc = function(a, b) {
            var c = I.createElement("iframe");
            c.height = "0";
            c.width = "0";
            c.style.display = "none";
            c.style.visibility = "hidden";
            var d = I.body && I.body.lastChild || I.body || I.head;
            d.parentNode.insertBefore(c,
                d);
            cc(c, b);
            void 0 !== a && (c.src = a);
            return c
        },
        hc = function(a, b, c) { var d = new Image(1, 1);
            d.onload = function() { d.onload = null;
                b && b() };
            d.onerror = function() { d.onerror = null;
                c && c() };
            d.src = a; return d },
        ic = function(a, b, c, d) { a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c) },
        jc = function(a, b, c) { a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c) },
        J = function(a) { z.setTimeout(a, 0) },
        kc = function(a, b) {
            return a && b && a.attributes && a.attributes[b] ? a.attributes[b].value :
                null
        },
        lc = function(a) { var b = a.innerText || a.textContent || "";
            b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
            b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " ")); return b },
        qc = function(a) { var b = I.createElement("div"),
                c = Pb("A<div>" + a + "</div>");
            Yb(b, c);
            b = b.lastChild; for (var d = []; b.firstChild;) d.push(b.removeChild(b.firstChild)); return d },
        rc = function(a, b, c) { c = c || 100; for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0; for (var f = a, g = 0; f && g <= c; g++) { if (d[String(f.tagName).toLowerCase()]) return f;
                f = f.parentElement } return null },
        sc = function(a) { Zb.sendBeacon && Zb.sendBeacon(a) || hc(a) },
        tc = function(a, b) { var c = a[b];
            c && "string" === typeof c.animVal && (c = c.animVal); return c },
        uc = function(a) { var b = I.featurePolicy; return b && Ia(b.features) ? -1 !== b.features().indexOf(a) : !1 };
    var vc = function(a, b) { return G(this, a) && G(this, b) },
        wc = function(a, b) { return G(this, a) === G(this, b) },
        xc = function(a, b) { return G(this, a) || G(this, b) },
        yc = function(a, b) { a = G(this, a);
            b = G(this, b); return -1 < String(a).indexOf(String(b)) },
        zc = function(a, b) { a = String(G(this, a));
            b = String(G(this, b)); return a.substring(0, b.length) === b },
        Ac = function(a, b) { a = G(this, a);
            b = G(this, b); switch (a) {
                case "pageLocation":
                    var c = z.location.href;
                    b instanceof rb && b.get("stripProtocol") && (c = c.replace(/^https?:\/\//, "")); return c } };
    var Cc = function() { this.g = new vb;
        Bc(this) };
    Cc.prototype.Rb = function(a) { return this.g.s(a) };
    var Bc = function(a) { xb(a.g, "map"); var b = function(c, d) { wb(a.g, c, d) };
        b("and", vc);
        b("contains", yc);
        b("equals", wc);
        b("or", xc);
        b("startsWith", zc);
        b("variable", Ac) };
    var Ec = function(a) { if (a instanceof Ec) return a;
        this.Ta = a };
    Ec.prototype.toString = function() { return String(this.Ta) };
    /*
     jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
    var Fc = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
        Gc = function(a) { if (null == a) return String(a); var b = Fc.exec(Object.prototype.toString.call(Object(a))); return b ? b[1].toLowerCase() : "object" },
        Hc = function(a, b) { return Object.prototype.hasOwnProperty.call(Object(a), b) },
        Ic = function(a) {
            if (!a || "object" != Gc(a) || a.nodeType || a == a.window) return !1;
            try { if (a.constructor && !Hc(a, "constructor") && !Hc(a.constructor.prototype, "isPrototypeOf")) return !1 } catch (c) { return !1 }
            for (var b in a);
            return void 0 ===
                b || Hc(a, b)
        },
        N = function(a, b) { var c = b || ("array" == Gc(a) ? [] : {}),
                d; for (d in a)
                if (Hc(a, d)) { var e = a[d]; "array" == Gc(e) ? ("array" != Gc(c[d]) && (c[d] = []), c[d] = N(e, c[d])) : Ic(e) ? (Ic(c[d]) || (c[d] = {}), c[d] = N(e, c[d])) : c[d] = e }
            return c };
    var Kc = function(a, b, c) {
            var d = [],
                e = [],
                f = function(h, l) { for (var m = va(h, 1), p = 0; p < m.length; p++) l[m[p]] = g(h.get(m[p])) },
                g = function(h) {
                    var l = Na(d, h);
                    if (-1 < l) return e[l];
                    if (h instanceof k) { var m = [];
                        d.push(h);
                        e.push(m); for (var p = h.sb(), q = 0; q < p.length(); q++) m[p.get(q)] = g(h.get(p.get(q))); return m }
                    if (h instanceof rb) { var r = {};
                        d.push(h);
                        e.push(r);
                        f(h, r); return r }
                    if (h instanceof nb) {
                        var u = function() {
                            for (var t = Array.prototype.slice.call(arguments, 0), v = 0; v < t.length; v++) t[v] = Jc(t[v], b, !!c);
                            var w = b ? b.B : ya(),
                                y = new za(w);
                            b && (y.g = b.g);
                            return g(h.g.apply(h, [y].concat(t)))
                        };
                        d.push(h);
                        e.push(u);
                        f(h, u);
                        return u
                    }
                    switch (typeof h) {
                        case "boolean":
                        case "number":
                        case "string":
                        case "undefined":
                            return h;
                        case "object":
                            if (null === h) return null }
                };
            return g(a)
        },
        Jc = function(a, b, c) {
            var d = [],
                e = [],
                f = function(h, l) { for (var m in h) h.hasOwnProperty(m) && l.set(m, g(h[m])) },
                g = function(h) {
                    var l = Na(d,
                        h);
                    if (-1 < l) return e[l];
                    if (La(h) || Ya(h)) { var m = new k([]);
                        d.push(h);
                        e.push(m); for (var p in h) h.hasOwnProperty(p) && m.set(p, g(h[p])); return m }
                    if (Ic(h)) { var q = new rb;
                        d.push(h);
                        e.push(q);
                        f(h, q); return q }
                    if ("function" === typeof h) { var r = new nb("", function(t) { for (var v = Array.prototype.slice.call(arguments, 0), w = 0; w < v.length; w++) v[w] = Kc(G(this, v[w]), b, !!c); return g((0, this.g.P)(h, h, v)) });
                        d.push(h);
                        e.push(r);
                        f(h, r); return r }
                    var u = typeof h;
                    if (null === h || "string" === u || "number" === u || "boolean" === u) return h;
                };
            return g(a)
        };
    var Lc = function(a) { for (var b = [], c = 0; c < a.length(); c++) a.has(c) && (b[c] = a.get(c)); return b },
        Mc = function(a) { if (void 0 === a || La(a) || Ic(a)) return !0; switch (typeof a) {
                case "boolean":
                case "number":
                case "string":
                case "function":
                    return !0 } return !1 };
    var Nc = {
        supportedMethods: "concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),
        concat: function(a, b) { for (var c = [], d = 0; d < this.length(); d++) c.push(this.get(d)); for (var e = 1; e < arguments.length; e++)
                if (arguments[e] instanceof k)
                    for (var f = arguments[e], g = 0; g < f.length(); g++) c.push(f.get(g));
                else c.push(arguments[e]);
            return new k(c) },
        every: function(a, b) {
            for (var c = this.length(), d = 0; d < this.length() &&
                d < c; d++)
                if (this.has(d) && !b.g(a, this.get(d), d, this)) return !1;
            return !0
        },
        filter: function(a, b) { for (var c = this.length(), d = [], e = 0; e < this.length() && e < c; e++) this.has(e) && b.g(a, this.get(e), e, this) && d.push(this.get(e)); return new k(d) },
        forEach: function(a, b) { for (var c = this.length(), d = 0; d < this.length() && d < c; d++) this.has(d) && b.g(a, this.get(d), d, this) },
        hasOwnProperty: function(a, b) { return this.has(b) },
        indexOf: function(a, b, c) {
            var d = this.length(),
                e = void 0 === c ? 0 : Number(c);
            0 > e && (e = Math.max(d + e, 0));
            for (var f = e; f < d; f++)
                if (this.has(f) &&
                    this.get(f) === b) return f;
            return -1
        },
        join: function(a, b) { for (var c = [], d = 0; d < this.length(); d++) c.push(this.get(d)); return c.join(b) },
        lastIndexOf: function(a, b, c) { var d = this.length(),
                e = d - 1;
            void 0 !== c && (e = 0 > c ? d + c : Math.min(c, e)); for (var f = e; 0 <= f; f--)
                if (this.has(f) && this.get(f) === b) return f;
            return -1 },
        map: function(a, b) { for (var c = this.length(), d = [], e = 0; e < this.length() && e < c; e++) this.has(e) && (d[e] = b.g(a, this.get(e), e, this)); return new k(d) },
        pop: function() { return this.pop() },
        push: function(a, b) {
            return this.push.apply(this,
                Array.prototype.slice.call(arguments, 1))
        },
        reduce: function(a, b, c) { var d = this.length(),
                e, f = 0; if (void 0 !== c) e = c;
            else { if (0 === d) throw Error("TypeError: Reduce on List with no elements."); for (var g = 0; g < d; g++)
                    if (this.has(g)) { e = this.get(g);
                        f = g + 1; break }
                if (g === d) throw Error("TypeError: Reduce on List with no elements."); } for (var h = f; h < d; h++) this.has(h) && (e = b.g(a, e, this.get(h), h, this)); return e },
        reduceRight: function(a, b, c) {
            var d = this.length(),
                e, f = d - 1;
            if (void 0 !== c) e = c;
            else {
                if (0 === d) throw Error("TypeError: ReduceRight on List with no elements.");
                for (var g = 1; g <= d; g++)
                    if (this.has(d - g)) { e = this.get(d - g);
                        f = d - (g + 1); break }
                if (g > d) throw Error("TypeError: ReduceRight on List with no elements.");
            }
            for (var h = f; 0 <= h; h--) this.has(h) && (e = b.g(a, e, this.get(h), h, this));
            return e
        },
        reverse: function() { for (var a = Lc(this), b = a.length - 1, c = 0; 0 <= b; b--, c++) a.hasOwnProperty(b) ? this.set(c, a[b]) : xa(this, c); return this },
        shift: function() { return this.shift() },
        slice: function(a, b, c) {
            var d = this.length();
            void 0 === b && (b = 0);
            b = 0 > b ? Math.max(d + b, 0) : Math.min(b, d);
            c = void 0 === c ? d : 0 > c ?
                Math.max(d + c, 0) : Math.min(c, d);
            c = Math.max(b, c);
            for (var e = [], f = b; f < c; f++) e.push(this.get(f));
            return new k(e)
        },
        some: function(a, b) { for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
                if (this.has(d) && b.g(a, this.get(d), d, this)) return !0;
            return !1 },
        sort: function(a, b) { var c = Lc(this);
            void 0 === b ? c.sort() : c.sort(function(e, f) { return Number(b.g(a, e, f)) }); for (var d = 0; d < c.length; d++) c.hasOwnProperty(d) ? this.set(d, c[d]) : xa(this, d) },
        splice: function(a, b, c, d) {
            return this.splice.apply(this, Array.prototype.splice.call(arguments,
                1, arguments.length - 1))
        },
        toString: function() { return this.toString() },
        unshift: function(a, b) { return this.unshift.apply(this, Array.prototype.slice.call(arguments, 1)) }
    };
    var Oc = "charAt concat indexOf lastIndexOf match replace search slice split substring toLowerCase toLocaleLowerCase toString toUpperCase toLocaleUpperCase trim".split(" "),
        Pc = new ra("break"),
        Qc = new ra("continue"),
        Rc = function(a, b) { return G(this, a) + G(this, b) },
        Yc = function(a, b) { return G(this, a) && G(this, b) },
        Zc = function(a, b, c) {
            a = G(this, a);
            b = G(this, b);
            c = G(this, c);
            if (!(c instanceof k)) throw Error("Error: Non-List argument given to Apply instruction.");
            if (null === a || void 0 === a) throw Error("TypeError: Can't read property " +
                b + " of " + a + ".");
            if ("boolean" === typeof a || "number" === typeof a) { if ("toString" === b) return a.toString(); throw Error("TypeError: " + a + "." + b + " is not a function."); }
            if ("string" === typeof a) { if (0 <= Na(Oc, b)) { var d = Kc(c); return Jc(a[b].apply(a, d), this.g) } throw Error("TypeError: " + b + " is not a function"); }
            if (a instanceof k) {
                if (a.has(b)) { var e = a.get(b); if (e instanceof nb) { var f = Lc(c);
                        f.unshift(this.g); return e.g.apply(e, f) } throw Error("TypeError: " + b + " is not a function"); }
                if (0 <= Na(Nc.supportedMethods, b)) {
                    var g =
                        Lc(c);
                    g.unshift(this.g);
                    return Nc[b].apply(a, g)
                }
            }
            if (a instanceof nb || a instanceof rb) { if (a.has(b)) { var h = a.get(b); if (h instanceof nb) { var l = Lc(c);
                        l.unshift(this.g); return h.g.apply(h, l) } throw Error("TypeError: " + b + " is not a function"); } if ("toString" === b) return a instanceof nb ? a.P : a.toString(); if ("hasOwnProperty" === b) return a.has.apply(a, Lc(c)) }
            if (a instanceof Ec && "toString" === b) return a.toString();
            throw Error("TypeError: Object has no '" + b + "' property.");
        },
        $c = function(a, b) {
            a = G(this, a);
            if ("string" !==
                typeof a) throw Error("Invalid key name given for assignment.");
            var c = this.g;
            if (!c.has(a)) throw Error("Attempting to assign to undefined value " + b);
            var d = G(this, b);
            c.set(a, d);
            return d
        },
        ad = function(a) { var b = Ca(this.g),
                c = qb(b, Array.prototype.slice.apply(arguments)); if (c instanceof ra) return c },
        bd = function() { return Pc },
        cd = function(a) { for (var b = G(this, a), c = 0; c < b.length; c++) { var d = G(this, b[c]); if (d instanceof ra) return d } },
        dd = function(a) {
            for (var b = this.g, c = 0; c < arguments.length - 1; c += 2) {
                var d = arguments[c];
                if ("string" === typeof d) { var e = G(this, arguments[c + 1]);
                    Ba(b, d, e, !0) }
            }
        },
        ed = function() { return Qc },
        fd = function(a, b, c) { var d = new k;
            b = G(this, b); for (var e = 0; e < b.length; e++) d.push(b[e]); var f = [51, a, d].concat(Array.prototype.splice.call(arguments, 2, arguments.length - 2));
            this.g.add(a, G(this, f)) },
        gd = function(a, b) { return G(this, a) / G(this, b) },
        hd = function(a, b) { a = G(this, a);
            b = G(this, b); var c = a instanceof Ec,
                d = b instanceof Ec; return c || d ? c && d ? a.Ta == b.Ta : !1 : a == b },
        id = function(a) {
            for (var b, c = 0; c < arguments.length; c++) b =
                G(this, arguments[c]);
            return b
        };

    function jd(a, b, c, d) { for (var e = 0; e < b(); e++) { var f = a(c(e)),
                g = qb(f, d); if (g instanceof ra) { if ("break" === g.g) break; if ("return" === g.g) return g } } }

    function kd(a, b, c) { if ("string" === typeof b) return jd(a, function() { return b.length }, function(f) { return f }, c); if (b instanceof rb || b instanceof k || b instanceof nb) { var d = b.sb(),
                e = d.length(); return jd(a, function() { return e }, function(f) { return d.get(f) }, c) } }
    var ld = function(a, b, c) { a = G(this, a);
            b = G(this, b);
            c = G(this, c); var d = this.g; return kd(function(e) { d.set(a, e); return d }, b, c) },
        md = function(a, b, c) { a = G(this, a);
            b = G(this, b);
            c = G(this, c); var d = this.g; return kd(function(e) { var f = Ca(d);
                Ba(f, a, e, !0); return f }, b, c) },
        nd = function(a, b, c) { a = G(this, a);
            b = G(this, b);
            c = G(this, c); var d = this.g; return kd(function(e) { var f = Ca(d);
                f.add(a, e); return f }, b, c) },
        pd = function(a, b, c) { a = G(this, a);
            b = G(this, b);
            c = G(this, c); var d = this.g; return od(function(e) { d.set(a, e); return d }, b, c) },
        qd =
        function(a, b, c) { a = G(this, a);
            b = G(this, b);
            c = G(this, c); var d = this.g; return od(function(e) { var f = Ca(d);
                Ba(f, a, e, !0); return f }, b, c) },
        rd = function(a, b, c) { a = G(this, a);
            b = G(this, b);
            c = G(this, c); var d = this.g; return od(function(e) { var f = Ca(d);
                f.add(a, e); return f }, b, c) };

    function od(a, b, c) { if ("string" === typeof b) return jd(a, function() { return b.length }, function(d) { return b[d] }, c); if (b instanceof k) return jd(a, function() { return b.length() }, function(d) { return b.get(d) }, c); throw new TypeError("The value is not iterable."); }
    var sd = function(a, b, c, d) {
            function e(p, q) { for (var r = 0; r < f.length(); r++) { var u = f.get(r);
                    q.add(u, p.get(u)) } } var f = G(this, a); if (!(f instanceof k)) throw Error("TypeError: Non-List argument given to ForLet instruction."); var g = this.g;
            d = G(this, d); var h = Ca(g); for (e(g, h); pb(h, b);) { var l = qb(h, d); if (l instanceof ra) { if ("break" === l.g) break; if ("return" === l.g) return l } var m = Ca(g);
                e(h, m);
                pb(m, c);
                h = m } },
        td = function(a) { a = G(this, a); var b = this.g,
                c = !1; if (c && !b.has(a)) throw new ReferenceError(a + " is not defined."); return b.get(a) },
        ud = function(a, b) { var c;
            a = G(this, a);
            b = G(this, b); if (void 0 === a || null === a) throw Error("TypeError: cannot access property of " + a + "."); if (a instanceof rb || a instanceof k || a instanceof nb) c = a.get(b);
            else if ("string" === typeof a) "length" === b ? c = a.length : sa(b) && (c = a[b]);
            else if (a instanceof Ec) return; return c },
        vd = function(a, b) {
            return G(this, a) > G(this,
                b)
        },
        wd = function(a, b) { return G(this, a) >= G(this, b) },
        xd = function(a, b) { a = G(this, a);
            b = G(this, b);
            a instanceof Ec && (a = a.Ta);
            b instanceof Ec && (b = b.Ta); return a === b },
        yd = function(a, b) { return !xd.call(this, a, b) },
        Hd = function(a, b, c) { var d = [];
            G(this, a) ? d = G(this, b) : c && (d = G(this, c)); var e = qb(this.g, d); if (e instanceof ra) return e },
        Id = function(a, b) { return G(this, a) < G(this, b) },
        Jd = function(a, b) { return G(this, a) <= G(this, b) },
        Kd = function(a, b) { return G(this, a) % G(this, b) },
        Ld = function(a, b) { return G(this, a) * G(this, b) },
        Md = function(a) {
            return -G(this,
                a)
        },
        Nd = function(a) { return !G(this, a) },
        Od = function(a, b) { return !hd.call(this, a, b) },
        Pd = function() { return null },
        Qd = function(a, b) { return G(this, a) || G(this, b) },
        Rd = function(a, b) { var c = G(this, a);
            G(this, b); return c },
        Sd = function(a) { return G(this, a) },
        Td = function(a) { return Array.prototype.slice.apply(arguments) },
        Ud = function(a) { return new ra("return", G(this, a)) },
        Vd = function(a, b, c) {
            a = G(this, a);
            b = G(this, b);
            c = G(this, c);
            if (null === a || void 0 === a) throw Error("TypeError: Can't set property " + b + " of " + a + ".");
            (a instanceof nb || a instanceof k || a instanceof rb) && a.set(b, c);
            return c
        },
        Wd = function(a, b) { return G(this, a) - G(this, b) },
        Xd = function(a, b, c) {
            a = G(this, a);
            var d = G(this, b),
                e = G(this, c);
            if (!La(d) || !La(e)) throw Error("Error: Malformed switch instruction.");
            for (var f, g = !1, h = 0; h < d.length; h++)
                if (g || a === G(this, d[h]))
                    if (f = G(this, e[h]), f instanceof ra) { var l = f.g; if ("break" === l) return; if ("return" === l || "continue" === l) return f } else g = !0;
            if (e.length === d.length + 1 && (f = G(this, e[e.length - 1]), f instanceof ra && ("return" === f.g || "continue" ===
                    f.g))) return f
        },
        Yd = function(a, b, c) { return G(this, a) ? G(this, b) : G(this, c) },
        Zd = function(a) { a = G(this, a); return a instanceof nb ? "function" : typeof a },
        $d = function(a) { for (var b = this.g, c = 0; c < arguments.length; c++) { var d = arguments[c]; "string" !== typeof d || b.add(d, void 0) } },
        ae = function(a, b, c, d) {
            var e = G(this, d);
            if (G(this, c)) { var f = qb(this.g, e); if (f instanceof ra) { if ("break" === f.g) return; if ("return" === f.g) return f } }
            for (; G(this, a);) {
                var g = qb(this.g, e);
                if (g instanceof ra) { if ("break" === g.g) break; if ("return" === g.g) return g }
                G(this,
                    b)
            }
        },
        be = function(a) { return ~Number(G(this, a)) },
        ce = function(a, b) { return Number(G(this, a)) << Number(G(this, b)) },
        de = function(a, b) { return Number(G(this, a)) >> Number(G(this, b)) },
        ee = function(a, b) { return Number(G(this, a)) >>> Number(G(this, b)) },
        fe = function(a, b) { return Number(G(this, a)) & Number(G(this, b)) },
        ge = function(a, b) { return Number(G(this, a)) ^ Number(G(this, b)) },
        he = function(a, b) { return Number(G(this, a)) | Number(G(this, b)) };
    var je = function() { this.g = new vb;
        ie(this) };
    je.prototype.Rb = function(a) { return ke(this.g.s(a)) };
    var me = function(a, b) { return ke(le.g.F(a, b)) },
        ie = function(a) {
            var b = function(d, e) { xb(a.g, d, String(e)) };
            b("control", 49);
            b("fn", 51);
            b("list", 7);
            b("map", 8);
            b("undefined", 44);
            var c = function(d, e) { wb(a.g, String(d), e) };
            c(0, Rc);
            c(1, Yc);
            c(2, Zc);
            c(3, $c);
            c(53, ad);
            c(4, bd);
            c(5, cd);
            c(52, dd);
            c(6, ed);
            c(9, cd);
            c(50, fd);
            c(10, gd);
            c(12, hd);
            c(13, id);
            c(47, ld);
            c(54, md);
            c(55, nd);
            c(63, sd);
            c(64, pd);
            c(65, qd);
            c(66, rd);
            c(15, td);
            c(16, ud);
            c(17, ud);
            c(18, vd);
            c(19, wd);
            c(20, xd);
            c(21, yd);
            c(22, Hd);
            c(23, Id);
            c(24, Jd);
            c(25, Kd);
            c(26, Ld);
            c(27,
                Md);
            c(28, Nd);
            c(29, Od);
            c(45, Pd);
            c(30, Qd);
            c(32, Rd);
            c(33, Rd);
            c(34, Sd);
            c(35, Sd);
            c(46, Td);
            c(36, Ud);
            c(43, Vd);
            c(37, Wd);
            c(38, Xd);
            c(39, Yd);
            c(40, Zd);
            c(41, $d);
            c(42, ae);
            c(58, be);
            c(57, ce);
            c(60, de);
            c(61, ee);
            c(56, fe);
            c(62, ge);
            c(59, he)
        },
        ue = function() { var a = le,
                b = te();
            wb(a.g, "require", b) },
        ve = function(a, b) { a.g.g.P = b };

    function ke(a) { if (a instanceof ra || a instanceof nb || a instanceof k || a instanceof rb || a instanceof Ec || null === a || void 0 === a || "string" === typeof a || "number" === typeof a || "boolean" === typeof a) return a };
    var we = function() {
        var a = function(b) { return { toString: function() { return b } } };
        return {
            nh: a("consent"),
            Od: a("consent_always_fire"),
            wf: a("convert_case_to"),
            xf: a("convert_false_to"),
            yf: a("convert_null_to"),
            zf: a("convert_true_to"),
            Af: a("convert_undefined_to"),
            Aj: a("debug_mode_metadata"),
            rb: a("function"),
            $h: a("instance_name"),
            bi: a("live_only"),
            ci: a("malware_disabled"),
            di: a("metadata"),
            Dj: a("original_activity_id"),
            Ej: a("original_vendor_template_id"),
            fi: a("once_per_event"),
            $f: a("once_per_load"),
            Gj: a("priority_override"),
            Hj: a("respected_consent_types"),
            dg: a("setup_tags"),
            eg: a("tag_id"),
            fg: a("teardown_tags")
        }
    }();
    var Se;
    var Te = [],
        Ue = [],
        Ve = [],
        We = [],
        Xe = [],
        Ye = {},
        Ze, $e, af, bf = function(a, b) { var c = {};
            c["function"] = "__" + a; for (var d in b) b.hasOwnProperty(d) && (c["vtp_" + d] = b[d]); return c },
        cf = function(a, b) { var c = a["function"]; if (!c) throw Error("Error: No function name given for function call."); var d = Ye[c],
                e = {},
                f; for (f in a)
                if (a.hasOwnProperty(f))
                    if (0 === f.indexOf("vtp_")) d && b && b.qg && b.qg(a[f]), e[void 0 !== d ? f : f.substr(4)] = a[f];
                    else if (f === we.Od.toString() && a[f]) {}
            d && b && b.pg && (e.vtp_gtmCachedValues = b.pg); return void 0 !== d ? d(e) : Se(c, e, b) },
        ef = function(a, b, c) { c = c || []; var d = {},
                e; for (e in a) a.hasOwnProperty(e) && (d[e] = df(a[e], b, c)); return d },
        df = function(a, b, c) {
            if (La(a)) {
                var d;
                switch (a[0]) {
                    case "function_id":
                        return a[1];
                    case "list":
                        d = [];
                        for (var e = 1; e < a.length; e++) d.push(df(a[e], b, c));
                        return d;
                    case "macro":
                        var f =
                            a[1];
                        if (c[f]) return;
                        var g = Te[f];
                        if (!g || b.We(g)) return;
                        c[f] = !0;
                        try { var h = ef(g, b, c);
                            h.vtp_gtmEventId = b.id;
                            d = cf(h, b);
                            af && (d = af.yi(d, h)) } catch (y) { b.Mg && b.Mg(y, Number(f)), d = !1 }
                        c[f] = !1;
                        return d;
                    case "map":
                        d = {};
                        for (var l = 1; l < a.length; l += 2) d[df(a[l], b, c)] = df(a[l + 1], b, c);
                        return d;
                    case "template":
                        d = [];
                        for (var m = !1, p = 1; p < a.length; p++) { var q = df(a[p], b, c);
                            $e && (m = m || q === $e.ld);
                            d.push(q) }
                        return $e && m ? $e.Bi(d) : d.join("");
                    case "escape":
                        d = df(a[1], b, c);
                        if ($e && La(a[1]) && "macro" === a[1][0] && $e.Qi(a)) return $e.gj(d);
                        d =
                            String(d);
                        for (var r = 2; r < a.length; r++) xe[a[r]] && (d = xe[a[r]](d));
                        return d;
                    case "tag":
                        var u = a[1];
                        if (!We[u]) throw Error("Unable to resolve tag reference " + u + ".");
                        return d = { Bg: a[2], index: u };
                    case "zb":
                        var t = { arg0: a[2], arg1: a[3], ignore_case: a[5] };
                        t["function"] = a[1];
                        var v = ff(t, b, c),
                            w = !!a[4];
                        return w || 2 !== v ? w !== (1 === v) : null;
                    default:
                        throw Error("Attempting to expand unknown Value type: " + a[0] + ".");
                }
            }
            return a
        },
        ff = function(a, b, c) { try { return Ze(ef(a, b, c)) } catch (d) { JSON.stringify(a) } return 2 };
    var gf = function(a, b, c) { var d;
        d = Error.call(this);
        this.message = d.message; "stack" in d && (this.stack = d.stack);
        this.s = a;
        this.g = c };
    oa(gf, Error);

    function hf(a, b) { if (La(a)) { Object.defineProperty(a, "context", { value: { line: b[0] } }); for (var c = 1; c < a.length; c++) hf(a[c], b[c]) } };
    var jf = function(a, b) { var c;
        c = Error.call(this);
        this.message = c.message; "stack" in c && (this.stack = c.stack);
        this.B = a;
        this.s = b;
        this.g = [] };
    oa(jf, Error);
    var lf = function() { return function(a, b) { a instanceof jf || (a = new jf(a, kf));
            b && a.g.push(b); throw a; } };

    function kf(a) { if (!a.length) return a;
        a.push({ id: "main", line: 0 }); for (var b = a.length - 1; 0 < b; b--) Ja(a[b].id) && a.splice(b++, 1); for (var c = a.length - 1; 0 < c; c--) a[c].line = a[c - 1].line;
        a.splice(0, 1); return a };
    var of = function(a) {
            function b(r) { for (var u = 0; u < r.length; u++) d[r[u]] = !0 } for (var c = [], d = [], e = mf(a), f = 0; f < Ue.length; f++) { var g = Ue[f],
                    h = nf(g, e); if (h) { for (var l = g.add || [], m = 0; m < l.length; m++) c[l[m]] = !0;
                    b(g.block || []) } else null === h && b(g.block || []); } for (var p = [], q = 0; q < We.length; q++) c[q] && !d[q] && (p[q] = !0); return p },
        nf = function(a, b) {
            for (var c = a["if"] || [], d = 0; d < c.length; d++) { var e = b(c[d]); if (0 === e) return !1; if (2 === e) return null }
            for (var f =
                    a.unless || [], g = 0; g < f.length; g++) { var h = b(f[g]); if (2 === h) return null; if (1 === h) return !1 }
            return !0
        },
        mf = function(a) { var b = []; return function(c) { void 0 === b[c] && (b[c] = ff(Ve[c], a)); return b[c] } };
    var pf = { yi: function(a, b) { b[we.wf] && "string" === typeof a && (a = 1 == b[we.wf] ? a.toLowerCase() : a.toUpperCase());
            b.hasOwnProperty(we.yf) && null === a && (a = b[we.yf]);
            b.hasOwnProperty(we.Af) && void 0 === a && (a = b[we.Af]);
            b.hasOwnProperty(we.zf) && !0 === a && (a = b[we.zf]);
            b.hasOwnProperty(we.xf) && !1 === a && (a = b[we.xf]); return a } };
    var qf = function() { this.g = {} };

    function rf(a, b, c, d) { if (a)
            for (var e = 0; e < a.length; e++) { var f = void 0,
                    g = "A policy function denied the permission request"; try { f = a[e].call(void 0, b, c, d), g += "." } catch (h) { g = "string" === typeof h ? g + (": " + h) : h instanceof Error ? g + (": " + h.message) : g + "." } if (!f) throw new gf(c, d, g); } }

    function sf(a, b, c) { return function() { var d = arguments[0]; if (d) { var e = a.g[d],
                    f = a.g.all; if (e || f) { var g = c.apply(void 0, Array.prototype.slice.call(arguments, 0));
                    rf(e, b, d, g);
                    rf(f, b, d, g) } } } };
    var Ef = function(a) { var b = tf.N,
                c = this;
            this.s = new qf;
            this.g = {}; var d = {},
                e = sf(this.s, b, function() { var f = arguments[0]; return f && d[f] ? d[f].apply(void 0, Array.prototype.slice.call(arguments, 0)) : {} });
            Wa(a, function(f, g) { var h = {};
                Wa(g, function(l, m) { var p = Cf(l, m);
                    h[l] = p.assert;
                    d[l] || (d[l] = p.V) });
                c.g[f] = function(l, m) { var p = h[l]; if (!p) throw Df(l, {}, "The requested permission " + l + " is not configured."); var q = Array.prototype.slice.call(arguments, 0);
                    p.apply(void 0, q);
                    e.apply(void 0, q) } }) },
        Gf = function(a) {
            return Ff.g[a] ||
                function() {}
        };

    function Cf(a, b) { var c = bf(a, b);
        c.vtp_permissionName = a;
        c.vtp_createPermissionError = Df; try { return cf(c) } catch (d) { return { assert: function(e) { throw new gf(e, {}, "Permission " + e + " is unknown."); }, V: function() { for (var e = {}, f = 0; f < arguments.length; ++f) e["arg" + (f + 1)] = arguments[f]; return e } } } }

    function Df(a, b, c) { return new gf(a, b, c) };
    var Hf = !1;
    var If = {};
    If.zj = $a('');
    If.Ei = $a('');
    var Jf = Hf,
        Kf = If.Ei,
        Lf = If.zj;
    var Mf = function(a, b) { var c = String(a); return c };
    var Rf = function(a) { var b = {},
                c = 0;
            Wa(a, function(e, f) { if (void 0 !== f)
                    if (f = Mf(f, 100), Nf.hasOwnProperty(e)) b[Nf[e]] = Of(f);
                    else if (Pf.hasOwnProperty(e)) { var g = Pf[e],
                        h = Of(f);
                    b.hasOwnProperty(g) || (b[g] = h) } else if ("category" === e)
                    for (var l = Of(f).split("/", 5), m = 0; m < l.length; m++) { var p = Qf[m],
                            q = l[m];
                        b.hasOwnProperty(p) || (b[p] = q) } else 10 > c && (b["k" + c] = Of(Mf(e, 40)), b["v" + c] = Of(f), c++) }); var d = [];
            Wa(b, function(e, f) { d.push("" + e + f) }); return d.join("~") },
        Of = function(a) { return ("" + a).replace(/~/g, function() { return "~~" }) },
        Nf = { item_id: "id", item_name: "nm", item_brand: "br", item_category: "ca", item_category2: "c2", item_category3: "c3", item_category4: "c4", item_category5: "c5", item_variant: "va", price: "pr", quantity: "qt", coupon: "cp", item_list_name: "ln", index: "lp", item_list_id: "li", discount: "ds", affiliation: "af", promotion_id: "pi", promotion_name: "pn", creative_name: "cn", creative_slot: "cs", location_id: "lo" },
        Pf = { id: "id", name: "nm", brand: "br", variant: "va", list_name: "ln", list_position: "lp", list: "ln", position: "lp", creative: "cn" },
        Qf = ["ca",
            "c2", "c3", "c4", "c5"
        ];
    var Sf = function(a) { var b = [];
            Wa(a, function(c, d) { null != d && b.push(encodeURIComponent(c) + "=" + encodeURIComponent(String(d))) }); return b.join("&") },
        Tf = function(a, b, c, d) { this.Va = a.Va;
            this.yb = a.yb;
            this.K = a.K;
            this.s = b;
            this.F = c;
            this.B = Sf(a.Va);
            this.g = Sf(a.K);
            this.H = d ? this.g.length : 0; if (16384 < this.H) throw Error("EVENT_TOO_LARGE"); };
    var Uf = function() { this.events = [];
        this.g = this.Va = "";
        this.B = 0;
        this.s = !1 };
    Uf.prototype.add = function(a) { return this.F(a) ? (this.events.push(a), this.Va = a.B, this.g = a.s, this.B += a.H, this.s = a.F, !0) : !1 };
    Uf.prototype.F = function(a) { var b = 20 > this.events.length && 16384 > a.H + this.B,
            c = this.Va === a.B && this.g === a.s && this.s === a.F; return 0 == this.events.length || b && c };
    var Vf = function(a, b) { Wa(a, function(c, d) { null != d && b.push(encodeURIComponent(c) + "=" + encodeURIComponent(d)) }) },
        Wf = function(a, b) { var c = [];
            a.B && c.push(a.B);
            b && c.push("_s=" + b);
            Vf(a.yb, c); var d = !1;
            a.g && (c.push(a.g), d = !0); var e = c.join("&"),
                f = "",
                g = e.length + a.s.length + 1;
            d && 2048 < g && (f = c.pop(), e = c.join("&")); return { cf: e, body: f } },
        Xf = function(a, b) {
            var c = a.events;
            if (1 == c.length) return Wf(c[0], b);
            var d = [];
            a.Va && d.push(a.Va);
            for (var e = {}, f = 0; f < c.length; f++) Wa(c[f].yb, function(u, t) {
                null != t && (e[u] = e[u] || {}, e[u][String(t)] =
                    e[u][String(t)] + 1 || 1)
            });
            var g = {};
            Wa(e, function(u, t) { var v, w = -1,
                    y = 0;
                Wa(t, function(x, A) { y += A; var B = (x.length + u.length + 2) * (A - 1);
                    B > w && (v = x, w = B) });
                y == c.length && (g[u] = v) });
            Vf(g, d);
            b && d.push("_s=" + b);
            for (var h = d.join("&"), l = [], m = {}, p = 0; p < c.length; m = { Uc: m.Uc }, p++) { var q = [];
                m.Uc = {};
                Wa(c[p].yb, function(u) { return function(t, v) { g[t] != "" + v && (u.Uc[t] = v) } }(m));
                c[p].g && q.push(c[p].g);
                Vf(m.Uc, q);
                l.push(q.join("&")) }
            var r = l.join("\r\n");
            return { cf: h, body: r }
        };
    var fg = /^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|DustMap|List|OpaqueValue)$/i,
        gg = { Fn: "function", DustMap: "Object", List: "Array" },
        O = function(a, b, c) {
            for (var d = 0; d < b.length; d++) {
                var e = fg.exec(b[d]);
                if (!e) throw Error("Internal Error in " + a);
                var f = e[1],
                    g = "!" === e[2],
                    h = e[3],
                    l = c[d],
                    m = typeof l;
                if (null === l || "undefined" === m) { if (g) throw Error("Error in " + a + ". Required argument " + f + " not supplied."); } else if ("*" !== h) {
                    var p = typeof l;
                    l instanceof nb ? p = "Fn" : l instanceof k ? p = "List" : l instanceof rb ? p = "DustMap" :
                        l instanceof Ec && (p = "OpaqueValue");
                    if (p != h) throw Error("Error in " + a + ". Argument " + f + " has type " + p + ", which does not match required type " + (gg[h] || h) + ".");
                }
            }
        };

    function hg(a) { return "" + a }

    function ig(a, b) { var c = []; return c };
    var jg = function(a, b) { var c = new nb(a, function() { for (var d = Array.prototype.slice.call(arguments, 0), e = 0; e < d.length; e++) d[e] = G(this, d[e]); return b.apply(this, d) });
            c.tb(); return c },
        kg = function(a, b) { var c = new rb,
                d; for (d in b)
                if (b.hasOwnProperty(d)) { var e = b[d];
                    Ia(e) ? c.set(d, jg(a + "_" + d, e)) : (Ja(e) || n(e) || "boolean" == typeof e) && c.set(d, e) }
            c.tb(); return c };
    var lg = function(a, b) { O(H(this), ["apiName:!string", "message:?string"], arguments); var c = {},
            d = new rb; return d = kg("AssertApiSubject", c) };
    var mg = function(a, b) {
        O(H(this), ["actual:?*", "message:?string"], arguments);
        var c = {},
            d = new rb;
        return d = kg("AssertThatSubject", c)
    };

    function ng(a) { return function() { for (var b = [], c = this.g, d = 0; d < arguments.length; ++d) b.push(Kc(arguments[d], c)); return Jc(a.apply(null, b)) } }
    var pg = function() { for (var a = Math, b = og, c = {}, d = 0; d < b.length; d++) { var e = b[d];
            a.hasOwnProperty(e) && (c[e] = ng(a[e].bind(a))) } return c };
    var qg = function(a) { var b; return b };
    var rg = function(a) { var b; return b };
    var sg = function(a) { O(H(this), ["uri:!string"], arguments); return encodeURI(a) };
    var tg = function(a) { O(H(this), ["uri:!string"], arguments); return encodeURIComponent(a) };
    var ug = function(a) { O(H(this), ["message:?string"], arguments); };
    var vg = function(a, b) { O(H(this), ["min:!number", "max:!number"], arguments); return Ra(a, b) };
    var wg = function(a, b, c) { var d = a.g.g; if (!d) throw Error("Missing program state.");
        d.oi.apply(null, Array.prototype.slice.call(arguments, 1)) };
    var xg = function() { wg(this, "read_container_data"); var a = new rb;
        a.set("containerId", 'G-DQ3SMER6QR');
        a.set("version", '1');
        a.set("environmentName", '');
        a.set("debugMode", Jf);
        a.set("previewMode", Lf);
        a.set("environmentMode", Kf);
        a.tb(); return a };
    var yg = function() { return (new Date).getTime() };
    var zg = function(a) { if (null === a) return "null"; if (a instanceof k) return "array"; if (a instanceof nb) return "function"; if (a instanceof Ec) { a = a.Ta; if (void 0 === a.constructor || void 0 === a.constructor.name) { var b = String(a); return b.substring(8, b.length - 1) } return String(a.constructor.name) } return typeof a };
    var Ag = function(a) {
        function b(c) { return function(d) { try { return c(d) } catch (e) {
                    (Jf || Lf) && a.call(this, e.message) } } } return { parse: b(function(c) { return Jc(JSON.parse(c)) }), stringify: b(function(c) { return JSON.stringify(Kc(c)) }) } };
    var Bg = function(a) { return Za(Kc(a, this.g)) };
    var Cg = function(a) { return Number(Kc(a, this.g)) };
    var Dg = function(a) { return null === a ? "null" : void 0 === a ? "undefined" : a.toString() };
    var Eg = function(a, b, c) { var d = null,
            e = !1; return e ? d : null };
    var og = "floor ceil round max min abs pow sqrt".split(" ");
    var Fg = function() { var a = {}; return { Ki: function(b) { return a.hasOwnProperty(b) ? a[b] : void 0 }, tj: function(b, c) { a[b] = c }, reset: function() { a = {} } } },
        Gg = function(a, b) { O(H(this), ["apiName:!string", "mock:?*"], arguments); };
    var Hg = {};
    Hg.keys = function(a) { return new k };
    Hg.values = function(a) { return new k };
    Hg.entries = function(a) { return new k };
    Hg.freeze = function(a) { return a };
    Hg.delete = function(a, b) { return !1 };
    var Jg = function() { this.g = {};
        this.s = {}; };
    Jg.prototype.get = function(a, b) { var c = this.g.hasOwnProperty(a) ? this.g[a] : void 0; return c };
    Jg.prototype.add = function(a, b, c) { if (this.g.hasOwnProperty(a)) throw "Attempting to add a function which already exists: " + a + "."; if (this.s.hasOwnProperty(a)) throw "Attempting to add an API with an existing private API name: " + a + ".";
        this.g[a] = c ? void 0 : Ia(b) ? jg(a, b) : kg(a, b) };
    var Lg = function(a, b, c) { if (a.s.hasOwnProperty(b)) throw "Attempting to add a private function which already exists: " + b + "."; if (a.g.hasOwnProperty(b)) throw "Attempting to add a private function with an existing API name: " + b + ".";
        a.s[b] = Ia(c) ? jg(b, c) : kg(b, c) };

    function Kg(a, b) { var c = void 0; return c };

    function Mg() { var a = {}; return a };
    var P = {
        mc: "_ee",
        rd: "_syn_or_mod",
        Ij: "_uei",
        oe: "_eu",
        Fj: "_pci",
        Hb: "event_callback",
        $c: "event_timeout",
        Ga: "gtag.config",
        Oa: "gtag.get",
        xa: "purchase",
        Fb: "refund",
        kb: "begin_checkout",
        Cb: "add_to_cart",
        Db: "remove_from_cart",
        wh: "view_cart",
        Cf: "add_to_wishlist",
        Na: "view_item",
        Zb: "view_promotion",
        Wc: "select_promotion",
        Rd: "select_item",
        Eb: "view_item_list",
        Bf: "add_payment_info",
        vh: "add_shipping_info",
        Qa: "value_key",
        Za: "value_callback",
        Ha: "allow_ad_personalization_signals",
        hc: "restricted_data_processing",
        $b: "allow_google_signals",
        Ka: "cookie_expires",
        ac: "cookie_update",
        jc: "session_duration",
        ed: "session_engaged_time",
        Sa: "user_properties",
        ra: "transport_url",
        T: "ads_data_redaction",
        ya: "user_data",
        bc: "first_party_collection",
        D: "ad_storage",
        I: "analytics_storage",
        Pd: "region",
        vf: "wait_for_update",
        Ja: "conversion_linker",
        Ia: "conversion_cookie_prefix",
        ia: "value",
        fa: "currency",
        Uf: "trip_type",
        aa: "items",
        Nf: "passengers",
        Td: "allow_custom_scripts",
        Lb: "session_id",
        Sf: "quantity",
        qb: "transaction_id",
        ob: "language",
        Zc: "country",
        Xc: "allow_enhanced_conversions",
        Yd: "aw_merchant_id",
        Wd: "aw_feed_country",
        Xd: "aw_feed_language",
        Vd: "discount",
        Gf: "developer_id",
        gd: "delivery_postal_code",
        de: "estimated_delivery_date",
        be: "shipping",
        me: "new_customer",
        Zd: "customer_lifetime_value",
        ce: "enhanced_conversions",
        Gb: "page_view",
        qa: "linker",
        R: "domains",
        Jb: "decorate_forms",
        Lf: "enhanced_conversions_automatic_settings",
        Fh: "auto_detection_enabled"
    };
    P.Df = "user_engagement", P.qh = "app_remove", P.rh = "app_store_refund", P.sh = "app_store_subscription_cancel", P.th = "app_store_subscription_convert", P.uh = "app_store_subscription_renew", P.xh = "first_open", P.yh = "first_visit", P.zh = "in_app_purchase", P.Ah = "session_start", P.Bh = "user_data_login", P.Ch = "user_data_logout", P.Dh = "allow_display_features", P.lb = "client_id", P.oa = "cookie_domain", P.Yc = "cookie_name", P.mb = "cookie_path", P.Pa = "cookie_flags", P.Ff = "custom_map", P.ie = "groups", P.Bj = "non_interaction", P.Kb = "page_location",
        P.Mf = "page_path", P.$a = "page_referrer", P.ne = "page_title", P.ic = "send_page_view", P.pb = "send_to", P.dd = "session_engaged", P.bd = "_logged_in_state", P.fd = "session_number", P.Wh = "tracking_id", P.Ra = "url_passthrough", P.Ib = "accept_incoming", P.fc = "url_position", P.Qf = "phone_conversion_number", P.Of = "phone_conversion_callback", P.Pf = "phone_conversion_css_class", P.Rf = "phone_conversion_options", P.Sh = "phone_conversion_ids", P.Rh = "phone_conversion_country_code", P.Ef = "aw_remarketing", P.Ud = "aw_remarketing_only", P.Sd = "gclid",
        P.Eh = "auid", P.Jh = "affiliation", P.Kf = "tax", P.ae = "list_name", P.Jf = "checkout_step", P.If = "checkout_option", P.Kh = "coupon", P.Lh = "promotions", P.Mb = "user_id", P.Th = "retoken", P.da = "cookie_prefix", P.Hf = "disable_merchant_reported_purchases", P.Ih = "dc_natural_search", P.Hh = "dc_custom_params", P.Ph = "method", P.Vh = "search_term", P.Gh = "content_type", P.Qh = "optimize_id", P.Mh = "experiments", P.cc = "google_signals", P.he = "google_tld", P.hd = "update", P.fe = "firebase_id", P.ad = "ga_restrict_domain", P.ee = "event_settings", P.$d = "dynamic_event_settings",
        P.kc = "user_data_settings", P.Uh = "screen_name", P.Oh = "_x_19", P.nb = "_ecid", P.Nh = "_x_20", P.ke = "internal_traffic_results", P.Tf = "traffic_type", P.cd = "referral_exclusion_definition", P.je = "ignore_referrer";
    P.Xh = [P.Ha, P.Xc, P.$b, P.aa, P.hc, P.oa, P.Ka, P.Pa, P.Yc, P.mb, P.da, P.ac, P.Ff, P.$d, P.Hb, P.ee, P.$c, P.bc, P.ad, P.cc, P.he, P.ie, P.ke, P.qa, P.cd, P.pb, P.ic, P.jc, P.ed, P.ra, P.hd, P.kc, P.Sa, P.gd, P.oe], P.Vf = [P.Kb, P.$a, P.ne, P.ob, P.Uh, P.Mb, P.fe], P.Zh = [P.qh, P.rh, P.sh, P.th, P.uh, P.xh, P.yh, P.zh, P.Ah, P.Df];
    P.Xf = [P.xa, P.Fb, P.kb, P.Cb, P.Db, P.wh, P.Cf, P.Na, P.Zb, P.Wc, P.Eb, P.Rd, P.Bf, P.vh];
    P.Wf = [P.Ha, P.$b, P.ac];
    P.Yf = [P.Ka, P.$c, P.jc, P.ed];
    var Og = function(a) { Fa("GTM", a) };
    var Pg = function(a, b) { this.g = a;
        this.defaultValue = void 0 === b ? !1 : b };
    var Qg = new Pg(1936, !0),
        Rg = new Pg(1933);
    var Tg = function() { var a = Sg; if (a.Ue && a.hasOwnProperty("Ue")) return a.Ue; var b = new a; return a.Ue = b };
    var Sg = function() { var a = {};
            this.g = function(b, c) { return null != a[b] ? a[b] : c };
            this.s = function() { a[Rg.g] = !0 } },
        Ug = function(a) { return Tg().g(a.g, a.defaultValue) };
    var Vg = [];

    function Wg() { var a = ac("google_tag_data", {});
        a.ics || (a.ics = { entries: {}, set: Xg, update: Yg, addListener: Zg, notifyListeners: $g, active: !1, usedDefault: !1 }); return a.ics }

    function Xg(a, b, c, d, e, f) { var g = Wg();
        g.active = !0;
        g.usedDefault = !0; if (void 0 != b) { var h = g.entries,
                l = h[a] || {},
                m = l.region,
                p = c && n(c) ? c.toUpperCase() : void 0;
            d = d.toUpperCase();
            e = e.toUpperCase(); if ("" === d || p === e || (p === d ? m !== e : !p && !m)) { var q = !!(f && 0 < f && void 0 === l.update),
                    r = { region: p, initial: "granted" === b, update: l.update, quiet: q }; if ("" !== d || !1 !== l.initial) h[a] = r;
                q && z.setTimeout(function() { h[a] === r && r.quiet && (r.quiet = !1, ah(a), $g(), Fa("TAGGING", 2)) }, f) } } }

    function Yg(a, b) { var c = Wg();
        c.active = !0; if (void 0 != b) { var d = bh(a),
                e = c.entries,
                f = e[a] = e[a] || {};
            f.update = "granted" === b; var g = bh(a);
            f.quiet ? (f.quiet = !1, ah(a)) : g !== d && ah(a) } }

    function Zg(a, b) { Vg.push({ Ie: a, Gi: b }) }

    function ah(a) { for (var b = 0; b < Vg.length; ++b) { var c = Vg[b];
            La(c.Ie) && -1 !== c.Ie.indexOf(a) && (c.Pg = !0) } }

    function $g(a) { for (var b = 0; b < Vg.length; ++b) { var c = Vg[b]; if (c.Pg) { c.Pg = !1; try { c.Gi({ wi: a }) } catch (d) {} } } }
    var bh = function(a) { var b = Wg().entries[a] || {}; return void 0 !== b.update ? b.update : b.initial },
        ch = function(a) { return (Wg().entries[a] || {}).initial },
        dh = function(a) { return !(Wg().entries[a] || {}).quiet },
        eh = function() { return Ug(Rg) ? Wg().active : !1 },
        fh = function() { return Wg().usedDefault },
        gh = function(a, b) { Wg().addListener(a, b) },
        hh = function(a) { Wg().notifyListeners(a) },
        ih = function(a, b) {
            function c() { for (var e = 0; e < b.length; e++)
                    if (!dh(b[e])) return !0;
                return !1 } if (c()) { var d = !1;
                gh(b, function(e) { d || c() || (d = !0, a(e)) }) } else a({}) },
        jh = function(a, b) {
            function c() { for (var f = [], g = 0; g < d.length; g++) { var h = d[g];!1 === bh(h) || e[h] || (f.push(h), e[h] = !0) } return f } var d = n(b) ? [b] : b,
                e = {};
            c().length !== d.length && gh(d, function(f) { var g = c();
                0 < g.length && (f.Ie = g, a(f)) }) };

    function kh(a) { for (var b = [], c = 0; c < lh.length; c++) { var d = a(lh[c]);
            b[c] = !0 === d ? "1" : !1 === d ? "0" : "-" } return b.join("") }
    var lh = [P.D, P.I],
        mh = function(a) { var b = a[P.Pd];
            b && Og(40); var c = a[P.vf];
            c && Og(41); for (var d = La(b) ? b : [b], e = { Ub: 0 }; e.Ub < d.length; e = { Ub: e.Ub }, ++e.Ub) Wa(a, function(f) { return function(g, h) { if (g !== P.Pd && g !== P.vf) { var l = d[f.Ub];
                        Wg().set(g, h, l, "IQ", "IQ-DA", c) } } }(e)) },
        nh = function(a, b) { Wa(a, function(c, d) { Wg().update(c, d) });
            hh(b) },
        oh = function(a) { var b = bh(a); return void 0 != b ? b : !0 },
        ph = function() { return "G1" + kh(bh) },
        qh = function(a, b) { gh(a, b) },
        rh = function(a, b) { jh(a, b) },
        uh = function(a, b) {
            ih(a,
                b)
        };
    var wh = function(a) { return vh ? I.querySelectorAll(a) : null },
        xh = function(a, b) {
            if (!vh) return null;
            if (Element.prototype.closest) try { return a.closest(b) } catch (e) { return null }
            var c = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector,
                d = a;
            if (!I.documentElement.contains(d)) return null;
            do { try { if (c.call(d, b)) return d } catch (e) { break }
                d = d.parentElement || d.parentNode } while (null !== d && 1 === d.nodeType);
            return null
        },
        yh = !1;
    if (I.querySelectorAll) try { var zh = I.querySelectorAll(":root");
        zh && 1 == zh.length && zh[0] == I.documentElement && (yh = !0) } catch (a) {}
    var vh = yh;
    var Ah, Bh = !1;

    function Ch() { Bh = !0;
        Ah = Ah || {} }
    var Dh = function(a) { Bh || Ch(); return Ah[a] };
    var Eh = function(a) {
        if (I.hidden) return !0;
        var b = a.getBoundingClientRect();
        if (b.top == b.bottom || b.left == b.right || !z.getComputedStyle) return !0;
        var c = z.getComputedStyle(a, null);
        if ("hidden" === c.visibility) return !0;
        for (var d = a, e = c; d;) {
            if ("none" === e.display) return !0;
            var f = e.opacity,
                g = e.filter;
            if (g) { var h = g.indexOf("opacity(");
                0 <= h && (g = g.substring(h + 8, g.indexOf(")", h)), "%" == g.charAt(g.length - 1) && (g = g.substring(0, g.length - 1)), f = Math.min(g, f)) }
            if (void 0 !== f && 0 >= f) return !0;
            (d = d.parentElement) && (e = z.getComputedStyle(d,
                null))
        }
        return !1
    };
    var Fh = function() { var a = I.body,
                b = I.documentElement || a && a.parentElement,
                c, d; if (I.compatMode && "BackCompat" !== I.compatMode) c = b ? b.clientHeight : 0, d = b ? b.clientWidth : 0;
            else { var e = function(f, g) { return f && g ? Math.min(f, g) : Math.max(f, g) };
                Og(7);
                c = e(b ? b.clientHeight : 0, a ? a.clientHeight : 0);
                d = e(b ? b.clientWidth : 0, a ? a.clientWidth : 0) } return { width: d, height: c } },
        Gh = function(a) {
            var b = Fh(),
                c = b.height,
                d = b.width,
                e = a.getBoundingClientRect(),
                f = e.bottom - e.top,
                g = e.right - e.left;
            return f && g ? (1 - Math.min((Math.max(0 - e.left, 0) + Math.max(e.right -
                d, 0)) / g, 1)) * (1 - Math.min((Math.max(0 - e.top, 0) + Math.max(e.bottom - c, 0)) / f, 1)) : 0
        };
    var Nh = /:[0-9]+$/,
        Oh = function(a, b, c, d) { for (var e = [], f = a.split("&"), g = 0; g < f.length; g++) { var h = f[g].split("="); if (decodeURIComponent(h[0]).replace(/\+/g, " ") === b) { var l = h.slice(1).join("="); if (!c) return d ? l : decodeURIComponent(l).replace(/\+/g, " ");
                    e.push(d ? l : decodeURIComponent(l).replace(/\+/g, " ")) } } return c ? e : void 0 },
        Rh = function(a, b, c, d, e) {
            b && (b = String(b).toLowerCase());
            if ("protocol" === b || "port" === b) a.protocol = Ph(a.protocol) || Ph(z.location.protocol);
            "port" === b ? a.port = String(Number(a.hostname ? a.port :
                z.location.port) || ("http" == a.protocol ? 80 : "https" == a.protocol ? 443 : "")) : "host" === b && (a.hostname = (a.hostname || z.location.hostname).replace(Nh, "").toLowerCase());
            return Qh(a, b, c, d, e)
        },
        Qh = function(a, b, c, d, e) {
            var f, g = Ph(a.protocol);
            b && (b = String(b).toLowerCase());
            switch (b) {
                case "url_no_fragment":
                    f = Sh(a);
                    break;
                case "protocol":
                    f = g;
                    break;
                case "host":
                    f = a.hostname.replace(Nh, "").toLowerCase();
                    if (c) { var h = /^www\d*\./.exec(f);
                        h && h[0] && (f = f.substr(h[0].length)) }
                    break;
                case "port":
                    f = String(Number(a.port) || ("http" ==
                        g ? 80 : "https" == g ? 443 : ""));
                    break;
                case "path":
                    a.pathname || a.hostname || Fa("TAGGING", 1);
                    f = "/" == a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
                    var l = f.split("/");
                    0 <= Na(d || [], l[l.length - 1]) && (l[l.length - 1] = "");
                    f = l.join("/");
                    break;
                case "query":
                    f = a.search.replace("?", "");
                    e && (f = Oh(f, e, !1, void 0));
                    break;
                case "extension":
                    var m = a.pathname.split(".");
                    f = 1 < m.length ? m[m.length - 1] : "";
                    f = f.split("/")[0];
                    break;
                case "fragment":
                    f = a.hash.replace("#", "");
                    break;
                default:
                    f = a && a.href
            }
            return f
        },
        Ph = function(a) {
            return a ? a.replace(":",
                "").toLowerCase() : ""
        },
        Sh = function(a) { var b = ""; if (a && a.href) { var c = a.href.indexOf("#");
                b = 0 > c ? a.href : a.href.substr(0, c) } return b },
        Th = function(a) { var b = I.createElement("a");
            a && (b.href = a); var c = b.pathname; "/" !== c[0] && (a || Fa("TAGGING", 1), c = "/" + c); var d = b.hostname.replace(Nh, ""); return { href: b.href, protocol: b.protocol, host: b.host, hostname: d, pathname: c, search: b.search, hash: b.hash, port: b.port } },
        Uh = function(a) {
            function b(m) { var p = m.split("=")[0]; return 0 > d.indexOf(p) ? m : p + "=0" }

            function c(m) {
                return m.split("&").map(b).filter(function(p) {
                    return void 0 !=
                        p
                }).join("&")
            }
            var d = "gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(" "),
                e = Th(a),
                f = a.split(/[?#]/)[0],
                g = e.search,
                h = e.hash;
            "?" === g[0] && (g = g.substring(1));
            "#" === h[0] && (h = h.substring(1));
            g = c(g);
            h = c(h);
            "" !== g && (g = "?" + g);
            "" !== h && (h = "#" + h);
            var l = "" + f + g + h;
            "/" === l[l.length - 1] && (l = l.substring(0, l.length - 1));
            return l
        };
    var Vh = {},
        Wh = !0,
        Xh = !1;
    Vh.lh = "true";
    var Yh = function(a) { if ("false" === Vh.lh || !Wh) return !1; if (Xh) return !0; var b = Dh("AW-" + a); return !!b && !!b.preAutoPii };
    var Zh = new RegExp(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i),
        $h = new RegExp(/@(gmail|googlemail)\./i),
        ai = new RegExp(/support|noreply/i),
        bi = "SCRIPT STYLE IMG SVG PATH BR".split(" "),
        ci = ["BR"],
        di = {};

    function ei(a) { var b; if (a === I.body) b = "body";
        else { var c; if (a.id) c = "#" + a.id;
            else { var d; if (a.parentElement) { var e;
                    a: { var f = a.parentElement; if (f) { for (var g = 0; g < f.childElementCount; g++)
                                if (f.children[g] === a) { e = g + 1; break a }
                            e = -1 } else e = 1 }
                    d = ei(a.parentElement) + ">:nth-child(" + e + ")" } else d = "";
                c = d }
            b = c } return b }

    function fi(a, b) { if (1 >= a.length) return a; var c = a.filter(b); return 0 == c.length ? a : c }

    function gi(a) { if (0 == a.length) return null; var b;
        b = fi(a, function(c) { return !ai.test(c.ma) });
        b = fi(b, function(c) { return "INPUT" === c.element.tagName.toUpperCase() });
        b = fi(b, function(c) { return !Eh(c.element) }); return b[0] }
    var hi = function(a) {
            a = a || { Dd: !0, Ed: !0 };
            a.fb = a.fb || { email: !0, phone: !0, ng: !0 };
            var b, c = a,
                d = !!c.Dd + "." + !!c.Ed;
            c && c.yc && c.yc.length && (d += "." + c.yc.join("."));
            c && c.fb && (d += "." + c.fb.email + "." + c.fb.phone + "." + c.fb.ng);
            b = d;
            var e = di[b];
            if (e && 200 > db() - e.timestamp) return e.result;
            var f;
            var g = [],
                h = I.body;
            if (h) {
                for (var l = h.querySelectorAll("*"), m = 0; m < l.length && 1E4 > m; m++) {
                    var p = l[m];
                    if (!(0 <= bi.indexOf(p.tagName.toUpperCase()))) {
                        for (var q = !1, r = 0; r < p.childElementCount && 1E4 > r; r++)
                            if (!(0 <= ci.indexOf(p.children[r].tagName.toUpperCase()))) {
                                q = !0;
                                break
                            }
                        q || g.push(p)
                    }
                }
                f = { elements: g, status: 1E4 < l.length ? "2" : "1" }
            } else f = { elements: g, status: "4" };
            var u = f,
                t = u.status,
                v;
            if (a.fb && a.fb.email) {
                for (var w = u.elements, y = [], x = 0; x < w.length; x++) { var A = w[x],
                        B = A.textContent;
                    A.value && (B = A.value); if (B) { var D = B.match(Zh); if (D) { var C = D[0],
                                E; if (z.location) { var F = Qh(z.location, "host", !0);
                                E = 0 <= C.toLowerCase().indexOf(F) } else E = !1;
                            E || y.push({ element: A, ma: C }) } } }
                var S;
                var Q = a && a.yc;
                if (Q && 0 !== Q.length) {
                    for (var M = [], T = 0; T < y.length; T++) {
                        for (var W = !0, K = 0; K < Q.length; K++) {
                            var U =
                                Q[K];
                            if (U && xh(y[T].element, U)) { W = !1; break }
                        }
                        W && M.push(y[T])
                    }
                    S = M
                } else S = y;
                v = gi(S);
                10 < y.length && (t = "3")
            }
            var ca = [];
            if (v) { var L = v.element,
                    fa = { ma: v.ma, tagName: L.tagName, type: 1 };
                a.Dd && (fa.querySelector = ei(L));
                a.Ed && (fa.isVisible = !Eh(L));
                ca.push(fa) }
            var ta = { elements: ca, status: t };
            di[b] = { timestamp: db(), result: ta };
            return ta
        },
        ii = function(a) { return a.tagName + ":" + a.isVisible + ":" + a.ma.length + ":" + $h.test(a.ma) };
    var ji = function(a) { return /^e\d+$/.test(a) || /^[0-9A-Za-z_-]{43}$/.test(a) },
        ki = function(a) { return void 0 === a || null === a ? "" : n(a) ? bb(String(a)) : "e0" },
        mi = function(a) { return a.replace(li, "") },
        oi = function(a) { return ni(a.replace(/\s/g, "")) },
        ni = function(a) { return bb(a.replace(pi, "").toLowerCase()) },
        ri = function(a) { a = a.replace(/[\s-()/.]/g, ""); "+" !== a.charAt(0) && (a = "+" + a); return qi.test(a) ? a : "e0" },
        ti = function(a) {
            var b = a.toLowerCase().split("@");
            if (2 == b.length) {
                var c = b[0];
                /^(gmail|googlemail)\./.test(b[1]) && (c =
                    c.replace(/\./g, ""));
                c = c + "@" + b[1];
                if (si.test(c)) return c
            }
            return "e0"
        },
        wi = function(a, b, c) { window.Promise || c([], []);
            Promise.all(a.map(function(d) { return d.value && ui(d.name) ? vi(d.value).then(function(e) { d.value = e }) : Promise.resolve() })).then(function() { c(a, b) }).catch(function() { c([], []) }) },
        vi = function(a) {
            if ("" === a || "e0" === a) return Promise.resolve(a);
            if (z.crypto && z.crypto.subtle) try {
                var b = xi(a);
                return z.crypto.subtle.digest("SHA-256", b).then(function(c) {
                    var d = Array.from(new Uint8Array(c)).map(function(e) { return String.fromCharCode(e) }).join("");
                    return z.btoa(d).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")
                }).catch(function() { return "e2" })
            } catch (c) { return Promise.resolve("e2") } else return Promise.resolve("e1")
        },
        xi = function(a) {
            var b;
            if (z.TextEncoder) b = (new z.TextEncoder("utf-8")).encode(a);
            else {
                for (var c = [], d = 0; d < a.length; d++) {
                    var e = a.charCodeAt(d);
                    128 > e ? c.push(e) : 2048 > e ? c.push(192 | e >> 6, 128 | e & 63) : 55296 > e || 57344 <= e ? c.push(224 | e >> 12, 128 | e >> 6 & 63, 128 | e & 63) : (e = 65536 + ((e & 1023) << 10 | a.charCodeAt(++d) & 1023), c.push(240 | e >> 18, 128 | e >> 12 & 63, 128 |
                        e >> 6 & 63, 128 | e & 63))
                }
                b = new Uint8Array(c)
            }
            return b
        },
        pi = /[0-9`~!@#$%^&*()_\-+=:;<>,.?|/\\[\]]/g,
        si = /^\S+@\S+\.\S+$/,
        qi = /^\+\d{11,15}$/,
        li = /[.~]/g,
        yi = {},
        zi = (yi.email = "em", yi.phone_number = "pn", yi.first_name = "fn", yi.last_name = "ln", yi.street = "sa", yi.city = "ct", yi.region = "rg", yi.country = "co", yi.postal_code = "pc", yi.error_code = "ec", yi),
        Ai = function(a, b, c) {
            function d(t, v, w) { var y = t[v];
                La(y) || (y = [y]); for (var x = 0; x < y.length; ++x) { var A = ki(y[x]); "" !== A && g.push({ name: v, value: w(A), index: void 0 }) } }

            function e(t, v, w, y) {
                var x =
                    ki(t[v]);
                "" !== x && g.push({ name: v, value: w(x), index: y })
            }

            function f(t) { return function(v) { Og(64); return t(v) } }
            var g = [],
                h = [];
            if ("https:" === z.location.protocol) {
                var l = function(t, v) { var w = t[v];
                    La(w) || (w = [w]); for (var y = 0; y < w.length; ++y) { var x = ki(w[y]); if ("" !== x) return x } return null };
                d(a, "email", ti);
                var m = l(a, "email");
                if (m)
                    for (var p =
                            0; p < b.length; p++) h.push(b[p].ma.toLowerCase() === m.toLowerCase());
                d(a, "phone_number", ri);
                d(a, "first_name", f(oi));
                d(a, "last_name", f(oi));
                var q = a.home_address || {};
                d(q, "street", f(ni));
                d(q, "city", f(ni));
                d(q, "postal_code", f(mi));
                d(q, "region", f(ni));
                d(q, "country", f(mi));
                var r = a.address || {};
                La(r) || (r = [r]);
                for (var u = 0; u < r.length; u++) e(r[u], "first_name", oi, u), e(r[u], "last_name", oi, u), e(r[u], "street", ni, u), e(r[u], "city", ni, u), e(r[u], "postal_code", mi,
                    u), e(r[u], "region", ni, u), e(r[u], "country", mi, u);
                wi(g, h, c)
            } else g.push({ name: "error_code", value: "e3", index: void 0 }), c(g, h)
        },
        Bi = function(a, b) { Ai(a, [], function(c, d) { for (var e = ["tv.1"], f = 0; f < c.length; ++f) { var g = c[f].name,
                        h = c[f].value,
                        l = c[f].index,
                        m = zi[g];
                    m && h && (!ui(g) || ji(h)) && (void 0 !== l && (m += l), e.push(m + "." + h)) }
                b(encodeURIComponent(e.join("~")), d) }) },
        Ci = function(a, b) {
            if (z.Promise) try {
                return new Promise(function(c) {
                    Ai(a, b, function(d, e) {
                        for (var f = ["tv.1"], g = 0; g < d.length; ++g) {
                            var h = d[g].name,
                                l = d[g].value,
                                m = d[g].index,
                                p = zi[h];
                            p && l && (!ui(h) || ji(l)) && (void 0 !== m && (p += m), f.push(p + "." + l))
                        }
                        c({ Ic: encodeURIComponent(f.join("~")), wc: e })
                    })
                })
            } catch (c) {}
        },
        ui = function(a) { return -1 !== ["email", "phone_number", "first_name", "last_name", "street"].indexOf(a) };
    var Di = function() { this.eventModel = {};
            this.targetConfig = {};
            this.containerConfig = {};
            this.remoteConfig = {};
            this.globalConfig = {};
            this.onSuccess = function() {};
            this.onFailure = function() {};
            this.setContainerTypeLoaded = function() {};
            this.getContainerTypeLoaded = function() {};
            this.eventId = void 0;
            this.isGtmEvent = !1 },
        Ei = function(a) { var b = new Di;
            b.eventModel = a; return b },
        Fi = function(a, b) { a.targetConfig = b; return a },
        Gi = function(a, b) { a.containerConfig = b; return a },
        Hi = function(a, b) { a.remoteConfig = b; return a },
        Ii = function(a,
            b) { a.globalConfig = b; return a },
        Ji = function(a, b) { a.onSuccess = b; return a },
        Ki = function(a, b) { a.setContainerTypeLoaded = b; return a },
        Li = function(a, b) { a.getContainerTypeLoaded = b; return a },
        Mi = function(a, b) { a.onFailure = b; return a };
    Di.prototype.getWithConfig = function(a) { if (void 0 !== this.eventModel[a]) return this.eventModel[a]; if (void 0 !== this.targetConfig[a]) return this.targetConfig[a]; if (void 0 !== this.containerConfig[a]) return this.containerConfig[a]; if (void 0 !== this.remoteConfig[a]) return this.remoteConfig[a]; if (void 0 !== this.globalConfig[a]) return this.globalConfig[a] };
    var Ni = function(a) {
            function b(d) { for (var e = Object.keys(d), f = 0; f < e.length; ++f) c[e[f]] = 1 } var c = {};
            b(a.eventModel);
            b(a.targetConfig);
            b(a.containerConfig);
            b(a.globalConfig); return Object.keys(c) },
        Oi = function(a, b, c) {
            function d(g) { Ic(g) && Wa(g, function(h, l) { f = !0;
                    e[h] = l }) } var e = {},
                f = !1;
            c && 1 !== c || (d(a.globalConfig[b]), d(a.remoteConfig[b]), d(a.containerConfig[b]), d(a.targetConfig[b]));
            c && 2 !== c || d(a.eventModel[b]); return f ? e : void 0 };
    var tf = {},
        Pi = null,
        Qi = Math.random();
    tf.N = "G-DQ3SMER6QR";
    tf.qd = "840";
    tf.Cj = "";
    tf.ph = "ChEI8MfIiAYQ5cTs1Nr02NCiARIlACs1EPJ7R3UxSiWIJhlOgxjkoW/lNOnMcAqvV9RA3eQjOZ85FRoCyzo\x3d";
    var Ri = { __cl: !0, __ecl: !0, __ehl: !0, __evl: !0, __fal: !0, __fil: !0, __fsl: !0, __hl: !0, __jel: !0, __lcl: !0, __sdl: !0, __tl: !0, __ytl: !0 },
        Si = { __paused: !0, __tg: !0 },
        Ti;
    for (Ti in Ri) Ri.hasOwnProperty(Ti) && (Si[Ti] = !0);
    var Ui = "www.googletagmanager.com/gtm.js";
    Ui = "www.googletagmanager.com/gtag/js";
    var Vi = Ui,
        Wi = $a(""),
        Xi = null,
        Yi = null,
        Zi = "https://www.googletagmanager.com/a?id=" + tf.N + "&cv=1",
        $i = {},
        aj = {},
        bj = function() { var a = Pi.sequence || 1;
            Pi.sequence = a + 1; return a };
    tf.oh = "";
    var cj = {},
        dj = new Sa,
        ej = {},
        fj = {},
        ij = { name: "dataLayer", set: function(a, b) { N(kb(a, b), ej);
                gj() }, get: function(a) { return hj(a, 2) }, reset: function() { dj = new Sa;
                ej = {};
                gj() } },
        hj = function(a, b) { return 2 != b ? dj.get(a) : jj(a) },
        jj = function(a, b) { var c = a.split(".");
            b = b || []; for (var d = ej, e = 0; e < c.length; e++) { if (null === d) return !1; if (void 0 === d) break;
                d = d[c[e]]; if (-1 !== Na(b, d)) return } return d },
        kj = function(a, b) { fj.hasOwnProperty(a) || (dj.set(a, b), N(kb(a, b), ej), gj()) },
        lj = function() {
            for (var a = ["gtm.allowlist", "gtm.blocklist",
                    "gtm.whitelist", "gtm.blacklist", "tagTypeBlacklist"
                ], b = 0; b < a.length; b++) { var c = a[b],
                    d = hj(c, 1); if (La(d) || Ic(d)) d = N(d);
                fj[c] = d }
        },
        gj = function(a) { Wa(fj, function(b, c) { dj.set(b, c);
                N(kb(b, void 0), ej);
                N(kb(b, c), ej);
                a && delete fj[b] }) },
        nj = function(a, b, c) { cj[a] = cj[a] || {};
            cj[a][b] = mj(b, c) },
        mj = function(a, b) { var c, d = 1 !== (void 0 === b ? 2 : b) ? jj(a) : dj.get(a); "array" === Gc(d) || "object" === Gc(d) ? c = N(d) : c = d; return c },
        oj = function(a, b) { if (cj[a]) return cj[a][b] },
        pj = function(a, b) { cj[a] && delete cj[a][b] };
    var qj = function(a, b, c) { if (c) { var d = c.selector_type,
                    e = String(c.value),
                    f; if ("js_variable" === d) { e = e.replace(/\["?'?/g, ".").replace(/"?'?\]/g, ""); for (var g = e.split(","), h = 0; h < g.length; h++) { var l = g[h].trim(); if (l) { if (0 === l.indexOf("dataLayer.")) f = hj(l.substring(10));
                            else { var m = l.split(".");
                                f = z[m.shift()]; for (var p = 0; p < m.length; p++) f = f && f[m[p]] } if (void 0 !== f) break } } } else if ("css_selector" === d && vh) { var q = wh(e);
                    q && 0 < q.length && (f = lc(q[0]) || bb(q[0].value)) }
                f && (a[b] = f) } },
        rj = function(a) {
            if (a) {
                var b = {};
                qj(b, "email",
                    a.email);
                qj(b, "phone_number", a.phone);
                b.address = [];
                for (var c = a.name_and_address || [], d = 0; d < c.length; d++) { var e = {};
                    qj(e, "first_name", c[d].first_name);
                    qj(e, "last_name", c[d].last_name);
                    qj(e, "street", c[d].street);
                    qj(e, "city", c[d].city);
                    qj(e, "region", c[d].region);
                    qj(e, "country", c[d].country);
                    qj(e, "postal_code", c[d].postal_code);
                    b.address.push(e) }
                return b
            }
        },
        sj = function(a) {
            if (a) switch (a.mode) {
                case "selectors":
                    return rj(a.selectors);
                case "auto_detect":
                    var b;
                    var c = a.auto_detect;
                    if (c) {
                        var d = hi({
                                Dd: !1,
                                Ed: !1,
                                yc: c.exclude_element_selectors,
                                fb: { email: !!c.email, phone: !!c.phone, ng: !!c.address }
                            }).elements,
                            e = {};
                        if (0 < d.length)
                            for (var f = 0; f < d.length; f++) { var g = d[f]; if (1 === g.type) { e.email = g.ma; break } }
                        b = e
                    } else b = void 0;
                    return b
            }
        },
        tj = function(a) { switch (a.enhanced_conversions_mode) {
                case "manual":
                    var b = a.enhanced_conversions_manual_var; return void 0 !== b ? b : z.enhanced_conversion_data;
                case "automatic":
                    return rj(a[P.Lf]) } };
    var uj = {},
        vj = function(a, b) { if (z._gtmexpgrp && z._gtmexpgrp.hasOwnProperty(a)) return z._gtmexpgrp[a];
            void 0 === uj[a] && (uj[a] = Math.floor(Math.random() * b)); return uj[a] };

    function wj(a, b, c) { for (var d = [], e = b.split(";"), f = 0; f < e.length; f++) { var g = e[f].split("="),
                h = g[0].replace(/^\s*|\s*$/g, ""); if (h && h == a) { var l = g.slice(1).join("=").replace(/^\s*|\s*$/g, "");
                l && c && (l = decodeURIComponent(l));
                d.push(l) } } return d };

    function xj(a) { return "null" !== a.origin };
    var Aj = function(a, b, c, d) { return yj(d) ? wj(a, String(b || zj()), c) : [] },
        Dj = function(a, b, c, d, e) { if (yj(e)) { var f = Bj(a, d, e); if (1 === f.length) return f[0].id; if (0 !== f.length) { f = Cj(f, function(g) { return g.yd }, b); if (1 === f.length) return f[0].id;
                    f = Cj(f, function(g) { return g.Jc }, c); return f[0] ? f[0].id : void 0 } } };

    function Ej(a, b, c, d) { var e = zj(),
            f = window;
        xj(f) && (f.document.cookie = a); var g = zj(); return e != g || void 0 != c && 0 <= Aj(b, g, !1, d).indexOf(c) }
    var Ij = function(a, b, c, d) {
            function e(w, y, x) { if (null == x) return delete h[y], w;
                h[y] = x; return w + "; " + y + "=" + x }

            function f(w, y) { if (null == y) return delete h[y], w;
                h[y] = !0; return w + "; " + y }
            if (!yj(c.Wa)) return 2;
            var g;
            void 0 == b ? g = a + "=deleted; expires=" + (new Date(0)).toUTCString() : (c.encode && (b = encodeURIComponent(b)), b = Fj(b), g = a + "=" + b);
            var h = {};
            g = e(g, "path", c.path);
            var l;
            c.expires instanceof Date ? l = c.expires.toUTCString() : null != c.expires && (l = "" + c.expires);
            g = e(g, "expires", l);
            g = e(g, "max-age", c.$i);
            g = e(g, "samesite",
                c.oj);
            c.qj && (g = f(g, "secure"));
            var m = c.domain;
            if ("auto" === m) { for (var p = Gj(), q = void 0, r = !1, u = 0; u < p.length; ++u) { var t = "none" !== p[u] ? p[u] : void 0,
                        v = e(g, "domain", t);
                    v = f(v, c.flags); try { d && d(a, h) } catch (w) { q = w; continue }
                    r = !0; if (!Hj(t, c.path) && Ej(v, a, b, c.Wa)) return 0 } if (q && !r) throw q; return 1 }
            m && "none" !== m && (g = e(g, "domain", m));
            g = f(g, c.flags);
            d && d(a, h);
            return Hj(m, c.path) ? 1 : Ej(g, a, b, c.Wa) ? 0 : 1
        },
        Jj = function(a, b, c) { null == c.path && (c.path = "/");
            c.domain || (c.domain = "auto"); return Ij(a, b, c) };

    function Cj(a, b, c) { for (var d = [], e = [], f, g = 0; g < a.length; g++) { var h = a[g],
                l = b(h);
            l === c ? d.push(h) : void 0 === f || l < f ? (e = [h], f = l) : l === f && e.push(h) } return 0 < d.length ? d : e }

    function Bj(a, b, c) { for (var d = [], e = Aj(a, void 0, void 0, c), f = 0; f < e.length; f++) { var g = e[f].split("."),
                h = g.shift(); if (!b || -1 !== b.indexOf(h)) { var l = g.shift();
                l && (l = l.split("-"), d.push({ id: g.join("."), yd: 1 * l[0] || 1, Jc: 1 * l[1] || 1 })) } } return d }
    var Fj = function(a) { a && 1200 < a.length && (a = a.substring(0, 1200)); return a },
        Kj = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
        Lj = /(^|\.)doubleclick\.net$/i,
        Hj = function(a, b) { return Lj.test(window.document.location.hostname) || "/" === b && Kj.test(a) },
        zj = function() { return xj(window) ? window.document.cookie : "" },
        Gj = function() {
            var a = [],
                b = window.document.location.hostname.split(".");
            if (4 === b.length) { var c = b[b.length - 1]; if (parseInt(c, 10).toString() === c) return ["none"] }
            for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join("."));
            var e = window.document.location.hostname;
            Lj.test(e) || Kj.test(e) || a.push("none");
            return a
        },
        yj = function(a) { if (!Ug(Rg) || !a || !eh()) return !0; if (!dh(a)) return !1; var b = bh(a); return null == b ? !0 : !!b };
    var Mj = function() { return [Math.round(2147483647 * Math.random()), Math.round(db() / 1E3)].join(".") },
        Pj = function(a, b, c, d, e) { var f = Nj(b); return Dj(a, f, Oj(c), d, e) },
        Qj = function(a, b, c, d) { var e = "" + Nj(c),
                f = Oj(d);
            1 < f && (e += "-" + f); return [b, e, a].join(".") },
        Nj = function(a) { if (!a) return 1;
            a = 0 === a.indexOf(".") ? a.substr(1) : a; return a.split(".").length },
        Oj = function(a) { if (!a || "/" === a) return 1; "/" !== a[0] && (a = "/" + a); "/" !== a[a.length - 1] && (a += "/"); return a.split("/").length - 1 };

    function Rj(a, b, c) { var d, e = Number(null != a.wb ? a.wb : void 0);
        0 !== e && (d = new Date((b || db()) + 1E3 * (e || 7776E3))); return { path: a.path, domain: a.domain, flags: a.flags, encode: !!c, expires: d } };
    var Sj = ["1"],
        Tj = {},
        Xj = function(a, b) { b = void 0 === b ? !0 : b; var c = Uj(a.prefix); if (!Tj[c] && !Vj(c, a.path, a.domain) && b) { var d = Uj(a.prefix),
                    e = Mj(); if (0 === Wj(d, e, a)) { var f = ac("google_tag_data", {});
                    f._gcl_au ? Fa("GTM", 57) : f._gcl_au = e }
                Vj(c, a.path, a.domain) } };

    function Wj(a, b, c) { var d = Qj(b, "1", c.domain, c.path),
            e = Rj(c);
        e.Wa = "ad_storage"; return Jj(a, d, e) }

    function Vj(a, b, c) { var d = Pj(a, b, c, Sj, "ad_storage");
        d && (Tj[a] = d); return d }

    function Uj(a) { return (a || "_gcl") + "_au" };
    var Yj = function(a) { for (var b = [], c = I.cookie.split(";"), d = new RegExp("^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"), e = 0; e < c.length; e++) { var f = c[e].match(d);
            f && b.push({ qf: f[1], value: f[2], timestamp: Number(f[2].split(".")[1]) || 0 }) }
        b.sort(function(g, h) { return h.timestamp - g.timestamp }); return b };

    function Zj(a, b) { var c = Yj(a),
            d = {}; if (!c || !c.length) return d; for (var e = 0; e < c.length; e++) { var f = c[e].value.split("."); if (!("1" !== f[0] || b && 3 > f.length || !b && 3 !== f.length) && Number(f[1])) { d[c[e].qf] || (d[c[e].qf] = []); var g = { version: f[0], timestamp: 1E3 * Number(f[1]), Ca: f[2] };
                b && 3 < f.length && (g.labels = f.slice(3));
                d[c[e].qf].push(g) } } return d };

    function ak() { for (var a = bk, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c; return b }

    function ck() { var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        a += a.toLowerCase() + "0123456789-_"; return a + "." }
    var bk, dk;

    function ek(a) {
        function b(l) { for (; d < a.length;) { var m = a.charAt(d++),
                    p = dk[m]; if (null != p) return p; if (!/^[\s\xa0]*$/.test(m)) throw Error("Unknown base64 encoding at char: " + m); } return l }
        bk = bk || ck();
        dk = dk || ak(); for (var c = "", d = 0;;) { var e = b(-1),
                f = b(0),
                g = b(64),
                h = b(64); if (64 === h && -1 === e) return c;
            c += String.fromCharCode(e << 2 | f >> 4);
            64 != g && (c += String.fromCharCode(f << 4 & 240 | g >> 2), 64 != h && (c += String.fromCharCode(g << 6 & 192 | h))) } };
    var fk;
    var jk = function() { var a = gk,
                b = hk,
                c = ik(),
                d = function(g) { a(g.target || g.srcElement || {}) },
                e = function(g) { b(g.target || g.srcElement || {}) }; if (!c.init) { ic(I, "mousedown", d);
                ic(I, "keyup", d);
                ic(I, "submit", e); var f = HTMLFormElement.prototype.submit;
                HTMLFormElement.prototype.submit = function() { b(this);
                    f.call(this) };
                c.init = !0 } },
        kk = function(a, b, c, d, e) { var f = { callback: a, domains: b, fragment: 2 === c, placement: c, forms: d, sameHost: e };
            ik().decorators.push(f) },
        lk = function(a, b, c) {
            for (var d = ik().decorators, e = {}, f = 0; f < d.length; ++f) {
                var g =
                    d[f],
                    h;
                if (h = !c || g.forms) a: { var l = g.domains,
                        m = a,
                        p = !!g.sameHost; if (l && (p || m !== I.location.hostname))
                        for (var q = 0; q < l.length; q++)
                            if (l[q] instanceof RegExp) { if (l[q].test(m)) { h = !0; break a } } else if (0 <= m.indexOf(l[q]) || p && 0 <= l[q].indexOf(m)) { h = !0; break a }
                    h = !1 }
                if (h) { var r = g.placement;
                    void 0 == r && (r = g.fragment ? 2 : 1);
                    r === b && gb(e, g.callback()) }
            }
            return e
        },
        ik = function() { var a = ac("google_tag_data", {}),
                b = a.gl;
            b && b.decorators || (b = { decorators: [] }, a.gl = b); return b };
    var mk = /(.*?)\*(.*?)\*(.*)/,
        nk = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
        ok = /^(?:www\.|m\.|amp\.)+/,
        pk = /([^?#]+)(\?[^#]*)?(#.*)?/;

    function qk(a) { return new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)") }
    var sk = function(a) {
            var b = [],
                c;
            for (c in a)
                if (a.hasOwnProperty(c)) { var d = a[c]; if (void 0 !== d && d === d && null !== d && "[object Object]" !== d.toString()) { b.push(c); var e = b,
                            f = e.push,
                            g, h = String(d);
                        bk = bk || ck();
                        dk = dk || ak(); for (var l = [], m = 0; m < h.length; m += 3) { var p = m + 1 < h.length,
                                q = m + 2 < h.length,
                                r = h.charCodeAt(m),
                                u = p ? h.charCodeAt(m + 1) : 0,
                                t = q ? h.charCodeAt(m + 2) : 0,
                                v = r >> 2,
                                w = (r & 3) << 4 | u >> 4,
                                y = (u & 15) << 2 | t >> 6,
                                x = t & 63;
                            q || (x = 64, p || (y = 64));
                            l.push(bk[v], bk[w], bk[y], bk[x]) }
                        g = l.join("");
                        f.call(e, g) } }
            var A = b.join("*");
            return ["1", rk(A),
                A
            ].join("*")
        },
        rk = function(a, b) { var c = [window.navigator.userAgent, (new Date).getTimezoneOffset(), window.navigator.userLanguage || window.navigator.language, Math.floor((new Date).getTime() / 60 / 1E3) - (void 0 === b ? 0 : b), a].join("*"),
                d; if (!(d = fk)) { for (var e = Array(256), f = 0; 256 > f; f++) { for (var g = f, h = 0; 8 > h; h++) g = g & 1 ? g >>> 1 ^ 3988292384 : g >>> 1;
                    e[f] = g }
                d = e }
            fk = d; for (var l = 4294967295, m = 0; m < c.length; m++) l = l >>> 8 ^ fk[(l ^ c.charCodeAt(m)) & 255]; return ((l ^ -1) >>> 0).toString(36) },
        uk = function() {
            return function(a) {
                var b = Th(z.location.href),
                    c = b.search.replace("?", ""),
                    d = Oh(c, "_gl", !1, !0) || "";
                a.query = tk(d) || {};
                var e = Rh(b, "fragment").match(qk("_gl"));
                a.fragment = tk(e && e[3] || "") || {}
            }
        },
        vk = function(a) { var b = uk(),
                c = ik();
            c.data || (c.data = { query: {}, fragment: {} }, b(c.data)); var d = {},
                e = c.data;
            e && (gb(d, e.query), a && gb(d, e.fragment)); return d },
        tk = function(a) {
            var b;
            b = void 0 === b ? 3 : b;
            try {
                if (a) {
                    var c;
                    a: { for (var d = a, e = 0; 3 > e; ++e) { var f = mk.exec(d); if (f) { c = f; break a }
                            d = decodeURIComponent(d) }
                        c = void 0 }
                    var g = c;
                    if (g && "1" === g[1]) {
                        var h = g[3],
                            l;
                        a: {
                            for (var m = g[2], p =
                                    0; p < b; ++p)
                                if (m === rk(h, p)) { l = !0; break a }
                            l = !1
                        }
                        if (l) { for (var q = {}, r = h ? h.split("*") : [], u = 0; u < r.length; u += 2) q[r[u]] = ek(r[u + 1]); return q }
                    }
                }
            } catch (t) {}
        };

    function wk(a, b, c, d) {
        function e(p) { var q = p,
                r = qk(a).exec(q),
                u = q; if (r) { var t = r[2],
                    v = r[4];
                u = r[1];
                v && (u = u + t + v) }
            p = u; var w = p.charAt(p.length - 1);
            p && "&" !== w && (p += "&"); return p + m }
        d = void 0 === d ? !1 : d; var f = pk.exec(c); if (!f) return ""; var g = f[1],
            h = f[2] || "",
            l = f[3] || "",
            m = a + "=" + b;
        d ? l = "#" + e(l.substring(1)) : h = "?" + e(h.substring(1)); return "" + g + h + l }

    function xk(a, b) { var c = "FORM" === (a.tagName || "").toUpperCase(),
            d = lk(b, 1, c),
            e = lk(b, 2, c),
            f = lk(b, 3, c); if (hb(d)) { var g = sk(d);
            c ? Ak("_gl", g, a) : Bk("_gl", g, a, !1) } if (!c && hb(e)) { var h = sk(e);
            Bk("_gl", h, a, !0) } for (var l in f)
            if (f.hasOwnProperty(l)) a: { var m = l,
                    p = f[l],
                    q = a; if (q.tagName) { if ("a" === q.tagName.toLowerCase()) { Bk(m, p, q, void 0); break a } if ("form" === q.tagName.toLowerCase()) { Ak(m, p, q); break a } } "string" == typeof q && wk(m, p, q, void 0) } }

    function Bk(a, b, c, d) { if (c.href) { var e = wk(a, b, c.href, void 0 === d ? !1 : d);
            Hb.test(e) && (c.href = e) } }

    function Ak(a, b, c) { if (c && c.action) { var d = (c.method || "").toLowerCase(); if ("get" === d) { for (var e = c.childNodes || [], f = !1, g = 0; g < e.length; g++) { var h = e[g]; if (h.name === a) { h.setAttribute("value", b);
                        f = !0; break } } if (!f) { var l = I.createElement("input");
                    l.setAttribute("type", "hidden");
                    l.setAttribute("name", a);
                    l.setAttribute("value", b);
                    c.appendChild(l) } } else if ("post" === d) { var m = wk(a, b, c.action);
                Hb.test(m) && (c.action = m) } } }
    var gk = function(a) { try { var b;
                a: { for (var c = a, d = 100; c && 0 < d;) { if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) { b = c; break a }
                        c = c.parentNode;
                        d-- }
                    b = null }
                var e = b; if (e) { var f = e.protocol; "http:" !== f && "https:" !== f || xk(e, e.hostname) } } catch (g) {} },
        hk = function(a) { try { if (a.action) { var b = Rh(Th(a.action), "host");
                    xk(a, b) } } catch (c) {} },
        Ck = function(a, b, c, d) { jk();
            kk(a, b, "fragment" === c ? 2 : 1, !!d, !1) },
        Dk = function(a, b) { jk();
            kk(a, [Qh(z.location, "host", !0)], b, !0, !0) },
        Ek = function() {
            var a = I.location.hostname,
                b = nk.exec(I.referrer);
            if (!b) return !1;
            var c = b[2],
                d = b[1],
                e = "";
            if (c) { var f = c.split("/"),
                    g = f[1];
                e = "s" === g ? decodeURIComponent(f[2]) : decodeURIComponent(g) } else if (d) { if (0 === d.indexOf("xn--")) return !1;
                e = d.replace(/-/g, ".").replace(/\.\./g, "-") }
            var h = a.replace(ok, ""),
                l = e.replace(ok, ""),
                m;
            if (!(m = h === l)) { var p = "." + l;
                m = h.substring(h.length - p.length, h.length) === p }
            return m
        },
        Fk = function(a, b) { return !1 === a ? !1 : a || b || Ek() };
    var Gk = {};
    var Hk = /^\w+$/,
        Ik = /^[\w-]+$/,
        Jk = { aw: "_aw", dc: "_dc", gf: "_gf", ha: "_ha", gp: "_gp", gb: "_gb" },
        Kk = function() { if (!Ug(Rg) || !eh()) return !0; var a = bh("ad_storage"); return null == a ? !0 : !!a },
        Lk = function(a, b) { dh("ad_storage") ? Kk() ? a() : jh(a, "ad_storage") : b ? Fa("TAGGING", 3) : ih(function() { Lk(a, !0) }, ["ad_storage"]) },
        Nk = function(a) { return Mk(a).map(function(b) { return b.Ca }) },
        Mk = function(a) {
            var b = [];
            if (!xj(z) || !I.cookie) return b;
            var c = Aj(a, I.cookie, void 0, "ad_storage");
            if (!c || 0 == c.length) return b;
            for (var d = {}, e = 0; e < c.length; d = { Tc: d.Tc }, e++) { var f = Ok(c[e]); if (null != f) { var g = f,
                        h = g.version;
                    d.Tc = g.Ca; var l = g.timestamp,
                        m = g.labels,
                        p = Oa(b, function(q) { return function(r) { return r.Ca === q.Tc } }(d));
                    p ? (p.timestamp = Math.max(p.timestamp, l), p.labels = Pk(p.labels, m || [])) : b.push({ version: h, Ca: d.Tc, timestamp: l, labels: m }) } }
            b.sort(function(q, r) { return r.timestamp - q.timestamp });
            return Qk(b)
        };

    function Pk(a, b) { for (var c = {}, d = [], e = 0; e < a.length; e++) c[a[e]] = !0, d.push(a[e]); for (var f = 0; f < b.length; f++) c[b[f]] || d.push(b[f]); return d }

    function Rk(a) { return a && "string" == typeof a && a.match(Hk) ? a : "_gcl" }
    var Tk = function() { var a = Th(z.location.href),
                b = Rh(a, "query", !1, void 0, "gclid"),
                c = Rh(a, "query", !1, void 0, "gclsrc"),
                d = Rh(a, "query", !1, void 0, "wbraid"),
                e = Rh(a, "query", !1, void 0, "dclid"); if (!b || !c || !d) { var f = a.hash.replace("#", "");
                b = b || Oh(f, "gclid", !1, void 0);
                c = c || Oh(f, "gclsrc", !1, void 0);
                d = d || Oh(f, "wbraid", !1, void 0) } return Sk(b, c, e, d) },
        Sk = function(a, b, c, d) {
            var e = {},
                f = function(g, h) { e[h] || (e[h] = []);
                    e[h].push(g) };
            e.gclid = a;
            e.gclsrc = b;
            e.dclid = c;
            void 0 !== d && Ik.test(d) && (e.gbraid = d, f(d, "gb"));
            if (void 0 !==
                a && a.match(Ik)) switch (b) {
                case void 0:
                    f(a, "aw"); break;
                case "aw.ds":
                    f(a, "aw");
                    f(a, "dc"); break;
                case "ds":
                    f(a, "dc"); break;
                case "3p.ds":
                    f(a, "dc"); break;
                case "gf":
                    f(a, "gf"); break;
                case "ha":
                    f(a, "ha") }
            c && f(c, "dc");
            return e
        },
        Vk = function(a) { var b = Tk();
            Lk(function() { Uk(b, a) }) };

    function Uk(a, b, c, d) {
        function e(p, q) { var r = Wk(p, f);
            r && (Jj(r, q, g), h = !0) }
        b = b || {};
        d = d || []; var f = Rk(b.prefix);
        c = c || db(); var g = Rj(b, c, !0);
        g.Wa = "ad_storage"; var h = !1,
            l = Math.round(c / 1E3),
            m = function(p) { var q = ["GCL", l, p];
                0 < d.length && q.push(d.join(".")); return q.join(".") };
        a.aw && e("aw", m(a.aw[0]));
        a.dc && e("dc", m(a.dc[0]));
        a.gf && e("gf", m(a.gf[0]));
        a.ha && e("ha", m(a.ha[0]));
        a.gp && e("gp", m(a.gp[0]));
        (void 0 == Gk.enable_gbraid_cookie_write ? 0 : Gk.enable_gbraid_cookie_write) && !h && a.gb && e("gb", m(a.gb[0])) }
    var Yk = function(a, b) { var c = vk(!0);
            Lk(function() { for (var d = Rk(b.prefix), e = 0; e < a.length; ++e) { var f = a[e]; if (void 0 !== Jk[f]) { var g = Wk(f, d),
                            h = c[g]; if (h) { var l = Math.min(Xk(h), db()),
                                m;
                            b: { var p = l; if (xj(z))
                                    for (var q = Aj(g, I.cookie, void 0, "ad_storage"), r = 0; r < q.length; ++r)
                                        if (Xk(q[r]) > p) { m = !0; break b }
                                m = !1 }
                            if (!m) { var u = Rj(b, l, !0);
                                u.Wa = "ad_storage";
                                Jj(g, h, u) } } } }
                Uk(Sk(c.gclid, c.gclsrc), b) }) },
        Wk = function(a, b) { var c = Jk[a]; if (void 0 !== c) return b + c },
        Xk = function(a) {
            return 0 !== Zk(a.split(".")).length ? 1E3 * (Number(a.split(".")[1]) ||
                0) : 0
        };

    function Ok(a) { var b = Zk(a.split(".")); return 0 === b.length ? null : { version: b[0], Ca: b[2], timestamp: 1E3 * (Number(b[1]) || 0), labels: b.slice(3) } }

    function Zk(a) { return 3 > a.length || "GCL" !== a[0] && "1" !== a[0] || !/^\d+$/.test(a[1]) || !Ik.test(a[2]) ? [] : a }
    var $k = function(a, b, c, d, e) { if (La(b) && xj(z)) { var f = Rk(e),
                    g = function() { for (var h = {}, l = 0; l < a.length; ++l) { var m = Wk(a[l], f); if (m) { var p = Aj(m, I.cookie, void 0, "ad_storage");
                                p.length && (h[m] = p.sort()[p.length - 1]) } } return h };
                Lk(function() { Ck(g, b, c, d) }) } },
        Qk = function(a) { return a.filter(function(b) { return Ik.test(b.Ca) }) },
        al = function(a, b) {
            if (xj(z)) {
                for (var c = Rk(b.prefix), d = {}, e = 0; e < a.length; e++) Jk[a[e]] && (d[a[e]] = Jk[a[e]]);
                Lk(function() {
                    Wa(d, function(f, g) {
                        var h = Aj(c + g, I.cookie, void 0, "ad_storage");
                        h.sort(function(u,
                            t) { return Xk(t) - Xk(u) });
                        if (h.length) { var l = h[0],
                                m = Xk(l),
                                p = 0 !== Zk(l.split(".")).length ? l.split(".").slice(3) : [],
                                q = {},
                                r;
                            r = 0 !== Zk(l.split(".")).length ? l.split(".")[2] : void 0;
                            q[f] = [r];
                            Uk(q, b, m, p) }
                    })
                })
            }
        };

    function bl(a, b) { for (var c = 0; c < b.length; ++c)
            if (a[b[c]]) return !0;
        return !1 }
    var cl = function(a) {
        function b(e, f, g) { g && (e[f] = g) } if (eh()) { var c = Tk(); if (bl(c, a)) { var d = {};
                b(d, "gclid", c.gclid);
                b(d, "dclid", c.dclid);
                b(d, "gclsrc", c.gclsrc);
                b(d, "wbraid", c.gbraid);
                Dk(function() { return d }, 3);
                Dk(function() { var e = {}; return e._up = "1", e }, 1) } } };

    function dl(a, b) { var c = Rk(b),
            d = Wk(a, c); if (!d) return 0; for (var e = Mk(d), f = 0, g = 0; g < e.length; g++) f = Math.max(f, e[g].timestamp); return f }

    function el(a) { var b = 0,
            c; for (c in a)
            for (var d = a[c], e = 0; e < d.length; e++) b = Math.max(b, Number(d[e].timestamp)); return b };
    var fl = /^\d+\.fls\.doubleclick\.net$/;

    function gl(a, b) { dh(P.D) ? oh(P.D) ? a() : jh(a, P.D) : b ? Og(42) : uh(function() { gl(a, !0) }, [P.D]) }

    function hl(a) { var b = Th(z.location.href),
            c = Rh(b, "host", !1); if (c && c.match(fl)) { var d = Rh(b, "path").split(a + "="); if (1 < d.length) return d[1].split(";")[0].split("?")[0] } }

    function il(a, b, c) { if ("aw" === a || "dc" === a || "gb" === a) { var d = hl("gcl" + a); if (d) return d.split(".") } var e = Rk(b); if ("_gcl" == e) { c = void 0 === c ? !0 : c; var f = !oh(P.D) && c,
                g;
            g = Tk()[a] || []; if (0 < g.length) return f ? ["0"] : g } var h = Wk(a, e); return h ? Nk(h) : [] }
    var jl = function(a, b) { return il("aw", a, b) },
        kl = function(a, b) { return il("dc", a, b) };

    function ll(a) { var b = [];
        Wa(a, function(c, d) { d = Qk(d); for (var e = [], f = 0; f < d.length; f++) e.push(d[f].Ca);
            e.length && b.push(c + ":" + e.join(",")) }); return b.join(";") }
    var ml = function(a) { var b = hl("gac"); return b ? !oh(P.D) && a ? "0" : decodeURIComponent(b) : ll(Kk() ? Zj() : {}) },
        nl = function(a) { var b = hl("gacgb"); return b ? !oh(P.D) && a ? "0" : decodeURIComponent(b) : ll(Kk() ? Zj("_gac_gb", !0) : {}) },
        ol = function(a, b) {
            var c = Tk(),
                d = [],
                e = c.gclid,
                f = c.dclid,
                g = c.gclsrc || "aw";
            !e || "aw.ds" !== g && "aw" !== g && "ds" !== g || d.push({ Ca: e, Pe: g });
            f && d.push({ Ca: f, Pe: "ds" });
            gl(function() {
                Xj(b);
                var h = Tj[Uj(b.prefix)],
                    l = !1;
                if (h && 0 < d.length)
                    for (var m = Pi.joined_auid = Pi.joined_auid || {}, p = 0; p < d.length; p++) { var q = d[p],
                            r = q.Ca,
                            u = q.Pe,
                            t = (b.prefix || "_gcl") + "." + u + "." + r; if (!m[t]) { var v = "https://adservice.google.com/pagead/regclk";
                            v = "gb" === u ? v + "?gbraid=" + r + "&auid=" + h : v + "?gclid=" + r + "&auid=" + h + "&gclsrc=" + u;
                            sc(v);
                            l = m[t] = !0 } }
                null == a && (a = l);
                var w = !0;
                w = !1;
                if (w && a && h) { var y = Uj(b.prefix),
                        x = Tj[y];
                    x && Wj(y, x, b) }
            })
        },
        pl = function(a) { var b; if (hl("gclaw") || hl("gac") || 0 < (Tk().aw || []).length) b = !1;
            else { var c; if (0 < (Tk().gb || []).length) c = !0;
                else { var d = Math.max(dl("aw", a), el(Kk() ? Zj() : {}));
                    c = Math.max(dl("gb", a), el(Kk() ? Zj("_gac_gb", !0) : {})) > d }
                b = c } return b };
    var ql = /[A-Z]+/,
        rl = /\s/,
        sl = function(a) { if (n(a) && (a = bb(a), !rl.test(a))) { var b = a.indexOf("-"); if (!(0 > b)) { var c = a.substring(0, b); if (ql.test(c)) { for (var d = a.substring(b + 1).split("/"), e = 0; e < d.length; e++)
                            if (!d[e]) return;
                        return { id: a, prefix: c, containerId: c + "-" + d[0], O: d } } } } },
        ul = function(a) { for (var b = {}, c = 0; c < a.length; ++c) { var d = sl(a[c]);
                d && (b[d.id] = d) }
            tl(b); var e = [];
            Wa(b, function(f, g) { e.push(g) }); return e };

    function tl(a) { var b = [],
            c; for (c in a)
            if (a.hasOwnProperty(c)) { var d = a[c]; "AW" === d.prefix && d.O[1] && b.push(d.containerId) }
        for (var e = 0; e < b.length; ++e) delete a[b[e]] };
    var vl = function() { var a = !1; return a };
    var xl = function(a, b, c, d) { return (2 === wl() || d || "http:" != z.location.protocol ? a : b) + c },
        wl = function() { var a = fc(),
                b; if (1 === a) a: { var c = Vi;c = c.toLowerCase(); for (var d = "https://" + c, e = "http://" + c, f = 1, g = I.getElementsByTagName("script"), h = 0; h < g.length && 100 > h; h++) { var l = g[h].src; if (l) { l = l.toLowerCase(); if (0 === l.indexOf(e)) { b = 3; break a }
                        1 === f && 0 === l.indexOf(d) && (f = 2) } }
                b = f }
            else b = a; return b };
    var Jl = function(a, b) { var c = a ? tj(a) : z.enhanced_conversion_data,
            d = (a || {}).enhanced_conversions_mode; if (z.Promise) try { return c ? Ci(c, b).then(function(e) { e.Ge = d; return e }) : Promise.resolve({ Ic: "", wc: [], Ge: d }) } catch (e) {} };
    var Kl = function(a) { if (oh(P.D)) return a;
            a = a.replace(/&url=([^&#]+)/, function(b, c) { var d = Uh(decodeURIComponent(c)); return "&url=" + encodeURIComponent(d) });
            a = a.replace(/&ref=([^&#]+)/, function(b, c) { var d = Uh(decodeURIComponent(c)); return "&ref=" + encodeURIComponent(d) }); return a },
        Ll = function() {
            var a;
            if (!(a = Wi)) {
                var b;
                if (!0 === z._gtmdgs) b = !0;
                else {
                    var c = Zb && Zb.userAgent || "";
                    b = 0 > c.indexOf("Safari") || /Chrome|Coast|Opera|Edg|Silk|Android/.test(c) ||
                        11 > ((/Version\/([\d]+)/.exec(c) || [])[1] || "") ? !1 : !0
                }
                a = !b
            }
            if (a) return -1;
            var d = Za("1");
            return vj(1, 100) < d ? vj(2, 2) : -1
        },
        Ml = function(a) { var b; if (!a || !a.length) return; for (var c = [], d = 0; d < a.length; ++d) { var e = a[d];
                e && e.estimated_delivery_date ? c.push("" + e.estimated_delivery_date) : c.push("") }
            b = c.join(","); return b };
    var Nl = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),
        Ol = { cl: ["ecl"], customPixels: ["nonGooglePixels"], ecl: ["cl"], ehl: ["hl"], hl: ["ehl"], html: ["customScripts", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"], customScripts: ["html", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"], nonGooglePixels: [], nonGoogleScripts: ["nonGooglePixels"], nonGoogleIframes: ["nonGooglePixels"] },
        Pl = {
            cl: ["ecl"],
            customPixels: ["customScripts", "html"],
            ecl: ["cl"],
            ehl: ["hl"],
            hl: ["ehl"],
            html: ["customScripts"],
            customScripts: ["html"],
            nonGooglePixels: ["customPixels", "customScripts", "html", "nonGoogleScripts", "nonGoogleIframes"],
            nonGoogleScripts: ["customScripts", "html"],
            nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"]
        },
        Ql = "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
    var Rl = function() { var a = !1;
            a = !0; return a },
        Tl = function(a) {
            var b = hj("gtm.allowlist") || hj("gtm.whitelist");
            b && Og(9);
            Rl() && (b = "google gtagfl lcl zone oid op".split(" "));
            var c = b && ib(ab(b), Ol),
                d = hj("gtm.blocklist") ||
                hj("gtm.blacklist");
            d || (d = hj("tagTypeBlacklist")) && Og(3);
            d ? Og(8) : d = [];
            Sl() && (d = ab(d), d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
            0 <= Na(ab(d), "google") && Og(2);
            var e = d && ib(ab(d), Pl),
                f = {};
            return function(g) {
                var h = g && g[we.rb];
                if (!h || "string" != typeof h) return !0;
                h = h.replace(/^_*/, "");
                if (void 0 !== f[h]) return f[h];
                var l = aj[h] || [],
                    m = a(h, l);
                if (b) {
                    var p;
                    if (p =
                        m) a: { if (0 > Na(c, h))
                            if (l && 0 < l.length)
                                for (var q = 0; q < l.length; q++) { if (0 > Na(c, l[q])) { Og(11);
                                        p = !1; break a } } else { p = !1; break a }
                            p = !0 }
                    m = p
                }
                var r = !1;
                if (d) { var u = 0 <= Na(e, h); if (u) r = u;
                    else { var t = Ua(e, l || []);
                        t && Og(10);
                        r = t } }
                var v = !m || r;
                v || !(0 <= Na(l, "sandboxedScripts")) || c && -1 !== Na(c, "sandboxedScripts") || (v = Ua(e, Ql));
                return f[h] = v
            }
        },
        Sl = function() { return Nl.test(z.location && z.location.hostname) };
    var Ul = { active: !0, isAllowed: function() { return !0 } },
        Vl = function(a) { var b = Pi.zones; return b ? b.checkState(tf.N, a) : Ul },
        Wl = function(a) { var b = Pi.zones;!b && a && (b = Pi.zones = a()); return b };
    var Xl = function() {},
        Yl = function() {};
    var Zl = !1,
        $l = 0,
        am = [];

    function bm(a) { if (!Zl) { var b = I.createEventObject,
                c = "complete" == I.readyState,
                d = "interactive" == I.readyState; if (!a || "readystatechange" != a.type || c || !b && d) { Zl = !0; for (var e = 0; e < am.length; e++) J(am[e]) }
            am.push = function() { for (var f = 0; f < arguments.length; f++) J(arguments[f]); return 0 } } }

    function cm() { if (!Zl && 140 > $l) { $l++; try { I.documentElement.doScroll("left"), bm() } catch (a) { z.setTimeout(cm, 50) } } }
    var dm = function(a) { Zl ? a() : am.push(a) };
    var fm = function(a, b) { this.g = !1;
            this.F = [];
            this.H = { tags: [] };
            this.P = !1;
            this.s = this.B = 0;
            em(this, a, b) },
        gm = function(a, b, c, d) { if (Si.hasOwnProperty(b) || "__zone" === b) return -1; var e = {};
            Ic(d) && (e = N(d, e));
            e.id = c;
            e.status = "timeout"; return a.H.tags.push(e) - 1 },
        hm = function(a, b, c, d) { var e = a.H.tags[b];
            e && (e.status = c, e.executionTime = d) },
        im = function(a) { if (!a.g) { for (var b = a.F, c = 0; c < b.length; c++) b[c]();
                a.g = !0;
                a.F.length = 0 } },
        em = function(a, b, c) { Ia(b) && a.sc(b);
            c && z.setTimeout(function() { return im(a) }, Number(c)) };
    fm.prototype.sc = function(a) { var b = this,
            c = fb(function() { return J(function() { a(tf.N, b.H) }) });
        this.g ? c() : this.F.push(c) };
    var jm = function(a) { a.B++; return fb(function() { a.s++;
            a.P && a.s >= a.B && im(a) }) };
    var km = function() {
            function a(d) { return !Ja(d) || 0 > d ? 0 : d } if (!Pi._li && z.performance && z.performance.timing) { var b = z.performance.timing.navigationStart,
                    c = Ja(ij.get("gtm.start")) ? ij.get("gtm.start") : 0;
                Pi._li = { cst: a(c - b), cbt: a(Yi - b) } } },
        lm = function(a) { z.performance && z.performance.mark(tf.N + "_" + a + "_start") },
        mm = function(a) {
            if (z.performance) {
                var b = tf.N + "_" + a + "_start",
                    c = tf.N + "_" + a + "_duration";
                z.performance.measure(c, b);
                var d = z.performance.getEntriesByName(c)[0];
                z.performance.clearMarks(b);
                z.performance.clearMeasures(c);
                var e = Pi._p || {};
                void 0 === e[a] && (e[a] = d.duration, Pi._p = e);
                return d.duration
            }
        },
        nm = function() { if (z.performance && z.performance.now) { var a = Pi._p || {};
                a.PAGEVIEW = z.performance.now();
                Pi._p = a } };
    var om = {},
        pm = function() { return z.GoogleAnalyticsObject && z[z.GoogleAnalyticsObject] },
        qm = !1;
    var vm = function(a) {},
        um = function() { return z.GoogleAnalyticsObject || "ga" },
        wm = function(a, b) {
            return function() {
                var c = pm(),
                    d = c && c.getByName && c.getByName(a);
                if (d) {
                    var e = d.get("sendHitTask");
                    d.set("sendHitTask", function(f) {
                        var g = f.get("hitPayload"),
                            h = f.get("hitCallback"),
                            l = 0 > g.indexOf("&tid=" + b);
                        l && (f.set("hitPayload", g.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" +
                            b), !0), f.set("hitCallback", void 0, !0));
                        e(f);
                        l && (f.set("hitPayload", g, !0), f.set("hitCallback", h, !0), f.set("_x_19", void 0, !0), e(f))
                    })
                }
            }
        };
    var Dm = function(a) {},
        Hm = function(a) {},
        Im =
        function() { return "&tc=" + We.filter(function(a) { return a }).length },
        Lm = function() { 2022 <= Jm().length && Km() },
        Mm = function(a) { return 0 === a.indexOf("gtm.") ? encodeURIComponent(a) : "*" },
        Om = function() { Nm || (Nm = z.setTimeout(Km, 500)) },
        Km = function() { Nm && (z.clearTimeout(Nm), Nm = void 0);
            void 0 === Pm || Qm[Pm] && !Rm && !Sm || (Tm[Pm] || Um.Ri() || 0 >= Vm-- ? (Og(1), Tm[Pm] = !0) : (Um.kj(), hc(Jm(!0)), Qm[Pm] = !0, Wm = Xm = Ym = Sm = Rm = "")) },
        Jm = function(a) {
            var b = Pm;
            if (void 0 === b) return "";
            var c = Ga("GTM"),
                d = Ga("TAGGING");
            return [Zm, Qm[b] ? "" : "&es=1",
                $m[b], Dm(b), c ? "&u=" + c : "", d ? "&ut=" + d : "", Im(), Rm, Sm, Ym, Xm, Hm(a), Wm, "&z=0"
            ].join("")
        },
        bn = function() { Zm = an() },
        an = function() { return [Zi, "&v=3&t=t", "&pid=" + Ra(), "&rv=" + tf.qd].join("") },
        Gm = ["L", "S", "Y"],
        Cm = ["S", "E"],
        cn = { sampleRate: "0.005000", hh: "", gh: Number("5") },
        dn = 0 <= I.location.search.indexOf("?gtm_latency=") || 0 <= I.location.search.indexOf("&gtm_latency="),
        en;
    if (!(en = dn)) { var fn = Math.random(),
            gn = cn.sampleRate;
        en = fn < gn }
    var hn = en,
        jn = { label: tf.N + " Container", children: [{ label: "Initialization", children: [] }] },
        Zm = an(),
        Qm = {},
        Rm = "",
        Sm = "",
        Wm = "",
        Xm = "",
        Fm = {},
        Em = !1,
        Bm = {},
        kn = {},
        Ym = "",
        Pm = void 0,
        $m = {},
        Tm = {},
        Nm = void 0,
        ln = 5;
    0 < cn.gh && (ln = cn.gh);
    var Um = function(a, b) { for (var c = 0, d = [], e = 0; e < a; ++e) d.push(0); return { Ri: function() { return c < a ? !1 : db() - d[c % a] < b }, kj: function() { var f = c++ % a;
                    d[f] = db() } } }(ln, 1E3),
        Vm = 1E3,
        nn = function(a, b) {
            if (hn && !Tm[a] && Pm !==
                a) { Km();
                Pm = a;
                Wm = Rm = "";
                $m[a] = "&e=" + Mm(b) + "&eid=" + a;
                Om(); }
        },
        on = function(a, b, c, d) {
            if (hn && b) {
                var e, f = String(b[we.rb] || "").replace(/_/g, "");
                0 === f.indexOf("cvt") && (f = "cvt");
                e = f;
                var g = c + e;
                if (!Tm[a]) {
                    a !== Pm && (Km(), Pm = a);
                    Rm = Rm ? Rm + "." + g : "&tr=" + g;
                    var h = b["function"];
                    if (!h) throw Error("Error: No function name given for function call.");
                    var l = (Ye[h] ? "1" : "2") + e;
                    Wm = Wm ? Wm + "." + l : "&ti=" + l;
                    Om();
                    Lm()
                }
            }
        };
    var vn = function(a, b, c) { if (hn && !Tm[a]) { a !== Pm && (Km(), Pm = a); var d = c + b;
                Sm = Sm ? Sm + "." + d : "&epr=" + d;
                Om();
                Lm() } },
        wn = function(a, b, c) {};

    function xn(a, b, c, d) { var e = We[a],
            f = yn(a, b, c, d); if (!f) return null; var g = df(e[we.dg], c, []); if (g && g.length) { var h = g[0];
            f = xn(h.index, { onSuccess: f, onFailure: 1 === h.Bg ? b.terminate : f, terminate: b.terminate }, c, d) } return f }

    function yn(a, b, c, d) {
        function e() {
            if (f[we.ci]) h();
            else {
                var w = ef(f, c, []);
                var y = w[we.nh];
                if (null != y)
                    for (var x = 0; x < y.length; x++)
                        if (!oh(y[x])) { h(); return }
                var A = gm(c.eb, String(f[we.rb]), Number(f[we.eg]), w[we.di]),
                    B = !1;
                w.vtp_gtmOnSuccess = function() {
                    if (!B) {
                        B = !0;
                        var E = db() - C;
                        on(c.id, We[a], "5", E);
                        hm(c.eb, A, "success",
                            E);
                        g()
                    }
                };
                w.vtp_gtmOnFailure = function() { if (!B) { B = !0; var E = db() - C;
                        on(c.id, We[a], "6", E);
                        hm(c.eb, A, "failure", E);
                        h() } };
                w.vtp_gtmTagId = f.tag_id;
                w.vtp_gtmEventId = c.id;
                on(c.id, f, "1");
                var D = function() { var E = db() - C;
                    on(c.id, f, "7", E);
                    hm(c.eb, A, "exception", E);
                    B || (B = !0, h()) };
                var C = db();
                try { cf(w, c) } catch (E) { D(E) }
            }
        }
        var f = We[a],
            g = b.onSuccess,
            h = b.onFailure,
            l = b.terminate;
        if (c.We(f)) return null;
        var m = df(f[we.fg], c, []);
        if (m && m.length) { var p = m[0],
                q = xn(p.index, { onSuccess: g, onFailure: h, terminate: l }, c, d); if (!q) return null;
            g = q;
            h = 2 === p.Bg ? l : q }
        if (f[we.$f] || f[we.fi]) {
            var r = f[we.$f] ? Xe :
                c.uj,
                u = g,
                t = h;
            if (!r[a]) { e = fb(e); var v = zn(a, r, e);
                g = v.onSuccess;
                h = v.onFailure }
            return function() { r[a](u, t) }
        }
        return e
    }

    function zn(a, b, c) { var d = [],
            e = [];
        b[a] = An(d, e, c); return { onSuccess: function() { b[a] = Bn; for (var f = 0; f < d.length; f++) d[f]() }, onFailure: function() { b[a] = Cn; for (var f = 0; f < e.length; f++) e[f]() } } }

    function An(a, b, c) { return function(d, e) { a.push(d);
            b.push(e);
            c() } }

    function Bn(a) { a() }

    function Cn(a, b) { b() };
    var Fn = function(a, b) {
        for (var c = [], d = 0; d < We.length; d++)
            if (a[d]) { var e = We[d]; var f = jm(b.eb); try { var g = xn(d, { onSuccess: f, onFailure: f, terminate: f }, b, d); if (g) { var h = c,
                            l = h.push,
                            m = d,
                            p = e["function"]; if (!p) throw "Error: No function name given for function call."; var q = Ye[p];
                        l.call(h, { $g: m, Qg: q ? q.priorityOverride || 0 : 0, Rb: g }) } else Dn(d, b), f() } catch (t) { f() } }
        var r = b.eb;
        r.P = !0;
        r.s >= r.B && im(r);
        c.sort(En);
        for (var u = 0; u < c.length; u++) c[u].Rb();
        return 0 < c.length
    };

    function En(a, b) { var c, d = b.Qg,
            e = a.Qg;
        c = d > e ? 1 : d < e ? -1 : 0; var f; if (0 !== c) f = c;
        else { var g = a.$g,
                h = b.$g;
            f = g > h ? 1 : g < h ? -1 : 0 } return f }

    function Dn(a, b) { if (!hn) return; var c = function(d) { var e = b.We(We[d]) ? "3" : "4",
                f = df(We[d][we.dg], b, []);
            f && f.length && c(f[0].index);
            on(b.id, We[d], e); var g = df(We[d][we.fg], b, []);
            g && g.length && c(g[0].index) };
        c(a); }
    var Gn = !1,
        Mn = function(a) {
            var b = db(),
                c = a["gtm.uniqueEventId"],
                d = a.event;
            if ("gtm.js" === d) { if (Gn) return !1;
                Gn = !0; }
            var g = Vl(c),
                h = !1;
            if (!g.active) { if ("gtm.js" !== d) return !1;
                h = !0;
                g = Vl(Number.MAX_SAFE_INTEGER) }
            nn(c, d);
            var l = a.eventCallback,
                m = a.eventTimeout,
                p = l;
            var q = { id: c, name: d, We: Tl(g.isAllowed), uj: [], Mg: function() { Og(6) }, qg: Hn(c), eb: new fm(p, m) };
            q.pg = In();
            Jn(c, q.eb);
            var r = of(q);
            h && (r = Kn(r));
            var u = Fn(r, q);
            "gtm.js" !== d && "gtm.sync" !== d || vm(tf.N);
            switch (d) {
                case "gtm.init":
                    u && Og(20) }
            return Ln(r, u)
        };

    function Hn(a) { return function(b) { hn && (Mc(b) || wn(a, "input", b)) } }

    function Jn(a, b) { nj(a, "event", 1);
        nj(a, "ecommerce", 1);
        nj(a, "gtm");
        nj(a, "eventModel"); }

    function In() { var a = {};
        a.event = mj("event", 1);
        a.ecommerce = mj("ecommerce", 1);
        a.gtm = mj("gtm");
        a.eventModel = mj("eventModel"); return a }

    function Kn(a) { for (var b = [], c = 0; c < a.length; c++) a[c] && Ri[String(We[c][we.rb])] && (b[c] = !0); return b }

    function Ln(a, b) { if (!b) return b; for (var c = 0; c < a.length; c++)
            if (a[c] && We[c] && !Si[String(We[c][we.rb])]) return !0;
        return !1 }

    function Nn(a, b) { if (a) { var c = "" + a;
            0 !== c.indexOf("http://") && 0 !== c.indexOf("https://") && (c = "https://" + c); "/" === c[c.length - 1] && (c = c.substring(0, c.length - 1)); return Th("" + c + b).href } }

    function On(a, b) { return Pn() ? Nn(a, b) : void 0 }

    function Pn() { var a = !1; return a };
    var Qn;
    if (3 === tf.qd.length) Qn = "g";
    else { var Rn = "G";
        Rn = "g";
        Qn = Rn }
    var Sn = { "": "n", UA: "u", AW: "a", DC: "d", G: "e", GF: "f", HA: "h", GTM: Qn, OPT: "o" },
        Tn = function(a) { var b = tf.N.split("-"),
                c = b[0].toUpperCase(),
                d = Sn[c] || "i",
                e = a && "GTM" === c ? b[1] : "OPT" === c ? b[1] : "",
                f; if (3 === tf.qd.length) { var g = "w";
                g = vl() ? "s" : "o";
                f = "2" + g } else f = ""; return f + d + tf.qd + e };

    function Un(a, b) { if ("" === a) return b; var c = Number(a); return isNaN(c) ? b : c };
    var Vn = function(a, b) { a.addEventListener && a.addEventListener.call(a, "message", b, !1) };
    var Wn = function() { return Lb("iPhone") && !Lb("iPod") && !Lb("iPad") };
    Lb("Opera");
    Lb("Trident") || Lb("MSIE");
    Lb("Edge");
    !Lb("Gecko") || -1 != Ib.toLowerCase().indexOf("webkit") && !Lb("Edge") || Lb("Trident") || Lb("MSIE") || Lb("Edge"); - 1 != Ib.toLowerCase().indexOf("webkit") && !Lb("Edge") && Lb("Mobile");
    Lb("Macintosh");
    Lb("Windows");
    Lb("Linux") || Lb("CrOS");
    var Xn = pa.navigator || null;
    Xn && (Xn.appVersion || "").indexOf("X11");
    Lb("Android");
    Wn();
    Lb("iPad");
    Lb("iPod");
    Wn() || Lb("iPad") || Lb("iPod");
    Ib.toLowerCase().indexOf("kaios");
    var Yn = function(a, b) { for (var c = a, d = 0; 50 > d; ++d) { var e; try { e = !(!c.frames || !c.frames[b]) } catch (h) { e = !1 } if (e) return c; var f;
                a: { try { var g = c.parent; if (g && g != c) { f = g; break a } } catch (h) {}
                    f = null }
                if (!(c = f)) break } return null },
        Zn = function(a) { var b = I;
            b = void 0 === b ? window.document : b; if (!a || !b.head) return null; var c = document.createElement("meta");
            b.head.appendChild(c);
            c.httpEquiv = "origin-trial";
            c.content = a; return c };
    var $n = function() {};
    var ao = function(a) { void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
            void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0); return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3 },
        bo = function(a, b) { this.s = a;
            this.g = null;
            this.F = {};
            this.P = 0;
            this.H = void 0 === b ? 500 : b;
            this.B = null };
    oa(bo, $n);
    var eo = function(a) { return "function" === typeof a.s.__tcfapi || null != co(a) };
    bo.prototype.addEventListener = function(a) {
        var b = {},
            c = Tb(function() { return a(b) }),
            d = 0; - 1 !== this.H && (d = setTimeout(function() { b.tcString = "tcunavailable";
            b.internalErrorState = 1;
            c() }, this.H));
        var e = function(f, g) { clearTimeout(d);
            f ? (b = f, b.internalErrorState = ao(b), g && 0 === b.internalErrorState || (b.tcString = "tcunavailable", g || (b.internalErrorState = 3))) : (b.tcString = "tcunavailable", b.internalErrorState = 3);
            a(b) };
        try { fo(this, "addEventListener", e) } catch (f) {
            b.tcString = "tcunavailable", b.internalErrorState = 3, d && (clearTimeout(d),
                d = 0), c()
        }
    };
    bo.prototype.removeEventListener = function(a) { a && a.listenerId && fo(this, "removeEventListener", null, a.listenerId) };
    var ho = function(a, b, c) {
            var d;
            d = void 0 === d ? "755" : d;
            var e;
            a: { if (a.publisher && a.publisher.restrictions) { var f = a.publisher.restrictions[b]; if (void 0 !== f) { e = f[void 0 === d ? "755" : d]; break a } }
                e = void 0 }
            var g = e;
            if (0 === g) return !1;
            var h = c;
            2 === c ? (h = 0, 2 === g && (h = 1)) : 3 === c && (h = 1, 1 === g && (h = 0));
            var l;
            if (0 === h)
                if (a.purpose && a.vendor) { var m = go(a.vendor.consents, void 0 === d ? "755" : d);
                    l = m && "1" === b && a.purposeOneTreatment && ("DE" === a.publisherCC || Ug(Qg) && "CH" === a.publisherCC) ? !0 : m && go(a.purpose.consents, b) } else l = !0;
            else l =
                1 === h ? a.purpose && a.vendor ? go(a.purpose.legitimateInterests, b) && go(a.vendor.legitimateInterests, void 0 === d ? "755" : d) : !0 : !0;
            return l
        },
        go = function(a, b) { return !(!a || !a[b]) },
        fo = function(a, b, c, d) { c || (c = function() {}); if ("function" === typeof a.s.__tcfapi) { var e = a.s.__tcfapi;
                e(b, 2, c, d) } else if (co(a)) { io(a); var f = ++a.P;
                a.F[f] = c; if (a.g) { var g = {};
                    a.g.postMessage((g.__tcfapiCall = { command: b, version: 2, callId: f, parameter: d }, g), "*") } } else c({}, !1) },
        co = function(a) { if (a.g) return a.g;
            a.g = Yn(a.s, "__tcfapiLocator"); return a.g },
        io = function(a) { a.B || (a.B = function(b) { try { var c;
                    c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                    a.F[c.callId](c.returnValue, c.success) } catch (d) {} }, Vn(a.s, a.B)) };
    var jo = !0;
    jo = !1;
    var ko = { 1: 0, 3: 0, 4: 0, 7: 3, 9: 3, 10: 3 },
        lo = Un("", 550),
        mo = Un("", 500);

    function no() { var a = Pi.tcf || {}; return Pi.tcf = a }
    var oo = function(a, b) { this.B = a;
            this.g = b;
            this.s = db(); var c = "x"; "function" === typeof z.__tcfapi ? c = "s" : eo(this.B) ? c = "i" : "function" === typeof z.__cmp ? c = "c" : Yn(z, "__cmpLocator") && (c = "d");
            this.g.type = c; },
        po = function(a) { void 0 === a.g.loadTime && (a.g.loadTime = db() - a.s); },
        qo = function(a) {
            void 0 !== a.g.loadTime && (a.g.loadTime = 0);
        },
        wo = function() {
            var a = no(),
                b = new bo(z, jo ? 3E3 : -1),
                c = new oo(b, a);
            if ((ro() ? !0 === z.gtag_enable_tcf_support : !1 !== z.gtag_enable_tcf_support) && !a.active && ("function" === typeof z.__tcfapi || eo(b))) {
                a.active = !0;
                a.Mc = {};
                so();
                var d = null;
                jo ? d = z.setTimeout(function() { to(a);
                    uo(a);
                    d = null }, mo) : a.tcString = "tcunavailable";
                try {
                    b.addEventListener(function(e) {
                        d && (clearTimeout(d), d = null);
                        if (0 !== e.internalErrorState) to(a), uo(a), po(c);
                        else {
                            var f;
                            a.gdprApplies = e.gdprApplies;
                            if (!1 === e.gdprApplies) f = vo(), b.removeEventListener(e);
                            else if ("tcloaded" === e.eventStatus || "useractioncomplete" === e.eventStatus || "cmpuishown" === e.eventStatus) {
                                var g = {},
                                    h;
                                for (h in ko)
                                    if (ko.hasOwnProperty(h))
                                        if ("1" === h) {
                                            var l, m = e,
                                                p = !0;
                                            p = void 0 === p ? !1 : p;
                                            var q;
                                            var r = m;
                                            !1 === r.gdprApplies ? q = !0 : (void 0 === r.internalErrorState && (r.internalErrorState = ao(r)), q = "error" === r.cmpStatus || 0 !== r.internalErrorState || "loaded" === r.cmpStatus && ("tcloaded" === r.eventStatus || "useractioncomplete" ===
                                                r.eventStatus) ? !0 : !1);
                                            l = q ? !1 === m.gdprApplies || "tcunavailable" === m.tcString || void 0 === m.gdprApplies && !p || "string" !== typeof m.tcString || !m.tcString.length ? !0 : ho(m, "1", 0) : !1;
                                            g["1"] = l
                                        } else g[h] = ho(e, h, ko[h]);
                                f = g
                            }
                            f && (a.tcString = e.tcString || "tcempty", a.Mc = f, uo(a), po(c))
                        }
                    }), qo(c)
                } catch (e) { d && (clearTimeout(d), d = null), to(a), uo(a) }
            }
        };

    function to(a) { a.type = "e";
        a.tcString = "tcunavailable";
        jo && (a.Mc = vo()) }

    function so() { var a = {},
            b = (a.ad_storage = "denied", a.wait_for_update = lo, a);
        mh(b) }
    var ro = function() { var a = !1;
        a = !0; return a };

    function vo() { var a = {},
            b; for (b in ko) ko.hasOwnProperty(b) && (a[b] = !0); return a }

    function uo(a) { var b = {},
            c = (b.ad_storage = a.Mc["1"] ? "granted" : "denied", b);
        xo();
        nh(c, 0) }
    var yo = function() { var a = no(); if (a.active && void 0 !== a.loadTime) return Number(a.loadTime) },
        xo = function() { var a = no(); return a.active ? a.tcString || "" : "" },
        zo = function() { var a = no(); return a.active && void 0 !== a.gdprApplies ? a.gdprApplies ? "1" : "0" : "" },
        Ao = function(a) { if (!ko.hasOwnProperty(String(a))) return !0; var b = no(); return b.active && b.Mc ? !!b.Mc[String(a)] : !0 };

    function Bo(a) { var b = String(z.location).split(/[?#]/)[0],
            c = tf.ph || z._CONSENT_MODE_SALT,
            d; if (a) { var e; if (c) { var f = b + a + c,
                    g = 1,
                    h, l, m; if (f)
                    for (g = 0, l = f.length - 1; 0 <= l; l--) m = f.charCodeAt(l), g = (g << 6 & 268435455) + m + (m << 14), h = g & 266338304, g = 0 != h ? g ^ h >> 21 : g;
                e = String(g) } else e = "0";
            d = e } else d = ""; return d }

    function Co(a) {
        function b(t) {
            var v;
            Pi.reported_gclid || (Pi.reported_gclid = {});
            v = Pi.reported_gclid;
            var w;
            w = !g || eh() && !oh(P.D) ? l + (t ? "gcu" : "gcs") : l + "." + (f.prefix || "_gcl") + (t ? "gcu" : "gcs");
            if (!v[w]) {
                v[w] = !0;
                var y = [],
                    x = {},
                    A = function(Q, M) { M && (y.push(Q + "=" + encodeURIComponent(M)), x[Q] = !0) },
                    B = "https://www.google.com";
                if (eh()) {
                    var D = oh(P.D);
                    A("gcs", ph());
                    t && A("gcu", "1");
                    fh() && A("gcd", "G1" + kh(ch));
                    Pi.dedupe_gclid ||
                        (Pi.dedupe_gclid = "" + Mj());
                    A("rnd", Pi.dedupe_gclid);
                    if ((!l || m && "aw.ds" !== m) && oh(P.D)) { var C = Nk("_gcl_aw");
                        A("gclaw", C.join(".")) }
                    A("url", String(z.location).split(/[?#]/)[0]);
                    A("dclid", Do(d, p));
                    var E = !1;
                    E = !0;
                    D || !d && !E || (B = "https://pagead2.googlesyndication.com")
                }
                A("gdpr_consent", xo()), A("gdpr", zo());
                "1" === vk(!1)._up && A("gtm_up", "1");
                A("gclid", Do(d, l));
                A("gclsrc", m);
                if (!(x.gclid || x.dclid || x.gclaw) && (A("gbraid", Do(d, q)), !x.gbraid && eh() && oh(P.D))) { var F = Nk("_gcl_gb");
                    A("gclgb", F.join(".")) }
                A("gtm", Tn(!e));
                g && oh(P.D) && (Xj(f || {}), A("auid", Tj[Uj(f.prefix)] || ""));
                a.xg && A("did", a.xg);
                var S = B + "/pagead/landing?" + y.join("&");
                sc(S)
            }
        }
        var c = !!a.He,
            d = !!a.va,
            e = a.W,
            f = void 0 === a.wd ? {} : a.wd,
            g = void 0 === a.Cd ? !0 : a.Cd,
            h = Tk(),
            l = h.gclid || "",
            m = h.gclsrc,
            p = h.dclid || "",
            q = h.gbraid || "",
            r = !c && ((!l || m && "aw.ds" !== m ? !1 : !0) || q),
            u = eh();
        if (r || u) u ? uh(function() { b();
            oh(P.D) || rh(function(t) { return b(!0, t.wi) }, P.D) }, [P.D]) : b()
    }

    function Do(a, b) { var c = a && !oh(P.D); return b && c ? "0" : b }
    var Eo = function() { this.g = {} },
        Fo = function(a, b, c) { null != c && (a.g[b] = c) },
        Go = function(a) { return Object.keys(a.g).map(function(b) { return encodeURIComponent(b) + "=" + encodeURIComponent(a.g[b]) }).join("&") },
        Io = function(a, b, c, d) {};
    var Ko = !1,
        Lo = Number("200");

    function Mo() { if (!z.Promise) return !1;
        Ia(I.interestCohort) || Ko || (Ko = !0, Zn("A489+ZNTpP/HCOD+k3I13nobRVH7eyh5fz5LGhYvQlNf9WauHk/0awCtXOEoWTIK9JN8bgzgn2SfPdaFXe5O9QkAAACKeyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiSW50ZXJlc3RDb2hvcnRBUEkiLCJleHBpcnkiOjE2MjYyMjA3OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9")); return Ia(I.interestCohort) }

    function No() { var a = Pi.floc; if (a) { var b = a.ts,
                c = a.floc; if (b && c && 1E3 > db() - b) return Promise.resolve(c) } var d = void 0; try { d = Promise.race([I.interestCohort().then(function(e) { Pi.floc = { ts: db(), floc: e }; return e }), new Promise(function(e) { z.setTimeout(function() { return e() }, Lo) })]).catch(function() {}) } catch (e) { return } return d }
    var Oo = ["aw", "dc", "gb"];

    function Po(a, b, c, d) { var e = a.fh,
            f = a.callback,
            g = a.Ng; if ("function" === typeof f)
            if (e === P.Sd && void 0 === g) { var h = d(b.prefix, c);
                0 === h.length ? f(void 0) : 1 === h.length ? f(h[0]) : f(h) } else e === P.Eh ? (Xj(b, !1), f(Tj[Uj(b.prefix)])) : f(g) }

    function Qo(a, b) { var c = a.ug,
            d = a.Lg,
            e = a.bh; if (a.Qb) { var f = void 0 === c ? !0 : !!c;
            Fk(d[P.Ib], !!d[P.R]) && Yk(Oo, b);
            Vk(b);
            al(Oo, b);
            ol(f, b) }
        d[P.R] && $k(Oo, d[P.R], d[P.fc], !!d[P.Jb], b.prefix);
        e && cl(["aw", "dc", "gb"]) };
    var Kp = function() { var a = !0;
            Ao(7) && Ao(9) && Ao(10) || (a = !1); var b = !0;
            b = !1;
            b && !Jp() && (a = !1); return a },
        Jp = function() { var a = !0;
            Ao(3) && Ao(4) || (a = !1); return a };
    var pq = !1;
    var qq = !1;
    qq = !0;

    function rq() { var a = Pi; return a.gcq = a.gcq || new sq }
    var tq = function(a, b, c) { rq().register(a, b, c) },
        uq = function(a, b, c, d) { rq().push("event", [b, a], c, d) },
        vq = function(a, b) { rq().push("config", [a], b) },
        wq = function(a, b, c, d) { rq().push("get", [a, b], c, d) },
        xq = function(a) { return rq().getRemoteConfig(a) },
        yq = {},
        zq = function() { this.status = 1;
            this.containerConfig = {};
            this.targetConfig = {};
            this.remoteConfig = {};
            this.s = {};
            this.B = null;
            this.g = !1 },
        Aq = function(a, b, c, d, e) { this.type = a;
            this.B = b;
            this.W = c || "";
            this.g = d;
            this.s = e },
        sq = function() {
            this.s = {};
            this.B = {};
            this.g = [];
            this.F = {
                AW: !1,
                UA: !1
            };
            this.enableDeferrableCommandAfterConfig = pq
        },
        Bq = function(a, b) { var c = sl(b); return a.s[c.containerId] = a.s[c.containerId] || new zq },
        Cq = function(a, b, c) { if (b) { var d = sl(b); if (d && 1 === Bq(a, b).status) { Bq(a, b).status = 2; var e = {};
                    hn && (e.timeoutId = z.setTimeout(function() { Og(38);
                        Om() }, 3E3));
                    a.push("require", [e], d.containerId);
                    yq[d.containerId] = db(); if (vl()) {} else { var g = "/gtag/js?id=" + encodeURIComponent(d.containerId) + "&l=dataLayer&cx=c",
                            h = ("http:" != z.location.protocol ? "https:" : "http:") + ("//www.googletagmanager.com" + g),
                            l = On(c, g) || h;
                        ec(l) } } } },
        Dq = function(a, b, c, d) {
            if (d.W) {
                var e = Bq(a, d.W),
                    f = e.B;
                if (f) {
                    var g = N(c),
                        h = N(e.targetConfig[d.W]),
                        l = N(e.containerConfig),
                        m = N(e.remoteConfig),
                        p = N(a.B),
                        q = hj("gtm.uniqueEventId"),
                        r = sl(d.W).prefix,
                        u = fb(function() {
                            var v =
                                g[P.Hb];
                            v && J(v)
                        }),
                        t = Li(Ki(Mi(Ji(Ii(Hi(Gi(Fi(Ei(g), h), l), m), p), function() { vn(q, r, "2");
                            qq && u() }), function() { vn(q, r, "3");
                            qq && u() }), function(v, w) { a.F[v] = w }), function(v) { return a.F[v] });
                    try { vn(q, r, "1");
                        f(d.W, b, d.B, t) } catch (v) { vn(q, r, "4"); }
                }
            }
        };
    sq.prototype.register = function(a, b, c) {
        var d = Bq(this, a);
        if (3 !== d.status) {
            d.B = b;
            d.status = 3;
            if (c) { N(d.remoteConfig, c);
                d.remoteConfig = c }
            var e = sl(a),
                f = yq[e.containerId];
            if (void 0 !== f) {
                var g = Pi[e.containerId].bootstrap,
                    h = e.prefix.toUpperCase();
                Pi[e.containerId]._spx && (h = h.toLowerCase());
                var l = hj("gtm.uniqueEventId"),
                    m = h,
                    p = db() - g;
                if (hn && !Tm[l]) {
                    l !== Pm && (Km(), Pm = l);
                    var q = m + "." + Math.floor(g -
                        f) + "." + Math.floor(p);
                    Xm = Xm ? Xm + "," + q : "&cl=" + q
                }
                delete yq[e.containerId]
            }
            this.flush()
        }
    };
    sq.prototype.push = function(a, b, c, d) { var e = Math.floor(db() / 1E3);
        Cq(this, c, b[0][P.ra] || this.B[P.ra]);
        pq && c && Bq(this, c).g && (d = !1);
        this.g.push(new Aq(a, e, c, b, d));
        d || this.flush() };
    sq.prototype.insert = function(a, b, c) { var d = Math.floor(db() / 1E3);
        0 < this.g.length ? this.g.splice(1, 0, new Aq(a, d, c, b, !1)) : this.g.push(new Aq(a, d, c, b, !1)) };
    sq.prototype.flush = function(a) {
        for (var b = this, c = [], d = !1, e = {}; this.g.length;) {
            var f = this.g[0];
            if (f.s) pq ? !f.W || Bq(this, f.W).g ? (f.s = !1, this.g.push(f)) : c.push(f) : (f.s = !1, this.g.push(f)), this.g.shift();
            else {
                switch (f.type) {
                    case "require":
                        if (3 !== Bq(this, f.W).status && !a) { pq && this.g.push.apply(this.g, c); return }
                        hn && z.clearTimeout(f.g[0].timeoutId);
                        break;
                    case "set":
                        Wa(f.g[0], function(r, u) { N(kb(r, u), b.B) });
                        break;
                    case "config":
                        e.Ma = {};
                        Wa(f.g[0], function(r) { return function(u, t) { N(kb(u, t), r.Ma) } }(e));
                        var g = !!e.Ma[P.hd];
                        delete e.Ma[P.hd];
                        var h = Bq(this, f.W),
                            l = sl(f.W),
                            m = l.containerId === l.id;
                        g || (m ? h.containerConfig = {} : h.targetConfig[f.W] = {});
                        h.g && g || Dq(this, P.Ga, e.Ma, f);
                        h.g = !0;
                        delete e.Ma[P.mc];
                        m ? N(e.Ma, h.containerConfig) : N(e.Ma, h.targetConfig[f.W]);
                        pq && (d = !0);
                        break;
                    case "event":
                        e.Sc = {};
                        Wa(f.g[0], function(r) { return function(u, t) { N(kb(u, t), r.Sc) } }(e));
                        Dq(this, f.g[1], e.Sc, f);
                        break;
                    case "get":
                        var p = {},
                            q = (p[P.Qa] = f.g[0], p[P.Za] = f.g[1], p);
                        Dq(this, P.Oa, q, f)
                }
                this.g.shift();
                Eq(this, f)
            }
            e = { Ma: e.Ma, Sc: e.Sc }
        }
        pq && (this.g.push.apply(this.g,
            c), d && this.flush())
    };
    var Eq = function(a, b) { if ("require" !== b.type)
            if (b.W)
                for (var c = a.getCommandListeners(b.W)[b.type] || [], d = 0; d < c.length; d++) c[d]();
            else
                for (var e in a.s)
                    if (a.s.hasOwnProperty(e)) { var f = a.s[e]; if (f && f.s)
                            for (var g = f.s[b.type] || [], h = 0; h < g.length; h++) g[h]() } };
    sq.prototype.getRemoteConfig = function(a) { return Bq(this, a).remoteConfig };
    sq.prototype.getCommandListeners = function(a) { return Bq(this, a).s };

    function Fq(a, b) { var c = this; };

    function Gq(a, b, c) {};

    function Hq(a, b, c, d) {};

    function Iq(a) {};
    var Jq = function(a, b, c) { var d = { event: b, "gtm.element": a, "gtm.elementClasses": tc(a, "className"), "gtm.elementId": a["for"] || kc(a, "id") || "", "gtm.elementTarget": a.formTarget || tc(a, "target") || "" };
            c && (d["gtm.triggers"] = c.join(","));
            d["gtm.elementUrl"] = (a.attributes && a.attributes.formaction ? a.formAction : "") || a.action || tc(a, "href") || a.src || a.code || a.codebase || ""; return d },
        Kq = function(a) {
            Pi.hasOwnProperty("autoEventsSettings") || (Pi.autoEventsSettings = {});
            var b = Pi.autoEventsSettings;
            b.hasOwnProperty(a) || (b[a] = {});
            return b[a]
        },
        Lq = function(a, b, c) { Kq(a)[b] = c },
        Mq = function(a, b, c, d) { var e = Kq(a),
                f = eb(e, b, d);
            e[b] = c(f) },
        Nq = function(a, b, c) { var d = Kq(a); return eb(d, b, c) };
    var Oq = ["input", "select", "textarea"],
        Pq = ["button", "hidden", "image", "reset", "submit"],
        Qq = function(a) { var b = a.tagName.toLowerCase(); return !Oa(Oq, function(c) { return c === b }) || "input" === b && Oa(Pq, function(c) { return c === a.type.toLowerCase() }) ? !1 : !0 },
        Rq = function(a) { return a.form ? a.form.tagName ? a.form : I.getElementById(a.form) : rc(a, ["form"], 100) },
        Sq = function(a, b, c) { if (!a.elements) return 0; for (var d = b.dataset[c], e = 0, f = 1; e < a.elements.length; e++) { var g = a.elements[e]; if (Qq(g)) { if (g.dataset[c] === d) return f;
                    f++ } } return 0 };

    function Wq(a) {};
    var Xq = {},
        Yq = [],
        Zq = {},
        $q = 0,
        ar = 0;

    function hr(a, b) {}

    function pr(a, b) {};
    var qr = /^((.+)\.)?send$/,
        rr = { pageview: ["page"], event: ["eventCategory", "eventAction", "eventLabel", "eventValue"], social: ["socialNetwork", "socialAction", "socialTarget"], timing: ["timingCategory", "timingVar", "timingValue", "timingLabel"] };

    function sr(a) { O(H(this), ["dustCallback:!Fn"], arguments);
        wg(this, "access_globals", "readwrite", "ga.q");
        wg(this, "access_globals", "execute", "ga.q"); if (z.ga && tr()) { var b = Kc(a);
            J(function() { for (var c = z.ga.q, d = 0; d < c.length; d++) { var e = ur(c[d]);
                    null !== e && b(e.Hg, e.Ag) } var f = c.push;
                window.ga.q.push = function() { var g = [].slice.call(arguments, 0);
                    f.apply(c, g); var h = ur.apply(this, g);
                    null !== h && b(h.Hg, h.Ag) } }) } }

    function ur(a) { if (!qr.exec(a[0])) return null; var b, c;
        n(a[1]) ? (b = a[1], c = [].slice.call(a, 2)) : (b = a[1] && a[1].hitType, c = [].slice.call(a, 1)); if (!b) return null; var d; var e = rr[b],
            f = c; if (1 == f.length && null != f[0] && "object" === typeof f[0]) d = f[0];
        else { for (var g = {}, h = Math.min(e.length + 1, f.length), l = 0; l < h; l++)
                if ("object" === typeof f[l]) { for (var m in f[l]) f[l].hasOwnProperty(m) && (g[m] = f[l][m]); break } else l < e.length && (g[e[l]] = f[l]);
            d = g } var p = d;
        p.hitType = b; return { Hg: b, Ag: p } }

    function tr() { var a = z.ga.q; return null != a && void 0 !== a.length && Ia(a.push) };
    var vr = {},
        wr = [];
    var Dr = function(a, b) {};

    function Gr(a, b) {};
    var Hr = /^\s*$/,
        Ir, Jr = !1;

    function Ur(a, b) {}

    function Vr(a, b, c) {};
    var Wr = !!z.MutationObserver,
        Xr = void 0,
        Yr = function(a) { if (!Xr) { var b = function() { var c = I.body; if (c)
                        if (Wr)(new MutationObserver(function() { for (var e = 0; e < Xr.length; e++) J(Xr[e]) })).observe(c, { childList: !0, subtree: !0 });
                        else { var d = !1;
                            ic(c, "DOMNodeInserted", function() { d || (d = !0, J(function() { d = !1; for (var e = 0; e < Xr.length; e++) J(Xr[e]) })) }) } };
                Xr = [];
                I.body ? b() : J(b) }
            Xr.push(a) };
    var Zr = function(a, b, c) {
        function d() { var g = a();
            f += e ? (db() - e) * g.playbackRate / 1E3 : 0;
            e = db() }
        var e = 0,
            f = 0;
        return {
            createEvent: function(g, h, l) {
                var m = a(),
                    p = m.Me,
                    q = void 0 !== l ? Math.round(l) : void 0 !== h ? Math.round(m.Me * h) : Math.round(m.wg),
                    r = void 0 !== h ? Math.round(100 * h) : 0 >= p ? 0 : Math.round(q / p * 100),
                    u = I.hidden ? !1 : .5 <= Gh(c);
                d();
                var t = void 0;
                void 0 !== b && (t = [b]);
                var v = Jq(c, "gtm.video", t);
                v["gtm.videoProvider"] = "youtube";
                v["gtm.videoStatus"] = g;
                v["gtm.videoUrl"] = m.url;
                v["gtm.videoTitle"] = m.title;
                v["gtm.videoDuration"] =
                    Math.round(p);
                v["gtm.videoCurrentTime"] = Math.round(q);
                v["gtm.videoElapsedTime"] = Math.round(f);
                v["gtm.videoPercent"] = r;
                v["gtm.videoVisible"] = u;
                return v
            },
            Ug: function() { e = db() },
            Pb: function() { d() }
        }
    };
    var $r = ["www.youtube.com", "www.youtube-nocookie.com"],
        as, bs = !1,
        cs = 0;

    function ms(a, b) {}

    function ns(a, b) { return !0 };

    function os(a, b, c) {
        O(H(this), ["targetId:!string", "name:!string", "value:!*"], arguments);
        for (var d = b.split("."), e = xq(a), f = 0; f < d.length - 1; f++) { if (void 0 === e[d[f]]) e[d[f]] = {};
            else if (!Ic(e[d[f]])) throw Error("apendRemoteConfigParameter failed, path contains a non-object type: " + d[f]);
            e = e[d[f]] }
        if (void 0 === e[d[f]]) e[d[f]] = [];
        else if (!La(e[d[f]])) throw Error("appendRemoteConfigParameter failed, destination is not an array: " +
            d[f]);
        e[d[f]].push(Kc(c, this.g));
    };

    function ps(a, b) { var c; return c };

    function qs(a) {};

    function rs(a) {};
    var ss = !1,
        ts = [];

    function us() { if (!ss) { ss = !0; for (var a = 0; a < ts.length; a++) J(ts[a]) } }
    var vs = function(a) { ss ? J(a) : ts.push(a) };

    function ws(a) { O(H(this), ["listener:!Fn"], arguments);
        wg(this, "process_dom_events", "window", "load");
        vs(Kc(a)) };

    function xs(a) { var b; return b };

    function ys(a, b) { var c; var d = !1; var e = Jc(c, this.g, d);
        void 0 === e && void 0 !== c && Og(45); return e };

    function zs(a) { var b; return b };

    function As(a, b) { var c = null,
            d = !1; return Jc(c, this.g, d) };

    function Bs(a) { var b; var g = !1; return Jc(b, this.g, g) };

    function Cs(a, b) { a = String(a);
        b = String(b); var c = a.length - b.length; return 0 <= c && a.indexOf(b, c) == c }
    var Ds = new Sa;

    function Es(a, b, c) { var d = c ? "i" : void 0; try { var e = String(b) + d,
                f = Ds.get(e);
            f || (f = new RegExp(b, d), Ds.set(e, f)); return f.test(a) } catch (g) { return !1 } }

    function Fs(a, b) {
        function c(g) { var h = Th(g),
                l = Rh(h, "protocol"),
                m = Rh(h, "host", !0),
                p = Rh(h, "port"),
                q = Rh(h, "path").toLowerCase().replace(/\/$/, ""); if (void 0 === l || "http" == l && "80" == p || "https" == l && "443" == p) l = "web", p = "default"; return [l, m, p, q] } for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
            if (d[f] !== e[f]) return !1;
        return !0 }

    function Gs(a) { return Hs(a) ? 1 : 0 }

    function Hs(a) {
        var b = a.arg0,
            c = a.arg1;
        if (a.any_of && La(c)) { for (var d = 0; d < c.length; d++) { var e = N(a, {});
                N({ arg1: c[d], any_of: void 0 }, e); if (Gs(e)) return !0 } return !1 }
        switch (a["function"]) {
            case "_cn":
                return 0 <= String(b).indexOf(String(c));
            case "_css":
                var f;
                a: { if (b) { var g = ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"]; try { for (var h = 0; h < g.length; h++)
                                if (b[g[h]]) { f = b[g[h]](c); break a } } catch (m) {} }
                    f = !1 }
                return f;
            case "_ew":
                return Cs(b, c);
            case "_eq":
                return String(b) ==
                    String(c);
            case "_ge":
                return Number(b) >= Number(c);
            case "_gt":
                return Number(b) > Number(c);
            case "_lc":
                var l;
                l = String(b).split(",");
                return 0 <= Na(l, String(c));
            case "_le":
                return Number(b) <= Number(c);
            case "_lt":
                return Number(b) < Number(c);
            case "_re":
                return Es(b, c, a.ignore_case);
            case "_sw":
                return 0 == String(b).indexOf(String(c));
            case "_um":
                return Fs(b, c)
        }
        return !1
    };

    function Is(a) { return !1 }
    var Js;

    function Ks(a) { var b = !1; return b };
    var Ls = function(a) { var b; return b };

    function Ms(a, b) { b = void 0 === b ? !0 : b; var c; return c };

    function Ns(a) { var b = null; return b };

    function Os(a, b) { var c; return c };

    function Ps(a, b) { var c; return c };

    function Qs(a, b) { var c; return c };

    function Rs(a) { var b = ""; return b };

    function Ss(a, b) { var c; return c };

    function Ts(a) { var b = ""; return b };

    function Us() { wg(this, "get_user_agent"); return z.navigator.userAgent };

    function Vs(a, b) {};
    var Ws = {};

    function Xs(a, b, c, d, e, f) { f ? e[f] ? (e[f][0].push(c), e[f][1].push(d)) : (e[f] = [
            [c],
            [d]
        ], ec(a, function() { for (var g = e[f][0], h = 0; h < g.length; h++) J(g[h]);
            g.push = function(l) { J(l); return 0 } }, function() { for (var g = e[f][1], h = 0; h < g.length; h++) J(g[h]);
            e[f] = null }, b)) : ec(a, c, d, b) }

    function Ys(a, b, c, d) {}
    var Zs = Object.freeze({ dl: 1, id: 1 }),
        $s = {};

    function at(a, b, c, d) {};

    function bt(a) { var b = !0; return b };
    var ct = function() { return !1 },
        dt = {
            getItem: function(a) { var b = null; return b },
            setItem: function(a,
                b) { return !1 },
            removeItem: function(a) {}
        };
    var et = ["textContent", "value", "tagName", "children", "childElementCount"];

    function ft(a) { var b; return b };

    function gt() {};

    function ht(a, b) { var c; return c };

    function it(a) { var b = void 0; return b };

    function jt(a, b) { var c = !1; return c };

    function kt() { var a = ""; return a };

    function lt() { var a = ""; return a };
    var mt = ["set", "get", "config", "event"];

    function nt(a, b, c) {};

    function ot() {};

    function pt(a, b, c, d) { d = void 0 === d ? !1 : d; };

    function qt(a, b, c) {};

    function rt(a, b, c, d) { var e = this;
        d = void 0 === d ? !0 : d; var f = !1; return f };

    function st(a) { O(H(this), ["consentSettings:!DustMap"], arguments); for (var b = a.sb(), c = b.length(), d = 0; d < c; d++) { var e = b.get(d);
            e !== P.Pd && wg(this, "access_consent", e, "write") }
        mh(Kc(a)) };

    function tt(a, b, c) { return !1 };

    function ut(a, b, c) {};

    function vt(a, b, c) {};
    var wt = function(a) { for (var b = [], c = 0, d = 0; d < a.length; d++) { var e = a.charCodeAt(d);
            128 > e ? b[c++] = e : (2048 > e ? b[c++] = e >> 6 | 192 : (55296 == (e & 64512) && d + 1 < a.length && 56320 == (a.charCodeAt(d + 1) & 64512) ? (e = 65536 + ((e & 1023) << 10) + (a.charCodeAt(++d) & 1023), b[c++] = e >> 18 | 240, b[c++] = e >> 12 & 63 | 128) : b[c++] = e >> 12 | 224, b[c++] = e >> 6 & 63 | 128), b[c++] = e & 63 | 128) } return b };

    function xt(a, b, c, d) { var e = this; };

    function yt(a, b, c) {};
    var zt = {},
        At = {};
    zt.getItem = function(a) { var b = null; return b };
    zt.setItem = function(a, b) {};
    zt.removeItem = function(a) {};
    zt.clear = function() {};
    var Bt = function(a) { var b; return b };

    function Ct(a) { O(H(this), ["consentSettings:!DustMap"], arguments); var b = Kc(a),
            c; for (c in b) b.hasOwnProperty(c) && wg(this, "access_consent", c, "write");
        nh(b) };
    var te = function() {
        var a = new Jg;
        vl() ? (a.add("injectHiddenIframe", Ha), a.add("injectScript", Ha)) : (a.add("injectHiddenIframe", Vs), a.add("injectScript", Ys));
        var b = qt;
        a.add("Math", pg());
        a.add("TestHelper", Mg());
        a.add("addEventCallback", Iq);
        a.add("aliasInWindow", ns);
        a.add("assertApi", lg);
        a.add("assertThat", mg);
        a.add("callInWindow",
            ps);
        a.add("callLater", qs);
        a.add("copyFromDataLayer", ys);
        a.add("copyFromWindow", zs);
        a.add("createArgumentsQueue", As);
        a.add("createQueue", Bs);
        a.add("decodeUri", qg);
        a.add("decodeUriComponent", rg);
        a.add("encodeUri", sg);
        a.add("encodeUriComponent", tg);
        a.add("fail", ug);
        a.add("fromBase64", Ls, !("atob" in z));
        a.add("generateRandom", vg);
        a.add("getContainerVersion", xg);
        a.add("getCookieValues", Ms);
        a.add("getQueryParameters", Ps);
        a.add("getReferrerQueryParameters", Qs);
        a.add("getReferrerUrl", Rs);
        a.add("getTimestamp",
            yg);
        a.add("getTimestampMillis", yg);
        a.add("getType", zg);
        a.add("getUrl", Ts);
        a.add("localStorage", dt, !ct());
        a.add("logToConsole", gt);
        a.add("makeInteger", Bg);
        a.add("makeNumber", Cg);
        a.add("makeString", Dg);
        a.add("makeTableMap", Eg);
        a.add("mock", Gg);
        a.add("parseUrl", it);
        a.add("queryPermission", jt);
        a.add("readCharacterSet", kt);
        a.add("readTitle", lt);
        a.add("sendPixel", b);
        a.add("setCookie", rt);
        a.add("setInWindow", tt);
        a.add("sha256", xt);
        a.add("templateStorage", zt);
        a.add("toBase64", Bt, !("btoa" in z));
        a.add("JSON",
            Ag(function(d) { var e = this.g.g;
                e && e.log.call(this, "error", d) }));
        var c = !1;
        c = !0;
        c = !0;
        c && a.add("setDefaultConsentState", st);
        a.add("updateConsentState", Ct);
        a.add("isConsentGranted", bt);
        a.add("addConsentListener", Fq);
        Lg(a, "callOnWindowLoad", ws);
        Lg(a, "internal.appendRemoteConfigParameter", os), Lg(a, "internal.getRemoteConfigParameter", Ss), Lg(a, "internal.setRemoteConfigParameter", vt), Lg(a, "internal.sortRemoteConfigParameters", yt);
        Lg(a, "internal.evaluateMatchingRules",
            Ks), Lg(a, "internal.registerGtagCommandListener", nt);
        Lg(a, "internal.evaluateFilteringRules", Is);
        Lg(a, "internal.getProductSettingsParameter",
            Os), Lg(a, "internal.setProductSettingsParameter", ut);
        Lg(a, "internal.addHistoryChangeListener", Dr);
        Lg(a,
            "internal.sendGtagEvent", pt);
        vl() ? Lg(a, "internal.injectScript", Ha) : Lg(a, "internal.injectScript", at);
        Lg(a, "internal.locateUserData", ft);
        Lg(a, "internal.addFormInteractionListener", hr);
        Lg(a, "internal.addFormSubmitListener", pr);
        return function(d) {
            var e;
            if (a.g.hasOwnProperty(d)) e = a.get(d, this);
            else { var f; if (f = a.s.hasOwnProperty(d)) { var g = !1,
                        h = this.g.g; if (h) { var l = h.Cc(); if (l) { 0 !== l.indexOf("__cvt_") && (g = !0); } }
                    f = g } if (f) { var m = a.s.hasOwnProperty(d) ? a.s[d] : void 0;
                    e = m } else throw Error(d + " is not a valid API name."); }
            return e
        }
    };
    var Dt = function() { return !1 },
        Et = function() { var a = {}; return function(b, c, d) {} };
    var le, Ff;

    function Ft() {
        var a = data.runtime || [],
            b = data.runtime_lines;
        le = new je;
        Gt();
        Se = function(e, f, g) {
            Ht(f);
            var h = new rb;
            Wa(f, function(u, t) { var v = Jc(t);
                void 0 === v && void 0 !== t && Og(44);
                h.set(u, v) });
            le.g.g.H = lf();
            var l = { oi: Gf(e), eventId: void 0 !== g ? g.id : void 0, sc: void 0 !== g ? function(u) { return g.eb.sc(u) } : void 0, Cc: function() { return e }, log: function() {} };
            if (Dt()) {
                var m = Et(),
                    p = void 0,
                    q = void 0;
                l.Ea = { uc: {}, Sb: function(u, t, v) { 1 === t && (p = u);
                        7 === t && (q = v);
                        m(u, t, v) }, Ze: Fg() };
                l.log = function(u, t) { if (p) { var v = Array.prototype.slice.call(arguments, 1);
                        m(p, 4, { level: u, source: q, message: v }) } }
            }
            var r = me(l, [e, h]);
            le.g.g.H = void 0;
            r instanceof ra && "return" === r.g && (r = r.s);
            return Kc(r)
        };
        ue();
        for (var c = 0; c < a.length; c++) { var d = a[c]; if (!La(d) || 3 > d.length) { if (0 === d.length) continue; break }
            b && b[c] && b[c].length && hf(d, b[c]);
            le.Rb(d) }
    }

    function Ht(a) { var b = a.gtmOnSuccess,
            c = a.gtmOnFailure;
        Ia(b) && (a.gtmOnSuccess = function() { J(b) });
        Ia(c) && (a.gtmOnFailure = function() { J(c) }) }

    function Gt() { var a = le;
        Pi.SANDBOXED_JS_SEMAPHORE = Pi.SANDBOXED_JS_SEMAPHORE || 0;
        ve(a, function(b, c, d) { Pi.SANDBOXED_JS_SEMAPHORE++; try { return b.apply(c, d) } finally { Pi.SANDBOXED_JS_SEMAPHORE-- } }) }

    function It(a) { void 0 !== a && Wa(a, function(b, c) { for (var d = 0; d < c.length; d++) { var e = c[d].replace(/^_*/, "");
                aj[e] = aj[e] || [];
                aj[e].push(b) } }) };
    var Jt = {},
        Kt = function(a, b) { b = b.toString().split(","); for (var c = 0; c < b.length; c++) Jt[b[c]] = Jt[b[c]] || [], Jt[b[c]].push(a) },
        Lt = function(a) { Wa(Jt, function(b, c) { var d = Na(c, a);
                0 <= d && c.splice(d, 1) }) };
    var Mt = "HA GF G UA AW DC".split(" "),
        Nt = !1;
    Nt = !0;
    var Ot = !1,
        Pt = !1;

    function Qt(a, b) { var c = { event: a };
        b && (c.eventModel = N(b), b[P.Hb] && (c.eventCallback = b[P.Hb]), b[P.$c] && (c.eventTimeout = b[P.$c])); return c }

    function Rt(a) { a.hasOwnProperty("gtm.uniqueEventId") || Object.defineProperty(a, "gtm.uniqueEventId", { value: bj() }); return a["gtm.uniqueEventId"] }

    function St() { Ot || Pi.gtagRegistered || (Ot = Pi.gtagRegistered = !0, Pi.addTargetToGroup = function(a) { Kt(a, "default") }); return Ot }
    var Tt = {
            config: function(a) {
                var b, c = Rt(a);
                if (2 > a.length || !n(a[1])) return;
                var d = {};
                if (2 < a.length) { if (void 0 != a[2] && !Ic(a[2]) || 3 < a.length) return;
                    d = a[2] }
                var e = sl(a[1]);
                if (!e) return;
                Lt(e.id);
                Kt(e.id, d[P.ie] || "default");
                delete d[P.ie];
                Pt || Og(43);
                if (St() && -1 !== Na(Mt, e.prefix)) { "G" === e.prefix && (d[P.mc] = !0);
                    Nt && delete d[P.Hb];
                    vq(d, e.id); return }
                kj("gtag.targets." + e.id, void 0);
                kj("gtag.targets." + e.id, N(d));
                var f = {};
                f[P.pb] = e.id;
                b = Qt(P.Ga, f);
                b["gtm.uniqueEventId"] = c;
                return b
            },
            consent: function(a) {
                function b() { St() && N(a[2], { subcommand: a[1] }) } if (3 === a.length) { Og(39); var c = bj(),
                        d = a[1]; "default" === d ? (b(), mh(a[2])) : "update" === d && (b(), nh(a[2], c)) } },
            event: function(a) {
                var b = a[1];
                if (!(2 > a.length) && n(b)) {
                    var c;
                    if (2 < a.length) { if (!Ic(a[2]) && void 0 != a[2] || 3 < a.length) return;
                        c = a[2] }
                    var d = Qt(b, c),
                        e = Rt(a);
                    d["gtm.uniqueEventId"] = e;
                    var f;
                    var g = c && c[P.pb];
                    void 0 === g && (g = hj(P.pb, 2), void 0 === g && (g = "default"));
                    if (n(g) || La(g)) {
                        for (var h = g.toString().replace(/\s+/g,
                                "").split(","), l = [], m = 0; m < h.length; m++)
                            if (0 <= h[m].indexOf("-")) l.push(h[m]);
                            else { var p = Jt[h[m]];
                                p && p.length && (l = l.concat(p)) }
                        f = ul(l)
                    } else f = void 0;
                    var q = f;
                    if (!q) return;
                    for (var r = St(), u = [], t = 0; r && t < q.length; t++) { var v = q[t]; if (-1 !== Na(Mt, v.prefix)) { var w = N(c); "G" === v.prefix && (w[P.mc] = !0);
                            Nt && delete w[P.Hb];
                            uq(b, w, v.id) }
                        u.push(v.id) }
                    d.eventModel = d.eventModel || {};
                    0 < q.length ? d.eventModel[P.pb] = u.join() : delete d.eventModel[P.pb];
                    Pt || Og(43);
                    return d
                }
            },
            get: function(a) {
                Og(53);
                if (4 !== a.length || !n(a[1]) || !n(a[2]) || !Ia(a[3])) return;
                var b = sl(a[1]),
                    c = String(a[2]),
                    d = a[3];
                if (!b) return;
                Pt || Og(43);
                if (!St() || -1 === Na(Mt, b.prefix)) return;
                bj();
                var e = {};
                Xl(N((e[P.Qa] = c, e[P.Za] = d, e)));
                wq(c, function(f) { J(function() { return d(f) }) }, b.id);
            },
            js: function(a) { if (2 == a.length && a[1].getTime) { Pt = !0;
                    St(); var b = {}; return b.event = "gtm.js", b["gtm.start"] = a[1].getTime(), b["gtm.uniqueEventId"] = Rt(a), b } },
            policy: function(a) {
                if (3 === a.length) {
                    var b = a[1],
                        c = a[2],
                        d = Ff.s;
                    d.g[b] ?
                        d.g[b].push(c) : d.g[b] = [c]
                }
            },
            set: function(a) { var b;
                2 == a.length && Ic(a[1]) ? b = N(a[1]) : 3 == a.length && n(a[1]) && (b = {}, Ic(a[2]) || La(a[2]) ? b[a[1]] = N(a[2]) : b[a[1]] = a[2]); if (b) { if (bj(), St()) { N(b); var c = N(b);
                        rq().push("set", [c]) }
                    b._clear = !0; return b } }
        },
        Ut = { policy: !0 };
    var Vt = function(a, b) { var c = a.hide; if (c && void 0 !== c[b] && c.end) { c[b] = !1; var d = !0,
                    e; for (e in c)
                    if (c.hasOwnProperty(e) && !0 === c[e]) { d = !1; break }
                d && (c.end(), c.end = null) } },
        Xt = function(a) { var b = Wt(),
                c = b && b.hide;
            c && c.end && (c[a] = !0) };
    var nu = function(a) { if (mu(a)) return a;
        this.g = a };
    nu.prototype.Ni = function() { return this.g };
    var mu = function(a) { return !a || "object" !== Gc(a) || Ic(a) ? !1 : "getUntrustedUpdateValue" in a };
    nu.prototype.getUntrustedUpdateValue = nu.prototype.Ni;
    var ou = [],
        pu = !1,
        qu = !1,
        ru = !1,
        su = function(a) { return z["dataLayer"].push(a) },
        tu = function(a) { var b = Pi["dataLayer"],
                c = b ? b.subscribers : 1,
                d = 0,
                e = a; return function() {++d === c && (e(), e = null) } };

    function uu(a) { var b = a._clear;
        Wa(a, function(d, e) { "_clear" !== d && (b && kj(d, void 0), kj(d, e)) });
        Xi || (Xi = a["gtm.start"]); var c = a["gtm.uniqueEventId"]; if (!a.event) return !1;
        c || (c = bj(), a["gtm.uniqueEventId"] = c, kj("gtm.uniqueEventId", c)); return Mn(a) }

    function vu() { var a = ou[0]; if (null == a || "object" !== typeof a) return !1; if (a.event) return !0; if (Ya(a)) { var b = a[0]; if ("config" === b || "event" === b || "js" === b) return !0 } return !1 }

    function wu() {
        for (var a = !1; !ru && 0 < ou.length;) {
            if (!qu && vu()) { var b = {};
                ou.unshift((b.event = "gtm.init", b));
                qu = !0 }
            if (!pu && vu()) { var c = {};
                ou.unshift((c.event = "gtm.init_consent", c));
                pu = !0 }
            ru = !0;
            delete ej.eventModel;
            gj();
            var d = ou.shift();
            if (null != d) {
                var e = mu(d);
                if (e) { var f = d;
                    d = mu(f) ? f.getUntrustedUpdateValue() : void 0;
                    lj() }
                try {
                    if (Ia(d)) try { d.call(ij) } catch (u) {} else if (La(d)) {
                        var g = d;
                        if (n(g[0])) {
                            var h =
                                g[0].split("."),
                                l = h.pop(),
                                m = g.slice(1),
                                p = hj(h.join("."), 2);
                            if (void 0 !== p && null !== p) try { p[l].apply(p, m) } catch (u) {}
                        }
                    } else { if (Ya(d)) { a: { var q = d; if (q.length && n(q[0])) { var r = Tt[q[0]]; if (r && (!e || !Ut[q[0]])) { d = r(q); break a } }
                                d = void 0 } if (!d) { ru = !1; continue } }
                        a = uu(d) || a }
                } finally { e && gj(!0) }
            }
            ru = !1
        }
        return !a
    }

    function xu() { var b = wu(); try { Vt(z["dataLayer"], tf.N) } catch (c) {} return b }
    var zu = function() {
            var a = ac("dataLayer", []),
                b = ac("google_tag_manager", {});
            b = b["dataLayer"] = b["dataLayer"] || {};
            dm(function() { b.gtmDom || (b.gtmDom = !0, a.push({ event: "gtm.dom" })) });
            vs(function() { b.gtmLoad || (b.gtmLoad = !0, a.push({ event: "gtm.load" })) });
            b.subscribers = (b.subscribers || 0) + 1;
            var c = a.push;
            a.push = function() {
                var e;
                if (0 < Pi.SANDBOXED_JS_SEMAPHORE) { e = []; for (var f = 0; f < arguments.length; f++) e[f] = new nu(arguments[f]) } else e = [].slice.call(arguments, 0);
                var g = c.apply(a, e);
                ou.push.apply(ou, e);
                if (300 <
                    this.length)
                    for (Og(4); 300 < this.length;) this.shift();
                var h = "boolean" !== typeof g || g;
                return wu() && h
            };
            var d = a.slice(0);
            ou.push.apply(ou, d);
            if (yu()) { J(xu) }
        },
        yu = function() { var a = !0; return a };
    var Au = {};
    Au.ld = new String("undefined");
    var Bu = function(a) { this.g = function(b) { for (var c = [], d = 0; d < a.length; d++) c.push(a[d] === Au.ld ? b : a[d]); return c.join("") } };
    Bu.prototype.toString = function() { return this.g("undefined") };
    Bu.prototype.valueOf = Bu.prototype.toString;
    Au.hi = Bu;
    Au.ye = {};
    Au.Bi = function(a) { return new Bu(a) };
    var Cu = {};
    Au.lj = function(a, b) { var c = bj();
        Cu[c] = [a, b]; return c };
    Au.vg = function(a) { var b = a ? 0 : 1; return function(c) { var d = Cu[c]; if (d && "function" === typeof d[b]) d[b]();
            Cu[c] = void 0 } };
    Au.Qi = function(a) {
        for (var b = !1, c = !1, d = 2; d < a.length; d++) b =
            b || 8 === a[d], c = c || 16 === a[d];
        return b && c
    };
    Au.gj = function(a) { if (a === Au.ld) return a; var b = bj();
        Au.ye[b] = a; return 'google_tag_manager["' + tf.N + '"].macro(' + b + ")" };
    Au.aj = function(a, b, c) { a instanceof Au.hi && (a = a.g(Au.lj(b, c)), b = Ha); return { Oi: a, onSuccess: b } };
    var Nu = z.clearTimeout,
        Ou = z.setTimeout,
        V = function(a, b, c) { if (vl()) { b && J(b) } else return ec(a, b, c) },
        Pu = function() { return new Date },
        Qu = function() { return z.location.href },
        Ru = function(a) { return Rh(Th(a), "fragment") },
        Su = function(a) { return Sh(Th(a)) },
        Tu = function(a, b) { return hj(a, b || 2) },
        Uu = function(a, b, c) { var d;
            b ? (a.eventCallback = b, c && (a.eventTimeout = c), d = su(a)) : d = su(a); return d },
        Vu = function(a, b) { z[a] = b },
        X = function(a, b, c) {
            b &&
                (void 0 === z[a] || c && !z[a]) && (z[a] = b);
            return z[a]
        },
        Wu = function(a, b, c) { return Aj(a, b, void 0 === c ? !0 : !!c) },
        Xu = function(a, b, c) { return 0 === Jj(a, b, c) },
        Yu = function(a, b) { if (vl()) { b && J(b) } else gc(a, b) },
        Zu = function(a) { return !!Nq(a, "init", !1) },
        $u = function(a) { Lq(a, "init", !0) },
        av = function(a) { var b = Vi + "?id=" + encodeURIComponent(a) + "&l=dataLayer";
            V(xl("https://", "http://", b)) },
        bv = function(a, b, c) { hn && (Mc(a) || wn(c, b, a)) };
    var cv = Au.aj;
    var zv = encodeURI,
        Y = encodeURIComponent,
        Av = hc;
    var Bv = function(a, b) { if (!a) return !1; var c = Rh(Th(a), "host"); if (!c) return !1; for (var d = 0; b && d < b.length; d++) { var e = b[d] && b[d].toLowerCase(); if (e) { var f = c.length - e.length;
                0 < f && "." != e.charAt(0) && (f--, e = "." + e); if (0 <= f && c.indexOf(e, f) == f) return !0 } } return !1 };
    var Cv = function(a, b, c) { for (var d = {}, e = !1, f = 0; a && f < a.length; f++) a[f] && a[f].hasOwnProperty(b) && a[f].hasOwnProperty(c) && (d[a[f][b]] = a[f][c], e = !0); return e ? d : null };
    var Lw = {};
    Lw[P.Yc] = "";
    Lw[P.da] = "";
    Lw[P.Pa] = "";
    Lw[P.oa] = "auto";
    Lw[P.mb] = "/";
    Lw[P.Ka] = 63072E3;
    Lw[P.jc] = 30;
    Lw[P.ed] = 1E4;
    Lw[P.ic] = !0;
    var Mw = function(a, b, c, d, e) { this.s = a;
        this.M = b;
        this.F = c;
        this.K = d.eventModel;
        this.ri = d.containerConfig;
        this.B = d;
        this.P = d.getWithConfig(P.lb) ? 1 : 7;
        this.ue = d.getWithConfig(P.nb) ? 1 : 7;
        this.jb = e;
        this.Nb = this.te = this.lg = this.H = this.Ae = this.jg = this.Fa = !1;
        this.vb = 0;
        this.we = this.xe = this.md = !1;
        this.Be = void 0;
        this.jd = 0;
        this.ig = this.ve = void 0;
        this.gg = !1;
        this.se = this.kd = this.kg = this.g = void 0 };
    aa = Mw.prototype;
    aa.La = function(a, b) { void 0 === this.C(a) && (this.K[a] = b) };
    aa.Wg = function(a, b) { b <= this.P && (this.K[P.lb] = a, this.P = b) };
    aa.Xg = function(a, b) { b <= this.ue && (this.K[P.nb] = a, this.ue = b) };
    aa.C = function(a) { return void 0 !== this.K[a] ? this.K[a] : void 0 !== this.B.getWithConfig(a) ? this.B.getWithConfig(a) : void 0 !== this.jb[a] ? this.jb[a] : Lw[a] };
    aa.getRemoteConfig = function(a) { return void 0 !== this.B.remoteConfig[a] ? this.B.remoteConfig[a] : this.jb[a] };
    aa.Ad = function(a) {
        var b = this.jb[P.ee];
        if (b && void 0 !== b[a || this.M]) return b[a ||
            this.M]
    };
    aa.Eg = function() { var a = this.C(P.ya); if ("object" === typeof a) return a };
    aa.Fg = function() { return !!this.Eg() };
    aa.abort = function() { throw "ABORT"; };
    aa.hb = function() { return !(!0 !== this.C(P.bc) && "true" !== this.C(P.bc) || !this.C(P.ra)) };
    var Nw = !1,
        Ow = function(a) { var b = !1;
            b = a.M === P.Gb && eh() && a.hb(); return !(!Zb.sendBeacon || a.md || a.xe || a.H || a.te || a.Nb || b || Nw) };
    var Sw = function() { var a = 0,
                b = 0; return { start: function() { a = db() }, stop: function() { b = this.get() }, get: function() { var c = 0;
                    Pw && Qw && Rw && (c = db() - a); return c + b } } },
        Ww = function() { Tw += Uw();
            Vw = Sw();
            Pw && Qw && Rw && Vw.start() },
        Vw = void 0,
        Tw = 0,
        Pw = !1,
        Qw = !1,
        Rw = !1,
        Xw = void 0,
        Yw = void 0,
        Zw = function() {
            if (!Vw) {
                Pw = I.hasFocus();
                Qw = !I.hidden;
                Rw = !0;
                var a = function(b, c, d) { ic(b, c, function(e) { Vw.stop();
                        d(e);
                        Pw && Qw && Rw && Vw.start() }) };
                a(z, "focus", function() { Pw = !0 });
                a(z, "blur", function() { Pw = !1 });
                a(z, "pageshow", function(b) {
                    Rw = !0;
                    b.persisted &&
                        Og(56);
                    Yw && Yw()
                });
                a(z, "pagehide", function() { Rw = !1;
                    Xw && Xw() });
                a(I, "visibilitychange", function() { Qw = !I.hidden });
                Ww();
                Tw = 0
            }
        },
        Uw = function() { return Vw && Vw.get() || 0 };
    var $w = function(a) { Fa("GA4_EVENT", a) };
    var bx = function(a) { return !a || ax.test(a) || 0 <= Na(P.Zh, a) },
        cx = function(a) { var b = a[P.Mf]; if (b) return b; var c = a[P.Kb]; if (n(c)) { if ("function" === typeof URL) try { return (new URL(c)).pathname } catch (e) { return }
                var d = Th(c); return d.hostname ? Rh(d, "path") : void 0 } },
        dx = function(a, b, c) {
            if (c) switch (c.type) {
                case "event_name":
                    return a;
                case "const":
                    return c.const_value;
                case "event_param":
                    var d = c.event_param.param_name,
                        e = b[d];
                    return e
            }
        },
        ex = function(a, b, c) { for (var d = c.event_param_ops || [], e = 0; e < d.length; e++) { var f = d[e]; if (f.edit_param) { var g = f.edit_param.param_name,
                        h = dx(a, b, f.edit_param.param_value),
                        l; if (h) { var m = Number(h);
                        l = isNaN(m) ? h : m } else l = h;
                    b[g] = l } else f.delete_param && delete b[f.delete_param.param_name] } },
        fx = function(a, b) {
            var c = b.values || [],
                d = dx(a.M, a.K, c[0]),
                e = dx(a.M, a.K, c[1]),
                f = b.type;
            if ("eqi" === f || "swi" === f || "ewi" === f || "cni" === f) d = "string" === typeof d ? d.toLowerCase() : d, e = "string" === typeof e ? e.toLowerCase() : e;
            var g = !1;
            switch (f) {
                case "eq":
                case "eqi":
                    g = String(d) == String(e); break;
                case "sw":
                case "swi":
                    g = 0 == String(d).indexOf(String(e)); break;
                case "ew":
                case "ewi":
                    g = Cs(d, e); break;
                case "cn":
                case "cni":
                    g = 0 <= String(d).indexOf(String(e)); break;
                case "lt":
                    g = Number(d) < Number(e); break;
                case "le":
                    g = Number(d) <= Number(e); break;
                case "gt":
                    g = Number(d) > Number(e); break;
                case "ge":
                    g = Number(d) >= Number(e); break;
                case "re":
                case "rei":
                    g = Es(d, e, "rei" === f) }
            return !!b.negate !== g
        },
        gx = function(a, b) {
            var c = b.event_name_predicate;
            if (c && !fx(a, c)) return !1;
            var d = b.conditions || [];
            if (0 === d.length) return !0;
            for (var e = 0; e < d.length; e++) { for (var f = d[e].predicates || [], g = !0, h = 0; h < f.length; h++)
                    if (!fx(a, f[h])) { g = !1; break }
                if (g) return !0 }
            return !1
        },
        ax = /^(_|ga_|google_|gtag\.|firebase_).*$/,
        hx = !1;
    hx = !0;

    function ix() { return z.gaGlobal = z.gaGlobal || {} }
    var jx = function() { var a = ix();
            a.hid = a.hid || Ra(); return a.hid },
        kx = function(a, b) { var c = ix(); if (void 0 == c.vid || b && !c.from_cookie) c.vid = a, c.from_cookie = b };
    var nx = function(a, b) { var c = !0; return c },
        px = function(a) { var b; return b },
        lx = function(a, b, c) {
            var d = String(c.C(P.oa)),
                e = String(c.C(P.mb)),
                f = Number(c.C(P.Ka)),
                g = c.C(P.ac),
                h = { Wa: P.I, domain: d, path: e, expires: f ? new Date(db() + 1E3 * f) : void 0, flags: "" + c.C(P.Pa) };
            if (!1 === g && qx(c) === b) return !0;
            var l = Qj(b, rx[0], d, e);
            return 1 !== Jj(a, l, h)
        },
        ox = function(a, b) { var c = "" + b.C(P.oa),
                d = "" + b.C(P.mb),
                e = Pj(a, c, d, rx, P.I); if (!e) { var f = String(b.C(P.Yc));
                f && f != a && (e = Pj(f, c, d, rx, P.I)) } return e },
        mx = function(a) { return a.C(P.da) + "_ga_ecid" },
        tx = function(a, b) { return lx(sx(b), a, b) },
        qx = function(a) { return ox(sx(a), a) },
        sx = function(a) { return String(a.C(P.da)) + "_ga" },
        rx = ["GA1"];
    var wx = function(a, b) { var c = ux(b),
                d = String(b.C(P.oa)),
                e = String(b.C(P.mb)),
                f = Number(b.C(P.Ka)),
                g = Qj(a, vx[0], d, e),
                h = { Wa: P.I, domain: d, path: e, expires: f ? new Date(db() + 1E3 * f) : void 0, flags: String(b.C(P.Pa)) }; return 1 !== Jj(c, g, h) },
        xx = function(a) { var b = ux(a),
                c = String(a.C(P.oa)),
                d = String(a.C(P.mb)); return Pj(b, c, d, vx, P.I) },
        vx = ["GS1"],
        ux = function(a) { return String(a.C(P.da)) + "_ga_" + a.s.substr(2) },
        yx = function(a) { var b; var c = a.K[P.Lb],
                d = a.K[P.fd],
                e = !!a.K[P.bd]; if (c && d) { var f = [c, d, Za(a.K[P.dd]), a.F, a.vb];
                b = f.join(".") } else b = void 0; return b };
    var zx = function(a) { var b = a.C(P.qa),
                c = a.getRemoteConfig(P.qa); if (c === b) return c; var d = N(b);
            c && c[P.R] && (d[P.R] = (d[P.R] || []).concat(c[P.R])); return d },
        Ax = function(a, b, c, d) { var e = vk(!0); if ("1" !== e._up) return {}; var f = e[b],
                g = e[d],
                h;
            a.g && (h = e[c]); return { clientId: f, zg: h, Vg: g } },
        Bx = function(a, b, c, d) { var e = vk(!0),
                f = e[b];
            f && (a.Wg(f, 2), tx(f, a)); var g = e[c];
            a.g && g && (a.Xg(g, 2), nx(g, a)); var h = e[d];
            h && wx(h, a); return a.g ? !!(f && g && h) : !(!f || !h) },
        Cx = !1,
        Dx = function(a) {
            var b = zx(a) || {},
                c = sx(a),
                d = mx(a),
                e = ux(a);
            Fk(b[P.Ib], !!b[P.R]) && Bx(a, c, d, e) && (Cx = !0);
            b[P.R] && Ck(function() { var f = {},
                    g = qx(a);
                g && (f[c] = g); if (a.g) { var h = px(a);
                    h && (f[d] = h) } var l = xx(a);
                l && (f[e] = l); return f }, b[P.R], b[P.fc], !!b[P.Jb])
        },
        Fx = function(a) {
            if (!a.C(P.Ra)) return {};
            var b = sx(a),
                c = mx(a),
                d = ux(a);
            Dk(function() {
                var e;
                if (oh("analytics_storage")) e = {};
                else { var f = {},
                        g = (f._up = "1", f[b] = a.K[P.lb], f[d] = yx(a), f);
                    a.g && (g[c] = a.K[P.nb]);
                    e = g }
                return e
            }, 1);
            if (!oh("analytics_storage") && Ex()) return Ax(a, b, c, d);
            return {}
        },
        Ex = function() { var a = Qh(z.location, "host"),
                b = Qh(Th(I.referrer), "host"); return a && b ? a === b || 0 <= a.indexOf("." + b) || 0 <= b.indexOf("." + a) ? !0 : !1 : !1 };
    var Gx = function() { var a = db(),
            b = a + 864E5,
            c = 20,
            d = 5E3; return function() { var e = db();
            e >= b && (b = e + 864E5, d = 5E3); if (1 > d) return !1;
            c = Math.min(c + (e - a) / 1E3 * 5, 20);
            a = e; if (1 > c) return !1;
            d--;
            c--; return !0 } };
    var Hx = !1;
    Hx = !0;
    var Ix = "" + Ra(),
        Jx = !1,
        Kx = void 0;
    var Lx = function() { if (Ia(z.__uspapi)) { var a = ""; try { z.__uspapi("getUSPData", 1, function(b, c) { if (c && b) { var d = b.uspString;
                        d && /^[\da-zA-Z-]{1,20}$/.test(d) && (a = d) } }) } catch (b) {} return a } };
    var Mx = function(a, b) { if (b.hb()) { var c = Lx();
                c && (a.us_privacy = c); var d = zo();
                d && (a.gdpr = d); var e = xo();
                e && (a.gdpr_consent = e) } },
        Ox = function(a, b) { if (eh() && (a.gcs = ph(), b.kd && (a.gcu = "1"), b.hb())) { fh() && (a.gcd = "G1" + kh(ch)); var c = b.C(P.T);
                a.adr = void 0 !== c && !1 !== c ? "1" : "0";
                b.kd && (a.gcut = Nx[b.se || ""]); } },
        Px = function(a, b, c) {
            void 0 === c && (c = {});
            if ("object" === typeof b)
                for (var d in b) Px(a + "." + d, b[d], c);
            else c[a] =
                b;
            return c
        },
        Qx = function(a) { var b = "https://www.google-analytics.com/g/collect",
                c = Nn(a.C(P.ra), "/g/collect"); if (c) return c; var d = !0;
            oh(P.D) && oh(P.I) || (d = !1); var e = !1 !== a.C(P.Ha);
            e = !0;
            a.C(P.cc) && !a.C(P.ad) && e && !1 !== a.C(P.$b) && Kp() && d && (b = "https://analytics.google.com/g/collect"); return b },
        Rx = {},
        Nx = (Rx[P.D] = "1", Rx[P.I] = "2", Rx),
        Sx = {};
    Sx[P.Wh] = "tid";
    Sx[P.lb] = "cid";
    Sx[P.ob] = "ul";
    Sx[P.fe] = "_fid";
    Sx[P.Tf] = "tt";
    Sx[P.je] = "ir";
    var Tx = {};
    Tx[P.Lb] = "sid";
    Tx[P.fd] = "sct";
    Tx[P.dd] = "seg";
    Tx[P.Kb] = "dl";
    Tx[P.$a] = "dr";
    Tx[P.ne] = "dt";
    Tx[P.fa] = "cu";
    Tx[P.Mb] = "uid";
    var Ux = function(a, b, c) {
        function d(v, w) { if (void 0 !== w && -1 == P.Xh.indexOf(v)) { null === w && (w = ""); var y; if ("_" === v.charAt(0)) { e[v] = Mf(w, 300) } else Sx[v] ? (y = Sx[v], e[y] = Mf(w, 300)) : Tx[v] ? (y = Tx[v], g[y] = Mf(w, 300)) : p(v, w) || m(v, w) } }
        var e = {},
            f = {},
            g = {};
        e.v = "2";
        e.tid = a.s;
        e.gtm = Tn();
        e._p = jx();
        a.Be && (e.sr = a.Be);
        a.ig && (e._z = a.ig);
        c && (e.em = c);
        a.Nb && (e._gaz = 1);
        Ox(e, a);
        Mx(e, a);
        a.kg && (e.gtm_up = "1");
        f.en = Mf(a.M, 40);
        a.Fa && (f._fv = a.jg ? 2 : 1);
        a.Ae && (f._nsi = 1);
        a.H && (f._ss = a.lg ?
            2 : 1);
        a.md && (f._c = 1);
        0 < a.jd && (f._et = a.jd);
        if (a.we) { var h = a.C(P.aa); if (La(h))
                for (var l = 0; l < h.length && 200 > l; l++) f["pr" + (l + 1)] = Rf(h[l]) }
        a.ve && (f._eu = a.ve);
        for (var m = function(v, w) { v = Mf(v, 40); var y = "ep." + v,
                        x = "epn." + v;
                    v = Ja(w) ? x : y; var A = Ja(w) ? y : x;
                    f.hasOwnProperty(A) && delete f[A];
                    f[v] = Mf(w, 100) }, p = function(v, w) { var y = v.split("."); if (v === P.ya && "object" !== typeof w) return m(v, w), !0; if (y[0] === P.ya) { if ((1 < y.length || "object" === typeof w) && a.hb()) { var x = Px(v, w);
                            Wa(x, function(A, B) { return void m(A, B) }) } return !0 } return !1 },
                q = 0; q < P.Vf.length; ++q) { var r = P.Vf[q];
            d(r, a.C(r)) }
        a.we && d(P.fa, a.C(P.fa));
        Wa(a.ri, d);
        Wa(a.K, d);
        var u = a.C(P.Sa) || {};
        !1 !== a.C(P.Ha) && Jp() || (u._npa = "1");
        Wa(u, function(v, w) { if (b[v] !== w) { if (v !== P.Mb || g.uid) { var y = (Ja(w) ? "upn." : "up.") + Mf(v, 24);
                    f[y] = Mf(w, 36) } else g.uid = Mf(w, 36);
                b[v] = w } });
        var t = !1;
        return Tf.call(this, { Va: e, yb: g, K: f }, Qx(a), a.hb(), t) || this
    };
    oa(Ux, Tf);
    var Vx = function(a, b) { return a.replace(/\$\{([^\}]+)\}/g, function(c, d) { return b[d] || c }) },
        Wx = function(a) { var b = a.search; return a.protocol + "//" + a.hostname + a.pathname + (b ? b + "&richsstsse" : "?richsstsse") },
        Xx = function(a) { var b = {},
                c = "",
                d = a.pathname.indexOf("/g/collect");
            0 <= d && (c = a.pathname.substring(0, d));
            b.transport_url = a.protocol + "//" + a.hostname + c; return b },
        Yx = function(a, b) {
            var c = new z.XMLHttpRequest;
            c.withCredentials = !0;
            var d = b ? "POST" : "GET",
                e = "",
                f = 0,
                g = Th(a),
                h = Xx(g),
                l = Wx(g);
            c.onprogress = function(m) { if (200 === c.status) { e += c.responseText.substring(f);
                    f = m.loaded; for (var p = Vx(e, h), q = p.indexOf("\n\n"); - 1 !== q;) { var r;
                        a: { var u = da(p.substring(0, q).split("\n")),
                                t = u.next().value,
                                v = u.next().value; if (t.startsWith("event: message") && v.startsWith("data: ")) try { r = JSON.parse(v.substring(v.indexOf(":") + 1)); break a } catch (x) {}
                            r = void 0 }
                        if (r) { var w = r.send_pixel || []; if (Array.isArray(w))
                                for (var y = 0; y < w.length; y++) hc(w[y]) }
                        p = p.substring(q + 2);
                        q = p.indexOf("\n\n") }
                    e = p } };
            c.open(d, l);
            c.send(b);
        };
    var by = function(a, b, c, d) { var e = a + "?" + b;
            Zx && (d = !(0 === e.indexOf("https://www.google-analytics.com/g/collect") || 0 === e.indexOf("https://analytics.google.com/g/collect")));
            $x && d && !Nw ? Yx(e, c) : ay(a, b, c) },
        cy = function(a) { return a && 0 === a.indexOf("google.") && "google.com" != a ? "https://www.%/ads/ga-audiences?v=1&t=sr&slf_rd=1&_r=4&".replace("%", a) : void 0 },
        $x = !1;
    $x = !0;
    var Zx = !1;
    var dy = function() { this.H = 1;
        this.F = {};
        this.g = new Uf;
        this.s = -1 };
    dy.prototype.B = function(a, b) {
        var c = this,
            d;
        a.gg && (this.F = {});
        try { d = new Ux(a, this.F, b) } catch (h) { a.abort() }
        var e = Ow(a);
        e && this.g.F(d) || this.flush();
        if (e && this.g.add(d)) { var f = 5E3;
            a.hb() && (f = 500);
            0 > this.s && (this.s = z.setTimeout(function() { return c.flush() }, f)) } else {
            var g =
                Wf(d, this.H++);
            by(d.s, g.cf, g.body, d.F);
            ey(d, a.te, a.Nb, String(a.C(P.he)))
        }
    };
    dy.prototype.add = function(a) { a.xe ? this.P(a) : this.B(a) };
    dy.prototype.flush = function() { if (this.g.events.length) { var a = Xf(this.g, this.H++);
            by(this.g.g, a.cf, a.body, this.g.s);
            this.g = new Uf;
            0 <= this.s && (z.clearTimeout(this.s), this.s = -1) } };
    dy.prototype.P = function(a) { var b = this,
            c = a.Eg();
        c ? Bi(c, function(d) { b.B(a, d) }) : this.B(a) };
    var ey = function(a, b, c, d) {
            function e(h) { f.push(h + "=" + encodeURIComponent("" + a.Va[h])) }
            if (b || c) {
                var f = [];
                e("tid");
                e("cid");
                e("gtm");
                f.push("aip=1");
                a.yb.uid && f.push("uid=" + encodeURIComponent("" + a.yb.uid));
                b && (ay("https://stats.g.doubleclick.net/g/collect", "v=2&" + f.join("&")), Yl("https://stats.g.doubleclick.net/g/collect?v=2&" + f.join("&")));
                if (c) { f.push("z=" + Ra()); var g = cy(d);
                    g && hc(g + f.join("&")) }
            }
        },
        ay = function(a, b, c) { var d = a + "?" + b;
            c ? Zb.sendBeacon && Zb.sendBeacon(d, c) : sc(d) };
    var fy = window,
        gy = document,
        hy = function(a) { var b = fy._gaUserPrefs; if (b && b.ioo && b.ioo() || a && !0 === fy["ga-disable-" + a]) return !0; try { var c = fy.external; if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0 } catch (f) {} for (var d = wj("AMP_TOKEN", String(gy.cookie), !0), e = 0; e < d.length; e++)
                if ("$OPT_OUT" == d[e]) return !0;
            return gy.getElementById("__gaOptOutExtension") ? !0 : !1 };
    var iy = {};
    var jy = function(a, b) { var c = P.D;
        oh(c) || rh(function() { b.kd = !0;
            b.se = c;
            a.mg(b) }, c) };
    iy.Yh = "";
    var ky = function(a, b) { this.Nb = a;
        this.H = b;
        this.Fa = new dy;
        this.s = this.F = this.B = this.g = void 0;
        this.P = !1;
        this.jb = { Zg: !1, dh: !1, rg: !1, tf: null } };
    aa = ky.prototype;
    aa.ij = function(a, b, c) {
        var d = this;
        if (c.eventModel[P.mc]) { if ("_" === a.charAt(0)) return;
            a !== P.Ga && a !== P.Oa && bx(a) && Og(58);
            ly(c) }
        var e = new Mw(this.Nb, a, b, c, this.H),
            f = [P.I],
            g = !1;
        g = e.hb();
        (e.C(P.cc) || g) && f.push(P.D);
        uh(function() { d.Rg(e) }, f)
    };
    aa.Rg = function(a) {
        this.s = a;
        try {
            hy(a.s) && (Og(28), a.abort());
            var b = iy.Yh.replace(/\s+/g, "").split(",");
            0 <= Na(b, a.M) && (Og(33), a.abort());
            var c = a.Ad();
            c && c.blacklisted && (Og(34), a.abort());
            var d = I.location.protocol;
            "http:" != d && "https:" != d && (Og(29), a.abort());
            Zb && "preview" == Zb.loadPurpose && (Og(30), a.abort());
            var e = Pi.grl;
            e || (e = Gx(), Pi.grl = e);
            e() || (Og(35), a.abort());
            a.jd = Uw();
            var h = this.Sg,
                l;
            b: { if (!a.C(P.Ra) || oh(P.I) || 1 === a.P) break b;a.kg = !0; }
            a.M === P.Ga ? (a.C(P.Ra) && cl(["aw", "dc"]), Dx(a), l = Fx(a)) : l = {};
            h.call(this, l);
            a.M !== P.Oa && Zw();
            a.M == P.Ga && (a.C(P.ic) || a.abort(), a.M = P.Gb);
            var m = this.g,
                p = this.B,
                q = this.F,
                r = xx(a);
            r || (r = q);
            var u = Za(a.C(P.jc)),
                t;
            t = Za(a.C(P.ed));
            var v;
            a: { if (r) { var w = r.split("."); if (!(5 > w.length || 6 < w.length)) { v = { sessionId: w[0], pf: Number(w[1]), Id: !!Number(w[2]), Xe: Number(w[3]), vb: Number(w[4] || 0), Hc: "1" === w[5] }; break a } }
                v = void 0 }
            v && v.vb && (a.vb = Math.max(0, v.vb - Math.max(0, a.F - v.Xe)));
            var y = !1;
            v || (y = a.Fa = !0, v = { sessionId: String(a.F), pf: 1, Id: !1, Xe: a.F, Hc: !1 });
            a.F > v.Xe + 60 * u && (y = !0, v.sessionId = String(a.F), v.pf++, v.Id = !1);
            if (y) a.H = !0, a.jd = 0, Ww(), Tw = 0;
            else if (Tw + Uw() > t || a.M == P.Gb) v.Id = !0;
            a.La(P.Lb, v.sessionId);
            a.La(P.fd, v.pf);
            a.La(P.dd, v.Id ? 1 : 0);
            var x = a.C(P.lb),
                A = a.P;
            x || (x = qx(a), A = 3);
            x || (x = m, A = 4);
            if (!x) {
                var B = oh(P.I),
                    D = ix();
                x = !D.from_cookie ||
                    B ? D.vid : void 0;
                A = 5
            }
            x ? x = "" + x : (a.Fa = a.Ae = !0, x = Mj(), A = 6);
            a.Wg(x, A);
            a: {}
            var F = "",
                S = I.location;
            if (S) { var Q = S.pathname || ""; "/" != Q.charAt(0) && (Q = "/" + Q);
                F = S.protocol + "//" + S.hostname + Q + S.search }
            a.La(P.Kb, F);
            var M;
            a: { var K = hj("gtm.gtagReferrer." + a.s);M = K ? "" + K : I.referrer }
            var U = M;
            U && a.La(P.$a, U);
            a.La(P.ne, I.title);
            a.La(P.ob, (Zb.language || "").toLowerCase());
            var ca = z.screen,
                L = ca ? ca.width : 0,
                fa = ca ? ca.height : 0;
            a.Be = L + "x" + fa;
            var ta = !1 !== a.C(P.Ha);
            ta = !0;
            if (ta && !1 !== a.C(P.$b) && Kp() && oh(P.D)) { var ia = a.C(P.cc),
                    Aa = a.C(P.ad);
                a.H && (a.te = !!ia);
                ia && !Aa && 0 === a.vb && (a.vb = 60, a.Nb = !0) }
            my(a);
            a.we = 0 <= P.Xf.indexOf(a.M);
            for (var Ma = a.C(P.ke) || [], Va = 0; Va < Ma.length; Va++) { var zd = Ma[Va]; if (zd.rule_result) { a.La(P.Tf, zd.traffic_type);
                    $w(3); break } }
            if (void 0 === a.C(P.je)) {
                var vf = a.C(P.cd),
                    ne, Vb;
                a: { if (Cx) { var oe = zx(a) || {}; if (oe && oe[P.R])
                            for (var wf = Rh(Th(a.C(P.$a)), "host", !0), Sc = oe[P.R], Wb = 0; Wb < Sc.length; Wb++)
                                if (Sc[Wb] instanceof RegExp) { if (Sc[Wb].test(wf)) { Vb = !0; break a } } else if (0 <= wf.indexOf(Sc[Wb])) { Vb = !0; break a } }
                    Vb = !1 }
                var Ad;
                if (!(Ad = Vb))
                    if (Hx) Ad = !1;
                    else {
                        var Bd = Rh(Th(a.C(P.$a)), "host", !0),
                            pe;
                        var xf = String(a.C(P.oa));
                        if ("none" !== xf)
                            if ("auto" !== xf) pe = xf;
                            else {
                                if (!Jx) {
                                    for (var Cd =
                                            String(a.C(P.mb)), Tc = Gj(), Uc = 0; Uc < Tc.length; Uc++)
                                        if ("none" !== Tc[Uc]) { var Da = String(a.C(P.da)) + "_ga_autodomain"; if (0 === Jj(Da, Ix, { Wa: P.I, domain: Tc[Uc], path: Cd })) { Jj(Da, void 0, { Wa: P.I, domain: Tc[Uc], path: Cd });
                                                Kx = Tc[Uc]; break } }
                                    Jx = !0
                                }
                                pe = Kx
                            }
                        else pe = void 0;
                        var ma = pe;
                        Ad = ma ? 0 <= Bd.indexOf(ma) : !1
                    }
                if (!(ne = Ad)) { var Ta; if (Ta = vf) a: { for (var Vc = vf.include_conditions || [], nc = 0; nc < Vc.length; nc++)
                            if (Vc[nc].test(a.C(P.$a))) { Ta = !0; break a }
                        Ta = !1 }
                    ne = Ta }
                ne && (a.La(P.je, 1), $w(4))
            }
            if (a.M == P.Oa) {
                var zb = a.C(P.Qa);
                a.C(P.Za)(a.C(zb));
                a.abort()
            }
            if (a.K[P.rd]) delete a.K[P.rd];
            else {
                var Ab = a.C(P.$d);
                if (Ab) {
                    for (var sb = Ab.edit_rules || [], tb = 0; tb < sb.length; tb++) a: { var R = a,
                            Xb = sb[tb]; if (gx(R, Xb)) { if (Xb.new_event_name) { var Dd = "string" === typeof Xb.new_event_name ? String(Xb.new_event_name) : dx(R.M, R.K, Xb.new_event_name); if (bx(Dd)) break a;
                                R.M = String(Dd) }
                            ex(R.M, R.K, Xb); if (hx) { R.K[P.rd] = !0; if (rq().enableDeferrableCommandAfterConfig) { var Ka = R.M,
                                        yf = R.K,
                                        qe = R.s;
                                    rq().insert("event", [yf, Ka], qe) } else uq(R.M, R.K, R.s, !0);
                                $w(2);
                                R.abort() } else $w(2) } }
                    for (var Ed =
                            Ab.synthesis_rules || [], re = 0; re < Ed.length; re++) { var Dc = a,
                            Fd = Ed[re]; if (gx(Dc, Fd)) { var oc = Fd.new_event_name; if (!bx(oc)) { var pc = Fd.merge_source_event_params ? N(Dc.K) : {};
                                pc[P.rd] = !0;
                                ex(oc, pc, Fd); if (rq().enableDeferrableCommandAfterConfig) { var zf = oc,
                                        sh = pc,
                                        Bb = Dc.s;
                                    rq().insert("event", [sh, zf], Bb) } else uq(oc, pc, Dc.s, !0);
                                $w(1) } } }
                }
            }
            var Xa = a.K[P.oe];
            if (La(Xa))
                for (var Pa = 0; Pa < Xa.length; Pa++) $w(Xa[Pa]);
            var Qa = Ga("GA4_EVENT");
            Qa && (a.ve = Qa);
            var Cb = this.Sg,
                se = this.g,
                Wc = this.B,
                Gd;
            var yk = yx(a);
            yk ? (wx(yk, a) || (Og(25),
                a.abort()), Gd = yk) : Gd = void 0;
            var ty = Gd,
                th;
            var Xc = a.K[P.lb];
            se && Xc === se ? th = Xc : Xc ? (Xc = "" + Xc, tx(Xc, a) || (Og(31), a.abort()), kx(Xc, oh(P.I)), th = Xc) : (Og(32), a.abort(), th = "");
            var uy = th,
                Af;
            a: { Af = void 0 }
            Cb.call(this, { clientId: uy, zg: Af, Vg: ty });
            this.wj();
            a.hb() && ("page_view" === a.M || a.md) && jy(this, a);
            Ww();
            var zk = this.jb;
            this.mg(a);
            a.B.onSuccess()
        } catch (zy) { a.B.onFailure() }
        delete Ea.GA4_EVENT
    };
    aa.mg = function(a) { this.Fa.add(a) };
    aa.Sg = function(a) { var b = a.clientId,
            c = a.zg,
            d = a.Vg;
        b && d && (this.g = b, this.B = c, this.F = d) };
    aa.flush = function() { this.Fa.flush() };
    aa.wj = function() { var a = this; if (!this.P) { var b = oh(P.I);
            qh([P.I], function() { var c = oh(P.I); if (b ^ c && a.s && a.F && a.g) { var d = a.g; if (c) { var e = qx(a.s);
                        e ? (a.g = e, a.F = xx(a.s), a.s.g && (a.B = px(a.s))) : (tx(a.g, a.s), wx(a.F, a.s), kx(a.g, !0), a.s.g && a.B && nx(a.B, a.s));
                        a: { var f = a.jb,
                                g = a.H,
                                h = d !== a.g; } } else a.F = void 0, a.g = void 0, a.B = void 0;
                    b = c } });
            this.P = !0 } };
    var my = function(a) { var b = function(c) { return !!c && c.conversion };
        a.md = b(a.Ad());
        a.Fa && (a.jg = b(a.Ad("first_visit")));
        a.H && (a.lg = b(a.Ad("session_start"))) };

    function ly(a) { delete a.eventModel[P.mc];
        ny(a.eventModel) }
    var ny = function(a) { Wa(a, function(c) { "_" === c.charAt(0) && delete a[c] }); var b = a[P.Sa] || {};
        Wa(b, function(c) { "_" === c.charAt(0) && delete b[c] }) };
    var oy = function(a) { if ("prerender" == I.visibilityState) return !1;
            a(); return !0 },
        py = function(a) { if (!oy(a)) { var b = !1,
                    c = function() {!b && oy(a) && (b = !0, jc(I, "visibilitychange", c), Og(55)) };
                ic(I, "visibilitychange", c);
                Og(54) } };
    var qy = function(a, b, c) { uq(b, c, a) },
        ry = function(a, b, c) { uq(b, c, a, !0) },
        vy = function(a, b) { var c = new ky(a, b);
            py(function() { sy(a, c) }); };

    function sy(a, b) {
        tq(a, function(c, d, e, f) { b.ij(d, e, f) }), Xw = function() {
            rq().flush();
            1E3 <= Uw() && Zb.sendBeacon && qy(a, P.Df, {});
            Nw = !0;
            Nw = !0;
            b.flush();
            Yw = function() {
                Nw = !1;
                Nw = !1;
                Yw = void 0
            }
        };
    }
    var Z = { h: {} };
    Z.h.ehl = ["google"],
        function() {
            function a(l) { return l.target && l.target.location && l.target.location.href ? l.target.location.href : Qu() }

            function b(l, m) { ic(l, "hashchange", function(p) { var q = a(p);
                    m({ source: "hashchange", state: null, url: Su(q), U: Ru(q) }) }) }

            function c(l, m) { ic(l, "popstate", function(p) { var q = a(p);
                    m({ source: "popstate", state: p.state, url: Su(q), U: Ru(q) }) }) }

            function d(l, m, p) {
                var q = m.history,
                    r = q[l];
                if (Ia(r)) try {
                    q[l] = function(u, t, v) {
                        r.apply(q, [].slice.call(arguments, 0));
                        p({
                            source: l,
                            state: u,
                            url: Su(Qu()),
                            U: Ru(Qu())
                        })
                    }
                } catch (u) {}
            }

            function e() { var l = { source: null, state: X("history").state || null, url: Su(Qu()), U: Ru(Qu()) }; return function(m, p) { var q = l,
                        r = {};
                    r[q.source] = !0;
                    r[m.source] = !0; if (!r.popstate || !r.hashchange || q.U != m.U) { var u = { event: "gtm.historyChange-v2", "gtm.historyChangeSource": m.source, "gtm.oldUrlFragment": l.U, "gtm.newUrlFragment": m.U, "gtm.oldHistoryState": l.state, "gtm.newHistoryState": m.state, "gtm.oldUrl": l.url, "gtm.newUrl": m.url, "gtm.triggers": p.join(",") };
                        l = m;
                        Uu(u) } } }

            function f(l, m) {
                var p = "" +
                    m;
                if (g[p]) g[p].push(l);
                else { var q = [l];
                    g[p] = q; var r = e(),
                        u = -1;
                    h.push(function(t) { 0 <= u && Nu(u);
                        m ? u = Ou(function() { r(t, q);
                            u = -1 }, m) : r(t, q) }) }
            }
            var g = {},
                h = [];
            (function(l) { Z.__ehl = l;
                Z.__ehl.m = "ehl";
                Z.__ehl.o = !0;
                Z.__ehl.priorityOverride = 0 })(function(l) {
                var m = X("self"),
                    p = l.vtp_uniqueTriggerId || "0",
                    q = l.vtp_groupEvents ? Number(l.vtp_groupEventsInterval) : 0;
                0 > q ? q = 0 : isNaN(q) && (q = 1E3);
                if (Zu("ehl")) {
                    var r = Nq("ehl", "reg");
                    r ? (r(p, q), J(l.vtp_gtmOnSuccess)) :
                        J(l.vtp_gtmOnFailure)
                } else { var u = function(t) { for (var v = 0; v < h.length; v++) h[v](t) };
                    b(m, u);
                    c(m, u);
                    d("pushState", m, u);
                    d("replaceState", m, u);
                    f(p, q);
                    Lq("ehl", "reg", f);
                    $u("ehl");
                    J(l.vtp_gtmOnSuccess) }
            })
        }();
    Z.h.read_container_data = ["google"],
        function() {
            (function(a) { Z.__read_container_data = a;
                Z.__read_container_data.m = "read_container_data";
                Z.__read_container_data.o = !0;
                Z.__read_container_data.priorityOverride = 0 })(function() { return { assert: function() {}, V: function() { return {} } } }) }();
    Z.h.c = ["google"],
        function() {
            (function(a) { Z.__c = a;
                Z.__c.m = "c";
                Z.__c.o = !0;
                Z.__c.priorityOverride = 0 })(function(a) { bv(a.vtp_value, "c", a.vtp_gtmEventId); return a.vtp_value }) }();
    Z.h.e = ["google"],
        function() {
            (function(a) { Z.__e = a;
                Z.__e.m = "e";
                Z.__e.o = !0;
                Z.__e.priorityOverride = 0 })(function(a) { var b = String(oj(a.vtp_gtmEventId, "event"));
                a.vtp_gtmCachedValues && (b = String(a.vtp_gtmCachedValues.event)); return b }) }();

    Z.h.v = ["google"],
        function() {
            (function(a) { Z.__v = a;
                Z.__v.m = "v";
                Z.__v.o = !0;
                Z.__v.priorityOverride = 0 })(function(a) { var b = a.vtp_name; if (!b || !b.replace) return !1; var c = Tu(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1),
                    d = void 0 !== c ? c : a.vtp_defaultValue;
                bv(d, "v", a.vtp_gtmEventId); return d }) }();


    Z.h.ytl = ["google"],
        function() {
            function a() { var t = Math.round(1E9 * Math.random()) + ""; return I.getElementById(t) ? a() : t }

            function b(t, v) { if (!t) return !1; for (var w = 0; w < p.length; w++)
                    if (0 <= t.indexOf("//" + p[w] + "/" + v)) return !0;
                return !1 }

            function c(t, v) {
                var w = t.getAttribute("src");
                if (b(w, "embed/")) {
                    if (0 < w.indexOf("enablejsapi=1")) return !0;
                    if (v) {
                        var y = t.setAttribute,
                            x;
                        var A = -1 !== w.indexOf("?") ? "&" : "?";
                        if (-1 < w.indexOf("origin=")) x = w + A + "enablejsapi=1";
                        else {
                            if (!r) {
                                var B = X("document");
                                r = B.location.protocol + "//" + B.location.hostname;
                                B.location.port && (r += ":" + B.location.port)
                            }
                            x = w + A + "enablejsapi=1&origin=" + encodeURIComponent(r)
                        }
                        y.call(t, "src", x);
                        return !0
                    }
                }
                return !1
            }

            function d(t, v) { if (!t.getAttribute("data-gtm-yt-inspected-" + v.rf) && (t.setAttribute("data-gtm-yt-inspected-" + v.rf, "true"), c(t, v.Bc))) { t.id || (t.id = a()); var w = X("YT"),
                        y = w.get(t.id);
                    y || (y = new w.Player(t.id)); var x = f(y, v),
                        A = {},
                        B; for (B in x) A.Yb = B, x.hasOwnProperty(A.Yb) && y.addEventListener(A.Yb, function(D) { return function(C) { return x[D.Yb](C.data) } }(A)), A = { Yb: A.Yb } } }

            function e(t) {
                J(function() {
                    function v() {
                        for (var y =
                                w.getElementsByTagName("iframe"), x = y.length, A = 0; A < x; A++) d(y[A], t)
                    }
                    var w = X("document");
                    v();
                    Yr(v)
                })
            }

            function f(t, v) {
                var w, y;

                function x() { M = Zr(function() { return { url: K, title: U, Me: W, wg: t.getCurrentTime(), playbackRate: ca } }, v.rf, t.getIframe());
                    W = 0;
                    U = K = "";
                    ca = 1; return A }

                function A(ia) {
                    switch (ia) {
                        case q.PLAYING:
                            W = Math.round(t.getDuration());
                            K = t.getVideoUrl();
                            if (t.getVideoData) { var Aa = t.getVideoData();
                                U = Aa ? Aa.title : "" }
                            ca = t.getPlaybackRate();
                            v.Fe ? Uu(M.createEvent("start")) : M.Pb();
                            T = l(v.ff, v.ef, t.getDuration());
                            return B(ia);
                        default:
                            return A
                    }
                }

                function B() { L = t.getCurrentTime();
                    fa = Pu().getTime();
                    M.Ug();
                    Q(); return D }

                function D(ia) { var Aa; switch (ia) {
                        case q.ENDED:
                            return E(ia);
                        case q.PAUSED:
                            Aa = "pause";
                        case q.BUFFERING:
                            var Ma = t.getCurrentTime() - L;
                            Aa = 1 < Math.abs((Pu().getTime() - fa) / 1E3 * ca - Ma) ? "seek" : Aa || "buffering";
                            t.getCurrentTime() && (v.Ee ? Uu(M.createEvent(Aa)) : M.Pb());
                            S(); return C;
                        case q.UNSTARTED:
                            return x(ia);
                        default:
                            return D } }

                function C(ia) {
                    switch (ia) {
                        case q.ENDED:
                            return E(ia);
                        case q.PLAYING:
                            return B(ia);
                        case q.UNSTARTED:
                            return x(ia);
                        default:
                            return C
                    }
                }

                function E() { for (; y;) { var ia = w;
                        Nu(y);
                        ia() }
                    v.De && Uu(M.createEvent("complete", 1)); return x(q.UNSTARTED) }

                function F() {}

                function S() { y && (Nu(y), y = 0, w = F) }

                function Q() { if (T.length && 0 !== ca) { var ia = -1,
                            Aa;
                        do { Aa = T[0]; if (Aa.ca > t.getDuration()) return;
                            ia = (Aa.ca - t.getCurrentTime()) / ca; if (0 > ia && (T.shift(), 0 === T.length)) return } while (0 > ia);
                        w = function() { y = 0;
                            w = F;
                            0 < T.length && T[0].ca === Aa.ca && (T.shift(), Uu(M.createEvent("progress", Aa.Kc, Aa.Nc)));
                            Q() };
                        y = Ou(w, 1E3 * ia) } }
                var M, T = [],
                    W, K, U, ca, L, fa, ta = x(q.UNSTARTED);
                y = 0;
                w = F;
                return { onStateChange: function(ia) { ta = ta(ia) }, onPlaybackRateChange: function(ia) { L = t.getCurrentTime();
                        fa = Pu().getTime();
                        M.Pb();
                        ca = ia;
                        S();
                        Q() } }
            }

            function g(t) { for (var v = t.split(","), w = v.length, y = [], x = 0; x < w; x++) { var A = parseInt(v[x], 10);
                    isNaN(A) || 100 < A || 0 > A || y.push(A / 100) }
                y.sort(function(B, D) { return B - D }); return y }

            function h(t) { for (var v = t.split(","), w = v.length, y = [], x = 0; x < w; x++) { var A = parseInt(v[x], 10);
                    isNaN(A) || 0 > A || y.push(A) }
                y.sort(function(B, D) { return B - D }); return y }

            function l(t, v, w) {
                var y = t.map(function(B) {
                    return {
                        ca: B,
                        Nc: B,
                        Kc: void 0
                    }
                });
                if (!v.length) return y;
                var x = v.map(function(B) { return { ca: B * w, Nc: void 0, Kc: B } });
                if (!y.length) return x;
                var A = y.concat(x);
                A.sort(function(B, D) { return B.ca - D.ca });
                return A
            }

            function m(t) {
                var v = !!t.vtp_captureStart,
                    w = !!t.vtp_captureComplete,
                    y = !!t.vtp_capturePause,
                    x = g(t.vtp_progressThresholdsPercent + ""),
                    A = h(t.vtp_progressThresholdsTimeInSeconds + ""),
                    B = !!t.vtp_fixMissingApi;
                if (v || w || y || x.length || A.length) {
                    var D = { Fe: v, De: w, Ee: y, ef: x, ff: A, Bc: B, rf: void 0 === t.vtp_uniqueTriggerId ? "" : t.vtp_uniqueTriggerId },
                        C = X("YT"),
                        E = function() { e(D) };
                    J(t.vtp_gtmOnSuccess);
                    if (C) C.ready && C.ready(E);
                    else { var F = X("onYouTubeIframeAPIReady");
                        Vu("onYouTubeIframeAPIReady", function() { F && F();
                            E() });
                        J(function() { for (var S = X("document"), Q = S.getElementsByTagName("script"), M = Q.length, T = 0; T < M; T++) { var W = Q[T].getAttribute("src"); if (b(W, "iframe_api") || b(W, "player_api")) return } for (var K = S.getElementsByTagName("iframe"), U = K.length, ca = 0; ca < U; ca++)
                                if (!u && c(K[ca], D.Bc)) { V("https://www.youtube.com/iframe_api");
                                    u = !0; break } }) }
                } else J(t.vtp_gtmOnSuccess)
            }
            var p = ["www.youtube.com", "www.youtube-nocookie.com"],
                q = { UNSTARTED: -1, ENDED: 0, PLAYING: 1, PAUSED: 2, BUFFERING: 3, CUED: 5 },
                r, u = !1;
            (function(t) { Z.__ytl = t;
                Z.__ytl.m = "ytl";
                Z.__ytl.o = !0;
                Z.__ytl.priorityOverride = 0 })(function(t) { t.vtp_triggerStartOption ? m(t) : dm(function() { m(t) }) })
        }();



    Z.h.aev = ["google"],
        function() {
            function a(u, t, v) { var w = u || oj(t, "gtm"); if (w) return w[v] }

            function b(u, t, v, w, y) { y || (y = "element"); var x = t + "." + v,
                    A; if (p.hasOwnProperty(x)) A = p[x];
                else { var B = a(u, t, y); if (B && (A = w(B), p[x] = A, q.push(x), 35 < q.length)) { var D = q.shift();
                        delete p[D] } } return A }

            function c(u, t, v, w) { var y = a(u, t, r[v]); return void 0 !== y ? y : w }

            function d(u, t) {
                if (!u) return !1;
                var v = e(Qu());
                La(t) || (t = String(t || "").replace(/\s+/g, "").split(","));
                for (var w = [v], y = 0; y < t.length; y++) {
                    var x = t[y];
                    if (x.hasOwnProperty("is_regex"))
                        if (x.is_regex) try {
                            x =
                                new RegExp(x.domain)
                        } catch (B) { continue } else x = x.domain;
                    if (x instanceof RegExp) { if (x.test(u)) return !1 } else { var A = x; if (0 != A.length) { if (0 <= e(u).indexOf(A)) return !1;
                            w.push(e(A)) } }
                }
                return !Bv(u, w)
            }

            function e(u) { m.test(u) || (u = "http://" + u); return Rh(Th(u), "HOST", !0) }

            function f(u, t, v, w) {
                switch (u) {
                    case "SUBMIT_TEXT":
                        return b(t, v, "FORM." + u, g, "formSubmitElement") || w;
                    case "LENGTH":
                        var y = b(t, v, "FORM." + u, h);
                        return void 0 === y ? w : y;
                    case "INTERACTED_FIELD_ID":
                        return l(t, v, "id", w);
                    case "INTERACTED_FIELD_NAME":
                        return l(t,
                            v, "name", w);
                    case "INTERACTED_FIELD_TYPE":
                        return l(t, v, "type", w);
                    case "INTERACTED_FIELD_POSITION":
                        var x = a(t, v, "interactedFormFieldPosition");
                        return void 0 === x ? w : x;
                    case "INTERACT_SEQUENCE_NUMBER":
                        var A = a(t, v, "interactSequenceNumber");
                        return void 0 === A ? w : A;
                    default:
                        return w
                }
            }

            function g(u) { switch (u.tagName.toLowerCase()) {
                    case "input":
                        return kc(u, "value");
                    case "button":
                        return lc(u);
                    default:
                        return null } }

            function h(u) {
                if ("form" === u.tagName.toLowerCase() && u.elements) {
                    for (var t = 0, v = 0; v < u.elements.length; v++) Qq(u.elements[v]) &&
                        t++;
                    return t
                }
            }

            function l(u, t, v, w) { var y = a(u, t, "interactedFormField"); return y && kc(y, v) || w }
            var m = /^https?:\/\//i,
                p = {},
                q = [],
                r = { ATTRIBUTE: "elementAttribute", CLASSES: "elementClasses", ELEMENT: "element", ID: "elementId", HISTORY_CHANGE_SOURCE: "historyChangeSource", HISTORY_NEW_STATE: "newHistoryState", HISTORY_NEW_URL_FRAGMENT: "newUrlFragment", HISTORY_OLD_STATE: "oldHistoryState", HISTORY_OLD_URL_FRAGMENT: "oldUrlFragment", TARGET: "elementTarget" };
            (function(u) {
                Z.__aev = u;
                Z.__aev.m = "aev";
                Z.__aev.o = !0;
                Z.__aev.priorityOverride =
                    0
            })(function(u) {
                var t = u.vtp_gtmEventId,
                    v = u.vtp_defaultValue,
                    w = u.vtp_varType,
                    y;
                u.vtp_gtmCachedValues && (y = u.vtp_gtmCachedValues.gtm);
                switch (w) {
                    case "TAG_NAME":
                        var x = a(y, t, "element");
                        return x && x.tagName || v;
                    case "TEXT":
                        return b(y, t, w, lc) || v;
                    case "URL":
                        var A;
                        a: {
                            var B = String(a(y, t, "elementUrl") || v || ""),
                                D = Th(B),
                                C = String(u.vtp_component || "URL");
                            switch (C) {
                                case "URL":
                                    A = B;
                                    break a;
                                case "IS_OUTBOUND":
                                    A =
                                        d(B, u.vtp_affiliatedDomains);
                                    break a;
                                default:
                                    A = Rh(D, C, u.vtp_stripWww, u.vtp_defaultPages, u.vtp_queryKey)
                            }
                        }
                        return A;
                    case "ATTRIBUTE":
                        var E;
                        if (void 0 === u.vtp_attribute) E = c(y, t, w, v);
                        else { var F = u.vtp_attribute,
                                S = a(y, t, "element");
                            E = S && kc(S, F) || v || "" }
                        return E;
                    case "MD":
                        var Q = u.vtp_mdValue,
                            M = b(y, t, "MD", Ju);
                        return Q && M ? Mu(M, Q) || v : M || v;
                    case "FORM":
                        return f(String(u.vtp_component || "SUBMIT_TEXT"), y, t, v);
                    default:
                        var T = c(y, t, w, v);
                        bv(T, "aev", u.vtp_gtmEventId);
                        return T
                }
            })
        }();

    Z.h.dlm = ["google"],
        function() {
            (function(a) { Z.__dlm = a;
                Z.__dlm.m = "dlm";
                Z.__dlm.o = !0;
                Z.__dlm.priorityOverride = 0 })(function(a) { var b = Cv(a.vtp_userInput || [], "key", "value") || {};
                a.vtp_synchronousWrite ? Wa(b, function(c, d) { kj(c, d) }) : Uu(b);
                J(a.vtp_gtmOnSuccess) }) }();
    Z.h.gct = ["google"],
        function() {
            function a(d) { for (var e = [], f = 0; f < d.length; f++) try { e.push(new RegExp(d[f])) } catch (g) {}
                return e }

            function b(d) { return d.replace(/[.*+\-?^${}()|[\]\\]/g, "\\$&") }

            function c(d) { for (var e = [], f = 0; f < d.length; f++) { var g = d[f].matchValue,
                        h; switch (d[f].matchType) {
                        case "BEGINS_WITH":
                            h = "^" + b(g); break;
                        case "ENDS_WITH":
                            h = b(g) + "$"; break;
                        case "EQUALS":
                            h = "^" + b(g) + "$"; break;
                        case "REGEX":
                            h = g; break;
                        default:
                            h = b(g) }
                    e.push(h) } return e }(function(d) {
                Z.__gct = d;
                Z.__gct.m = "gct";
                Z.__gct.o = !0;
                Z.__gct.priorityOverride =
                    0
            })(function(d) {
                var e = {};
                0 < d.vtp_sessionDuration && (e[P.jc] = d.vtp_sessionDuration);
                e[P.ee] = d.vtp_eventSettings;
                e[P.$d] = d.vtp_dynamicEventSettings;
                e[P.cc] = 1 === d.vtp_googleSignals;
                e[P.he] = d.vtp_foreignTld;
                e[P.ad] = 1 === d.vtp_restrictDomain;
                e[P.ke] = d.vtp_internalTrafficResults;
                var f = P.qa,
                    g = d.vtp_linker;
                g && g[P.R] && (g[P.R] = a(g[P.R]));
                e[f] = g;
                var h = P.cd,
                    l = d.vtp_referralExclusionDefinition;
                l && l.include_conditions && (l.include_conditions = a(l.include_conditions));
                e[h] = l;
                var m = xq(d.vtp_trackingId),
                    p = m.referral_exclusion_conditions;
                p && (p.length && "object" === typeof p[0] && (p = c(p)), e[P.cd] = { include_conditions: a(p) });
                var q = m.cross_domain_conditions;
                if (q) { q.length && "object" === typeof q[0] && (q = c(q)); var r = {};
                    e[P.qa] = (r[P.R] = a(q), r[P.Jb] = !0, r[P.Ib] = !0, r[P.fc] = "query", r) }
                vy(d.vtp_trackingId, e);
                J(d.vtp_gtmOnSuccess)
            })
        }();

    Z.h.get = ["google"],
        function() {
            (function(a) { Z.__get = a;
                Z.__get.m = "get";
                Z.__get.o = !0;
                Z.__get.priorityOverride = 0 })(function(a) { var b = a.vtp_settings;
                (a.vtp_deferrable ? ry : qy)(String(b.streamId), String(a.vtp_eventName), b.eventParameters || {});
                a.vtp_gtmOnSuccess() }) }();










    Z.h.lcl = [],
        function() {
            function a() {
                var c = X("document"),
                    d = 0,
                    e = function(f) {
                        var g = f.target;
                        if (g && 3 !== f.which && !(f.Kg || f.timeStamp && f.timeStamp === d)) {
                            d = f.timeStamp;
                            g = rc(g, ["a", "area"], 100);
                            if (!g) return f.returnValue;
                            var h = f.defaultPrevented || !1 === f.returnValue,
                                l = Nq("lcl", h ? "nv.mwt" : "mwt", 0),
                                m;
                            m = h ? Nq("lcl", "nv.ids", []) : Nq("lcl", "ids", []);
                            if (m.length) {
                                var p = Jq(g, "gtm.linkClick", m);
                                if (b(f, g, c) && !h && l && g.href) {
                                    var q = !!Oa(String(tc(g, "rel") || "").split(" "), function(t) { return "noreferrer" === t.toLowerCase() });
                                    q && Og(36);
                                    var r = X((tc(g, "target") || "_self").substring(1)),
                                        u = !0;
                                    if (Uu(p, tu(function() { var t; if (t = u && r) { var v;
                                                a: if (q) { var w; try { w = new MouseEvent(f.type, { bubbles: !0 }) } catch (y) { if (!c.createEvent) { v = !1; break a }
                                                        w = c.createEvent("MouseEvents");
                                                        w.initEvent(f.type, !0, !0) }
                                                    w.Kg = !0;
                                                    f.target.dispatchEvent(w);
                                                    v = !0 } else v = !1;
                                                t = !v }
                                            t && (r.location.href = tc(g, "href")) }), l)) u = !1;
                                    else return f.preventDefault && f.preventDefault(), f.returnValue = !1
                                } else Uu(p, function() {}, l || 2E3);
                                return !0
                            }
                        }
                    };
                ic(c, "click", e, !1);
                ic(c, "auxclick",
                    e, !1)
            }

            function b(c, d, e) { if (2 === c.which || c.ctrlKey || c.shiftKey || c.altKey || c.metaKey) return !1; var f = tc(d, "href"),
                    g = f.indexOf("#"),
                    h = tc(d, "target"); if (h && "_self" !== h && "_parent" !== h && "_top" !== h || 0 === g) return !1; if (0 < g) { var l = Su(f),
                        m = Su(e.location); return l !== m } return !0 }(function(c) { Z.__lcl = c;
                Z.__lcl.m = "lcl";
                Z.__lcl.o = !0;
                Z.__lcl.priorityOverride = 0 })(function(c) {
                var d = void 0 === c.vtp_waitForTags ? !0 : c.vtp_waitForTags,
                    e = void 0 === c.vtp_checkValidation ? !0 : c.vtp_checkValidation,
                    f = Number(c.vtp_waitForTagsTimeout);
                if (!f || 0 >= f) f = 2E3;
                var g = c.vtp_uniqueTriggerId || "0";
                if (d) { var h = function(m) { return Math.max(f, m) };
                    Mq("lcl", "mwt", h, 0);
                    e || Mq("lcl", "nv.mwt", h, 0) }
                var l = function(m) { m.push(g); return m };
                Mq("lcl", "ids", l, []);
                e || Mq("lcl", "nv.ids", l, []);
                Zu("lcl") || (a(), $u("lcl"));
                J(c.vtp_gtmOnSuccess)
            })
        }();


    var wy = {};
    wy.macro = function(a) { if (Au.ye.hasOwnProperty(a)) return Au.ye[a] }, wy.onHtmlSuccess = Au.vg(!0), wy.onHtmlFailure = Au.vg(!1);
    wy.dataLayer = ij;
    wy.callback = function(a) { $i.hasOwnProperty(a) && Ia($i[a]) && $i[a]();
        delete $i[a] };
    wy.bootstrap = 0;
    wy._spx = !1;

    function xy() { Pi[tf.N] = wy;
        gb(aj, Z.h);
        $e = $e || Au;
        af = pf }

    function yy() {
        var a = !1;
        a && lm("INIT");
        Tg().s();
        Pi = z.google_tag_manager = z.google_tag_manager || {};
        wo();
        Gk.enable_gbraid_cookie_write = !0;
        if (Pi[tf.N]) { var b = Pi.zones;
            b && b.unregisterChild(tf.N); } else {
            for (var c = data.resource || {}, d = c.macros || [], e = 0; e < d.length; e++) Te.push(d[e]);
            for (var f = c.tags || [], g = 0; g < f.length; g++) We.push(f[g]);
            for (var h = c.predicates || [], l = 0; l < h.length; l++) Ve.push(h[l]);
            for (var m = c.rules || [], p = 0; p < m.length; p++) {
                for (var q = m[p], r = {}, u =
                        0; u < q.length; u++) r[q[u][0]] = Array.prototype.slice.call(q[u], 1);
                Ue.push(r)
            }
            Ye = Z;
            Ze = Gs;
            var t = data.permissions || {},
                v = data.sandboxed_scripts,
                w = data.security_groups;
            Ft();
            Ff = new Ef(t);
            if (void 0 !== v)
                for (var y = ["sandboxedScripts"], x = 0; x < v.length; x++) { var A = v[x].replace(/^_*/, "");
                    aj[A] = y }
            It(w);
            xy();
            zu();
            Zl = !1;
            $l = 0;
            if ("interactive" == I.readyState && !I.createEventObject || "complete" == I.readyState) bm();
            else {
                ic(I, "DOMContentLoaded", bm);
                ic(I, "readystatechange", bm);
                if (I.createEventObject && I.documentElement.doScroll) {
                    var B = !0;
                    try { B = !z.frameElement } catch (S) {}
                    B && cm()
                }
                ic(z, "load", bm)
            }
            ss = !1;
            "complete" === I.readyState ? us() : ic(z, "load", us);
            hn && z.setInterval(bn, 864E5);
            Yi = (new Date).getTime();
            wy.bootstrap = Yi;
            if (a) {
                var F = mm("INIT");
            }
        }
    }
    (function(a) {
        if (!z["__TAGGY_INSTALLED"]) { var b = !1; if (I.referrer) { var c = Th(I.referrer);
                b = "cct.google" === Qh(c, "host") } if (!b) { var d = Aj("googTaggyReferrer");
                b = d.length && d[0].length }
            b && (z["__TAGGY_INSTALLED"] = !0, ec("https://cct.google/taggy/agent.js")) }
        var f = function() {
                var m = z["google.tagmanager.debugui2.queue"];
                m || (m = [], z["google.tagmanager.debugui2.queue"] = m, ec("https://www.googletagmanager.com/debug/bootstrap"));
                var p = { messageType: "CONTAINER_STARTING", data: { scriptSource: $b, containerProduct: "GTM", debug: !1 } };
                p.data.resume = function() { a() };
                p.data.containerProduct =
                    "OGT";
                tf.oh && (p.data.initialPublish = !0);
                m.push(p)
            },
            g = "x" === Rh(z.location, "query", !1, void 0, "gtm_debug");
        if (!g && I.referrer) { var h = Th(I.referrer);
            g = "tagassistant.google.com" === Qh(h, "host") }
        if (!g) { var l = Aj("__TAG_ASSISTANT");
            g = l.length && l[0].length }
        z.__TAG_ASSISTANT_API && (g = !0);
        g && $b ? f() : a()
    })(yy);

})()