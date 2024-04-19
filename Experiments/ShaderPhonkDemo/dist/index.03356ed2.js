// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"8QPX2":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "a9cdaed603356ed2";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"fBBA6":[function(require,module,exports) {
var _zipPixelReader = require("./zipPixelReader");
var _tweakpane = require("tweakpane");
const PARAMS = {
    webcamBrightness: 0.7
};
const pane = new (0, _tweakpane.Pane)();
pane.addBinding(PARAMS, "webcamBrightness", {
    min: 0,
    max: 1,
    step: 0.01
});
let animationProgress = 0;
let t = 0;
let audioTime = 0;
let audio;
let fft;
let reader;
let cam;
window["preload"] = function preload() {
    audio = loadSound("Phonk.ogg");
    myShader = loadShader("myShader.vert", "myShader.frag");
};
let melodyGraphics;
window["setup"] = async function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    textFont(loadFont("arial.ttf"));
    cam = createCapture("video");
    cam.size(710, 400);
    cam.hide();
    colorMode(HSB);
    const videoRequest = new Request("video.zip");
    let response = await fetch(videoRequest);
    let b = await response.blob();
    reader = new (0, _zipPixelReader.ZipPixelReader)([
        b
    ]);
    window["reader"] = reader;
    await reader.parseBlobs();
    //reader.tables['Riser_Kick'].registerBeatDetection(() => { console.log("beat detected") })
    melodyGraphics = createGraphics(710, 400);
    melodyGraphics.noStroke();
    melodyGraphics.colorMode(HSB);
    fft = new p5.FFT();
    fft.setInput(audio);
    fft.smooth(0);
};
function loadingAnimation(progress, message) {
    push();
    background(255);
    fill(0);
    textAlign(CENTER, CENTER);
    textSize(70);
    text("Loading", 0, 0);
    textSize(40);
    translate(0, 100, 0);
    text(message, 0, 0);
    pop();
}
function tickTime() {
    t += deltaTime / 1000;
    fft.analyze();
    animationProgress += deltaTime + Math.pow(fft.getEnergy(2000, 20000) / 255, 2) * 100 + reader.tables["Riser_Kick"].getFrame(audioTime).getColor(0.5).lightness() + reader.tables["KickTrig"].getFrame(audioTime).getColor(0.5).lightness();
    if (t > 4) t = 0;
    audioTime = audio.currentTime();
}
let alreadySetup = false;
let clickReady = false;
let hasClicked = false;
function FinalSetup() {
    push();
    clickReady = true;
    if (alreadySetup) return true;
    if (hasClicked) {
        noStroke();
        noFill();
        audio.play();
        alreadySetup = true;
        pop();
        return true;
    } else {
        fill(255);
        textAlign(CENTER, CENTER);
        textSize(70);
        text("Click To Start", 0, 0);
        pop();
        return false;
    }
}
window["mouseClicked"] = function clicked() {
    if (clickReady) hasClicked = true;
};
let myShader;
let melodyTexture;
function renderShaders() {
    shader(myShader);
    myShader.setUniform("time", animationProgress);
    // passing cam as a texture
    myShader.setUniform("tex0", melodyGraphics);
    // rect gives us some geometry on the screen
    rect(0, 0, width, height);
}
window["draw"] = function draw() {
    if (reader == null) return;
    if (!reader.finishedLoading) {
        loadingAnimation(reader.progress, reader.currentlyLoading);
        return;
    }
    background(0);
    if (!FinalSetup()) return;
    tickTime();
    orbitControl();
    melodyGraphics.image(cam, 0, 0);
    melodyGraphics.background(0, 1 - PARAMS.webcamBrightness);
    melodyGraphics.background(255, reader.tables["Riser_Kick"].getFrame(audioTime).getColor(0.5).lightness() + reader.tables["SnareTrig"].getFrame(audioTime).getColor(0.5).lightness() + reader.tables["VibeVolume"].getFrame(audioTime).getColor(0.5).lightness() / 100);
    for(let i = 0; i < 256; i++){
        melodyGraphics.fill(animationProgress / 100 + 128, 255, reader.tables["Melody"].getFrame(audioTime).getColor(i / 256).lightness() * 2);
        for(let j = 1; j < 6; j++)melodyGraphics.square(melodyGraphics.width / 256 * i, melodyGraphics.height / 6 * j, melodyGraphics.width / 256 + 1);
        melodyGraphics.push();
        colorMode("rgb");
        let c = reader.tables["HatWaves"].getFrame(audioTime).getColor(i / 256);
        c.saturate(1);
        let colors = c.rgb().array();
        melodyGraphics.fill(colors[0], colors[1], colors[2], c.lightness());
        for(let j = 1; j < 6; j++)melodyGraphics.square(melodyGraphics.width / 6 * j, melodyGraphics.height / 256 * i, melodyGraphics.width / 256 + 1);
        melodyGraphics.pop();
        melodyGraphics.fill(animationProgress / 100, 255, 255, reader.tables["Beat_Waves"].getFrame(audioTime).getColor(i / 256).lightness() * 5 / 255);
        melodyGraphics.rect(melodyGraphics.width / 256 * i, 0, melodyGraphics.width / 256 + 1, 1000);
    }
    //ambientLight(255);
    renderShaders();
//reader.tables['Riser_Kick'].beatDetectionFrame(0.5, t, 0.85);
/*
    for (let i = 0; i < 256; i++) {
        fill(reader.tables['Beat_Waves'].getFrame(audioTime).getColor(i / 256).rgb().string());
        square(width / 256 * i, height / 2 - 50, width / 256 + 1);
        fill(reader.tables['HatWaves'].getFrame(audioTime).getColor(i / 256).rgb().string());
        square(width / 256 * i, height / 2 - 40, width / 256 + 1);
        fill(reader.tables['HighHat'].getFrame(audioTime).getColor(i / 256).rgb().string());
        square(width / 256 * i, height / 2 - 30, width / 256 + 1);
        fill(reader.tables['KickTrig'].getFrame(audioTime).getColor(i / 256).rgb().string());
        square(width / 256 * i, height / 2 - 20, width / 256 + 1);
        fill(reader.tables['Melody'].getFrame(audioTime).getColor(i / 256).rgb().string());
        square(width / 256 * i, height / 2 - 10, width / 256 + 1);
        fill(reader.tables['Riser_Kick'].getFrame(audioTime).getColor(i / 256).rgb().string());
        square(width / 256 * i, height / 2, width / 256 + 1);
        fill(reader.tables['SnareTrig'].getFrame(audioTime).getColor(i / 256).rgb().string());
        square(width / 256 * i, height / 2 + 10, width / 256 + 1);
        fill(reader.tables['VibeVolume'].getFrame(audioTime).getColor(i / 256).rgb().string());
        square(width / 256 * i, height / 2 + 20, width / 256 + 1);
    }
    */ };

},{"./zipPixelReader":"9zTL2","tweakpane":"cvybH"}],"9zTL2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ZipPixelReader", ()=>ZipPixelReader);
var _color = require("color");
var _colorDefault = parcelHelpers.interopDefault(_color);
var _videoUtils = require("./VideoUtils");
var _zipJs = require("@zip.js/zip.js");
class ZipPixelReader {
    constructor(blobs){
        this.blobs = blobs;
        this.tables = {};
        this.finishedLoading = false;
        this.currentlyLoading = "";
        this.progress = 0;
    }
    async parseBlobs() {
        for(let i = 0; i < this.blobs.length; i++){
            const element = this.blobs[i];
            await this.parseTable(await this.getFirstEntryText(this.blobs[i]));
        }
        this.finishedLoading = true;
    }
    async getFirstEntryText(zipFileBlob) {
        const zipFileReader = new (0, _zipJs.BlobReader)(zipFileBlob);
        const helloWorldWriter = new (0, _zipJs.TextWriter)();
        const zipReader = new (0, _zipJs.ZipReader)(zipFileReader);
        const firstEntry = (await zipReader.getEntries()).shift();
        const helloWorldText = await firstEntry.getData(helloWorldWriter);
        await zipReader.close();
        console.log(helloWorldText);
        return helloWorldText;
    }
    async createTableVideo(lines) {
        let frames = [];
        for(let lineNumber = 1; lineNumber < lines.length; lineNumber++){
            this.progress = lineNumber / lines.length - 1;
            const line = lines[lineNumber];
            //left of comma is ms
            const data = line.split(",");
            const time = Number(data[0]) / 1000.0;
            const colorString = data[1];
            if (colorString == null) continue;
            let colors = [];
            for(let position = 0; position < colorString.length - 6; position += 6){
                const color = colorString.substring(position, position + 6);
                colors[position / 6] = (0, _colorDefault.default)("#" + color);
            }
            if (lineNumber === 1 || lineNumber % Math.floor(lines.length / 2) === 0) {
                console.log(lineNumber);
                await new Promise((resolve)=>setTimeout(resolve));
            }
            frames.push(new (0, _videoUtils.ColorTable)(colors, time));
        }
        this.tables[lines[0]] = new (0, _videoUtils.TableVideo)(frames);
    }
    async parseTable(video) {
        video = video.replaceAll(" ", "_");
        let sequences = video.split("-");
        for(let i = 0; i < sequences.length; i++){
            const sequence = sequences[i];
            if (sequence === "") continue;
            let lines = sequence.split("\n");
            this.currentlyLoading = lines[0];
            await this.createTableVideo(lines);
        }
    }
}

},{"color":"gW2oi","./VideoUtils":"lE4Lo","@zip.js/zip.js":"hmfvE","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gW2oi":[function(require,module,exports) {
const colorString = require("71b6e3b39cf59f9f");
const convert = require("c094f2fb379d5867");
const skippedModels = [
    // To be honest, I don't really feel like keyword belongs in color convert, but eh.
    "keyword",
    // Gray conflicts with some method names, and has its own method defined.
    "gray",
    // Shouldn't really be in color-convert either...
    "hex"
];
const hashedModelKeys = {};
for (const model of Object.keys(convert))hashedModelKeys[[
    ...convert[model].labels
].sort().join("")] = model;
const limiters = {};
function Color(object, model) {
    if (!(this instanceof Color)) return new Color(object, model);
    if (model && model in skippedModels) model = null;
    if (model && !(model in convert)) throw new Error("Unknown model: " + model);
    let i;
    let channels;
    if (object == null) {
        this.model = "rgb";
        this.color = [
            0,
            0,
            0
        ];
        this.valpha = 1;
    } else if (object instanceof Color) {
        this.model = object.model;
        this.color = [
            ...object.color
        ];
        this.valpha = object.valpha;
    } else if (typeof object === "string") {
        const result = colorString.get(object);
        if (result === null) throw new Error("Unable to parse color from string: " + object);
        this.model = result.model;
        channels = convert[this.model].channels;
        this.color = result.value.slice(0, channels);
        this.valpha = typeof result.value[channels] === "number" ? result.value[channels] : 1;
    } else if (object.length > 0) {
        this.model = model || "rgb";
        channels = convert[this.model].channels;
        const newArray = Array.prototype.slice.call(object, 0, channels);
        this.color = zeroArray(newArray, channels);
        this.valpha = typeof object[channels] === "number" ? object[channels] : 1;
    } else if (typeof object === "number") {
        // This is always RGB - can be converted later on.
        this.model = "rgb";
        this.color = [
            object >> 16 & 0xFF,
            object >> 8 & 0xFF,
            object & 0xFF
        ];
        this.valpha = 1;
    } else {
        this.valpha = 1;
        const keys = Object.keys(object);
        if ("alpha" in object) {
            keys.splice(keys.indexOf("alpha"), 1);
            this.valpha = typeof object.alpha === "number" ? object.alpha : 0;
        }
        const hashedKeys = keys.sort().join("");
        if (!(hashedKeys in hashedModelKeys)) throw new Error("Unable to parse color from object: " + JSON.stringify(object));
        this.model = hashedModelKeys[hashedKeys];
        const { labels } = convert[this.model];
        const color = [];
        for(i = 0; i < labels.length; i++)color.push(object[labels[i]]);
        this.color = zeroArray(color);
    }
    // Perform limitations (clamping, etc.)
    if (limiters[this.model]) {
        channels = convert[this.model].channels;
        for(i = 0; i < channels; i++){
            const limit = limiters[this.model][i];
            if (limit) this.color[i] = limit(this.color[i]);
        }
    }
    this.valpha = Math.max(0, Math.min(1, this.valpha));
    if (Object.freeze) Object.freeze(this);
}
Color.prototype = {
    toString () {
        return this.string();
    },
    toJSON () {
        return this[this.model]();
    },
    string (places) {
        let self = this.model in colorString.to ? this : this.rgb();
        self = self.round(typeof places === "number" ? places : 1);
        const args = self.valpha === 1 ? self.color : [
            ...self.color,
            this.valpha
        ];
        return colorString.to[self.model](args);
    },
    percentString (places) {
        const self = this.rgb().round(typeof places === "number" ? places : 1);
        const args = self.valpha === 1 ? self.color : [
            ...self.color,
            this.valpha
        ];
        return colorString.to.rgb.percent(args);
    },
    array () {
        return this.valpha === 1 ? [
            ...this.color
        ] : [
            ...this.color,
            this.valpha
        ];
    },
    object () {
        const result = {};
        const { channels } = convert[this.model];
        const { labels } = convert[this.model];
        for(let i = 0; i < channels; i++)result[labels[i]] = this.color[i];
        if (this.valpha !== 1) result.alpha = this.valpha;
        return result;
    },
    unitArray () {
        const rgb = this.rgb().color;
        rgb[0] /= 255;
        rgb[1] /= 255;
        rgb[2] /= 255;
        if (this.valpha !== 1) rgb.push(this.valpha);
        return rgb;
    },
    unitObject () {
        const rgb = this.rgb().object();
        rgb.r /= 255;
        rgb.g /= 255;
        rgb.b /= 255;
        if (this.valpha !== 1) rgb.alpha = this.valpha;
        return rgb;
    },
    round (places) {
        places = Math.max(places || 0, 0);
        return new Color([
            ...this.color.map(roundToPlace(places)),
            this.valpha
        ], this.model);
    },
    alpha (value) {
        if (value !== undefined) return new Color([
            ...this.color,
            Math.max(0, Math.min(1, value))
        ], this.model);
        return this.valpha;
    },
    // Rgb
    red: getset("rgb", 0, maxfn(255)),
    green: getset("rgb", 1, maxfn(255)),
    blue: getset("rgb", 2, maxfn(255)),
    hue: getset([
        "hsl",
        "hsv",
        "hsl",
        "hwb",
        "hcg"
    ], 0, (value)=>(value % 360 + 360) % 360),
    saturationl: getset("hsl", 1, maxfn(100)),
    lightness: getset("hsl", 2, maxfn(100)),
    saturationv: getset("hsv", 1, maxfn(100)),
    value: getset("hsv", 2, maxfn(100)),
    chroma: getset("hcg", 1, maxfn(100)),
    gray: getset("hcg", 2, maxfn(100)),
    white: getset("hwb", 1, maxfn(100)),
    wblack: getset("hwb", 2, maxfn(100)),
    cyan: getset("cmyk", 0, maxfn(100)),
    magenta: getset("cmyk", 1, maxfn(100)),
    yellow: getset("cmyk", 2, maxfn(100)),
    black: getset("cmyk", 3, maxfn(100)),
    x: getset("xyz", 0, maxfn(95.047)),
    y: getset("xyz", 1, maxfn(100)),
    z: getset("xyz", 2, maxfn(108.833)),
    l: getset("lab", 0, maxfn(100)),
    a: getset("lab", 1),
    b: getset("lab", 2),
    keyword (value) {
        if (value !== undefined) return new Color(value);
        return convert[this.model].keyword(this.color);
    },
    hex (value) {
        if (value !== undefined) return new Color(value);
        return colorString.to.hex(this.rgb().round().color);
    },
    hexa (value) {
        if (value !== undefined) return new Color(value);
        const rgbArray = this.rgb().round().color;
        let alphaHex = Math.round(this.valpha * 255).toString(16).toUpperCase();
        if (alphaHex.length === 1) alphaHex = "0" + alphaHex;
        return colorString.to.hex(rgbArray) + alphaHex;
    },
    rgbNumber () {
        const rgb = this.rgb().color;
        return (rgb[0] & 0xFF) << 16 | (rgb[1] & 0xFF) << 8 | rgb[2] & 0xFF;
    },
    luminosity () {
        // http://www.w3.org/TR/WCAG20/#relativeluminancedef
        const rgb = this.rgb().color;
        const lum = [];
        for (const [i, element] of rgb.entries()){
            const chan = element / 255;
            lum[i] = chan <= 0.04045 ? chan / 12.92 : ((chan + 0.055) / 1.055) ** 2.4;
        }
        return 0.2126 * lum[0] + 0.7152 * lum[1] + 0.0722 * lum[2];
    },
    contrast (color2) {
        // http://www.w3.org/TR/WCAG20/#contrast-ratiodef
        const lum1 = this.luminosity();
        const lum2 = color2.luminosity();
        if (lum1 > lum2) return (lum1 + 0.05) / (lum2 + 0.05);
        return (lum2 + 0.05) / (lum1 + 0.05);
    },
    level (color2) {
        // https://www.w3.org/TR/WCAG/#contrast-enhanced
        const contrastRatio = this.contrast(color2);
        if (contrastRatio >= 7) return "AAA";
        return contrastRatio >= 4.5 ? "AA" : "";
    },
    isDark () {
        // YIQ equation from http://24ways.org/2010/calculating-color-contrast
        const rgb = this.rgb().color;
        const yiq = (rgb[0] * 2126 + rgb[1] * 7152 + rgb[2] * 722) / 10000;
        return yiq < 128;
    },
    isLight () {
        return !this.isDark();
    },
    negate () {
        const rgb = this.rgb();
        for(let i = 0; i < 3; i++)rgb.color[i] = 255 - rgb.color[i];
        return rgb;
    },
    lighten (ratio) {
        const hsl = this.hsl();
        hsl.color[2] += hsl.color[2] * ratio;
        return hsl;
    },
    darken (ratio) {
        const hsl = this.hsl();
        hsl.color[2] -= hsl.color[2] * ratio;
        return hsl;
    },
    saturate (ratio) {
        const hsl = this.hsl();
        hsl.color[1] += hsl.color[1] * ratio;
        return hsl;
    },
    desaturate (ratio) {
        const hsl = this.hsl();
        hsl.color[1] -= hsl.color[1] * ratio;
        return hsl;
    },
    whiten (ratio) {
        const hwb = this.hwb();
        hwb.color[1] += hwb.color[1] * ratio;
        return hwb;
    },
    blacken (ratio) {
        const hwb = this.hwb();
        hwb.color[2] += hwb.color[2] * ratio;
        return hwb;
    },
    grayscale () {
        // http://en.wikipedia.org/wiki/Grayscale#Converting_color_to_grayscale
        const rgb = this.rgb().color;
        const value = rgb[0] * 0.3 + rgb[1] * 0.59 + rgb[2] * 0.11;
        return Color.rgb(value, value, value);
    },
    fade (ratio) {
        return this.alpha(this.valpha - this.valpha * ratio);
    },
    opaquer (ratio) {
        return this.alpha(this.valpha + this.valpha * ratio);
    },
    rotate (degrees) {
        const hsl = this.hsl();
        let hue = hsl.color[0];
        hue = (hue + degrees) % 360;
        hue = hue < 0 ? 360 + hue : hue;
        hsl.color[0] = hue;
        return hsl;
    },
    mix (mixinColor, weight) {
        // Ported from sass implementation in C
        // https://github.com/sass/libsass/blob/0e6b4a2850092356aa3ece07c6b249f0221caced/functions.cpp#L209
        if (!mixinColor || !mixinColor.rgb) throw new Error('Argument to "mix" was not a Color instance, but rather an instance of ' + typeof mixinColor);
        const color1 = mixinColor.rgb();
        const color2 = this.rgb();
        const p = weight === undefined ? 0.5 : weight;
        const w = 2 * p - 1;
        const a = color1.alpha() - color2.alpha();
        const w1 = ((w * a === -1 ? w : (w + a) / (1 + w * a)) + 1) / 2;
        const w2 = 1 - w1;
        return Color.rgb(w1 * color1.red() + w2 * color2.red(), w1 * color1.green() + w2 * color2.green(), w1 * color1.blue() + w2 * color2.blue(), color1.alpha() * p + color2.alpha() * (1 - p));
    }
};
// Model conversion methods and static constructors
for (const model of Object.keys(convert)){
    if (skippedModels.includes(model)) continue;
    const { channels } = convert[model];
    // Conversion methods
    Color.prototype[model] = function(...args) {
        if (this.model === model) return new Color(this);
        if (args.length > 0) return new Color(args, model);
        return new Color([
            ...assertArray(convert[this.model][model].raw(this.color)),
            this.valpha
        ], model);
    };
    // 'static' construction methods
    Color[model] = function(...args) {
        let color = args[0];
        if (typeof color === "number") color = zeroArray(args, channels);
        return new Color(color, model);
    };
}
function roundTo(number, places) {
    return Number(number.toFixed(places));
}
function roundToPlace(places) {
    return function(number) {
        return roundTo(number, places);
    };
}
function getset(model, channel, modifier) {
    model = Array.isArray(model) ? model : [
        model
    ];
    for (const m of model)(limiters[m] || (limiters[m] = []))[channel] = modifier;
    model = model[0];
    return function(value) {
        let result;
        if (value !== undefined) {
            if (modifier) value = modifier(value);
            result = this[model]();
            result.color[channel] = value;
            return result;
        }
        result = this[model]().color[channel];
        if (modifier) result = modifier(result);
        return result;
    };
}
function maxfn(max) {
    return function(v) {
        return Math.max(0, Math.min(max, v));
    };
}
function assertArray(value) {
    return Array.isArray(value) ? value : [
        value
    ];
}
function zeroArray(array, length) {
    for(let i = 0; i < length; i++)if (typeof array[i] !== "number") array[i] = 0;
    return array;
}
module.exports = Color;

},{"71b6e3b39cf59f9f":"d9oJb","c094f2fb379d5867":"bvUlS"}],"d9oJb":[function(require,module,exports) {
/* MIT license */ var colorNames = require("d7a6eeb7388b4bb");
var swizzle = require("248ce9e419a8df53");
var hasOwnProperty = Object.hasOwnProperty;
var reverseNames = Object.create(null);
// create a list of reverse color names
for(var name in colorNames)if (hasOwnProperty.call(colorNames, name)) reverseNames[colorNames[name]] = name;
var cs = module.exports = {
    to: {},
    get: {}
};
cs.get = function(string) {
    var prefix = string.substring(0, 3).toLowerCase();
    var val;
    var model;
    switch(prefix){
        case "hsl":
            val = cs.get.hsl(string);
            model = "hsl";
            break;
        case "hwb":
            val = cs.get.hwb(string);
            model = "hwb";
            break;
        default:
            val = cs.get.rgb(string);
            model = "rgb";
            break;
    }
    if (!val) return null;
    return {
        model: model,
        value: val
    };
};
cs.get.rgb = function(string) {
    if (!string) return null;
    var abbr = /^#([a-f0-9]{3,4})$/i;
    var hex = /^#([a-f0-9]{6})([a-f0-9]{2})?$/i;
    var rgba = /^rgba?\(\s*([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/;
    var per = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/;
    var keyword = /^(\w+)$/;
    var rgb = [
        0,
        0,
        0,
        1
    ];
    var match;
    var i;
    var hexAlpha;
    if (match = string.match(hex)) {
        hexAlpha = match[2];
        match = match[1];
        for(i = 0; i < 3; i++){
            // https://jsperf.com/slice-vs-substr-vs-substring-methods-long-string/19
            var i2 = i * 2;
            rgb[i] = parseInt(match.slice(i2, i2 + 2), 16);
        }
        if (hexAlpha) rgb[3] = parseInt(hexAlpha, 16) / 255;
    } else if (match = string.match(abbr)) {
        match = match[1];
        hexAlpha = match[3];
        for(i = 0; i < 3; i++)rgb[i] = parseInt(match[i] + match[i], 16);
        if (hexAlpha) rgb[3] = parseInt(hexAlpha + hexAlpha, 16) / 255;
    } else if (match = string.match(rgba)) {
        for(i = 0; i < 3; i++)rgb[i] = parseInt(match[i + 1], 0);
        if (match[4]) {
            if (match[5]) rgb[3] = parseFloat(match[4]) * 0.01;
            else rgb[3] = parseFloat(match[4]);
        }
    } else if (match = string.match(per)) {
        for(i = 0; i < 3; i++)rgb[i] = Math.round(parseFloat(match[i + 1]) * 2.55);
        if (match[4]) {
            if (match[5]) rgb[3] = parseFloat(match[4]) * 0.01;
            else rgb[3] = parseFloat(match[4]);
        }
    } else if (match = string.match(keyword)) {
        if (match[1] === "transparent") return [
            0,
            0,
            0,
            0
        ];
        if (!hasOwnProperty.call(colorNames, match[1])) return null;
        rgb = colorNames[match[1]];
        rgb[3] = 1;
        return rgb;
    } else return null;
    for(i = 0; i < 3; i++)rgb[i] = clamp(rgb[i], 0, 255);
    rgb[3] = clamp(rgb[3], 0, 1);
    return rgb;
};
cs.get.hsl = function(string) {
    if (!string) return null;
    var hsl = /^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d\.]+)%\s*,?\s*([+-]?[\d\.]+)%\s*(?:[,|\/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/;
    var match = string.match(hsl);
    if (match) {
        var alpha = parseFloat(match[4]);
        var h = (parseFloat(match[1]) % 360 + 360) % 360;
        var s = clamp(parseFloat(match[2]), 0, 100);
        var l = clamp(parseFloat(match[3]), 0, 100);
        var a = clamp(isNaN(alpha) ? 1 : alpha, 0, 1);
        return [
            h,
            s,
            l,
            a
        ];
    }
    return null;
};
cs.get.hwb = function(string) {
    if (!string) return null;
    var hwb = /^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/;
    var match = string.match(hwb);
    if (match) {
        var alpha = parseFloat(match[4]);
        var h = (parseFloat(match[1]) % 360 + 360) % 360;
        var w = clamp(parseFloat(match[2]), 0, 100);
        var b = clamp(parseFloat(match[3]), 0, 100);
        var a = clamp(isNaN(alpha) ? 1 : alpha, 0, 1);
        return [
            h,
            w,
            b,
            a
        ];
    }
    return null;
};
cs.to.hex = function() {
    var rgba = swizzle(arguments);
    return "#" + hexDouble(rgba[0]) + hexDouble(rgba[1]) + hexDouble(rgba[2]) + (rgba[3] < 1 ? hexDouble(Math.round(rgba[3] * 255)) : "");
};
cs.to.rgb = function() {
    var rgba = swizzle(arguments);
    return rgba.length < 4 || rgba[3] === 1 ? "rgb(" + Math.round(rgba[0]) + ", " + Math.round(rgba[1]) + ", " + Math.round(rgba[2]) + ")" : "rgba(" + Math.round(rgba[0]) + ", " + Math.round(rgba[1]) + ", " + Math.round(rgba[2]) + ", " + rgba[3] + ")";
};
cs.to.rgb.percent = function() {
    var rgba = swizzle(arguments);
    var r = Math.round(rgba[0] / 255 * 100);
    var g = Math.round(rgba[1] / 255 * 100);
    var b = Math.round(rgba[2] / 255 * 100);
    return rgba.length < 4 || rgba[3] === 1 ? "rgb(" + r + "%, " + g + "%, " + b + "%)" : "rgba(" + r + "%, " + g + "%, " + b + "%, " + rgba[3] + ")";
};
cs.to.hsl = function() {
    var hsla = swizzle(arguments);
    return hsla.length < 4 || hsla[3] === 1 ? "hsl(" + hsla[0] + ", " + hsla[1] + "%, " + hsla[2] + "%)" : "hsla(" + hsla[0] + ", " + hsla[1] + "%, " + hsla[2] + "%, " + hsla[3] + ")";
};
// hwb is a bit different than rgb(a) & hsl(a) since there is no alpha specific syntax
// (hwb have alpha optional & 1 is default value)
cs.to.hwb = function() {
    var hwba = swizzle(arguments);
    var a = "";
    if (hwba.length >= 4 && hwba[3] !== 1) a = ", " + hwba[3];
    return "hwb(" + hwba[0] + ", " + hwba[1] + "%, " + hwba[2] + "%" + a + ")";
};
cs.to.keyword = function(rgb) {
    return reverseNames[rgb.slice(0, 3)];
};
// helpers
function clamp(num, min, max) {
    return Math.min(Math.max(min, num), max);
}
function hexDouble(num) {
    var str = Math.round(num).toString(16).toUpperCase();
    return str.length < 2 ? "0" + str : str;
}

},{"d7a6eeb7388b4bb":"8NNt4","248ce9e419a8df53":"1jxJ4"}],"8NNt4":[function(require,module,exports) {
"use strict";
module.exports = {
    "aliceblue": [
        240,
        248,
        255
    ],
    "antiquewhite": [
        250,
        235,
        215
    ],
    "aqua": [
        0,
        255,
        255
    ],
    "aquamarine": [
        127,
        255,
        212
    ],
    "azure": [
        240,
        255,
        255
    ],
    "beige": [
        245,
        245,
        220
    ],
    "bisque": [
        255,
        228,
        196
    ],
    "black": [
        0,
        0,
        0
    ],
    "blanchedalmond": [
        255,
        235,
        205
    ],
    "blue": [
        0,
        0,
        255
    ],
    "blueviolet": [
        138,
        43,
        226
    ],
    "brown": [
        165,
        42,
        42
    ],
    "burlywood": [
        222,
        184,
        135
    ],
    "cadetblue": [
        95,
        158,
        160
    ],
    "chartreuse": [
        127,
        255,
        0
    ],
    "chocolate": [
        210,
        105,
        30
    ],
    "coral": [
        255,
        127,
        80
    ],
    "cornflowerblue": [
        100,
        149,
        237
    ],
    "cornsilk": [
        255,
        248,
        220
    ],
    "crimson": [
        220,
        20,
        60
    ],
    "cyan": [
        0,
        255,
        255
    ],
    "darkblue": [
        0,
        0,
        139
    ],
    "darkcyan": [
        0,
        139,
        139
    ],
    "darkgoldenrod": [
        184,
        134,
        11
    ],
    "darkgray": [
        169,
        169,
        169
    ],
    "darkgreen": [
        0,
        100,
        0
    ],
    "darkgrey": [
        169,
        169,
        169
    ],
    "darkkhaki": [
        189,
        183,
        107
    ],
    "darkmagenta": [
        139,
        0,
        139
    ],
    "darkolivegreen": [
        85,
        107,
        47
    ],
    "darkorange": [
        255,
        140,
        0
    ],
    "darkorchid": [
        153,
        50,
        204
    ],
    "darkred": [
        139,
        0,
        0
    ],
    "darksalmon": [
        233,
        150,
        122
    ],
    "darkseagreen": [
        143,
        188,
        143
    ],
    "darkslateblue": [
        72,
        61,
        139
    ],
    "darkslategray": [
        47,
        79,
        79
    ],
    "darkslategrey": [
        47,
        79,
        79
    ],
    "darkturquoise": [
        0,
        206,
        209
    ],
    "darkviolet": [
        148,
        0,
        211
    ],
    "deeppink": [
        255,
        20,
        147
    ],
    "deepskyblue": [
        0,
        191,
        255
    ],
    "dimgray": [
        105,
        105,
        105
    ],
    "dimgrey": [
        105,
        105,
        105
    ],
    "dodgerblue": [
        30,
        144,
        255
    ],
    "firebrick": [
        178,
        34,
        34
    ],
    "floralwhite": [
        255,
        250,
        240
    ],
    "forestgreen": [
        34,
        139,
        34
    ],
    "fuchsia": [
        255,
        0,
        255
    ],
    "gainsboro": [
        220,
        220,
        220
    ],
    "ghostwhite": [
        248,
        248,
        255
    ],
    "gold": [
        255,
        215,
        0
    ],
    "goldenrod": [
        218,
        165,
        32
    ],
    "gray": [
        128,
        128,
        128
    ],
    "green": [
        0,
        128,
        0
    ],
    "greenyellow": [
        173,
        255,
        47
    ],
    "grey": [
        128,
        128,
        128
    ],
    "honeydew": [
        240,
        255,
        240
    ],
    "hotpink": [
        255,
        105,
        180
    ],
    "indianred": [
        205,
        92,
        92
    ],
    "indigo": [
        75,
        0,
        130
    ],
    "ivory": [
        255,
        255,
        240
    ],
    "khaki": [
        240,
        230,
        140
    ],
    "lavender": [
        230,
        230,
        250
    ],
    "lavenderblush": [
        255,
        240,
        245
    ],
    "lawngreen": [
        124,
        252,
        0
    ],
    "lemonchiffon": [
        255,
        250,
        205
    ],
    "lightblue": [
        173,
        216,
        230
    ],
    "lightcoral": [
        240,
        128,
        128
    ],
    "lightcyan": [
        224,
        255,
        255
    ],
    "lightgoldenrodyellow": [
        250,
        250,
        210
    ],
    "lightgray": [
        211,
        211,
        211
    ],
    "lightgreen": [
        144,
        238,
        144
    ],
    "lightgrey": [
        211,
        211,
        211
    ],
    "lightpink": [
        255,
        182,
        193
    ],
    "lightsalmon": [
        255,
        160,
        122
    ],
    "lightseagreen": [
        32,
        178,
        170
    ],
    "lightskyblue": [
        135,
        206,
        250
    ],
    "lightslategray": [
        119,
        136,
        153
    ],
    "lightslategrey": [
        119,
        136,
        153
    ],
    "lightsteelblue": [
        176,
        196,
        222
    ],
    "lightyellow": [
        255,
        255,
        224
    ],
    "lime": [
        0,
        255,
        0
    ],
    "limegreen": [
        50,
        205,
        50
    ],
    "linen": [
        250,
        240,
        230
    ],
    "magenta": [
        255,
        0,
        255
    ],
    "maroon": [
        128,
        0,
        0
    ],
    "mediumaquamarine": [
        102,
        205,
        170
    ],
    "mediumblue": [
        0,
        0,
        205
    ],
    "mediumorchid": [
        186,
        85,
        211
    ],
    "mediumpurple": [
        147,
        112,
        219
    ],
    "mediumseagreen": [
        60,
        179,
        113
    ],
    "mediumslateblue": [
        123,
        104,
        238
    ],
    "mediumspringgreen": [
        0,
        250,
        154
    ],
    "mediumturquoise": [
        72,
        209,
        204
    ],
    "mediumvioletred": [
        199,
        21,
        133
    ],
    "midnightblue": [
        25,
        25,
        112
    ],
    "mintcream": [
        245,
        255,
        250
    ],
    "mistyrose": [
        255,
        228,
        225
    ],
    "moccasin": [
        255,
        228,
        181
    ],
    "navajowhite": [
        255,
        222,
        173
    ],
    "navy": [
        0,
        0,
        128
    ],
    "oldlace": [
        253,
        245,
        230
    ],
    "olive": [
        128,
        128,
        0
    ],
    "olivedrab": [
        107,
        142,
        35
    ],
    "orange": [
        255,
        165,
        0
    ],
    "orangered": [
        255,
        69,
        0
    ],
    "orchid": [
        218,
        112,
        214
    ],
    "palegoldenrod": [
        238,
        232,
        170
    ],
    "palegreen": [
        152,
        251,
        152
    ],
    "paleturquoise": [
        175,
        238,
        238
    ],
    "palevioletred": [
        219,
        112,
        147
    ],
    "papayawhip": [
        255,
        239,
        213
    ],
    "peachpuff": [
        255,
        218,
        185
    ],
    "peru": [
        205,
        133,
        63
    ],
    "pink": [
        255,
        192,
        203
    ],
    "plum": [
        221,
        160,
        221
    ],
    "powderblue": [
        176,
        224,
        230
    ],
    "purple": [
        128,
        0,
        128
    ],
    "rebeccapurple": [
        102,
        51,
        153
    ],
    "red": [
        255,
        0,
        0
    ],
    "rosybrown": [
        188,
        143,
        143
    ],
    "royalblue": [
        65,
        105,
        225
    ],
    "saddlebrown": [
        139,
        69,
        19
    ],
    "salmon": [
        250,
        128,
        114
    ],
    "sandybrown": [
        244,
        164,
        96
    ],
    "seagreen": [
        46,
        139,
        87
    ],
    "seashell": [
        255,
        245,
        238
    ],
    "sienna": [
        160,
        82,
        45
    ],
    "silver": [
        192,
        192,
        192
    ],
    "skyblue": [
        135,
        206,
        235
    ],
    "slateblue": [
        106,
        90,
        205
    ],
    "slategray": [
        112,
        128,
        144
    ],
    "slategrey": [
        112,
        128,
        144
    ],
    "snow": [
        255,
        250,
        250
    ],
    "springgreen": [
        0,
        255,
        127
    ],
    "steelblue": [
        70,
        130,
        180
    ],
    "tan": [
        210,
        180,
        140
    ],
    "teal": [
        0,
        128,
        128
    ],
    "thistle": [
        216,
        191,
        216
    ],
    "tomato": [
        255,
        99,
        71
    ],
    "turquoise": [
        64,
        224,
        208
    ],
    "violet": [
        238,
        130,
        238
    ],
    "wheat": [
        245,
        222,
        179
    ],
    "white": [
        255,
        255,
        255
    ],
    "whitesmoke": [
        245,
        245,
        245
    ],
    "yellow": [
        255,
        255,
        0
    ],
    "yellowgreen": [
        154,
        205,
        50
    ]
};

},{}],"1jxJ4":[function(require,module,exports) {
"use strict";
var isArrayish = require("ce0bf6d0bc000d24");
var concat = Array.prototype.concat;
var slice = Array.prototype.slice;
var swizzle = module.exports = function swizzle(args) {
    var results = [];
    for(var i = 0, len = args.length; i < len; i++){
        var arg = args[i];
        if (isArrayish(arg)) // http://jsperf.com/javascript-array-concat-vs-push/98
        results = concat.call(results, slice.call(arg));
        else results.push(arg);
    }
    return results;
};
swizzle.wrap = function(fn) {
    return function() {
        return fn(swizzle(arguments));
    };
};

},{"ce0bf6d0bc000d24":"ll30o"}],"ll30o":[function(require,module,exports) {
module.exports = function isArrayish(obj) {
    if (!obj || typeof obj === "string") return false;
    return obj instanceof Array || Array.isArray(obj) || obj.length >= 0 && (obj.splice instanceof Function || Object.getOwnPropertyDescriptor(obj, obj.length - 1) && obj.constructor.name !== "String");
};

},{}],"bvUlS":[function(require,module,exports) {
const conversions = require("739980f7990d3c32");
const route = require("30ea0c7ee5f3dd94");
const convert = {};
const models = Object.keys(conversions);
function wrapRaw(fn) {
    const wrappedFn = function(...args) {
        const arg0 = args[0];
        if (arg0 === undefined || arg0 === null) return arg0;
        if (arg0.length > 1) args = arg0;
        return fn(args);
    };
    // Preserve .conversion property if there is one
    if ("conversion" in fn) wrappedFn.conversion = fn.conversion;
    return wrappedFn;
}
function wrapRounded(fn) {
    const wrappedFn = function(...args) {
        const arg0 = args[0];
        if (arg0 === undefined || arg0 === null) return arg0;
        if (arg0.length > 1) args = arg0;
        const result = fn(args);
        // We're assuming the result is an array here.
        // see notice in conversions.js; don't use box types
        // in conversion functions.
        if (typeof result === "object") for(let len = result.length, i = 0; i < len; i++)result[i] = Math.round(result[i]);
        return result;
    };
    // Preserve .conversion property if there is one
    if ("conversion" in fn) wrappedFn.conversion = fn.conversion;
    return wrappedFn;
}
models.forEach((fromModel)=>{
    convert[fromModel] = {};
    Object.defineProperty(convert[fromModel], "channels", {
        value: conversions[fromModel].channels
    });
    Object.defineProperty(convert[fromModel], "labels", {
        value: conversions[fromModel].labels
    });
    const routes = route(fromModel);
    const routeModels = Object.keys(routes);
    routeModels.forEach((toModel)=>{
        const fn = routes[toModel];
        convert[fromModel][toModel] = wrapRounded(fn);
        convert[fromModel][toModel].raw = wrapRaw(fn);
    });
});
module.exports = convert;

},{"739980f7990d3c32":"C4O54","30ea0c7ee5f3dd94":"iJmBL"}],"C4O54":[function(require,module,exports) {
/* MIT license */ /* eslint-disable no-mixed-operators */ const cssKeywords = require("efc99055946c4df8");
// NOTE: conversions should only return primitive values (i.e. arrays, or
//       values that give correct `typeof` results).
//       do not use box values types (i.e. Number(), String(), etc.)
const reverseKeywords = {};
for (const key of Object.keys(cssKeywords))reverseKeywords[cssKeywords[key]] = key;
const convert = {
    rgb: {
        channels: 3,
        labels: "rgb"
    },
    hsl: {
        channels: 3,
        labels: "hsl"
    },
    hsv: {
        channels: 3,
        labels: "hsv"
    },
    hwb: {
        channels: 3,
        labels: "hwb"
    },
    cmyk: {
        channels: 4,
        labels: "cmyk"
    },
    xyz: {
        channels: 3,
        labels: "xyz"
    },
    lab: {
        channels: 3,
        labels: "lab"
    },
    lch: {
        channels: 3,
        labels: "lch"
    },
    hex: {
        channels: 1,
        labels: [
            "hex"
        ]
    },
    keyword: {
        channels: 1,
        labels: [
            "keyword"
        ]
    },
    ansi16: {
        channels: 1,
        labels: [
            "ansi16"
        ]
    },
    ansi256: {
        channels: 1,
        labels: [
            "ansi256"
        ]
    },
    hcg: {
        channels: 3,
        labels: [
            "h",
            "c",
            "g"
        ]
    },
    apple: {
        channels: 3,
        labels: [
            "r16",
            "g16",
            "b16"
        ]
    },
    gray: {
        channels: 1,
        labels: [
            "gray"
        ]
    }
};
module.exports = convert;
// Hide .channels and .labels properties
for (const model of Object.keys(convert)){
    if (!("channels" in convert[model])) throw new Error("missing channels property: " + model);
    if (!("labels" in convert[model])) throw new Error("missing channel labels property: " + model);
    if (convert[model].labels.length !== convert[model].channels) throw new Error("channel and label counts mismatch: " + model);
    const { channels, labels } = convert[model];
    delete convert[model].channels;
    delete convert[model].labels;
    Object.defineProperty(convert[model], "channels", {
        value: channels
    });
    Object.defineProperty(convert[model], "labels", {
        value: labels
    });
}
convert.rgb.hsl = function(rgb) {
    const r = rgb[0] / 255;
    const g = rgb[1] / 255;
    const b = rgb[2] / 255;
    const min = Math.min(r, g, b);
    const max = Math.max(r, g, b);
    const delta = max - min;
    let h;
    let s;
    if (max === min) h = 0;
    else if (r === max) h = (g - b) / delta;
    else if (g === max) h = 2 + (b - r) / delta;
    else if (b === max) h = 4 + (r - g) / delta;
    h = Math.min(h * 60, 360);
    if (h < 0) h += 360;
    const l = (min + max) / 2;
    if (max === min) s = 0;
    else if (l <= 0.5) s = delta / (max + min);
    else s = delta / (2 - max - min);
    return [
        h,
        s * 100,
        l * 100
    ];
};
convert.rgb.hsv = function(rgb) {
    let rdif;
    let gdif;
    let bdif;
    let h;
    let s;
    const r = rgb[0] / 255;
    const g = rgb[1] / 255;
    const b = rgb[2] / 255;
    const v = Math.max(r, g, b);
    const diff = v - Math.min(r, g, b);
    const diffc = function(c) {
        return (v - c) / 6 / diff + 0.5;
    };
    if (diff === 0) {
        h = 0;
        s = 0;
    } else {
        s = diff / v;
        rdif = diffc(r);
        gdif = diffc(g);
        bdif = diffc(b);
        if (r === v) h = bdif - gdif;
        else if (g === v) h = 1 / 3 + rdif - bdif;
        else if (b === v) h = 2 / 3 + gdif - rdif;
        if (h < 0) h += 1;
        else if (h > 1) h -= 1;
    }
    return [
        h * 360,
        s * 100,
        v * 100
    ];
};
convert.rgb.hwb = function(rgb) {
    const r = rgb[0];
    const g = rgb[1];
    let b = rgb[2];
    const h = convert.rgb.hsl(rgb)[0];
    const w = 1 / 255 * Math.min(r, Math.min(g, b));
    b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));
    return [
        h,
        w * 100,
        b * 100
    ];
};
convert.rgb.cmyk = function(rgb) {
    const r = rgb[0] / 255;
    const g = rgb[1] / 255;
    const b = rgb[2] / 255;
    const k = Math.min(1 - r, 1 - g, 1 - b);
    const c = (1 - r - k) / (1 - k) || 0;
    const m = (1 - g - k) / (1 - k) || 0;
    const y = (1 - b - k) / (1 - k) || 0;
    return [
        c * 100,
        m * 100,
        y * 100,
        k * 100
    ];
};
function comparativeDistance(x, y) {
    /*
		See https://en.m.wikipedia.org/wiki/Euclidean_distance#Squared_Euclidean_distance
	*/ return (x[0] - y[0]) ** 2 + (x[1] - y[1]) ** 2 + (x[2] - y[2]) ** 2;
}
convert.rgb.keyword = function(rgb) {
    const reversed = reverseKeywords[rgb];
    if (reversed) return reversed;
    let currentClosestDistance = Infinity;
    let currentClosestKeyword;
    for (const keyword of Object.keys(cssKeywords)){
        const value = cssKeywords[keyword];
        // Compute comparative distance
        const distance = comparativeDistance(rgb, value);
        // Check if its less, if so set as closest
        if (distance < currentClosestDistance) {
            currentClosestDistance = distance;
            currentClosestKeyword = keyword;
        }
    }
    return currentClosestKeyword;
};
convert.keyword.rgb = function(keyword) {
    return cssKeywords[keyword];
};
convert.rgb.xyz = function(rgb) {
    let r = rgb[0] / 255;
    let g = rgb[1] / 255;
    let b = rgb[2] / 255;
    // Assume sRGB
    r = r > 0.04045 ? ((r + 0.055) / 1.055) ** 2.4 : r / 12.92;
    g = g > 0.04045 ? ((g + 0.055) / 1.055) ** 2.4 : g / 12.92;
    b = b > 0.04045 ? ((b + 0.055) / 1.055) ** 2.4 : b / 12.92;
    const x = r * 0.4124 + g * 0.3576 + b * 0.1805;
    const y = r * 0.2126 + g * 0.7152 + b * 0.0722;
    const z = r * 0.0193 + g * 0.1192 + b * 0.9505;
    return [
        x * 100,
        y * 100,
        z * 100
    ];
};
convert.rgb.lab = function(rgb) {
    const xyz = convert.rgb.xyz(rgb);
    let x = xyz[0];
    let y = xyz[1];
    let z = xyz[2];
    x /= 95.047;
    y /= 100;
    z /= 108.883;
    x = x > 0.008856 ? x ** (1 / 3) : 7.787 * x + 16 / 116;
    y = y > 0.008856 ? y ** (1 / 3) : 7.787 * y + 16 / 116;
    z = z > 0.008856 ? z ** (1 / 3) : 7.787 * z + 16 / 116;
    const l = 116 * y - 16;
    const a = 500 * (x - y);
    const b = 200 * (y - z);
    return [
        l,
        a,
        b
    ];
};
convert.hsl.rgb = function(hsl) {
    const h = hsl[0] / 360;
    const s = hsl[1] / 100;
    const l = hsl[2] / 100;
    let t2;
    let t3;
    let val;
    if (s === 0) {
        val = l * 255;
        return [
            val,
            val,
            val
        ];
    }
    if (l < 0.5) t2 = l * (1 + s);
    else t2 = l + s - l * s;
    const t1 = 2 * l - t2;
    const rgb = [
        0,
        0,
        0
    ];
    for(let i = 0; i < 3; i++){
        t3 = h + 1 / 3 * -(i - 1);
        if (t3 < 0) t3++;
        if (t3 > 1) t3--;
        if (6 * t3 < 1) val = t1 + (t2 - t1) * 6 * t3;
        else if (2 * t3 < 1) val = t2;
        else if (3 * t3 < 2) val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
        else val = t1;
        rgb[i] = val * 255;
    }
    return rgb;
};
convert.hsl.hsv = function(hsl) {
    const h = hsl[0];
    let s = hsl[1] / 100;
    let l = hsl[2] / 100;
    let smin = s;
    const lmin = Math.max(l, 0.01);
    l *= 2;
    s *= l <= 1 ? l : 2 - l;
    smin *= lmin <= 1 ? lmin : 2 - lmin;
    const v = (l + s) / 2;
    const sv = l === 0 ? 2 * smin / (lmin + smin) : 2 * s / (l + s);
    return [
        h,
        sv * 100,
        v * 100
    ];
};
convert.hsv.rgb = function(hsv) {
    const h = hsv[0] / 60;
    const s = hsv[1] / 100;
    let v = hsv[2] / 100;
    const hi = Math.floor(h) % 6;
    const f = h - Math.floor(h);
    const p = 255 * v * (1 - s);
    const q = 255 * v * (1 - s * f);
    const t = 255 * v * (1 - s * (1 - f));
    v *= 255;
    switch(hi){
        case 0:
            return [
                v,
                t,
                p
            ];
        case 1:
            return [
                q,
                v,
                p
            ];
        case 2:
            return [
                p,
                v,
                t
            ];
        case 3:
            return [
                p,
                q,
                v
            ];
        case 4:
            return [
                t,
                p,
                v
            ];
        case 5:
            return [
                v,
                p,
                q
            ];
    }
};
convert.hsv.hsl = function(hsv) {
    const h = hsv[0];
    const s = hsv[1] / 100;
    const v = hsv[2] / 100;
    const vmin = Math.max(v, 0.01);
    let sl;
    let l;
    l = (2 - s) * v;
    const lmin = (2 - s) * vmin;
    sl = s * vmin;
    sl /= lmin <= 1 ? lmin : 2 - lmin;
    sl = sl || 0;
    l /= 2;
    return [
        h,
        sl * 100,
        l * 100
    ];
};
// http://dev.w3.org/csswg/css-color/#hwb-to-rgb
convert.hwb.rgb = function(hwb) {
    const h = hwb[0] / 360;
    let wh = hwb[1] / 100;
    let bl = hwb[2] / 100;
    const ratio = wh + bl;
    let f;
    // Wh + bl cant be > 1
    if (ratio > 1) {
        wh /= ratio;
        bl /= ratio;
    }
    const i = Math.floor(6 * h);
    const v = 1 - bl;
    f = 6 * h - i;
    if ((i & 0x01) !== 0) f = 1 - f;
    const n = wh + f * (v - wh); // Linear interpolation
    let r;
    let g;
    let b;
    /* eslint-disable max-statements-per-line,no-multi-spaces */ switch(i){
        default:
        case 6:
        case 0:
            r = v;
            g = n;
            b = wh;
            break;
        case 1:
            r = n;
            g = v;
            b = wh;
            break;
        case 2:
            r = wh;
            g = v;
            b = n;
            break;
        case 3:
            r = wh;
            g = n;
            b = v;
            break;
        case 4:
            r = n;
            g = wh;
            b = v;
            break;
        case 5:
            r = v;
            g = wh;
            b = n;
            break;
    }
    /* eslint-enable max-statements-per-line,no-multi-spaces */ return [
        r * 255,
        g * 255,
        b * 255
    ];
};
convert.cmyk.rgb = function(cmyk) {
    const c = cmyk[0] / 100;
    const m = cmyk[1] / 100;
    const y = cmyk[2] / 100;
    const k = cmyk[3] / 100;
    const r = 1 - Math.min(1, c * (1 - k) + k);
    const g = 1 - Math.min(1, m * (1 - k) + k);
    const b = 1 - Math.min(1, y * (1 - k) + k);
    return [
        r * 255,
        g * 255,
        b * 255
    ];
};
convert.xyz.rgb = function(xyz) {
    const x = xyz[0] / 100;
    const y = xyz[1] / 100;
    const z = xyz[2] / 100;
    let r;
    let g;
    let b;
    r = x * 3.2406 + y * -1.5372 + z * -0.4986;
    g = x * -0.9689 + y * 1.8758 + z * 0.0415;
    b = x * 0.0557 + y * -0.204 + z * 1.0570;
    // Assume sRGB
    r = r > 0.0031308 ? 1.055 * r ** (1.0 / 2.4) - 0.055 : r * 12.92;
    g = g > 0.0031308 ? 1.055 * g ** (1.0 / 2.4) - 0.055 : g * 12.92;
    b = b > 0.0031308 ? 1.055 * b ** (1.0 / 2.4) - 0.055 : b * 12.92;
    r = Math.min(Math.max(0, r), 1);
    g = Math.min(Math.max(0, g), 1);
    b = Math.min(Math.max(0, b), 1);
    return [
        r * 255,
        g * 255,
        b * 255
    ];
};
convert.xyz.lab = function(xyz) {
    let x = xyz[0];
    let y = xyz[1];
    let z = xyz[2];
    x /= 95.047;
    y /= 100;
    z /= 108.883;
    x = x > 0.008856 ? x ** (1 / 3) : 7.787 * x + 16 / 116;
    y = y > 0.008856 ? y ** (1 / 3) : 7.787 * y + 16 / 116;
    z = z > 0.008856 ? z ** (1 / 3) : 7.787 * z + 16 / 116;
    const l = 116 * y - 16;
    const a = 500 * (x - y);
    const b = 200 * (y - z);
    return [
        l,
        a,
        b
    ];
};
convert.lab.xyz = function(lab) {
    const l = lab[0];
    const a = lab[1];
    const b = lab[2];
    let x;
    let y;
    let z;
    y = (l + 16) / 116;
    x = a / 500 + y;
    z = y - b / 200;
    const y2 = y ** 3;
    const x2 = x ** 3;
    const z2 = z ** 3;
    y = y2 > 0.008856 ? y2 : (y - 16 / 116) / 7.787;
    x = x2 > 0.008856 ? x2 : (x - 16 / 116) / 7.787;
    z = z2 > 0.008856 ? z2 : (z - 16 / 116) / 7.787;
    x *= 95.047;
    y *= 100;
    z *= 108.883;
    return [
        x,
        y,
        z
    ];
};
convert.lab.lch = function(lab) {
    const l = lab[0];
    const a = lab[1];
    const b = lab[2];
    let h;
    const hr = Math.atan2(b, a);
    h = hr * 360 / 2 / Math.PI;
    if (h < 0) h += 360;
    const c = Math.sqrt(a * a + b * b);
    return [
        l,
        c,
        h
    ];
};
convert.lch.lab = function(lch) {
    const l = lch[0];
    const c = lch[1];
    const h = lch[2];
    const hr = h / 360 * 2 * Math.PI;
    const a = c * Math.cos(hr);
    const b = c * Math.sin(hr);
    return [
        l,
        a,
        b
    ];
};
convert.rgb.ansi16 = function(args, saturation = null) {
    const [r, g, b] = args;
    let value = saturation === null ? convert.rgb.hsv(args)[2] : saturation; // Hsv -> ansi16 optimization
    value = Math.round(value / 50);
    if (value === 0) return 30;
    let ansi = 30 + (Math.round(b / 255) << 2 | Math.round(g / 255) << 1 | Math.round(r / 255));
    if (value === 2) ansi += 60;
    return ansi;
};
convert.hsv.ansi16 = function(args) {
    // Optimization here; we already know the value and don't need to get
    // it converted for us.
    return convert.rgb.ansi16(convert.hsv.rgb(args), args[2]);
};
convert.rgb.ansi256 = function(args) {
    const r = args[0];
    const g = args[1];
    const b = args[2];
    // We use the extended greyscale palette here, with the exception of
    // black and white. normal palette only has 4 greyscale shades.
    if (r === g && g === b) {
        if (r < 8) return 16;
        if (r > 248) return 231;
        return Math.round((r - 8) / 247 * 24) + 232;
    }
    const ansi = 16 + 36 * Math.round(r / 255 * 5) + 6 * Math.round(g / 255 * 5) + Math.round(b / 255 * 5);
    return ansi;
};
convert.ansi16.rgb = function(args) {
    let color = args % 10;
    // Handle greyscale
    if (color === 0 || color === 7) {
        if (args > 50) color += 3.5;
        color = color / 10.5 * 255;
        return [
            color,
            color,
            color
        ];
    }
    const mult = (~~(args > 50) + 1) * 0.5;
    const r = (color & 1) * mult * 255;
    const g = (color >> 1 & 1) * mult * 255;
    const b = (color >> 2 & 1) * mult * 255;
    return [
        r,
        g,
        b
    ];
};
convert.ansi256.rgb = function(args) {
    // Handle greyscale
    if (args >= 232) {
        const c = (args - 232) * 10 + 8;
        return [
            c,
            c,
            c
        ];
    }
    args -= 16;
    let rem;
    const r = Math.floor(args / 36) / 5 * 255;
    const g = Math.floor((rem = args % 36) / 6) / 5 * 255;
    const b = rem % 6 / 5 * 255;
    return [
        r,
        g,
        b
    ];
};
convert.rgb.hex = function(args) {
    const integer = ((Math.round(args[0]) & 0xFF) << 16) + ((Math.round(args[1]) & 0xFF) << 8) + (Math.round(args[2]) & 0xFF);
    const string = integer.toString(16).toUpperCase();
    return "000000".substring(string.length) + string;
};
convert.hex.rgb = function(args) {
    const match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
    if (!match) return [
        0,
        0,
        0
    ];
    let colorString = match[0];
    if (match[0].length === 3) colorString = colorString.split("").map((char)=>{
        return char + char;
    }).join("");
    const integer = parseInt(colorString, 16);
    const r = integer >> 16 & 0xFF;
    const g = integer >> 8 & 0xFF;
    const b = integer & 0xFF;
    return [
        r,
        g,
        b
    ];
};
convert.rgb.hcg = function(rgb) {
    const r = rgb[0] / 255;
    const g = rgb[1] / 255;
    const b = rgb[2] / 255;
    const max = Math.max(Math.max(r, g), b);
    const min = Math.min(Math.min(r, g), b);
    const chroma = max - min;
    let grayscale;
    let hue;
    if (chroma < 1) grayscale = min / (1 - chroma);
    else grayscale = 0;
    if (chroma <= 0) hue = 0;
    else if (max === r) hue = (g - b) / chroma % 6;
    else if (max === g) hue = 2 + (b - r) / chroma;
    else hue = 4 + (r - g) / chroma;
    hue /= 6;
    hue %= 1;
    return [
        hue * 360,
        chroma * 100,
        grayscale * 100
    ];
};
convert.hsl.hcg = function(hsl) {
    const s = hsl[1] / 100;
    const l = hsl[2] / 100;
    const c = l < 0.5 ? 2.0 * s * l : 2.0 * s * (1.0 - l);
    let f = 0;
    if (c < 1.0) f = (l - 0.5 * c) / (1.0 - c);
    return [
        hsl[0],
        c * 100,
        f * 100
    ];
};
convert.hsv.hcg = function(hsv) {
    const s = hsv[1] / 100;
    const v = hsv[2] / 100;
    const c = s * v;
    let f = 0;
    if (c < 1.0) f = (v - c) / (1 - c);
    return [
        hsv[0],
        c * 100,
        f * 100
    ];
};
convert.hcg.rgb = function(hcg) {
    const h = hcg[0] / 360;
    const c = hcg[1] / 100;
    const g = hcg[2] / 100;
    if (c === 0.0) return [
        g * 255,
        g * 255,
        g * 255
    ];
    const pure = [
        0,
        0,
        0
    ];
    const hi = h % 1 * 6;
    const v = hi % 1;
    const w = 1 - v;
    let mg = 0;
    /* eslint-disable max-statements-per-line */ switch(Math.floor(hi)){
        case 0:
            pure[0] = 1;
            pure[1] = v;
            pure[2] = 0;
            break;
        case 1:
            pure[0] = w;
            pure[1] = 1;
            pure[2] = 0;
            break;
        case 2:
            pure[0] = 0;
            pure[1] = 1;
            pure[2] = v;
            break;
        case 3:
            pure[0] = 0;
            pure[1] = w;
            pure[2] = 1;
            break;
        case 4:
            pure[0] = v;
            pure[1] = 0;
            pure[2] = 1;
            break;
        default:
            pure[0] = 1;
            pure[1] = 0;
            pure[2] = w;
    }
    /* eslint-enable max-statements-per-line */ mg = (1.0 - c) * g;
    return [
        (c * pure[0] + mg) * 255,
        (c * pure[1] + mg) * 255,
        (c * pure[2] + mg) * 255
    ];
};
convert.hcg.hsv = function(hcg) {
    const c = hcg[1] / 100;
    const g = hcg[2] / 100;
    const v = c + g * (1.0 - c);
    let f = 0;
    if (v > 0.0) f = c / v;
    return [
        hcg[0],
        f * 100,
        v * 100
    ];
};
convert.hcg.hsl = function(hcg) {
    const c = hcg[1] / 100;
    const g = hcg[2] / 100;
    const l = g * (1.0 - c) + 0.5 * c;
    let s = 0;
    if (l > 0.0 && l < 0.5) s = c / (2 * l);
    else if (l >= 0.5 && l < 1.0) s = c / (2 * (1 - l));
    return [
        hcg[0],
        s * 100,
        l * 100
    ];
};
convert.hcg.hwb = function(hcg) {
    const c = hcg[1] / 100;
    const g = hcg[2] / 100;
    const v = c + g * (1.0 - c);
    return [
        hcg[0],
        (v - c) * 100,
        (1 - v) * 100
    ];
};
convert.hwb.hcg = function(hwb) {
    const w = hwb[1] / 100;
    const b = hwb[2] / 100;
    const v = 1 - b;
    const c = v - w;
    let g = 0;
    if (c < 1) g = (v - c) / (1 - c);
    return [
        hwb[0],
        c * 100,
        g * 100
    ];
};
convert.apple.rgb = function(apple) {
    return [
        apple[0] / 65535 * 255,
        apple[1] / 65535 * 255,
        apple[2] / 65535 * 255
    ];
};
convert.rgb.apple = function(rgb) {
    return [
        rgb[0] / 255 * 65535,
        rgb[1] / 255 * 65535,
        rgb[2] / 255 * 65535
    ];
};
convert.gray.rgb = function(args) {
    return [
        args[0] / 100 * 255,
        args[0] / 100 * 255,
        args[0] / 100 * 255
    ];
};
convert.gray.hsl = function(args) {
    return [
        0,
        0,
        args[0]
    ];
};
convert.gray.hsv = convert.gray.hsl;
convert.gray.hwb = function(gray) {
    return [
        0,
        100,
        gray[0]
    ];
};
convert.gray.cmyk = function(gray) {
    return [
        0,
        0,
        0,
        gray[0]
    ];
};
convert.gray.lab = function(gray) {
    return [
        gray[0],
        0,
        0
    ];
};
convert.gray.hex = function(gray) {
    const val = Math.round(gray[0] / 100 * 255) & 0xFF;
    const integer = (val << 16) + (val << 8) + val;
    const string = integer.toString(16).toUpperCase();
    return "000000".substring(string.length) + string;
};
convert.rgb.gray = function(rgb) {
    const val = (rgb[0] + rgb[1] + rgb[2]) / 3;
    return [
        val / 255 * 100
    ];
};

},{"efc99055946c4df8":"8NNt4"}],"iJmBL":[function(require,module,exports) {
const conversions = require("22442592002c5ac3");
/*
	This function routes a model to all other models.

	all functions that are routed have a property `.conversion` attached
	to the returned synthetic function. This property is an array
	of strings, each with the steps in between the 'from' and 'to'
	color models (inclusive).

	conversions that are not possible simply are not included.
*/ function buildGraph() {
    const graph = {};
    // https://jsperf.com/object-keys-vs-for-in-with-closure/3
    const models = Object.keys(conversions);
    for(let len = models.length, i = 0; i < len; i++)graph[models[i]] = {
        // http://jsperf.com/1-vs-infinity
        // micro-opt, but this is simple.
        distance: -1,
        parent: null
    };
    return graph;
}
// https://en.wikipedia.org/wiki/Breadth-first_search
function deriveBFS(fromModel) {
    const graph = buildGraph();
    const queue = [
        fromModel
    ]; // Unshift -> queue -> pop
    graph[fromModel].distance = 0;
    while(queue.length){
        const current = queue.pop();
        const adjacents = Object.keys(conversions[current]);
        for(let len = adjacents.length, i = 0; i < len; i++){
            const adjacent = adjacents[i];
            const node = graph[adjacent];
            if (node.distance === -1) {
                node.distance = graph[current].distance + 1;
                node.parent = current;
                queue.unshift(adjacent);
            }
        }
    }
    return graph;
}
function link(from, to) {
    return function(args) {
        return to(from(args));
    };
}
function wrapConversion(toModel, graph) {
    const path = [
        graph[toModel].parent,
        toModel
    ];
    let fn = conversions[graph[toModel].parent][toModel];
    let cur = graph[toModel].parent;
    while(graph[cur].parent){
        path.unshift(graph[cur].parent);
        fn = link(conversions[graph[cur].parent][cur], fn);
        cur = graph[cur].parent;
    }
    fn.conversion = path;
    return fn;
}
module.exports = function(fromModel) {
    const graph = deriveBFS(fromModel);
    const conversion = {};
    const models = Object.keys(graph);
    for(let len = models.length, i = 0; i < len; i++){
        const toModel = models[i];
        const node = graph[toModel];
        if (node.parent === null) continue;
        conversion[toModel] = wrapConversion(toModel, graph);
    }
    return conversion;
};

},{"22442592002c5ac3":"C4O54"}],"lE4Lo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ColorTable", ()=>ColorTable);
parcelHelpers.export(exports, "TableVideo", ()=>TableVideo);
class ColorTable {
    constructor(colors, time){
        this.colors = colors;
        this.time = time;
    }
    getColor(position) {
        position = position - Math.floor(position);
        const idx = Math.min(this.colors.length - 1, Math.round(position * this.colors.length));
        return this.colors[idx];
    }
}
class TableVideo {
    constructor(frames){
        this.frames = frames;
        this.lastValue = 0;
        this.lastBeatTime = 0;
        this.beatCallback = ()=>{};
        this.frames.sort((n1, n2)=>n1.time - n2.time);
    }
    binarySearch(frames, target) {
        let left = 0;
        let right = frames.length - 1;
        if (frames.length === 1) return frames[0];
        if (frames.length === 2) return frames[Math.round(target)];
        while(left <= right){
            const mid = Math.floor((left + right) / 2);
            if (mid === 0) return frames[mid];
            if (mid === frames.length - 1) return frames[mid];
            if (frames[mid - 1].time <= target && frames[mid + 1].time >= target) return frames[mid];
            if (target < frames[mid].time) right = mid - 1;
            else left = mid + 1;
        }
        console.error("binary search failed");
        return new ColorTable([], 0);
    }
    getFrame(time) {
        return this.binarySearch(this.frames, time);
    }
    beatDetectionFrame(threshold, time, position) {
        let luminosity = this.getFrame(time).getColor(position).luminosity();
        let delta = time - this.lastBeatTime;
        if (this.lastValue < threshold && luminosity > threshold && delta < this.minBeatDelta) {
            this.lastBeatTime = time;
            this.beatCallback();
        }
        this.lastValue = luminosity;
    }
    /**
     *
     * @param sampleRate the amount of samples per second
     * @param callback the function to call when a beat is detected
     */ registerBeatDetection(callback, minTimeBetweenBeats = 50) {
        this.beatCallback = callback;
        this.minBeatDelta = minTimeBetweenBeats;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"hmfvE":[function(require,module,exports) {
/// <reference types="./index.d.ts" />
/*
 Copyright (c) 2022 Gildas Lormeau. All rights reserved.

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions are met:

 1. Redistributions of source code must retain the above copyright notice,
 this list of conditions and the following disclaimer.

 2. Redistributions in binary form must reproduce the above copyright 
 notice, this list of conditions and the following disclaimer in 
 the documentation and/or other materials provided with the distribution.

 3. The names of the authors may not be used to endorse or promote products
 derived from this software without specific prior written permission.

 THIS SOFTWARE IS PROVIDED ''AS IS'' AND ANY EXPRESSED OR IMPLIED WARRANTIES,
 INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
 FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL JCRAFT,
 INC. OR ANY CONTRIBUTORS TO THIS SOFTWARE BE LIABLE FOR ANY DIRECT, INDIRECT,
 INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA,
 OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
 LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
 EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "fs", ()=>(0, _zipFsJs.fs));
parcelHelpers.export(exports, "configure", ()=>(0, _zipFsJs.configure));
parcelHelpers.export(exports, "initShimAsyncCodec", ()=>(0, _zipFsJs.initShimAsyncCodec));
parcelHelpers.export(exports, "ZipReader", ()=>(0, _zipFsJs.ZipReader));
parcelHelpers.export(exports, "ZipWriter", ()=>(0, _zipFsJs.ZipWriter));
parcelHelpers.export(exports, "Reader", ()=>(0, _zipFsJs.Reader));
parcelHelpers.export(exports, "Writer", ()=>(0, _zipFsJs.Writer));
parcelHelpers.export(exports, "TextReader", ()=>(0, _zipFsJs.TextReader));
parcelHelpers.export(exports, "TextWriter", ()=>(0, _zipFsJs.TextWriter));
parcelHelpers.export(exports, "Data64URIReader", ()=>(0, _zipFsJs.Data64URIReader));
parcelHelpers.export(exports, "Data64URIWriter", ()=>(0, _zipFsJs.Data64URIWriter));
parcelHelpers.export(exports, "BlobReader", ()=>(0, _zipFsJs.BlobReader));
parcelHelpers.export(exports, "BlobWriter", ()=>(0, _zipFsJs.BlobWriter));
parcelHelpers.export(exports, "HttpReader", ()=>(0, _zipFsJs.HttpReader));
parcelHelpers.export(exports, "HttpRangeReader", ()=>(0, _zipFsJs.HttpRangeReader));
parcelHelpers.export(exports, "Uint8ArrayWriter", ()=>(0, _zipFsJs.Uint8ArrayWriter));
parcelHelpers.export(exports, "Uint8ArrayReader", ()=>(0, _zipFsJs.Uint8ArrayReader));
parcelHelpers.export(exports, "SplitZipReader", ()=>(0, _zipFsJs.SplitZipReader));
parcelHelpers.export(exports, "SplitZipWriter", ()=>(0, _zipFsJs.SplitZipWriter));
parcelHelpers.export(exports, "ERR_HTTP_RANGE", ()=>(0, _zipFsJs.ERR_HTTP_RANGE));
parcelHelpers.export(exports, "ERR_BAD_FORMAT", ()=>(0, _zipFsJs.ERR_BAD_FORMAT));
parcelHelpers.export(exports, "ERR_EOCDR_NOT_FOUND", ()=>(0, _zipFsJs.ERR_EOCDR_NOT_FOUND));
parcelHelpers.export(exports, "ERR_EOCDR_ZIP64_NOT_FOUND", ()=>(0, _zipFsJs.ERR_EOCDR_ZIP64_NOT_FOUND));
parcelHelpers.export(exports, "ERR_EOCDR_LOCATOR_ZIP64_NOT_FOUND", ()=>(0, _zipFsJs.ERR_EOCDR_LOCATOR_ZIP64_NOT_FOUND));
parcelHelpers.export(exports, "ERR_CENTRAL_DIRECTORY_NOT_FOUND", ()=>(0, _zipFsJs.ERR_CENTRAL_DIRECTORY_NOT_FOUND));
parcelHelpers.export(exports, "ERR_LOCAL_FILE_HEADER_NOT_FOUND", ()=>(0, _zipFsJs.ERR_LOCAL_FILE_HEADER_NOT_FOUND));
parcelHelpers.export(exports, "ERR_EXTRAFIELD_ZIP64_NOT_FOUND", ()=>(0, _zipFsJs.ERR_EXTRAFIELD_ZIP64_NOT_FOUND));
parcelHelpers.export(exports, "ERR_ENCRYPTED", ()=>(0, _zipFsJs.ERR_ENCRYPTED));
parcelHelpers.export(exports, "ERR_UNSUPPORTED_ENCRYPTION", ()=>(0, _zipFsJs.ERR_UNSUPPORTED_ENCRYPTION));
parcelHelpers.export(exports, "ERR_UNSUPPORTED_COMPRESSION", ()=>(0, _zipFsJs.ERR_UNSUPPORTED_COMPRESSION));
parcelHelpers.export(exports, "ERR_INVALID_SIGNATURE", ()=>(0, _zipFsJs.ERR_INVALID_SIGNATURE));
parcelHelpers.export(exports, "ERR_INVALID_PASSWORD", ()=>(0, _zipFsJs.ERR_INVALID_PASSWORD));
parcelHelpers.export(exports, "ERR_DUPLICATED_NAME", ()=>(0, _zipFsJs.ERR_DUPLICATED_NAME));
parcelHelpers.export(exports, "ERR_INVALID_COMMENT", ()=>(0, _zipFsJs.ERR_INVALID_COMMENT));
parcelHelpers.export(exports, "ERR_INVALID_ENTRY_NAME", ()=>(0, _zipFsJs.ERR_INVALID_ENTRY_NAME));
parcelHelpers.export(exports, "ERR_INVALID_ENTRY_COMMENT", ()=>(0, _zipFsJs.ERR_INVALID_ENTRY_COMMENT));
parcelHelpers.export(exports, "ERR_INVALID_VERSION", ()=>(0, _zipFsJs.ERR_INVALID_VERSION));
parcelHelpers.export(exports, "ERR_INVALID_EXTRAFIELD_TYPE", ()=>(0, _zipFsJs.ERR_INVALID_EXTRAFIELD_TYPE));
parcelHelpers.export(exports, "ERR_INVALID_EXTRAFIELD_DATA", ()=>(0, _zipFsJs.ERR_INVALID_EXTRAFIELD_DATA));
parcelHelpers.export(exports, "ERR_INVALID_ENCRYPTION_STRENGTH", ()=>(0, _zipFsJs.ERR_INVALID_ENCRYPTION_STRENGTH));
parcelHelpers.export(exports, "ERR_UNSUPPORTED_FORMAT", ()=>(0, _zipFsJs.ERR_UNSUPPORTED_FORMAT));
parcelHelpers.export(exports, "ERR_SPLIT_ZIP_FILE", ()=>(0, _zipFsJs.ERR_SPLIT_ZIP_FILE));
parcelHelpers.export(exports, "ERR_ITERATOR_COMPLETED_TOO_SOON", ()=>(0, _zipFsJs.ERR_ITERATOR_COMPLETED_TOO_SOON));
parcelHelpers.export(exports, "getMimeType", ()=>(0, _mimeTypeJs.getMimeType));
parcelHelpers.export(exports, "terminateWorkers", ()=>(0, _codecPoolJs.terminateWorkers));
var _deflateJs = require("./lib/core/streams/codecs/deflate.js");
var _inflateJs = require("./lib/core/streams/codecs/inflate.js");
var _configurationJs = require("./lib/core/configuration.js");
var _mimeTypeJs = require("./lib/core/util/mime-type.js");
var _codecPoolJs = require("./lib/core/codec-pool.js");
var _zipFsJs = require("./lib/zip-fs.js");
(0, _configurationJs.configure)({
    Deflate: (0, _deflateJs.Deflate),
    Inflate: (0, _inflateJs.Inflate)
});

},{"./lib/core/streams/codecs/deflate.js":"fqHph","./lib/core/streams/codecs/inflate.js":"i2w9C","./lib/core/configuration.js":"5UMrn","./lib/core/util/mime-type.js":"3M5Q5","./lib/core/codec-pool.js":"36tHD","./lib/zip-fs.js":"1whTf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fqHph":[function(require,module,exports) {
/*
 Copyright (c) 2022 Gildas Lormeau. All rights reserved.

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions are met:

 1. Redistributions of source code must retain the above copyright notice,
 this list of conditions and the following disclaimer.

 2. Redistributions in binary form must reproduce the above copyright 
 notice, this list of conditions and the following disclaimer in 
 the documentation and/or other materials provided with the distribution.

 3. The names of the authors may not be used to endorse or promote products
 derived from this software without specific prior written permission.

 THIS SOFTWARE IS PROVIDED ''AS IS'' AND ANY EXPRESSED OR IMPLIED WARRANTIES,
 INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
 FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL JCRAFT,
 INC. OR ANY CONTRIBUTORS TO THIS SOFTWARE BE LIABLE FOR ANY DIRECT, INDIRECT,
 INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA,
 OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
 LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
 EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */ /*
 * This program is based on JZlib 1.0.2 ymnk, JCraft,Inc.
 * JZlib is based on zlib-1.1.3, so all credit should go authors
 * Jean-loup Gailly(jloup@gzip.org) and Mark Adler(madler@alumni.caltech.edu)
 * and contributors of zlib.
 */ // deno-lint-ignore-file no-this-alias prefer-const
// Global
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Deflate", ()=>ZipDeflate);
const MAX_BITS = 15;
const D_CODES = 30;
const BL_CODES = 19;
const LENGTH_CODES = 29;
const LITERALS = 256;
const L_CODES = LITERALS + 1 + LENGTH_CODES;
const HEAP_SIZE = 2 * L_CODES + 1;
const END_BLOCK = 256;
// Bit length codes must not exceed MAX_BL_BITS bits
const MAX_BL_BITS = 7;
// repeat previous bit length 3-6 times (2 bits of repeat count)
const REP_3_6 = 16;
// repeat a zero length 3-10 times (3 bits of repeat count)
const REPZ_3_10 = 17;
// repeat a zero length 11-138 times (7 bits of repeat count)
const REPZ_11_138 = 18;
// The lengths of the bit length codes are sent in order of decreasing
// probability, to avoid transmitting the lengths for unused bit
// length codes.
const Buf_size = 16;
// JZlib version : "1.0.2"
const Z_DEFAULT_COMPRESSION = -1;
// compression strategy
const Z_FILTERED = 1;
const Z_HUFFMAN_ONLY = 2;
const Z_DEFAULT_STRATEGY = 0;
const Z_NO_FLUSH = 0;
const Z_PARTIAL_FLUSH = 1;
const Z_FULL_FLUSH = 3;
const Z_FINISH = 4;
const Z_OK = 0;
const Z_STREAM_END = 1;
const Z_NEED_DICT = 2;
const Z_STREAM_ERROR = -2;
const Z_DATA_ERROR = -3;
const Z_BUF_ERROR = -5;
// Tree
function extractArray(array) {
    return flatArray(array.map(([length, value])=>new Array(length).fill(value, 0, length)));
}
function flatArray(array) {
    return array.reduce((a, b)=>a.concat(Array.isArray(b) ? flatArray(b) : b), []);
}
// see definition of array dist_code below
const _dist_code = [
    0,
    1,
    2,
    3
].concat(...extractArray([
    [
        2,
        4
    ],
    [
        2,
        5
    ],
    [
        4,
        6
    ],
    [
        4,
        7
    ],
    [
        8,
        8
    ],
    [
        8,
        9
    ],
    [
        16,
        10
    ],
    [
        16,
        11
    ],
    [
        32,
        12
    ],
    [
        32,
        13
    ],
    [
        64,
        14
    ],
    [
        64,
        15
    ],
    [
        2,
        0
    ],
    [
        1,
        16
    ],
    [
        1,
        17
    ],
    [
        2,
        18
    ],
    [
        2,
        19
    ],
    [
        4,
        20
    ],
    [
        4,
        21
    ],
    [
        8,
        22
    ],
    [
        8,
        23
    ],
    [
        16,
        24
    ],
    [
        16,
        25
    ],
    [
        32,
        26
    ],
    [
        32,
        27
    ],
    [
        64,
        28
    ],
    [
        64,
        29
    ]
]));
function Tree() {
    const that = this;
    // dyn_tree; // the dynamic tree
    // max_code; // largest code with non zero frequency
    // stat_desc; // the corresponding static tree
    // Compute the optimal bit lengths for a tree and update the total bit
    // length
    // for the current block.
    // IN assertion: the fields freq and dad are set, heap[heap_max] and
    // above are the tree nodes sorted by increasing frequency.
    // OUT assertions: the field len is set to the optimal bit length, the
    // array bl_count contains the frequencies for each bit length.
    // The length opt_len is updated; static_len is also updated if stree is
    // not null.
    function gen_bitlen(s) {
        const tree = that.dyn_tree;
        const stree = that.stat_desc.static_tree;
        const extra = that.stat_desc.extra_bits;
        const base = that.stat_desc.extra_base;
        const max_length = that.stat_desc.max_length;
        let h; // heap index
        let n, m; // iterate over the tree elements
        let bits; // bit length
        let xbits; // extra bits
        let f; // frequency
        let overflow = 0; // number of elements with bit length too large
        for(bits = 0; bits <= MAX_BITS; bits++)s.bl_count[bits] = 0;
        // In a first pass, compute the optimal bit lengths (which may
        // overflow in the case of the bit length tree).
        tree[s.heap[s.heap_max] * 2 + 1] = 0; // root of the heap
        for(h = s.heap_max + 1; h < HEAP_SIZE; h++){
            n = s.heap[h];
            bits = tree[tree[n * 2 + 1] * 2 + 1] + 1;
            if (bits > max_length) {
                bits = max_length;
                overflow++;
            }
            tree[n * 2 + 1] = bits;
            // We overwrite tree[n*2+1] which is no longer needed
            if (n > that.max_code) continue; // not a leaf node
            s.bl_count[bits]++;
            xbits = 0;
            if (n >= base) xbits = extra[n - base];
            f = tree[n * 2];
            s.opt_len += f * (bits + xbits);
            if (stree) s.static_len += f * (stree[n * 2 + 1] + xbits);
        }
        if (overflow === 0) return;
        // This happens for example on obj2 and pic of the Calgary corpus
        // Find the first bit length which could increase:
        do {
            bits = max_length - 1;
            while(s.bl_count[bits] === 0)bits--;
            s.bl_count[bits]--; // move one leaf down the tree
            s.bl_count[bits + 1] += 2; // move one overflow item as its brother
            s.bl_count[max_length]--;
            // The brother of the overflow item also moves one step up,
            // but this does not affect bl_count[max_length]
            overflow -= 2;
        }while (overflow > 0);
        for(bits = max_length; bits !== 0; bits--){
            n = s.bl_count[bits];
            while(n !== 0){
                m = s.heap[--h];
                if (m > that.max_code) continue;
                if (tree[m * 2 + 1] != bits) {
                    s.opt_len += (bits - tree[m * 2 + 1]) * tree[m * 2];
                    tree[m * 2 + 1] = bits;
                }
                n--;
            }
        }
    }
    // Reverse the first len bits of a code, using straightforward code (a
    // faster
    // method would use a table)
    // IN assertion: 1 <= len <= 15
    function bi_reverse(code, len // its bit length
    ) {
        let res = 0;
        do {
            res |= code & 1;
            code >>>= 1;
            res <<= 1;
        }while (--len > 0);
        return res >>> 1;
    }
    // Generate the codes for a given tree and bit counts (which need not be
    // optimal).
    // IN assertion: the array bl_count contains the bit length statistics for
    // the given tree and the field len is set for all tree elements.
    // OUT assertion: the field code is set for all tree elements of non
    // zero code length.
    function gen_codes(tree, max_code, bl_count // number of codes at each bit length
    ) {
        const next_code = []; // next code value for each
        // bit length
        let code = 0; // running code value
        let bits; // bit index
        let n; // code index
        let len;
        // The distribution counts are first used to generate the code values
        // without bit reversal.
        for(bits = 1; bits <= MAX_BITS; bits++)next_code[bits] = code = code + bl_count[bits - 1] << 1;
        // Check that the bit counts in bl_count are consistent. The last code
        // must be all ones.
        // Assert (code + bl_count[MAX_BITS]-1 == (1<<MAX_BITS)-1,
        // "inconsistent bit counts");
        // Tracev((stderr,"gen_codes: max_code %d ", max_code));
        for(n = 0; n <= max_code; n++){
            len = tree[n * 2 + 1];
            if (len === 0) continue;
            // Now reverse the bits
            tree[n * 2] = bi_reverse(next_code[len]++, len);
        }
    }
    // Construct one Huffman tree and assigns the code bit strings and lengths.
    // Update the total bit length for the current block.
    // IN assertion: the field freq is set for all tree elements.
    // OUT assertions: the fields len and code are set to the optimal bit length
    // and corresponding code. The length opt_len is updated; static_len is
    // also updated if stree is not null. The field max_code is set.
    that.build_tree = function(s) {
        const tree = that.dyn_tree;
        const stree = that.stat_desc.static_tree;
        const elems = that.stat_desc.elems;
        let n, m; // iterate over heap elements
        let max_code = -1; // largest code with non zero frequency
        let node; // new node being created
        // Construct the initial heap, with least frequent element in
        // heap[1]. The sons of heap[n] are heap[2*n] and heap[2*n+1].
        // heap[0] is not used.
        s.heap_len = 0;
        s.heap_max = HEAP_SIZE;
        for(n = 0; n < elems; n++)if (tree[n * 2] !== 0) {
            s.heap[++s.heap_len] = max_code = n;
            s.depth[n] = 0;
        } else tree[n * 2 + 1] = 0;
        // The pkzip format requires that at least one distance code exists,
        // and that at least one bit should be sent even if there is only one
        // possible code. So to avoid special checks later on we force at least
        // two codes of non zero frequency.
        while(s.heap_len < 2){
            node = s.heap[++s.heap_len] = max_code < 2 ? ++max_code : 0;
            tree[node * 2] = 1;
            s.depth[node] = 0;
            s.opt_len--;
            if (stree) s.static_len -= stree[node * 2 + 1];
        // node is 0 or 1 so it does not have extra bits
        }
        that.max_code = max_code;
        // The elements heap[heap_len/2+1 .. heap_len] are leaves of the tree,
        // establish sub-heaps of increasing lengths:
        for(n = Math.floor(s.heap_len / 2); n >= 1; n--)s.pqdownheap(tree, n);
        // Construct the Huffman tree by repeatedly combining the least two
        // frequent nodes.
        node = elems; // next internal node of the tree
        do {
            // n = node of least frequency
            n = s.heap[1];
            s.heap[1] = s.heap[s.heap_len--];
            s.pqdownheap(tree, 1);
            m = s.heap[1]; // m = node of next least frequency
            s.heap[--s.heap_max] = n; // keep the nodes sorted by frequency
            s.heap[--s.heap_max] = m;
            // Create a new node father of n and m
            tree[node * 2] = tree[n * 2] + tree[m * 2];
            s.depth[node] = Math.max(s.depth[n], s.depth[m]) + 1;
            tree[n * 2 + 1] = tree[m * 2 + 1] = node;
            // and insert the new node in the heap
            s.heap[1] = node++;
            s.pqdownheap(tree, 1);
        }while (s.heap_len >= 2);
        s.heap[--s.heap_max] = s.heap[1];
        // At this point, the fields freq and dad are set. We can now
        // generate the bit lengths.
        gen_bitlen(s);
        // The field len is now set, we can generate the bit codes
        gen_codes(tree, that.max_code, s.bl_count);
    };
}
Tree._length_code = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7
].concat(...extractArray([
    [
        2,
        8
    ],
    [
        2,
        9
    ],
    [
        2,
        10
    ],
    [
        2,
        11
    ],
    [
        4,
        12
    ],
    [
        4,
        13
    ],
    [
        4,
        14
    ],
    [
        4,
        15
    ],
    [
        8,
        16
    ],
    [
        8,
        17
    ],
    [
        8,
        18
    ],
    [
        8,
        19
    ],
    [
        16,
        20
    ],
    [
        16,
        21
    ],
    [
        16,
        22
    ],
    [
        16,
        23
    ],
    [
        32,
        24
    ],
    [
        32,
        25
    ],
    [
        32,
        26
    ],
    [
        31,
        27
    ],
    [
        1,
        28
    ]
]));
Tree.base_length = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    10,
    12,
    14,
    16,
    20,
    24,
    28,
    32,
    40,
    48,
    56,
    64,
    80,
    96,
    112,
    128,
    160,
    192,
    224,
    0
];
Tree.base_dist = [
    0,
    1,
    2,
    3,
    4,
    6,
    8,
    12,
    16,
    24,
    32,
    48,
    64,
    96,
    128,
    192,
    256,
    384,
    512,
    768,
    1024,
    1536,
    2048,
    3072,
    4096,
    6144,
    8192,
    12288,
    16384,
    24576
];
// Mapping from a distance to a distance code. dist is the distance - 1 and
// must not have side effects. _dist_code[256] and _dist_code[257] are never
// used.
Tree.d_code = function(dist) {
    return dist < 256 ? _dist_code[dist] : _dist_code[256 + (dist >>> 7)];
};
// extra bits for each length code
Tree.extra_lbits = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    2,
    2,
    2,
    2,
    3,
    3,
    3,
    3,
    4,
    4,
    4,
    4,
    5,
    5,
    5,
    5,
    0
];
// extra bits for each distance code
Tree.extra_dbits = [
    0,
    0,
    0,
    0,
    1,
    1,
    2,
    2,
    3,
    3,
    4,
    4,
    5,
    5,
    6,
    6,
    7,
    7,
    8,
    8,
    9,
    9,
    10,
    10,
    11,
    11,
    12,
    12,
    13,
    13
];
// extra bits for each bit length code
Tree.extra_blbits = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    2,
    3,
    7
];
Tree.bl_order = [
    16,
    17,
    18,
    0,
    8,
    7,
    9,
    6,
    10,
    5,
    11,
    4,
    12,
    3,
    13,
    2,
    14,
    1,
    15
];
// StaticTree
function StaticTree(static_tree, extra_bits, extra_base, elems, max_length) {
    const that = this;
    that.static_tree = static_tree;
    that.extra_bits = extra_bits;
    that.extra_base = extra_base;
    that.elems = elems;
    that.max_length = max_length;
}
const static_ltree2_first_part = [
    12,
    140,
    76,
    204,
    44,
    172,
    108,
    236,
    28,
    156,
    92,
    220,
    60,
    188,
    124,
    252,
    2,
    130,
    66,
    194,
    34,
    162,
    98,
    226,
    18,
    146,
    82,
    210,
    50,
    178,
    114,
    242,
    10,
    138,
    74,
    202,
    42,
    170,
    106,
    234,
    26,
    154,
    90,
    218,
    58,
    186,
    122,
    250,
    6,
    134,
    70,
    198,
    38,
    166,
    102,
    230,
    22,
    150,
    86,
    214,
    54,
    182,
    118,
    246,
    14,
    142,
    78,
    206,
    46,
    174,
    110,
    238,
    30,
    158,
    94,
    222,
    62,
    190,
    126,
    254,
    1,
    129,
    65,
    193,
    33,
    161,
    97,
    225,
    17,
    145,
    81,
    209,
    49,
    177,
    113,
    241,
    9,
    137,
    73,
    201,
    41,
    169,
    105,
    233,
    25,
    153,
    89,
    217,
    57,
    185,
    121,
    249,
    5,
    133,
    69,
    197,
    37,
    165,
    101,
    229,
    21,
    149,
    85,
    213,
    53,
    181,
    117,
    245,
    13,
    141,
    77,
    205,
    45,
    173,
    109,
    237,
    29,
    157,
    93,
    221,
    61,
    189,
    125,
    253,
    19,
    275,
    147,
    403,
    83,
    339,
    211,
    467,
    51,
    307,
    179,
    435,
    115,
    371,
    243,
    499,
    11,
    267,
    139,
    395,
    75,
    331,
    203,
    459,
    43,
    299,
    171,
    427,
    107,
    363,
    235,
    491,
    27,
    283,
    155,
    411,
    91,
    347,
    219,
    475,
    59,
    315,
    187,
    443,
    123,
    379,
    251,
    507,
    7,
    263,
    135,
    391,
    71,
    327,
    199,
    455,
    39,
    295,
    167,
    423,
    103,
    359,
    231,
    487,
    23,
    279,
    151,
    407,
    87,
    343,
    215,
    471,
    55,
    311,
    183,
    439,
    119,
    375,
    247,
    503,
    15,
    271,
    143,
    399,
    79,
    335,
    207,
    463,
    47,
    303,
    175,
    431,
    111,
    367,
    239,
    495,
    31,
    287,
    159,
    415,
    95,
    351,
    223,
    479,
    63,
    319,
    191,
    447,
    127,
    383,
    255,
    511,
    0,
    64,
    32,
    96,
    16,
    80,
    48,
    112,
    8,
    72,
    40,
    104,
    24,
    88,
    56,
    120,
    4,
    68,
    36,
    100,
    20,
    84,
    52,
    116,
    3,
    131,
    67,
    195,
    35,
    163,
    99,
    227
];
const static_ltree2_second_part = extractArray([
    [
        144,
        8
    ],
    [
        112,
        9
    ],
    [
        24,
        7
    ],
    [
        8,
        8
    ]
]);
StaticTree.static_ltree = flatArray(static_ltree2_first_part.map((value, index)=>[
        value,
        static_ltree2_second_part[index]
    ]));
const static_dtree_first_part = [
    0,
    16,
    8,
    24,
    4,
    20,
    12,
    28,
    2,
    18,
    10,
    26,
    6,
    22,
    14,
    30,
    1,
    17,
    9,
    25,
    5,
    21,
    13,
    29,
    3,
    19,
    11,
    27,
    7,
    23
];
const static_dtree_second_part = extractArray([
    [
        30,
        5
    ]
]);
StaticTree.static_dtree = flatArray(static_dtree_first_part.map((value, index)=>[
        value,
        static_dtree_second_part[index]
    ]));
StaticTree.static_l_desc = new StaticTree(StaticTree.static_ltree, Tree.extra_lbits, LITERALS + 1, L_CODES, MAX_BITS);
StaticTree.static_d_desc = new StaticTree(StaticTree.static_dtree, Tree.extra_dbits, 0, D_CODES, MAX_BITS);
StaticTree.static_bl_desc = new StaticTree(null, Tree.extra_blbits, 0, BL_CODES, MAX_BL_BITS);
// Deflate
const MAX_MEM_LEVEL = 9;
const DEF_MEM_LEVEL = 8;
function Config(good_length, max_lazy, nice_length, max_chain, func) {
    const that = this;
    that.good_length = good_length;
    that.max_lazy = max_lazy;
    that.nice_length = nice_length;
    that.max_chain = max_chain;
    that.func = func;
}
const STORED = 0;
const FAST = 1;
const SLOW = 2;
const config_table = [
    new Config(0, 0, 0, 0, STORED),
    new Config(4, 4, 8, 4, FAST),
    new Config(4, 5, 16, 8, FAST),
    new Config(4, 6, 32, 32, FAST),
    new Config(4, 4, 16, 16, SLOW),
    new Config(8, 16, 32, 32, SLOW),
    new Config(8, 16, 128, 128, SLOW),
    new Config(8, 32, 128, 256, SLOW),
    new Config(32, 128, 258, 1024, SLOW),
    new Config(32, 258, 258, 4096, SLOW)
];
const z_errmsg = [
    "need dictionary",
    // 2
    "stream end",
    "",
    "",
    "stream error",
    "data error",
    "",
    "buffer error",
    "",
    ""
];
// block not completed, need more input or more output
const NeedMore = 0;
// block flush performed
const BlockDone = 1;
// finish started, need only more output at next deflate
const FinishStarted = 2;
// finish done, accept no more input or output
const FinishDone = 3;
// preset dictionary flag in zlib header
const PRESET_DICT = 0x20;
const INIT_STATE = 42;
const BUSY_STATE = 113;
const FINISH_STATE = 666;
// The deflate compression method
const Z_DEFLATED = 8;
const STORED_BLOCK = 0;
const STATIC_TREES = 1;
const DYN_TREES = 2;
const MIN_MATCH = 3;
const MAX_MATCH = 258;
const MIN_LOOKAHEAD = MAX_MATCH + MIN_MATCH + 1;
function smaller(tree, n, m, depth) {
    const tn2 = tree[n * 2];
    const tm2 = tree[m * 2];
    return tn2 < tm2 || tn2 == tm2 && depth[n] <= depth[m];
}
function Deflate() {
    const that = this;
    let strm; // pointer back to this zlib stream
    let status; // as the name implies
    // pending_buf; // output still pending
    let pending_buf_size; // size of pending_buf
    // pending_out; // next pending byte to output to the stream
    // pending; // nb of bytes in the pending buffer
    // dist_buf; // buffer for distances
    // lc_buf; // buffer for literals or lengths
    // To simplify the code, dist_buf and lc_buf have the same number of elements.
    // To use different lengths, an extra flag array would be necessary.
    let last_flush; // value of flush param for previous deflate call
    let w_size; // LZ77 win size (32K by default)
    let w_bits; // log2(w_size) (8..16)
    let w_mask; // w_size - 1
    let win;
    // Sliding win. Input bytes are read into the second half of the win,
    // and move to the first half later to keep a dictionary of at least wSize
    // bytes. With this organization, matches are limited to a distance of
    // wSize-MAX_MATCH bytes, but this ensures that IO is always
    // performed with a length multiple of the block size. Also, it limits
    // the win size to 64K, which is quite useful on MSDOS.
    // To do: use the user input buffer as sliding win.
    let window_size;
    // Actual size of win: 2*wSize, except when the user input buffer
    // is directly used as sliding win.
    let prev;
    // Link to older string with same hash index. To limit the size of this
    // array to 64K, this link is maintained only for the last 32K strings.
    // An index in this array is thus a win index modulo 32K.
    let head; // Heads of the hash chains or NIL.
    let ins_h; // hash index of string to be inserted
    let hash_size; // number of elements in hash table
    let hash_bits; // log2(hash_size)
    let hash_mask; // hash_size-1
    // Number of bits by which ins_h must be shifted at each input
    // step. It must be such that after MIN_MATCH steps, the oldest
    // byte no longer takes part in the hash key, that is:
    // hash_shift * MIN_MATCH >= hash_bits
    let hash_shift;
    // Window position at the beginning of the current output block. Gets
    // negative when the win is moved backwards.
    let block_start;
    let match_length; // length of best match
    let prev_match; // previous match
    let match_available; // set if previous match exists
    let strstart; // start of string to insert
    let match_start; // start of matching string
    let lookahead; // number of valid bytes ahead in win
    // Length of the best match at previous step. Matches not greater than this
    // are discarded. This is used in the lazy match evaluation.
    let prev_length;
    // To speed up deflation, hash chains are never searched beyond this
    // length. A higher limit improves compression ratio but degrades the speed.
    let max_chain_length;
    // Attempt to find a better match only when the current match is strictly
    // smaller than this value. This mechanism is used only for compression
    // levels >= 4.
    let max_lazy_match;
    // Insert new strings in the hash table only if the match length is not
    // greater than this length. This saves time but degrades compression.
    // max_insert_length is used only for compression levels <= 3.
    let level; // compression level (1..9)
    let strategy; // favor or force Huffman coding
    // Use a faster search when the previous match is longer than this
    let good_match;
    // Stop searching when current match exceeds this
    let nice_match;
    let dyn_ltree; // literal and length tree
    let dyn_dtree; // distance tree
    let bl_tree; // Huffman tree for bit lengths
    const l_desc = new Tree(); // desc for literal tree
    const d_desc = new Tree(); // desc for distance tree
    const bl_desc = new Tree(); // desc for bit length tree
    // that.heap_len; // number of elements in the heap
    // that.heap_max; // element of largest frequency
    // The sons of heap[n] are heap[2*n] and heap[2*n+1]. heap[0] is not used.
    // The same heap array is used to build all trees.
    // Depth of each subtree used as tie breaker for trees of equal frequency
    that.depth = [];
    // Size of match buffer for literals/lengths. There are 4 reasons for
    // limiting lit_bufsize to 64K:
    // - frequencies can be kept in 16 bit counters
    // - if compression is not successful for the first block, all input
    // data is still in the win so we can still emit a stored block even
    // when input comes from standard input. (This can also be done for
    // all blocks if lit_bufsize is not greater than 32K.)
    // - if compression is not successful for a file smaller than 64K, we can
    // even emit a stored file instead of a stored block (saving 5 bytes).
    // This is applicable only for zip (not gzip or zlib).
    // - creating new Huffman trees less frequently may not provide fast
    // adaptation to changes in the input data statistics. (Take for
    // example a binary file with poorly compressible code followed by
    // a highly compressible string table.) Smaller buffer sizes give
    // fast adaptation but have of course the overhead of transmitting
    // trees more frequently.
    // - I can't count above 4
    let lit_bufsize;
    let last_lit; // running index in dist_buf and lc_buf
    // that.opt_len; // bit length of current block with optimal trees
    // that.static_len; // bit length of current block with static trees
    let matches; // number of string matches in current block
    let last_eob_len; // bit length of EOB code for last block
    // Output buffer. bits are inserted starting at the bottom (least
    // significant bits).
    let bi_buf;
    // Number of valid bits in bi_buf. All bits above the last valid bit
    // are always zero.
    let bi_valid;
    // number of codes at each bit length for an optimal tree
    that.bl_count = [];
    // heap used to build the Huffman trees
    that.heap = [];
    dyn_ltree = [];
    dyn_dtree = [];
    bl_tree = [];
    function lm_init() {
        window_size = 2 * w_size;
        head[hash_size - 1] = 0;
        for(let i = 0; i < hash_size - 1; i++)head[i] = 0;
        // Set the default configuration parameters:
        max_lazy_match = config_table[level].max_lazy;
        good_match = config_table[level].good_length;
        nice_match = config_table[level].nice_length;
        max_chain_length = config_table[level].max_chain;
        strstart = 0;
        block_start = 0;
        lookahead = 0;
        match_length = prev_length = MIN_MATCH - 1;
        match_available = 0;
        ins_h = 0;
    }
    function init_block() {
        let i;
        // Initialize the trees.
        for(i = 0; i < L_CODES; i++)dyn_ltree[i * 2] = 0;
        for(i = 0; i < D_CODES; i++)dyn_dtree[i * 2] = 0;
        for(i = 0; i < BL_CODES; i++)bl_tree[i * 2] = 0;
        dyn_ltree[END_BLOCK * 2] = 1;
        that.opt_len = that.static_len = 0;
        last_lit = matches = 0;
    }
    // Initialize the tree data structures for a new zlib stream.
    function tr_init() {
        l_desc.dyn_tree = dyn_ltree;
        l_desc.stat_desc = StaticTree.static_l_desc;
        d_desc.dyn_tree = dyn_dtree;
        d_desc.stat_desc = StaticTree.static_d_desc;
        bl_desc.dyn_tree = bl_tree;
        bl_desc.stat_desc = StaticTree.static_bl_desc;
        bi_buf = 0;
        bi_valid = 0;
        last_eob_len = 8; // enough lookahead for inflate
        // Initialize the first block of the first file:
        init_block();
    }
    // Restore the heap property by moving down the tree starting at node k,
    // exchanging a node with the smallest of its two sons if necessary,
    // stopping
    // when the heap property is re-established (each father smaller than its
    // two sons).
    that.pqdownheap = function(tree, k // node to move down
    ) {
        const heap = that.heap;
        const v = heap[k];
        let j = k << 1; // left son of k
        while(j <= that.heap_len){
            // Set j to the smallest of the two sons:
            if (j < that.heap_len && smaller(tree, heap[j + 1], heap[j], that.depth)) j++;
            // Exit if v is smaller than both sons
            if (smaller(tree, v, heap[j], that.depth)) break;
            // Exchange v with the smallest son
            heap[k] = heap[j];
            k = j;
            // And continue down the tree, setting j to the left son of k
            j <<= 1;
        }
        heap[k] = v;
    };
    // Scan a literal or distance tree to determine the frequencies of the codes
    // in the bit length tree.
    function scan_tree(tree, max_code // and its largest code of non zero frequency
    ) {
        let prevlen = -1; // last emitted length
        let curlen; // length of current code
        let nextlen = tree[1]; // length of next code
        let count = 0; // repeat count of the current code
        let max_count = 7; // max repeat count
        let min_count = 4; // min repeat count
        if (nextlen === 0) {
            max_count = 138;
            min_count = 3;
        }
        tree[(max_code + 1) * 2 + 1] = 0xffff; // guard
        for(let n = 0; n <= max_code; n++){
            curlen = nextlen;
            nextlen = tree[(n + 1) * 2 + 1];
            if (++count < max_count && curlen == nextlen) continue;
            else if (count < min_count) bl_tree[curlen * 2] += count;
            else if (curlen !== 0) {
                if (curlen != prevlen) bl_tree[curlen * 2]++;
                bl_tree[REP_3_6 * 2]++;
            } else if (count <= 10) bl_tree[REPZ_3_10 * 2]++;
            else bl_tree[REPZ_11_138 * 2]++;
            count = 0;
            prevlen = curlen;
            if (nextlen === 0) {
                max_count = 138;
                min_count = 3;
            } else if (curlen == nextlen) {
                max_count = 6;
                min_count = 3;
            } else {
                max_count = 7;
                min_count = 4;
            }
        }
    }
    // Construct the Huffman tree for the bit lengths and return the index in
    // bl_order of the last bit length code to send.
    function build_bl_tree() {
        let max_blindex; // index of last bit length code of non zero freq
        // Determine the bit length frequencies for literal and distance trees
        scan_tree(dyn_ltree, l_desc.max_code);
        scan_tree(dyn_dtree, d_desc.max_code);
        // Build the bit length tree:
        bl_desc.build_tree(that);
        // opt_len now includes the length of the tree representations, except
        // the lengths of the bit lengths codes and the 5+5+4 bits for the
        // counts.
        // Determine the number of bit length codes to send. The pkzip format
        // requires that at least 4 bit length codes be sent. (appnote.txt says
        // 3 but the actual value used is 4.)
        for(max_blindex = BL_CODES - 1; max_blindex >= 3; max_blindex--){
            if (bl_tree[Tree.bl_order[max_blindex] * 2 + 1] !== 0) break;
        }
        // Update opt_len to include the bit length tree and counts
        that.opt_len += 3 * (max_blindex + 1) + 5 + 5 + 4;
        return max_blindex;
    }
    // Output a byte on the stream.
    // IN assertion: there is enough room in pending_buf.
    function put_byte(p) {
        that.pending_buf[that.pending++] = p;
    }
    function put_short(w) {
        put_byte(w & 0xff);
        put_byte(w >>> 8 & 0xff);
    }
    function putShortMSB(b) {
        put_byte(b >> 8 & 0xff);
        put_byte(b & 255);
    }
    function send_bits(value, length) {
        let val;
        const len = length;
        if (bi_valid > Buf_size - len) {
            val = value;
            // bi_buf |= (val << bi_valid);
            bi_buf |= val << bi_valid & 0xffff;
            put_short(bi_buf);
            bi_buf = val >>> Buf_size - bi_valid;
            bi_valid += len - Buf_size;
        } else {
            // bi_buf |= (value) << bi_valid;
            bi_buf |= value << bi_valid & 0xffff;
            bi_valid += len;
        }
    }
    function send_code(c, tree) {
        const c2 = c * 2;
        send_bits(tree[c2] & 0xffff, tree[c2 + 1] & 0xffff);
    }
    // Send a literal or distance tree in compressed form, using the codes in
    // bl_tree.
    function send_tree(tree, max_code // and its largest code of non zero frequency
    ) {
        let n; // iterates over all tree elements
        let prevlen = -1; // last emitted length
        let curlen; // length of current code
        let nextlen = tree[1]; // length of next code
        let count = 0; // repeat count of the current code
        let max_count = 7; // max repeat count
        let min_count = 4; // min repeat count
        if (nextlen === 0) {
            max_count = 138;
            min_count = 3;
        }
        for(n = 0; n <= max_code; n++){
            curlen = nextlen;
            nextlen = tree[(n + 1) * 2 + 1];
            if (++count < max_count && curlen == nextlen) continue;
            else if (count < min_count) do send_code(curlen, bl_tree);
            while (--count !== 0);
            else if (curlen !== 0) {
                if (curlen != prevlen) {
                    send_code(curlen, bl_tree);
                    count--;
                }
                send_code(REP_3_6, bl_tree);
                send_bits(count - 3, 2);
            } else if (count <= 10) {
                send_code(REPZ_3_10, bl_tree);
                send_bits(count - 3, 3);
            } else {
                send_code(REPZ_11_138, bl_tree);
                send_bits(count - 11, 7);
            }
            count = 0;
            prevlen = curlen;
            if (nextlen === 0) {
                max_count = 138;
                min_count = 3;
            } else if (curlen == nextlen) {
                max_count = 6;
                min_count = 3;
            } else {
                max_count = 7;
                min_count = 4;
            }
        }
    }
    // Send the header for a block using dynamic Huffman trees: the counts, the
    // lengths of the bit length codes, the literal tree and the distance tree.
    // IN assertion: lcodes >= 257, dcodes >= 1, blcodes >= 4.
    function send_all_trees(lcodes, dcodes, blcodes) {
        let rank; // index in bl_order
        send_bits(lcodes - 257, 5); // not +255 as stated in appnote.txt
        send_bits(dcodes - 1, 5);
        send_bits(blcodes - 4, 4); // not -3 as stated in appnote.txt
        for(rank = 0; rank < blcodes; rank++)send_bits(bl_tree[Tree.bl_order[rank] * 2 + 1], 3);
        send_tree(dyn_ltree, lcodes - 1); // literal tree
        send_tree(dyn_dtree, dcodes - 1); // distance tree
    }
    // Flush the bit buffer, keeping at most 7 bits in it.
    function bi_flush() {
        if (bi_valid == 16) {
            put_short(bi_buf);
            bi_buf = 0;
            bi_valid = 0;
        } else if (bi_valid >= 8) {
            put_byte(bi_buf & 0xff);
            bi_buf >>>= 8;
            bi_valid -= 8;
        }
    }
    // Send one empty static block to give enough lookahead for inflate.
    // This takes 10 bits, of which 7 may remain in the bit buffer.
    // The current inflate code requires 9 bits of lookahead. If the
    // last two codes for the previous block (real code plus EOB) were coded
    // on 5 bits or less, inflate may have only 5+3 bits of lookahead to decode
    // the last real code. In this case we send two empty static blocks instead
    // of one. (There are no problems if the previous block is stored or fixed.)
    // To simplify the code, we assume the worst case of last real code encoded
    // on one bit only.
    function _tr_align() {
        send_bits(STATIC_TREES << 1, 3);
        send_code(END_BLOCK, StaticTree.static_ltree);
        bi_flush();
        // Of the 10 bits for the empty block, we have already sent
        // (10 - bi_valid) bits. The lookahead for the last real code (before
        // the EOB of the previous block) was thus at least one plus the length
        // of the EOB plus what we have just sent of the empty static block.
        if (1 + last_eob_len + 10 - bi_valid < 9) {
            send_bits(STATIC_TREES << 1, 3);
            send_code(END_BLOCK, StaticTree.static_ltree);
            bi_flush();
        }
        last_eob_len = 7;
    }
    // Save the match info and tally the frequency counts. Return true if
    // the current block must be flushed.
    function _tr_tally(dist, lc // match length-MIN_MATCH or unmatched char (if dist==0)
    ) {
        let out_length, in_length, dcode;
        that.dist_buf[last_lit] = dist;
        that.lc_buf[last_lit] = lc & 0xff;
        last_lit++;
        if (dist === 0) // lc is the unmatched char
        dyn_ltree[lc * 2]++;
        else {
            matches++;
            // Here, lc is the match length - MIN_MATCH
            dist--; // dist = match distance - 1
            dyn_ltree[(Tree._length_code[lc] + LITERALS + 1) * 2]++;
            dyn_dtree[Tree.d_code(dist) * 2]++;
        }
        if ((last_lit & 0x1fff) === 0 && level > 2) {
            // Compute an upper bound for the compressed length
            out_length = last_lit * 8;
            in_length = strstart - block_start;
            for(dcode = 0; dcode < D_CODES; dcode++)out_length += dyn_dtree[dcode * 2] * (5 + Tree.extra_dbits[dcode]);
            out_length >>>= 3;
            if (matches < Math.floor(last_lit / 2) && out_length < Math.floor(in_length / 2)) return true;
        }
        return last_lit == lit_bufsize - 1;
    // We avoid equality with lit_bufsize because of wraparound at 64K
    // on 16 bit machines and because stored blocks are restricted to
    // 64K-1 bytes.
    }
    // Send the block data compressed using the given Huffman trees
    function compress_block(ltree, dtree) {
        let dist; // distance of matched string
        let lc; // match length or unmatched char (if dist === 0)
        let lx = 0; // running index in dist_buf and lc_buf
        let code; // the code to send
        let extra; // number of extra bits to send
        if (last_lit !== 0) do {
            dist = that.dist_buf[lx];
            lc = that.lc_buf[lx];
            lx++;
            if (dist === 0) send_code(lc, ltree); // send a literal byte
            else {
                // Here, lc is the match length - MIN_MATCH
                code = Tree._length_code[lc];
                send_code(code + LITERALS + 1, ltree); // send the length
                // code
                extra = Tree.extra_lbits[code];
                if (extra !== 0) {
                    lc -= Tree.base_length[code];
                    send_bits(lc, extra); // send the extra length bits
                }
                dist--; // dist is now the match distance - 1
                code = Tree.d_code(dist);
                send_code(code, dtree); // send the distance code
                extra = Tree.extra_dbits[code];
                if (extra !== 0) {
                    dist -= Tree.base_dist[code];
                    send_bits(dist, extra); // send the extra distance bits
                }
            } // literal or match pair ?
        }while (lx < last_lit);
        send_code(END_BLOCK, ltree);
        last_eob_len = ltree[END_BLOCK * 2 + 1];
    }
    // Flush the bit buffer and align the output on a byte boundary
    function bi_windup() {
        if (bi_valid > 8) put_short(bi_buf);
        else if (bi_valid > 0) put_byte(bi_buf & 0xff);
        bi_buf = 0;
        bi_valid = 0;
    }
    // Copy a stored block, storing first the length and its
    // one's complement if requested.
    function copy_block(buf, len, header // true if block header must be written
    ) {
        bi_windup(); // align on byte boundary
        last_eob_len = 8; // enough lookahead for inflate
        if (header) {
            put_short(len);
            put_short(~len);
        }
        that.pending_buf.set(win.subarray(buf, buf + len), that.pending);
        that.pending += len;
    }
    // Send a stored block
    function _tr_stored_block(buf, stored_len, eof // true if this is the last block for a file
    ) {
        send_bits((STORED_BLOCK << 1) + (eof ? 1 : 0), 3); // send block type
        copy_block(buf, stored_len, true); // with header
    }
    // Determine the best encoding for the current block: dynamic trees, static
    // trees or store, and output the encoded block to the zip file.
    function _tr_flush_block(buf, stored_len, eof // true if this is the last block for a file
    ) {
        let opt_lenb, static_lenb; // opt_len and static_len in bytes
        let max_blindex = 0; // index of last bit length code of non zero freq
        // Build the Huffman trees unless a stored block is forced
        if (level > 0) {
            // Construct the literal and distance trees
            l_desc.build_tree(that);
            d_desc.build_tree(that);
            // At this point, opt_len and static_len are the total bit lengths
            // of
            // the compressed block data, excluding the tree representations.
            // Build the bit length tree for the above two trees, and get the
            // index
            // in bl_order of the last bit length code to send.
            max_blindex = build_bl_tree();
            // Determine the best encoding. Compute first the block length in
            // bytes
            opt_lenb = that.opt_len + 3 + 7 >>> 3;
            static_lenb = that.static_len + 3 + 7 >>> 3;
            if (static_lenb <= opt_lenb) opt_lenb = static_lenb;
        } else opt_lenb = static_lenb = stored_len + 5; // force a stored block
        if (stored_len + 4 <= opt_lenb && buf != -1) // 4: two words for the lengths
        // The test buf != NULL is only necessary if LIT_BUFSIZE > WSIZE.
        // Otherwise we can't have processed more than WSIZE input bytes
        // since
        // the last block flush, because compression would have been
        // successful. If LIT_BUFSIZE <= WSIZE, it is never too late to
        // transform a block into a stored block.
        _tr_stored_block(buf, stored_len, eof);
        else if (static_lenb == opt_lenb) {
            send_bits((STATIC_TREES << 1) + (eof ? 1 : 0), 3);
            compress_block(StaticTree.static_ltree, StaticTree.static_dtree);
        } else {
            send_bits((DYN_TREES << 1) + (eof ? 1 : 0), 3);
            send_all_trees(l_desc.max_code + 1, d_desc.max_code + 1, max_blindex + 1);
            compress_block(dyn_ltree, dyn_dtree);
        }
        // The above check is made mod 2^32, for files larger than 512 MB
        // and uLong implemented on 32 bits.
        init_block();
        if (eof) bi_windup();
    }
    function flush_block_only(eof) {
        _tr_flush_block(block_start >= 0 ? block_start : -1, strstart - block_start, eof);
        block_start = strstart;
        strm.flush_pending();
    }
    // Fill the win when the lookahead becomes insufficient.
    // Updates strstart and lookahead.
    //
    // IN assertion: lookahead < MIN_LOOKAHEAD
    // OUT assertions: strstart <= window_size-MIN_LOOKAHEAD
    // At least one byte has been read, or avail_in === 0; reads are
    // performed for at least two bytes (required for the zip translate_eol
    // option -- not supported here).
    function fill_window() {
        let n, m;
        let p;
        let more; // Amount of free space at the end of the win.
        do {
            more = window_size - lookahead - strstart;
            // Deal with !@#$% 64K limit:
            if (more === 0 && strstart === 0 && lookahead === 0) more = w_size;
            else if (more == -1) // Very unlikely, but possible on 16 bit machine if strstart ==
            // 0
            // and lookahead == 1 (input done one byte at time)
            more--;
            else if (strstart >= w_size + w_size - MIN_LOOKAHEAD) {
                win.set(win.subarray(w_size, w_size + w_size), 0);
                match_start -= w_size;
                strstart -= w_size; // we now have strstart >= MAX_DIST
                block_start -= w_size;
                // Slide the hash table (could be avoided with 32 bit values
                // at the expense of memory usage). We slide even when level ==
                // 0
                // to keep the hash table consistent if we switch back to level
                // > 0
                // later. (Using level 0 permanently is not an optimal usage of
                // zlib, so we don't care about this pathological case.)
                n = hash_size;
                p = n;
                do {
                    m = head[--p] & 0xffff;
                    head[p] = m >= w_size ? m - w_size : 0;
                }while (--n !== 0);
                n = w_size;
                p = n;
                do {
                    m = prev[--p] & 0xffff;
                    prev[p] = m >= w_size ? m - w_size : 0;
                // If n is not on any hash chain, prev[n] is garbage but
                // its value will never be used.
                }while (--n !== 0);
                more += w_size;
            }
            if (strm.avail_in === 0) return;
            // If there was no sliding:
            // strstart <= WSIZE+MAX_DIST-1 && lookahead <= MIN_LOOKAHEAD - 1 &&
            // more == window_size - lookahead - strstart
            // => more >= window_size - (MIN_LOOKAHEAD-1 + WSIZE + MAX_DIST-1)
            // => more >= window_size - 2*WSIZE + 2
            // In the BIG_MEM or MMAP case (not yet supported),
            // window_size == input_size + MIN_LOOKAHEAD &&
            // strstart + s->lookahead <= input_size => more >= MIN_LOOKAHEAD.
            // Otherwise, window_size == 2*WSIZE so more >= 2.
            // If there was sliding, more >= WSIZE. So in all cases, more >= 2.
            n = strm.read_buf(win, strstart + lookahead, more);
            lookahead += n;
            // Initialize the hash value now that we have some input:
            if (lookahead >= MIN_MATCH) {
                ins_h = win[strstart] & 0xff;
                ins_h = (ins_h << hash_shift ^ win[strstart + 1] & 0xff) & hash_mask;
            }
        // If the whole input has less than MIN_MATCH bytes, ins_h is
        // garbage,
        // but this is not important since only literal bytes will be
        // emitted.
        }while (lookahead < MIN_LOOKAHEAD && strm.avail_in !== 0);
    }
    // Copy without compression as much as possible from the input stream,
    // return
    // the current block state.
    // This function does not insert new strings in the dictionary since
    // uncompressible data is probably not useful. This function is used
    // only for the level=0 compression option.
    // NOTE: this function should be optimized to avoid extra copying from
    // win to pending_buf.
    function deflate_stored(flush) {
        // Stored blocks are limited to 0xffff bytes, pending_buf is limited
        // to pending_buf_size, and each stored block has a 5 byte header:
        let max_block_size = 0xffff;
        let max_start;
        if (max_block_size > pending_buf_size - 5) max_block_size = pending_buf_size - 5;
        // Copy as much as possible from input to output:
        // eslint-disable-next-line no-constant-condition
        while(true){
            // Fill the win as much as possible:
            if (lookahead <= 1) {
                fill_window();
                if (lookahead === 0 && flush == Z_NO_FLUSH) return NeedMore;
                if (lookahead === 0) break; // flush the current block
            }
            strstart += lookahead;
            lookahead = 0;
            // Emit a stored block if pending_buf will be full:
            max_start = block_start + max_block_size;
            if (strstart === 0 || strstart >= max_start) {
                // strstart === 0 is possible when wraparound on 16-bit machine
                lookahead = strstart - max_start;
                strstart = max_start;
                flush_block_only(false);
                if (strm.avail_out === 0) return NeedMore;
            }
            // Flush if we may have to slide, otherwise block_start may become
            // negative and the data will be gone:
            if (strstart - block_start >= w_size - MIN_LOOKAHEAD) {
                flush_block_only(false);
                if (strm.avail_out === 0) return NeedMore;
            }
        }
        flush_block_only(flush == Z_FINISH);
        if (strm.avail_out === 0) return flush == Z_FINISH ? FinishStarted : NeedMore;
        return flush == Z_FINISH ? FinishDone : BlockDone;
    }
    function longest_match(cur_match) {
        let chain_length = max_chain_length; // max hash chain length
        let scan = strstart; // current string
        let match; // matched string
        let len; // length of current match
        let best_len = prev_length; // best match length so far
        const limit = strstart > w_size - MIN_LOOKAHEAD ? strstart - (w_size - MIN_LOOKAHEAD) : 0;
        let _nice_match = nice_match;
        // Stop when cur_match becomes <= limit. To simplify the code,
        // we prevent matches with the string of win index 0.
        const wmask = w_mask;
        const strend = strstart + MAX_MATCH;
        let scan_end1 = win[scan + best_len - 1];
        let scan_end = win[scan + best_len];
        // The code is optimized for HASH_BITS >= 8 and MAX_MATCH-2 multiple of
        // 16.
        // It is easy to get rid of this optimization if necessary.
        // Do not waste too much time if we already have a good match:
        if (prev_length >= good_match) chain_length >>= 2;
        // Do not look for matches beyond the end of the input. This is
        // necessary
        // to make deflate deterministic.
        if (_nice_match > lookahead) _nice_match = lookahead;
        do {
            match = cur_match;
            // Skip to next match if the match length cannot increase
            // or if the match length is less than 2:
            if (win[match + best_len] != scan_end || win[match + best_len - 1] != scan_end1 || win[match] != win[scan] || win[++match] != win[scan + 1]) continue;
            // The check at best_len-1 can be removed because it will be made
            // again later. (This heuristic is not always a win.)
            // It is not necessary to compare scan[2] and match[2] since they
            // are always equal when the other bytes match, given that
            // the hash keys are equal and that HASH_BITS >= 8.
            scan += 2;
            match++;
            // We check for insufficient lookahead only every 8th comparison;
            // the 256th check will be made at strstart+258.
            // eslint-disable-next-line no-empty
            do ;
            while (win[++scan] == win[++match] && win[++scan] == win[++match] && win[++scan] == win[++match] && win[++scan] == win[++match] && win[++scan] == win[++match] && win[++scan] == win[++match] && win[++scan] == win[++match] && win[++scan] == win[++match] && scan < strend);
            len = MAX_MATCH - (strend - scan);
            scan = strend - MAX_MATCH;
            if (len > best_len) {
                match_start = cur_match;
                best_len = len;
                if (len >= _nice_match) break;
                scan_end1 = win[scan + best_len - 1];
                scan_end = win[scan + best_len];
            }
        }while ((cur_match = prev[cur_match & wmask] & 0xffff) > limit && --chain_length !== 0);
        if (best_len <= lookahead) return best_len;
        return lookahead;
    }
    // Compress as much as possible from the input stream, return the current
    // block state.
    // This function does not perform lazy evaluation of matches and inserts
    // new strings in the dictionary only for unmatched strings or for short
    // matches. It is used only for the fast compression options.
    function deflate_fast(flush) {
        // short hash_head = 0; // head of the hash chain
        let hash_head = 0; // head of the hash chain
        let bflush; // set if current block must be flushed
        // eslint-disable-next-line no-constant-condition
        while(true){
            // Make sure that we always have enough lookahead, except
            // at the end of the input file. We need MAX_MATCH bytes
            // for the next match, plus MIN_MATCH bytes to insert the
            // string following the next match.
            if (lookahead < MIN_LOOKAHEAD) {
                fill_window();
                if (lookahead < MIN_LOOKAHEAD && flush == Z_NO_FLUSH) return NeedMore;
                if (lookahead === 0) break; // flush the current block
            }
            // Insert the string win[strstart .. strstart+2] in the
            // dictionary, and set hash_head to the head of the hash chain:
            if (lookahead >= MIN_MATCH) {
                ins_h = (ins_h << hash_shift ^ win[strstart + (MIN_MATCH - 1)] & 0xff) & hash_mask;
                // prev[strstart&w_mask]=hash_head=head[ins_h];
                hash_head = head[ins_h] & 0xffff;
                prev[strstart & w_mask] = head[ins_h];
                head[ins_h] = strstart;
            }
            // Find the longest match, discarding those <= prev_length.
            // At this point we have always match_length < MIN_MATCH
            if (hash_head !== 0 && (strstart - hash_head & 0xffff) <= w_size - MIN_LOOKAHEAD) // To simplify the code, we prevent matches with the string
            // of win index 0 (in particular we have to avoid a match
            // of the string with itself at the start of the input file).
            {
                if (strategy != Z_HUFFMAN_ONLY) match_length = longest_match(hash_head);
            }
            if (match_length >= MIN_MATCH) {
                // check_match(strstart, match_start, match_length);
                bflush = _tr_tally(strstart - match_start, match_length - MIN_MATCH);
                lookahead -= match_length;
                // Insert new strings in the hash table only if the match length
                // is not too large. This saves time but degrades compression.
                if (match_length <= max_lazy_match && lookahead >= MIN_MATCH) {
                    match_length--; // string at strstart already in hash table
                    do {
                        strstart++;
                        ins_h = (ins_h << hash_shift ^ win[strstart + (MIN_MATCH - 1)] & 0xff) & hash_mask;
                        // prev[strstart&w_mask]=hash_head=head[ins_h];
                        hash_head = head[ins_h] & 0xffff;
                        prev[strstart & w_mask] = head[ins_h];
                        head[ins_h] = strstart;
                    // strstart never exceeds WSIZE-MAX_MATCH, so there are
                    // always MIN_MATCH bytes ahead.
                    }while (--match_length !== 0);
                    strstart++;
                } else {
                    strstart += match_length;
                    match_length = 0;
                    ins_h = win[strstart] & 0xff;
                    ins_h = (ins_h << hash_shift ^ win[strstart + 1] & 0xff) & hash_mask;
                // If lookahead < MIN_MATCH, ins_h is garbage, but it does
                // not
                // matter since it will be recomputed at next deflate call.
                }
            } else {
                // No match, output a literal byte
                bflush = _tr_tally(0, win[strstart] & 0xff);
                lookahead--;
                strstart++;
            }
            if (bflush) {
                flush_block_only(false);
                if (strm.avail_out === 0) return NeedMore;
            }
        }
        flush_block_only(flush == Z_FINISH);
        if (strm.avail_out === 0) {
            if (flush == Z_FINISH) return FinishStarted;
            else return NeedMore;
        }
        return flush == Z_FINISH ? FinishDone : BlockDone;
    }
    // Same as above, but achieves better compression. We use a lazy
    // evaluation for matches: a match is finally adopted only if there is
    // no better match at the next win position.
    function deflate_slow(flush) {
        // short hash_head = 0; // head of hash chain
        let hash_head = 0; // head of hash chain
        let bflush; // set if current block must be flushed
        let max_insert;
        // Process the input block.
        // eslint-disable-next-line no-constant-condition
        while(true){
            // Make sure that we always have enough lookahead, except
            // at the end of the input file. We need MAX_MATCH bytes
            // for the next match, plus MIN_MATCH bytes to insert the
            // string following the next match.
            if (lookahead < MIN_LOOKAHEAD) {
                fill_window();
                if (lookahead < MIN_LOOKAHEAD && flush == Z_NO_FLUSH) return NeedMore;
                if (lookahead === 0) break; // flush the current block
            }
            // Insert the string win[strstart .. strstart+2] in the
            // dictionary, and set hash_head to the head of the hash chain:
            if (lookahead >= MIN_MATCH) {
                ins_h = (ins_h << hash_shift ^ win[strstart + (MIN_MATCH - 1)] & 0xff) & hash_mask;
                // prev[strstart&w_mask]=hash_head=head[ins_h];
                hash_head = head[ins_h] & 0xffff;
                prev[strstart & w_mask] = head[ins_h];
                head[ins_h] = strstart;
            }
            // Find the longest match, discarding those <= prev_length.
            prev_length = match_length;
            prev_match = match_start;
            match_length = MIN_MATCH - 1;
            if (hash_head !== 0 && prev_length < max_lazy_match && (strstart - hash_head & 0xffff) <= w_size - MIN_LOOKAHEAD) {
                // To simplify the code, we prevent matches with the string
                // of win index 0 (in particular we have to avoid a match
                // of the string with itself at the start of the input file).
                if (strategy != Z_HUFFMAN_ONLY) match_length = longest_match(hash_head);
                // longest_match() sets match_start
                if (match_length <= 5 && (strategy == Z_FILTERED || match_length == MIN_MATCH && strstart - match_start > 4096)) // If prev_match is also MIN_MATCH, match_start is garbage
                // but we will ignore the current match anyway.
                match_length = MIN_MATCH - 1;
            }
            // If there was a match at the previous step and the current
            // match is not better, output the previous match:
            if (prev_length >= MIN_MATCH && match_length <= prev_length) {
                max_insert = strstart + lookahead - MIN_MATCH;
                // Do not insert strings in hash table beyond this.
                // check_match(strstart-1, prev_match, prev_length);
                bflush = _tr_tally(strstart - 1 - prev_match, prev_length - MIN_MATCH);
                // Insert in hash table all strings up to the end of the match.
                // strstart-1 and strstart are already inserted. If there is not
                // enough lookahead, the last two strings are not inserted in
                // the hash table.
                lookahead -= prev_length - 1;
                prev_length -= 2;
                do if (++strstart <= max_insert) {
                    ins_h = (ins_h << hash_shift ^ win[strstart + (MIN_MATCH - 1)] & 0xff) & hash_mask;
                    // prev[strstart&w_mask]=hash_head=head[ins_h];
                    hash_head = head[ins_h] & 0xffff;
                    prev[strstart & w_mask] = head[ins_h];
                    head[ins_h] = strstart;
                }
                while (--prev_length !== 0);
                match_available = 0;
                match_length = MIN_MATCH - 1;
                strstart++;
                if (bflush) {
                    flush_block_only(false);
                    if (strm.avail_out === 0) return NeedMore;
                }
            } else if (match_available !== 0) {
                // If there was no match at the previous position, output a
                // single literal. If there was a match but the current match
                // is longer, truncate the previous match to a single literal.
                bflush = _tr_tally(0, win[strstart - 1] & 0xff);
                if (bflush) flush_block_only(false);
                strstart++;
                lookahead--;
                if (strm.avail_out === 0) return NeedMore;
            } else {
                // There is no previous match to compare with, wait for
                // the next step to decide.
                match_available = 1;
                strstart++;
                lookahead--;
            }
        }
        if (match_available !== 0) {
            bflush = _tr_tally(0, win[strstart - 1] & 0xff);
            match_available = 0;
        }
        flush_block_only(flush == Z_FINISH);
        if (strm.avail_out === 0) {
            if (flush == Z_FINISH) return FinishStarted;
            else return NeedMore;
        }
        return flush == Z_FINISH ? FinishDone : BlockDone;
    }
    function deflateReset(strm) {
        strm.total_in = strm.total_out = 0;
        strm.msg = null; //
        that.pending = 0;
        that.pending_out = 0;
        status = BUSY_STATE;
        last_flush = Z_NO_FLUSH;
        tr_init();
        lm_init();
        return Z_OK;
    }
    that.deflateInit = function(strm, _level, bits, _method, memLevel, _strategy) {
        if (!_method) _method = Z_DEFLATED;
        if (!memLevel) memLevel = DEF_MEM_LEVEL;
        if (!_strategy) _strategy = Z_DEFAULT_STRATEGY;
        // byte[] my_version=ZLIB_VERSION;
        //
        // if (!version || version[0] != my_version[0]
        // || stream_size != sizeof(z_stream)) {
        // return Z_VERSION_ERROR;
        // }
        strm.msg = null;
        if (_level == Z_DEFAULT_COMPRESSION) _level = 6;
        if (memLevel < 1 || memLevel > MAX_MEM_LEVEL || _method != Z_DEFLATED || bits < 9 || bits > 15 || _level < 0 || _level > 9 || _strategy < 0 || _strategy > Z_HUFFMAN_ONLY) return Z_STREAM_ERROR;
        strm.dstate = that;
        w_bits = bits;
        w_size = 1 << w_bits;
        w_mask = w_size - 1;
        hash_bits = memLevel + 7;
        hash_size = 1 << hash_bits;
        hash_mask = hash_size - 1;
        hash_shift = Math.floor((hash_bits + MIN_MATCH - 1) / MIN_MATCH);
        win = new Uint8Array(w_size * 2);
        prev = [];
        head = [];
        lit_bufsize = 1 << memLevel + 6; // 16K elements by default
        that.pending_buf = new Uint8Array(lit_bufsize * 4);
        pending_buf_size = lit_bufsize * 4;
        that.dist_buf = new Uint16Array(lit_bufsize);
        that.lc_buf = new Uint8Array(lit_bufsize);
        level = _level;
        strategy = _strategy;
        return deflateReset(strm);
    };
    that.deflateEnd = function() {
        if (status != INIT_STATE && status != BUSY_STATE && status != FINISH_STATE) return Z_STREAM_ERROR;
        // Deallocate in reverse order of allocations:
        that.lc_buf = null;
        that.dist_buf = null;
        that.pending_buf = null;
        head = null;
        prev = null;
        win = null;
        // free
        that.dstate = null;
        return status == BUSY_STATE ? Z_DATA_ERROR : Z_OK;
    };
    that.deflateParams = function(strm, _level, _strategy) {
        let err = Z_OK;
        if (_level == Z_DEFAULT_COMPRESSION) _level = 6;
        if (_level < 0 || _level > 9 || _strategy < 0 || _strategy > Z_HUFFMAN_ONLY) return Z_STREAM_ERROR;
        if (config_table[level].func != config_table[_level].func && strm.total_in !== 0) // Flush the last buffer:
        err = strm.deflate(Z_PARTIAL_FLUSH);
        if (level != _level) {
            level = _level;
            max_lazy_match = config_table[level].max_lazy;
            good_match = config_table[level].good_length;
            nice_match = config_table[level].nice_length;
            max_chain_length = config_table[level].max_chain;
        }
        strategy = _strategy;
        return err;
    };
    that.deflateSetDictionary = function(_strm, dictionary, dictLength) {
        let length = dictLength;
        let n, index = 0;
        if (!dictionary || status != INIT_STATE) return Z_STREAM_ERROR;
        if (length < MIN_MATCH) return Z_OK;
        if (length > w_size - MIN_LOOKAHEAD) {
            length = w_size - MIN_LOOKAHEAD;
            index = dictLength - length; // use the tail of the dictionary
        }
        win.set(dictionary.subarray(index, index + length), 0);
        strstart = length;
        block_start = length;
        // Insert all strings in the hash table (except for the last two bytes).
        // s->lookahead stays null, so s->ins_h will be recomputed at the next
        // call of fill_window.
        ins_h = win[0] & 0xff;
        ins_h = (ins_h << hash_shift ^ win[1] & 0xff) & hash_mask;
        for(n = 0; n <= length - MIN_MATCH; n++){
            ins_h = (ins_h << hash_shift ^ win[n + (MIN_MATCH - 1)] & 0xff) & hash_mask;
            prev[n & w_mask] = head[ins_h];
            head[ins_h] = n;
        }
        return Z_OK;
    };
    that.deflate = function(_strm, flush) {
        let i, header, level_flags, old_flush, bstate;
        if (flush > Z_FINISH || flush < 0) return Z_STREAM_ERROR;
        if (!_strm.next_out || !_strm.next_in && _strm.avail_in !== 0 || status == FINISH_STATE && flush != Z_FINISH) {
            _strm.msg = z_errmsg[Z_NEED_DICT - Z_STREAM_ERROR];
            return Z_STREAM_ERROR;
        }
        if (_strm.avail_out === 0) {
            _strm.msg = z_errmsg[Z_NEED_DICT - Z_BUF_ERROR];
            return Z_BUF_ERROR;
        }
        strm = _strm; // just in case
        old_flush = last_flush;
        last_flush = flush;
        // Write the zlib header
        if (status == INIT_STATE) {
            header = Z_DEFLATED + (w_bits - 8 << 4) << 8;
            level_flags = (level - 1 & 0xff) >> 1;
            if (level_flags > 3) level_flags = 3;
            header |= level_flags << 6;
            if (strstart !== 0) header |= PRESET_DICT;
            header += 31 - header % 31;
            status = BUSY_STATE;
            putShortMSB(header);
        }
        // Flush as much pending output as possible
        if (that.pending !== 0) {
            strm.flush_pending();
            if (strm.avail_out === 0) {
                // console.log(" avail_out==0");
                // Since avail_out is 0, deflate will be called again with
                // more output space, but possibly with both pending and
                // avail_in equal to zero. There won't be anything to do,
                // but this is not an error situation so make sure we
                // return OK instead of BUF_ERROR at next call of deflate:
                last_flush = -1;
                return Z_OK;
            }
        // Make sure there is something to do and avoid duplicate
        // consecutive
        // flushes. For repeated and useless calls with Z_FINISH, we keep
        // returning Z_STREAM_END instead of Z_BUFF_ERROR.
        } else if (strm.avail_in === 0 && flush <= old_flush && flush != Z_FINISH) {
            strm.msg = z_errmsg[Z_NEED_DICT - Z_BUF_ERROR];
            return Z_BUF_ERROR;
        }
        // User must not provide more input after the first FINISH:
        if (status == FINISH_STATE && strm.avail_in !== 0) {
            _strm.msg = z_errmsg[Z_NEED_DICT - Z_BUF_ERROR];
            return Z_BUF_ERROR;
        }
        // Start a new block or continue the current one.
        if (strm.avail_in !== 0 || lookahead !== 0 || flush != Z_NO_FLUSH && status != FINISH_STATE) {
            bstate = -1;
            switch(config_table[level].func){
                case STORED:
                    bstate = deflate_stored(flush);
                    break;
                case FAST:
                    bstate = deflate_fast(flush);
                    break;
                case SLOW:
                    bstate = deflate_slow(flush);
                    break;
                default:
            }
            if (bstate == FinishStarted || bstate == FinishDone) status = FINISH_STATE;
            if (bstate == NeedMore || bstate == FinishStarted) {
                if (strm.avail_out === 0) last_flush = -1; // avoid BUF_ERROR next call, see above
                return Z_OK;
            // If flush != Z_NO_FLUSH && avail_out === 0, the next call
            // of deflate should use the same flush parameter to make sure
            // that the flush is complete. So we don't have to output an
            // empty block here, this will be done at next call. This also
            // ensures that for a very small output buffer, we emit at most
            // one empty block.
            }
            if (bstate == BlockDone) {
                if (flush == Z_PARTIAL_FLUSH) _tr_align();
                else {
                    _tr_stored_block(0, 0, false);
                    // For a full flush, this empty block will be recognized
                    // as a special marker by inflate_sync().
                    if (flush == Z_FULL_FLUSH) // state.head[s.hash_size-1]=0;
                    for(i = 0; i < hash_size /*-1*/ ; i++)// forget history
                    head[i] = 0;
                }
                strm.flush_pending();
                if (strm.avail_out === 0) {
                    last_flush = -1; // avoid BUF_ERROR at next call, see above
                    return Z_OK;
                }
            }
        }
        if (flush != Z_FINISH) return Z_OK;
        return Z_STREAM_END;
    };
}
// ZStream
function ZStream() {
    const that = this;
    that.next_in_index = 0;
    that.next_out_index = 0;
    // that.next_in; // next input byte
    that.avail_in = 0; // number of bytes available at next_in
    that.total_in = 0; // total nb of input bytes read so far
    // that.next_out; // next output byte should be put there
    that.avail_out = 0; // remaining free space at next_out
    that.total_out = 0; // total nb of bytes output so far
// that.msg;
// that.dstate;
}
ZStream.prototype = {
    deflateInit (level, bits) {
        const that = this;
        that.dstate = new Deflate();
        if (!bits) bits = MAX_BITS;
        return that.dstate.deflateInit(that, level, bits);
    },
    deflate (flush) {
        const that = this;
        if (!that.dstate) return Z_STREAM_ERROR;
        return that.dstate.deflate(that, flush);
    },
    deflateEnd () {
        const that = this;
        if (!that.dstate) return Z_STREAM_ERROR;
        const ret = that.dstate.deflateEnd();
        that.dstate = null;
        return ret;
    },
    deflateParams (level, strategy) {
        const that = this;
        if (!that.dstate) return Z_STREAM_ERROR;
        return that.dstate.deflateParams(that, level, strategy);
    },
    deflateSetDictionary (dictionary, dictLength) {
        const that = this;
        if (!that.dstate) return Z_STREAM_ERROR;
        return that.dstate.deflateSetDictionary(that, dictionary, dictLength);
    },
    // Read a new buffer from the current input stream, update the
    // total number of bytes read. All deflate() input goes through
    // this function so some applications may wish to modify it to avoid
    // allocating a large strm->next_in buffer and copying from it.
    // (See also flush_pending()).
    read_buf (buf, start, size) {
        const that = this;
        let len = that.avail_in;
        if (len > size) len = size;
        if (len === 0) return 0;
        that.avail_in -= len;
        buf.set(that.next_in.subarray(that.next_in_index, that.next_in_index + len), start);
        that.next_in_index += len;
        that.total_in += len;
        return len;
    },
    // Flush as much pending output as possible. All deflate() output goes
    // through this function so some applications may wish to modify it
    // to avoid allocating a large strm->next_out buffer and copying into it.
    // (See also read_buf()).
    flush_pending () {
        const that = this;
        let len = that.dstate.pending;
        if (len > that.avail_out) len = that.avail_out;
        if (len === 0) return;
        // if (that.dstate.pending_buf.length <= that.dstate.pending_out || that.next_out.length <= that.next_out_index
        // || that.dstate.pending_buf.length < (that.dstate.pending_out + len) || that.next_out.length < (that.next_out_index +
        // len)) {
        // console.log(that.dstate.pending_buf.length + ", " + that.dstate.pending_out + ", " + that.next_out.length + ", " +
        // that.next_out_index + ", " + len);
        // console.log("avail_out=" + that.avail_out);
        // }
        that.next_out.set(that.dstate.pending_buf.subarray(that.dstate.pending_out, that.dstate.pending_out + len), that.next_out_index);
        that.next_out_index += len;
        that.dstate.pending_out += len;
        that.total_out += len;
        that.avail_out -= len;
        that.dstate.pending -= len;
        if (that.dstate.pending === 0) that.dstate.pending_out = 0;
    }
};
// Deflate
function ZipDeflate(options) {
    const that = this;
    const z = new ZStream();
    const bufsize = getMaximumCompressedSize(options && options.chunkSize ? options.chunkSize : 65536);
    const flush = Z_NO_FLUSH;
    const buf = new Uint8Array(bufsize);
    let level = options ? options.level : Z_DEFAULT_COMPRESSION;
    if (typeof level == "undefined") level = Z_DEFAULT_COMPRESSION;
    z.deflateInit(level);
    z.next_out = buf;
    that.append = function(data, onprogress) {
        let err, array, lastIndex = 0, bufferIndex = 0, bufferSize = 0;
        const buffers = [];
        if (!data.length) return;
        z.next_in_index = 0;
        z.next_in = data;
        z.avail_in = data.length;
        do {
            z.next_out_index = 0;
            z.avail_out = bufsize;
            err = z.deflate(flush);
            if (err != Z_OK) throw new Error("deflating: " + z.msg);
            if (z.next_out_index) {
                if (z.next_out_index == bufsize) buffers.push(new Uint8Array(buf));
                else buffers.push(buf.slice(0, z.next_out_index));
            }
            bufferSize += z.next_out_index;
            if (onprogress && z.next_in_index > 0 && z.next_in_index != lastIndex) {
                onprogress(z.next_in_index);
                lastIndex = z.next_in_index;
            }
        }while (z.avail_in > 0 || z.avail_out === 0);
        if (buffers.length > 1) {
            array = new Uint8Array(bufferSize);
            buffers.forEach(function(chunk) {
                array.set(chunk, bufferIndex);
                bufferIndex += chunk.length;
            });
        } else array = buffers[0] || new Uint8Array();
        return array;
    };
    that.flush = function() {
        let err, array, bufferIndex = 0, bufferSize = 0;
        const buffers = [];
        do {
            z.next_out_index = 0;
            z.avail_out = bufsize;
            err = z.deflate(Z_FINISH);
            if (err != Z_STREAM_END && err != Z_OK) throw new Error("deflating: " + z.msg);
            if (bufsize - z.avail_out > 0) buffers.push(buf.slice(0, z.next_out_index));
            bufferSize += z.next_out_index;
        }while (z.avail_in > 0 || z.avail_out === 0);
        z.deflateEnd();
        array = new Uint8Array(bufferSize);
        buffers.forEach(function(chunk) {
            array.set(chunk, bufferIndex);
            bufferIndex += chunk.length;
        });
        return array;
    };
}
function getMaximumCompressedSize(uncompressedSize) {
    return uncompressedSize + 5 * (Math.floor(uncompressedSize / 16383) + 1);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"i2w9C":[function(require,module,exports) {
/*
 Copyright (c) 2022 Gildas Lormeau. All rights reserved.

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions are met:

 1. Redistributions of source code must retain the above copyright notice,
 this list of conditions and the following disclaimer.

 2. Redistributions in binary form must reproduce the above copyright 
 notice, this list of conditions and the following disclaimer in 
 the documentation and/or other materials provided with the distribution.

 3. The names of the authors may not be used to endorse or promote products
 derived from this software without specific prior written permission.

 THIS SOFTWARE IS PROVIDED ''AS IS'' AND ANY EXPRESSED OR IMPLIED WARRANTIES,
 INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
 FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL JCRAFT,
 INC. OR ANY CONTRIBUTORS TO THIS SOFTWARE BE LIABLE FOR ANY DIRECT, INDIRECT,
 INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA,
 OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
 LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
 EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */ /*
 * This program is based on JZlib 1.0.2 ymnk, JCraft,Inc.
 * JZlib is based on zlib-1.1.3, so all credit should go authors
 * Jean-loup Gailly(jloup@gzip.org) and Mark Adler(madler@alumni.caltech.edu)
 * and contributors of zlib.
 */ // deno-lint-ignore-file no-this-alias prefer-const
// Global
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Inflate", ()=>ZipInflate);
const MAX_BITS = 15;
const Z_OK = 0;
const Z_STREAM_END = 1;
const Z_NEED_DICT = 2;
const Z_STREAM_ERROR = -2;
const Z_DATA_ERROR = -3;
const Z_MEM_ERROR = -4;
const Z_BUF_ERROR = -5;
const inflate_mask = [
    0x00000000,
    0x00000001,
    0x00000003,
    0x00000007,
    0x0000000f,
    0x0000001f,
    0x0000003f,
    0x0000007f,
    0x000000ff,
    0x000001ff,
    0x000003ff,
    0x000007ff,
    0x00000fff,
    0x00001fff,
    0x00003fff,
    0x00007fff,
    0x0000ffff
];
const MANY = 1440;
// JZlib version : "1.0.2"
const Z_NO_FLUSH = 0;
const Z_FINISH = 4;
// InfTree
const fixed_bl = 9;
const fixed_bd = 5;
const fixed_tl = [
    96,
    7,
    256,
    0,
    8,
    80,
    0,
    8,
    16,
    84,
    8,
    115,
    82,
    7,
    31,
    0,
    8,
    112,
    0,
    8,
    48,
    0,
    9,
    192,
    80,
    7,
    10,
    0,
    8,
    96,
    0,
    8,
    32,
    0,
    9,
    160,
    0,
    8,
    0,
    0,
    8,
    128,
    0,
    8,
    64,
    0,
    9,
    224,
    80,
    7,
    6,
    0,
    8,
    88,
    0,
    8,
    24,
    0,
    9,
    144,
    83,
    7,
    59,
    0,
    8,
    120,
    0,
    8,
    56,
    0,
    9,
    208,
    81,
    7,
    17,
    0,
    8,
    104,
    0,
    8,
    40,
    0,
    9,
    176,
    0,
    8,
    8,
    0,
    8,
    136,
    0,
    8,
    72,
    0,
    9,
    240,
    80,
    7,
    4,
    0,
    8,
    84,
    0,
    8,
    20,
    85,
    8,
    227,
    83,
    7,
    43,
    0,
    8,
    116,
    0,
    8,
    52,
    0,
    9,
    200,
    81,
    7,
    13,
    0,
    8,
    100,
    0,
    8,
    36,
    0,
    9,
    168,
    0,
    8,
    4,
    0,
    8,
    132,
    0,
    8,
    68,
    0,
    9,
    232,
    80,
    7,
    8,
    0,
    8,
    92,
    0,
    8,
    28,
    0,
    9,
    152,
    84,
    7,
    83,
    0,
    8,
    124,
    0,
    8,
    60,
    0,
    9,
    216,
    82,
    7,
    23,
    0,
    8,
    108,
    0,
    8,
    44,
    0,
    9,
    184,
    0,
    8,
    12,
    0,
    8,
    140,
    0,
    8,
    76,
    0,
    9,
    248,
    80,
    7,
    3,
    0,
    8,
    82,
    0,
    8,
    18,
    85,
    8,
    163,
    83,
    7,
    35,
    0,
    8,
    114,
    0,
    8,
    50,
    0,
    9,
    196,
    81,
    7,
    11,
    0,
    8,
    98,
    0,
    8,
    34,
    0,
    9,
    164,
    0,
    8,
    2,
    0,
    8,
    130,
    0,
    8,
    66,
    0,
    9,
    228,
    80,
    7,
    7,
    0,
    8,
    90,
    0,
    8,
    26,
    0,
    9,
    148,
    84,
    7,
    67,
    0,
    8,
    122,
    0,
    8,
    58,
    0,
    9,
    212,
    82,
    7,
    19,
    0,
    8,
    106,
    0,
    8,
    42,
    0,
    9,
    180,
    0,
    8,
    10,
    0,
    8,
    138,
    0,
    8,
    74,
    0,
    9,
    244,
    80,
    7,
    5,
    0,
    8,
    86,
    0,
    8,
    22,
    192,
    8,
    0,
    83,
    7,
    51,
    0,
    8,
    118,
    0,
    8,
    54,
    0,
    9,
    204,
    81,
    7,
    15,
    0,
    8,
    102,
    0,
    8,
    38,
    0,
    9,
    172,
    0,
    8,
    6,
    0,
    8,
    134,
    0,
    8,
    70,
    0,
    9,
    236,
    80,
    7,
    9,
    0,
    8,
    94,
    0,
    8,
    30,
    0,
    9,
    156,
    84,
    7,
    99,
    0,
    8,
    126,
    0,
    8,
    62,
    0,
    9,
    220,
    82,
    7,
    27,
    0,
    8,
    110,
    0,
    8,
    46,
    0,
    9,
    188,
    0,
    8,
    14,
    0,
    8,
    142,
    0,
    8,
    78,
    0,
    9,
    252,
    96,
    7,
    256,
    0,
    8,
    81,
    0,
    8,
    17,
    85,
    8,
    131,
    82,
    7,
    31,
    0,
    8,
    113,
    0,
    8,
    49,
    0,
    9,
    194,
    80,
    7,
    10,
    0,
    8,
    97,
    0,
    8,
    33,
    0,
    9,
    162,
    0,
    8,
    1,
    0,
    8,
    129,
    0,
    8,
    65,
    0,
    9,
    226,
    80,
    7,
    6,
    0,
    8,
    89,
    0,
    8,
    25,
    0,
    9,
    146,
    83,
    7,
    59,
    0,
    8,
    121,
    0,
    8,
    57,
    0,
    9,
    210,
    81,
    7,
    17,
    0,
    8,
    105,
    0,
    8,
    41,
    0,
    9,
    178,
    0,
    8,
    9,
    0,
    8,
    137,
    0,
    8,
    73,
    0,
    9,
    242,
    80,
    7,
    4,
    0,
    8,
    85,
    0,
    8,
    21,
    80,
    8,
    258,
    83,
    7,
    43,
    0,
    8,
    117,
    0,
    8,
    53,
    0,
    9,
    202,
    81,
    7,
    13,
    0,
    8,
    101,
    0,
    8,
    37,
    0,
    9,
    170,
    0,
    8,
    5,
    0,
    8,
    133,
    0,
    8,
    69,
    0,
    9,
    234,
    80,
    7,
    8,
    0,
    8,
    93,
    0,
    8,
    29,
    0,
    9,
    154,
    84,
    7,
    83,
    0,
    8,
    125,
    0,
    8,
    61,
    0,
    9,
    218,
    82,
    7,
    23,
    0,
    8,
    109,
    0,
    8,
    45,
    0,
    9,
    186,
    0,
    8,
    13,
    0,
    8,
    141,
    0,
    8,
    77,
    0,
    9,
    250,
    80,
    7,
    3,
    0,
    8,
    83,
    0,
    8,
    19,
    85,
    8,
    195,
    83,
    7,
    35,
    0,
    8,
    115,
    0,
    8,
    51,
    0,
    9,
    198,
    81,
    7,
    11,
    0,
    8,
    99,
    0,
    8,
    35,
    0,
    9,
    166,
    0,
    8,
    3,
    0,
    8,
    131,
    0,
    8,
    67,
    0,
    9,
    230,
    80,
    7,
    7,
    0,
    8,
    91,
    0,
    8,
    27,
    0,
    9,
    150,
    84,
    7,
    67,
    0,
    8,
    123,
    0,
    8,
    59,
    0,
    9,
    214,
    82,
    7,
    19,
    0,
    8,
    107,
    0,
    8,
    43,
    0,
    9,
    182,
    0,
    8,
    11,
    0,
    8,
    139,
    0,
    8,
    75,
    0,
    9,
    246,
    80,
    7,
    5,
    0,
    8,
    87,
    0,
    8,
    23,
    192,
    8,
    0,
    83,
    7,
    51,
    0,
    8,
    119,
    0,
    8,
    55,
    0,
    9,
    206,
    81,
    7,
    15,
    0,
    8,
    103,
    0,
    8,
    39,
    0,
    9,
    174,
    0,
    8,
    7,
    0,
    8,
    135,
    0,
    8,
    71,
    0,
    9,
    238,
    80,
    7,
    9,
    0,
    8,
    95,
    0,
    8,
    31,
    0,
    9,
    158,
    84,
    7,
    99,
    0,
    8,
    127,
    0,
    8,
    63,
    0,
    9,
    222,
    82,
    7,
    27,
    0,
    8,
    111,
    0,
    8,
    47,
    0,
    9,
    190,
    0,
    8,
    15,
    0,
    8,
    143,
    0,
    8,
    79,
    0,
    9,
    254,
    96,
    7,
    256,
    0,
    8,
    80,
    0,
    8,
    16,
    84,
    8,
    115,
    82,
    7,
    31,
    0,
    8,
    112,
    0,
    8,
    48,
    0,
    9,
    193,
    80,
    7,
    10,
    0,
    8,
    96,
    0,
    8,
    32,
    0,
    9,
    161,
    0,
    8,
    0,
    0,
    8,
    128,
    0,
    8,
    64,
    0,
    9,
    225,
    80,
    7,
    6,
    0,
    8,
    88,
    0,
    8,
    24,
    0,
    9,
    145,
    83,
    7,
    59,
    0,
    8,
    120,
    0,
    8,
    56,
    0,
    9,
    209,
    81,
    7,
    17,
    0,
    8,
    104,
    0,
    8,
    40,
    0,
    9,
    177,
    0,
    8,
    8,
    0,
    8,
    136,
    0,
    8,
    72,
    0,
    9,
    241,
    80,
    7,
    4,
    0,
    8,
    84,
    0,
    8,
    20,
    85,
    8,
    227,
    83,
    7,
    43,
    0,
    8,
    116,
    0,
    8,
    52,
    0,
    9,
    201,
    81,
    7,
    13,
    0,
    8,
    100,
    0,
    8,
    36,
    0,
    9,
    169,
    0,
    8,
    4,
    0,
    8,
    132,
    0,
    8,
    68,
    0,
    9,
    233,
    80,
    7,
    8,
    0,
    8,
    92,
    0,
    8,
    28,
    0,
    9,
    153,
    84,
    7,
    83,
    0,
    8,
    124,
    0,
    8,
    60,
    0,
    9,
    217,
    82,
    7,
    23,
    0,
    8,
    108,
    0,
    8,
    44,
    0,
    9,
    185,
    0,
    8,
    12,
    0,
    8,
    140,
    0,
    8,
    76,
    0,
    9,
    249,
    80,
    7,
    3,
    0,
    8,
    82,
    0,
    8,
    18,
    85,
    8,
    163,
    83,
    7,
    35,
    0,
    8,
    114,
    0,
    8,
    50,
    0,
    9,
    197,
    81,
    7,
    11,
    0,
    8,
    98,
    0,
    8,
    34,
    0,
    9,
    165,
    0,
    8,
    2,
    0,
    8,
    130,
    0,
    8,
    66,
    0,
    9,
    229,
    80,
    7,
    7,
    0,
    8,
    90,
    0,
    8,
    26,
    0,
    9,
    149,
    84,
    7,
    67,
    0,
    8,
    122,
    0,
    8,
    58,
    0,
    9,
    213,
    82,
    7,
    19,
    0,
    8,
    106,
    0,
    8,
    42,
    0,
    9,
    181,
    0,
    8,
    10,
    0,
    8,
    138,
    0,
    8,
    74,
    0,
    9,
    245,
    80,
    7,
    5,
    0,
    8,
    86,
    0,
    8,
    22,
    192,
    8,
    0,
    83,
    7,
    51,
    0,
    8,
    118,
    0,
    8,
    54,
    0,
    9,
    205,
    81,
    7,
    15,
    0,
    8,
    102,
    0,
    8,
    38,
    0,
    9,
    173,
    0,
    8,
    6,
    0,
    8,
    134,
    0,
    8,
    70,
    0,
    9,
    237,
    80,
    7,
    9,
    0,
    8,
    94,
    0,
    8,
    30,
    0,
    9,
    157,
    84,
    7,
    99,
    0,
    8,
    126,
    0,
    8,
    62,
    0,
    9,
    221,
    82,
    7,
    27,
    0,
    8,
    110,
    0,
    8,
    46,
    0,
    9,
    189,
    0,
    8,
    14,
    0,
    8,
    142,
    0,
    8,
    78,
    0,
    9,
    253,
    96,
    7,
    256,
    0,
    8,
    81,
    0,
    8,
    17,
    85,
    8,
    131,
    82,
    7,
    31,
    0,
    8,
    113,
    0,
    8,
    49,
    0,
    9,
    195,
    80,
    7,
    10,
    0,
    8,
    97,
    0,
    8,
    33,
    0,
    9,
    163,
    0,
    8,
    1,
    0,
    8,
    129,
    0,
    8,
    65,
    0,
    9,
    227,
    80,
    7,
    6,
    0,
    8,
    89,
    0,
    8,
    25,
    0,
    9,
    147,
    83,
    7,
    59,
    0,
    8,
    121,
    0,
    8,
    57,
    0,
    9,
    211,
    81,
    7,
    17,
    0,
    8,
    105,
    0,
    8,
    41,
    0,
    9,
    179,
    0,
    8,
    9,
    0,
    8,
    137,
    0,
    8,
    73,
    0,
    9,
    243,
    80,
    7,
    4,
    0,
    8,
    85,
    0,
    8,
    21,
    80,
    8,
    258,
    83,
    7,
    43,
    0,
    8,
    117,
    0,
    8,
    53,
    0,
    9,
    203,
    81,
    7,
    13,
    0,
    8,
    101,
    0,
    8,
    37,
    0,
    9,
    171,
    0,
    8,
    5,
    0,
    8,
    133,
    0,
    8,
    69,
    0,
    9,
    235,
    80,
    7,
    8,
    0,
    8,
    93,
    0,
    8,
    29,
    0,
    9,
    155,
    84,
    7,
    83,
    0,
    8,
    125,
    0,
    8,
    61,
    0,
    9,
    219,
    82,
    7,
    23,
    0,
    8,
    109,
    0,
    8,
    45,
    0,
    9,
    187,
    0,
    8,
    13,
    0,
    8,
    141,
    0,
    8,
    77,
    0,
    9,
    251,
    80,
    7,
    3,
    0,
    8,
    83,
    0,
    8,
    19,
    85,
    8,
    195,
    83,
    7,
    35,
    0,
    8,
    115,
    0,
    8,
    51,
    0,
    9,
    199,
    81,
    7,
    11,
    0,
    8,
    99,
    0,
    8,
    35,
    0,
    9,
    167,
    0,
    8,
    3,
    0,
    8,
    131,
    0,
    8,
    67,
    0,
    9,
    231,
    80,
    7,
    7,
    0,
    8,
    91,
    0,
    8,
    27,
    0,
    9,
    151,
    84,
    7,
    67,
    0,
    8,
    123,
    0,
    8,
    59,
    0,
    9,
    215,
    82,
    7,
    19,
    0,
    8,
    107,
    0,
    8,
    43,
    0,
    9,
    183,
    0,
    8,
    11,
    0,
    8,
    139,
    0,
    8,
    75,
    0,
    9,
    247,
    80,
    7,
    5,
    0,
    8,
    87,
    0,
    8,
    23,
    192,
    8,
    0,
    83,
    7,
    51,
    0,
    8,
    119,
    0,
    8,
    55,
    0,
    9,
    207,
    81,
    7,
    15,
    0,
    8,
    103,
    0,
    8,
    39,
    0,
    9,
    175,
    0,
    8,
    7,
    0,
    8,
    135,
    0,
    8,
    71,
    0,
    9,
    239,
    80,
    7,
    9,
    0,
    8,
    95,
    0,
    8,
    31,
    0,
    9,
    159,
    84,
    7,
    99,
    0,
    8,
    127,
    0,
    8,
    63,
    0,
    9,
    223,
    82,
    7,
    27,
    0,
    8,
    111,
    0,
    8,
    47,
    0,
    9,
    191,
    0,
    8,
    15,
    0,
    8,
    143,
    0,
    8,
    79,
    0,
    9,
    255
];
const fixed_td = [
    80,
    5,
    1,
    87,
    5,
    257,
    83,
    5,
    17,
    91,
    5,
    4097,
    81,
    5,
    5,
    89,
    5,
    1025,
    85,
    5,
    65,
    93,
    5,
    16385,
    80,
    5,
    3,
    88,
    5,
    513,
    84,
    5,
    33,
    92,
    5,
    8193,
    82,
    5,
    9,
    90,
    5,
    2049,
    86,
    5,
    129,
    192,
    5,
    24577,
    80,
    5,
    2,
    87,
    5,
    385,
    83,
    5,
    25,
    91,
    5,
    6145,
    81,
    5,
    7,
    89,
    5,
    1537,
    85,
    5,
    97,
    93,
    5,
    24577,
    80,
    5,
    4,
    88,
    5,
    769,
    84,
    5,
    49,
    92,
    5,
    12289,
    82,
    5,
    13,
    90,
    5,
    3073,
    86,
    5,
    193,
    192,
    5,
    24577
];
// Tables for deflate from PKZIP's appnote.txt.
const cplens = [
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    13,
    15,
    17,
    19,
    23,
    27,
    31,
    35,
    43,
    51,
    59,
    67,
    83,
    99,
    115,
    131,
    163,
    195,
    227,
    258,
    0,
    0
];
// see note #13 above about 258
const cplext = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    2,
    2,
    2,
    2,
    3,
    3,
    3,
    3,
    4,
    4,
    4,
    4,
    5,
    5,
    5,
    5,
    0,
    112,
    112 // 112==invalid
];
const cpdist = [
    1,
    2,
    3,
    4,
    5,
    7,
    9,
    13,
    17,
    25,
    33,
    49,
    65,
    97,
    129,
    193,
    257,
    385,
    513,
    769,
    1025,
    1537,
    2049,
    3073,
    4097,
    6145,
    8193,
    12289,
    16385,
    24577
];
const cpdext = [
    0,
    0,
    0,
    0,
    1,
    1,
    2,
    2,
    3,
    3,
    4,
    4,
    5,
    5,
    6,
    6,
    7,
    7,
    8,
    8,
    9,
    9,
    10,
    10,
    11,
    11,
    12,
    12,
    13,
    13
];
// If BMAX needs to be larger than 16, then h and x[] should be uLong.
const BMAX = 15; // maximum bit length of any code
function InfTree() {
    const that = this;
    let hn; // hufts used in space
    let v; // work area for huft_build
    let c; // bit length count table
    let r; // table entry for structure assignment
    let u; // table stack
    let x; // bit offsets, then code stack
    function huft_build(b, // BMAX)
    bindex, n, s, d, e, t, m, hp, hn, v // working area: values in order of bit length
    ) {
        // Given a list of code lengths and a maximum table size, make a set of
        // tables to decode that set of codes. Return Z_OK on success,
        // Z_BUF_ERROR
        // if the given code set is incomplete (the tables are still built in
        // this
        // case), Z_DATA_ERROR if the input is invalid (an over-subscribed set
        // of
        // lengths), or Z_MEM_ERROR if not enough memory.
        let a; // counter for codes of length k
        let f; // i repeats in table every f entries
        let g; // maximum code length
        let h; // table level
        let i; // counter, current code
        let j; // counter
        let k; // number of bits in current code
        let l; // bits per table (returned in m)
        let mask; // (1 << w) - 1, to avoid cc -O bug on HP
        let p; // pointer into c[], b[], or v[]
        let q; // points to current table
        let w; // bits before this table == (l * h)
        let xp; // pointer into x
        let y; // number of dummy codes added
        let z; // number of entries in current table
        // Generate counts for each bit length
        p = 0;
        i = n;
        do {
            c[b[bindex + p]]++;
            p++;
            i--; // assume all entries <= BMAX
        }while (i !== 0);
        if (c[0] == n) {
            t[0] = -1;
            m[0] = 0;
            return Z_OK;
        }
        // Find minimum and maximum length, bound *m by those
        l = m[0];
        for(j = 1; j <= BMAX; j++)if (c[j] !== 0) break;
        k = j; // minimum code length
        if (l < j) l = j;
        for(i = BMAX; i !== 0; i--){
            if (c[i] !== 0) break;
        }
        g = i; // maximum code length
        if (l > i) l = i;
        m[0] = l;
        // Adjust last length count to fill out codes, if needed
        for(y = 1 << j; j < i; j++, y <<= 1){
            if ((y -= c[j]) < 0) return Z_DATA_ERROR;
        }
        if ((y -= c[i]) < 0) return Z_DATA_ERROR;
        c[i] += y;
        // Generate starting offsets into the value table for each length
        x[1] = j = 0;
        p = 1;
        xp = 2;
        while(--i !== 0){
            x[xp] = j += c[p];
            xp++;
            p++;
        }
        // Make a table of values in order of bit lengths
        i = 0;
        p = 0;
        do {
            if ((j = b[bindex + p]) !== 0) v[x[j]++] = i;
            p++;
        }while (++i < n);
        n = x[g]; // set n to length of v
        // Generate the Huffman codes and for each, make the table entries
        x[0] = i = 0; // first Huffman code is zero
        p = 0; // grab values in bit order
        h = -1; // no tables yet--level -1
        w = -l; // bits decoded == (l * h)
        u[0] = 0; // just to keep compilers happy
        q = 0; // ditto
        z = 0; // ditto
        // go through the bit lengths (k already is bits in shortest code)
        for(; k <= g; k++){
            a = c[k];
            while(a-- !== 0){
                // here i is the Huffman code of length k bits for value *p
                // make tables up to required level
                while(k > w + l){
                    h++;
                    w += l; // previous table always l bits
                    // compute minimum size table less than or equal to l bits
                    z = g - w;
                    z = z > l ? l : z; // table size upper limit
                    if ((f = 1 << (j = k - w)) > a + 1) {
                        // too few codes for
                        // k-w bit table
                        f -= a + 1; // deduct codes from patterns left
                        xp = k;
                        if (j < z) while(++j < z){
                            if ((f <<= 1) <= c[++xp]) break; // enough codes to use up j bits
                            f -= c[xp]; // else deduct codes from patterns
                        }
                    }
                    z = 1 << j; // table entries for j-bit table
                    // allocate new table
                    if (hn[0] + z > MANY) return Z_DATA_ERROR; // overflow of MANY
                    u[h] = q = /* hp+ */ hn[0]; // DEBUG
                    hn[0] += z;
                    // connect to last table, if there is one
                    if (h !== 0) {
                        x[h] = i; // save pattern for backing up
                        r[0] = /* (byte) */ j; // bits in this table
                        r[1] = /* (byte) */ l; // bits to dump before this table
                        j = i >>> w - l;
                        r[2] = /* (int) */ q - u[h - 1] - j; // offset to this table
                        hp.set(r, (u[h - 1] + j) * 3);
                    // to
                    // last
                    // table
                    } else t[0] = q; // first table is returned result
                }
                // set up table entry in r
                r[1] = /* (byte) */ k - w;
                if (p >= n) r[0] = 192; // out of values--invalid code
                else if (v[p] < s) {
                    r[0] = /* (byte) */ v[p] < 256 ? 0 : 96; // 256 is
                    // end-of-block
                    r[2] = v[p++]; // simple code is just the value
                } else {
                    r[0] = /* (byte) */ e[v[p] - s] + 16 + 64; // non-simple--look
                    // up in lists
                    r[2] = d[v[p++] - s];
                }
                // fill code-like entries with r
                f = 1 << k - w;
                for(j = i >>> w; j < z; j += f)hp.set(r, (q + j) * 3);
                // backwards increment the k-bit code i
                for(j = 1 << k - 1; (i & j) !== 0; j >>>= 1)i ^= j;
                i ^= j;
                // backup over finished tables
                mask = (1 << w) - 1; // needed on HP, cc -O bug
                while((i & mask) != x[h]){
                    h--; // don't need to update q
                    w -= l;
                    mask = (1 << w) - 1;
                }
            }
        }
        // Return Z_BUF_ERROR if we were given an incomplete table
        return y !== 0 && g != 1 ? Z_BUF_ERROR : Z_OK;
    }
    function initWorkArea(vsize) {
        let i;
        if (!hn) {
            hn = []; // []; //new Array(1);
            v = []; // new Array(vsize);
            c = new Int32Array(BMAX + 1); // new Array(BMAX + 1);
            r = []; // new Array(3);
            u = new Int32Array(BMAX); // new Array(BMAX);
            x = new Int32Array(BMAX + 1); // new Array(BMAX + 1);
        }
        if (v.length < vsize) v = []; // new Array(vsize);
        for(i = 0; i < vsize; i++)v[i] = 0;
        for(i = 0; i < BMAX + 1; i++)c[i] = 0;
        for(i = 0; i < 3; i++)r[i] = 0;
        // for(int i=0; i<BMAX; i++){u[i]=0;}
        u.set(c.subarray(0, BMAX), 0);
        // for(int i=0; i<BMAX+1; i++){x[i]=0;}
        x.set(c.subarray(0, BMAX + 1), 0);
    }
    that.inflate_trees_bits = function(c, bb, tb, hp, z // for messages
    ) {
        let result;
        initWorkArea(19);
        hn[0] = 0;
        result = huft_build(c, 0, 19, 19, null, null, tb, bb, hp, hn, v);
        if (result == Z_DATA_ERROR) z.msg = "oversubscribed dynamic bit lengths tree";
        else if (result == Z_BUF_ERROR || bb[0] === 0) {
            z.msg = "incomplete dynamic bit lengths tree";
            result = Z_DATA_ERROR;
        }
        return result;
    };
    that.inflate_trees_dynamic = function(nl, nd, c, bl, bd, tl, td, hp, z // for messages
    ) {
        let result;
        // build literal/length tree
        initWorkArea(288);
        hn[0] = 0;
        result = huft_build(c, 0, nl, 257, cplens, cplext, tl, bl, hp, hn, v);
        if (result != Z_OK || bl[0] === 0) {
            if (result == Z_DATA_ERROR) z.msg = "oversubscribed literal/length tree";
            else if (result != Z_MEM_ERROR) {
                z.msg = "incomplete literal/length tree";
                result = Z_DATA_ERROR;
            }
            return result;
        }
        // build distance tree
        initWorkArea(288);
        result = huft_build(c, nl, nd, 0, cpdist, cpdext, td, bd, hp, hn, v);
        if (result != Z_OK || bd[0] === 0 && nl > 257) {
            if (result == Z_DATA_ERROR) z.msg = "oversubscribed distance tree";
            else if (result == Z_BUF_ERROR) {
                z.msg = "incomplete distance tree";
                result = Z_DATA_ERROR;
            } else if (result != Z_MEM_ERROR) {
                z.msg = "empty distance tree with lengths";
                result = Z_DATA_ERROR;
            }
            return result;
        }
        return Z_OK;
    };
}
InfTree.inflate_trees_fixed = function(bl, bd, tl, td // distance tree result
) {
    bl[0] = fixed_bl;
    bd[0] = fixed_bd;
    tl[0] = fixed_tl;
    td[0] = fixed_td;
    return Z_OK;
};
// InfCodes
// waiting for "i:"=input,
// "o:"=output,
// "x:"=nothing
const START = 0; // x: set up for LEN
const LEN = 1; // i: get length/literal/eob next
const LENEXT = 2; // i: getting length extra (have base)
const DIST = 3; // i: get distance next
const DISTEXT = 4; // i: getting distance extra
const COPY = 5; // o: copying bytes in win, waiting
// for space
const LIT = 6; // o: got literal, waiting for output
// space
const WASH = 7; // o: got eob, possibly still output
// waiting
const END = 8; // x: got eob and all data flushed
const BADCODE = 9; // x: got error
function InfCodes() {
    const that = this;
    let mode; // current inflate_codes mode
    // mode dependent information
    let len = 0;
    let tree; // pointer into tree
    let tree_index = 0;
    let need = 0; // bits needed
    let lit = 0;
    // if EXT or COPY, where and how much
    let get = 0; // bits to get for extra
    let dist = 0; // distance back to copy from
    let lbits = 0; // ltree bits decoded per branch
    let dbits = 0; // dtree bits decoder per branch
    let ltree; // literal/length/eob tree
    let ltree_index = 0; // literal/length/eob tree
    let dtree; // distance tree
    let dtree_index = 0; // distance tree
    // Called with number of bytes left to write in win at least 258
    // (the maximum string length) and number of input bytes available
    // at least ten. The ten bytes are six bytes for the longest length/
    // distance pair plus four bytes for overloading the bit buffer.
    function inflate_fast(bl, bd, tl, tl_index, td, td_index, s, z) {
        let t; // temporary pointer
        let tp; // temporary pointer
        let tp_index; // temporary pointer
        let e; // extra bits or operation
        let b; // bit buffer
        let k; // bits in bit buffer
        let p; // input data pointer
        let n; // bytes available there
        let q; // output win write pointer
        let m; // bytes to end of win or read pointer
        let ml; // mask for literal/length tree
        let md; // mask for distance tree
        let c; // bytes to copy
        let d; // distance back to copy from
        let r; // copy source pointer
        let tp_index_t_3; // (tp_index+t)*3
        // load input, output, bit values
        p = z.next_in_index;
        n = z.avail_in;
        b = s.bitb;
        k = s.bitk;
        q = s.write;
        m = q < s.read ? s.read - q - 1 : s.end - q;
        // initialize masks
        ml = inflate_mask[bl];
        md = inflate_mask[bd];
        // do until not enough input or output space for fast loop
        do {
            // get literal/length code
            while(k < 20){
                n--;
                b |= (z.read_byte(p++) & 0xff) << k;
                k += 8;
            }
            t = b & ml;
            tp = tl;
            tp_index = tl_index;
            tp_index_t_3 = (tp_index + t) * 3;
            if ((e = tp[tp_index_t_3]) === 0) {
                b >>= tp[tp_index_t_3 + 1];
                k -= tp[tp_index_t_3 + 1];
                s.win[q++] = /* (byte) */ tp[tp_index_t_3 + 2];
                m--;
                continue;
            }
            do {
                b >>= tp[tp_index_t_3 + 1];
                k -= tp[tp_index_t_3 + 1];
                if ((e & 16) !== 0) {
                    e &= 15;
                    c = tp[tp_index_t_3 + 2] + /* (int) */ (b & inflate_mask[e]);
                    b >>= e;
                    k -= e;
                    // decode distance base of block to copy
                    while(k < 15){
                        n--;
                        b |= (z.read_byte(p++) & 0xff) << k;
                        k += 8;
                    }
                    t = b & md;
                    tp = td;
                    tp_index = td_index;
                    tp_index_t_3 = (tp_index + t) * 3;
                    e = tp[tp_index_t_3];
                    do {
                        b >>= tp[tp_index_t_3 + 1];
                        k -= tp[tp_index_t_3 + 1];
                        if ((e & 16) !== 0) {
                            // get extra bits to add to distance base
                            e &= 15;
                            while(k < e){
                                n--;
                                b |= (z.read_byte(p++) & 0xff) << k;
                                k += 8;
                            }
                            d = tp[tp_index_t_3 + 2] + (b & inflate_mask[e]);
                            b >>= e;
                            k -= e;
                            // do the copy
                            m -= c;
                            if (q >= d) {
                                // just copy
                                r = q - d;
                                if (q - r > 0 && 2 > q - r) {
                                    s.win[q++] = s.win[r++]; // minimum
                                    // count is
                                    // three,
                                    s.win[q++] = s.win[r++]; // so unroll
                                    // loop a
                                    // little
                                    c -= 2;
                                } else {
                                    s.win.set(s.win.subarray(r, r + 2), q);
                                    q += 2;
                                    r += 2;
                                    c -= 2;
                                }
                            } else {
                                r = q - d;
                                do r += s.end; // force pointer in win
                                while (r < 0); // covers invalid distances
                                e = s.end - r;
                                if (c > e) {
                                    c -= e; // wrapped copy
                                    if (q - r > 0 && e > q - r) do s.win[q++] = s.win[r++];
                                    while (--e !== 0);
                                    else {
                                        s.win.set(s.win.subarray(r, r + e), q);
                                        q += e;
                                        r += e;
                                        e = 0;
                                    }
                                    r = 0; // copy rest from start of win
                                }
                            }
                            // copy all or what's left
                            if (q - r > 0 && c > q - r) do s.win[q++] = s.win[r++];
                            while (--c !== 0);
                            else {
                                s.win.set(s.win.subarray(r, r + c), q);
                                q += c;
                                r += c;
                                c = 0;
                            }
                            break;
                        } else if ((e & 64) === 0) {
                            t += tp[tp_index_t_3 + 2];
                            t += b & inflate_mask[e];
                            tp_index_t_3 = (tp_index + t) * 3;
                            e = tp[tp_index_t_3];
                        } else {
                            z.msg = "invalid distance code";
                            c = z.avail_in - n;
                            c = k >> 3 < c ? k >> 3 : c;
                            n += c;
                            p -= c;
                            k -= c << 3;
                            s.bitb = b;
                            s.bitk = k;
                            z.avail_in = n;
                            z.total_in += p - z.next_in_index;
                            z.next_in_index = p;
                            s.write = q;
                            return Z_DATA_ERROR;
                        }
                    // eslint-disable-next-line no-constant-condition
                    }while (true);
                    break;
                }
                if ((e & 64) === 0) {
                    t += tp[tp_index_t_3 + 2];
                    t += b & inflate_mask[e];
                    tp_index_t_3 = (tp_index + t) * 3;
                    if ((e = tp[tp_index_t_3]) === 0) {
                        b >>= tp[tp_index_t_3 + 1];
                        k -= tp[tp_index_t_3 + 1];
                        s.win[q++] = /* (byte) */ tp[tp_index_t_3 + 2];
                        m--;
                        break;
                    }
                } else if ((e & 32) !== 0) {
                    c = z.avail_in - n;
                    c = k >> 3 < c ? k >> 3 : c;
                    n += c;
                    p -= c;
                    k -= c << 3;
                    s.bitb = b;
                    s.bitk = k;
                    z.avail_in = n;
                    z.total_in += p - z.next_in_index;
                    z.next_in_index = p;
                    s.write = q;
                    return Z_STREAM_END;
                } else {
                    z.msg = "invalid literal/length code";
                    c = z.avail_in - n;
                    c = k >> 3 < c ? k >> 3 : c;
                    n += c;
                    p -= c;
                    k -= c << 3;
                    s.bitb = b;
                    s.bitk = k;
                    z.avail_in = n;
                    z.total_in += p - z.next_in_index;
                    z.next_in_index = p;
                    s.write = q;
                    return Z_DATA_ERROR;
                }
            // eslint-disable-next-line no-constant-condition
            }while (true);
        }while (m >= 258 && n >= 10);
        // not enough input or output--restore pointers and return
        c = z.avail_in - n;
        c = k >> 3 < c ? k >> 3 : c;
        n += c;
        p -= c;
        k -= c << 3;
        s.bitb = b;
        s.bitk = k;
        z.avail_in = n;
        z.total_in += p - z.next_in_index;
        z.next_in_index = p;
        s.write = q;
        return Z_OK;
    }
    that.init = function(bl, bd, tl, tl_index, td, td_index) {
        mode = START;
        lbits = /* (byte) */ bl;
        dbits = /* (byte) */ bd;
        ltree = tl;
        ltree_index = tl_index;
        dtree = td;
        dtree_index = td_index;
        tree = null;
    };
    that.proc = function(s, z, r) {
        let j; // temporary storage
        let tindex; // temporary pointer
        let e; // extra bits or operation
        let b = 0; // bit buffer
        let k = 0; // bits in bit buffer
        let p = 0; // input data pointer
        let n; // bytes available there
        let q; // output win write pointer
        let m; // bytes to end of win or read pointer
        let f; // pointer to copy strings from
        // copy input/output information to locals (UPDATE macro restores)
        p = z.next_in_index;
        n = z.avail_in;
        b = s.bitb;
        k = s.bitk;
        q = s.write;
        m = q < s.read ? s.read - q - 1 : s.end - q;
        // process input and output based on current state
        // eslint-disable-next-line no-constant-condition
        while(true)switch(mode){
            // waiting for "i:"=input, "o:"=output, "x:"=nothing
            case START:
                if (m >= 258 && n >= 10) {
                    s.bitb = b;
                    s.bitk = k;
                    z.avail_in = n;
                    z.total_in += p - z.next_in_index;
                    z.next_in_index = p;
                    s.write = q;
                    r = inflate_fast(lbits, dbits, ltree, ltree_index, dtree, dtree_index, s, z);
                    p = z.next_in_index;
                    n = z.avail_in;
                    b = s.bitb;
                    k = s.bitk;
                    q = s.write;
                    m = q < s.read ? s.read - q - 1 : s.end - q;
                    if (r != Z_OK) {
                        mode = r == Z_STREAM_END ? WASH : BADCODE;
                        break;
                    }
                }
                need = lbits;
                tree = ltree;
                tree_index = ltree_index;
                mode = LEN;
            /* falls through */ case LEN:
                j = need;
                while(k < j){
                    if (n !== 0) r = Z_OK;
                    else {
                        s.bitb = b;
                        s.bitk = k;
                        z.avail_in = n;
                        z.total_in += p - z.next_in_index;
                        z.next_in_index = p;
                        s.write = q;
                        return s.inflate_flush(z, r);
                    }
                    n--;
                    b |= (z.read_byte(p++) & 0xff) << k;
                    k += 8;
                }
                tindex = (tree_index + (b & inflate_mask[j])) * 3;
                b >>>= tree[tindex + 1];
                k -= tree[tindex + 1];
                e = tree[tindex];
                if (e === 0) {
                    lit = tree[tindex + 2];
                    mode = LIT;
                    break;
                }
                if ((e & 16) !== 0) {
                    get = e & 15;
                    len = tree[tindex + 2];
                    mode = LENEXT;
                    break;
                }
                if ((e & 64) === 0) {
                    need = e;
                    tree_index = tindex / 3 + tree[tindex + 2];
                    break;
                }
                if ((e & 32) !== 0) {
                    mode = WASH;
                    break;
                }
                mode = BADCODE; // invalid code
                z.msg = "invalid literal/length code";
                r = Z_DATA_ERROR;
                s.bitb = b;
                s.bitk = k;
                z.avail_in = n;
                z.total_in += p - z.next_in_index;
                z.next_in_index = p;
                s.write = q;
                return s.inflate_flush(z, r);
            case LENEXT:
                j = get;
                while(k < j){
                    if (n !== 0) r = Z_OK;
                    else {
                        s.bitb = b;
                        s.bitk = k;
                        z.avail_in = n;
                        z.total_in += p - z.next_in_index;
                        z.next_in_index = p;
                        s.write = q;
                        return s.inflate_flush(z, r);
                    }
                    n--;
                    b |= (z.read_byte(p++) & 0xff) << k;
                    k += 8;
                }
                len += b & inflate_mask[j];
                b >>= j;
                k -= j;
                need = dbits;
                tree = dtree;
                tree_index = dtree_index;
                mode = DIST;
            /* falls through */ case DIST:
                j = need;
                while(k < j){
                    if (n !== 0) r = Z_OK;
                    else {
                        s.bitb = b;
                        s.bitk = k;
                        z.avail_in = n;
                        z.total_in += p - z.next_in_index;
                        z.next_in_index = p;
                        s.write = q;
                        return s.inflate_flush(z, r);
                    }
                    n--;
                    b |= (z.read_byte(p++) & 0xff) << k;
                    k += 8;
                }
                tindex = (tree_index + (b & inflate_mask[j])) * 3;
                b >>= tree[tindex + 1];
                k -= tree[tindex + 1];
                e = tree[tindex];
                if ((e & 16) !== 0) {
                    get = e & 15;
                    dist = tree[tindex + 2];
                    mode = DISTEXT;
                    break;
                }
                if ((e & 64) === 0) {
                    need = e;
                    tree_index = tindex / 3 + tree[tindex + 2];
                    break;
                }
                mode = BADCODE; // invalid code
                z.msg = "invalid distance code";
                r = Z_DATA_ERROR;
                s.bitb = b;
                s.bitk = k;
                z.avail_in = n;
                z.total_in += p - z.next_in_index;
                z.next_in_index = p;
                s.write = q;
                return s.inflate_flush(z, r);
            case DISTEXT:
                j = get;
                while(k < j){
                    if (n !== 0) r = Z_OK;
                    else {
                        s.bitb = b;
                        s.bitk = k;
                        z.avail_in = n;
                        z.total_in += p - z.next_in_index;
                        z.next_in_index = p;
                        s.write = q;
                        return s.inflate_flush(z, r);
                    }
                    n--;
                    b |= (z.read_byte(p++) & 0xff) << k;
                    k += 8;
                }
                dist += b & inflate_mask[j];
                b >>= j;
                k -= j;
                mode = COPY;
            /* falls through */ case COPY:
                f = q - dist;
                while(f < 0)f += s.end; // of "if" handles invalid distances
                while(len !== 0){
                    if (m === 0) {
                        if (q == s.end && s.read !== 0) {
                            q = 0;
                            m = q < s.read ? s.read - q - 1 : s.end - q;
                        }
                        if (m === 0) {
                            s.write = q;
                            r = s.inflate_flush(z, r);
                            q = s.write;
                            m = q < s.read ? s.read - q - 1 : s.end - q;
                            if (q == s.end && s.read !== 0) {
                                q = 0;
                                m = q < s.read ? s.read - q - 1 : s.end - q;
                            }
                            if (m === 0) {
                                s.bitb = b;
                                s.bitk = k;
                                z.avail_in = n;
                                z.total_in += p - z.next_in_index;
                                z.next_in_index = p;
                                s.write = q;
                                return s.inflate_flush(z, r);
                            }
                        }
                    }
                    s.win[q++] = s.win[f++];
                    m--;
                    if (f == s.end) f = 0;
                    len--;
                }
                mode = START;
                break;
            case LIT:
                if (m === 0) {
                    if (q == s.end && s.read !== 0) {
                        q = 0;
                        m = q < s.read ? s.read - q - 1 : s.end - q;
                    }
                    if (m === 0) {
                        s.write = q;
                        r = s.inflate_flush(z, r);
                        q = s.write;
                        m = q < s.read ? s.read - q - 1 : s.end - q;
                        if (q == s.end && s.read !== 0) {
                            q = 0;
                            m = q < s.read ? s.read - q - 1 : s.end - q;
                        }
                        if (m === 0) {
                            s.bitb = b;
                            s.bitk = k;
                            z.avail_in = n;
                            z.total_in += p - z.next_in_index;
                            z.next_in_index = p;
                            s.write = q;
                            return s.inflate_flush(z, r);
                        }
                    }
                }
                r = Z_OK;
                s.win[q++] = /* (byte) */ lit;
                m--;
                mode = START;
                break;
            case WASH:
                if (k > 7) {
                    k -= 8;
                    n++;
                    p--; // can always return one
                }
                s.write = q;
                r = s.inflate_flush(z, r);
                q = s.write;
                m = q < s.read ? s.read - q - 1 : s.end - q;
                if (s.read != s.write) {
                    s.bitb = b;
                    s.bitk = k;
                    z.avail_in = n;
                    z.total_in += p - z.next_in_index;
                    z.next_in_index = p;
                    s.write = q;
                    return s.inflate_flush(z, r);
                }
                mode = END;
            /* falls through */ case END:
                r = Z_STREAM_END;
                s.bitb = b;
                s.bitk = k;
                z.avail_in = n;
                z.total_in += p - z.next_in_index;
                z.next_in_index = p;
                s.write = q;
                return s.inflate_flush(z, r);
            case BADCODE:
                r = Z_DATA_ERROR;
                s.bitb = b;
                s.bitk = k;
                z.avail_in = n;
                z.total_in += p - z.next_in_index;
                z.next_in_index = p;
                s.write = q;
                return s.inflate_flush(z, r);
            default:
                r = Z_STREAM_ERROR;
                s.bitb = b;
                s.bitk = k;
                z.avail_in = n;
                z.total_in += p - z.next_in_index;
                z.next_in_index = p;
                s.write = q;
                return s.inflate_flush(z, r);
        }
    };
    that.free = function() {
    // ZFREE(z, c);
    };
}
// InfBlocks
// Table for deflate from PKZIP's appnote.txt.
const border = [
    16,
    17,
    18,
    0,
    8,
    7,
    9,
    6,
    10,
    5,
    11,
    4,
    12,
    3,
    13,
    2,
    14,
    1,
    15
];
const TYPE = 0; // get type bits (3, including end bit)
const LENS = 1; // get lengths for stored
const STORED = 2; // processing stored block
const TABLE = 3; // get table lengths
const BTREE = 4; // get bit lengths tree for a dynamic
// block
const DTREE = 5; // get length, distance trees for a
// dynamic block
const CODES = 6; // processing fixed or dynamic block
const DRY = 7; // output remaining win bytes
const DONELOCKS = 8; // finished last block, done
const BADBLOCKS = 9; // ot a data error--stuck here
function InfBlocks(z, w) {
    const that = this;
    let mode = TYPE; // current inflate_block mode
    let left = 0; // if STORED, bytes left to copy
    let table = 0; // table lengths (14 bits)
    let index = 0; // index into blens (or border)
    let blens; // bit lengths of codes
    const bb = [
        0
    ]; // bit length tree depth
    const tb = [
        0
    ]; // bit length decoding tree
    const codes = new InfCodes(); // if CODES, current state
    let last = 0; // true if this block is the last block
    let hufts = new Int32Array(MANY * 3); // single malloc for tree space
    const check = 0; // check on output
    const inftree = new InfTree();
    that.bitk = 0; // bits in bit buffer
    that.bitb = 0; // bit buffer
    that.win = new Uint8Array(w); // sliding win
    that.end = w; // one byte after sliding win
    that.read = 0; // win read pointer
    that.write = 0; // win write pointer
    that.reset = function(z, c) {
        if (c) c[0] = check;
        // if (mode == BTREE || mode == DTREE) {
        // }
        if (mode == CODES) codes.free(z);
        mode = TYPE;
        that.bitk = 0;
        that.bitb = 0;
        that.read = that.write = 0;
    };
    that.reset(z, null);
    // copy as much as possible from the sliding win to the output area
    that.inflate_flush = function(z, r) {
        let n;
        let p;
        let q;
        // local copies of source and destination pointers
        p = z.next_out_index;
        q = that.read;
        // compute number of bytes to copy as far as end of win
        n = /* (int) */ (q <= that.write ? that.write : that.end) - q;
        if (n > z.avail_out) n = z.avail_out;
        if (n !== 0 && r == Z_BUF_ERROR) r = Z_OK;
        // update counters
        z.avail_out -= n;
        z.total_out += n;
        // copy as far as end of win
        z.next_out.set(that.win.subarray(q, q + n), p);
        p += n;
        q += n;
        // see if more to copy at beginning of win
        if (q == that.end) {
            // wrap pointers
            q = 0;
            if (that.write == that.end) that.write = 0;
            // compute bytes to copy
            n = that.write - q;
            if (n > z.avail_out) n = z.avail_out;
            if (n !== 0 && r == Z_BUF_ERROR) r = Z_OK;
            // update counters
            z.avail_out -= n;
            z.total_out += n;
            // copy
            z.next_out.set(that.win.subarray(q, q + n), p);
            p += n;
            q += n;
        }
        // update pointers
        z.next_out_index = p;
        that.read = q;
        // done
        return r;
    };
    that.proc = function(z, r) {
        let t; // temporary storage
        let b; // bit buffer
        let k; // bits in bit buffer
        let p; // input data pointer
        let n; // bytes available there
        let q; // output win write pointer
        let m; // bytes to end of win or read pointer
        let i;
        // copy input/output information to locals (UPDATE macro restores)
        // {
        p = z.next_in_index;
        n = z.avail_in;
        b = that.bitb;
        k = that.bitk;
        // }
        // {
        q = that.write;
        m = /* (int) */ q < that.read ? that.read - q - 1 : that.end - q;
        // }
        // process input based on current state
        // DEBUG dtree
        // eslint-disable-next-line no-constant-condition
        while(true){
            let bl, bd, tl, td, bl_, bd_, tl_, td_;
            switch(mode){
                case TYPE:
                    while(k < 3){
                        if (n !== 0) r = Z_OK;
                        else {
                            that.bitb = b;
                            that.bitk = k;
                            z.avail_in = n;
                            z.total_in += p - z.next_in_index;
                            z.next_in_index = p;
                            that.write = q;
                            return that.inflate_flush(z, r);
                        }
                        n--;
                        b |= (z.read_byte(p++) & 0xff) << k;
                        k += 8;
                    }
                    t = /* (int) */ b & 7;
                    last = t & 1;
                    switch(t >>> 1){
                        case 0:
                            // {
                            b >>>= 3;
                            k -= 3;
                            // }
                            t = k & 7; // go to byte boundary
                            // {
                            b >>>= t;
                            k -= t;
                            // }
                            mode = LENS; // get length of stored block
                            break;
                        case 1:
                            // {
                            bl = []; // new Array(1);
                            bd = []; // new Array(1);
                            tl = [
                                []
                            ]; // new Array(1);
                            td = [
                                []
                            ]; // new Array(1);
                            InfTree.inflate_trees_fixed(bl, bd, tl, td);
                            codes.init(bl[0], bd[0], tl[0], 0, td[0], 0);
                            // }
                            // {
                            b >>>= 3;
                            k -= 3;
                            // }
                            mode = CODES;
                            break;
                        case 2:
                            // {
                            b >>>= 3;
                            k -= 3;
                            // }
                            mode = TABLE;
                            break;
                        case 3:
                            // {
                            b >>>= 3;
                            k -= 3;
                            // }
                            mode = BADBLOCKS;
                            z.msg = "invalid block type";
                            r = Z_DATA_ERROR;
                            that.bitb = b;
                            that.bitk = k;
                            z.avail_in = n;
                            z.total_in += p - z.next_in_index;
                            z.next_in_index = p;
                            that.write = q;
                            return that.inflate_flush(z, r);
                    }
                    break;
                case LENS:
                    while(k < 32){
                        if (n !== 0) r = Z_OK;
                        else {
                            that.bitb = b;
                            that.bitk = k;
                            z.avail_in = n;
                            z.total_in += p - z.next_in_index;
                            z.next_in_index = p;
                            that.write = q;
                            return that.inflate_flush(z, r);
                        }
                        n--;
                        b |= (z.read_byte(p++) & 0xff) << k;
                        k += 8;
                    }
                    if ((~b >>> 16 & 0xffff) != (b & 0xffff)) {
                        mode = BADBLOCKS;
                        z.msg = "invalid stored block lengths";
                        r = Z_DATA_ERROR;
                        that.bitb = b;
                        that.bitk = k;
                        z.avail_in = n;
                        z.total_in += p - z.next_in_index;
                        z.next_in_index = p;
                        that.write = q;
                        return that.inflate_flush(z, r);
                    }
                    left = b & 0xffff;
                    b = k = 0; // dump bits
                    mode = left !== 0 ? STORED : last !== 0 ? DRY : TYPE;
                    break;
                case STORED:
                    if (n === 0) {
                        that.bitb = b;
                        that.bitk = k;
                        z.avail_in = n;
                        z.total_in += p - z.next_in_index;
                        z.next_in_index = p;
                        that.write = q;
                        return that.inflate_flush(z, r);
                    }
                    if (m === 0) {
                        if (q == that.end && that.read !== 0) {
                            q = 0;
                            m = /* (int) */ q < that.read ? that.read - q - 1 : that.end - q;
                        }
                        if (m === 0) {
                            that.write = q;
                            r = that.inflate_flush(z, r);
                            q = that.write;
                            m = /* (int) */ q < that.read ? that.read - q - 1 : that.end - q;
                            if (q == that.end && that.read !== 0) {
                                q = 0;
                                m = /* (int) */ q < that.read ? that.read - q - 1 : that.end - q;
                            }
                            if (m === 0) {
                                that.bitb = b;
                                that.bitk = k;
                                z.avail_in = n;
                                z.total_in += p - z.next_in_index;
                                z.next_in_index = p;
                                that.write = q;
                                return that.inflate_flush(z, r);
                            }
                        }
                    }
                    r = Z_OK;
                    t = left;
                    if (t > n) t = n;
                    if (t > m) t = m;
                    that.win.set(z.read_buf(p, t), q);
                    p += t;
                    n -= t;
                    q += t;
                    m -= t;
                    if ((left -= t) !== 0) break;
                    mode = last !== 0 ? DRY : TYPE;
                    break;
                case TABLE:
                    while(k < 14){
                        if (n !== 0) r = Z_OK;
                        else {
                            that.bitb = b;
                            that.bitk = k;
                            z.avail_in = n;
                            z.total_in += p - z.next_in_index;
                            z.next_in_index = p;
                            that.write = q;
                            return that.inflate_flush(z, r);
                        }
                        n--;
                        b |= (z.read_byte(p++) & 0xff) << k;
                        k += 8;
                    }
                    table = t = b & 0x3fff;
                    if ((t & 0x1f) > 29 || (t >> 5 & 0x1f) > 29) {
                        mode = BADBLOCKS;
                        z.msg = "too many length or distance symbols";
                        r = Z_DATA_ERROR;
                        that.bitb = b;
                        that.bitk = k;
                        z.avail_in = n;
                        z.total_in += p - z.next_in_index;
                        z.next_in_index = p;
                        that.write = q;
                        return that.inflate_flush(z, r);
                    }
                    t = 258 + (t & 0x1f) + (t >> 5 & 0x1f);
                    if (!blens || blens.length < t) blens = []; // new Array(t);
                    else for(i = 0; i < t; i++)blens[i] = 0;
                    // {
                    b >>>= 14;
                    k -= 14;
                    // }
                    index = 0;
                    mode = BTREE;
                /* falls through */ case BTREE:
                    while(index < 4 + (table >>> 10)){
                        while(k < 3){
                            if (n !== 0) r = Z_OK;
                            else {
                                that.bitb = b;
                                that.bitk = k;
                                z.avail_in = n;
                                z.total_in += p - z.next_in_index;
                                z.next_in_index = p;
                                that.write = q;
                                return that.inflate_flush(z, r);
                            }
                            n--;
                            b |= (z.read_byte(p++) & 0xff) << k;
                            k += 8;
                        }
                        blens[border[index++]] = b & 7;
                        // {
                        b >>>= 3;
                        k -= 3;
                    // }
                    }
                    while(index < 19)blens[border[index++]] = 0;
                    bb[0] = 7;
                    t = inftree.inflate_trees_bits(blens, bb, tb, hufts, z);
                    if (t != Z_OK) {
                        r = t;
                        if (r == Z_DATA_ERROR) {
                            blens = null;
                            mode = BADBLOCKS;
                        }
                        that.bitb = b;
                        that.bitk = k;
                        z.avail_in = n;
                        z.total_in += p - z.next_in_index;
                        z.next_in_index = p;
                        that.write = q;
                        return that.inflate_flush(z, r);
                    }
                    index = 0;
                    mode = DTREE;
                /* falls through */ case DTREE:
                    // eslint-disable-next-line no-constant-condition
                    while(true){
                        t = table;
                        if (index >= 258 + (t & 0x1f) + (t >> 5 & 0x1f)) break;
                        let j, c;
                        t = bb[0];
                        while(k < t){
                            if (n !== 0) r = Z_OK;
                            else {
                                that.bitb = b;
                                that.bitk = k;
                                z.avail_in = n;
                                z.total_in += p - z.next_in_index;
                                z.next_in_index = p;
                                that.write = q;
                                return that.inflate_flush(z, r);
                            }
                            n--;
                            b |= (z.read_byte(p++) & 0xff) << k;
                            k += 8;
                        }
                        // if (tb[0] == -1) {
                        // System.err.println("null...");
                        // }
                        t = hufts[(tb[0] + (b & inflate_mask[t])) * 3 + 1];
                        c = hufts[(tb[0] + (b & inflate_mask[t])) * 3 + 2];
                        if (c < 16) {
                            b >>>= t;
                            k -= t;
                            blens[index++] = c;
                        } else {
                            i = c == 18 ? 7 : c - 14;
                            j = c == 18 ? 11 : 3;
                            while(k < t + i){
                                if (n !== 0) r = Z_OK;
                                else {
                                    that.bitb = b;
                                    that.bitk = k;
                                    z.avail_in = n;
                                    z.total_in += p - z.next_in_index;
                                    z.next_in_index = p;
                                    that.write = q;
                                    return that.inflate_flush(z, r);
                                }
                                n--;
                                b |= (z.read_byte(p++) & 0xff) << k;
                                k += 8;
                            }
                            b >>>= t;
                            k -= t;
                            j += b & inflate_mask[i];
                            b >>>= i;
                            k -= i;
                            i = index;
                            t = table;
                            if (i + j > 258 + (t & 0x1f) + (t >> 5 & 0x1f) || c == 16 && i < 1) {
                                blens = null;
                                mode = BADBLOCKS;
                                z.msg = "invalid bit length repeat";
                                r = Z_DATA_ERROR;
                                that.bitb = b;
                                that.bitk = k;
                                z.avail_in = n;
                                z.total_in += p - z.next_in_index;
                                z.next_in_index = p;
                                that.write = q;
                                return that.inflate_flush(z, r);
                            }
                            c = c == 16 ? blens[i - 1] : 0;
                            do blens[i++] = c;
                            while (--j !== 0);
                            index = i;
                        }
                    }
                    tb[0] = -1;
                    // {
                    bl_ = []; // new Array(1);
                    bd_ = []; // new Array(1);
                    tl_ = []; // new Array(1);
                    td_ = []; // new Array(1);
                    bl_[0] = 9; // must be <= 9 for lookahead assumptions
                    bd_[0] = 6; // must be <= 9 for lookahead assumptions
                    t = table;
                    t = inftree.inflate_trees_dynamic(257 + (t & 0x1f), 1 + (t >> 5 & 0x1f), blens, bl_, bd_, tl_, td_, hufts, z);
                    if (t != Z_OK) {
                        if (t == Z_DATA_ERROR) {
                            blens = null;
                            mode = BADBLOCKS;
                        }
                        r = t;
                        that.bitb = b;
                        that.bitk = k;
                        z.avail_in = n;
                        z.total_in += p - z.next_in_index;
                        z.next_in_index = p;
                        that.write = q;
                        return that.inflate_flush(z, r);
                    }
                    codes.init(bl_[0], bd_[0], hufts, tl_[0], hufts, td_[0]);
                    // }
                    mode = CODES;
                /* falls through */ case CODES:
                    that.bitb = b;
                    that.bitk = k;
                    z.avail_in = n;
                    z.total_in += p - z.next_in_index;
                    z.next_in_index = p;
                    that.write = q;
                    if ((r = codes.proc(that, z, r)) != Z_STREAM_END) return that.inflate_flush(z, r);
                    r = Z_OK;
                    codes.free(z);
                    p = z.next_in_index;
                    n = z.avail_in;
                    b = that.bitb;
                    k = that.bitk;
                    q = that.write;
                    m = /* (int) */ q < that.read ? that.read - q - 1 : that.end - q;
                    if (last === 0) {
                        mode = TYPE;
                        break;
                    }
                    mode = DRY;
                /* falls through */ case DRY:
                    that.write = q;
                    r = that.inflate_flush(z, r);
                    q = that.write;
                    m = /* (int) */ q < that.read ? that.read - q - 1 : that.end - q;
                    if (that.read != that.write) {
                        that.bitb = b;
                        that.bitk = k;
                        z.avail_in = n;
                        z.total_in += p - z.next_in_index;
                        z.next_in_index = p;
                        that.write = q;
                        return that.inflate_flush(z, r);
                    }
                    mode = DONELOCKS;
                /* falls through */ case DONELOCKS:
                    r = Z_STREAM_END;
                    that.bitb = b;
                    that.bitk = k;
                    z.avail_in = n;
                    z.total_in += p - z.next_in_index;
                    z.next_in_index = p;
                    that.write = q;
                    return that.inflate_flush(z, r);
                case BADBLOCKS:
                    r = Z_DATA_ERROR;
                    that.bitb = b;
                    that.bitk = k;
                    z.avail_in = n;
                    z.total_in += p - z.next_in_index;
                    z.next_in_index = p;
                    that.write = q;
                    return that.inflate_flush(z, r);
                default:
                    r = Z_STREAM_ERROR;
                    that.bitb = b;
                    that.bitk = k;
                    z.avail_in = n;
                    z.total_in += p - z.next_in_index;
                    z.next_in_index = p;
                    that.write = q;
                    return that.inflate_flush(z, r);
            }
        }
    };
    that.free = function(z) {
        that.reset(z, null);
        that.win = null;
        hufts = null;
    // ZFREE(z, s);
    };
    that.set_dictionary = function(d, start, n) {
        that.win.set(d.subarray(start, start + n), 0);
        that.read = that.write = n;
    };
    // Returns true if inflate is currently at the end of a block generated
    // by Z_SYNC_FLUSH or Z_FULL_FLUSH.
    that.sync_point = function() {
        return mode == LENS ? 1 : 0;
    };
}
// Inflate
// preset dictionary flag in zlib header
const PRESET_DICT = 0x20;
const Z_DEFLATED = 8;
const METHOD = 0; // waiting for method byte
const FLAG = 1; // waiting for flag byte
const DICT4 = 2; // four dictionary check bytes to go
const DICT3 = 3; // three dictionary check bytes to go
const DICT2 = 4; // two dictionary check bytes to go
const DICT1 = 5; // one dictionary check byte to go
const DICT0 = 6; // waiting for inflateSetDictionary
const BLOCKS = 7; // decompressing blocks
const DONE = 12; // finished check, done
const BAD = 13; // got an error--stay here
const mark = [
    0,
    0,
    0xff,
    0xff
];
function Inflate() {
    const that = this;
    that.mode = 0; // current inflate mode
    // mode dependent information
    that.method = 0; // if FLAGS, method byte
    // if CHECK, check values to compare
    that.was = [
        0
    ]; // new Array(1); // computed check value
    that.need = 0; // stream check value
    // if BAD, inflateSync's marker bytes count
    that.marker = 0;
    // mode independent information
    that.wbits = 0; // log2(win size) (8..15, defaults to 15)
    // this.blocks; // current inflate_blocks state
    function inflateReset(z) {
        if (!z || !z.istate) return Z_STREAM_ERROR;
        z.total_in = z.total_out = 0;
        z.msg = null;
        z.istate.mode = BLOCKS;
        z.istate.blocks.reset(z, null);
        return Z_OK;
    }
    that.inflateEnd = function(z) {
        if (that.blocks) that.blocks.free(z);
        that.blocks = null;
        // ZFREE(z, z->state);
        return Z_OK;
    };
    that.inflateInit = function(z, w) {
        z.msg = null;
        that.blocks = null;
        // set win size
        if (w < 8 || w > 15) {
            that.inflateEnd(z);
            return Z_STREAM_ERROR;
        }
        that.wbits = w;
        z.istate.blocks = new InfBlocks(z, 1 << w);
        // reset state
        inflateReset(z);
        return Z_OK;
    };
    that.inflate = function(z, f) {
        let r;
        let b;
        if (!z || !z.istate || !z.next_in) return Z_STREAM_ERROR;
        const istate = z.istate;
        f = f == Z_FINISH ? Z_BUF_ERROR : Z_OK;
        r = Z_BUF_ERROR;
        // eslint-disable-next-line no-constant-condition
        while(true)switch(istate.mode){
            case METHOD:
                if (z.avail_in === 0) return r;
                r = f;
                z.avail_in--;
                z.total_in++;
                if (((istate.method = z.read_byte(z.next_in_index++)) & 0xf) != Z_DEFLATED) {
                    istate.mode = BAD;
                    z.msg = "unknown compression method";
                    istate.marker = 5; // can't try inflateSync
                    break;
                }
                if ((istate.method >> 4) + 8 > istate.wbits) {
                    istate.mode = BAD;
                    z.msg = "invalid win size";
                    istate.marker = 5; // can't try inflateSync
                    break;
                }
                istate.mode = FLAG;
            /* falls through */ case FLAG:
                if (z.avail_in === 0) return r;
                r = f;
                z.avail_in--;
                z.total_in++;
                b = z.read_byte(z.next_in_index++) & 0xff;
                if (((istate.method << 8) + b) % 31 !== 0) {
                    istate.mode = BAD;
                    z.msg = "incorrect header check";
                    istate.marker = 5; // can't try inflateSync
                    break;
                }
                if ((b & PRESET_DICT) === 0) {
                    istate.mode = BLOCKS;
                    break;
                }
                istate.mode = DICT4;
            /* falls through */ case DICT4:
                if (z.avail_in === 0) return r;
                r = f;
                z.avail_in--;
                z.total_in++;
                istate.need = (z.read_byte(z.next_in_index++) & 0xff) << 24 & 0xff000000;
                istate.mode = DICT3;
            /* falls through */ case DICT3:
                if (z.avail_in === 0) return r;
                r = f;
                z.avail_in--;
                z.total_in++;
                istate.need += (z.read_byte(z.next_in_index++) & 0xff) << 16 & 0xff0000;
                istate.mode = DICT2;
            /* falls through */ case DICT2:
                if (z.avail_in === 0) return r;
                r = f;
                z.avail_in--;
                z.total_in++;
                istate.need += (z.read_byte(z.next_in_index++) & 0xff) << 8 & 0xff00;
                istate.mode = DICT1;
            /* falls through */ case DICT1:
                if (z.avail_in === 0) return r;
                r = f;
                z.avail_in--;
                z.total_in++;
                istate.need += z.read_byte(z.next_in_index++) & 0xff;
                istate.mode = DICT0;
                return Z_NEED_DICT;
            case DICT0:
                istate.mode = BAD;
                z.msg = "need dictionary";
                istate.marker = 0; // can try inflateSync
                return Z_STREAM_ERROR;
            case BLOCKS:
                r = istate.blocks.proc(z, r);
                if (r == Z_DATA_ERROR) {
                    istate.mode = BAD;
                    istate.marker = 0; // can try inflateSync
                    break;
                }
                if (r == Z_OK) r = f;
                if (r != Z_STREAM_END) return r;
                r = f;
                istate.blocks.reset(z, istate.was);
                istate.mode = DONE;
            /* falls through */ case DONE:
                z.avail_in = 0;
                return Z_STREAM_END;
            case BAD:
                return Z_DATA_ERROR;
            default:
                return Z_STREAM_ERROR;
        }
    };
    that.inflateSetDictionary = function(z, dictionary, dictLength) {
        let index = 0, length = dictLength;
        if (!z || !z.istate || z.istate.mode != DICT0) return Z_STREAM_ERROR;
        const istate = z.istate;
        if (length >= 1 << istate.wbits) {
            length = (1 << istate.wbits) - 1;
            index = dictLength - length;
        }
        istate.blocks.set_dictionary(dictionary, index, length);
        istate.mode = BLOCKS;
        return Z_OK;
    };
    that.inflateSync = function(z) {
        let n; // number of bytes to look at
        let p; // pointer to bytes
        let m; // number of marker bytes found in a row
        let r, w; // temporaries to save total_in and total_out
        // set up
        if (!z || !z.istate) return Z_STREAM_ERROR;
        const istate = z.istate;
        if (istate.mode != BAD) {
            istate.mode = BAD;
            istate.marker = 0;
        }
        if ((n = z.avail_in) === 0) return Z_BUF_ERROR;
        p = z.next_in_index;
        m = istate.marker;
        // search
        while(n !== 0 && m < 4){
            if (z.read_byte(p) == mark[m]) m++;
            else if (z.read_byte(p) !== 0) m = 0;
            else m = 4 - m;
            p++;
            n--;
        }
        // restore
        z.total_in += p - z.next_in_index;
        z.next_in_index = p;
        z.avail_in = n;
        istate.marker = m;
        // return no joy or set up to restart on a new block
        if (m != 4) return Z_DATA_ERROR;
        r = z.total_in;
        w = z.total_out;
        inflateReset(z);
        z.total_in = r;
        z.total_out = w;
        istate.mode = BLOCKS;
        return Z_OK;
    };
    // Returns true if inflate is currently at the end of a block generated
    // by Z_SYNC_FLUSH or Z_FULL_FLUSH. This function is used by one PPP
    // implementation to provide an additional safety check. PPP uses
    // Z_SYNC_FLUSH
    // but removes the length bytes of the resulting empty stored block. When
    // decompressing, PPP checks that at the end of input packet, inflate is
    // waiting for these length bytes.
    that.inflateSyncPoint = function(z) {
        if (!z || !z.istate || !z.istate.blocks) return Z_STREAM_ERROR;
        return z.istate.blocks.sync_point();
    };
}
// ZStream
function ZStream() {}
ZStream.prototype = {
    inflateInit (bits) {
        const that = this;
        that.istate = new Inflate();
        if (!bits) bits = MAX_BITS;
        return that.istate.inflateInit(that, bits);
    },
    inflate (f) {
        const that = this;
        if (!that.istate) return Z_STREAM_ERROR;
        return that.istate.inflate(that, f);
    },
    inflateEnd () {
        const that = this;
        if (!that.istate) return Z_STREAM_ERROR;
        const ret = that.istate.inflateEnd(that);
        that.istate = null;
        return ret;
    },
    inflateSync () {
        const that = this;
        if (!that.istate) return Z_STREAM_ERROR;
        return that.istate.inflateSync(that);
    },
    inflateSetDictionary (dictionary, dictLength) {
        const that = this;
        if (!that.istate) return Z_STREAM_ERROR;
        return that.istate.inflateSetDictionary(that, dictionary, dictLength);
    },
    read_byte (start) {
        const that = this;
        return that.next_in[start];
    },
    read_buf (start, size) {
        const that = this;
        return that.next_in.subarray(start, start + size);
    }
};
// Inflater
function ZipInflate(options) {
    const that = this;
    const z = new ZStream();
    const bufsize = options && options.chunkSize ? Math.floor(options.chunkSize * 2) : 131072;
    const flush = Z_NO_FLUSH;
    const buf = new Uint8Array(bufsize);
    let nomoreinput = false;
    z.inflateInit();
    z.next_out = buf;
    that.append = function(data, onprogress) {
        const buffers = [];
        let err, array, lastIndex = 0, bufferIndex = 0, bufferSize = 0;
        if (data.length === 0) return;
        z.next_in_index = 0;
        z.next_in = data;
        z.avail_in = data.length;
        do {
            z.next_out_index = 0;
            z.avail_out = bufsize;
            if (z.avail_in === 0 && !nomoreinput) {
                z.next_in_index = 0;
                nomoreinput = true;
            }
            err = z.inflate(flush);
            if (nomoreinput && err === Z_BUF_ERROR) {
                if (z.avail_in !== 0) throw new Error("inflating: bad input");
            } else if (err !== Z_OK && err !== Z_STREAM_END) throw new Error("inflating: " + z.msg);
            if ((nomoreinput || err === Z_STREAM_END) && z.avail_in === data.length) throw new Error("inflating: bad input");
            if (z.next_out_index) {
                if (z.next_out_index === bufsize) buffers.push(new Uint8Array(buf));
                else buffers.push(buf.slice(0, z.next_out_index));
            }
            bufferSize += z.next_out_index;
            if (onprogress && z.next_in_index > 0 && z.next_in_index != lastIndex) {
                onprogress(z.next_in_index);
                lastIndex = z.next_in_index;
            }
        }while (z.avail_in > 0 || z.avail_out === 0);
        if (buffers.length > 1) {
            array = new Uint8Array(bufferSize);
            buffers.forEach(function(chunk) {
                array.set(chunk, bufferIndex);
                bufferIndex += chunk.length;
            });
        } else array = buffers[0] || new Uint8Array();
        return array;
    };
    that.flush = function() {
        z.inflateEnd();
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5UMrn":[function(require,module,exports) {
/*
 Copyright (c) 2022 Gildas Lormeau. All rights reserved.

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions are met:

 1. Redistributions of source code must retain the above copyright notice,
 this list of conditions and the following disclaimer.

 2. Redistributions in binary form must reproduce the above copyright 
 notice, this list of conditions and the following disclaimer in 
 the documentation and/or other materials provided with the distribution.

 3. The names of the authors may not be used to endorse or promote products
 derived from this software without specific prior written permission.

 THIS SOFTWARE IS PROVIDED ''AS IS'' AND ANY EXPRESSED OR IMPLIED WARRANTIES,
 INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
 FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL JCRAFT,
 INC. OR ANY CONTRIBUTORS TO THIS SOFTWARE BE LIABLE FOR ANY DIRECT, INDIRECT,
 INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA,
 OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
 LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
 EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */ /* global navigator, CompressionStream, DecompressionStream */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "configure", ()=>configure);
parcelHelpers.export(exports, "getConfiguration", ()=>getConfiguration);
parcelHelpers.export(exports, "getChunkSize", ()=>getChunkSize);
var _constantsJs = require("./constants.js");
var _streamAdapterJs = require("./streams/stream-adapter.js");
const MINIMUM_CHUNK_SIZE = 64;
let maxWorkers = 2;
try {
    if (typeof navigator != (0, _constantsJs.UNDEFINED_TYPE) && navigator.hardwareConcurrency) maxWorkers = navigator.hardwareConcurrency;
} catch (_error) {
// ignored
}
const DEFAULT_CONFIGURATION = {
    chunkSize: 524288,
    maxWorkers,
    terminateWorkerTimeout: 5000,
    useWebWorkers: true,
    useCompressionStream: true,
    workerScripts: (0, _constantsJs.UNDEFINED_VALUE),
    CompressionStreamNative: typeof CompressionStream != (0, _constantsJs.UNDEFINED_TYPE) && CompressionStream,
    DecompressionStreamNative: typeof DecompressionStream != (0, _constantsJs.UNDEFINED_TYPE) && DecompressionStream
};
const config = Object.assign({}, DEFAULT_CONFIGURATION);
function getConfiguration() {
    return config;
}
function getChunkSize(config) {
    return Math.max(config.chunkSize, MINIMUM_CHUNK_SIZE);
}
function configure(configuration) {
    const { baseURL, chunkSize, maxWorkers, terminateWorkerTimeout, useCompressionStream, useWebWorkers, Deflate, Inflate, CompressionStream: CompressionStream1, DecompressionStream: DecompressionStream1, workerScripts } = configuration;
    setIfDefined("baseURL", baseURL);
    setIfDefined("chunkSize", chunkSize);
    setIfDefined("maxWorkers", maxWorkers);
    setIfDefined("terminateWorkerTimeout", terminateWorkerTimeout);
    setIfDefined("useCompressionStream", useCompressionStream);
    setIfDefined("useWebWorkers", useWebWorkers);
    if (Deflate) config.CompressionStream = new (0, _streamAdapterJs.StreamAdapter)(Deflate);
    if (Inflate) config.DecompressionStream = new (0, _streamAdapterJs.StreamAdapter)(Inflate);
    setIfDefined("CompressionStream", CompressionStream1);
    setIfDefined("DecompressionStream", DecompressionStream1);
    if (workerScripts !== (0, _constantsJs.UNDEFINED_VALUE)) {
        const { deflate, inflate } = workerScripts;
        if (deflate || inflate) {
            if (!config.workerScripts) config.workerScripts = {};
        }
        if (deflate) {
            if (!Array.isArray(deflate)) throw new Error("workerScripts.deflate must be an array");
            config.workerScripts.deflate = deflate;
        }
        if (inflate) {
            if (!Array.isArray(inflate)) throw new Error("workerScripts.inflate must be an array");
            config.workerScripts.inflate = inflate;
        }
    }
}
function setIfDefined(propertyName, propertyValue) {
    if (propertyValue !== (0, _constantsJs.UNDEFINED_VALUE)) config[propertyName] = propertyValue;
}

},{"./constants.js":"4V9hL","./streams/stream-adapter.js":"lpoin","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4V9hL":[function(require,module,exports) {
/*
 Copyright (c) 2022 Gildas Lormeau. All rights reserved.

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions are met:

 1. Redistributions of source code must retain the above copyright notice,
 this list of conditions and the following disclaimer.

 2. Redistributions in binary form must reproduce the above copyright 
 notice, this list of conditions and the following disclaimer in 
 the documentation and/or other materials provided with the distribution.

 3. The names of the authors may not be used to endorse or promote products
 derived from this software without specific prior written permission.

 THIS SOFTWARE IS PROVIDED ''AS IS'' AND ANY EXPRESSED OR IMPLIED WARRANTIES,
 INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
 FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL JCRAFT,
 INC. OR ANY CONTRIBUTORS TO THIS SOFTWARE BE LIABLE FOR ANY DIRECT, INDIRECT,
 INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA,
 OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
 LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
 EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MAX_32_BITS", ()=>MAX_32_BITS);
parcelHelpers.export(exports, "MAX_16_BITS", ()=>MAX_16_BITS);
parcelHelpers.export(exports, "COMPRESSION_METHOD_DEFLATE", ()=>COMPRESSION_METHOD_DEFLATE);
parcelHelpers.export(exports, "COMPRESSION_METHOD_STORE", ()=>COMPRESSION_METHOD_STORE);
parcelHelpers.export(exports, "COMPRESSION_METHOD_AES", ()=>COMPRESSION_METHOD_AES);
parcelHelpers.export(exports, "SPLIT_ZIP_FILE_SIGNATURE", ()=>SPLIT_ZIP_FILE_SIGNATURE);
parcelHelpers.export(exports, "LOCAL_FILE_HEADER_SIGNATURE", ()=>LOCAL_FILE_HEADER_SIGNATURE);
parcelHelpers.export(exports, "DATA_DESCRIPTOR_RECORD_SIGNATURE", ()=>DATA_DESCRIPTOR_RECORD_SIGNATURE);
parcelHelpers.export(exports, "CENTRAL_FILE_HEADER_SIGNATURE", ()=>CENTRAL_FILE_HEADER_SIGNATURE);
parcelHelpers.export(exports, "END_OF_CENTRAL_DIR_SIGNATURE", ()=>END_OF_CENTRAL_DIR_SIGNATURE);
parcelHelpers.export(exports, "ZIP64_END_OF_CENTRAL_DIR_LOCATOR_SIGNATURE", ()=>ZIP64_END_OF_CENTRAL_DIR_LOCATOR_SIGNATURE);
parcelHelpers.export(exports, "ZIP64_END_OF_CENTRAL_DIR_SIGNATURE", ()=>ZIP64_END_OF_CENTRAL_DIR_SIGNATURE);
parcelHelpers.export(exports, "EXTRAFIELD_TYPE_ZIP64", ()=>EXTRAFIELD_TYPE_ZIP64);
parcelHelpers.export(exports, "EXTRAFIELD_TYPE_AES", ()=>EXTRAFIELD_TYPE_AES);
parcelHelpers.export(exports, "EXTRAFIELD_TYPE_NTFS", ()=>EXTRAFIELD_TYPE_NTFS);
parcelHelpers.export(exports, "EXTRAFIELD_TYPE_NTFS_TAG1", ()=>EXTRAFIELD_TYPE_NTFS_TAG1);
parcelHelpers.export(exports, "EXTRAFIELD_TYPE_EXTENDED_TIMESTAMP", ()=>EXTRAFIELD_TYPE_EXTENDED_TIMESTAMP);
parcelHelpers.export(exports, "EXTRAFIELD_TYPE_UNICODE_PATH", ()=>EXTRAFIELD_TYPE_UNICODE_PATH);
parcelHelpers.export(exports, "EXTRAFIELD_TYPE_UNICODE_COMMENT", ()=>EXTRAFIELD_TYPE_UNICODE_COMMENT);
parcelHelpers.export(exports, "END_OF_CENTRAL_DIR_LENGTH", ()=>END_OF_CENTRAL_DIR_LENGTH);
parcelHelpers.export(exports, "ZIP64_END_OF_CENTRAL_DIR_LOCATOR_LENGTH", ()=>ZIP64_END_OF_CENTRAL_DIR_LOCATOR_LENGTH);
parcelHelpers.export(exports, "ZIP64_END_OF_CENTRAL_DIR_LENGTH", ()=>ZIP64_END_OF_CENTRAL_DIR_LENGTH);
parcelHelpers.export(exports, "ZIP64_END_OF_CENTRAL_DIR_TOTAL_LENGTH", ()=>ZIP64_END_OF_CENTRAL_DIR_TOTAL_LENGTH);
parcelHelpers.export(exports, "BITFLAG_ENCRYPTED", ()=>BITFLAG_ENCRYPTED);
parcelHelpers.export(exports, "BITFLAG_LEVEL", ()=>BITFLAG_LEVEL);
parcelHelpers.export(exports, "BITFLAG_DATA_DESCRIPTOR", ()=>BITFLAG_DATA_DESCRIPTOR);
parcelHelpers.export(exports, "BITFLAG_LANG_ENCODING_FLAG", ()=>BITFLAG_LANG_ENCODING_FLAG);
parcelHelpers.export(exports, "FILE_ATTR_MSDOS_DIR_MASK", ()=>FILE_ATTR_MSDOS_DIR_MASK);
parcelHelpers.export(exports, "VERSION_DEFLATE", ()=>VERSION_DEFLATE);
parcelHelpers.export(exports, "VERSION_ZIP64", ()=>VERSION_ZIP64);
parcelHelpers.export(exports, "VERSION_AES", ()=>VERSION_AES);
parcelHelpers.export(exports, "DIRECTORY_SIGNATURE", ()=>DIRECTORY_SIGNATURE);
parcelHelpers.export(exports, "MIN_DATE", ()=>MIN_DATE);
parcelHelpers.export(exports, "MAX_DATE", ()=>MAX_DATE);
parcelHelpers.export(exports, "UNDEFINED_VALUE", ()=>UNDEFINED_VALUE);
parcelHelpers.export(exports, "UNDEFINED_TYPE", ()=>UNDEFINED_TYPE);
parcelHelpers.export(exports, "FUNCTION_TYPE", ()=>FUNCTION_TYPE);
const MAX_32_BITS = 0xffffffff;
const MAX_16_BITS = 0xffff;
const COMPRESSION_METHOD_DEFLATE = 0x08;
const COMPRESSION_METHOD_STORE = 0x00;
const COMPRESSION_METHOD_AES = 0x63;
const LOCAL_FILE_HEADER_SIGNATURE = 0x04034b50;
const SPLIT_ZIP_FILE_SIGNATURE = 0x08074b50;
const DATA_DESCRIPTOR_RECORD_SIGNATURE = SPLIT_ZIP_FILE_SIGNATURE;
const CENTRAL_FILE_HEADER_SIGNATURE = 0x02014b50;
const END_OF_CENTRAL_DIR_SIGNATURE = 0x06054b50;
const ZIP64_END_OF_CENTRAL_DIR_SIGNATURE = 0x06064b50;
const ZIP64_END_OF_CENTRAL_DIR_LOCATOR_SIGNATURE = 0x07064b50;
const END_OF_CENTRAL_DIR_LENGTH = 22;
const ZIP64_END_OF_CENTRAL_DIR_LOCATOR_LENGTH = 20;
const ZIP64_END_OF_CENTRAL_DIR_LENGTH = 56;
const ZIP64_END_OF_CENTRAL_DIR_TOTAL_LENGTH = END_OF_CENTRAL_DIR_LENGTH + ZIP64_END_OF_CENTRAL_DIR_LOCATOR_LENGTH + ZIP64_END_OF_CENTRAL_DIR_LENGTH;
const EXTRAFIELD_TYPE_ZIP64 = 0x0001;
const EXTRAFIELD_TYPE_AES = 0x9901;
const EXTRAFIELD_TYPE_NTFS = 0x000a;
const EXTRAFIELD_TYPE_NTFS_TAG1 = 0x0001;
const EXTRAFIELD_TYPE_EXTENDED_TIMESTAMP = 0x5455;
const EXTRAFIELD_TYPE_UNICODE_PATH = 0x7075;
const EXTRAFIELD_TYPE_UNICODE_COMMENT = 0x6375;
const BITFLAG_ENCRYPTED = 0x01;
const BITFLAG_LEVEL = 0x06;
const BITFLAG_DATA_DESCRIPTOR = 0x0008;
const BITFLAG_LANG_ENCODING_FLAG = 0x0800;
const FILE_ATTR_MSDOS_DIR_MASK = 0x10;
const VERSION_DEFLATE = 0x14;
const VERSION_ZIP64 = 0x2D;
const VERSION_AES = 0x33;
const DIRECTORY_SIGNATURE = "/";
const MAX_DATE = new Date(2107, 11, 31);
const MIN_DATE = new Date(1980, 0, 1);
const UNDEFINED_VALUE = undefined;
const UNDEFINED_TYPE = "undefined";
const FUNCTION_TYPE = "function";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lpoin":[function(require,module,exports) {
/*
 Copyright (c) 2022 Gildas Lormeau. All rights reserved.

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions are met:

 1. Redistributions of source code must retain the above copyright notice,
 this list of conditions and the following disclaimer.

 2. Redistributions in binary form must reproduce the above copyright 
 notice, this list of conditions and the following disclaimer in 
 the documentation and/or other materials provided with the distribution.

 3. The names of the authors may not be used to endorse or promote products
 derived from this software without specific prior written permission.

 THIS SOFTWARE IS PROVIDED ''AS IS'' AND ANY EXPRESSED OR IMPLIED WARRANTIES,
 INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
 FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL JCRAFT,
 INC. OR ANY CONTRIBUTORS TO THIS SOFTWARE BE LIABLE FOR ANY DIRECT, INDIRECT,
 INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA,
 OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
 LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
 EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */ /* global TransformStream */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "StreamAdapter", ()=>StreamAdapter);
class StreamAdapter {
    constructor(Codec){
        return class extends TransformStream {
            constructor(_format, options){
                const codec = new Codec(options);
                super({
                    transform (chunk, controller) {
                        controller.enqueue(codec.append(chunk));
                    },
                    flush (controller) {
                        const chunk = codec.flush();
                        if (chunk) controller.enqueue(chunk);
                    }
                });
            }
        };
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3M5Q5":[function(require,module,exports) {
/*
 Copyright (c) 2022 Gildas Lormeau. All rights reserved.

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions are met:

 1. Redistributions of source code must retain the above copyright notice,
 this list of conditions and the following disclaimer.

 2. Redistributions in binary form must reproduce the above copyright 
 notice, this list of conditions and the following disclaimer in 
 the documentation and/or other materials provided with the distribution.

 3. The names of the authors may not be used to endorse or promote products
 derived from this software without specific prior written permission.

 THIS SOFTWARE IS PROVIDED ''AS IS'' AND ANY EXPRESSED OR IMPLIED WARRANTIES,
 INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
 FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL JCRAFT,
 INC. OR ANY CONTRIBUTORS TO THIS SOFTWARE BE LIABLE FOR ANY DIRECT, INDIRECT,
 INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA,
 OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
 LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
 EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */ // deno-lint-ignore-file no-prototype-builtins
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mimeTypes", ()=>mimeTypes);
parcelHelpers.export(exports, "getMimeType", ()=>getMimeType);
var _defaultMimeTypeJs = require("./default-mime-type.js");
const table = {
    "application": {
        "andrew-inset": "ez",
        "annodex": "anx",
        "atom+xml": "atom",
        "atomcat+xml": "atomcat",
        "atomserv+xml": "atomsrv",
        "bbolin": "lin",
        "cap": [
            "cap",
            "pcap"
        ],
        "cu-seeme": "cu",
        "davmount+xml": "davmount",
        "dsptype": "tsp",
        "ecmascript": [
            "es",
            "ecma"
        ],
        "futuresplash": "spl",
        "hta": "hta",
        "java-archive": "jar",
        "java-serialized-object": "ser",
        "java-vm": "class",
        "javascript": "js",
        "m3g": "m3g",
        "mac-binhex40": "hqx",
        "mathematica": [
            "nb",
            "ma",
            "mb"
        ],
        "msaccess": "mdb",
        "msword": [
            "doc",
            "dot"
        ],
        "mxf": "mxf",
        "oda": "oda",
        "ogg": "ogx",
        "pdf": "pdf",
        "pgp-keys": "key",
        "pgp-signature": [
            "asc",
            "sig"
        ],
        "pics-rules": "prf",
        "postscript": [
            "ps",
            "ai",
            "eps",
            "epsi",
            "epsf",
            "eps2",
            "eps3"
        ],
        "rar": "rar",
        "rdf+xml": "rdf",
        "rss+xml": "rss",
        "rtf": "rtf",
        "smil": [
            "smi",
            "smil"
        ],
        "xhtml+xml": [
            "xhtml",
            "xht"
        ],
        "xml": [
            "xml",
            "xsl",
            "xsd"
        ],
        "xspf+xml": "xspf",
        "zip": "zip",
        "vnd.android.package-archive": "apk",
        "vnd.cinderella": "cdy",
        "vnd.google-earth.kml+xml": "kml",
        "vnd.google-earth.kmz": "kmz",
        "vnd.mozilla.xul+xml": "xul",
        "vnd.ms-excel": [
            "xls",
            "xlb",
            "xlt",
            "xlm",
            "xla",
            "xlc",
            "xlw"
        ],
        "vnd.ms-pki.seccat": "cat",
        "vnd.ms-pki.stl": "stl",
        "vnd.ms-powerpoint": [
            "ppt",
            "pps",
            "pot"
        ],
        "vnd.oasis.opendocument.chart": "odc",
        "vnd.oasis.opendocument.database": "odb",
        "vnd.oasis.opendocument.formula": "odf",
        "vnd.oasis.opendocument.graphics": "odg",
        "vnd.oasis.opendocument.graphics-template": "otg",
        "vnd.oasis.opendocument.image": "odi",
        "vnd.oasis.opendocument.presentation": "odp",
        "vnd.oasis.opendocument.presentation-template": "otp",
        "vnd.oasis.opendocument.spreadsheet": "ods",
        "vnd.oasis.opendocument.spreadsheet-template": "ots",
        "vnd.oasis.opendocument.text": "odt",
        "vnd.oasis.opendocument.text-master": "odm",
        "vnd.oasis.opendocument.text-template": "ott",
        "vnd.oasis.opendocument.text-web": "oth",
        "vnd.openxmlformats-officedocument.spreadsheetml.sheet": "xlsx",
        "vnd.openxmlformats-officedocument.spreadsheetml.template": "xltx",
        "vnd.openxmlformats-officedocument.presentationml.presentation": "pptx",
        "vnd.openxmlformats-officedocument.presentationml.slideshow": "ppsx",
        "vnd.openxmlformats-officedocument.presentationml.template": "potx",
        "vnd.openxmlformats-officedocument.wordprocessingml.document": "docx",
        "vnd.openxmlformats-officedocument.wordprocessingml.template": "dotx",
        "vnd.smaf": "mmf",
        "vnd.stardivision.calc": "sdc",
        "vnd.stardivision.chart": "sds",
        "vnd.stardivision.draw": "sda",
        "vnd.stardivision.impress": "sdd",
        "vnd.stardivision.math": [
            "sdf",
            "smf"
        ],
        "vnd.stardivision.writer": [
            "sdw",
            "vor"
        ],
        "vnd.stardivision.writer-global": "sgl",
        "vnd.sun.xml.calc": "sxc",
        "vnd.sun.xml.calc.template": "stc",
        "vnd.sun.xml.draw": "sxd",
        "vnd.sun.xml.draw.template": "std",
        "vnd.sun.xml.impress": "sxi",
        "vnd.sun.xml.impress.template": "sti",
        "vnd.sun.xml.math": "sxm",
        "vnd.sun.xml.writer": "sxw",
        "vnd.sun.xml.writer.global": "sxg",
        "vnd.sun.xml.writer.template": "stw",
        "vnd.symbian.install": [
            "sis",
            "sisx"
        ],
        "vnd.visio": [
            "vsd",
            "vst",
            "vss",
            "vsw"
        ],
        "vnd.wap.wbxml": "wbxml",
        "vnd.wap.wmlc": "wmlc",
        "vnd.wap.wmlscriptc": "wmlsc",
        "vnd.wordperfect": "wpd",
        "vnd.wordperfect5.1": "wp5",
        "x-123": "wk",
        "x-7z-compressed": "7z",
        "x-abiword": "abw",
        "x-apple-diskimage": "dmg",
        "x-bcpio": "bcpio",
        "x-bittorrent": "torrent",
        "x-cbr": [
            "cbr",
            "cba",
            "cbt",
            "cb7"
        ],
        "x-cbz": "cbz",
        "x-cdf": [
            "cdf",
            "cda"
        ],
        "x-cdlink": "vcd",
        "x-chess-pgn": "pgn",
        "x-cpio": "cpio",
        "x-csh": "csh",
        "x-debian-package": [
            "deb",
            "udeb"
        ],
        "x-director": [
            "dcr",
            "dir",
            "dxr",
            "cst",
            "cct",
            "cxt",
            "w3d",
            "fgd",
            "swa"
        ],
        "x-dms": "dms",
        "x-doom": "wad",
        "x-dvi": "dvi",
        "x-httpd-eruby": "rhtml",
        "x-font": "pcf.Z",
        "x-freemind": "mm",
        "x-gnumeric": "gnumeric",
        "x-go-sgf": "sgf",
        "x-graphing-calculator": "gcf",
        "x-gtar": [
            "gtar",
            "taz"
        ],
        "x-hdf": "hdf",
        "x-httpd-php": [
            "phtml",
            "pht",
            "php"
        ],
        "x-httpd-php-source": "phps",
        "x-httpd-php3": "php3",
        "x-httpd-php3-preprocessed": "php3p",
        "x-httpd-php4": "php4",
        "x-httpd-php5": "php5",
        "x-ica": "ica",
        "x-info": "info",
        "x-internet-signup": [
            "ins",
            "isp"
        ],
        "x-iphone": "iii",
        "x-iso9660-image": "iso",
        "x-java-jnlp-file": "jnlp",
        "x-jmol": "jmz",
        "x-killustrator": "kil",
        "x-koan": [
            "skp",
            "skd",
            "skt",
            "skm"
        ],
        "x-kpresenter": [
            "kpr",
            "kpt"
        ],
        "x-kword": [
            "kwd",
            "kwt"
        ],
        "x-latex": "latex",
        "x-lha": "lha",
        "x-lyx": "lyx",
        "x-lzh": "lzh",
        "x-lzx": "lzx",
        "x-maker": [
            "frm",
            "maker",
            "frame",
            "fm",
            "fb",
            "book",
            "fbdoc"
        ],
        "x-ms-wmd": "wmd",
        "x-ms-wmz": "wmz",
        "x-msdos-program": [
            "com",
            "exe",
            "bat",
            "dll"
        ],
        "x-msi": "msi",
        "x-netcdf": [
            "nc",
            "cdf"
        ],
        "x-ns-proxy-autoconfig": [
            "pac",
            "dat"
        ],
        "x-nwc": "nwc",
        "x-object": "o",
        "x-oz-application": "oza",
        "x-pkcs7-certreqresp": "p7r",
        "x-python-code": [
            "pyc",
            "pyo"
        ],
        "x-qgis": [
            "qgs",
            "shp",
            "shx"
        ],
        "x-quicktimeplayer": "qtl",
        "x-redhat-package-manager": "rpm",
        "x-ruby": "rb",
        "x-sh": "sh",
        "x-shar": "shar",
        "x-shockwave-flash": [
            "swf",
            "swfl"
        ],
        "x-silverlight": "scr",
        "x-stuffit": "sit",
        "x-sv4cpio": "sv4cpio",
        "x-sv4crc": "sv4crc",
        "x-tar": "tar",
        "x-tcl": "tcl",
        "x-tex-gf": "gf",
        "x-tex-pk": "pk",
        "x-texinfo": [
            "texinfo",
            "texi"
        ],
        "x-trash": [
            "~",
            "%",
            "bak",
            "old",
            "sik"
        ],
        "x-troff": [
            "t",
            "tr",
            "roff"
        ],
        "x-troff-man": "man",
        "x-troff-me": "me",
        "x-troff-ms": "ms",
        "x-ustar": "ustar",
        "x-wais-source": "src",
        "x-wingz": "wz",
        "x-x509-ca-cert": [
            "crt",
            "der",
            "cer"
        ],
        "x-xcf": "xcf",
        "x-xfig": "fig",
        "x-xpinstall": "xpi",
        "applixware": "aw",
        "atomsvc+xml": "atomsvc",
        "ccxml+xml": "ccxml",
        "cdmi-capability": "cdmia",
        "cdmi-container": "cdmic",
        "cdmi-domain": "cdmid",
        "cdmi-object": "cdmio",
        "cdmi-queue": "cdmiq",
        "docbook+xml": "dbk",
        "dssc+der": "dssc",
        "dssc+xml": "xdssc",
        "emma+xml": "emma",
        "epub+zip": "epub",
        "exi": "exi",
        "font-tdpfr": "pfr",
        "gml+xml": "gml",
        "gpx+xml": "gpx",
        "gxf": "gxf",
        "hyperstudio": "stk",
        "inkml+xml": [
            "ink",
            "inkml"
        ],
        "ipfix": "ipfix",
        "json": "json",
        "jsonml+json": "jsonml",
        "lost+xml": "lostxml",
        "mads+xml": "mads",
        "marc": "mrc",
        "marcxml+xml": "mrcx",
        "mathml+xml": "mathml",
        "mbox": "mbox",
        "mediaservercontrol+xml": "mscml",
        "metalink+xml": "metalink",
        "metalink4+xml": "meta4",
        "mets+xml": "mets",
        "mods+xml": "mods",
        "mp21": [
            "m21",
            "mp21"
        ],
        "mp4": "mp4s",
        "oebps-package+xml": "opf",
        "omdoc+xml": "omdoc",
        "onenote": [
            "onetoc",
            "onetoc2",
            "onetmp",
            "onepkg"
        ],
        "oxps": "oxps",
        "patch-ops-error+xml": "xer",
        "pgp-encrypted": "pgp",
        "pkcs10": "p10",
        "pkcs7-mime": [
            "p7m",
            "p7c"
        ],
        "pkcs7-signature": "p7s",
        "pkcs8": "p8",
        "pkix-attr-cert": "ac",
        "pkix-crl": "crl",
        "pkix-pkipath": "pkipath",
        "pkixcmp": "pki",
        "pls+xml": "pls",
        "prs.cww": "cww",
        "pskc+xml": "pskcxml",
        "reginfo+xml": "rif",
        "relax-ng-compact-syntax": "rnc",
        "resource-lists+xml": "rl",
        "resource-lists-diff+xml": "rld",
        "rls-services+xml": "rs",
        "rpki-ghostbusters": "gbr",
        "rpki-manifest": "mft",
        "rpki-roa": "roa",
        "rsd+xml": "rsd",
        "sbml+xml": "sbml",
        "scvp-cv-request": "scq",
        "scvp-cv-response": "scs",
        "scvp-vp-request": "spq",
        "scvp-vp-response": "spp",
        "sdp": "sdp",
        "set-payment-initiation": "setpay",
        "set-registration-initiation": "setreg",
        "shf+xml": "shf",
        "sparql-query": "rq",
        "sparql-results+xml": "srx",
        "srgs": "gram",
        "srgs+xml": "grxml",
        "sru+xml": "sru",
        "ssdl+xml": "ssdl",
        "ssml+xml": "ssml",
        "tei+xml": [
            "tei",
            "teicorpus"
        ],
        "thraud+xml": "tfi",
        "timestamped-data": "tsd",
        "vnd.3gpp.pic-bw-large": "plb",
        "vnd.3gpp.pic-bw-small": "psb",
        "vnd.3gpp.pic-bw-var": "pvb",
        "vnd.3gpp2.tcap": "tcap",
        "vnd.3m.post-it-notes": "pwn",
        "vnd.accpac.simply.aso": "aso",
        "vnd.accpac.simply.imp": "imp",
        "vnd.acucobol": "acu",
        "vnd.acucorp": [
            "atc",
            "acutc"
        ],
        "vnd.adobe.air-application-installer-package+zip": "air",
        "vnd.adobe.formscentral.fcdt": "fcdt",
        "vnd.adobe.fxp": [
            "fxp",
            "fxpl"
        ],
        "vnd.adobe.xdp+xml": "xdp",
        "vnd.adobe.xfdf": "xfdf",
        "vnd.ahead.space": "ahead",
        "vnd.airzip.filesecure.azf": "azf",
        "vnd.airzip.filesecure.azs": "azs",
        "vnd.amazon.ebook": "azw",
        "vnd.americandynamics.acc": "acc",
        "vnd.amiga.ami": "ami",
        "vnd.anser-web-certificate-issue-initiation": "cii",
        "vnd.anser-web-funds-transfer-initiation": "fti",
        "vnd.antix.game-component": "atx",
        "vnd.apple.installer+xml": "mpkg",
        "vnd.apple.mpegurl": "m3u8",
        "vnd.aristanetworks.swi": "swi",
        "vnd.astraea-software.iota": "iota",
        "vnd.audiograph": "aep",
        "vnd.blueice.multipass": "mpm",
        "vnd.bmi": "bmi",
        "vnd.businessobjects": "rep",
        "vnd.chemdraw+xml": "cdxml",
        "vnd.chipnuts.karaoke-mmd": "mmd",
        "vnd.claymore": "cla",
        "vnd.cloanto.rp9": "rp9",
        "vnd.clonk.c4group": [
            "c4g",
            "c4d",
            "c4f",
            "c4p",
            "c4u"
        ],
        "vnd.cluetrust.cartomobile-config": "c11amc",
        "vnd.cluetrust.cartomobile-config-pkg": "c11amz",
        "vnd.commonspace": "csp",
        "vnd.contact.cmsg": "cdbcmsg",
        "vnd.cosmocaller": "cmc",
        "vnd.crick.clicker": "clkx",
        "vnd.crick.clicker.keyboard": "clkk",
        "vnd.crick.clicker.palette": "clkp",
        "vnd.crick.clicker.template": "clkt",
        "vnd.crick.clicker.wordbank": "clkw",
        "vnd.criticaltools.wbs+xml": "wbs",
        "vnd.ctc-posml": "pml",
        "vnd.cups-ppd": "ppd",
        "vnd.curl.car": "car",
        "vnd.curl.pcurl": "pcurl",
        "vnd.dart": "dart",
        "vnd.data-vision.rdz": "rdz",
        "vnd.dece.data": [
            "uvf",
            "uvvf",
            "uvd",
            "uvvd"
        ],
        "vnd.dece.ttml+xml": [
            "uvt",
            "uvvt"
        ],
        "vnd.dece.unspecified": [
            "uvx",
            "uvvx"
        ],
        "vnd.dece.zip": [
            "uvz",
            "uvvz"
        ],
        "vnd.denovo.fcselayout-link": "fe_launch",
        "vnd.dna": "dna",
        "vnd.dolby.mlp": "mlp",
        "vnd.dpgraph": "dpg",
        "vnd.dreamfactory": "dfac",
        "vnd.ds-keypoint": "kpxx",
        "vnd.dvb.ait": "ait",
        "vnd.dvb.service": "svc",
        "vnd.dynageo": "geo",
        "vnd.ecowin.chart": "mag",
        "vnd.enliven": "nml",
        "vnd.epson.esf": "esf",
        "vnd.epson.msf": "msf",
        "vnd.epson.quickanime": "qam",
        "vnd.epson.salt": "slt",
        "vnd.epson.ssf": "ssf",
        "vnd.eszigno3+xml": [
            "es3",
            "et3"
        ],
        "vnd.ezpix-album": "ez2",
        "vnd.ezpix-package": "ez3",
        "vnd.fdf": "fdf",
        "vnd.fdsn.mseed": "mseed",
        "vnd.fdsn.seed": [
            "seed",
            "dataless"
        ],
        "vnd.flographit": "gph",
        "vnd.fluxtime.clip": "ftc",
        "vnd.framemaker": [
            "fm",
            "frame",
            "maker",
            "book"
        ],
        "vnd.frogans.fnc": "fnc",
        "vnd.frogans.ltf": "ltf",
        "vnd.fsc.weblaunch": "fsc",
        "vnd.fujitsu.oasys": "oas",
        "vnd.fujitsu.oasys2": "oa2",
        "vnd.fujitsu.oasys3": "oa3",
        "vnd.fujitsu.oasysgp": "fg5",
        "vnd.fujitsu.oasysprs": "bh2",
        "vnd.fujixerox.ddd": "ddd",
        "vnd.fujixerox.docuworks": "xdw",
        "vnd.fujixerox.docuworks.binder": "xbd",
        "vnd.fuzzysheet": "fzs",
        "vnd.genomatix.tuxedo": "txd",
        "vnd.geogebra.file": "ggb",
        "vnd.geogebra.tool": "ggt",
        "vnd.geometry-explorer": [
            "gex",
            "gre"
        ],
        "vnd.geonext": "gxt",
        "vnd.geoplan": "g2w",
        "vnd.geospace": "g3w",
        "vnd.gmx": "gmx",
        "vnd.grafeq": [
            "gqf",
            "gqs"
        ],
        "vnd.groove-account": "gac",
        "vnd.groove-help": "ghf",
        "vnd.groove-identity-message": "gim",
        "vnd.groove-injector": "grv",
        "vnd.groove-tool-message": "gtm",
        "vnd.groove-tool-template": "tpl",
        "vnd.groove-vcard": "vcg",
        "vnd.hal+xml": "hal",
        "vnd.handheld-entertainment+xml": "zmm",
        "vnd.hbci": "hbci",
        "vnd.hhe.lesson-player": "les",
        "vnd.hp-hpgl": "hpgl",
        "vnd.hp-hpid": "hpid",
        "vnd.hp-hps": "hps",
        "vnd.hp-jlyt": "jlt",
        "vnd.hp-pcl": "pcl",
        "vnd.hp-pclxl": "pclxl",
        "vnd.hydrostatix.sof-data": "sfd-hdstx",
        "vnd.ibm.minipay": "mpy",
        "vnd.ibm.modcap": [
            "afp",
            "listafp",
            "list3820"
        ],
        "vnd.ibm.rights-management": "irm",
        "vnd.ibm.secure-container": "sc",
        "vnd.iccprofile": [
            "icc",
            "icm"
        ],
        "vnd.igloader": "igl",
        "vnd.immervision-ivp": "ivp",
        "vnd.immervision-ivu": "ivu",
        "vnd.insors.igm": "igm",
        "vnd.intercon.formnet": [
            "xpw",
            "xpx"
        ],
        "vnd.intergeo": "i2g",
        "vnd.intu.qbo": "qbo",
        "vnd.intu.qfx": "qfx",
        "vnd.ipunplugged.rcprofile": "rcprofile",
        "vnd.irepository.package+xml": "irp",
        "vnd.is-xpr": "xpr",
        "vnd.isac.fcs": "fcs",
        "vnd.jam": "jam",
        "vnd.jcp.javame.midlet-rms": "rms",
        "vnd.jisp": "jisp",
        "vnd.joost.joda-archive": "joda",
        "vnd.kahootz": [
            "ktz",
            "ktr"
        ],
        "vnd.kde.karbon": "karbon",
        "vnd.kde.kchart": "chrt",
        "vnd.kde.kformula": "kfo",
        "vnd.kde.kivio": "flw",
        "vnd.kde.kontour": "kon",
        "vnd.kde.kpresenter": [
            "kpr",
            "kpt"
        ],
        "vnd.kde.kspread": "ksp",
        "vnd.kde.kword": [
            "kwd",
            "kwt"
        ],
        "vnd.kenameaapp": "htke",
        "vnd.kidspiration": "kia",
        "vnd.kinar": [
            "kne",
            "knp"
        ],
        "vnd.koan": [
            "skp",
            "skd",
            "skt",
            "skm"
        ],
        "vnd.kodak-descriptor": "sse",
        "vnd.las.las+xml": "lasxml",
        "vnd.llamagraphics.life-balance.desktop": "lbd",
        "vnd.llamagraphics.life-balance.exchange+xml": "lbe",
        "vnd.lotus-1-2-3": "123",
        "vnd.lotus-approach": "apr",
        "vnd.lotus-freelance": "pre",
        "vnd.lotus-notes": "nsf",
        "vnd.lotus-organizer": "org",
        "vnd.lotus-screencam": "scm",
        "vnd.lotus-wordpro": "lwp",
        "vnd.macports.portpkg": "portpkg",
        "vnd.mcd": "mcd",
        "vnd.medcalcdata": "mc1",
        "vnd.mediastation.cdkey": "cdkey",
        "vnd.mfer": "mwf",
        "vnd.mfmp": "mfm",
        "vnd.micrografx.flo": "flo",
        "vnd.micrografx.igx": "igx",
        "vnd.mif": "mif",
        "vnd.mobius.daf": "daf",
        "vnd.mobius.dis": "dis",
        "vnd.mobius.mbk": "mbk",
        "vnd.mobius.mqy": "mqy",
        "vnd.mobius.msl": "msl",
        "vnd.mobius.plc": "plc",
        "vnd.mobius.txf": "txf",
        "vnd.mophun.application": "mpn",
        "vnd.mophun.certificate": "mpc",
        "vnd.ms-artgalry": "cil",
        "vnd.ms-cab-compressed": "cab",
        "vnd.ms-excel.addin.macroenabled.12": "xlam",
        "vnd.ms-excel.sheet.binary.macroenabled.12": "xlsb",
        "vnd.ms-excel.sheet.macroenabled.12": "xlsm",
        "vnd.ms-excel.template.macroenabled.12": "xltm",
        "vnd.ms-fontobject": "eot",
        "vnd.ms-htmlhelp": "chm",
        "vnd.ms-ims": "ims",
        "vnd.ms-lrm": "lrm",
        "vnd.ms-officetheme": "thmx",
        "vnd.ms-powerpoint.addin.macroenabled.12": "ppam",
        "vnd.ms-powerpoint.presentation.macroenabled.12": "pptm",
        "vnd.ms-powerpoint.slide.macroenabled.12": "sldm",
        "vnd.ms-powerpoint.slideshow.macroenabled.12": "ppsm",
        "vnd.ms-powerpoint.template.macroenabled.12": "potm",
        "vnd.ms-project": [
            "mpp",
            "mpt"
        ],
        "vnd.ms-word.document.macroenabled.12": "docm",
        "vnd.ms-word.template.macroenabled.12": "dotm",
        "vnd.ms-works": [
            "wps",
            "wks",
            "wcm",
            "wdb"
        ],
        "vnd.ms-wpl": "wpl",
        "vnd.ms-xpsdocument": "xps",
        "vnd.mseq": "mseq",
        "vnd.musician": "mus",
        "vnd.muvee.style": "msty",
        "vnd.mynfc": "taglet",
        "vnd.neurolanguage.nlu": "nlu",
        "vnd.nitf": [
            "ntf",
            "nitf"
        ],
        "vnd.noblenet-directory": "nnd",
        "vnd.noblenet-sealer": "nns",
        "vnd.noblenet-web": "nnw",
        "vnd.nokia.n-gage.data": "ngdat",
        "vnd.nokia.n-gage.symbian.install": "n-gage",
        "vnd.nokia.radio-preset": "rpst",
        "vnd.nokia.radio-presets": "rpss",
        "vnd.novadigm.edm": "edm",
        "vnd.novadigm.edx": "edx",
        "vnd.novadigm.ext": "ext",
        "vnd.oasis.opendocument.chart-template": "otc",
        "vnd.oasis.opendocument.formula-template": "odft",
        "vnd.oasis.opendocument.image-template": "oti",
        "vnd.olpc-sugar": "xo",
        "vnd.oma.dd2+xml": "dd2",
        "vnd.openofficeorg.extension": "oxt",
        "vnd.openxmlformats-officedocument.presentationml.slide": "sldx",
        "vnd.osgeo.mapguide.package": "mgp",
        "vnd.osgi.dp": "dp",
        "vnd.osgi.subsystem": "esa",
        "vnd.palm": [
            "pdb",
            "pqa",
            "oprc"
        ],
        "vnd.pawaafile": "paw",
        "vnd.pg.format": "str",
        "vnd.pg.osasli": "ei6",
        "vnd.picsel": "efif",
        "vnd.pmi.widget": "wg",
        "vnd.pocketlearn": "plf",
        "vnd.powerbuilder6": "pbd",
        "vnd.previewsystems.box": "box",
        "vnd.proteus.magazine": "mgz",
        "vnd.publishare-delta-tree": "qps",
        "vnd.pvi.ptid1": "ptid",
        "vnd.quark.quarkxpress": [
            "qxd",
            "qxt",
            "qwd",
            "qwt",
            "qxl",
            "qxb"
        ],
        "vnd.realvnc.bed": "bed",
        "vnd.recordare.musicxml": "mxl",
        "vnd.recordare.musicxml+xml": "musicxml",
        "vnd.rig.cryptonote": "cryptonote",
        "vnd.rn-realmedia": "rm",
        "vnd.rn-realmedia-vbr": "rmvb",
        "vnd.route66.link66+xml": "link66",
        "vnd.sailingtracker.track": "st",
        "vnd.seemail": "see",
        "vnd.sema": "sema",
        "vnd.semd": "semd",
        "vnd.semf": "semf",
        "vnd.shana.informed.formdata": "ifm",
        "vnd.shana.informed.formtemplate": "itp",
        "vnd.shana.informed.interchange": "iif",
        "vnd.shana.informed.package": "ipk",
        "vnd.simtech-mindmapper": [
            "twd",
            "twds"
        ],
        "vnd.smart.teacher": "teacher",
        "vnd.solent.sdkm+xml": [
            "sdkm",
            "sdkd"
        ],
        "vnd.spotfire.dxp": "dxp",
        "vnd.spotfire.sfs": "sfs",
        "vnd.stepmania.package": "smzip",
        "vnd.stepmania.stepchart": "sm",
        "vnd.sus-calendar": [
            "sus",
            "susp"
        ],
        "vnd.svd": "svd",
        "vnd.syncml+xml": "xsm",
        "vnd.syncml.dm+wbxml": "bdm",
        "vnd.syncml.dm+xml": "xdm",
        "vnd.tao.intent-module-archive": "tao",
        "vnd.tcpdump.pcap": [
            "pcap",
            "cap",
            "dmp"
        ],
        "vnd.tmobile-livetv": "tmo",
        "vnd.trid.tpt": "tpt",
        "vnd.triscape.mxs": "mxs",
        "vnd.trueapp": "tra",
        "vnd.ufdl": [
            "ufd",
            "ufdl"
        ],
        "vnd.uiq.theme": "utz",
        "vnd.umajin": "umj",
        "vnd.unity": "unityweb",
        "vnd.uoml+xml": "uoml",
        "vnd.vcx": "vcx",
        "vnd.visionary": "vis",
        "vnd.vsf": "vsf",
        "vnd.webturbo": "wtb",
        "vnd.wolfram.player": "nbp",
        "vnd.wqd": "wqd",
        "vnd.wt.stf": "stf",
        "vnd.xara": "xar",
        "vnd.xfdl": "xfdl",
        "vnd.yamaha.hv-dic": "hvd",
        "vnd.yamaha.hv-script": "hvs",
        "vnd.yamaha.hv-voice": "hvp",
        "vnd.yamaha.openscoreformat": "osf",
        "vnd.yamaha.openscoreformat.osfpvg+xml": "osfpvg",
        "vnd.yamaha.smaf-audio": "saf",
        "vnd.yamaha.smaf-phrase": "spf",
        "vnd.yellowriver-custom-menu": "cmp",
        "vnd.zul": [
            "zir",
            "zirz"
        ],
        "vnd.zzazz.deck+xml": "zaz",
        "voicexml+xml": "vxml",
        "widget": "wgt",
        "winhlp": "hlp",
        "wsdl+xml": "wsdl",
        "wspolicy+xml": "wspolicy",
        "x-ace-compressed": "ace",
        "x-authorware-bin": [
            "aab",
            "x32",
            "u32",
            "vox"
        ],
        "x-authorware-map": "aam",
        "x-authorware-seg": "aas",
        "x-blorb": [
            "blb",
            "blorb"
        ],
        "x-bzip": "bz",
        "x-bzip2": [
            "bz2",
            "boz"
        ],
        "x-cfs-compressed": "cfs",
        "x-chat": "chat",
        "x-conference": "nsc",
        "x-dgc-compressed": "dgc",
        "x-dtbncx+xml": "ncx",
        "x-dtbook+xml": "dtb",
        "x-dtbresource+xml": "res",
        "x-eva": "eva",
        "x-font-bdf": "bdf",
        "x-font-ghostscript": "gsf",
        "x-font-linux-psf": "psf",
        "x-font-otf": "otf",
        "x-font-pcf": "pcf",
        "x-font-snf": "snf",
        "x-font-ttf": [
            "ttf",
            "ttc"
        ],
        "x-font-type1": [
            "pfa",
            "pfb",
            "pfm",
            "afm"
        ],
        "x-font-woff": "woff",
        "x-freearc": "arc",
        "x-gca-compressed": "gca",
        "x-glulx": "ulx",
        "x-gramps-xml": "gramps",
        "x-install-instructions": "install",
        "x-lzh-compressed": [
            "lzh",
            "lha"
        ],
        "x-mie": "mie",
        "x-mobipocket-ebook": [
            "prc",
            "mobi"
        ],
        "x-ms-application": "application",
        "x-ms-shortcut": "lnk",
        "x-ms-xbap": "xbap",
        "x-msbinder": "obd",
        "x-mscardfile": "crd",
        "x-msclip": "clp",
        "x-msdownload": [
            "exe",
            "dll",
            "com",
            "bat",
            "msi"
        ],
        "x-msmediaview": [
            "mvb",
            "m13",
            "m14"
        ],
        "x-msmetafile": [
            "wmf",
            "wmz",
            "emf",
            "emz"
        ],
        "x-msmoney": "mny",
        "x-mspublisher": "pub",
        "x-msschedule": "scd",
        "x-msterminal": "trm",
        "x-mswrite": "wri",
        "x-nzb": "nzb",
        "x-pkcs12": [
            "p12",
            "pfx"
        ],
        "x-pkcs7-certificates": [
            "p7b",
            "spc"
        ],
        "x-research-info-systems": "ris",
        "x-silverlight-app": "xap",
        "x-sql": "sql",
        "x-stuffitx": "sitx",
        "x-subrip": "srt",
        "x-t3vm-image": "t3",
        "x-tads": "gam",
        "x-tex": "tex",
        "x-tex-tfm": "tfm",
        "x-tgif": "obj",
        "x-xliff+xml": "xlf",
        "x-xz": "xz",
        "x-zmachine": [
            "z1",
            "z2",
            "z3",
            "z4",
            "z5",
            "z6",
            "z7",
            "z8"
        ],
        "xaml+xml": "xaml",
        "xcap-diff+xml": "xdf",
        "xenc+xml": "xenc",
        "xml-dtd": "dtd",
        "xop+xml": "xop",
        "xproc+xml": "xpl",
        "xslt+xml": "xslt",
        "xv+xml": [
            "mxml",
            "xhvml",
            "xvml",
            "xvm"
        ],
        "yang": "yang",
        "yin+xml": "yin",
        "envoy": "evy",
        "fractals": "fif",
        "internet-property-stream": "acx",
        "olescript": "axs",
        "vnd.ms-outlook": "msg",
        "vnd.ms-pkicertstore": "sst",
        "x-compress": "z",
        "x-compressed": "tgz",
        "x-gzip": "gz",
        "x-perfmon": [
            "pma",
            "pmc",
            "pml",
            "pmr",
            "pmw"
        ],
        "x-pkcs7-mime": [
            "p7c",
            "p7m"
        ],
        "ynd.ms-pkipko": "pko"
    },
    "audio": {
        "amr": "amr",
        "amr-wb": "awb",
        "annodex": "axa",
        "basic": [
            "au",
            "snd"
        ],
        "flac": "flac",
        "midi": [
            "mid",
            "midi",
            "kar",
            "rmi"
        ],
        "mpeg": [
            "mpga",
            "mpega",
            "mp2",
            "mp3",
            "m4a",
            "mp2a",
            "m2a",
            "m3a"
        ],
        "mpegurl": "m3u",
        "ogg": [
            "oga",
            "ogg",
            "spx"
        ],
        "prs.sid": "sid",
        "x-aiff": [
            "aif",
            "aiff",
            "aifc"
        ],
        "x-gsm": "gsm",
        "x-ms-wma": "wma",
        "x-ms-wax": "wax",
        "x-pn-realaudio": "ram",
        "x-realaudio": "ra",
        "x-sd2": "sd2",
        "x-wav": "wav",
        "adpcm": "adp",
        "mp4": "mp4a",
        "s3m": "s3m",
        "silk": "sil",
        "vnd.dece.audio": [
            "uva",
            "uvva"
        ],
        "vnd.digital-winds": "eol",
        "vnd.dra": "dra",
        "vnd.dts": "dts",
        "vnd.dts.hd": "dtshd",
        "vnd.lucent.voice": "lvp",
        "vnd.ms-playready.media.pya": "pya",
        "vnd.nuera.ecelp4800": "ecelp4800",
        "vnd.nuera.ecelp7470": "ecelp7470",
        "vnd.nuera.ecelp9600": "ecelp9600",
        "vnd.rip": "rip",
        "webm": "weba",
        "x-aac": "aac",
        "x-caf": "caf",
        "x-matroska": "mka",
        "x-pn-realaudio-plugin": "rmp",
        "xm": "xm",
        "mid": [
            "mid",
            "rmi"
        ]
    },
    "chemical": {
        "x-alchemy": "alc",
        "x-cache": [
            "cac",
            "cache"
        ],
        "x-cache-csf": "csf",
        "x-cactvs-binary": [
            "cbin",
            "cascii",
            "ctab"
        ],
        "x-cdx": "cdx",
        "x-chem3d": "c3d",
        "x-cif": "cif",
        "x-cmdf": "cmdf",
        "x-cml": "cml",
        "x-compass": "cpa",
        "x-crossfire": "bsd",
        "x-csml": [
            "csml",
            "csm"
        ],
        "x-ctx": "ctx",
        "x-cxf": [
            "cxf",
            "cef"
        ],
        "x-embl-dl-nucleotide": [
            "emb",
            "embl"
        ],
        "x-gamess-input": [
            "inp",
            "gam",
            "gamin"
        ],
        "x-gaussian-checkpoint": [
            "fch",
            "fchk"
        ],
        "x-gaussian-cube": "cub",
        "x-gaussian-input": [
            "gau",
            "gjc",
            "gjf"
        ],
        "x-gaussian-log": "gal",
        "x-gcg8-sequence": "gcg",
        "x-genbank": "gen",
        "x-hin": "hin",
        "x-isostar": [
            "istr",
            "ist"
        ],
        "x-jcamp-dx": [
            "jdx",
            "dx"
        ],
        "x-kinemage": "kin",
        "x-macmolecule": "mcm",
        "x-macromodel-input": [
            "mmd",
            "mmod"
        ],
        "x-mdl-molfile": "mol",
        "x-mdl-rdfile": "rd",
        "x-mdl-rxnfile": "rxn",
        "x-mdl-sdfile": [
            "sd",
            "sdf"
        ],
        "x-mdl-tgf": "tgf",
        "x-mmcif": "mcif",
        "x-mol2": "mol2",
        "x-molconn-Z": "b",
        "x-mopac-graph": "gpt",
        "x-mopac-input": [
            "mop",
            "mopcrt",
            "mpc",
            "zmt"
        ],
        "x-mopac-out": "moo",
        "x-ncbi-asn1": "asn",
        "x-ncbi-asn1-ascii": [
            "prt",
            "ent"
        ],
        "x-ncbi-asn1-binary": [
            "val",
            "aso"
        ],
        "x-pdb": [
            "pdb",
            "ent"
        ],
        "x-rosdal": "ros",
        "x-swissprot": "sw",
        "x-vamas-iso14976": "vms",
        "x-vmd": "vmd",
        "x-xtel": "xtel",
        "x-xyz": "xyz"
    },
    "image": {
        "gif": "gif",
        "ief": "ief",
        "jpeg": [
            "jpeg",
            "jpg",
            "jpe"
        ],
        "pcx": "pcx",
        "png": "png",
        "svg+xml": [
            "svg",
            "svgz"
        ],
        "tiff": [
            "tiff",
            "tif"
        ],
        "vnd.djvu": [
            "djvu",
            "djv"
        ],
        "vnd.wap.wbmp": "wbmp",
        "x-canon-cr2": "cr2",
        "x-canon-crw": "crw",
        "x-cmu-raster": "ras",
        "x-coreldraw": "cdr",
        "x-coreldrawpattern": "pat",
        "x-coreldrawtemplate": "cdt",
        "x-corelphotopaint": "cpt",
        "x-epson-erf": "erf",
        "x-icon": "ico",
        "x-jg": "art",
        "x-jng": "jng",
        "x-nikon-nef": "nef",
        "x-olympus-orf": "orf",
        "x-photoshop": "psd",
        "x-portable-anymap": "pnm",
        "x-portable-bitmap": "pbm",
        "x-portable-graymap": "pgm",
        "x-portable-pixmap": "ppm",
        "x-rgb": "rgb",
        "x-xbitmap": "xbm",
        "x-xpixmap": "xpm",
        "x-xwindowdump": "xwd",
        "bmp": "bmp",
        "cgm": "cgm",
        "g3fax": "g3",
        "ktx": "ktx",
        "prs.btif": "btif",
        "sgi": "sgi",
        "vnd.dece.graphic": [
            "uvi",
            "uvvi",
            "uvg",
            "uvvg"
        ],
        "vnd.dwg": "dwg",
        "vnd.dxf": "dxf",
        "vnd.fastbidsheet": "fbs",
        "vnd.fpx": "fpx",
        "vnd.fst": "fst",
        "vnd.fujixerox.edmics-mmr": "mmr",
        "vnd.fujixerox.edmics-rlc": "rlc",
        "vnd.ms-modi": "mdi",
        "vnd.ms-photo": "wdp",
        "vnd.net-fpx": "npx",
        "vnd.xiff": "xif",
        "webp": "webp",
        "x-3ds": "3ds",
        "x-cmx": "cmx",
        "x-freehand": [
            "fh",
            "fhc",
            "fh4",
            "fh5",
            "fh7"
        ],
        "x-pict": [
            "pic",
            "pct"
        ],
        "x-tga": "tga",
        "cis-cod": "cod",
        "pipeg": "jfif"
    },
    "message": {
        "rfc822": [
            "eml",
            "mime",
            "mht",
            "mhtml",
            "nws"
        ]
    },
    "model": {
        "iges": [
            "igs",
            "iges"
        ],
        "mesh": [
            "msh",
            "mesh",
            "silo"
        ],
        "vrml": [
            "wrl",
            "vrml"
        ],
        "x3d+vrml": [
            "x3dv",
            "x3dvz"
        ],
        "x3d+xml": [
            "x3d",
            "x3dz"
        ],
        "x3d+binary": [
            "x3db",
            "x3dbz"
        ],
        "vnd.collada+xml": "dae",
        "vnd.dwf": "dwf",
        "vnd.gdl": "gdl",
        "vnd.gtw": "gtw",
        "vnd.mts": "mts",
        "vnd.vtu": "vtu"
    },
    "text": {
        "cache-manifest": [
            "manifest",
            "appcache"
        ],
        "calendar": [
            "ics",
            "icz",
            "ifb"
        ],
        "css": "css",
        "csv": "csv",
        "h323": "323",
        "html": [
            "html",
            "htm",
            "shtml",
            "stm"
        ],
        "iuls": "uls",
        "mathml": "mml",
        "plain": [
            "txt",
            "text",
            "brf",
            "conf",
            "def",
            "list",
            "log",
            "in",
            "bas"
        ],
        "richtext": "rtx",
        "scriptlet": [
            "sct",
            "wsc"
        ],
        "texmacs": [
            "tm",
            "ts"
        ],
        "tab-separated-values": "tsv",
        "vnd.sun.j2me.app-descriptor": "jad",
        "vnd.wap.wml": "wml",
        "vnd.wap.wmlscript": "wmls",
        "x-bibtex": "bib",
        "x-boo": "boo",
        "x-c++hdr": [
            "h++",
            "hpp",
            "hxx",
            "hh"
        ],
        "x-c++src": [
            "c++",
            "cpp",
            "cxx",
            "cc"
        ],
        "x-component": "htc",
        "x-dsrc": "d",
        "x-diff": [
            "diff",
            "patch"
        ],
        "x-haskell": "hs",
        "x-java": "java",
        "x-literate-haskell": "lhs",
        "x-moc": "moc",
        "x-pascal": [
            "p",
            "pas"
        ],
        "x-pcs-gcd": "gcd",
        "x-perl": [
            "pl",
            "pm"
        ],
        "x-python": "py",
        "x-scala": "scala",
        "x-setext": "etx",
        "x-tcl": [
            "tcl",
            "tk"
        ],
        "x-tex": [
            "tex",
            "ltx",
            "sty",
            "cls"
        ],
        "x-vcalendar": "vcs",
        "x-vcard": "vcf",
        "n3": "n3",
        "prs.lines.tag": "dsc",
        "sgml": [
            "sgml",
            "sgm"
        ],
        "troff": [
            "t",
            "tr",
            "roff",
            "man",
            "me",
            "ms"
        ],
        "turtle": "ttl",
        "uri-list": [
            "uri",
            "uris",
            "urls"
        ],
        "vcard": "vcard",
        "vnd.curl": "curl",
        "vnd.curl.dcurl": "dcurl",
        "vnd.curl.scurl": "scurl",
        "vnd.curl.mcurl": "mcurl",
        "vnd.dvb.subtitle": "sub",
        "vnd.fly": "fly",
        "vnd.fmi.flexstor": "flx",
        "vnd.graphviz": "gv",
        "vnd.in3d.3dml": "3dml",
        "vnd.in3d.spot": "spot",
        "x-asm": [
            "s",
            "asm"
        ],
        "x-c": [
            "c",
            "cc",
            "cxx",
            "cpp",
            "h",
            "hh",
            "dic"
        ],
        "x-fortran": [
            "f",
            "for",
            "f77",
            "f90"
        ],
        "x-opml": "opml",
        "x-nfo": "nfo",
        "x-sfv": "sfv",
        "x-uuencode": "uu",
        "webviewhtml": "htt"
    },
    "video": {
        "avif": ".avif",
        "3gpp": "3gp",
        "annodex": "axv",
        "dl": "dl",
        "dv": [
            "dif",
            "dv"
        ],
        "fli": "fli",
        "gl": "gl",
        "mpeg": [
            "mpeg",
            "mpg",
            "mpe",
            "m1v",
            "m2v",
            "mp2",
            "mpa",
            "mpv2"
        ],
        "mp4": [
            "mp4",
            "mp4v",
            "mpg4"
        ],
        "quicktime": [
            "qt",
            "mov"
        ],
        "ogg": "ogv",
        "vnd.mpegurl": [
            "mxu",
            "m4u"
        ],
        "x-flv": "flv",
        "x-la-asf": [
            "lsf",
            "lsx"
        ],
        "x-mng": "mng",
        "x-ms-asf": [
            "asf",
            "asx",
            "asr"
        ],
        "x-ms-wm": "wm",
        "x-ms-wmv": "wmv",
        "x-ms-wmx": "wmx",
        "x-ms-wvx": "wvx",
        "x-msvideo": "avi",
        "x-sgi-movie": "movie",
        "x-matroska": [
            "mpv",
            "mkv",
            "mk3d",
            "mks"
        ],
        "3gpp2": "3g2",
        "h261": "h261",
        "h263": "h263",
        "h264": "h264",
        "jpeg": "jpgv",
        "jpm": [
            "jpm",
            "jpgm"
        ],
        "mj2": [
            "mj2",
            "mjp2"
        ],
        "vnd.dece.hd": [
            "uvh",
            "uvvh"
        ],
        "vnd.dece.mobile": [
            "uvm",
            "uvvm"
        ],
        "vnd.dece.pd": [
            "uvp",
            "uvvp"
        ],
        "vnd.dece.sd": [
            "uvs",
            "uvvs"
        ],
        "vnd.dece.video": [
            "uvv",
            "uvvv"
        ],
        "vnd.dvb.file": "dvb",
        "vnd.fvt": "fvt",
        "vnd.ms-playready.media.pyv": "pyv",
        "vnd.uvvu.mp4": [
            "uvu",
            "uvvu"
        ],
        "vnd.vivo": "viv",
        "webm": "webm",
        "x-f4v": "f4v",
        "x-m4v": "m4v",
        "x-ms-vob": "vob",
        "x-smv": "smv"
    },
    "x-conference": {
        "x-cooltalk": "ice"
    },
    "x-world": {
        "x-vrml": [
            "vrm",
            "vrml",
            "wrl",
            "flr",
            "wrz",
            "xaf",
            "xof"
        ]
    }
};
const mimeTypes = (()=>{
    const mimeTypes = {};
    for(const type in table)// eslint-disable-next-line no-prototype-builtins
    if (table.hasOwnProperty(type)) {
        for(const subtype in table[type])// eslint-disable-next-line no-prototype-builtins
        if (table[type].hasOwnProperty(subtype)) {
            const value = table[type][subtype];
            if (typeof value == "string") mimeTypes[value] = type + "/" + subtype;
            else for(let indexMimeType = 0; indexMimeType < value.length; indexMimeType++)mimeTypes[value[indexMimeType]] = type + "/" + subtype;
        }
    }
    return mimeTypes;
})();
function getMimeType(filename) {
    return filename && mimeTypes[filename.split(".").pop().toLowerCase()] || (0, _defaultMimeTypeJs.getMimeType)();
}

},{"./default-mime-type.js":"8u2Mv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8u2Mv":[function(require,module,exports) {
/*
 Copyright (c) 2022 Gildas Lormeau. All rights reserved.

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions are met:

 1. Redistributions of source code must retain the above copyright notice,
 this list of conditions and the following disclaimer.

 2. Redistributions in binary form must reproduce the above copyright 
 notice, this list of conditions and the following disclaimer in 
 the documentation and/or other materials provided with the distribution.

 3. The names of the authors may not be used to endorse or promote products
 derived from this software without specific prior written permission.

 THIS SOFTWARE IS PROVIDED ''AS IS'' AND ANY EXPRESSED OR IMPLIED WARRANTIES,
 INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
 FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL JCRAFT,
 INC. OR ANY CONTRIBUTORS TO THIS SOFTWARE BE LIABLE FOR ANY DIRECT, INDIRECT,
 INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA,
 OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
 LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
 EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mimeTypes", ()=>mimeTypes);
parcelHelpers.export(exports, "getMimeType", ()=>getMimeType);
const mimeTypes = {};
function getMimeType() {
    return "application/octet-stream";
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"36tHD":[function(require,module,exports) {
/*
 Copyright (c) 2022 Gildas Lormeau. All rights reserved.

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions are met:

 1. Redistributions of source code must retain the above copyright notice,
 this list of conditions and the following disclaimer.

 2. Redistributions in binary form must reproduce the above copyright 
 notice, this list of conditions and the following disclaimer in 
 the documentation and/or other materials provided with the distribution.

 3. The names of the authors may not be used to endorse or promote products
 derived from this software without specific prior written permission.

 THIS SOFTWARE IS PROVIDED ''AS IS'' AND ANY EXPRESSED OR IMPLIED WARRANTIES,
 INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
 FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL JCRAFT,
 INC. OR ANY CONTRIBUTORS TO THIS SOFTWARE BE LIABLE FOR ANY DIRECT, INDIRECT,
 INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA,
 OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
 LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
 EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */ /* global setTimeout, clearTimeout */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "runWorker", ()=>runWorker);
parcelHelpers.export(exports, "terminateWorkers", ()=>terminateWorkers);
parcelHelpers.export(exports, "CODEC_DEFLATE", ()=>(0, _codecStreamJs.CODEC_DEFLATE));
parcelHelpers.export(exports, "CODEC_INFLATE", ()=>(0, _codecStreamJs.CODEC_INFLATE));
parcelHelpers.export(exports, "ERR_INVALID_SIGNATURE", ()=>(0, _codecStreamJs.ERR_INVALID_SIGNATURE));
parcelHelpers.export(exports, "ERR_INVALID_PASSWORD", ()=>(0, _codecStreamJs.ERR_INVALID_PASSWORD));
var _constantsJs = require("./constants.js");
var _codecStreamJs = require("./streams/codec-stream.js");
var _codecWorkerJs = require("./codec-worker.js");
let pool = [];
const pendingRequests = [];
let indexWorker = 0;
async function runWorker(stream, workerOptions) {
    const { options, config } = workerOptions;
    const { transferStreams, useWebWorkers, useCompressionStream, codecType, compressed, signed, encrypted } = options;
    const { workerScripts, maxWorkers, terminateWorkerTimeout } = config;
    workerOptions.transferStreams = transferStreams || transferStreams === (0, _constantsJs.UNDEFINED_VALUE);
    const streamCopy = !compressed && !signed && !encrypted && !workerOptions.transferStreams;
    workerOptions.useWebWorkers = !streamCopy && (useWebWorkers || useWebWorkers === (0, _constantsJs.UNDEFINED_VALUE) && config.useWebWorkers);
    workerOptions.scripts = workerOptions.useWebWorkers && workerScripts ? workerScripts[codecType] : [];
    options.useCompressionStream = useCompressionStream || useCompressionStream === (0, _constantsJs.UNDEFINED_VALUE) && config.useCompressionStream;
    let worker;
    const workerData = pool.find((workerData)=>!workerData.busy);
    if (workerData) {
        clearTerminateTimeout(workerData);
        worker = new (0, _codecWorkerJs.CodecWorker)(workerData, stream, workerOptions, onTaskFinished);
    } else if (pool.length < maxWorkers) {
        const workerData = {
            indexWorker
        };
        indexWorker++;
        pool.push(workerData);
        worker = new (0, _codecWorkerJs.CodecWorker)(workerData, stream, workerOptions, onTaskFinished);
    } else worker = await new Promise((resolve)=>pendingRequests.push({
            resolve,
            stream,
            workerOptions
        }));
    return worker.run();
    function onTaskFinished(workerData) {
        if (pendingRequests.length) {
            const [{ resolve, stream, workerOptions }] = pendingRequests.splice(0, 1);
            resolve(new (0, _codecWorkerJs.CodecWorker)(workerData, stream, workerOptions, onTaskFinished));
        } else if (workerData.worker) {
            clearTerminateTimeout(workerData);
            if (Number.isFinite(terminateWorkerTimeout) && terminateWorkerTimeout >= 0) workerData.terminateTimeout = setTimeout(()=>{
                pool = pool.filter((data)=>data != workerData);
                workerData.terminate();
            }, terminateWorkerTimeout);
        } else pool = pool.filter((data)=>data != workerData);
    }
}
function clearTerminateTimeout(workerData) {
    const { terminateTimeout } = workerData;
    if (terminateTimeout) {
        clearTimeout(terminateTimeout);
        workerData.terminateTimeout = null;
    }
}
function terminateWorkers() {
    pool.forEach((workerData)=>{
        clearTerminateTimeout(workerData);
        workerData.terminate();
    });
}

},{"./constants.js":"4V9hL","./streams/codec-stream.js":"2NYwS","./codec-worker.js":"bhC0r","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2NYwS":[function(require,module,exports) {
/*
 Copyright (c) 2022 Gildas Lormeau. All rights reserved.

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions are met:

 1. Redistributions of source code must retain the above copyright notice,
 this list of conditions and the following disclaimer.

 2. Redistributions in binary form must reproduce the above copyright 
 notice, this list of conditions and the following disclaimer in 
 the documentation and/or other materials provided with the distribution.

 3. The names of the authors may not be used to endorse or promote products
 derived from this software without specific prior written permission.

 THIS SOFTWARE IS PROVIDED ''AS IS'' AND ANY EXPRESSED OR IMPLIED WARRANTIES,
 INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
 FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL JCRAFT,
 INC. OR ANY CONTRIBUTORS TO THIS SOFTWARE BE LIABLE FOR ANY DIRECT, INDIRECT,
 INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA,
 OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
 LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
 EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */ /*
 * This program is based on JZlib 1.0.2 ymnk, JCraft,Inc.
 * JZlib is based on zlib-1.1.3, so all credit should go authors
 * Jean-loup Gailly(jloup@gzip.org) and Mark Adler(madler@alumni.caltech.edu)
 * and contributors of zlib.
 */ /* global TransformStream */ // deno-lint-ignore-file no-this-alias
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CODEC_DEFLATE", ()=>CODEC_DEFLATE);
parcelHelpers.export(exports, "CODEC_INFLATE", ()=>CODEC_INFLATE);
parcelHelpers.export(exports, "MESSAGE_EVENT_TYPE", ()=>MESSAGE_EVENT_TYPE);
parcelHelpers.export(exports, "MESSAGE_START", ()=>MESSAGE_START);
parcelHelpers.export(exports, "MESSAGE_PULL", ()=>MESSAGE_PULL);
parcelHelpers.export(exports, "MESSAGE_DATA", ()=>MESSAGE_DATA);
parcelHelpers.export(exports, "MESSAGE_ACK_DATA", ()=>MESSAGE_ACK_DATA);
parcelHelpers.export(exports, "MESSAGE_CLOSE", ()=>MESSAGE_CLOSE);
parcelHelpers.export(exports, "ERR_INVALID_PASSWORD", ()=>(0, _zipEntryStreamJs.ERR_INVALID_PASSWORD));
parcelHelpers.export(exports, "ERR_INVALID_SIGNATURE", ()=>(0, _zipEntryStreamJs.ERR_INVALID_SIGNATURE));
parcelHelpers.export(exports, "CodecStream", ()=>CodecStream);
var _zipEntryStreamJs = require("./zip-entry-stream.js");
const MESSAGE_EVENT_TYPE = "message";
const MESSAGE_START = "start";
const MESSAGE_PULL = "pull";
const MESSAGE_DATA = "data";
const MESSAGE_ACK_DATA = "ack";
const MESSAGE_CLOSE = "close";
const CODEC_DEFLATE = "deflate";
const CODEC_INFLATE = "inflate";
class CodecStream extends TransformStream {
    constructor(options, config){
        super({});
        const codec = this;
        const { codecType } = options;
        let Stream;
        if (codecType.startsWith(CODEC_DEFLATE)) Stream = (0, _zipEntryStreamJs.DeflateStream);
        else if (codecType.startsWith(CODEC_INFLATE)) Stream = (0, _zipEntryStreamJs.InflateStream);
        let size = 0;
        const stream = new Stream(options, config);
        const readable = super.readable;
        const transformStream = new TransformStream({
            transform (chunk, controller) {
                if (chunk && chunk.length) {
                    size += chunk.length;
                    controller.enqueue(chunk);
                }
            },
            flush () {
                const { signature } = stream;
                Object.assign(codec, {
                    signature,
                    size
                });
            }
        });
        Object.defineProperty(codec, "readable", {
            get () {
                return readable.pipeThrough(stream).pipeThrough(transformStream);
            }
        });
    }
}

},{"./zip-entry-stream.js":"4Rt1H","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4Rt1H":[function(require,module,exports) {
/*
 Copyright (c) 2022 Gildas Lormeau. All rights reserved.

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions are met:

 1. Redistributions of source code must retain the above copyright notice,
 this list of conditions and the following disclaimer.

 2. Redistributions in binary form must reproduce the above copyright 
 notice, this list of conditions and the following disclaimer in 
 the documentation and/or other materials provided with the distribution.

 3. The names of the authors may not be used to endorse or promote products
 derived from this software without specific prior written permission.

 THIS SOFTWARE IS PROVIDED ''AS IS'' AND ANY EXPRESSED OR IMPLIED WARRANTIES,
 INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
 FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL JCRAFT,
 INC. OR ANY CONTRIBUTORS TO THIS SOFTWARE BE LIABLE FOR ANY DIRECT, INDIRECT,
 INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA,
 OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
 LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
 EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */ /* global TransformStream */ // deno-lint-ignore-file no-this-alias
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DeflateStream", ()=>DeflateStream);
parcelHelpers.export(exports, "InflateStream", ()=>InflateStream);
parcelHelpers.export(exports, "ERR_INVALID_PASSWORD", ()=>(0, _commonCryptoJs.ERR_INVALID_PASSWORD));
parcelHelpers.export(exports, "ERR_INVALID_SIGNATURE", ()=>(0, _commonCryptoJs.ERR_INVALID_SIGNATURE));
var _crc32StreamJs = require("./crc32-stream.js");
var _aesCryptoStreamJs = require("./aes-crypto-stream.js");
var _zipCryptoStreamJs = require("./zip-crypto-stream.js");
var _commonCryptoJs = require("./common-crypto.js");
const COMPRESSION_FORMAT = "deflate-raw";
class DeflateStream extends TransformStream {
    constructor(options, { chunkSize, CompressionStream, CompressionStreamNative }){
        super({});
        const { compressed, encrypted, useCompressionStream, zipCrypto, signed, level } = options;
        const stream = this;
        let crc32Stream, encryptionStream;
        let readable = filterEmptyChunks(super.readable);
        if ((!encrypted || zipCrypto) && signed) {
            [readable, crc32Stream] = readable.tee();
            crc32Stream = pipeThrough(crc32Stream, new (0, _crc32StreamJs.Crc32Stream)());
        }
        if (compressed) readable = pipeThroughCommpressionStream(readable, useCompressionStream, {
            level,
            chunkSize
        }, CompressionStreamNative, CompressionStream);
        if (encrypted) {
            if (zipCrypto) readable = pipeThrough(readable, new (0, _zipCryptoStreamJs.ZipCryptoEncryptionStream)(options));
            else {
                encryptionStream = new (0, _aesCryptoStreamJs.AESEncryptionStream)(options);
                readable = pipeThrough(readable, encryptionStream);
            }
        }
        setReadable(stream, readable, async ()=>{
            let signature;
            if (encrypted && !zipCrypto) signature = encryptionStream.signature;
            if ((!encrypted || zipCrypto) && signed) {
                signature = await crc32Stream.getReader().read();
                signature = new DataView(signature.value.buffer).getUint32(0);
            }
            stream.signature = signature;
        });
    }
}
class InflateStream extends TransformStream {
    constructor(options, { chunkSize, DecompressionStream, DecompressionStreamNative }){
        super({});
        const { zipCrypto, encrypted, signed, signature, compressed, useCompressionStream } = options;
        let crc32Stream, decryptionStream;
        let readable = filterEmptyChunks(super.readable);
        if (encrypted) {
            if (zipCrypto) readable = pipeThrough(readable, new (0, _zipCryptoStreamJs.ZipCryptoDecryptionStream)(options));
            else {
                decryptionStream = new (0, _aesCryptoStreamJs.AESDecryptionStream)(options);
                readable = pipeThrough(readable, decryptionStream);
            }
        }
        if (compressed) readable = pipeThroughCommpressionStream(readable, useCompressionStream, {
            chunkSize
        }, DecompressionStreamNative, DecompressionStream);
        if ((!encrypted || zipCrypto) && signed) {
            [readable, crc32Stream] = readable.tee();
            crc32Stream = pipeThrough(crc32Stream, new (0, _crc32StreamJs.Crc32Stream)());
        }
        setReadable(this, readable, async ()=>{
            if ((!encrypted || zipCrypto) && signed) {
                const streamSignature = await crc32Stream.getReader().read();
                const dataViewSignature = new DataView(streamSignature.value.buffer);
                if (signature != dataViewSignature.getUint32(0, false)) throw new Error((0, _commonCryptoJs.ERR_INVALID_SIGNATURE));
            }
        });
    }
}
function filterEmptyChunks(readable) {
    return pipeThrough(readable, new TransformStream({
        transform (chunk, controller) {
            if (chunk && chunk.length) controller.enqueue(chunk);
        }
    }));
}
function setReadable(stream, readable, flush) {
    readable = pipeThrough(readable, new TransformStream({
        flush
    }));
    Object.defineProperty(stream, "readable", {
        get () {
            return readable;
        }
    });
}
function pipeThroughCommpressionStream(readable, useCompressionStream, options, CodecStreamNative, CodecStream) {
    try {
        const CompressionStream = useCompressionStream && CodecStreamNative ? CodecStreamNative : CodecStream;
        readable = pipeThrough(readable, new CompressionStream(COMPRESSION_FORMAT, options));
    } catch (error) {
        if (useCompressionStream) readable = pipeThrough(readable, new CodecStream(COMPRESSION_FORMAT, options));
        else throw error;
    }
    return readable;
}
function pipeThrough(readable, transformStream) {
    return readable.pipeThrough(transformStream);
}

},{"./crc32-stream.js":"4owXM","./aes-crypto-stream.js":"eVkg2","./zip-crypto-stream.js":"l0klA","./common-crypto.js":"fOx2I","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4owXM":[function(require,module,exports) {
/*
 Copyright (c) 2022 Gildas Lormeau. All rights reserved.

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions are met:

 1. Redistributions of source code must retain the above copyright notice,
 this list of conditions and the following disclaimer.

 2. Redistributions in binary form must reproduce the above copyright 
 notice, this list of conditions and the following disclaimer in 
 the documentation and/or other materials provided with the distribution.

 3. The names of the authors may not be used to endorse or promote products
 derived from this software without specific prior written permission.

 THIS SOFTWARE IS PROVIDED ''AS IS'' AND ANY EXPRESSED OR IMPLIED WARRANTIES,
 INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
 FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL JCRAFT,
 INC. OR ANY CONTRIBUTORS TO THIS SOFTWARE BE LIABLE FOR ANY DIRECT, INDIRECT,
 INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA,
 OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
 LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
 EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */ /* global TransformStream */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Crc32Stream", ()=>Crc32Stream);
var _crc32Js = require("./codecs/crc32.js");
class Crc32Stream extends TransformStream {
    constructor(){
        const crc32 = new (0, _crc32Js.Crc32)();
        super({
            transform (chunk) {
                crc32.append(chunk);
            },
            flush (controller) {
                const value = new Uint8Array(4);
                const dataView = new DataView(value.buffer);
                dataView.setUint32(0, crc32.get());
                controller.enqueue(value);
            }
        });
    }
}

},{"./codecs/crc32.js":"2Z8Tu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2Z8Tu":[function(require,module,exports) {
/*
 Copyright (c) 2022 Gildas Lormeau. All rights reserved.

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions are met:

 1. Redistributions of source code must retain the above copyright notice,
 this list of conditions and the following disclaimer.

 2. Redistributions in binary form must reproduce the above copyright 
 notice, this list of conditions and the following disclaimer in 
 the documentation and/or other materials provided with the distribution.

 3. The names of the authors may not be used to endorse or promote products
 derived from this software without specific prior written permission.

 THIS SOFTWARE IS PROVIDED ''AS IS'' AND ANY EXPRESSED OR IMPLIED WARRANTIES,
 INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
 FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL JCRAFT,
 INC. OR ANY CONTRIBUTORS TO THIS SOFTWARE BE LIABLE FOR ANY DIRECT, INDIRECT,
 INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA,
 OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
 LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
 EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Crc32", ()=>Crc32);
const table = [];
for(let i = 0; i < 256; i++){
    let t = i;
    for(let j = 0; j < 8; j++)if (t & 1) t = t >>> 1 ^ 0xEDB88320;
    else t = t >>> 1;
    table[i] = t;
}
class Crc32 {
    constructor(crc){
        this.crc = crc || -1;
    }
    append(data) {
        let crc = this.crc | 0;
        for(let offset = 0, length = data.length | 0; offset < length; offset++)crc = crc >>> 8 ^ table[(crc ^ data[offset]) & 0xFF];
        this.crc = crc;
    }
    get() {
        return ~this.crc;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eVkg2":[function(require,module,exports) {
/*
 Copyright (c) 2022 Gildas Lormeau. All rights reserved.

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions are met:

 1. Redistributions of source code must retain the above copyright notice,
 this list of conditions and the following disclaimer.

 2. Redistributions in binary form must reproduce the above copyright 
 notice, this list of conditions and the following disclaimer in 
 the documentation and/or other materials provided with the distribution.

 3. The names of the authors may not be used to endorse or promote products
 derived from this software without specific prior written permission.

 THIS SOFTWARE IS PROVIDED ''AS IS'' AND ANY EXPRESSED OR IMPLIED WARRANTIES,
 INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
 FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL JCRAFT,
 INC. OR ANY CONTRIBUTORS TO THIS SOFTWARE BE LIABLE FOR ANY DIRECT, INDIRECT,
 INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA,
 OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
 LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
 EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */ /* global crypto, TransformStream */ // deno-lint-ignore-file no-this-alias
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AESDecryptionStream", ()=>AESDecryptionStream);
parcelHelpers.export(exports, "AESEncryptionStream", ()=>AESEncryptionStream);
parcelHelpers.export(exports, "ERR_INVALID_PASSWORD", ()=>(0, _commonCryptoJs.ERR_INVALID_PASSWORD));
var _encodeTextJs = require("./../util/encode-text.js");
var _sjclJs = require("./codecs/sjcl.js");
var _commonCryptoJs = require("./common-crypto.js");
const BLOCK_LENGTH = 16;
const RAW_FORMAT = "raw";
const PBKDF2_ALGORITHM = {
    name: "PBKDF2"
};
const HASH_ALGORITHM = {
    name: "HMAC"
};
const HASH_FUNCTION = "SHA-1";
const BASE_KEY_ALGORITHM = Object.assign({
    hash: HASH_ALGORITHM
}, PBKDF2_ALGORITHM);
const DERIVED_BITS_ALGORITHM = Object.assign({
    iterations: 1000,
    hash: {
        name: HASH_FUNCTION
    }
}, PBKDF2_ALGORITHM);
const DERIVED_BITS_USAGE = [
    "deriveBits"
];
const SALT_LENGTH = [
    8,
    12,
    16
];
const KEY_LENGTH = [
    16,
    24,
    32
];
const SIGNATURE_LENGTH = 10;
const COUNTER_DEFAULT_VALUE = [
    0,
    0,
    0,
    0
];
const UNDEFINED_TYPE = "undefined";
const FUNCTION_TYPE = "function";
// deno-lint-ignore valid-typeof
const CRYPTO_API_SUPPORTED = typeof crypto != UNDEFINED_TYPE;
const subtle = CRYPTO_API_SUPPORTED && crypto.subtle;
const SUBTLE_API_SUPPORTED = CRYPTO_API_SUPPORTED && typeof subtle != UNDEFINED_TYPE;
const IMPORT_KEY_SUPPORTED = CRYPTO_API_SUPPORTED && SUBTLE_API_SUPPORTED && typeof subtle.importKey == FUNCTION_TYPE;
const DERIVE_BITS_SUPPORTED = CRYPTO_API_SUPPORTED && SUBTLE_API_SUPPORTED && typeof subtle.deriveBits == FUNCTION_TYPE;
const codecBytes = (0, _sjclJs.codec).bytes;
const Aes = (0, _sjclJs.cipher).aes;
const CtrGladman = (0, _sjclJs.mode).ctrGladman;
const HmacSha1 = (0, _sjclJs.misc).hmacSha1;
class AESDecryptionStream extends TransformStream {
    constructor({ password, signed, encryptionStrength }){
        super({
            start () {
                Object.assign(this, {
                    ready: new Promise((resolve)=>this.resolveReady = resolve),
                    password,
                    signed,
                    strength: encryptionStrength - 1,
                    pending: new Uint8Array()
                });
            },
            async transform (chunk, controller) {
                const aesCrypto = this;
                const { password, strength, resolveReady, ready } = aesCrypto;
                if (password) {
                    await createDecryptionKeys(aesCrypto, strength, password, subarray(chunk, 0, SALT_LENGTH[strength] + 2));
                    chunk = subarray(chunk, SALT_LENGTH[strength] + 2);
                    resolveReady();
                } else await ready;
                const output = new Uint8Array(chunk.length - SIGNATURE_LENGTH - (chunk.length - SIGNATURE_LENGTH) % BLOCK_LENGTH);
                controller.enqueue(append(aesCrypto, chunk, output, 0, SIGNATURE_LENGTH, true));
            },
            async flush (controller) {
                const { signed, ctr, hmac, pending, ready } = this;
                await ready;
                const chunkToDecrypt = subarray(pending, 0, pending.length - SIGNATURE_LENGTH);
                const originalSignature = subarray(pending, pending.length - SIGNATURE_LENGTH);
                let decryptedChunkArray = new Uint8Array();
                if (chunkToDecrypt.length) {
                    const encryptedChunk = toBits(codecBytes, chunkToDecrypt);
                    hmac.update(encryptedChunk);
                    const decryptedChunk = ctr.update(encryptedChunk);
                    decryptedChunkArray = fromBits(codecBytes, decryptedChunk);
                }
                if (signed) {
                    const signature = subarray(fromBits(codecBytes, hmac.digest()), 0, SIGNATURE_LENGTH);
                    for(let indexSignature = 0; indexSignature < SIGNATURE_LENGTH; indexSignature++){
                        if (signature[indexSignature] != originalSignature[indexSignature]) throw new Error((0, _commonCryptoJs.ERR_INVALID_SIGNATURE));
                    }
                }
                controller.enqueue(decryptedChunkArray);
            }
        });
    }
}
class AESEncryptionStream extends TransformStream {
    constructor({ password, encryptionStrength }){
        // deno-lint-ignore prefer-const
        let stream;
        super({
            start () {
                Object.assign(this, {
                    ready: new Promise((resolve)=>this.resolveReady = resolve),
                    password,
                    strength: encryptionStrength - 1,
                    pending: new Uint8Array()
                });
            },
            async transform (chunk, controller) {
                const aesCrypto = this;
                const { password, strength, resolveReady, ready } = aesCrypto;
                let preamble = new Uint8Array();
                if (password) {
                    preamble = await createEncryptionKeys(aesCrypto, strength, password);
                    resolveReady();
                } else await ready;
                const output = new Uint8Array(preamble.length + chunk.length - chunk.length % BLOCK_LENGTH);
                output.set(preamble, 0);
                controller.enqueue(append(aesCrypto, chunk, output, preamble.length, 0));
            },
            async flush (controller) {
                const { ctr, hmac, pending, ready } = this;
                await ready;
                let encryptedChunkArray = new Uint8Array();
                if (pending.length) {
                    const encryptedChunk = ctr.update(toBits(codecBytes, pending));
                    hmac.update(encryptedChunk);
                    encryptedChunkArray = fromBits(codecBytes, encryptedChunk);
                }
                stream.signature = fromBits(codecBytes, hmac.digest()).slice(0, SIGNATURE_LENGTH);
                controller.enqueue(concat(encryptedChunkArray, stream.signature));
            }
        });
        stream = this;
    }
}
function append(aesCrypto, input, output, paddingStart, paddingEnd, verifySignature) {
    const { ctr, hmac, pending } = aesCrypto;
    const inputLength = input.length - paddingEnd;
    if (pending.length) {
        input = concat(pending, input);
        output = expand(output, inputLength - inputLength % BLOCK_LENGTH);
    }
    let offset;
    for(offset = 0; offset <= inputLength - BLOCK_LENGTH; offset += BLOCK_LENGTH){
        const inputChunk = toBits(codecBytes, subarray(input, offset, offset + BLOCK_LENGTH));
        if (verifySignature) hmac.update(inputChunk);
        const outputChunk = ctr.update(inputChunk);
        if (!verifySignature) hmac.update(outputChunk);
        output.set(fromBits(codecBytes, outputChunk), offset + paddingStart);
    }
    aesCrypto.pending = subarray(input, offset);
    return output;
}
async function createDecryptionKeys(decrypt, strength, password, preamble) {
    const passwordVerificationKey = await createKeys(decrypt, strength, password, subarray(preamble, 0, SALT_LENGTH[strength]));
    const passwordVerification = subarray(preamble, SALT_LENGTH[strength]);
    if (passwordVerificationKey[0] != passwordVerification[0] || passwordVerificationKey[1] != passwordVerification[1]) throw new Error((0, _commonCryptoJs.ERR_INVALID_PASSWORD));
}
async function createEncryptionKeys(encrypt, strength, password) {
    const salt = (0, _commonCryptoJs.getRandomValues)(new Uint8Array(SALT_LENGTH[strength]));
    const passwordVerification = await createKeys(encrypt, strength, password, salt);
    return concat(salt, passwordVerification);
}
async function createKeys(aesCrypto, strength, password, salt) {
    aesCrypto.password = null;
    const encodedPassword = (0, _encodeTextJs.encodeText)(password);
    const baseKey = await importKey(RAW_FORMAT, encodedPassword, BASE_KEY_ALGORITHM, false, DERIVED_BITS_USAGE);
    const derivedBits = await deriveBits(Object.assign({
        salt
    }, DERIVED_BITS_ALGORITHM), baseKey, 8 * (KEY_LENGTH[strength] * 2 + 2));
    const compositeKey = new Uint8Array(derivedBits);
    const key = toBits(codecBytes, subarray(compositeKey, 0, KEY_LENGTH[strength]));
    const authentication = toBits(codecBytes, subarray(compositeKey, KEY_LENGTH[strength], KEY_LENGTH[strength] * 2));
    const passwordVerification = subarray(compositeKey, KEY_LENGTH[strength] * 2);
    Object.assign(aesCrypto, {
        keys: {
            key,
            authentication,
            passwordVerification
        },
        ctr: new CtrGladman(new Aes(key), Array.from(COUNTER_DEFAULT_VALUE)),
        hmac: new HmacSha1(authentication)
    });
    return passwordVerification;
}
function importKey(format, password, algorithm, extractable, keyUsages) {
    if (IMPORT_KEY_SUPPORTED) return subtle.importKey(format, password, algorithm, extractable, keyUsages);
    else return (0, _sjclJs.misc).importKey(password);
}
async function deriveBits(algorithm, baseKey, length) {
    if (DERIVE_BITS_SUPPORTED) return await subtle.deriveBits(algorithm, baseKey, length);
    else return (0, _sjclJs.misc).pbkdf2(baseKey, algorithm.salt, DERIVED_BITS_ALGORITHM.iterations, length);
}
function concat(leftArray, rightArray) {
    let array = leftArray;
    if (leftArray.length + rightArray.length) {
        array = new Uint8Array(leftArray.length + rightArray.length);
        array.set(leftArray, 0);
        array.set(rightArray, leftArray.length);
    }
    return array;
}
function expand(inputArray, length) {
    if (length && length > inputArray.length) {
        const array = inputArray;
        inputArray = new Uint8Array(length);
        inputArray.set(array, 0);
    }
    return inputArray;
}
function subarray(array, begin, end) {
    return array.subarray(begin, end);
}
function fromBits(codecBytes, chunk) {
    return codecBytes.fromBits(chunk);
}
function toBits(codecBytes, chunk) {
    return codecBytes.toBits(chunk);
}

},{"./../util/encode-text.js":"d2QnN","./codecs/sjcl.js":"81sYE","./common-crypto.js":"fOx2I","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d2QnN":[function(require,module,exports) {
/*
 Copyright (c) 2022 Gildas Lormeau. All rights reserved.

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions are met:

 1. Redistributions of source code must retain the above copyright notice,
 this list of conditions and the following disclaimer.

 2. Redistributions in binary form must reproduce the above copyright 
 notice, this list of conditions and the following disclaimer in 
 the documentation and/or other materials provided with the distribution.

 3. The names of the authors may not be used to endorse or promote products
 derived from this software without specific prior written permission.

 THIS SOFTWARE IS PROVIDED ''AS IS'' AND ANY EXPRESSED OR IMPLIED WARRANTIES,
 INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
 FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL JCRAFT,
 INC. OR ANY CONTRIBUTORS TO THIS SOFTWARE BE LIABLE FOR ANY DIRECT, INDIRECT,
 INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA,
 OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
 LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
 EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */ /* global TextEncoder */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "encodeText", ()=>encodeText);
function encodeText(value) {
    if (typeof TextEncoder == "undefined") {
        value = unescape(encodeURIComponent(value));
        const result = new Uint8Array(value.length);
        for(let i = 0; i < result.length; i++)result[i] = value.charCodeAt(i);
        return result;
    } else return new TextEncoder().encode(value);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"81sYE":[function(require,module,exports) {
// Derived from https://github.com/xqdoo00o/jszip/blob/master/lib/sjcl.js and https://github.com/bitwiseshiftleft/sjcl
// deno-lint-ignore-file no-this-alias
/*
 * SJCL is open. You can use, modify and redistribute it under a BSD
 * license or under the GNU GPL, version 2.0.
 */ /** @fileOverview Javascript cryptography implementation.
 *
 * Crush to remove comments, shorten variable names and
 * generally reduce transmission size.
 *
 * @author Emily Stark
 * @author Mike Hamburg
 * @author Dan Boneh
 */ /*jslint indent: 2, bitwise: false, nomen: false, plusplus: false, white: false, regexp: false */ /** @fileOverview Arrays of bits, encoded as arrays of Numbers.
 *
 * @author Emily Stark
 * @author Mike Hamburg
 * @author Dan Boneh
 */ /**
 * Arrays of bits, encoded as arrays of Numbers.
 * @namespace
 * @description
 * <p>
 * These objects are the currency accepted by SJCL's crypto functions.
 * </p>
 *
 * <p>
 * Most of our crypto primitives operate on arrays of 4-byte words internally,
 * but many of them can take arguments that are not a multiple of 4 bytes.
 * This library encodes arrays of bits (whose size need not be a multiple of 8
 * bits) as arrays of 32-bit words.  The bits are packed, big-endian, into an
 * array of words, 32 bits at a time.  Since the words are double-precision
 * floating point numbers, they fit some extra data.  We use this (in a private,
 * possibly-changing manner) to encode the number of bits actually  present
 * in the last word of the array.
 * </p>
 *
 * <p>
 * Because bitwise ops clear this out-of-band data, these arrays can be passed
 * to ciphers like AES which want arrays of words.
 * </p>
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "cipher", ()=>cipher);
parcelHelpers.export(exports, "codec", ()=>codec);
parcelHelpers.export(exports, "misc", ()=>misc);
parcelHelpers.export(exports, "mode", ()=>mode);
parcelHelpers.export(exports, "random", ()=>random);
const bitArray = {
    /**
	 * Concatenate two bit arrays.
	 * @param {bitArray} a1 The first array.
	 * @param {bitArray} a2 The second array.
	 * @return {bitArray} The concatenation of a1 and a2.
	 */ concat (a1, a2) {
        if (a1.length === 0 || a2.length === 0) return a1.concat(a2);
        const last = a1[a1.length - 1], shift = bitArray.getPartial(last);
        if (shift === 32) return a1.concat(a2);
        else return bitArray._shiftRight(a2, shift, last | 0, a1.slice(0, a1.length - 1));
    },
    /**
	 * Find the length of an array of bits.
	 * @param {bitArray} a The array.
	 * @return {Number} The length of a, in bits.
	 */ bitLength (a) {
        const l = a.length;
        if (l === 0) return 0;
        const x = a[l - 1];
        return (l - 1) * 32 + bitArray.getPartial(x);
    },
    /**
	 * Truncate an array.
	 * @param {bitArray} a The array.
	 * @param {Number} len The length to truncate to, in bits.
	 * @return {bitArray} A new array, truncated to len bits.
	 */ clamp (a, len) {
        if (a.length * 32 < len) return a;
        a = a.slice(0, Math.ceil(len / 32));
        const l = a.length;
        len = len & 31;
        if (l > 0 && len) a[l - 1] = bitArray.partial(len, a[l - 1] & 0x80000000 >> len - 1, 1);
        return a;
    },
    /**
	 * Make a partial word for a bit array.
	 * @param {Number} len The number of bits in the word.
	 * @param {Number} x The bits.
	 * @param {Number} [_end=0] Pass 1 if x has already been shifted to the high side.
	 * @return {Number} The partial word.
	 */ partial (len, x, _end) {
        if (len === 32) return x;
        return (_end ? x | 0 : x << 32 - len) + len * 0x10000000000;
    },
    /**
	 * Get the number of bits used by a partial word.
	 * @param {Number} x The partial word.
	 * @return {Number} The number of bits used by the partial word.
	 */ getPartial (x) {
        return Math.round(x / 0x10000000000) || 32;
    },
    /** Shift an array right.
	 * @param {bitArray} a The array to shift.
	 * @param {Number} shift The number of bits to shift.
	 * @param {Number} [carry=0] A byte to carry in
	 * @param {bitArray} [out=[]] An array to prepend to the output.
	 * @private
	 */ _shiftRight (a, shift, carry, out) {
        if (out === undefined) out = [];
        for(; shift >= 32; shift -= 32){
            out.push(carry);
            carry = 0;
        }
        if (shift === 0) return out.concat(a);
        for(let i = 0; i < a.length; i++){
            out.push(carry | a[i] >>> shift);
            carry = a[i] << 32 - shift;
        }
        const last2 = a.length ? a[a.length - 1] : 0;
        const shift2 = bitArray.getPartial(last2);
        out.push(bitArray.partial(shift + shift2 & 31, shift + shift2 > 32 ? carry : out.pop(), 1));
        return out;
    }
};
/** @fileOverview Bit array codec implementations.
 *
 * @author Emily Stark
 * @author Mike Hamburg
 * @author Dan Boneh
 */ /**
 * Arrays of bytes
 * @namespace
 */ const codec = {
    bytes: {
        /** Convert from a bitArray to an array of bytes. */ fromBits (arr) {
            const bl = bitArray.bitLength(arr);
            const byteLength = bl / 8;
            const out = new Uint8Array(byteLength);
            let tmp;
            for(let i = 0; i < byteLength; i++){
                if ((i & 3) === 0) tmp = arr[i / 4];
                out[i] = tmp >>> 24;
                tmp <<= 8;
            }
            return out;
        },
        /** Convert from an array of bytes to a bitArray. */ toBits (bytes) {
            const out = [];
            let i;
            let tmp = 0;
            for(i = 0; i < bytes.length; i++){
                tmp = tmp << 8 | bytes[i];
                if ((i & 3) === 3) {
                    out.push(tmp);
                    tmp = 0;
                }
            }
            if (i & 3) out.push(bitArray.partial(8 * (i & 3), tmp));
            return out;
        }
    }
};
const hash = {};
/**
 * Context for a SHA-1 operation in progress.
 * @constructor
 */ hash.sha1 = function(hash) {
    if (hash) {
        this._h = hash._h.slice(0);
        this._buffer = hash._buffer.slice(0);
        this._length = hash._length;
    } else this.reset();
};
hash.sha1.prototype = {
    /**
	 * The hash's block size, in bits.
	 * @constant
	 */ blockSize: 512,
    /**
	 * Reset the hash state.
	 * @return this
	 */ reset () {
        const sha1 = this;
        sha1._h = this._init.slice(0);
        sha1._buffer = [];
        sha1._length = 0;
        return sha1;
    },
    /**
	 * Input several words to the hash.
	 * @param {bitArray|String} data the data to hash.
	 * @return this
	 */ update (data) {
        const sha1 = this;
        if (typeof data === "string") data = codec.utf8String.toBits(data);
        const b = sha1._buffer = bitArray.concat(sha1._buffer, data);
        const ol = sha1._length;
        const nl = sha1._length = ol + bitArray.bitLength(data);
        if (nl > 9007199254740991) throw new Error("Cannot hash more than 2^53 - 1 bits");
        const c = new Uint32Array(b);
        let j = 0;
        for(let i = sha1.blockSize + ol - (sha1.blockSize + ol & sha1.blockSize - 1); i <= nl; i += sha1.blockSize){
            sha1._block(c.subarray(16 * j, 16 * (j + 1)));
            j += 1;
        }
        b.splice(0, 16 * j);
        return sha1;
    },
    /**
	 * Complete hashing and output the hash value.
	 * @return {bitArray} The hash value, an array of 5 big-endian words. TODO
	 */ finalize () {
        const sha1 = this;
        let b = sha1._buffer;
        const h = sha1._h;
        // Round out and push the buffer
        b = bitArray.concat(b, [
            bitArray.partial(1, 1)
        ]);
        // Round out the buffer to a multiple of 16 words, less the 2 length words.
        for(let i = b.length + 2; i & 15; i++)b.push(0);
        // append the length
        b.push(Math.floor(sha1._length / 0x100000000));
        b.push(sha1._length | 0);
        while(b.length)sha1._block(b.splice(0, 16));
        sha1.reset();
        return h;
    },
    /**
	 * The SHA-1 initialization vector.
	 * @private
	 */ _init: [
        0x67452301,
        0xEFCDAB89,
        0x98BADCFE,
        0x10325476,
        0xC3D2E1F0
    ],
    /**
	 * The SHA-1 hash key.
	 * @private
	 */ _key: [
        0x5A827999,
        0x6ED9EBA1,
        0x8F1BBCDC,
        0xCA62C1D6
    ],
    /**
	 * The SHA-1 logical functions f(0), f(1), ..., f(79).
	 * @private
	 */ _f (t, b, c, d) {
        if (t <= 19) return b & c | ~b & d;
        else if (t <= 39) return b ^ c ^ d;
        else if (t <= 59) return b & c | b & d | c & d;
        else if (t <= 79) return b ^ c ^ d;
    },
    /**
	 * Circular left-shift operator.
	 * @private
	 */ _S (n, x) {
        return x << n | x >>> 32 - n;
    },
    /**
	 * Perform one cycle of SHA-1.
	 * @param {Uint32Array|bitArray} words one block of words.
	 * @private
	 */ _block (words) {
        const sha1 = this;
        const h = sha1._h;
        // When words is passed to _block, it has 16 elements. SHA1 _block
        // function extends words with new elements (at the end there are 80 elements). 
        // The problem is that if we use Uint32Array instead of Array, 
        // the length of Uint32Array cannot be changed. Thus, we replace words with a 
        // normal Array here.
        const w = Array(80); // do not use Uint32Array here as the instantiation is slower
        for(let j = 0; j < 16; j++)w[j] = words[j];
        let a = h[0];
        let b = h[1];
        let c = h[2];
        let d = h[3];
        let e = h[4];
        for(let t = 0; t <= 79; t++){
            if (t >= 16) w[t] = sha1._S(1, w[t - 3] ^ w[t - 8] ^ w[t - 14] ^ w[t - 16]);
            const tmp = sha1._S(5, a) + sha1._f(t, b, c, d) + e + w[t] + sha1._key[Math.floor(t / 20)] | 0;
            e = d;
            d = c;
            c = sha1._S(30, b);
            b = a;
            a = tmp;
        }
        h[0] = h[0] + a | 0;
        h[1] = h[1] + b | 0;
        h[2] = h[2] + c | 0;
        h[3] = h[3] + d | 0;
        h[4] = h[4] + e | 0;
    }
};
/** @fileOverview Low-level AES implementation.
 *
 * This file contains a low-level implementation of AES, optimized for
 * size and for efficiency on several browsers.  It is based on
 * OpenSSL's aes_core.c, a public-domain implementation by Vincent
 * Rijmen, Antoon Bosselaers and Paulo Barreto.
 *
 * An older version of this implementation is available in the public
 * domain, but this one is (c) Emily Stark, Mike Hamburg, Dan Boneh,
 * Stanford University 2008-2010 and BSD-licensed for liability
 * reasons.
 *
 * @author Emily Stark
 * @author Mike Hamburg
 * @author Dan Boneh
 */ const cipher = {};
/**
 * Schedule out an AES key for both encryption and decryption.  This
 * is a low-level class.  Use a cipher mode to do bulk encryption.
 *
 * @constructor
 * @param {Array} key The key as an array of 4, 6 or 8 words.
 */ cipher.aes = class {
    constructor(key){
        /**
		 * The expanded S-box and inverse S-box tables.  These will be computed
		 * on the client so that we don't have to send them down the wire.
		 *
		 * There are two tables, _tables[0] is for encryption and
		 * _tables[1] is for decryption.
		 *
		 * The first 4 sub-tables are the expanded S-box with MixColumns.  The
		 * last (_tables[01][4]) is the S-box itself.
		 *
		 * @private
		 */ const aes = this;
        aes._tables = [
            [
                [],
                [],
                [],
                [],
                []
            ],
            [
                [],
                [],
                [],
                [],
                []
            ]
        ];
        if (!aes._tables[0][0][0]) aes._precompute();
        const sbox = aes._tables[0][4];
        const decTable = aes._tables[1];
        const keyLen = key.length;
        let i, encKey, decKey, rcon = 1;
        if (keyLen !== 4 && keyLen !== 6 && keyLen !== 8) throw new Error("invalid aes key size");
        aes._key = [
            encKey = key.slice(0),
            decKey = []
        ];
        // schedule encryption keys
        for(i = keyLen; i < 4 * keyLen + 28; i++){
            let tmp = encKey[i - 1];
            // apply sbox
            if (i % keyLen === 0 || keyLen === 8 && i % keyLen === 4) {
                tmp = sbox[tmp >>> 24] << 24 ^ sbox[tmp >> 16 & 255] << 16 ^ sbox[tmp >> 8 & 255] << 8 ^ sbox[tmp & 255];
                // shift rows and add rcon
                if (i % keyLen === 0) {
                    tmp = tmp << 8 ^ tmp >>> 24 ^ rcon << 24;
                    rcon = rcon << 1 ^ (rcon >> 7) * 283;
                }
            }
            encKey[i] = encKey[i - keyLen] ^ tmp;
        }
        // schedule decryption keys
        for(let j = 0; i; j++, i--){
            const tmp = encKey[j & 3 ? i : i - 4];
            if (i <= 4 || j < 4) decKey[j] = tmp;
            else decKey[j] = decTable[0][sbox[tmp >>> 24]] ^ decTable[1][sbox[tmp >> 16 & 255]] ^ decTable[2][sbox[tmp >> 8 & 255]] ^ decTable[3][sbox[tmp & 255]];
        }
    }
    // public
    /* Something like this might appear here eventually
	name: "AES",
	blockSize: 4,
	keySizes: [4,6,8],
	*/ /**
	 * Encrypt an array of 4 big-endian words.
	 * @param {Array} data The plaintext.
	 * @return {Array} The ciphertext.
	 */ encrypt(data) {
        return this._crypt(data, 0);
    }
    /**
	 * Decrypt an array of 4 big-endian words.
	 * @param {Array} data The ciphertext.
	 * @return {Array} The plaintext.
	 */ decrypt(data) {
        return this._crypt(data, 1);
    }
    /**
	 * Expand the S-box tables.
	 *
	 * @private
	 */ _precompute() {
        const encTable = this._tables[0];
        const decTable = this._tables[1];
        const sbox = encTable[4];
        const sboxInv = decTable[4];
        const d = [];
        const th = [];
        let xInv, x2, x4, x8;
        // Compute double and third tables
        for(let i = 0; i < 256; i++)th[(d[i] = i << 1 ^ (i >> 7) * 283) ^ i] = i;
        for(let x = xInv = 0; !sbox[x]; x ^= x2 || 1, xInv = th[xInv] || 1){
            // Compute sbox
            let s = xInv ^ xInv << 1 ^ xInv << 2 ^ xInv << 3 ^ xInv << 4;
            s = s >> 8 ^ s & 255 ^ 99;
            sbox[x] = s;
            sboxInv[s] = x;
            // Compute MixColumns
            x8 = d[x4 = d[x2 = d[x]]];
            let tDec = x8 * 0x1010101 ^ x4 * 0x10001 ^ x2 * 0x101 ^ x * 0x1010100;
            let tEnc = d[s] * 0x101 ^ s * 0x1010100;
            for(let i = 0; i < 4; i++){
                encTable[i][x] = tEnc = tEnc << 24 ^ tEnc >>> 8;
                decTable[i][s] = tDec = tDec << 24 ^ tDec >>> 8;
            }
        }
        // Compactify.  Considerable speedup on Firefox.
        for(let i = 0; i < 5; i++){
            encTable[i] = encTable[i].slice(0);
            decTable[i] = decTable[i].slice(0);
        }
    }
    /**
	 * Encryption and decryption core.
	 * @param {Array} input Four words to be encrypted or decrypted.
	 * @param dir The direction, 0 for encrypt and 1 for decrypt.
	 * @return {Array} The four encrypted or decrypted words.
	 * @private
	 */ _crypt(input, dir) {
        if (input.length !== 4) throw new Error("invalid aes block size");
        const key = this._key[dir];
        const nInnerRounds = key.length / 4 - 2;
        const out = [
            0,
            0,
            0,
            0
        ];
        const table = this._tables[dir];
        // load up the tables
        const t0 = table[0];
        const t1 = table[1];
        const t2 = table[2];
        const t3 = table[3];
        const sbox = table[4];
        // state variables a,b,c,d are loaded with pre-whitened data
        let a = input[0] ^ key[0];
        let b = input[dir ? 3 : 1] ^ key[1];
        let c = input[2] ^ key[2];
        let d = input[dir ? 1 : 3] ^ key[3];
        let kIndex = 4;
        let a2, b2, c2;
        // Inner rounds.  Cribbed from OpenSSL.
        for(let i = 0; i < nInnerRounds; i++){
            a2 = t0[a >>> 24] ^ t1[b >> 16 & 255] ^ t2[c >> 8 & 255] ^ t3[d & 255] ^ key[kIndex];
            b2 = t0[b >>> 24] ^ t1[c >> 16 & 255] ^ t2[d >> 8 & 255] ^ t3[a & 255] ^ key[kIndex + 1];
            c2 = t0[c >>> 24] ^ t1[d >> 16 & 255] ^ t2[a >> 8 & 255] ^ t3[b & 255] ^ key[kIndex + 2];
            d = t0[d >>> 24] ^ t1[a >> 16 & 255] ^ t2[b >> 8 & 255] ^ t3[c & 255] ^ key[kIndex + 3];
            kIndex += 4;
            a = a2;
            b = b2;
            c = c2;
        }
        // Last round.
        for(let i = 0; i < 4; i++){
            out[dir ? 3 & -i : i] = sbox[a >>> 24] << 24 ^ sbox[b >> 16 & 255] << 16 ^ sbox[c >> 8 & 255] << 8 ^ sbox[d & 255] ^ key[kIndex++];
            a2 = a;
            a = b;
            b = c;
            c = d;
            d = a2;
        }
        return out;
    }
};
/**
 * Random values
 * @namespace
 */ const random = {
    /** 
	 * Generate random words with pure js, cryptographically not as strong & safe as native implementation.
	 * @param {TypedArray} typedArray The array to fill.
	 * @return {TypedArray} The random values.
	 */ getRandomValues (typedArray) {
        const words = new Uint32Array(typedArray.buffer);
        const r = (m_w)=>{
            let m_z = 0x3ade68b1;
            const mask = 0xffffffff;
            return function() {
                m_z = 0x9069 * (m_z & 0xFFFF) + (m_z >> 0x10) & mask;
                m_w = 0x4650 * (m_w & 0xFFFF) + (m_w >> 0x10) & mask;
                const result = ((m_z << 0x10) + m_w & mask) / 0x100000000 + .5;
                return result * (Math.random() > .5 ? 1 : -1);
            };
        };
        for(let i = 0, rcache; i < typedArray.length; i += 4){
            const _r = r((rcache || Math.random()) * 0x100000000);
            rcache = _r() * 0x3ade67b7;
            words[i / 4] = _r() * 0x100000000 | 0;
        }
        return typedArray;
    }
};
/** @fileOverview CTR mode implementation.
 *
 * Special thanks to Roy Nicholson for pointing out a bug in our
 * implementation.
 *
 * @author Emily Stark
 * @author Mike Hamburg
 * @author Dan Boneh
 */ /** Brian Gladman's CTR Mode.
* @constructor
* @param {Object} _prf The aes instance to generate key.
* @param {bitArray} _iv The iv for ctr mode, it must be 128 bits.
*/ const mode = {};
/**
 * Brian Gladman's CTR Mode.
 * @namespace
 */ mode.ctrGladman = class {
    constructor(prf, iv){
        this._prf = prf;
        this._initIv = iv;
        this._iv = iv;
    }
    reset() {
        this._iv = this._initIv;
    }
    /** Input some data to calculate.
	 * @param {bitArray} data the data to process, it must be intergral multiple of 128 bits unless it's the last.
	 */ update(data) {
        return this.calculate(this._prf, data, this._iv);
    }
    incWord(word) {
        if ((word >> 24 & 0xff) === 0xff) {
            let b1 = word >> 16 & 0xff;
            let b2 = word >> 8 & 0xff;
            let b3 = word & 0xff;
            if (b1 === 0xff) {
                b1 = 0;
                if (b2 === 0xff) {
                    b2 = 0;
                    if (b3 === 0xff) b3 = 0;
                    else ++b3;
                } else ++b2;
            } else ++b1;
            word = 0;
            word += b1 << 16;
            word += b2 << 8;
            word += b3;
        } else word += 16777216;
        return word;
    }
    incCounter(counter) {
        if ((counter[0] = this.incWord(counter[0])) === 0) // encr_data in fileenc.c from  Dr Brian Gladman's counts only with DWORD j < 8
        counter[1] = this.incWord(counter[1]);
    }
    calculate(prf, data, iv) {
        let l;
        if (!(l = data.length)) return [];
        const bl = bitArray.bitLength(data);
        for(let i = 0; i < l; i += 4){
            this.incCounter(iv);
            const e = prf.encrypt(iv);
            data[i] ^= e[0];
            data[i + 1] ^= e[1];
            data[i + 2] ^= e[2];
            data[i + 3] ^= e[3];
        }
        return bitArray.clamp(data, bl);
    }
};
const misc = {
    importKey (password) {
        return new misc.hmacSha1(codec.bytes.toBits(password));
    },
    pbkdf2 (prf, salt, count, length) {
        count = count || 10000;
        if (length < 0 || count < 0) throw new Error("invalid params to pbkdf2");
        const byteLength = (length >> 5) + 1 << 2;
        let u, ui, i, j, k;
        const arrayBuffer = new ArrayBuffer(byteLength);
        const out = new DataView(arrayBuffer);
        let outLength = 0;
        const b = bitArray;
        salt = codec.bytes.toBits(salt);
        for(k = 1; outLength < (byteLength || 1); k++){
            u = ui = prf.encrypt(b.concat(salt, [
                k
            ]));
            for(i = 1; i < count; i++){
                ui = prf.encrypt(ui);
                for(j = 0; j < ui.length; j++)u[j] ^= ui[j];
            }
            for(i = 0; outLength < (byteLength || 1) && i < u.length; i++){
                out.setInt32(outLength, u[i]);
                outLength += 4;
            }
        }
        return arrayBuffer.slice(0, length / 8);
    }
};
/** @fileOverview HMAC implementation.
 *
 * @author Emily Stark
 * @author Mike Hamburg
 * @author Dan Boneh
 */ /** HMAC with the specified hash function.
 * @constructor
 * @param {bitArray} key the key for HMAC.
 * @param {Object} [Hash=hash.sha1] The hash function to use.
 */ misc.hmacSha1 = class {
    constructor(key){
        const hmac = this;
        const Hash = hmac._hash = hash.sha1;
        const exKey = [
            [],
            []
        ];
        const bs = Hash.prototype.blockSize / 32;
        hmac._baseHash = [
            new Hash(),
            new Hash()
        ];
        if (key.length > bs) key = Hash.hash(key);
        for(let i = 0; i < bs; i++){
            exKey[0][i] = key[i] ^ 0x36363636;
            exKey[1][i] = key[i] ^ 0x5C5C5C5C;
        }
        hmac._baseHash[0].update(exKey[0]);
        hmac._baseHash[1].update(exKey[1]);
        hmac._resultHash = new Hash(hmac._baseHash[0]);
    }
    reset() {
        const hmac = this;
        hmac._resultHash = new hmac._hash(hmac._baseHash[0]);
        hmac._updated = false;
    }
    update(data) {
        const hmac = this;
        hmac._updated = true;
        hmac._resultHash.update(data);
    }
    digest() {
        const hmac = this;
        const w = hmac._resultHash.finalize();
        const result = new hmac._hash(hmac._baseHash[1]).update(w).finalize();
        hmac.reset();
        return result;
    }
    encrypt(data) {
        if (!this._updated) {
            this.update(data);
            return this.digest(data);
        } else throw new Error("encrypt on already updated hmac called!");
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fOx2I":[function(require,module,exports) {
/*
 Copyright (c) 2022 Gildas Lormeau. All rights reserved.

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions are met:

 1. Redistributions of source code must retain the above copyright notice,
 this list of conditions and the following disclaimer.

 2. Redistributions in binary form must reproduce the above copyright 
 notice, this list of conditions and the following disclaimer in 
 the documentation and/or other materials provided with the distribution.

 3. The names of the authors may not be used to endorse or promote products
 derived from this software without specific prior written permission.

 THIS SOFTWARE IS PROVIDED ''AS IS'' AND ANY EXPRESSED OR IMPLIED WARRANTIES,
 INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
 FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL JCRAFT,
 INC. OR ANY CONTRIBUTORS TO THIS SOFTWARE BE LIABLE FOR ANY DIRECT, INDIRECT,
 INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA,
 OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
 LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
 EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */ /* global crypto */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getRandomValues", ()=>getRandomValues);
parcelHelpers.export(exports, "ERR_INVALID_PASSWORD", ()=>ERR_INVALID_PASSWORD);
parcelHelpers.export(exports, "ERR_INVALID_SIGNATURE", ()=>ERR_INVALID_SIGNATURE);
var _sjclJs = require("./codecs/sjcl.js");
const GET_RANDOM_VALUES_SUPPORTED = typeof crypto != "undefined" && typeof crypto.getRandomValues == "function";
const ERR_INVALID_PASSWORD = "Invalid password";
const ERR_INVALID_SIGNATURE = "Invalid signature";
function getRandomValues(array) {
    if (GET_RANDOM_VALUES_SUPPORTED) return crypto.getRandomValues(array);
    else return (0, _sjclJs.random).getRandomValues(array);
}

},{"./codecs/sjcl.js":"81sYE","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l0klA":[function(require,module,exports) {
/*
 Copyright (c) 2022 Gildas Lormeau. All rights reserved.

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions are met:

 1. Redistributions of source code must retain the above copyright notice,
 this list of conditions and the following disclaimer.

 2. Redistributions in binary form must reproduce the above copyright 
 notice, this list of conditions and the following disclaimer in 
 the documentation and/or other materials provided with the distribution.

 3. The names of the authors may not be used to endorse or promote products
 derived from this software without specific prior written permission.

 THIS SOFTWARE IS PROVIDED ''AS IS'' AND ANY EXPRESSED OR IMPLIED WARRANTIES,
 INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
 FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL JCRAFT,
 INC. OR ANY CONTRIBUTORS TO THIS SOFTWARE BE LIABLE FOR ANY DIRECT, INDIRECT,
 INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA,
 OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
 LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
 EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */ /* global TransformStream */ // deno-lint-ignore-file no-this-alias
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ZipCryptoDecryptionStream", ()=>ZipCryptoDecryptionStream);
parcelHelpers.export(exports, "ZipCryptoEncryptionStream", ()=>ZipCryptoEncryptionStream);
parcelHelpers.export(exports, "ERR_INVALID_PASSWORD", ()=>(0, _commonCryptoJs.ERR_INVALID_PASSWORD));
var _crc32Js = require("./codecs/crc32.js");
var _commonCryptoJs = require("./common-crypto.js");
const HEADER_LENGTH = 12;
class ZipCryptoDecryptionStream extends TransformStream {
    constructor({ password, passwordVerification }){
        super({
            start () {
                Object.assign(this, {
                    password,
                    passwordVerification
                });
                createKeys(this, password);
            },
            transform (chunk, controller) {
                const zipCrypto = this;
                if (zipCrypto.password) {
                    const decryptedHeader = decrypt(zipCrypto, chunk.subarray(0, HEADER_LENGTH));
                    zipCrypto.password = null;
                    if (decryptedHeader[HEADER_LENGTH - 1] != zipCrypto.passwordVerification) throw new Error((0, _commonCryptoJs.ERR_INVALID_PASSWORD));
                    chunk = chunk.subarray(HEADER_LENGTH);
                }
                controller.enqueue(decrypt(zipCrypto, chunk));
            }
        });
    }
}
class ZipCryptoEncryptionStream extends TransformStream {
    constructor({ password, passwordVerification }){
        super({
            start () {
                Object.assign(this, {
                    password,
                    passwordVerification
                });
                createKeys(this, password);
            },
            transform (chunk, controller) {
                const zipCrypto = this;
                let output;
                let offset;
                if (zipCrypto.password) {
                    zipCrypto.password = null;
                    const header = (0, _commonCryptoJs.getRandomValues)(new Uint8Array(HEADER_LENGTH));
                    header[HEADER_LENGTH - 1] = zipCrypto.passwordVerification;
                    output = new Uint8Array(chunk.length + header.length);
                    output.set(encrypt(zipCrypto, header), 0);
                    offset = HEADER_LENGTH;
                } else {
                    output = new Uint8Array(chunk.length);
                    offset = 0;
                }
                output.set(encrypt(zipCrypto, chunk), offset);
                controller.enqueue(output);
            }
        });
    }
}
function decrypt(target, input) {
    const output = new Uint8Array(input.length);
    for(let index = 0; index < input.length; index++){
        output[index] = getByte(target) ^ input[index];
        updateKeys(target, output[index]);
    }
    return output;
}
function encrypt(target, input) {
    const output = new Uint8Array(input.length);
    for(let index = 0; index < input.length; index++){
        output[index] = getByte(target) ^ input[index];
        updateKeys(target, input[index]);
    }
    return output;
}
function createKeys(target, password) {
    const keys = [
        0x12345678,
        0x23456789,
        0x34567890
    ];
    Object.assign(target, {
        keys,
        crcKey0: new (0, _crc32Js.Crc32)(keys[0]),
        crcKey2: new (0, _crc32Js.Crc32)(keys[2])
    });
    for(let index = 0; index < password.length; index++)updateKeys(target, password.charCodeAt(index));
}
function updateKeys(target, byte) {
    let [key0, key1, key2] = target.keys;
    target.crcKey0.append([
        byte
    ]);
    key0 = ~target.crcKey0.get();
    key1 = getInt32(Math.imul(getInt32(key1 + getInt8(key0)), 134775813) + 1);
    target.crcKey2.append([
        key1 >>> 24
    ]);
    key2 = ~target.crcKey2.get();
    target.keys = [
        key0,
        key1,
        key2
    ];
}
function getByte(target) {
    const temp = target.keys[2] | 2;
    return getInt8(Math.imul(temp, temp ^ 1) >>> 8);
}
function getInt8(number) {
    return number & 0xFF;
}
function getInt32(number) {
    return number & 0xFFFFFFFF;
}

},{"./codecs/crc32.js":"2Z8Tu","./common-crypto.js":"fOx2I","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bhC0r":[function(require,module,exports) {
/*
 Copyright (c) 2022 Gildas Lormeau. All rights reserved.

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions are met:

 1. Redistributions of source code must retain the above copyright notice,
 this list of conditions and the following disclaimer.

 2. Redistributions in binary form must reproduce the above copyright 
 notice, this list of conditions and the following disclaimer in 
 the documentation and/or other materials provided with the distribution.

 3. The names of the authors may not be used to endorse or promote products
 derived from this software without specific prior written permission.

 THIS SOFTWARE IS PROVIDED ''AS IS'' AND ANY EXPRESSED OR IMPLIED WARRANTIES,
 INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
 FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL JCRAFT,
 INC. OR ANY CONTRIBUTORS TO THIS SOFTWARE BE LIABLE FOR ANY DIRECT, INDIRECT,
 INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA,
 OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
 LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
 EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */ /* global Worker, URL, TransformStream, WritableStream */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CodecWorker", ()=>CodecWorker);
var _constantsJs = require("./constants.js");
var _codecStreamJs = require("./streams/codec-stream.js");
// deno-lint-ignore valid-typeof
const WEB_WORKERS_SUPPORTED = typeof Worker != (0, _constantsJs.UNDEFINED_TYPE);
class CodecWorker {
    constructor(workerData, { readable, writable }, { options, config, streamOptions, useWebWorkers, transferStreams, scripts }, onTaskFinished){
        const { signal } = streamOptions;
        Object.assign(workerData, {
            busy: true,
            readable: readable.pipeThrough(new ProgressWatcherStream(readable, streamOptions, config), {
                signal
            }),
            writable,
            options: Object.assign({}, options),
            scripts,
            transferStreams,
            terminate () {
                const { worker, busy } = workerData;
                if (worker && !busy) {
                    worker.terminate();
                    workerData.interface = null;
                }
            },
            onTaskFinished () {
                workerData.busy = false;
                onTaskFinished(workerData);
            }
        });
        return (useWebWorkers && WEB_WORKERS_SUPPORTED ? createWebWorkerInterface : createWorkerInterface)(workerData, config);
    }
}
class ProgressWatcherStream extends TransformStream {
    constructor(readableSource, { onstart, onprogress, size, onend }, { chunkSize }){
        let chunkOffset = 0;
        super({
            start () {
                if (onstart) callHandler(onstart, size);
            },
            async transform (chunk, controller) {
                chunkOffset += chunk.length;
                if (onprogress) await callHandler(onprogress, chunkOffset, size);
                controller.enqueue(chunk);
            },
            flush () {
                readableSource.size = chunkOffset;
                if (onend) callHandler(onend, chunkOffset);
            }
        }, {
            highWaterMark: 1,
            size: ()=>chunkSize
        });
    }
}
async function callHandler(handler, ...parameters) {
    try {
        await handler(...parameters);
    } catch (_error) {
    // ignored
    }
}
function createWorkerInterface(workerData, config) {
    return {
        run: ()=>runWorker(workerData, config)
    };
}
function createWebWorkerInterface(workerData, { baseURL, chunkSize }) {
    if (!workerData.interface) Object.assign(workerData, {
        worker: getWebWorker(workerData.scripts[0], baseURL, workerData),
        interface: {
            run: ()=>runWebWorker(workerData, {
                    chunkSize
                })
        }
    });
    return workerData.interface;
}
async function runWorker({ options, readable, writable, onTaskFinished }, config) {
    const codecStream = new (0, _codecStreamJs.CodecStream)(options, config);
    try {
        await readable.pipeThrough(codecStream).pipeTo(writable, {
            preventClose: true,
            preventAbort: true
        });
        const { signature, size } = codecStream;
        return {
            signature,
            size
        };
    } finally{
        onTaskFinished();
    }
}
async function runWebWorker(workerData, config) {
    let resolveResult, rejectResult;
    const result = new Promise((resolve, reject)=>{
        resolveResult = resolve;
        rejectResult = reject;
    });
    Object.assign(workerData, {
        reader: null,
        writer: null,
        resolveResult,
        rejectResult,
        result
    });
    const { readable, options, scripts } = workerData;
    const { writable, closed } = watchClosedStream(workerData.writable);
    const streamsTransferred = sendMessage({
        type: (0, _codecStreamJs.MESSAGE_START),
        scripts: scripts.slice(1),
        options,
        config,
        readable,
        writable
    }, workerData);
    if (!streamsTransferred) Object.assign(workerData, {
        reader: readable.getReader(),
        writer: writable.getWriter()
    });
    const resultValue = await result;
    try {
        await writable.close();
    } catch (_error) {
    // ignored
    }
    await closed;
    return resultValue;
}
function watchClosedStream(writableSource) {
    const writer = writableSource.getWriter();
    let resolveStreamClosed;
    const closed = new Promise((resolve)=>resolveStreamClosed = resolve);
    const writable = new WritableStream({
        async write (chunk) {
            await writer.ready;
            await writer.write(chunk);
        },
        close () {
            writer.releaseLock();
            resolveStreamClosed();
        },
        abort (reason) {
            return writer.abort(reason);
        }
    });
    return {
        writable,
        closed
    };
}
let classicWorkersSupported = true;
let transferStreamsSupported = true;
function getWebWorker(url, baseURL, workerData) {
    const workerOptions = {
        type: "module"
    };
    let scriptUrl, worker;
    // deno-lint-ignore valid-typeof
    if (typeof url == (0, _constantsJs.FUNCTION_TYPE)) url = url();
    try {
        scriptUrl = new URL(url, baseURL);
    } catch (_error) {
        scriptUrl = url;
    }
    if (classicWorkersSupported) try {
        worker = new Worker(scriptUrl);
    } catch (_error) {
        classicWorkersSupported = false;
        worker = new Worker(scriptUrl, workerOptions);
    }
    else worker = new Worker(scriptUrl, workerOptions);
    worker.addEventListener((0, _codecStreamJs.MESSAGE_EVENT_TYPE), (event)=>onMessage(event, workerData));
    return worker;
}
function sendMessage(message, { worker, writer, onTaskFinished, transferStreams }) {
    try {
        let { value, readable, writable } = message;
        const transferables = [];
        if (value) {
            const { buffer, length } = value;
            if (length != buffer.byteLength) value = new Uint8Array(value);
            message.value = value.buffer;
            transferables.push(message.value);
        }
        if (transferStreams && transferStreamsSupported) {
            if (readable) transferables.push(readable);
            if (writable) transferables.push(writable);
        } else message.readable = message.writable = null;
        if (transferables.length) try {
            worker.postMessage(message, transferables);
            return true;
        } catch (_error) {
            transferStreamsSupported = false;
            message.readable = message.writable = null;
            worker.postMessage(message);
        }
        else worker.postMessage(message);
    } catch (error) {
        if (writer) writer.releaseLock();
        onTaskFinished();
        throw error;
    }
}
async function onMessage({ data }, workerData) {
    const { type, value, messageId, result, error } = data;
    const { reader, writer, resolveResult, rejectResult, onTaskFinished } = workerData;
    try {
        if (error) {
            const { message, stack, code, name } = error;
            const responseError = new Error(message);
            Object.assign(responseError, {
                stack,
                code,
                name
            });
            close(responseError);
        } else {
            if (type == (0, _codecStreamJs.MESSAGE_PULL)) {
                const { value, done } = await reader.read();
                sendMessage({
                    type: (0, _codecStreamJs.MESSAGE_DATA),
                    value,
                    done,
                    messageId
                }, workerData);
            }
            if (type == (0, _codecStreamJs.MESSAGE_DATA)) {
                await writer.ready;
                await writer.write(new Uint8Array(value));
                sendMessage({
                    type: (0, _codecStreamJs.MESSAGE_ACK_DATA),
                    messageId
                }, workerData);
            }
            if (type == (0, _codecStreamJs.MESSAGE_CLOSE)) close(null, result);
        }
    } catch (error) {
        close(error);
    }
    function close(error, result) {
        if (error) rejectResult(error);
        else resolveResult(result);
        if (writer) writer.releaseLock();
        onTaskFinished();
    }
}

},{"./constants.js":"4V9hL","./streams/codec-stream.js":"2NYwS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1whTf":[function(require,module,exports) {
/*
 Copyright (c) 2022 Gildas Lormeau. All rights reserved.

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions are met:

 1. Redistributions of source code must retain the above copyright notice,
 this list of conditions and the following disclaimer.

 2. Redistributions in binary form must reproduce the above copyright 
 notice, this list of conditions and the following disclaimer in 
 the documentation and/or other materials provided with the distribution.

 3. The names of the authors may not be used to endorse or promote products
 derived from this software without specific prior written permission.

 THIS SOFTWARE IS PROVIDED ''AS IS'' AND ANY EXPRESSED OR IMPLIED WARRANTIES,
 INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
 FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL JCRAFT,
 INC. OR ANY CONTRIBUTORS TO THIS SOFTWARE BE LIABLE FOR ANY DIRECT, INDIRECT,
 INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA,
 OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
 LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
 EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "configure", ()=>(0, _configurationJs.configure));
parcelHelpers.export(exports, "getMimeType", ()=>(0, _defaultMimeTypeJs.getMimeType));
parcelHelpers.export(exports, "initShimAsyncCodec", ()=>(0, _streamCodecShimJs.initShimAsyncCodec));
parcelHelpers.export(exports, "terminateWorkers", ()=>(0, _codecPoolJs.terminateWorkers));
var _configurationJs = require("./core/configuration.js");
var _zWorkerInlineJs = require("./z-worker-inline.js");
var _defaultMimeTypeJs = require("./core/util/default-mime-type.js");
var _streamCodecShimJs = require("./core/util/stream-codec-shim.js");
var _codecPoolJs = require("./core/codec-pool.js");
var _ioJs = require("./core/io.js");
parcelHelpers.exportAll(_ioJs, exports);
var _zipReaderJs = require("./core/zip-reader.js");
parcelHelpers.exportAll(_zipReaderJs, exports);
var _zipWriterJs = require("./core/zip-writer.js");
parcelHelpers.exportAll(_zipWriterJs, exports);
var _zipFsCoreJs = require("./core/zip-fs-core.js");
parcelHelpers.exportAll(_zipFsCoreJs, exports);
let baseURL;
try {
    baseURL = "file:///node_modules/@zip.js/zip.js/lib/zip-fs.js";
} catch (_error) {
// ignored
}
(0, _configurationJs.configure)({
    baseURL
});
(0, _zWorkerInlineJs.configureWebWorker)((0, _configurationJs.configure));

},{"./core/configuration.js":"5UMrn","./z-worker-inline.js":"8J4yL","./core/util/default-mime-type.js":"8u2Mv","./core/util/stream-codec-shim.js":"jU4ft","./core/codec-pool.js":"36tHD","./core/io.js":"8tQJ7","./core/zip-reader.js":"7x52C","./core/zip-writer.js":"3jPJZ","./core/zip-fs-core.js":"jzqAd","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8J4yL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "configureWebWorker", ()=>e);
function e(e) {
    const t = ()=>URL.createObjectURL(new Blob([
            'const{Array:e,Object:t,Number:n,Math:r,Error:s,Uint8Array:i,Uint16Array:o,Uint32Array:c,Int32Array:f,Map:a,DataView:l,Promise:u,TextEncoder:w,crypto:h,postMessage:d,TransformStream:p,ReadableStream:y,WritableStream:m,CompressionStream:b,DecompressionStream:g}=self;class k{constructor(e){return class extends p{constructor(t,n){const r=new e(n);super({transform(e,t){t.enqueue(r.append(e))},flush(e){const t=r.flush();t&&e.enqueue(t)}})}}}}const v=[];for(let e=0;256>e;e++){let t=e;for(let e=0;8>e;e++)1&t?t=t>>>1^3988292384:t>>>=1;v[e]=t}class S{constructor(e){this.t=e||-1}append(e){let t=0|this.t;for(let n=0,r=0|e.length;r>n;n++)t=t>>>8^v[255&(t^e[n])];this.t=t}get(){return~this.t}}class z extends p{constructor(){const e=new S;super({transform(t){e.append(t)},flush(t){const n=new i(4);new l(n.buffer).setUint32(0,e.get()),t.enqueue(n)}})}}const _={concat(e,t){if(0===e.length||0===t.length)return e.concat(t);const n=e[e.length-1],r=_.i(n);return 32===r?e.concat(t):_.o(t,r,0|n,e.slice(0,e.length-1))},l(e){const t=e.length;if(0===t)return 0;const n=e[t-1];return 32*(t-1)+_.i(n)},u(e,t){if(32*e.length<t)return e;const n=(e=e.slice(0,r.ceil(t/32))).length;return t&=31,n>0&&t&&(e[n-1]=_.h(t,e[n-1]&2147483648>>t-1,1)),e},h:(e,t,n)=>32===e?t:(n?0|t:t<<32-e)+1099511627776*e,i:e=>r.round(e/1099511627776)||32,o(e,t,n,r){for(void 0===r&&(r=[]);t>=32;t-=32)r.push(n),n=0;if(0===t)return r.concat(e);for(let s=0;s<e.length;s++)r.push(n|e[s]>>>t),n=e[s]<<32-t;const s=e.length?e[e.length-1]:0,i=_.i(s);return r.push(_.h(t+i&31,t+i>32?n:r.pop(),1)),r}},C={p:{m(e){const t=_.l(e)/8,n=new i(t);let r;for(let s=0;t>s;s++)0==(3&s)&&(r=e[s/4]),n[s]=r>>>24,r<<=8;return n},g(e){const t=[];let n,r=0;for(n=0;n<e.length;n++)r=r<<8|e[n],3==(3&n)&&(t.push(r),r=0);return 3&n&&t.push(_.h(8*(3&n),r)),t}}},I={k:function(e){e?(this.v=e.v.slice(0),this.S=e.S.slice(0),this._=e._):this.reset()}};I.k.prototype={blockSize:512,reset(){const e=this;return e.v=this.C.slice(0),e.S=[],e._=0,e},update(e){const t=this;"string"==typeof e&&(e=C.I.g(e));const n=t.S=_.concat(t.S,e),r=t._,i=t._=r+_.l(e);if(i>9007199254740991)throw new s("Cannot hash more than 2^53 - 1 bits");const o=new c(n);let f=0;for(let e=t.blockSize+r-(t.blockSize+r&t.blockSize-1);i>=e;e+=t.blockSize)t.A(o.subarray(16*f,16*(f+1))),f+=1;return n.splice(0,16*f),t},D(){const e=this;let t=e.S;const n=e.v;t=_.concat(t,[_.h(1,1)]);for(let e=t.length+2;15&e;e++)t.push(0);for(t.push(r.floor(e._/4294967296)),t.push(0|e._);t.length;)e.A(t.splice(0,16));return e.reset(),n},C:[1732584193,4023233417,2562383102,271733878,3285377520],V:[1518500249,1859775393,2400959708,3395469782],R:(e,t,n,r)=>e>19?e>39?e>59?e>79?void 0:t^n^r:t&n|t&r|n&r:t^n^r:t&n|~t&r,B:(e,t)=>t<<e|t>>>32-e,A(t){const n=this,s=n.v,i=e(80);for(let e=0;16>e;e++)i[e]=t[e];let o=s[0],c=s[1],f=s[2],a=s[3],l=s[4];for(let e=0;79>=e;e++){16>e||(i[e]=n.B(1,i[e-3]^i[e-8]^i[e-14]^i[e-16]));const t=n.B(5,o)+n.R(e,c,f,a)+l+i[e]+n.V[r.floor(e/20)]|0;l=a,a=f,f=n.B(30,c),c=o,o=t}s[0]=s[0]+o|0,s[1]=s[1]+c|0,s[2]=s[2]+f|0,s[3]=s[3]+a|0,s[4]=s[4]+l|0}};const x={getRandomValues(e){const t=new c(e.buffer),n=e=>{let t=987654321;const n=4294967295;return()=>(t=36969*(65535&t)+(t>>16)&n,(((t<<16)+(e=18e3*(65535&e)+(e>>16)&n)&n)/4294967296+.5)*(r.random()>.5?1:-1))};for(let s,i=0;i<e.length;i+=4){const e=n(4294967296*(s||r.random()));s=987654071*e(),t[i/4]=4294967296*e()|0}return e}},A={importKey:e=>new A.M(C.p.g(e)),K(e,t,n,r){if(n=n||1e4,0>r||0>n)throw new s("invalid params to pbkdf2");const i=1+(r>>5)<<2;let o,c,f,a,u;const w=new ArrayBuffer(i),h=new l(w);let d=0;const p=_;for(t=C.p.g(t),u=1;(i||1)>d;u++){for(o=c=e.encrypt(p.concat(t,[u])),f=1;n>f;f++)for(c=e.encrypt(c),a=0;a<c.length;a++)o[a]^=c[a];for(f=0;(i||1)>d&&f<o.length;f++)h.setInt32(d,o[f]),d+=4}return w.slice(0,r/8)},M:class{constructor(e){const t=this,n=t.P=I.k,r=[[],[]],s=n.prototype.blockSize/32;t.U=[new n,new n],e.length>s&&(e=n.hash(e));for(let t=0;s>t;t++)r[0][t]=909522486^e[t],r[1][t]=1549556828^e[t];t.U[0].update(r[0]),t.U[1].update(r[1]),t.N=new n(t.U[0])}reset(){const e=this;e.N=new e.P(e.U[0]),e.T=!1}update(e){this.T=!0,this.N.update(e)}digest(){const e=this,t=e.N.D(),n=new e.P(e.U[1]).update(t).D();return e.reset(),n}encrypt(e){if(this.T)throw new s("encrypt on already updated hmac called!");return this.update(e),this.digest(e)}}},D=void 0!==h&&"function"==typeof h.getRandomValues;function V(e){return D?h.getRandomValues(e):x.getRandomValues(e)}const R={name:"PBKDF2"},B=t.assign({hash:{name:"HMAC"}},R),E=t.assign({iterations:1e3,hash:{name:"SHA-1"}},R),M=["deriveBits"],K=[8,12,16],P=[16,24,32],U=[0,0,0,0],N=void 0!==h,T=N&&h.subtle,W=N&&void 0!==T,H=N&&W&&"function"==typeof T.importKey,L=N&&W&&"function"==typeof T.deriveBits,j=C.p,F=class{constructor(e){const t=this;t.W=[[[],[],[],[],[]],[[],[],[],[],[]]],t.W[0][0][0]||t.H();const n=t.W[0][4],r=t.W[1],i=e.length;let o,c,f,a=1;if(4!==i&&6!==i&&8!==i)throw new s("invalid aes key size");for(t.V=[c=e.slice(0),f=[]],o=i;4*i+28>o;o++){let e=c[o-1];(o%i==0||8===i&&o%i==4)&&(e=n[e>>>24]<<24^n[e>>16&255]<<16^n[e>>8&255]<<8^n[255&e],o%i==0&&(e=e<<8^e>>>24^a<<24,a=a<<1^283*(a>>7))),c[o]=c[o-i]^e}for(let e=0;o;e++,o--){const t=c[3&e?o:o-4];f[e]=4>=o||4>e?t:r[0][n[t>>>24]]^r[1][n[t>>16&255]]^r[2][n[t>>8&255]]^r[3][n[255&t]]}}encrypt(e){return this.L(e,0)}decrypt(e){return this.L(e,1)}H(){const e=this.W[0],t=this.W[1],n=e[4],r=t[4],s=[],i=[];let o,c,f,a;for(let e=0;256>e;e++)i[(s[e]=e<<1^283*(e>>7))^e]=e;for(let l=o=0;!n[l];l^=c||1,o=i[o]||1){let i=o^o<<1^o<<2^o<<3^o<<4;i=i>>8^255&i^99,n[l]=i,r[i]=l,a=s[f=s[c=s[l]]];let u=16843009*a^65537*f^257*c^16843008*l,w=257*s[i]^16843008*i;for(let n=0;4>n;n++)e[n][l]=w=w<<24^w>>>8,t[n][i]=u=u<<24^u>>>8}for(let n=0;5>n;n++)e[n]=e[n].slice(0),t[n]=t[n].slice(0)}L(e,t){if(4!==e.length)throw new s("invalid aes block size");const n=this.V[t],r=n.length/4-2,i=[0,0,0,0],o=this.W[t],c=o[0],f=o[1],a=o[2],l=o[3],u=o[4];let w,h,d,p=e[0]^n[0],y=e[t?3:1]^n[1],m=e[2]^n[2],b=e[t?1:3]^n[3],g=4;for(let e=0;r>e;e++)w=c[p>>>24]^f[y>>16&255]^a[m>>8&255]^l[255&b]^n[g],h=c[y>>>24]^f[m>>16&255]^a[b>>8&255]^l[255&p]^n[g+1],d=c[m>>>24]^f[b>>16&255]^a[p>>8&255]^l[255&y]^n[g+2],b=c[b>>>24]^f[p>>16&255]^a[y>>8&255]^l[255&m]^n[g+3],g+=4,p=w,y=h,m=d;for(let e=0;4>e;e++)i[t?3&-e:e]=u[p>>>24]<<24^u[y>>16&255]<<16^u[m>>8&255]<<8^u[255&b]^n[g++],w=p,p=y,y=m,m=b,b=w;return i}},O=class{constructor(e,t){this.j=e,this.F=t,this.O=t}reset(){this.O=this.F}update(e){return this.q(this.j,e,this.O)}G(e){if(255==(e>>24&255)){let t=e>>16&255,n=e>>8&255,r=255&e;255===t?(t=0,255===n?(n=0,255===r?r=0:++r):++n):++t,e=0,e+=t<<16,e+=n<<8,e+=r}else e+=1<<24;return e}J(e){0===(e[0]=this.G(e[0]))&&(e[1]=this.G(e[1]))}q(e,t,n){let r;if(!(r=t.length))return[];const s=_.l(t);for(let s=0;r>s;s+=4){this.J(n);const r=e.encrypt(n);t[s]^=r[0],t[s+1]^=r[1],t[s+2]^=r[2],t[s+3]^=r[3]}return _.u(t,s)}},q=A.M;class G extends p{constructor({password:e,signed:n,encryptionStrength:r}){super({start(){t.assign(this,{ready:new u((e=>this.X=e)),password:e,signed:n,Y:r-1,pending:new i})},async transform(e,t){const n=this,{password:r,Y:o,X:c,ready:f}=n;r?(await(async(e,t,n,r)=>{const i=await X(e,t,n,Z(r,0,K[t])),o=Z(r,K[t]);if(i[0]!=o[0]||i[1]!=o[1])throw new s("Invalid password")})(n,o,r,Z(e,0,K[o]+2)),e=Z(e,K[o]+2),c()):await f;const a=new i(e.length-10-(e.length-10)%16);t.enqueue(Q(n,e,a,0,10,!0))},async flush(e){const{signed:t,Z:n,$:r,pending:o,ready:c}=this;await c;const f=Z(o,0,o.length-10),a=Z(o,o.length-10);let l=new i;if(f.length){const e=ee(j,f);r.update(e);const t=n.update(e);l=$(j,t)}if(t){const e=Z($(j,r.digest()),0,10);for(let t=0;10>t;t++)if(e[t]!=a[t])throw new s("Invalid signature")}e.enqueue(l)}})}}class J extends p{constructor({password:e,encryptionStrength:n}){let r;super({start(){t.assign(this,{ready:new u((e=>this.X=e)),password:e,Y:n-1,pending:new i})},async transform(e,t){const n=this,{password:r,Y:s,X:o,ready:c}=n;let f=new i;r?(f=await(async(e,t,n)=>{const r=V(new i(K[t]));return Y(r,await X(e,t,n,r))})(n,s,r),o()):await c;const a=new i(f.length+e.length-e.length%16);a.set(f,0),t.enqueue(Q(n,e,a,f.length,0))},async flush(e){const{Z:t,$:n,pending:s,ready:o}=this;await o;let c=new i;if(s.length){const e=t.update(ee(j,s));n.update(e),c=$(j,e)}r.signature=$(j,n.digest()).slice(0,10),e.enqueue(Y(c,r.signature))}}),r=this}}function Q(e,t,n,r,s,o){const{Z:c,$:f,pending:a}=e,l=t.length-s;let u;for(a.length&&(t=Y(a,t),n=((e,t)=>{if(t&&t>e.length){const n=e;(e=new i(t)).set(n,0)}return e})(n,l-l%16)),u=0;l-16>=u;u+=16){const e=ee(j,Z(t,u,u+16));o&&f.update(e);const s=c.update(e);o||f.update(s),n.set($(j,s),u+r)}return e.pending=Z(t,u),n}async function X(n,r,s,o){n.password=null;const c=(e=>{if(void 0===w){const t=new i((e=unescape(encodeURIComponent(e))).length);for(let n=0;n<t.length;n++)t[n]=e.charCodeAt(n);return t}return(new w).encode(e)})(s),f=await((e,t,n,r,s)=>H?T.importKey("raw",t,n,!1,s):A.importKey(t))(0,c,B,0,M),a=await(async(e,t,n)=>L?await T.deriveBits(e,t,n):A.K(t,e.salt,E.iterations,n))(t.assign({salt:o},E),f,8*(2*P[r]+2)),l=new i(a),u=ee(j,Z(l,0,P[r])),h=ee(j,Z(l,P[r],2*P[r])),d=Z(l,2*P[r]);return t.assign(n,{keys:{key:u,ee:h,passwordVerification:d},Z:new O(new F(u),e.from(U)),$:new q(h)}),d}function Y(e,t){let n=e;return e.length+t.length&&(n=new i(e.length+t.length),n.set(e,0),n.set(t,e.length)),n}function Z(e,t,n){return e.subarray(t,n)}function $(e,t){return e.m(t)}function ee(e,t){return e.g(t)}class te extends p{constructor({password:e,passwordVerification:n}){super({start(){t.assign(this,{password:e,passwordVerification:n}),ie(this,e)},transform(e,t){const n=this;if(n.password){const t=re(n,e.subarray(0,12));if(n.password=null,t[11]!=n.passwordVerification)throw new s("Invalid password");e=e.subarray(12)}t.enqueue(re(n,e))}})}}class ne extends p{constructor({password:e,passwordVerification:n}){super({start(){t.assign(this,{password:e,passwordVerification:n}),ie(this,e)},transform(e,t){const n=this;let r,s;if(n.password){n.password=null;const t=V(new i(12));t[11]=n.passwordVerification,r=new i(e.length+t.length),r.set(se(n,t),0),s=12}else r=new i(e.length),s=0;r.set(se(n,e),s),t.enqueue(r)}})}}function re(e,t){const n=new i(t.length);for(let r=0;r<t.length;r++)n[r]=ce(e)^t[r],oe(e,n[r]);return n}function se(e,t){const n=new i(t.length);for(let r=0;r<t.length;r++)n[r]=ce(e)^t[r],oe(e,t[r]);return n}function ie(e,n){const r=[305419896,591751049,878082192];t.assign(e,{keys:r,te:new S(r[0]),ne:new S(r[2])});for(let t=0;t<n.length;t++)oe(e,n.charCodeAt(t))}function oe(e,t){let[n,s,i]=e.keys;e.te.append([t]),n=~e.te.get(),s=ae(r.imul(ae(s+fe(n)),134775813)+1),e.ne.append([s>>>24]),i=~e.ne.get(),e.keys=[n,s,i]}function ce(e){const t=2|e.keys[2];return fe(r.imul(t,1^t)>>>8)}function fe(e){return 255&e}function ae(e){return 4294967295&e}class le extends p{constructor(e,{chunkSize:t,CompressionStream:n,CompressionStreamNative:r}){super({});const{compressed:s,encrypted:i,useCompressionStream:o,zipCrypto:c,signed:f,level:a}=e,u=this;let w,h,d=we(super.readable);i&&!c||!f||([d,w]=d.tee(),w=pe(w,new z)),s&&(d=de(d,o,{level:a,chunkSize:t},r,n)),i&&(c?d=pe(d,new ne(e)):(h=new J(e),d=pe(d,h))),he(u,d,(async()=>{let e;i&&!c&&(e=h.signature),i&&!c||!f||(e=await w.getReader().read(),e=new l(e.value.buffer).getUint32(0)),u.signature=e}))}}class ue extends p{constructor(e,{chunkSize:t,DecompressionStream:n,DecompressionStreamNative:r}){super({});const{zipCrypto:i,encrypted:o,signed:c,signature:f,compressed:a,useCompressionStream:u}=e;let w,h,d=we(super.readable);o&&(i?d=pe(d,new te(e)):(h=new G(e),d=pe(d,h))),a&&(d=de(d,u,{chunkSize:t},r,n)),o&&!i||!c||([d,w]=d.tee(),w=pe(w,new z)),he(this,d,(async()=>{if((!o||i)&&c){const e=await w.getReader().read(),t=new l(e.value.buffer);if(f!=t.getUint32(0,!1))throw new s("Invalid signature")}}))}}function we(e){return pe(e,new p({transform(e,t){e&&e.length&&t.enqueue(e)}}))}function he(e,n,r){n=pe(n,new p({flush:r})),t.defineProperty(e,"readable",{get:()=>n})}function de(e,t,n,r,s){try{e=pe(e,new(t&&r?r:s)("deflate-raw",n))}catch(r){if(!t)throw r;e=pe(e,new s("deflate-raw",n))}return e}function pe(e,t){return e.pipeThrough(t)}class ye extends p{constructor(e,n){super({});const r=this,{codecType:s}=e;let i;s.startsWith("deflate")?i=le:s.startsWith("inflate")&&(i=ue);let o=0;const c=new i(e,n),f=super.readable,a=new p({transform(e,t){e&&e.length&&(o+=e.length,t.enqueue(e))},flush(){const{signature:e}=c;t.assign(r,{signature:e,size:o})}});t.defineProperty(r,"readable",{get:()=>f.pipeThrough(c).pipeThrough(a)})}}const me=new a,be=new a;let ge=0;async function ke(e){try{const{options:t,scripts:r,config:s}=e;r&&r.length&&importScripts.apply(void 0,r),self.initCodec&&self.initCodec(),s.CompressionStreamNative=self.CompressionStream,s.DecompressionStreamNative=self.DecompressionStream,self.Deflate&&(s.CompressionStream=new k(self.Deflate)),self.Inflate&&(s.DecompressionStream=new k(self.Inflate));const i={highWaterMark:1,size:()=>s.chunkSize},o=e.readable||new y({async pull(e){const t=new u((e=>me.set(ge,e)));ve({type:"pull",messageId:ge}),ge=(ge+1)%n.MAX_SAFE_INTEGER;const{value:r,done:s}=await t;e.enqueue(r),s&&e.close()}},i),c=e.writable||new m({async write(e){let t;const r=new u((e=>t=e));be.set(ge,t),ve({type:"data",value:e,messageId:ge}),ge=(ge+1)%n.MAX_SAFE_INTEGER,await r}},i),f=new ye(t,s);await o.pipeThrough(f).pipeTo(c,{preventAbort:!0});try{await c.close()}catch(e){}const{signature:a,size:l}=f;ve({type:"close",result:{signature:a,size:l}})}catch(e){Se(e)}}function ve(e){let{value:t}=e;if(t)if(t.length)try{t=new i(t),e.value=t.buffer,d(e,[e.value])}catch(t){d(e)}else d(e);else d(e)}function Se(e){const{message:t,stack:n,code:r,name:s}=e;d({error:{message:t,stack:n,code:r,name:s}})}function ze(t){return _e(t.map((([t,n])=>new e(t).fill(n,0,t))))}function _e(t){return t.reduce(((t,n)=>t.concat(e.isArray(n)?_e(n):n)),[])}addEventListener("message",(({data:e})=>{const{type:t,messageId:n,value:r,done:s}=e;try{if("start"==t&&ke(e),"data"==t){const e=me.get(n);me.delete(n),e({value:new i(r),done:s})}if("ack"==t){const e=be.get(n);be.delete(n),e()}}catch(e){Se(e)}}));const Ce=[0,1,2,3].concat(...ze([[2,4],[2,5],[4,6],[4,7],[8,8],[8,9],[16,10],[16,11],[32,12],[32,13],[64,14],[64,15],[2,0],[1,16],[1,17],[2,18],[2,19],[4,20],[4,21],[8,22],[8,23],[16,24],[16,25],[32,26],[32,27],[64,28],[64,29]]));function Ie(){const e=this;function t(e,t){let n=0;do{n|=1&e,e>>>=1,n<<=1}while(--t>0);return n>>>1}e.re=n=>{const s=e.se,i=e.oe.ie,o=e.oe.ce;let c,f,a,l=-1;for(n.fe=0,n.ae=573,c=0;o>c;c++)0!==s[2*c]?(n.le[++n.fe]=l=c,n.ue[c]=0):s[2*c+1]=0;for(;2>n.fe;)a=n.le[++n.fe]=2>l?++l:0,s[2*a]=1,n.ue[a]=0,n.we--,i&&(n.he-=i[2*a+1]);for(e.de=l,c=r.floor(n.fe/2);c>=1;c--)n.pe(s,c);a=o;do{c=n.le[1],n.le[1]=n.le[n.fe--],n.pe(s,1),f=n.le[1],n.le[--n.ae]=c,n.le[--n.ae]=f,s[2*a]=s[2*c]+s[2*f],n.ue[a]=r.max(n.ue[c],n.ue[f])+1,s[2*c+1]=s[2*f+1]=a,n.le[1]=a++,n.pe(s,1)}while(n.fe>=2);n.le[--n.ae]=n.le[1],(t=>{const n=e.se,r=e.oe.ie,s=e.oe.ye,i=e.oe.me,o=e.oe.be;let c,f,a,l,u,w,h=0;for(l=0;15>=l;l++)t.ge[l]=0;for(n[2*t.le[t.ae]+1]=0,c=t.ae+1;573>c;c++)f=t.le[c],l=n[2*n[2*f+1]+1]+1,l>o&&(l=o,h++),n[2*f+1]=l,f>e.de||(t.ge[l]++,u=0,i>f||(u=s[f-i]),w=n[2*f],t.we+=w*(l+u),r&&(t.he+=w*(r[2*f+1]+u)));if(0!==h){do{for(l=o-1;0===t.ge[l];)l--;t.ge[l]--,t.ge[l+1]+=2,t.ge[o]--,h-=2}while(h>0);for(l=o;0!==l;l--)for(f=t.ge[l];0!==f;)a=t.le[--c],a>e.de||(n[2*a+1]!=l&&(t.we+=(l-n[2*a+1])*n[2*a],n[2*a+1]=l),f--)}})(n),((e,n,r)=>{const s=[];let i,o,c,f=0;for(i=1;15>=i;i++)s[i]=f=f+r[i-1]<<1;for(o=0;n>=o;o++)c=e[2*o+1],0!==c&&(e[2*o]=t(s[c]++,c))})(s,e.de,n.ge)}}function xe(e,t,n,r,s){const i=this;i.ie=e,i.ye=t,i.me=n,i.ce=r,i.be=s}Ie.ke=[0,1,2,3,4,5,6,7].concat(...ze([[2,8],[2,9],[2,10],[2,11],[4,12],[4,13],[4,14],[4,15],[8,16],[8,17],[8,18],[8,19],[16,20],[16,21],[16,22],[16,23],[32,24],[32,25],[32,26],[31,27],[1,28]])),Ie.ve=[0,1,2,3,4,5,6,7,8,10,12,14,16,20,24,28,32,40,48,56,64,80,96,112,128,160,192,224,0],Ie.Se=[0,1,2,3,4,6,8,12,16,24,32,48,64,96,128,192,256,384,512,768,1024,1536,2048,3072,4096,6144,8192,12288,16384,24576],Ie.ze=e=>256>e?Ce[e]:Ce[256+(e>>>7)],Ie._e=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],Ie.Ce=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],Ie.Ie=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],Ie.xe=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];const Ae=ze([[144,8],[112,9],[24,7],[8,8]]);xe.Ae=_e([12,140,76,204,44,172,108,236,28,156,92,220,60,188,124,252,2,130,66,194,34,162,98,226,18,146,82,210,50,178,114,242,10,138,74,202,42,170,106,234,26,154,90,218,58,186,122,250,6,134,70,198,38,166,102,230,22,150,86,214,54,182,118,246,14,142,78,206,46,174,110,238,30,158,94,222,62,190,126,254,1,129,65,193,33,161,97,225,17,145,81,209,49,177,113,241,9,137,73,201,41,169,105,233,25,153,89,217,57,185,121,249,5,133,69,197,37,165,101,229,21,149,85,213,53,181,117,245,13,141,77,205,45,173,109,237,29,157,93,221,61,189,125,253,19,275,147,403,83,339,211,467,51,307,179,435,115,371,243,499,11,267,139,395,75,331,203,459,43,299,171,427,107,363,235,491,27,283,155,411,91,347,219,475,59,315,187,443,123,379,251,507,7,263,135,391,71,327,199,455,39,295,167,423,103,359,231,487,23,279,151,407,87,343,215,471,55,311,183,439,119,375,247,503,15,271,143,399,79,335,207,463,47,303,175,431,111,367,239,495,31,287,159,415,95,351,223,479,63,319,191,447,127,383,255,511,0,64,32,96,16,80,48,112,8,72,40,104,24,88,56,120,4,68,36,100,20,84,52,116,3,131,67,195,35,163,99,227].map(((e,t)=>[e,Ae[t]])));const De=ze([[30,5]]);function Ve(e,t,n,r,s){const i=this;i.De=e,i.Ve=t,i.Re=n,i.Be=r,i.Ee=s}xe.Me=_e([0,16,8,24,4,20,12,28,2,18,10,26,6,22,14,30,1,17,9,25,5,21,13,29,3,19,11,27,7,23].map(((e,t)=>[e,De[t]]))),xe.Ke=new xe(xe.Ae,Ie._e,257,286,15),xe.Pe=new xe(xe.Me,Ie.Ce,0,30,15),xe.Ue=new xe(null,Ie.Ie,0,19,7);const Re=[new Ve(0,0,0,0,0),new Ve(4,4,8,4,1),new Ve(4,5,16,8,1),new Ve(4,6,32,32,1),new Ve(4,4,16,16,2),new Ve(8,16,32,32,2),new Ve(8,16,128,128,2),new Ve(8,32,128,256,2),new Ve(32,128,258,1024,2),new Ve(32,258,258,4096,2)],Be=["need dictionary","stream end","","","stream error","data error","","buffer error","",""];function Ee(e,t,n,r){const s=e[2*t],i=e[2*n];return i>s||s==i&&r[t]<=r[n]}function Me(){const e=this;let t,n,s,c,f,a,l,u,w,h,d,p,y,m,b,g,k,v,S,z,_,C,I,x,A,D,V,R,B,E,M,K,P;const U=new Ie,N=new Ie,T=new Ie;let W,H,L,j,F,O;function q(){let t;for(t=0;286>t;t++)M[2*t]=0;for(t=0;30>t;t++)K[2*t]=0;for(t=0;19>t;t++)P[2*t]=0;M[512]=1,e.we=e.he=0,H=L=0}function G(e,t){let n,r=-1,s=e[1],i=0,o=7,c=4;0===s&&(o=138,c=3),e[2*(t+1)+1]=65535;for(let f=0;t>=f;f++)n=s,s=e[2*(f+1)+1],++i<o&&n==s||(c>i?P[2*n]+=i:0!==n?(n!=r&&P[2*n]++,P[32]++):i>10?P[36]++:P[34]++,i=0,r=n,0===s?(o=138,c=3):n==s?(o=6,c=3):(o=7,c=4))}function J(t){e.Ne[e.pending++]=t}function Q(e){J(255&e),J(e>>>8&255)}function X(e,t){let n;const r=t;O>16-r?(n=e,F|=n<<O&65535,Q(F),F=n>>>16-O,O+=r-16):(F|=e<<O&65535,O+=r)}function Y(e,t){const n=2*e;X(65535&t[n],65535&t[n+1])}function Z(e,t){let n,r,s=-1,i=e[1],o=0,c=7,f=4;for(0===i&&(c=138,f=3),n=0;t>=n;n++)if(r=i,i=e[2*(n+1)+1],++o>=c||r!=i){if(f>o)do{Y(r,P)}while(0!=--o);else 0!==r?(r!=s&&(Y(r,P),o--),Y(16,P),X(o-3,2)):o>10?(Y(18,P),X(o-11,7)):(Y(17,P),X(o-3,3));o=0,s=r,0===i?(c=138,f=3):r==i?(c=6,f=3):(c=7,f=4)}}function $(){16==O?(Q(F),F=0,O=0):8>O||(J(255&F),F>>>=8,O-=8)}function ee(t,n){let s,i,o;if(e.Te[H]=t,e.We[H]=255&n,H++,0===t?M[2*n]++:(L++,t--,M[2*(Ie.ke[n]+256+1)]++,K[2*Ie.ze(t)]++),0==(8191&H)&&V>2){for(s=8*H,i=_-k,o=0;30>o;o++)s+=K[2*o]*(5+Ie.Ce[o]);if(s>>>=3,L<r.floor(H/2)&&s<r.floor(i/2))return!0}return H==W-1}function te(t,n){let r,s,i,o,c=0;if(0!==H)do{r=e.Te[c],s=e.We[c],c++,0===r?Y(s,t):(i=Ie.ke[s],Y(i+256+1,t),o=Ie._e[i],0!==o&&(s-=Ie.ve[i],X(s,o)),r--,i=Ie.ze(r),Y(i,n),o=Ie.Ce[i],0!==o&&(r-=Ie.Se[i],X(r,o)))}while(H>c);Y(256,t),j=t[513]}function ne(){O>8?Q(F):O>0&&J(255&F),F=0,O=0}function re(t,n,r){X(0+(r?1:0),3),((t,n)=>{ne(),j=8,Q(n),Q(~n),e.Ne.set(u.subarray(t,t+n),e.pending),e.pending+=n})(t,n)}function se(n){((t,n,r)=>{let s,i,o=0;V>0?(U.re(e),N.re(e),o=(()=>{let t;for(G(M,U.de),G(K,N.de),T.re(e),t=18;t>=3&&0===P[2*Ie.xe[t]+1];t--);return e.we+=14+3*(t+1),t})(),s=e.we+3+7>>>3,i=e.he+3+7>>>3,i>s||(s=i)):s=i=n+5,n+4>s||-1==t?i==s?(X(2+(r?1:0),3),te(xe.Ae,xe.Me)):(X(4+(r?1:0),3),((e,t,n)=>{let r;for(X(e-257,5),X(t-1,5),X(n-4,4),r=0;n>r;r++)X(P[2*Ie.xe[r]+1],3);Z(M,e-1),Z(K,t-1)})(U.de+1,N.de+1,o+1),te(M,K)):re(t,n,r),q(),r&&ne()})(0>k?-1:k,_-k,n),k=_,t.He()}function ie(){let e,n,r,s;do{if(s=w-I-_,0===s&&0===_&&0===I)s=f;else if(-1==s)s--;else if(_>=f+f-262){u.set(u.subarray(f,f+f),0),C-=f,_-=f,k-=f,e=y,r=e;do{n=65535&d[--r],d[r]=f>n?0:n-f}while(0!=--e);e=f,r=e;do{n=65535&h[--r],h[r]=f>n?0:n-f}while(0!=--e);s+=f}if(0===t.Le)return;e=t.je(u,_+I,s),I+=e,3>I||(p=255&u[_],p=(p<<g^255&u[_+1])&b)}while(262>I&&0!==t.Le)}function oe(e){let t,n,r=A,s=_,i=x;const o=_>f-262?_-(f-262):0;let c=E;const a=l,w=_+258;let d=u[s+i-1],p=u[s+i];B>x||(r>>=2),c>I&&(c=I);do{if(t=e,u[t+i]==p&&u[t+i-1]==d&&u[t]==u[s]&&u[++t]==u[s+1]){s+=2,t++;do{}while(u[++s]==u[++t]&&u[++s]==u[++t]&&u[++s]==u[++t]&&u[++s]==u[++t]&&u[++s]==u[++t]&&u[++s]==u[++t]&&u[++s]==u[++t]&&u[++s]==u[++t]&&w>s);if(n=258-(w-s),s=w-258,n>i){if(C=e,i=n,n>=c)break;d=u[s+i-1],p=u[s+i]}}}while((e=65535&h[e&a])>o&&0!=--r);return i>I?I:i}e.ue=[],e.ge=[],e.le=[],M=[],K=[],P=[],e.pe=(t,n)=>{const r=e.le,s=r[n];let i=n<<1;for(;i<=e.fe&&(i<e.fe&&Ee(t,r[i+1],r[i],e.ue)&&i++,!Ee(t,s,r[i],e.ue));)r[n]=r[i],n=i,i<<=1;r[n]=s},e.Fe=(t,S,C,H,L,G)=>(H||(H=8),L||(L=8),G||(G=0),t.Oe=null,-1==S&&(S=6),1>L||L>9||8!=H||9>C||C>15||0>S||S>9||0>G||G>2?-2:(t.qe=e,a=C,f=1<<a,l=f-1,m=L+7,y=1<<m,b=y-1,g=r.floor((m+3-1)/3),u=new i(2*f),h=[],d=[],W=1<<L+6,e.Ne=new i(4*W),s=4*W,e.Te=new o(W),e.We=new i(W),V=S,R=G,(t=>(t.Ge=t.Je=0,t.Oe=null,e.pending=0,e.Qe=0,n=113,c=0,U.se=M,U.oe=xe.Ke,N.se=K,N.oe=xe.Pe,T.se=P,T.oe=xe.Ue,F=0,O=0,j=8,q(),(()=>{w=2*f,d[y-1]=0;for(let e=0;y-1>e;e++)d[e]=0;D=Re[V].Ve,B=Re[V].De,E=Re[V].Re,A=Re[V].Be,_=0,k=0,I=0,v=x=2,z=0,p=0})(),0))(t))),e.Xe=()=>42!=n&&113!=n&&666!=n?-2:(e.We=null,e.Te=null,e.Ne=null,d=null,h=null,u=null,e.qe=null,113==n?-3:0),e.Ye=(e,t,n)=>{let r=0;return-1==t&&(t=6),0>t||t>9||0>n||n>2?-2:(Re[V].Ee!=Re[t].Ee&&0!==e.Ge&&(r=e.Ze(1)),V!=t&&(V=t,D=Re[V].Ve,B=Re[V].De,E=Re[V].Re,A=Re[V].Be),R=n,r)},e.$e=(e,t,r)=>{let s,i=r,o=0;if(!t||42!=n)return-2;if(3>i)return 0;for(i>f-262&&(i=f-262,o=r-i),u.set(t.subarray(o,o+i),0),_=i,k=i,p=255&u[0],p=(p<<g^255&u[1])&b,s=0;i-3>=s;s++)p=(p<<g^255&u[s+2])&b,h[s&l]=d[p],d[p]=s;return 0},e.Ze=(r,i)=>{let o,w,m,A,B;if(i>4||0>i)return-2;if(!r.et||!r.tt&&0!==r.Le||666==n&&4!=i)return r.Oe=Be[4],-2;if(0===r.nt)return r.Oe=Be[7],-5;var E;if(t=r,A=c,c=i,42==n&&(w=8+(a-8<<4)<<8,m=(V-1&255)>>1,m>3&&(m=3),w|=m<<6,0!==_&&(w|=32),w+=31-w%31,n=113,J((E=w)>>8&255),J(255&E)),0!==e.pending){if(t.He(),0===t.nt)return c=-1,0}else if(0===t.Le&&A>=i&&4!=i)return t.Oe=Be[7],-5;if(666==n&&0!==t.Le)return r.Oe=Be[7],-5;if(0!==t.Le||0!==I||0!=i&&666!=n){switch(B=-1,Re[V].Ee){case 0:B=(e=>{let n,r=65535;for(r>s-5&&(r=s-5);;){if(1>=I){if(ie(),0===I&&0==e)return 0;if(0===I)break}if(_+=I,I=0,n=k+r,(0===_||_>=n)&&(I=_-n,_=n,se(!1),0===t.nt))return 0;if(_-k>=f-262&&(se(!1),0===t.nt))return 0}return se(4==e),0===t.nt?4==e?2:0:4==e?3:1})(i);break;case 1:B=(e=>{let n,r=0;for(;;){if(262>I){if(ie(),262>I&&0==e)return 0;if(0===I)break}if(3>I||(p=(p<<g^255&u[_+2])&b,r=65535&d[p],h[_&l]=d[p],d[p]=_),0===r||(_-r&65535)>f-262||2!=R&&(v=oe(r)),3>v)n=ee(0,255&u[_]),I--,_++;else if(n=ee(_-C,v-3),I-=v,v>D||3>I)_+=v,v=0,p=255&u[_],p=(p<<g^255&u[_+1])&b;else{v--;do{_++,p=(p<<g^255&u[_+2])&b,r=65535&d[p],h[_&l]=d[p],d[p]=_}while(0!=--v);_++}if(n&&(se(!1),0===t.nt))return 0}return se(4==e),0===t.nt?4==e?2:0:4==e?3:1})(i);break;case 2:B=(e=>{let n,r,s=0;for(;;){if(262>I){if(ie(),262>I&&0==e)return 0;if(0===I)break}if(3>I||(p=(p<<g^255&u[_+2])&b,s=65535&d[p],h[_&l]=d[p],d[p]=_),x=v,S=C,v=2,0!==s&&D>x&&f-262>=(_-s&65535)&&(2!=R&&(v=oe(s)),5>=v&&(1==R||3==v&&_-C>4096)&&(v=2)),3>x||v>x)if(0!==z){if(n=ee(0,255&u[_-1]),n&&se(!1),_++,I--,0===t.nt)return 0}else z=1,_++,I--;else{r=_+I-3,n=ee(_-1-S,x-3),I-=x-1,x-=2;do{++_>r||(p=(p<<g^255&u[_+2])&b,s=65535&d[p],h[_&l]=d[p],d[p]=_)}while(0!=--x);if(z=0,v=2,_++,n&&(se(!1),0===t.nt))return 0}}return 0!==z&&(n=ee(0,255&u[_-1]),z=0),se(4==e),0===t.nt?4==e?2:0:4==e?3:1})(i)}if(2!=B&&3!=B||(n=666),0==B||2==B)return 0===t.nt&&(c=-1),0;if(1==B){if(1==i)X(2,3),Y(256,xe.Ae),$(),9>1+j+10-O&&(X(2,3),Y(256,xe.Ae),$()),j=7;else if(re(0,0,!1),3==i)for(o=0;y>o;o++)d[o]=0;if(t.He(),0===t.nt)return c=-1,0}}return 4!=i?0:1}}function Ke(){const e=this;e.rt=0,e.st=0,e.Le=0,e.Ge=0,e.nt=0,e.Je=0}function Pe(e){const t=new Ke,n=(o=e&&e.chunkSize?e.chunkSize:65536)+5*(r.floor(o/16383)+1);var o;const c=new i(n);let f=e?e.level:-1;void 0===f&&(f=-1),t.Fe(f),t.et=c,this.append=(e,r)=>{let o,f,a=0,l=0,u=0;const w=[];if(e.length){t.rt=0,t.tt=e,t.Le=e.length;do{if(t.st=0,t.nt=n,o=t.Ze(0),0!=o)throw new s("deflating: "+t.Oe);t.st&&(t.st==n?w.push(new i(c)):w.push(c.slice(0,t.st))),u+=t.st,r&&t.rt>0&&t.rt!=a&&(r(t.rt),a=t.rt)}while(t.Le>0||0===t.nt);return w.length>1?(f=new i(u),w.forEach((e=>{f.set(e,l),l+=e.length}))):f=w[0]||new i,f}},this.flush=()=>{let e,r,o=0,f=0;const a=[];do{if(t.st=0,t.nt=n,e=t.Ze(4),1!=e&&0!=e)throw new s("deflating: "+t.Oe);n-t.nt>0&&a.push(c.slice(0,t.st)),f+=t.st}while(t.Le>0||0===t.nt);return t.Xe(),r=new i(f),a.forEach((e=>{r.set(e,o),o+=e.length})),r}}Ke.prototype={Fe(e,t){const n=this;return n.qe=new Me,t||(t=15),n.qe.Fe(n,e,t)},Ze(e){const t=this;return t.qe?t.qe.Ze(t,e):-2},Xe(){const e=this;if(!e.qe)return-2;const t=e.qe.Xe();return e.qe=null,t},Ye(e,t){const n=this;return n.qe?n.qe.Ye(n,e,t):-2},$e(e,t){const n=this;return n.qe?n.qe.$e(n,e,t):-2},je(e,t,n){const r=this;let s=r.Le;return s>n&&(s=n),0===s?0:(r.Le-=s,e.set(r.tt.subarray(r.rt,r.rt+s),t),r.rt+=s,r.Ge+=s,s)},He(){const e=this;let t=e.qe.pending;t>e.nt&&(t=e.nt),0!==t&&(e.et.set(e.qe.Ne.subarray(e.qe.Qe,e.qe.Qe+t),e.st),e.st+=t,e.qe.Qe+=t,e.Je+=t,e.nt-=t,e.qe.pending-=t,0===e.qe.pending&&(e.qe.Qe=0))}};const Ue=[0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535],Ne=[96,7,256,0,8,80,0,8,16,84,8,115,82,7,31,0,8,112,0,8,48,0,9,192,80,7,10,0,8,96,0,8,32,0,9,160,0,8,0,0,8,128,0,8,64,0,9,224,80,7,6,0,8,88,0,8,24,0,9,144,83,7,59,0,8,120,0,8,56,0,9,208,81,7,17,0,8,104,0,8,40,0,9,176,0,8,8,0,8,136,0,8,72,0,9,240,80,7,4,0,8,84,0,8,20,85,8,227,83,7,43,0,8,116,0,8,52,0,9,200,81,7,13,0,8,100,0,8,36,0,9,168,0,8,4,0,8,132,0,8,68,0,9,232,80,7,8,0,8,92,0,8,28,0,9,152,84,7,83,0,8,124,0,8,60,0,9,216,82,7,23,0,8,108,0,8,44,0,9,184,0,8,12,0,8,140,0,8,76,0,9,248,80,7,3,0,8,82,0,8,18,85,8,163,83,7,35,0,8,114,0,8,50,0,9,196,81,7,11,0,8,98,0,8,34,0,9,164,0,8,2,0,8,130,0,8,66,0,9,228,80,7,7,0,8,90,0,8,26,0,9,148,84,7,67,0,8,122,0,8,58,0,9,212,82,7,19,0,8,106,0,8,42,0,9,180,0,8,10,0,8,138,0,8,74,0,9,244,80,7,5,0,8,86,0,8,22,192,8,0,83,7,51,0,8,118,0,8,54,0,9,204,81,7,15,0,8,102,0,8,38,0,9,172,0,8,6,0,8,134,0,8,70,0,9,236,80,7,9,0,8,94,0,8,30,0,9,156,84,7,99,0,8,126,0,8,62,0,9,220,82,7,27,0,8,110,0,8,46,0,9,188,0,8,14,0,8,142,0,8,78,0,9,252,96,7,256,0,8,81,0,8,17,85,8,131,82,7,31,0,8,113,0,8,49,0,9,194,80,7,10,0,8,97,0,8,33,0,9,162,0,8,1,0,8,129,0,8,65,0,9,226,80,7,6,0,8,89,0,8,25,0,9,146,83,7,59,0,8,121,0,8,57,0,9,210,81,7,17,0,8,105,0,8,41,0,9,178,0,8,9,0,8,137,0,8,73,0,9,242,80,7,4,0,8,85,0,8,21,80,8,258,83,7,43,0,8,117,0,8,53,0,9,202,81,7,13,0,8,101,0,8,37,0,9,170,0,8,5,0,8,133,0,8,69,0,9,234,80,7,8,0,8,93,0,8,29,0,9,154,84,7,83,0,8,125,0,8,61,0,9,218,82,7,23,0,8,109,0,8,45,0,9,186,0,8,13,0,8,141,0,8,77,0,9,250,80,7,3,0,8,83,0,8,19,85,8,195,83,7,35,0,8,115,0,8,51,0,9,198,81,7,11,0,8,99,0,8,35,0,9,166,0,8,3,0,8,131,0,8,67,0,9,230,80,7,7,0,8,91,0,8,27,0,9,150,84,7,67,0,8,123,0,8,59,0,9,214,82,7,19,0,8,107,0,8,43,0,9,182,0,8,11,0,8,139,0,8,75,0,9,246,80,7,5,0,8,87,0,8,23,192,8,0,83,7,51,0,8,119,0,8,55,0,9,206,81,7,15,0,8,103,0,8,39,0,9,174,0,8,7,0,8,135,0,8,71,0,9,238,80,7,9,0,8,95,0,8,31,0,9,158,84,7,99,0,8,127,0,8,63,0,9,222,82,7,27,0,8,111,0,8,47,0,9,190,0,8,15,0,8,143,0,8,79,0,9,254,96,7,256,0,8,80,0,8,16,84,8,115,82,7,31,0,8,112,0,8,48,0,9,193,80,7,10,0,8,96,0,8,32,0,9,161,0,8,0,0,8,128,0,8,64,0,9,225,80,7,6,0,8,88,0,8,24,0,9,145,83,7,59,0,8,120,0,8,56,0,9,209,81,7,17,0,8,104,0,8,40,0,9,177,0,8,8,0,8,136,0,8,72,0,9,241,80,7,4,0,8,84,0,8,20,85,8,227,83,7,43,0,8,116,0,8,52,0,9,201,81,7,13,0,8,100,0,8,36,0,9,169,0,8,4,0,8,132,0,8,68,0,9,233,80,7,8,0,8,92,0,8,28,0,9,153,84,7,83,0,8,124,0,8,60,0,9,217,82,7,23,0,8,108,0,8,44,0,9,185,0,8,12,0,8,140,0,8,76,0,9,249,80,7,3,0,8,82,0,8,18,85,8,163,83,7,35,0,8,114,0,8,50,0,9,197,81,7,11,0,8,98,0,8,34,0,9,165,0,8,2,0,8,130,0,8,66,0,9,229,80,7,7,0,8,90,0,8,26,0,9,149,84,7,67,0,8,122,0,8,58,0,9,213,82,7,19,0,8,106,0,8,42,0,9,181,0,8,10,0,8,138,0,8,74,0,9,245,80,7,5,0,8,86,0,8,22,192,8,0,83,7,51,0,8,118,0,8,54,0,9,205,81,7,15,0,8,102,0,8,38,0,9,173,0,8,6,0,8,134,0,8,70,0,9,237,80,7,9,0,8,94,0,8,30,0,9,157,84,7,99,0,8,126,0,8,62,0,9,221,82,7,27,0,8,110,0,8,46,0,9,189,0,8,14,0,8,142,0,8,78,0,9,253,96,7,256,0,8,81,0,8,17,85,8,131,82,7,31,0,8,113,0,8,49,0,9,195,80,7,10,0,8,97,0,8,33,0,9,163,0,8,1,0,8,129,0,8,65,0,9,227,80,7,6,0,8,89,0,8,25,0,9,147,83,7,59,0,8,121,0,8,57,0,9,211,81,7,17,0,8,105,0,8,41,0,9,179,0,8,9,0,8,137,0,8,73,0,9,243,80,7,4,0,8,85,0,8,21,80,8,258,83,7,43,0,8,117,0,8,53,0,9,203,81,7,13,0,8,101,0,8,37,0,9,171,0,8,5,0,8,133,0,8,69,0,9,235,80,7,8,0,8,93,0,8,29,0,9,155,84,7,83,0,8,125,0,8,61,0,9,219,82,7,23,0,8,109,0,8,45,0,9,187,0,8,13,0,8,141,0,8,77,0,9,251,80,7,3,0,8,83,0,8,19,85,8,195,83,7,35,0,8,115,0,8,51,0,9,199,81,7,11,0,8,99,0,8,35,0,9,167,0,8,3,0,8,131,0,8,67,0,9,231,80,7,7,0,8,91,0,8,27,0,9,151,84,7,67,0,8,123,0,8,59,0,9,215,82,7,19,0,8,107,0,8,43,0,9,183,0,8,11,0,8,139,0,8,75,0,9,247,80,7,5,0,8,87,0,8,23,192,8,0,83,7,51,0,8,119,0,8,55,0,9,207,81,7,15,0,8,103,0,8,39,0,9,175,0,8,7,0,8,135,0,8,71,0,9,239,80,7,9,0,8,95,0,8,31,0,9,159,84,7,99,0,8,127,0,8,63,0,9,223,82,7,27,0,8,111,0,8,47,0,9,191,0,8,15,0,8,143,0,8,79,0,9,255],Te=[80,5,1,87,5,257,83,5,17,91,5,4097,81,5,5,89,5,1025,85,5,65,93,5,16385,80,5,3,88,5,513,84,5,33,92,5,8193,82,5,9,90,5,2049,86,5,129,192,5,24577,80,5,2,87,5,385,83,5,25,91,5,6145,81,5,7,89,5,1537,85,5,97,93,5,24577,80,5,4,88,5,769,84,5,49,92,5,12289,82,5,13,90,5,3073,86,5,193,192,5,24577],We=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],He=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,112,112],Le=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577],je=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13];function Fe(){let e,t,n,r,s,i;function o(e,t,o,c,f,a,l,u,w,h,d){let p,y,m,b,g,k,v,S,z,_,C,I,x,A,D;_=0,g=o;do{n[e[t+_]]++,_++,g--}while(0!==g);if(n[0]==o)return l[0]=-1,u[0]=0,0;for(S=u[0],k=1;15>=k&&0===n[k];k++);for(v=k,k>S&&(S=k),g=15;0!==g&&0===n[g];g--);for(m=g,S>g&&(S=g),u[0]=S,A=1<<k;g>k;k++,A<<=1)if(0>(A-=n[k]))return-3;if(0>(A-=n[g]))return-3;for(n[g]+=A,i[1]=k=0,_=1,x=2;0!=--g;)i[x]=k+=n[_],x++,_++;g=0,_=0;do{0!==(k=e[t+_])&&(d[i[k]++]=g),_++}while(++g<o);for(o=i[m],i[0]=g=0,_=0,b=-1,I=-S,s[0]=0,C=0,D=0;m>=v;v++)for(p=n[v];0!=p--;){for(;v>I+S;){if(b++,I+=S,D=m-I,D=D>S?S:D,(y=1<<(k=v-I))>p+1&&(y-=p+1,x=v,D>k))for(;++k<D&&(y<<=1)>n[++x];)y-=n[x];if(D=1<<k,h[0]+D>1440)return-3;s[b]=C=h[0],h[0]+=D,0!==b?(i[b]=g,r[0]=k,r[1]=S,k=g>>>I-S,r[2]=C-s[b-1]-k,w.set(r,3*(s[b-1]+k))):l[0]=C}for(r[1]=v-I,o>_?d[_]<c?(r[0]=256>d[_]?0:96,r[2]=d[_++]):(r[0]=a[d[_]-c]+16+64,r[2]=f[d[_++]-c]):r[0]=192,y=1<<v-I,k=g>>>I;D>k;k+=y)w.set(r,3*(C+k));for(k=1<<v-1;0!=(g&k);k>>>=1)g^=k;for(g^=k,z=(1<<I)-1;(g&z)!=i[b];)b--,I-=S,z=(1<<I)-1}return 0!==A&&1!=m?-5:0}function c(o){let c;for(e||(e=[],t=[],n=new f(16),r=[],s=new f(15),i=new f(16)),t.length<o&&(t=[]),c=0;o>c;c++)t[c]=0;for(c=0;16>c;c++)n[c]=0;for(c=0;3>c;c++)r[c]=0;s.set(n.subarray(0,15),0),i.set(n.subarray(0,16),0)}this.it=(n,r,s,i,f)=>{let a;return c(19),e[0]=0,a=o(n,0,19,19,null,null,s,r,i,e,t),-3==a?f.Oe="oversubscribed dynamic bit lengths tree":-5!=a&&0!==r[0]||(f.Oe="incomplete dynamic bit lengths tree",a=-3),a},this.ot=(n,r,s,i,f,a,l,u,w)=>{let h;return c(288),e[0]=0,h=o(s,0,n,257,We,He,a,i,u,e,t),0!=h||0===i[0]?(-3==h?w.Oe="oversubscribed literal/length tree":-4!=h&&(w.Oe="incomplete literal/length tree",h=-3),h):(c(288),h=o(s,n,r,0,Le,je,l,f,u,e,t),0!=h||0===f[0]&&n>257?(-3==h?w.Oe="oversubscribed distance tree":-5==h?(w.Oe="incomplete distance tree",h=-3):-4!=h&&(w.Oe="empty distance tree with lengths",h=-3),h):0)}}function Oe(){const e=this;let t,n,r,s,i=0,o=0,c=0,f=0,a=0,l=0,u=0,w=0,h=0,d=0;function p(e,t,n,r,s,i,o,c){let f,a,l,u,w,h,d,p,y,m,b,g,k,v,S,z;d=c.rt,p=c.Le,w=o.ct,h=o.ft,y=o.write,m=y<o.read?o.read-y-1:o.end-y,b=Ue[e],g=Ue[t];do{for(;20>h;)p--,w|=(255&c.lt(d++))<<h,h+=8;if(f=w&b,a=n,l=r,z=3*(l+f),0!==(u=a[z]))for(;;){if(w>>=a[z+1],h-=a[z+1],0!=(16&u)){for(u&=15,k=a[z+2]+(w&Ue[u]),w>>=u,h-=u;15>h;)p--,w|=(255&c.lt(d++))<<h,h+=8;for(f=w&g,a=s,l=i,z=3*(l+f),u=a[z];;){if(w>>=a[z+1],h-=a[z+1],0!=(16&u)){for(u&=15;u>h;)p--,w|=(255&c.lt(d++))<<h,h+=8;if(v=a[z+2]+(w&Ue[u]),w>>=u,h-=u,m-=k,v>y){S=y-v;do{S+=o.end}while(0>S);if(u=o.end-S,k>u){if(k-=u,y-S>0&&u>y-S)do{o.ut[y++]=o.ut[S++]}while(0!=--u);else o.ut.set(o.ut.subarray(S,S+u),y),y+=u,S+=u,u=0;S=0}}else S=y-v,y-S>0&&2>y-S?(o.ut[y++]=o.ut[S++],o.ut[y++]=o.ut[S++],k-=2):(o.ut.set(o.ut.subarray(S,S+2),y),y+=2,S+=2,k-=2);if(y-S>0&&k>y-S)do{o.ut[y++]=o.ut[S++]}while(0!=--k);else o.ut.set(o.ut.subarray(S,S+k),y),y+=k,S+=k,k=0;break}if(0!=(64&u))return c.Oe="invalid distance code",k=c.Le-p,k=k>h>>3?h>>3:k,p+=k,d-=k,h-=k<<3,o.ct=w,o.ft=h,c.Le=p,c.Ge+=d-c.rt,c.rt=d,o.write=y,-3;f+=a[z+2],f+=w&Ue[u],z=3*(l+f),u=a[z]}break}if(0!=(64&u))return 0!=(32&u)?(k=c.Le-p,k=k>h>>3?h>>3:k,p+=k,d-=k,h-=k<<3,o.ct=w,o.ft=h,c.Le=p,c.Ge+=d-c.rt,c.rt=d,o.write=y,1):(c.Oe="invalid literal/length code",k=c.Le-p,k=k>h>>3?h>>3:k,p+=k,d-=k,h-=k<<3,o.ct=w,o.ft=h,c.Le=p,c.Ge+=d-c.rt,c.rt=d,o.write=y,-3);if(f+=a[z+2],f+=w&Ue[u],z=3*(l+f),0===(u=a[z])){w>>=a[z+1],h-=a[z+1],o.ut[y++]=a[z+2],m--;break}}else w>>=a[z+1],h-=a[z+1],o.ut[y++]=a[z+2],m--}while(m>=258&&p>=10);return k=c.Le-p,k=k>h>>3?h>>3:k,p+=k,d-=k,h-=k<<3,o.ct=w,o.ft=h,c.Le=p,c.Ge+=d-c.rt,c.rt=d,o.write=y,0}e.init=(e,i,o,c,f,a)=>{t=0,u=e,w=i,r=o,h=c,s=f,d=a,n=null},e.wt=(e,y,m)=>{let b,g,k,v,S,z,_,C=0,I=0,x=0;for(x=y.rt,v=y.Le,C=e.ct,I=e.ft,S=e.write,z=S<e.read?e.read-S-1:e.end-S;;)switch(t){case 0:if(z>=258&&v>=10&&(e.ct=C,e.ft=I,y.Le=v,y.Ge+=x-y.rt,y.rt=x,e.write=S,m=p(u,w,r,h,s,d,e,y),x=y.rt,v=y.Le,C=e.ct,I=e.ft,S=e.write,z=S<e.read?e.read-S-1:e.end-S,0!=m)){t=1==m?7:9;break}c=u,n=r,o=h,t=1;case 1:for(b=c;b>I;){if(0===v)return e.ct=C,e.ft=I,y.Le=v,y.Ge+=x-y.rt,y.rt=x,e.write=S,e.ht(y,m);m=0,v--,C|=(255&y.lt(x++))<<I,I+=8}if(g=3*(o+(C&Ue[b])),C>>>=n[g+1],I-=n[g+1],k=n[g],0===k){f=n[g+2],t=6;break}if(0!=(16&k)){a=15&k,i=n[g+2],t=2;break}if(0==(64&k)){c=k,o=g/3+n[g+2];break}if(0!=(32&k)){t=7;break}return t=9,y.Oe="invalid literal/length code",m=-3,e.ct=C,e.ft=I,y.Le=v,y.Ge+=x-y.rt,y.rt=x,e.write=S,e.ht(y,m);case 2:for(b=a;b>I;){if(0===v)return e.ct=C,e.ft=I,y.Le=v,y.Ge+=x-y.rt,y.rt=x,e.write=S,e.ht(y,m);m=0,v--,C|=(255&y.lt(x++))<<I,I+=8}i+=C&Ue[b],C>>=b,I-=b,c=w,n=s,o=d,t=3;case 3:for(b=c;b>I;){if(0===v)return e.ct=C,e.ft=I,y.Le=v,y.Ge+=x-y.rt,y.rt=x,e.write=S,e.ht(y,m);m=0,v--,C|=(255&y.lt(x++))<<I,I+=8}if(g=3*(o+(C&Ue[b])),C>>=n[g+1],I-=n[g+1],k=n[g],0!=(16&k)){a=15&k,l=n[g+2],t=4;break}if(0==(64&k)){c=k,o=g/3+n[g+2];break}return t=9,y.Oe="invalid distance code",m=-3,e.ct=C,e.ft=I,y.Le=v,y.Ge+=x-y.rt,y.rt=x,e.write=S,e.ht(y,m);case 4:for(b=a;b>I;){if(0===v)return e.ct=C,e.ft=I,y.Le=v,y.Ge+=x-y.rt,y.rt=x,e.write=S,e.ht(y,m);m=0,v--,C|=(255&y.lt(x++))<<I,I+=8}l+=C&Ue[b],C>>=b,I-=b,t=5;case 5:for(_=S-l;0>_;)_+=e.end;for(;0!==i;){if(0===z&&(S==e.end&&0!==e.read&&(S=0,z=S<e.read?e.read-S-1:e.end-S),0===z&&(e.write=S,m=e.ht(y,m),S=e.write,z=S<e.read?e.read-S-1:e.end-S,S==e.end&&0!==e.read&&(S=0,z=S<e.read?e.read-S-1:e.end-S),0===z)))return e.ct=C,e.ft=I,y.Le=v,y.Ge+=x-y.rt,y.rt=x,e.write=S,e.ht(y,m);e.ut[S++]=e.ut[_++],z--,_==e.end&&(_=0),i--}t=0;break;case 6:if(0===z&&(S==e.end&&0!==e.read&&(S=0,z=S<e.read?e.read-S-1:e.end-S),0===z&&(e.write=S,m=e.ht(y,m),S=e.write,z=S<e.read?e.read-S-1:e.end-S,S==e.end&&0!==e.read&&(S=0,z=S<e.read?e.read-S-1:e.end-S),0===z)))return e.ct=C,e.ft=I,y.Le=v,y.Ge+=x-y.rt,y.rt=x,e.write=S,e.ht(y,m);m=0,e.ut[S++]=f,z--,t=0;break;case 7:if(I>7&&(I-=8,v++,x--),e.write=S,m=e.ht(y,m),S=e.write,z=S<e.read?e.read-S-1:e.end-S,e.read!=e.write)return e.ct=C,e.ft=I,y.Le=v,y.Ge+=x-y.rt,y.rt=x,e.write=S,e.ht(y,m);t=8;case 8:return m=1,e.ct=C,e.ft=I,y.Le=v,y.Ge+=x-y.rt,y.rt=x,e.write=S,e.ht(y,m);case 9:return m=-3,e.ct=C,e.ft=I,y.Le=v,y.Ge+=x-y.rt,y.rt=x,e.write=S,e.ht(y,m);default:return m=-2,e.ct=C,e.ft=I,y.Le=v,y.Ge+=x-y.rt,y.rt=x,e.write=S,e.ht(y,m)}},e.dt=()=>{}}Fe.yt=(e,t,n,r)=>(e[0]=9,t[0]=5,n[0]=Ne,r[0]=Te,0);const qe=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];function Ge(e,t){const n=this;let r,s=0,o=0,c=0,a=0;const l=[0],u=[0],w=new Oe;let h=0,d=new f(4320);const p=new Fe;n.ft=0,n.ct=0,n.ut=new i(t),n.end=t,n.read=0,n.write=0,n.reset=(e,t)=>{t&&(t[0]=0),6==s&&w.dt(e),s=0,n.ft=0,n.ct=0,n.read=n.write=0},n.reset(e,null),n.ht=(e,t)=>{let r,s,i;return s=e.st,i=n.read,r=(i>n.write?n.end:n.write)-i,r>e.nt&&(r=e.nt),0!==r&&-5==t&&(t=0),e.nt-=r,e.Je+=r,e.et.set(n.ut.subarray(i,i+r),s),s+=r,i+=r,i==n.end&&(i=0,n.write==n.end&&(n.write=0),r=n.write-i,r>e.nt&&(r=e.nt),0!==r&&-5==t&&(t=0),e.nt-=r,e.Je+=r,e.et.set(n.ut.subarray(i,i+r),s),s+=r,i+=r),e.st=s,n.read=i,t},n.wt=(e,t)=>{let i,f,y,m,b,g,k,v;for(m=e.rt,b=e.Le,f=n.ct,y=n.ft,g=n.write,k=g<n.read?n.read-g-1:n.end-g;;){let S,z,_,C,I,x,A,D;switch(s){case 0:for(;3>y;){if(0===b)return n.ct=f,n.ft=y,e.Le=b,e.Ge+=m-e.rt,e.rt=m,n.write=g,n.ht(e,t);t=0,b--,f|=(255&e.lt(m++))<<y,y+=8}switch(i=7&f,h=1&i,i>>>1){case 0:f>>>=3,y-=3,i=7&y,f>>>=i,y-=i,s=1;break;case 1:S=[],z=[],_=[[]],C=[[]],Fe.yt(S,z,_,C),w.init(S[0],z[0],_[0],0,C[0],0),f>>>=3,y-=3,s=6;break;case 2:f>>>=3,y-=3,s=3;break;case 3:return f>>>=3,y-=3,s=9,e.Oe="invalid block type",t=-3,n.ct=f,n.ft=y,e.Le=b,e.Ge+=m-e.rt,e.rt=m,n.write=g,n.ht(e,t)}break;case 1:for(;32>y;){if(0===b)return n.ct=f,n.ft=y,e.Le=b,e.Ge+=m-e.rt,e.rt=m,n.write=g,n.ht(e,t);t=0,b--,f|=(255&e.lt(m++))<<y,y+=8}if((~f>>>16&65535)!=(65535&f))return s=9,e.Oe="invalid stored block lengths",t=-3,n.ct=f,n.ft=y,e.Le=b,e.Ge+=m-e.rt,e.rt=m,n.write=g,n.ht(e,t);o=65535&f,f=y=0,s=0!==o?2:0!==h?7:0;break;case 2:if(0===b)return n.ct=f,n.ft=y,e.Le=b,e.Ge+=m-e.rt,e.rt=m,n.write=g,n.ht(e,t);if(0===k&&(g==n.end&&0!==n.read&&(g=0,k=g<n.read?n.read-g-1:n.end-g),0===k&&(n.write=g,t=n.ht(e,t),g=n.write,k=g<n.read?n.read-g-1:n.end-g,g==n.end&&0!==n.read&&(g=0,k=g<n.read?n.read-g-1:n.end-g),0===k)))return n.ct=f,n.ft=y,e.Le=b,e.Ge+=m-e.rt,e.rt=m,n.write=g,n.ht(e,t);if(t=0,i=o,i>b&&(i=b),i>k&&(i=k),n.ut.set(e.je(m,i),g),m+=i,b-=i,g+=i,k-=i,0!=(o-=i))break;s=0!==h?7:0;break;case 3:for(;14>y;){if(0===b)return n.ct=f,n.ft=y,e.Le=b,e.Ge+=m-e.rt,e.rt=m,n.write=g,n.ht(e,t);t=0,b--,f|=(255&e.lt(m++))<<y,y+=8}if(c=i=16383&f,(31&i)>29||(i>>5&31)>29)return s=9,e.Oe="too many length or distance symbols",t=-3,n.ct=f,n.ft=y,e.Le=b,e.Ge+=m-e.rt,e.rt=m,n.write=g,n.ht(e,t);if(i=258+(31&i)+(i>>5&31),!r||r.length<i)r=[];else for(v=0;i>v;v++)r[v]=0;f>>>=14,y-=14,a=0,s=4;case 4:for(;4+(c>>>10)>a;){for(;3>y;){if(0===b)return n.ct=f,n.ft=y,e.Le=b,e.Ge+=m-e.rt,e.rt=m,n.write=g,n.ht(e,t);t=0,b--,f|=(255&e.lt(m++))<<y,y+=8}r[qe[a++]]=7&f,f>>>=3,y-=3}for(;19>a;)r[qe[a++]]=0;if(l[0]=7,i=p.it(r,l,u,d,e),0!=i)return-3==(t=i)&&(r=null,s=9),n.ct=f,n.ft=y,e.Le=b,e.Ge+=m-e.rt,e.rt=m,n.write=g,n.ht(e,t);a=0,s=5;case 5:for(;i=c,258+(31&i)+(i>>5&31)>a;){let o,w;for(i=l[0];i>y;){if(0===b)return n.ct=f,n.ft=y,e.Le=b,e.Ge+=m-e.rt,e.rt=m,n.write=g,n.ht(e,t);t=0,b--,f|=(255&e.lt(m++))<<y,y+=8}if(i=d[3*(u[0]+(f&Ue[i]))+1],w=d[3*(u[0]+(f&Ue[i]))+2],16>w)f>>>=i,y-=i,r[a++]=w;else{for(v=18==w?7:w-14,o=18==w?11:3;i+v>y;){if(0===b)return n.ct=f,n.ft=y,e.Le=b,e.Ge+=m-e.rt,e.rt=m,n.write=g,n.ht(e,t);t=0,b--,f|=(255&e.lt(m++))<<y,y+=8}if(f>>>=i,y-=i,o+=f&Ue[v],f>>>=v,y-=v,v=a,i=c,v+o>258+(31&i)+(i>>5&31)||16==w&&1>v)return r=null,s=9,e.Oe="invalid bit length repeat",t=-3,n.ct=f,n.ft=y,e.Le=b,e.Ge+=m-e.rt,e.rt=m,n.write=g,n.ht(e,t);w=16==w?r[v-1]:0;do{r[v++]=w}while(0!=--o);a=v}}if(u[0]=-1,I=[],x=[],A=[],D=[],I[0]=9,x[0]=6,i=c,i=p.ot(257+(31&i),1+(i>>5&31),r,I,x,A,D,d,e),0!=i)return-3==i&&(r=null,s=9),t=i,n.ct=f,n.ft=y,e.Le=b,e.Ge+=m-e.rt,e.rt=m,n.write=g,n.ht(e,t);w.init(I[0],x[0],d,A[0],d,D[0]),s=6;case 6:if(n.ct=f,n.ft=y,e.Le=b,e.Ge+=m-e.rt,e.rt=m,n.write=g,1!=(t=w.wt(n,e,t)))return n.ht(e,t);if(t=0,w.dt(e),m=e.rt,b=e.Le,f=n.ct,y=n.ft,g=n.write,k=g<n.read?n.read-g-1:n.end-g,0===h){s=0;break}s=7;case 7:if(n.write=g,t=n.ht(e,t),g=n.write,k=g<n.read?n.read-g-1:n.end-g,n.read!=n.write)return n.ct=f,n.ft=y,e.Le=b,e.Ge+=m-e.rt,e.rt=m,n.write=g,n.ht(e,t);s=8;case 8:return t=1,n.ct=f,n.ft=y,e.Le=b,e.Ge+=m-e.rt,e.rt=m,n.write=g,n.ht(e,t);case 9:return t=-3,n.ct=f,n.ft=y,e.Le=b,e.Ge+=m-e.rt,e.rt=m,n.write=g,n.ht(e,t);default:return t=-2,n.ct=f,n.ft=y,e.Le=b,e.Ge+=m-e.rt,e.rt=m,n.write=g,n.ht(e,t)}}},n.dt=e=>{n.reset(e,null),n.ut=null,d=null},n.bt=(e,t,r)=>{n.ut.set(e.subarray(t,t+r),0),n.read=n.write=r},n.gt=()=>1==s?1:0}const Je=[0,0,255,255];function Qe(){const e=this;function t(e){return e&&e.kt?(e.Ge=e.Je=0,e.Oe=null,e.kt.mode=7,e.kt.vt.reset(e,null),0):-2}e.mode=0,e.method=0,e.St=[0],e.zt=0,e.marker=0,e._t=0,e.Ct=t=>(e.vt&&e.vt.dt(t),e.vt=null,0),e.It=(n,r)=>(n.Oe=null,e.vt=null,8>r||r>15?(e.Ct(n),-2):(e._t=r,n.kt.vt=new Ge(n,1<<r),t(n),0)),e.xt=(e,t)=>{let n,r;if(!e||!e.kt||!e.tt)return-2;const s=e.kt;for(t=4==t?-5:0,n=-5;;)switch(s.mode){case 0:if(0===e.Le)return n;if(n=t,e.Le--,e.Ge++,8!=(15&(s.method=e.lt(e.rt++)))){s.mode=13,e.Oe="unknown compression method",s.marker=5;break}if(8+(s.method>>4)>s._t){s.mode=13,e.Oe="invalid win size",s.marker=5;break}s.mode=1;case 1:if(0===e.Le)return n;if(n=t,e.Le--,e.Ge++,r=255&e.lt(e.rt++),((s.method<<8)+r)%31!=0){s.mode=13,e.Oe="incorrect header check",s.marker=5;break}if(0==(32&r)){s.mode=7;break}s.mode=2;case 2:if(0===e.Le)return n;n=t,e.Le--,e.Ge++,s.zt=(255&e.lt(e.rt++))<<24&4278190080,s.mode=3;case 3:if(0===e.Le)return n;n=t,e.Le--,e.Ge++,s.zt+=(255&e.lt(e.rt++))<<16&16711680,s.mode=4;case 4:if(0===e.Le)return n;n=t,e.Le--,e.Ge++,s.zt+=(255&e.lt(e.rt++))<<8&65280,s.mode=5;case 5:return 0===e.Le?n:(n=t,e.Le--,e.Ge++,s.zt+=255&e.lt(e.rt++),s.mode=6,2);case 6:return s.mode=13,e.Oe="need dictionary",s.marker=0,-2;case 7:if(n=s.vt.wt(e,n),-3==n){s.mode=13,s.marker=0;break}if(0==n&&(n=t),1!=n)return n;n=t,s.vt.reset(e,s.St),s.mode=12;case 12:return e.Le=0,1;case 13:return-3;default:return-2}},e.At=(e,t,n)=>{let r=0,s=n;if(!e||!e.kt||6!=e.kt.mode)return-2;const i=e.kt;return s<1<<i._t||(s=(1<<i._t)-1,r=n-s),i.vt.bt(t,r,s),i.mode=7,0},e.Dt=e=>{let n,r,s,i,o;if(!e||!e.kt)return-2;const c=e.kt;if(13!=c.mode&&(c.mode=13,c.marker=0),0===(n=e.Le))return-5;for(r=e.rt,s=c.marker;0!==n&&4>s;)e.lt(r)==Je[s]?s++:s=0!==e.lt(r)?0:4-s,r++,n--;return e.Ge+=r-e.rt,e.rt=r,e.Le=n,c.marker=s,4!=s?-3:(i=e.Ge,o=e.Je,t(e),e.Ge=i,e.Je=o,c.mode=7,0)},e.Vt=e=>e&&e.kt&&e.kt.vt?e.kt.vt.gt():-2}function Xe(){}function Ye(e){const t=new Xe,n=e&&e.chunkSize?r.floor(2*e.chunkSize):131072,o=new i(n);let c=!1;t.It(),t.et=o,this.append=(e,r)=>{const f=[];let a,l,u=0,w=0,h=0;if(0!==e.length){t.rt=0,t.tt=e,t.Le=e.length;do{if(t.st=0,t.nt=n,0!==t.Le||c||(t.rt=0,c=!0),a=t.xt(0),c&&-5===a){if(0!==t.Le)throw new s("inflating: bad input")}else if(0!==a&&1!==a)throw new s("inflating: "+t.Oe);if((c||1===a)&&t.Le===e.length)throw new s("inflating: bad input");t.st&&(t.st===n?f.push(new i(o)):f.push(o.slice(0,t.st))),h+=t.st,r&&t.rt>0&&t.rt!=u&&(r(t.rt),u=t.rt)}while(t.Le>0||0===t.nt);return f.length>1?(l=new i(h),f.forEach((e=>{l.set(e,w),w+=e.length}))):l=f[0]||new i,l}},this.flush=()=>{t.Ct()}}Xe.prototype={It(e){const t=this;return t.kt=new Qe,e||(e=15),t.kt.It(t,e)},xt(e){const t=this;return t.kt?t.kt.xt(t,e):-2},Ct(){const e=this;if(!e.kt)return-2;const t=e.kt.Ct(e);return e.kt=null,t},Dt(){const e=this;return e.kt?e.kt.Dt(e):-2},At(e,t){const n=this;return n.kt?n.kt.At(n,e,t):-2},lt(e){return this.tt[e]},je(e,t){return this.tt.subarray(e,e+t)}},self.initCodec=()=>{self.Deflate=Pe,self.Inflate=Ye};\n'
        ], {
            type: "text/javascript"
        }));
    e({
        workerScripts: {
            inflate: [
                t
            ],
            deflate: [
                t
            ]
        }
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jU4ft":[function(require,module,exports) {
/*
 Copyright (c) 2022 Gildas Lormeau. All rights reserved.

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions are met:

 1. Redistributions of source code must retain the above copyright notice,
 this list of conditions and the following disclaimer.

 2. Redistributions in binary form must reproduce the above copyright 
 notice, this list of conditions and the following disclaimer in 
 the documentation and/or other materials provided with the distribution.

 3. The names of the authors may not be used to endorse or promote products
 derived from this software without specific prior written permission.

 THIS SOFTWARE IS PROVIDED ''AS IS'' AND ANY EXPRESSED OR IMPLIED WARRANTIES,
 INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
 FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL JCRAFT,
 INC. OR ANY CONTRIBUTORS TO THIS SOFTWARE BE LIABLE FOR ANY DIRECT, INDIRECT,
 INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA,
 OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
 LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
 EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */ // deno-lint-ignore-file no-this-alias
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initShimAsyncCodec", ()=>initShimAsyncCodec);
function initShimAsyncCodec(library, options = {}, registerDataHandler) {
    return {
        Deflate: createCodecClass(library.Deflate, options.deflate, registerDataHandler),
        Inflate: createCodecClass(library.Inflate, options.inflate, registerDataHandler)
    };
}
function createCodecClass(constructor, constructorOptions, registerDataHandler) {
    return class {
        constructor(options){
            const codecAdapter = this;
            const onData = (data)=>{
                if (codecAdapter.pendingData) {
                    const previousPendingData = codecAdapter.pendingData;
                    codecAdapter.pendingData = new Uint8Array(previousPendingData.length + data.length);
                    const { pendingData } = codecAdapter;
                    pendingData.set(previousPendingData, 0);
                    pendingData.set(data, previousPendingData.length);
                } else codecAdapter.pendingData = new Uint8Array(data);
            };
            if (Object.hasOwn(options, "level") && options.level === undefined) delete options.level;
            codecAdapter.codec = new constructor(Object.assign({}, constructorOptions, options));
            registerDataHandler(codecAdapter.codec, onData);
        }
        append(data) {
            this.codec.push(data);
            return getResponse(this);
        }
        flush() {
            this.codec.push(new Uint8Array(), true);
            return getResponse(this);
        }
    };
    function getResponse(codec) {
        if (codec.pendingData) {
            const output = codec.pendingData;
            codec.pendingData = null;
            return output;
        } else return new Uint8Array();
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8tQJ7":[function(require,module,exports) {
/*
 Copyright (c) 2022 Gildas Lormeau. All rights reserved.

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions are met:

 1. Redistributions of source code must retain the above copyright notice,
 this list of conditions and the following disclaimer.

 2. Redistributions in binary form must reproduce the above copyright 
 notice, this list of conditions and the following disclaimer in 
 the documentation and/or other materials provided with the distribution.

 3. The names of the authors may not be used to endorse or promote products
 derived from this software without specific prior written permission.

 THIS SOFTWARE IS PROVIDED ''AS IS'' AND ANY EXPRESSED OR IMPLIED WARRANTIES,
 INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
 FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL JCRAFT,
 INC. OR ANY CONTRIBUTORS TO THIS SOFTWARE BE LIABLE FOR ANY DIRECT, INDIRECT,
 INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA,
 OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
 LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
 EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */ /* global Blob, atob, btoa, XMLHttpRequest, URL, fetch, ReadableStream, WritableStream, FileReader, TransformStream, Response */ // deno-lint-ignore-file no-this-alias
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initStream", ()=>initStream);
parcelHelpers.export(exports, "readUint8Array", ()=>readUint8Array);
parcelHelpers.export(exports, "Reader", ()=>Reader);
parcelHelpers.export(exports, "Writer", ()=>Writer);
parcelHelpers.export(exports, "TextReader", ()=>TextReader);
parcelHelpers.export(exports, "TextWriter", ()=>TextWriter);
parcelHelpers.export(exports, "Data64URIReader", ()=>Data64URIReader);
parcelHelpers.export(exports, "Data64URIWriter", ()=>Data64URIWriter);
parcelHelpers.export(exports, "BlobReader", ()=>BlobReader);
parcelHelpers.export(exports, "BlobWriter", ()=>BlobWriter);
parcelHelpers.export(exports, "Uint8ArrayReader", ()=>Uint8ArrayReader);
parcelHelpers.export(exports, "Uint8ArrayWriter", ()=>Uint8ArrayWriter);
parcelHelpers.export(exports, "HttpReader", ()=>HttpReader);
parcelHelpers.export(exports, "HttpRangeReader", ()=>HttpRangeReader);
parcelHelpers.export(exports, "SplitZipReader", ()=>SplitZipReader);
parcelHelpers.export(exports, "SplitZipWriter", ()=>SplitZipWriter);
parcelHelpers.export(exports, "ERR_HTTP_RANGE", ()=>ERR_HTTP_RANGE);
parcelHelpers.export(exports, "ERR_ITERATOR_COMPLETED_TOO_SOON", ()=>ERR_ITERATOR_COMPLETED_TOO_SOON);
var _constantsJs = require("./constants.js");
var _configurationJs = require("./configuration.js");
const ERR_HTTP_STATUS = "HTTP error ";
const ERR_HTTP_RANGE = "HTTP Range not supported";
const ERR_ITERATOR_COMPLETED_TOO_SOON = "Writer iterator completed too soon";
const CONTENT_TYPE_TEXT_PLAIN = "text/plain";
const HTTP_HEADER_CONTENT_LENGTH = "Content-Length";
const HTTP_HEADER_CONTENT_RANGE = "Content-Range";
const HTTP_HEADER_ACCEPT_RANGES = "Accept-Ranges";
const HTTP_HEADER_RANGE = "Range";
const HTTP_HEADER_CONTENT_TYPE = "Content-Type";
const HTTP_METHOD_HEAD = "HEAD";
const HTTP_METHOD_GET = "GET";
const HTTP_RANGE_UNIT = "bytes";
const DEFAULT_CHUNK_SIZE = 65536;
const PROPERTY_NAME_WRITABLE = "writable";
class Stream {
    constructor(){
        this.size = 0;
    }
    init() {
        this.initialized = true;
    }
}
class Reader extends Stream {
    get readable() {
        const reader = this;
        const { chunkSize = DEFAULT_CHUNK_SIZE } = reader;
        const readable = new ReadableStream({
            start () {
                this.chunkOffset = 0;
            },
            async pull (controller) {
                const { offset = 0, size, diskNumberStart } = readable;
                const { chunkOffset } = this;
                controller.enqueue(await readUint8Array(reader, offset + chunkOffset, Math.min(chunkSize, size - chunkOffset), diskNumberStart));
                if (chunkOffset + chunkSize > size) controller.close();
                else this.chunkOffset += chunkSize;
            }
        });
        return readable;
    }
}
class Writer extends Stream {
    constructor(){
        super();
        const writer = this;
        const writable = new WritableStream({
            write (chunk) {
                return writer.writeUint8Array(chunk);
            }
        });
        Object.defineProperty(writer, PROPERTY_NAME_WRITABLE, {
            get () {
                return writable;
            }
        });
    }
    writeUint8Array() {
    // abstract
    }
}
class Data64URIReader extends Reader {
    constructor(dataURI){
        super();
        let dataEnd = dataURI.length;
        while(dataURI.charAt(dataEnd - 1) == "=")dataEnd--;
        const dataStart = dataURI.indexOf(",") + 1;
        Object.assign(this, {
            dataURI,
            dataStart,
            size: Math.floor((dataEnd - dataStart) * 0.75)
        });
    }
    readUint8Array(offset, length) {
        const { dataStart, dataURI } = this;
        const dataArray = new Uint8Array(length);
        const start = Math.floor(offset / 3) * 4;
        const bytes = atob(dataURI.substring(start + dataStart, Math.ceil((offset + length) / 3) * 4 + dataStart));
        const delta = offset - Math.floor(start / 4) * 3;
        for(let indexByte = delta; indexByte < delta + length; indexByte++)dataArray[indexByte - delta] = bytes.charCodeAt(indexByte);
        return dataArray;
    }
}
class Data64URIWriter extends Writer {
    constructor(contentType){
        super();
        Object.assign(this, {
            data: "data:" + (contentType || "") + ";base64,",
            pending: []
        });
    }
    writeUint8Array(array) {
        const writer = this;
        let indexArray = 0;
        let dataString = writer.pending;
        const delta = writer.pending.length;
        writer.pending = "";
        for(indexArray = 0; indexArray < Math.floor((delta + array.length) / 3) * 3 - delta; indexArray++)dataString += String.fromCharCode(array[indexArray]);
        for(; indexArray < array.length; indexArray++)writer.pending += String.fromCharCode(array[indexArray]);
        if (dataString.length > 2) writer.data += btoa(dataString);
        else writer.pending = dataString;
    }
    getData() {
        return this.data + btoa(this.pending);
    }
}
class BlobReader extends Reader {
    constructor(blob){
        super();
        Object.assign(this, {
            blob,
            size: blob.size
        });
    }
    async readUint8Array(offset, length) {
        const reader = this;
        return new Uint8Array(await reader.blob.slice(offset, offset + length).arrayBuffer());
    }
}
class BlobWriter extends Stream {
    constructor(contentType){
        super();
        const writer = this;
        const transformStream = new TransformStream();
        const headers = [];
        if (contentType) headers.push([
            HTTP_HEADER_CONTENT_TYPE,
            contentType
        ]);
        Object.defineProperty(writer, PROPERTY_NAME_WRITABLE, {
            get () {
                return transformStream.writable;
            }
        });
        writer.blob = new Response(transformStream.readable, {
            headers
        }).blob();
    }
    getData() {
        return this.blob;
    }
}
class TextReader extends BlobReader {
    constructor(text){
        super(new Blob([
            text
        ], {
            type: CONTENT_TYPE_TEXT_PLAIN
        }));
    }
}
class TextWriter extends BlobWriter {
    constructor(encoding){
        super(encoding);
        Object.assign(this, {
            encoding,
            utf8: !encoding || encoding.toLowerCase() == "utf-8"
        });
    }
    async getData() {
        const { encoding, utf8 } = this;
        const blob = await super.getData();
        if (blob.text && utf8) return blob.text();
        else {
            const reader = new FileReader();
            return new Promise((resolve, reject)=>{
                Object.assign(reader, {
                    onload: ({ target })=>resolve(target.result),
                    onerror: ()=>reject(reader.error)
                });
                reader.readAsText(blob, encoding);
            });
        }
    }
}
class FetchReader extends Reader {
    constructor(url, options){
        super();
        createHtpReader(this, url, options);
    }
    async init() {
        super.init();
        await initHttpReader(this, sendFetchRequest, getFetchRequestData);
    }
    readUint8Array(index, length) {
        return readUint8ArrayHttpReader(this, index, length, sendFetchRequest, getFetchRequestData);
    }
}
class XHRReader extends Reader {
    constructor(url, options){
        super();
        createHtpReader(this, url, options);
    }
    async init() {
        super.init();
        await initHttpReader(this, sendXMLHttpRequest, getXMLHttpRequestData);
    }
    readUint8Array(index, length) {
        return readUint8ArrayHttpReader(this, index, length, sendXMLHttpRequest, getXMLHttpRequestData);
    }
}
function createHtpReader(httpReader, url, options) {
    const { preventHeadRequest, useRangeHeader, forceRangeRequests } = options;
    options = Object.assign({}, options);
    delete options.preventHeadRequest;
    delete options.useRangeHeader;
    delete options.forceRangeRequests;
    delete options.useXHR;
    Object.assign(httpReader, {
        url,
        options,
        preventHeadRequest,
        useRangeHeader,
        forceRangeRequests
    });
}
async function initHttpReader(httpReader, sendRequest, getRequestData) {
    const { url, useRangeHeader, forceRangeRequests } = httpReader;
    if (isHttpFamily(url) && (useRangeHeader || forceRangeRequests)) {
        const { headers } = await sendRequest(HTTP_METHOD_GET, httpReader, getRangeHeaders(httpReader));
        if (!forceRangeRequests && headers.get(HTTP_HEADER_ACCEPT_RANGES) != HTTP_RANGE_UNIT) throw new Error(ERR_HTTP_RANGE);
        else {
            let contentSize;
            const contentRangeHeader = headers.get(HTTP_HEADER_CONTENT_RANGE);
            if (contentRangeHeader) {
                const splitHeader = contentRangeHeader.trim().split(/\s*\/\s*/);
                if (splitHeader.length) {
                    const headerValue = splitHeader[1];
                    if (headerValue && headerValue != "*") contentSize = Number(headerValue);
                }
            }
            if (contentSize === (0, _constantsJs.UNDEFINED_VALUE)) await getContentLength(httpReader, sendRequest, getRequestData);
            else httpReader.size = contentSize;
        }
    } else await getContentLength(httpReader, sendRequest, getRequestData);
}
async function readUint8ArrayHttpReader(httpReader, index, length, sendRequest, getRequestData) {
    const { data, useRangeHeader, forceRangeRequests, options } = httpReader;
    if (useRangeHeader || forceRangeRequests) {
        const response = await sendRequest(HTTP_METHOD_GET, httpReader, getRangeHeaders(httpReader, index, length));
        if (response.status != 206) throw new Error(ERR_HTTP_RANGE);
        return new Uint8Array(await response.arrayBuffer());
    } else {
        if (!data) await getRequestData(httpReader, options);
        return new Uint8Array(data.subarray(index, index + length));
    }
}
function getRangeHeaders(httpReader, index = 0, length = 1) {
    return Object.assign({}, getHeaders(httpReader), {
        [HTTP_HEADER_RANGE]: HTTP_RANGE_UNIT + "=" + index + "-" + (index + length - 1)
    });
}
function getHeaders({ options }) {
    const { headers } = options;
    if (headers) {
        if (Symbol.iterator in headers) return Object.fromEntries(headers);
        else return headers;
    }
}
async function getFetchRequestData(httpReader) {
    await getRequestData(httpReader, sendFetchRequest);
}
async function getXMLHttpRequestData(httpReader) {
    await getRequestData(httpReader, sendXMLHttpRequest);
}
async function getRequestData(httpReader, sendRequest) {
    const response = await sendRequest(HTTP_METHOD_GET, httpReader, getHeaders(httpReader));
    httpReader.data = new Uint8Array(await response.arrayBuffer());
    if (!httpReader.size) httpReader.size = httpReader.data.length;
}
async function getContentLength(httpReader, sendRequest, getRequestData) {
    if (httpReader.preventHeadRequest) await getRequestData(httpReader, httpReader.options);
    else {
        const response = await sendRequest(HTTP_METHOD_HEAD, httpReader, getHeaders(httpReader));
        const contentLength = response.headers.get(HTTP_HEADER_CONTENT_LENGTH);
        if (contentLength) httpReader.size = Number(contentLength);
        else await getRequestData(httpReader, httpReader.options);
    }
}
async function sendFetchRequest(method, { options, url }, headers) {
    const response = await fetch(url, Object.assign({}, options, {
        method,
        headers
    }));
    if (response.status < 400) return response;
    else throw response.status == 416 ? new Error(ERR_HTTP_RANGE) : new Error(ERR_HTTP_STATUS + (response.statusText || response.status));
}
function sendXMLHttpRequest(method, { url }, headers) {
    return new Promise((resolve, reject)=>{
        const request = new XMLHttpRequest();
        request.addEventListener("load", ()=>{
            if (request.status < 400) {
                const headers = [];
                request.getAllResponseHeaders().trim().split(/[\r\n]+/).forEach((header)=>{
                    const splitHeader = header.trim().split(/\s*:\s*/);
                    splitHeader[0] = splitHeader[0].trim().replace(/^[a-z]|-[a-z]/g, (value)=>value.toUpperCase());
                    headers.push(splitHeader);
                });
                resolve({
                    status: request.status,
                    arrayBuffer: ()=>request.response,
                    headers: new Map(headers)
                });
            } else reject(request.status == 416 ? new Error(ERR_HTTP_RANGE) : new Error(ERR_HTTP_STATUS + (request.statusText || request.status)));
        }, false);
        request.addEventListener("error", (event)=>reject(event.detail.error), false);
        request.open(method, url);
        if (headers) for (const entry of Object.entries(headers))request.setRequestHeader(entry[0], entry[1]);
        request.responseType = "arraybuffer";
        request.send();
    });
}
class HttpReader extends Reader {
    constructor(url, options = {}){
        super();
        Object.assign(this, {
            url,
            reader: options.useXHR ? new XHRReader(url, options) : new FetchReader(url, options)
        });
    }
    set size(value) {
    // ignored
    }
    get size() {
        return this.reader.size;
    }
    async init() {
        super.init();
        await this.reader.init();
    }
    readUint8Array(index, length) {
        return this.reader.readUint8Array(index, length);
    }
}
class HttpRangeReader extends HttpReader {
    constructor(url, options = {}){
        options.useRangeHeader = true;
        super(url, options);
    }
}
class Uint8ArrayReader extends Reader {
    constructor(array){
        super();
        Object.assign(this, {
            array,
            size: array.length
        });
    }
    readUint8Array(index, length) {
        return this.array.slice(index, index + length);
    }
}
class Uint8ArrayWriter extends Writer {
    init(initSize = 0) {
        super.init();
        Object.assign(this, {
            offset: 0,
            array: new Uint8Array(initSize)
        });
    }
    writeUint8Array(array) {
        const writer = this;
        if (writer.offset + array.length > writer.array.length) {
            const previousArray = writer.array;
            writer.array = new Uint8Array(previousArray.length + array.length);
            writer.array.set(previousArray);
        }
        writer.array.set(array, writer.offset);
        writer.offset += array.length;
    }
    getData() {
        return this.array;
    }
}
class SplitZipReader extends Reader {
    constructor(readers){
        super();
        this.readers = readers;
    }
    async init() {
        super.init();
        const reader = this;
        const { readers } = reader;
        reader.lastDiskNumber = 0;
        await Promise.all(readers.map(async (diskReader)=>{
            await diskReader.init();
            reader.size += diskReader.size;
        }));
    }
    async readUint8Array(offset, length, diskNumber = 0) {
        const reader = this;
        const { readers } = this;
        let result;
        let currentDiskNumber = diskNumber;
        if (currentDiskNumber == -1) currentDiskNumber = readers.length - 1;
        let currentReaderOffset = offset;
        while(currentReaderOffset >= readers[currentDiskNumber].size){
            currentReaderOffset -= readers[currentDiskNumber].size;
            currentDiskNumber++;
        }
        const currentReader = readers[currentDiskNumber];
        const currentReaderSize = currentReader.size;
        if (currentReaderOffset + length <= currentReaderSize) result = await readUint8Array(currentReader, currentReaderOffset, length);
        else {
            const chunkLength = currentReaderSize - currentReaderOffset;
            result = new Uint8Array(length);
            result.set(await readUint8Array(currentReader, currentReaderOffset, chunkLength));
            result.set(await reader.readUint8Array(offset + chunkLength, length - chunkLength, diskNumber), chunkLength);
        }
        reader.lastDiskNumber = Math.max(currentDiskNumber, reader.lastDiskNumber);
        return result;
    }
}
class SplitZipWriter extends Stream {
    constructor(writerGenerator, maxSize = 4294967296){
        super();
        const zipWriter = this;
        Object.assign(zipWriter, {
            diskNumber: 0,
            diskOffset: 0,
            size: 0,
            availableSize: maxSize
        });
        let diskSourceWriter, diskWritable, diskWriter;
        const writable = new WritableStream({
            async write (chunk) {
                if (!diskWriter) {
                    const { value, done } = await writerGenerator.next();
                    if (done && !value) throw new Error(ERR_ITERATOR_COMPLETED_TOO_SOON);
                    else {
                        diskSourceWriter = value;
                        diskSourceWriter.size = 0;
                        diskWritable = value.writable;
                        diskWriter = diskWritable.getWriter();
                    }
                    await this.write(chunk);
                } else if (diskSourceWriter.size + chunk.length >= maxSize) {
                    const chunkLength = maxSize - diskSourceWriter.size;
                    await writeChunk(chunk.slice(0, chunkLength));
                    await closeDisk();
                    zipWriter.diskOffset += diskSourceWriter.size;
                    zipWriter.diskNumber++;
                    diskWriter = null;
                    await this.write(chunk.slice(chunkLength));
                } else {
                    if (chunk.length) await writeChunk(chunk);
                    zipWriter.availableSize = maxSize - diskSourceWriter.size;
                }
            },
            async close () {
                await diskWriter.ready;
                await closeDisk();
            }
        });
        Object.defineProperty(zipWriter, PROPERTY_NAME_WRITABLE, {
            get () {
                return writable;
            }
        });
        async function writeChunk(chunk) {
            await diskWriter.ready;
            await diskWriter.write(chunk);
            diskSourceWriter.size += chunk.length;
            zipWriter.size += chunk.length;
        }
        async function closeDisk() {
            diskWritable.size = diskSourceWriter.size;
            await diskWriter.close();
        }
    }
}
function isHttpFamily(url) {
    const { baseURL } = (0, _configurationJs.getConfiguration)();
    const { protocol } = new URL(url, baseURL);
    return protocol == "http:" || protocol == "https:";
}
async function initStream(stream, initSize) {
    if (stream.init && !stream.initialized) await stream.init(initSize);
}
function readUint8Array(reader, offset, size, diskNumber) {
    return reader.readUint8Array(offset, size, diskNumber);
}

},{"./constants.js":"4V9hL","./configuration.js":"5UMrn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7x52C":[function(require,module,exports) {
/*
 Copyright (c) 2022 Gildas Lormeau. All rights reserved.

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions are met:

 1. Redistributions of source code must retain the above copyright notice,
 this list of conditions and the following disclaimer.

 2. Redistributions in binary form must reproduce the above copyright 
 notice, this list of conditions and the following disclaimer in 
 the documentation and/or other materials provided with the distribution.

 3. The names of the authors may not be used to endorse or promote products
 derived from this software without specific prior written permission.

 THIS SOFTWARE IS PROVIDED ''AS IS'' AND ANY EXPRESSED OR IMPLIED WARRANTIES,
 INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
 FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL JCRAFT,
 INC. OR ANY CONTRIBUTORS TO THIS SOFTWARE BE LIABLE FOR ANY DIRECT, INDIRECT,
 INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA,
 OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
 LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
 EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */ /* global BigInt, Response, ReadableStream, WritableStream */ // deno-lint-ignore-file no-this-alias
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ZipReader", ()=>ZipReader);
parcelHelpers.export(exports, "ERR_BAD_FORMAT", ()=>ERR_BAD_FORMAT);
parcelHelpers.export(exports, "ERR_EOCDR_NOT_FOUND", ()=>ERR_EOCDR_NOT_FOUND);
parcelHelpers.export(exports, "ERR_EOCDR_ZIP64_NOT_FOUND", ()=>ERR_EOCDR_ZIP64_NOT_FOUND);
parcelHelpers.export(exports, "ERR_EOCDR_LOCATOR_ZIP64_NOT_FOUND", ()=>ERR_EOCDR_LOCATOR_ZIP64_NOT_FOUND);
parcelHelpers.export(exports, "ERR_CENTRAL_DIRECTORY_NOT_FOUND", ()=>ERR_CENTRAL_DIRECTORY_NOT_FOUND);
parcelHelpers.export(exports, "ERR_LOCAL_FILE_HEADER_NOT_FOUND", ()=>ERR_LOCAL_FILE_HEADER_NOT_FOUND);
parcelHelpers.export(exports, "ERR_EXTRAFIELD_ZIP64_NOT_FOUND", ()=>ERR_EXTRAFIELD_ZIP64_NOT_FOUND);
parcelHelpers.export(exports, "ERR_ENCRYPTED", ()=>ERR_ENCRYPTED);
parcelHelpers.export(exports, "ERR_UNSUPPORTED_ENCRYPTION", ()=>ERR_UNSUPPORTED_ENCRYPTION);
parcelHelpers.export(exports, "ERR_UNSUPPORTED_COMPRESSION", ()=>ERR_UNSUPPORTED_COMPRESSION);
parcelHelpers.export(exports, "ERR_INVALID_SIGNATURE", ()=>(0, _codecPoolJs.ERR_INVALID_SIGNATURE));
parcelHelpers.export(exports, "ERR_INVALID_PASSWORD", ()=>(0, _codecPoolJs.ERR_INVALID_PASSWORD));
parcelHelpers.export(exports, "ERR_SPLIT_ZIP_FILE", ()=>ERR_SPLIT_ZIP_FILE);
var _constantsJs = require("./constants.js");
var _configurationJs = require("./configuration.js");
var _codecPoolJs = require("./codec-pool.js");
var _ioJs = require("./io.js");
var _decodeTextJs = require("./util/decode-text.js");
var _crc32Js = require("./streams/codecs/crc32.js");
var _zipEntryJs = require("./zip-entry.js");
const ERR_BAD_FORMAT = "File format is not recognized";
const ERR_EOCDR_NOT_FOUND = "End of central directory not found";
const ERR_EOCDR_ZIP64_NOT_FOUND = "End of Zip64 central directory not found";
const ERR_EOCDR_LOCATOR_ZIP64_NOT_FOUND = "End of Zip64 central directory locator not found";
const ERR_CENTRAL_DIRECTORY_NOT_FOUND = "Central directory header not found";
const ERR_LOCAL_FILE_HEADER_NOT_FOUND = "Local file header not found";
const ERR_EXTRAFIELD_ZIP64_NOT_FOUND = "Zip64 extra field not found";
const ERR_ENCRYPTED = "File contains encrypted entry";
const ERR_UNSUPPORTED_ENCRYPTION = "Encryption method not supported";
const ERR_UNSUPPORTED_COMPRESSION = "Compression method not supported";
const ERR_SPLIT_ZIP_FILE = "Split zip file";
const CHARSET_UTF8 = "utf-8";
const CHARSET_CP437 = "cp437";
const ZIP64_PROPERTIES = [
    [
        "uncompressedSize",
        (0, _constantsJs.MAX_32_BITS)
    ],
    [
        "compressedSize",
        (0, _constantsJs.MAX_32_BITS)
    ],
    [
        "offset",
        (0, _constantsJs.MAX_32_BITS)
    ],
    [
        "diskNumberStart",
        (0, _constantsJs.MAX_16_BITS)
    ]
];
const ZIP64_EXTRACTION = {
    [(0, _constantsJs.MAX_16_BITS)]: {
        getValue: getUint32,
        bytes: 4
    },
    [(0, _constantsJs.MAX_32_BITS)]: {
        getValue: getBigUint64,
        bytes: 8
    }
};
class ZipReader {
    constructor(reader, options = {}){
        if (reader instanceof ReadableStream) reader = {
            readable: reader
        };
        Object.assign(this, {
            reader,
            options,
            config: (0, _configurationJs.getConfiguration)()
        });
    }
    async *getEntriesGenerator(options = {}) {
        const zipReader = this;
        let { reader } = zipReader;
        const { config } = zipReader;
        await (0, _ioJs.initStream)(reader);
        if (reader.size === (0, _constantsJs.UNDEFINED_VALUE) || !reader.readUint8Array) {
            if (Array.isArray(reader)) reader = new (0, _ioJs.SplitZipReader)(reader);
            else reader = new (0, _ioJs.BlobReader)(await new Response(reader.readable).blob());
            await (0, _ioJs.initStream)(reader);
        }
        if (reader.size < (0, _constantsJs.END_OF_CENTRAL_DIR_LENGTH)) throw new Error(ERR_BAD_FORMAT);
        reader.chunkSize = (0, _configurationJs.getChunkSize)(config);
        const endOfDirectoryInfo = await seekSignature(reader, (0, _constantsJs.END_OF_CENTRAL_DIR_SIGNATURE), reader.size, (0, _constantsJs.END_OF_CENTRAL_DIR_LENGTH), (0, _constantsJs.MAX_16_BITS) * 16);
        if (!endOfDirectoryInfo) {
            const signatureArray = await (0, _ioJs.readUint8Array)(reader, 0, 4);
            const signatureView = getDataView(signatureArray);
            if (getUint32(signatureView) == (0, _constantsJs.SPLIT_ZIP_FILE_SIGNATURE)) throw new Error(ERR_SPLIT_ZIP_FILE);
            else throw new Error(ERR_EOCDR_NOT_FOUND);
        }
        const endOfDirectoryView = getDataView(endOfDirectoryInfo);
        let directoryDataLength = getUint32(endOfDirectoryView, 12);
        let directoryDataOffset = getUint32(endOfDirectoryView, 16);
        const commentOffset = endOfDirectoryInfo.offset;
        const commentLength = getUint16(endOfDirectoryView, 20);
        const appendedDataOffset = commentOffset + (0, _constantsJs.END_OF_CENTRAL_DIR_LENGTH) + commentLength;
        const lastDiskNumber = getUint16(endOfDirectoryView, 4);
        const expectedLastDiskNumber = reader.lastDiskNumber || 0;
        let diskNumber = getUint16(endOfDirectoryView, 6);
        if (expectedLastDiskNumber != lastDiskNumber) throw new Error(ERR_SPLIT_ZIP_FILE);
        let filesLength = getUint16(endOfDirectoryView, 8);
        let prependedDataLength = 0;
        let startOffset = 0;
        if (directoryDataOffset == (0, _constantsJs.MAX_32_BITS) || directoryDataLength == (0, _constantsJs.MAX_32_BITS) || filesLength == (0, _constantsJs.MAX_16_BITS) || diskNumber == (0, _constantsJs.MAX_16_BITS)) {
            const endOfDirectoryLocatorArray = await (0, _ioJs.readUint8Array)(reader, endOfDirectoryInfo.offset - (0, _constantsJs.ZIP64_END_OF_CENTRAL_DIR_LOCATOR_LENGTH), (0, _constantsJs.ZIP64_END_OF_CENTRAL_DIR_LOCATOR_LENGTH));
            const endOfDirectoryLocatorView = getDataView(endOfDirectoryLocatorArray);
            if (getUint32(endOfDirectoryLocatorView, 0) != (0, _constantsJs.ZIP64_END_OF_CENTRAL_DIR_LOCATOR_SIGNATURE)) throw new Error(ERR_EOCDR_ZIP64_NOT_FOUND);
            directoryDataOffset = getBigUint64(endOfDirectoryLocatorView, 8);
            let endOfDirectoryArray = await (0, _ioJs.readUint8Array)(reader, directoryDataOffset, (0, _constantsJs.ZIP64_END_OF_CENTRAL_DIR_LENGTH), -1);
            let endOfDirectoryView = getDataView(endOfDirectoryArray);
            const expectedDirectoryDataOffset = endOfDirectoryInfo.offset - (0, _constantsJs.ZIP64_END_OF_CENTRAL_DIR_LOCATOR_LENGTH) - (0, _constantsJs.ZIP64_END_OF_CENTRAL_DIR_LENGTH);
            if (getUint32(endOfDirectoryView, 0) != (0, _constantsJs.ZIP64_END_OF_CENTRAL_DIR_SIGNATURE) && directoryDataOffset != expectedDirectoryDataOffset) {
                const originalDirectoryDataOffset = directoryDataOffset;
                directoryDataOffset = expectedDirectoryDataOffset;
                prependedDataLength = directoryDataOffset - originalDirectoryDataOffset;
                endOfDirectoryArray = await (0, _ioJs.readUint8Array)(reader, directoryDataOffset, (0, _constantsJs.ZIP64_END_OF_CENTRAL_DIR_LENGTH), -1);
                endOfDirectoryView = getDataView(endOfDirectoryArray);
            }
            if (getUint32(endOfDirectoryView, 0) != (0, _constantsJs.ZIP64_END_OF_CENTRAL_DIR_SIGNATURE)) throw new Error(ERR_EOCDR_LOCATOR_ZIP64_NOT_FOUND);
            if (diskNumber == (0, _constantsJs.MAX_16_BITS)) diskNumber = getUint32(endOfDirectoryView, 16);
            if (filesLength == (0, _constantsJs.MAX_16_BITS)) filesLength = getBigUint64(endOfDirectoryView, 32);
            if (directoryDataLength == (0, _constantsJs.MAX_32_BITS)) directoryDataLength = getBigUint64(endOfDirectoryView, 40);
            directoryDataOffset -= directoryDataLength;
        }
        if (directoryDataOffset < 0 || directoryDataOffset >= reader.size) throw new Error(ERR_BAD_FORMAT);
        let offset = 0;
        let directoryArray = await (0, _ioJs.readUint8Array)(reader, directoryDataOffset, directoryDataLength, diskNumber);
        let directoryView = getDataView(directoryArray);
        if (directoryDataLength) {
            const expectedDirectoryDataOffset = endOfDirectoryInfo.offset - directoryDataLength;
            if (getUint32(directoryView, offset) != (0, _constantsJs.CENTRAL_FILE_HEADER_SIGNATURE) && directoryDataOffset != expectedDirectoryDataOffset) {
                const originalDirectoryDataOffset = directoryDataOffset;
                directoryDataOffset = expectedDirectoryDataOffset;
                prependedDataLength = directoryDataOffset - originalDirectoryDataOffset;
                directoryArray = await (0, _ioJs.readUint8Array)(reader, directoryDataOffset, directoryDataLength, diskNumber);
                directoryView = getDataView(directoryArray);
            }
        }
        if (directoryDataOffset < 0 || directoryDataOffset >= reader.size) throw new Error(ERR_BAD_FORMAT);
        const filenameEncoding = getOptionValue(zipReader, options, "filenameEncoding");
        const commentEncoding = getOptionValue(zipReader, options, "commentEncoding");
        for(let indexFile = 0; indexFile < filesLength; indexFile++){
            const fileEntry = new ZipEntry(reader, config, zipReader.options);
            if (getUint32(directoryView, offset) != (0, _constantsJs.CENTRAL_FILE_HEADER_SIGNATURE)) throw new Error(ERR_CENTRAL_DIRECTORY_NOT_FOUND);
            readCommonHeader(fileEntry, directoryView, offset + 6);
            const languageEncodingFlag = Boolean(fileEntry.bitFlag.languageEncodingFlag);
            const filenameOffset = offset + 46;
            const extraFieldOffset = filenameOffset + fileEntry.filenameLength;
            const commentOffset = extraFieldOffset + fileEntry.extraFieldLength;
            const versionMadeBy = getUint16(directoryView, offset + 4);
            const msDosCompatible = (versionMadeBy & 0) == 0;
            const rawFilename = directoryArray.subarray(filenameOffset, extraFieldOffset);
            const commentLength = getUint16(directoryView, offset + 32);
            const endOffset = commentOffset + commentLength;
            const rawComment = directoryArray.subarray(commentOffset, endOffset);
            const filenameUTF8 = languageEncodingFlag;
            const commentUTF8 = languageEncodingFlag;
            const directory = msDosCompatible && (getUint8(directoryView, offset + 38) & (0, _constantsJs.FILE_ATTR_MSDOS_DIR_MASK)) == (0, _constantsJs.FILE_ATTR_MSDOS_DIR_MASK);
            const offsetFileEntry = getUint32(directoryView, offset + 42) + prependedDataLength;
            Object.assign(fileEntry, {
                versionMadeBy,
                msDosCompatible,
                compressedSize: 0,
                uncompressedSize: 0,
                commentLength,
                directory,
                offset: offsetFileEntry,
                diskNumberStart: getUint16(directoryView, offset + 34),
                internalFileAttribute: getUint16(directoryView, offset + 36),
                externalFileAttribute: getUint32(directoryView, offset + 38),
                rawFilename,
                filenameUTF8,
                commentUTF8,
                rawExtraField: directoryArray.subarray(extraFieldOffset, commentOffset)
            });
            const [filename, comment] = await Promise.all([
                (0, _decodeTextJs.decodeText)(rawFilename, filenameUTF8 ? CHARSET_UTF8 : filenameEncoding || CHARSET_CP437),
                (0, _decodeTextJs.decodeText)(rawComment, commentUTF8 ? CHARSET_UTF8 : commentEncoding || CHARSET_CP437)
            ]);
            Object.assign(fileEntry, {
                rawComment,
                filename,
                comment,
                directory: directory || filename.endsWith((0, _constantsJs.DIRECTORY_SIGNATURE))
            });
            startOffset = Math.max(offsetFileEntry, startOffset);
            await readCommonFooter(fileEntry, fileEntry, directoryView, offset + 6);
            const entry = new (0, _zipEntryJs.Entry)(fileEntry);
            entry.getData = (writer, options)=>fileEntry.getData(writer, entry, options);
            offset = endOffset;
            const { onprogress } = options;
            if (onprogress) try {
                await onprogress(indexFile + 1, filesLength, new (0, _zipEntryJs.Entry)(fileEntry));
            } catch (_error) {
            // ignored
            }
            yield entry;
        }
        const extractPrependedData = getOptionValue(zipReader, options, "extractPrependedData");
        const extractAppendedData = getOptionValue(zipReader, options, "extractAppendedData");
        if (extractPrependedData) zipReader.prependedData = startOffset > 0 ? await (0, _ioJs.readUint8Array)(reader, 0, startOffset) : new Uint8Array();
        zipReader.comment = commentLength ? await (0, _ioJs.readUint8Array)(reader, commentOffset + (0, _constantsJs.END_OF_CENTRAL_DIR_LENGTH), commentLength) : new Uint8Array();
        if (extractAppendedData) zipReader.appendedData = appendedDataOffset < reader.size ? await (0, _ioJs.readUint8Array)(reader, appendedDataOffset, reader.size - appendedDataOffset) : new Uint8Array();
        return true;
    }
    async getEntries(options = {}) {
        const entries = [];
        for await (const entry of this.getEntriesGenerator(options))entries.push(entry);
        return entries;
    }
    async close() {}
}
class ZipEntry {
    constructor(reader, config, options){
        Object.assign(this, {
            reader,
            config,
            options
        });
    }
    async getData(writer, fileEntry, options = {}) {
        const zipEntry = this;
        const { reader, offset, diskNumberStart, extraFieldAES, compressionMethod, config, bitFlag, signature, rawLastModDate, uncompressedSize, compressedSize } = zipEntry;
        const localDirectory = zipEntry.localDirectory = {};
        const dataArray = await (0, _ioJs.readUint8Array)(reader, offset, 30, diskNumberStart);
        const dataView = getDataView(dataArray);
        let password = getOptionValue(zipEntry, options, "password");
        password = password && password.length && password;
        if (extraFieldAES) {
            if (extraFieldAES.originalCompressionMethod != (0, _constantsJs.COMPRESSION_METHOD_AES)) throw new Error(ERR_UNSUPPORTED_COMPRESSION);
        }
        if (compressionMethod != (0, _constantsJs.COMPRESSION_METHOD_STORE) && compressionMethod != (0, _constantsJs.COMPRESSION_METHOD_DEFLATE)) throw new Error(ERR_UNSUPPORTED_COMPRESSION);
        if (getUint32(dataView, 0) != (0, _constantsJs.LOCAL_FILE_HEADER_SIGNATURE)) throw new Error(ERR_LOCAL_FILE_HEADER_NOT_FOUND);
        readCommonHeader(localDirectory, dataView, 4);
        localDirectory.rawExtraField = localDirectory.extraFieldLength ? await (0, _ioJs.readUint8Array)(reader, offset + 30 + localDirectory.filenameLength, localDirectory.extraFieldLength, diskNumberStart) : new Uint8Array();
        await readCommonFooter(zipEntry, localDirectory, dataView, 4);
        Object.assign(fileEntry, {
            lastAccessDate: localDirectory.lastAccessDate,
            creationDate: localDirectory.creationDate
        });
        const encrypted = zipEntry.encrypted && localDirectory.encrypted;
        const zipCrypto = encrypted && !extraFieldAES;
        if (encrypted) {
            if (!zipCrypto && extraFieldAES.strength === (0, _constantsJs.UNDEFINED_VALUE)) throw new Error(ERR_UNSUPPORTED_ENCRYPTION);
            else if (!password) throw new Error(ERR_ENCRYPTED);
        }
        const dataOffset = offset + 30 + localDirectory.filenameLength + localDirectory.extraFieldLength;
        const readable = reader.readable;
        readable.diskNumberStart = diskNumberStart;
        readable.offset = dataOffset;
        const size = readable.size = compressedSize;
        if (writer instanceof WritableStream) writer = {
            writable: writer
        };
        const { writable } = writer;
        if (writable.size === (0, _constantsJs.UNDEFINED_VALUE)) writable.size = 0;
        const signal = getOptionValue(zipEntry, options, "signal");
        await (0, _ioJs.initStream)(writer, uncompressedSize);
        const { onstart, onprogress, onend } = options;
        const workerOptions = {
            options: {
                codecType: (0, _codecPoolJs.CODEC_INFLATE),
                password,
                zipCrypto,
                encryptionStrength: extraFieldAES && extraFieldAES.strength,
                signed: getOptionValue(zipEntry, options, "checkSignature"),
                passwordVerification: zipCrypto && (bitFlag.dataDescriptor ? rawLastModDate >>> 8 & 0xFF : signature >>> 24 & 0xFF),
                signature,
                compressed: compressionMethod != 0,
                encrypted,
                useWebWorkers: getOptionValue(zipEntry, options, "useWebWorkers"),
                useCompressionStream: getOptionValue(zipEntry, options, "useCompressionStream"),
                transferStreams: getOptionValue(zipEntry, options, "transferStreams")
            },
            config,
            streamOptions: {
                signal,
                size,
                onstart,
                onprogress,
                onend
            }
        };
        writable.size += (await (0, _codecPoolJs.runWorker)({
            readable,
            writable
        }, workerOptions)).size;
        const preventClose = getOptionValue(zipEntry, options, "preventClose");
        if (!preventClose) await writable.close();
        return writer.getData ? writer.getData() : writable;
    }
}
function readCommonHeader(directory, dataView, offset) {
    const rawBitFlag = directory.rawBitFlag = getUint16(dataView, offset + 2);
    const encrypted = (rawBitFlag & (0, _constantsJs.BITFLAG_ENCRYPTED)) == (0, _constantsJs.BITFLAG_ENCRYPTED);
    const rawLastModDate = getUint32(dataView, offset + 6);
    Object.assign(directory, {
        encrypted,
        version: getUint16(dataView, offset),
        bitFlag: {
            level: (rawBitFlag & (0, _constantsJs.BITFLAG_LEVEL)) >> 1,
            dataDescriptor: (rawBitFlag & (0, _constantsJs.BITFLAG_DATA_DESCRIPTOR)) == (0, _constantsJs.BITFLAG_DATA_DESCRIPTOR),
            languageEncodingFlag: (rawBitFlag & (0, _constantsJs.BITFLAG_LANG_ENCODING_FLAG)) == (0, _constantsJs.BITFLAG_LANG_ENCODING_FLAG)
        },
        rawLastModDate,
        lastModDate: getDate(rawLastModDate),
        filenameLength: getUint16(dataView, offset + 22),
        extraFieldLength: getUint16(dataView, offset + 24)
    });
}
async function readCommonFooter(fileEntry, directory, dataView, offset) {
    const { rawExtraField } = directory;
    const extraField = directory.extraField = new Map();
    const rawExtraFieldView = getDataView(new Uint8Array(rawExtraField));
    let offsetExtraField = 0;
    try {
        while(offsetExtraField < rawExtraField.length){
            const type = getUint16(rawExtraFieldView, offsetExtraField);
            const size = getUint16(rawExtraFieldView, offsetExtraField + 2);
            extraField.set(type, {
                type,
                data: rawExtraField.slice(offsetExtraField + 4, offsetExtraField + 4 + size)
            });
            offsetExtraField += 4 + size;
        }
    } catch (_error) {
    // ignored
    }
    const compressionMethod = getUint16(dataView, offset + 4);
    Object.assign(directory, {
        signature: getUint32(dataView, offset + 10),
        uncompressedSize: getUint32(dataView, offset + 18),
        compressedSize: getUint32(dataView, offset + 14)
    });
    const extraFieldZip64 = extraField.get((0, _constantsJs.EXTRAFIELD_TYPE_ZIP64));
    if (extraFieldZip64) {
        readExtraFieldZip64(extraFieldZip64, directory);
        directory.extraFieldZip64 = extraFieldZip64;
    }
    const extraFieldUnicodePath = extraField.get((0, _constantsJs.EXTRAFIELD_TYPE_UNICODE_PATH));
    if (extraFieldUnicodePath) {
        await readExtraFieldUnicode(extraFieldUnicodePath, "filename", "rawFilename", directory, fileEntry);
        directory.extraFieldUnicodePath = extraFieldUnicodePath;
    }
    const extraFieldUnicodeComment = extraField.get((0, _constantsJs.EXTRAFIELD_TYPE_UNICODE_COMMENT));
    if (extraFieldUnicodeComment) {
        await readExtraFieldUnicode(extraFieldUnicodeComment, "comment", "rawComment", directory, fileEntry);
        directory.extraFieldUnicodeComment = extraFieldUnicodeComment;
    }
    const extraFieldAES = extraField.get((0, _constantsJs.EXTRAFIELD_TYPE_AES));
    if (extraFieldAES) {
        readExtraFieldAES(extraFieldAES, directory, compressionMethod);
        directory.extraFieldAES = extraFieldAES;
    } else directory.compressionMethod = compressionMethod;
    const extraFieldNTFS = extraField.get((0, _constantsJs.EXTRAFIELD_TYPE_NTFS));
    if (extraFieldNTFS) {
        readExtraFieldNTFS(extraFieldNTFS, directory);
        directory.extraFieldNTFS = extraFieldNTFS;
    }
    const extraFieldExtendedTimestamp = extraField.get((0, _constantsJs.EXTRAFIELD_TYPE_EXTENDED_TIMESTAMP));
    if (extraFieldExtendedTimestamp) {
        readExtraFieldExtendedTimestamp(extraFieldExtendedTimestamp, directory);
        directory.extraFieldExtendedTimestamp = extraFieldExtendedTimestamp;
    }
}
function readExtraFieldZip64(extraFieldZip64, directory) {
    directory.zip64 = true;
    const extraFieldView = getDataView(extraFieldZip64.data);
    const missingProperties = ZIP64_PROPERTIES.filter(([propertyName, max])=>directory[propertyName] == max);
    for(let indexMissingProperty = 0, offset = 0; indexMissingProperty < missingProperties.length; indexMissingProperty++){
        const [propertyName, max] = missingProperties[indexMissingProperty];
        if (directory[propertyName] == max) {
            const extraction = ZIP64_EXTRACTION[max];
            directory[propertyName] = extraFieldZip64[propertyName] = extraction.getValue(extraFieldView, offset);
            offset += extraction.bytes;
        } else if (extraFieldZip64[propertyName]) throw new Error(ERR_EXTRAFIELD_ZIP64_NOT_FOUND);
    }
}
async function readExtraFieldUnicode(extraFieldUnicode, propertyName, rawPropertyName, directory, fileEntry) {
    const extraFieldView = getDataView(extraFieldUnicode.data);
    const crc32 = new (0, _crc32Js.Crc32)();
    crc32.append(fileEntry[rawPropertyName]);
    const dataViewSignature = getDataView(new Uint8Array(4));
    dataViewSignature.setUint32(0, crc32.get(), true);
    Object.assign(extraFieldUnicode, {
        version: getUint8(extraFieldView, 0),
        signature: getUint32(extraFieldView, 1),
        [propertyName]: await (0, _decodeTextJs.decodeText)(extraFieldUnicode.data.subarray(5)),
        valid: !fileEntry.bitFlag.languageEncodingFlag && extraFieldUnicode.signature == getUint32(dataViewSignature, 0)
    });
    if (extraFieldUnicode.valid) {
        directory[propertyName] = extraFieldUnicode[propertyName];
        directory[propertyName + "UTF8"] = true;
    }
}
function readExtraFieldAES(extraFieldAES, directory, compressionMethod) {
    const extraFieldView = getDataView(extraFieldAES.data);
    const strength = getUint8(extraFieldView, 4);
    Object.assign(extraFieldAES, {
        vendorVersion: getUint8(extraFieldView, 0),
        vendorId: getUint8(extraFieldView, 2),
        strength,
        originalCompressionMethod: compressionMethod,
        compressionMethod: getUint16(extraFieldView, 5)
    });
    directory.compressionMethod = extraFieldAES.compressionMethod;
}
function readExtraFieldNTFS(extraFieldNTFS, directory) {
    const extraFieldView = getDataView(extraFieldNTFS.data);
    let offsetExtraField = 4;
    let tag1Data;
    try {
        while(offsetExtraField < extraFieldNTFS.data.length && !tag1Data){
            const tagValue = getUint16(extraFieldView, offsetExtraField);
            const attributeSize = getUint16(extraFieldView, offsetExtraField + 2);
            if (tagValue == (0, _constantsJs.EXTRAFIELD_TYPE_NTFS_TAG1)) tag1Data = extraFieldNTFS.data.slice(offsetExtraField + 4, offsetExtraField + 4 + attributeSize);
            offsetExtraField += 4 + attributeSize;
        }
    } catch (_error) {
    // ignored
    }
    try {
        if (tag1Data && tag1Data.length == 24) {
            const tag1View = getDataView(tag1Data);
            const rawLastModDate = tag1View.getBigUint64(0, true);
            const rawLastAccessDate = tag1View.getBigUint64(8, true);
            const rawCreationDate = tag1View.getBigUint64(16, true);
            Object.assign(extraFieldNTFS, {
                rawLastModDate,
                rawLastAccessDate,
                rawCreationDate
            });
            const lastModDate = getDateNTFS(rawLastModDate);
            const lastAccessDate = getDateNTFS(rawLastAccessDate);
            const creationDate = getDateNTFS(rawCreationDate);
            const extraFieldData = {
                lastModDate,
                lastAccessDate,
                creationDate
            };
            Object.assign(extraFieldNTFS, extraFieldData);
            Object.assign(directory, extraFieldData);
        }
    } catch (_error) {
    // ignored
    }
}
function readExtraFieldExtendedTimestamp(extraFieldExtendedTimestamp, directory) {
    const extraFieldView = getDataView(extraFieldExtendedTimestamp.data);
    const flags = getUint8(extraFieldView, 0);
    const timeProperties = [];
    const timeRawProperties = [];
    if ((flags & 0x1) == 0x1) {
        timeProperties.push("lastModDate");
        timeRawProperties.push("rawLastModDate");
    }
    if ((flags & 0x2) == 0x2) {
        timeProperties.push("lastAccessDate");
        timeRawProperties.push("rawLastAccessDate");
    }
    if ((flags & 0x4) == 0x4) {
        timeProperties.push("creationDate");
        timeRawProperties.push("rawCreationDate");
    }
    let offset = 1;
    timeProperties.forEach((propertyName, indexProperty)=>{
        if (extraFieldExtendedTimestamp.data.length >= offset + 4) {
            const time = getUint32(extraFieldView, offset);
            directory[propertyName] = extraFieldExtendedTimestamp[propertyName] = new Date(time * 1000);
            const rawPropertyName = timeRawProperties[indexProperty];
            extraFieldExtendedTimestamp[rawPropertyName] = time;
        }
        offset += 4;
    });
}
async function seekSignature(reader, signature, startOffset, minimumBytes, maximumLength) {
    const signatureArray = new Uint8Array(4);
    const signatureView = getDataView(signatureArray);
    setUint32(signatureView, 0, signature);
    const maximumBytes = minimumBytes + maximumLength;
    return await seek(minimumBytes) || await seek(Math.min(maximumBytes, startOffset));
    async function seek(length) {
        const offset = startOffset - length;
        const bytes = await (0, _ioJs.readUint8Array)(reader, offset, length);
        for(let indexByte = bytes.length - minimumBytes; indexByte >= 0; indexByte--){
            if (bytes[indexByte] == signatureArray[0] && bytes[indexByte + 1] == signatureArray[1] && bytes[indexByte + 2] == signatureArray[2] && bytes[indexByte + 3] == signatureArray[3]) return {
                offset: offset + indexByte,
                buffer: bytes.slice(indexByte, indexByte + minimumBytes).buffer
            };
        }
    }
}
function getOptionValue(zipReader, options, name) {
    return options[name] === (0, _constantsJs.UNDEFINED_VALUE) ? zipReader.options[name] : options[name];
}
function getDate(timeRaw) {
    const date = (timeRaw & 0xffff0000) >> 16, time = timeRaw & 0x0000ffff;
    try {
        return new Date(1980 + ((date & 0xFE00) >> 9), ((date & 0x01E0) >> 5) - 1, date & 0x001F, (time & 0xF800) >> 11, (time & 0x07E0) >> 5, (time & 0x001F) * 2, 0);
    } catch (_error) {
    // ignored
    }
}
function getDateNTFS(timeRaw) {
    return new Date(Number(timeRaw / BigInt(10000) - BigInt(11644473600000)));
}
function getUint8(view, offset) {
    return view.getUint8(offset);
}
function getUint16(view, offset) {
    return view.getUint16(offset, true);
}
function getUint32(view, offset) {
    return view.getUint32(offset, true);
}
function getBigUint64(view, offset) {
    return Number(view.getBigUint64(offset, true));
}
function setUint32(view, offset, value) {
    view.setUint32(offset, value, true);
}
function getDataView(array) {
    return new DataView(array.buffer);
}

},{"./constants.js":"4V9hL","./configuration.js":"5UMrn","./codec-pool.js":"36tHD","./io.js":"8tQJ7","./util/decode-text.js":"dmuq2","./streams/codecs/crc32.js":"2Z8Tu","./zip-entry.js":"hUC9W","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dmuq2":[function(require,module,exports) {
/*
 Copyright (c) 2022 Gildas Lormeau. All rights reserved.

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions are met:

 1. Redistributions of source code must retain the above copyright notice,
 this list of conditions and the following disclaimer.

 2. Redistributions in binary form must reproduce the above copyright 
 notice, this list of conditions and the following disclaimer in 
 the documentation and/or other materials provided with the distribution.

 3. The names of the authors may not be used to endorse or promote products
 derived from this software without specific prior written permission.

 THIS SOFTWARE IS PROVIDED ''AS IS'' AND ANY EXPRESSED OR IMPLIED WARRANTIES,
 INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
 FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL JCRAFT,
 INC. OR ANY CONTRIBUTORS TO THIS SOFTWARE BE LIABLE FOR ANY DIRECT, INDIRECT,
 INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA,
 OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
 LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
 EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */ /* global TextDecoder */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "decodeText", ()=>decodeText);
var _cp437DecodeJs = require("./cp437-decode.js");
function decodeText(value, encoding) {
    if (encoding && encoding.trim().toLowerCase() == "cp437") return (0, _cp437DecodeJs.decodeCP437)(value);
    else return new TextDecoder(encoding).decode(value);
}

},{"./cp437-decode.js":"lOcEV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lOcEV":[function(require,module,exports) {
/*
 Copyright (c) 2022 Gildas Lormeau. All rights reserved.

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions are met:

 1. Redistributions of source code must retain the above copyright notice,
 this list of conditions and the following disclaimer.

 2. Redistributions in binary form must reproduce the above copyright 
 notice, this list of conditions and the following disclaimer in 
 the documentation and/or other materials provided with the distribution.

 3. The names of the authors may not be used to endorse or promote products
 derived from this software without specific prior written permission.

 THIS SOFTWARE IS PROVIDED ''AS IS'' AND ANY EXPRESSED OR IMPLIED WARRANTIES,
 INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
 FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL JCRAFT,
 INC. OR ANY CONTRIBUTORS TO THIS SOFTWARE BE LIABLE FOR ANY DIRECT, INDIRECT,
 INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA,
 OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
 LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
 EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */ /* global TextDecoder */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "decodeCP437", ()=>decodeCP437);
const CP437 = "\0\u263A\u263B\u2665\u2666\u2663\u2660\u2022\u25D8\u25CB\u25D9\u2642\u2640\u266A\u266B\u263C\u25BA\u25C4\u2195\u203C\xb6\xa7\u25AC\u21A8\u2191\u2193\u2192\u2190\u221F\u2194\u25B2\u25BC !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~\u2302\xc7\xfc\xe9\xe2\xe4\xe0\xe5\xe7\xea\xeb\xe8\xef\xee\xec\xc4\xc5\xc9\xe6\xc6\xf4\xf6\xf2\xfb\xf9\xff\xd6\xdc\xa2\xa3\xa5\u20A7\u0192\xe1\xed\xf3\xfa\xf1\xd1\xaa\xba\xbf\u2310\xac\xbd\xbc\xa1\xab\xbb\u2591\u2592\u2593\u2502\u2524\u2561\u2562\u2556\u2555\u2563\u2551\u2557\u255D\u255C\u255B\u2510\u2514\u2534\u252C\u251C\u2500\u253C\u255E\u255F\u255A\u2554\u2569\u2566\u2560\u2550\u256C\u2567\u2568\u2564\u2565\u2559\u2558\u2552\u2553\u256B\u256A\u2518\u250C\u2588\u2584\u258C\u2590\u2580\u03B1\xdf\u0393\u03C0\u03A3\u03C3\xb5\u03C4\u03A6\u0398\u03A9\u03B4\u221E\u03C6\u03B5\u2229\u2261\xb1\u2265\u2264\u2320\u2321\xf7\u2248\xb0\u2219\xb7\u221A\u207F\xb2\u25A0 ".split("");
const VALID_CP437 = CP437.length == 256;
function decodeCP437(stringValue) {
    if (VALID_CP437) {
        let result = "";
        for(let indexCharacter = 0; indexCharacter < stringValue.length; indexCharacter++)result += CP437[stringValue[indexCharacter]];
        return result;
    } else return new TextDecoder().decode(stringValue);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hUC9W":[function(require,module,exports) {
/*
 Copyright (c) 2022 Gildas Lormeau. All rights reserved.

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions are met:

 1. Redistributions of source code must retain the above copyright notice,
 this list of conditions and the following disclaimer.

 2. Redistributions in binary form must reproduce the above copyright 
 notice, this list of conditions and the following disclaimer in 
 the documentation and/or other materials provided with the distribution.

 3. The names of the authors may not be used to endorse or promote products
 derived from this software without specific prior written permission.

 THIS SOFTWARE IS PROVIDED ''AS IS'' AND ANY EXPRESSED OR IMPLIED WARRANTIES,
 INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
 FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL JCRAFT,
 INC. OR ANY CONTRIBUTORS TO THIS SOFTWARE BE LIABLE FOR ANY DIRECT, INDIRECT,
 INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA,
 OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
 LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
 EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Entry", ()=>Entry);
const PROPERTY_NAMES = [
    "filename",
    "rawFilename",
    "directory",
    "encrypted",
    "compressedSize",
    "uncompressedSize",
    "lastModDate",
    "rawLastModDate",
    "comment",
    "rawComment",
    "signature",
    "extraField",
    "rawExtraField",
    "bitFlag",
    "extraFieldZip64",
    "extraFieldUnicodePath",
    "extraFieldUnicodeComment",
    "extraFieldAES",
    "filenameUTF8",
    "commentUTF8",
    "offset",
    "zip64",
    "compressionMethod",
    "extraFieldNTFS",
    "lastAccessDate",
    "creationDate",
    "extraFieldExtendedTimestamp",
    "version",
    "versionMadeBy",
    "msDosCompatible",
    "internalFileAttribute",
    "externalFileAttribute",
    "diskNumberStart"
];
class Entry {
    constructor(data){
        PROPERTY_NAMES.forEach((name)=>this[name] = data[name]);
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3jPJZ":[function(require,module,exports) {
/*
 Copyright (c) 2022 Gildas Lormeau. All rights reserved.

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions are met:

 1. Redistributions of source code must retain the above copyright notice,
 this list of conditions and the following disclaimer.

 2. Redistributions in binary form must reproduce the above copyright 
 notice, this list of conditions and the following disclaimer in 
 the documentation and/or other materials provided with the distribution.

 3. The names of the authors may not be used to endorse or promote products
 derived from this software without specific prior written permission.

 THIS SOFTWARE IS PROVIDED ''AS IS'' AND ANY EXPRESSED OR IMPLIED WARRANTIES,
 INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
 FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL JCRAFT,
 INC. OR ANY CONTRIBUTORS TO THIS SOFTWARE BE LIABLE FOR ANY DIRECT, INDIRECT,
 INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA,
 OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
 LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
 EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */ /* global BigInt, ReadableStream, WritableStream */ // deno-lint-ignore-file no-this-alias
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ZipWriter", ()=>ZipWriter);
parcelHelpers.export(exports, "ERR_DUPLICATED_NAME", ()=>ERR_DUPLICATED_NAME);
parcelHelpers.export(exports, "ERR_INVALID_COMMENT", ()=>ERR_INVALID_COMMENT);
parcelHelpers.export(exports, "ERR_INVALID_ENTRY_NAME", ()=>ERR_INVALID_ENTRY_NAME);
parcelHelpers.export(exports, "ERR_INVALID_ENTRY_COMMENT", ()=>ERR_INVALID_ENTRY_COMMENT);
parcelHelpers.export(exports, "ERR_INVALID_VERSION", ()=>ERR_INVALID_VERSION);
parcelHelpers.export(exports, "ERR_INVALID_EXTRAFIELD_TYPE", ()=>ERR_INVALID_EXTRAFIELD_TYPE);
parcelHelpers.export(exports, "ERR_INVALID_EXTRAFIELD_DATA", ()=>ERR_INVALID_EXTRAFIELD_DATA);
parcelHelpers.export(exports, "ERR_INVALID_ENCRYPTION_STRENGTH", ()=>ERR_INVALID_ENCRYPTION_STRENGTH);
parcelHelpers.export(exports, "ERR_UNSUPPORTED_FORMAT", ()=>ERR_UNSUPPORTED_FORMAT);
var _constantsJs = require("./constants.js");
var _configurationJs = require("./configuration.js");
var _codecPoolJs = require("./codec-pool.js");
var _ioJs = require("./io.js");
var _encodeTextJs = require("./util/encode-text.js");
var _zipEntryJs = require("./zip-entry.js");
const ERR_DUPLICATED_NAME = "File already exists";
const ERR_INVALID_COMMENT = "Zip file comment exceeds 64KB";
const ERR_INVALID_ENTRY_COMMENT = "File entry comment exceeds 64KB";
const ERR_INVALID_ENTRY_NAME = "File entry name exceeds 64KB";
const ERR_INVALID_VERSION = "Version exceeds 65535";
const ERR_INVALID_ENCRYPTION_STRENGTH = "The strength must equal 1, 2, or 3";
const ERR_INVALID_EXTRAFIELD_TYPE = "Extra field type exceeds 65535";
const ERR_INVALID_EXTRAFIELD_DATA = "Extra field data exceeds 64KB";
const ERR_UNSUPPORTED_FORMAT = "Zip64 is not supported (make sure 'keepOrder' is set to 'true')";
const EXTRAFIELD_DATA_AES = new Uint8Array([
    0x07,
    0x00,
    0x02,
    0x00,
    0x41,
    0x45,
    0x03,
    0x00,
    0x00
]);
const EXTRAFIELD_LENGTH_ZIP64 = 28;
let workers = 0;
const pendingEntries = [];
class ZipWriter {
    constructor(writer, options = {}){
        if (writer.writable === (0, _constantsJs.UNDEFINED_VALUE) && typeof writer.next == (0, _constantsJs.FUNCTION_TYPE)) writer = new (0, _ioJs.SplitZipWriter)(writer);
        if (writer instanceof WritableStream) writer = {
            writable: writer
        };
        if (writer.writable.size === (0, _constantsJs.UNDEFINED_VALUE)) writer.writable.size = 0;
        const splitZipFile = writer instanceof (0, _ioJs.SplitZipWriter);
        if (!splitZipFile) Object.assign(writer, {
            diskNumber: 0,
            diskOffset: 0,
            availableSize: Infinity
        });
        Object.assign(this, {
            writer,
            addSplitZipSignature: splitZipFile,
            options,
            config: (0, _configurationJs.getConfiguration)(),
            files: new Map(),
            filenames: new Set(),
            offset: writer.writable.size,
            pendingEntriesSize: 0,
            pendingAddFileCalls: new Set()
        });
    }
    async add(name = "", reader, options = {}) {
        const zipWriter = this;
        const { pendingAddFileCalls, config } = zipWriter;
        if (workers < config.maxWorkers) workers++;
        else await new Promise((resolve)=>pendingEntries.push(resolve));
        let promiseAddFile;
        try {
            name = name.trim();
            if (zipWriter.filenames.has(name)) throw new Error(ERR_DUPLICATED_NAME);
            zipWriter.filenames.add(name);
            promiseAddFile = addFile(zipWriter, name, reader, options);
            pendingAddFileCalls.add(promiseAddFile);
            return await promiseAddFile;
        } catch (error) {
            zipWriter.filenames.delete(name);
            throw error;
        } finally{
            pendingAddFileCalls.delete(promiseAddFile);
            const pendingEntry = pendingEntries.shift();
            if (pendingEntry) pendingEntry();
            else workers--;
        }
    }
    async close(comment = new Uint8Array(), options = {}) {
        const { pendingAddFileCalls, writer } = this;
        const { writable } = writer;
        while(pendingAddFileCalls.size)await Promise.all(Array.from(pendingAddFileCalls));
        await closeFile(this, comment, options);
        if (!writer.preventClose && !options.preventClose) await writable.close();
        return writer.getData ? writer.getData() : writable;
    }
}
async function addFile(zipWriter, name, reader, options) {
    name = name.trim();
    if (options.directory && !name.endsWith((0, _constantsJs.DIRECTORY_SIGNATURE))) name += (0, _constantsJs.DIRECTORY_SIGNATURE);
    else options.directory = name.endsWith((0, _constantsJs.DIRECTORY_SIGNATURE));
    const rawFilename = (0, _encodeTextJs.encodeText)(name);
    if (getLength(rawFilename) > (0, _constantsJs.MAX_16_BITS)) throw new Error(ERR_INVALID_ENTRY_NAME);
    const comment = options.comment || "";
    const rawComment = (0, _encodeTextJs.encodeText)(comment);
    if (getLength(rawComment) > (0, _constantsJs.MAX_16_BITS)) throw new Error(ERR_INVALID_ENTRY_COMMENT);
    const version = zipWriter.options.version || options.version || 0;
    if (version > (0, _constantsJs.MAX_16_BITS)) throw new Error(ERR_INVALID_VERSION);
    const versionMadeBy = zipWriter.options.versionMadeBy || options.versionMadeBy || 20;
    if (versionMadeBy > (0, _constantsJs.MAX_16_BITS)) throw new Error(ERR_INVALID_VERSION);
    const lastModDate = getOptionValue(zipWriter, options, "lastModDate") || new Date();
    const lastAccessDate = getOptionValue(zipWriter, options, "lastAccessDate");
    const creationDate = getOptionValue(zipWriter, options, "creationDate");
    const password = getOptionValue(zipWriter, options, "password");
    const encryptionStrength = getOptionValue(zipWriter, options, "encryptionStrength") || 3;
    const zipCrypto = getOptionValue(zipWriter, options, "zipCrypto");
    if (password !== (0, _constantsJs.UNDEFINED_VALUE) && encryptionStrength !== (0, _constantsJs.UNDEFINED_VALUE) && (encryptionStrength < 1 || encryptionStrength > 3)) throw new Error(ERR_INVALID_ENCRYPTION_STRENGTH);
    let rawExtraField = new Uint8Array();
    const { extraField } = options;
    if (extraField) {
        let extraFieldSize = 0;
        let offset = 0;
        extraField.forEach((data)=>extraFieldSize += 4 + getLength(data));
        rawExtraField = new Uint8Array(extraFieldSize);
        extraField.forEach((data, type)=>{
            if (type > (0, _constantsJs.MAX_16_BITS)) throw new Error(ERR_INVALID_EXTRAFIELD_TYPE);
            if (getLength(data) > (0, _constantsJs.MAX_16_BITS)) throw new Error(ERR_INVALID_EXTRAFIELD_DATA);
            arraySet(rawExtraField, new Uint16Array([
                type
            ]), offset);
            arraySet(rawExtraField, new Uint16Array([
                getLength(data)
            ]), offset + 2);
            arraySet(rawExtraField, data, offset + 4);
            offset += 4 + getLength(data);
        });
    }
    let extendedTimestamp = getOptionValue(zipWriter, options, "extendedTimestamp");
    if (extendedTimestamp === (0, _constantsJs.UNDEFINED_VALUE)) extendedTimestamp = true;
    let maximumCompressedSize = 0;
    let maximumEntrySize = 0;
    let keepOrder = getOptionValue(zipWriter, options, "keepOrder");
    if (keepOrder === (0, _constantsJs.UNDEFINED_VALUE)) keepOrder = true;
    let uncompressedSize = 0;
    let msDosCompatible = getOptionValue(zipWriter, options, "msDosCompatible");
    if (msDosCompatible === (0, _constantsJs.UNDEFINED_VALUE)) msDosCompatible = true;
    const internalFileAttribute = getOptionValue(zipWriter, options, "internalFileAttribute") || 0;
    const externalFileAttribute = getOptionValue(zipWriter, options, "externalFileAttribute") || 0;
    let zip64 = getOptionValue(zipWriter, options, "zip64");
    if (reader) {
        if (reader instanceof ReadableStream) reader = {
            readable: reader
        };
        await (0, _ioJs.initStream)(reader);
        if (reader.size === (0, _constantsJs.UNDEFINED_VALUE)) {
            options.dataDescriptor = true;
            if (zip64 || zip64 === (0, _constantsJs.UNDEFINED_VALUE)) {
                zip64 = true;
                maximumCompressedSize = (0, _constantsJs.MAX_32_BITS);
            }
        } else {
            uncompressedSize = reader.size;
            maximumCompressedSize = getMaximumCompressedSize(uncompressedSize);
        }
    }
    if (zipWriter.offset + zipWriter.pendingEntriesSize >= (0, _constantsJs.MAX_32_BITS) || uncompressedSize >= (0, _constantsJs.MAX_32_BITS) || maximumCompressedSize >= (0, _constantsJs.MAX_32_BITS)) {
        if (zip64 === false || !keepOrder) throw new Error(ERR_UNSUPPORTED_FORMAT);
        else zip64 = true;
    }
    zip64 = zip64 || false;
    const level = getOptionValue(zipWriter, options, "level");
    const useWebWorkers = getOptionValue(zipWriter, options, "useWebWorkers");
    const bufferedWrite = getOptionValue(zipWriter, options, "bufferedWrite");
    let dataDescriptor = getOptionValue(zipWriter, options, "dataDescriptor");
    let dataDescriptorSignature = getOptionValue(zipWriter, options, "dataDescriptorSignature");
    const signal = getOptionValue(zipWriter, options, "signal");
    const useCompressionStream = getOptionValue(zipWriter, options, "useCompressionStream");
    if (dataDescriptor === (0, _constantsJs.UNDEFINED_VALUE)) dataDescriptor = true;
    if (dataDescriptor && dataDescriptorSignature === (0, _constantsJs.UNDEFINED_VALUE)) dataDescriptorSignature = false;
    options = Object.assign({}, options, {
        rawFilename,
        rawComment,
        version,
        versionMadeBy,
        lastModDate,
        lastAccessDate,
        creationDate,
        rawExtraField,
        zip64,
        password,
        level,
        useWebWorkers,
        encryptionStrength,
        extendedTimestamp,
        zipCrypto,
        bufferedWrite,
        keepOrder,
        dataDescriptor,
        dataDescriptorSignature,
        signal,
        msDosCompatible,
        internalFileAttribute,
        externalFileAttribute,
        useCompressionStream
    });
    const headerInfo = getHeaderInfo(options);
    const dataDescriptorInfo = getDataDescriptorInfo(options);
    maximumEntrySize = getLength(headerInfo.localHeaderArray, dataDescriptorInfo.dataDescriptorArray) + maximumCompressedSize;
    zipWriter.pendingEntriesSize += maximumEntrySize;
    let fileEntry;
    try {
        fileEntry = await getFileEntry(zipWriter, name, reader, {
            headerInfo,
            dataDescriptorInfo
        }, options);
    } catch (error) {
        if (!error.corruptedEntry && maximumEntrySize) zipWriter.pendingEntriesSize -= maximumEntrySize;
        throw error;
    }
    Object.assign(fileEntry, {
        name,
        comment,
        extraField
    });
    return new (0, _zipEntryJs.Entry)(fileEntry);
}
async function getFileEntry(zipWriter, name, reader, entryInfo, options) {
    const { files, writer } = zipWriter;
    const { keepOrder, dataDescriptor, signal } = options;
    const previousFileEntry = Array.from(files.values()).pop();
    let fileEntry = {};
    let bufferedWrite;
    let releaseLockWriter;
    let releaseLockCurrentFileEntry;
    let writingBufferedEntryData;
    let writingEntryData;
    let fileWriter;
    files.set(name, fileEntry);
    try {
        let lockPreviousFileEntry;
        if (keepOrder) {
            lockPreviousFileEntry = previousFileEntry && previousFileEntry.lock;
            requestLockCurrentFileEntry();
        }
        if (options.bufferedWrite || zipWriter.lockWriter || !dataDescriptor) {
            fileWriter = new (0, _ioJs.BlobWriter)();
            fileWriter.writable.size = 0;
            bufferedWrite = true;
            await (0, _ioJs.initStream)(writer);
        } else {
            fileWriter = writer;
            zipWriter.lockWriter = Promise.resolve();
            releaseLockWriter = ()=>delete zipWriter.lockWriter;
        }
        await (0, _ioJs.initStream)(fileWriter);
        const { writable, diskNumber } = writer;
        let { diskOffset } = writer;
        if (zipWriter.addSplitZipSignature) {
            delete zipWriter.addSplitZipSignature;
            const signatureArray = new Uint8Array(4);
            const signatureArrayView = new DataView(signatureArray.buffer);
            setUint32(signatureArrayView, 0, (0, _constantsJs.SPLIT_ZIP_FILE_SIGNATURE));
            await writeData(writable, signatureArray);
            zipWriter.offset += 4;
        }
        if (!bufferedWrite) await lockPreviousFileEntry;
        writingEntryData = true;
        fileEntry.diskNumberStart = diskNumber;
        fileEntry = await createFileEntry(reader, fileWriter, fileEntry, entryInfo, zipWriter.config, options);
        writingEntryData = false;
        files.set(name, fileEntry);
        fileEntry.filename = name;
        if (bufferedWrite) {
            await fileWriter.writable.close();
            let blob = await fileWriter.getData();
            await lockPreviousFileEntry;
            await requestLockWriter();
            writingBufferedEntryData = true;
            if (!dataDescriptor) blob = await setMissingInfo(fileEntry, blob, writable, options);
            fileEntry.diskNumberStart = writer.diskNumber;
            diskOffset = writer.diskOffset;
            await blob.stream().pipeTo(writable, {
                preventClose: true,
                signal
            });
            writable.size += blob.size;
            writingBufferedEntryData = false;
        }
        fileEntry.offset = zipWriter.offset - diskOffset;
        if (fileEntry.zip64) setZip64Info(fileEntry);
        else if (fileEntry.offset >= (0, _constantsJs.MAX_32_BITS)) throw new Error(ERR_UNSUPPORTED_FORMAT);
        zipWriter.offset += fileEntry.length;
        return fileEntry;
    } catch (error) {
        if (bufferedWrite && writingBufferedEntryData || !bufferedWrite && writingEntryData) {
            zipWriter.hasCorruptedEntries = true;
            if (error) error.corruptedEntry = true;
            if (bufferedWrite) zipWriter.offset += fileWriter.writable.size;
            else zipWriter.offset = fileWriter.writable.size;
        }
        files.delete(name);
        throw error;
    } finally{
        if (releaseLockCurrentFileEntry) releaseLockCurrentFileEntry();
        if (releaseLockWriter) releaseLockWriter();
    }
    function requestLockCurrentFileEntry() {
        fileEntry.lock = new Promise((resolve)=>releaseLockCurrentFileEntry = resolve);
    }
    async function requestLockWriter() {
        const { lockWriter } = zipWriter;
        if (lockWriter) {
            await lockWriter.then(()=>delete zipWriter.lockWriter);
            return requestLockWriter();
        } else zipWriter.lockWriter = new Promise((resolve)=>releaseLockWriter = resolve);
    }
}
async function createFileEntry(reader, writer, { diskNumberStart, lock }, entryInfo, config, options) {
    const { headerInfo, dataDescriptorInfo } = entryInfo;
    const { localHeaderArray, headerArray, lastModDate, rawLastModDate, encrypted, compressed, version, compressionMethod, rawExtraFieldExtendedTimestamp, rawExtraFieldNTFS, rawExtraFieldAES } = headerInfo;
    const { dataDescriptorArray } = dataDescriptorInfo;
    const { rawFilename, lastAccessDate, creationDate, password, level, zip64, zipCrypto, dataDescriptor, directory, versionMadeBy, rawComment, rawExtraField, useWebWorkers, onstart, onprogress, onend, signal, encryptionStrength, extendedTimestamp, msDosCompatible, internalFileAttribute, externalFileAttribute, useCompressionStream } = options;
    const fileEntry = {
        lock,
        versionMadeBy,
        zip64,
        directory: Boolean(directory),
        filenameUTF8: true,
        rawFilename,
        commentUTF8: true,
        rawComment,
        rawExtraFieldExtendedTimestamp,
        rawExtraFieldNTFS,
        rawExtraFieldAES,
        rawExtraField,
        extendedTimestamp,
        msDosCompatible,
        internalFileAttribute,
        externalFileAttribute,
        diskNumberStart
    };
    let uncompressedSize = 0;
    let signature;
    let compressedSize = 0;
    const { writable } = writer;
    if (reader) {
        reader.chunkSize = (0, _configurationJs.getChunkSize)(config);
        await writeData(writable, localHeaderArray);
        const readable = reader.readable;
        const size = readable.size = reader.size;
        const workerOptions = {
            options: {
                codecType: (0, _codecPoolJs.CODEC_DEFLATE),
                level,
                password,
                encryptionStrength,
                zipCrypto: encrypted && zipCrypto,
                passwordVerification: encrypted && zipCrypto && rawLastModDate >> 8 & 0xFF,
                signed: true,
                compressed,
                encrypted,
                useWebWorkers,
                useCompressionStream,
                transferStreams: false
            },
            config,
            streamOptions: {
                signal,
                size,
                onstart,
                onprogress,
                onend
            }
        };
        const result = await (0, _codecPoolJs.runWorker)({
            readable,
            writable
        }, workerOptions);
        writable.size += result.size;
        signature = result.signature;
        uncompressedSize = reader.size = readable.size;
        compressedSize = result.size;
    } else await writeData(writable, localHeaderArray);
    const rawExtraFieldZip64 = zip64 ? new Uint8Array(EXTRAFIELD_LENGTH_ZIP64 + 4) : new Uint8Array();
    if (reader) setEntryInfo({
        signature,
        rawExtraFieldZip64,
        compressedSize,
        uncompressedSize,
        headerInfo,
        dataDescriptorInfo
    }, options);
    if (dataDescriptor) await writeData(writable, dataDescriptorArray);
    Object.assign(fileEntry, {
        compressedSize,
        lastModDate,
        rawLastModDate,
        creationDate,
        lastAccessDate,
        encrypted,
        length: getLength(localHeaderArray, dataDescriptorArray) + compressedSize,
        compressionMethod,
        version,
        headerArray,
        signature,
        rawExtraFieldZip64
    });
    return fileEntry;
}
function getHeaderInfo(options) {
    const { rawFilename, lastModDate, lastAccessDate, creationDate, password, level, zip64, zipCrypto, dataDescriptor, directory, rawExtraField, encryptionStrength, extendedTimestamp } = options;
    const compressed = level !== 0 && !directory;
    const encrypted = Boolean(password && getLength(password));
    let rawExtraFieldAES;
    if (encrypted && !zipCrypto) {
        rawExtraFieldAES = new Uint8Array(getLength(EXTRAFIELD_DATA_AES) + 2);
        const extraFieldAESView = getDataView(rawExtraFieldAES);
        setUint16(extraFieldAESView, 0, (0, _constantsJs.EXTRAFIELD_TYPE_AES));
        arraySet(rawExtraFieldAES, EXTRAFIELD_DATA_AES, 2);
        setUint8(extraFieldAESView, 8, encryptionStrength);
    } else rawExtraFieldAES = new Uint8Array();
    let rawExtraFieldNTFS;
    let rawExtraFieldExtendedTimestamp;
    if (extendedTimestamp) {
        rawExtraFieldExtendedTimestamp = new Uint8Array(9 + (lastAccessDate ? 4 : 0) + (creationDate ? 4 : 0));
        const extraFieldExtendedTimestampView = getDataView(rawExtraFieldExtendedTimestamp);
        setUint16(extraFieldExtendedTimestampView, 0, (0, _constantsJs.EXTRAFIELD_TYPE_EXTENDED_TIMESTAMP));
        setUint16(extraFieldExtendedTimestampView, 2, getLength(rawExtraFieldExtendedTimestamp) - 4);
        const extraFieldExtendedTimestampFlag = 0x1 + (lastAccessDate ? 0x2 : 0) + (creationDate ? 0x4 : 0);
        setUint8(extraFieldExtendedTimestampView, 4, extraFieldExtendedTimestampFlag);
        setUint32(extraFieldExtendedTimestampView, 5, Math.floor(lastModDate.getTime() / 1000));
        if (lastAccessDate) setUint32(extraFieldExtendedTimestampView, 9, Math.floor(lastAccessDate.getTime() / 1000));
        if (creationDate) setUint32(extraFieldExtendedTimestampView, 13, Math.floor(creationDate.getTime() / 1000));
        try {
            rawExtraFieldNTFS = new Uint8Array(36);
            const extraFieldNTFSView = getDataView(rawExtraFieldNTFS);
            const lastModTimeNTFS = getTimeNTFS(lastModDate);
            setUint16(extraFieldNTFSView, 0, (0, _constantsJs.EXTRAFIELD_TYPE_NTFS));
            setUint16(extraFieldNTFSView, 2, 32);
            setUint16(extraFieldNTFSView, 8, (0, _constantsJs.EXTRAFIELD_TYPE_NTFS_TAG1));
            setUint16(extraFieldNTFSView, 10, 24);
            setBigUint64(extraFieldNTFSView, 12, lastModTimeNTFS);
            setBigUint64(extraFieldNTFSView, 20, getTimeNTFS(lastAccessDate) || lastModTimeNTFS);
            setBigUint64(extraFieldNTFSView, 28, getTimeNTFS(creationDate) || lastModTimeNTFS);
        } catch (_error) {
            rawExtraFieldNTFS = new Uint8Array();
        }
    } else rawExtraFieldNTFS = rawExtraFieldExtendedTimestamp = new Uint8Array();
    let bitFlag = (0, _constantsJs.BITFLAG_LANG_ENCODING_FLAG);
    if (dataDescriptor) bitFlag = bitFlag | (0, _constantsJs.BITFLAG_DATA_DESCRIPTOR);
    let compressionMethod = (0, _constantsJs.COMPRESSION_METHOD_STORE);
    if (compressed) compressionMethod = (0, _constantsJs.COMPRESSION_METHOD_DEFLATE);
    let version = options.version || (0, _constantsJs.VERSION_DEFLATE);
    if (zip64) version = version > (0, _constantsJs.VERSION_ZIP64) ? version : (0, _constantsJs.VERSION_ZIP64);
    if (encrypted) {
        bitFlag = bitFlag | (0, _constantsJs.BITFLAG_ENCRYPTED);
        if (!zipCrypto) {
            version = version > (0, _constantsJs.VERSION_AES) ? version : (0, _constantsJs.VERSION_AES);
            compressionMethod = (0, _constantsJs.COMPRESSION_METHOD_AES);
            if (compressed) rawExtraFieldAES[9] = (0, _constantsJs.COMPRESSION_METHOD_DEFLATE);
        }
    }
    const headerArray = new Uint8Array(26);
    const headerView = getDataView(headerArray);
    setUint16(headerView, 0, version);
    setUint16(headerView, 2, bitFlag);
    setUint16(headerView, 4, compressionMethod);
    const dateArray = new Uint32Array(1);
    const dateView = getDataView(dateArray);
    let lastModDateMsDos;
    if (lastModDate < (0, _constantsJs.MIN_DATE)) lastModDateMsDos = (0, _constantsJs.MIN_DATE);
    else if (lastModDate > (0, _constantsJs.MAX_DATE)) lastModDateMsDos = (0, _constantsJs.MAX_DATE);
    else lastModDateMsDos = lastModDate;
    setUint16(dateView, 0, (lastModDateMsDos.getHours() << 6 | lastModDateMsDos.getMinutes()) << 5 | lastModDateMsDos.getSeconds() / 2);
    setUint16(dateView, 2, (lastModDateMsDos.getFullYear() - 1980 << 4 | lastModDateMsDos.getMonth() + 1) << 5 | lastModDateMsDos.getDate());
    const rawLastModDate = dateArray[0];
    setUint32(headerView, 6, rawLastModDate);
    setUint16(headerView, 22, getLength(rawFilename));
    const extraFieldLength = getLength(rawExtraFieldAES, rawExtraFieldExtendedTimestamp, rawExtraFieldNTFS, rawExtraField);
    setUint16(headerView, 24, extraFieldLength);
    const localHeaderArray = new Uint8Array(30 + getLength(rawFilename) + extraFieldLength);
    const localHeaderView = getDataView(localHeaderArray);
    setUint32(localHeaderView, 0, (0, _constantsJs.LOCAL_FILE_HEADER_SIGNATURE));
    arraySet(localHeaderArray, headerArray, 4);
    arraySet(localHeaderArray, rawFilename, 30);
    arraySet(localHeaderArray, rawExtraFieldAES, 30 + getLength(rawFilename));
    arraySet(localHeaderArray, rawExtraFieldExtendedTimestamp, 30 + getLength(rawFilename, rawExtraFieldAES));
    arraySet(localHeaderArray, rawExtraFieldNTFS, 30 + getLength(rawFilename, rawExtraFieldAES, rawExtraFieldExtendedTimestamp));
    arraySet(localHeaderArray, rawExtraField, 30 + getLength(rawFilename, rawExtraFieldAES, rawExtraFieldExtendedTimestamp, rawExtraFieldNTFS));
    return {
        localHeaderArray,
        headerArray,
        headerView,
        lastModDate,
        rawLastModDate,
        encrypted,
        compressed,
        version,
        compressionMethod,
        rawExtraFieldExtendedTimestamp,
        rawExtraFieldNTFS,
        rawExtraFieldAES
    };
}
function getDataDescriptorInfo(options) {
    const { zip64, dataDescriptor, dataDescriptorSignature } = options;
    let dataDescriptorArray = new Uint8Array();
    let dataDescriptorView, dataDescriptorOffset = 0;
    if (dataDescriptor) {
        dataDescriptorArray = new Uint8Array(zip64 ? dataDescriptorSignature ? 24 : 20 : dataDescriptorSignature ? 16 : 12);
        dataDescriptorView = getDataView(dataDescriptorArray);
        if (dataDescriptorSignature) {
            dataDescriptorOffset = 4;
            setUint32(dataDescriptorView, 0, (0, _constantsJs.DATA_DESCRIPTOR_RECORD_SIGNATURE));
        }
    }
    return {
        dataDescriptorArray,
        dataDescriptorView,
        dataDescriptorOffset
    };
}
function setEntryInfo(entryInfo, options) {
    const { signature, rawExtraFieldZip64, compressedSize, uncompressedSize, headerInfo, dataDescriptorInfo } = entryInfo;
    const { headerView, encrypted } = headerInfo;
    const { dataDescriptorView, dataDescriptorOffset } = dataDescriptorInfo;
    const { zip64, zipCrypto, dataDescriptor } = options;
    if ((!encrypted || zipCrypto) && signature !== (0, _constantsJs.UNDEFINED_VALUE)) {
        setUint32(headerView, 10, signature);
        if (dataDescriptor) setUint32(dataDescriptorView, dataDescriptorOffset, signature);
    }
    if (zip64) {
        const rawExtraFieldZip64View = getDataView(rawExtraFieldZip64);
        setUint16(rawExtraFieldZip64View, 0, (0, _constantsJs.EXTRAFIELD_TYPE_ZIP64));
        setUint16(rawExtraFieldZip64View, 2, EXTRAFIELD_LENGTH_ZIP64);
        setUint32(headerView, 14, (0, _constantsJs.MAX_32_BITS));
        setBigUint64(rawExtraFieldZip64View, 12, BigInt(compressedSize));
        setUint32(headerView, 18, (0, _constantsJs.MAX_32_BITS));
        setBigUint64(rawExtraFieldZip64View, 4, BigInt(uncompressedSize));
        if (dataDescriptor) {
            setBigUint64(dataDescriptorView, dataDescriptorOffset + 4, BigInt(compressedSize));
            setBigUint64(dataDescriptorView, dataDescriptorOffset + 12, BigInt(uncompressedSize));
        }
    } else {
        setUint32(headerView, 14, compressedSize);
        setUint32(headerView, 18, uncompressedSize);
        if (dataDescriptor) {
            setUint32(dataDescriptorView, dataDescriptorOffset + 4, compressedSize);
            setUint32(dataDescriptorView, dataDescriptorOffset + 8, uncompressedSize);
        }
    }
}
async function setMissingInfo(fileEntry, entryData, writable, { zipCrypto }) {
    const arrayBuffer = await sliceAsArrayBuffer(entryData, 0, 26);
    const arrayBufferView = new DataView(arrayBuffer);
    if (!fileEntry.encrypted || zipCrypto) setUint32(arrayBufferView, 14, fileEntry.signature);
    if (fileEntry.zip64) {
        setUint32(arrayBufferView, 18, (0, _constantsJs.MAX_32_BITS));
        setUint32(arrayBufferView, 22, (0, _constantsJs.MAX_32_BITS));
    } else {
        setUint32(arrayBufferView, 18, fileEntry.compressedSize);
        setUint32(arrayBufferView, 22, fileEntry.uncompressedSize);
    }
    await writeData(writable, new Uint8Array(arrayBuffer));
    return entryData.slice(arrayBuffer.byteLength);
}
function setZip64Info(fileEntry) {
    const { rawExtraFieldZip64, offset, diskNumberStart } = fileEntry;
    const rawExtraFieldZip64View = getDataView(rawExtraFieldZip64);
    setBigUint64(rawExtraFieldZip64View, 20, BigInt(offset));
    setUint32(rawExtraFieldZip64View, 28, diskNumberStart);
}
async function closeFile(zipWriter, comment, options) {
    const { files, writer } = zipWriter;
    let offset = 0;
    let directoryDataLength = 0;
    const { diskOffset, writable } = writer;
    let { diskNumber } = writer;
    let directoryOffset = zipWriter.offset - diskOffset;
    let filesLength = files.size;
    for (const [, { rawFilename, rawExtraFieldZip64, rawExtraFieldAES, rawExtraField, rawComment, rawExtraFieldExtendedTimestamp, rawExtraFieldNTFS }] of files)directoryDataLength += 46 + getLength(rawFilename, rawComment, rawExtraFieldZip64, rawExtraFieldAES, rawExtraFieldExtendedTimestamp, rawExtraFieldNTFS, rawExtraField);
    let zip64 = options.zip64 || zipWriter.options.zip64 || false;
    if (directoryOffset >= (0, _constantsJs.MAX_32_BITS) || directoryDataLength >= (0, _constantsJs.MAX_32_BITS) || filesLength >= (0, _constantsJs.MAX_16_BITS)) {
        if (options.zip64 === false || zipWriter.options.zip64 === false) throw new Error(ERR_UNSUPPORTED_FORMAT);
        else zip64 = true;
    }
    const directoryArray = new Uint8Array(directoryDataLength);
    const directoryView = getDataView(directoryArray);
    for (const [indexFileEntry, fileEntry] of Array.from(files.values()).entries()){
        const { offset: fileEntryOffset, rawFilename, rawExtraFieldZip64, rawExtraFieldAES, rawExtraFieldNTFS, rawExtraField, rawComment, versionMadeBy, headerArray, directory, zip64, msDosCompatible, internalFileAttribute, externalFileAttribute, extendedTimestamp, lastModDate, diskNumberStart } = fileEntry;
        let rawExtraFieldExtendedTimestamp;
        if (extendedTimestamp) {
            rawExtraFieldExtendedTimestamp = new Uint8Array(9);
            const extraFieldExtendedTimestampView = getDataView(rawExtraFieldExtendedTimestamp);
            setUint16(extraFieldExtendedTimestampView, 0, (0, _constantsJs.EXTRAFIELD_TYPE_EXTENDED_TIMESTAMP));
            setUint16(extraFieldExtendedTimestampView, 2, getLength(rawExtraFieldExtendedTimestamp) - 4);
            setUint8(extraFieldExtendedTimestampView, 4, 0x1);
            setUint32(extraFieldExtendedTimestampView, 5, Math.floor(lastModDate.getTime() / 1000));
        } else rawExtraFieldExtendedTimestamp = new Uint8Array();
        const extraFieldLength = getLength(rawExtraFieldZip64, rawExtraFieldAES, rawExtraFieldExtendedTimestamp, rawExtraFieldNTFS, rawExtraField);
        setUint32(directoryView, offset, (0, _constantsJs.CENTRAL_FILE_HEADER_SIGNATURE));
        setUint16(directoryView, offset + 4, versionMadeBy);
        arraySet(directoryArray, headerArray, offset + 6);
        setUint16(directoryView, offset + 30, extraFieldLength);
        setUint16(directoryView, offset + 32, getLength(rawComment));
        setUint16(directoryView, offset + 34, zip64 ? (0, _constantsJs.MAX_16_BITS) : diskNumberStart);
        setUint16(directoryView, offset + 36, internalFileAttribute);
        if (externalFileAttribute) setUint32(directoryView, offset + 38, externalFileAttribute);
        else if (directory && msDosCompatible) setUint8(directoryView, offset + 38, (0, _constantsJs.FILE_ATTR_MSDOS_DIR_MASK));
        setUint32(directoryView, offset + 42, zip64 ? (0, _constantsJs.MAX_32_BITS) : fileEntryOffset);
        arraySet(directoryArray, rawFilename, offset + 46);
        arraySet(directoryArray, rawExtraFieldZip64, offset + 46 + getLength(rawFilename));
        arraySet(directoryArray, rawExtraFieldAES, offset + 46 + getLength(rawFilename, rawExtraFieldZip64));
        arraySet(directoryArray, rawExtraFieldExtendedTimestamp, offset + 46 + getLength(rawFilename, rawExtraFieldZip64, rawExtraFieldAES));
        arraySet(directoryArray, rawExtraFieldNTFS, offset + 46 + getLength(rawFilename, rawExtraFieldZip64, rawExtraFieldAES, rawExtraFieldExtendedTimestamp));
        arraySet(directoryArray, rawExtraField, offset + 46 + getLength(rawFilename, rawExtraFieldZip64, rawExtraFieldAES, rawExtraFieldExtendedTimestamp, rawExtraFieldNTFS));
        arraySet(directoryArray, rawComment, offset + 46 + getLength(rawFilename) + extraFieldLength);
        offset += 46 + getLength(rawFilename, rawComment) + extraFieldLength;
        if (options.onprogress) try {
            await options.onprogress(indexFileEntry + 1, files.size, new (0, _zipEntryJs.Entry)(fileEntry));
        } catch (_error) {
        // ignored
        }
    }
    await (0, _ioJs.initStream)(writer);
    await writeData(writable, directoryArray);
    const endOfdirectoryArray = new Uint8Array(zip64 ? (0, _constantsJs.ZIP64_END_OF_CENTRAL_DIR_TOTAL_LENGTH) : (0, _constantsJs.END_OF_CENTRAL_DIR_LENGTH));
    const endOfdirectoryView = getDataView(endOfdirectoryArray);
    let lastDiskNumber = writer.diskNumber;
    const { availableSize } = writer;
    if (availableSize < endOfdirectoryArray.length) lastDiskNumber++;
    offset = 0;
    if (zip64) {
        setUint32(endOfdirectoryView, 0, (0, _constantsJs.ZIP64_END_OF_CENTRAL_DIR_SIGNATURE));
        setBigUint64(endOfdirectoryView, 4, BigInt(44));
        setUint16(endOfdirectoryView, 12, 45);
        setUint16(endOfdirectoryView, 14, 45);
        setUint32(endOfdirectoryView, 16, lastDiskNumber);
        setUint32(endOfdirectoryView, 20, diskNumber);
        setBigUint64(endOfdirectoryView, 24, BigInt(filesLength));
        setBigUint64(endOfdirectoryView, 32, BigInt(filesLength));
        setBigUint64(endOfdirectoryView, 40, BigInt(directoryDataLength));
        setBigUint64(endOfdirectoryView, 48, BigInt(directoryOffset));
        setUint32(endOfdirectoryView, 56, (0, _constantsJs.ZIP64_END_OF_CENTRAL_DIR_LOCATOR_SIGNATURE));
        setBigUint64(endOfdirectoryView, 64, BigInt(directoryOffset) + BigInt(directoryDataLength));
        setUint32(endOfdirectoryView, 72, lastDiskNumber + 1);
        diskNumber = (0, _constantsJs.MAX_16_BITS);
        filesLength = (0, _constantsJs.MAX_16_BITS);
        directoryOffset = (0, _constantsJs.MAX_32_BITS);
        directoryDataLength = (0, _constantsJs.MAX_32_BITS);
        offset += (0, _constantsJs.ZIP64_END_OF_CENTRAL_DIR_LENGTH) + (0, _constantsJs.ZIP64_END_OF_CENTRAL_DIR_LOCATOR_LENGTH);
    }
    setUint32(endOfdirectoryView, offset, (0, _constantsJs.END_OF_CENTRAL_DIR_SIGNATURE));
    setUint16(endOfdirectoryView, offset + 4, lastDiskNumber);
    setUint16(endOfdirectoryView, offset + 6, diskNumber);
    setUint16(endOfdirectoryView, offset + 8, filesLength);
    setUint16(endOfdirectoryView, offset + 10, filesLength);
    setUint32(endOfdirectoryView, offset + 12, directoryDataLength);
    setUint32(endOfdirectoryView, offset + 16, directoryOffset);
    const commentLength = getLength(comment);
    if (commentLength) {
        if (commentLength <= (0, _constantsJs.MAX_16_BITS)) setUint16(endOfdirectoryView, offset + 20, commentLength);
        else throw new Error(ERR_INVALID_COMMENT);
    }
    await writeData(writable, endOfdirectoryArray);
    if (commentLength) await writeData(writable, comment);
}
function sliceAsArrayBuffer(blob, start, end) {
    if (start || end) return blob.slice(start, end).arrayBuffer();
    else return blob.arrayBuffer();
}
async function writeData(writable, array) {
    const streamWriter = writable.getWriter();
    await streamWriter.ready;
    writable.size += getLength(array);
    await streamWriter.write(array);
    streamWriter.releaseLock();
}
function getTimeNTFS(date) {
    if (date) return (BigInt(date.getTime()) + BigInt(11644473600000)) * BigInt(10000);
}
function getOptionValue(zipWriter, options, name) {
    return options[name] === (0, _constantsJs.UNDEFINED_VALUE) ? zipWriter.options[name] : options[name];
}
function getMaximumCompressedSize(uncompressedSize) {
    return uncompressedSize + 5 * (Math.floor(uncompressedSize / 16383) + 1);
}
function setUint8(view, offset, value) {
    view.setUint8(offset, value);
}
function setUint16(view, offset, value) {
    view.setUint16(offset, value, true);
}
function setUint32(view, offset, value) {
    view.setUint32(offset, value, true);
}
function setBigUint64(view, offset, value) {
    view.setBigUint64(offset, value, true);
}
function arraySet(array, typedArray, offset) {
    array.set(typedArray, offset);
}
function getDataView(array) {
    return new DataView(array.buffer);
}
function getLength(...arrayLikes) {
    let result = 0;
    arrayLikes.forEach((arrayLike)=>arrayLike && (result += arrayLike.length));
    return result;
}

},{"./constants.js":"4V9hL","./configuration.js":"5UMrn","./codec-pool.js":"36tHD","./io.js":"8tQJ7","./util/encode-text.js":"d2QnN","./zip-entry.js":"hUC9W","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jzqAd":[function(require,module,exports) {
/*
 Copyright (c) 2022 Gildas Lormeau. All rights reserved.

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions are met:

 1. Redistributions of source code must retain the above copyright notice,
 this list of conditions and the following disclaimer.

 2. Redistributions in binary form must reproduce the above copyright 
 notice, this list of conditions and the following disclaimer in 
 the documentation and/or other materials provided with the distribution.

 3. The names of the authors may not be used to endorse or promote products
 derived from this software without specific prior written permission.

 THIS SOFTWARE IS PROVIDED ''AS IS'' AND ANY EXPRESSED OR IMPLIED WARRANTIES,
 INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
 FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL JCRAFT,
 INC. OR ANY CONTRIBUTORS TO THIS SOFTWARE BE LIABLE FOR ANY DIRECT, INDIRECT,
 INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA,
 OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
 LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
 EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */ /* global WritableStream */ // deno-lint-ignore-file no-this-alias
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "fs", ()=>fs);
var _ioJs = require("./io.js");
var _zipReaderJs = require("./zip-reader.js");
var _zipWriterJs = require("./zip-writer.js");
class ZipEntry {
    constructor(fs, name, params, parent){
        const zipEntry = this;
        if (fs.root && parent && parent.getChildByName(name)) throw new Error("Entry filename already exists");
        if (!params) params = {};
        Object.assign(zipEntry, {
            fs,
            name,
            data: params.data,
            id: fs.entries.length,
            parent,
            children: [],
            uncompressedSize: 0
        });
        fs.entries.push(zipEntry);
        if (parent) zipEntry.parent.children.push(zipEntry);
    }
    moveTo(target) {
        // deprecated
        const zipEntry = this;
        zipEntry.fs.move(zipEntry, target);
    }
    getFullname() {
        return this.getRelativeName();
    }
    getRelativeName(ancestor = this.fs.root) {
        const zipEntry = this;
        let relativeName = zipEntry.name;
        let entry = zipEntry.parent;
        while(entry && entry != ancestor){
            relativeName = (entry.name ? entry.name + "/" : "") + relativeName;
            entry = entry.parent;
        }
        return relativeName;
    }
    isDescendantOf(ancestor) {
        let entry = this.parent;
        while(entry && entry.id != ancestor.id)entry = entry.parent;
        return Boolean(entry);
    }
}
class ZipFileEntry extends ZipEntry {
    constructor(fs, name, params, parent){
        super(fs, name, params, parent);
        const zipEntry = this;
        zipEntry.Reader = params.Reader;
        zipEntry.Writer = params.Writer;
        if (params.getData) zipEntry.getData = params.getData;
    }
    async getData(writer, options = {}) {
        const zipEntry = this;
        if (!writer || writer.constructor == zipEntry.Writer && zipEntry.data) return zipEntry.data;
        else {
            const reader = zipEntry.reader = new zipEntry.Reader(zipEntry.data, options);
            await Promise.all([
                (0, _ioJs.initStream)(reader),
                (0, _ioJs.initStream)(writer, zipEntry.data.uncompressedSize)
            ]);
            const readable = reader.readable;
            readable.size = zipEntry.uncompressedSize = reader.size;
            await readable.pipeTo(writer.writable);
            return writer.getData ? writer.getData() : writer.writable;
        }
    }
    getText(encoding, options) {
        return this.getData(new (0, _ioJs.TextWriter)(encoding), options);
    }
    getBlob(mimeType, options) {
        return this.getData(new (0, _ioJs.BlobWriter)(mimeType), options);
    }
    getData64URI(mimeType, options) {
        return this.getData(new (0, _ioJs.Data64URIWriter)(mimeType), options);
    }
    getUint8Array(options) {
        return this.getData(new (0, _ioJs.Uint8ArrayWriter)(), options);
    }
    getWritable(writable = new WritableStream(), options) {
        return this.getData({
            writable
        }, options);
    }
    replaceBlob(blob) {
        Object.assign(this, {
            data: blob,
            Reader: (0, _ioJs.BlobReader),
            Writer: (0, _ioJs.BlobWriter),
            reader: null
        });
    }
    replaceText(text) {
        Object.assign(this, {
            data: text,
            Reader: (0, _ioJs.TextReader),
            Writer: (0, _ioJs.TextWriter),
            reader: null
        });
    }
    replaceData64URI(dataURI) {
        Object.assign(this, {
            data: dataURI,
            Reader: (0, _ioJs.Data64URIReader),
            Writer: (0, _ioJs.Data64URIWriter),
            reader: null
        });
    }
    replaceUint8Array(array) {
        Object.assign(this, {
            data: array,
            Reader: (0, _ioJs.Uint8ArrayReader),
            Writer: (0, _ioJs.Uint8ArrayWriter),
            reader: null
        });
    }
    replaceReadable(readable) {
        Object.assign(this, {
            data: null,
            Reader: function() {
                return {
                    readable
                };
            },
            Writer: null,
            reader: null
        });
    }
}
class ZipDirectoryEntry extends ZipEntry {
    constructor(fs, name, params, parent){
        super(fs, name, params, parent);
        this.directory = true;
    }
    addDirectory(name) {
        return addChild(this, name, null, true);
    }
    addText(name, text) {
        return addChild(this, name, {
            data: text,
            Reader: (0, _ioJs.TextReader),
            Writer: (0, _ioJs.TextWriter)
        });
    }
    addBlob(name, blob) {
        return addChild(this, name, {
            data: blob,
            Reader: (0, _ioJs.BlobReader),
            Writer: (0, _ioJs.BlobWriter)
        });
    }
    addData64URI(name, dataURI) {
        return addChild(this, name, {
            data: dataURI,
            Reader: (0, _ioJs.Data64URIReader),
            Writer: (0, _ioJs.Data64URIWriter)
        });
    }
    addUint8Array(name, array) {
        return addChild(this, name, {
            data: array,
            Reader: (0, _ioJs.Uint8ArrayReader),
            Writer: (0, _ioJs.Uint8ArrayWriter)
        });
    }
    addHttpContent(name, url, options = {}) {
        return addChild(this, name, {
            data: url,
            Reader: class extends (0, _ioJs.HttpReader) {
                constructor(url){
                    super(url, options);
                }
            }
        });
    }
    addReadable(name, readable) {
        return addChild(this, name, {
            Reader: function() {
                return {
                    readable
                };
            }
        });
    }
    addFileSystemEntry(fileSystemEntry) {
        return addFileSystemEntry(this, fileSystemEntry);
    }
    addData(name, params) {
        return addChild(this, name, params);
    }
    async importBlob(blob, options = {}) {
        await this.importZip(new (0, _ioJs.BlobReader)(blob), options);
    }
    async importData64URI(dataURI, options = {}) {
        await this.importZip(new (0, _ioJs.Data64URIReader)(dataURI), options);
    }
    async importUint8Array(array, options = {}) {
        await this.importZip(new (0, _ioJs.Uint8ArrayReader)(array), options);
    }
    async importHttpContent(url, options = {}) {
        await this.importZip(new (0, _ioJs.HttpReader)(url, options), options);
    }
    async importReadable(readable, options = {}) {
        await this.importZip({
            readable
        }, options);
    }
    exportBlob(options = {}) {
        return this.exportZip(new (0, _ioJs.BlobWriter)("application/zip"), options);
    }
    exportData64URI(options = {}) {
        return this.exportZip(new (0, _ioJs.Data64URIWriter)("application/zip"), options);
    }
    exportUint8Array(options = {}) {
        return this.exportZip(new (0, _ioJs.Uint8ArrayWriter)(), options);
    }
    async exportWritable(writable = new WritableStream(), options = {}) {
        await this.exportZip({
            writable
        }, options);
        return writable;
    }
    async importZip(reader, options) {
        await (0, _ioJs.initStream)(reader);
        const zipReader = new (0, _zipReaderJs.ZipReader)(reader, options);
        const entries = await zipReader.getEntries();
        entries.forEach((entry)=>{
            let parent = this;
            const path = entry.filename.split("/");
            const name = path.pop();
            path.forEach((pathPart)=>parent = parent.getChildByName(pathPart) || new ZipDirectoryEntry(this.fs, pathPart, null, parent));
            if (!entry.directory) addChild(parent, name, {
                data: entry,
                Reader: getZipBlobReader(Object.assign({}, options))
            });
        });
    }
    async exportZip(writer, options) {
        const zipEntry = this;
        await Promise.all([
            initReaders(zipEntry),
            (0, _ioJs.initStream)(writer)
        ]);
        const zipWriter = new (0, _zipWriterJs.ZipWriter)(writer, options);
        await exportZip(zipWriter, zipEntry, getTotalSize([
            zipEntry
        ], "uncompressedSize"), options);
        await zipWriter.close();
        return writer.getData ? writer.getData() : writer.writable;
    }
    getChildByName(name) {
        const children = this.children;
        for(let childIndex = 0; childIndex < children.length; childIndex++){
            const child = children[childIndex];
            if (child.name == name) return child;
        }
    }
}
class FS {
    constructor(){
        resetFS(this);
    }
    get children() {
        return this.root.children;
    }
    remove(entry) {
        detach(entry);
        this.entries[entry.id] = null;
    }
    move(entry, destination) {
        if (entry == this.root) throw new Error("Root directory cannot be moved");
        else {
            if (destination.directory) {
                if (!destination.isDescendantOf(entry)) {
                    if (entry != destination) {
                        if (destination.getChildByName(entry.name)) throw new Error("Entry filename already exists");
                        detach(entry);
                        entry.parent = destination;
                        destination.children.push(entry);
                    }
                } else throw new Error("Entry is a ancestor of target entry");
            } else throw new Error("Target entry is not a directory");
        }
    }
    find(fullname) {
        const path = fullname.split("/");
        let node = this.root;
        for(let index = 0; node && index < path.length; index++)node = node.getChildByName(path[index]);
        return node;
    }
    getById(id) {
        return this.entries[id];
    }
    getChildByName(name) {
        return this.root.getChildByName(name);
    }
    addDirectory(name) {
        return this.root.addDirectory(name);
    }
    addText(name, text) {
        return this.root.addText(name, text);
    }
    addBlob(name, blob) {
        return this.root.addBlob(name, blob);
    }
    addData64URI(name, dataURI) {
        return this.root.addData64URI(name, dataURI);
    }
    addHttpContent(name, url, options) {
        return this.root.addHttpContent(name, url, options);
    }
    addReadable(name, readable) {
        return this.root.addReadable(name, readable);
    }
    addFileSystemEntry(fileSystemEntry) {
        return this.root.addFileSystemEntry(fileSystemEntry);
    }
    addData(name, params) {
        return this.root.addData(name, params);
    }
    async importBlob(blob, options) {
        resetFS(this);
        await this.root.importBlob(blob, options);
    }
    async importData64URI(dataURI, options) {
        resetFS(this);
        await this.root.importData64URI(dataURI, options);
    }
    async importUint8Array(array, options) {
        resetFS(this);
        await this.root.importUint8Array(array, options);
    }
    async importHttpContent(url, options) {
        resetFS(this);
        await this.root.importHttpContent(url, options);
    }
    async importReadable(readable, options) {
        resetFS(this);
        await this.root.importReadable(readable, options);
    }
    exportBlob(options) {
        return this.root.exportBlob(options);
    }
    exportData64URI(options) {
        return this.root.exportData64URI(options);
    }
    exportUint8Array(options) {
        return this.root.exportUint8Array(options);
    }
    exportWritable(writable, options) {
        return this.root.exportWritable(writable, options);
    }
}
const fs = {
    FS,
    ZipDirectoryEntry,
    ZipFileEntry
};
function getTotalSize(entries, propertyName) {
    let size = 0;
    entries.forEach(process);
    return size;
    function process(entry) {
        size += entry[propertyName];
        if (entry.children) entry.children.forEach(process);
    }
}
function getZipBlobReader(options) {
    return class extends (0, _ioJs.Reader) {
        constructor(entry, options = {}){
            super();
            this.entry = entry;
            this.options = options;
        }
        async init() {
            super.init();
            const zipBlobReader = this;
            zipBlobReader.size = zipBlobReader.entry.uncompressedSize;
            const data = await zipBlobReader.entry.getData(new (0, _ioJs.BlobWriter)(), Object.assign({}, zipBlobReader.options, options));
            zipBlobReader.data = data;
            zipBlobReader.blobReader = new (0, _ioJs.BlobReader)(data);
        }
        readUint8Array(index, length) {
            return this.blobReader.readUint8Array(index, length);
        }
    };
}
async function initReaders(entry) {
    if (entry.children.length) {
        for (const child of entry.children)if (child.directory) await initReaders(child);
        else {
            const reader = child.reader = new child.Reader(child.data);
            await (0, _ioJs.initStream)(reader);
            child.uncompressedSize = reader.size;
        }
    }
}
function detach(entry) {
    const children = entry.parent.children;
    children.forEach((child, index)=>{
        if (child.id == entry.id) children.splice(index, 1);
    });
}
async function exportZip(zipWriter, entry, totalSize, options) {
    const selectedEntry = entry;
    const entryOffsets = new Map();
    await process(zipWriter, entry);
    async function process(zipWriter, entry) {
        await exportChild();
        async function exportChild() {
            if (options.bufferedWrite) await Promise.all(entry.children.map(processChild));
            else for (const child of entry.children)await processChild(child);
        }
        async function processChild(child) {
            const name = options.relativePath ? child.getRelativeName(selectedEntry) : child.getFullname();
            await zipWriter.add(name, child.reader, Object.assign({
                directory: child.directory
            }, Object.assign({}, options, {
                onprogress: async (indexProgress)=>{
                    if (options.onprogress) {
                        entryOffsets.set(name, indexProgress);
                        try {
                            await options.onprogress(Array.from(entryOffsets.values()).reduce((previousValue, currentValue)=>previousValue + currentValue), totalSize);
                        } catch (_error) {
                        // ignored
                        }
                    }
                }
            })));
            await process(zipWriter, child);
        }
    }
}
async function addFileSystemEntry(zipEntry, fileSystemEntry) {
    if (fileSystemEntry.isDirectory) {
        const entry = zipEntry.addDirectory(fileSystemEntry.name);
        await addDirectory(entry, fileSystemEntry);
        return entry;
    } else return new Promise((resolve, reject)=>fileSystemEntry.file((file)=>resolve(zipEntry.addBlob(fileSystemEntry.name, file)), reject));
    async function addDirectory(zipEntry, fileEntry) {
        const children = await getChildren(fileEntry);
        for (const child of children)if (child.isDirectory) await addDirectory(zipEntry.addDirectory(child.name), child);
        else await new Promise((resolve, reject)=>{
            child.file((file)=>{
                const childZipEntry = zipEntry.addBlob(child.name, file);
                childZipEntry.uncompressedSize = file.size;
                resolve(childZipEntry);
            }, reject);
        });
    }
    function getChildren(fileEntry) {
        return new Promise((resolve, reject)=>{
            let entries = [];
            if (fileEntry.isDirectory) readEntries(fileEntry.createReader());
            if (fileEntry.isFile) resolve(entries);
            function readEntries(directoryReader) {
                directoryReader.readEntries((temporaryEntries)=>{
                    if (!temporaryEntries.length) resolve(entries);
                    else {
                        entries = entries.concat(temporaryEntries);
                        readEntries(directoryReader);
                    }
                }, reject);
            }
        });
    }
}
function resetFS(fs) {
    fs.entries = [];
    fs.root = new ZipDirectoryEntry(fs);
}
function addChild(parent, name, params, directory) {
    if (parent.directory) return directory ? new ZipDirectoryEntry(parent.fs, name, params, parent) : new ZipFileEntry(parent.fs, name, params, parent);
    else throw new Error("Parent entry is not a directory");
}

},{"./io.js":"8tQJ7","./zip-reader.js":"7x52C","./zip-writer.js":"3jPJZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cvybH":[function(require,module,exports) {
/*! Tweakpane 4.0.3 (c) 2016 cocopon, licensed under the MIT license. */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BladeApi", ()=>BladeApi);
parcelHelpers.export(exports, "ButtonApi", ()=>ButtonApi);
parcelHelpers.export(exports, "FolderApi", ()=>FolderApi);
parcelHelpers.export(exports, "ListBladeApi", ()=>ListBladeApi);
parcelHelpers.export(exports, "ListInputBindingApi", ()=>ListInputBindingApi);
parcelHelpers.export(exports, "Pane", ()=>Pane);
parcelHelpers.export(exports, "Semver", ()=>Semver);
parcelHelpers.export(exports, "SeparatorBladeApi", ()=>SeparatorBladeApi);
parcelHelpers.export(exports, "SliderBladeApi", ()=>SliderBladeApi);
parcelHelpers.export(exports, "SliderInputBindingApi", ()=>SliderInputBindingApi);
parcelHelpers.export(exports, "TabApi", ()=>TabApi);
parcelHelpers.export(exports, "TabPageApi", ()=>TabPageApi);
parcelHelpers.export(exports, "TextBladeApi", ()=>TextBladeApi);
parcelHelpers.export(exports, "TpChangeEvent", ()=>TpChangeEvent);
parcelHelpers.export(exports, "VERSION", ()=>VERSION);
function forceCast(v) {
    return v;
}
function isEmpty(value) {
    return value === null || value === undefined;
}
function isObject$1(value) {
    return value !== null && typeof value === "object";
}
function isRecord(value) {
    return value !== null && typeof value === "object";
}
function deepEqualsArray(a1, a2) {
    if (a1.length !== a2.length) return false;
    for(let i = 0; i < a1.length; i++){
        if (a1[i] !== a2[i]) return false;
    }
    return true;
}
function deepMerge(r1, r2) {
    const keys = Array.from(new Set([
        ...Object.keys(r1),
        ...Object.keys(r2)
    ]));
    return keys.reduce((result, key)=>{
        const v1 = r1[key];
        const v2 = r2[key];
        return isRecord(v1) && isRecord(v2) ? Object.assign(Object.assign({}, result), {
            [key]: deepMerge(v1, v2)
        }) : Object.assign(Object.assign({}, result), {
            [key]: key in r2 ? v2 : v1
        });
    }, {});
}
function isBinding(value) {
    if (!isObject$1(value)) return false;
    return "target" in value;
}
const CREATE_MESSAGE_MAP = {
    alreadydisposed: ()=>"View has been already disposed",
    invalidparams: (context)=>`Invalid parameters for '${context.name}'`,
    nomatchingcontroller: (context)=>`No matching controller for '${context.key}'`,
    nomatchingview: (context)=>`No matching view for '${JSON.stringify(context.params)}'`,
    notbindable: ()=>`Value is not bindable`,
    notcompatible: (context)=>`Not compatible with  plugin '${context.id}'`,
    propertynotfound: (context)=>`Property '${context.name}' not found`,
    shouldneverhappen: ()=>"This error should never happen"
};
class TpError {
    static alreadyDisposed() {
        return new TpError({
            type: "alreadydisposed"
        });
    }
    static notBindable() {
        return new TpError({
            type: "notbindable"
        });
    }
    static notCompatible(bundleId, id) {
        return new TpError({
            type: "notcompatible",
            context: {
                id: `${bundleId}.${id}`
            }
        });
    }
    static propertyNotFound(name) {
        return new TpError({
            type: "propertynotfound",
            context: {
                name: name
            }
        });
    }
    static shouldNeverHappen() {
        return new TpError({
            type: "shouldneverhappen"
        });
    }
    constructor(config){
        var _a;
        this.message = (_a = CREATE_MESSAGE_MAP[config.type](forceCast(config.context))) !== null && _a !== void 0 ? _a : "Unexpected error";
        this.name = this.constructor.name;
        this.stack = new Error(this.message).stack;
        this.type = config.type;
    }
    toString() {
        return this.message;
    }
}
class BindingTarget {
    constructor(obj, key){
        this.obj_ = obj;
        this.key = key;
    }
    static isBindable(obj) {
        if (obj === null) return false;
        if (typeof obj !== "object" && typeof obj !== "function") return false;
        return true;
    }
    read() {
        return this.obj_[this.key];
    }
    write(value) {
        this.obj_[this.key] = value;
    }
    writeProperty(name, value) {
        const valueObj = this.read();
        if (!BindingTarget.isBindable(valueObj)) throw TpError.notBindable();
        if (!(name in valueObj)) throw TpError.propertyNotFound(name);
        valueObj[name] = value;
    }
}
class Emitter {
    constructor(){
        this.observers_ = {};
    }
    on(eventName, handler, opt_options) {
        var _a;
        let observers = this.observers_[eventName];
        if (!observers) observers = this.observers_[eventName] = [];
        observers.push({
            handler: handler,
            key: (_a = opt_options === null || opt_options === void 0 ? void 0 : opt_options.key) !== null && _a !== void 0 ? _a : handler
        });
        return this;
    }
    off(eventName, key) {
        const observers = this.observers_[eventName];
        if (observers) this.observers_[eventName] = observers.filter((observer)=>{
            return observer.key !== key;
        });
        return this;
    }
    emit(eventName, event) {
        const observers = this.observers_[eventName];
        if (!observers) return;
        observers.forEach((observer)=>{
            observer.handler(event);
        });
    }
}
class ComplexValue {
    constructor(initialValue, config){
        var _a;
        this.constraint_ = config === null || config === void 0 ? void 0 : config.constraint;
        this.equals_ = (_a = config === null || config === void 0 ? void 0 : config.equals) !== null && _a !== void 0 ? _a : (v1, v2)=>v1 === v2;
        this.emitter = new Emitter();
        this.rawValue_ = initialValue;
    }
    get constraint() {
        return this.constraint_;
    }
    get rawValue() {
        return this.rawValue_;
    }
    set rawValue(rawValue) {
        this.setRawValue(rawValue, {
            forceEmit: false,
            last: true
        });
    }
    setRawValue(rawValue, options) {
        const opts = options !== null && options !== void 0 ? options : {
            forceEmit: false,
            last: true
        };
        const constrainedValue = this.constraint_ ? this.constraint_.constrain(rawValue) : rawValue;
        const prevValue = this.rawValue_;
        const changed = !this.equals_(prevValue, constrainedValue);
        if (!changed && !opts.forceEmit) return;
        this.emitter.emit("beforechange", {
            sender: this
        });
        this.rawValue_ = constrainedValue;
        this.emitter.emit("change", {
            options: opts,
            previousRawValue: prevValue,
            rawValue: constrainedValue,
            sender: this
        });
    }
}
class PrimitiveValue {
    constructor(initialValue){
        this.emitter = new Emitter();
        this.value_ = initialValue;
    }
    get rawValue() {
        return this.value_;
    }
    set rawValue(value) {
        this.setRawValue(value, {
            forceEmit: false,
            last: true
        });
    }
    setRawValue(value, options) {
        const opts = options !== null && options !== void 0 ? options : {
            forceEmit: false,
            last: true
        };
        const prevValue = this.value_;
        if (prevValue === value && !opts.forceEmit) return;
        this.emitter.emit("beforechange", {
            sender: this
        });
        this.value_ = value;
        this.emitter.emit("change", {
            options: opts,
            previousRawValue: prevValue,
            rawValue: this.value_,
            sender: this
        });
    }
}
class ReadonlyPrimitiveValue {
    constructor(value){
        this.emitter = new Emitter();
        this.onValueBeforeChange_ = this.onValueBeforeChange_.bind(this);
        this.onValueChange_ = this.onValueChange_.bind(this);
        this.value_ = value;
        this.value_.emitter.on("beforechange", this.onValueBeforeChange_);
        this.value_.emitter.on("change", this.onValueChange_);
    }
    get rawValue() {
        return this.value_.rawValue;
    }
    onValueBeforeChange_(ev) {
        this.emitter.emit("beforechange", Object.assign(Object.assign({}, ev), {
            sender: this
        }));
    }
    onValueChange_(ev) {
        this.emitter.emit("change", Object.assign(Object.assign({}, ev), {
            sender: this
        }));
    }
}
function createValue(initialValue, config) {
    const constraint = config === null || config === void 0 ? void 0 : config.constraint;
    const equals = config === null || config === void 0 ? void 0 : config.equals;
    if (!constraint && !equals) return new PrimitiveValue(initialValue);
    return new ComplexValue(initialValue, config);
}
function createReadonlyValue(value) {
    return [
        new ReadonlyPrimitiveValue(value),
        (rawValue, options)=>{
            value.setRawValue(rawValue, options);
        }
    ];
}
class ValueMap {
    constructor(valueMap){
        this.emitter = new Emitter();
        this.valMap_ = valueMap;
        for(const key in this.valMap_){
            const v = this.valMap_[key];
            v.emitter.on("change", ()=>{
                this.emitter.emit("change", {
                    key: key,
                    sender: this
                });
            });
        }
    }
    static createCore(initialValue) {
        const keys = Object.keys(initialValue);
        return keys.reduce((o, key)=>{
            return Object.assign(o, {
                [key]: createValue(initialValue[key])
            });
        }, {});
    }
    static fromObject(initialValue) {
        const core = this.createCore(initialValue);
        return new ValueMap(core);
    }
    get(key) {
        return this.valMap_[key].rawValue;
    }
    set(key, value) {
        this.valMap_[key].rawValue = value;
    }
    value(key) {
        return this.valMap_[key];
    }
}
class DefiniteRangeConstraint {
    constructor(config){
        this.values = ValueMap.fromObject({
            max: config.max,
            min: config.min
        });
    }
    constrain(value) {
        const max = this.values.get("max");
        const min = this.values.get("min");
        return Math.min(Math.max(value, min), max);
    }
}
class RangeConstraint {
    constructor(config){
        this.values = ValueMap.fromObject({
            max: config.max,
            min: config.min
        });
    }
    constrain(value) {
        const max = this.values.get("max");
        const min = this.values.get("min");
        let result = value;
        if (!isEmpty(min)) result = Math.max(result, min);
        if (!isEmpty(max)) result = Math.min(result, max);
        return result;
    }
}
class StepConstraint {
    constructor(step, origin = 0){
        this.step = step;
        this.origin = origin;
    }
    constrain(value) {
        const o = this.origin % this.step;
        const r = Math.round((value - o) / this.step);
        return o + r * this.step;
    }
}
class NumberLiteralNode {
    constructor(text){
        this.text = text;
    }
    evaluate() {
        return Number(this.text);
    }
    toString() {
        return this.text;
    }
}
const BINARY_OPERATION_MAP = {
    "**": (v1, v2)=>Math.pow(v1, v2),
    "*": (v1, v2)=>v1 * v2,
    "/": (v1, v2)=>v1 / v2,
    "%": (v1, v2)=>v1 % v2,
    "+": (v1, v2)=>v1 + v2,
    "-": (v1, v2)=>v1 - v2,
    "<<": (v1, v2)=>v1 << v2,
    ">>": (v1, v2)=>v1 >> v2,
    ">>>": (v1, v2)=>v1 >>> v2,
    "&": (v1, v2)=>v1 & v2,
    "^": (v1, v2)=>v1 ^ v2,
    "|": (v1, v2)=>v1 | v2
};
class BinaryOperationNode {
    constructor(operator, left, right){
        this.left = left;
        this.operator = operator;
        this.right = right;
    }
    evaluate() {
        const op = BINARY_OPERATION_MAP[this.operator];
        if (!op) throw new Error(`unexpected binary operator: '${this.operator}`);
        return op(this.left.evaluate(), this.right.evaluate());
    }
    toString() {
        return [
            "b(",
            this.left.toString(),
            this.operator,
            this.right.toString(),
            ")"
        ].join(" ");
    }
}
const UNARY_OPERATION_MAP = {
    "+": (v)=>v,
    "-": (v)=>-v,
    "~": (v)=>~v
};
class UnaryOperationNode {
    constructor(operator, expr){
        this.operator = operator;
        this.expression = expr;
    }
    evaluate() {
        const op = UNARY_OPERATION_MAP[this.operator];
        if (!op) throw new Error(`unexpected unary operator: '${this.operator}`);
        return op(this.expression.evaluate());
    }
    toString() {
        return [
            "u(",
            this.operator,
            this.expression.toString(),
            ")"
        ].join(" ");
    }
}
function combineReader(parsers) {
    return (text, cursor)=>{
        for(let i = 0; i < parsers.length; i++){
            const result = parsers[i](text, cursor);
            if (result !== "") return result;
        }
        return "";
    };
}
function readWhitespace(text, cursor) {
    var _a;
    const m = text.substr(cursor).match(/^\s+/);
    return (_a = m && m[0]) !== null && _a !== void 0 ? _a : "";
}
function readNonZeroDigit(text, cursor) {
    const ch = text.substr(cursor, 1);
    return ch.match(/^[1-9]$/) ? ch : "";
}
function readDecimalDigits(text, cursor) {
    var _a;
    const m = text.substr(cursor).match(/^[0-9]+/);
    return (_a = m && m[0]) !== null && _a !== void 0 ? _a : "";
}
function readSignedInteger(text, cursor) {
    const ds = readDecimalDigits(text, cursor);
    if (ds !== "") return ds;
    const sign = text.substr(cursor, 1);
    cursor += 1;
    if (sign !== "-" && sign !== "+") return "";
    const sds = readDecimalDigits(text, cursor);
    if (sds === "") return "";
    return sign + sds;
}
function readExponentPart(text, cursor) {
    const e = text.substr(cursor, 1);
    cursor += 1;
    if (e.toLowerCase() !== "e") return "";
    const si = readSignedInteger(text, cursor);
    if (si === "") return "";
    return e + si;
}
function readDecimalIntegerLiteral(text, cursor) {
    const ch = text.substr(cursor, 1);
    if (ch === "0") return ch;
    const nzd = readNonZeroDigit(text, cursor);
    cursor += nzd.length;
    if (nzd === "") return "";
    return nzd + readDecimalDigits(text, cursor);
}
function readDecimalLiteral1(text, cursor) {
    const dil = readDecimalIntegerLiteral(text, cursor);
    cursor += dil.length;
    if (dil === "") return "";
    const dot = text.substr(cursor, 1);
    cursor += dot.length;
    if (dot !== ".") return "";
    const dds = readDecimalDigits(text, cursor);
    cursor += dds.length;
    return dil + dot + dds + readExponentPart(text, cursor);
}
function readDecimalLiteral2(text, cursor) {
    const dot = text.substr(cursor, 1);
    cursor += dot.length;
    if (dot !== ".") return "";
    const dds = readDecimalDigits(text, cursor);
    cursor += dds.length;
    if (dds === "") return "";
    return dot + dds + readExponentPart(text, cursor);
}
function readDecimalLiteral3(text, cursor) {
    const dil = readDecimalIntegerLiteral(text, cursor);
    cursor += dil.length;
    if (dil === "") return "";
    return dil + readExponentPart(text, cursor);
}
const readDecimalLiteral = combineReader([
    readDecimalLiteral1,
    readDecimalLiteral2,
    readDecimalLiteral3
]);
function parseBinaryDigits(text, cursor) {
    var _a;
    const m = text.substr(cursor).match(/^[01]+/);
    return (_a = m && m[0]) !== null && _a !== void 0 ? _a : "";
}
function readBinaryIntegerLiteral(text, cursor) {
    const prefix = text.substr(cursor, 2);
    cursor += prefix.length;
    if (prefix.toLowerCase() !== "0b") return "";
    const bds = parseBinaryDigits(text, cursor);
    if (bds === "") return "";
    return prefix + bds;
}
function readOctalDigits(text, cursor) {
    var _a;
    const m = text.substr(cursor).match(/^[0-7]+/);
    return (_a = m && m[0]) !== null && _a !== void 0 ? _a : "";
}
function readOctalIntegerLiteral(text, cursor) {
    const prefix = text.substr(cursor, 2);
    cursor += prefix.length;
    if (prefix.toLowerCase() !== "0o") return "";
    const ods = readOctalDigits(text, cursor);
    if (ods === "") return "";
    return prefix + ods;
}
function readHexDigits(text, cursor) {
    var _a;
    const m = text.substr(cursor).match(/^[0-9a-f]+/i);
    return (_a = m && m[0]) !== null && _a !== void 0 ? _a : "";
}
function readHexIntegerLiteral(text, cursor) {
    const prefix = text.substr(cursor, 2);
    cursor += prefix.length;
    if (prefix.toLowerCase() !== "0x") return "";
    const hds = readHexDigits(text, cursor);
    if (hds === "") return "";
    return prefix + hds;
}
const readNonDecimalIntegerLiteral = combineReader([
    readBinaryIntegerLiteral,
    readOctalIntegerLiteral,
    readHexIntegerLiteral
]);
const readNumericLiteral = combineReader([
    readNonDecimalIntegerLiteral,
    readDecimalLiteral
]);
function parseLiteral(text, cursor) {
    const num = readNumericLiteral(text, cursor);
    cursor += num.length;
    if (num === "") return null;
    return {
        evaluable: new NumberLiteralNode(num),
        cursor: cursor
    };
}
function parseParenthesizedExpression(text, cursor) {
    const op = text.substr(cursor, 1);
    cursor += op.length;
    if (op !== "(") return null;
    const expr = parseExpression(text, cursor);
    if (!expr) return null;
    cursor = expr.cursor;
    cursor += readWhitespace(text, cursor).length;
    const cl = text.substr(cursor, 1);
    cursor += cl.length;
    if (cl !== ")") return null;
    return {
        evaluable: expr.evaluable,
        cursor: cursor
    };
}
function parsePrimaryExpression(text, cursor) {
    var _a;
    return (_a = parseLiteral(text, cursor)) !== null && _a !== void 0 ? _a : parseParenthesizedExpression(text, cursor);
}
function parseUnaryExpression(text, cursor) {
    const expr = parsePrimaryExpression(text, cursor);
    if (expr) return expr;
    const op = text.substr(cursor, 1);
    cursor += op.length;
    if (op !== "+" && op !== "-" && op !== "~") return null;
    const num = parseUnaryExpression(text, cursor);
    if (!num) return null;
    cursor = num.cursor;
    return {
        cursor: cursor,
        evaluable: new UnaryOperationNode(op, num.evaluable)
    };
}
function readBinaryOperator(ops, text, cursor) {
    cursor += readWhitespace(text, cursor).length;
    const op = ops.filter((op)=>text.startsWith(op, cursor))[0];
    if (!op) return null;
    cursor += op.length;
    cursor += readWhitespace(text, cursor).length;
    return {
        cursor: cursor,
        operator: op
    };
}
function createBinaryOperationExpressionParser(exprParser, ops) {
    return (text, cursor)=>{
        const firstExpr = exprParser(text, cursor);
        if (!firstExpr) return null;
        cursor = firstExpr.cursor;
        let expr = firstExpr.evaluable;
        for(;;){
            const op = readBinaryOperator(ops, text, cursor);
            if (!op) break;
            cursor = op.cursor;
            const nextExpr = exprParser(text, cursor);
            if (!nextExpr) return null;
            cursor = nextExpr.cursor;
            expr = new BinaryOperationNode(op.operator, expr, nextExpr.evaluable);
        }
        return expr ? {
            cursor: cursor,
            evaluable: expr
        } : null;
    };
}
const parseBinaryOperationExpression = [
    [
        "**"
    ],
    [
        "*",
        "/",
        "%"
    ],
    [
        "+",
        "-"
    ],
    [
        "<<",
        ">>>",
        ">>"
    ],
    [
        "&"
    ],
    [
        "^"
    ],
    [
        "|"
    ]
].reduce((parser, ops)=>{
    return createBinaryOperationExpressionParser(parser, ops);
}, parseUnaryExpression);
function parseExpression(text, cursor) {
    cursor += readWhitespace(text, cursor).length;
    return parseBinaryOperationExpression(text, cursor);
}
function parseEcmaNumberExpression(text) {
    const expr = parseExpression(text, 0);
    if (!expr) return null;
    const cursor = expr.cursor + readWhitespace(text, expr.cursor).length;
    if (cursor !== text.length) return null;
    return expr.evaluable;
}
function parseNumber(text) {
    var _a;
    const r = parseEcmaNumberExpression(text);
    return (_a = r === null || r === void 0 ? void 0 : r.evaluate()) !== null && _a !== void 0 ? _a : null;
}
function numberFromUnknown(value) {
    if (typeof value === "number") return value;
    if (typeof value === "string") {
        const pv = parseNumber(value);
        if (!isEmpty(pv)) return pv;
    }
    return 0;
}
function numberToString(value) {
    return String(value);
}
function createNumberFormatter(digits) {
    return (value)=>{
        return value.toFixed(Math.max(Math.min(digits, 20), 0));
    };
}
function mapRange(value, start1, end1, start2, end2) {
    const p = (value - start1) / (end1 - start1);
    return start2 + p * (end2 - start2);
}
function getDecimalDigits(value) {
    const text = String(value.toFixed(10));
    const frac = text.split(".")[1];
    return frac.replace(/0+$/, "").length;
}
function constrainRange(value, min, max) {
    return Math.min(Math.max(value, min), max);
}
function loopRange(value, max) {
    return (value % max + max) % max;
}
function getSuitableDecimalDigits(params, rawValue) {
    return !isEmpty(params.step) ? getDecimalDigits(params.step) : Math.max(getDecimalDigits(rawValue), 2);
}
function getSuitableKeyScale(params) {
    var _a;
    return (_a = params.step) !== null && _a !== void 0 ? _a : 1;
}
function getSuitablePointerScale(params, rawValue) {
    var _a;
    const base = Math.abs((_a = params.step) !== null && _a !== void 0 ? _a : rawValue);
    return base === 0 ? 0.1 : Math.pow(10, Math.floor(Math.log10(base)) - 1);
}
function createStepConstraint(params, initialValue) {
    if (!isEmpty(params.step)) return new StepConstraint(params.step, initialValue);
    return null;
}
function createRangeConstraint(params) {
    if (!isEmpty(params.max) && !isEmpty(params.min)) return new DefiniteRangeConstraint({
        max: params.max,
        min: params.min
    });
    if (!isEmpty(params.max) || !isEmpty(params.min)) return new RangeConstraint({
        max: params.max,
        min: params.min
    });
    return null;
}
function createNumberTextPropsObject(params, initialValue) {
    var _a, _b, _c;
    return {
        formatter: (_a = params.format) !== null && _a !== void 0 ? _a : createNumberFormatter(getSuitableDecimalDigits(params, initialValue)),
        keyScale: (_b = params.keyScale) !== null && _b !== void 0 ? _b : getSuitableKeyScale(params),
        pointerScale: (_c = params.pointerScale) !== null && _c !== void 0 ? _c : getSuitablePointerScale(params, initialValue)
    };
}
function createNumberTextInputParamsParser(p) {
    return {
        format: p.optional.function,
        keyScale: p.optional.number,
        max: p.optional.number,
        min: p.optional.number,
        pointerScale: p.optional.number,
        step: p.optional.number
    };
}
function createPointAxis(config) {
    return {
        constraint: config.constraint,
        textProps: ValueMap.fromObject(createNumberTextPropsObject(config.params, config.initialValue))
    };
}
class BladeApi {
    constructor(controller){
        this.controller = controller;
    }
    get element() {
        return this.controller.view.element;
    }
    get disabled() {
        return this.controller.viewProps.get("disabled");
    }
    set disabled(disabled) {
        this.controller.viewProps.set("disabled", disabled);
    }
    get hidden() {
        return this.controller.viewProps.get("hidden");
    }
    set hidden(hidden) {
        this.controller.viewProps.set("hidden", hidden);
    }
    dispose() {
        this.controller.viewProps.set("disposed", true);
    }
    importState(state) {
        return this.controller.importState(state);
    }
    exportState() {
        return this.controller.exportState();
    }
}
class TpEvent {
    constructor(target){
        this.target = target;
    }
}
class TpChangeEvent extends TpEvent {
    constructor(target, value, last){
        super(target);
        this.value = value;
        this.last = last !== null && last !== void 0 ? last : true;
    }
}
class TpFoldEvent extends TpEvent {
    constructor(target, expanded){
        super(target);
        this.expanded = expanded;
    }
}
class TpTabSelectEvent extends TpEvent {
    constructor(target, index){
        super(target);
        this.index = index;
    }
}
class TpMouseEvent extends TpEvent {
    constructor(target, nativeEvent){
        super(target);
        this.native = nativeEvent;
    }
}
class BindingApi extends BladeApi {
    constructor(controller){
        super(controller);
        this.onValueChange_ = this.onValueChange_.bind(this);
        this.emitter_ = new Emitter();
        this.controller.value.emitter.on("change", this.onValueChange_);
    }
    get label() {
        return this.controller.labelController.props.get("label");
    }
    set label(label) {
        this.controller.labelController.props.set("label", label);
    }
    get key() {
        return this.controller.value.binding.target.key;
    }
    get tag() {
        return this.controller.tag;
    }
    set tag(tag) {
        this.controller.tag = tag;
    }
    on(eventName, handler) {
        const bh = handler.bind(this);
        this.emitter_.on(eventName, (ev)=>{
            bh(ev);
        }, {
            key: handler
        });
        return this;
    }
    off(eventName, handler) {
        this.emitter_.off(eventName, handler);
        return this;
    }
    refresh() {
        this.controller.value.fetch();
    }
    onValueChange_(ev) {
        const value = this.controller.value;
        this.emitter_.emit("change", new TpChangeEvent(this, forceCast(value.binding.target.read()), ev.options.last));
    }
}
class InputBindingValue {
    constructor(value, binding){
        this.onValueBeforeChange_ = this.onValueBeforeChange_.bind(this);
        this.onValueChange_ = this.onValueChange_.bind(this);
        this.binding = binding;
        this.value_ = value;
        this.value_.emitter.on("beforechange", this.onValueBeforeChange_);
        this.value_.emitter.on("change", this.onValueChange_);
        this.emitter = new Emitter();
    }
    get rawValue() {
        return this.value_.rawValue;
    }
    set rawValue(rawValue) {
        this.value_.rawValue = rawValue;
    }
    setRawValue(rawValue, options) {
        this.value_.setRawValue(rawValue, options);
    }
    fetch() {
        this.value_.rawValue = this.binding.read();
    }
    push() {
        this.binding.write(this.value_.rawValue);
    }
    onValueBeforeChange_(ev) {
        this.emitter.emit("beforechange", Object.assign(Object.assign({}, ev), {
            sender: this
        }));
    }
    onValueChange_(ev) {
        this.push();
        this.emitter.emit("change", Object.assign(Object.assign({}, ev), {
            sender: this
        }));
    }
}
function isInputBindingValue(v) {
    if (!("binding" in v)) return false;
    const b = v["binding"];
    return isBinding(b) && "read" in b && "write" in b;
}
function parseObject(value, keyToParserMap) {
    const keys = Object.keys(keyToParserMap);
    const result = keys.reduce((tmp, key)=>{
        if (tmp === undefined) return undefined;
        const parser = keyToParserMap[key];
        const result = parser(value[key]);
        return result.succeeded ? Object.assign(Object.assign({}, tmp), {
            [key]: result.value
        }) : undefined;
    }, {});
    return forceCast(result);
}
function parseArray(value, parseItem) {
    return value.reduce((tmp, item)=>{
        if (tmp === undefined) return undefined;
        const result = parseItem(item);
        if (!result.succeeded || result.value === undefined) return undefined;
        return [
            ...tmp,
            result.value
        ];
    }, []);
}
function isObject(value) {
    if (value === null) return false;
    return typeof value === "object";
}
function createMicroParserBuilder(parse) {
    return (optional)=>(v)=>{
            if (!optional && v === undefined) return {
                succeeded: false,
                value: undefined
            };
            if (optional && v === undefined) return {
                succeeded: true,
                value: undefined
            };
            const result = parse(v);
            return result !== undefined ? {
                succeeded: true,
                value: result
            } : {
                succeeded: false,
                value: undefined
            };
        };
}
function createMicroParserBuilders(optional) {
    return {
        custom: (parse)=>createMicroParserBuilder(parse)(optional),
        boolean: createMicroParserBuilder((v)=>typeof v === "boolean" ? v : undefined)(optional),
        number: createMicroParserBuilder((v)=>typeof v === "number" ? v : undefined)(optional),
        string: createMicroParserBuilder((v)=>typeof v === "string" ? v : undefined)(optional),
        function: createMicroParserBuilder((v)=>typeof v === "function" ? v : undefined)(optional),
        constant: (value)=>createMicroParserBuilder((v)=>v === value ? value : undefined)(optional),
        raw: createMicroParserBuilder((v)=>v)(optional),
        object: (keyToParserMap)=>createMicroParserBuilder((v)=>{
                if (!isObject(v)) return undefined;
                return parseObject(v, keyToParserMap);
            })(optional),
        array: (itemParser)=>createMicroParserBuilder((v)=>{
                if (!Array.isArray(v)) return undefined;
                return parseArray(v, itemParser);
            })(optional)
    };
}
const MicroParsers = {
    optional: createMicroParserBuilders(true),
    required: createMicroParserBuilders(false)
};
function parseRecord(value, keyToParserMap) {
    const map = keyToParserMap(MicroParsers);
    const result = MicroParsers.required.object(map)(value);
    return result.succeeded ? result.value : undefined;
}
function importBladeState(state, superImport, parser, callback) {
    if (superImport && !superImport(state)) return false;
    const result = parseRecord(state, parser);
    return result ? callback(result) : false;
}
function exportBladeState(superExport, thisState) {
    var _a;
    return deepMerge((_a = superExport === null || superExport === void 0 ? void 0 : superExport()) !== null && _a !== void 0 ? _a : {}, thisState);
}
function isValueBladeController(bc) {
    return "value" in bc;
}
function isBindingValue(v) {
    if (!isObject$1(v) || !("binding" in v)) return false;
    const b = v.binding;
    return isBinding(b);
}
const SVG_NS = "http://www.w3.org/2000/svg";
function forceReflow(element) {
    element.offsetHeight;
}
function disableTransitionTemporarily(element, callback) {
    const t = element.style.transition;
    element.style.transition = "none";
    callback();
    element.style.transition = t;
}
function supportsTouch(doc) {
    return doc.ontouchstart !== undefined;
}
function getGlobalObject() {
    return globalThis;
}
function getWindowDocument() {
    const globalObj = forceCast(getGlobalObject());
    return globalObj.document;
}
function getCanvasContext(canvasElement) {
    const win = canvasElement.ownerDocument.defaultView;
    if (!win) return null;
    const isBrowser = "document" in win;
    return isBrowser ? canvasElement.getContext("2d", {
        willReadFrequently: true
    }) : null;
}
const ICON_ID_TO_INNER_HTML_MAP = {
    check: '<path d="M2 8l4 4l8 -8"/>',
    dropdown: '<path d="M5 7h6l-3 3 z"/>',
    p2dpad: '<path d="M8 4v8"/><path d="M4 8h8"/><circle cx="12" cy="12" r="1.2"/>'
};
function createSvgIconElement(document, iconId) {
    const elem = document.createElementNS(SVG_NS, "svg");
    elem.innerHTML = ICON_ID_TO_INNER_HTML_MAP[iconId];
    return elem;
}
function insertElementAt(parentElement, element, index) {
    parentElement.insertBefore(element, parentElement.children[index]);
}
function removeElement(element) {
    if (element.parentElement) element.parentElement.removeChild(element);
}
function removeChildElements(element) {
    while(element.children.length > 0)element.removeChild(element.children[0]);
}
function removeChildNodes(element) {
    while(element.childNodes.length > 0)element.removeChild(element.childNodes[0]);
}
function findNextTarget(ev) {
    if (ev.relatedTarget) return forceCast(ev.relatedTarget);
    if ("explicitOriginalTarget" in ev) return ev.explicitOriginalTarget;
    return null;
}
function bindValue(value, applyValue) {
    value.emitter.on("change", (ev)=>{
        applyValue(ev.rawValue);
    });
    applyValue(value.rawValue);
}
function bindValueMap(valueMap, key, applyValue) {
    bindValue(valueMap.value(key), applyValue);
}
const PREFIX = "tp";
function ClassName(viewName) {
    const fn = (opt_elementName, opt_modifier)=>{
        return [
            PREFIX,
            "-",
            viewName,
            "v",
            opt_elementName ? `_${opt_elementName}` : "",
            opt_modifier ? `-${opt_modifier}` : ""
        ].join("");
    };
    return fn;
}
const cn$r = ClassName("lbl");
function createLabelNode(doc, label) {
    const frag = doc.createDocumentFragment();
    const lineNodes = label.split("\n").map((line)=>{
        return doc.createTextNode(line);
    });
    lineNodes.forEach((lineNode, index)=>{
        if (index > 0) frag.appendChild(doc.createElement("br"));
        frag.appendChild(lineNode);
    });
    return frag;
}
class LabelView {
    constructor(doc, config){
        this.element = doc.createElement("div");
        this.element.classList.add(cn$r());
        config.viewProps.bindClassModifiers(this.element);
        const labelElem = doc.createElement("div");
        labelElem.classList.add(cn$r("l"));
        bindValueMap(config.props, "label", (value)=>{
            if (isEmpty(value)) this.element.classList.add(cn$r(undefined, "nol"));
            else {
                this.element.classList.remove(cn$r(undefined, "nol"));
                removeChildNodes(labelElem);
                labelElem.appendChild(createLabelNode(doc, value));
            }
        });
        this.element.appendChild(labelElem);
        this.labelElement = labelElem;
        const valueElem = doc.createElement("div");
        valueElem.classList.add(cn$r("v"));
        this.element.appendChild(valueElem);
        this.valueElement = valueElem;
    }
}
class LabelController {
    constructor(doc, config){
        this.props = config.props;
        this.valueController = config.valueController;
        this.viewProps = config.valueController.viewProps;
        this.view = new LabelView(doc, {
            props: config.props,
            viewProps: this.viewProps
        });
        this.view.valueElement.appendChild(this.valueController.view.element);
    }
    importProps(state) {
        return importBladeState(state, null, (p)=>({
                label: p.optional.string
            }), (result)=>{
            this.props.set("label", result.label);
            return true;
        });
    }
    exportProps() {
        return exportBladeState(null, {
            label: this.props.get("label")
        });
    }
}
function getAllBladePositions() {
    return [
        "veryfirst",
        "first",
        "last",
        "verylast"
    ];
}
const cn$q = ClassName("");
const POS_TO_CLASS_NAME_MAP = {
    veryfirst: "vfst",
    first: "fst",
    last: "lst",
    verylast: "vlst"
};
class BladeController {
    constructor(config){
        this.parent_ = null;
        this.blade = config.blade;
        this.view = config.view;
        this.viewProps = config.viewProps;
        const elem = this.view.element;
        this.blade.value("positions").emitter.on("change", ()=>{
            getAllBladePositions().forEach((pos)=>{
                elem.classList.remove(cn$q(undefined, POS_TO_CLASS_NAME_MAP[pos]));
            });
            this.blade.get("positions").forEach((pos)=>{
                elem.classList.add(cn$q(undefined, POS_TO_CLASS_NAME_MAP[pos]));
            });
        });
        this.viewProps.handleDispose(()=>{
            removeElement(elem);
        });
    }
    get parent() {
        return this.parent_;
    }
    set parent(parent) {
        this.parent_ = parent;
        this.viewProps.set("parent", this.parent_ ? this.parent_.viewProps : null);
    }
    importState(state) {
        return importBladeState(state, null, (p)=>({
                disabled: p.required.boolean,
                hidden: p.required.boolean
            }), (result)=>{
            this.viewProps.importState(result);
            return true;
        });
    }
    exportState() {
        return exportBladeState(null, Object.assign({}, this.viewProps.exportState()));
    }
}
class LabeledValueBladeController extends BladeController {
    constructor(doc, config){
        if (config.value !== config.valueController.value) throw TpError.shouldNeverHappen();
        const viewProps = config.valueController.viewProps;
        const lc = new LabelController(doc, {
            blade: config.blade,
            props: config.props,
            valueController: config.valueController
        });
        super(Object.assign(Object.assign({}, config), {
            view: new LabelView(doc, {
                props: config.props,
                viewProps: viewProps
            }),
            viewProps: viewProps
        }));
        this.labelController = lc;
        this.value = config.value;
        this.valueController = config.valueController;
        this.view.valueElement.appendChild(this.valueController.view.element);
    }
    importState(state) {
        return importBladeState(state, (s)=>{
            var _a, _b, _c;
            return super.importState(s) && this.labelController.importProps(s) && ((_c = (_b = (_a = this.valueController).importProps) === null || _b === void 0 ? void 0 : _b.call(_a, state)) !== null && _c !== void 0 ? _c : true);
        }, (p)=>({
                value: p.optional.raw
            }), (result)=>{
            if (result.value) this.value.rawValue = result.value;
            return true;
        });
    }
    exportState() {
        var _a, _b, _c;
        return exportBladeState(()=>super.exportState(), Object.assign(Object.assign({
            value: this.value.rawValue
        }, this.labelController.exportProps()), (_c = (_b = (_a = this.valueController).exportProps) === null || _b === void 0 ? void 0 : _b.call(_a)) !== null && _c !== void 0 ? _c : {}));
    }
}
function excludeValue(state) {
    const result = Object.assign({}, state);
    delete result.value;
    return result;
}
class BindingController extends LabeledValueBladeController {
    constructor(doc, config){
        super(doc, config);
        this.tag = config.tag;
    }
    importState(state) {
        return importBladeState(state, (_s)=>super.importState(excludeValue(state)), (p)=>({
                tag: p.optional.string
            }), (result)=>{
            this.tag = result.tag;
            return true;
        });
    }
    exportState() {
        return exportBladeState(()=>excludeValue(super.exportState()), {
            binding: {
                key: this.value.binding.target.key,
                value: this.value.binding.target.read()
            },
            tag: this.tag
        });
    }
}
function isBindingController(bc) {
    return isValueBladeController(bc) && isBindingValue(bc.value);
}
class InputBindingController extends BindingController {
    importState(state) {
        return importBladeState(state, (s)=>super.importState(s), (p)=>({
                binding: p.required.object({
                    value: p.required.raw
                })
            }), (result)=>{
            this.value.binding.inject(result.binding.value);
            this.value.fetch();
            return true;
        });
    }
}
function isInputBindingController(bc) {
    return isValueBladeController(bc) && isInputBindingValue(bc.value);
}
function fillBuffer(buffer, bufferSize) {
    while(buffer.length < bufferSize)buffer.push(undefined);
}
function initializeBuffer(bufferSize) {
    const buffer = [];
    fillBuffer(buffer, bufferSize);
    return buffer;
}
function createTrimmedBuffer(buffer) {
    const index = buffer.indexOf(undefined);
    return forceCast(index < 0 ? buffer : buffer.slice(0, index));
}
function createPushedBuffer(buffer, newValue) {
    const newBuffer = [
        ...createTrimmedBuffer(buffer),
        newValue
    ];
    if (newBuffer.length > buffer.length) newBuffer.splice(0, newBuffer.length - buffer.length);
    else fillBuffer(newBuffer, buffer.length);
    return newBuffer;
}
class MonitorBindingValue {
    constructor(config){
        this.emitter = new Emitter();
        this.onTick_ = this.onTick_.bind(this);
        this.onValueBeforeChange_ = this.onValueBeforeChange_.bind(this);
        this.onValueChange_ = this.onValueChange_.bind(this);
        this.binding = config.binding;
        this.value_ = createValue(initializeBuffer(config.bufferSize));
        this.value_.emitter.on("beforechange", this.onValueBeforeChange_);
        this.value_.emitter.on("change", this.onValueChange_);
        this.ticker = config.ticker;
        this.ticker.emitter.on("tick", this.onTick_);
        this.fetch();
    }
    get rawValue() {
        return this.value_.rawValue;
    }
    set rawValue(rawValue) {
        this.value_.rawValue = rawValue;
    }
    setRawValue(rawValue, options) {
        this.value_.setRawValue(rawValue, options);
    }
    fetch() {
        this.value_.rawValue = createPushedBuffer(this.value_.rawValue, this.binding.read());
    }
    onTick_() {
        this.fetch();
    }
    onValueBeforeChange_(ev) {
        this.emitter.emit("beforechange", Object.assign(Object.assign({}, ev), {
            sender: this
        }));
    }
    onValueChange_(ev) {
        this.emitter.emit("change", Object.assign(Object.assign({}, ev), {
            sender: this
        }));
    }
}
function isMonitorBindingValue(v) {
    if (!("binding" in v)) return false;
    const b = v["binding"];
    return isBinding(b) && "read" in b && !("write" in b);
}
class MonitorBindingController extends BindingController {
    exportState() {
        return exportBladeState(()=>super.exportState(), {
            binding: {
                readonly: true
            }
        });
    }
}
function isMonitorBindingController(bc) {
    return isValueBladeController(bc) && isMonitorBindingValue(bc.value);
}
class ButtonApi extends BladeApi {
    get label() {
        return this.controller.labelController.props.get("label");
    }
    set label(label) {
        this.controller.labelController.props.set("label", label);
    }
    get title() {
        var _a;
        return (_a = this.controller.buttonController.props.get("title")) !== null && _a !== void 0 ? _a : "";
    }
    set title(title) {
        this.controller.buttonController.props.set("title", title);
    }
    on(eventName, handler) {
        const bh = handler.bind(this);
        const emitter = this.controller.buttonController.emitter;
        emitter.on(eventName, (ev)=>{
            bh(new TpMouseEvent(this, ev.nativeEvent));
        });
        return this;
    }
    off(eventName, handler) {
        const emitter = this.controller.buttonController.emitter;
        emitter.off(eventName, handler);
        return this;
    }
}
function applyClass(elem, className, active) {
    if (active) elem.classList.add(className);
    else elem.classList.remove(className);
}
function valueToClassName(elem, className) {
    return (value)=>{
        applyClass(elem, className, value);
    };
}
function bindValueToTextContent(value, elem) {
    bindValue(value, (text)=>{
        elem.textContent = text !== null && text !== void 0 ? text : "";
    });
}
const cn$p = ClassName("btn");
class ButtonView {
    constructor(doc, config){
        this.element = doc.createElement("div");
        this.element.classList.add(cn$p());
        config.viewProps.bindClassModifiers(this.element);
        const buttonElem = doc.createElement("button");
        buttonElem.classList.add(cn$p("b"));
        config.viewProps.bindDisabled(buttonElem);
        this.element.appendChild(buttonElem);
        this.buttonElement = buttonElem;
        const titleElem = doc.createElement("div");
        titleElem.classList.add(cn$p("t"));
        bindValueToTextContent(config.props.value("title"), titleElem);
        this.buttonElement.appendChild(titleElem);
    }
}
class ButtonController {
    constructor(doc, config){
        this.emitter = new Emitter();
        this.onClick_ = this.onClick_.bind(this);
        this.props = config.props;
        this.viewProps = config.viewProps;
        this.view = new ButtonView(doc, {
            props: this.props,
            viewProps: this.viewProps
        });
        this.view.buttonElement.addEventListener("click", this.onClick_);
    }
    importProps(state) {
        return importBladeState(state, null, (p)=>({
                title: p.optional.string
            }), (result)=>{
            this.props.set("title", result.title);
            return true;
        });
    }
    exportProps() {
        return exportBladeState(null, {
            title: this.props.get("title")
        });
    }
    onClick_(ev) {
        this.emitter.emit("click", {
            nativeEvent: ev,
            sender: this
        });
    }
}
class ButtonBladeController extends BladeController {
    constructor(doc, config){
        const bc = new ButtonController(doc, {
            props: config.buttonProps,
            viewProps: config.viewProps
        });
        const lc = new LabelController(doc, {
            blade: config.blade,
            props: config.labelProps,
            valueController: bc
        });
        super({
            blade: config.blade,
            view: lc.view,
            viewProps: config.viewProps
        });
        this.buttonController = bc;
        this.labelController = lc;
    }
    importState(state) {
        return importBladeState(state, (s)=>super.importState(s) && this.buttonController.importProps(s) && this.labelController.importProps(s), ()=>({}), ()=>true);
    }
    exportState() {
        return exportBladeState(()=>super.exportState(), Object.assign(Object.assign({}, this.buttonController.exportProps()), this.labelController.exportProps()));
    }
}
class Semver {
    constructor(text){
        const [core, prerelease] = text.split("-");
        const coreComps = core.split(".");
        this.major = parseInt(coreComps[0], 10);
        this.minor = parseInt(coreComps[1], 10);
        this.patch = parseInt(coreComps[2], 10);
        this.prerelease = prerelease !== null && prerelease !== void 0 ? prerelease : null;
    }
    toString() {
        const core = [
            this.major,
            this.minor,
            this.patch
        ].join(".");
        return this.prerelease !== null ? [
            core,
            this.prerelease
        ].join("-") : core;
    }
}
const VERSION$1 = new Semver("2.0.3");
function createPlugin(plugin) {
    return Object.assign({
        core: VERSION$1
    }, plugin);
}
const ButtonBladePlugin = createPlugin({
    id: "button",
    type: "blade",
    accept (params) {
        const result = parseRecord(params, (p)=>({
                title: p.required.string,
                view: p.required.constant("button"),
                label: p.optional.string
            }));
        return result ? {
            params: result
        } : null;
    },
    controller (args) {
        return new ButtonBladeController(args.document, {
            blade: args.blade,
            buttonProps: ValueMap.fromObject({
                title: args.params.title
            }),
            labelProps: ValueMap.fromObject({
                label: args.params.label
            }),
            viewProps: args.viewProps
        });
    },
    api (args) {
        if (args.controller instanceof ButtonBladeController) return new ButtonApi(args.controller);
        return null;
    }
});
function addButtonAsBlade(api, params) {
    return api.addBlade(Object.assign(Object.assign({}, params), {
        view: "button"
    }));
}
function addFolderAsBlade(api, params) {
    return api.addBlade(Object.assign(Object.assign({}, params), {
        view: "folder"
    }));
}
function addTabAsBlade(api, params) {
    return api.addBlade(Object.assign(Object.assign({}, params), {
        view: "tab"
    }));
}
function isRefreshable(value) {
    if (!isObject$1(value)) return false;
    return "refresh" in value && typeof value.refresh === "function";
}
function createBindingTarget(obj, key) {
    if (!BindingTarget.isBindable(obj)) throw TpError.notBindable();
    return new BindingTarget(obj, key);
}
class RackApi {
    constructor(controller, pool){
        this.onRackValueChange_ = this.onRackValueChange_.bind(this);
        this.controller_ = controller;
        this.emitter_ = new Emitter();
        this.pool_ = pool;
        const rack = this.controller_.rack;
        rack.emitter.on("valuechange", this.onRackValueChange_);
    }
    get children() {
        return this.controller_.rack.children.map((bc)=>this.pool_.createApi(bc));
    }
    addBinding(object, key, opt_params) {
        const params = opt_params !== null && opt_params !== void 0 ? opt_params : {};
        const doc = this.controller_.element.ownerDocument;
        const bc = this.pool_.createBinding(doc, createBindingTarget(object, key), params);
        const api = this.pool_.createBindingApi(bc);
        return this.add(api, params.index);
    }
    addFolder(params) {
        return addFolderAsBlade(this, params);
    }
    addButton(params) {
        return addButtonAsBlade(this, params);
    }
    addTab(params) {
        return addTabAsBlade(this, params);
    }
    add(api, opt_index) {
        const bc = api.controller;
        this.controller_.rack.add(bc, opt_index);
        return api;
    }
    remove(api) {
        this.controller_.rack.remove(api.controller);
    }
    addBlade(params) {
        const doc = this.controller_.element.ownerDocument;
        const bc = this.pool_.createBlade(doc, params);
        const api = this.pool_.createApi(bc);
        return this.add(api, params.index);
    }
    on(eventName, handler) {
        const bh = handler.bind(this);
        this.emitter_.on(eventName, (ev)=>{
            bh(ev);
        }, {
            key: handler
        });
        return this;
    }
    off(eventName, handler) {
        this.emitter_.off(eventName, handler);
        return this;
    }
    refresh() {
        this.children.forEach((c)=>{
            if (isRefreshable(c)) c.refresh();
        });
    }
    onRackValueChange_(ev) {
        const bc = ev.bladeController;
        const api = this.pool_.createApi(bc);
        const binding = isBindingValue(bc.value) ? bc.value.binding : null;
        this.emitter_.emit("change", new TpChangeEvent(api, binding ? binding.target.read() : bc.value.rawValue, ev.options.last));
    }
}
class ContainerBladeApi extends BladeApi {
    constructor(controller, pool){
        super(controller);
        this.rackApi_ = new RackApi(controller.rackController, pool);
    }
    refresh() {
        this.rackApi_.refresh();
    }
}
class ContainerBladeController extends BladeController {
    constructor(config){
        super({
            blade: config.blade,
            view: config.view,
            viewProps: config.rackController.viewProps
        });
        this.rackController = config.rackController;
    }
    importState(state) {
        return importBladeState(state, (s)=>super.importState(s), (p)=>({
                children: p.required.array(p.required.raw)
            }), (result)=>{
            return this.rackController.rack.children.every((c, index)=>{
                return c.importState(result.children[index]);
            });
        });
    }
    exportState() {
        return exportBladeState(()=>super.exportState(), {
            children: this.rackController.rack.children.map((c)=>c.exportState())
        });
    }
}
function isContainerBladeController(bc) {
    return "rackController" in bc;
}
class NestedOrderedSet {
    constructor(extract){
        this.emitter = new Emitter();
        this.items_ = [];
        this.cache_ = new Set();
        this.onSubListAdd_ = this.onSubListAdd_.bind(this);
        this.onSubListRemove_ = this.onSubListRemove_.bind(this);
        this.extract_ = extract;
    }
    get items() {
        return this.items_;
    }
    allItems() {
        return Array.from(this.cache_);
    }
    find(callback) {
        for (const item of this.allItems()){
            if (callback(item)) return item;
        }
        return null;
    }
    includes(item) {
        return this.cache_.has(item);
    }
    add(item, opt_index) {
        if (this.includes(item)) throw TpError.shouldNeverHappen();
        const index = opt_index !== undefined ? opt_index : this.items_.length;
        this.items_.splice(index, 0, item);
        this.cache_.add(item);
        const subList = this.extract_(item);
        if (subList) {
            subList.emitter.on("add", this.onSubListAdd_);
            subList.emitter.on("remove", this.onSubListRemove_);
            subList.allItems().forEach((i)=>{
                this.cache_.add(i);
            });
        }
        this.emitter.emit("add", {
            index: index,
            item: item,
            root: this,
            target: this
        });
    }
    remove(item) {
        const index = this.items_.indexOf(item);
        if (index < 0) return;
        this.items_.splice(index, 1);
        this.cache_.delete(item);
        const subList = this.extract_(item);
        if (subList) {
            subList.allItems().forEach((i)=>{
                this.cache_.delete(i);
            });
            subList.emitter.off("add", this.onSubListAdd_);
            subList.emitter.off("remove", this.onSubListRemove_);
        }
        this.emitter.emit("remove", {
            index: index,
            item: item,
            root: this,
            target: this
        });
    }
    onSubListAdd_(ev) {
        this.cache_.add(ev.item);
        this.emitter.emit("add", {
            index: ev.index,
            item: ev.item,
            root: this,
            target: ev.target
        });
    }
    onSubListRemove_(ev) {
        this.cache_.delete(ev.item);
        this.emitter.emit("remove", {
            index: ev.index,
            item: ev.item,
            root: this,
            target: ev.target
        });
    }
}
function findValueBladeController(bcs, v) {
    for(let i = 0; i < bcs.length; i++){
        const bc = bcs[i];
        if (isValueBladeController(bc) && bc.value === v) return bc;
    }
    return null;
}
function findSubBladeControllerSet(bc) {
    return isContainerBladeController(bc) ? bc.rackController.rack["bcSet_"] : null;
}
class Rack {
    constructor(config){
        var _a, _b;
        this.emitter = new Emitter();
        this.onBladePositionsChange_ = this.onBladePositionsChange_.bind(this);
        this.onSetAdd_ = this.onSetAdd_.bind(this);
        this.onSetRemove_ = this.onSetRemove_.bind(this);
        this.onChildDispose_ = this.onChildDispose_.bind(this);
        this.onChildPositionsChange_ = this.onChildPositionsChange_.bind(this);
        this.onChildValueChange_ = this.onChildValueChange_.bind(this);
        this.onChildViewPropsChange_ = this.onChildViewPropsChange_.bind(this);
        this.onRackLayout_ = this.onRackLayout_.bind(this);
        this.onRackValueChange_ = this.onRackValueChange_.bind(this);
        this.blade_ = (_a = config.blade) !== null && _a !== void 0 ? _a : null;
        (_b = this.blade_) === null || _b === void 0 || _b.value("positions").emitter.on("change", this.onBladePositionsChange_);
        this.viewProps = config.viewProps;
        this.bcSet_ = new NestedOrderedSet(findSubBladeControllerSet);
        this.bcSet_.emitter.on("add", this.onSetAdd_);
        this.bcSet_.emitter.on("remove", this.onSetRemove_);
    }
    get children() {
        return this.bcSet_.items;
    }
    add(bc, opt_index) {
        var _a;
        (_a = bc.parent) === null || _a === void 0 || _a.remove(bc);
        bc.parent = this;
        this.bcSet_.add(bc, opt_index);
    }
    remove(bc) {
        bc.parent = null;
        this.bcSet_.remove(bc);
    }
    find(finder) {
        return this.bcSet_.allItems().filter(finder);
    }
    onSetAdd_(ev) {
        this.updatePositions_();
        const root = ev.target === ev.root;
        this.emitter.emit("add", {
            bladeController: ev.item,
            index: ev.index,
            root: root,
            sender: this
        });
        if (!root) return;
        const bc = ev.item;
        bc.viewProps.emitter.on("change", this.onChildViewPropsChange_);
        bc.blade.value("positions").emitter.on("change", this.onChildPositionsChange_);
        bc.viewProps.handleDispose(this.onChildDispose_);
        if (isValueBladeController(bc)) bc.value.emitter.on("change", this.onChildValueChange_);
        else if (isContainerBladeController(bc)) {
            const rack = bc.rackController.rack;
            if (rack) {
                const emitter = rack.emitter;
                emitter.on("layout", this.onRackLayout_);
                emitter.on("valuechange", this.onRackValueChange_);
            }
        }
    }
    onSetRemove_(ev) {
        this.updatePositions_();
        const root = ev.target === ev.root;
        this.emitter.emit("remove", {
            bladeController: ev.item,
            root: root,
            sender: this
        });
        if (!root) return;
        const bc = ev.item;
        if (isValueBladeController(bc)) bc.value.emitter.off("change", this.onChildValueChange_);
        else if (isContainerBladeController(bc)) {
            const rack = bc.rackController.rack;
            if (rack) {
                const emitter = rack.emitter;
                emitter.off("layout", this.onRackLayout_);
                emitter.off("valuechange", this.onRackValueChange_);
            }
        }
    }
    updatePositions_() {
        const visibleItems = this.bcSet_.items.filter((bc)=>!bc.viewProps.get("hidden"));
        const firstVisibleItem = visibleItems[0];
        const lastVisibleItem = visibleItems[visibleItems.length - 1];
        this.bcSet_.items.forEach((bc)=>{
            const ps = [];
            if (bc === firstVisibleItem) {
                ps.push("first");
                if (!this.blade_ || this.blade_.get("positions").includes("veryfirst")) ps.push("veryfirst");
            }
            if (bc === lastVisibleItem) {
                ps.push("last");
                if (!this.blade_ || this.blade_.get("positions").includes("verylast")) ps.push("verylast");
            }
            bc.blade.set("positions", ps);
        });
    }
    onChildPositionsChange_() {
        this.updatePositions_();
        this.emitter.emit("layout", {
            sender: this
        });
    }
    onChildViewPropsChange_(_ev) {
        this.updatePositions_();
        this.emitter.emit("layout", {
            sender: this
        });
    }
    onChildDispose_() {
        const disposedUcs = this.bcSet_.items.filter((bc)=>{
            return bc.viewProps.get("disposed");
        });
        disposedUcs.forEach((bc)=>{
            this.bcSet_.remove(bc);
        });
    }
    onChildValueChange_(ev) {
        const bc = findValueBladeController(this.find(isValueBladeController), ev.sender);
        if (!bc) throw TpError.alreadyDisposed();
        this.emitter.emit("valuechange", {
            bladeController: bc,
            options: ev.options,
            sender: this
        });
    }
    onRackLayout_(_) {
        this.updatePositions_();
        this.emitter.emit("layout", {
            sender: this
        });
    }
    onRackValueChange_(ev) {
        this.emitter.emit("valuechange", {
            bladeController: ev.bladeController,
            options: ev.options,
            sender: this
        });
    }
    onBladePositionsChange_() {
        this.updatePositions_();
    }
}
class RackController {
    constructor(config){
        this.onRackAdd_ = this.onRackAdd_.bind(this);
        this.onRackRemove_ = this.onRackRemove_.bind(this);
        this.element = config.element;
        this.viewProps = config.viewProps;
        const rack = new Rack({
            blade: config.root ? undefined : config.blade,
            viewProps: config.viewProps
        });
        rack.emitter.on("add", this.onRackAdd_);
        rack.emitter.on("remove", this.onRackRemove_);
        this.rack = rack;
        this.viewProps.handleDispose(()=>{
            for(let i = this.rack.children.length - 1; i >= 0; i--){
                const bc = this.rack.children[i];
                bc.viewProps.set("disposed", true);
            }
        });
    }
    onRackAdd_(ev) {
        if (!ev.root) return;
        insertElementAt(this.element, ev.bladeController.view.element, ev.index);
    }
    onRackRemove_(ev) {
        if (!ev.root) return;
        removeElement(ev.bladeController.view.element);
    }
}
function createBlade() {
    return new ValueMap({
        positions: createValue([], {
            equals: deepEqualsArray
        })
    });
}
class Foldable extends ValueMap {
    constructor(valueMap){
        super(valueMap);
    }
    static create(expanded) {
        const coreObj = {
            completed: true,
            expanded: expanded,
            expandedHeight: null,
            shouldFixHeight: false,
            temporaryExpanded: null
        };
        const core = ValueMap.createCore(coreObj);
        return new Foldable(core);
    }
    get styleExpanded() {
        var _a;
        return (_a = this.get("temporaryExpanded")) !== null && _a !== void 0 ? _a : this.get("expanded");
    }
    get styleHeight() {
        if (!this.styleExpanded) return "0";
        const exHeight = this.get("expandedHeight");
        if (this.get("shouldFixHeight") && !isEmpty(exHeight)) return `${exHeight}px`;
        return "auto";
    }
    bindExpandedClass(elem, expandedClassName) {
        const onExpand = ()=>{
            const expanded = this.styleExpanded;
            if (expanded) elem.classList.add(expandedClassName);
            else elem.classList.remove(expandedClassName);
        };
        bindValueMap(this, "expanded", onExpand);
        bindValueMap(this, "temporaryExpanded", onExpand);
    }
    cleanUpTransition() {
        this.set("shouldFixHeight", false);
        this.set("expandedHeight", null);
        this.set("completed", true);
    }
}
function computeExpandedFolderHeight(folder, containerElement) {
    let height = 0;
    disableTransitionTemporarily(containerElement, ()=>{
        folder.set("expandedHeight", null);
        folder.set("temporaryExpanded", true);
        forceReflow(containerElement);
        height = containerElement.clientHeight;
        folder.set("temporaryExpanded", null);
        forceReflow(containerElement);
    });
    return height;
}
function applyHeight(foldable, elem) {
    elem.style.height = foldable.styleHeight;
}
function bindFoldable(foldable, elem) {
    foldable.value("expanded").emitter.on("beforechange", ()=>{
        foldable.set("completed", false);
        if (isEmpty(foldable.get("expandedHeight"))) {
            const h = computeExpandedFolderHeight(foldable, elem);
            if (h > 0) foldable.set("expandedHeight", h);
        }
        foldable.set("shouldFixHeight", true);
        forceReflow(elem);
    });
    foldable.emitter.on("change", ()=>{
        applyHeight(foldable, elem);
    });
    applyHeight(foldable, elem);
    elem.addEventListener("transitionend", (ev)=>{
        if (ev.propertyName !== "height") return;
        foldable.cleanUpTransition();
    });
}
class FolderApi extends ContainerBladeApi {
    constructor(controller, pool){
        super(controller, pool);
        this.emitter_ = new Emitter();
        this.controller.foldable.value("expanded").emitter.on("change", (ev)=>{
            this.emitter_.emit("fold", new TpFoldEvent(this, ev.sender.rawValue));
        });
        this.rackApi_.on("change", (ev)=>{
            this.emitter_.emit("change", ev);
        });
    }
    get expanded() {
        return this.controller.foldable.get("expanded");
    }
    set expanded(expanded) {
        this.controller.foldable.set("expanded", expanded);
    }
    get title() {
        return this.controller.props.get("title");
    }
    set title(title) {
        this.controller.props.set("title", title);
    }
    get children() {
        return this.rackApi_.children;
    }
    addBinding(object, key, opt_params) {
        return this.rackApi_.addBinding(object, key, opt_params);
    }
    addFolder(params) {
        return this.rackApi_.addFolder(params);
    }
    addButton(params) {
        return this.rackApi_.addButton(params);
    }
    addTab(params) {
        return this.rackApi_.addTab(params);
    }
    add(api, opt_index) {
        return this.rackApi_.add(api, opt_index);
    }
    remove(api) {
        this.rackApi_.remove(api);
    }
    addBlade(params) {
        return this.rackApi_.addBlade(params);
    }
    on(eventName, handler) {
        const bh = handler.bind(this);
        this.emitter_.on(eventName, (ev)=>{
            bh(ev);
        }, {
            key: handler
        });
        return this;
    }
    off(eventName, handler) {
        this.emitter_.off(eventName, handler);
        return this;
    }
}
const bladeContainerClassName = ClassName("cnt");
class FolderView {
    constructor(doc, config){
        var _a;
        this.className_ = ClassName((_a = config.viewName) !== null && _a !== void 0 ? _a : "fld");
        this.element = doc.createElement("div");
        this.element.classList.add(this.className_(), bladeContainerClassName());
        config.viewProps.bindClassModifiers(this.element);
        this.foldable_ = config.foldable;
        this.foldable_.bindExpandedClass(this.element, this.className_(undefined, "expanded"));
        bindValueMap(this.foldable_, "completed", valueToClassName(this.element, this.className_(undefined, "cpl")));
        const buttonElem = doc.createElement("button");
        buttonElem.classList.add(this.className_("b"));
        bindValueMap(config.props, "title", (title)=>{
            if (isEmpty(title)) this.element.classList.add(this.className_(undefined, "not"));
            else this.element.classList.remove(this.className_(undefined, "not"));
        });
        config.viewProps.bindDisabled(buttonElem);
        this.element.appendChild(buttonElem);
        this.buttonElement = buttonElem;
        const indentElem = doc.createElement("div");
        indentElem.classList.add(this.className_("i"));
        this.element.appendChild(indentElem);
        const titleElem = doc.createElement("div");
        titleElem.classList.add(this.className_("t"));
        bindValueToTextContent(config.props.value("title"), titleElem);
        this.buttonElement.appendChild(titleElem);
        this.titleElement = titleElem;
        const markElem = doc.createElement("div");
        markElem.classList.add(this.className_("m"));
        this.buttonElement.appendChild(markElem);
        const containerElem = doc.createElement("div");
        containerElem.classList.add(this.className_("c"));
        this.element.appendChild(containerElem);
        this.containerElement = containerElem;
    }
}
class FolderController extends ContainerBladeController {
    constructor(doc, config){
        var _a;
        const foldable = Foldable.create((_a = config.expanded) !== null && _a !== void 0 ? _a : true);
        const view = new FolderView(doc, {
            foldable: foldable,
            props: config.props,
            viewName: config.root ? "rot" : undefined,
            viewProps: config.viewProps
        });
        super(Object.assign(Object.assign({}, config), {
            rackController: new RackController({
                blade: config.blade,
                element: view.containerElement,
                root: config.root,
                viewProps: config.viewProps
            }),
            view: view
        }));
        this.onTitleClick_ = this.onTitleClick_.bind(this);
        this.props = config.props;
        this.foldable = foldable;
        bindFoldable(this.foldable, this.view.containerElement);
        this.rackController.rack.emitter.on("add", ()=>{
            this.foldable.cleanUpTransition();
        });
        this.rackController.rack.emitter.on("remove", ()=>{
            this.foldable.cleanUpTransition();
        });
        this.view.buttonElement.addEventListener("click", this.onTitleClick_);
    }
    get document() {
        return this.view.element.ownerDocument;
    }
    importState(state) {
        return importBladeState(state, (s)=>super.importState(s), (p)=>({
                expanded: p.required.boolean,
                title: p.optional.string
            }), (result)=>{
            this.foldable.set("expanded", result.expanded);
            this.props.set("title", result.title);
            return true;
        });
    }
    exportState() {
        return exportBladeState(()=>super.exportState(), {
            expanded: this.foldable.get("expanded"),
            title: this.props.get("title")
        });
    }
    onTitleClick_() {
        this.foldable.set("expanded", !this.foldable.get("expanded"));
    }
}
const FolderBladePlugin = createPlugin({
    id: "folder",
    type: "blade",
    accept (params) {
        const result = parseRecord(params, (p)=>({
                title: p.required.string,
                view: p.required.constant("folder"),
                expanded: p.optional.boolean
            }));
        return result ? {
            params: result
        } : null;
    },
    controller (args) {
        return new FolderController(args.document, {
            blade: args.blade,
            expanded: args.params.expanded,
            props: ValueMap.fromObject({
                title: args.params.title
            }),
            viewProps: args.viewProps
        });
    },
    api (args) {
        if (!(args.controller instanceof FolderController)) return null;
        return new FolderApi(args.controller, args.pool);
    }
});
const cn$o = ClassName("");
function valueToModifier(elem, modifier) {
    return valueToClassName(elem, cn$o(undefined, modifier));
}
class ViewProps extends ValueMap {
    constructor(valueMap){
        var _a;
        super(valueMap);
        this.onDisabledChange_ = this.onDisabledChange_.bind(this);
        this.onParentChange_ = this.onParentChange_.bind(this);
        this.onParentGlobalDisabledChange_ = this.onParentGlobalDisabledChange_.bind(this);
        [this.globalDisabled_, this.setGlobalDisabled_] = createReadonlyValue(createValue(this.getGlobalDisabled_()));
        this.value("disabled").emitter.on("change", this.onDisabledChange_);
        this.value("parent").emitter.on("change", this.onParentChange_);
        (_a = this.get("parent")) === null || _a === void 0 || _a.globalDisabled.emitter.on("change", this.onParentGlobalDisabledChange_);
    }
    static create(opt_initialValue) {
        var _a, _b, _c;
        const initialValue = opt_initialValue !== null && opt_initialValue !== void 0 ? opt_initialValue : {};
        return new ViewProps(ValueMap.createCore({
            disabled: (_a = initialValue.disabled) !== null && _a !== void 0 ? _a : false,
            disposed: false,
            hidden: (_b = initialValue.hidden) !== null && _b !== void 0 ? _b : false,
            parent: (_c = initialValue.parent) !== null && _c !== void 0 ? _c : null
        }));
    }
    get globalDisabled() {
        return this.globalDisabled_;
    }
    bindClassModifiers(elem) {
        bindValue(this.globalDisabled_, valueToModifier(elem, "disabled"));
        bindValueMap(this, "hidden", valueToModifier(elem, "hidden"));
    }
    bindDisabled(target) {
        bindValue(this.globalDisabled_, (disabled)=>{
            target.disabled = disabled;
        });
    }
    bindTabIndex(elem) {
        bindValue(this.globalDisabled_, (disabled)=>{
            elem.tabIndex = disabled ? -1 : 0;
        });
    }
    handleDispose(callback) {
        this.value("disposed").emitter.on("change", (disposed)=>{
            if (disposed) callback();
        });
    }
    importState(state) {
        this.set("disabled", state.disabled);
        this.set("hidden", state.hidden);
    }
    exportState() {
        return {
            disabled: this.get("disabled"),
            hidden: this.get("hidden")
        };
    }
    getGlobalDisabled_() {
        const parent = this.get("parent");
        const parentDisabled = parent ? parent.globalDisabled.rawValue : false;
        return parentDisabled || this.get("disabled");
    }
    updateGlobalDisabled_() {
        this.setGlobalDisabled_(this.getGlobalDisabled_());
    }
    onDisabledChange_() {
        this.updateGlobalDisabled_();
    }
    onParentGlobalDisabledChange_() {
        this.updateGlobalDisabled_();
    }
    onParentChange_(ev) {
        var _a;
        const prevParent = ev.previousRawValue;
        prevParent === null || prevParent === void 0 || prevParent.globalDisabled.emitter.off("change", this.onParentGlobalDisabledChange_);
        (_a = this.get("parent")) === null || _a === void 0 || _a.globalDisabled.emitter.on("change", this.onParentGlobalDisabledChange_);
        this.updateGlobalDisabled_();
    }
}
const cn$n = ClassName("tbp");
class TabPageView {
    constructor(doc, config){
        this.element = doc.createElement("div");
        this.element.classList.add(cn$n());
        config.viewProps.bindClassModifiers(this.element);
        const containerElem = doc.createElement("div");
        containerElem.classList.add(cn$n("c"));
        this.element.appendChild(containerElem);
        this.containerElement = containerElem;
    }
}
const cn$m = ClassName("tbi");
class TabItemView {
    constructor(doc, config){
        this.element = doc.createElement("div");
        this.element.classList.add(cn$m());
        config.viewProps.bindClassModifiers(this.element);
        bindValueMap(config.props, "selected", (selected)=>{
            if (selected) this.element.classList.add(cn$m(undefined, "sel"));
            else this.element.classList.remove(cn$m(undefined, "sel"));
        });
        const buttonElem = doc.createElement("button");
        buttonElem.classList.add(cn$m("b"));
        config.viewProps.bindDisabled(buttonElem);
        this.element.appendChild(buttonElem);
        this.buttonElement = buttonElem;
        const titleElem = doc.createElement("div");
        titleElem.classList.add(cn$m("t"));
        bindValueToTextContent(config.props.value("title"), titleElem);
        this.buttonElement.appendChild(titleElem);
        this.titleElement = titleElem;
    }
}
class TabItemController {
    constructor(doc, config){
        this.emitter = new Emitter();
        this.onClick_ = this.onClick_.bind(this);
        this.props = config.props;
        this.viewProps = config.viewProps;
        this.view = new TabItemView(doc, {
            props: config.props,
            viewProps: config.viewProps
        });
        this.view.buttonElement.addEventListener("click", this.onClick_);
    }
    onClick_() {
        this.emitter.emit("click", {
            sender: this
        });
    }
}
class TabPageController extends ContainerBladeController {
    constructor(doc, config){
        const view = new TabPageView(doc, {
            viewProps: config.viewProps
        });
        super(Object.assign(Object.assign({}, config), {
            rackController: new RackController({
                blade: config.blade,
                element: view.containerElement,
                viewProps: config.viewProps
            }),
            view: view
        }));
        this.onItemClick_ = this.onItemClick_.bind(this);
        this.ic_ = new TabItemController(doc, {
            props: config.itemProps,
            viewProps: ViewProps.create()
        });
        this.ic_.emitter.on("click", this.onItemClick_);
        this.props = config.props;
        bindValueMap(this.props, "selected", (selected)=>{
            this.itemController.props.set("selected", selected);
            this.viewProps.set("hidden", !selected);
        });
    }
    get itemController() {
        return this.ic_;
    }
    importState(state) {
        return importBladeState(state, (s)=>super.importState(s), (p)=>({
                selected: p.required.boolean,
                title: p.required.string
            }), (result)=>{
            this.ic_.props.set("selected", result.selected);
            this.ic_.props.set("title", result.title);
            return true;
        });
    }
    exportState() {
        return exportBladeState(()=>super.exportState(), {
            selected: this.ic_.props.get("selected"),
            title: this.ic_.props.get("title")
        });
    }
    onItemClick_() {
        this.props.set("selected", true);
    }
}
class TabApi extends ContainerBladeApi {
    constructor(controller, pool){
        super(controller, pool);
        this.emitter_ = new Emitter();
        this.onSelect_ = this.onSelect_.bind(this);
        this.pool_ = pool;
        this.rackApi_.on("change", (ev)=>{
            this.emitter_.emit("change", ev);
        });
        this.controller.tab.selectedIndex.emitter.on("change", this.onSelect_);
    }
    get pages() {
        return this.rackApi_.children;
    }
    addPage(params) {
        const doc = this.controller.view.element.ownerDocument;
        const pc = new TabPageController(doc, {
            blade: createBlade(),
            itemProps: ValueMap.fromObject({
                selected: false,
                title: params.title
            }),
            props: ValueMap.fromObject({
                selected: false
            }),
            viewProps: ViewProps.create()
        });
        const papi = this.pool_.createApi(pc);
        return this.rackApi_.add(papi, params.index);
    }
    removePage(index) {
        this.rackApi_.remove(this.rackApi_.children[index]);
    }
    on(eventName, handler) {
        const bh = handler.bind(this);
        this.emitter_.on(eventName, (ev)=>{
            bh(ev);
        }, {
            key: handler
        });
        return this;
    }
    off(eventName, handler) {
        this.emitter_.off(eventName, handler);
        return this;
    }
    onSelect_(ev) {
        this.emitter_.emit("select", new TpTabSelectEvent(this, ev.rawValue));
    }
}
class TabPageApi extends ContainerBladeApi {
    get title() {
        var _a;
        return (_a = this.controller.itemController.props.get("title")) !== null && _a !== void 0 ? _a : "";
    }
    set title(title) {
        this.controller.itemController.props.set("title", title);
    }
    get selected() {
        return this.controller.props.get("selected");
    }
    set selected(selected) {
        this.controller.props.set("selected", selected);
    }
    get children() {
        return this.rackApi_.children;
    }
    addButton(params) {
        return this.rackApi_.addButton(params);
    }
    addFolder(params) {
        return this.rackApi_.addFolder(params);
    }
    addTab(params) {
        return this.rackApi_.addTab(params);
    }
    add(api, opt_index) {
        this.rackApi_.add(api, opt_index);
    }
    remove(api) {
        this.rackApi_.remove(api);
    }
    addBinding(object, key, opt_params) {
        return this.rackApi_.addBinding(object, key, opt_params);
    }
    addBlade(params) {
        return this.rackApi_.addBlade(params);
    }
}
const INDEX_NOT_SELECTED = -1;
class Tab {
    constructor(){
        this.onItemSelectedChange_ = this.onItemSelectedChange_.bind(this);
        this.empty = createValue(true);
        this.selectedIndex = createValue(INDEX_NOT_SELECTED);
        this.items_ = [];
    }
    add(item, opt_index) {
        const index = opt_index !== null && opt_index !== void 0 ? opt_index : this.items_.length;
        this.items_.splice(index, 0, item);
        item.emitter.on("change", this.onItemSelectedChange_);
        this.keepSelection_();
    }
    remove(item) {
        const index = this.items_.indexOf(item);
        if (index < 0) return;
        this.items_.splice(index, 1);
        item.emitter.off("change", this.onItemSelectedChange_);
        this.keepSelection_();
    }
    keepSelection_() {
        if (this.items_.length === 0) {
            this.selectedIndex.rawValue = INDEX_NOT_SELECTED;
            this.empty.rawValue = true;
            return;
        }
        const firstSelIndex = this.items_.findIndex((s)=>s.rawValue);
        if (firstSelIndex < 0) {
            this.items_.forEach((s, i)=>{
                s.rawValue = i === 0;
            });
            this.selectedIndex.rawValue = 0;
        } else {
            this.items_.forEach((s, i)=>{
                s.rawValue = i === firstSelIndex;
            });
            this.selectedIndex.rawValue = firstSelIndex;
        }
        this.empty.rawValue = false;
    }
    onItemSelectedChange_(ev) {
        if (ev.rawValue) {
            const index = this.items_.findIndex((s)=>s === ev.sender);
            this.items_.forEach((s, i)=>{
                s.rawValue = i === index;
            });
            this.selectedIndex.rawValue = index;
        } else this.keepSelection_();
    }
}
const cn$l = ClassName("tab");
class TabView {
    constructor(doc, config){
        this.element = doc.createElement("div");
        this.element.classList.add(cn$l(), bladeContainerClassName());
        config.viewProps.bindClassModifiers(this.element);
        bindValue(config.empty, valueToClassName(this.element, cn$l(undefined, "nop")));
        const titleElem = doc.createElement("div");
        titleElem.classList.add(cn$l("t"));
        this.element.appendChild(titleElem);
        this.itemsElement = titleElem;
        const indentElem = doc.createElement("div");
        indentElem.classList.add(cn$l("i"));
        this.element.appendChild(indentElem);
        const contentsElem = doc.createElement("div");
        contentsElem.classList.add(cn$l("c"));
        this.element.appendChild(contentsElem);
        this.contentsElement = contentsElem;
    }
}
class TabController extends ContainerBladeController {
    constructor(doc, config){
        const tab = new Tab();
        const view = new TabView(doc, {
            empty: tab.empty,
            viewProps: config.viewProps
        });
        super({
            blade: config.blade,
            rackController: new RackController({
                blade: config.blade,
                element: view.contentsElement,
                viewProps: config.viewProps
            }),
            view: view
        });
        this.onRackAdd_ = this.onRackAdd_.bind(this);
        this.onRackRemove_ = this.onRackRemove_.bind(this);
        const rack = this.rackController.rack;
        rack.emitter.on("add", this.onRackAdd_);
        rack.emitter.on("remove", this.onRackRemove_);
        this.tab = tab;
    }
    add(pc, opt_index) {
        this.rackController.rack.add(pc, opt_index);
    }
    remove(index) {
        this.rackController.rack.remove(this.rackController.rack.children[index]);
    }
    onRackAdd_(ev) {
        if (!ev.root) return;
        const pc = ev.bladeController;
        insertElementAt(this.view.itemsElement, pc.itemController.view.element, ev.index);
        pc.itemController.viewProps.set("parent", this.viewProps);
        this.tab.add(pc.props.value("selected"));
    }
    onRackRemove_(ev) {
        if (!ev.root) return;
        const pc = ev.bladeController;
        removeElement(pc.itemController.view.element);
        pc.itemController.viewProps.set("parent", null);
        this.tab.remove(pc.props.value("selected"));
    }
}
const TabBladePlugin = createPlugin({
    id: "tab",
    type: "blade",
    accept (params) {
        const result = parseRecord(params, (p)=>({
                pages: p.required.array(p.required.object({
                    title: p.required.string
                })),
                view: p.required.constant("tab")
            }));
        if (!result || result.pages.length === 0) return null;
        return {
            params: result
        };
    },
    controller (args) {
        const c = new TabController(args.document, {
            blade: args.blade,
            viewProps: args.viewProps
        });
        args.params.pages.forEach((p)=>{
            const pc = new TabPageController(args.document, {
                blade: createBlade(),
                itemProps: ValueMap.fromObject({
                    selected: false,
                    title: p.title
                }),
                props: ValueMap.fromObject({
                    selected: false
                }),
                viewProps: ViewProps.create()
            });
            c.add(pc);
        });
        return c;
    },
    api (args) {
        if (args.controller instanceof TabController) return new TabApi(args.controller, args.pool);
        if (args.controller instanceof TabPageController) return new TabPageApi(args.controller, args.pool);
        return null;
    }
});
function createBladeController(plugin, args) {
    const ac = plugin.accept(args.params);
    if (!ac) return null;
    const params = parseRecord(args.params, (p)=>({
            disabled: p.optional.boolean,
            hidden: p.optional.boolean
        }));
    return plugin.controller({
        blade: createBlade(),
        document: args.document,
        params: forceCast(Object.assign(Object.assign({}, ac.params), {
            disabled: params === null || params === void 0 ? void 0 : params.disabled,
            hidden: params === null || params === void 0 ? void 0 : params.hidden
        })),
        viewProps: ViewProps.create({
            disabled: params === null || params === void 0 ? void 0 : params.disabled,
            hidden: params === null || params === void 0 ? void 0 : params.hidden
        })
    });
}
class ListInputBindingApi extends BindingApi {
    get options() {
        return this.controller.valueController.props.get("options");
    }
    set options(options) {
        this.controller.valueController.props.set("options", options);
    }
}
class ManualTicker {
    constructor(){
        this.disabled = false;
        this.emitter = new Emitter();
    }
    dispose() {}
    tick() {
        if (this.disabled) return;
        this.emitter.emit("tick", {
            sender: this
        });
    }
}
class IntervalTicker {
    constructor(doc, interval){
        this.disabled_ = false;
        this.timerId_ = null;
        this.onTick_ = this.onTick_.bind(this);
        this.doc_ = doc;
        this.emitter = new Emitter();
        this.interval_ = interval;
        this.setTimer_();
    }
    get disabled() {
        return this.disabled_;
    }
    set disabled(inactive) {
        this.disabled_ = inactive;
        if (this.disabled_) this.clearTimer_();
        else this.setTimer_();
    }
    dispose() {
        this.clearTimer_();
    }
    clearTimer_() {
        if (this.timerId_ === null) return;
        const win = this.doc_.defaultView;
        if (win) win.clearInterval(this.timerId_);
        this.timerId_ = null;
    }
    setTimer_() {
        this.clearTimer_();
        if (this.interval_ <= 0) return;
        const win = this.doc_.defaultView;
        if (win) this.timerId_ = win.setInterval(this.onTick_, this.interval_);
    }
    onTick_() {
        if (this.disabled_) return;
        this.emitter.emit("tick", {
            sender: this
        });
    }
}
class CompositeConstraint {
    constructor(constraints){
        this.constraints = constraints;
    }
    constrain(value) {
        return this.constraints.reduce((result, c)=>{
            return c.constrain(result);
        }, value);
    }
}
function findConstraint(c, constraintClass) {
    if (c instanceof constraintClass) return c;
    if (c instanceof CompositeConstraint) {
        const result = c.constraints.reduce((tmpResult, sc)=>{
            if (tmpResult) return tmpResult;
            return sc instanceof constraintClass ? sc : null;
        }, null);
        if (result) return result;
    }
    return null;
}
class ListConstraint {
    constructor(options){
        this.values = ValueMap.fromObject({
            options: options
        });
    }
    constrain(value) {
        const opts = this.values.get("options");
        if (opts.length === 0) return value;
        const matched = opts.filter((item)=>{
            return item.value === value;
        }).length > 0;
        return matched ? value : opts[0].value;
    }
}
function parseListOptions(value) {
    var _a;
    const p = MicroParsers;
    if (Array.isArray(value)) return (_a = parseRecord({
        items: value
    }, (p)=>({
            items: p.required.array(p.required.object({
                text: p.required.string,
                value: p.required.raw
            }))
        }))) === null || _a === void 0 ? void 0 : _a.items;
    if (typeof value === "object") return p.required.raw(value).value;
    return undefined;
}
function normalizeListOptions(options) {
    if (Array.isArray(options)) return options;
    const items = [];
    Object.keys(options).forEach((text)=>{
        items.push({
            text: text,
            value: options[text]
        });
    });
    return items;
}
function createListConstraint(options) {
    return !isEmpty(options) ? new ListConstraint(normalizeListOptions(forceCast(options))) : null;
}
const cn$k = ClassName("lst");
class ListView {
    constructor(doc, config){
        this.onValueChange_ = this.onValueChange_.bind(this);
        this.props_ = config.props;
        this.element = doc.createElement("div");
        this.element.classList.add(cn$k());
        config.viewProps.bindClassModifiers(this.element);
        const selectElem = doc.createElement("select");
        selectElem.classList.add(cn$k("s"));
        config.viewProps.bindDisabled(selectElem);
        this.element.appendChild(selectElem);
        this.selectElement = selectElem;
        const markElem = doc.createElement("div");
        markElem.classList.add(cn$k("m"));
        markElem.appendChild(createSvgIconElement(doc, "dropdown"));
        this.element.appendChild(markElem);
        config.value.emitter.on("change", this.onValueChange_);
        this.value_ = config.value;
        bindValueMap(this.props_, "options", (opts)=>{
            removeChildElements(this.selectElement);
            opts.forEach((item)=>{
                const optionElem = doc.createElement("option");
                optionElem.textContent = item.text;
                this.selectElement.appendChild(optionElem);
            });
            this.update_();
        });
    }
    update_() {
        const values = this.props_.get("options").map((o)=>o.value);
        this.selectElement.selectedIndex = values.indexOf(this.value_.rawValue);
    }
    onValueChange_() {
        this.update_();
    }
}
class ListController {
    constructor(doc, config){
        this.onSelectChange_ = this.onSelectChange_.bind(this);
        this.props = config.props;
        this.value = config.value;
        this.viewProps = config.viewProps;
        this.view = new ListView(doc, {
            props: this.props,
            value: this.value,
            viewProps: this.viewProps
        });
        this.view.selectElement.addEventListener("change", this.onSelectChange_);
    }
    onSelectChange_(e) {
        const selectElem = forceCast(e.currentTarget);
        this.value.rawValue = this.props.get("options")[selectElem.selectedIndex].value;
    }
    importProps(state) {
        return importBladeState(state, null, (p)=>({
                options: p.required.custom(parseListOptions)
            }), (result)=>{
            this.props.set("options", normalizeListOptions(result.options));
            return true;
        });
    }
    exportProps() {
        return exportBladeState(null, {
            options: this.props.get("options")
        });
    }
}
const cn$j = ClassName("pop");
class PopupView {
    constructor(doc, config){
        this.element = doc.createElement("div");
        this.element.classList.add(cn$j());
        config.viewProps.bindClassModifiers(this.element);
        bindValue(config.shows, valueToClassName(this.element, cn$j(undefined, "v")));
    }
}
class PopupController {
    constructor(doc, config){
        this.shows = createValue(false);
        this.viewProps = config.viewProps;
        this.view = new PopupView(doc, {
            shows: this.shows,
            viewProps: this.viewProps
        });
    }
}
const cn$i = ClassName("txt");
class TextView {
    constructor(doc, config){
        this.onChange_ = this.onChange_.bind(this);
        this.element = doc.createElement("div");
        this.element.classList.add(cn$i());
        config.viewProps.bindClassModifiers(this.element);
        this.props_ = config.props;
        this.props_.emitter.on("change", this.onChange_);
        const inputElem = doc.createElement("input");
        inputElem.classList.add(cn$i("i"));
        inputElem.type = "text";
        config.viewProps.bindDisabled(inputElem);
        this.element.appendChild(inputElem);
        this.inputElement = inputElem;
        config.value.emitter.on("change", this.onChange_);
        this.value_ = config.value;
        this.refresh();
    }
    refresh() {
        const formatter = this.props_.get("formatter");
        this.inputElement.value = formatter(this.value_.rawValue);
    }
    onChange_() {
        this.refresh();
    }
}
class TextController {
    constructor(doc, config){
        this.onInputChange_ = this.onInputChange_.bind(this);
        this.parser_ = config.parser;
        this.props = config.props;
        this.value = config.value;
        this.viewProps = config.viewProps;
        this.view = new TextView(doc, {
            props: config.props,
            value: this.value,
            viewProps: this.viewProps
        });
        this.view.inputElement.addEventListener("change", this.onInputChange_);
    }
    onInputChange_(e) {
        const inputElem = forceCast(e.currentTarget);
        const value = inputElem.value;
        const parsedValue = this.parser_(value);
        if (!isEmpty(parsedValue)) this.value.rawValue = parsedValue;
        this.view.refresh();
    }
}
function boolToString(value) {
    return String(value);
}
function boolFromUnknown(value) {
    if (value === "false") return false;
    return !!value;
}
function BooleanFormatter(value) {
    return boolToString(value);
}
function composeParsers(parsers) {
    return (text)=>{
        return parsers.reduce((result, parser)=>{
            if (result !== null) return result;
            return parser(text);
        }, null);
    };
}
const innerFormatter = createNumberFormatter(0);
function formatPercentage(value) {
    return innerFormatter(value) + "%";
}
function stringFromUnknown(value) {
    return String(value);
}
function formatString(value) {
    return value;
}
function connectValues({ primary, secondary, forward, backward }) {
    let changing = false;
    function preventFeedback(callback) {
        if (changing) return;
        changing = true;
        callback();
        changing = false;
    }
    primary.emitter.on("change", (ev)=>{
        preventFeedback(()=>{
            secondary.setRawValue(forward(primary.rawValue, secondary.rawValue), ev.options);
        });
    });
    secondary.emitter.on("change", (ev)=>{
        preventFeedback(()=>{
            primary.setRawValue(backward(primary.rawValue, secondary.rawValue), ev.options);
        });
        preventFeedback(()=>{
            secondary.setRawValue(forward(primary.rawValue, secondary.rawValue), ev.options);
        });
    });
    preventFeedback(()=>{
        secondary.setRawValue(forward(primary.rawValue, secondary.rawValue), {
            forceEmit: false,
            last: true
        });
    });
}
function getStepForKey(keyScale, keys) {
    const step = keyScale * (keys.altKey ? 0.1 : 1) * (keys.shiftKey ? 10 : 1);
    if (keys.upKey) return +step;
    else if (keys.downKey) return -step;
    return 0;
}
function getVerticalStepKeys(ev) {
    return {
        altKey: ev.altKey,
        downKey: ev.key === "ArrowDown",
        shiftKey: ev.shiftKey,
        upKey: ev.key === "ArrowUp"
    };
}
function getHorizontalStepKeys(ev) {
    return {
        altKey: ev.altKey,
        downKey: ev.key === "ArrowLeft",
        shiftKey: ev.shiftKey,
        upKey: ev.key === "ArrowRight"
    };
}
function isVerticalArrowKey(key) {
    return key === "ArrowUp" || key === "ArrowDown";
}
function isArrowKey(key) {
    return isVerticalArrowKey(key) || key === "ArrowLeft" || key === "ArrowRight";
}
function computeOffset$1(ev, elem) {
    var _a, _b;
    const win = elem.ownerDocument.defaultView;
    const rect = elem.getBoundingClientRect();
    return {
        x: ev.pageX - (((_a = win && win.scrollX) !== null && _a !== void 0 ? _a : 0) + rect.left),
        y: ev.pageY - (((_b = win && win.scrollY) !== null && _b !== void 0 ? _b : 0) + rect.top)
    };
}
class PointerHandler {
    constructor(element){
        this.lastTouch_ = null;
        this.onDocumentMouseMove_ = this.onDocumentMouseMove_.bind(this);
        this.onDocumentMouseUp_ = this.onDocumentMouseUp_.bind(this);
        this.onMouseDown_ = this.onMouseDown_.bind(this);
        this.onTouchEnd_ = this.onTouchEnd_.bind(this);
        this.onTouchMove_ = this.onTouchMove_.bind(this);
        this.onTouchStart_ = this.onTouchStart_.bind(this);
        this.elem_ = element;
        this.emitter = new Emitter();
        element.addEventListener("touchstart", this.onTouchStart_, {
            passive: false
        });
        element.addEventListener("touchmove", this.onTouchMove_, {
            passive: true
        });
        element.addEventListener("touchend", this.onTouchEnd_);
        element.addEventListener("mousedown", this.onMouseDown_);
    }
    computePosition_(offset) {
        const rect = this.elem_.getBoundingClientRect();
        return {
            bounds: {
                width: rect.width,
                height: rect.height
            },
            point: offset ? {
                x: offset.x,
                y: offset.y
            } : null
        };
    }
    onMouseDown_(ev) {
        var _a;
        ev.preventDefault();
        (_a = ev.currentTarget) === null || _a === void 0 || _a.focus();
        const doc = this.elem_.ownerDocument;
        doc.addEventListener("mousemove", this.onDocumentMouseMove_);
        doc.addEventListener("mouseup", this.onDocumentMouseUp_);
        this.emitter.emit("down", {
            altKey: ev.altKey,
            data: this.computePosition_(computeOffset$1(ev, this.elem_)),
            sender: this,
            shiftKey: ev.shiftKey
        });
    }
    onDocumentMouseMove_(ev) {
        this.emitter.emit("move", {
            altKey: ev.altKey,
            data: this.computePosition_(computeOffset$1(ev, this.elem_)),
            sender: this,
            shiftKey: ev.shiftKey
        });
    }
    onDocumentMouseUp_(ev) {
        const doc = this.elem_.ownerDocument;
        doc.removeEventListener("mousemove", this.onDocumentMouseMove_);
        doc.removeEventListener("mouseup", this.onDocumentMouseUp_);
        this.emitter.emit("up", {
            altKey: ev.altKey,
            data: this.computePosition_(computeOffset$1(ev, this.elem_)),
            sender: this,
            shiftKey: ev.shiftKey
        });
    }
    onTouchStart_(ev) {
        ev.preventDefault();
        const touch = ev.targetTouches.item(0);
        const rect = this.elem_.getBoundingClientRect();
        this.emitter.emit("down", {
            altKey: ev.altKey,
            data: this.computePosition_(touch ? {
                x: touch.clientX - rect.left,
                y: touch.clientY - rect.top
            } : undefined),
            sender: this,
            shiftKey: ev.shiftKey
        });
        this.lastTouch_ = touch;
    }
    onTouchMove_(ev) {
        const touch = ev.targetTouches.item(0);
        const rect = this.elem_.getBoundingClientRect();
        this.emitter.emit("move", {
            altKey: ev.altKey,
            data: this.computePosition_(touch ? {
                x: touch.clientX - rect.left,
                y: touch.clientY - rect.top
            } : undefined),
            sender: this,
            shiftKey: ev.shiftKey
        });
        this.lastTouch_ = touch;
    }
    onTouchEnd_(ev) {
        var _a;
        const touch = (_a = ev.targetTouches.item(0)) !== null && _a !== void 0 ? _a : this.lastTouch_;
        const rect = this.elem_.getBoundingClientRect();
        this.emitter.emit("up", {
            altKey: ev.altKey,
            data: this.computePosition_(touch ? {
                x: touch.clientX - rect.left,
                y: touch.clientY - rect.top
            } : undefined),
            sender: this,
            shiftKey: ev.shiftKey
        });
    }
}
const cn$h = ClassName("txt");
class NumberTextView {
    constructor(doc, config){
        this.onChange_ = this.onChange_.bind(this);
        this.props_ = config.props;
        this.props_.emitter.on("change", this.onChange_);
        this.element = doc.createElement("div");
        this.element.classList.add(cn$h(), cn$h(undefined, "num"));
        if (config.arrayPosition) this.element.classList.add(cn$h(undefined, config.arrayPosition));
        config.viewProps.bindClassModifiers(this.element);
        const inputElem = doc.createElement("input");
        inputElem.classList.add(cn$h("i"));
        inputElem.type = "text";
        config.viewProps.bindDisabled(inputElem);
        this.element.appendChild(inputElem);
        this.inputElement = inputElem;
        this.onDraggingChange_ = this.onDraggingChange_.bind(this);
        this.dragging_ = config.dragging;
        this.dragging_.emitter.on("change", this.onDraggingChange_);
        this.element.classList.add(cn$h());
        this.inputElement.classList.add(cn$h("i"));
        const knobElem = doc.createElement("div");
        knobElem.classList.add(cn$h("k"));
        this.element.appendChild(knobElem);
        this.knobElement = knobElem;
        const guideElem = doc.createElementNS(SVG_NS, "svg");
        guideElem.classList.add(cn$h("g"));
        this.knobElement.appendChild(guideElem);
        const bodyElem = doc.createElementNS(SVG_NS, "path");
        bodyElem.classList.add(cn$h("gb"));
        guideElem.appendChild(bodyElem);
        this.guideBodyElem_ = bodyElem;
        const headElem = doc.createElementNS(SVG_NS, "path");
        headElem.classList.add(cn$h("gh"));
        guideElem.appendChild(headElem);
        this.guideHeadElem_ = headElem;
        const tooltipElem = doc.createElement("div");
        tooltipElem.classList.add(ClassName("tt")());
        this.knobElement.appendChild(tooltipElem);
        this.tooltipElem_ = tooltipElem;
        config.value.emitter.on("change", this.onChange_);
        this.value = config.value;
        this.refresh();
    }
    onDraggingChange_(ev) {
        if (ev.rawValue === null) {
            this.element.classList.remove(cn$h(undefined, "drg"));
            return;
        }
        this.element.classList.add(cn$h(undefined, "drg"));
        const x = ev.rawValue / this.props_.get("pointerScale");
        const aox = x + (x > 0 ? -1 : x < 0 ? 1 : 0);
        const adx = constrainRange(-aox, -4, 4);
        this.guideHeadElem_.setAttributeNS(null, "d", [
            `M ${aox + adx},0 L${aox},4 L${aox + adx},8`,
            `M ${x},-1 L${x},9`
        ].join(" "));
        this.guideBodyElem_.setAttributeNS(null, "d", `M 0,4 L${x},4`);
        const formatter = this.props_.get("formatter");
        this.tooltipElem_.textContent = formatter(this.value.rawValue);
        this.tooltipElem_.style.left = `${x}px`;
    }
    refresh() {
        const formatter = this.props_.get("formatter");
        this.inputElement.value = formatter(this.value.rawValue);
    }
    onChange_() {
        this.refresh();
    }
}
class NumberTextController {
    constructor(doc, config){
        var _a;
        this.originRawValue_ = 0;
        this.onInputChange_ = this.onInputChange_.bind(this);
        this.onInputKeyDown_ = this.onInputKeyDown_.bind(this);
        this.onInputKeyUp_ = this.onInputKeyUp_.bind(this);
        this.onPointerDown_ = this.onPointerDown_.bind(this);
        this.onPointerMove_ = this.onPointerMove_.bind(this);
        this.onPointerUp_ = this.onPointerUp_.bind(this);
        this.parser_ = config.parser;
        this.props = config.props;
        this.sliderProps_ = (_a = config.sliderProps) !== null && _a !== void 0 ? _a : null;
        this.value = config.value;
        this.viewProps = config.viewProps;
        this.dragging_ = createValue(null);
        this.view = new NumberTextView(doc, {
            arrayPosition: config.arrayPosition,
            dragging: this.dragging_,
            props: this.props,
            value: this.value,
            viewProps: this.viewProps
        });
        this.view.inputElement.addEventListener("change", this.onInputChange_);
        this.view.inputElement.addEventListener("keydown", this.onInputKeyDown_);
        this.view.inputElement.addEventListener("keyup", this.onInputKeyUp_);
        const ph = new PointerHandler(this.view.knobElement);
        ph.emitter.on("down", this.onPointerDown_);
        ph.emitter.on("move", this.onPointerMove_);
        ph.emitter.on("up", this.onPointerUp_);
    }
    constrainValue_(value) {
        var _a, _b;
        const min = (_a = this.sliderProps_) === null || _a === void 0 ? void 0 : _a.get("min");
        const max = (_b = this.sliderProps_) === null || _b === void 0 ? void 0 : _b.get("max");
        let v = value;
        if (min !== undefined) v = Math.max(v, min);
        if (max !== undefined) v = Math.min(v, max);
        return v;
    }
    onInputChange_(e) {
        const inputElem = forceCast(e.currentTarget);
        const value = inputElem.value;
        const parsedValue = this.parser_(value);
        if (!isEmpty(parsedValue)) this.value.rawValue = this.constrainValue_(parsedValue);
        this.view.refresh();
    }
    onInputKeyDown_(ev) {
        const step = getStepForKey(this.props.get("keyScale"), getVerticalStepKeys(ev));
        if (step === 0) return;
        this.value.setRawValue(this.constrainValue_(this.value.rawValue + step), {
            forceEmit: false,
            last: false
        });
    }
    onInputKeyUp_(ev) {
        const step = getStepForKey(this.props.get("keyScale"), getVerticalStepKeys(ev));
        if (step === 0) return;
        this.value.setRawValue(this.value.rawValue, {
            forceEmit: true,
            last: true
        });
    }
    onPointerDown_() {
        this.originRawValue_ = this.value.rawValue;
        this.dragging_.rawValue = 0;
    }
    computeDraggingValue_(data) {
        if (!data.point) return null;
        const dx = data.point.x - data.bounds.width / 2;
        return this.constrainValue_(this.originRawValue_ + dx * this.props.get("pointerScale"));
    }
    onPointerMove_(ev) {
        const v = this.computeDraggingValue_(ev.data);
        if (v === null) return;
        this.value.setRawValue(v, {
            forceEmit: false,
            last: false
        });
        this.dragging_.rawValue = this.value.rawValue - this.originRawValue_;
    }
    onPointerUp_(ev) {
        const v = this.computeDraggingValue_(ev.data);
        if (v === null) return;
        this.value.setRawValue(v, {
            forceEmit: true,
            last: true
        });
        this.dragging_.rawValue = null;
    }
}
const cn$g = ClassName("sld");
class SliderView {
    constructor(doc, config){
        this.onChange_ = this.onChange_.bind(this);
        this.props_ = config.props;
        this.props_.emitter.on("change", this.onChange_);
        this.element = doc.createElement("div");
        this.element.classList.add(cn$g());
        config.viewProps.bindClassModifiers(this.element);
        const trackElem = doc.createElement("div");
        trackElem.classList.add(cn$g("t"));
        config.viewProps.bindTabIndex(trackElem);
        this.element.appendChild(trackElem);
        this.trackElement = trackElem;
        const knobElem = doc.createElement("div");
        knobElem.classList.add(cn$g("k"));
        this.trackElement.appendChild(knobElem);
        this.knobElement = knobElem;
        config.value.emitter.on("change", this.onChange_);
        this.value = config.value;
        this.update_();
    }
    update_() {
        const p = constrainRange(mapRange(this.value.rawValue, this.props_.get("min"), this.props_.get("max"), 0, 100), 0, 100);
        this.knobElement.style.width = `${p}%`;
    }
    onChange_() {
        this.update_();
    }
}
class SliderController {
    constructor(doc, config){
        this.onKeyDown_ = this.onKeyDown_.bind(this);
        this.onKeyUp_ = this.onKeyUp_.bind(this);
        this.onPointerDownOrMove_ = this.onPointerDownOrMove_.bind(this);
        this.onPointerUp_ = this.onPointerUp_.bind(this);
        this.value = config.value;
        this.viewProps = config.viewProps;
        this.props = config.props;
        this.view = new SliderView(doc, {
            props: this.props,
            value: this.value,
            viewProps: this.viewProps
        });
        this.ptHandler_ = new PointerHandler(this.view.trackElement);
        this.ptHandler_.emitter.on("down", this.onPointerDownOrMove_);
        this.ptHandler_.emitter.on("move", this.onPointerDownOrMove_);
        this.ptHandler_.emitter.on("up", this.onPointerUp_);
        this.view.trackElement.addEventListener("keydown", this.onKeyDown_);
        this.view.trackElement.addEventListener("keyup", this.onKeyUp_);
    }
    handlePointerEvent_(d, opts) {
        if (!d.point) return;
        this.value.setRawValue(mapRange(constrainRange(d.point.x, 0, d.bounds.width), 0, d.bounds.width, this.props.get("min"), this.props.get("max")), opts);
    }
    onPointerDownOrMove_(ev) {
        this.handlePointerEvent_(ev.data, {
            forceEmit: false,
            last: false
        });
    }
    onPointerUp_(ev) {
        this.handlePointerEvent_(ev.data, {
            forceEmit: true,
            last: true
        });
    }
    onKeyDown_(ev) {
        const step = getStepForKey(this.props.get("keyScale"), getHorizontalStepKeys(ev));
        if (step === 0) return;
        this.value.setRawValue(this.value.rawValue + step, {
            forceEmit: false,
            last: false
        });
    }
    onKeyUp_(ev) {
        const step = getStepForKey(this.props.get("keyScale"), getHorizontalStepKeys(ev));
        if (step === 0) return;
        this.value.setRawValue(this.value.rawValue, {
            forceEmit: true,
            last: true
        });
    }
}
const cn$f = ClassName("sldtxt");
class SliderTextView {
    constructor(doc, config){
        this.element = doc.createElement("div");
        this.element.classList.add(cn$f());
        const sliderElem = doc.createElement("div");
        sliderElem.classList.add(cn$f("s"));
        this.sliderView_ = config.sliderView;
        sliderElem.appendChild(this.sliderView_.element);
        this.element.appendChild(sliderElem);
        const textElem = doc.createElement("div");
        textElem.classList.add(cn$f("t"));
        this.textView_ = config.textView;
        textElem.appendChild(this.textView_.element);
        this.element.appendChild(textElem);
    }
}
class SliderTextController {
    constructor(doc, config){
        this.value = config.value;
        this.viewProps = config.viewProps;
        this.sliderC_ = new SliderController(doc, {
            props: config.sliderProps,
            value: config.value,
            viewProps: this.viewProps
        });
        this.textC_ = new NumberTextController(doc, {
            parser: config.parser,
            props: config.textProps,
            sliderProps: config.sliderProps,
            value: config.value,
            viewProps: config.viewProps
        });
        this.view = new SliderTextView(doc, {
            sliderView: this.sliderC_.view,
            textView: this.textC_.view
        });
    }
    get sliderController() {
        return this.sliderC_;
    }
    get textController() {
        return this.textC_;
    }
    importProps(state) {
        return importBladeState(state, null, (p)=>({
                max: p.required.number,
                min: p.required.number
            }), (result)=>{
            const sliderProps = this.sliderC_.props;
            sliderProps.set("max", result.max);
            sliderProps.set("min", result.min);
            return true;
        });
    }
    exportProps() {
        const sliderProps = this.sliderC_.props;
        return exportBladeState(null, {
            max: sliderProps.get("max"),
            min: sliderProps.get("min")
        });
    }
}
function createSliderTextProps(config) {
    return {
        sliderProps: new ValueMap({
            keyScale: config.keyScale,
            max: config.max,
            min: config.min
        }),
        textProps: new ValueMap({
            formatter: createValue(config.formatter),
            keyScale: config.keyScale,
            pointerScale: createValue(config.pointerScale)
        })
    };
}
const CSS_VAR_MAP = {
    containerUnitSize: "cnt-usz"
};
function getCssVar(key) {
    return `--${CSS_VAR_MAP[key]}`;
}
function createPointDimensionParser(p) {
    return createNumberTextInputParamsParser(p);
}
function parsePointDimensionParams(value) {
    if (!isRecord(value)) return undefined;
    return parseRecord(value, createPointDimensionParser);
}
function createDimensionConstraint(params, initialValue) {
    if (!params) return undefined;
    const constraints = [];
    const cs = createStepConstraint(params, initialValue);
    if (cs) constraints.push(cs);
    const rs = createRangeConstraint(params);
    if (rs) constraints.push(rs);
    return new CompositeConstraint(constraints);
}
function isCompatible(ver) {
    if (!ver) return false;
    return ver.major === VERSION$1.major;
}
function parsePickerLayout(value) {
    if (value === "inline" || value === "popup") return value;
    return undefined;
}
function writePrimitive(target, value) {
    target.write(value);
}
const cn$e = ClassName("ckb");
class CheckboxView {
    constructor(doc, config){
        this.onValueChange_ = this.onValueChange_.bind(this);
        this.element = doc.createElement("div");
        this.element.classList.add(cn$e());
        config.viewProps.bindClassModifiers(this.element);
        const labelElem = doc.createElement("label");
        labelElem.classList.add(cn$e("l"));
        this.element.appendChild(labelElem);
        this.labelElement = labelElem;
        const inputElem = doc.createElement("input");
        inputElem.classList.add(cn$e("i"));
        inputElem.type = "checkbox";
        this.labelElement.appendChild(inputElem);
        this.inputElement = inputElem;
        config.viewProps.bindDisabled(this.inputElement);
        const wrapperElem = doc.createElement("div");
        wrapperElem.classList.add(cn$e("w"));
        this.labelElement.appendChild(wrapperElem);
        const markElem = createSvgIconElement(doc, "check");
        wrapperElem.appendChild(markElem);
        config.value.emitter.on("change", this.onValueChange_);
        this.value = config.value;
        this.update_();
    }
    update_() {
        this.inputElement.checked = this.value.rawValue;
    }
    onValueChange_() {
        this.update_();
    }
}
class CheckboxController {
    constructor(doc, config){
        this.onInputChange_ = this.onInputChange_.bind(this);
        this.onLabelMouseDown_ = this.onLabelMouseDown_.bind(this);
        this.value = config.value;
        this.viewProps = config.viewProps;
        this.view = new CheckboxView(doc, {
            value: this.value,
            viewProps: this.viewProps
        });
        this.view.inputElement.addEventListener("change", this.onInputChange_);
        this.view.labelElement.addEventListener("mousedown", this.onLabelMouseDown_);
    }
    onInputChange_(ev) {
        const inputElem = forceCast(ev.currentTarget);
        this.value.rawValue = inputElem.checked;
        ev.preventDefault();
        ev.stopPropagation();
    }
    onLabelMouseDown_(ev) {
        ev.preventDefault();
    }
}
function createConstraint$6(params) {
    const constraints = [];
    const lc = createListConstraint(params.options);
    if (lc) constraints.push(lc);
    return new CompositeConstraint(constraints);
}
const BooleanInputPlugin = createPlugin({
    id: "input-bool",
    type: "input",
    accept: (value, params)=>{
        if (typeof value !== "boolean") return null;
        const result = parseRecord(params, (p)=>({
                options: p.optional.custom(parseListOptions),
                readonly: p.optional.constant(false)
            }));
        return result ? {
            initialValue: value,
            params: result
        } : null;
    },
    binding: {
        reader: (_args)=>boolFromUnknown,
        constraint: (args)=>createConstraint$6(args.params),
        writer: (_args)=>writePrimitive
    },
    controller: (args)=>{
        const doc = args.document;
        const value = args.value;
        const c = args.constraint;
        const lc = c && findConstraint(c, ListConstraint);
        if (lc) return new ListController(doc, {
            props: new ValueMap({
                options: lc.values.value("options")
            }),
            value: value,
            viewProps: args.viewProps
        });
        return new CheckboxController(doc, {
            value: value,
            viewProps: args.viewProps
        });
    },
    api (args) {
        if (typeof args.controller.value.rawValue !== "boolean") return null;
        if (args.controller.valueController instanceof ListController) return new ListInputBindingApi(args.controller);
        return null;
    }
});
const cn$d = ClassName("col");
class ColorView {
    constructor(doc, config){
        this.element = doc.createElement("div");
        this.element.classList.add(cn$d());
        config.foldable.bindExpandedClass(this.element, cn$d(undefined, "expanded"));
        bindValueMap(config.foldable, "completed", valueToClassName(this.element, cn$d(undefined, "cpl")));
        const headElem = doc.createElement("div");
        headElem.classList.add(cn$d("h"));
        this.element.appendChild(headElem);
        const swatchElem = doc.createElement("div");
        swatchElem.classList.add(cn$d("s"));
        headElem.appendChild(swatchElem);
        this.swatchElement = swatchElem;
        const textElem = doc.createElement("div");
        textElem.classList.add(cn$d("t"));
        headElem.appendChild(textElem);
        this.textElement = textElem;
        if (config.pickerLayout === "inline") {
            const pickerElem = doc.createElement("div");
            pickerElem.classList.add(cn$d("p"));
            this.element.appendChild(pickerElem);
            this.pickerElement = pickerElem;
        } else this.pickerElement = null;
    }
}
function rgbToHslInt(r, g, b) {
    const rp = constrainRange(r / 255, 0, 1);
    const gp = constrainRange(g / 255, 0, 1);
    const bp = constrainRange(b / 255, 0, 1);
    const cmax = Math.max(rp, gp, bp);
    const cmin = Math.min(rp, gp, bp);
    const c = cmax - cmin;
    let h = 0;
    let s = 0;
    const l = (cmin + cmax) / 2;
    if (c !== 0) {
        s = c / (1 - Math.abs(cmax + cmin - 1));
        if (rp === cmax) h = (gp - bp) / c;
        else if (gp === cmax) h = 2 + (bp - rp) / c;
        else h = 4 + (rp - gp) / c;
        h = h / 6 + (h < 0 ? 1 : 0);
    }
    return [
        h * 360,
        s * 100,
        l * 100
    ];
}
function hslToRgbInt(h, s, l) {
    const hp = (h % 360 + 360) % 360;
    const sp = constrainRange(s / 100, 0, 1);
    const lp = constrainRange(l / 100, 0, 1);
    const c = (1 - Math.abs(2 * lp - 1)) * sp;
    const x = c * (1 - Math.abs(hp / 60 % 2 - 1));
    const m = lp - c / 2;
    let rp, gp, bp;
    if (hp >= 0 && hp < 60) [rp, gp, bp] = [
        c,
        x,
        0
    ];
    else if (hp >= 60 && hp < 120) [rp, gp, bp] = [
        x,
        c,
        0
    ];
    else if (hp >= 120 && hp < 180) [rp, gp, bp] = [
        0,
        c,
        x
    ];
    else if (hp >= 180 && hp < 240) [rp, gp, bp] = [
        0,
        x,
        c
    ];
    else if (hp >= 240 && hp < 300) [rp, gp, bp] = [
        x,
        0,
        c
    ];
    else [rp, gp, bp] = [
        c,
        0,
        x
    ];
    return [
        (rp + m) * 255,
        (gp + m) * 255,
        (bp + m) * 255
    ];
}
function rgbToHsvInt(r, g, b) {
    const rp = constrainRange(r / 255, 0, 1);
    const gp = constrainRange(g / 255, 0, 1);
    const bp = constrainRange(b / 255, 0, 1);
    const cmax = Math.max(rp, gp, bp);
    const cmin = Math.min(rp, gp, bp);
    const d = cmax - cmin;
    let h;
    if (d === 0) h = 0;
    else if (cmax === rp) h = 60 * (((gp - bp) / d % 6 + 6) % 6);
    else if (cmax === gp) h = 60 * ((bp - rp) / d + 2);
    else h = 60 * ((rp - gp) / d + 4);
    const s = cmax === 0 ? 0 : d / cmax;
    const v = cmax;
    return [
        h,
        s * 100,
        v * 100
    ];
}
function hsvToRgbInt(h, s, v) {
    const hp = loopRange(h, 360);
    const sp = constrainRange(s / 100, 0, 1);
    const vp = constrainRange(v / 100, 0, 1);
    const c = vp * sp;
    const x = c * (1 - Math.abs(hp / 60 % 2 - 1));
    const m = vp - c;
    let rp, gp, bp;
    if (hp >= 0 && hp < 60) [rp, gp, bp] = [
        c,
        x,
        0
    ];
    else if (hp >= 60 && hp < 120) [rp, gp, bp] = [
        x,
        c,
        0
    ];
    else if (hp >= 120 && hp < 180) [rp, gp, bp] = [
        0,
        c,
        x
    ];
    else if (hp >= 180 && hp < 240) [rp, gp, bp] = [
        0,
        x,
        c
    ];
    else if (hp >= 240 && hp < 300) [rp, gp, bp] = [
        x,
        0,
        c
    ];
    else [rp, gp, bp] = [
        c,
        0,
        x
    ];
    return [
        (rp + m) * 255,
        (gp + m) * 255,
        (bp + m) * 255
    ];
}
function hslToHsvInt(h, s, l) {
    const sd = l + s * (100 - Math.abs(2 * l - 100)) / 200;
    return [
        h,
        sd !== 0 ? s * (100 - Math.abs(2 * l - 100)) / sd : 0,
        l + s * (100 - Math.abs(2 * l - 100)) / 200
    ];
}
function hsvToHslInt(h, s, v) {
    const sd = 100 - Math.abs(v * (200 - s) / 100 - 100);
    return [
        h,
        sd !== 0 ? s * v / sd : 0,
        v * (200 - s) / 200
    ];
}
function removeAlphaComponent(comps) {
    return [
        comps[0],
        comps[1],
        comps[2]
    ];
}
function appendAlphaComponent(comps, alpha) {
    return [
        comps[0],
        comps[1],
        comps[2],
        alpha
    ];
}
const MODE_CONVERTER_MAP = {
    hsl: {
        hsl: (h, s, l)=>[
                h,
                s,
                l
            ],
        hsv: hslToHsvInt,
        rgb: hslToRgbInt
    },
    hsv: {
        hsl: hsvToHslInt,
        hsv: (h, s, v)=>[
                h,
                s,
                v
            ],
        rgb: hsvToRgbInt
    },
    rgb: {
        hsl: rgbToHslInt,
        hsv: rgbToHsvInt,
        rgb: (r, g, b)=>[
                r,
                g,
                b
            ]
    }
};
function getColorMaxComponents(mode, type) {
    return [
        type === "float" ? 1 : mode === "rgb" ? 255 : 360,
        type === "float" ? 1 : mode === "rgb" ? 255 : 100,
        type === "float" ? 1 : mode === "rgb" ? 255 : 100
    ];
}
function loopHueRange(hue, max) {
    return hue === max ? max : loopRange(hue, max);
}
function constrainColorComponents(components, mode, type) {
    var _a;
    const ms = getColorMaxComponents(mode, type);
    return [
        mode === "rgb" ? constrainRange(components[0], 0, ms[0]) : loopHueRange(components[0], ms[0]),
        constrainRange(components[1], 0, ms[1]),
        constrainRange(components[2], 0, ms[2]),
        constrainRange((_a = components[3]) !== null && _a !== void 0 ? _a : 1, 0, 1)
    ];
}
function convertColorType(comps, mode, from, to) {
    const fms = getColorMaxComponents(mode, from);
    const tms = getColorMaxComponents(mode, to);
    return comps.map((c, index)=>c / fms[index] * tms[index]);
}
function convertColor(components, from, to) {
    const intComps = convertColorType(components, from.mode, from.type, "int");
    const result = MODE_CONVERTER_MAP[from.mode][to.mode](...intComps);
    return convertColorType(result, to.mode, "int", to.type);
}
class IntColor {
    static black() {
        return new IntColor([
            0,
            0,
            0
        ], "rgb");
    }
    constructor(comps, mode){
        this.type = "int";
        this.mode = mode;
        this.comps_ = constrainColorComponents(comps, mode, this.type);
    }
    getComponents(opt_mode) {
        return appendAlphaComponent(convertColor(removeAlphaComponent(this.comps_), {
            mode: this.mode,
            type: this.type
        }, {
            mode: opt_mode !== null && opt_mode !== void 0 ? opt_mode : this.mode,
            type: this.type
        }), this.comps_[3]);
    }
    toRgbaObject() {
        const rgbComps = this.getComponents("rgb");
        return {
            r: rgbComps[0],
            g: rgbComps[1],
            b: rgbComps[2],
            a: rgbComps[3]
        };
    }
}
const cn$c = ClassName("colp");
class ColorPickerView {
    constructor(doc, config){
        this.alphaViews_ = null;
        this.element = doc.createElement("div");
        this.element.classList.add(cn$c());
        config.viewProps.bindClassModifiers(this.element);
        const hsvElem = doc.createElement("div");
        hsvElem.classList.add(cn$c("hsv"));
        const svElem = doc.createElement("div");
        svElem.classList.add(cn$c("sv"));
        this.svPaletteView_ = config.svPaletteView;
        svElem.appendChild(this.svPaletteView_.element);
        hsvElem.appendChild(svElem);
        const hElem = doc.createElement("div");
        hElem.classList.add(cn$c("h"));
        this.hPaletteView_ = config.hPaletteView;
        hElem.appendChild(this.hPaletteView_.element);
        hsvElem.appendChild(hElem);
        this.element.appendChild(hsvElem);
        const rgbElem = doc.createElement("div");
        rgbElem.classList.add(cn$c("rgb"));
        this.textsView_ = config.textsView;
        rgbElem.appendChild(this.textsView_.element);
        this.element.appendChild(rgbElem);
        if (config.alphaViews) {
            this.alphaViews_ = {
                palette: config.alphaViews.palette,
                text: config.alphaViews.text
            };
            const aElem = doc.createElement("div");
            aElem.classList.add(cn$c("a"));
            const apElem = doc.createElement("div");
            apElem.classList.add(cn$c("ap"));
            apElem.appendChild(this.alphaViews_.palette.element);
            aElem.appendChild(apElem);
            const atElem = doc.createElement("div");
            atElem.classList.add(cn$c("at"));
            atElem.appendChild(this.alphaViews_.text.element);
            aElem.appendChild(atElem);
            this.element.appendChild(aElem);
        }
    }
    get allFocusableElements() {
        const elems = [
            this.svPaletteView_.element,
            this.hPaletteView_.element,
            this.textsView_.modeSelectElement,
            ...this.textsView_.inputViews.map((v)=>v.inputElement)
        ];
        if (this.alphaViews_) elems.push(this.alphaViews_.palette.element, this.alphaViews_.text.inputElement);
        return elems;
    }
}
function parseColorType(value) {
    return value === "int" ? "int" : value === "float" ? "float" : undefined;
}
function parseColorInputParams(params) {
    return parseRecord(params, (p)=>({
            color: p.optional.object({
                alpha: p.optional.boolean,
                type: p.optional.custom(parseColorType)
            }),
            expanded: p.optional.boolean,
            picker: p.optional.custom(parsePickerLayout),
            readonly: p.optional.constant(false)
        }));
}
function getKeyScaleForColor(forAlpha) {
    return forAlpha ? 0.1 : 1;
}
function extractColorType(params) {
    var _a;
    return (_a = params.color) === null || _a === void 0 ? void 0 : _a.type;
}
class FloatColor {
    constructor(comps, mode){
        this.type = "float";
        this.mode = mode;
        this.comps_ = constrainColorComponents(comps, mode, this.type);
    }
    getComponents(opt_mode) {
        return appendAlphaComponent(convertColor(removeAlphaComponent(this.comps_), {
            mode: this.mode,
            type: this.type
        }, {
            mode: opt_mode !== null && opt_mode !== void 0 ? opt_mode : this.mode,
            type: this.type
        }), this.comps_[3]);
    }
    toRgbaObject() {
        const rgbComps = this.getComponents("rgb");
        return {
            r: rgbComps[0],
            g: rgbComps[1],
            b: rgbComps[2],
            a: rgbComps[3]
        };
    }
}
const TYPE_TO_CONSTRUCTOR_MAP = {
    int: (comps, mode)=>new IntColor(comps, mode),
    float: (comps, mode)=>new FloatColor(comps, mode)
};
function createColor(comps, mode, type) {
    return TYPE_TO_CONSTRUCTOR_MAP[type](comps, mode);
}
function isFloatColor(c) {
    return c.type === "float";
}
function isIntColor(c) {
    return c.type === "int";
}
function convertFloatToInt(cf) {
    const comps = cf.getComponents();
    const ms = getColorMaxComponents(cf.mode, "int");
    return new IntColor([
        Math.round(mapRange(comps[0], 0, 1, 0, ms[0])),
        Math.round(mapRange(comps[1], 0, 1, 0, ms[1])),
        Math.round(mapRange(comps[2], 0, 1, 0, ms[2])),
        comps[3]
    ], cf.mode);
}
function convertIntToFloat(ci) {
    const comps = ci.getComponents();
    const ms = getColorMaxComponents(ci.mode, "int");
    return new FloatColor([
        mapRange(comps[0], 0, ms[0], 0, 1),
        mapRange(comps[1], 0, ms[1], 0, 1),
        mapRange(comps[2], 0, ms[2], 0, 1),
        comps[3]
    ], ci.mode);
}
function mapColorType(c, type) {
    if (c.type === type) return c;
    if (isIntColor(c) && type === "float") return convertIntToFloat(c);
    if (isFloatColor(c) && type === "int") return convertFloatToInt(c);
    throw TpError.shouldNeverHappen();
}
function equalsStringColorFormat(f1, f2) {
    return f1.alpha === f2.alpha && f1.mode === f2.mode && f1.notation === f2.notation && f1.type === f2.type;
}
function parseCssNumberOrPercentage(text, max) {
    const m = text.match(/^(.+)%$/);
    if (!m) return Math.min(parseFloat(text), max);
    return Math.min(parseFloat(m[1]) * 0.01 * max, max);
}
const ANGLE_TO_DEG_MAP = {
    deg: (angle)=>angle,
    grad: (angle)=>angle * 360 / 400,
    rad: (angle)=>angle * 360 / (2 * Math.PI),
    turn: (angle)=>angle * 360
};
function parseCssNumberOrAngle(text) {
    const m = text.match(/^([0-9.]+?)(deg|grad|rad|turn)$/);
    if (!m) return parseFloat(text);
    const angle = parseFloat(m[1]);
    const unit = m[2];
    return ANGLE_TO_DEG_MAP[unit](angle);
}
function parseFunctionalRgbColorComponents(text) {
    const m = text.match(/^rgb\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);
    if (!m) return null;
    const comps = [
        parseCssNumberOrPercentage(m[1], 255),
        parseCssNumberOrPercentage(m[2], 255),
        parseCssNumberOrPercentage(m[3], 255)
    ];
    if (isNaN(comps[0]) || isNaN(comps[1]) || isNaN(comps[2])) return null;
    return comps;
}
function parseFunctionalRgbColor(text) {
    const comps = parseFunctionalRgbColorComponents(text);
    return comps ? new IntColor(comps, "rgb") : null;
}
function parseFunctionalRgbaColorComponents(text) {
    const m = text.match(/^rgba\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);
    if (!m) return null;
    const comps = [
        parseCssNumberOrPercentage(m[1], 255),
        parseCssNumberOrPercentage(m[2], 255),
        parseCssNumberOrPercentage(m[3], 255),
        parseCssNumberOrPercentage(m[4], 1)
    ];
    if (isNaN(comps[0]) || isNaN(comps[1]) || isNaN(comps[2]) || isNaN(comps[3])) return null;
    return comps;
}
function parseFunctionalRgbaColor(text) {
    const comps = parseFunctionalRgbaColorComponents(text);
    return comps ? new IntColor(comps, "rgb") : null;
}
function parseFunctionalHslColorComponents(text) {
    const m = text.match(/^hsl\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);
    if (!m) return null;
    const comps = [
        parseCssNumberOrAngle(m[1]),
        parseCssNumberOrPercentage(m[2], 100),
        parseCssNumberOrPercentage(m[3], 100)
    ];
    if (isNaN(comps[0]) || isNaN(comps[1]) || isNaN(comps[2])) return null;
    return comps;
}
function parseFunctionalHslColor(text) {
    const comps = parseFunctionalHslColorComponents(text);
    return comps ? new IntColor(comps, "hsl") : null;
}
function parseHslaColorComponents(text) {
    const m = text.match(/^hsla\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);
    if (!m) return null;
    const comps = [
        parseCssNumberOrAngle(m[1]),
        parseCssNumberOrPercentage(m[2], 100),
        parseCssNumberOrPercentage(m[3], 100),
        parseCssNumberOrPercentage(m[4], 1)
    ];
    if (isNaN(comps[0]) || isNaN(comps[1]) || isNaN(comps[2]) || isNaN(comps[3])) return null;
    return comps;
}
function parseFunctionalHslaColor(text) {
    const comps = parseHslaColorComponents(text);
    return comps ? new IntColor(comps, "hsl") : null;
}
function parseHexRgbColorComponents(text) {
    const mRgb = text.match(/^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);
    if (mRgb) return [
        parseInt(mRgb[1] + mRgb[1], 16),
        parseInt(mRgb[2] + mRgb[2], 16),
        parseInt(mRgb[3] + mRgb[3], 16)
    ];
    const mRrggbb = text.match(/^(?:#|0x)([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);
    if (mRrggbb) return [
        parseInt(mRrggbb[1], 16),
        parseInt(mRrggbb[2], 16),
        parseInt(mRrggbb[3], 16)
    ];
    return null;
}
function parseHexRgbColor(text) {
    const comps = parseHexRgbColorComponents(text);
    return comps ? new IntColor(comps, "rgb") : null;
}
function parseHexRgbaColorComponents(text) {
    const mRgb = text.match(/^#?([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);
    if (mRgb) return [
        parseInt(mRgb[1] + mRgb[1], 16),
        parseInt(mRgb[2] + mRgb[2], 16),
        parseInt(mRgb[3] + mRgb[3], 16),
        mapRange(parseInt(mRgb[4] + mRgb[4], 16), 0, 255, 0, 1)
    ];
    const mRrggbb = text.match(/^(?:#|0x)?([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);
    if (mRrggbb) return [
        parseInt(mRrggbb[1], 16),
        parseInt(mRrggbb[2], 16),
        parseInt(mRrggbb[3], 16),
        mapRange(parseInt(mRrggbb[4], 16), 0, 255, 0, 1)
    ];
    return null;
}
function parseHexRgbaColor(text) {
    const comps = parseHexRgbaColorComponents(text);
    return comps ? new IntColor(comps, "rgb") : null;
}
function parseObjectRgbColorComponents(text) {
    const m = text.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);
    if (!m) return null;
    const comps = [
        parseFloat(m[1]),
        parseFloat(m[2]),
        parseFloat(m[3])
    ];
    if (isNaN(comps[0]) || isNaN(comps[1]) || isNaN(comps[2])) return null;
    return comps;
}
function createObjectRgbColorParser(type) {
    return (text)=>{
        const comps = parseObjectRgbColorComponents(text);
        return comps ? createColor(comps, "rgb", type) : null;
    };
}
function parseObjectRgbaColorComponents(text) {
    const m = text.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*a\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);
    if (!m) return null;
    const comps = [
        parseFloat(m[1]),
        parseFloat(m[2]),
        parseFloat(m[3]),
        parseFloat(m[4])
    ];
    if (isNaN(comps[0]) || isNaN(comps[1]) || isNaN(comps[2]) || isNaN(comps[3])) return null;
    return comps;
}
function createObjectRgbaColorParser(type) {
    return (text)=>{
        const comps = parseObjectRgbaColorComponents(text);
        return comps ? createColor(comps, "rgb", type) : null;
    };
}
const PARSER_AND_RESULT = [
    {
        parser: parseHexRgbColorComponents,
        result: {
            alpha: false,
            mode: "rgb",
            notation: "hex"
        }
    },
    {
        parser: parseHexRgbaColorComponents,
        result: {
            alpha: true,
            mode: "rgb",
            notation: "hex"
        }
    },
    {
        parser: parseFunctionalRgbColorComponents,
        result: {
            alpha: false,
            mode: "rgb",
            notation: "func"
        }
    },
    {
        parser: parseFunctionalRgbaColorComponents,
        result: {
            alpha: true,
            mode: "rgb",
            notation: "func"
        }
    },
    {
        parser: parseFunctionalHslColorComponents,
        result: {
            alpha: false,
            mode: "hsl",
            notation: "func"
        }
    },
    {
        parser: parseHslaColorComponents,
        result: {
            alpha: true,
            mode: "hsl",
            notation: "func"
        }
    },
    {
        parser: parseObjectRgbColorComponents,
        result: {
            alpha: false,
            mode: "rgb",
            notation: "object"
        }
    },
    {
        parser: parseObjectRgbaColorComponents,
        result: {
            alpha: true,
            mode: "rgb",
            notation: "object"
        }
    }
];
function detectStringColor(text) {
    return PARSER_AND_RESULT.reduce((prev, { parser, result: detection })=>{
        if (prev) return prev;
        return parser(text) ? detection : null;
    }, null);
}
function detectStringColorFormat(text, type = "int") {
    const r = detectStringColor(text);
    if (!r) return null;
    if (r.notation === "hex" && type !== "float") return Object.assign(Object.assign({}, r), {
        type: "int"
    });
    if (r.notation === "func") return Object.assign(Object.assign({}, r), {
        type: type
    });
    return null;
}
function createColorStringParser(type) {
    const parsers = [
        parseHexRgbColor,
        parseHexRgbaColor,
        parseFunctionalRgbColor,
        parseFunctionalRgbaColor,
        parseFunctionalHslColor,
        parseFunctionalHslaColor
    ];
    if (type === "int") parsers.push(createObjectRgbColorParser("int"), createObjectRgbaColorParser("int"));
    if (type === "float") parsers.push(createObjectRgbColorParser("float"), createObjectRgbaColorParser("float"));
    const parser = composeParsers(parsers);
    return (text)=>{
        const result = parser(text);
        return result ? mapColorType(result, type) : null;
    };
}
function readIntColorString(value) {
    const parser = createColorStringParser("int");
    if (typeof value !== "string") return IntColor.black();
    const result = parser(value);
    return result !== null && result !== void 0 ? result : IntColor.black();
}
function zerofill(comp) {
    const hex = constrainRange(Math.floor(comp), 0, 255).toString(16);
    return hex.length === 1 ? `0${hex}` : hex;
}
function colorToHexRgbString(value, prefix = "#") {
    const hexes = removeAlphaComponent(value.getComponents("rgb")).map(zerofill).join("");
    return `${prefix}${hexes}`;
}
function colorToHexRgbaString(value, prefix = "#") {
    const rgbaComps = value.getComponents("rgb");
    const hexes = [
        rgbaComps[0],
        rgbaComps[1],
        rgbaComps[2],
        rgbaComps[3] * 255
    ].map(zerofill).join("");
    return `${prefix}${hexes}`;
}
function colorToFunctionalRgbString(value) {
    const formatter = createNumberFormatter(0);
    const ci = mapColorType(value, "int");
    const comps = removeAlphaComponent(ci.getComponents("rgb")).map((comp)=>formatter(comp));
    return `rgb(${comps.join(", ")})`;
}
function colorToFunctionalRgbaString(value) {
    const aFormatter = createNumberFormatter(2);
    const rgbFormatter = createNumberFormatter(0);
    const ci = mapColorType(value, "int");
    const comps = ci.getComponents("rgb").map((comp, index)=>{
        const formatter = index === 3 ? aFormatter : rgbFormatter;
        return formatter(comp);
    });
    return `rgba(${comps.join(", ")})`;
}
function colorToFunctionalHslString(value) {
    const formatters = [
        createNumberFormatter(0),
        formatPercentage,
        formatPercentage
    ];
    const ci = mapColorType(value, "int");
    const comps = removeAlphaComponent(ci.getComponents("hsl")).map((comp, index)=>formatters[index](comp));
    return `hsl(${comps.join(", ")})`;
}
function colorToFunctionalHslaString(value) {
    const formatters = [
        createNumberFormatter(0),
        formatPercentage,
        formatPercentage,
        createNumberFormatter(2)
    ];
    const ci = mapColorType(value, "int");
    const comps = ci.getComponents("hsl").map((comp, index)=>formatters[index](comp));
    return `hsla(${comps.join(", ")})`;
}
function colorToObjectRgbString(value, type) {
    const formatter = createNumberFormatter(type === "float" ? 2 : 0);
    const names = [
        "r",
        "g",
        "b"
    ];
    const cc = mapColorType(value, type);
    const comps = removeAlphaComponent(cc.getComponents("rgb")).map((comp, index)=>`${names[index]}: ${formatter(comp)}`);
    return `{${comps.join(", ")}}`;
}
function createObjectRgbColorFormatter(type) {
    return (value)=>colorToObjectRgbString(value, type);
}
function colorToObjectRgbaString(value, type) {
    const aFormatter = createNumberFormatter(2);
    const rgbFormatter = createNumberFormatter(type === "float" ? 2 : 0);
    const names = [
        "r",
        "g",
        "b",
        "a"
    ];
    const cc = mapColorType(value, type);
    const comps = cc.getComponents("rgb").map((comp, index)=>{
        const formatter = index === 3 ? aFormatter : rgbFormatter;
        return `${names[index]}: ${formatter(comp)}`;
    });
    return `{${comps.join(", ")}}`;
}
function createObjectRgbaColorFormatter(type) {
    return (value)=>colorToObjectRgbaString(value, type);
}
const FORMAT_AND_STRINGIFIERS = [
    {
        format: {
            alpha: false,
            mode: "rgb",
            notation: "hex",
            type: "int"
        },
        stringifier: colorToHexRgbString
    },
    {
        format: {
            alpha: true,
            mode: "rgb",
            notation: "hex",
            type: "int"
        },
        stringifier: colorToHexRgbaString
    },
    {
        format: {
            alpha: false,
            mode: "rgb",
            notation: "func",
            type: "int"
        },
        stringifier: colorToFunctionalRgbString
    },
    {
        format: {
            alpha: true,
            mode: "rgb",
            notation: "func",
            type: "int"
        },
        stringifier: colorToFunctionalRgbaString
    },
    {
        format: {
            alpha: false,
            mode: "hsl",
            notation: "func",
            type: "int"
        },
        stringifier: colorToFunctionalHslString
    },
    {
        format: {
            alpha: true,
            mode: "hsl",
            notation: "func",
            type: "int"
        },
        stringifier: colorToFunctionalHslaString
    },
    ...[
        "int",
        "float"
    ].reduce((prev, type)=>{
        return [
            ...prev,
            {
                format: {
                    alpha: false,
                    mode: "rgb",
                    notation: "object",
                    type: type
                },
                stringifier: createObjectRgbColorFormatter(type)
            },
            {
                format: {
                    alpha: true,
                    mode: "rgb",
                    notation: "object",
                    type: type
                },
                stringifier: createObjectRgbaColorFormatter(type)
            }
        ];
    }, [])
];
function findColorStringifier(format) {
    return FORMAT_AND_STRINGIFIERS.reduce((prev, fas)=>{
        if (prev) return prev;
        return equalsStringColorFormat(fas.format, format) ? fas.stringifier : null;
    }, null);
}
const cn$b = ClassName("apl");
class APaletteView {
    constructor(doc, config){
        this.onValueChange_ = this.onValueChange_.bind(this);
        this.value = config.value;
        this.value.emitter.on("change", this.onValueChange_);
        this.element = doc.createElement("div");
        this.element.classList.add(cn$b());
        config.viewProps.bindClassModifiers(this.element);
        config.viewProps.bindTabIndex(this.element);
        const barElem = doc.createElement("div");
        barElem.classList.add(cn$b("b"));
        this.element.appendChild(barElem);
        const colorElem = doc.createElement("div");
        colorElem.classList.add(cn$b("c"));
        barElem.appendChild(colorElem);
        this.colorElem_ = colorElem;
        const markerElem = doc.createElement("div");
        markerElem.classList.add(cn$b("m"));
        this.element.appendChild(markerElem);
        this.markerElem_ = markerElem;
        const previewElem = doc.createElement("div");
        previewElem.classList.add(cn$b("p"));
        this.markerElem_.appendChild(previewElem);
        this.previewElem_ = previewElem;
        this.update_();
    }
    update_() {
        const c = this.value.rawValue;
        const rgbaComps = c.getComponents("rgb");
        const leftColor = new IntColor([
            rgbaComps[0],
            rgbaComps[1],
            rgbaComps[2],
            0
        ], "rgb");
        const rightColor = new IntColor([
            rgbaComps[0],
            rgbaComps[1],
            rgbaComps[2],
            255
        ], "rgb");
        const gradientComps = [
            "to right",
            colorToFunctionalRgbaString(leftColor),
            colorToFunctionalRgbaString(rightColor)
        ];
        this.colorElem_.style.background = `linear-gradient(${gradientComps.join(",")})`;
        this.previewElem_.style.backgroundColor = colorToFunctionalRgbaString(c);
        const left = mapRange(rgbaComps[3], 0, 1, 0, 100);
        this.markerElem_.style.left = `${left}%`;
    }
    onValueChange_() {
        this.update_();
    }
}
class APaletteController {
    constructor(doc, config){
        this.onKeyDown_ = this.onKeyDown_.bind(this);
        this.onKeyUp_ = this.onKeyUp_.bind(this);
        this.onPointerDown_ = this.onPointerDown_.bind(this);
        this.onPointerMove_ = this.onPointerMove_.bind(this);
        this.onPointerUp_ = this.onPointerUp_.bind(this);
        this.value = config.value;
        this.viewProps = config.viewProps;
        this.view = new APaletteView(doc, {
            value: this.value,
            viewProps: this.viewProps
        });
        this.ptHandler_ = new PointerHandler(this.view.element);
        this.ptHandler_.emitter.on("down", this.onPointerDown_);
        this.ptHandler_.emitter.on("move", this.onPointerMove_);
        this.ptHandler_.emitter.on("up", this.onPointerUp_);
        this.view.element.addEventListener("keydown", this.onKeyDown_);
        this.view.element.addEventListener("keyup", this.onKeyUp_);
    }
    handlePointerEvent_(d, opts) {
        if (!d.point) return;
        const alpha = d.point.x / d.bounds.width;
        const c = this.value.rawValue;
        const [h, s, v] = c.getComponents("hsv");
        this.value.setRawValue(new IntColor([
            h,
            s,
            v,
            alpha
        ], "hsv"), opts);
    }
    onPointerDown_(ev) {
        this.handlePointerEvent_(ev.data, {
            forceEmit: false,
            last: false
        });
    }
    onPointerMove_(ev) {
        this.handlePointerEvent_(ev.data, {
            forceEmit: false,
            last: false
        });
    }
    onPointerUp_(ev) {
        this.handlePointerEvent_(ev.data, {
            forceEmit: true,
            last: true
        });
    }
    onKeyDown_(ev) {
        const step = getStepForKey(getKeyScaleForColor(true), getHorizontalStepKeys(ev));
        if (step === 0) return;
        const c = this.value.rawValue;
        const [h, s, v, a] = c.getComponents("hsv");
        this.value.setRawValue(new IntColor([
            h,
            s,
            v,
            a + step
        ], "hsv"), {
            forceEmit: false,
            last: false
        });
    }
    onKeyUp_(ev) {
        const step = getStepForKey(getKeyScaleForColor(true), getHorizontalStepKeys(ev));
        if (step === 0) return;
        this.value.setRawValue(this.value.rawValue, {
            forceEmit: true,
            last: true
        });
    }
}
const cn$a = ClassName("coltxt");
function createModeSelectElement(doc) {
    const selectElem = doc.createElement("select");
    const items = [
        {
            text: "RGB",
            value: "rgb"
        },
        {
            text: "HSL",
            value: "hsl"
        },
        {
            text: "HSV",
            value: "hsv"
        },
        {
            text: "HEX",
            value: "hex"
        }
    ];
    selectElem.appendChild(items.reduce((frag, item)=>{
        const optElem = doc.createElement("option");
        optElem.textContent = item.text;
        optElem.value = item.value;
        frag.appendChild(optElem);
        return frag;
    }, doc.createDocumentFragment()));
    return selectElem;
}
class ColorTextsView {
    constructor(doc, config){
        this.element = doc.createElement("div");
        this.element.classList.add(cn$a());
        config.viewProps.bindClassModifiers(this.element);
        const modeElem = doc.createElement("div");
        modeElem.classList.add(cn$a("m"));
        this.modeElem_ = createModeSelectElement(doc);
        this.modeElem_.classList.add(cn$a("ms"));
        modeElem.appendChild(this.modeSelectElement);
        config.viewProps.bindDisabled(this.modeElem_);
        const modeMarkerElem = doc.createElement("div");
        modeMarkerElem.classList.add(cn$a("mm"));
        modeMarkerElem.appendChild(createSvgIconElement(doc, "dropdown"));
        modeElem.appendChild(modeMarkerElem);
        this.element.appendChild(modeElem);
        const inputsElem = doc.createElement("div");
        inputsElem.classList.add(cn$a("w"));
        this.element.appendChild(inputsElem);
        this.inputsElem_ = inputsElem;
        this.inputViews_ = config.inputViews;
        this.applyInputViews_();
        bindValue(config.mode, (mode)=>{
            this.modeElem_.value = mode;
        });
    }
    get modeSelectElement() {
        return this.modeElem_;
    }
    get inputViews() {
        return this.inputViews_;
    }
    set inputViews(inputViews) {
        this.inputViews_ = inputViews;
        this.applyInputViews_();
    }
    applyInputViews_() {
        removeChildElements(this.inputsElem_);
        const doc = this.element.ownerDocument;
        this.inputViews_.forEach((v)=>{
            const compElem = doc.createElement("div");
            compElem.classList.add(cn$a("c"));
            compElem.appendChild(v.element);
            this.inputsElem_.appendChild(compElem);
        });
    }
}
function createFormatter$2(type) {
    return createNumberFormatter(type === "float" ? 2 : 0);
}
function createConstraint$5(mode, type, index) {
    const max = getColorMaxComponents(mode, type)[index];
    return new DefiniteRangeConstraint({
        min: 0,
        max: max
    });
}
function createComponentController(doc, config, index) {
    return new NumberTextController(doc, {
        arrayPosition: index === 0 ? "fst" : index === 2 ? "lst" : "mid",
        parser: config.parser,
        props: ValueMap.fromObject({
            formatter: createFormatter$2(config.colorType),
            keyScale: getKeyScaleForColor(false),
            pointerScale: config.colorType === "float" ? 0.01 : 1
        }),
        value: createValue(0, {
            constraint: createConstraint$5(config.colorMode, config.colorType, index)
        }),
        viewProps: config.viewProps
    });
}
function createComponentControllers(doc, config) {
    const cc = {
        colorMode: config.colorMode,
        colorType: config.colorType,
        parser: parseNumber,
        viewProps: config.viewProps
    };
    return [
        0,
        1,
        2
    ].map((i)=>{
        const c = createComponentController(doc, cc, i);
        connectValues({
            primary: config.value,
            secondary: c.value,
            forward (p) {
                const mc = mapColorType(p, config.colorType);
                return mc.getComponents(config.colorMode)[i];
            },
            backward (p, s) {
                const pickedMode = config.colorMode;
                const mc = mapColorType(p, config.colorType);
                const comps = mc.getComponents(pickedMode);
                comps[i] = s;
                const c = createColor(appendAlphaComponent(removeAlphaComponent(comps), comps[3]), pickedMode, config.colorType);
                return mapColorType(c, "int");
            }
        });
        return c;
    });
}
function createHexController(doc, config) {
    const c = new TextController(doc, {
        parser: createColorStringParser("int"),
        props: ValueMap.fromObject({
            formatter: colorToHexRgbString
        }),
        value: createValue(IntColor.black()),
        viewProps: config.viewProps
    });
    connectValues({
        primary: config.value,
        secondary: c.value,
        forward: (p)=>new IntColor(removeAlphaComponent(p.getComponents()), p.mode),
        backward: (p, s)=>new IntColor(appendAlphaComponent(removeAlphaComponent(s.getComponents(p.mode)), p.getComponents()[3]), p.mode)
    });
    return [
        c
    ];
}
function isColorMode(mode) {
    return mode !== "hex";
}
class ColorTextsController {
    constructor(doc, config){
        this.onModeSelectChange_ = this.onModeSelectChange_.bind(this);
        this.colorType_ = config.colorType;
        this.value = config.value;
        this.viewProps = config.viewProps;
        this.colorMode = createValue(this.value.rawValue.mode);
        this.ccs_ = this.createComponentControllers_(doc);
        this.view = new ColorTextsView(doc, {
            mode: this.colorMode,
            inputViews: [
                this.ccs_[0].view,
                this.ccs_[1].view,
                this.ccs_[2].view
            ],
            viewProps: this.viewProps
        });
        this.view.modeSelectElement.addEventListener("change", this.onModeSelectChange_);
    }
    createComponentControllers_(doc) {
        const mode = this.colorMode.rawValue;
        if (isColorMode(mode)) return createComponentControllers(doc, {
            colorMode: mode,
            colorType: this.colorType_,
            value: this.value,
            viewProps: this.viewProps
        });
        return createHexController(doc, {
            value: this.value,
            viewProps: this.viewProps
        });
    }
    onModeSelectChange_(ev) {
        const selectElem = ev.currentTarget;
        this.colorMode.rawValue = selectElem.value;
        this.ccs_ = this.createComponentControllers_(this.view.element.ownerDocument);
        this.view.inputViews = this.ccs_.map((cc)=>cc.view);
    }
}
const cn$9 = ClassName("hpl");
class HPaletteView {
    constructor(doc, config){
        this.onValueChange_ = this.onValueChange_.bind(this);
        this.value = config.value;
        this.value.emitter.on("change", this.onValueChange_);
        this.element = doc.createElement("div");
        this.element.classList.add(cn$9());
        config.viewProps.bindClassModifiers(this.element);
        config.viewProps.bindTabIndex(this.element);
        const colorElem = doc.createElement("div");
        colorElem.classList.add(cn$9("c"));
        this.element.appendChild(colorElem);
        const markerElem = doc.createElement("div");
        markerElem.classList.add(cn$9("m"));
        this.element.appendChild(markerElem);
        this.markerElem_ = markerElem;
        this.update_();
    }
    update_() {
        const c = this.value.rawValue;
        const [h] = c.getComponents("hsv");
        this.markerElem_.style.backgroundColor = colorToFunctionalRgbString(new IntColor([
            h,
            100,
            100
        ], "hsv"));
        const left = mapRange(h, 0, 360, 0, 100);
        this.markerElem_.style.left = `${left}%`;
    }
    onValueChange_() {
        this.update_();
    }
}
class HPaletteController {
    constructor(doc, config){
        this.onKeyDown_ = this.onKeyDown_.bind(this);
        this.onKeyUp_ = this.onKeyUp_.bind(this);
        this.onPointerDown_ = this.onPointerDown_.bind(this);
        this.onPointerMove_ = this.onPointerMove_.bind(this);
        this.onPointerUp_ = this.onPointerUp_.bind(this);
        this.value = config.value;
        this.viewProps = config.viewProps;
        this.view = new HPaletteView(doc, {
            value: this.value,
            viewProps: this.viewProps
        });
        this.ptHandler_ = new PointerHandler(this.view.element);
        this.ptHandler_.emitter.on("down", this.onPointerDown_);
        this.ptHandler_.emitter.on("move", this.onPointerMove_);
        this.ptHandler_.emitter.on("up", this.onPointerUp_);
        this.view.element.addEventListener("keydown", this.onKeyDown_);
        this.view.element.addEventListener("keyup", this.onKeyUp_);
    }
    handlePointerEvent_(d, opts) {
        if (!d.point) return;
        const hue = mapRange(constrainRange(d.point.x, 0, d.bounds.width), 0, d.bounds.width, 0, 360);
        const c = this.value.rawValue;
        const [, s, v, a] = c.getComponents("hsv");
        this.value.setRawValue(new IntColor([
            hue,
            s,
            v,
            a
        ], "hsv"), opts);
    }
    onPointerDown_(ev) {
        this.handlePointerEvent_(ev.data, {
            forceEmit: false,
            last: false
        });
    }
    onPointerMove_(ev) {
        this.handlePointerEvent_(ev.data, {
            forceEmit: false,
            last: false
        });
    }
    onPointerUp_(ev) {
        this.handlePointerEvent_(ev.data, {
            forceEmit: true,
            last: true
        });
    }
    onKeyDown_(ev) {
        const step = getStepForKey(getKeyScaleForColor(false), getHorizontalStepKeys(ev));
        if (step === 0) return;
        const c = this.value.rawValue;
        const [h, s, v, a] = c.getComponents("hsv");
        this.value.setRawValue(new IntColor([
            h + step,
            s,
            v,
            a
        ], "hsv"), {
            forceEmit: false,
            last: false
        });
    }
    onKeyUp_(ev) {
        const step = getStepForKey(getKeyScaleForColor(false), getHorizontalStepKeys(ev));
        if (step === 0) return;
        this.value.setRawValue(this.value.rawValue, {
            forceEmit: true,
            last: true
        });
    }
}
const cn$8 = ClassName("svp");
const CANVAS_RESOL = 64;
class SvPaletteView {
    constructor(doc, config){
        this.onValueChange_ = this.onValueChange_.bind(this);
        this.value = config.value;
        this.value.emitter.on("change", this.onValueChange_);
        this.element = doc.createElement("div");
        this.element.classList.add(cn$8());
        config.viewProps.bindClassModifiers(this.element);
        config.viewProps.bindTabIndex(this.element);
        const canvasElem = doc.createElement("canvas");
        canvasElem.height = CANVAS_RESOL;
        canvasElem.width = CANVAS_RESOL;
        canvasElem.classList.add(cn$8("c"));
        this.element.appendChild(canvasElem);
        this.canvasElement = canvasElem;
        const markerElem = doc.createElement("div");
        markerElem.classList.add(cn$8("m"));
        this.element.appendChild(markerElem);
        this.markerElem_ = markerElem;
        this.update_();
    }
    update_() {
        const ctx = getCanvasContext(this.canvasElement);
        if (!ctx) return;
        const c = this.value.rawValue;
        const hsvComps = c.getComponents("hsv");
        const width = this.canvasElement.width;
        const height = this.canvasElement.height;
        const imgData = ctx.getImageData(0, 0, width, height);
        const data = imgData.data;
        for(let iy = 0; iy < height; iy++)for(let ix = 0; ix < width; ix++){
            const s = mapRange(ix, 0, width, 0, 100);
            const v = mapRange(iy, 0, height, 100, 0);
            const rgbComps = hsvToRgbInt(hsvComps[0], s, v);
            const i = (iy * width + ix) * 4;
            data[i] = rgbComps[0];
            data[i + 1] = rgbComps[1];
            data[i + 2] = rgbComps[2];
            data[i + 3] = 255;
        }
        ctx.putImageData(imgData, 0, 0);
        const left = mapRange(hsvComps[1], 0, 100, 0, 100);
        this.markerElem_.style.left = `${left}%`;
        const top = mapRange(hsvComps[2], 0, 100, 100, 0);
        this.markerElem_.style.top = `${top}%`;
    }
    onValueChange_() {
        this.update_();
    }
}
class SvPaletteController {
    constructor(doc, config){
        this.onKeyDown_ = this.onKeyDown_.bind(this);
        this.onKeyUp_ = this.onKeyUp_.bind(this);
        this.onPointerDown_ = this.onPointerDown_.bind(this);
        this.onPointerMove_ = this.onPointerMove_.bind(this);
        this.onPointerUp_ = this.onPointerUp_.bind(this);
        this.value = config.value;
        this.viewProps = config.viewProps;
        this.view = new SvPaletteView(doc, {
            value: this.value,
            viewProps: this.viewProps
        });
        this.ptHandler_ = new PointerHandler(this.view.element);
        this.ptHandler_.emitter.on("down", this.onPointerDown_);
        this.ptHandler_.emitter.on("move", this.onPointerMove_);
        this.ptHandler_.emitter.on("up", this.onPointerUp_);
        this.view.element.addEventListener("keydown", this.onKeyDown_);
        this.view.element.addEventListener("keyup", this.onKeyUp_);
    }
    handlePointerEvent_(d, opts) {
        if (!d.point) return;
        const saturation = mapRange(d.point.x, 0, d.bounds.width, 0, 100);
        const value = mapRange(d.point.y, 0, d.bounds.height, 100, 0);
        const [h, , , a] = this.value.rawValue.getComponents("hsv");
        this.value.setRawValue(new IntColor([
            h,
            saturation,
            value,
            a
        ], "hsv"), opts);
    }
    onPointerDown_(ev) {
        this.handlePointerEvent_(ev.data, {
            forceEmit: false,
            last: false
        });
    }
    onPointerMove_(ev) {
        this.handlePointerEvent_(ev.data, {
            forceEmit: false,
            last: false
        });
    }
    onPointerUp_(ev) {
        this.handlePointerEvent_(ev.data, {
            forceEmit: true,
            last: true
        });
    }
    onKeyDown_(ev) {
        if (isArrowKey(ev.key)) ev.preventDefault();
        const [h, s, v, a] = this.value.rawValue.getComponents("hsv");
        const keyScale = getKeyScaleForColor(false);
        const ds = getStepForKey(keyScale, getHorizontalStepKeys(ev));
        const dv = getStepForKey(keyScale, getVerticalStepKeys(ev));
        if (ds === 0 && dv === 0) return;
        this.value.setRawValue(new IntColor([
            h,
            s + ds,
            v + dv,
            a
        ], "hsv"), {
            forceEmit: false,
            last: false
        });
    }
    onKeyUp_(ev) {
        const keyScale = getKeyScaleForColor(false);
        const ds = getStepForKey(keyScale, getHorizontalStepKeys(ev));
        const dv = getStepForKey(keyScale, getVerticalStepKeys(ev));
        if (ds === 0 && dv === 0) return;
        this.value.setRawValue(this.value.rawValue, {
            forceEmit: true,
            last: true
        });
    }
}
class ColorPickerController {
    constructor(doc, config){
        this.value = config.value;
        this.viewProps = config.viewProps;
        this.hPaletteC_ = new HPaletteController(doc, {
            value: this.value,
            viewProps: this.viewProps
        });
        this.svPaletteC_ = new SvPaletteController(doc, {
            value: this.value,
            viewProps: this.viewProps
        });
        this.alphaIcs_ = config.supportsAlpha ? {
            palette: new APaletteController(doc, {
                value: this.value,
                viewProps: this.viewProps
            }),
            text: new NumberTextController(doc, {
                parser: parseNumber,
                props: ValueMap.fromObject({
                    pointerScale: 0.01,
                    keyScale: 0.1,
                    formatter: createNumberFormatter(2)
                }),
                value: createValue(0, {
                    constraint: new DefiniteRangeConstraint({
                        min: 0,
                        max: 1
                    })
                }),
                viewProps: this.viewProps
            })
        } : null;
        if (this.alphaIcs_) connectValues({
            primary: this.value,
            secondary: this.alphaIcs_.text.value,
            forward: (p)=>p.getComponents()[3],
            backward: (p, s)=>{
                const comps = p.getComponents();
                comps[3] = s;
                return new IntColor(comps, p.mode);
            }
        });
        this.textsC_ = new ColorTextsController(doc, {
            colorType: config.colorType,
            value: this.value,
            viewProps: this.viewProps
        });
        this.view = new ColorPickerView(doc, {
            alphaViews: this.alphaIcs_ ? {
                palette: this.alphaIcs_.palette.view,
                text: this.alphaIcs_.text.view
            } : null,
            hPaletteView: this.hPaletteC_.view,
            supportsAlpha: config.supportsAlpha,
            svPaletteView: this.svPaletteC_.view,
            textsView: this.textsC_.view,
            viewProps: this.viewProps
        });
    }
    get textsController() {
        return this.textsC_;
    }
}
const cn$7 = ClassName("colsw");
class ColorSwatchView {
    constructor(doc, config){
        this.onValueChange_ = this.onValueChange_.bind(this);
        config.value.emitter.on("change", this.onValueChange_);
        this.value = config.value;
        this.element = doc.createElement("div");
        this.element.classList.add(cn$7());
        config.viewProps.bindClassModifiers(this.element);
        const swatchElem = doc.createElement("div");
        swatchElem.classList.add(cn$7("sw"));
        this.element.appendChild(swatchElem);
        this.swatchElem_ = swatchElem;
        const buttonElem = doc.createElement("button");
        buttonElem.classList.add(cn$7("b"));
        config.viewProps.bindDisabled(buttonElem);
        this.element.appendChild(buttonElem);
        this.buttonElement = buttonElem;
        this.update_();
    }
    update_() {
        const value = this.value.rawValue;
        this.swatchElem_.style.backgroundColor = colorToHexRgbaString(value);
    }
    onValueChange_() {
        this.update_();
    }
}
class ColorSwatchController {
    constructor(doc, config){
        this.value = config.value;
        this.viewProps = config.viewProps;
        this.view = new ColorSwatchView(doc, {
            value: this.value,
            viewProps: this.viewProps
        });
    }
}
class ColorController {
    constructor(doc, config){
        this.onButtonBlur_ = this.onButtonBlur_.bind(this);
        this.onButtonClick_ = this.onButtonClick_.bind(this);
        this.onPopupChildBlur_ = this.onPopupChildBlur_.bind(this);
        this.onPopupChildKeydown_ = this.onPopupChildKeydown_.bind(this);
        this.value = config.value;
        this.viewProps = config.viewProps;
        this.foldable_ = Foldable.create(config.expanded);
        this.swatchC_ = new ColorSwatchController(doc, {
            value: this.value,
            viewProps: this.viewProps
        });
        const buttonElem = this.swatchC_.view.buttonElement;
        buttonElem.addEventListener("blur", this.onButtonBlur_);
        buttonElem.addEventListener("click", this.onButtonClick_);
        this.textC_ = new TextController(doc, {
            parser: config.parser,
            props: ValueMap.fromObject({
                formatter: config.formatter
            }),
            value: this.value,
            viewProps: this.viewProps
        });
        this.view = new ColorView(doc, {
            foldable: this.foldable_,
            pickerLayout: config.pickerLayout
        });
        this.view.swatchElement.appendChild(this.swatchC_.view.element);
        this.view.textElement.appendChild(this.textC_.view.element);
        this.popC_ = config.pickerLayout === "popup" ? new PopupController(doc, {
            viewProps: this.viewProps
        }) : null;
        const pickerC = new ColorPickerController(doc, {
            colorType: config.colorType,
            supportsAlpha: config.supportsAlpha,
            value: this.value,
            viewProps: this.viewProps
        });
        pickerC.view.allFocusableElements.forEach((elem)=>{
            elem.addEventListener("blur", this.onPopupChildBlur_);
            elem.addEventListener("keydown", this.onPopupChildKeydown_);
        });
        this.pickerC_ = pickerC;
        if (this.popC_) {
            this.view.element.appendChild(this.popC_.view.element);
            this.popC_.view.element.appendChild(pickerC.view.element);
            connectValues({
                primary: this.foldable_.value("expanded"),
                secondary: this.popC_.shows,
                forward: (p)=>p,
                backward: (_, s)=>s
            });
        } else if (this.view.pickerElement) {
            this.view.pickerElement.appendChild(this.pickerC_.view.element);
            bindFoldable(this.foldable_, this.view.pickerElement);
        }
    }
    get textController() {
        return this.textC_;
    }
    onButtonBlur_(e) {
        if (!this.popC_) return;
        const elem = this.view.element;
        const nextTarget = forceCast(e.relatedTarget);
        if (!nextTarget || !elem.contains(nextTarget)) this.popC_.shows.rawValue = false;
    }
    onButtonClick_() {
        this.foldable_.set("expanded", !this.foldable_.get("expanded"));
        if (this.foldable_.get("expanded")) this.pickerC_.view.allFocusableElements[0].focus();
    }
    onPopupChildBlur_(ev) {
        if (!this.popC_) return;
        const elem = this.popC_.view.element;
        const nextTarget = findNextTarget(ev);
        if (nextTarget && elem.contains(nextTarget)) return;
        if (nextTarget && nextTarget === this.swatchC_.view.buttonElement && !supportsTouch(elem.ownerDocument)) return;
        this.popC_.shows.rawValue = false;
    }
    onPopupChildKeydown_(ev) {
        if (this.popC_) {
            if (ev.key === "Escape") this.popC_.shows.rawValue = false;
        } else if (this.view.pickerElement) {
            if (ev.key === "Escape") this.swatchC_.view.buttonElement.focus();
        }
    }
}
function colorToRgbNumber(value) {
    return removeAlphaComponent(value.getComponents("rgb")).reduce((result, comp)=>{
        return result << 8 | Math.floor(comp) & 0xff;
    }, 0);
}
function colorToRgbaNumber(value) {
    return value.getComponents("rgb").reduce((result, comp, index)=>{
        const hex = Math.floor(index === 3 ? comp * 255 : comp) & 0xff;
        return result << 8 | hex;
    }, 0) >>> 0;
}
function numberToRgbColor(num) {
    return new IntColor([
        num >> 16 & 0xff,
        num >> 8 & 0xff,
        num & 0xff
    ], "rgb");
}
function numberToRgbaColor(num) {
    return new IntColor([
        num >> 24 & 0xff,
        num >> 16 & 0xff,
        num >> 8 & 0xff,
        mapRange(num & 0xff, 0, 255, 0, 1)
    ], "rgb");
}
function colorFromRgbNumber(value) {
    if (typeof value !== "number") return IntColor.black();
    return numberToRgbColor(value);
}
function colorFromRgbaNumber(value) {
    if (typeof value !== "number") return IntColor.black();
    return numberToRgbaColor(value);
}
function isRgbColorComponent(obj, key) {
    if (typeof obj !== "object" || isEmpty(obj)) return false;
    return key in obj && typeof obj[key] === "number";
}
function isRgbColorObject(obj) {
    return isRgbColorComponent(obj, "r") && isRgbColorComponent(obj, "g") && isRgbColorComponent(obj, "b");
}
function isRgbaColorObject(obj) {
    return isRgbColorObject(obj) && isRgbColorComponent(obj, "a");
}
function isColorObject(obj) {
    return isRgbColorObject(obj);
}
function equalsColor(v1, v2) {
    if (v1.mode !== v2.mode) return false;
    if (v1.type !== v2.type) return false;
    const comps1 = v1.getComponents();
    const comps2 = v2.getComponents();
    for(let i = 0; i < comps1.length; i++){
        if (comps1[i] !== comps2[i]) return false;
    }
    return true;
}
function createColorComponentsFromRgbObject(obj) {
    return "a" in obj ? [
        obj.r,
        obj.g,
        obj.b,
        obj.a
    ] : [
        obj.r,
        obj.g,
        obj.b
    ];
}
function createColorStringWriter(format) {
    const stringify = findColorStringifier(format);
    return stringify ? (target, value)=>{
        writePrimitive(target, stringify(value));
    } : null;
}
function createColorNumberWriter(supportsAlpha) {
    const colorToNumber = supportsAlpha ? colorToRgbaNumber : colorToRgbNumber;
    return (target, value)=>{
        writePrimitive(target, colorToNumber(value));
    };
}
function writeRgbaColorObject(target, value, type) {
    const cc = mapColorType(value, type);
    const obj = cc.toRgbaObject();
    target.writeProperty("r", obj.r);
    target.writeProperty("g", obj.g);
    target.writeProperty("b", obj.b);
    target.writeProperty("a", obj.a);
}
function writeRgbColorObject(target, value, type) {
    const cc = mapColorType(value, type);
    const obj = cc.toRgbaObject();
    target.writeProperty("r", obj.r);
    target.writeProperty("g", obj.g);
    target.writeProperty("b", obj.b);
}
function createColorObjectWriter(supportsAlpha, type) {
    return (target, inValue)=>{
        if (supportsAlpha) writeRgbaColorObject(target, inValue, type);
        else writeRgbColorObject(target, inValue, type);
    };
}
function shouldSupportAlpha$1(inputParams) {
    var _a;
    if ((_a = inputParams === null || inputParams === void 0 ? void 0 : inputParams.color) === null || _a === void 0 ? void 0 : _a.alpha) return true;
    return false;
}
function createFormatter$1(supportsAlpha) {
    return supportsAlpha ? (v)=>colorToHexRgbaString(v, "0x") : (v)=>colorToHexRgbString(v, "0x");
}
function isForColor(params) {
    if ("color" in params) return true;
    if (params.view === "color") return true;
    return false;
}
const NumberColorInputPlugin = createPlugin({
    id: "input-color-number",
    type: "input",
    accept: (value, params)=>{
        if (typeof value !== "number") return null;
        if (!isForColor(params)) return null;
        const result = parseColorInputParams(params);
        return result ? {
            initialValue: value,
            params: Object.assign(Object.assign({}, result), {
                supportsAlpha: shouldSupportAlpha$1(params)
            })
        } : null;
    },
    binding: {
        reader: (args)=>{
            return args.params.supportsAlpha ? colorFromRgbaNumber : colorFromRgbNumber;
        },
        equals: equalsColor,
        writer: (args)=>{
            return createColorNumberWriter(args.params.supportsAlpha);
        }
    },
    controller: (args)=>{
        var _a, _b;
        return new ColorController(args.document, {
            colorType: "int",
            expanded: (_a = args.params.expanded) !== null && _a !== void 0 ? _a : false,
            formatter: createFormatter$1(args.params.supportsAlpha),
            parser: createColorStringParser("int"),
            pickerLayout: (_b = args.params.picker) !== null && _b !== void 0 ? _b : "popup",
            supportsAlpha: args.params.supportsAlpha,
            value: args.value,
            viewProps: args.viewProps
        });
    }
});
function colorFromObject(value, type) {
    if (!isColorObject(value)) return mapColorType(IntColor.black(), type);
    if (type === "int") {
        const comps = createColorComponentsFromRgbObject(value);
        return new IntColor(comps, "rgb");
    }
    if (type === "float") {
        const comps = createColorComponentsFromRgbObject(value);
        return new FloatColor(comps, "rgb");
    }
    return mapColorType(IntColor.black(), "int");
}
function shouldSupportAlpha(initialValue) {
    return isRgbaColorObject(initialValue);
}
function createColorObjectBindingReader(type) {
    return (value)=>{
        const c = colorFromObject(value, type);
        return mapColorType(c, "int");
    };
}
function createColorObjectFormatter(supportsAlpha, type) {
    return (value)=>{
        if (supportsAlpha) return colorToObjectRgbaString(value, type);
        return colorToObjectRgbString(value, type);
    };
}
const ObjectColorInputPlugin = createPlugin({
    id: "input-color-object",
    type: "input",
    accept: (value, params)=>{
        var _a;
        if (!isColorObject(value)) return null;
        const result = parseColorInputParams(params);
        return result ? {
            initialValue: value,
            params: Object.assign(Object.assign({}, result), {
                colorType: (_a = extractColorType(params)) !== null && _a !== void 0 ? _a : "int"
            })
        } : null;
    },
    binding: {
        reader: (args)=>createColorObjectBindingReader(args.params.colorType),
        equals: equalsColor,
        writer: (args)=>createColorObjectWriter(shouldSupportAlpha(args.initialValue), args.params.colorType)
    },
    controller: (args)=>{
        var _a, _b;
        const supportsAlpha = isRgbaColorObject(args.initialValue);
        return new ColorController(args.document, {
            colorType: args.params.colorType,
            expanded: (_a = args.params.expanded) !== null && _a !== void 0 ? _a : false,
            formatter: createColorObjectFormatter(supportsAlpha, args.params.colorType),
            parser: createColorStringParser("int"),
            pickerLayout: (_b = args.params.picker) !== null && _b !== void 0 ? _b : "popup",
            supportsAlpha: supportsAlpha,
            value: args.value,
            viewProps: args.viewProps
        });
    }
});
const StringColorInputPlugin = createPlugin({
    id: "input-color-string",
    type: "input",
    accept: (value, params)=>{
        if (typeof value !== "string") return null;
        if (params.view === "text") return null;
        const format = detectStringColorFormat(value, extractColorType(params));
        if (!format) return null;
        const stringifier = findColorStringifier(format);
        if (!stringifier) return null;
        const result = parseColorInputParams(params);
        return result ? {
            initialValue: value,
            params: Object.assign(Object.assign({}, result), {
                format: format,
                stringifier: stringifier
            })
        } : null;
    },
    binding: {
        reader: ()=>readIntColorString,
        equals: equalsColor,
        writer: (args)=>{
            const writer = createColorStringWriter(args.params.format);
            if (!writer) throw TpError.notBindable();
            return writer;
        }
    },
    controller: (args)=>{
        var _a, _b;
        return new ColorController(args.document, {
            colorType: args.params.format.type,
            expanded: (_a = args.params.expanded) !== null && _a !== void 0 ? _a : false,
            formatter: args.params.stringifier,
            parser: createColorStringParser("int"),
            pickerLayout: (_b = args.params.picker) !== null && _b !== void 0 ? _b : "popup",
            supportsAlpha: args.params.format.alpha,
            value: args.value,
            viewProps: args.viewProps
        });
    }
});
class PointNdConstraint {
    constructor(config){
        this.components = config.components;
        this.asm_ = config.assembly;
    }
    constrain(value) {
        const comps = this.asm_.toComponents(value).map((comp, index)=>{
            var _a, _b;
            return (_b = (_a = this.components[index]) === null || _a === void 0 ? void 0 : _a.constrain(comp)) !== null && _b !== void 0 ? _b : comp;
        });
        return this.asm_.fromComponents(comps);
    }
}
const cn$6 = ClassName("pndtxt");
class PointNdTextView {
    constructor(doc, config){
        this.textViews = config.textViews;
        this.element = doc.createElement("div");
        this.element.classList.add(cn$6());
        this.textViews.forEach((v)=>{
            const axisElem = doc.createElement("div");
            axisElem.classList.add(cn$6("a"));
            axisElem.appendChild(v.element);
            this.element.appendChild(axisElem);
        });
    }
}
function createAxisController(doc, config, index) {
    return new NumberTextController(doc, {
        arrayPosition: index === 0 ? "fst" : index === config.axes.length - 1 ? "lst" : "mid",
        parser: config.parser,
        props: config.axes[index].textProps,
        value: createValue(0, {
            constraint: config.axes[index].constraint
        }),
        viewProps: config.viewProps
    });
}
class PointNdTextController {
    constructor(doc, config){
        this.value = config.value;
        this.viewProps = config.viewProps;
        this.acs_ = config.axes.map((_, index)=>createAxisController(doc, config, index));
        this.acs_.forEach((c, index)=>{
            connectValues({
                primary: this.value,
                secondary: c.value,
                forward: (p)=>config.assembly.toComponents(p)[index],
                backward: (p, s)=>{
                    const comps = config.assembly.toComponents(p);
                    comps[index] = s;
                    return config.assembly.fromComponents(comps);
                }
            });
        });
        this.view = new PointNdTextView(doc, {
            textViews: this.acs_.map((ac)=>ac.view)
        });
    }
    get textControllers() {
        return this.acs_;
    }
}
class SliderInputBindingApi extends BindingApi {
    get max() {
        return this.controller.valueController.sliderController.props.get("max");
    }
    set max(max) {
        this.controller.valueController.sliderController.props.set("max", max);
    }
    get min() {
        return this.controller.valueController.sliderController.props.get("min");
    }
    set min(max) {
        this.controller.valueController.sliderController.props.set("min", max);
    }
}
function createConstraint$4(params, initialValue) {
    const constraints = [];
    const sc = createStepConstraint(params, initialValue);
    if (sc) constraints.push(sc);
    const rc = createRangeConstraint(params);
    if (rc) constraints.push(rc);
    const lc = createListConstraint(params.options);
    if (lc) constraints.push(lc);
    return new CompositeConstraint(constraints);
}
const NumberInputPlugin = createPlugin({
    id: "input-number",
    type: "input",
    accept: (value, params)=>{
        if (typeof value !== "number") return null;
        const result = parseRecord(params, (p)=>Object.assign(Object.assign({}, createNumberTextInputParamsParser(p)), {
                options: p.optional.custom(parseListOptions),
                readonly: p.optional.constant(false)
            }));
        return result ? {
            initialValue: value,
            params: result
        } : null;
    },
    binding: {
        reader: (_args)=>numberFromUnknown,
        constraint: (args)=>createConstraint$4(args.params, args.initialValue),
        writer: (_args)=>writePrimitive
    },
    controller: (args)=>{
        const value = args.value;
        const c = args.constraint;
        const lc = c && findConstraint(c, ListConstraint);
        if (lc) return new ListController(args.document, {
            props: new ValueMap({
                options: lc.values.value("options")
            }),
            value: value,
            viewProps: args.viewProps
        });
        const textPropsObj = createNumberTextPropsObject(args.params, value.rawValue);
        const drc = c && findConstraint(c, DefiniteRangeConstraint);
        if (drc) return new SliderTextController(args.document, Object.assign(Object.assign({}, createSliderTextProps(Object.assign(Object.assign({}, textPropsObj), {
            keyScale: createValue(textPropsObj.keyScale),
            max: drc.values.value("max"),
            min: drc.values.value("min")
        }))), {
            parser: parseNumber,
            value: value,
            viewProps: args.viewProps
        }));
        return new NumberTextController(args.document, {
            parser: parseNumber,
            props: ValueMap.fromObject(textPropsObj),
            value: value,
            viewProps: args.viewProps
        });
    },
    api (args) {
        if (typeof args.controller.value.rawValue !== "number") return null;
        if (args.controller.valueController instanceof SliderTextController) return new SliderInputBindingApi(args.controller);
        if (args.controller.valueController instanceof ListController) return new ListInputBindingApi(args.controller);
        return null;
    }
});
class Point2d {
    constructor(x = 0, y = 0){
        this.x = x;
        this.y = y;
    }
    getComponents() {
        return [
            this.x,
            this.y
        ];
    }
    static isObject(obj) {
        if (isEmpty(obj)) return false;
        const x = obj.x;
        const y = obj.y;
        if (typeof x !== "number" || typeof y !== "number") return false;
        return true;
    }
    static equals(v1, v2) {
        return v1.x === v2.x && v1.y === v2.y;
    }
    toObject() {
        return {
            x: this.x,
            y: this.y
        };
    }
}
const Point2dAssembly = {
    toComponents: (p)=>p.getComponents(),
    fromComponents: (comps)=>new Point2d(...comps)
};
const cn$5 = ClassName("p2d");
class Point2dView {
    constructor(doc, config){
        this.element = doc.createElement("div");
        this.element.classList.add(cn$5());
        config.viewProps.bindClassModifiers(this.element);
        bindValue(config.expanded, valueToClassName(this.element, cn$5(undefined, "expanded")));
        const headElem = doc.createElement("div");
        headElem.classList.add(cn$5("h"));
        this.element.appendChild(headElem);
        const buttonElem = doc.createElement("button");
        buttonElem.classList.add(cn$5("b"));
        buttonElem.appendChild(createSvgIconElement(doc, "p2dpad"));
        config.viewProps.bindDisabled(buttonElem);
        headElem.appendChild(buttonElem);
        this.buttonElement = buttonElem;
        const textElem = doc.createElement("div");
        textElem.classList.add(cn$5("t"));
        headElem.appendChild(textElem);
        this.textElement = textElem;
        if (config.pickerLayout === "inline") {
            const pickerElem = doc.createElement("div");
            pickerElem.classList.add(cn$5("p"));
            this.element.appendChild(pickerElem);
            this.pickerElement = pickerElem;
        } else this.pickerElement = null;
    }
}
const cn$4 = ClassName("p2dp");
class Point2dPickerView {
    constructor(doc, config){
        this.onFoldableChange_ = this.onFoldableChange_.bind(this);
        this.onPropsChange_ = this.onPropsChange_.bind(this);
        this.onValueChange_ = this.onValueChange_.bind(this);
        this.props_ = config.props;
        this.props_.emitter.on("change", this.onPropsChange_);
        this.element = doc.createElement("div");
        this.element.classList.add(cn$4());
        if (config.layout === "popup") this.element.classList.add(cn$4(undefined, "p"));
        config.viewProps.bindClassModifiers(this.element);
        const padElem = doc.createElement("div");
        padElem.classList.add(cn$4("p"));
        config.viewProps.bindTabIndex(padElem);
        this.element.appendChild(padElem);
        this.padElement = padElem;
        const svgElem = doc.createElementNS(SVG_NS, "svg");
        svgElem.classList.add(cn$4("g"));
        this.padElement.appendChild(svgElem);
        this.svgElem_ = svgElem;
        const xAxisElem = doc.createElementNS(SVG_NS, "line");
        xAxisElem.classList.add(cn$4("ax"));
        xAxisElem.setAttributeNS(null, "x1", "0");
        xAxisElem.setAttributeNS(null, "y1", "50%");
        xAxisElem.setAttributeNS(null, "x2", "100%");
        xAxisElem.setAttributeNS(null, "y2", "50%");
        this.svgElem_.appendChild(xAxisElem);
        const yAxisElem = doc.createElementNS(SVG_NS, "line");
        yAxisElem.classList.add(cn$4("ax"));
        yAxisElem.setAttributeNS(null, "x1", "50%");
        yAxisElem.setAttributeNS(null, "y1", "0");
        yAxisElem.setAttributeNS(null, "x2", "50%");
        yAxisElem.setAttributeNS(null, "y2", "100%");
        this.svgElem_.appendChild(yAxisElem);
        const lineElem = doc.createElementNS(SVG_NS, "line");
        lineElem.classList.add(cn$4("l"));
        lineElem.setAttributeNS(null, "x1", "50%");
        lineElem.setAttributeNS(null, "y1", "50%");
        this.svgElem_.appendChild(lineElem);
        this.lineElem_ = lineElem;
        const markerElem = doc.createElement("div");
        markerElem.classList.add(cn$4("m"));
        this.padElement.appendChild(markerElem);
        this.markerElem_ = markerElem;
        config.value.emitter.on("change", this.onValueChange_);
        this.value = config.value;
        this.update_();
    }
    get allFocusableElements() {
        return [
            this.padElement
        ];
    }
    update_() {
        const [x, y] = this.value.rawValue.getComponents();
        const max = this.props_.get("max");
        const px = mapRange(x, -max, +max, 0, 100);
        const py = mapRange(y, -max, +max, 0, 100);
        const ipy = this.props_.get("invertsY") ? 100 - py : py;
        this.lineElem_.setAttributeNS(null, "x2", `${px}%`);
        this.lineElem_.setAttributeNS(null, "y2", `${ipy}%`);
        this.markerElem_.style.left = `${px}%`;
        this.markerElem_.style.top = `${ipy}%`;
    }
    onValueChange_() {
        this.update_();
    }
    onPropsChange_() {
        this.update_();
    }
    onFoldableChange_() {
        this.update_();
    }
}
function computeOffset(ev, keyScales, invertsY) {
    return [
        getStepForKey(keyScales[0], getHorizontalStepKeys(ev)),
        getStepForKey(keyScales[1], getVerticalStepKeys(ev)) * (invertsY ? 1 : -1)
    ];
}
class Point2dPickerController {
    constructor(doc, config){
        this.onPadKeyDown_ = this.onPadKeyDown_.bind(this);
        this.onPadKeyUp_ = this.onPadKeyUp_.bind(this);
        this.onPointerDown_ = this.onPointerDown_.bind(this);
        this.onPointerMove_ = this.onPointerMove_.bind(this);
        this.onPointerUp_ = this.onPointerUp_.bind(this);
        this.props = config.props;
        this.value = config.value;
        this.viewProps = config.viewProps;
        this.view = new Point2dPickerView(doc, {
            layout: config.layout,
            props: this.props,
            value: this.value,
            viewProps: this.viewProps
        });
        this.ptHandler_ = new PointerHandler(this.view.padElement);
        this.ptHandler_.emitter.on("down", this.onPointerDown_);
        this.ptHandler_.emitter.on("move", this.onPointerMove_);
        this.ptHandler_.emitter.on("up", this.onPointerUp_);
        this.view.padElement.addEventListener("keydown", this.onPadKeyDown_);
        this.view.padElement.addEventListener("keyup", this.onPadKeyUp_);
    }
    handlePointerEvent_(d, opts) {
        if (!d.point) return;
        const max = this.props.get("max");
        const px = mapRange(d.point.x, 0, d.bounds.width, -max, +max);
        const py = mapRange(this.props.get("invertsY") ? d.bounds.height - d.point.y : d.point.y, 0, d.bounds.height, -max, +max);
        this.value.setRawValue(new Point2d(px, py), opts);
    }
    onPointerDown_(ev) {
        this.handlePointerEvent_(ev.data, {
            forceEmit: false,
            last: false
        });
    }
    onPointerMove_(ev) {
        this.handlePointerEvent_(ev.data, {
            forceEmit: false,
            last: false
        });
    }
    onPointerUp_(ev) {
        this.handlePointerEvent_(ev.data, {
            forceEmit: true,
            last: true
        });
    }
    onPadKeyDown_(ev) {
        if (isArrowKey(ev.key)) ev.preventDefault();
        const [dx, dy] = computeOffset(ev, [
            this.props.get("xKeyScale"),
            this.props.get("yKeyScale")
        ], this.props.get("invertsY"));
        if (dx === 0 && dy === 0) return;
        this.value.setRawValue(new Point2d(this.value.rawValue.x + dx, this.value.rawValue.y + dy), {
            forceEmit: false,
            last: false
        });
    }
    onPadKeyUp_(ev) {
        const [dx, dy] = computeOffset(ev, [
            this.props.get("xKeyScale"),
            this.props.get("yKeyScale")
        ], this.props.get("invertsY"));
        if (dx === 0 && dy === 0) return;
        this.value.setRawValue(this.value.rawValue, {
            forceEmit: true,
            last: true
        });
    }
}
class Point2dController {
    constructor(doc, config){
        var _a, _b;
        this.onPopupChildBlur_ = this.onPopupChildBlur_.bind(this);
        this.onPopupChildKeydown_ = this.onPopupChildKeydown_.bind(this);
        this.onPadButtonBlur_ = this.onPadButtonBlur_.bind(this);
        this.onPadButtonClick_ = this.onPadButtonClick_.bind(this);
        this.value = config.value;
        this.viewProps = config.viewProps;
        this.foldable_ = Foldable.create(config.expanded);
        this.popC_ = config.pickerLayout === "popup" ? new PopupController(doc, {
            viewProps: this.viewProps
        }) : null;
        const padC = new Point2dPickerController(doc, {
            layout: config.pickerLayout,
            props: new ValueMap({
                invertsY: createValue(config.invertsY),
                max: createValue(config.max),
                xKeyScale: config.axes[0].textProps.value("keyScale"),
                yKeyScale: config.axes[1].textProps.value("keyScale")
            }),
            value: this.value,
            viewProps: this.viewProps
        });
        padC.view.allFocusableElements.forEach((elem)=>{
            elem.addEventListener("blur", this.onPopupChildBlur_);
            elem.addEventListener("keydown", this.onPopupChildKeydown_);
        });
        this.pickerC_ = padC;
        this.textC_ = new PointNdTextController(doc, {
            assembly: Point2dAssembly,
            axes: config.axes,
            parser: config.parser,
            value: this.value,
            viewProps: this.viewProps
        });
        this.view = new Point2dView(doc, {
            expanded: this.foldable_.value("expanded"),
            pickerLayout: config.pickerLayout,
            viewProps: this.viewProps
        });
        this.view.textElement.appendChild(this.textC_.view.element);
        (_a = this.view.buttonElement) === null || _a === void 0 || _a.addEventListener("blur", this.onPadButtonBlur_);
        (_b = this.view.buttonElement) === null || _b === void 0 || _b.addEventListener("click", this.onPadButtonClick_);
        if (this.popC_) {
            this.view.element.appendChild(this.popC_.view.element);
            this.popC_.view.element.appendChild(this.pickerC_.view.element);
            connectValues({
                primary: this.foldable_.value("expanded"),
                secondary: this.popC_.shows,
                forward: (p)=>p,
                backward: (_, s)=>s
            });
        } else if (this.view.pickerElement) {
            this.view.pickerElement.appendChild(this.pickerC_.view.element);
            bindFoldable(this.foldable_, this.view.pickerElement);
        }
    }
    get textController() {
        return this.textC_;
    }
    onPadButtonBlur_(e) {
        if (!this.popC_) return;
        const elem = this.view.element;
        const nextTarget = forceCast(e.relatedTarget);
        if (!nextTarget || !elem.contains(nextTarget)) this.popC_.shows.rawValue = false;
    }
    onPadButtonClick_() {
        this.foldable_.set("expanded", !this.foldable_.get("expanded"));
        if (this.foldable_.get("expanded")) this.pickerC_.view.allFocusableElements[0].focus();
    }
    onPopupChildBlur_(ev) {
        if (!this.popC_) return;
        const elem = this.popC_.view.element;
        const nextTarget = findNextTarget(ev);
        if (nextTarget && elem.contains(nextTarget)) return;
        if (nextTarget && nextTarget === this.view.buttonElement && !supportsTouch(elem.ownerDocument)) return;
        this.popC_.shows.rawValue = false;
    }
    onPopupChildKeydown_(ev) {
        if (this.popC_) {
            if (ev.key === "Escape") this.popC_.shows.rawValue = false;
        } else if (this.view.pickerElement) {
            if (ev.key === "Escape") this.view.buttonElement.focus();
        }
    }
}
function point2dFromUnknown(value) {
    return Point2d.isObject(value) ? new Point2d(value.x, value.y) : new Point2d();
}
function writePoint2d(target, value) {
    target.writeProperty("x", value.x);
    target.writeProperty("y", value.y);
}
function createConstraint$3(params, initialValue) {
    return new PointNdConstraint({
        assembly: Point2dAssembly,
        components: [
            createDimensionConstraint(Object.assign(Object.assign({}, params), params.x), initialValue.x),
            createDimensionConstraint(Object.assign(Object.assign({}, params), params.y), initialValue.y)
        ]
    });
}
function getSuitableMaxDimensionValue(params, rawValue) {
    var _a, _b;
    if (!isEmpty(params.min) || !isEmpty(params.max)) return Math.max(Math.abs((_a = params.min) !== null && _a !== void 0 ? _a : 0), Math.abs((_b = params.max) !== null && _b !== void 0 ? _b : 0));
    const step = getSuitableKeyScale(params);
    return Math.max(Math.abs(step) * 10, Math.abs(rawValue) * 10);
}
function getSuitableMax(params, initialValue) {
    var _a, _b;
    const xr = getSuitableMaxDimensionValue(deepMerge(params, (_a = params.x) !== null && _a !== void 0 ? _a : {}), initialValue.x);
    const yr = getSuitableMaxDimensionValue(deepMerge(params, (_b = params.y) !== null && _b !== void 0 ? _b : {}), initialValue.y);
    return Math.max(xr, yr);
}
function shouldInvertY(params) {
    if (!("y" in params)) return false;
    const yParams = params.y;
    if (!yParams) return false;
    return "inverted" in yParams ? !!yParams.inverted : false;
}
const Point2dInputPlugin = createPlugin({
    id: "input-point2d",
    type: "input",
    accept: (value, params)=>{
        if (!Point2d.isObject(value)) return null;
        const result = parseRecord(params, (p)=>Object.assign(Object.assign({}, createPointDimensionParser(p)), {
                expanded: p.optional.boolean,
                picker: p.optional.custom(parsePickerLayout),
                readonly: p.optional.constant(false),
                x: p.optional.custom(parsePointDimensionParams),
                y: p.optional.object(Object.assign(Object.assign({}, createPointDimensionParser(p)), {
                    inverted: p.optional.boolean
                }))
            }));
        return result ? {
            initialValue: value,
            params: result
        } : null;
    },
    binding: {
        reader: ()=>point2dFromUnknown,
        constraint: (args)=>createConstraint$3(args.params, args.initialValue),
        equals: Point2d.equals,
        writer: ()=>writePoint2d
    },
    controller: (args)=>{
        var _a, _b;
        const doc = args.document;
        const value = args.value;
        const c = args.constraint;
        const dParams = [
            args.params.x,
            args.params.y
        ];
        return new Point2dController(doc, {
            axes: value.rawValue.getComponents().map((comp, i)=>{
                var _a;
                return createPointAxis({
                    constraint: c.components[i],
                    initialValue: comp,
                    params: deepMerge(args.params, (_a = dParams[i]) !== null && _a !== void 0 ? _a : {})
                });
            }),
            expanded: (_a = args.params.expanded) !== null && _a !== void 0 ? _a : false,
            invertsY: shouldInvertY(args.params),
            max: getSuitableMax(args.params, value.rawValue),
            parser: parseNumber,
            pickerLayout: (_b = args.params.picker) !== null && _b !== void 0 ? _b : "popup",
            value: value,
            viewProps: args.viewProps
        });
    }
});
class Point3d {
    constructor(x = 0, y = 0, z = 0){
        this.x = x;
        this.y = y;
        this.z = z;
    }
    getComponents() {
        return [
            this.x,
            this.y,
            this.z
        ];
    }
    static isObject(obj) {
        if (isEmpty(obj)) return false;
        const x = obj.x;
        const y = obj.y;
        const z = obj.z;
        if (typeof x !== "number" || typeof y !== "number" || typeof z !== "number") return false;
        return true;
    }
    static equals(v1, v2) {
        return v1.x === v2.x && v1.y === v2.y && v1.z === v2.z;
    }
    toObject() {
        return {
            x: this.x,
            y: this.y,
            z: this.z
        };
    }
}
const Point3dAssembly = {
    toComponents: (p)=>p.getComponents(),
    fromComponents: (comps)=>new Point3d(...comps)
};
function point3dFromUnknown(value) {
    return Point3d.isObject(value) ? new Point3d(value.x, value.y, value.z) : new Point3d();
}
function writePoint3d(target, value) {
    target.writeProperty("x", value.x);
    target.writeProperty("y", value.y);
    target.writeProperty("z", value.z);
}
function createConstraint$2(params, initialValue) {
    return new PointNdConstraint({
        assembly: Point3dAssembly,
        components: [
            createDimensionConstraint(Object.assign(Object.assign({}, params), params.x), initialValue.x),
            createDimensionConstraint(Object.assign(Object.assign({}, params), params.y), initialValue.y),
            createDimensionConstraint(Object.assign(Object.assign({}, params), params.z), initialValue.z)
        ]
    });
}
const Point3dInputPlugin = createPlugin({
    id: "input-point3d",
    type: "input",
    accept: (value, params)=>{
        if (!Point3d.isObject(value)) return null;
        const result = parseRecord(params, (p)=>Object.assign(Object.assign({}, createPointDimensionParser(p)), {
                readonly: p.optional.constant(false),
                x: p.optional.custom(parsePointDimensionParams),
                y: p.optional.custom(parsePointDimensionParams),
                z: p.optional.custom(parsePointDimensionParams)
            }));
        return result ? {
            initialValue: value,
            params: result
        } : null;
    },
    binding: {
        reader: (_args)=>point3dFromUnknown,
        constraint: (args)=>createConstraint$2(args.params, args.initialValue),
        equals: Point3d.equals,
        writer: (_args)=>writePoint3d
    },
    controller: (args)=>{
        const value = args.value;
        const c = args.constraint;
        const dParams = [
            args.params.x,
            args.params.y,
            args.params.z
        ];
        return new PointNdTextController(args.document, {
            assembly: Point3dAssembly,
            axes: value.rawValue.getComponents().map((comp, i)=>{
                var _a;
                return createPointAxis({
                    constraint: c.components[i],
                    initialValue: comp,
                    params: deepMerge(args.params, (_a = dParams[i]) !== null && _a !== void 0 ? _a : {})
                });
            }),
            parser: parseNumber,
            value: value,
            viewProps: args.viewProps
        });
    }
});
class Point4d {
    constructor(x = 0, y = 0, z = 0, w = 0){
        this.x = x;
        this.y = y;
        this.z = z;
        this.w = w;
    }
    getComponents() {
        return [
            this.x,
            this.y,
            this.z,
            this.w
        ];
    }
    static isObject(obj) {
        if (isEmpty(obj)) return false;
        const x = obj.x;
        const y = obj.y;
        const z = obj.z;
        const w = obj.w;
        if (typeof x !== "number" || typeof y !== "number" || typeof z !== "number" || typeof w !== "number") return false;
        return true;
    }
    static equals(v1, v2) {
        return v1.x === v2.x && v1.y === v2.y && v1.z === v2.z && v1.w === v2.w;
    }
    toObject() {
        return {
            x: this.x,
            y: this.y,
            z: this.z,
            w: this.w
        };
    }
}
const Point4dAssembly = {
    toComponents: (p)=>p.getComponents(),
    fromComponents: (comps)=>new Point4d(...comps)
};
function point4dFromUnknown(value) {
    return Point4d.isObject(value) ? new Point4d(value.x, value.y, value.z, value.w) : new Point4d();
}
function writePoint4d(target, value) {
    target.writeProperty("x", value.x);
    target.writeProperty("y", value.y);
    target.writeProperty("z", value.z);
    target.writeProperty("w", value.w);
}
function createConstraint$1(params, initialValue) {
    return new PointNdConstraint({
        assembly: Point4dAssembly,
        components: [
            createDimensionConstraint(Object.assign(Object.assign({}, params), params.x), initialValue.x),
            createDimensionConstraint(Object.assign(Object.assign({}, params), params.y), initialValue.y),
            createDimensionConstraint(Object.assign(Object.assign({}, params), params.z), initialValue.z),
            createDimensionConstraint(Object.assign(Object.assign({}, params), params.w), initialValue.w)
        ]
    });
}
const Point4dInputPlugin = createPlugin({
    id: "input-point4d",
    type: "input",
    accept: (value, params)=>{
        if (!Point4d.isObject(value)) return null;
        const result = parseRecord(params, (p)=>Object.assign(Object.assign({}, createPointDimensionParser(p)), {
                readonly: p.optional.constant(false),
                w: p.optional.custom(parsePointDimensionParams),
                x: p.optional.custom(parsePointDimensionParams),
                y: p.optional.custom(parsePointDimensionParams),
                z: p.optional.custom(parsePointDimensionParams)
            }));
        return result ? {
            initialValue: value,
            params: result
        } : null;
    },
    binding: {
        reader: (_args)=>point4dFromUnknown,
        constraint: (args)=>createConstraint$1(args.params, args.initialValue),
        equals: Point4d.equals,
        writer: (_args)=>writePoint4d
    },
    controller: (args)=>{
        const value = args.value;
        const c = args.constraint;
        const dParams = [
            args.params.x,
            args.params.y,
            args.params.z,
            args.params.w
        ];
        return new PointNdTextController(args.document, {
            assembly: Point4dAssembly,
            axes: value.rawValue.getComponents().map((comp, i)=>{
                var _a;
                return createPointAxis({
                    constraint: c.components[i],
                    initialValue: comp,
                    params: deepMerge(args.params, (_a = dParams[i]) !== null && _a !== void 0 ? _a : {})
                });
            }),
            parser: parseNumber,
            value: value,
            viewProps: args.viewProps
        });
    }
});
function createConstraint(params) {
    const constraints = [];
    const lc = createListConstraint(params.options);
    if (lc) constraints.push(lc);
    return new CompositeConstraint(constraints);
}
const StringInputPlugin = createPlugin({
    id: "input-string",
    type: "input",
    accept: (value, params)=>{
        if (typeof value !== "string") return null;
        const result = parseRecord(params, (p)=>({
                readonly: p.optional.constant(false),
                options: p.optional.custom(parseListOptions)
            }));
        return result ? {
            initialValue: value,
            params: result
        } : null;
    },
    binding: {
        reader: (_args)=>stringFromUnknown,
        constraint: (args)=>createConstraint(args.params),
        writer: (_args)=>writePrimitive
    },
    controller: (args)=>{
        const doc = args.document;
        const value = args.value;
        const c = args.constraint;
        const lc = c && findConstraint(c, ListConstraint);
        if (lc) return new ListController(doc, {
            props: new ValueMap({
                options: lc.values.value("options")
            }),
            value: value,
            viewProps: args.viewProps
        });
        return new TextController(doc, {
            parser: (v)=>v,
            props: ValueMap.fromObject({
                formatter: formatString
            }),
            value: value,
            viewProps: args.viewProps
        });
    },
    api (args) {
        if (typeof args.controller.value.rawValue !== "string") return null;
        if (args.controller.valueController instanceof ListController) return new ListInputBindingApi(args.controller);
        return null;
    }
});
const Constants = {
    monitor: {
        defaultInterval: 200,
        defaultRows: 3
    }
};
const cn$3 = ClassName("mll");
class MultiLogView {
    constructor(doc, config){
        this.onValueUpdate_ = this.onValueUpdate_.bind(this);
        this.formatter_ = config.formatter;
        this.element = doc.createElement("div");
        this.element.classList.add(cn$3());
        config.viewProps.bindClassModifiers(this.element);
        const textareaElem = doc.createElement("textarea");
        textareaElem.classList.add(cn$3("i"));
        textareaElem.style.height = `calc(var(${getCssVar("containerUnitSize")}) * ${config.rows})`;
        textareaElem.readOnly = true;
        config.viewProps.bindDisabled(textareaElem);
        this.element.appendChild(textareaElem);
        this.textareaElem_ = textareaElem;
        config.value.emitter.on("change", this.onValueUpdate_);
        this.value = config.value;
        this.update_();
    }
    update_() {
        const elem = this.textareaElem_;
        const shouldScroll = elem.scrollTop === elem.scrollHeight - elem.clientHeight;
        const lines = [];
        this.value.rawValue.forEach((value)=>{
            if (value !== undefined) lines.push(this.formatter_(value));
        });
        elem.textContent = lines.join("\n");
        if (shouldScroll) elem.scrollTop = elem.scrollHeight;
    }
    onValueUpdate_() {
        this.update_();
    }
}
class MultiLogController {
    constructor(doc, config){
        this.value = config.value;
        this.viewProps = config.viewProps;
        this.view = new MultiLogView(doc, {
            formatter: config.formatter,
            rows: config.rows,
            value: this.value,
            viewProps: this.viewProps
        });
    }
}
const cn$2 = ClassName("sgl");
class SingleLogView {
    constructor(doc, config){
        this.onValueUpdate_ = this.onValueUpdate_.bind(this);
        this.formatter_ = config.formatter;
        this.element = doc.createElement("div");
        this.element.classList.add(cn$2());
        config.viewProps.bindClassModifiers(this.element);
        const inputElem = doc.createElement("input");
        inputElem.classList.add(cn$2("i"));
        inputElem.readOnly = true;
        inputElem.type = "text";
        config.viewProps.bindDisabled(inputElem);
        this.element.appendChild(inputElem);
        this.inputElement = inputElem;
        config.value.emitter.on("change", this.onValueUpdate_);
        this.value = config.value;
        this.update_();
    }
    update_() {
        const values = this.value.rawValue;
        const lastValue = values[values.length - 1];
        this.inputElement.value = lastValue !== undefined ? this.formatter_(lastValue) : "";
    }
    onValueUpdate_() {
        this.update_();
    }
}
class SingleLogController {
    constructor(doc, config){
        this.value = config.value;
        this.viewProps = config.viewProps;
        this.view = new SingleLogView(doc, {
            formatter: config.formatter,
            value: this.value,
            viewProps: this.viewProps
        });
    }
}
const BooleanMonitorPlugin = createPlugin({
    id: "monitor-bool",
    type: "monitor",
    accept: (value, params)=>{
        if (typeof value !== "boolean") return null;
        const result = parseRecord(params, (p)=>({
                readonly: p.required.constant(true),
                rows: p.optional.number
            }));
        return result ? {
            initialValue: value,
            params: result
        } : null;
    },
    binding: {
        reader: (_args)=>boolFromUnknown
    },
    controller: (args)=>{
        var _a;
        if (args.value.rawValue.length === 1) return new SingleLogController(args.document, {
            formatter: BooleanFormatter,
            value: args.value,
            viewProps: args.viewProps
        });
        return new MultiLogController(args.document, {
            formatter: BooleanFormatter,
            rows: (_a = args.params.rows) !== null && _a !== void 0 ? _a : Constants.monitor.defaultRows,
            value: args.value,
            viewProps: args.viewProps
        });
    }
});
class GraphLogMonitorBindingApi extends BindingApi {
    get max() {
        return this.controller.valueController.props.get("max");
    }
    set max(max) {
        this.controller.valueController.props.set("max", max);
    }
    get min() {
        return this.controller.valueController.props.get("min");
    }
    set min(min) {
        this.controller.valueController.props.set("min", min);
    }
}
const cn$1 = ClassName("grl");
class GraphLogView {
    constructor(doc, config){
        this.onCursorChange_ = this.onCursorChange_.bind(this);
        this.onValueUpdate_ = this.onValueUpdate_.bind(this);
        this.element = doc.createElement("div");
        this.element.classList.add(cn$1());
        config.viewProps.bindClassModifiers(this.element);
        this.formatter_ = config.formatter;
        this.props_ = config.props;
        this.cursor_ = config.cursor;
        this.cursor_.emitter.on("change", this.onCursorChange_);
        const svgElem = doc.createElementNS(SVG_NS, "svg");
        svgElem.classList.add(cn$1("g"));
        svgElem.style.height = `calc(var(${getCssVar("containerUnitSize")}) * ${config.rows})`;
        this.element.appendChild(svgElem);
        this.svgElem_ = svgElem;
        const lineElem = doc.createElementNS(SVG_NS, "polyline");
        this.svgElem_.appendChild(lineElem);
        this.lineElem_ = lineElem;
        const tooltipElem = doc.createElement("div");
        tooltipElem.classList.add(cn$1("t"), ClassName("tt")());
        this.element.appendChild(tooltipElem);
        this.tooltipElem_ = tooltipElem;
        config.value.emitter.on("change", this.onValueUpdate_);
        this.value = config.value;
        this.update_();
    }
    get graphElement() {
        return this.svgElem_;
    }
    update_() {
        const { clientWidth: w, clientHeight: h } = this.element;
        const maxIndex = this.value.rawValue.length - 1;
        const min = this.props_.get("min");
        const max = this.props_.get("max");
        const points = [];
        this.value.rawValue.forEach((v, index)=>{
            if (v === undefined) return;
            const x = mapRange(index, 0, maxIndex, 0, w);
            const y = mapRange(v, min, max, h, 0);
            points.push([
                x,
                y
            ].join(","));
        });
        this.lineElem_.setAttributeNS(null, "points", points.join(" "));
        const tooltipElem = this.tooltipElem_;
        const value = this.value.rawValue[this.cursor_.rawValue];
        if (value === undefined) {
            tooltipElem.classList.remove(cn$1("t", "a"));
            return;
        }
        const tx = mapRange(this.cursor_.rawValue, 0, maxIndex, 0, w);
        const ty = mapRange(value, min, max, h, 0);
        tooltipElem.style.left = `${tx}px`;
        tooltipElem.style.top = `${ty}px`;
        tooltipElem.textContent = `${this.formatter_(value)}`;
        if (!tooltipElem.classList.contains(cn$1("t", "a"))) {
            tooltipElem.classList.add(cn$1("t", "a"), cn$1("t", "in"));
            forceReflow(tooltipElem);
            tooltipElem.classList.remove(cn$1("t", "in"));
        }
    }
    onValueUpdate_() {
        this.update_();
    }
    onCursorChange_() {
        this.update_();
    }
}
class GraphLogController {
    constructor(doc, config){
        this.onGraphMouseMove_ = this.onGraphMouseMove_.bind(this);
        this.onGraphMouseLeave_ = this.onGraphMouseLeave_.bind(this);
        this.onGraphPointerDown_ = this.onGraphPointerDown_.bind(this);
        this.onGraphPointerMove_ = this.onGraphPointerMove_.bind(this);
        this.onGraphPointerUp_ = this.onGraphPointerUp_.bind(this);
        this.props = config.props;
        this.value = config.value;
        this.viewProps = config.viewProps;
        this.cursor_ = createValue(-1);
        this.view = new GraphLogView(doc, {
            cursor: this.cursor_,
            formatter: config.formatter,
            rows: config.rows,
            props: this.props,
            value: this.value,
            viewProps: this.viewProps
        });
        if (!supportsTouch(doc)) {
            this.view.element.addEventListener("mousemove", this.onGraphMouseMove_);
            this.view.element.addEventListener("mouseleave", this.onGraphMouseLeave_);
        } else {
            const ph = new PointerHandler(this.view.element);
            ph.emitter.on("down", this.onGraphPointerDown_);
            ph.emitter.on("move", this.onGraphPointerMove_);
            ph.emitter.on("up", this.onGraphPointerUp_);
        }
    }
    importProps(state) {
        return importBladeState(state, null, (p)=>({
                max: p.required.number,
                min: p.required.number
            }), (result)=>{
            this.props.set("max", result.max);
            this.props.set("min", result.min);
            return true;
        });
    }
    exportProps() {
        return exportBladeState(null, {
            max: this.props.get("max"),
            min: this.props.get("min")
        });
    }
    onGraphMouseLeave_() {
        this.cursor_.rawValue = -1;
    }
    onGraphMouseMove_(ev) {
        const { clientWidth: w } = this.view.element;
        this.cursor_.rawValue = Math.floor(mapRange(ev.offsetX, 0, w, 0, this.value.rawValue.length));
    }
    onGraphPointerDown_(ev) {
        this.onGraphPointerMove_(ev);
    }
    onGraphPointerMove_(ev) {
        if (!ev.data.point) {
            this.cursor_.rawValue = -1;
            return;
        }
        this.cursor_.rawValue = Math.floor(mapRange(ev.data.point.x, 0, ev.data.bounds.width, 0, this.value.rawValue.length));
    }
    onGraphPointerUp_() {
        this.cursor_.rawValue = -1;
    }
}
function createFormatter(params) {
    return !isEmpty(params.format) ? params.format : createNumberFormatter(2);
}
function createTextMonitor(args) {
    var _a;
    if (args.value.rawValue.length === 1) return new SingleLogController(args.document, {
        formatter: createFormatter(args.params),
        value: args.value,
        viewProps: args.viewProps
    });
    return new MultiLogController(args.document, {
        formatter: createFormatter(args.params),
        rows: (_a = args.params.rows) !== null && _a !== void 0 ? _a : Constants.monitor.defaultRows,
        value: args.value,
        viewProps: args.viewProps
    });
}
function createGraphMonitor(args) {
    var _a, _b, _c;
    return new GraphLogController(args.document, {
        formatter: createFormatter(args.params),
        rows: (_a = args.params.rows) !== null && _a !== void 0 ? _a : Constants.monitor.defaultRows,
        props: ValueMap.fromObject({
            max: (_b = args.params.max) !== null && _b !== void 0 ? _b : 100,
            min: (_c = args.params.min) !== null && _c !== void 0 ? _c : 0
        }),
        value: args.value,
        viewProps: args.viewProps
    });
}
function shouldShowGraph(params) {
    return params.view === "graph";
}
const NumberMonitorPlugin = createPlugin({
    id: "monitor-number",
    type: "monitor",
    accept: (value, params)=>{
        if (typeof value !== "number") return null;
        const result = parseRecord(params, (p)=>({
                format: p.optional.function,
                max: p.optional.number,
                min: p.optional.number,
                readonly: p.required.constant(true),
                rows: p.optional.number,
                view: p.optional.string
            }));
        return result ? {
            initialValue: value,
            params: result
        } : null;
    },
    binding: {
        defaultBufferSize: (params)=>shouldShowGraph(params) ? 64 : 1,
        reader: (_args)=>numberFromUnknown
    },
    controller: (args)=>{
        if (shouldShowGraph(args.params)) return createGraphMonitor(args);
        return createTextMonitor(args);
    },
    api: (args)=>{
        if (args.controller.valueController instanceof GraphLogController) return new GraphLogMonitorBindingApi(args.controller);
        return null;
    }
});
const StringMonitorPlugin = createPlugin({
    id: "monitor-string",
    type: "monitor",
    accept: (value, params)=>{
        if (typeof value !== "string") return null;
        const result = parseRecord(params, (p)=>({
                multiline: p.optional.boolean,
                readonly: p.required.constant(true),
                rows: p.optional.number
            }));
        return result ? {
            initialValue: value,
            params: result
        } : null;
    },
    binding: {
        reader: (_args)=>stringFromUnknown
    },
    controller: (args)=>{
        var _a;
        const value = args.value;
        const multiline = value.rawValue.length > 1 || args.params.multiline;
        if (multiline) return new MultiLogController(args.document, {
            formatter: formatString,
            rows: (_a = args.params.rows) !== null && _a !== void 0 ? _a : Constants.monitor.defaultRows,
            value: value,
            viewProps: args.viewProps
        });
        return new SingleLogController(args.document, {
            formatter: formatString,
            value: value,
            viewProps: args.viewProps
        });
    }
});
class BladeApiCache {
    constructor(){
        this.map_ = new Map();
    }
    get(bc) {
        var _a;
        return (_a = this.map_.get(bc)) !== null && _a !== void 0 ? _a : null;
    }
    has(bc) {
        return this.map_.has(bc);
    }
    add(bc, api) {
        this.map_.set(bc, api);
        bc.viewProps.handleDispose(()=>{
            this.map_.delete(bc);
        });
        return api;
    }
}
class ReadWriteBinding {
    constructor(config){
        this.target = config.target;
        this.reader_ = config.reader;
        this.writer_ = config.writer;
    }
    read() {
        return this.reader_(this.target.read());
    }
    write(value) {
        this.writer_(this.target, value);
    }
    inject(value) {
        this.write(this.reader_(value));
    }
}
function createInputBindingController(plugin, args) {
    var _a;
    const result = plugin.accept(args.target.read(), args.params);
    if (isEmpty(result)) return null;
    const valueArgs = {
        target: args.target,
        initialValue: result.initialValue,
        params: result.params
    };
    const params = parseRecord(args.params, (p)=>({
            disabled: p.optional.boolean,
            hidden: p.optional.boolean,
            label: p.optional.string,
            tag: p.optional.string
        }));
    const reader = plugin.binding.reader(valueArgs);
    const constraint = plugin.binding.constraint ? plugin.binding.constraint(valueArgs) : undefined;
    const binding = new ReadWriteBinding({
        reader: reader,
        target: args.target,
        writer: plugin.binding.writer(valueArgs)
    });
    const value = new InputBindingValue(createValue(reader(result.initialValue), {
        constraint: constraint,
        equals: plugin.binding.equals
    }), binding);
    const controller = plugin.controller({
        constraint: constraint,
        document: args.document,
        initialValue: result.initialValue,
        params: result.params,
        value: value,
        viewProps: ViewProps.create({
            disabled: params === null || params === void 0 ? void 0 : params.disabled,
            hidden: params === null || params === void 0 ? void 0 : params.hidden
        })
    });
    return new InputBindingController(args.document, {
        blade: createBlade(),
        props: ValueMap.fromObject({
            label: "label" in args.params ? (_a = params === null || params === void 0 ? void 0 : params.label) !== null && _a !== void 0 ? _a : null : args.target.key
        }),
        tag: params === null || params === void 0 ? void 0 : params.tag,
        value: value,
        valueController: controller
    });
}
class ReadonlyBinding {
    constructor(config){
        this.target = config.target;
        this.reader_ = config.reader;
    }
    read() {
        return this.reader_(this.target.read());
    }
}
function createTicker(document, interval) {
    return interval === 0 ? new ManualTicker() : new IntervalTicker(document, interval !== null && interval !== void 0 ? interval : Constants.monitor.defaultInterval);
}
function createMonitorBindingController(plugin, args) {
    var _a, _b, _c;
    const result = plugin.accept(args.target.read(), args.params);
    if (isEmpty(result)) return null;
    const bindingArgs = {
        target: args.target,
        initialValue: result.initialValue,
        params: result.params
    };
    const params = parseRecord(args.params, (p)=>({
            bufferSize: p.optional.number,
            disabled: p.optional.boolean,
            hidden: p.optional.boolean,
            interval: p.optional.number,
            label: p.optional.string
        }));
    const reader = plugin.binding.reader(bindingArgs);
    const bufferSize = (_b = (_a = params === null || params === void 0 ? void 0 : params.bufferSize) !== null && _a !== void 0 ? _a : plugin.binding.defaultBufferSize && plugin.binding.defaultBufferSize(result.params)) !== null && _b !== void 0 ? _b : 1;
    const value = new MonitorBindingValue({
        binding: new ReadonlyBinding({
            reader: reader,
            target: args.target
        }),
        bufferSize: bufferSize,
        ticker: createTicker(args.document, params === null || params === void 0 ? void 0 : params.interval)
    });
    const controller = plugin.controller({
        document: args.document,
        params: result.params,
        value: value,
        viewProps: ViewProps.create({
            disabled: params === null || params === void 0 ? void 0 : params.disabled,
            hidden: params === null || params === void 0 ? void 0 : params.hidden
        })
    });
    controller.viewProps.bindDisabled(value.ticker);
    controller.viewProps.handleDispose(()=>{
        value.ticker.dispose();
    });
    return new MonitorBindingController(args.document, {
        blade: createBlade(),
        props: ValueMap.fromObject({
            label: "label" in args.params ? (_c = params === null || params === void 0 ? void 0 : params.label) !== null && _c !== void 0 ? _c : null : args.target.key
        }),
        value: value,
        valueController: controller
    });
}
class PluginPool {
    constructor(apiCache){
        this.pluginsMap_ = {
            blades: [],
            inputs: [],
            monitors: []
        };
        this.apiCache_ = apiCache;
    }
    getAll() {
        return [
            ...this.pluginsMap_.blades,
            ...this.pluginsMap_.inputs,
            ...this.pluginsMap_.monitors
        ];
    }
    register(bundleId, r) {
        if (!isCompatible(r.core)) throw TpError.notCompatible(bundleId, r.id);
        if (r.type === "blade") this.pluginsMap_.blades.unshift(r);
        else if (r.type === "input") this.pluginsMap_.inputs.unshift(r);
        else if (r.type === "monitor") this.pluginsMap_.monitors.unshift(r);
    }
    createInput_(document, target, params) {
        return this.pluginsMap_.inputs.reduce((result, plugin)=>result !== null && result !== void 0 ? result : createInputBindingController(plugin, {
                document: document,
                target: target,
                params: params
            }), null);
    }
    createMonitor_(document, target, params) {
        return this.pluginsMap_.monitors.reduce((result, plugin)=>result !== null && result !== void 0 ? result : createMonitorBindingController(plugin, {
                document: document,
                params: params,
                target: target
            }), null);
    }
    createBinding(doc, target, params) {
        const initialValue = target.read();
        if (isEmpty(initialValue)) throw new TpError({
            context: {
                key: target.key
            },
            type: "nomatchingcontroller"
        });
        const ic = this.createInput_(doc, target, params);
        if (ic) return ic;
        const mc = this.createMonitor_(doc, target, params);
        if (mc) return mc;
        throw new TpError({
            context: {
                key: target.key
            },
            type: "nomatchingcontroller"
        });
    }
    createBlade(document, params) {
        const bc = this.pluginsMap_.blades.reduce((result, plugin)=>result !== null && result !== void 0 ? result : createBladeController(plugin, {
                document: document,
                params: params
            }), null);
        if (!bc) throw new TpError({
            type: "nomatchingview",
            context: {
                params: params
            }
        });
        return bc;
    }
    createInputBindingApi_(bc) {
        const api = this.pluginsMap_.inputs.reduce((result, plugin)=>{
            var _a, _b;
            if (result) return result;
            return (_b = (_a = plugin.api) === null || _a === void 0 ? void 0 : _a.call(plugin, {
                controller: bc
            })) !== null && _b !== void 0 ? _b : null;
        }, null);
        return this.apiCache_.add(bc, api !== null && api !== void 0 ? api : new BindingApi(bc));
    }
    createMonitorBindingApi_(bc) {
        const api = this.pluginsMap_.monitors.reduce((result, plugin)=>{
            var _a, _b;
            if (result) return result;
            return (_b = (_a = plugin.api) === null || _a === void 0 ? void 0 : _a.call(plugin, {
                controller: bc
            })) !== null && _b !== void 0 ? _b : null;
        }, null);
        return this.apiCache_.add(bc, api !== null && api !== void 0 ? api : new BindingApi(bc));
    }
    createBindingApi(bc) {
        if (this.apiCache_.has(bc)) return this.apiCache_.get(bc);
        if (isInputBindingController(bc)) return this.createInputBindingApi_(bc);
        if (isMonitorBindingController(bc)) return this.createMonitorBindingApi_(bc);
        throw TpError.shouldNeverHappen();
    }
    createApi(bc) {
        if (this.apiCache_.has(bc)) return this.apiCache_.get(bc);
        if (isBindingController(bc)) return this.createBindingApi(bc);
        const api = this.pluginsMap_.blades.reduce((result, plugin)=>result !== null && result !== void 0 ? result : plugin.api({
                controller: bc,
                pool: this
            }), null);
        if (!api) throw TpError.shouldNeverHappen();
        return this.apiCache_.add(bc, api);
    }
}
const sharedCache = new BladeApiCache();
function createDefaultPluginPool() {
    const pool = new PluginPool(sharedCache);
    [
        Point2dInputPlugin,
        Point3dInputPlugin,
        Point4dInputPlugin,
        StringInputPlugin,
        NumberInputPlugin,
        StringColorInputPlugin,
        ObjectColorInputPlugin,
        NumberColorInputPlugin,
        BooleanInputPlugin,
        BooleanMonitorPlugin,
        StringMonitorPlugin,
        NumberMonitorPlugin,
        ButtonBladePlugin,
        FolderBladePlugin,
        TabBladePlugin
    ].forEach((p)=>{
        pool.register("core", p);
    });
    return pool;
}
class ListBladeApi extends BladeApi {
    /**
     * @hidden
     */ constructor(controller){
        super(controller);
        this.emitter_ = new Emitter();
        this.controller.value.emitter.on("change", (ev)=>{
            this.emitter_.emit("change", new TpChangeEvent(this, ev.rawValue));
        });
    }
    get label() {
        return this.controller.labelController.props.get("label");
    }
    set label(label) {
        this.controller.labelController.props.set("label", label);
    }
    get options() {
        return this.controller.valueController.props.get("options");
    }
    set options(options) {
        this.controller.valueController.props.set("options", options);
    }
    get value() {
        return this.controller.value.rawValue;
    }
    set value(value) {
        this.controller.value.rawValue = value;
    }
    on(eventName, handler) {
        const bh = handler.bind(this);
        this.emitter_.on(eventName, (ev)=>{
            bh(ev);
        }, {
            key: handler
        });
        return this;
    }
    off(eventName, handler) {
        this.emitter_.off(eventName, handler);
        return this;
    }
}
class SeparatorBladeApi extends BladeApi {
}
class SliderBladeApi extends BladeApi {
    /**
     * @hidden
     */ constructor(controller){
        super(controller);
        this.emitter_ = new Emitter();
        this.controller.value.emitter.on("change", (ev)=>{
            this.emitter_.emit("change", new TpChangeEvent(this, ev.rawValue));
        });
    }
    get label() {
        return this.controller.labelController.props.get("label");
    }
    set label(label) {
        this.controller.labelController.props.set("label", label);
    }
    get max() {
        return this.controller.valueController.sliderController.props.get("max");
    }
    set max(max) {
        this.controller.valueController.sliderController.props.set("max", max);
    }
    get min() {
        return this.controller.valueController.sliderController.props.get("min");
    }
    set min(min) {
        this.controller.valueController.sliderController.props.set("min", min);
    }
    get value() {
        return this.controller.value.rawValue;
    }
    set value(value) {
        this.controller.value.rawValue = value;
    }
    on(eventName, handler) {
        const bh = handler.bind(this);
        this.emitter_.on(eventName, (ev)=>{
            bh(ev);
        }, {
            key: handler
        });
        return this;
    }
    off(eventName, handler) {
        this.emitter_.off(eventName, handler);
        return this;
    }
}
class TextBladeApi extends BladeApi {
    /**
     * @hidden
     */ constructor(controller){
        super(controller);
        this.emitter_ = new Emitter();
        this.controller.value.emitter.on("change", (ev)=>{
            this.emitter_.emit("change", new TpChangeEvent(this, ev.rawValue));
        });
    }
    get label() {
        return this.controller.labelController.props.get("label");
    }
    set label(label) {
        this.controller.labelController.props.set("label", label);
    }
    get formatter() {
        return this.controller.valueController.props.get("formatter");
    }
    set formatter(formatter) {
        this.controller.valueController.props.set("formatter", formatter);
    }
    get value() {
        return this.controller.value.rawValue;
    }
    set value(value) {
        this.controller.value.rawValue = value;
    }
    on(eventName, handler) {
        const bh = handler.bind(this);
        this.emitter_.on(eventName, (ev)=>{
            bh(ev);
        }, {
            key: handler
        });
        return this;
    }
    off(eventName, handler) {
        this.emitter_.off(eventName, handler);
        return this;
    }
}
const ListBladePlugin = function() {
    return {
        id: "list",
        type: "blade",
        core: VERSION$1,
        accept (params) {
            const result = parseRecord(params, (p)=>({
                    options: p.required.custom(parseListOptions),
                    value: p.required.raw,
                    view: p.required.constant("list"),
                    label: p.optional.string
                }));
            return result ? {
                params: result
            } : null;
        },
        controller (args) {
            const lc = new ListConstraint(normalizeListOptions(args.params.options));
            const value = createValue(args.params.value, {
                constraint: lc
            });
            const ic = new ListController(args.document, {
                props: new ValueMap({
                    options: lc.values.value("options")
                }),
                value: value,
                viewProps: args.viewProps
            });
            return new LabeledValueBladeController(args.document, {
                blade: args.blade,
                props: ValueMap.fromObject({
                    label: args.params.label
                }),
                value: value,
                valueController: ic
            });
        },
        api (args) {
            if (!(args.controller instanceof LabeledValueBladeController)) return null;
            if (!(args.controller.valueController instanceof ListController)) return null;
            return new ListBladeApi(args.controller);
        }
    };
}();
class RootApi extends FolderApi {
    /**
     * @hidden
     */ constructor(controller, pool){
        super(controller, pool);
    }
    get element() {
        return this.controller.view.element;
    }
}
/**
 * @hidden
 */ class RootController extends FolderController {
    constructor(doc, config){
        super(doc, {
            expanded: config.expanded,
            blade: config.blade,
            props: config.props,
            root: true,
            viewProps: config.viewProps
        });
    }
}
const cn = ClassName("spr");
/**
 * @hidden
 */ class SeparatorView {
    constructor(doc, config){
        this.element = doc.createElement("div");
        this.element.classList.add(cn());
        config.viewProps.bindClassModifiers(this.element);
        const hrElem = doc.createElement("hr");
        hrElem.classList.add(cn("r"));
        this.element.appendChild(hrElem);
    }
}
/**
 * @hidden
 */ class SeparatorController extends BladeController {
    /**
     * @hidden
     */ constructor(doc, config){
        super(Object.assign(Object.assign({}, config), {
            view: new SeparatorView(doc, {
                viewProps: config.viewProps
            })
        }));
    }
}
const SeparatorBladePlugin = {
    id: "separator",
    type: "blade",
    core: VERSION$1,
    accept (params) {
        const result = parseRecord(params, (p)=>({
                view: p.required.constant("separator")
            }));
        return result ? {
            params: result
        } : null;
    },
    controller (args) {
        return new SeparatorController(args.document, {
            blade: args.blade,
            viewProps: args.viewProps
        });
    },
    api (args) {
        if (!(args.controller instanceof SeparatorController)) return null;
        return new SeparatorBladeApi(args.controller);
    }
};
const SliderBladePlugin = {
    id: "slider",
    type: "blade",
    core: VERSION$1,
    accept (params) {
        const result = parseRecord(params, (p)=>({
                max: p.required.number,
                min: p.required.number,
                view: p.required.constant("slider"),
                format: p.optional.function,
                label: p.optional.string,
                value: p.optional.number
            }));
        return result ? {
            params: result
        } : null;
    },
    controller (args) {
        var _a, _b;
        const initialValue = (_a = args.params.value) !== null && _a !== void 0 ? _a : 0;
        const drc = new DefiniteRangeConstraint({
            max: args.params.max,
            min: args.params.min
        });
        const v = createValue(initialValue, {
            constraint: drc
        });
        const vc = new SliderTextController(args.document, Object.assign(Object.assign({}, createSliderTextProps({
            formatter: (_b = args.params.format) !== null && _b !== void 0 ? _b : numberToString,
            keyScale: createValue(1),
            max: drc.values.value("max"),
            min: drc.values.value("min"),
            pointerScale: getSuitablePointerScale(args.params, initialValue)
        })), {
            parser: parseNumber,
            value: v,
            viewProps: args.viewProps
        }));
        return new LabeledValueBladeController(args.document, {
            blade: args.blade,
            props: ValueMap.fromObject({
                label: args.params.label
            }),
            value: v,
            valueController: vc
        });
    },
    api (args) {
        if (!(args.controller instanceof LabeledValueBladeController)) return null;
        if (!(args.controller.valueController instanceof SliderTextController)) return null;
        return new SliderBladeApi(args.controller);
    }
};
const TextBladePlugin = function() {
    return {
        id: "text",
        type: "blade",
        core: VERSION$1,
        accept (params) {
            const result = parseRecord(params, (p)=>({
                    parse: p.required.function,
                    value: p.required.raw,
                    view: p.required.constant("text"),
                    format: p.optional.function,
                    label: p.optional.string
                }));
            return result ? {
                params: result
            } : null;
        },
        controller (args) {
            var _a;
            const v = createValue(args.params.value);
            const ic = new TextController(args.document, {
                parser: args.params.parse,
                props: ValueMap.fromObject({
                    formatter: (_a = args.params.format) !== null && _a !== void 0 ? _a : (v)=>String(v)
                }),
                value: v,
                viewProps: args.viewProps
            });
            return new LabeledValueBladeController(args.document, {
                blade: args.blade,
                props: ValueMap.fromObject({
                    label: args.params.label
                }),
                value: v,
                valueController: ic
            });
        },
        api (args) {
            if (!(args.controller instanceof LabeledValueBladeController)) return null;
            if (!(args.controller.valueController instanceof TextController)) return null;
            return new TextBladeApi(args.controller);
        }
    };
}();
function createDefaultWrapperElement(doc) {
    const elem = doc.createElement("div");
    elem.classList.add(ClassName("dfw")());
    if (doc.body) doc.body.appendChild(elem);
    return elem;
}
function embedStyle(doc, id, css) {
    if (doc.querySelector(`style[data-tp-style=${id}]`)) return;
    const styleElem = doc.createElement("style");
    styleElem.dataset.tpStyle = id;
    styleElem.textContent = css;
    doc.head.appendChild(styleElem);
}
/**
 * The root pane of Tweakpane.
 */ class Pane extends RootApi {
    constructor(opt_config){
        var _a, _b;
        const config = opt_config !== null && opt_config !== void 0 ? opt_config : {};
        const doc = (_a = config.document) !== null && _a !== void 0 ? _a : getWindowDocument();
        const pool = createDefaultPluginPool();
        const rootController = new RootController(doc, {
            expanded: config.expanded,
            blade: createBlade(),
            props: ValueMap.fromObject({
                title: config.title
            }),
            viewProps: ViewProps.create()
        });
        super(rootController, pool);
        this.pool_ = pool;
        this.containerElem_ = (_b = config.container) !== null && _b !== void 0 ? _b : createDefaultWrapperElement(doc);
        this.containerElem_.appendChild(this.element);
        this.doc_ = doc;
        this.usesDefaultWrapper_ = !config.container;
        this.setUpDefaultPlugins_();
    }
    get document() {
        if (!this.doc_) throw TpError.alreadyDisposed();
        return this.doc_;
    }
    dispose() {
        const containerElem = this.containerElem_;
        if (!containerElem) throw TpError.alreadyDisposed();
        if (this.usesDefaultWrapper_) {
            const parentElem = containerElem.parentElement;
            if (parentElem) parentElem.removeChild(containerElem);
        }
        this.containerElem_ = null;
        this.doc_ = null;
        super.dispose();
    }
    registerPlugin(bundle) {
        if (bundle.css) embedStyle(this.document, `plugin-${bundle.id}`, bundle.css);
        const plugins = "plugin" in bundle ? [
            bundle.plugin
        ] : "plugins" in bundle ? bundle.plugins : [];
        plugins.forEach((p)=>{
            this.pool_.register(bundle.id, p);
        });
    }
    setUpDefaultPlugins_() {
        this.registerPlugin({
            id: "default",
            // NOTE: This string literal will be replaced with the default CSS by Rollup at the compilation time
            css: '.tp-tbiv_b,.tp-coltxtv_ms,.tp-colswv_b,.tp-ckbv_i,.tp-sglv_i,.tp-mllv_i,.tp-grlv_g,.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw,.tp-rotv_b,.tp-fldv_b,.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0}.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{background-color:var(--btn-bg);border-radius:var(--bld-br);color:var(--btn-fg);cursor:pointer;display:block;font-weight:bold;height:var(--cnt-usz);line-height:var(--cnt-usz);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tp-p2dv_b:hover,.tp-btnv_b:hover,.tp-lstv_s:hover{background-color:var(--btn-bg-h)}.tp-p2dv_b:focus,.tp-btnv_b:focus,.tp-lstv_s:focus{background-color:var(--btn-bg-f)}.tp-p2dv_b:active,.tp-btnv_b:active,.tp-lstv_s:active{background-color:var(--btn-bg-a)}.tp-p2dv_b:disabled,.tp-btnv_b:disabled,.tp-lstv_s:disabled{opacity:.5}.tp-rotv_c>.tp-cntv.tp-v-lst,.tp-tbpv_c>.tp-cntv.tp-v-lst,.tp-fldv_c>.tp-cntv.tp-v-lst{margin-bottom:calc(-1*var(--cnt-vp))}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-tbpv_c>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_c{border-bottom-left-radius:0}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-tbpv_c>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_b{border-bottom-left-radius:0}.tp-rotv_c>*:not(.tp-v-fst),.tp-tbpv_c>*:not(.tp-v-fst),.tp-fldv_c>*:not(.tp-v-fst){margin-top:var(--cnt-usp)}.tp-rotv_c>.tp-sprv:not(.tp-v-fst),.tp-tbpv_c>.tp-sprv:not(.tp-v-fst),.tp-fldv_c>.tp-sprv:not(.tp-v-fst),.tp-rotv_c>.tp-cntv:not(.tp-v-fst),.tp-tbpv_c>.tp-cntv:not(.tp-v-fst),.tp-fldv_c>.tp-cntv:not(.tp-v-fst){margin-top:var(--cnt-vp)}.tp-rotv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-tbpv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-rotv_c>.tp-cntv+*:not(.tp-v-hidden),.tp-tbpv_c>.tp-cntv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-cntv+*:not(.tp-v-hidden){margin-top:var(--cnt-vp)}.tp-rotv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-tbpv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-fldv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-rotv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-tbpv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-fldv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv{margin-top:0}.tp-tbpv_c>.tp-cntv,.tp-fldv_c>.tp-cntv{margin-left:4px}.tp-tbpv_c>.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-fldv>.tp-fldv_b{border-top-left-radius:var(--bld-br);border-bottom-left-radius:var(--bld-br)}.tp-tbpv_c>.tp-fldv.tp-fldv-expanded>.tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-fldv-expanded>.tp-fldv_b{border-bottom-left-radius:0}.tp-tbpv_c .tp-fldv>.tp-fldv_c,.tp-fldv_c .tp-fldv>.tp-fldv_c{border-bottom-left-radius:var(--bld-br)}.tp-tbpv_c>.tp-cntv+.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-cntv+.tp-fldv>.tp-fldv_b{border-top-left-radius:0}.tp-tbpv_c>.tp-cntv+.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-cntv+.tp-tabv>.tp-tabv_t{border-top-left-radius:0}.tp-tbpv_c>.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-tabv>.tp-tabv_t{border-top-left-radius:var(--bld-br)}.tp-tbpv_c .tp-tabv>.tp-tabv_c,.tp-fldv_c .tp-tabv>.tp-tabv_c{border-bottom-left-radius:var(--bld-br)}.tp-rotv_b,.tp-fldv_b{background-color:var(--cnt-bg);color:var(--cnt-fg);cursor:pointer;display:block;height:calc(var(--cnt-usz) + 4px);line-height:calc(var(--cnt-usz) + 4px);overflow:hidden;padding-left:var(--cnt-hp);padding-right:calc(4px + var(--cnt-usz) + var(--cnt-hp));position:relative;text-align:left;text-overflow:ellipsis;white-space:nowrap;width:100%;transition:border-radius .2s ease-in-out .2s}.tp-rotv_b:hover,.tp-fldv_b:hover{background-color:var(--cnt-bg-h)}.tp-rotv_b:focus,.tp-fldv_b:focus{background-color:var(--cnt-bg-f)}.tp-rotv_b:active,.tp-fldv_b:active{background-color:var(--cnt-bg-a)}.tp-rotv_b:disabled,.tp-fldv_b:disabled{opacity:.5}.tp-rotv_m,.tp-fldv_m{background:linear-gradient(to left, var(--cnt-fg), var(--cnt-fg) 2px, transparent 2px, transparent 4px, var(--cnt-fg) 4px);border-radius:2px;bottom:0;content:"";display:block;height:6px;right:calc(var(--cnt-hp) + (var(--cnt-usz) + 4px - 6px)/2 - 2px);margin:auto;opacity:.5;position:absolute;top:0;transform:rotate(90deg);transition:transform .2s ease-in-out;width:6px}.tp-rotv.tp-rotv-expanded .tp-rotv_m,.tp-fldv.tp-fldv-expanded>.tp-fldv_b>.tp-fldv_m{transform:none}.tp-rotv_c,.tp-fldv_c{box-sizing:border-box;height:0;opacity:0;overflow:hidden;padding-bottom:0;padding-top:0;position:relative;transition:height .2s ease-in-out,opacity .2s linear,padding .2s ease-in-out}.tp-rotv.tp-rotv-cpl:not(.tp-rotv-expanded) .tp-rotv_c,.tp-fldv.tp-fldv-cpl:not(.tp-fldv-expanded)>.tp-fldv_c{display:none}.tp-rotv.tp-rotv-expanded .tp-rotv_c,.tp-fldv.tp-fldv-expanded>.tp-fldv_c{opacity:1;padding-bottom:var(--cnt-vp);padding-top:var(--cnt-vp);transform:none;overflow:visible;transition:height .2s ease-in-out,opacity .2s linear .2s,padding .2s ease-in-out}.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw{background-color:var(--in-bg);border-radius:var(--bld-br);box-sizing:border-box;color:var(--in-fg);font-family:inherit;height:var(--cnt-usz);line-height:var(--cnt-usz);min-width:0;width:100%}.tp-txtv_i:hover,.tp-p2dpv_p:hover,.tp-colswv_sw:hover{background-color:var(--in-bg-h)}.tp-txtv_i:focus,.tp-p2dpv_p:focus,.tp-colswv_sw:focus{background-color:var(--in-bg-f)}.tp-txtv_i:active,.tp-p2dpv_p:active,.tp-colswv_sw:active{background-color:var(--in-bg-a)}.tp-txtv_i:disabled,.tp-p2dpv_p:disabled,.tp-colswv_sw:disabled{opacity:.5}.tp-lstv,.tp-coltxtv_m{position:relative}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m,.tp-coltxtv_mm{bottom:0;margin:auto;pointer-events:none;position:absolute;right:2px;top:0}.tp-lstv_m svg,.tp-coltxtv_mm svg{bottom:0;height:16px;margin:auto;position:absolute;right:0;top:0;width:16px}.tp-lstv_m svg path,.tp-coltxtv_mm svg path{fill:currentColor}.tp-sglv_i,.tp-mllv_i,.tp-grlv_g{background-color:var(--mo-bg);border-radius:var(--bld-br);box-sizing:border-box;color:var(--mo-fg);height:var(--cnt-usz);scrollbar-color:currentColor rgba(0,0,0,0);scrollbar-width:thin;width:100%}.tp-sglv_i::-webkit-scrollbar,.tp-mllv_i::-webkit-scrollbar,.tp-grlv_g::-webkit-scrollbar{height:8px;width:8px}.tp-sglv_i::-webkit-scrollbar-corner,.tp-mllv_i::-webkit-scrollbar-corner,.tp-grlv_g::-webkit-scrollbar-corner{background-color:rgba(0,0,0,0)}.tp-sglv_i::-webkit-scrollbar-thumb,.tp-mllv_i::-webkit-scrollbar-thumb,.tp-grlv_g::-webkit-scrollbar-thumb{background-clip:padding-box;background-color:currentColor;border:rgba(0,0,0,0) solid 2px;border-radius:4px}.tp-pndtxtv,.tp-coltxtv_w{display:flex}.tp-pndtxtv_a,.tp-coltxtv_c{width:100%}.tp-pndtxtv_a+.tp-pndtxtv_a,.tp-coltxtv_c+.tp-pndtxtv_a,.tp-pndtxtv_a+.tp-coltxtv_c,.tp-coltxtv_c+.tp-coltxtv_c{margin-left:2px}.tp-rotv{--bs-bg: var(--tp-base-background-color, hsl(230, 7%, 17%));--bs-br: var(--tp-base-border-radius, 6px);--bs-ff: var(--tp-base-font-family, Roboto Mono, Source Code Pro, Menlo, Courier, monospace);--bs-sh: var(--tp-base-shadow-color, rgba(0, 0, 0, 0.2));--bld-br: var(--tp-blade-border-radius, 2px);--bld-hp: var(--tp-blade-horizontal-padding, 4px);--bld-vw: var(--tp-blade-value-width, 160px);--btn-bg: var(--tp-button-background-color, hsl(230, 7%, 70%));--btn-bg-a: var(--tp-button-background-color-active, #d6d7db);--btn-bg-f: var(--tp-button-background-color-focus, #c8cad0);--btn-bg-h: var(--tp-button-background-color-hover, #bbbcc4);--btn-fg: var(--tp-button-foreground-color, hsl(230, 7%, 17%));--cnt-bg: var(--tp-container-background-color, rgba(187, 188, 196, 0.1));--cnt-bg-a: var(--tp-container-background-color-active, rgba(187, 188, 196, 0.25));--cnt-bg-f: var(--tp-container-background-color-focus, rgba(187, 188, 196, 0.2));--cnt-bg-h: var(--tp-container-background-color-hover, rgba(187, 188, 196, 0.15));--cnt-fg: var(--tp-container-foreground-color, hsl(230, 7%, 75%));--cnt-hp: var(--tp-container-horizontal-padding, 4px);--cnt-vp: var(--tp-container-vertical-padding, 4px);--cnt-usp: var(--tp-container-unit-spacing, 4px);--cnt-usz: var(--tp-container-unit-size, 20px);--in-bg: var(--tp-input-background-color, rgba(187, 188, 196, 0.1));--in-bg-a: var(--tp-input-background-color-active, rgba(187, 188, 196, 0.25));--in-bg-f: var(--tp-input-background-color-focus, rgba(187, 188, 196, 0.2));--in-bg-h: var(--tp-input-background-color-hover, rgba(187, 188, 196, 0.15));--in-fg: var(--tp-input-foreground-color, hsl(230, 7%, 75%));--lbl-fg: var(--tp-label-foreground-color, rgba(187, 188, 196, 0.7));--mo-bg: var(--tp-monitor-background-color, rgba(0, 0, 0, 0.2));--mo-fg: var(--tp-monitor-foreground-color, rgba(187, 188, 196, 0.7));--grv-fg: var(--tp-groove-foreground-color, rgba(187, 188, 196, 0.1))}.tp-btnv_b{width:100%}.tp-btnv_t{text-align:center}.tp-ckbv_l{display:block;position:relative}.tp-ckbv_i{left:0;opacity:0;position:absolute;top:0}.tp-ckbv_w{background-color:var(--in-bg);border-radius:var(--bld-br);cursor:pointer;display:block;height:var(--cnt-usz);position:relative;width:var(--cnt-usz)}.tp-ckbv_w svg{bottom:0;display:block;height:16px;left:0;margin:auto;opacity:0;position:absolute;right:0;top:0;width:16px}.tp-ckbv_w svg path{fill:none;stroke:var(--in-fg);stroke-width:2}.tp-ckbv_i:hover+.tp-ckbv_w{background-color:var(--in-bg-h)}.tp-ckbv_i:focus+.tp-ckbv_w{background-color:var(--in-bg-f)}.tp-ckbv_i:active+.tp-ckbv_w{background-color:var(--in-bg-a)}.tp-ckbv_i:checked+.tp-ckbv_w svg{opacity:1}.tp-ckbv.tp-v-disabled .tp-ckbv_w{opacity:.5}.tp-colv{position:relative}.tp-colv_h{display:flex}.tp-colv_s{flex-grow:0;flex-shrink:0;width:var(--cnt-usz)}.tp-colv_t{flex:1;margin-left:4px}.tp-colv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-colv.tp-colv-expanded.tp-colv-cpl .tp-colv_p{overflow:visible}.tp-colv.tp-colv-expanded .tp-colv_p{margin-top:var(--cnt-usp);opacity:1}.tp-colv .tp-popv{left:calc(-1*var(--cnt-hp));right:calc(-1*var(--cnt-hp));top:var(--cnt-usz)}.tp-colpv_h,.tp-colpv_ap{margin-left:6px;margin-right:6px}.tp-colpv_h{margin-top:var(--cnt-usp)}.tp-colpv_rgb{display:flex;margin-top:var(--cnt-usp);width:100%}.tp-colpv_a{display:flex;margin-top:var(--cnt-vp);padding-top:calc(var(--cnt-vp) + 2px);position:relative}.tp-colpv_a::before{background-color:var(--grv-fg);content:"";height:2px;left:calc(-1*var(--cnt-hp));position:absolute;right:calc(-1*var(--cnt-hp));top:0}.tp-colpv.tp-v-disabled .tp-colpv_a::before{opacity:.5}.tp-colpv_ap{align-items:center;display:flex;flex:3}.tp-colpv_at{flex:1;margin-left:4px}.tp-svpv{border-radius:var(--bld-br);outline:none;overflow:hidden;position:relative}.tp-svpv.tp-v-disabled{opacity:.5}.tp-svpv_c{cursor:crosshair;display:block;height:calc(var(--cnt-usz)*4);width:100%}.tp-svpv_m{border-radius:100%;border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;filter:drop-shadow(0 0 1px rgba(0, 0, 0, 0.3));height:12px;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;width:12px}.tp-svpv:focus .tp-svpv_m{border-color:#fff}.tp-hplv{cursor:pointer;height:var(--cnt-usz);outline:none;position:relative}.tp-hplv.tp-v-disabled{opacity:.5}.tp-hplv_c{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAABCAYAAABubagXAAAAQ0lEQVQoU2P8z8Dwn0GCgQEDi2OK/RBgYHjBgIpfovFh8j8YBIgzFGQxuqEgPhaDOT5gOhPkdCxOZeBg+IDFZZiGAgCaSSMYtcRHLgAAAABJRU5ErkJggg==);background-position:left top;background-repeat:no-repeat;background-size:100% 100%;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;position:absolute;top:50%;width:100%}.tp-hplv_m{border-radius:var(--bld-br);border:rgba(255,255,255,.75) solid 2px;box-shadow:0 0 2px rgba(0,0,0,.1);box-sizing:border-box;height:12px;left:50%;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;top:50%;width:12px}.tp-hplv:focus .tp-hplv_m{border-color:#fff}.tp-aplv{cursor:pointer;height:var(--cnt-usz);outline:none;position:relative;width:100%}.tp-aplv.tp-v-disabled{opacity:.5}.tp-aplv_b{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:4px 4px;background-position:0 0,2px 2px;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;overflow:hidden;position:absolute;top:50%;width:100%}.tp-aplv_c{bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv_m{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:12px 12px;background-position:0 0,6px 6px;border-radius:var(--bld-br);box-shadow:0 0 2px rgba(0,0,0,.1);height:12px;left:50%;margin-left:-6px;margin-top:-6px;overflow:hidden;pointer-events:none;position:absolute;top:50%;width:12px}.tp-aplv_p{border-radius:var(--bld-br);border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv:focus .tp-aplv_p{border-color:#fff}.tp-colswv{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:10px 10px;background-position:0 0,5px 5px;border-radius:var(--bld-br);overflow:hidden}.tp-colswv.tp-v-disabled{opacity:.5}.tp-colswv_sw{border-radius:0}.tp-colswv_b{cursor:pointer;display:block;height:var(--cnt-usz);left:0;position:absolute;top:0;width:var(--cnt-usz)}.tp-colswv_b:focus::after{border:rgba(255,255,255,.75) solid 2px;border-radius:var(--bld-br);bottom:0;content:"";display:block;left:0;position:absolute;right:0;top:0}.tp-coltxtv{display:flex;width:100%}.tp-coltxtv_m{margin-right:4px}.tp-coltxtv_ms{border-radius:var(--bld-br);color:var(--lbl-fg);cursor:pointer;height:var(--cnt-usz);line-height:var(--cnt-usz);padding:0 18px 0 4px}.tp-coltxtv_ms:hover{background-color:var(--in-bg-h)}.tp-coltxtv_ms:focus{background-color:var(--in-bg-f)}.tp-coltxtv_ms:active{background-color:var(--in-bg-a)}.tp-coltxtv_mm{color:var(--lbl-fg)}.tp-coltxtv.tp-v-disabled .tp-coltxtv_mm{opacity:.5}.tp-coltxtv_w{flex:1}.tp-dfwv{position:absolute;top:8px;right:8px;width:256px}.tp-fldv{position:relative}.tp-fldv_t{padding-left:4px}.tp-fldv_b:disabled .tp-fldv_m{display:none}.tp-fldv_c{padding-left:4px}.tp-fldv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--cnt-usz) + 4px);width:max(var(--bs-br),4px)}.tp-fldv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-fldv_b:hover+.tp-fldv_i{color:var(--cnt-bg-h)}.tp-fldv_b:focus+.tp-fldv_i{color:var(--cnt-bg-f)}.tp-fldv_b:active+.tp-fldv_i{color:var(--cnt-bg-a)}.tp-fldv.tp-v-disabled>.tp-fldv_i{opacity:.5}.tp-grlv{position:relative}.tp-grlv_g{display:block;height:calc(var(--cnt-usz)*3)}.tp-grlv_g polyline{fill:none;stroke:var(--mo-fg);stroke-linejoin:round}.tp-grlv_t{margin-top:-4px;transition:left .05s,top .05s;visibility:hidden}.tp-grlv_t.tp-grlv_t-a{visibility:visible}.tp-grlv_t.tp-grlv_t-in{transition:none}.tp-grlv.tp-v-disabled .tp-grlv_g{opacity:.5}.tp-grlv .tp-ttv{background-color:var(--mo-fg)}.tp-grlv .tp-ttv::before{border-top-color:var(--mo-fg)}.tp-lblv{align-items:center;display:flex;line-height:1.3;padding-left:var(--cnt-hp);padding-right:var(--cnt-hp)}.tp-lblv.tp-lblv-nol{display:block}.tp-lblv_l{color:var(--lbl-fg);flex:1;-webkit-hyphens:auto;hyphens:auto;overflow:hidden;padding-left:4px;padding-right:16px}.tp-lblv.tp-v-disabled .tp-lblv_l{opacity:.5}.tp-lblv.tp-lblv-nol .tp-lblv_l{display:none}.tp-lblv_v{align-self:flex-start;flex-grow:0;flex-shrink:0;width:var(--bld-vw)}.tp-lblv.tp-lblv-nol .tp-lblv_v{width:100%}.tp-lstv_s{padding:0 20px 0 var(--bld-hp);width:100%}.tp-lstv_m{color:var(--btn-fg)}.tp-sglv_i{padding-left:var(--bld-hp);padding-right:var(--bld-hp)}.tp-sglv.tp-v-disabled .tp-sglv_i{opacity:.5}.tp-mllv_i{display:block;height:calc(var(--cnt-usz)*3);line-height:var(--cnt-usz);padding-left:var(--bld-hp);padding-right:var(--bld-hp);resize:none;white-space:pre}.tp-mllv.tp-v-disabled .tp-mllv_i{opacity:.5}.tp-p2dv{position:relative}.tp-p2dv_h{display:flex}.tp-p2dv_b{height:var(--cnt-usz);margin-right:4px;position:relative;width:var(--cnt-usz)}.tp-p2dv_b svg{display:block;height:16px;left:50%;margin-left:-8px;margin-top:-8px;position:absolute;top:50%;width:16px}.tp-p2dv_b svg path{stroke:currentColor;stroke-width:2}.tp-p2dv_b svg circle{fill:currentColor}.tp-p2dv_t{flex:1}.tp-p2dv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-p2dv.tp-p2dv-expanded .tp-p2dv_p{margin-top:var(--cnt-usp);opacity:1}.tp-p2dv .tp-popv{left:calc(-1*var(--cnt-hp));right:calc(-1*var(--cnt-hp));top:var(--cnt-usz)}.tp-p2dpv{padding-left:calc(var(--cnt-usz) + 4px)}.tp-p2dpv_p{cursor:crosshair;height:0;overflow:hidden;padding-bottom:100%;position:relative}.tp-p2dpv.tp-v-disabled .tp-p2dpv_p{opacity:.5}.tp-p2dpv_g{display:block;height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.tp-p2dpv_ax{opacity:.1;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_l{opacity:.5;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_m{border:var(--in-fg) solid 1px;border-radius:50%;box-sizing:border-box;height:4px;margin-left:-2px;margin-top:-2px;position:absolute;width:4px}.tp-p2dpv_p:focus .tp-p2dpv_m{background-color:var(--in-fg);border-width:0}.tp-popv{background-color:var(--bs-bg);border-radius:var(--bs-br);box-shadow:0 2px 4px var(--bs-sh);display:none;max-width:var(--bld-vw);padding:var(--cnt-vp) var(--cnt-hp);position:absolute;visibility:hidden;z-index:1000}.tp-popv.tp-popv-v{display:block;visibility:visible}.tp-sldv.tp-v-disabled{opacity:.5}.tp-sldv_t{box-sizing:border-box;cursor:pointer;height:var(--cnt-usz);margin:0 6px;outline:none;position:relative}.tp-sldv_t::before{background-color:var(--in-bg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin:auto;position:absolute;right:0;top:0}.tp-sldv_k{height:100%;left:0;position:absolute;top:0}.tp-sldv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin-bottom:auto;margin-top:auto;position:absolute;right:0;top:0}.tp-sldv_k::after{background-color:var(--btn-bg);border-radius:var(--bld-br);bottom:0;content:"";display:block;height:12px;margin-bottom:auto;margin-top:auto;position:absolute;right:-6px;top:0;width:12px}.tp-sldv_t:hover .tp-sldv_k::after{background-color:var(--btn-bg-h)}.tp-sldv_t:focus .tp-sldv_k::after{background-color:var(--btn-bg-f)}.tp-sldv_t:active .tp-sldv_k::after{background-color:var(--btn-bg-a)}.tp-sldtxtv{display:flex}.tp-sldtxtv_s{flex:2}.tp-sldtxtv_t{flex:1;margin-left:4px}.tp-tabv{position:relative}.tp-tabv_t{align-items:flex-end;color:var(--cnt-bg);display:flex;overflow:hidden;position:relative}.tp-tabv_t:hover{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus){color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active){color:var(--cnt-bg-a)}.tp-tabv_t::before{background-color:currentColor;bottom:0;content:"";height:2px;left:0;pointer-events:none;position:absolute;right:0}.tp-tabv.tp-v-disabled .tp-tabv_t::before{opacity:.5}.tp-tabv.tp-tabv-nop .tp-tabv_t{height:calc(var(--cnt-usz) + 4px);position:relative}.tp-tabv.tp-tabv-nop .tp-tabv_t::before{background-color:var(--cnt-bg);bottom:0;content:"";height:2px;left:0;position:absolute;right:0}.tp-tabv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--cnt-usz) + 4px);width:max(var(--bs-br),4px)}.tp-tabv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-tabv_t:hover+.tp-tabv_i{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus)+.tp-tabv_i{color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active)+.tp-tabv_i{color:var(--cnt-bg-a)}.tp-tabv.tp-v-disabled>.tp-tabv_i{opacity:.5}.tp-tbiv{flex:1;min-width:0;position:relative}.tp-tbiv+.tp-tbiv{margin-left:2px}.tp-tbiv+.tp-tbiv.tp-v-disabled::before{opacity:.5}.tp-tbiv_b{display:block;padding-left:calc(var(--cnt-hp) + 4px);padding-right:calc(var(--cnt-hp) + 4px);position:relative;width:100%}.tp-tbiv_b:disabled{opacity:.5}.tp-tbiv_b::before{background-color:var(--cnt-bg);bottom:2px;content:"";left:0;pointer-events:none;position:absolute;right:0;top:0}.tp-tbiv_b:hover::before{background-color:var(--cnt-bg-h)}.tp-tbiv_b:focus::before{background-color:var(--cnt-bg-f)}.tp-tbiv_b:active::before{background-color:var(--cnt-bg-a)}.tp-tbiv_t{color:var(--cnt-fg);height:calc(var(--cnt-usz) + 4px);line-height:calc(var(--cnt-usz) + 4px);opacity:.5;overflow:hidden;position:relative;text-overflow:ellipsis}.tp-tbiv.tp-tbiv-sel .tp-tbiv_t{opacity:1}.tp-tbpv_c{padding-bottom:var(--cnt-vp);padding-left:4px;padding-top:var(--cnt-vp)}.tp-txtv{position:relative}.tp-txtv_i{padding-left:var(--bld-hp);padding-right:var(--bld-hp)}.tp-txtv.tp-txtv-fst .tp-txtv_i{border-bottom-right-radius:0;border-top-right-radius:0}.tp-txtv.tp-txtv-mid .tp-txtv_i{border-radius:0}.tp-txtv.tp-txtv-lst .tp-txtv_i{border-bottom-left-radius:0;border-top-left-radius:0}.tp-txtv.tp-txtv-num .tp-txtv_i{text-align:right}.tp-txtv.tp-txtv-drg .tp-txtv_i{opacity:.3}.tp-txtv_k{cursor:pointer;height:100%;left:calc(var(--bld-hp) - 5px);position:absolute;top:0;width:12px}.tp-txtv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";height:calc(var(--cnt-usz) - 4px);left:50%;margin-bottom:auto;margin-left:-1px;margin-top:auto;opacity:.1;position:absolute;top:0;transition:border-radius .1s,height .1s,transform .1s,width .1s;width:2px}.tp-txtv_k:hover::before,.tp-txtv.tp-txtv-drg .tp-txtv_k::before{opacity:1}.tp-txtv.tp-txtv-drg .tp-txtv_k::before{border-radius:50%;height:4px;transform:translateX(-1px);width:4px}.tp-txtv_g{bottom:0;display:block;height:8px;left:50%;margin:auto;overflow:visible;pointer-events:none;position:absolute;top:0;visibility:hidden;width:100%}.tp-txtv.tp-txtv-drg .tp-txtv_g{visibility:visible}.tp-txtv_gb{fill:none;stroke:var(--in-fg);stroke-dasharray:1}.tp-txtv_gh{fill:none;stroke:var(--in-fg)}.tp-txtv .tp-ttv{margin-left:6px;visibility:hidden}.tp-txtv.tp-txtv-drg .tp-ttv{visibility:visible}.tp-ttv{background-color:var(--in-fg);border-radius:var(--bld-br);color:var(--bs-bg);padding:2px 4px;pointer-events:none;position:absolute;transform:translate(-50%, -100%)}.tp-ttv::before{border-color:var(--in-fg) rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0);border-style:solid;border-width:2px;box-sizing:border-box;content:"";font-size:.9em;height:4px;left:50%;margin-left:-2px;position:absolute;top:100%;width:4px}.tp-rotv{background-color:var(--bs-bg);border-radius:var(--bs-br);box-shadow:0 2px 4px var(--bs-sh);font-family:var(--bs-ff);font-size:11px;font-weight:500;line-height:1;text-align:left}.tp-rotv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br);border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br);padding-left:calc(4px + var(--cnt-usz) + var(--cnt-hp));text-align:center}.tp-rotv.tp-rotv-expanded .tp-rotv_b{border-bottom-left-radius:0;border-bottom-right-radius:0;transition-delay:0s;transition-duration:0s}.tp-rotv.tp-rotv-not>.tp-rotv_b{display:none}.tp-rotv_b:disabled .tp-rotv_m{display:none}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst.tp-fldv-expanded>.tp-fldv_b{transition-delay:0s;transition-duration:0s}.tp-rotv_c .tp-fldv.tp-v-vlst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-right-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst{margin-top:calc(-1*var(--cnt-vp))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst>.tp-fldv_b{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst{margin-top:calc(-1*var(--cnt-vp))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst>.tp-tabv_t{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv.tp-v-disabled,.tp-rotv .tp-v-disabled{pointer-events:none}.tp-rotv.tp-v-hidden,.tp-rotv .tp-v-hidden{display:none}.tp-sprv_r{background-color:var(--grv-fg);border-width:0;display:block;height:2px;margin:0;width:100%}.tp-sprv.tp-v-disabled .tp-sprv_r{opacity:.5}',
            plugins: [
                ListBladePlugin,
                SeparatorBladePlugin,
                SliderBladePlugin,
                TabBladePlugin,
                TextBladePlugin
            ]
        });
    }
}
const VERSION = new Semver("4.0.3");

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["8QPX2","fBBA6"], "fBBA6", "parcelRequire5fbd")

//# sourceMappingURL=index.03356ed2.js.map
