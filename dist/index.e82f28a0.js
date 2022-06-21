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
})({"bFOAz":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "207a8fdfe82f28a0";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, importScripts */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
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
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else if ("reload" in location) location.reload();
            else {
                // Web extension context
                var ext = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
                if (ext && ext.runtime && ext.runtime.reload) ext.runtime.reload();
            }
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
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
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
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
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
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
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
                if (asset.type === "js") {
                    if (typeof document !== "undefined") {
                        let script = document.createElement("script");
                        script.src = asset.url;
                        return new Promise((resolve, reject)=>{
                            var _document$head;
                            script.onload = ()=>resolve(script);
                            script.onerror = reject;
                            (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
                        });
                    } else if (typeof importScripts === "function") return new Promise((resolve, reject)=>{
                        try {
                            importScripts(asset.url);
                        } catch (err) {
                            reject(err);
                        }
                    });
                }
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
function hmrApply(bundle, asset) {
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
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id1][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
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
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
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
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"dV6cC":[function(require,module,exports) {
"use strict";
// Elements
const modeBtns = document.querySelector(".btns");
const clockTypes = document.querySelector(".clock-types");
const stopwatchTime = document.querySelector(".modes__stopwatch-time");
const stopwatchBtns = document.querySelector(".modes__stopwatch-btns");
const stopwatchBtnStart = document.querySelector(".modes__stopwatch-btn--start");
const stopwatchBtnStop = document.querySelector(".modes__stopwatch-btn--stop");
const stopwatchMinEl = document.querySelector(".stopwatch-minutes");
const stopwatchSecEl = document.querySelector(".stopwatch-seconds");
const stopwatch100El = document.querySelector(".stopwatch-100th-seconds");
// Functions
const analogClock = function() {
    const secondHand = document.querySelector(".second-hand");
    const minuteHand = document.querySelector(".minute-hand");
    const hourHand = document.querySelector(".hour-hand");
    let rotationS, rotationM, rotationH;
    const rotateHands = function() {
        const now = new Date();
        const seconds = now.getSeconds();
        const minutes = now.getMinutes();
        const hours = now > 12 ? now.getHours() - 12 : now.getHours();
        rotationS = seconds * 6;
        rotationM = minutes * 6 + rotationS / 60;
        rotationH = hours * 30 + rotationM / 12;
        secondHand.style.transform = `translateX(-50%) rotate(${rotationS}deg)`;
        minuteHand.style.transform = `translateX(-50%) rotate(${rotationM}deg)`;
        hourHand.style.transform = `translateX(-50%) rotate(${rotationH}deg)`;
    };
    rotateHands();
    const analogClockInterval = setInterval(rotateHands, 1000);
    return analogClockInterval;
};
const digitalClock = function() {
    const digitalClockEl = document.querySelector(".modes__clock-type--digital");
    const displayTime = function() {
        const now = new Date();
        const options = {
            hour: "numeric",
            minute: "numeric",
            second: "numeric"
        };
        const time = new Intl.DateTimeFormat(navigator.language, options).format(now);
        digitalClockEl.textContent = time;
    };
    const digitalClockInterval = setInterval(displayTime, 1000);
    return digitalClockInterval;
};
let stopwatchMin, stopwatchSec, stopwatch100, stopwatchInterval;
const stopwatchInit = function() {
    stopwatchMin = 0;
    stopwatchSec = 0;
    stopwatch100 = 0;
    stopwatchMinEl.textContent = String(stopwatchMin).padStart(2, 0);
    stopwatchSecEl.textContent = String(stopwatchSec).padStart(2, 0);
    stopwatch100El.textContent = String(stopwatch100).padStart(2, 0);
    stopwatchInterval = undefined;
};
const startStopwatch = function() {
    this.querySelectorAll(".modes__stopwatch-icon").forEach((icon)=>icon.classList.toggle("hidden"));
    const stopwatchCallback = function() {
        if (stopwatch100 === 99) {
            stopwatch100 = 0;
            stopwatch100El.textContent = String(stopwatch100).padStart(2, 0);
            if (stopwatchSec === 59) {
                stopwatchSec = 0;
                stopwatchSecEl.textContent = String(stopwatchSec).padStart(2, 0);
                stopwatchMin++;
                stopwatchMinEl.textContent = String(stopwatchMin).padStart(2, 0);
            } else {
                stopwatchSec++;
                stopwatchSecEl.textContent = String(stopwatchSec).padStart(2, 0);
            }
        } else {
            stopwatch100++;
            stopwatch100El.textContent = String(stopwatch100).padStart(2, 0);
        }
    };
    if (!stopwatchInterval) stopwatchInterval = setInterval(stopwatchCallback, 10);
    else {
        clearInterval(stopwatchInterval);
        stopwatchInterval = undefined;
    }
};
const stopStopwatch = function() {
    clearInterval(stopwatchInterval);
    stopwatchInit();
    document.querySelector(".modes__stopwatch-icon--play").classList.remove("hidden");
    document.querySelector(".modes__stopwatch-icon--pause").classList.add("hidden");
};
// Event listeners
modeBtns.addEventListener("click", function(e) {
    // if (e.target.classList.contains('btns__btn')) {
    const modeBtn = e.target.closest(".btns__btn");
    if (!modeBtn) return;
    const { mode: mode1  } = modeBtn.dataset;
    [
        ...this.children
    ].forEach((btn)=>btn.classList.remove("btns__btn--active"));
    modeBtn.classList.add("btns__btn--active");
    document.querySelectorAll(".mode").forEach((mode)=>mode.classList.add("hidden"));
    document.querySelector(`.modes__${mode1}`).classList.remove("hidden");
    const modeBtnTimer = e.target.closest(".btns__btn--timer");
    if (!modeBtnTimer) // if (!e.target.classList.contains('btns__btn--timer')) {
    {
        if (sum === 0 && !timerInterval) {
            // if (!timerInterval) {
            firstTime = true;
            timerTime.classList.remove("hidden");
            timerInputs.classList.add("hidden");
            timerTime.addEventListener("click", showInputs);
            timerTime.classList.add("hoverable");
            timerTimeHours.textContent = "00";
            timerTimeMinutes.textContent = "00";
            timerTimeSeconds.textContent = "00";
        }
    }
// }
// }
});
clockTypes.addEventListener("click", function(e) {
    e.preventDefault();
    if (e.target.classList.contains("clock-types__type")) {
        document.querySelectorAll(".clock-types__type").forEach((el)=>el.classList.remove("clock-types__type--active"));
        e.target.classList.add("clock-types__type--active");
        document.querySelectorAll(".modes__clock-type").forEach((el)=>el.classList.add("hidden"));
        document.querySelector(`.modes__clock-type--${e.target.dataset.type}`).classList.remove("hidden");
    }
});
analogClock();
digitalClock();
stopwatchInit();
stopwatchBtnStart.addEventListener("click", startStopwatch);
stopwatchBtnStop.addEventListener("click", stopStopwatch);
stopwatchTime.addEventListener("click", startStopwatch.bind(stopwatchBtnStart));
// timer
const inputHoursEl = document.querySelector(".form__input--hours");
const inputMinutesEl = document.querySelector(".form__input--minutes");
const inputSecondsEl = document.querySelector(".form__input--seconds");
const timerBtnStart = document.querySelector(".modes__timer-btn--start");
const timerBtnStop = document.querySelector(".modes__timer-btn--stop");
const timerInputs = document.querySelector(".form__inputs");
const timerTime = document.querySelector(".modes__timer-time");
const timerTimeHours = document.querySelector(".timer-time__hours");
const timerTimeMinutes = document.querySelector(".timer-time__minutes");
const timerTimeSeconds = document.querySelector(".timer-time__seconds");
let timerInterval, newInputHours, newInputMinutes, newInputSeconds;
let sum = 0;
let firstTime = true;
let hoursInitial, minutesInitial, secondsInitial;
const timerAlert = document.createElement("div");
timerAlert.classList.add("timer__alert-window");
timerAlert.innerHTML = '<p class="timer__alert-window-text">Time\'s up!</p><button class="timer__alert-window-btn">OK</button>';
timerAlert.addEventListener("click", function(e) {
    if (e.target.classList.contains("timer__alert-window-btn")) this.remove();
});
const blurCallback = function() {
    this.blur();
};
const timerInit = function() {
    clearInterval(timerInterval);
    timerInterval = undefined;
    timerTime.classList.add("hoverable");
    inputHoursEl.value = "";
    inputMinutesEl.value = "";
    inputSecondsEl.value = "";
    timerBtnStart.querySelector(".modes__timer-icon--play").classList.remove("hidden");
    timerBtnStart.querySelector(".modes__timer-icon--pause").classList.add("hidden");
    document.querySelectorAll(".form__input").forEach((el)=>{
        el.classList.remove("no-focus");
        el.removeEventListener("focus", blurCallback);
    });
};
const showInputs = function() {
    timerTime.classList.add("hidden");
    timerInputs.classList.remove("hidden");
    this.removeEventListener("click", showInputs);
};
timerTime.addEventListener("click", showInputs);
timerTime.classList.add("hoverable");
timerInputs.querySelectorAll(".form__input").forEach((el)=>el.addEventListener("input", function() {
        if (el.value.length > 2) el.value = el.value.slice(0, 2);
    }));
timerInputs.querySelectorAll(".form__input").forEach((el)=>el.addEventListener("keydown", function(e) {
        if ([
            "0",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "Backspace"
        ].indexOf(e.key) === -1) e.preventDefault();
    }));
timerBtnStart.addEventListener("click", function(e) {
    const inputHours = +inputHoursEl.value;
    const inputMinutes = +inputMinutesEl.value;
    const inputSeconds = +inputSecondsEl.value;
    sum = inputHours * 3600 + inputMinutes * 60 + inputSeconds;
    const timerCallback = function() {
        if (sum <= 0 || !sum) {
            timerInit();
            return;
        }
        timerTime.classList.remove("hoverable");
        document.querySelectorAll(".form__input").forEach((el)=>{
            el.classList.add("no-focus");
            el.addEventListener("focus", blurCallback);
        });
        firstTime = false;
        newInputHours = Math.floor(sum / 3600);
        newInputMinutes = Math.floor(sum % 3600 / 60);
        newInputSeconds = Math.floor(sum % 3600 % 60);
        if (!hoursInitial && !minutesInitial && !secondsInitial) {
            hoursInitial = newInputHours;
            minutesInitial = newInputMinutes;
            secondsInitial = newInputSeconds;
        }
        document.querySelector(".form__inputs").classList.add("hidden");
        document.querySelector(".modes__timer-time").classList.remove("hidden");
        timerTimeHours.textContent = inputHoursEl.value = String(newInputHours).padStart(2, 0);
        timerTimeMinutes.textContent = inputMinutesEl.value = String(newInputMinutes).padStart(2, 0);
        timerTimeSeconds.textContent = inputSecondsEl.value = String(newInputSeconds).padStart(2, 0);
    };
    timerCallback();
    sum > 0 && this.querySelectorAll(".modes__timer-icon").forEach((icon)=>icon.classList.toggle("hidden"));
    if (!timerInterval) timerInterval = setInterval(()=>{
        sum--;
        timerCallback();
        if (sum === 0) {
            document.body.prepend(timerAlert);
            document.querySelector(".form__inputs").classList.add("hidden");
            document.querySelector(".modes__timer-time").classList.remove("hidden");
            timerTime.addEventListener("click", showInputs);
            timerTimeHours.textContent = "00";
            timerTimeMinutes.textContent = "00";
            timerTimeSeconds.textContent = "00";
            inputHoursEl.value = `${hoursInitial}`.padStart(2, 0);
            inputMinutesEl.value = `${minutesInitial}`.padStart(2, 0);
            inputSecondsEl.value = `${secondsInitial}`.padStart(2, 0);
            hoursInitial = undefined;
            minutesInitial = undefined;
            secondsInitial = undefined;
        }
    }, 1000);
    else {
        clearInterval(timerInterval);
        timerInterval = undefined;
    }
});
timerBtnStop.addEventListener("click", function() {
    timerInit();
    if (firstTime) return;
    document.querySelector(".form__inputs").classList.remove("hidden");
    document.querySelector(".modes__timer-time").classList.add("hidden");
    inputHoursEl.value = `${hoursInitial}`.padStart(2, 0);
    inputMinutesEl.value = `${minutesInitial}`.padStart(2, 0);
    inputSecondsEl.value = `${secondsInitial}`.padStart(2, 0);
});

},{}]},["bFOAz","dV6cC"], "dV6cC", "parcelRequire859b")

//# sourceMappingURL=index.e82f28a0.js.map
