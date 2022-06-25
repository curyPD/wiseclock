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
})({"2kSJi":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "d113fd8ce37f48ea";
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

},{}],"aenu9":[function(require,module,exports) {
var _clockViewJs = require("./views/clockView.js");
var _btnsViewJs = require("./views/btnsView.js");
var _stopwatchViewJs = require("./views/stopwatchView.js");
var _timerViewJs = require("./views/timerView.js");
var _helpersJs = require("./helpers.js");
var _popupViewJs = require("./views/popupView.js");
var _modelJs = require("./model.js");
const controlSwitchClockMode = function(e) {
    const btn = e.target.closest(".clock-types__type");
    if (!btn) return;
    const { type  } = btn.dataset;
    _modelJs.state.curClockMode = type;
    this.querySelectorAll(".clock-types__type").forEach((el)=>el.classList.remove("clock-types__type--active"));
    btn.classList.add("clock-types__type--active");
    [
        _clockViewJs.digitalClockEl,
        _clockViewJs.analogClockEl
    ].forEach((el)=>el.classList.toggle("hidden"));
};
const controlBtnClick = function(e) {
    const btn = e.target.closest(".btns__btn");
    if (!btn) return;
    const { mode  } = btn.dataset;
    document.querySelectorAll(".mode").forEach((el)=>el.classList.add("hidden"));
    document.querySelector(`.modes__${mode}`).classList.remove("hidden");
    _btnsViewJs.changeActiveBtn(btn);
};
const controlStartStopwatch = function() {
    if (!_modelJs.state.stopwatchRunning) {
        _modelJs.state.stopwatch = _stopwatchViewJs.runStopwatch(_modelJs.state);
        _modelJs.state.stopwatchRunning = true;
    } else if (_modelJs.state.stopwatchRunning) {
        clearInterval(_modelJs.state.stopwatch);
        _modelJs.state.stopwatch = undefined;
        _modelJs.state.stopwatchRunning = false;
    }
    _stopwatchViewJs.switchStartBtnIcons();
};
const controlStopStopwatch = function() {
    clearInterval(_modelJs.state.stopwatch);
    _modelJs.state.stopwatch = undefined;
    _modelJs.state.stopwatchRunning = false;
    _modelJs.state.stopwatch100Secs = 0;
    _modelJs.state.stopwatchSecs = 0;
    _modelJs.state.stopwatchMins = 0;
    _stopwatchViewJs.stopStopwatchVisually();
};
const controlTimerClick = function() {
    if (_modelJs.state.timerRunning) return;
    _timerViewJs.switchInputsWithTimer("timer");
};
const controlStartTimer = function(e) {
    if (!Number(_timerViewJs.inputH.value) && !Number(_timerViewJs.inputM.value) && !Number(_timerViewJs.inputS.value)) {
        _timerViewJs.switchInputsWithTimer("inputs", _modelJs.state.timerRunningTime);
        _modelJs.stopTimer();
        _modelJs.state.timerRunningTime = 0;
        _timerViewJs.textBtn.classList.add("hoverable");
        return;
    }
    if (!_modelJs.state.timer && !_modelJs.state.timerRunning) {
        const totalTime = (0, _helpersJs.calculateTotalTime)(+_timerViewJs.inputH.value, +_timerViewJs.inputM.value, +_timerViewJs.inputS.value);
        _modelJs.state.timerInitialTime = _modelJs.state.timerRunningTime = totalTime;
        _timerViewJs.switchInputsWithTimer("inputs", totalTime);
        _timerViewJs.switchStartBtnIcons();
        runTimer();
        _timerViewJs.textBtn.classList.remove("hoverable");
        _modelJs.state.timerRunning = true;
        return;
    }
    if (_modelJs.state.timer && _modelJs.state.timerRunning) {
        clearInterval(_modelJs.state.timer);
        _timerViewJs.switchStartBtnIcons();
        _modelJs.state.timer = undefined;
        return;
    }
    if (!_modelJs.state.timer && _modelJs.state.timerRunning) {
        runTimer(false);
        _timerViewJs.switchStartBtnIcons();
        return;
    }
};
const controlStopTimer = function() {
    if (!_modelJs.state.timer && !_modelJs.state.timerRunning) {
        _timerViewJs.switchInputsWithTimer("inputs", _modelJs.state.timerRunningTime);
        _timerViewJs.textBtn.classList.add("hoverable");
        return;
    }
    clearInterval(_modelJs.state.timer);
    _timerViewJs.switchStartBtnIcons("play");
    _modelJs.state.timer = undefined;
    _modelJs.state.timerRunning = false;
    _modelJs.state.timerRunningTime = 0;
    _timerViewJs.switchInputsWithTimer("timer", _modelJs.state.timerInitialTime);
};
const runTimer = function(runImmediately = true) {
    if (document.querySelector(".timer__alert-window")) (0, _popupViewJs.hidePopup).call(document.querySelector(".timer__alert-window"));
    const timer = ()=>{
        if (_modelJs.state.timerRunningTime === 0) {
            _modelJs.stopTimer();
            _timerViewJs.switchInputsWithTimer("timer", _modelJs.state.timerInitialTime);
            _timerViewJs.switchStartBtnIcons("play");
            (0, _popupViewJs.renderTimerPopup)();
            return;
        }
        _timerViewJs.displayTimerTime(_modelJs.state.timerRunningTime);
        --_modelJs.state.timerRunningTime;
    };
    runImmediately && timer();
    _modelJs.state.timer = setInterval(timer, 1000);
};
const init = function() {
    _clockViewJs.analogClock();
    _clockViewJs.digitalClock();
    _clockViewJs.addHandlerSwitchClockMode(controlSwitchClockMode);
    _btnsViewJs.addHandlerBtnClick(controlBtnClick);
    _btnsViewJs.addHandlerHoverBtn();
    _stopwatchViewJs.addHandlerStartStopwatch(controlStartStopwatch);
    _stopwatchViewJs.addHandlerStopStopwatch(controlStopStopwatch);
    _timerViewJs.addHandlerTextBtnClick(controlTimerClick);
    _timerViewJs.addHandlerStartBtnClick(controlStartTimer);
    _timerViewJs.addHandlerStopBtnClick(controlStopTimer);
    _timerViewJs.addHandlerCheckInput();
};
init();

},{"./views/clockView.js":"ltQkn","./views/btnsView.js":"edVKv","./views/stopwatchView.js":"kyOYi","./views/timerView.js":"fNwdq","./helpers.js":"hGI1E","./model.js":"Y4A21","./views/popupView.js":"57c0M"}],"ltQkn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "digitalClockEl", ()=>digitalClockEl);
parcelHelpers.export(exports, "analogClockEl", ()=>analogClockEl);
parcelHelpers.export(exports, "addHandlerSwitchClockMode", ()=>addHandlerSwitchClockMode);
parcelHelpers.export(exports, "digitalClock", ()=>digitalClock);
parcelHelpers.export(exports, "analogClock", ()=>analogClock);
const digitalClockEl = document.querySelector(".modes__clock-type--digital");
const analogClockEl = document.querySelector(".modes__clock-type--analog");
const clockTypeBtns = document.querySelector(".clock-types");
const addHandlerSwitchClockMode = function(handler) {
    clockTypeBtns.addEventListener("click", handler);
};
const digitalClock = function() {
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
    displayTime();
    const digitalClockInterval = setInterval(displayTime, 1000);
    return digitalClockInterval;
};
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
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
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

},{}],"edVKv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "btnsContainer", ()=>btnsContainer);
parcelHelpers.export(exports, "addHandlerBtnClick", ()=>addHandlerBtnClick);
parcelHelpers.export(exports, "changeActiveBtn", ()=>changeActiveBtn);
parcelHelpers.export(exports, "addHandlerHoverBtn", ()=>addHandlerHoverBtn);
const btnsContainer = document.querySelector(".btns");
const addHandlerBtnClick = function(handler) {
    btnsContainer.addEventListener("click", handler);
};
const changeActiveBtn = function(btn) {
    [
        ...btnsContainer.children
    ].forEach((el)=>el.classList.remove("btns__btn--active"));
    btn.classList.add("btns__btn--active");
};
const addHandlerHoverBtn = function() {
    btnsContainer.addEventListener("mouseover", function(e) {
        const btn = e.target.closest(".btns__btn");
        if (!btn) return;
        btn.querySelector(".btns__btn-title").classList.remove("transparent");
    });
    btnsContainer.addEventListener("mouseout", function(e) {
        const btn = e.target.closest(".btns__btn");
        if (!btn) return;
        btn.querySelector(".btns__btn-title").classList.add("transparent");
    });
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kyOYi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "addHandlerStartStopwatch", ()=>addHandlerStartStopwatch);
parcelHelpers.export(exports, "addHandlerStopStopwatch", ()=>addHandlerStopStopwatch);
parcelHelpers.export(exports, "stopStopwatchVisually", ()=>stopStopwatchVisually);
parcelHelpers.export(exports, "switchStartBtnIcons", ()=>switchStartBtnIcons);
parcelHelpers.export(exports, "runStopwatch", ()=>runStopwatch);
const stopwatchMins = document.querySelector(".stopwatch-minutes");
const stopwatchSecs = document.querySelector(".stopwatch-seconds");
const stopwatch100Secs = document.querySelector(".stopwatch-100th-seconds");
const btnStart = document.querySelector(".modes__stopwatch-btn--start");
const textBtnStart = document.querySelector(".modes__stopwatch-time");
const btnStop = document.querySelector(".modes__stopwatch-btn--stop");
const addHandlerStartStopwatch = function(handler) {
    [
        btnStart,
        textBtnStart
    ].forEach((el)=>el.addEventListener("click", handler));
};
const addHandlerStopStopwatch = function(handler) {
    btnStop.addEventListener("click", handler);
};
const stopStopwatchVisually = function() {
    stopwatchMins.textContent = "00";
    stopwatchSecs.textContent = "00";
    stopwatch100Secs.textContent = "00";
    btnStart.querySelectorAll(".modes__stopwatch-icon").forEach((el)=>el.classList.add("hidden"));
    btnStart.querySelector(".modes__stopwatch-icon--play").classList.remove("hidden");
};
const switchStartBtnIcons = function() {
    btnStart.querySelectorAll(".modes__stopwatch-icon").forEach((el)=>el.classList.toggle("hidden"));
};
const runStopwatch = function(data) {
    const stopwatch = function() {
        if (data.stopwatch100Secs === 99) {
            ++data.stopwatchSecs;
            data.stopwatch100Secs = 0;
        }
        if (data.stopwatchSecs === 59) {
            ++data.stopwatchMins;
            data.stopwatchSecs = 0;
        }
        if (data.stopwatch100Secs < 99) ++data.stopwatch100Secs;
        stopwatchMins.textContent = `${data.stopwatchMins}`.padStart(2, "0");
        stopwatchSecs.textContent = `${data.stopwatchSecs}`.padStart(2, "0");
        stopwatch100Secs.textContent = `${data.stopwatch100Secs}`.padStart(2, "0");
    };
    stopwatch();
    const stopwatchInterval = setInterval(stopwatch, 10);
    return stopwatchInterval;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fNwdq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "textBtn", ()=>textBtn);
parcelHelpers.export(exports, "inputH", ()=>inputH);
parcelHelpers.export(exports, "inputM", ()=>inputM);
parcelHelpers.export(exports, "inputS", ()=>inputS);
parcelHelpers.export(exports, "addHandlerTextBtnClick", ()=>addHandlerTextBtnClick);
parcelHelpers.export(exports, "switchStartBtnIcons", ()=>switchStartBtnIcons);
parcelHelpers.export(exports, "switchInputsWithTimer", ()=>switchInputsWithTimer);
parcelHelpers.export(exports, "addHandlerStartBtnClick", ()=>addHandlerStartBtnClick);
parcelHelpers.export(exports, "addHandlerStopBtnClick", ()=>addHandlerStopBtnClick);
parcelHelpers.export(exports, "addHandlerCheckInput", ()=>addHandlerCheckInput);
parcelHelpers.export(exports, "displayTimerTime", ()=>displayTimerTime);
var _helpers = require("../helpers");
const textBtn = document.querySelector(".modes__timer-time");
const timerHrsEl = document.querySelector(".timer-time__hours");
const timerMinsEl = document.querySelector(".timer-time__minutes");
const timerSecsEl = document.querySelector(".timer-time__seconds");
const formInputs = document.querySelector(".form__inputs");
const formInputHrsEl = document.querySelector(".form__input--hours");
const formInputMinsEl = document.querySelector(".form__input--minutes");
const formInputSecsEl = document.querySelector(".form__input--seconds");
const btnStart = document.querySelector(".modes__timer-btn--start");
const btnStop = document.querySelector(".modes__timer-btn--stop");
const inputH = document.querySelector(".form__input--hours");
const inputM = document.querySelector(".form__input--minutes");
const inputS = document.querySelector(".form__input--seconds");
const addHandlerTextBtnClick = function(handler) {
    textBtn.addEventListener("click", handler);
};
const switchStartBtnIcons = function(icon) {
    if (!icon) {
        btnStart.querySelectorAll(".modes__timer-icon").forEach((el)=>el.classList.toggle("hidden"));
        return;
    }
    btnStart.querySelectorAll(".modes__timer-icon").forEach((el)=>el.classList.add("hidden"));
    btnStart.querySelector(`.modes__timer-icon--${icon}`).classList.remove("hidden");
};
const switchInputsWithTimer = function(curMode, timeToDisplay) {
    if (curMode === "timer") {
        textBtn.classList.add("hidden");
        displayTimerTimeInInputs(timeToDisplay);
        formInputs.classList.remove("hidden");
    }
    if (curMode === "inputs") {
        textBtn.classList.remove("hidden");
        displayTimerTime(timeToDisplay);
        formInputs.classList.add("hidden");
    }
};
const addHandlerStartBtnClick = function(handler) {
    btnStart.addEventListener("click", handler);
};
const addHandlerStopBtnClick = function(handler) {
    btnStop.addEventListener("click", handler);
};
const addHandlerCheckInput = function() {
    formInputs.addEventListener("input", function(e) {
        const inputEl = e.target.closest(".form__input");
        if (!inputEl) return;
        const input = inputEl.value;
        if (e.data === "+" || e.data === "-" || e.data === ".") inputEl.value = input.slice(0, input.length - 1);
        if (!Number.isFinite(+input)) {
            inputEl.value = "";
            return;
        }
        if (input.length > 2) inputEl.value = input.slice(0, 2);
    });
};
const displayTimerTime = function(time) {
    const { newHrs , newMins , newSecs  } = (0, _helpers.calculateNewTime)(time);
    timerHrsEl.textContent = `${newHrs}`.padStart(2, "0");
    timerMinsEl.textContent = `${newMins}`.padStart(2, "0");
    timerSecsEl.textContent = `${newSecs}`.padStart(2, "0");
};
const displayTimerTimeInInputs = function(time) {
    const { newHrs , newMins , newSecs  } = (0, _helpers.calculateNewTime)(time);
    if (!newHrs || !newMins || !newSecs) formInputHrsEl.value = formInputMinsEl.value = formInputSecsEl.value = "";
    formInputHrsEl.value = newHrs === 0 ? "" : `${newHrs}`.padStart(2, "0");
    formInputMinsEl.value = newMins === 0 ? "" : `${newMins}`.padStart(2, "0");
    formInputSecsEl.value = newSecs === 0 ? "" : `${newSecs}`.padStart(2, "0");
};

},{"../helpers":"hGI1E","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hGI1E":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "calculateNewTime", ()=>calculateNewTime);
parcelHelpers.export(exports, "calculateTotalTime", ()=>calculateTotalTime);
const calculateNewTime = function(time) {
    const newHrs = Math.floor(time / 3600);
    const newMins = Math.floor(time % 3600 / 60);
    const newSecs = time % 3600 % 60;
    return {
        newHrs,
        newMins,
        newSecs
    };
};
const calculateTotalTime = function(hrs, mins, secs) {
    return hrs * 3600 + mins * 60 + secs;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"Y4A21":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state);
parcelHelpers.export(exports, "stopTimer", ()=>stopTimer);
const state = {
    curMode: "clock",
    curClockMode: "analog",
    stopwatch: undefined,
    stopwatchRunning: false,
    stopwatchMins: 0,
    stopwatchSecs: 0,
    stopwatch100Secs: 0,
    timer: undefined,
    timerRunning: false,
    timerInitialTime: 0,
    timerRunningTime: 0
};
const stopTimer = function() {
    clearInterval(state.timer);
    state.timerRunning = false;
    state.timer = undefined;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"57c0M":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "renderTimerPopup", ()=>renderTimerPopup);
parcelHelpers.export(exports, "hidePopup", ()=>hidePopup);
const renderTimerPopup = function() {
    const popup = document.createElement("div");
    popup.classList.add("timer__alert-window", "slide-down-animation");
    popup.innerHTML = `
    <p class="timer__alert-window-text">Time's up!</p>
    <button class="timer__alert-window-btn">OK</button>
  `;
    popup.querySelector(".timer__alert-window-btn").addEventListener("click", hidePopup);
    document.body.append(popup);
};
const hidePopup = function(e) {
    this.closest(".timer__alert-window").classList.remove("slide-down-animation");
    this.closest(".timer__alert-window").classList.add("slide-up-animation");
    setTimeout(()=>this.closest(".timer__alert-window").remove(), 300);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["2kSJi","aenu9"], "aenu9", "parcelRequire859b")

//# sourceMappingURL=index.e37f48ea.js.map
