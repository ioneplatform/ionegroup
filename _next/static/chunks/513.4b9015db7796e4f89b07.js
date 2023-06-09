(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [513], {
        7540: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, { default: function() { return Te } });
            var s = i(5893),
                n = i(7294),
                r = i(9048),
                a = i(1163),
                o = i(1638),
                h = i(23),
                c = i.n(h),
                u = i(8370),
                l = i.n(u),
                d = i(2975),
                g = i(1437),
                m = i(7160);
            if ("performance" in window === !1 && (window.performance = {}), Date.now = Date.now || function() { return (new Date).getTime() }, "now" in window.performance === !1) {
                let e = Date.now();
                performance.timing && performance.timing.navigationStart && (e = performance.timing.navigationStart), window.performance.now = function() { return Date.now() - e }
            }
            var v = new class {
                    constructor() { this.funcs = {}, this.lastPass = {}, this.framerates = {}, this.nextFramePendingFuncs = [], this.nextFrameFuncs = [], this.postFrameFuncs = [], this.dt = 1 / 0, this.timeElapsed = 0, this.frame = 0, this.dictonary = [], this.last = performance.now(), this.initTime = performance.now(), this.init(), this.isIOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform) }
                    suscribe(e, t, i = null) { this.dictonary.push(e), this.funcs[e] = t, this.lastPass[e] = Date.now(), this.framerates[e] = null !== i ? 1 / i : i }
                    unsuscribe(e) { this.funcs[e] && (this.dictonary.splice(this.dictonary.indexOf(e), 1), delete this.funcs[e]) }
                    init() { this.update = this.update.bind(this), this.update() }
                    nextFrame(e) { this.nextFramePendingFuncs.push(e) }
                    postFrame(e) { this.postFrameFuncs.push(e) }
                    update() {
                        for (requestAnimationFrame(this.update), this.frame++, this.isIOS ? this.dt = 16 : this.dt = performance.now() - this.last, this.timeElapsed += this.dt; this.nextFrameFuncs.length > 0;) this.nextFrameFuncs.splice(0, 1)[0]();
                        for (; this.nextFramePendingFuncs.length > 0;) this.nextFrameFuncs.push(this.nextFramePendingFuncs.splice(0, 1)[0]);
                        const e = Date.now();
                        for (let t = 0; t < this.dictonary.length; t++) null !== this.framerates[this.dictonary[t]] && e - this.lastPass[this.dictonary[t]] < 1e3 * this.framerates[this.dictonary[t]] || "function" === typeof this.funcs[this.dictonary[t]] && (this.lastPass[this.dictonary[t]] = e, this.funcs[this.dictonary[t]]());
                        for (; this.postFrameFuncs.length > 0;) this.postFrameFuncs.splice(0, 1)[0]();
                        this.last = performance.now()
                    }
                },
                f = i(5600),
                p = i(261),
                x = i(5975);
            const b = f.Ue(),
                T = new Float32Array(b.buffer, 0, 3),
                E = new Float32Array(b.buffer, 12, 3),
                U = new Float32Array(b.buffer, 24, 3),
                _ = m.al(0, 1, 0),
                P = p.Ue(),
                y = m.Ue();
            var R = class {
                    constructor(e = !1) { return this.parent = null, this.children = [], this.position = m.al(0, 0, 0), this.positionDamped = m.al(0, 0, 0), this.scale = m.al(1, 1, 1), this.rotation = m.al(0, 0, 0), this.rotationDamped = m.al(0, 0, 0), this.quaternion = p.Ue(), this.matrix = x.Ue(), this.lmatrix = x.Ue(), this.damped = !1, this.dampedRot = !1, this.damping = .03, this.rotDamping = .03, this.lookAtNode = null, this.needUpdate = !0, this.forceUpdate = !1, this.manualRot = !1, this.isCamera = e, v.nextFrame((() => { this.getMatrix() })), this }
                    setPosition(e, t, i) { this.needUpdate = !0, this.position[0] = e, this.position[1] = t, this.position[2] = i }
                    setRotation(e, t, i) { this.needUpdate = !0, this.rotation[0] = e, this.rotation[1] = t, this.rotation[2] = i }
                    setScale(e) { this.needUpdate = !0, this.scale[0] = e, this.scale[1] = e, this.scale[2] = e }
                    activateDamping(e) { this.positionDamped = m.d9(this.position), this.damped = !0, this.damping = e, this.needUpdate = !0, this.getMatrix() }
                    registerNodeToLookAt(e) { this.lookAtNode = e, this.needUpdate = !0 }
                    lookAt(e, t = 0) { this.damped ? m.$X(U, this.positionDamped, e) : m.$X(U, this.position, e), m.Fv(U, U), m.t8(_, 0, 1, 0), m.jI(_, _, [0, 0, 0], t), m.kC(T, _, U), m.Fv(T, T), m.kC(E, U, T), p.bz(P, b), p.rota, this.damped ? x.Iw(this.matrix, P, this.positionDamped, this.scale) : x.Iw(this.matrix, P, this.position, this.scale), null !== this.parent && x.dC(this.matrix, this.parent.getMatrix(), this.matrix), this.needUpdate = !1 }
                    getMatrix() { return this.forceUpdate || this.needUpdate || this.damped || null != this.lookAtNode ? (x.yR(this.matrix), 0 == this.manualRot && (this.quaternion = p.Ue(), this.dampedRot ? (m.lu(y, this.rotation, this.rotationDamped), m.bA(y, y, this.rotDamping), m.IH(this.rotationDamped, this.rotationDamped, y), p.uD(this.quaternion, this.quaternion, this.rotationDamped[1]), p.lM(this.quaternion, this.quaternion, this.rotationDamped[0]), p.jI(this.quaternion, this.quaternion, this.rotationDamped[2])) : (p.uD(this.quaternion, this.quaternion, this.rotation[1]), p.lM(this.quaternion, this.quaternion, this.rotation[0]), p.jI(this.quaternion, this.quaternion, this.rotation[2]))), this.damped ? (m.lu(y, this.position, this.positionDamped), m.bA(y, y, this.damping), m.IH(this.positionDamped, this.positionDamped, y), x.Iw(this.matrix, this.quaternion, this.positionDamped, this.scale)) : x.Iw(this.matrix, this.quaternion, this.position, this.scale), null !== this.parent && x.dC(this.matrix, this.parent.getMatrix(), this.matrix), null !== this.lookAtNode && (this.lookAtNode.getMatrix(), this.lookAtNode.damped ? this.lookAt(this.lookAtNode.positionDamped) : this.lookAt(this.lookAtNode.position), v.postFrame((() => { this.needUpdate = !0 }))), this.needUpdate = !1, this.matrix) : this.matrix }
                    getChildByName(e) { for (let t = 0; t < this.children.length; t++) { const i = this.children[t]; if (i.name && i.name === e) return i } }
                    addChildNode(e) { this.children.push(e), e.parent = this }
                    fromPositionRotationScale(e, t, i) { return this.position = m.d9(e), this.scale = m.d9(i), this.rotation = m.d9(t), this }
                },
                w = i(4376);
            let A = i(8761);
            var M = new class {
                constructor() { this.active = this.queryDebug(), this.init(), this.types = ["config"], this.configs = {}, this.mobile = "undefined" !== typeof window.orientation || -1 !== navigator.userAgent.indexOf("IEMobile"), this.input = document.createElement("input"), this.input.type = "file", this.input.addEventListener("change", (e => { this.onFileLoaded(e) })) }
                queryDebug() {
                    let e = window.location.href,
                        t = "dev";
                    t = t.replace(/[[]]/g, "\\$&");
                    var i = new RegExp("[?&]" + t + "(=([^&#]*)|&|#|$)").exec(e);
                    return !!i && "true" === decodeURIComponent(i[2].replace(/\+/g, " "))
                }
                init() {
                    this.panel = new w.XS({ name: "Debug GUI", autoPlace: !1, closed: !0, width: 360 });
                    var e = { Save: () => { this.save() } },
                        t = { Load: () => { this.load() } };
                    this.panel.add(e, "Save"), this.panel.add(t, "Load"), this.panel.domElement.style.position = "fixed", this.panel.domElement.style.zIndex = "10000", this.panel.domElement.style.top = "0", this.panel.domElement.style.right = "0", this.panel.domElement.classList.add("gui-custom"), this.active ? document.body.appendChild(this.panel.domElement) : this.panel.destroy()
                }
                createModal() {}
                print() { console.log(JSON.stringify(this.configs)) }
                load() { this.input.click() }
                onFileLoaded(e) {
                    const t = e.target.files[0],
                        i = new FileReader;
                    i.onload = () => {
                        let e = JSON.parse(i.result.split("module.exports = ")[1]);
                        for (const t in e)
                            if (Object.hasOwnProperty.call(e, t)) {
                                const i = e[t];
                                for (const e in i)
                                    if (Object.hasOwnProperty.call(i, e)) {
                                        const s = i[e];
                                        this.configs[t] && this.configs[t][e] && ("color" == this.configs[t][e].guiType ? (this.configs[t][e].value[0] = s.value[0], this.configs[t][e].value[1] = s.value[1], this.configs[t][e].value[2] = s.value[2]) : this.configs[t][e].value = s.value)
                                    }
                            }
                    }, i.readAsText(t)
                }
                save() {
                    var e = document.createElement("a"),
                        t = new Blob([`module.exports = ${JSON.stringify(this.configs)}`], { type: "text/plain" });
                    e.href = URL.createObjectURL(t), e.download = "config.js", e.click()
                }
                printDefault() { console.log(JSON.stringify(defaultConfig)) }
                register(e, t, i) {-1 !== this.types.indexOf(e) ? this["add_" + e](t, i) : console.error("Type of params not valid") }
                addConfig(e, t) {
                    void 0 !== this.panel.__folders[t] && (this.panel.__folders[t].close(), this.panel.__ul.removeChild(this.panel.__folders[t].domElement.parentNode), delete this.panel.__folders[t], this.panel.onResize()), this.configs[t] = e;
                    let i = this.panel.addFolder(t);
                    for (var s in e) {
                        if (!e.hasOwnProperty(s)) continue;
                        let n = e[s];
                        A[t] && A[t][s] && (n.value = A[t][s].value), "color" === n.guiType ? i.addColor(n, "value").name(s) : "list" === n.guiType ? i.addStringInput(n, "value", { presets: n.presets, label: s }) : i.add(n, "value", n.range[0], n.range[1]).name(s)
                    }
                    return i
                }
            };
            const S = g.Ue();
            var C = new class {
                constructor(e) { this.cursor = g.al(0, 0), this.lastCursor = g.al(0, 0), this.velocity = g.al(0, 0), this.dampedCursor = g.al(.5, .5), this.target = e || window, this.wheelVelocity = g.al(0, 0), this.wheel = g.al(0, 0), this.lastWheel = g.al(0, 0), this.screenWidth = window.innerWidth, this.screenHeight = window.innerHeight, this.isDown = !1, this.wheelDir = null, this.emitter = {}, this.preventDamping = !1, l()(this.emitter), this.on = this.emitter.on.bind(this.emitter), this.off = this.emitter.off.bind(this.emitter), v.suscribe("mouse", (() => { this.update() })), this.config = { damping: { value: .1, range: [0, .5] } }, M.addConfig(this.config, "Mouse"), this.initEvents() }
                initEvents() { this.target.addEventListener("touchstart", (e => { this.onDown(e.touches[0]) })), this.target.addEventListener("touchend", (e => { this.onUp(e.touches[0]) })), this.target.addEventListener("touchmove", (e => { this.onMouve(e.touches[0]) })), this.target.addEventListener("mousedown", (e => { this.onDown(e) })), this.target.addEventListener("mousemove", (e => { this.onMouve(e) })), this.target.addEventListener("mouseup", (e => { this.onUp(e) })), this.target.addEventListener("wheel", (e => { this.onWheel(e) })), this.target.addEventListener("click", (() => { this.emitter.emit("click") })), this.target.addEventListener("resize", (() => { this.screenWidth = window.innerWidth, this.screenHeight = window.innerHeight })) }
                onDown(e) { this.cursor[0] = 2 * (e.clientX / this.screenWidth - .5), this.cursor[1] = 2 * (e.clientY / this.screenHeight - .5), this.lastCursor[0] = this.cursor[0], this.lastCursor[1] = this.cursor[1], this.isDown = !0, this.emitter.emit("down", this) }
                onUp(e) { this.isDown = !1, this.emitter.emit("up", this) }
                onWheel(e) { this.lastWheel[0] = this.wheel[0], this.lastWheel[1] = this.wheel[1], this.wheel[0] = e.deltaX, this.wheel[1] = e.deltaY, this.wheelDir = e.deltaY < 0 ? "up" : "down", this.emitter.emit("wheel", this) }
                onMouve(e) { this.cursor[0] = 2 * (e.clientX / this.screenWidth - .5), this.cursor[1] = 2 * (e.clientY / this.screenHeight - .5), this.emitter.emit("mouve", this), this.isDown && this.emitter.emit("drag", this) }
                update() { this.velocity[0] = this.cursor[0] - this.lastCursor[0], this.velocity[1] = this.cursor[1] - this.lastCursor[1], this.wheelVelocity[0] = this.wheel[0] - this.lastWheel[0], this.wheelVelocity[1] = this.wheel[1] - this.lastWheel[1], this.lastCursor[0] = this.cursor[0], this.lastCursor[1] = this.cursor[1], this.preventDamping || (g.lu(S, this.cursor, this.dampedCursor), g.bA(S, S, this.config.damping.value), g.IH(this.dampedCursor, this.dampedCursor, S)) }
            };
            m.Ue(), m.Ue(), m.al(0, 1, 0);
            const F = m.Ue(),
                D = m.Ue(),
                O = m.al(0, 1, 0);
            var I = class {
                constructor(e, t) { this.scene = e, this.camera = t, this.node = new R, this.cameraPositionTarget = m.al(0, 0, 0), this.cameraPosition = m.al(0, 0, 0), this.cameraFreedom = { x: 1, y: 1 }, this.target = m.al(0, 0, 0), this.targetCam = m.al(0, 0, 0), this.pan = m.Ue(), this.config = { camera_damping: { value: .05, range: [.001, .1] } }, M.addConfig(this.config, "Pan") }
                update() {
                    let e = m.Ue(),
                        t = m.Ue(),
                        i = m.Ue();
                    this.pan[0] = 200 * -C.cursor[0] * this.cameraFreedom.x, this.pan[1] = 100 * C.cursor[1] * this.cameraFreedom.y, m.lu(e, this.camera.node.position, this.targetCam), m.Fv(e, e), m.kC(i, O, e), m.Fv(i, i), m.kC(t, e, i), m.bA(F, i, this.pan[0]), m.bA(D, t, this.pan[1]), m.IH(this.cameraPositionTarget, F, D), m.lu(F, this.cameraPositionTarget, this.cameraPosition), m.bA(F, F, this.config.camera_damping.value), m.IH(this.cameraPosition, this.cameraPosition, F), this.camera.node.position[0] = this.cameraPosition[0] + this.camera.node.initialPosition[0], this.camera.node.position[1] = this.cameraPosition[1] + this.camera.node.initialPosition[1], this.camera.node.position[2] = this.cameraPosition[2] + this.camera.node.initialPosition[2], this.camera.node.needUpdate = !0, this.camera.node.lookAt(this.targetCam, this.roll)
                }
            };
            var N = class {
                constructor(e, t) { this.mobile = "undefined" !== typeof window.orientation || -1 !== navigator.userAgent.indexOf("IEMobile"), this.dpr = t.dpr, this.width = e.offsetWidth * this.dpr, this.height = e.offsetHeight * this.dpr, this.container = e, this.active = !1, this.time = 0, this.dt = 0, this.passes = [], null !== t ? (this.manager = t, this.canvas = this.manager.canvas, this.gl = this.manager.gl) : this.catchContext(), this.inTransition = !1, this.root = new R, this._emitter = {}, l()(this._emitter), this.on = this._emitter.on.bind(this._emitter), window.addEventListener("resize", this.onResize.bind(this)) }
                catchContext() {
                    if (this.canvas = document.createElement("canvas"), this.canvas.width = this.width, this.canvas.height = this.height, this.canvas.style.maxWidth = `${this.container.offsetWidth}px`, this.canvas.style.maxHeight = `${this.container.offsetHeight}px`, this.container.appendChild(this.canvas), this.gl = this.canvas.getContext("webgl", { antialias: !1 }), void 0 === this.gl) return;
                    const e = this.gl.getExtension("OES_vertex_array_object");
                    e && (this.gl.createVertexArray = function() { return e.createVertexArrayOES() }, this.gl.deleteVertexArray = function(t) { e.deleteVertexArrayOES(t) }, this.gl.bindVertexArray = function(t) { e.bindVertexArrayOES(t) }, this.gl.isVertexArray = function(t) { return e.isVertexArrayOES(t) }), this.gl.getExtension("OES_standard_derivatives"), this.gl.getExtension("EXT_shader_texture_lod"), this.gl.getExtension("OES_texture_float"), this.gl.getExtension("OES_texture_float_linear"), this.gl.getExtension("OES_texture_half_float"), this.gl.getExtension("OES_texture_half_float_linear"), this.gl.getExtension("EXT_color_buffer_half_float")
                }
                resize() { for (let e = 0; e < this.passes.length; e++) this.passes[e].onResize() }
                onResize() { this.inTransition && this.mobile || (this.width = this.container.offsetWidth * this.dpr, this.height = this.container.offsetHeight * this.dpr, this.canvas.width = this.width, this.canvas.height = this.height, this.canvas.style.maxWidth = `${this.container.offsetWidth}px`, this.canvas.style.maxHeight = `${this.container.offsetHeight}px`, this.gl.viewport(0, 0, this.width, this.height)) }
            };
            var L = class {
                constructor(e, t) { this.scene = e, this.gl = e.gl, this.fov = t, this.pMatrix = x.Ue(), this.node = new R(!0), this.position = this.node.position, this.rotation = this.node.rotation, this.config = { fov: { value: 22, range: [1, 90] } }, M.addConfig(this.config, "Camera") }
                getProjectionMatrix() { return this.pMatrix }
                getViewMatrix() { let e = x.d9(this.node.getMatrix()); return x.U_(e, e), e }
                updateProjection(e) { this.fov = this.config.fov.value, x.G3(this.pMatrix, this.fov * Math.PI / 180, e, .1, 1e4) }
            };
            var B = class {
                constructor(e) { this.scene = e, this.gl = e.gl, this.textures = {}, this.currentUnit = 0 }
                load(e, t, i) {
                    let s = new Image;
                    return s.crossOrigin = "anonymous", s.onload = () => {
                        let e = this.initTexture(s, i);
                        this.textures[t].texture = e, this.textures[t].unit = this.currentUnit, this.currentUnit++, this.textures[t].defer.resolve(e)
                    }, s.src = e, this.textures[t] = { img: s, defer: c().defer() }, this.textures[t].defer.promise
                }
                initTexture(e, t) {
                    let i = this.gl,
                        s = i.createTexture();
                    i.bindTexture(i.TEXTURE_2D, s), t.indexOf("flipY") > -1 ? i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, !0) : i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, !1), i.texImage2D(i.TEXTURE_2D, 0, i.RGBA, i.RGBA, i.UNSIGNED_BYTE, e);
                    const n = e.width,
                        r = e.height;
                    let a = i.CLAMP_TO_EDGE;
                    return n === r && n && 0 === (n & n - 1) && (a = i.REPEAT), t.indexOf("mirror") > -1 && (a = i.MIRRORED_REPEAT), t.indexOf("clamp") > -1 && (a = i.CLAMP_TO_EDGE), t.indexOf("mipmap") > -1 && i.generateMipmap(i.TEXTURE_2D), i.texParameteri(i.TEXTURE_2D, i.TEXTURE_WRAP_S, a), i.texParameteri(i.TEXTURE_2D, i.TEXTURE_WRAP_T, a), t.indexOf("mipmap") > -1 ? i.texParameteri(i.TEXTURE_2D, i.TEXTURE_MIN_FILTER, i.LINEAR_MIPMAP_LINEAR) : i.texParameteri(i.TEXTURE_2D, i.TEXTURE_MIN_FILTER, i.LINEAR), i.texParameteri(i.TEXTURE_2D, i.TEXTURE_MAG_FILTER, i.LINEAR), s
                }
                getTexture(e) { if (this.textures[e].texture) return this.textures[e].texture }
                getImage(e) { return this.textures[e].img ? this.textures[e].img : null }
            };
            var k = class {
                    constructor(e, t) { this.scene = e, this.gl = e.gl, this.url = t, this.texture = null, this.video = null, this.canPlay = !1, this.texture = null, this.defer = c().defer(), this.currentTime = 0, this.skipFrame = !1 }
                    getLoadables() { return this.initTexture(), this.setSource(), this.defer.promise }
                    setSource() {
                        const e = document.createElement("video");
                        this.video = e;
                        var t = !1,
                            i = !1;
                        e.autoplay = !0, e.muted = !0, e.volume = 0, e.loop = !0, e.style.opacity = 0, e.style.position = "fixed", e.style.zIndex = -10, e.style.pointerEvents = "none", this.scene.container.appendChild(e), e.addEventListener("playing", (() => { t = !0, n(), e.play() }), !0), e.addEventListener("timeupdate", (() => { i = !0, n() }), !0), e.src = this.url;
                        let s = e.play();
                        void 0 !== s && s.catch((e => { this.defer.resolve(e) })).then((() => { n() }));
                        const n = () => { t && i && !1 === this.canPlay && (this.canPlay = !0, this.defer.resolve(), e.pause()) }
                    }
                    play() { this.video.play(0) }
                    pause() { this.video.pause() }
                    initTexture() {
                        let e = this.gl,
                            t = e.createTexture();
                        e.bindTexture(e.TEXTURE_2D, t);
                        const i = e.RGBA,
                            s = e.RGBA,
                            n = e.UNSIGNED_BYTE,
                            r = new Uint8Array([0, 0, 0, 255]);
                        e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, !1), e.texImage2D(e.TEXTURE_2D, 0, i, 1, 1, 0, s, n, r), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.LINEAR), this.texture = t
                    }
                    getTexture() { return this.texture }
                    update() {
                        if (this.canPlay) {
                            if (this.skipFrame = !this.skipFrame, this.skipFrame) return;
                            if (this.video.currentTime == this.currentTime) return;
                            this.currentTime = this.video.currentTime;
                            let e = this.gl;
                            const t = 0,
                                i = e.RGBA,
                                s = e.RGBA,
                                n = e.UNSIGNED_BYTE;
                            e.bindTexture(e.TEXTURE_2D, this.texture), e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, !1), e.texImage2D(e.TEXTURE_2D, t, i, s, n, this.video)
                        }
                    }
                },
                V = i(8514),
                z = i.n(V);
            var X = class {
                    constructor(e) { this.scene = e, this.gl = e.gl, this.uniforms = {}, this.hasNormal = !0, this.onlyVertices = !1, this.customAttributes = [], this.node = new R, this.defines = {}, this.buffersOptions = {}, this.isHidden = !1 }
                    initProgram(e, t) {
                        let i = this.gl,
                            s = function(e) { let t = ""; for (let i in e) t += "#define " + i + " " + e[i] + "\n"; return t }(this.defines),
                            n = i.createShader(i.VERTEX_SHADER);
                        i.shaderSource(n, s + e), i.compileShader(n);
                        let r = i.createShader(i.FRAGMENT_SHADER);
                        if (i.shaderSource(r, s + t), i.compileShader(r), !i.getShaderParameter(n, i.COMPILE_STATUS)) return console.error("error vert", this, i.getShaderInfoLog(n)), null;
                        if (!i.getShaderParameter(r, i.COMPILE_STATUS)) return console.error("error frag", this, i.getShaderInfoLog(r)), null;
                        let a = i.createProgram();
                        i.attachShader(a, n), i.attachShader(a, r), i.linkProgram(a), i.getProgramParameter(a, i.LINK_STATUS) || console.error("Could not initialise shaders", i.getProgramInfoLog(a)), i.useProgram(a), a.vertexPositionAttribute = i.getAttribLocation(a, "aPos"), this.onlyVertices || (a.vertexUvAttribute = i.getAttribLocation(a, "aUvs")), this.hasNormal && (a.vertexNormalAttribute = i.getAttribLocation(a, "aNormal")), this.customAttributes.forEach((e => { a[`${e.name}Attribute`] = i.getAttribLocation(a, e.attributeName) })), this.vertShader = n, this.fragSahder = r, this.program = a;
                        const o = i.getProgramParameter(a, i.ACTIVE_ATTRIBUTES);
                        for (let h = 0; h < o; ++h) {
                            const e = i.getActiveAttrib(a, h);
                            i.getAttribLocation(a, e.name)
                        }
                    }
                    initVao() {
                        let e = this.gl,
                            t = this.buffersOptions;
                        this.vao = e.createVertexArray(), e.bindVertexArray(this.vao), e.bindBuffer(e.ARRAY_BUFFER, this.vertexPositionBuffer), e.vertexAttribPointer(this.program.vertexPositionAttribute, 3, e.FLOAT, !1, t.vertices ? t.vertices.byteStride : 0, t.vertices ? t.vertices.byteOffset : 0), e.enableVertexAttribArray(this.program.vertexPositionAttribute), this.onlyVertices || (e.bindBuffer(e.ARRAY_BUFFER, this.uvsBuffer), e.vertexAttribPointer(this.program.vertexUvAttribute, 2, e.FLOAT, !1, t.uvs ? t.uvs.byteStride : 0, t.uvs ? t.uvs.byteOffset : 0), e.enableVertexAttribArray(this.program.vertexUvAttribute)), this.hasNormal && (e.bindBuffer(e.ARRAY_BUFFER, this.normalBuffer), e.vertexAttribPointer(this.program.vertexNormalAttribute, 3, e.FLOAT, !1, t.normals ? t.normals.byteStride : 0, t.normals ? t.normals.byteOffset : 0), e.enableVertexAttribArray(this.program.vertexNormalAttribute));
                        for (let i = 0; i < this.customAttributes.length; i++) {
                            const t = this.customAttributes[i];
                            e.bindBuffer(e.ARRAY_BUFFER, t.buffer), e.vertexAttribPointer(this.program[t.name + "Attribute"], t.dimensions, e.FLOAT, !1, 0, 0), e.enableVertexAttribArray(this.program[t.name + "Attribute"])
                        }
                        this.onlyVertices || e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, this.indicesBuffer), e.bindVertexArray(null)
                    }
                    initBuffer(e) {
                        let t = this.gl;
                        e.options && (this.buffersOptions = e.options);
                        let i = t.createBuffer();
                        t.bindBuffer(t.ARRAY_BUFFER, i), t.bufferData(t.ARRAY_BUFFER, new Float32Array(e.vertices), t.STATIC_DRAW);
                        let s = t.createBuffer();
                        this.hasNormal && (t.bindBuffer(t.ARRAY_BUFFER, s), t.bufferData(t.ARRAY_BUFFER, new Float32Array(e.normal), t.STATIC_DRAW));
                        let n = t.createBuffer(),
                            r = t.createBuffer();
                        this.onlyVertices || (t.bindBuffer(t.ARRAY_BUFFER, n), t.bufferData(t.ARRAY_BUFFER, new Float32Array(e.uvs), t.STATIC_DRAW), t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, r), t.bufferData(t.ELEMENT_ARRAY_BUFFER, new Uint16Array(e.indices), t.STATIC_DRAW)), this.customAttributes.forEach((e => { e.buffer = t.createBuffer(), t.bindBuffer(t.ARRAY_BUFFER, e.buffer), t.bufferData(t.ARRAY_BUFFER, new Float32Array(e.data), t.STATIC_DRAW) })), this.vertexPositionBuffer = i, this.uvsBuffer = n, this.hasNormal && (this.normalBuffer = s), this.indicesBuffer = r
                    }
                    initMatrix() { this.createUniform("uPMatrix", "mat4"), this.createUniform("uVMatrix", "mat4"), this.createUniform("uMMatrix", "mat4") }
                    bindMatrixUniforms(e) { this.bindUniform("uPMatrix", e.getProjectionMatrix()), this.bindUniform("uVMatrix", e.getViewMatrix()), this.bindUniform("uMMatrix", this.node.getMatrix()) }
                    createUniform(e, t = "float1") { return this.program[e + "Uniform"] = this.gl.getUniformLocation(this.program, e), this.uniforms[e + "Uniform"] = { name: e, type: t, uniform: this.program[e + "Uniform"] }, this.program[e + "Uniform"] }
                    createAttribute(e, t, i, s) { this.customAttributes.push({ name: e, attributeName: t, dimensions: i, buffer: null, data: s }) }
                    bindUniform(e, t) { let i = this.gl; "texture" === this.uniforms[e + "Uniform"].type && i.uniform1i(this.program[e + "Uniform"], t), "textureCube" === this.uniforms[e + "Uniform"].type ? i.uniform1i(this.program[e + "Uniform"], t) : "float1" === this.uniforms[e + "Uniform"].type ? i.uniform1f(this.program[e + "Uniform"], t) : "float2" === this.uniforms[e + "Uniform"].type ? i.uniform2fv(this.program[e + "Uniform"], t) : "float3" === this.uniforms[e + "Uniform"].type ? i.uniform3fv(this.program[e + "Uniform"], t) : "float4" === this.uniforms[e + "Uniform"].type ? i.uniform4fv(this.program[e + "Uniform"], t) : ("mat4" === this.uniforms[e + "Uniform"].type || "[mat4]" === this.uniforms[e + "Uniform"].type) && i.uniformMatrix4fv(this.program[e + "Uniform"], !1, t) }
                    checkVisibility() { return this.isHidden }
                },
                j = i(5313),
                G = i.n(j),
                H = { unlit: "<% if (vert) { %>\n  \n    precision highp float; \n\n    attribute vec3 aPos;\n    attribute vec2 aUvs;\n\n    uniform mat4 uPMatrix;\n    uniform mat4 uMMatrix;\n    uniform mat4 uVMatrix;\n\n    uniform float uPass;\n\n    varying vec2 vUv;\n    varying vec3 vPos;\n\n    void main(){\n        vUv = aUvs;\n\n        mat4 viewMatrix = uVMatrix;\n\n        float reflectionScale = -((uPass * 2.) - 1.);\n        viewMatrix[1][0] *= reflectionScale;\n        viewMatrix[1][1] *= reflectionScale;\n        viewMatrix[1][2] *= reflectionScale;\n        viewMatrix[1][3] *= reflectionScale;\n\n        vPos = (uMMatrix * vec4(aPos, 1.0)).xyz;\n        gl_Position = uPMatrix * viewMatrix * uMMatrix * vec4(aPos, 1.0);\n\n    }\n\n<% } %>\n\n\n\n<% if (frag) { %>\n\n    precision highp float; \n\n    uniform sampler2D uTexture;\n    uniform float uPass;\n\n    varying vec2 vUv;\n    varying vec3 vPos;\n\n    void main() {   \n        vec4 t = texture2D( uTexture, vUv );\n        float alpha = mix(t.a, (1. - (smoothstep(-3., 3., vPos.y))), uPass);\n        gl_FragColor = vec4(t); \n        gl_FragColor.a *= alpha; \n    } \n        \n<% } %>", post: "<% if (vert) { %>\n\n   precision highp float;\n\n    attribute vec3 aPos;\n    attribute vec2 aUvs;\n\n    varying vec2 vUv;\n\n    void main(void) {\n        vUv = aUvs;\n        gl_Position = vec4(aPos, 1.0);\n    }\n\n<% } %>\n\n\n\n<% if (frag) { %>\n\n    precision highp float;\n\n    uniform sampler2D uTexture;\n    varying vec2 vUv;\n\n    uniform vec2 uRez;\n    uniform vec2 uMouse;\n    uniform float uTime;\n\n    uniform float uVignetteStart;\n    uniform float uVignetteEnd;\n    uniform float uVignettePower;\n    uniform float uVignetteElipse;\n    uniform float uBlur;\n    uniform float uFocus;\n\n    const int LOD = 1,  // gaussian done on MIPmap at scale LOD\n          sLOD = 1;     // tile size = 2^LOD\n    const float sigma = float(BLUR_SAMPLES) * .25;\n    const int s = BLUR_SAMPLES/sLOD;\n\n    float gaussian(vec2 i) {\n        return exp( -.5* dot(i/=sigma,i) ) / ( 6.28 * sigma*sigma );\n    }\n\n    vec4 blur(sampler2D sp, vec2 U, vec2 scale) {\n        vec4 O = vec4(0);  \n        \n        for ( int i = 0; i < s*s; i++ ) {\n            vec2 d = vec2(int(mod(float(i), float(s))), i/s)*float(sLOD) - float(BLUR_SAMPLES)/2.;\n            O += gaussian(d) * texture2D( sp, U + scale * d );\n        }\n        \n        return O / O.a;\n    }\n\n    vec4 blur13(sampler2D image, vec2 uv, vec2 resolution, vec2 direction) {\n        vec4 color = vec4(0.0);\n        vec2 off1 = vec2(1.411764705882353) * direction;\n        vec2 off2 = vec2(3.2941176470588234) * direction;\n        vec2 off3 = vec2(5.176470588235294) * direction;\n        color += texture2D(image, uv) * 0.1964825501511404;\n        color += texture2D(image, uv + (off1 / resolution)) * 0.2969069646728344;\n        color += texture2D(image, uv - (off1 / resolution)) * 0.2969069646728344;\n        color += texture2D(image, uv + (off2 / resolution)) * 0.09447039785044732;\n        color += texture2D(image, uv - (off2 / resolution)) * 0.09447039785044732;\n        color += texture2D(image, uv + (off3 / resolution)) * 0.010381362401148057;\n        color += texture2D(image, uv - (off3 / resolution)) * 0.010381362401148057;\n        return color;\n    }\n\n    void main() {\n\n        vec2 uv = vUv - 0.5;\n        uv.x *= uRez.x/uRez.y;\n        uv.x *= 1. - uVignetteElipse;\n        vec2 RadUv = vec2(0.,0.);    \n        RadUv.x = ((atan(uv.x,uv.y) * 0.15915494309189533576888376337251))+0.5;\n        RadUv.y = length(uv);\n        float vignette = smoothstep(uVignetteStart, uVignetteEnd, RadUv.y);\n\n        vignette = pow(vignette, uVignettePower);\n\n        // vec4 color = texture2D( uTexture, vUv);\n        // vec4 color = blur(uTexture, vUv, (1./uRez) * uBlur * vignette * float(BLUR_SCALE));\n        vec4 color = blur13(uTexture, vUv, uRez, vec2(vignette * sin(vUv.x * 6.28) * uBlur, cos(vUv.x * 6.28) * uBlur * vignette));\n        \n        float leftFade = mix(1., smoothstep(-.25, float(FADE_LIMIT), vUv.x), uFocus);\n\n        gl_FragColor = color * leftFade;\n\n        // gl_FragColor.rgb = vec3(vignette);\n        // gl_FragColor.a = 1.;\n\n    }\n\n<% } %>", noise: "<% if (vert) { %>\n  \n    precision highp float; \n\n    attribute vec3 aPos;\n    attribute vec2 aUvs;\n\n    varying vec2 vUv;\n\n    void main(){\n        vUv = aUvs;\n        gl_Position = vec4(aPos, 1.0);\n    }\n\n<% } %>\n\n\n\n<% if (frag) { %>\n\n    precision highp float; \n\n    uniform sampler2D uTexture;\n    uniform float uTime;\n    uniform vec2 uRez;\n\n    uniform float uOpacity;\n    uniform float uDitherWidth;\n    uniform float uDitherSteps;\n    uniform float uSaturation;\n\n    varying vec2 vUv;\n\n    float Noise(vec2 n,float x){n+=x;return fract(sin(dot(n.xy,vec2(12.9898, 78.233)))*43758.5453)*2.0-1.0;}\n\n    // Step 1 in generation of the dither source texture.\n    float Step1(vec2 uv,float n){\n        float a=1.0,b=2.0,c=-12.0,t=1.0;   \n        return (1.0/(a*4.0+b*4.0-c))*(\n            Noise(uv+vec2(-1.0,-1.0)*t,n)*a+\n            Noise(uv+vec2( 0.0,-1.0)*t,n)*b+\n            Noise(uv+vec2( 1.0,-1.0)*t,n)*a+\n            Noise(uv+vec2(-1.0, 0.0)*t,n)*b+\n            Noise(uv+vec2( 0.0, 0.0)*t,n)*c+\n            Noise(uv+vec2( 1.0, 0.0)*t,n)*b+\n            Noise(uv+vec2(-1.0, 1.0)*t,n)*a+\n            Noise(uv+vec2( 0.0, 1.0)*t,n)*b+\n            Noise(uv+vec2( 1.0, 1.0)*t,n)*a+\n        0.0);\n    }\n        \n    // Step 2 in generation of the dither source texture.\n    float Step2(vec2 uv,float n){\n        float a=1.0,b=2.0,c=-2.0,t=1.0;   \n        return (4.0/(a*4.0+b*4.0-c))*(\n            Step1(uv+vec2(-1.0,-1.0)*t,n)*a+\n            Step1(uv+vec2( 0.0,-1.0)*t,n)*b+\n            Step1(uv+vec2( 1.0,-1.0)*t,n)*a+\n            Step1(uv+vec2(-1.0, 0.0)*t,n)*b+\n            Step1(uv+vec2( 0.0, 0.0)*t,n)*c+\n            Step1(uv+vec2( 1.0, 0.0)*t,n)*b+\n            Step1(uv+vec2(-1.0, 1.0)*t,n)*a+\n            Step1(uv+vec2( 0.0, 1.0)*t,n)*b+\n            Step1(uv+vec2( 1.0, 1.0)*t,n)*a+\n        0.0);\n    }\n\n    vec3 Step3T(vec2 uv){\n        float a=Step2(uv,0.07*(fract(uTime)+1.0));    \n        float b=Step2(uv,0.11*(fract(uTime)+1.0));    \n        float c=Step2(uv,0.13*(fract(uTime)+1.0));\n        return mix(vec3(a,b,c), vec3(a), 1. - uSaturation);\n    }\n\n    void main() {   \n        vec3 color = texture2D( uTexture, vUv ).rgb;\n\n        color = mix(\n            color,\n            floor( 0.5 + color * (uDitherSteps+uDitherWidth-1.0) + (-uDitherWidth*0.5) + Step3T(vUv * uRez) * (uDitherWidth)) * (1.0/(uDitherSteps-1.0)),\n            uOpacity\n        );\n\n        gl_FragColor = vec4(color, 1.); \n    } \n        \n<% } %>", skin: "<% if (vert) { %>\n\n    precision highp float; \n    #define MAX_BONES 6\n\n    attribute vec3 aPos;\n    attribute vec2 aUvs;\n    attribute vec4 aWeights_0;         // 4 weights per vertex\n    attribute vec4 aBoneNdx_0;         // 4 bone indices per vertex\n    attribute vec4 aWeights_1;         // 4 weights per vertex\n    attribute vec4 aBoneNdx_1;         // 4 bone indices per vertex\n\n    uniform mat4 uBones[MAX_BONES];   // 1 matrix per bone\n\n    uniform mat4 uPMatrix;\n    uniform mat4 uMMatrix;\n    uniform mat4 uVMatrix;\n\n    varying vec2 vUv;\n    varying vec3 vDebug;\n\n    void main(){\n        vUv = aUvs;\n        \n        vec4 skinedPos = vec4(0.);\n        for(int i=0; i < MAX_BONES; ++i){\n            if(i > 4) {\n                skinedPos += uBones[int(aBoneNdx_1[i - 4])] * vec4(aPos, 1.0) * aWeights_1[i - 4];\n            } else {\n                skinedPos += uBones[int(aBoneNdx_0[i])] * vec4(aPos, 1.0) * aWeights_0[i];\n            }\n        }\n\n        gl_Position = uPMatrix * uVMatrix * skinedPos;\n\n    }\n\n<% } %>\n\n\n\n<% if (frag) { %>\n\n    precision highp float; \n\n    varying vec2 vUv;\n\n    uniform sampler2D uTexture;\n\n    void main() {   \n        vec4 t = texture2D( uTexture, vUv );\n        gl_FragColor = vec4(t.xyz, 1.); \n        // gl_FragColor = vec4(1., 0., 0., 1.); \n    } \n        \n<% } %>", ground: "<% if (vert) { %>\n  \n    precision highp float; \n\n    attribute vec3 aPos;\n    attribute vec2 aUvs;\n\n    uniform mat4 uPMatrix;\n    uniform mat4 uMMatrix;\n    uniform mat4 uVMatrix;\n\n    varying vec2 vUv;\n    varying vec4 vPos;\n\n    void main(){\n        vUv = aUvs;\n\n        vec4 wPos = uMMatrix * vec4(aPos, 1.0);\n        vPos = wPos;\n        gl_Position = uPMatrix * uVMatrix * wPos;\n\n    }\n\n<% } %>\n\n\n\n<% if (frag) { %>\n\n    precision highp float; \n\n    uniform sampler2D uTexture;\n    uniform sampler2D uReflectionMap;\n    uniform sampler2D uShadowMap;\n\n    uniform mat4 uPMatrix;\n    uniform mat4 uMMatrix;\n    uniform mat4 uVMatrix;\n    uniform vec2 uRez;\n\n    uniform float uReflectionPower;\n    uniform float uFadeBorder;\n    uniform float uBakedLightPower;\n    uniform float uCustomColorFactor;\n\n    uniform vec3 uColor0;\n    uniform vec3 uColor1;\n\n    varying vec2 vUv;\n    varying vec4 vPos;\n\n    <%= commons.blur %>\n    <%= commons.screenBlending %>\n\n    void main() {   \n\n        vec4 clipSpace = uPMatrix * (uVMatrix * vPos);\n        vec3 ndc = clipSpace.xyz / clipSpace.w;\n        vec2 ssUv = (ndc.xy * .5 + .5);\n\n        vec3 r = blur5(uReflectionMap, ssUv, uRez, vec2(2., -2.)).xyz;\n        vec4 t = texture2D( uTexture, vUv );\n        vec4 s = texture2D( uShadowMap, vUv );\n\n        float h = smoothstep(0., uFadeBorder, vUv.x) - smoothstep(1. - uFadeBorder, 1., vUv.x);\n        float v = smoothstep(0., uFadeBorder, vUv.y) - smoothstep(1. - uFadeBorder, 1., vUv.y);\n\n        vec2 uv = vUv - 0.5;\n        uv.x *= uRez.x/uRez.y;\n        vec2 RadUv = vec2(0.,0.);    \n        RadUv.x = ((atan(uv.x,uv.y) * 0.15915494309189533576888376337251))+0.5;\n        RadUv.y = length(uv);\n        float vg = 1. - smoothstep(0.1, 0.66, RadUv.y);\n        vec3 customColor = mix(uColor0, uColor1, t.z) * vg * .75;\n\n        t.xyz = mix(t.xyz, customColor, uCustomColorFactor);\n        vec3 color = t.xyz * uBakedLightPower * s.rgb;\n        color = blendScreen(color, r.rgb, uReflectionPower);\n\n        gl_FragColor.rgb = color; \n        gl_FragColor.a = h * v;\n\n    } \n        \n<% } %>", lightMesh: "<% if (vert) { %>\n  \n    precision highp float; \n\n    attribute vec3 aPos;\n    attribute vec2 aUvs;\n\n    uniform mat4 uPMatrix;\n    uniform mat4 uMMatrix;\n    uniform mat4 uVMatrix;\n\n    uniform float uPass;\n\n    varying vec2 vUv;\n    varying vec3 vPos;\n\n    void main(){\n        vUv = aUvs;\n\n        mat4 viewMatrix = uVMatrix;\n        vPos = (uMMatrix * vec4(aPos, 1.0)).xyz;\n        gl_Position = uPMatrix * viewMatrix * uMMatrix * vec4(aPos, 1.0);\n\n    }\n\n<% } %>\n\n\n<% if (frag) { %>\n\n    precision highp float; \n\n    uniform sampler2D uTexture;\n    uniform float uPass;\n\n    varying vec2 vUv;\n    varying vec3 vPos;\n\n    <%= commons.blur %>\n\n    void main() {   \n\n        vec2 uv = vUv;\n        uv.y = vUv.y * .9;\n        vec3 t = blur5(uTexture, uv, vec2(720., 480.), vec2(4., -4.)).xyz;\n        float alpha = pow(smoothstep(0., 1.5, vUv.y), 2.);\n\n        gl_FragColor.rgb = pow(t, vec3(2.)); \n        gl_FragColor.a = alpha * .3; \n\n        // gl_FragColor = vec4(vUv.y, 0., 0., 1.);\n    } \n        \n<% } %>", screen: "<% if (vert) { %>\n  \n    precision highp float; \n\n    attribute vec3 aPos;\n    attribute vec3 aNormal;\n    attribute vec2 aUvs;\n\n    uniform mat4 uPMatrix;\n    uniform mat4 uMMatrix;\n    uniform mat4 uVMatrix;\n\n    uniform float uPass;\n\n    varying vec2 vUv;\n    varying vec3 vPos;\n    varying vec3 vNormal;\n\n    void main(){\n        vUv = aUvs;\n        vNormal = aNormal;\n\n        mat4 viewMatrix = uVMatrix;\n\n        float reflectionScale = -((uPass * 2.) - 1.);\n        viewMatrix[1][0] *= reflectionScale;\n        viewMatrix[1][1] *= reflectionScale;\n        viewMatrix[1][2] *= reflectionScale;\n        viewMatrix[1][3] *= reflectionScale;\n\n        vPos = (uMMatrix * vec4(aPos, 1.0)).xyz;\n        gl_Position = uPMatrix * viewMatrix * uMMatrix * vec4(aPos, 1.0);\n\n    }\n\n<% } %>\n\n\n\n<% if (frag) { %>\n\n    precision highp float; \n\n    uniform sampler2D uTexture;\n    uniform float uPass;\n\n    uniform vec2 uRez;\n    uniform float uVignetteStart;\n    uniform float uVignetteEnd;\n    uniform float uVignetteOpacity;\n    uniform float uVignettePower;\n    uniform float uInnerOpacity;\n\n    varying vec2 vUv;\n    varying vec3 vPos;\n    varying vec3 vNormal;\n\n    const float fadeBorder = 0.002;\n\n    void main() {   \n\n        vec2 uv = vUv - 0.5;\n        uv.x *= uRez.x/uRez.y;\n        vec2 RadUv = vec2(0.,0.);    \n        RadUv.x = ((atan(uv.x,uv.y) * 0.15915494309189533576888376337251))+0.5;\n        RadUv.y = length(uv);\n\n        float vignette = smoothstep(uVignetteStart, uVignetteEnd, RadUv.y) * uVignetteOpacity;\n        vignette = pow(vignette, uVignettePower);\n\n        float h = smoothstep(0., fadeBorder, vUv.x) - smoothstep(1. - fadeBorder, 1., vUv.x);\n        float v = smoothstep(0., fadeBorder, vUv.y) - smoothstep(1. - fadeBorder, 1., vUv.y);\n\n        vec4 t = texture2D( uTexture, vUv );\n        float alpha = mix(t.a, (1. - (smoothstep(-3., 3., vPos.y))), uPass);\n\n        gl_FragColor = vec4(t);\n\n        gl_FragColor.rgb *= 1. - vignette; \n        gl_FragColor.rgb = mix(gl_FragColor.rgb * uInnerOpacity, gl_FragColor.rgb, smoothstep(.33, .66, vNormal.x));\n        gl_FragColor.rgb *= h * v; \n\n        gl_FragColor.a *= alpha;\n\n\n\n    } \n        \n<% } %>", background: "<% if (vert) { %>\n  \n    precision highp float; \n\n    attribute vec3 aPos;\n    attribute vec2 aUvs;\n\n    varying vec2 vUv;\n\n    void main(){\n        vUv = aUvs;\n        gl_Position = vec4(aPos, 1.0);\n    }\n\n<% } %>\n\n\n\n<% if (frag) { %>\n\n    precision highp float; \n\n    varying vec2 vUv;\n\n    uniform float uOpacity;\n    uniform vec3 uColor0;\n    uniform vec3 uColor1;\n\n    void main() {   \n\n\n        vec3 color = mix(uColor0, uColor1, vUv.x);\n        float alpha = smoothstep(0.3, 1. , vUv.y);\n\n        gl_FragColor.rgb = color; \n        gl_FragColor.a = uOpacity * alpha;\n\n    } \n        \n<% } %>", commons: { triplanar: "vec3 blendNormal(vec3 normal){\n    vec3 blending = abs(normal);\n    blending = normalize(max(blending, 0.00001));\n    blending /= vec3(blending.x + blending.y + blending.z);\n    return blending;\n}\n\nvec3 triplanarMapping (sampler2D texture, vec3 normal, vec3 position) {\n    vec3 normalBlend = blendNormal(normal);\n    vec3 xColor = texture2D(texture, position.yz).rgb;\n    vec3 yColor = texture2D(texture, position.xz).rgb;\n    vec3 zColor = texture2D(texture, position.xy).rgb;\n    return (xColor * normalBlend.x + yColor * normalBlend.y + zColor * normalBlend.z);\n}", colorBurn: "float blendColorBurn(float base, float blend) {\n    return (blend==0.0)?blend:max((1.0-((1.0-base)/blend)),0.0);\n}\n\nvec3 blendColorBurn(vec3 base, vec3 blend) {\n    return vec3(blendColorBurn(base.r,blend.r),blendColorBurn(base.g,blend.g),blendColorBurn(base.b,blend.b));\n}", rotation: "mat4 rotationMatrix(vec3 axis, float angle) {\n    axis = normalize(axis);\n    float s = sin(angle);\n    float c = cos(angle);\n    float oc = 1.0 - c;\n    \n    return mat4(oc * axis.x * axis.x + c,           oc * axis.x * axis.y - axis.z * s,  oc * axis.z * axis.x + axis.y * s,  0.0,\n                oc * axis.x * axis.y + axis.z * s,  oc * axis.y * axis.y + c,           oc * axis.y * axis.z - axis.x * s,  0.0,\n                oc * axis.z * axis.x - axis.y * s,  oc * axis.y * axis.z + axis.x * s,  oc * axis.z * axis.z + c,           0.0,\n                0.0,                                0.0,                                0.0,                                1.0);\n}\n\nvec3 rotate(vec3 v, vec3 axis, float angle) {\n    mat4 m = rotationMatrix(axis, angle);\n    return (m * vec4(v, 1.0)).xyz;\n}", blur: "\nvec4 blur5(sampler2D image, vec2 uv, vec2 resolution, vec2 direction) {\n  vec4 color = vec4(0.0);\n  vec2 off1 = vec2(1.3333333333333333) * direction;\n  color += texture2D(image, uv) * 0.29411764705882354;\n  color += texture2D(image, uv + (off1 / resolution)) * 0.35294117647058826;\n  color += texture2D(image, uv - (off1 / resolution)) * 0.35294117647058826;\n  return color; \n}\n", normalBlending: "\nvec3 blendNormal(vec3 base, vec3 blend) {\n\treturn blend;\n}\n\nvec3 blendNormal(vec3 base, vec3 blend, float opacity) {\n\treturn (blendNormal(base, blend) * opacity + base * (1.0 - opacity));\n}", screenBlending: "float blendScreen(float base, float blend) {\n\treturn 1.0-((1.0-base)*(1.0-blend));\n}\n\nvec3 blendScreen(vec3 base, vec3 blend) {\n\treturn vec3(blendScreen(base.r,blend.r),blendScreen(base.g,blend.g),blendScreen(base.b,blend.b));\n}\n\nvec3 blendScreen(vec3 base, vec3 blend, float opacity) {\n\treturn (blendScreen(base, blend) * opacity + base * (1.0 - opacity));\n}" } };
            var W = class {
                constructor(e, t = 1) {
                    this.string = e;
                    let i = {};
                    if (t > 1) { this.passes = []; for (let e = 0; e < t - 1; e++) i["pass_" + (e + 1)] = !0, this.passes.push(G().render(this.string, { frag: !1, vert: !1, passes: i, commons: H.commons })), i["pass_" + (e + 1)] = !1 }
                    this.frag = G().render(this.string, { frag: !0, vert: !1, passes: i, commons: H.commons }), this.vert = G().render(this.string, { frag: !1, vert: !0, passes: i, commons: H.commons })
                }
            };
            var Y = class extends X {
                constructor(e, t, i, s) { super(e), this.gl = e.gl, this.scene = e, this.geom = t, this.texture = s, this.node = new R, this.shader = new W(H[i]), this.visible = !0, this.hasNormal = !1, this.initBuffer({ vertices: t.vertices, uvs: t.uvs, indices: t.indices }), this.initProgram(this.shader.vert, this.shader.frag), this.initVao(), this.initMatrix(), this.createUniforms(), this.opacity = 1, this.depthTest = !0, this.node.position = m.d9(this.geom.translate), this.node.initialPosition = m.d9(this.geom.translate), this.node.scale = m.d9(this.geom.scale), this.node.rotation = m.d9(this.geom.rotation), this.node.initialRotation = m.d9(this.geom.rotation), this.proxies = [], this.preventPass = !1 }
                createUniforms() { this.createUniform("uTexture", "texture"), this.createUniform("uOpacity"), this.createUniform("uPass") }
                applyState() {
                    let e = this.gl;
                    this.scene.applyDefaultState(), 0 == this.depthTest && e.disable(e.DEPTH_TEST)
                }
                preRender() {}
                render(e = 0) {
                    if (!this.visible || this.preventPass && 1 == e) return;
                    this.preRender();
                    let t = this.gl;
                    if (t.useProgram(this.program), t.bindVertexArray(this.vao), this.applyState(), this.bindUniform("uOpacity", this.opacity), this.bindUniform("uPass", e), t.activeTexture(t.TEXTURE0), t.bindTexture(t.TEXTURE_2D, this.scene.textureLoader.getTexture(this.texture)), this.bindUniform("uTexture", 0), this.proxies.length > 0) {
                        this.bindUniform("uPMatrix", this.scene.camera.getProjectionMatrix()), this.bindUniform("uVMatrix", this.scene.camera.getViewMatrix());
                        for (let e = 0; e < this.proxies.length; e++) {
                            let i = this.scene.projects[this.scene.activeProjects[e]].textureName;
                            t.activeTexture(t.TEXTURE0), this.scene.videoTextures[i] ? t.bindTexture(t.TEXTURE_2D, this.scene.videoTextures[i].getTexture()) : t.bindTexture(t.TEXTURE_2D, this.scene.textureLoader.getTexture(i)), this.bindUniform("uTexture", 0), this.bindUniform("uMMatrix", this.proxies[e].getMatrix()), t.drawElements(t.TRIANGLES, this.geom.indices.length, t.UNSIGNED_SHORT, 0)
                        }
                    } else this.bindMatrixUniforms(this.scene.camera), t.drawElements(t.TRIANGLES, this.geom.indices.length, t.UNSIGNED_SHORT, 0);
                    t.bindVertexArray(null)
                }
            };
            var q = class {
                constructor(e, t = 1, i = "rgb", s = null, n = !1, r = "linear") { this.scene = e, this.gl = e.gl, this.pixelRatio = t, this.format = i, this.size = s, this.depth = n, this.filter = r, this.depthTexture = null, this.previousFrameBuffer = null, this.preventResize = !1, null === s ? (this.width = this.scene.width * this.pixelRatio, this.heigth = this.scene.height * this.pixelRatio) : (this.width = s, this.heigth = s), this.createTexture(), n && this.createDepthTexture(), this.createFB(), this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null), window.addEventListener("resize", this.onResize.bind(this)), this.scene.passes.push(this) }
                createTexture() {
                    this.targetTexture = this.gl.createTexture();
                    let e = this.gl;
                    e.bindTexture(e.TEXTURE_2D, this.targetTexture);
                    let t = e.RGBA,
                        i = e.RGBA,
                        s = e.UNSIGNED_BYTE;
                    "float" === this.format && (s = e.FLOAT);
                    e.texImage2D(e.TEXTURE_2D, 0, t, this.width, this.heigth, 0, i, s, null), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.LINEAR), "nearest" == this.filter && (e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.NEAREST), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.NEAREST))
                }
                createDepthTexture() {
                    let e = this.scene.gl;
                    this.depthTexture = e.createTexture(), e.bindTexture(e.TEXTURE_2D, this.depthTexture), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.NEAREST), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.NEAREST), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE), e.texImage2D(e.TEXTURE_2D, 0, e.DEPTH_COMPONENT, this.width, this.heigth, 0, e.DEPTH_COMPONENT, e.UNSIGNED_INT, null)
                }
                onResize() {
                    if (this.preventResize) return;
                    let e = this.gl;
                    null === this.size ? (this.width = this.scene.width * this.pixelRatio, this.heigth = this.scene.height * this.pixelRatio) : (this.width = this.size, this.heigth = this.size), e.deleteTexture(this.targetTexture), this.depth && e.deleteTexture(this.depthTexture), e.deleteFramebuffer(this.fb), this.createTexture(), this.depth && this.createDepthTexture(), this.createFB(), this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null)
                }
                createFB() {
                    let e = this.gl;
                    this.fb = e.createFramebuffer(), e.bindFramebuffer(e.FRAMEBUFFER, this.fb);
                    const t = e.COLOR_ATTACHMENT0;
                    e.framebufferTexture2D(e.FRAMEBUFFER, t, e.TEXTURE_2D, this.targetTexture, 0);
                    const i = e.createRenderbuffer();
                    e.bindRenderbuffer(e.RENDERBUFFER, i), e.renderbufferStorage(e.RENDERBUFFER, e.DEPTH_COMPONENT16, this.width, this.heigth), e.framebufferRenderbuffer(e.FRAMEBUFFER, e.DEPTH_ATTACHMENT, e.RENDERBUFFER, i), this.depth && e.framebufferTexture2D(e.FRAMEBUFFER, e.DEPTH_ATTACHMENT, e.TEXTURE_2D, this.depthTexture, 0)
                }
                preRender() {
                    let e = this.gl;
                    this.previousFrameBuffer = this.scene.activeFrameBuffer, this.scene.activeFrameBuffer = this.fb, e.bindFramebuffer(e.FRAMEBUFFER, this.scene.activeFrameBuffer), e.viewport(0, 0, this.width, this.heigth), e.clearColor(this.scene.clearColor[0], this.scene.clearColor[1], this.scene.clearColor[2], this.scene.clearColor[3]), e.clear(e.COLOR_BUFFER_BIT | e.DEPTH_BUFFER_BIT)
                }
                postRender() {
                    let e = this.gl;
                    this.scene.activeFrameBuffer = this.previousFrameBuffer, e.bindFramebuffer(e.FRAMEBUFFER, this.scene.activeFrameBuffer)
                }
                bind() {
                    let e = this.gl;
                    e.bindTexture(e.TEXTURE_2D, this.targetTexture)
                }
                bindDepth() {
                    let e = this.gl;
                    this.depth && e.bindTexture(e.TEXTURE_2D, this.depthTexture)
                }
                getTexture() { return this.targetTexture }
            };
            var Q = class {
                constructor(e = "#000000") { return this.source = e, this }
                toRgb() { const e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(this.source); return e ? [parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16)] : null }
                toRgbNorm() { const e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(this.source); return e ? [parseInt(e[1], 16) / 255, parseInt(e[2], 16) / 255, parseInt(e[3], 16) / 255] : null }
                rgbToHex(e, t, i) { return "#" + ((1 << 24) + (Math.round(e) << 16) + (Math.round(t) << 8) + Math.round(i)).toString(16).slice(1) }
            };
            var J = class extends X {
                constructor(e, t) { super(e), this.gl = e.gl, this.scene = e, this.geom = t, this.node = new R, this.shader = new W(H.ground), this.visible = !0, this.hasNormal = !1, this.initBuffer({ vertices: t.vertices, uvs: t.uvs, indices: t.indices }), this.initProgram(this.shader.vert, this.shader.frag), this.initVao(), this.initMatrix(), this.createUniforms(), this.opacity = 1, this.depthTest = !0, this.rt = new q(this.scene, .3, "rgb", null, !0), this.rt.clearColor = [0, 0, 0, 1], this.node.position = m.d9(this.geom.translate), this.node.scale = m.d9(this.geom.scale), this.node.rotation = m.d9(this.geom.rotation), this.proxies = [], this.config = { reflections: { value: .9, range: [0, 1] }, bakedLightPower: { value: .9, range: [0, 1] }, fadeBorder: { value: .3, range: [0, 1] }, bgColorFactor: { value: 0, range: [0, 1] } }, M.addConfig(this.config, "Ground") }
                createUniforms() { this.createUniform("uTexture", "texture"), this.createUniform("uReflectionMap", "texture"), this.createUniform("uShadowMap", "texture"), this.createUniform("uRez", "float2"), this.createUniform("uOpacity"), this.createUniform("uPass"), this.createUniform("uReflectionPower"), this.createUniform("uFadeBorder"), this.createUniform("uBakedLightPower"), this.createUniform("uColor0", "float3"), this.createUniform("uColor1", "float3"), this.createUniform("uCustomColorFactor") }
                applyState() {
                    let e = this.gl;
                    this.scene.applyDefaultState(), e.depthMask(!1)
                }
                preRender() {}
                render(e = 0) {
                    if (!this.visible) return;
                    this.preRender();
                    let t = this.gl;
                    t.useProgram(this.program), t.bindVertexArray(this.vao), this.applyState(), this.bindUniform("uOpacity", this.opacity), this.bindUniform("uPass", e), this.bindUniform("uReflectionPower", this.config.reflections.value), this.bindUniform("uFadeBorder", this.config.fadeBorder.value), this.bindUniform("uBakedLightPower", this.config.bakedLightPower.value), this.bindUniform("uCustomColorFactor", this.config.bgColorFactor.value), this.bindUniform("uRez", [this.scene.width, this.scene.height]), this.bindUniform("uColor0", new Q(this.scene.background.config.color0.value).toRgbNorm()), this.bindUniform("uColor1", new Q(this.scene.background.config.color1.value).toRgbNorm()), t.activeTexture(t.TEXTURE0), t.bindTexture(t.TEXTURE_2D, this.scene.textureLoader.getTexture("Ground")), this.bindUniform("uTexture", 0), t.activeTexture(t.TEXTURE1), this.rt.bind(), this.bindUniform("uReflectionMap", 1), t.activeTexture(t.TEXTURE2), t.bindTexture(t.TEXTURE_2D, this.scene.textureLoader.getTexture("GroundShadow")), this.bindUniform("uShadowMap", 2), this.bindMatrixUniforms(this.scene.camera), t.drawElements(t.TRIANGLES, this.geom.indices.length, t.UNSIGNED_SHORT, 0), t.bindVertexArray(null)
                }
            };
            var $ = class extends X {
                constructor(e, t, i, s) { super(e), this.gl = e.gl, this.scene = e, this.geom = t, this.texture = s, this.node = new R, this.shader = new W(H[i]), this.visible = !0, this.initBuffer({ vertices: t.vertices, normal: t.normal, uvs: t.uvs, indices: t.indices }), this.initProgram(this.shader.vert, this.shader.frag), this.initVao(), this.initMatrix(), this.createUniforms(), this.opacity = 1, this.depthTest = !0, this.node.position = m.d9(this.geom.translate), this.node.initialPosition = m.d9(this.geom.translate), this.node.scale = m.d9(this.geom.scale), this.node.rotation = m.d9(this.geom.rotation), this.node.initialRotation = m.d9(this.geom.rotation), this.proxies = [], this.config = { vignetteStart: { value: .4, range: [0, 2] }, vignetteEnd: { value: .9, range: [0, 2] }, vignettePower: { value: .9, range: [0, 4] }, vignetteOpacity: { value: .3, range: [0, 1] }, innerOpacity: { value: .6, range: [0, 1] } }, M.addConfig(this.config, "Screen") }
                createUniforms() { this.createUniform("uTexture", "texture"), this.createUniform("uOpacity"), this.createUniform("uPass"), this.createUniform("uRez", "float2"), this.createUniform("uVignetteStart"), this.createUniform("uVignetteEnd"), this.createUniform("uVignetteOpacity"), this.createUniform("uVignettePower"), this.createUniform("uInnerOpacity") }
                applyState() {
                    let e = this.gl;
                    this.scene.applyDefaultState(), 0 == this.depthTest && e.depthMask(!1), e.enable(e.CULL_FACE)
                }
                preRender() {}
                render(e = 0) {
                    if (!this.visible) return;
                    this.preRender();
                    let t = this.gl;
                    if (t.useProgram(this.program), t.bindVertexArray(this.vao), this.applyState(), this.bindUniform("uOpacity", this.opacity), this.bindUniform("uPass", e), this.bindUniform("uRez", [this.scene.width, this.scene.height]), this.bindUniform("uVignetteStart", this.config.vignetteStart.value), this.bindUniform("uVignetteEnd", this.config.vignetteEnd.value), this.bindUniform("uVignetteOpacity", this.config.vignetteOpacity.value), this.bindUniform("uVignettePower", this.config.vignettePower.value), this.bindUniform("uInnerOpacity", this.config.innerOpacity.value), this.proxies.length > 0) {
                        this.bindUniform("uPMatrix", this.scene.camera.getProjectionMatrix()), this.bindUniform("uVMatrix", this.scene.camera.getViewMatrix());
                        for (let e = 0; e < this.proxies.length; e++) {
                            t.activeTexture(t.TEXTURE0);
                            let i = this.scene.projects[this.scene.activeProjects[e]].textureName;
                            this.scene.videoTextures[i] ? t.bindTexture(t.TEXTURE_2D, this.scene.videoTextures[i].getTexture()) : t.bindTexture(t.TEXTURE_2D, this.scene.textureLoader.getTexture(i)), this.bindUniform("uTexture", 0), this.bindUniform("uMMatrix", this.proxies[e].getMatrix()), t.drawElements(t.TRIANGLES, this.geom.indices.length, t.UNSIGNED_SHORT, 0)
                        }
                    } else this.bindMatrixUniforms(this.scene.camera), t.drawElements(t.TRIANGLES, this.geom.indices.length, t.UNSIGNED_SHORT, 0);
                    t.bindVertexArray(null)
                }
            };
            var K = { vertices: [-1, -1, 0, -1, 1, 0, 1, 1, 0, 1, -1, 0], uvs: [0, 0, 0, 1, 1, 1, 1, 0], indices: [0, 1, 2, 0, 2, 3] },
                Z = i(5317);
            var ee = class extends X {
                constructor(e, t) { super(e), this.gl = e.gl, this.scene = e, this.shader = new W(H.background), this.hasNormal = !1, this.initBuffer({ vertices: K.vertices, uvs: K.uvs, indices: K.indices }), this.initProgram(this.shader.vert, this.shader.frag), this.initVao(), this.initMatrix(), this.createUniforms(), this.config = { opacity: { value: .5, range: [0, 1] }, defaultColor0: { value: "#630d8c", guiType: "color" }, defaultColor1: { value: "#990b75", guiType: "color" }, color0: { value: "#630d8c", guiType: "color" }, color1: { value: "#990b75", guiType: "color" } }, M.addConfig(this.config, "Background"), this.scene.on("focusOnProject", (e => { this.scene.animations.isFocus && !this.scene.animations.isTransitionning && this.changeColor(e.backgroundColor0, e.backgroundColor1) })), this.tween = null, this.opacity = 1 }
                createUniforms() { this.createUniform("uColor0", "float3"), this.createUniform("uColor1", "float3"), this.createUniform("uOpacity") }
                applyState() {
                    const { gl: e } = this;
                    this.scene.applyDefaultState(), e.disable(e.CULL_FACE), e.disable(e.DEPTH_TEST), e.depthMask(!1)
                }
                changeColor(e, t) {
                    this.tween && this.tween.kill();
                    const i = new Q(this.config.color0.value).toRgb(),
                        s = new Q(this.config.color1.value).toRgb();
                    e = new Q(e).toRgb(), t = new Q(t).toRgb();
                    const n = { r0: i[0], g0: i[1], b0: i[2], r1: s[0], g1: s[1], b1: s[2] };
                    this.tween = Z.Q3.to(n, {
                        duration: 1,
                        ease: "power1.inOut",
                        r0: e[0],
                        g0: e[1],
                        b0: e[2],
                        r1: t[0],
                        g1: t[1],
                        b1: t[2],
                        onUpdate: () => {
                            const e = new Q;
                            this.config.color0.value = e.rgbToHex(n.r0, n.g0, n.b0), this.config.color1.value = e.rgbToHex(n.r1, n.g1, n.b1)
                        }
                    })
                }
                preRender() {}
                render() {
                    this.preRender();
                    const { gl: e } = this;
                    e.useProgram(this.program), e.bindVertexArray(this.vao), this.applyState(), this.bindUniform("uOpacity", this.config.opacity.value), this.bindUniform("uColor0", new Q(this.config.color0.value).toRgbNorm()), this.bindUniform("uColor1", new Q(this.config.color1.value).toRgbNorm()), e.drawElements(e.TRIANGLES, K.indices.length, e.UNSIGNED_SHORT, 0), e.bindVertexArray(null)
                }
            };
            const te = [-1, 1, 0, -1, -1, 0, 1, -1, 0, 1, 1, 0],
                ie = [0, 1, 2, 0, 2, 3],
                se = [0, 1, 0, 0, 1, 0, 1, 1];
            var ne = class extends X {
                constructor(e) {
                    super(e), this.hasNormal = !1;
                    const t = new W(H.post);
                    this.defines.BLUR_SAMPLES = 3, this.defines.BLUR_SCALE = .5, this.defines.FADE_LIMIT = this.scene.mobile ? 1 : .55, this.initProgram(t.vert, t.frag), this.initBuffer({ vertices: te, uvs: se, indices: ie }), this.initVao(), this.createUniforms(), this.focus = this.scene.mobile ? .5 : .1, this.rt = new q(this.scene, 1, "rgb", null, !0), this.config = { vignetteStart: { value: .15, range: [0, 2] }, vignetteEnd: { value: 1, range: [0, 2] }, vignettePower: { value: 1, range: [1, 4] }, vignetteElipse: { value: .3, range: [0, 1] }, blur: { value: 6, range: [0, 30] } }, M.addConfig(this.config, "Post")
                }
                createUniforms() { this.createUniform("uTexture", "texture"), this.createUniform("uRez", "float2"), this.createUniform("uMouse", "float2"), this.createUniform("uTime"), this.createUniform("uVignetteStart"), this.createUniform("uVignetteEnd"), this.createUniform("uVignettePower"), this.createUniform("uVignetteElipse"), this.createUniform("uBlur"), this.createUniform("uFocus") }
                applyState() {
                    const { gl: e } = this;
                    this.scene.applyDefaultState(), e.disable(e.DEPTH_TEST)
                }
                preRender() { this.rt.preRender() }
                postRender() { this.rt.postRender() }
                render() {
                    const { gl: e } = this;
                    e.useProgram(this.program), e.bindVertexArray(this.vao), this.applyState(), e.activeTexture(e.TEXTURE0), this.rt.bind(), this.bindUniform("uTexture", 0), this.bindUniform("uVignetteStart", this.config.vignetteStart.value), this.bindUniform("uVignetteEnd", this.config.vignetteEnd.value), this.bindUniform("uVignettePower", this.config.vignettePower.value), this.bindUniform("uVignetteElipse", this.config.vignetteElipse.value), this.bindUniform("uBlur", this.config.blur.value * this.defines.BLUR_SCALE), this.bindUniform("uRez", [this.scene.width, this.scene.height]), this.bindUniform("uMouse", C.cursor), this.bindUniform("uTime", this.scene.time), this.bindUniform("uFocus", this.focus), e.drawElements(e.TRIANGLES, ie.length, e.UNSIGNED_SHORT, 0), e.bindVertexArray(null)
                }
            };
            const re = [-1, 1, 0, -1, -1, 0, 1, -1, 0, 1, 1, 0],
                ae = [0, 1, 2, 0, 2, 3],
                oe = [0, 1, 0, 0, 1, 0, 1, 1];
            var he = class extends X {
                    constructor(e) {
                        super(e), this.hasNormal = !1;
                        const t = new W(H.noise);
                        this.initProgram(t.vert, t.frag), this.initBuffer({ vertices: re, uvs: oe, indices: ae }), this.initVao(), this.createUniforms(), this.rt = new q(this.scene, 1, "rgb", null, !0), this.config = { opacity: { value: .4, range: [0, 1] }, ditherWidth: { value: 1, range: [0, 10] }, ditherSteps: { value: 6.5, range: [0, 20] }, saturation: { value: 1, range: [0, 1] } }, M.addConfig(this.config, "Dithering")
                    }
                    createUniforms() { this.createUniform("uTexture", "texture"), this.createUniform("uRez", "float2"), this.createUniform("uTime"), this.createUniform("uOpacity"), this.createUniform("uDitherWidth"), this.createUniform("uDitherSteps"), this.createUniform("uSaturation") }
                    applyState() {
                        const { gl: e } = this;
                        this.scene.applyDefaultState(), e.disable(e.DEPTH_TEST)
                    }
                    preRender() { this.rt.preRender() }
                    postRender() { this.rt.postRender() }
                    render() {
                        const { gl: e } = this;
                        e.useProgram(this.program), e.bindVertexArray(this.vao), this.applyState(), e.activeTexture(e.TEXTURE0), this.rt.bind(), this.bindUniform("uTexture", 0), this.bindUniform("uOpacity", this.config.opacity.value), this.bindUniform("uDitherWidth", this.config.ditherWidth.value), this.bindUniform("uDitherSteps", this.config.ditherSteps.value), this.bindUniform("uSaturation", this.config.saturation.value), this.bindUniform("uTime", this.scene.time), this.bindUniform("uRez", [this.scene.width, this.scene.height]), e.drawElements(e.TRIANGLES, ae.length, e.UNSIGNED_SHORT, 0), e.bindVertexArray(null)
                    }
                },
                ce = { main: { test: { url: "glxp/UV_Grid.jpg", options: ["mipmap"] }, Ground: { url: "glxp/textures/Scene_02_Pass__Main_0000_2k.jpg", options: ["flipY"] }, GroundShadow: { url: "glxp/textures/Scene_02_Pass__Shdw_0000_1k.jpg", options: ["flipY"] }, People: { url: "glxp/textures/Scene_02_Pass__Main_0001_2k-002.jpg", options: ["flipY"] } } };
            var ue = class {
                constructor(e) { this.scene = e, this.playingIntro = !1, this.isPlaying = !1, this.isTransitionning = !1, this.isFocus = !1, this.isAbout = !1, this.isHome = !1, this.pendingAnim = null }
                onLoaded() { null !== this.pendingAnim && ("focus" == this.pendingAnim ? this.switchToFocus() : "about" == this.pendingAnim && this.switchToAbout(), this.pendingAnim = null) }
                focus(e) {
                    (this.isFocus || this.isAbout) && this.scene.onFocusChange(e), Z.Q3.to(this.scene, { screenRot: Math.PI / 3 + 2 * Math.PI / 5 * e, duration: 3, onStart: () => { this.isPlaying = !0 }, onComplete: () => { this.isFocus || Z.Q3.delayedCall(8, (() => { this.isPlaying = !1 })) }, ease: "Power2.easeInOut" })
                }
                playIntro() {
                    if (this.playingIntro = !0, this.isFocus || this.isAbout) {
                        this.isHome = !0;
                        const e = this.scene.camera.node.initialPosition,
                            t = this.scene.pan.targetCam,
                            i = { cx: e[0], cy: e[1], cz: e[2], tx: t[0], ty: t[1], tz: t[2], cr: 0 },
                            s = new Z.b_;
                        s.add((() => { this.isTransitionning = !0 }), "0"), s.add((() => { this.scene.drag.reset() }), "0"), s.add((() => { this.isTransitionning = !1 }), "2"), s.add((() => { this.isFocus = !1, this.isAbout = !1 }), "2"), s.to(i, { tx: this.scene.homeTargetPos[0], ty: this.scene.homeTargetPos[1], tz: this.scene.homeTargetPos[2], duration: 2, ease: "sine.inOut", onUpdate: () => { this.scene.pan.targetCam[0] = i.tx, this.scene.pan.targetCam[1] = i.ty, this.scene.pan.targetCam[2] = i.tz } }, "0"), s.to(i, { cx: this.scene.homeCamPos[0], cy: this.scene.homeCamPos[1], cz: this.scene.homeCamPos[2], duration: 2, ease: "power2.inOut", onUpdate: () => { this.scene.camera.node.initialPosition[0] = i.cx, this.scene.camera.node.initialPosition[1] = i.cy, this.scene.camera.node.initialPosition[2] = i.cz } }, "0"), s.to(i, { duration: 1, ease: "sine.inOut", cr: -Math.PI / 20, yoyo: !0, repeat: 1, onUpdate: () => { this.scene.pan.roll = i.cr } }, "0"), s.to(this.scene.pan.cameraFreedom, { duration: 2, ease: "power2.inOut", x: 1, y: 1 }, "0"), s.to(this.scene.post.config.blur, { duration: 2, ease: "power2.inOut", value: 5 }, "0"), s.to(this.scene.post, { duration: 2, ease: "power2.inOut", focus: this.scene.mobile ? .5 : .1 }, "0"), s.to(this.scene.post.config.vignetteStart, { duration: 2, ease: "power2.inOut", value: .25 }, "0"), s.to(this.scene.post.config.vignetteEnd, { duration: 2, ease: "power2.inOut", value: .75 }, "0"), s.to(this.scene.camera.config.fov, { duration: 2, ease: "power2.inOut", value: 22 }, "0"), s.to(this.scene.cursor, { duration: 1, ease: "power2.inOut", opacity: 0 }, "0"), s.add((() => { document.body.classList.remove("grabbable") }), "0"), s.to(this.scene.ground.config.bgColorFactor, { duration: 2, ease: "power2.inOut", value: 0 }, "0"), s.to(this.scene.background.config.opacity, { duration: 2, ease: "power2.inOut", value: .5 }, "0"), this.focus(0), s.add((() => { this.scene.background.changeColor(this.scene.background.config.defaultColor0.value, this.scene.background.config.defaultColor1.value) }), "0")
                    }
                }
                switchToAbout() {
                    if (this.isAbout) return;
                    if (0 == this.scene.active) return void(this.pendingAnim = "about");
                    this.isAbout = !0, this.isFocus = !1, this.isHome = !1;
                    const e = this.scene.camera.node.initialPosition,
                        t = this.scene.pan.targetCam,
                        i = { cx: e[0], cy: e[1], cz: e[2], tx: t[0], ty: t[1], tz: t[2], cr: 0 },
                        s = new Z.b_;
                    s.add((() => { this.isTransitionning = !0 }), "0"), s.add((() => { this.scene.drag.reset() }), "0"), s.add((() => { this.isTransitionning = !1 }), "2"), s.to(i, { tx: this.scene.aboutTargetPos[0], ty: this.scene.aboutTargetPos[1], tz: this.scene.aboutTargetPos[2], duration: 2, ease: "sine.inOut", onUpdate: () => { this.scene.pan.targetCam[0] = i.tx, this.scene.pan.targetCam[1] = i.ty, this.scene.pan.targetCam[2] = i.tz } }, "0"), s.to(i, { cx: this.scene.aboutCamPos[0], cy: this.scene.aboutCamPos[1], cz: this.scene.aboutCamPos[2], duration: 2, ease: "power2.inOut", onUpdate: () => { this.scene.camera.node.initialPosition[0] = i.cx, this.scene.camera.node.initialPosition[1] = i.cy, this.scene.camera.node.initialPosition[2] = i.cz } }, "0"), s.to(this.scene.pan.cameraFreedom, { duration: 2, ease: "power2.inOut", x: 0, y: 1 }, "0"), s.to(this.scene.post.config.blur, { duration: 2, ease: "power2.inOut", value: 20 }, "0"), s.to(this.scene.post, { duration: 2, ease: "power2.inOut", focus: .1 }, "0"), s.to(this.scene.post.config.vignetteStart, { duration: 2, ease: "power2.inOut", value: 0 }, "0"), s.to(this.scene.post.config.vignetteEnd, { duration: 2, ease: "power2.inOut", value: 1 }, "0"), s.to(this.scene.camera.config.fov, { duration: 2, ease: "power2.inOut", value: 22 }, "0"), s.to(this.scene.ground.config.bgColorFactor, { duration: 2, ease: "power2.inOut", value: 0 }, "0"), s.to(this.scene.cursor, { duration: 1, ease: "power2.inOut", opacity: 0 }, "0"), s.add((() => { document.body.classList.remove("grabbable") }), "0"), s.to(this.scene.background.config.opacity, { duration: 2, ease: "power2.inOut", value: .5 }, "0"), this.playingIntro = !1
                }
                switchToFocus() {
                    if (this.isFocus) return;
                    if (0 == this.scene.active) return void(this.pendingAnim = "focus");
                    const e = this.scene.camera.node.initialPosition,
                        t = this.scene.pan.targetCam,
                        i = { cx: e[0], cy: e[1], cz: e[2], tx: t[0], ty: t[1], tz: t[2], cr: 0 },
                        s = new Z.b_;
                    s.add((() => { this.isFocus = !0 }), "0.1"), s.add((() => { this.isAbout = !1 }), "0.1"), s.add((() => { this.isHome = !1 }), "0"), s.add((() => { this.isTransitionning = !0 }), "0"), s.add((() => { this.scene.drag.reset() }), "0"), s.add((() => { this.isTransitionning = !1 }), "2"), s.add((() => { this.scene._emitter.emit("focus", this.scene.projects[this.scene.activeProjects[1]]) }), "0.5"), s.to(i, { tx: this.scene.focusTargetPos[0], ty: this.scene.focusTargetPos[1], tz: this.scene.focusTargetPos[2], duration: 2, ease: "sine.inOut", onUpdate: () => { this.scene.pan.targetCam[0] = i.tx, this.scene.pan.targetCam[1] = i.ty, this.scene.pan.targetCam[2] = i.tz } }, "0"), s.to(i, { cx: this.scene.focusCamPos[0], cy: this.scene.focusCamPos[1], cz: this.scene.focusCamPos[2], duration: 2, ease: "power2.inOut", onUpdate: () => { this.scene.camera.node.initialPosition[0] = i.cx, this.scene.camera.node.initialPosition[1] = i.cy, this.scene.camera.node.initialPosition[2] = i.cz } }, "0"), s.to(i, { duration: 1, ease: "sine.inOut", cr: Math.PI / 20, yoyo: !0, repeat: 1, onUpdate: () => { this.scene.pan.roll = i.cr } }, "0"), s.to(this.scene.pan.cameraFreedom, { duration: 2, ease: "power2.inOut", x: .1, y: .2 }, "0"), s.to(this.scene.camera.config.fov, { duration: 2, ease: "power2.inOut", value: this.scene.mobile ? 40 : 22 }, "0"), s.to(this.scene.post.config.blur, { duration: 2, ease: "power2.inOut", value: 15 }, "0"), s.to(this.scene.post, { duration: 2, ease: "power2.inOut", focus: 1 }, "0"), s.to(this.scene.post.config.vignetteStart, { duration: 2, ease: "power2.inOut", value: .25 }, "0"), s.to(this.scene.post.config.vignetteEnd, { duration: 2, ease: "power2.inOut", value: 1 }, "0"), s.to(this.scene.ground.config.bgColorFactor, { duration: 2, ease: "power2.inOut", value: 1 }, "0"), s.to(this.scene.cursor, { duration: 2, ease: "power2.inOut", opacity: 1 }, "1"), s.add((() => { document.body.classList.add("grabbable") }), "1"), s.to(this.scene.background.config.opacity, { duration: 2, ease: "power2.inOut", value: .75 }, "0"), this.playingIntro = !1, this.focus(0), s.add((() => { this.scene.background.changeColor(this.scene.projects[0].backgroundColor0, this.scene.projects[0].backgroundColor1) }), "0")
                }
                update() { this.playingIntro && !this.isPlaying && (this.scene.screenActiveId = (this.scene.screenActiveId + 1) % 5, this.scene.screenActiveName = this.scene.projects[this.scene.screenActiveId].textureName, this.focus(this.scene.screenActiveId)) }
            };
            var le = class {
                constructor(e) { this.scene = e, this.rotationTarget = 0, this.rotation = 0, this.preventDrag = !1, this.currentId = 0, this.prevId = 0, this.progress = 0, this.prevProgress = 0, this.rollTarget = 0, this.roll = 0, this.config = { damping: { value: .075, range: [.001, .5] }, roll_damping: { value: .025, range: [.001, .5] } }, M.addConfig(this.config, "Drag"), this.initEvents() }
                initEvents() {
                    C.on("up", (() => {
                        const e = Math.round(this.rotationTarget / (2 * Math.PI) * 5);
                        this.rotationTarget = Math.PI / 5 * 2 * e
                    })), window.addEventListener("keydown", (e => { this.scene.animations.isTransitionning || !this.scene.animations.isFocus || this.preventDrag || ("ArrowRight" == e.key && (this.rotationTarget -= Math.PI / 2.5), "ArrowLeft" == e.key && (this.rotationTarget += Math.PI / 2.5)) }))
                }
                reset() { this.preventDrag = !0, Z.Q3.delayedCall(3, (() => { this.preventDrag = !1 })) }
                update(e = !1) {
                    if ((!this.scene.animations.isFocus || this.scene.animations.isAbout || this.scene.animations.isHome || this.scene.animations.isTransitionning) && !e) return;
                    let t;
                    if (C.isDown && this.scene.animations.isFocus && !this.preventDrag ? (this.rotationTarget += C.velocity[0], this.scene.animations.isTransitionning || (this.rollTarget = .3 * Math.sign(C.velocity[0]))) : this.rollTarget = 0, t = this.rotationTarget - this.rotation, t *= e ? 1 : this.config.damping.value, this.rotation += t, t = this.rollTarget - this.roll, t *= e ? 1 : this.config.roll_damping.value, this.roll += t, this.rotationTarget < 0 && (this.rotationTarget += 2 * Math.PI, this.rotation += 2 * Math.PI), this.rotationTarget > 2 * Math.PI && (this.rotationTarget -= 2 * Math.PI, this.rotation -= 2 * Math.PI), this.currentId = (5 - Math.round(this.rotationTarget / (2 * Math.PI) * 5)) % 5, this.backId = (5 - Math.round((this.rotationTarget - Math.PI) / (2 * Math.PI) * 5)) % 5 + 1, this.currentId !== this.prevId) {
                        let e = "";
                        0 == this.currentId && 4 == this.prevId ? (this.scene._emitter.emit("nextOnDrag"), e = "next", this.rotationTarget += 2 * Math.PI / 5, this.rotation += 2 * Math.PI / 5) : 4 == this.currentId && 0 == this.prevId ? (this.scene._emitter.emit("prevOnDrag"), this.rotationTarget -= 2 * Math.PI / 5, this.rotation -= 2 * Math.PI / 5, e = "prev") : this.currentId - this.prevId > 0 ? (this.scene._emitter.emit("nextOnDrag"), e = "next", this.rotationTarget += 2 * Math.PI / 5, this.rotation += 2 * Math.PI / 5) : this.currentId - this.prevId < 0 && (this.scene._emitter.emit("prevOnDrag"), e = "prev", this.rotationTarget -= 2 * Math.PI / 5, this.rotation -= 2 * Math.PI / 5), this.currentId = (5 - Math.round(this.rotationTarget / (2 * Math.PI) * 5)) % 5, this.prevId = this.currentId, this.scene.onFocusChange(null, e)
                    }
                    let i = 2 * (this.rotationTarget / (2 * Math.PI) * 5 - Math.round(this.rotationTarget / (2 * Math.PI) * 5));
                    this.progress = Math.abs(i), this.scene.pan.roll = this.roll, this.progress !== this.prevProgress && (this.prevProgress = this.progress, this.scene.animations.isFocus && !this.scene.animations.isTransitionning && this.scene._emitter.emit("dragProgress", this.progress)), this.scene.root.rotation[1] = this.rotation, this.scene.root.needUpdate = !0;
                    for (let s = 0; s < this.scene.root.children.length; s++) this.scene.root.children[s].needUpdate = !0
                }
            };
            Math.easing = { linear: function(e) { return e }, easeInQuad: function(e) { return e * e }, easeOutQuad: function(e) { return e * (2 - e) }, easeInOutQuad: function(e) { return e < .5 ? 2 * e * e : (4 - 2 * e) * e - 1 }, easeInCubic: function(e) { return e * e * e }, easeOutCubic: function(e) { return --e * e * e + 1 }, easeInOutCubic: function(e) { return e < .5 ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1 }, easeInQuart: function(e) { return e * e * e * e }, easeOutQuart: function(e) { return 1 - --e * e * e * e }, easeInOutQuart: function(e) { return e < .5 ? 8 * e * e * e * e : 1 - 8 * --e * e * e * e }, easeInQuint: function(e) { return e * e * e * e * e }, easeOutQuint: function(e) { return 1 + --e * e * e * e * e }, easeInOutQuint: function(e) { return e < .5 ? 16 * e * e * e * e * e : 1 + 16 * --e * e * e * e * e } };
            var de = class {
                constructor(e, t) { this.scene = e, this.view = t, this.screenWidth = window.innerWidth, this.screenHeigth = window.innerHeight, this.isMobile = this.scene.mobile, this.dpr = window.devicePixelRatio, this.width = 90, this.height = 90, this.canvas = document.createElement("canvas"), this.ctx = this.canvas.getContext("2d"), this.x = 0, this.y = 0, this.canvas.width = this.width * this.dpr, this.canvas.height = this.height * this.dpr, this.canvas.style.width = this.width + "px", this.canvas.style.height = this.height + "px", this.canvas.style.position = "fixed", this.canvas.style.top = "0", this.canvas.style.left = "0", this.canvas.style.zIndex = "10", this.canvas.style.pointerEvents = "none", this.canvas.classList.add("cursor"), document.body.appendChild(this.canvas), this.progress = 0, this.scale = 1, this.target = 1, this.opacity = 0, window.addEventListener("resize", (() => { this.resize() })) }
                resize() { this.screenWidth = window.innerWidth, this.screenHeigth = window.innerHeight }
                draw() {
                    let e, t = this.ctx;
                    t.clearRect(0, 0, this.width * this.dpr, this.height * this.dpr), t.beginPath(), t.strokeStyle = "rgba(255, 255, 255, 1)", t.lineWidth = 2 * this.dpr, t.globalAlpha = (.5 + .5 * Math.easing.easeInOutQuart(this.progress)) * this.opacity, t.arc(45 * this.dpr, 45 * this.dpr, (10 + 15 * Math.easing.easeInOutQuart(this.scale)) * this.dpr, 0, 2 * Math.PI), t.stroke(), t.closePath(), t.beginPath(), t.fillStyle = "rgba(255, 255, 255, 1)", e = Math.easing.easeInOutCubic(this.progress), t.globalAlpha = e * e * .75 * this.opacity, t.arc((45 - 30 * e) * this.dpr, 45 * this.dpr, 1 + 1.5 * Math.easing.easeInOutQuint(this.progress) * this.dpr, 0, 2 * Math.PI), t.fill(), t.closePath(), t.beginPath(), t.fillStyle = "rgba(255, 255, 255, 1)", e = Math.easing.easeInOutCubic(this.progress), t.globalAlpha = e * e * .75 * this.opacity, t.arc((45 + 30 * e) * this.dpr, 45 * this.dpr, 1 + 1.5 * Math.easing.easeInOutQuint(this.progress) * this.dpr, 0, 2 * Math.PI), t.fill(), t.closePath()
                }
                update() {
                    if (1 == this.isMobile) return;
                    let e = this.target - this.scale;
                    e *= .1, this.scale += e, this.x = .5 * (C.dampedCursor[0] + 1) * this.screenWidth - this.width / 2, this.y = .5 * (C.dampedCursor[1] + 1) * this.screenHeigth - this.height / 2, C.isDown ? (this.progress += .03, this.target = .5) : (this.progress -= .06, this.target = 1), this.scale = Math.min(Math.max(this.scale, 0), 1), this.progress = Math.min(Math.max(this.progress, 0), 1), this.canvas.style.transform = "translate3d(" + this.x + "px, " + this.y + "px, 0)", this.draw()
                }
            };
            g.Ue();
            var ge = class extends N {
                constructor(e, t = null) { super(e, t), this.manager = t, this.camera = new L(this, 27), this.clearColor = [.078, .058, .086, 1], this.pan = new I(this, this.camera), this.drag = new le(this), this.animations = new ue(this), this.post = new ne(this), this.noise = new he(this), this.textureLoader = new B(this), this.mobile = "undefined" !== typeof window.orientation || -1 !== navigator.userAgent.indexOf("IEMobile"), this.loaded = !1, this.nodes = [], this.meshes = [], this.screens = {}, this.videoTextures = {}, this.playingIntro = !1, this.isPlaying = !1, this.isFocus = !1, this.cameraRoot = new R, this.root.scale = m.al(.03, .03, .03), this.cameraRoot.scale = m.al(.03, .03, .03), this.cameraRoot.addChildNode(this.camera.node), this.pendingAnim = null }
                onLoaded() {
                    this.active = !0, this._emitter.emit("loaded"), this.background = new ee(this), this.screenRot = Math.PI / 3, this.screenActiveId = 0, this.screenActiveName = this.projects[this.screenActiveId].textureName;
                    for (const e in this.videoTextures) Object.hasOwnProperty.call(this.videoTextures, e) && this.screens[e].active && this.videoTextures[e].play();
                    window.addEventListener("click", (() => { for (const e in this.videoTextures) Object.hasOwnProperty.call(this.videoTextures, e) && this.screens[e].active && this.videoTextures[e].play() })), this.animations.onLoaded()
                }
                initCursor(e) { this.cursor = new de(this, e) }
                onFocusChange(e, t) {
                    this.animations.isTransitionning || (null == e ? ("next" == t ? this.activeProjects.forEach(((e, t) => { this.activeProjects[t]++ })) : this.activeProjects.forEach(((e, t) => { this.activeProjects[t]-- })), this.activeProjects.forEach(((e, t) => { this.activeProjects[t] < 0 && (this.activeProjects[t] += this.projects.length), this.activeProjects[t] >= this.projects.length && (this.activeProjects[t] = 0) })), this._emitter.emit("focusOnProject", this.projects[this.activeProjects[1]])) : this._emitter.emit("focusOnProject", this.projects[this.activeProjects[e + 1]]));
                    for (let i = 0; i < this.projects.length; i++) {
                        const e = this.projects[i];
                        this.videoTextures[e.textureName] && (-1 == this.activeProjects.indexOf(i) ? this.videoTextures[e.textureName].pause() : this.videoTextures[e.textureName].play())
                    }
                }
                setProjects(e) {
                    this.projects = JSON.parse(JSON.stringify(e));
                    let t = this.projects.pop();
                    this.projects.unshift(t), this.activeProjects = [];
                    for (let i = 0; i < this.projects.length; i++) i < 5 && this.activeProjects.push(i)
                }
                load() {
                    const e = [];
                    for (const s in ce.main)
                        if (ce.main.hasOwnProperty(s)) {
                            const t = ce.main[s].url;
                            e.push(this.textureLoader.load(t, s, ce.main[s].options))
                        }
                    for (let s = 0; s < this.projects.length; s++) {
                        const t = this.projects[s];
                        this.screens[t.textureName] = { nodes: [], active: s < 5, textureName: t.textureName, screenId: s % 5, activeRound: 0, round: Math.floor(s / 5) }, void 0 == this.textureLoader.textures[t.textureName] && (e.push(this.textureLoader.load(t.imagePath, t.textureName, [])), !this.mobile && t.videoPath && (this.videoTextures[t.textureName] = new k(this, t.videoPath), e.push(this.videoTextures[t.textureName].getLoadables())))
                    }
                    let t;
                    t = "glxp/models/Scene", e.push(new(z())(t + ".json", t + ".bin").then((e => {
                        e.forEach(
                            (e => {
                                let t;
                                if ("Null" == e.type) return "HomeCamera" == e.name && (this.camera.node.position = m.d9(e.translate), this.camera.node.initialPosition = m.d9(e.translate), this.camera.node.rotation = m.d9(e.rotation), this.camera.node.needUpdate = !0, this.homeCamPos = m.d9(e.translate)), "TargetCam" == e.name && (this.pan.targetCam = m.d9(e.translate), this.homeTargetPos = m.d9(e.translate)), "FocusCamera" == e.name && (this.focusCamPos = m.d9(e.translate)), "TargetHome" == e.name && (this.focusTargetPos = m.d9(e.translate)), "AboutCamera" == e.name && (this.aboutCamPos = m.d9(e.translate)), void("TargetAbout" == e.name && (this.aboutTargetPos = m.d9(e.translate)));
                                if ("People" == e.name) t = new Y(this, e, "unlit", e.material), this.meshes.push(t);
                                else if ("Ground" == e.name) t = new J(this, e), this.ground = t;
                                else if ("Screen" == e.name) {
                                    t = new $(this, e, "screen", "test"), this.screen = t;
                                    for (let e = 0; e < 5; e++) {
                                        let i = new R;
                                        i.texture = this.projects[e].textureName, i.rotation[1] = e / 5 * Math.PI * 2 - 2 * Math.PI / 5, t.node.addChildNode(i), t.proxies.push(i), this.screens[this.projects[e].textureName].nodes.push(i)
                                    }
                                    this.meshes.push(t)
                                } else if ("LightMesh" == e.name) {
                                    t = new Y(this, e, "lightMesh", "test"), this.lightMesh = t, t.preventPass = !0;
                                    for (let e = 0; e < 5; e++) {
                                        let i = new R;
                                        i.texture = this.projects[e].textureName, i.rotation[1] = e / 5 * Math.PI * 2 - 2 * Math.PI / 5, t.node.addChildNode(i), t.proxies.push(i), this.screens[this.projects[e].textureName].nodes.push(i)
                                    }
                                    this.meshes.push(t)
                                }
                                this.root.addChildNode(t.node)

                            })
                        )
                    }))), c().all(e).then((() => { this.onLoaded() }));
                    let i = 0;
                    for (let s = 0; s < e.length; s++) e[s].then((() => { i++, this._emitter.emit("progress", Math.round(i / e.length * 100)) }))
                }
                applyDefaultState() {
                    const { gl: e } = this;
                    e.blendFunc(e.SRC_ALPHA, e.ONE_MINUS_SRC_ALPHA), e.enable(e.BLEND), e.enable(e.DEPTH_TEST), e.depthMask(!0), e.disable(e.CULL_FACE)
                }
                preRender() {
                    this.camera.updateProjection(this.width / this.height), this.animations.update(), this.pan.update(), this.drag.update(), this.cursor.update();
                    for (const e in this.videoTextures) Object.hasOwnProperty.call(this.videoTextures, e) && this.videoTextures[e].update();
                    this.screen.node.rotation[1] = this.screenRot + this.screen.node.initialRotation[1], this.lightMesh.node.rotation[1] = this.screenRot + this.lightMesh.node.initialRotation[1], this.screen.node.needUpdate = !0, this.lightMesh.node.needUpdate = !0, this.screen.proxies.forEach((e => { e.needUpdate = !0 })), this.lightMesh.proxies.forEach((e => { e.needUpdate = !0 }))
                }
                render() {
                    if (!this.active) return;
                    this.time += v.dt / 1e3, this.dt = v.dt;
                    const { gl: e } = this;
                    e.clearColor(this.clearColor[0], this.clearColor[1], this.clearColor[2], this.clearColor[3]), e.clear(e.COLOR_BUFFER_BIT | e.DEPTH_BUFFER_BIT), e.colorMask(!0, !0, !0, !0), this.preRender(), e.viewport(0, 0, this.width, this.height), this.ground.rt.preRender();
                    for (let t = 0; t < this.meshes.length; t++) this.meshes[t].render(1);
                    this.ground.rt.postRender(), e.viewport(0, 0, this.width, this.height), this.post.preRender(), this.background.render(), this.ground.render();
                    for (let t = 0; t < this.meshes.length; t++) this.meshes[t].render();
                    this.post.postRender(), e.clearColor(this.clearColor[0], this.clearColor[1], this.clearColor[2], this.clearColor[3]), e.clear(e.COLOR_BUFFER_BIT | e.DEPTH_BUFFER_BIT), e.colorMask(!0, !0, !0, !0), this.noise.preRender(), this.post.render(), this.noise.postRender(), this.noise.render(), this.postRender()
                }
                postRender() { this.gl.viewport(0, 0, this.width, this.height) }
            };
            var me = new class {
                    constructor() { this.scenes = {}, this.initialized = !1, this.mobile = !1, window.GLXP = this, this._emitter = {}, l()(this._emitter), this.on = this._emitter.on.bind(this._emitter) }
                    init(e) { return this.rankGpu().then((t => { this.GPUTier = t, this.dpr = Math.min(window.devicePixelRatio, 1.5), this.width = e.offsetWidth * this.dpr, this.height = e.offsetHeight * this.dpr, this.container = e, this.catchContext(), this.mobile = "undefined" !== typeof window.orientation || -1 !== navigator.userAgent.indexOf("IEMobile"), this.initScenes(), window.addEventListener("resize", (() => { this.resize() })), this.initialized = !0, this._emitter.emit("ready") })), this }
                    initScenes() { this.addScene("main", ge) }
                    addScene(e, t) { this.scenes[e] = { scene: new t(this.container, this), active: !1, callbackCanvas: null } }
                    registerCallbackCanvas(e, t) { this.scenes[e].callbackCanvas = t }
                    getScene(e) { const t = c().defer(); return this.initialized ? t.resolve(this.scenes[e].scene) : this.on("ready", (() => { t.resolve(this.scenes[e].scene) })), t.promise }
                    loadScene(e) { const t = c().defer(); return this.initialized ? !1 === this.scenes[e].scene.loaded && (this.scenes[e].scene.load(), this.scenes[e].scene.on("loaded", (() => { this.scenes[e].scene.onResize(), t.resolve() }))) : this.on("ready", (() => {!1 === this.scenes[e].scene.loaded && (this.scenes[e].scene.load(), this.scenes[e].scene.on("loaded", (() => { this.scenes[e].scene.onResize(), t.resolve() }))) })), t.promise }
                    activate(e) { this.scenes[e].active = !0 }
                    resize() { this.width = this.container.offsetWidth * this.dpr, this.height = this.container.offsetHeight * this.dpr, this.canvas.width = this.width, this.canvas.height = this.height, this.canvas.style.maxWidth = `${this.container.offsetWidth}px`, this.canvas.style.maxHeight = `${this.container.offsetHeight}px`, this.gl.viewport(0, 0, this.width, this.height) }
                    desactivate(e) { this.scenes[e].active = !1, this.gl.clearColor(0, 0, 0, 0), this.gl.clear(this.COLOR_BUFFER_BIT | this.DEPTH_BUFFER_BIT), this.gl.colorMask(!0, !0, !0, !0) }
                    rankGpu() { return (0, d.M)({ glContext: this.gl, mobileBenchmarkPercentages: [0, 50, 40, 10], desktopBenchmarkPercentages: [0, 50, 40, 10] }) }
                    catchContext() {
                        if (this.canvas = document.createElement("canvas"), this.canvas.width = this.width, this.canvas.height = this.height, this.canvas.style.maxWidth = `${this.container.offsetWidth}px`, this.canvas.style.maxHeight = `${this.container.offsetHeight}px`, this.container.appendChild(this.canvas), this.gl = this.canvas.getContext("webgl", { antialias: !1, alpha: !1 }), void 0 === this.gl) return;
                        const e = this.gl.getExtension("OES_vertex_array_object");
                        e && (this.gl.createVertexArray = function() { return e.createVertexArrayOES() }, this.gl.deleteVertexArray = function(t) { e.deleteVertexArrayOES(t) }, this.gl.bindVertexArray = function(t) { e.bindVertexArrayOES(t) }, this.gl.isVertexArray = function(t) { return e.isVertexArrayOES(t) }), this.gl.getExtension("OES_standard_derivatives"), this.gl.getExtension("EXT_shader_texture_lod"), this.gl.getExtension("OES_texture_float"), this.gl.getExtension("OES_texture_float_linear"), this.gl.getExtension("WEBGL_depth_texture")
                    }
                    render() {
                        for (const e in this.scenes)
                            if (this.scenes.hasOwnProperty(e)) { const t = this.scenes[e];!0 === t.active && t.scene.render() }
                    }
                },
                ve = i(6447),
                fe = i(1774),
                pe = i.n(fe),
                xe = i(4155);
            const be = ({ state: e, mutate: t }) => {
                const i = (0, a.useRouter)(),
                    h = (0, n.useRef)(null),
                    { setMaestroState: c } = (0, ve.Z)(),
                    u = (0, n.useRef)(null);
                return (0, r.Z)((() => {
                    h.current = i.route;
                    const e = me.init(u.current);
                    v.suscribe("webgl-main", e.render.bind(e)), xe.nextTick((() => { me.getScene("main").then((e => { t((t => { t.scene = e })), e.setProjects(o.Fw), e.initCursor(u.current), e.on("progress", (e => { c({ type: "SET_PROGRESS", value: e }) })), e.on("loaded", (() => { setTimeout((() => { c({ type: "SET_LOADED", value: !0 }) }), 500) })), e.on("focus", (e => { c({ type: "SET_COLOR", value: e.color }), c({ type: "SET_CURRENT_PROJECT", value: e }) })), e.on("focusOnProject", (e => { c({ type: "SET_CURRENT_PROJECT", value: e }) })), e.on("prevOnDrag", (() => { c({ type: "SET_PREV_PROJECT_EVENT", value: !0 }) })), e.on("nextOnDrag", (e => { c({ type: "SET_NEXT_PROJECT_EVENT", value: !0 }) })), e.on("dragProgress", (e => { c({ type: "SET_DRAG_PROGRESS", value: 1 - e }) })), me.loadScene("main").then((() => { me.activate("main") })) })) }))
                })), (0, n.useEffect)((() => {
                    if (e.scene && h.current) {
                        switch (i.route) {
                            case "/":
                                e.scene.animations.playIntro();
                                break;
                            case "/projects":
                                e.scene.animations.switchToFocus();
                                break;
                            case "/about":
                                e.scene.animations.switchToAbout()
                        }
                        h.current = i.route
                    }
                }), [i, e.scene]), (0, s.jsx)("div", { className: pe()["glxp-wrapper"], children: (0, s.jsx)("div", { ref: u, className: pe()["webgl-main-container"] }) })
            };
            be.whyDidYouRender = !1;
            var Te = n.memo(be)
        },
        6447: function(e, t, i) {
            "use strict";
            var s = i(7294),
                n = i(1405);
            t.Z = () => {
                const e = (0, s.useContext)(n.bj);
                if ("undefined" === typeof e) throw new Error("useMaestroMutations must be used within a MaestroProvider");
                return {
                    setMaestroState: (0, s.useCallback)((t => {
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
        8761: function(e) { e.exports = { General: { overlay_cover: { value: .8, range: [0, 1] } }, marbling: { radius_mutiplicator: { value: 1, range: [0, 5] }, size_influence: { value: 2, range: [0, 10] }, speed_influence: { value: 2, range: [0, 10] }, stiffness: { value: .1, range: [0, 1] } }, Transition: { shake_damping: { value: .3, range: [0, .1] }, cursor_damping: { value: .1, range: [0, .1] }, shake_position: { value: 1, range: [-10, 10] }, desktop_shake_scale: { value: .9, range: [0, 2] }, mobile_shake_scale: { value: .4, range: [0, 2] }, perf_threshold: { value: 150, range: [0, 1e3] } }, HeaderScene: { shake_damping: { value: .3, range: [0, .1] }, cursor_damping: { value: .1, range: [0, .1] }, step_damping: { value: .02, range: [0, .1] }, shake_threshold: { value: .05, range: [0, 1] } }, philosophy: { shake_damping: { value: .3, range: [0, .1] }, cursor_damping: { value: .1, range: [0, .1] }, step_damping: { value: .02, range: [0, .1] }, shake_threshold: { value: .05, range: [0, 1] }, word_scale: { value: 8.168188867826986, range: [0, 100] }, word_scrolling_scale: { value: 5.5, range: [0, 100] }, word_0_offset: { value: -.7, range: [-5, 20] }, word_1_offset: { value: 4.3, range: [-5, 20] }, word_2_offset: { value: 9.95, range: [-5, 20] } }, PartnersScene: { shake_damping: { value: .3, range: [0, .1] }, cursor_damping: { value: .1, range: [0, .1] }, focus_damping: { value: .06, range: [0, .1] }, focus_zoom: { value: 1, range: [0, 10] }, radius_mutiplicator: { value: 2.5, range: [0, 5] }, size_influence: { value: 2, range: [0, 2] }, speed_influence: { value: 3, range: [0, 10] }, fade_factor: { value: 2.5, range: [0, 5] }, stiffness: { value: .1, range: [0, 1] } }, ShakePost: { noise_exponent: { value: 4, range: [0, 10] }, noise_speed: { value: 1, range: [0, 10] } }, HomeScene: { shake_damping: { value: .3, range: [0, .1] }, cursor_damping: { value: .1, range: [0, .1] }, mobile_cursor_damping: { value: .1, range: [0, 1] }, step_damping: { value: .04015164570049975, range: [0, .1] }, shake_threshold: { value: .05, range: [0, 1] }, shake_position: { value: -.15, range: [-1, 1] }, shake_scale: { value: 1.5, range: [-10, 10] }, shake_mobile_scale: { value: -4.6, range: [-10, 10] }, power_mobile_shake: { value: .03, range: [0, 1] } } } },
        8514: function(e, t, i) {
            const s = i(23);

            function n(e, t) { this.json = e, this.bin = t, this.itemLoaded = 0, this.defer = s.defer(); const i = this; return "string" === typeof this.json ? this.loadJson().then((e => { i.json = e, i.itemLoaded++, i.checkIfItemIsloaded() })) : this.itemLoaded++, "string" === typeof this.bin ? this.loadBin().then((e => { i.bin = e, i.itemLoaded++, i.checkIfItemIsloaded() })) : this.itemLoaded++, 2 === this.itemLoaded && this.init(), this.getPromise() }
            n.prototype = {
                init() {
                    ///---- edited --------
                    //if (this.json != null) {
                    //console.log("json:" + this.json);
                    const e = this.json.meshes,
                        t = ["vertices", "normal", "uvs", "indices", "vertexIndex", "name", "type", "translate", "scale", "rotation", "infos", "material", "maxJoints", "attribStackNum", "joints", "sid", "parent"];
                    for (let a = 0; a < e.length; a++) {
                        const o = e[a];
                        if (null != o.vertices) {
                            var i = o.vertices;
                            o.vertices = new Float32Array(this.bin.slice(4 * i.offset, 4 * i.offset + 4 * i.length))
                        }
                        if (null != o.normal) {
                            i = o.normal;
                            o.normal = new Float32Array(this.bin.slice(4 * i.offset, 4 * i.offset + 4 * i.length))
                        }
                        if (null != o.uvs) {
                            i = o.uvs;
                            o.uvs = new Float32Array(this.bin.slice(4 * i.offset, 4 * i.offset + 4 * i.length))
                        }
                        if (null != o.indices) {
                            i = o.indices;
                            for (var s = new Float32Array(this.bin.slice(4 * i.offset, 4 * i.offset + 4 * i.length)), n = [], r = 0; r < s.length; r++) n.push(s[r]);
                            o.indices = new Uint16Array(n)
                        }
                        if (null != o.vertexIndex) {
                            for (i = o.vertexIndex, s = new Float32Array(this.bin.slice(4 * i.offset, 4 * i.offset + 4 * i.length)), n = [], r = 0; r < s.length; r++) n.push(s[r]);
                            o.vertexIndex = new Uint16Array(n)
                        }
                        for (const e in o)
                            if (o.hasOwnProperty(e) && -1 === t.indexOf(e) && null != o[e]) {
                                i = o[e];
                                o[e] = new Float32Array(this.bin.slice(4 * i.offset, 4 * i.offset + 4 * i.length))
                            }
                    }
                    this.defer.resolve(e)

                },
                getPromise() { return this.defer.promise },
                loadJson() {
                    const e = s.defer(),
                        t = new XMLHttpRequest;
                    return t.open("GET", this.json, !0), t.responseType = "json", t.onload = function(i) { e.resolve(t.response) }, t.send(), e.promise
                },
                loadBin() {
                    const e = s.defer(),
                        t = new XMLHttpRequest;
                    return t.open("GET", this.bin, !0), t.responseType = "arraybuffer", t.onload = function(i) { e.resolve(t.response) }, t.send(), e.promise
                },
                checkIfItemIsloaded() { 2 === this.itemLoaded && this.init() }
            }, e.exports = n
        },
        1774: function(e) { e.exports = { "glxp-wrapper": "Glxp_glxp-wrapper__19Kei", "webgl-main-container": "Glxp_webgl-main-container__27eQv" } },
        6020: function() {}
    }
]);